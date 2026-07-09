import type { CityData } from "../types";

const romeEs: CityData = {
  city: {
    slug: "rome",
    name: "Rome",
    country: "Italia",
    countrySlug: "italy",
    lat: 41.9028,
    lng: 12.4964,
    tier: 1,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "FCO",
    airportToCenter:
      "El tren Leonardo Express une Fiumicino con Termini en unos 32 min, por 14 EUR, con salidas cada 15 min. Opciones más baratas: el tren regional FL1 hasta las estaciones de Trastevere u Ostiense por 8 EUR, o un autobús Terravision/SIT hasta Termini por unos 6 EUR, pero más lento con tráfico.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [7, 8],
    monthlyNotes: {
      1: "Fresco, en torno a 12-13C, con la menor afluencia del año y las tarifas de hotel más baratas, aunque cae alguna lluvia. La Epifanía, el 6 de enero, cierra la temporada navideña con un mercado en Piazza Navona, y el primer domingo trae la entrada gratuita a los museos estatales, incluido el Coliseo.",
      2: "Todavía suave, en torno a 13-14C, y tranquilo fuera del breve tramo de Carnaval, cuando los niños disfrazados llenan las plazas. La lluvia es posible, pero son frecuentes las tardes soleadas para comer al aire libre: un mes muy bueno para un viaje barato y sin colas.",
      3: "Las máximas empujan hacia los 17C y los días se alargan, con la afluencia creciendo solo a finales de mes. Vigila el calendario de Pascua: si la Semana Santa cae en marzo, el Vaticano y los hoteles del centro se llenan y se encarecen rápido.",
      4: "Uno de los mejores meses, a 19-20C, pero chocan dos grandes reclamos: la Semana Santa y la Pascua llenan la plaza de San Pedro para los oficios del Papa, y el Natale di Roma, el 21 de abril, monta desfiles de gladiadores en el Circo Máximo por la fundación de la ciudad. Reserva el Vaticano y las fechas de Pascua con semanas de antelación.",
      5: "Cálido de forma fiable, a 23-24C, con tardes largas y poca lluvia, el punto dulce antes del calor del verano. La afluencia es intensa en los grandes atractivos, así que las entradas con hora para el Coliseo y el Vaticano son imprescindibles, pero la temporada de terrazas y cenas en las plazas está en su mejor momento.",
      6: "Caluroso, a 28-29C, y concurrido, con el festival Estate Romana empezando a llenar las orillas del río y los espacios al aire libre de conciertos y cine de verano durante toda la temporada. Haz el Coliseo y el Vaticano a la apertura, luego retírate a las iglesias frescas y a las comidas largas por la tarde.",
      7: "Calor máximo, por encima de 31C, sol implacable y locales que van menguando al marcharse a la costa. La afluencia sigue densa en los grandes atractivos y los precios se mantienen altos, así que reserva el primer turno de entrada en todas partes y planifica paradas cubiertas o a la sombra para el horno de las 2 a las 5 de la tarde.",
      8: "El mes más caluroso y agotador, a 32-33C, con el Ferragosto del 15 de agosto que cierra muchas trattorias familiares por las vacaciones. Si agosto es inevitable, reserva aire acondicionado, concentra las visitas a primera hora de la mañana y espera una ciudad medio vacía de romanos pero llena de grupos turísticos.",
      9: "La luz del verano sin lo peor del calor: 28C a principios de mes, aflojando a lo largo de las semanas, con los eventos de la Estate Romana todavía en marcha junto al Tíber. La afluencia se relaja tras la primera semana y es, sin duda, el mejor mes en conjunto para una escapada a Roma.",
      10: "Días cálidos en torno a 23-24C, con las primeras lluvias de verdad volviendo a finales de mes y una luz rasante magnífica para las fotos. La afluencia baja de forma notable tras mediados de octubre, una opción excelente de temporada media tanto por el clima como por la relación calidad-precio de los hoteles.",
      11: "Más fresco, a 17-18C, con episodios de lluvia regulares, pero muchos días luminosos entre frentes y los grandes atractivos más tranquilos del otoño. Vuelven los precios de temporada baja y a menudo puedes entrar sin reserva en restaurantes que en mayo exigen mesa reservada.",
      12: "Suave para ser invierno, a 14C, pero húmedo, con un árbol de Navidad y un belén en la plaza de San Pedro y luces por todo el centro. Tranquilo hasta el tramo de Navidad a Año Nuevo, cuando las tarifas se disparan y la entrada gratuita del primer domingo atrae a mucha afluencia local.",
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
    tagline: "Tres mil años de ruinas, y la cena al aire libre por encima.",
    heroIntro:
      "Roma concentra maravillas antiguas, el Vaticano y la mejor cocina informal de Europa en un centro que se recorre sobre todo a pie, si aceptas los adoquines y las distancias. Tres días son el mínimo honesto para repartir la Roma antigua, el Vaticano y el núcleo de las plazas sin forzar el paso. Ven en primavera o a principios de otoño, reserva el Coliseo y el Vaticano antes de volar, y la ciudad cumple como casi ningún otro lugar.",
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
      vibe: "El núcleo histórico entre el Panteón, Piazza Navona y la Fontana di Trevi, un laberinto de callejones ocres que desemboca en plazas barrocas. Todo lo que figura en la lista de un primer viaje queda a quince minutos a pie, y las calles brillan de noche una vez que se van los excursionistas del día. Es la postal, y pagas precio de postal por dormir en ella.",
      pros: [
        "Llegar al Panteón, Trevi, Navona y la Plaza de España a pie, sin transporte",
        "Precioso de noche una vez que los grupos se marchan después de cenar",
        "Denso en cafés, gelaterías y sitios de aperitivo en cada esquina",
      ],
      cons: [
        "La zona más cara de la ciudad para alojarse",
        "Ninguna estación de metro dentro, así que caminas o coges autobuses a todas partes",
        "Concurrido y ruidoso alrededor de los grandes atractivos todo el día",
      ],
    },
    {
      slug: "monti",
      citySlug: "rome",
      name: "Monti",
      lat: 41.8946,
      lng: 12.4917,
      bestFor: ["local", "romantic", "nightlife"],
      vibe: "El barrio más antiguo de Roma se acomoda en un bolsillo entre el Coliseo y Termini, antiguo barrio rojo de la Antigüedad y hoy el rincón más habitable del centro. Tiendas vintage, bares de vino y pequeñas trattorias bordean callejones cubiertos de hiedra en torno a Piazza della Madonna dei Monti, donde los locales beben en los escalones de la fuente por la noche. Te da acceso a pie a la Roma antigua sin el precio ni el gentío de los autobuses turísticos.",
      pros: [
        "Diez minutos a pie del Coliseo y del Foro",
        "Estación de metro Cavour en la línea B, y muy cerca del nudo de transporte de Termini",
        "Vida de barrio de verdad por la noche, bares de vino y enotecas, no trampas para turistas",
      ],
      cons: [
        "Algunas calles cerca de Termini se ven descuidadas al caer la noche",
        "Los bares populares se llenan y se ponen ruidosos las noches de fin de semana",
        "Menos hoteles de grandes cadenas, más apartamentos y pequeñas boutiques",
      ],
    },
    {
      slug: "trastevere",
      citySlug: "rome",
      name: "Trastevere",
      lat: 41.8896,
      lng: 12.4695,
      bestFor: ["romantic", "nightlife", "local"],
      vibe: "Al otro lado del Tíber respecto al centro, Trastevere es una maraña de callejones adoquinados, hiedra y ropa tendida que se convierte en el barrio con más ambiente de la ciudad para cenar y tomar algo al caer la noche. Las trattorias se derraman sobre las calles y los bares en torno a Piazza di Santa Maria siguen animados pasada la medianoche. Encantador de noche, es francamente bullicioso las noches de fin de semana.",
      pros: [
        "La mejor concentración de trattorias clásicas y el ambiente nocturno de Roma",
        "A pie del centro cruzando el río y del Gueto judío",
        "Callejones de postal que quedan preciosos con la luz de la mañana",
      ],
      cons: [
        "Ruidoso hasta la madrugada los fines de semana, mala elección para el sueño ligero",
        "Sin metro alguno, dependes de tranvías, autobuses o tus pies",
        "Algunos restaurantes de las plazas principales se apoyan en la ubicación",
      ],
    },
    {
      slug: "prati",
      citySlug: "rome",
      name: "Prati",
      lat: 41.9075,
      lng: 12.4623,
      bestFor: ["family", "first-time", "budget"],
      vibe: "Un distrito ordenado y elegante de anchos bulevares trazados junto al Vaticano, con tiendas selectas, restaurantes fiables y muchos menos turistas que el centro. Te deja a un corto paseo de los Museos Vaticanos y de San Pedro mientras se siente como una Roma residencial de verdad. Tranquilo, seguro y bien conectado por metro.",
      pros: [
        "Llegar a los Museos Vaticanos y a San Pedro a pie, por delante del gentío de los autobuses",
        "Dos paradas de metro en la línea A, directas a Termini y a la Plaza de España",
        "Hoteles con mejor relación calidad-precio y una restauración fiable, no turística",
      ],
      cons: [
        "Más tranquilo de noche, con una oferta de bares y vida nocturna limitada",
        "Un paseo de 20-25 minutos o un salto en metro desde el lado del Coliseo",
        "Se siente más funcional que romántico comparado con el casco antiguo",
      ],
    },
    {
      slug: "testaccio",
      citySlug: "rome",
      name: "Testaccio",
      lat: 41.8759,
      lng: 12.4757,
      bestFor: ["local", "budget", "family"],
      vibe: "Un barrio obrero al sur del centro construido en torno al antiguo matadero, y el hogar espiritual de la cucina povera romana, casquería incluida. Su mercado cubierto y sus trattorias sin florituras atraen a comensales serios, mientras que la vida nocturna se juega en las discotecas excavadas en el Monte Testaccio. Poco que ver, mucho que comer, y los precios que los locales pagan de verdad.",
      pros: [
        "La comida auténtica con mejor relación calidad-precio de Roma, del mercado a las trattorias de toda la vida",
        "Estación de metro Piramide en la línea B, a unos minutos del Coliseo",
        "Ambiente de barrio de verdad con casi ningún recargo turístico",
      ],
      cons: [
        "Escaso en atractivos clásicos, vienes a comer, no a admirar",
        "Un paseo de más de 20 minutos o un trayecto en metro desde el núcleo histórico",
        "La hilera de discotecas del Monte Testaccio es ruidosa las noches de fin de semana",
      ],
    },
  ],

  pois: [
    {
      slug: "colosseum",
      citySlug: "rome",
      name: "Coliseo",
      lat: 41.8902,
      lng: 12.4922,
      kind: "sight",
      needsBooking: true,
      tip: "Compra la entrada combinada Coliseo-Foro-Palatino en línea con días de antelación: se agota y la cola en taquilla supera una hora en temporada. El turno con hora vale solo para el Coliseo, así que entra primero a tu hora, luego usa la misma entrada para el Foro y el Palatino durante las 24 horas siguientes. Los complementos de la arena y los subterráneos exigen una reserva aparte con bastante antelación.",
    },
    {
      slug: "roman-forum-palatine",
      citySlug: "rome",
      name: "Foro Romano y Monte Palatino",
      lat: 41.8925,
      lng: 12.4853,
      kind: "sight",
      needsBooking: true,
      tip: "Incluido en la misma entrada combinada del Coliseo, así que hazlo el mismo día o al siguiente dentro de la ventana de 24 horas. Entra por la puerta más tranquila de la Via di San Gregorio en vez de por la entrada abarrotada del Foro junto al Coliseo, y sube primero el Palatino para la vista sobre las ruinas antes del sol de mediodía. Casi no hay sombra, así que lleva agua y sombrero.",
    },
    {
      slug: "pantheon",
      citySlug: "rome",
      name: "Panteón",
      lat: 41.8986,
      lng: 12.4769,
      kind: "sight",
      needsBooking: true,
      tip: "La entrada cuesta 5 EUR y es gratuita el primer domingo del mes, pero se exige turno con hora los fines de semana y festivos, así que resérvalos en línea. Ven a la apertura (9h) o en la última hora antes del cierre para tener el interior y su óculo abierto sin un muro de palos de selfi. Un día de lluvia, mira caer el agua recta por el óculo sobre el suelo de mármol con su drenaje discreto.",
    },
    {
      slug: "trevi-fountain",
      citySlug: "rome",
      name: "Fontana di Trevi",
      lat: 41.9009,
      lng: 12.4833,
      kind: "sight",
      needsBooking: false,
      tip: "Ve a las 7h o después de medianoche para ver de verdad el mármol; a media mañana es un apretujón compacto de diez filas de gente. Lanza la moneda con la mano derecha por encima del hombro izquierdo si quieres la tradición, y evita los cafés carísimos de la plaza. El agua no es potable, pero las fuentes de calle gratuitas (nasoni) de al lado sí lo son.",
    },
    {
      slug: "vatican-museums",
      citySlug: "rome",
      name: "Museos Vaticanos y Capilla Sixtina",
      lat: 41.9065,
      lng: 12.4536,
      kind: "museum",
      needsBooking: true,
      tip: "Reserva el primer turno de las 8h en línea, con semanas de antelación, y ve directo a la Capilla Sixtina por el recorrido más vacío antes de volver sobre tus pasos: las galerías se llenan hombro con hombro hacia las 10h. Los miércoles por la mañana son los más tranquilos porque la audiencia papal atrae al gentío a la plaza. La entrada gratuita del último domingo del mes es una muchedumbre con colas de una hora, evítala salvo que tengas paciencia infinita.",
    },
    {
      slug: "st-peters-basilica",
      citySlug: "rome",
      name: "Basílica de San Pedro",
      lat: 41.9022,
      lng: 12.4539,
      kind: "sight",
      needsBooking: false,
      tip: "La entrada a la basílica es gratuita, pero la cola de seguridad en la plaza puede llegar a una hora, así que llega a la apertura de las 7h o ven a última hora de la tarde. El código de vestimenta es estricto: hombros y rodillas cubiertos o te dan la vuelta en la puerta. La subida a la cúpula es un extra de pago (unos 10 EUR con el ascensor hasta la terraza, 8 EUR a pie) y merece la pena por la vista recta sobre la nave y sobre Roma.",
    },
    {
      slug: "piazza-navona",
      citySlug: "rome",
      name: "Piazza Navona",
      lat: 41.8992,
      lng: 12.4731,
      kind: "sight",
      needsBooking: false,
      tip: "Esta plaza barroca construida sobre un estadio antiguo es gratuita y está en su mejor momento temprano por la mañana o después de cenar, cuando el gentío y los caricaturistas se aclaran. La Fontana de los Cuatro Ríos de Bernini es la pieza central, pero no te sientes en una terraza aquí: el recargo por la ubicación es brutal. Da un paso una calle al oeste por una fracción del precio.",
    },
    {
      slug: "spanish-steps",
      citySlug: "rome",
      name: "Plaza de España (Piazza di Spagna)",
      lat: 41.906,
      lng: 12.4823,
      kind: "sight",
      needsBooking: false,
      tip: "Sentarse en la escalinata está prohibido y la policía lo aplica con multas, así que esto es una parada para estar de pie y fotografiar, no para descansar. Ven al amanecer para la escalinata vacía, o sube a la iglesia de Trinità dei Monti, en lo alto, para una vista gratuita sobre los tejados. La casa de Keats y Shelley, al pie, es un desvío tranquilo si te apetece.",
    },
    {
      slug: "galleria-borghese",
      citySlug: "rome",
      name: "Galleria Borghese",
      lat: 41.9142,
      lng: 12.4922,
      kind: "museum",
      needsBooking: true,
      tip: "No puedes entrar sin un turno de dos horas con hora reservado por adelantado, y se agotan con días de antelación, así que reserva esto antes que nada del viaje. Alberga las mejores esculturas de Bernini y una sala de Caravaggios en una villa compacta, así que dos horas bastan de verdad. Llega 15 minutos antes para dejar la bolsa en el guardarropa obligatorio antes de que empiece tu franja.",
    },
    {
      slug: "trastevere-lanes",
      citySlug: "rome",
      name: "Callejones del Trastevere",
      lat: 41.8896,
      lng: 12.4695,
      kind: "experience",
      needsBooking: false,
      tip: "Pasea por los callejones adoquinados por la mañana para las fotos de hiedra y ropa tendida sin gentío, luego vuelve después de las 20h para el ambiente de cena y copas. Apunta a las calles en torno a Piazza di Santa Maria in Trastevere en vez de la plaza en sí, donde los restaurantes se apoyan en la vista. Reserva mesa en una trattoria: las buenas se llenan hacia las 20:30 los fines de semana.",
    },
    {
      slug: "campo-de-fiori",
      citySlug: "rome",
      name: "Mercado de Campo de' Fiori",
      lat: 41.8956,
      lng: 12.4722,
      kind: "food",
      needsBooking: false,
      tip: "El mercado de la mañana funciona más o menos de 7h a 14h, de lunes a sábado, y hoy tira más a recuerdo turístico que a tienda de alimentación local, así que ven a curiosear y fotografiar más que a comprar barato. Compra fruta, queso y una porción de pizza bianca en la panadería de la esquina Forno Campo de' Fiori para un picnic. De noche, la plaza se transforma en un animado ambiente de bares de estudiantes.",
    },
    {
      slug: "castel-sant-angelo",
      citySlug: "rome",
      name: "Castel Sant'Angelo",
      lat: 41.9031,
      lng: 12.4663,
      kind: "sight",
      needsBooking: false,
      tip: "La tumba cilíndrica de Adriano convertida en fortaleza papal se alza justo entre el Vaticano y el centro, así que combínalo con una mañana en el Vaticano. Reserva en línea para saltarte la cola de taquilla, luego sube la rampa en espiral hasta la terraza de la azotea para uno de los mejores panoramas de Roma, con la cúpula de San Pedro en primer plano. El Ponte Sant'Angelo bordeado de estatuas, enfrente, es gratuito y precioso al atardecer.",
    },
    {
      slug: "villa-borghese",
      citySlug: "rome",
      name: "Parque de Villa Borghese",
      lat: 41.9142,
      lng: 12.4853,
      kind: "park",
      needsBooking: false,
      tip: "El gran parque central de Roma es gratuito y la pareja natural de la Galleria Borghese que alberga, así que aprovecha las horas de alrededor antes o después de tu turno. Camina hasta la terraza del Pincio, en el borde oeste, para una vista gratuita y amplia sobre Piazza del Popolo y los tejados hacia San Pedro, mejor al atardecer. Alquila una bici o una barca en el pequeño lago si viajas con niños.",
    },
    {
      slug: "jewish-ghetto-food",
      citySlug: "rome",
      name: "Gueto judío",
      lat: 41.8925,
      lng: 12.4778,
      kind: "food",
      needsBooking: false,
      tip: "El viejo barrio judío de Roma, en torno a la Via del Portico d'Ottavia, es el sitio para los carciofi alla giudia, la alcachofa aplastada y frita, mejor de octubre a primavera cuando están de temporada. Ven para una comida tardía, pide la alcachofa frita y el baccala, y llévate un dulce de la histórica panadería Boccione, en la esquina. Ten en cuenta que el barrio está tranquilo los sábados por el sabbat.",
    },
  ],

  itineraries: [
    {
      citySlug: "rome",
      days: 2,
      summary:
        "Dos días cubren los imprescindibles de Roma, pero es una carrera por los grandes atractivos y lo notarás, porque Roma necesita de verdad tres. En 48 horas puedes hacer la Roma antigua (Coliseo, Foro, Palatino) el primer día y el Vaticano más el núcleo de las plazas (Panteón, Trevi, Navona) el segundo, con cena en Trastevere las dos noches. Lo que hay que recortar: la Galleria Borghese, Villa Borghese, los interiores de Castel Sant'Angelo, la comida de Testaccio y cualquier demora lenta, así que esto es una marcha, no un paseo. Encaja con una escapada de fin de semana, una escala o un primer aperitivo antes de combinar con Florencia. Los innegociables: reserva la entrada combinada Coliseo-Foro y el turno de las 8h del Vaticano antes de volar, o pierdes en colas horas que no puedes permitirte en un viaje de dos días. Alójate en el Centro Storico para que las dos mañanas arranquen a pie y las noches te dejen a un paso de la cena. Si consigues un tercer día, añade la Borghese y baja el ritmo, es la mejor mejora posible.",
      stayNeighborhoodSlug: "centro-storico",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Roma antigua: Coliseo, Foro, Palatino",
          morning: [
            {
              poiSlug: "colosseum",
              text: "Empieza en el Coliseo para tu turno de apertura reservado por adelantado, antes de que suban las colas y el calor. Rodea ambos niveles para la vista completa de la arena, luego sal hacia el Foro con la misma entrada combinada.",
              durationMin: 90,
            },
            {
              poiSlug: "roman-forum-palatine",
              text: "Entra en el Foro Romano y sube el Monte Palatino contiguo con la misma entrada. Sube primero el Palatino para la vista sobre las ruinas, luego serpentea entre los templos y arcos del Foro antes de que apriete el sol de mediodía.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              text: "Come y recupérate en Monti, a diez minutos a pie del Foro, en un bar de vino o una trattoria en torno a Piazza della Madonna dei Monti. Es el antídoto local a los cafés turísticos justo al lado del Coliseo.",
              durationMin: 90,
            },
            {
              text: "Desvío al Capitolio y a la Piazza del Campidoglio de Miguel Ángel, luego la terraza gratuita de detrás para una vista en alto sobre el Foro que acabas de recorrer. Son cinco minutos de subida y el mejor mirador gratuito sobre la Roma antigua.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "trastevere-lanes",
              text: "Cruza el río hacia Trastevere para la noche, paseando por los callejones adoquinados a medida que se llenan los bares. Reserva mesa en una trattoria hacia las 20:30, las buenas, fuera de la plaza principal, están llenas a esa hora cualquier noche animada.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "El Vaticano y el núcleo de las plazas",
          morning: [
            {
              poiSlug: "vatican-museums",
              text: "Sé de los primeros en los Museos Vaticanos para tu turno de las 8h reservado por adelantado y ve directo a la Capilla Sixtina antes de que las galerías se atasquen hacia las 10h. El miércoles es la mañana más tranquila porque la audiencia papal atrae al gentío a la plaza.",
              durationMin: 150,
            },
            {
              poiSlug: "st-peters-basilica",
              text: "Camina luego hasta la Basílica de San Pedro, entrada gratuita con hombros y rodillas cubiertos. Si tus piernas aguantan, paga el pequeño suplemento por la subida a la cúpula y la vista recta sobre la nave y sobre la ciudad.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "pantheon",
              text: "Cruza de vuelta el río y dirígete al Panteón, el edificio mejor conservado de la Roma antigua, entrando en tu turno con hora si es fin de semana. Colócate bajo el óculo abierto, luego toma un café en uno de los bares históricos de la plaza.",
              durationMin: 75,
            },
            {
              poiSlug: "piazza-navona",
              text: "Camina dos minutos hasta Piazza Navona para la Fontana de los Cuatro Ríos de Bernini sobre su huella barroca de estadio antiguo. Sigue una calle al oeste para tomar algo a precios no turísticos.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "trevi-fountain",
              text: "Da la vuelta hacia la Fontana di Trevi por la noche, cuando el gentío afloja un poco y el mármol está iluminado. Lanza la moneda, luego sube a la Plaza de España, a unos minutos, para la escalinata iluminada.",
              durationMin: 60,
            },
            {
              text: "Termina con una cena en el Centro Storico cerca de tu hotel, reservando en cualquier sitio con nombre. Cierra la noche con un helado de una gelatería de verdad, de las que guardan sus cubetas tapadas y bajas, no apiladas en volutas de neón.",
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
        "Sí, tres días es la duración adecuada para Roma, y es lo que recomendamos para una primera visita. Le da a la Roma antigua un día entero (Coliseo, Foro, Palatino, más Monti), al Vaticano su propia mañana seguida de Castel Sant'Angelo, y un día dedicado al núcleo de las plazas: Panteón, Trevi, Navona, la Plaza de España y Campo de' Fiori. Comes bien en tres barrios distintos, encajas tanto Trastevere como una noche de trattoria romana de verdad, y aún así te mueves a un ritmo que te deja sentarte en una plaza en vez de cruzarla a la carrera. Lo que aún se cae: la Galleria Borghese, Villa Borghese y la escena gastronómica de Testaccio, justo lo que añade un cuarto día. Encaja con primerizos, parejas y cualquiera que enlace luego con Florencia. Alójate en Monti: va a pie del Coliseo, está sobre el metro Cavour y cerca de Termini para el salto al Vaticano, y sus bares de vino son la mejor base para las noches. Reserva la entrada Coliseo-Foro y el turno de las 8h del Vaticano antes de volar.",
      stayNeighborhoodSlug: "monti",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Roma antigua: Coliseo, Foro, Palatino, Monti",
          morning: [
            {
              poiSlug: "colosseum",
              text: "Empieza en el Coliseo para tu turno de apertura reservado por adelantado, por delante de las colas y del calor. Recorre ambos niveles para la vista completa de la arena, luego dirígete al Foro con la misma entrada combinada.",
              durationMin: 90,
            },
            {
              poiSlug: "roman-forum-palatine",
              text: "Entra luego en el Foro Romano y el Monte Palatino, usando la puerta más tranquila de la Via di San Gregorio. Sube primero el Palatino para la vista de conjunto de las ruinas, luego baja serpenteando por el Foro antes de que el sol esté en lo alto.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              text: "Come en Monti, a un corto paseo del Foro, en una trattoria o enoteca en torno a Piazza della Madonna dei Monti. Tómate tu tiempo, te has ganado el descanso tras una mañana de pie entre las ruinas.",
              durationMin: 90,
            },
            {
              text: "Sube el Capitolio hasta la Piazza del Campidoglio de Miguel Ángel y la terraza gratuita de detrás para un panorama sobre el Foro. Si tienes energía, los Museos Capitolinos de aquí albergan la loba de bronce original y una magnífica colección antigua.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Quédate en Monti para la noche, tomando algo en los escalones de la fuente de la plaza principal como los locales antes de cenar. Los bares de vino y las pequeñas trattorias del barrio están a unos pasos de tu hotel.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "El Vaticano y Castel Sant'Angelo",
          morning: [
            {
              poiSlug: "vatican-museums",
              text: "Sé de los primeros en los Museos Vaticanos para tu turno reservado de las 8h y ve directo a la Capilla Sixtina antes del apretujón. Los miércoles por la mañana son los más tranquilos gracias a que la audiencia papal atrae al gentío a la plaza.",
              durationMin: 150,
            },
            {
              poiSlug: "st-peters-basilica",
              text: "Camina hasta la Basílica de San Pedro, entrada gratuita con hombros y rodillas cubiertos. Paga el pequeño suplemento por la subida a la cúpula si tus piernas lo permiten, la vista sobre la nave y sobre Roma es la recompensa.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              text: "Come en Prati, a unas manzanas del Vaticano, donde los restaurantes son fiables y libres del recargo de los grupos turísticos que sufres justo al lado de San Pedro. Un buen sitio para bajar el ritmo antes de la visita de la tarde.",
              durationMin: 75,
            },
            {
              poiSlug: "castel-sant-angelo",
              text: "Camina hasta Castel Sant'Angelo, entre el Vaticano y el río, reservando en línea para saltarte la cola. Sube la rampa en espiral hasta la terraza de la azotea para un panorama con la cúpula de San Pedro en primer plano, luego cruza el Ponte Sant'Angelo bordeado de estatuas hacia el centro.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "trastevere-lanes",
              text: "Pásate a Trastevere para cenar, paseando por los callejones adoquinados a medida que se llenan los bares. Reserva mesa en una trattoria fuera de la plaza principal hacia las 20:30, y termina con una copa en Piazza di Santa Maria.",
              durationMin: 180,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Núcleo de las plazas: Panteón, Trevi, Navona",
          morning: [
            {
              poiSlug: "pantheon",
              text: "Empieza en el Panteón a la apertura de las 9h, en tu turno con hora si es fin de semana, para estar bajo el óculo antes del gentío. Toma un café en un bar histórico de la plaza, luego camina dos minutos hasta la siguiente parada.",
              durationMin: 75,
            },
            {
              poiSlug: "piazza-navona",
              text: "Contempla Piazza Navona y la Fontana de los Cuatro Ríos de Bernini sobre la huella de un estadio antiguo. Fotografíala, luego da un paso una calle fuera de la plaza para tomar algo a precios justos.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "campo-de-fiori",
              text: "Camina hasta Campo de' Fiori para el final del mercado de la mañana, cogiendo fruta y una porción de pizza bianca en el Forno Campo de' Fiori para una comida ligera. Luego métete en el cercano Gueto judío para una alcachofa frita si prefieres sentarte.",
              durationMin: 90,
            },
            {
              poiSlug: "trevi-fountain",
              text: "Da la vuelta hacia la Fontana di Trevi, aceptando que la tarde significa gentío, y lanza la moneda por encima del hombro izquierdo. Luego sube a la Plaza de España, a unos minutos, y hasta la iglesia de Trinità dei Monti para la vista gratuita sobre los tejados.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "spanish-steps",
              text: "Demórate alrededor de la Plaza de España y las elegantes calles comerciales de abajo mientras se va la luz, luego deriva de vuelta hacia el centro. Todo aquí queda a un corto paseo, así que pasea en vez de planificar.",
              durationMin: 60,
            },
            {
              text: "Reserva una cena de despedida en el Centro Storico o de vuelta en Monti, dándote un pequeño capricho en tu última comida romana. Termina con un helado de una gelatería seria, de las que guardan sus cubetas tapadas y bajas.",
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
        "Cuatro días son el punto dulce para una primera visita a Roma, que convierte la carrera de visitas en unas vacaciones de verdad. Los días uno a tres cubren lo esencial: la Roma antigua (Coliseo, Foro, Palatino), el Vaticano con Castel Sant'Angelo, y el núcleo de las plazas de Panteón, Trevi y Navona, cada uno hecho sin prisa. El cuarto día es la válvula de escape, construido en torno a la Galleria Borghese, que debe reservarse por adelantado en un turno con hora estricto y no se puede visitar sin él, seguida de los jardines de Villa Borghese y una larga y glotona tarde gastronómica por Trastevere o Testaccio. Esta duración encaja con viajeros que odian la marcha forzada, parejas y cualquiera cuyos vuelos encuadren mal el viaje. Para cuatro días recomendamos alojarse en Trastevere: has aceptado un ritmo más lento, y sus callejones y trattorias hacen que volver a casa cada noche sea lo mejor del día. Más allá de cuatro días, añade una excursión de un día a Tívoli por la Villa Adriana, o enlaza con Florencia en tren rápido en hora y media. Reserva el Coliseo, el Vaticano y sobre todo la Borghese con mucha antelación.",
      stayNeighborhoodSlug: "trastevere",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Roma antigua: Coliseo, Foro, Palatino",
          morning: [
            {
              poiSlug: "colosseum",
              text: "Empieza en el Coliseo para tu turno de apertura reservado, antes de las colas y el calor. Rodea ambos niveles, luego pasa al Foro con la misma entrada combinada.",
              durationMin: 90,
            },
            {
              poiSlug: "roman-forum-palatine",
              text: "Entra en el Foro Romano y el Monte Palatino con la misma entrada, usando la puerta más tranquila de San Gregorio. Sube primero el Palatino para la vista de conjunto, luego baja por el Foro antes de mediodía.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              text: "Come en Monti cerca del Foro, en un bar de vino o una trattoria en torno a Piazza della Madonna dei Monti. Baja el ritmo, la tarde es deliberadamente ligera el primer día.",
              durationMin: 90,
            },
            {
              text: "Sube el Capitolio para la Piazza del Campidoglio de Miguel Ángel y la terraza gratuita de detrás, dominando el Foro. Los Museos Capitolinos de aquí son el mejor añadido si quieres más Roma antigua.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Vuelve a Trastevere para cenar, instalándote en el barrio que llamas hogar. Reserva una trattoria fuera de la plaza principal y termina con una copa en Piazza di Santa Maria.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "El Vaticano y Castel Sant'Angelo",
          morning: [
            {
              poiSlug: "vatican-museums",
              text: "Sé de los primeros en los Museos Vaticanos para tu turno de las 8h y ve directo a la Capilla Sixtina antes de que se llenen las galerías. El miércoles es la mañana más tranquila, gracias a que la audiencia papal atrae al gentío a la plaza.",
              durationMin: 150,
            },
            {
              poiSlug: "st-peters-basilica",
              text: "Camina hasta la Basílica de San Pedro, gratuita con hombros y rodillas cubiertos. Paga la subida a la cúpula si tus piernas lo permiten, por la vista sobre la nave y sobre toda la ciudad.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              text: "Come en Prati cerca del Vaticano, donde la comida es fiable y libre del recargo de los grupos que sufres cerca de San Pedro. Una buena pausa antes de la tarde.",
              durationMin: 75,
            },
            {
              poiSlug: "castel-sant-angelo",
              text: "Camina hasta Castel Sant'Angelo, reservando en línea para saltarte la cola, y sube la rampa hasta la terraza de la azotea para el panorama sobre la cúpula de San Pedro. Cruza el Ponte Sant'Angelo bordeado de estatuas hacia el centro al atardecer.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "piazza-navona",
              text: "Pasea por Piazza Navona por la noche para la fuente de Bernini iluminada y la plaza en su momento más tranquilo. Toma un aperitivo a una calle de la plaza, donde los precios siguen sensatos.",
              durationMin: 60,
            },
            {
              text: "Cena de vuelta en Trastevere, paseando por los callejones de camino. Las buenas mesas se llenan hacia las 20:30 los fines de semana, así que reserva por adelantado.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Núcleo de las plazas: Panteón, Trevi, Navona",
          morning: [
            {
              poiSlug: "pantheon",
              text: "Empieza en el Panteón a la apertura de las 9h, en tu turno con hora si es fin de semana, para pillar el óculo antes del gentío. Café en un bar histórico de la plaza, luego sigue.",
              durationMin: 75,
            },
            {
              poiSlug: "campo-de-fiori",
              text: "Camina hasta Campo de' Fiori para el mercado de la mañana y una porción de picnic del Forno Campo de' Fiori. Métete en el Gueto judío cercano para una alcachofa frita si prefieres una comida sentado.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "trevi-fountain",
              text: "Dirígete a la Fontana di Trevi, lanza la moneda por encima del hombro izquierdo y acepta el gentío de la tarde. Luego sube a la Plaza de España y hasta Trinità dei Monti para la vista gratuita sobre los tejados.",
              durationMin: 90,
            },
            {
              poiSlug: "spanish-steps",
              text: "Pasea por las elegantes calles bajo la Plaza de España, mirando escaparates por la hilera de firmas de lujo de la Via dei Condotti. Todo aquí queda a un corto paseo, así que deriva en vez de marchar al paso.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Cena en el Centro Storico o de vuelta en Trastevere, reservando en cualquier sitio bien valorado. Termina con un helado de una gelatería seria, cubetas guardadas tapadas y bajas, no en volutas altas.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Borghese, parque de Villa Borghese y una tarde gastronómica",
          morning: [
            {
              poiSlug: "galleria-borghese",
              text: "Usa tu turno de dos horas con hora reservado por adelantado en la Galleria Borghese, llegando 15 minutos antes para el control de bolsas obligatorio. Las esculturas de Bernini y la sala de los Caravaggios son la cima de cualquier itinerario artístico romano, y dos horas bastan de verdad para la villa compacta.",
              durationMin: 120,
            },
            {
              poiSlug: "villa-borghese",
              text: "Desemboca en el parque de Villa Borghese de alrededor, gratuito y verde, y camina hasta la terraza del Pincio, en el borde oeste. La vista sobre Piazza del Popolo y los tejados hacia San Pedro es una de las más bellas de la ciudad, y gratuita.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "jewish-ghetto-food",
              text: "Dedica la tarde a comer: o el Gueto judío para los carciofi alla giudia y el baccala con un dulce de Boccione, o coge el metro a Testaccio por su mercado cubierto y sus trattorias de casquería de toda la vida. Ambos van de comida, no de atractivos.",
              durationMin: 120,
            },
            {
              text: "Quémalo con una vuelta lenta por Trastevere en la hora dorada, cuando los callejones se fotografían mejor y los excursionistas del día se han ido. Un helado o un aperitivo temprano te lleva hasta la cena.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Reserva una cena de despedida en Trastevere, gastando un poco más en tu última comida romana en una trattoria que hayas explorado antes. Cacio e pepe, carbonara o saltimbocca, esta es la comida para jugar a los clásicos.",
              durationMin: 120,
            },
            {
              text: "Termina con la última copa en Piazza di Santa Maria o en un tranquilo bar de callejón, a un corto paseo de tu cama. Ningún trayecto de vuelta que planear, que es todo el sentido de alojarse aquí durante cuatro días.",
              durationMin: 45,
            },
          ],
        },
      ],
    },
  ],
};

export default romeEs;
