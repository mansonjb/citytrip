import type { CityData } from "../types";

const madridEs: CityData = {
  city: {
    slug: "madrid",
    name: "Madrid",
    country: "España",
    countrySlug: "spain",
    lat: 40.4168,
    lng: -3.7038,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "MAD",
    airportToCenter:
      "La línea 8 del metro desde Barajas llega a Nuevos Ministerios en unos 30 min, pero ten en cuenta el suplemento de aeropuerto de 3 EUR que se añade al billete, así que calcula en torno a 4,50 a 5 EUR. Alternativas: el autobús Airport Express 24 horas hasta Atocha por unos 5 EUR, o el tren de cercanías C1 desde la T4 hacia las estaciones centrales.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [7, 8],
    monthlyNotes: {
      1: "Frío y seco, con máximas en torno a 10C y mañanas heladas, y la ciudad queda tranquila tras la cabalgata de los Reyes Magos del 6 de enero, el mayor evento infantil de la Navidad española. Las tarifas de los hoteles están en su mínimo anual, y los horarios gratuitos de tarde en el Prado y el Reina Sofía se disfrutan deliciosamente vacíos.",
      2: "Todavía frío, cerca de 12C, pero a menudo luminoso y soleado, con el menor número de turistas del año y las camas más baratas. Un buen mes para el triángulo del arte: aprovecha las dos últimas horas gratuitas en el Prado y el Reina Sofía sin las colas de primavera.",
      3: "Las máximas suben hacia los 16C y las terrazas reabren en las tardes soleadas, aunque los atardeceres siguen frescos. Si la Semana Santa cae a finales de marzo, espera solemnes procesiones y un repunte de visitantes nacionales y de precios hoteleros la semana previa a la Pascua.",
      4: "Uno de los mejores meses, a 18C, verde y templado, con el Retiro en flor y paseos cómodos durante todo el día. La Pascua suele caer aquí, así que las procesiones de Semana Santa y los precios más altos pueden afectar la semana en que caiga; reserva alrededor o dentro de ella a conciencia.",
      5: "Madrid en su plenitud: cálido a 23C, luz larga, y la fiesta de San Isidro a mediados de mayo llena la ciudad de conciertos, verbenas y locales con trajes tradicionales por La Latina y Las Vistillas. Las multitudes y los precios suben, así que reserva el Prado y el Palacio Real con antelación.",
      6: "Cálido a caluroso a 29C, con tardes largas y la temporada de terrazas en pleno apogeo, antes de que llegue el verdadero horno. Los grandes museos están abarrotados, así que aprovecha los horarios gratuitos de tarde o la apertura de las 9h, y reserva las horas de calor para la sombra.",
      7: "Caluroso y seco, habitualmente por encima de 34C, y principios de julio trae el Orgullo, el enorme Orgullo de Madrid en torno a Chueca, uno de los mayores de Europa, que llena el centro durante una semana. Visita antes del mediodía, resguárdate del calor de 15h a 19h, y cena tarde como todo el mundo.",
      8: "El mes más vacío y caluroso: las máximas empujan los 35C y muchos bares y restaurantes familiares cierran por vacaciones cuando los madrileños se van a la costa. El programa cultural Veranos de la Villa mantiene algunos conciertos y cines al aire libre, pero es el mes a evitar, salvo que las camas baratas compensen el calor.",
      9: "El calor se suaviza a lo largo del mes, de unos 30C a algo agradable, la ciudad se vuelve a llenar cuando regresan los locales, y las terrazas siguen animadas hasta bien entrada la noche. Las multitudes se relajan tras la primera semana, lo que hace de mediados a finales de septiembre quizá la mejor ventana del año.",
      10: "Días templados cerca de 22C, luz dorada en el Retiro, y las primeras lluvias suaves que vuelven a finales de mes. Las multitudes se aclaran notablemente y la relación calidad-precio de los hoteles mejora, una sólida opción de entretemporada para recorrer todo el centro con comodidad.",
      11: "Fresco a 15C, con más días grises y húmedos, pero claros entre frentes y los grandes lugares más tranquilos del otoño. Vuelven los precios de temporada baja y a menudo puedes reservar el Palacio Real o una visita al Bernabéu con solo unos días de antelación.",
      12: "Frío cerca de 10C pero festivo, con las luces tendidas sobre la Gran Vía y el centro, y la Puerta del Sol como epicentro de la Nochevieja, cuando la gente come doce uvas con las doce campanadas. Tranquilo hasta el tramo de Navidad a Año Nuevo, cuando las tarifas suben y las tardes gratuitas de los museos atraen a las multitudes locales.",
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
    tagline: "Arte de talla mundial, plazas de los Austrias, y tapas comidas tarde y de pie.",
    heroIntro:
      "Madrid te ofrece uno de los mayores triángulos del arte del mundo, un casco antiguo de los Austrias compacto, y la cultura de comer y beber más incansable de España, todo en un centro que se cruza a pie de un extremo a otro. Tres días es la duración honesta: uno para el Prado, el Reina Sofía y el Thyssen, uno para el casco viejo real, y uno para un barrio animado. Ven en primavera o en otoño, reserva la tarde gratuita del Prado o el Palacio Real con antelación, y cena a las 22h como un local.",
    accent: { from: "#C42E3A", to: "#E8A33D", ink: "#6E1F28" },
    neighborhoodSlugs: ["centro", "la-latina", "malasana", "chueca", "salamanca"],
    nearbyCitySlugs: ["seville", "barcelona"],
  },

  neighborhoods: [
    {
      slug: "centro",
      citySlug: "madrid",
      name: "Centro (Sol y el corazón de los Austrias)",
      lat: 40.4155,
      lng: -3.7074,
      bestFor: ["first-time", "family"],
      vibe: "El corazón histórico en torno a la Puerta del Sol, la Plaza Mayor y el Palacio Real, donde cada monumento estrella queda a diez minutos a pie. Es el Madrid de las postales, animado día y noche, con las tiendas y teatros de la Gran Vía a unas calles al norte. Pagas los precios del centro y aceptas el ruido a cambio de tener todo el casco antiguo en la puerta.",
      pros: [
        "Camina a la Plaza Mayor, el Palacio Real, Sol y la Gran Vía sin transporte",
        "La zona mejor comunicada, con el metro y el intercambiador de Cercanías de Sol debajo",
        "Densa en bares de tapas, mercados y lugares a cada paso",
      ],
      cons: [
        "La zona más turística, con carteristas en torno a Sol y la Gran Vía",
        "El ruido de la calle se alarga hasta tarde, mala elección para el sueño ligero",
        "Los restaurantes de las grandes plazas tienen precios pensados para los visitantes",
      ],
    },
    {
      slug: "la-latina",
      citySlug: "madrid",
      name: "La Latina",
      lat: 40.4109,
      lng: -3.7108,
      bestFor: ["local", "nightlife", "romantic"],
      vibe: "El barrio más antiguo al sur de la Plaza Mayor es el feudo de las tapas de Madrid, un enredo de callejones medievales en torno a la Cava Baja y las calles del mercado de El Rastro. El domingo es su gran día, cuando el rastro se derrama en los bares para una larga sesión de vermú y tapas. Lo bastante céntrico para hacerlo todo a pie, con mucha más vida de barrio que Sol.",
      pros: [
        "La Cava Baja y la Cava Alta reúnen la mejor ruta de bares de tapas de la ciudad",
        "Diez minutos a pie hasta la Plaza Mayor y el Palacio Real",
        "El mercado de El Rastro los domingos y la cultura del vermú en la puerta",
      ],
      cons: [
        "Ruidoso de jueves a domingo por la noche en torno a las calles de bares",
        "Los edificios antiguos suponen habitaciones pequeñas y escaleras empinadas o sin ascensor",
        "Las multitudes del rastro de los domingos atascan las calles hasta media tarde",
      ],
    },
    {
      slug: "malasana",
      citySlug: "madrid",
      name: "Malasana",
      lat: 40.4258,
      lng: -3.7038,
      bestFor: ["nightlife", "local", "budget"],
      vibe: "La cuna de la Movida de los años ochenta es hoy el barrio más moderno de Madrid, lleno de tiendas vintage, cafés de tercera ola, bares indie y pequeñas cocinas en torno a la Plaza del Dos de Mayo. Es joven, caminable y bullicioso hasta tarde, a un corto paseo al norte de la Gran Vía y el centro. Buena relación calidad-precio para la zona, si consigues dormir a pesar de la banda sonora del fin de semana.",
      pros: [
        "La mejor escena independiente de bares, cafés y compras de la ciudad",
        "A pie hasta la Gran Vía y el centro en diez minutos",
        "Camas de mejor precio que Sol o Salamanca con la misma centralidad",
      ],
      cons: [
        "Muy ruidoso las noches de fin de semana en torno a las plazas",
        "Pocos lugares convencionales que ver en la zona inmediata",
        "Popular entre un público de fiesta, así que las calles pueden estar alborotadas a las 3h",
      ],
    },
    {
      slug: "chueca",
      citySlug: "madrid",
      name: "Chueca",
      lat: 40.4224,
      lng: -3.6968,
      bestFor: ["nightlife", "local", "romantic"],
      vibe: "El barrio con orgullo LGTBQ+ de Madrid es una cuadrícula elegante y vivaz de tiendas de diseño, vinotecas y restaurantes en torno a la Plaza de Chueca, y el epicentro del enorme Orgullo de principios de julio. Es refinado y sociable más que áspero, a distancia a pie de la Gran Vía y el Thyssen. Céntrico, divertido, y con sensación de seguridad hasta bien entrada la noche.",
      pros: [
        "Excelentes restaurantes, coctelerías y boutiques apiñados unos junto a otros",
        "Camina a la Gran Vía, el Thyssen y el Retiro en quince minutos",
        "Vida nocturna acogedora y animada que alcanza su punto álgido durante el Orgullo de julio",
      ],
      cons: [
        "El ruido del fin de semana y de la semana del Orgullo es intenso en torno a la plaza",
        "Una de las zonas céntricas más caras tanto para hoteles como para comer",
        "Pocos lugares de renombre dentro del propio barrio",
      ],
    },
    {
      slug: "salamanca",
      citySlug: "madrid",
      name: "Salamanca",
      lat: 40.4302,
      lng: -3.6795,
      bestFor: ["romantic", "family"],
      vibe: "La elegante cuadrícula al noreste del Retiro es el distrito de lujo de Madrid, hogar de la milla de las grandes marcas a lo largo de la Calle Serrano, restaurantes refinados y bulevares anchos y tranquilos. Cambia el carácter del casco antiguo por espacio, calma y seguridad, a un corto paseo o metro del triángulo del arte y del parque. Alójate aquí por el refinamiento y una buena noche de sueño antes que por el ambiente de los adoquines.",
      pros: [
        "Calles tranquilas, seguras y elegantes con compras de alta gama en Serrano",
        "A un corto paseo del Retiro y el Prado, además de buenas conexiones de metro",
        "Gastronomía fiable y de alta gama sin el alboroto del casco antiguo",
      ],
      cons: [
        "Hoteles, tiendas y restaurantes caros en todos los frentes",
        "Se siente más formal y residencial que animado por la noche",
        "A 20 minutos a pie o un salto de metro del viejo corazón de los Austrias",
      ],
    },
  ],

  pois: [
    {
      slug: "prado-museum",
      citySlug: "madrid",
      name: "Museo del Prado",
      lat: 40.4138,
      lng: -3.6921,
      kind: "museum",
      needsBooking: true,
      tip: "La entrada es gratuita en las dos últimas horas (de lunes a sábado 18:00-20:00, domingo 17:00-19:00), pero las colas se forman mucho antes, así que llega 30 a 45 minutos antes. Si vas de pago, reserva una franja horaria en línea, ve directo a Las Meninas de Velázquez y a las pinturas negras de Goya primero, y calcula dos a tres horas como mínimo para lo imprescindible.",
    },
    {
      slug: "reina-sofia",
      citySlug: "madrid",
      name: "Museo Reina Sofía",
      lat: 40.4079,
      lng: -3.6946,
      kind: "museum",
      needsBooking: true,
      tip: "El Guernica es la razón para venir, y vive en la Sala 205. La entrada es gratuita las tardes entre semana (lunes y de miércoles a sábado 19:00-21:00) y el domingo por la tarde desde las 12:30, pero cierra los martes por completo; reserva en línea para saltarte la cola, ve primero al lienzo de Picasso, y luego avanza hacia Dalí y Miró.",
    },
    {
      slug: "thyssen-bornemisza",
      citySlug: "madrid",
      name: "Museo Thyssen-Bornemisza",
      lat: 40.4160,
      lng: -3.6948,
      kind: "museum",
      needsBooking: true,
      tip: "El tercer vértice del triángulo del arte llena los huecos que dejan el Prado y el Reina Sofía: impresionistas, maestros antiguos y obras del siglo XX en una colección abarcable a pie. Es gratuito los lunes por la tarde (12:00-16:00) para la colección permanente; reserva en línea el resto de días, empieza por la planta superior y baja cronológicamente para ahorrar las piernas.",
    },
    {
      slug: "royal-palace",
      citySlug: "madrid",
      name: "Palacio Real (Palacio Real)",
      lat: 40.4179,
      lng: -3.7143,
      kind: "sight",
      needsBooking: true,
      tip: "Reserva en línea para saltarte la larga cola de taquilla, y consulta antes la web porque el palacio cierra al público sin apenas aviso por ceremonias de Estado. Apunta a la apertura de las 10h, haz los salones de gala y la Real Armería, y luego cruza a la catedral de la Almudena, gratuita, y a los Jardines de Sabatini al lado.",
    },
    {
      slug: "retiro-park",
      citySlug: "madrid",
      name: "Parque del Retiro y Palacio de Cristal",
      lat: 40.4152,
      lng: -3.6844,
      kind: "park",
      needsBooking: false,
      tip: "Gratuito y abierto desde el amanecer; entra por el lado de la Puerta de Alcalá y camina hasta el estanque de las barcas, donde las barcas de remos cuestan unos 6 EUR por 45 minutos, con las colas más cortas antes del mediodía. El Palacio de Cristal, un pabellón de vidrio que acoge instalaciones gratuitas de arte contemporáneo, se encuentra más al fondo del parque y es lo que no hay que perderse.",
    },
    {
      slug: "plaza-mayor",
      citySlug: "madrid",
      name: "Plaza Mayor",
      lat: 40.4155,
      lng: -3.7074,
      kind: "sight",
      needsBooking: false,
      tip: "La gran plaza porticada del siglo XVII es gratuita y se disfruta mejor a primera hora de la mañana o después de cenar, cuando el gentío del día se disipa. No te sientes en las terrazas de los cafés de la propia plaza, donde el recargo es brutal; toma mejor el bocado callejero local, un bocadillo de calamares, en un bar de la cercana Calle Botoneras.",
    },
    {
      slug: "puerta-del-sol",
      citySlug: "madrid",
      name: "Puerta del Sol",
      lat: 40.4169,
      lng: -3.7033,
      kind: "sight",
      needsBooking: false,
      tip: "El centro literal de España, marcado por el Kilómetro Cero en el pavimento, y la plaza donde la gente come doce uvas con las doce campanadas de Nochevieja. Es un nudo de tránsito y orientación más que un sitio para demorarse, así que pasa, encuentra la estatua del oso y el madroño, y lleva el bolso cerrado entre la multitud.",
    },
    {
      slug: "gran-via",
      citySlug: "madrid",
      name: "Gran Vía",
      lat: 40.4200,
      lng: -3.7025,
      kind: "sight",
      needsBooking: false,
      tip: "El gran bulevar de principios del siglo XX de Madrid se recorre mejor al anochecer, cuando los escaparates y la cúpula del edificio Metrópolis se iluminan. Es una calle de primera para los carteristas, así que lleva los bolsos cerrados y los móviles lejos del borde de la acera; para la vista clásica desde las alturas, la terraza del cercano Círculo de Bellas Artes cobra unos 5 EUR.",
    },
    {
      slug: "mercado-de-san-miguel",
      citySlug: "madrid",
      name: "Mercado de San Miguel",
      lat: 40.4153,
      lng: -3.7090,
      kind: "food",
      needsBooking: false,
      tip: "El mercado restaurado de hierro y cristal junto a la Plaza Mayor es una nave de tapas gourmet, más pulida y más cara que los bares locales, así que tómalo como una parada para picar y no como una comida completa. Ve hacia el mediodía o a media tarde para evitar la aglomeración de las 20h, compra dos o tres tapas en distintos puestos, y come de pie, ya que hay pocos asientos.",
    },
    {
      slug: "temple-of-debod",
      citySlug: "madrid",
      name: "Templo de Debod",
      lat: 40.4240,
      lng: -3.7176,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Este auténtico templo del antiguo Egipto, regalado a España y reconstruido en un parque, es el rincón clásico y gratuito del atardecer en Madrid, con la piedra reflejada en su estanque y el cielo sobre la Casa de Campo al fondo. Ven 30 minutos antes de la puesta de sol para conseguir un buen sitio en la baranda; se llena, y el interior tiene entrada gratuita por franjas limitada (cerrado los lunes).",
    },
    {
      slug: "el-rastro",
      citySlug: "madrid",
      name: "Rastro de El Rastro",
      lat: 40.4085,
      lng: -3.7075,
      kind: "experience",
      needsBooking: false,
      tip: "El enorme rastro al aire libre de Madrid solo se celebra los domingos por la mañana, más o menos de 9h a 15h, desbordándose por la Calle Ribera de Curtidores y los callejones de La Latina. Ven antes de las 11h para evitar la aglomeración, guarda los objetos de valor en un bolsillo delantero porque es un terreno de primera para carteristas, y termina con un vermú en un bar de la Cava Baja como los locales.",
    },
    {
      slug: "plaza-de-cibeles",
      citySlug: "madrid",
      name: "Plaza de Cibeles",
      lat: 40.4192,
      lng: -3.6931,
      kind: "sight",
      needsBooking: false,
      tip: "El cruce de la fuente y el palacio es un hito gratuito, y los aficionados del Real Madrid se reúnen en la fuente de Cibeles para celebrar los títulos. Sube al Palacio de Cibeles a su mirador en la azotea (unos 3 EUR) para una amplia vista por el Paseo del Prado; queda en el trayecto a pie entre el Prado y la Gran Vía, así que encájalo por el camino.",
    },
    {
      slug: "cava-baja-tapas",
      citySlug: "madrid",
      name: "Ruta de tapas por la Cava Baja (La Latina)",
      lat: 40.4113,
      lng: -3.7098,
      kind: "food",
      needsBooking: false,
      tip: "La Cava Baja es la mejor calle de tapas de Madrid, una hilera de tabernas antiguas donde pides uno o dos platos y una bebida en cada una, y luego sigues. Empieza sobre las 21h, cuando las cocinas cogen su ritmo, quédate de pie en la barra en vez de coger una mesa, y prueba los clásicos: gambas al ajillo, croquetas y una caña de cerveza.",
    },
    {
      slug: "santiago-bernabeu",
      citySlug: "madrid",
      name: "Tour del estadio Santiago Bernabéu",
      lat: 40.4531,
      lng: -3.6883,
      kind: "experience",
      needsBooking: true,
      tip: "El tour del estadio y el museo del Real Madrid es una visita autoguiada que recorre los asientos a pie de campo, los vestuarios y la sala de trofeos; reserva en línea una franja horaria, ya que las entradas en taquilla se agotan los fines de semana de partido. Está cerrado a las visitas los días de partido y a menudo la víspera, así que consulta el calendario de encuentros antes de ir; el metro te deja en Santiago Bernabéu en la línea 10.",
    },
  ],

  itineraries: [
    {
      citySlug: "madrid",
      days: 2,
      summary:
        "Dos días cubren lo esencial de Madrid, pero es una carrera y notarás la compresión, porque la ciudad de verdad quiere tres. En 48 horas puedes hacer el triángulo del arte el primer día (el Prado, luego el Reina Sofía por el Guernica, con el Retiro entre medias) y el casco antiguo de los Austrias el segundo día (el Palacio Real, la Plaza Mayor, Sol y San Miguel), cerrando cada noche con tapas en La Latina. Lo que rompe una escapada corta es el timing: aprovecha las dos últimas horas gratuitas del Prado o reserva una franja, y reserva el Palacio Real en línea para que una cola no te devore la mañana. Alójate en Centro para que ambos días arranquen a pie y la cena esté siempre a un paso. Lo que sacrificas a este ritmo es el Thyssen, un día entero de barrio, Salamanca, el Bernabéu y cualquier excursión, así que encaja en un fin de semana o un primer contacto. Si puedes sumar un tercer día, tómalo: tres días es cuando Madrid deja de parecer un sprint.",
      stayNeighborhoodSlug: "centro",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "El triángulo del arte: Prado, Retiro, Reina Sofía",
          morning: [
            {
              poiSlug: "prado-museum",
              text: "Empieza en el Prado para la apertura de las 10h con una franja horaria reservada, yendo directo a Las Meninas de Velázquez y a las pinturas negras de Goya antes de que las salas se llenen. Dos a tres horas cubren las obras maestras estrella sin marcha forzada.",
              durationMin: 165,
            },
          ],
          afternoon: [
            {
              text: "Come por el lado del Paseo del Prado o subiendo hacia Antón Martín, y luego mantén la comida ligera porque la cena se toma tarde en Madrid. Un menú del día en un bar de barrio es la opción de calidad-precio.",
              durationMin: 75,
            },
            {
              poiSlug: "retiro-park",
              text: "Entra en el parque del Retiro por detrás del Prado para pasar la tarde, coge una barca en el estanque y regresa hasta el pabellón de vidrio del Palacio de Cristal. Es el respiro verde entre dos grandes museos.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "reina-sofia",
              text: "Coge el Reina Sofía en su ventana gratuita de tarde entre semana (19:00-21:00, cerrado los martes), yendo directo a la Sala 205 por el Guernica de Picasso antes de rodear hacia Dalí y Miró. Llega un poco antes, ya que la franja gratuita atrae cola.",
              durationMin: 90,
            },
            {
              poiSlug: "cava-baja-tapas",
              text: "Camina hasta La Latina para una ruta de tapas por la Cava Baja a partir de las 21h, pidiendo un plato y una bebida en cada bar antes de seguir. Gambas al ajillo, croquetas y una caña, de pie en la barra como los locales.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "El Madrid de los Austrias: Palacio Real, Plaza Mayor, Sol, San Miguel",
          morning: [
            {
              poiSlug: "royal-palace",
              text: "Está en el Palacio Real para la apertura de las 10h con la entrada reservada, comprobando la víspera que no cierra por un acto de Estado. Haz los salones de gala y la Real Armería, y luego sal a la catedral de la Almudena, gratuita, y a los Jardines de Sabatini al lado.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "mercado-de-san-miguel",
              text: "Pica el almuerzo en el Mercado de San Miguel junto a la Plaza Mayor, comprando dos o tres tapas en distintos puestos y comiendo de pie. Es más caro que un bar local, así que tómalo como una degustación y no como una comida sentada completa.",
              durationMin: 60,
            },
            {
              poiSlug: "plaza-mayor",
              text: "Pasa a la Plaza Mayor para admirar la plaza porticada del siglo XVII, y luego enhebra los callejones antiguos hasta la Puerta del Sol y la marca del Kilómetro Cero en el centro de España. Lleva el bolso cerrado entre la multitud aquí.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "temple-of-debod",
              text: "Sube al Templo de Debod 30 minutos antes de la puesta de sol para el mirador clásico y gratuito de Madrid, la piedra egipcia antigua reflejada en su estanque sobre el fondo del cielo por encima de la Casa de Campo. Coge sitio en la baranda pronto, porque se llena.",
              durationMin: 60,
            },
            {
              poiSlug: "gran-via",
              text: "Baja hacia la Gran Vía cuando el bulevar se ilumina, recorriendo sus fachadas de principios del siglo XX hacia la cúpula del Metrópolis. Cena en el centro o de vuelta en La Latina, manteniendo móviles y bolsos a salvo en esta calle de carteristas.",
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
        "Sí, tres días es la duración adecuada para Madrid, y es lo que recomendamos para una primera visita. Tres días permiten dividir el viaje con limpieza: el triángulo del arte se lleva un día entero (el Prado, el Reina Sofía por el Guernica, y el Thyssen para llenar los huecos), el viejo corazón de los Austrias tiene su propio día (el Palacio Real, la Plaza Mayor, Sol, San Miguel, y el Templo de Debod al atardecer), y un barrio animado se lleva el tercero (La Latina, El Rastro si es domingo, y Malasana). Comes bien en tres barrios, encajas tanto las tardes gratuitas de los museos como noches de tapas tardías de verdad, y aún avanzas a un ritmo que deja tiempo para sentarse en una plaza. Lo que todavía se cae es Salamanca, el Bernabéu, y una excursión a Toledo o Segovia, que es justo lo que suma un cuarto día. Alójate en Malasana por sus bares independientes, su café y su relación calidad-precio, sin dejar de estar a diez minutos del centro. Aprovecha las dos últimas horas gratuitas del Prado o reserva una franja, y reserva el Palacio Real en línea antes de salir.",
      stayNeighborhoodSlug: "malasana",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "El triángulo del arte: Prado, Retiro, Reina Sofía, Thyssen",
          morning: [
            {
              poiSlug: "prado-museum",
              text: "Abre el viaje en la franja de las 10h del Prado, reservada con antelación, y ve directo a Las Meninas y a las pinturas negras de Goya antes de que se forme la multitud. Cuenta con dos horas y media a tres para las obras maestras; menos y las dejas atrás a la carrera.",
              durationMin: 165,
            },
          ],
          afternoon: [
            {
              poiSlug: "thyssen-bornemisza",
              text: "Come en el Paseo del Prado, y luego coge el Thyssen-Bornemisza cruzando el bulevar, gratuito los lunes por la tarde para la colección permanente. Empieza en la planta superior con los maestros antiguos y baja cronológicamente hasta los impresionistas y el siglo XX.",
              durationMin: 120,
            },
            {
              poiSlug: "retiro-park",
              text: "Entra en el Retiro por detrás de los museos para el aire de la última hora de la tarde, cogiendo una barca en el estanque y dando la vuelta hasta el Palacio de Cristal. Descansa las piernas entre los dos bloques de arte del día.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "reina-sofia",
              text: "Coge el Reina Sofía en su ventana gratuita de tarde (19:00-21:00, cerrado los martes), yendo primero a la Sala 205 por el Guernica antes que a Dalí y Miró. Llega pronto, ya que la franja gratuita atrae cola en la puerta.",
              durationMin: 90,
            },
            {
              text: "Cena cerca de Antón Martín o de vuelta hacia Malasana, deslizándote en el ritmo tardío de Madrid con tapas en vez de una comida sentada copiosa. Las cocinas apenas se están calentando a las 21h aquí.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "El Madrid de los Austrias: Palacio Real, Plaza Mayor, Sol, atardecer en Debod",
          morning: [
            {
              poiSlug: "royal-palace",
              text: "Está en el Palacio Real a las 10h con la entrada reservada, tras comprobar que no cierra por una ceremonia de Estado. Haz los salones de gala y la Real Armería, y luego cruza a la catedral de la Almudena, gratuita, y a los Jardines de Sabatini.",
              durationMin: 120,
            },
            {
              poiSlug: "mercado-de-san-miguel",
              text: "Pica un almuerzo temprano en el Mercado de San Miguel cerca de la Plaza Mayor, comprando unas tapas en distintos puestos y comiendo de pie. Mantenlo ligero, porque es una parada de degustación, no la comida principal del día.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "plaza-mayor",
              text: "Admira la plaza porticada de la Plaza Mayor, y luego camina por los callejones antiguos hasta la Puerta del Sol y la marca del Kilómetro Cero en el centro geográfico de España. Lleva el bolso cerrado entre la multitud de Sol.",
              durationMin: 75,
            },
            {
              poiSlug: "plaza-de-cibeles",
              text: "Baja hasta la Plaza de Cibeles por la fuente y el palacio, y paga los pocos euros para subir al mirador del Palacio de Cibeles y una amplia vista por el Paseo del Prado. Enlaza el viejo corazón y los bulevares.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "temple-of-debod",
              text: "Camina hasta el Templo de Debod para el atardecer, llegando 30 minutos antes para un sitio en la baranda cuando la piedra egipcia antigua capta la última luz sobre la Casa de Campo. Es el crepúsculo madrileño clásico y gratuito.",
              durationMin: 60,
            },
            {
              poiSlug: "gran-via",
              text: "Vuelve por una Gran Vía iluminada, recorriendo las grandes fachadas hacia la cúpula del Metrópolis, y luego cena en el centro. Mantén móviles y bolsos a salvo en este tramo de carteristas.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Los barrios: La Latina, El Rastro, Malasana",
          morning: [
            {
              poiSlug: "el-rastro",
              text: "Si es domingo, sumérgete en El Rastro antes de las 11h mientras es transitable, bajando por Ribera de Curtidores a través de los callejones de La Latina con los objetos de valor en un bolsillo delantero. Cualquier otro día, pasa la mañana paseando por las calles y plazas medievales de La Latina.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "cava-baja-tapas",
              text: "Instálate en La Latina para una comida larga, haciendo una ruta por la Cava Baja y la Cava Alta con un vermú cuando el rastro toca a su fin, en la tradición del domingo. Uno o dos platos por bar, de pie en la barra, y luego se sigue.",
              durationMin: 120,
            },
            {
              text: "Camina al norte hacia Malasana para la tarde, hurgando en las tiendas vintage y el café de tercera ola en torno a la Plaza del Dos de Mayo. Aquí empezó la Movida de los años ochenta y aquí la ciudad se sigue sintiendo más joven.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Aperitivo y cena en Malasana o en la vecina Chueca, saltando de pequeñas cocinas a coctelerías a medida que los barrios se llenan. Reserva en cualquier sitio con nombre, porque las buenas mesas se van antes de las 21:30 los fines de semana.",
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
        "Cuatro días son el punto ideal para una primera visita a Madrid, y convierten un sprint de tres días en unas vacaciones de verdad con margen para respirar. Los días uno a tres cubren lo esencial: el triángulo del arte (Prado, Reina Sofía por el Guernica, Thyssen), el viejo corazón de los Austrias (Palacio Real, Plaza Mayor, Sol, Templo de Debod), y un día de barrio a través de La Latina, El Rastro y Malasana. El cuarto día es la válvula de escape, y tienes opciones de verdad: la elegante Salamanca y las compras de Serrano combinadas con un tour del estadio Bernabéu, o una excursión de un día a Toledo, a 33 minutos en tren de alta velocidad, o a Segovia por su acueducto romano y su Alcázar de cuento de hadas, a unos 30 minutos en tren. Esta duración conviene a los viajeros que odian la marcha forzada, a las parejas, y a cualquiera cuyos vuelos enmarquen el viaje de forma incómoda. Alójate en La Latina para cuatro días: has aceptado un ritmo más lento, y sus callejones de tapas y su mercado del domingo hacen del regreso al alojamiento cada noche lo mejor. Reserva el Prado, el Palacio Real y el Bernabéu con antelación.",
      stayNeighborhoodSlug: "la-latina",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "El triángulo del arte: Prado, Retiro, Reina Sofía, Thyssen",
          morning: [
            {
              poiSlug: "prado-museum",
              text: "Empieza en la apertura de las 10h del Prado con una franja reservada, yendo directo a Las Meninas y a las pinturas negras de Goya antes de la multitud. Concede al menos dos horas y media a las obras maestras.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "thyssen-bornemisza",
              text: "Tras comer en el Paseo del Prado, coge el Thyssen-Bornemisza cruzando el bulevar, gratuito los lunes por la tarde. Hazlo de arriba abajo, de los maestros antiguos hasta los impresionistas y el siglo XX.",
              durationMin: 120,
            },
            {
              poiSlug: "retiro-park",
              text: "Entra en el Retiro por detrás de los museos para la última hora de la tarde, remando en el estanque y dando la vuelta ante el Palacio de Cristal. El parque es la pausa verde entre las dos galerías del día.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "reina-sofia",
              text: "Coge el Reina Sofía en su ventana gratuita de tarde (cerrado los martes), yendo primero a la Sala 205 por el Guernica antes que al resto. Llega un poco antes para adelantarte a la cola de la franja gratuita.",
              durationMin: 90,
            },
            {
              poiSlug: "cava-baja-tapas",
              text: "Regresa con calma a La Latina para una ruta de tapas por la Cava Baja a partir de las 21h, uno o dos platos y una bebida por bar. De pie en la barra, es la cena madrileña del día a día.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "El Madrid de los Austrias: Palacio Real, Plaza Mayor, Sol, atardecer en Debod",
          morning: [
            {
              poiSlug: "royal-palace",
              text: "Está en el Palacio Real a las 10h con la entrada reservada, comprobada la víspera frente a los cierres por acto de Estado. Haz los salones de gala y la Armería, y luego la catedral de la Almudena, gratuita, y los Jardines de Sabatini.",
              durationMin: 120,
            },
            {
              poiSlug: "mercado-de-san-miguel",
              text: "Pica un almuerzo ligero en el Mercado de San Miguel cerca de la Plaza Mayor, unas tapas de distintos puestos, comidas de pie. Mantenlo como una degustación y no como la comida completa.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "plaza-mayor",
              text: "Admira la Plaza Mayor, y luego camina hasta la Puerta del Sol y la marca del Kilómetro Cero, el centro literal de España. Bolso cerrado entre la multitud de Sol.",
              durationMin: 60,
            },
            {
              poiSlug: "plaza-de-cibeles",
              text: "Camina hasta la Plaza de Cibeles por la fuente y el palacio, subiendo al mirador de Cibeles para la vista sobre el Paseo del Prado. Enlaza el viejo corazón con los grandes bulevares.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "temple-of-debod",
              text: "Llega al Templo de Debod 30 minutos antes de la puesta de sol para el clásico atardecer madrileño gratuito, la piedra egipcia reflejada en su estanque. Reclama un sitio en la baranda pronto.",
              durationMin: 60,
            },
            {
              poiSlug: "gran-via",
              text: "Vuelve a lo largo de una Gran Vía iluminada hacia la cúpula del Metrópolis, y luego cena en el centro. Móviles y bolsos a salvo en esta calle de carteristas.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Los barrios: La Latina, El Rastro, Malasana",
          morning: [
            {
              poiSlug: "el-rastro",
              text: "Un domingo, haz El Rastro antes de las 11h mientras aún es transitable, bajando por Ribera de Curtidores y los callejones de La Latina con los objetos de valor en un bolsillo delantero. Si no, pasea por las plazas medievales de La Latina.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Comida larga en La Latina con un vermú cuando el rastro toca a su fin, y luego hurga en las tiendas vintage y los cafés de Malasana en torno a la Plaza del Dos de Mayo. Es la tarde lenta, de comida y barrio, que los viajes más cortos no pueden permitirse.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              text: "Aperitivo y cena entre Malasana y Chueca, pasando de pequeñas cocinas a coctelerías a medida que se llenan. Reserva con antelación en cualquier sitio con nombre, las buenas mesas se van antes de las 21:30 los fines de semana.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Salamanca y el Bernabéu, o una excursión a Toledo o Segovia",
          morning: [
            {
              text: "La opción A se queda en la ciudad: hurga en la elegante cuadrícula de Salamanca y la milla de las grandes marcas a lo largo de la Calle Serrano, con una parada de café en sus cafés refinados. La opción B sale de ella: coge el tren de alta velocidad de 33 minutos a Toledo, o el tren de unos 30 minutos a Segovia, saliendo pronto para adelantarte a las multitudes de excursionistas.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "santiago-bernabeu",
              text: "Si te quedas en la ciudad, haz el tour del estadio Santiago Bernabéu, reservado en línea para una franja horaria y contrastado con el calendario de partidos, ya que los tours cierran los días de partido. El metro te deja en Santiago Bernabéu en la línea 10.",
              durationMin: 120,
            },
            {
              text: "En la opción de excursión, pasa la tarde en el casco antiguo encaramado de Toledo, con su catedral, sus sinagogas y El Greco, o en el acueducto romano y el Alcázar de cuento de hadas de Segovia, antes del tren de la última hora de la tarde. Ambos son ida y vuelta fáciles que aún dejan una última tarde madrileña.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              text: "De vuelta en La Latina para una cena de despedida, gastando un poco más en tu última noche en una taberna de la Cava Baja que hayas explorado antes. Croquetas, jamón y una última caña para cerrar el viaje.",
              durationMin: 120,
            },
            {
              text: "Termina con una última copa en un callejón tranquilo de La Latina, a un corto paseo de tu cama, sin trayecto de vuelta que planear. Esa comodidad es todo el sentido de alojarse aquí durante cuatro días.",
              durationMin: 45,
            },
          ],
        },
      ],
    },
  ],
};

export default madridEs;
