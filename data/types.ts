// Core data model for Perfect City Break (perfectcitybreak.com).
// All programmatic content lives in /data as strictly typed TS.

export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type City = {
  slug: string; // "lisbon"
  name: string; // "Lisbon"
  country: string; // "Portugal"
  countrySlug: string; // "portugal"
  lat: number;
  lng: number;
  tier: 1 | 2 | 3; // 1 = megacity (up to 7 days), 2 = classic capital (3-4 days), 3 = compact city (2 days)
  idealDays: number; // recommended stay length, drives the Quick Answer Block
  durations: number[]; // [2, 3, 4] -> generates the itinerary pages
  airportCode?: string;
  airportToCenter: string; // "Metro, 25 min, 1.65 EUR" - concrete transfer info
  centerWalkable: boolean; // structures the "where to stay" advice
  bestMonths: Month[];
  avoidMonths?: Month[];
  monthlyNotes: Record<Month, string>; // 1-2 sentences per month: weather, crowds, events, prices
  climate: Record<Month, { highC: number; lowC: number; rainyDays: number }>;
  budgetLevel: "low" | "mid" | "high"; // vs European average
  budgetPerDay: { budget: number; mid: number; high: number }; // EUR per person per day, indicative
  tagline: string; // short editorial hook, own words
  heroIntro: string; // 2-3 sentences for the hub page opening, own words
  accent: CityAccent; // per-city visual identity (color coding)
  neighborhoodSlugs: string[];
  nearbyCitySlugs: string[]; // internal linking "combine with" / "or rather X?"
};

// Per-city color identity used across all of that city's pages.
export type CityAccent = {
  from: string; // gradient start (hex)
  to: string; // gradient end (hex)
  ink: string; // dark readable tone matching the palette (hex)
};

export type Neighborhood = {
  slug: string; // "alfama"
  citySlug: string;
  name: string;
  lat: number;
  lng: number;
  bestFor: (
    | "first-time"
    | "nightlife"
    | "family"
    | "budget"
    | "romantic"
    | "local"
  )[];
  vibe: string; // 2-3 written sentences, own words
  pros: string[];
  cons: string[];
};

export type Itinerary = {
  citySlug: string;
  days: number; // 2, 3, 4, 7
  summary: string; // the Quick Answer Block (150-200 words)
  stayNeighborhoodSlug: string; // recommended base for this duration -> Stay22 map center
  dayPlans: DayPlan[];
};

export type DayPlan = {
  dayNumber: number;
  theme: string; // "Old town & miradouros"
  morning: Step[];
  afternoon: Step[];
  evening: Step[];
};

export type Step = {
  poiSlug?: string; // -> Poi.slug
  text: string; // written, self-contained (chunk-level AI extraction)
  durationMin?: number;
};

export type Poi = {
  slug: string;
  citySlug: string;
  name: string;
  lat: number;
  lng: number;
  kind: "sight" | "museum" | "food" | "viewpoint" | "park" | "experience";
  needsBooking: boolean; // if true -> Tiqets / GetYourGuide link
  tip: string; // the concrete tip (opening time, queue hack, free day)
};

// Curated hotel pick, shown with a photo in the first third of every
// destination page (HotelsWithPets pattern). Photos: free license only
// (Pexels/Unsplash), validated URLs, honest descriptive alt.
export type Hotel = {
  slug: string;
  citySlug: string;
  name: string; // real hotel name
  neighborhoodSlug: string;
  band: "€" | "€€" | "€€€";
  priceFrom: number; // indicative EUR per night, low season
  style: string; // "Design", "Historic palace", "Rooftop views"...
  bestFor: string; // "First visit", "Couples", "Budget"...
  blurb: string; // 2 sentences, own words, one concrete fact minimum
  image: string; // validated free-license image URL
  imageAlt: string;
};

// One file per city exports this bundle (hotels live in data/hotels.ts).
export type CityData = {
  city: City;
  neighborhoods: Neighborhood[];
  pois: Poi[];
  itineraries: Itinerary[];
};
