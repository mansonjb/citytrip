import type { Hotel } from "./types";
import type { Locale } from "@/lib/i18n";
import hotelsEnData from "./hotels.en";
import hotelsFr from "./hotels.fr";
import hotelsPt from "./hotels.pt";
import hotelsIt from "./hotels.it";
import hotelsDe from "./hotels.de";

const byLocale: Record<Locale, Hotel[]> = {
  en: hotelsEnData,
  fr: hotelsFr,
  pt: hotelsPt,
  it: hotelsIt,
  de: hotelsDe,
};

export function getHotels(citySlug: string, locale: Locale = "en"): Hotel[] {
  return byLocale[locale].filter((h) => h.citySlug === citySlug);
}
