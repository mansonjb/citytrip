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
};

export default extrasPt;
