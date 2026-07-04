import type { Hotel } from "./types";

const px = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800`;

// Kuratierte Auswahl pro Stadt, je 4: ein Luxus-Pick, zwei Mittelklasse, ein Budget.
// Bilder sind lizenzfrei (Pexels), URL-geprüft, illustrieren den Stil.
const hotelsDe: Hotel[] = [
  // ---- Lisbon ----
  {
    slug: "memmo-alfama",
    citySlug: "lisbon",
    name: "Memmo Alfama",
    neighborhoodSlug: "alfama",
    band: "€€€",
    priceFrom: 180,
    style: "Dachterrassen-Refugium",
    bestFor: "Paare",
    blurb:
      "Auf Erwachsene ausgerichtetes Boutiquehotel, versteckt in den Gassen der Alfama, mit einer rot gefliesten Weinbar-Terrasse und einem kleinen Dachpool mit direktem Blick auf den Tejo. Die Zimmer sind kompakt; Sie zahlen für die Aussicht und die Stille.",
    image: px(2290753),
    imageAlt: "Dachterrasse eines Hotels in der Abenddämmerung mit gedeckten Tischen",
  },
  {
    slug: "the-lumiares",
    citySlug: "lisbon",
    name: "The Lumiares",
    neighborhoodSlug: "bairro-alto",
    band: "€€€",
    priceFrom: 200,
    style: "Apartment-Suiten",
    bestFor: "Längere Aufenthalte",
    blurb:
      "Vollwertige Apartments mit Küche in einem umgebauten Palast am ruhigeren oberen Rand des Bairro Alto, dazu eine Rooftop-Bar, die auch Einheimische wirklich nutzen. Fragen Sie nach einer Suite zur Rückseite, wenn Sie an Wochenenden vor 2 Uhr schlafen.",
    image: px(262048),
    imageAlt: "Helle, elegante Hotelsuite mit Kronleuchter und großem Bett",
  },
  {
    slug: "my-story-rossio",
    citySlug: "lisbon",
    name: "My Story Hotel Rossio",
    neighborhoodSlug: "baixa-chiado",
    band: "€€",
    priceFrom: 110,
    style: "Zentral und praktisch",
    bestFor: "Erster Besuch",
    blurb:
      "Direkt am Rossio-Platz, womit Tram 28, der Santa-Justa-Aufzug und beide Hügel des Zentrums in fünf Gehminuten liegen. Die Zimmer zum Platz sind die fotogenen; die Zimmer nach hinten sind die ruhigen.",
    image: px(2507010),
    imageAlt: "Moderne, helle Hotellobby mit raumhohen Fenstern",
  },
  {
    slug: "the-independente",
    citySlug: "lisbon",
    name: "The Independente Suites & Terrace",
    neighborhoodSlug: "principe-real",
    band: "€",
    priceFrom: 45,
    style: "Hostel mit Suiten",
    bestFor: "Budget",
    blurb:
      "Ein großes altes Stadthaus am Aussichtspunkt São Pedro de Alcântara, aufgeteilt in Schlafsäle und überraschend gute private Suiten. Sie bekommen eine Fünf-Sterne-Lage zu Hostelpreisen, wenige Schritte von den Cafés des Príncipe Real.",
    image: px(279805),
    imageAlt: "Warme Nachttischlampe und Kopfteil-Detail in einem Pensionszimmer",
  },

  // ---- Prague ----
  {
    slug: "hotel-paris-prague",
    citySlug: "prague",
    name: "Hotel Paris Prague",
    neighborhoodSlug: "stare-mesto",
    band: "€€€",
    priceFrom: 210,
    style: "Jugendstil-Wahrzeichen",
    bestFor: "Glanz der alten Welt",
    blurb:
      "Ein Jugendstil-Monument von 1904 neben dem Gemeindehaus, bis hin zu den Messingbeschlägen nah am Originalzustand erhalten. Sie sind zwei Minuten vom Platz der Republik und acht zu Fuß vom Altstädter Ring entfernt.",
    image: px(1001965),
    imageAlt: "Prunkvolle historische Hotellobby mit Bögen und Pflanzen",
  },
  {
    slug: "golden-well",
    citySlug: "prague",
    name: "Golden Well Hotel",
    neighborhoodSlug: "mala-strana",
    band: "€€€",
    priceFrom: 240,
    style: "Ausblicke an der Burg",
    bestFor: "Paare",
    blurb:
      "Eingeklemmt unter den Burgmauern über den Ledeburger Gärten, mit Frühstück auf dem Dach und Blick über jede Turmspitze der Kleinseite. Der Heimweg ist steil, und er lohnt sich jeden einzelnen Abend.",
    image: px(164595),
    imageAlt: "Gehobenes Hotelschlafzimmer mit dunkler Holzvertäfelung und frischer Bettwäsche",
  },
  {
    slug: "hotel-josef",
    citySlug: "prague",
    name: "Hotel Josef",
    neighborhoodSlug: "stare-mesto",
    band: "€€",
    priceFrom: 130,
    style: "Design-Klassiker",
    bestFor: "Designliebhaber",
    blurb:
      "Eva Jiřičnás Designhotel mit gläserner Treppe liegt zwischen Altstädter Ring und den Synagogen von Josefov. Die Superior-Zimmer oben haben Burgblick; das Frühstück im Bäckerei-Stil gehört zu den besten im Zentrum.",
    image: px(1267438),
    imageAlt: "Minimalistisches Designhotelzimmer in dunklen Tönen mit gedämpftem Licht",
  },
  {
    slug: "residence-agnes",
    citySlug: "prague",
    name: "Residence Agnes",
    neighborhoodSlug: "stare-mesto",
    band: "€",
    priceFrom: 95,
    style: "Ruhiges B&B",
    bestFor: "Preisbewusste",
    blurb:
      "Eine kleine Pension in einer stillen Gasse beim Agneskloster, zehn Gehminuten vom Altstädter Ring. Das frisch zubereitete Frühstück und die Restaurantreservierungen des Personals sind der Grund, warum sie die Bewertungsrankings immer wieder anführt.",
    image: px(97083),
    imageAlt: "Klassisches Pensionszimmer mit Holzkopfteil und frischen Blumen",
  },

  // ---- Seville ----
  {
    slug: "eme-catedral",
    citySlug: "seville",
    name: "EME Catedral Mercer",
    neighborhoodSlug: "el-arenal",
    band: "€€€",
    priceFrom: 230,
    style: "Rooftop-Pool",
    bestFor: "Sundowner",
    blurb:
      "Direkt gegenüber der Kathedrale, nur eine Gasse dazwischen, mit einem Tauchbecken und einer Bar auf dem Dach, die auf die Giralda blicken. Selbst wenn Sie woanders schlafen: Die Dachterrasse bei Sonnenuntergang erklärt den Zimmerpreis.",
    image: px(261102),
    imageAlt: "Hotel-Dachpool mit Liegen in der Abenddämmerung",
  },
  {
    slug: "casa-1800",
    citySlug: "seville",
    name: "Hotel Casa 1800",
    neighborhoodSlug: "santa-cruz",
    band: "€€",
    priceFrom: 150,
    style: "Stadthaus mit Patio",
    bestFor: "Romantik",
    blurb:
      "Ein Herrenhaus aus dem 19. Jahrhundert rund um einen Marmorpatio mitten in Santa Cruz, mit kostenlosem Nachmittagstee-Buffet und einer kleinen Dachterrasse mit Blick auf die Giralda. Buchen Sie die Turmzimmer für die Aussicht.",
    image: px(1579253),
    imageAlt: "Romantisches Hotelzimmer mit Schaumwein und Dessertteller",
  },
  {
    slug: "las-casas-de-la-juderia",
    citySlug: "seville",
    name: "Las Casas de la Judería",
    neighborhoodSlug: "santa-cruz",
    band: "€€",
    priceFrom: 120,
    style: "Labyrinth aus Patios",
    bestFor: "Atmosphäre",
    blurb:
      "Siebenundzwanzig alte Häuser der Judería, durch Tunnel, Innenhöfe und Brunnen miteinander verwoben, sodass schon der Weg zum Frühstück Sightseeing ist. Die Zimmer variieren stark; fragen Sie nach einem am Patio, nicht zur Straße.",
    image: px(279746),
    imageAlt: "Traditionelles Pensionsschlafzimmer mit Holzmöbeln",
  },
  {
    slug: "hotel-amadeus",
    citySlug: "seville",
    name: "Hotel Amadeus & La Musica",
    neighborhoodSlug: "santa-cruz",
    band: "€",
    priceFrom: 85,
    style: "Familiengeführt",
    bestFor: "Budget",
    blurb:
      "Ein musikalisch geprägtes Familienhotel in Santa Cruz mit schallisolierten Übungsräumen, einem Klavier, das Gäste spielen dürfen, und einer Dachterrasse mit Kathedralenblick. Eines der besten Preis-Lage-Verhältnisse der Altstadt.",
    image: px(271624),
    imageAlt: "Schlichtes, helles Hotelzimmer mit Schreibtisch und Doppelbett",
  },
];

export default hotelsDe;
