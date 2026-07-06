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
import vienna from "./cities/vienna";
import viennaFr from "./cities/vienna.fr";
import viennaPt from "./cities/vienna.pt";
import viennaIt from "./cities/vienna.it";
import viennaDe from "./cities/vienna.de";
import granada from "./cities/granada";
import granadaFr from "./cities/granada.fr";
import granadaPt from "./cities/granada.pt";
import granadaIt from "./cities/granada.it";
import granadaDe from "./cities/granada.de";
import rome from "./cities/rome";
import romeFr from "./cities/rome.fr";
import romePt from "./cities/rome.pt";
import romeIt from "./cities/rome.it";
import romeDe from "./cities/rome.de";
import amsterdam from "./cities/amsterdam";
import amsterdamFr from "./cities/amsterdam.fr";
import amsterdamPt from "./cities/amsterdam.pt";
import amsterdamIt from "./cities/amsterdam.it";
import amsterdamDe from "./cities/amsterdam.de";
import florence from "./cities/florence";
import florenceFr from "./cities/florence.fr";
import florencePt from "./cities/florence.pt";
import florenceIt from "./cities/florence.it";
import florenceDe from "./cities/florence.de";
import bruges from "./cities/bruges";
import brugesFr from "./cities/bruges.fr";
import brugesPt from "./cities/bruges.pt";
import brugesIt from "./cities/bruges.it";
import brugesDe from "./cities/bruges.de";
import barcelona from "./cities/barcelona";
import barcelonaFr from "./cities/barcelona.fr";
import barcelonaPt from "./cities/barcelona.pt";
import barcelonaIt from "./cities/barcelona.it";
import barcelonaDe from "./cities/barcelona.de";
import berlin from "./cities/berlin";
import berlinFr from "./cities/berlin.fr";
import berlinPt from "./cities/berlin.pt";
import berlinIt from "./cities/berlin.it";
import berlinDe from "./cities/berlin.de";

// Register every city bundle per locale. Adding a city = one file per locale
// + one entry per array below (same order everywhere).
const bundlesByLocale: Record<Locale, CityData[]> = {
  en: [lisbon, prague, seville, porto, budapest, vienna, granada, rome, amsterdam, florence, bruges, barcelona, berlin],
  fr: [lisbonFr, pragueFr, sevilleFr, portoFr, budapestFr, viennaFr, granadaFr, romeFr, amsterdamFr, florenceFr, brugesFr, barcelonaFr, berlinFr],
  pt: [lisbonPt, praguePt, sevillePt, portoPt, budapestPt, viennaPt, granadaPt, romePt, amsterdamPt, florencePt, brugesPt, barcelonaPt, berlinPt],
  it: [lisbonIt, pragueIt, sevilleIt, portoIt, budapestIt, viennaIt, granadaIt, romeIt, amsterdamIt, florenceIt, brugesIt, barcelonaIt, berlinIt],
  de: [lisbonDe, pragueDe, sevilleDe, portoDe, budapestDe, viennaDe, granadaDe, romeDe, amsterdamDe, florenceDe, brugesDe, barcelonaDe, berlinDe],
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
