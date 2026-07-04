"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LOCALES,
  LOCALE_LABELS,
  localePath,
  type Locale,
} from "@/lib/i18n";

// Same-page language links. EN lives at the root, others under /fr /pt /it /de.
// Guides/about/privacy only exist in EN, so those fall back to the locale home.
export function LanguageSwitcher({
  current,
  citySlugs,
}: {
  current: Locale;
  citySlugs: string[];
}) {
  const pathname = usePathname() ?? "/";
  const nonDefault = LOCALES.filter((l) => l !== "en");
  const prefix = nonDefault.find(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  const path = prefix
    ? pathname.slice(prefix.length + 1) || "/"
    : pathname;

  const firstSegment = path.split("/")[1] ?? "";
  const translatable =
    path === "/" ||
    firstSegment === "destinations" ||
    citySlugs.includes(firstSegment);

  return (
    <div className="flex items-center gap-0.5" aria-label="Languages">
      {LOCALES.map((l) => (
        <Link
          key={l}
          href={translatable ? localePath(l, path) : localePath(l, "/")}
          className={`rounded-full px-1.5 py-0.5 font-mono text-[0.6rem] font-semibold tracking-wider ${
            l === current
              ? "bg-ink text-cream"
              : "text-ink/50 hover:text-ink"
          }`}
        >
          {LOCALE_LABELS[l]}
        </Link>
      ))}
    </div>
  );
}
