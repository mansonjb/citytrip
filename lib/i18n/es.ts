import type en from "./en";

const es: typeof en = {
  locale: "es",
  months: [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
  ],
  monthsShort: [
    "Ene", "Feb", "Mar", "Abr", "May", "Jun",
    "Jul", "Ago", "Sep", "Oct", "Nov", "Dic",
  ],
  common: {
    day: "Día",
    days: "días",
    from: "desde",
    perNight: "/noche",
    checkPrices: "Ver precios",
    findHotels: "Buscar hoteles",
    free: "Gratis",
    tip: "Consejo",
    morning: "Mañana",
    afternoon: "Tarde",
    evening: "Noche",
    comingSoon: "(próximamente)",
    home: "Inicio",
    faqTitle: "Preguntas rápidas, respuestas directas",
  },
  header: { destinations: "Destinos", guides: "Guías", method: "Método" },
  footer: {
    tagline:
      "El número justo de días, el barrio adecuado, el mes correcto. Guías de escapadas urbanas construidas con datos estructurados y horarios reales, sin relleno.",
    cities: "Ciudades",
    site: "Sitio",
    allDestinations: "Todos los destinos",
    travelGuides: "Guías de viaje",
    aboutMethod: "Acerca de y metodología",
    privacy: "Política de privacidad",
    disclosure:
      "Perfect City Break gana comisiones con los enlaces de reserva (Stay22 y socios de entradas). Esto nunca cambia el precio que pagas ni nuestras recomendaciones.",
  },
  stay22: {
    loading: "Cargando el mapa de hoteles…",
    mapNote: "El mapa muestra los precios de hoteles en directo.",
    openSearch: "Abrir la búsqueda completa de hoteles",
    supportNote:
      ". Reservar a través de él apoya al sitio sin coste adicional para ti.",
    hotelsIn: "Hoteles en {name}",
  },
  hotels: {
    defaultTitle: "Dónde dormiríamos en {city}",
    defaultIntro:
      "Cuatro opciones que cubren el rango realista, desde el capricho hasta el bajo presupuesto. Los precios son puntos de partida de temporada baja; consulta las tarifas en directo para tus fechas.",
    seeAll: "Ver todos los hoteles de {city}",
    photosNote:
      "Fotos reales de los hoteles · precios indicativos desde, no tarifas en tiempo real · los enlaces de reserva apoyan al sitio sin coste adicional",
  },
  cityCard: { days: "Días", best: "Mejor", budget: "Presupuesto" },
  bestFor: {
    "first-time": "Primera visita",
    nightlife: "Vida nocturna",
    family: "Familia",
    budget: "Bajo presupuesto",
    romantic: "Romántico",
    local: "Vida local",
  },
  toolbar: {
    hotels: "Hoteles",
    ourPicks: "Nuestras opciones",
    howManyDays: "Cuántos días",
    whereToStay: "Dónde alojarse",
    whenToGo: "Cuándo ir",
    hotelMap: "Mapa de hoteles",
    faq: "FAQ",
    compare: "Comparar",
    whereToSleep: "Dónde dormir",
    day: "Día {n}",
  },
  bp: {
    pass: "Pase de escapada urbana",
    idealStay: "Estancia ideal",
    bestMonths: "Mejores meses",
    midBudget: "Presupuesto medio",
    airport: "Aeropuerto",
    itinerary: "Itinerario de {days} días",
    duration: "Duración",
    base: "Base",
    forecast: "Previsión de {month}",
    dayHigh: "Máx. día",
    nightLow: "Mín. noche",
    rainyDays: "Días de lluvia",
    verdict: "Veredicto",
    go: "Adelante",
    avoid: "Evítalo",
    fair: "Aceptable",
    roomKey: "Llave de habitación",
    firstVisit: "Primera visita",
    budgetPick: "Opción económica",
    nightlife: "Vida nocturna",
    midHotel: "Hotel medio",
    budgetPass: "Pase económico",
    dailyTarget: "Objetivo diario",
    sleepIn: "Dormir en",
    freeSights: "Lugares gratis",
    daysValue: "{days} días",
    perDay: "{price} EUR/día",
  },
  stamp: {
    daysIdeal: "{days} días, lo ideal",
    dayByDay: "Plan día a día",
    greatPick: "Gran elección",
    thinkTwice: "Piénsalo dos veces",
    shoulder: "Temporada media",
    areasCompared: "{n} zonas comparadas",
    perDay: "~{price} EUR / día",
  },
  hub: {
    metaTitle: "Escapada a {city}: cuántos días, dónde alojarse, cuándo ir",
    metaDesc:
      "{city} en {days} días: itinerarios día a día, el barrio adecuado para tu viaje, consejos mes a mes y presupuestos honestos.",
    answer: "{city} funciona mejor como una escapada de {days} días. {intro}",
    howManyTitle: "¿Cuántos días en {city}?",
    howManyIntro:
      "Elige el itinerario que encaje con tu viaje. Cada uno es un plan completo día a día, no una lista de 30 cosas que meter con calzador.",
    seeItinerary: "Ver el itinerario →",
    wtsTitle: "Dónde alojarse en {city}",
    walkable:
      "{city} tiene un centro que se recorre a pie, así que el barrio que elijas marca el tono de todo el viaje.",
    spread:
      "{city} está dispersa, así que elegir la base adecuada te ahorra horas de transporte.",
    fullComparison: "Comparativa completa",
    monthsTitle: "{city}, mes a mes",
    monthsIntro:
      "Los meses en color son el momento ideal. Los meses tachados vienen con una advertencia. Cada página cubre el clima, la afluencia, los precios y qué llevar.",
    mapTitle: "Precios de hoteles ahora mismo",
    historyTitle: "Un poco de historia",
    knownForTitle: "{city} es conocida por",
    faqAroundQ: "¿Es fácil moverse por {city}?",
    faqAroundAWalk:
      "Sí. {city} tiene un centro que se recorre a pie, así que la mayor parte de un viaje corto se hace caminando. {airport}",
    faqAroundASpread:
      "{city} está dispersa, así que cuenta con el transporte público entre zonas. {airport}",
    faqAirportQ: "¿Cómo voy del aeropuerto al centro de {city}?",
    faqAirportA: "{airport} Es la opción más barata y normalmente la más rápida.",
    faqKnownQ: "¿Por qué es conocida {city}?",
    faqKnownA: "{city} es conocida sobre todo por {list}. {history}",
    tightBudget: "¿Presupuesto ajustado?",
    budgetCard: "{city} con bajo presupuesto: el mismo viaje, unos {price} EUR al día",
    readBudget: "Leer la guía de presupuesto →",
    pairsWell: "Combina bien con",
    faqDaysQ: "¿Cuántos días hacen falta en {city}?",
    faqDaysA: "{days} días es la duración ideal para {city}. {rest}",
    faqWhenQ: "¿Cuál es la mejor época para visitar {city}?",
    faqWhenA: "Los mejores meses son {months}. {avoid}",
    faqAvoid: "Piénsatelo dos veces con {months}: {note}",
    faqExpQ: "¿Es cara {city}?",
    faqExpA:
      "{city} se sitúa {level} de la media europea. Calcula aproximadamente {low} EUR al día con un presupuesto ajustado, {mid} EUR para un viaje cómodo de gama media, y {high} EUR o más si quieres los mejores hoteles y restaurantes.",
    levelBelow: "por debajo",
    levelAround: "en torno a la media",
    levelAbove: "por encima",
    faqFirstQ: "¿Dónde deben alojarse los que visitan {city} por primera vez?",
    faqFirstA: "{hood} es la base más segura para una primera visita. {vibe}",
    faqFirstFallback:
      "Consulta la comparativa completa de barrios en nuestra guía de dónde alojarse.",
  },
  iti: {
    metaTitle: "{city} en {days} días: el itinerario que encaja",
    metaDesc:
      "Un plan realista día a día para {days} días en {city}: qué ver cada mañana, tarde y noche, dónde dormir y los consejos que te ahorran colas.",
    h1Connector: "en",
    daysUnit: "días",
    sleepTitle: "Dormir bien durante estos {days} días",
    sleepIntro:
      "Opciones ordenadas con nuestra base recomendada, {hood}, en primer lugar. Reserva pronto: las habitaciones con buena relación calidad-precio se van con semanas de antelación.",
    whereToSleepTitle: "Dónde dormir para este itinerario",
    whereToSleepBody: "Para {days} días, instálate en {hood}. {vibe}",
    fullGuideLink: "Compara todos los barrios en la guía completa de dónde alojarse.",
    shortTime: "¿Poco tiempo?",
    gotLonger: "¿Tienes más tiempo?",
    faqEnoughQ: "¿Son suficientes {days} días para {city}?",
    faqStayQ: "¿Dónde debería alojarme para {days} días en {city}?",
    faqStayA: "Instálate en {hood} para este itinerario. {vibe}",
    faqStayFallback:
      "Alójate en el centro: consulta nuestra guía de dónde alojarse para {city}.",
    faqBestTimeQ: "¿Cuál es la mejor época para este itinerario de {city}?",
    faqBestTimeA:
      "El plan funciona todo el año, pero {months} te dan la mejor relación entre clima y afluencia.",
  },
  mon: {
    metaTitle: "{city} en {month}: clima, afluencia y si merece la pena",
    metaDesc:
      "{city} en {month}: temperaturas reales, días de lluvia, niveles de afluencia, qué llevar y si es el mes adecuado para tu escapada urbana.",
    connector: "en",
    verdictBest: "{month} es uno de los mejores meses para visitar {city}.",
    verdictAvoid:
      "{month} es el mes que evitaríamos en {city} si tienes fechas flexibles.",
    verdictShoulder:
      "{month} es una opción decente de temporada media para {city}: menos gente, algunas concesiones.",
    answer:
      "{verdict} Espera máximas diurnas en torno a {high}°C, noches cerca de {low}°C y aproximadamente {rain} días de lluvia a lo largo del mes. {note}",
    packTitle: "Qué llevar a {city} en {month}",
    packShoes: "Zapatos cómodos para caminar: harás más de 15 000 pasos al día",
    packSun:
      "Protección solar y una botella de agua rellenable: las tardes se calientan",
    packLayers: "Capas ligeras: tardes cálidas, noches más frescas",
    packJacket: "Una chaqueta de verdad y una capa de abrigo para las noches",
    packGloves: "Guantes y gorro: las mañanas rozan la temperatura de congelación",
    packUmbrella:
      "Un paraguas compacto o un chubasquero: la lluvia es una posibilidad real",
    packRainLayer: "Una capa impermeable plegable, por si acaso",
    worksTitle: "Qué funciona bien en {month}",
    worksCold:
      "Con {rain} días de lluvia y máximas de {high}°C, organiza tus días de {month} en torno a lugares cubiertos y trata los ratos de sol como un extra.",
    worksWarm:
      "Con máximas en torno a {high}°C, {month} es tiempo de aire libre: prioriza miradores, parques y largos paseos.",
    planFull: "¿Listo para planear todo el viaje? Empieza por el",
    planFullLink: "itinerario de {city} en {days} días",
    hotelsTitle: "Dónde dormir en {city} en {month}",
    hotelsIntroHigh:
      "{month} tiene mucha demanda: reserva con 4 a 6 semanas de antelación para mantener estos precios realistas.",
    hotelsIntroLow:
      "{month} es más tranquilo, lo que lo convierte en el mes ideal para permitirte las opciones de capricho.",
    mapTitle: "Hoteles en {city} para {month}",
    otherMonth: "O elige otro mes",
    faqGoodQ: "¿Es {month} una buena época para visitar {city}?",
    faqWarmQ: "¿Qué temperatura hace en {city} en {month}?",
    faqWarmA:
      "Los días típicos de {month} en {city} alcanzan unos {high}°C y bajan hasta cerca de {low}°C por la noche. Lo mejor es ir por capas.",
    faqRainQ: "¿Llueve en {city} en {month}?",
    faqRainA: "Cuenta con aproximadamente {rain} días con lluvia en {month}. {detail}",
    rainMuch:
      "Planifica un bloque cubierto al día y guarda las entradas de museo como plan B.",
    rainLittle: "La lluvia rara vez dura todo el día, así que los planes se mantienen bien.",
  },
  wts: {
    metaTitle: "Dónde alojarse en {city}: las mejores zonas comparadas",
    metaDesc:
      "Los mejores barrios donde alojarse en {city} para primerizos, vida nocturna, familias y presupuestos. Pros y contras honestos, además de mapas de hoteles en directo por zona.",
    h1: "Dónde alojarse en",
    shortlistTitle: "La lista corta",
    shortlistIntro:
      "Si solo quieres la respuesta: cuatro opciones verificadas en {city}, desde el capricho hasta el bajo presupuesto, cada una en un barrio comparado más abajo.",
    boardTitle: "El panel de decisión",
    boardNeighborhood: "Barrio",
    boardBookIf: "Reserva si quieres",
    boardWatchOut: "Ojo con",
    boardHotels: "Hoteles",
    bookFor: "Resérvalo por",
    knowBefore: "Que sepas antes",
    pickedNext: "¿Barrio elegido? Cierra el plan a continuación:",
    pickedLink: "{city} en {days} días, hora a hora",
    answerFirst: "Para una primera escapada a {city}, alójate en {hood}: {pro}.",
    answerFallback: "Alójate en el centro de {city}.",
    answerBudget:
      "Con un presupuesto más ajustado, {hood} te da más espacio por menos.",
    answerWalkable:
      "El centro se recorre a pie, así que cualquiera de las {n} zonas de abajo te deja cerca de los principales lugares; lo que cambia es el ambiente al que vuelves por la noche.",
    answerSpread:
      "Aquí las distancias importan, así que ajusta la zona al plan que realmente tienes.",
    faqBestQ: "¿Cuál es la mejor zona donde alojarse en {city}?",
    faqNightQ: "¿Dónde debería alojarme en {city} para la vida nocturna?",
    faqNightA: "{hood} es la base para la vida nocturna. {vibe} Aviso: {con}",
    faqCheapQ: "¿Cuál es la zona buena y más barata donde alojarse en {city}?",
    faqCheapA: "{hood} tiene la mejor relación precio-ubicación. {vibe}",
  },
  bud: {
    metaTitle: "{city} con bajo presupuesto: el mismo viaje por {price} EUR al día",
    metaDesc:
      "Cómo hacer una escapada a {city} por unos {price} EUR al día: los lugares gratis que de verdad valen la pena, dónde dormir barato y dónde comen los locales.",
    h1Suffix: "con bajo presupuesto",
    answer:
      "Una escapada a {city} por unos {price} EUR por persona y día es realista. La fórmula: dormir en {hood}, caminar en vez de coger transporte ({walk}), organizar los días en torno a puntos de referencia gratuitos como {anchors}, y comer donde comen los locales. Llegar desde el aeropuerto también sale barato: {airport}.",
    walkCompact: "el centro es lo bastante compacto",
    walkZones: "elige una zona por día",
    hotelsTitle: "Dormir barato, dormir bien",
    hotelsIntro:
      "Las opciones por debajo de {price} EUR que no parecen un compromiso.",
    freeTitle: "Los imprescindibles gratis",
    freeIntro:
      "No cuestan nada y cada uno da para un día entero. Organiza en torno a ellos y las entradas de pago pasan a ser extras opcionales en vez de un agujero en el presupuesto.",
    eatTitle: "Comer bien, pagar precios locales",
    sleepTitle: "Dormir barato en {hood}",
    orderNote: "Ahora ponlo en orden:",
    orderLink: "el itinerario de {city} en {days} días",
    orderSuffix: "funciona con este presupuesto gracias a los cambios de arriba.",
    faqCostQ: "¿Cuánto cuesta un viaje con bajo presupuesto a {city}?",
    faqFreeQ: "¿Qué se puede hacer gratis en {city}?",
    faqFreeA:
      "Los mejores lugares gratis de {city}: {list}. Varios lugares de pago también tienen franjas gratuitas o reducidas; consulta los consejos en cada página de itinerario.",
    faqCheapAreaQ: "¿Cuál es la zona más barata donde alojarse en {city}?",
  },
  home: {
    metaTitle: "Perfect City Break: itinerarios de escapadas urbanas que responden a la pregunta",
    metaDesc:
      "El número justo de días, el barrio adecuado, el mes correcto. Itinerarios de escapadas urbanas día a día construidos con datos reales, sin relleno.",
    stamp: "Escapadas urbanas, bien planeadas",
    heroParts: [
      { pre: "Los ", word: "días", post: " justos." },
      { pre: " El ", word: "barrio", post: " adecuado." },
      { pre: " El ", word: "mes", post: " correcto." },
    ],
    heroSub:
      "Cada guía de aquí responde a las tres preguntas que de verdad deciden una escapada urbana: cuánto tiempo quedarse, dónde dormir y cuándo ir. Día a día, con horarios, trucos para saltarse las colas y presupuestos honestos.",
    pickCity: "Elige una ciudad",
    howManyBtn: "¿Cuántos días necesito?",
    departures: "Salidas · actualizado en julio de 2026",
    daysIdealShort: "{days} días, lo ideal",
    best: "mejor",
    boarding: "embarque →",
    whereNext: "¿A dónde ahora?",
    allDest: "Todos los destinos",
    searchPlaceholder: "Busca una ciudad, p. ej. Lisboa",
    searchNoResult: "Todavía no hay ninguna ciudad para esa búsqueda. Añadimos más cada mes.",
    browseAll: "Ver todo",
    knownForLead: "Conocida por",
    faqTitle: "Preguntas sobre escapadas urbanas, respondidas",
    faqs: [
      {
        q: "¿Qué es exactamente una escapada urbana?",
        a: "Una escapada urbana es un viaje corto, normalmente de 2 a 4 días, centrado en una sola ciudad en lugar de una región o una playa. La idea es priorizar la profundidad frente a la distancia: eliges un lugar, conoces sus barrios y vuelves a casa descansado en vez de agotado.",
      },
      {
        q: "¿Cuántos días hacen falta para una escapada urbana?",
        a: "La mayoría de las ciudades europeas funcionan en 2 o 3 días. Ciudades compactas como Sevilla o Brujas son un fin de semana cómodo; capitales como Praga o Budapest merecen 3 días, y solo las más grandes, como Roma o París, justifican 4 días o más. Cada página de ciudad aquí da el número ideal honesto.",
      },
      {
        q: "¿Cuál es la época más barata para una escapada urbana por Europa?",
        a: "De enero a marzo, fuera de los mercados navideños y las vacaciones escolares, es la ventana más barata en casi todas partes. Noviembre es el momento ideal para las ciudades del sur, suaves y a precios de temporada baja. Nuestras páginas mes a mes muestran el nivel de precios de cada ciudad, todo el año.",
      },
      {
        q: "¿Qué ciudad europea es mejor para una primera escapada urbana?",
        a: "Para un primer viaje, elige una ciudad compacta que se recorra a pie, donde los lugares se agrupan juntos: Lisboa, Praga y Sevilla cumplen. Pasas menos tiempo en el transporte y más tiempo viendo el lugar de verdad, que es para lo que sirve un viaje corto.",
      },
      {
        q: "¿Necesito reservar las atracciones con antelación?",
        a: "Para los lugares estrella, sí. Sitios como el Alcázar de Sevilla o el Parlamento de Budapest agotan las franjas horarias con días de antelación en temporada. Cada itinerario aquí señala exactamente qué lugares necesitan reserva y con cuánta antelación.",
      },
    ],
    methodKicker: "Nuestro método",
    methodTitle:
      'Sin "joyas ocultas". Sin listas de 40 puntos. Una decisión por página.',
    methodBody:
      "Cada ciudad se construye como datos estructurados: cuántos días necesita de verdad, qué barrios encajan con qué viaje, cómo se siente cada mes, cuánto cuestan las cosas. Cada consejo tiene que pasar una prueba: ¿puedes actuar sobre él? Si no, se elimina.",
    methodLink: "Leer la metodología completa",
  },
  dest: {
    metaTitle: "Destinos de escapadas urbanas: cada ciudad, comparada con honestidad",
    metaDesc:
      "Todos los destinos de Perfect City Break con el número de días que cada uno necesita de verdad, los mejores meses y presupuestos honestos. Europa primero, el mundo después.",
    kicker: "Panel de salidas",
    h1: "Elige tu próxima escapada urbana",
    intro:
      "Tres ciudades piloto hoy, nuevas cada mes. Cada destino recibe el tratamiento completo: itinerarios por duración, barrios comparados y una página para cada mes del año.",
    cityBreaksIn: "Escapadas urbanas en {country}",
    countryMetaTitle: "Escapadas urbanas en {country}: a dónde ir y por cuánto tiempo",
    countryMetaDesc:
      "Cada escapada urbana de {country} en Perfect City Break: duración ideal, mejores meses y presupuestos honestos para cada ciudad.",
  },
};

export default es;
