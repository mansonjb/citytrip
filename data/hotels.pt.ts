import type { Hotel } from "./types";

const px = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800`;

const hotelsPt: Hotel[] = [
  // ---- Lisboa ----
  {
    slug: "memmo-alfama",
    citySlug: "lisbon",
    name: "Memmo Alfama",
    neighborhoodSlug: "alfama",
    band: "€€€",
    priceFrom: 180,
    style: "Refúgio com rooftop",
    bestFor: "Casais",
    blurb:
      "Hotel boutique orientado para adultos, escondido nas vielas de Alfama, com um wine bar de terraço em azulejo vermelho e uma pequena piscina no rooftop virada para o Tejo. Os quartos são compactos; paga-se pela vista e pelo silêncio.",
    image: px(2290753),
    imageAlt: "Terraço de hotel ao entardecer com mesas postas para jantar",
  },
  {
    slug: "the-lumiares",
    citySlug: "lisbon",
    name: "The Lumiares",
    neighborhoodSlug: "bairro-alto",
    band: "€€€",
    priceFrom: 200,
    style: "Suites-apartamento",
    bestFor: "Estadias longas",
    blurb:
      "Apartamentos completos com cozinha num palácio convertido, na zona alta e mais calma do Bairro Alto, com um rooftop bar que os lisboetas usam de verdade. Peça uma suite virada para as traseiras se quiser dormir antes das 2h ao fim de semana.",
    image: px(262048),
    imageAlt: "Suite de hotel clara e elegante com lustre e cama ampla",
  },
  {
    slug: "my-story-rossio",
    citySlug: "lisbon",
    name: "My Story Hotel Rossio",
    neighborhoodSlug: "baixa-chiado",
    band: "€€",
    priceFrom: 110,
    style: "Central e prático",
    bestFor: "Primeira visita",
    blurb:
      "Mesmo na praça do Rossio, o que deixa o elétrico 28, o elevador de Santa Justa e as duas colinas do centro a cinco minutos a pé. Os quartos sobre a praça são os fotogénicos; os das traseiras são os silenciosos.",
    image: px(2507010),
    imageAlt: "Lobby de hotel moderno e luminoso com janelas do chão ao teto",
  },
  {
    slug: "the-independente",
    citySlug: "lisbon",
    name: "The Independente Suites & Terrace",
    neighborhoodSlug: "principe-real",
    band: "€",
    priceFrom: 45,
    style: "Hostel com suites",
    bestFor: "Orçamento apertado",
    blurb:
      "Um palacete junto ao miradouro de São Pedro de Alcântara, dividido entre dormitórios e suites privadas surpreendentemente boas. Localização de cinco estrelas a preço de hostel, a dois passos dos cafés do Príncipe Real.",
    image: px(279805),
    imageAlt: "Candeeiro de cabeceira e detalhe da cama num quarto de guesthouse",
  },

  // ---- Praga ----
  {
    slug: "hotel-paris-prague",
    citySlug: "prague",
    name: "Hotel Paris Prague",
    neighborhoodSlug: "stare-mesto",
    band: "€€€",
    priceFrom: 210,
    style: "Monumento Arte Nova",
    bestFor: "Glamour de época",
    blurb:
      "Um monumento Arte Nova de 1904 ao lado da Casa Municipal, mantido próximo do estado original até aos apliques de latão. Fica a dois minutos da praça da República e a oito a pé da praça da Cidade Velha.",
    image: px(1001965),
    imageAlt: "Lobby histórico ornamentado com arcos e plantas",
  },
  {
    slug: "golden-well",
    citySlug: "prague",
    name: "Golden Well Hotel",
    neighborhoodSlug: "mala-strana",
    band: "€€€",
    priceFrom: 240,
    style: "Vistas junto ao castelo",
    bestFor: "Casais",
    blurb:
      "Encaixado sob as muralhas do castelo, por cima dos jardins Ledeburg, com pequenos-almoços no terraço a dominar todas as torres de Malá Strana. A subida para casa é íngreme, e compensa todas as noites.",
    image: px(164595),
    imageAlt: "Quarto de hotel de gama alta com madeira escura e roupa de cama impecável",
  },
  {
    slug: "hotel-josef",
    citySlug: "prague",
    name: "Hotel Josef",
    neighborhoodSlug: "stare-mesto",
    band: "€€",
    priceFrom: 130,
    style: "Clássico de design",
    bestFor: "Amantes de design",
    blurb:
      "O hotel de design com escadaria de vidro de Eva Jiřičná fica entre a praça da Cidade Velha e as sinagogas de Josefov. Os quartos superiores nos pisos altos têm vista para o castelo; o pequeno-almoço estilo padaria é dos melhores do centro.",
    image: px(1267438),
    imageAlt: "Quarto de hotel minimalista em tons escuros com luz baixa",
  },
  {
    slug: "residence-agnes",
    citySlug: "prague",
    name: "Residence Agnes",
    neighborhoodSlug: "stare-mesto",
    band: "€",
    priceFrom: 95,
    style: "B&B tranquilo",
    bestFor: "Caça ao valor",
    blurb:
      "Uma pequena guesthouse numa rua silenciosa junto ao convento de Santa Inês, a dez minutos a pé da praça da Cidade Velha. O pequeno-almoço feito na hora e as reservas de restaurante da equipa explicam porque lidera os rankings de avaliações.",
    image: px(97083),
    imageAlt: "Quarto clássico de guesthouse com cabeceira de madeira e flores frescas",
  },

  // ---- Sevilha ----
  {
    slug: "eme-catedral",
    citySlug: "seville",
    name: "EME Catedral Mercer",
    neighborhoodSlug: "el-arenal",
    band: "€€€",
    priceFrom: 230,
    style: "Piscina no rooftop",
    bestFor: "Copos ao pôr do sol",
    blurb:
      "Mesmo em frente à catedral, com uma piscina de imersão e um bar no rooftop a olhar para a Giralda. Mesmo que durma noutro sítio, o terraço ao pôr do sol explica o preço dos quartos.",
    image: px(261102),
    imageAlt: "Piscina de rooftop de hotel com espreguiçadeiras ao entardecer",
  },
  {
    slug: "casa-1800",
    citySlug: "seville",
    name: "Hotel Casa 1800",
    neighborhoodSlug: "santa-cruz",
    band: "€€",
    priceFrom: 150,
    style: "Casa senhorial com pátio",
    bestFor: "Romântico",
    blurb:
      "Uma mansão do século XIX em torno de um pátio de mármore, em pleno Santa Cruz, com lanche da tarde gratuito e um pequeno rooftop virado para a Giralda. Reserve os quartos da torre pela vista.",
    image: px(1579253),
    imageAlt: "Quarto romântico de hotel com espumante e tabuleiro de sobremesas",
  },
  {
    slug: "las-casas-de-la-juderia",
    citySlug: "seville",
    name: "Las Casas de la Judería",
    neighborhoodSlug: "santa-cruz",
    band: "€€",
    priceFrom: 120,
    style: "Labirinto de pátios",
    bestFor: "Ambiente",
    blurb:
      "Vinte e sete casas antigas da Judería ligadas por túneis, pátios e fontes: ir ao pequeno-almoço já é turismo. Os quartos variam muito; peça um sobre um pátio, não sobre a rua.",
    image: px(279746),
    imageAlt: "Quarto tradicional de guesthouse com mobiliário de madeira",
  },
  {
    slug: "hotel-amadeus",
    citySlug: "seville",
    name: "Hotel Amadeus & La Musica",
    neighborhoodSlug: "santa-cruz",
    band: "€",
    priceFrom: 85,
    style: "Gestão familiar",
    bestFor: "Orçamento apertado",
    blurb:
      "Um hotel familiar com tema musical em Santa Cruz, com salas de ensaio insonorizadas, um piano que os hóspedes podem tocar e um rooftop com vista para a catedral. Uma das melhores relações preço-localização do centro histórico.",
    image: px(271624),
    imageAlt: "Quarto de hotel simples e luminoso com secretária e cama de casal",
  },
];

export default hotelsPt;
