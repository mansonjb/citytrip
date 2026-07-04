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
};

export default extrasEn;
