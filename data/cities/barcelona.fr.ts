import type { CityData } from "../types";

const barcelonaFr: CityData = {
  city: {
    slug: "barcelona",
    name: "Barcelone",
    country: "Espagne",
    countrySlug: "spain",
    lat: 41.3874,
    lng: 2.1686,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "BCN",
    airportToCenter:
      "L'Aerobus relie les deux terminaux à la Placa Catalunya en 35 minutes environ, 7,25 EUR l'aller simple, avec un départ toutes les 5 à 10 minutes. Options moins chères : le train R2 Nord depuis le T2 jusqu'à Passeig de Gracia ou Sants pour environ 4,90 EUR (ou gratuit avec une carte T-casual/Hola), ou la ligne de métro L9 Sud, panoramique mais lente, avec plusieurs changements pour rejoindre le centre.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [8],
    monthlyNotes: {
      1: "Frais et lumineux à 14-15 °C, avec la plus faible affluence de l'année et les chambres les moins chères, même si la mer est trop froide pour la plage. La cavalcade des Rois mages (Cavalcada de Reis) du 5 janvier remplit les rues de chars et de sucreries, et les soldes de janvier remplissent les boutiques.",
      2: "Encore doux à 15 °C, avec peu de monde et des prix bas, et souvent assez clair pour un long déjeuner en terrasse à la mi-journée. Le carnaval (Carnestoltes) anime la semaine précédant le Carême avec des défilés costumés dans les quartiers, et la Sainte-Eulalie autour du 12 février amène castells (tours humaines) et géants dans la vieille ville.",
      3: "Les maximales approchent les 17-18 °C et les journées s'allongent, les touristes n'affluant que tard dans le mois autour de Pâques. Surveillez le calendrier : si la Semaine sainte tombe en mars, le centre et les hôtels se remplissent et les prix grimpent, sinon le mois reste calme et d'un bon rapport qualité-prix.",
      4: "L'un des meilleurs mois à 19-20 °C, avec des après-midi doux et des collines verdoyantes, même si Pâques peut engorger le centre si elle tombe maintenant. La Sant Jordi du 23 avril est le temps fort, une journée de livres et de roses où La Rambla et le Passeig de Gracia se couvrent d'étals de bouquinistes en plein air et où les couples échangent des roses.",
      5: "Chaleur fiable à 22-23 °C, avec de longues soirées et peu de pluie, sans doute le plus beau mois pour venir. Le Primavera Sound tombe généralement fin mai ou début juin et affiche complet dans les hôtels très vite, alors vérifiez les dates du festival avant de fixer les vôtres, et lancez pour de bon la saison des dîners en terrasse.",
      6: "Chaud à 26-27 °C, ensoleillé et animé, la saison estivale démarrant et les plages se remplissant le week-end. La Sant Joan, dans la nuit du 23 juin, est une folle fête de feux d'artifice et de feux de joie sur la plage qui dure jusqu'à l'aube, alors attendez-vous au bruit, à des foules énormes au bord de l'eau et à du cava partout.",
      7: "Plein été à 28-29 °C, humide et bondé, les plages prises d'assaut et les grands sites de Gaudi vendus des jours à l'avance. Faites la Sagrada Familia et le Park Guell à l'ouverture, puis repliez-vous vers la mer ou une terrasse ombragée pour les heures moites du début d'après-midi.",
      8: "Le mois le plus chaud, le plus humide et le plus fréquenté à 29 °C, celui à éviter : de nombreux commerces et restaurants familiaux ferment pour les vacances et les habitants partent sur la côte. Si août est inévitable, réservez la climatisation, concentrez les visites en début de matinée, et notez la Festa Major de Gracia mi-août, quand les rues de Gracia rivalisent de décorations élaborées.",
      9: "La chaleur de l'été sans le pire de la canicule : 27 °C au début, qui s'atténue au fil du mois, avec une mer encore baignable. La Merce, la plus grande fête de la ville, se tient autour du 24 septembre avec des tours humaines, des parcours de feu (correfocs), des géants et des concerts gratuits dans tout le centre, et c'est le meilleur moment pour ressentir la culture propre à la ville.",
      10: "Journées douces autour de 23 °C avec le retour des premières vraies pluies et une superbe lumière rasante, et une affluence qui s'allège nettement après la première semaine. C'est un choix solide de basse saison pour la météo comme pour le prix des hôtels, les terrasses restant ouvertes à la mi-journée.",
      11: "Plus frais à 18-19 °C avec des épisodes pluvieux réguliers, mais de nombreuses journées lumineuses entre les fronts et les grands sites les plus tranquilles de l'automne. Les tarifs de basse saison reviennent et vous pouvez entrer sans réserver dans des restaurants qui affichent complet en mai, même si les journées de plage sont finies.",
      12: "Doux pour l'hiver à 15-16 °C mais plus pluvieux, avec des marchés de Noël comme la Fira de Santa Llucia près de la cathédrale et l'étrange figurine catalane du caganer à dénicher. Calme jusqu'à la période de Noël au Nouvel An, quand les tarifs grimpent et que les rues autour de la cathédrale se remplissent de lumières et de foule.",
    },
    climate: {
      1: { highC: 14, lowC: 5, rainyDays: 5 },
      2: { highC: 15, lowC: 5, rainyDays: 5 },
      3: { highC: 17, lowC: 7, rainyDays: 5 },
      4: { highC: 19, lowC: 9, rainyDays: 6 },
      5: { highC: 22, lowC: 13, rainyDays: 6 },
      6: { highC: 26, lowC: 17, rainyDays: 4 },
      7: { highC: 29, lowC: 20, rainyDays: 2 },
      8: { highC: 29, lowC: 20, rainyDays: 4 },
      9: { highC: 27, lowC: 18, rainyDays: 5 },
      10: { highC: 23, lowC: 14, rainyDays: 7 },
      11: { highC: 18, lowC: 9, rainyDays: 6 },
      12: { highC: 15, lowC: 6, rainyDays: 6 },
    },
    budgetLevel: "mid",
    budgetPerDay: { budget: 70, mid: 150, high: 300 },
    tagline: "Gaudi, ruelles gothiques et la plage dans une seule ville à parcourir à pied.",
    heroIntro:
      "Barcelone associe les monuments modernistes délirants de Gaudi à une vieille ville médiévale et à une plage urbaine, le tout dans un centre compact que l'on couvre surtout à pied, le métro servant pour les sites plus éloignés. Trois jours sont le juste équilibre pour répartir la piste Gaudi, le coeur gothique et un après-midi tranquille au bord de la mer sans marche forcée. Venez au printemps ou au début de l'automne, réservez la Sagrada Familia et le Park Guell des semaines avant de partir, et gardez vos sacs fermés, car c'est l'une des capitales européennes du vol à la tire.",
    accent: { from: "#1B9AAA", to: "#E8632C", ink: "#0C4A52" },
    neighborhoodSlugs: [
      "barri-gotic",
      "el-born",
      "eixample",
      "gracia",
      "barceloneta",
    ],
    nearbyCitySlugs: ["seville", "granada"],
  },

  neighborhoods: [
    {
      slug: "barri-gotic",
      citySlug: "barcelona",
      name: "Barri Gotic",
      lat: 41.3833,
      lng: 2.1777,
      bestFor: ["first-time", "romantic", "budget"],
      vibe: "Le coeur médiéval de la ville, un dédale de ruelles de pierre étroites entre la cathédrale et La Rambla qui débouchent sur des places cachées. Tout ce qu'un premier visiteur veut voir se trouve à dix minutes à pied, et les ruelles prennent une atmosphère particulière le soir, une fois la foule diurne dissipée. C'est central et bon marché pour dormir, mais c'est aussi le quartier le plus animé et le plus exposé aux vols à la tire.",
      pros: [
        "Rejoindre la cathédrale, La Rambla, le port et El Born à pied, sans transport",
        "Dense en bars à tapas bon marché, cafés et petits hôtels",
        "Ruelles de pierre pleines d'atmosphère qui se vident et s'illuminent après le dîner",
      ],
      cons: [
        "Le secteur le plus touché par les vols à la tire de la ville, surtout près de La Rambla",
        "Bruyant, du passage et des bars jusqu'à tard, mauvais pour le sommeil léger",
        "Certains restaurants des places principales se reposent sur l'emplacement",
      ],
    },
    {
      slug: "el-born",
      citySlug: "barcelona",
      name: "El Born",
      lat: 41.3847,
      lng: 2.1817,
      bestFor: ["romantic", "nightlife", "local"],
      vibe: "Le quartier le plus chic de la vieille ville, juste à l'est du coeur gothique, articulé autour de l'église Santa Maria del Mar et du musée Picasso. Boutiques, bars à vin et bars à cocktails bordent les ruelles médiévales, et il reste animé sans virer au piège à touristes. Il vous offre l'atmosphère de la vieille ville avec un cachet plus adulte et davantage tourné vers le design.",
      pros: [
        "La meilleure concentration de bars à vin, bars à cocktails et tapas de la vieille ville",
        "À pied du musée Picasso, de Santa Maria del Mar et du parc de la Ciutadella",
        "Ruelles pavées qui restent animées tout en gardant un esprit local et boutique",
      ],
      cons: [
        "Les bars autour des ruelles principales montent le son les soirs de week-end",
        "Pas de métro directement à l'intérieur, même si Jaume I et Barceloneta sont proches",
        "Les hôtels y sont plus chers que dans le quartier gothique voisin",
      ],
    },
    {
      slug: "eixample",
      citySlug: "barcelona",
      name: "Eixample",
      lat: 41.3915,
      lng: 2.1649,
      bestFor: ["first-time", "family", "romantic"],
      vibe: "La grille élégante tracée au XIXe siècle, avec de larges boulevards, des angles coupés en pan et la plus forte concentration de façades modernistes de la ville le long du Passeig de Gracia. Elle vous place à courte distance à pied de la Casa Batllo, de La Pedrera et de la Sagrada Familia, sur un réseau de métro bien desservi. Calme, ordonné et central sans la cohue de la vieille ville.",
      pros: [
        "À pied des maisons de Gaudi du Passeig de Gracia et proche de la Sagrada Familia",
        "Réseau de métro dense, direct vers le train de l'aéroport et partout ailleurs",
        "Rues larges et calmes le soir, et un bon éventail d'hôtels de milieu de gamme",
      ],
      cons: [
        "Plus fonctionnel et moins romantique que les ruelles de la vieille ville",
        "Le tronçon en plein sur le Passeig de Gracia est cher pour se loger",
        "Certains pâtés de maisons sont à une longue marche en ligne droite de la plage et du port",
      ],
    },
    {
      slug: "gracia",
      citySlug: "barcelona",
      name: "Gracia",
      lat: 41.4022,
      lng: 2.1568,
      bestFor: ["local", "budget", "nightlife"],
      vibe: "Un ancien village avalé par la ville, au nord de l'Eixample, qui garde son esprit de petites places et de plazas et une forte identité locale. Boutiques indépendantes, bars bohèmes et restaurants familiaux entourent des places où les habitants boivent en terrasse les soirs de beau temps. C'est la base des voyageurs qui préfèrent le vrai quartier à la carte postale, avec le Park Guell sur la colline au-dessus.",
      pros: [
        "Une vie de quartier authentique, des places pleines d'habitants, pas de groupes de touristes",
        "Une restauration au meilleur rapport qualité-prix et une scène de bars animée mais sans prétention",
        "Accessible à pied jusqu'au Park Guell et en métro jusqu'au centre",
      ],
      cons: [
        "À 20-25 minutes à pied ou un saut de métro de la vieille ville et de la plage",
        "Les places populaires montent le son les soirs de week-end",
        "Moins de grands hôtels connus, plus d'appartements et de petites maisons d'hôtes",
      ],
    },
    {
      slug: "barceloneta",
      citySlug: "barcelona",
      name: "Barceloneta",
      lat: 41.3797,
      lng: 2.1894,
      bestFor: ["family", "budget", "local"],
      vibe: "L'ancien quartier des pêcheurs coincé entre le port et la plage urbaine, une grille serrée de pâtés de maisons étroits qui débouche directement sur le sable. C'est l'endroit où dormir si la plage est le but, avec les restaurants de fruits de mer et la promenade sur le pas de la porte. Plein de caractère le jour, et les bars du front de mer le maintiennent animé tard dans la nuit en été.",
      pros: [
        "À deux pas de la plage urbaine et de la promenade, aucun transport nécessaire",
        "Le métro Barceloneta sur la ligne L4, à quelques arrêts de la vieille ville",
        "De vrais bars à fruits de mer et à vermouth, une rue en retrait de l'eau",
      ],
      cons: [
        "Les restaurants du front de mer sont des pièges à touristes, mangez une rue en retrait",
        "Appartements exigus et chauds en été, et bruyants près des bars de plage",
        "À une marche ou un trajet de métro des sites de Gaudi, en haut dans l'Eixample",
      ],
    },
  ],

  pois: [
    {
      slug: "sagrada-familia",
      citySlug: "barcelona",
      name: "Sagrada Familia",
      lat: 41.4036,
      lng: 2.1744,
      kind: "sight",
      needsBooking: true,
      tip: "Achetez un billet horodaté en ligne des jours voire des semaines à l'avance, cela affiche complet et il n'existe pas d'option utile à l'entrée en saison. Réservez le premier créneau après l'ouverture pour l'intérieur le plus vide et la meilleure lumière matinale à travers les vitraux de la façade est de la Nativité, qui rougeoient de bleu et de vert tôt. La montée aux tours est un supplément payant avec son propre créneau horodaté, alors ajoutez-la à la réservation, pas le jour même.",
    },
    {
      slug: "park-guell",
      citySlug: "barcelona",
      name: "Park Guell",
      lat: 41.4145,
      lng: 2.1527,
      kind: "park",
      needsBooking: true,
      tip: "La Zone monumentale avec la terrasse en mosaïque et le fameux lézard nécessite un billet horodaté qui affiche complet des jours à l'avance, alors réservez en ligne et ne venez jamais à l'improviste. Prenez le premier créneau de la journée, vers 9h30, pour devancer la foule et la chaleur sur la terrasse exposée, et empruntez les escalators extérieurs de la Baixada de la Gloria pour vous épargner la montée raide. Le parc boisé alentour est gratuit si vous ne voulez que les vues sans les mosaïques.",
    },
    {
      slug: "casa-batllo",
      citySlug: "barcelona",
      name: "Casa Batllo",
      lat: 41.3917,
      lng: 2.1649,
      kind: "sight",
      needsBooking: true,
      tip: "La maison aux écailles de dragon de Gaudi sur le Passeig de Gracia vend des billets horodatés qui partent vite en haute saison, alors réservez en ligne à l'avance plutôt que de faire la queue. Venez à l'ouverture ou au dernier créneau avant la fermeture pour esquiver la cohue des groupes dans l'escalier étroit, et utilisez la tablette à réalité augmentée incluse pour les détails animés. Combinez-la avec La Pedrera, à cinq minutes à pied plus haut sur le même boulevard.",
    },
    {
      slug: "la-pedrera",
      citySlug: "barcelona",
      name: "La Pedrera (Casa Mila)",
      lat: 41.3953,
      lng: 2.1619,
      kind: "sight",
      needsBooking: true,
      tip: "L'immeuble d'habitation à la façade ondulée de Gaudi est un autre site à billet horodaté, alors réservez en ligne plutôt que de vous présenter à l'improviste. Le toit-terrasse avec ses cheminées en casques de guerrier est la récompense, au mieux au dernier créneau de journée pour une lumière plus douce, et en été la séance nocturne « Nuits de Gaudi » sur le toit, avec musique et boissons, vaut le supplément. Il se situe à cinq minutes du Passeig de Gracia depuis la Casa Batllo, alors faites les deux ensemble.",
    },
    {
      slug: "la-rambla",
      citySlug: "barcelona",
      name: "La Rambla",
      lat: 41.3809,
      lng: 2.1729,
      kind: "sight",
      needsBooking: false,
      tip: "C'est l'artère touristique à parcourir une fois pour l'ambiance et les statues vivantes, pas pour y manger ou y boire, où les terrasses facturent le double pour une nourriture médiocre. C'est le pire spot de vol à la tire de la ville, alors gardez votre sac fermé et devant vous, et votre téléphone hors de la poche arrière. Bifurquez vers le marché de la Boqueria à mi-chemin et vers les rues du Barri Gotic à l'est pour tout ce que vous cherchez vraiment.",
    },
    {
      slug: "barcelona-cathedral",
      citySlug: "barcelona",
      name: "Barri Gotic et cathédrale de Barcelone",
      lat: 41.3839,
      lng: 2.1762,
      kind: "sight",
      needsBooking: false,
      tip: "La cathédrale gothique facture un petit droit d'entrée aux touristes en journée (environ 9 EUR, comprenant l'ascenseur du toit et le cloître avec ses oies résidentes), et les heures gratuites sont réservées au culte tôt et tard. Venez à l'ouverture pour avoir le cloître au calme, puis perdez-vous volontairement dans les ruelles alentour, en visant la Placa Sant Felip Neri et le quartier juif médiéval. Le toit-terrasse offre une vue rapprochée sur les flèches de la vieille ville.",
    },
    {
      slug: "picasso-museum",
      citySlug: "barcelona",
      name: "Musée Picasso",
      lat: 41.3852,
      lng: 2.1807,
      kind: "museum",
      needsBooking: true,
      tip: "Réservez un créneau horodaté en ligne, la file dans la ruelle étroite d'El Born est longue et le musée limite le nombre d'entrées. La collection est la plus forte sur les premières années barcelonaises de Picasso et sa série des Ménines, pas sur ses oeuvres tardives célèbres, alors venez pour la formation plutôt que pour les tubes. L'entrée est gratuite le jeudi soir à partir de 17h et le premier dimanche du mois, mais vous devez tout de même réserver le créneau gratuit en ligne à l'avance.",
    },
    {
      slug: "la-boqueria",
      citySlug: "barcelona",
      name: "Marché de la Boqueria",
      lat: 41.3818,
      lng: 2.1717,
      kind: "food",
      needsBooking: false,
      tip: "Le marché couvert donnant sur La Rambla ouvre du lundi au samedi, environ de 8h à 20h30, et c'est au mieux en milieu de matinée, avant les groupes et une fois les marchands installés. Les étals tout à l'avant sont surfacturés pour les touristes, alors allez au fond et sur les côtés pour les vrais poissonniers, les comptoirs de jambon et un tabouret dans un bar en activité comme le Pinotxo ou l'El Quim pour des plats préparés à la commande. Il ferme le dimanche.",
    },
    {
      slug: "barceloneta-beach",
      citySlug: "barcelona",
      name: "Plage de la Barceloneta",
      lat: 41.378,
      lng: 2.1925,
      kind: "experience",
      needsBooking: false,
      tip: "La plage urbaine la plus proche du centre, bondée en été, alors arrivez avant 11h pour une place et ne laissez jamais vos sacs sans surveillance, car le vol sur la plage est constant. Les restaurants de paella et de sangria du front de mer le long de la promenade sont des pièges hors de prix, alors mangez une rue en retrait dans la Barceloneta proprement dite ou apportez un pique-nique. Pour un sable plus calme et plus propre, marchez vers le nord jusqu'aux plages de Bogatell ou de Mar Bella.",
    },
    {
      slug: "montjuic",
      citySlug: "barcelona",
      name: "Montjuic et fontaine magique",
      lat: 41.3711,
      lng: 2.1519,
      kind: "viewpoint",
      needsBooking: false,
      tip: "La colline au-dessus du port abrite la fondation Joan Miro, le musée d'art MNAC, des jardins et le château, alors accordez-lui une demi-journée et prenez le funiculaire puis le téléphérique pour vous épargner la montée. La fontaine magique en contrebas du MNAC donne des spectacles gratuits de son et lumière certains soirs (généralement du jeudi au samedi en été, moins de soirs hors saison), alors vérifiez le programme du moment avant d'y aller, car elle est coupée en hiver et pendant les sécheresses. Arrivez 20 minutes en avance pour une place sur les marches.",
    },
    {
      slug: "palau-de-la-musica",
      citySlug: "barcelona",
      name: "Palau de la Musica Catalana",
      lat: 41.3875,
      lng: 2.1751,
      kind: "sight",
      needsBooking: true,
      tip: "La salle de concert moderniste ne se visite qu'en visite guidée horodatée ou en assistant à un concert, et les créneaux de visite affichent complet, alors réservez en ligne à l'avance. La verrière en vitraux et la façade aux colonnes de mosaïque de la grande salle sont la raison de venir, et une courte visite guidée suffit à les voir. Si possible, réservez plutôt un vrai concert en soirée, souvent un programme de guitare espagnole ou de musique catalane à prix doux, pour voir la salle éclairée et en usage.",
    },
    {
      slug: "santa-maria-del-mar",
      citySlug: "barcelona",
      name: "El Born et Santa Maria del Mar",
      lat: 41.3838,
      lng: 2.182,
      kind: "sight",
      needsBooking: false,
      tip: "L'église du XIVe siècle est gratuite pendant les heures de culte mais facture un petit droit (environ 10 EUR) pour la visite guidée du toit et de la crypte, celle qui vaut le coup pour la vue et l'intérieur gothique catalan pur. Venez dans les ruelles d'El Born alentour en début de soirée pour les bars à vin et à tapas, en visant à l'écart du Passeig del Born principal pour un meilleur rapport qualité-prix. La nef élancée et dépouillée de l'église est l'antidote à l'excès de Gaudi.",
    },
    {
      slug: "bunkers-del-carmel",
      citySlug: "barcelona",
      name: "Point de vue des Bunkers del Carmel",
      lat: 41.4194,
      lng: 2.1622,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Les anciens bunkers antiaériens de la guerre civile sur le Turo de la Rovira offrent la meilleure vue gratuite à 360 degrés sur toute la ville et vers la mer, et c'est le spot local du coucher de soleil. Il n'y a aucune boutique en haut et c'est 15 minutes de montée à pied depuis l'arrêt de bus le plus proche, alors apportez vos propres boissons et en-cas, plus une couche car il y fait venteux. L'accès est officiellement restreint après 21h30 pour limiter le bruit, alors venez pour le coucher du soleil, pas pour une soirée tardive.",
    },
    {
      slug: "parc-de-la-ciutadella",
      citySlug: "barcelona",
      name: "Parc de la Ciutadella",
      lat: 41.3884,
      lng: 2.1866,
      kind: "park",
      needsBooking: false,
      tip: "Le grand espace vert central de la ville, à côté d'El Born, est gratuit et ouvert toute la journée, l'endroit naturel où ralentir entre deux sites de la vieille ville. Louez une barque sur le lac, admirez la fontaine ornée de la Cascada qu'un jeune Gaudi a contribué à concevoir, et pique-niquez sur les pelouses avec les habitants par un après-midi doux. Le parlement catalan et un petit zoo se trouvent dans l'enceinte si vous avez des enfants avec vous.",
    },
  ],

  itineraries: [
    {
      citySlug: "barcelona",
      days: 2,
      summary:
        "Deux jours couvrent les incontournables de Barcelone, mais c'est une course aux temps forts, car la ville en réclame vraiment trois pour bien répartir la piste Gaudi, la vieille ville et la plage. En 48 heures vous pouvez faire l'essentiel de Gaudi le premier jour (Sagrada Familia, les maisons du Passeig de Gracia, Park Guell) et la vieille ville le deuxième (la cathédrale, El Born, le musée Picasso, La Boqueria, La Rambla), en glissant un court passage plage ou coucher de soleil si l'énergie tient. Ce qu'il faut sacrifier : Montjuic, le Palau de la Musica, un vrai après-midi de plage et toute flânerie, c'est donc une marche forcée. Cela convient à un week-end, à une escale ou à un premier aperçu. Les non-négociables : réservez à l'avance les billets horodatés de la Sagrada Familia et du Park Guell des semaines avant de partir, plus la Casa Batllo ou La Pedrera, sinon vous n'entrerez pas du tout. Installez-vous dans le Barri Gotic pour que la journée vieille ville se fasse à pied et que les sauts de métro vers Gaudi soient rapides. Gardez vos sacs fermés, la vieille ville et le métro sont des points chauds du vol à la tire.",
      stayNeighborhoodSlug: "barri-gotic",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Piste Gaudi : Sagrada Familia, Passeig de Gracia, Park Guell",
          morning: [
            {
              poiSlug: "sagrada-familia",
              text: "Commencez par la Sagrada Familia pour votre premier créneau réservé à l'avance, avant la foule et avec le soleil matinal éclairant les vitraux bleu-vert de la façade de la Nativité. Comptez 90 bonnes minutes pour l'intérieur et les façades, et montez à une tour si vous avez ajouté le créneau.",
              durationMin: 90,
            },
            {
              poiSlug: "casa-batllo",
              text: "Prenez le métro deux arrêts jusqu'au Passeig de Gracia pour les maisons de Gaudi. Faites la Casa Batllo sur votre créneau horodaté pour la façade en écailles de dragon et la tablette audio animée, puis marchez cinq minutes plus haut sur le boulevard.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "la-pedrera",
              text: "Voyez La Pedrera (Casa Mila) cinq minutes plus haut sur le même boulevard, sur votre créneau horodaté, pour la façade ondulée et les cheminées en casques de guerrier sur le toit. Prenez un déjeuner rapide dans une rue latérale à l'écart du Passeig de Gracia plutôt que sur les terrasses chères du boulevard.",
              durationMin: 90,
            },
            {
              poiSlug: "park-guell",
              text: "Montez au Park Guell pour un créneau horodaté d'après-midi dans la Zone monumentale, en prenant le métro puis les escalators extérieurs pour vous épargner la montée raide. Voyez la terrasse en mosaïque et le lézard, puis restez pour les points de vue boisés et gratuits sur la ville.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "santa-maria-del-mar",
              text: "Redescendez et consacrez la soirée à El Born, en flânant dans les ruelles médiévales autour de Santa Maria del Mar tandis que les bars à vin se remplissent. Réservez une table à tapas à l'écart du Passeig del Born principal, là où sont les meilleures adresses, vers 20h30.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Vieille ville : cathédrale, Picasso, Boqueria, La Rambla",
          morning: [
            {
              poiSlug: "barcelona-cathedral",
              text: "Commencez par la cathédrale de Barcelone à l'ouverture pour avoir le cloître et ses oies au calme, et montez au toit-terrasse pour la vue sur les flèches gothiques. Puis perdez-vous volontairement dans le Barri Gotic, en visant la Placa Sant Felip Neri et l'ancien quartier juif.",
              durationMin: 90,
            },
            {
              poiSlug: "picasso-museum",
              text: "Marchez vers l'est dans El Born jusqu'au musée Picasso sur votre créneau réservé, pour ses premières années barcelonaises et la série des Ménines plutôt que les oeuvres tardives célèbres. C'est un musée compact, donc 75 minutes suffisent avant le déjeuner.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "la-boqueria",
              text: "Filez vers le marché de la Boqueria donnant sur La Rambla pour le déjeuner, en allant aux étals du fond pour un tabouret dans un bar en activité comme le Pinotxo ou l'El Quim pour des plats préparés à la commande. Les étals de devant sont surfacturés pour les touristes, alors continuez à avancer.",
              durationMin: 75,
            },
            {
              poiSlug: "la-rambla",
              text: "Parcourez La Rambla une fois sur toute sa longueur pour l'ambiance et les statues vivantes, en gardant votre sac fermé et devant vous, car c'est le pire spot de vol à la tire de la ville. Suivez-la jusqu'à la colonne de Colomb et au port en bas.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "barceloneta-beach",
              text: "Depuis le port, longez la promenade jusqu'à la plage de la Barceloneta pour une étendue de sable en fin d'après-midi et une baignade s'il fait assez chaud. Surveillez vos sacs, car le vol sur la plage est constant.",
              durationMin: 90,
            },
            {
              text: "Prenez un dîner d'adieu à la Barceloneta une rue en retrait du front de mer, là où les fruits de mer sont honnêtes et où les pièges sont sur la promenade. Commandez du poisson frais ou une vraie paella à prix de déjeuner plutôt que les versions du menu touristique au bord de l'eau.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "barcelona",
      days: 3,
      summary:
        "Oui, trois jours sont la bonne durée pour Barcelone, et c'est ce que nous recommandons pour une première visite. Cela donne une journée entière à la piste Gaudi (Sagrada Familia, les maisons du Passeig de Gracia, Park Guell), une journée propre à la vieille ville (la cathédrale, El Born, le musée Picasso, La Boqueria, La Rambla), et une troisième journée qui mêle la plage à la salle de concert moderniste et au parc de la Ciutadella à un rythme plus détendu. Vous mangez bien à travers l'Eixample, El Born et la Barceloneta, casez à la fois un vrai après-midi de plage et un coucher de soleil, et vous asseyez encore sur une place au lieu de la traverser au pas de course. Ce qui reste sacrifié : Montjuic dans son ensemble et toute excursion, ce qui est exactement ce qu'ajoute un quatrième jour. Cela convient aux premiers visiteurs, aux couples et à qui poursuit ensuite vers Séville ou Grenade. Logez dans l'Eixample : on y va à pied aux maisons de Gaudi du Passeig de Gracia, on est proche de la Sagrada Familia, et son réseau de métro rend la vieille ville et la plage rapides à atteindre. Réservez la Sagrada Familia, le Park Guell et les maisons du Passeig de Gracia des semaines avant de partir, et gardez vos sacs fermés dans la vieille ville et dans le métro.",
      stayNeighborhoodSlug: "eixample",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Piste Gaudi : Sagrada Familia, Passeig de Gracia, Park Guell",
          morning: [
            {
              poiSlug: "sagrada-familia",
              text: "Commencez par la Sagrada Familia pour votre premier créneau réservé à l'avance, devant la foule et avec la lumière matinale à travers les vitraux est de la Nativité. Comptez 90 bonnes minutes pour l'intérieur et les deux façades, en ajoutant une montée aux tours si vous en avez réservé une.",
              durationMin: 90,
            },
            {
              poiSlug: "casa-batllo",
              text: "Marchez ou prenez un arrêt de métro jusqu'au Passeig de Gracia pour la Casa Batllo sur votre créneau horodaté, pour la façade en écailles de dragon et la tablette audio animée. Depuis votre base dans l'Eixample tout cela est proche, alors gardez un rythme détendu.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "la-pedrera",
              text: "Voyez La Pedrera (Casa Mila) cinq minutes plus haut sur le même boulevard sur votre créneau horodaté, pour la façade ondulée et les cheminées en casques de guerrier sur le toit. Déjeunez dans une rue latérale tranquille à l'écart du Passeig de Gracia, pas sur les terrasses du boulevard.",
              durationMin: 90,
            },
            {
              poiSlug: "park-guell",
              text: "Montez au Park Guell pour un créneau horodaté d'après-midi dans la Zone monumentale, en prenant le métro puis les escalators extérieurs pour sauter la montée raide. Voyez la terrasse en mosaïque et le lézard, puis attardez-vous sur les points de vue boisés et gratuits tandis que la lumière s'adoucit.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              text: "Redescendez pour dîner dans l'Eixample près de votre base, où les bars à tapas et à vermouth sont solides et sans la majoration de la vieille ville. Réservez à l'avance partout où c'est bien noté, les bonnes tables se remplissent dès 21h.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Vieille ville : cathédrale, El Born, Picasso, Boqueria, La Rambla",
          morning: [
            {
              poiSlug: "barcelona-cathedral",
              text: "Commencez par la cathédrale de Barcelone à l'ouverture pour le cloître tranquille et ses oies, puis montez au toit-terrasse pour la vue sur les flèches gothiques. Flânez ensuite dans les ruelles du Barri Gotic, en visant la Placa Sant Felip Neri et le quartier juif médiéval.",
              durationMin: 90,
            },
            {
              poiSlug: "picasso-museum",
              text: "Marchez vers l'est dans El Born jusqu'au musée Picasso sur votre créneau réservé, fort sur ses premières années barcelonaises et la série des Ménines. C'est compact, donc 75 minutes couvrent le tout avant le déjeuner.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "santa-maria-del-mar",
              text: "Entrez dans Santa Maria del Mar tout près pour la nef élancée et dépouillée du gothique catalan, et faites la visite à petit prix du toit et de la crypte si la vue vous tente. Puis parcourez les boutiques et les ruelles d'El Born alentour.",
              durationMin: 60,
            },
            {
              poiSlug: "la-boqueria",
              text: "Passez au marché de la Boqueria donnant sur La Rambla pour un déjeuner tardif à un bar des étals du fond comme le Pinotxo ou l'El Quim, en sautant les étals de devant surfacturés. Puis parcourez La Rambla une fois sur toute sa longueur pour l'ambiance, sac fermé et devant vous, jusqu'au port.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "bunkers-del-carmel",
              text: "Montez aux Bunkers del Carmel pour le coucher de soleil, le point de vue gratuit à 360 degrés sur toute la ville, en prenant un bus la plupart du chemin puis les 15 minutes de montée à pied. Apportez vos propres boissons et en-cas, car il n'y a aucune boutique en haut, et venez pour le coucher du soleil plutôt que pour une soirée tardive.",
              durationMin: 90,
            },
            {
              text: "Redescendez pour dîner dans El Born ou à votre base dans l'Eixample, en réservant à l'avance. Terminez par un cocktail dans l'un des bars design d'El Born s'il vous reste de l'énergie.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Salle de concert, Ciutadella et la plage",
          morning: [
            {
              poiSlug: "palau-de-la-musica",
              text: "Commencez par une visite guidée réservée à l'avance du Palau de la Musica Catalana, pour la verrière en vitraux et la grande salle aux colonnes de mosaïque. La courte visite suffit à voir l'intérieur moderniste avant que la journée ne se réchauffe.",
              durationMin: 75,
            },
            {
              poiSlug: "parc-de-la-ciutadella",
              text: "Marchez jusqu'au parc de la Ciutadella tout proche, gratuit et vert, pour la fontaine ornée de la Cascada qu'un jeune Gaudi a contribué à concevoir et une barque sur le lac. Pique-niquez sur les pelouses ou prenez un déjeuner léger sur la bordure El Born du parc.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "barceloneta-beach",
              text: "Descendez à la plage de la Barceloneta pour l'après-midi et une baignade s'il fait chaud, en gardant vos sacs surveillés à tout moment. Pour un sable plus propre et plus calme, marchez vers le nord jusqu'aux plages de Bogatell ou de Mar Bella.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              text: "Prenez un dîner de fruits de mer à la Barceloneta une rue en retrait de la promenade, en évitant les pièges du front de mer, et commandez du poisson frais ou un arroz. C'est le repas où jouer la carte classique pour votre dernière soirée.",
              durationMin: 120,
            },
            {
              text: "Terminez par un vermouth tranquille ou une promenade le long de la marina du Port Vell alors que les lumières s'allument. Tout est proche de votre base dans l'Eixample en métro, donc aucun long trajet de retour à prévoir.",
              durationMin: 45,
            },
          ],
        },
      ],
    },
    {
      citySlug: "barcelona",
      days: 4,
      summary:
        "Quatre jours sont l'idéal pour une première visite de Barcelone, transformant une course aux visites en véritables vacances. Les jours un à trois couvrent l'essentiel : la piste Gaudi (Sagrada Familia, les maisons du Passeig de Gracia, Park Guell), la vieille ville (la cathédrale, El Born, le musée Picasso, La Boqueria, La Rambla), et une journée mixte de la salle de concert, du parc de la Ciutadella et de la plage, chacune faite sans se presser. Le quatrième jour est la soupape, bâti autour de Montjuic (le MNAC, Miro, les jardins et le château, atteints par funiculaire et téléphérique) plus la fontaine magique, ou remplacé par une excursion au monastère de montagne de Montserrat ou à Gérone en train rapide. Cette durée convient aux voyageurs qui détestent la marche forcée, aux couples et à qui a des vols qui encadrent le séjour de façon peu commode. Pour quatre jours nous recommandons de loger à Gracia : vous avez accepté un rythme plus lent, et ses places et ses bars familiaux font du retour chaque soir le meilleur moment de la journée, avec le Park Guell sur la colline au-dessus. Réservez la Sagrada Familia, le Park Guell et les maisons de Gaudi bien à l'avance, et gardez vos sacs fermés dans la foule.",
      stayNeighborhoodSlug: "gracia",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Piste Gaudi : Sagrada Familia, Passeig de Gracia, Park Guell",
          morning: [
            {
              poiSlug: "sagrada-familia",
              text: "Commencez par la Sagrada Familia pour votre premier créneau réservé, avant la foule et avec la lumière matinale dans les vitraux de la façade de la Nativité. Comptez 90 minutes, en ajoutant une montée aux tours si vous en avez réservé le créneau.",
              durationMin: 90,
            },
            {
              poiSlug: "casa-batllo",
              text: "Prenez le métro jusqu'au Passeig de Gracia pour la Casa Batllo sur votre créneau horodaté, pour la façade en écailles de dragon et la tablette audio animée. Puis marchez cinq minutes plus haut sur le boulevard.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "la-pedrera",
              text: "Voyez La Pedrera (Casa Mila) plus haut sur le même boulevard sur votre créneau horodaté, pour la façade ondulée et le toit aux cheminées en casques de guerrier. Déjeunez dans une rue latérale à l'écart du Passeig de Gracia, pas sur les terrasses du boulevard.",
              durationMin: 90,
            },
            {
              poiSlug: "park-guell",
              text: "Montez au Park Guell pour un créneau d'après-midi dans la Zone monumentale, qui se trouve juste au-dessus de votre base à Gracia, en utilisant les escalators extérieurs pour la montée. Voyez la terrasse en mosaïque et le lézard, puis redescendez dans Gracia proprement dit.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              text: "Installez-vous dans Gracia pour la soirée, en buvant en terrasse sur l'une de ses places comme les habitants avant le dîner. Les restaurants familiaux et les bars sans prétention du quartier sont à une courte marche de votre lit.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Vieille ville : cathédrale, El Born, Picasso, Boqueria, La Rambla",
          morning: [
            {
              poiSlug: "barcelona-cathedral",
              text: "Prenez le métro jusqu'à la cathédrale de Barcelone à l'ouverture pour le cloître tranquille et ses oies, et la vue depuis le toit sur les flèches gothiques. Flânez ensuite dans le Barri Gotic, en visant la Placa Sant Felip Neri et le quartier juif médiéval.",
              durationMin: 90,
            },
            {
              poiSlug: "picasso-museum",
              text: "Marchez vers l'est dans El Born jusqu'au musée Picasso sur votre créneau réservé, fort sur les premières années barcelonaises et les Ménines. Un musée compact, donc 75 minutes suffisent avant le déjeuner.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "la-boqueria",
              text: "Passez au marché de la Boqueria pour le déjeuner à un bar des étals du fond comme le Pinotxo ou l'El Quim, en sautant les étals de devant surfacturés. Puis parcourez La Rambla une fois pour l'ambiance, sac fermé et devant vous, jusqu'au port.",
              durationMin: 120,
            },
            {
              poiSlug: "parc-de-la-ciutadella",
              text: "Bouclez jusqu'au parc de la Ciutadella à côté d'El Born, gratuit et vert, pour la fontaine de la Cascada et une barque sur le lac. Une pause calme au milieu d'une journée dans la vieille ville.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "santa-maria-del-mar",
              text: "Revenez dans El Born le soir autour de Santa Maria del Mar, en entrant dans la nef gothique élancée de l'église si elle est ouverte, puis en sortant vers les bars à vin. Visez à l'écart du Passeig del Born principal pour des tapas au meilleur rapport qualité-prix.",
              durationMin: 90,
            },
            {
              text: "Dînez dans El Born, en réservant à l'avance partout où c'est bien noté, avant de remonter vers Gracia. Finissez par un cocktail dans l'un des bars design du quartier si la nuit est jeune.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Salle de concert, plage et coucher de soleil",
          morning: [
            {
              poiSlug: "palau-de-la-musica",
              text: "Commencez par une visite guidée réservée à l'avance du Palau de la Musica Catalana, pour la verrière en vitraux et la salle aux colonnes de mosaïque. La courte visite suffit à voir l'intérieur moderniste avant que la journée ne chauffe.",
              durationMin: 75,
            },
            {
              poiSlug: "la-rambla",
              text: "Si vous l'avez sautée, parcourez La Rambla et les rues qui en partent maintenant, sac fermé, puis descendez vers le port et la marina du Port Vell. Prenez un déjeuner précoce une rue en retrait de l'eau plutôt que sur les terrasses touristiques.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "barceloneta-beach",
              text: "Consacrez l'après-midi à la plage de la Barceloneta et une baignade s'il fait chaud, en surveillant vos sacs à tout moment. Marchez vers le nord jusqu'aux plages plus propres de Bogatell ou de Mar Bella si vous voulez un sable plus calme et moins de monde.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "bunkers-del-carmel",
              text: "Montez aux Bunkers del Carmel pour le coucher de soleil, le point de vue gratuit à 360 degrés sur la ville, tout proche de votre base à Gracia. Apportez vos propres boissons et en-cas, car il n'y a aucune boutique en haut, et il y fait venteux.",
              durationMin: 90,
            },
            {
              text: "Redescendez pour dîner dans Gracia, sur une terrasse de place par une soirée douce, en réservant à l'avance pour les adresses populaires. Une soirée locale détendue plutôt qu'un secteur touristique.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Montjuic et fontaine magique, ou une excursion",
          morning: [
            {
              poiSlug: "montjuic",
              text: "Consacrez la matinée à Montjuic, en prenant le funiculaire puis le téléphérique pour vous épargner la montée, pour le musée d'art MNAC, la fondation Joan Miro, les jardins et le château avec sa vue sur le port. Sinon, échangez toute la journée contre un train vers le monastère de montagne de Montserrat pour ses pics dentelés et son choeur de garçons, ou vers Gérone pour sa cathédrale et son ancien quartier juif.",
              durationMin: 240,
            },
          ],
          afternoon: [
            {
              text: "Redescendez de Montjuic par les jardins et le village d'architecture du Poble Espanyol s'il vous tente, ou reprenez le train d'excursion jusqu'à Sants en fin d'après-midi. Dans tous les cas, gardez un rythme tranquille, car c'est la journée soupape.",
              durationMin: 120,
            },
            {
              text: "Reposez-vous près de votre base à Gracia ou dans l'Eixample avec un café et une promenade tranquille, en ménageant vos jambes pour une dernière grande soirée. Si vous avez fait Montserrat, c'est là que vous rentrez.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "montjuic",
              text: "Si le programme le permet, rendez-vous à la fontaine magique en contrebas du MNAC sur Montjuic pour le spectacle gratuit de son et lumière, en arrivant 20 minutes en avance pour une place sur les marches. Vérifiez d'abord les soirs du moment, car elle ne fonctionne que certains soirs et est coupée en hiver et pendant les sécheresses.",
              durationMin: 60,
            },
            {
              text: "Finissez par un dîner d'adieu de retour à Gracia, en dépensant un peu plus pour votre dernier repas catalan dans un restaurant de place repéré plus tôt. Terminez par un dernier verre sur une place tranquille, à une courte marche de votre lit, ce qui est tout l'intérêt de loger ici pour quatre jours.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
  ],
};

export default barcelonaFr;
