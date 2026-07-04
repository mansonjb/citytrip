import Link from "next/link";
import type { City } from "@/data/types";
import { MONTHS } from "@/lib/months";

const BUDGET_LABEL = { low: "€", mid: "€€", high: "€€€" } as const;

// Editorial destination card: gradient identity block + mono facts strip.
export function CityCard({ city }: { city: City }) {
  const best = city.bestMonths
    .slice(0, 3)
    .map((m) => MONTHS.find((x) => x.num === m)?.short)
    .filter(Boolean)
    .join(" · ");
  return (
    <Link
      href={`/${city.slug}`}
      className="group block overflow-hidden rounded-2xl bg-paper hard-shadow transition-transform hover:-translate-y-1"
      style={{
        ["--city" as string]: city.accent.from,
        ["--city-to" as string]: city.accent.to,
      }}
    >
      <div className="city-gradient relative flex h-44 flex-col justify-between p-5">
        <span className="stamp self-start bg-paper/90 text-ink">
          {city.country}
        </span>
        <p className="font-display text-4xl font-bold tracking-tight text-white drop-shadow-[2px_2px_0_rgba(26,26,46,0.35)]">
          {city.name}
        </p>
      </div>
      <div className="grid grid-cols-3 divide-x-2 divide-ink border-t-2 border-ink text-center">
        <div className="px-2 py-3">
          <p className="label-mono text-ink/45">Days</p>
          <p className="font-mono text-sm font-bold">{city.idealDays}</p>
        </div>
        <div className="px-2 py-3">
          <p className="label-mono text-ink/45">Best</p>
          <p className="font-mono text-sm font-bold">{best}</p>
        </div>
        <div className="px-2 py-3">
          <p className="label-mono text-ink/45">Budget</p>
          <p className="font-mono text-sm font-bold">
            {BUDGET_LABEL[city.budgetLevel]}
          </p>
        </div>
      </div>
      <p className="border-t border-ink/10 px-5 py-3 text-sm text-ink/75">
        {city.tagline}
      </p>
    </Link>
  );
}
