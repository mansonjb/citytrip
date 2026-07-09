import type { CityExtras } from "./types";

const hero = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`;

// Hero photos are free-license (Pexels), URL and visually validated.
const extrasEs: Record<string, CityExtras> = {
  lisbon: {
    citySlug: "lisbon",
    image: hero(16338751),
    imageAlt:
      "Tranvía amarillo subiendo una calle de Lisboa junto a una casa color mostaza",
    history:
      "Lisboa es una de las ciudades más antiguas de Europa occidental, un puerto fenicio y luego romano mucho antes de convertirse en la capital de Portugal en 1256. El gran terremoto del 1 de noviembre de 1755, seguido de un tsunami y de incendios, arrasó la ciudad baja y mató a decenas de miles de personas, por lo que la Baixa de trazado cuadriculado que recorres hoy contrasta tanto con el enredado barrio de la Alfama que sí sobrevivió. Desde aquí zarpó Vasco de Gama hacia la India en 1498, y el impuesto sobre aquel comercio de especias financió la piedra manuelina que ves en Belem. La Revolución de los Claveles de 1974, un golpe militar casi sin derramamiento de sangre, puso fin a cuatro décadas de dictadura y se sigue conmemorando cada 25 de abril.",
    knownFor: [
      "Tranvía amarillo 28",
      "Pastel de nata",
      "El fado",
      "Miradores (miradouros)",
      "Azulejos",
      "Torre de Belem",
    ],
  },
  prague: {
    citySlug: "prague",
    image: hero(11261851),
    imageAlt:
      "El Castillo de Praga y la catedral de San Vito sobre el Puente de Carlos y el río Moldava",
    history:
      "Praga creció en torno a un vado sobre el Moldava y a un castillo en lo alto de una colina fundado hacia el año 880, y en el siglo XIV era la sede del emperador del Sacro Imperio Carlos IV, que mandó construir el Puente de Carlos, la Ciudad Nueva y la universidad más antigua de Europa central. La Defenestración de Praga de 1618, cuando unos nobles protestantes arrojaron a funcionarios imperiales por una ventana del castillo, ayudó a desencadenar la Guerra de los Treinta Años. Algo poco habitual en la región, el casco histórico atravesó la Segunda Guerra Mundial casi intacto, por lo que su perfil gótico y barroco es tan completo. La Revolución de Terciopelo de 1989 puso fin al régimen comunista sin violencia, y Praga es desde entonces la capital checa.",
    knownFor: [
      "El Puente de Carlos",
      "El Castillo de Praga",
      "El Reloj Astronómico",
      "La cerveza barata",
      "El perfil barroco",
      "Los mercados navideños",
    ],
  },
  seville: {
    citySlug: "seville",
    image: hero(5470586),
    imageAlt:
      "La Plaza de España de Sevilla a la hora dorada, con su canal y sus torres",
    history:
      "Sevilla fue la Hispalis romana y luego, durante más de cinco siglos, la ciudad musulmana de Isbiliya, por lo que el campanario de la catedral, la Giralda, empezó su vida como alminar y el Alcázar sigue siendo un palacio mudéjar en uso. Después de 1492 la ciudad ostentó el monopolio de la corona sobre el comercio con las Américas, y el oro y la plata que remontaban el Guadalquivir la convirtieron en uno de los lugares más ricos de Europa. Aquella riqueza levantó la inmensa catedral gótica, donde reposa Cristóbal Colón. La ensoñadora Plaza de España es mucho más reciente, construida para la Exposición Iberoamericana de 1929.",
    knownFor: [
      "El Real Alcázar",
      "El flamenco",
      "La Plaza de España",
      "Los naranjos",
      "La Semana Santa",
      "La cultura de las tapas",
    ],
  },
  porto: {
    citySlug: "porto",
    image: hero(25695948),
    imageAlt:
      "El puente de hierro Dom Luis I sobre el Duero, con los tejados de la Ribeira de Oporto detrás",
    history:
      "Oporto dio a Portugal tanto su nombre, procedente del puerto romano de Portus Cale, como su fama de trabajo duro e independencia. La ciudad hizo su fortuna gracias al río Duero: los barriles de vino bajaban desde el alto valle para envejecer en las bodegas de Vila Nova de Gaia, y los comerciantes ingleses convirtieron ese comercio en vino de Oporto a partir del siglo XVII. El puente de dos niveles Dom Luis I, inaugurado en 1886, fue construido por un discípulo de Gustave Eiffel. A los habitantes se les sigue llamando tripeiros (comedores de tripas), por la historia según la cual entregaron su mejor carne a la flota de Enrique el Navegante en 1415 y se quedaron solo con las vísceras.",
    knownFor: [
      "Las bodegas de vino de Oporto",
      "El puente Dom Luis I",
      "El paseo fluvial de la Ribeira",
      "La Livraria Lello",
      "Las estaciones de azulejos",
      "La francesinha",
    ],
  },
  budapest: {
    citySlug: "budapest",
    image: hero(8390036),
    imageAlt:
      "El Puente de las Cadenas Szechenyi sobre el Danubio, con el Parlamento húngaro detrás",
    history:
      "Budapest fueron dos rivales hasta 1873: la montañosa y regia Buda en la orilla oeste y la llana y comercial Pest en la orilla este, unidas cuando el Puente de las Cadenas hizo por fin fácil cruzar el Danubio. Los romanos mantuvieron aquí una ciudad de guarnición llamada Aquincum, y su gusto por las fuentes termales nunca se marchó, por lo que la ciudad todavía tiene grandes baños públicos alimentados por agua caliente del subsuelo. Los años en torno a 1896, milenario del asentamiento húngaro, dotaron a la ciudad de su Parlamento, de la primera línea de metro de la Europa continental y de buena parte de su majestuosa avenida Andrassy. El levantamiento de 1956 contra el dominio soviético fue aplastado, pero nunca olvidado.",
    knownFor: [
      "Los baños termales",
      "El Parlamento",
      "El Puente de las Cadenas",
      "Los ruin bars",
      "Las vistas del Danubio",
      "El Castillo de Buda",
    ],
  },
  vienna: {
    citySlug: "vienna",
    image: hero(18110534),
    imageAlt:
      "El palacio del Belvedere y su estanque reflectante en Viena bajo un cielo azul",
    history:
      "Viena fue la capital de los Habsburgo durante más de seis siglos, y la sede del Sacro Imperio y luego del imperio austrohúngaro hasta su desplome en 1918, por lo que una ciudad de menos de dos millones de habitantes posee palacios construidos para un continente. Cuando las murallas medievales cayeron en 1857, el emperador Francisco José las sustituyó por la Ringstrasse, el gran bulevar de los museos, la ópera y el parlamento que aún hoy rodeas. Hacia 1900 la ciudad fue un crisol del mundo moderno: Freud inventó aquí el psicoanálisis, Klimt y Schiele rompieron con la tradición y Mahler dirigía la ópera. Viena es la capital de una pequeña Austria neutral desde 1955, y sigue funcionando al ritmo de la cultura del café que la UNESCO protege hoy.",
    knownFor: [
      "El palacio de Schonbrunn",
      "Los cafés vieneses",
      "El Beso de Klimt",
      "Los palacios imperiales",
      "La Sachertorte",
      "Ópera y bailes",
    ],
  },
  granada: {
    citySlug: "granada",
    image: hero(38100344),
    imageAlt:
      "El palacio de la Alhambra sobre Granada con la Sierra Nevada nevada detrás",
    history:
      "Granada fue el último reino musulmán de Europa occidental, la capital del emirato nazarí que resistió 250 años después de que cayera el resto de España. Sus soberanos levantaron la Alhambra, el más bello conjunto palaciego islámico que se conserva en Occidente, en la colina que domina la ciudad. El 2 de enero de 1492 los Reyes Católicos Isabel y Fernando tomaron la ciudad, poniendo fin a casi 800 años de dominio musulmán en España; ese mismo año, desde Granada, Isabel aceptó financiar a Cristóbal Colón. La Alhambra quedó medio olvidada hasta que el escritor Washington Irving vivió en ella y publicó Cuentos de la Alhambra en 1832, lo que desató el fervor romántico que la salvó. Granada es hoy una ciudad universitaria donde las capas musulmana y española conviven una junto a la otra.",
    knownFor: [
      "La Alhambra",
      "Las tapas gratis",
      "Las vistas del Albaicín",
      "El legado musulmán",
      "La Sierra Nevada",
      "El flamenco del Sacromonte",
    ],
  },
  rome: {
    citySlug: "rome",
    image: hero(32619390),
    imageAlt: "El Coliseo de Roma contra un cielo azul intenso",
    history:
      "Roma fue, según su propia leyenda, fundada por Rómulo en el año 753 a. C., y creció hasta convertirse en la capital de un imperio que se extendía desde Britania hasta el Sáhara. Las ruinas entre las que caminas, el Coliseo, el Foro, el Panteón, son los restos de una ciudad que albergaba a un millón de personas cuando el Londres medieval tenía veinte mil. Cuando el imperio cayó, los papas hicieron de Roma la capital del mundo católico, y el dinero del Renacimiento y del Barroco la reconstruyó sobre los huesos antiguos, por lo que las fuentes de Bernini se asientan sobre cimientos romanos. Solo se convirtió en la capital de una Italia unificada en 1871, la última pieza del país en incorporarse. Todo lo que ha venido después, del tráfico al aperitivo, se superpone a tres mil años que nunca se despejaron.",
    knownFor: [
      "El Coliseo",
      "El Vaticano y la Capilla Sixtina",
      "La Fontana de Trevi",
      "Las ruinas romanas",
      "Pasta y helado",
      "Las fuentes barrocas",
    ],
  },
  amsterdam: {
    citySlug: "amsterdam",
    image: hero(12705128),
    imageAlt:
      "Casas de canal de Ámsterdam y barcos turísticos en el Damrak bajo un cielo azul",
    history:
      "Ámsterdam nació de un pueblo pesquero del siglo XIII que represó el río Amstel, de donde viene su nombre. Su edad de oro fue el siglo XVII, cuando los barcos neerlandeses dominaban el comercio mundial y los mercaderes que los financiaban excavaron el anillo de canales, el Grachtengordel, y construyeron las altas y estrechas casas con gablete que aún se ven, gravadas por su anchura, por lo que son tan delgadas. Aquella riqueza financió a Rembrandt y la tulipomanía que arruinó a los especuladores en 1637. La ciudad siempre ha sido un refugio, para los hugonotes, para los judíos, y más tarde un sinónimo de tolerancia. Ana Frank se escondió aquí desde 1942 hasta que su familia fue delatada en 1944, y su casa en el Prinsengracht es hoy el memorial más visitado de la ciudad.",
    knownFor: [
      "El anillo de canales",
      "El Museo Van Gogh",
      "La Casa de Ana Frank",
      "Las bicicletas",
      "El Rijksmuseum",
      "Los brown cafes",
    ],
  },
  florence: {
    citySlug: "florence",
    image: hero(981682),
    imageAlt:
      "La cúpula de Brunelleschi alzándose sobre los tejados de terracota de Florencia",
    history:
      "Florencia es donde comenzó el Renacimiento. En el siglo XV los Medici, una familia de banqueros que dirigía de hecho la ciudad, volcaron su fortuna en artistas y arquitectos, y el resultado es una pequeña ciudad que atesora más arte famoso por metro cuadrado que casi ningún otro lugar de la tierra. Brunelleschi levantó la mayor cúpula de mampostería del mundo sobre la catedral en 1436, todavía hoy la silueta de la ciudad, sin ningún andamiaje completo. El florín de oro acuñado aquí fue la moneda más fiable de la Europa medieval, y así una ciudad toscana de mercaderes terminó financiando a Miguel Ángel, Botticelli y Leonardo. Galileo enseñó aquí, Maquiavelo escribió aquí, y durante seis años a partir de 1865 Florencia fue incluso la capital de una Italia recién unificada.",
    knownFor: [
      "El Duomo",
      "El arte renacentista",
      "La Galería Uffizi",
      "El David de Miguel Ángel",
      "El Ponte Vecchio",
      "La cocina toscana",
    ],
  },
  bruges: {
    citySlug: "bruges",
    image: hero(5612504),
    imageAlt:
      "Casas de ladrillo con gablete escalonado a lo largo de un canal de Brujas bajo un cielo azul",
    history:
      "Brujas fue una de las ciudades más ricas de la Europa medieval, el centro comercial de Flandes donde la lana de Inglaterra se convertía en el paño más fino del continente. Albergó lo que muchos consideran la primera bolsa del mundo, llamada así por la familia Van der Beurze, cuya posada acogía a los comerciantes, de donde viene la palabra bolsa. Luego el canal marítimo que la había enriquecido, el Zwin, se colmató de arena hacia 1500, los mercaderes se trasladaron a Amberes y Brujas se durmió durante cuatro siglos. Precisamente por eso sobrevivió: sin dinero para derribar y reconstruir, el centro medieval permaneció intacto. Una sombría novela de 1892, Brujas la muerta, la hizo famosa de nuevo, y los turistas no han dejado de venir desde entonces.",
    knownFor: [
      "Los canales medievales",
      "El Campanario",
      "El chocolate belga",
      "El arte flamenco",
      "La cerveza trapense",
      "Las plazas adoquinadas",
    ],
  },
  barcelona: {
    citySlug: "barcelona",
    image: hero(21357884),
    imageAlt:
      "La Sagrada Familia alzándose sobre Barcelona y el mar, vista desde el Park Guell",
    history:
      "Barcelona empezó como la ciudad romana de Barcino, y luego pasó la Edad Media como capital marítima de la Corona de Aragón, por lo que el Barrio Gótico todavía tiene palacios medievales a una manzana del puerto. La ciudad moderna nació en 1860, cuando cayeron las viejas murallas y el ingeniero Ildefons Cerda trazó el Eixample, la cuadrícula de manzanas con esquinas achaflanadas que aún recorres hoy. El dinero industrial financió después el auge del Modernismo hacia 1900, y Antoni Gaudi convirtió esa riqueza en la Sagrada Familia, el Park Guell y la Casa Batllo; la basílica se comenzó en 1882 y sigue en obras. Los Juegos Olímpicos de 1992 abrieron la ciudad a sus playas, y Barcelona es desde entonces una de las ciudades más visitadas de Europa. Es ferozmente catalana, con su propia lengua y un ruidoso movimiento independentista.",
    knownFor: [
      "La Sagrada Familia",
      "La arquitectura de Gaudi",
      "El Park Guell",
      "La Rambla",
      "Tapas y vermut",
      "Las playas urbanas",
    ],
  },
  berlin: {
    citySlug: "berlin",
    image: hero(37468367),
    imageAlt: "La Puerta de Brandeburgo en Berlín bajo un cielo azul",
    history:
      "Berlín fue la capital de Prusia y luego, desde 1871, de una Alemania unificada. Los años de Weimar de la década de 1920 la convirtieron en un sinónimo de cabaret, cine y arte moderno, hasta que los nazis tomaron aquí el poder en 1933 y dirigieron la guerra desde la ciudad. Lo que dejaron los bombardeos, la Guerra Fría lo dividió: a partir de 1961 el Muro de Berlín partió la ciudad en dos durante 28 años, hasta que cayó el 9 de noviembre de 1989 y Alemania se reunificó con Berlín como capital en 1990. Las cicatrices son hoy los lugares de interés, desde los tramos de Muro que aún se conservan hasta los puestos de control de la Guerra Fría y los memoriales. Los alquileres baratos del este vaciado convirtieron después a la ciudad reunificada en la capital del tecno y de la creatividad de Europa, el Berlín al que la mayoría de la gente viene hoy.",
    knownFor: [
      "La Puerta de Brandeburgo",
      "El Muro de Berlín",
      "La historia de la Guerra Fría",
      "La vida nocturna tecno",
      "La Isla de los Museos",
      "El arte urbano",
    ],
  },
  madrid: {
    citySlug: "madrid",
    image: hero(32314658),
    imageAlt: "El edificio Metrópolis en la Gran Vía de Madrid a la hora dorada",
    history:
      "Madrid se convirtió en la capital de España casi por decreto: en 1561 el rey Felipe II trasladó su corte a la que entonces era una villa modesta, elegida en parte porque se hallaba en el centro exacto de la península. Las callejuelas estrechas del casco viejo en torno a la Plaza Mayor todavía se llaman el Madrid de los Austrias por aquellos reyes Habsburgo, mientras que los Borbones posteriores añadieron el Palacio Real y los bulevares. El 2 de mayo de 1808 la ciudad se alzó contra las tropas de Napoleón, una matanza que Goya pintó y que el país aún marca con un día festivo. Madrid no tiene una maravilla única como la Alhambra o la Sagrada Familia; su atractivo reside en la densidad de la vida y en una de las mayores concentraciones de pintura de la tierra, el Prado, el Reina Sofía y el Thyssen a diez minutos a pie.",
    knownFor: [
      "El Prado",
      "El Parque del Retiro",
      "Tapas y terrazas",
      "El Palacio Real",
      "El Guernica",
      "Las noches largas",
    ],
  },
  krakow: {
    citySlug: "krakow",
    image: hero(37459506),
    imageAlt:
      "La Lonja de los Paños y la basílica de Santa María en la Plaza del Mercado de Cracovia",
    history:
      "Cracovia fue la capital real de Polonia durante más de cinco siglos, hasta que la corte se trasladó a Varsovia en 1596, y sus reyes fueron coronados y sepultados allá arriba, en la colina de Wawel. La Universidad Jagellónica, fundada en 1364, es una de las más antiguas de Europa y formó a un joven Copérnico. A diferencia de Varsovia, el casco antiguo atravesó la Segunda Guerra Mundial casi sin daños, por lo que la Plaza del Mercado medieval, la más grande de Europa, sigue intacta y catalogada por la UNESCO. La historia más oscura está muy cerca: los nazis dirigían la Polonia ocupada desde Cracovia, vaciaron el barrio judío de Kazimierz en el gueto de Podgorze y construyeron Auschwitz-Birkenau a una hora al oeste. Barata, recorrible a pie y llena de estudiantes, Cracovia es hoy una de las escapadas cortas más populares de Europa.",
    knownFor: [
      "La Plaza del Mercado",
      "El Castillo de Wawel",
      "Kazimierz",
      "Los pierogi baratos",
      "El mercado navideño",
      "La excursión a Auschwitz",
    ],
  },
  copenhagen: {
    citySlug: "copenhagen",
    image: hero(20228124),
    imageAlt:
      "Las coloridas casas del puerto y los barcos de madera de Nyhavn en Copenhague",
    history:
      "Copenhague pasó de ser un pueblo pesquero a la ciudad mercantil fortificada que controlaba la entrada al Báltico, de donde viene su nombre, el puerto de los mercaderes. La mayor parte de la ciudad vieja fue moldeada por el rey Cristián IV a principios del siglo XVII, que construyó el castillo de Rosenborg y la Torre Redonda; el canal de postal de Nyhavn se excavó poco después como puerto de trabajo para marineros y tabernas. La flota británica bombardeó e incendió gran parte de la ciudad en 1807, durante las Guerras Napoleónicas. Hans Christian Andersen escribió aquí sus cuentos en el siglo XIX, y la Sirenita de bronce se erigió en 1913. Dinamarca es la monarquía más antigua del mundo, y la Copenhague moderna ha convertido esa larga y cómoda historia en una reputación mundial de diseño, ciclismo y cocina nórdica.",
    knownFor: [
      "El puerto de Nyhavn",
      "Los Jardines de Tivoli",
      "Bicicletas por todas partes",
      "Hygge y diseño",
      "La nueva cocina nórdica",
      "La Sirenita",
    ],
  },
  athens: {
    citySlug: "athens",
    image: hero(33201846),
    imageAlt: "La Acrópolis de Atenas sobre su roca bajo un cielo azul despejado",
    history:
      "Atenas es donde se inventó buena parte del mundo occidental. En el siglo V a. C. era la más rica y poderosa de las ciudades estado griegas, y bajo Pericles levantó el Partenón y el resto de la Acrópolis al mismo tiempo que Sócrates, y luego Platón y Aristóteles, discutían de filosofía en sus calles e inventaban la democracia. Roma, luego Bizancio y luego los otomanos tomaron sucesivamente la ciudad, y el Partenón sirvió de iglesia y de mezquita antes de que un proyectil veneciano alcanzara la pólvora que los otomanos guardaban dentro en 1687 y le volara el tejado. Cuando Grecia logró la independencia, Atenas se convirtió en la capital del nuevo reino en 1834, entonces una pequeña ciudad de unos pocos miles de habitantes, y creció hasta ser la extensa urbe moderna que hoy envuelve aquellas rocas antiguas.",
    knownFor: [
      "La Acrópolis",
      "El Partenón",
      "Las ruinas antiguas",
      "Las vistas desde las azoteas",
      "Souvlaki y mezze",
      "La cuna de la democracia",
    ],
  },
  edinburgh: {
    citySlug: "edinburgh",
    image: hero(28851815),
    imageAlt:
      "El perfil de la Ciudad Vieja de Edimburgo con el Scott Monument y la torre del reloj del Balmoral",
    history:
      "Edimburgo ha sido la capital de Escocia durante seis siglos, y el castillo sobre su tapón de roca volcánica ha estado fortificado desde mucho antes. La Ciudad Vieja medieval creció como una densa espina dorsal de altos edificios de viviendas que descienden por la loma de la Royal Mile, del castillo al palacio real de Holyroodhouse. En el siglo XVIII, durante la Ilustración escocesa que dio a David Hume y Adam Smith, la ciudad construyó la elegante cuadrícula georgiana de la Ciudad Nueva al otro lado del valle, y se ganó el apodo de la Atenas del Norte. El primer Festival Fringe de Edimburgo se celebró en 1947 y es hoy el mayor festival de artes de la tierra, que se apodera de toda la ciudad cada agosto. Los cafés donde J.K. Rowling escribió Harry Potter siguen haciendo buen negocio.",
    knownFor: [
      "El Castillo de Edimburgo",
      "La Royal Mile",
      "Arthur's Seat",
      "El festival Fringe",
      "El whisky escocés",
      "Harry Potter",
    ],
  },
  paris: {
    citySlug: "paris",
    image: hero(36771040),
    imageAlt: "La Torre Eiffel alzándose sobre París enmarcada por árboles",
    history:
      "París comenzó como un asentamiento de la tribu de los parisios en una isla del Sena, creció hasta ser la ciudad romana de Lutecia, y ha sido la capital de Francia durante casi mil años. Notre-Dame se comenzó en 1163, y el Barrio Latino medieval creció en torno a una de las primeras universidades de Europa. La Revolución de 1789 empezó aquí con la toma de la Bastilla, y en las décadas de 1850 y 1860 el barón Haussmann abrió a la fuerza la vieja ciudad abarrotada para trazar los amplios bulevares y las uniformes fachadas de piedra caliza que hoy la definen. La Torre Eiffel se levantó como instalación temporal para la Exposición Universal de 1889 y nunca se desmontó. París fue la capital artística del siglo XX, fue liberada en 1944, y reabrió una Notre-Dame restaurada en diciembre de 2024, cinco años después del incendio.",
    knownFor: [
      "La Torre Eiffel",
      "El Louvre",
      "Notre-Dame",
      "Las terrazas de café",
      "Los bulevares de Haussmann",
      "El arte y la moda",
    ],
  },
  venice: {
    citySlug: "venice",
    image: hero(34775901),
    imageAlt:
      "El Gran Canal de Venecia bordeado de palacios y góndolas visto desde el Rialto",
    history:
      "Venecia fue fundada por refugiados del continente que huyeron a las pantanosas islas de la laguna en los siglos V y VI, y creció hasta ser una república que dominó el comercio mediterráneo durante mil años. En su apogeo, la Serenísima República, dirigida por un dux elegido desde el Palacio Ducal, era uno de los estados más ricos de Europa; Marco Polo partió de aquí hacia China. Todo ello se construyó sobre millones de pilotes de madera clavados en el fango, por lo que los palacios parecen surgir directamente del agua. La República cayó finalmente ante Napoleón en 1797. Hoy Venecia se extiende por 118 islas sin coche alguno, y lidia con el hundimiento de sus cimientos, las inundaciones del acqua alta y el turismo de masas, por lo que ahora cobra una tasa de acceso a los visitantes de un día en las jornadas de mayor afluencia.",
    knownFor: [
      "El Gran Canal",
      "La Plaza de San Marcos",
      "Las góndolas",
      "El Puente de Rialto",
      "Las máscaras del Carnaval",
      "El cristal de Murano",
    ],
  },
  dublin: {
    citySlug: "dublin",
    image: hero(13157974),
    imageAlt:
      "El puente Ha'penny sobre el río Liffey en Dublín con la cúpula verde de la Aduana detrás",
    history:
      "Dublín comenzó como un puerto vikingo de comercio y de esclavos en el río Liffey hacia el año 841, y su nombre procede del irlandés Dubh Linn, la charca negra donde amarraban los drakkares. Se convirtió en el centro del dominio inglés en Irlanda tras la llegada de los normandos en 1170, y las anchas calles y las plazas de ladrillo rojo de la ciudad georgiana se trazaron en el siglo XVIII, cuando Dublín era la segunda ciudad del Imperio británico. El Alzamiento de Pascua de 1916 comenzó en la Oficina General de Correos de O'Connell Street y desencadenó la lucha que llevó a la independencia de Irlanda en 1922. La ciudad carga con un peso literario desmesurado, cuna de cuatro premios Nobel y escenario del Ulises de James Joyce, y es hoy la joven capital, impulsada por la tecnología, de una Irlanda mucho más próspera.",
    knownFor: [
      "La Guinness Storehouse",
      "El Libro de Kells",
      "Las puertas georgianas",
      "Los pubs de Temple Bar",
      "El Trinity College",
      "La música tradicional",
    ],
  },
  stockholm: {
    citySlug: "stockholm",
    image: hero(30158443),
    imageAlt:
      "El paseo marítimo de Riddarholmen en Estocolmo y la aguja de su iglesia vistos al otro lado del agua bajo un cielo azul",
    history:
      "Estocolmo fue fundada hacia 1252 en la pequeña isla que hoy se llama Gamla Stan, donde el lago Malaren desemboca en el mar Báltico, y se enriqueció controlando el comercio del hierro y del cobre de Suecia. Se convirtió en la capital permanente en el siglo XV y en la sede de los reyes suecos, cuyo Palacio Real todavía se alza sobre el casco antiguo. La ciudad se extendió por sus catorce islas a medida que Suecia ascendía al rango de gran potencia en el siglo XVII, la era del buque de guerra Vasa, que zozobró en el puerto en su viaje inaugural en 1628 y fue reflotado, casi intacto, en 1961. A salvo de la destrucción de ambas guerras mundiales gracias a la neutralidad sueca, Estocolmo conservó su núcleo histórico e hizo del siglo XX un sinónimo de diseño, y sigue acogiendo la ceremonia y el banquete del Premio Nobel cada diciembre.",
    knownFor: [
      "El casco antiguo de Gamla Stan",
      "El buque Vasa",
      "El Museo ABBA",
      "El archipiélago",
      "La cultura del fika",
      "El Premio Nobel",
    ],
  },
};

export default extrasEs;
