import type { CityExtras } from "./types";

const hero = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`;

// Hero photos are free-license (Pexels), URL and visually validated.
const extrasEn: Record<string, CityExtras> = {
  lisbon: {
    citySlug: "lisbon",
    image: hero(16338751),
    imageAlt: "Yellow tram climbing a Lisbon street past a mustard townhouse",
    history:
      "Lisbon is one of the oldest cities in Western Europe, a Phoenician and Roman port long before it became Portugal's capital in 1256. The great earthquake of 1 November 1755, followed by a tsunami and fires, flattened the lower town and killed tens of thousands, which is why the grid-planned Baixa you walk today looks so different from the tangled Alfama that survived. From here Vasco da Gama sailed to India in 1498, and the tax on that spice trade paid for the Manueline stonework you see at Belem. The 1974 Carnation Revolution, a near-bloodless military coup, ended four decades of dictatorship and is still marked every 25 April.",
    knownFor: [
      "Yellow tram 28",
      "Pastel de nata",
      "Fado music",
      "Miradouro viewpoints",
      "Azulejo tiles",
      "Belem Tower",
    ],
  },
  prague: {
    citySlug: "prague",
    image: hero(11261851),
    imageAlt:
      "Prague Castle and St Vitus Cathedral above Charles Bridge and the Vltava river",
    history:
      "Prague grew up around a ford on the Vltava and a hilltop castle founded around 880, and by the 14th century it was the seat of Holy Roman Emperor Charles IV, who built the Charles Bridge, the New Town and central Europe's oldest university. The 1618 Defenestration of Prague, when Protestant nobles threw imperial officials out of a castle window, helped trigger the Thirty Years War. Unusually for the region, the historic core came through World War II almost intact, which is why the Gothic and Baroque skyline is so complete. The 1989 Velvet Revolution ended communist rule without violence, and Prague has been the Czech capital ever since.",
    knownFor: [
      "Charles Bridge",
      "Prague Castle",
      "Astronomical Clock",
      "Cheap beer",
      "Baroque skyline",
      "Christmas markets",
    ],
  },
  seville: {
    citySlug: "seville",
    image: hero(5470586),
    imageAlt:
      "Plaza de Espana in Seville at golden hour with its canal and towers",
    history:
      "Seville was Roman Hispalis and then, for over five centuries, the Moorish city of Ishbiliya, which is why the cathedral's bell tower, La Giralda, began life as a minaret and the Alcazar is still a working Mudejar palace. After 1492 the city held the crown's monopoly on trade with the Americas, and the gold and silver that flowed up the Guadalquivir made it one of the richest places in Europe. That wealth built the vast Gothic cathedral, where Christopher Columbus is entombed. The fairy-tale Plaza de Espana is far newer, built for the 1929 Ibero-American Exposition.",
    knownFor: [
      "Real Alcazar",
      "Flamenco",
      "Plaza de Espana",
      "Orange trees",
      "Semana Santa",
      "Tapas culture",
    ],
  },
  porto: {
    citySlug: "porto",
    image: hero(25695948),
    imageAlt:
      "Dom Luis I iron bridge over the Douro with Porto's Ribeira rooftops behind",
    history:
      "Porto gave Portugal both its name, from the Roman port of Portus Cale, and its reputation for hard work and independence. The city made its fortune on the river Douro: barrels of wine floated down from the upper valley to age in the lodges of Vila Nova de Gaia, and English merchants turned that trade into port wine from the 17th century on. The double-deck Dom Luis I bridge, opened in 1886, was built by a student of Gustave Eiffel. Locals are still called tripeiros, tripe-eaters, after the story that they gave their best meat to Henry the Navigator's fleet in 1415 and kept only the offal.",
    knownFor: [
      "Port wine cellars",
      "Dom Luis I bridge",
      "Ribeira riverfront",
      "Livraria Lello",
      "Azulejo stations",
      "Francesinha",
    ],
  },
  budapest: {
    citySlug: "budapest",
    image: hero(8390036),
    imageAlt:
      "Szechenyi Chain Bridge over the Danube with the Hungarian Parliament behind",
    history:
      "Budapest was two rivals until 1873: hilly, royal Buda on the west bank and flat, commercial Pest on the east, joined when the Chain Bridge finally made crossing the Danube easy. The Romans ran a garrison town called Aquincum here, and their taste for the thermal springs never left, which is why the city still has grand public baths fed by hot water underground. The years around 1896, the millennium of Hungarian settlement, gave the city its Parliament, its continental Europe's first metro line and much of its grand Andrassy Avenue. The 1956 uprising against Soviet rule was crushed but never forgotten.",
    knownFor: [
      "Thermal baths",
      "Parliament building",
      "Chain Bridge",
      "Ruin bars",
      "Danube views",
      "Buda Castle",
    ],
  },
  vienna: {
    citySlug: "vienna",
    image: hero(18110534),
    imageAlt:
      "The Belvedere palace and its reflecting pond in Vienna under a blue sky",
    history:
      "Vienna was the capital of the Habsburgs for more than six centuries, and the seat of the Holy Roman and then Austro-Hungarian empire until it collapsed in 1918, which is why a city of under two million has palaces built for a continent. When the medieval walls came down in 1857, Emperor Franz Joseph replaced them with the Ringstrasse, the grand boulevard of museums, opera and parliament you still circle today. Around 1900 the city was a crucible of the modern world: Freud invented psychoanalysis here, Klimt and Schiele broke with tradition, and Mahler ran the opera. Vienna has been the capital of a small, neutral Austria since 1955, and it still runs on the coffee-house culture UNESCO now protects.",
    knownFor: [
      "Schonbrunn Palace",
      "Coffee houses",
      "Klimt's The Kiss",
      "Imperial palaces",
      "Sachertorte",
      "Opera and balls",
    ],
  },
  granada: {
    citySlug: "granada",
    image: hero(38100344),
    imageAlt:
      "The Alhambra palace above Granada with the snow-capped Sierra Nevada behind",
    history:
      "Granada was the last Muslim kingdom in Western Europe, the capital of the Nasrid emirate that held out for 250 years after the rest of Spain had fallen. Its rulers built the Alhambra, the finest surviving Islamic palace complex in the West, on the hill above the city. On 2 January 1492 the Catholic Monarchs Isabella and Ferdinand took the city, ending nearly 800 years of Moorish rule in Spain; the same year, from Granada, Isabella agreed to fund Christopher Columbus. The Alhambra was half-forgotten until the writer Washington Irving lived in it and published Tales of the Alhambra in 1832, which sparked the Romantic craze that saved it. Granada is now a university city where the Moorish and Spanish layers sit side by side.",
    knownFor: [
      "The Alhambra",
      "Free tapas",
      "Albaicin views",
      "Moorish heritage",
      "Sierra Nevada",
      "Sacromonte flamenco",
    ],
  },
  rome: {
    citySlug: "rome",
    image: hero(32619390),
    imageAlt: "The Colosseum in Rome against a bright blue sky",
    history:
      "Rome was, by its own legend, founded by Romulus in 753 BC, and it grew into the capital of an empire that ran from Britain to the Sahara. The ruins you walk between, the Colosseum, the Forum, the Pantheon, are the leftovers of a city that held a million people while medieval London held twenty thousand. When the empire fell, the popes made Rome the capital of the Catholic world, and Renaissance and Baroque money rebuilt it around the ancient bones, which is why Bernini fountains sit on Roman foundations. It only became the capital of a united Italy in 1871, the last piece of the country to join. Everything since, from the traffic to the aperitivo, layers onto three thousand years that never got cleared away.",
    knownFor: [
      "The Colosseum",
      "Vatican and Sistine Chapel",
      "Trevi Fountain",
      "Roman ruins",
      "Pasta and gelato",
      "Baroque fountains",
    ],
  },
  amsterdam: {
    citySlug: "amsterdam",
    image: hero(12705128),
    imageAlt:
      "Amsterdam canal houses and tour boats on the Damrak under a blue sky",
    history:
      "Amsterdam grew from a 13th-century fishing village that dammed the river Amstel, which is where the name comes from. Its golden age was the 17th century, when Dutch ships ran the world's trade and the merchants who financed them dug the ring of canals, the Grachtengordel, and built the tall narrow gabled houses you still see, taxed by their width, which is why they are so thin. That wealth funded Rembrandt and the tulip mania that ruined speculators in 1637. The city has always been a refuge, for Huguenots, for Jews, and later a byword for tolerance. Anne Frank hid here from 1942 until her family was betrayed in 1944, and her house on the Prinsengracht is now the city's most visited memorial.",
    knownFor: [
      "The canal ring",
      "Van Gogh Museum",
      "Anne Frank House",
      "Bicycles",
      "Rijksmuseum",
      "Brown cafes",
    ],
  },
};

export default extrasEn;
