import type { Metadata } from "next";
import Link from "next/link";
import { cityBundles } from "@/data";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Stamp } from "@/components/Stamp";
import { articleSchema, breadcrumbSchema, faqSchema, itemListSchema } from "@/lib/seo";
import { FaqSection } from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "How many days do you need in each European city?",
  description:
    "The ideal city break length for every city we cover, with the reasoning: what fits in 2 days, what needs 3, and when a week makes sense.",
  alternates: { canonical: "/guides/how-many-days" },
};

// The linkable master table: generated from /data, never hand-maintained.
export default function HowManyDaysPage() {
  const rows = cityBundles.map(({ city, itineraries }) => ({
    city,
    reason:
      itineraries
        .find((i) => i.days === city.idealDays)
        ?.summary.split(". ")
        .slice(0, 2)
        .join(". ") + ".",
  }));

  const faqs = rows.map(({ city, reason }) => ({
    q: `How many days do you need in ${city.name}?`,
    a: `${city.idealDays} days. ${reason}`,
  }));

  const path = "/guides/how-many-days";

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <JsonLd
        data={[
          articleSchema({
            title: "How many days do you need in each European city?",
            description: metadata.description as string,
            path,
          }),
          faqSchema(faqs),
          itemListSchema(rows.map((r) => ({ name: r.city.name, path: `/${r.city.slug}` }))),
          breadcrumbSchema([
            { name: "Guides", path: "/guides" },
            { name: "How many days", path },
          ]),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Guides", path: "/guides" },
          { name: "How many days", path },
        ]}
      />
      <div className="mt-8">
        <Stamp color="#2743d8">Planning</Stamp>
      </div>
      <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
        How many days do you need in each city?
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/80">
        The most common city break mistake is length, in both directions. This
        table is the site&apos;s master answer: the ideal duration per city and
        why, based on how much ground each center actually covers.
      </p>

      <div className="mt-10 overflow-x-auto rounded-2xl bg-paper hard-shadow">
        <table className="w-full min-w-[520px] border-collapse text-sm">
          <thead>
            <tr className="bg-ink text-left">
              <th className="label-mono px-4 py-3 text-cream">City</th>
              <th className="label-mono px-4 py-3 text-cream">Ideal</th>
              <th className="label-mono px-4 py-3 text-cream">Also works</th>
              <th className="label-mono px-4 py-3 text-cream">Why</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ city, reason }) => (
              <tr key={city.slug} className="border-t border-ink/10 align-top">
                <td className="px-4 py-4">
                  <Link
                    href={`/${city.slug}`}
                    className="font-display text-lg font-semibold underline-offset-4 hover:underline"
                  >
                    {city.name}
                  </Link>
                  <p className="label-mono mt-0.5 text-ink/45">{city.country}</p>
                </td>
                <td className="px-4 py-4">
                  <span
                    className="inline-flex size-9 items-center justify-center rounded-full border-2 border-ink font-mono text-sm font-bold text-white"
                    style={{ background: city.accent.from }}
                  >
                    {city.idealDays}
                  </span>
                </td>
                <td className="px-4 py-4 font-mono text-xs">
                  {city.durations
                    .filter((d) => d !== city.idealDays)
                    .map((d) => (
                      <Link
                        key={d}
                        href={`/${city.slug}/${d}-days`}
                        className="mr-2 underline underline-offset-2"
                      >
                        {d}d
                      </Link>
                    ))}
                </td>
                <td className="max-w-sm px-4 py-4 leading-relaxed text-ink/80">
                  {reason}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-sm text-ink/60">
        New cities join this table as they are published. Each duration links
        to a full day-by-day itinerary.
      </p>

      <div className="mt-14">
        <FaqSection faqs={faqs} />
      </div>
    </div>
  );
}
