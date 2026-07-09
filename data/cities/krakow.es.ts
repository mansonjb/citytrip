import type { CityData } from "../types";

const krakowEs: CityData = {
  city: {
    slug: "krakow",
    name: "Cracovia",
    country: "Polonia",
    countrySlug: "poland",
    lat: 50.0647,
    lng: 19.945,
    tier: 3,
    idealDays: 2,
    durations: [2, 3],
    airportCode: "KRK",
    airportToCenter:
      "El tren del aeropuerto de Cracovia a la estación principal de Krakow Glowny tarda unos 20 minutos y cuesta alrededor de 17 PLN, unos 4 EUR, con salidas cada 30 minutos. Los autobuses urbanos 208 y 252 cubren el mismo trayecto, más despacio, por un billete de transporte estándar si los horarios del tren no te convienen.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 12],
    avoidMonths: [1],
    monthlyNotes: {
      1: "El mes más frío, con máximas cercanas a 1C, mínimas muy por debajo de cero y días grises y cortos; el mercado navideño de la Rynek Glowny suele cerrar en los primeros días de enero. Los lugares de interés están tranquilos y las tarifas hoteleras tocan su mínimo anual, pero prepárate para un invierno de verdad y espera nieve en el suelo.",
      2: "Todavía pleno invierno, con máximas en torno a 3C y heladas frecuentes, por lo que es una época barata y sin multitudes para recorrer los sitios cubiertos y el Wawel. Los días se alargan un poco, y los bares lácteos y las tabernas de sótano mantienen el ambiente cuando hace demasiado frío para quedarse fuera.",
      3: "Las máximas suben hacia 9C y la ciudad se deshiela; los mercados de Pascua aparecen en la Rynek Glowny en la segunda mitad del mes cuando la Pascua cae pronto. Las multitudes siguen ligeras y los precios se mantienen por debajo del pico primaveral, una buena ventana para un viaje con buena relación calidad-precio.",
      4: "Primavera de verdad en torno a 14C, con la floración en el parque Planty y las primeras mesas de café al aire libre en la plaza. Los fines de semana de Pascua y el puente de mayo se llenan, así que reserva con mucha antelación las salas de gala del Wawel y cualquier reserva para Auschwitz-Birkenau.",
      5: "Uno de los mejores meses, con máximas cercanas a 19C, largas tardes de luz y las cervecerías al aire libre llenándose en Kazimierz. Es el pico de la temporada media, así que los precios del alojamiento se afianzan y la plaza se anima; reserva pronto las excursiones a Auschwitz y Wieliczka.",
      6: "Cálido, en torno a 22C, con los días más largos del año y dos eventos ancla: la fiesta del solsticio de Wianki junto al Vístula bajo el Wawel alrededor del solsticio, y el inicio del Festival de Cultura Judía en Kazimierz en la última semana. Reserva pronto alojamiento en Kazimierz para las fechas del festival.",
      7: "Pleno verano, con máximas en torno a 24C, tardes cálidas y los conciertos del Festival de Cultura Judía desbordándose por Kazimierz en los primeros días del mes. Es la temporada más concurrida y más cara; haz el Wawel y la plaza temprano y guarda las tardes para el sombreado parque Planty y los bares junto al río.",
      8: "El mismo calor veraniego cercano a 24C y la mayor afluencia turística del año, con tormentas ocasionales a última hora de la tarde. Las cervecerías al aire libre y los bulevares del Vístula absorben bien las multitudes, pero espera colas para la mina de sal y la fábrica de Schindler durante todo el día, así que reserva con antelación.",
      9: "Máximas en torno a 19C, multitudes que se aclaran tras la primera semana y un tiempo cómodo para caminar, lo que lo convierte en la alternativa inteligente al verano. Los precios se relajan y la luz se vuelve dorada sobre la plaza; las excursiones son más fáciles de reservar a última hora.",
      10: "Otoño fresco en torno a 13C, con color intenso en el parque Planty y a lo largo del río; la afluencia turística cae notablemente pasada la mitad del mes y las tarifas hoteleras la siguen. Lleva una capa de abrigo para las tardes, que se enfrían muy rápido en cuanto se pone el sol.",
      11: "Gris, frío y tranquilo en torno a 7C hasta que el mercado navideño abre en la Rynek Glowny en la última semana, lo que da la vuelta por completo al ambiente. Finales de noviembre es un buen punto medio: los puestos del mercado y el vino caliente sin la densidad de los fines de semana de diciembre.",
      12: "El mercado navideño de la Rynek Glowny se celebra todo el mes con queso oscypek a la brasa, vino caliente y una enorme tradición de belenes, y atrae grandes multitudes los fines de semana. Espera mínimas bajo cero, posible nieve y precios hoteleros de diciembre por encima de la norma invernal, así que reserva pronto.",
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
    tagline: "Núcleo medieval intacto, precios de bar lácteo, historia densa muy cerca.",
    heroIntro:
      "Cracovia conservó la mayor plaza medieval de Europa, un castillo real sobre una colina y todo un barrio judío que sobrevivió a la guerra, todo dentro de un anillo que se cruza a pie en veinte minutos. Es uno de los city breaks clásicos más baratos del continente, y los bares lácteos todavía te dan de comer por unos pocos euros. Dos días bastan para hacer con calma el casco antiguo, el Wawel y Kazimierz; un tercer día se reserva para las grandes excursiones que hay que reservar con antelación, Auschwitz-Birkenau o la mina de sal de Wieliczka.",
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
      name: "Stare Miasto (Casco Antiguo)",
      lat: 50.0616,
      lng: 19.937,
      bestFor: ["first-time", "romantic"],
      vibe: "El núcleo medieval dentro del anillo verde del parque Planty, construido en torno a la Rynek Glowny, la mayor plaza de mercado de Europa. De día es la parte más animada de la ciudad, todo coches de caballos, mesas de café y el toque de trompeta de la basílica de Santa María a cada hora; a última hora de la noche los excursionistas se aclaran y las tabernas de sótano toman el relevo. Todo lo que busca quien viene por primera vez cabe en un radio de diez minutos a pie.",
      pros: [
        "La Rynek Glowny, la Lonja de los Paños y el Wawel, todos a poca distancia a pie",
        "La mayor oferta de hoteles y apartamentos de Cracovia",
        "No hace falta transporte para un viaje de dos días",
      ],
      cons: [
        "Los restaurantes en plena plaza son trampas para turistas carísimas",
        "Grupos de despedida de soltero y ruido de calle los fines de semana por la noche",
        "Pagas un sobreprecio por la ubicación frente a Kazimierz o Kleparz",
      ],
    },
    {
      slug: "kazimierz",
      citySlug: "krakow",
      name: "Kazimierz",
      lat: 50.0515,
      lng: 19.944,
      bestFor: ["local", "nightlife", "romantic", "budget"],
      vibe: "El antiguo barrio judío al sur del centro, hoy el distrito con más ambiente de la ciudad, con sinagogas conservadas, bares de patio y la mejor comida callejera de Cracovia. Va de las callejuelas tranquilas y cargadas de memoria en torno a las sinagogas a la abarrotada escena de bares del Plac Nowy tras el anochecer. Alojarte aquí te sitúa entre el casco antiguo y Podgorze, con la fábrica de Schindler a un corto paseo al otro lado del río.",
      pros: [
        "Los mejores bares, cafés y comida callejera de la ciudad, a precios locales",
        "A distancia a pie tanto del casco antiguo como de la fábrica de Schindler",
        "Habitaciones más baratas que el casco antiguo con la misma sensación de centralidad",
      ],
      cons: [
        "El Plac Nowy y sus calles adyacentes se ponen ruidosos hasta tarde los fines de semana",
        "Un paseo de 15 minutos hasta la Rynek Glowny en vez de estar a pocos pasos",
        "Menos hoteles de marca conocida, más apartamentos y pequeñas casas de huéspedes",
      ],
    },
    {
      slug: "podgorze",
      citySlug: "krakow",
      name: "Podgorze",
      lat: 50.0446,
      lng: 19.9565,
      bestFor: ["local", "budget", "family"],
      vibe: "El distrito al otro lado del Vístula que albergó el gueto durante la guerra, hoy un barrio residencial tranquilo con la historia más densa de Cracovia y un aire pausado y sin prisas. La fábrica de Schindler, la plaza de los Héroes del Gueto con su monumento de las sillas vacías y el museo de arte moderno MOCAK están todos aquí. Es un corto paseo por la pasarela desde Kazimierz, pero un mundo mucho más tranquilo de noche.",
      pros: [
        "La fábrica de Schindler y los monumentos del gueto en tu puerta",
        "Calles tranquilas, genuinamente locales, y precios más bajos que el centro",
        "Pasarela directa a Kazimierz para las salidas nocturnas",
      ],
      cons: [
        "Pocos restaurantes y bares comparado con Kazimierz al otro lado del río",
        "De 20 a 25 minutos a pie hasta la Rynek Glowny",
        "Ambiente sombrío en algunas partes; esto es suelo de memoria, no de vida nocturna",
      ],
    },
    {
      slug: "kleparz",
      citySlug: "krakow",
      name: "Kleparz",
      lat: 50.0685,
      lng: 19.9415,
      bestFor: ["budget", "local", "family"],
      vibe: "Un distrito de trabajo justo al norte de la muralla del casco antiguo, construido en torno al mercado cubierto Stary Kleparz, donde los vecinos compran productos frescos desde hace siglos. Es más sencillo que el núcleo turístico, pero está a cinco minutos de la Barbacana y justo al lado de las estaciones principales de tren y autobús. Aquí es donde cambias el aspecto de postal por precios más bajos y transporte fácil.",
      pros: [
        "Las habitaciones más baratas cerca del centro, a cinco minutos del casco antiguo",
        "El mercado Stary Kleparz para comida fresca barata y aperitivos",
        "A pocos pasos de Krakow Glowny para el tren del aeropuerto y las excursiones",
      ],
      cons: [
        "Poco encanto en el propio distrito; aquí se duerme, no se remolonea",
        "Las calles concurridas y la estación traen tráfico y ruido",
        "Escasa oferta de cena por la noche comparada con Kazimierz o la plaza",
      ],
    },
    {
      slug: "stradom",
      citySlug: "krakow",
      name: "Stradom",
      lat: 50.0555,
      lng: 19.9415,
      bestFor: ["first-time", "romantic", "family"],
      vibe: "La estrecha franja entre el casco antiguo y Kazimierz, bajo el flanco este de la colina del Wawel. Es céntrico sin el ruido de la plaza, a cinco minutos a pie tanto de la Rynek Glowny como de los bares de Kazimierz, y el más cercano de todos al castillo. Una base sensata para quien quiere el casco antiguo y Kazimierz a partes iguales.",
      pros: [
        "A medio camino entre la Rynek Glowny, el Wawel y Kazimierz, todo a pie",
        "Noches más tranquilas que la plaza o el Plac Nowy",
        "La zona residencial más cercana al castillo del Wawel",
      ],
      cons: [
        "Una selección de hoteles más reducida que el casco antiguo propiamente dicho",
        "Algunas vías de paso concurridas cruzan el distrito",
        "Menos vida propia; hay que salir a comer y a los bares",
      ],
    },
  ],

  pois: [
    {
      slug: "rynek-glowny",
      citySlug: "krakow",
      name: "Rynek Glowny y Lonja de los Paños (Sukiennice)",
      lat: 50.0617,
      lng: 19.9373,
      kind: "sight",
      needsBooking: false,
      tip: "La plaza y los puestos del mercado de la Lonja de los Paños en la planta baja son gratuitos para recorrer; mira el ámbar y la artesanía folclórica pero regatea, y evita los kioscos de cambio alrededor de la plaza, con tasas pésimas. El museo subterráneo del Rynek bajo la plaza es el plato fuerte de pago, y cuelga el cartel de completo las tardes de mucha afluencia, así que reserva un turno de mañana en línea.",
    },
    {
      slug: "st-marys-basilica",
      citySlug: "krakow",
      name: "Basílica de Santa María",
      lat: 50.0617,
      lng: 19.9394,
      kind: "sight",
      needsBooking: true,
      tip: "Hay dos entradas distintas con turnos limitados: una para la iglesia y ver el retablo de madera de Veit Stoss, que abre a diario hacia las 11:50, y una entrada con hora aparte para subir a la torre. Compra ambas en línea con antelación, y ponte en la plaza a cualquier hora en punto para escuchar el toque de trompeta del hejnal tocado en directo desde la torre e interrumpirse a media nota, un guiño a un trompetista medieval abatido por una flecha.",
    },
    {
      slug: "wawel-castle",
      citySlug: "krakow",
      name: "Castillo Real de Wawel",
      lat: 50.0544,
      lng: 19.9356,
      kind: "sight",
      needsBooking: true,
      tip: "El patio del castillo y los jardines de la colina son de entrada gratuita, pero las Salas de Gala y los Apartamentos Reales funcionan con entradas con hora y un cupo diario que se agota pronto en verano, así que reserva en línea un turno cercano a la apertura de las 9:30. Un número limitado de entradas gratuitas para algunos recorridos se libera un día de la semana, normalmente el lunes, y vuelan en minutos.",
    },
    {
      slug: "wawel-cathedral",
      citySlug: "krakow",
      name: "Catedral de Wawel",
      lat: 50.0543,
      lng: 19.9351,
      kind: "sight",
      needsBooking: false,
      tip: "La entrada a la nave de la catedral es gratuita, pero las tumbas reales, la subida a la torre de la campana Segismundo y la cripta requieren una entrada combinada que se compra en la casa frente a la entrada, al otro lado de la plaza, y no en la puerta. Sube temprano la estrecha escalera de madera hasta la altura de la campana Segismundo, antes de que la escalera de fila india se congestione a media mañana.",
    },
    {
      slug: "kazimierz-quarter",
      citySlug: "krakow",
      name: "Barrio judío de Kazimierz",
      lat: 50.0515,
      lng: 19.9445,
      kind: "sight",
      needsBooking: false,
      tip: "Recórrelo por la mañana para ver las sinagogas, el cementerio Remuh y la calle Szeroka casi sin nadie, y vuelve tras el anochecer para la escena de bares del Plac Nowy. Los zapiekanki redondos, esas baguettes-pizza de la rotonda Okraglak en el Plac Nowy, son el clásico tentempié barato de madrugada por unos pocos eslotis.",
    },
    {
      slug: "schindlers-factory",
      citySlug: "krakow",
      name: "Museo de la Fábrica de Schindler",
      lat: 50.0475,
      lng: 19.9613,
      kind: "museum",
      needsBooking: true,
      tip: "Es un museo de la Cracovia ocupada durante la guerra dentro de la auténtica fábrica de esmaltados de Oskar Schindler, no solo sobre la película, y cuelga el cartel de completo con días de antelación en verano, así que reserva una entrada con hora en línea. Ve al primer turno del día; las estrechas salas inmersivas forman cuellos de botella serios en cuanto llegan los grupos, y reserva dos horas completas.",
    },
    {
      slug: "auschwitz-birkenau",
      citySlug: "krakow",
      name: "Memorial de Auschwitz-Birkenau",
      lat: 50.0343,
      lng: 19.1789,
      kind: "sight",
      needsBooking: true,
      tip: "La entrada es gratuita pero DEBES reservar una entrada con hora en línea, a menudo con semanas de antelación en temporada alta, y entre las 10 y las 15 aproximadamente solo puedes entrar con un guía autorizado. Está a alrededor de 1,5 horas de coche en cada sentido cerca de Oswiecim, así que bloquea al menos media jornada y, de forma realista, la mayor parte de un día; el recinto abarca dos campos distintos, Auschwitz I y Birkenau, unidos por un autobús lanzadera.",
    },
    {
      slug: "wieliczka-salt-mine",
      citySlug: "krakow",
      name: "Mina de sal de Wieliczka",
      lat: 49.9832,
      lng: 20.0546,
      kind: "experience",
      needsBooking: true,
      tip: "Solo se puede bajar en visita guiada, así que reserva la Ruta Turística en línea con antelación, sobre todo en verano cuando los turnos en inglés se llenan rápido. Es un recorrido de dos horas con unos 380 escalones de bajada al inicio y sin posibilidad de salir antes, así que no es para quien no pueda con las escaleras; la temperatura subterránea se mantiene en torno a 14C todo el año, lleva una capa.",
    },
    {
      slug: "planty-park",
      citySlug: "krakow",
      name: "Anillo del parque Planty",
      lat: 50.0625,
      lng: 19.9355,
      kind: "park",
      needsBooking: false,
      tip: "Este cinturón verde rodea todo el casco antiguo sobre el trazado de las murallas demolidas, un anillo llano de cuatro kilómetros que se recorre a pie en menos de una hora. Úsalo como atajo sombreado entre los lugares de interés en verano más que como destino; el tramo junto a la Barbacana y el barrio universitario es el más bonito.",
    },
    {
      slug: "barbican-florian-gate",
      citySlug: "krakow",
      name: "Barbacana y Puerta de San Florián",
      lat: 50.0655,
      lng: 19.9415,
      kind: "sight",
      needsBooking: false,
      tip: "La Barbacana y las murallas son gratuitas para verlas desde el parque Planty; una entrada combinada barata te permite recorrer los tramos de muralla que se conservan y subir dentro de la Barbacana si te interesa el ángulo de la defensa medieval. La Puerta de San Florián se abre a la calle Florianska, la clásica marcha de aproximación en bajada hacia la Rynek Glowny, y los pintores locales cuelgan sus lienzos a lo largo de la muralla aquí.",
    },
    {
      slug: "collegium-maius",
      citySlug: "krakow",
      name: "Collegium Maius (Universidad Jagellónica)",
      lat: 50.0614,
      lng: 19.9327,
      kind: "museum",
      needsBooking: true,
      tip: "El edificio más antiguo de la universidad más vieja de Polonia, donde estudió Copérnico, solo se visita en visita guiada, y los turnos populares se agotan, así que reserva con antelación y pide una visita en inglés. El patio gótico con arcadas es gratuito para entrar y su reloj astronómico repica y hace desfilar figuras varias veces al día, vale la pena calcular la hora.",
    },
    {
      slug: "milk-bar-tomasza",
      citySlug: "krakow",
      name: "Bar Mleczny (bar lácteo)",
      lat: 50.0625,
      lng: 19.9405,
      kind: "food",
      needsBooking: false,
      tip: "Un bar mleczny es una cantina subvencionada que sirve pierogi, sopas y filetes por unos pocos euros, una auténtica rebanada de la Polonia cotidiana; busca uno como el Bar Mleczny Tomasza cerca del casco antiguo. Lee la carta en polaco sobre el mostrador, paga primero en la caja y luego recoge tu plato; el efectivo es lo más seguro y la rotación es rápida a la hora de comer.",
    },
    {
      slug: "ghetto-heroes-square",
      citySlug: "krakow",
      name: "Podgorze y plaza de los Héroes del Gueto",
      lat: 50.0475,
      lng: 19.9527,
      kind: "sight",
      needsBooking: false,
      tip: "La plaza al otro lado del río, en Podgorze, alberga el monumento de las 70 sillas de bronce vacías que marca el gueto de la guerra, y la Farmacia del Águila, en su borde, es un pequeño y conmovedor museo del gueto por una cantidad módica. Combínala con la fábrica de Schindler, a unos minutos, ya que ambas están del mismo lado del Vístula.",
    },
    {
      slug: "kosciuszko-mound",
      citySlug: "krakow",
      name: "Mirador del túmulo de Kosciuszko",
      lat: 50.0547,
      lng: 19.8917,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Este túmulo artificial al oeste del centro ofrece la mejor panorámica completa sobre Cracovia y, en días despejados, sobre los montes Tatra; una entrada módica cubre la subida y el pequeño museo del fuerte que lo rodea. Es un trayecto de unos 30 minutos en el autobús 100 o en tranvía más una corta caminata, así que resérvalo para una tarde despejada en vez de una gris.",
    },
  ],

  itineraries: [
    {
      citySlug: "krakow",
      days: 2,
      summary:
        "Dos días bastan para el núcleo de Cracovia si te alojas en el centro y empiezas temprano, y cubren el casco antiguo, el Wawel y Kazimierz sin sensación de agobio. Todo el centro cabe dentro del anillo del parque Planty, de modo que la Rynek Glowny, Santa María, la Lonja de los Paños y el Wawel están todos a menos de 15 minutos a pie unos de otros, y Kazimierz queda a un corto paseo al sur. Instálate en Stare Miasto para que las dos mañanas arranquen a pie. El plan que funciona: un día para el casco antiguo y la colina del Wawel, y un día para Kazimierz, la fábrica de Schindler y Podgorze al otro lado del río. Reserva dos cosas en línea antes de llegar: las Salas de Gala del Wawel y una entrada con hora para la fábrica de Schindler, ya que ambas cuelgan el cartel de completo en temporada. Lo que dos días no te dan son las grandes excursiones que hay que reservar con antelación: Auschwitz-Birkenau y la mina de sal de Wieliczka requieren cada una al menos media jornada, que es precisamente para lo que sirve un tercer día. Los precios son bajos, así que come bien; una comida en un bar lácteo cuesta unos pocos euros.",
      stayNeighborhoodSlug: "stare-miasto",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Casco antiguo y colina del Wawel",
          morning: [
            {
              poiSlug: "rynek-glowny",
              text: "Empieza en la Rynek Glowny hacia las 8:30 mientras la plaza está tranquila, recorre los puestos de la Lonja de los Paños en la planta baja y luego baja al museo subterráneo del Rynek bajo la plaza en un turno de mañana reservado con antelación.",
              durationMin: 105,
            },
            {
              poiSlug: "st-marys-basilica",
              text: "Entra en la basílica de Santa María para ver el retablo de madera de Veit Stoss, calculando el desvelamiento diario hacia las 11:50, y quédate en la plaza en la hora en punto para escuchar el toque de trompeta del hejnal en directo interrumpirse a media nota.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "milk-bar-tomasza",
              text: "Come en un bar lácteo como el Bar Mleczny Tomasza con pierogi y sopa por unos pocos euros. Paga primero en la caja, recoge en el mostrador y lleva efectivo.",
              durationMin: 45,
            },
            {
              poiSlug: "wawel-castle",
              text: "Baja hacia la colina del Wawel y recorre las Salas de Gala del Castillo Real con tu entrada reservada con antelación, y luego pasa un rato gratis en el patio con arcadas y a lo largo de las murallas sobre el Vístula.",
              durationMin: 120,
            },
            {
              poiSlug: "wawel-cathedral",
              text: "Justo al lado, visita la catedral de Wawel: la nave es gratuita, y una entrada combinada comprada en la casa de enfrente cubre las tumbas reales y la subida a la campana Segismundo para una vista sobre el río.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "barbican-florian-gate",
              text: "Sube de nuevo hacia el norte por la calle Florianska y cruza la Puerta de San Florián hasta la Barbacana, la clásica aproximación medieval a la inversa, con los pintores de la muralla instalados por el camino.",
              durationMin: 45,
            },
            {
              text: "Cena en el casco antiguo apartado de la plaza principal, en una calle lateral como Slawkowska o alrededor del Plac Szczepanski, donde una comida polaca completa con una cerveza sale muy por debajo de un precio de plaza turística.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Kazimierz, fábrica de Schindler y Podgorze",
          morning: [
            {
              poiSlug: "kazimierz-quarter",
              text: "Baja temprano a Kazimierz y haz el barrio judío antes de las multitudes: las sinagogas, el cementerio Remuh y la calle Szeroka, todo tranquilo por la mañana.",
              durationMin: 120,
            },
            {
              text: "Coge un zapiekanka redondo en la rotonda Okraglak del Plac Nowy para una comida callejera barata, y luego corta hacia la pasarela del río en dirección a Podgorze.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "schindlers-factory",
              text: "Cruza a Podgorze para tu entrada con hora en la fábrica de Schindler, reservada con antelación en un turno matinal ideal, un museo de la Cracovia ocupada durante la guerra instalado en la auténtica fábrica de esmaltados de Oskar Schindler. Reserva dos horas completas.",
              durationMin: 120,
            },
            {
              poiSlug: "ghetto-heroes-square",
              text: "A unos minutos, ponte en la plaza de los Héroes del Gueto con sus 70 sillas de bronce vacías, y entra en el pequeño museo de la Farmacia del Águila, en su borde, para conocer la historia del gueto.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "planty-park",
              text: "Vuelve hacia el centro a lo largo del río y corta por el anillo del parque Planty mientras cae la luz, el cinturón verde llano sobre el trazado de las antiguas murallas.",
              durationMin: 30,
            },
            {
              text: "Termina con una cena y unas copas de vuelta en Kazimierz alrededor del Plac Nowy, la mejor escena de bares y patios de la ciudad, la más animada y divertida tras el anochecer.",
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
        "Tres días es la duración justa para Cracovia: dos días bastan para el compacto casco antiguo, el Wawel y Kazimierz a un ritmo humano, y el tercer día está pensado para una gran salida fuera de la ciudad. Ese tercer día es en realidad la razón para añadir una noche, porque las dos grandes excursiones exigen reserva con antelación y tiempo. Auschwitz-Birkenau es gratuito pero requiere una reserva con hora, a menudo con semanas de antelación, está a 1,5 horas de coche en cada sentido y ocupa la mayor parte de un día; la mina de sal de Wieliczka es solo en visita guiada, más cercana, y llena bien media jornada. Elige una para el tercer día y resérvala antes que nada. Alójate en Kazimierz para este viaje: cuesta menos que el casco antiguo, pone la mejor comida y los mejores bares en tu puerta, y está a distancia a pie tanto de la plaza como de la fábrica de Schindler. El esquema: casco antiguo y Wawel el primer día, Kazimierz y Podgorze el segundo, y tu excursión elegida el tercero. Reserva en línea con antelación las salas del Wawel, la fábrica de Schindler y tu excursión.",
      stayNeighborhoodSlug: "kazimierz",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Casco antiguo y colina del Wawel",
          morning: [
            {
              poiSlug: "rynek-glowny",
              text: "Desde Kazimierz, sube hacia el casco antiguo y empieza en la Rynek Glowny para las 8:30 con la plaza tranquila y la Lonja de los Paños, y luego entra en el museo subterráneo del Rynek en un turno de mañana reservado.",
              durationMin: 105,
            },
            {
              poiSlug: "st-marys-basilica",
              text: "Visita la basílica de Santa María para el retablo de Veit Stoss en torno a su desvelamiento de las 11:50, y calcula tu minuto en la plaza para el toque de trompeta del hejnal desde la torre en la hora en punto.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "milk-bar-tomasza",
              text: "Come en un bar lácteo con pierogi, un filete y sopa por unos pocos euros, pidiendo en la caja y recogiendo en el mostrador con efectivo.",
              durationMin: 45,
            },
            {
              poiSlug: "wawel-castle",
              text: "Camina hasta la colina del Wawel y recorre las Salas de Gala del Castillo Real con tu entrada con hora reservada con antelación, y luego demórate gratis en el patio y en las murallas junto al río.",
              durationMin: 120,
            },
            {
              poiSlug: "wawel-cathedral",
              text: "Termina en la colina en la catedral de Wawel, con la nave gratuita y una entrada combinada para las tumbas reales y la subida a la campana Segismundo sobre el Vístula.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "collegium-maius",
              text: "De vuelta en el casco antiguo, entra en el patio gótico gratuito del Collegium Maius, el edificio más antiguo de la Universidad Jagellónica donde estudió Copérnico, y pilla el repique del reloj astronómico si el momento cuadra.",
              durationMin: 45,
            },
            {
              text: "Baja de nuevo a pie hacia Kazimierz para cenar alrededor del Plac Nowy, donde los restaurantes de patio y los bares salen muy por debajo de los precios de la plaza del casco antiguo.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Kazimierz, fábrica de Schindler y Podgorze",
          morning: [
            {
              poiSlug: "kazimierz-quarter",
              text: "Te alojas aquí, así que empieza temprano a pie: las sinagogas de Kazimierz, el cementerio Remuh y la calle Szeroka están casi desiertos por la mañana antes de que lleguen los grupos.",
              durationMin: 120,
            },
            {
              text: "Coge un zapiekanka barato en la rotonda Okraglak del Plac Nowy, y luego cruza la pasarela sobre el Vístula hacia Podgorze.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "schindlers-factory",
              text: "Entra en la fábrica de Schindler con tu entrada con hora reservada con antelación para el museo inmersivo de la Cracovia ocupada durante la guerra; coge el turno más temprano posible para adelantarte a los cuellos de botella sala por sala, y reserva dos horas.",
              durationMin: 120,
            },
            {
              poiSlug: "ghetto-heroes-square",
              text: "Acércate a pie a la plaza de los Héroes del Gueto para el monumento de las 70 sillas vacías y el museo de la Farmacia del Águila, en su borde, ambos a unos minutos de la fábrica.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "planty-park",
              text: "Vuelve por el río y toma un tramo tranquilo del anillo del parque Planty al anochecer, el cinturón verde llano alrededor del casco antiguo sobre el trazado de las murallas demolidas.",
              durationMin: 30,
            },
            {
              text: "Cena y copas en Kazimierz, recorriendo los patios y las tabernas de sótano del Plac Nowy, la escena nocturna más animada de la ciudad.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Gran excursión: Auschwitz-Birkenau o mina de sal de Wieliczka",
          morning: [
            {
              poiSlug: "auschwitz-birkenau",
              text: "Opción A: sal temprano hacia el memorial de Auschwitz-Birkenau, a unas 1,5 horas de coche al oeste, con tu reserva con hora hecha con antelación; entre las 10 y las 15 solo entras con un guía autorizado, y verás tanto Auschwitz I como Birkenau mediante la lanzadera.",
              durationMin: 240,
            },
            {
              poiSlug: "wieliczka-salt-mine",
              text: "Opción B: dirígete a la mina de sal de Wieliczka, justo a las afueras de la ciudad, en una Ruta Turística guiada reservada con antelación, un recorrido subterráneo de dos horas con unos 380 escalones de bajada al inicio y un 14C constante, así que lleva una capa.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              text: "Opción A: la visita a Auschwitz-Birkenau y el trayecto llenan la mayor parte del día, así que vuelve a Cracovia por la tarde y deja el resto del día tranquilo y propicio para la reflexión.",
              durationMin: 180,
            },
            {
              text: "Opción B: de vuelta de Wieliczka a primera hora de la tarde, aprovecha el tiempo libre para todo lo que te saltaste, como el patio del Wawel, un tramo del parque Planty o los puestos de la Lonja de los Paños.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "kosciuszko-mound",
              text: "Si la tarde está despejada y elegiste la excursión más corta de Wieliczka, coge el autobús 100 hasta el túmulo de Kosciuszko para la mejor panorámica completa sobre Cracovia y, con buen tiempo, sobre los lejanos montes Tatra al atardecer.",
              durationMin: 90,
            },
            {
              text: "Última cena de vuelta en Kazimierz o en el casco antiguo; tras un día intenso, un restaurante tranquilo en sótano con pierogi y una cerveza polaca es la nota justa para terminar.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
  ],
};

export default krakowEs;
