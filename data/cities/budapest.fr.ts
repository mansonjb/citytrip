import type { CityData } from "../types";

const budapestFr: CityData = {
  city: {
    slug: "budapest",
    name: "Budapest",
    country: "Hongrie",
    countrySlug: "hungary",
    lat: 47.4979,
    lng: 19.0402,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "BUD",
    airportToCenter:
      "Le bus express 100E de l'aéroport rejoint directement Deak Ferenc ter dans le centre, environ 40 minutes pour à peu près 2,20 EUR (2200 HUF). Achetez le billet 100E dédié à la machine de l'arrêt ; un billet simple standard n'est pas valable sur cette ligne.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [8],
    monthlyNotes: {
      1: "Froid et souvent gris, avec des maximales autour de 2C et des minimales sous zéro, mais les bains thermaux sont à leur plus magique avec la vapeur qui s'élève des bassins extérieurs. Les tarifs hôteliers touchent leur plancher annuel et les grands sites sont presque vides une fois les marchés de Noël fermés le 1er janvier.",
      2: "Toujours glacial, calme et bon marché, le dernier mois complet avant le retour des prix de printemps. Les bains Szechenyi et Gellert sont le refuge évident ; prévoyez des minimales autour de moins 2C et peu de lumière.",
      3: "Les journées grimpent vers 12C et les premiers événements viticoles de printemps apparaissent dans les bars à vin et les caves. La foule reste légère la plupart du mois et les chambres sont nettement moins chères qu'à partir d'avril.",
      4: "Le vrai printemps autour de 17C, les floraisons sur l'île Marguerite et les premières terrasses de bateaux-mouches et de ruin bars qui rouvrent. Le week-end de Pâques est chargé, alors réservez la visite du Parlement à l'avance si vos dates coïncident.",
      5: "L'un des deux meilleurs mois, avec des maximales près de 22C, de longues journées de lumière et des terrasses pleines le long du Danube. Les prix atteignent les sommets d'intersaison et la ville se remplit pour le week-end de la Pentecôte, alors réservez tôt.",
      6: "Chaud à environ 26C avec de longues soirées et les terrasses de bars à vin et à bière artisanale en pleine effervescence. La foule augmente régulièrement mais reste sous le pic d'août ; venez avant l'arrivée de la vraie chaleur.",
      7: "Chaud à environ 29C et animé, avec les piscines en plein air et la brise du Danube pour se rafraîchir. Faites tôt les sites exposés au soleil comme la colline Gellert et le Bastion des pêcheurs, puis repliez-vous vers un bain ombragé ou une terrasse l'après-midi.",
      8: "Le mois à éviter : pic de chaleur à 29C, la plus forte affluence de l'année et le festival Sziget qui se pose sur l'île d'Obuda mi-août, ce qui inonde la ville de 400 000 visiteurs et pousse les tarifs des chambres à la hausse. Si vous venez maintenant, réservez très à l'avance et prévoyez des après-midi en intérieur ou au bord de l'eau.",
      9: "L'un des meilleurs mois, avec des maximales autour de 24C, une foule qui s'éclaircit après la première semaine et des événements viticoles de vendange dans les caves. Les prix se détendent ; c'est l'alternative maligne à l'été.",
      10: "Des journées vives à 17C et de belles couleurs d'automne sur la colline Gellert et l'île Marguerite. Le nombre de touristes chute après la mi-mois et les tarifs hôteliers suivent, tandis que les bains sont particulièrement agréables à mesure que l'air fraîchit.",
      11: "Gris et froid avec des maximales autour de 8C, la période la plus calme de l'année jusqu'à l'ouverture des marchés de Noël fin novembre à Vorosmarty ter et devant la basilique Saint-Étienne. Fin novembre est un bon compromis : toute l'ambiance des marchés sans la densité de décembre.",
      12: "Les marchés de Noël à Vorosmarty ter et devant la basilique Saint-Étienne s'étendent de fin novembre à début janvier et attirent une forte foule le week-end, la place de la basilique ajoutant un spectacle de lumières et une patinoire. Attendez-vous à des minimales sous zéro, du vin chaud partout et des tarifs de décembre bien au-dessus de la norme hivernale.",
    },
    climate: {
      1: { highC: 2, lowC: -3, rainyDays: 8 },
      2: { highC: 5, lowC: -2, rainyDays: 7 },
      3: { highC: 12, lowC: 2, rainyDays: 7 },
      4: { highC: 17, lowC: 6, rainyDays: 8 },
      5: { highC: 22, lowC: 11, rainyDays: 9 },
      6: { highC: 26, lowC: 14, rainyDays: 9 },
      7: { highC: 29, lowC: 16, rainyDays: 8 },
      8: { highC: 29, lowC: 15, rainyDays: 7 },
      9: { highC: 24, lowC: 11, rainyDays: 6 },
      10: { highC: 17, lowC: 7, rainyDays: 7 },
      11: { highC: 8, lowC: 3, rainyDays: 8 },
      12: { highC: 3, lowC: -1, rainyDays: 9 },
    },
    budgetLevel: "low",
    budgetPerDay: { budget: 55, mid: 105, high: 210 },
    tagline: "Bains thermaux, grands boulevards, ruin bars, prix bas.",
    heroIntro:
      "Budapest se partage de part et d'autre du Danube entre Buda la vallonnée, avec son château, et le côté Pest, plat et grandiose, où se joue l'essentiel de la vie. C'est l'une des capitales classiques les moins chères d'Europe, et les bains thermaux, les ruin bars et le front de fleuve du Parlement lui donnent un mélange qu'aucune autre ville n'égale. Trois jours couvrent l'essentiel à un rythme humain ; l'astuce est de programmer tôt les points de vue exposés au soleil et de garder les bains pour quand vos jambes lâchent.",
    accent: { from: "#E0A43B", to: "#B23A6E", ink: "#6E2547" },
    neighborhoodSlugs: [
      "belvaros",
      "jewish-quarter",
      "castle-district",
      "ujlipotvaros",
      "jozsefvaros",
    ],
    nearbyCitySlugs: ["prague", "vienna"],
  },

  neighborhoods: [
    {
      slug: "belvaros",
      citySlug: "budapest",
      name: "Belvaros (District V)",
      lat: 47.4979,
      lng: 19.0513,
      bestFor: ["first-time", "romantic"],
      vibe: "Le coeur riverain de Pest, qui enveloppe le Parlement, la basilique Saint-Étienne et la rue piétonne commerçante Vaci utca. C'est le quartier le plus soigné et le plus central, accessible à pied vers presque tout côté Pest et à un pont du château de Buda. Animé et un peu formel en journée, il se calme une fois les boutiques fermées.",
      pros: [
        "Le Parlement, la basilique et le pont des Chaînes tous à une courte marche",
        "Le plus large choix d'hôtels et un accès facile au métro sur les trois lignes",
        "Aucun transport nécessaire pour un séjour de 2 jours",
      ],
      cons: [
        "Les restaurants le long de Vaci utca sont des pièges à touristes hors de prix",
        "L'ambiance la moins locale de tous les quartiers centraux",
        "Les tarifs des chambres sont 20 à 30 pour cent au-dessus des quartiers périphériques",
      ],
    },
    {
      slug: "jewish-quarter",
      citySlug: "budapest",
      name: "Jewish Quarter (Erzsebetvaros, District VII)",
      lat: 47.4979,
      lng: 19.0662,
      bestFor: ["nightlife", "local", "budget"],
      vibe: "L'ancien quartier juif devenu moteur de la vie nocturne, avec la synagogue de la rue Dohany et les ruin bars (bars aménagés dans des immeubles en ruine) dans des cours délabrées. De jour c'est street art, café de troisième vague et boulangeries casher ; à la nuit tombée, c'est la scène de bars la plus dense de la ville. Central, bon marché et bruyant comme il faut.",
      pros: [
        "Le Szimpla Kert et toute la scène des ruin bars devant votre porte",
        "La meilleure cuisine décontractée et le meilleur café de la ville à prix locaux",
        "Dix minutes à pied de la basilique et du fleuve",
      ],
      cons: [
        "Le bruit des bars sur les rues principales jusqu'au petit matin le week-end",
        "Certains pâtés sont miteux et en pleine rénovation",
        "Pas le quartier pour se coucher tôt ou un séjour tranquille",
      ],
    },
    {
      slug: "castle-district",
      citySlug: "budapest",
      name: "Castle District (Var, District I)",
      lat: 47.4967,
      lng: 19.0347,
      bestFor: ["romantic", "first-time"],
      vibe: "La colline pavée côté Buda qui abrite le château de Buda, l'église Matthias et le Bastion des pêcheurs. Elle se vide complètement une fois les visiteurs d'un jour repartis en fin d'après-midi, et les vues du soir sur Pest sont les plus belles de la ville. Loger ici, c'est avoir les sites côté château pour vous avant l'arrivée de la foule.",
      pros: [
        "Le château de Buda, l'église Matthias et le Bastion des pêcheurs à pied",
        "Des soirées calmes et vraiment atmosphériques une fois la foule partie",
        "Le plus beau panorama de coucher de soleil sur le Danube et le Parlement",
      ],
      cons: [
        "Les rues pavées en pente sont pénibles avec des bagages ou une poussette",
        "Peu de supermarchés et une restauration décontractée limitée là-haut sur la colline",
        "Vous traversez le fleuve pour la plupart des sorties et des besoins du quotidien",
      ],
    },
    {
      slug: "ujlipotvaros",
      citySlug: "budapest",
      name: "Ujlipotvaros (District XIII)",
      lat: 47.5147,
      lng: 19.0509,
      bestFor: ["local", "family", "romantic"],
      vibe: "Une trame résidentielle et verdoyante juste au nord du Parlement, tout en immeubles Bauhaus, rues bordées d'arbres et bistrots de quartier. C'est là que vivent vraiment les locaux qui ont le choix, et la scène des restos et des cafés le reflète. Le centre est à 15 minutes de marche ou deux arrêts de tram, et l'île Marguerite est devant la porte.",
      pros: [
        "La meilleure cuisine et les meilleurs cafés locaux à des prix honnêtes, non touristiques",
        "Des rues calmes, plates et adaptées aux poussettes et la promenade du bord du fleuve",
        "L'île Marguerite et le Parlement tous deux à une courte marche",
      ],
      cons: [
        "Vous marchez ou prenez le tram pour la plupart des grands sites, même si c'est court",
        "Calme le soir si vous voulez la vie nocturne devant votre porte",
      ],
    },
    {
      slug: "jozsefvaros",
      citySlug: "budapest",
      name: "Jozsefvaros (District VIII)",
      lat: 47.4889,
      lng: 19.0708,
      bestFor: ["budget", "local"],
      vibe: "Un grand quartier mixte derrière le Grand Boulevard, rugueux sur les bords mais qui s'embourgeoise vite autour du quartier des musées et du Corvin Quarter. Il abrite le Musée national hongrois et certaines des chambres les moins chères assez centrales de la ville. Inégal d'un pâté à l'autre mais qui progresse vite et bien desservi.",
      pros: [
        "Les prix de chambre les plus bas à distance de marche du centre",
        "Le Musée national hongrois et les grandes façades du Palace Quarter",
        "De bonnes liaisons de métro et de tram dans tout le quartier",
      ],
      cons: [
        "Certains pâtés vers la lisière extérieure semblent encore négligés",
        "Moins de sites que les quartiers du bord du fleuve",
        "La qualité des rues varie fortement d'un pâté à l'autre",
      ],
    },
  ],

  pois: [
    {
      slug: "szechenyi-chain-bridge",
      citySlug: "budapest",
      name: "Szechenyi Chain Bridge",
      lat: 47.4988,
      lng: 19.0435,
      kind: "sight",
      needsBooking: false,
      tip: "Traversez ce pont des Chaînes au crépuscule, quand les lions et toute la travée s'illuminent et que le château brille derrière ; le bout côté Pest, près de Roosevelt ter, offre la meilleure photo vers Buda. C'est gratuit et ouvert jour et nuit, alors traversez-le tard, une fois le flot piéton de la journée dissipé.",
    },
    {
      slug: "hungarian-parliament",
      citySlug: "budapest",
      name: "Hungarian Parliament",
      lat: 47.5072,
      lng: 19.0456,
      kind: "sight",
      needsBooking: true,
      tip: "L'intérieur du Parlement se visite uniquement en visite guidée et les créneaux en anglais partent plusieurs jours à l'avance en saison, alors achetez en ligne bien avant d'arriver plutôt que de miser sur le guichet. Choisissez un créneau tôt, et photographiez l'extérieur depuis le quai de Batthyany ter côté Buda pour toute la façade riveraine.",
    },
    {
      slug: "buda-castle",
      citySlug: "budapest",
      name: "Buda Castle",
      lat: 47.496,
      lng: 19.0397,
      kind: "sight",
      needsBooking: false,
      tip: "Les cours, remparts et terrasses du château de Buda sont gratuits et ouverts toute la journée, vous ne payez donc que si vous entrez à la Galerie nationale ou au Musée d'histoire à l'intérieur. Évitez la file du funiculaire depuis le pont des Chaînes et montez plutôt par les escaliers du jardin Varkert Bazar ou prenez le bus 16, tous deux plus rapides et moins chers.",
    },
    {
      slug: "fishermans-bastion",
      citySlug: "budapest",
      name: "Fishermans Bastion",
      lat: 47.5025,
      lng: 19.0347,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Les terrasses basses du Bastion des pêcheurs sont gratuites et les petites tours hautes ne sont payantes que dans la journée, alors arrivez avant 9h et vous parcourez le niveau supérieur gratuitement avec la vue sur le Parlement pour vous seul. C'est le panorama carte postale de Budapest ; le lever du soleil et la fin de soirée sont les deux fenêtres sans foule.",
    },
    {
      slug: "matthias-church",
      citySlug: "budapest",
      name: "Matthias Church",
      lat: 47.5019,
      lng: 19.0343,
      kind: "sight",
      needsBooking: true,
      tip: "Le toit en tuiles colorées de l'église Matthias est l'attrait et vous pouvez l'admirer gratuitement de l'extérieur, mais l'intérieur aux murs peints demande un billet, alors achetez en ligne pour sauter la petite file. Elle jouxte le Bastion des pêcheurs, alors associez les deux et faites-les à l'ouverture avant l'arrivée des groupes.",
    },
    {
      slug: "st-stephens-basilica",
      citySlug: "budapest",
      name: "St Stephen's Basilica",
      lat: 47.5008,
      lng: 19.054,
      kind: "sight",
      needsBooking: false,
      tip: "L'entrée dans la nef de la basilique Saint-Étienne ne demande qu'un don suggéré, mais la terrasse panoramique du dôme coûte un petit droit et le vaut, atteinte par un ascenseur puis une courte montée d'escalier. Montez dans la dernière heure avant la fermeture pour une lumière plus douce sur les toits de Pest et moins de monde au sommet.",
    },
    {
      slug: "szechenyi-baths",
      citySlug: "budapest",
      name: "Szechenyi Thermal Baths",
      lat: 47.5186,
      lng: 19.0817,
      kind: "experience",
      needsBooking: true,
      tip: "Les bains Szechenyi sont moins chers en semaine que le week-end, et réserver en ligne avec une cabine (pas seulement un casier) évite la file d'entrée et vous donne un endroit privé pour vous changer. Apportez votre propre serviette et vos tongs pour éviter les frais de location, et allez-y tôt le matin ou après 17h pour esquiver la cohue de midi dans les bassins extérieurs.",
    },
    {
      slug: "gellert-hill",
      citySlug: "budapest",
      name: "Gellert Hill & Citadella Viewpoint",
      lat: 47.4869,
      lng: 19.0447,
      kind: "viewpoint",
      needsBooking: false,
      tip: "La montée de la colline Gellert depuis le côté Buda du pont Élisabeth prend environ 25 minutes et vous récompense du plus large panorama sur les deux rives et de la statue de la Liberté. Allez-y le matin pour des photos de Pest sans contre-jour, emportez de l'eau en été car le sentier est en plein soleil, et le point de vue lui-même est gratuit.",
    },
    {
      slug: "central-market-hall",
      citySlug: "budapest",
      name: "Central Market Hall",
      lat: 47.4869,
      lng: 19.0586,
      kind: "food",
      needsBooking: false,
      tip: "Venez avant midi au Grand Marché couvert pour les produits frais et le paprika aux prix du rez-de-chaussée ; les stands de restauration à l'étage sont plus chers et orientés touristes, alors mangez un langos (galette frite) dans un petit endroit local à la place. Il ferme tôt le samedi après-midi et reste clos le dimanche, alors calez votre visite et payez par carte car tous les stands ne la prennent pas.",
    },
    {
      slug: "dohany-street-synagogue",
      citySlug: "budapest",
      name: "Dohany Street Synagogue",
      lat: 47.4956,
      lng: 19.0608,
      kind: "sight",
      needsBooking: true,
      tip: "C'est la plus grande synagogue d'Europe et l'entrée inclut le jardin du souvenir et le musée, mais les billets sont horodatés et se vendent à midi en saison, alors réservez un créneau tôt en ligne. Elle ferme le samedi pour le Shabbat et lors des fêtes juives, alors vérifiez la date, et habillez-vous les épaules couvertes.",
    },
    {
      slug: "szimpla-kert",
      citySlug: "budapest",
      name: "Szimpla Kert (Ruin Bar)",
      lat: 47.4977,
      lng: 19.0637,
      kind: "experience",
      needsBooking: false,
      tip: "Le premier des ruin bars se découvre le mieux avant 20h, quand vous pouvez vraiment apprécier les cours en art de récup sans la cohue et le droit d'entrée de fin de soirée. Le dimanche matin, il se transforme en marché de producteurs à l'atmosphère très différente et calme, c'est la façon locale d'y aller.",
    },
    {
      slug: "shoes-on-the-danube",
      citySlug: "budapest",
      name: "Shoes on the Danube Memorial",
      lat: 47.5041,
      lng: 19.0447,
      kind: "sight",
      needsBooking: false,
      tip: "Les soixante chaussures de fer sur le quai (le mémorial des Chaussures au bord du Danube) commémorent les Juifs abattus dans le fleuve en 1944, et cela ne prend que dix minutes recueillies mais ne doit pas être bâclé. Il se trouve sur la promenade de Pest entre le pont des Chaînes et le Parlement, alors intégrez-le à cette balade riveraine plutôt qu'un déplacement dédié.",
    },
    {
      slug: "vaci-street",
      citySlug: "budapest",
      name: "Vaci Street",
      lat: 47.4934,
      lng: 19.0537,
      kind: "sight",
      needsBooking: false,
      tip: "Traitez Vaci utca comme une traversée de 15 minutes, pas un lieu où manger ou faire ses courses ; les cafés y facturent le double et les bureaux de change de la rue offrent parmi les pires taux de la ville. La monnaie est le forint, pas l'euro, alors payez en HUF, utilisez un distributeur d'une vraie banque et ignorez totalement les guichets de change de rue.",
    },
    {
      slug: "margaret-island",
      citySlug: "budapest",
      name: "Margaret Island",
      lat: 47.5266,
      lng: 19.0475,
      kind: "park",
      needsBooking: false,
      tip: "Ce parc insulaire sans voitures au milieu du Danube (l'île Marguerite) est gratuit et se profite le mieux à pied ou à vélo de location, avec une fontaine musicale près de l'extrémité sud qui se déclenche à chaque heure pile. Venez en fin d'après-midi, marchez depuis l'arrêt de tram du pont Marguerite, et attrapez le spectacle de lumières du soir de la fontaine si vous restez après le crépuscule en été.",
    },
  ],

  itineraries: [
    {
      citySlug: "budapest",
      days: 2,
      summary:
        "Deux jours suffisent pour les sites phares de Budapest si vous logez central et démarrez tôt, mais vous ne ferez qu'effleurer le côté local et les bains. Le coeur se divise nettement par le fleuve : la rive de Pest tient le Parlement, la basilique, le quartier juif et le Grand Marché, tandis que la colline de Buda tient le château, l'église Matthias et le Bastion des pêcheurs, tous séparés par un pont. Installez-vous à Belvaros pour que les deux matinées démarrent à pied. La structure qui marche est une journée par rive : le premier jour pour Pest et le quartier juif, le second pour la colline du château de Buda et Gellert. Réservez la visite du Parlement et la synagogue de la rue Dohany en ligne avant d'arriver, car les billets horodatés sont la seule vraie menace pour une visite de 48 heures. Ce que vous sacrifiez, c'est une vraie séance de bains thermaux, l'île Marguerite et une soirée tranquille en ruin bar, ce qu'un troisième jour achète justement. Les prix sont bas selon les standards ouest-européens, alors mangez bien ; évitez seulement Vaci utca et payez en forint, pas en euro.",
      stayNeighborhoodSlug: "belvaros",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Front de fleuve de Pest et quartier juif",
          morning: [
            {
              poiSlug: "hungarian-parliament",
              text: "Commencez au Parlement hongrois avec une visite en anglais tôt et réservée à l'avance de l'intérieur et des joyaux de la couronne. Arrivez 15 minutes en avance au centre des visiteurs pour passer la sécurité.",
              durationMin: 90,
            },
            {
              poiSlug: "shoes-on-the-danube",
              text: "Longez le quai de Pest vers le sud jusqu'au mémorial des Chaussures au bord du Danube, un arrêt recueilli de dix minutes, puis continuez jusqu'au pont des Chaînes le long de la promenade.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "st-stephens-basilica",
              text: "Coupez vers l'intérieur jusqu'à la basilique Saint-Étienne, voyez la nef, puis prenez l'ascenseur et la courte montée jusqu'à la terrasse du dôme pour le large panorama de Pest.",
              durationMin: 75,
            },
            {
              poiSlug: "dohany-street-synagogue",
              text: "Continuez jusqu'à la synagogue de la rue Dohany pour une visite horodatée de la plus grande synagogue d'Europe et de son jardin du souvenir. Réservez le créneau en ligne la veille au soir pour éviter le sold-out de midi.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "szimpla-kert",
              text: "Baladez-vous dans le quartier juif et voyez le Szimpla Kert avant 20h tant que vous pouvez encore apprécier les cours en art de récup, puis faites la tournée des bars des rues alentour.",
              durationMin: 60,
            },
            {
              text: "Dînez à Erzsebetvaros à l'écart des artères touristiques : les petites rues autour de Kazinczy utca font de la cuisine hongroise moderne et de la street food où un repas complet avec une boisson reste bien sous 6000 HUF.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Colline du château de Buda et Gellert",
          morning: [
            {
              poiSlug: "fishermans-bastion",
              text: "Traversez le pont des Chaînes et montez au Bastion des pêcheurs avant 9h, quand les tours hautes sont gratuites et que la vue sur le Parlement de l'autre côté du fleuve est à vous seul.",
              durationMin: 60,
            },
            {
              poiSlug: "matthias-church",
              text: "Entrez juste à côté dans l'église Matthias pour l'intérieur peint avec votre billet, puis parcourez les ruelles calmes du quartier du château avant l'arrivée des groupes.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "buda-castle",
              text: "Parcourez les cours, terrasses et remparts gratuits du château de Buda pour les longues vues sur le fleuve, n'entrant à la Galerie nationale que si vous voulez l'art. Déjeunez dans un café là-haut sur la colline.",
              durationMin: 120,
            },
            {
              poiSlug: "gellert-hill",
              text: "Descendez et gravissez la colline Gellert jusqu'au point de vue de la Citadelle pour le plus large panorama sur les deux rives et la statue de la Liberté. Emportez de l'eau ; le sentier est en plein soleil.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "szechenyi-chain-bridge",
              text: "Redescendez au fleuve et traversez le pont des Chaînes au crépuscule, quand les lions et toute la travée s'illuminent et que le château brille derrière vous.",
              durationMin: 45,
            },
            {
              text: "Terminez par un dîner de retour à Belvaros dans une rue latérale à l'écart de Vaci utca, pas dessus, où un classique hongrois comme le goulash ou le poulet au paprika avec un verre de vin local garde l'addition honnête.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
    {
      citySlug: "budapest",
      days: 3,
      summary:
        "Trois jours est la bonne durée pour Budapest : assez pour les deux rives à un rythme humain, plus un long après-midi dans un bain thermal qui transforme un voyage touristique en vraie pause. Deux jours vous forcent à enchaîner Pest et la colline du château au pas de course et à sauter les bains entièrement ; le troisième jour ajoute Szechenyi, l'île Marguerite et le temps de s'attarder dans un ruin bar sans regarder l'heure. Logez dans le quartier juif, central et bon marché, avec la meilleure cuisine décontractée et la vie nocturne devant votre porte. La forme du plan : le premier jour pour le front de fleuve de Pest et le quartier juif, le deuxième pour la colline du château de Buda et Gellert, le troisième pour les bains, le marché et l'île. Réservez deux choses en ligne avant l'arrivée : la visite du Parlement et le créneau de la synagogue de la rue Dohany. Tout le reste à Budapest récompense le fait d'arriver tôt plutôt que de payer plus, et de payer en forint plutôt qu'en euro.",
      stayNeighborhoodSlug: "jewish-quarter",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Front de fleuve de Pest et la basilique",
          morning: [
            {
              poiSlug: "hungarian-parliament",
              text: "Depuis votre point de chute du quartier juif, prenez le métro jusqu'au Parlement pour votre visite matinale réservée à l'avance de l'intérieur et des joyaux de la couronne. Arrivez 15 minutes en avance pour la sécurité.",
              durationMin: 90,
            },
            {
              poiSlug: "shoes-on-the-danube",
              text: "Longez le quai de Pest vers le sud jusqu'au mémorial des Chaussures au bord du Danube, puis continuez le long de la promenade vers le pont des Chaînes.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "st-stephens-basilica",
              text: "Rejoignez l'intérieur jusqu'à la basilique Saint-Étienne pour la nef et le panorama de la terrasse du dôme sur les toits de Pest.",
              durationMin: 75,
            },
            {
              poiSlug: "szechenyi-chain-bridge",
              text: "Traversez le pont des Chaînes à pied pour la vue classique vers le château de Buda, puis revenez sur vos pas pour un café près de Roosevelt ter.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "szimpla-kert",
              text: "De retour dans le quartier juif, voyez le Szimpla Kert avant la foule tardive, puis écumez les ruin bars et les adresses de bière artisanale autour de Kazinczy utca.",
              durationMin: 90,
            },
            {
              text: "Dîner dans une rue latérale d'Erzsebetvaros : langos, petites assiettes hongroises modernes ou un bistrot, tout à une courte marche de votre lit et doux pour le budget.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Colline du château de Buda et Gellert",
          morning: [
            {
              poiSlug: "fishermans-bastion",
              text: "Traversez vers Buda et montez au Bastion des pêcheurs avant 9h pour les tours hautes gratuites et le panorama sur le Parlement sans la foule.",
              durationMin: 60,
            },
            {
              poiSlug: "matthias-church",
              text: "Visitez l'église Matthias juste à côté pour l'intérieur peint et le toit en tuiles, puis parcourez les ruelles calmes du quartier du château à l'ouverture.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "buda-castle",
              text: "Explorez les cours et terrasses gratuites du château de Buda pour les longues vues sur le fleuve et déjeunez sur la colline, ne poussant jusqu'à la Galerie nationale que si l'art vous attire.",
              durationMin: 120,
            },
            {
              poiSlug: "gellert-hill",
              text: "Longez la crête vers le sud et gravissez la colline Gellert jusqu'au point de vue de la Citadelle pour le plus large panorama sur les deux rives. Apportez de l'eau les mois chauds.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "dohany-street-synagogue",
              text: "Retraversez vers Pest et, un jour autre que le samedi, faites une visite horodatée de fin d'après-midi de la synagogue de la rue Dohany et de son jardin du souvenir avec votre billet en ligne.",
              durationMin: 75,
            },
            {
              text: "Dîner près du Grand Boulevard, puis un dernier verre tranquille dans un bar à vin du quartier juif qui verse des rouges hongrois que vous ne trouverez pas chez vous.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Bains, le marché et l'île Marguerite",
          morning: [
            {
              poiSlug: "central-market-hall",
              text: "Commencez au Grand Marché couvert avant midi pour le paprika, les produits frais et les étals du rez-de-chaussée, et mangez un langos ici ou à proximité plutôt qu'aux comptoirs plus chers de l'étage.",
              durationMin: 75,
            },
            {
              poiSlug: "vaci-street",
              text: "Parcourez toute la longueur de Vaci utca vers le centre en une flânerie de 15 minutes, en ignorant les bureaux de change, puis baladez-vous dans les rues autour de Vorosmarty ter.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "szechenyi-baths",
              text: "Prenez le métro jusqu'au parc de la Ville et passez l'après-midi aux bains thermaux Szechenyi. Réservez en ligne avec une cabine, apportez votre propre serviette et vos tongs, et allez-y une fois le pic de midi retombé.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              poiSlug: "margaret-island",
              text: "Rafraîchissez-vous sur l'île Marguerite au retour, en marchant depuis l'arrêt de tram du pont Marguerite et en attrapant la fontaine musicale à l'heure pile près de l'extrémité sud.",
              durationMin: 90,
            },
            {
              text: "Dernier dîner dans le quartier juif ou de l'autre côté à Ujlipotvaros, tous deux à un court trajet de tram et pleins de cuisines de quartier honnêtes.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
    {
      citySlug: "budapest",
      days: 4,
      summary:
        "Quatre jours, c'est plus qu'assez pour les sites de Budapest, et c'est justement l'idée : le quatrième jour convertit un sprint de monuments en un vrai voyage. Les jours un à trois couvrent le front de fleuve de Pest, la colline du château de Buda et le quartier juif à un rythme détendu ; le quatrième jour est une journée lente bâtie autour d'une longue séance de bains thermaux, de l'île Marguerite et du parc de la Ville, sans hâte ni file d'attente. Avec autant de temps, sautez le centre le plus serré et logez à Ujlipotvaros. C'est à 15 minutes de marche ou deux arrêts de tram du Parlement, moins cher pour des chambres équivalentes, et ses bistrots et la promenade de l'île Marguerite sont la raison d'être du quatrième jour. La logique d'une rive par jour tient toujours : gardez le château, l'église Matthias et Gellert ensemble côté Buda, gardez le Parlement, la basilique et le quartier juif ensemble côté Pest, et ne zigzaguez pas à travers le Danube. Réservez à l'avance la visite du Parlement et la synagogue de la rue Dohany. Si vous hésitiez entre trois et quatre jours, le quatrième jour détendu est celui dont vous vous souviendrez.",
      stayNeighborhoodSlug: "ujlipotvaros",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Front de fleuve de Pest et la basilique",
          morning: [
            {
              poiSlug: "hungarian-parliament",
              text: "Descendez à pied ou en tram d'Ujlipotvaros jusqu'au Parlement pour votre visite matinale réservée à l'avance de l'intérieur et des joyaux de la couronne, en arrivant en avance pour la sécurité.",
              durationMin: 90,
            },
            {
              poiSlug: "shoes-on-the-danube",
              text: "Suivez le quai de Pest vers le sud jusqu'au mémorial des Chaussures au bord du Danube, puis continuez à marcher sur la promenade jusqu'au pont des Chaînes.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "st-stephens-basilica",
              text: "Tournez vers l'intérieur jusqu'à la basilique Saint-Étienne pour la nef et la vue de la terrasse du dôme sur Pest, avec un déjeuner sur la place bordée de cafés devant.",
              durationMin: 90,
            },
            {
              poiSlug: "szechenyi-chain-bridge",
              text: "Traversez le pont des Chaînes à pied pour la vue vers le château, puis baladez-vous sur le front de fleuve et à Roosevelt ter avant de revenir.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "szimpla-kert",
              text: "Filez dans le quartier juif pour le Szimpla Kert avant la cohue, puis une boucle des ruin bars autour de Kazinczy utca.",
              durationMin: 90,
            },
            {
              text: "Dîner à Erzsebetvaros, puis retour en tram vers Ujlipotvaros pour un dernier verre tranquille dans l'un des bars à vin du quartier.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Colline du château de Buda et Gellert",
          morning: [
            {
              poiSlug: "fishermans-bastion",
              text: "Traversez le fleuve et montez au Bastion des pêcheurs avant 9h pour les tours hautes gratuites et le panorama sur le Parlement sans foule.",
              durationMin: 60,
            },
            {
              poiSlug: "matthias-church",
              text: "Visitez l'église Matthias juste à côté pour le toit en tuiles et l'intérieur peint, puis flânez dans les ruelles du quartier du château tant qu'elles sont encore vides.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "buda-castle",
              text: "Parcourez les terrasses et remparts gratuits du château de Buda pour les longues vues sur le fleuve et déjeunez sur la colline, n'entrant à la Galerie nationale que si vous voulez l'art.",
              durationMin: 120,
            },
            {
              poiSlug: "gellert-hill",
              text: "Prenez la crête vers le sud et gravissez la colline Gellert jusqu'au point de vue de la Citadelle pour la plus large vue sur les deux rives et la statue de la Liberté.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "szechenyi-chain-bridge",
              text: "Descendez et traversez le pont des Chaînes au crépuscule pour la travée illuminée et le château qui brille derrière vous.",
              durationMin: 45,
            },
            {
              text: "Dîner de retour côté Pest, puis une marche lente le long du front de fleuve illuminé avant le tram qui ramène à Ujlipotvaros.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Quartier juif, le marché et Vaci",
          morning: [
            {
              poiSlug: "dohany-street-synagogue",
              text: "Commencez à la synagogue de la rue Dohany un jour autre que le samedi avec votre créneau matinal réservé à l'avance, en prenant le temps du jardin du souvenir et du musée.",
              durationMin: 90,
            },
            {
              text: "Parcourez le street art et les cours du quartier juif, en vous arrêtant pour un café et une pâtisserie de boulangerie casher autour de Kazinczy utca avant que la journée ne chauffe.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "central-market-hall",
              text: "Rendez-vous au Grand Marché couvert avant sa fermeture avancée du samedi pour le paprika et les produits frais en bas, en mangeant un langos dans un petit endroit local plutôt qu'aux comptoirs touristiques de l'étage.",
              durationMin: 90,
            },
            {
              poiSlug: "vaci-street",
              text: "Flânez sur Vaci utca vers Vorosmarty ter en une traversée de 15 minutes, en sautant les bureaux de change, puis baladez-vous dans les boutiques des rues parallèles plus calmes.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Rentrez à Ujlipotvaros pour un dîner tôt dans un bistrot de quartier, puis marchez le long de la promenade riveraine vers le Parlement au moment où il s'illumine.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Bains, île Marguerite et parc de la Ville",
          morning: [
            {
              poiSlug: "margaret-island",
              text: "Démarrez tranquillement par une matinée sur l'île Marguerite, en marchant ou en louant un vélo au bout du pont Marguerite et en faisant le tour du parc sans voitures jusqu'à la fontaine musicale et l'ancien château d'eau.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "szechenyi-baths",
              text: "Passez un long après-midi aux bains thermaux Szechenyi dans le parc de la Ville. Réservez un billet en ligne en semaine avec une cabine, apportez votre propre serviette et vos tongs, et installez-vous une fois le pic de midi retombé.",
              durationMin: 210,
            },
          ],
          evening: [
            {
              text: "Baladez-vous dans le parc de la Ville en sortant pour le château de Vajdahunyad et la place des Héros illuminés au crépuscule, une fin gratuite et facile de la journée détendue.",
              durationMin: 60,
            },
            {
              text: "Dernier dîner de retour à Ujlipotvaros ou de l'autre côté dans le quartier juif, tous deux à un court trajet de tram et bien moins chers que les artères touristiques du bord du fleuve.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
  ],
};

export default budapestFr;
