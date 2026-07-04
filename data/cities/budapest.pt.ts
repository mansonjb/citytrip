import type { CityData } from "../types";

const budapestPt: CityData = {
  city: {
    slug: "budapest",
    name: "Budapeste",
    country: "Hungria",
    countrySlug: "hungary",
    lat: 47.4979,
    lng: 19.0402,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "BUD",
    airportToCenter:
      "O autocarro expresso do aeroporto 100E vai direto até Deák Ferenc tér no centro, cerca de 40 minutos por à volta de 2,20 EUR (2200 HUF). Compre o bilhete próprio do 100E na máquina da paragem; um bilhete simples normal não é válido nesta linha.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [8],
    monthlyNotes: {
      1: "Frio e muitas vezes cinzento, com máximas à volta de 2C e mínimas abaixo de zero, mas os banhos termais estão no seu ponto mais mágico, com o vapor a subir das piscinas ao ar livre. As tarifas de hotel estão no mínimo do ano e os grandes pontos turísticos ficam quase vazios assim que os mercados de Natal fecham a 1 de janeiro.",
      2: "Ainda gelado, sossegado e barato, o último mês completo antes de os preços de primavera voltarem. Os banhos Széchenyi e Gellért são o refúgio óbvio; leve roupa para mínimas à volta de menos 2C e pouca luz de dia.",
      3: "Os dias sobem para os 12C e surgem os primeiros eventos de vinho de primavera nos wine bars e nas caves. As multidões mantêm-se ligeiras durante a maior parte do mês e os quartos são bastante mais baratos do que de abril em diante.",
      4: "Primavera a sério, à volta dos 17C, flores na Ilha Margarida e os primeiros barcos-restaurante e esplanadas dos ruin bars a reabrir. O fim de semana da Páscoa fica movimentado, por isso reserve antes a visita ao Parlamento se as suas datas coincidirem.",
      5: "Um dos dois melhores meses, com máximas perto dos 22C, muita luz e esplanadas cheias ao longo do Danúbio. Os preços chegam ao topo da época intermédia e a cidade enche no fim de semana de Pentecostes, por isso reserve os quartos cedo.",
      6: "Quente, à volta dos 26C, com noites longas e as esplanadas de vinho e cerveja artesanal a todo o gás. As multidões crescem de forma constante mas ficam aquém do pico de agosto; vá antes de o calor a sério chegar.",
      7: "Quente, à volta dos 29C, e movimentado, com as piscinas ao ar livre e a brisa do Danúbio a fazer o arrefecimento. Faça cedo os pontos turísticos expostos ao sol, como a Colina Gellért e o Bastião dos Pescadores, e depois recolha-se a um banho ou esplanada à sombra de tarde.",
      8: "O mês a evitar: pico de calor de 29C, as maiores multidões do ano e o Festival Sziget a aterrar na Ilha Óbuda em meados de agosto, que inunda a cidade com 400.000 visitantes e faz subir as tarifas dos quartos. Se vier agora, reserve com muita antecedência e planeie tardes indoor ou à beira-rio.",
      9: "Um dos melhores meses, com máximas à volta dos 24C, multidões a diminuir depois da primeira semana e eventos de vinho da vindima nas caves. Os preços aliviam; esta é a alternativa inteligente ao verão.",
      10: "Dias frescos de 17C e forte cor de outono na Colina Gellért e na Ilha Margarida. O número de turistas cai depois de meados do mês e as tarifas de hotel acompanham, enquanto os banhos sabem especialmente bem à medida que o ar arrefece.",
      11: "Cinzento e frio, com máximas à volta dos 8C, o período mais sossegado do ano até os mercados de Natal abrirem no final de novembro na Vörösmarty tér e na Basílica de Santo Estêvão. O final de novembro é um bom momento: ambiente de mercado completo sem a densidade de dezembro.",
      12: "Os mercados de Natal na Vörösmarty tér e em frente à Basílica de Santo Estêvão vão do final de novembro ao início de janeiro e atraem muita gente ao fim de semana, com a praça da basílica a acrescentar um espetáculo de luz e um ringue de gelo. Conte com mínimas abaixo de zero, vinho quente por todo o lado e tarifas de dezembro bem acima da norma de inverno.",
    },
    climate: {
      1: { highC: 2, lowC: -3, rainyDays: 8 },
      2: { highC: 5, lowC: -2, rainyDays: 7 },
      3: { highC: 12, lowC: 2, rainyDays: 7 },
      4: { highC: 17, lowC: 6, rainyDays: 8 },
      5: { highC: 22, lowC: 11, rainyDays: 9 },
      6: { highC: 26, lowC: 14, rainyDays: 9 },
      7: { highC: 29, lowC: 16, rainyDays: 8 },
      8: { highC: 29, lowC: 15, rainyDays: 7 },
      9: { highC: 24, lowC: 11, rainyDays: 6 },
      10: { highC: 17, lowC: 7, rainyDays: 7 },
      11: { highC: 8, lowC: 3, rainyDays: 8 },
      12: { highC: 3, lowC: -1, rainyDays: 9 },
    },
    budgetLevel: "low",
    budgetPerDay: { budget: 55, mid: 105, high: 210 },
    tagline: "Banhos termais, avenidas grandiosas, ruin bars, preços baixos.",
    heroIntro:
      "Budapeste divide-se ao longo do Danúbio entre a Buda montanhosa, com o seu castelo, e o lado de Pest, plano e grandioso, onde acontece a maior parte da vida. É uma das capitais clássicas mais baratas da Europa, e os banhos termais, os ruin bars e a frente-rio do Parlamento dão-lhe uma mistura que nenhuma outra cidade iguala. Três dias cobrem o essencial a um ritmo humano; o truque é fazer cedo os miradouros expostos ao sol e guardar os banhos para quando as pernas cederem.",
    accent: { from: "#E0A43B", to: "#B23A6E", ink: "#6E2547" },
    neighborhoodSlugs: [
      "belvaros",
      "jewish-quarter",
      "castle-district",
      "ujlipotvaros",
      "jozsefvaros",
    ],
    nearbyCitySlugs: ["prague", "vienna"],
  },

  neighborhoods: [
    {
      slug: "belvaros",
      citySlug: "budapest",
      name: "Belváros (Distrito V)",
      lat: 47.4979,
      lng: 19.0513,
      bestFor: ["first-time", "romantic"],
      vibe: "O coração ribeirinho de Pest, a envolver o Parlamento, a Basílica de Santo Estêvão e a rua pedonal de compras Váci utca. É o distrito mais cuidado e central, a pé de quase tudo do lado de Pest e a uma ponte do Castelo de Buda. Movimentado e um pouco formal de dia, acalma depois de as lojas fecharem.",
      pros: [
        "O Parlamento, a Basílica e a Ponte das Correntes, todos a um curto passeio",
        "A maior escolha de hotéis e acesso fácil ao metro nas três linhas",
        "Sem transportes necessários para uma viagem de 2 dias",
      ],
      cons: [
        "Os restaurantes ao longo da Váci utca são armadilhas para turistas com preços inflacionados",
        "O ambiente menos local de qualquer distrito central",
        "As tarifas dos quartos ficam 20-30 por cento acima dos distritos mais afastados",
      ],
    },
    {
      slug: "jewish-quarter",
      citySlug: "budapest",
      name: "Bairro Judeu (Erzsébetváros, Distrito VII)",
      lat: 47.4979,
      lng: 19.0662,
      bestFor: ["nightlife", "local", "budget"],
      vibe: "O antigo bairro judeu tornado motor da vida noturna, casa da Sinagoga da Rua Dohány e dos ruin bars em pátios em ruínas. De dia é arte de rua, café de terceira vaga e pastelarias kosher; depois de escurecer é a cena de bares mais densa da cidade. Central, barato e barulhento no bom sentido.",
      pros: [
        "O Szimpla Kert e toda a cena dos ruin bars mesmo à sua porta",
        "A melhor comida e café descontraídos da cidade a preços locais",
        "A dez minutos a pé da Basílica e do rio",
      ],
      cons: [
        "Barulho de bares nas ruas principais até de madrugada aos fins de semana",
        "Alguns quarteirões estão degradados e a meio de obras",
        "Não é o distrito para uma noite cedo ou uma estadia sossegada",
      ],
    },
    {
      slug: "castle-district",
      citySlug: "budapest",
      name: "Bairro do Castelo (Vár, Distrito I)",
      lat: 47.4967,
      lng: 19.0347,
      bestFor: ["romantic", "first-time"],
      vibe: "O cimo empedrado do lado de Buda que guarda o Castelo de Buda, a Igreja de Matias e o Bastião dos Pescadores. Esvazia-se por completo assim que os visitantes de um dia partem ao fim da tarde, e as vistas noturnas sobre Pest são as melhores da cidade. Ficar aqui significa que os pontos turísticos do lado do castelo são seus antes de chegarem as multidões.",
      pros: [
        "O Castelo de Buda, a Igreja de Matias e o Bastião dos Pescadores a pé",
        "Noites calmas e genuinamente cheias de atmosfera depois de as multidões partirem",
        "A melhor panorâmica de pôr do sol sobre o Danúbio e o Parlamento",
      ],
      cons: [
        "As ruas íngremes de calçada dão trabalho com bagagem ou carrinhos de bebé",
        "Poucos supermercados e refeições descontraídas limitadas ali no cimo",
        "Atravessa o rio para a maior parte da vida noturna e das necessidades do dia a dia",
      ],
    },
    {
      slug: "ujlipotvaros",
      citySlug: "budapest",
      name: "Újlipótváros (Distrito XIII)",
      lat: 47.5147,
      lng: 19.0509,
      bestFor: ["local", "family", "romantic"],
      vibe: "Uma malha residencial arborizada logo a norte do Parlamento, tudo prédios Bauhaus, ruas ladeadas de árvores e bistrôs de bairro. É aqui que os locais com opções vivem de verdade, e a cena de comida e cafés reflete-o. O centro fica a 15 minutos a pé ou a duas paragens de elétrico, e a Ilha Margarida está à porta.",
      pros: [
        "A melhor comida e cafés locais a preços honestos, sem turistas",
        "Ruas sossegadas, planas e amigas de carrinhos de bebé, e o passeio ribeirinho",
        "A Ilha Margarida e o Parlamento ambos a um curto passeio",
      ],
      cons: [
        "Vai a pé ou de elétrico para a maioria dos grandes pontos turísticos, mesmo que seja perto",
        "Sossegado à noite se quer vida noturna à porta",
      ],
    },
    {
      slug: "jozsefvaros",
      citySlug: "budapest",
      name: "Józsefváros (Distrito VIII)",
      lat: 47.4889,
      lng: 19.0708,
      bestFor: ["budget", "local"],
      vibe: "Um distrito grande e misto atrás do Grande Boulevard, em bruto nas suas margens mas a gentrificar depressa à volta do bairro dos museus e do Corvin Quarter. Guarda o Museu Nacional Húngaro e alguns dos quartos mais baratos meio-centrais da cidade. Irregular de quarteirão para quarteirão mas a melhorar depressa e bem ligado.",
      pros: [
        "Os preços de quarto mais baixos a pé do centro",
        "O Museu Nacional Húngaro e as fachadas grandiosas do Bairro dos Palácios",
        "Fortes ligações de metro e elétrico por todo o distrito",
      ],
      cons: [
        "Alguns quarteirões junto à orla exterior ainda parecem negligenciados",
        "Menos pontos turísticos do que os distritos ribeirinhos",
        "A qualidade das ruas varia muito de um quarteirão para o outro",
      ],
    },
  ],

  pois: [
    {
      slug: "szechenyi-chain-bridge",
      citySlug: "budapest",
      name: "Ponte das Correntes Széchenyi",
      lat: 47.4988,
      lng: 19.0435,
      kind: "sight",
      needsBooking: false,
      tip: "Percorra-a ao anoitecer, quando os leões e todo o tabuleiro se iluminam e o castelo brilha por trás; a ponta de Pest junto à Roosevelt tér dá a melhor foto de regresso a Buda. É grátis e está aberta a toda a hora, por isso atravesse-a tarde, quando o movimento de peões do dia já limpou.",
    },
    {
      slug: "hungarian-parliament",
      citySlug: "budapest",
      name: "Parlamento Húngaro",
      lat: 47.5072,
      lng: 19.0456,
      kind: "sight",
      needsBooking: true,
      tip: "O interior é só com visita guiada e as sessões em inglês esgotam com dias de antecedência em época alta, por isso compre online muito antes de chegar em vez de arriscar na bilheteira. Escolha uma hora cedo e fotografe o exterior a partir da marginal de Batthyány tér, do lado de Buda, pela fachada ribeirinha completa.",
    },
    {
      slug: "buda-castle",
      citySlug: "budapest",
      name: "Castelo de Buda",
      lat: 47.496,
      lng: 19.0397,
      kind: "sight",
      needsBooking: false,
      tip: "Os pátios, muralhas e terraços são grátis e estão abertos todo o dia, por isso só paga se entrar na Galeria Nacional ou no Museu de História lá dentro. Fuja à fila do funicular junto à Ponte das Correntes e suba antes pelas escadas do jardim Várkert Bazár ou apanhe o autocarro 16, ambos mais rápidos e mais baratos.",
    },
    {
      slug: "fishermans-bastion",
      citySlug: "budapest",
      name: "Bastião dos Pescadores",
      lat: 47.5025,
      lng: 19.0347,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Os terraços de baixo são grátis e as pequenas torres de cima cobram só durante o dia, por isso chegue antes das 9h e percorre o nível de cima de graça com a vista do Parlamento só para si. Esta é a panorâmica de postal de Budapeste; o nascer do sol e o fim da noite são as duas janelas sem multidões.",
    },
    {
      slug: "matthias-church",
      citySlug: "budapest",
      name: "Igreja de Matias",
      lat: 47.5019,
      lng: 19.0343,
      kind: "sight",
      needsBooking: true,
      tip: "O telhado de telha colorida é a atração e pode admirá-lo de graça do exterior, mas o interior com as suas paredes pintadas precisa de bilhete, por isso compre online para saltar a pequena fila. Fica mesmo ao lado do Bastião dos Pescadores, por isso junte os dois e faça-os à abertura antes de chegarem os grupos de excursão.",
    },
    {
      slug: "st-stephens-basilica",
      citySlug: "budapest",
      name: "Basílica de Santo Estêvão",
      lat: 47.5008,
      lng: 19.054,
      kind: "sight",
      needsBooking: false,
      tip: "A entrada na nave pede só um donativo sugerido, mas o terraço panorâmico da cúpula cobra uma pequena taxa e vale a pena, alcançado por elevador mais uma curta subida de escadas. Suba na última hora antes de fechar para uma luz mais suave sobre os telhados de Pest e menos gente no topo.",
    },
    {
      slug: "szechenyi-baths",
      citySlug: "budapest",
      name: "Banhos Termais Széchenyi",
      lat: 47.5186,
      lng: 19.0817,
      kind: "experience",
      needsBooking: true,
      tip: "É mais barato aos dias de semana do que ao fim de semana, e comprar online com cabine (não só um cacifo) poupa a fila da entrada e dá-lhe um sítio privado para mudar de roupa. Leve a sua própria toalha e chinelos para evitar as taxas de aluguer, e vá de manhã cedo ou depois das 17h para fugir à azáfama do meio-dia nas piscinas ao ar livre.",
    },
    {
      slug: "gellert-hill",
      citySlug: "budapest",
      name: "Colina Gellért e Miradouro da Citadela",
      lat: 47.4869,
      lng: 19.0447,
      kind: "viewpoint",
      needsBooking: false,
      tip: "A subida a partir da ponta de Buda da Ponte Isabel leva cerca de 25 minutos e recompensa-o com a panorâmica mais ampla sobre as duas margens e a Estátua da Liberdade. Vá de manhã para fotos de Pest sem contraluz, leve água no verão já que o caminho está totalmente exposto ao sol, e o miradouro em si é grátis.",
    },
    {
      slug: "central-market-hall",
      citySlug: "budapest",
      name: "Mercado Central",
      lat: 47.4869,
      lng: 19.0586,
      kind: "food",
      needsBooking: false,
      tip: "Venha antes do meio-dia pela hortaliça e pela paprica a preços do rés do chão; as bancas de comida do piso de cima são mais caras e viradas para turistas, por isso coma lángos antes num sítio local mais pequeno. Fecha cedo ao sábado à tarde e mantém-se fechado ao domingo, por isso marque a visita e pague com cartão, já que nem todas as bancas o aceitam.",
    },
    {
      slug: "dohany-street-synagogue",
      citySlug: "budapest",
      name: "Sinagoga da Rua Dohány",
      lat: 47.4956,
      lng: 19.0608,
      kind: "sight",
      needsBooking: true,
      tip: "Esta é a maior sinagoga da Europa e a entrada inclui o jardim memorial e o museu, mas os bilhetes têm hora marcada e esgotam a meio do dia em época alta, por isso reserve uma hora cedo online. Fecha aos sábados para o Shabat e nos feriados judaicos, por isso confira a data, e vá com os ombros cobertos.",
    },
    {
      slug: "szimpla-kert",
      citySlug: "budapest",
      name: "Szimpla Kert (Ruin Bar)",
      lat: 47.4977,
      lng: 19.0637,
      kind: "experience",
      needsBooking: false,
      tip: "O ruin bar original vê-se melhor antes das 20h, quando dá mesmo para apreciar os pátios de arte de sucata sem a azáfama nem a entrada paga da noite. Aos domingos de manhã transforma-se num mercado de produtores com uma atmosfera muito diferente e calma, que é a forma de o local visitar.",
    },
    {
      slug: "shoes-on-the-danube",
      citySlug: "budapest",
      name: "Memorial dos Sapatos do Danúbio",
      lat: 47.5041,
      lng: 19.0447,
      kind: "sight",
      needsBooking: false,
      tip: "Os sessenta sapatos de ferro na marginal memorializam os judeus fuzilados para dentro do rio em 1944, e leva só dez minutos sossegados mas não deve ser feito à pressa. Fica na marginal de Pest entre a Ponte das Correntes e o Parlamento, por isso encaixe-o nesse passeio ribeirinho em vez de fazer uma viagem só para isso.",
    },
    {
      slug: "vaci-street",
      citySlug: "budapest",
      name: "Rua Váci",
      lat: 47.4934,
      lng: 19.0537,
      kind: "sight",
      needsBooking: false,
      tip: "Encare-a como uma travessia de 15 minutos, não como um sítio para comer ou comprar; os cafés aqui cobram o dobro e os balcões de câmbio na rua dão algumas das piores taxas da cidade. A moeda é o florim, não o euro, por isso pague em HUF, use um multibanco de um banco a sério e ignore por completo as janelas de câmbio de rua.",
    },
    {
      slug: "margaret-island",
      citySlug: "budapest",
      name: "Ilha Margarida",
      lat: 47.5266,
      lng: 19.0475,
      kind: "park",
      needsBooking: false,
      tip: "Este parque insular sem carros no meio do Danúbio é grátis e vê-se melhor a pé ou de bicicleta alugada, com uma fonte musical perto da ponta sul que toca à hora certa. Venha ao fim da tarde, caminhe a partir da paragem de elétrico da Ponte Margarida e apanhe o espetáculo de luz noturno da fonte se ficar até depois do anoitecer no verão.",
    },
  ],

  itineraries: [
    {
      citySlug: "budapest",
      days: 2,
      summary:
        "Dois dias chegam para os pontos turísticos de destaque de Budapeste se ficar central e começar cedo, mas só vai arranhar o lado local e os banhos. O essencial divide-se de forma limpa pelo rio: a margem de Pest tem o Parlamento, a Basílica, o Bairro Judeu e o Mercado Central, enquanto a colina de Buda tem o castelo, a Igreja de Matias e o Bastião dos Pescadores, tudo a uma ponte de distância. Fique em Belváros para os dois dias começarem a pé. A estrutura que resulta é um dia por margem: dia um para Pest e o Bairro Judeu, dia dois para a colina do castelo de Buda e a Gellért. Reserve online a visita ao Parlamento e a Sinagoga da Rua Dohány antes de chegar, porque os bilhetes com hora marcada são a única ameaça real a uma visita de 48 horas. O que sacrifica é uma sessão de banho termal a sério, a Ilha Margarida e uma noite tranquila de ruin bar, que é exatamente o que um terceiro dia compra. Os preços são baixos para os padrões da Europa Ocidental, por isso coma bem; só fique fora da Váci utca e pague em florins, não em euros.",
      stayNeighborhoodSlug: "belvaros",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Frente-rio de Pest e o Bairro Judeu",
          morning: [
            {
              poiSlug: "hungarian-parliament",
              text: "Comece no Parlamento Húngaro com uma visita cedo em inglês, reservada antes, ao interior e às joias da coroa. Chegue 15 minutos antes ao centro de visitantes para passar a segurança.",
              durationMin: 90,
            },
            {
              poiSlug: "shoes-on-the-danube",
              text: "Ande para sul ao longo da marginal de Pest até ao memorial dos Sapatos do Danúbio, uma paragem sossegada de dez minutos, e depois continue até à Ponte das Correntes pela marginal.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "st-stephens-basilica",
              text: "Corte para o interior até à Basílica de Santo Estêvão, veja a nave e depois apanhe o elevador e uma curta subida até ao terraço da cúpula pela ampla panorâmica de Pest.",
              durationMin: 75,
            },
            {
              poiSlug: "dohany-street-synagogue",
              text: "Continue até à Sinagoga da Rua Dohány para uma visita com hora marcada à maior sinagoga da Europa e ao seu jardim memorial. Reserve a hora online na noite anterior para evitar o esgotar do meio-dia.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "szimpla-kert",
              text: "Entre pelo Bairro Judeu e veja o Szimpla Kert antes das 20h, enquanto ainda dá para apreciar os pátios de arte de sucata, e depois faça bar-hopping pelas ruas em redor.",
              durationMin: 60,
            },
            {
              text: "Jante em Erzsébetváros longe dos eixos turísticos: as ruas laterais à volta da Kazinczy utca fazem cozinha húngara moderna e street food onde uma refeição completa com uma bebida fica bem abaixo dos 6000 HUF.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Colina do castelo de Buda e a Gellért",
          morning: [
            {
              poiSlug: "fishermans-bastion",
              text: "Atravesse a Ponte das Correntes e suba ao Bastião dos Pescadores antes das 9h, quando as torres de cima são grátis e a vista do Parlamento do outro lado do rio é só sua.",
              durationMin: 60,
            },
            {
              poiSlug: "matthias-church",
              text: "Entre ao lado, na Igreja de Matias, pelo interior pintado com o seu bilhete, e depois percorra as vielas sossegadas do bairro do castelo antes de chegarem os grupos de excursão.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "buda-castle",
              text: "Percorra os pátios, terraços e muralhas gratuitos do Castelo de Buda pelas longas vistas do rio, entrando na Galeria Nacional só se quiser a arte. Almoce num café ali no cimo da colina.",
              durationMin: 120,
            },
            {
              poiSlug: "gellert-hill",
              text: "Desça e suba a Colina Gellért até ao miradouro da Citadela pela panorâmica mais ampla sobre as duas margens e a Estátua da Liberdade. Leve água; o caminho está totalmente exposto ao sol.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "szechenyi-chain-bridge",
              text: "Volte a descer ao rio e atravesse a Ponte das Correntes ao anoitecer, quando os leões e todo o tabuleiro se iluminam e o castelo brilha atrás de si.",
              durationMin: 45,
            },
            {
              text: "Termine com jantar de volta a Belváros numa rua lateral à Váci utca, não nela, onde um clássico húngaro como goulash ou frango à paprica com um copo de vinho local mantém a conta honesta.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
    {
      citySlug: "budapest",
      days: 3,
      summary:
        "Três dias é a medida certa de tempo para Budapeste: chega para as duas margens do rio a um ritmo humano, mais uma longa tarde num banho termal que transforma uma viagem de turismo numa verdadeira pausa. Dois dias obrigam a correr Pest e a colina do castelo de seguida e a saltar os banhos por completo; o terceiro dia acrescenta o Széchenyi, a Ilha Margarida e tempo para se sentar num ruin bar sem olhar para o relógio. Fique no Bairro Judeu, central e barato, com a melhor comida descontraída e a vida noturna à porta. A forma do plano: dia um para a frente-rio de Pest e o Bairro Judeu, dia dois para a colina do castelo de Buda e a Gellért, dia três para os banhos, o mercado e a ilha. Reserve duas coisas online antes de chegar: a visita ao Parlamento e a hora da Sinagoga da Rua Dohány. Tudo o resto em Budapeste recompensa chegar cedo em vez de pagar mais, e pagar em florins em vez de euros.",
      stayNeighborhoodSlug: "jewish-quarter",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Frente-rio de Pest e a Basílica",
          morning: [
            {
              poiSlug: "hungarian-parliament",
              text: "A partir da sua base no Bairro Judeu, apanhe o metro até ao Parlamento para a sua visita cedo, reservada antes, ao interior e às joias da coroa. Chegue lá 15 minutos antes para a segurança.",
              durationMin: 90,
            },
            {
              poiSlug: "shoes-on-the-danube",
              text: "Percorra a marginal de Pest para sul até ao memorial dos Sapatos do Danúbio, e depois continue pela marginal em direção à Ponte das Correntes.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "st-stephens-basilica",
              text: "Vá para o interior até à Basílica de Santo Estêvão pela nave e pela panorâmica do terraço da cúpula sobre os telhados de Pest.",
              durationMin: 75,
            },
            {
              poiSlug: "szechenyi-chain-bridge",
              text: "Atravesse a Ponte das Correntes a pé pela vista clássica até ao Castelo de Buda, e depois volte atrás para um café perto da Roosevelt tér.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "szimpla-kert",
              text: "De volta ao Bairro Judeu, veja o Szimpla Kert antes da multidão da noite, e depois trabalhe os ruin bars e os sítios de cerveja artesanal à volta da Kazinczy utca.",
              durationMin: 90,
            },
            {
              text: "Jante numa rua lateral de Erzsébetváros: lángos, pequenos pratos húngaros modernos ou um bistrô, tudo a um curto passeio da sua cama e leve no orçamento.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Colina do castelo de Buda e a Gellért",
          morning: [
            {
              poiSlug: "fishermans-bastion",
              text: "Atravesse para Buda e suba ao Bastião dos Pescadores antes das 9h pelas torres de cima gratuitas e pela panorâmica do Parlamento sem as multidões.",
              durationMin: 60,
            },
            {
              poiSlug: "matthias-church",
              text: "Visite a Igreja de Matias ao lado pelo interior pintado e pelo telhado de telha, e depois percorra as vielas sossegadas do bairro do castelo à abertura.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "buda-castle",
              text: "Explore os pátios e terraços gratuitos do Castelo de Buda pelas longas vistas do rio e almoce na colina, entrando na Galeria Nacional só se a arte lhe interessar.",
              durationMin: 120,
            },
            {
              poiSlug: "gellert-hill",
              text: "Percorra a crista para sul e suba a Colina Gellért até ao miradouro da Citadela pela panorâmica mais ampla sobre as duas margens. Leve água nos meses quentes.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "dohany-street-synagogue",
              text: "Volte a atravessar para Pest e, num dia que não seja sábado, faça uma visita com hora marcada ao fim da tarde à Sinagoga da Rua Dohány e ao seu jardim memorial com o seu bilhete online.",
              durationMin: 75,
            },
            {
              text: "Jante perto do Grande Boulevard, e depois uma bebida lenta de fim de noite num wine bar do Bairro Judeu a servir tintos húngaros que não encontra em casa.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Banhos, o mercado e a Ilha Margarida",
          morning: [
            {
              poiSlug: "central-market-hall",
              text: "Comece no Mercado Central antes do meio-dia pela paprica, hortaliça e bancas do rés do chão, e coma lángos aqui ou por perto em vez dos balcões mais caros do piso de cima.",
              durationMin: 75,
            },
            {
              poiSlug: "vaci-street",
              text: "Percorra toda a Váci utca de volta ao centro num passeio de 15 minutos, ignorando os balcões de câmbio, e depois passeie pelas ruas à volta da Vörösmarty tér.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "szechenyi-baths",
              text: "Apanhe o metro até ao City Park e passe a tarde nos banhos termais Széchenyi. Reserve online com cabine, leve a sua própria toalha e chinelos, e vá depois de o pico do meio-dia aliviar.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              poiSlug: "margaret-island",
              text: "Arrefeça na Ilha Margarida no regresso, caminhando a partir da paragem de elétrico da Ponte Margarida e apanhando a fonte musical à hora certa perto da ponta sul.",
              durationMin: 90,
            },
            {
              text: "Último jantar no Bairro Judeu ou do outro lado, em Újlipótváros, ambos a um curto passeio de elétrico e cheios de cozinhas de bairro honestas.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
    {
      citySlug: "budapest",
      days: 4,
      summary:
        "Quatro dias é mais do que suficiente para os pontos turísticos de Budapeste, e é esse o objetivo: o quarto dia converte uma corrida a monumentos numa verdadeira viagem. Os dias um a três cobrem a frente-rio de Pest, a colina do castelo de Buda e o Bairro Judeu a um ritmo descontraído; o dia quatro é um dia lento montado à volta de uma longa sessão de banho termal, da Ilha Margarida e do City Park, sem pressa e sem fila de bilhetes. Com tanto tempo, salte o centro mais apertado e fique em Újlipótváros. Fica a 15 minutos a pé ou a duas paragens de elétrico do Parlamento, mais barato para quartos equivalentes, e os seus bistrôs e o passeio da Ilha Margarida são a razão pela qual o quarto dia existe. A lógica de uma margem por dia continua a aplicar-se: mantenha o castelo, a Igreja de Matias e a Gellért juntos do lado de Buda, mantenha o Parlamento, a Basílica e o Bairro Judeu juntos do lado de Pest, e não faça ziguezague pelo Danúbio. Reserve antes a visita ao Parlamento e a Sinagoga da Rua Dohány. Se estivesse a escolher entre três e quatro dias, o quarto dia descontraído é o que vai recordar.",
      stayNeighborhoodSlug: "ujlipotvaros",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Frente-rio de Pest e a Basílica",
          morning: [
            {
              poiSlug: "hungarian-parliament",
              text: "Vá a pé ou de elétrico de Újlipótváros até ao Parlamento para a sua visita cedo, reservada antes, ao interior e às joias da coroa, chegando com antecedência para a segurança.",
              durationMin: 90,
            },
            {
              poiSlug: "shoes-on-the-danube",
              text: "Siga a marginal de Pest para sul até ao memorial dos Sapatos do Danúbio, e depois continue a percorrer a marginal até à Ponte das Correntes.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "st-stephens-basilica",
              text: "Vire para o interior até à Basílica de Santo Estêvão pela nave e pela vista do terraço da cúpula sobre Pest, com almoço na praça repleta de cafés em frente.",
              durationMin: 90,
            },
            {
              poiSlug: "szechenyi-chain-bridge",
              text: "Atravesse a Ponte das Correntes a pé pela vista até ao castelo, e depois passeie pela frente-rio e pela Roosevelt tér antes de regressar.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "szimpla-kert",
              text: "Entre no Bairro Judeu para o Szimpla Kert antes da azáfama, e depois uma volta pelos ruin bars à volta da Kazinczy utca.",
              durationMin: 90,
            },
            {
              text: "Jante em Erzsébetváros, e depois apanhe o elétrico de volta a Újlipótváros para uma bebida sossegada de fim de noite num dos wine bars do bairro.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Colina do castelo de Buda e a Gellért",
          morning: [
            {
              poiSlug: "fishermans-bastion",
              text: "Atravesse o rio e suba ao Bastião dos Pescadores antes das 9h pelas torres de cima gratuitas e pela panorâmica do Parlamento sem multidões.",
              durationMin: 60,
            },
            {
              poiSlug: "matthias-church",
              text: "Visite a Igreja de Matias ao lado pelo telhado de telha e pelo interior pintado, e depois vagueie pelas vielas do bairro do castelo enquanto ainda estão vazias.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "buda-castle",
              text: "Percorra os terraços e muralhas gratuitos do Castelo de Buda pelas longas vistas do rio e almoce na colina, entrando na Galeria Nacional só se quiser a arte.",
              durationMin: 120,
            },
            {
              poiSlug: "gellert-hill",
              text: "Apanhe a crista para sul e suba a Colina Gellért até ao miradouro da Citadela pela vista mais ampla sobre as duas margens e a Estátua da Liberdade.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "szechenyi-chain-bridge",
              text: "Desça e atravesse a Ponte das Correntes ao anoitecer pelo tabuleiro iluminado e pelo castelo a brilhar atrás de si.",
              durationMin: 45,
            },
            {
              text: "Jante de volta ao lado de Pest, e depois um passeio lento pela frente-rio iluminada antes do elétrico de volta a casa em Újlipótváros.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Bairro Judeu, o mercado e a Váci",
          morning: [
            {
              poiSlug: "dohany-street-synagogue",
              text: "Comece na Sinagoga da Rua Dohány num dia que não seja sábado com a sua hora de manhã reservada antes, apreciando o jardim memorial e o museu.",
              durationMin: 90,
            },
            {
              text: "Percorra a arte de rua e os pátios do Bairro Judeu, parando para um café e um doce de pastelaria kosher à volta da Kazinczy utca antes de o dia aquecer.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "central-market-hall",
              text: "Vá ao Mercado Central antes do seu fecho cedo de sábado pela paprica e hortaliça lá em baixo, comendo lángos num sítio local mais pequeno em vez dos balcões para turistas lá em cima.",
              durationMin: 90,
            },
            {
              poiSlug: "vaci-street",
              text: "Passeie a Váci utca de volta à Vörösmarty tér como uma travessia de 15 minutos, saltando os balcões de câmbio, e depois espreite as boutiques nas ruas paralelas mais sossegadas.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Regresse a Újlipótváros para um jantar cedo num bistrô de bairro, e depois percorra o passeio ribeirinho em direção ao Parlamento à medida que se ilumina.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Banhos, Ilha Margarida e City Park",
          morning: [
            {
              poiSlug: "margaret-island",
              text: "Comece devagar com uma manhã na Ilha Margarida, caminhando ou alugando uma bicicleta na ponta da Ponte Margarida e fazendo uma volta ao parque sem carros pela fonte musical e pela velha torre de água.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "szechenyi-baths",
              text: "Passe uma longa tarde nos banhos termais Széchenyi no City Park. Reserve um bilhete online de dia de semana com cabine, leve a sua própria toalha e chinelos, e instale-se assim que o pico do meio-dia se desvanecer.",
              durationMin: 210,
            },
          ],
          evening: [
            {
              text: "Vagueie pelo City Park à saída pelo Castelo Vajdahunyad e a Praça dos Heróis iluminados ao anoitecer, um final gratuito e fácil para o dia descontraído.",
              durationMin: 60,
            },
            {
              text: "Último jantar de volta a Újlipótváros ou do outro lado, no Bairro Judeu, ambos a um curto passeio de elétrico e ambos muito mais baratos do que os eixos turísticos à beira-rio.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
  ],
};

export default budapestPt;
