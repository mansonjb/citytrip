import type { CityData } from "../types";

const warsawFr: CityData = {
  city: {
    slug: "warsaw",
    name: "Varsovie",
    country: "Pologne",
    countrySlug: "poland",
    lat: 52.2297,
    lng: 21.0122,
    tier: 2,
    idealDays: 2,
    durations: [2, 3],
    airportCode: "WAW",
    airportToCenter:
      "L'aéroport Frédéric-Chopin se trouve à environ 8 km au sud du centre, ce qui rend les transferts rapides et bon marché. Les trains S2 et S3 comme le bus urbain 175 relient le terminal au centre et à la vieille ville en 20 à 25 minutes environ pour à peu près 5 PLN sur un billet ZTM à l'unité, qui couvre tout le réseau ZTM pour ce trajet. Un Uber ou un taxi revient à peu près à 40 ou 60 PLN pour un temps comparable en dehors des heures de pointe. Notez que l'aéroport low-cost de Modlin, utilisé par certaines compagnies économiques, est à environ 40 km au nord de la ville et se rejoint par une navette dédiée : prévoyez du temps en plus si vous atterrissez là.",
    centerWalkable: true,
    bestMonths: [5, 6, 7, 9],
    avoidMonths: [1],
    monthlyNotes: {
      1: "Le mois le plus froid, avec des maximales proches de 1C, des minimales bien en dessous de zéro et des journées grises et courtes qui apportent souvent la neige. Les sites sont calmes et les tarifs d'hôtel touchent leur plancher annuel, tandis que les bars à lait et les caves à ambiance prennent le relais quand il fait trop froid pour traîner dehors ; prévoyez un vrai équipement d'hiver.",
      2: "Toujours en plein hiver, autour de 2C, avec gel et neige fréquents : c'est donc une période bon marché et sans foule pour les musées couverts et le Palais de la culture. Les journées s'allongent un peu et les bars à vodka de Praga font de belles soirées au chaud ; attendez-vous aux prix les plus bas de l'année.",
      3: "Les maximales grimpent vers 7C et la ville commence à dégeler, même si neige tardive et coups de froid restent possibles. La fréquentation demeure faible et les tarifs se tiennent sous le pic du printemps : une bonne fenêtre côté rapport qualité-prix si vous vous habillez pour un temps changeant.",
      4: "Un vrai printemps autour de 14C, avec les floraisons du parc Lazienki et les premières terrasses de café le long de Nowy Swiat. Les week-ends autour de Pâques deviennent chargés, alors réservez à l'avance un créneau pour POLIN ou le musée de l'Insurrection ; les concerts Chopin gratuits de Lazienki n'ont pas encore commencé.",
      5: "L'un des meilleurs mois : maximales proches de 20C et longues soirées lumineuses, et les concerts de piano Chopin gratuits reprennent près de son monument, au parc Lazienki, les dimanches après-midi jusqu'à la fin septembre. C'est le pic de l'aile de saison : les prix se raffermissent et les boulevards de la Vistule se remplissent le soir.",
      6: "Doux, autour de 23C, avec les plus longues journées de l'année et des terrasses animées à Powisle comme à Praga. Les concerts Chopin du dimanche continuent à Lazienki et les berges s'animent à la nuit tombée ; réservez tôt les chambres du week-end, car la ville tourne à plein régime.",
      7: "Plein été, maximales autour de 24C et soirées douces, même si des orages continentaux traversent certains après-midi. Les concerts Chopin se tiennent chaque dimanche à Lazienki, les bars de plage de la Vistule sont bondés, et c'est la période la plus fréquentée et la plus chère : faites donc les sites en plein air tôt.",
      8: "Même chaleur estivale près de 24C, mais l'ambiance change le 1er août, quand les sirènes d'alerte retentissent dans toute la ville à 17h pour l'anniversaire de l'insurrection de Varsovie et que chacun s'arrête dans la rue une minute. C'est un moment émouvant et grave qui mérite d'être vécu ; le reste du mois demeure chaud, vivant et fréquenté.",
      9: "Maximales autour de 19C, foule qui s'éclaircit après la première semaine et temps agréable pour marcher, ce qui en fait l'alternative maligne à l'été. Les derniers concerts Chopin gratuits jouent à Lazienki à la mi-mois et la lumière se dore au-dessus du fleuve ; les prix se détendent.",
      10: "Automne vif autour de 13C, avec de fortes couleurs à Lazienki et le long de l'escarpement de la Vistule. Le nombre de visiteurs chute nettement après la mi-mois et les tarifs d'hôtel suivent ; emportez une couche chaude pour les soirées, qui deviennent vite froides une fois le soleil couché.",
      11: "Gris, froid et calme autour de 6C, avec des journées courtes et les premières gelées, jusqu'à ce que le marché de Noël et les illuminations de la vieille ville s'installent la dernière semaine et remontent le moral général. La fin novembre est un bon compromis pour les stands du marché et le vin chaud, sans la densité des week-ends de décembre.",
      12: "Le marché de Noël de la vieille ville se tient tout le mois autour du château royal et de la place du marché, avec des guirlandes tendues sur les façades médiévales, du vin chaud et une cuisine généreuse, et il draine de fortes foules le week-end. Attendez-vous à des minimales sous zéro et à de possibles chutes de neige, et à des tarifs de décembre au-dessus de la norme hivernale : réservez tôt.",
    },
    climate: {
      1: { highC: 1, lowC: -4, rainyDays: 9 },
      2: { highC: 2, lowC: -4, rainyDays: 8 },
      3: { highC: 7, lowC: -1, rainyDays: 9 },
      4: { highC: 14, lowC: 3, rainyDays: 8 },
      5: { highC: 20, lowC: 8, rainyDays: 10 },
      6: { highC: 23, lowC: 11, rainyDays: 11 },
      7: { highC: 24, lowC: 13, rainyDays: 11 },
      8: { highC: 24, lowC: 13, rainyDays: 10 },
      9: { highC: 19, lowC: 9, rainyDays: 9 },
      10: { highC: 13, lowC: 4, rainyDays: 9 },
      11: { highC: 6, lowC: 1, rainyDays: 10 },
      12: { highC: 2, lowC: -2, rainyDays: 10 },
    },
    budgetLevel: "mid",
    budgetPerDay: { budget: 55, mid: 110, high: 220 },
    tagline:
      "Une capitale rebâtie sur les décombres, où une vieille ville de conte côtoie des tours staliniennes et des gratte-ciel de verre.",
    heroIntro:
      "La vieille ville de Varsovie a des airs médiévaux, mais elle a été reconstruite brique par brique après que la guerre l'eut rasée, si fidèlement qu'elle est aujourd'hui classée à l'UNESCO. Toute la ville raconte une histoire de destruction et de reconstruction obstinée, dite avec force aux superbes musées de l'Insurrection de Varsovie et POLIN, et elle récompense les voyageurs qui préfèrent la substance à la jolie carte postale. Autour du cœur historique, vous trouverez des berges verdoyantes, le parc Chopin et ses concerts gratuits d'été, et la cuisine copieuse et bon marché des bars à lait. Plus étendue et plus moderne que Cracovie, elle a une vraie profondeur, et deux ou trois jours suffisent à la ressentir.",
    accent: { from: "#C0433A", to: "#3E5673", ink: "#2A1616" },
    neighborhoodSlugs: [
      "old-town-stare-miasto",
      "srodmiescie-centrum",
      "praga",
      "powisle",
      "nowy-swiat-krakowskie",
    ],
    nearbyCitySlugs: ["krakow"],
  },

  neighborhoods: [
    {
      slug: "old-town-stare-miasto",
      citySlug: "warsaw",
      name: "Vieille ville (Stare Miasto)",
      lat: 52.2497,
      lng: 21.0122,
      bestFor: ["first-time", "romantic"],
      vibe: "La vieille ville reconstruite, classée à l'UNESCO, rassemble des maisons de marchands pastel autour de la place du marché et du château royal, le tout relevé des décombres après la guerre et convaincant de médiéval quand on s'y promène. C'est la partie la plus atmosphérique de la ville et la base évidente pour une première visite, même si elle attire les groupes en journée et retombe dans le calme une fois les restaurants fermés. Logez ici pour le décor de carte postale et la courte marche jusqu'à la Voie royale.",
      pros: [
        "Tous les sites phares de la vieille ville, la place du marché, le château royal et la Barbacane, à votre porte",
        "Des soirées vraiment atmosphériques une fois la foule du jour éclaircie et les façades illuminées",
        "Courte marche par Krakowskie Przedmiescie jusqu'au centre et à Nowy Swiat",
      ],
      cons: [
        "Les restaurants les plus chers pour touristes de la ville cernent la place du marché",
        "Calme et un peu mort tard le soir, avec peu d'habitants sur place",
        "Pavés et marches rendent l'endroit malcommode avec des valises à roulettes",
      ],
    },
    {
      slug: "srodmiescie-centrum",
      citySlug: "warsaw",
      name: "Srodmiescie (Centrum)",
      lat: 52.2319,
      lng: 21.0067,
      bestFor: ["first-time", "family"],
      vibe: "Le centre moderne s'étale autour du Palais de la culture et de la science, de Nowy Swiat et des gratte-ciel de verre, et c'est la base la plus pratique et la mieux desservie de la ville. Les deux lignes de métro et la plupart des tramways s'y croisent, les hôtels couvrent toute la gamme de prix, et tout est à un trajet de tram ou à pied. Choisissez-le pour la commodité et le bon rapport qualité-prix plutôt que pour le charme de la vieille ville.",
      pros: [
        "Les meilleures liaisons de transport de la ville, avec les deux lignes de métro et la gare centrale tout près",
        "Une gamme complète d'hôtels à tous les prix, plus commerces, cinémas et restaurants",
        "Central pour rejoindre aussi bien la vieille ville que Lazienki et Praga",
      ],
      cons: [
        "Animé, chargé de circulation et pauvre en atmosphère d'autrefois",
        "Le secteur juste au pied du Palais de la culture paraît corporate et peut être mort le soir",
        "Moins de caractère que la vieille ville ou les quartiers du bord de l'eau",
      ],
    },
    {
      slug: "praga",
      citySlug: "warsaw",
      name: "Praga",
      lat: 52.2528,
      lng: 21.0361,
      bestFor: ["nightlife", "local"],
      vibe: "La rive est, brute et artiste, de l'autre côté de la Vistule, a largement survécu intacte à la guerre : ses immeubles de brique sont donc la vraie Varsovie d'avant-guerre, aujourd'hui livrée aux ateliers, aux bars et aux galeries. La rue Zabkowska, le musée du Néon et la distillerie de vodka Koneser ancrent une scène créative et un brin rebelle qui attire les habitants plus que les touristes. Basez-vous ici pour la vie nocturne et le caractère plutôt que pour la proximité des sites.",
      pros: [
        "La vie nocturne la plus créative de la ville, des bars de la rue Zabkowska à la cour de Koneser",
        "De la vraie architecture d'avant-guerre qui a échappé aux destructions",
        "Le musée du Néon et une scène soutenue de galeries et d'ateliers",
      ],
      cons: [
        "Plus rugueux par endroits, à parcourir avec le bon sens urbain habituel la nuit",
        "Une traversée du fleuve depuis la vieille ville et les grands sites",
        "Moins d'hôtels classiques, plus d'appartements et d'auberges",
      ],
    },
    {
      slug: "powisle",
      citySlug: "warsaw",
      name: "Powisle",
      lat: 52.2411,
      lng: 21.0289,
      bestFor: ["local", "budget"],
      vibe: "Le quartier branché du bord de l'eau se niche sous l'escarpement, entre le centre et la Vistule, et il est devenu la jeune Varsovie des bars étudiants, des cafés et des berges réaménagées. Le Centre des sciences Copernic et les jardins de la bibliothèque universitaire sont ici, et toute la bande s'anime les soirs de beau temps. Basez-vous ici pour un séjour local et de bon rapport qualité-prix, à distance de marche de l'eau et du centre.",
      pros: [
        "Les boulevards de la Vistule et les bars de plage sont à une courte descente à pied",
        "Des bars et cafés détendus, aux prix étudiants plutôt que touristiques",
        "Accessible à pied à Nowy Swiat, au centre et au Centre des sciences Copernic",
      ],
      cons: [
        "L'escarpement impose une montée à pied pour remonter au centre et à la vieille ville",
        "Moins de grands sites dans les rues immédiates",
        "Offre hôtelière plus réduite, surtout des pensions et des appartements",
      ],
    },
    {
      slug: "nowy-swiat-krakowskie",
      citySlug: "warsaw",
      name: "Nowy Swiat et Krakowskie Przedmiescie",
      lat: 52.2385,
      lng: 21.0175,
      bestFor: ["romantic", "first-time"],
      vibe: "Le boulevard de la Voie royale court de la vieille ville jusqu'à Krakowskie Przedmiescie et Nowy Swiat, bordé de palais, d'églises, de l'université et des plus grands cafés de la ville. C'est l'épine dorsale élégante de Varsovie, arpentable d'un bout à l'autre, qui vous place entre la vieille ville et le centre, le sentier des bancs Chopin sous les pieds. Basez-vous ici pour un séjour central et romantique, avec la vie de café à votre porte.",
      pros: [
        "La plus belle rue de la ville, avec ses palais, ses cafés et l'université",
        "À mi-chemin entre la vieille ville et le centre, accessible à pied aux deux",
        "Les bancs musicaux Chopin et les sites de la Voie royale le long de la promenade",
      ],
      cons: [
        "Bordé de cafés et recherché, si bien que les tarifs de chambre dépassent la moyenne de la ville",
        "Fréquenté par les passants et les événements, surtout les week-ends d'été",
        "Une partie du boulevard ferme à la circulation, ce qui peut compliquer les déposes en taxi",
      ],
    },
  ],

  pois: [
    {
      slug: "old-town-market-square",
      citySlug: "warsaw",
      name: "La place du marché de la vieille ville et la statue de la Sirène",
      lat: 52.2497,
      lng: 21.0122,
      kind: "sight",
      needsBooking: false,
      tip: "La place et sa Syrenka de bronze, la sirène à l'épée et au bouclier emblème de Varsovie, sont gratuites et accessibles à toute heure, mais venez avant 10h ou après 20h pour photographier les façades reconstruites sans la foule du jour. Rappelez-vous que toute la place a été relevée des décombres après 1945 : lisez les vieilles photos d'avant-guerre affichées à proximité pour saisir ce qui a été rebâti, et fuyez les restaurants côté place, les plus chers de la ville.",
    },
    {
      slug: "royal-castle-castle-square",
      citySlug: "warsaw",
      name: "Le château royal et la place du Château",
      lat: 52.2478,
      lng: 21.0136,
      kind: "sight",
      needsBooking: false,
      tip: "Le château royal reconstruit abrite des salles d'apparat restaurées et deux Rembrandt, et l'entrée du parcours principal est gratuite un jour par semaine, en général en semaine : vérifiez donc le site du château avant de venir et attendez-vous à une file ce jour-là. La colonne de Sigismond, sur la place du Château, en face, est le plus ancien monument profane de la ville et le point de rendez-vous classique ; comptez environ une heure et demie pour l'intérieur.",
    },
    {
      slug: "barbican-city-walls",
      citySlug: "warsaw",
      name: "La Barbacane et les remparts médiévaux",
      lat: 52.2508,
      lng: 21.0106,
      kind: "sight",
      needsBooking: false,
      tip: "La Barbacane de brique rouge et la portion voisine de remparts médiévaux reconstruits se traversent gratuitement et relient la vieille ville à la ville neuve en deux minutes. Passez en été, quand musiciens de rue et artisans s'installent le long des murs, et suivez les remparts pour l'approche la plus calme et la plus jolie vers la place du marché, par le nord.",
    },
    {
      slug: "krakowskie-przedmiescie-royal-route",
      citySlug: "warsaw",
      name: "Krakowskie Przedmiescie et la Voie royale",
      lat: 52.2411,
      lng: 21.0150,
      kind: "experience",
      needsBooking: false,
      tip: "Ce grand boulevard, de la place du Château jusqu'à Nowy Swiat, se parcourt gratuitement et se borde de palais, d'églises et de l'université, et une partie ferme à la circulation le week-end, ce qui le rend agréable à pied. Repérez les bancs Chopin noirs le long du parcours, qui jouent trente secondes de sa musique d'une pression sur un bouton, et entrez dans l'église de la Sainte-Croix pour voir le pilier qui abrite le cœur du compositeur.",
    },
    {
      slug: "palace-of-culture-science",
      citySlug: "warsaw",
      name: "Le Palais de la culture et de la science",
      lat: 52.2318,
      lng: 21.0060,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Achetez un billet pour la terrasse panoramique du 30e étage, ouverte tous les jours, qui offre la plus large vue sur toute la ville, et montez près du coucher du soleil pour la plus belle lumière. Cette tour des années 1950 fut un cadeau de Staline que les Polonais regardent encore avec ambivalence, et les habitants plaisantent en disant qu'elle a la meilleure vue précisément parce que c'est le seul endroit d'où l'on ne voit pas le palais lui-même ; les files s'allongent en été, alors venez tôt ou tard.",
    },
    {
      slug: "lazienki-park",
      citySlug: "warsaw",
      name: "Le parc Lazienki et le palais sur l'Île",
      lat: 52.2149,
      lng: 21.0355,
      kind: "park",
      needsBooking: false,
      tip: "C'est le plus grand parc de la ville, gratuit, avec ses paons, le palais sur l'Île et l'immense monument à Chopin, et les dimanches après-midi de la mi-mai à la fin septembre, des concerts de piano gratuits en plein air se donnent près de la statue à midi et 16h. Apportez une couverture et arrivez tôt pour une place près du monument, et associez la visite aux intérieurs du palais, dont l'entrée se paie à part.",
    },
    {
      slug: "wilanow-palace",
      citySlug: "warsaw",
      name: "Le palais de Wilanow",
      lat: 52.1650,
      lng: 21.0905,
      kind: "sight",
      needsBooking: false,
      tip: "Souvent surnommée le Versailles polonais, cette résidence royale baroque aux jardins à la française se trouve à environ 10 km au sud du centre et se rejoint par le bus 116 ou 180 en 40 minutes environ : prévoyez une demi-journée. L'entrée des salles du palais est gratuite un jour par semaine, en général le jeudi, et les jardins réclament un petit supplément à part ; venez le matin pour devancer les cars et voir la roseraie en été.",
    },
    {
      slug: "polin-museum",
      citySlug: "warsaw",
      name: "Le musée POLIN de l'histoire des Juifs polonais",
      lat: 52.2495,
      lng: 20.9930,
      kind: "museum",
      needsBooking: true,
      tip: "Réservez un billet horodaté en ligne, car l'exposition principale, qui couvre mille ans de vie juive en Pologne, est populaire et les créneaux se remplissent le week-end. Le bâtiment se dresse sur le sol de l'ancien ghetto de guerre, face au monument des Héros du ghetto, et l'exposition permanente est gratuite un jour par semaine, en général le jeudi ; comptez au moins deux à trois heures à l'intérieur.",
    },
    {
      slug: "warsaw-rising-museum",
      citySlug: "warsaw",
      name: "Le musée de l'Insurrection de Varsovie",
      lat: 52.2325,
      lng: 20.9810,
      kind: "museum",
      needsBooking: true,
      tip: "Ce musée immersif sur l'insurrection de 1944 contre l'occupation nazie est incontournable et très fréquenté : réservez donc un billet horodaté en ligne et arrivez à l'ouverture ; il est gratuit le lundi, jour aussi le plus chargé. Comptez-y au moins deux heures, ne manquez ni le film en 3D de la ville détruite ni la réplique d'égout que vous traversez à quatre pattes, et notez qu'il est à dix minutes à pied ou à un court trajet de tram à l'ouest du centre.",
    },
    {
      slug: "praga-neon-koneser",
      citySlug: "warsaw",
      name: "Praga : le musée du Néon et Koneser",
      lat: 52.2533,
      lng: 21.0430,
      kind: "experience",
      needsBooking: false,
      tip: "Traversez la Vistule vers Praga pour le musée du Néon, qui rassemble des enseignes lumineuses de la guerre froide dans une ancienne usine et ouvre tous les jours pour un petit billet, et le complexe Koneser, une distillerie de vodka en brique rouge muée en cour de bars, de boutiques et du musée de la Vodka polonaise. Venez en fin d'après-midi jusqu'au soir, quand les bars de la rue Zabkowska se remplissent, et traitez cela comme une demi-journée loin du centre touristique.",
    },
    {
      slug: "vistula-copernicus-centre",
      citySlug: "warsaw",
      name: "Les boulevards de la Vistule et le Centre des sciences Copernic",
      lat: 52.2415,
      lng: 21.0287,
      kind: "experience",
      needsBooking: true,
      tip: "Les berges réaménagées sous Powisle sont gratuites et à leur meilleur le soir, quand bars de plage et stands de nourriture bordent l'eau et que la fontaine multimédia joue ses spectacles de lumière les nuits de week-end d'été. À côté, le Centre des sciences Copernic est un musée interactif excellent pour les familles mais qui affiche complet : réservez donc un billet horodaté en ligne à l'avance et prévoyez deux bonnes heures à l'intérieur.",
    },
    {
      slug: "milk-bar-bar-mleczny",
      citySlug: "warsaw",
      name: "Un bar à lait (Bar Mleczny)",
      lat: 52.2360,
      lng: 21.0170,
      kind: "food",
      needsBooking: false,
      tip: "Ces cantines sans chichi de l'époque communiste servent encore pierogi, soupes et escalopes pour quelques euros, et une assiette complète dépasse rarement 25 PLN, ce qui en fait le vrai repas le moins cher de la ville. Le Bar Prasowy, sur Marszalkowska, est un survivant réputé ; commandez au comptoir, attendez-vous à un menu uniquement en polonais et à un service qui apprécie le liquide, et allez-y à l'heure du déjeuner, quand la cuisine est la plus fraîche et le service le plus rapide.",
    },
    {
      slug: "zelazowa-wola-daytrip",
      citySlug: "warsaw",
      name: "Excursion à Zelazowa Wola ou Palmiry",
      lat: 52.2510,
      lng: 20.4200,
      kind: "experience",
      needsBooking: false,
      tip: "La maison natale de Chopin, à Zelazowa Wola, à environ 50 km à l'ouest, est un manoir avec parc où se donnent des récitals de piano gratuits le dimanche en été, accessible par un bus régional depuis Varsovie en une heure et demie environ. Autre option, Palmiry, dans la forêt de Kampinos au nord de la ville, est le lieu et le cimetière d'exécutions de masse de la guerre, une demi-journée sobre et émouvante ; les deux offrent des échappées calmes hors de la capitale, alors vérifiez les horaires des bus de retour avant de partir.",
    },
  ],

  itineraries: [
    {
      citySlug: "warsaw",
      days: 2,
      summary:
        "Deux jours suffisent pour l'essence de Varsovie si vous planifiez à l'avance les musées à billet. La vieille ville reconstruite est petite et vous pouvez parcourir la place du marché, le château royal, la Barbacane et la Sirène en deux heures, si bien que le temps se joue vraiment sur les musées et le vaste centre moderne. Réservez en ligne un créneau horodaté pour le musée de l'Insurrection de Varsovie et POLIN, car les deux sont incontournables, immersifs et fréquentés, et accordez au moins deux heures à chacun. Basez-vous dans la vieille ville ou sur la Voie royale pour marcher l'épine historique, puis servez-vous des tramways et des deux lignes de métro pour le reste. Le premier jour prend la vieille ville, la Voie royale et la terrasse panoramique du Palais de la culture ; le second est consacré à la lourde et enrichissante histoire du musée de l'Insurrection et de POLIN, puis au parc Lazienki l'après-midi, avec ses concerts Chopin gratuits si vous venez un dimanche d'été. Ce que l'on abandonne à ce rythme, c'est Praga et Wilanow. Pour ceux-là, prenez la version de trois jours.",
      stayNeighborhoodSlug: "old-town-stare-miasto",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "La vieille ville, la Voie royale et la vue sur la ville",
          morning: [
            {
              poiSlug: "old-town-market-square",
              text: "Commencez sur la place du marché de la vieille ville avant l'arrivée des groupes, la Syrenka de bronze et les façades pastel reconstruites rien que pour vous. Lisez les photos d'avant-guerre à proximité pour saisir que toute la place a été relevée des décombres après 1945.",
              durationMin: 45,
            },
            {
              poiSlug: "royal-castle-castle-square",
              text: "Marchez jusqu'à la place du Château et visitez le château royal reconstruit, avec ses salles d'apparat restaurées et ses deux Rembrandt, en comptant environ une heure et demie. Vérifiez sur le site du château le jour d'entrée gratuite hebdomadaire si vous voulez économiser le billet, et attendez-vous à une file ce jour-là.",
              durationMin: 105,
            },
            {
              poiSlug: "barbican-city-walls",
              text: "Faites une boucle par la Barbacane de brique rouge et le long des remparts médiévaux reconstruits vers la ville neuve, gratuit et l'affaire de quelques minutes. En été, musiciens de rue et artisans bordent les remparts.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "milk-bar-bar-mleczny",
              text: "Faites une pause pour un déjeuner bon marché et copieux dans un bar à lait, où une assiette de pierogi et de soupe dépasse rarement 25 PLN. Commandez au comptoir, attendez-vous à un menu uniquement en polonais, et allez-y à midi, quand la rotation est la plus rapide.",
              durationMin: 60,
            },
            {
              poiSlug: "krakowskie-przedmiescie-royal-route",
              text: "Descendez la Voie royale par Krakowskie Przedmiescie devant les palais, les églises et l'université, en pressant les bancs Chopin noirs pour leurs trente secondes de musique. Entrez dans l'église de la Sainte-Croix pour voir le pilier qui abrite le cœur du compositeur.",
              durationMin: 75,
            },
            {
              poiSlug: "palace-of-culture-science",
              text: "Poursuivez jusqu'au Palais de la culture et de la science et montez à la terrasse panoramique du 30e étage pour la plus large vue sur la ville. Cette tour stalinienne des années 1950 est un cadeau que les Polonais regardent encore avec des sentiments mêlés ; montez près du coucher du soleil pour la plus belle lumière.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              text: "Revenez vers Nowy Swiat pour dîner, en choisissant une rue latérale à l'écart du boulevard principal où les prix baissent, puis remontez la Voie royale illuminée jusqu'à la vieille ville. La place est à son meilleur, éclairée et tranquille, une fois la foule du jour partie.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "L'histoire de la guerre et le parc Chopin",
          morning: [
            {
              poiSlug: "warsaw-rising-museum",
              text: "Prenez votre créneau réservé au musée de l'Insurrection de Varsovie à l'ouverture, avant que la foule ne se forme, et accordez-lui au moins deux heures. Ne manquez ni le film en 3D de la ville détruite ni la réplique d'égout que vous traversez à quatre pattes ; c'est à dix minutes de tram à l'ouest du centre.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "polin-museum",
              text: "Passez à POLIN, le musée de l'histoire des Juifs polonais, sur votre billet horodaté, pour son exposition principale de mille ans sur le sol de l'ancien ghetto. Comptez deux à trois heures et arrêtez-vous au monument des Héros du ghetto, face à l'entrée.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "lazienki-park",
              text: "Terminez au parc Lazienki, le plus grand de la ville, avec ses paons, le palais sur l'Île et l'immense monument à Chopin. Si c'est un dimanche d'été, calez-le sur le concert de piano gratuit en plein air près de la statue à 16h et apportez de quoi vous asseoir.",
              durationMin: 120,
            },
            {
              text: "Achevez la soirée par un dîner de retour vers le centre ou Nowy Swiat, ou, si la soirée est douce, descendez aux boulevards de la Vistule pour un verre au bord de l'eau parmi les bars de plage.",
              durationMin: 105,
            },
          ],
        },
      ],
    },
    {
      citySlug: "warsaw",
      days: 3,
      summary:
        "Trois jours, c'est la durée confortable pour Varsovie, de quoi faire les lourds musées d'histoire de la guerre à un rythme correct plutôt qu'à la suite. La vieille ville est petite et vite parcourue, si bien que le vrai temps va au musée de l'Insurrection de Varsovie et à POLIN, au Palais de la culture et au parc Lazienki, qui réclament à eux seuls une deuxième journée entière. Le troisième jour supplémentaire est ce qui ouvre la ville : traversez la Vistule vers Praga, brute et créative, pour le musée du Néon et la distillerie Koneser, filez au palais baroque de Wilanow, ou laissez simplement aux musées de la guerre l'espace qu'ils méritent. Basez-vous sur la Voie royale ou dans la vieille ville pour le cœur historique, puis appuyez-vous sur les tramways et les deux lignes de métro pour les sites plus lointains. Réservez en ligne des billets horodatés pour le musée de l'Insurrection de Varsovie, POLIN et le Centre des sciences Copernic, car les trois affichent complet en saison. Le premier jour, c'est la vieille ville et la Voie royale ; le deuxième, les musées et Lazienki ; le troisième, Praga, Wilanow et les berges à un rythme détendu.",
      stayNeighborhoodSlug: "nowy-swiat-krakowskie",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "La vieille ville, la Voie royale et la vue sur la ville",
          morning: [
            {
              poiSlug: "old-town-market-square",
              text: "Débutez tôt sur la place du marché de la vieille ville, avec la Syrenka de bronze et les façades reconstruites avant la foule du jour. Lisez les photos d'avant-guerre à proximité pour comprendre que toute la place a été relevée des décombres après 1945.",
              durationMin: 45,
            },
            {
              poiSlug: "royal-castle-castle-square",
              text: "Visitez le château royal reconstruit depuis la place du Château, avec ses salles d'apparat et ses deux Rembrandt, en comptant environ une heure et demie. La colonne de Sigismond, devant, est le plus ancien monument profane de la ville et le point de rendez-vous classique.",
              durationMin: 105,
            },
            {
              poiSlug: "barbican-city-walls",
              text: "Sortez par la Barbacane et longez les remparts médiévaux reconstruits vers la ville neuve, gratuit et rapide, puis revenez vers la place par le nord pour sa plus jolie approche.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "milk-bar-bar-mleczny",
              text: "Déjeunez à bas prix dans un bar à lait, où pierogi, soupe et escalope dépassent rarement 25 PLN. Commandez au comptoir et allez-y à midi, quand la cuisine est la plus fraîche et la file la plus rapide.",
              durationMin: 60,
            },
            {
              poiSlug: "krakowskie-przedmiescie-royal-route",
              text: "Descendez la Voie royale par Krakowskie Przedmiescie devant les palais, les églises et l'université, en pressant les bancs Chopin au passage. Faufilez-vous dans l'église de la Sainte-Croix pour voir le pilier qui abrite le cœur du compositeur.",
              durationMin: 75,
            },
            {
              poiSlug: "palace-of-culture-science",
              text: "Finissez l'après-midi au Palais de la culture et de la science et montez à la terrasse panoramique du 30e étage pour la plus large vue sur la ville. Venez près du coucher du soleil pour la lumière ; la tour stalinienne reste un monument que les Polonais regardent avec des sentiments mêlés.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              text: "Dînez autour de Nowy Swiat, en choisissant une rue latérale où les prix se détendent, puis remontez le boulevard illuminé vers la vieille ville. La place du marché éclairée est la plus calme et la plus belle une fois les visiteurs d'un jour partis.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "L'histoire de la guerre et le parc Chopin",
          morning: [
            {
              poiSlug: "warsaw-rising-museum",
              text: "Prenez votre créneau réservé au musée de l'Insurrection de Varsovie à l'ouverture et accordez-lui au moins deux heures ; il est immersif, incontournable et fréquenté. Voyez le film en 3D de la ville détruite et traversez à quatre pattes la réplique d'égout ; il se trouve à un court trajet de tram à l'ouest du centre.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "polin-museum",
              text: "Passez à POLIN, sur votre billet horodaté, pour son exposition principale de mille ans sur le sol de l'ancien ghetto, en comptant deux à trois heures. Arrêtez-vous au monument des Héros du ghetto, face à l'entrée, avant ou après.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "lazienki-park",
              text: "Passez la fin d'après-midi au parc Lazienki avec ses paons, le palais sur l'Île et le monument à Chopin. Un dimanche d'été, attrapez le concert de piano gratuit en plein air près de la statue à 16h ; apportez une couverture et arrivez tôt pour une place.",
              durationMin: 120,
            },
            {
              text: "Terminez par un dîner de retour vers le centre, ou descendez aux boulevards de la Vistule pour un verre parmi les bars de plage du bord de l'eau si le temps tient.",
              durationMin: 105,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Praga, Wilanow et les berges",
          morning: [
            {
              poiSlug: "wilanow-palace",
              text: "Filez au sud vers le palais de Wilanow, le Versailles polonais baroque et ses jardins à la française, en bus 116 ou 180, en comptant environ 40 minutes dans chaque sens. L'entrée des salles est gratuite un jour par semaine, en général le jeudi ; venez le matin pour devancer les cars.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "praga-neon-koneser",
              text: "Traversez la Vistule vers Praga pour le musée du Néon et ses enseignes lumineuses de la guerre froide, et la cour de la distillerie Koneser, qui abrite bars, boutiques et le musée de la Vodka polonaise. Cette rive est a largement survécu à la guerre, si bien que ses immeubles de brique sont la vraie Varsovie d'avant-guerre.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "vistula-copernicus-centre",
              text: "Revenez sur la rive ouest pour les boulevards de la Vistule sous Powisle, à leur meilleur le soir, quand les bars de plage et les stands de nourriture ouvrent et que la fontaine multimédia joue les nuits de week-end d'été. Les familles peuvent y caser deux heures réservées au Centre des sciences Copernic.",
              durationMin: 120,
            },
            {
              text: "Dernier dîner à Powisle ou sur Nowy Swiat, en restant tranquille. Si vous avez un vol tôt, rappelez-vous que l'aéroport Chopin n'est qu'à 8 km au sud, à 20 ou 25 minutes environ sur le train S2 ou S3 ou le bus 175 pour à peu près 5 PLN.",
              durationMin: 105,
            },
          ],
        },
      ],
    },
  ],
};

export default warsawFr;
