import type { CityData } from "../types";

const athensPt: CityData = {
  city: {
    slug: "athens",
    name: "Atenas",
    country: "Grécia",
    countrySlug: "greece",
    lat: 37.9838,
    lng: 23.7275,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "ATH",
    airportToCenter:
      "A linha 3 do metro (azul) vai do aeroporto diretamente até Syntagma, no centro, em cerca de 40 min por cerca de 9 EUR, com comboios de 30 em 30 min. O autocarro expresso X95 faz o mesmo trajeto por 5,50 EUR a toda a hora, 24 horas por dia, mas demora 60 a 90 min consoante o trânsito. Um táxi de tarifa fixa até ao centro fica em cerca de 40 EUR de dia.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [7, 8],
    monthlyNotes: {
      1: "Fresco e tranquilo, com máximas de 13C, os preços de hotel mais baixos do ano e sem fila para a Acrópole. A chuva vem em períodos curtos, mas o sol forte é comum, e os sítios estatais oferecem entrada gratuita no primeiro domingo, por isso marque uma visita para 4 de janeiro.",
      2: "Ainda ameno, a 14C, e um dos meses mais calmos na rocha, com luz limpa para fotografias entre aguaceiros. A janela de entrada gratuita no primeiro domingo aplica-se a 1 de fevereiro, e as esplanadas em Plaka enchem em qualquer almoço soalheiro.",
      3: "As máximas sobem até aos 16C e aparecem as flores de amendoeira, com as multidões só a começar a crescer no final do mês. O dia 25 de março é o Dia da Independência, um feriado nacional com um desfile militar junto a Syntagma e muitos sítios e lojas fechados, por isso planeie em torno dele.",
      4: "Um dos melhores meses, a 20C, colinas verdes e luz longa, embora seja quando a Páscoa Ortodoxa grega costuma calhar (12 de abril em 2026) e é o maior feriado do país. Atenas esvazia-se em parte à medida que as famílias viajam para casa, muitas tavernas fecham no fim de semana de Páscoa, e a missa da meia-noite à luz das velas vale a pena ver.",
      5: "Quente, seco e fiável, a 26C, o ponto ideal antes da fornalha do verão, com longos serões para jantares nos rooftops. As multidões são pesadas na Acrópole, por isso reserve um bilhete com hora marcada e vá às 8h da abertura, mas o tempo e a luz do dia estão perto do perfeito.",
      6: "Quente, a 31C, e movimentado, com o Festival de Atenas e Epidauro a abrir a sua época de teatro antigo e concertos no Odeão de Herodes Ático, por baixo da Acrópole. Faça a rocha à abertura, refugie-se no fresco Museu da Acrópole à tarde e reserve as noites de festival com antecedência.",
      7: "Pico de calor acima dos 34C, sol implacável e pouca sombra nos sítios arqueológicos, enquanto muitos atenienses partem para as ilhas. O Festival de Epidauro prossegue no Odeão, mas fazer turismo significa começar às 8h ou nas últimas duas horas antes de fechar, com o meio-dia passado em espaços interiores ou junto a uma piscina.",
      8: "O mês mais quente e seco, a 34C e mais, quando a cidade pode passar dos 38C e os locais se esvaziam para a costa por volta do feriado de 15 de agosto. Se agosto for inevitável, concentre tudo no início da manhã, reserve ar condicionado e trate o sombreado Museu da Acrópole e os serões nos rooftops como estratégia de sobrevivência.",
      9: "Calor de verão sem o pior dele, começando perto dos 29C e aliviando ao longo do mês, com o Festival de Epidauro a terminar e os atenienses de volta à cidade. As multidões diminuem depois da primeira semana e este é indiscutivelmente o melhor mês em geral para uma escapadinha a Atenas.",
      10: "Dias quentes a rondar os 23C, com a primeira chuva a sério a regressar no final e uma soberba luz rasante sobre o mármore. As multidões caem visivelmente depois de meados do mês, e a entrada gratuita do primeiro domingo retoma para a época baixa em outubro, embora confirme à medida que o horário de inverno arranca em novembro.",
      11: "Mais fresco, a 18C, com períodos mais chuvosos mas muitos dias luminosos, e as grandes atrações mais tranquilas do outono. Os preços de época baixa regressam e a entrada gratuita nos sítios estatais calha no primeiro domingo, 1 de novembro, por isso uma viagem barata e sem filas é bem possível.",
      12: "Ameno para o inverno, a 14C, mas a fase mais chuvosa, com luzes de Natal ao longo de Syntagma e Monastiraki e um mercado festivo nas praças. Os sítios mantêm-se abertos com horários curtos de inverno e a entrada gratuita do primeiro domingo calha a 6 de dezembro, atraindo multidões locais.",
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
    tagline: "O berço do Ocidente, com os melhores rooftops da Europa.",
    heroIntro:
      "Atenas entrega-lhe a Acrópole, sítios antigos de classe mundial e um centro de cidade vivo e empolgante que se percorre de ponta a ponta numa tarde. Três dias são o ponto ideal honesto: um para a rocha e o seu museu, um para a Ágora Antiga e as ruelas da cidade velha, e um para o Museu Arqueológico Nacional e uma colina ao pôr do sol. Venha na primavera ou no início do outono, reserve o bilhete da Acrópole antes de voar e jante num rooftop com o Partenon iluminado por cima de si.",
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
      vibe: "A cidade velha enrolada na encosta norte da Acrópole, um labirinto de casas neoclássicas, buganvílias e ruelas pedonais a trepar em direção à rocha. Tudo o que um estreante quer fica a menos de dez minutos a pé, e as ruas são calmas e bonitas quando os visitantes de um dia rareiam à noite. É o postal, e paga-se um pequeno prémio para dormir nele.",
      pros: [
        "A pé até à Acrópole, à Ágora Antiga e à Ágora Romana sem transportes",
        "Ruelas sem trânsito, seguras, tranquilas e adoráveis para passear à noite",
        "Densa de tavernas, cafés e das escadas com ar de ilha de Anafiotika",
      ],
      cons: [
        "A restauração mais turística da cidade, com algumas tavernas a viver da localização",
        "Os preços de hotéis e comida ficam acima dos bairros à volta",
        "Ruas íngremes e com degraus, difíceis com uma mala ou um carrinho de bebé",
      ],
    },
    {
      slug: "monastiraki",
      citySlug: "athens",
      name: "Monastiraki",
      lat: 37.9764,
      lng: 23.7256,
      bestFor: ["first-time", "nightlife", "budget"],
      vibe: "A dobradiça vibrante do centro, construída em torno de uma praça servida por metro onde a feira da ladra, a Ágora Romana e as ruelas da cidade velha se encontram. Os bares nos rooftops aqui olham diretamente para a Acrópole iluminada, e as ruas mantêm-se ruidosas e animadas passada a meia-noite. Central, bem ligado e nunca aborrecido, ainda que um pouco caótico.",
      pros: [
        "Centro de metro nas linhas 1 e 3, direto ao aeroporto e ao porto no Pireu",
        "Os bares de rooftop com melhor relação qualidade-preço e vista frontal para a Acrópole",
        "A pé até à Acrópole, à Ágora, a Plaka e a Psyrri em minutos",
      ],
      cons: [
        "Ruidoso de dia e de noite à volta da praça e das ruas do mercado",
        "Turístico e propenso a carteiristas nos troços mais movimentados da feira",
        "Menos quartos de hotel tranquilos e repousantes do que os bairros mais calmos",
      ],
    },
    {
      slug: "koukaki",
      citySlug: "athens",
      name: "Koukaki",
      lat: 37.9648,
      lng: 23.7256,
      bestFor: ["local", "budget", "family"],
      vibe: "Um bairro residencial mesmo a sul da Acrópole, mais tranquilo e mais local do que a cidade velha, mas ainda a uma curta caminhada do portão principal e do Museu da Acrópole. Ruas arborizadas guardam tavernas de bairro, café de terceira vaga e um ambiente genuinamente vivido à volta de Georgiou Olympiou. Calmo, com bom preço e cada vez mais a base inteligente para quem regressa.",
      pros: [
        "A pé até à encosta sul da Acrópole, ao museu e à colina de Filopappou",
        "Estações de metro Akropoli e Syngrou-Fix na linha 2 para o resto da cidade",
        "Restauração de bairro genuína a preços justos, bem fora do circuito turístico",
      ],
      cons: [
        "Poucas atrações próprias, sai dele para ver coisas",
        "Mais tranquilo à noite, com uma cena de bares menor do que Monastiraki ou Psyrri",
        "Alguns quarteirões junto à Avenida Syngrou têm bastante trânsito",
      ],
    },
    {
      slug: "kolonaki",
      citySlug: "athens",
      name: "Kolonaki",
      lat: 37.9795,
      lng: 23.7443,
      bestFor: ["romantic", "local", "family"],
      vibe: "O bairro chique e sofisticado nas encostas mais baixas do Licabeto, cheio de lojas de designer, galerias de arte e cafés polidos onde atenienses bem vestidos observam quem passa. Coloca-o ao pé do funicular que sobe a colina do Licabeto e a uma caminhada plana de Syntagma e dos museus. Elegante e seguro, ainda que mais caro e menos atmosférico do que a cidade velha.",
      pros: [
        "Ao pé do funicular do Licabeto para a melhor vista de pôr do sol da cidade",
        "Cafés chiques, boutiques e os excelentes museus Benaki e Cicládico por perto",
        "Ruas tranquilas e seguras e um ambiente genuinamente local e residencial",
      ],
      cons: [
        "Uma caminhada de 15 a 20 minutos a subir desde a Acrópole e Plaka",
        "O bairro mais caro para comer e fazer compras",
        "Sem estação de metro dentro dele, por isso caminha até Syntagma ou Evangelismos",
      ],
    },
    {
      slug: "psyrri",
      citySlug: "athens",
      name: "Psyrri",
      lat: 37.9784,
      lng: 23.7228,
      bestFor: ["nightlife", "local", "budget"],
      vibe: "Um antigo bairro de oficinas áspero, mesmo a norte de Monastiraki, que se tornou o coração da vida noturna e da arte de rua do centro, repleto de bares de mezze, rebetiko ao vivo e tavernas de horário tardio. De dia é maltratado e meio fechado, de noite enche-se de atenienses a comer e a beber sob fios de luzes. Ruidoso, barato e muito divertido.",
      pros: [
        "A noite mais animada e local do centro, do mezze ao rebetiko",
        "Comida e bebida mais baratas do que em Plaka, a poucos minutos a pé",
        "A passos do metro de Monastiraki e das principais atrações",
      ],
      cons: [
        "Ruidoso até de madrugada, uma má escolha para quem tem sono leve",
        "Duro e com ar vazio em alguns quarteirões de dia",
        "Poucas atrações clássicas, está aqui para comer, beber e passear",
      ],
    },
  ],

  pois: [
    {
      slug: "acropolis",
      citySlug: "athens",
      name: "Acrópole e Partenon",
      lat: 37.9715,
      lng: 23.7267,
      kind: "sight",
      needsBooking: true,
      tip: "Compre o bilhete com hora marcada da Acrópole online antes de viajar e escolha o primeiro horário das 8h ou as últimas duas horas antes de fechar, porque o calor e as multidões do meio-dia de verão na rocha sem sombra são brutais. O bilhete combinado da Acrópole e dos sítios tem muito melhor relação qualidade-preço e cobre também a Ágora Antiga, a Ágora Romana, o Templo de Zeus Olímpico e mais, ao longo de vários dias. Entre pelo portão mais tranquilo da encosta sul, junto ao Museu da Acrópole, em vez da entrada principal apinhada, e leve água e um chapéu.",
    },
    {
      slug: "acropolis-museum",
      citySlug: "athens",
      name: "Museu da Acrópole",
      lat: 37.9686,
      lng: 23.7286,
      kind: "museum",
      needsBooking: true,
      tip: "Barato, com ar condicionado e o refúgio perfeito do calor ao meio-dia, por isso combine-o com a rocha no mesmo dia e entre aqui quando o sol estiver no seu pior. Reserve online para saltar a fila do bilhete e depois comece pela Galeria do Partenon no piso de cima, cujas paredes de vidro emolduram o verdadeiro templo na colina mesmo em frente. O chão de vidro sobre o bairro antigo escavado à entrada merece um olhar demorado à chegada.",
    },
    {
      slug: "ancient-agora",
      citySlug: "athens",
      name: "Ágora Antiga e Templo de Hefesto",
      lat: 37.9755,
      lng: 23.7223,
      kind: "sight",
      needsBooking: false,
      tip: "Coberta pelo bilhete combinado da Acrópole, por isso use esse em vez de pagar à parte, e venha de manhã antes de as multidões da Acrópole descerem até aqui. O Templo de Hefesto no topo é o templo grego antigo mais bem preservado do mundo, muito mais intacto do que o Partenon, e quase nunca com muita gente. Não salte a reconstruída Estoa de Átalo, cuja colunata sombreada guarda um museu pequeno e fresco de achados quotidianos atenienses.",
    },
    {
      slug: "plaka",
      citySlug: "athens",
      name: "Bairro velho de Plaka",
      lat: 37.9714,
      lng: 23.7286,
      kind: "experience",
      needsBooking: false,
      tip: "Passeie pelas ruelas sem trânsito ao início da manhã pelas buganvílias e fotografias de ruas vazias, e depois regresse após as 20h, quando as tavernas ganham vida. Desvie-se da rua principal de recordações, Adrianou, em direção às ruas superiores tranquilas que sobem a Anafiotika, onde os preços descem e o ambiente melhora. Salte as tavernas com ementas com fotografias e angariadores à porta, vivem da localização.",
    },
    {
      slug: "monastiraki-square",
      citySlug: "athens",
      name: "Feira da ladra e praça de Monastiraki",
      lat: 37.9764,
      lng: 23.7256,
      kind: "sight",
      needsBooking: false,
      tip: "A feira da ladra de domingo de manhã na Praça Avissynias é a verdadeira, com velharias e antiguidades genuínas, enquanto as bancas diárias de Ifestou pendem para as recordações de turista. Cuide da sua mala e carteira no aperto, este é o local mais propenso a carteiristas da cidade. Suba a qualquer bar de rooftop junto à praça ao anoitecer pela vista frontal da Acrópole sobre os telhados de terracota.",
    },
    {
      slug: "temple-olympian-zeus",
      citySlug: "athens",
      name: "Templo de Zeus Olímpico",
      lat: 37.9693,
      lng: 23.7332,
      kind: "sight",
      needsBooking: false,
      tip: "Incluído no bilhete combinado da Acrópole, por isso não há razão para comprar uma entrada à parte, e 15 a 20 minutos chegam para as colunas gigantes que restam. Combine-o com o Arco de Adriano mesmo ao lado, que é gratuito de ver da rua, e o Jardim Nacional a uma curta caminhada a norte para sombra. A luz do final da tarde torna o mármore dourado e as multidões são escassas aqui a qualquer hora.",
    },
    {
      slug: "lycabettus-hill",
      citySlug: "athens",
      name: "Colina do Licabeto",
      lat: 37.9829,
      lng: 23.7439,
      kind: "viewpoint",
      needsBooking: false,
      tip: "O ponto mais alto da cidade e o melhor local de pôr do sol, com a Acrópole, a mancha urbana e o mar estendidos em baixo a partir do terraço da capela. Suba de funicular a partir de Kolonaki para poupar a subida íngreme e depois desça a pé pelos pinhais se os seus joelhos permitirem. Chegue 30 minutos antes do pôr do sol para garantir um lugar junto à grade do café, e leve um agasalho, faz vento lá em cima.",
    },
    {
      slug: "national-archaeological-museum",
      citySlug: "athens",
      name: "Museu Arqueológico Nacional",
      lat: 37.9891,
      lng: 23.7326,
      kind: "museum",
      needsBooking: false,
      tip: "A maior coleção de arte grega antiga do mundo, a norte do centro, e vale a viagem mesmo que ache que já tem fadiga de museus. Vá direto à Máscara de Agamémnon em ouro, ao imponente bronze de Zeus ou Posídon e ao Mecanismo de Anticítera, e depois passeie à vontade. Fica a 15 minutos a pé ou a um salto de metro do centro, e as manhãs são as mais tranquilas, por isso comece aqui antes dos grupos da tarde.",
    },
    {
      slug: "panathenaic-stadium",
      citySlug: "athens",
      name: "Estádio Panatenaico",
      lat: 37.9682,
      lng: 23.7411,
      kind: "sight",
      needsBooking: false,
      tip: "O estádio todo em mármore que acolheu os primeiros Jogos Olímpicos modernos em 1896, e o bilhete de entrada inclui um audioguia e a possibilidade de correr uma volta ou subir ao pódio dos vencedores. Pode apanhar o efeito completo de graça da grade da rua se preferir não pagar, já que toda a ferradura se vê de fora. Venha cedo ou tarde para ter a pista só para si nas fotografias, e combine-o com o vizinho Jardim Nacional.",
    },
    {
      slug: "anafiotika",
      citySlug: "athens",
      name: "Anafiotika",
      lat: 37.9724,
      lng: 23.7292,
      kind: "experience",
      needsBooking: false,
      tip: "Um pequeno recanto de casas caiadas de branco ao estilo das ilhas construídas na encosta da Acrópole por operários de Anafi, parece uma aldeia cicládica largada dentro da cidade. Suba as ruelas com degraus acima da parte alta de Plaka ao início da manhã pelas portas azuis e os gatos sem multidões nenhumas. Não há lojas nem cafés aqui em cima, é puramente um lugar para passear, por isso vá em silêncio e respeite que há pessoas a viver por trás daquelas portas.",
    },
    {
      slug: "roman-agora",
      citySlug: "athens",
      name: "Ágora Romana e Torre dos Ventos",
      lat: 37.9743,
      lng: 23.7258,
      kind: "sight",
      needsBooking: false,
      tip: "Coberta pelo bilhete combinado da Acrópole, e pequena o suficiente para se ver em 20 minutos, por isso integre-a num passeio por Plaka em vez de fazer uma viagem especial. A octogonal Torre dos Ventos é a estrela, uma antiga estação meteorológica e relógio de água em mármore com deuses dos ventos esculpidos em cada face, e uma das estruturas mais bem preservadas da sua época. Fica mesmo na orla de Plaka, por isso encaixe-a entre a Ágora Antiga e o almoço.",
    },
    {
      slug: "acropolis-rooftop-bar",
      citySlug: "athens",
      name: "Bar de rooftop com vista para a Acrópole",
      lat: 37.9762,
      lng: 23.7255,
      kind: "food",
      needsBooking: true,
      tip: "O clássico fim de tarde ateniense é uma bebida num rooftop de Monastiraki com a Acrópole iluminada mesmo em frente, e as terraços mais conhecidos esgotam, por isso reserve uma mesa ao pôr do sol com um ou dois dias de antecedência. Paga um prémio pela vista nas bebidas, por isso encare-o como uma rodada para a fotografia e não como um jantar inteiro. Se dispensar a reserva, o miradouro público gratuito na rocha do Areópago, por baixo da Acrópole, dá um pôr do sol semelhante a custo zero, menos o cocktail.",
    },
    {
      slug: "varvakios-market",
      citySlug: "athens",
      name: "Mercado Central de Varvakios",
      lat: 37.9803,
      lng: 23.7266,
      kind: "food",
      needsBooking: false,
      tip: "O ruidoso mercado central de carne e peixe da cidade, na Rua Athinas, aberto de segunda a sábado de cerca das 7h às 15h e fechado aos domingos, e melhor a meio da manhã, quando está em plena azáfama. Abra caminho por entre as carcaças penduradas até às velhas tavernas metidas dentro das naves, onde os trabalhadores do mercado comem sopa de tripas e peixe grelhado a preços baixíssimos. Mesmo que não coma aqui, as lojas de especiarias, frutos secos e charcutaria à volta, na Evripidou, são uma ótima paragem barata de recordações gastronómicas.",
    },
    {
      slug: "filopappou-hill",
      citySlug: "athens",
      name: "Colina de Filopappou",
      lat: 37.9668,
      lng: 23.7189,
      kind: "viewpoint",
      needsBooking: false,
      tip: "A colina coberta de pinheiros de frente para a Acrópole a sudoeste, gratuita e aberta a toda a hora, com a melhor vista frontal da rocha e do Partenon. Suba o caminho de mármore a partir da avenida pedonal Dionysiou Areopagitou ao pôr do sol, quando a Acrópole brilha e as multidões estão na própria rocha, não aqui. Use calçado adequado, os caminhos antigos estão polidos e escorregadios, e leve água, pois não há café no topo.",
    },
  ],

  itineraries: [
    {
      citySlug: "athens",
      days: 2,
      summary:
        "Dois dias chegam para cobrir a Atenas essencial, embora seja uma dupla de dias cheia e concentrada em vez de descontraída. Em 48 horas consegue fazer a Acrópole e o seu museu no primeiro dia, depois a Ágora Antiga, Plaka, Monastiraki e um pôr do sol num rooftop no segundo, comendo bem nas duas noites na cidade velha. O que tem de cortar: o soberbo Museu Arqueológico Nacional, uma subida ao Licabeto ou a Filopappou ao pôr do sol e qualquer excursão para fora da cidade, por isso esta é a versão de clássicos incontornáveis. Serve para uma escapadinha de fim de semana, uma paragem a caminho das ilhas ou uma primeira prova da cidade. O ponto inegociável: reserve com antecedência o bilhete com hora marcada da Acrópole e escolha o horário das 8h da abertura, porque a rocha sem sombra é castigadora a meio da manhã nos meses quentes. Fixe-se em Plaka para que ambas as manhãs comecem a pé nos sítios e os serões o coloquem a passos do jantar. Se conseguir um terceiro dia, acrescente o Museu Arqueológico Nacional e uma colina ao pôr do sol, o melhor upgrade possível.",
      stayNeighborhoodSlug: "plaka",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "A Acrópole e o seu museu",
          morning: [
            {
              poiSlug: "acropolis",
              text: "Esteja na Acrópole para o seu horário das 8h reservado, entrando pelo portão mais tranquilo da encosta sul, e suba ao Partenon antes de o calor e os grupos chegarem. Rodeie o Erecteion e os Propileus e depois pare na rocha do Areópago na descida para um panorama gratuito sobre a cidade.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Almoce em Koukaki ou na avenida pedonal Dionysiou Areopagitou por baixo da encosta sul, a uma curta caminhada plana do museu. Demore-se fora do sol do meio-dia antes da tarde em espaço interior.",
              durationMin: 75,
            },
            {
              poiSlug: "acropolis-museum",
              text: "Entre no fresco Museu da Acrópole, com ar condicionado, na parte mais quente do dia, começando pela Galeria do Partenon no piso de cima que emoldura o verdadeiro templo mesmo em frente. O chão de vidro sobre a rua antiga escavada à entrada merece um olhar demorado ao entrar.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "plaka",
              text: "Passeie por Plaka à medida que a luz suaviza, subindo as ruelas superiores tranquilas em direção a Anafiotika antes de as tavernas encherem. Reserve uma mesa fora da rua principal de recordações por volta das 20h30 e instale-se para um longo jantar grego.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Ágora Antiga, cidade velha e pôr do sol num rooftop",
          morning: [
            {
              poiSlug: "ancient-agora",
              text: "Comece na Ágora Antiga com o seu bilhete combinado, antes de as multidões da Acrópole descerem, e suba ao quase perfeito Templo de Hefesto no topo. Entre na sombreada Estoa de Átalo e no seu pequeno museu de achados quotidianos atenienses.",
              durationMin: 90,
            },
            {
              poiSlug: "roman-agora",
              text: "Caminhe uns minutos até à Ágora Romana e à sua octogonal Torre dos Ventos, a antiga estação meteorológica em mármore esculpida com deuses dos ventos. É pequena, por isso 20 minutos chegam antes de seguir para as ruelas.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "monastiraki-square",
              text: "Siga para a praça de Monastiraki e a feira da ladra, percorrendo as bancas de antiguidades e velharias, e mantenha uma mão na mala no aperto. Apanhe um souvlaki barato num dos famosos pontos de grelha junto à praça para um almoço em pé.",
              durationMin: 90,
            },
            {
              poiSlug: "anafiotika",
              text: "Volte a subir por Plaka até às ruelas caiadas ao estilo das ilhas de Anafiotika, subindo os degraus pelas portas azuis e pela tranquilidade longe do mercado. Vá devagar e com respeito, há pessoas a viver por trás destas portas.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "acropolis-rooftop-bar",
              text: "Reserve uma mesa ao pôr do sol num bar de rooftop de Monastiraki para uma bebida com a Acrópole iluminada mesmo em frente. Encare-o como uma rodada pela vista e depois desça para jantar em Psyrri ou Plaka.",
              durationMin: 90,
            },
            {
              text: "Termine com um jantar de mezze em Psyrri, a poucos minutos a pé de Monastiraki, onde a comida é mais barata e mais animada do que na cidade velha. É fácil encontrar rebetiko ao vivo aqui em qualquer noite movimentada.",
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
        "Sim, três dias são a duração certa para Atenas, e é o que recomendamos para uma primeira visita. Dão à Acrópole e ao seu museu uma manhã e uma tarde inteiras e sem pressas, à Ágora Antiga e às ruelas da cidade velha um dia próprio com um pôr do sol num rooftop, e um terceiro dia para o Museu Arqueológico Nacional de classe mundial mais uma subida ao Licabeto e o lado mais chique de Kolonaki da cidade. Come em três bairros diferentes, encaixa tanto uma taverna em Plaka como uma noite de mezze em Psyrri, e ainda se desloca a um ritmo que lhe permite sentar-se numa praça em vez de a atravessar a correr. O que ainda fica cortado é uma excursão para fora da cidade, que é exatamente o que um quarto dia acrescenta. Serve para estreantes, casais e quem quebra uma viagem às ilhas. Fique em Koukaki: chega a pé à encosta sul da Acrópole e ao museu, fica no metro para o resto da cidade, e as suas tavernas de bairro batem as armadilhas turísticas da cidade velha. Reserve o bilhete com hora marcada da Acrópole e escolha o horário das 8h antes de voar.",
      stayNeighborhoodSlug: "koukaki",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "A Acrópole, o seu museu e Filopappou",
          morning: [
            {
              poiSlug: "acropolis",
              text: "Esteja na Acrópole para o seu horário das 8h reservado, usando o portão mais tranquilo da encosta sul junto à sua base em Koukaki, e chegue ao Partenon antes de o calor apertar. Rodeie o Erecteion e os Propileus e depois desça pela rocha do Areópago para um panorama gratuito da cidade.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Almoce na avenida Dionysiou Areopagitou ou de volta a Koukaki, fora do sol do meio-dia, antes da tarde em espaço interior. Esta é a pausa em torno da qual o dia se constrói.",
              durationMin: 75,
            },
            {
              poiSlug: "acropolis-museum",
              text: "Passe a tarde quente no fresco Museu da Acrópole, começando pela Galeria do Partenon no piso de cima, cujas paredes de vidro emolduram o templo que acabou de percorrer. Demore-se nas cariátides e no chão de vidro sobre a escavação antiga.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "filopappou-hill",
              text: "Suba a colina de Filopappou coberta de pinheiros ao pôr do sol, a melhor vista frontal da Acrópole iluminada, gratuita e aberta a toda a hora. Use calçado adequado para os caminhos de mármore polido e depois desça para jantar em Koukaki.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Ágora Antiga, cidade velha e pôr do sol num rooftop",
          morning: [
            {
              poiSlug: "ancient-agora",
              text: "Comece na Ágora Antiga com o seu bilhete combinado, à frente das multidões que descem da rocha, e suba ao intacto Templo de Hefesto. Refresque-se na reconstruída Estoa de Átalo e no seu pequeno museu.",
              durationMin: 90,
            },
            {
              poiSlug: "roman-agora",
              text: "Corte até à Ágora Romana e à octogonal Torre dos Ventos, a antiga estação meteorológica esculpida, com o mesmo bilhete. Vinte minutos chegam antes de deslizar para as ruelas de Plaka.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "plaka",
              text: "Passeie por Plaka e suba aos degraus caiados de Anafiotika, parando para um almoço demorado numa ruela superior tranquila, longe da rua de recordações. Esta é a tarde para deambular em vez de riscar coisas da lista.",
              durationMin: 120,
            },
            {
              poiSlug: "monastiraki-square",
              text: "Desça até à praça de Monastiraki e à sua feira da ladra, percorrendo as bancas e cuidando da mala nas multidões. Sincronize-o para estar junto aos rooftops quando a luz começa a ir-se.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "acropolis-rooftop-bar",
              text: "Tome a sua mesa reservada ao pôr do sol num rooftop de Monastiraki para uma bebida com a Acrópole iluminada em frente. Uma rodada pela vista e depois desça para jantar.",
              durationMin: 90,
            },
            {
              text: "Jantar em Psyrri, a uma curta caminhada, para mezze, rebetiko ao vivo e a noite mais animada e com melhor relação qualidade-preço do centro. Reserve uma mesa ao fim de semana, os bons sítios enchem depressa.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Museu Arqueológico Nacional, Licabeto e Kolonaki",
          morning: [
            {
              poiSlug: "national-archaeological-museum",
              text: "Vá cedo ao Museu Arqueológico Nacional, a mais fina coleção de arte grega antiga em qualquer lugar, a 15 minutos a pé ou a um salto de metro a norte do centro. Vá direto à Máscara de Agamémnon em ouro, ao grande bronze de Zeus ou Posídon e ao Mecanismo de Anticítera, e depois passeie à vontade.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "panathenaic-stadium",
              text: "Atravesse a cidade até ao Estádio Panatenaico todo em mármore, casa dos primeiros Jogos Olímpicos modernos, onde o bilhete lhe permite correr uma volta e subir ao pódio. Combine-o com um passeio pelo sombreado Jardim Nacional mesmo ao lado.",
              durationMin: 90,
            },
            {
              text: "Suba até ao chique Kolonaki para café e ver montras entre as galerias e boutiques, ou os museus de Arte Cicládica ou Benaki se ainda tiver apetite. Instale-se junto ao funicular do Licabeto para a subida que se segue.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "lycabettus-hill",
              text: "Suba de funicular a colina do Licabeto ao pôr do sol, o miradouro mais alto da cidade, com a Acrópole, a mancha urbana e o mar em baixo. Chegue 30 minutos antes do pôr do sol para um lugar junto à grade e leve um agasalho contra o vento.",
              durationMin: 90,
            },
            {
              text: "Desça para um jantar de despedida em Kolonaki ou de volta a Koukaki, gastando mais na sua última refeição em Atenas. Peixe grelhado, uma variedade de mezze e um jarro de vinho local é a despedida clássica.",
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
        "Quatro dias são o ponto ideal para Atenas, transformando uma corrida turística numas verdadeiras férias com um dia para sair da cidade. Os dias um a três cobrem o essencial sem pressa: a Acrópole e o seu museu, a Ágora Antiga com as ruelas da cidade velha e um pôr do sol num rooftop, e o Museu Arqueológico Nacional combinado com uma subida ao Licabeto. O quarto dia é a válvula de escape, uma ida até ao mar, seja o Templo de Posídon no Cabo Sunião para um pôr do sol no alto da falésia sobre o Egeu, seja um ferry rápido do Pireu para a ilha de Egina ou Hidra para um mergulho, um almoço no porto e um ritmo mais lento. Esta duração serve viajantes que detestam a marcha forçada, casais e quem quer o clássico dia de ilha e mar grego sem deixar Atenas para trás. Para quatro dias recomendamos fixar-se em Monastiraki: é o centro de transportes para o aeroporto, o porto e a excursão, e os seus rooftops e vida de rua fazem do regresso a casa cada noite parte da diversão. Reserve o bilhete com hora marcada da Acrópole com muita antecedência e escolha um horário cedo.",
      stayNeighborhoodSlug: "monastiraki",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "A Acrópole e o seu museu",
          morning: [
            {
              poiSlug: "acropolis",
              text: "Esteja na Acrópole para o seu horário das 8h reservado, entrando pelo portão mais tranquilo da encosta sul, e chegue ao Partenon antes do calor e das multidões. Rodeie o Erecteion e os Propileus e depois aprecie a vista gratuita da cidade a partir da rocha do Areópago na descida.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Almoce na avenida Dionysiou Areopagitou por baixo da encosta sul, a uma caminhada plana do museu, e saia do sol do meio-dia. Mantenha-o leve antes da tarde em espaço interior.",
              durationMin: 75,
            },
            {
              poiSlug: "acropolis-museum",
              text: "Passe a tarde quente no fresco Museu da Acrópole, começando pela Galeria do Partenon no piso de cima que emoldura o verdadeiro templo do outro lado do vale. O chão de vidro sobre a escavação antiga à entrada recompensa um olhar demorado.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "acropolis-rooftop-bar",
              text: "Tome uma mesa reservada ao pôr do sol num rooftop de Monastiraki junto à sua base para uma bebida com a Acrópole iluminada em frente. Uma rodada pela vista e depois jantar por perto.",
              durationMin: 90,
            },
            {
              text: "Jantar em Psyrri, a minutos da sua base em Monastiraki, para mezze e a noite mais animada do centro. Entre no bairro a que está a chamar casa.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Ágora Antiga, Ágora Romana e a cidade velha",
          morning: [
            {
              poiSlug: "ancient-agora",
              text: "Comece na Ágora Antiga com o seu bilhete combinado, antes de as multidões da Acrópole descerem, e suba ao intacto Templo de Hefesto. Refresque-se na Estoa de Átalo e no seu museu de achados quotidianos.",
              durationMin: 90,
            },
            {
              poiSlug: "roman-agora",
              text: "Caminhe até à Ágora Romana e à sua octogonal Torre dos Ventos, a antiga estação meteorológica em mármore esculpida com deuses dos ventos, com o mesmo bilhete. Vinte minutos aqui antes das ruelas.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "plaka",
              text: "Passeie por Plaka a um ritmo lento, subindo aos degraus caiados ao estilo das ilhas de Anafiotika acima da rua de recordações. Pare para um almoço demorado numa ruela superior tranquila.",
              durationMin: 120,
            },
            {
              poiSlug: "temple-olympian-zeus",
              text: "Caminhe até ao Templo de Zeus Olímpico e ao Arco de Adriano com o seu bilhete combinado, onde as colunas gigantes que restam brilham na luz da tarde. As multidões são escassas aqui a qualquer hora.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "monastiraki-square",
              text: "Volte a deambular pela praça de Monastiraki ao serão, percorrendo as bancas e absorvendo a azáfama. Apanhe um souvlaki barato num famoso ponto de grelha junto à praça se quiser uma refeição informal.",
              durationMin: 60,
            },
            {
              text: "Jantar de volta a Psyrri ou Plaka, reservando com antecedência para qualquer sítio com nome. É fácil encontrar rebetiko ao vivo em Psyrri numa noite movimentada.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Museu Arqueológico Nacional e Licabeto",
          morning: [
            {
              poiSlug: "national-archaeological-museum",
              text: "Vá cedo ao Museu Arqueológico Nacional, a maior coleção de arte grega antiga do mundo, a uma curta caminhada ou salto de metro a norte. Vá primeiro à Máscara de Agamémnon, ao grande bronze de Zeus ou Posídon e ao Mecanismo de Anticítera, e depois passeie.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "panathenaic-stadium",
              text: "Atravesse a cidade até ao Estádio Panatenaico todo em mármore, casa dos primeiros Jogos Olímpicos modernos, e corra uma volta ou suba ao pódio com o seu bilhete. Combine-o com o sombreado Jardim Nacional mesmo ao lado.",
              durationMin: 90,
            },
            {
              text: "Suba até Kolonaki para café e boutiques, ou os museus de Arte Cicládica ou Benaki se ainda tiver apetite. Posicione-se junto ao funicular do Licabeto para a subida ao pôr do sol.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "lycabettus-hill",
              text: "Suba de funicular a colina do Licabeto ao pôr do sol, o miradouro mais alto da cidade, com a Acrópole e o mar estendidos em baixo. Chegue 30 minutos antes para um lugar junto à grade e leve um agasalho contra o vento.",
              durationMin: 90,
            },
            {
              text: "Jantar em Kolonaki ou de volta perto de Monastiraki, onde quer que as pernas o levem. Poupe alguma energia, amanhã deixa a cidade rumo ao mar.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Dia de mar: Cabo Sunião ou salto a uma ilha",
          morning: [
            {
              text: "Leve o dia para fora da cidade rumo ao mar. Ou apanhe o autocarro costeiro ou uma excursão até ao Templo de Posídon no Cabo Sunião, uma ruína no alto de uma falésia sobre o Egeu, cerca de 70 km a sul, sincronizada para o famoso pôr do sol. Ou apanhe um ferry rápido do Pireu para Egina, um salto fácil de 40 minutos, pelos pomares de pistácio, uma frente de porto e um mergulho.",
              durationMin: 240,
            },
          ],
          afternoon: [
            {
              text: "Se escolheu uma ilha, passe a tarde em Egina ou siga até à mais bonita Hidra, onde os carros são proibidos e os burros ainda trabalham as ruelas de pedra, com um longo almoço numa taverna do porto e um mergulho junto às rochas. Se escolheu Sunião, interrompa a estrada costeira numa das praias da Riviera Ateniense para um mergulho antes do templo.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              text: "Para Sunião, esteja no Templo de Posídon ao pôr do sol, quando as colunas de mármore apanham a última luz sobre o mar, e depois regresse à cidade. Para as ilhas, apanhe um ferry ao início da noite de volta ao Pireu e o metro até ao centro.",
              durationMin: 120,
            },
            {
              text: "Jantar de despedida de volta perto de Monastiraki, a uma curta caminhada da sua cama sem viagem seguinte para planear, que é toda a razão para se basear aqui. Vá ao clássico peixe grelhado e mezze na última noite em Atenas.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
  ],
};

export default athensPt;
