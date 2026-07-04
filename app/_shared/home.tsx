import type { Metadata } from "next";
import Link from "next/link";
import { cities } from "@/data";
import { CityCard } from "@/components/CityCard";
import { JsonLd } from "@/components/JsonLd";
import { itemListSchema } from "@/lib/seo";
import {
  STR,
  fmt,
  hreflangs,
  localePath,
  monthShort,
  type Locale,
} from "@/lib/i18n";

const ACCENTS = ["#2743d8", "#0e9b76", "#ff5a5f"];

export function makeHomeMetadata(locale: Locale): Metadata {
  const t = STR[locale].home;
  return {
    title: t.metaTitle,
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
    return (
      <>
        <JsonLd
          data={itemListSchema(
            list.map((c) => ({ name: c.name, path: lp(`/${c.slug}`) }))
          )}
        />
        {/* Text-first hero: the promise, oversized */}
        <section className="border-b-2 border-ink">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
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
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={lp("/destinations")}
                className="rounded-full border-2 border-ink bg-ink px-6 py-3 font-semibold text-cream transition-transform hover:-translate-y-0.5"
              >
                {t.home.pickCity}
              </Link>
              <Link
                href="/guides/how-many-days"
                className="rounded-full border-2 border-ink bg-paper px-6 py-3 font-semibold transition-transform hover:-translate-y-0.5"
              >
                {t.home.howManyBtn}
              </Link>
            </div>
          </div>
        </section>

        {/* Departure board */}
        <section className="border-b-2 border-ink bg-ink text-cream">
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

        {/* City cards */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-8 flex items-end justify-between">
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((c) => (
              <CityCard key={c.slug} city={c} locale={locale} />
            ))}
          </div>
        </section>

        {/* Method */}
        <section className="mx-auto max-w-6xl px-4 pb-16">
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
      </>
    );
  };
}
