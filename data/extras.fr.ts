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
  madrid: {
    citySlug: "madrid",
    image: hero(32314658),
    imageAlt: "L'immeuble Metropolis sur la Gran Via à Madrid à l'heure dorée",
    history:
      "Madrid devint la capitale de l'Espagne presque par décret : en 1561, le roi Philippe II transféra sa cour dans ce qui n'était alors qu'une modeste bourgade, choisie en partie parce qu'elle se trouvait au centre exact de la péninsule. Les ruelles serrées du vieux centre autour de la Plaza Mayor s'appellent encore le Madrid de los Austrias d'après ces rois Habsbourg, tandis que les Bourbons plus tardifs ajoutèrent le Palais royal et les boulevards. Le 2 mai 1808, la ville se souleva contre les troupes de Napoléon, un carnage que Goya peignit et que le pays marque encore d'un jour férié. Madrid n'a pas de merveille unique comme l'Alhambra ou la Sagrada Familia ; son attrait tient à la densité de la vie et à l'une des plus grandes concentrations de peinture au monde, le Prado, le Reina Sofia et le Thyssen à dix minutes de marche.",
    knownFor: [
      "Le Prado",
      "Le parc du Retiro",
      "Tapas et terrasses",
      "Le Palais royal",
      "Guernica",
      "Les nuits tardives",
    ],
  },
  krakow: {
    citySlug: "krakow",
    image: hero(37459506),
    imageAlt:
      "La Halle aux draps et la basilique Sainte-Marie sur la Grand-Place de Cracovie",
    history:
      "Cracovie fut la capitale royale de la Pologne pendant plus de cinq siècles, jusqu'au transfert de la cour à Varsovie en 1596, et ses rois furent couronnés et inhumés là-haut, sur la colline du Wawel. L'université jagellonne, fondée en 1364, est l'une des plus anciennes d'Europe et forma un jeune Copernic. Contrairement à Varsovie, la vieille ville a traversé la Seconde Guerre mondiale presque intacte, ce qui explique pourquoi la Grand-Place médiévale, la plus grande d'Europe, est encore entière et classée à l'UNESCO. L'histoire plus sombre est toute proche : les nazis dirigeaient la Pologne occupée depuis Cracovie, vidèrent le quartier juif de Kazimierz dans le ghetto de Podgorze, et bâtirent Auschwitz-Birkenau à une heure à l'ouest. Bon marché, parcourable à pied et pleine d'étudiants, Cracovie est aujourd'hui l'un des city breaks les plus prisés d'Europe.",
    knownFor: [
      "La Grand-Place",
      "Le château du Wawel",
      "Kazimierz",
      "Les pierogi bon marché",
      "Le marché de Noël",
      "L'excursion à Auschwitz",
    ],
  },
  copenhagen: {
    citySlug: "copenhagen",
    image: hero(20228124),
    imageAlt:
      "Les maisons colorées du port et les bateaux en bois de Nyhavn à Copenhague",
    history:
      "Copenhague est passée d'un village de pêcheurs à la ville marchande fortifiée qui contrôlait l'entrée de la Baltique, d'où vient son nom, le port des marchands. La majeure partie de la vieille ville a été façonnée par le roi Christian IV au début des années 1600, qui bâtit le château de Rosenborg et la Tour ronde ; le canal de carte postale de Nyhavn fut creusé peu après comme port de travail pour les marins et les tavernes. La flotte britannique bombarda et incendia une grande partie de la ville en 1807, pendant les guerres napoléoniennes. Hans Christian Andersen y écrivit ses contes au XIXe siècle, et la Petite Sirène de bronze fut érigée en 1913. Le Danemark est la plus ancienne monarchie du monde, et le Copenhague moderne a transformé cette longue et confortable histoire en une réputation mondiale de design, de vélo et de cuisine néo-nordique.",
    knownFor: [
      "Le port de Nyhavn",
      "Les jardins de Tivoli",
      "Des vélos partout",
      "Hygge et design",
      "La cuisine néo-nordique",
      "La Petite Sirène",
    ],
  },
  athens: {
    citySlug: "athens",
    image: hero(33201846),
    imageAlt: "L'Acropole d'Athènes sur son rocher sous un ciel bleu limpide",
    history:
      "Athènes est le lieu où une grande partie du monde occidental a été inventée. Au Ve siècle av. J.-C., c'était la plus riche et la plus puissante des cités-États grecques, et sous Périclès elle bâtit le Parthénon et le reste de l'Acropole au moment même où Socrate, puis Platon et Aristote, débattaient de philosophie dans ses rues et inventaient la démocratie. Rome, puis Byzance, puis les Ottomans prirent tour à tour la ville, et le Parthénon servit d'église et de mosquée avant qu'un obus vénitien ne touche la poudre à canon que les Ottomans y stockaient en 1687 et n'en fasse sauter le toit. Quand la Grèce gagna son indépendance, Athènes devint la capitale du nouveau royaume en 1834, alors une petite ville de quelques milliers d'habitants, et grandit pour devenir la métropole moderne tentaculaire qui enveloppe aujourd'hui ces rochers antiques.",
    knownFor: [
      "L'Acropole",
      "Le Parthénon",
      "Les ruines antiques",
      "Les vues en toiture",
      "Souvláki et mezze",
      "Le berceau de la démocratie",
    ],
  },
  edinburgh: {
    citySlug: "edinburgh",
    image: hero(28851815),
    imageAlt:
      "La ligne d'horizon de la vieille ville d'Édimbourg avec le Scott Monument et la tour de l'horloge du Balmoral",
    history:
      "Édimbourg est la capitale de l'Écosse depuis six siècles, et le château sur son piton de roche volcanique est fortifié depuis bien plus longtemps encore. La vieille ville médiévale s'est développée en une dense colonne vertébrale de hauts immeubles de rapport dévalant la crête du Royal Mile, du château au palais royal de Holyroodhouse. Au XVIIIe siècle, pendant les Lumières écossaises qui produisirent David Hume et Adam Smith, la ville bâtit l'élégante trame géorgienne de la ville neuve de l'autre côté de la vallée, et gagna le surnom d'Athènes du Nord. Le premier Edinburgh Festival Fringe eut lieu en 1947 et c'est aujourd'hui le plus grand festival d'arts au monde, envahissant toute la ville chaque août. Les cafés où J.K. Rowling écrivit Harry Potter font encore de bonnes affaires.",
    knownFor: [
      "Le château d'Édimbourg",
      "Le Royal Mile",
      "Arthur's Seat",
      "Le festival Fringe",
      "Le whisky écossais",
      "Harry Potter",
    ],
  },
  paris: {
    citySlug: "paris",
    image: hero(36771040),
    imageAlt: "La tour Eiffel s'élevant au-dessus de Paris, encadrée par des arbres",
    history:
      "Paris est née d'un établissement de la tribu des Parisii sur une île de la Seine, est devenue la ville romaine de Lutèce, et est la capitale de la France depuis près de mille ans. Notre-Dame fut commencée en 1163, et le Quartier latin médiéval s'est développé autour de l'une des premières universités d'Europe. La Révolution de 1789 a débuté ici avec la prise de la Bastille, et dans les années 1850 et 1860, le baron Haussmann a percé la vieille ville surpeuplée pour tracer les larges boulevards et les façades uniformes en pierre de taille qui la définissent aujourd'hui. La tour Eiffel fut érigée comme installation temporaire pour l'Exposition universelle de 1889 et ne fut jamais démontée. Paris fut la capitale artistique du XXe siècle, fut libérée en 1944, et a rouvert une Notre-Dame restaurée en décembre 2024, cinq ans après l'incendie.",
    knownFor: [
      "La tour Eiffel",
      "Le Louvre",
      "Notre-Dame",
      "Les terrasses de café",
      "Les boulevards haussmanniens",
      "L'art et la mode",
    ],
  },
  venice: {
    citySlug: "venice",
    image: hero(34775901),
    imageAlt:
      "Le Grand Canal de Venise bordé de palazzi et de gondoles, vu depuis le Rialto",
    history:
      "Venise fut fondée par des réfugiés du continent qui se réfugièrent sur les îles marécageuses de la lagune aux Ve et VIe siècles, et devint une république qui domina le commerce méditerranéen pendant mille ans. À son apogée, la Sérénissime République, dirigée par un doge élu depuis le palais des Doges, était l'un des États les plus riches d'Europe ; Marco Polo en partit pour la Chine. Tout cela fut bâti sur des millions de pieux de bois enfoncés dans la vase, ce qui explique pourquoi les palazzi semblent surgir droit de l'eau. La République finit par tomber devant Napoléon en 1797. Aujourd'hui, Venise s'étend sur 118 îles sans aucune voiture, et se débat avec l'enfoncement de ses fondations, les inondations d'acqua alta et le tourisme de masse, ce qui explique qu'elle fasse désormais payer une taxe d'accès aux visiteurs d'un jour les jours d'affluence.",
    knownFor: [
      "Le Grand Canal",
      "La place Saint-Marc",
      "Les gondoles",
      "Le pont du Rialto",
      "Les masques du Carnevale",
      "Le verre de Murano",
    ],
  },
  dublin: {
    citySlug: "dublin",
    image: hero(13157974),
    imageAlt:
      "Le Ha'penny Bridge sur la rivière Liffey à Dublin, avec le dôme vert de la Custom House derrière",
    history:
      "Dublin est née d'un port viking de commerce et d'esclaves sur la rivière Liffey vers 841, et son nom vient de l'irlandais Dubh Linn, le bassin noir où mouillaient les drakkars. Elle devint le centre de la domination anglaise en Irlande après l'arrivée des Normands en 1170, et les larges rues et les places de brique rouge de la ville géorgienne furent tracées dans les années 1700, quand Dublin était la deuxième ville de l'Empire britannique. L'Insurrection de Pâques 1916 débuta à la General Post Office sur O'Connell Street et déclencha la lutte qui mena à l'indépendance de l'Irlande en 1922. La ville porte un poids littéraire démesuré, patrie de quatre lauréats du Nobel et cadre de l'Ulysse de James Joyce, et elle est aujourd'hui la capitale jeune et portée par la tech d'une Irlande bien plus riche.",
    knownFor: [
      "La Guinness Storehouse",
      "Le Livre de Kells",
      "Les portes géorgiennes",
      "Les pubs de Temple Bar",
      "Trinity College",
      "La musique traditionnelle",
    ],
  },
  stockholm: {
    citySlug: "stockholm",
    image: hero(30158443),
    imageAlt:
      "Le front de mer de Riddarholmen à Stockholm et la flèche de son église vus par-dessus l'eau sous un ciel bleu",
    history:
      "Stockholm fut fondée vers 1252 sur la petite île aujourd'hui appelée Gamla Stan, là où le lac Malaren se déverse dans la Baltique, et elle s'enrichit en contrôlant le commerce du fer et du cuivre sortant de Suède. Elle devint la capitale permanente au XVe siècle et le siège des rois de Suède, dont le palais royal se dresse toujours au-dessus de la vieille ville. La ville s'étala sur ses quatorze îles à mesure que la Suède accédait au rang de grande puissance au XVIIe siècle, l'époque du navire de guerre Vasa, qui chavira dans le port lors de son voyage inaugural en 1628 et fut relevé, presque intact, en 1961. Épargnée par la destruction des deux guerres mondiales grâce à la neutralité suédoise, Stockholm conserva son noyau historique et fit du XXe siècle un symbole du design, et elle accueille toujours la cérémonie et le banquet du prix Nobel chaque décembre.",
    knownFor: [
      "La vieille ville de Gamla Stan",
      "Le navire Vasa",
      "Le musée ABBA",
      "L'archipel",
      "La culture du fika",
      "Le prix Nobel",
    ],
  },
  nice: {
    citySlug: "nice",
    image: hero(26928991),
    imageAlt:
      "Les toits rouges du Vieux Nice avec la tour de l'horloge baroque et les collines de la Riviera derrière",
    history:
      "Nice a passé le plus clair de son histoire tournée vers l'Italie plutôt que vers la France : elle appartint des siècles durant à la maison de Savoie et ne devint française qu'en 1860, après un plébiscite, ce qui explique pourquoi la vieille ville a des airs liguriens et que le dialecte et la cuisine locaux sont plus proches de Gênes que de Paris. La ville s'enrichit au XIXe siècle quand les aristocrates britanniques et russes vinrent passer l'hiver sur la côte, et c'est leur argent qui paya la promenade du front de mer qui porte encore leur nom, la Promenade des Anglais. Matisse et Chagall s'y installèrent tous deux pour la lumière et laissèrent des musées sur les collines verdoyantes de Cimiez, sur le site de la ville romaine de Cemenelum. Aujourd'hui, Nice est la capitale officieuse de la Riviera et la porte d'entrée de Monaco, de Cannes et des villages perchés le long de la Côte d'Azur.",
    knownFor: [
      "La Promenade des Anglais",
      "Le Vieux Nice",
      "Le marché du Cours Saleya",
      "Les plages de galets",
      "La socca",
      "Les excursions sur la Riviera",
    ],
  },
  dubrovnik: {
    citySlug: "dubrovnik",
    image: hero(16884684),
    imageAlt:
      "Les toits en terre cuite de la vieille ville de Dubrovnik avec le dôme de la cathédrale et le mont Srd derrière",
    history:
      "Dubrovnik fut pendant des siècles la république de Raguse, une cité-État maritime petite mais habile qui garda son indépendance en payant tribut à l'empire le plus fort du moment tout en armant une flotte marchande qui rivalisait avec Venise. Ses remparts de pierre, hauts de 25 mètres et longs de près de deux kilomètres, ne furent jamais forcés, et le Stradun pavé de marbre et les églises baroques qu'ils enserrent furent en grande partie reconstruits après un tremblement de terre catastrophique en 1667. La république prit fin quand Napoléon l'abolit en 1808, et la ville rejoignit plus tard la Yougoslavie puis la Croatie indépendante. Des obus endommagèrent la vieille ville durant le siège de 1991 et 1992, pendant la guerre d'indépendance croate, mais elle fut restaurée avec un soin méticuleux, et une nouvelle vague de célébrité arriva quand elle devint Port-Réal dans Game of Thrones.",
    knownFor: [
      "Les remparts de la ville",
      "Les toits en terre cuite",
      "Le Stradun",
      "Les lieux de Game of Thrones",
      "L'île de Lokrum",
      "Les plages de l'Adriatique",
    ],
  },
  reykjavik: {
    citySlug: "reykjavik",
    image: hero(20165201),
    imageAlt:
      "La silhouette de Reykjavik au-dessus de l'eau avec la tour de Hallgrimskirkja et des montagnes enneigées derrière",
    history:
      "Reykjavik fut, selon les vieilles sagas, le site du premier établissement norrois d'Islande vers 874, quand Ingolfur Arnarson aurait jeté par-dessus bord les montants de son siège d'honneur et bâti là où ils échouèrent sur le rivage ; le nom signifie baie fumante, d'après la vapeur qui s'élève de ses sources chaudes. Elle resta un minuscule village pendant près de mille ans et ne devint une véritable ville qu'au XVIIIe siècle, avant de devenir la capitale d'une Islande autonome en 1918 puis d'une république pleinement indépendante en 1944, quand le pays rompit ses derniers liens avec le Danemark. La ville connut son moment de guerre froide en 1986, quand Reagan et Gorbatchev se rencontrèrent à la maison Hofdi et faillirent s'entendre pour démanteler leurs arsenaux nucléaires. Chauffée et alimentée presque entièrement par l'énergie géothermale et hydraulique, c'est la capitale la plus septentrionale du monde et le camp de base des cascades, des geysers et des aurores boréales d'Islande.",
    knownFor: [
      "Hallgrimskirkja",
      "Les aurores boréales",
      "Le Cercle d'Or",
      "Le Blue Lagoon",
      "Les piscines géothermales",
      "L'observation des baleines",
    ],
  },
  munich: {
    citySlug: "munich",
    image: hero(13762982),
    imageAlt:
      "Les deux tours à bulbe jumelles de la Frauenkirche et la tour de la nouvelle mairie au-dessus de la vieille ville de Munich",
    history:
      "Munich est née en 1158 autour d'un établissement de moines, d'où viennent à la fois son nom, tiré de Munichen, et le petit moine de son blason. Elle devint le siège de la dynastie des Wittelsbach, qui gouvernèrent la Bavière pendant plus de 700 ans et emplirent la ville de palais comme la Residenz et Nymphenburg, tout en en faisant une capitale de l'art et de la musique. C'est aussi là que le mouvement nazi vit le jour dans les années 1920 et que fut signé l'accord de Munich de 1938, même si les étudiants de la Rose blanche qui résistèrent depuis l'université sont commémorés dans toute la ville. Reconstruite avec soin après les bombardements de la guerre, Munich s'est réinventée prospère, verte et fameusement attachée à la tradition, connue aujourd'hui pour BMW, le FC Bayern, les brasseries et l'Oktoberfest, tenue pour la première fois en 1810 pour célébrer un mariage royal.",
    knownFor: [
      "Marienplatz",
      "L'Oktoberfest",
      "Les brasseries en plein air",
      "Le Jardin anglais",
      "L'excursion à Neuschwanstein",
      "BMW et le FC Bayern",
    ],
  },
  tallinn: {
    citySlug: "tallinn",
    image: hero(35838020),
    imageAlt:
      "Les toits rouges et les flèches d'églises de la vieille ville médiévale de Tallinn avec la skyline moderne derrière au coucher du soleil",
    history:
      "Tallinn s'est développée comme port de commerce hanséatique sur la Baltique, et dès les XIVe et XVe siècles ses marchands avaient élevé les remparts, les maisons de guilde et les églises de la vieille ville qui tiennent encore presque intacts, ce qui en fait l'une des cités médiévales les mieux conservées d'Europe. Le nom se rattache souvent à Taani linn, la ville danoise, d'après les Danois qui s'emparèrent du fort perché en 1219 ; la ville haute de Toompea abritait les dirigeants tandis que les marchands germanophones tenaient la ville basse en contrebas. L'Estonie fut absorbée par l'empire russe puis, après une courte première indépendance, par l'Union soviétique jusqu'en 1991, quand la pacifique révolution chantante rendit au pays sa liberté. Depuis, Tallinn est devenue la vitrine de l'e-Estonie, un lieu qui a contribué à créer Skype et administre son gouvernement en ligne, le tout enroulé autour d'un cœur médiéval de conte de fées.",
    knownFor: [
      "La vieille ville médiévale",
      "Les belvédères de Toompea",
      "La cathédrale Alexandre-Nevski",
      "Telliskivi et Kalamaja",
      "L'e-Estonie",
      "Le marché de Noël",
    ],
  },
  oslo: {
    citySlug: "oslo",
    image: hero(18170373),
    imageAlt:
      "Le toit de marbre blanc de l'opéra d'Oslo descendant en pente vers le port sous un ciel bleu",
    history:
      "Oslo fut fondée vers 1040 et faite capitale de la Norvège par le roi Haakon V vers 1300, mais après un incendie dévastateur en 1624, le roi danois Christian IV la rebâtit à côté de la forteresse d'Akershus et la rebaptisa Christiania, un nom qu'elle garda jusqu'à redevenir Oslo en 1925. Pendant des siècles, la Norvège fut gouvernée depuis le Danemark, puis liée à la Suède, et elle ne gagna sa pleine indépendance qu'en 1905, quand elle fit venir le roi dont les descendants règnent encore aujourd'hui. Le pétrole de la mer du Nord, découvert à la fin des années 1960, transforma une modeste capitale nordique en l'une des villes les plus riches de la planète, ce qui paya l'opéra du front de mer et la série de nouveaux musées le long du fjord. Patrie du prix Nobel de la paix, remis ici chaque décembre, Oslo enveloppe un centre compact dans la forêt et le fjord d'où les habitants skient et naviguent au départ direct de la ville.",
    knownFor: [
      "L'opéra",
      "Le Cri",
      "Le parc Vigeland",
      "Le fjord d'Oslo",
      "Le prix Nobel de la paix",
      "Holmenkollen",
    ],
  },
  helsinki: {
    citySlug: "helsinki",
    image: hero(12319482),
    imageAlt:
      "La cathédrale d'Helsinki dominant le port du Sud et la place du marché, vue depuis la mer",
    history:
      "Helsinki fut fondée en 1550 par le roi Gustave Vasa de Suède comme comptoir commercial pour rivaliser avec Tallinn de l'autre côté du golfe, mais elle resta une petite ville pendant des siècles. Tout changea en 1809, quand la Suède perdit la Finlande au profit de la Russie : le tsar fit d'Helsinki la capitale du nouveau grand-duché en 1812 et chargea l'architecte Carl Ludwig Engel de tracer la place du Sénat néoclassique et sa cathédrale blanche pour évoquer un Saint-Pétersbourg en réduction. La Finlande gagna enfin son indépendance en 1917, et le 20e siècle fit d'Helsinki une vitrine du design finlandais et de l'architecture moderne, d'Alvar Aalto à Marimekko. Elle accueillit les Jeux olympiques de 1952 et les accords d'Helsinki de 1975, et elle reste une capitale compacte cernée par la mer où le sauna est un art de vivre.",
    knownFor: [
      "La cathédrale d'Helsinki",
      "La place du Sénat",
      "La forteresse de Suomenlinna",
      "Le Design District",
      "La culture du sauna",
      "La place du marché",
    ],
  },
};

export default extrasFr;
