import type { City, CityData, Itinerary, Neighborhood, Poi } from "./types";
import type { Locale } from "@/lib/i18n";
import lisbon from "./cities/lisbon";
import lisbonFr from "./cities/lisbon.fr";
import lisbonPt from "./cities/lisbon.pt";
import lisbonIt from "./cities/lisbon.it";
import lisbonDe from "./cities/lisbon.de";
import prague from "./cities/prague";
import pragueFr from "./cities/prague.fr";
import praguePt from "./cities/prague.pt";
import pragueIt from "./cities/prague.it";
import pragueDe from "./cities/prague.de";
import seville from "./cities/seville";
import sevilleFr from "./cities/seville.fr";
import sevillePt from "./cities/seville.pt";
import sevilleIt from "./cities/seville.it";
import sevilleDe from "./cities/seville.de";
import porto from "./cities/porto";
import portoFr from "./cities/porto.fr";
import portoPt from "./cities/porto.pt";
import portoIt from "./cities/porto.it";
import portoDe from "./cities/porto.de";
import budapest from "./cities/budapest";
import budapestFr from "./cities/budapest.fr";
import budapestPt from "./cities/budapest.pt";
import budapestIt from "./cities/budapest.it";
import budapestDe from "./cities/budapest.de";

// Register every city bundle per locale. Adding a city = one file per locale
// + one entry per array below (same order everywhere).
const bundlesByLocale: Record<Locale, CityData[]> = {
  en: [lisbon, prague, seville, porto, budapest],
  fr: [lisbonFr, pragueFr, sevilleFr, portoFr, budapestFr],
  pt: [lisbonPt, praguePt, sevillePt, portoPt, budapestPt],
  it: [lisbonIt, pragueIt, sevilleIt, portoIt, budapestIt],
  de: [lisbonDe, pragueDe, sevilleDe, portoDe, budapestDe],
};

export function cityBundles(locale: Locale = "en"): CityData[] {
  return bundlesByLocale[locale];
}

export function cities(locale: Locale = "en"): City[] {
  return bundlesByLocale[locale].map((b) => b.city);
}

export function getCityData(
  slug: string,
  locale: Locale = "en"
): CityData | undefined {
  return bundlesByLocale[locale].find((b) => b.city.slug === slug);
}

export function getCity(slug: string, locale: Locale = "en"): City | undefined {
  return getCityData(slug, locale)?.city;
}

export function getItinerary(
  citySlug: string,
  days: number,
  locale: Locale = "en"
): Itinerary | undefined {
  return getCityData(citySlug, locale)?.itineraries.find(
    (i) => i.days === days
  );
}

export function getNeighborhoods(
  citySlug: string,
  locale: Locale = "en"
): Neighborhood[] {
  return getCityData(citySlug, locale)?.neighborhoods ?? [];
}

export function getNeighborhood(
  citySlug: string,
  slug: string,
  locale: Locale = "en"
): Neighborhood | undefined {
  return getNeighborhoods(citySlug, locale).find((n) => n.slug === slug);
}

export function getPois(citySlug: string, locale: Locale = "en"): Poi[] {
  return getCityData(citySlug, locale)?.pois ?? [];
}

export function getPoi(
  citySlug: string,
  slug: string,
  locale: Locale = "en"
): Poi | undefined {
  return getPois(citySlug, locale).find((p) => p.slug === slug);
}

// nearbyCitySlugs may reference cities not yet published; filter through this.
export function getPublishedCity(
  slug: string,
  locale: Locale = "en"
): City | undefined {
  return cities(locale).find((c) => c.slug === slug);
}

export type CountryGroup = { name: string; slug: string; cities: City[] };

export function countries(locale: Locale = "en"): CountryGroup[] {
  const map = new Map<string, CountryGroup>();
  for (const c of cities(locale)) {
    const g = map.get(c.countrySlug) ?? {
      name: c.country,
      slug: c.countrySlug,
      cities: [],
    };
    g.cities.push(c);
    map.set(c.countrySlug, g);
  }
  return [...map.values()].sort((a, b) => a.name.localeCompare(b.name));
}

export function getCountry(
  slug: string,
  locale: Locale = "en"
): CountryGroup | undefined {
  return countries(locale).find((c) => c.slug === slug);
}
