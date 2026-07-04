import type { City, CityData, Itinerary, Neighborhood, Poi } from "./types";
import lisbon from "./cities/lisbon";
import prague from "./cities/prague";
import seville from "./cities/seville";

// Register every city bundle here. Adding a city = one import + one array entry.
export const cityBundles: CityData[] = [lisbon, prague, seville];

export const cities: City[] = cityBundles.map((b) => b.city);

export function getCityData(slug: string): CityData | undefined {
  return cityBundles.find((b) => b.city.slug === slug);
}

export function getCity(slug: string): City | undefined {
  return getCityData(slug)?.city;
}

export function getItinerary(
  citySlug: string,
  days: number
): Itinerary | undefined {
  return getCityData(citySlug)?.itineraries.find((i) => i.days === days);
}

export function getNeighborhoods(citySlug: string): Neighborhood[] {
  return getCityData(citySlug)?.neighborhoods ?? [];
}

export function getNeighborhood(
  citySlug: string,
  slug: string
): Neighborhood | undefined {
  return getNeighborhoods(citySlug).find((n) => n.slug === slug);
}

export function getPois(citySlug: string): Poi[] {
  return getCityData(citySlug)?.pois ?? [];
}

export function getPoi(citySlug: string, slug: string): Poi | undefined {
  return getPois(citySlug).find((p) => p.slug === slug);
}

// Cities of the network that exist as pages (nearbyCitySlugs may reference
// cities not yet published; always filter through this).
export function getPublishedCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export type CountryGroup = { name: string; slug: string; cities: City[] };

export function countries(): CountryGroup[] {
  const map = new Map<string, CountryGroup>();
  for (const c of cities) {
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

export function getCountry(slug: string): CountryGroup | undefined {
  return countries().find((c) => c.slug === slug);
}
