import type { Metadata } from "next";
import Link from "next/link";
import { cityBundles } from "@/data";
import { monthShort } from "@/lib/i18n";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Stamp } from "@/components/Stamp";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  itemListSchema,
} from "@/lib/seo";
import { FaqSection } from "@/components/FaqSection";

const TITLE = "The cheapest city breaks in Europe, ranked by daily cost";
const DESCRIPTION =
  "Every European city we cover, ranked from cheapest to priciest by what a day actually costs on a budget: a bed, local transport, food and the main sights. Indicative prices per person, reviewed yearly.";
const PATH = "/guides/cheapest-city-breaks";

export const metadata: Metadata = {
  title: "The cheapest city breaks in Europe (ranked by daily cost)",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

// Ranked from /data by the on-a-budget daily figure. Never hand-maintained:
// new cities slot into the ranking automatically as they are published.
export default function CheapestCityBreaksPage() {
  const ranked = cityBundles("en")
    .map((b) => b.city)
    .sort((a, b) => a.budgetPerDay.budget - b.budgetPerDay.budget);

  const cheapest = ranked[0];
  const priciest = ranked[ranked.length - 1];
  const months = (nums: number[]) =>
    nums
      .slice(0, 3)
      .map((n) => monthShort("en", n))
      .join(", ");

  const faqs = [
    {
      q: "What is the cheapest city break in Europe?",
      a: `${cheapest.name}, ${cheapest.country}. Around ${cheapest.budgetPerDay.budget} EUR a day per person covers a hostel bed or a cheap room, local transport, street food and the main free sights, before flights. ${cheapest.tagline}`,
    },
    {
      q: "How much does a cheap city break cost for a weekend?",
      a: `On a budget, two days in the cheapest cities here runs from about ${cheapest.budgetPerDay.budget * 2} EUR per person, excluding flights. That is a dorm or budget room, buses and metros, market and street food, and the sights that are free or a few euros. Doubling the daily figure in the table below gives a rough two-day cost for any city.`,
    },
    {
      q: "Which are the cheapest cities to visit in Europe?",
      a: `The five cheapest city breaks we cover, by daily budget, are ${ranked
        .slice(0, 5)
        .map((c) => c.name)
        .join(", ")}. Central and eastern European capitals and the Baltics undercut the western capitals and the Nordics, which sit at the expensive end.`,
    },
    {
      q: "When is the cheapest time to take a city break?",
      a: `The shoulder seasons, roughly April to early June and September to October, are the sweet spot: fares and rooms drop from the summer and Christmas peaks while the weather still holds. Avoid July and August in the south and the week around Christmas and New Year everywhere, when prices climb the most.`,
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <JsonLd
        data={[
          articleSchema({ title: TITLE, description: DESCRIPTION, path: PATH }),
          faqSchema(faqs),
          itemListSchema(
            ranked.map((c) => ({ name: c.name, path: `/${c.slug}` }))
          ),
          breadcrumbSchema([
            { name: "Guides", path: "/guides" },
            { name: "Cheapest city breaks", path: PATH },
          ]),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Guides", path: "/guides" },
          { name: "Cheapest city breaks", path: PATH },
        ]}
      />
      <div className="mt-8">
        <Stamp color="#0e9b76">Value</Stamp>
      </div>
      <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
        The cheapest city breaks in Europe
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/80">
        Ranked by what a day actually costs on a budget: a hostel or cheap room,
        local transport, food and the main sights, before flights. {cheapest.name}{" "}
        is the best value we cover at around {cheapest.budgetPerDay.budget} EUR a
        day; {priciest.name} is the priciest at about{" "}
        {priciest.budgetPerDay.budget} EUR. All figures are indicative, per
        person per day, and reviewed yearly.
      </p>

      <div className="mt-10 overflow-x-auto rounded-2xl bg-paper hard-shadow">
        <table className="w-full min-w-[560px] border-collapse text-sm">
          <thead>
            <tr className="bg-ink text-left">
              <th className="label-mono px-4 py-3 text-cream">#</th>
              <th className="label-mono px-4 py-3 text-cream">City</th>
              <th className="label-mono px-4 py-3 text-cream">Budget / day</th>
              <th className="label-mono px-4 py-3 text-cream">Mid / day</th>
              <th className="label-mono px-4 py-3 text-cream">Best value months</th>
            </tr>
          </thead>
          <tbody>
            {ranked.map((city, i) => (
              <tr key={city.slug} className="border-t border-ink/10 align-top">
                <td className="px-4 py-4 font-mono text-sm font-bold text-ink/50">
                  {i + 1}
                </td>
                <td className="px-4 py-4">
                  <Link
                    href={`/${city.slug}`}
                    className="font-display text-lg font-semibold underline-offset-4 hover:underline"
                  >
                    {city.name}
                  </Link>
                  <p className="label-mono mt-0.5 text-ink/45">{city.country}</p>
                  <Link
                    href={`/${city.slug}/on-a-budget`}
                    className="label-mono mt-1 inline-block underline underline-offset-2"
                    style={{ color: "var(--city, #0e9b76)" }}
                  >
                    Budget guide
                  </Link>
                </td>
                <td className="px-4 py-4">
                  <span
                    className="inline-flex items-center justify-center rounded-full border-2 border-ink px-3 py-1 font-mono text-sm font-bold text-white"
                    style={{ background: city.accent.from }}
                  >
                    {city.budgetPerDay.budget} EUR
                  </span>
                </td>
                <td className="px-4 py-4 font-mono text-xs text-ink/70">
                  {city.budgetPerDay.mid} EUR
                </td>
                <td className="px-4 py-4 font-mono text-xs text-ink/70">
                  {months(city.bestMonths)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-sm text-ink/60">
        Budget is the on-a-budget daily figure: a hostel or cheap room, local
        transport, market and street food, and free or low-cost sights. Mid is a
        comfortable three-star trip. New cities join the ranking as they are
        published, and each city links to its full budget guide.
      </p>

      <div className="mt-14">
        <FaqSection faqs={faqs} />
      </div>
    </div>
  );
}
