import type { CityData } from "../types";

const warsawEs: CityData = {
  city: {
    slug: "warsaw",
    name: "Varsovia",
    country: "Polonia",
    countrySlug: "poland",
    lat: 52.2297,
    lng: 21.0122,
    tier: 2,
    idealDays: 2,
    durations: [2, 3],
    airportCode: "WAW",
    airportToCenter:
      "El aeropuerto Chopin de Varsovia queda a unos 8 km al sur del centro, así que los trayectos son rápidos y baratos. Los trenes S2 y S3 y el autobús urbano 175 salen de la terminal hacia el centro y el casco antiguo en unos 20 a 25 minutos por cerca de 5 PLN con un billete sencillo de ZTM, que cubre todo el transporte ZTM del trayecto. Un Uber o un taxi cuesta unos 40 a 60 PLN y tarda algo parecido fuera de las horas punta. Ten en cuenta que el aeropuerto low cost de Modlin, usado por algunas compañías de bajo coste, está a unos 40 km al norte de la ciudad y se llega con un autobús lanzadera específico, así que cuenta con tiempo extra si aterrizas ahí.",
    centerWalkable: true,
    bestMonths: [5, 6, 7, 9],
    avoidMonths: [1],
    monthlyNotes: {
      1: "El mes más frío, con máximas cercanas a 1C, mínimas muy por debajo de cero y días cortos y grises que a menudo traen nieve. Los sitios están tranquilos y las tarifas de hotel tocan su suelo anual, y los bares lácteos y los bares de sótano sostienen el ambiente cuando hace demasiado frío para quedarse fuera; prepárate para un invierno de verdad.",
      2: "Todavía pleno invierno, en torno a 2C, con heladas y nieve frecuentes, así que es un tramo barato y sin multitudes para los museos de interior y el Palacio de la Cultura. Los días se alargan un poco y los bares de vodka de Praga hacen una velada cálida; cuenta con los precios más bajos del año.",
      3: "Las máximas trepan hacia los 7C y la ciudad empieza a deshelarse, aunque todavía se dan nieves tempranas y golpes de frío. La afluencia sigue baja y las tarifas se sitúan por debajo del pico primaveral, una sólida ventana de valor si te vistes para un tiempo cambiante.",
      4: "Primavera de verdad, en torno a 14C, con la floración en el parque Lazienki y las primeras mesas de café al aire libre a lo largo de Nowy Swiat. Los fines de semana en torno a la Pascua se llenan, así que reserva antes tu franja del museo POLIN o del Museo del Alzamiento de Varsovia; los conciertos gratuitos de Chopin en Lazienki todavía no han comenzado.",
      5: "Uno de los mejores meses, con máximas cercanas a 20C y largas tardes de luz, y los conciertos gratuitos de piano de Chopin empiezan junto a su monumento en el parque Lazienki los domingos por la tarde hasta finales de septiembre. Es lo más alto de la temporada media, así que los precios se afianzan y los bulevares del Vístula se llenan al atardecer.",
      6: "Cálido, en torno a 23C, con los días más largos del año y las terrazas concurridas por todo Powisle y Praga. Los conciertos dominicales de Chopin en Lazienki continúan y la ribera cobra vida después del anochecer; reserva pronto las habitaciones de fin de semana, porque la ciudad está a pleno rendimiento.",
      7: "Pleno verano, con máximas en torno a 24C y tardes cálidas, aunque las tormentas continentales cruzan algunas tardes. Los conciertos de Chopin suenan cada domingo en Lazienki, los chiringuitos de la playa del Vístula se abarrotan, y este es el tramo más concurrido y más caro, así que haz los sitios al aire libre temprano.",
      8: "El mismo calor veraniego cercano a 24C, pero el ánimo cambia el 1 de agosto, cuando las sirenas antiaéreas suenan por toda la ciudad a las 17h por el aniversario del Alzamiento de Varsovia y todo el mundo se detiene en la calle durante un minuto. Es un momento conmovedor y sobrio que merece presenciarse; el resto del mes sigue cálido, animado y concurrido.",
      9: "Máximas en torno a 19C, la afluencia se aclara tras la primera semana y un tiempo cómodo para caminar, lo que hace de este mes la alternativa inteligente al verano. Los últimos conciertos gratuitos de Chopin suenan en Lazienki a mediados de mes y la luz se vuelve dorada sobre el río; los precios se relajan.",
      10: "Otoño fresco, en torno a 13C, con un fuerte colorido en Lazienki y a lo largo del escarpe del Vístula. El número de turistas cae de forma notable tras mediados de mes y las tarifas de hotel le siguen; lleva una capa de abrigo para las tardes, que se enfrían deprisa en cuanto se pone el sol.",
      11: "Gris, frío y tranquilo, en torno a 6C, con días cortos y las primeras heladas, hasta que el mercado navideño del casco antiguo y las luces se encienden en la última semana y levantan todo el ánimo. Finales de noviembre es un momento ideal para los puestos del mercado y el vino caliente sin la densidad de los fines de semana de diciembre.",
      12: "El mercado navideño del casco antiguo se prolonga todo el mes en torno al Castillo Real y la Plaza del Mercado, con luces tendidas sobre las fachadas medievales, vino caliente y comida contundente, y atrae densas multitudes de fin de semana. Cuenta con mínimas bajo cero y posible nieve, y con tarifas de diciembre por encima de la norma invernal, así que reserva pronto.",
    },
    climate: {
      1: { highC: 1, lowC: -4, rainyDays: 9 },
      2: { highC: 2, lowC: -4, rainyDays: 8 },
      3: { highC: 7, lowC: -1, rainyDays: 9 },
      4: { highC: 14, lowC: 3, rainyDays: 8 },
      5: { highC: 20, lowC: 8, rainyDays: 10 },
      6: { highC: 23, lowC: 11, rainyDays: 11 },
      7: { highC: 24, lowC: 13, rainyDays: 11 },
      8: { highC: 24, lowC: 13, rainyDays: 10 },
      9: { highC: 19, lowC: 9, rainyDays: 9 },
      10: { highC: 13, lowC: 4, rainyDays: 9 },
      11: { highC: 6, lowC: 1, rainyDays: 10 },
      12: { highC: 2, lowC: -2, rainyDays: 10 },
    },
    budgetLevel: "mid",
    budgetPerDay: { budget: 55, mid: 110, high: 220 },
    tagline:
      "Una capital reconstruida a partir de escombros, donde un casco antiguo de cuento se alza junto a torres estalinistas y rascacielos de cristal.",
    heroIntro:
      "El casco antiguo de Varsovia parece medieval, pero fue reconstruido ladrillo a ladrillo después de que la guerra lo arrasara, con tanta fidelidad que hoy figura en la lista de la UNESCO. Toda la ciudad es una historia de destrucción y reconstrucción desafiante, contada con fuerza en los magníficos museos del Alzamiento de Varsovia y POLIN, y recompensa a quien busca sustancia antes que belleza de postal. En torno al núcleo histórico encuentras una ribera verde, el parque de Chopin con sus conciertos gratuitos de verano y la comida barata y contundente de los bares lácteos. Es más dispersa y moderna que Cracovia, pero tiene verdadera profundidad, y dos o tres días bastan para sentirla.",
    accent: { from: "#C0433A", to: "#3E5673", ink: "#2A1616" },
    neighborhoodSlugs: [
      "old-town-stare-miasto",
      "srodmiescie-centrum",
      "praga",
      "powisle",
      "nowy-swiat-krakowskie",
    ],
    nearbyCitySlugs: ["krakow"],
  },

  neighborhoods: [
    {
      slug: "old-town-stare-miasto",
      citySlug: "warsaw",
      name: "Casco antiguo (Stare Miasto)",
      lat: 52.2497,
      lng: 21.0122,
      bestFor: ["first-time", "romantic"],
      vibe: "El casco antiguo reconstruido, declarado patrimonio de la UNESCO, reúne casas de mercaderes en tonos pastel en torno a la Plaza del Mercado y el Castillo Real, todo levantado de nuevo a partir de escombros tras la guerra y convincentemente medieval al recorrerlo. Es la parte más atmosférica de la ciudad y la base evidente para una primera visita, aunque atrae grupos de turistas de día y se vacía hacia la calma cuando cierran los restaurantes. Alójate aquí por el escenario de postal y el corto paseo hasta la Ruta Real.",
      pros: [
        "Cada sitio estrella del casco antiguo, la Plaza del Mercado, el Castillo Real y la Barbacana, a tu puerta",
        "Veladas genuinamente atmosféricas una vez que se aclaran las multitudes del día y se iluminan las fachadas",
        "Corto paseo por Krakowskie Przedmiescie hasta el centro y Nowy Swiat",
      ],
      cons: [
        "Los restaurantes con los precios más turísticos de la ciudad rodean la Plaza del Mercado",
        "Tranquilo y algo apagado por la noche, con pocos vecinos viviendo aquí",
        "Los adoquines y los escalones lo hacen incómodo con equipaje de ruedas",
      ],
    },
    {
      slug: "srodmiescie-centrum",
      citySlug: "warsaw",
      name: "Srodmiescie (Centrum)",
      lat: 52.2319,
      lng: 21.0067,
      bestFor: ["first-time", "family"],
      vibe: "El centro moderno se extiende alrededor del Palacio de la Cultura y la Ciencia, Nowy Swiat y los rascacielos de cristal, y es la base práctica y mejor comunicada de la ciudad. Ambas líneas de metro y la mayoría de los tranvías cruzan por aquí, los hoteles abarcan toda la gama de precios y todo queda a un tranvía o a un paseo. Elígelo por comodidad y valor antes que por el encanto del casco antiguo.",
      pros: [
        "Las mejores conexiones de transporte de la ciudad, con ambas líneas de metro y la estación principal cerca",
        "Toda la gama de hoteles a cualquier precio, además de tiendas, cines y restaurantes",
        "Céntrico para llegar por igual al casco antiguo, a Lazienki y a Praga",
      ],
      cons: [
        "Ajetreado, con mucho tráfico y escaso de ambiente de otra época",
        "La zona justo junto al Palacio de la Cultura resulta corporativa y puede quedar muerta de noche",
        "Menos carácter que el casco antiguo o los barrios de la ribera",
      ],
    },
    {
      slug: "praga",
      citySlug: "warsaw",
      name: "Praga",
      lat: 52.2528,
      lng: 21.0361,
      bestFor: ["nightlife", "local"],
      vibe: "La orilla este, áspera y artística al otro lado del Vístula, sobrevivió en gran parte intacta a la guerra, así que sus edificios de ladrillo son la Varsovia de antes de la guerra de verdad, hoy reconvertidos en estudios, bares y galerías. La calle Zabkowska, el Museo del Neón y la destilería de vodka Koneser anclan una escena creativa y con arista que atrae a los vecinos más que a los turistas. Basáte aquí por la vida nocturna y el carácter antes que por la cercanía a los sitios.",
      pros: [
        "La vida nocturna más creativa de la ciudad, de los bares de la calle Zabkowska al patio de Koneser",
        "Arquitectura real de antes de la guerra que escapó a la destrucción bélica",
        "El Museo del Neón y una fuerte escena de galerías y estudios",
      ],
      cons: [
        "De aristas más ásperas por zonas y mejor recorrida con sentido común urbano de noche",
        "Cruzar el río desde el casco antiguo y los sitios principales",
        "Menos hoteles convencionales, más apartamentos y hostales",
      ],
    },
    {
      slug: "powisle",
      citySlug: "warsaw",
      name: "Powisle",
      lat: 52.2411,
      lng: 21.0289,
      bestFor: ["local", "budget"],
      vibe: "El moderno barrio ribereño se asienta al pie del escarpe entre el centro y el Vístula, y se ha convertido en la Varsovia joven de bares de estudiantes, cafés y los bulevares recuperados del río. El Centro de Ciencia Copérnico y los jardines de la biblioteca universitaria están aquí, y toda la franja cobra vida en las tardes cálidas. Basáte aquí para una estancia local y de buen valor a poca distancia a pie del agua y del centro.",
      pros: [
        "Los bulevares del Vístula y los chiringuitos de playa quedan a un corto paseo cuesta abajo",
        "Bares y cafés relajados con precios de estudiante en vez de precios turísticos",
        "A pie hasta Nowy Swiat, el centro y el Centro de Ciencia Copérnico",
      ],
      cons: [
        "El escarpe implica un paseo cuesta arriba de vuelta al centro y al casco antiguo",
        "Menos sitios de renombre en las calles inmediatas",
        "Menor oferta hotelera, sobre todo pensiones y apartamentos",
      ],
    },
    {
      slug: "nowy-swiat-krakowskie",
      citySlug: "warsaw",
      name: "Nowy Swiat y Krakowskie Przedmiescie",
      lat: 52.2385,
      lng: 21.0175,
      bestFor: ["romantic", "first-time"],
      vibe: "El bulevar de la Ruta Real baja desde el casco antiguo por Krakowskie Przedmiescie y Nowy Swiat, flanqueado de palacios, iglesias, la universidad y los cafés más señoriales de la ciudad. Es la elegante columna vertebral de Varsovia, recorrible de punta a punta, y te sitúa entre el casco antiguo y el centro con el rastro de los bancos de Chopin bajo los pies. Basáte aquí para una estancia céntrica y romántica con la vida de café en la puerta.",
      pros: [
        "La calle más hermosa de la ciudad, con palacios, cafés y la universidad",
        "A medio camino entre el casco antiguo y el centro, a pie hasta ambos",
        "Los bancos musicales de Chopin y los sitios de la Ruta Real a lo largo del paseo",
      ],
      cons: [
        "Flanqueada de cafés y muy solicitada, así que las tarifas de habitación superan la media de la ciudad",
        "Concurrida de peatones y eventos, sobre todo los fines de semana de verano",
        "Parte del bulevar se cierra al tráfico, lo que puede complicar las paradas de taxi",
      ],
    },
  ],

  pois: [
    {
      slug: "old-town-market-square",
      citySlug: "warsaw",
      name: "La Plaza del Mercado del casco antiguo y la estatua de la Sirena",
      lat: 52.2497,
      lng: 21.0122,
      kind: "sight",
      needsBooking: false,
      tip: "La plaza y su Syrenka de bronce, la sirena con espada y escudo que es el símbolo de Varsovia, son gratis y están abiertas a todas horas, pero ven antes de las 10h o después de las 20h para fotografiar las fachadas reconstruidas sin las multitudes del día. Recuerda que toda la plaza se reconstruyó a partir de escombros tras 1945, así que lee las viejas fotos de antes de la guerra expuestas cerca para captar qué se reconstruyó, y evita los restaurantes que dan a la plaza, los más caros de la ciudad.",
    },
    {
      slug: "royal-castle-castle-square",
      citySlug: "warsaw",
      name: "El Castillo Real y la Plaza del Castillo",
      lat: 52.2478,
      lng: 21.0136,
      kind: "sight",
      needsBooking: false,
      tip: "El Castillo Real reconstruido alberga salas de aparato restauradas y dos Rembrandt, y la entrada al recorrido principal es gratis un día a la semana, normalmente entre semana, así que consulta la web del castillo antes de ir y cuenta con cola ese día. La Columna de Segismundo, en la Plaza del Castillo enfrente, es el monumento laico más antiguo de la ciudad y el punto de encuentro clásico; calcula unos noventa minutos para el interior del castillo.",
    },
    {
      slug: "barbican-city-walls",
      citySlug: "warsaw",
      name: "La Barbacana y las murallas medievales",
      lat: 52.2508,
      lng: 21.0106,
      kind: "sight",
      needsBooking: false,
      tip: "La Barbacana de ladrillo rojo y el tramo circundante de murallas medievales reconstruidas se atraviesan gratis y conectan el casco antiguo con la ciudad nueva en un par de minutos. Pásate en verano, cuando los músicos callejeros y los vendedores de artesanía se instalan a lo largo de las murallas, y sigue las almenas para la aproximación más tranquila y bonita a la Plaza del Mercado desde el norte.",
    },
    {
      slug: "krakowskie-przedmiescie-royal-route",
      citySlug: "warsaw",
      name: "Krakowskie Przedmiescie y la Ruta Real",
      lat: 52.2411,
      lng: 21.0150,
      kind: "experience",
      needsBooking: false,
      tip: "Este gran bulevar desde la Plaza del Castillo hasta Nowy Swiat se recorre gratis y está flanqueado de palacios, iglesias y la universidad, y parte de él se cierra al tráfico los fines de semana, lo que lo hace agradable a pie. Busca los bancos negros de Chopin a lo largo del recorrido, que tocan treinta segundos de su música al pulsar un botón, y entra en la iglesia de la Santa Cruz para ver el pilar que guarda el corazón del compositor.",
    },
    {
      slug: "palace-of-culture-science",
      citySlug: "warsaw",
      name: "El Palacio de la Cultura y la Ciencia",
      lat: 52.2318,
      lng: 21.0060,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Compra una entrada para la terraza panorámica de la planta 30, que abre a diario y ofrece la vista más amplia sobre toda la ciudad, y sube cerca del atardecer para la mejor luz. La torre de los años cincuenta fue un regalo de Stalin sobre el que los polacos aún sienten ambivalencia, y los locales bromean con que tiene la mejor vista precisamente porque es el único sitio desde el que no ves el propio palacio; las colas crecen en verano, así que ve temprano o tarde.",
    },
    {
      slug: "lazienki-park",
      citySlug: "warsaw",
      name: "El parque Lazienki y el Palacio sobre el Agua",
      lat: 52.2149,
      lng: 21.0355,
      kind: "park",
      needsBooking: false,
      tip: "Este es el parque más señorial de la ciudad, de entrada gratuita, con pavos reales, el Palacio sobre el Agua y el enorme monumento a Chopin, y los domingos por la tarde desde mediados de mayo hasta finales de septiembre suenan conciertos gratuitos de piano al aire libre junto a la estatua a mediodía y a las 16h. Lleva una manta y llega temprano para un sitio cerca del monumento, y combina la visita con los interiores del palacio, que cobran entrada aparte.",
    },
    {
      slug: "wilanow-palace",
      citySlug: "warsaw",
      name: "El Palacio de Wilanow",
      lat: 52.1650,
      lng: 21.0905,
      kind: "sight",
      needsBooking: false,
      tip: "A menudo llamado el Versalles polaco, esta residencia real barroca con jardines de trazado formal queda a unos 10 km al sur del centro y se llega en autobús 116 o 180 en unos 40 minutos, así que reserva media jornada. La entrada a las salas del palacio es gratis un día a la semana, normalmente el jueves, y los jardines cobran una pequeña tarifa aparte; ve por la mañana para adelantarte a los autocares y ver la rosaleda en verano.",
    },
    {
      slug: "polin-museum",
      citySlug: "warsaw",
      name: "El Museo POLIN de la Historia de los Judíos Polacos",
      lat: 52.2495,
      lng: 20.9930,
      kind: "museum",
      needsBooking: true,
      tip: "Reserva una entrada con hora en línea, ya que la exposición central que cubre mil años de vida judía polaca es popular y las franjas de acceso se agotan los fines de semana. El edificio se alza sobre el terreno del antiguo gueto de la guerra, frente al monumento a los Héroes del Gueto, y la exposición permanente es gratis un día a la semana, normalmente el jueves; calcula al menos dos o tres horas dentro.",
    },
    {
      slug: "warsaw-rising-museum",
      citySlug: "warsaw",
      name: "El Museo del Alzamiento de Varsovia",
      lat: 52.2325,
      lng: 20.9810,
      kind: "museum",
      needsBooking: true,
      tip: "Este museo inmersivo sobre el alzamiento de 1944 contra la ocupación nazi es imprescindible y se llena muchísimo, así que reserva una entrada con hora en línea y llega a la apertura; es gratis los lunes, que son también los días más concurridos. Dedícale al menos dos horas, no te pierdas la película en 3D de la ciudad destruida ni la réplica de alcantarilla por la que te arrastras, y ten en cuenta que queda a diez minutos a pie o a un corto viaje en tranvía al oeste del centro.",
    },
    {
      slug: "praga-neon-koneser",
      citySlug: "warsaw",
      name: "Praga: el Museo del Neón y Koneser",
      lat: 52.2533,
      lng: 21.0430,
      kind: "experience",
      needsBooking: false,
      tip: "Cruza el Vístula hacia Praga para ver el Museo del Neón, que reúne carteles luminosos de la era de la Guerra Fría en una antigua fábrica y abre a diario por una entrada pequeña, y el complejo Koneser, una destilería de vodka de ladrillo rojo convertida en un patio de bares, tiendas y el Museo Polaco del Vodka. Ven a última hora de la tarde y hacia la noche, cuando se llenan los bares de la calle Zabkowska, y tómalo como una media jornada lejos del centro turístico.",
    },
    {
      slug: "vistula-copernicus-centre",
      citySlug: "warsaw",
      name: "Los bulevares del Vístula y el Centro de Ciencia Copérnico",
      lat: 52.2415,
      lng: 21.0287,
      kind: "experience",
      needsBooking: true,
      tip: "Los bulevares ribereños recuperados al pie de Powisle son gratis y mejor por la tarde, cuando los chiringuitos de playa y los puestos de comida flanquean el agua y la fuente multimedia ofrece juegos de luz las noches de fin de semana en verano. Junto a ellos, el Centro de Ciencia Copérnico es un museo interactivo excelente para familias, pero se agota, así que reserva una entrada con hora en línea con antelación y calcula un par de horas dentro.",
    },
    {
      slug: "milk-bar-bar-mleczny",
      citySlug: "warsaw",
      name: "Un bar lácteo (Bar Mleczny)",
      lat: 52.2360,
      lng: 21.0170,
      kind: "food",
      needsBooking: false,
      tip: "Estas cantinas sin florituras de la era comunista todavía sirven pierogi, sopas y filetes por unos pocos euros, y un plato completo rara vez supera los 25 PLN, lo que las convierte en la comida decente más barata de la ciudad. El Bar Prasowy, en Marszalkowska, es un superviviente muy conocido; pide en el mostrador, cuenta con una carta solo en polaco y un servicio que agradece el efectivo, y ve a la hora del almuerzo, cuando la comida está más fresca y la rotación es más rápida.",
    },
    {
      slug: "zelazowa-wola-daytrip",
      citySlug: "warsaw",
      name: "Excursión de un día a Zelazowa Wola o Palmiry",
      lat: 52.2510,
      lng: 20.4200,
      kind: "experience",
      needsBooking: false,
      tip: "La casa natal de Chopin en Zelazowa Wola, a unos 50 km al oeste, es una casa señorial con parque y recitales de piano gratuitos los domingos en verano, y se llega en un autobús regional desde Varsovia en cerca de una hora y media. Como alternativa, Palmiry, en el bosque de Kampinos al norte de la ciudad, es el lugar y el cementerio de las ejecuciones masivas de la guerra y una media jornada sobria y conmovedora; ambos ofrecen escapadas tranquilas de la capital, así que consulta los horarios de vuelta del autobús antes de salir.",
    },
  ],

  itineraries: [
    {
      citySlug: "warsaw",
      days: 2,
      summary:
        "Dos días bastan para la esencia de Varsovia si planificas por adelantado los museos de pago. El casco antiguo reconstruido es pequeño y puedes recorrer la Plaza del Mercado, el Castillo Real, la Barbacana y la Sirena en un par de horas, así que el tiempo se va de verdad en los museos y en el centro moderno más amplio. Reserva en línea una franja con hora para el Museo del Alzamiento de Varsovia y para POLIN, porque ambos son imprescindibles, inmersivos y concurridos, y dedícale al menos dos horas a cada uno. Basáte en el casco antiguo o en la Ruta Real para poder recorrer a pie la columna vertebral histórica, y luego usa los tranvías y las dos líneas de metro para el resto. El primer día abarca el casco antiguo, la Ruta Real y la terraza panorámica del Palacio de la Cultura; el segundo es la densa y gratificante historia del Museo del Alzamiento de Varsovia y POLIN, y luego el parque Lazienki por la tarde, con sus conciertos gratuitos de Chopin si visitas un domingo de verano. Lo que se renuncia a este ritmo es Praga y Wilanow. Para esas, elige la versión de tres días.",
      stayNeighborhoodSlug: "old-town-stare-miasto",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "El casco antiguo, la Ruta Real y la vista de la ciudad",
          morning: [
            {
              poiSlug: "old-town-market-square",
              text: "Empieza en la Plaza del Mercado del casco antiguo antes de que lleguen los grupos, con la Syrenka de bronce y las fachadas pastel reconstruidas para ti solo. Lee las fotos de antes de la guerra que hay cerca para captar que toda la plaza se reconstruyó a partir de escombros tras 1945.",
              durationMin: 45,
            },
            {
              poiSlug: "royal-castle-castle-square",
              text: "Camina hasta la Plaza del Castillo y recorre el Castillo Real reconstruido, con sus salas de aparato restauradas y dos Rembrandt, calculando unos noventa minutos. Consulta la web del castillo por el día semanal de entrada gratuita si quieres ahorrarte la entrada, y cuenta con cola si vas ese día.",
              durationMin: 105,
            },
            {
              poiSlug: "barbican-city-walls",
              text: "Da una vuelta por la Barbacana de ladrillo rojo y a lo largo de las murallas medievales reconstruidas hacia la ciudad nueva, que es gratis y lleva solo unos minutos. En verano, los músicos callejeros y los vendedores de artesanía flanquean las almenas.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "milk-bar-bar-mleczny",
              text: "Haz una pausa para un almuerzo barato y contundente en un bar lácteo, donde un plato de pierogi y sopa rara vez supera los 25 PLN. Pide en el mostrador, cuenta con una carta solo en polaco y ve a la hora del almuerzo, cuando la rotación es más rápida.",
              durationMin: 60,
            },
            {
              poiSlug: "krakowskie-przedmiescie-royal-route",
              text: "Recorre la Ruta Real por Krakowskie Przedmiescie pasando los palacios, las iglesias y la universidad, pulsando los bancos negros de Chopin para sus treinta segundos de música. Entra en la iglesia de la Santa Cruz para ver el pilar que guarda el corazón del compositor.",
              durationMin: 75,
            },
            {
              poiSlug: "palace-of-culture-science",
              text: "Sigue hasta el Palacio de la Cultura y la Ciencia y sube a la terraza panorámica de la planta 30 para la vista más amplia sobre la ciudad. La torre estalinista de los años cincuenta es un regalo sobre el que los polacos aún sienten cosas encontradas; sube cerca del atardecer para la mejor luz.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              text: "Vuelve hacia Nowy Swiat para cenar, eligiendo una calle lateral apartada del bulevar principal donde bajan los precios, y luego sube a pie por la iluminada Ruta Real de vuelta al casco antiguo. La plaza está en su mejor momento iluminada y tranquila una vez que se han ido las multitudes del día.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Historia de la guerra y el parque de Chopin",
          morning: [
            {
              poiSlug: "warsaw-rising-museum",
              text: "Aprovecha tu franja reservada en el Museo del Alzamiento de Varsovia a la apertura, antes de que crezcan las multitudes, y dedícale al menos dos horas. No te pierdas la película en 3D de la ciudad destruida ni la réplica de alcantarilla por la que te arrastras; queda a diez minutos en tranvía al oeste del centro.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "polin-museum",
              text: "Pásate a POLIN, el Museo de la Historia de los Judíos Polacos, con tu entrada con hora, por su exposición central de mil años sobre el terreno del antiguo gueto. Calcula dos o tres horas y detente en el monumento a los Héroes del Gueto, frente a la entrada.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "lazienki-park",
              text: "Termina en el parque Lazienki, el más señorial de la ciudad, con sus pavos reales, el Palacio sobre el Agua y el enorme monumento a Chopin. Si es un domingo de verano, cuadra la visita con el concierto gratuito de piano al aire libre junto a la estatua a las 16h y lleva algo para sentarte.",
              durationMin: 120,
            },
            {
              text: "Redondea con una cena de vuelta hacia el centro o Nowy Swiat, o si la tarde es cálida baja a los bulevares del Vístula para una copa en la ribera entre los chiringuitos de playa.",
              durationMin: 105,
            },
          ],
        },
      ],
    },
    {
      citySlug: "warsaw",
      days: 3,
      summary:
        "Tres días es la cantidad cómoda para Varsovia y te deja hacer los densos museos de historia bélica a un ritmo adecuado en vez de uno tras otro. El casco antiguo es pequeño y se recorre rápido, así que el tiempo de verdad se va en el Museo del Alzamiento de Varsovia y POLIN, el Palacio de la Cultura y el parque Lazienki, que por sí solos necesitan un segundo día completo. El tercer día extra es lo que abre la ciudad: cruza el Vístula hacia la áspera y creativa Praga para el Museo del Neón y la destilería Koneser, sal hasta el barroco Palacio de Wilanow, o simplemente dales a los museos de la guerra el espacio que merecen. Basáte en la Ruta Real o en el casco antiguo para el núcleo histórico, y luego apóyate en los tranvías y las dos líneas de metro para los sitios más alejados. Reserva en línea entradas con hora para el Museo del Alzamiento de Varsovia, POLIN y el Centro de Ciencia Copérnico, ya que los tres se agotan en temporada. El primer día es el casco antiguo y la Ruta Real; el segundo, los museos y Lazienki; el tercero, Praga, Wilanow y la ribera a un ritmo relajado.",
      stayNeighborhoodSlug: "nowy-swiat-krakowskie",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "El casco antiguo, la Ruta Real y la vista de la ciudad",
          morning: [
            {
              poiSlug: "old-town-market-square",
              text: "Comienza temprano en la Plaza del Mercado del casco antiguo, con la Syrenka de bronce y las fachadas reconstruidas antes de las multitudes del día. Lee las fotos de antes de la guerra que hay cerca para entender que toda la plaza se reconstruyó a partir de escombros tras 1945.",
              durationMin: 45,
            },
            {
              poiSlug: "royal-castle-castle-square",
              text: "Recorre el Castillo Real reconstruido desde la Plaza del Castillo, con sus salas de aparato y dos Rembrandt, calculando unos noventa minutos. La Columna de Segismundo enfrente es el monumento laico más antiguo de la ciudad y el punto de encuentro clásico.",
              durationMin: 105,
            },
            {
              poiSlug: "barbican-city-walls",
              text: "Sal por la Barbacana y a lo largo de las murallas medievales reconstruidas hacia la ciudad nueva, gratis y rápido, y luego vuelve a la plaza desde el norte para su aproximación más bonita.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "milk-bar-bar-mleczny",
              text: "Almuerza barato en un bar lácteo, donde pierogi, sopa y un filete rara vez superan los 25 PLN. Pide en el mostrador y ve a mediodía, cuando la comida está más fresca y la cola avanza más rápido.",
              durationMin: 60,
            },
            {
              poiSlug: "krakowskie-przedmiescie-royal-route",
              text: "Recorre la Ruta Real por Krakowskie Przedmiescie pasando los palacios, las iglesias y la universidad, pulsando los bancos de Chopin sobre la marcha. Cuélate en la iglesia de la Santa Cruz para ver el pilar que guarda el corazón del compositor.",
              durationMin: 75,
            },
            {
              poiSlug: "palace-of-culture-science",
              text: "Cierra la tarde en el Palacio de la Cultura y la Ciencia y sube a la terraza panorámica de la planta 30 para la vista más amplia de la ciudad. Ve cerca del atardecer por la luz; la torre estalinista sigue siendo un monumento sobre el que los polacos sienten cosas encontradas.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              text: "Cena en torno a Nowy Swiat, eligiendo una calle lateral donde se relajan los precios, y luego sube a pie por el bulevar iluminado hacia el casco antiguo. La Plaza del Mercado iluminada es más tranquila y mejor una vez que se han ido los excursionistas.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Historia de la guerra y el parque de Chopin",
          morning: [
            {
              poiSlug: "warsaw-rising-museum",
              text: "Aprovecha tu franja reservada en el Museo del Alzamiento de Varsovia a la apertura y dedícale al menos dos horas; es inmersivo, imprescindible y concurrido. Mira la película en 3D de la ciudad destruida y arrástrate por la réplica de alcantarilla; queda a un corto viaje en tranvía al oeste del centro.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "polin-museum",
              text: "Pásate a POLIN con tu entrada con hora para su exposición central de mil años sobre el terreno del antiguo gueto, calculando dos o tres horas. Detente en el monumento a los Héroes del Gueto, frente a la entrada, antes o después.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "lazienki-park",
              text: "Pasa la última hora de la tarde en el parque Lazienki con sus pavos reales, el Palacio sobre el Agua y el monumento a Chopin. Un domingo de verano, pilla el concierto gratuito de piano al aire libre junto a la estatua a las 16h; lleva una manta y llega temprano para un sitio.",
              durationMin: 120,
            },
            {
              text: "Termina con una cena de vuelta hacia el centro, o baja a pie a los bulevares del Vístula para una copa entre los chiringuitos de playa de la ribera si el tiempo aguanta.",
              durationMin: 105,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Praga, Wilanow y la ribera",
          morning: [
            {
              poiSlug: "wilanow-palace",
              text: "Ve al sur, al Palacio de Wilanow, el Versalles polaco barroco con sus jardines de trazado formal, en autobús 116 o 180, calculando unos 40 minutos por trayecto. La entrada a las salas es gratis un día a la semana, normalmente el jueves; ve por la mañana para adelantarte a los autocares.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "praga-neon-koneser",
              text: "Cruza el Vístula hacia Praga para el Museo del Neón de carteles luminosos de la Guerra Fría y el patio de la destilería Koneser, hogar de bares, tiendas y el Museo Polaco del Vodka. Esta orilla este sobrevivió en gran parte a la guerra, así que sus edificios de ladrillo son la Varsovia de antes de la guerra de verdad.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "vistula-copernicus-centre",
              text: "Vuelve a la orilla oeste para los bulevares del Vístula al pie de Powisle, mejor por la tarde, cuando abren los chiringuitos de playa y los puestos de comida y la fuente multimedia funciona las noches de fin de semana en verano. Las familias pueden encajar un par de horas reservadas en el Centro de Ciencia Copérnico al lado.",
              durationMin: 120,
            },
            {
              text: "Última cena en Powisle o en Nowy Swiat, tomándolo con calma. Si tienes un vuelo temprano, recuerda que el aeropuerto Chopin queda a solo 8 km al sur, unos 20 a 25 minutos en el tren S2 o S3 o el autobús 175 por cerca de 5 PLN.",
              durationMin: 105,
            },
          ],
        },
      ],
    },
  ],
};

export default warsawEs;
