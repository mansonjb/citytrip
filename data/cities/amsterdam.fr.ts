import type { CityData } from "../types";

const amsterdamFr: CityData = {
  city: {
    slug: "amsterdam",
    name: "Amsterdam",
    country: "Pays-Bas",
    countrySlug: "netherlands",
    lat: 52.3676,
    lng: 4.9041,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "AMS",
    airportToCenter:
      "Train direct de Schiphol à Amsterdam Centraal, environ 17 minutes pour 5 EUR, avec un départ toutes les quelques minutes du petit matin à tard le soir. Achetez un billet aux bornes jaunes ou tapez une carte sans contact aux portiques ; laissez tomber les taxis, qui coûtent 40 à 50 EUR pour le même trajet.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9],
    avoidMonths: [1],
    monthlyNotes: {
      1: "Le mois le plus froid et le plus gris, avec des maximales proches de 6C, des journées courtes et des pluies fréquentes : prévoyez des journées orientées musées. L'affluence est faible et les tarifs d'hôtel touchent leur plancher annuel une fois le Nouvel An passé, mais le parcours en bateau illuminé de l'Amsterdam Light Festival dure jusqu'à la mi-janvier et c'est la seule raison de braver l'obscurité.",
      2: "Encore froid et humide, autour de 7C, et le mois complet le plus calme pour les sites et les tarifs. Réservez la maison d'Anne Frank et le musée Van Gogh et vous les parcourrez avec de l'espace pour respirer ; emportez un vrai imperméable plutôt qu'un parapluie, que le vent des canaux détruit.",
      3: "Les maximales grimpent vers 10C et la saison des tulipes commence : les jardins de Keukenhof ouvrent dans la seconde moitié du mois et durent jusqu'à la mi-mai. L'affluence reste modérée, mais les premiers week-ends de Keukenhof et des champs de bulbes se remplissent vite, alors réservez le transport pour l'excursion à l'avance.",
      4: "Le vrai printemps, autour de 13C, avec Keukenhof en pleine floraison et les champs de bulbes au sud de Haarlem en couleurs. Le Jour du Roi, le 27 avril, transforme toute la ville en fête de rue orange et en flottille sur les canaux ; c'est spectaculaire mais il faut réserver son hébergement des mois à l'avance et s'attendre à ce que tout le reste soit bondé.",
      5: "L'un des meilleurs mois, avec des maximales proches de 17C, de longues soirées lumineuses et Keukenhof ouvert jusqu'à la mi-mois. L'affluence monte régulièrement et les tarifs d'hôtel atteignent leurs sommets de moyenne saison, alors bloquez vos chambres tôt et démarrez la maison d'Anne Frank et les musées dès l'ouverture.",
      6: "Chaud, autour de 20C, avec la plus longue durée du jour de l'année et les terrasses battant leur plein. Les touristes sont nombreux mais pas encore au pic d'août ; les soirées au bord des canaux sont la récompense, et les festivals de plein air commencent à remplir le calendrier du théâtre en plein air du Vondelpark.",
      7: "Pleine saison : 22C en journée, musées bondés et tarifs de chambre les plus élevés de l'été. Réservez chaque site à entrée horodatée des semaines à l'avance, prenez les trams plutôt que de vous battre pour un taxi, et gardez la ceinture de canaux pour tôt le matin ou après 20h, quand la foule s'allège.",
      8: "Même chaleur et même affluence qu'en juillet, plus la Pride : la célèbre Canal Parade de bateaux décorés navigue sur le Prinsengracht le premier samedi, attirant une foule énorme au bord de l'eau. Réservez très à l'avance pour ce week-end et attendez-vous à ce que les hôtels du centre affichent complet.",
      9: "Maximales autour de 19C, affluence baissant nettement après la première semaine, et la météo la plus douce de la moyenne saison. C'est l'alternative maligne à l'été : les prix se détendent, les terrasses fonctionnent encore les jours chauds et les grands musées sont plus calmes.",
      10: "Plus frais, autour de 14C, avec de vraies couleurs d'automne dans le Vondelpark et le retour de la pluie. Le nombre de touristes chute et les tarifs d'hôtel suivent ; un mois d'un bon rapport qualité-prix si vous acceptez que le temps en extérieur dépende de la météo et que les musées portent le séjour.",
      11: "Gris, humide et froid, avec des maximales proches de 9C, la période la plus calme avant les fêtes. Les tarifs sont bas et les files courtes ; l'arrivée de Sinterklaas à la mi-mois et les premières illuminations de Noël ajoutent un peu d'atmosphère à des journées par ailleurs sombres.",
      12: "Froid, autour de 6C, avec des journées courtes et des bruines fréquentes, mais l'Amsterdam Light Festival lance son parcours d'art illuminé sur les canaux fin novembre et dure jusqu'en janvier. Les marchés de Noël et les ponts éclairés remontent le moral ; réservez la maison d'Anne Frank et les musées tôt, car la semaine des fêtes voit un pic de visiteurs.",
    },
    climate: {
      1: { highC: 6, lowC: 1, rainyDays: 12 },
      2: { highC: 7, lowC: 1, rainyDays: 10 },
      3: { highC: 10, lowC: 3, rainyDays: 11 },
      4: { highC: 13, lowC: 5, rainyDays: 10 },
      5: { highC: 17, lowC: 8, rainyDays: 10 },
      6: { highC: 20, lowC: 11, rainyDays: 11 },
      7: { highC: 22, lowC: 13, rainyDays: 11 },
      8: { highC: 22, lowC: 13, rainyDays: 11 },
      9: { highC: 19, lowC: 11, rainyDays: 11 },
      10: { highC: 14, lowC: 8, rainyDays: 12 },
      11: { highC: 9, lowC: 5, rainyDays: 13 },
      12: { highC: 6, lowC: 2, rainyDays: 13 },
    },
    budgetLevel: "high",
    budgetPerDay: { budget: 80, mid: 160, high: 320 },
    tagline: "Canaux, musées et vélos, le tout dans un anneau à parcourir à pied.",
    heroIntro:
      "Amsterdam fait tenir une collection d'art de rang mondial, une ceinture de canaux classée à l'UNESCO et une vraie culture de café dans un centre que l'on traverse à pied en une demi-heure. La ville roule au vélo et au tram plutôt qu'à la voiture, alors l'astuce consiste à apprendre à lire le trafic et à réserver les grands musées avant d'arriver. Trois jours couvrent l'essentiel à un rythme humain ; le reste de la ville récompense ceux qui ralentissent au bord de l'eau.",
    accent: { from: "#2F6E8F", to: "#C46A3A", ink: "#1E3E52" },
    neighborhoodSlugs: ["centrum", "jordaan", "de-pijp", "oud-west", "oost"],
    nearbyCitySlugs: ["bruges"],
  },

  neighborhoods: [
    {
      slug: "centrum",
      citySlug: "amsterdam",
      name: "Centrum (vieux centre)",
      lat: 52.3731,
      lng: 4.8922,
      bestFor: ["first-time", "nightlife"],
      vibe: "Le coeur historique autour du Dam et de la ceinture de canaux, sillonné par les plus vieilles rues de la ville. Le jour, il est dense de visiteurs, et la nuit certaines parties autour du quartier rouge deviennent bruyantes, mais tout ce que veut un primo-visiteur est à dix minutes à pied. Vous échangez la tranquillité contre les distances les plus courtes possibles vers les sites phares.",
      pros: [
        "Le Dam, la ceinture de canaux et les Neuf Petites Rues à pied",
        "Le plus grand choix d'hôtels et les meilleures correspondances de tram",
        "Aucun transport nécessaire pour un séjour de 2 jours",
      ],
      cons: [
        "Les restaurants des rues principales sont hors de prix et taillés pour les touristes",
        "Bruit et foule d'enterrements de vie de garçon près du quartier rouge la nuit",
        "Vous payez une nette prime d'emplacement par rapport à De Pijp ou Oud-West",
      ],
    },
    {
      slug: "jordaan",
      citySlug: "amsterdam",
      name: "Jordaan",
      lat: 52.3745,
      lng: 4.8799,
      bestFor: ["romantic", "first-time", "local"],
      vibe: "Le quartier le plus photographié de la ville : canaux étroits, maisons à pignon, jardins intérieurs et boutiques indépendantes sur des rues à échelle humaine. Il est central mais plus calme que le vieux centre, avec des bruine cafés (brown cafes, ces bistrots traditionnels) où les habitants boivent encore. Y loger, c'est avoir la maison d'Anne Frank et les canaux ouest à sa porte.",
      pros: [
        "Les plus jolis canaux d'Amsterdam et la maison d'Anne Frank tout près",
        "D'excellents brown cafes, des galeries et des marchés du samedi",
        "Calme et résidentiel le soir, mais à courte distance à pied de tout",
      ],
      cons: [
        "Des tarifs de chambre plus élevés que dans les quartiers sud et ouest",
        "Les petits hôtels de maisons de canal signifient souvent escaliers raides et pas d'ascenseur",
        "Peu de grands supermarchés et une offre de restauration économique limitée",
      ],
    },
    {
      slug: "de-pijp",
      citySlug: "amsterdam",
      name: "De Pijp",
      lat: 52.3547,
      lng: 4.8925,
      bestFor: ["local", "budget", "nightlife"],
      vibe: "Un quadrillage dense et animé au sud du centre, bâti autour du marché quotidien Albert Cuyp. C'est là que les jeunes Amstellodamois mangent et boivent, donc la scène des restaurants et des bars offre le meilleur rapport qualité-prix de la ville. Le Rijksmuseum et le quartier des musées sont à dix minutes à pied ou à un arrêt de tram au nord.",
      pros: [
        "La meilleure densité de cuisine et de vie nocturne à des prix locaux honnêtes",
        "Le marché Albert Cuyp et le Sarphatipark à votre porte",
        "À distance de marche du quartier des musées",
      ],
      cons: [
        "Aucun site de la ceinture de canaux dans le quartier lui-même",
        "Animé et bruyant sur les rues du marché et des bars",
        "Assez couru désormais pour que les chambres ne soient plus bon marché",
      ],
    },
    {
      slug: "oud-west",
      citySlug: "amsterdam",
      name: "Oud-West",
      lat: 52.3639,
      lng: 4.8686,
      bestFor: ["local", "family", "budget"],
      vibe: "Un quartier résidentiel à l'ouest du Vondelpark, avec des rues bordées d'arbres et le bouillonnant Foodhallen, une halle gourmande, en son coeur. C'est là que vivent familles et actifs, alors on s'y sent habité plutôt que touristique, et les tarifs restent sous la ceinture de canaux. Les trams mettent le centre à dix minutes.",
      pros: [
        "Le Vondelpark et le Foodhallen en quelques minutes",
        "Des rues plus calmes et familiales à de meilleurs prix",
        "Des lignes de tram rapides droit vers le centre et le quartier des musées",
      ],
      cons: [
        "Vous faites la navette vers chaque site majeur, même si le trajet est court",
        "Aucun canal ni bâtiment emblématique dans le quartier lui-même",
        "Une vie nocturne plus calme que De Pijp ou le centre",
      ],
    },
    {
      slug: "oost",
      citySlug: "amsterdam",
      name: "Oost (est)",
      lat: 52.3603,
      lng: 4.9268,
      bestFor: ["local", "budget", "family"],
      vibe: "Un vaste quartier en plein essor à l'est du centre autour de l'Oosterpark, mêlant des immeubles du XIXe siècle rénovés à une forte scène culinaire multiculturelle. C'est le bon plan : des rues calmes et arborées, de vrais restaurants de quartier et des chambres bien en dessous du centre. Le métro et les trams atteignent le coeur en dix à quinze minutes.",
      pros: [
        "Les tarifs de chambre presque centraux les plus bas de la ville",
        "Une scène culinaire variée et authentique avec quasiment aucune majoration touristique",
        "L'Oosterpark, le zoo Artis et le Tropenmuseum tout près",
      ],
      cons: [
        "Le plus éloigné de ces quartiers des sites de la ceinture de canaux",
        "Étendu, donc vous dépendez du tram ou du métro plutôt que de la marche",
        "Moins d'attractions emblématiques dans le quartier",
      ],
    },
  ],

  pois: [
    {
      slug: "rijksmuseum",
      citySlug: "amsterdam",
      name: "Rijksmuseum",
      lat: 52.36,
      lng: 4.8852,
      kind: "museum",
      needsBooking: true,
      tip: "Réservez un créneau horodaté en ligne et prenez le plus matinal, à 9h, quand la Galerie d'honneur avec Vermeer et l'immense Ronde de nuit de Rembrandt est encore peu fréquentée. Le jardin et le passage sous le bâtiment sont libres d'accès, et la file du café du musée est au pire vers 13h, alors mangez tôt ou tard.",
    },
    {
      slug: "van-gogh-museum",
      citySlug: "amsterdam",
      name: "Musée Van Gogh",
      lat: 52.3584,
      lng: 4.8811,
      kind: "museum",
      needsBooking: true,
      tip: "L'entrée se fait uniquement sur créneau horodaté et il n'y a pas de guichet sur place, alors réservez en ligne avant d'arriver et choisissez un créneau juste à l'ouverture de 9h ou après 15h pour éviter la cohue de midi. Il se trouve à deux minutes du Rijksmuseum, alors associez les deux sur une même matinée au quartier des musées plutôt que de les répartir sur plusieurs jours.",
    },
    {
      slug: "anne-frank-house",
      citySlug: "amsterdam",
      name: "Maison d'Anne Frank",
      lat: 52.3752,
      lng: 4.884,
      kind: "museum",
      needsBooking: true,
      tip: "C'est autour de ça qu'il faut planifier tout le voyage : tous les billets se vendent uniquement en ligne, mis en vente exactement six semaines à l'avance à heure fixe, et les créneaux partent en quelques minutes. Il n'y a aucune file sur place, alors programmez un rappel pour le jour de la mise en vente et achetez à l'instant où ils sont disponibles. Une fois à l'intérieur, le parcours horodaté à travers l'annexe cachée prend environ une heure.",
    },
    {
      slug: "canal-cruise",
      citySlug: "amsterdam",
      name: "Croisière sur les canaux",
      lat: 52.3644,
      lng: 4.8916,
      kind: "experience",
      needsBooking: false,
      tip: "Évitez les grands bateaux à toit vitré près de Centraal et choisissez un petit bateau électrique ouvert depuis les embarcadères du Rijksmuseum ou de la maison d'Anne Frank pour une heure plus paisible sur l'eau. Partez au coucher du soleil pour la meilleure lumière sur les maisons à pignon, et réservez un départ précis en ligne l'été, quand les opérateurs de petits bateaux populaires affichent complet.",
    },
    {
      slug: "vondelpark",
      citySlug: "amsterdam",
      name: "Vondelpark",
      lat: 52.3579,
      lng: 4.8686,
      kind: "park",
      needsBooking: false,
      tip: "Le poumon vert central de la ville, gratuit et ouvert à toute heure, à aborder de préférence par le côté du quartier des musées et à parcourir vers l'ouest avec un café. Les week-ends d'été, le théâtre en plein air près du centre propose concerts et spectacles gratuits ; consultez le programme, car c'est la meilleure soirée gratuite d'Amsterdam quand le temps tient.",
    },
    {
      slug: "jordaan-canals",
      citySlug: "amsterdam",
      name: "Balade sur les canaux du Jordaan",
      lat: 52.374,
      lng: 4.881,
      kind: "sight",
      needsBooking: false,
      tip: "Parcourez à pied le Prinsengracht, le Bloemgracht et le petit Egelantiersgracht sans itinéraire fixe ; c'est le tronçon le plus joli et le moins commercial de la ceinture de canaux. Venez avant 10h ou après 19h pour des photos sans foule, et faites un détour par la cour gratuite du Karthuizerhof, un jardin d'hospice tranquille que la plupart des visiteurs dépassent sans le voir.",
    },
    {
      slug: "albert-cuyp-market",
      citySlug: "amsterdam",
      name: "Marché Albert Cuyp",
      lat: 52.3556,
      lng: 4.8916,
      kind: "food",
      needsBooking: false,
      tip: "Le plus grand marché de rue quotidien des Pays-Bas, ouvert du lundi au samedi de 9h à 17h environ et fermé le dimanche, alors organisez-vous en conséquence. Venez pour un stroopwafel frais pressé à la commande et des dégustations de fromage néerlandais plutôt que pour des souvenirs, et allez-y avant midi le samedi, le créneau le plus chargé, si vous voulez de la place pour bouger.",
    },
    {
      slug: "begijnhof",
      citySlug: "amsterdam",
      name: "Begijnhof",
      lat: 52.3691,
      lng: 4.8899,
      kind: "sight",
      needsBooking: false,
      tip: "Une cour médiévale feutrée d'hospices cachée derrière une porte non signalée près de la place du Spui, gratuite et l'un des plus anciens lieux de la ville. Baissez la voix, car des gens y vivent encore, et cherchez la maison de bois noire au numéro 34, la plus vieille maison en bois subsistante d'Amsterdam. Ouvert en journée seulement.",
    },
    {
      slug: "dam-square",
      citySlug: "amsterdam",
      name: "Le Dam et le Palais royal",
      lat: 52.3731,
      lng: 4.8926,
      kind: "sight",
      needsBooking: false,
      tip: "Traitez la place elle-même comme une traversée de 15 minutes pour le Monument national et la façade du palais plutôt que comme une destination. L'intérieur du Palais royal ne vaut le billet que si le roi ne l'utilise pas, alors vérifiez le site pour les fermetures avant de payer ; sinon, photographiez la façade et poursuivez vers les Neuf Petites Rues toutes proches.",
    },
    {
      slug: "bloemenmarkt",
      citySlug: "amsterdam",
      name: "Marché aux fleurs flottant Bloemenmarkt",
      lat: 52.3667,
      lng: 4.8918,
      kind: "sight",
      needsBooking: false,
      tip: "Le marché aux fleurs flottant sur le Singel est un arrêt de cinq minutes, alors glissez-le dans une balade entre le Dam et le Rijksmuseum plutôt que d'en faire un trajet spécial. Les bulbes de tulipes vendus ici sont certifiés pour l'export si vous voulez en rapporter ; vérifiez d'abord les règles d'importation de votre pays, car beaucoup exigent le label phytosanitaire que fournissent les étals.",
    },
    {
      slug: "nine-streets",
      citySlug: "amsterdam",
      name: "Les Neuf Petites Rues (De 9 Straatjes)",
      lat: 52.369,
      lng: 4.8859,
      kind: "sight",
      needsBooking: false,
      tip: "Neuf courtes rues transversales reliant les canaux principaux entre le Jordaan et le Dam, bourrées de boutiques indépendantes, de friperies et de petits cafés. C'est le meilleur secteur pour un lèche-vitrines sans hâte et un déjeuner en maison de canal ; venez en semaine pour éviter la cohue du week-end, et notez que la plupart des boutiques indépendantes ouvrent tard, vers 11h.",
    },
    {
      slug: "foodhallen",
      citySlug: "amsterdam",
      name: "Foodhallen",
      lat: 52.3665,
      lng: 4.8697,
      kind: "food",
      needsBooking: false,
      tip: "Une halle gourmande couverte dans un ancien dépôt de tramway à Oud-West, avec une vingtaine de stands sous un même toit, idéale un jour de pluie ou pour un groupe indécis. Elle se remplit et devient bruyante à partir de 19h le week-end, alors arrivez pour 18h pour avoir une table, et payez par carte, car la plupart des stands ne prennent pas d'espèces.",
    },
    {
      slug: "adam-lookout",
      citySlug: "amsterdam",
      name: "A'DAM Lookout",
      lat: 52.3841,
      lng: 4.9008,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Un point de vue en toit-terrasse de l'autre côté de l'IJ, avec la plus haute balançoire d'Europe, accessible par un ferry gratuit qui part juste derrière la gare Centraal toutes les quelques minutes et met trois minutes environ. Réservez le créneau de la balançoire en ligne pour éviter l'attente, allez-y vers le coucher du soleil pour la meilleure lumière sur la ville, et rappelez-vous que le ferry roule toute la nuit si vous restez boire un verre là-haut.",
    },
    {
      slug: "heineken-experience",
      citySlug: "amsterdam",
      name: "Heineken Experience",
      lat: 52.3577,
      lng: 4.8916,
      kind: "experience",
      needsBooking: true,
      tip: "Une visite de marque en autonomie dans l'ancienne brasserie près de De Pijp, à réserver de préférence en ligne pour une réduction sur le prix d'entrée et un horaire fixe qui saute la file. Prenez le créneau le plus matinal pour éviter les vagues de groupes scolaires et d'enterrements de vie de garçon de l'après-midi, et sachez que c'est plus du marketing qu'une brasserie en activité : prenez-le comme une heure amusante plutôt qu'une vraie visite de bière.",
    },
  ],

  itineraries: [
    {
      citySlug: "amsterdam",
      days: 2,
      summary:
        "Deux jours suffisent pour les sites phares d'Amsterdam si vous réservez à l'avance et logez au centre, mais vous ne ferez qu'effleurer les quartiers qui donnent envie de revenir. Le centre est compact : la ceinture de canaux, le quartier des musées et le Jordaan tiennent dans un rayon de 25 minutes à pied les uns des autres, alors un plan serré couvre le Rijksmuseum, le musée Van Gogh et la maison d'Anne Frank plus une balade le long des canaux sans grand transport. Installez-vous au Centrum pour que les deux matinées démarrent à pied. La structure qui marche : un thème par jour, le quartier des musées et le Vondelpark le premier jour, la ceinture de canaux, le Jordaan et la maison d'Anne Frank le second. Réservez trois choses avant d'arriver, car les billets sont la seule vraie menace d'une visite de 48 heures : la maison d'Anne Frank dès la mise en vente des créneaux six semaines à l'avance, et des créneaux horodatés pour le musée Van Gogh et le Rijksmuseum. Ce que vous sacrifiez, c'est De Pijp, les marchés et toute soirée lente au bord d'un canal, précisément ce qu'achète un troisième jour.",
      stayNeighborhoodSlug: "centrum",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Quartier des musées et Vondelpark",
          morning: [
            {
              poiSlug: "rijksmuseum",
              text: "Commencez au Rijksmuseum sur un créneau de 9h réservé à l'avance et filez droit vers la Galerie d'honneur pour voir la Ronde de nuit et les Vermeer avant que les salles ne se remplissent. Comptez deux heures et n'essayez pas de tout voir.",
              durationMin: 120,
            },
            {
              poiSlug: "van-gogh-museum",
              text: "Marchez deux minutes à travers le Museumplein jusqu'au musée Van Gogh pour votre créneau horodaté. La collection est présentée chronologiquement, alors suivez les étages dans l'ordre pour voir son style évoluer.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Déjeunez sur le Museumplein ou tout près, puis parcourez le jardin de sculptures gratuit derrière le Rijksmuseum et les lettres I amsterdam pour la photo classique.",
              durationMin: 75,
            },
            {
              poiSlug: "vondelpark",
              text: "Entrez dans le Vondelpark par le côté du quartier des musées et parcourez-le dans sa longueur avec un café, en vous arrêtant à l'étang et au théâtre en plein air. C'est gratuit et la meilleure façon de se remettre après deux musées.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "canal-cruise",
              text: "Faites une croisière sur les canaux en petit bateau électrique ouvert au coucher du soleil depuis l'embarcadère du Rijksmuseum, en évitant les grands bateaux à toit vitré près de Centraal. Une heure sur l'eau vous cadre toute la ceinture de canaux.",
              durationMin: 75,
            },
            {
              text: "Dîner au centre, à l'écart des rues touristiques principales ; reculez d'une rue par rapport au Dam ou au Leidseplein et les prix comme la qualité s'améliorent nettement.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Ceinture de canaux, le Jordaan et Anne Frank",
          morning: [
            {
              poiSlug: "anne-frank-house",
              text: "Arrivez pour votre créneau réservé à la maison d'Anne Frank ; il n'y a pas d'entrée sur place, alors ce billet a dû être acheté le jour de sa mise en vente six semaines à l'avance. Le parcours horodaté à travers l'annexe cachée prend environ une heure et frappe le plus fort tôt dans la journée.",
              durationMin: 75,
            },
            {
              poiSlug: "jordaan-canals",
              text: "Sortez droit dans le Jordaan et parcourez le Prinsengracht, le Bloemgracht et l'Egelantiersgracht sans itinéraire fixe, en faisant un détour par la cour gratuite de l'hospice Karthuizerhof.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "nine-streets",
              text: "Passez aux Neuf Petites Rues pour un déjeuner en maison de canal et un lèche-vitrines sans hâte des boutiques indépendantes entre les canaux principaux. La plupart ouvrent vers 11h, alors le début d'après-midi est le moment idéal.",
              durationMin: 105,
            },
            {
              poiSlug: "begijnhof",
              text: "Glissez-vous par la porte non signalée près du Spui dans la cour feutrée du Begijnhof, puis cherchez la maison de bois noire au numéro 34, la plus ancienne de la ville. Baissez la voix ; des gens y vivent encore.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "dam-square",
              text: "Traversez le Dam pour la façade du Palais royal et le Monument national, en le prenant comme un passage de 15 minutes plutôt qu'un arrêt, puis longez les étals du marché aux fleurs Bloemenmarkt sur le Singel.",
              durationMin: 45,
            },
            {
              text: "Terminez par un verre dans un brown cafe du Jordaan, du genre au sable sur le sol et aux habitants au comptoir, pour la soirée la plus amstellodamoise qu'offre le centre.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
    {
      citySlug: "amsterdam",
      days: 3,
      summary:
        "Trois jours sont la bonne durée pour Amsterdam : assez pour les trois grands musées et la ceinture de canaux à un rythme humain, plus une journée qui appartient aux quartiers plutôt qu'à la liste. Deux jours vous forcent à enchaîner au pas de course le quartier des musées et les canaux ; le troisième jour ajoute De Pijp, le marché Albert Cuyp et une vue en toiture de l'autre côté de l'IJ, avec le temps de s'asseoir à un café sans regarder l'heure. Logez au Jordaan, le plus joli et le plus calme des quartiers centraux, pour avoir la maison d'Anne Frank et les canaux ouest à votre porte et des soirées tranquilles. La forme du plan : le quartier des musées et le Vondelpark le premier jour, la ceinture de canaux et le Jordaan le deuxième, De Pijp et la rive nord le troisième. Réservez trois choses en ligne avant d'arriver : la maison d'Anne Frank à l'instant de la mise en vente des créneaux six semaines avant, et des entrées horodatées pour le musée Van Gogh et le Rijksmuseum. Tout le reste récompense ceux qui arrivent tôt et prennent les trams plutôt que les taxis.",
      stayNeighborhoodSlug: "jordaan",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Quartier des musées et Vondelpark",
          morning: [
            {
              poiSlug: "rijksmuseum",
              text: "Depuis votre base au Jordaan, descendez en tram jusqu'au Rijksmuseum pour un créneau de 9h et filez droit vers la Galerie d'honneur et la Ronde de nuit avant que la foule ne monte.",
              durationMin: 120,
            },
            {
              poiSlug: "van-gogh-museum",
              text: "Traversez le Museumplein jusqu'au musée Van Gogh pour votre entrée horodatée et suivez les étages dans l'ordre chronologique pour voir l'oeuvre se transformer.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Déjeunez près du Museumplein, puis parcourez le jardin de sculptures gratuit derrière le Rijksmuseum et photographiez les lettres I amsterdam.",
              durationMin: 75,
            },
            {
              poiSlug: "vondelpark",
              text: "Parcourez le Vondelpark dans sa longueur depuis l'extrémité du quartier des musées, en vous arrêtant au théâtre en plein air, qui donne des spectacles gratuits les week-ends d'été. C'est le meilleur après-midi gratuit de la ville.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "canal-cruise",
              text: "Faites une croisière en petit bateau électrique ouvert au coucher du soleil pour la meilleure lumière sur les maisons à pignon, en réservant un départ à l'avance l'été quand les bons opérateurs affichent complet.",
              durationMin: 75,
            },
            {
              text: "Dîner de retour au Jordaan dans un petit restaurant au bord d'un canal, puis un dernier verre dans un brown cafe où boivent les habitants.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Ceinture de canaux et le Jordaan",
          morning: [
            {
              poiSlug: "anne-frank-house",
              text: "Marchez jusqu'à votre créneau réservé à la maison d'Anne Frank ; il n'y a pas de file sur place, alors ceci a dû être acheté le jour de la mise en vente six semaines à l'avance. Le parcours horodaté à travers l'annexe dure environ une heure.",
              durationMin: 75,
            },
            {
              poiSlug: "jordaan-canals",
              text: "Explorez votre propre quartier à pied : le Prinsengracht, le Bloemgracht et l'Egelantiersgracht, plus la cour tranquille du Karthuizerhof que la plupart des visiteurs manquent.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "nine-streets",
              text: "Passez aux Neuf Petites Rues pour un déjeuner en maison de canal et un lèche-vitrines des boutiques indépendantes. Les jours de semaine sont bien plus calmes que la cohue du week-end.",
              durationMin: 105,
            },
            {
              poiSlug: "begijnhof",
              text: "Glissez-vous par la porte non signalée près du Spui dans la cour du Begijnhof et trouvez la maison de bois noire au numéro 34, la plus ancienne d'Amsterdam.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "dam-square",
              text: "Traversez le Dam pour le Palais royal et le Monument national, puis longez le Singel devant les étals flottants du marché aux fleurs Bloemenmarkt à l'heure de la fermeture.",
              durationMin: 60,
            },
            {
              text: "Dîner au centre à une rue des artères principales, puis une lente marche de retour au Jordaan le long du Prinsengracht éclairé, la ceinture de canaux à son meilleur après la nuit tombée.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "De Pijp, marchés et la rive nord",
          morning: [
            {
              poiSlug: "albert-cuyp-market",
              text: "Prenez le tram jusqu'à De Pijp pour le marché Albert Cuyp avant midi, quand il est le plus animé mais encore praticable. Prenez un stroopwafel pressé à la commande et grignotez aux stands de fromage et de cuisine plutôt qu'aux souvenirs.",
              durationMin: 90,
            },
            {
              text: "Flânez vers le sud dans le petit Sarphatipark et les rues bordées de cafés de De Pijp, le quartier où les jeunes Amstellodamois mangent et boivent vraiment.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "heineken-experience",
              text: "Faites la Heineken Experience toute proche sur un créneau réservé si la visite de marque vous tente, en la prenant comme une heure amusante plutôt qu'une vraie visite de brasserie ; sinon, consacrez ce temps à d'autres cafés de De Pijp.",
              durationMin: 105,
            },
            {
              text: "Prenez le tram jusqu'à Centraal et le ferry gratuit de trois minutes derrière la gare pour traverser l'IJ jusqu'à Amsterdam Noord.",
              durationMin: 30,
            },
          ],
          evening: [
            {
              poiSlug: "adam-lookout",
              text: "Montez en ascenseur à l'A'DAM Lookout pour la vue en toiture sur la ville vers le coucher du soleil, et prenez la balançoire au bord du toit si vous n'avez pas le vertige. Réservez le créneau de la balançoire à l'avance pour éviter l'attente.",
              durationMin: 90,
            },
            {
              text: "Dînez sur le front de mer de Noord en regardant vers la silhouette de la ville, puis reprenez le ferry ; il roule toute la nuit, alors rien ne presse.",
              durationMin: 105,
            },
          ],
        },
      ],
    },
    {
      citySlug: "amsterdam",
      days: 4,
      summary:
        "Quatre jours suffisent largement pour les sites d'Amsterdam, et c'est bien le but : le quatrième jour transforme la course aux musées en vrai voyage. Les jours un à trois couvrent le quartier des musées, la ceinture de canaux, le Jordaan et De Pijp à un rythme détendu ; le quatrième jour est à vous, soit pour une journée locale tranquille dans les quartiers est, soit pour une excursion aux moulins de Zaanse Schans ou à Haarlem, tous deux à moins de 30 minutes de train. Avec tout ce temps, évitez le centre animé et logez à De Pijp, à dix minutes du quartier des musées, moins cher que la ceinture de canaux, et foyer de la meilleure cuisine et vie nocturne au meilleur prix de la ville. La logique d'un thème par jour tient toujours : gardez les deux grands musées et le Vondelpark ensemble, gardez les canaux et le Jordaan ensemble, et ne zigzaguez pas à travers la ville. Réservez à l'avance la maison d'Anne Frank le jour de la mise en vente des créneaux six semaines avant, plus des entrées horodatées pour le musée Van Gogh et le Rijksmuseum. Si vous hésitiez entre trois et quatre jours, c'est le quatrième dont vous vous souviendrez.",
      stayNeighborhoodSlug: "de-pijp",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Quartier des musées et Vondelpark",
          morning: [
            {
              poiSlug: "rijksmuseum",
              text: "Montez à pied depuis De Pijp jusqu'au Rijksmuseum pour votre créneau de 9h et filez droit vers la Galerie d'honneur pour la Ronde de nuit et les Vermeer avant que les salles ne se remplissent.",
              durationMin: 120,
            },
            {
              poiSlug: "van-gogh-museum",
              text: "Traversez le Museumplein jusqu'au musée Van Gogh pour votre entrée horodatée, en suivant les étages dans l'ordre pour retracer comment sa peinture a changé.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Déjeunez sur le Museumplein, puis le jardin de sculptures gratuit derrière le Rijksmuseum et les lettres I amsterdam pour la photo.",
              durationMin: 75,
            },
            {
              poiSlug: "vondelpark",
              text: "Parcourez le Vondelpark de bout en bout, en faisant une pause au théâtre en plein air pour un spectacle d'été gratuit si le programme s'y prête.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "canal-cruise",
              text: "Faites une croisière en petit bateau ouvert au coucher du soleil depuis l'embarcadère du Rijksmuseum pour la meilleure lumière sur l'eau, en réservant à l'avance en haute saison.",
              durationMin: 75,
            },
            {
              text: "Dîner de retour à De Pijp, où les rues de restaurants et de bars autour de l'Albert Cuyp offrent le meilleur rapport qualité-prix de la ville, puis un verre dans un café local.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Ceinture de canaux et le Jordaan",
          morning: [
            {
              poiSlug: "anne-frank-house",
              text: "Prenez le tram jusqu'à votre créneau réservé à la maison d'Anne Frank ; il n'y a pas de file sur place, alors ce billet a dû être acheté le jour de sa mise en vente six semaines à l'avance. Le parcours à travers l'annexe cachée prend environ une heure.",
              durationMin: 75,
            },
            {
              poiSlug: "jordaan-canals",
              text: "Parcourez les canaux du Jordaan, le Prinsengracht, le Bloemgracht et l'Egelantiersgracht, avec un détour par la cour tranquille de l'hospice Karthuizerhof.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "nine-streets",
              text: "Déjeunez et flânez dans les Neuf Petites Rues entre les canaux principaux ; choisissez un jour de semaine pour éviter les foules de shopping du week-end.",
              durationMin: 105,
            },
            {
              poiSlug: "begijnhof",
              text: "Trouvez la cour cachée du Begijnhof près du Spui et la maison de bois noire au numéro 34, puis longez le marché aux fleurs Bloemenmarkt sur le Singel.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "dam-square",
              text: "Traversez le Dam au crépuscule pour le Palais royal et le Monument national, un passage de 15 minutes plutôt qu'un arrêt.",
              durationMin: 30,
            },
            {
              text: "Dîner au centre à une rue des rues touristiques, puis une marche de retour le long du Prinsengracht éclairé.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "De Pijp, marchés et la rive nord",
          morning: [
            {
              poiSlug: "albert-cuyp-market",
              text: "Commencez à votre porte au marché Albert Cuyp avant midi, en attrapant un stroopwafel frais et en grignotant aux stands de cuisine. Rappelez-vous qu'il ferme le dimanche.",
              durationMin: 90,
            },
            {
              poiSlug: "heineken-experience",
              text: "Faites la Heineken Experience toute proche sur un créneau matinal réservé si la visite de marque vous tente, en la prenant comme une heure légère, puis flânez dans le Sarphatipark et les rues de De Pijp.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Prenez le tram jusqu'à Centraal et le ferry gratuit de trois minutes à travers l'IJ jusqu'à Amsterdam Noord, le quartier le plus transformé de la ville.",
              durationMin: 45,
            },
            {
              poiSlug: "adam-lookout",
              text: "Montez à l'A'DAM Lookout pour le panorama en toiture et, si vous l'osez, la balançoire au bord du toit. Réservez le créneau de la balançoire à l'avance pour éviter la file.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Prenez un dîner précoce sur le front de mer de Noord en regardant vers la silhouette de la ville, puis reprenez le ferry à travers l'IJ, qui roule toute la nuit.",
              durationMin: 105,
            },
            {
              text: "Terminez par un dernier verre à De Pijp ; les bars ici ferment plus tard et coûtent moins cher que tout ce qu'offre le centre.",
              durationMin: 60,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Journée locale à Oost ou excursion à Zaanse Schans et Haarlem",
          morning: [
            {
              text: "Option A : prenez le tram vers l'est jusqu'à Oost pour une matinée locale tranquille autour de l'Oosterpark, du Tropenmuseum sur les cultures du monde et des cafés multiculturels du Dappermarkt. Option B : prenez le train direct de Centraal jusqu'à Zaandijk Zaanse Schans, environ 17 minutes, pour les moulins en activité, les maisons de bois et les ateliers de fromage et de sabots le long de la rivière.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              text: "L'option A continue à Oost avec un déjeuner dans un bistrot de quartier et une promenade dans le parc du zoo Artis ou le long des îles du port est. Option B : enchaînez en train jusqu'à Haarlem, à 15 minutes de Zaandijk ou d'Amsterdam, pour la vieille ville compacte, le Grote Markt et le musée Frans Hals avant le train du retour.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              text: "Dans les deux cas, terminez de retour à De Pijp sur les terrasses et les bars autour de l'Albert Cuyp et du Sarphatipark, la vraie scène du soir du quartier.",
              durationMin: 120,
            },
            {
              text: "Dernier dîner dans un restaurant de De Pijp ; le secteur fait une cuisine inventive à prix honnêtes, un repas final digne après les menus touristiques du centre.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
  ],
};

export default amsterdamFr;
