import type { CityData } from "../types";

const parisEs: CityData = {
  city: {
    slug: "paris",
    name: "Paris",
    country: "Francia",
    countrySlug: "france",
    lat: 48.8566,
    lng: 2.3522,
    tier: 1,
    idealDays: 4,
    durations: [2, 3, 4],
    airportCode: "CDG",
    airportToCenter:
      "Desde Charles de Gaulle, el tren RER B llega a la Gare du Nord y a Châtelet en unos 30 a 35 min por 11,80 EUR, con salidas cada 10 a 15 min. El Roissybus hasta la Ópera cuesta unos 13 EUR pero avanza a paso de tortuga entre el tráfico, y el taxi tiene tarifa plana: 56 EUR a la orilla derecha, 65 EUR a la izquierda. Desde Orly, toma la lanzadera Orlyval hasta Antony y luego el RER B, o el tranvía T7, o el Orlybus directo hasta Denfert-Rochereau.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [],
    monthlyNotes: {
      1: "Frío y gris, 7-8C, días cortos y húmedos, y la menor afluencia del año una vez pasado el bullicio del Año Nuevo. Las rebajas de invierno (les soldes) empiezan a principios de enero y las tarifas hoteleras tocan su mínimo, así que es un mes estupendo para un viaje de museos barato y sin colas.",
      2: "Todavía frío, 8C, a menudo nublado, aunque a veces asoman días luminosos y nítidos y las colas del Louvre y de Orsay siguen cortas. Las tarifas se mantienen bajas fuera de la semana de vacaciones escolares, lo que lo convierte en un mes con buena relación calidad-precio si te abrigas bien.",
      3: "Las máximas trepan hacia los 12-13C y la ciudad reverdece, con las terrazas de los cafés reabriendo en las primeras tardes suaves. La afluencia sigue siendo escasa y los precios de los hoteles razonables antes de la avalancha primaveral, un momento discretamente excelente para visitarla.",
      4: "Uno de los mejores meses, 15-16C, árboles en flor y días largos y luminosos, aunque los chubascos de abril son frecuentes, así que lleva una capa de más. La afluencia y los precios suben a lo largo del mes, y la Semana Santa puede llenar el centro, así que reserva museos y hoteles con antelación.",
      5: "Templado y animado, 19-20C, con la temporada de terrazas en pleno apogeo, pero varios festivos (el 1 de mayo, el 8 de mayo, la Ascensión) cierran muchos comercios y museos, así que comprueba las fechas. El torneo de Roland Garros arranca a finales de mes, y esta es la mejor calidad de tiempo parisino, con la afluencia al alza.",
      6: "Largas tardes doradas, 23C, la mejor luz del año, y las terrazas abarrotadas hasta tarde. La Fête de la Musique, el 21 de junio, llena cada calle de conciertos gratuitos, y Roland Garros termina a principios de junio, así que cuenta con una ciudad concurrida, festiva y con todo reservado.",
      7: "Cálido, 25C, y muy concurrido por los turistas de verano mientras los parisinos empiezan a marcharse. El 14 de julio trae el desfile militar por los Campos Elíseos y los fuegos artificiales en la Torre Eiffel, y Paris Plages convierte las orillas del Sena en una playa efímera, con arena y tumbonas durante todo el verano.",
      8: "Episodios de calor de hasta 25-26C y el mes en que la ciudad más se vacía de sus habitantes, con muchos restaurantes y pequeños comercios que cierran dos o tres semanas por las tradicionales vacaciones de agosto. Los grandes lugares siguen abiertos y tomados por los visitantes, Paris Plages continúa, y la ciudad resulta extrañamente tranquila en sus barrios residenciales.",
      9: "Sin duda el mes más bonito: días suaves que van bajando desde los 21C, afluencia en descenso tras la primera semana, y comercios y restaurantes reabriendo descansados del parón estival. La Fashion Week y los eventos de diseño animan el final del mes, y los hoteles vuelven a ser una buena opción a medida que remite el pico.",
      10: "Suave y a menudo luminoso, 16C, con los colores del otoño en los parques y el regreso de los primeros episodios de lluvia de verdad. La Nuit Blanche, a principios de octubre, deja museos e instalaciones artísticas abiertos toda la noche de forma gratuita, y la afluencia de temporada media hace que las colas de los museos sean llevaderas.",
      11: "Fresco, húmedo y gris, 11C, con los días acortándose, pero la menor afluencia del otoño y buenas ofertas hoteleras. Las luces de Navidad se encienden en los Campos Elíseos y los escaparates de los grandes almacenes se estrenan a finales de noviembre, levantando el ánimo de un mes oscuro.",
      12: "Frío, 8C, a menudo lluvioso y oscuro, pero el centro reluce con las luces de Navidad, los escaparates iluminados y los mercados. Las tarifas se disparan en el tramo de Navidad a Año Nuevo, cuando los Campos Elíseos y la zona de Notre-Dame atraen a grandes multitudes festivas, aunque principios de diciembre sigue siendo tranquilo y asequible.",
    },
    climate: {
      1: { highC: 7, lowC: 3, rainyDays: 10 },
      2: { highC: 8, lowC: 3, rainyDays: 9 },
      3: { highC: 12, lowC: 5, rainyDays: 10 },
      4: { highC: 16, lowC: 7, rainyDays: 9 },
      5: { highC: 20, lowC: 11, rainyDays: 10 },
      6: { highC: 23, lowC: 14, rainyDays: 8 },
      7: { highC: 25, lowC: 16, rainyDays: 7 },
      8: { highC: 25, lowC: 16, rainyDays: 7 },
      9: { highC: 21, lowC: 13, rainyDays: 8 },
      10: { highC: 16, lowC: 10, rainyDays: 9 },
      11: { highC: 11, lowC: 6, rainyDays: 10 },
      12: { highC: 8, lowC: 4, rainyDays: 11 },
    },
    budgetLevel: "high",
    budgetPerDay: { budget: 80, mid: 170, high: 340 },
    tagline: "La ciudad de los museos, la ciudad de las terrazas, la ciudad donde caminas hasta no poder más.",
    heroIntro:
      "París recompensa la paciencia: los lugares emblemáticos exigen entradas reservadas con antelación, los museos merecen un día para ellos solos, y lo mejor consiste simplemente en pasear por los muelles y de barrio en barrio. Cuatro días permiten separar la Torre Eiffel y los Campos, una jornada de Louvre e islas, Montmartre y el Marais, y una excursión a Versalles sin marcha forzada. Ven en primavera o a principios de otoño, reserva la torre y el Louvre antes de volar, y apóyate en el metro para cubrir las distancias que caminando no alcanzas.",
    accent: { from: "#2B3A6B", to: "#D9B96A", ink: "#18213F" },
    neighborhoodSlugs: [
      "le-marais",
      "saint-germain",
      "montmartre",
      "latin-quarter",
      "canal-saint-martin",
    ],
    nearbyCitySlugs: ["amsterdam"],
  },

  neighborhoods: [
    {
      slug: "le-marais",
      citySlug: "paris",
      name: "Le Marais",
      lat: 48.8575,
      lng: 2.3622,
      bestFor: ["first-time", "nightlife", "romantic"],
      vibe: "Un denso entramado de callejones medievales y grandes palacetes a caballo entre los distritos 3 y 4, hoy el barrio más de moda del centro para las compras, las galerías y salir de noche. Se llega a pie a Notre-Dame, al Louvre y a las islas, con la elegante Place des Vosges en su corazón y una animada escena LGBTQ y de bares por la noche. Céntrico, con estilo y rara vez aburrido.",
      pros: [
        "A pie hasta Notre-Dame, las islas, el Louvre y el Pompidou",
        "Las mejores boutiques y galerías para curiosear del centro",
        "Excelentes bares, falafel y energía nocturna sin coger el metro",
      ],
      cons: [
        "Entre las zonas más caras para el hotel y la cena",
        "Los callejones estrechos se abarrotan y se vuelven ruidosos los fines de semana por la noche",
        "El domingo la multitud crece porque muchas tiendas de aquí siguen abiertas",
      ],
    },
    {
      slug: "saint-germain",
      citySlug: "paris",
      name: "Saint-Germain-des-Prés",
      lat: 48.8539,
      lng: 2.3336,
      bestFor: ["first-time", "romantic", "family"],
      vibe: "El clásico barrio literario de la orilla izquierda, con el histórico Café de Flore y Les Deux Magots, galerías selectas y el Jardín de Luxemburgo en su linde. Refinado, seguro y céntrico, a un breve paseo del Museo de Orsay, del Sena y del Barrio Latino. Es el París de postal, a un ritmo adulto y sin prisas.",
      pros: [
        "A pie hasta el Orsay, el Louvre al otro lado del río y el Jardín de Luxemburgo",
        "Elegante, tranquilo y tranquilizadoramente céntrico para una primera visita",
        "Dos líneas de metro y acceso RER a ambos aeropuertos y a Versalles cerca",
      ],
      cons: [
        "Caro, tanto para los hoteles como para los famosos cafés",
        "Vida nocturna más tranquila que el Marais o el canal",
        "Puede resultar turístico y pulido más que local",
      ],
    },
    {
      slug: "montmartre",
      citySlug: "paris",
      name: "Montmartre",
      lat: 48.8867,
      lng: 2.3431,
      bestFor: ["romantic", "budget", "local"],
      vibe: "El pueblo encaramado del distrito 18, coronado por las cúpulas blancas del Sacré-Cœur y surcado de empinados callejones adoquinados y escaleras. Alejado del gentío turístico en torno a la basílica y la Place du Tertre, conserva un aire genuinamente aldeano y bohemio, con sus bares de vinos y sus placitas. Encantador y más barato para dormir, pero lejos de los grandes lugares.",
      pros: [
        "El mejor panorama gratuito sobre la ciudad desde las escalinatas del Sacré-Cœur",
        "Hoteles más asequibles que en la orilla derecha central",
        "Callejones llenos de encanto y bares de barrio una vez pasada la multitud de los grupos",
      ],
      cons: [
        "A un trayecto de metro del Louvre, la Torre Eiffel y las islas",
        "Cuestas empinadas y escaleras por todas partes, penosas con maletas o carrito",
        "La Place du Tertre y las escalinatas de la basílica atraen a carteristas y captadores",
      ],
    },
    {
      slug: "latin-quarter",
      citySlug: "paris",
      name: "El Barrio Latino",
      lat: 48.8489,
      lng: 2.3469,
      bestFor: ["budget", "first-time", "family"],
      vibe: "El barrio estudiantil en torno a la Sorbona, en el distrito 5, un laberinto de calles estrechas, librerías y comidas baratas entre el Panteón y el Sena. Céntrico y animado, a pie de Notre-Dame, de las islas y del Jardín de Luxemburgo, con algunas de las camas más económicas de la orilla izquierda. Bullicioso de día, un poco áspero de noche en sus bordes atrapaturistas.",
      pros: [
        "A pie hasta Notre-Dame, la Sainte-Chapelle y las islas al otro lado del río",
        "Hoteles y restauración más económicos que en Saint-Germain, justo al lado",
        "Conexiones de RER y metro céntricas, prácticas para Versalles y ambos aeropuertos",
      ],
      cons: [
        "Las principales calles turísticas (la Rue de la Huchette) son trampas de comida barata",
        "Abarrotado y ruidoso en torno a la Sorbona y los muelles",
        "Las habitaciones de los edificios antiguos pueden ser pequeñas y crujientes",
      ],
    },
    {
      slug: "canal-saint-martin",
      citySlug: "paris",
      name: "El canal Saint-Martin",
      lat: 48.8709,
      lng: 2.3665,
      bestFor: ["local", "nightlife", "budget"],
      vibe: "Un tramo joven y arty de los distritos 10 y 11 a lo largo de un canal arbolado, donde los vecinos hacen pícnic en las orillas mientras bares independientes, tostadores de café y tiendas vintage llenan las calles laterales. Cambia los grandes lugares por una auténtica vida de barrio y una de las mejores escenas de comida informal y ocio nocturno de la ciudad. Poco céntrico para los monumentos, pero el sitio más parisino para pasar el rato de verdad.",
      pros: [
        "Auténtica vida nocturna local, bares de vino natural y pícnics a la orilla del canal",
        "Comer y beber más barato que en el centro turístico",
        "Bien conectado en metro con el Marais y los lugares de la orilla derecha",
      ],
      cons: [
        "A un trayecto de metro de la Torre Eiffel, el Louvre y las islas",
        "Pocos lugares clásicos accesibles a pie",
        "Algunas manzanas cerca del canal resultan turbias a altas horas de la noche",
      ],
    },
  ],

  pois: [
    {
      slug: "eiffel-tower",
      citySlug: "paris",
      name: "La Torre Eiffel",
      lat: 48.8584,
      lng: 2.2945,
      kind: "sight",
      needsBooking: true,
      tip: "Reserva en línea una entrada de ascensor con hora hasta la cima, con semanas de antelación: la web oficial abre los turnos unos 60 días antes y vuelan rápido; subir al segundo piso por las escaleras cuesta menos y rara vez hay cola. Ven al primer turno de la mañana o al anochecer, cuando la torre destella cinco minutos a cada hora en punto. Lleva los bolsos bien cerrados: la base de la torre y el Trocadéro, enfrente, son terreno de primera para los carteristas.",
    },
    {
      slug: "louvre",
      citySlug: "paris",
      name: "El Museo del Louvre",
      lat: 48.8606,
      lng: 2.3376,
      kind: "museum",
      needsBooking: true,
      tip: "Reserva una entrada con hora en línea, obligatoria incluso con un Paris Museum Pass, y elige el primer turno de las 9h para llegar a la Gioconda antes de que se forme el muro de teléfonos. El Louvre cierra los martes y abre en horario nocturno (hasta las 21h aproximadamente) los miércoles y viernes, cuando la tarde es mucho más tranquila. Entra por el Carrousel du Louvre o la Porte des Lions para evitar la cola de la pirámide.",
    },
    {
      slug: "notre-dame",
      citySlug: "paris",
      name: "La catedral de Notre-Dame",
      lat: 48.853,
      lng: 2.3499,
      kind: "sight",
      needsBooking: false,
      tip: "Reabierta en diciembre de 2024 tras el incendio, y el interior restaurado es deslumbrante. La entrada es gratuita pero es frecuente una cola de una hora sin reserva: reserva un turno con hora gratuito en la aplicación o la web oficial hasta con dos días de antelación para entrar directamente. Ve temprano o por la tarde para la visita más tranquila, y reserva aparte la subida a las torres si quieres las vistas desde los tejados, a la altura de las gárgolas.",
    },
    {
      slug: "musee-orsay",
      citySlug: "paris",
      name: "El Museo de Orsay",
      lat: 48.86,
      lng: 2.3266,
      kind: "museum",
      needsBooking: true,
      tip: "Reserva un turno con hora en línea para la gran colección impresionista mundial, instalada en una antigua estación de tren. Cierra los lunes y abre en horario nocturno hasta las 21h45 aproximadamente los jueves, el momento más tranquilo y con más ambiente para la visita. Sube primero directamente a las salas de Monet, Renoir y Van Gogh de la quinta planta, luego baja, y disfruta de las vistas a través del gran reloj de la estación.",
    },
    {
      slug: "montmartre-sacre-coeur",
      citySlug: "paris",
      name: "Montmartre y el Sacré-Cœur",
      lat: 48.8867,
      lng: 2.3431,
      kind: "viewpoint",
      needsBooking: false,
      tip: "La basílica es gratuita y las escalinatas de la cima ofrecen el mejor panorama gratuito de París, ideal al atardecer o temprano por la mañana antes de que lleguen los grupos y los insistentes captadores de pulseras de la amistad. Evita el gentío de la Place du Tertre y pasea por los tranquilos callejones de atrás, en torno a la Rue de l'Abreuvoir y la viña. Toma el funicular (un billete de metro) para subir si la escalera te echa para atrás, y vigila los bolsillos en las escalinatas abarrotadas.",
    },
    {
      slug: "arc-de-triomphe",
      citySlug: "paris",
      name: "El Arco del Triunfo y los Campos Elíseos",
      lat: 48.8738,
      lng: 2.295,
      kind: "viewpoint",
      needsBooking: true,
      tip: "La terraza de la cima ofrece una vista soberbia recta sobre los Campos Elíseos y la estrella de doce avenidas, y hace falta una entrada con hora en línea para subir los 284 escalones. Llega por el paso peatonal subterráneo desde la esquina de los Campos Elíseos, nunca cruzando la rotonda del tráfico. Ven a última hora de la tarde para la luz dorada sobre la avenida, y baja los Campos hacia la Concordia en lugar de subirlos.",
    },
    {
      slug: "sainte-chapelle",
      citySlug: "paris",
      name: "La Sainte-Chapelle",
      lat: 48.8554,
      lng: 2.345,
      kind: "sight",
      needsBooking: true,
      tip: "Esta capilla real del siglo XIII alberga quince vidrieras vertiginosas, mejor vistas en una mañana luminosa cuando la luz se derrama por ellas. Reserva una entrada con hora en línea, y compra la entrada combinada con la vecina Conciergerie para ver las dos en una visita. Se encuentra dentro de un palacio de justicia en activo, así que hay un control de seguridad tipo aeropuerto en la entrada; ven a la apertura de las 9h para adelantarte tanto a la cola como a los grupos en autocar.",
    },
    {
      slug: "versailles",
      citySlug: "paris",
      name: "El palacio de Versalles",
      lat: 48.8049,
      lng: 2.1204,
      kind: "sight",
      needsBooking: true,
      tip: "Reserva de media a una jornada entera: toma el RER C hasta Versailles Château Rive Gauche (unos 45 min, ida por unos 3,65 EUR), y evita los martes, cuando muchos museos parisinos cierran y Versalles está a rebosar. Reserva la entrada Passeport con un turno con hora para el palacio en línea y llega a la apertura de las 9h; la Galería de los Espejos está más tranquila a primera hora. Los vastos jardines son gratuitos salvo los días de espectáculo de fuentes musicales, así que deja tiempo para caminar o alquilar una bici o un coche eléctrico.",
    },
    {
      slug: "le-marais",
      citySlug: "paris",
      name: "Le Marais",
      lat: 48.8575,
      lng: 2.3622,
      kind: "experience",
      needsBooking: false,
      tip: "Pasea por los callejones para ver las boutiques, las galerías y la Place des Vosges porticada, la plaza planificada más antigua de París y gratuita de recorrer. Ven un domingo, cuando buena parte del barrio sigue abierto a diferencia del resto de la ciudad, y haz cola para un falafel en la Rue des Rosiers al mediodía. Date una vuelta por los patios gratuitos del Hôtel de Sully y del Museo Carnavalet (colección permanente gratuita sobre la historia de la ciudad) de paso.",
    },
    {
      slug: "latin-quarter",
      citySlug: "paris",
      name: "El Barrio Latino",
      lat: 48.8489,
      lng: 2.3469,
      kind: "experience",
      needsBooking: false,
      tip: "Explora las calles en torno al Panteón y la Sorbona para las librerías, la tienda Shakespeare and Company junto al río, y la ruinosa arena romana de las Arènes de Lutèce, escondida cerca de la Rue Monge (gratis). Huye de la turística Rue de la Huchette para cenar y come una calle más allá. El mercado matinal de la Rue Mouffetard es el punto fuerte local, mejor antes del mediodía.",
    },
    {
      slug: "seine-cruise",
      citySlug: "paris",
      name: "Crucero por el Sena",
      lat: 48.8606,
      lng: 2.2977,
      kind: "experience",
      needsBooking: false,
      tip: "Una hora de barco deslizándose ante Notre-Dame, el Louvre y la Torre Eiffel es la forma más fácil de enlazar los monumentos y descansar las piernas, y es mágico al anochecer, cuando todo está iluminado. Evita los caros cruceros con cena y toma una salida clásica de los Bateaux-Mouches o de las Vedettes du Pont-Neuf por unos 15 EUR. Embarca al crepúsculo para la transición del atardecer a las luces, e instálate en la cubierta superior descubierta.",
    },
    {
      slug: "luxembourg-gardens",
      citySlug: "paris",
      name: "El Jardín de Luxemburgo",
      lat: 48.8462,
      lng: 2.3372,
      kind: "park",
      needsBooking: false,
      tip: "El parque más elegante de la orilla izquierda es gratuito y está hecho para un pícnic o una pausa entre museos, con sus sillas metálicas verdes que arrastrar hasta el estanque central donde los niños hacen navegar veleros de juguete. Es la parada perfecta entre Saint-Germain, Orsay y el Barrio Latino, todos a un breve paseo. Ven a media mañana en un día soleado y hazte con una silla temprano: se agotan rápido a la hora del almuerzo.",
    },
    {
      slug: "musee-rodin",
      citySlug: "paris",
      name: "El Museo Rodin",
      lat: 48.8553,
      lng: 2.3158,
      kind: "museum",
      needsBooking: false,
      tip: "El palacete del escultor y su rosaleda albergan El Pensador y La Puerta del Infierno en uno de los entornos museísticos más bonitos de la ciudad, cerca de los Inválidos. Una entrada solo de jardín es una forma económica de ver los grandes bronces al aire libre si andas corto de tiempo o de presupuesto. Cierra los lunes; ven en una tarde agradable y combínalo con los cercanos Inválidos y la tumba de Napoleón.",
    },
    {
      slug: "pere-lachaise",
      citySlug: "paris",
      name: "El cementerio del Père-Lachaise",
      lat: 48.8619,
      lng: 2.3934,
      kind: "sight",
      needsBooking: false,
      tip: "El cementerio más famoso de la ciudad es un laberinto gratuito y ondulado de avenidas adoquinadas y tumbas monumentales, lugar de descanso de Jim Morrison, Oscar Wilde, Chopin y Édith Piaf. Coge un plano gratuito en la entrada o descárgate uno, porque las tumbas son realmente difíciles de encontrar entre 70.000 sepulturas. Entra por la Porte des Amandiers o el metro Père-Lachaise, ponte calzado de verdad para los adoquines, y calcula al menos 90 minutos.",
    },
  ],

  itineraries: [
    {
      citySlug: "paris",
      days: 2,
      summary:
        "Dos días en París son un esprint entre imprescindibles, y notarás el ritmo, porque la ciudad pide de verdad tres o cuatro. En 48 horas puedes hacer la Torre Eiffel, los Campos Elíseos y el Arco del Triunfo, más un crucero por el Sena el primer día, y luego el Louvre, las islas, Notre-Dame, la Sainte-Chapelle y el Barrio Latino el segundo. Lo que hay que cortar: Montmartre, Versalles, Orsay y cualquier paseo tranquilo por un parque o en una terraza. Esto encaja con un fin de semana o un primer aperitivo antes de combinar París con Ámsterdam. Los puntos innegociables son reservar con antelación el turno de la cima de la Torre Eiffel y una entrada con hora al Louvre antes de partir, más una reserva gratuita para Notre-Dame, o perderás en las colas horas que no tienes. Instálate en el Marais para que ambas jornadas arranquen en el centro y a pie, con la cena y los bares a dos pasos de la cama. Si aparece un tercer día, añade Montmartre y Orsay y baja mucho el ritmo.",
      stayNeighborhoodSlug: "le-marais",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "La Torre Eiffel, los Campos Elíseos y el Sena",
          morning: [
            {
              poiSlug: "eiffel-tower",
              text: "Empieza por la Torre Eiffel para tu turno reservado de la cima por la mañana, antes de que se acumulen las colas y la multitud en la base. Pásate luego a la terraza del Trocadéro para la foto clásica de frente de toda la torre, con el bolso bien cerrado en este punto caliente de carteristas.",
              durationMin: 120,
            },
            {
              poiSlug: "musee-rodin",
              text: "Camina hacia el este hasta el Museo Rodin, cerca de los Inválidos, donde la rosaleda alberga El Pensador y La Puerta del Infierno en uno de los entornos más bonitos de la ciudad. Una entrada solo de jardín es una forma rápida y económica de ver los grandes bronces si el tiempo apremia.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "arc-de-triomphe",
              text: "Toma el metro hasta el Arco del Triunfo y sube los 284 escalones hasta la terraza para la vista sobre la estrella de doce avenidas, accediendo por el paso subterráneo, nunca a través del tráfico. Baja después los Campos Elíseos hacia la Concordia y las Tullerías.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "seine-cruise",
              text: "Embarca en un crucero por el Sena al crepúsculo cerca de la Torre Eiffel o del Pont Neuf, para el deslizamiento del atardecer a las luces ante Notre-Dame y el Louvre. Instálate en la cubierta superior descubierta y toma una salida clásica de una hora en lugar de un caro barco con cena.",
              durationMin: 75,
            },
            {
              text: "Vuelve al Marais para cenar en los callejones en torno a la Place des Vosges, reservando mesa allí donde la dirección tenga nombre. Termina con una copa en uno de los bares tardíos del barrio, a unos pasos de tu hotel.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "El Louvre, las islas y el Barrio Latino",
          morning: [
            {
              poiSlug: "louvre",
              text: "Está en el Louvre para tu turno reservado de las 9h y ve directo a la Gioconda antes de que se forme el muro de teléfonos, luego recorre las pinturas italianas, la Venus de Milo y las joyas de la Corona. Entra por el Carrousel o la Porte des Lions para evitar la cola de la pirámide.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "sainte-chapelle",
              text: "Pásate a la Île de la Cité para tu turno con hora en la Sainte-Chapelle, guardando las quince vidrieras para la luz viva de la tarde. Usa la entrada combinada para ver la vecina Conciergerie, y cuenta con un control de seguridad en la entrada del palacio de justicia.",
              durationMin: 90,
            },
            {
              poiSlug: "notre-dame",
              text: "Camina hasta Notre-Dame, reabierta en diciembre de 2024 con su interior restaurado, usando tu turno con hora gratuito reservado para evitar la larga cola sin reserva. Da luego la vuelta al exterior y los arbotantes desde el jardín a la orilla del río, detrás del edificio.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "latin-quarter",
              text: "Cruza el río hacia el Barrio Latino, paseando por las librerías y por Shakespeare and Company antes de cenar. Come una calle más allá de la turística Rue de la Huchette, y termina con una copa en torno al Panteón.",
              durationMin: 150,
            },
          ],
        },
      ],
    },
    {
      citySlug: "paris",
      days: 3,
      summary:
        "Tres días son una duración cómoda para una primera visita y cerca del punto ideal para París. Te dan la Torre Eiffel, los Campos Elíseos, el Arco del Triunfo y un crucero por el Sena el primer día, el Louvre con las islas, Notre-Dame y la Sainte-Chapelle el segundo, y una tercera jornada de Montmartre, Orsay y el Marais que equilibra un pueblo encaramado y la gran colección impresionista. Comes en tres barrios distintos, encajas a la vez una pausa en el parque y los museos que cuentan, y aún avanzas a un ritmo que permite sentarse en una terraza en lugar de pasar de largo al trote. Lo que sigue quedando fuera es la excursión a Versalles, que es exactamente lo que añade un cuarto día. Esto encaja con quienes visitan por primera vez, con las parejas y con quien enlaza luego con Ámsterdam. Alójate en Saint-Germain: se llega a pie a Orsay, al Louvre al otro lado del río y al Jardín de Luxemburgo, y sus cafés lo convierten en una base elegante para las tardes. Reserva con antelación la cima de la Torre Eiffel, los turnos del Louvre y de Orsay, y una reserva gratuita para Notre-Dame antes de partir.",
      stayNeighborhoodSlug: "saint-germain",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "La Torre Eiffel, los Campos Elíseos y el Sena",
          morning: [
            {
              poiSlug: "eiffel-tower",
              text: "Empieza por la Torre Eiffel para tu turno reservado de la cima, por delante de la multitud, y pásate luego al Trocadéro para la vista de frente completa. Mantén el bolso cerrado: la base de la torre y la terraza son terreno de primera para los carteristas.",
              durationMin: 120,
            },
            {
              poiSlug: "musee-rodin",
              text: "Camina hasta el Museo Rodin, cerca de los Inválidos, para El Pensador y La Puerta del Infierno entre las rosas. Combínalo con un vistazo a la cúpula dorada de los Inválidos, sobre la tumba de Napoleón, justo al lado.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "arc-de-triomphe",
              text: "Metro hasta el Arco del Triunfo y subida a la terraza para la vista sobre la estrella de avenidas, tomando el paso subterráneo para acceder. Baja los Campos Elíseos hacia la Concordia y entra en el jardín de las Tullerías.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "seine-cruise",
              text: "Toma un crucero por el Sena al crepúsculo para el deslizamiento iluminado ante los monumentos, embarcando cerca del Pont Neuf o de la Torre Eiffel. Elige un barco clásico de una hora e instálate arriba para el atardecer.",
              durationMin: 75,
            },
            {
              text: "Vuelve a Saint-Germain para cenar entre las galerías y los cafés, reservando con antelación. Una última copa en un local clásico como el Café de Flore o un bar más tranquilo de la orilla izquierda cierra la velada.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "El Louvre, las islas y la Sainte-Chapelle",
          morning: [
            {
              poiSlug: "louvre",
              text: "Está en el Louvre para tu turno de las 9h, yendo directo a la Gioconda antes del gentío, luego la Venus de Milo y las galerías italianas. Entra por el Carrousel para evitar la cola de la pirámide, y fija una hora de salida firme, o el museo se tragará el día entero.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "sainte-chapelle",
              text: "Pásate a la Île de la Cité para tu turno en la Sainte-Chapelle, ajustado a la luz viva de la tarde a través de las quince vidrieras. Usa la entrada combinada para la Conciergerie vecina, antaño prisión de la Revolución.",
              durationMin: 90,
            },
            {
              poiSlug: "notre-dame",
              text: "Camina hasta Notre-Dame en tu turno reservado gratuito para ver el interior restaurado tras la reapertura de 2024 sin la larga cola. Contempla el exterior y los arbotantes desde el jardín trasero, y luego pasea por la Île Saint-Louis, más tranquila, para un helado.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "latin-quarter",
              text: "Déjate llevar hacia el Barrio Latino por la tarde, fisgando en Shakespeare and Company y por las calles de librerías en torno a la Sorbona. Come bien una calle apartada del eje turístico y termina con una copa cerca del Panteón.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Montmartre, Orsay y el Marais",
          morning: [
            {
              poiSlug: "montmartre-sacre-coeur",
              text: "Sube temprano en metro hasta Montmartre y trepa a las escalinatas del Sacré-Cœur para el panorama gratuito antes de la llegada de los grupos y los captadores. Pasea por los tranquilos callejones detrás de la basílica, en torno a la viña y la Rue de l'Abreuvoir, y evita el gentío de la Place du Tertre.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "musee-orsay",
              text: "Toma el metro hasta el Museo de Orsay para tu turno con hora, subiendo directo a las salas de Monet, Renoir y Van Gogh de la quinta planta antes de bajar. Disfruta de la vista sobre la ciudad a través del gran reloj de la estación.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "le-marais",
              text: "Cruza el río hacia el Marais por la tarde, paseando por las boutiques y por la Place des Vosges porticada mientras los bares se llenan. Haz cola para un falafel en la Rue des Rosiers o reserva un bistró, y luego sumérgete en la escena nocturna del barrio.",
              durationMin: 180,
            },
          ],
        },
      ],
    },
    {
      citySlug: "paris",
      days: 4,
      summary:
        "Cuatro días son el punto ideal para una primera visita a París, lo que transforma el esprint turístico en unas verdaderas vacaciones. Los días uno a tres cubren lo esencial sin apuros: la Torre Eiffel, los Campos Elíseos y un crucero por el Sena; el Louvre, las islas, Notre-Dame y la Sainte-Chapelle; luego Montmartre, el Museo de Orsay y el Marais. El cuarto día hace de válvula de escape: una excursión a Versalles, al palacio y a sus vastos jardines, accesible en 45 minutos por el RER C y que conviene empezar en la apertura de las 9h, todos los días salvo el martes. Esta duración encaja con los viajeros que odian la marcha forzada, con las parejas y con quien tiene vuelos que enmarcan el viaje de forma incómoda. Para cuatro días recomendamos alojarse en el Barrio Latino: céntrico y accesible a pie desde las islas y desde Orsay, ofrece camas más económicas que Saint-Germain, justo al lado, y se encuentra en la línea del RER C, directa a Versalles. Más allá de cuatro días, añade una mañana de Museo Rodin e Inválidos o enlaza con Ámsterdam en tren rápido en unas tres horas y media. Reserva la Torre Eiffel, el Louvre, Orsay y el Passeport de Versalles con mucha antelación.",
      stayNeighborhoodSlug: "latin-quarter",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "La Torre Eiffel, los Campos Elíseos y el Sena",
          morning: [
            {
              poiSlug: "eiffel-tower",
              text: "Empieza por la Torre Eiffel para tu turno reservado de la cima antes de las colas, y pásate luego al Trocadéro para la foto de frente. Lleva los bolsos cerrados en este punto caliente de carteristas.",
              durationMin: 120,
            },
            {
              poiSlug: "musee-rodin",
              text: "Camina hasta el Museo Rodin para El Pensador entre las rosas, y échale un ojo a la cúpula de los Inválidos al lado. Una entrada de jardín es una opción rápida si quieres seguir avanzando.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "arc-de-triomphe",
              text: "Metro hasta el Arco del Triunfo y subida a la terraza para la vista sobre las avenidas, accesible por el paso subterráneo. Baja los Campos Elíseos hasta la Concordia y cruza las Tullerías.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "seine-cruise",
              text: "Toma un crucero por el Sena al crepúsculo para los monumentos iluminados, embarcando cerca del Pont Neuf o de la Torre Eiffel e instalándote en la cubierta descubierta. Quédate en un barco clásico de una hora en lugar de un crucero con cena.",
              durationMin: 75,
            },
            {
              text: "Cena de vuelta en el Barrio Latino, tomando tus referencias en el barrio que llamas casa. Come una calle apartada del eje turístico y termina con una copa en torno al Panteón.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "El Louvre, las islas y la Sainte-Chapelle",
          morning: [
            {
              poiSlug: "louvre",
              text: "Está en el Louvre para tu turno de las 9h y llega a la Gioconda antes del gentío, luego la Venus de Milo y las salas italianas. Entra por el Carrousel y fija una hora de salida para que el museo no engulla el día entero.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "sainte-chapelle",
              text: "Pásate a la Île de la Cité para tu turno en la Sainte-Chapelle en plena luz de la tarde, cuando las vidrieras se encienden. Usa la entrada combinada para la Conciergerie vecina.",
              durationMin: 90,
            },
            {
              poiSlug: "notre-dame",
              text: "Camina hasta Notre-Dame en tu turno reservado gratuito para ver el interior restaurado sin la cola, y luego admira los arbotantes desde el jardín trasero. Pasea por la Île Saint-Louis para un helado Berthillon.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Pasea por los muelles de la orilla izquierda a la caída del día, cuando los bouquinistes recogen, y luego cena en el Barrio Latino cerca de tu base. Reserva cualquier buena dirección, y huye de las trampas de menús de neón a lo largo del río.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Montmartre, Orsay y el Marais",
          morning: [
            {
              poiSlug: "montmartre-sacre-coeur",
              text: "Sube temprano a Montmartre para el panorama gratuito del Sacré-Cœur antes de los captadores y los grupos, y luego pasea por los tranquilos callejones de atrás, en torno a la viña. Toma el funicular con un billete de metro si las escaleras parecen empinadas, y vigila los bolsillos en las escalinatas abarrotadas.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "musee-orsay",
              text: "Metro hasta el Museo de Orsay para tu turno con hora, subiendo directo a los impresionistas de la quinta planta antes de bajar. No te pierdas la vista a través del gran reloj de la estación.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "le-marais",
              text: "Pásate al Marais por la tarde, fisgando en las boutiques y en la Place des Vosges porticada mientras los bares se llenan. Un falafel en la Rue des Rosiers o un bistró reservado, y luego una copa en la escena tardía del barrio.",
              durationMin: 180,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Excursión a Versalles",
          morning: [
            {
              poiSlug: "versailles",
              text: "Toma el RER C hasta Versailles Château Rive Gauche, unos 45 minutos, apuntando a la apertura del palacio a las 9h y evitando el martes. Usa tu entrada Passeport reservada con un turno con hora para el palacio y empieza por la Galería de los Espejos mientras está más tranquila, luego los Grandes Aposentos.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "versailles",
              text: "Pasa la tarde en los vastos jardines, gratuitos salvo los días de fuentes musicales, caminando o alquilando una bici o un coche eléctrico hasta el Gran Canal, los Trianon y la aldea rústica de María Antonieta. Prepara un pícnic o almuerza cerca de la finca, ya que los cafés del palacio son caros y están abarrotados.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              text: "Vuelve a coger el RER C hacia el centro de París a primera hora de la tarde, cansado pero libre de los grandes imprescindibles. Reserva una cena de despedida en el Barrio Latino o en Saint-Germain, dándote un capricho para tu última comida parisina.",
              durationMin: 150,
            },
            {
              text: "Termina con un lento paseo a lo largo del Sena para ver Notre-Dame y los puentes iluminados, a dos pasos de tu base. Ningún trayecto de vuelta que planear, que es todo el interés de alojarse en el centro durante cuatro días.",
              durationMin: 60,
            },
          ],
        },
      ],
    },
  ],
};

export default parisEs;
