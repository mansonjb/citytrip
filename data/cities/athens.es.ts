import type { CityData } from "../types";

const athensEs: CityData = {
  city: {
    slug: "athens",
    name: "Athens",
    country: "Grecia",
    countrySlug: "greece",
    lat: 37.9838,
    lng: 23.7275,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "ATH",
    airportToCenter:
      "La línea de metro 3 (azul) une el aeropuerto directamente con Syntagma, en el centro, en unos 40 min por alrededor de 9 EUR, con un tren cada 30 min. El autobús exprés X95 hace el mismo trayecto por 5,50 EUR a cualquier hora, las 24 horas del día, pero tarda 60-90 min según el tráfico. Un taxi con tarifa plana hasta el centro cuesta unos 40 EUR de día.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [7, 8],
    monthlyNotes: {
      1: "Fresco y tranquilo, con máximas de 13C, las tarifas de hotel más bajas del año y ninguna cola para la Acrópolis. La lluvia llega en breves chaparrones pero el sol radiante es frecuente, y los sitios del Estado ofrecen entrada gratuita el primer domingo, así que cuadre una visita para el 4 de enero.",
      2: "Todavía suave, a 14C, y uno de los meses más tranquilos en la roca, con una luz clara para las fotos entre chubascos. La ventana de entrada gratuita del primer domingo se aplica el 1 de febrero, y las terrazas de los cafés de Plaka se llenan en cualquier mediodía soleado.",
      3: "Las máximas suben hacia 16C y aparecen los almendros en flor, con la multitud empezando a crecer solo a finales de mes. El 25 de marzo es el Día de la Independencia, festivo nacional con un desfile militar ante Syntagma y muchos sitios y tiendas cerrados, así que organícese en torno a él.",
      4: "Uno de los mejores meses, a 20C, colinas verdes y luz larga, aunque es cuando suele caer la Pascua ortodoxa griega (el 12 de abril en 2026), la mayor fiesta del país. Atenas se vacía a medias cuando las familias vuelven a casa, muchas tabernas cierran el fin de semana de Pascua, y el oficio de medianoche a la luz de las velas vale la pena verlo.",
      5: "Cálido, seco y fiable, a 26C, el punto justo antes del horno del verano, con largas tardes para cenas en azotea. La multitud es intensa en la Acrópolis, así que reserve un billete horario y vaya a la apertura de las 8h, pero el tiempo y la luz diurna son casi perfectos.",
      6: "Caluroso, a 31C, y concurrido, con el festival de Atenas-Epidauro abriendo su temporada de teatro antiguo y conciertos en el Odeón de Herodes Ático, bajo la Acrópolis. Haga la roca a la apertura, refúgiese en el interior del fresco museo de la Acrópolis por la tarde, y reserve las noches del festival con antelación.",
      7: "Pico de calor por encima de 34C, sol implacable y poca sombra en los sitios arqueológicos, mientras muchos atenienses se van a las islas. El festival de Epidauro sigue en el Odeón, pero la visita implica una salida a las 8h o las dos últimas horas antes del cierre, con el mediodía pasado en el interior o junto a una piscina.",
      8: "El mes más caluroso y seco, a 34C y más, cuando la ciudad puede superar los 38C y los habitantes se vacían hacia la costa en torno al festivo del 15 de agosto. Si agosto es inevitable, adelante todo a primera hora de la mañana, reserve aire acondicionado, y trate el fresco museo de la Acrópolis y las tardes en azotea como estrategia de supervivencia.",
      9: "El calor del verano sin lo peor, empezando cerca de 29C y suavizándose a lo largo del mes, con el festival de Epidauro cerrando y los atenienses de vuelta en la ciudad. La multitud se afina tras la primera semana y es sin duda el mejor mes en conjunto para una escapada ateniense.",
      10: "Días cálidos en torno a 23C con las primeras lluvias de verdad de vuelta a finales de mes y una estupenda luz rasante sobre el mármol. La multitud cae notablemente tras mediados de mes, y la entrada gratuita del primer domingo se reanuda para la temporada baja en octubre, aunque conviene confirmarla, ya que el horario de invierno arranca en noviembre.",
      11: "Más fresco, a 18C, con periodos más húmedos pero muchos días luminosos, y los grandes sitios más tranquilos del otoño. Vuelven las tarifas de temporada baja y la entrada gratuita a los sitios del Estado cae el primer domingo, el 1 de noviembre, así que un viaje económico y sin colas es totalmente factible.",
      12: "Suave para el invierno, a 14C, pero el tramo más húmedo, con las luces de Navidad tendidas sobre Syntagma y Monastiraki y un mercado festivo en las plazas. Los sitios siguen abiertos con horarios de invierno reducidos y la entrada gratuita del primer domingo cae el 6 de diciembre, atrayendo a multitudes locales.",
    },
    climate: {
      1: { highC: 13, lowC: 7, rainyDays: 11 },
      2: { highC: 14, lowC: 7, rainyDays: 9 },
      3: { highC: 16, lowC: 8, rainyDays: 8 },
      4: { highC: 20, lowC: 11, rainyDays: 7 },
      5: { highC: 26, lowC: 15, rainyDays: 5 },
      6: { highC: 31, lowC: 20, rainyDays: 3 },
      7: { highC: 34, lowC: 23, rainyDays: 1 },
      8: { highC: 34, lowC: 23, rainyDays: 1 },
      9: { highC: 29, lowC: 19, rainyDays: 3 },
      10: { highC: 23, lowC: 15, rainyDays: 6 },
      11: { highC: 18, lowC: 11, rainyDays: 8 },
      12: { highC: 14, lowC: 8, rainyDays: 11 },
    },
    budgetLevel: "mid",
    budgetPerDay: { budget: 55, mid: 110, high: 220 },
    tagline: "La cuna de Occidente, con las mejores azoteas de Europa.",
    heroIntro:
      "Atenas le tiende la Acrópolis, sitios antiguos de primer nivel y un centro de ciudad espabilado y palpitante que se cruza de punta a punta en una tarde. Tres días son el punto justo honesto: uno para la roca y su museo, uno para el ágora antigua y las callejuelas del casco viejo, y uno para el Museo Arqueológico Nacional y una colina al atardecer. Venga en primavera o a principios de otoño, reserve el billete de la Acrópolis antes de volar, y cene en una azotea con el Partenón iluminado sobre usted.",
    accent: { from: "#1E7FA8", to: "#E0C15A", ink: "#0E3E52" },
    neighborhoodSlugs: ["plaka", "monastiraki", "koukaki", "kolonaki", "psyrri"],
    nearbyCitySlugs: [],
  },

  neighborhoods: [
    {
      slug: "plaka",
      citySlug: "athens",
      name: "Plaka",
      lat: 37.9714,
      lng: 23.7286,
      bestFor: ["first-time", "romantic", "family"],
      vibe: "El casco viejo abrazado a la ladera norte de la Acrópolis, un laberinto de casas neoclásicas, buganvillas y callejuelas peatonales que trepan hacia la roca. Todo lo que un primerizo quiere está a menos de diez minutos a pie, y las calles son tranquilas y bonitas una vez que los excursionistas se van de noche. Es la postal, y se paga un pequeño suplemento por dormir en ella.",
      pros: [
        "Camine hasta la Acrópolis, el ágora antigua y el ágora romana sin transporte",
        "Callejuelas sin coches, seguras, tranquilas y deliciosas para recorrer de noche",
        "Densa en tabernas, cafés y las escaleras de Anafiotika, dignas de una isla",
      ],
      cons: [
        "La restauración más turística de la ciudad, con algunas tabernas viviendo del emplazamiento",
        "Los precios de los hoteles y de la comida superan los de los barrios de alrededor",
        "Calles empinadas y escalonadas, penosas con una maleta o un cochecito",
      ],
    },
    {
      slug: "monastiraki",
      citySlug: "athens",
      name: "Monastiraki",
      lat: 37.9764,
      lng: 23.7256,
      bestFor: ["first-time", "nightlife", "budget"],
      vibe: "La bulliciosa bisagra del centro, construida en torno a una plaza con metro donde el mercadillo, el ágora romana y las callejuelas del casco viejo se encuentran. Los bares en azotea de aquí miran de frente a la Acrópolis iluminada, y las calles siguen ruidosas y animadas pasada la medianoche. Céntrico, bien conectado y nunca aburrido, aunque algo caótico.",
      pros: [
        "Nudo de metro en las líneas 1 y 3, directo al aeropuerto y al puerto del Pireo",
        "Los bares en azotea con mejor relación calidad-precio y vista frontal de la Acrópolis",
        "Camine hasta la Acrópolis, el ágora, Plaka y Psyrri en unos minutos",
      ],
      cons: [
        "Ruidoso de día y de noche alrededor de la plaza y las calles del mercado",
        "Turístico y propicio a los carteristas en los tramos más concurridos del mercadillo",
        "Menos habitaciones tranquilas y descansadas que en los barrios más apacibles",
      ],
    },
    {
      slug: "koukaki",
      citySlug: "athens",
      name: "Koukaki",
      lat: 37.9648,
      lng: 23.7256,
      bestFor: ["local", "budget", "family"],
      vibe: "Un barrio residencial justo al sur de la Acrópolis, más tranquilo y más local que el casco viejo pero aún a un corto paseo de la entrada principal y del museo de la Acrópolis. Calles arboladas albergan tabernas de barrio, café de tercera ola y un verdadero aire de vida en torno a Georgiou Olympiou. Tranquilo, a precio justo y cada vez más la base astuta de los visitantes que repiten.",
      pros: [
        "Camine hasta la ladera sur de la Acrópolis, al museo y a la colina de Filopappou",
        "Las estaciones de metro Akropoli y Syngrou-Fix en la línea 2 para el resto de la ciudad",
        "Una verdadera mesa de barrio a precio justo, bien apartada del circuito turístico",
      ],
      cons: [
        "Escaso de sitios propios: hay que salir de él para ver cosas",
        "Más tranquilo de noche, con una escena de bares más reducida que Monastiraki o Psyrri",
        "Algunas manzanas cerca de la avenida Syngrou tienen mucho tráfico",
      ],
    },
    {
      slug: "kolonaki",
      citySlug: "athens",
      name: "Kolonaki",
      lat: 37.9795,
      lng: 23.7443,
      bestFor: ["romantic", "local", "family"],
      vibe: "El barrio elegante y pudiente en las laderas bajas del Licabeto, lleno de tiendas de diseñadores, galerías de arte y cafés cuidados donde los atenienses bien vestidos observan a los transeúntes. Le sitúa al pie del funicular del monte Licabeto y a un paseo llano de Syntagma y los museos. Elegante y seguro, aunque más caro y menos pintoresco que el casco viejo.",
      pros: [
        "El pie del funicular del Licabeto para la mejor vista de la puesta de sol de la ciudad",
        "Cafés elegantes, boutiques y los excelentes museos Benaki y de Arte Cicládico cerca",
        "Calles tranquilas y seguras y un verdadero aire local y residencial",
      ],
      cons: [
        "Un paseo de 15 a 20 minutos cuesta arriba desde la Acrópolis y Plaka",
        "El barrio más caro para la mesa y las compras",
        "Sin estación de metro dentro: hay que caminar hasta Syntagma o Evangelismos",
      ],
    },
    {
      slug: "psyrri",
      citySlug: "athens",
      name: "Psyrri",
      lat: 37.9784,
      lng: 23.7228,
      bestFor: ["nightlife", "local", "budget"],
      vibe: "Un antiguo barrio de talleres algo áspero justo al norte de Monastiraki, convertido en el corazón de la vida nocturna y del arte urbano del centro, repleto de bares de mezze, rebetiko en directo y tabernas tardías. De día es desaliñado y a medio cerrar, de noche se llena de atenienses que comen y beben bajo guirnaldas de luces. Ruidoso, barato y muy divertido.",
      pros: [
        "La salida nocturna más viva y más local del centro, del mezze al rebetiko",
        "Comida y bebida más baratas que en Plaka, a unos minutos a pie",
        "A dos pasos del metro Monastiraki y de los grandes sitios",
      ],
      cons: [
        "Ruidoso hasta la madrugada, una mala elección para los que tienen el sueño ligero",
        "Áspero y con aire algo vacío en algunas manzanas de día",
        "Pocos sitios clásicos: se está aquí para comer, beber y pasear",
      ],
    },
  ],

  pois: [
    {
      slug: "acropolis",
      citySlug: "athens",
      name: "La Acrópolis y el Partenón",
      lat: 37.9715,
      lng: 23.7267,
      kind: "sight",
      needsBooking: true,
      tip: "Compre el billete horario de la Acrópolis en línea antes de viajar y coja el primerísimo turno de las 8h o las dos últimas horas antes del cierre, porque el calor de mediodía y las multitudes en la roca sin sombra son brutales en verano. El billete combinado Acrópolis y sitios es mucho más ventajoso y cubre también el ágora antigua, el ágora romana, el templo de Zeus Olímpico y más, durante varios días. Entre por la puerta más tranquila de la ladera sur, cerca del museo de la Acrópolis, en vez de por la entrada principal abarrotada, y lleve agua y un sombrero.",
    },
    {
      slug: "acropolis-museum",
      citySlug: "athens",
      name: "El museo de la Acrópolis",
      lat: 37.9686,
      lng: 23.7286,
      kind: "museum",
      needsBooking: true,
      tip: "Barato, con aire acondicionado y el refugio perfecto de mediodía contra el calor: combínelo con la roca el mismo día y métase aquí cuando el sol esté en lo peor. Reserve en línea para saltarse la cola de billetes, luego empiece por la galería del Partenón de la última planta, cuyas paredes de cristal enmarcan el verdadero templo en la colina justo enfrente. El suelo de cristal sobre el barrio antiguo excavado, en la entrada, merece una mirada pausada al llegar.",
    },
    {
      slug: "ancient-agora",
      citySlug: "athens",
      name: "El ágora antigua y el templo de Hefesto",
      lat: 37.9755,
      lng: 23.7223,
      kind: "sight",
      needsBooking: false,
      tip: "Cubierta por el billete combinado de la Acrópolis: úselo en vez de pagar aparte, y venga por la mañana antes de que las multitudes de la Acrópolis bajen hasta aquí. El templo de Hefesto, arriba, es el templo griego antiguo mejor conservado del mundo, mucho más intacto que el Partenón, y casi nunca abarrotado. No se salte la stoa de Átalo reconstruida, cuya columnata a la sombra alberga un pequeño museo fresco de objetos cotidianos atenienses.",
    },
    {
      slug: "plaka",
      citySlug: "athens",
      name: "El casco viejo de Plaka",
      lat: 37.9714,
      lng: 23.7286,
      kind: "experience",
      needsBooking: false,
      tip: "Pasee por las callejuelas sin coches temprano por la mañana para las buganvillas y las fotos de calles vacías, luego vuelva después de las 20h, cuando las tabernas se animan. Apártese de la arteria de souvenirs de Adrianou hacia las calles altas tranquilas que trepan hacia Anafiotika, donde los precios bajan y el ambiente mejora. Evite las tabernas con menús en fotos y reclamos en la puerta: viven del emplazamiento.",
    },
    {
      slug: "monastiraki-square",
      citySlug: "athens",
      name: "El mercadillo y la plaza de Monastiraki",
      lat: 37.9764,
      lng: 23.7256,
      kind: "sight",
      needsBooking: false,
      tip: "El mercadillo del domingo por la mañana en la plaza Avissynias es el auténtico, con verdadera almoneda y antigüedades, mientras que los puestos diarios de Ifestou se inclinan hacia los souvenirs para turistas. Vigile su bolso y su cartera en la aglomeración, es el punto más propicio a los carteristas de la ciudad. Suba a cualquier bar en azotea que dé a la plaza al anochecer para la vista frontal de la Acrópolis por encima de los tejados de terracota.",
    },
    {
      slug: "temple-olympian-zeus",
      citySlug: "athens",
      name: "El templo de Zeus Olímpico",
      lat: 37.9693,
      lng: 23.7332,
      kind: "sight",
      needsBooking: false,
      tip: "Incluido en el billete combinado de la Acrópolis: ninguna razón para comprar una entrada aparte, y 15 a 20 minutos bastan de sobra para las columnas gigantes que subsisten. Combínelo con el arco de Adriano justo al lado, gratuito de ver desde la calle, y con el Jardín Nacional a un corto paseo al norte para la sombra. La luz de última hora de la tarde dora el mármol y la afluencia es baja aquí a cualquier hora.",
    },
    {
      slug: "lycabettus-hill",
      citySlug: "athens",
      name: "La colina del Licabeto",
      lat: 37.9829,
      lng: 23.7439,
      kind: "viewpoint",
      needsBooking: false,
      tip: "El punto culminante de la ciudad y el mejor spot para la puesta de sol, con la Acrópolis, la extensión urbana y el mar desplegados abajo desde la terraza de la capilla. Coja el funicular desde Kolonaki para ahorrarse la subida empinada, luego baje a pie a través del pinar después si sus rodillas lo permiten. Llegue 30 minutos antes de la puesta de sol para reservar un sitio en la barandilla del café, y lleve una capa, hace viento allá arriba.",
    },
    {
      slug: "national-archaeological-museum",
      citySlug: "athens",
      name: "El Museo Arqueológico Nacional",
      lat: 37.9891,
      lng: 23.7326,
      kind: "museum",
      needsBooking: false,
      tip: "La colección de arte griego antiguo más bella del mundo, al norte del centro, y vale la pena el desvío aunque se crea saturado de museos. Vaya recto hacia la máscara de oro de Agamenón, el imponente bronce de Zeus o Poseidón y el mecanismo de Anticitera, luego pasee a su antojo. Está a 15 minutos a pie o a un salto de metro del centro, y las mañanas son las más tranquilas, así que empiece aquí antes de los grupos de la tarde.",
    },
    {
      slug: "panathenaic-stadium",
      citySlug: "athens",
      name: "El estadio Panatenaico",
      lat: 37.9682,
      lng: 23.7411,
      kind: "sight",
      needsBooking: false,
      tip: "El estadio todo de mármol que acogió los primeros Juegos Olímpicos modernos en 1896, y el billete de entrada incluye una audioguía y la posibilidad de correr una vuelta o subir al podio de los vencedores. Puede sacarle todo el efecto gratis desde la barandilla de la calle si prefiere no pagar, ya que toda la herradura es visible desde fuera. Venga pronto o tarde para tener la pista para usted en las fotos, y combínelo con el vecino Jardín Nacional.",
    },
    {
      slug: "anafiotika",
      citySlug: "athens",
      name: "Anafiotika",
      lat: 37.9724,
      lng: 23.7292,
      kind: "experience",
      needsBooking: false,
      tip: "Un minúsculo rincón de casas encaladas, al estilo de las islas, construidas en la ladera de la Acrópolis por obreros de Anafi: parece una aldea cicládica dejada caer en la ciudad. Suba las callejuelas escalonadas por encima de la parte alta de Plaka temprano por la mañana para las puertas azules y los gatos sin ninguna multitud. No hay tiendas ni cafés allá arriba, es puramente un lugar para pasear, así que vaya en silencio y respete que hay gente que vive detrás de esas puertas.",
    },
    {
      slug: "roman-agora",
      citySlug: "athens",
      name: "El ágora romana y la torre de los Vientos",
      lat: 37.9743,
      lng: 23.7258,
      kind: "sight",
      needsBooking: false,
      tip: "Cubierta por el billete combinado de la Acrópolis, y lo bastante pequeña para verla en 20 minutos: cuélela en un paseo por Plaka en vez de hacer de ella un desplazamiento aparte. La torre de los Vientos octogonal es la estrella, una estación meteorológica y reloj de agua antiguo de mármol con dioses de los vientos tallados en cada cara, y una de las estructuras mejor conservadas de su época. Está justo en el borde de Plaka, así que encájela entre el ágora antigua y la comida.",
    },
    {
      slug: "acropolis-rooftop-bar",
      citySlug: "athens",
      name: "Un bar en azotea con vista a la Acrópolis",
      lat: 37.9762,
      lng: 23.7255,
      kind: "food",
      needsBooking: true,
      tip: "El aperitivo de atardecer emblemático de Atenas es una copa en una azotea de Monastiraki con la Acrópolis iluminada justo enfrente, y las terrazas más conocidas cuelgan el completo: reserve una mesa para la puesta de sol uno o dos días antes. Paga un suplemento por la vista en las bebidas, así que tómelo como una ronda para la foto más que una cena entera. Si se salta la reserva, el mirador público gratuito en la roca del Areópago bajo la Acrópolis ofrece una puesta de sol similar gratis, sin el cóctel.",
    },
    {
      slug: "varvakios-market",
      citySlug: "athens",
      name: "El mercado central de Varvakios",
      lat: 37.9803,
      lng: 23.7266,
      kind: "food",
      needsBooking: false,
      tip: "El tumultuoso mercado central de la carne y el pescado de la ciudad, en la calle Athinas, abierto de lunes a sábado aproximadamente de 7h a 15h y cerrado los domingos, mejor a media mañana cuando está en plena marcha. Ábrase paso entre las canales colgadas hasta las viejas tabernas escondidas en las naves, donde los trabajadores del mercado comen sopa de callos y pescado a la parrilla a precios de derribo. Aunque no coma aquí, las tiendas de especias, frutos secos y ultramarinos de alrededor en Evripidou son una parada de souvenir gastronómico estupenda y barata.",
    },
    {
      slug: "filopappou-hill",
      citySlug: "athens",
      name: "La colina de Filopappou",
      lat: 37.9668,
      lng: 23.7189,
      kind: "viewpoint",
      needsBooking: false,
      tip: "La colina cubierta de pinos frente a la Acrópolis desde el suroeste, gratuita y abierta a cualquier hora, con la mejor vista frontal de la roca y el Partenón. Suba el camino de mármol desde el paseo Dionysiou Areopagitou al atardecer, cuando la Acrópolis resplandece y las multitudes están en la roca, no aquí. Lleve calzado de verdad, los caminos antiguos están pulidos y resbaladizos, y lleve agua porque no hay café en la cima.",
    },
  ],

  itineraries: [
    {
      citySlug: "athens",
      days: 2,
      summary:
        "Dos días bastan para cubrir la Atenas esencial, aunque es un par de jornadas llenas y concentradas más que relajadas. En 48 horas puede hacer la Acrópolis y su museo el primer día, luego el ágora antigua, Plaka, Monastiraki y una puesta de sol en azotea el segundo, comiendo bien las dos noches en el casco viejo. Lo que hay que cortar: el estupendo Museo Arqueológico Nacional, una subida al Licabeto o a Filopappou para la puesta de sol, y toda excursión fuera de la ciudad, de modo que es la versión de grandes clásicos. Conviene a un fin de semana, a una escala de camino a las islas, o a un primer acercamiento a la ciudad. El único punto no negociable: reserve con antelación el billete horario de la Acrópolis y coja el turno de apertura de las 8h, porque la roca sin sombra es punitiva ya a última hora de la mañana en los meses cálidos. Instálese en Plaka para que las dos mañanas arranquen a pie en los sitios y las tardes le pongan a dos pasos de la cena. Si gana un tercer día, añada el Museo Arqueológico Nacional y una colina al atardecer, la mejor mejora posible.",
      stayNeighborhoodSlug: "plaka",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "La Acrópolis y su museo",
          morning: [
            {
              poiSlug: "acropolis",
              text: "Esté en la Acrópolis para su turno reservado de las 8h, entrando por la puerta más tranquila de la ladera sur, y suba al Partenón antes de la llegada del calor y de los grupos. Rodee el Erecteión y los Propileos, luego párese en la roca del Areópago al bajar para un panorama gratuito sobre la ciudad.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Coma en Koukaki o en el paseo peatonal Dionysiou Areopagitou bajo la ladera sur, a un corto paseo llano del museo. Tómese su tiempo al abrigo del sol de mediodía antes de la tarde en el interior.",
              durationMin: 75,
            },
            {
              poiSlug: "acropolis-museum",
              text: "Métase en el fresco museo de la Acrópolis con aire acondicionado para la parte más calurosa del día, empezando por la galería del Partenón de la última planta que enmarca el verdadero templo enfrente. El suelo de cristal sobre la calle antigua excavada, en la entrada, merece una mirada pausada al llegar.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "plaka",
              text: "Pasee por Plaka a medida que la luz se suaviza, subiendo las callejuelas altas tranquilas hacia Anafiotika antes de que las tabernas se llenen. Reserve una mesa apartada de la arteria de souvenirs para las 20h30 aproximadamente e instálese para una larga cena griega.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "El ágora antigua, el casco viejo y una puesta de sol en azotea",
          morning: [
            {
              poiSlug: "ancient-agora",
              text: "Empiece en el ágora antigua con su billete combinado, antes de que las multitudes de la Acrópolis bajen, y suba al casi perfecto templo de Hefesto, arriba. Métase en la stoa de Átalo a la sombra y su pequeño museo de objetos cotidianos atenienses.",
              durationMin: 90,
            },
            {
              poiSlug: "roman-agora",
              text: "Camine unos minutos hasta el ágora romana y su torre de los Vientos octogonal, la estación meteorológica antigua de mármol tallada con dioses de los vientos. Es pequeña, así que 20 minutos dan cuenta de ella antes de pasar a las callejuelas.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "monastiraki-square",
              text: "Diríjase a la plaza de Monastiraki y al mercadillo, recorriendo los puestos de antigüedades y almoneda, y mantenga una mano en su bolso en la aglomeración. Coja un souvláki barato en uno de los grills célebres cerca de la plaza para una comida de pie.",
              durationMin: 90,
            },
            {
              poiSlug: "anafiotika",
              text: "Vuelva a subir por Plaka hasta las callejuelas encaladas al estilo de las islas de Anafiotika, subiendo las escaleras para las puertas azules y la calma lejos del mercado. Vaya despacio y con respeto, hay gente que vive detrás de esas puertas.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "acropolis-rooftop-bar",
              text: "Reserve una mesa para la puesta de sol en un bar en azotea de Monastiraki para una copa con la Acrópolis iluminada justo enfrente. Tómela como una ronda para la vista, luego baje a cenar a Psyrri o a Plaka.",
              durationMin: 90,
            },
            {
              text: "Termine con una cena de mezze en Psyrri, a unos minutos a pie de Monastiraki, donde la cocina es más barata y más animada que en el casco viejo. El rebetiko en directo se encuentra fácilmente aquí en cualquier noche animada.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "athens",
      days: 3,
      summary:
        "Sí, tres días son la duración adecuada para Atenas, y es lo que recomendamos para una primera visita. Da a la Acrópolis y su museo una mañana y una tarde enteras y sin prisa, al ágora antigua y a las callejuelas del casco viejo su propia jornada con una puesta de sol en azotea, y un tercer día para el Museo Arqueológico Nacional de talla mundial, más una subida al Licabeto y el lado más elegante de Kolonaki. Come en tres barrios distintos, encaja a la vez una taberna en Plaka y una noche de mezze en Psyrri, y aún se mueve a un ritmo que permite sentarse en una plaza en vez de cruzarla al paso ligero. Lo que sigue quedando fuera es una excursión fuera de la ciudad, que es justo lo que añade un cuarto día. Conviene a primerizos, parejas y a quien corte un trayecto hacia las islas. Alójese en Koukaki: se camina hasta la ladera sur de la Acrópolis y al museo, se está en el metro para el resto de la ciudad, y sus tabernas de barrio baten las trampas para turistas del casco viejo. Reserve con antelación el billete horario de la Acrópolis y coja el turno de las 8h antes de partir.",
      stayNeighborhoodSlug: "koukaki",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "La Acrópolis, su museo y Filopappou",
          morning: [
            {
              poiSlug: "acropolis",
              text: "Esté en la Acrópolis para su turno reservado de las 8h, tomando la puerta más tranquila de la ladera sur cerca de su base en Koukaki, y alcance el Partenón antes de que suba el calor. Rodee el Erecteión y los Propileos, luego baje por la roca del Areópago para un panorama gratuito sobre la ciudad.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Coma en el paseo Dionysiou Areopagitou o de vuelta en Koukaki, al abrigo del sol de mediodía, antes de la tarde en el interior. Es la pausa en torno a la que está construida la jornada.",
              durationMin: 75,
            },
            {
              poiSlug: "acropolis-museum",
              text: "Pase la tarde calurosa en el fresco museo de la Acrópolis, empezando por la galería del Partenón de la última planta cuyas paredes de cristal enmarcan el templo que acaba de recorrer. Deténgase en las cariátides y el suelo de cristal sobre la excavación antigua.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "filopappou-hill",
              text: "Suba la colina de Filopappou cubierta de pinos para la puesta de sol, la mejor vista frontal de la Acrópolis iluminada, gratuita y abierta a cualquier hora. Lleve calzado de verdad para los caminos de mármol pulidos, luego baje a cenar a Koukaki.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "El ágora antigua, el casco viejo y una puesta de sol en azotea",
          morning: [
            {
              poiSlug: "ancient-agora",
              text: "Empiece en el ágora antigua con su billete combinado, por delante de las multitudes que bajan de la roca, y suba al templo de Hefesto intacto. Refrésquese en la stoa de Átalo reconstruida y su pequeño museo.",
              durationMin: 90,
            },
            {
              poiSlug: "roman-agora",
              text: "Corte hasta el ágora romana y la torre de los Vientos octogonal, la estación meteorológica antigua tallada, con el mismo billete. Veinte minutos dan cuenta de ella antes de deslizarse por las callejuelas de Plaka.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "plaka",
              text: "Pasee por Plaka y suba hasta las escaleras encaladas de Anafiotika, parándose para un almuerzo pausado en una callejuela alta tranquila apartada de la arteria de souvenirs. Es la tarde para dejarse llevar en vez de ir marcando cosas.",
              durationMin: 120,
            },
            {
              poiSlug: "monastiraki-square",
              text: "Baje a la plaza de Monastiraki y su mercadillo, recorriendo los puestos y vigilando su bolso entre la multitud. Calcúlelo para estar cerca de las azoteas cuando la luz empiece a bajar.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "acropolis-rooftop-bar",
              text: "Coja su mesa reservada para la puesta de sol en una azotea de Monastiraki para una copa con la Acrópolis iluminada enfrente. Una ronda para la vista, luego bajada a la cena.",
              durationMin: 90,
            },
            {
              text: "Cena en Psyrri, a un corto paseo, para los mezze, el rebetiko en directo y la noche más viva y de mejor relación calidad-precio del centro. Reserve una mesa el fin de semana, las buenas direcciones se llenan deprisa.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "El Museo Arqueológico Nacional, el Licabeto y Kolonaki",
          morning: [
            {
              poiSlug: "national-archaeological-museum",
              text: "Vaya temprano al Museo Arqueológico Nacional, la colección de arte griego antiguo más bella que existe, a 15 minutos a pie o a un salto de metro al norte del centro. Vaya recto hacia la máscara de oro de Agamenón, el gran bronce de Zeus o Poseidón y el mecanismo de Anticitera, luego pasee a su antojo.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "panathenaic-stadium",
              text: "Cruce la ciudad hasta el estadio Panatenaico todo de mármol, cuna de los primeros Juegos Olímpicos modernos, donde el billete le deja correr una vuelta y subir al podio. Combínelo con un paseo por el Jardín Nacional a la sombra justo al lado.",
              durationMin: 90,
            },
            {
              text: "Suba hacia el elegante Kolonaki para un café y mirar escaparates entre las galerías y las boutiques, o los museos de Arte Cicládico o Benaki si le queda apetito. Instálese cerca del funicular del Licabeto para la subida que viene.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "lycabettus-hill",
              text: "Coja el funicular hasta la colina del Licabeto para la puesta de sol, el mirador más alto de la ciudad, con la Acrópolis, la extensión urbana y el mar abajo. Llegue 30 minutos antes de la puesta para un sitio en la barandilla y lleve una capa contra el viento.",
              durationMin: 90,
            },
            {
              text: "Baje para una cena de despedida en Kolonaki o de vuelta en Koukaki, gastando un poco más en su última comida ateniense. Pescado a la parrilla, una tanda de mezze y una jarra de vino local, es el adiós clásico.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "athens",
      days: 4,
      summary:
        "Cuatro días son el punto justo para Atenas, convirtiendo una carrera de sitios en unas verdaderas vacaciones con una jornada para salir de la ciudad. Los días uno a tres cubren lo esencial sin prisa: la Acrópolis y su museo, el ágora antigua con las callejuelas del casco viejo y una puesta de sol en azotea, y el Museo Arqueológico Nacional combinado con una subida al Licabeto. El cuarto día es la válvula de escape, una salida hacia el mar, o bien el templo de Poseidón en el cabo Sounion para una puesta de sol en lo alto de un acantilado sobre el Egeo, o bien un ferry rápido desde el Pireo hasta la isla de Egina o de Hidra para un baño, una comida en el puerto y un ritmo más lento. Esta duración conviene a los viajeros que odian la marcha forzada, a las parejas y a quien quiera la jornada clásica de islas y mar griega sin dejar Atenas atrás. Para cuatro días recomendamos alojarse en Monastiraki: es el nudo de transporte para el aeropuerto, el puerto y la excursión, y sus azoteas y su vida de calle hacen del regreso cada tarde parte del placer. Reserve el billete horario de la Acrópolis con mucha antelación y coja un turno temprano.",
      stayNeighborhoodSlug: "monastiraki",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "La Acrópolis y su museo",
          morning: [
            {
              poiSlug: "acropolis",
              text: "Esté en la Acrópolis para su turno reservado de las 8h, entrando por la puerta más tranquila de la ladera sur, y alcance el Partenón antes del calor y las multitudes. Rodee el Erecteión y los Propileos, luego disfrute de la vista gratuita sobre la ciudad desde la roca del Areópago al bajar.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Coma en el paseo Dionysiou Areopagitou bajo la ladera sur, a un paseo llano del museo, y salga del sol de mediodía. Manténgase ligero antes de la tarde en el interior.",
              durationMin: 75,
            },
            {
              poiSlug: "acropolis-museum",
              text: "Pase la tarde calurosa en el fresco museo de la Acrópolis, empezando por la galería del Partenón de la última planta que enmarca el verdadero templo al otro lado del valle. El suelo de cristal sobre la excavación antigua, en la entrada, recompensa una mirada pausada.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "acropolis-rooftop-bar",
              text: "Coja una mesa reservada para la puesta de sol en una azotea de Monastiraki cerca de su base para una copa con la Acrópolis iluminada enfrente. Una ronda para la vista, luego cena cerca.",
              durationMin: 90,
            },
            {
              text: "Cena en Psyrri, a unos minutos de su base de Monastiraki, para los mezze y la noche más viva del centro. Póngase cómodo en el barrio que llama su casa.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "El ágora antigua, el ágora romana y el casco viejo",
          morning: [
            {
              poiSlug: "ancient-agora",
              text: "Empiece en el ágora antigua con su billete combinado, antes de que las multitudes de la Acrópolis bajen, y suba al templo de Hefesto intacto. Refrésquese en la stoa de Átalo y su museo de objetos cotidianos.",
              durationMin: 90,
            },
            {
              poiSlug: "roman-agora",
              text: "Camine hasta el ágora romana y su torre de los Vientos octogonal, la estación meteorológica antigua de mármol tallada con dioses de los vientos, con el mismo billete. Veinte minutos aquí antes de las callejuelas.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "plaka",
              text: "Pasee por Plaka a ritmo lento, subiendo hasta las escaleras al estilo de las islas de Anafiotika por encima de la arteria de souvenirs. Párese para un largo almuerzo en una callejuela alta tranquila.",
              durationMin: 120,
            },
            {
              poiSlug: "temple-olympian-zeus",
              text: "Camine hasta el templo de Zeus Olímpico y el arco de Adriano con su billete combinado, donde las columnas gigantes que subsisten resplandecen con la luz de la tarde. La afluencia es baja aquí a cualquier hora.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "monastiraki-square",
              text: "Déjese llevar de vuelta por la plaza de Monastiraki al anochecer, recorriendo los puestos e impregnándose del ambiente. Coja un souvláki barato en un grill célebre cerca de la plaza si quiere un bocado informal.",
              durationMin: 60,
            },
            {
              text: "Cena de vuelta en Psyrri o en Plaka, reservando con antelación cualquier dirección con nombre. El rebetiko en directo se encuentra fácilmente en Psyrri en una noche animada.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "El Museo Arqueológico Nacional y el Licabeto",
          morning: [
            {
              poiSlug: "national-archaeological-museum",
              text: "Vaya temprano al Museo Arqueológico Nacional, la mayor colección de arte griego antiguo del mundo, a un corto paseo o un salto de metro al norte. Vaya primero hacia la máscara de Agamenón, el gran bronce de Zeus o Poseidón y el mecanismo de Anticitera, luego pasee.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "panathenaic-stadium",
              text: "Cruce la ciudad hasta el estadio Panatenaico todo de mármol, cuna de los primeros Juegos Olímpicos modernos, y corra una vuelta o suba al podio con su billete. Combínelo con el Jardín Nacional a la sombra justo al lado.",
              durationMin: 90,
            },
            {
              text: "Suba hacia Kolonaki para un café y boutiques, o los museos de Arte Cicládico o Benaki si le queda apetito. Colóquese cerca del funicular del Licabeto para la subida de la puesta de sol.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "lycabettus-hill",
              text: "Coja el funicular hasta la colina del Licabeto para la puesta de sol, el mirador más alto de la ciudad, con la Acrópolis y el mar desplegados abajo. Llegue 30 minutos antes para un sitio en la barandilla y lleve una capa contra el viento.",
              durationMin: 90,
            },
            {
              text: "Cena en Kolonaki o de vuelta cerca de Monastiraki, donde aterricen sus piernas. Guarde algo de energía, mañana deja la ciudad por el mar.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Jornada de mar: cabo Sounion o salto de isla",
          morning: [
            {
              text: "Salga de la ciudad por el día hacia el mar. O bien coja el autobús costero o una excursión hasta el templo de Poseidón en el cabo Sounion, una ruina en lo alto de un acantilado sobre el Egeo a unos 70 km al sur, cuadrada con la célebre puesta de sol. O bien coja un ferry rápido desde el Pireo hasta Egina, un salto fácil de 40 minutos, para huertos de pistachos, un frente de puerto y un baño.",
              durationMin: 240,
            },
          ],
          afternoon: [
            {
              text: "Si ha elegido una isla, pase la tarde en Egina o empuje hasta la más bonita Hidra, donde los coches están prohibidos y donde los burros aún trabajan las callejuelas de piedra, con un largo almuerzo en taberna del puerto y un baño al pie de las rocas. Si ha elegido Sounion, corte la carretera costera en una de las playas de la Riviera ateniense para un baño antes del templo.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              text: "Para Sounion, esté en el templo de Poseidón para la puesta de sol, cuando las columnas de mármol atrapan la última luz sobre el mar, luego vuelva a la ciudad. Para las islas, coja un ferry a primera hora de la tarde de vuelta al Pireo y el metro hasta el centro.",
              durationMin: 120,
            },
            {
              text: "Cena de despedida de vuelta cerca de Monastiraki, a un corto paseo de su cama sin trayecto que planear, que es todo el interés de alojarse aquí. Vaya a lo clásico con pescado a la parrilla y mezze para la última noche ateniense.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
  ],
};

export default athensEs;
