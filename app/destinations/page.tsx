import type { Metadata } from "next";
import Link from "next/link";
import { countries } from "@/data";
import { CityCard } from "@/components/CityCard";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, itemListSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "City break destinations: every city, compared honestly",
  description:
    "All CityTrip destinations with the number of days each one really needs, the best months and honest budgets. Europe first, the world next.",
  alternates: { canonical: "/destinations" },
};

export default function DestinationsPage() {
  const groups = countries();
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <JsonLd
        data={[
          itemListSchema(
            groups.flatMap((g) =>
              g.cities.map((c) => ({ name: c.name, path: `/${c.slug}` }))
            )
          ),
          breadcrumbSchema([{ name: "Destinations", path: "/destinations" }]),
        ]}
      />
      <p className="stamp mb-6 text-cobalt">Departures board</p>
      <h1 className="font-display max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
        Pick your next city break
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-ink/80">
        Three pilot cities today, new ones added every month. Each destination
        gets the full treatment: itineraries per duration, neighborhoods
        compared, and a page for every month of the year.
      </p>
      {groups.map((g) => (
        <section key={g.slug} className="mt-14">
          <div className="mb-6 flex items-baseline gap-4">
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              {g.name}
            </h2>
            <Link
              href={`/destinations/${g.slug}`}
              className="label-mono underline underline-offset-4"
            >
              City breaks in {g.name}
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {g.cities.map((c) => (
              <CityCard key={c.slug} city={c} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
