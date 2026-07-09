import type { CityData } from "../types";

const budapestEs: CityData = {
  city: {
    slug: "budapest",
    name: "Budapest",
    country: "Hungría",
    countrySlug: "hungary",
    lat: 47.4979,
    lng: 19.0402,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "BUD",
    airportToCenter:
      "El autobús exprés 100E del aeropuerto llega directo a Deak Ferenc ter, en el centro, en unos 40 minutos por alrededor de 2,20 EUR (2200 HUF). Compra el billete específico 100E en la máquina de la parada; un billete sencillo normal no es válido en esta línea.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [8],
    monthlyNotes: {
      1: "Frío y a menudo gris, con máximas en torno a 2C y mínimas bajo cero, pero los baños termales están en su momento más mágico, con el vapor elevándose de las piscinas exteriores. Las tarifas hoteleras tocan su mínimo anual y los grandes monumentos quedan casi vacíos una vez que cierran los mercados navideños el 1 de enero.",
      2: "Todavía helador, tranquilo y barato, el último mes completo antes de que vuelvan los precios de primavera. Los baños Szechenyi y Gellert son el refugio evidente; prepárate para mínimas en torno a menos 2C y pocas horas de luz.",
      3: "Los días trepan hacia los 12C y aparecen los primeros eventos vinícolas de primavera en los bares de vinos y las bodegas. Las aglomeraciones se mantienen ligeras casi todo el mes y las habitaciones salen bastante más baratas que a partir de abril.",
      4: "Primavera de verdad, en torno a 17C, con la floración en la isla Margarita y las primeras terrazas de barcos por el río y de ruin bars que reabren. El fin de semana de Pascua se anima, así que reserva la visita al Parlamento con antelación si tus fechas coinciden.",
      5: "Uno de los dos mejores meses, con máximas cercanas a 22C, mucha luz y terrazas llenas a lo largo del Danubio. Los precios alcanzan los máximos de temporada media y la ciudad se llena para el puente de Pentecostés, así que reserva pronto.",
      6: "Cálido, alrededor de 26C, con largas tardes y las terrazas de vino y cerveza artesana a pleno rendimiento. Las aglomeraciones crecen de forma constante pero se quedan por debajo del pico de agosto; ve antes de que llegue el calor de verdad.",
      7: "Caluroso, en torno a 29C, y concurrido, con las piscinas al aire libre y la brisa del Danubio refrescando el ambiente. Haz temprano los lugares expuestos al sol como la colina Gellert y el Bastión de los Pescadores, y luego repliégate a un baño con sombra o una terraza por la tarde.",
      8: "El mes que hay que evitar: pico de calor de 29C, la mayor afluencia del año y el festival Sziget aterrizando en la isla Obuda a mediados de agosto, que inunda la ciudad de 400.000 visitantes y dispara las tarifas de las habitaciones. Si vienes ahora, reserva con mucha antelación y planea tardes en interiores o junto al río.",
      9: "Uno de los mejores meses, con máximas en torno a 24C, aglomeraciones que se disipan tras la primera semana y eventos vinícolas de vendimia en las bodegas. Los precios se aflojan; es la alternativa inteligente al verano.",
      10: "Días frescos de 17C y fuerte color otoñal en la colina Gellert y la isla Margarita. El número de turistas cae después de mediados de mes y las tarifas hoteleras lo siguen, mientras que los baños sientan especialmente bien a medida que refresca el aire.",
      11: "Gris y frío, con máximas en torno a 8C, el tramo más tranquilo del año hasta que abren los mercados navideños a finales de noviembre en Vorosmarty ter y ante la basílica de San Esteban. Finales de noviembre es un buen punto medio: todo el ambiente de mercado sin la densidad de diciembre.",
      12: "Los mercados navideños de Vorosmarty ter y frente a la basílica de San Esteban van de finales de noviembre a principios de enero y atraen fuertes aglomeraciones de fin de semana, con la plaza de la basílica añadiendo un espectáculo de luces y una pista de hielo. Espera mínimas bajo cero, vino caliente por todas partes y tarifas de diciembre muy por encima de la norma invernal.",
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
    tagline: "Baños termales, grandes bulevares, ruin bars, precios bajos.",
    heroIntro:
      "Budapest se reparte a ambos lados del Danubio entre Buda, montañosa y con su castillo, y el lado de Pest, llano y grandioso, donde ocurre casi toda la vida. Es una de las capitales clásicas más baratas de Europa, y los baños termales, los ruin bars y el frente fluvial del Parlamento le dan una mezcla que ninguna otra ciudad iguala. Tres días cubren lo esencial a un ritmo humano; el truco está en programar temprano los miradores expuestos al sol y guardar los baños para cuando las piernas te fallen.",
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
      name: "Belvaros (Distrito V)",
      lat: 47.4979,
      lng: 19.0513,
      bestFor: ["first-time", "romantic"],
      vibe: "El corazón ribereño de Pest, que envuelve el Parlamento, la basílica de San Esteban y la calle comercial peatonal Vaci utca. Es el distrito más pulido y céntrico, accesible a pie hacia casi todo en el lado de Pest y a un puente del castillo de Buda. Animado y algo formal de día, se calma una vez que cierran las tiendas.",
      pros: [
        "El Parlamento, la basílica y el Puente de las Cadenas, todos a un corto paseo",
        "La mayor oferta de hoteles y acceso fácil al metro en las tres líneas",
        "No hace falta transporte para un viaje de 2 días",
      ],
      cons: [
        "Los restaurantes a lo largo de Vaci utca son trampas para turistas carísimas",
        "El ambiente menos local de todos los distritos céntricos",
        "Las tarifas de las habitaciones van un 20 a 30 por ciento por encima de los distritos periféricos",
      ],
    },
    {
      slug: "jewish-quarter",
      citySlug: "budapest",
      name: "Barrio Judío (Erzsebetvaros, Distrito VII)",
      lat: 47.4979,
      lng: 19.0662,
      bestFor: ["nightlife", "local", "budget"],
      vibe: "El antiguo barrio judío convertido en motor de la vida nocturna, hogar de la sinagoga de la calle Dohany y de los ruin bars en patios en ruinas. De día es arte urbano, café de tercera ola y panaderías kosher; al caer la noche es la escena de bares más densa de la ciudad. Céntrico, barato y ruidoso en el buen sentido.",
      pros: [
        "El Szimpla Kert y toda la escena de los ruin bars en tu puerta",
        "La mejor comida informal y el mejor café de la ciudad a precios locales",
        "Diez minutos a pie de la basílica y del río",
      ],
      cons: [
        "Ruido de bares en las calles principales hasta la madrugada los fines de semana",
        "Algunas manzanas están descuidadas y en plena reforma",
        "No es el distrito para acostarse pronto o para una estancia tranquila",
      ],
    },
    {
      slug: "castle-district",
      citySlug: "budapest",
      name: "Barrio del Castillo (Var, Distrito I)",
      lat: 47.4967,
      lng: 19.0347,
      bestFor: ["romantic", "first-time"],
      vibe: "La colina empedrada del lado de Buda que alberga el castillo de Buda, la iglesia de Matías y el Bastión de los Pescadores. Se vacía por completo una vez que los excursionistas se van a última hora de la tarde, y las vistas nocturnas sobre Pest son las mejores de la ciudad. Alojarse aquí significa tener los monumentos del lado del castillo para ti antes de que llegue la multitud.",
      pros: [
        "El castillo de Buda, la iglesia de Matías y el Bastión de los Pescadores a pie",
        "Tardes tranquilas, de verdad llenas de ambiente, una vez que se va la gente",
        "El mejor panorama de puesta de sol sobre el Danubio y el Parlamento",
      ],
      cons: [
        "Las calles empedradas en pendiente cuestan con equipaje o carrito",
        "Pocos supermercados y opciones limitadas de comida informal allá arriba en la colina",
        "Cruzas el río para casi toda la vida nocturna y las necesidades diarias",
      ],
    },
    {
      slug: "ujlipotvaros",
      citySlug: "budapest",
      name: "Ujlipotvaros (Distrito XIII)",
      lat: 47.5147,
      lng: 19.0509,
      bestFor: ["local", "family", "romantic"],
      vibe: "Una trama residencial y frondosa justo al norte del Parlamento, todo bloques de pisos Bauhaus, calles arboladas y bistrós de barrio. Aquí es donde viven de verdad los locales con opciones, y la escena de restaurantes y cafés lo refleja. El centro queda a 15 minutos a pie o a dos paradas de tranvía, y la isla Margarita está en la puerta.",
      pros: [
        "La mejor comida y los mejores cafés locales a precios honestos, no turísticos",
        "Calles tranquilas, llanas y aptas para carritos, y el paseo junto al río",
        "La isla Margarita y el Parlamento, ambos a un corto paseo",
      ],
      cons: [
        "Caminas o coges el tranvía para la mayoría de los grandes monumentos, aunque sea poco",
        "Tranquilo de noche si quieres vida nocturna en la puerta",
      ],
    },
    {
      slug: "jozsefvaros",
      citySlug: "budapest",
      name: "Jozsefvaros (Distrito VIII)",
      lat: 47.4889,
      lng: 19.0708,
      bestFor: ["budget", "local"],
      vibe: "Un distrito grande y mixto detrás del Gran Bulevar, áspero en sus bordes pero que se aburguesa rápido en torno al barrio de los museos y el Corvin Quarter. Alberga el Museo Nacional Húngaro y algunas de las habitaciones más baratas de la zona central de la ciudad. Desigual de una manzana a otra, pero mejora rápido y está bien comunicado.",
      pros: [
        "Los precios de habitación más bajos a distancia caminable del centro",
        "El Museo Nacional Húngaro y las grandes fachadas del Palace Quarter",
        "Buenas conexiones de metro y tranvía por todo el distrito",
      ],
      cons: [
        "Algunas manzanas hacia el borde exterior aún parecen descuidadas",
        "Menos monumentos que los distritos ribereños",
        "La calidad de las calles varía mucho de una manzana a la siguiente",
      ],
    },
  ],

  pois: [
    {
      slug: "szechenyi-chain-bridge",
      citySlug: "budapest",
      name: "Puente de las Cadenas Szechenyi",
      lat: 47.4988,
      lng: 19.0435,
      kind: "sight",
      needsBooking: false,
      tip: "Crúzalo al anochecer, cuando los leones y todo el vano se iluminan y el castillo brilla detrás; el extremo de Pest, cerca de Roosevelt ter, ofrece la mejor foto hacia Buda. Es gratis y está abierto las 24 horas, así que crúzalo tarde, cuando el trasiego de peatones del día ya se ha despejado.",
    },
    {
      slug: "hungarian-parliament",
      citySlug: "budapest",
      name: "Parlamento Húngaro",
      lat: 47.5072,
      lng: 19.0456,
      kind: "sight",
      needsBooking: true,
      tip: "El interior solo se visita con visita guiada y los turnos en inglés se agotan con días de antelación en temporada, así que compra en línea mucho antes de llegar en vez de jugártela en la taquilla. Elige un turno temprano, y fotografía el exterior desde el malecón de Batthyany ter, en el lado de Buda, para toda la fachada ribereña.",
    },
    {
      slug: "buda-castle",
      citySlug: "budapest",
      name: "Castillo de Buda",
      lat: 47.496,
      lng: 19.0397,
      kind: "sight",
      needsBooking: false,
      tip: "Los patios, murallas y terrazas son gratis y están abiertos todo el día, así que solo pagas si entras a la Galería Nacional o al Museo de Historia del interior. Evita la cola del funicular desde el Puente de las Cadenas y sube mejor por las escaleras del jardín Varkert Bazar o coge el autobús 16, ambos más rápidos y baratos.",
    },
    {
      slug: "fishermans-bastion",
      citySlug: "budapest",
      name: "Bastión de los Pescadores",
      lat: 47.5025,
      lng: 19.0347,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Las terrazas bajas son gratis y las pequeñas torres altas solo cobran entrada durante el día, así que llega antes de las 9h y recorrerás el nivel superior gratis con la vista del Parlamento para ti solo. Es el panorama de postal de Budapest; el amanecer y el final de la tarde son las dos ventanas sin aglomeraciones.",
    },
    {
      slug: "matthias-church",
      citySlug: "budapest",
      name: "Iglesia de Matías",
      lat: 47.5019,
      lng: 19.0343,
      kind: "sight",
      needsBooking: true,
      tip: "El tejado de tejas de colores es el reclamo y puedes admirarlo gratis desde fuera, pero el interior con sus muros pintados requiere entrada, así que compra en línea para saltarte la pequeña cola. Está justo al lado del Bastión de los Pescadores, así que combina los dos y hazlos a la apertura antes de que lleguen los grupos.",
    },
    {
      slug: "st-stephens-basilica",
      citySlug: "budapest",
      name: "Basílica de San Esteban",
      lat: 47.5008,
      lng: 19.054,
      kind: "sight",
      needsBooking: false,
      tip: "La entrada a la nave solo pide un donativo sugerido, pero la terraza panorámica de la cúpula cobra una pequeña tarifa y merece la pena, a la que se llega en ascensor más una corta subida de escaleras. Sube en la última hora antes del cierre para una luz más suave sobre los tejados de Pest y menos gente arriba.",
    },
    {
      slug: "szechenyi-baths",
      citySlug: "budapest",
      name: "Baños Termales Szechenyi",
      lat: 47.5186,
      lng: 19.0817,
      kind: "experience",
      needsBooking: true,
      tip: "Sale más barato entre semana que los fines de semana, y comprar en línea con cabina (no solo taquilla) te ahorra la cola de entrada y te da un sitio privado para cambiarte. Lleva tu propia toalla y chanclas para evitar las tarifas de alquiler, y ve a primera hora o después de las 17h para esquivar la avalancha del mediodía en las piscinas exteriores.",
    },
    {
      slug: "gellert-hill",
      citySlug: "budapest",
      name: "Colina Gellert y mirador de la Ciudadela",
      lat: 47.4869,
      lng: 19.0447,
      kind: "viewpoint",
      needsBooking: false,
      tip: "La subida desde el extremo de Buda del puente Isabel lleva unos 25 minutos y te recompensa con el panorama más amplio sobre ambas orillas y la Estatua de la Libertad. Ve por la mañana para fotos de Pest sin contraluz, lleva agua en verano porque el sendero está totalmente expuesto al sol, y el mirador en sí es gratis.",
    },
    {
      slug: "central-market-hall",
      citySlug: "budapest",
      name: "Mercado Central",
      lat: 47.4869,
      lng: 19.0586,
      kind: "food",
      needsBooking: false,
      tip: "Ve antes del mediodía por los productos frescos y el pimentón a precios de planta baja; los puestos de comida de arriba son más caros y están orientados a turistas, así que come langos en un sitio local más pequeño. Cierra pronto el sábado por la tarde y permanece cerrado el domingo, así que calcula tu visita y paga con tarjeta, porque no todos los puestos la aceptan.",
    },
    {
      slug: "dohany-street-synagogue",
      citySlug: "budapest",
      name: "Sinagoga de la calle Dohany",
      lat: 47.4956,
      lng: 19.0608,
      kind: "sight",
      needsBooking: true,
      tip: "Es la sinagoga más grande de Europa y la entrada incluye el jardín conmemorativo y el museo, pero las entradas tienen horario y se agotan a mediodía en temporada, así que reserva un turno temprano en línea. Cierra los sábados por el Shabat y en las festividades judías, así que comprueba la fecha, y viste con los hombros cubiertos.",
    },
    {
      slug: "szimpla-kert",
      citySlug: "budapest",
      name: "Szimpla Kert (ruin bar)",
      lat: 47.4977,
      lng: 19.0637,
      kind: "experience",
      needsBooking: false,
      tip: "El ruin bar original se disfruta mejor antes de las 20h, cuando puedes de verdad apreciar los patios de arte con material reciclado sin la avalancha nocturna ni la entrada de pago. Los domingos por la mañana se convierte en un mercado de productores con un ambiente muy distinto y tranquilo, que es la forma local de visitarlo.",
    },
    {
      slug: "shoes-on-the-danube",
      citySlug: "budapest",
      name: "Memorial de los Zapatos a Orillas del Danubio",
      lat: 47.5041,
      lng: 19.0447,
      kind: "sight",
      needsBooking: false,
      tip: "Los sesenta zapatos de hierro sobre el malecón recuerdan a los judíos fusilados y arrojados al río en 1944, y solo lleva diez minutos de recogimiento pero no debe hacerse con prisa. Está en el paseo de Pest entre el Puente de las Cadenas y el Parlamento, así que intégralo en ese paseo ribereño en vez de hacer un viaje aparte.",
    },
    {
      slug: "vaci-street",
      citySlug: "budapest",
      name: "Calle Vaci",
      lat: 47.4934,
      lng: 19.0537,
      kind: "sight",
      needsBooking: false,
      tip: "Tómatela como un paseo de paso de 15 minutos, no como un sitio para comer o comprar; los cafés cobran el doble y las casas de cambio de la calle dan algunos de los peores tipos de la ciudad. La moneda es el forinto, no el euro, así que paga en HUF, usa un cajero de un banco de verdad e ignora por completo las ventanillas de cambio de la calle.",
    },
    {
      slug: "margaret-island",
      citySlug: "budapest",
      name: "Isla Margarita",
      lat: 47.5266,
      lng: 19.0475,
      kind: "park",
      needsBooking: false,
      tip: "Este parque insular sin coches en mitad del Danubio es gratis y se disfruta mejor a pie o en bici de alquiler, con una fuente musical cerca del extremo sur que suena a cada hora en punto. Ve a última hora de la tarde, camina desde la parada de tranvía del puente Margarita y pilla el espectáculo de luces nocturno de la fuente si te quedas hasta después del anochecer en verano.",
    },
  ],

  itineraries: [
    {
      citySlug: "budapest",
      days: 2,
      summary:
        "Dos días bastan para los monumentos estrella de Budapest si te alojas céntrico y empiezas temprano, pero solo rozarás el lado local y los baños. El núcleo se divide con claridad por el río: la orilla de Pest tiene el Parlamento, la basílica, el Barrio Judío y el Mercado Central, mientras que la colina de Buda tiene el castillo, la iglesia de Matías y el Bastión de los Pescadores, todos a un puente de distancia. Instálate en Belvaros para que ambas mañanas empiecen a pie. La estructura que funciona es una jornada por orilla: el primer día para Pest y el Barrio Judío, el segundo para la colina del castillo de Buda y Gellert. Reserva la visita al Parlamento y la sinagoga de la calle Dohany en línea antes de llegar, porque las entradas con horario son la única amenaza real para una visita de 48 horas. Lo que sacrificas es una sesión de baños termales en condiciones, la isla Margarita y cualquier velada tranquila en un ruin bar, que es justo lo que compra un tercer día. Los precios son bajos según los estándares de Europa occidental, así que come bien; solo mantente lejos de Vaci utca y paga en forintos, no en euros.",
      stayNeighborhoodSlug: "belvaros",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Frente fluvial de Pest y el Barrio Judío",
          morning: [
            {
              poiSlug: "hungarian-parliament",
              text: "Empieza en el Parlamento Húngaro con una visita temprana en inglés reservada de antemano del interior y las joyas de la corona. Llega 15 minutos antes al centro de visitantes para pasar el control de seguridad.",
              durationMin: 90,
            },
            {
              poiSlug: "shoes-on-the-danube",
              text: "Camina hacia el sur por el malecón de Pest hasta el memorial de los Zapatos a Orillas del Danubio, una parada recogida de diez minutos, y luego sigue hasta el Puente de las Cadenas por el paseo.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "st-stephens-basilica",
              text: "Tira hacia el interior hasta la basílica de San Esteban, ve la nave y luego sube en ascensor y con una corta escalada hasta la terraza de la cúpula para el amplio panorama de Pest.",
              durationMin: 75,
            },
            {
              poiSlug: "dohany-street-synagogue",
              text: "Sigue hasta la sinagoga de la calle Dohany para una visita con horario de la sinagoga más grande de Europa y su jardín conmemorativo. Reserva el turno en línea la noche anterior para evitar que se agote a mediodía.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "szimpla-kert",
              text: "Adéntrate en el Barrio Judío y ve el Szimpla Kert antes de las 20h, mientras aún puedes apreciar los patios de arte reciclado, y luego recorre los bares de las calles de alrededor.",
              durationMin: 60,
            },
            {
              text: "Cena en Erzsebetvaros lejos de las franjas turísticas: las calles laterales en torno a Kazinczy utca hacen cocina húngara moderna y comida callejera donde una comida completa con una bebida se queda bien por debajo de 6000 HUF.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Colina del castillo de Buda y Gellert",
          morning: [
            {
              poiSlug: "fishermans-bastion",
              text: "Cruza el Puente de las Cadenas y sube al Bastión de los Pescadores antes de las 9h, cuando las torres altas son gratis y la vista del Parlamento al otro lado del río es solo tuya.",
              durationMin: 60,
            },
            {
              poiSlug: "matthias-church",
              text: "Entra justo al lado en la iglesia de Matías por el interior pintado con tu entrada, y luego recorre las tranquilas callejuelas del barrio del castillo antes de que lleguen los grupos.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "buda-castle",
              text: "Recorre los patios, terrazas y murallas gratuitos del castillo de Buda por las largas vistas del río, entrando a la Galería Nacional solo si quieres el arte. Come en un café allá arriba en la colina.",
              durationMin: 120,
            },
            {
              poiSlug: "gellert-hill",
              text: "Baja y sube la colina Gellert hasta el mirador de la Ciudadela para el panorama más amplio sobre ambas orillas y la Estatua de la Libertad. Lleva agua; el sendero está totalmente expuesto al sol.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "szechenyi-chain-bridge",
              text: "Vuelve a bajar al río y cruza el Puente de las Cadenas al anochecer, cuando los leones y todo el vano se iluminan y el castillo brilla detrás de ti.",
              durationMin: 45,
            },
            {
              text: "Termina con una cena de vuelta en Belvaros en una calle lateral, apartada de Vaci utca, no sobre ella, donde un clásico húngaro como el gulash o el pollo al pimentón con una copa de vino local mantiene la cuenta honesta.",
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
        "Tres días es la cantidad de tiempo justa para Budapest: suficiente para ambas orillas a un ritmo humano, más una larga tarde en un baño termal que convierte un viaje de turismo en un descanso de verdad. Dos días te obligan a hacer Pest y la colina del castillo a la carrera una detrás de otra y a saltarte los baños por completo; el tercer día añade Szechenyi, la isla Margarita y el tiempo de sentarte en un ruin bar sin mirar el reloj. Alójate en el Barrio Judío, céntrico y barato, con la mejor comida informal y la vida nocturna en la puerta. La forma del plan: el primer día para el frente fluvial de Pest y el Barrio Judío, el segundo para la colina del castillo de Buda y Gellert, el tercero para los baños, el mercado y la isla. Reserva dos cosas en línea antes de llegar: la visita al Parlamento y el turno de la sinagoga de la calle Dohany. Todo lo demás en Budapest recompensa el presentarse temprano en vez de pagar más, y pagar en forintos en vez de en euros.",
      stayNeighborhoodSlug: "jewish-quarter",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Frente fluvial de Pest y la basílica",
          morning: [
            {
              poiSlug: "hungarian-parliament",
              text: "Desde tu base en el Barrio Judío, coge el metro hasta el Parlamento para tu visita temprana reservada de antemano del interior y las joyas de la corona. Llega 15 minutos antes para el control de seguridad.",
              durationMin: 90,
            },
            {
              poiSlug: "shoes-on-the-danube",
              text: "Camina por el malecón de Pest hacia el sur hasta el memorial de los Zapatos a Orillas del Danubio, y luego sigue por el paseo hacia el Puente de las Cadenas.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "st-stephens-basilica",
              text: "Tira hacia el interior hasta la basílica de San Esteban por la nave y el panorama de la terraza de la cúpula sobre los tejados de Pest.",
              durationMin: 75,
            },
            {
              poiSlug: "szechenyi-chain-bridge",
              text: "Cruza el Puente de las Cadenas a pie por la vista clásica hacia el castillo de Buda, y luego vuelve sobre tus pasos para un café cerca de Roosevelt ter.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "szimpla-kert",
              text: "De vuelta en el Barrio Judío, ve el Szimpla Kert antes de la multitud tardía, y luego recorre los ruin bars y los sitios de cerveza artesana en torno a Kazinczy utca.",
              durationMin: 90,
            },
            {
              text: "Cena en una calle lateral de Erzsebetvaros: langos, pequeños platos húngaros modernos o un bistró, todo a un corto paseo de tu cama y suave para el presupuesto.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Colina del castillo de Buda y Gellert",
          morning: [
            {
              poiSlug: "fishermans-bastion",
              text: "Cruza a Buda y sube al Bastión de los Pescadores antes de las 9h por las torres altas gratuitas y el panorama del Parlamento sin aglomeraciones.",
              durationMin: 60,
            },
            {
              poiSlug: "matthias-church",
              text: "Visita la iglesia de Matías al lado por el interior pintado y el tejado de tejas, y luego recorre las tranquilas callejuelas del barrio del castillo a la apertura.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "buda-castle",
              text: "Explora los patios y terrazas gratuitos del castillo de Buda por las largas vistas del río y come en la colina, entrando a la Galería Nacional solo si te atrae el arte.",
              durationMin: 120,
            },
            {
              poiSlug: "gellert-hill",
              text: "Recorre la cresta hacia el sur y sube la colina Gellert hasta el mirador de la Ciudadela para el panorama más amplio sobre ambas orillas. Lleva agua en los meses cálidos.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "dohany-street-synagogue",
              text: "Vuelve a cruzar a Pest y, en un día que no sea sábado, haz una visita con horario a última hora de la tarde a la sinagoga de la calle Dohany y su jardín conmemorativo con tu entrada en línea.",
              durationMin: 75,
            },
            {
              text: "Cena cerca del Gran Bulevar, y luego una última copa tranquila en un bar de vinos del Barrio Judío que sirva tintos húngaros que no encontrarás en casa.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Baños, el mercado y la isla Margarita",
          morning: [
            {
              poiSlug: "central-market-hall",
              text: "Empieza en el Mercado Central antes del mediodía por el pimentón, los productos frescos y los puestos de la planta baja, y come langos aquí o cerca en vez de en los mostradores más caros de arriba.",
              durationMin: 75,
            },
            {
              poiSlug: "vaci-street",
              text: "Recorre toda Vaci utca de vuelta hacia el centro como un paseo de 15 minutos, ignorando las casas de cambio, y luego pasea por las calles en torno a Vorosmarty ter.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "szechenyi-baths",
              text: "Coge el metro hasta el Parque de la Ciudad y pasa la tarde en los baños termales Szechenyi. Reserva en línea con cabina, lleva tu propia toalla y chanclas, y ve una vez que se afloje el pico del mediodía.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              poiSlug: "margaret-island",
              text: "Refréscate en la isla Margarita a la vuelta, caminando desde la parada de tranvía del puente Margarita y pillando la fuente musical a la hora en punto cerca del extremo sur.",
              durationMin: 90,
            },
            {
              text: "Última cena en el Barrio Judío o al otro lado en Ujlipotvaros, ambos a un corto trayecto de tranvía y llenos de cocinas de barrio honestas.",
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
        "Cuatro días son más que suficientes para los monumentos de Budapest, y esa es la idea: el cuarto día convierte una carrera de monumentos en un viaje de verdad. Los días uno a tres cubren el frente fluvial de Pest, la colina del castillo de Buda y el Barrio Judío a un ritmo relajado; el cuarto día es uno lento construido en torno a una larga sesión de baños termales, la isla Margarita y el Parque de la Ciudad, sin prisa ni cola de entradas. Con tanto tiempo, sáltate el centro más apretado y alójate en Ujlipotvaros. Está a 15 minutos a pie o dos paradas de tranvía del Parlamento, más barato para habitaciones equivalentes, y sus bistrós y el paseo de la isla Margarita son la razón de ser del cuarto día. La lógica de una orilla por día sigue valiendo: mantén el castillo, la iglesia de Matías y Gellert juntos en el lado de Buda, mantén el Parlamento, la basílica y el Barrio Judío juntos en el lado de Pest, y no zigzaguees por el Danubio. Reserva de antemano la visita al Parlamento y la sinagoga de la calle Dohany. Si dudabas entre tres y cuatro días, el cuarto día relajado es el que recordarás.",
      stayNeighborhoodSlug: "ujlipotvaros",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Frente fluvial de Pest y la basílica",
          morning: [
            {
              poiSlug: "hungarian-parliament",
              text: "Baja a pie o en tranvía desde Ujlipotvaros hasta el Parlamento para tu visita temprana reservada de antemano del interior y las joyas de la corona, llegando con antelación para el control de seguridad.",
              durationMin: 90,
            },
            {
              poiSlug: "shoes-on-the-danube",
              text: "Sigue el malecón de Pest hacia el sur hasta el memorial de los Zapatos a Orillas del Danubio, y luego continúa caminando por el paseo hasta el Puente de las Cadenas.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "st-stephens-basilica",
              text: "Gira hacia el interior hasta la basílica de San Esteban por la nave y la vista de la terraza de la cúpula sobre Pest, con una comida en la plaza llena de cafés de enfrente.",
              durationMin: 90,
            },
            {
              poiSlug: "szechenyi-chain-bridge",
              text: "Cruza el Puente de las Cadenas a pie por la vista hacia el castillo, y luego pasea por el frente fluvial y Roosevelt ter antes de volver.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "szimpla-kert",
              text: "Métete en el Barrio Judío para el Szimpla Kert antes de la avalancha, y luego una vuelta por los ruin bars en torno a Kazinczy utca.",
              durationMin: 90,
            },
            {
              text: "Cena en Erzsebetvaros, y luego vuelve en tranvía a Ujlipotvaros para una última copa tranquila en uno de los bares de vinos del barrio.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Colina del castillo de Buda y Gellert",
          morning: [
            {
              poiSlug: "fishermans-bastion",
              text: "Cruza el río y sube al Bastión de los Pescadores antes de las 9h por las torres altas gratuitas y el panorama del Parlamento sin aglomeraciones.",
              durationMin: 60,
            },
            {
              poiSlug: "matthias-church",
              text: "Visita la iglesia de Matías al lado por el tejado de tejas y el interior pintado, y luego pasea por las callejuelas del barrio del castillo mientras siguen vacías.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "buda-castle",
              text: "Recorre las terrazas y murallas gratuitas del castillo de Buda por las largas vistas del río y come en la colina, entrando a la Galería Nacional solo si quieres el arte.",
              durationMin: 120,
            },
            {
              poiSlug: "gellert-hill",
              text: "Toma la cresta hacia el sur y sube la colina Gellert hasta el mirador de la Ciudadela para la vista más amplia sobre ambas orillas y la Estatua de la Libertad.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "szechenyi-chain-bridge",
              text: "Baja y cruza el Puente de las Cadenas al anochecer por el vano iluminado y el castillo brillando detrás de ti.",
              durationMin: 45,
            },
            {
              text: "Cena de vuelta en el lado de Pest, y luego un paseo lento a lo largo del frente fluvial iluminado antes del tranvía de vuelta a Ujlipotvaros.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Barrio Judío, el mercado y Vaci",
          morning: [
            {
              poiSlug: "dohany-street-synagogue",
              text: "Empieza en la sinagoga de la calle Dohany en un día que no sea sábado con tu turno de mañana reservado de antemano, disfrutando del jardín conmemorativo y el museo.",
              durationMin: 90,
            },
            {
              text: "Recorre el arte urbano y los patios del Barrio Judío, parando para un café y un dulce de panadería kosher en torno a Kazinczy utca antes de que apriete el día.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "central-market-hall",
              text: "Acércate al Mercado Central antes de su cierre temprano del sábado por el pimentón y los productos frescos de abajo, comiendo langos en un sitio local más pequeño en vez de los mostradores turísticos de arriba.",
              durationMin: 90,
            },
            {
              poiSlug: "vaci-street",
              text: "Pasea por Vaci utca de vuelta hacia Vorosmarty ter como un paseo de paso de 15 minutos, saltándote las casas de cambio, y luego mira las boutiques de las calles paralelas más tranquilas.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Vuelve a Ujlipotvaros para una cena temprana en un bistró de barrio, y luego camina por el paseo ribereño hacia el Parlamento en el momento en que se ilumina.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Baños, isla Margarita y Parque de la Ciudad",
          morning: [
            {
              poiSlug: "margaret-island",
              text: "Empieza despacio con una mañana en la isla Margarita, caminando o alquilando una bici en el extremo del puente Margarita y dando la vuelta al parque sin coches pasando la fuente musical y la vieja torre de agua.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "szechenyi-baths",
              text: "Pasa una larga tarde en los baños termales Szechenyi en el Parque de la Ciudad. Reserva una entrada en línea entre semana con cabina, lleva tu propia toalla y chanclas, e instálate una vez que decaiga el pico del mediodía.",
              durationMin: 210,
            },
          ],
          evening: [
            {
              text: "Pasea por el Parque de la Ciudad a la salida por el castillo de Vajdahunyad y la plaza de los Héroes iluminados al anochecer, un final gratis y fácil de la jornada relajada.",
              durationMin: 60,
            },
            {
              text: "Última cena de vuelta en Ujlipotvaros o al otro lado en el Barrio Judío, ambos a un corto trayecto de tranvía y mucho más baratos que las franjas turísticas ribereñas.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
  ],
};

export default budapestEs;
