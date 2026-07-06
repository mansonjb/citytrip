import type { CityData } from "../types";

const barcelonaPt: CityData = {
  city: {
    slug: "barcelona",
    name: "Barcelona",
    country: "Espanha",
    countrySlug: "spain",
    lat: 41.3874,
    lng: 2.1686,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "BCN",
    airportToCenter:
      "Aerobus a partir dos dois terminais para a Placa Catalunya, cerca de 35 min, 7,25 EUR por trajeto, com partidas a cada 5-10 min. Opcoes mais baratas: o comboio R2 Nord do T2 para o Passeig de Gracia ou Sants por cerca de 4,90 EUR (ou gratis com um passe T-casual/Hola), ou a linha de metro L9 Sud, panoramica mas lenta e com varias mudancas ate chegar ao centro.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [8],
    monthlyNotes: {
      1: "Fresco e luminoso, com 14-15C, a menor afluencia do ano e os quartos mais baratos, embora o mar esteja demasiado frio para a praia. O desfile dos Reis Magos (Cavalcada de Reis) a 5 de janeiro enche as ruas de carros alegoricos e doces, e os saldos de janeiro enchem as lojas.",
      2: "Ainda ameno, com 15C, pouca gente e precos baixos, e muitas vezes limpo o suficiente para um almoco demorado ao ar livre ao meio-dia. O Carnaval (Carnestoltes) anima a semana antes da Quaresma com desfiles de mascaras nos bairros, e o Santa Eulalia, por volta de 12 de fevereiro, traz torres humanas e gigantes a cidade velha.",
      3: "As maximas aproximam-se dos 17-18C e os dias alongam-se, com os turistas a chegar so no fim do mes, perto da Pascoa. Fique atento ao calendario: se a Semana Santa cair em marco, o centro e os hoteis enchem e os precos sobem, caso contrario continua a ser um mes sossegado e de boa relacao qualidade-preco.",
      4: "Um dos melhores meses, com 19-20C, tardes quentes e colinas verdes, embora a Pascoa possa encher o centro se calhar agora. O Sant Jordi, a 23 de abril, e o ponto alto, um dia de livros e rosas em que La Rambla e o Passeig de Gracia se enchem de bancas de livros ao ar livre e os casais trocam rosas.",
      5: "Fiavelmente quente, com 22-23C, longos serdes e pouca chuva, sem duvida o melhor mes para visitar. O Primavera Sound cai normalmente no fim de maio ou inicio de junho e esgota os hoteis depressa, por isso verifique as datas do festival antes de fixar as suas, e comece a serio a epoca dos jantares na esplanada.",
      6: "Quente, com 26-27C, solarengo e movimentado a medida que arranca a epoca de verao e as praias enchem aos fins de semana. O Sant Joan, na noite de 23 de junho, e uma festa desenfreada de fogo de artificio e fogueiras na praia que dura ate de madrugada, por isso conte com barulho, multidoes enormes junto a agua e cava por todo o lado.",
      7: "Pleno verao, com 28-29C, humido e cheio de gente, com as praias apinhadas e os grandes monumentos de Gaudi esgotados com dias de antecedencia. Faca a Sagrada Familia e o Park Guell logo a abertura, e depois refugie-se no mar ou numa esplanada a sombra nas horas pegajosas do inicio da tarde.",
      8: "O mes mais quente, mais humido e mais cheio de gente, com 29C, e o mes a evitar: muitas lojas e restaurantes de gestao familiar fecham para ferias e os locais partem para o litoral. Se agosto for inevitavel, reserve ar condicionado, concentre as visitas no inicio da manha e note a Festa Major de Gracia, em meados de agosto, quando as ruas de Gracia competem em decoracoes elaboradas.",
      9: "Calor de verao sem o pior da onda de calor: 27C ao inicio, a aliviar ao longo do mes, com o mar ainda de banhos. La Merce, o maior festival da cidade, decorre por volta de 24 de setembro, com torres humanas, correfocs (corridas de fogo), gigantes e concertos gratuitos por todo o centro, e e o melhor momento para sentir a cultura propria da cidade.",
      10: "Dias quentes por volta dos 23C, com o regresso das primeiras chuvas a serio e uma luz baixa magnifica, e a afluencia a diminuir bastante depois da primeira semana. E uma otima aposta de meia-epoca tanto pelo tempo como pela relacao qualidade-preco dos hoteis, com as esplanadas ainda abertas ao meio-dia.",
      11: "Mais fresco, com 18-19C, e periodos de chuva regulares, mas muitos dias luminosos entre as frentes e os grandes monumentos mais tranquilos do outono. Voltam os precos de epoca baixa e consegue entrar sem reserva em restaurantes que em maio exigiriam marcacao, embora os dias de praia tenham acabado.",
      12: "Ameno para o inverno, com 15-16C, mas mais chuvoso, com mercados de Natal como a Fira de Santa Llucia junto a catedral e o curioso caganer catalao para procurar. Sossegado ate ao periodo do Natal ao Ano Novo, quando as tarifas sobem e as ruas a volta da catedral se enchem de luzes e de gente.",
    },
    climate: {
      1: { highC: 14, lowC: 5, rainyDays: 5 },
      2: { highC: 15, lowC: 5, rainyDays: 5 },
      3: { highC: 17, lowC: 7, rainyDays: 5 },
      4: { highC: 19, lowC: 9, rainyDays: 6 },
      5: { highC: 22, lowC: 13, rainyDays: 6 },
      6: { highC: 26, lowC: 17, rainyDays: 4 },
      7: { highC: 29, lowC: 20, rainyDays: 2 },
      8: { highC: 29, lowC: 20, rainyDays: 4 },
      9: { highC: 27, lowC: 18, rainyDays: 5 },
      10: { highC: 23, lowC: 14, rainyDays: 7 },
      11: { highC: 18, lowC: 9, rainyDays: 6 },
      12: { highC: 15, lowC: 6, rainyDays: 6 },
    },
    budgetLevel: "mid",
    budgetPerDay: { budget: 70, mid: 150, high: 300 },
    tagline: "Gaudi, vielas goticas e a praia numa so cidade que se percorre a pe.",
    heroIntro:
      "Barcelona junta os marcos modernistas selvagens de Gaudi a uma cidade velha medieval e a uma praia urbana, tudo num centro compacto que se percorre quase todo a pe, com o metro para os pontos mais afastados. Tres dias sao o ponto certo, com honestidade, para dividir o roteiro de Gaudi, o nucleo gotico e uma tarde tranquila a beira-mar sem uma marcha forcada. Venha na primavera ou no inicio do outono, reserve a Sagrada Familia e o Park Guell semanas antes de voar, e mantenha as malas fechadas, porque esta e uma das capitais europeias do carteirista.",
    accent: { from: "#1B9AAA", to: "#E8632C", ink: "#0C4A52" },
    neighborhoodSlugs: [
      "barri-gotic",
      "el-born",
      "eixample",
      "gracia",
      "barceloneta",
    ],
    nearbyCitySlugs: ["seville", "granada"],
  },

  neighborhoods: [
    {
      slug: "barri-gotic",
      citySlug: "barcelona",
      name: "Barri Gotic",
      lat: 41.3833,
      lng: 2.1777,
      bestFor: ["first-time", "romantic", "budget"],
      vibe: "O coracao medieval da cidade, um labirinto de vielas estreitas de pedra entre a catedral e La Rambla que se abre para pracas escondidas. Tudo o que um visitante de primeira vez quer ver fica a dez minutos a pe, e as vielas ganham atmosfera a noite, quando as multidoes do dia se dissipam. E central e barato para dormir, mas e tambem o bairro mais movimentado e mais propicio a carteiristas.",
      pros: [
        "Vai a pe ate a catedral, La Rambla, o porto e El Born sem transportes",
        "Cheio de bares de tapas baratos, cafes e pequenos hoteis",
        "Vielas de pedra cheias de atmosfera que se esvaziam e brilham depois do jantar",
      ],
      cons: [
        "A zona com mais carteiristas da cidade, sobretudo perto de La Rambla",
        "Barulhento com o movimento de peoes e bares ate tarde, mau para quem tem sono leve",
        "Alguns restaurantes nas pracas principais vivem so da localizacao",
      ],
    },
    {
      slug: "el-born",
      citySlug: "barcelona",
      name: "El Born",
      lat: 41.3847,
      lng: 2.1817,
      bestFor: ["romantic", "nightlife", "local"],
      vibe: "O bairro mais elegante da cidade velha, mesmo a leste do nucleo gotico, construido em torno da igreja de Santa Maria del Mar e do Museu Picasso. Boutiques, wine bars e bares de cocktails alinham-se pelas vielas medievais, e mantem-se animado sem parecer uma armadilha para turistas. Da-lhe a atmosfera da cidade velha com um lado mais adulto e orientado para o design.",
      pros: [
        "A melhor concentracao de wine bars, bares de cocktails e tapas da cidade velha",
        "Vai a pe ate ao Museu Picasso, Santa Maria del Mar e ao parque da Ciutadella",
        "Vielas de calcada que se mantem animadas mas guardam um ar local e boutique",
      ],
      cons: [
        "Os bares a volta das vielas principais ficam barulhentos as noites de fim de semana",
        "Sem metro mesmo dentro dele, embora Jaume I e Barceloneta fiquem perto",
        "Os hoteis sao mais caros do que no bairro gotico ao lado",
      ],
    },
    {
      slug: "eixample",
      citySlug: "barcelona",
      name: "Eixample",
      lat: 41.3915,
      lng: 2.1649,
      bestFor: ["first-time", "family", "romantic"],
      vibe: "A grelha elegante tracada no seculo XIX, com largas avenidas, esquinas chanfradas e a maior concentracao de fachadas modernistas da cidade ao longo do Passeig de Gracia. Deixa-o a uma curta caminhada da Casa Batllo, La Pedrera e Sagrada Familia, numa grelha de metro bem servida. Calmo, ordenado e central, sem o aperto da cidade velha.",
      pros: [
        "Vai a pe ate as casas de Gaudi no Passeig de Gracia e fica perto da Sagrada Familia",
        "Grelha de metro densa, direta ao comboio do aeroporto e a todo o lado",
        "Ruas largas e sossegadas a noite e uma boa oferta de hoteis de gama media",
      ],
      cons: [
        "Parece mais funcional e menos romantico do que as vielas da cidade velha",
        "O trecho mesmo no Passeig de Gracia e caro para dormir",
        "Alguns quarteiroes ficam a uma longa caminhada em linha reta da praia e do porto",
      ],
    },
    {
      slug: "gracia",
      citySlug: "barcelona",
      name: "Gracia",
      lat: 41.4022,
      lng: 2.1568,
      bestFor: ["local", "budget", "nightlife"],
      vibe: "Uma antiga aldeia engolida pela cidade, a norte do Eixample, que mantem o seu ambiente de pequenas pracas e uma forte identidade local. Lojas independentes, bares bomios e restaurantes de gestao familiar rodeiam pracas onde os locais bebem ao ar livre nas noites quentes. E a base para quem quer o bairro de verdade em vez do postal, com o Park Guell na colina acima.",
      pros: [
        "Vida de bairro genuina, pracas cheias de locais, nao de grupos de turistas",
        "Melhor relacao qualidade-preco a mesa e um ambiente de bares animado mas sem pretensoes",
        "Sobe-se a pe ate ao Park Guell e vai-se de metro ao centro",
      ],
      cons: [
        "A 20-25 minutos a pe ou a um salto de metro da cidade velha e da praia",
        "As pracas populares ficam barulhentas ao serdo dos fins de semana",
        "Menos hoteis de nome, mais apartamentos e pequenas casas de hospedes",
      ],
    },
    {
      slug: "barceloneta",
      citySlug: "barcelona",
      name: "Barceloneta",
      lat: 41.3797,
      lng: 2.1894,
      bestFor: ["family", "budget", "local"],
      vibe: "O antigo bairro dos pescadores encaixado entre o porto e a praia urbana, uma grelha apertada de quarteiroes estreitos que se abre diretamente para a areia. E o sitio para dormir se a praia for o objetivo, com marisqueiras e o passadico a porta. Cheio de carater de dia, e os bares da frente-mar mantem-no movimentado noite dentro no verao.",
      pros: [
        "A poucos passos da praia urbana e do passadico, sem transportes",
        "Metro de Barceloneta na linha L4, a umas paragens da cidade velha",
        "Marisqueiras e bares de vermute genuinos a uma rua da agua",
      ],
      cons: [
        "Os restaurantes da frente-mar sao armadilhas para turistas, coma uma rua para dentro",
        "Apartamentos apertados e quentes no verao, e barulhentos perto dos bares da praia",
        "A uma caminhada ou viagem de metro dos monumentos de Gaudi la em cima no Eixample",
      ],
    },
  ],

  pois: [
    {
      slug: "sagrada-familia",
      citySlug: "barcelona",
      name: "Sagrada Familia",
      lat: 41.4036,
      lng: 2.1744,
      kind: "sight",
      needsBooking: true,
      tip: "Compre um bilhete com hora marcada online com dias ou semanas de antecedencia, esgota e nao ha opcao util de entrada a porta em epoca alta. Reserve o primeiro horario apos a abertura para o interior mais vazio e a melhor luz da manha atraves das janelas da fachada da Natividade, a leste, que brilham de azul e verde cedo. A subida a torre e um extra pago a parte, com o seu proprio horario marcado, por isso adicione-o na reserva, nao no proprio dia.",
    },
    {
      slug: "park-guell",
      citySlug: "barcelona",
      name: "Park Guell",
      lat: 41.4145,
      lng: 2.1527,
      kind: "park",
      needsBooking: true,
      tip: "A Zona Monumental, com o terraco de mosaicos e o famoso lagarto, exige um bilhete com hora marcada que esgota com dias de antecedencia, por isso reserve online e nunca va a porta. Escolha o primeiro horario do dia, por volta das 9h30, para escapar as multidoes e ao calor no terraco exposto, e use as escadas rolantes exteriores da Baixada de la Gloria para poupar a subida ingreme. O parque arborizado em redor e gratuito se so quiser as vistas sem os mosaicos.",
    },
    {
      slug: "casa-batllo",
      citySlug: "barcelona",
      name: "Casa Batllo",
      lat: 41.3917,
      lng: 2.1649,
      kind: "sight",
      needsBooking: true,
      tip: "A casa de escamas de dragao de Gaudi no Passeig de Gracia vende bilhetes com hora marcada que se esgotam depressa em epoca alta, por isso reserve online em vez de fazer fila. Va a abertura ou no ultimo horario antes de fechar para evitar o aperto dos grupos na escadaria estreita, e use o tablet com audio aumentado incluido para os detalhes animados. Combine-a com La Pedrera, a cinco minutos a pe pela mesma avenida.",
    },
    {
      slug: "la-pedrera",
      citySlug: "barcelona",
      name: "La Pedrera (Casa Mila)",
      lat: 41.3953,
      lng: 2.1619,
      kind: "sight",
      needsBooking: true,
      tip: "O predio de apartamentos com fachada ondulada de Gaudi e outro ponto de bilhete com hora marcada, por isso reserve online em vez de aparecer. A cobertura com as chamines em forma de elmo de guerreiro e a recompensa, melhor no ultimo horario diurno para uma luz mais suave, e no verao a sessao noturna a parte 'Noites de Gaudi' na cobertura, com musica e bebidas, vale o extra. Fica a cinco minutos a subir o Passeig de Gracia a partir da Casa Batllo, por isso faca as duas juntas.",
    },
    {
      slug: "la-rambla",
      citySlug: "barcelona",
      name: "La Rambla",
      lat: 41.3809,
      lng: 2.1729,
      kind: "sight",
      needsBooking: false,
      tip: "Esta e a arteria turistica para percorrer uma vez pela animacao e pelas estatuas humanas, nao para comer ou beber, onde as esplanadas cobram o dobro por comida mediocre. E o pior ponto de carteiristas da cidade, por isso mantenha a mala fechada e a frente e o telemovel fora do bolso de tras. Enfie-se no mercado da Boqueria a meio e nas ruas do Barri Gotic a leste para o que realmente quiser.",
    },
    {
      slug: "barcelona-cathedral",
      citySlug: "barcelona",
      name: "Barri Gotic e Catedral de Barcelona",
      lat: 41.3839,
      lng: 2.1762,
      kind: "sight",
      needsBooking: false,
      tip: "A catedral gotica cobra uma pequena entrada aos turistas durante o dia (cerca de 9 EUR, incluindo o elevador para a cobertura e o claustro com os seus gansos residentes), e as horas gratuitas ficam reservadas ao culto ao inicio e ao fim do dia. Va a abertura para ter o claustro tranquilo, e depois perca-se de proposito nas vielas em redor, rumo a Placa Sant Felip Neri e ao bairro judeu medieval. O terraco da cobertura da uma vista de perto sobre os pinaculos da cidade velha.",
    },
    {
      slug: "picasso-museum",
      citySlug: "barcelona",
      name: "Museu Picasso",
      lat: 41.3852,
      lng: 2.1807,
      kind: "museum",
      needsBooking: true,
      tip: "Reserve um horario marcado online, a fila na viela estreita de El Born e longa e o museu limita o numero de visitantes. A colecao e mais forte nos primeiros anos de Picasso em Barcelona e na sua serie Las Meninas, nao na sua obra tardia mais famosa, por isso venha pela formacao e nao pelos grandes sucessos. A entrada e gratuita nas noites de quinta a partir das 17h e no primeiro domingo do mes, mas ainda assim tem de reservar o horario gratuito online com antecedencia.",
    },
    {
      slug: "la-boqueria",
      citySlug: "barcelona",
      name: "Mercado de La Boqueria",
      lat: 41.3818,
      lng: 2.1717,
      kind: "food",
      needsBooking: false,
      tip: "O mercado coberto ao lado de La Rambla funciona de segunda a sabado, mais ou menos das 8h as 20h30, e e melhor a meio da manha, antes dos grupos de turistas e depois de os comerciantes estarem montados. As bancas mesmo a frente estao inflacionadas para turistas, por isso va ao fundo e as laterais para os verdadeiros peixeiros, balcoes de presunto e um banco num bar a trabalhar, como o Pinotxo ou o El Quim, para pratos feitos na hora. Fecha aos domingos.",
    },
    {
      slug: "barceloneta-beach",
      citySlug: "barcelona",
      name: "Praia da Barceloneta",
      lat: 41.378,
      lng: 2.1925,
      kind: "experience",
      needsBooking: false,
      tip: "A praia urbana mais proxima do centro, apinhada no verao, por isso chegue antes das 11h para um lugar e nunca deixe malas sem vigilancia, ja que o furto na praia e constante. Os restaurantes de paella e sangria da frente-mar ao longo do passadico sao armadilhas caras, por isso coma uma rua para dentro, na Barceloneta propriamente dita, ou leve um piquenique. Para areia mais calma e limpa, va para norte, ate as praias de Bogatell ou Mar Bella.",
    },
    {
      slug: "montjuic",
      citySlug: "barcelona",
      name: "Montjuic e Fonte Magica",
      lat: 41.3711,
      lng: 2.1519,
      kind: "viewpoint",
      needsBooking: false,
      tip: "A colina acima do porto reune a fundacao Joan Miro, o museu de arte MNAC, jardins e o castelo, por isso reserve-lhe meio dia e suba de funicular e depois de teleferico para poupar a subida. A Fonte Magica, abaixo do MNAC, faz espetaculos gratuitos de luz e musica em noites selecionadas (normalmente de quinta a sabado no verao, menos noites fora de epoca), por isso confirme o horario atual antes de ir, ja que fica desligada no inverno e em periodos de seca. Chegue 20 minutos mais cedo para um lugar nas escadas.",
    },
    {
      slug: "palau-de-la-musica",
      citySlug: "barcelona",
      name: "Palau de la Musica Catalana",
      lat: 41.3875,
      lng: 2.1751,
      kind: "sight",
      needsBooking: true,
      tip: "A sala de concertos modernista so se visita numa visita guiada com hora marcada ou assistindo a um concerto, e os horarios da visita esgotam, por isso reserve online com antecedencia. A claraboia de vitral e a fachada de colunas de mosaico da sala principal sao a razao para vir, e uma visita guiada curta chega para as ver. Se puder, reserve antes um concerto real ao serdo, muitas vezes um programa bem-preco de guitarra espanhola ou de musica catalana, para ver a sala iluminada e em uso.",
    },
    {
      slug: "santa-maria-del-mar",
      citySlug: "barcelona",
      name: "El Born e Santa Maria del Mar",
      lat: 41.3838,
      lng: 2.182,
      kind: "sight",
      needsBooking: false,
      tip: "A igreja do seculo XIV e de entrada gratuita nas horas de culto mas cobra uma pequena taxa (cerca de 10 EUR) pela visita guiada a cobertura e a cripta, que e a que vale a pena pela vista e pelo interior gotico catalao puro. Venha as vielas de El Born em redor ao inicio da noite pelos wine bars e bares de tapas, procurando fora do Passeig del Born principal para melhor relacao qualidade-preco. A nave altiva e despojada da igreja e o antidoto ao excesso de Gaudi.",
    },
    {
      slug: "bunkers-del-carmel",
      citySlug: "barcelona",
      name: "Miradouro dos Bunkers del Carmel",
      lat: 41.4194,
      lng: 2.1622,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Os antigos bunkers antiaereos da guerra civil no Turo de la Rovira dao a melhor vista gratuita de 360 graus sobre toda a cidade e para o mar, e e o ponto de por do sol dos locais. La em cima nao ha loja e e uma subida de 15 minutos a pe a partir da paragem de autocarro mais proxima, por isso leve as suas proprias bebidas e petiscos, mais um agasalho, ja que refresca. O acesso esta oficialmente restrito depois das 21h30 para conter o barulho, por isso venha para o por do sol, nao para uma noite tardia.",
    },
    {
      slug: "parc-de-la-ciutadella",
      citySlug: "barcelona",
      name: "Parc de la Ciutadella",
      lat: 41.3884,
      lng: 2.1866,
      kind: "park",
      needsBooking: false,
      tip: "O grande espaco verde central junto a El Born e gratuito e esta aberto todo o dia, o sitio natural para abrandar entre as visitas da cidade velha. Alugue um barco a remos no lago, veja a ornamentada fonte da Cascada que um jovem Gaudi ajudou a desenhar, e faca piquenique nos relvados com os locais numa tarde quente. O parlamento catalao e um pequeno jardim zoologico ficam dentro dos terrenos, se levar criancas.",
    },
  ],

  itineraries: [
    {
      citySlug: "barcelona",
      days: 2,
      summary:
        "Dois dias cobrem os pontos altos de Barcelona, mas e uma corrida aos destaques, porque a cidade pede mesmo tres para dividir como deve ser o roteiro de Gaudi, a cidade velha e a praia. Em 48 horas consegue fazer os essenciais de Gaudi no primeiro dia (Sagrada Familia, as casas do Passeig de Gracia, Park Guell) e a cidade velha no segundo (a catedral, El Born, o Museu Picasso, La Boqueria, La Rambla), espremendo uma paragem curta de praia ou por do sol se a energia aguentar. O que tem de cortar: Montjuic, o Palau de la Musica, uma tarde de praia a serio e qualquer demora tranquila, por isso e uma marcha. Serve para um fim de semana, uma escala ou uma primeira prova. Os inegociaveis: reserve os bilhetes com hora marcada da Sagrada Familia e do Park Guell semanas antes de voar, mais a Casa Batllo ou La Pedrera, ou nao entra de todo. Instale-se no Barri Gotic para que o dia da cidade velha corra a pe e os saltos de metro de Gaudi sejam rapidos. Mantenha as malas fechadas, a cidade velha e o metro sao pontos quentes de carteiristas.",
      stayNeighborhoodSlug: "barri-gotic",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Roteiro de Gaudi: Sagrada Familia, Passeig de Gracia, Park Guell",
          morning: [
            {
              poiSlug: "sagrada-familia",
              text: "Comece na Sagrada Familia no seu primeiro horario pre-reservado, antes das multidoes e com o sol da manha a iluminar as janelas azul-esverdeadas da fachada da Natividade. Reserve-lhe uns bons 90 minutos para o interior e as fachadas, e suba a uma torre se acrescentou o horario.",
              durationMin: 90,
            },
            {
              poiSlug: "casa-batllo",
              text: "Apanhe o metro duas paragens ate ao Passeig de Gracia para as casas de Gaudi. Faca a Casa Batllo no seu horario marcado pela fachada de escamas de dragao e pelo tablet de audio animado, e depois suba cinco minutos pela avenida.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "la-pedrera",
              text: "Veja La Pedrera (Casa Mila) cinco minutos acima na mesma avenida, no seu horario marcado, pela fachada ondulada e pelas chamines em forma de elmo de guerreiro na cobertura. Almoce depressa numa rua lateral fora do Passeig de Gracia, em vez das caras esplanadas da avenida.",
              durationMin: 90,
            },
            {
              poiSlug: "park-guell",
              text: "Suba ao Park Guell para um horario marcado de tarde na Zona Monumental, apanhando o metro e depois as escadas rolantes exteriores para poupar a subida ingreme. Veja o terraco de mosaicos e o lagarto, e depois fique pelos miradouros arborizados gratuitos sobre a cidade.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "santa-maria-del-mar",
              text: "Volte a descer e dedique a noite a El Born, vagueando pelas vielas medievais a volta de Santa Maria del Mar enquanto os wine bars enchem. Reserve uma mesa de tapas fora do Passeig del Born principal, onde estao os sitios com melhor relacao qualidade-preco, para volta das 20h30.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Cidade velha: catedral, Picasso, Boqueria, La Rambla",
          morning: [
            {
              poiSlug: "barcelona-cathedral",
              text: "Comece na Catedral de Barcelona a abertura para ter o claustro e os seus gansos tranquilos, e suba ao terraco da cobertura pela vista sobre os pinaculos goticos. Depois perca-se de proposito no Barri Gotic, rumo a Placa Sant Felip Neri e ao antigo bairro judeu.",
              durationMin: 90,
            },
            {
              poiSlug: "picasso-museum",
              text: "Va a pe para leste, ate El Born, ao Museu Picasso no seu horario pre-reservado, pelos primeiros anos em Barcelona e pela serie Las Meninas em vez da obra tardia famosa. E um museu compacto, por isso 75 minutos chegam antes do almoco.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "la-boqueria",
              text: "Corte ate ao mercado de La Boqueria, ao lado de La Rambla, para almocar, indo as bancas do fundo para um banco num bar a trabalhar, como o Pinotxo ou o El Quim, para pratos feitos na hora. As bancas da frente estao inflacionadas para turistas, por isso continue a andar.",
              durationMin: 75,
            },
            {
              poiSlug: "la-rambla",
              text: "Percorra La Rambla de ponta a ponta uma vez pela animacao e pelas estatuas humanas, com a mala fechada e a frente, ja que este e o pior ponto de carteiristas da cidade. Siga-a ate a coluna de Colombo e ao porto la em baixo.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "barceloneta-beach",
              text: "A partir do porto, percorra o passadico ate a praia da Barceloneta para um fim de tarde de areia e um mergulho, se estiver quente o suficiente. Vigie as malas, ja que o furto na praia e constante.",
              durationMin: 90,
            },
            {
              text: "Faca um jantar de despedida na Barceloneta uma rua para dentro da frente-mar, onde o marisco e honesto e as armadilhas ficam no passadico. Peca peixe fresco ou uma paella a serio a precos de almoco em vez das versoes de menu turistico junto a agua.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "barcelona",
      days: 3,
      summary:
        "Sim, tres dias e a duracao certa para Barcelona, e e o que recomendamos para uma primeira visita. Da ao roteiro de Gaudi um dia inteiro (Sagrada Familia, as casas do Passeig de Gracia, Park Guell), a cidade velha o seu proprio dia (a catedral, El Born, o Museu Picasso, La Boqueria, La Rambla), e um terceiro dia que mistura a praia com a sala de concertos modernista e o parque da Ciutadella a um ritmo mais folgado. Come-se bem pelo Eixample, El Born e Barceloneta, cabe uma tarde de praia a serio e um por do sol, e ainda se senta numa praca em vez de passar por ela a correr. O que na mesma fica de fora: Montjuic por inteiro e qualquer passeio de um dia, que e exatamente o que um quarto dia acrescenta. Serve para quem visita pela primeira vez, casais, e quem segue depois para Sevilha ou Granada. Fique no Eixample: vai a pe as casas de Gaudi no Passeig de Gracia, fica perto da Sagrada Familia, e a sua grelha de metro torna a cidade velha e a praia rapidas de alcancar. Reserve a Sagrada Familia, o Park Guell e as casas do Passeig de Gracia semanas antes de voar, e mantenha as malas fechadas na cidade velha e no metro.",
      stayNeighborhoodSlug: "eixample",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Roteiro de Gaudi: Sagrada Familia, Passeig de Gracia, Park Guell",
          morning: [
            {
              poiSlug: "sagrada-familia",
              text: "Comece na Sagrada Familia no seu primeiro horario pre-reservado, a frente das multidoes e com a luz da manha atraves das janelas da Natividade, a leste. Reserve uns bons 90 minutos para o interior e ambas as fachadas, acrescentando uma subida a torre se reservou uma.",
              durationMin: 90,
            },
            {
              poiSlug: "casa-batllo",
              text: "Va a pe ou apanhe uma paragem de metro ate ao Passeig de Gracia para a Casa Batllo no seu horario marcado, pela fachada de escamas de dragao e pelo tablet de audio animado. A partir da sua base no Eixample fica tudo perto, por isso mantenha o ritmo descontraido.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "la-pedrera",
              text: "Veja La Pedrera (Casa Mila) cinco minutos acima na mesma avenida no seu horario marcado, pela fachada ondulada e pelas chamines em forma de elmo de guerreiro na cobertura. Almoce numa rua lateral sossegada fora do Passeig de Gracia, nao nas esplanadas da avenida.",
              durationMin: 90,
            },
            {
              poiSlug: "park-guell",
              text: "Suba ao Park Guell para um horario marcado de tarde na Zona Monumental, usando o metro e depois as escadas rolantes exteriores para saltar a subida ingreme. Veja o terraco de mosaicos e o lagarto, e depois demore-se nos miradouros arborizados gratuitos enquanto a luz suaviza.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              text: "Volte a descer para jantar no Eixample perto da sua base, onde os bares de tapas e os sitios de vermute sao solidos e sem o acrescimo da cidade velha. Reserve com antecedencia para qualquer sitio bem avaliado, as boas mesas enchem pelas 21h.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Cidade velha: catedral, El Born, Picasso, Boqueria, La Rambla",
          morning: [
            {
              poiSlug: "barcelona-cathedral",
              text: "Comece na Catedral de Barcelona a abertura pelo claustro tranquilo e os seus gansos, e suba ao terraco da cobertura pela vista sobre os pinaculos goticos. Vagueie depois pelas vielas do Barri Gotic, rumo a Placa Sant Felip Neri e ao bairro judeu medieval.",
              durationMin: 90,
            },
            {
              poiSlug: "picasso-museum",
              text: "Va a pe para leste, ate El Born, ao Museu Picasso no seu horario pre-reservado, forte nos primeiros anos em Barcelona e na serie Las Meninas. E compacto, por isso 75 minutos cobrem-no antes do almoco.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "santa-maria-del-mar",
              text: "Entre em Santa Maria del Mar ali perto pela nave altiva e despojada do gotico catalao, e faca a visita de pequena taxa a cobertura e a cripta se a vista o tentar. Depois passeie pelas boutiques e vielas de El Born a volta.",
              durationMin: 60,
            },
            {
              poiSlug: "la-boqueria",
              text: "Atravesse ate ao mercado de La Boqueria, ao lado de La Rambla, para um almoco tardio num bar de banca do fundo, como o Pinotxo ou o El Quim, saltando as bancas inflacionadas da frente. Depois percorra La Rambla de ponta a ponta uma vez pela animacao, mala fechada e a frente, ate ao porto.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "bunkers-del-carmel",
              text: "Suba aos Bunkers del Carmel para o por do sol, o miradouro gratuito de 360 graus sobre toda a cidade, apanhando um autocarro quase todo o caminho e depois a subida de 15 minutos a pe. Leve as suas proprias bebidas e petiscos, ja que la em cima nao ha loja, e venha para o por do sol e nao para uma noite tardia.",
              durationMin: 90,
            },
            {
              text: "Volte a descer para jantar em El Born ou na sua base no Eixample, reservando com antecedencia. Termine com um cocktail num dos bares orientados para o design de El Born, se lhe restar energia.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Sala de concertos, Ciutadella e a praia",
          morning: [
            {
              poiSlug: "palau-de-la-musica",
              text: "Comece com uma visita guiada pre-reservada ao Palau de la Musica Catalana, pela claraboia de vitral e pela sala principal de colunas de mosaico. A visita curta chega para ver o interior modernista antes de o dia aquecer.",
              durationMin: 75,
            },
            {
              poiSlug: "parc-de-la-ciutadella",
              text: "Va a pe ao proximo Parc de la Ciutadella, gratuito e verde, pela ornamentada fonte da Cascada que um jovem Gaudi ajudou a desenhar e por um barco a remos no lago. Faca piquenique nos relvados ou almoce leve na berma do parque virada para El Born.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "barceloneta-beach",
              text: "Desca ate a praia da Barceloneta para a tarde e um mergulho se estiver quente, mantendo as malas vigiadas a toda a hora. Para areia mais limpa e calma, va para norte, ate as praias de Bogatell ou Mar Bella.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              text: "Faca um jantar de marisco na Barceloneta uma rua para dentro do passadico, evitando as armadilhas da frente-mar, e peca peixe fresco ou um arroz. E a refeicao para ir ao classico na sua ultima noite.",
              durationMin: 120,
            },
            {
              text: "Termine com um vermute demorado ou um passeio pela marina de Port Vell enquanto as luzes se acendem. Esta tudo perto da sua base no Eixample de metro, por isso nao ha longa viagem de regresso a planear.",
              durationMin: 45,
            },
          ],
        },
      ],
    },
    {
      citySlug: "barcelona",
      days: 4,
      summary:
        "Quatro dias sao o ponto ideal para uma primeira visita a Barcelona, transformando uma corrida turistica numas ferias a serio. Os dias um a tres cobrem os essenciais: o roteiro de Gaudi (Sagrada Familia, as casas do Passeig de Gracia, Park Guell), a cidade velha (a catedral, El Born, o Museu Picasso, La Boqueria, La Rambla), e um dia misto de sala de concertos, parque da Ciutadella e praia, cada um feito sem pressa. O quarto dia e a valvula de escape, montado em torno de Montjuic (o MNAC, Miro, jardins e o castelo, alcancados de funicular e teleferico) mais a Fonte Magica, ou trocado por um passeio de um dia ao mosteiro de montanha de Montserrat ou a Girona de comboio rapido. Esta duracao serve para quem detesta a marcha forcada, casais, e quem tem os voos a delimitar a viagem de forma desajeitada. Para quatro dias recomendamos ficar em Gracia: ja aceitou um ritmo mais lento, e as suas pracas e bares de gestao familiar tornam o regresso a casa cada noite a melhor parte do dia, com o Park Guell na colina acima. Reserve a Sagrada Familia, o Park Guell e as casas de Gaudi com boa antecedencia, e mantenha as malas fechadas nas multidoes.",
      stayNeighborhoodSlug: "gracia",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Roteiro de Gaudi: Sagrada Familia, Passeig de Gracia, Park Guell",
          morning: [
            {
              poiSlug: "sagrada-familia",
              text: "Comece na Sagrada Familia no seu primeiro horario reservado, antes das multidoes e com a luz da manha nas janelas da fachada da Natividade. Dedique-lhe 90 minutos, acrescentando uma subida a torre se reservou o horario.",
              durationMin: 90,
            },
            {
              poiSlug: "casa-batllo",
              text: "Apanhe o metro ate ao Passeig de Gracia para a Casa Batllo no seu horario marcado, pela fachada de escamas de dragao e pelo tablet de audio animado. Depois suba cinco minutos pela avenida.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "la-pedrera",
              text: "Veja La Pedrera (Casa Mila) acima na mesma avenida no seu horario marcado, pela fachada ondulada e pela cobertura de chamines em forma de elmo de guerreiro. Almoce numa rua lateral fora do Passeig de Gracia, nao nas esplanadas da avenida.",
              durationMin: 90,
            },
            {
              poiSlug: "park-guell",
              text: "Suba ao Park Guell para um horario de tarde na Zona Monumental, que fica mesmo acima da sua base em Gracia, usando as escadas rolantes exteriores para a subida. Veja o terraco de mosaicos e o lagarto, e depois desca a pe para Gracia propriamente dita.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              text: "Instale-se em Gracia para a noite, bebendo ao ar livre numa das suas pracas como os locais antes de jantar. Os restaurantes de gestao familiar e os bares sem pretensoes do bairro ficam a uma curta caminhada da sua cama.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Cidade velha: catedral, El Born, Picasso, Boqueria, La Rambla",
          morning: [
            {
              poiSlug: "barcelona-cathedral",
              text: "Apanhe o metro ate a Catedral de Barcelona a abertura pelo claustro tranquilo e os seus gansos, e pela vista da cobertura sobre os pinaculos goticos. Vagueie depois pelo Barri Gotic, rumo a Placa Sant Felip Neri e ao bairro judeu medieval.",
              durationMin: 90,
            },
            {
              poiSlug: "picasso-museum",
              text: "Va a pe para leste, ate El Born, ao Museu Picasso no seu horario reservado, forte nos primeiros anos em Barcelona e em Las Meninas. Um museu compacto, por isso 75 minutos chegam antes do almoco.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "la-boqueria",
              text: "Atravesse ate ao mercado de La Boqueria para almocar num bar de banca do fundo, como o Pinotxo ou o El Quim, saltando as bancas da frente com precos de turista. Depois percorra La Rambla uma vez pela animacao, mala fechada e a frente, ate ao porto.",
              durationMin: 120,
            },
            {
              poiSlug: "parc-de-la-ciutadella",
              text: "Volte ao Parc de la Ciutadella junto a El Born, gratuito e verde, pela fonte da Cascada e por um barco a remos no lago. Uma pausa calma a meio de um dia de cidade velha.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "santa-maria-del-mar",
              text: "Regresse a El Born ao serdo, a volta de Santa Maria del Mar, entrando na nave gotica altiva da igreja se estiver aberta, e depois saindo para os wine bars. Procure fora do Passeig del Born principal para tapas com melhor relacao qualidade-preco.",
              durationMin: 90,
            },
            {
              text: "Jante em El Born, reservando com antecedencia para qualquer sitio bem avaliado, antes de voltar a subir a Gracia. Termine com um cocktail num dos bares orientados para o design do bairro se a noite for nova.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Sala de concertos, praia e por do sol",
          morning: [
            {
              poiSlug: "palau-de-la-musica",
              text: "Comece com uma visita guiada pre-reservada ao Palau de la Musica Catalana, pela claraboia de vitral e pela sala de colunas de mosaico. A visita curta chega para ver o interior modernista antes de o dia aquecer.",
              durationMin: 75,
            },
            {
              poiSlug: "la-rambla",
              text: "Se a saltou, percorra agora La Rambla e as ruas fora dela, mala fechada, e depois corte ate ao porto e a marina de Port Vell. Almoce cedo uma rua para dentro da agua em vez das esplanadas turisticas.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "barceloneta-beach",
              text: "Dedique a tarde a praia da Barceloneta e a um mergulho se estiver quente, vigiando as malas a toda a hora. Va para norte ate as praias mais limpas de Bogatell ou Mar Bella se quiser areia mais calma e menos gente.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "bunkers-del-carmel",
              text: "Suba aos Bunkers del Carmel para o por do sol, o miradouro gratuito de 360 graus sobre a cidade, que fica perto da sua base em Gracia. Leve as suas proprias bebidas e petiscos, ja que la em cima nao ha loja, e refresca.",
              durationMin: 90,
            },
            {
              text: "Desca para jantar em Gracia, numa esplanada de praca numa noite quente, reservando com antecedencia para os sitios populares. Uma noite local descontraida em vez de uma zona turistica.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Montjuic e Fonte Magica, ou um passeio de um dia",
          morning: [
            {
              poiSlug: "montjuic",
              text: "Dedique a manha a Montjuic, subindo de funicular e depois de teleferico para poupar a subida, pelo museu de arte MNAC, a fundacao Joan Miro, os jardins e o castelo com a sua vista do porto. Em alternativa, troque o dia todo por um comboio ao mosteiro de montanha de Montserrat pelos picos serrados e o coro de meninos, ou a Girona pela sua catedral e o antigo bairro judeu.",
              durationMin: 240,
            },
          ],
          afternoon: [
            {
              text: "Desca de Montjuic pelos jardins e pela aldeia de arquitetura do Poble Espanyol se lhe apetecer, ou apanhe o comboio do passeio de regresso a Sants ao fim da tarde. Seja como for, mantenha o ritmo folgado, ja que este e o dia da valvula de escape.",
              durationMin: 120,
            },
            {
              text: "Descanse perto da sua base em Gracia ou no Eixample com um cafe e um passeio calmo, poupando as pernas para uma ultima grande noite. Se foi a Montserrat, e agora que regressa.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "montjuic",
              text: "Se o horario estiver a decorrer, va a Fonte Magica, abaixo do MNAC em Montjuic, para o espetaculo gratuito de luz e musica, chegando 20 minutos mais cedo para um lugar nas escadas. Confirme antes as noites atuais, ja que so decorre em noites selecionadas e esta desligada no inverno e em periodos de seca.",
              durationMin: 60,
            },
            {
              text: "Termine com um jantar de despedida de volta a Gracia, gastando mais na sua ultima refeicao catala num restaurante de praca que ja tenha explorado. Acabe com um copo de despedida numa praca tranquila, a uma curta caminhada da sua cama, que e todo o objetivo de se ficar aqui por quatro dias.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
  ],
};

export default barcelonaPt;
