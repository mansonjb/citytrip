import type { CityExtras } from "./types";

const hero = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`;

// Hero photos are free-license (Pexels), URL and visually validated.
const extrasPt: Record<string, CityExtras> = {
  lisbon: {
    citySlug: "lisbon",
    image: hero(16338751),
    imageAlt: "Elétrico amarelo a subir uma rua de Lisboa junto a um prédio cor de mostarda",
    history:
      "Lisboa é uma das cidades mais antigas da Europa Ocidental, um porto fenício e romano muito antes de se tornar a capital de Portugal em 1256. O grande terramoto de 1 de novembro de 1755, seguido de um maremoto e de incêndios, arrasou a cidade baixa e matou dezenas de milhares de pessoas, e é por isso que a Baixa pombalina que hoje percorremos parece tão diferente do emaranhado de Alfama que sobreviveu. Foi daqui que Vasco da Gama zarpou para a Índia em 1498, e o imposto sobre esse comércio de especiarias pagou a cantaria manuelina que se vê em Belem. A Revolução dos Cravos de 1974, um golpe militar quase sem derramamento de sangue, pôs fim a quatro décadas de ditadura e continua a ser celebrada todos os anos a 25 de abril.",
    knownFor: [
      "Elétrico 28 amarelo",
      "Pastel de nata",
      "Fado",
      "Miradouros",
      "Azulejos",
      "Torre de Belem",
    ],
  },
  prague: {
    citySlug: "prague",
    image: hero(11261851),
    imageAlt: "O Castelo de Praga e a Catedral de Sao Vito acima da Ponte Carlos e do rio Vltava",
    history:
      "Praga cresceu em torno de um vau no rio Vltava e de um castelo no alto de uma colina fundado por volta de 880, e no século XIV era a sede do imperador do Sacro Império Romano-Germânico Carlos IV, que mandou construir a Ponte Carlos, a Cidade Nova e a universidade mais antiga da Europa central. A Defenestração de Praga de 1618, quando nobres protestantes atiraram funcionários imperiais pela janela de um castelo, ajudou a desencadear a Guerra dos Trinta Anos. Ao contrário do resto da região, o centro histórico atravessou a Segunda Guerra Mundial quase intacto, e é por isso que o horizonte gótico e barroco está tão completo. A Revolução de Veludo de 1989 pôs fim ao regime comunista sem violência, e Praga é desde então a capital checa.",
    knownFor: [
      "Ponte Carlos",
      "Castelo de Praga",
      "Relógio Astronómico",
      "Cerveja barata",
      "Horizonte barroco",
      "Mercados de Natal",
    ],
  },
  seville: {
    citySlug: "seville",
    image: hero(5470586),
    imageAlt:
      "Plaza de Espana em Sevilha à hora dourada com o seu canal e as suas torres",
    history:
      "Sevilha foi a Hispalis romana e depois, durante mais de cinco séculos, a cidade moura de Ishbiliya, e é por isso que a torre sineira da catedral, La Giralda, começou por ser um minarete e o Alcazar continua a ser um palácio mudéjar em funcionamento. Depois de 1492, a cidade deteve o monopólio da coroa sobre o comércio com as Américas, e o ouro e a prata que subiam o Guadalquivir tornaram-na um dos lugares mais ricos da Europa. Essa riqueza construiu a imensa catedral gótica, onde Cristóvão Colombo está sepultado. A Plaza de Espana, digna de um conto de fadas, é muito mais recente, construída para a Exposição Ibero-Americana de 1929.",
    knownFor: [
      "Real Alcazar",
      "Flamenco",
      "Plaza de Espana",
      "Laranjeiras",
      "Semana Santa",
      "Cultura das tapas",
    ],
  },
  porto: {
    citySlug: "porto",
    image: hero(25695948),
    imageAlt:
      "Ponte de ferro Dom Luis I sobre o Douro com os telhados da Ribeira do Porto ao fundo",
    history:
      "O Porto deu a Portugal o seu nome, a partir do porto romano de Portus Cale, e a sua fama de trabalho árduo e de independência. A cidade fez fortuna no rio Douro: as pipas de vinho desciam o vale superior para envelhecer nas caves de Vila Nova de Gaia, e os comerciantes ingleses transformaram esse comércio no vinho do Porto a partir do século XVII. A ponte de dois tabuleiros Dom Luis I, inaugurada em 1886, foi construída por um discípulo de Gustave Eiffel. Os habitantes ainda são chamados tripeiros, comedores de tripas, por causa da história de que deram a sua melhor carne à frota do Infante D. Henrique em 1415 e ficaram apenas com as miudezas.",
    knownFor: [
      "Caves de vinho do Porto",
      "Ponte Dom Luis I",
      "Ribeira à beira-rio",
      "Livraria Lello",
      "Estações de azulejos",
      "Francesinha",
    ],
  },
  budapest: {
    citySlug: "budapest",
    image: hero(8390036),
    imageAlt:
      "Ponte das Correntes Szechenyi sobre o Danúbio com o Parlamento húngaro ao fundo",
    history:
      "Budapeste foram duas cidades rivais até 1873: Buda, real e montanhosa, na margem oeste, e Peste, plana e comercial, na margem leste, unidas quando a Ponte das Correntes tornou finalmente fácil atravessar o Danúbio. Os romanos mantinham aqui uma cidade-guarnição chamada Aquincum, e o seu gosto pelas nascentes termais nunca desapareceu, e é por isso que a cidade ainda tem grandes balneários públicos alimentados por água quente do subsolo. Os anos à volta de 1896, o milénio da fundação da Hungria, deram à cidade o seu Parlamento, a primeira linha de metro da Europa continental e grande parte da sua imponente Avenida Andrassy. A revolta de 1956 contra o domínio soviético foi esmagada, mas nunca esquecida.",
    knownFor: [
      "Balneários termais",
      "Edifício do Parlamento",
      "Ponte das Correntes",
      "Ruin bars",
      "Vistas do Danúbio",
      "Castelo de Buda",
    ],
  },
  vienna: {
    citySlug: "vienna",
    image: hero(18110534),
    imageAlt:
      "O palácio Belvedere e o seu espelho de água em Viena sob um céu azul",
    history:
      "Viena foi a capital dos Habsburgo durante mais de seis séculos, e a sede do Sacro Império Romano-Germânico e depois do império Austro-Húngaro, até este ruir em 1918, e é por isso que uma cidade com menos de dois milhões de habitantes tem palácios construídos para um continente. Quando as muralhas medievais foram deitadas abaixo em 1857, o imperador Francisco José substituiu-as pela Ringstrasse, a grande avenida de museus, ópera e parlamento que ainda hoje se contorna. Por volta de 1900 a cidade era um cadinho do mundo moderno: Freud inventou aqui a psicanálise, Klimt e Schiele romperam com a tradição, e Mahler dirigia a ópera. Viena é a capital de uma Áustria pequena e neutra desde 1955, e ainda funciona à volta da cultura de café que a UNESCO agora protege.",
    knownFor: [
      "Palácio de Schonbrunn",
      "Cafés",
      "O Beijo de Klimt",
      "Palácios imperiais",
      "Sachertorte",
      "Ópera e bailes",
    ],
  },
  granada: {
    citySlug: "granada",
    image: hero(38100344),
    imageAlt:
      "O palácio da Alhambra acima de Granada com a Sierra Nevada coberta de neve ao fundo",
    history:
      "Granada foi o último reino muçulmano da Europa Ocidental, a capital do emirado nasrida que resistiu 250 anos depois de o resto de Espanha ter caído. Os seus governantes construíram a Alhambra, o mais fino complexo de palácios islâmicos que sobrevive no Ocidente, na colina acima da cidade. A 2 de janeiro de 1492, os Reis Católicos Isabel e Fernando tomaram a cidade, pondo fim a quase 800 anos de domínio mouro em Espanha; nesse mesmo ano, a partir de Granada, Isabel concordou em financiar Cristóvão Colombo. A Alhambra ficou meio esquecida até o escritor Washington Irving lá viver e publicar os Contos da Alhambra em 1832, o que despoletou a febre romântica que a salvou. Granada é hoje uma cidade universitária onde as camadas moura e espanhola coexistem lado a lado.",
    knownFor: [
      "A Alhambra",
      "Tapas gratuitas",
      "Vistas do Albaicin",
      "Herança moura",
      "Sierra Nevada",
      "Flamenco do Sacromonte",
    ],
  },
  rome: {
    citySlug: "rome",
    image: hero(32619390),
    imageAlt: "O Coliseu em Roma contra um céu azul intenso",
    history:
      "Roma foi, pela sua própria lenda, fundada por Rómulo em 753 a.C., e cresceu até ser a capital de um império que ia da Britânia ao Saara. As ruínas por onde passa, o Coliseu, o Forum, o Panteao, são as sobras de uma cidade que tinha um milhão de habitantes enquanto a Londres medieval tinha vinte mil. Quando o império caiu, os papas fizeram de Roma a capital do mundo católico, e o dinheiro do Renascimento e do Barroco reconstruiu-a à volta dos ossos antigos, e é por isso que as fontes de Bernini assentam sobre alicerces romanos. Só se tornou a capital de uma Itália unida em 1871, a última peça do país a juntar-se. Tudo desde então, do trânsito ao aperitivo, sobrepõe-se a três mil anos que nunca foram removidos.",
    knownFor: [
      "O Coliseu",
      "Vaticano e Capela Sistina",
      "Fontana di Trevi",
      "Ruínas romanas",
      "Massa e gelado",
      "Fontes barrocas",
    ],
  },
  amsterdam: {
    citySlug: "amsterdam",
    image: hero(12705128),
    imageAlt:
      "Casas de canal e barcos turísticos de Amesterdao no Damrak sob um céu azul",
    history:
      "Amesterdao cresceu a partir de uma aldeia piscatória do século XIII que barrou o rio Amstel, de onde vem o nome. A sua idade de ouro foi o século XVII, quando os navios holandeses dominavam o comércio mundial e os mercadores que os financiavam escavaram o anel de canais, o Grachtengordel, e construíram as casas de empena altas e estreitas que ainda hoje se veem, taxadas pela largura, e é por isso que são tão finas. Essa riqueza financiou Rembrandt e a mania das tulipas que arruinou os especuladores em 1637. A cidade foi sempre um refúgio, para huguenotes, para judeus, e mais tarde um sinónimo de tolerância. Anne Frank escondeu-se aqui de 1942 até a sua família ser denunciada em 1944, e a sua casa no Prinsengracht é hoje o memorial mais visitado da cidade.",
    knownFor: [
      "O anel de canais",
      "Museu Van Gogh",
      "Casa de Anne Frank",
      "Bicicletas",
      "Rijksmuseum",
      "Brown cafes",
    ],
  },
  florence: {
    citySlug: "florence",
    image: hero(981682),
    imageAlt:
      "A cupula de Brunelleschi erguendo-se sobre os telhados de terracota de Florenca",
    history:
      "Florenca é onde o Renascimento comecou. No século XV os Médici, uma família de banqueiros que na prática governava a cidade, despejaram a sua fortuna em artistas e arquitetos, e o resultado é uma pequena cidade que guarda mais arte famosa por metro quadrado do que quase qualquer sítio na Terra. Brunelleschi ergueu a maior cupula de alvenaria do mundo sobre a catedral em 1436, ainda hoje a silhueta da cidade, sem qualquer andaime completo. O florim de ouro cunhado aqui era a moeda mais fiável da Europa medieval, e foi assim que uma cidade toscana de mercadores acabou a financiar Miguel Angelo, Botticelli e Leonardo. Galileu ensinou aqui, Maquiavel escreveu aqui, e durante seis anos depois de 1865 Florenca foi ate a capital de uma Itália recém-unida.",
    knownFor: [
      "O Duomo",
      "Arte renascentista",
      "Galeria Uffizi",
      "O David de Miguel Angelo",
      "Ponte Vecchio",
      "Comida toscana",
    ],
  },
  bruges: {
    citySlug: "bruges",
    image: hero(5612504),
    imageAlt:
      "Casas de tijolo com empenas em escada ao longo de um canal de Bruges sob um céu azul",
    history:
      "Bruges foi uma das cidades mais ricas da Europa medieval, o centro comercial da Flandres onde a la de Inglaterra se tornava o pano mais fino do continente. Geriu aquilo a que muitos chamam a primeira bolsa de valores do mundo, com o nome da família Van der Beurze, cuja estalagem acolhia os comerciantes, e é daí que vem a palavra bolsa. Depois o canal marítimo que a enriqueceu, o Zwin, assoreou por volta de 1500, os mercadores mudaram-se para Antuérpia, e Bruges adormeceu durante quatro séculos. Foi exatamente por isso que sobreviveu: sem dinheiro para deitar tudo abaixo e reconstruir, o centro medieval manteve-se intacto. Um romance sombrio de 1892, Bruges-la-Morte, voltou a torná-la famosa, e os turistas nunca mais deixaram de vir.",
    knownFor: [
      "Canais medievais",
      "O Campanário",
      "Chocolate belga",
      "Arte flamenga",
      "Cerveja trapista",
      "Pracas de calcada",
    ],
  },
  barcelona: {
    citySlug: "barcelona",
    image: hero(21357884),
    imageAlt:
      "A Sagrada Familia erguendo-se sobre Barcelona e o mar, vista do Park Guell",
    history:
      "Barcelona comecou como a cidade romana de Barcino, e depois passou a Idade Media como a capital maritima da Coroa de Aragao, e e por isso que o Bairro Gotico ainda tem palacios medievais a um quarteirao do porto. A cidade moderna nasceu em 1860, quando as velhas muralhas cairam e o engenheiro Ildefons Cerda tracou o Eixample, a grelha de quarteiroes chanfrados que ainda hoje se percorre. O dinheiro industrial financiou depois o boom do Modernisme por volta de 1900, e Antoni Gaudi transformou essa riqueza na Sagrada Familia, no Park Guell e na Casa Batllo; a basilica foi comecada em 1882 e ainda esta a ser terminada. Os Jogos Olimpicos de 1992 abriram a cidade as suas praias, e Barcelona e desde entao uma das cidades mais visitadas da Europa. E ferozmente catala, com a sua propria lingua e um ruidoso movimento independentista.",
    knownFor: [
      "Sagrada Familia",
      "Arquitetura de Gaudi",
      "Park Guell",
      "La Rambla",
      "Tapas e vermute",
      "Praias urbanas",
    ],
  },
  berlin: {
    citySlug: "berlin",
    image: hero(37468367),
    imageAlt: "A Porta de Brandemburgo em Berlim sob um céu azul",
    history:
      "Berlim foi a capital da Prússia e, a partir de 1871, de uma Alemanha unificada. Os anos de Weimar, na década de 1920, fizeram dela sinónimo de cabaré, cinema e arte moderna, até os nazis tomarem o poder aqui em 1933 e conduzirem a guerra a partir da cidade. O que os bombardeamentos deixaram, a Guerra Fria dividiu: a partir de 1961, o Muro de Berlim cortou a cidade em duas durante 28 anos, até cair a 9 de novembro de 1989 e a Alemanha se reunificar com Berlim como capital em 1990. As cicatrizes são hoje as atrações, dos troços sobreviventes do Muro aos postos de controlo da Guerra Fria e aos memoriais. As rendas baratas no leste esvaziado transformaram depois a cidade reunida na capital do techno e da criatividade da Europa, que é a Berlim que a maioria vem procurar hoje.",
    knownFor: [
      "Porta de Brandemburgo",
      "O Muro de Berlim",
      "História da Guerra Fria",
      "Vida noturna techno",
      "Ilha dos Museus",
      "Arte urbana",
    ],
  },
  madrid: {
    citySlug: "madrid",
    image: hero(32314658),
    imageAlt: "O edifício Metropolis na Gran Via de Madrid à hora dourada",
    history:
      "Madrid tornou-se a capital de Espanha quase por decreto: em 1561 o rei Filipe II mudou a sua corte para o que era então uma vila modesta, escolhida em parte por ficar no centro exato da península. As ruelas apertadas do centro antigo à volta da Plaza Mayor ainda são chamadas Madrid de los Austrias, por causa daqueles reis Habsburgo, enquanto os Bourbons posteriores acrescentaram o Palacio Real e as avenidas. A 2 de maio de 1808 a cidade levantou-se contra as tropas de Napoleao, uma carnificina que Goya pintou e que o país ainda assinala como feriado. Madrid não tem uma única maravilha como a Alhambra ou a Sagrada Familia; a sua atração é a densidade de vida e uma das maiores concentrações de pintura do mundo, o Prado, o Reina Sofia e o Thyssen a dez minutos a pé uns dos outros.",
    knownFor: [
      "O Prado",
      "Parque do Retiro",
      "Tapas e esplanadas",
      "Palacio Real",
      "Guernica",
      "Noites tardias",
    ],
  },
  krakow: {
    citySlug: "krakow",
    image: hero(37459506),
    imageAlt:
      "A Lonja dos Panos e a Basilica de Santa Maria na Praca do Mercado de Cracovia",
    history:
      "Cracovia foi a capital real da Polonia durante mais de cinco seculos, ate a corte se mudar para Varsovia em 1596, e os seus reis eram coroados e sepultados no alto da colina de Wawel. A Universidade Jagiellonian, fundada em 1364, e uma das mais antigas da Europa e ensinou um jovem Copernico. Ao contrario de Varsovia, a cidade velha atravessou a Segunda Guerra Mundial quase sem danos, e e por isso que a Praca do Mercado medieval, a maior da Europa, continua intacta e classificada pela UNESCO. A historia mais sombria fica perto: os nazis governaram a Polonia ocupada a partir de Cracovia, esvaziaram o bairro judeu de Kazimierz para o gueto de Podgorze e construiram Auschwitz-Birkenau a uma hora para oeste. Barata, percorrivel a pe e cheia de estudantes, Cracovia e hoje uma das escapadas curtas mais populares da Europa.",
    knownFor: [
      "Praca do Mercado",
      "Castelo de Wawel",
      "Kazimierz",
      "Pierogi barato",
      "Mercado de Natal",
      "Excursao a Auschwitz",
    ],
  },
  copenhagen: {
    citySlug: "copenhagen",
    image: hero(20228124),
    imageAlt:
      "As coloridas casas do porto e os barcos de madeira de Nyhavn, em Copenhaga",
    history:
      "Copenhaga cresceu de uma aldeia piscatória para a cidade mercantil fortificada que controlava a entrada do Báltico, de onde vem o seu nome, porto dos mercadores. Grande parte da cidade antiga foi moldada pelo rei Cristiano IV no início do século XVII, que construiu o Castelo de Rosenborg e a Torre Redonda; o canal de postal de Nyhavn foi escavado pouco depois como um porto de trabalho para marinheiros e tabernas. A frota britânica bombardeou e incendiou grande parte da cidade em 1807, durante as Guerras Napoleónicas. Hans Christian Andersen escreveu aqui os seus contos de fadas no século XIX, e a Pequena Sereia em bronze foi erguida em 1913. A Dinamarca é a monarquia mais antiga do mundo, e a Copenhaga moderna transformou essa longa e confortável história numa reputação global de design, ciclismo e nova gastronomia nórdica.",
    knownFor: [
      "Porto de Nyhavn",
      "Jardins Tivoli",
      "Bicicletas por todo o lado",
      "Hygge e design",
      "Nova gastronomia nórdica",
      "A Pequena Sereia",
    ],
  },
  athens: {
    citySlug: "athens",
    image: hero(33201846),
    imageAlt: "A Acrópole de Atenas na sua rocha sob um céu azul limpo",
    history:
      "Atenas é onde grande parte do mundo ocidental foi inventado. No século V a.C. era a mais rica e poderosa das cidades-estado gregas, e sob Péricles construiu o Partenon e o resto da Acrópole ao mesmo tempo que Sócrates, e depois Platão e Aristóteles, discutiam filosofia nas suas ruas e inventavam a democracia. Roma, depois Bizâncio, depois os otomanos tomaram cada um a cidade, e o Partenon serviu de igreja e de mesquita antes de uma bomba veneziana atingir a pólvora que os otomanos guardavam lá dentro em 1687 e fazer voar o telhado. Quando a Grécia conquistou a independência, Atenas tornou-se a capital do novo reino em 1834, então uma pequena vila de uns milhares de pessoas, e cresceu até à extensa cidade moderna que hoje envolve aquelas rochas antigas.",
    knownFor: [
      "A Acrópole",
      "O Partenon",
      "Ruínas antigas",
      "Vistas de rooftop",
      "Souvlaki e mezze",
      "Berço da democracia",
    ],
  },
  edinburgh: {
    citySlug: "edinburgh",
    image: hero(28851815),
    imageAlt:
      "O horizonte da Cidade Velha de Edimburgo com o Scott Monument e a torre do relógio do Balmoral",
    history:
      "Edimburgo é a capital da Escócia há seis séculos, e o castelo no seu tampão de rocha vulcânica está fortificado há muito mais tempo do que isso. A Cidade Velha medieval cresceu como uma espinha densa de altos prédios de habitação a descer pela cumeeira da Royal Mile, do castelo até ao palácio real de Holyroodhouse. No século XVIII, durante o Iluminismo Escocês que produziu David Hume e Adam Smith, a cidade construiu a elegante grelha georgiana da Cidade Nova do outro lado do vale, e ganhou a alcunha de Atenas do Norte. O primeiro Edinburgh Festival Fringe decorreu em 1947 e é hoje o maior festival de artes do planeta, tomando conta da cidade inteira todos os agostos. Os cafés onde J.K. Rowling escreveu Harry Potter continuam a fazer bom negócio.",
    knownFor: [
      "Castelo de Edimburgo",
      "A Royal Mile",
      "Arthur's Seat",
      "O festival Fringe",
      "Whisky escocês",
      "Harry Potter",
    ],
  },
  paris: {
    citySlug: "paris",
    image: hero(36771040),
    imageAlt: "A Torre Eiffel erguendo-se sobre Paris emoldurada por árvores",
    history:
      "Paris começou como um povoado da tribo dos Parisii numa ilha do Sena, cresceu até ser a cidade romana de Lutécia, e é a capital de França há quase mil anos. Notre-Dame foi iniciada em 1163, e o Bairro Latino medieval cresceu à volta de uma das primeiras universidades da Europa. A Revolução de 1789 começou aqui com a tomada da Bastilha, e nas décadas de 1850 e 1860 o barão Haussmann rasgou a cidade velha e apinhada para traçar as largas avenidas e as fachadas uniformes de calcário que hoje a definem. A Torre Eiffel ergueu-se como exposição temporária para a Exposição Universal de 1889 e nunca mais foi desmontada. Paris foi a capital da arte do século XX, foi libertada em 1944, e reabriu uma Notre-Dame restaurada em dezembro de 2024, cinco anos depois do incêndio.",
    knownFor: [
      "Torre Eiffel",
      "O Louvre",
      "Notre-Dame",
      "Esplanadas de café",
      "Avenidas de Haussmann",
      "Arte e moda",
    ],
  },
  venice: {
    citySlug: "venice",
    image: hero(34775901),
    imageAlt:
      "O Grande Canal em Veneza ladeado de palazzi e gondolas visto da Ponte de Rialto",
    history:
      "Veneza foi fundada por refugiados de terra firme que fugiram para as ilhas pantanosas da laguna nos séculos V e VI, e cresceu até ser uma república que geriu o comércio do Mediterrâneo durante mil anos. No seu auge, a Sereníssima República, dirigida por um Doge eleito a partir do Palácio Ducal, era um dos estados mais ricos da Europa; foi daqui que Marco Polo partiu para a China. Tudo isto foi construído sobre milhões de estacas de madeira cravadas na lama, e é por isso que os palazzi parecem erguer-se a direito da água. A República acabou por cair diante de Napoleão em 1797. Hoje Veneza espalha-se por 118 ilhas sem carros nenhuns, e debate-se com fundações que afundam, as cheias de acqua alta e o turismo de massas, e é por isso que agora cobra uma taxa de acesso aos visitantes de um dia nos dias movimentados.",
    knownFor: [
      "O Grande Canal",
      "A Praça de São Marcos",
      "Gondolas",
      "Ponte de Rialto",
      "Máscaras de Carnevale",
      "Vidro de Murano",
    ],
  },
  dublin: {
    citySlug: "dublin",
    image: hero(13157974),
    imageAlt:
      "A Ponte Ha'penny sobre o rio Liffey em Dublin com a cupula verde da Custom House ao fundo",
    history:
      "Dublin comecou como um porto viking de comercio e de escravos no rio Liffey por volta de 841, e o seu nome vem do irlandes Dubh Linn, a poca negra onde os drakkares atracavam. Tornou-se o centro do dominio ingles na Irlanda depois da chegada dos normandos em 1170, e as ruas largas e as pracas de tijolo vermelho da cidade georgiana foram tracadas no seculo XVIII, quando Dublin era a segunda cidade do Imperio Britanico. A Revolta da Pascoa de 1916 comecou nos Correios Centrais da O'Connell Street e desencadeou a luta que levou a independencia irlandesa em 1922. A cidade carrega um peso literario desmedido, casa de quatro laureados Nobel e cenario do Ulisses de James Joyce, e e hoje a capital jovem e movida pela tecnologia de uma Irlanda muito mais rica.",
    knownFor: [
      "Guinness Storehouse",
      "Book of Kells",
      "Portas georgianas",
      "Pubs de Temple Bar",
      "Trinity College",
      "Musica tradicional",
    ],
  },
  stockholm: {
    citySlug: "stockholm",
    image: hero(30158443),
    imageAlt:
      "A frente de agua de Riddarholmen em Estocolmo e a torre da igreja vistas do outro lado da agua sob um céu azul",
    history:
      "Estocolmo foi fundada por volta de 1252 na pequena ilha hoje chamada Gamla Stan, onde o lago Malaren desagua no mar Baltico, e enriqueceu controlando o comercio de ferro e cobre que saia da Suecia. Tornou-se a capital permanente no seculo XV e a sede dos reis suecos, cujo Palacio Real ainda se ergue sobre a cidade velha. A cidade espalhou-se pelas suas catorze ilhas a medida que a Suecia ascendia a estatuto de grande potencia no seculo XVII, a era do navio de guerra Vasa, que se virou no porto na sua viagem inaugural em 1628 e foi erguido, quase intacto, em 1961. Poupada a destruicao das duas guerras mundiais pela neutralidade sueca, Estocolmo manteve o seu nucleo historico e fez do seculo XX um sinonimo de design, e ainda acolhe a cerimonia e o banquete do Premio Nobel todos os dezembros.",
    knownFor: [
      "Cidade velha de Gamla Stan",
      "O navio Vasa",
      "Museu ABBA",
      "O arquipelago",
      "Cultura da fika",
      "O Premio Nobel",
    ],
  },
  nice: {
    citySlug: "nice",
    image: hero(26928991),
    imageAlt:
      "Os telhados vermelhos de Vieux Nice com a torre do relógio barroca e as colinas da Riviera ao fundo",
    history:
      "Nice passou a maior parte da sua história virada para Itália e não para França: pertenceu durante séculos à Casa de Saboia e só se tornou francesa em 1860, após um plebiscito, e é por isso que a cidade velha tem um ar ligure e o dialeto e a comida locais estão mais próximos de Génova do que de Paris. A cidade enriqueceu no século XIX, quando os aristocratas britânicos e russos vinham passar o inverno na costa, e foi o dinheiro deles que pagou o passeio à beira-mar que ainda hoje leva o seu nome, a Promenade des Anglais. Matisse e Chagall instalaram-se aqui pela luz e deixaram museus nas frondosas colinas de Cimiez, no local da cidade romana de Cemenelum. Hoje Nice é a capital não oficial da Riviera e a porta de entrada para Monaco, Cannes e as aldeias empoleiradas ao longo da Cote d'Azur.",
    knownFor: [
      "Promenade des Anglais",
      "Vieux Nice",
      "Mercado do Cours Saleya",
      "Praias de seixos",
      "Socca",
      "Excursões pela Riviera",
    ],
  },
  dubrovnik: {
    citySlug: "dubrovnik",
    image: hero(16884684),
    imageAlt:
      "Os telhados de terracota da cidade velha de Dubrovnik com a cúpula da catedral e o Monte Srd ao fundo",
    history:
      "Dubrovnik passou séculos como a República de Ragusa, uma pequena mas astuta cidade-estado marítima que manteve a independência pagando tributo ao império mais forte de cada momento enquanto geria uma frota mercante que rivalizava com Veneza. As suas muralhas de pedra, com até 25 metros de altura e quase dois quilómetros de perímetro, nunca foram tomadas, e o Stradun pavimentado a mármore e as igrejas barrocas no seu interior foram em grande parte reconstruídos após um terramoto catastrófico em 1667. A república terminou quando Napoleão a aboliu em 1808, e a cidade juntou-se depois à Jugoslávia e mais tarde à Croácia independente. As granadas danificaram a cidade velha durante o cerco de 1991 a 1992, na guerra da independência croata, mas foi restaurada com todo o cuidado, e uma nova vaga de fama chegou quando se tornou Porto Real em A Guerra dos Tronos.",
    knownFor: [
      "As muralhas da cidade",
      "Telhados de terracota",
      "Stradun",
      "Cenários de A Guerra dos Tronos",
      "Ilha de Lokrum",
      "Praias do Adriático",
    ],
  },
  reykjavik: {
    citySlug: "reykjavik",
    image: hero(20165201),
    imageAlt:
      "O horizonte de Reykjavik do outro lado da água com a torre da Hallgrimskirkja e montanhas cobertas de neve ao fundo",
    history:
      "Reykjavik foi, segundo as antigas sagas, o local do primeiro povoamento nórdico da Islândia por volta de 874, quando se diz que Ingolfur Arnarson atirou ao mar os pilares do seu trono e construiu onde deram à costa; o nome significa baía fumegante, por causa do vapor que sobe das suas nascentes quentes. Manteve-se uma pequena aldeia durante quase mil anos e só cresceu para uma verdadeira cidade no século XVIII, tornando-se a capital de uma Islândia autónoma em 1918 e de uma república plenamente independente em 1944, quando o país cortou os últimos laços com a Dinamarca. A cidade teve o seu momento de Guerra Fria em 1986, quando Reagan e Gorbachev se encontraram na casa de Hofdi e estiveram perto de acordar o desmantelamento dos seus arsenais nucleares. Aquecida e alimentada quase inteiramente por energia geotérmica e hídrica, é a capital mais a norte do mundo e o campo-base para as cascatas, os géiseres e as Luzes do Norte da Islândia.",
    knownFor: [
      "Hallgrimskirkja",
      "Luzes do Norte",
      "Círculo Dourado",
      "Lagoa Azul",
      "Piscinas geotérmicas",
      "Observação de baleias",
    ],
  },
  munich: {
    citySlug: "munich",
    image: hero(13762982),
    imageAlt:
      "As duas cúpulas em bolbo da Frauenkirche e a torre da Câmara Nova sobre a cidade velha de Munique",
    history:
      "Munique nasceu em 1158 à volta de um povoado de monges, de onde vem tanto o seu nome, a partir de Munichen, como o pequeno monge no seu brasão. Tornou-se a sede da dinastia Wittelsbach, que governou a Baviera durante mais de 700 anos e encheu a cidade de palácios como a Residenz e Nymphenburg, ao mesmo tempo que fazia dela uma capital de arte e música. Foi também onde o movimento nazi nasceu na década de 1920 e onde o Acordo de Munique de 1938 foi assinado, embora os estudantes da Rosa Branca que resistiram a partir da universidade sejam recordados por toda a cidade. Reconstruída com cuidado depois dos bombardeamentos da guerra, Munique reinventou-se próspera, verde e famosamente apegada à tradição, conhecida hoje pela BMW, pelo FC Bayern, pelas cervejarias e pela Oktoberfest, realizada pela primeira vez em 1810 para celebrar um casamento real.",
    knownFor: [
      "Marienplatz",
      "Oktoberfest",
      "Cervejarias ao ar livre",
      "O Jardim Inglês",
      "Excursão a Neuschwanstein",
      "BMW e FC Bayern",
    ],
  },
  tallinn: {
    citySlug: "tallinn",
    image: hero(35838020),
    imageAlt:
      "Os telhados vermelhos e as torres de igreja da cidade velha medieval de Tallinn com o horizonte moderno ao fundo ao pôr do sol",
    history:
      "Tallinn cresceu como um porto comercial hanseático no Báltico e, pelos séculos XIV e XV, os seus mercadores tinham erguido as muralhas, as casas de guilda e as igrejas da cidade velha que ainda hoje se mantêm quase intactas, fazendo dela uma das cidades medievais mais bem preservadas da Europa. O nome é muitas vezes atribuído a Taani linn, a cidade dinamarquesa, por causa dos dinamarqueses que tomaram o forte da colina em 1219; a cidade alta de Toompea albergava os governantes enquanto os mercadores de língua alemã dirigiam a cidade baixa em baixo. A Estónia foi absorvida pelo império russo e depois, após uma curta primeira independência, pela União Soviética até 1991, quando a pacífica Revolução Cantada restaurou o país. Desde então, Tallinn tornou-se a montra da e-Estónia, um lugar que ajudou a criar o Skype e gere o seu governo online, tudo envolto num núcleo medieval de conto de fadas.",
    knownFor: [
      "Cidade velha medieval",
      "Miradouros de Toompea",
      "Catedral de Alexander Nevsky",
      "Telliskivi e Kalamaja",
      "e-Estónia",
      "Mercado de Natal",
    ],
  },
  oslo: {
    citySlug: "oslo",
    image: hero(18170373),
    imageAlt:
      "O telhado de mármore branco da Casa da Ópera de Oslo a descer até ao porto sob um céu azul",
    history:
      "Oslo foi fundada por volta de 1040 e feita capital da Noruega pelo rei Haakon V por volta de 1300, mas depois de um incêndio devastador em 1624 o rei dinamarquês Cristiano IV reconstruiu-a junto à fortaleza de Akershus e rebatizou-a de Christiania, um nome que manteve até voltar a chamar-se Oslo em 1925. Durante séculos a Noruega foi governada a partir da Dinamarca e depois ligada à Suécia, e só conquistou a independência plena em 1905, quando convidou o rei cujos descendentes ainda hoje reinam. O petróleo do Mar do Norte, descoberto no final da década de 1960, transformou uma modesta capital nórdica numa das cidades mais ricas do mundo, o que pagou a Casa da Ópera à beira-mar e a série de novos museus ao longo do fiorde. Casa do Prémio Nobel da Paz, entregue aqui todos os dezembros, Oslo envolve um centro compacto na floresta e no fiorde onde os locais esquiam e velejam mesmo a partir da cidade.",
    knownFor: [
      "A Casa da Ópera",
      "O Grito",
      "Parque de Vigeland",
      "O Oslofjord",
      "Prémio Nobel da Paz",
      "Holmenkollen",
    ],
  },
  helsinki: {
    citySlug: "helsinki",
    image: hero(12319482),
    imageAlt:
      "A Catedral de Helsínquia a erguer-se sobre o Porto Sul e a praça do mercado vista do mar",
    history:
      "Helsínquia foi fundada em 1550 pelo rei Gustavo Vasa da Suécia como entreposto comercial para rivalizar com Talin do outro lado do golfo, mas manteve-se uma pequena cidade durante séculos. Tudo mudou em 1809, quando a Suécia perdeu a Finlândia para a Rússia: o czar fez de Helsínquia a capital do novo Grão-Ducado em 1812 e encarregou o arquiteto Carl Ludwig Engel de traçar a neoclássica Praça do Senado e a sua catedral branca para se parecer com uma São Petersburgo mais pequena. A Finlândia conquistou finalmente a independência em 1917, e o século XX transformou Helsínquia numa montra do design e da arquitetura moderna finlandeses, de Alvar Aalto a Marimekko. Acolheu os Jogos Olímpicos de 1952 e os Acordos de Helsínquia de 1975, e continua a ser uma capital compacta e ribeirinha onde a sauna é uma forma de vida.",
    knownFor: [
      "A Catedral de Helsínquia",
      "A Praça do Senado",
      "A fortaleza de Suomenlinna",
      "O Design District",
      "A cultura da sauna",
      "A Praça do Mercado",
    ],
  },
  naples: {
    citySlug: "naples",
    image: hero(31668031),
    imageAlt:
      "As cúpulas e os telhados de Nápoles com a Baía de Nápoles e o Monte Vesúvio ao fundo ao anoitecer",
    history:
      "Nápoles foi fundada por colonos gregos por volta de 600 a.C. como Neápolis, a cidade nova, e manteve a sua malha grega, ainda hoje visível na linha a direito de Spaccanapoli, ao longo dos domínios romano, bizantino, normando e espanhol. Durante séculos foi a capital do seu próprio reino, a maior cidade de Itália e uma das maiores da Europa, uma sede real dos Bourbon cujo teatro de ópera, o San Carlo de 1737, é o mais antigo ainda em funcionamento no mundo. Tudo isto assenta sob o Vesúvio, o vulcão que soterrou Pompeia e Herculano em 79 d.C. e ainda paira, adormecido mas vivo, sobre a baía. Pobre, densa e ferozmente orgulhosa, Nápoles deu ao mundo a pizza, nascida aqui no século XVIII e fixada como a Margherita em 1889, e uma devoção a Diego Maradona que roça o religioso.",
    knownFor: [
      "Pizza margherita",
      "O Monte Vesúvio",
      "Excursão a Pompeia",
      "Spaccanapoli",
      "Maradona",
      "O Cristo Velado",
    ],
  },
  split: {
    citySlug: "split",
    image: hero(6701514),
    imageAlt:
      "A frente de mar e a cidade velha de Split com o campanario da catedral e as montanhas de Mosor por tras, vistas do mar",
    history:
      "Split cresceu, de forma unica, dentro de um palacio romano: o imperador Diocleciano, o unico governante romano a abdicar do trono voluntariamente, mandou construir aqui um vasto palacio de reforma fortificado por volta do ano 305 d.C., e quando a proxima Salona caiu perante invasores, os refugiados simplesmente se mudaram para dentro das suas muralhas e nunca mais sairam. Dezassete seculos depois, ainda ha quem viva e negoceie dentro do palacio, a sua catedral e o proprio mausoleu de Diocleciano e as suas caves sobrevivem quase intactas. A cidade passou por maos bizantinas, venezianas, habsburgas e brevemente napoleonicas, atravessou o seculo XX na Jugoslavia e tornou-se croata em 1991. Hoje Split e a barulhenta capital da Dalmacia, um porto e a porta de entrada para as ilhas, tao conhecida pelo seu fervoroso futebol do Hajduk e pelo seu jogo de praia picigin como pelas suas pedras romanas.",
    knownFor: [
      "Palacio de Diocleciano",
      "A Riva",
      "Campanario de Sao Domnio",
      "Colina de Marjan",
      "Ilhas dalmatas",
      "Locais de A Guerra dos Tronos",
    ],
  },
  riga: {
    citySlug: "riga",
    image: hero(33830451),
    imageAlt:
      "Os telhados da cidade velha de Riga e a torre da catedral com o rio Daugava e a ponte Vansu ao fundo",
    history:
      "Riga foi fundada em 1201 pelo bispo alemão Alberto como base para converter o Báltico pela espada, e cresceu até ser a maior e mais rica cidade do Báltico oriental sob a Liga Hanseática, dirigida durante séculos por mercadores de língua alemã e pelos cavaleiros da Livónia. Passou pelo domínio polaco, sueco e depois russo, e por volta de 1900 um surto industrial fez dela a terceira cidade do império russo e cobriu os seus novos bairros com a mais extravagante arquitetura Art Nouveau da Europa. A Letónia conquistou a independência em 1918, foi engolida pela União Soviética em 1940 e libertou-se de novo em 1991 através da pacífica Revolução Cantada e da corrente humana do Caminho Báltico. Hoje Riga é a maior das três capitais bálticas, uma cidade velha classificada pela UNESCO envolta em bulevares Jugendstil.",
    knownFor: [
      "Torres da cidade velha",
      "Fachadas Art Nouveau",
      "O Mercado Central",
      "Casa das Cabeças Negras",
      "Âmbar báltico",
      "A Festa da Canção",
    ],
  },
  brussels: {
    citySlug: "brussels",
    image: hero(655295),
    imageAlt:
      "As douradas fachadas barrocas das casas de guilda da Grand-Place em Bruxelas sob um céu nublado",
    history:
      "Bruxelas começou como um povoado fortificado numa ilha do pantanoso rio Senne por volta de 979 e cresceu até ser a sede dos Duques de Brabante e uma residência preferida dos duques da Borgonha e dos Habsburgos. As suas guildas construíram a Grand-Place e, quando as tropas francesas a bombardearam e arrasaram em 1695, as guildas reconstruíram as suas casas mais grandiosas do que antes, no barroco dourado que ainda hoje se vê. A Bélgica foi criada em 1830 com Bruxelas como capital, e a riqueza de um surto industrial e de um império colonial pagou os grandes bulevares, o Art Nouveau de Victor Horta e o vasto Palais de Justice. Oficialmente bilingue em francês e neerlandês, Bruxelas tornou-se a capital de facto da União Europeia depois de 1958, e é por isso que uma confortável cidade belga ajuda agora a governar um continente.",
    knownFor: [
      "A Grand-Place",
      "Cerveja belga",
      "Chocolate",
      "Frites",
      "Murais de banda desenhada",
      "Art Nouveau",
    ],
  },
  vilnius: {
    citySlug: "vilnius",
    image: hero(28975990),
    imageAlt:
      "As igrejas barrocas e os telhados vermelhos da cidade velha de Vilnius vistos do alto",
    history:
      "Vilnius foi, segundo a lenda, fundada quando o Grao-Duque Gediminas sonhou com um lobo de ferro a uivar na colina e ali construiu o seu castelo na decada de 1320, e cresceu ate ser a capital do Grao-Ducado da Lituania, outrora o maior estado da Europa, estendendo-se do Baltico quase ate ao Mar Negro. A sua universidade, fundada em 1579, e as suas densas igrejas barrocas fizeram dela um grande centro de saber, e no seculo XIX era uma das cidades judaicas mais importantes do mundo, a Jerusalem do Norte, ate a comunidade ser destruida no Holocausto. Disputada entre a Polonia, a ocupacao nazi e a Uniao Sovietica, a Lituania foi a primeira republica a declarar independencia da URSS, em 1990, e os tanques sovieticos mataram multidoes desarmadas na torre de televisao em janeiro de 1991 antes de ela se libertar. Hoje Vilnius e uma capital barata, verde e descontraida envolta na maior cidade velha barroca da Europa.",
    knownFor: [
      "Cidade velha barroca",
      "A republica de Uzupis",
      "Torre de Gediminas",
      "O Portao da Aurora",
      "Cepelinai",
      "Castelo de Trakai",
    ],
  },
  bratislava: {
    citySlug: "bratislava",
    image: hero(10137866),
    imageAlt:
      "O castelo branco de quatro torres de Bratislava na colina acima do Danúbio",
    history:
      "Bratislava foi eslovaca, húngara, austríaca e checoslovaca no espaço de uma só memória viva, e foi conhecida durante séculos pelos seus nomes alemão e húngaro, Pressburg e Pozsony. Durante quase três séculos, enquanto os otomanos ocupavam Buda, foi a capital da Hungria Real e a cidade de coroação onde 11 reis e rainhas da Hungria, entre eles Maria Teresa, foram coroados na Catedral de São Martinho. Os Habsburgo, Napoleão e a Guerra Fria deixaram todos marcas: o Castelo de Devin, acima da cidade, guardava o limite ocidental do bloco comunista, com a sua fronteira transformada numa zona de morte até 1989. Bratislava tornou-se capital de uma Eslováquia independente apenas em 1993, depois de a Checoslováquia se ter separado pacificamente, e é hoje uma capital da UE pequena, barata e em rápida transformação, a uma hora rio abaixo de Viena.",
    knownFor: [
      "Castelo de Bratislava",
      "A cidade velha barroca",
      "As coroações de São Martinho",
      "A ponte UFO",
      "A estátua do Cumil",
      "Cerveja eslovaca barata",
    ],
  },
  ljubljana: {
    citySlug: "ljubljana",
    image: hero(25053927),
    imageAlt:
      "A igreja franciscana cor-de-rosa e a Ponte Tripla de Plecnik sobre o rio Ljubljanica em Ljubljana",
    history:
      "Ljubljana começou como a colónia romana de Emona, traçada por volta do ano 14 d.C. onde a estrada vinda de Itália cruzava o Ljubljanica, e fragmentos das suas muralhas ainda vêm à superfície na cidade. Passou seis séculos sob os Habsburgo como Laibach, capital da província da Carníola, e acolheu o Congresso de Laibach em 1821. Um terramoto arrasou grande parte dela em 1895, e a reconstrução deu ao centro as suas fachadas da Secessão de Viena; depois, entre as guerras, o arquiteto Joze Plecnik redesenhou a cidade quase sozinho, acrescentando a Ponte Tripla, a colunata do mercado junto ao rio e a Biblioteca Nacional, obra hoje classificada pela UNESCO. A Eslovénia separou-se da Jugoslávia em 1991 após uma guerra de dez dias, a mais curta desses conflitos, e Ljubljana transformou desde então o seu centro sem carros e as suas margens numa das capitais mais verdes da Europa.",
    knownFor: [
      "A Ponte Tripla",
      "O Castelo de Ljubljana",
      "A arquitetura de Plecnik",
      "O símbolo do dragão",
      "Cafés à beira-rio",
      "Passeio de um dia ao Lago Bled",
    ],
  },
  zurich: {
    citySlug: "zurich",
    image: hero(35975317),
    imageAlt:
      "As torres gemeas do Grossmunster sobre o rio Limmat e a cidade velha de Zurique",
    history:
      "Zurique comecou como o posto aduaneiro romano de Turicum, no Limmat, enriqueceu na Idade Media com a seda e o comercio e, em 1519, tornou-se o berco da Reforma suica quando Huldrych Zwingli comecou a pregar no Grossmunster e mandou despojar as igrejas. Aderiu a Confederacao Suica em 1351 e transformou a sua parcimonia protestante num genio para a banca, razao pela qual uma cidade de dimensao media gere uma fatia do dinheiro do mundo a partir da Bahnhofstrasse e da Paradeplatz. Em 1916, o Cabaret Voltaire, na cidade velha, deu a luz o Dada, o movimento anti-arte, enquanto Lenine tramava a revolucao a poucas ruas de distancia. Hoje, Zurique encabeca ao mesmo tempo os rankings mundiais de qualidade de vida e de custo de vida: impecavel, limpa como o lago e bonita, e de uma carestia de cortar a respiracao.",
    knownFor: [
      "O Lago de Zurique",
      "O Grossmunster",
      "A Bahnhofstrasse",
      "A banca suica",
      "Os vitrais de Chagall",
      "Precos muito altos",
    ],
  },
  warsaw: {
    citySlug: "warsaw",
    image: hero(32555031),
    imageAlt:
      "As coloridas casas reconstruidas e as torres de igreja da cidade velha de Varsovia",
    history:
      "Varsovia tornou-se a capital da Polonia por volta de 1596, quando o rei mudou a corte de Cracovia, e cresceu ate ser a sede elegante de uma vasta comunidade polaco-lituana. O seculo XX quase a apagou: sob a ocupacao nazi, a cidade viveu o Levantamento do Gueto de 1943 e depois o Levantamento de Varsovia de 1944, apos o qual os alemaes demoliram sistematicamente o que restava, e por volta de 85 por cento da cidade jazia em escombros em 1945. O que hoje se ergue e um ato de desafio, a Cidade Velha reconstruida tijolo a tijolo a partir de antigas pinturas e desenhos nos anos 1950 e agora classificada pela UNESCO precisamente por isso. Os sovieticos plantaram mais tarde o Palacio da Cultura no centro; desde 1989, torres de vidro subiram a sua volta, e Varsovia tornou-se a capital rapida, verde e barata-e-alegre de uma Polonia na UE.",
    knownFor: [
      "A Cidade Velha reconstruida",
      "Museu do Levantamento de Varsovia",
      "Palacio da Cultura",
      "Concertos de Chopin",
      "A Sereia",
      "Bares de leite",
    ],
  },
  bucharest: {
    citySlug: "bucharest",
    image: hero(37944880),
    imageAlt:
      "A ornamentada cúpula Belle Epoque do Palácio CEC na Calea Victoriei, em Bucareste",
    history:
      "Bucareste surge pela primeira vez em registos em 1459, ligada pela lenda a Vlad, o Empalador, o príncipe que inspirou Drácula, e cresceu até ser a capital da Valáquia e depois, em 1862, de uma Roménia unida. Por volta de 1900, arquitetos formados em França cobriram-na de bulevares e palácios Belle Epoque, valendo-lhe a alcunha de Pequena Paris do Oriente, com o seu próprio Arco do Triunfo. Essa elegância foi destruída duas vezes: por um grande terramoto em 1977 e depois pelo ditador Nicolae Ceausescu, que nos anos 1980 arrasou um quinto do centro antigo para erguer o seu monstruoso Palácio do Parlamento e os bulevares estalinistas à sua volta. Ceausescu foi derrubado e executado na revolução de dezembro de 1989, que rebentou no que é hoje a Praça da Revolução, e Bucareste é hoje a capital rápida, barata e contraditória de uma Roménia na UE.",
    knownFor: [
      "Palácio do Parlamento",
      "Bulevares Belle Epoque",
      "Cidade velha de Lipscani",
      "O Ateneu",
      "Preços muito baixos",
      "A lenda de Drácula",
    ],
  },
  valencia: {
    citySlug: "valencia",
    image: hero(33560408),
    imageAlt:
      "A Cidade das Artes e das Ciências refletida no seu lago ao pôr do sol, em Valência",
    history:
      "Valência foi fundada pelos romanos como Valentia em 138 a.C., uma colónia para soldados reformados no rio Turia. Sob domínio mouro tornou-se Balansiya, uma cidade próspera de jardins e canais de rega, até Jaime I de Aragão a tomar em 1238 e a integrar nos reinos cristãos. A sua idade de ouro do século XV assentou no comércio da seda, que pagou a Lonja gótica onde os mercadores se reuniam. A Grande Cheia do Turia, em outubro de 1957, afogou boa parte da cidade e levou as autoridades a desviar o rio inteiramente à sua volta, transformando o antigo leito nos Jardins do Turia de 9 km; quatro décadas mais tarde, Santiago Calatrava preencheu a ponta mais afastada desse leito com a futurista Cidade das Artes e das Ciências, iniciada no final da década de 1990.",
    knownFor: [
      "Paelha",
      "Cidade das Artes e das Ciências",
      "Las Fallas",
      "Jardins do Turia",
      "Mercado Central",
      "Horchata",
    ],
  },
  valletta: {
    citySlug: "valletta",
    image: hero(17404652),
    imageAlt:
      "A cúpula cor de mel da basílica dos Carmelitas a erguer-se sobre as casas de calcário de Valeta",
    history:
      "Valeta foi fundada em 1566 pelo Grão-Mestre Jean de Valette e pelos Cavaleiros de São João, no ano seguinte a as suas forças, em inferioridade numérica, repelirem a frota otomana no Grande Cerco de 1565. O engenheiro Francesco Laparelli traçou-a como uma cidade-fortaleza renascentista planeada, numa grelha regular por toda a península, preenchida com os albergues nacionais dos Cavaleiros e a grande igreja de São João. Napoleão apoderou-se da ilha em 1798, a caminho do Egito, mas seguiu-se o domínio britânico a partir de 1800, que durou até à independência em 1964. Muito bombardeada na Segunda Guerra Mundial, Malta recebeu a Cruz de Jorge pela sua resistência em 1942, e Valeta é Património Mundial da UNESCO desde 1980 e foi Capital Europeia da Cultura em 2018.",
    knownFor: [
      "Concatedral de São João",
      "Grande Porto",
      "Cavaleiros de São João",
      "Calcário cor de mel",
      "Pastizzi",
      "Excursões a Mdina",
    ],
  },
  gdansk: {
    citySlug: "gdansk",
    image: hero(5273641),
    imageAlt:
      "Históricas casas de empenas e um galeão atracado na frente ribeirinha do Motlawa, em Gdansk",
    history:
      "Gdansk enriqueceu como porto hanseático de cereais e âmbar, a porta da Polónia para o Báltico e, durante séculos, uma cidade rica e semi-independente que guardava com ciúme os seus próprios privilégios, e entre as guerras tornou-se a Cidade Livre de Danzig, nem plenamente alemã nem polaca. A Segunda Guerra Mundial começou aqui, a 1 de setembro de 1939, quando o couraçado alemão Schleswig-Holstein abriu fogo sobre a guarnição polaca em Westerplatte e os combates se alastraram pela península. Em 1945 a cidade estava mais de 90 por cento destruída, e as altas casas de mercadores de empenas do Mercado Longo e de Mariacka que hoje se veem foram meticulosamente reconstruídas a partir de desenhos e fotografias antigas. Em 1980, as greves no Estaleiro Lenine, lideradas por um eletricista chamado Lech Walesa, lançaram o sindicato Solidariedade, o movimento que ajudaria a derrubar o comunismo em todo o bloco de Leste.",
    knownFor: [
      "Mercado Longo",
      "Âmbar báltico",
      "Basílica de Santa Maria",
      "Solidariedade",
      "O Guindaste",
      "Praia de Sopot",
    ],
  },
};

export default extrasPt;
