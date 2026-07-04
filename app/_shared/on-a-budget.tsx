import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCityData } from "@/data";
import { getHotels } from "@/data/hotels";
import { cityVars } from "@/lib/style";
import {
  STR,
  fmt,
  hreflangs,
  localePath,
  type Locale,
} from "@/lib/i18n";
import { articleSchema, breadcrumbSchema, faqSchema, type Faq } from "@/lib/seo";
import { BoardingPass } from "@/components/BoardingPass";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqSection } from "@/components/FaqSection";
import { HotelsRail } from "@/components/HotelsRail";
import { JsonLd } from "@/components/JsonLd";
import { Stamp } from "@/components/Stamp";
import { Stay22Map } from "@/components/Stay22Map";

type Params = Promise<{ city: string }>;

export function makeBudgetMetadata(locale: Locale) {
  return async function generateMetadata({
    params,
  }: {
    params: Params;
  }): Promise<Metadata> {
    const { city: slug } = await params;
    const data = getCityData(slug, locale);
    if (!data) return {};
    const { city } = data;
    const t = STR[locale].bud;
    const path = `/${city.slug}/on-a-budget`;
    return {
      title: fmt(t.metaTitle, {
        city: city.name,
        price: city.budgetPerDay.budget,
      }),
      description: fmt(t.metaDesc, {
        city: city.name,
        price: city.budgetPerDay.budget,
      }),
      alternates: {
        canonical: localePath(locale, path),
        languages: hreflangs(path),
      },
    };
  };
}

export function makeBudgetPage(locale: Locale) {
  return async function BudgetPage({ params }: { params: Params }) {
    const { city: slug } = await params;
    const data = getCityData(slug, locale);
    if (!data) notFound();
    const { city, neighborhoods, pois } = data;
    const t = STR[locale];
    const lp = (p: string) => localePath(locale, p);
    const path = `/${city.slug}/on-a-budget`;

    const budgetHood =
      neighborhoods.find((n) => n.bestFor.includes("budget")) ??
      neighborhoods[0];
    const freePois = pois.filter(
      (p) =>
        !p.needsBooking &&
        (p.kind === "viewpoint" || p.kind === "park" || p.kind === "sight")
    );
    const foodPois = pois.filter((p) => p.kind === "food");

    const answer = fmt(t.bud.answer, {
      city: city.name,
      price: city.budgetPerDay.budget,
      hood: budgetHood.name,
      walk: city.centerWalkable ? t.bud.walkCompact : t.bud.walkZones,
      anchors: freePois
        .slice(0, 2)
        .map((p) => p.name)
        .join(" / "),
      airport: city.airportToCenter,
    });

    const faqs: Faq[] = [
      { q: fmt(t.bud.faqCostQ, { city: city.name }), a: answer },
      {
        q: fmt(t.bud.faqFreeQ, { city: city.name }),
        a: fmt(t.bud.faqFreeA, {
          city: city.name,
          list: freePois
            .slice(0, 4)
            .map((p) => p.name)
            .join(", "),
        }),
      },
      {
        q: fmt(t.bud.faqCheapAreaQ, { city: city.name }),
        a: `${budgetHood.name}. ${budgetHood.vibe}`,
      },
    ];

    return (
      <div style={cityVars(city)}>
        <JsonLd
          data={[
            articleSchema({
              title: fmt(t.bud.metaTitle, {
                city: city.name,
                price: city.budgetPerDay.budget,
              }),
              description: answer.slice(0, 160),
              path: lp(path),
            }),
            faqSchema(faqs),
            breadcrumbSchema([
              { name: city.name, path: lp(`/${city.slug}`) },
              { name: t.bud.h1Suffix, path: lp(path) },
            ]),
          ]}
        />

        <section className="border-b-2 border-ink bg-paper">
          <div className="mx-auto max-w-6xl px-4 pb-12 pt-10">
            <Breadcrumbs
              locale={locale}
              items={[
                { name: city.name, path: `/${city.slug}` },
                { name: t.bud.h1Suffix, path },
              ]}
            />
            <div className="mt-8">
              <Stamp color="#0e9b76">
                {fmt(t.stamp.perDay, { price: city.budgetPerDay.budget })}
              </Stamp>
            </div>
            <h1 className="font-display mt-4 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
              <span className="highlight-city">{city.name}</span>{" "}
              {t.bud.h1Suffix}
            </h1>
          </div>
        </section>

        <div className="mx-auto max-w-3xl space-y-14 px-4 py-12">
          <BoardingPass
            city={city}
            kicker={t.bp.budgetPass}
            answer={answer}
            fields={[
              {
                label: t.bp.dailyTarget,
                value: `${city.budgetPerDay.budget} EUR`,
              },
              { label: t.bp.sleepIn, value: budgetHood.name },
              {
                label: t.bp.airport,
                value: city.airportToCenter.split(",")[0],
              },
              { label: t.bp.freeSights, value: `${freePois.length}+` },
            ]}
          />

          <HotelsRail
            city={city}
            hotels={getHotels(city.slug, locale).filter(
              (h) => h.band !== "€€€"
            )}
            columns={2}
            locale={locale}
            title={t.bud.hotelsTitle}
            intro={fmt(t.bud.hotelsIntro, { price: city.budgetPerDay.mid })}
          />

          <section>
            <h2 className="font-display mb-4 text-3xl font-semibold tracking-tight">
              {t.bud.freeTitle}
            </h2>
            <p className="mb-5 leading-relaxed text-ink/80">
              {t.bud.freeIntro}
            </p>
            <ul className="space-y-4">
              {freePois.map((p) => (
                <li
                  key={p.slug}
                  className="rounded-2xl bg-paper p-5 hard-shadow"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="font-semibold">{p.name}</p>
                    <span className="label-mono text-viridian">
                      {t.common.free}
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-ink/80">
                    <span
                      className="label-mono mr-2"
                      style={{ color: "var(--city)" }}
                    >
                      {t.common.tip}
                    </span>
                    {p.tip}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          {foodPois.length ? (
            <section>
              <h2 className="font-display mb-4 text-3xl font-semibold tracking-tight">
                {t.bud.eatTitle}
              </h2>
              <ul className="space-y-4">
                {foodPois.map((p) => (
                  <li
                    key={p.slug}
                    className="rounded-2xl border-2 border-ink bg-paper p-5"
                  >
                    <p className="font-semibold">{p.name}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink/80">
                      {p.tip}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <section>
            <h2 className="font-display mb-4 text-3xl font-semibold tracking-tight">
              {fmt(t.bud.sleepTitle, { hood: budgetHood.name })}
            </h2>
            <p className="mb-5 leading-relaxed text-ink/85">
              {budgetHood.vibe}
            </p>
            <Stay22Map
              lat={budgetHood.lat}
              lng={budgetHood.lng}
              title={fmt(t.stay22.hotelsIn, { name: budgetHood.name })}
              accent={city.accent.from}
              locale={locale}
            />
          </section>

          <p className="text-ink/80">
            {t.bud.orderNote}{" "}
            <Link
              href={lp(`/${city.slug}/${city.idealDays}-days`)}
              className="underline underline-offset-2"
            >
              {fmt(t.bud.orderLink, {
                days: city.idealDays,
                city: city.name,
              })}
            </Link>{" "}
            {t.bud.orderSuffix}
          </p>

          <FaqSection faqs={faqs} locale={locale} />
        </div>
      </div>
    );
  };
}
