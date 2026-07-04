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
import { NeighborhoodBoard } from "@/components/NeighborhoodBoard";
import { Stamp } from "@/components/Stamp";
import { Stay22Map } from "@/components/Stay22Map";
import { TripToolbar } from "@/components/TripToolbar";

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
    title: `Where to stay in ${city.name}: best areas compared`,
    description: `The best neighborhoods to stay in ${city.name} for first-timers, nightlife, families and budgets. Honest pros and cons plus live hotel maps per area.`,
    alternates: { canonical: `/${city.slug}/where-to-stay` },
  };
}

export default async function WhereToStayPage({ params }: Props) {
  const { city: slug } = await params;
  const data = getCityData(slug);
  if (!data) notFound();
  const { city, neighborhoods } = data;
  const path = `/${city.slug}/where-to-stay`;

  const firstTimer = neighborhoods.find((n) => n.bestFor.includes("first-time"));
  const budget = neighborhoods.find((n) => n.bestFor.includes("budget"));
  const nightlife = neighborhoods.find((n) => n.bestFor.includes("nightlife"));

  const answer = `${
    firstTimer
      ? `For a first ${city.name} city break, stay in ${firstTimer.name}: ${firstTimer.pros[0].toLowerCase()}.`
      : `Stay central in ${city.name}.`
  } ${
    budget && budget.slug !== firstTimer?.slug
      ? `On a tighter budget, ${budget.name} gets you more room for less.`
      : ""
  } ${
    city.centerWalkable
      ? `The center is walkable, so any of the ${neighborhoods.length} areas below keeps you within reach of the main sights; what changes is the atmosphere you come home to.`
      : `Distances matter here, so match the area to the plan you actually have.`
  }`;

  const faqs: Faq[] = [
    { q: `What is the best area to stay in ${city.name}?`, a: answer },
    ...(nightlife
      ? [
          {
            q: `Where should I stay in ${city.name} for nightlife?`,
            a: `${nightlife.name} is the nightlife base. ${nightlife.vibe} Fair warning: ${nightlife.cons[0].toLowerCase()}`,
          },
        ]
      : []),
    ...(budget
      ? [
          {
            q: `What is the cheapest good area to stay in ${city.name}?`,
            a: `${budget.name} has the best price-to-location ratio. ${budget.vibe}`,
          },
        ]
      : []),
  ];

  return (
    <div style={cityVars(city)}>
      <JsonLd
        data={[
          articleSchema({
            title: `Where to stay in ${city.name}`,
            description: answer.slice(0, 160),
            path,
          }),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: city.name, path: `/${city.slug}` },
            { name: "Where to stay", path },
          ]),
        ]}
      />

      <section className="border-b-2 border-ink bg-paper">
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-10">
          <Breadcrumbs
            items={[
              { name: city.name, path: `/${city.slug}` },
              { name: "Where to stay", path },
            ]}
          />
          <div className="mt-8">
            <Stamp color={city.accent.from}>
              {neighborhoods.length} areas compared
            </Stamp>
          </div>
          <h1 className="font-display mt-4 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
            Where to stay in{" "}
            <span className="highlight-city">{city.name}</span>
          </h1>
        </div>
      </section>

      <TripToolbar
        items={[
          { href: "#hotels", label: "Our picks" },
          { href: "#board", label: "Compare" },
          ...neighborhoods.map((n) => ({ href: `#${n.slug}`, label: n.name })),
        ]}
      />

      <div className="mx-auto max-w-4xl space-y-14 px-4 py-12">
        <BoardingPass
          city={city}
          kicker="Room key"
          answer={answer}
          fields={[
            { label: "First visit", value: firstTimer?.name ?? "Center" },
            { label: "Budget pick", value: budget?.name ?? "See below" },
            { label: "Nightlife", value: nightlife?.name ?? "See below" },
            { label: "Mid hotel", value: `~${Math.round(city.budgetPerDay.mid * 0.45)} EUR/night` },
          ]}
        />

        <HotelsRail
          city={city}
          hotels={getHotels(city.slug)}
          columns={2}
          title="The shortlist"
          intro={`If you just want the answer: four vetted ${city.name} picks, from splurge to budget, each in a neighborhood compared below.`}
        />

        <section id="board" className="scroll-mt-28">
          <h2 className="font-display mb-6 text-3xl font-semibold tracking-tight">
            The decision board
          </h2>
          <NeighborhoodBoard neighborhoods={neighborhoods} />
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
                <p className="label-mono mb-2 text-viridian">Book it for</p>
                <ul className="space-y-1.5 text-sm leading-relaxed">
                  {n.pros.map((p) => (
                    <li key={p}>+ {p}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border-2 border-coral/60 bg-paper p-5">
                <p className="label-mono mb-2 text-coral">Know before</p>
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
              title={`Hotels in ${n.name}`}
              accent={city.accent.from}
            />
          </section>
        ))}

        <p className="text-ink/80">
          Neighborhood picked? Lock the plan next:{" "}
          <Link
            href={`/${city.slug}/${city.idealDays}-days`}
            className="underline underline-offset-2"
          >
            {city.name} in {city.idealDays} days, hour by hour
          </Link>
          .
        </p>

        <FaqSection faqs={faqs} />
      </div>
    </div>
  );
}
