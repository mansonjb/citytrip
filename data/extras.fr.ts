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
  rome: {
    citySlug: "rome",
    image: hero(32619390),
    imageAlt: "Le Colisée de Rome contre un ciel d'un bleu éclatant",
    history:
      "Rome fut, selon sa propre légende, fondée par Romulus en 753 av. J.-C., et devint la capitale d'un empire qui s'étendait de la Bretagne au Sahara. Les ruines entre lesquelles vous marchez, le Colisée, le Forum, le Panthéon, sont les vestiges d'une ville qui comptait un million d'habitants quand le Londres médiéval en comptait vingt mille. Quand l'empire tomba, les papes firent de Rome la capitale du monde catholique, et l'argent de la Renaissance et du Baroque la rebâtit autour des ossements antiques, ce qui explique pourquoi les fontaines du Bernin reposent sur des fondations romaines. Elle ne devint la capitale d'une Italie unifiée qu'en 1871, la dernière pièce du pays à rejoindre l'ensemble. Tout ce qui a suivi, de la circulation à l'apéritif, se superpose à trois mille ans que l'on n'a jamais fait table rase.",
    knownFor: [
      "Le Colisée",
      "Le Vatican et la chapelle Sixtine",
      "La fontaine de Trevi",
      "Les ruines romaines",
      "Pâtes et glaces",
      "Les fontaines baroques",
    ],
  },
  amsterdam: {
    citySlug: "amsterdam",
    image: hero(12705128),
    imageAlt:
      "Maisons de canal d'Amsterdam et bateaux de tourisme sur le Damrak sous un ciel bleu",
    history:
      "Amsterdam est née d'un village de pêcheurs du XIIIe siècle qui édifia une digue sur l'Amstel, d'où vient son nom. Son âge d'or fut le XVIIe siècle, quand les navires néerlandais menaient le commerce mondial et que les marchands qui les finançaient creusèrent l'anneau de canaux, le Grachtengordel, et bâtirent les hautes maisons à pignon étroites que l'on voit encore, taxées à la largeur, ce qui explique pourquoi elles sont si minces. Cette richesse finança Rembrandt et la tulipomanie qui ruina les spéculateurs en 1637. La ville a toujours été un refuge, pour les huguenots, pour les juifs, et plus tard un symbole de tolérance. Anne Frank s'y cacha de 1942 jusqu'à ce que sa famille soit dénoncée en 1944, et sa maison sur le Prinsengracht est aujourd'hui le mémorial le plus visité de la ville.",
    knownFor: [
      "La ceinture de canaux",
      "Le musée Van Gogh",
      "La maison d'Anne Frank",
      "Les vélos",
      "Le Rijksmuseum",
      "Les brown cafes",
    ],
  },
  florence: {
    citySlug: "florence",
    image: hero(981682),
    imageAlt:
      "La coupole de Brunelleschi se dressant au-dessus des toits en terre cuite de Florence",
    history:
      "Florence est le berceau de la Renaissance. Au XVe siècle, les Médicis, une famille de banquiers qui dirigeait de fait la ville, déversèrent leur fortune sur les artistes et les architectes, et le résultat est une petite ville renfermant plus d'art célèbre au mètre carré que presque partout sur terre. Brunelleschi éleva la plus grande coupole en maçonnerie du monde au-dessus de la cathédrale en 1436, toujours la silhouette actuelle, sans aucun échafaudage complet. Le florin d'or frappé ici était la monnaie la plus fiable de l'Europe médiévale, et c'est ainsi qu'une ville toscane de marchands finit par financer Michel-Ange, Botticelli et Léonard de Vinci. Galilée enseigna ici, Machiavel écrivit ici, et pendant six ans après 1865 Florence fut même la capitale d'une Italie fraîchement unifiée.",
    knownFor: [
      "Le Duomo",
      "L'art de la Renaissance",
      "La galerie des Offices",
      "Le David de Michel-Ange",
      "Le Ponte Vecchio",
      "La cuisine toscane",
    ],
  },
  bruges: {
    citySlug: "bruges",
    image: hero(5612504),
    imageAlt:
      "Maisons de brique à pignons à redents le long d'un canal de Bruges sous un ciel bleu",
    history:
      "Bruges fut l'une des villes les plus riches de l'Europe médiévale, le carrefour commercial de la Flandre où la laine d'Angleterre devenait le plus beau drap du continent. Elle abrita ce que beaucoup appellent la première bourse au monde, du nom de la famille Van der Beurze dont l'auberge accueillait les marchands, d'où vient le mot bourse. Puis le chenal maritime qui l'avait enrichie, le Zwin, s'ensabla autour de 1500, les marchands partirent pour Anvers, et Bruges s'endormit pendant quatre siècles. C'est précisément pourquoi elle survécut : sans argent pour tout démolir et reconstruire, le centre médiéval resta intact. Un roman sombre de 1892, Bruges-la-Morte, la rendit de nouveau célèbre, et les touristes viennent depuis.",
    knownFor: [
      "Les canaux médiévaux",
      "Le Beffroi",
      "Le chocolat belge",
      "L'art flamand",
      "La bière trappiste",
      "Les places pavées",
    ],
  },
  barcelona: {
    citySlug: "barcelona",
    image: hero(21357884),
    imageAlt:
      "La Sagrada Familia s'élevant au-dessus de Barcelone et de la mer, vue depuis le Park Guell",
    history:
      "Barcelone débuta comme la ville romaine de Barcino, puis passa le Moyen Âge en capitale maritime de la Couronne d'Aragon, ce qui explique pourquoi le quartier gothique compte encore des palais médiévaux à un pâté de maisons du port. La ville moderne naquit en 1860, quand les vieux remparts tombèrent et que l'ingénieur Ildefons Cerda traça l'Eixample, la grille de pâtés de maisons aux angles coupés que vous parcourez encore aujourd'hui. L'argent de l'industrie finança ensuite l'essor du Modernisme autour de 1900, et Antoni Gaudi transforma cette richesse en Sagrada Familia, Park Guell et Casa Batllo ; la basilique fut commencée en 1882 et est encore en cours d'achèvement. Les Jeux olympiques de 1992 ouvrirent la ville sur ses plages, et Barcelone est depuis l'une des villes les plus visitées d'Europe. Elle est farouchement catalane, avec sa propre langue et un bruyant mouvement indépendantiste.",
    knownFor: [
      "La Sagrada Familia",
      "L'architecture de Gaudi",
      "Le Park Guell",
      "La Rambla",
      "Tapas et vermut",
      "Les plages urbaines",
    ],
  },
  berlin: {
    citySlug: "berlin",
    image: hero(37468367),
    imageAlt: "La porte de Brandebourg à Berlin sous un ciel bleu",
    history:
      "Berlin fut la capitale de la Prusse puis, à partir de 1871, d'une Allemagne unifiée. Les années Weimar des années 1920 en firent un symbole de cabaret, de cinéma et d'art moderne, jusqu'à ce que les nazis prennent le pouvoir ici en 1933 et mènent la guerre depuis la ville. Ce que les bombardements ont laissé, la guerre froide l'a divisé : à partir de 1961, le mur de Berlin coupa la ville en deux pendant 28 ans, jusqu'à sa chute le 9 novembre 1989 et la réunification de l'Allemagne avec Berlin pour capitale en 1990. Les cicatrices sont aujourd'hui les sites, des tronçons de Mur encore debout aux points de passage de la guerre froide et aux mémoriaux. Les loyers bas de l'est vidé de ses habitants transformèrent ensuite la ville réunifiée en capitale de la techno et de la création en Europe, le Berlin pour lequel la plupart des gens viennent aujourd'hui.",
    knownFor: [
      "La porte de Brandebourg",
      "Le mur de Berlin",
      "L'histoire de la guerre froide",
      "La vie nocturne techno",
      "L'ile aux Musees",
      "Le street art",
    ],
  },
};

export default extrasFr;
