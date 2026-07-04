import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { countries, getCountry } from "@/data";
import { CityCard } from "@/components/CityCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, itemListSchema } from "@/lib/seo";

export const revalidate = 86400;
export const dynamicParams = false;

export function generateStaticParams() {
  return countries().map((c) => ({ country: c.slug }));
}

type Props = { params: Promise<{ country: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;
  const group = getCountry(country);
  if (!group) return {};
  return {
    title: `City breaks in ${group.name}: where to go and for how long`,
    description: `Every ${group.name} city break on Perfect City Break: ideal trip length, best months and honest budgets for each city.`,
    alternates: { canonical: `/destinations/${group.slug}` },
  };
}

export default async function CountryPage({ params }: Props) {
  const { country } = await params;
  const group = getCountry(country);
  if (!group) notFound();
  const path = `/destinations/${group.slug}`;
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <JsonLd
        data={[
          itemListSchema(
            group.cities.map((c) => ({ name: c.name, path: `/${c.slug}` }))
          ),
          breadcrumbSchema([
            { name: "Destinations", path: "/destinations" },
            { name: group.name, path },
          ]),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Destinations", path: "/destinations" },
          { name: group.name, path },
        ]}
      />
      <h1 className="font-display mt-8 max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
        City breaks in {group.name}
      </h1>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {group.cities.map((c) => (
          <CityCard key={c.slug} city={c} />
        ))}
      </div>
    </div>
  );
}
