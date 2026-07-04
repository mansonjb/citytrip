import Link from "next/link";
import { cities } from "@/data";
import { STR, localePath, type Locale } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function SiteHeader({ locale = "en" }: { locale?: Locale }) {
  const t = STR[locale].header;
  const citySlugs = cities("en").map((c) => c.slug);
  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href={localePath(locale, "/")} className="flex items-baseline gap-2">
          <span className="font-display text-xl font-bold tracking-tight">
            Perfect<span className="text-coral">City</span>Break
          </span>
          <span className="label-mono hidden text-ink/60 sm:inline">.com</span>
        </Link>
        <nav className="flex items-center gap-3 sm:gap-5">
          <Link
            href={localePath(locale, "/destinations")}
            className="label-mono text-ink/80 hover:text-ink"
          >
            {t.destinations}
          </Link>
          <Link href="/guides" className="label-mono hidden text-ink/80 hover:text-ink sm:inline">
            {t.guides}
          </Link>
          <Link
            href="/about"
            className="label-mono hidden text-ink/80 hover:text-ink md:inline"
          >
            {t.method}
          </Link>
          <LanguageSwitcher current={locale} citySlugs={citySlugs} />
        </nav>
      </div>
    </header>
  );
}
