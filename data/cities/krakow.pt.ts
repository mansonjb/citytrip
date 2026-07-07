import type { CityData } from "../types";

const krakowPt: CityData = {
  city: {
    slug: "krakow",
    name: "Cracovia",
    country: "Polonia",
    countrySlug: "poland",
    lat: 50.0647,
    lng: 19.945,
    tier: 3,
    idealDays: 2,
    durations: [2, 3],
    airportCode: "KRK",
    airportToCenter:
      "O comboio do Aeroporto de Cracovia ate a estacao principal de Krakow Glowny demora cerca de 20 minutos e custa por volta de 17 PLN, aproximadamente 4 EUR, com partidas de 30 em 30 minutos. Os autocarros urbanos 208 e 252 fazem o mesmo percurso mais devagar com um bilhete normal de transporte, caso o horario do comboio nao lhe convenha.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 12],
    avoidMonths: [1],
    monthlyNotes: {
      1: "O mes mais frio, com maximas perto de 1C, minimas bem abaixo de zero e dias curtos e cinzentos; o mercado de Natal na Praca do Mercado (Rynek Glowny) costuma encerrar nos primeiros dias de janeiro. Os pontos de interesse estao calmos e os precos de hotel atingem o minimo do ano, mas leve roupa de inverno a serio e conte com neve no chao.",
      2: "Ainda em pleno inverno, com maximas a rondar os 3C e geada frequente, por isso e uma altura barata e sem multidoes para percorrer os pontos de interesse interiores e Wawel. Os dias alongam-se um pouco e os milk bars e os bares de cave dao o ambiente quando esta frio de mais para ficar la fora.",
      3: "As maximas sobem para os 9C e a cidade descongela; os mercados de Pascoa surgem na Praca do Mercado (Rynek Glowny) na segunda metade do mes quando a Pascoa cai cedo. As multidoes mantem-se reduzidas e os precos ficam abaixo do pico da primavera, uma boa janela para uma viagem com bom preco.",
      4: "Primavera a serio, por volta dos 14C, com flor no parque Planty e as primeiras mesas de esplanada na praca. Os fins de semana da Pascoa e o feriado prolongado de maio ficam movimentados, por isso reserve as salas de estado de Wawel e qualquer reserva de Auschwitz-Birkenau com muita antecedencia.",
      5: "Um dos melhores meses, maximas perto dos 19C, longas tardes de luz e cervejarias ao ar livre a encher-se em Kazimierz. E o pico da meia-estacao, por isso os precos do alojamento firmam-se e a praca ganha vida; reserve cedo as excursoes de um dia a Auschwitz e a Wieliczka.",
      6: "Quente, por volta dos 22C, com os dias mais longos do ano e dois eventos ancora: o festival de solsticio Wianki junto ao Vistula, por baixo de Wawel, em torno do solsticio, e o arranque do Festival de Cultura Judaica em Kazimierz na ultima semana. Reserve cedo o alojamento em Kazimierz para as datas do festival.",
      7: "Pleno verao, maximas a rondar os 24C, noites quentes e os concertos do Festival de Cultura Judaica a espalhar-se por Kazimierz nos primeiros dias do mes. E o periodo mais movimentado e mais caro; faca Wawel e a praca cedo e guarde as tardes para o Planty sombreado e os bares a beira-rio.",
      8: "O mesmo calor de verao perto dos 24C e o maior numero de turistas do ano, com trovoadas ocasionais ao fim da tarde. As cervejarias ao ar livre e os passeios ribeirinhos do Vistula absorvem bem as multidoes, mas conte com filas para a Mina de Sal e a Fabrica de Schindler durante todo o dia, por isso reserve com antecedencia.",
      9: "Maximas a rondar os 19C, multidoes a rarear apos a primeira semana e tempo agradavel para caminhar, o que faz deste o mes esperto em alternativa ao verao. Os precos aliviam e a luz fica dourada sobre a praca; as excursoes de um dia sao mais faceis de reservar em cima da hora.",
      10: "Outono fresco, por volta dos 13C, com cor forte no Planty e ao longo do rio; o numero de turistas cai visivelmente depois de meados do mes e os precos de hotel seguem-no. Leve uma camada quente para as noites, que arrefecem depressa assim que o sol se poe.",
      11: "Cinzento, frio e calmo, por volta dos 7C, ate o mercado de Natal abrir na Praca do Mercado (Rynek Glowny) na ultima semana, o que muda por completo o ambiente. O fim de novembro e um bom compromisso: bancas do mercado e vinho quente sem a densidade dos fins de semana de dezembro.",
      12: "O mercado de Natal na Praca do Mercado (Rynek Glowny) decorre ao longo do mes com queijo oscypek grelhado, vinho quente e uma enorme tradicao de presepios, e atrai muita gente aos fins de semana. Conte com minimas abaixo de zero, possivel neve e precos de hotel de dezembro acima do normal de inverno, por isso reserve cedo.",
    },
    climate: {
      1: { highC: 1, lowC: -4, rainyDays: 9 },
      2: { highC: 3, lowC: -3, rainyDays: 8 },
      3: { highC: 9, lowC: 0, rainyDays: 9 },
      4: { highC: 14, lowC: 4, rainyDays: 10 },
      5: { highC: 19, lowC: 9, rainyDays: 12 },
      6: { highC: 22, lowC: 12, rainyDays: 13 },
      7: { highC: 24, lowC: 14, rainyDays: 13 },
      8: { highC: 24, lowC: 13, rainyDays: 11 },
      9: { highC: 19, lowC: 9, rainyDays: 9 },
      10: { highC: 13, lowC: 5, rainyDays: 8 },
      11: { highC: 7, lowC: 1, rainyDays: 9 },
      12: { highC: 2, lowC: -3, rainyDays: 10 },
    },
    budgetLevel: "low",
    budgetPerDay: { budget: 45, mid: 95, high: 190 },
    tagline: "Nucleo medieval intacto, precos de milk bar, historia pesada por perto.",
    heroIntro:
      "Cracovia guardou a maior praca medieval da Europa, um castelo real numa colina e um bairro judeu inteiro que sobreviveu a guerra, tudo dentro de um anel percorrivel a pe que se atravessa em vinte minutos. E uma das escapadas urbanas classicas mais baratas do continente, e os milk bars ainda o alimentam por uns euros. Dois dias chegam para o centro historico, Wawel e Kazimierz com calma; um terceiro dia serve para as grandes excursoes reservadas com antecedencia a Auschwitz-Birkenau ou a Mina de Sal de Wieliczka.",
    accent: { from: "#8E2D3C", to: "#D9A441", ink: "#4E1A24" },
    neighborhoodSlugs: [
      "stare-miasto",
      "kazimierz",
      "podgorze",
      "kleparz",
      "stradom",
    ],
    nearbyCitySlugs: ["prague"],
  },

  neighborhoods: [
    {
      slug: "stare-miasto",
      citySlug: "krakow",
      name: "Stare Miasto (Cidade Velha)",
      lat: 50.0616,
      lng: 19.937,
      bestFor: ["first-time", "romantic"],
      vibe: "O nucleo medieval dentro do anel verde do Planty, construido a volta da Praca do Mercado (Rynek Glowny), a maior praca de mercado da Europa. De dia e a parte mais movimentada da cidade, so charretes, mesas de cafe e o trompete de Santa Maria a cada hora; ao fim da tarde os visitantes de um dia raream e os bares de cave assumem o comando. Tudo o que um viajante de primeira vez quer fica a dez minutos a pe.",
      pros: [
        "Praca do Mercado (Rynek Glowny), a Lonja dos Panos e Wawel a curta distancia a pe",
        "A mais ampla oferta de hoteis e apartamentos de Cracovia",
        "Sem transportes necessarios para uma viagem de dois dias",
      ],
      cons: [
        "Os restaurantes mesmo na praca sao armadilhas para turistas com precos inflacionados",
        "Grupos de despedidas de solteiro e barulho de rua nas noites de fim de semana",
        "Paga um premio de localizacao face a Kazimierz ou Kleparz",
      ],
    },
    {
      slug: "kazimierz",
      citySlug: "krakow",
      name: "Kazimierz",
      lat: 50.0515,
      lng: 19.944,
      bestFor: ["local", "nightlife", "romantic", "budget"],
      vibe: "O antigo bairro judeu a sul do centro, hoje o distrito com mais atmosfera da cidade, com sinagogas sobreviventes, bares de patio e a melhor comida de rua de Cracovia. Vai das ruelas calmas e cheias de memoria a volta das sinagogas a apinhada cena de bares na Plac Nowy depois de escurecer. Ficar aqui coloca-o entre a cidade velha e Podgorze, com a Fabrica de Schindler a curta caminhada do outro lado do rio.",
      pros: [
        "Os melhores bares, cafes e comida de rua da cidade a precos locais",
        "A distancia a pe tanto da cidade velha como da Fabrica de Schindler",
        "Quartos mais baratos do que na cidade velha com a mesma sensacao central",
      ],
      cons: [
        "A Plac Nowy e as ruas laterais ficam barulhentas ate tarde ao fim de semana",
        "Uma caminhada de 15 minutos ate a Praca do Mercado (Rynek Glowny), em vez de a dois passos",
        "Menos hoteis de grande nome, mais apartamentos e pequenas guesthouses",
      ],
    },
    {
      slug: "podgorze",
      citySlug: "krakow",
      name: "Podgorze",
      lat: 50.0446,
      lng: 19.9565,
      bestFor: ["local", "budget", "family"],
      vibe: "O distrito do outro lado do Vistula que albergou o gueto durante a guerra, hoje um bairro residencial tranquilo com a historia mais pesada de Cracovia e um ritmo lento e sem pressas. A Fabrica de Schindler, a Praca dos Herois do Gueto com o seu memorial de cadeiras vazias e o museu de arte moderna MOCAK ficam todos aqui. Fica a uma curta caminhada pela ponte pedonal desde Kazimierz, mas e muito mais calmo a noite.",
      pros: [
        "A Fabrica de Schindler e os memoriais do gueto a porta",
        "Ruas calmas e genuinamente locais e precos mais baixos do que no centro",
        "Ponte pedonal direta para Kazimierz para as saidas a noite",
      ],
      cons: [
        "Poucos restaurantes e bares comparado com Kazimierz do outro lado do rio",
        "20 a 25 minutos a pe ate a Praca do Mercado (Rynek Glowny)",
        "Ambiente sombrio em partes; isto e chao de memoria, nao vida noturna",
      ],
    },
    {
      slug: "kleparz",
      citySlug: "krakow",
      name: "Kleparz",
      lat: 50.0685,
      lng: 19.9415,
      bestFor: ["budget", "local", "family"],
      vibe: "Um distrito de trabalho mesmo a norte da muralha da cidade velha, construido a volta do mercado coberto Stary Kleparz onde os locais compram produtos frescos ha seculos. E mais simples do que o nucleo turistico, mas fica a cinco minutos da Barbaca e mesmo junto as principais estacoes de comboios e autocarros. E aqui que troca o visual de postal por precos mais baixos e transporte facil.",
      pros: [
        "Os quartos mais baratos junto ao centro, a cinco minutos da cidade velha",
        "Mercado Stary Kleparz para comida fresca e petiscos baratos",
        "A dois passos de Krakow Glowny para o comboio do aeroporto e as excursoes de um dia",
      ],
      cons: [
        "Pouco encanto no proprio distrito; dorme aqui, nao se demora",
        "Estradas movimentadas e a estacao trazem transito e barulho",
        "Jantar noturno escasso comparado com Kazimierz ou a praca",
      ],
    },
    {
      slug: "stradom",
      citySlug: "krakow",
      name: "Stradom",
      lat: 50.0555,
      lng: 19.9415,
      bestFor: ["first-time", "romantic", "family"],
      vibe: "A faixa estreita entre a cidade velha e Kazimierz, por baixo do flanco leste da colina de Wawel. E central sem o barulho da praca, a cinco minutos a pe tanto da Praca do Mercado (Rynek Glowny) como dos bares de Kazimierz, e o mais proximo de todos do castelo. Uma base sensata para quem quer a cidade velha e Kazimierz em igual medida.",
      pros: [
        "A meio caminho entre a Praca do Mercado (Rynek Glowny), Wawel e Kazimierz, tudo a pe",
        "Noites mais calmas do que a praca ou a Plac Nowy",
        "A zona residencial mais proxima do Castelo de Wawel",
      ],
      cons: [
        "Menor oferta de hoteis do que a cidade velha propriamente dita",
        "Algumas vias de passagem movimentadas cortam o distrito",
        "Menos cena propria; sai para jantar e para os bares",
      ],
    },
  ],

  pois: [
    {
      slug: "rynek-glowny",
      citySlug: "krakow",
      name: "Praca do Mercado (Rynek Glowny) e Lonja dos Panos (Sukiennice)",
      lat: 50.0617,
      lng: 19.9373,
      kind: "sight",
      needsBooking: false,
      tip: "A praca e as bancas do mercado no piso terreo da Lonja dos Panos sao gratuitas para percorrer; veja o ambar e o artesanato popular mas regateie, e evite os quiosques de cambio a volta da praca por causa das taxas pessimas. O museu subterraneo Rynek por baixo da praca e o destaque pago, e esgota nas tardes movimentadas, por isso reserve online um horario de manha.",
    },
    {
      slug: "st-marys-basilica",
      citySlug: "krakow",
      name: "Basilica de Santa Maria",
      lat: 50.0617,
      lng: 19.9394,
      kind: "sight",
      needsBooking: true,
      tip: "Ha dois bilhetes separados com lugares limitados: um para a igreja para ver o altar de madeira de Veit Stoss, aberto diariamente por volta das 11h50, e um bilhete com hora marcada em separado para subir a torre. Compre ambos online com antecedencia, e fique na praca a qualquer hora certa para ouvir o toque de trompete hejnal tocado ao vivo da torre e interrompido a meio da nota, um aceno a um trompetista medieval calado por uma flecha.",
    },
    {
      slug: "wawel-castle",
      citySlug: "krakow",
      name: "Castelo de Wawel",
      lat: 50.0544,
      lng: 19.9356,
      kind: "sight",
      needsBooking: true,
      tip: "O patio do castelo e os terrenos da colina sao de entrada gratuita, mas as Salas de Estado e os Aposentos Reais usam bilhetes com hora marcada com um limite diario que se esgota cedo no verao, por isso reserve online um horario perto da abertura das 9h30. Um numero limitado de bilhetes gratuitos para alguns percursos e libertado num dia da semana, normalmente a segunda-feira, e esgotam em minutos.",
    },
    {
      slug: "wawel-cathedral",
      citySlug: "krakow",
      name: "Catedral de Wawel",
      lat: 50.0543,
      lng: 19.9351,
      kind: "sight",
      needsBooking: false,
      tip: "A entrada na nave da catedral e gratuita, mas os tumulos reais, a subida a torre do Sino Sigismundo e a cripta precisam de um bilhete combinado comprado na casa em frente a entrada, do outro lado da praca, e nao a porta. Suba as escadas de madeira estreitas ate a altura do sino Sigismundo cedo, antes de a escadaria de fila unica congestionar a meio da manha.",
    },
    {
      slug: "kazimierz-quarter",
      citySlug: "krakow",
      name: "Bairro judeu de Kazimierz",
      lat: 50.0515,
      lng: 19.9445,
      kind: "sight",
      needsBooking: false,
      tip: "Percorra-o de manha para as sinagogas, o cemiterio Remuh e a Rua Szeroka com quase ninguem por perto, e volte depois de escurecer para a cena de bares da Plac Nowy. As zapiekanki redondas, baguetes-pizza da rotunda Okraglak na Plac Nowy, sao o classico petisco barato de fim de noite por uns zloty.",
    },
    {
      slug: "schindlers-factory",
      citySlug: "krakow",
      name: "Museu da Fabrica de Schindler",
      lat: 50.0475,
      lng: 19.9613,
      kind: "museum",
      needsBooking: true,
      tip: "Isto e um museu da Cracovia ocupada durante a guerra dentro da verdadeira fabrica de esmaltados de Oskar Schindler, nao apenas sobre o filme, e esgota com dias de antecedencia no verao, por isso reserve online um bilhete com hora marcada. Va no primeiro horario do dia; as salas imersivas estreitas congestionam mal os grupos chegam, e conte com duas horas completas.",
    },
    {
      slug: "auschwitz-birkenau",
      citySlug: "krakow",
      name: "Memorial de Auschwitz-Birkenau",
      lat: 50.0343,
      lng: 19.1789,
      kind: "sight",
      needsBooking: true,
      tip: "A entrada e gratuita mas TEM de reservar online um bilhete com hora marcada, muitas vezes semanas antes em epoca alta, e entre cerca das 10h e as 15h so pode entrar com um guia licenciado. Fica a cerca de 1,5 horas de carro por sentido, perto de Oswiecim, por isso reserve pelo menos meio dia e realisticamente quase um dia inteiro; o local abrange dois campos separados, Auschwitz I e Birkenau, ligados por um autocarro de ligacao.",
    },
    {
      slug: "wieliczka-salt-mine",
      citySlug: "krakow",
      name: "Mina de Sal de Wieliczka",
      lat: 49.9832,
      lng: 20.0546,
      kind: "experience",
      needsBooking: true,
      tip: "So pode descer numa visita guiada, por isso reserve online o Percurso Turistico com antecedencia, sobretudo no verao quando os horarios em ingles se enchem depressa. E uma caminhada de duas horas com cerca de 380 degraus a descer no inicio e sem forma de sair mais cedo, por isso nao serve para quem nao aguenta escadas; a temperatura subterranea mantem-se a volta dos 14C todo o ano, leve uma camada.",
    },
    {
      slug: "planty-park",
      citySlug: "krakow",
      name: "Anel do parque Planty",
      lat: 50.0625,
      lng: 19.9355,
      kind: "park",
      needsBooking: false,
      tip: "Este cinturao verde envolve toda a cidade velha na linha das muralhas demolidas, um anel plano de quatro quilometros que se percorre em menos de uma hora. Use-o como atalho sombreado entre pontos de interesse no verao, mais do que como destino; o troco junto a Barbaca e ao bairro universitario e o mais bonito.",
    },
    {
      slug: "barbican-florian-gate",
      citySlug: "krakow",
      name: "Barbaca e Porta de Sao Floriano",
      lat: 50.0655,
      lng: 19.9415,
      kind: "sight",
      needsBooking: false,
      tip: "A Barbaca e as muralhas sao gratuitas para ver a partir do Planty; um bilhete combinado barato deixa-o percorrer as muralhas sobreviventes e subir por dentro da Barbaca se quiser o angulo da defesa medieval. A Porta de Sao Floriano abre para a Rua Florianska, a classica aproximacao a descer ate a Praca do Mercado (Rynek Glowny), e os pintores locais penduram telas ao longo da muralha aqui.",
    },
    {
      slug: "collegium-maius",
      citySlug: "krakow",
      name: "Collegium Maius (Universidade Jagiellonian)",
      lat: 50.0614,
      lng: 19.9327,
      kind: "museum",
      needsBooking: true,
      tip: "O edificio mais antigo da universidade mais antiga da Polonia, onde Copernico estudou, so se ve em visita guiada, e os horarios populares esgotam, por isso reserve com antecedencia e peca uma visita em ingles. O patio gotico com arcadas e gratuito para entrar e o relogio astronomico no seu interior badala e faz desfilar figuras algumas vezes ao dia, vale a pena cronometrar.",
    },
    {
      slug: "milk-bar-tomasza",
      citySlug: "krakow",
      name: "Bar Mleczny (Milk Bar)",
      lat: 50.0625,
      lng: 19.9405,
      kind: "food",
      needsBooking: false,
      tip: "Um bar mleczny e uma cantina subsidiada que serve pierogi, sopas e escalopes por uns euros, uma fatia genuina da Polonia do dia a dia; procure um como o Bar Mleczny Tomasza perto da cidade velha. Leia o quadro de menu em polaco por cima do balcao, pague primeiro na caixa e depois recolha o prato; o dinheiro vivo e o mais seguro e a rotatividade e rapida ao almoco.",
    },
    {
      slug: "ghetto-heroes-square",
      citySlug: "krakow",
      name: "Podgorze e Praca dos Herois do Gueto",
      lat: 50.0475,
      lng: 19.9527,
      kind: "sight",
      needsBooking: false,
      tip: "A praca do outro lado do rio, em Podgorze, alberga o memorial de 70 cadeiras de bronze vazias que assinalam o gueto da guerra, e a Farmacia da Aguia na sua berma e um pequeno e comovente museu do gueto por uma taxa baixa. Combine-a com a Fabrica de Schindler a poucos minutos, ja que ambas ficam do mesmo lado do Vistula.",
    },
    {
      slug: "kosciuszko-mound",
      citySlug: "krakow",
      name: "Miradouro do Monte Kosciuszko",
      lat: 50.0547,
      lng: 19.8917,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Este monte artificial a oeste do centro da o melhor panorama completo sobre Cracovia e, em dias limpos, os montes Tatra; um bilhete baixo cobre a subida e o pequeno museu do forte a volta. Fica a 30 minutos de viagem no autocarro 100 ou de eletrico mais uma curta caminhada, por isso guarde-o para uma tarde limpa e nao para uma cinzenta.",
    },
  ],

  itineraries: [
    {
      citySlug: "krakow",
      days: 2,
      summary:
        "Dois dias chegam para o nucleo de Cracovia se ficar central e comecar cedo, e cobrem a cidade velha, Wawel e Kazimierz sem parecer apressado. Todo o centro fica dentro do anel do Planty, por isso a Praca do Mercado (Rynek Glowny), Santa Maria, a Lonja dos Panos e Wawel ficam todos a 15 minutos a pe uns dos outros, e Kazimierz e um curto passeio a sul. Instale-se em Stare Miasto para que ambas as manhas comecem a pe. O plano que funciona e um dia para a cidade velha e a colina de Wawel, e um dia para Kazimierz, a Fabrica de Schindler e Podgorze do outro lado do rio. Reserve duas coisas online antes de chegar: as Salas de Estado de Wawel e um horario marcado na Fabrica de Schindler, ja que ambos esgotam em epoca. O que dois dias nao lhe dao sao as grandes excursoes reservadas com antecedencia: Auschwitz-Birkenau e a Mina de Sal de Wieliczka precisam cada uma de pelo menos meio dia, que e exatamente para o que serve um terceiro dia. Os precos sao baixos, por isso coma bem; um almoco de milk bar custa uns euros.",
      stayNeighborhoodSlug: "stare-miasto",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Cidade velha e colina de Wawel",
          morning: [
            {
              poiSlug: "rynek-glowny",
              text: "Comece na Praca do Mercado (Rynek Glowny) por volta das 8h30 enquanto a praca esta calma, percorra as bancas do piso terreo da Lonja dos Panos e depois desca ao museu subterraneo Rynek por baixo da praca num horario de manha reservado com antecedencia.",
              durationMin: 105,
            },
            {
              poiSlug: "st-marys-basilica",
              text: "Entre na Basilica de Santa Maria para ver o altar de madeira de Veit Stoss, a tempo do desvendar diario por volta das 11h50, e fique na praca a hora certa para ouvir ao vivo o toque de trompete hejnal interrompido a meio da nota.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "milk-bar-tomasza",
              text: "Almoce num milk bar como o Bar Mleczny Tomasza, com pierogi e sopa por uns euros. Pague primeiro na caixa, recolha ao balcao e leve dinheiro vivo.",
              durationMin: 45,
            },
            {
              poiSlug: "wawel-castle",
              text: "Desca ate a colina de Wawel e visite as Salas de Estado do Castelo Real com o bilhete reservado com antecedencia, e depois passe tempo gratuitamente no patio de arcadas e ao longo das muralhas sobre o Vistula.",
              durationMin: 120,
            },
            {
              poiSlug: "wawel-cathedral",
              text: "Mesmo ao lado, visite a Catedral de Wawel: a nave e gratuita, e um bilhete combinado da casa em frente cobre os tumulos reais e a subida ao Sino Sigismundo para uma vista sobre o rio.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "barbican-florian-gate",
              text: "Volte para norte, subindo a Rua Florianska e saindo pela Porta de Sao Floriano ate a Barbaca, a classica aproximacao medieval ao contrario, com os pintores de muralha instalados pelo caminho.",
              durationMin: 45,
            },
            {
              text: "Jante na cidade velha fora da praca principal, numa rua lateral como a Slawkowska ou a volta da Plac Szczepanski, onde uma refeicao polaca completa com uma cerveja fica bem abaixo do preco da praca turistica.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Kazimierz, Fabrica de Schindler e Podgorze",
          morning: [
            {
              poiSlug: "kazimierz-quarter",
              text: "Desca cedo ate Kazimierz e faca o bairro judeu antes das multidoes: as sinagogas, o cemiterio Remuh e a Rua Szeroka, tudo calmo de manha.",
              durationMin: 120,
            },
            {
              text: "Apanhe uma zapiekanka redonda na rotunda Okraglak na Plac Nowy para um almoco de rua barato, e depois desca ate a ponte pedonal do rio em direcao a Podgorze.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "schindlers-factory",
              text: "Passe para Podgorze para a sua entrada com hora marcada, reservada com antecedencia para o primeiro horario, na Fabrica de Schindler, um museu da Cracovia ocupada durante a guerra dentro da verdadeira fabrica de esmaltados de Oskar Schindler. Conte com duas horas completas.",
              durationMin: 120,
            },
            {
              poiSlug: "ghetto-heroes-square",
              text: "A poucos minutos, pare na Praca dos Herois do Gueto com as suas 70 cadeiras de bronze vazias, e entre no pequeno museu da Farmacia da Aguia na sua berma para a historia do gueto.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "planty-park",
              text: "Volte em direcao ao centro ao longo do rio e corte pelo anel do Planty a medida que a luz cai, o cinturao verde plano na linha das antigas muralhas da cidade.",
              durationMin: 30,
            },
            {
              text: "Termine com jantar e copos de volta a Kazimierz a volta da Plac Nowy, a melhor cena de bares e patios da cidade, mais movimentada e divertida depois de escurecer.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "krakow",
      days: 3,
      summary:
        "Tres dias sao a duracao certa para Cracovia: dois dias tratam da compacta cidade velha, de Wawel e de Kazimierz a um ritmo humano, e o terceiro dia e feito para uma grande saida da cidade. Esse terceiro dia e mesmo a razao para acrescentar uma noite, porque ambas as grandes excursoes exigem reserva antecipada e tempo. Auschwitz-Birkenau e gratuito mas precisa de reserva com hora marcada, muitas vezes semanas antes, fica a 1,5 horas de carro por sentido e leva quase um dia; a Mina de Sal de Wieliczka e so com guia, mais perto, e preenche um bom meio dia. Escolha uma para o dia tres e reserve-a antes de tudo o resto. Fique em Kazimierz nesta viagem: custa menos do que a cidade velha, coloca a melhor comida e os melhores bares a porta, e fica a distancia a pe tanto da praca como da Fabrica de Schindler. O molde e cidade velha e Wawel no dia um, Kazimierz e Podgorze no dia dois, e a sua excursao escolhida no dia tres. Reserve online com antecedencia as salas de Wawel, a Fabrica de Schindler e a sua excursao de um dia.",
      stayNeighborhoodSlug: "kazimierz",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Cidade velha e colina de Wawel",
          morning: [
            {
              poiSlug: "rynek-glowny",
              text: "A partir de Kazimierz, suba ate a cidade velha e comece na Praca do Mercado (Rynek Glowny) pelas 8h30 para a praca calma e a Lonja dos Panos, e depois entre no museu subterraneo Rynek num horario de manha reservado.",
              durationMin: 105,
            },
            {
              poiSlug: "st-marys-basilica",
              text: "Visite a Basilica de Santa Maria para o altar de Veit Stoss por volta do desvendar das 11h50, e cronometre o seu minuto na praca para o toque de trompete hejnal da torre a hora certa.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "milk-bar-tomasza",
              text: "Almoce num milk bar com pierogi, escalope e sopa por uns euros, pedindo na caixa e recolhendo ao balcao com dinheiro vivo.",
              durationMin: 45,
            },
            {
              poiSlug: "wawel-castle",
              text: "Va ate a colina de Wawel e visite as Salas de Estado do Castelo Real com o bilhete com hora marcada reservado com antecedencia, e depois demore-se gratuitamente no patio e nas muralhas a beira-rio.",
              durationMin: 120,
            },
            {
              poiSlug: "wawel-cathedral",
              text: "Termine na colina na Catedral de Wawel, com a nave gratuita e um bilhete combinado para os tumulos reais e a subida ao Sino Sigismundo sobre o Vistula.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "collegium-maius",
              text: "De volta a cidade velha, entre no patio gotico gratuito do Collegium Maius, o edificio mais antigo da Universidade Jagiellonian onde Copernico estudou, e apanhe a badalada do relogio astronomico se o horario coincidir.",
              durationMin: 45,
            },
            {
              text: "Desca de volta a Kazimierz para jantar a volta da Plac Nowy, onde os restaurantes de patio e os bares ficam bem abaixo dos precos da praca da cidade velha.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Kazimierz, Fabrica de Schindler e Podgorze",
          morning: [
            {
              poiSlug: "kazimierz-quarter",
              text: "Esta baseado aqui, por isso comece cedo a pe: as sinagogas de Kazimierz, o cemiterio Remuh e a Rua Szeroka estao quase vazios de manha antes de os grupos organizados chegarem.",
              durationMin: 120,
            },
            {
              text: "Apanhe uma zapiekanka barata na rotunda Okraglak na Plac Nowy, e depois atravesse a ponte pedonal sobre o Vistula ate Podgorze.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "schindlers-factory",
              text: "Entre na Fabrica de Schindler com o seu bilhete com hora marcada reservado com antecedencia para o museu imersivo da Cracovia ocupada durante a guerra; apanhe o horario mais cedo possivel para vencer os congestionamentos sala a sala, e conte com duas horas.",
              durationMin: 120,
            },
            {
              poiSlug: "ghetto-heroes-square",
              text: "Va ate a Praca dos Herois do Gueto para o memorial das 70 cadeiras vazias e o museu da Farmacia da Aguia na sua berma, ambos a poucos minutos da fabrica.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "planty-park",
              text: "Volte pelo rio e faca um troco lento do anel do Planty ao anoitecer, o cinturao verde plano a volta da cidade velha na linha das muralhas demolidas.",
              durationMin: 30,
            },
            {
              text: "Jantar e copos em Kazimierz, percorrendo os patios e os bares de cave da Plac Nowy, a cena noturna mais animada da cidade.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Grande excursao de um dia: Auschwitz-Birkenau ou Mina de Sal de Wieliczka",
          morning: [
            {
              poiSlug: "auschwitz-birkenau",
              text: "Opcao A: parta cedo para o Memorial de Auschwitz-Birkenau, a cerca de 1,5 horas de carro para oeste, com a sua reserva com hora marcada feita com antecedencia; entre as 10h e as 15h so entra com um guia licenciado, e vera tanto Auschwitz I como Birkenau atraves do autocarro de ligacao.",
              durationMin: 240,
            },
            {
              poiSlug: "wieliczka-salt-mine",
              text: "Opcao B: siga para a Mina de Sal de Wieliczka mesmo a saida da cidade num Percurso Turistico guiado reservado com antecedencia, uma caminhada subterranea de duas horas com cerca de 380 degraus a descer no inicio e uns constantes 14C, por isso leve uma camada.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              text: "Opcao A: a visita a Auschwitz-Birkenau e a viagem preenchem quase todo o dia, por isso regresse a Cracovia a tarde e mantenha o resto do dia calmo e reflexivo.",
              durationMin: 180,
            },
            {
              text: "Opcao B: de volta de Wieliczka ao inicio da tarde, use o tempo livre para o que ficou por fazer, como o patio de Wawel, um troco do Planty ou as bancas da Lonja dos Panos.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "kosciuszko-mound",
              text: "Se for uma tarde limpa e tiver escolhido a viagem mais curta a Wieliczka, apanhe o autocarro 100 ate ao Monte Kosciuszko para o melhor panorama completo sobre Cracovia e, num bom dia, os distantes montes Tatra ao por do sol.",
              durationMin: 90,
            },
            {
              text: "Ultimo jantar de volta a Kazimierz ou a cidade velha; depois de um dia pesado, um restaurante de cave tranquilo com pierogi e uma cerveja polaca e a nota certa para terminar.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
  ],
};

export default krakowPt;
