import type { CityData } from "../types";

const berlinEs: CityData = {
  city: {
    slug: "berlin",
    name: "Berlin",
    country: "Alemania",
    countrySlug: "germany",
    lat: 52.52,
    lng: 13.405,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "BER",
    airportToCenter:
      "Desde el aeropuerto BER Brandeburgo, el FEX Airport Express llega a la estación central (Hauptbahnhof) en unos 30 min, o las líneas de S-Bahn S9 y S45 alcanzan el centro en 40-45 min. Cualquiera de ellas exige un billete de zonas ABC de unos 4,70 EUR, ya que el aeropuerto está en la zona C exterior. Un taxi hasta Mitte cuesta más o menos 45-60 EUR y tarda 40 min sin tráfico.",
    centerWalkable: false,
    bestMonths: [5, 6, 7, 9],
    avoidMonths: [1],
    monthlyNotes: {
      1: "El mes más frío y gris, con máximas cercanas a 3C, a menudo bajo cero de noche, días cortos y una luz tenue. La multitud es mínima y los hoteles están en su punto más bajo, pero los mercados de Navidad han cerrado ya a principios de enero y quedan pocos atractivos de temporada más allá de la calma de después de Año Nuevo.",
      2: "Todavía frío, a 4-5C, y a menudo húmedo, pero la Berlinale, el festival internacional de cine, trae a mediados de febrero diez días de preestrenos, alfombras rojas y proyecciones públicas por toda la ciudad. Reserve con antelación si viene por el festival; de lo contrario, es un tramo tranquilo y económico para ver los museos sin colas.",
      3: "Las máximas suben hacia 9C a medida que el invierno afloja su dominio, con días que se alargan pero un tiempo cambiante y ventoso. La multitud sigue siendo escasa y los precios bajos, lo que lo convierte en un mes de buena relación calidad-precio si lleva ropa para el frío y la lluvia y se centra en los sitios de interior.",
      4: "La primavera llega de forma desigual, en torno a 13C, con los cerezos en flor a lo largo de tramos del antiguo Muro y las primeras tardes templadas que atraen a la gente a los parques. La Semana Santa puede subir los precios de los hoteles unos días, pero la multitud sigue siendo moderada y la luz mejora deprisa.",
      5: "Uno de los mejores meses, a 19-20C, con largas tardes, parques verdes y las cervecerías al aire libre reabriendo con fuerza. El Karneval der Kulturen llena Kreuzberg con un desfile callejero y puestos de comida durante el fin de semana de Pentecostés, así que espere unos días animados y concurridos por esas fechas.",
      6: "Cálido y animado, a 22-23C, con los días más largos del año y la temporada de baño en los lagos del Wannsee y el Müggelsee ya en marcha. La multitud crece y los bares en azotea y las cervecerías al aire libre alcanzan su plenitud, pero los precios de los hoteles siguen por debajo de los máximos del pleno verano.",
      7: "Pleno verano, a 24-25C, cálido y concurrido, con el cine al aire libre, las playas junto a los lagos y el clubbing en exterior en su apogeo. Es el mejor mes para la vida estival de la ciudad, así que reserve alojamiento pronto y espere ver las cervecerías al aire libre populares abarrotadas las tardes soleadas.",
      8: "Todavía cálido, a 24C, pero a veces bochornoso, con tormentas de verano, y muchos berlineses se van de vacaciones, de modo que la ciudad parece algo más tranquila que en julio. Sigue siendo un mes sólido para los lagos, los parques y las largas tardes luminosas, con festivales que jalonan todo el calendario estival.",
      9: "Cálido al principio y luego bajando hacia 19C, sin duda el mejor mes en conjunto: días suaves, una multitud estival que mengua y un tiempo de cervecería al aire libre que aguanta en la primera mitad. La temporada cultural de otoño se reanuda, ofreciéndole a la vez la vida al aire libre y la reapertura de galerías y salas de conciertos.",
      10: "Más fresco, a 13-14C, con el primer frío otoñal de verdad y días más cortos, pero el Festival of Lights, a principios de mes, proyecta iluminaciones sobre los grandes monumentos al caer la noche durante unas dos semanas. La multitud se aclara y los precios se ablandan, una buena opción de temporada media bien rentable si va bien abrigado.",
      11: "Gris, frío y a menudo lluvioso, con máximas cercanas a 7C, el punto más bajo del año en cuanto a clima y luz diurna. La salvación llega justo al final, cuando los mercados de Navidad abren en los últimos días del mes, de modo que un viaje a finales de noviembre puede combinar precios bajos y el primer glühwein.",
      12: "Frío, en torno a 4C, y de noche desde media tarde, pero los mercados de Navidad se extienden por toda la ciudad de finales de noviembre hasta justo antes de Navidad, con el más destacado en Gendarmenmarkt (pequeña entrada de pago) y otros en Alexanderplatz y el palacio de Charlottenburg. La Nochevieja monta una enorme fiesta gratuita con fuegos artificiales en la puerta de Brandeburgo, así que espere multitudes y tarifas más altas en ese periodo.",
    },
    climate: {
      1: { highC: 3, lowC: -2, rainyDays: 10 },
      2: { highC: 4, lowC: -2, rainyDays: 8 },
      3: { highC: 9, lowC: 1, rainyDays: 8 },
      4: { highC: 13, lowC: 4, rainyDays: 8 },
      5: { highC: 19, lowC: 8, rainyDays: 9 },
      6: { highC: 22, lowC: 11, rainyDays: 9 },
      7: { highC: 24, lowC: 14, rainyDays: 9 },
      8: { highC: 24, lowC: 13, rainyDays: 8 },
      9: { highC: 19, lowC: 10, rainyDays: 7 },
      10: { highC: 13, lowC: 6, rainyDays: 8 },
      11: { highC: 7, lowC: 2, rainyDays: 10 },
      12: { highC: 4, lowC: -1, rainyDays: 11 },
    },
    budgetLevel: "mid",
    budgetPerDay: { budget: 65, mid: 130, high: 260 },
    tagline: "La historia del Muro, museos de talla mundial y la mejor vida nocturna de Europa.",
    heroIntro:
      "Berlín es enorme, plana y extensa, así que es una ciudad de U-Bahn y S-Bahn, no de recorrer todo a pie, y se planifica por barrios. Tres días son el mínimo honesto para repartir el núcleo histórico de Mitte, la historia del Muro y de la Guerra Fría, y un barrio moderno sin marcha forzada. Venga a finales de primavera o principios de otoño, reserve su turno gratuito para la cúpula del Reichstag antes de volar, y compre un billete de día ABC en cuanto aterrice.",
    accent: { from: "#3E4A6B", to: "#E0A43B", ink: "#232A42" },
    neighborhoodSlugs: [
      "mitte",
      "kreuzberg",
      "prenzlauer-berg",
      "friedrichshain",
      "charlottenburg",
    ],
    nearbyCitySlugs: ["prague"],
  },

  neighborhoods: [
    {
      slug: "mitte",
      citySlug: "berlin",
      name: "Mitte",
      lat: 52.5219,
      lng: 13.4016,
      bestFor: ["first-time", "family", "romantic"],
      vibe: "El centro histórico y geográfico, donde la puerta de Brandeburgo, la Isla de los Museos, el Reichstag y Unter den Linden se alinean a pocos pasos o a una parada de tranvía. Es el Berlín de las postales y la base lógica para una primera estancia corta construida en torno a los grandes sitios. Pulido y céntrico, cambia el lado crudo y local de los barrios del este por pura comodidad.",
      pros: [
        "Camine o tome un trayecto corto hasta la puerta de Brandeburgo, el Reichstag y la Isla de los Museos",
        "Estupendo nudo de transportes, con U-Bahn, S-Bahn y tranvías cruzándose en varias estaciones",
        "Todo lo que un primerizo quiere ver se agrupa aquí, lo que evita las travesías de la ciudad",
      ],
      cons: [
        "La zona más cara para los hoteles y la más concurrida por los grupos de día",
        "Algunas partes cercanas a los sitios resultan corporativas y tranquilas fuera del horario de oficina",
        "Menos de la escena local y viva que se encuentra en Kreuzberg o Neukölln",
      ],
    },
    {
      slug: "kreuzberg",
      citySlug: "berlin",
      name: "Kreuzberg",
      lat: 52.4986,
      lng: 13.4033,
      bestFor: ["nightlife", "local", "budget"],
      vibe: "El corazón del Berlín alternativo y multicultural, repleto de mercados turcos, bares junto al canal, arte urbano y algunas de las mejores comidas baratas y noches tardías de la ciudad. El tramo alrededor de Kottbusser Tor y el Landwehrkanal es desaliñado, enérgico y sin pulir, tal como la gente viene a buscar a Berlín. Ruidoso y áspero, recompensa a los viajeros que quieren lo auténtico frente a la versión ordenada.",
      pros: [
        "La mayor concentración de bares, comida callejera y vida nocturna de la ciudad",
        "Genuinamente multicultural, con el mercado turco y los paseos junto al canal",
        "Comer y beber con buena relación calidad-precio, del döner a los bares de vino natural",
      ],
      cons: [
        "Áspero y ruidoso, con esquinas duras alrededor de Kottbusser Tor de noche",
        "Un trayecto en U-Bahn desde los sitios de Mitte en vez de a pie",
        "Las noches de fin de semana se vuelven alborotadas, una mala elección para el sueño ligero",
      ],
    },
    {
      slug: "prenzlauer-berg",
      citySlug: "berlin",
      name: "Prenzlauer Berg",
      lat: 52.5403,
      lng: 13.4241,
      bestFor: ["family", "romantic", "local"],
      vibe: "Un bonito barrio del antiguo Este hecho de fincas de vecinos del siglo XIX restauradas, plazas arboladas y una cultura del brunch dominical, hoy el barrio más aburguesado y familiar de la ciudad. La zona alrededor de Kollwitzplatz y Kastanienallee tiene boutiques, cafés y el mercadillo del Mauerpark a su puerta. Tranquilo y bonito, es el Berlín fácil y cómodo más que el afilado.",
      pros: [
        "Calles bonitas y seguras, con cafés, sitios de brunch y tiendas independientes",
        "El mercadillo dominical del Mauerpark y su karaoke están a un corto paseo",
        "Excelente para familias y parejas que quieren una base más tranquila y verde",
      ],
      cons: [
        "Poca vida nocturna propia, la escena es tranquila y residencial",
        "A unas pocas paradas de U-Bahn o tranvía de los sitios centrales de Mitte",
        "Aburguesado y más caro que los barrios más ásperos del este",
      ],
    },
    {
      slug: "friedrichshain",
      citySlug: "berlin",
      name: "Friedrichshain",
      lat: 52.5155,
      lng: 13.4542,
      bestFor: ["nightlife", "budget", "local"],
      vibe: "El feudo del clubbing del antiguo Berlín Este, que alberga la East Side Gallery, los templos del tecno alrededor del Spree y la franja de bares jóvenes y baratos a lo largo de la Simon-Dach-Straße. La grandiosa Karl-Marx-Allee de la era socialista lo atraviesa, toda bulevares monumentales y Plattenbau. Áspero, joven y en pie toda la noche, es donde de verdad sucede la legendaria vida nocturna de Berlín.",
      pros: [
        "La East Side Gallery y los clubes más grandes se encuentran justo aquí",
        "Comer y beber barato en medio de una multitud joven, muy estudiantil",
        "Enlaces directos en S-Bahn y U-Bahn al otro lado del río hacia el centro",
      ],
      cons: [
        "Ruidoso y desordenado el fin de semana, construido en torno al clubbing nocturno",
        "Menos encanto a plena luz del día que los barrios del oeste o del norte",
        "Un trayecto desde los sitios de Mitte, aunque los enlaces de transporte son buenos",
      ],
    },
    {
      slug: "charlottenburg",
      citySlug: "berlin",
      name: "Charlottenburg",
      lat: 52.5058,
      lng: 13.3042,
      bestFor: ["family", "romantic", "first-time"],
      vibe: "El elegante corazón del antiguo Berlín Oeste, construido en torno al bulevar comercial del Kurfürstendamm, el palacio barroco de Charlottenburg y grandes edificios de viviendas antiguos. Parece más tranquilo y más asentado que los barrios del este, con grandes almacenes, cafés clásicos y el zoo cerca. Refinado y residencial, conviene a los viajeros que prefieren el confort y el espacio al lado crudo.",
      pros: [
        "El palacio de Charlottenburg, las compras del Ku'damm y el zoo, todo aquí",
        "Tranquilo, seguro y verde, una base cómoda para familias y parejas",
        "Transporte del lado oeste bien conectado, directo a Zoo y Hauptbahnhof",
      ],
      cons: [
        "El más alejado de los cinco de los sitios del Muro y del Berlín Este",
        "Una vida nocturna más tranquila y un ambiente más pulido, menos alternativo",
        "El aire de compras clásico puede resultar acartonado junto a la escena del este",
      ],
    },
  ],

  pois: [
    {
      slug: "brandenburg-gate",
      citySlug: "berlin",
      name: "la puerta de Brandeburgo",
      lat: 52.5163,
      lng: 13.3777,
      kind: "sight",
      needsBooking: false,
      tip: "La puerta es gratuita, abierta y nunca cierra, así que venga al amanecer o al caer la noche para ver las columnas iluminadas sin la aglomeración de grupos de día en la Pariser Platz. Se alzaba en la tierra de nadie de la ciudad dividida, y la plaza hoy le sitúa a pocos pasos del Reichstag y del memorial del Holocausto, así que encadene los tres en un solo circuito. Evite a los personajes disfrazados que ofrecen fotos, esperan un pago.",
    },
    {
      slug: "reichstag",
      citySlug: "berlin",
      name: "el Reichstag y su cúpula de cristal",
      lat: 52.5186,
      lng: 13.3762,
      kind: "sight",
      needsBooking: true,
      tip: "La cúpula de cristal es gratuita pero debe inscribirse en línea para un turno horario con días de antelación, no hay entrada sin reserva y los turnos vuelan en temporada. Lleve el documento de identidad que coincida con su reserva, la seguridad es de nivel aeropuerto. Apunte a un turno al atardecer para captar la ciudad de día y luego iluminada mientras sube la rampa en espiral, y coja la audioguía gratuita que se sincroniza con la vista.",
    },
    {
      slug: "east-side-gallery",
      citySlug: "berlin",
      name: "la East Side Gallery",
      lat: 52.5051,
      lng: 13.4394,
      kind: "sight",
      needsBooking: false,
      tip: "Este tramo de 1,3 km del muro de Berlín aún en pie, pintado con murales entre ellos el beso Brézhnev-Honecker, es gratuito y al aire libre las 24 horas a lo largo del Spree en Friedrichshain. Venga temprano por la mañana para fotografiar los paneles famosos antes de la multitud y antes de que la gente se plante delante de cada uno. Recórralo desde el extremo de la Ostbahnhof hacia la Oberbaumbrücke, luego cruce el puente hacia Kreuzberg para comer.",
    },
    {
      slug: "museum-island",
      citySlug: "berlin",
      name: "la Isla de los Museos",
      lat: 52.5169,
      lng: 13.4017,
      kind: "museum",
      needsBooking: true,
      tip: "Coja el billete combinado Bereichskarte que cubre todos los museos de la isla por un solo precio y reserve una entrada horaria en línea, ya que el Neues Museum y su busto de Nefertiti exigen un turno. Sea honesto con su plan: el Pergamon, el edificio estrella, está cerrado por una renovación importante hasta alrededor de 2027, así que no venga esperando la gran sala del altar. Elija una o dos de las casas abiertas, un día entero para todas sería la sobredosis de museo.",
    },
    {
      slug: "holocaust-memorial",
      citySlug: "berlin",
      name: "el memorial a los judíos asesinados de Europa",
      lat: 52.5139,
      lng: 13.3789,
      kind: "sight",
      needsBooking: false,
      tip: "El campo de 2.711 estelas de hormigón es gratuito, abierto y siempre accesible, a un corto paseo al sur de la puerta de Brandeburgo. Adéntrese en el medio, donde el suelo se hunde y los bloques le sobrepasan la cabeza, para sentir la desorientación que busca el diseño, y manténgase respetuoso, es un memorial, no un parque infantil. El Centro de Información subterráneo gratuito, debajo, cierra algunos días y tiene su propia cola de seguridad, así que compruébelo antes de ir.",
    },
    {
      slug: "checkpoint-charlie",
      citySlug: "berlin",
      name: "Checkpoint Charlie",
      lat: 52.5075,
      lng: 13.3904,
      kind: "sight",
      needsBooking: false,
      tip: "La garita reconstruida y el famoso cartel son gratuitos pero puro teatro turístico ahora, con actores pagados de uniforme a los que no debe dar propina por las fotos, así que trátelo como una parada de cinco minutos. La verdadera sustancia son los paneles gratuitos al aire libre a lo largo de la calle y el cercano Mauermuseum (de pago) si quiere el detalle de los relatos de fuga. Combínelo con la Topografía del Terror a un corto paseo al oeste para una mañana de Guerra Fría mucho más potente.",
    },
    {
      slug: "fernsehturm",
      citySlug: "berlin",
      name: "la torre de televisión (Fernsehturm)",
      lat: 52.5208,
      lng: 13.4094,
      kind: "viewpoint",
      needsBooking: true,
      tip: "Con 368 m, es la estructura más alta de Alemania y la vista sobre toda la ciudad llana es la mejor de Berlín, pero reserve un billete horario en línea para saltarse una cola que puede superar una hora en Alexanderplatz. Un turno preferente cuesta más pero ahorra la espera en un día de mucha afluencia. Suba hacia la puesta de sol para ver la ciudad de día y luego iluminada, y el restaurante giratorio un piso más arriba necesita su propia reserva.",
    },
    {
      slug: "berlin-cathedral",
      citySlug: "berlin",
      name: "la catedral de Berlín",
      lat: 52.5191,
      lng: 13.4009,
      kind: "sight",
      needsBooking: false,
      tip: "La gran catedral protestante de la Isla de los Museos cobra unos 10 EUR de entrada, que incluye la subida de 270 escalones hasta el paseo exterior de la cúpula, para una vista cercana sobre la isla y el Spree. Vaya por el balcón de la cúpula más que por el interior, el panorama sobre los tejados es el verdadero atractivo. Cierra a los visitantes durante los oficios, así que compruebe el horario si viene un domingo.",
    },
    {
      slug: "topography-of-terror",
      citySlug: "berlin",
      name: "la Topografía del Terror",
      lat: 52.5075,
      lng: 13.3833,
      kind: "museum",
      needsBooking: false,
      tip: "Levantado sobre el solar del antiguo cuartel general de la Gestapo y las SS, este centro de documentación es gratuito y uno de los relatos más estremecedores y mejor explicados del aparato de terror nazi de la ciudad. Cuente al menos 90 minutos para la densa exposición interior, y lea los paneles exteriores que recorren un tramo del Muro aún en pie en la entrada. Está a un corto paseo de Checkpoint Charlie, así que haga los dos juntos.",
    },
    {
      slug: "tiergarten",
      citySlug: "berlin",
      name: "el parque del Tiergarten",
      lat: 52.5145,
      lng: 13.3501,
      kind: "park",
      needsBooking: false,
      tip: "El inmenso parque central de Berlín es gratuito y se extiende desde la puerta de Brandeburgo hasta el Zoo, ideal para un paseo o una bici de alquiler entre los sitios de Mitte y Charlottenburg. Suba la columna de la Victoria (pequeña entrada de pago) en el centro para una vista a lo largo de las avenidas bordeadas de árboles, o encuentre la cervecería al aire libre del Café am Neuen See en el linde sur en los meses cálidos. Un domingo de verano verá a los locales haciendo barbacoa en cada rincón de césped.",
    },
    {
      slug: "mauerpark",
      citySlug: "berlin",
      name: "el mercadillo y karaoke del Mauerpark",
      lat: 52.5439,
      lng: 13.4025,
      kind: "experience",
      needsBooking: false,
      tip: "Los domingos, este parque de la antigua franja de la muerte acoge un vasto mercadillo además del legendario Bearpit Karaoke al aire libre en el anfiteatro de piedra a partir del principio de la tarde, ambos gratuitos. Venga a última hora de la mañana para curiosear entre los puestos, comer en los food trucks, luego coja una cerveza y mire a desconocidos cantar ante una multitud de cientos de personas. Se celebra todo el año pero está en su mejor momento con buen tiempo, así que cuádrelo en un día bonito.",
    },
    {
      slug: "gendarmenmarkt",
      citySlug: "berlin",
      name: "Gendarmenmarkt",
      lat: 52.5138,
      lng: 13.3925,
      kind: "sight",
      needsBooking: false,
      tip: "A menudo llamada la plaza más bella de la ciudad, este espacio simétrico enmarcado por las catedrales alemana y francesa y el Konzerthaus es gratuito para contemplar y fotografiar, mejor con la luz baja del amanecer o del atardecer. En diciembre acoge uno de los mejores mercados de Navidad de Berlín, que cobra una pequeña entrada para controlar la multitud. Está a dos minutos a pie de la estación de U-Bahn Französische Straße y cerca de los cafés de alta gama del Gendarmenmarkt.",
    },
    {
      slug: "tempelhofer-feld",
      citySlug: "berlin",
      name: "el Tempelhofer Feld",
      lat: 52.4732,
      lng: 13.4017,
      kind: "park",
      needsBooking: false,
      tip: "Este aeropuerto clausurado es hoy un vasto parque público gratuito donde se puede caminar, pedalear o patinar recto por las antiguas pistas, una experiencia genuinamente berlinesa sin equivalente en otro lugar. Alquile una bici y recorra toda la longitud de una antigua pista, o lleve un picnic y mire a los kitesurfistas los días de viento. Cierra al anochecer con verjas que se bloquean, así que compruebe el horario de cierre de temporada indicado en las entradas antes de instalarse.",
    },
    {
      slug: "ddr-museum",
      citySlug: "berlin",
      name: "el DDR Museum",
      lat: 52.5192,
      lng: 13.4029,
      kind: "museum",
      needsBooking: false,
      tip: "Este museo interactivo de la vida cotidiana en la Alemania del Este comunista, sobre el Spree frente a la catedral, es cautivador y participativo, con un Trabant en el que sentarse y un apartamento de la RDA reconstruido. Se queda estrecho y lento desde media jornada porque todo está pensado para tocarse y abrirse, así que llegue justo a la apertura de las 9h o en la última hora. Compre el billete en línea para saltarse la pequeña cola de taquilla en la orilla.",
    },
  ],

  itineraries: [
    {
      citySlug: "berlin",
      days: 2,
      summary:
        "Dos días cubren lo esencial de Berlín, pero la ciudad es inmensa y extensa, de modo que 48 horas son una carrera y se moverá deprisa de un barrio a otro. En dos días puede hacer el núcleo histórico de Mitte el primer día, la puerta de Brandeburgo, la cúpula del Reichstag, el memorial del Holocausto, la Isla de los Museos y Gendarmenmarkt, luego dedicar el segundo día a la historia del Muro y de la Guerra Fría, Checkpoint Charlie, la Topografía del Terror y la East Side Gallery, terminando con una cena en Kreuzberg. Lo que hay que cortar: Charlottenburg, Prenzlauer Berg, el Tempelhofer Feld, los lagos y todo tiempo pausado de barrio, así que es un tour de lo más destacado, no un Berlín que llegue a conocer. Conviene a una escapada de fin de semana o a una primera cata antes de combinar con Praga. Los imprescindibles: inscríbase en línea para su turno gratuito de la cúpula del Reichstag antes de partir, y compre un billete de día ABC en cuanto aterrice, los controles son frecuentes y las multas cuantiosas. Alójese en Mitte para que las dos mañanas empiecen cerca de los sitios. Un tercer día es con diferencia la mejor mejora, y Berlín de verdad lo reclama.",
      stayNeighborhoodSlug: "mitte",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Mitte histórico: puerta, cúpula, museos",
          morning: [
            {
              poiSlug: "brandenburg-gate",
              text: "Empiece temprano en la puerta de Brandeburgo, antes de que los grupos llenen la Pariser Platz, para fotos de las columnas con la luz de la mañana. Es gratuita y abierta, y todo lo que compone la mañana está a un corto paseo de aquí.",
              durationMin: 30,
            },
            {
              poiSlug: "reichstag",
              text: "Camine dos minutos hasta el Reichstag para su turno gratuito de cúpula reservado con antelación, llevando el documento de identidad que coincida con su reserva para la seguridad de nivel aeropuerto. Suba la rampa de cristal en espiral con la audioguía gratuita para la vista sobre el barrio gubernamental y la ciudad.",
              durationMin: 75,
            },
            {
              poiSlug: "holocaust-memorial",
              text: "Corte al sur hacia el memorial a los judíos asesinados de Europa, el campo gratuito de estelas de hormigón a un corto paseo de la puerta. Adéntrese en el centro hundido, donde los bloques le sobrepasan la cabeza, y visite el Centro de Información subterráneo si está abierto.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              text: "Coma en o cerca de Unter den Linden, luego pasee por el gran bulevar hacia el este en dirección a la isla, pasando la ópera estatal y Bebelplatz. Vaya rápido, la tarde está cargada de museos.",
              durationMin: 75,
            },
            {
              poiSlug: "museum-island",
              text: "Pase la tarde en la Isla de los Museos con una Bereichskarte combinada, eligiendo una o dos casas ya que el Pergamon está cerrado por renovación hasta alrededor de 2027. El Neues Museum y su busto de Nefertiti o la Alte Nationalgalerie son las mejores elecciones únicas.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "gendarmenmarkt",
              text: "Camine hasta Gendarmenmarkt con la luz del atardecer para la plaza simétrica enmarcada por sus dos catedrales y el Konzerthaus. Fotografíela, luego busque dónde cenar en las calles de alrededor.",
              durationMin: 45,
            },
            {
              text: "Cene en el centro de Mitte, reservando con antelación para cualquier dirección con nombre, y remate la noche con una copa en torno a los patios del Hackescher Markt a un corto paseo al norte. Es su única noche tardía cerca de los sitios.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "El Muro y el Berlín de la Guerra Fría",
          morning: [
            {
              poiSlug: "topography-of-terror",
              text: "Empiece en la Topografía del Terror sobre el solar del antiguo cuartel general de la Gestapo, gratuito y abierto, contando 90 minutos para la densa exposición. Lea los paneles exteriores a lo largo del tramo de Muro aún en pie antes de irse.",
              durationMin: 90,
            },
            {
              poiSlug: "checkpoint-charlie",
              text: "Camine unos minutos hasta Checkpoint Charlie, tratando la garita reconstruida y el cartel como una parada de foto rápida más que un momento fuerte. Ignore a los actores disfrazados de pago, y lea los paneles gratuitos al aire libre de la calle para la verdadera historia.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              text: "Coja el U-Bahn o el S-Bahn hacia el este y coma en Friedrichshain antes del paseo del Muro. Es un buen momento para validar una nueva parte de su billete de día, los controles son frecuentes en estas líneas.",
              durationMin: 75,
            },
            {
              poiSlug: "east-side-gallery",
              text: "Recorra la East Side Gallery, el tramo pintado gratuito de 1,3 km de Muro a lo largo del Spree, desde el extremo de la Ostbahnhof hacia la Oberbaumbrücke. Fotografíe los murales famosos, luego cruce el puente hacia Kreuzberg.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Pase la tarde en Kreuzberg alrededor de Kottbusser Tor y el Landwehrkanal, comiendo barato y bien, del döner a un bar junto al canal. Es el Berlín alternativo que los sitios de Mitte no le muestran.",
              durationMin: 150,
            },
          ],
        },
      ],
    },
    {
      citySlug: "berlin",
      days: 3,
      summary:
        "Sí, tres días son la duración adecuada para Berlín, y es lo que recomendamos para una primera visita a una ciudad tan extensa. Se divide claramente en tres: el núcleo histórico de Mitte, la puerta de Brandeburgo, la cúpula del Reichstag, el memorial del Holocausto, la Isla de los Museos y Gendarmenmarkt el primer día; la historia del Muro y de la Guerra Fría, Checkpoint Charlie, la Topografía del Terror y la East Side Gallery el segundo día; y un tercer día para la ciudad moderna y viva, Prenzlauer Berg, el mercado dominical del Mauerpark y el vasto Tempelhofer Feld. Tiene los monumentos, la historia y un verdadero día de barrio en vez de un esprint de pura visita. Lo que aún se queda fuera: Charlottenburg, el lado oeste y los lagos, que es precisamente lo que añade un cuarto día. Conviene a primerizos, parejas y a quien enlace luego con Praga. Alójese en Prenzlauer Berg: es tranquilo, bonito, y le pone a la puerta del Mauerpark con saltos fáciles en tranvía y U-Bahn hacia Mitte. Inscríbase para su turno gratuito de la cúpula del Reichstag y compre un billete de día ABC, los controles son frecuentes.",
      stayNeighborhoodSlug: "prenzlauer-berg",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Mitte histórico: puerta, cúpula, museos",
          morning: [
            {
              poiSlug: "brandenburg-gate",
              text: "Empiece temprano en la puerta de Brandeburgo para ver las columnas antes de que la Pariser Platz se llene de grupos. Es gratuita y abierta, y ancla un circuito matinal de los tres sitios estrella de Mitte.",
              durationMin: 30,
            },
            {
              poiSlug: "reichstag",
              text: "Camine hasta el Reichstag para su turno gratuito de cúpula reservado con antelación, con el documento de identidad que coincida con su reserva para la seguridad. Suba la rampa de cristal en espiral con la audioguía gratuita para la vista sobre la ciudad y el barrio gubernamental.",
              durationMin: 75,
            },
            {
              poiSlug: "holocaust-memorial",
              text: "Diríjase al sur hacia el memorial gratuito a los judíos asesinados de Europa, a un corto paseo de la puerta. Adéntrese en el centro, donde el suelo se hunde y las estelas le sobrepasan la cabeza, luego vea el Centro de Información subterráneo si está abierto.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              text: "Coma cerca de Unter den Linden, luego camine el bulevar hacia el este en dirección a la Isla de los Museos, pasando Bebelplatz y la ópera estatal. Un paseo relajado, no una marcha forzada, ya que los museos vienen después.",
              durationMin: 90,
            },
            {
              poiSlug: "museum-island",
              text: "Dedique la tarde a la Isla de los Museos con una Bereichskarte combinada, eligiendo una o dos casas ya que el Pergamon está cerrado por obras hasta alrededor de 2027. El Neues Museum con Nefertiti o la Alte Nationalgalerie son las mejores elecciones únicas.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "berlin-cathedral",
              text: "Si le queda energía, suba los 270 escalones de la catedral de Berlín en la isla para la vista desde el balcón de la cúpula sobre el Spree al final de la tarde. Si no, fotografíe su fachada desde el Lustgarten y siga adelante.",
              durationMin: 45,
            },
            {
              poiSlug: "gendarmenmarkt",
              text: "Camine hasta Gendarmenmarkt para la plaza más bella de la ciudad enmarcada por sus dos catedrales, mejor con la luz del atardecer. Busque dónde cenar en las calles de alrededor, reservando con antelación para cualquier dirección bien valorada.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "El Muro y el Berlín de la Guerra Fría",
          morning: [
            {
              poiSlug: "topography-of-terror",
              text: "Empiece en la Topografía del Terror gratuita sobre el antiguo solar de la Gestapo, contando 90 minutos para la densa exposición bien explicada. Lea los paneles exteriores a lo largo del Muro aún en pie en la entrada antes de continuar.",
              durationMin: 90,
            },
            {
              poiSlug: "checkpoint-charlie",
              text: "Camine hasta Checkpoint Charlie muy cerca, una parada de foto rápida en el paso reconstruido más que un momento fuerte. Ignore a los actores disfrazados de pago y lea los paneles gratuitos de la calle para la sustancia.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "fernsehturm",
              text: "Coja el U-Bahn hasta Alexanderplatz y suba la torre de televisión (Fernsehturm) en un turno horario reservado con antelación para la mejor vista sobre la ciudad llana, idealmente hacia la puesta de sol. Coja un almuerzo rápido en la plaza antes, o después si su turno es temprano.",
              durationMin: 90,
            },
            {
              poiSlug: "east-side-gallery",
              text: "Diríjase hacia el este hasta la East Side Gallery y recorra el tramo pintado gratuito de 1,3 km de Muro a lo largo del Spree, de la Ostbahnhof hacia la Oberbaumbrücke. Fotografíe los murales famosos, luego cruce el puente hacia Kreuzberg.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Pase la tarde en Friedrichshain o Kreuzberg a ambos lados del río, comiendo barato y bien y bebiendo donde va la multitud joven. Es el lado de vida nocturna de Berlín, así que dosifíquese si mañana empieza temprano.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Berlín moderno: Prenzlauer Berg, Mauerpark, Tempelhof",
          morning: [
            {
              text: "Empiece con calma con un largo brunch en Prenzlauer Berg alrededor de Kollwitzplatz o Kastanienallee, el ritual dominical local. Recorra las calles de fincas de vecinos restauradas y las tiendas independientes por el camino.",
              durationMin: 90,
            },
            {
              poiSlug: "mauerpark",
              text: "Camine hasta el Mauerpark para el vasto mercadillo dominical y, a partir del principio de la tarde, el Bearpit Karaoke gratuito al aire libre en el anfiteatro de piedra. Curiosee entre los puestos, coma en un food truck, luego coja una cerveza y mire a la multitud del karaoke.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "ddr-museum",
              text: "Vuelva hacia el centro para el DDR Museum interactivo sobre el Spree, sobre la vida cotidiana en la Alemania del Este comunista, comprando en línea para saltarse la cola. Vaya por el Trabant en el que sentarse y el apartamento de la RDA reconstruido, y manténgalo por debajo de la hora si la multitud crece.",
              durationMin: 75,
            },
            {
              poiSlug: "tempelhofer-feld",
              text: "Coja el U-Bahn hacia el sur hasta el Tempelhofer Feld, el antiguo aeropuerto gratuito, y alquile una bici para recorrer toda la longitud de una pista. Lleve un tentempié y mire a los kitesurfistas, pero tenga en cuenta que las verjas se bloquean a la hora de cierre indicada al anochecer.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              text: "Vuelva a Prenzlauer Berg para una última cena relajada cerca de su base, reservando una mesa en Kollwitzplatz o en una calle lateral. Termine con una copa tranquila muy cerca de su cama, sin travesía de ciudad que planear.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "berlin",
      days: 4,
      summary:
        "Cuatro días son el punto ideal para una primera visita a Berlín, convirtiendo un esprint extenso en unas verdaderas vacaciones. Los días uno a tres cubren lo esencial: el núcleo histórico de Mitte, la historia del Muro y de la Guerra Fría, y la ciudad moderna de Prenzlauer Berg, el Mauerpark y el Tempelhofer Feld, cada uno hecho sin prisa. El cuarto día es la válvula de escape, y se reparte de dos maneras: o el elegante lado oeste alrededor del palacio de Charlottenburg y el Ku'damm, o una media jornada de excursión hacia los palacios de Sanssouci en Potsdam o el estremecedor memorial de Sachsenhausen, ambos a un trayecto fácil en S-Bahn o tren regional desde el centro. Esta duración conviene a los viajeros que odian la marcha forzada, a las parejas y a quien tenga vuelos que enmarcan la estancia de forma incómoda. Para cuatro días recomendamos alojarse en Kreuzberg: ha aceptado un ritmo más lento, y sus bares junto al canal, su comida callejera y sus noches tardías hacen del regreso a casa cada tarde el mejor momento del día. Más allá de cuatro días, añada los lagos en verano o un día entero en Potsdam. Inscríbase para su turno gratuito de la cúpula del Reichstag y compre un billete de día ABC en cuanto llegue.",
      stayNeighborhoodSlug: "kreuzberg",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Mitte histórico: puerta, cúpula, museos",
          morning: [
            {
              poiSlug: "brandenburg-gate",
              text: "Empiece temprano en la puerta de Brandeburgo para ver las columnas antes de que la multitud llene la Pariser Platz. Gratuita y abierta, ancla el circuito matinal de los grandes monumentos de Mitte.",
              durationMin: 30,
            },
            {
              poiSlug: "reichstag",
              text: "Camine hasta el Reichstag para su turno gratuito de cúpula reservado con antelación, llevando el documento de identidad correspondiente para la seguridad. Suba la rampa de cristal en espiral con la audioguía gratuita para la vista sobre la ciudad y el barrio gubernamental.",
              durationMin: 75,
            },
            {
              poiSlug: "holocaust-memorial",
              text: "Corte al sur hacia el memorial gratuito a los judíos asesinados de Europa, a un corto paseo. Adéntrese en el centro hundido, donde las estelas le sobrepasan la cabeza, luego vea el Centro de Información subterráneo si está abierto.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              text: "Coma cerca de Unter den Linden, luego camine el bulevar hacia el este en dirección a la Isla de los Museos pasando Bebelplatz. Un paseo relajado, ya que tiene cuatro días y ninguna razón para apresurarse.",
              durationMin: 90,
            },
            {
              poiSlug: "museum-island",
              text: "Pase la tarde en la Isla de los Museos con una Bereichskarte combinada, eligiendo una o dos casas ya que el Pergamon está cerrado hasta alrededor de 2027. El Neues Museum con Nefertiti o la Alte Nationalgalerie son las mejores elecciones.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "gendarmenmarkt",
              text: "Camine hasta Gendarmenmarkt para la plaza más bella de la ciudad con la luz del atardecer, enmarcada por sus dos catedrales. Busque dónde cenar en las calles de Mitte de alrededor, reservando con antelación para cualquier dirección bien valorada.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "El Muro y el Berlín de la Guerra Fría",
          morning: [
            {
              poiSlug: "topography-of-terror",
              text: "Empiece en la Topografía del Terror gratuita sobre el antiguo solar de la Gestapo, contando 90 minutos para la exposición. Lea los paneles exteriores a lo largo del Muro aún en pie antes de partir.",
              durationMin: 90,
            },
            {
              poiSlug: "checkpoint-charlie",
              text: "Camine hasta Checkpoint Charlie, una parada de foto rápida en el paso reconstruido. Ignore a los actores disfrazados de pago y lea los paneles gratuitos de la calle para la verdadera historia.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "fernsehturm",
              text: "Coja el U-Bahn hasta Alexanderplatz y suba la torre de televisión (Fernsehturm) en un turno reservado con antelación para la mejor vista sobre la ciudad llana. Coma en la plaza en torno a su turno.",
              durationMin: 90,
            },
            {
              poiSlug: "east-side-gallery",
              text: "Diríjase hasta la East Side Gallery y recorra el tramo pintado gratuito de 1,3 km de Muro a lo largo del Spree, de la Ostbahnhof hacia la Oberbaumbrücke. Cruce el puente hacia Kreuzberg donde se aloja.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Pase la tarde en casa en Kreuzberg alrededor de Kottbusser Tor y el canal, comiendo barato y bien y bebiendo donde van los locales. Está basado aquí, así que ningún trayecto de vuelta que planear.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Berlín moderno: Prenzlauer Berg, Mauerpark, Tempelhof",
          morning: [
            {
              text: "Suba a Prenzlauer Berg para un largo brunch alrededor de Kollwitzplatz, el ritual local del fin de semana, y recorra las calles de fincas de vecinos restauradas. Un comienzo lento para un día de barrio.",
              durationMin: 90,
            },
            {
              poiSlug: "mauerpark",
              text: "Camine hasta el Mauerpark para el mercadillo dominical y, a partir del principio de la tarde, el Bearpit Karaoke gratuito al aire libre en el anfiteatro de piedra. Curiosee entre los puestos, coma en un food truck, luego mire el karaoke con una cerveza.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "tempelhofer-feld",
              text: "Coja el U-Bahn hacia el sur hasta el Tempelhofer Feld, el antiguo aeropuerto gratuito, y alquile una bici para recorrer toda la longitud de una pista. Lleve un picnic, mire a los kitesurfistas, y tenga en cuenta que las verjas se bloquean a la hora indicada al anochecer.",
              durationMin: 120,
            },
            {
              poiSlug: "ddr-museum",
              text: "Si el tiempo lo permite a la vuelta, dese un salto al DDR Museum interactivo sobre el Spree por el Trabant en el que sentarse y el apartamento de la RDA reconstruido, comprando en línea para saltarse la cola. Manténgalo corto, una hora basta.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Vuelva a Kreuzberg para la cena y las copas, probando un bar de vino natural o una dirección a lo largo del Landwehrkanal. Es el elemento del barrio, así que quédese un rato.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Berlín Oeste o un día en Potsdam",
          morning: [
            {
              text: "Elija la dirección de su cuarto día. Para el lado oeste, coja el U-Bahn hasta el palacio de Charlottenburg, la antigua residencia real barroca con jardines a la francesa, y cuente un par de buenas horas para los aposentos de gala y el parque. Para una excursión en cambio, coja el tren regional hacia Potsdam y el parque de Sanssouci por los palacios rococó y los viñedos en terrazas.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              text: "Si se ha quedado en el oeste, pasee por el bulevar comercial del Kurfürstendamm y vea la torre en ruinas de la iglesia Memorial Kaiser Wilhelm, luego tome un café en un clásico de Charlottenburg. Si ha ido a Potsdam, recorra el barrio holandés y el casco antiguo antes del trayecto de vuelta. Como alternativa más dura, pase el día en el memorial del campo de concentración de Sachsenhausen al norte de la ciudad, una salida estremecedora en S-Bahn y autobús que necesita toda una tarde.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              poiSlug: "tiergarten",
              text: "De vuelta en el centro, recorra una parte del Tiergarten en la hora dorada, o encuentre su cervecería al aire libre del Café am Neuen See en el linde sur en los meses cálidos. Un remate verde y fácil tras la salida del día.",
              durationMin: 75,
            },
            {
              text: "Reserve una cena de despedida de vuelta en Kreuzberg, gastando un poco más en su última comida berlinesa en una dirección detectada antes. Termine con una última copa a lo largo del canal, a un corto paseo de su cama.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
  ],
};

export default berlinEs;
