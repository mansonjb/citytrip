import type { CityData } from "../types";

const krakowFr: CityData = {
  city: {
    slug: "krakow",
    name: "Cracovie",
    country: "Pologne",
    countrySlug: "poland",
    lat: 50.0647,
    lng: 19.945,
    tier: 3,
    idealDays: 2,
    durations: [2, 3],
    airportCode: "KRK",
    airportToCenter:
      "Le train de l'aéroport de Cracovie à la gare principale de Krakow Glowny prend environ 20 minutes et coûte autour de 17 PLN, soit à peu près 4 EUR, avec un départ toutes les 30 minutes. Les bus urbains 208 et 252 couvrent le même trajet, plus lentement, pour un ticket de transport standard si les horaires du train ne conviennent pas.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 12],
    avoidMonths: [1],
    monthlyNotes: {
      1: "Le mois le plus froid, avec des maximales autour de 1C, des minimales bien en dessous de zéro et des journées grises et courtes ; le marché de Noël de la Grand-Place (Rynek Glowny) se termine en général dans les premiers jours de janvier. Les sites sont calmes et les tarifs hôteliers touchent leur plancher annuel, mais préparez-vous à un vrai hiver et attendez-vous à de la neige au sol.",
      2: "Toujours en plein hiver, des maximales autour de 3C et du gel fréquent, ce qui en fait une période bon marché et sans foule pour enchaîner les sites couverts et le Wawel. Les journées s'allongent un peu, et les bars à lait et les caves portent l'atmosphère quand il fait trop froid pour traîner dehors.",
      3: "Les maximales grimpent vers 9C et la ville dégèle ; les marchés de Pâques apparaissent sur la Grand-Place dans la seconde moitié du mois lorsque Pâques tombe tôt. La foule reste légère et les prix restent sous le pic printanier, une bonne fenêtre pour un séjour au bon rapport qualité-prix.",
      4: "Un vrai printemps autour de 14C, avec les floraisons dans le parc Planty et les premières tables de café en terrasse sur la place. Les week-ends autour de Pâques et le long week-end de mai sont chargés, alors réservez bien à l'avance les appartements d'apparat du Wawel et toute réservation pour Auschwitz-Birkenau.",
      5: "L'un des meilleurs mois, des maximales proches de 19C, de longues soirées lumineuses et les jardins à bière qui se remplissent à Kazimierz. C'est le pic de la mi-saison, alors les prix des hébergements se raffermissent et la place s'anime ; réservez tôt les excursions à Auschwitz et Wieliczka.",
      6: "Chaud, autour de 22C, avec les journées les plus longues de l'année et deux événements phares : la fête du solstice de la Wianki au bord de la Vistule sous le Wawel autour du solstice, et le début du Festival de la culture juive à Kazimierz dans la dernière semaine. Réservez tôt un hébergement à Kazimierz pour les dates du festival.",
      7: "Plein été, des maximales autour de 24C, des soirées douces et les concerts du Festival de la culture juive qui débordent dans Kazimierz durant les premiers jours du mois. C'est la période la plus fréquentée et la plus chère ; faites le Wawel et la place tôt et gardez les après-midi pour le parc Planty ombragé et les bars du bord de fleuve.",
      8: "La même chaleur estivale près de 24C et l'affluence touristique la plus élevée de l'année, avec des orages occasionnels en fin d'après-midi. Les jardins à bière et les quais de la Vistule absorbent bien la foule, mais attendez-vous à des files pour la mine de sel et l'usine de Schindler toute la journée, alors réservez à l'avance.",
      9: "Des maximales autour de 19C, une foule qui s'éclaircit après la première semaine et un temps agréable pour marcher, ce qui en fait l'alternative maligne à l'été. Les prix se détendent et la lumière devient dorée sur la place ; les excursions sont plus faciles à réserver à la dernière minute.",
      10: "Un automne vif autour de 13C, avec de belles couleurs dans le parc Planty et le long du fleuve ; l'affluence touristique chute nettement après la mi-mois et les tarifs hôteliers suivent. Emportez une couche chaude pour les soirées, qui deviennent froides très vite une fois le soleil couché.",
      11: "Gris, froid et calme autour de 7C jusqu'à l'ouverture du marché de Noël sur la Grand-Place dans la dernière semaine, ce qui renverse complètement l'ambiance. La fin novembre est un bon compromis : les étals du marché et le vin chaud sans la densité des week-ends de décembre.",
      12: "Le marché de Noël de la Grand-Place se tient tout le mois avec du fromage oscypek grillé, du vin chaud et une immense tradition de crèches, et il attire de grosses foules le week-end. Attendez-vous à des minimales sous zéro, à de la neige possible et à des prix hôteliers de décembre au-dessus de la norme hivernale, alors réservez tôt.",
    },
    climate: {
      1: { highC: 1, lowC: -4, rainyDays: 9 },
      2: { highC: 3, lowC: -3, rainyDays: 8 },
      3: { highC: 9, lowC: 0, rainyDays: 9 },
      4: { highC: 14, lowC: 4, rainyDays: 10 },
      5: { highC: 19, lowC: 9, rainyDays: 12 },
      6: { highC: 22, lowC: 12, rainyDays: 13 },
      7: { highC: 24, lowC: 14, rainyDays: 13 },
      8: { highC: 24, lowC: 13, rainyDays: 11 },
      9: { highC: 19, lowC: 9, rainyDays: 9 },
      10: { highC: 13, lowC: 5, rainyDays: 8 },
      11: { highC: 7, lowC: 1, rainyDays: 9 },
      12: { highC: 2, lowC: -3, rainyDays: 10 },
    },
    budgetLevel: "low",
    budgetPerDay: { budget: 45, mid: 95, high: 190 },
    tagline: "Coeur médiéval intact, prix des bars à lait, histoire lourde à deux pas.",
    heroIntro:
      "Cracovie a conservé la plus grande place médiévale d'Europe, un château royal sur sa colline et tout un quartier juif qui a survécu à la guerre, le tout à l'intérieur d'un anneau que l'on traverse à pied en vingt minutes. C'est l'un des city breaks classiques les moins chers du continent, et les bars à lait vous nourrissent encore pour quelques euros. Deux jours suffisent pour faire tranquillement la vieille ville, le Wawel et Kazimierz ; un troisième jour est réservé aux grandes excursions à réserver à l'avance, Auschwitz-Birkenau ou la mine de sel de Wieliczka.",
    accent: { from: "#8E2D3C", to: "#D9A441", ink: "#4E1A24" },
    neighborhoodSlugs: [
      "stare-miasto",
      "kazimierz",
      "podgorze",
      "kleparz",
      "stradom",
    ],
    nearbyCitySlugs: ["prague"],
  },

  neighborhoods: [
    {
      slug: "stare-miasto",
      citySlug: "krakow",
      name: "Stare Miasto (Vieille Ville)",
      lat: 50.0616,
      lng: 19.937,
      bestFor: ["first-time", "romantic"],
      vibe: "Le coeur médiéval à l'intérieur de l'anneau vert du parc Planty, bâti autour de la Grand-Place (Rynek Glowny), la plus grande place de marché d'Europe. Le jour, c'est la partie la plus animée de la ville, tout en calèches, tables de café et l'appel de trompette de la basilique Sainte-Marie à chaque heure ; en fin de soirée, les excursionnistes s'éclaircissent et les caves prennent le relais. Tout ce qu'un primo-visiteur recherche tient dans un rayon de dix minutes à pied.",
      pros: [
        "La Grand-Place, la Halle aux draps et le Wawel tous à courte distance à pied",
        "Le plus large choix d'hôtels et d'appartements de Cracovie",
        "Aucun transport nécessaire pour un séjour de deux jours",
      ],
      cons: [
        "Les restaurants en plein sur la place sont des pièges à touristes hors de prix",
        "Groupes d'enterrement de vie de garçon et bruit de rue les soirs de week-end",
        "Vous payez une prime d'emplacement par rapport à Kazimierz ou Kleparz",
      ],
    },
    {
      slug: "kazimierz",
      citySlug: "krakow",
      name: "Kazimierz",
      lat: 50.0515,
      lng: 19.944,
      bestFor: ["local", "nightlife", "romantic", "budget"],
      vibe: "L'ancien quartier juif au sud du centre, aujourd'hui le quartier le plus atmosphérique de la ville, avec ses synagogues préservées, ses bars de cour et la meilleure cuisine de rue de Cracovie. Il va des ruelles calmes et chargées de mémoire autour des synagogues à la scène de bars bondée du Plac Nowy après la tombée de la nuit. Y loger vous place entre la vieille ville et Podgorze, l'usine de Schindler à courte marche de l'autre côté du fleuve.",
      pros: [
        "Les meilleurs bars, cafés et cuisine de rue de la ville, à prix locaux",
        "À distance de marche à la fois de la vieille ville et de l'usine de Schindler",
        "Des chambres moins chères que la vieille ville pour le même sentiment de centralité",
      ],
      cons: [
        "Le Plac Nowy et ses rues adjacentes deviennent bruyants tard le week-end",
        "Une marche de 15 minutes jusqu'à la Grand-Place plutôt qu'à quelques pas",
        "Moins de grandes enseignes hôtelières, davantage d'appartements et de petites maisons d'hôtes",
      ],
    },
    {
      slug: "podgorze",
      citySlug: "krakow",
      name: "Podgorze",
      lat: 50.0446,
      lng: 19.9565,
      bestFor: ["local", "budget", "family"],
      vibe: "Le quartier de l'autre côté de la Vistule qui abritait le ghetto de guerre, aujourd'hui un quartier résidentiel tranquille à l'histoire la plus lourde de Cracovie et à l'ambiance lente et sans hâte. L'usine de Schindler, la place des Héros du ghetto avec son mémorial des chaises vides et le musée d'art moderne MOCAK se trouvent tous ici. C'est une courte marche par la passerelle depuis Kazimierz, mais un monde bien plus calme la nuit.",
      pros: [
        "L'usine de Schindler et les mémoriaux du ghetto à votre porte",
        "Des rues calmes, authentiquement locales et des prix plus bas que le centre",
        "Passerelle directe vers Kazimierz pour les sorties du soir",
      ],
      cons: [
        "Peu de restaurants et de bars comparé à Kazimierz de l'autre côté du fleuve",
        "20 à 25 minutes à pied jusqu'à la Grand-Place",
        "Ambiance grave par endroits ; c'est un lieu de mémoire, pas de vie nocturne",
      ],
    },
    {
      slug: "kleparz",
      citySlug: "krakow",
      name: "Kleparz",
      lat: 50.0685,
      lng: 19.9415,
      bestFor: ["budget", "local", "family"],
      vibe: "Un quartier populaire juste au nord des remparts de la vieille ville, bâti autour de la halle du marché Stary Kleparz où les habitants font leurs courses de produits frais depuis des siècles. Il est plus ordinaire que le coeur touristique, mais se trouve à cinq minutes de la Barbacane et juste à côté des gares principales de train et de bus. C'est là qu'on troque le charme carte postale contre des prix plus bas et un transport facile.",
      pros: [
        "Les chambres proches du centre les moins chères, à cinq minutes de la vieille ville",
        "Le marché Stary Kleparz pour des produits frais et des en-cas bon marché",
        "À deux pas de Krakow Glowny pour le train de l'aéroport et les excursions",
      ],
      cons: [
        "Peu de charme dans le quartier lui-même ; on y dort, on n'y traîne pas",
        "Les routes passantes et la gare apportent trafic et bruit",
        "Offre de dîner du soir maigre comparée à Kazimierz ou à la place",
      ],
    },
    {
      slug: "stradom",
      citySlug: "krakow",
      name: "Stradom",
      lat: 50.0555,
      lng: 19.9415,
      bestFor: ["first-time", "romantic", "family"],
      vibe: "La bande étroite entre la vieille ville et Kazimierz, sous le flanc est de la colline du Wawel. C'est central sans le bruit de la place, à cinq minutes de marche à la fois de la Grand-Place et des bars de Kazimierz, et le plus proche de tous du château. Une base sensée pour qui veut la vieille ville et Kazimierz à parts égales.",
      pros: [
        "À mi-chemin entre la Grand-Place, le Wawel et Kazimierz, le tout à pied",
        "Des nuits plus calmes que la place ou le Plac Nowy",
        "Le quartier résidentiel le plus proche du château du Wawel",
      ],
      cons: [
        "Une sélection d'hôtels plus restreinte que la vieille ville proprement dite",
        "Quelques routes de transit passantes traversent le quartier",
        "Moins de vie propre ; on en sort pour dîner et pour les bars",
      ],
    },
  ],

  pois: [
    {
      slug: "rynek-glowny",
      citySlug: "krakow",
      name: "Grand-Place & Halle aux draps (Sukiennice)",
      lat: 50.0617,
      lng: 19.9373,
      kind: "sight",
      needsBooking: false,
      tip: "La place et les étals du marché de la Halle aux draps au rez-de-chaussée sont gratuits à parcourir ; regardez l'ambre et l'artisanat folklorique mais marchandez, et évitez les kiosques de change autour de la place, aux taux exécrables. Le musée souterrain du Rynek sous la place est le clou payant, et il affiche complet les après-midi chargés, alors réservez un créneau du matin en ligne.",
    },
    {
      slug: "st-marys-basilica",
      citySlug: "krakow",
      name: "Basilique Sainte-Marie",
      lat: 50.0617,
      lng: 19.9394,
      kind: "sight",
      needsBooking: true,
      tip: "Il y a deux billets distincts à créneaux limités : un pour l'église afin de voir le retable en bois de Veit Stoss, ouvert chaque jour vers 11h50, et un billet horodaté séparé pour l'ascension de la tour. Achetez les deux en ligne à l'avance, et tenez-vous sur la place à chaque heure pile pour entendre l'appel de trompette du hejnal joué en direct depuis la tour et s'interrompre en pleine note, un clin d'oeil à un trompettiste médiéval fauché par une flèche.",
    },
    {
      slug: "wawel-castle",
      citySlug: "krakow",
      name: "Château royal du Wawel",
      lat: 50.0544,
      lng: 19.9356,
      kind: "sight",
      needsBooking: true,
      tip: "La cour du château et les jardins de la colline sont gratuits d'accès, mais les Appartements d'apparat et les Appartements royaux fonctionnent avec des billets horodatés à quota journalier qui s'épuise tôt en été, alors réservez en ligne un créneau proche de l'ouverture à 9h30. Un nombre limité de billets gratuits pour certains parcours est libéré un jour par semaine, en général le lundi, et ils partent en quelques minutes.",
    },
    {
      slug: "wawel-cathedral",
      citySlug: "krakow",
      name: "Cathédrale du Wawel",
      lat: 50.0543,
      lng: 19.9351,
      kind: "sight",
      needsBooking: false,
      tip: "L'entrée dans la nef de la cathédrale est gratuite, mais les tombeaux royaux, l'ascension de la tour de la cloche Sigismond et la crypte nécessitent un billet combiné à acheter à la maison en face de l'entrée, de l'autre côté de la place, et non à la porte. Montez tôt l'étroit escalier de bois jusqu'au niveau de la cloche Sigismond, avant que l'escalier en file indienne ne se congestionne en milieu de matinée.",
    },
    {
      slug: "kazimierz-quarter",
      citySlug: "krakow",
      name: "Quartier juif de Kazimierz",
      lat: 50.0515,
      lng: 19.9445,
      kind: "sight",
      needsBooking: false,
      tip: "Parcourez-le le matin pour les synagogues, le cimetière Remuh et la rue Szeroka avec presque personne, puis revenez après la nuit tombée pour la scène de bars du Plac Nowy. Les zapiekanki ronds, ces baguettes-pizzas de la rotonde Okraglak sur le Plac Nowy, sont l'en-cas bon marché classique de fin de soirée pour quelques zlotys.",
    },
    {
      slug: "schindlers-factory",
      citySlug: "krakow",
      name: "Musée de l'usine de Schindler",
      lat: 50.0475,
      lng: 19.9613,
      kind: "museum",
      needsBooking: true,
      tip: "C'est un musée de la Cracovie occupée pendant la guerre, installé dans la vraie fabrique d'émaillerie d'Oskar Schindler, pas seulement une évocation du film, et il affiche complet des jours à l'avance en été, alors réservez un billet horodaté en ligne. Prenez le premier créneau de la journée ; les salles immersives étroites forment de gros goulots d'étranglement une fois les groupes arrivés, et comptez deux bonnes heures.",
    },
    {
      slug: "auschwitz-birkenau",
      citySlug: "krakow",
      name: "Mémorial d'Auschwitz-Birkenau",
      lat: 50.0343,
      lng: 19.1789,
      kind: "sight",
      needsBooking: true,
      tip: "L'entrée est gratuite mais vous DEVEZ réserver un billet d'entrée horodaté en ligne, souvent des semaines à l'avance en haute saison, et entre environ 10h et 15h vous ne pouvez entrer qu'avec un guide agréé. C'est environ 1h30 de route dans chaque sens près d'Oswiecim, alors bloquez au moins une demi-journée et, de façon réaliste, la majeure partie d'une journée ; le site couvre deux camps distincts, Auschwitz I et Birkenau, reliés par une navette.",
    },
    {
      slug: "wieliczka-salt-mine",
      citySlug: "krakow",
      name: "Mine de sel de Wieliczka",
      lat: 49.9832,
      lng: 20.0546,
      kind: "experience",
      needsBooking: true,
      tip: "On ne peut descendre qu'en visite guidée, alors réservez la Route touristique en ligne à l'avance, surtout en été quand les créneaux en anglais se remplissent vite. C'est une marche de deux heures avec environ 380 marches à descendre au début et aucune possibilité de partir plus tôt, donc ce n'est pas pour qui ne peut pas gérer les marches ; la température souterraine tient autour de 14C toute l'année, emportez une couche.",
    },
    {
      slug: "planty-park",
      citySlug: "krakow",
      name: "Anneau du parc Planty",
      lat: 50.0625,
      lng: 19.9355,
      kind: "park",
      needsBooking: false,
      tip: "Cette ceinture verte fait le tour de toute la vieille ville sur le tracé des remparts démolis, un anneau plat de quatre kilomètres que l'on parcourt à pied en moins d'une heure. Utilisez-le comme raccourci ombragé entre les sites en été plutôt que comme une destination ; le tronçon près de la Barbacane et du quartier universitaire est le plus joli.",
    },
    {
      slug: "barbican-florian-gate",
      citySlug: "krakow",
      name: "Barbacane & porte Saint-Florian",
      lat: 50.0655,
      lng: 19.9415,
      kind: "sight",
      needsBooking: false,
      tip: "La Barbacane et les remparts sont gratuits à regarder depuis le parc Planty ; un billet combiné bon marché permet de parcourir les remparts subsistants et de monter dans la Barbacane si l'angle défense médiévale vous intéresse. La porte Saint-Florian s'ouvre sur la rue Florianska, l'approche classique en descente vers la Grand-Place, et les peintres locaux accrochent leurs toiles le long du mur ici.",
    },
    {
      slug: "collegium-maius",
      citySlug: "krakow",
      name: "Collegium Maius (Université jagellonne)",
      lat: 50.0614,
      lng: 19.9327,
      kind: "museum",
      needsBooking: true,
      tip: "Le plus ancien bâtiment de la plus vieille université de Pologne, où étudia Copernic, ne se visite qu'en visite guidée, et les créneaux populaires affichent complet, alors réservez à l'avance et demandez une visite en anglais. La cour gothique à arcades est gratuite d'accès et son horloge astronomique carillonne et fait défiler des figurines quelques fois par jour, à ne pas manquer.",
    },
    {
      slug: "milk-bar-tomasza",
      citySlug: "krakow",
      name: "Bar Mleczny (bar à lait)",
      lat: 50.0625,
      lng: 19.9405,
      kind: "food",
      needsBooking: false,
      tip: "Un bar mleczny est une cantine subventionnée qui sert pierogi, soupes et escalopes pour quelques euros, une vraie tranche de Pologne du quotidien ; cherchez-en un comme le Bar Mleczny Tomasza près de la vieille ville. Lisez le menu en polonais affiché au-dessus du comptoir, payez d'abord à la caisse, puis récupérez votre plat ; les espèces sont le plus sûr et la rotation est rapide au déjeuner.",
    },
    {
      slug: "ghetto-heroes-square",
      citySlug: "krakow",
      name: "Podgorze & place des Héros du ghetto",
      lat: 50.0475,
      lng: 19.9527,
      kind: "sight",
      needsBooking: false,
      tip: "La place de l'autre côté du fleuve, à Podgorze, abrite le mémorial des 70 chaises de bronze vides qui marque le ghetto de guerre, et la Pharmacie de l'Aigle, à son bord, est un petit musée émouvant du ghetto pour une somme modique. Combinez-la avec l'usine de Schindler à quelques minutes, puisque les deux sont du même côté de la Vistule.",
    },
    {
      slug: "kosciuszko-mound",
      citySlug: "krakow",
      name: "Point de vue du tertre de Kosciuszko",
      lat: 50.0547,
      lng: 19.8917,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Ce tertre artificiel à l'ouest du centre offre le meilleur panorama complet sur Cracovie et, par temps clair, sur les monts Tatra ; un billet modique couvre la montée et le petit musée du fort qui l'entoure. C'est une trentaine de minutes en bus 100 ou en tram plus une courte marche, alors gardez-le pour un après-midi dégagé plutôt qu'un gris.",
    },
  ],

  itineraries: [
    {
      citySlug: "krakow",
      days: 2,
      summary:
        "Deux jours suffisent pour le coeur de Cracovie si vous logez au centre et démarrez tôt, et cela couvre la vieille ville, le Wawel et Kazimierz sans se sentir pressé. Tout le centre tient à l'intérieur de l'anneau du parc Planty, si bien que la Grand-Place, Sainte-Marie, la Halle aux draps et le Wawel sont tous à moins de 15 minutes à pied les uns des autres, et Kazimierz est à une courte flânerie au sud. Installez-vous à Stare Miasto pour que les deux matinées démarrent à pied. Le plan qui marche : un jour pour la vieille ville et la colline du Wawel, et un jour pour Kazimierz, l'usine de Schindler et Podgorze de l'autre côté du fleuve. Réservez deux choses en ligne avant d'arriver : les Appartements d'apparat du Wawel et un créneau horodaté pour l'usine de Schindler, puisque les deux affichent complet en saison. Ce que deux jours ne vous offrent pas, ce sont les grandes excursions à réserver à l'avance : Auschwitz-Birkenau et la mine de sel de Wieliczka demandent chacune au moins une demi-journée, ce à quoi sert précisément un troisième jour. Les prix sont bas, alors mangez bien ; un déjeuner au bar à lait coûte quelques euros.",
      stayNeighborhoodSlug: "stare-miasto",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Vieille ville et colline du Wawel",
          morning: [
            {
              poiSlug: "rynek-glowny",
              text: "Commencez sur la Grand-Place vers 8h30 tant que la place est calme, parcourez les étals de la Halle aux draps au rez-de-chaussée, puis descendez dans le musée souterrain du Rynek sous la place sur un créneau du matin réservé à l'avance.",
              durationMin: 105,
            },
            {
              poiSlug: "st-marys-basilica",
              text: "Entrez dans la basilique Sainte-Marie pour le retable en bois de Veit Stoss, en visant le dévoilement quotidien vers 11h50, et restez sur la place à l'heure pile pour entendre l'appel de trompette du hejnal en direct s'interrompre en pleine note.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "milk-bar-tomasza",
              text: "Déjeunez dans un bar à lait comme le Bar Mleczny Tomasza avec des pierogi et une soupe pour quelques euros. Payez d'abord à la caisse, récupérez au comptoir, et apportez des espèces.",
              durationMin: 45,
            },
            {
              poiSlug: "wawel-castle",
              text: "Descendez vers la colline du Wawel et visitez les Appartements d'apparat du château royal sur votre billet réservé à l'avance, puis passez du temps gratuitement dans la cour à arcades et le long des remparts au-dessus de la Vistule.",
              durationMin: 120,
            },
            {
              poiSlug: "wawel-cathedral",
              text: "Juste à côté, visitez la cathédrale du Wawel : la nef est gratuite, et un billet combiné pris à la maison d'en face couvre les tombeaux royaux et la montée à la cloche Sigismond pour une vue sur le fleuve.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "barbican-florian-gate",
              text: "Remontez vers le nord par la rue Florianska et franchissez la porte Saint-Florian jusqu'à la Barbacane, l'approche médiévale classique à l'envers, avec les peintres du mur installés en chemin.",
              durationMin: 45,
            },
            {
              text: "Dînez dans la vieille ville à l'écart de la place principale, sur une rue latérale comme Slawkowska ou autour du Plac Szczepanski, où un repas polonais complet avec une bière revient bien en dessous d'un prix de place touristique.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Kazimierz, usine de Schindler et Podgorze",
          morning: [
            {
              poiSlug: "kazimierz-quarter",
              text: "Descendez tôt à Kazimierz et faites le quartier juif avant la foule : les synagogues, le cimetière Remuh et la rue Szeroka, tous calmes le matin.",
              durationMin: 120,
            },
            {
              text: "Attrapez un zapiekanka rond à la rotonde Okraglak sur le Plac Nowy pour un déjeuner de rue bon marché, puis coupez vers la passerelle du fleuve en direction de Podgorze.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "schindlers-factory",
              text: "Passez à Podgorze pour votre entrée horodatée à l'usine de Schindler, réservée à l'avance sur un créneau matinal idéal, un musée de la Cracovie occupée pendant la guerre installé dans la vraie fabrique d'émaillerie d'Oskar Schindler. Comptez deux bonnes heures.",
              durationMin: 120,
            },
            {
              poiSlug: "ghetto-heroes-square",
              text: "À quelques minutes, tenez-vous sur la place des Héros du ghetto avec ses 70 chaises de bronze vides, et entrez dans le petit musée de la Pharmacie de l'Aigle, à son bord, pour l'histoire du ghetto.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "planty-park",
              text: "Rentrez vers le centre le long du fleuve et coupez par l'anneau du parc Planty à mesure que la lumière baisse, la ceinture verte plate sur le tracé des anciens remparts.",
              durationMin: 30,
            },
            {
              text: "Terminez par un dîner et des verres de retour à Kazimierz autour du Plac Nowy, la meilleure scène de bars et de cours de la ville, la plus animée et la plus amusante après la tombée de la nuit.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "krakow",
      days: 3,
      summary:
        "Trois jours est la bonne durée pour Cracovie : deux jours suffisent pour la compacte vieille ville, le Wawel et Kazimierz à un rythme humain, et le troisième jour est conçu pour une grande sortie hors de la ville. Ce troisième jour est en réalité la raison d'ajouter une nuit, car les deux grandes excursions exigent une réservation à l'avance et du temps. Auschwitz-Birkenau est gratuit mais demande une réservation horodatée, souvent des semaines à l'avance, se trouve à 1h30 de route dans chaque sens et prend la majeure partie d'une journée ; la mine de sel de Wieliczka est en visite guidée uniquement, plus proche, et remplit bien une demi-journée. Choisissez-en une pour le troisième jour et réservez-la avant tout le reste. Logez à Kazimierz pour ce séjour : cela coûte moins que la vieille ville, met la meilleure cuisine et les meilleurs bars à votre porte, et se trouve à distance de marche à la fois de la place et de l'usine de Schindler. Le schéma : vieille ville et Wawel le premier jour, Kazimierz et Podgorze le deuxième, et votre excursion choisie le troisième. Réservez en ligne à l'avance les appartements du Wawel, l'usine de Schindler et votre excursion.",
      stayNeighborhoodSlug: "kazimierz",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Vieille ville et colline du Wawel",
          morning: [
            {
              poiSlug: "rynek-glowny",
              text: "Depuis Kazimierz, montez vers la vieille ville et commencez sur la Grand-Place pour 8h30 pour la place tranquille et la Halle aux draps, puis entrez dans le musée souterrain du Rynek sur un créneau du matin réservé.",
              durationMin: 105,
            },
            {
              poiSlug: "st-marys-basilica",
              text: "Visitez la basilique Sainte-Marie pour le retable de Veit Stoss autour de son dévoilement de 11h50, et calez votre minute sur la place pour l'appel de trompette du hejnal depuis la tour à l'heure pile.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "milk-bar-tomasza",
              text: "Déjeunez dans un bar à lait avec des pierogi, une escalope et une soupe pour quelques euros, en commandant à la caisse et en récupérant au comptoir avec des espèces.",
              durationMin: 45,
            },
            {
              poiSlug: "wawel-castle",
              text: "Marchez jusqu'à la colline du Wawel et visitez les Appartements d'apparat du château royal sur votre billet horodaté réservé à l'avance, puis attardez-vous gratuitement dans la cour et sur les remparts au bord du fleuve.",
              durationMin: 120,
            },
            {
              poiSlug: "wawel-cathedral",
              text: "Finissez sur la colline à la cathédrale du Wawel, avec la nef gratuite et un billet combiné pour les tombeaux royaux et la montée à la cloche Sigismond au-dessus de la Vistule.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "collegium-maius",
              text: "De retour dans la vieille ville, entrez dans la cour gothique gratuite du Collegium Maius, le plus ancien bâtiment de l'université jagellonne où étudia Copernic, et attrapez le carillon de l'horloge astronomique si le timing s'y prête.",
              durationMin: 45,
            },
            {
              text: "Redescendez à pied vers Kazimierz pour dîner autour du Plac Nowy, où les restaurants de cour et les bars reviennent bien en dessous des prix de la place de la vieille ville.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Kazimierz, usine de Schindler et Podgorze",
          morning: [
            {
              poiSlug: "kazimierz-quarter",
              text: "Vous logez ici, alors démarrez tôt à pied : les synagogues de Kazimierz, le cimetière Remuh et la rue Szeroka sont quasi déserts le matin avant l'arrivée des groupes.",
              durationMin: 120,
            },
            {
              text: "Prenez un zapiekanka bon marché à la rotonde Okraglak sur le Plac Nowy, puis franchissez la passerelle au-dessus de la Vistule vers Podgorze.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "schindlers-factory",
              text: "Entrez à l'usine de Schindler sur votre billet horodaté réservé à l'avance pour le musée immersif de la Cracovie occupée pendant la guerre ; prenez le créneau le plus tôt possible pour devancer les goulots d'étranglement salle par salle, et comptez deux heures.",
              durationMin: 120,
            },
            {
              poiSlug: "ghetto-heroes-square",
              text: "Rejoignez à pied la place des Héros du ghetto pour le mémorial des 70 chaises vides et le musée de la Pharmacie de l'Aigle, à son bord, les deux à quelques minutes de l'usine.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "planty-park",
              text: "Rebouclez par le fleuve et prenez un tronçon tranquille de l'anneau du parc Planty au crépuscule, la ceinture verte plate autour de la vieille ville sur le tracé des remparts démolis.",
              durationMin: 30,
            },
            {
              text: "Dîner et verres à Kazimierz, en écumant les cours et les caves du Plac Nowy, la scène de soirée la plus animée de la ville.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Grande excursion : Auschwitz-Birkenau ou mine de sel de Wieliczka",
          morning: [
            {
              poiSlug: "auschwitz-birkenau",
              text: "Option A : partez tôt pour le mémorial d'Auschwitz-Birkenau, à environ 1h30 de route à l'ouest, sur votre réservation horodatée faite à l'avance ; entre 10h et 15h vous n'entrez qu'avec un guide agréé, et vous verrez à la fois Auschwitz I et Birkenau via la navette.",
              durationMin: 240,
            },
            {
              poiSlug: "wieliczka-salt-mine",
              text: "Option B : rendez-vous à la mine de sel de Wieliczka juste à l'extérieur de la ville sur une Route touristique guidée réservée à l'avance, une marche souterraine de deux heures avec environ 380 marches à descendre au début et un 14C constant, alors emportez une couche.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              text: "Option A : la visite d'Auschwitz-Birkenau et la route remplissent la majeure partie de la journée, alors rentrez à Cracovie l'après-midi et gardez le reste de la journée calme et propice à la réflexion.",
              durationMin: 180,
            },
            {
              text: "Option B : de retour de Wieliczka en début d'après-midi, utilisez le temps libre pour tout ce que vous avez sauté, comme la cour du Wawel, un tronçon du parc Planty ou les étals de la Halle aux draps.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "kosciuszko-mound",
              text: "Si la soirée est dégagée et que vous avez choisi la plus courte excursion de Wieliczka, prenez le bus 100 jusqu'au tertre de Kosciuszko pour le meilleur panorama complet sur Cracovie et, par beau temps, sur les lointains monts Tatra au coucher du soleil.",
              durationMin: 90,
            },
            {
              text: "Dernier dîner de retour à Kazimierz ou dans la vieille ville ; après une journée lourde, un restaurant tranquille en cave avec des pierogi et une bière polonaise est la juste note pour finir.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
  ],
};

export default krakowFr;
