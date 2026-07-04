import type { Hotel } from "./types";

const px = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800`;

// Sélection par ville, 4 chacune : un splurge, deux mid, un budget.
// Images libres de droits (Pexels), URL vérifiées, illustratives du style.
const hotelsFr: Hotel[] = [
  // ---- Lisbonne ----
  {
    slug: "memmo-alfama",
    citySlug: "lisbon",
    name: "Memmo Alfama",
    neighborhoodSlug: "alfama",
    band: "€€€",
    priceFrom: 180,
    style: "Refuge avec rooftop",
    bestFor: "Couples",
    blurb:
      "Hôtel boutique orienté adultes, enfoui dans les ruelles de l'Alfama, avec une terrasse bar à vin aux tuiles rouges et une petite piscine sur le toit qui plonge droit sur le Tage. Les chambres sont compactes ; vous payez pour la vue et le silence.",
    image: px(2290753),
    imageAlt: "Terrasse sur le toit d'un hôtel au crépuscule avec tables dressées pour le dîner",
  },
  {
    slug: "the-lumiares",
    citySlug: "lisbon",
    name: "The Lumiares",
    neighborhoodSlug: "bairro-alto",
    band: "€€€",
    priceFrom: 200,
    style: "Suites-appartements",
    bestFor: "Longs séjours",
    blurb:
      "De vrais appartements avec cuisine dans un palais reconverti, sur la lisière haute et plus calme du Bairro Alto, plus un bar sur le toit que les locaux fréquentent vraiment. Demandez une suite côté arrière si vous dormez avant 2h du matin le week-end.",
    image: px(262048),
    imageAlt: "Suite d'hôtel lumineuse et élégante avec lustre et grand lit",
  },
  {
    slug: "my-story-rossio",
    citySlug: "lisbon",
    name: "My Story Hotel Rossio",
    neighborhoodSlug: "baixa-chiado",
    band: "€€",
    priceFrom: 110,
    style: "Central et pratique",
    bestFor: "Première visite",
    blurb:
      "En plein sur la place du Rossio, ce qui met le tram 28, l'ascenseur de Santa Justa et les deux collines du centre à cinq minutes à pied. Les chambres sur la place sont les plus photogéniques ; celles à l'arrière sont les plus calmes.",
    image: px(2507010),
    imageAlt: "Hall d'hôtel moderne et lumineux avec baies vitrées du sol au plafond",
  },
  {
    slug: "the-independente",
    citySlug: "lisbon",
    name: "The Independente Suites & Terrace",
    neighborhoodSlug: "principe-real",
    band: "€",
    priceFrom: 45,
    style: "Auberge avec suites",
    bestFor: "Petit budget",
    blurb:
      "Une grande maison de ville ancienne au belvédère de São Pedro de Alcântara, partagée entre dortoirs et suites privées étonnamment réussies. Vous obtenez un emplacement cinq étoiles à prix d'auberge, à deux pas des cafés du Príncipe Real.",
    image: px(279805),
    imageAlt: "Lampe de chevet chaleureuse et détail de tête de lit dans une chambre de pension",
  },

  // ---- Prague ----
  {
    slug: "hotel-paris-prague",
    citySlug: "prague",
    name: "Hotel Paris Prague",
    neighborhoodSlug: "stare-mesto",
    band: "€€€",
    priceFrom: 210,
    style: "Monument Art nouveau",
    bestFor: "Charme d'antan",
    blurb:
      "Un monument Art nouveau de 1904 à côté de la Maison municipale, conservé au plus près de son état d'origine jusqu'aux ferrures en laiton. Vous êtes à deux minutes de la place de la République et à huit à pied de la place de la Vieille Ville.",
    image: px(1001965),
    imageAlt: "Hall d'hôtel historique orné d'arches et de plantes",
  },
  {
    slug: "golden-well",
    citySlug: "prague",
    name: "Golden Well Hotel",
    neighborhoodSlug: "mala-strana",
    band: "€€€",
    priceFrom: 240,
    style: "Vues côté château",
    bestFor: "Couples",
    blurb:
      "Blotti sous les remparts du château au-dessus des jardins Ledeburg, avec des petits-déjeuners sur le toit qui dominent toutes les flèches de Mala Strana. La montée pour rentrer est raide, et elle vaut le coup chaque soir.",
    image: px(164595),
    imageAlt: "Chambre d'hôtel haut de gamme avec boiseries sombres et literie impeccable",
  },
  {
    slug: "hotel-josef",
    citySlug: "prague",
    name: "Hotel Josef",
    neighborhoodSlug: "stare-mesto",
    band: "€€",
    priceFrom: 130,
    style: "Classique du design",
    bestFor: "Amateurs de design",
    blurb:
      "L'hôtel design d'Eva Jiřičná, avec son escalier de verre, se trouve entre la place de la Vieille Ville et les synagogues de Josefov. Les chambres supérieures à l'étage ont vue sur le château ; le petit-déjeuner façon boulangerie est l'un des meilleurs du centre.",
    image: px(1267438),
    imageAlt: "Chambre d'hôtel design minimaliste aux tons sombres et à l'éclairage tamisé",
  },
  {
    slug: "residence-agnes",
    citySlug: "prague",
    name: "Residence Agnes",
    neighborhoodSlug: "stare-mesto",
    band: "€",
    priceFrom: 95,
    style: "B&B tranquille",
    bestFor: "Bons plans",
    blurb:
      "Une petite pension dans une ruelle silencieuse près du couvent Sainte-Agnès, à dix minutes à pied de la place de la Vieille Ville. Le petit-déjeuner préparé à la commande et les réservations de restaurants faites par le personnel expliquent pourquoi elle domine les classements d'avis.",
    image: px(97083),
    imageAlt: "Chambre de pension classique avec tête de lit en bois et fleurs fraîches",
  },

  // ---- Séville ----
  {
    slug: "eme-catedral",
    citySlug: "seville",
    name: "EME Catedral Mercer",
    neighborhoodSlug: "el-arenal",
    band: "€€€",
    priceFrom: 230,
    style: "Piscine sur le toit",
    bestFor: "Verres au coucher du soleil",
    blurb:
      "Juste en face de la cathédrale, de l'autre côté de la ruelle, avec un bassin et un bar sur le toit face à la Giralda. Même si vous dormez ailleurs, la terrasse du toit au coucher du soleil explique le prix des chambres.",
    image: px(261102),
    imageAlt: "Piscine sur le toit d'un hôtel avec transats au crépuscule",
  },
  {
    slug: "casa-1800",
    citySlug: "seville",
    name: "Hotel Casa 1800",
    neighborhoodSlug: "santa-cruz",
    band: "€€",
    priceFrom: 150,
    style: "Maison de ville à patio",
    bestFor: "Romantique",
    blurb:
      "Une demeure du XIXe siècle organisée autour d'un patio en marbre au coeur de Santa Cruz, avec un buffet de thé gratuit l'après-midi et un petit toit-terrasse face à la Giralda. Réservez les chambres de la tour pour la vue.",
    image: px(1579253),
    imageAlt: "Chambre d'hôtel romantique avec vin pétillant et plateau de desserts",
  },
  {
    slug: "las-casas-de-la-juderia",
    citySlug: "seville",
    name: "Las Casas de la Judería",
    neighborhoodSlug: "santa-cruz",
    band: "€€",
    priceFrom: 120,
    style: "Labyrinthe de patios",
    bestFor: "Atmosphère",
    blurb:
      "Vingt-sept anciennes maisons de la Judería reliées par des tunnels, des cours et des fontaines, si bien qu'aller au petit-déjeuner devient une visite en soi. Les chambres varient beaucoup ; demandez-en une sur un patio, pas sur la rue.",
    image: px(279746),
    imageAlt: "Chambre de pension traditionnelle avec mobilier en bois",
  },
  {
    slug: "hotel-amadeus",
    citySlug: "seville",
    name: "Hotel Amadeus & La Musica",
    neighborhoodSlug: "santa-cruz",
    band: "€",
    priceFrom: 85,
    style: "Familial",
    bestFor: "Petit budget",
    blurb:
      "Un hôtel familial sur le thème de la musique à Santa Cruz, avec des salles de répétition insonorisées, un piano à disposition des clients et un toit-terrasse avec vue sur la cathédrale. L'un des meilleurs rapports prix-emplacement de la vieille ville.",
    image: px(271624),
    imageAlt: "Chambre d'hôtel simple et lumineuse avec bureau et lit double",
  },
];

export default hotelsFr;
