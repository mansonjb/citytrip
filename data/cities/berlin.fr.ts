import type { CityData } from "../types";

const berlinFr: CityData = {
  city: {
    slug: "berlin",
    name: "Berlin",
    country: "Allemagne",
    countrySlug: "germany",
    lat: 52.52,
    lng: 13.405,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "BER",
    airportToCenter:
      "Depuis l'aéroport BER Brandebourg, le FEX Airport Express rejoint la gare centrale (Hauptbahnhof) en environ 30 min, ou les lignes de S-Bahn S9 et S45 atteignent le centre en 40-45 min. Chacune d'elles exige un billet zones ABC à environ 4,70 EUR, l'aéroport se trouvant dans la zone C extérieure. Un taxi jusqu'à Mitte coûte à peu près 45-60 EUR et prend 40 min sans trafic.",
    centerWalkable: false,
    bestMonths: [5, 6, 7, 9],
    avoidMonths: [1],
    monthlyNotes: {
      1: "Le mois le plus froid et le plus gris, avec des maximales proches de 3C, souvent sous zéro la nuit, des journées courtes et une lumière ténue. La foule est minimale et les hôtels au plus bas, mais les marchés de Noël ont fermé dès début janvier et il reste peu d'attraits saisonniers au-delà du calme d'après-Nouvel An.",
      2: "Toujours froid à 4-5C et souvent humide, mais la Berlinale, le festival international du film, apporte à la mi-février dix jours d'avant-premières, de tapis rouges et de projections publiques à travers la ville. Réservez à l'avance si vous venez pour le festival, sinon c'est une période calme et peu coûteuse pour voir les musées sans file.",
      3: "Les maximales grimpent vers 9C à mesure que l'hiver desserre son étreinte, avec des journées qui rallongent mais un temps changeant et venteux. La foule reste légère et les prix bas, ce qui en fait un mois d'un bon rapport qualité-prix si vous prévoyez de quoi affronter le froid et la pluie et misez sur les sites intérieurs.",
      4: "Le printemps arrive de façon inégale autour de 13C, avec les cerisiers en fleurs le long de tronçons de l'ancien Mur et les premiers après-midis doux qui attirent les gens dans les parcs. Pâques peut faire grimper les prix des hôtels quelques jours, mais la foule reste modérée et la lumière s'améliore vite.",
      5: "L'un des meilleurs mois à 19-20C, avec de longues soirées, des parcs verdoyants et les guinguettes qui rouvrent en force. Le Karneval der Kulturen emplit Kreuzberg d'un défilé de rue et de stands de nourriture le week-end de la Pentecôte, attendez-vous donc à quelques journées animées et bondées à ce moment-là.",
      6: "Chaud et animé à 22-23C, avec les plus longues journées de l'année et l'ouverture de la saison de baignade dans les lacs du Wannsee et du Müggelsee. La foule s'étoffe et les bars sur les toits et les guinguettes battent leur plein, mais les prix des hôtels restent sous les sommets de plein été.",
      7: "Plein été à 24-25C, chaud et animé, avec le cinéma en plein air, les plages au bord des lacs et le clubbing en extérieur à leur apogée. C'est le meilleur mois pour la vie estivale de la ville, réservez donc tôt votre hébergement et attendez-vous à voir les guinguettes populaires bondées les soirs ensoleillés.",
      8: "Toujours chaud à 24C mais parfois lourd, avec des orages d'été, et beaucoup de Berlinois partent eux-mêmes en vacances, si bien que la ville semble un peu plus calme qu'en juillet. Cela reste un mois solide pour les lacs, les parcs et les longues soirées lumineuses, avec des festivals qui rythment tout le calendrier estival.",
      9: "Chaud au début puis retombant autour de 19C, sans doute le meilleur mois tous critères confondus : des journées douces, une foule estivale qui s'amenuise et un temps à guinguettes qui tient sur la première moitié. La saison culturelle d'automne redémarre, vous offrant à la fois la vie en extérieur et la réouverture des galeries et des salles de concert.",
      10: "Plus frais à 13-14C, avec la première vraie fraîcheur automnale et des journées plus courtes, mais le Festival of Lights, en début de mois, projette des illuminations sur les grands monuments à la nuit tombée pendant environ deux semaines. La foule s'éclaircit et les prix s'assouplissent, un bon choix de mi-saison bien rentable si vous vous couvrez.",
      11: "Gris, froid et souvent pluvieux, avec des maximales proches de 7C, le point bas de l'année pour la météo et la lumière du jour. Le salut vient tout à la fin, quand les marchés de Noël ouvrent dans les derniers jours du mois, si bien qu'un séjour fin novembre peut cumuler prix bas et premier glühwein.",
      12: "Froid, autour de 4C, et nuit dès le milieu de l'après-midi, mais les marchés de Noël s'étendent sur toute la ville de fin novembre jusqu'à juste avant Noël, avec le plus remarquable sur le Gendarmenmarkt (petit droit d'entrée) et d'autres à Alexanderplatz et au château de Charlottenburg. Le réveillon du Nouvel An offre une immense fête gratuite avec feux d'artifice à la porte de Brandebourg, attendez-vous donc à la foule et à des tarifs plus élevés sur cette période.",
    },
    climate: {
      1: { highC: 3, lowC: -2, rainyDays: 10 },
      2: { highC: 4, lowC: -2, rainyDays: 8 },
      3: { highC: 9, lowC: 1, rainyDays: 8 },
      4: { highC: 13, lowC: 4, rainyDays: 8 },
      5: { highC: 19, lowC: 8, rainyDays: 9 },
      6: { highC: 22, lowC: 11, rainyDays: 9 },
      7: { highC: 24, lowC: 14, rainyDays: 9 },
      8: { highC: 24, lowC: 13, rainyDays: 8 },
      9: { highC: 19, lowC: 10, rainyDays: 7 },
      10: { highC: 13, lowC: 6, rainyDays: 8 },
      11: { highC: 7, lowC: 2, rainyDays: 10 },
      12: { highC: 4, lowC: -1, rainyDays: 11 },
    },
    budgetLevel: "mid",
    budgetPerDay: { budget: 65, mid: 130, high: 260 },
    tagline: "L'histoire du Mur, des musées de rang mondial et la meilleure vie nocturne d'Europe.",
    heroIntro:
      "Berlin est vaste, plate et étalée, c'est donc une ville de U-Bahn et de S-Bahn, pas de tout-à-pied, et on la planifie par quartier. Trois jours sont le minimum honnête pour répartir le coeur historique de Mitte, l'histoire du Mur et de la guerre froide, et un quartier moderne sans marche forcée. Venez à la fin du printemps ou au début de l'automne, réservez votre créneau gratuit pour la coupole du Reichstag avant de partir, et achetez un billet journée ABC dès votre arrivée.",
    accent: { from: "#3E4A6B", to: "#E0A43B", ink: "#232A42" },
    neighborhoodSlugs: [
      "mitte",
      "kreuzberg",
      "prenzlauer-berg",
      "friedrichshain",
      "charlottenburg",
    ],
    nearbyCitySlugs: ["prague"],
  },

  neighborhoods: [
    {
      slug: "mitte",
      citySlug: "berlin",
      name: "Mitte",
      lat: 52.5219,
      lng: 13.4016,
      bestFor: ["first-time", "family", "romantic"],
      vibe: "Le centre historique et géographique, où la porte de Brandebourg, l'ile aux Musees, le Reichstag et Unter den Linden s'alignent à quelques pas ou à un arrêt de tram. C'est le Berlin des cartes postales et la base logique pour un premier séjour court bâti autour des grands sites. Léché et central, il troque le côté brut et local des quartiers de l'est contre une pure commodité.",
      pros: [
        "Marchez ou prenez un court trajet jusqu'à la porte de Brandebourg, au Reichstag et à l'ile aux Musees",
        "Superbe noeud de transports, avec U-Bahn, S-Bahn et trams se croisant à plusieurs stations",
        "Tout ce qu'un primo-visiteur veut voir se regroupe ici, ce qui évite les traversées de ville",
      ],
      cons: [
        "Le secteur le plus cher pour les hôtels et le plus fréquenté par les groupes en journée",
        "Certaines parties près des sites semblent corporate et calmes après les heures de bureau",
        "Moins de la scène locale et vivante que l'on trouve à Kreuzberg ou Neukölln",
      ],
    },
    {
      slug: "kreuzberg",
      citySlug: "berlin",
      name: "Kreuzberg",
      lat: 52.4986,
      lng: 13.4033,
      bestFor: ["nightlife", "local", "budget"],
      vibe: "Le coeur du Berlin alternatif et multiculturel, bourré de marchés turcs, de bars au bord du canal, de street art et de quelques-uns des meilleurs repas bon marché et nuits tardives de la ville. Le secteur autour de Kottbusser Tor et du Landwehrkanal est débraillé, énergique et sans fard, à la manière dont on vient à Berlin. Bruyant et brut, il récompense les voyageurs qui veulent la vraie chose plutôt que la version rangée.",
      pros: [
        "La plus forte concentration de bars, de street food et de vie nocturne de la ville",
        "Authentiquement multiculturel, avec le marché turc et les balades le long du canal",
        "Manger et boire d'un bon rapport qualité-prix, du döner aux bars à vin nature",
      ],
      cons: [
        "Brut et bruyant, avec des coins rugueux autour de Kottbusser Tor la nuit",
        "Un trajet en U-Bahn depuis les sites de Mitte plutôt qu'à distance de marche",
        "Les nuits de week-end deviennent chahutées, un mauvais choix pour le sommeil léger",
      ],
    },
    {
      slug: "prenzlauer-berg",
      citySlug: "berlin",
      name: "Prenzlauer Berg",
      lat: 52.5403,
      lng: 13.4241,
      bestFor: ["family", "romantic", "local"],
      vibe: "Un beau quartier de l'ancien Est fait d'immeubles de rapport du XIXe siècle restaurés, de places arborées et d'une culture du brunch dominical, aujourd'hui le quartier le plus embourgeoisé et le plus familial de la ville. Le secteur autour de Kollwitzplatz et de Kastanienallee compte boutiques, cafés et le marché aux puces du Mauerpark à sa porte. Calme et joli, c'est le Berlin facile et confortable plutôt que le Berlin tranchant.",
      pros: [
        "De belles rues sûres, avec cafés, adresses de brunch et boutiques indépendantes",
        "Le marché aux puces dominical du Mauerpark et son karaoké sont à courte marche",
        "Excellent pour les familles et les couples voulant une base plus calme et plus verte",
      ],
      cons: [
        "Peu de vie nocturne en propre, la scène y est calme et résidentielle",
        "À quelques arrêts de U-Bahn ou de tram des sites centraux de Mitte",
        "Embourgeoisé et plus cher que les quartiers plus bruts de l'est",
      ],
    },
    {
      slug: "friedrichshain",
      citySlug: "berlin",
      name: "Friedrichshain",
      lat: 52.5155,
      lng: 13.4542,
      bestFor: ["nightlife", "budget", "local"],
      vibe: "Le fief du clubbing de l'ancien Berlin-Est, qui abrite l'East Side Gallery, les temples de la techno autour de la Spree et la bande de bars jeunes et bon marché le long de la Simon-Dach-Straße. La grandiose Karl-Marx-Allee de l'ère socialiste le traverse, toute en boulevards monumentaux et en Plattenbau. Brut, jeune et debout toute la nuit, c'est là que se passe réellement la vie nocturne légendaire de Berlin.",
      pros: [
        "L'East Side Gallery et les plus grands clubs se trouvent juste ici",
        "Manger et boire bon marché au milieu d'une foule jeune, très étudiante",
        "Liaisons directes en S-Bahn et U-Bahn de l'autre côté du fleuve vers le centre",
      ],
      cons: [
        "Bruyant et brouillon le week-end, construit autour du clubbing nocturne",
        "Moins de charme en plein jour que les quartiers de l'ouest ou du nord",
        "Un trajet depuis les sites de Mitte, même si les liaisons de transport sont bonnes",
      ],
    },
    {
      slug: "charlottenburg",
      citySlug: "berlin",
      name: "Charlottenburg",
      lat: 52.5058,
      lng: 13.3042,
      bestFor: ["family", "romantic", "first-time"],
      vibe: "Le coeur élégant de l'ancien Berlin-Ouest, bâti autour du boulevard commerçant du Kurfürstendamm, du château baroque de Charlottenburg et de grands immeubles d'habitation anciens. Il paraît plus calme et plus établi que les quartiers de l'est, avec des grands magasins, des cafés classiques et le zoo à proximité. Raffiné et résidentiel, il convient aux voyageurs qui préfèrent le confort et l'espace au côté brut.",
      pros: [
        "Le château de Charlottenburg, le shopping du Ku'damm et le zoo, tous ici",
        "Calme, sûr et vert, une base confortable pour les familles et les couples",
        "Transports du côté ouest bien reliés, directs vers Zoo et Hauptbahnhof",
      ],
      cons: [
        "Le plus éloigné des cinq des sites du Mur et de Berlin-Est",
        "Une vie nocturne plus tranquille et une atmosphère plus léchée, moins alternative",
        "L'ambiance shopping classique peut sembler guindée à côté de la scène de l'est",
      ],
    },
  ],

  pois: [
    {
      slug: "brandenburg-gate",
      citySlug: "berlin",
      name: "la porte de Brandebourg",
      lat: 52.5163,
      lng: 13.3777,
      kind: "sight",
      needsBooking: false,
      tip: "La porte est gratuite, ouverte et ne ferme jamais, venez donc au lever du soleil ou à la nuit tombée pour les colonnes éclairées sans la cohue des groupes en journée sur la Pariser Platz. Elle se dressait dans le no man's land de la ville divisée, et la place vous met aujourd'hui à quelques pas du Reichstag et du memorial de l'Holocauste, enchaînez donc les trois en une seule boucle. Évitez les personnages costumés qui proposent des photos, ils attendent un paiement.",
    },
    {
      slug: "reichstag",
      citySlug: "berlin",
      name: "le Reichstag et sa coupole de verre",
      lat: 52.5186,
      lng: 13.3762,
      kind: "sight",
      needsBooking: true,
      tip: "La coupole de verre est gratuite mais vous devez vous inscrire en ligne pour un créneau horaire des jours à l'avance, il n'y a pas d'entrée sans réservation et les créneaux partent vite en saison. Apportez la pièce d'identité qui correspond à votre réservation, la sécurité est de niveau aéroport. Visez un créneau au crépuscule pour saisir la ville de jour puis illuminée à mesure que vous montez la rampe en spirale, et prenez l'audioguide gratuit qui se synchronise avec la vue.",
    },
    {
      slug: "east-side-gallery",
      citySlug: "berlin",
      name: "l'East Side Gallery",
      lat: 52.5051,
      lng: 13.4394,
      kind: "sight",
      needsBooking: false,
      tip: "Ce tronçon de 1,3 km du mur de Berlin encore debout, peint de fresques dont le baiser Brejnev-Honecker, est gratuit et en plein air 24h/24 le long de la Spree à Friedrichshain. Venez tôt le matin pour photographier les panneaux célèbres avant la foule et avant que des gens ne se plantent devant chacun. Parcourez-le depuis l'extrémité de l'Ostbahnhof vers l'Oberbaumbrücke, puis traversez le pont vers Kreuzberg pour déjeuner.",
    },
    {
      slug: "museum-island",
      citySlug: "berlin",
      name: "l'ile aux Musees",
      lat: 52.5169,
      lng: 13.4017,
      kind: "museum",
      needsBooking: true,
      tip: "Prenez le billet combiné Bereichskarte qui couvre tous les musées de l'île pour un seul prix et réservez une entrée horaire en ligne, le Neues Museum et son buste de Néfertiti exigeant un créneau. Soyez honnête sur votre plan : le Pergamon, le bâtiment phare, est fermé pour une rénovation majeure jusqu'aux environs de 2027, ne venez donc pas en espérant la grande salle de l'autel. Choisissez une ou deux des maisons ouvertes, une journée entière pour toutes serait l'overdose de musée.",
    },
    {
      slug: "holocaust-memorial",
      citySlug: "berlin",
      name: "le memorial aux Juifs assassines d'Europe",
      lat: 52.5139,
      lng: 13.3789,
      kind: "sight",
      needsBooking: false,
      tip: "Le champ de 2 711 stèles de béton est gratuit, ouvert et toujours accessible, à courte marche au sud de la porte de Brandebourg. Enfoncez-vous au milieu, là où le sol s'affaisse et où les blocs vous dépassent de la tête, pour ressentir la désorientation voulue par la conception, et restez respectueux, c'est un mémorial, pas un terrain de jeu. Le Centre d'information souterrain gratuit, en dessous, ferme certains jours et a sa propre file de sécurité, vérifiez donc avant d'y aller.",
    },
    {
      slug: "checkpoint-charlie",
      citySlug: "berlin",
      name: "Checkpoint Charlie",
      lat: 52.5075,
      lng: 13.3904,
      kind: "sight",
      needsBooking: false,
      tip: "La guérite reconstituée et le célèbre panneau sont gratuits mais pur théâtre touristique désormais, avec des acteurs payés en uniforme à qui vous ne devez rien pour les photos, traitez donc cela comme un arrêt de cinq minutes. La vraie substance, ce sont les panneaux gratuits en plein air le long de la rue et le Mauermuseum voisin (payant) si vous voulez le détail des récits d'évasion. Associez-le à la Topographie de la Terreur à courte marche à l'ouest pour une matinée de guerre froide bien plus forte.",
    },
    {
      slug: "fernsehturm",
      citySlug: "berlin",
      name: "la tour de télévision (Fernsehturm)",
      lat: 52.5208,
      lng: 13.4094,
      kind: "viewpoint",
      needsBooking: true,
      tip: "À 368 m, c'est la structure la plus haute d'Allemagne et la vue sur toute la ville plate est la meilleure de Berlin, mais réservez un billet horaire en ligne pour éviter une file qui peut dépasser une heure à Alexanderplatz. Un créneau coupe-file coûte plus cher mais évite l'attente un jour d'affluence. Montez vers le coucher du soleil pour la ville de jour puis illuminée, et le restaurant tournant un étage plus haut nécessite sa propre réservation.",
    },
    {
      slug: "berlin-cathedral",
      citySlug: "berlin",
      name: "la cathédrale de Berlin",
      lat: 52.5191,
      lng: 13.4009,
      kind: "sight",
      needsBooking: false,
      tip: "La grande cathédrale protestante de l'ile aux Musees facture environ 10 EUR l'entrée, qui inclut la montée de 270 marches jusqu'au chemin de ronde extérieur de la coupole, pour une vue rapprochée sur l'île et la Spree. Allez-y pour le balcon de la coupole plus que pour l'intérieur, le panorama sur les toits est le véritable attrait. Elle ferme aux visiteurs pendant les offices, vérifiez donc l'horaire si vous venez un dimanche.",
    },
    {
      slug: "topography-of-terror",
      citySlug: "berlin",
      name: "la Topographie de la Terreur",
      lat: 52.5075,
      lng: 13.3833,
      kind: "museum",
      needsBooking: false,
      tip: "Bâti sur le site de l'ancien quartier général de la Gestapo et des SS, ce centre de documentation est gratuit et l'un des exposés les plus glaçants et les mieux expliqués de l'appareil de terreur nazi dans la ville. Comptez au moins 90 minutes pour la dense exposition intérieure, et lisez les panneaux extérieurs qui courent le long d'un tronçon du Mur encore debout à l'entrée. Il se trouve à courte marche de Checkpoint Charlie, faites donc les deux ensemble.",
    },
    {
      slug: "tiergarten",
      citySlug: "berlin",
      name: "le parc du Tiergarten",
      lat: 52.5145,
      lng: 13.3501,
      kind: "park",
      needsBooking: false,
      tip: "L'immense parc central de Berlin est gratuit et s'étire de la porte de Brandebourg au Zoo, idéal pour une balade ou un vélo de location entre les sites de Mitte et Charlottenburg. Grimpez la colonne de la Victoire (petit droit d'entrée) au milieu pour une vue le long des allées bordées d'arbres, ou trouvez la guinguette du Café am Neuen See sur la lisière sud aux beaux mois. Un dimanche d'été, vous verrez les locaux griller sur chaque coin de pelouse.",
    },
    {
      slug: "mauerpark",
      citySlug: "berlin",
      name: "le marché aux puces et karaoké du Mauerpark",
      lat: 52.5439,
      lng: 13.4025,
      kind: "experience",
      needsBooking: false,
      tip: "Le dimanche, ce parc de l'ancienne bande de la mort accueille un vaste marché aux puces ainsi que le légendaire Bearpit Karaoke en plein air dans l'amphithéâtre de pierre à partir du début d'après-midi, les deux gratuits. Venez en fin de matinée pour flâner entre les stands, manger aux food trucks, puis prenez une bière et regardez des inconnus pousser la chansonnette devant une foule de centaines de personnes. Il a lieu toute l'année mais est à son meilleur par beau temps, calez-le donc sur une belle journée.",
    },
    {
      slug: "gendarmenmarkt",
      citySlug: "berlin",
      name: "Gendarmenmarkt",
      lat: 52.5138,
      lng: 13.3925,
      kind: "sight",
      needsBooking: false,
      tip: "Souvent appelée la plus belle place de la ville, cet espace symétrique encadré par les cathédrales allemande et française et le Konzerthaus est gratuit à contempler et à photographier, au mieux dans la lumière basse du petit matin ou du soir. En décembre, elle accueille l'un des meilleurs marchés de Noël de Berlin, qui facture un petit droit d'entrée pour maîtriser la foule. Elle est à deux minutes de marche de la station de U-Bahn Französische Straße et proche des cafés haut de gamme du Gendarmenmarkt.",
    },
    {
      slug: "tempelhofer-feld",
      citySlug: "berlin",
      name: "le Tempelhofer Feld",
      lat: 52.4732,
      lng: 13.4017,
      kind: "park",
      needsBooking: false,
      tip: "Cet aéroport désaffecté est aujourd'hui un vaste parc public gratuit où l'on peut marcher, pédaler ou patiner droit sur les anciennes pistes, une expérience authentiquement berlinoise sans équivalent ailleurs. Louez un vélo et parcourez toute la longueur d'une ancienne piste, ou apportez un pique-nique et regardez les kitesurfeurs les jours de vent. Il ferme à la tombée de la nuit avec des grilles qui se verrouillent, vérifiez donc l'horaire de fermeture saisonnier affiché aux entrées avant de vous installer.",
    },
    {
      slug: "ddr-museum",
      citySlug: "berlin",
      name: "le DDR Museum",
      lat: 52.5192,
      lng: 13.4029,
      kind: "museum",
      needsBooking: false,
      tip: "Ce musée interactif de la vie quotidienne dans l'Allemagne de l'Est communiste, sur la Spree face à la cathédrale, est captivant et participatif, avec une Trabant où s'asseoir et un appartement de RDA reconstitué. Il devient à l'étroit et lent dès la mi-journée parce que tout est fait pour être touché et ouvert, arrivez donc pile à l'ouverture de 9h ou dans la dernière heure. Achetez le billet en ligne pour éviter la petite file de billetterie sur la berge.",
    },
  ],

  itineraries: [
    {
      citySlug: "berlin",
      days: 2,
      summary:
        "Deux jours couvrent l'essentiel de Berlin, mais la ville est immense et étalée, si bien que 48 heures relèvent de la course et vous filerez vite d'un quartier à l'autre. En deux jours, vous pouvez faire le coeur historique de Mitte le premier jour, la porte de Brandebourg, la coupole du Reichstag, le memorial de l'Holocauste, l'ile aux Musees et Gendarmenmarkt, puis donner le deuxième jour à l'histoire du Mur et de la guerre froide, Checkpoint Charlie, la Topographie de la Terreur et l'East Side Gallery, en terminant par un dîner à Kreuzberg. Ce qu'il faut couper : Charlottenburg, Prenzlauer Berg, le Tempelhofer Feld, les lacs et tout temps lent en quartier, c'est donc un tour des points forts, pas un Berlin que vous apprenez à connaître. Cela convient à une escapade de week-end ou à un premier aperçu avant de combiner avec Prague. Les incontournables : inscrivez-vous en ligne pour votre créneau gratuit de la coupole du Reichstag avant de partir, et achetez un billet journée ABC dès votre arrivée, les contrôles sont fréquents et les amendes salées. Logez à Mitte pour que les deux matins commencent près des sites. Un troisième jour est de loin la meilleure amélioration, et Berlin le réclame vraiment.",
      stayNeighborhoodSlug: "mitte",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Mitte historique : porte, coupole, musées",
          morning: [
            {
              poiSlug: "brandenburg-gate",
              text: "Commencez tôt à la porte de Brandebourg, avant que les groupes n'emplissent la Pariser Platz, pour des photos des colonnes dans la lumière du matin. Elle est gratuite et ouverte, et tout ce qui compose la matinée se trouve à courte marche d'ici.",
              durationMin: 30,
            },
            {
              poiSlug: "reichstag",
              text: "Marchez deux minutes jusqu'au Reichstag pour votre créneau gratuit de coupole réservé à l'avance, en apportant la pièce d'identité qui correspond à votre réservation pour la sécurité de niveau aéroport. Montez la rampe de verre en spirale avec l'audioguide gratuit pour la vue sur le quartier gouvernemental et la ville.",
              durationMin: 75,
            },
            {
              poiSlug: "holocaust-memorial",
              text: "Coupez au sud vers le memorial aux Juifs assassines d'Europe, le champ gratuit de stèles de béton à courte marche de la porte. Enfoncez-vous dans le centre en creux, là où les blocs vous dépassent de la tête, et visitez le Centre d'information souterrain s'il est ouvert.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              text: "Déjeunez sur ou près d'Unter den Linden, puis flânez le long du grand boulevard vers l'est en direction de l'île, en passant l'opéra d'État et Bebelplatz. Faites vite, l'après-midi est chargé en musées.",
              durationMin: 75,
            },
            {
              poiSlug: "museum-island",
              text: "Passez l'après-midi sur l'ile aux Musees avec une Bereichskarte combinée, en choisissant une ou deux maisons puisque le Pergamon est fermé pour rénovation jusqu'aux environs de 2027. Le Neues Museum et son buste de Néfertiti ou l'Alte Nationalgalerie sont les meilleurs choix uniques.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "gendarmenmarkt",
              text: "Marchez jusqu'à Gendarmenmarkt dans la lumière du soir pour la place symétrique encadrée par ses deux cathédrales et le Konzerthaus. Photographiez-la, puis trouvez à dîner dans les rues alentour.",
              durationMin: 45,
            },
            {
              text: "Dînez dans le centre de Mitte, en réservant à l'avance pour toute adresse renommée, et concluez la soirée par un verre autour des cours du Hackescher Markt à courte marche au nord. C'est votre seule soirée tardive près des sites.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Le Mur et le Berlin de la guerre froide",
          morning: [
            {
              poiSlug: "topography-of-terror",
              text: "Commencez à la Topographie de la Terreur sur le site de l'ancien quartier général de la Gestapo, gratuit et ouvert, en comptant 90 minutes pour la dense exposition. Lisez les panneaux extérieurs le long du tronçon de Mur encore debout avant de partir.",
              durationMin: 90,
            },
            {
              poiSlug: "checkpoint-charlie",
              text: "Marchez quelques minutes jusqu'à Checkpoint Charlie, en traitant la guérite reconstituée et le panneau comme un arrêt photo rapide plutôt qu'un temps fort. Ignorez les acteurs costumés payants, et lisez les panneaux gratuits en plein air dans la rue pour la vraie histoire.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              text: "Prenez le U-Bahn ou le S-Bahn vers l'est et déjeunez à Friedrichshain avant la marche du Mur. C'est un bon moment pour valider une nouvelle portion de votre billet journée, les contrôles sont fréquents sur ces lignes.",
              durationMin: 75,
            },
            {
              poiSlug: "east-side-gallery",
              text: "Parcourez l'East Side Gallery, le tronçon peint gratuit de 1,3 km de Mur le long de la Spree, depuis l'extrémité de l'Ostbahnhof vers l'Oberbaumbrücke. Photographiez les fresques célèbres, puis traversez le pont vers Kreuzberg.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Passez la soirée à Kreuzberg autour de Kottbusser Tor et du Landwehrkanal, à manger bon marché et bien, du döner à un bar au bord du canal. C'est le Berlin alternatif que les sites de Mitte ne vous montrent pas.",
              durationMin: 150,
            },
          ],
        },
      ],
    },
    {
      citySlug: "berlin",
      days: 3,
      summary:
        "Oui, trois jours sont la bonne durée pour Berlin, et c'est ce que nous recommandons pour une première visite d'une ville aussi étalée. Elle se découpe nettement en trois : le coeur historique de Mitte, la porte de Brandebourg, la coupole du Reichstag, le memorial de l'Holocauste, l'ile aux Musees et Gendarmenmarkt le premier jour ; l'histoire du Mur et de la guerre froide, Checkpoint Charlie, la Topographie de la Terreur et l'East Side Gallery le deuxième jour ; et un troisième jour pour la ville moderne et vivante, Prenzlauer Berg, le marché dominical du Mauerpark et le vaste Tempelhofer Feld. Vous avez les monuments, l'histoire et une vraie journée de quartier plutôt qu'un sprint de pure visite. Ce qui saute encore : Charlottenburg, le côté ouest et les lacs, ce qui est précisément ce qu'ajoute un quatrième jour. Cela convient aux primo-visiteurs, aux couples et à quiconque enchaîne ensuite sur Prague. Logez à Prenzlauer Berg : c'est calme, joli, et cela vous met à la porte du Mauerpark avec des sauts faciles en tram et en U-Bahn vers Mitte. Inscrivez-vous pour votre créneau gratuit de la coupole du Reichstag et achetez un billet journée ABC, les contrôles sont fréquents.",
      stayNeighborhoodSlug: "prenzlauer-berg",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Mitte historique : porte, coupole, musées",
          morning: [
            {
              poiSlug: "brandenburg-gate",
              text: "Commencez tôt à la porte de Brandebourg pour les colonnes avant que la Pariser Platz ne se remplisse de groupes. Elle est gratuite et ouverte, et elle ancre une boucle matinale des trois sites phares de Mitte.",
              durationMin: 30,
            },
            {
              poiSlug: "reichstag",
              text: "Marchez jusqu'au Reichstag pour votre créneau gratuit de coupole réservé à l'avance, avec la pièce d'identité qui correspond à votre réservation pour la sécurité. Montez la rampe de verre en spirale avec l'audioguide gratuit pour la vue sur la ville et le quartier gouvernemental.",
              durationMin: 75,
            },
            {
              poiSlug: "holocaust-memorial",
              text: "Filez au sud vers le memorial gratuit aux Juifs assassines d'Europe, à courte marche de la porte. Enfoncez-vous dans le centre, là où le sol s'affaisse et où les stèles vous dépassent de la tête, puis voyez le Centre d'information souterrain s'il est ouvert.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              text: "Déjeunez près d'Unter den Linden, puis marchez le boulevard vers l'est en direction de l'ile aux Musees, en passant Bebelplatz et l'opéra d'État. Une flânerie détendue, pas une marche forcée, puisque les musées viennent ensuite.",
              durationMin: 90,
            },
            {
              poiSlug: "museum-island",
              text: "Donnez l'après-midi à l'ile aux Musees avec une Bereichskarte combinée, en choisissant une ou deux maisons puisque le Pergamon est fermé pour travaux jusqu'aux environs de 2027. Le Neues Museum avec Néfertiti ou l'Alte Nationalgalerie sont les meilleurs choix uniques.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "berlin-cathedral",
              text: "S'il vous reste de l'énergie, grimpez les 270 marches de la cathédrale de Berlin sur l'île pour la vue du balcon de la coupole sur la Spree en fin d'après-midi. Sinon, photographiez sa façade depuis le Lustgarten et passez à autre chose.",
              durationMin: 45,
            },
            {
              poiSlug: "gendarmenmarkt",
              text: "Marchez jusqu'à Gendarmenmarkt pour la plus belle place de la ville encadrée par ses deux cathédrales, au mieux dans la lumière du soir. Trouvez à dîner dans les rues alentour, en réservant à l'avance pour toute adresse bien notée.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Le Mur et le Berlin de la guerre froide",
          morning: [
            {
              poiSlug: "topography-of-terror",
              text: "Commencez à la Topographie de la Terreur gratuite sur l'ancien site de la Gestapo, en comptant 90 minutes pour la dense exposition bien expliquée. Lisez les panneaux extérieurs le long du Mur encore debout à l'entrée avant de continuer.",
              durationMin: 90,
            },
            {
              poiSlug: "checkpoint-charlie",
              text: "Marchez jusqu'à Checkpoint Charlie tout près, un arrêt photo rapide au poste de passage reconstitué plutôt qu'un temps fort. Ignorez les acteurs costumés payants et lisez les panneaux gratuits de la rue pour la substance.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "fernsehturm",
              text: "Prenez le U-Bahn jusqu'à Alexanderplatz et montez la tour de télévision (Fernsehturm) sur un créneau horaire réservé à l'avance pour la meilleure vue sur la ville plate, idéalement vers le coucher du soleil. Attrapez un déjeuner rapide sur la place d'abord, ou ensuite si votre créneau est tôt.",
              durationMin: 90,
            },
            {
              poiSlug: "east-side-gallery",
              text: "Filez vers l'est jusqu'à l'East Side Gallery et parcourez le tronçon peint gratuit de 1,3 km de Mur le long de la Spree, de l'Ostbahnhof vers l'Oberbaumbrücke. Photographiez les fresques célèbres, puis traversez le pont vers Kreuzberg.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Passez la soirée à Friedrichshain ou Kreuzberg de part et d'autre du fleuve, à manger bon marché et bien et à boire là où va la foule jeune. C'est le côté vie nocturne de Berlin, alors ménagez-vous si demain commence tôt.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Berlin moderne : Prenzlauer Berg, Mauerpark, Tempelhof",
          morning: [
            {
              text: "Commencez tranquillement par un long brunch à Prenzlauer Berg autour de Kollwitzplatz ou de Kastanienallee, le rituel dominical local. Parcourez les rues d'immeubles de rapport restaurés et les boutiques indépendantes en chemin.",
              durationMin: 90,
            },
            {
              poiSlug: "mauerpark",
              text: "Marchez jusqu'au Mauerpark pour le vaste marché aux puces dominical et, à partir du début d'après-midi, le Bearpit Karaoke gratuit en plein air dans l'amphithéâtre de pierre. Flânez entre les stands, mangez à un food truck, puis prenez une bière et regardez la foule du karaoké.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "ddr-museum",
              text: "Revenez vers le centre pour le DDR Museum interactif sur la Spree, sur la vie quotidienne dans l'Allemagne de l'Est communiste, en achetant en ligne pour éviter la file. Allez-y pour la Trabant où s'asseoir et l'appartement de RDA reconstitué, et gardez-le sous l'heure si la foule s'étoffe.",
              durationMin: 75,
            },
            {
              poiSlug: "tempelhofer-feld",
              text: "Prenez le U-Bahn vers le sud jusqu'au Tempelhofer Feld, l'ancien aéroport gratuit, et louez un vélo pour parcourir toute la longueur d'une piste. Apportez un en-cas et regardez les kitesurfeurs, mais notez que les grilles se verrouillent à l'heure de fermeture affichée à la tombée de la nuit.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              text: "Retournez à Prenzlauer Berg pour un dernier dîner détendu près de votre base, en réservant une table sur Kollwitzplatz ou dans une rue latérale. Terminez par un verre tranquille tout près de votre lit, sans traversée de ville à prévoir.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "berlin",
      days: 4,
      summary:
        "Quatre jours sont le point idéal pour une première visite de Berlin, transformant un sprint étalé en vraies vacances. Les jours un à trois couvrent l'essentiel : le coeur historique de Mitte, l'histoire du Mur et de la guerre froide, et la ville moderne de Prenzlauer Berg, du Mauerpark et du Tempelhofer Feld, chacun fait sans se presser. Le quatrième jour est la soupape, et il se répartit en deux : soit l'élégant côté ouest autour du château de Charlottenburg et du Ku'damm, soit une demi-journée d'excursion vers les palais de Sanssouci à Potsdam ou le glaçant mémorial de Sachsenhausen, tous deux à un trajet facile en S-Bahn ou en train régional depuis le centre. Cette durée convient aux voyageurs qui détestent la marche forcée, aux couples et à quiconque a des vols qui encadrent le séjour de façon maladroite. Pour quatre jours, nous recommandons de loger à Kreuzberg : vous avez accepté un rythme plus lent, et ses bars au bord du canal, sa street food et ses nuits tardives font du retour au bercail chaque soir le meilleur moment de la journée. Au-delà de quatre jours, ajoutez les lacs en été ou une journée entière à Potsdam. Inscrivez-vous pour votre créneau gratuit de la coupole du Reichstag et achetez un billet journée ABC dès votre arrivée.",
      stayNeighborhoodSlug: "kreuzberg",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Mitte historique : porte, coupole, musées",
          morning: [
            {
              poiSlug: "brandenburg-gate",
              text: "Commencez tôt à la porte de Brandebourg pour les colonnes avant que la foule n'emplisse la Pariser Platz. Gratuite et ouverte, elle ancre la boucle matinale des grands monuments de Mitte.",
              durationMin: 30,
            },
            {
              poiSlug: "reichstag",
              text: "Marchez jusqu'au Reichstag pour votre créneau gratuit de coupole réservé à l'avance, en apportant la pièce d'identité correspondante pour la sécurité. Montez la rampe de verre en spirale avec l'audioguide gratuit pour la vue sur la ville et le quartier gouvernemental.",
              durationMin: 75,
            },
            {
              poiSlug: "holocaust-memorial",
              text: "Coupez au sud vers le memorial gratuit aux Juifs assassines d'Europe, à courte marche. Enfoncez-vous dans le centre en creux, là où les stèles vous dépassent de la tête, puis voyez le Centre d'information souterrain s'il est ouvert.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              text: "Déjeunez près d'Unter den Linden, puis marchez le boulevard vers l'est en direction de l'ile aux Musees en passant Bebelplatz. Une flânerie détendue, puisque vous avez quatre jours et aucune raison de vous presser.",
              durationMin: 90,
            },
            {
              poiSlug: "museum-island",
              text: "Passez l'après-midi sur l'ile aux Musees avec une Bereichskarte combinée, en choisissant une ou deux maisons puisque le Pergamon est fermé jusqu'aux environs de 2027. Le Neues Museum avec Néfertiti ou l'Alte Nationalgalerie sont les meilleurs choix.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "gendarmenmarkt",
              text: "Marchez jusqu'à Gendarmenmarkt pour la plus belle place de la ville dans la lumière du soir, encadrée par ses deux cathédrales. Trouvez à dîner dans les rues de Mitte alentour, en réservant à l'avance pour toute adresse bien notée.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Le Mur et le Berlin de la guerre froide",
          morning: [
            {
              poiSlug: "topography-of-terror",
              text: "Commencez à la Topographie de la Terreur gratuite sur l'ancien site de la Gestapo, en comptant 90 minutes pour l'exposition. Lisez les panneaux extérieurs le long du Mur encore debout avant de partir.",
              durationMin: 90,
            },
            {
              poiSlug: "checkpoint-charlie",
              text: "Marchez jusqu'à Checkpoint Charlie, un arrêt photo rapide au poste de passage reconstitué. Ignorez les acteurs costumés payants et lisez les panneaux gratuits de la rue pour la vraie histoire.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "fernsehturm",
              text: "Prenez le U-Bahn jusqu'à Alexanderplatz et montez la tour de télévision (Fernsehturm) sur un créneau réservé à l'avance pour la meilleure vue sur la ville plate. Déjeunez sur la place autour de votre créneau.",
              durationMin: 90,
            },
            {
              poiSlug: "east-side-gallery",
              text: "Filez jusqu'à l'East Side Gallery et parcourez le tronçon peint gratuit de 1,3 km de Mur le long de la Spree, de l'Ostbahnhof vers l'Oberbaumbrücke. Traversez le pont vers Kreuzberg où vous logez.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Passez la soirée chez vous à Kreuzberg autour de Kottbusser Tor et du canal, à manger bon marché et bien et à boire là où vont les locaux. Vous êtes basé ici, donc aucun trajet de retour à prévoir.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Berlin moderne : Prenzlauer Berg, Mauerpark, Tempelhof",
          morning: [
            {
              text: "Montez à Prenzlauer Berg pour un long brunch autour de Kollwitzplatz, le rituel local du week-end, et parcourez les rues d'immeubles de rapport restaurés. Un début lent pour une journée de quartier.",
              durationMin: 90,
            },
            {
              poiSlug: "mauerpark",
              text: "Marchez jusqu'au Mauerpark pour le marché aux puces dominical et, à partir du début d'après-midi, le Bearpit Karaoke gratuit en plein air dans l'amphithéâtre de pierre. Flânez entre les stands, mangez à un food truck, puis regardez le karaoké avec une bière.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "tempelhofer-feld",
              text: "Prenez le U-Bahn vers le sud jusqu'au Tempelhofer Feld, l'ancien aéroport gratuit, et louez un vélo pour parcourir toute la longueur d'une piste. Apportez un pique-nique, regardez les kitesurfeurs, et notez que les grilles se verrouillent à l'heure affichée à la tombée de la nuit.",
              durationMin: 120,
            },
            {
              poiSlug: "ddr-museum",
              text: "Si le temps le permet au retour, faites un saut au DDR Museum interactif sur la Spree pour la Trabant où s'asseoir et l'appartement de RDA reconstitué, en achetant en ligne pour éviter la file. Gardez-le court, une heure suffit.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Retournez à Kreuzberg pour le dîner et les verres, en essayant un bar à vin nature ou une adresse le long du Landwehrkanal. C'est l'élément du quartier, alors attardez-vous.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Berlin-Ouest ou une journée à Potsdam",
          morning: [
            {
              text: "Choisissez la direction de votre quatrième jour. Pour le côté ouest, prenez le U-Bahn jusqu'au château de Charlottenburg, l'ancienne résidence royale baroque aux jardins à la française, et comptez deux bonnes heures pour les appartements d'apparat et le parc. Pour une excursion à la place, prenez le train régional vers Potsdam et le parc de Sanssouci pour les palais rococo et les vignes en terrasses.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              text: "Si vous êtes resté à l'ouest, flânez sur le boulevard commerçant du Kurfürstendamm et voyez la tour en ruine de l'église du Souvenir Kaiser-Wilhelm, puis prenez un café dans un classique de Charlottenburg. Si vous êtes allé à Potsdam, parcourez le quartier hollandais et la vieille ville avant le trajet retour. Comme alternative plus lourde, passez la journée au mémorial du camp de concentration de Sachsenhausen au nord de la ville, une sortie glaçante en S-Bahn et en bus qui demande tout un après-midi.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              poiSlug: "tiergarten",
              text: "De retour au centre, parcourez une partie du Tiergarten à l'heure dorée, ou trouvez sa guinguette du Café am Neuen See sur la lisière sud aux beaux mois. Une décompression verte et facile après la sortie de la journée.",
              durationMin: 75,
            },
            {
              text: "Réservez un dîner d'adieu de retour à Kreuzberg, en dépensant un peu plus pour votre dernier repas berlinois dans une adresse repérée plus tôt. Terminez par un dernier verre le long du canal, à courte marche de votre lit.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
  ],
};

export default berlinFr;
