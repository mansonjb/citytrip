import type { CityData } from "../types";

const pragueEs: CityData = {
  city: {
    slug: "prague",
    name: "Praga",
    country: "República Checa",
    countrySlug: "czech-republic",
    lat: 50.0755,
    lng: 14.4378,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "PRG",
    airportToCenter:
      "Autobús 119 hasta Nadrazi Veleslavin, luego metro línea A hacia el centro, unos 45 min en total por alrededor de 2 EUR. El autobús exprés AE llega directo a la estación central de trenes si prefieres un solo vehículo.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10, 12],
    avoidMonths: [7, 8],
    monthlyNotes: {
      1: "Frío, con máximas en torno a 2C y cielos grises frecuentes, pero el mercado navideño de la plaza de la Ciudad Vieja se mantiene hasta el 6 de enero. Después, las tarifas hoteleras caen a su nivel más bajo del año y los grandes monumentos se visitan casi sin cola.",
      2: "Sigue helando por la noche y la ciudad permanece tranquila, así que este es el mes completo más barato para visitarla. Los interiores de los pubs y los museos hacen el trabajo pesado; lleva ropa para mínimas bajo cero.",
      3: "Los días trepan hacia los 9C y los mercados de Pascua abren en la plaza de la Ciudad Vieja en la segunda mitad del mes. La afluencia sigue siendo moderada y los precios se sitúan por debajo del pico primaveral.",
      4: "La primavera de verdad: alrededor de 14C, los cerezos en flor en los parques de Petrin y Letna, y las primeras aperturas de los barcos por el río y de las cervecerías al aire libre. Los fines de semana se cargan en torno a la Pascua, así que reserva el circuito del castillo con antelación.",
      5: "Uno de los mejores meses, con máximas cercanas a 19C y el festival de música Primavera de Praga de mediados de mayo a principios de junio. Reserva alojamiento pronto; los fines de semana de mayo se agotan y los precios alcanzan los máximos de temporada media.",
      6: "Suave, en torno a 22C, con largos días de luz y las cervecerías al aire libre de Letna y Riegrovy Sady a pleno rendimiento. La afluencia crece a lo largo del mes pero se queda por debajo del agobio de julio.",
      7: "Temporada alta: días de 25C, el Puente de Carlos abarrotado desde las 9h y las tarifas de habitación más altas del verano. Si tienes que venir ahora, haz los grandes monumentos antes de las 8h y guarda las tardes para los parques y el río.",
      8: "El mismo calor y la misma afluencia que en julio, con tormentas ocasionales. Los muelles de Naplavka y las zonas de baño de las islas absorben bien el calor, pero cuenta con colas en el castillo durante todo el día.",
      9: "Máximas en torno a 20C, una afluencia que se aligera tras la primera semana, y el festival Dvorak Praga para los amantes de la música clásica. Los precios se relajan; es la alternativa inteligente al verano.",
      10: "Días vivos de 13C y un otoño de colores intensos en Petrin, Letna y Vysehrad. El número de turistas cae notablemente después de mediados de mes y las tarifas hoteleras lo siguen.",
      11: "Gris y frío con máximas en torno a 7C, la etapa más tranquila del año hasta que los mercados navideños abren en la plaza de la Ciudad Vieja a finales de noviembre. El final de noviembre es el momento ideal: el ambiente de los mercados sin la densidad de diciembre.",
      12: "Los mercados navideños de la plaza de la Ciudad Vieja y de la plaza de Wenceslao funcionan de finales de noviembre al 6 de enero y atraen una afluencia densa, sobre todo los fines de semana. Cuenta con mínimas bajo cero, vino caliente por todas partes y precios de hotel de diciembre muy por encima de la norma invernal.",
    },
    climate: {
      1: { highC: 2, lowC: -3, rainyDays: 11 },
      2: { highC: 4, lowC: -2, rainyDays: 9 },
      3: { highC: 9, lowC: 1, rainyDays: 10 },
      4: { highC: 14, lowC: 4, rainyDays: 9 },
      5: { highC: 19, lowC: 8, rainyDays: 11 },
      6: { highC: 22, lowC: 11, rainyDays: 12 },
      7: { highC: 25, lowC: 13, rainyDays: 11 },
      8: { highC: 25, lowC: 13, rainyDays: 10 },
      9: { highC: 20, lowC: 9, rainyDays: 8 },
      10: { highC: 13, lowC: 5, rainyDays: 9 },
      11: { highC: 7, lowC: 1, rainyDays: 10 },
      12: { highC: 3, lowC: -2, rainyDays: 11 },
    },
    budgetLevel: "low",
    budgetPerDay: { budget: 55, mid: 110, high: 220 },
    tagline: "Perfil gótico, cerveza de talla mundial, precios de ciudad pequeña.",
    heroIntro:
      "Praga concentra un castillo, un puente medieval y un casco antiguo intacto en un centro que se cruza a pie en media hora. Es una de las capitales clásicas más baratas de Europa, y la cultura de la cerveza justifica por sí sola el viaje. Tres días cubren lo esencial sin correr; el truco está en encajar los grandes monumentos entre las oleadas de grupos.",
    accent: { from: "#8B7CF6", to: "#E85D75", ink: "#3B2E7E" },
    neighborhoodSlugs: [
      "stare-mesto",
      "mala-strana",
      "vinohrady",
      "zizkov",
      "karlin",
    ],
    nearbyCitySlugs: ["vienna", "budapest"],
  },

  neighborhoods: [
    {
      slug: "stare-mesto",
      citySlug: "prague",
      name: "Stare Mesto (Casco Antiguo)",
      lat: 50.0875,
      lng: 14.421,
      bestFor: ["first-time", "romantic"],
      vibe: "El corazón medieval alrededor de la plaza de la Ciudad Vieja: adoquines, agujas y callejuelas que terminan en patios interiores. De día es el kilómetro cuadrado más concurrido del país; después de las 22h, los grupos desaparecen y la calma llega rápido. Todo lo que pide una primera estancia está a diez minutos a pie.",
      pros: [
        "El Puente de Carlos, la plaza de la Ciudad Vieja y Josefov a pocos minutos a pie",
        "La mayor oferta de hoteles y apartamentos de la ciudad",
        "Ningún transporte necesario para una estancia de 2 días",
      ],
      cons: [
        "Los restaurantes de las plazas principales son trampas para turistas carísimas",
        "Ruido de calle y grupos de despedidas de soltero las noches de fin de semana",
        "Pagas una prima de ubicación del 20 al 30 por ciento respecto a Vinohrady",
      ],
    },
    {
      slug: "mala-strana",
      citySlug: "prague",
      name: "Mala Strana",
      lat: 50.0878,
      lng: 14.4046,
      bestFor: ["romantic", "first-time", "family"],
      vibe: "El barrio barroco al pie del castillo, en la orilla oeste del Moldava. Tejados rojos, jardines de embajadas y callejuelas que se vacían por completo una vez que los excursionistas se marchan a última hora de la tarde. Alojarse aquí significa despertar del lado del castillo, una verdadera ventaja de timing.",
      pros: [
        "El Castillo de Praga, la colina de Petrin y el muro de Lennon en la puerta de casa",
        "Noches tranquilas y de verdad llenas de ambiente",
        "El Puente de Carlos antes del desayuno, sin la multitud",
      ],
      cons: [
        "Menos supermercados y opciones económicas para comer que en la orilla este",
        "Calles empinadas y adoquines que cuestan con maletas o carrito de bebé",
      ],
    },
    {
      slug: "vinohrady",
      citySlug: "prague",
      name: "Vinohrady",
      lat: 50.0755,
      lng: 14.4443,
      bestFor: ["local", "budget", "family", "romantic"],
      vibe: "Una retícula residencial de edificios modernistas, plazas arboladas y la mejor densidad de cafeterías de Praga. Aquí es donde viven los praguenses que tienen elección, y la escena de restaurantes lo refleja. El casco antiguo está a 10 minutos en metro o 25 minutos a pie.",
      pros: [
        "La mejor comida y el mejor café de especialidad de la ciudad, a precios locales",
        "La cervecería al aire libre de Riegrovy Sady y dos grandes parques",
        "Un alojamiento notablemente más barato que el centro",
      ],
      cons: [
        "Te desplazas a cada gran monumento, aunque el trayecto sea corto",
        "Tranquilo de noche si buscas vida nocturna al salir por la puerta",
      ],
    },
    {
      slug: "zizkov",
      citySlug: "prague",
      name: "Zizkov",
      lat: 50.0833,
      lng: 14.4515,
      bestFor: ["nightlife", "budget", "local"],
      vibe: "El barrio de bares de carácter tosco de Praga, que presume de más pubs por habitante que ningún otro sitio de Europa. Más áspero que la vecina Vinohrady, con cerveza barata, bares de barrio y la torre de televisión futurista que domina todo. Se aburguesa manzana a manzana pero sigue siendo la base casi céntrica más barata.",
      pros: [
        "Los precios de habitación y de cerveza más bajos cerca del centro",
        "Una auténtica cultura de pub, casi sin recargo turístico",
        "La colina de Vitkov ofrece una inmensa vista gratuita sobre el casco antiguo",
      ],
      cons: [
        "Algunas manzanas parecen descuidadas y llenas de grafitis",
        "20 a 30 minutos a pie o en tranvía hasta los grandes monumentos",
        "Ruido de bares el fin de semana en las calles principales",
      ],
    },
    {
      slug: "karlin",
      citySlug: "prague",
      name: "Karlin",
      lat: 50.0925,
      lng: 14.4505,
      bestFor: ["local", "family", "budget"],
      vibe: "Un barrio llano junto al río, reconstruido tras la riada de 2002 hasta convertirse en el sector moderno más cuidado de Praga. Amplios bulevares, edificios del siglo XIX rehabilitados y una sólida escena de brunch y cerveza artesanal pensada para los residentes, no para los turistas. A dos paradas de metro del casco antiguo.",
      pros: [
        "Calles llanas aptas para carritos y paseos junto al río",
        "Excelentes restaurantes checos modernos a precios justos",
        "Conexión rápida con el centro por la línea B del metro",
      ],
      cons: [
        "Ningún gran monumento en el propio barrio",
        "Vida nocturna discreta; los bares cierran pronto para lo que es Praga",
      ],
    },
  ],

  pois: [
    {
      slug: "charles-bridge",
      citySlug: "prague",
      name: "Puente de Carlos",
      lat: 50.0865,
      lng: 14.4114,
      kind: "sight",
      needsBooking: false,
      tip: "Crúzalo antes de las 8h o después de las 22h; entre las 10h y las 18h se avanza hombro con hombro. Ignora a los caricaturistas del centro del puente y evita las casas de cambio de ambos extremos, que aplican algunos de los peores tipos de la ciudad.",
    },
    {
      slug: "prague-castle",
      citySlug: "prague",
      name: "Castillo de Praga",
      lat: 50.09,
      lng: 14.4005,
      kind: "sight",
      needsBooking: true,
      tip: "Compra la entrada del circuito básico en línea y entra a la apertura de las puertas, a las 9h; los grupos irrumpen a partir de las 10h. Los patios y las vistas de las callejuelas son gratuitos: si solo quieres el panorama, atraviesa sin entrada y gasta mejor el dinero en el café de la terraza del palacio Lobkowicz.",
    },
    {
      slug: "st-vitus-cathedral",
      citySlug: "prague",
      name: "Catedral de San Vito",
      lat: 50.0909,
      lng: 14.4005,
      kind: "sight",
      needsBooking: true,
      tip: "La entrada está incluida en la del circuito del castillo; la zona gratuita justo tras la puerta no muestra casi nada, así que paga por la nave completa. Ve directo a la vidriera de Mucha, en la tercera capilla a la izquierda, antes de que se llene el pasillo.",
    },
    {
      slug: "old-town-square",
      citySlug: "prague",
      name: "Plaza de la Ciudad Vieja y reloj astronómico",
      lat: 50.0875,
      lng: 14.4213,
      kind: "sight",
      needsBooking: false,
      tip: "El espectáculo del reloj dura 45 segundos y decepciona desde la calle abarrotada; míralo una vez a una hora tranquila como las 9h, y luego paga mejor la subida a la torre del ayuntamiento viejo, que ofrece la mejor vista de la plaza. No comas nunca ni cambies dinero en la propia plaza.",
    },
    {
      slug: "josefov",
      citySlug: "prague",
      name: "Barrio judío (Josefov)",
      lat: 50.09,
      lng: 14.418,
      kind: "museum",
      needsBooking: true,
      tip: "Una sola entrada del Museo Judío cubre las sinagogas y el viejo cementerio judío; cómprala en línea y empieza por la sinagoga Pinkas nada más abrir a las 9h, porque el camino del cementerio detrás de ella se satura a media mañana. Todo cierra los sábados, así que planifica en torno al shabat.",
    },
    {
      slug: "petrin-hill",
      citySlug: "prague",
      name: "Colina de Petrin y torre mirador",
      lat: 50.0833,
      lng: 14.395,
      kind: "viewpoint",
      needsBooking: false,
      tip: "El funicular desde Ujezd funciona con un billete de transporte público normal, pero la cola supera a menudo los 25 minutos de subida a pie a través de los huertos, así que compruébalo antes de comprometerte. Los 299 escalones de la torre baten a las torres del castillo para las fotos del perfil urbano, porque el propio Castillo de Praga entra en el encuadre.",
    },
    {
      slug: "letna-park",
      citySlug: "prague",
      name: "Cervecería al aire libre del parque Letna",
      lat: 50.0955,
      lng: 14.416,
      kind: "park",
      needsBooking: false,
      tip: "Ven una hora antes del atardecer, coge una cerveza en el quiosco por unos 60 CZK y siéntate en un banco del borde sur para la vista clásica sobre los puentes del Moldava. El pago en efectivo funciona bien y el sitio abre aproximadamente de abril a octubre; en invierno el mirador sigue funcionando, el puesto de cerveza no.",
    },
    {
      slug: "vysehrad",
      citySlug: "prague",
      name: "Fortaleza de Vysehrad",
      lat: 50.0645,
      lng: 14.418,
      kind: "sight",
      needsBooking: false,
      tip: "El recinto, las murallas y el cementerio donde reposan Dvorak y Mucha son totalmente gratuitos; solo la pequeña visita a las casamatas es de pago. Toma la línea C del metro hasta Vysehrad, recorre las murallas en sentido antihorario para las vistas del río, y baja por las casas cubistas hacia Naplavka.",
    },
    {
      slug: "wenceslas-square",
      citySlug: "prague",
      name: "Plaza de Wenceslao",
      lat: 50.081,
      lng: 14.428,
      kind: "sight",
      needsBooking: false,
      tip: "Trátala como un paseo de 20 minutos por la historia de 1989 y la fachada del Museo Nacional, no como un destino. Es el terreno preferido de las dos estafas clásicas: no uses nunca las casas de cambio de calle de aquí y no pares nunca un taxi en la plaza; pide mejor un Bolt o un Uber.",
    },
    {
      slug: "klementinum",
      citySlug: "prague",
      name: "Biblioteca barroca del Klementinum",
      lat: 50.0863,
      lng: 14.4165,
      kind: "museum",
      needsBooking: true,
      tip: "La entrada es únicamente con visita guiada, más o menos cada 30 minutos, y las plazas se agotan rápido los días concurridos: reserva en línea una visita de la mañana. Se admira la sala de la biblioteca barroca desde el umbral, sin poder entrar en la estancia; la verdadera recompensa es la galería de la torre astronómica al final del recorrido.",
    },
    {
      slug: "lennon-wall",
      citySlug: "prague",
      name: "Muro de Lennon",
      lat: 50.0863,
      lng: 14.4069,
      kind: "sight",
      needsBooking: false,
      tip: "Es una parada de cinco minutos, repintada constantemente: no hagas un rodeo solo por él, intégralo en un paseo por Mala Strana entre el Puente de Carlos y la isla de Kampa. Antes de las 9h puedes fotografiarlo sin una sola persona en el encuadre.",
    },
    {
      slug: "lokal-dlouha",
      citySlug: "prague",
      name: "Lokal Dlouha",
      lat: 50.0899,
      lng: 14.4257,
      kind: "food",
      needsBooking: false,
      tip: "Es la referencia para la Pilsner Urquell fresca de los tanques y los clásicos checos honestos como la svickova a precios razonables. Admite reservas y se llena a partir de las 19h; sin reserva, tienes más opciones en la barra o antes de las 18h, y ten en cuenta que tu cuenta de cervezas se apunta en un papel que pagas al final.",
    },
    {
      slug: "strahov-library",
      citySlug: "prague",
      name: "Biblioteca del monasterio de Strahov",
      lat: 50.0862,
      lng: 14.3893,
      kind: "museum",
      needsBooking: true,
      tip: "Como en el Klementinum, se contemplan las salas teológica y filosófica desde las puertas: calcula 30 a 40 minutos y saca el permiso de fotos si quieres imágenes. Combínala con la terraza gratuita bajo el monasterio, uno de los mejores miradores de castillo y ciudad de Praga, y luego baja a pie hacia el castillo.",
    },
    {
      slug: "naplavka",
      citySlug: "prague",
      name: "Muelles de Naplavka",
      lat: 50.071,
      lng: 14.414,
      kind: "experience",
      needsBooking: false,
      tip: "El sábado por la mañana acoge el mejor mercado de productores de la ciudad, de 8h a 14h; las tardes de verano el muelle se transforma en una escena de bares al aire libre con barcazas reconvertidas en pubs. Llega antes de las 18h los viernes calurosos o buscarás un hueco en el muro.",
    },
  ],

  itineraries: [
    {
      citySlug: "prague",
      days: 2,
      summary:
        "Dos días bastan para los monumentos principales de Praga si te alojas en el centro y arrancas temprano, pero no rozarás el lado local de la ciudad. El centro es compacto: el Puente de Carlos, la plaza de la Ciudad Vieja y el barrio del castillo están a 25 minutos a pie unos de otros, así que un plan ajustado cubre los tres más el barrio judío sin transporte. Alójate en Stare Mesto para que las dos mañanas empiecen a pie. La estructura que funciona: una orilla por día, día uno para el corazón del casco antiguo y Josefov, día dos para la colina del castillo, Strahov y Mala Strana. Reserva en línea el circuito del castillo y las entradas del Museo Judío antes de llegar, porque las colas son la única amenaza real de una visita de 48 horas. Lo que sacrificas: Vysehrad, la escena de cafeterías de Vinohrady y cualquier tarde tranquila en una cervecería al aire libre, exactamente lo que te compra un tercer día. Los precios son bajos para lo que es Europa Occidental, así que come bien; solo mantente lejos de las plazas principales.",
      stayNeighborhoodSlug: "stare-mesto",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Corazón del casco antiguo y barrio judío",
          morning: [
            {
              poiSlug: "old-town-square",
              text: "Empieza en la plaza de la Ciudad Vieja hacia las 8h30 cuando todavía está tranquila, asiste al espectáculo del reloj astronómico de las 9h, y luego sube la torre del ayuntamiento viejo para la vista de los tejados antes de que lleguen los primeros grupos.",
              durationMin: 75,
            },
            {
              poiSlug: "josefov",
              text: "Camina cinco minutos hacia el norte hasta Josefov y recorre el circuito del Museo Judío empezando por la sinagoga Pinkas, después el viejo cementerio judío y la sinagoga española. Compra la entrada combinada en línea la noche anterior.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "lokal-dlouha",
              text: "Come en Lokal Dlouha: svickova o queso rebozado con una Pilsner Urquell tirada del tanque. Llega antes del ajetreo de las 13h o cuenta con una breve espera.",
              durationMin: 75,
            },
            {
              poiSlug: "klementinum",
              text: "Haz la visita reservada de la tarde al Klementinum para ver la sala de la biblioteca barroca y subir la torre astronómica, con vista sobre los tejados del casco antiguo.",
              durationMin: 60,
            },
            {
              text: "Pasea por las callejuelas entre el Klementinum y la Torre de la Pólvora: Celetna, el patio Ungelt y las arcadas alrededor del Teatro de los Estados. Sin entradas, sin plan, es la mejor hora gratuita del casco antiguo.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "wenceslas-square",
              text: "Cruza la plaza de Wenceslao al caer el día para ver la fachada del Museo Nacional y el memorial de 1989, en simple paso más que en parada. Pide un Bolt si necesitas un trayecto más tarde; no pares nunca un taxi aquí.",
              durationMin: 30,
            },
            {
              poiSlug: "charles-bridge",
              text: "Termina en el Puente de Carlos después de las 21h, cuando la multitud se dispersa y el castillo está iluminado. Es la foto por la que has venido, y a esta hora puedes de verdad detenerte a hacerla.",
              durationMin: 45,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Colina del castillo y Mala Strana",
          morning: [
            {
              poiSlug: "prague-castle",
              text: "Ponte en las puertas del Castillo de Praga para la apertura de las 9h con una entrada de circuito reservada en línea y haz el Callejón del Oro y el antiguo palacio real antes de la oleada de grupos de las 10h.",
              durationMin: 120,
            },
            {
              poiSlug: "st-vitus-cathedral",
              text: "Dentro del recinto, dedica una visita de verdad a la Catedral de San Vito con la entrada de pago de la nave y encuentra la vidriera de Mucha en la tercera capilla a la izquierda.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "strahov-library",
              text: "Sube 15 minutos a pie hasta la biblioteca del monasterio de Strahov para las dos salas barrocas, y luego disfruta de la vista gratuita desde la terraza en la parte baja del monasterio, que enmarca el castillo y toda la orilla este.",
              durationMin: 75,
            },
            {
              poiSlug: "petrin-hill",
              text: "Baja a través de los huertos de Petrin y, si las piernas aguantan, sube los 299 escalones de la torre mirador para la única vista del perfil urbano que incluye el propio castillo.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "lennon-wall",
              text: "Baja a través de Mala Strana pasando por el muro de Lennon y la isla de Kampa mientras los excursionistas se marchan. El barrio está en su mejor momento a esta hora.",
              durationMin: 45,
            },
            {
              text: "Cena en Mala Strana en un restaurante de bodega tradicional apartado de la calle Nerudova, lejos de los menús turísticos junto al puente. Platos con cerveza: cuenta con 300 a 450 CZK por persona, no el doble.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
    {
      citySlug: "prague",
      days: 3,
      summary:
        "Tres días es la duración justa para Praga: suficiente para todos los grandes monumentos a un ritmo humano, más una tarde que pertenece a la ciudad y no a la lista de tareas. Dos días te obligan a encadenar castillo y casco antiguo a la carrera; el tercer día añade Vysehrad, la cervecería al aire libre de Letna y el tiempo de sentarse en un pub sin mirar la hora. Alójate en Mala Strana, en el lado del castillo del río. Cuesta un poco más que los barrios del este, pero te despiertas junto a los monumentos a los que todos los demás se desplazan, y el barrio se vuelve tranquilo y precioso después de las 18h. El plan en resumen: día uno para el casco antiguo y Josefov, día dos para el castillo, Strahov y Petrin, día tres para Vysehrad, los muelles y Letna. Reserva tres cosas en línea antes de llegar: el circuito del castillo, la entrada del Museo Judío y una plaza de visita al Klementinum. Todo lo demás en Praga premia el llegar temprano más que el suplemento pagado.",
      stayNeighborhoodSlug: "mala-strana",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Casco antiguo y barrio judío",
          morning: [
            {
              poiSlug: "charles-bridge",
              text: "Desde tu base en Mala Strana, cruza el Puente de Carlos antes de las 8h cuando está casi vacío; es el mejor truco de timing de Praga y no cuesta nada.",
              durationMin: 30,
            },
            {
              poiSlug: "old-town-square",
              text: "Continúa hacia la plaza de la Ciudad Vieja para el reloj astronómico y la subida a la torre del ayuntamiento viejo, a rematar antes de las 10h para adelantarte a la marea.",
              durationMin: 75,
            },
            {
              poiSlug: "josefov",
              text: "Pasa el final de la mañana en Josefov con el circuito del Museo Judío: la sinagoga Pinkas primero, luego el viejo cementerio judío antes de que el camino se sature, y para terminar la sinagoga española.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "lokal-dlouha",
              text: "Come en Lokal Dlouha por la Pilsner de tanque de referencia y un plato de svickova. Guarda tu papel de cuenta de cervezas, lo saldas al final.",
              durationMin: 75,
            },
            {
              poiSlug: "klementinum",
              text: "Haz tu visita reservada al Klementinum para la biblioteca barroca y la vista de la torre astronómica, y luego pasea por las callejuelas hacia el patio Ungelt.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "wenceslas-square",
              text: "Recorre la plaza de Wenceslao en toda su longitud para el Museo Nacional y el memorial de la Revolución de Terciopelo. Evita las casas de cambio y los taxis de calle, sin excepción.",
              durationMin: 30,
            },
            {
              text: "Vuelve a cruzar el río para cenar en Mala Strana; las calles detrás de la isla de Kampa esconden restaurantes tranquilos donde una cena checa completa con cerveza se queda por debajo de los 500 CZK.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Castillo, Strahov y Petrin",
          morning: [
            {
              poiSlug: "prague-castle",
              text: "Sube a pie desde Mala Strana y entra en el Castillo de Praga a las 9h en punto con tu entrada de circuito en línea, cubriendo el Callejón del Oro y el antiguo palacio real antes que los grupos.",
              durationMin: 120,
            },
            {
              poiSlug: "st-vitus-cathedral",
              text: "Visita la Catedral de San Vito con la entrada de pago completa y ve directo a la vidriera de Mucha antes de que se llene la nave.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "strahov-library",
              text: "Come en una cervecería de monasterio cerca de Strahov, luego visita las salas teológica y filosófica de la biblioteca de Strahov y disfruta del mirador gratuito de la terraza en la parte baja.",
              durationMin: 120,
            },
            {
              poiSlug: "petrin-hill",
              text: "Sigue la cresta hasta la colina de Petrin a través de los huertos y sube la torre mirador si la cola del funicular de abajo parece larga; la vista de la torre bate a todas las torres del castillo, porque el castillo está dentro.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "lennon-wall",
              text: "Baja hacia el muro de Lennon y la isla de Kampa para el paseo de la hora dorada, cuando Mala Strana se vacía.",
              durationMin: 45,
            },
            {
              text: "Cena en un pub de Mala Strana con jardín, y luego camina hasta el muelle frente al Teatro Nacional para ver el castillo iluminado reflejado en el Moldava.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Vysehrad, el río y Letna",
          morning: [
            {
              poiSlug: "vysehrad",
              text: "Toma la línea C del metro hasta Vysehrad y recorre las murallas de la fortaleza en sentido antihorario para las vistas del río, luego visita el cementerio donde reposan Dvorak y Mucha. El recinto es gratuito.",
              durationMin: 120,
            },
            {
              text: "Sal de Vysehrad bajando frente a las casas cubistas del muelle Rasinovo nabrezi, un rodeo arquitectónico de cinco minutos que casi nadie hace.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "naplavka",
              text: "Sigue el río hacia el norte a lo largo de Naplavka; el sábado, el mercado de productores funciona hasta las 14h, los otros días los cafés flotantes van bien para una comida sin prisa sobre el agua.",
              durationMin: 105,
            },
            {
              text: "Tranvía o paseo hacia la orilla del casco antiguo y elige un museo que hayas saltado: el Museo de Artes Decorativas o el Museo Alfons Mucha caben ambos en 90 minutos.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "letna-park",
              text: "Sube a la cervecería al aire libre del parque Letna una hora antes del atardecer, compra una cerveza de 60 CZK en el quiosco y coge un banco por encima de los puentes. Es la mejor tarde barata de Praga.",
              durationMin: 120,
            },
            {
              text: "Termina con una cena en Holesovice, muy cerca, o de vuelta al otro lado del puente en el casco antiguo, según lo que te retenga el atardecer.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
    {
      citySlug: "prague",
      days: 4,
      summary:
        "Cuatro días es más de lo que hace falta para los monumentos de Praga, y ese es justo el punto: el cuarto día transforma una carrera de monumentos en un viaje de verdad. Los días uno a tres cubren el casco antiguo, Josefov, el barrio del castillo y Vysehrad a un ritmo relajado; el día cuatro es tuyo, ya sea para una jornada local en los barrios o para una excursión a Kutna Hora, su capilla de huesos y su catedral, a una hora en tren. Con tanto tiempo, evita el centro y alójate en Vinohrady. Está a 10 minutos de la plaza de la Ciudad Vieja en metro, un 20 a 30 por ciento más barato a habitación equivalente, y sus cafeterías y cervecerías al aire libre son la razón de ser del cuarto día. La lógica de una orilla por día sigue aplicándose: mantén juntos el castillo, Strahov y Petrin, mantén juntos el casco antiguo y Josefov, y no zigzaguees a través del Moldava. Reserva con antelación el circuito del castillo, el Museo Judío y el Klementinum. Si dudabas entre tres y cuatro días, el cuarto es el que recordarás.",
      stayNeighborhoodSlug: "vinohrady",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Casco antiguo y barrio judío",
          morning: [
            {
              poiSlug: "old-town-square",
              text: "Metro de Vinohrady a Mustek para estar en la plaza de la Ciudad Vieja a las 8h30, para el reloj astronómico y la torre del ayuntamiento viejo antes de la llegada de los grupos.",
              durationMin: 90,
            },
            {
              poiSlug: "josefov",
              text: "Haz el circuito del Museo Judío en Josefov empezando por la sinagoga Pinkas a la apertura, luego el viejo cementerio judío y la sinagoga española con tu entrada reservada.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "lokal-dlouha",
              text: "Come en Lokal Dlouha: Pilsner Urquell de tanque y clásicos checos a precios honestos, a cinco minutos de Josefov.",
              durationMin: 75,
            },
            {
              poiSlug: "klementinum",
              text: "Haz una visita reservada al Klementinum para la sala de la biblioteca barroca y el panorama de la torre astronómica sobre el casco antiguo.",
              durationMin: 60,
            },
            {
              text: "Pasa el resto de la tarde en las callejuelas: patio Ungelt, calle Celetna y Torre de la Pólvora, todo gratuito y mejor sin itinerario.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "charles-bridge",
              text: "Adéntrate en el Puente de Carlos después de las 21h para la vista del castillo iluminado, una vez que la multitud del día se ha marchado.",
              durationMin: 45,
            },
            {
              text: "Vuelve en metro a Vinohrady y toma una última copa en un bar de vinos alrededor de Namesti Miru; el barrio sirve vinos de Moravia imposibles de encontrar en el centro.",
              durationMin: 60,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Castillo, Strahov y Petrin",
          morning: [
            {
              poiSlug: "prague-castle",
              text: "El tranvía 22 desde Vinohrady va directo al barrio del castillo; entra en el Castillo de Praga a las 9h con tu entrada en línea y despacha el Callejón del Oro y el antiguo palacio real temprano.",
              durationMin: 120,
            },
            {
              poiSlug: "st-vitus-cathedral",
              text: "Visita la Catedral de San Vito con la entrada completa de la nave y busca la vidriera de Mucha antes de que se llenen los pasillos.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "strahov-library",
              text: "Sube a la biblioteca del monasterio de Strahov para las dos salas barrocas, luego demórate en la terraza gratuita de abajo para la vista de referencia sobre el castillo y la ciudad.",
              durationMin: 90,
            },
            {
              poiSlug: "petrin-hill",
              text: "Cruza los huertos hasta la colina de Petrin y sube la torre mirador, o baja en funicular hacia Ujezd si el día ha sido largo.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "lennon-wall",
              text: "Recorre Mala Strana al caer el día vía el muro de Lennon y la isla de Kampa, la mejor hora del barrio.",
              durationMin: 45,
            },
            {
              text: "Quédate a cenar en un restaurante de bodega de Mala Strana, y luego da una última vuelta frente a la iglesia de San Nicolás iluminada antes del tranvía de vuelta.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Vysehrad, el río y Letna",
          morning: [
            {
              poiSlug: "vysehrad",
              text: "Metro hasta Vysehrad y recorre gratis las murallas de la fortaleza para el mejor panorama sobre el río de la ciudad, más el cementerio que alberga a Dvorak y Mucha.",
              durationMin: 120,
            },
            {
              text: "Baja frente a las casas cubistas hacia el muelle; el rodeo suma diez minutos y una arquitectura única en Praga.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "naplavka",
              text: "Sigue Naplavka hacia el norte junto al agua; el sábado trae el mercado de productores hasta las 14h, los otros días los cafés flotantes amarrados se encargan de una comida larga.",
              durationMin: 105,
            },
            {
              poiSlug: "wenceslas-square",
              text: "Corta a través de la Ciudad Nueva hasta la plaza de Wenceslao para la fachada del Museo Nacional y el memorial de 1989, un paseo de 30 minutos, y luego explora los pasajes de Lucerna y su estatua de caballo al revés.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "letna-park",
              text: "Termina el día en la cervecería al aire libre del parque Letna por encima del río: cervezas de 60 CZK, plátanos de sombra y la vista del atardecer sobre todos los puentes a la vez.",
              durationMin: 120,
            },
            {
              text: "Cena en Holesovice al pie del parque o de vuelta en Vinohrady, ambos a un corto trayecto en tranvía.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Jornada local en Vinohrady o excursión a Kutna Hora",
          morning: [
            {
              text: "Opción A: duerme hasta tarde, luego una ronda de cafeterías de Vinohrady alrededor de Namesti Miru y de la plaza Jiriho z Podebrad, donde el mercado de productores funciona casi todas las mañanas de entre semana. Opción B: toma el tren directo desde la estación central hacia Kutna Hora, alrededor de una hora, para el osario de Sedlec; compra la entrada combinada de osario y catedral en el centro de información para evitar la cola in situ.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              text: "La opción A continúa con el parque Riegrovy Sady y una comida sin prisa en un bistró de Vinohrady, luego un recorrido por las fachadas modernistas del barrio a lo largo de la calle Manesova. Opción B: camina de Sedlec a la ciudad vieja de Kutna Hora para la catedral de Santa Bárbara y las callejuelas mineras medievales antes del tren de vuelta de última hora de la tarde.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              text: "En cualquier caso, termina en la cervecería al aire libre de Riegrovy Sady en Vinohrady, el equivalente local de Letna, con un césped que mira a la silueta del castillo al atardecer.",
              durationMin: 120,
            },
            {
              text: "Última cena en un restaurante checo moderno de Vinohrady o Karlin; los dos barrios reinventan el pato y los knedliky con finura, a mitad de precio que el casco antiguo.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
  ],
};

export default pragueEs;
