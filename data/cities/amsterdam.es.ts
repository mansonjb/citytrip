import type { CityData } from "../types";

const amsterdamEs: CityData = {
  city: {
    slug: "amsterdam",
    name: "Amsterdam",
    country: "Países Bajos",
    countrySlug: "netherlands",
    lat: 52.3676,
    lng: 4.9041,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "AMS",
    airportToCenter:
      "Tren directo desde Schiphol hasta Amsterdam Centraal, unos 17 minutos por alrededor de 5 EUR, con salidas cada pocos minutos desde primera hora de la mañana hasta bien entrada la noche. Compra el billete en las máquinas amarillas o pasa una tarjeta contactless por los tornos; olvídate de los taxis, que cuestan de 40 a 50 EUR por el mismo trayecto.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9],
    avoidMonths: [1],
    monthlyNotes: {
      1: "El mes más frío y gris, con máximas cercanas a 6C, pocas horas de luz y lluvia frecuente, así que planifica jornadas centradas en museos. Hay poca gente y las tarifas de hotel tocan su mínimo anual una vez pasado el Año Nuevo, pero la ruta en barco iluminado del Amsterdam Light Festival dura hasta mediados de enero y es la única razón para desafiar la oscuridad.",
      2: "Todavía frío y húmedo, en torno a 7C, y el mes completo más tranquilo para los sitios y las tarifas. Reserva la Casa de Ana Frank y el Museo Van Gogh y los recorrerás con espacio para respirar; lleva un buen impermeable en lugar de un paraguas, que el viento de los canales destroza.",
      3: "Las máximas suben hacia 10C y empieza la temporada de los tulipanes: los jardines de Keukenhof abren en la segunda mitad del mes y duran hasta mediados de mayo. La afluencia sigue siendo moderada, pero los primeros fines de semana de Keukenhof y de los campos de bulbos se llenan rápido, así que reserva el transporte para la excursión con antelación.",
      4: "La primavera de verdad, en torno a 13C, con Keukenhof en plena floración y los campos de bulbos al sur de Haarlem llenos de color. El Día del Rey, el 27 de abril, convierte toda la ciudad en una fiesta callejera naranja y una flotilla por los canales; es espectacular, pero hay que reservar alojamiento con meses de antelación y esperar que todo lo demás esté abarrotado.",
      5: "Uno de los mejores meses, con máximas cercanas a 17C, largas tardes de luz y Keukenhof abierto hasta mediados de mes. La afluencia sube de forma constante y las tarifas de hotel alcanzan máximos de temporada media, así que reserva las habitaciones pronto y empieza la Casa de Ana Frank y las visitas a museos nada más abrir.",
      6: "Cálido, en torno a 20C, con la mayor duración del día del año y las terrazas a pleno rendimiento. El número de turistas es alto, aunque todavía no en el pico de agosto; las tardes junto a los canales son la recompensa, y los festivales al aire libre empiezan a llenar el calendario del teatro al aire libre del Vondelpark.",
      7: "Plena temporada: 22C durante el día, museos abarrotados y las tarifas de habitación más altas del verano. Reserva cada sitio de entrada horaria con semanas de antelación, coge los tranvías en lugar de pelearte por un taxi, y guarda el anillo de canales para primera hora de la mañana o después de las 20h, cuando la gente se dispersa.",
      8: "El mismo calor y afluencia que en julio, más el Orgullo: el famoso Canal Parade de barcos decorados navega por el Prinsengracht el primer sábado, atrayendo a enormes multitudes al agua. Reserva con mucha antelación para ese fin de semana y espera que los hoteles del centro cuelguen el cartel de completo.",
      9: "Máximas en torno a 19C, la afluencia baja notablemente después de la primera semana, y el clima más suave de la temporada media. Es la alternativa inteligente al verano: los precios se relajan, las terrazas siguen funcionando los días cálidos y los grandes museos están más tranquilos.",
      10: "Más fresco, en torno a 14C, con color otoñal de verdad en el Vondelpark y el regreso de la lluvia. El número de turistas cae y las tarifas de hotel lo siguen; un mes de buena relación calidad-precio si aceptas que el tiempo al aire libre depende del clima y que los museos sostienen el viaje.",
      11: "Gris, húmedo y frío, con máximas cercanas a 9C, el tramo más tranquilo antes de las fiestas. Las tarifas son bajas y las colas cortas; la llegada de Sinterklaas a mediados de mes y las primeras luces de Navidad añaden algo de ambiente a unos días por lo demás oscuros.",
      12: "Frío, en torno a 6C, con días cortos y llovizna frecuente, pero el Amsterdam Light Festival lanza su ruta de arte iluminado por los canales a finales de noviembre y dura hasta enero. Los mercados de Navidad y los puentes iluminados levantan el ánimo; reserva la Casa de Ana Frank y los museos pronto, ya que la semana de fiestas ve un pico de visitantes.",
    },
    climate: {
      1: { highC: 6, lowC: 1, rainyDays: 12 },
      2: { highC: 7, lowC: 1, rainyDays: 10 },
      3: { highC: 10, lowC: 3, rainyDays: 11 },
      4: { highC: 13, lowC: 5, rainyDays: 10 },
      5: { highC: 17, lowC: 8, rainyDays: 10 },
      6: { highC: 20, lowC: 11, rainyDays: 11 },
      7: { highC: 22, lowC: 13, rainyDays: 11 },
      8: { highC: 22, lowC: 13, rainyDays: 11 },
      9: { highC: 19, lowC: 11, rainyDays: 11 },
      10: { highC: 14, lowC: 8, rainyDays: 12 },
      11: { highC: 9, lowC: 5, rainyDays: 13 },
      12: { highC: 6, lowC: 2, rainyDays: 13 },
    },
    budgetLevel: "high",
    budgetPerDay: { budget: 80, mid: 160, high: 320 },
    tagline: "Canales, museos y bicis, todo en un anillo que se recorre a pie.",
    heroIntro:
      "Amsterdam concentra una colección de arte de primer nivel mundial, un anillo de canales declarado Patrimonio de la Humanidad por la UNESCO y una auténtica cultura de café en un centro que se cruza a pie en media hora. Funciona con bicis y tranvías en lugar de coches, así que el truco está en aprender a leer el tráfico y en reservar los grandes museos antes de llegar. Tres días cubren lo esencial a un ritmo humano; el resto de la ciudad recompensa a quien va despacio junto al agua.",
    accent: { from: "#2F6E8F", to: "#C46A3A", ink: "#1E3E52" },
    neighborhoodSlugs: ["centrum", "jordaan", "de-pijp", "oud-west", "oost"],
    nearbyCitySlugs: ["bruges"],
  },

  neighborhoods: [
    {
      slug: "centrum",
      citySlug: "amsterdam",
      name: "Centrum (Centro histórico)",
      lat: 52.3731,
      lng: 4.8922,
      bestFor: ["first-time", "nightlife"],
      vibe: "El núcleo histórico en torno a la plaza Dam y el cinturón de canales, surcado por las calles más antiguas de la ciudad. De día está denso de visitantes y de noche algunas zonas cercanas al Barrio Rojo se vuelven ruidosas, pero todo lo que quiere quien viene por primera vez está a diez minutos a pie. Cambias tranquilidad por las distancias más cortas posibles hasta los sitios estrella.",
      pros: [
        "La plaza Dam, el anillo de canales y las Nueve Callecitas a pie",
        "La mayor oferta de hoteles y las mejores conexiones de tranvía",
        "Cero transporte necesario para un viaje de 2 días",
      ],
      cons: [
        "Los restaurantes de las calles principales son caros y están pensados para turistas",
        "Ruido y multitudes de despedidas de soltero cerca del Barrio Rojo por la noche",
        "Pagas una clara prima de ubicación respecto a De Pijp u Oud-West",
      ],
    },
    {
      slug: "jordaan",
      citySlug: "amsterdam",
      name: "Jordaan",
      lat: 52.3745,
      lng: 4.8799,
      bestFor: ["romantic", "first-time", "local"],
      vibe: "El barrio más fotografiado de la ciudad: canales estrechos, casas con gablete, jardines de patio y tiendas independientes en calles a escala humana. Es céntrico pero más tranquilo que el Centro histórico, con brown cafes (esos bares tradicionales) donde los vecinos todavía beben. Alojarte aquí te pone la Casa de Ana Frank y los canales del oeste en la puerta.",
      pros: [
        "Los canales más bonitos de Amsterdam y la Casa de Ana Frank muy cerca",
        "Excelentes brown cafes, galerías y mercados de los sábados",
        "Tranquilo y residencial de noche pero a un corto paseo de todo",
      ],
      cons: [
        "Tarifas de habitación más altas que en los distritos del sur y del oeste",
        "Los pequeños hoteles en casas de canal suelen significar escaleras empinadas y sin ascensor",
        "Pocos supermercados grandes y una oferta de comida económica limitada",
      ],
    },
    {
      slug: "de-pijp",
      citySlug: "amsterdam",
      name: "De Pijp",
      lat: 52.3547,
      lng: 4.8925,
      bestFor: ["local", "budget", "nightlife"],
      vibe: "Una cuadrícula densa y animada al sur del centro, construida alrededor del mercado diario Albert Cuyp. Aquí es donde comen y beben los jóvenes de Amsterdam, así que la escena de restaurantes y bares ofrece la mejor relación calidad-precio de la ciudad. El Rijksmuseum y el Barrio de los Museos quedan a diez minutos a pie o a una parada de tranvía al norte.",
      pros: [
        "La mejor densidad de comida y vida nocturna a precios locales justos",
        "El Mercado Albert Cuyp y el Sarphatipark en la puerta",
        "A distancia a pie del Barrio de los Museos",
      ],
      cons: [
        "Ningún sitio del anillo de canales en el propio barrio",
        "Ajetreado y ruidoso en las calles del mercado y de los bares",
        "Ya lo bastante de moda como para que las habitaciones ya no sean baratas",
      ],
    },
    {
      slug: "oud-west",
      citySlug: "amsterdam",
      name: "Oud-West",
      lat: 52.3639,
      lng: 4.8686,
      bestFor: ["local", "family", "budget"],
      vibe: "Un distrito residencial al oeste del Vondelpark, con calles arboladas y el bullicioso Foodhallen, un mercado gastronómico, en su corazón. Es donde viven familias y profesionales, así que se siente habitado en lugar de turístico, y las tarifas quedan por debajo del anillo de canales. Los tranvías dejan el centro a diez minutos.",
      pros: [
        "El Vondelpark y el Foodhallen a pocos minutos",
        "Calles más tranquilas y familiares a mejores precios",
        "Líneas de tranvía rápidas directas al centro y al Barrio de los Museos",
      ],
      cons: [
        "Te desplazas a cada sitio importante, aunque el trayecto sea corto",
        "Ningún canal ni edificio emblemático en el propio barrio",
        "Vida nocturna más tranquila que De Pijp o el centro",
      ],
    },
    {
      slug: "oost",
      citySlug: "amsterdam",
      name: "Oost (Este)",
      lat: 52.3603,
      lng: 4.9268,
      bestFor: ["local", "budget", "family"],
      vibe: "Un amplio distrito en auge al este del centro, en torno al Oosterpark, que mezcla bloques del siglo XIX rehabilitados con una fuerte escena gastronómica multicultural. Es la apuesta con mejor relación calidad-precio: calles tranquilas y frondosas, auténticos restaurantes de barrio y habitaciones bastante por debajo del centro. El metro y los tranvías llegan al núcleo en diez a quince minutos.",
      pros: [
        "Las tarifas de habitación casi céntricas más bajas de la ciudad",
        "Una escena gastronómica variada y auténtica con casi ningún recargo turístico",
        "El Oosterpark, el zoo Artis y el Tropenmuseum cerca",
      ],
      cons: [
        "El más alejado de estos distritos de los sitios del anillo de canales",
        "Extenso, así que dependes del tranvía o el metro en lugar de caminar",
        "Menos atracciones emblemáticas dentro del barrio",
      ],
    },
  ],

  pois: [
    {
      slug: "rijksmuseum",
      citySlug: "amsterdam",
      name: "Rijksmuseum",
      lat: 52.36,
      lng: 4.8852,
      kind: "museum",
      needsBooking: true,
      tip: "Reserva una franja horaria en línea y coge la más temprana, a las 9h, cuando la Galería de Honor con Vermeer y la enorme Ronda de noche de Rembrandt aún están poco concurridas. El jardín y el pasaje bajo el edificio son de acceso libre, y la cola de la cafetería del museo es peor hacia las 13h, así que come pronto o tarde.",
    },
    {
      slug: "van-gogh-museum",
      citySlug: "amsterdam",
      name: "Museo Van Gogh",
      lat: 52.3584,
      lng: 4.8811,
      kind: "museum",
      needsBooking: true,
      tip: "La entrada es solo con franja horaria y no hay taquilla para quien llega sin reserva, así que reserva en línea antes de llegar y elige una franja justo a la apertura de las 9h o después de las 15h para esquivar la aglomeración del mediodía. Está a dos minutos del Rijksmuseum, así que combina los dos en una misma mañana en el Barrio de los Museos en lugar de repartirlos en días distintos.",
    },
    {
      slug: "anne-frank-house",
      citySlug: "amsterdam",
      name: "Casa de Ana Frank",
      lat: 52.3752,
      lng: 4.884,
      kind: "museum",
      needsBooking: true,
      tip: "Este es el que hay que planificar antes que todo el viaje: todas las entradas se venden solo en línea, se liberan exactamente seis semanas antes a una hora fija, y las franjas se agotan en minutos. No hay ninguna cola sin reserva, así que pon una alarma en el calendario para el día de la venta y compra en el instante en que estén disponibles. Una vez dentro, el recorrido horario por el anexo secreto dura alrededor de una hora.",
    },
    {
      slug: "canal-cruise",
      citySlug: "amsterdam",
      name: "Crucero por los canales",
      lat: 52.3644,
      lng: 4.8916,
      kind: "experience",
      needsBooking: false,
      tip: "Evita los grandes barcos de techo acristalado cerca de Centraal y elige un pequeño barco eléctrico abierto desde los embarcaderos del Rijksmuseum o de la Casa de Ana Frank para una hora más tranquila en el agua. Ve hacia la puesta de sol para la mejor luz sobre las casas con gablete, y reserva una salida concreta en línea en verano, cuando los populares operadores de barcos pequeños se llenan.",
    },
    {
      slug: "vondelpark",
      citySlug: "amsterdam",
      name: "Vondelpark",
      lat: 52.3579,
      lng: 4.8686,
      kind: "park",
      needsBooking: false,
      tip: "El pulmón verde central de la ciudad, gratuito y abierto a todas horas, mejor entrando por el lado del Barrio de los Museos y recorriéndolo hacia el oeste con un café. Los fines de semana de verano el teatro al aire libre cerca del centro ofrece conciertos y espectáculos gratuitos; consulta la programación, porque es la mejor noche gratis de Amsterdam cuando el tiempo aguanta.",
    },
    {
      slug: "jordaan-canals",
      citySlug: "amsterdam",
      name: "Paseo por los canales del Jordaan",
      lat: 52.374,
      lng: 4.881,
      kind: "sight",
      needsBooking: false,
      tip: "Recorre a pie el Prinsengracht, el Bloemgracht y el pequeño Egelantiersgracht sin itinerario fijo; es el tramo más bonito y menos comercial del anillo de canales. Ven antes de las 10h o después de las 19h para hacer fotos sin gente, y desvíate hacia el patio gratuito del Karthuizerhof, un tranquilo jardín de hospicio que la mayoría de los visitantes pasan de largo sin verlo.",
    },
    {
      slug: "albert-cuyp-market",
      citySlug: "amsterdam",
      name: "Mercado Albert Cuyp",
      lat: 52.3556,
      lng: 4.8916,
      kind: "food",
      needsBooking: false,
      tip: "El mayor mercado callejero diario de los Países Bajos, abierto de lunes a sábado de 9h a 17h aproximadamente y cerrado los domingos, así que organízate en consecuencia. Ven por un stroopwafel fresco prensado al momento y muestras de queso neerlandés en lugar de por souvenirs, y ve antes del mediodía el sábado, la franja más concurrida, si quieres espacio para moverte.",
    },
    {
      slug: "begijnhof",
      citySlug: "amsterdam",
      name: "Begijnhof",
      lat: 52.3691,
      lng: 4.8899,
      kind: "sight",
      needsBooking: false,
      tip: "Un patio medieval silencioso de hospicios escondido tras una puerta sin señalizar junto a la plaza del Spui, gratuito y uno de los lugares más antiguos de la ciudad. Baja la voz, porque todavía vive gente aquí, y busca la casa de madera negra en el número 34, la casa de madera más antigua que se conserva en Amsterdam. Abierto solo en horario diurno.",
    },
    {
      slug: "dam-square",
      citySlug: "amsterdam",
      name: "La plaza Dam y el Palacio Real",
      lat: 52.3731,
      lng: 4.8926,
      kind: "sight",
      needsBooking: false,
      tip: "Trata la plaza en sí como un paso de 15 minutos por el Monumento Nacional y la fachada del palacio en lugar de como un destino. El interior del Palacio Real solo merece la entrada si el rey no lo está usando, así que consulta la web por si hay cierres antes de pagar; si no, fotografía la fachada y sigue hacia las Nueve Callecitas, muy cerca.",
    },
    {
      slug: "bloemenmarkt",
      citySlug: "amsterdam",
      name: "Mercado de flores flotante Bloemenmarkt",
      lat: 52.3667,
      lng: 4.8918,
      kind: "sight",
      needsBooking: false,
      tip: "El mercado de flores flotante sobre el Singel es una parada de cinco minutos, así que encájalo en un paseo entre la plaza Dam y el Rijksmuseum en lugar de hacer un viaje aparte. Los bulbos de tulipán que se venden aquí están certificados para la exportación por si quieres llevarte alguno a casa; comprueba primero las normas de importación de tu propio país, ya que muchos exigen la etiqueta fitosanitaria que proporcionan los puestos.",
    },
    {
      slug: "nine-streets",
      citySlug: "amsterdam",
      name: "Las Nueve Callecitas (De 9 Straatjes)",
      lat: 52.369,
      lng: 4.8859,
      kind: "sight",
      needsBooking: false,
      tip: "Nueve calles transversales cortas que unen los canales principales entre el Jordaan y el Dam, repletas de boutiques independientes, tiendas vintage y pequeños cafés. Es la mejor zona para curiosear sin prisa y almorzar en una casa de canal; ven entre semana para evitar la aglomeración de compras del fin de semana, y ten en cuenta que la mayoría de las tiendas independientes abren tarde, hacia las 11h.",
    },
    {
      slug: "foodhallen",
      citySlug: "amsterdam",
      name: "Foodhallen",
      lat: 52.3665,
      lng: 4.8697,
      kind: "food",
      needsBooking: false,
      tip: "Un mercado gastronómico cubierto en un antiguo depósito de tranvías en Oud-West, con un par de decenas de puestos bajo un mismo techo, ideal para un día de lluvia o para un grupo que no se pone de acuerdo. Se llena y se vuelve ruidoso a partir de las 19h los fines de semana, así que llega para las 18h para conseguir mesa, y paga con tarjeta, ya que la mayoría de los puestos no aceptan efectivo.",
    },
    {
      slug: "adam-lookout",
      citySlug: "amsterdam",
      name: "A'DAM Lookout",
      lat: 52.3841,
      lng: 4.9008,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Un mirador en azotea al otro lado del río IJ, con el columpio más alto de Europa, al que se llega en un ferry gratuito que sale justo detrás de la estación Centraal cada pocos minutos y tarda unos tres minutos. Reserva la franja del columpio en línea para evitar la espera, ve hacia la puesta de sol para la mejor luz sobre la ciudad, y recuerda que el ferry funciona toda la noche si te quedas a tomar algo arriba.",
    },
    {
      slug: "heineken-experience",
      citySlug: "amsterdam",
      name: "Heineken Experience",
      lat: 52.3577,
      lng: 4.8916,
      kind: "experience",
      needsBooking: true,
      tip: "Una visita de marca autoguiada en la antigua fábrica cerca de De Pijp, mejor reservada en línea por un descuento sobre el precio de taquilla y un horario fijo que se salta la cola. Coge la franja más temprana para evitar las oleadas de grupos escolares y despedidas de soltero de la tarde, y ten en cuenta que es más marketing que fábrica en activo, así que tómalo como una hora divertida más que como una visita cervecera seria.",
    },
  ],

  itineraries: [
    {
      citySlug: "amsterdam",
      days: 2,
      summary:
        "Dos días bastan para los sitios estrella de Amsterdam si reservas con antelación y te alojas en el centro, pero solo rozarás los barrios que hacen que valga la pena volver. El centro es compacto: el anillo de canales, el Barrio de los Museos y el Jordaan quedan a menos de 25 minutos a pie unos de otros, así que un plan apretado cubre el Rijksmuseum, el Museo Van Gogh y la Casa de Ana Frank más un paseo por los canales sin apenas transporte. Instálate en el Centrum para que las dos mañanas empiecen a pie. La estructura que funciona es un tema por día: el Barrio de los Museos y el Vondelpark el primer día, el anillo de canales, el Jordaan y la Casa de Ana Frank el segundo. Reserva tres cosas antes de llegar, porque las entradas son la única amenaza real para una visita de 48 horas: la Casa de Ana Frank en cuanto se liberan sus franjas seis semanas antes, y franjas horarias para el Museo Van Gogh y el Rijksmuseum. Lo que sacrificas es De Pijp, los mercados y cualquier tarde pausada junto a un canal, que es exactamente lo que compra un tercer día.",
      stayNeighborhoodSlug: "centrum",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Barrio de los Museos y Vondelpark",
          morning: [
            {
              poiSlug: "rijksmuseum",
              text: "Empieza en el Rijksmuseum en una franja de las 9h reservada de antemano y ve directo a la Galería de Honor para ver la Ronda de noche y los Vermeer antes de que las salas se llenen. Dale dos horas y no intentes verlo todo.",
              durationMin: 120,
            },
            {
              poiSlug: "van-gogh-museum",
              text: "Camina dos minutos a través del Museumplein hasta el Museo Van Gogh para tu franja horaria. La colección se presenta cronológicamente, así que sigue las plantas en orden para ver cómo cambia su estilo.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Almuerza en el Museumplein o muy cerca, luego recorre el jardín de esculturas gratuito detrás del Rijksmuseum y las letras I amsterdam para la foto clásica.",
              durationMin: 75,
            },
            {
              poiSlug: "vondelpark",
              text: "Entra en el Vondelpark por el lado del Barrio de los Museos y recórrelo a lo largo con un café, parando en el estanque y en el teatro al aire libre. Es gratis y la mejor forma de recuperarte tras dos museos.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "canal-cruise",
              text: "Haz un crucero por los canales en pequeño barco eléctrico abierto hacia la puesta de sol desde el embarcadero del Rijksmuseum, evitando los grandes barcos de techo acristalado cerca de Centraal. Una hora en el agua te encuadra todo el anillo de canales.",
              durationMin: 75,
            },
            {
              text: "Cena en el centro, apartado de las calles turísticas principales; retrocede una calle respecto a la plaza Dam o al Leidseplein y tanto los precios como la calidad mejoran notablemente.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Anillo de canales, el Jordaan y Ana Frank",
          morning: [
            {
              poiSlug: "anne-frank-house",
              text: "Llega para tu franja reservada en la Casa de Ana Frank; no hay entrada sin reserva, así que este billete se ha tenido que comprar el día de su venta seis semanas antes. El recorrido horario por el anexo secreto dura alrededor de una hora y golpea con más fuerza a primera hora del día.",
              durationMin: 75,
            },
            {
              poiSlug: "jordaan-canals",
              text: "Sal directo al Jordaan y recorre el Prinsengracht, el Bloemgracht y el Egelantiersgracht sin itinerario fijo, desviándote hacia el patio gratuito del hospicio Karthuizerhof.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "nine-streets",
              text: "Pasa a las Nueve Callecitas para almorzar en una casa de canal y curiosear sin prisa las tiendas independientes entre los canales principales. La mayoría abren hacia las 11h, así que el principio de la tarde es el momento ideal.",
              durationMin: 105,
            },
            {
              poiSlug: "begijnhof",
              text: "Cuélate por la puerta sin señalizar junto al Spui hacia el silencioso patio del Begijnhof, luego busca la casa de madera negra en el número 34, la más antigua de la ciudad. Baja la voz; todavía vive gente aquí.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "dam-square",
              text: "Cruza la plaza Dam por la fachada del Palacio Real y el Monumento Nacional, tomándola como un paso de 15 minutos más que como una parada, luego bordea los puestos del mercado de flores Bloemenmarkt sobre el Singel.",
              durationMin: 45,
            },
            {
              text: "Termina con una copa en un brown cafe del Jordaan, de esos con arena en el suelo y vecinos en la barra, para la tarde más de Amsterdam que ofrece el centro.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
    {
      citySlug: "amsterdam",
      days: 3,
      summary:
        "Tres días son la duración justa para Amsterdam: suficiente para los tres grandes museos y el anillo de canales a un ritmo humano, más un día que pertenece a los barrios en lugar de a la lista. Dos días te obligan a correr el Barrio de los Museos y los canales uno tras otro; el tercer día añade De Pijp, el Mercado Albert Cuyp y una vista desde una azotea al otro lado del IJ, con tiempo para sentarte en un café sin mirar el reloj. Alójate en el Jordaan, el barrio central más bonito y tranquilo, para tener la Casa de Ana Frank y los canales del oeste en la puerta y las tardes tranquilas. La forma del plan: el Barrio de los Museos y el Vondelpark el primer día, el anillo de canales y el Jordaan el segundo, De Pijp y la orilla norte el tercero. Reserva tres cosas en línea antes de llegar: la Casa de Ana Frank en el instante en que se liberan sus franjas seis semanas antes, y entradas horarias para el Museo Van Gogh y el Rijksmuseum. Todo lo demás recompensa a quien llega pronto y coge los tranvías en lugar de los taxis.",
      stayNeighborhoodSlug: "jordaan",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Barrio de los Museos y Vondelpark",
          morning: [
            {
              poiSlug: "rijksmuseum",
              text: "Desde tu base en el Jordaan, baja en tranvía hasta el Rijksmuseum para una franja de las 9h y ve directo a la Galería de Honor y la Ronda de noche antes de que la gente se acumule.",
              durationMin: 120,
            },
            {
              poiSlug: "van-gogh-museum",
              text: "Cruza el Museumplein hasta el Museo Van Gogh para tu entrada horaria y sigue las plantas en orden cronológico para ver cómo se transforma la obra.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Almuerza cerca del Museumplein, luego recorre el jardín de esculturas gratuito detrás del Rijksmuseum y fotografía las letras I amsterdam.",
              durationMin: 75,
            },
            {
              poiSlug: "vondelpark",
              text: "Recorre el Vondelpark a lo largo desde el extremo del Barrio de los Museos, parando en el teatro al aire libre, que ofrece espectáculos gratuitos los fines de semana de verano. Es la mejor tarde gratis de la ciudad.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "canal-cruise",
              text: "Haz un crucero en pequeño barco eléctrico abierto hacia la puesta de sol para la mejor luz sobre las casas con gablete, reservando una salida con antelación en verano, cuando los buenos operadores se llenan.",
              durationMin: 75,
            },
            {
              text: "Cena de vuelta en el Jordaan en un pequeño restaurante junto a un canal, luego una última copa en un brown cafe donde beben los vecinos.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Anillo de canales y el Jordaan",
          morning: [
            {
              poiSlug: "anne-frank-house",
              text: "Camina hasta tu franja reservada en la Casa de Ana Frank; no hay cola sin reserva, así que esto se ha tenido que comprar el día de la venta seis semanas antes. El recorrido horario por el anexo dura alrededor de una hora.",
              durationMin: 75,
            },
            {
              poiSlug: "jordaan-canals",
              text: "Explora tu propio barrio a pie: el Prinsengracht, el Bloemgracht y el Egelantiersgracht, más el tranquilo patio del Karthuizerhof que la mayoría de los visitantes se pierden.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "nine-streets",
              text: "Pasa a las Nueve Callecitas para almorzar en una casa de canal y curiosear las tiendas independientes. Los días de semana son mucho más tranquilos que la aglomeración de compras del fin de semana.",
              durationMin: 105,
            },
            {
              poiSlug: "begijnhof",
              text: "Cuélate por la puerta sin señalizar junto al Spui hacia el patio del Begijnhof y encuentra la casa de madera negra en el número 34, la más antigua de Amsterdam.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "dam-square",
              text: "Cruza la plaza Dam por el Palacio Real y el Monumento Nacional, luego bordea el Singel pasando los puestos flotantes del mercado de flores Bloemenmarkt a la hora del cierre.",
              durationMin: 60,
            },
            {
              text: "Cena en el centro a una calle de las arterias principales, luego un lento paseo de vuelta al Jordaan a lo largo del Prinsengracht iluminado, el anillo de canales en su mejor momento después del anochecer.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "De Pijp, mercados y la orilla norte",
          morning: [
            {
              poiSlug: "albert-cuyp-market",
              text: "Coge el tranvía hasta De Pijp para el Mercado Albert Cuyp antes del mediodía, cuando está más animado pero aún transitable. Pilla un stroopwafel prensado al momento y picotea en los puestos de queso y comida en lugar de en los de souvenirs.",
              durationMin: 90,
            },
            {
              text: "Pasea hacia el sur por el pequeño Sarphatipark y las calles llenas de cafés de De Pijp, el barrio donde los jóvenes de Amsterdam comen y beben de verdad.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "heineken-experience",
              text: "Haz la Heineken Experience, muy cerca, en una franja reservada si te apetece la visita de marca, tomándola como una hora divertida más que como una visita cervecera seria; si no, dedica ese tiempo a más cafés de De Pijp.",
              durationMin: 105,
            },
            {
              text: "Coge el tranvía hasta Centraal y el ferry gratuito de tres minutos detrás de la estación para cruzar el IJ hasta Amsterdam Noord.",
              durationMin: 30,
            },
          ],
          evening: [
            {
              poiSlug: "adam-lookout",
              text: "Sube en ascensor al A'DAM Lookout para la vista desde la azotea sobre la ciudad hacia la puesta de sol, y prueba el columpio al borde del tejado si no tienes vértigo. Reserva la franja del columpio con antelación para saltarte la espera.",
              durationMin: 90,
            },
            {
              text: "Cena en el paseo marítimo de Noord mirando hacia la silueta de la ciudad, luego coge el ferry de vuelta; funciona toda la noche, así que no hay prisa.",
              durationMin: 105,
            },
          ],
        },
      ],
    },
    {
      citySlug: "amsterdam",
      days: 4,
      summary:
        "Cuatro días son más que suficiente para los sitios de Amsterdam, y ese es el punto: el cuarto día convierte una carrera de museos en un viaje de verdad. Los días uno a tres cubren el Barrio de los Museos, el anillo de canales, el Jordaan y De Pijp a un ritmo relajado; el cuarto día es tuyo, ya sea para un día local tranquilo en los barrios del este o para una excursión a los molinos de Zaanse Schans o a Haarlem, ambos a menos de 30 minutos en tren. Con tanto tiempo, evita el centro ajetreado y alójate en De Pijp, a diez minutos del Barrio de los Museos, más barato que el anillo de canales, y hogar de la mejor comida y vida nocturna al mejor precio de la ciudad. La lógica de un tema por día sigue valiendo: mantén los dos grandes museos y el Vondelpark juntos, mantén los canales y el Jordaan juntos, y no zigzaguees por la ciudad. Reserva con antelación la Casa de Ana Frank el día en que se liberan sus franjas seis semanas antes, más entradas horarias para el Museo Van Gogh y el Rijksmuseum. Si dudabas entre tres y cuatro días, el cuarto es el que recordarás.",
      stayNeighborhoodSlug: "de-pijp",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Barrio de los Museos y Vondelpark",
          morning: [
            {
              poiSlug: "rijksmuseum",
              text: "Sube a pie desde De Pijp hasta el Rijksmuseum para tu franja de las 9h y ve directo a la Galería de Honor por la Ronda de noche y los Vermeer antes de que las salas se llenen.",
              durationMin: 120,
            },
            {
              poiSlug: "van-gogh-museum",
              text: "Cruza el Museumplein hasta el Museo Van Gogh para tu entrada horaria, siguiendo las plantas en orden para trazar cómo cambió su pintura.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Almuerza en el Museumplein, luego el jardín de esculturas gratuito detrás del Rijksmuseum y las letras I amsterdam para la foto.",
              durationMin: 75,
            },
            {
              poiSlug: "vondelpark",
              text: "Recorre el Vondelpark de punta a punta, haciendo una pausa en el teatro al aire libre para un espectáculo de verano gratuito si la programación coincide.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "canal-cruise",
              text: "Haz un crucero en pequeño barco abierto hacia la puesta de sol desde el embarcadero del Rijksmuseum para la mejor luz sobre el agua, reservando con antelación en temporada alta.",
              durationMin: 75,
            },
            {
              text: "Cena de vuelta en De Pijp, donde las calles de restaurantes y bares en torno al Albert Cuyp ofrecen la mejor relación calidad-precio de la ciudad, luego una copa en un café local.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Anillo de canales y el Jordaan",
          morning: [
            {
              poiSlug: "anne-frank-house",
              text: "Coge el tranvía hasta tu franja reservada en la Casa de Ana Frank; no hay cola sin reserva, así que este billete se ha tenido que comprar el día de su venta seis semanas antes. El recorrido por el anexo secreto dura alrededor de una hora.",
              durationMin: 75,
            },
            {
              poiSlug: "jordaan-canals",
              text: "Recorre los canales del Jordaan, el Prinsengracht, el Bloemgracht y el Egelantiersgracht, con un desvío hacia el tranquilo patio del hospicio Karthuizerhof.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "nine-streets",
              text: "Almuerza y pasea por las Nueve Callecitas entre los canales principales; elige un día de semana para saltarte las multitudes de compras del fin de semana.",
              durationMin: 105,
            },
            {
              poiSlug: "begijnhof",
              text: "Encuentra el patio escondido del Begijnhof junto al Spui y la casa de madera negra en el número 34, luego bordea el mercado de flores Bloemenmarkt sobre el Singel.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "dam-square",
              text: "Cruza la plaza Dam al anochecer por el Palacio Real y el Monumento Nacional, un paso de 15 minutos más que una parada.",
              durationMin: 30,
            },
            {
              text: "Cena en el centro a una calle de las calles turísticas, luego un paseo de vuelta a lo largo del Prinsengracht iluminado.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "De Pijp, mercados y la orilla norte",
          morning: [
            {
              poiSlug: "albert-cuyp-market",
              text: "Empieza en tu propia puerta en el Mercado Albert Cuyp antes del mediodía, pillando un stroopwafel fresco y picoteando en los puestos de comida. Recuerda que cierra los domingos.",
              durationMin: 90,
            },
            {
              poiSlug: "heineken-experience",
              text: "Haz la Heineken Experience, muy cerca, en una franja temprana reservada si te tienta la visita de marca, tomándola como una hora ligera, luego pasea por el Sarphatipark y las calles de De Pijp.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Coge el tranvía hasta Centraal y el ferry gratuito de tres minutos a través del IJ hasta Amsterdam Noord, el barrio más transformado de la ciudad.",
              durationMin: 45,
            },
            {
              poiSlug: "adam-lookout",
              text: "Sube al A'DAM Lookout para el panorama desde la azotea y, si te atreves, el columpio al borde del tejado. Reserva la franja del columpio con antelación para evitar la cola.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Toma una cena temprana en el paseo marítimo de Noord mirando hacia la silueta de la ciudad, luego coge el ferry de vuelta a través del IJ, que funciona toda la noche.",
              durationMin: 105,
            },
            {
              text: "Termina con una última copa en De Pijp; los bares aquí cierran más tarde y cuestan menos que cualquier cosa en el centro.",
              durationMin: 60,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Día local en Oost o excursión a Zaanse Schans y Haarlem",
          morning: [
            {
              text: "Opción A: coge el tranvía hacia el este hasta Oost para una mañana local tranquila en torno al Oosterpark, el Tropenmuseum sobre las culturas del mundo y los cafés multiculturales del Dappermarkt. Opción B: coge el tren directo desde Centraal hasta Zaandijk Zaanse Schans, unos 17 minutos, para los molinos en activo, las casas de madera y los talleres de queso y zuecos junto al río.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              text: "La opción A continúa en Oost con un almuerzo en un bistró de barrio y un paseo por el recinto del zoo Artis o a lo largo de las islas del puerto este. Opción B: enlaza en tren hasta Haarlem, a 15 minutos de Zaandijk o de Amsterdam, para el casco antiguo compacto, el Grote Markt y el Museo Frans Hals antes del tren de vuelta.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              text: "En cualquier caso, termina de vuelta en De Pijp en las terrazas y los bares en torno al Albert Cuyp y el Sarphatipark, la verdadera escena nocturna del barrio.",
              durationMin: 120,
            },
            {
              text: "Última cena en un restaurante de De Pijp; la zona hace una cocina inventiva a precios justos, una comida final digna tras los menús turísticos del centro.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
  ],
};

export default amsterdamEs;
