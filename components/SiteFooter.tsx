import Link from "next/link";
import { cities } from "@/data";
import { STR, localePath, type Locale } from "@/lib/i18n";

export function SiteFooter({ locale = "en" }: { locale?: Locale }) {
  const t = STR[locale].footer;
  return (
    <footer className="mt-20 border-t-2 border-ink bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-bold">
            Perfect<span className="text-coral">City</span>Break
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70">
            {t.tagline}
          </p>
        </div>
        <div>
          <p className="label-mono mb-4 text-cream/50">{t.cities}</p>
          <ul className="space-y-2 text-sm">
            {cities(locale).map((c) => (
              <li key={c.slug}>
                <Link
                  href={localePath(locale, `/${c.slug}`)}
                  className="hover:underline"
                >
                  {c.name}, {c.country}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label-mono mb-4 text-cream/50">{t.site}</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href={localePath(locale, "/destinations")}
                className="hover:underline"
              >
                {t.allDestinations}
              </Link>
            </li>
            <li>
              <Link href="/guides" className="hover:underline">
                {t.travelGuides}
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                {t.aboutMethod}
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:underline">
                {t.privacy}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/15">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-cream/50">
          {t.disclosure}
        </p>
      </div>
    </footer>
  );
}
