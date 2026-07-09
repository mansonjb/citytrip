import type { CityData } from "../types";

const athensFr: CityData = {
  city: {
    slug: "athens",
    name: "Athènes",
    country: "Grèce",
    countrySlug: "greece",
    lat: 37.9838,
    lng: 23.7275,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "ATH",
    airportToCenter:
      "La ligne de métro 3 (bleue) relie l'aéroport directement à Syntagma, au centre, en environ 40 min pour environ 9 EUR, avec un train toutes les 30 min. Le bus express X95 fait le même trajet pour 5,50 EUR à toute heure, 24 heures sur 24, mais met 60 à 90 min selon la circulation. Un taxi à tarif fixe jusqu'au centre coûte environ 40 EUR de jour.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [7, 8],
    monthlyNotes: {
      1: "Frais et calme, avec des maximales à 13C, les tarifs d'hôtel les plus bas de l'année et aucune file pour l'Acropole. La pluie vient par courtes averses mais le grand soleil est fréquent, et les sites de l'État offrent l'entrée gratuite le premier dimanche : calez donc une visite sur le 4 janvier.",
      2: "Encore doux, à 14C, et l'un des mois les plus tranquilles sur le rocher, avec une lumière claire pour les photos entre deux averses. La fenêtre d'entrée gratuite du premier dimanche s'applique le 1er février, et les terrasses des cafés de Plaka se remplissent à tout déjeuner ensoleillé.",
      3: "Les maximales grimpent vers 16C et les amandiers fleurissent, l'affluence ne commençant à monter qu'en fin de mois. Le 25 mars, c'est la fête de l'Indépendance, un jour férié national avec un défilé militaire devant Syntagma et de nombreux sites et boutiques fermés : organisez-vous en conséquence.",
      4: "L'un des meilleurs mois, à 20C, collines vertes et longue lumière, même si c'est là que tombe en général la Pâque orthodoxe grecque (le 12 avril en 2026), la plus grande fête du pays. Athènes se vide à moitié quand les familles rentrent chez elles, beaucoup de tavernes ferment le week-end de Pâques, et l'office de minuit aux bougies vaut le coup d'œil.",
      5: "Chaud, sec et fiable, à 26C, le juste équilibre avant la fournaise de l'été, avec de longues soirées pour les dîners en toiture. L'affluence est forte à l'Acropole : réservez un billet horaire et allez-y dès l'ouverture à 8h, mais le temps et la lumière du jour sont presque parfaits.",
      6: "Chaud, à 31C, et animé, avec le festival d'Athènes-Épidaure qui ouvre sa saison de théâtre antique et de concerts à l'Odéon d'Hérode Atticus, sous l'Acropole. Faites le rocher à l'ouverture, repliez-vous à l'intérieur du frais musée de l'Acropole l'après-midi, et réservez les soirées du festival à l'avance.",
      7: "Pic de chaleur au-dessus de 34C, soleil implacable et peu d'ombre sur les sites archéologiques, tandis que beaucoup d'Athéniens partent pour les îles. Le festival d'Épidaure continue à l'Odéon, mais la visite impose un départ à 8h ou les deux dernières heures avant la fermeture, la mi-journée passée à l'intérieur ou au bord d'une piscine.",
      8: "Le mois le plus chaud et le plus sec, à 34C et plus, quand la ville peut dépasser 38C et que les habitants se vident vers la côte autour du congé du 15 août. Si août est inévitable, avancez tout au petit matin, réservez la climatisation, et traitez le frais musée de l'Acropole et les soirées en toiture comme une stratégie de survie.",
      9: "La chaleur de l'été sans le pire, en démarrant près de 29C et en s'adoucissant au fil du mois, avec le festival d'Épidaure qui se termine et les Athéniens de retour en ville. L'affluence s'amincit après la première semaine et c'est sans doute le plus beau mois dans l'ensemble pour une escapade athénienne.",
      10: "Des journées chaudes autour de 23C avec les premières vraies pluies de retour en fin de mois et une superbe lumière rasante sur le marbre. L'affluence chute nettement après la mi-mois, et l'entrée gratuite du premier dimanche reprend pour la basse saison en octobre, à confirmer toutefois car l'horaire d'hiver démarre en novembre.",
      11: "Plus frais, à 18C, avec des périodes plus humides mais de nombreuses journées lumineuses, et les grands sites les plus tranquilles de l'automne. Les tarifs de basse saison reviennent et l'entrée gratuite des sites de l'État tombe le premier dimanche, le 1er novembre : un séjour peu coûteux et sans file est tout à fait faisable.",
      12: "Doux pour l'hiver, à 14C, mais la période la plus humide, avec les illuminations de Noël tendues au-dessus de Syntagma et de Monastiraki et un marché festif sur les places. Les sites restent ouverts aux horaires d'hiver réduits et l'entrée gratuite du premier dimanche tombe le 6 décembre, attirant des foules locales.",
    },
    climate: {
      1: { highC: 13, lowC: 7, rainyDays: 11 },
      2: { highC: 14, lowC: 7, rainyDays: 9 },
      3: { highC: 16, lowC: 8, rainyDays: 8 },
      4: { highC: 20, lowC: 11, rainyDays: 7 },
      5: { highC: 26, lowC: 15, rainyDays: 5 },
      6: { highC: 31, lowC: 20, rainyDays: 3 },
      7: { highC: 34, lowC: 23, rainyDays: 1 },
      8: { highC: 34, lowC: 23, rainyDays: 1 },
      9: { highC: 29, lowC: 19, rainyDays: 3 },
      10: { highC: 23, lowC: 15, rainyDays: 6 },
      11: { highC: 18, lowC: 11, rainyDays: 8 },
      12: { highC: 14, lowC: 8, rainyDays: 11 },
    },
    budgetLevel: "mid",
    budgetPerDay: { budget: 55, mid: 110, high: 220 },
    tagline: "Le berceau de l'Occident, avec les meilleures terrasses en toiture d'Europe.",
    heroIntro:
      "Athènes vous tend l'Acropole, des sites antiques de premier plan et un centre-ville débrouillard et palpitant que l'on traverse de bout en bout en une après-midi. Trois jours sont le juste équilibre honnête : un pour le rocher et son musée, un pour l'agora antique et les ruelles de la vieille ville, et un pour le Musée national archéologique et une colline au coucher du soleil. Venez au printemps ou au début de l'automne, réservez le billet de l'Acropole avant de partir, et dînez sur une terrasse en toiture avec le Parthénon illuminé au-dessus de vous.",
    accent: { from: "#1E7FA8", to: "#E0C15A", ink: "#0E3E52" },
    neighborhoodSlugs: ["plaka", "monastiraki", "koukaki", "kolonaki", "psyrri"],
    nearbyCitySlugs: [],
  },

  neighborhoods: [
    {
      slug: "plaka",
      citySlug: "athens",
      name: "Plaka",
      lat: 37.9714,
      lng: 23.7286,
      bestFor: ["first-time", "romantic", "family"],
      vibe: "La vieille ville lovée sur le versant nord de l'Acropole, un dédale de maisons néoclassiques, de bougainvillées et de ruelles piétonnes grimpant vers le rocher. Tout ce qu'un primo-visiteur veut se trouve à moins de dix minutes à pied, et les rues sont calmes et jolies une fois les excursionnistes partis le soir. C'est la carte postale, et vous payez un léger supplément pour y dormir.",
      pros: [
        "Marche jusqu'à l'Acropole, l'agora antique et l'agora romaine sans transport",
        "Ruelles sans voitures, sûres, calmes et délicieuses à parcourir la nuit",
        "Dense en tavernes, cafés et les marches d'Anafiotika, dignes d'une île",
      ],
      cons: [
        "La restauration la plus touristique de la ville, certaines tavernes vivant sur l'emplacement",
        "Les prix des hôtels et de la nourriture dépassent ceux des quartiers alentour",
        "Des rues raides et en escalier, pénibles avec une valise ou une poussette",
      ],
    },
    {
      slug: "monastiraki",
      citySlug: "athens",
      name: "Monastiraki",
      lat: 37.9764,
      lng: 23.7256,
      bestFor: ["first-time", "nightlife", "budget"],
      vibe: "La charnière bouillonnante du centre, bâtie autour d'une place desservie par le métro où le marché aux puces, l'agora romaine et les ruelles de la vieille ville se rejoignent. Les bars en toiture d'ici regardent droit l'Acropole illuminée, et les rues restent bruyantes et vivantes passé minuit. Central, bien relié et jamais ennuyeux, quoiqu'un peu chaotique.",
      pros: [
        "Nœud de métro sur les lignes 1 et 3, direct vers l'aéroport et le port du Pirée",
        "Les bars en toiture au meilleur rapport qualité-prix avec une vue frontale sur l'Acropole",
        "Marche jusqu'à l'Acropole, l'agora, Plaka et Psyrri en quelques minutes",
      ],
      cons: [
        "Bruyant jour et nuit autour de la place et des rues du marché",
        "Touristique et propice aux pickpockets sur les tronçons les plus fréquentés du marché aux puces",
        "Moins de chambres calmes et reposantes que dans les quartiers plus tranquilles",
      ],
    },
    {
      slug: "koukaki",
      citySlug: "athens",
      name: "Koukaki",
      lat: 37.9648,
      lng: 23.7256,
      bestFor: ["local", "budget", "family"],
      vibe: "Un quartier résidentiel juste au sud de l'Acropole, plus calme et plus local que la vieille ville mais toujours à une courte marche de l'entrée principale et du musée de l'Acropole. Des rues arborées abritent des tavernes de quartier, du café de troisième vague et un vrai air de vie autour de Georgiou Olympiou. Calme, à prix juste et de plus en plus la base maligne des visiteurs qui reviennent.",
      pros: [
        "Marche jusqu'au versant sud de l'Acropole, au musée et à la colline de Filopappou",
        "Les stations de métro Akropoli et Syngrou-Fix sur la ligne 2 pour le reste de la ville",
        "Une vraie table de quartier à prix juste, bien à l'écart du circuit touristique",
      ],
      cons: [
        "Peu de sites en propre : il faut en sortir pour voir des choses",
        "Plus calme la nuit, avec une scène de bars plus réduite qu'à Monastiraki ou Psyrri",
        "Certains pâtés de maisons près de l'avenue Syngrou sont chargés de circulation",
      ],
    },
    {
      slug: "kolonaki",
      citySlug: "athens",
      name: "Kolonaki",
      lat: 37.9795,
      lng: 23.7443,
      bestFor: ["romantic", "local", "family"],
      vibe: "Le quartier chic et huppé sur les pentes basses du Lycabette, plein de boutiques de créateurs, de galeries d'art et de cafés soignés où les Athéniens bien habillés observent les passants. Il vous place au pied du funiculaire du mont Lycabette et à une marche de plain-pied de Syntagma et des musées. Élégant et sûr, quoique plus cher et moins pittoresque que la vieille ville.",
      pros: [
        "Le pied du funiculaire du Lycabette pour la plus belle vue du coucher de soleil de la ville",
        "Cafés chics, boutiques et les excellents musées Benaki et d'Art cycladique à proximité",
        "Des rues calmes et sûres et un vrai air local et résidentiel",
      ],
      cons: [
        "Une marche de 15 à 20 minutes en montée depuis l'Acropole et Plaka",
        "Le quartier le plus cher pour la table et le shopping",
        "Pas de station de métro à l'intérieur : il faut marcher jusqu'à Syntagma ou Evangelismos",
      ],
    },
    {
      slug: "psyrri",
      citySlug: "athens",
      name: "Psyrri",
      lat: 37.9784,
      lng: 23.7228,
      bestFor: ["nightlife", "local", "budget"],
      vibe: "Un ancien quartier d'ateliers un peu rêche juste au nord de Monastiraki, devenu le cœur de la vie nocturne et du street art du centre, bourré de bars à mezze, de rebetiko live et de tavernes tardives. De jour il est débraillé et à moitié barricadé, de nuit il se remplit d'Athéniens qui mangent et boivent sous des guirlandes de lumières. Bruyant, bon marché et très amusant.",
      pros: [
        "La sortie nocturne la plus vivante et la plus locale du centre, du mezze au rebetiko",
        "Nourriture et boisson moins chères qu'à Plaka, à quelques minutes à pied",
        "À deux pas du métro Monastiraki et des grands sites",
      ],
      cons: [
        "Bruyant jusqu'au petit matin, un mauvais choix pour les dormeurs légers",
        "Rugueux et un peu vide sur certains pâtés de maisons de jour",
        "Peu de sites classiques : on est là pour manger, boire et flâner",
      ],
    },
  ],

  pois: [
    {
      slug: "acropolis",
      citySlug: "athens",
      name: "L'Acropole et le Parthénon",
      lat: 37.9715,
      lng: 23.7267,
      kind: "sight",
      needsBooking: true,
      tip: "Achetez le billet horaire de l'Acropole en ligne avant de partir et prenez le tout premier créneau de 8h ou les deux dernières heures avant la fermeture, car la chaleur de midi et les foules sur le rocher sans ombre sont brutales l'été. Le billet combiné Acropole et sites est bien plus avantageux et couvre aussi l'agora antique, l'agora romaine, le temple de Zeus olympien et plus encore sur plusieurs jours. Entrez par la porte plus calme du versant sud, près du musée de l'Acropole, plutôt que par l'entrée principale bondée, et emportez de l'eau et un chapeau.",
    },
    {
      slug: "acropolis-museum",
      citySlug: "athens",
      name: "Le musée de l'Acropole",
      lat: 37.9686,
      lng: 23.7286,
      kind: "museum",
      needsBooking: true,
      tip: "Bon marché, climatisé et le refuge parfait de la mi-journée contre la chaleur : associez-le au rocher le même jour et glissez-vous ici quand le soleil est au pire. Réservez en ligne pour éviter la file des billets, puis commencez par la galerie du Parthénon au dernier étage, dont les parois de verre encadrent le vrai temple sur la colline juste en face. Le sol de verre au-dessus du quartier antique fouillé, à l'entrée, mérite un regard lent en arrivant.",
    },
    {
      slug: "ancient-agora",
      citySlug: "athens",
      name: "L'agora antique et le temple d'Héphaïstos",
      lat: 37.9755,
      lng: 23.7223,
      kind: "sight",
      needsBooking: false,
      tip: "Couverte par le billet combiné de l'Acropole : utilisez-le plutôt que de payer à part, et venez le matin avant que les foules de l'Acropole ne descendent jusqu'ici. Le temple d'Héphaïstos, en haut, est le temple grec antique le mieux conservé au monde, bien plus intact que le Parthénon, et presque jamais bondé. Ne sautez pas la stoa d'Attale reconstruite, dont la colonnade ombragée abrite un petit musée frais des objets du quotidien athénien.",
    },
    {
      slug: "plaka",
      citySlug: "athens",
      name: "Le vieux quartier de Plaka",
      lat: 37.9714,
      lng: 23.7286,
      kind: "experience",
      needsBooking: false,
      tip: "Flânez dans les ruelles sans voitures tôt le matin pour les bougainvillées et les photos de rues vides, puis revenez après 20h, quand les tavernes s'animent. Écartez-vous de l'artère à souvenirs d'Adrianou vers les rues hautes tranquilles qui grimpent vers Anafiotika, où les prix baissent et l'ambiance s'améliore. Évitez les tavernes à menus en photos et rabatteurs devant la porte : elles vivent sur l'emplacement.",
    },
    {
      slug: "monastiraki-square",
      citySlug: "athens",
      name: "Le marché aux puces et la place de Monastiraki",
      lat: 37.9764,
      lng: 23.7256,
      kind: "sight",
      needsBooking: false,
      tip: "Le marché aux puces du dimanche matin sur la place Avissynias est le vrai, avec de la vraie brocante et des antiquités, tandis que les étals quotidiens d'Ifestou penchent vers les souvenirs pour touristes. Surveillez votre sac et votre portefeuille dans la cohue, c'est l'endroit le plus propice aux pickpockets de la ville. Montez à n'importe quel bar en toiture donnant sur la place au crépuscule pour la vue frontale sur l'Acropole par-dessus les toits de terre cuite.",
    },
    {
      slug: "temple-olympian-zeus",
      citySlug: "athens",
      name: "Le temple de Zeus olympien",
      lat: 37.9693,
      lng: 23.7332,
      kind: "sight",
      needsBooking: false,
      tip: "Inclus dans le billet combiné de l'Acropole : aucune raison d'acheter une entrée à part, et 15 à 20 minutes suffisent amplement pour les colonnes géantes subsistantes. Associez-le à l'arc d'Hadrien juste à côté, gratuit à voir depuis la rue, et au Jardin national à une courte marche au nord pour l'ombre. La lumière de fin d'après-midi dore le marbre et l'affluence y est faible à toute heure.",
    },
    {
      slug: "lycabettus-hill",
      citySlug: "athens",
      name: "La colline du Lycabette",
      lat: 37.9829,
      lng: 23.7439,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Le point culminant de la ville et le meilleur spot pour le coucher de soleil, avec l'Acropole, l'étalement urbain et la mer déployés en contrebas depuis la terrasse de la chapelle. Prenez le funiculaire depuis Kolonaki pour vous épargner la montée raide, puis redescendez à pied à travers la pinède ensuite si vos genoux le permettent. Arrivez 30 minutes avant le coucher du soleil pour réserver une place à la rambarde du café, et emportez une couche, il y a du vent là-haut.",
    },
    {
      slug: "national-archaeological-museum",
      citySlug: "athens",
      name: "Le Musée national archéologique",
      lat: 37.9891,
      lng: 23.7326,
      kind: "museum",
      needsBooking: false,
      tip: "La plus belle collection d'art grec antique au monde, au nord du centre, et elle vaut le détour même si vous vous croyez lassé des musées. Filez droit vers le masque d'or d'Agamemnon, l'imposant bronze de Zeus ou Poséidon et la machine d'Anticythère, puis flânez à votre guise. C'est à 15 minutes à pied ou à un saut de métro du centre, et les matinées sont les plus calmes : commencez donc ici avant les groupes de l'après-midi.",
    },
    {
      slug: "panathenaic-stadium",
      citySlug: "athens",
      name: "Le stade panathénaïque",
      lat: 37.9682,
      lng: 23.7411,
      kind: "sight",
      needsBooking: false,
      tip: "Le stade tout en marbre qui a accueilli les premiers Jeux olympiques modernes en 1896, et le billet d'entrée comprend un audioguide et la possibilité de courir un tour ou de monter sur le podium des vainqueurs. Vous en tirez tout l'effet gratuitement depuis la rambarde de la rue si vous préférez ne pas payer, tout le fer à cheval étant visible de l'extérieur. Venez tôt ou tard pour avoir la piste à vous pour les photos, et associez-le au Jardin national voisin.",
    },
    {
      slug: "anafiotika",
      citySlug: "athens",
      name: "Anafiotika",
      lat: 37.9724,
      lng: 23.7292,
      kind: "experience",
      needsBooking: false,
      tip: "Une minuscule poche de maisons blanchies à la chaux, façon île, bâties dans la pente de l'Acropole par des ouvriers d'Anafi : on dirait un village cycladique déposé dans la ville. Grimpez les ruelles en escalier au-dessus du haut de Plaka tôt le matin pour les portes bleues et les chats sans aucune foule. Il n'y a ni boutiques ni cafés là-haut, c'est purement un endroit où flâner : allez-y discrètement et respectez le fait que des gens vivent derrière ces portes.",
    },
    {
      slug: "roman-agora",
      citySlug: "athens",
      name: "L'agora romaine et la tour des Vents",
      lat: 37.9743,
      lng: 23.7258,
      kind: "sight",
      needsBooking: false,
      tip: "Couverte par le billet combiné de l'Acropole, et assez petite pour être vue en 20 minutes : glissez-la dans une flânerie à Plaka plutôt que d'en faire un déplacement à part. La tour des Vents octogonale est la vedette, une station météo et horloge à eau antique en marbre avec des dieux des vents sculptés sur chaque face, et l'une des structures les mieux conservées de son âge. Elle se trouve en plein sur le bord de Plaka : casez-la donc entre l'agora antique et le déjeuner.",
    },
    {
      slug: "acropolis-rooftop-bar",
      citySlug: "athens",
      name: "Un bar en toiture avec vue sur l'Acropole",
      lat: 37.9762,
      lng: 23.7255,
      kind: "food",
      needsBooking: true,
      tip: "Le coup du soir signature d'Athènes, c'est un verre sur une terrasse en toiture de Monastiraki avec l'Acropole illuminée droit devant, et les terrasses les plus connues affichent complet : réservez une table pour le coucher du soleil un ou deux jours à l'avance. Vous payez un supplément vue sur les boissons : prenez-le comme une tournée pour la photo plutôt qu'un dîner entier. Si vous sautez la réservation, le point de vue public gratuit sur le rocher de l'Aréopage sous l'Acropole offre un coucher de soleil similaire gratuitement, sans le cocktail.",
    },
    {
      slug: "varvakios-market",
      citySlug: "athens",
      name: "Le marché central de Varvakios",
      lat: 37.9803,
      lng: 23.7266,
      kind: "food",
      needsBooking: false,
      tip: "Le tumultueux marché central de la viande et du poisson de la ville, sur la rue Athinas, ouvert du lundi au samedi environ de 7h à 15h et fermé le dimanche, au mieux en milieu de matinée quand il bat son plein. Faufilez-vous entre les carcasses suspendues jusqu'aux vieilles tavernes nichées dans les halles, où les travailleurs du marché mangent soupe de tripes et poisson grillé à prix cassés. Même si vous ne mangez pas ici, les boutiques d'épices, de fruits secs et de traiteur alentour sur Evripidou sont un arrêt souvenir gourmand formidable et bon marché.",
    },
    {
      slug: "filopappou-hill",
      citySlug: "athens",
      name: "La colline de Filopappou",
      lat: 37.9668,
      lng: 23.7189,
      kind: "viewpoint",
      needsBooking: false,
      tip: "La colline couverte de pins face à l'Acropole depuis le sud-ouest, gratuite et ouverte à toute heure, avec la meilleure vue frontale du rocher et du Parthénon. Montez le chemin de marbre depuis la promenade Dionysiou Areopagitou au coucher du soleil, quand l'Acropole rougeoie et que les foules sont sur le rocher, pas ici. Portez de vraies chaussures, les chemins antiques sont polis et glissants, et emportez de l'eau car il n'y a pas de café au sommet.",
    },
  ],

  itineraries: [
    {
      citySlug: "athens",
      days: 2,
      summary:
        "Deux jours suffisent à couvrir l'essentiel d'Athènes, même si c'est un duo de journées bien rempli et concentré plutôt que détendu. En 48 heures, vous pouvez faire l'Acropole et son musée le premier jour, puis l'agora antique, Plaka, Monastiraki et un coucher de soleil en toiture le deuxième, en mangeant bien les deux soirs dans la vieille ville. Ce qu'il faut couper : le superbe Musée national archéologique, une montée au Lycabette ou à Filopappou pour le coucher du soleil, et toute excursion hors de la ville, si bien que c'est la version grands classiques. Elle convient à un week-end, à une escale en route vers les îles, ou à une première approche de la ville. Le seul point non négociable : réservez à l'avance le billet horaire de l'Acropole et prenez le créneau d'ouverture de 8h, car le rocher sans ombre est punitif dès la fin de matinée aux mois chauds. Installez-vous à Plaka pour que les deux matinées démarrent à pied sur les sites et que les soirées vous mettent à deux pas du dîner. Si vous gagnez un troisième jour, ajoutez le Musée national archéologique et une colline au coucher du soleil, la meilleure amélioration possible.",
      stayNeighborhoodSlug: "plaka",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "L'Acropole et son musée",
          morning: [
            {
              poiSlug: "acropolis",
              text: "Soyez à l'Acropole pour votre créneau réservé de 8h, en entrant par la porte plus calme du versant sud, et montez au Parthénon avant l'arrivée de la chaleur et des groupes. Faites le tour de l'Érechthéion et des Propylées, puis arrêtez-vous au rocher de l'Aréopage en descendant pour un panorama gratuit sur la ville.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Déjeunez à Koukaki ou sur la promenade piétonne Dionysiou Areopagitou sous le versant sud, à une courte marche de plain-pied du musée. Prenez votre temps à l'abri du soleil de midi avant l'après-midi à l'intérieur.",
              durationMin: 75,
            },
            {
              poiSlug: "acropolis-museum",
              text: "Glissez-vous dans le frais musée de l'Acropole climatisé pour la partie la plus chaude de la journée, en commençant par la galerie du Parthénon au dernier étage qui encadre le vrai temple en face. Le sol de verre au-dessus de la rue antique fouillée, à l'entrée, mérite un regard lent en arrivant.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "plaka",
              text: "Flânez dans Plaka à mesure que la lumière s'adoucit, en grimpant les ruelles hautes tranquilles vers Anafiotika avant que les tavernes ne se remplissent. Réservez une table à l'écart de l'artère à souvenirs pour 20h30 environ et installez-vous pour un long dîner grec.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "L'agora antique, la vieille ville et un coucher de soleil en toiture",
          morning: [
            {
              poiSlug: "ancient-agora",
              text: "Commencez à l'agora antique avec votre billet combiné, avant que les foules de l'Acropole ne descendent, et grimpez au quasi parfait temple d'Héphaïstos, en haut. Glissez-vous dans la stoa d'Attale ombragée et son petit musée des objets du quotidien athénien.",
              durationMin: 90,
            },
            {
              poiSlug: "roman-agora",
              text: "Marchez quelques minutes jusqu'à l'agora romaine et sa tour des Vents octogonale, la station météo antique en marbre sculptée de dieux des vents. Elle est petite, donc 20 minutes en viennent à bout avant de passer aux ruelles.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "monastiraki-square",
              text: "Rendez-vous à la place de Monastiraki et au marché aux puces, en parcourant les étals d'antiquités et de brocante, et gardez une main sur votre sac dans la cohue. Attrapez un souvláki bon marché à l'un des grills réputés près de la place pour un déjeuner debout.",
              durationMin: 90,
            },
            {
              poiSlug: "anafiotika",
              text: "Remontez par Plaka jusqu'aux ruelles blanchies façon île d'Anafiotika, en grimpant les marches pour les portes bleues et le calme loin du marché. Allez-y lentement et avec respect, des gens vivent derrière ces portes.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "acropolis-rooftop-bar",
              text: "Réservez une table pour le coucher du soleil à un bar en toiture de Monastiraki pour un verre avec l'Acropole illuminée droit devant. Prenez-le comme une tournée pour la vue, puis redescendez dîner à Psyrri ou à Plaka.",
              durationMin: 90,
            },
            {
              text: "Terminez par un dîner de mezze à Psyrri, à quelques minutes à pied de Monastiraki, où la cuisine est moins chère et plus animée que dans la vieille ville. Le rebetiko live se trouve facilement ici lors de toute soirée animée.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "athens",
      days: 3,
      summary:
        "Oui, trois jours sont la bonne durée pour Athènes, et c'est ce que nous recommandons pour une première visite. Cela donne à l'Acropole et son musée une matinée et une après-midi entières et tranquilles, à l'agora antique et aux ruelles de la vieille ville leur propre journée avec un coucher de soleil en toiture, et un troisième jour pour le Musée national archéologique de rang mondial, plus une montée au Lycabette et le côté plus chic de Kolonaki. Vous mangez dans trois quartiers différents, casez à la fois une taverne à Plaka et une soirée mezze à Psyrri, et bougez encore à un rythme qui permet de s'asseoir sur une place plutôt que de la traverser au pas de course. Ce qui reste coupé, c'est une excursion hors de la ville, ce qu'ajoute justement un quatrième jour. Cela convient aux primo-visiteurs, aux couples et à quiconque coupe un trajet vers les îles. Logez à Koukaki : on y marche jusqu'au versant sud de l'Acropole et au musée, on est sur le métro pour le reste de la ville, et ses tavernes de quartier battent les pièges à touristes de la vieille ville. Réservez à l'avance le billet horaire de l'Acropole et prenez le créneau de 8h avant de partir.",
      stayNeighborhoodSlug: "koukaki",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "L'Acropole, son musée et Filopappou",
          morning: [
            {
              poiSlug: "acropolis",
              text: "Soyez à l'Acropole pour votre créneau réservé de 8h, en empruntant la porte plus calme du versant sud près de votre base à Koukaki, et atteignez le Parthénon avant que la chaleur ne monte. Faites le tour de l'Érechthéion et des Propylées, puis descendez par le rocher de l'Aréopage pour un panorama gratuit sur la ville.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Déjeunez sur la promenade Dionysiou Areopagitou ou de retour à Koukaki, à l'abri du soleil de midi, avant l'après-midi à l'intérieur. C'est la pause autour de laquelle la journée est bâtie.",
              durationMin: 75,
            },
            {
              poiSlug: "acropolis-museum",
              text: "Passez l'après-midi chaud dans le frais musée de l'Acropole, en commençant par la galerie du Parthénon au dernier étage dont les parois de verre encadrent le temple que vous venez d'arpenter. Attardez-vous sur les cariatides et le sol de verre au-dessus de la fouille antique.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "filopappou-hill",
              text: "Montez la colline de Filopappou couverte de pins pour le coucher du soleil, la meilleure vue frontale de l'Acropole illuminée, gratuite et ouverte à toute heure. Portez de vraies chaussures pour les chemins de marbre polis, puis redescendez dîner à Koukaki.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "L'agora antique, la vieille ville et un coucher de soleil en toiture",
          morning: [
            {
              poiSlug: "ancient-agora",
              text: "Commencez à l'agora antique avec votre billet combiné, devant les foules qui descendent du rocher, et grimpez au temple d'Héphaïstos intact. Rafraîchissez-vous dans la stoa d'Attale reconstruite et son petit musée.",
              durationMin: 90,
            },
            {
              poiSlug: "roman-agora",
              text: "Coupez jusqu'à l'agora romaine et la tour des Vents octogonale, la station météo antique sculptée, avec le même billet. Vingt minutes en viennent à bout avant de vous glisser dans les ruelles de Plaka.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "plaka",
              text: "Flânez dans Plaka et grimpez jusqu'aux marches blanchies d'Anafiotika, en vous arrêtant pour un déjeuner lent sur une ruelle haute tranquille à l'écart de l'artère à souvenirs. C'est l'après-midi pour dériver plutôt que cocher des choses.",
              durationMin: 120,
            },
            {
              poiSlug: "monastiraki-square",
              text: "Descendez à la place de Monastiraki et à son marché aux puces, en parcourant les étals et en surveillant votre sac dans la foule. Calez-vous pour être près des toits quand la lumière commence à baisser.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "acropolis-rooftop-bar",
              text: "Prenez votre table réservée pour le coucher du soleil à un toit de Monastiraki pour un verre avec l'Acropole illuminée devant. Une tournée pour la vue, puis descente au dîner.",
              durationMin: 90,
            },
            {
              text: "Dîner à Psyrri, à une courte marche, pour les mezze, le rebetiko live et la soirée la plus vivante et au meilleur rapport qualité-prix du centre. Réservez une table le week-end, les bonnes adresses se remplissent vite.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Le Musée national archéologique, le Lycabette et Kolonaki",
          morning: [
            {
              poiSlug: "national-archaeological-museum",
              text: "Allez tôt au Musée national archéologique, la plus belle collection d'art grec antique qui soit, à 15 minutes à pied ou à un saut de métro au nord du centre. Filez droit vers le masque d'or d'Agamemnon, le grand bronze de Zeus ou Poséidon et la machine d'Anticythère, puis flânez à votre guise.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "panathenaic-stadium",
              text: "Traversez la ville jusqu'au stade panathénaïque tout en marbre, berceau des premiers Jeux olympiques modernes, où le billet vous laisse courir un tour et monter sur le podium. Associez-le à une promenade dans le Jardin national ombragé juste à côté.",
              durationMin: 90,
            },
            {
              text: "Remontez vers le chic Kolonaki pour un café et du lèche-vitrine parmi les galeries et les boutiques, ou les musées d'Art cycladique ou Benaki s'il vous reste de l'appétit. Installez-vous près du funiculaire du Lycabette pour la montée à venir.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "lycabettus-hill",
              text: "Prenez le funiculaire jusqu'à la colline du Lycabette pour le coucher du soleil, le point de vue le plus haut de la ville, avec l'Acropole, l'étalement urbain et la mer en contrebas. Arrivez 30 minutes avant le coucher pour une place à la rambarde et emportez une couche contre le vent.",
              durationMin: 90,
            },
            {
              text: "Redescendez pour un dîner d'adieu à Kolonaki ou de retour à Koukaki, en dépensant un peu plus pour votre dernier repas athénien. Poisson grillé, une farandole de mezze et une carafe de vin local, c'est l'envoi classique.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "athens",
      days: 4,
      summary:
        "Quatre jours sont le juste équilibre pour Athènes, transformant une course aux sites en vraies vacances avec une journée pour quitter la ville. Les jours un à trois couvrent l'essentiel sans se presser : l'Acropole et son musée, l'agora antique avec les ruelles de la vieille ville et un coucher de soleil en toiture, et le Musée national archéologique associé à une montée au Lycabette. Le quatrième jour est la soupape, une sortie vers la mer, soit le temple de Poséidon au cap Sounion pour un coucher de soleil au sommet d'une falaise sur l'Égée, soit un ferry rapide depuis le Pirée jusqu'à l'île d'Égine ou d'Hydra pour une baignade, un déjeuner au port et un rythme plus lent. Cette durée convient aux voyageurs qui détestent la marche forcée, aux couples et à quiconque veut la journée classique îles-et-mer grecque sans laisser Athènes derrière soi. Pour quatre jours, nous recommandons de loger à Monastiraki : c'est le nœud de transport pour l'aéroport, le port et l'excursion, et ses toits et sa vie de rue font du retour chaque soir une partie du plaisir. Réservez le billet horaire de l'Acropole bien à l'avance et prenez un créneau matinal.",
      stayNeighborhoodSlug: "monastiraki",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "L'Acropole et son musée",
          morning: [
            {
              poiSlug: "acropolis",
              text: "Soyez à l'Acropole pour votre créneau réservé de 8h, en entrant par la porte plus calme du versant sud, et atteignez le Parthénon avant la chaleur et les foules. Faites le tour de l'Érechthéion et des Propylées, puis appréciez la vue gratuite sur la ville depuis le rocher de l'Aréopage en descendant.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Déjeunez sur la promenade Dionysiou Areopagitou sous le versant sud, à une marche de plain-pied du musée, et sortez du soleil de midi. Restez léger avant l'après-midi à l'intérieur.",
              durationMin: 75,
            },
            {
              poiSlug: "acropolis-museum",
              text: "Passez l'après-midi chaud dans le frais musée de l'Acropole, en commençant par la galerie du Parthénon au dernier étage qui encadre le vrai temple de l'autre côté de la vallée. Le sol de verre au-dessus de la fouille antique, à l'entrée, récompense un regard lent.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "acropolis-rooftop-bar",
              text: "Prenez une table réservée pour le coucher du soleil sur un toit de Monastiraki près de votre base pour un verre avec l'Acropole illuminée devant. Une tournée pour la vue, puis dîner à proximité.",
              durationMin: 90,
            },
            {
              text: "Dîner à Psyrri, à quelques minutes de votre base de Monastiraki, pour les mezze et la soirée la plus vivante du centre. Prenez vos aises dans le quartier que vous appelez maison.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "L'agora antique, l'agora romaine et la vieille ville",
          morning: [
            {
              poiSlug: "ancient-agora",
              text: "Commencez à l'agora antique avec votre billet combiné, avant que les foules de l'Acropole ne descendent, et grimpez au temple d'Héphaïstos intact. Rafraîchissez-vous dans la stoa d'Attale et son musée des objets du quotidien.",
              durationMin: 90,
            },
            {
              poiSlug: "roman-agora",
              text: "Marchez jusqu'à l'agora romaine et sa tour des Vents octogonale, la station météo antique en marbre sculptée de dieux des vents, avec le même billet. Vingt minutes ici avant les ruelles.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "plaka",
              text: "Flânez dans Plaka à un rythme lent, en grimpant jusqu'aux marches façon île d'Anafiotika au-dessus de l'artère à souvenirs. Arrêtez-vous pour un long déjeuner sur une ruelle haute tranquille.",
              durationMin: 120,
            },
            {
              poiSlug: "temple-olympian-zeus",
              text: "Marchez jusqu'au temple de Zeus olympien et à l'arc d'Hadrien avec votre billet combiné, où les colonnes géantes subsistantes rougeoient dans la lumière de l'après-midi. L'affluence y est faible à toute heure.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "monastiraki-square",
              text: "Dérivez de retour par la place de Monastiraki le soir, en parcourant les étals et en vous imprégnant de l'ambiance. Attrapez un souvláki bon marché à un grill réputé près de la place si vous voulez une bouchée décontractée.",
              durationMin: 60,
            },
            {
              text: "Dîner de retour à Psyrri ou à Plaka, en réservant à l'avance toute adresse qui a un nom. Le rebetiko live se trouve facilement à Psyrri lors d'une soirée animée.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Le Musée national archéologique et le Lycabette",
          morning: [
            {
              poiSlug: "national-archaeological-museum",
              text: "Allez tôt au Musée national archéologique, la plus grande collection d'art grec antique au monde, à une courte marche ou un saut de métro au nord. Filez d'abord vers le masque d'Agamemnon, le grand bronze de Zeus ou Poséidon et la machine d'Anticythère, puis flânez.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "panathenaic-stadium",
              text: "Traversez la ville jusqu'au stade panathénaïque tout en marbre, berceau des premiers Jeux olympiques modernes, et courez un tour ou montez sur le podium avec votre billet. Associez-le au Jardin national ombragé juste à côté.",
              durationMin: 90,
            },
            {
              text: "Remontez vers Kolonaki pour un café et des boutiques, ou les musées d'Art cycladique ou Benaki s'il vous reste de l'appétit. Positionnez-vous près du funiculaire du Lycabette pour la montée du coucher de soleil.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "lycabettus-hill",
              text: "Prenez le funiculaire jusqu'à la colline du Lycabette pour le coucher du soleil, le point de vue le plus haut de la ville, avec l'Acropole et la mer déployées en contrebas. Arrivez 30 minutes en avance pour une place à la rambarde et emportez une couche contre le vent.",
              durationMin: 90,
            },
            {
              text: "Dîner à Kolonaki ou de retour près de Monastiraki, là où vos jambes atterrissent. Gardez un peu d'énergie, demain vous quittez la ville pour la mer.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Journée en mer : cap Sounion ou saut d'île",
          morning: [
            {
              text: "Sortez de la ville pour la journée vers la mer. Soit prenez le bus côtier ou une excursion jusqu'au temple de Poséidon au cap Sounion, une ruine au sommet d'une falaise au-dessus de l'Égée à environ 70 km au sud, calée sur le célèbre coucher de soleil. Soit attrapez un ferry rapide depuis le Pirée jusqu'à Égine, un saut facile de 40 minutes, pour des vergers de pistachiers, un front de port et une baignade.",
              durationMin: 240,
            },
          ],
          afternoon: [
            {
              text: "Si vous avez choisi une île, passez l'après-midi à Égine ou poussez jusqu'à la plus jolie Hydra, où les voitures sont interdites et où les ânes travaillent encore les ruelles de pierre, avec un long déjeuner en taverne du port et une baignade au large des rochers. Si vous avez choisi Sounion, coupez la route côtière sur l'une des plages de la Riviera athénienne pour une baignade avant le temple.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              text: "Pour Sounion, soyez au temple de Poséidon pour le coucher du soleil, quand les colonnes de marbre attrapent la dernière lumière sur la mer, puis rentrez en ville. Pour les îles, prenez un ferry en début de soirée de retour au Pirée et le métro jusqu'au centre.",
              durationMin: 120,
            },
            {
              text: "Dîner d'adieu de retour près de Monastiraki, à une courte marche de votre lit sans trajet à planifier, ce qui est tout l'intérêt de loger ici. Faites classique sur le poisson grillé et les mezze pour la dernière soirée athénienne.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
  ],
};

export default athensFr;
