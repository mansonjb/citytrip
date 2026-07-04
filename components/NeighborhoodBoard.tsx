import type { Neighborhood } from "@/data/types";
import { STR, type Locale } from "@/lib/i18n";
import { AffiliateLink, stay22SearchUrl } from "./AffiliateLink";

// Departure-board style decision table: trip type -> neighborhood -> CTA.
export function NeighborhoodBoard({
  neighborhoods,
  locale = "en",
}: {
  neighborhoods: Neighborhood[];
  locale?: Locale;
}) {
  const aid = process.env.NEXT_PUBLIC_STAY22_AID ?? "";
  const t = STR[locale];
  return (
    <div className="overflow-x-auto rounded-2xl bg-paper hard-shadow">
      <table className="w-full min-w-[560px] border-collapse text-sm">
        <thead>
          <tr className="bg-ink text-left">
            <th className="label-mono px-4 py-3 text-cream">
              {t.wts.boardNeighborhood}
            </th>
            <th className="label-mono px-4 py-3 text-cream">
              {t.wts.boardBookIf}
            </th>
            <th className="label-mono px-4 py-3 text-cream">
              {t.wts.boardWatchOut}
            </th>
            <th className="label-mono px-4 py-3 text-right text-cream">
              {t.wts.boardHotels}
            </th>
          </tr>
        </thead>
        <tbody>
          {neighborhoods.map((n) => (
            <tr key={n.slug} className="border-t border-ink/10 align-top">
              <td className="px-4 py-3">
                <a
                  href={`#${n.slug}`}
                  className="font-semibold underline-offset-2 hover:underline"
                >
                  {n.name}
                </a>
                <p className="mt-1 flex flex-wrap gap-1">
                  {n.bestFor.map((b) => (
                    <span
                      key={b}
                      className="label-mono rounded-full border border-ink/25 px-2 py-0.5 text-[0.6rem] text-ink/60"
                    >
                      {t.bestFor[b]}
                    </span>
                  ))}
                </p>
              </td>
              <td className="px-4 py-3 text-ink/80">{n.pros[0]}</td>
              <td className="px-4 py-3 text-ink/80">{n.cons[0]}</td>
              <td className="px-4 py-3 text-right">
                <AffiliateLink
                  href={stay22SearchUrl({ lat: n.lat, lng: n.lng, aid })}
                  className="label-mono inline-block whitespace-nowrap rounded-full border-2 border-ink bg-ink px-3 py-1.5 font-semibold text-white"
                >
                  {t.common.checkPrices}
                </AffiliateLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
