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
import { NeighborhoodBoard } from "@/components/NeighborhoodBoard";
import { Stamp } from "@/components/Stamp";
import { Stay22Map } from "@/components/Stay22Map";
import { TripToolbar } from "@/components/TripToolbar";

type Params = Promise<{ city: string }>;

export function makeWtsMetadata(locale: Locale) {
  return async function generateMetadata({
    params,
  }: {
    params: Params;
  }): Promise<Metadata> {
    const { city: slug } = await params;
    const data = getCityData(slug, locale);
    if (!data) return {};
    const { city } = data;
    const t = STR[locale].wts;
    const path = `/${city.slug}/where-to-stay`;
    return {
      title: fmt(t.metaTitle, { city: city.name }),
      description: fmt(t.metaDesc, { city: city.name }),
      alternates: {
        canonical: localePath(locale, path),
        languages: hreflangs(path),
      },
    };
  };
}

export function makeWtsPage(locale: Locale) {
  return async function WhereToStayPage({ params }: { params: Params }) {
    const { city: slug } = await params;
    const data = getCityData(slug, locale);
    if (!data) notFound();
    const { city, neighborhoods } = data;
    const t = STR[locale];
    const lp = (p: string) => localePath(locale, p);
    const path = `/${city.slug}/where-to-stay`;

    const firstTimer = neighborhoods.find((n) =>
      n.bestFor.includes("first-time")
    );
    const budget = neighborhoods.find((n) => n.bestFor.includes("budget"));
    const nightlife = neighborhoods.find((n) =>
      n.bestFor.includes("nightlife")
    );

    const answer = [
      firstTimer
        ? fmt(t.wts.answerFirst, {
            city: city.name,
            hood: firstTimer.name,
            pro: firstTimer.pros[0].charAt(0).toLowerCase() + firstTimer.pros[0].slice(1),
          })
        : fmt(t.wts.answerFallback, { city: city.name }),
      budget && budget.slug !== firstTimer?.slug
        ? fmt(t.wts.answerBudget, { hood: budget.name })
        : "",
      city.centerWalkable
        ? fmt(t.wts.answerWalkable, { n: neighborhoods.length })
        : t.wts.answerSpread,
    ]
      .filter(Boolean)
      .join(" ");

    const faqs: Faq[] = [
      { q: fmt(t.wts.faqBestQ, { city: city.name }), a: answer },
      ...(nightlife
        ? [
            {
              q: fmt(t.wts.faqNightQ, { city: city.name }),
              a: fmt(t.wts.faqNightA, {
                hood: nightlife.name,
                vibe: nightlife.vibe,
                con:
                  nightlife.cons[0].charAt(0).toLowerCase() +
                  nightlife.cons[0].slice(1),
              }),
            },
          ]
        : []),
      ...(budget
        ? [
            {
              q: fmt(t.wts.faqCheapQ, { city: city.name }),
              a: fmt(t.wts.faqCheapA, { hood: budget.name, vibe: budget.vibe }),
            },
          ]
        : []),
    ];

    return (
      <div style={cityVars(city)}>
        <JsonLd
          data={[
            articleSchema({
              title: fmt(t.wts.metaTitle, { city: city.name }),
              description: answer.slice(0, 160),
              path: lp(path),
            }),
            faqSchema(faqs),
            breadcrumbSchema([
              { name: city.name, path: lp(`/${city.slug}`) },
              { name: t.toolbar.whereToStay, path: lp(path) },
            ]),
          ]}
        />

        <section className="border-b-2 border-ink bg-paper">
          <div className="mx-auto max-w-6xl px-4 pb-12 pt-10">
            <Breadcrumbs
              locale={locale}
              items={[
                { name: city.name, path: `/${city.slug}` },
                { name: t.toolbar.whereToStay, path },
              ]}
            />
            <div className="mt-8">
              <Stamp color={city.accent.from}>
                {fmt(t.stamp.areasCompared, { n: neighborhoods.length })}
              </Stamp>
            </div>
            <h1 className="font-display mt-4 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
              {t.wts.h1}{" "}
              <span className="highlight-city">{city.name}</span>
            </h1>
          </div>
        </section>

        <TripToolbar
          items={[
            { href: "#hotels", label: t.toolbar.ourPicks },
            { href: "#board", label: t.toolbar.compare },
            ...neighborhoods.map((n) => ({
              href: `#${n.slug}`,
              label: n.name,
            })),
          ]}
        />

        <div className="mx-auto max-w-4xl space-y-14 px-4 py-12">
          <BoardingPass
            city={city}
            kicker={t.bp.roomKey}
            answer={answer}
            fields={[
              { label: t.bp.firstVisit, value: firstTimer?.name ?? "–" },
              { label: t.bp.budgetPick, value: budget?.name ?? "–" },
              { label: t.bp.nightlife, value: nightlife?.name ?? "–" },
              {
                label: t.bp.midHotel,
                value: `~${Math.round(city.budgetPerDay.mid * 0.45)} EUR`,
              },
            ]}
          />

          <HotelsRail
            city={city}
            hotels={getHotels(city.slug, locale)}
            columns={2}
            locale={locale}
            title={t.wts.shortlistTitle}
            intro={fmt(t.wts.shortlistIntro, { city: city.name })}
          />

          <section id="board" className="scroll-mt-28">
            <h2 className="font-display mb-6 text-3xl font-semibold tracking-tight">
              {t.wts.boardTitle}
            </h2>
            <NeighborhoodBoard neighborhoods={neighborhoods} locale={locale} />
          </section>

          {neighborhoods.map((n, i) => (
            <section key={n.slug} id={n.slug} className="scroll-mt-28">
              <div className="mb-4 flex items-baseline gap-3">
                <span
                  className="font-mono text-sm font-bold"
                  style={{ color: "var(--city)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-3xl font-semibold tracking-tight">
                  {n.name}
                </h2>
              </div>
              <p className="mb-5 leading-relaxed text-ink/85">{n.vibe}</p>
              <div className="mb-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border-2 border-viridian/60 bg-paper p-5">
                  <p className="label-mono mb-2 text-viridian">
                    {t.wts.bookFor}
                  </p>
                  <ul className="space-y-1.5 text-sm leading-relaxed">
                    {n.pros.map((p) => (
                      <li key={p}>+ {p}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border-2 border-coral/60 bg-paper p-5">
                  <p className="label-mono mb-2 text-coral">
                    {t.wts.knowBefore}
                  </p>
                  <ul className="space-y-1.5 text-sm leading-relaxed">
                    {n.cons.map((c) => (
                      <li key={c}>− {c}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <Stay22Map
                lat={n.lat}
                lng={n.lng}
                title={fmt(t.stay22.hotelsIn, { name: n.name })}
                accent={city.accent.from}
                locale={locale}
              />
            </section>
          ))}

          <p className="text-ink/80">
            {t.wts.pickedNext}{" "}
            <Link
              href={lp(`/${city.slug}/${city.idealDays}-days`)}
              className="underline underline-offset-2"
            >
              {fmt(t.wts.pickedLink, {
                city: city.name,
                days: city.idealDays,
              })}
            </Link>
            .
          </p>

          <FaqSection faqs={faqs} locale={locale} />
        </div>
      </div>
    );
  };
}
