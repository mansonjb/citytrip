import type { CityExtras } from "./types";
import type { Locale } from "@/lib/i18n";
import extrasEn from "./extras.en";
import extrasFr from "./extras.fr";
import extrasPt from "./extras.pt";
import extrasIt from "./extras.it";
import extrasDe from "./extras.de";
import extrasEs from "./extras.es";

const byLocale: Record<Locale, Record<string, CityExtras>> = {
  en: extrasEn,
  fr: extrasFr,
  pt: extrasPt,
  it: extrasIt,
  de: extrasDe,
  es: extrasEs,
};

// Enriched editorial content (hero photo, history, known-for chips) per city.
// Falls back to English if a locale is missing an entry.
export function getCityExtras(
  citySlug: string,
  locale: Locale = "en"
): CityExtras | undefined {
  return byLocale[locale]?.[citySlug] ?? extrasEn[citySlug];
}
