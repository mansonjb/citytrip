import type { CityExtras } from "./types";

const hero = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`;

// Hero photos are free-license (Pexels), URL and visually validated.
const extrasFr: Record<string, CityExtras> = {
  lisbon: {
    citySlug: "lisbon",
    image: hero(16338751),
    imageAlt:
      "Tram jaune grimpant une rue de Lisbonne devant une maison couleur moutarde",
    history:
      "Lisbonne est l'une des plus anciennes villes d'Europe occidentale, un port phénicien puis romain bien avant de devenir la capitale du Portugal en 1256. Le grand tremblement de terre du 1er novembre 1755, suivi d'un tsunami et d'incendies, a rasé la ville basse et tué des dizaines de milliers de personnes, ce qui explique pourquoi la Baixa au plan quadrillé que vous parcourez aujourd'hui contraste tant avec l'Alfama enchevêtrée qui, elle, a survécu. C'est d'ici que Vasco de Gama est parti pour l'Inde en 1498, et la taxe sur ce commerce des épices a financé les pierres manuélines que vous admirez à Belem. La révolution des OEillets de 1974, un coup d'État militaire presque sans effusion de sang, a mis fin à quatre décennies de dictature et se commémore encore chaque 25 avril.",
    knownFor: [
      "Le tram jaune 28",
      "Pastel de nata",
      "Le fado",
      "Belvédères (miradouros)",
      "Azulejos",
      "Tour de Belem",
    ],
  },
  prague: {
    citySlug: "prague",
    image: hero(11261851),
    imageAlt:
      "Le château de Prague et la cathédrale Saint-Guy au-dessus du pont Charles et de la Vltava",
    history:
      "Prague s'est développée autour d'un gué sur la Vltava et d'un château perché fondé vers 880, et dès le XIVe siècle elle était le siège de l'empereur du Saint-Empire Charles IV, qui fit bâtir le Pont Charles, la Nouvelle Ville et la plus ancienne université d'Europe centrale. La défenestration de Prague de 1618, quand des nobles protestants jetèrent des officiers impériaux par une fenêtre du château, contribua à déclencher la guerre de Trente Ans. Fait rare dans la région, le coeur historique a traversé la Seconde Guerre mondiale presque intact, ce qui explique pourquoi la silhouette gothique et baroque est si complète. La révolution de Velours de 1989 mit fin au régime communiste sans violence, et Prague est depuis la capitale tchèque.",
    knownFor: [
      "Le Pont Charles",
      "Le château de Prague",
      "L'horloge astronomique",
      "La bière bon marché",
      "La skyline baroque",
      "Les marchés de Noël",
    ],
  },
  seville: {
    citySlug: "seville",
    image: hero(5470586),
    imageAlt:
      "La Plaza de Espana de Séville à l'heure dorée, avec son canal et ses tours",
    history:
      "Séville fut l'Hispalis romaine puis, pendant plus de cinq siècles, la ville maure d'Ishbiliya, ce qui explique pourquoi le clocher de la cathédrale, la Giralda, débuta sa vie comme minaret et pourquoi l'Alcazar reste un palais mudéjar en activité. Après 1492, la ville détint le monopole de la couronne sur le commerce avec les Amériques, et l'or et l'argent qui remontaient le Guadalquivir en firent l'un des lieux les plus riches d'Europe. Cette richesse édifia l'immense cathédrale gothique, où repose Christophe Colomb. La féerique Plaza de Espana est bien plus récente, construite pour l'Exposition ibéro-américaine de 1929.",
    knownFor: [
      "Le Real Alcazar",
      "Le flamenco",
      "La Plaza de Espana",
      "Les orangers",
      "La Semaine sainte",
      "La culture des tapas",
    ],
  },
  porto: {
    citySlug: "porto",
    image: hero(25695948),
    imageAlt:
      "Le pont de fer Dom Luis I sur le Douro, les toits de la Ribeira de Porto en arrière-plan",
    history:
      "Porto a donné au Portugal à la fois son nom, tiré du port romain de Portus Cale, et sa réputation de labeur et d'indépendance. La ville fit fortune grâce au fleuve Douro : les tonneaux de vin descendaient de la haute vallée pour vieillir dans les chais de Vila Nova de Gaia, et les marchands anglais transformèrent ce commerce en vin de Porto à partir du XVIIe siècle. Le pont à deux étages Dom Luis I, inauguré en 1886, fut bâti par un élève de Gustave Eiffel. Les habitants sont toujours appelés tripeiros (mangeurs de tripes), d'après le récit selon lequel ils auraient donné leur meilleure viande à la flotte d'Henri le Navigateur en 1415 pour ne garder que les abats.",
    knownFor: [
      "Les chais de vin de Porto",
      "Le pont Dom Luis I",
      "Les quais de la Ribeira",
      "La Livraria Lello",
      "Les gares en azulejos",
      "La francesinha",
    ],
  },
  budapest: {
    citySlug: "budapest",
    image: hero(8390036),
    imageAlt:
      "Le pont des Chaines Szechenyi sur le Danube, avec le Parlement hongrois derrière",
    history:
      "Budapest fut deux rivales jusqu'en 1873 : la royale Buda, vallonnée, sur la rive ouest, et Pest, plate et commerçante, sur la rive est, réunies quand le pont des Chaines rendit enfin la traversée du Danube facile. Les Romains tenaient ici une ville de garnison nommée Aquincum, et leur goût pour les sources thermales n'a jamais disparu, ce qui explique pourquoi la ville possède encore de grands bains publics alimentés par une eau chaude souterraine. Les années autour de 1896, millénaire de l'installation hongroise, dotèrent la ville de son Parlement, de la première ligne de métro d'Europe continentale et d'une grande partie de sa somptueuse avenue Andrassy. Le soulèvement de 1956 contre la tutelle soviétique fut écrasé mais jamais oublié.",
    knownFor: [
      "Les bains thermaux",
      "Le Parlement",
      "Le pont des Chaines",
      "Les ruin bars",
      "Les vues sur le Danube",
      "Le château de Buda",
    ],
  },
  vienna: {
    citySlug: "vienna",
    image: hero(18110534),
    imageAlt:
      "Le palais du Belvédère et son bassin réfléchissant à Vienne sous un ciel bleu",
    history:
      "Vienne fut la capitale des Habsbourg pendant plus de six siècles, et le siège du Saint-Empire puis de l'empire austro-hongrois jusqu'à son effondrement en 1918, ce qui explique pourquoi une ville de moins de deux millions d'habitants possède des palais bâtis pour un continent. Quand les remparts médiévaux tombèrent en 1857, l'empereur François-Joseph les remplaça par la Ringstrasse, le grand boulevard des musées, de l'opéra et du parlement que vous longez encore aujourd'hui. Vers 1900, la ville était un creuset du monde moderne : Freud y inventa la psychanalyse, Klimt et Schiele rompirent avec la tradition, et Mahler dirigeait l'opéra. Vienne est la capitale d'une petite Autriche neutre depuis 1955, et elle vit toujours au rythme de la culture des cafés que l'UNESCO protège désormais.",
    knownFor: [
      "Le château de Schonbrunn",
      "Les cafés viennois",
      "Le Baiser de Klimt",
      "Les palais impériaux",
      "La Sachertorte",
      "Opéra et bals",
    ],
  },
  granada: {
    citySlug: "granada",
    image: hero(38100344),
    imageAlt:
      "Le palais de l'Alhambra au-dessus de Grenade avec la Sierra Nevada enneigée derrière",
    history:
      "Grenade fut le dernier royaume musulman d'Europe occidentale, la capitale de l'émirat nasride qui tint 250 ans après la chute du reste de l'Espagne. Ses souverains bâtirent l'Alhambra, le plus beau palais islamique subsistant en Occident, sur la colline au-dessus de la ville. Le 2 janvier 1492, les Rois catholiques Isabelle et Ferdinand prirent la ville, mettant fin à près de 800 ans de domination mauresque en Espagne ; la même année, depuis Grenade, Isabelle accepta de financer Christophe Colomb. L'Alhambra fut à demi oubliée jusqu'à ce que l'écrivain Washington Irving y séjourne et publie Contes de l'Alhambra en 1832, ce qui déclencha l'engouement romantique qui la sauva. Grenade est aujourd'hui une ville universitaire où les strates mauresque et espagnole cohabitent côte à côte.",
    knownFor: [
      "L'Alhambra",
      "Les tapas gratuites",
      "Les vues de l'Albaicin",
      "L'héritage mauresque",
      "La Sierra Nevada",
      "Le flamenco du Sacromonte",
    ],
  },
};

export default extrasFr;
