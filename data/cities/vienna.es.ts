import type { CityData } from "../types";

const viennaEs: CityData = {
  city: {
    slug: "vienna",
    name: "Viena",
    country: "Austria",
    countrySlug: "austria",
    lat: 48.2082,
    lng: 16.3738,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "VIE",
    airportToCenter:
      "El S-Bahn S7 conecta el aeropuerto con Wien Mitte en unos 25 minutos por 4,30 EUR, la opción sensata más barata. El City Airport Train (CAT) cubre el mismo trayecto sin paradas en 16 minutos, pero cuesta unos 14,90 EUR el trayecto de ida, así que la mayoría de los visitantes toman el S7.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10, 12],
    avoidMonths: [1],
    monthlyNotes: {
      1: "Frío y gris, con máximas en torno a 3C y los mercadillos de Navidad ya desmontados, así que este es el mes más tranquilo y barato. También es el corazón de la temporada de bailes: decenas de bailes de gala se celebran a lo largo de enero, y la demanda hotelera solo se dispara esas noches concretas.",
      2: "Todavía cerca de cero, pero la temporada de bailes vieneses alcanza su cima con el Baile de la Ópera en la Ópera Estatal a finales de febrero, la noche más célebre del calendario social. Al margen de los bailes, la ciudad está tranquila y las habitaciones siguen baratas; lleve ropa para mínimas bajo cero.",
      3: "Las máximas suben hacia los 11C y los jardines de los palacios empiezan a reabrir para la temporada. La afluencia sigue siendo ligera y los precios quedan por debajo del pico primaveral, lo que lo convierte en una ventana de temporada media inteligente antes de que llegue la demanda de Pascua.",
      4: "La primavera de verdad, en torno a 15C, con los jardines de Schonbrunn y el Prater en flor y los mercadillos de Pascua en la Freyung y en Schonbrunn. Los fines de semana se llenan alrededor de Pascua, así que reserve con antelación las entradas con horario del palacio.",
      5: "Uno de los mejores meses, a unos 20C, y el festival de artes Wiener Festwochen abre a mediados de mayo y se prolonga hasta junio con teatro, música e instalaciones por toda la ciudad. Reserve alojamiento pronto; los fines de semana de mayo alcanzan tarifas altas de temporada media.",
      6: "Cálido, en torno a 24C, con días largos, la recta final de los Wiener Festwochen y conciertos al aire libre, entre ellos el gratuito Concierto de la Noche de Verano de la Filarmónica de Viena en los jardines de Schonbrunn. Las cervecerías al aire libre y la isla del Danubio se llenan; la afluencia crece pero sin llegar al pleno verano.",
      7: "Pico de calor estival, cerca de 26C, el mes más turístico, y la Ópera Estatal de Viena cierra por su pausa veraniega, así que consulte el programa de verano si la ópera es su motivo para visitar. El Festival de Cine de la Rathausplatz se instala frente al ayuntamiento con proyecciones gratuitas y puestos de comida todo el mes.",
      8: "El mismo calor y afluencia que en julio, con ocasionales tormentas de tarde y muchos vecinos fuera de vacaciones. El Festival de Cine de la Rathausplatz continúa; la isla del Danubio y las zonas de baño del Alte Donau son los mejores sitios para escapar del calor.",
      9: "Máximas en torno a 21C, afluencia que se aligera tras la primera semana, y arranque de la temporada cultural con la reapertura de la ópera y las salas de conciertos. Los precios se relajan y el tiempo se mantiene fiable, lo que lo convierte en la alternativa inteligente al verano.",
      10: "Días frescos de 14C y color otoñal intenso en el Prater y los parques de los palacios. El número de turistas cae notablemente pasada la mitad del mes y las tarifas hoteleras lo siguen; el Día Nacional del 26 de octubre trae entrada gratuita a los museos y desfiles militares en la Heldenplatz.",
      11: "Gris y frío, con máximas en torno a 7C, el tramo más tranquilo del año hasta que los mercadillos de Navidad abren en la segunda mitad del mes. Finales de noviembre es un buen punto medio: el ambiente del mercadillo de la Rathausplatz sin la densidad de los fines de semana de diciembre.",
      12: "Los mercadillos de Navidad se celebran desde mediados de noviembre hasta el 26 de diciembre, el mayor en la Rathausplatz con cientos de puestos, además del Belvedere, Schonbrunn, Spittelberg y Am Hof. Espere mínimas bajo cero, Punsch caliente por todas partes, gran afluencia los fines de semana y precios hoteleros de diciembre muy por encima de la norma invernal.",
    },
    climate: {
      1: { highC: 3, lowC: -2, rainyDays: 8 },
      2: { highC: 5, lowC: -1, rainyDays: 7 },
      3: { highC: 11, lowC: 2, rainyDays: 8 },
      4: { highC: 15, lowC: 6, rainyDays: 8 },
      5: { highC: 20, lowC: 10, rainyDays: 9 },
      6: { highC: 24, lowC: 14, rainyDays: 10 },
      7: { highC: 26, lowC: 16, rainyDays: 9 },
      8: { highC: 26, lowC: 15, rainyDays: 9 },
      9: { highC: 21, lowC: 11, rainyDays: 6 },
      10: { highC: 14, lowC: 7, rainyDays: 7 },
      11: { highC: 7, lowC: 3, rainyDays: 8 },
      12: { highC: 4, lowC: -1, rainyDays: 8 },
    },
    budgetLevel: "mid",
    budgetPerDay: { budget: 70, mid: 140, high: 280 },
    tagline: "Palacios imperiales, rituales de café, el oro de Klimt.",
    heroIntro:
      "Viena encierra la corte de los Habsburgo, un muro de museos de talla mundial y una cultura del café bien viva dentro de un centro cerrado por los tranvías que puede dominar en un día. Los enclaves imperiales quedan algo apartados, así que el truco está en agrupar los palacios un día y el ring del centro otro. Tres días bastan para la Hofburg, Schonbrunn, el Belvedere y el barrio de los museos sin prisas, y aún dejan una tarde para la ópera de pie y un café tomado con calma.",
    accent: { from: "#A83E5B", to: "#D9A441", ink: "#5E2438" },
    neighborhoodSlugs: [
      "innere-stadt",
      "leopoldstadt",
      "neubau",
      "mariahilf",
      "landstrasse",
    ],
    nearbyCitySlugs: ["prague", "budapest"],
  },

  neighborhoods: [
    {
      slug: "innere-stadt",
      citySlug: "vienna",
      name: "Innere Stadt (casco antiguo)",
      lat: 48.2085,
      lng: 16.3721,
      bestFor: ["first-time", "romantic"],
      vibe: "El primer distrito histórico dentro de la Ringstrasse, levantado alrededor de la catedral de San Esteban y el palacio de la Hofburg. Es el núcleo imperial, todo grandes bulevares, patios con arcadas y los cafés clásicos, y todo lo que un primerizo quiere está a quince minutos a pie. Se vacía de la muchedumbre diurna por la noche y se vuelve tranquilo y elegante.",
      pros: [
        "Catedral, Hofburg, Ópera Estatal y los grandes museos, todo a pie",
        "Todas las líneas de tranvía y metro convergen aquí, las excursiones arrancan sin esfuerzo",
        "Cero transporte necesario para un viaje de 2 días",
      ],
      cons: [
        "El distrito más caro de la ciudad para hotel y comida",
        "Los restaurantes alrededor de la catedral y el Graben son trampas a precios turísticos",
        "Vida nocturna auténtica limitada; se apaga después de la cena",
      ],
    },
    {
      slug: "leopoldstadt",
      citySlug: "vienna",
      name: "Leopoldstadt",
      lat: 48.2167,
      lng: 16.3925,
      bestFor: ["local", "family", "budget"],
      vibe: "El segundo distrito al otro lado del Canal del Danubio, hogar del parque Prater y de una mezcla en plena transformación de la vieja Viena judía, tenderos turcos y balcánicos y una joven escena creativa. El Karmelitermarkt ancla una escena gastronómica y de cafés genuinamente local, y la extensión verde del Prater queda a la puerta. Está a una parada de metro del casco antiguo, pero cuesta bastante menos.",
      pros: [
        "El parque Prater, la Riesenrad y largos paseos junto al canal para las familias",
        "El Karmelitermarkt y el Volkertmarkt para comer local a precios justos",
        "Rápidas líneas de metro U1 y U2, a una parada del centro",
      ],
      cons: [
        "Ningún enclave estrella en el distrito más allá del Prater",
        "Algunas manzanas cerca de las estaciones resultan anodinas y en transición",
        "Noches residenciales tranquilas si busca vida nocturna al pie del hotel",
      ],
    },
    {
      slug: "neubau",
      citySlug: "vienna",
      name: "Neubau",
      lat: 48.2011,
      lng: 16.3489,
      bestFor: ["local", "nightlife", "romantic"],
      vibe: "El séptimo distrito detrás del MuseumsQuartier, el corazón del diseño y el comercio independiente de Viena. Las callejuelas adoquinadas Biedermeier de Spittelberg albergan tabernas de vino y boutiques, mientras la Neubaugasse alinea una larga hilera de concept stores, tostadores de café y bares pequeños. Se llega a pie a los grandes museos y, aun así, parece el lugar donde los creativos locales pasan de verdad sus tardes.",
      pros: [
        "El MuseumsQuartier y el Kunsthistorisches Museum a unos pasos",
        "Las mejores tiendas independientes, tostadores y raciones para compartir de la ciudad",
        "Escena de bares y tabernas de vino animada pero sin pretensiones por la noche",
      ],
      cons: [
        "Se camina o se toma un tranvía corto para los enclaves imperiales del primer distrito",
        "Las manzanas más populares pueden ser ruidosas las noches de fin de semana",
        "Menos hoteles grandes; la oferta se inclina hacia apartamentos y boutiques",
      ],
    },
    {
      slug: "mariahilf",
      citySlug: "vienna",
      name: "Mariahilf",
      lat: 48.1969,
      lng: 16.3489,
      bestFor: ["budget", "local", "first-time"],
      vibe: "El sexto distrito construido a lo largo de la Mariahilfer Strasse, la calle comercial más transitada de la ciudad, con el extenso Naschmarkt en su extremo bajo. Equilibra practicidad y carácter: tiendas de gran vía y hoteles fiables de gama media arriba, puestos de comida y mercadillo de fin de semana abajo junto al mercado. El centro está a quince minutos a pie en línea recta o a dos paradas de metro.",
      pros: [
        "Los puestos del Naschmarkt y el mercadillo de los sábados a la puerta",
        "La mayor variedad de hoteles sólidos de gama media y económicos de la ciudad",
        "U3 directo y la Mariahilfer Strasse peatonal hasta el centro",
      ],
      cons: [
        "La calle comercial principal está abarrotada y sin encanto en horas punta",
        "Menos ambiente que Neubau, justo cuesta arriba",
        "Los restaurantes del Naschmarkt son más caros de lo que sugiere la fama de los puestos de comida",
      ],
    },
    {
      slug: "landstrasse",
      citySlug: "vienna",
      name: "Landstrasse",
      lat: 48.1969,
      lng: 16.3947,
      bestFor: ["first-time", "family", "budget"],
      vibe: "El tercer distrito al sureste del ring, envuelto alrededor del palacio Belvedere y sus jardines formales. Es un barrio residencial tranquilo y bien conectado, con la Hundertwasserhaus, el Rochusmarkt y fácil acceso al tren del aeropuerto desde Wien Mitte. Las habitaciones cuestan menos que en el primer distrito, mientras que el Belvedere y el ring quedan a distancia caminable.",
      pros: [
        "El palacio Belvedere, sus jardines y El beso de Klimt a unos minutos",
        "El nudo de Wien Mitte ofrece la conexión al aeropuerto más rápida de la ciudad",
        "Más tranquilo y barato que el centro, y aun así lo bastante céntrico para ir a pie",
      ],
      cons: [
        "Muy extenso, así que algunos hoteles quedan a una caminata real del enclave más próximo",
        "Menos restaurantes destacados que en Neubau o Leopoldstadt",
        "Al distrito le falta un único núcleo animado que sirva de ancla para una velada",
      ],
    },
  ],

  pois: [
    {
      slug: "schonbrunn-palace",
      citySlug: "vienna",
      name: "Palacio de Schonbrunn",
      lat: 48.1849,
      lng: 16.3122,
      kind: "sight",
      needsBooking: true,
      tip: "Compre una entrada con horario por internet, ya que el palacio admite por franja y las franjas del mismo día se agotan a mediodía en temporada. Elija la franja más temprana, hacia las 8:30, o las dos últimas horas del día para esquivar el pico de los grupos organizados; los vastos jardines, la colina de la Gloriette y el laberinto son gratis, así que reserve el interior de pago para el Grand Tour y pase el resto al aire libre.",
    },
    {
      slug: "hofburg",
      citySlug: "vienna",
      name: "Palacio de Hofburg",
      lat: 48.2065,
      lng: 16.3657,
      kind: "sight",
      needsBooking: true,
      tip: "La única Sisi Ticket cubre aquí los Aposentos Imperiales, el Museo Sisi y la Colección de Plata, más el Grand Tour de Schonbrunn, así que cómprela una vez si planea ambos palacios y evite dos colas separadas. Entre en los Aposentos Imperiales justo a la apertura de las 9; la audioguía está incluida, y los patios, la Heldenplatz y las arcadas son gratis de recorrer a cualquier hora.",
    },
    {
      slug: "stephansdom",
      citySlug: "vienna",
      name: "Catedral de San Esteban (Stephansdom)",
      lat: 48.2085,
      lng: 16.3731,
      kind: "sight",
      needsBooking: false,
      tip: "La zona de pie del fondo es gratis, pero la nave, la visita a las catacumbas y las dos torres se pagan cada una por separado, así que decida antes de entrar. Los 343 peldaños de la torre sur ofrecen la mejor subida y vista del horizonte; la torre norte tiene ascensor hasta la campana Pummerin y colas más cortas, y el dibujo del tejado de tejas se fotografía mejor desde la esquina opuesta de la Stephansplatz.",
    },
    {
      slug: "belvedere",
      citySlug: "vienna",
      name: "Palacio Belvedere (El beso de Klimt)",
      lat: 48.1915,
      lng: 16.3809,
      kind: "museum",
      needsBooking: true,
      tip: "Reserve una entrada con horario para el Belvedere Superior y vaya a la apertura de las 9, porque la sala que alberga El beso de Klimt es el punto más abarrotado de Viena a media mañana. Vea El beso primero antes de volver sobre el resto de la colección, y sáltese el Belvedere Inferior salvo que una exposición temporal le atraiga; los jardines formales entre los dos palacios son gratis.",
    },
    {
      slug: "kunsthistorisches-museum",
      citySlug: "vienna",
      name: "Kunsthistorisches Museum",
      lat: 48.2039,
      lng: 16.3616,
      kind: "museum",
      needsBooking: true,
      tip: "La sala Bruegel, la mayor colección de sus cuadros del mundo, es el motivo de venir, así que suba primero a la pinacoteca antes de que lleguen los grupos. Haga una pausa para café y pastel bajo el café con cúpula de la primera planta, uno de los más grandiosos cafés de museo de Europa; la entrada cubre también la Tesorería Imperial de la Hofburg en días distintos si compra el pase combinado.",
    },
    {
      slug: "state-opera",
      citySlug: "vienna",
      name: "Ópera Estatal de Viena",
      lat: 48.2033,
      lng: 16.3691,
      kind: "experience",
      needsBooking: true,
      tip: "Las localidades de pie cuestan de 13 a 18 EUR y salen a la venta unos 80 minutos antes de subir el telón por la puerta lateral del lado de la Operngasse, así que póngase en la cola al menos una hora antes para un buen sitio en la barandilla. Ate su bufanda a la barandilla para guardar el sitio y salga; si prefiere sentarse, reserve butaca por internet con semanas de antelación, y tenga en cuenta que la ópera cierra en julio y agosto.",
    },
    {
      slug: "naschmarkt",
      citySlug: "vienna",
      name: "Naschmarkt",
      lat: 48.1985,
      lng: 16.3639,
      kind: "food",
      needsBooking: false,
      tip: "Venga antes del mediodía para recorrer los tenderos, los mostradores de queso y los puestos de Oriente Medio antes de que los restaurantes con servicio tomen el relevo y los precios suban. El mercadillo de los sábados en el extremo de la Kettenbruckengasse va de en torno a las 6:30 a media tarde y es el verdadero reclamo; el mercado cierra los domingos, así que planee su visita para una mañana entre semana o un sábado.",
    },
    {
      slug: "prater-riesenrad",
      citySlug: "vienna",
      name: "Prater y Riesenrad",
      lat: 48.2166,
      lng: 16.3958,
      kind: "park",
      needsBooking: false,
      tip: "El parque en sí y su larga avenida de castaños son gratis y abren a cualquier hora; solo la noria Riesenrad y las atracciones de feria cuestan dinero. Súbase a la Riesenrad cerca del atardecer para la mejor luz y la cola más corta, o sáltela y recorra en su lugar la Hauptallee, y luego coma en un restaurante con jardín como el Schweizerhaus por un Stelze y medio litro de cerveza.",
    },
    {
      slug: "cafe-central",
      citySlug: "vienna",
      name: "Café Central",
      lat: 48.2103,
      lng: 16.3656,
      kind: "food",
      needsBooking: false,
      tip: "La sala abovedada es espectacular, pero la cola ante la puerta suele durar 30 minutos en horas punta; llegue a la apertura de las 8 o después de las 15 para entrar directo. La etiqueta de los cafés hace que un Melange le compre la mesa durante horas sin prisa, así que pida un café y una porción de Sachertorte y demórese; para el mismo ritual sin cola, pruebe el Café Sperl o el Café Landtmann cerca.",
    },
    {
      slug: "albertina",
      citySlug: "vienna",
      name: "Albertina",
      lat: 48.2043,
      lng: 16.3682,
      kind: "museum",
      needsBooking: true,
      tip: "Reserve por internet para saltarse la cola de entradas, y luego empiece por la colección permanente de Monet a Picasso arriba antes de que la gran muestra temporal atraiga a las multitudes. Las salas de gala de los Habsburgo a la entrada están incluidas y a menudo pasan desapercibidas; la terraza sobre la Ópera y la Albertinaplatz es de acceso gratuito y ofrece una infrecuente vista elevada del ring.",
    },
    {
      slug: "hundertwasserhaus",
      citySlug: "vienna",
      name: "Hundertwasserhaus",
      lat: 48.2071,
      lng: 16.3941,
      kind: "sight",
      needsBooking: false,
      tip: "Es un edificio residencial, así que la fachada ondulada y los tejados ajardinados solo se ven desde la calle, lo que lleva diez minutos. Fotografíela desde la esquina de la Kegelgasse y la Lowengasse para el encuadre completo, y luego cruce a la galería comercial gratuita del Hundertwasser Village enfrente; combínela con el cercano museo Kunst Haus Wien si quiere la versión interior de pago.",
    },
    {
      slug: "museumsquartier",
      citySlug: "vienna",
      name: "MuseumsQuartier",
      lat: 48.2035,
      lng: 16.3585,
      kind: "experience",
      needsBooking: false,
      tip: "El patio con sus tumbonas Enzi de colores es gratis y abre las 24 horas, un sitio de primera para tomar algo entre visitas a museos; el Museo Leopold, aquí, alberga la mayor colección de Egon Schiele del mundo y necesita una entrada aparte. Compre la entrada combinada del MQ solo si planea hacer el Leopold y el museo de arte moderno mumok el mismo día.",
    },
    {
      slug: "karlskirche",
      citySlug: "vienna",
      name: "Karlskirche",
      lat: 48.1985,
      lng: 16.3719,
      kind: "sight",
      needsBooking: false,
      tip: "La entrada de pago incluye un ascensor panorámico que sube por el interior de la cúpula hasta casi tocar los frescos del techo, que es la razón para pagar la entrada en vez de solo admirar la fachada barroca desde el estanque reflectante de fuera. Vaya una mañana entre semana, cuando el ascensor no tiene cola; hay conciertos de las Cuatro Estaciones de Vivaldi casi todas las tardes, pero la visita diurna a la cúpula ofrece mejor relación calidad-precio.",
    },
    {
      slug: "spanish-riding-school",
      citySlug: "vienna",
      name: "Escuela Española de Equitación",
      lat: 48.2075,
      lng: 16.3665,
      kind: "experience",
      needsBooking: true,
      tip: "Las funciones completas de los sementales lipizanos se agotan con semanas de antelación y cuestan desde unos 25 EUR, pero las sesiones de entrenamiento matinales son mucho más baratas, en torno a 15 EUR, y permiten ver a los mismos caballos ensayar bajo el mismo picadero barroco. Reserve el entrenamiento de la mañana por internet, llegue a la apertura de puertas, y tenga en cuenta que no hay entrenamiento los lunes ni durante las vacaciones estivales de las caballerizas.",
    },
  ],

  itineraries: [
    {
      citySlug: "vienna",
      days: 2,
      summary:
        "Dos días bastan para los enclaves imperiales estrella de Viena si se aloja en el centro y arranca temprano, pero dejará el barrio de los museos y los distritos locales apenas rozados. El centro es compacto dentro de la Ringstrasse: la catedral de San Esteban, la Hofburg y la Ópera Estatal están a quince minutos a pie, y los tranvías cierran el círculo. Instálese en la Innere Stadt para que las dos mañanas empiecen a pie. La estructura que funciona es un día de ciudad imperial y un día de palacios: el día uno para la catedral, la Hofburg y un café; el día dos hacia Schonbrunn por la mañana y el Belvedere para El beso de Klimt por la tarde. Reserve por internet antes de llegar las entradas con horario de Schonbrunn y del Belvedere y la Sisi Ticket de la Hofburg, porque las colas y las franjas agotadas son la única amenaza real para una visita de 48 horas. Lo que sacrifica es el Kunsthistorisches Museum, el MuseumsQuartier y cualquier velada tranquila en Neubau, que es justo lo que un tercer día compra. Coma fuera de la plaza de la catedral, no en ella.",
      stayNeighborhoodSlug: "innere-stadt",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Centro imperial y la Hofburg",
          morning: [
            {
              poiSlug: "stephansdom",
              text: "Empiece en la catedral de San Esteban hacia las 8:30 mientras la plaza sigue tranquila, recorra la nave trasera gratuita y luego suba los 343 peldaños de la torre sur para el horizonte del tejado de tejas antes de que aterricen los primeros grupos.",
              durationMin: 75,
            },
            {
              poiSlug: "hofburg",
              text: "Camine diez minutos hasta la Hofburg y entre en los Aposentos Imperiales y el Museo Sisi a la apertura de las 9 con su Sisi Ticket reservada. La audioguía incluida le lleva por la corte de los Habsburgo en unos noventa minutos.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "cafe-central",
              text: "Almuerzo y café en el Café Central, a unos minutos al norte; llegue tras la avalancha del mediodía, tome un plato pequeño y un Melange, y aproveche la regla de los cafés según la cual un café le guarda la mesa el tiempo que quiera.",
              durationMin: 90,
            },
            {
              poiSlug: "albertina",
              text: "Vuelva pasando junto a la Hofburg hasta la Albertina para la colección de Monet a Picasso y las salas de gala de los Habsburgo, y luego suba a la terraza gratuita sobre la Ópera para una vista elevada del ring.",
              durationMin: 105,
            },
          ],
          evening: [
            {
              poiSlug: "state-opera",
              text: "Haga cola en la puerta lateral del lado de la Operngasse de la Ópera Estatal una hora antes de subir el telón para una localidad de pie de 13 a 18 EUR. Ate su bufanda a la barandilla para guardar el sitio y luego asista a un acto de lo que haya en cartel esa noche.",
              durationMin: 120,
            },
            {
              text: "Cena en un Beisl tradicional del primer distrito, al margen de las plazas principales, en un sitio como el Gmoakeller o el bar del Zum Schwarzen Kameel, por un Wiener Schnitzel y una copa de Gruner Veltliner sin el recargo de la Stephansplatz.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Schonbrunn y el Belvedere",
          morning: [
            {
              poiSlug: "schonbrunn-palace",
              text: "Tome el metro U4 hasta Schonbrunn y use su franja de las 8:30 para el Grand Tour del interior del palacio antes de que lleguen los autocares. Después suba a la colina gratuita de la Gloriette para la vista clásica sobre el palacio.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "belvedere",
              text: "Metro y tranvía hasta el Belvedere Superior para su entrada con horario de primera hora de la tarde y vaya directo a El beso de Klimt antes de que la sala se llene, y luego regrese a través del resto de la colección.",
              durationMin: 120,
            },
            {
              text: "Baje a través de los jardines formales gratuitos entre el Belvedere Superior y el Inferior, la vista sin entrada más bella de esta parte de la ciudad, y salga hacia el ring para volver a pie a su hotel.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "karlskirche",
              text: "Pare en la Karlskirche de camino y pague el ascensor de la cúpula que sube a los frescos del techo; un inicio de tarde entre semana no suele tener cola para la plataforma panorámica.",
              durationMin: 60,
            },
            {
              text: "Termine con una cena cerca del extremo del Naschmarkt del sexto distrito, y luego una última vuelta iluminada ante la Ópera y las puertas de la Hofburg, en su mejor momento una vez vacías tras caer la noche.",
              durationMin: 105,
            },
          ],
        },
      ],
    },
    {
      citySlug: "vienna",
      days: 3,
      summary:
        "Tres días es la duración justa para Viena: bastan para los palacios, la catedral y los grandes museos a un ritmo humano, más una velada que pertenece a la ciudad y no a la lista de tareas. Dos días le obligan a hacer Schonbrunn y el Belvedere a la carrera, uno tras otro; el tercer día añade el Kunsthistorisches Museum, el MuseumsQuartier y el tiempo de sentarse en un café sin mirar el reloj. Alójese en Neubau, detrás del barrio de los museos. Cuesta menos que el primer distrito, y sus tostadores de café, tabernas de vino y tiendas independientes son donde la ciudad pasa de verdad sus tardes, a poca distancia a pie de cada enclave importante. La forma del plan: día uno para el ring del centro y la Hofburg, día dos para Schonbrunn y el Belvedere, día tres para el barrio de los museos y una tarde local tomada con calma. Reserve tres cosas por internet antes de llegar: la franja con horario de Schonbrunn, la del Belvedere y la Sisi Ticket de la Hofburg. Todo lo demás en Viena premia el llegar temprano antes que pagar de más.",
      stayNeighborhoodSlug: "neubau",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Ring del centro y la Hofburg",
          morning: [
            {
              poiSlug: "stephansdom",
              text: "Desde Neubau, camine o tome el U3 hasta Stephansplatz y llegue a la catedral de San Esteban antes de las 9; haga la nave gratuita y la subida a la torre sur mientras la plaza sigue vacía.",
              durationMin: 75,
            },
            {
              poiSlug: "hofburg",
              text: "Recorra el Graben y la Kohlmarkt hasta la Hofburg y entre en los Aposentos Imperiales y el Museo Sisi a la apertura con su Sisi Ticket, con la audioguía incluida marcando el ritmo por las salas de los Habsburgo.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "cafe-central",
              text: "Almuerzo de café en el Café Central, justo al norte de la Hofburg; vaya cuando la cola del mediodía se deshinche, pida un Melange y una Sachertorte, e instálese sin presión por marcharse.",
              durationMin: 90,
            },
            {
              poiSlug: "albertina",
              text: "Enlace con la Albertina reservada de antemano para las salas de Monet a Picasso y los aposentos de gala, terminando en la terraza gratuita sobre la Ópera y la Albertinaplatz.",
              durationMin: 105,
            },
          ],
          evening: [
            {
              poiSlug: "state-opera",
              text: "Haga cola en la puerta de la Operngasse de la Ópera Estatal una hora antes de subir el telón para una localidad de pie, ate su bufanda a la barandilla y disfrute de un acto; todo el ritual sale por bastante menos de 20 EUR.",
              durationMin: 120,
            },
            {
              text: "Vuelva a pie a Neubau para cenar entre las callejuelas de Spittelberg, donde las tabernas de vino Biedermeier y los bistrós de raciones sirven mejor y más barato que cualquier cosa en la Stephansplatz.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Schonbrunn y el Belvedere",
          morning: [
            {
              poiSlug: "schonbrunn-palace",
              text: "Tome el U4 hasta Schonbrunn para una franja de las 8:30 en el Grand Tour antes de que lleguen los autocares, y luego suba a la Gloriette gratuita para la vista de postal sobre el palacio y los jardines.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "belvedere",
              text: "Cruce la ciudad hasta el Belvedere Superior para una entrada con horario de primera hora de la tarde y vaya directo a El beso de Klimt antes de que la muchedumbre crezca, y luego tome el resto de la colección austriaca a placer.",
              durationMin: 120,
            },
            {
              poiSlug: "hundertwasserhaus",
              text: "Camine quince minutos hacia el este hasta la Hundertwasserhaus por la fachada ondulada y los tejados ajardinados, mejor encuadrados desde la esquina de la Kegelgasse, y luego eche un vistazo a la galería gratuita del Hundertwasser Village enfrente.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "karlskirche",
              text: "Diríjase a la Karlskirche y tome el ascensor de la cúpula hasta los frescos; un inicio de tarde entre semana suele significar ninguna cola para la plataforma panorámica dentro de la cúpula.",
              durationMin: 60,
            },
            {
              text: "Cena en torno al Naschmarkt o la parte baja de Mariahilf, y luego una última copa de vuelta en Neubau; los bares pequeños del distrito siguen animados más tarde que las calles tranquilas del primer distrito.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Barrio de los museos y una tarde local",
          morning: [
            {
              poiSlug: "kunsthistorisches-museum",
              text: "Esté en el Kunsthistorisches Museum a la apertura y suba directo a la sala Bruegel, la mayor del mundo, antes de que lleguen los grupos, y luego haga una pausa para café bajo el grandioso café con cúpula de la primera planta.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "museumsquartier",
              text: "Cruce al patio del MuseumsQuartier para tomar algo en las tumbonas Enzi de colores, y luego elija un museo dentro: el Leopold para la mayor colección de Schiele del mundo, o el mumok para arte moderno.",
              durationMin: 150,
            },
            {
              poiSlug: "naschmarkt",
              text: "Baje al Naschmarkt para un picoteo tardío por los tenderos y los puestos; una tarde entre semana es más tranquila que el gentío del mercadillo de los sábados, aunque los sitios con servicio son más caros de lo que parecen.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              text: "Pase la hora dorada en la Neubaugasse y las callejuelas de Spittelberg, husmeando entre tostadores de café y tiendas de diseño mientras el distrito despierta para la velada.",
              durationMin: 60,
            },
            {
              text: "Última cena en un Beisl de Neubau o un bar de vino natural, el contrapunto vienés moderno a los cafés imperiales, con schnitzel o raciones de temporada y una botella de blanco austriaco.",
              durationMin: 105,
            },
          ],
        },
      ],
    },
    {
      citySlug: "vienna",
      days: 4,
      summary:
        "Cuatro días es más que suficiente para los enclaves de Viena, y ese es el punto: el cuarto día convierte un sprint entre monumentos en un viaje de verdad. Los días uno a tres cubren el ring del centro, la Hofburg, Schonbrunn, el Belvedere y los grandes museos a un ritmo relajado; el día cuatro es una jornada lenta al otro lado del Canal del Danubio en Leopoldstadt, articulada en torno al Prater, los mercados locales y el largo ritual del café que el ritmo imperial nunca permite. Con tanto tiempo, alójese en Leopoldstadt: está a una parada de metro del casco antiguo, más barato a igualdad de habitación, y sus cafés del Karmelitermarkt y el verde Prater son la razón de ser del cuarto día. La lógica del día imperial sigue en pie: mantenga Schonbrunn y el Belvedere en su propio día, mantenga el barrio de los museos junto, y no zigzaguee a través del ring. Reserve de antemano la franja de Schonbrunn, la del Belvedere y la Sisi Ticket de la Hofburg, y añada una sesión de entrenamiento matinal en la Escuela Española de Equitación si quiere los lipizanos a bajo coste. Si dudaba entre tres y cuatro días, el cuarto es el que recordará.",
      stayNeighborhoodSlug: "leopoldstadt",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Ring del centro y la Hofburg",
          morning: [
            {
              poiSlug: "stephansdom",
              text: "Tome el U1 una parada desde Leopoldstadt hasta Stephansplatz y llegue a la catedral de San Esteban para las 8:30; haga la nave gratuita y la subida a la torre sur antes de que la plaza se llene.",
              durationMin: 75,
            },
            {
              poiSlug: "hofburg",
              text: "Recorra el Graben hasta la Hofburg y entre en los Aposentos Imperiales y el Museo Sisi a la apertura con su Sisi Ticket, dejando que la audioguía incluida marque el tempo por las salas de los Habsburgo.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "cafe-central",
              text: "Almuerzo de café en el Café Central; llegue tras la cola del mediodía, pida un Melange y aproveche la regla de que un café guarda la mesa para ralentizar la jornada.",
              durationMin: 90,
            },
            {
              poiSlug: "albertina",
              text: "Visite la Albertina para la colección de Monet a Picasso y las salas de gala, terminando en la terraza gratuita sobre la Ópera para la vista elevada del ring.",
              durationMin: 105,
            },
          ],
          evening: [
            {
              poiSlug: "state-opera",
              text: "Haga cola en la puerta de la Operngasse de la Ópera Estatal una hora antes de subir el telón para una localidad de pie por menos de 20 EUR, guarde su sitio en la barandilla con una bufanda y vea un acto.",
              durationMin: 120,
            },
            {
              text: "Tome el U1 de vuelta al otro lado del canal para cenar en un Beisl de Leopoldstadt cerca del Karmelitermarkt, donde las cocinas locales sirven schnitzel y vino austriaco a precios de barrio.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Schonbrunn y el Belvedere",
          morning: [
            {
              poiSlug: "schonbrunn-palace",
              text: "Vaya a Schonbrunn en el U4 para una franja de Grand Tour de las 8:30 por delante de los autocares, y luego suba a la colina gratuita de la Gloriette para la vista clásica sobre el palacio y su parterre.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "belvedere",
              text: "Cruce hasta el Belvedere Superior para una entrada con horario de primera hora de la tarde y vaya directo a El beso de Klimt antes de que la sala se atasque, y luego tome el resto de la colección austriaca despacio.",
              durationMin: 120,
            },
            {
              text: "Recorra los jardines formales gratuitos bajando hacia el Belvedere Inferior y salga hacia el ring, la mejor perspectiva sin entrada de este barrio, con el horizonte de la ciudad enmarcado tras el parterre.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "karlskirche",
              text: "Pare en la Karlskirche para el ascensor de la cúpula hasta los frescos; una tarde entre semana no suele tener cola para la plataforma panorámica dentro de la cúpula.",
              durationMin: 60,
            },
            {
              text: "Cena en torno al Naschmarkt o Mariahilf, y luego un paseo tranquilo de vuelta al otro lado del canal hacia Leopoldstadt mientras se encienden las luces del ring.",
              durationMin: 105,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Barrio de los museos y extras imperiales",
          morning: [
            {
              poiSlug: "spanish-riding-school",
              text: "Reserve una sesión de entrenamiento matinal en la Escuela Española de Equitación, unos 15 EUR frente a 25 y más por un espectáculo completo, y observe a los sementales lipizanos ensayar bajo el picadero barroco; no hay entrenamiento los lunes.",
              durationMin: 90,
            },
            {
              poiSlug: "kunsthistorisches-museum",
              text: "Camine hasta el Kunsthistorisches Museum y suba primero a la sala Bruegel, y luego haga una pausa para café y pastel bajo el café con cúpula de la primera planta.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "museumsquartier",
              text: "Cruce al MuseumsQuartier para tomar algo en las tumbonas Enzi, y luego elija un interior: el Museo Leopold para la mayor colección de Schiele o el mumok para arte moderno.",
              durationMin: 150,
            },
            {
              poiSlug: "naschmarkt",
              text: "Relájese en el Naschmarkt con un picoteo tardío por los puestos; una tarde entre semana es la ventana tranquila entre la avalancha del almuerzo y el cierre.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Hora dorada en la Neubaugasse y a través de las callejuelas de Spittelberg, husmeando entre tostadores de café y tiendas de diseño antes de la cena.",
              durationMin: 60,
            },
            {
              text: "Cena en un bar de vino natural o un Beisl de Neubau para la vertiente vienesa moderna de la ciudad, y luego el corto salto en U-Bahn de vuelta a Leopoldstadt.",
              durationMin: 105,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Prater, Leopoldstadt y la jornada de café",
          morning: [
            {
              text: "Empiece despacio en el Karmelitermarkt en Leopoldstadt, donde los puestos y los cafés locales hacen una mañana relajada, sobre todo el mercado de los sábados; desayune en un café de mercado en vez de en uno turístico del primer distrito.",
              durationMin: 90,
            },
            {
              poiSlug: "prater-riesenrad",
              text: "Entre en el Prater y baje la larga Hauptallee bordeada de castaños, ambos gratis y abiertos a cualquier hora, y luego súbase a la noria Riesenrad para la vista sobre la ciudad y el Danubio.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Almuerzo en un restaurante con jardín del Prater como el Schweizerhaus por un Stelze y medio litro de cerveza bajo los árboles, la comida vienesa clásica de tiempo cálido.",
              durationMin: 105,
            },
            {
              poiSlug: "hundertwasserhaus",
              text: "Cruce al sur hasta la Hundertwasserhaus por la fachada ondulada y los tejados ajardinados, encuadrados desde la esquina de la Kegelgasse, y un vistazo a la galería gratuita del Hundertwasser Village enfrente.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Vuelva a un gran café para la última larga sentada del viaje: Café Landtmann o Café Sperl para un Melange y una porción de tarta, sin prisa, tal como se supone que funciona el ritual.",
              durationMin: 90,
            },
            {
              text: "Última cena de vuelta en Leopoldstadt junto al canal, y luego un paseo final a lo largo del agua con el iluminado horizonte del primer distrito enfrente.",
              durationMin: 105,
            },
          ],
        },
      ],
    },
  ],
};

export default viennaEs;
