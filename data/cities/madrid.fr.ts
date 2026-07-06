import type { CityData } from "../types";

const madridFr: CityData = {
  city: {
    slug: "madrid",
    name: "Madrid",
    country: "Espagne",
    countrySlug: "spain",
    lat: 40.4168,
    lng: -3.7038,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "MAD",
    airportToCenter:
      "La ligne 8 du métro depuis Barajas rejoint Nuevos Ministerios en 30 min environ, mais attention au supplément aéroport de 3 EUR qui s'ajoute au ticket, comptez donc autour de 4,50 à 5 EUR. Autres options : le bus Airport Express 24h/24 jusqu'à Atocha pour environ 5 EUR, ou le train de banlieue Cercanias C1 depuis le T4 vers les gares centrales.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [7, 8],
    monthlyNotes: {
      1: "Froid et sec avec des maximales autour de 10C et des matins givrés, et la ville est calme après la cavalcade des Rois mages du 6 janvier, le plus grand événement pour les enfants du Noël espagnol. Les tarifs des hôtels sont au plus bas de l'année, et les créneaux gratuits du soir au musée du Prado et au Reina Sofia sont délicieusement peu fréquentés.",
      2: "Encore froid autour de 12C mais souvent lumineux et ensoleillé, avec le moins de touristes de l'année et les lits les moins chers. Un bon mois pour le triangle de l'art : profitez des deux dernières heures gratuites au Prado et au Reina Sofia sans les files du printemps.",
      3: "Les maximales grimpent vers 16C et les terrasses rouvrent les après-midis ensoleillés, même si les soirées restent fraîches. Si la Semana Santa tombe fin mars, attendez-vous à de solennelles processions de la Semaine sainte et à une hausse des visiteurs espagnols et des prix hôteliers la semaine précédant Pâques.",
      4: "L'un des meilleurs mois à 18C, verdoyant et doux, avec le Retiro en fleurs et une marche agréable toute la journée. Pâques tombe souvent ici, donc les processions de la Semana Santa et des prix plus élevés peuvent frapper la semaine où tombe la Semaine sainte ; réservez autour ou dedans en connaissance de cause.",
      5: "Madrid au sommet : chaud à 23C, longue lumière, et la fête de San Isidro à la mi-mai emplit la ville de concerts, de verbenas et de locaux en costume traditionnel autour de La Latina et de Las Vistillas. Foules et prix sont en hausse, réservez donc le Prado et le Palais royal à l'avance.",
      6: "Chaud à très chaud à 29C avec de longues soirées et la saison des terrasses battant son plein, avant l'arrivée de la vraie fournaise. Les grands musées sont bondés, prenez donc les créneaux gratuits du soir ou l'ouverture de 9h, et gardez les après-midis pour l'ombre.",
      7: "Chaud et sec, régulièrement au-dessus de 34C, et le début juillet amène l'Orgullo, l'immense Gay Pride de Madrid autour de Chueca, l'une des plus grandes d'Europe, qui remplit le centre une semaine durant. Visitez avant midi, cachez-vous de la chaleur de 15h à 19h, et dînez tard comme tout le monde.",
      8: "Le mois le plus vide et le plus chaud : les maximales poussent à 35C et bien des bars et restaurants familiaux ferment pour les vacances quand les Madrilènes partent vers la côte. Le programme culturel Veranos de la Villa maintient quelques concerts et cinémas en plein air, mais c'est le mois à éviter, sauf si des lits bon marché l'emportent sur la chaleur.",
      9: "La chaleur se calme au fil du mois, d'environ 30C à agréable, la ville se remplit à nouveau quand les locaux reviennent, et les terrasses restent animées jusque tard dans la nuit. Les foules se relâchent après la première semaine, ce qui fait de la mi à fin septembre sans doute la plus belle fenêtre de l'année.",
      10: "Journées douces autour de 22C, lumière dorée au Retiro, et les premières pluies légères revenant en fin de mois. Les foules s'éclaircissent nettement et le rapport qualité-prix des hôtels s'améliore, un solide choix de demi-saison pour arpenter tout le centre confortablement.",
      11: "Frais à 15C avec davantage de jours gris et humides, mais des éclaircies entre les fronts et les grands sites les plus calmes de l'automne. Les tarifs de basse saison reviennent et vous pouvez souvent réserver le Palais royal ou une visite du Bernabeu à quelques jours près.",
      12: "Froid autour de 10C mais festif, avec les illuminations tendues au-dessus de la Gran Via et du centre, et la Puerta del Sol épicentre du réveillon du Nouvel An quand les foules mangent douze grains de raisin aux douze coups. Calme jusqu'à la période de Noël au Nouvel An, où les tarifs grimpent et les soirées gratuites des musées attirent les foules locales.",
    },
    climate: {
      1: { highC: 10, lowC: 3, rainyDays: 5 },
      2: { highC: 12, lowC: 3, rainyDays: 4 },
      3: { highC: 16, lowC: 5, rainyDays: 4 },
      4: { highC: 18, lowC: 7, rainyDays: 7 },
      5: { highC: 23, lowC: 11, rainyDays: 6 },
      6: { highC: 29, lowC: 16, rainyDays: 3 },
      7: { highC: 34, lowC: 19, rainyDays: 1 },
      8: { highC: 34, lowC: 19, rainyDays: 1 },
      9: { highC: 28, lowC: 15, rainyDays: 3 },
      10: { highC: 22, lowC: 10, rainyDays: 6 },
      11: { highC: 15, lowC: 6, rainyDays: 6 },
      12: { highC: 10, lowC: 3, rainyDays: 6 },
    },
    budgetLevel: "mid",
    budgetPerDay: { budget: 65, mid: 135, high: 270 },
    tagline: "Un art de classe mondiale, des places des Habsbourg, et des tapas mangées tard et debout.",
    heroIntro:
      "Madrid vous offre l'un des plus grands triangles de l'art au monde, un vieux coeur des Habsbourg compact, et la culture du manger-boire la plus effrénée d'Espagne, le tout dans un centre que l'on traverse à pied d'un bout à l'autre. Trois jours, c'est la durée honnête : un pour le Prado, le Reina Sofia et le Thyssen, un pour la vieille ville royale, et un pour un barrio animé. Venez au printemps ou en automne, réservez la soirée gratuite du Prado ou le Palais royal à l'avance, et dînez à 22h comme un local.",
    accent: { from: "#C42E3A", to: "#E8A33D", ink: "#6E1F28" },
    neighborhoodSlugs: ["centro", "la-latina", "malasana", "chueca", "salamanca"],
    nearbyCitySlugs: ["seville", "barcelona"],
  },

  neighborhoods: [
    {
      slug: "centro",
      citySlug: "madrid",
      name: "Centro (Sol et le coeur des Habsbourg)",
      lat: 40.4155,
      lng: -3.7074,
      bestFor: ["first-time", "family"],
      vibe: "Le coeur historique autour de la Puerta del Sol, de la Plaza Mayor et du Palais royal, où chaque monument phare se trouve à dix minutes de marche. C'est le Madrid des cartes postales, animé jour et nuit, avec les boutiques et théâtres de la Gran Via à quelques rues au nord. Vous payez les prix du centre et acceptez le bruit pour avoir toute la vieille ville à votre porte.",
      pros: [
        "Marche jusqu'à la Plaza Mayor, le Palais royal, Sol et la Gran Via sans transport",
        "Le secteur le mieux desservi, avec le métro et le hub Cercanias de Sol en dessous",
        "Dense en bars à tapas, marchés et sites à chaque coin",
      ],
      cons: [
        "La zone la plus touristique, avec des pickpockets autour de Sol et de la Gran Via",
        "Le bruit de la rue court tard, un mauvais choix pour le sommeil léger",
        "Les restaurants des grandes places sont facturés pour les visiteurs",
      ],
    },
    {
      slug: "la-latina",
      citySlug: "madrid",
      name: "La Latina",
      lat: 40.4109,
      lng: -3.7108,
      bestFor: ["local", "nightlife", "romantic"],
      vibe: "Le plus vieux quartier au sud de la Plaza Mayor est le fief des tapas de Madrid, un lacis de ruelles médiévales autour de Cava Baja et des rues du marché d'El Rastro. Le dimanche est son grand jour, quand le marché aux puces se déverse dans les bars pour une longue session vermouth-et-tapas. Assez central pour tout faire à pied, avec bien plus de vie de quartier que Sol.",
      pros: [
        "Cava Baja et Cava Alta réunissent la meilleure tournée de bars à tapas de la ville",
        "Dix minutes de marche jusqu'à la Plaza Mayor et le Palais royal",
        "Le marché d'El Rastro du dimanche et la culture du vermouth à votre porte",
      ],
      cons: [
        "Bruyant du jeudi au dimanche soir autour des rues à bars",
        "Les vieux immeubles signifient des petites chambres et des escaliers raides ou pas d'ascenseur",
        "Les foules du marché du dimanche encombrent les rues jusqu'au milieu de l'après-midi",
      ],
    },
    {
      slug: "malasana",
      citySlug: "madrid",
      name: "Malasana",
      lat: 40.4258,
      lng: -3.7038,
      bestFor: ["nightlife", "local", "budget"],
      vibe: "Le berceau de la Movida des années 1980 est aujourd'hui le quartier le plus branché de Madrid, plein de friperies, de café de troisième vague, de bars indépendants et de petites cuisines autour de la Plaza del Dos de Mayo. Jeune, à taille de piéton et animé jusque tard, à courte flânerie au nord de la Gran Via et du centre. Bon rapport qualité-prix pour le secteur, si vous parvenez à dormir malgré la bande-son du week-end.",
      pros: [
        "La meilleure scène indépendante de bars, cafés et shopping de la ville",
        "Accessible à pied à la Gran Via et au centre en dix minutes",
        "Des lits d'un meilleur rapport qualité-prix que Sol ou Salamanca pour la même centralité",
      ],
      cons: [
        "Très bruyant les nuits de week-end autour des places",
        "Peu de sites classiques dans le secteur immédiat",
        "Prisé d'une clientèle festive, donc les rues peuvent être agitées à 3h",
      ],
    },
    {
      slug: "chueca",
      citySlug: "madrid",
      name: "Chueca",
      lat: 40.4224,
      lng: -3.6968,
      bestFor: ["nightlife", "local", "romantic"],
      vibe: "Le quartier fièrement LGBTQ+ de Madrid est une grille élégante et vivante de boutiques de design, de bars à vin et de restaurants autour de la Plaza de Chueca, et l'épicentre de l'immense Orgullo Pride du début juillet. Il est raffiné et convivial plutôt que brut, à distance de marche de la Gran Via et du Thyssen. Central, festif, et rassurant bien avant dans la nuit.",
      pros: [
        "D'excellents restaurants, bars à cocktails et boutiques serrés les uns contre les autres",
        "Marche jusqu'à la Gran Via, le Thyssen et le Retiro en quinze minutes",
        "Une vie nocturne accueillante et animée qui culmine pendant la Pride de juillet",
      ],
      cons: [
        "Le bruit du week-end et de la semaine de la Pride est intense autour de la place",
        "L'un des secteurs centraux les plus chers pour les hôtels comme pour les repas",
        "Peu de sites de renom au sein même du quartier",
      ],
    },
    {
      slug: "salamanca",
      citySlug: "madrid",
      name: "Salamanca",
      lat: 40.4302,
      lng: -3.6795,
      bestFor: ["romantic", "family"],
      vibe: "La grille élégante au nord-est du Retiro est le quartier chic de Madrid, où se trouvent l'artère des grandes marques le long de la Calle Serrano, des restaurants raffinés et des boulevards larges et calmes. Il échange le caractère de la vieille ville contre l'espace, le calme et la sécurité, à courte marche ou métro du triangle de l'art et du parc. Posez-vous ici pour le raffinement et une bonne nuit de sommeil plutôt que l'ambiance des pavés.",
      pros: [
        "Des rues calmes, sûres et élégantes avec le shopping haut de gamme sur Serrano",
        "À courte marche du Retiro et du Prado, plus de bonnes liaisons de métro",
        "Une gastronomie fiable et haut de gamme sans le tumulte de la vieille ville",
      ],
      cons: [
        "Hôtels, boutiques et restaurants chers sur toute la ligne",
        "L'ambiance est plus formelle et résidentielle qu'animée le soir",
        "À 20 minutes de marche ou un saut de métro du vieux coeur des Habsbourg",
      ],
    },
  ],

  pois: [
    {
      slug: "prado-museum",
      citySlug: "madrid",
      name: "Musée du Prado",
      lat: 40.4138,
      lng: -3.6921,
      kind: "museum",
      needsBooking: true,
      tip: "L'entrée est gratuite les deux dernières heures (du lundi au samedi 18h00-20h00, dimanche 17h00-19h00), mais les files se forment bien avant, arrivez donc 30 à 45 minutes en avance. Si vous payez, réservez un créneau horaire en ligne, filez droit aux Menines de Velazquez et aux peintures noires de Goya en premier, et comptez deux à trois heures minimum pour les incontournables.",
    },
    {
      slug: "reina-sofia",
      citySlug: "madrid",
      name: "Musée Reina Sofia",
      lat: 40.4079,
      lng: -3.6946,
      kind: "museum",
      needsBooking: true,
      tip: "Guernica est la raison de venir, et elle vit dans la salle 205. L'entrée est gratuite les soirs de semaine (lundi et du mercredi au samedi 19h00-21h00) et le dimanche après-midi à partir de 12h30, mais c'est fermé le mardi toute la journée ; réservez en ligne pour sauter la file, allez d'abord à la toile de Picasso, puis rayonnez vers Dali et Miro.",
    },
    {
      slug: "thyssen-bornemisza",
      citySlug: "madrid",
      name: "Musée Thyssen-Bornemisza",
      lat: 40.4160,
      lng: -3.6948,
      kind: "museum",
      needsBooking: true,
      tip: "Le troisième sommet du triangle de l'art comble les vides laissés par le Prado et le Reina Sofia : impressionnistes, maîtres anciens et oeuvres du XXe siècle dans une collection à taille de piéton. L'entrée est gratuite le lundi après-midi (12h00-16h00) pour la collection permanente ; réservez en ligne sinon, commencez au dernier étage et descendez de façon chronologique pour épargner vos jambes.",
    },
    {
      slug: "royal-palace",
      citySlug: "madrid",
      name: "Palais royal (Palacio Real)",
      lat: 40.4179,
      lng: -3.7143,
      kind: "sight",
      needsBooking: true,
      tip: "Réservez en ligne pour sauter la longue file de billetterie, et vérifiez d'abord le site car le palais ferme aux visiteurs sans préavis pour les cérémonies d'État. Visez l'ouverture de 10h, faites les salons d'apparat et l'Armurerie royale, puis traversez vers la cathédrale de la Almudena gratuite et les jardins de Sabatini juste à côté.",
    },
    {
      slug: "retiro-park",
      citySlug: "madrid",
      name: "Parc du Retiro et palais de Cristal",
      lat: 40.4152,
      lng: -3.6844,
      kind: "park",
      needsBooking: false,
      tip: "Gratuit et ouvert dès l'aube ; entrez du côté de la Puerta de Alcala et marchez jusqu'au lac aux barques, où les barques à rames coûtent environ 6 EUR pour 45 minutes avec les files les plus courtes avant midi. Le Palacio de Cristal, un pavillon de verre accueillant des installations gratuites d'art contemporain, se niche plus profond dans le parc et est la chose à ne pas manquer.",
    },
    {
      slug: "plaza-mayor",
      citySlug: "madrid",
      name: "Plaza Mayor",
      lat: 40.4155,
      lng: -3.7074,
      kind: "sight",
      needsBooking: false,
      tip: "La grande place à arcades du XVIIe siècle est gratuite et se savoure au mieux tôt le matin ou après le dîner, quand la cohue du jour s'estompe. Ne vous asseyez pas aux terrasses des cafés sur la place elle-même, où la marge est brutale ; prenez plutôt l'en-cas de rue local, un bocadillo de calamares, dans un bar de la Calle Botoneras voisine.",
    },
    {
      slug: "puerta-del-sol",
      citySlug: "madrid",
      name: "Puerta del Sol",
      lat: 40.4169,
      lng: -3.7033,
      kind: "sight",
      needsBooking: false,
      tip: "Le centre littéral de l'Espagne, marqué par le Kilomètre Zéro dans le pavé, et la place où les foules mangent douze grains de raisin aux douze coups du réveillon. C'est un hub de transit et d'orientation plus qu'un lieu où s'attarder, alors passez, trouvez la statue de l'ours et de l'arbousier, et gardez votre sac fermé dans la foule.",
    },
    {
      slug: "gran-via",
      citySlug: "madrid",
      name: "Gran Via",
      lat: 40.4200,
      lng: -3.7025,
      kind: "sight",
      needsBooking: false,
      tip: "Le grand boulevard du début du XXe siècle de Madrid se parcourt au mieux au crépuscule, quand les devantures et le dôme de l'immeuble Metropolis s'illuminent. C'est une artère de choix pour les pickpockets, gardez donc les sacs fermés et les téléphones loin du bord du trottoir ; pour la vue classique depuis les toits, la terrasse du Circulo de Bellas Artes voisin facture environ 5 EUR.",
    },
    {
      slug: "mercado-de-san-miguel",
      citySlug: "madrid",
      name: "Marché de San Miguel",
      lat: 40.4153,
      lng: -3.7090,
      kind: "food",
      needsBooking: false,
      tip: "Le marché restauré en fer et verre à côté de la Plaza Mayor est une halle à tapas gastronomique, plus léchée et plus chère que les bars locaux, traitez-le donc comme une halte grignotage plutôt qu'un vrai repas. Allez-y vers midi ou en milieu d'après-midi pour éviter la cohue de 20h, achetez deux ou trois tapas à différents stands, et mangez debout, car il y a peu de places assises.",
    },
    {
      slug: "temple-of-debod",
      citySlug: "madrid",
      name: "Temple de Debod",
      lat: 40.4240,
      lng: -3.7176,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Ce véritable temple de l'Égypte antique, offert à l'Espagne et remonté dans un parc, est le spot classique et gratuit du coucher de soleil à Madrid, avec la pierre reflétée dans son bassin et le ciel au-dessus de la Casa de Campo derrière. Venez 30 minutes avant le coucher pour une bonne place à la rambarde ; c'est fréquenté, et l'intérieur a une entrée horaire gratuite limitée (fermé le lundi).",
    },
    {
      slug: "el-rastro",
      citySlug: "madrid",
      name: "Marché aux puces d'El Rastro",
      lat: 40.4085,
      lng: -3.7075,
      kind: "experience",
      needsBooking: false,
      tip: "L'immense marché aux puces en plein air de Madrid n'a lieu que le dimanche matin, à peu près de 9h à 15h, débordant sur la Calle Ribera de Curtidores et les ruelles de La Latina. Venez avant 11h pour éviter la cohue, gardez les objets de valeur dans une poche avant car c'est un terrain de choix pour les pickpockets, et terminez par un vermouth dans un bar de Cava Baja comme les locaux.",
    },
    {
      slug: "plaza-de-cibeles",
      citySlug: "madrid",
      name: "Place de Cibeles",
      lat: 40.4192,
      lng: -3.6931,
      kind: "sight",
      needsBooking: false,
      tip: "Le carrefour fontaine-et-palais est un monument gratuit, et les supporters du Real Madrid se réunissent à la fontaine de Cibeles pour fêter les titres. Montez au Palacio de Cibeles pour son belvédère sur le toit (environ 3 EUR) pour une vue large le long du Paseo del Prado ; il se trouve sur le trajet à pied entre le Prado et la Gran Via, alors glissez-le entre les deux.",
    },
    {
      slug: "cava-baja-tapas",
      citySlug: "madrid",
      name: "Tournée des tapas de Cava Baja (La Latina)",
      lat: 40.4113,
      lng: -3.7098,
      kind: "food",
      needsBooking: false,
      tip: "Cava Baja est la meilleure rue à tapas de Madrid, une enfilade de vieilles tavernes où vous commandez une ou deux assiettes et une boisson à chacune, puis vous poursuivez. Commencez vers 21h quand les cuisines trouvent leur rythme, tenez-vous au comptoir plutôt que de prendre une table, et goûtez les classiques : gambas al ajillo, croquetas et une caña de bière.",
    },
    {
      slug: "santiago-bernabeu",
      citySlug: "madrid",
      name: "Visite du stade Santiago Bernabeu",
      lat: 40.4531,
      lng: -3.6883,
      kind: "experience",
      needsBooking: true,
      tip: "La visite du stade et le musée du Real Madrid sont un parcours libre passant par les sièges au bord du terrain, les vestiaires et la salle des trophées ; réservez en ligne pour un créneau horaire, car les billets sur place se vendent les week-ends de match. Les visites sont fermées les jours de match et souvent la veille, vérifiez donc le calendrier des rencontres avant de partir ; le métro vous dépose à Santiago Bernabeu sur la ligne 10.",
    },
  ],

  itineraries: [
    {
      citySlug: "madrid",
      days: 2,
      summary:
        "Deux jours couvrent l'essentiel de Madrid, mais c'est une course et vous sentirez la compression, car la ville en veut vraiment trois. En 48 heures vous pouvez faire le triangle de l'art le premier jour (le Prado, puis le Reina Sofia pour Guernica, avec le Retiro entre les deux) et la vieille ville des Habsbourg le deuxième jour (le Palais royal, la Plaza Mayor, Sol et San Miguel), terminant chaque soir en tapas à La Latina. Ce qui casse un court séjour, c'est le timing : profitez des deux dernières heures gratuites du Prado ou réservez un créneau, et réservez le Palais royal en ligne pour qu'une file ne dévore pas votre matinée. Posez-vous à Centro pour que les deux jours démarrent à pied et que le dîner soit toujours à deux pas. Ce que vous sacrifiez à ce rythme, c'est le Thyssen, une pleine journée de barrio, Salamanca, le Bernabeu et toute excursion, donc cela convient à un week-end ou un premier aperçu. Si vous pouvez ajouter un troisième jour, prenez-le : trois jours, c'est là que Madrid cesse de ressembler à un sprint.",
      stayNeighborhoodSlug: "centro",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Le triangle de l'art : Prado, Retiro, Reina Sofia",
          morning: [
            {
              poiSlug: "prado-museum",
              text: "Commencez au Prado pour l'ouverture de 10h sur un créneau horaire réservé, en allant droit aux Menines de Velazquez et aux peintures noires de Goya avant que les galeries ne se remplissent. Deux à trois heures couvrent les chefs-d'oeuvre phares sans marche forcée.",
              durationMin: 165,
            },
          ],
          afternoon: [
            {
              text: "Déjeuner côté Paseo del Prado ou en remontant vers Anton Martin, puis gardez le repas léger car le dîner se prend tard à Madrid. Un menu del dia dans un bar de quartier est l'option qualité-prix.",
              durationMin: 75,
            },
            {
              poiSlug: "retiro-park",
              text: "Entrez dans le parc du Retiro derrière le Prado pour l'après-midi, prenez une barque sur le lac et rejoignez le pavillon de verre du Palacio de Cristal. C'est la respiration verte entre deux grands musées.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "reina-sofia",
              text: "Prenez le Reina Sofia dans sa fenêtre gratuite du soir en semaine (19h00-21h00, fermé le mardi), en filant droit à la salle 205 pour Guernica de Picasso avant de faire le tour vers Dali et Miro. Arrivez un peu en avance, car le créneau gratuit attire une file.",
              durationMin: 90,
            },
            {
              poiSlug: "cava-baja-tapas",
              text: "Marchez jusqu'à La Latina pour une tournée des tapas de Cava Baja à partir de 21h environ, en commandant une assiette et une boisson à chaque bar avant de poursuivre. Gambas al ajillo, croquetas et une caña, debout au comptoir comme les locaux.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Le Madrid des Habsbourg : Palais royal, Plaza Mayor, Sol, San Miguel",
          morning: [
            {
              poiSlug: "royal-palace",
              text: "Soyez au Palais royal pour l'ouverture de 10h avec un billet réservé, en vérifiant la veille qu'il n'est pas fermé pour un événement d'État. Faites les salons d'apparat et l'Armurerie royale, puis sortez vers la cathédrale de la Almudena gratuite et les jardins de Sabatini juste à côté.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "mercado-de-san-miguel",
              text: "Grignotez le déjeuner au marché de San Miguel à côté de la Plaza Mayor, en achetant deux ou trois tapas à différents stands et en mangeant debout. C'est plus cher qu'un bar local, traitez-le donc comme une dégustation plutôt qu'un repas assis complet.",
              durationMin: 60,
            },
            {
              poiSlug: "plaza-mayor",
              text: "Passez sur la Plaza Mayor pour admirer la place à arcades du XVIIe siècle, puis enfilez les vieilles ruelles jusqu'à la Puerta del Sol et le repère du Kilomètre Zéro au centre de l'Espagne. Gardez votre sac fermé dans la foule ici.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "temple-of-debod",
              text: "Montez au temple de Debod 30 minutes avant le coucher pour le point de vue classique et gratuit de Madrid, la pierre égyptienne antique reflétée dans son bassin sur fond de ciel au-dessus de la Casa de Campo. Prenez une place à la rambarde tôt, car c'est fréquenté.",
              durationMin: 60,
            },
            {
              poiSlug: "gran-via",
              text: "Descendez vers la Gran Via quand le boulevard s'illumine, en longeant ses façades du début du XXe siècle vers le dôme du Metropolis. Dîner au centre ou de retour à La Latina, en gardant téléphones et sacs en sécurité sur cette artère à pickpockets.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "madrid",
      days: 3,
      summary:
        "Oui, trois jours est la bonne durée pour Madrid, et c'est ce que nous recommandons pour une première visite. Trois jours permettent de découper le séjour proprement : le triangle de l'art a une journée entière (le Prado, le Reina Sofia pour Guernica, et le Thyssen pour combler les vides), le vieux coeur des Habsbourg a sa propre journée (le Palais royal, la Plaza Mayor, Sol, San Miguel, et le temple de Debod au coucher du soleil), et un barrio animé a la troisième (La Latina, El Rastro si c'est dimanche, et Malasana). Vous mangez bien dans trois quartiers, vous casez à la fois les soirées gratuites des musées et de vraies soirées tapas tardives, et vous avancez tout de même à un rythme qui laisse le temps de s'asseoir sur une place. Ce qui saute encore, c'est Salamanca, le Bernabeu, et une excursion à Tolède ou Ségovie, ce qu'ajoute précisément un quatrième jour. Logez à Malasana pour ses bars indépendants, son café et son rapport qualité-prix tout en restant à dix minutes du centre. Profitez des deux dernières heures gratuites du Prado ou réservez un créneau, et réservez le Palais royal en ligne avant de partir.",
      stayNeighborhoodSlug: "malasana",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Le triangle de l'art : Prado, Retiro, Reina Sofia, Thyssen",
          morning: [
            {
              poiSlug: "prado-museum",
              text: "Ouvrez le voyage au créneau de 10h du Prado, réservé à l'avance, et filez droit aux Menines et aux peintures noires de Goya avant que la foule ne se forme. Comptez deux heures et demie à trois heures pour les chefs-d'oeuvre ; moins et vous les dépassez au pas de course.",
              durationMin: 165,
            },
          ],
          afternoon: [
            {
              poiSlug: "thyssen-bornemisza",
              text: "Déjeunez sur le Paseo del Prado, puis prenez le Thyssen-Bornemisza en traversant le boulevard, gratuit le lundi après-midi pour la collection permanente. Commencez au dernier étage avec les maîtres anciens et descendez de façon chronologique jusqu'aux impressionnistes et au XXe siècle.",
              durationMin: 120,
            },
            {
              poiSlug: "retiro-park",
              text: "Entrez au Retiro derrière les musées pour l'air de fin d'après-midi, en prenant une barque sur le lac et en bouclant jusqu'au Palacio de Cristal. Cela repose vos jambes entre les deux blocs d'art de la journée.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "reina-sofia",
              text: "Prenez le Reina Sofia dans sa fenêtre gratuite du soir (19h00-21h00, fermé le mardi), en allant d'abord à la salle 205 pour Guernica avant Dali et Miro. Arrivez tôt, car le créneau gratuit attire une file à la porte.",
              durationMin: 90,
            },
            {
              text: "Dîner près d'Anton Martin ou de retour vers Malasana, en glissant dans le rythme tardif de Madrid avec des tapas plutôt qu'un repas assis copieux. Les cuisines ne font que se réchauffer à 21h ici.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Le Madrid des Habsbourg : Palais royal, Plaza Mayor, Sol, coucher de soleil à Debod",
          morning: [
            {
              poiSlug: "royal-palace",
              text: "Soyez au Palais royal pour 10h avec un billet réservé, après avoir vérifié qu'il n'est pas fermé pour une cérémonie d'État. Faites les salons d'apparat et l'Armurerie royale, puis traversez vers la cathédrale de la Almudena gratuite et les jardins de Sabatini.",
              durationMin: 120,
            },
            {
              poiSlug: "mercado-de-san-miguel",
              text: "Grignotez un déjeuner tôt au marché de San Miguel près de la Plaza Mayor, en achetant quelques tapas à différents stands et en mangeant debout. Restez léger, car c'est une halte dégustation, pas le repas principal de la journée.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "plaza-mayor",
              text: "Admirez la place à arcades de la Plaza Mayor, puis marchez dans les vieilles ruelles jusqu'à la Puerta del Sol et le repère du Kilomètre Zéro au centre géographique de l'Espagne. Gardez votre sac fermé dans la foule de Sol.",
              durationMin: 75,
            },
            {
              poiSlug: "plaza-de-cibeles",
              text: "Descendez vers la place de Cibeles pour la fontaine et le palais, et payez les quelques euros pour monter au belvédère du Palacio de Cibeles et une vue large le long du Paseo del Prado. Elle relie le vieux coeur et les boulevards.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "temple-of-debod",
              text: "Marchez jusqu'au temple de Debod pour le coucher du soleil, en arrivant 30 minutes en avance pour une place à la rambarde quand la pierre égyptienne antique capte la dernière lumière au-dessus de la Casa de Campo. C'est le crépuscule madrilène classique et gratuit.",
              durationMin: 60,
            },
            {
              poiSlug: "gran-via",
              text: "Revenez par une Gran Via illuminée, en longeant les grandes façades vers le dôme du Metropolis, puis dîner au centre. Gardez téléphones et sacs en sécurité sur ce tronçon à pickpockets.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Les barrios : La Latina, El Rastro, Malasana",
          morning: [
            {
              poiSlug: "el-rastro",
              text: "Si c'est dimanche, plongez dans El Rastro avant 11h tant qu'il est praticable, en descendant Ribera de Curtidores à travers les ruelles de La Latina avec les objets de valeur dans une poche avant. Tout autre jour, passez la matinée à flâner dans les rues et places médiévales de La Latina.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "cava-baja-tapas",
              text: "Installez-vous à La Latina pour un long déjeuner, en faisant une tournée de Cava Baja et Cava Alta avec un vermouth quand le marché s'achève, dans la tradition du dimanche. Une ou deux assiettes par bar, debout au comptoir, puis on poursuit.",
              durationMin: 120,
            },
            {
              text: "Marchez au nord vers Malasana pour l'après-midi, en furetant dans les friperies et le café de troisième vague autour de la Plaza del Dos de Mayo. C'est là qu'a commencé la Movida des années 1980 et où la ville se sent encore la plus jeune.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Aperitivo et dîner à Malasana ou dans la Chueca voisine, en sautant de petites cuisines en bars à cocktails quand les quartiers se remplissent. Réservez partout où il y a un nom, car les bonnes tables partent avant 21h30 le week-end.",
              durationMin: 150,
            },
          ],
        },
      ],
    },
    {
      citySlug: "madrid",
      days: 4,
      summary:
        "Quatre jours sont le point idéal pour une première visite de Madrid, transformant un sprint de trois jours en de vraies vacances avec de la place pour respirer. Les jours un à trois couvrent l'essentiel : le triangle de l'art (Prado, Reina Sofia pour Guernica, Thyssen), le vieux coeur des Habsbourg (Palais royal, Plaza Mayor, Sol, temple de Debod), et une journée de barrio à travers La Latina, El Rastro et Malasana. Le quatrième jour est la soupape, et vous avez de vrais choix : l'élégante Salamanca et le shopping de Serrano associés à une visite du stade Bernabeu, ou une excursion d'une journée à Tolède, à 33 minutes en train à grande vitesse, ou à Ségovie pour son aqueduc romain et son Alcazar de conte de fées, à 30 minutes de train environ. Cette durée convient aux voyageurs qui détestent la marche forcée, aux couples, et à quiconque dont les vols encadrent le séjour de façon maladroite. Posez-vous à La Latina pour quatre jours : vous avez accepté un rythme plus lent, et ses ruelles à tapas et son marché du dimanche font du retour au bercail chaque soir le meilleur moment. Réservez le Prado, le Palais royal et le Bernabeu à l'avance.",
      stayNeighborhoodSlug: "la-latina",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Le triangle de l'art : Prado, Retiro, Reina Sofia, Thyssen",
          morning: [
            {
              poiSlug: "prado-museum",
              text: "Commencez à l'ouverture de 10h du Prado sur un créneau réservé, en allant droit aux Menines et aux peintures noires de Goya avant la foule. Accordez au moins deux heures et demie aux chefs-d'oeuvre.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "thyssen-bornemisza",
              text: "Après un déjeuner sur le Paseo del Prado, prenez le Thyssen-Bornemisza en traversant le boulevard, gratuit le lundi après-midi. Faites-le du haut vers le bas, des maîtres anciens jusqu'aux impressionnistes et au XXe siècle.",
              durationMin: 120,
            },
            {
              poiSlug: "retiro-park",
              text: "Entrez au Retiro derrière les musées pour la fin d'après-midi, en ramant sur le lac et en bouclant devant le Palacio de Cristal. Le parc est la pause verte entre les deux galeries de la journée.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "reina-sofia",
              text: "Prenez le Reina Sofia dans sa fenêtre gratuite du soir (fermé le mardi), en allant d'abord à la salle 205 pour Guernica avant le reste. Arrivez un peu en avance pour devancer la file du créneau gratuit.",
              durationMin: 90,
            },
            {
              poiSlug: "cava-baja-tapas",
              text: "Rentrez tranquillement à La Latina pour une tournée des tapas de Cava Baja à partir de 21h, une ou deux assiettes et une boisson par bar. Debout au comptoir, c'est le dîner madrilène du quotidien.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Le Madrid des Habsbourg : Palais royal, Plaza Mayor, Sol, coucher de soleil à Debod",
          morning: [
            {
              poiSlug: "royal-palace",
              text: "Soyez au Palais royal pour 10h avec un billet réservé, vérifié la veille contre les fermetures pour événement d'État. Faites les salons d'apparat et l'Armurerie, puis la cathédrale de la Almudena gratuite et les jardins de Sabatini.",
              durationMin: 120,
            },
            {
              poiSlug: "mercado-de-san-miguel",
              text: "Grignotez un déjeuner léger au marché de San Miguel près de la Plaza Mayor, quelques tapas de différents stands, mangées debout. Gardez-en une dégustation plutôt que le repas complet.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "plaza-mayor",
              text: "Admirez la Plaza Mayor, puis marchez jusqu'à la Puerta del Sol et le repère du Kilomètre Zéro, le centre littéral de l'Espagne. Sac fermé dans la foule de Sol.",
              durationMin: 60,
            },
            {
              poiSlug: "plaza-de-cibeles",
              text: "Marchez jusqu'à la place de Cibeles pour la fontaine et le palais, en montant au belvédère de Cibeles pour la vue sur le Paseo del Prado. Elle relie le vieux coeur aux grands boulevards.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "temple-of-debod",
              text: "Rejoignez le temple de Debod 30 minutes avant le coucher pour le classique coucher de soleil madrilène gratuit, la pierre égyptienne reflétée dans son bassin. Réclamez une place à la rambarde tôt.",
              durationMin: 60,
            },
            {
              poiSlug: "gran-via",
              text: "Revenez le long d'une Gran Via illuminée vers le dôme du Metropolis, puis dîner au centre. Téléphones et sacs en sécurité sur cette artère à pickpockets.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Les barrios : La Latina, El Rastro, Malasana",
          morning: [
            {
              poiSlug: "el-rastro",
              text: "Un dimanche, faites El Rastro avant 11h tant qu'il est encore praticable, en descendant Ribera de Curtidores et les ruelles de La Latina avec les objets de valeur dans une poche avant. Sinon flânez dans les places médiévales de La Latina.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Long déjeuner à La Latina avec un vermouth quand le marché s'achève, puis furetez dans les friperies et les cafés de Malasana autour de la Plaza del Dos de Mayo. C'est l'après-midi lente, food-et-quartier, que les séjours plus courts ne peuvent s'offrir.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              text: "Aperitivo et dîner entre Malasana et Chueca, en passant de petites cuisines en bars à cocktails à mesure qu'ils se remplissent. Réservez à l'avance partout où il y a un nom, les bonnes tables partent avant 21h30 le week-end.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Salamanca et le Bernabeu, ou une excursion à Tolède ou Ségovie",
          morning: [
            {
              text: "L'option A reste en ville : furetez dans l'élégante grille de Salamanca et l'artère des grandes marques le long de la Calle Serrano, avec une pause café dans ses cafés raffinés. L'option B en sort : prenez le train à grande vitesse de 33 minutes pour Tolède, ou le train d'environ 30 minutes pour Ségovie, en partant tôt pour devancer les foules d'excursionnistes.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "santiago-bernabeu",
              text: "Si vous êtes restés en ville, faites la visite du stade Santiago Bernabeu, réservée en ligne pour un créneau horaire et vérifiée contre le calendrier des matchs, car les visites sont fermées les jours de match. Le métro vous dépose à Santiago Bernabeu sur la ligne 10.",
              durationMin: 120,
            },
            {
              text: "Sur l'option excursion, passez l'après-midi dans la vieille ville perchée de Tolède avec sa cathédrale, ses synagogues et El Greco, ou l'aqueduc romain et l'Alcazar de conte de fées de Ségovie, avant le train de fin d'après-midi. Les deux sont des allers-retours faciles qui laissent tout de même une dernière soirée madrilène.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              text: "De retour à La Latina pour un dîner d'adieu, en dépensant un peu plus pour votre dernière soirée dans une taverne de Cava Baja repérée plus tôt. Croquetas, jamon et une dernière caña pour clore le voyage.",
              durationMin: 120,
            },
            {
              text: "Terminez par un dernier verre dans une ruelle calme de La Latina, à courte marche de votre lit, sans trajet de retour à prévoir. Cette facilité est tout l'intérêt de se poser ici pour quatre jours.",
              durationMin: 45,
            },
          ],
        },
      ],
    },
  ],
};

export default madridFr;
