import type { CityData } from "../types";

const romePt: CityData = {
  city: {
    slug: "rome",
    name: "Roma",
    country: "Itália",
    countrySlug: "italy",
    lat: 41.9028,
    lng: 12.4964,
    tier: 1,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "FCO",
    airportToCenter:
      "Comboio Leonardo Express de Fiumicino a Termini, cerca de 32 min, 14 EUR, com partidas de 15 em 15 min. Opções mais baratas: o comboio regional FL1 para as estações de Trastevere ou Ostiense por 8 EUR, ou um autocarro Terravision/SIT até Termini por cerca de 6 EUR, mas mais lento no trânsito.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [7, 8],
    monthlyNotes: {
      1: "Fresco, entre 12 e 13 C, com a menor afluência do ano e os preços de hotel mais baratos, ainda que passe alguma chuva. A Epifania, a 6 de janeiro, fecha a época natalícia com um mercado na Piazza Navona, e o primeiro domingo traz entrada gratuita nos museus estatais, incluindo o Coliseu.",
      2: "Ainda ameno, entre 13 e 14 C, e tranquilo fora do curto período de Carnaval, quando as crianças fantasiadas enchem as praças. É possível chover, mas são comuns as tardes de sol para almoçar ao ar livre, e este é um mês forte para uma viagem barata e sem filas.",
      3: "As máximas sobem para perto dos 17 C e os dias alongam-se, com a afluência a aumentar só no final do mês. Atenção ao calendário da Páscoa: se a Semana Santa cair em março, o Vaticano e os hotéis centrais enchem-se e ficam caros depressa.",
      4: "Um dos melhores meses, entre 19 e 20 C, mas colidem dois grandes atrativos: a Semana Santa e a Páscoa enchem a Praça de São Pedro para as celebrações do Papa, e o Natale di Roma, a 21 de abril, encena desfiles de gladiadores no Circo Máximo para a fundação da cidade. Reserve o Vaticano e as datas da Páscoa com semanas de antecedência.",
      5: "De forma fiável quente, entre 23 e 24 C, com serões longos e pouca chuva, o ponto certo antes do calor do verão. A afluência é intensa nos grandes pontos de interesse, por isso os bilhetes com hora marcada para o Coliseu e o Vaticano são essenciais, mas a época de terraços e jantares na praça está no seu melhor.",
      6: "Calor, entre 28 e 29 C, e movimentado, com o festival Estate Romana a começar a encher as margens do rio e os espaços ao ar livre com concertos e cinema ao ar livre por todo o verão. Faça o Coliseu e o Vaticano à hora de abertura e depois refugie-se em igrejas sombrias e almoços demorados à tarde.",
      7: "Pico de calor acima dos 31 C, sol implacável e cada vez menos locais, que partem para a costa. A afluência mantém-se densa nos grandes pontos de interesse e os preços continuam altos, por isso reserve o primeiro horário de entrada em todo o lado e planeie paragens interiores ou à sombra para a fornalha das 14 às 17 horas.",
      8: "O mês mais quente e esgotante, entre 32 e 33 C, com o Ferragosto, a 15 de agosto, a fechar muitas trattorias familiares para o feriado. Se agosto for inevitável, reserve ar condicionado, concentre as visitas ao início da manhã, e conte com uma cidade meio vazia de romanos mas cheia de grupos turísticos.",
      9: "Luz de verão sem o pior do calor: 28 C no início, a suavizar ao longo do mês, com os eventos da Estate Romana ainda a decorrer ao longo do Tibre. A afluência descontrai depois da primeira semana e este é possivelmente o melhor mês no geral para uma escapadela a Roma.",
      10: "Dias quentes à volta dos 23-24 C com as primeiras chuvas a sério a regressarem no final do mês e uma luz rasante soberba para fotografias. A afluência diminui claramente depois de meados de outubro, o que faz dele uma forte escolha de época intermédia tanto pelo clima como pelo valor dos hotéis.",
      11: "Mais fresco, entre 17 e 18 C, com períodos de chuva regulares, mas muitos dias luminosos entre as frentes e os grandes pontos de interesse mais tranquilos do outono. Os preços de época baixa regressam e muitas vezes consegue entrar em restaurantes que em maio exigiam reserva.",
      12: "Ameno para o inverno, aos 14 C, mas chuvoso, com uma árvore de Natal e um presépio na Praça de São Pedro e luzes espalhadas pelo centro. Tranquilo até ao período do Natal ao Ano Novo, quando os preços disparam e a entrada gratuita do primeiro domingo nos museus atrai grandes multidões de locais.",
    },
    climate: {
      1: { highC: 12, lowC: 3, rainyDays: 8 },
      2: { highC: 13, lowC: 4, rainyDays: 8 },
      3: { highC: 16, lowC: 6, rainyDays: 8 },
      4: { highC: 19, lowC: 8, rainyDays: 8 },
      5: { highC: 24, lowC: 12, rainyDays: 6 },
      6: { highC: 28, lowC: 16, rainyDays: 4 },
      7: { highC: 31, lowC: 18, rainyDays: 2 },
      8: { highC: 32, lowC: 18, rainyDays: 3 },
      9: { highC: 28, lowC: 15, rainyDays: 5 },
      10: { highC: 23, lowC: 11, rainyDays: 8 },
      11: { highC: 17, lowC: 7, rainyDays: 9 },
      12: { highC: 14, lowC: 4, rainyDays: 9 },
    },
    budgetLevel: "mid",
    budgetPerDay: { budget: 75, mid: 150, high: 300 },
    tagline: "Três mil anos de ruínas, e o jantar ao ar livre por cima.",
    heroIntro:
      "Roma concentra maravilhas antigas, o Vaticano e a melhor comida informal da Europa num centro que quase todo se pode percorrer a pé, se aceitar as calçadas e as distâncias. Três dias são o mínimo honesto para dividir a Roma antiga, o Vaticano e o núcleo das praças sem uma marcha forçada. Venha na primavera ou no início do outono, reserve o Coliseu e o Vaticano antes de voar, e a cidade entrega como quase nenhum outro lugar.",
    accent: { from: "#C0532B", to: "#E0A43B", ink: "#6E2A15" },
    neighborhoodSlugs: [
      "centro-storico",
      "monti",
      "trastevere",
      "prati",
      "testaccio",
    ],
    nearbyCitySlugs: ["florence"],
  },

  neighborhoods: [
    {
      slug: "centro-storico",
      citySlug: "rome",
      name: "Centro Storico",
      lat: 41.8992,
      lng: 12.4731,
      bestFor: ["first-time", "romantic", "family"],
      vibe: "O núcleo histórico entre o Panteao, a Piazza Navona e a Fontana di Trevi, um labirinto de ruelas cor de ocre que desagua em praças barrocas. Tudo o que está na lista de quem vem pela primeira vez fica a quinze minutos a pé, e as ruas brilham à noite quando os visitantes de um dia rareiam. É o postal, e paga preços de postal para lá dormir.",
      pros: [
        "Chegar a pé ao Panteao, Trevi, Navona e à Escadaria de Espanha sem transportes",
        "Lindo à noite quando os grupos turísticos se dispersam depois do jantar",
        "Cheio de cafés, gelados e sítios de aperitivo a cada esquina",
      ],
      cons: [
        "A zona mais cara da cidade em hotéis",
        "Não há estações de metro lá dentro, por isso anda a pé ou de autocarro para tudo",
        "Cheio e barulhento à volta dos pontos de interesse principais todo o dia",
      ],
    },
    {
      slug: "monti",
      citySlug: "rome",
      name: "Monti",
      lat: 41.8946,
      lng: 12.4917,
      bestFor: ["local", "romantic", "nightlife"],
      vibe: "O bairro mais antigo de Roma fica numa bolsa entre o Coliseu e Termini, outrora o antigo bairro da luz vermelha e hoje o quarteirão mais habitável do centro. Lojas vintage, bares de vinho e pequenas trattorias alinham-se em ruelas cobertas de hera à volta da Piazza della Madonna dei Monti, onde os locais bebem nos degraus da fonte à noite. Dá-lhe acesso a pé à Roma antiga sem o preço nem a azáfama dos autocarros turísticos.",
      pros: [
        "Dez minutos a pé até ao Coliseu e ao Forum",
        "Estação de metro Cavour na linha B, e perto do centro de transportes de Termini",
        "Vida noturna de bairro genuína, de bares de vinho e enotecas, não armadilhas para turistas",
      ],
      cons: [
        "Algumas ruas perto de Termini parecem degradadas depois de escurecer",
        "Os bares populares ficam barulhentos e cheios aos serões de fim de semana",
        "Menos hotéis de nome, mais apartamentos e pequenos boutiques",
      ],
    },
    {
      slug: "trastevere",
      citySlug: "rome",
      name: "Trastevere",
      lat: 41.8896,
      lng: 12.4695,
      bestFor: ["romantic", "nightlife", "local"],
      vibe: "Do outro lado do Tibre em relação ao centro, Trastevere é um emaranhado de ruelas de calçada, hera e estendais que se transforma no quarteirão de jantar e copos mais atmosférico da cidade depois de escurecer. As trattorias espalham-se pelas ruas e os bares à volta da Piazza di Santa Maria mantêm-se cheios para lá da meia-noite. Encantador ao serão, é genuinamente animado nas noites de fim de semana.",
      pros: [
        "A melhor concentração de trattorias clássicas e ambiente noturno de Roma",
        "A pé para o centro por cima do rio e para o Gueto Judaico",
        "Ruelas de postal que ficam lindas na luz da manhã",
      ],
      cons: [
        "Barulhento até de madrugada aos fins de semana, má escolha para quem tem sono leve",
        "Sem metro nenhum, depende de elétricos, autocarros ou dos próprios pés",
        "Alguns restaurantes nas praças principais vivem à conta da localização",
      ],
    },
    {
      slug: "prati",
      citySlug: "rome",
      name: "Prati",
      lat: 41.9075,
      lng: 12.4623,
      bestFor: ["family", "first-time", "budget"],
      vibe: "Um bairro ordenado e elegante de avenidas largas traçado ao lado do Vaticano, com lojas requintadas, restaurantes de confiança e muito menos turistas do que o centro. Deixa-o a uma curta caminhada dos Museus do Vaticano e de São Pedro, com a sensação de uma Roma residencial a sério. Calmo, seguro e bem servido de metro.",
      pros: [
        "A pé até aos Museus do Vaticano e a São Pedro, à frente das multidões dos autocarros",
        "Duas paragens de metro na linha A, diretas a Termini e à Escadaria de Espanha",
        "Hotéis com melhor relação preço-qualidade e restaurantes fiáveis e sem tom turístico",
      ],
      cons: [
        "Mais tranquilo à noite, com pouca oferta de bares e vida noturna",
        "A 20-25 minutos a pé ou uma paragem de metro do lado do Coliseu",
        "Parece mais funcional do que romântico em comparação com o centro antigo",
      ],
    },
    {
      slug: "testaccio",
      citySlug: "rome",
      name: "Testaccio",
      lat: 41.8759,
      lng: 12.4757,
      bestFor: ["local", "budget", "family"],
      vibe: "Um bairro operário a sul do centro construído à volta do antigo matadouro, e a casa espiritual da cucina povera romana, com miudezas e tudo. O seu mercado coberto e as trattorias sem pretensões atraem comensais a sério, enquanto a vida noturna vai dar às discotecas escavadas no Monte Testaccio. Pouco para ver, muito para comer, e preços que os locais realmente pagam.",
      pros: [
        "A melhor comida autêntica de Roma pela relação qualidade-preço, do mercado às trattorias tradicionais",
        "Estação de metro Piramide na linha B, a poucos minutos do Coliseu",
        "Verdadeiro ambiente de bairro com quase nenhum acréscimo turístico",
      ],
      cons: [
        "Escasso em pontos de interesse clássicos, vem aqui para comer, não para papar moscas",
        "A mais de 20 minutos a pé ou uma viagem de metro do núcleo histórico",
        "A zona de discotecas do Monte Testaccio é barulhenta nas noites de fim de semana",
      ],
    },
  ],

  pois: [
    {
      slug: "colosseum",
      citySlug: "rome",
      name: "Coliseu",
      lat: 41.8902,
      lng: 12.4922,
      kind: "sight",
      needsBooking: true,
      tip: "Compre o bilhete combinado Coliseu-Forum-Palatino online com dias de antecedência, esgota e a fila no local chega a uma hora ou mais em época alta. A hora marcada é só para o Coliseu, por isso entre primeiro nele à sua hora e depois use o mesmo bilhete para o Forum e o Palatino nas 24 horas seguintes. Os extras da arena e do subterrâneo precisam de uma reserva à parte com boa antecedência.",
    },
    {
      slug: "roman-forum-palatine",
      citySlug: "rome",
      name: "Forum Romano e Monte Palatino",
      lat: 41.8925,
      lng: 12.4853,
      kind: "sight",
      needsBooking: true,
      tip: "Coberto pelo mesmo bilhete combinado do Coliseu, por isso faça-o no mesmo dia ou no seguinte, dentro da janela de 24 horas. Entre pelo portão mais tranquilo da Via di San Gregorio em vez da entrada do Forum apinhada junto ao Coliseu, e suba primeiro o Palatino para a vista sobre as ruínas antes do sol do meio-dia. Quase não há sombra, por isso leve água e chapéu.",
    },
    {
      slug: "pantheon",
      citySlug: "rome",
      name: "Panteao",
      lat: 41.8986,
      lng: 12.4769,
      kind: "sight",
      needsBooking: true,
      tip: "A entrada custa 5 EUR e é gratuita no primeiro domingo do mês, mas é preciso hora marcada aos fins de semana e feriados, por isso reserve essas datas online com antecedência. Venha à hora de abertura (9h) ou na última hora antes de fechar para ter o interior e o seu óculo aberto sem uma parede de paus de selfie. Num dia de chuva, veja a água cair a direito pelo óculo até ao chão de mármore drenado.",
    },
    {
      slug: "trevi-fountain",
      citySlug: "rome",
      name: "Fontana di Trevi",
      lat: 41.9009,
      lng: 12.4833,
      kind: "sight",
      needsBooking: false,
      tip: "Vá às 7h ou depois da meia-noite para ver mesmo o mármore, a meio da manhã é uma multidão compacta de dez pessoas de fundo. Atire a moeda com a mão direita por cima do ombro esquerdo se quiser a tradição, e evite os cafés caros da praça. A água não é potável, mas os nasoni, as fontes de rua gratuitas ali perto, são.",
    },
    {
      slug: "vatican-museums",
      citySlug: "rome",
      name: "Museus do Vaticano e Capela Sistina",
      lat: 41.9065,
      lng: 12.4536,
      kind: "museum",
      needsBooking: true,
      tip: "Reserve o primeiro horário das 8h online, com semanas de antecedência, e vá direto à Capela Sistina pelo percurso mais vazio antes de voltar atrás, as galerias enchem-se ombro a ombro por volta das 10h. As manhãs de quarta-feira são as mais tranquilas porque a audiência papal atrai as multidões para a praça. A entrada gratuita do último domingo do mês é uma multidão com filas de uma hora, evite-a a menos que tenha paciência infinita.",
    },
    {
      slug: "st-peters-basilica",
      citySlug: "rome",
      name: "Basilica de Sao Pedro",
      lat: 41.9022,
      lng: 12.4539,
      kind: "sight",
      needsBooking: false,
      tip: "A entrada na basílica é gratuita, mas a fila da segurança na praça pode chegar a uma hora, por isso chegue à abertura das 7h ou venha ao final da tarde. O código de vestuário é estrito: ombros e joelhos cobertos ou é recusado à porta. A subida à cúpula é um extra pago (cerca de 10 EUR com o elevador até ao terraço, 8 EUR a pé) e vale a pena pela vista a direito sobre a nave e sobre Roma.",
    },
    {
      slug: "piazza-navona",
      citySlug: "rome",
      name: "Praca Navona",
      lat: 41.8992,
      lng: 12.4731,
      kind: "sight",
      needsBooking: false,
      tip: "A praça barroca construída sobre um estádio antigo é gratuita e melhor de manhã cedo ou depois do jantar, quando as multidões e os caricaturistas rareiam. A Fonte dos Quatro Rios de Bernini é a peça central, mas não se sente num café de esplanada aqui, o acréscimo pela localização é brutal. Vire uma rua para oeste por uma fração do preço.",
    },
    {
      slug: "spanish-steps",
      citySlug: "rome",
      name: "Escadaria de Espanha",
      lat: 41.906,
      lng: 12.4823,
      kind: "sight",
      needsBooking: false,
      tip: "Sentar-se nos degraus é proibido e a polícia faz cumprir com multas, por isso esta é uma paragem para ficar de pé e fotografar, não para descansar. Venha ao nascer do sol para a escadaria vazia, ou suba à igreja de Trinita dei Monti no topo para uma vista gratuita sobre os telhados. A casa Keats-Shelley na base é um desvio tranquilo se lhe apetecer.",
    },
    {
      slug: "galleria-borghese",
      citySlug: "rome",
      name: "Galeria Borghese",
      lat: 41.9142,
      lng: 12.4922,
      kind: "museum",
      needsBooking: true,
      tip: "Não entra sem uma hora marcada de duas horas reservada previamente, e esgotam com dias de antecedência, por isso reserve isto antes de tudo na sua viagem. Contém as maiores esculturas de Bernini e uma sala de Caravaggios numa vila compacta, por isso duas horas chegam genuinamente. Chegue 15 minutos antes para deixar a mala no bengaleiro obrigatório antes de a sua janela começar.",
    },
    {
      slug: "trastevere-lanes",
      citySlug: "rome",
      name: "Ruelas de Trastevere",
      lat: 41.8896,
      lng: 12.4695,
      kind: "experience",
      needsBooking: false,
      tip: "Deambule pelas ruelas de calçada de manhã para as fotos com hera e estendais sem multidões, e depois volte a partir das 20h para a cena de jantar e copos. Aponte para as ruas à volta da Piazza di Santa Maria in Trastevere em vez da própria praça, onde os restaurantes vivem da vista. Reserve mesa numa trattoria, as boas enchem por volta das 20h30 aos fins de semana.",
    },
    {
      slug: "campo-de-fiori",
      citySlug: "rome",
      name: "Mercado de Campo de' Fiori",
      lat: 41.8956,
      lng: 12.4722,
      kind: "food",
      needsBooking: false,
      tip: "O mercado da manhã funciona sensivelmente das 7h às 14h, de segunda a sábado, e está hoje mais souvenir turístico do que mercearia local, por isso venha para ver e fotografar em vez de comprar barato. Compre fruta, queijo e uma fatia de pizza bianca na padaria da esquina, o Forno Campo de' Fiori, para um piquenique. À noite a praça vira uma animada cena de bares de estudantes.",
    },
    {
      slug: "castel-sant-angelo",
      citySlug: "rome",
      name: "Castelo de Santo Angelo",
      lat: 41.9031,
      lng: 12.4663,
      kind: "sight",
      needsBooking: false,
      tip: "O túmulo cilíndrico de Adriano transformado em fortaleza papal fica mesmo entre o Vaticano e o centro, por isso combine-o com uma manhã no Vaticano. Reserve online para saltar a fila de bilhetes, depois suba a rampa em espiral até ao terraço na cobertura para um dos melhores panoramas de Roma, com a cúpula de São Pedro em primeiro plano. A Ponte Santo Angelo em frente, ladeada de estátuas, é gratuita e melhor ao anoitecer.",
    },
    {
      slug: "villa-borghese",
      citySlug: "rome",
      name: "Parque de Villa Borghese",
      lat: 41.9142,
      lng: 12.4853,
      kind: "park",
      needsBooking: false,
      tip: "O grande parque central de Roma é gratuito e o par natural da Galeria Borghese lá dentro, por isso use as horas em redor antes ou depois da sua hora na galeria. Caminhe até ao terraço do Pincio, na orla ocidental, para uma vista ampla e gratuita sobre a Piazza del Popolo e os telhados na direção de São Pedro, melhor ao pôr do sol. Alugue uma bicicleta ou um bote a remos no pequeno lago se levar crianças.",
    },
    {
      slug: "jewish-ghetto-food",
      citySlug: "rome",
      name: "Gueto Judaico",
      lat: 41.8925,
      lng: 12.4778,
      kind: "food",
      needsBooking: false,
      tip: "O antigo bairro judaico de Roma à volta da Via del Portico d'Ottavia é o sítio para os carciofi alla giudia, a alcachofra achatada e frita, melhores de outubro à primavera quando estão na época. Venha para um almoço tardio, peça a alcachofra frita e o baccala, e apanhe um doce na histórica padaria Boccione na esquina. Note que o quarteirão está tranquilo aos sábados por causa do Sabbath.",
    },
  ],

  itineraries: [
    {
      citySlug: "rome",
      days: 2,
      summary:
        "Dois dias cobrem os maiores êxitos de Roma, mas é uma corrida pelos destaques e vai senti-lo, porque Roma precisa mesmo de três. Em 48 horas consegue fazer a Roma antiga (Coliseu, Forum, Palatino) no primeiro dia e o Vaticano mais o núcleo das praças (Panteao, Trevi, Navona) no segundo, com jantar em Trastevere nas duas noites. O que tem mesmo de cortar: a Galeria Borghese, Villa Borghese, os interiores do Castelo de Santo Angelo, a comida de Testaccio e qualquer demora lenta, por isso isto é uma marcha, não um passeio. Serve para uma escapadela de fim de semana, uma escala, ou uma primeira prova antes de combinar com Florença. Os inegociáveis: reserve previamente o bilhete combinado Coliseu-Forum e o horário das 8h do Vaticano antes de voar, ou perde horas em filas que não pode pagar numa viagem de dois dias. Instale-se no Centro Storico para que as duas manhãs comecem a pé e os serões o ponham a poucos passos do jantar. Se ganhar um terceiro dia, acrescente a Borghese e abrande, é o melhor upgrade possível.",
      stayNeighborhoodSlug: "centro-storico",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Roma antiga: Coliseu, Forum, Palatino",
          morning: [
            {
              poiSlug: "colosseum",
              text: "Comece no Coliseu à sua hora de abertura reservada, antes de as filas e o calor aumentarem. Contorne os dois pisos para a vista completa da arena, e depois saia na direção do Forum usando o mesmo bilhete combinado.",
              durationMin: 90,
            },
            {
              poiSlug: "roman-forum-palatine",
              text: "Entre no Forum Romano e suba o Monte Palatino ao lado com o mesmo bilhete. Suba primeiro o Palatino para a vista sobre as ruínas, depois serpenteie pelos templos e arcos do Forum antes do pico do sol do meio-dia.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              text: "Almoce e recupere em Monti, a dez minutos a pé do Forum, num bar de vinho ou trattoria à volta da Piazza della Madonna dei Monti. Este é o antídoto local aos cafés turísticos mesmo junto ao Coliseu.",
              durationMin: 90,
            },
            {
              text: "Desvie-se até ao Monte Capitolino e à Piazza del Campidoglio de Miguel Ângelo, depois ao terraço gratuito por trás para uma vista sobre o Forum que acabou de percorrer. É uma subida de cinco minutos e o melhor miradouro gratuito sobre a Roma antiga.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "trastevere-lanes",
              text: "Atravesse o rio para Trastevere ao serão, deambulando pelas ruelas de calçada à medida que os bares enchem. Reserve mesa numa trattoria para as 20h30, as boas fora da praça principal estão cheias a essa hora em qualquer noite movimentada.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Vaticano e o núcleo das praças",
          morning: [
            {
              poiSlug: "vatican-museums",
              text: "Esteja nos Museus do Vaticano à sua hora reservada das 8h e vá direto à Capela Sistina antes de as galerias entupirem por volta das 10h. A quarta-feira é a manhã mais tranquila porque a audiência papal atrai as multidões para a praça.",
              durationMin: 150,
            },
            {
              poiSlug: "st-peters-basilica",
              text: "Caminhe a seguir até à Basilica de Sao Pedro, gratuita à entrada com ombros e joelhos cobertos. Se as pernas aguentarem, pague a pequena taxa da subida à cúpula e a vista a direito sobre a nave e sobre a cidade.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "pantheon",
              text: "Volte a atravessar o rio e dirija-se ao Panteao, o edifício mais bem preservado da Roma antiga, entrando à sua hora marcada se for fim de semana. Fique sob o óculo aberto, depois tome um café num dos bares históricos da praça.",
              durationMin: 75,
            },
            {
              poiSlug: "piazza-navona",
              text: "Caminhe dois minutos até à Praca Navona para a Fonte dos Quatro Rios de Bernini sobre a planta do antigo estádio barroco. Continue uma rua para oeste para uma bebida a preços não turísticos.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "trevi-fountain",
              text: "Faça um circuito até à Fontana di Trevi ao serão, quando as multidões aliviam um pouco e o mármore está iluminado. Atire a moeda, depois suba à Escadaria de Espanha a poucos minutos para a escadaria iluminada.",
              durationMin: 60,
            },
            {
              text: "Termine com um jantar no Centro Storico perto do seu hotel, reservando com antecedência para qualquer sítio com nome. Feche a noite com um gelado de uma gelataria a sério, das que mantêm as cubas tapadas e guardadas em baixo, não empilhadas em espirais de néon.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "rome",
      days: 3,
      summary:
        "Sim, três dias são a duração certa para Roma, e é o que recomendamos para uma primeira visita. Dão à Roma antiga um dia inteiro (Coliseu, Forum, Palatino, mais Monti), ao Vaticano a sua própria manhã seguida do Castelo de Santo Angelo, e um dia dedicado ao núcleo das praças: Panteao, Trevi, Navona, a Escadaria de Espanha e Campo de' Fiori. Come bem em três bairros diferentes, encaixa tanto Trastevere como uma noite de trattoria romana a sério, e ainda anda a um ritmo que o deixa sentar-se numa praça em vez de passar por ela a correr. O que ainda fica cortado: a Galeria Borghese, Villa Borghese e a cena gastronómica de Testaccio, que é exatamente o que um quarto dia acrescenta. Serve para quem vem pela primeira vez, casais, e quem segue depois para Florença. Fique em Monti: vai a pé ao Coliseu, fica no metro de Cavour e perto de Termini para o salto ao Vaticano, e os seus bares de vinho fazem a melhor base para os serões. Reserve previamente o bilhete Coliseu-Forum e o horário das 8h do Vaticano antes de voar.",
      stayNeighborhoodSlug: "monti",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Roma antiga: Coliseu, Forum, Palatino, Monti",
          morning: [
            {
              poiSlug: "colosseum",
              text: "Comece no Coliseu à sua hora de abertura reservada, à frente das filas e do calor. Percorra os dois pisos para a vista completa da arena, depois dirija-se ao Forum com o mesmo bilhete combinado.",
              durationMin: 90,
            },
            {
              poiSlug: "roman-forum-palatine",
              text: "Entre a seguir no Forum Romano e no Monte Palatino, usando o portão mais tranquilo da Via di San Gregorio. Suba primeiro o Palatino para a vista geral das ruínas, depois desça pelo Forum antes de o sol estar a pino.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              text: "Almoce em Monti, a uma curta caminhada do Forum, numa trattoria ou enoteca à volta da Piazza della Madonna dei Monti. Não tenha pressa, mereceu a pausa depois de uma manhã de pé nas ruínas.",
              durationMin: 90,
            },
            {
              text: "Suba o Monte Capitolino à Piazza del Campidoglio de Miguel Ângelo e ao terraço gratuito por trás para um panorama sobre o Forum. Se tiver energia, os Museus Capitolinos aqui guardam a loba de bronze original e uma soberba coleção antiga.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Fique em Monti ao serão, bebendo nos degraus da fonte da praça principal como os locais antes do jantar. Os bares de vinho e as pequenas trattorias do bairro ficam a poucos passos do seu hotel.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Vaticano e Castelo de Santo Angelo",
          morning: [
            {
              poiSlug: "vatican-museums",
              text: "Esteja nos Museus do Vaticano à sua hora reservada das 8h e vá direto à Capela Sistina antes da azáfama. As manhãs de quarta-feira são as mais tranquilas graças à audiência papal, que atrai as multidões para a praça.",
              durationMin: 150,
            },
            {
              poiSlug: "st-peters-basilica",
              text: "Caminhe até à Basilica de Sao Pedro, gratuita à entrada com ombros e joelhos cobertos. Pague a pequena taxa da subida à cúpula se as pernas permitirem, a vista sobre a nave e sobre Roma é a recompensa.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              text: "Almoce em Prati, a alguns quarteirões do Vaticano, onde os restaurantes são fiáveis e livres do acréscimo dos autocarros turísticos que se apanha mesmo junto a São Pedro. Bom sítio para abrandar antes do ponto de interesse da tarde.",
              durationMin: 75,
            },
            {
              poiSlug: "castel-sant-angelo",
              text: "Caminhe até ao Castelo de Santo Angelo, entre o Vaticano e o rio, reservando online para saltar a fila. Suba a rampa em espiral até ao terraço na cobertura para um panorama com a cúpula de São Pedro em primeiro plano, depois atravesse a Ponte Santo Angelo ladeada de estátuas na direção do centro.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "trastevere-lanes",
              text: "Atravesse para Trastevere para jantar, deambulando pelas ruelas de calçada à medida que os bares enchem. Reserve numa trattoria fora da praça principal para as 20h30, e feche com uma bebida na Piazza di Santa Maria.",
              durationMin: 180,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Núcleo das praças: Panteao, Trevi, Navona",
          morning: [
            {
              poiSlug: "pantheon",
              text: "Comece no Panteao à abertura das 9h, à sua hora marcada se for fim de semana, para ficar sob o óculo antes das multidões. Tome café num bar histórico da praça, depois caminhe dois minutos até à paragem seguinte.",
              durationMin: 75,
            },
            {
              poiSlug: "piazza-navona",
              text: "Aprecie a Praca Navona e a Fonte dos Quatro Rios de Bernini na planta de um antigo estádio. Fotografe-a, depois passe uma rua fora da praça para uma bebida a preços justos.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "campo-de-fiori",
              text: "Caminhe até Campo de' Fiori para o fim do mercado da manhã, apanhando fruta e uma fatia de pizza bianca do Forno Campo de' Fiori para um almoço leve. Depois corte para o Gueto Judaico ali perto para uma alcachofra frita se preferir sentar-se.",
              durationMin: 90,
            },
            {
              poiSlug: "trevi-fountain",
              text: "Faça um circuito até à Fontana di Trevi, aceitando que à tarde há multidões, e atire a moeda por cima do ombro esquerdo. Depois suba à Escadaria de Espanha a poucos minutos, e à igreja de Trinita dei Monti para a vista gratuita sobre os telhados.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "spanish-steps",
              text: "Demore-se à volta da Escadaria de Espanha e das elegantes ruas de compras abaixo à medida que a luz se vai, depois derive de volta na direção do centro. Aqui está tudo a uma curta caminhada, por isso deambule em vez de planear.",
              durationMin: 60,
            },
            {
              text: "Reserve um jantar de despedida no Centro Storico ou de volta a Monti, esbanjando um pouco na sua última refeição romana. Termine com um gelado de uma gelataria a sério, das que guardam as cubas tapadas e em baixo.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "rome",
      days: 4,
      summary:
        "Quatro dias são o ponto certo para uma primeira visita a Roma, transformando uma corrida de visitas numas férias a sério. Os dias um a três cobrem o essencial: a Roma antiga (Coliseu, Forum, Palatino), o Vaticano com o Castelo de Santo Angelo, e o núcleo das praças do Panteao, Trevi e Navona, cada um feito sem pressas. O quarto dia é a válvula de escape, construído à volta da Galeria Borghese, que tem de ser reservada previamente numa hora marcada estrita e não pode ser visitada sem ela, seguida dos jardins de Villa Borghese e de uma longa e gulosa tarde gastronómica por Trastevere ou Testaccio. Esta duração serve para viajantes que detestam a marcha forçada, casais, e quem tem voos que ladeiam a viagem de forma incómoda. Para quatro dias recomendamos ficar em Trastevere: aceitou um ritmo mais lento, e as suas ruelas e trattorias fazem do regresso a casa a cada noite a melhor parte do dia. Para lá de quatro dias, acrescente uma excursão de um dia a Tívoli pela Villa de Adriano, ou siga para Florença de comboio rápido em hora e meia. Reserve o Coliseu, o Vaticano e, sobretudo, a Borghese com boa antecedência.",
      stayNeighborhoodSlug: "trastevere",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Roma antiga: Coliseu, Forum, Palatino",
          morning: [
            {
              poiSlug: "colosseum",
              text: "Comece no Coliseu à sua hora de abertura reservada, antes das filas e do calor. Contorne os dois pisos, depois passe ao Forum com o mesmo bilhete combinado.",
              durationMin: 90,
            },
            {
              poiSlug: "roman-forum-palatine",
              text: "Entre no Forum Romano e no Monte Palatino com o mesmo bilhete, usando o portão mais tranquilo de San Gregorio. Suba primeiro o Palatino para a vista geral, depois desça pelo Forum antes do meio-dia.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              text: "Almoce em Monti junto ao Forum, num bar de vinho ou trattoria à volta da Piazza della Madonna dei Monti. Abrande, a tarde é de propósito leve no primeiro dia.",
              durationMin: 90,
            },
            {
              text: "Suba o Monte Capitolino à Piazza del Campidoglio de Miguel Ângelo e ao terraço gratuito por trás, sobre o Forum. Os Museus Capitolinos aqui são o melhor extra se quiser mais Roma antiga.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Volte a Trastevere para jantar, entrando aos poucos no bairro que está a chamar de casa. Reserve numa trattoria fora da praça principal e termine com uma bebida na Piazza di Santa Maria.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Vaticano e Castelo de Santo Angelo",
          morning: [
            {
              poiSlug: "vatican-museums",
              text: "Esteja nos Museus do Vaticano à sua hora das 8h e vá direto à Capela Sistina antes de as galerias encherem. A quarta-feira é a manhã mais tranquila, graças à audiência papal que puxa as multidões para a praça.",
              durationMin: 150,
            },
            {
              poiSlug: "st-peters-basilica",
              text: "Caminhe até à Basilica de Sao Pedro, gratuita com ombros e joelhos cobertos. Pague a subida à cúpula se as pernas permitirem, pela vista sobre a nave e sobre toda a cidade.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              text: "Almoce em Prati junto ao Vaticano, onde a comida é de confiança e livre do acréscimo dos grupos turísticos junto a São Pedro. Uma boa pausa antes da tarde.",
              durationMin: 75,
            },
            {
              poiSlug: "castel-sant-angelo",
              text: "Caminhe até ao Castelo de Santo Angelo, reservando online para saltar a fila, e suba a rampa até ao terraço na cobertura para o panorama da cúpula de São Pedro. Atravesse a Ponte Santo Angelo ladeada de estátuas de volta ao centro ao anoitecer.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "piazza-navona",
              text: "Passeie pela Praca Navona ao serão com a fonte de Bernini iluminada e a praça no seu mais calmo. Tome um aperitivo uma rua fora da praça, onde os preços são sensatos.",
              durationMin: 60,
            },
            {
              text: "Jantar de volta a Trastevere, deambulando pelas ruelas no caminho de entrada. As boas mesas enchem por volta das 20h30 aos fins de semana, por isso reserve com antecedência.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Núcleo das praças: Panteao, Trevi, Navona",
          morning: [
            {
              poiSlug: "pantheon",
              text: "Comece no Panteao à abertura das 9h, à sua hora marcada se for fim de semana, para apanhar o óculo antes das multidões. Café num bar histórico da praça, depois siga em frente.",
              durationMin: 75,
            },
            {
              poiSlug: "campo-de-fiori",
              text: "Caminhe até Campo de' Fiori para o mercado da manhã e uma fatia de piquenique do Forno Campo de' Fiori. Corte para o Gueto Judaico ali perto para uma alcachofra frita se preferir um almoço sentado.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "trevi-fountain",
              text: "Dirija-se à Fontana di Trevi, atire a moeda por cima do ombro esquerdo, e aceite a multidão da tarde. Depois suba à Escadaria de Espanha e a Trinita dei Monti para a vista gratuita sobre os telhados.",
              durationMin: 90,
            },
            {
              poiSlug: "spanish-steps",
              text: "Deambule pelas elegantes ruas abaixo da Escadaria de Espanha, vendo montras na faixa de luxo da Via dei Condotti. Aqui está tudo a uma curta caminhada, por isso derive em vez de marchar.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Jantar no Centro Storico ou de volta a Trastevere, reservando com antecedência para qualquer sítio bem avaliado. Termine com um gelado de uma gelataria a sério, cubas guardadas tapadas e em baixo, não em espirais altas.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Borghese, parque de Villa Borghese, e uma tarde gastronómica",
          morning: [
            {
              poiSlug: "galleria-borghese",
              text: "Use a sua hora marcada de duas horas reservada na Galeria Borghese, chegando 15 minutos antes para o controlo obrigatório de bagagem. As esculturas de Bernini e a sala de Caravaggio são o ponto alto de qualquer itinerário de arte em Roma, e duas horas chegam genuinamente para a vila compacta.",
              durationMin: 120,
            },
            {
              poiSlug: "villa-borghese",
              text: "Saia para o parque de Villa Borghese em redor, gratuito e verde, e caminhe até ao terraço do Pincio na orla ocidental. A vista sobre a Piazza del Popolo e os telhados na direção de São Pedro é uma das melhores da cidade, e gratuita.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "jewish-ghetto-food",
              text: "Dedique a tarde a comer: ou o Gueto Judaico pelos carciofi alla giudia e baccala com um doce do Boccione, ou apanhe o metro para Testaccio pelo seu mercado coberto e as trattorias tradicionais de miudezas. Ambos são sobre a comida, não sobre os pontos de interesse.",
              durationMin: 120,
            },
            {
              text: "Ande para queimar com um circuito lento por Trastevere na hora dourada, quando as ruelas ficam melhor em fotografia e os visitantes de um dia já se foram. Um gelado ou um aperitivo precoce faz a ponte para o jantar.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Reserve um jantar de despedida em Trastevere, gastando um pouco mais na sua última refeição romana numa trattoria que espreitou antes. Cacio e pepe, carbonara ou saltimbocca, esta é a refeição para ir ao clássico.",
              durationMin: 120,
            },
            {
              text: "Termine com um copo antes de dormir na Piazza di Santa Maria ou num bar de ruela tranquilo, a uma curta caminhada da cama. Sem viagem de regresso para planear, que é a razão de ser de se basear aqui durante quatro dias.",
              durationMin: 45,
            },
          ],
        },
      ],
    },
  ],
};

export default romePt;
