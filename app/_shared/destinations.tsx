import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { countries, getCountry } from "@/data";
import { CityCard } from "@/components/CityCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, itemListSchema } from "@/lib/seo";
import {
  STR,
  fmt,
  hreflangs,
  localePath,
  type Locale,
} from "@/lib/i18n";

export function makeDestinationsMetadata(locale: Locale): Metadata {
  const t = STR[locale].dest;
  return {
    title: t.metaTitle,
    description: t.metaDesc,
    alternates: {
      canonical: localePath(locale, "/destinations"),
      languages: hreflangs("/destinations"),
    },
  };
}

export function makeDestinationsPage(locale: Locale) {
  return function DestinationsPage() {
    const t = STR[locale];
    const lp = (p: string) => localePath(locale, p);
    const groups = countries(locale);
    return (
      <div className="mx-auto max-w-6xl px-4 py-12">
        <JsonLd
          data={[
            itemListSchema(
              groups.flatMap((g) =>
                g.cities.map((c) => ({ name: c.name, path: lp(`/${c.slug}`) }))
              )
            ),
            breadcrumbSchema([
              { name: t.header.destinations, path: lp("/destinations") },
            ]),
          ]}
        />
        <p className="stamp mb-6 text-cobalt">{t.dest.kicker}</p>
        <h1 className="font-display max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
          {t.dest.h1}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-ink/80">{t.dest.intro}</p>
        {groups.map((g) => (
          <section key={g.slug} className="mt-14">
            <div className="mb-6 flex items-baseline gap-4">
              <h2 className="font-display text-3xl font-semibold tracking-tight">
                {g.name}
              </h2>
              <Link
                href={lp(`/destinations/${g.slug}`)}
                className="label-mono underline underline-offset-4"
              >
                {fmt(t.dest.cityBreaksIn, { country: g.name })}
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {g.cities.map((c) => (
                <CityCard key={c.slug} city={c} locale={locale} />
              ))}
            </div>
          </section>
        ))}
      </div>
    );
  };
}

export function countryStaticParams() {
  return countries("en").map((c) => ({ country: c.slug }));
}

type CountryParams = Promise<{ country: string }>;

export function makeCountryMetadata(locale: Locale) {
  return async function generateMetadata({
    params,
  }: {
    params: CountryParams;
  }): Promise<Metadata> {
    const { country } = await params;
    const group = getCountry(country, locale);
    if (!group) return {};
    const t = STR[locale].dest;
    const path = `/destinations/${group.slug}`;
    return {
      title: fmt(t.countryMetaTitle, { country: group.name }),
      description: fmt(t.countryMetaDesc, { country: group.name }),
      alternates: {
        canonical: localePath(locale, path),
        languages: hreflangs(path),
      },
    };
  };
}

export function makeCountryPage(locale: Locale) {
  return async function CountryPage({ params }: { params: CountryParams }) {
    const { country } = await params;
    const group = getCountry(country, locale);
    if (!group) notFound();
    const t = STR[locale];
    const lp = (p: string) => localePath(locale, p);
    const path = `/destinations/${group.slug}`;
    return (
      <div className="mx-auto max-w-6xl px-4 py-12">
        <JsonLd
          data={[
            itemListSchema(
              group.cities.map((c) => ({
                name: c.name,
                path: lp(`/${c.slug}`),
              }))
            ),
            breadcrumbSchema([
              { name: t.header.destinations, path: lp("/destinations") },
              { name: group.name, path: lp(path) },
            ]),
          ]}
        />
        <Breadcrumbs
          locale={locale}
          items={[
            { name: t.header.destinations, path: "/destinations" },
            { name: group.name, path },
          ]}
        />
        <h1 className="font-display mt-8 max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
          {fmt(t.dest.cityBreaksIn, { country: group.name })}
        </h1>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {group.cities.map((c) => (
            <CityCard key={c.slug} city={c} locale={locale} />
          ))}
        </div>
      </div>
    );
  };
}
