import type { Hotel } from "./types";

const px = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800`;

// Curated picks per city, 4 each: one splurge, two mid, one budget.
// Images are free-license (Pexels), URL-validated, illustrative of the style.
const hotelsIt: Hotel[] = [
  // ---- Lisbon ----
  {
    slug: "memmo-alfama",
    citySlug: "lisbon",
    name: "Memmo Alfama",
    neighborhoodSlug: "alfama",
    band: "€€€",
    priceFrom: 180,
    style: "Rifugio con rooftop",
    bestFor: "Coppie",
    blurb:
      "Boutique hotel per adulti nascosto tra i vicoli dell'Alfama, con una terrazza wine bar dai tetti rossi e una piccola piscina sul rooftop che guarda dritto sul Tago. Le camere sono compatte; paghi per la vista e per il silenzio.",
    image: px(2290753),
    imageAlt: "Terrazza sul tetto di un hotel al crepuscolo con tavoli apparecchiati per cena",
  },
  {
    slug: "the-lumiares",
    citySlug: "lisbon",
    name: "The Lumiares",
    neighborhoodSlug: "bairro-alto",
    band: "€€€",
    priceFrom: 200,
    style: "Suite con cucina",
    bestFor: "Soggiorni lunghi",
    blurb:
      "Veri appartamenti con cucina dentro un palazzo ristrutturato sul bordo più tranquillo del Bairro Alto, più un rooftop bar frequentato davvero dai lisbonesi. Chiedi una suite sul retro se nei weekend vai a dormire prima delle 2.",
    image: px(262048),
    imageAlt: "Suite d'albergo luminosa ed elegante con lampadario e letto grande",
  },
  {
    slug: "my-story-rossio",
    citySlug: "lisbon",
    name: "My Story Hotel Rossio",
    neighborhoodSlug: "baixa-chiado",
    band: "€€",
    priceFrom: 110,
    style: "Centrale e pratico",
    bestFor: "Prima visita",
    blurb:
      "Proprio sulla piazza del Rossio, che mette il tram 28, l'ascensore di Santa Justa ed entrambe le colline del centro a cinque minuti a piedi. Le camere sulla piazza sono quelle fotogeniche; quelle sul retro sono le silenziose.",
    image: px(2507010),
    imageAlt: "Lobby d'albergo moderna e luminosa con vetrate a tutta altezza",
  },
  {
    slug: "the-independente",
    citySlug: "lisbon",
    name: "The Independente Suites & Terrace",
    neighborhoodSlug: "principe-real",
    band: "€",
    priceFrom: 45,
    style: "Ostello con suite",
    bestFor: "Budget",
    blurb:
      "Una grande casa d'epoca al belvedere di São Pedro de Alcântara, divisa tra dormitori e suite private sorprendentemente buone. Ottieni una posizione a cinque stelle a prezzi da ostello, a due passi dai caffè del Príncipe Real.",
    image: px(279805),
    imageAlt: "Dettaglio di abat-jour caldo e testiera in una camera di guesthouse",
  },

  // ---- Prague ----
  {
    slug: "hotel-paris-prague",
    citySlug: "prague",
    name: "Hotel Paris Prague",
    neighborhoodSlug: "stare-mesto",
    band: "€€€",
    priceFrom: 210,
    style: "Gioiello Art Nouveau",
    bestFor: "Fascino d'altri tempi",
    blurb:
      "Un monumento Art Nouveau del 1904 accanto alla Casa Municipale, conservato quasi nello stato originale fin nelle finiture in ottone. Sei a due minuti da piazza della Repubblica e a otto a piedi dalla piazza della Città Vecchia.",
    image: px(1001965),
    imageAlt: "Lobby storica e sontuosa di un hotel con archi e piante",
  },
  {
    slug: "golden-well",
    citySlug: "prague",
    name: "Golden Well Hotel",
    neighborhoodSlug: "mala-strana",
    band: "€€€",
    priceFrom: 240,
    style: "Vista sul castello",
    bestFor: "Coppie",
    blurb:
      "Incastonato sotto le mura del castello sopra i giardini Ledeburg, con colazioni sul rooftop che dominano ogni guglia di Mala Strana. La salita per rientrare è ripida, e ne vale la pena ogni singola sera.",
    image: px(164595),
    imageAlt: "Camera d'albergo di lusso con boiserie scura e biancheria impeccabile",
  },
  {
    slug: "hotel-josef",
    citySlug: "prague",
    name: "Hotel Josef",
    neighborhoodSlug: "stare-mesto",
    band: "€€",
    priceFrom: 130,
    style: "Classico del design",
    bestFor: "Amanti del design",
    blurb:
      "L'hotel di design con la scala di vetro firmato da Eva Jiřičná sta tra la piazza della Città Vecchia e le sinagoghe di Josefov. Le camere superior ai piani alti hanno vista sul castello; la colazione in stile panetteria è tra le migliori del centro.",
    image: px(1267438),
    imageAlt: "Camera d'albergo minimalista dai toni scuri con luci soffuse",
  },
  {
    slug: "residence-agnes",
    citySlug: "prague",
    name: "Residence Agnes",
    neighborhoodSlug: "stare-mesto",
    band: "€",
    priceFrom: 95,
    style: "B&B tranquillo",
    bestFor: "Chi cerca il rapporto qualità-prezzo",
    blurb:
      "Una piccola guesthouse in una via silenziosa accanto al convento di Sant'Agnese, a dieci minuti a piedi dalla piazza della Città Vecchia. La colazione preparata al momento e le prenotazioni al ristorante fatte dallo staff spiegano perché resta in cima alle classifiche delle recensioni.",
    image: px(97083),
    imageAlt: "Camera classica di guesthouse con testiera in legno e fiori freschi",
  },

  // ---- Seville ----
  {
    slug: "eme-catedral",
    citySlug: "seville",
    name: "EME Catedral Mercer",
    neighborhoodSlug: "el-arenal",
    band: "€€€",
    priceFrom: 230,
    style: "Piscina sul rooftop",
    bestFor: "Aperitivi al tramonto",
    blurb:
      "Proprio di fronte alla cattedrale, dall'altro lato del vicolo, con una piccola piscina sul rooftop e un bar che fissa la Giralda. Anche se dormi altrove, la terrazza al tramonto spiega il prezzo delle camere.",
    image: px(261102),
    imageAlt: "Piscina sul tetto di un hotel con lettini al crepuscolo",
  },
  {
    slug: "casa-1800",
    citySlug: "seville",
    name: "Hotel Casa 1800",
    neighborhoodSlug: "santa-cruz",
    band: "€€",
    priceFrom: 150,
    style: "Palazzetto con patio",
    bestFor: "Romantico",
    blurb:
      "Una dimora ottocentesca intorno a un patio di marmo nel cuore di Santa Cruz, con un buffet gratuito per il tè del pomeriggio e un piccolo rooftop rivolto verso la Giralda. Prenota le camere della torre per la vista.",
    image: px(1579253),
    imageAlt: "Camera d'albergo romantica con spumante e vassoio di dolci",
  },
  {
    slug: "las-casas-de-la-juderia",
    citySlug: "seville",
    name: "Las Casas de la Judería",
    neighborhoodSlug: "santa-cruz",
    band: "€€",
    priceFrom: 120,
    style: "Labirinto di patios",
    bestFor: "Atmosfera",
    blurb:
      "Ventisette antiche case della Judería cucite insieme da tunnel, cortili e fontane, così che andare a colazione è già una visita turistica. Le camere variano molto; chiedine una su un patio, non sulla strada.",
    image: px(279746),
    imageAlt: "Camera tradizionale di guesthouse con mobili in legno",
  },
  {
    slug: "hotel-amadeus",
    citySlug: "seville",
    name: "Hotel Amadeus & La Musica",
    neighborhoodSlug: "santa-cruz",
    band: "€",
    priceFrom: 85,
    style: "Gestione familiare",
    bestFor: "Budget",
    blurb:
      "Un hotel familiare a tema musicale a Santa Cruz con sale prova insonorizzate, un pianoforte a disposizione degli ospiti e un rooftop con vista sulla cattedrale. Uno dei migliori rapporti prezzo-posizione del centro storico.",
    image: px(271624),
    imageAlt: "Camera d'albergo semplice e luminosa con scrivania e letto matrimoniale",
  },
];

export default hotelsIt;
