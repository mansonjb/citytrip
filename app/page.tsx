import Link from "next/link";
import { cities } from "@/data";
import { CityCard } from "@/components/CityCard";
import { JsonLd } from "@/components/JsonLd";
import { itemListSchema } from "@/lib/seo";
import { MONTHS } from "@/lib/months";

export default function HomePage() {
  const accentWords = [
    { text: "days", color: "#2743d8" },
    { text: "neighborhood", color: "#0e9b76" },
    { text: "month", color: "#ff5a5f" },
  ];
  return (
    <>
      <JsonLd
        data={itemListSchema(
          cities.map((c) => ({ name: c.name, path: `/${c.slug}` }))
        )}
      />
      {/* Text-first hero: the promise, oversized */}
      <section className="border-b-2 border-ink">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <p className="stamp mb-6 text-coral">City breaks, planned properly</p>
          <h1 className="font-display max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
            The right{" "}
            <span style={{ color: accentWords[0].color }}>days</span>. The
            right{" "}
            <span style={{ color: accentWords[1].color }}>neighborhood</span>.
            The right{" "}
            <span style={{ color: accentWords[2].color }}>month</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/80">
            Every guide here answers the three questions that actually decide a
            city break: how long to stay, where to sleep, and when to go. Day
            by day, with opening hours, queue hacks and honest budgets.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/destinations"
              className="rounded-full border-2 border-ink bg-ink px-6 py-3 font-semibold text-cream transition-transform hover:-translate-y-0.5"
            >
              Pick a city
            </Link>
            <Link
              href="/guides/how-many-days"
              className="rounded-full border-2 border-ink bg-paper px-6 py-3 font-semibold transition-transform hover:-translate-y-0.5"
            >
              How many days do I need?
            </Link>
          </div>
        </div>
      </section>

      {/* Departure board */}
      <section className="border-b-2 border-ink bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <p className="label-mono mb-5 text-cream/50">
            Departures · updated July 2026
          </p>
          <ul className="divide-y divide-cream/15">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/${c.slug}`}
                  className="group flex flex-wrap items-baseline gap-x-6 gap-y-1 py-4"
                >
                  <span className="font-mono text-sm text-cream/50">
                    {c.airportCode}
                  </span>
                  <span className="font-display text-2xl font-semibold tracking-tight group-hover:underline">
                    {c.name}
                  </span>
                  <span className="font-mono text-sm text-cream/70">
                    {c.idealDays} days ideal
                  </span>
                  <span className="hidden font-mono text-sm text-cream/70 sm:inline">
                    best{" "}
                    {c.bestMonths
                      .slice(0, 3)
                      .map((m) => MONTHS.find((x) => x.num === m)?.short)
                      .join(" ")}
                  </span>
                  <span
                    className="ml-auto font-mono text-sm"
                    style={{ color: c.accent.from }}
                  >
                    boarding →
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
            Where next?
          </h2>
          <Link href="/destinations" className="label-mono underline underline-offset-4">
            All destinations
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((c) => (
            <CityCard key={c.slug} city={c} />
          ))}
        </div>
      </section>

      {/* Method */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-2xl bg-paper p-8 hard-shadow sm:p-10">
          <p className="label-mono mb-3 text-viridian">Our method</p>
          <h2 className="font-display max-w-2xl text-3xl font-semibold tracking-tight">
            No &quot;hidden gems&quot;. No 40-item listicles. A decision per
            page.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink/80">
            Each city is built as structured data: how many days it really
            needs, which neighborhoods suit which trip, what each month feels
            like, what things cost. Every tip has to pass one test: can you act
            on it? If not, it gets cut.{" "}
            <Link href="/about" className="underline underline-offset-2">
              Read the full methodology
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
