import type { CityData } from "../types";

const praguePt: CityData = {
  city: {
    slug: "prague",
    name: "Praga",
    country: "República Checa",
    countrySlug: "czech-republic",
    lat: 50.0755,
    lng: 14.4378,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "PRG",
    airportToCenter:
      "Autocarro 119 até Nadrazi Veleslavin, depois metro linha A até ao centro, cerca de 45 min no total por à volta de 2 EUR. O autocarro expresso AE vai direto até à estação central de comboios, se preferir um único veículo.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10, 12],
    avoidMonths: [7, 8],
    monthlyNotes: {
      1: "Frio, com máximas à volta dos 2C e céu cinzento frequente, mas o mercado de Natal da Praça da Cidade Velha funciona até 6 de janeiro. Depois disso, os preços dos hotéis caem para os mais baixos do ano e os principais monumentos ficam quase sem filas.",
      2: "Ainda gela à noite e a cidade mantém-se sossegada, por isso este é o mês completo mais barato para visitar. Os interiores das cervejarias e os museus fazem o trabalho pesado; leve roupa para mínimas abaixo de zero.",
      3: "Os dias sobem até perto dos 9C e os mercados de Páscoa abrem na Praça da Cidade Velha na segunda metade do mês. As multidões ainda são moderadas e os preços ficam abaixo do pico da primavera.",
      4: "Primavera a sério: cerca de 14C, árvores em flor nos parques de Petrin e Letna, e as primeiras aberturas dos barcos no rio e dos jardins de cerveja. Os fins de semana enchem por volta da Páscoa, por isso reserve o circuito do castelo com antecedência.",
      5: "Um dos melhores meses, com máximas perto dos 19C e o festival de música Primavera de Praga a decorrer de meados de maio até ao início de junho. Reserve alojamento cedo; os fins de semana de maio esgotam e os preços atingem os máximos da época intermédia.",
      6: "Quente, à volta dos 22C, com dias longos e os jardins de cerveja de Letna e Riegrovy Sady em pleno funcionamento. As multidões aumentam ao longo do mês mas ficam aquém do aperto de julho.",
      7: "Época alta: dias de 25C, Ponte Carlos apinhada às 9h e os preços de quarto mais altos do verão. Se tiver mesmo de vir agora, faça os grandes monumentos antes das 8h e guarde as tardes para os parques e o rio.",
      8: "O mesmo calor e as mesmas multidões de julho, com trovoadas ocasionais. A margem de Naplavka e as zonas de banho nas ilhas absorvem bem o calor, mas conte com filas no castelo o dia inteiro.",
      9: "Máximas à volta dos 20C, multidões a diminuir depois da primeira semana e o festival Dvorak Prague para os fãs de música clássica. Os preços aliviam; esta é a alternativa inteligente ao verão.",
      10: "Dias frescos de 13C e cores de outono a sério em Petrin, Letna e Vysehrad. O número de turistas cai visivelmente depois de meados do mês e os preços dos hotéis acompanham.",
      11: "Cinzento e frio, com máximas à volta dos 7C, o período mais calmo do ano até os mercados de Natal abrirem na Praça da Cidade Velha no final de novembro. O final de novembro é um momento ideal: ambiente de mercado sem a densidade de dezembro.",
      12: "Os mercados de Natal da Praça da Cidade Velha e da Praça Venceslau funcionam do final de novembro até 6 de janeiro e atraem multidões densas, sobretudo aos fins de semana. Conte com mínimas abaixo de zero, vinho quente por todo o lado e preços de hotel em dezembro bem acima do normal de inverno.",
    },
    climate: {
      1: { highC: 2, lowC: -3, rainyDays: 11 },
      2: { highC: 4, lowC: -2, rainyDays: 9 },
      3: { highC: 9, lowC: 1, rainyDays: 10 },
      4: { highC: 14, lowC: 4, rainyDays: 9 },
      5: { highC: 19, lowC: 8, rainyDays: 11 },
      6: { highC: 22, lowC: 11, rainyDays: 12 },
      7: { highC: 25, lowC: 13, rainyDays: 11 },
      8: { highC: 25, lowC: 13, rainyDays: 10 },
      9: { highC: 20, lowC: 9, rainyDays: 8 },
      10: { highC: 13, lowC: 5, rainyDays: 9 },
      11: { highC: 7, lowC: 1, rainyDays: 10 },
      12: { highC: 3, lowC: -2, rainyDays: 11 },
    },
    budgetLevel: "low",
    budgetPerDay: { budget: 55, mid: 110, high: 220 },
    tagline: "Silhueta gótica, cerveja de classe mundial, preços de cidade pequena.",
    heroIntro:
      "Praga concentra um castelo, uma ponte medieval e um centro histórico totalmente intacto numa zona que se atravessa a pé em meia hora. É uma das capitais clássicas mais baratas da Europa, e a cultura da cerveja justifica por si só a viagem. Três dias cobrem o essencial sem pressa; o truque está em programar os grandes monumentos em torno das vagas de grupos turísticos.",
    accent: { from: "#8B7CF6", to: "#E85D75", ink: "#3B2E7E" },
    neighborhoodSlugs: [
      "stare-mesto",
      "mala-strana",
      "vinohrady",
      "zizkov",
      "karlin",
    ],
    nearbyCitySlugs: ["vienna", "budapest"],
  },

  neighborhoods: [
    {
      slug: "stare-mesto",
      citySlug: "prague",
      name: "Stare Mesto (Old Town)",
      lat: 50.0875,
      lng: 14.421,
      bestFor: ["first-time", "romantic"],
      vibe: "O núcleo medieval em torno da Praça da Cidade Velha, tudo calçada, torres e vielas que acabam em pátios. De dia é o quilómetro quadrado mais movimentado do país; depois das 22h os grupos turísticos desaparecem e o silêncio instala-se depressa. Tudo o que um visitante de primeira viagem quer está a dez minutos a pé.",
      pros: [
        "Ponte Carlos, Praça da Cidade Velha e Josefov a curta distância a pé",
        "A maior oferta de hotéis e apartamentos da cidade",
        "Zero transportes necessários para uma viagem de 2 dias",
      ],
      cons: [
        "Os restaurantes nas praças principais são armadilhas para turistas com preços inflacionados",
        "Ruído de rua e grupos de despedidas de solteiro nas noites de fim de semana",
        "Paga um prémio de localização de 20-30 por cento face a Vinohrady",
      ],
    },
    {
      slug: "mala-strana",
      citySlug: "prague",
      name: "Mala Strana",
      lat: 50.0878,
      lng: 14.4046,
      bestFor: ["romantic", "first-time", "family"],
      vibe: "O bairro barroco aos pés do castelo, na margem oeste do Vltava. Telhados vermelhos, jardins de embaixadas e vielas que esvaziam por completo assim que os visitantes de um dia partem ao fim da tarde. Ficar aqui significa acordar do lado do castelo, o que é uma verdadeira vantagem de tempo.",
      pros: [
        "Castelo de Praga, colina de Petrin e Muro de Lennon à porta",
        "As noites são calmas e genuinamente cheias de ambiente",
        "Ponte Carlos antes do pequeno-almoço, sem multidões",
      ],
      cons: [
        "Menos supermercados e opções de refeição económicas do que na margem leste",
        "Ruas íngremes e calçada difíceis com bagagem ou carrinhos de bebé",
      ],
    },
    {
      slug: "vinohrady",
      citySlug: "prague",
      name: "Vinohrady",
      lat: 50.0755,
      lng: 14.4443,
      bestFor: ["local", "budget", "family", "romantic"],
      vibe: "Uma malha residencial de prédios Arte Nova, praças arborizadas e a melhor densidade de cafés de Praga. É aqui que vivem de facto os locais com possibilidades, e a cena de restaurantes reflete isso. O centro histórico fica a 10 minutos de metro ou a 25 minutos a pé.",
      pros: [
        "A melhor comida e café de especialidade da cidade a preços locais",
        "Jardim de cerveja de Riegrovy Sady e dois grandes parques",
        "Alojamento visivelmente mais barato do que no centro",
      ],
      cons: [
        "Tem de se deslocar para todos os grandes monumentos, mesmo que o trajeto seja curto",
        "Sossegado à noite, se procura vida noturna à porta de casa",
      ],
    },
    {
      slug: "zizkov",
      citySlug: "prague",
      name: "Zizkov",
      lat: 50.0833,
      lng: 14.4515,
      bestFor: ["nightlife", "budget", "local"],
      vibe: "O bairro de bares mais rude de Praga, famoso por reivindicar mais cervejarias per capita do que qualquer outro lugar da Europa. É mais desgastado do que a vizinha Vinohrady, com cerveja barata, bares de esquina e a torre de televisão de ar espacial a dominar tudo. Está a gentrificar quarteirão a quarteirão, mas continua a ser a base quase central mais barata.",
      pros: [
        "Os preços de quarto e de cerveja mais baixos perto do centro",
        "Verdadeira cultura de cervejaria, quase sem margem turística",
        "A colina de Vitkov tem uma enorme vista gratuita sobre o centro histórico",
      ],
      cons: [
        "Alguns quarteirões parecem abandonados e cheios de graffiti",
        "20-30 minutos a pé ou de elétrico até aos principais monumentos",
        "Ruído de bares ao fim de semana nas ruas principais",
      ],
    },
    {
      slug: "karlin",
      citySlug: "prague",
      name: "Karlin",
      lat: 50.0925,
      lng: 14.4505,
      bestFor: ["local", "family", "budget"],
      vibe: "Um bairro plano à beira-rio, reconstruído depois da cheia de 2002 e transformado no quarteirão moderno mais polido de Praga. Avenidas largas, prédios do século XIX renovados e uma forte cena de brunch e cerveja artesanal virada para os residentes, não para os turistas. A duas estações de metro do centro histórico.",
      pros: [
        "Ruas planas, fáceis com carrinho de bebé, e caminhos à beira-rio",
        "Excelentes restaurantes checos modernos a preços justos",
        "Ligação rápida ao centro pela linha B do metro",
      ],
      cons: [
        "Sem grandes monumentos no próprio bairro",
        "Vida noturna discreta; os bares fecham cedo para os padrões de Praga",
      ],
    },
  ],

  pois: [
    {
      slug: "charles-bridge",
      citySlug: "prague",
      name: "Ponte Carlos",
      lat: 50.0865,
      lng: 14.4114,
      kind: "sight",
      needsBooking: false,
      tip: "Atravesse-a antes das 8h ou depois das 22h; entre as 10h e as 18h anda-se ombro a ombro. Ignore os caricaturistas a meio da ponte e evite as casas de câmbio em ambas as extremidades, que oferecem algumas das piores taxas da cidade.",
    },
    {
      slug: "prague-castle",
      citySlug: "prague",
      name: "Castelo de Praga",
      lat: 50.09,
      lng: 14.4005,
      kind: "sight",
      needsBooking: true,
      tip: "Compre o bilhete do circuito básico online e entre à abertura dos portões às 9h; os grupos turísticos invadem a partir das 10h. Os pátios e as vistas das vielas são gratuitos, por isso, se só quer o panorama, atravesse sem bilhete e gaste o dinheiro no café do terraço do Palácio Lobkowicz.",
    },
    {
      slug: "st-vitus-cathedral",
      citySlug: "prague",
      name: "Catedral de São Vito",
      lat: 50.0909,
      lng: 14.4005,
      kind: "sight",
      needsBooking: true,
      tip: "A entrada está incluída no bilhete do circuito do castelo; a zona gratuita logo à entrada quase não mostra nada, por isso pague a nave completa. Vá diretamente ao vitral de Mucha, na terceira capela à esquerda, antes de o corredor encher.",
    },
    {
      slug: "old-town-square",
      citySlug: "prague",
      name: "Praça da Cidade Velha e Relógio Astronómico",
      lat: 50.0875,
      lng: 14.4213,
      kind: "sight",
      needsBooking: false,
      tip: "O espetáculo do relógio dura 45 segundos e desilude a partir da rua apinhada; veja-o uma vez a uma hora morta, como as 9h, e depois pague para subir à torre da Câmara da Cidade Velha, que tem a melhor vista da praça. Nunca coma nem troque dinheiro na própria praça.",
    },
    {
      slug: "josefov",
      citySlug: "prague",
      name: "Bairro Judeu (Josefov)",
      lat: 50.09,
      lng: 14.418,
      kind: "museum",
      needsBooking: true,
      tip: "Um único bilhete do Museu Judaico cobre as sinagogas e o Antigo Cemitério Judeu; compre-o online e comece na Sinagoga Pinkas mesmo à abertura das 9h, porque o caminho do cemitério atrás dela congestiona a meio da manhã. Tudo fecha ao sábado, por isso planeie em função do Shabbat.",
    },
    {
      slug: "petrin-hill",
      citySlug: "prague",
      name: "Colina de Petrin e Torre de Observação",
      lat: 50.0833,
      lng: 14.395,
      kind: "viewpoint",
      needsBooking: false,
      tip: "O funicular a partir de Ujezd usa um bilhete normal de transportes públicos, mas a fila ultrapassa muitas vezes os 25 minutos da subida a pé pelos pomares, por isso verifique-a antes de se comprometer. Os 299 degraus da torre batem as torres do castelo nas fotos da silhueta da cidade, porque o próprio Castelo de Praga fica no enquadramento.",
    },
    {
      slug: "letna-park",
      citySlug: "prague",
      name: "Jardim de Cerveja do Parque Letna",
      lat: 50.0955,
      lng: 14.416,
      kind: "park",
      needsBooking: false,
      tip: "Chegue uma hora antes do pôr do sol, compre uma cerveja no quiosque por cerca de 60 CZK e ocupe um banco ao longo da borda sul para a vista clássica sobre as pontes do Vltava. Aceita-se dinheiro vivo e funciona mais ou menos de abril a outubro; no inverno o miradouro continua a valer, a banca de cerveja não.",
    },
    {
      slug: "vysehrad",
      citySlug: "prague",
      name: "Fortaleza de Vysehrad",
      lat: 50.0645,
      lng: 14.418,
      kind: "sight",
      needsBooking: false,
      tip: "O recinto, as muralhas e o cemitério onde estão sepultados Dvorak e Mucha são todos gratuitos; só a pequena visita às casamatas é paga. Apanhe a linha C do metro até Vysehrad, percorra as muralhas no sentido contrário aos ponteiros do relógio para as vistas do rio e saia a descer pelas casas cubistas em direção a Naplavka.",
    },
    {
      slug: "wenceslas-square",
      citySlug: "prague",
      name: "Praça Venceslau",
      lat: 50.081,
      lng: 14.428,
      kind: "sight",
      needsBooking: false,
      tip: "Trate-a como uma passagem de 20 minutos pela história de 1989 e pela fachada do Museu Nacional, não como um destino. Este é o território de eleição das duas burlas clássicas: nunca use as casas de câmbio de rua aqui e nunca apanhe um táxi na praça; peça antes um Bolt ou um Uber.",
    },
    {
      slug: "klementinum",
      citySlug: "prague",
      name: "Biblioteca Barroca do Klementinum",
      lat: 50.0863,
      lng: 14.4165,
      kind: "museum",
      needsBooking: true,
      tip: "A entrada faz-se apenas com visita guiada, mais ou menos a cada 30 minutos, e as vagas esgotam nos dias de maior movimento, por isso reserve online uma visita de manhã. A sala da biblioteca barroca vê-se a partir da porta e não é possível entrar na sala em si; a verdadeira recompensa é a galeria da Torre Astronómica no final.",
    },
    {
      slug: "lennon-wall",
      citySlug: "prague",
      name: "Muro de Lennon",
      lat: 50.0863,
      lng: 14.4069,
      kind: "sight",
      needsBooking: false,
      tip: "É uma paragem de cinco minutos, constantemente repintada, por isso não faça um desvio só por ela; integre-a num passeio por Mala Strana entre a Ponte Carlos e a ilha de Kampa. Antes das 9h consegue fotografá-la sem uma única pessoa no enquadramento.",
    },
    {
      slug: "lokal-dlouha",
      citySlug: "prague",
      name: "Lokal Dlouha",
      lat: 50.0899,
      lng: 14.4257,
      kind: "food",
      needsBooking: false,
      tip: "Esta é a referência da Pilsner Urquell fresca do tanque e dos clássicos checos honestos, como a svickova, a preços justos. Aceita reservas e enche às 19h; sem reserva, a melhor hipótese é ao balcão ou antes das 18h, e note que a contagem das cervejas é marcada numa folha de papel que paga no final.",
    },
    {
      slug: "strahov-library",
      citySlug: "prague",
      name: "Biblioteca do Mosteiro de Strahov",
      lat: 50.0862,
      lng: 14.3893,
      kind: "museum",
      needsBooking: true,
      tip: "Tal como no Klementinum, as salas Teológica e Filosófica veem-se a partir das portas, por isso reserve 30-40 minutos e compre a licença de fotografia se quiser imagens. Combine-a com o terraço gratuito abaixo do mosteiro, um dos melhores miradouros de Praga sobre o castelo e a cidade, e depois desça a pé até ao castelo.",
    },
    {
      slug: "naplavka",
      citySlug: "prague",
      name: "Margem de Naplavka",
      lat: 50.071,
      lng: 14.414,
      kind: "experience",
      needsBooking: false,
      tip: "Ao sábado de manhã acolhe o melhor mercado de produtores da cidade, das 8h às 14h; nas noites de verão a margem transforma-se num bar ao ar livre com barcos convertidos em cervejarias. Chegue antes das 18h nas sextas-feiras quentes ou vai andar à caça de um lugar no muro.",
    },
  ],

  itineraries: [
    {
      citySlug: "prague",
      days: 2,
      summary:
        "Dois dias chegam para os monumentos principais de Praga se ficar no centro e começar cedo, mas vai deixar o lado local da cidade por explorar. O centro é compacto: a Ponte Carlos, a Praça da Cidade Velha e a zona do castelo ficam a menos de 25 minutos a pé umas das outras, por isso um plano apertado cobre as três mais o Bairro Judeu sem transportes. Fique alojado em Stare Mesto para que ambas as manhãs comecem a pé. A estrutura que funciona é uma margem do rio por dia: primeiro dia para o núcleo do centro histórico e Josefov, segundo dia para a colina do castelo, Strahov e Mala Strana. Reserve online os bilhetes do circuito do castelo e do Museu Judaico antes de chegar, porque as filas são a única verdadeira ameaça a uma visita de 48 horas. O que sacrifica é Vysehrad, a cena de cafés de Vinohrady e qualquer noite tranquila num jardim de cerveja, exatamente aquilo que um terceiro dia compra. Os preços são baixos para os padrões da Europa Ocidental, por isso coma bem; apenas mantenha-se longe das praças principais.",
      stayNeighborhoodSlug: "stare-mesto",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Núcleo do centro histórico e Bairro Judeu",
          morning: [
            {
              poiSlug: "old-town-square",
              text: "Comece na Praça da Cidade Velha por volta das 8h30, enquanto ainda está sossegada, veja o espetáculo do Relógio Astronómico das 9h e depois suba à torre da Câmara da Cidade Velha para a vista sobre os telhados antes de os primeiros grupos turísticos chegarem.",
              durationMin: 75,
            },
            {
              poiSlug: "josefov",
              text: "Caminhe cinco minutos para norte até Josefov e percorra o circuito do Museu Judaico começando na Sinagoga Pinkas, depois o Antigo Cemitério Judeu e a Sinagoga Espanhola. Compre o bilhete combinado online na véspera.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "lokal-dlouha",
              text: "Almoço no Lokal Dlouha, com svickova ou queijo frito e uma Pilsner Urquell tirada do tanque. Chegue antes da hora de ponta das 13h ou conte com uma pequena espera.",
              durationMin: 75,
            },
            {
              poiSlug: "klementinum",
              text: "Faça uma visita reservada ao Klementinum à tarde para ver a sala da biblioteca barroca e subir à Torre Astronómica para uma vista sobre os telhados do centro histórico.",
              durationMin: 60,
            },
            {
              text: "Deambule pelas vielas entre o Klementinum e a Torre da Pólvora: Celetna, o pátio de Ungelt e as arcadas em torno do Teatro Estatal. Sem bilhetes, sem plano, esta é a melhor hora gratuita do centro histórico.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "wenceslas-square",
              text: "Atravesse a Praça Venceslau ao anoitecer para ver a fachada do Museu Nacional e o memorial de 1989, tratando-a como uma passagem e não como uma paragem. Peça um Bolt se precisar de transporte mais tarde; nunca apanhe um táxi aqui.",
              durationMin: 30,
            },
            {
              poiSlug: "charles-bridge",
              text: "Termine na Ponte Carlos depois das 21h, quando as multidões diminuem e o castelo está iluminado. Esta é a fotografia que veio buscar, e a esta hora consegue mesmo ficar parado para a tirar.",
              durationMin: 45,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Colina do castelo e Mala Strana",
          morning: [
            {
              poiSlug: "prague-castle",
              text: "Esteja aos portões do Castelo de Praga à abertura das 9h com o bilhete de circuito reservado e faça a Viela Dourada e o Antigo Palácio Real antes da vaga de grupos das 10h.",
              durationMin: 120,
            },
            {
              poiSlug: "st-vitus-cathedral",
              text: "Dentro do complexo, dedique uma visita completa à Catedral de São Vito com a entrada paga na nave e encontre o vitral de Mucha na terceira capela à esquerda.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "strahov-library",
              text: "Caminhe 15 minutos a subir até à Biblioteca do Mosteiro de Strahov para as duas salas barrocas e depois aprecie a vista gratuita do terraço abaixo do mosteiro, que enquadra o castelo e toda a margem leste.",
              durationMin: 75,
            },
            {
              poiSlug: "petrin-hill",
              text: "Desça pelos pomares de Petrin e, se as pernas deixarem, suba os 299 degraus da torre de observação para a única vista da silhueta da cidade que inclui o próprio castelo.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "lennon-wall",
              text: "Desça por Mala Strana, passando pelo Muro de Lennon e atravessando a ilha de Kampa, enquanto os visitantes de um dia se vão embora. O bairro está no seu melhor a esta hora.",
              durationMin: 45,
            },
            {
              text: "Jantar em Mala Strana, num restaurante tradicional de cave numa rua ao lado de Nerudova, longe dos menus turísticos junto à ponte. Os pratos principais com cerveja devem custar 300-450 CZK por pessoa, não o dobro.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
    {
      citySlug: "prague",
      days: 3,
      summary:
        "Três dias é a quantidade certa de tempo para Praga: suficiente para todos os grandes monumentos a um ritmo humano, mais uma noite que pertence à cidade e não à lista de tarefas. Dois dias obrigam a correr o castelo e o centro histórico de seguida; o terceiro dia acrescenta Vysehrad, o jardim de cerveja de Letna e tempo para se sentar numa cervejaria sem olhar para o relógio. Fique em Mala Strana, do lado do castelo. Custa ligeiramente mais do que os bairros da margem leste, mas acorda ao lado dos monumentos para os quais toda a gente se desloca, e o bairro fica calmo e bonito depois das 18h. A forma do plano: primeiro dia para o centro histórico e Josefov, segundo dia para o castelo, Strahov e Petrin, terceiro dia para Vysehrad, a margem do rio e Letna. Reserve três coisas online antes de chegar: o circuito do castelo, o bilhete do Museu Judaico e uma vaga na visita ao Klementinum. Tudo o resto em Praga recompensa chegar cedo em vez de pagar mais.",
      stayNeighborhoodSlug: "mala-strana",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Centro histórico e Bairro Judeu",
          morning: [
            {
              poiSlug: "charles-bridge",
              text: "A partir da sua base em Mala Strana, atravesse a Ponte Carlos antes das 8h, enquanto está quase vazia; este é o melhor truque de horários de Praga e não custa nada.",
              durationMin: 30,
            },
            {
              poiSlug: "old-town-square",
              text: "Continue até à Praça da Cidade Velha para o Relógio Astronómico e a subida à torre da Câmara da Cidade Velha, tudo feito antes das 10h para escapar à maré.",
              durationMin: 75,
            },
            {
              poiSlug: "josefov",
              text: "Passe o fim da manhã em Josefov no circuito do Museu Judaico: Sinagoga Pinkas primeiro, depois o Antigo Cemitério Judeu antes de o caminho congestionar, terminando na Sinagoga Espanhola.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "lokal-dlouha",
              text: "Almoço no Lokal Dlouha para a Pilsner do tanque em versão definitiva e um prato de svickova. Guarde a folha de papel com a contagem das cervejas, acerta-se no final.",
              durationMin: 75,
            },
            {
              poiSlug: "klementinum",
              text: "Faça a sua visita reservada ao Klementinum para a biblioteca barroca e a vista da Torre Astronómica, e depois percorra as vielas em direção ao pátio de Ungelt.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "wenceslas-square",
              text: "Percorra a Praça Venceslau de ponta a ponta para ver o Museu Nacional e o memorial da Revolução de Veludo. Evite as casas de câmbio e os táxis de rua sem exceção.",
              durationMin: 30,
            },
            {
              text: "Volte a atravessar o rio para jantar em Mala Strana; as ruas atrás da ilha de Kampa escondem restaurantes sossegados onde um jantar checo completo com cerveja fica abaixo de 500 CZK.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Castelo, Strahov e Petrin",
          morning: [
            {
              poiSlug: "prague-castle",
              text: "Suba a pé desde Mala Strana e entre no Castelo de Praga às 9h em ponto com o seu bilhete de circuito online, cobrindo a Viela Dourada e o Antigo Palácio Real antes dos grupos.",
              durationMin: 120,
            },
            {
              poiSlug: "st-vitus-cathedral",
              text: "Visite a Catedral de São Vito com a entrada paga completa e vá diretamente ao vitral de Mucha antes de a nave encher.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "strahov-library",
              text: "Almoce numa cervejaria de mosteiro perto de Strahov, depois visite as salas Teológica e Filosófica da Biblioteca de Strahov e aproveite o miradouro gratuito do terraço abaixo.",
              durationMin: 120,
            },
            {
              poiSlug: "petrin-hill",
              text: "Percorra a cumeada até à colina de Petrin pelos pomares e suba a torre de observação se a fila do funicular lá em baixo parecer longa; a vista da torre bate qualquer torre do castelo porque o castelo aparece nela.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "lennon-wall",
              text: "Desça até ao Muro de Lennon e à ilha de Kampa para o passeio da hora dourada, quando Mala Strana esvazia.",
              durationMin: 45,
            },
            {
              text: "Jante numa cervejaria de Mala Strana com jardim e depois caminhe até à margem em frente ao Teatro Nacional para ver o castelo iluminado refletido no Vltava.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Vysehrad, o rio e Letna",
          morning: [
            {
              poiSlug: "vysehrad",
              text: "Apanhe a linha C do metro até Vysehrad e percorra as muralhas da fortaleza no sentido contrário aos ponteiros do relógio para as vistas do rio, e depois visite o cemitério onde estão sepultados Dvorak e Mucha. O recinto é gratuito.",
              durationMin: 120,
            },
            {
              text: "Saia de Vysehrad a descer, passando pelas casas cubistas em Rasinovo nabrezi, um desvio de arquitetura de cinco minutos que quase ninguém faz.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "naplavka",
              text: "Siga o rio para norte ao longo de Naplavka; aos sábados o mercado de produtores funciona até às 14h, nos outros dias os cafés-barco servem para um almoço demorado sobre a água.",
              durationMin: 105,
            },
            {
              text: "De elétrico ou a pé até ao lado do centro histórico, escolha um museu que tenha ficado de fora: o Museu de Artes Decorativas ou o Museu Alfons Mucha cabem ambos em 90 minutos.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "letna-park",
              text: "Suba ao jardim de cerveja do Parque Letna uma hora antes do pôr do sol, compre uma cerveja de 60 CZK no quiosque e ocupe um banco sobre as pontes. Esta é a melhor noite barata de Praga.",
              durationMin: 120,
            },
            {
              text: "Termine com um jantar na vizinha Holesovice ou de volta ao centro histórico do outro lado da ponte, conforme o tempo que o pôr do sol o prender.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
    {
      citySlug: "prague",
      days: 4,
      summary:
        "Quatro dias é mais do que suficiente para os monumentos de Praga, e é essa a ideia: o quarto dia converte uma corrida de monumentos numa verdadeira viagem. Os dias um a três cobrem o centro histórico, Josefov, a zona do castelo e Vysehrad a um ritmo descontraído; o quarto dia é seu, para um dia local pelos bairros ou para uma excursão a Kutna Hora, com a sua capela de ossos e a catedral, a uma hora de comboio. Com tanto tempo, dispense o centro e fique em Vinohrady. Fica a 10 minutos de metro da Praça da Cidade Velha, é 20 a 30 por cento mais barato para quartos equivalentes, e os seus cafés e jardins de cerveja são a razão de existir do quarto dia. A lógica de uma margem do rio por dia continua a aplicar-se: mantenha o castelo, Strahov e Petrin juntos, mantenha o centro histórico e Josefov juntos, e não ande em ziguezague pelo Vltava. Reserve com antecedência o circuito do castelo, o Museu Judaico e o Klementinum. Se estava a hesitar entre três e quatro dias, o quarto é aquele de que se vai lembrar.",
      stayNeighborhoodSlug: "vinohrady",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Centro histórico e Bairro Judeu",
          morning: [
            {
              poiSlug: "old-town-square",
              text: "Metro de Vinohrady até Mustek e esteja na Praça da Cidade Velha às 8h30 para o Relógio Astronómico e a torre da Câmara da Cidade Velha antes de os grupos chegarem.",
              durationMin: 90,
            },
            {
              poiSlug: "josefov",
              text: "Faça o circuito do Museu Judaico em Josefov começando na Sinagoga Pinkas à abertura, depois o Antigo Cemitério Judeu e a Sinagoga Espanhola com o seu bilhete reservado.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "lokal-dlouha",
              text: "Almoço no Lokal Dlouha: Pilsner Urquell do tanque e clássicos checos a preços honestos, a cinco minutos de Josefov.",
              durationMin: 75,
            },
            {
              poiSlug: "klementinum",
              text: "Faça uma visita reservada ao Klementinum para a sala da biblioteca barroca e o panorama da Torre Astronómica sobre o centro histórico.",
              durationMin: 60,
            },
            {
              text: "Passe o resto da tarde nas vielas: pátio de Ungelt, rua Celetna e a Torre da Pólvora, tudo gratuito e melhor sem roteiro.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "charles-bridge",
              text: "Entre na Ponte Carlos depois das 21h para a vista do castelo iluminado, já sem as multidões do dia.",
              durationMin: 45,
            },
            {
              text: "Regresse de metro a Vinohrady e beba um último copo num bar de vinhos perto de Namesti Miru; o bairro serve vinhos da Morávia que não vai encontrar no centro.",
              durationMin: 60,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Castelo, Strahov e Petrin",
          morning: [
            {
              poiSlug: "prague-castle",
              text: "O elétrico 22 de Vinohrady vai direto à zona do castelo; entre no Castelo de Praga às 9h com o seu bilhete online e despache a Viela Dourada e o Antigo Palácio Real cedo.",
              durationMin: 120,
            },
            {
              poiSlug: "st-vitus-cathedral",
              text: "Visite a Catedral de São Vito com o bilhete completo da nave e procure o vitral de Mucha antes de os corredores encherem.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "strahov-library",
              text: "Suba a pé até à Biblioteca do Mosteiro de Strahov para as duas salas barrocas e depois demore-se no terraço gratuito abaixo, com a vista definitiva sobre o castelo e a cidade.",
              durationMin: 90,
            },
            {
              poiSlug: "petrin-hill",
              text: "Atravesse os pomares até à colina de Petrin e suba à torre de observação, ou desça de funicular até Ujezd se o dia tiver sido longo.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "lennon-wall",
              text: "Passeie por Mala Strana ao anoitecer, passando pelo Muro de Lennon e pela ilha de Kampa, a melhor hora do bairro.",
              durationMin: 45,
            },
            {
              text: "Fique para jantar num restaurante de cave em Mala Strana e depois dê uma última volta pela Igreja de São Nicolau iluminada antes do elétrico de regresso.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Vysehrad, o rio e Letna",
          morning: [
            {
              poiSlug: "vysehrad",
              text: "Metro até Vysehrad e percorra gratuitamente as muralhas da fortaleza para o melhor panorama do rio na cidade, além do cemitério que guarda Dvorak e Mucha.",
              durationMin: 120,
            },
            {
              text: "Desça pelas casas cubistas até à margem do rio; o desvio acrescenta dez minutos e uma peça de arquitetura única de Praga.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "naplavka",
              text: "Siga Naplavka para norte ao longo da água; ao sábado há o mercado de produtores até às 14h, nos outros dias os cafés-barco atracados dão conta de um almoço demorado.",
              durationMin: 105,
            },
            {
              poiSlug: "wenceslas-square",
              text: "Corte para o interior pela Cidade Nova até à Praça Venceslau para a fachada do Museu Nacional e o memorial de 1989, uma passagem de 30 minutos, e depois explore as galerias da Lucerna com a sua estátua do cavalo de pernas para o ar.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "letna-park",
              text: "Termine o dia no jardim de cerveja do Parque Letna, por cima do rio: cervejas a 60 CZK, plátanos e a vista do pôr do sol sobre todas as pontes ao mesmo tempo.",
              durationMin: 120,
            },
            {
              text: "Jantar em Holesovice, aos pés do parque, ou de volta a Vinohrady, ambos a uma curta viagem de elétrico.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Dia local em Vinohrady ou excursão a Kutna Hora",
          morning: [
            {
              text: "Opção A: durma até tarde e depois faça uma ronda de cafés em Vinohrady, à volta de Namesti Miru e da praça Jiriho z Podebrad, onde o mercado de produtores funciona na maioria das manhãs de dias úteis. Opção B: apanhe o comboio direto da estação central até Kutna Hora, cerca de uma hora, para a capela de ossos do Ossuário de Sedlec; compre o bilhete combinado do ossuário e da catedral no posto de informação para evitar a fila no local.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              text: "A opção A continua com o parque Riegrovy Sady e um almoço demorado num bistro de Vinohrady, seguido de um passeio pelas fachadas Arte Nova do bairro ao longo da rua Manesova. Opção B: caminhe de Sedlec até ao centro histórico de Kutna Hora para a Catedral de Santa Bárbara e as vielas medievais da mineração de prata antes do comboio de regresso ao fim da tarde.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              text: "Em qualquer dos casos, termine no jardim de cerveja de Riegrovy Sady, em Vinohrady, o equivalente local de Letna, com um relvado virado para a silhueta do castelo ao pôr do sol.",
              durationMin: 120,
            },
            {
              text: "Último jantar num restaurante checo moderno em Vinohrady ou Karlin; ambos os bairros fazem versões refinadas de pato com dumplings a metade do preço do centro histórico.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
  ],
};

export default praguePt;
