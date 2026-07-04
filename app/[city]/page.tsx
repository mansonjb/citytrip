import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cities, getCityData, getPublishedCity } from "@/data";
import { getHotels } from "@/data/hotels";
import { HotelsRail } from "@/components/HotelsRail";
import { cityVars } from "@/lib/style";
import { MONTHS } from "@/lib/months";
import { articleSchema, breadcrumbSchema, faqSchema, type Faq } from "@/lib/seo";
import { BoardingPass } from "@/components/BoardingPass";
import { FaqSection } from "@/components/FaqSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CityCard } from "@/components/CityCard";
import { JsonLd } from "@/components/JsonLd";
import { MonthGrid } from "@/components/MonthGrid";
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
  const city = getPublishedCity(slug);
  if (!city) return {};
  return {
    title: `${city.name} city break: how many days, where to stay, when to go`,
    description: `${city.name} in ${city.idealDays} days: day-by-day itineraries, the right neighborhood for your trip, month-by-month advice and honest budgets.`,
    alternates: { canonical: `/${city.slug}` },
  };
}

export default async function CityHubPage({ params }: Props) {
  const { city: slug } = await params;
  const data = getCityData(slug);
  if (!data) notFound();
  const { city, neighborhoods, itineraries } = data;

  const bestMonthNames = city.bestMonths
    .map((m) => MONTHS.find((x) => x.num === m)?.name)
    .filter(Boolean);

  const faqs: Faq[] = [
    {
      q: `How many days do you need in ${city.name}?`,
      a: `${city.idealDays} days is the sweet spot for ${city.name}. ${
        itineraries.find((i) => i.days === city.idealDays)?.summary.split(". ")[1] ?? ""
      }`,
    },
    {
      q: `When is the best time to visit ${city.name}?`,
      a: `The best months are ${bestMonthNames.join(", ")}. ${
        city.avoidMonths?.length
          ? `Think twice about ${city.avoidMonths
              .map((m) => MONTHS.find((x) => x.num === m)?.name)
              .join(" and ")}: ${city.monthlyNotes[city.avoidMonths[0]]}`
          : ""
      }`,
    },
    {
      q: `Is ${city.name} expensive?`,
      a: `${city.name} sits ${
        city.budgetLevel === "low"
          ? "below"
          : city.budgetLevel === "mid"
            ? "around"
            : "above"
      } the European average. Plan roughly ${city.budgetPerDay.budget} EUR per day on a tight budget, ${city.budgetPerDay.mid} EUR for a comfortable mid-range trip, and ${city.budgetPerDay.high} EUR and up if you want top hotels and restaurants.`,
    },
    {
      q: `Where should first-timers stay in ${city.name}?`,
      a: (() => {
        const ft = neighborhoods.find((n) => n.bestFor.includes("first-time"));
        return ft
          ? `${ft.name} is the safest first-visit base. ${ft.vibe}`
          : `See the full neighborhood comparison on our where-to-stay guide.`;
      })(),
    },
  ];

  const answer = `${city.name} works best as a ${city.idealDays}-day city break. ${city.heroIntro}`;

  return (
    <div style={cityVars(city)}>
      <JsonLd
        data={[
          articleSchema({
            title: `${city.name} city break guide`,
            description: answer,
            path: `/${city.slug}`,
          }),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Destinations", path: "/destinations" },
            { name: city.name, path: `/${city.slug}` },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="city-gradient border-b-2 border-ink">
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-10">
          <Breadcrumbs
            items={[
              { name: "Destinations", path: "/destinations" },
              { name: city.name, path: `/${city.slug}` },
            ]}
          />
          <div className="mt-8 flex flex-wrap items-start gap-3">
            <Stamp className="bg-paper/90 text-ink">{city.country}</Stamp>
            <Stamp className="bg-paper/90 text-ink">
              {city.idealDays} days ideal
            </Stamp>
          </div>
          <h1 className="font-display mt-4 text-6xl font-bold tracking-tight text-white drop-shadow-[3px_3px_0_rgba(26,26,46,0.35)] sm:text-8xl">
            {city.name}
          </h1>
          <p className="mt-3 max-w-xl text-lg font-medium text-white/95">
            {city.tagline}
          </p>
        </div>
      </section>

      <TripToolbar
        items={[
          { href: "#hotels", label: "Hotels" },
          { href: "#days", label: "How many days" },
          { href: "#stay", label: "Where to stay" },
          { href: "#months", label: "When to go" },
          { href: "#map", label: "Hotel map" },
          { href: "#faq", label: "FAQ" },
        ]}
        cta={{ href: "#hotels", label: "Find hotels" }}
      />

      <div className="mx-auto max-w-6xl space-y-16 px-4 py-12">
        <BoardingPass
          city={city}
          kicker="City break pass"
          answer={answer}
          fields={[
            { label: "Ideal stay", value: `${city.idealDays} days` },
            {
              label: "Best months",
              value: city.bestMonths
                .slice(0, 3)
                .map((m) => MONTHS.find((x) => x.num === m)?.short)
                .join(" · "),
            },
            { label: "Mid budget", value: `${city.budgetPerDay.mid} EUR/day` },
            { label: "Airport", value: city.airportToCenter.split(",")[0] },
          ]}
        />

        <HotelsRail city={city} hotels={getHotels(city.slug)} />

        {/* Durations */}
        <section id="days" className="scroll-mt-28">
          <h2 className="font-display mb-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            How many days in {city.name}?
          </h2>
          <p className="mb-8 max-w-2xl text-ink/75">
            Pick the itinerary that matches your trip. Each one is a full
            day-by-day plan, not a list of 30 things to squeeze in.
          </p>
          <div className="grid gap-5 sm:grid-cols-3">
            {itineraries.map((it) => (
              <Link
                key={it.days}
                href={`/${city.slug}/${it.days}-days`}
                className="group rounded-2xl bg-paper p-6 hard-shadow transition-all hover:-translate-y-1 hover:hard-shadow-city"
              >
                <p
                  className="font-display text-5xl font-bold"
                  style={{ color: "var(--city)" }}
                >
                  {it.days}
                </p>
                <p className="label-mono mt-1 text-ink/50">days</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/80">
                  {it.summary.split(". ").slice(0, 2).join(". ")}.
                </p>
                <p className="label-mono mt-4 group-hover:underline">
                  See the itinerary →
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Where to stay teaser */}
        <section id="stay" className="scroll-mt-28">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display mb-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                Where to stay in {city.name}
              </h2>
              <p className="max-w-2xl text-ink/75">
                {city.centerWalkable
                  ? `${city.name} has a walkable center, so the neighborhood you pick sets the tone of the whole trip.`
                  : `${city.name} is spread out, so picking the right base saves you hours of transit.`}
              </p>
            </div>
            <Link
              href={`/${city.slug}/where-to-stay`}
              className="label-mono hidden whitespace-nowrap underline underline-offset-4 sm:block"
            >
              Full comparison
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {neighborhoods.slice(0, 3).map((n) => (
              <Link
                key={n.slug}
                href={`/${city.slug}/where-to-stay#${n.slug}`}
                className="rounded-2xl border-2 border-ink bg-paper p-5 transition-all hover:-translate-y-1 hover:hard-shadow"
              >
                <p className="font-display text-xl font-semibold">{n.name}</p>
                <p className="label-mono mt-1" style={{ color: "var(--city)" }}>
                  {n.bestFor[0].replace("-", " ")}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">
                  {n.vibe.split(". ")[0]}.
                </p>
              </Link>
            ))}
          </div>
          <Link
            href={`/${city.slug}/where-to-stay`}
            className="label-mono mt-4 inline-block underline underline-offset-4 sm:hidden"
          >
            Full comparison →
          </Link>
        </section>

        {/* Months */}
        <section id="months" className="scroll-mt-28">
          <h2 className="font-display mb-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            {city.name}, month by month
          </h2>
          <p className="mb-6 max-w-2xl text-ink/75">
            Colored months are the sweet spot. Struck-through months come with
            a warning. Each page covers weather, crowds, prices and what to
            pack.
          </p>
          <MonthGrid city={city} />
        </section>

        {/* Stay22 */}
        <section id="map" className="scroll-mt-28">
          <h2 className="font-display mb-6 text-3xl font-semibold tracking-tight sm:text-4xl">
            Hotel prices right now
          </h2>
          <Stay22Map
            lat={city.lat}
            lng={city.lng}
            title={`Hotels in ${city.name}`}
            accent={city.accent.from}
          />
        </section>

        {/* Budget + nearby */}
        <section className="grid gap-5 md:grid-cols-2">
          <Link
            href={`/${city.slug}/on-a-budget`}
            className="rounded-2xl bg-paper p-7 hard-shadow transition-all hover:-translate-y-1 hover:hard-shadow-city"
          >
            <p className="label-mono mb-2" style={{ color: "var(--city)" }}>
              Tight budget?
            </p>
            <p className="font-display text-2xl font-semibold tracking-tight">
              {city.name} on a budget: same trip, around{" "}
              {city.budgetPerDay.budget} EUR a day
            </p>
            <p className="label-mono mt-4 underline underline-offset-4">
              Read the budget guide →
            </p>
          </Link>
          <div className="rounded-2xl border-2 border-ink bg-paper p-7">
            <p className="label-mono mb-3 text-ink/50">Pairs well with</p>
            <ul className="space-y-2">
              {city.nearbyCitySlugs.map((s) => {
                const nearby = getPublishedCity(s);
                return (
                  <li key={s}>
                    {nearby ? (
                      <Link
                        href={`/${nearby.slug}`}
                        className="font-display text-xl font-semibold underline-offset-4 hover:underline"
                      >
                        {nearby.name} →
                      </Link>
                    ) : (
                      <span className="font-display text-xl font-semibold text-ink/40">
                        {s.charAt(0).toUpperCase() + s.slice(1)} (coming soon)
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <FaqSection faqs={faqs} />
      </div>
    </div>
  );
}
