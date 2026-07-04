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

  // ---- Porto ----
  {
    slug: "the-yeatman",
    citySlug: "porto",
    name: "The Yeatman",
    neighborhoodSlug: "vila-nova-de-gaia",
    band: "€€€",
    priceFrom: 260,
    style: "Wine hotel with a view",
    bestFor: "Views",
    blurb:
      "A wine-themed luxury hotel terraced up the Gaia hillside, with an infinity pool and rooms that stare straight across the Douro at Porto's old town. It is a steep spot, but the funicular and the view from breakfast make up for it.",
    image: px(261102),
    imageAlt: "Hotel infinity pool at dusk overlooking a river and old town",
  },
  {
    slug: "pestana-vintage-porto",
    citySlug: "porto",
    name: "Pestana Vintage Porto",
    neighborhoodSlug: "ribeira",
    band: "€€",
    priceFrom: 140,
    style: "Riverfront townhouses",
    bestFor: "First visit",
    blurb:
      "A row of restored merchant houses right on the Ribeira quay, so you step out of the door into the postcard. Ask for a river-view room; the ones at the back face the lanes and lose the Douro entirely.",
    image: px(1001965),
    imageAlt: "Ornate historic hotel lobby with arches and greenery",
  },
  {
    slug: "grande-hotel-do-porto",
    citySlug: "porto",
    name: "Grande Hotel do Porto",
    neighborhoodSlug: "baixa",
    band: "€€",
    priceFrom: 100,
    style: "Classic since 1880",
    bestFor: "Central and walkable",
    blurb:
      "Porto's oldest grand hotel sits on the pedestrian Rua de Santa Catarina, five minutes from Sao Bento station and the Bolhao market. The building is 19th-century; rooms are traditional and quiet, a fair trade for the location.",
    image: px(164595),
    imageAlt: "Traditional hotel bedroom with dark wood and crisp bedding",
  },
  {
    slug: "gallery-hostel-porto",
    citySlug: "porto",
    name: "Gallery Hostel",
    neighborhoodSlug: "cedofeita",
    band: "€",
    priceFrom: 40,
    style: "Design hostel",
    bestFor: "Budget",
    blurb:
      "An art-filled hostel on Cedofeita's gallery street, with private rooms as well as dorms and a small back garden. You are among the independent shops and cheap tascas, ten minutes uphill from the river crowds.",
    image: px(279805),
    imageAlt: "Warm bedside lamp and headboard detail in a guesthouse room",
  },

  // ---- Budapest ----
  {
    slug: "four-seasons-gresham-palace",
    citySlug: "budapest",
    name: "Four Seasons Gresham Palace",
    neighborhoodSlug: "belvaros",
    band: "€€€",
    priceFrom: 320,
    style: "Art Nouveau palace",
    bestFor: "Landmark stay",
    blurb:
      "A restored 1906 Art Nouveau palace at the Pest end of the Chain Bridge, with Danube-facing rooms that look across to Buda Castle. The location is as central as Budapest gets, steps from the river tram and St Stephen's.",
    image: px(338504),
    imageAlt: "Grand hotel bedroom with chandelier and vaulted ceiling",
  },
  {
    slug: "aria-hotel-budapest",
    citySlug: "budapest",
    name: "Aria Hotel Budapest",
    neighborhoodSlug: "belvaros",
    band: "€€€",
    priceFrom: 230,
    style: "Rooftop bar",
    bestFor: "Sunset drinks",
    blurb:
      "A music-themed five-star next to St Stephen's Basilica, best known for its High Note rooftop bar over the domes. Even non-guests queue for the roof at sunset, so book the room and skip the line.",
    image: px(2290753),
    imageAlt: "Rooftop hotel terrace at dusk with tables and city view",
  },
  {
    slug: "hotel-rum-budapest",
    citySlug: "budapest",
    name: "Hotel Rum Budapest",
    neighborhoodSlug: "belvaros",
    band: "€€",
    priceFrom: 120,
    style: "Design hotel",
    bestFor: "Design lovers",
    blurb:
      "A sharp modern design hotel on a quiet downtown side street, a two-minute walk from the Central Market Hall and the Danube. The rooftop terrace and the location between Pest's sights and the river are the draw.",
    image: px(1267438),
    imageAlt: "Minimalist design hotel room in dark tones with low lighting",
  },
  {
    slug: "maverick-city-lodge",
    citySlug: "budapest",
    name: "Maverick City Lodge",
    neighborhoodSlug: "belvaros",
    band: "€",
    priceFrom: 55,
    style: "Boutique hostel",
    bestFor: "Budget",
    blurb:
      "A boutique hostel inside a historic downtown building, with private rooms that feel like a cheap hotel and a location minutes from Vaci Street and the ruin bars. One of the best value beds inside the small ring road.",
    image: px(271624),
    imageAlt: "Simple bright room with a desk and double bed",
  },
];

export default hotelsEn;
