import type { CityData } from "../types";

const warsawPt: CityData = {
  city: {
    slug: "warsaw",
    name: "Varsovia",
    country: "Polonia",
    countrySlug: "poland",
    lat: 52.2297,
    lng: 21.0122,
    tier: 2,
    idealDays: 2,
    durations: [2, 3],
    airportCode: "WAW",
    airportToCenter:
      "O aeroporto de Varsovia Chopin fica cerca de 8km a sul do centro, por isso os transferes sao rapidos e baratos. Os comboios S2 e S3 e o autocarro urbano 175 ligam ambos o terminal ao centro e a cidade velha em cerca de 20 a 25 minutos por cerca de 5 PLN num bilhete simples ZTM, que cobre todos os transportes ZTM da viagem. Um Uber ou taxi custa entre 40 e 60 PLN e demora um tempo semelhante fora das horas de ponta. Note que o aeroporto low-cost de Modlin, usado por algumas companhias economicas, fica cerca de 40km a norte da cidade e chega-se por um autocarro shuttle dedicado, por isso conte com tempo extra se aterrar la.",
    centerWalkable: true,
    bestMonths: [5, 6, 7, 9],
    avoidMonths: [1],
    monthlyNotes: {
      1: "O mes mais frio, com maximas perto de 1C, minimas bem abaixo de zero e dias curtos e cinzentos que muitas vezes trazem neve. Os monumentos estao calmos e as tarifas de hotel batem no minimo do ano, e os bares de leite e as caves acolhem o ambiente quando esta frio demais para ficar la fora; faca a mala para um inverno a serio.",
      2: "Ainda claramente inverno, a volta de 2C, com geada e neve frequentes, por isso e uma faixa barata e sem multidoes para os museus interiores e o Palacio da Cultura. Os dias alongam um pouco e os bares de vodka de Praga fazem um serao quente; conte com os precos mais baixos do ano.",
      3: "As maximas sobem para os 7C e a cidade comeca a degelar, embora ainda haja neve tardia e vagas de frio. As multidoes mantem-se ligeiras e as tarifas ficam abaixo do pico de primavera, uma solida janela de valor se se vestir para tempo instavel.",
      4: "Primavera a serio a volta de 14C, com flor no Parque Lazienki e as primeiras mesas de esplanada ao longo da Nowy Swiat. Os fins de semana a volta da Pascoa enchem, por isso reserve com antecedencia uma hora no POLIN ou no Museu do Levantamento de Varsovia; os concertos gratuitos de Chopin em Lazienki ainda nao comecaram.",
      5: "Um dos melhores meses, maximas perto de 20C e longos seroes de luz, e os concertos gratuitos de piano de Chopin comecam junto ao seu monumento no Parque Lazienki ao domingo a tarde ate ao final de setembro. E o pico da epoca intermedia, por isso os precos firmam-se e as marginais do Vistula enchem ao serao.",
      6: "Quente a volta de 23C, com os dias mais longos do ano e as esplanadas movimentadas por Powisle e Praga. Os concertos de Chopin ao domingo em Lazienki continuam e a margem do rio ganha vida depois de escurecer; reserve os quartos de fim de semana cedo, porque a cidade esta em pleno.",
      7: "Pico de verao, maximas a volta de 24C e seroes quentes, embora as trovoadas continentais atravessem algumas tardes. Os concertos de Chopin decorrem todos os domingos em Lazienki, os bares de praia do Vistula estao a abarrotar, e esta e a faixa mais movimentada e cara, por isso faca os monumentos ao ar livre cedo.",
      8: "O mesmo calor de verao perto de 24C, mas o ambiente muda a 1 de agosto, quando as sirenes de ataque aereo soam por toda a cidade as 17h no aniversario do Levantamento de Varsovia e todos param na rua durante um minuto. E um momento comovente e solene que vale a pena testemunhar; o resto do mes mantem-se quente, animado e movimentado.",
      9: "Maximas a volta de 19C, multidoes a rarear depois da primeira semana e tempo agradavel para caminhar, o que faz deste a alternativa esperta ao verao. Os ultimos concertos gratuitos de Chopin tocam em Lazienki a meados do mes e a luz fica dourada sobre o rio; os precos aliviam.",
      10: "Outono fresco a volta de 13C com cor forte em Lazienki e ao longo da escarpa do Vistula. O numero de turistas cai visivelmente depois de meados do mes e as tarifas de hotel seguem; leve uma camada quente para os seroes, que arrefecem depressa assim que o sol se poe.",
      11: "Cinzento, frio e calmo a volta de 6C, com dias curtos e as primeiras geadas, ate o mercado de Natal da Cidade Velha e as luzes se acenderem na ultima semana e levantarem todo o ambiente. O final de novembro e um ponto ideal para as bancas do mercado e o vinho quente sem a densidade dos fins de semana de dezembro.",
      12: "O mercado de Natal da Cidade Velha decorre durante o mes a volta do Castelo Real e da Praca do Mercado, com luzes estendidas pelas fachadas medievais, vinho quente e comida substancial, e atrai muitas multidoes ao fim de semana. Conte com minimas abaixo de zero e possivel neve, e tarifas de dezembro acima da norma de inverno, por isso reserve cedo.",
    },
    climate: {
      1: { highC: 1, lowC: -4, rainyDays: 9 },
      2: { highC: 2, lowC: -4, rainyDays: 8 },
      3: { highC: 7, lowC: -1, rainyDays: 9 },
      4: { highC: 14, lowC: 3, rainyDays: 8 },
      5: { highC: 20, lowC: 8, rainyDays: 10 },
      6: { highC: 23, lowC: 11, rainyDays: 11 },
      7: { highC: 24, lowC: 13, rainyDays: 11 },
      8: { highC: 24, lowC: 13, rainyDays: 10 },
      9: { highC: 19, lowC: 9, rainyDays: 9 },
      10: { highC: 13, lowC: 4, rainyDays: 9 },
      11: { highC: 6, lowC: 1, rainyDays: 10 },
      12: { highC: 2, lowC: -2, rainyDays: 10 },
    },
    budgetLevel: "mid",
    budgetPerDay: { budget: 55, mid: 110, high: 220 },
    tagline:
      "Uma capital reconstruida a partir dos escombros, onde uma cidade velha de conto de fadas se ergue ao lado de torres estalinistas e arranha-ceus de vidro.",
    heroIntro:
      "A Cidade Velha de Varsovia parece medieval mas foi reconstruida tijolo a tijolo depois de a guerra a ter arrasado, com tal fidelidade que hoje esta classificada pela UNESCO. Toda a cidade e uma historia de destruicao e reconstrucao desafiante, contada com forca nos soberbos museus do Levantamento de Varsovia e POLIN, e recompensa quem procura substancia em vez de beleza de postal. A volta do nucleo historico ha uma margem de rio verde, o parque de Chopin com os seus concertos gratuitos de verao, e a comida barata e substancial dos bares de leite. E mais dispersa e moderna do que Cracovia, mas tem uma profundidade a serio, e dois ou tres dias deixam-no senti-la.",
    accent: { from: "#C0433A", to: "#3E5673", ink: "#2A1616" },
    neighborhoodSlugs: [
      "old-town-stare-miasto",
      "srodmiescie-centrum",
      "praga",
      "powisle",
      "nowy-swiat-krakowskie",
    ],
    nearbyCitySlugs: ["krakow"],
  },

  neighborhoods: [
    {
      slug: "old-town-stare-miasto",
      citySlug: "warsaw",
      name: "Cidade Velha (Stare Miasto)",
      lat: 52.2497,
      lng: 21.0122,
      bestFor: ["first-time", "romantic"],
      vibe: "A reconstruida cidade velha, classificada pela UNESCO, reune casas de mercadores em tons pastel a volta da Praca do Mercado e do Castelo Real, todas reconstruidas a partir dos escombros depois da guerra e convincentemente medievais ao caminhar. E a parte mais cheia de atmosfera da cidade e a base obvia para uma primeira visita, embora atraia grupos de excursao de dia e se esvazie no silencio depois de os restaurantes fecharem. Fique aqui pelo cenario de postal e pela curta caminhada ate a Rota Real.",
      pros: [
        "Todos os grandes monumentos da cidade velha, a Praca do Mercado, o Castelo Real e a Barbaca, a sua porta",
        "Seroes genuinamente cheios de atmosfera assim que as multidoes do dia rareiam e as fachadas ficam iluminadas",
        "Curta caminhada pela Krakowskie Przedmiescie ate ao centro e a Nowy Swiat",
      ],
      cons: [
        "Os restaurantes com precos mais turisticos da cidade rodeiam a Praca do Mercado",
        "Calma e um pouco morta a noite, com poucos locais a viver aqui",
        "As pedras da calcada e os degraus tornam-na incomoda com bagagem de rodas",
      ],
    },
    {
      slug: "srodmiescie-centrum",
      citySlug: "warsaw",
      name: "Srodmiescie (Centro)",
      lat: 52.2319,
      lng: 21.0067,
      bestFor: ["first-time", "family"],
      vibe: "O centro moderno estende-se a volta do Palacio da Cultura e da Ciencia, da Nowy Swiat e dos arranha-ceus de vidro, e e a base pratica e mais bem ligada da cidade. As duas linhas de metro e a maioria dos eletricos cruzam-se aqui, os hoteis cobrem toda a gama de precos, e tudo fica a uma viagem de eletrico ou a uma caminhada. Escolha-o pela conveniencia e pelo valor em vez do encanto da cidade velha.",
      pros: [
        "As melhores ligacoes de transporte da cidade, com as duas linhas de metro e a estacao principal perto",
        "Gama completa de hoteis a todos os precos, mais lojas, cinemas e restaurantes",
        "Central para chegar tanto a cidade velha como a Lazienki e a Praga",
      ],
      cons: [
        "Movimentado, com muito transito e pouca atmosfera do velho mundo",
        "A zona mesmo junto ao Palacio da Cultura parece corporativa e pode ficar morta a noite",
        "Menos carater do que a cidade velha ou os bairros da margem do rio",
      ],
    },
    {
      slug: "praga",
      citySlug: "warsaw",
      name: "Praga",
      lat: 52.2528,
      lng: 21.0361,
      bestFor: ["nightlife", "local"],
      vibe: "A margem leste, aspera e artistica, do outro lado do Vistula, sobreviveu em grande parte intacta a guerra, por isso os seus predios de tijolo sao a verdadeira Varsovia de antes da guerra, hoje entregue a ateliers, bares e galerias. A rua Zabkowska, o Museu do Neon e a destilaria de vodka Koneser ancoram uma cena criativa e alternativa que atrai mais locais do que turistas. Baseie-se aqui pela vida noturna e pelo carater em vez da conveniencia dos monumentos.",
      pros: [
        "A vida noturna mais criativa da cidade, dos bares da rua Zabkowska ao patio do Koneser",
        "Arquitetura verdadeira de antes da guerra que escapou a destruicao do conflito",
        "O Museu do Neon e uma forte cena de galerias e ateliers",
      ],
      cons: [
        "Mais aspera nalguns pontos e melhor percorrida com o bom senso urbano habitual a noite",
        "Uma travessia de rio a partir da cidade velha e dos principais monumentos",
        "Menos hoteis convencionais, mais apartamentos e hostels",
      ],
    },
    {
      slug: "powisle",
      citySlug: "warsaw",
      name: "Powisle",
      lat: 52.2411,
      lng: 21.0289,
      bestFor: ["local", "budget"],
      vibe: "O bairro descontraido junto ao rio fica abaixo da escarpa, entre o centro e o Vistula, e tornou-se a Varsovia jovem dos bares de estudantes, dos cafes e das reabilitadas marginais do rio. O Centro de Ciencia Copernico e os jardins da biblioteca da universidade ficam aqui, e toda a faixa ganha vida nos seroes quentes. Baseie-se aqui para uma estadia local e com bom valor a distancia de caminhada da agua e do centro.",
      pros: [
        "As marginais do Vistula e os bares de praia ficam a uma curta caminhada em descida",
        "Bares e cafes descontraidos com precos de estudante em vez de precos turisticos",
        "A pe ate a Nowy Swiat, o centro e o Centro de Ciencia Copernico",
      ],
      cons: [
        "A escarpa significa uma subida a pe de volta ao centro e a cidade velha",
        "Menos monumentos de destaque nas ruas imediatas",
        "Oferta de hoteis mais pequena, sobretudo pensoes e apartamentos",
      ],
    },
    {
      slug: "nowy-swiat-krakowskie",
      citySlug: "warsaw",
      name: "Nowy Swiat e Krakowskie Przedmiescie",
      lat: 52.2385,
      lng: 21.0175,
      bestFor: ["romantic", "first-time"],
      vibe: "A avenida da Rota Real corre da cidade velha, descendo pela Krakowskie Przedmiescie e pela Nowy Swiat, ladeada de palacios, igrejas, a universidade e os cafes mais grandiosos da cidade. E a espinha elegante de Varsovia, percorrivel de ponta a ponta, e poe-no entre a cidade velha e o centro com o trilho dos bancos de Chopin sob os pes. Baseie-se aqui para uma estadia central e romantica com a vida de cafe a porta.",
      pros: [
        "A rua mais bonita da cidade, com palacios, cafes e a universidade",
        "A meio caminho entre a cidade velha e o centro, percorrivel a pe ate ambos",
        "Os bancos musicais de Chopin e os monumentos da Rota Real ao longo do passeio",
      ],
      cons: [
        "Ladeada de cafes e cobicada, por isso as tarifas de quarto correm acima da media da cidade",
        "Movimentada com peoes e eventos, sobretudo nos fins de semana de verao",
        "Parte da avenida fecha ao transito, o que pode complicar as largadas de taxi",
      ],
    },
  ],

  pois: [
    {
      slug: "old-town-market-square",
      citySlug: "warsaw",
      name: "Praca do Mercado da Cidade Velha e a Estatua da Sereia",
      lat: 52.2497,
      lng: 21.0122,
      kind: "sight",
      needsBooking: false,
      tip: "A praca e a sua sereia de bronze Syrenka, o simbolo da espada e do escudo de Varsovia, sao gratuitas e estao abertas a qualquer hora, mas venha antes das 10h ou depois das 20h para fotografar as fachadas reconstruidas sem as multidoes do dia. Lembre-se de que toda a praca foi reconstruida a partir dos escombros depois de 1945, por isso leia as antigas fotos de antes da guerra expostas ali perto para perceber o que foi reconstruido, e evite os restaurantes junto a praca, que sao os mais caros da cidade.",
    },
    {
      slug: "royal-castle-castle-square",
      citySlug: "warsaw",
      name: "Castelo Real e Praca do Castelo",
      lat: 52.2478,
      lng: 21.0136,
      kind: "sight",
      needsBooking: false,
      tip: "O reconstruido Castelo Real alberga salas de estado restauradas e dois Rembrandts, e a entrada no percurso principal e gratuita num dia por semana, normalmente um dia util, por isso consulte o site do castelo antes de ir e conte com fila nesse dia. A Coluna de Sigismundo, na Praca do Castelo a frente, e o monumento secular mais antigo da cidade e o classico ponto de encontro; conte cerca de noventa minutos para o interior do castelo.",
    },
    {
      slug: "barbican-city-walls",
      citySlug: "warsaw",
      name: "A Barbaca e as Muralhas Medievais",
      lat: 52.2508,
      lng: 21.0106,
      kind: "sight",
      needsBooking: false,
      tip: "A Barbaca de tijolo vermelho e o troco envolvente de muralhas medievais reconstruidas sao gratuitos para atravessar e ligam a Cidade Velha a Cidade Nova em poucos minutos. Passe por aqui no verao, quando os musicos de rua e os vendedores de artesanato se instalam ao longo das muralhas, e siga as fortificacoes em volta para a entrada mais sossegada e mais bonita na Praca do Mercado a partir do norte.",
    },
    {
      slug: "krakowskie-przedmiescie-royal-route",
      citySlug: "warsaw",
      name: "Krakowskie Przedmiescie e a Rota Real",
      lat: 52.2411,
      lng: 21.0150,
      kind: "experience",
      needsBooking: false,
      tip: "Esta grandiosa avenida da Praca do Castelo ate a Nowy Swiat e gratuita para percorrer e esta ladeada de palacios, igrejas e a universidade, e parte dela fecha ao transito ao fim de semana, o que a torna agradavel a pe. Procure os bancos pretos de Chopin ao longo do percurso, que tocam trinta segundos da sua musica ao carregar num botao, e entre na Igreja de Santa Cruz para ver o pilar que guarda o coracao do compositor.",
    },
    {
      slug: "palace-of-culture-science",
      citySlug: "warsaw",
      name: "Palacio da Cultura e da Ciencia",
      lat: 52.2318,
      lng: 21.0060,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Compre um bilhete para o terraco panoramico do 30.o andar, que abre todos os dias e da a vista mais ampla sobre toda a cidade, e suba perto do por do sol para a melhor luz. A torre dos anos 1950 foi uma oferta de Estaline sobre a qual os polacos ainda sentem ambivalencia, e os locais brincam que tem a melhor vista precisamente por ser o unico sitio de onde nao se ve o proprio palacio; as filas crescem no verao, por isso va cedo ou tarde.",
    },
    {
      slug: "lazienki-park",
      citySlug: "warsaw",
      name: "Parque Lazienki e o Palacio na Ilha",
      lat: 52.2149,
      lng: 21.0355,
      kind: "park",
      needsBooking: false,
      tip: "Este e o parque mais grandioso da cidade, de entrada gratuita, com pavoes, o Palacio na Ilha e o enorme monumento a Chopin, e ao domingo a tarde, de meados de maio ao final de setembro, tocam concertos gratuitos de piano ao ar livre junto a estatua ao meio-dia e as 16h. Leve uma manta e chegue cedo para um lugar perto do monumento, e junte a visita aos interiores do palacio, que cobram um bilhete a parte.",
    },
    {
      slug: "wilanow-palace",
      citySlug: "warsaw",
      name: "Palacio de Wilanow",
      lat: 52.1650,
      lng: 21.0905,
      kind: "sight",
      needsBooking: false,
      tip: "Muitas vezes chamado o Versalhes polaco, esta residencia real barroca com jardins formais fica cerca de 10km a sul do centro e chega-se pelo autocarro 116 ou 180 em cerca de 40 minutos, por isso conte com meio dia. A entrada nas salas do palacio e gratuita num dia por semana, normalmente quinta-feira, e os jardins cobram uma pequena taxa a parte; va de manha para escapar aos autocarros de excursao e ver o jardim das rosas no verao.",
    },
    {
      slug: "polin-museum",
      citySlug: "warsaw",
      name: "Museu POLIN da Historia dos Judeus Polacos",
      lat: 52.2495,
      lng: 20.9930,
      kind: "museum",
      needsBooking: true,
      tip: "Reserve online um bilhete com hora marcada, ja que a exposicao central, que cobre mil anos de vida judaica polaca, e popular e as horas de entrada esgotam ao fim de semana. O edificio ergue-se no terreno do antigo gueto do tempo da guerra, em frente ao monumento aos Herois do Gueto, e a exposicao permanente e gratuita num dia por semana, normalmente quinta-feira; conte com pelo menos duas a tres horas la dentro.",
    },
    {
      slug: "warsaw-rising-museum",
      citySlug: "warsaw",
      name: "Museu do Levantamento de Varsovia",
      lat: 52.2325,
      lng: 20.9810,
      kind: "museum",
      needsBooking: true,
      tip: "Este museu imersivo sobre o levantamento de 1944 contra a ocupacao nazi e essencial e fica muito movimentado, por isso reserve online um bilhete com hora marcada e chegue a abertura; e gratuito as segundas-feiras, que sao tambem as mais concorridas. Reserve-lhe pelo menos duas horas, nao perca o filme 3D da cidade destruida nem o esgoto reproduzido por onde se rasteja, e note que fica a dez minutos a pe ou a uma curta viagem de eletrico a oeste do centro.",
    },
    {
      slug: "praga-neon-koneser",
      citySlug: "warsaw",
      name: "Praga: Museu do Neon e Koneser",
      lat: 52.2533,
      lng: 21.0430,
      kind: "experience",
      needsBooking: false,
      tip: "Atravesse o Vistula ate Praga para o Museu do Neon, que reune reclamos luminosos da era da Guerra Fria numa antiga fabrica e abre todos os dias por um pequeno bilhete, e o complexo Koneser, uma destilaria de vodka de tijolo vermelho transformada num patio de bares, lojas e o Museu da Vodka Polaca. Venha ao fim da tarde e ate ao serao, quando os bares da rua Zabkowska enchem, e trate-o como meio dia longe do centro turistico.",
    },
    {
      slug: "vistula-copernicus-centre",
      citySlug: "warsaw",
      name: "Marginais do Vistula e o Centro de Ciencia Copernico",
      lat: 52.2415,
      lng: 21.0287,
      kind: "experience",
      needsBooking: true,
      tip: "As reabilitadas marginais do rio abaixo de Powisle sao gratuitas e melhores ao serao, quando os bares de praia e as bancas de comida ladeiam a agua e a fonte multimedia da espetaculos de luz nas noites de fim de semana de verao. Ao lado delas, o Centro de Ciencia Copernico e um museu interativo excelente para familias mas que esgota, por isso reserve online um bilhete com hora marcada com antecedencia e conte com um par de horas la dentro.",
    },
    {
      slug: "milk-bar-bar-mleczny",
      citySlug: "warsaw",
      name: "Um Bar de Leite (Bar Mleczny)",
      lat: 52.2360,
      lng: 21.0170,
      kind: "food",
      needsBooking: false,
      tip: "Estas cantinas sem luxos da era comunista ainda servem pierogi, sopas e costeletas por uns euros, e um prato cheio raramente passa de 25 PLN, o que faz delas a refeicao a serio mais barata da cidade. O Bar Prasowy, na Marszalkowska, e um sobrevivente bem conhecido; peca ao balcao, conte com uma ementa so em polaco e servico amigavel ao dinheiro, e va a hora de almoco, quando a comida esta mais fresca e a rotatividade mais rapida.",
    },
    {
      slug: "zelazowa-wola-daytrip",
      citySlug: "warsaw",
      name: "Passeio de um dia a Zelazowa Wola ou Palmiry",
      lat: 52.2510,
      lng: 20.4200,
      kind: "experience",
      needsBooking: false,
      tip: "A casa natal de Chopin em Zelazowa Wola, cerca de 50km a oeste, e uma casa senhorial e um parque com recitais gratuitos de piano ao domingo no verao, acessivel por um autocarro regional a partir de Varsovia em cerca de uma hora e meia. Em alternativa, Palmiry, na floresta de Kampinos a norte da cidade, e o local e o cemiterio das execucoes em massa do tempo da guerra e um meio dia solene e comovente; ambos sao escapadelas sossegadas da capital, por isso confirme os horarios do autocarro de regresso antes de partir.",
    },
  ],

  itineraries: [
    {
      citySlug: "warsaw",
      days: 2,
      summary:
        "Dois dias chegam para a essencia de Varsovia se planear com antecedencia os museus com bilhete. A reconstruida Cidade Velha e pequena e pode percorrer a Praca do Mercado, o Castelo Real, a Barbaca e a Sereia num par de horas, por isso o tempo vai mesmo para os museus e o centro moderno mais amplo. Reserve online uma hora marcada para o Museu do Levantamento de Varsovia e para o POLIN, porque ambos sao essenciais, imersivos e movimentados, e reserve pelo menos duas horas a cada um. Baseie-se na Cidade Velha ou na Rota Real para poder percorrer a espinha historica a pe, e depois use os eletricos e as duas linhas de metro para o resto. O primeiro dia toma a Cidade Velha, a Rota Real e o terraco panoramico do Palacio da Cultura; o segundo e a pesada e recompensadora historia no Museu do Levantamento de Varsovia e no POLIN, e depois o Parque Lazienki a tarde, com os seus concertos gratuitos de Chopin se visitar num domingo de verao. O que se abdica a este ritmo e Praga e Wilanow. Para essas, opte pela versao de tres dias.",
      stayNeighborhoodSlug: "old-town-stare-miasto",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "A Cidade Velha, a Rota Real e a vista da cidade",
          morning: [
            {
              poiSlug: "old-town-market-square",
              text: "Comece na Praca do Mercado da Cidade Velha antes de os grupos de excursao chegarem, com a sereia de bronze Syrenka e as fachadas pastel reconstruidas so para si. Leia as fotos de antes da guerra ali perto para perceber que toda a praca foi reconstruida a partir dos escombros depois de 1945.",
              durationMin: 45,
            },
            {
              poiSlug: "royal-castle-castle-square",
              text: "Caminhe ate a Praca do Castelo e visite o reconstruido Castelo Real, com as suas salas de estado restauradas e dois Rembrandts, reservando cerca de noventa minutos. Consulte o site do castelo para o dia de entrada gratuita semanal se quiser poupar o bilhete, e conte com fila se for nesse dia.",
              durationMin: 105,
            },
            {
              poiSlug: "barbican-city-walls",
              text: "De uma volta pela Barbaca de tijolo vermelho e ao longo das muralhas medievais reconstruidas em direcao a Cidade Nova, o que e gratuito e demora apenas alguns minutos. No verao, os musicos de rua e os vendedores de artesanato ladeiam as fortificacoes.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "milk-bar-bar-mleczny",
              text: "Faca uma pausa para um almoco barato e substancial num bar de leite, onde um prato de pierogi e sopa raramente passa de 25 PLN. Peca ao balcao, conte com uma ementa so em polaco e va a hora de almoco, quando a rotatividade e mais rapida.",
              durationMin: 60,
            },
            {
              poiSlug: "krakowskie-przedmiescie-royal-route",
              text: "Percorra a Rota Real descendo a Krakowskie Przedmiescie por entre os palacios, as igrejas e a universidade, carregando nos bancos pretos de Chopin pelos seus trinta segundos de musica. Entre na Igreja de Santa Cruz para ver o pilar que guarda o coracao do compositor.",
              durationMin: 75,
            },
            {
              poiSlug: "palace-of-culture-science",
              text: "Siga ate ao Palacio da Cultura e da Ciencia e suba ao terraco panoramico do 30.o andar para a vista mais ampla sobre a cidade. A torre estalinista dos anos 1950 e uma oferta sobre a qual os polacos ainda sentem ambivalencia; suba perto do por do sol para a melhor luz.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              text: "Regresse em direcao a Nowy Swiat para jantar, escolhendo uma rua lateral fora da avenida principal onde os precos descem, e depois percorra a Rota Real iluminada de volta a Cidade Velha. A praca esta no seu melhor iluminada e calma depois de as multidoes do dia partirem.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Historia da guerra e o parque de Chopin",
          morning: [
            {
              poiSlug: "warsaw-rising-museum",
              text: "Aproveite a sua hora reservada no Museu do Levantamento de Varsovia a abertura, antes de as multidoes crescerem, e reserve-lhe pelo menos duas horas. Nao perca o filme 3D da cidade destruida nem o esgoto reproduzido por onde se rasteja; fica a dez minutos de eletrico a oeste do centro.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "polin-museum",
              text: "Passe ao POLIN, o Museu da Historia dos Judeus Polacos, com o seu bilhete com hora marcada, pela sua exposicao central de mil anos no terreno do antigo gueto. Reserve duas a tres horas e pare no monumento aos Herois do Gueto em frente a entrada.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "lazienki-park",
              text: "Termine no Parque Lazienki, o mais grandioso da cidade, com os seus pavoes, o Palacio na Ilha e o enorme monumento a Chopin. Se for um domingo de verao, calcule-o para o concerto gratuito de piano ao ar livre junto a estatua as 16h e leve algo para sentar.",
              durationMin: 120,
            },
            {
              text: "Remate com o jantar de volta ao centro ou a Nowy Swiat, ou, se o serao estiver quente, desca ate as marginais do Vistula para uma bebida a beira-rio entre os bares de praia.",
              durationMin: 105,
            },
          ],
        },
      ],
    },
    {
      citySlug: "warsaw",
      days: 3,
      summary:
        "Tres dias sao a dose confortavel para Varsovia e permitem fazer os pesados museus de historia da guerra a um ritmo adequado em vez de um a seguir ao outro. A Cidade Velha e pequena e depressa percorrida, por isso o tempo a serio vai para o Museu do Levantamento de Varsovia e o POLIN, o Palacio da Cultura e o Parque Lazienki, que so por si precisam de um segundo dia inteiro. O terceiro dia extra e o que abre a cidade: atravesse o Vistula ate a aspera e criativa Praga pelo Museu do Neon e a destilaria Koneser, va ate ao barroco Palacio de Wilanow, ou simplesmente de aos museus da guerra o espaco que merecem. Baseie-se na Rota Real ou na Cidade Velha para o nucleo historico, e depois apoie-se nos eletricos e nas duas linhas de metro para os monumentos mais afastados. Reserve online bilhetes com hora marcada para o Museu do Levantamento de Varsovia, o POLIN e o Centro de Ciencia Copernico, ja que os tres esgotam em epoca alta. O primeiro dia e a Cidade Velha e a Rota Real; o segundo e os museus e Lazienki; o terceiro e Praga, Wilanow e a margem do rio a um ritmo descontraido.",
      stayNeighborhoodSlug: "nowy-swiat-krakowskie",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "A Cidade Velha, a Rota Real e a vista da cidade",
          morning: [
            {
              poiSlug: "old-town-market-square",
              text: "Comece cedo na Praca do Mercado da Cidade Velha, com a sereia de bronze Syrenka e as fachadas reconstruidas antes das multidoes do dia. Leia as fotos de antes da guerra ali perto para perceber que toda a praca foi reconstruida a partir dos escombros depois de 1945.",
              durationMin: 45,
            },
            {
              poiSlug: "royal-castle-castle-square",
              text: "Visite o reconstruido Castelo Real a partir da Praca do Castelo, com as suas salas de estado e dois Rembrandts, reservando cerca de noventa minutos. A Coluna de Sigismundo a frente e o monumento secular mais antigo da cidade e o classico ponto de encontro.",
              durationMin: 105,
            },
            {
              poiSlug: "barbican-city-walls",
              text: "Saia pela Barbaca e ao longo das muralhas medievais reconstruidas em direcao a Cidade Nova, gratuito e rapido, e depois de a volta ate a praca a partir do norte, a sua entrada mais bonita.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "milk-bar-bar-mleczny",
              text: "Almoce barato num bar de leite, onde pierogi, sopa e uma costeleta raramente passam de 25 PLN. Peca ao balcao e va ao meio-dia, quando a comida esta mais fresca e a fila anda mais depressa.",
              durationMin: 60,
            },
            {
              poiSlug: "krakowskie-przedmiescie-royal-route",
              text: "Percorra a Rota Real descendo a Krakowskie Przedmiescie por entre os palacios, as igrejas e a universidade, carregando nos bancos de Chopin pelo caminho. Entre na Igreja de Santa Cruz para ver o pilar que guarda o coracao do compositor.",
              durationMin: 75,
            },
            {
              poiSlug: "palace-of-culture-science",
              text: "Termine a tarde no Palacio da Cultura e da Ciencia e suba ao terraco panoramico do 30.o andar para a vista mais ampla da cidade. Va perto do por do sol pela luz; a torre estalinista continua a ser um monumento sobre o qual os polacos sentem ambivalencia.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              text: "Jantar a volta da Nowy Swiat, escolhendo uma rua lateral onde os precos aliviam, e depois percorra a avenida iluminada de volta a Cidade Velha. A Praca do Mercado iluminada esta mais calma e no seu melhor depois de os visitantes do dia partirem.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Historia da guerra e o parque de Chopin",
          morning: [
            {
              poiSlug: "warsaw-rising-museum",
              text: "Aproveite a sua hora reservada no Museu do Levantamento de Varsovia a abertura e reserve-lhe pelo menos duas horas; e imersivo, essencial e movimentado. Veja o filme 3D da cidade destruida e rasteje pelo esgoto reproduzido; fica a uma curta viagem de eletrico a oeste do centro.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "polin-museum",
              text: "Passe ao POLIN com o seu bilhete com hora marcada pela sua exposicao central de mil anos no terreno do antigo gueto, reservando duas a tres horas. Pare no monumento aos Herois do Gueto em frente a entrada antes ou depois.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "lazienki-park",
              text: "Passe o fim da tarde no Parque Lazienki com os seus pavoes, o Palacio na Ilha e o monumento a Chopin. Num domingo de verao, apanhe o concerto gratuito de piano ao ar livre junto a estatua as 16h; leve uma manta e chegue cedo para um lugar.",
              durationMin: 120,
            },
            {
              text: "Termine com o jantar de volta ao centro, ou desca ate as marginais do Vistula para uma bebida entre os bares de praia junto ao rio se o tempo aguentar.",
              durationMin: 105,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Praga, Wilanow e a margem do rio",
          morning: [
            {
              poiSlug: "wilanow-palace",
              text: "Va para sul ate ao Palacio de Wilanow, o Versalhes polaco barroco com os seus jardins formais, no autocarro 116 ou 180, reservando cerca de 40 minutos para cada percurso. A entrada nas salas e gratuita um dia por semana, normalmente quinta-feira; va de manha para escapar aos autocarros de excursao.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "praga-neon-koneser",
              text: "Atravesse o Vistula ate Praga para o Museu do Neon de reclamos luminosos da Guerra Fria e o patio da destilaria Koneser, casa de bares, lojas e o Museu da Vodka Polaca. Esta margem leste sobreviveu em grande parte a guerra, por isso os seus predios de tijolo sao a verdadeira Varsovia de antes da guerra.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "vistula-copernicus-centre",
              text: "Regresse a margem oeste para as marginais do Vistula abaixo de Powisle, melhores ao serao, quando os bares de praia e as bancas de comida abrem e a fonte multimedia da espetaculos nas noites de fim de semana de verao. As familias podem encaixar ao lado um par de horas reservadas no Centro de Ciencia Copernico.",
              durationMin: 120,
            },
            {
              text: "Ultimo jantar em Powisle ou na Nowy Swiat, mantendo-o simples. Se tiver voo cedo, lembre-se de que o aeroporto Chopin fica a apenas 8km a sul, cerca de 20 a 25 minutos no comboio S2 ou S3 ou no autocarro 175 por cerca de 5 PLN.",
              durationMin: 105,
            },
          ],
        },
      ],
    },
  ],
};

export default warsawPt;
