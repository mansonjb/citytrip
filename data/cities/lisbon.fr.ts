import type { CityData } from "../types";

const lisbonFr: CityData = {
  city: {
    slug: "lisbon",
    name: "Lisbonne",
    country: "Portugal",
    countrySlug: "portugal",
    lat: 38.7223,
    lng: -9.1393,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "LIS",
    airportToCenter: "Ligne rouge du métro depuis l'aéroport, environ 25 min jusqu'au centre avec un changement, 1,85 EUR",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [8],
    monthlyNotes: {
      1: "Comptez 14-15C en journée, des fronts pluvieux fréquents venus de l'Atlantique et les rues les plus calmes de l'année. Les tarifs hôteliers touchent leur plancher : c'est le mois idéal pour un séjour pas cher entre miradouros et musées.",
      2: "Encore frais et pluvieux, mais les éclaircies sont fréquentes et les terrasses de café se remplissent dès qu'il fait beau. Le carnaval anime brièvement la ville, sinon la fréquentation et les prix restent bas.",
      3: "Les maximales grimpent vers 18C et la pluie se calme au fil du mois. La fréquentation reste modérée jusqu'à fin mars, quand les vacances de printemps commencent à faire monter les prix des hôtels le week-end.",
      4: "L'un des meilleurs mois : 19-21C, jacarandas sur le point de fleurir, files raisonnables au château et à Belém. La semaine de Pâques fait exception : réservez ce créneau tôt et attendez-vous à des prix de vacances.",
      5: "Chaleur fiable autour de 22C, peu de pluie et de longues soirées, parfait pour la saison des rooftops et des kiosques. La fréquentation monte, mais les billets horodatés règlent encore la plupart des files.",
      6: "Les Festas de Lisboa occupent la ville tout le mois, avec un pic la nuit de Santo Antonio, du 12 au 13 juin, quand l'Alfama se transforme en fête de rue géante autour des sardines grillées. Réservez plusieurs semaines à l'avance et attendez-vous à des prix d'hôtel proches du pic.",
      7: "Chaud, 27-28C, et très fréquenté, les croisiéristes provoquant des pics de mi-journée autour de la Baixa et de Belém. Faites les visites avant 11h, puis suivez les Lisboètes vers le fleuve ou les trains de plage au départ de Cais do Sodre.",
      8: "Pic de chaleur vers 29C, pic de fréquentation, pic des prix, et beaucoup de restaurants familiaux ferment pour les vacances. Si août est votre seule option, réservez la climatisation et le premier créneau d'entrée partout.",
      9: "Le temps de l'été sans la cohue d'août : 26-27C en début de mois, mer encore chaude, soirées faites pour les miradouros. Les prix redescendent du pic après la première semaine.",
      10: "Journées douces autour de 22-23C, avec les premières vraies pluies en fin de mois. La fréquentation baisse nettement après la mi-octobre : c'est le meilleur moment pour les bonnes affaires hôtelières de demi-saison.",
      11: "Plus frais, 17-18C, avec des épisodes pluvieux réguliers, mais la lumière entre les averses est superbe pour les photos. Les prix de basse saison s'installent et vous entrez dans les maisons de fado sans réservation.",
      12: "Doux pour un hiver, 15C, mais humide, avec les illuminations de la Rua Augusta et un grand concert gratuit du Nouvel An sur la Praca do Comercio. Calme, sauf la semaine entre Noël et le Nouvel An, où les tarifs bondissent.",
    },
    climate: {
      1: { highC: 15, lowC: 8, rainyDays: 10 },
      2: { highC: 16, lowC: 9, rainyDays: 9 },
      3: { highC: 18, lowC: 10, rainyDays: 8 },
      4: { highC: 20, lowC: 11, rainyDays: 8 },
      5: { highC: 22, lowC: 13, rainyDays: 5 },
      6: { highC: 26, lowC: 16, rainyDays: 2 },
      7: { highC: 28, lowC: 17, rainyDays: 1 },
      8: { highC: 29, lowC: 18, rainyDays: 1 },
      9: { highC: 27, lowC: 17, rainyDays: 3 },
      10: { highC: 23, lowC: 14, rainyDays: 7 },
      11: { highC: 18, lowC: 11, rainyDays: 9 },
      12: { highC: 15, lowC: 9, rainyDays: 10 },
    },
    budgetLevel: "mid",
    budgetPerDay: { budget: 70, mid: 140, high: 280 },
    tagline: "Sept collines, un fleuve, et la plus belle lumière d'Europe.",
    heroIntro:
      "Lisbonne récompense les marcheurs qui acceptent les collines et les voyageurs qui apprivoisent les trams. Trois jours suffisent pour couvrir la vieille ville, les points de vue et Belém sans courir, et la scène gastronomique offre bien plus que ce que son prix laisse penser. Venez au printemps ou en début d'automne : la ville est alors presque imbattable pour un city break européen.",
    accent: { from: "#FFB45E", to: "#FF6B5B", ink: "#8A2D1F" },
    neighborhoodSlugs: [
      "alfama",
      "baixa-chiado",
      "principe-real",
      "bairro-alto",
      "belem",
    ],
    nearbyCitySlugs: ["porto", "seville"],
  },

  neighborhoods: [
    {
      slug: "alfama",
      citySlug: "lisbon",
      name: "Alfama",
      lat: 38.7118,
      lng: -9.1287,
      bestFor: ["romantic", "local", "first-time"],
      vibe: "Le plus vieux quartier de Lisbonne est un labyrinthe d'escaliers, de linge aux fenêtres et de façades en azulejos qui grimpent du fleuve au château. Le fado s'échappe des petits restaurants le soir et les rues se vident des groupes de touristes à la nuit tombée. On se croirait dans un village posé au milieu d'une capitale.",
      pros: [
        "Les rues les plus atmosphériques de la ville, surtout tôt le matin et le soir",
        "Le château, la cathédrale et les meilleurs points de vue accessibles à pied",
        "Maisons de fado et tascas familiales au pied de votre porte",
      ],
      cons: [
        "Collines raides et pavés, pénibles avec des bagages et difficiles en cas de mobilité réduite",
        "Peu de stations de métro à proximité, vous dépendez des trams, des bus ou de vos jambes",
        "Ruelles principales saturées de groupes en journée",
      ],
    },
    {
      slug: "baixa-chiado",
      citySlug: "lisbon",
      name: "Baixa-Chiado",
      lat: 38.7104,
      lng: -9.139,
      bestFor: ["first-time", "family", "budget"],
      vibe: "Le centre-ville plat et quadrillé, reconstruit après le tremblement de terre de 1755, s'étire de la Praca do Comercio jusqu'aux boutiques et cafés élégants du Chiado. Tout converge ici : trois lignes de métro, les trams et les ferries. C'est touristique au niveau de la rue, mais imbattable comme point de chute.",
      pros: [
        "La partie la plus plate du centre de Lisbonne, le terrain le plus facile que vous trouverez",
        "Le meilleur hub de transport de la ville, métro direct depuis la zone de l'aéroport avec un changement",
        "Un choix énorme d'hôtels et de restaurants à tous les prix",
      ],
      cons: [
        "La qualité des restaurants sur les grandes artères est médiocre et pensée pour les touristes",
        "Bondé et bruyant en journée, surtout près de la Rua Augusta",
      ],
    },
    {
      slug: "principe-real",
      citySlug: "lisbon",
      name: "Principe Real",
      lat: 38.7168,
      lng: -9.1489,
      bestFor: ["romantic", "local", "nightlife"],
      vibe: "Un quartier verdoyant et huppé au-dessus du Bairro Alto, organisé autour d'un square avec un cèdre géant et des marchés bio le week-end. Concept stores, bars à vins naturels et quelques-uns des restaurants les plus intéressants de la ville occupent les hôtels particuliers du XIXe siècle. C'est là que les Lisboètes sortent vraiment.",
      pros: [
        "Excellente scène food et bars, avec bien moins de touristes que le centre",
        "Calme la nuit alors que le Bairro Alto est à dix minutes",
        "Squares et kiosques à café qui donnent une vraie vie de quartier",
      ],
      cons: [
        "En montée depuis presque tout, prévoyez un taxi de temps en temps pour rentrer",
        "Hébergement plutôt boutique et cher, peu d'options économiques",
        "Pas de station de métro dans le quartier même, la plus proche est Rato",
      ],
    },
    {
      slug: "bairro-alto",
      citySlug: "lisbon",
      name: "Bairro Alto",
      lat: 38.713,
      lng: -9.144,
      bestFor: ["nightlife", "budget"],
      vibe: "Endormi le jour, ce quadrillage de rues étroites devient chaque soir le bar crawl à ciel ouvert de Lisbonne, avec une foule qui boit sur les pavés jusqu'à 2h du matin. Bière pas chère, bars minuscules et zéro prétention. Ne dormez ici que si vous comptez faire partie du bruit.",
      pros: [
        "L'épicentre de la vie nocturne, des dizaines de bars à cinq minutes de marche titubante",
        "Emplacement central entre le Chiado et Principe Real",
        "Quelques guesthouses vraiment bon marché y survivent",
      ],
      cons: [
        "Le bruit de rue jusqu'à 2-3h du matin le week-end n'est pas négociable",
        "Matins peu reluisants, les rues encaissent chaque nuit",
        "Accès raide depuis la Baixa, sauf à prendre le funiculaire de la Gloria ou l'ascenseur",
      ],
    },
    {
      slug: "belem",
      citySlug: "lisbon",
      name: "Belem",
      lat: 38.697,
      lng: -9.206,
      bestFor: ["family", "local"],
      vibe: "Un quartier en bord de fleuve à 6 km à l'ouest du centre, où les monuments des Grandes Découvertes s'alignent le long du Tage : le monastère, la tour et une rangée de musées modernes. Il vit au rythme des excursionnistes jusqu'à 18h environ, puis devient vraiment calme. Large, plat et vert, il ressemble plus à une ville-jardin qu'au centre de Lisbonne.",
      pros: [
        "Terrain plat et promenades au bord du fleuve, la marche la plus facile de Lisbonne",
        "Monuments et musées à votre porte avant l'arrivée de la foule",
        "Soirées paisibles et prix d'hôtel plus bas que dans le centre",
      ],
      cons: [
        "20-30 min de tram 15 jusqu'au centre, et le tram est bondé",
        "L'offre de restaurants et de sorties se raréfie après la tombée de la nuit",
      ],
    },
  ],

  pois: [
    {
      slug: "praca-do-comercio",
      citySlug: "lisbon",
      name: "Praca do Comercio",
      lat: 38.7077,
      lng: -9.1366,
      kind: "sight",
      needsBooking: false,
      tip: "Venez avant 9h pour photographier la place vide avec l'arc de la Rua Augusta, puis évitez les cafés hors de prix de la place elle-même. Les marches au bord du fleuve, à Cais das Colunas côté sud, sont la place gratuite au premier rang pour le coucher de soleil.",
    },
    {
      slug: "castelo-sao-jorge",
      citySlug: "lisbon",
      name: "Château Saint-Georges",
      lat: 38.7139,
      lng: -9.1335,
      kind: "sight",
      needsBooking: true,
      tip: "Achetez le billet horodaté en ligne (environ 15 EUR) et prenez le premier créneau à 9h : la file de la billetterie atteint 45 minutes en fin de matinée en saison. Prenez le bus 737 depuis la Praca da Figueira jusqu'à la porte au lieu de grimper, et gardez vos jambes pour les remparts.",
    },
    {
      slug: "miradouro-senhora-do-monte",
      citySlug: "lisbon",
      name: "Miradouro da Senhora do Monte",
      lat: 38.719,
      lng: -9.1325,
      kind: "viewpoint",
      needsBooking: false,
      tip: "C'est le point de vue le plus haut et le plus large de la vieille ville, et il est gratuit, mais le muret se remplit 45 minutes avant le coucher du soleil : arrivez tôt pour prendre place. Il n'y a pas de café là-haut, achetez de quoi boire dans une épicerie de la rue principale de Graca en chemin.",
    },
    {
      slug: "tram-28",
      citySlug: "lisbon",
      name: "Tram 28",
      lat: 38.7169,
      lng: -9.136,
      kind: "experience",
      needsBooking: false,
      tip: "Montez au terminus de Martim Moniz avant 8h30 pour avoir une place côté fenêtre : dès 10h, on voyage debout et les pickpockets sont à l'affût. Le billet à bord coûte 3,10 EUR, alors prenez plutôt un pass 24h Carris/métro à environ 6,80 EUR et descendez sur n'importe quelle colline.",
    },
    {
      slug: "time-out-market",
      citySlug: "lisbon",
      name: "Time Out Market",
      lat: 38.707,
      lng: -9.146,
      kind: "food",
      needsBooking: false,
      tip: "Les tables communes sont un champ de bataille entre 12h30 et 14h : mangez à 11h45 ou après 14h30, et envoyez une personne garder les places pendant que les autres commandent. Le marché aux produits frais du Mercado da Ribeira, la halle d'origine juste à côté, est une pause café moins chère et plus calme.",
    },
    {
      slug: "jeronimos-monastery",
      citySlug: "lisbon",
      name: "Monastère des Hiéronymites",
      lat: 38.6979,
      lng: -9.2068,
      kind: "sight",
      needsBooking: true,
      tip: "La nef de l'église est en accès libre, seul le cloître exige un billet (environ 12 EUR) : réservez en ligne le premier créneau à 9h30 et faites le cloître avant l'arrivée des groupes en car vers 10h30. C'est fermé le lundi, l'erreur de planification classique de l'excursion.",
    },
    {
      slug: "belem-tower",
      citySlug: "lisbon",
      name: "Tour de Belém",
      lat: 38.6916,
      lng: -9.216,
      kind: "sight",
      needsBooking: true,
      tip: "L'intérieur se résume à un unique escalier en colimaçon étroit, emprunté dans les deux sens : l'entrée se fait au compte-gouttes et la file avance péniblement, même avec un billet réservé. Le conseil honnête : photographiez-la depuis le front de mer et n'entrez que si vous avez réservé le tout premier créneau. Fermée le lundi.",
    },
    {
      slug: "pasteis-de-belem",
      citySlug: "lisbon",
      name: "Pasteis de Belem",
      lat: 38.6975,
      lng: -9.2033,
      kind: "food",
      needsBooking: false,
      tip: "Ignorez la file à emporter qui serpente dans la rue et entrez directement dans les salles : elles comptent environ 400 places et tournent vite. Commandez à table, ajoutez la cannelle et le sucre des saupoudreuses du comptoir, et comptez environ 1,40 EUR le pastel.",
    },
    {
      slug: "lx-factory",
      citySlug: "lisbon",
      name: "LX Factory",
      lat: 38.7034,
      lng: -9.1786,
      kind: "experience",
      needsBooking: false,
      tip: "Venez en fin d'après-midi et restez dîner : la plupart des boutiques ouvrent jusqu'à 19-20h et les restaurants prennent le relais. Le dimanche, le marché aux puces LX Market démarre à 10h, et la librairie Ler Devagar avec son vélo volant est l'arrêt à ne pas manquer.",
    },
    {
      slug: "maat",
      citySlug: "lisbon",
      name: "MAAT",
      lat: 38.6957,
      lng: -9.1937,
      kind: "museum",
      needsBooking: false,
      tip: "Vous pouvez marcher gratuitement sur le toit incurvé du musée à toute heure, et la vue sur le fleuve depuis là-haut surpasse plusieurs points de vue payants. Les galeries ferment le mardi, et le billet combiné incluant l'ancienne centrale électrique est le meilleur choix si vous entrez.",
    },
    {
      slug: "alfama-walk",
      citySlug: "lisbon",
      name: "L'Alfama à pied",
      lat: 38.7118,
      lng: -9.1287,
      kind: "experience",
      needsBooking: false,
      tip: "Parcourez-la en descente : partez du château ou du point de vue de Portas do Sol et laissez les escaliers vous entraîner vers le fleuve, la faire en montée sous le soleil de l'après-midi est l'erreur classique. Les mardis et samedis matin, faites un détour par le marché aux puces de la Feira da Ladra derrière le Panthéon.",
    },
    {
      slug: "miradouro-santa-catarina",
      citySlug: "lisbon",
      name: "Miradouro de Santa Catarina",
      lat: 38.7089,
      lng: -9.147,
      kind: "viewpoint",
      needsBooking: false,
      tip: "C'est le point de vue du coucher de soleil face au pont, avec une foule jeune, locale et armée de bières de supermarché. Le kiosque vend à boire mais ferme plus tôt que prévu : arrivez pour l'heure dorée, achetez d'abord, puis installez-vous sur les marches de la terrasse.",
    },
    {
      slug: "gulbenkian-museum",
      citySlug: "lisbon",
      name: "Musée Calouste Gulbenkian",
      lat: 38.7371,
      lng: -9.1545,
      kind: "museum",
      needsBooking: true,
      tip: "L'entrée est gratuite tous les dimanches à partir de 14h, et même à ce moment-là l'affluence reste rare. Il est fermé le mardi, et le jardin qui l'entoure, avec ses bassins et ses allées de béton, est gratuit tous les jours, un vrai spot de pause déjeuner pour les habitués de la cafétéria du musée.",
    },
  ],

  itineraries: [
    {
      citySlug: "lisbon",
      days: 2,
      summary:
        "Deux jours suffisent pour le coeur historique de Lisbonne, mais il faudra sacrifier Belém, et c'est un vrai sacrifice. En 48 heures, vous pouvez prendre le tram 28 avant la foule, grimper au château et traverser l'Alfama, profiter de deux des meilleurs miradouros, faire le tour des stands du Time Out Market et terminer les deux soirées dehors, l'une au fado et l'autre dans le Bairro Alto. Ce qui ne rentrera pas : le Monastère des Hiéronymites, la Tour de Belém, le Gulbenkian et toute excursion, alors acceptez ce compromis avant de réserver. Cette durée convient à un week-end city break, à une escale sur la route de l'Algarve ou des Açores, ou aux voyageurs qui combinent Lisbonne et Porto dans un même voyage. Installez-vous à Baixa-Chiado : c'est plat, tous les trams et lignes de métro y convergent, et les deux journées commencent à moins de dix minutes de votre porte. Si vous atterrissez avec une demi-journée en plus, passez-la à Belém plutôt que d'ajouter des déambulations dans le centre.",
      stayNeighborhoodSlug: "baixa-chiado",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Colline du château, Alfama et fado",
          morning: [
            {
              poiSlug: "tram-28",
              text: "Partez du terminus de Martim Moniz et prenez le tram 28 à travers Graca avant 8h30, quand on trouve encore une place côté fenêtre. Descendez près du sommet de la colline du château plutôt que de faire toute la ligne.",
              durationMin: 40,
            },
            {
              poiSlug: "castelo-sao-jorge",
              text: "Parcourez les remparts du Château Saint-Georges avec un billet de 9h réservé à l'avance, avant que la file de la billetterie ne s'allonge. Les terrasses offrent un panorama complet de la ville et du fleuve, un repérage utile pour la suite du séjour.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "alfama-walk",
              text: "Descendez l'Alfama à pied depuis les portes du château, en flânant par Portas do Sol et les escaliers qui mènent vers la cathédrale. Arrêtez-vous pour un déjeuner tranquille dans une tasca en chemin : poisson grillé et demi-bouteille de vinho verde, c'est le bon choix.",
              durationMin: 150,
            },
            {
              poiSlug: "miradouro-senhora-do-monte",
              text: "Remontez à pied ou en bus jusqu'au Miradouro da Senhora do Monte, le point de vue le plus haut de la vieille ville. La lumière de fin d'après-midi y est le meilleur spectacle gratuit de Lisbonne.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              text: "Réservez une table dans une maison de fado en redescendant dans l'Alfama, vers 20h : les petites salles familiales valent mieux que les grosses machines à dîner-spectacle. Attendez-vous à un menu unique avec récital, et à un silence total pendant les chants.",
              durationMin: 150,
            },
            {
              text: "Terminez par une ginjinha, la liqueur locale de griottes, dans un bar de poche près du Rossio sur le chemin du retour vers la Baixa. Un shot dans une coupelle en chocolat coûte moins de 2 EUR.",
              durationMin: 20,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Baixa, Chiado et nuits du Bairro Alto",
          morning: [
            {
              poiSlug: "praca-do-comercio",
              text: "Parcourez la Praca do Comercio et les marches du fleuve à Cais das Colunas avant 9h, quand la place est encore vide. Remontez ensuite la Rua Augusta piétonne et passez sous l'arc pour entrer dans le quadrillage de la Baixa.",
              durationMin: 60,
            },
            {
              text: "Flânez en montant dans le Chiado : les cafés historiques autour de la Rua Garrett, la librairie Bertrand, les ruines du couvent du Carmo si vous voulez une visite compacte. C'est la meilleure heure de lèche-vitrines de Lisbonne.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "time-out-market",
              text: "Déjeunez au Time Out Market à Cais do Sodre, en arrivant avant 11h45 ou après 14h30 pour vraiment trouver une place. Répartissez les commandes entre plusieurs stands pour goûter trois cuisines en un seul repas.",
              durationMin: 90,
            },
            {
              poiSlug: "miradouro-santa-catarina",
              text: "Montez au Miradouro de Santa Catarina et installez-vous face au pont du 25 Avril. Achetez à boire au kiosque tôt, il ferme avant le pic de la foule.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Dînez dans le Chiado ou en lisière du Bairro Alto, en réservant partout où l'adresse a un nom. Les portions sont copieuses : partager deux plats à trois est tout à fait normal.",
              durationMin: 100,
            },
            {
              text: "Finissez dans le quadrillage de bars du Bairro Alto, où tout le monde boit debout sur les pavés à partir de 23h environ. Passez de bar en bar plutôt que de vous installer, l'intérêt, c'est la rue elle-même.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "lisbon",
      days: 3,
      summary:
        "Oui, trois jours est la bonne durée pour Lisbonne, et c'est celle que nous recommandons pour une première visite. Elle vous donne deux journées complètes dans le centre historique, avec le château, l'Alfama, le tram 28, les miradouros, la Baixa et le Chiado, plus une journée entière pour Belém, qui mérite mieux que la demi-après-midi expédiée que la plupart des visiteurs lui accordent. En trois jours, vous dînez bien deux soirs sans répéter les quartiers, casez une soirée fado et une nuit dans le Bairro Alto, et allez tout de même jusqu'au Monastère des Hiéronymites, à la Tour de Belém et aux pasteis de nata dégustés à la source. Ce qui saute encore : le Musée Calouste Gulbenkian, Principe Real et toute excursion à Sintra, qui exigent tous un quatrième jour. Cette durée convient aux primo-visiteurs, aux couples et à quiconque construit un itinéraire portugais avec Porto ensuite. Logez à Baixa-Chiado pour les transports : le tram pour Belém part au pied de l'hôtel et les deux journées de centre commencent à pied.",
      stayNeighborhoodSlug: "baixa-chiado",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Colline du château, Alfama et fado",
          morning: [
            {
              poiSlug: "tram-28",
              text: "Partez du terminus de Martim Moniz et prenez le tram 28 à travers Graca avant 8h30, quand on trouve encore une place côté fenêtre. Descendez près du sommet de la colline du château plutôt que de faire toute la ligne.",
              durationMin: 40,
            },
            {
              poiSlug: "castelo-sao-jorge",
              text: "Parcourez les remparts du Château Saint-Georges avec un billet de 9h réservé à l'avance, avant que la file ne s'allonge. Les terrasses offrent un panorama complet de la ville et du fleuve, un repérage utile pour la suite du séjour.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "alfama-walk",
              text: "Descendez l'Alfama à pied depuis les portes du château, en flânant par Portas do Sol et les escaliers qui mènent vers la cathédrale. Arrêtez-vous pour un déjeuner tranquille dans une tasca en chemin.",
              durationMin: 150,
            },
            {
              poiSlug: "miradouro-senhora-do-monte",
              text: "Remontez à pied ou en bus jusqu'au Miradouro da Senhora do Monte, le point de vue le plus haut de la vieille ville, pour la lumière de fin d'après-midi. Apportez vos boissons, il n'y a pas de kiosque au sommet.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              text: "Réservez une table dans une maison de fado de l'Alfama vers 20h, en préférant une petite salle familiale aux grandes salles de dîner-spectacle. Le silence total pendant les chants est la règle de la maison, partout.",
              durationMin: 150,
            },
            {
              text: "Terminez par une ginjinha, la liqueur de griottes, dans un bar debout près du Rossio sur le chemin du retour. Moins de 2 EUR, bue sur le trottoir comme tout le monde.",
              durationMin: 20,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Baixa, Chiado et nuits du Bairro Alto",
          morning: [
            {
              poiSlug: "praca-do-comercio",
              text: "Parcourez la Praca do Comercio et le bord du fleuve à Cais das Colunas avant 9h, puis remontez la Rua Augusta et passez sous l'arc pour entrer dans le quadrillage de la Baixa. La place est bien plus photogénique tant qu'elle est encore vide.",
              durationMin: 60,
            },
            {
              text: "Flânez en montant dans le Chiado : les cafés autour de la Rua Garrett, la librairie Bertrand, et les ruines du couvent du Carmo si vous voulez une visite compacte avant le déjeuner.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "time-out-market",
              text: "Déjeunez au Time Out Market à Cais do Sodre, en arrivant avant 11h45 ou après 14h30 pour trouver des places. Répartissez les commandes entre plusieurs stands pour goûter plusieurs cuisines à la fois.",
              durationMin: 90,
            },
            {
              poiSlug: "miradouro-santa-catarina",
              text: "Montez au Miradouro de Santa Catarina et prenez place face au pont du 25 Avril pour l'heure dorée. Achetez au kiosque tôt, il ferme avant le pic de la foule.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Dînez dans le Chiado ou en lisière du Bairro Alto, avec une réservation pour toute adresse bien notée. Les portions portugaises sont copieuses, commandez moins que prévu.",
              durationMin: 100,
            },
            {
              text: "Finissez dans le Bairro Alto, où la foule des bars déborde sur les pavés à partir de 23h environ. Continuez de bouger d'un bar à l'autre, la rue est la vraie salle.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Monuments de Belém et bord du fleuve",
          morning: [
            {
              poiSlug: "jeronimos-monastery",
              text: "Prenez le tram 15 ou un taxi de 15 minutes depuis le centre et soyez au Monastère des Hiéronymites pour le premier créneau du cloître à 9h30, réservé en ligne. Visitez ensuite la nef gratuite de l'église : la pierre manuéline à l'intérieur est le grand moment de la journée.",
              durationMin: 100,
            },
            {
              poiSlug: "pasteis-de-belem",
              text: "Marchez deux minutes jusqu'à Pasteis de Belem et allez droit aux salles avec service à table plutôt que dans la file à emporter. Deux pasteis tièdes à la cannelle et un café, c'est la commande qui s'impose.",
              durationMin: 40,
            },
          ],
          afternoon: [
            {
              poiSlug: "belem-tower",
              text: "Longez les jardins du bord de fleuve, passez le Monument des Découvertes et rejoignez la Tour de Belém. Photographiez-la depuis la rive, et ne faites la queue pour l'intérieur que si vous avez réservé le premier créneau.",
              durationMin: 75,
            },
            {
              poiSlug: "maat",
              text: "Continuez vers l'est le long du Tage jusqu'au MAAT et traversez son toit incurvé, gratuit et ouvert même quand les galeries ne le sont pas. Entrez si l'exposition en cours vous attire, passez votre chemin sans remords sinon.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "lx-factory",
              text: "Poursuivez jusqu'à LX Factory sous le pont, à Alcantara, en arrivant en fin d'après-midi quand les boutiques sont encore ouvertes. Fouinez chez Ler Devagar, puis restez dîner dans l'un des restaurants de l'ancienne imprimerie.",
              durationMin: 150,
            },
            {
              text: "Rentrez au centre en taxi ou en tram 15, environ 15 minutes. S'il vous reste de l'énergie, un dernier verre sur un rooftop de Cais do Sodre clôt le voyage comme il faut.",
              durationMin: 45,
            },
          ],
        },
      ],
    },
    {
      citySlug: "lisbon",
      days: 4,
      summary:
        "Quatre jours, c'est plus qu'il n'en faut pour Lisbonne, et c'est le quatrième jour qui transforme un sprint touristique en vraies vacances. Les jours un et deux couvrent le coeur historique : château, Alfama, tram 28, Baixa, Chiado, les miradouros et les deux soirées signature. Le jour trois est consacré à Belém, fait dans les règles, du premier créneau d'entrée au monastère jusqu'au dîner à LX Factory. Le jour quatre est la soupape : la collection privée de classe mondiale du Gulbenkian, les jardins et bars à vins de Principe Real, et une dernière soirée sans montre, ou remplacez la journée entière par une excursion à Sintra si les palais vous tentent plus que les musées. Cette durée convient aux voyageurs qui détestent courir, aux habitués de la ville et à tous ceux dont les vols encadrent mal le séjour. Pour quatre jours, nous recommandons de loger à Principe Real plutôt qu'au centre : vous avez déjà choisi un rythme plus lent, et ses restaurants, ses squares et sa clientèle locale font du retour chaque soir le meilleur moment de la journée. Au-delà de quatre jours, ajoutez Sintra et une après-midi de plage à Cascais plutôt que davantage de ville.",
      stayNeighborhoodSlug: "principe-real",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Colline du château, Alfama et fado",
          morning: [
            {
              poiSlug: "tram-28",
              text: "Partez du terminus de Martim Moniz et prenez le tram 28 à travers Graca avant 8h30 pour une place côté fenêtre. Descendez près de la colline du château plutôt que de faire toute la ligne.",
              durationMin: 40,
            },
            {
              poiSlug: "castelo-sao-jorge",
              text: "Parcourez les remparts du Château Saint-Georges avec un billet de 9h réservé à l'avance, avant que les files ne se forment. Dès le premier jour, les terrasses vous dessinent le plan de toute la ville.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "alfama-walk",
              text: "Descendez l'Alfama à pied depuis les portes du château, par Portas do Sol et les escaliers qui filent vers le fleuve, avec un long déjeuner de tasca en chemin.",
              durationMin: 150,
            },
            {
              poiSlug: "miradouro-senhora-do-monte",
              text: "Remontez au Miradouro da Senhora do Monte pour la lumière de fin d'après-midi sur la vieille ville. C'est gratuit, et c'est le point de vue le plus haut du centre de Lisbonne.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              text: "Réservez une petite maison de fado dans l'Alfama vers 20h et installez-vous pour le menu unique et les chants. Le silence pendant les morceaux est attendu, les applaudissements après sont obligatoires.",
              durationMin: 150,
            },
            {
              text: "Concluez la soirée par une ginjinha près du Rossio avant de remonter vers Principe Real. Un taxi jusqu'à l'hôtel coûte quelques euros et vous épargne la côte.",
              durationMin: 20,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Baixa, Chiado et nuits du Bairro Alto",
          morning: [
            {
              poiSlug: "praca-do-comercio",
              text: "Parcourez la Praca do Comercio et les marches du fleuve à Cais das Colunas avant 9h, puis prenez la Rua Augusta et passez sous l'arc vers la Baixa. Le matin tôt est le seul moment où la place vous appartient.",
              durationMin: 60,
            },
            {
              text: "Remontez en flânant dans le Chiado : les cafés de la Rua Garrett, la librairie Bertrand et le couvent du Carmo à ciel ouvert si vous voulez une visite rapide.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "time-out-market",
              text: "Déjeuner au Time Out Market à Cais do Sodre, calé à 11h45 ou après 14h30 pour éviter la chasse aux places. Commandez à plusieurs stands et partagez.",
              durationMin: 90,
            },
            {
              poiSlug: "miradouro-santa-catarina",
              text: "Montez au Miradouro de Santa Catarina pour l'heure dorée face au pont. Le kiosque d'abord, les marches ensuite : le comptoir ferme tôt.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Dîner dans le Chiado ou le haut du Bairro Alto avec réservation, puis rejoignez la foule dans le quadrillage de bars du Bairro Alto à partir de 23h. Votre lit à Principe Real est à dix minutes de marche en montée.",
              durationMin: 180,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Monuments de Belém et bord du fleuve",
          morning: [
            {
              poiSlug: "jeronimos-monastery",
              text: "Soyez au Monastère des Hiéronymites pour le premier créneau du cloître à 9h30, réservé en ligne, puis visitez la nef gratuite de l'église. Le tram 15 ou un taxi depuis le centre prend 15 à 25 minutes.",
              durationMin: 100,
            },
            {
              poiSlug: "pasteis-de-belem",
              text: "Marchez jusqu'à Pasteis de Belem et installez-vous à l'intérieur plutôt que de rejoindre la file à emporter. Pasteis tièdes, cannelle par-dessus, affaire réglée.",
              durationMin: 40,
            },
          ],
          afternoon: [
            {
              poiSlug: "belem-tower",
              text: "Suivez les jardins du bord de fleuve, passez le Monument des Découvertes et rejoignez la Tour de Belém. La vue extérieure est la vraie récompense : évitez la lente file de l'intérieur, sauf si vous avez réservé le premier créneau.",
              durationMin: 75,
            },
            {
              poiSlug: "maat",
              text: "Longez le fleuve vers l'est jusqu'au MAAT et traversez sa passerelle de toit gratuite pour le meilleur panorama sur le fleuve à Belém. N'entrez dans les galeries que si l'exposition en cours vous intéresse.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "lx-factory",
              text: "Terminez la journée à LX Factory, à Alcantara, en fouinant dans les boutiques avant la fermeture et en restant dîner dans l'allée des anciennes usines. La librairie Ler Devagar justifie à elle seule l'arrêt.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Gulbenkian, Principe Real, Lisbonne au ralenti",
          morning: [
            {
              poiSlug: "gulbenkian-museum",
              text: "Passez la matinée au Musée Calouste Gulbenkian, une collection privée compacte qui court des pièces égyptiennes aux bijoux Lalique. Si c'est dimanche, l'entrée est gratuite à partir de 14h : inversez alors l'ordre de la journée et venez après le déjeuner.",
              durationMin: 120,
            },
            {
              text: "Avant de partir, parcourez les bassins et les allées de béton du jardin du Gulbenkian : ils sont gratuits et vraiment paisibles. Le métro depuis Sao Sebastiao vous ramène vers Rato en dix minutes.",
              durationMin: 40,
            },
          ],
          afternoon: [
            {
              text: "Consacrez l'après-midi à Principe Real lui-même : le square sous le cèdre géant, les concept stores des anciens hôtels particuliers et un long café au kiosque. Le samedi, un marché bio remplit la place.",
              durationMin: 120,
            },
            {
              text: "Alternative pour cette journée entière : prenez le train du Rossio vers Sintra, environ 40 minutes et 2,40 EUR par trajet, pour le Palais de Pena et la Quinta da Regaleira. Si vous choisissez Sintra, réservez les billets des palais en ligne et partez avant 8h30 pour devancer les cars de touristes.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Réservez un dîner d'adieu à Principe Real, où les bars à vins naturels et les cuisines portugaises modernes sont ce que la ville fait de mieux en ce moment. C'est le repas sur lequel mettre le budget.",
              durationMin: 120,
            },
            {
              text: "Prenez un dernier verre au kiosque d'un miradouro ou sur une terrasse de jardin tranquille à proximité. Vous dormez dans le quartier, donc aucun trajet de retour à gérer.",
              durationMin: 45,
            },
          ],
        },
      ],
    },
  ],
};

export default lisbonFr;
