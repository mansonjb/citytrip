import type { Hotel } from "./types";

const px = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800`;

// Curated picks per city, 4 each: one splurge, two mid, one budget.
// Images are free-license (Pexels), URL-validated, illustrative of the style.
const hotelsEn: Hotel[] = [
  // ---- Lisbon ----
  {
    slug: "memmo-alfama",
    citySlug: "lisbon",
    name: "Memmo Alfama",
    neighborhoodSlug: "alfama",
    band: "€€€",
    priceFrom: 180,
    style: "Rooftop hideaway",
    bestFor: "Couples",
    blurb:
      "Adults-oriented boutique hotel buried in the Alfama lanes, with a red-tiled wine bar terrace and a small rooftop pool looking straight down the Tagus. Rooms are compact; you pay for the view and the silence.",
    image: px(2290753),
    imageAlt: "Rooftop terrace of a hotel at dusk with tables set for dinner",
  },
  {
    slug: "the-lumiares",
    citySlug: "lisbon",
    name: "The Lumiares",
    neighborhoodSlug: "bairro-alto",
    band: "€€€",
    priceFrom: 200,
    style: "Apartment suites",
    bestFor: "Longer stays",
    blurb:
      "Full apartments with kitchens inside a converted palace on Bairro Alto's calmer upper edge, plus a rooftop bar locals actually use. Ask for a back-facing suite if you sleep before 2am on weekends.",
    image: px(262048),
    imageAlt: "Bright elegant hotel suite with a chandelier and large bed",
  },
  {
    slug: "my-story-rossio",
    citySlug: "lisbon",
    name: "My Story Hotel Rossio",
    neighborhoodSlug: "baixa-chiado",
    band: "€€",
    priceFrom: 110,
    style: "Central and practical",
    bestFor: "First visit",
    blurb:
      "Right on Rossio square, which puts tram 28, the Santa Justa lift and both center hills within a five-minute walk. Rooms over the square are the photogenic ones; rooms at the back are the quiet ones.",
    image: px(2507010),
    imageAlt: "Modern bright hotel lobby with floor-to-ceiling windows",
  },
  {
    slug: "the-independente",
    citySlug: "lisbon",
    name: "The Independente Suites & Terrace",
    neighborhoodSlug: "principe-real",
    band: "€",
    priceFrom: 45,
    style: "Hostel with suites",
    bestFor: "Budget",
    blurb:
      "A grand old townhouse at the São Pedro de Alcântara viewpoint, split between dorms and surprisingly good private suites. You get a five-star location at hostel prices, steps from the Príncipe Real cafes.",
    image: px(279805),
    imageAlt: "Warm bedside lamp and headboard detail in a guesthouse room",
  },

  // ---- Prague ----
  {
    slug: "hotel-paris-prague",
    citySlug: "prague",
    name: "Hotel Paris Prague",
    neighborhoodSlug: "stare-mesto",
    band: "€€€",
    priceFrom: 210,
    style: "Art Nouveau landmark",
    bestFor: "Old-world glamour",
    blurb:
      "A 1904 Art Nouveau monument next to the Municipal House, kept close to its original state down to the brass fittings. You are two minutes from Republic Square and eight on foot from Old Town Square.",
    image: px(1001965),
    imageAlt: "Ornate historic hotel lobby with arches and plants",
  },
  {
    slug: "golden-well",
    citySlug: "prague",
    name: "Golden Well Hotel",
    neighborhoodSlug: "mala-strana",
    band: "€€€",
    priceFrom: 240,
    style: "Castle-side views",
    bestFor: "Couples",
    blurb:
      "Wedged under the castle walls above the Ledeburg Gardens, with rooftop breakfasts that overlook every spire in Mala Strana. It is a steep walk home, and worth it every single evening.",
    image: px(164595),
    imageAlt: "Upscale hotel bedroom with dark wood panelling and crisp bedding",
  },
  {
    slug: "hotel-josef",
    citySlug: "prague",
    name: "Hotel Josef",
    neighborhoodSlug: "stare-mesto",
    band: "€€",
    priceFrom: 130,
    style: "Design classic",
    bestFor: "Design lovers",
    blurb:
      "Eva Jiřičná's glass-staircase design hotel sits between Old Town Square and the Josefov synagogues. Superior rooms upstairs have castle views; the bakery-style breakfast is one of the best in the center.",
    image: px(1267438),
    imageAlt: "Minimalist design hotel room in dark tones with low lighting",
  },
  {
    slug: "residence-agnes",
    citySlug: "prague",
    name: "Residence Agnes",
    neighborhoodSlug: "stare-mesto",
    band: "€",
    priceFrom: 95,
    style: "Quiet B&B",
    bestFor: "Value seekers",
    blurb:
      "A small guesthouse on a silent lane by St Agnes Convent, ten minutes on foot from Old Town Square. The cooked-to-order breakfast and the staff's restaurant bookings are why it keeps topping review rankings.",
    image: px(97083),
    imageAlt: "Classic guesthouse room with wooden headboard and fresh flowers",
  },

  // ---- Seville ----
  {
    slug: "eme-catedral",
    citySlug: "seville",
    name: "EME Catedral Mercer",
    neighborhoodSlug: "el-arenal",
    band: "€€€",
    priceFrom: 230,
    style: "Rooftop pool",
    bestFor: "Sunset drinks",
    blurb:
      "Directly across the lane from the cathedral, with a rooftop plunge pool and bar staring at the Giralda. Even if you sleep elsewhere, the roof terrace at sunset explains the price of the rooms.",
    image: px(261102),
    imageAlt: "Hotel rooftop pool with loungers at dusk",
  },
  {
    slug: "casa-1800",
    citySlug: "seville",
    name: "Hotel Casa 1800",
    neighborhoodSlug: "santa-cruz",
    band: "€€",
    priceFrom: 150,
    style: "Patio townhouse",
    bestFor: "Romantic",
    blurb:
      "A 19th-century mansion around a marble patio in the middle of Santa Cruz, with a free afternoon tea buffet and a small rooftop facing the Giralda. Book the tower rooms for the view.",
    image: px(1579253),
    imageAlt: "Romantic hotel room with sparkling wine and dessert tray",
  },
  {
    slug: "las-casas-de-la-juderia",
    citySlug: "seville",
    name: "Las Casas de la Judería",
    neighborhoodSlug: "santa-cruz",
    band: "€€",
    priceFrom: 120,
    style: "Labyrinth of patios",
    bestFor: "Atmosphere",
    blurb:
      "Twenty-seven old Judería houses stitched together by tunnels, courtyards and fountains, so walking to breakfast is a sightseeing act. Rooms vary a lot; ask for one on a patio, not the street.",
    image: px(279746),
    imageAlt: "Traditional guesthouse bedroom with wooden furniture",
  },
  {
    slug: "hotel-amadeus",
    citySlug: "seville",
    name: "Hotel Amadeus & La Musica",
    neighborhoodSlug: "santa-cruz",
    band: "€",
    priceFrom: 85,
    style: "Family-run",
    bestFor: "Budget",
    blurb:
      "A music-themed family hotel in Santa Cruz with soundproofed practice rooms, a piano guests can play and a rooftop with cathedral views. One of the best price-to-location ratios in the old town.",
    image: px(271624),
    imageAlt: "Simple bright hotel room with a desk and double bed",
  },
];

export default hotelsEn;
