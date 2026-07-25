import en from "./en";
import fr from "./fr";
import pt from "./pt";
import it from "./it";
import de from "./de";
import es from "./es";

export const LOCALES = ["en", "fr", "pt", "it", "de", "es"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";
export const NON_DEFAULT_LOCALES = ["fr", "pt", "it", "de", "es"] as const;

export type UIStrings = typeof en;

export const STR: Record<Locale, UIStrings> = { en, fr, pt, it, de, es };

// "{city} in {days} days" -> fmt(s, { city: "Lisbon", days: 3 })
export function fmt(
  s: string,
  params: Record<string, string | number>
): string {
  return s.replace(/\{(\w+)\}/g, (_, k) =>
    params[k] !== undefined ? String(params[k]) : `{${k}}`
  );
}

// EN lives at the root, other locales under /fr /pt /it /de.
export function localePath(locale: Locale, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === "en") return clean;
  return clean === "/" ? `/${locale}` : `/${locale}${clean}`;
}

export function monthName(locale: Locale, num: number): string {
  return STR[locale].months[num - 1];
}

export function monthShort(locale: Locale, num: number): string {
  return STR[locale].monthsShort[num - 1];
}

// hreflang map for a path (path WITHOUT locale prefix). Pass `locales` to limit
// the alternates to the languages a page is actually published in (a city that
// only exists in EN must not advertise /fr, /de ... siblings that would 404).
export function hreflangs(
  path: string,
  locales: readonly Locale[] = LOCALES
): Record<string, string> {
  const map: Record<string, string> = {};
  for (const l of locales) map[l] = localePath(l, path);
  if (locales.includes("en")) map["x-default"] = localePath("en", path);
  return map;
}

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
  pt: "PT",
  it: "IT",
  de: "DE",
  es: "ES",
};

export const HTML_LANG: Record<Locale, string> = {
  en: "en",
  fr: "fr",
  pt: "pt-PT",
  it: "it",
  de: "de",
  es: "es",
};
