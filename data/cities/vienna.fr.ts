import type { CityData } from "../types";

const viennaFr: CityData = {
  city: {
    slug: "vienna",
    name: "Vienne",
    country: "Autriche",
    countrySlug: "austria",
    lat: 48.2082,
    lng: 16.3738,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "VIE",
    airportToCenter:
      "Le S-Bahn S7 relie l'aéroport à Wien Mitte en 25 minutes environ pour 4,30 EUR, c'est l'option raisonnable la moins chère. Le City Airport Train (CAT) couvre le même trajet sans arrêt en 16 minutes, mais coûte environ 14,90 EUR l'aller simple, si bien que la plupart des visiteurs prennent le S7.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10, 12],
    avoidMonths: [1],
    monthlyNotes: {
      1: "Froid et gris, avec des maximales autour de 3C et les marchés de Noël déjà partis : c'est le mois le plus calme et le moins cher. C'est aussi le coeur de la saison des bals : des dizaines de bals officiels se tiennent en janvier, et la demande hôtelière ne grimpe que ces soirs-là précisément.",
      2: "Toujours proche de zéro, mais la saison des bals viennois culmine avec le Bal de l'Opéra au Staatsoper fin février, la soirée la plus célèbre du calendrier mondain. En dehors des bals, la ville reste calme et les chambres bon marché ; prévoyez de quoi affronter des minimales sous zéro.",
      3: "Les maximales grimpent vers 11C et les jardins des palais rouvrent pour la saison. La foule reste légère et les prix sont sous le pic printanier, ce qui en fait une fenêtre d'intersaison avisée avant l'affluence de Pâques.",
      4: "Le vrai printemps, autour de 15C, avec les jardins de Schonbrunn et le Prater en fleurs et les marchés de Pâques sur la Freyung et à Schonbrunn. Les week-ends se remplissent autour de Pâques, alors réservez à l'avance les billets horodatés du château.",
      5: "L'un des meilleurs mois, à près de 20C, et le festival artistique des Wiener Festwochen ouvre à la mi-mai et se poursuit jusqu'en juin avec théâtre, musique et installations dans toute la ville. Réservez tôt votre hébergement ; les week-ends de mai atteignent les tarifs hauts d'intersaison.",
      6: "Chaud, autour de 24C, avec de longues journées, la fin des Wiener Festwochen et des concerts en plein air, dont le Concert nocturne d'été gratuit des Philharmoniques de Vienne dans les jardins de Schonbrunn. Les guinguettes et l'île du Danube se remplissent ; la foule monte sans atteindre le plein été.",
      7: "Pic de chaleur estivale, près de 26C, le mois le plus touristique, et l'Opéra national de Vienne ferme pour sa pause d'été : vérifiez le programme estival si l'opéra est votre motif de visite. Le festival de films de la Rathausplatz s'installe devant l'hôtel de ville avec des projections gratuites et des stands de nourriture tout le mois.",
      8: "Même chaleur et même affluence qu'en juillet, avec des orages d'après-midi occasionnels et beaucoup d'habitants partis en vacances. Le festival de films de la Rathausplatz continue ; l'île du Danube et les zones de baignade de l'Alte Donau sont les meilleurs endroits pour échapper à la chaleur.",
      9: "Maximales autour de 21C, foule qui s'allège après la première semaine, et début de la saison culturelle avec la réouverture de l'opéra et des salles de concert. Les prix se détendent et la météo reste fiable, ce qui en fait l'alternative avisée à l'été.",
      10: "Journées vives à 14C et fortes couleurs d'automne dans le Prater et les parcs des palais. Le nombre de touristes chute nettement après la mi-mois et les tarifs hôteliers suivent ; la Fête nationale du 26 octobre offre l'entrée gratuite des musées et des démonstrations militaires sur la Heldenplatz.",
      11: "Gris et froid, avec des maximales autour de 7C, la période la plus calme de l'année jusqu'à l'ouverture des marchés de Noël dans la seconde moitié du mois. Fin novembre est un bon compromis : l'ambiance du marché de la Rathausplatz sans la densité des week-ends de décembre.",
      12: "Les marchés de Noël se tiennent de la mi-novembre au 26 décembre, le plus grand sur la Rathausplatz avec des centaines de stands, plus le Belvédère, Schonbrunn, Spittelberg et Am Hof. Attendez-vous à des minimales sous le gel, du Punsch chaud partout, une forte affluence le week-end et des prix hôteliers de décembre bien au-dessus de la norme hivernale.",
    },
    climate: {
      1: { highC: 3, lowC: -2, rainyDays: 8 },
      2: { highC: 5, lowC: -1, rainyDays: 7 },
      3: { highC: 11, lowC: 2, rainyDays: 8 },
      4: { highC: 15, lowC: 6, rainyDays: 8 },
      5: { highC: 20, lowC: 10, rainyDays: 9 },
      6: { highC: 24, lowC: 14, rainyDays: 10 },
      7: { highC: 26, lowC: 16, rainyDays: 9 },
      8: { highC: 26, lowC: 15, rainyDays: 9 },
      9: { highC: 21, lowC: 11, rainyDays: 6 },
      10: { highC: 14, lowC: 7, rainyDays: 7 },
      11: { highC: 7, lowC: 3, rainyDays: 8 },
      12: { highC: 4, lowC: -1, rainyDays: 8 },
    },
    budgetLevel: "mid",
    budgetPerDay: { budget: 70, mid: 140, high: 280 },
    tagline: "Palais impériaux, rituels des cafés, l'or de Klimt.",
    heroIntro:
      "Vienne enferme la cour des Habsbourg, un mur de musées de classe mondiale et une culture des cafés bien vivante dans un centre bouclé par les tramways que vous maîtrisez en une journée. Les sites impériaux sont un peu à l'écart, si bien que l'astuce consiste à regrouper les palais un jour et le ring du centre un autre. Trois jours suffisent pour la Hofburg, Schonbrunn, le Belvédère et le quartier des musées sans se presser, tout en laissant une soirée pour l'opéra debout et un café pris lentement.",
    accent: { from: "#A83E5B", to: "#D9A441", ink: "#5E2438" },
    neighborhoodSlugs: [
      "innere-stadt",
      "leopoldstadt",
      "neubau",
      "mariahilf",
      "landstrasse",
    ],
    nearbyCitySlugs: ["prague", "budapest"],
  },

  neighborhoods: [
    {
      slug: "innere-stadt",
      citySlug: "vienna",
      name: "Innere Stadt (vieille ville)",
      lat: 48.2085,
      lng: 16.3721,
      bestFor: ["first-time", "romantic"],
      vibe: "Le premier arrondissement historique à l'intérieur de la Ringstrasse, bâti autour de la cathédrale Saint-Étienne et du palais de la Hofburg. C'est le coeur impérial, tout en grands boulevards, cours à arcades et cafés classiques, et tout ce qu'un premier visiteur souhaite se trouve à quinze minutes à pied. Il se vide de la foule diurne le soir et devient calme et élégant.",
      pros: [
        "Cathédrale, Hofburg, Opéra national et les grands musées, tout à pied",
        "Toutes les lignes de tram et de métro convergent ici, les excursions démarrent facilement",
        "Aucun transport nécessaire pour un séjour de 2 jours",
      ],
      cons: [
        "L'arrondissement le plus cher de la ville pour l'hôtel et la table",
        "Les restaurants autour de la cathédrale et du Graben sont des pièges à prix touristiques",
        "Vie nocturne authentique limitée ; ça devient calme après le dîner",
      ],
    },
    {
      slug: "leopoldstadt",
      citySlug: "vienna",
      name: "Leopoldstadt",
      lat: 48.2167,
      lng: 16.3925,
      bestFor: ["local", "family", "budget"],
      vibe: "Le deuxième arrondissement de l'autre côté du canal du Danube, abrite le parc du Prater et un mélange en pleine mutation de la vieille Vienne juive, d'épiciers turcs et balkaniques et d'une jeune scène créative. Le Karmelitermarkt ancre une scène gastronomique et de cafés vraiment locale, et l'étendue verte du Prater est sur le pas de la porte. C'est à un arrêt de métro de la vieille ville, mais bien moins cher.",
      pros: [
        "Le parc du Prater, la Grande Roue et de longs chemins au bord du canal pour les familles",
        "Le Karmelitermarkt et le Volkertmarkt pour manger local à prix justes",
        "Lignes de métro U1 et U2 rapides, à un arrêt du centre",
      ],
      cons: [
        "Aucun site majeur dans l'arrondissement hormis le Prater",
        "Certains pâtés de maisons près des stations paraissent quelconques et en transition",
        "Nuits résidentielles tranquilles si vous voulez une vie nocturne au pied de l'hôtel",
      ],
    },
    {
      slug: "neubau",
      citySlug: "vienna",
      name: "Neubau",
      lat: 48.2011,
      lng: 16.3489,
      bestFor: ["local", "nightlife", "romantic"],
      vibe: "Le septième arrondissement derrière le MuseumsQuartier, le coeur du design et du commerce indépendant de Vienne. Les ruelles pavées Biedermeier de Spittelberg abritent tavernes à vin et boutiques, tandis que la Neubaugasse aligne une longue série de concept stores, torréfacteurs et petits bars. On rejoint les grands musées à pied, et pourtant ça ressemble à l'endroit où les créatifs locaux passent réellement leurs soirées.",
      pros: [
        "Le MuseumsQuartier et le Kunsthistorisches Museum à quelques pas",
        "Les meilleures boutiques indépendantes, torréfacteurs et tables à partager de la ville",
        "Scène de bars et de tavernes à vin animée mais sans prétention le soir",
      ],
      cons: [
        "On marche ou on prend un court tram pour les sites impériaux du premier arrondissement",
        "Les pâtés de maisons prisés peuvent être bruyants les nuits de week-end",
        "Peu de grands hôtels ; l'offre penche vers appartements et boutiques",
      ],
    },
    {
      slug: "mariahilf",
      citySlug: "vienna",
      name: "Mariahilf",
      lat: 48.1969,
      lng: 16.3489,
      bestFor: ["budget", "local", "first-time"],
      vibe: "Le sixième arrondissement bâti le long de la Mariahilfer Strasse, la rue commerçante la plus fréquentée de la ville, avec le vaste Naschmarkt à son extrémité basse. Il équilibre praticité et caractère : boutiques de grande rue et hôtels milieu de gamme fiables en haut, stands de nourriture et marché aux puces du week-end en bas près du marché. Le centre est à quinze minutes à pied en ligne droite ou à deux arrêts de métro.",
      pros: [
        "Les stands du Naschmarkt et le marché aux puces du samedi sur le pas de la porte",
        "Le plus grand choix d'hôtels solides milieu de gamme et petit budget de la ville",
        "U3 direct et Mariahilfer Strasse piétonne jusqu'au centre",
      ],
      cons: [
        "La grande rue commerçante est bondée et sans charme aux heures de pointe",
        "Moins d'atmosphère que Neubau juste en amont",
        "Les restaurants du Naschmarkt sont plus chers que ne le laisse croire la réputation des stands",
      ],
    },
    {
      slug: "landstrasse",
      citySlug: "vienna",
      name: "Landstrasse",
      lat: 48.1969,
      lng: 16.3947,
      bestFor: ["first-time", "family", "budget"],
      vibe: "Le troisième arrondissement au sud-est du ring, enveloppant le palais du Belvédère et ses jardins à la française. C'est un quartier résidentiel calme et bien desservi, avec la Hundertwasserhaus, le Rochusmarkt et un accès facile au train de l'aéroport depuis Wien Mitte. Les chambres coûtent moins cher que dans le premier arrondissement, tandis que le Belvédère et le ring restent accessibles à pied.",
      pros: [
        "Le palais du Belvédère, ses jardins et Le Baiser de Klimt à quelques minutes",
        "Le hub de Wien Mitte offre la liaison aéroport la plus rapide de la ville",
        "Plus calme et moins cher que le centre, tout en restant assez central pour marcher",
      ],
      cons: [
        "Étalé, donc certains hôtels sont à une vraie marche du site le plus proche",
        "Moins de restaurants marquants qu'à Neubau ou Leopoldstadt",
        "L'arrondissement manque d'un unique coeur animé pour ancrer une soirée",
      ],
    },
  ],

  pois: [
    {
      slug: "schonbrunn-palace",
      citySlug: "vienna",
      name: "Château de Schonbrunn",
      lat: 48.1849,
      lng: 16.3122,
      kind: "sight",
      needsBooking: true,
      tip: "Achetez un billet horodaté en ligne, car le château admet par créneau et les créneaux du jour même sont épuisés dès midi en saison. Prenez le créneau le plus tôt vers 8h30 ou les deux dernières heures de la journée pour éviter le pic des groupes ; les vastes jardins, la colline de la Gloriette et le labyrinthe sont gratuits, alors réservez l'intérieur payant pour le Grand Tour et passez le reste dehors.",
    },
    {
      slug: "hofburg",
      citySlug: "vienna",
      name: "Palais de la Hofburg",
      lat: 48.2065,
      lng: 16.3657,
      kind: "sight",
      needsBooking: true,
      tip: "L'unique Sisi Ticket couvre ici les Appartements impériaux, le musée Sisi et la Collection d'argenterie, plus le Grand Tour de Schonbrunn : achetez-le une fois si vous prévoyez les deux palais et évitez deux files séparées. Entrez dans les Appartements impériaux dès l'ouverture à 9h ; l'audioguide est inclus, et les cours, la Heldenplatz et les arcades sont gratuites à parcourir à toute heure.",
    },
    {
      slug: "stephansdom",
      citySlug: "vienna",
      name: "Cathédrale Saint-Étienne (Stephansdom)",
      lat: 48.2085,
      lng: 16.3731,
      kind: "sight",
      needsBooking: false,
      tip: "La zone debout à l'arrière est gratuite, mais la nef, la visite des catacombes et les deux tours coûtent chacune séparément, alors décidez avant d'entrer. Les 343 marches de la tour sud offrent la meilleure montée et vue sur la ville ; la tour nord a un ascenseur vers la cloche Pummerin et des files plus courtes, et le motif du toit en tuiles se photographie mieux depuis le coin opposé de la Stephansplatz.",
    },
    {
      slug: "belvedere",
      citySlug: "vienna",
      name: "Palais du Belvédère (Le Baiser de Klimt)",
      lat: 48.1915,
      lng: 16.3809,
      kind: "museum",
      needsBooking: true,
      tip: "Réservez un billet horodaté pour le Belvédère supérieur et allez-y dès l'ouverture à 9h, car la salle abritant Le Baiser de Klimt est l'endroit le plus bondé de Vienne en fin de matinée. Voyez Le Baiser en premier avant de revenir sur le reste de la collection, et sautez le Belvédère inférieur sauf si une exposition temporaire vous attire ; les jardins à la française entre les deux palais sont gratuits.",
    },
    {
      slug: "kunsthistorisches-museum",
      citySlug: "vienna",
      name: "Kunsthistorisches Museum",
      lat: 48.2039,
      lng: 16.3616,
      kind: "museum",
      needsBooking: true,
      tip: "La salle Bruegel, la plus grande collection de ses tableaux au monde, est la raison de venir : montez donc à la pinacothèque en premier avant l'arrivée des groupes. Faites une pause café et gâteau sous le café à coupole du premier étage, l'un des plus grandioses cafés de musée d'Europe ; le billet couvre aussi la Trésorerie impériale de la Hofburg sur des jours distincts si vous prenez le pass combiné.",
    },
    {
      slug: "state-opera",
      citySlug: "vienna",
      name: "Opéra national de Vienne",
      lat: 48.2033,
      lng: 16.3691,
      kind: "experience",
      needsBooking: true,
      tip: "Les places debout coûtent de 13 à 18 EUR et sont mises en vente environ 80 minutes avant le lever de rideau à la porte latérale côté Operngasse : faites la queue au moins une heure à l'avance pour une bonne place à la barre. Nouez votre écharpe à la barre pour garder votre place, puis sortez ; si vous préférez être assis, réservez en ligne des semaines à l'avance, et notez que l'opéra ferme en juillet et août.",
    },
    {
      slug: "naschmarkt",
      citySlug: "vienna",
      name: "Naschmarkt",
      lat: 48.1985,
      lng: 16.3639,
      kind: "food",
      needsBooking: false,
      tip: "Venez avant midi pour parcourir les épiciers, les étals de fromage et les stands moyen-orientaux avant que les restaurants avec service ne prennent le relais et que les prix ne grimpent. Le marché aux puces du samedi côté Kettenbruckengasse va d'environ 6h30 à la mi-après-midi et c'est le vrai attrait ; le marché est fermé le dimanche, planifiez donc votre visite un matin de semaine ou un samedi.",
    },
    {
      slug: "prater-riesenrad",
      citySlug: "vienna",
      name: "Prater et Grande Roue du Prater",
      lat: 48.2166,
      lng: 16.3958,
      kind: "park",
      needsBooking: false,
      tip: "Le parc lui-même et sa longue allée de marronniers sont gratuits et ouverts à toute heure ; seuls la Grande Roue et les manèges de la fête foraine sont payants. Montez sur la Grande Roue vers le coucher du soleil pour la meilleure lumière et la file la plus courte, ou zappez-la et parcourez plutôt la Hauptallee, puis mangez dans une guinguette comme le Schweizerhaus pour un Stelze et un demi-litre de bière.",
    },
    {
      slug: "cafe-central",
      citySlug: "vienna",
      name: "Café Central",
      lat: 48.2103,
      lng: 16.3656,
      kind: "food",
      needsBooking: false,
      tip: "La salle voûtée est spectaculaire, mais la file devant la porte atteint souvent 30 minutes aux heures de pointe : arrivez à l'ouverture à 8h ou après 15h pour entrer directement. L'étiquette des cafés fait qu'un Melange vous offre la table pour des heures sans pression : commandez un café et une part de Sachertorte et attardez-vous ; pour le même rituel sans la file, essayez le Café Sperl ou le Café Landtmann tout près.",
    },
    {
      slug: "albertina",
      citySlug: "vienna",
      name: "Albertina",
      lat: 48.2043,
      lng: 16.3682,
      kind: "museum",
      needsBooking: true,
      tip: "Réservez en ligne pour éviter la file des billets, puis commencez par la collection permanente de Monet à Picasso à l'étage avant que la grande expo temporaire n'attire les foules. Les salles d'apparat des Habsbourg à l'entrée sont incluses et souvent négligées ; la terrasse au-dessus de l'Opéra et de l'Albertinaplatz est gratuite d'accès et offre une rare vue en hauteur sur le ring.",
    },
    {
      slug: "hundertwasserhaus",
      citySlug: "vienna",
      name: "Hundertwasserhaus",
      lat: 48.2071,
      lng: 16.3941,
      kind: "sight",
      needsBooking: false,
      tip: "C'est un immeuble résidentiel : vous ne voyez la façade ondulée et les toits plantés que depuis la rue, ce qui prend dix minutes. Photographiez-la depuis le coin de la Kegelgasse et de la Lowengasse pour le cadrage complet, puis traversez vers la galerie marchande gratuite du Hundertwasser Village en face ; combinez avec le musée Kunst Haus Wien voisin si vous voulez la version intérieure payante.",
    },
    {
      slug: "museumsquartier",
      citySlug: "vienna",
      name: "MuseumsQuartier",
      lat: 48.2035,
      lng: 16.3585,
      kind: "experience",
      needsBooking: false,
      tip: "La cour avec ses transats Enzi colorés est gratuite et ouverte 24h/24, un spot de choix pour un verre entre deux musées ; le musée Leopold ici abrite la plus grande collection d'Egon Schiele au monde et nécessite un billet séparé. N'achetez le billet combiné MQ que si vous prévoyez de faire le Leopold et le musée d'art moderne mumok le même jour.",
    },
    {
      slug: "karlskirche",
      citySlug: "vienna",
      name: "Karlskirche",
      lat: 48.1985,
      lng: 16.3719,
      kind: "sight",
      needsBooking: false,
      tip: "Le billet payant comprend un ascenseur panoramique qui monte à l'intérieur de la coupole jusqu'à toucher presque les fresques du plafond, c'est la raison de payer l'entrée plutôt que d'admirer seulement la façade baroque depuis le bassin réfléchissant dehors. Allez-y un matin de semaine quand l'ascenseur n'a pas de file ; des concerts des Quatre Saisons de Vivaldi ont lieu la plupart des soirs, mais la visite de la coupole en journée offre un meilleur rapport qualité-prix.",
    },
    {
      slug: "spanish-riding-school",
      citySlug: "vienna",
      name: "École espagnole d'équitation",
      lat: 48.2075,
      lng: 16.3665,
      kind: "experience",
      needsBooking: true,
      tip: "Les représentations complètes des étalons lipizzans se remplissent des semaines à l'avance et coûtent à partir d'environ 25 EUR, mais les séances d'entraînement du matin sont bien moins chères, autour de 15 EUR, et permettent de voir les mêmes chevaux répéter sous le même manège baroque. Réservez l'entraînement du matin en ligne, arrivez à l'ouverture des portes, et notez qu'il n'y a pas d'entraînement le lundi ni pendant les congés d'été des écuries.",
    },
  ],

  itineraries: [
    {
      citySlug: "vienna",
      days: 2,
      summary:
        "Deux jours suffisent pour les sites impériaux phares de Vienne si vous logez au centre et démarrez tôt, mais vous laisserez le quartier des musées et les arrondissements locaux à peine effleurés. Le centre est compact à l'intérieur de la Ringstrasse : la cathédrale Saint-Étienne, la Hofburg et l'Opéra national sont à quinze minutes à pied, et les tramways bouclent la boucle. Logez dans l'Innere Stadt pour que les deux matins démarrent à pied. La structure qui fonctionne : un jour ville impériale et un jour palais : jour un pour la cathédrale, la Hofburg et un café, jour deux vers Schonbrunn le matin et le Belvédère pour Le Baiser de Klimt l'après-midi. Réservez en ligne avant d'arriver les billets horodatés de Schonbrunn et du Belvédère et le Sisi Ticket de la Hofburg, car les files et les créneaux épuisés sont la seule vraie menace pour une visite de 48 heures. Ce que vous sacrifiez, c'est le Kunsthistorisches Museum, le MuseumsQuartier et toute soirée tranquille à Neubau, ce qu'un troisième jour vous offre justement. Mangez hors de la place de la cathédrale, pas dessus.",
      stayNeighborhoodSlug: "innere-stadt",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Centre impérial et la Hofburg",
          morning: [
            {
              poiSlug: "stephansdom",
              text: "Commencez à la cathédrale Saint-Étienne vers 8h30 tant que la place est encore calme, parcourez la nef arrière gratuite, puis grimpez les 343 marches de la tour sud pour la vue sur le toit en tuiles avant l'arrivée des premiers groupes.",
              durationMin: 75,
            },
            {
              poiSlug: "hofburg",
              text: "Marchez dix minutes jusqu'à la Hofburg et entrez dans les Appartements impériaux et le musée Sisi dès l'ouverture à 9h avec votre Sisi Ticket réservé. L'audioguide inclus vous guide à travers la cour des Habsbourg en environ quatre-vingt-dix minutes.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "cafe-central",
              text: "Déjeuner et café au Café Central à quelques minutes au nord ; arrivez après la ruée de midi, prenez une petite assiette et un Melange, et usez de la règle des cafés selon laquelle un café vous garde la table aussi longtemps que vous voulez.",
              durationMin: 90,
            },
            {
              poiSlug: "albertina",
              text: "Repassez devant la Hofburg jusqu'à l'Albertina pour la collection de Monet à Picasso et les salles d'apparat des Habsbourg, puis montez sur la terrasse gratuite au-dessus de l'Opéra pour une vue en hauteur sur le ring.",
              durationMin: 105,
            },
          ],
          evening: [
            {
              poiSlug: "state-opera",
              text: "Faites la queue à la porte latérale côté Operngasse de l'Opéra national environ une heure avant le lever de rideau pour une place debout à 13-18 EUR. Nouez votre écharpe à la barre pour garder la place, puis assistez à un acte de ce qui est à l'affiche ce soir-là.",
              durationMin: 120,
            },
            {
              text: "Dîner dans un Beisl traditionnel du premier arrondissement, à l'écart des grandes places, quelque part comme le Gmoakeller ou le bar du Zum Schwarzen Kameel, pour un Wiener Schnitzel et un verre de Gruner Veltliner sans la majoration de la Stephansplatz.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Schonbrunn et le Belvédère",
          morning: [
            {
              poiSlug: "schonbrunn-palace",
              text: "Prenez le métro U4 jusqu'à Schonbrunn et utilisez votre créneau de 8h30 pour le Grand Tour de l'intérieur du château avant l'arrivée des cars. Ensuite, montez à la colline gratuite de la Gloriette pour la vue classique sur le château.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "belvedere",
              text: "Métro et tram jusqu'au Belvédère supérieur pour votre billet horodaté de début d'après-midi et allez droit au Baiser de Klimt avant que la salle ne se remplisse, puis remontez à travers le reste de la collection.",
              durationMin: 120,
            },
            {
              text: "Descendez à travers les jardins à la française gratuits entre le Belvédère supérieur et inférieur, la plus belle vue sans billet de cette partie de la ville, et sortez vers le ring pour rentrer à pied à votre hôtel.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "karlskirche",
              text: "Arrêtez-vous à la Karlskirche en chemin et payez l'ascenseur de la coupole qui monte aux fresques du plafond ; un début de soirée en semaine n'a en général pas de file pour la plateforme panoramique.",
              durationMin: 60,
            },
            {
              text: "Terminez par un dîner près de l'extrémité Naschmarkt du sixième arrondissement, puis une dernière boucle illuminée devant l'Opéra et les portes de la Hofburg, à leur meilleur une fois vides après la tombée de la nuit.",
              durationMin: 105,
            },
          ],
        },
      ],
    },
    {
      citySlug: "vienna",
      days: 3,
      summary:
        "Trois jours, c'est la bonne durée pour Vienne : de quoi voir les palais, la cathédrale et les grands musées à un rythme humain, plus une soirée qui appartient à la ville plutôt qu'à la liste à cocher. Deux jours vous forcent à enchaîner Schonbrunn et le Belvédère au pas de course ; le troisième jour ajoute le Kunsthistorisches Museum, le MuseumsQuartier et le temps de s'asseoir dans un café sans surveiller l'horloge. Logez à Neubau, derrière le quartier des musées. C'est moins cher que le premier arrondissement, et ses torréfacteurs, tavernes à vin et boutiques indépendantes sont là où la ville passe réellement ses soirées, à courte distance à pied de chaque site majeur. La forme du plan : jour un pour le ring du centre et la Hofburg, jour deux pour Schonbrunn et le Belvédère, jour trois pour le quartier des musées et un après-midi local pris lentement. Réservez trois choses en ligne avant d'arriver : le créneau horodaté de Schonbrunn, celui du Belvédère et le Sisi Ticket de la Hofburg. Tout le reste à Vienne récompense le fait d'arriver tôt plutôt que de payer plus.",
      stayNeighborhoodSlug: "neubau",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Ring du centre et la Hofburg",
          morning: [
            {
              poiSlug: "stephansdom",
              text: "Depuis Neubau, marchez ou prenez le U3 jusqu'à Stephansplatz et atteignez la cathédrale Saint-Étienne avant 9h ; faites la nef gratuite et la montée de la tour sud tant que la place est encore vide.",
              durationMin: 75,
            },
            {
              poiSlug: "hofburg",
              text: "Parcourez le Graben et la Kohlmarkt jusqu'à la Hofburg et entrez dans les Appartements impériaux et le musée Sisi à l'ouverture avec votre Sisi Ticket, l'audioguide inclus rythmant les salles des Habsbourg.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "cafe-central",
              text: "Déjeuner café au Café Central juste au nord de la Hofburg ; allez-y après que la file de midi se dégonfle, commandez un Melange et une Sachertorte, et installez-vous sans pression de partir.",
              durationMin: 90,
            },
            {
              poiSlug: "albertina",
              text: "Enchaînez avec l'Albertina réservée à l'avance pour les salles de Monet à Picasso et les appartements d'apparat, en finissant sur la terrasse gratuite au-dessus de l'Opéra et de l'Albertinaplatz.",
              durationMin: 105,
            },
          ],
          evening: [
            {
              poiSlug: "state-opera",
              text: "Faites la queue à la porte Operngasse de l'Opéra national une heure avant le lever de rideau pour une place debout, nouez votre écharpe à la barre et savourez un acte ; tout le rituel revient à bien moins de 20 EUR.",
              durationMin: 120,
            },
            {
              text: "Rentrez à pied dans Neubau pour dîner parmi les ruelles de Spittelberg, où les tavernes à vin Biedermeier et les bistrots à petites assiettes servent mieux et moins cher que tout ce qui se trouve sur la Stephansplatz.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Schonbrunn et le Belvédère",
          morning: [
            {
              poiSlug: "schonbrunn-palace",
              text: "Prenez le U4 jusqu'à Schonbrunn pour un créneau de 8h30 au Grand Tour avant l'arrivée des cars, puis grimpez à la Gloriette gratuite pour la vue carte postale sur le château et les jardins.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "belvedere",
              text: "Traversez la ville jusqu'au Belvédère supérieur pour un billet horodaté de début d'après-midi et allez droit au Baiser de Klimt avant que la foule ne monte, puis prenez le reste de la collection autrichienne à loisir.",
              durationMin: 120,
            },
            {
              poiSlug: "hundertwasserhaus",
              text: "Marchez quinze minutes vers l'est jusqu'à la Hundertwasserhaus pour la façade ondulée et les toits jardinés, mieux cadrés depuis le coin de la Kegelgasse, puis jetez un oeil à la galerie gratuite du Hundertwasser Village en face.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "karlskirche",
              text: "Rendez-vous à la Karlskirche et prenez l'ascenseur de la coupole jusqu'aux fresques ; un début de soirée en semaine signifie en général aucune file pour la plateforme panoramique à l'intérieur de la coupole.",
              durationMin: 60,
            },
            {
              text: "Dîner autour du Naschmarkt ou du bas de Mariahilf, puis un dernier verre de retour à Neubau ; les petits bars du quartier restent animés plus tard que les rues tranquilles du premier arrondissement.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Quartier des musées et un après-midi local",
          morning: [
            {
              poiSlug: "kunsthistorisches-museum",
              text: "Soyez au Kunsthistorisches Museum à l'ouverture et montez droit à la salle Bruegel, la plus grande au monde, avant l'arrivée des groupes, puis faites une pause café sous le grandiose café à coupole du premier étage.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "museumsquartier",
              text: "Passez à la cour du MuseumsQuartier pour un verre sur les transats Enzi colorés, puis choisissez un musée à l'intérieur : le Leopold pour la plus grande collection Schiele au monde, ou le mumok pour l'art moderne.",
              durationMin: 150,
            },
            {
              poiSlug: "naschmarkt",
              text: "Descendez au Naschmarkt pour un grignotage tardif à travers les épiciers et les stands ; un après-midi de semaine est plus calme que la cohue du marché aux puces du samedi, même si les tables avec service sont plus chères qu'elles n'en ont l'air.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              text: "Passez l'heure dorée sur la Neubaugasse et les ruelles de Spittelberg, à flâner entre torréfacteurs et boutiques de design tandis que le quartier s'éveille pour la soirée.",
              durationMin: 60,
            },
            {
              text: "Dernier dîner dans un Beisl de Neubau ou un bar à vin nature, le contrepoint viennois moderne aux cafés impériaux, avec schnitzel ou petites assiettes de saison et une bouteille de blanc autrichien.",
              durationMin: 105,
            },
          ],
        },
      ],
    },
    {
      citySlug: "vienna",
      days: 4,
      summary:
        "Quatre jours, c'est plus qu'assez pour les sites de Vienne, et c'est bien là le but : le quatrième jour transforme un sprint entre monuments en un vrai voyage. Les jours un à trois couvrent le ring du centre, la Hofburg, Schonbrunn, le Belvédère et les grands musées à un rythme détendu ; le jour quatre est une journée lente de l'autre côté du canal du Danube à Leopoldstadt, articulée autour du Prater, des marchés locaux et du long rituel du café que le rythme impérial ne permet jamais. Avec autant de temps, logez à Leopoldstadt : c'est à un arrêt de métro de la vieille ville, moins cher à prestation égale, et ses cafés du Karmelitermarkt et le vert Prater sont la raison d'être du quatrième jour. La logique du jour impérial tient toujours : gardez Schonbrunn et le Belvédère sur leur propre jour, gardez le quartier des musées ensemble, et ne zigzaguez pas à travers le ring. Réservez à l'avance le créneau de Schonbrunn, celui du Belvédère et le Sisi Ticket de la Hofburg, et ajoutez une séance d'entraînement matinale à l'École espagnole d'équitation si vous voulez les lipizzans à moindre coût. Si vous hésitiez entre trois et quatre jours, le quatrième est celui dont vous vous souviendrez.",
      stayNeighborhoodSlug: "leopoldstadt",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Ring du centre et la Hofburg",
          morning: [
            {
              poiSlug: "stephansdom",
              text: "Prenez le U1 un arrêt depuis Leopoldstadt jusqu'à Stephansplatz et atteignez la cathédrale Saint-Étienne pour 8h30 ; faites la nef gratuite et la montée de la tour sud avant que la place ne se remplisse.",
              durationMin: 75,
            },
            {
              poiSlug: "hofburg",
              text: "Parcourez le Graben jusqu'à la Hofburg et entrez dans les Appartements impériaux et le musée Sisi à l'ouverture avec votre Sisi Ticket, en laissant l'audioguide inclus donner le tempo à travers les salles des Habsbourg.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "cafe-central",
              text: "Déjeuner café au Café Central ; arrivez après la file de midi, commandez un Melange et usez de la règle un-café-garde-la-table pour ralentir la journée.",
              durationMin: 90,
            },
            {
              poiSlug: "albertina",
              text: "Visitez l'Albertina pour la collection de Monet à Picasso et les salles d'apparat, en finissant sur la terrasse gratuite au-dessus de l'Opéra pour la vue en hauteur sur le ring.",
              durationMin: 105,
            },
          ],
          evening: [
            {
              poiSlug: "state-opera",
              text: "Faites la queue à la porte Operngasse de l'Opéra national une heure avant le lever de rideau pour une place debout à moins de 20 EUR, gardez votre place à la barre avec une écharpe et assistez à un acte.",
              durationMin: 120,
            },
            {
              text: "Reprenez le U1 de l'autre côté du canal pour dîner dans un Beisl de Leopoldstadt près du Karmelitermarkt, où les cuisines locales servent schnitzel et vin autrichien à prix de quartier.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Schonbrunn et le Belvédère",
          morning: [
            {
              poiSlug: "schonbrunn-palace",
              text: "Filez à Schonbrunn par le U4 pour un créneau Grand Tour de 8h30 avant les cars, puis montez à la colline gratuite de la Gloriette pour la vue classique sur le château et son parterre.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "belvedere",
              text: "Traversez jusqu'au Belvédère supérieur pour un billet horodaté de début d'après-midi et allez droit au Baiser de Klimt avant que la salle ne s'engorge, puis prenez le reste de la collection autrichienne lentement.",
              durationMin: 120,
            },
            {
              text: "Parcourez les jardins à la française gratuits en descendant vers le Belvédère inférieur et sortez vers le ring, la plus belle perspective sans billet de ce quartier, avec la ligne d'horizon de la ville cadrée derrière le parterre.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "karlskirche",
              text: "Arrêtez-vous à la Karlskirche pour l'ascenseur de la coupole jusqu'aux fresques ; une soirée en semaine n'a en général pas de file pour la plateforme panoramique à l'intérieur de la coupole.",
              durationMin: 60,
            },
            {
              text: "Dîner autour du Naschmarkt ou de Mariahilf, puis une marche tranquille de retour de l'autre côté du canal vers Leopoldstadt tandis que les lumières du ring s'allument.",
              durationMin: 105,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Quartier des musées et extras impériaux",
          morning: [
            {
              poiSlug: "spanish-riding-school",
              text: "Réservez une séance d'entraînement matinale à l'École espagnole d'équitation, environ 15 EUR contre 25 et plus pour un spectacle complet, et regardez les étalons lipizzans répéter sous le manège baroque ; pas d'entraînement le lundi.",
              durationMin: 90,
            },
            {
              poiSlug: "kunsthistorisches-museum",
              text: "Marchez jusqu'au Kunsthistorisches Museum et montez d'abord à la salle Bruegel, puis faites une pause café et gâteau sous le café à coupole du premier étage.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "museumsquartier",
              text: "Passez au MuseumsQuartier pour un verre sur les transats Enzi, puis choisissez un intérieur : le musée Leopold pour la plus grande collection Schiele ou le mumok pour l'art moderne.",
              durationMin: 150,
            },
            {
              poiSlug: "naschmarkt",
              text: "Décompressez au Naschmarkt avec un grignotage tardif à travers les stands ; un après-midi de semaine est la fenêtre calme entre la ruée du déjeuner et la fermeture.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Heure dorée sur la Neubaugasse et à travers les ruelles de Spittelberg, à flâner entre torréfacteurs et boutiques de design avant le dîner.",
              durationMin: 60,
            },
            {
              text: "Dîner dans un bar à vin nature ou un Beisl de Neubau pour le versant viennois moderne de la ville, puis le court saut en U-Bahn de retour à Leopoldstadt.",
              durationMin: 105,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Prater, Leopoldstadt et la journée café",
          morning: [
            {
              text: "Démarrez doucement au Karmelitermarkt à Leopoldstadt, où les étals et les cafés locaux font une matinée détendue, surtout le marché du samedi ; prenez le petit-déjeuner dans un café de marché plutôt que dans une adresse touristique du premier arrondissement.",
              durationMin: 90,
            },
            {
              poiSlug: "prater-riesenrad",
              text: "Entrez dans le Prater et descendez la longue Hauptallee bordée de marronniers, tous deux gratuits et ouverts à toute heure, puis montez sur la Grande Roue pour la vue sur la ville et le Danube.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Déjeuner dans une guinguette du Prater comme le Schweizerhaus pour un Stelze et un demi-litre de bière sous les arbres, le repas viennois classique par temps chaud.",
              durationMin: 105,
            },
            {
              poiSlug: "hundertwasserhaus",
              text: "Traversez au sud jusqu'à la Hundertwasserhaus pour la façade ondulée et les toits jardinés, cadrés depuis le coin de la Kegelgasse, et un coup d'oeil à la galerie gratuite du Hundertwasser Village en face.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Retournez dans un grand café pour la dernière longue assise du voyage : Café Landtmann ou Café Sperl pour un Melange et une part de gâteau, sans se presser, comme le rituel est censé fonctionner.",
              durationMin: 90,
            },
            {
              text: "Dernier dîner de retour à Leopoldstadt près du canal, puis une ultime marche le long de l'eau avec la ligne d'horizon illuminée du premier arrondissement en face.",
              durationMin: 105,
            },
          ],
        },
      ],
    },
  ],
};

export default viennaFr;
