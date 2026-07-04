import Link from "next/link";
import { cities } from "@/data";
import { SITE_NAME } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t-2 border-ink bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-bold">CityTrip</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70">
            The right number of days, the right neighborhood, the right month.
            City break guides built from structured data and real opening
            hours, not filler.
          </p>
        </div>
        <div>
          <p className="label-mono mb-4 text-cream/50">Cities</p>
          <ul className="space-y-2 text-sm">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link href={`/${c.slug}`} className="hover:underline">
                  {c.name}, {c.country}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label-mono mb-4 text-cream/50">Site</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/destinations" className="hover:underline">
                All destinations
              </Link>
            </li>
            <li>
              <Link href="/guides" className="hover:underline">
                Travel guides
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About and methodology
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:underline">
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/15">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-cream/50">
          {SITE_NAME} earns commissions from booking links (Stay22 and ticket
          partners). This never changes the price you pay and never changes our
          recommendations.
        </p>
      </div>
    </footer>
  );
}
