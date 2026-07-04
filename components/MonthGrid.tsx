import Link from "next/link";
import type { City } from "@/data/types";
import { MONTHS } from "@/lib/months";
import { localePath, monthShort, type Locale } from "@/lib/i18n";

// 12 chips linking to the /[city]/in-[month] pages.
// Best months get the city gradient, months to avoid get struck through.
export function MonthGrid({
  city,
  current,
  locale = "en",
}: {
  city: City;
  current?: number;
  locale?: Locale;
}) {
  return (
    <ul className="grid grid-cols-3 gap-2 sm:grid-cols-6">
      {MONTHS.map((m) => {
        const best = city.bestMonths.includes(m.num);
        const avoid = city.avoidMonths?.includes(m.num);
        const isCurrent = current === m.num;
        const label = monthShort(locale, m.num);
        return (
          <li key={m.num}>
            <Link
              href={localePath(locale, `/${city.slug}/${m.slug}`)}
              aria-current={isCurrent ? "page" : undefined}
              className={`block rounded-xl border-2 px-3 py-2.5 text-center transition-transform hover:-translate-y-0.5 ${
                isCurrent
                  ? "border-ink bg-ink text-cream"
                  : best
                    ? "city-gradient border-ink font-semibold text-white"
                    : "border-ink/20 bg-paper text-ink/70"
              }`}
            >
              <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                {avoid && !isCurrent ? <s>{label}</s> : label}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
