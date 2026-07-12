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
  nice: {
    citySlug: "nice",
    image: hero(26928991),
    imageAlt:
      "Los tejados rojos del casco antiguo de Niza con la torre barroca del reloj y las colinas de la Riviera detrás",
    history:
      "Niza pasó la mayor parte de su historia mirando a Italia antes que a Francia: perteneció durante siglos a la Casa de Saboya y solo se hizo francesa en 1860, tras un plebiscito, por lo que el casco antiguo se siente ligur y el dialecto y la comida locales están más cerca de Génova que de París. La ciudad se enriqueció en el siglo XIX, cuando los aristócratas británicos y rusos venían a pasar el invierno en la costa, y fue su dinero el que pagó el paseo marítimo que todavía lleva su nombre, la Promenade des Anglais. Matisse y Chagall se instalaron aquí por la luz y dejaron sendos museos en las frondosas colinas de Cimiez, sobre el emplazamiento de la ciudad romana de Cemenelum. Hoy Niza es la capital extraoficial de la Riviera y la puerta de entrada a Mónaco, Cannes y los pueblos encaramados a lo largo de la Costa Azul.",
    knownFor: [
      "La Promenade des Anglais",
      "Vieux Nice",
      "El mercado del Cours Saleya",
      "Las playas de guijarros",
      "La socca",
      "Las excursiones por la Riviera",
    ],
  },
  dubrovnik: {
    citySlug: "dubrovnik",
    image: hero(16884684),
    imageAlt:
      "Los tejados de terracota del casco antiguo de Dubrovnik con la cúpula de la catedral y el monte Srd detrás",
    history:
      "Dubrovnik pasó siglos como la República de Ragusa, una pequeña pero astuta ciudad-estado marítima que conservó su independencia pagando tributo al imperio que fuera más fuerte en cada momento mientras mantenía una flota mercante que rivalizaba con Venecia. Sus murallas de piedra, de hasta 25 metros de alto y casi dos kilómetros de perímetro, nunca fueron traspasadas, y el Stradun pavimentado de mármol y las iglesias barrocas de su interior se reconstruyeron en gran parte tras un catastrófico terremoto en 1667. La república terminó cuando Napoleón la abolió en 1808, y la ciudad se sumó más tarde a Yugoslavia y luego a una Croacia independiente. Los proyectiles dañaron el casco antiguo durante el asedio de 1991 a 1992 en la guerra de independencia croata, pero fue restaurado con esmero, y una nueva ola de fama llegó cuando se convirtió en Desembarco del Rey en Juego de Tronos.",
    knownFor: [
      "Las murallas de la ciudad",
      "Los tejados de terracota",
      "El Stradun",
      "Los escenarios de Juego de Tronos",
      "La isla de Lokrum",
      "Las playas del Adriático",
    ],
  },
  reykjavik: {
    citySlug: "reykjavik",
    image: hero(20165201),
    imageAlt:
      "El perfil de Reikiavik al otro lado del agua con la torre de Hallgrimskirkja y montañas nevadas detrás",
    history:
      "Reikiavik fue, según las viejas sagas, el emplazamiento del primer asentamiento nórdico de Islandia hacia el año 874, cuando se dice que Ingolfur Arnarson arrojó por la borda los pilares de su asiento de honor y edificó donde estos llegaron a la orilla; el nombre significa bahía humeante, por el vapor que se alza de sus fuentes termales. Siguió siendo una aldea diminuta durante casi mil años y solo creció hasta convertirse en una ciudad de verdad en el siglo XVIII, hasta ser la capital de una Islandia autónoma en 1918 y de una república plenamente independiente en 1944, cuando el país cortó sus últimos lazos con Dinamarca. La ciudad tuvo su momento de Guerra Fría en 1986, cuando Reagan y Gorbachov se reunieron en la casa Hofdi y estuvieron cerca de acordar la eliminación de sus arsenales nucleares. Calentada y abastecida casi por completo con energía geotérmica e hidráulica, es la capital más septentrional del mundo y el campamento base para las cascadas, los géiseres y las auroras boreales de Islandia.",
    knownFor: [
      "Hallgrimskirkja",
      "Las auroras boreales",
      "El Círculo Dorado",
      "La Laguna Azul",
      "Las piscinas geotérmicas",
      "El avistamiento de ballenas",
    ],
  },
  munich: {
    citySlug: "munich",
    image: hero(13762982),
    imageAlt:
      "Las cúpulas gemelas de cebolla de la Frauenkirche y la torre del Ayuntamiento Nuevo sobre el casco antiguo de Múnich",
    history:
      "Múnich surgió en 1158 en torno a un asentamiento de monjes, de donde proceden tanto su nombre, de Munichen, como el monjecito de su escudo. Se convirtió en la sede de la dinastía Wittelsbach, que gobernó Baviera durante más de 700 años y llenó la ciudad de palacios como la Residenz y Nymphenburg mientras la hacía capital del arte y de la música. Fue también donde nació el movimiento nazi en la década de 1920 y donde se firmó el Acuerdo de Múnich de 1938, aunque los estudiantes de la Rosa Blanca que resistieron desde la universidad se recuerdan por toda la ciudad. Reconstruida con cuidado tras los bombardeos de la guerra, Múnich se reinventó como una ciudad próspera, verde y famosa por su apego a la tradición, conocida hoy por BMW, el FC Bayern, las cervecerías y el Oktoberfest, celebrado por primera vez en 1810 para festejar una boda real.",
    knownFor: [
      "Marienplatz",
      "El Oktoberfest",
      "Los beer gardens",
      "El Jardín Inglés",
      "La excursión a Neuschwanstein",
      "BMW y el FC Bayern",
    ],
  },
  tallinn: {
    citySlug: "tallinn",
    image: hero(35838020),
    imageAlt:
      "Los tejados rojos y las agujas de las iglesias del casco antiguo medieval de Tallin con el perfil moderno detrás al atardecer",
    history:
      "Tallin creció como puerto comercial hanseático en el Báltico, y en los siglos XIV y XV sus mercaderes ya habían levantado las murallas, las salas gremiales y las iglesias del casco antiguo que aún se conservan casi intactas, lo que la convierte en una de las ciudades medievales mejor preservadas de Europa. El nombre suele rastrearse hasta Taani linn, la ciudad danesa, por los daneses que tomaron el fuerte de la colina en 1219; la ciudad alta de Toompea albergaba a los gobernantes mientras que los mercaderes de habla alemana dirigían la ciudad baja de abajo. Estonia fue absorbida por el imperio ruso y luego, tras una breve primera independencia, por la Unión Soviética hasta 1991, cuando la pacífica Revolución Cantada devolvió el país. Desde entonces Tallin se ha convertido en el escaparate de la e-Estonia, un lugar que ayudó a crear Skype y gestiona su gobierno en línea, todo envuelto en torno a un núcleo medieval de cuento de hadas.",
    knownFor: [
      "El casco antiguo medieval",
      "Los miradores de Toompea",
      "La catedral de Alexander Nevsky",
      "Telliskivi y Kalamaja",
      "La e-Estonia",
      "El mercado navideño",
    ],
  },
  oslo: {
    citySlug: "oslo",
    image: hero(18170373),
    imageAlt:
      "El tejado de mármol blanco de la Ópera de Oslo bajando hacia el puerto bajo un cielo azul",
    history:
      "Oslo fue fundada hacia 1040 y convertida en capital de Noruega por el rey Haakon V hacia 1300, pero tras un incendio devastador en 1624 el rey danés Cristián IV la reconstruyó junto a la fortaleza de Akershus y la rebautizó Christiania, un nombre que mantuvo hasta que volvió a ser Oslo en 1925. Durante siglos Noruega fue gobernada desde Dinamarca y luego quedó atada a Suecia, y solo obtuvo la plena independencia en 1905, cuando llamó al rey cuyos descendientes reinan todavía hoy. El petróleo del mar del Norte, descubierto a finales de la década de 1960, convirtió a una modesta capital nórdica en una de las ciudades más ricas de la tierra, lo que pagó la Ópera del frente marítimo y la serie de nuevos museos a lo largo del fiordo. Sede del Premio Nobel de la Paz, entregado aquí cada diciembre, Oslo envuelve un centro compacto en el bosque y el fiordo por los que los locales esquían y navegan directamente desde la ciudad.",
    knownFor: [
      "La Ópera",
      "El grito",
      "El parque de Vigeland",
      "El Oslofjord",
      "El Premio Nobel de la Paz",
      "Holmenkollen",
    ],
  },
  helsinki: {
    citySlug: "helsinki",
    image: hero(12319482),
    imageAlt:
      "La Catedral de Helsinki alzándose sobre el Puerto Sur y la plaza del mercado vista desde el mar",
    history:
      "Helsinki fue fundada en 1550 por el rey Gustavo Vasa de Suecia como un puesto comercial para rivalizar con Tallin al otro lado del golfo, pero siguió siendo una pequeña villa durante siglos. Todo cambió en 1809, cuando Suecia perdió Finlandia frente a Rusia: el zar hizo de Helsinki la capital del nuevo Gran Ducado en 1812 y encargó al arquitecto Carl Ludwig Engel trazar la neoclásica plaza del Senado y su catedral blanca para que pareciera una San Petersburgo en pequeño. Finlandia conquistó por fin su independencia en 1917, y el siglo XX convirtió a Helsinki en un escaparate del diseño y la arquitectura moderna finlandeses, de Alvar Aalto a Marimekko. Acogió los Juegos Olímpicos de 1952 y los Acuerdos de Helsinki de 1975, y sigue siendo una capital compacta y ceñida por el mar donde la sauna es una forma de vida.",
    knownFor: [
      "La Catedral de Helsinki",
      "La plaza del Senado",
      "La fortaleza de Suomenlinna",
      "El Design District",
      "La cultura de la sauna",
      "La plaza del Mercado",
    ],
  },
  naples: {
    citySlug: "naples",
    image: hero(31668031),
    imageAlt:
      "Las cúpulas y los tejados de Nápoles con la bahía de Nápoles y el monte Vesubio detrás al anochecer",
    history:
      "Nápoles fue fundada por colonos griegos hacia el 600 a. C. como Neápolis, la ciudad nueva, y conservó su trazado griego, todavía rastreable en la rectísima línea de Spaccanapoli, a través de la dominación romana, bizantina, normanda y española. Durante siglos fue la capital de su propio reino, la mayor ciudad de Italia y una de las más grandes de Europa, sede real borbónica cuyo teatro de ópera, el San Carlo de 1737, es el más antiguo aún en funcionamiento del mundo. Todo ello se asienta bajo el Vesubio, el volcán que sepultó Pompeya y Herculano en el año 79 d. C. y que todavía se cierne, dormido pero vivo, sobre la bahía. Pobre, densa y ferozmente orgullosa, Nápoles dio al mundo la pizza, nacida aquí en el siglo XVIII y fijada como la Margherita en 1889, y una devoción por Diego Maradona que roza lo religioso.",
    knownFor: [
      "La pizza margherita",
      "El monte Vesubio",
      "Excursión a Pompeya",
      "Spaccanapoli",
      "Maradona",
      "El Cristo Velado",
    ],
  },
  split: {
    citySlug: "split",
    image: hero(6701514),
    imageAlt:
      "El frente marítimo y el casco antiguo de Split con el campanario de la catedral y las montañas de Mosor detrás, vistos desde el mar",
    history:
      "Split creció, de forma única, dentro de un palacio romano: el emperador Diocleciano, el único gobernante romano en renunciar al trono voluntariamente, construyó aquí un vasto palacio fortificado de retiro hacia el año 305 d. C., y cuando la vecina Salona cayó ante los invasores los refugiados simplemente se instalaron entre sus muros y nunca se fueron. Diecisiete siglos después, la gente todavía vive y comercia dentro del palacio, su catedral es el propio mausoleo de Diocleciano y sus sótanos sobreviven casi intactos. La ciudad pasó por manos bizantinas, venecianas, habsburgas y brevemente napoleónicas, pasó el siglo XX en Yugoslavia y se hizo croata en 1991. Hoy Split es la bulliciosa capital de Dalmacia, un puerto y la puerta de entrada a las islas, tan conocida por su ferviente fútbol del Hajduk y su juego de playa picigin como por sus piedras romanas.",
    knownFor: [
      "El Palacio de Diocleciano",
      "La Riva",
      "El campanario de San Domnio",
      "La colina de Marjan",
      "Las islas dálmatas",
      "Localizaciones de Juego de Tronos",
    ],
  },
  riga: {
    citySlug: "riga",
    image: hero(33830451),
    imageAlt:
      "Los tejados del casco antiguo de Riga y la aguja de la catedral con el río Daugava y el puente Vansu detrás",
    history:
      "Riga fue fundada en 1201 por el obispo alemán Alberto como base para convertir el Báltico a golpe de espada, y creció hasta ser la ciudad más grande y rica del Báltico oriental bajo la Liga Hanseática, gobernada durante siglos por comerciantes de habla alemana y por los caballeros de Livonia. Pasó por manos polacas, suecas y luego rusas, y hacia 1900 un auge industrial la convirtió en la tercera ciudad del imperio ruso y cubrió sus nuevos distritos con la arquitectura art nouveau más extravagante de Europa. Letonia logró su independencia en 1918, fue engullida por la Unión Soviética en 1940 y se liberó de nuevo en 1991 a través de la pacífica Revolución Cantada y la cadena humana de la Vía Báltica. Hoy Riga es la mayor de las tres capitales bálticas, un casco antiguo Patrimonio de la Humanidad envuelto en bulevares Jugendstil.",
    knownFor: [
      "Las agujas del casco antiguo",
      "Las fachadas art nouveau",
      "El Mercado Central",
      "La Casa de los Cabezas Negras",
      "El ámbar báltico",
      "La Fiesta de la Canción",
    ],
  },
  brussels: {
    citySlug: "brussels",
    image: hero(655295),
    imageAlt:
      "Las doradas fachadas barrocas de las casas gremiales de la Grand-Place de Bruselas bajo un cielo nublado",
    history:
      "Bruselas empezó como un asentamiento fortificado en una isla del pantanoso río Senne hacia el año 979 y creció hasta ser la sede de los duques de Brabante y una residencia predilecta de los duques de Borgoña y de los Habsburgo. Sus gremios construyeron la Grand-Place, y cuando las tropas francesas la bombardearon y arrasaron en 1695, los gremios reconstruyeron sus casas más grandiosas que antes, en el barroco dorado que todavía ves hoy. Bélgica se creó en 1830 con Bruselas como capital, y la riqueza de un auge industrial y de un imperio colonial costeó los grandes bulevares, el art nouveau de Victor Horta y el vasto Palacio de Justicia. Oficialmente bilingüe en francés y neerlandés, Bruselas se convirtió en la capital de facto de la Unión Europea después de 1958, razón por la que una cómoda ciudad belga ayuda ahora a gobernar un continente.",
    knownFor: [
      "La Grand-Place",
      "La cerveza belga",
      "El chocolate",
      "Las patatas fritas",
      "Los murales de cómic",
      "El art nouveau",
    ],
  },
  vilnius: {
    citySlug: "vilnius",
    image: hero(28975990),
    imageAlt:
      "Las iglesias barrocas y los tejados rojos del casco antiguo de Vilnius vistos desde lo alto",
    history:
      "Vilnius fue, según la leyenda, fundada cuando el gran duque Gediminas soñó con un lobo de hierro que aullaba en la colina y construyó allí su castillo en la década de 1320, y creció hasta ser la capital del Gran Ducado de Lituania, en su día el Estado más grande de Europa, que se extendía desde el Báltico casi hasta el mar Negro. Su universidad, fundada en 1579, y sus densas iglesias barrocas la convirtieron en un gran centro de saber, y hacia el siglo XIX era una de las ciudades judías más importantes del mundo, la Jerusalén del Norte, hasta que la comunidad fue aniquilada en el Holocausto. Repartida entre Polonia, la ocupación nazi y la Unión Soviética, Lituania fue la primera república en declarar la independencia de la URSS, en 1990, y los tanques soviéticos mataron a multitudes desarmadas en la torre de televisión en enero de 1991 antes de que se liberara. Hoy Vilnius es una capital barata, verde y sin prisas envuelta en el mayor casco antiguo barroco de Europa.",
    knownFor: [
      "El casco antiguo barroco",
      "La república de Uzupis",
      "La Torre de Gediminas",
      "La Puerta de la Aurora",
      "Los cepelinai",
      "El castillo de Trakai",
    ],
  },
  bratislava: {
    citySlug: "bratislava",
    image: hero(10137866),
    imageAlt:
      "El castillo blanco de cuatro torres de Bratislava en la colina sobre el Danubio",
    history:
      "Bratislava ha sido eslovaca, húngara, austriaca y checoslovaca en el recuerdo de una sola generación, y durante siglos se la conoció por sus nombres alemán y húngaro, Pressburg y Pozsony. Durante casi tres siglos, mientras los otomanos ocupaban Buda, fue la capital de la Hungría Real y la ciudad de coronación donde 11 reyes y reinas de Hungría, María Teresa entre ellos, fueron coronados en la catedral de San Martín. Los Habsburgo, Napoleón y la Guerra Fría dejaron todos su huella: el castillo de Devin, sobre la ciudad, custodiaba el borde occidental del bloque comunista, con su frontera convertida en una zona letal hasta 1989. Bratislava solo se convirtió en la capital de una Eslovaquia independiente en 1993, tras la separación pacífica de Checoslovaquia, y hoy es una capital de la UE pequeña, barata y en rápida transformación, a una hora río abajo de Viena.",
    knownFor: [
      "El castillo de Bratislava",
      "El casco antiguo barroco",
      "Las coronaciones de San Martín",
      "El puente UFO",
      "La estatua de Cumil",
      "La cerveza eslovaca barata",
    ],
  },
};

export default extrasEs;
