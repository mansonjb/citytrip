import type { CityData } from "../types";

const copenhagenEs: CityData = {
  city: {
    slug: "copenhagen",
    name: "Copenhague",
    country: "Dinamarca",
    countrySlug: "denmark",
    lat: 55.6761,
    lng: 12.5683,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "CPH",
    airportToCenter:
      "La línea de metro M2 conecta el aeropuerto de Copenhague (CPH) directamente con el centro y llega a Kongens Nytorv, junto a Nyhavn, en unos 15 minutos por alrededor de 4,50 EUR (36 DKK), con paso cada pocos minutos y también durante la noche. Un tren regional cubre el mismo trayecto hasta la Estación Central en unos 13 minutos si tu hotel queda de ese lado; ambos ganan a un taxi, que cuesta 40 EUR o más.",
    centerWalkable: true,
    bestMonths: [5, 6, 7, 8],
    avoidMonths: [1],
    monthlyNotes: {
      1: "El mes más oscuro y frío, con máximas en torno a 2C, la luz del día que se apaga a media tarde y los jardines de Tivoli cerrados tras su traca final de Año Nuevo en los primeros días del mes. Las tarifas tocan su suelo anual y los lugares están vacíos, así que apuesta por los museos a cubierto, los cafés a la luz de las velas y el hygge danés en torno al que los locales organizan toda la temporada.",
      2: "Todavía frío y gris, en torno a 3C, el mes completo más tranquilo del año tanto en afluencia como en precios. Lleva capas de verdad y un abrigo cortavientos para el puerto, no reserves nada con mucha antelación y toma este viaje como uno de museos y cafés más que de aire libre.",
      3: "Las máximas rozan los 5C y la luz del día vuelve rápido, aunque sigue fresco y a menudo húmedo. La afluencia es escasa y las tarifas bajas; la verdadera señal llega a finales de mes, cuando los jardines de Tivoli reabren para su temporada de primavera hacia principios de abril y el ánimo remonta.",
      4: "La primavera se instala en torno a 10C, con los jardines de Tivoli de nuevo abiertos y las primeras terrazas al sol. La Semana Santa trae un breve festivo local en el que algunas tiendas cierran, pero la afluencia sigue siendo moderada y los precios por debajo del verano, lo que la convierte en una buena ventana de temporada media.",
      5: "Uno de los mejores meses, con máximas cerca de 15C, largas tardes de luz y todo abierto. La afluencia sube sin haber tocado techo, la vida del puerto se reactiva y la ciudad está en su punto más optimista; reserva con antelación los restaurantes populares y espera que las tarifas trepen hacia el nivel de verano.",
      6: "Cálido, en torno a 19C, con los días más largos del año, cuando apenas anochece. Distortion, la enorme fiesta callejera, se apodera de distintos barrios durante cinco días a principios de junio, atrayendo grandes multitudes y noches ruidosas; comprueba las fechas, porque hace o deshace tu viaje según lo que busques.",
      7: "La temporada alta, en torno a 21C, abarrotada y cara, con el Festival de Jazz de Copenhague llenando plazas, patios y clubes durante diez días a principios de julio. Los baños del puerto están abiertos, Tivoli funciona hasta tarde y los hoteles cuelgan el cartel de completo, así que reserva habitaciones y cualquier entrada de festival con mucha antelación.",
      8: "Todavía cálido, en torno a 21C, y animado, el último tramo de pleno verano antes de la vuelta al cole. El baño en el puerto, las noches tardías en Tivoli y las comidas al aire libre están todos en su mejor momento; las tarifas siguen altas al principio del mes y se relajan a su cierre.",
      9: "Máximas en torno a 17C, la afluencia que se adelgaza tras la primera semana y el más suave de los meses de temporada media. Es la elección discreta y sensata: las terrazas aún funcionan en los días cálidos, Tivoli sigue abierto, los museos están tranquilos y los precios bajan desde el pico del verano.",
      10: "Más fresco, en torno a 12C, con más lluvia y auténtico color de otoño en los parques. Los jardines de Tivoli montan una popular temporada de Halloween, con decorados de calabazas a lo largo del mes, un buen motivo para venir; por lo demás, la afluencia cae y las tarifas la siguen.",
      11: "Gris, húmedo y frío, con máximas cerca de 7C y días cortos, el último tramo tranquilo antes de las fiestas. Los jardines de Tivoli reabren con aire navideño hacia mediados de mes, con luces, casetas y gløgg, y arrancan los mercados de Navidad de la ciudad, que iluminan tardes por lo demás oscuras.",
      12: "Frío, en torno a 4C, con los días más cortos del año, pero el mes más atmosférico bajo techo. La temporada de Navidad de Tivoli, los mercados de Nyhavn y de Højbro Plads, el vino caliente y el hygge por todas partes sostienen el ambiente; reserva alojamiento pronto para la semana de Navidad y Año Nuevo, que se llena.",
    },
    climate: {
      1: { highC: 2, lowC: -2, rainyDays: 11 },
      2: { highC: 3, lowC: -2, rainyDays: 9 },
      3: { highC: 5, lowC: 0, rainyDays: 9 },
      4: { highC: 10, lowC: 3, rainyDays: 8 },
      5: { highC: 15, lowC: 8, rainyDays: 8 },
      6: { highC: 19, lowC: 11, rainyDays: 8 },
      7: { highC: 21, lowC: 13, rainyDays: 9 },
      8: { highC: 21, lowC: 13, rainyDays: 10 },
      9: { highC: 17, lowC: 10, rainyDays: 9 },
      10: { highC: 12, lowC: 6, rainyDays: 11 },
      11: { highC: 7, lowC: 3, rainyDays: 12 },
      12: { highC: 4, lowC: 0, rainyDays: 11 },
    },
    budgetLevel: "high",
    budgetPerDay: { budget: 90, mid: 180, high: 350 },
    tagline: "Diseño, baños en el puerto y bollos de canela, todo sobre dos ruedas.",
    heroIntro:
      "Copenhague concentra palacios reales, un puerto en activo donde puedes bañarte y algunas de las mejores mesas de Europa en un centro compacto que se cruza a pie. Está pensada primero para las bicis, así que lo más inteligente es alquilar una o tomar el metro sin conductor en lugar de pelear por un taxi. Tres días cubren el núcleo real, Christiania y la escena gastronómica a un ritmo tranquilo, con tiempo de sobra para sentarse junto al agua.",
    accent: { from: "#3B5BA5", to: "#E86A6A", ink: "#1E2E52" },
    neighborhoodSlugs: [
      "indre-by",
      "nyhavn",
      "vesterbro",
      "norrebro",
      "christianshavn",
    ],
    nearbyCitySlugs: ["berlin"],
  },

  neighborhoods: [
    {
      slug: "indre-by",
      citySlug: "copenhagen",
      name: "Indre By (casco antiguo)",
      lat: 55.6794,
      lng: 12.5776,
      bestFor: ["first-time", "romantic"],
      vibe: "El núcleo medieval entre Strøget, los palacios y los canales, donde casi cada gran atracción queda a menos de diez minutos a pie. Es denso, elegante y animado de día, más tranquilo una vez cierran las tiendas, y te deja a pie de la Torre Redonda, de Rosenborg y de Nyhavn. Pagas un claro sobreprecio por esa comodidad.",
      pros: [
        "La Torre Redonda, Rosenborg, Strøget y Nyhavn, todo a pie",
        "La mejor caminabilidad y las mejores conexiones de metro de la ciudad",
        "Ningún transporte necesario para un viaje de 2 días",
      ],
      cons: [
        "Las tarifas de habitación más altas de Copenhague",
        "Las calles principales aplican precios turísticos para comer y beber",
        "Menos restaurantes locales que en Nørrebro o Vesterbro",
      ],
    },
    {
      slug: "nyhavn",
      citySlug: "copenhagen",
      name: "Nyhavn",
      lat: 55.6797,
      lng: 12.5913,
      bestFor: ["first-time", "romantic"],
      vibe: "La postal de Copenhague: un corto canal del siglo XVII bordeado de casas con hastiales pintados, barcos de madera y bares con terraza. Alojarse en el canal o justo al lado te pone en el puerto y en el barrio real, aunque el propio muelle es ruidoso y caro en horas punta. Es bonito, céntrico y sin complejos turísticos.",
      pros: [
        "Un entorno de canal icónico justo en el puerto",
        "A dos pasos del barrio real, de Amalienborg y de los embarcaderos",
        "Excelentes conexiones de metro y de bus fluvial",
      ],
      cons: [
        "Los restaurantes del muelle cobran un fuerte sobreprecio por las vistas",
        "Ruidoso y abarrotado las tardes de verano",
        "Muy pocas camas realmente económicas tan cerca del agua",
      ],
    },
    {
      slug: "vesterbro",
      citySlug: "copenhagen",
      name: "Vesterbro",
      lat: 55.6683,
      lng: 12.5449,
      bestFor: ["nightlife", "local", "budget"],
      vibe: "Un antiguo barrio rojo y de mataderos convertido en el mejor barrio de la ciudad para comer y salir sin arruinarse, a unos minutos al oeste de la Estación Central. Las naves del matadero de Kødbyen viven al ritmo de los bares de vino natural, las panaderías y los restaurantes donde comen de verdad los jóvenes copenhagueses. Se siente vivido y creativo más que pulido, con tarifas por debajo del casco antiguo.",
      pros: [
        "La mejor densidad de mesas y vida nocturna a precios más justos",
        "Los bares del matadero de Kødbyen y la Estación Central a la puerta",
        "A distancia a pie de Tivoli y del centro",
      ],
      cons: [
        "Algunas calles siguen siendo un poco ásperas de noche",
        "Ni canal ni atracción emblemática en el propio barrio",
        "Animado y ruidoso alrededor de las naves de ocio una vez cae la noche",
      ],
    },
    {
      slug: "norrebro",
      citySlug: "copenhagen",
      name: "Nørrebro",
      lat: 55.6949,
      lng: 12.5533,
      bestFor: ["local", "budget", "nightlife"],
      vibe: "El barrio más multicultural y joven, al norte de los lagos, construido en torno al parque Superkilen y a la bulliciosa calle Jægersborggade. Aquí es donde vive la verdadera escena gastronómica de barrio, de las panaderías a las parrillas de Oriente Medio, a precios muy por debajo del centro. Está a quince minutos a pie o a un corto trayecto de autobús del casco antiguo.",
      pros: [
        "Las tarifas de habitación más bajas entre los barrios bastante céntricos",
        "Una escena gastronómica independiente destacada, con poco sobreprecio turístico",
        "Superkilen, el cementerio de Assistens y Jægersborggade cerca",
      ],
      cons: [
        "El más alejado de estos barrios de las atracciones del puerto",
        "Extenso, así que dependes más de la bici o del autobús",
        "Sin metro en algunos tramos, aunque los autobuses son frecuentes",
      ],
    },
    {
      slug: "christianshavn",
      citySlug: "copenhagen",
      name: "Christianshavn",
      lat: 55.6725,
      lng: 12.5935,
      bestFor: ["local", "romantic", "family"],
      vibe: "Un barrio insular surcado de canales, levantado por Christian IV, que mezcla casas flotantes, muelles adoquinados y la ciudad libre de Christiania en su borde. Es más tranquilo y más residencial que el casco antiguo, aunque a una parada de metro o a una corta travesía del puerto de él. Los cafés a la orilla del agua y la aguja en espiral de Vor Frelsers Kirke le dan un carácter de verdad.",
      pros: [
        "Bonitos canales y casas flotantes al margen de las multitudes",
        "Una parada de metro o un paseo hasta el centro, con Christiania al lado",
        "Auténticos cafés locales y el frente portuario a pie",
      ],
      cons: [
        "Menos hoteles, así que la elección y la disponibilidad son limitadas",
        "Una vida nocturna más tranquila que en Vesterbro o Nørrebro",
        "Cruzas el puerto para la mayoría de las atracciones céntricas",
      ],
    },
  ],

  pois: [
    {
      slug: "nyhavn",
      citySlug: "copenhagen",
      name: "El puerto de Nyhavn",
      lat: 55.6797,
      lng: 12.5911,
      kind: "sight",
      needsBooking: false,
      tip: "Esta es la foto por la que todos vienen, mejor tomada desde el pequeño puente al fondo del puerto con la luz de la mañana, antes de que se llenen las terrazas. Siéntate aquí a tomar algo si quieres las vistas, pero come una calle más atrás, en Store Strandstræde o en el casco antiguo, donde el mismo plato cuesta mucho menos que el sobreprecio del muelle.",
    },
    {
      slug: "tivoli-gardens",
      citySlug: "copenhagen",
      name: "Los jardines de Tivoli",
      lat: 55.6736,
      lng: 12.5681,
      kind: "experience",
      needsBooking: true,
      tip: "Consulta el calendario antes de organizarlo todo en torno a ellos, porque Tivoli es estacional: abierto aproximadamente de abril a finales de septiembre, luego para Halloween en octubre y de nuevo de mediados de noviembre a Año Nuevo por Navidad, y cerrado entre medias. Reserva la entrada en línea para un pequeño ahorro, ve en las últimas horas antes del cierre, cuando los jardines se iluminan, y compra una pulsera de atracciones solo si de verdad piensas subirte a ellas.",
    },
    {
      slug: "little-mermaid",
      citySlug: "copenhagen",
      name: "La Sirenita",
      lat: 55.6929,
      lng: 12.5993,
      kind: "sight",
      needsBooking: false,
      tip: "La estatua es pequeña y siempre rodeada de grupos de turistas, así que tómala como una parada de cinco minutos dentro de un paseo por el puerto más que como un destino en sí. Ven a primera hora de la mañana para una foto despejada, y combínala con la fortaleza en estrella cercana de Kastellet y el descenso hasta Amalienborg, que es la verdadera recompensa de subir hasta aquí.",
    },
    {
      slug: "rosenborg-castle",
      citySlug: "copenhagen",
      name: "El castillo de Rosenborg",
      lat: 55.6857,
      lng: 12.5773,
      kind: "sight",
      needsBooking: true,
      tip: "Reserva una franja horaria en línea en verano, porque el interior del castillo es pequeño y la cola para las joyas de la corona en el sótano se dispara hacia el mediodía. Ve nada más abrir, baja primero a la cámara del tesoro mientras está tranquila, y luego sal a los jardines gratuitos de Kongens Have, el parque real más antiguo de la ciudad y un buen sitio para un picnic.",
    },
    {
      slug: "christiansborg-palace",
      citySlug: "copenhagen",
      name: "El palacio y la torre de Christiansborg",
      lat: 55.6759,
      lng: 12.5794,
      kind: "sight",
      needsBooking: false,
      tip: "La torre del palacio es la más alta de la ciudad y, a diferencia de casi todo lo demás aquí, totalmente gratuita de subir en ascensor, con las mejores vistas desde la azotea sobre el casco antiguo. Sube primero, y luego decide si pagas por las salas de recepción reales y las ruinas bajo el edificio; la torre por sí sola justifica la parada, aunque te saltes el resto.",
    },
    {
      slug: "round-tower",
      citySlug: "copenhagen",
      name: "La Torre Redonda (Rundetaarn)",
      lat: 55.6813,
      lng: 12.5757,
      kind: "viewpoint",
      needsBooking: false,
      tip: "El mirador céntrico más barato de Copenhague, al que se llega no por escaleras sino por una amplia rampa adoquinada en espiral que un caballo podría subir, y que termina en una plataforma abierta en la azotea sobre el casco antiguo. Compra la entrada barata en la puerta, ve a última hora de la tarde para la luz cálida, y busca la pequeña sala de biblioteca y el observatorio a media subida, ambos incluidos.",
    },
    {
      slug: "christiania",
      citySlug: "copenhagen",
      name: "La ciudad libre de Christiania",
      lat: 55.6761,
      lng: 12.5989,
      kind: "experience",
      needsBooking: false,
      tip: "El enclave hippie autogestionado merece un paseo por sus murales, sus talleres, sus senderos junto al lago y sus cafés alternativos, pero respeta la única regla estricta: nada de fotos en Pusher Street, donde los carteles lo dejan claro. Guarda el teléfono allí, explora las callejuelas traseras más verdes y los bordes del Green Light District de día, y tómala como una comunidad viva más que como una atracción turística.",
    },
    {
      slug: "nationalmuseet",
      citySlug: "copenhagen",
      name: "Nationalmuseet (Museo Nacional)",
      lat: 55.674,
      lng: 12.5751,
      kind: "museum",
      needsBooking: false,
      tip: "El principal museo de historia de Dinamarca es de entrada gratuita y el mejor plan para un día de lluvia en la ciudad, imbatible en los hallazgos de la época vikinga como el Carro Solar y un cuerpo de las turberas conservado. Calcula noventa minutos, ve directo a las salas de prehistoria primero mientras estás fresco, y usa la sección infantil pensada para familias si llevas niños.",
    },
    {
      slug: "torvehallerne",
      citySlug: "copenhagen",
      name: "El mercado de Torvehallerne",
      lat: 55.6835,
      lng: 12.5691,
      kind: "food",
      needsBooking: false,
      tip: "Dos naves de mercado de cristal con unos sesenta puestos cerca de Nørreport, ideales para un almuerzo de smørrebrød (canapé abierto), bollería fresca y café sin el sobreprecio turístico de Nyhavn. Ven entre semana hacia las 11h antes del ajetreo del almuerzo, prueba el smørrebrød clásico de arenque en escabeche o de rosbif en una barra, y ten en cuenta que cierra más temprano los domingos.",
    },
    {
      slug: "amalienborg",
      citySlug: "copenhagen",
      name: "El palacio de Amalienborg",
      lat: 55.6841,
      lng: 12.5934,
      kind: "sight",
      needsBooking: false,
      tip: "La residencia de la familia real son cuatro palacios en torno a una plaza octogonal, y el atractivo gratuito es el cambio de guardia al mediodía cada día, más imponente cuando la reina está en residencia y ondea su bandera. Colócate cerca del cuerpo de guardia unos minutos antes de las doce, y luego alinea la perspectiva hasta la Iglesia de Mármol a un lado y la Ópera al otro lado del puerto.",
    },
    {
      slug: "stroget",
      citySlug: "copenhagen",
      name: "Strøget",
      lat: 55.6786,
      lng: 12.5748,
      kind: "sight",
      needsBooking: false,
      tip: "Una de las calles peatonales más largas de Europa, que recorre alrededor de un kilómetro desde la plaza del Ayuntamiento hasta Kongens Nytorv, útil sobre todo como columna vertebral que enlaza la mitad de las atracciones del casco antiguo. Tómala como un itinerario más que como una salida de compras, cuélate en las calles y plazas más tranquilas como Gråbrødretorv para mejores cafés, y recórrela temprano para adelantarte a la multitud.",
    },
    {
      slug: "reffen",
      citySlug: "copenhagen",
      name: "La comida callejera de Reffen",
      lat: 55.6949,
      lng: 12.6017,
      kind: "food",
      needsBooking: false,
      tip: "Un extenso mercado de comida callejera al aire libre de cocinas en contenedores marítimos en el frente de agua de Refshaleøen, al que se llega mejor en el bus fluvial 991/992, que es una minicrucero en sí. Funciona de forma estacional de primavera a otoño y cierra en invierno, así que comprueba que esté abierto, ve al atardecer sobre el agua, y paga con tarjeta, ya que la mayoría de los puestos no aceptan efectivo.",
    },
    {
      slug: "canal-tour",
      citySlug: "copenhagen",
      name: "El crucero por los canales",
      lat: 55.6797,
      lng: 12.5905,
      kind: "experience",
      needsBooking: false,
      tip: "Un barco de una hora rodea el puerto y los canales ante la Ópera, la Sirenita, la biblioteca del Diamante Negro y Christianshavn, y es la forma más rápida de captar cómo la ciudad se asienta sobre el agua. Embarca en los embarcaderos de Nyhavn o de Ved Stranden, prefiere un barco abierto a uno con techo de cristal, y ve a última hora de la tarde para la mejor luz sobre las fachadas.",
    },
    {
      slug: "superkilen",
      citySlug: "copenhagen",
      name: "El parque Superkilen",
      lat: 55.6994,
      lng: 12.5423,
      kind: "park",
      needsBooking: false,
      tip: "Un llamativo parque público en Nørrebro compuesto de objetos reunidos en decenas de países, desde una fuente marroquí hasta cerezos japoneses, dispuestos en tres zonas con código de color. Es gratuito y está abierto a todas horas; la ondulada Plaza Negra en blanco y negro es la foto, y se combina con naturalidad con una parada de panadería y un paseo por la cercana Jægersborggade.",
    },
  ],

  itineraries: [
    {
      citySlug: "copenhagen",
      days: 2,
      summary:
        "Dos días bastan para las atracciones estrella de Copenhague si te quedas céntrico y te mueves a pie o en bici, pero rozarás apenas los barrios que le dan carácter a la ciudad. El casco antiguo es compacto: Nyhavn, el barrio real, la Torre Redonda, Rosenborg y Tivoli quedan a menos de 25 minutos a pie unos de otros, de modo que un plan ajustado los cubre sin apenas transporte. Instálate en Indre By para que ambas mañanas arranquen a pie. La estructura que funciona es un tema por día: el núcleo real y el puerto el primer día, los palacios, la Torre Redonda y Tivoli el segundo, con un crucero por los canales para enlazar el frente de agua. Reserva poco por adelantado, salvo una franja en Rosenborg en verano y una entrada a Tivoli si cae en temporada de apertura, ya que los jardines cierran por tramos del año. Lo que cedes es Christiania, la escena gastronómica de Vesterbro y cualquier tarde tranquila junto al agua, que es justo lo que recupera un tercer día.",
      stayNeighborhoodSlug: "indre-by",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "El puerto y el barrio real",
          morning: [
            {
              poiSlug: "nyhavn",
              text: "Empieza en Nyhavn antes de que se llenen las terrazas, fotografiando las casas pintadas desde el puente al fondo del puerto con la luz de la mañana. Recorre el muelle una vez, y luego sigue adelante en lugar de pagar el sobreprecio por las vistas para desayunar aquí.",
              durationMin: 45,
            },
            {
              poiSlug: "amalienborg",
              text: "Sube hasta Amalienborg para ver los palacios reales en torno a la plaza octogonal, calculando tu paso para el cambio de guardia del mediodía y alineando la perspectiva hacia la Iglesia de Mármol y la Ópera.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "little-mermaid",
              text: "Continúa por el sendero del puerto a través de la fortaleza en estrella de Kastellet hasta la Sirenita, una rápida parada de foto más que un destino, y luego vuelve hacia el centro.",
              durationMin: 75,
            },
            {
              poiSlug: "canal-tour",
              text: "Embarca en un barco abierto en el embarcadero de Nyhavn para la vuelta de una hora por el puerto ante la Ópera, el Diamante Negro y Christianshavn, la forma más rápida de leer cómo la ciudad se asienta sobre el agua.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              text: "Cena en el casco antiguo, una calle más atrás de Nyhavn, en torno a Gråbrødretorv o en las callejuelas laterales de Strøget, donde tanto los precios como la calidad mejoran respecto al muelle.",
              durationMin: 105,
            },
            {
              text: "Termina con un paseo de vuelta a la orilla del agua, los canales en su punto más tranquilo una vez paran los barcos del día.",
              durationMin: 45,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Los palacios, la Torre Redonda y Tivoli",
          morning: [
            {
              poiSlug: "rosenborg-castle",
              text: "Abre el día en el castillo de Rosenborg en una franja temprana, bajando derecho a las joyas de la corona en la cámara del tesoro antes de que se forme la cola, y luego sal a los jardines gratuitos de Kongens Have.",
              durationMin: 105,
            },
            {
              poiSlug: "torvehallerne",
              text: "Camina hasta las naves de Torvehallerne cerca de Nørreport para un almuerzo de smørrebrød y un dulce, picoteando en los puestos en lugar de sentarte a una comida completa.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "round-tower",
              text: "Sube la Torre Redonda por su rampa adoquinada en espiral para las vistas baratas y céntricas desde la azotea sobre el casco antiguo, parando en la sala de biblioteca y el observatorio al subir.",
              durationMin: 60,
            },
            {
              poiSlug: "christiansborg-palace",
              text: "Baja hasta Christiansborg y toma el ascensor gratuito de su torre, la más alta de la ciudad, para el mejor panorama desde la azotea del día, y luego observa la plaza del palacio abajo.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "tivoli-gardens",
              text: "Si cae en temporada de apertura, pasa la tarde en los jardines de Tivoli, llegando en las últimas horas antes del cierre, cuando todo el parque se ilumina. Comprueba primero el calendario, ya que cierra por tramos del año.",
              durationMin: 150,
            },
          ],
        },
      ],
    },
    {
      citySlug: "copenhagen",
      days: 3,
      summary:
        "Tres días es la duración adecuada para Copenhague: suficiente para el núcleo real y el puerto a un ritmo tranquilo, más un día que pertenece a Christiania, a la escena gastronómica y al agua más que a la lista de tareas. Dos días te obligan a encadenar los palacios y el casco antiguo a la carrera; el tercero suma la ciudad libre de Christiania, los canales de Christianshavn y una verdadera noche de comida callejera, con tiempo para bañarte en el puerto en un día cálido. Alójate en Vesterbro, a unos minutos de la Estación Central y de Tivoli, más barato que el casco antiguo y hogar de la mejor escena gastronómica y nocturna de la ciudad a precio justo. La forma del plan: el barrio real y el puerto el primer día, los palacios, la Torre Redonda y Tivoli el segundo, Christiania y Christianshavn el tercero. Reserva poco por adelantado, salvo una franja en Rosenborg en verano y una entrada a Tivoli cuando los jardines estén abiertos. Todo lo demás recompensa alquilar una bici o tomar el metro y salir temprano.",
      stayNeighborhoodSlug: "vesterbro",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "El puerto y el barrio real",
          morning: [
            {
              poiSlug: "nyhavn",
              text: "Pedalea desde Vesterbro y empieza en Nyhavn temprano, antes de que se llenen las terrazas, para la foto de las casas pintadas desde el puente al fondo del puerto.",
              durationMin: 45,
            },
            {
              poiSlug: "amalienborg",
              text: "Camina hasta Amalienborg para ver los cuatro palacios reales y el cambio de guardia del mediodía, alineando la perspectiva hasta la Iglesia de Mármol y, al otro lado del puerto, hacia la Ópera.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "little-mermaid",
              text: "Sigue el sendero del puerto a través de la fortaleza de Kastellet hasta la Sirenita para una foto rápida, y luego vuelve hacia el centro.",
              durationMin: 75,
            },
            {
              poiSlug: "canal-tour",
              text: "Toma un barco abierto desde el embarcadero de Nyhavn para la vuelta de una hora por el puerto y ver la Ópera, el Diamante Negro y Christianshavn desde el agua con la luz de la tarde.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              text: "Vuelve a Vesterbro para cenar en las naves del matadero de Kødbyen, el mejor barrio gastronómico a precio justo de la ciudad, y luego un bar de vino natural después.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Los palacios, la Torre Redonda y Tivoli",
          morning: [
            {
              poiSlug: "rosenborg-castle",
              text: "Empieza en Rosenborg en una franja temprana, derecho a las joyas de la corona antes de que se forme la cola de la cámara del tesoro, y luego sal a los jardines gratuitos de Kongens Have.",
              durationMin: 105,
            },
            {
              poiSlug: "torvehallerne",
              text: "Almuerza en las naves de Torvehallerne cerca de Nørreport, picoteando smørrebrød y bollería por los puestos.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "round-tower",
              text: "Sube la rampa en espiral de la Torre Redonda para las vistas baratas desde la azotea sobre el casco antiguo, parando en la sala de biblioteca al subir.",
              durationMin: 60,
            },
            {
              poiSlug: "christiansborg-palace",
              text: "Toma el ascensor gratuito de la torre de Christiansborg, la más alta de la ciudad, para el panorama más amplio desde la azotea, y luego pasea por la plaza del palacio y hasta el Diamante Negro de la Biblioteca Nacional a la orilla del agua abajo.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "tivoli-gardens",
              text: "Pasa la tarde en los jardines de Tivoli si están abiertos, llegando en las últimas horas antes del cierre, cuando el parque se ilumina. Comprueba primero el calendario estacional, ya que cierra por partes del año.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Christiania, Christianshavn y la comida callejera",
          morning: [
            {
              poiSlug: "christiania",
              text: "Cruza el puerto hasta la ciudad libre de Christiania y pasea entre sus murales, sus talleres y sus senderos junto al lago, manteniendo el teléfono guardado en Pusher Street, donde las fotos están prohibidas. Tómala como una comunidad viva más que como una atracción.",
              durationMin: 90,
            },
            {
              text: "Adéntrate en Christianshavn propiamente por sus canales y sus casas flotantes, y sube la escalera exterior en espiral de Vor Frelsers Kirke por las vistas si te atreves.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "nationalmuseet",
              text: "Vuelve al otro lado hasta el Museo Nacional, de entrada gratuita, y ve directo a las salas de la época vikinga con el Carro Solar y el cuerpo de las turberas, la parte más fuerte de la colección.",
              durationMin: 90,
            },
            {
              text: "En un día cálido, cambia el museo por el baño portuario de Islands Brygge al otro lado del agua, un lugar de baño gratuito al aire libre en pleno centro de la ciudad.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "reffen",
              text: "Toma el bus fluvial 991, en sí un minicrucero, hasta el mercado de comida callejera de Reffen en Refshaleøen para el atardecer sobre el agua y una cena de las cocinas en contenedores. Comprueba que esté abierto, ya que funciona de forma estacional, y paga con tarjeta.",
              durationMin: 150,
            },
          ],
        },
      ],
    },
    {
      citySlug: "copenhagen",
      days: 4,
      summary:
        "Cuatro días es más que suficiente para las atracciones de Copenhague, y ese es justo el punto: el cuarto día convierte una carrera de palacios en un viaje de verdad. Los días uno a tres cubren el núcleo real, el puerto, Christiania y la escena gastronómica a un ritmo relajado; el cuarto es tuyo, ya sea para un día local tranquilo por Nørrebro y Vesterbro o para una excursión en tren hasta el museo de arte moderno Louisiana en la costa, o al otro lado del puente hasta Malmö en Suecia, ambos a menos de 40 minutos. Con tanto tiempo, sáltate el casco antiguo y alójate en Nørrebro, el mejor barrio gastronómico de la ciudad, más barato que el centro y lleno de panaderías, bares y el parque Superkilen. La lógica de un tema por día sigue en pie: mantén juntos el barrio real y el puerto, mantén juntos Christiania y Christianshavn, y no zigzaguees. Reserva poco por adelantado, salvo una franja en Rosenborg en verano y una entrada a Tivoli cuando los jardines estén abiertos. Si dudabas entre tres y cuatro días, el cuarto es el que recordarás.",
      stayNeighborhoodSlug: "norrebro",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "El puerto y el barrio real",
          morning: [
            {
              poiSlug: "nyhavn",
              text: "Baja en bici desde Nørrebro y empieza en Nyhavn temprano para la foto de las casas pintadas desde el puente al fondo del puerto, antes de que se llenen las terrazas.",
              durationMin: 45,
            },
            {
              poiSlug: "amalienborg",
              text: "Camina hasta Amalienborg para ver los palacios reales y el cambio de guardia del mediodía, con la perspectiva hasta la Iglesia de Mármol y la Ópera al otro lado del agua.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "little-mermaid",
              text: "Toma el sendero del puerto a través de la fortaleza de Kastellet hasta la Sirenita para una foto rápida, y luego vuelve hacia el centro.",
              durationMin: 75,
            },
            {
              poiSlug: "canal-tour",
              text: "Embarca en un barco abierto en el embarcadero de Nyhavn para la vuelta de una hora por el puerto ante la Ópera, el Diamante Negro y Christianshavn.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              text: "Cena de vuelta en Nørrebro a lo largo de Jægersborggade o de Sankt Hans Torv, donde los restaurantes y las panaderías de barrio son más baratos y más inventivos que el centro.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Los palacios, la Torre Redonda y Tivoli",
          morning: [
            {
              poiSlug: "rosenborg-castle",
              text: "Abre en Rosenborg en una franja temprana, primero hacia las joyas de la corona, y luego sal a los jardines gratuitos de Kongens Have junto a tu propio barrio.",
              durationMin: 105,
            },
            {
              poiSlug: "torvehallerne",
              text: "Almuerza en las naves de Torvehallerne cerca de Nørreport, picoteando smørrebrød y bollería por los puestos.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "round-tower",
              text: "Sube la rampa en espiral de la Torre Redonda para las vistas baratas y céntricas desde la azotea, parando en la sala de biblioteca.",
              durationMin: 60,
            },
            {
              poiSlug: "christiansborg-palace",
              text: "Toma el ascensor gratuito de la torre de Christiansborg para el panorama más alto desde la azotea de la ciudad, y luego recorre la plaza del palacio y la columna vertebral de Strøget de vuelta hacia Kongens Nytorv.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "tivoli-gardens",
              text: "Pasa la tarde en los jardines de Tivoli si están abiertos, llegando tarde, cuando el parque se ilumina. Comprueba primero el calendario estacional, ya que cierra por partes del año.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Christiania, Christianshavn y la comida callejera",
          morning: [
            {
              poiSlug: "christiania",
              text: "Cruza hasta la ciudad libre de Christiania y pasea entre sus murales, sus talleres y sus senderos junto al lago, manteniendo el teléfono guardado en Pusher Street, donde las fotos están prohibidas.",
              durationMin: 90,
            },
            {
              text: "Recorre los canales y las casas flotantes de Christianshavn, y sube la retorcida escalera exterior de Vor Frelsers Kirke por las vistas si te atreves.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "nationalmuseet",
              text: "Vuelve al otro lado hasta el Museo Nacional, gratuito, y ve hacia las salas de la época vikinga con el Carro Solar y el cuerpo de las turberas, la parte más fuerte de la colección.",
              durationMin: 90,
            },
            {
              text: "En una tarde cálida, cambia el museo por un baño en el baño portuario de Islands Brygge, una piscina gratuita al aire libre tallada en el puerto en pleno centro de la ciudad.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "reffen",
              text: "Toma el bus fluvial 991 hasta el mercado de comida callejera de Reffen en Refshaleøen para una cena al atardecer de las cocinas en contenedores. Comprueba que esté abierto, ya que funciona de forma estacional, y paga con tarjeta.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Día local en Nørrebro o excursión a Louisiana y Malmö",
          morning: [
            {
              poiSlug: "superkilen",
              text: "Opción A: empieza a la puerta de tu casa, en el parque Superkilen, y luego baja por Jægersborggade para las panaderías y el café, hasta el frondoso cementerio de Assistens donde reposa Hans Christian Andersen. Opción B: toma el tren costero unos 35 minutos al norte hasta Humlebæk para el Museo de Arte Moderno Louisiana, cuyo parque de esculturas desciende hasta el mar, o cruza el puente de Øresund en tren en unos 35 minutos hasta Malmö en Suecia.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              text: "La opción A continúa en Nørrebro y Vesterbro con un almuerzo en un restaurante de barrio y un paseo por las naves de Kødbyen y a lo largo de los lagos entre los dos barrios. Opción B: dedica la tarde a las galerías y el litoral de Louisiana, o explora el casco antiguo de Malmö y la Turning Torso antes del corto trayecto de vuelta en tren.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              text: "En cualquier caso, termina de vuelta en Nørrebro en los bares y las terrazas en torno a Sankt Hans Torv y Jægersborggade, la verdadera escena de la noche del barrio.",
              durationMin: 120,
            },
            {
              text: "Última cena en un restaurante de Nørrebro; el barrio hace una cocina creativa a precio justo, un buen cierre tras los menús con vistas al puerto del centro.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
  ],
};

export default copenhagenEs;
