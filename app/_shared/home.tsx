import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { cities } from "@/data";
import { getCityExtras } from "@/data/extras";
import { CityFinder } from "@/components/CityFinder";
import { CityGrid, type CityCardData } from "@/components/CityGrid";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, itemListSchema } from "@/lib/seo";
import {
  STR,
  fmt,
  hreflangs,
  localePath,
  monthShort,
  type Locale,
} from "@/lib/i18n";

const ACCENTS = ["#2743d8", "#0e9b76", "#ff5a5f"];
const BUDGET_LABEL = { low: "€", mid: "€€", high: "€€€" } as const;

export function makeHomeMetadata(locale: Locale): Metadata {
  const t = STR[locale].home;
  return {
    // absolute bypasses the "%s | Perfect City Break" template: t.metaTitle
    // already carries the brand, so the template would duplicate it.
    title: { absolute: t.metaTitle },
    description: t.metaDesc,
    alternates: {
      canonical: localePath(locale, "/"),
      languages: hreflangs("/"),
    },
  };
}

export function makeHomePage(locale: Locale) {
  return function HomePage() {
    const t = STR[locale];
    const lp = (p: string) => localePath(locale, p);
    const list = cities(locale);

    const cardData: CityCardData[] = list.map((c) => {
      const extras = getCityExtras(c.slug, locale);
      return {
        slug: c.slug,
        href: lp(`/${c.slug}`),
        name: c.name,
        country: c.country,
        image: extras?.image ?? "",
        imageAlt: extras?.imageAlt ?? c.name,
        idealDays: c.idealDays,
        bestShort: c.bestMonths
          .slice(0, 3)
          .map((m) => monthShort(locale, m))
          .join(" · "),
        budget: BUDGET_LABEL[c.budgetLevel],
        tagline: c.tagline,
        accentFrom: c.accent.from,
        accentTo: c.accent.to,
        keywords: `${c.name} ${c.country}`.toLowerCase(),
      };
    });

    // Hero photo strip: first four cities' heroes.
    const strip = cardData.slice(0, 4);

    return (
      <>
        <JsonLd
          data={[
            itemListSchema(
              list.map((c) => ({ name: c.name, path: lp(`/${c.slug}`) }))
            ),
            faqSchema(t.home.faqs),
          ]}
        />

        {/* Hero: text-first, with a photo strip underneath */}
        <section className="border-b-2 border-ink">
          <div className="mx-auto max-w-6xl px-4 pb-10 pt-16 sm:pt-20">
            <p className="stamp mb-6 text-coral">{t.home.stamp}</p>
            <h1 className="font-display max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
              {t.home.heroParts.map((part, i) => (
                <span key={i}>
                  {part.pre}
                  <span style={{ color: ACCENTS[i] }}>{part.word}</span>
                  {part.post}
                </span>
              ))}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/80">
              {t.home.heroSub}
            </p>
          </div>
          {/* Photo strip */}
          <div className="grid grid-cols-2 gap-0 border-t-2 border-ink md:grid-cols-4">
            {strip.map((c, i) => (
              <Link
                key={c.slug}
                href={c.href}
                className={`group relative h-40 overflow-hidden sm:h-52 ${
                  i > 0 ? "border-l-2 border-ink" : ""
                } ${i === 2 ? "border-l-0 md:border-l-2" : ""}`}
                style={{
                  ["--city" as string]: c.accentFrom,
                  ["--city-to" as string]: c.accentTo,
                }}
              >
                <Image
                  src={c.image}
                  alt={c.imageAlt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={i < 2}
                />
                <div
                  className="absolute inset-0 opacity-25 transition-opacity group-hover:opacity-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(160deg, var(--city), transparent 65%)",
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/70 to-transparent" />
                <span className="absolute bottom-3 left-3 font-display text-2xl font-bold text-white drop-shadow-[2px_2px_0_rgba(26,26,46,0.5)]">
                  {c.name}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Search + city grid */}
        <section className="mx-auto max-w-6xl px-4 py-14">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.home.whereNext}
            </h2>
            <Link
              href={lp("/destinations")}
              className="label-mono underline underline-offset-4"
            >
              {t.home.allDest}
            </Link>
          </div>
          <CityFinder
            labels={{
              placeholder: t.home.searchPlaceholder,
              noResult: t.home.searchNoResult,
            }}
          >
            <CityGrid
              cities={cardData}
              labels={{
                days: t.cityCard.days,
                best: t.cityCard.best,
                budget: t.cityCard.budget,
              }}
            />
          </CityFinder>
        </section>

        {/* Departure board */}
        <section className="border-y-2 border-ink bg-ink text-cream">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <p className="label-mono mb-5 text-cream/50">
              {t.home.departures}
            </p>
            <ul className="divide-y divide-cream/15">
              {list.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={lp(`/${c.slug}`)}
                    className="group flex flex-wrap items-baseline gap-x-6 gap-y-1 py-4"
                  >
                    <span className="font-mono text-sm text-cream/50">
                      {c.airportCode}
                    </span>
                    <span className="font-display text-2xl font-semibold tracking-tight group-hover:underline">
                      {c.name}
                    </span>
                    <span className="font-mono text-sm text-cream/70">
                      {fmt(t.home.daysIdealShort, { days: c.idealDays })}
                    </span>
                    <span className="hidden font-mono text-sm text-cream/70 sm:inline">
                      {t.home.best}{" "}
                      {c.bestMonths
                        .slice(0, 3)
                        .map((m) => monthShort(locale, m))
                        .join(" ")}
                    </span>
                    <span
                      className="ml-auto font-mono text-sm"
                      style={{ color: c.accent.from }}
                    >
                      {t.home.boarding}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Method */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="rounded-2xl bg-paper p-8 hard-shadow sm:p-10">
            <p className="label-mono mb-3 text-viridian">
              {t.home.methodKicker}
            </p>
            <h2 className="font-display max-w-2xl text-3xl font-semibold tracking-tight">
              {t.home.methodTitle}
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-ink/80">
              {t.home.methodBody}{" "}
              <Link href="/about" className="underline underline-offset-2">
                {t.home.methodLink}
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Home FAQ */}
        <section className="mx-auto max-w-3xl px-4 pb-20">
          <FaqSection faqs={t.home.faqs} locale={locale} heading={t.home.faqTitle} />
        </section>
      </>
    );
  };
}
