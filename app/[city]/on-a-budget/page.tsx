import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cities, getCityData } from "@/data";
import { getHotels } from "@/data/hotels";
import { HotelsRail } from "@/components/HotelsRail";
import { cityVars } from "@/lib/style";
import { articleSchema, breadcrumbSchema, faqSchema, type Faq } from "@/lib/seo";
import { BoardingPass } from "@/components/BoardingPass";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { Stamp } from "@/components/Stamp";
import { Stay22Map } from "@/components/Stay22Map";

export const revalidate = 86400;
export const dynamicParams = false;

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

type Props = { params: Promise<{ city: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params;
  const data = getCityData(slug);
  if (!data) return {};
  const { city } = data;
  return {
    title: `${city.name} on a budget: the same trip for ${city.budgetPerDay.budget} EUR a day`,
    description: `How to do a ${city.name} city break on about ${city.budgetPerDay.budget} EUR per day: the free sights that are actually good, where to sleep cheap, and where locals eat.`,
    alternates: { canonical: `/${city.slug}/on-a-budget` },
  };
}

export default async function BudgetPage({ params }: Props) {
  const { city: slug } = await params;
  const data = getCityData(slug);
  if (!data) notFound();
  const { city, neighborhoods, pois } = data;
  const path = `/${city.slug}/on-a-budget`;

  const budgetHood =
    neighborhoods.find((n) => n.bestFor.includes("budget")) ?? neighborhoods[0];
  const freePois = pois.filter(
    (p) => !p.needsBooking && (p.kind === "viewpoint" || p.kind === "park" || p.kind === "sight")
  );
  const foodPois = pois.filter((p) => p.kind === "food");

  const answer = `A ${city.name} city break on about ${city.budgetPerDay.budget} EUR per person per day is realistic. The formula: sleep in ${budgetHood.name}, walk instead of riding (${
    city.centerWalkable ? "the center is compact enough" : "pick one zone per day"
  }), build days around free anchors like ${freePois
    .slice(0, 2)
    .map((p) => p.name)
    .join(" and ")}, and eat where the locals do. Getting in from the airport is cheap too: ${city.airportToCenter}.`;

  const faqs: Faq[] = [
    { q: `How much does a budget trip to ${city.name} cost?`, a: answer },
    {
      q: `What can you do for free in ${city.name}?`,
      a: `The strongest free sights in ${city.name}: ${freePois
        .slice(0, 4)
        .map((p) => p.name)
        .join(", ")}. Several paid sights also have free or reduced windows; check the tips on each itinerary page.`,
    },
    {
      q: `What is the cheapest area to stay in ${city.name}?`,
      a: `${budgetHood.name}. ${budgetHood.vibe}`,
    },
  ];

  return (
    <div style={cityVars(city)}>
      <JsonLd
        data={[
          articleSchema({
            title: `${city.name} on a budget`,
            description: answer.slice(0, 160),
            path,
          }),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: city.name, path: `/${city.slug}` },
            { name: "On a budget", path },
          ]),
        ]}
      />

      <section className="border-b-2 border-ink bg-paper">
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-10">
          <Breadcrumbs
            items={[
              { name: city.name, path: `/${city.slug}` },
              { name: "On a budget", path },
            ]}
          />
          <div className="mt-8">
            <Stamp color="#0e9b76">
              ~{city.budgetPerDay.budget} EUR / day
            </Stamp>
          </div>
          <h1 className="font-display mt-4 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
            <span className="highlight-city">{city.name}</span> on a budget
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-3xl space-y-14 px-4 py-12">
        <BoardingPass
          city={city}
          kicker="Budget pass"
          answer={answer}
          fields={[
            { label: "Daily target", value: `${city.budgetPerDay.budget} EUR` },
            { label: "Sleep in", value: budgetHood.name },
            { label: "Airport", value: city.airportToCenter.split(",")[0] },
            { label: "Free sights", value: `${freePois.length}+` },
          ]}
        />

        <HotelsRail
          city={city}
          hotels={getHotels(city.slug).filter((h) => h.band !== "€€€")}
          columns={2}
          title="Sleep cheap, sleep well"
          intro={`The picks under ${city.budgetPerDay.mid} EUR that do not feel like a compromise.`}
        />

        <section>
          <h2 className="font-display mb-4 text-3xl font-semibold tracking-tight">
            The free anchors
          </h2>
          <p className="mb-5 leading-relaxed text-ink/80">
            These cost nothing and carry a full day each. Build around them and
            the paid tickets become optional extras instead of a budget drain.
          </p>
          <ul className="space-y-4">
            {freePois.map((p) => (
              <li key={p.slug} className="rounded-2xl bg-paper p-5 hard-shadow">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="font-semibold">{p.name}</p>
                  <span className="label-mono text-viridian">Free</span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-ink/80">
                  <span className="label-mono mr-2" style={{ color: "var(--city)" }}>
                    Tip
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
              Eat well, pay local prices
            </h2>
            <ul className="space-y-4">
              {foodPois.map((p) => (
                <li key={p.slug} className="rounded-2xl border-2 border-ink bg-paper p-5">
                  <p className="font-semibold">{p.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink/80">{p.tip}</p>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <section>
          <h2 className="font-display mb-4 text-3xl font-semibold tracking-tight">
            Sleep cheap in {budgetHood.name}
          </h2>
          <p className="mb-5 leading-relaxed text-ink/85">{budgetHood.vibe}</p>
          <Stay22Map
            lat={budgetHood.lat}
            lng={budgetHood.lng}
            title={`Hotels in ${budgetHood.name}`}
            accent={city.accent.from}
          />
        </section>

        <p className="text-ink/80">
          Now put it in order:{" "}
          <Link
            href={`/${city.slug}/${city.idealDays}-days`}
            className="underline underline-offset-2"
          >
            the {city.idealDays}-day {city.name} itinerary
          </Link>{" "}
          works on this budget with the swaps above.
        </p>

        <FaqSection faqs={faqs} />
      </div>
    </div>
  );
}
