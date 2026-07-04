import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { cities, getCityData, getPublishedCity } from "@/data";
import { getCityExtras } from "@/data/extras";
import { getHotels } from "@/data/hotels";
import { cityVars } from "@/lib/style";
import {
  STR,
  fmt,
  hreflangs,
  localePath,
  monthName,
  monthShort,
  type Locale,
} from "@/lib/i18n";
import { articleSchema, breadcrumbSchema, faqSchema, type Faq } from "@/lib/seo";
import { BoardingPass } from "@/components/BoardingPass";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CityCard } from "@/components/CityCard";
import { FaqSection } from "@/components/FaqSection";
import { HotelsRail } from "@/components/HotelsRail";
import { JsonLd } from "@/components/JsonLd";
import { MonthGrid } from "@/components/MonthGrid";
import { Stamp } from "@/components/Stamp";
import { Stay22Map } from "@/components/Stay22Map";
import { TripToolbar } from "@/components/TripToolbar";

export function cityStaticParams() {
  return cities("en").map((c) => ({ city: c.slug }));
}

type Params = Promise<{ city: string }>;

export function makeCityHubMetadata(locale: Locale) {
  return async function generateMetadata({
    params,
  }: {
    params: Params;
  }): Promise<Metadata> {
    const { city: slug } = await params;
    const city = getPublishedCity(slug, locale);
    if (!city) return {};
    const t = STR[locale].hub;
    const path = `/${city.slug}`;
    return {
      title: fmt(t.metaTitle, { city: city.name }),
      description: fmt(t.metaDesc, { city: city.name, days: city.idealDays }),
      alternates: {
        canonical: localePath(locale, path),
        languages: hreflangs(path),
      },
    };
  };
}

export function makeCityHubPage(locale: Locale) {
  return async function CityHubPage({ params }: { params: Params }) {
    const { city: slug } = await params;
    const data = getCityData(slug, locale);
    if (!data) notFound();
    const { city, neighborhoods, itineraries } = data;
    const t = STR[locale];
    const lp = (p: string) => localePath(locale, p);
    const extras = getCityExtras(city.slug, locale);

    const bestMonthNames = city.bestMonths.map((m) => monthName(locale, m));

    const faqs: Faq[] = [
      {
        q: fmt(t.hub.faqDaysQ, { city: city.name }),
        a: fmt(t.hub.faqDaysA, {
          days: city.idealDays,
          city: city.name,
          rest:
            itineraries
              .find((i) => i.days === city.idealDays)
              ?.summary.split(". ")[1] ?? "",
        }),
      },
      {
        q: fmt(t.hub.faqWhenQ, { city: city.name }),
        a: fmt(t.hub.faqWhenA, {
          months: bestMonthNames.join(", "),
          avoid: city.avoidMonths?.length
            ? fmt(t.hub.faqAvoid, {
                months: city.avoidMonths
                  .map((m) => monthName(locale, m))
                  .join(" / "),
                note: city.monthlyNotes[city.avoidMonths[0]],
              })
            : "",
        }),
      },
      {
        q: fmt(t.hub.faqExpQ, { city: city.name }),
        a: fmt(t.hub.faqExpA, {
          city: city.name,
          level:
            city.budgetLevel === "low"
              ? t.hub.levelBelow
              : city.budgetLevel === "mid"
                ? t.hub.levelAround
                : t.hub.levelAbove,
          low: city.budgetPerDay.budget,
          mid: city.budgetPerDay.mid,
          high: city.budgetPerDay.high,
        }),
      },
      {
        q: fmt(t.hub.faqFirstQ, { city: city.name }),
        a: (() => {
          const ft = neighborhoods.find((n) =>
            n.bestFor.includes("first-time")
          );
          return ft
            ? fmt(t.hub.faqFirstA, { hood: ft.name, vibe: ft.vibe })
            : t.hub.faqFirstFallback;
        })(),
      },
      {
        q: fmt(t.hub.faqAroundQ, { city: city.name }),
        a: fmt(
          city.centerWalkable ? t.hub.faqAroundAWalk : t.hub.faqAroundASpread,
          { city: city.name, airport: city.airportToCenter }
        ),
      },
      {
        q: fmt(t.hub.faqAirportQ, { city: city.name }),
        a: fmt(t.hub.faqAirportA, { airport: city.airportToCenter }),
      },
      ...(extras
        ? [
            {
              q: fmt(t.hub.faqKnownQ, { city: city.name }),
              a: fmt(t.hub.faqKnownA, {
                city: city.name,
                list: extras.knownFor.join(", "),
                history: extras.history.split(". ")[0] + ".",
              }),
            },
          ]
        : []),
    ];

    const answer = fmt(t.hub.answer, {
      city: city.name,
      days: city.idealDays,
      intro: city.heroIntro,
    });

    return (
      <div style={cityVars(city)}>
        <JsonLd
          data={[
            articleSchema({
              title: fmt(t.hub.metaTitle, { city: city.name }),
              description: answer.slice(0, 160),
              path: lp(`/${city.slug}`),
            }),
            faqSchema(faqs),
            breadcrumbSchema([
              { name: t.header.destinations, path: lp("/destinations") },
              { name: city.name, path: lp(`/${city.slug}`) },
            ]),
          ]}
        />

        <section className="relative overflow-hidden border-b-2 border-ink">
          {extras?.image ? (
            <>
              <Image
                src={extras.image}
                alt={extras.imageAlt}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 opacity-45"
                style={{
                  backgroundImage:
                    "linear-gradient(150deg, var(--city), var(--city-to) 85%)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-ink/25" />
            </>
          ) : (
            <div className="city-gradient absolute inset-0" />
          )}
          <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-10">
            <Breadcrumbs
              locale={locale}
              items={[
                { name: t.header.destinations, path: "/destinations" },
                { name: city.name, path: `/${city.slug}` },
              ]}
            />
            <div className="mt-8 flex flex-wrap items-start gap-3">
              <Stamp className="bg-paper/90 text-ink">{city.country}</Stamp>
              <Stamp className="bg-paper/90 text-ink">
                {fmt(t.stamp.daysIdeal, { days: city.idealDays })}
              </Stamp>
            </div>
            <h1 className="font-display mt-4 text-6xl font-bold tracking-tight text-white drop-shadow-[3px_3px_0_rgba(26,26,46,0.5)] sm:text-8xl">
              {city.name}
            </h1>
            <p className="mt-3 max-w-xl text-lg font-medium text-white drop-shadow-[1px_1px_0_rgba(26,26,46,0.5)]">
              {city.tagline}
            </p>
          </div>
        </section>

        <TripToolbar
          items={[
            { href: "#hotels", label: t.toolbar.hotels },
            { href: "#days", label: t.toolbar.howManyDays },
            { href: "#stay", label: t.toolbar.whereToStay },
            { href: "#months", label: t.toolbar.whenToGo },
            { href: "#map", label: t.toolbar.hotelMap },
            { href: "#faq", label: t.toolbar.faq },
          ]}
          cta={{ href: "#hotels", label: t.common.findHotels }}
        />

        <div className="mx-auto max-w-6xl space-y-16 px-4 py-12">
          <BoardingPass
            city={city}
            kicker={t.bp.pass}
            answer={answer}
            fields={[
              {
                label: t.bp.idealStay,
                value: fmt(t.bp.daysValue, { days: city.idealDays }),
              },
              {
                label: t.bp.bestMonths,
                value: city.bestMonths
                  .slice(0, 3)
                  .map((m) => monthShort(locale, m))
                  .join(" · "),
              },
              {
                label: t.bp.midBudget,
                value: fmt(t.bp.perDay, { price: city.budgetPerDay.mid }),
              },
              { label: t.bp.airport, value: city.airportToCenter.split(",")[0] },
            ]}
          />

          <HotelsRail
            city={city}
            hotels={getHotels(city.slug, locale)}
            locale={locale}
          />

          {/* Hotel map, kept high so it is visible fast */}
          <section id="map" className="scroll-mt-28">
            <h2 className="font-display mb-6 text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.hub.mapTitle}
            </h2>
            <Stay22Map
              lat={city.lat}
              lng={city.lng}
              title={fmt(t.stay22.hotelsIn, { name: city.name })}
              accent={city.accent.from}
              locale={locale}
            />
          </section>

          {/* A little history + known-for chips */}
          {extras ? (
            <section className="grid gap-8 rounded-2xl bg-paper p-7 hard-shadow sm:p-9 md:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="label-mono mb-3" style={{ color: "var(--city)" }}>
                  {t.hub.historyTitle}
                </p>
                <p className="leading-relaxed text-ink/85">{extras.history}</p>
              </div>
              <div>
                <p className="label-mono mb-3 text-ink/50">
                  {fmt(t.hub.knownForTitle, { city: city.name })}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {extras.knownFor.map((k) => (
                    <li
                      key={k}
                      className="rounded-full border-2 border-ink bg-cream px-3 py-1 text-sm font-medium"
                    >
                      {k}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ) : null}

          <section id="days" className="scroll-mt-28">
            <h2 className="font-display mb-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              {fmt(t.hub.howManyTitle, { city: city.name })}
            </h2>
            <p className="mb-8 max-w-2xl text-ink/75">{t.hub.howManyIntro}</p>
            <div className="grid gap-5 sm:grid-cols-3">
              {itineraries.map((it) => (
                <Link
                  key={it.days}
                  href={lp(`/${city.slug}/${it.days}-days`)}
                  className="group rounded-2xl bg-paper p-6 hard-shadow transition-all hover:-translate-y-1 hover:hard-shadow-city"
                >
                  <p
                    className="font-display text-5xl font-bold"
                    style={{ color: "var(--city)" }}
                  >
                    {it.days}
                  </p>
                  <p className="label-mono mt-1 text-ink/50">
                    {t.common.days}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/80">
                    {it.summary.split(". ").slice(0, 2).join(". ")}.
                  </p>
                  <p className="label-mono mt-4 group-hover:underline">
                    {t.hub.seeItinerary}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          <section id="stay" className="scroll-mt-28">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <h2 className="font-display mb-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                  {fmt(t.hub.wtsTitle, { city: city.name })}
                </h2>
                <p className="max-w-2xl text-ink/75">
                  {fmt(city.centerWalkable ? t.hub.walkable : t.hub.spread, {
                    city: city.name,
                  })}
                </p>
              </div>
              <Link
                href={lp(`/${city.slug}/where-to-stay`)}
                className="label-mono hidden whitespace-nowrap underline underline-offset-4 sm:block"
              >
                {t.hub.fullComparison}
              </Link>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {neighborhoods.slice(0, 3).map((n) => (
                <Link
                  key={n.slug}
                  href={lp(`/${city.slug}/where-to-stay#${n.slug}`)}
                  className="rounded-2xl border-2 border-ink bg-paper p-5 transition-all hover:-translate-y-1 hover:hard-shadow"
                >
                  <p className="font-display text-xl font-semibold">{n.name}</p>
                  <p
                    className="label-mono mt-1"
                    style={{ color: "var(--city)" }}
                  >
                    {t.bestFor[n.bestFor[0]]}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">
                    {n.vibe.split(". ")[0]}.
                  </p>
                </Link>
              ))}
            </div>
            <Link
              href={lp(`/${city.slug}/where-to-stay`)}
              className="label-mono mt-4 inline-block underline underline-offset-4 sm:hidden"
            >
              {t.hub.fullComparison} →
            </Link>
          </section>

          <section id="months" className="scroll-mt-28">
            <h2 className="font-display mb-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              {fmt(t.hub.monthsTitle, { city: city.name })}
            </h2>
            <p className="mb-6 max-w-2xl text-ink/75">{t.hub.monthsIntro}</p>
            <MonthGrid city={city} locale={locale} />
          </section>

          <section className="grid gap-5 md:grid-cols-2">
            <Link
              href={lp(`/${city.slug}/on-a-budget`)}
              className="rounded-2xl bg-paper p-7 hard-shadow transition-all hover:-translate-y-1 hover:hard-shadow-city"
            >
              <p className="label-mono mb-2" style={{ color: "var(--city)" }}>
                {t.hub.tightBudget}
              </p>
              <p className="font-display text-2xl font-semibold tracking-tight">
                {fmt(t.hub.budgetCard, {
                  city: city.name,
                  price: city.budgetPerDay.budget,
                })}
              </p>
              <p className="label-mono mt-4 underline underline-offset-4">
                {t.hub.readBudget}
              </p>
            </Link>
            <div className="rounded-2xl border-2 border-ink bg-paper p-7">
              <p className="label-mono mb-3 text-ink/50">{t.hub.pairsWell}</p>
              <ul className="space-y-2">
                {city.nearbyCitySlugs.map((s) => {
                  const nearby = getPublishedCity(s, locale);
                  return (
                    <li key={s}>
                      {nearby ? (
                        <Link
                          href={lp(`/${nearby.slug}`)}
                          className="font-display text-xl font-semibold underline-offset-4 hover:underline"
                        >
                          {nearby.name} →
                        </Link>
                      ) : (
                        <span className="font-display text-xl font-semibold text-ink/40">
                          {s.charAt(0).toUpperCase() + s.slice(1)}{" "}
                          {t.common.comingSoon}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>

          <FaqSection faqs={faqs} locale={locale} />
        </div>
      </div>
    );
  };
}

export { CityCard };
