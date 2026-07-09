import type { CityData } from "../types";

const barcelonaEs: CityData = {
  city: {
    slug: "barcelona",
    name: "Barcelona",
    country: "España",
    countrySlug: "spain",
    lat: 41.3874,
    lng: 2.1686,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "BCN",
    airportToCenter:
      "El Aerobus conecta las dos terminales con la Placa Catalunya en unos 35 minutos, 7,25 EUR el trayecto de ida, con salidas cada 5 a 10 minutos. Opciones más baratas: el tren R2 Nord desde la T2 hasta Passeig de Gracia o Sants por unos 4,90 EUR (o gratis con una tarjeta T-casual/Hola), o la línea de metro L9 Sud, panorámica pero lenta, con varios transbordos para llegar al centro.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [8],
    monthlyNotes: {
      1: "Fresco y luminoso a 14-15C, con la menor afluencia del año y las habitaciones más baratas, aunque el mar está demasiado frío para la playa. La cabalgata de Reyes (Cavalcada de Reis) del 5 de enero llena las calles de carrozas y dulces, y las rebajas de enero llenan las tiendas.",
      2: "Todavía suave a 15C, con poca gente y precios bajos, y a menudo lo bastante despejado para una comida larga en terraza a mediodía. El carnaval (Carnestoltes) anima la semana previa a la Cuaresma con desfiles de disfraces por los barrios, y Santa Eulalia, hacia el 12 de febrero, trae castells (torres humanas) y gigantes al casco antiguo.",
      3: "Las máximas se acercan a los 17-18C y los días se alargan, con los turistas llegando solo a final de mes en torno a la Semana Santa. Vigila el calendario: si la Semana Santa cae en marzo, el centro y los hoteles se llenan y los precios suben, si no, sigue siendo un mes tranquilo y de buena relación calidad-precio.",
      4: "Uno de los mejores meses a 19-20C, con tardes cálidas y colinas verdes, aunque la Semana Santa puede saturar el centro si cae ahora. Sant Jordi, el 23 de abril, es el momento cumbre, un día de libros y rosas en que La Rambla y el Passeig de Gracia se cubren de puestos de libreros al aire libre y las parejas se intercambian rosas.",
      5: "Calor fiable a 22-23C, con largas tardes y poca lluvia, sin duda el mes más bonito para venir. El Primavera Sound suele caer a finales de mayo o principios de junio y agota los hoteles muy rápido, así que comprueba las fechas del festival antes de fijar las tuyas, y arranca de lleno la temporada de cenas en terraza.",
      6: "Caluroso a 26-27C, soleado y animado, con el arranque de la temporada estival y las playas llenándose los fines de semana. La Sant Joan, la noche del 23 de junio, es una fiesta salvaje de fuegos artificiales y hogueras en la playa que dura hasta el amanecer, así que cuenta con ruido, muchísima gente junto al agua y cava por todas partes.",
      7: "Pleno verano a 28-29C, húmedo y abarrotado, con las playas a rebosar y los grandes monumentos de Gaudi agotados con días de antelación. Haz la Sagrada Familia y el Park Guell a la apertura, y luego retírate al mar o a una terraza con sombra para las horas pegajosas de primera hora de la tarde.",
      8: "El mes más caluroso, más húmedo y más concurrido a 29C, y el que conviene evitar: muchos comercios y restaurantes familiares cierran por vacaciones y los barceloneses se marchan a la costa. Si agosto es inevitable, reserva aire acondicionado, concentra las visitas a primera hora de la mañana y toma nota de la Festa Major de Gracia a mediados de agosto, cuando las calles de Gracia compiten con decoraciones elaboradas.",
      9: "El calor del verano sin lo peor de la canícula: 27C al principio, suavizándose a lo largo del mes, con el mar todavía apto para el baño. La Merce, la mayor fiesta de la ciudad, se celebra en torno al 24 de septiembre con torres humanas, correfocs, gigantes y conciertos gratuitos por todo el centro, y es el mejor momento para sentir la cultura propia de la ciudad.",
      10: "Días suaves en torno a 23C, con el regreso de las primeras lluvias de verdad y una luz rasante magnífica, y una afluencia que se aligera de forma notable tras la primera semana. Es una opción sólida de temporada baja tanto por el tiempo como por el precio de los hoteles, con las terrazas aún abiertas a mediodía.",
      11: "Más fresco a 18-19C, con episodios de lluvia habituales, pero muchos días luminosos entre frentes y los grandes monumentos más tranquilos del otoño. Vuelven los precios de temporada baja y puedes entrar sin reserva en restaurantes que en mayo cuelgan el cartel de completo, aunque los días de playa se han acabado.",
      12: "Suave para el invierno a 15-16C pero más lluvioso, con mercadillos de Navidad como la Fira de Santa Llucia junto a la catedral y la peculiar figura catalana del caganer que buscar. Tranquilo hasta el tramo de Navidad a Año Nuevo, cuando las tarifas suben y las calles alrededor de la catedral se llenan de luces y gente.",
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
    tagline: "Gaudi, callejuelas góticas y la playa en una ciudad que se recorre a pie.",
    heroIntro:
      "Barcelona combina los delirantes monumentos modernistas de Gaudi con un casco antiguo medieval y una playa urbana, todo en un centro compacto que se cubre sobre todo a pie, con el metro para los lugares más alejados. Tres días son el equilibrio justo para repartir la ruta de Gaudi, el corazón gótico y una tarde tranquila junto al mar sin marcha forzada. Ven en primavera o a principios de otoño, reserva la Sagrada Familia y el Park Guell semanas antes de volar, y mantén los bolsos cerrados, porque esta es una de las capitales europeas del carterismo.",
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
      vibe: "El corazón medieval de la ciudad, un laberinto de estrechas callejuelas de piedra entre la catedral y La Rambla que desembocan en plazas escondidas. Todo lo que un primer visitante quiere ver queda a diez minutos a pie, y las callejuelas cobran una atmósfera especial de noche, una vez que se dispersa el gentío diurno. Es céntrico y barato para dormir, pero también es el barrio más concurrido y más expuesto al carterismo.",
      pros: [
        "Llegar a la catedral, La Rambla, el puerto y El Born a pie, sin transporte",
        "Denso en bares de tapas baratos, cafés y hoteles pequeños",
        "Callejuelas de piedra con encanto que se vacían y se iluminan tras la cena",
      ],
      cons: [
        "La zona con más carterismo de la ciudad, sobre todo cerca de La Rambla",
        "Ruidoso por el trasiego y los bares hasta tarde, malo para el sueño ligero",
        "Algunos restaurantes de las plazas principales viven de la ubicación",
      ],
    },
    {
      slug: "el-born",
      citySlug: "barcelona",
      name: "El Born",
      lat: 41.3847,
      lng: 2.1817,
      bestFor: ["romantic", "nightlife", "local"],
      vibe: "El barrio más elegante del casco antiguo, justo al este del núcleo gótico, articulado en torno a la iglesia de Santa Maria del Mar y el Museo Picasso. Boutiques, bares de vinos y coctelerías bordean las callejuelas medievales, y se mantiene animado sin caer en la trampa para turistas. Te ofrece la atmósfera del casco antiguo con un aire más adulto y más orientado al diseño.",
      pros: [
        "La mejor concentración de bares de vinos, coctelerías y tapas del casco antiguo",
        "A pie del Museo Picasso, Santa Maria del Mar y el parque de la Ciutadella",
        "Callejuelas empedradas que siguen animadas pero conservan un aire local y de boutique",
      ],
      cons: [
        "Los bares en torno a las callejuelas principales suben el volumen los fines de semana",
        "Sin metro directamente dentro, aunque Jaume I y Barceloneta están cerca",
        "Los hoteles salen más caros que en el barrio gótico contiguo",
      ],
    },
    {
      slug: "eixample",
      citySlug: "barcelona",
      name: "Eixample",
      lat: 41.3915,
      lng: 2.1649,
      bestFor: ["first-time", "family", "romantic"],
      vibe: "La elegante cuadrícula trazada en el siglo XIX, con amplios bulevares, esquinas achaflanadas y la mayor concentración de fachadas modernistas de la ciudad a lo largo del Passeig de Gracia. Te sitúa a un corto paseo de la Casa Batllo, La Pedrera y la Sagrada Familia, sobre una red de metro bien conectada. Tranquilo, ordenado y céntrico sin el agobio del casco antiguo.",
      pros: [
        "A pie de las casas de Gaudi del Passeig de Gracia y cerca de la Sagrada Familia",
        "Red de metro densa, directa al tren del aeropuerto y a todas partes",
        "Calles anchas y tranquilas de noche, y un buen abanico de hoteles de gama media",
      ],
      cons: [
        "Resulta más funcional y menos romántico que las callejuelas del casco antiguo",
        "El tramo justo sobre el Passeig de Gracia es caro para alojarse",
        "Algunas manzanas quedan a una larga caminata en línea recta de la playa y el puerto",
      ],
    },
    {
      slug: "gracia",
      citySlug: "barcelona",
      name: "Gracia",
      lat: 41.4022,
      lng: 2.1568,
      bestFor: ["local", "budget", "nightlife"],
      vibe: "Un antiguo pueblo engullido por la ciudad, al norte del Eixample, que conserva su aire de plazas pequeñas y una fuerte identidad local. Tiendas independientes, bares bohemios y restaurantes familiares rodean plazas donde los vecinos beben al aire libre las noches templadas. Es la base para los viajeros que prefieren el barrio de verdad a la postal, con el Park Guell en la colina justo encima.",
      pros: [
        "Vida de barrio auténtica, plazas llenas de vecinos, no de grupos de turistas",
        "Mejor relación calidad-precio para comer y una escena de bares animada pero sin pretensiones",
        "Se sube a pie al Park Guell y en metro se baja al centro",
      ],
      cons: [
        "A 20-25 minutos a pie o un salto de metro del casco antiguo y la playa",
        "Las plazas populares suben el volumen las noches de fin de semana",
        "Menos grandes hoteles de renombre, más apartamentos y pequeñas casas de huéspedes",
      ],
    },
    {
      slug: "barceloneta",
      citySlug: "barcelona",
      name: "Barceloneta",
      lat: 41.3797,
      lng: 2.1894,
      bestFor: ["family", "budget", "local"],
      vibe: "El antiguo barrio de pescadores encajado entre el puerto y la playa urbana, una cuadrícula apretada de manzanas estrechas que desemboca directamente en la arena. Es el sitio donde dormir si la playa es el objetivo, con los restaurantes de marisco y el paseo marítimo a pie de puerta. Lleno de carácter de día, y los bares del frente marítimo lo mantienen animado hasta bien entrada la noche en verano.",
      pros: [
        "A un paso de la playa urbana y del paseo marítimo, sin necesidad de transporte",
        "El metro Barceloneta en la línea L4, a un par de paradas del casco antiguo",
        "Auténticos bares de marisco y de vermut, una calle hacia dentro desde el agua",
      ],
      cons: [
        "Los restaurantes del frente marítimo son trampas para turistas, come una calle hacia dentro",
        "Pisos angostos y calurosos en verano, y ruidosos cerca de los bares de playa",
        "A una caminata o un trayecto de metro de los monumentos de Gaudi, arriba en el Eixample",
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
      tip: "Compra una entrada con hora en internet con días o incluso semanas de antelación, cuelga el cartel de completo y no hay una opción útil sin reserva en temporada. Reserva el primer turno tras la apertura para el interior más vacío y la mejor luz matinal a través de las vidrieras de la fachada este del Nacimiento, que resplandecen en azul y verde a primera hora. La subida a las torres es un suplemento aparte de pago con su propio turno horario, así que añádela al reservar, no el mismo día.",
    },
    {
      slug: "park-guell",
      citySlug: "barcelona",
      name: "Park Guell",
      lat: 41.4145,
      lng: 2.1527,
      kind: "park",
      needsBooking: true,
      tip: "La Zona Monumental con la terraza de mosaico y el famoso lagarto requiere una entrada con hora que se agota días antes, así que reserva por internet y no te presentes nunca sin más. Coge el primer turno del día, hacia las 9:30, para adelantarte a la gente y al calor en la terraza expuesta, y usa las escaleras mecánicas al aire libre de la Baixada de la Gloria para ahorrarte la cuesta empinada. El parque boscoso de alrededor es gratis si solo quieres las vistas sin los mosaicos.",
    },
    {
      slug: "casa-batllo",
      citySlug: "barcelona",
      name: "Casa Batllo",
      lat: 41.3917,
      lng: 2.1649,
      kind: "sight",
      needsBooking: true,
      tip: "La casa con escamas de dragón de Gaudi en el Passeig de Gracia vende entradas con hora que vuelan en temporada alta, así que reserva por internet con antelación en vez de hacer cola. Ve a la apertura o en el último turno antes del cierre para esquivar el gentío de los grupos en la estrecha escalera, y usa la tableta de realidad aumentada incluida para los detalles animados. Combínala con La Pedrera, a cinco minutos a pie más arriba por el mismo bulevar.",
    },
    {
      slug: "la-pedrera",
      citySlug: "barcelona",
      name: "La Pedrera (Casa Mila)",
      lat: 41.3953,
      lng: 2.1619,
      kind: "sight",
      needsBooking: true,
      tip: "El edificio de viviendas de fachada ondulada de Gaudi es otro monumento con entrada por horas, así que reserva por internet en vez de presentarte sin más. La azotea con sus chimeneas en forma de casco de guerrero es la recompensa, mejor en el último turno de día para una luz más suave, y en verano la sesión nocturna aparte «Noches de Gaudi» en la azotea, con música y bebidas, vale el suplemento. Está a cinco minutos por el Passeig de Gracia desde la Casa Batllo, así que haz las dos juntas.",
    },
    {
      slug: "la-rambla",
      citySlug: "barcelona",
      name: "La Rambla",
      lat: 41.3809,
      lng: 2.1729,
      kind: "sight",
      needsBooking: false,
      tip: "Es la arteria turística que recorrer una vez por el ambiente y las estatuas vivientes, no para comer ni beber, donde las terrazas cobran el doble por una comida mediocre. Es el peor punto de carterismo de la ciudad, así que lleva el bolso cerrado y por delante, y el móvil fuera del bolsillo trasero. Desvíate al mercado de la Boqueria a media Rambla y a las calles del Barri Gotic al este para lo que de verdad buscas.",
    },
    {
      slug: "barcelona-cathedral",
      citySlug: "barcelona",
      name: "Barri Gotic y catedral de Barcelona",
      lat: 41.3839,
      lng: 2.1762,
      kind: "sight",
      needsBooking: false,
      tip: "La catedral gótica cobra una pequeña entrada a los turistas durante el día (unos 9 EUR, con el ascensor a la azotea y el claustro con sus ocas residentes), y las horas gratuitas se reservan para el culto a primera y última hora. Ve a la apertura para tener el claustro tranquilo, y luego piérdete a propósito por las callejuelas de alrededor, buscando la Placa Sant Felip Neri y el barrio judío medieval. La azotea ofrece una vista cercana sobre las agujas del casco antiguo.",
    },
    {
      slug: "picasso-museum",
      citySlug: "barcelona",
      name: "Museo Picasso",
      lat: 41.3852,
      lng: 2.1807,
      kind: "museum",
      needsBooking: true,
      tip: "Reserva un turno con hora por internet, la cola en la estrecha callejuela de El Born es larga y el museo limita el aforo. La colección es más fuerte en los primeros años barceloneses de Picasso y su serie de Las Meninas, no en su famosa obra tardía, así que ven por la formación en vez de por los grandes éxitos. La entrada es gratis los jueves por la tarde a partir de las 17:00 y el primer domingo de mes, pero aun así debes reservar el turno gratuito por internet con antelación.",
    },
    {
      slug: "la-boqueria",
      citySlug: "barcelona",
      name: "Mercado de la Boqueria",
      lat: 41.3818,
      lng: 2.1717,
      kind: "food",
      needsBooking: false,
      tip: "El mercado cubierto que da a La Rambla abre de lunes a sábado, más o menos de 8:00 a 20:30, y es mejor a media mañana, antes de los grupos y una vez que los comerciantes están montados. Los puestos de justo a la entrada están inflados para los turistas, así que ve al fondo y a los lados para los pescaderos de verdad, los mostradores de jamón y un taburete en una barra en activo como el Pinotxo o El Quim para platos hechos al momento. Cierra los domingos.",
    },
    {
      slug: "barceloneta-beach",
      citySlug: "barcelona",
      name: "Playa de la Barceloneta",
      lat: 41.378,
      lng: 2.1925,
      kind: "experience",
      needsBooking: false,
      tip: "La playa urbana más cercana al centro, abarrotada en verano, así que llega antes de las 11:00 para pillar sitio y no dejes nunca los bolsos sin vigilar, porque el robo en la playa es constante. Los restaurantes de paella y sangría del frente marítimo a lo largo del paseo son trampas carísimas, así que come una calle hacia dentro en la Barceloneta propiamente dicha o llévate un pícnic. Para una arena más tranquila y limpia, camina hacia el norte hasta las playas del Bogatell o del Mar Bella.",
    },
    {
      slug: "montjuic",
      citySlug: "barcelona",
      name: "Montjuic y Fuente Mágica",
      lat: 41.3711,
      lng: 2.1519,
      kind: "viewpoint",
      needsBooking: false,
      tip: "La colina sobre el puerto alberga la Fundación Joan Miro, el museo de arte MNAC, jardines y el castillo, así que dedícale media jornada y coge el funicular y luego el teleférico para ahorrarte la subida. La Fuente Mágica al pie del MNAC ofrece espectáculos gratuitos de luz y música ciertas noches (por lo general de jueves a sábado en verano, menos noches fuera de temporada), así que comprueba el programa del momento antes de ir, porque se apaga en invierno y durante las sequías. Llega 20 minutos antes para un sitio en las escalinatas.",
    },
    {
      slug: "palau-de-la-musica",
      citySlug: "barcelona",
      name: "Palau de la Musica Catalana",
      lat: 41.3875,
      lng: 2.1751,
      kind: "sight",
      needsBooking: true,
      tip: "La sala de conciertos modernista solo se visita en una visita guiada con hora o asistiendo a un concierto, y los turnos de visita se agotan, así que reserva por internet con antelación. La claraboya de vidrieras y la fachada de columnas de mosaico de la sala principal son la razón para venir, y una breve visita guiada basta para verlas. Si puedes, reserva mejor un concierto de verdad por la noche, a menudo un programa de guitarra española o música catalana a buen precio, para ver la sala iluminada y en uso.",
    },
    {
      slug: "santa-maria-del-mar",
      citySlug: "barcelona",
      name: "El Born y Santa Maria del Mar",
      lat: 41.3838,
      lng: 2.182,
      kind: "sight",
      needsBooking: false,
      tip: "La iglesia del siglo XIV es gratuita durante las horas de culto pero cobra una pequeña tarifa (unos 10 EUR) por la visita guiada de la azotea y la cripta, que es la que merece la pena por la vista y el interior gótico catalán puro. Ven a las callejuelas de El Born de alrededor a primera hora de la tarde para los bares de vinos y de tapas, apuntando fuera del Passeig del Born principal para una mejor relación calidad-precio. La nave esbelta y desnuda de la iglesia es el antídoto al exceso de Gaudi.",
    },
    {
      slug: "bunkers-del-carmel",
      citySlug: "barcelona",
      name: "Mirador de los Bunkers del Carmel",
      lat: 41.4194,
      lng: 2.1622,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Los antiguos búnkeres antiaéreos de la guerra civil en el Turo de la Rovira ofrecen la mejor vista gratuita de 360 grados sobre toda la ciudad y hacia el mar, y es el punto local para la puesta de sol. No hay ninguna tienda arriba y son 15 minutos de subida a pie desde la parada de autobús más cercana, así que lleva tus propias bebidas y algo de picar, más una capa porque sopla viento. El acceso está oficialmente restringido después de las 21:30 para frenar el ruido, así que ven para la puesta de sol, no para una noche larga.",
    },
    {
      slug: "parc-de-la-ciutadella",
      citySlug: "barcelona",
      name: "Parc de la Ciutadella",
      lat: 41.3884,
      lng: 2.1866,
      kind: "park",
      needsBooking: false,
      tip: "El gran espacio verde central de la ciudad, junto a El Born, es gratis y está abierto todo el día, el sitio natural para bajar el ritmo entre visitas del casco antiguo. Alquila una barca en el lago, admira la ornamentada fuente de la Cascada que un joven Gaudi ayudó a diseñar, y haz un pícnic en el césped con los vecinos una tarde templada. El parlamento catalán y un pequeño zoo se encuentran dentro del recinto si llevas niños contigo.",
    },
  ],

  itineraries: [
    {
      citySlug: "barcelona",
      days: 2,
      summary:
        "Dos días cubren los imprescindibles de Barcelona, pero es una carrera por lo más destacado, porque la ciudad pide de verdad tres para repartir bien la ruta de Gaudi, el casco antiguo y la playa. En 48 horas puedes hacer lo esencial de Gaudi el primer día (Sagrada Familia, las casas del Passeig de Gracia, Park Guell) y el casco antiguo el segundo (la catedral, El Born, el Museo Picasso, La Boqueria, La Rambla), colando un rato corto de playa o de puesta de sol si aguanta la energía. Lo que hay que sacrificar: Montjuic, el Palau de la Musica, una tarde de playa en condiciones y todo paseo sin prisa, así que es una marcha forzada. Va bien para un fin de semana, una escala o un primer aperitivo. Lo innegociable: reserva con antelación las entradas con hora de la Sagrada Familia y del Park Guell semanas antes de volar, además de la Casa Batllo o La Pedrera, o no entrarás en absoluto. Instálate en el Barri Gotic para que el día del casco antiguo se haga a pie y los saltos de metro hacia Gaudi sean rápidos. Mantén los bolsos cerrados, el casco antiguo y el metro son puntos calientes de carterismo.",
      stayNeighborhoodSlug: "barri-gotic",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Ruta de Gaudi: Sagrada Familia, Passeig de Gracia, Park Guell",
          morning: [
            {
              poiSlug: "sagrada-familia",
              text: "Empieza por la Sagrada Familia en tu primer turno reservado con antelación, antes del gentío y con el sol matinal iluminando las vidrieras azul-verde de la fachada del Nacimiento. Cuenta con 90 buenos minutos para el interior y las fachadas, y sube a una torre si añadiste el turno.",
              durationMin: 90,
            },
            {
              poiSlug: "casa-batllo",
              text: "Coge el metro dos paradas hasta el Passeig de Gracia para las casas de Gaudi. Haz la Casa Batllo en tu turno con hora por la fachada con escamas de dragón y la tableta de audio animada, y luego camina cinco minutos más arriba por el bulevar.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "la-pedrera",
              text: "Ve La Pedrera (Casa Mila) cinco minutos más arriba por el mismo bulevar, en tu turno con hora, por la fachada ondulada y las chimeneas en forma de casco de guerrero de la azotea. Come rápido en una calle lateral apartada del Passeig de Gracia en vez de en las caras terrazas del bulevar.",
              durationMin: 90,
            },
            {
              poiSlug: "park-guell",
              text: "Sube al Park Guell para un turno con hora de tarde en la Zona Monumental, cogiendo el metro y luego las escaleras mecánicas al aire libre para ahorrarte la cuesta empinada. Ve la terraza de mosaico y el lagarto, y luego quédate para los miradores boscosos y gratuitos sobre la ciudad.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "santa-maria-del-mar",
              text: "Baja de nuevo y dedica la tarde-noche a El Born, paseando por las callejuelas medievales alrededor de Santa Maria del Mar mientras se llenan los bares de vinos. Reserva una mesa de tapas apartada del Passeig del Born principal, donde están las mejores direcciones, hacia las 20:30.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Casco antiguo: catedral, Picasso, Boqueria, La Rambla",
          morning: [
            {
              poiSlug: "barcelona-cathedral",
              text: "Empieza por la catedral de Barcelona a la apertura para tener el claustro y sus ocas en calma, y sube a la azotea para la vista sobre las agujas góticas. Luego piérdete a propósito por el Barri Gotic, buscando la Placa Sant Felip Neri y el antiguo barrio judío.",
              durationMin: 90,
            },
            {
              poiSlug: "picasso-museum",
              text: "Camina hacia el este por El Born hasta el Museo Picasso en tu turno reservado, por sus primeros años barceloneses y la serie de Las Meninas en vez de la famosa obra tardía. Es un museo compacto, así que 75 minutos bastan antes de comer.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "la-boqueria",
              text: "Tira hacia el mercado de la Boqueria que da a La Rambla para comer, yendo a los puestos del fondo para un taburete en una barra en activo como el Pinotxo o El Quim para platos hechos al momento. Los puestos de delante están inflados para los turistas, así que sigue avanzando.",
              durationMin: 75,
            },
            {
              poiSlug: "la-rambla",
              text: "Recorre La Rambla una vez de punta a punta por el ambiente y las estatuas vivientes, con el bolso cerrado y por delante, porque es el peor punto de carterismo de la ciudad. Síguela hasta la columna de Colón y el puerto al final.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "barceloneta-beach",
              text: "Desde el puerto, bordea el paseo marítimo hasta la playa de la Barceloneta para un rato de arena a última hora de la tarde y un baño si hace bastante calor. Vigila los bolsos, porque el robo en la playa es constante.",
              durationMin: 90,
            },
            {
              text: "Cena de despedida en la Barceloneta una calle hacia dentro desde el frente marítimo, donde el marisco es honesto y las trampas están en el paseo. Pide pescado fresco o una paella de verdad a precio de comida en vez de las versiones del menú turístico junto al agua.",
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
        "Sí, tres días son la duración correcta para Barcelona, y es lo que recomendamos para una primera visita. Da una jornada entera a la ruta de Gaudi (Sagrada Familia, las casas del Passeig de Gracia, Park Guell), una jornada propia al casco antiguo (la catedral, El Born, el Museo Picasso, La Boqueria, La Rambla), y una tercera jornada que combina la playa con la sala de conciertos modernista y el parque de la Ciutadella a un ritmo más relajado. Comes bien por el Eixample, El Born y la Barceloneta, encajas tanto una tarde de playa en condiciones como una puesta de sol, y todavía te sientas en una plaza en vez de cruzarla a la carrera. Lo que sigue quedando fuera: Montjuic en su conjunto y toda excursión, que es justo lo que añade un cuarto día. Va bien para primeros visitantes, parejas y quien siga luego hacia Sevilla o Granada. Alójate en el Eixample: se va a pie a las casas de Gaudi del Passeig de Gracia, se está cerca de la Sagrada Familia, y su red de metro hace que el casco antiguo y la playa se alcancen rápido. Reserva la Sagrada Familia, el Park Guell y las casas del Passeig de Gracia semanas antes de volar, y mantén los bolsos cerrados en el casco antiguo y en el metro.",
      stayNeighborhoodSlug: "eixample",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Ruta de Gaudi: Sagrada Familia, Passeig de Gracia, Park Guell",
          morning: [
            {
              poiSlug: "sagrada-familia",
              text: "Empieza por la Sagrada Familia en tu primer turno reservado con antelación, por delante del gentío y con la luz matinal a través de las vidrieras del este del Nacimiento. Cuenta con 90 buenos minutos para el interior y las dos fachadas, añadiendo una subida a las torres si reservaste una.",
              durationMin: 90,
            },
            {
              poiSlug: "casa-batllo",
              text: "Camina o coge una parada de metro hasta el Passeig de Gracia para la Casa Batllo en tu turno con hora, por la fachada con escamas de dragón y la tableta de audio animada. Desde tu base en el Eixample todo esto queda cerca, así que mantén un ritmo relajado.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "la-pedrera",
              text: "Ve La Pedrera (Casa Mila) cinco minutos más arriba por el mismo bulevar en tu turno con hora, por la fachada ondulada y las chimeneas en forma de casco de guerrero de la azotea. Come en una calle lateral tranquila apartada del Passeig de Gracia, no en las terrazas del bulevar.",
              durationMin: 90,
            },
            {
              poiSlug: "park-guell",
              text: "Sube al Park Guell para un turno con hora de tarde en la Zona Monumental, cogiendo el metro y luego las escaleras mecánicas al aire libre para saltarte la cuesta empinada. Ve la terraza de mosaico y el lagarto, y luego demórate en los miradores boscosos y gratuitos mientras la luz se suaviza.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              text: "Baja de nuevo para cenar en el Eixample cerca de tu base, donde los bares de tapas y de vermut son sólidos y sin el sobreprecio del casco antiguo. Reserva con antelación en cualquier sitio bien valorado, las buenas mesas se llenan a partir de las 21:00.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Casco antiguo: catedral, El Born, Picasso, Boqueria, La Rambla",
          morning: [
            {
              poiSlug: "barcelona-cathedral",
              text: "Empieza por la catedral de Barcelona a la apertura para el claustro tranquilo y sus ocas, y luego sube a la azotea para la vista sobre las agujas góticas. Pasea después por las callejuelas del Barri Gotic, buscando la Placa Sant Felip Neri y el barrio judío medieval.",
              durationMin: 90,
            },
            {
              poiSlug: "picasso-museum",
              text: "Camina hacia el este por El Born hasta el Museo Picasso en tu turno reservado, fuerte en sus primeros años barceloneses y la serie de Las Meninas. Es compacto, así que 75 minutos lo cubren antes de comer.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "santa-maria-del-mar",
              text: "Entra en Santa Maria del Mar, muy cerca, por la nave esbelta y desnuda del gótico catalán, y haz la visita a bajo precio de la azotea y la cripta si la vista te tienta. Luego recorre las boutiques y las callejuelas de El Born de alrededor.",
              durationMin: 60,
            },
            {
              poiSlug: "la-boqueria",
              text: "Pásate al mercado de la Boqueria que da a La Rambla para una comida tardía en una barra de los puestos del fondo como el Pinotxo o El Quim, saltándote los puestos de delante inflados. Luego recorre La Rambla una vez de punta a punta por el ambiente, con el bolso cerrado y por delante, hasta el puerto.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "bunkers-del-carmel",
              text: "Sube a los Bunkers del Carmel para la puesta de sol, el mirador gratuito de 360 grados sobre toda la ciudad, cogiendo un autobús la mayor parte del camino y luego los 15 minutos de subida a pie. Lleva tus propias bebidas y algo de picar, porque no hay ninguna tienda arriba, y ven para la puesta de sol en vez de para una noche larga.",
              durationMin: 90,
            },
            {
              text: "Baja de nuevo para cenar en El Born o en tu base del Eixample, reservando con antelación. Remátalo con un cóctel en uno de los bares de diseño de El Born si te queda energía.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Sala de conciertos, Ciutadella y la playa",
          morning: [
            {
              poiSlug: "palau-de-la-musica",
              text: "Empieza con una visita guiada reservada con antelación del Palau de la Musica Catalana, por la claraboya de vidrieras y la sala principal de columnas de mosaico. La visita corta basta para ver el interior modernista antes de que la jornada caliente.",
              durationMin: 75,
            },
            {
              poiSlug: "parc-de-la-ciutadella",
              text: "Camina hasta el parque de la Ciutadella, muy cerca, gratis y verde, por la ornamentada fuente de la Cascada que un joven Gaudi ayudó a diseñar y una barca en el lago. Haz un pícnic en el césped o toma una comida ligera en el borde de El Born del parque.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "barceloneta-beach",
              text: "Baja a la playa de la Barceloneta para la tarde y un baño si hace calor, manteniendo los bolsos vigilados en todo momento. Para una arena más limpia y tranquila, camina hacia el norte hasta las playas del Bogatell o del Mar Bella.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              text: "Cena de marisco en la Barceloneta una calle hacia dentro desde el paseo, evitando las trampas del frente marítimo, y pide pescado fresco o un arroz. Es la comida en la que jugar la carta clásica para tu última noche.",
              durationMin: 120,
            },
            {
              text: "Termina con un vermut tranquilo o un paseo por la marina del Port Vell según se encienden las luces. Todo queda cerca de tu base del Eixample en metro, así que no hay ningún trayecto largo de vuelta que planear.",
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
        "Cuatro días son el equilibrio ideal para una primera visita a Barcelona, y convierten una carrera de visitas en unas vacaciones de verdad. Los días uno a tres cubren lo esencial: la ruta de Gaudi (Sagrada Familia, las casas del Passeig de Gracia, Park Guell), el casco antiguo (la catedral, El Born, el Museo Picasso, La Boqueria, La Rambla), y una jornada mixta de la sala de conciertos, el parque de la Ciutadella y la playa, cada una hecha sin prisa. El cuarto día es la válvula de escape, montado en torno a Montjuic (el MNAC, Miro, los jardines y el castillo, a los que se llega en funicular y teleférico) más la Fuente Mágica, o cambiado por una excursión al monasterio de montaña de Montserrat o a Girona en tren rápido. Esta duración va bien para los viajeros que odian la marcha forzada, las parejas y quien tiene vuelos que enmarcan el viaje de forma incómoda. Para cuatro días recomendamos alojarse en Gracia: has aceptado un ritmo más lento, y sus plazas y sus bares familiares hacen que volver a casa cada noche sea lo mejor del día, con el Park Guell en la colina justo encima. Reserva la Sagrada Familia, el Park Guell y las casas de Gaudi con mucha antelación, y mantén los bolsos cerrados entre la multitud.",
      stayNeighborhoodSlug: "gracia",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Ruta de Gaudi: Sagrada Familia, Passeig de Gracia, Park Guell",
          morning: [
            {
              poiSlug: "sagrada-familia",
              text: "Empieza por la Sagrada Familia en tu primer turno reservado, antes del gentío y con la luz matinal en las vidrieras de la fachada del Nacimiento. Cuenta con 90 minutos, añadiendo una subida a las torres si reservaste el turno.",
              durationMin: 90,
            },
            {
              poiSlug: "casa-batllo",
              text: "Coge el metro hasta el Passeig de Gracia para la Casa Batllo en tu turno con hora, por la fachada con escamas de dragón y la tableta de audio animada. Luego camina cinco minutos más arriba por el bulevar.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "la-pedrera",
              text: "Ve La Pedrera (Casa Mila) más arriba por el mismo bulevar en tu turno con hora, por la fachada ondulada y la azotea de chimeneas en forma de casco de guerrero. Come en una calle lateral apartada del Passeig de Gracia, no en las terrazas del bulevar.",
              durationMin: 90,
            },
            {
              poiSlug: "park-guell",
              text: "Sube al Park Guell para un turno de tarde en la Zona Monumental, que queda justo encima de tu base en Gracia, usando las escaleras mecánicas al aire libre para la cuesta. Ve la terraza de mosaico y el lagarto, y luego baja a Gracia propiamente dicha.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              text: "Instálate en Gracia para la tarde-noche, bebiendo al aire libre en una de sus plazas como los vecinos antes de cenar. Los restaurantes familiares y los bares sin pretensiones del barrio quedan a un corto paseo de tu cama.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Casco antiguo: catedral, El Born, Picasso, Boqueria, La Rambla",
          morning: [
            {
              poiSlug: "barcelona-cathedral",
              text: "Coge el metro hasta la catedral de Barcelona a la apertura para el claustro tranquilo y sus ocas, y la vista desde la azotea sobre las agujas góticas. Pasea después por el Barri Gotic, buscando la Placa Sant Felip Neri y el barrio judío medieval.",
              durationMin: 90,
            },
            {
              poiSlug: "picasso-museum",
              text: "Camina hacia el este por El Born hasta el Museo Picasso en tu turno reservado, fuerte en los primeros años barceloneses y Las Meninas. Un museo compacto, así que 75 minutos bastan antes de comer.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "la-boqueria",
              text: "Pásate al mercado de la Boqueria para comer en una barra de los puestos del fondo como el Pinotxo o El Quim, saltándote los puestos de delante con precio de turista. Luego recorre La Rambla una vez por el ambiente, con el bolso cerrado y por delante, hasta el puerto.",
              durationMin: 120,
            },
            {
              poiSlug: "parc-de-la-ciutadella",
              text: "Da un rodeo hasta el parque de la Ciutadella junto a El Born, gratis y verde, por la fuente de la Cascada y una barca en el lago. Una pausa tranquila en medio de una jornada de casco antiguo.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "santa-maria-del-mar",
              text: "Vuelve a El Born por la tarde-noche alrededor de Santa Maria del Mar, entrando en la esbelta nave gótica de la iglesia si está abierta, y luego saliendo a los bares de vinos. Apunta fuera del Passeig del Born principal para tapas con mejor relación calidad-precio.",
              durationMin: 90,
            },
            {
              text: "Cena en El Born, reservando con antelación en cualquier sitio bien valorado, antes de volver a subir a Gracia. Termina con un cóctel en uno de los bares de diseño del barrio si la noche es joven.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Sala de conciertos, playa y puesta de sol",
          morning: [
            {
              poiSlug: "palau-de-la-musica",
              text: "Empieza con una visita guiada reservada con antelación del Palau de la Musica Catalana, por la claraboya de vidrieras y la sala de columnas de mosaico. La visita corta basta para ver el interior modernista antes de que la jornada caliente.",
              durationMin: 75,
            },
            {
              poiSlug: "la-rambla",
              text: "Si te la saltaste, recorre La Rambla y las calles que salen de ella ahora, con el bolso cerrado, y luego baja hacia el puerto y la marina del Port Vell. Come temprano una calle hacia dentro desde el agua en vez de en las terrazas turísticas.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "barceloneta-beach",
              text: "Dedica la tarde a la playa de la Barceloneta y un baño si hace calor, vigilando los bolsos en todo momento. Camina hacia el norte hasta las playas más limpias del Bogatell o del Mar Bella si quieres una arena más tranquila y menos gente.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "bunkers-del-carmel",
              text: "Sube a los Bunkers del Carmel para la puesta de sol, el mirador gratuito de 360 grados sobre la ciudad, muy cerca de tu base en Gracia. Lleva tus propias bebidas y algo de picar, porque no hay ninguna tienda arriba, y sopla viento.",
              durationMin: 90,
            },
            {
              text: "Baja para cenar en Gracia, en una terraza de plaza una noche templada, reservando con antelación para las direcciones populares. Una tarde-noche local relajada en vez de un tramo turístico.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Montjuic y Fuente Mágica, o una excursión",
          morning: [
            {
              poiSlug: "montjuic",
              text: "Dedica la mañana a Montjuic, cogiendo el funicular y luego el teleférico para ahorrarte la subida, por el museo de arte MNAC, la Fundación Joan Miro, los jardines y el castillo con su vista sobre el puerto. Como alternativa, cambia toda la jornada por un tren al monasterio de montaña de Montserrat por sus picos dentados y su coro de niños, o a Girona por su catedral y su antiguo barrio judío.",
              durationMin: 240,
            },
          ],
          afternoon: [
            {
              text: "Baja de Montjuic por los jardines y el pueblo de arquitectura del Poble Espanyol si te apetece, o coge el tren de la excursión de vuelta a Sants a última hora de la tarde. En cualquier caso, mantén un ritmo tranquilo, porque es la jornada válvula de escape.",
              durationMin: 120,
            },
            {
              text: "Descansa cerca de tu base en Gracia o en el Eixample con un café y un paseo tranquilo, cuidando las piernas para una última gran velada. Si hiciste Montserrat, es cuando vuelves.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "montjuic",
              text: "Si el programa está en marcha, acércate a la Fuente Mágica al pie del MNAC en Montjuic para el espectáculo gratuito de luz y música, llegando 20 minutos antes para un sitio en las escalinatas. Comprueba primero las noches del momento, porque solo funciona ciertas tardes y se apaga en invierno y durante las sequías.",
              durationMin: 60,
            },
            {
              text: "Termina con una cena de despedida de vuelta en Gracia, gastando un poco más en tu última comida catalana en un restaurante de plaza que hayas fichado antes. Remátalo con una última copa en una plaza tranquila, a un corto paseo de tu cama, que es todo el sentido de alojarse aquí cuatro días.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
  ],
};

export default barcelonaEs;
