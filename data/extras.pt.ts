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
};

export default extrasPt;
