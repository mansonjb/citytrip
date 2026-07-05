import type { CityData } from "../types";

const romeFr: CityData = {
  city: {
    slug: "rome",
    name: "Rome",
    country: "Italie",
    countrySlug: "italy",
    lat: 41.9028,
    lng: 12.4964,
    tier: 1,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "FCO",
    airportToCenter:
      "Le train Leonardo Express relie Fiumicino à Termini en 32 minutes environ, pour 14 EUR, avec un départ tous les quarts d'heure. Options moins chères : le train régional FL1 jusqu'aux gares de Trastevere ou d'Ostiense pour 8 EUR, ou un bus Terravision/SIT jusqu'à Termini pour 6 EUR environ, mais plus lent dans le trafic.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [7, 8],
    monthlyNotes: {
      1: "Frais, autour de 12-13C, avec l'affluence la plus basse de l'année et les tarifs d'hôtel les plus doux, même si quelques averses passent. L'Épiphanie, le 6 janvier, clôt la saison de Noël avec un marché sur la place Navone, et le premier dimanche offre l'entrée gratuite aux musées d'État, Colisée compris.",
      2: "Encore doux, autour de 13-14C, et tranquille en dehors de la courte période du carnaval, quand les enfants costumés envahissent les places. La pluie est possible mais les après-midi ensoleillés propices au déjeuner en terrasse sont fréquents : un excellent mois pour un séjour peu cher et sans files.",
      3: "Les maximales grimpent vers 17C et les journées s'allongent, l'affluence ne montant qu'en fin de mois. Surveillez le calendrier de Pâques : si la Semaine sainte tombe en mars, le Vatican et les hôtels du centre se remplissent et se renchérissent vite.",
      4: "L'un des meilleurs mois, à 19-20C, mais deux grands rendez-vous se télescopent : la Semaine sainte et Pâques emplissent la place Saint-Pierre pour les offices du pape, et le Natale di Roma, le 21 avril, met en scène des défilés de gladiateurs au Circus Maximus pour la fondation de la ville. Réservez le Vatican et les dates de Pâques des semaines à l'avance.",
      5: "Chaud de façon fiable, à 23-24C, avec de longues soirées et peu de pluie : le moment idéal avant la chaleur estivale. L'affluence est forte aux sites phares, donc les billets horodatés pour le Colisée et le Vatican sont indispensables, mais la saison des terrasses et des dîners sur les places est à son apogée.",
      6: "Chaud, à 28-29C, et fréquenté, avec le festival Estate Romana qui commence à animer les berges du fleuve et les lieux en plein air de concerts et de cinéma jusqu'à la fin de l'été. Faites le Colisée et le Vatican dès l'ouverture, puis repliez-vous vers les églises fraîches et les longs déjeuners l'après-midi.",
      7: "Chaleur maximale, au-delà de 31C, soleil implacable et Romains de moins en moins nombreux, partis vers la côte. L'affluence reste dense aux grands sites et les prix se maintiennent, alors réservez le premier créneau partout et prévoyez des étapes couvertes ou ombragées pour la fournaise de 14h à 17h.",
      8: "Le mois le plus chaud et le plus éprouvant, à 32-33C, avec le Ferragosto du 15 août qui ferme bien des trattorias familiales pour les congés. Si août est inévitable, réservez la climatisation, concentrez les visites tôt le matin et attendez-vous à une ville à moitié vidée de ses Romains mais pleine de groupes de touristes.",
      9: "La lumière de l'été sans le pire de la chaleur : 28C en début de mois, en baisse au fil des semaines, avec les événements de l'Estate Romana encore en cours le long du Tibre. L'affluence se détend après la première semaine, et c'est sans doute le meilleur mois pour un séjour à Rome.",
      10: "Journées douces autour de 23-24C, avec les premières vraies pluies qui reviennent en fin de mois et une superbe lumière rasante pour les photos. L'affluence baisse nettement après la mi-octobre, un excellent choix de basse saison pour la météo comme pour le rapport qualité-prix des hôtels.",
      11: "Plus frais, à 17-18C, avec des épisodes pluvieux réguliers, mais de nombreuses journées lumineuses entre les fronts et les grands sites les plus calmes de l'automne. Les tarifs de basse saison reviennent, et on peut souvent entrer sans réserver dans des restaurants qui exigent une table en mai.",
      12: "Doux pour l'hiver, à 14C, mais humide, avec un sapin de Noël et une crèche sur la place Saint-Pierre et des illuminations dans tout le centre. Tranquille jusqu'à la période de Noël au Nouvel An, quand les tarifs s'envolent et que l'entrée gratuite du premier dimanche attire une forte affluence locale.",
    },
    climate: {
      1: { highC: 12, lowC: 3, rainyDays: 8 },
      2: { highC: 13, lowC: 4, rainyDays: 8 },
      3: { highC: 16, lowC: 6, rainyDays: 8 },
      4: { highC: 19, lowC: 8, rainyDays: 8 },
      5: { highC: 24, lowC: 12, rainyDays: 6 },
      6: { highC: 28, lowC: 16, rainyDays: 4 },
      7: { highC: 31, lowC: 18, rainyDays: 2 },
      8: { highC: 32, lowC: 18, rainyDays: 3 },
      9: { highC: 28, lowC: 15, rainyDays: 5 },
      10: { highC: 23, lowC: 11, rainyDays: 8 },
      11: { highC: 17, lowC: 7, rainyDays: 9 },
      12: { highC: 14, lowC: 4, rainyDays: 9 },
    },
    budgetLevel: "mid",
    budgetPerDay: { budget: 75, mid: 150, high: 300 },
    tagline: "Trois mille ans de ruines, et le dîner dehors par-dessus.",
    heroIntro:
      "Rome concentre des merveilles antiques, le Vatican et la meilleure cuisine décontractée d'Europe dans un centre que l'on parcourt surtout à pied, à condition d'accepter les pavés et les distances. Trois jours sont le minimum honnête pour répartir la Rome antique, le Vatican et le coeur des places sans forcer l'allure. Venez au printemps ou en début d'automne, réservez le Colisée et le Vatican avant de partir, et la ville tient ses promesses comme presque nulle part ailleurs.",
    accent: { from: "#C0532B", to: "#E0A43B", ink: "#6E2A15" },
    neighborhoodSlugs: [
      "centro-storico",
      "monti",
      "trastevere",
      "prati",
      "testaccio",
    ],
    nearbyCitySlugs: ["florence"],
  },

  neighborhoods: [
    {
      slug: "centro-storico",
      citySlug: "rome",
      name: "Centro Storico",
      lat: 41.8992,
      lng: 12.4731,
      bestFor: ["first-time", "romantic", "family"],
      vibe: "Le coeur historique entre le Panthéon, la place Navone et la fontaine de Trevi, un dédale de ruelles ocre qui débouchent sur des places baroques. Tout ce qui figure sur la liste d'un premier séjour tient dans un rayon de quinze minutes à pied, et les rues s'illuminent le soir une fois les excursionnistes partis. C'est la carte postale, et l'on paie au prix de la carte postale pour y dormir.",
      pros: [
        "Rejoindre le Panthéon, Trevi, Navone et la place d'Espagne à pied, sans transport",
        "Superbe le soir une fois les groupes partis après le dîner",
        "Dense en cafés, glaciers et spots d'apéritif à chaque coin de rue",
      ],
      cons: [
        "Le quartier le plus cher de la ville pour l'hôtellerie",
        "Aucune station de métro à l'intérieur : on marche ou on prend le bus partout",
        "Bondé et bruyant autour des sites phares toute la journée",
      ],
    },
    {
      slug: "monti",
      citySlug: "rome",
      name: "Monti",
      lat: 41.8946,
      lng: 12.4917,
      bestFor: ["local", "romantic", "nightlife"],
      vibe: "Le plus vieux quartier de Rome se love dans une poche entre le Colisée et Termini : ancien quartier chaud de l'Antiquité, c'est aujourd'hui le secteur le plus agréable à vivre du centre. Friperies, bars à vin et petites trattorias bordent des ruelles couvertes de lierre autour de la Piazza della Madonna dei Monti, où les habitants boivent le soir sur les marches de la fontaine. Il vous donne un accès à pied à la Rome antique sans le prix ni la cohue des cars de tourisme.",
      pros: [
        "Dix minutes à pied du Colisée et du Forum",
        "Station de métro Cavour sur la ligne B, et tout près du pôle de transport de Termini",
        "Une vraie vie de quartier le soir, bars à vin et enotecas, pas des pièges à touristes",
      ],
      cons: [
        "Certaines rues près de Termini paraissent délabrées à la nuit tombée",
        "Les bars populaires deviennent bruyants et bondés le week-end",
        "Peu d'hôtels de grandes enseignes, davantage d'appartements et de petites boutiques",
      ],
    },
    {
      slug: "trastevere",
      citySlug: "rome",
      name: "Trastevere",
      lat: 41.8896,
      lng: 12.4695,
      bestFor: ["romantic", "nightlife", "local"],
      vibe: "De l'autre côté du Tibre par rapport au centre, le Trastevere est un lacis de ruelles pavées, de lierre et de linge étendu qui devient le quartier le plus atmosphérique de la ville pour dîner et boire un verre à la nuit tombée. Les trattorias débordent sur les rues et les bars autour de la place Santa Maria restent animés bien après minuit. Charmant en soirée, il est franchement bruyant les nuits de week-end.",
      pros: [
        "La meilleure concentration de trattorias classiques et l'ambiance nocturne de Rome",
        "Accessible à pied au centre par le fleuve et au ghetto juif",
        "Des ruelles de carte postale, magnifiques à la lumière du matin",
      ],
      cons: [
        "Bruyant jusqu'au petit matin le week-end, à éviter pour les dormeurs légers",
        "Aucun métro : on dépend des trams, des bus ou de ses jambes",
        "Certains restaurants des places principales se reposent sur l'emplacement",
      ],
    },
    {
      slug: "prati",
      citySlug: "rome",
      name: "Prati",
      lat: 41.9075,
      lng: 12.4623,
      bestFor: ["family", "first-time", "budget"],
      vibe: "Un quartier ordonné et élégant de larges avenues tracées le long du Vatican, avec des boutiques chics, des restaurants fiables et bien moins de touristes que le centre. Il vous met à quelques minutes à pied des Musées du Vatican et de Saint-Pierre tout en donnant l'impression d'une vraie Rome résidentielle. Calme, sûr et bien desservi par le métro.",
      pros: [
        "Rejoindre les Musées du Vatican et Saint-Pierre à pied, avant les cars",
        "Deux arrêts de métro sur la ligne A, direct vers Termini et la place d'Espagne",
        "Des hôtels d'un meilleur rapport qualité-prix et une restauration fiable, pas touristique",
      ],
      cons: [
        "Plus calme le soir, avec une offre de bars et de vie nocturne limitée",
        "20 à 25 minutes à pied ou un saut en métro du côté du Colisée",
        "Plus fonctionnel que romantique face au vieux centre",
      ],
    },
    {
      slug: "testaccio",
      citySlug: "rome",
      name: "Testaccio",
      lat: 41.8759,
      lng: 12.4757,
      bestFor: ["local", "budget", "family"],
      vibe: "Un quartier populaire au sud du centre, bâti autour des anciens abattoirs, et le foyer spirituel de la cucina povera romaine, abats compris. Son marché couvert et ses trattorias sans chichi attirent les vrais gourmands, tandis que la vie nocturne se joue dans les clubs creusés dans le Monte Testaccio. Peu à voir, beaucoup à manger, et les prix que paient réellement les locaux.",
      pros: [
        "La cuisine authentique au meilleur rapport qualité-prix de Rome, du marché aux trattorias à l'ancienne",
        "Station de métro Piramide sur la ligne B, à quelques minutes du Colisée",
        "Une vraie atmosphère de quartier avec quasiment aucune majoration touristique",
      ],
      cons: [
        "Peu de sites classiques : on vient pour manger, pas pour admirer",
        "Plus de 20 minutes à pied ou un trajet en métro du coeur historique",
        "La rangée de clubs du Monte Testaccio est bruyante les nuits de week-end",
      ],
    },
  ],

  pois: [
    {
      slug: "colosseum",
      citySlug: "rome",
      name: "Colisée",
      lat: 41.8902,
      lng: 12.4922,
      kind: "sight",
      needsBooking: true,
      tip: "Achetez le billet combiné Colisée-Forum-Palatin en ligne plusieurs jours à l'avance : il se vend vite et la file sur place dépasse une heure en saison. Le créneau horodaté ne vaut que pour le Colisée, alors entrez-y d'abord à votre heure, puis utilisez le même billet pour le Forum et le Palatin dans les 24 heures. Les suppléments arène et souterrains exigent une réservation séparée bien à l'avance.",
    },
    {
      slug: "roman-forum-palatine",
      citySlug: "rome",
      name: "Forum romain et mont Palatin",
      lat: 41.8925,
      lng: 12.4853,
      kind: "sight",
      needsBooking: true,
      tip: "Compris dans le même billet combiné du Colisée, donc faites-le le même jour ou le lendemain dans la fenêtre de 24 heures. Entrez par la porte plus calme de la Via di San Gregorio plutôt que par l'entrée bondée du Forum près du Colisée, et montez d'abord le Palatin pour la vue plongeante sur les ruines avant le soleil de midi. Il n'y a presque pas d'ombre, alors emportez de l'eau et un chapeau.",
    },
    {
      slug: "pantheon",
      citySlug: "rome",
      name: "Panthéon",
      lat: 41.8986,
      lng: 12.4769,
      kind: "sight",
      needsBooking: true,
      tip: "L'entrée coûte 5 EUR et est gratuite le premier dimanche du mois, mais un créneau horodaté est exigé le week-end et les jours fériés : réservez-les en ligne. Venez à l'ouverture (9h) ou dans la dernière heure avant la fermeture pour avoir l'intérieur et son oculus ouvert sans un mur de perches à selfie. Un jour de pluie, regardez l'eau tomber droit par l'oculus sur le sol de marbre à l'écoulement discret.",
    },
    {
      slug: "trevi-fountain",
      citySlug: "rome",
      name: "Fontaine de Trevi",
      lat: 41.9009,
      lng: 12.4833,
      kind: "sight",
      needsBooking: false,
      tip: "Allez-y à 7h ou après minuit pour voir vraiment le marbre : en milieu de matinée, c'est une cohue compacte sur dix rangs. Jetez la pièce de la main droite par-dessus l'épaule gauche si vous voulez la tradition, et évitez les cafés hors de prix de la place. L'eau n'est pas potable, mais les fontaines de rue gratuites (nasoni) tout près le sont.",
    },
    {
      slug: "vatican-museums",
      citySlug: "rome",
      name: "Musées du Vatican et chapelle Sixtine",
      lat: 41.9065,
      lng: 12.4536,
      kind: "museum",
      needsBooking: true,
      tip: "Réservez le premier créneau de 8h en ligne, des semaines à l'avance, et filez droit vers la chapelle Sixtine par l'itinéraire le plus vide avant de revenir sur vos pas : les galeries se remplissent à toucher les épaules dès 10h. Le mercredi matin est le plus calme car l'audience papale attire la foule sur la place. L'entrée gratuite du dernier dimanche du mois est une cohue avec des files d'une heure : à éviter sauf patience infinie.",
    },
    {
      slug: "st-peters-basilica",
      citySlug: "rome",
      name: "Basilique Saint-Pierre",
      lat: 41.9022,
      lng: 12.4539,
      kind: "sight",
      needsBooking: false,
      tip: "L'entrée de la basilique est gratuite mais la file de sécurité sur la place peut atteindre une heure, alors arrivez à l'ouverture à 7h ou venez en fin d'après-midi. Le code vestimentaire est strict : épaules et genoux couverts, sinon refus à la porte. La montée à la coupole est payante (environ 10 EUR avec l'ascenseur jusqu'à la terrasse, 8 EUR à pied) et vaut la peine pour la vue plongeante sur la nef et sur Rome.",
    },
    {
      slug: "piazza-navona",
      citySlug: "rome",
      name: "Place Navone",
      lat: 41.8992,
      lng: 12.4731,
      kind: "sight",
      needsBooking: false,
      tip: "Cette place baroque bâtie sur un stade antique est gratuite et à son meilleur tôt le matin ou après le dîner, quand la foule et les caricaturistes se clairsèment. La fontaine des Quatre-Fleuves du Bernin en est la pièce maîtresse, mais ne vous asseyez pas en terrasse ici : la majoration liée à l'emplacement est brutale. Faites un pas d'une rue vers l'ouest pour une fraction du prix.",
    },
    {
      slug: "spanish-steps",
      citySlug: "rome",
      name: "Place d'Espagne",
      lat: 41.906,
      lng: 12.4823,
      kind: "sight",
      needsBooking: false,
      tip: "S'asseoir sur les marches est interdit et la police l'applique par des amendes : c'est donc un arrêt photo debout, pas une pause. Venez au lever du soleil pour l'escalier vide, ou montez jusqu'à l'église de la Trinité-des-Monts, au sommet, pour une vue gratuite sur les toits. La maison de Keats et Shelley, au pied, est un détour tranquille si l'envie vous prend.",
    },
    {
      slug: "galleria-borghese",
      citySlug: "rome",
      name: "Galerie Borghèse",
      lat: 41.9142,
      lng: 12.4922,
      kind: "museum",
      needsBooking: true,
      tip: "Impossible d'entrer sans un créneau horodaté de deux heures réservé à l'avance, et ils partent des jours à l'avance : réservez ceci avant tout le reste du séjour. Elle abrite les plus grandes sculptures du Bernin et une salle de Caravage dans une villa compacte, alors deux heures suffisent vraiment. Arrivez 15 minutes avant pour déposer votre sac au vestiaire obligatoire avant le début de votre créneau.",
    },
    {
      slug: "trastevere-lanes",
      citySlug: "rome",
      name: "Ruelles du Trastevere",
      lat: 41.8896,
      lng: 12.4695,
      kind: "experience",
      needsBooking: false,
      tip: "Flânez dans les ruelles pavées le matin pour les photos de lierre et de linge étendu sans la foule, puis revenez après 20h pour l'ambiance dîner et verres. Visez les rues autour de la place Santa Maria in Trastevere plutôt que la place elle-même, où les restaurants se reposent sur la vue. Réservez une table de trattoria : les bonnes se remplissent dès 20h30 le week-end.",
    },
    {
      slug: "campo-de-fiori",
      citySlug: "rome",
      name: "Marché du Campo de' Fiori",
      lat: 41.8956,
      lng: 12.4722,
      kind: "food",
      needsBooking: false,
      tip: "Le marché du matin se tient environ de 7h à 14h, du lundi au samedi, et il tient aujourd'hui plus du souvenir touristique que de l'épicerie locale : venez flâner et photographier plutôt que faire des affaires. Achetez des fruits, du fromage et une part de pizza bianca à la boulangerie d'angle Forno Campo de' Fiori pour un pique-nique. Le soir, la place bascule en une scène animée de bars étudiants.",
    },
    {
      slug: "castel-sant-angelo",
      citySlug: "rome",
      name: "Château Saint-Ange",
      lat: 41.9031,
      lng: 12.4663,
      kind: "sight",
      needsBooking: false,
      tip: "Le tombeau cylindrique d'Hadrien devenu forteresse papale se dresse pile entre le Vatican et le centre : associez-le donc à une matinée au Vatican. Réservez en ligne pour éviter la file, puis grimpez la rampe en spirale jusqu'à la terrasse pour l'un des plus beaux panoramas de Rome, avec la coupole de Saint-Pierre au premier plan. Le pont Saint-Ange bordé de statues, devant, est gratuit et magnifique au crépuscule.",
    },
    {
      slug: "villa-borghese",
      citySlug: "rome",
      name: "Parc de la Villa Borghèse",
      lat: 41.9142,
      lng: 12.4853,
      kind: "park",
      needsBooking: false,
      tip: "Le grand parc central de Rome est gratuit et le prolongement naturel de la galerie Borghèse qu'il abrite : profitez donc des heures alentour avant ou après votre créneau. Marchez jusqu'à la terrasse du Pincio, sur le bord ouest, pour une vue gratuite et large sur la Piazza del Popolo et les toits vers Saint-Pierre, superbe au coucher du soleil. Louez un vélo ou une barque sur le petit lac si vous voyagez avec des enfants.",
    },
    {
      slug: "jewish-ghetto-food",
      citySlug: "rome",
      name: "Ghetto juif",
      lat: 41.8925,
      lng: 12.4778,
      kind: "food",
      needsBooking: false,
      tip: "Le vieux quartier juif de Rome, autour de la Via del Portico d'Ottavia, est l'endroit pour les carciofi alla giudia, l'artichaut aplati puis frit, meilleur d'octobre au printemps quand ils sont de saison. Venez pour un déjeuner tardif, commandez l'artichaut frit et le baccala, et prenez une pâtisserie à l'historique boulangerie Boccione, à l'angle. Notez que le quartier est calme le samedi pour le shabbat.",
    },
  ],

  itineraries: [
    {
      citySlug: "rome",
      days: 2,
      summary:
        "Deux jours couvrent les incontournables de Rome, mais c'est une course aux temps forts et vous la ressentirez, car Rome exige vraiment trois jours. En 48 heures, vous pouvez faire la Rome antique (Colisée, Forum, Palatin) le premier jour et le Vatican plus le coeur des places (Panthéon, Trevi, Navone) le second, avec le dîner au Trastevere les deux soirs. Ce qu'il faut couper : la galerie Borghèse, la Villa Borghèse, les intérieurs du château Saint-Ange, la cuisine de Testaccio et toute flânerie lente : c'est une marche, pas une promenade. Cela convient à un week-end, une escale ou un premier aperçu avant de combiner avec Florence. Les non-négociables : réservez le billet combiné Colisée-Forum et le créneau de 8h du Vatican avant de partir, sinon vous perdez en files des heures que vous ne pouvez pas vous permettre sur deux jours. Installez-vous au Centro Storico pour que les deux matinées démarrent à pied et que les soirées vous laissent à deux pas du dîner. Si vous gagnez un troisième jour, ajoutez la Borghèse et ralentissez : c'est la meilleure amélioration possible.",
      stayNeighborhoodSlug: "centro-storico",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Rome antique : Colisée, Forum, Palatin",
          morning: [
            {
              poiSlug: "colosseum",
              text: "Commencez au Colisée pour votre créneau d'ouverture réservé à l'avance, avant que les files et la chaleur ne montent. Faites le tour des deux niveaux pour la vue complète de l'arène, puis sortez vers le Forum avec le même billet combiné.",
              durationMin: 90,
            },
            {
              poiSlug: "roman-forum-palatine",
              text: "Entrez au Forum romain et grimpez le mont Palatin voisin avec le même billet. Montez d'abord le Palatin pour la vue plongeante sur les ruines, puis serpentez à travers les temples et les arcs du Forum avant le zénith de midi.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              text: "Déjeunez et récupérez à Monti, à dix minutes à pied du Forum, dans un bar à vin ou une trattoria autour de la Piazza della Madonna dei Monti. C'est l'antidote local aux cafés touristiques juste à côté du Colisée.",
              durationMin: 90,
            },
            {
              text: "Détour par le Capitole et la Piazza del Campidoglio de Michel-Ange, puis la terrasse gratuite derrière pour une vue en surplomb sur le Forum que vous venez de parcourir. Cinq minutes de montée pour le meilleur point de vue gratuit sur la Rome antique.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "trastevere-lanes",
              text: "Traversez le fleuve vers le Trastevere pour la soirée, en flânant dans les ruelles pavées à mesure que les bars se remplissent. Réservez une table de trattoria vers 20h30 : les bonnes, hors de la place principale, sont pleines à cette heure toute soirée animée.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Le Vatican et le coeur des places",
          morning: [
            {
              poiSlug: "vatican-museums",
              text: "Soyez aux Musées du Vatican pour votre créneau de 8h réservé à l'avance et filez droit vers la chapelle Sixtine avant que les galeries ne se bouchent à 10h. Le mercredi est la matinée la plus calme car l'audience papale attire la foule sur la place.",
              durationMin: 150,
            },
            {
              poiSlug: "st-peters-basilica",
              text: "Marchez ensuite jusqu'à la basilique Saint-Pierre, entrée gratuite avec épaules et genoux couverts. Si vos jambes suivent, payez le petit supplément pour la montée à la coupole et la vue plongeante sur la nef et sur la ville.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "pantheon",
              text: "Retraversez le fleuve et gagnez le Panthéon, le bâtiment le mieux conservé de la Rome antique, en entrant sur votre créneau horodaté si c'est le week-end. Placez-vous sous l'oculus ouvert, puis prenez un café dans l'un des bars historiques de la place.",
              durationMin: 75,
            },
            {
              poiSlug: "piazza-navona",
              text: "Marchez deux minutes jusqu'à la place Navone pour la fontaine des Quatre-Fleuves du Bernin sur son empreinte de stade antique baroque. Continuez d'une rue vers l'ouest pour un verre à des prix non touristiques.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "trevi-fountain",
              text: "Bouclez vers la fontaine de Trevi le soir, quand la foule s'allège un peu et que le marbre est éclairé. Jetez la pièce, puis montez à la place d'Espagne, à quelques minutes, pour l'escalier illuminé.",
              durationMin: 60,
            },
            {
              text: "Terminez par un dîner au Centro Storico près de votre hôtel, en réservant partout où il y a un nom. Concluez la soirée avec une glace d'un vrai glacier, celui qui garde ses bacs couverts et rangés bas, pas empilés haut en volutes fluo.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "rome",
      days: 3,
      summary:
        "Oui, trois jours est la bonne durée pour Rome, et c'est ce que nous recommandons pour une première visite. Cela donne une journée entière à la Rome antique (Colisée, Forum, Palatin, plus Monti), au Vatican sa propre matinée suivie du château Saint-Ange, et un jour dédié au coeur des places : Panthéon, Trevi, Navone, la place d'Espagne et le Campo de' Fiori. Vous mangez bien dans trois quartiers différents, casez à la fois le Trastevere et une vraie soirée de trattoria romaine, et avancez à un rythme qui vous laisse vous asseoir sur une place plutôt que de la traverser au pas de course. Ce qui saute quand même : la galerie Borghèse, la Villa Borghèse et la scène gastronomique de Testaccio, précisément ce qu'ajoute un quatrième jour. Cela convient aux primo-visiteurs, aux couples et à quiconque enchaîne ensuite sur Florence. Logez à Monti : à pied du Colisée, sur le métro Cavour et près de Termini pour le saut au Vatican, et ses bars à vin en font la meilleure base pour les soirées. Réservez le billet Colisée-Forum et le créneau de 8h du Vatican avant de partir.",
      stayNeighborhoodSlug: "monti",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Rome antique : Colisée, Forum, Palatin, Monti",
          morning: [
            {
              poiSlug: "colosseum",
              text: "Commencez au Colisée pour votre créneau d'ouverture réservé à l'avance, avant les files et la chaleur. Parcourez les deux niveaux pour la vue complète de l'arène, puis rejoignez le Forum avec le même billet combiné.",
              durationMin: 90,
            },
            {
              poiSlug: "roman-forum-palatine",
              text: "Entrez ensuite au Forum romain et au mont Palatin, en passant par la porte plus calme de la Via di San Gregorio. Montez d'abord le Palatin pour la vue d'ensemble des ruines, puis redescendez à travers le Forum avant que le soleil ne soit au zénith.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              text: "Déjeunez à Monti, à courte distance à pied du Forum, dans une trattoria ou une enoteca autour de la Piazza della Madonna dei Monti. Prenez votre temps : vous avez mérité la pause après une matinée debout dans les ruines.",
              durationMin: 90,
            },
            {
              text: "Grimpez le Capitole jusqu'à la Piazza del Campidoglio de Michel-Ange et la terrasse gratuite derrière pour un panorama sur le Forum. Si vous avez de l'énergie, les Musées du Capitole abritent ici la louve de bronze originale et une superbe collection antique.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Restez à Monti pour la soirée, en buvant un verre sur les marches de la fontaine de la place principale comme les habitants avant le dîner. Les bars à vin et les petites trattorias du quartier sont à quelques pas de votre hôtel.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Le Vatican et le château Saint-Ange",
          morning: [
            {
              poiSlug: "vatican-museums",
              text: "Soyez aux Musées du Vatican pour votre créneau réservé de 8h et filez droit vers la chapelle Sixtine avant la cohue. Le mercredi matin est le plus calme car l'audience papale attire la foule sur la place à la place.",
              durationMin: 150,
            },
            {
              poiSlug: "st-peters-basilica",
              text: "Marchez jusqu'à la basilique Saint-Pierre, entrée gratuite avec épaules et genoux couverts. Payez le petit supplément pour la montée à la coupole si vos jambes le permettent : la vue sur la nef et sur Rome en est la récompense.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              text: "Déjeunez à Prati, à quelques rues du Vatican, où les restaurants sont fiables et sans la majoration des cars de tourisme que l'on subit juste à côté de Saint-Pierre. Un bon endroit pour ralentir avant la visite de l'après-midi.",
              durationMin: 75,
            },
            {
              poiSlug: "castel-sant-angelo",
              text: "Marchez jusqu'au château Saint-Ange, entre le Vatican et le fleuve, en réservant en ligne pour éviter la file. Grimpez la rampe en spirale jusqu'à la terrasse pour un panorama avec la coupole de Saint-Pierre au premier plan, puis traversez le pont Saint-Ange bordé de statues vers le centre.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "trastevere-lanes",
              text: "Passez au Trastevere pour le dîner, en flânant dans les ruelles pavées à mesure que les bars se remplissent. Réservez une table de trattoria hors de la place principale vers 20h30, et terminez par un verre sur la place Santa Maria.",
              durationMin: 180,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Coeur des places : Panthéon, Trevi, Navone",
          morning: [
            {
              poiSlug: "pantheon",
              text: "Commencez au Panthéon à l'ouverture de 9h, sur votre créneau horodaté si c'est le week-end, pour vous tenir sous l'oculus avant la foule. Prenez un café dans un bar historique de la place, puis marchez deux minutes jusqu'à l'étape suivante.",
              durationMin: 75,
            },
            {
              poiSlug: "piazza-navona",
              text: "Contemplez la place Navone et la fontaine des Quatre-Fleuves du Bernin sur l'empreinte d'un stade antique. Photographiez-la, puis faites un pas d'une rue hors de la place pour un verre à prix raisonnable.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "campo-de-fiori",
              text: "Marchez jusqu'au Campo de' Fiori pour la fin du marché matinal, en attrapant des fruits et une part de pizza bianca au Forno Campo de' Fiori pour un déjeuner léger. Puis obliquez vers le ghetto juif tout proche pour un artichaut frit si vous préférez vous asseoir.",
              durationMin: 90,
            },
            {
              poiSlug: "trevi-fountain",
              text: "Bouclez vers la fontaine de Trevi, en acceptant qu'après-midi signifie foule, et jetez la pièce par-dessus l'épaule gauche. Puis montez à la place d'Espagne, quelques minutes plus loin, et jusqu'à l'église de la Trinité-des-Monts pour la vue gratuite sur les toits.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "spanish-steps",
              text: "Attardez-vous autour de la place d'Espagne et des rues commerçantes élégantes en contrebas à la tombée du jour, puis dérivez vers le centre. Tout ici est à courte distance à pied, alors flânez plutôt que planifiez.",
              durationMin: 60,
            },
            {
              text: "Réservez un dîner d'adieu au Centro Storico ou de retour à Monti, en vous faisant un peu plaisir pour votre dernier repas romain. Terminez par une glace d'un glacier sérieux, du genre qui garde ses bacs couverts et rangés bas.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "rome",
      days: 4,
      summary:
        "Quatre jours sont le point idéal pour une première visite de Rome, qui transforme la course aux visites en véritables vacances. Les jours un à trois couvrent l'essentiel : la Rome antique (Colisée, Forum, Palatin), le Vatican avec le château Saint-Ange, et le coeur des places, Panthéon, Trevi et Navone, chacun sans se presser. Le quatrième jour est la soupape, construit autour de la galerie Borghèse, qui doit être réservée à l'avance sur un créneau horodaté strict et ne peut se visiter sans lui, suivie des jardins de la Villa Borghèse et d'un long et gourmand après-midi culinaire à travers le Trastevere ou Testaccio. Cette durée convient aux voyageurs qui détestent la marche forcée, aux couples et à quiconque a des vols qui encadrent mal le séjour. Pour quatre jours, nous recommandons de loger au Trastevere : vous avez accepté un rythme plus lent, et ses ruelles et trattorias font du retour au bercail chaque soir le meilleur moment de la journée. Au-delà de quatre jours, ajoutez une excursion d'une journée à Tivoli pour la villa d'Hadrien, ou enchaînez sur Florence en train rapide en une heure et demie. Réservez le Colisée, le Vatican et surtout la Borghèse bien à l'avance.",
      stayNeighborhoodSlug: "trastevere",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Rome antique : Colisée, Forum, Palatin",
          morning: [
            {
              poiSlug: "colosseum",
              text: "Commencez au Colisée pour votre créneau d'ouverture réservé, avant les files et la chaleur. Faites le tour des deux niveaux, puis passez au Forum avec le même billet combiné.",
              durationMin: 90,
            },
            {
              poiSlug: "roman-forum-palatine",
              text: "Entrez au Forum romain et au mont Palatin sur le même billet, en passant par la porte plus calme de San Gregorio. Montez d'abord le Palatin pour la vue d'ensemble, puis redescendez à travers le Forum avant midi.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              text: "Déjeunez à Monti près du Forum, dans un bar à vin ou une trattoria autour de la Piazza della Madonna dei Monti. Ralentissez : l'après-midi est délibérément léger le premier jour.",
              durationMin: 90,
            },
            {
              text: "Grimpez le Capitole pour la Piazza del Campidoglio de Michel-Ange et la terrasse gratuite derrière, dominant le Forum. Les Musées du Capitole sont ici le meilleur ajout si vous voulez plus de Rome antique.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Rentrez au Trastevere pour le dîner, en vous installant dans le quartier que vous appelez chez vous. Réservez une trattoria hors de la place principale et terminez par un verre sur la place Santa Maria.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Le Vatican et le château Saint-Ange",
          morning: [
            {
              poiSlug: "vatican-museums",
              text: "Soyez aux Musées du Vatican pour votre créneau de 8h et filez droit vers la chapelle Sixtine avant que les galeries ne se remplissent. Le mercredi est la matinée la plus calme, car l'audience papale attire la foule sur la place.",
              durationMin: 150,
            },
            {
              poiSlug: "st-peters-basilica",
              text: "Marchez jusqu'à la basilique Saint-Pierre, gratuite avec épaules et genoux couverts. Payez la montée à la coupole si vos jambes le permettent, pour la vue sur la nef et sur toute la ville.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              text: "Déjeunez à Prati près du Vatican, où la cuisine est fiable et sans la majoration des groupes que l'on subit près de Saint-Pierre. Une bonne pause avant l'après-midi.",
              durationMin: 75,
            },
            {
              poiSlug: "castel-sant-angelo",
              text: "Marchez jusqu'au château Saint-Ange, en réservant en ligne pour éviter la file, et grimpez la rampe jusqu'à la terrasse pour le panorama sur la coupole de Saint-Pierre. Traversez le pont Saint-Ange bordé de statues vers le centre au crépuscule.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "piazza-navona",
              text: "Flânez sur la place Navone en soirée pour la fontaine du Bernin illuminée et la place à son plus calme. Prenez un apéritif à une rue de la place, là où les prix restent sensés.",
              durationMin: 60,
            },
            {
              text: "Dîner de retour au Trastevere, en flânant dans les ruelles en chemin. Les bonnes tables se remplissent dès 20h30 le week-end, alors réservez à l'avance.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Coeur des places : Panthéon, Trevi, Navone",
          morning: [
            {
              poiSlug: "pantheon",
              text: "Commencez au Panthéon à l'ouverture de 9h, sur votre créneau horodaté si c'est le week-end, pour saisir l'oculus avant la foule. Café dans un bar historique de la place, puis continuez.",
              durationMin: 75,
            },
            {
              poiSlug: "campo-de-fiori",
              text: "Marchez jusqu'au Campo de' Fiori pour le marché matinal et une part de pique-nique au Forno Campo de' Fiori. Obliquez vers le ghetto juif tout proche pour un artichaut frit si vous préférez un déjeuner assis.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "trevi-fountain",
              text: "Gagnez la fontaine de Trevi, jetez la pièce par-dessus l'épaule gauche et acceptez la foule de l'après-midi. Puis montez à la place d'Espagne et jusqu'à la Trinité-des-Monts pour la vue gratuite sur les toits.",
              durationMin: 90,
            },
            {
              poiSlug: "spanish-steps",
              text: "Flânez dans les rues élégantes en contrebas de la place d'Espagne, en lèche-vitrines le long de la Via dei Condotti et de ses griffes. Tout ici est à courte distance à pied, alors dérivez plutôt que marchez au pas.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Dîner au Centro Storico ou de retour au Trastevere, en réservant partout où l'établissement est bien noté. Terminez par une glace d'un glacier sérieux, bacs rangés couverts et bas, pas en volutes hautes.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Borghèse, parc de la Villa Borghèse et un après-midi gourmand",
          morning: [
            {
              poiSlug: "galleria-borghese",
              text: "Utilisez votre créneau horodaté de deux heures réservé à l'avance à la galerie Borghèse, en arrivant 15 minutes avant pour le contrôle des sacs obligatoire. Les sculptures du Bernin et la salle des Caravage sont le sommet de tout itinéraire artistique romain, et deux heures suffisent vraiment pour la villa compacte.",
              durationMin: 120,
            },
            {
              poiSlug: "villa-borghese",
              text: "Débouchez dans le parc alentour de la Villa Borghèse, gratuit et vert, et marchez jusqu'à la terrasse du Pincio, sur le bord ouest. La vue sur la Piazza del Popolo et les toits vers Saint-Pierre est l'une des plus belles de la ville, et gratuite.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "jewish-ghetto-food",
              text: "Consacrez l'après-midi à manger : soit le ghetto juif pour les carciofi alla giudia et le baccala avec une pâtisserie de Boccione, soit le métro vers Testaccio pour son marché couvert et ses trattorias d'abats à l'ancienne. Les deux sont affaire de cuisine, pas de sites.",
              durationMin: 120,
            },
            {
              text: "Éliminez-le par une boucle lente à travers le Trastevere à l'heure dorée, quand les ruelles se photographient le mieux et que les excursionnistes sont partis. Une glace ou un apéritif précoce vous mène jusqu'au dîner.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Réservez un dîner d'adieu au Trastevere, en dépensant un peu plus pour votre dernier repas romain dans une trattoria repérée plus tôt. Cacio e pepe, carbonara ou saltimbocca : c'est le repas pour jouer les classiques.",
              durationMin: 120,
            },
            {
              text: "Terminez par un dernier verre sur la place Santa Maria ou dans un bar de ruelle tranquille, à courte distance à pied de votre lit. Aucun trajet de retour à prévoir, ce qui est tout l'intérêt de loger ici pour quatre jours.",
              durationMin: 45,
            },
          ],
        },
      ],
    },
  ],
};

export default romeFr;
