import type { CityData } from "../types";

const viennaPt: CityData = {
  city: {
    slug: "vienna",
    name: "Viena",
    country: "Áustria",
    countrySlug: "austria",
    lat: 48.2082,
    lng: 16.3738,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "VIE",
    airportToCenter:
      "O comboio S-Bahn S7 liga o aeroporto a Wien Mitte em cerca de 25 minutos por 4,30 EUR, que é a opção mais barata e sensata. O City Airport Train (CAT) faz o mesmo percurso sem paragens em 16 minutos, mas custa cerca de 14,90 EUR por trajeto, por isso a maioria dos visitantes opta pelo S7.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10, 12],
    avoidMonths: [1],
    monthlyNotes: {
      1: "Frio e cinzento, com máximas à volta de 3C e os mercados de Natal já desmontados, por isso é o mês mais calmo e mais barato. É também o coração da época dos bailes: dezenas de bailes formais decorrem ao longo de janeiro, e a procura por hotéis dispara apenas nessas noites específicas.",
      2: "Ainda perto do zero, mas a época dos bailes de Viena atinge o auge, culminando no Baile da Ópera na Ópera Estatal no final de fevereiro, a noite mais famosa do calendário social. Longe dos bailes, a cidade está tranquila e os quartos continuam baratos; leve roupa para mínimas abaixo de zero.",
      3: "As máximas sobem para os 11C e os jardins dos palácios começam a reabrir para a temporada. As multidões ainda são reduzidas e os preços situam-se abaixo do pico da primavera, o que faz desta uma janela inteligente de época baixa antes de chegar a procura da Páscoa.",
      4: "Primavera propriamente dita, à volta de 15C, com os jardins de Schonbrunn e o Prater em flor e mercados de Páscoa na Freyung e em Schonbrunn. Os fins de semana ficam concorridos por altura da Páscoa, por isso reserve com antecedência os bilhetes com hora marcada para o palácio.",
      5: "Um dos melhores meses, com cerca de 20C, e o festival de artes Wiener Festwochen abre em meados de maio e prolonga-se por junho com teatro, música e instalações por toda a cidade. Reserve alojamento cedo; os fins de semana de maio atingem os máximos da época intermédia.",
      6: "Quente, à volta de 24C, com longas horas de luz, o fim do Wiener Festwochen e concertos ao ar livre, incluindo o Concerto Noturno de Verão gratuito da Filarmónica de Viena nos jardins de Schonbrunn. As cervejarias ao ar livre e a ilha do Danúbio enchem-se; as multidões crescem mas ainda ficam aquém do pleno verão.",
      7: "Auge do calor de verão, perto de 26C, o mês mais movimentado de turismo, e a Ópera Estatal de Viena fecha para a pausa de verão, por isso confirme a programação de verão se a ópera for a sua razão para visitar. O Festival de Cinema da Rathausplatz instala-se em frente à câmara municipal, com sessões de cinema gratuitas e bancas de comida durante todo o mês.",
      8: "O mesmo calor e as mesmas multidões de julho, com trovoadas ocasionais ao fim da tarde e muitos habitantes locais de férias. O Festival de Cinema da Rathausplatz continua; a ilha do Danúbio e as zonas balneares do Alte Donau são os melhores sítios para escapar ao calor.",
      9: "Máximas à volta de 21C, multidões a rarear depois da primeira semana, e o arranque da temporada cultural com a reabertura da ópera e das salas de concerto. Os preços aliviam e o tempo mantém-se fiável, o que faz deste o mês inteligente em alternativa ao verão.",
      10: "Dias frescos de 14C e cores de outono intensas no Prater e nos parques dos palácios. O número de turistas cai visivelmente a partir de meados do mês e as tarifas dos hotéis acompanham; o Dia Nacional, a 26 de outubro, traz entrada gratuita nos museus e desfiles militares na Heldenplatz.",
      11: "Cinzento e frio, com máximas à volta de 7C, o período mais calmo do ano até à abertura dos mercados de Natal na segunda metade do mês. O final de novembro é um bom ponto de equilíbrio: o ambiente do mercado da Rathausplatz sem a densidade dos fins de semana de dezembro.",
      12: "Os mercados de Natal decorrem de meados de novembro até 26 de dezembro, o maior na Rathausplatz com centenas de bancas, além do Belvedere, Schonbrunn, Spittelberg e Am Hof. Conte com mínimas abaixo de zero, Punsch quente por todo o lado, muita gente ao fim de semana e preços de hotel em dezembro bem acima da norma de inverno.",
    },
    climate: {
      1: { highC: 3, lowC: -2, rainyDays: 8 },
      2: { highC: 5, lowC: -1, rainyDays: 7 },
      3: { highC: 11, lowC: 2, rainyDays: 8 },
      4: { highC: 15, lowC: 6, rainyDays: 8 },
      5: { highC: 20, lowC: 10, rainyDays: 9 },
      6: { highC: 24, lowC: 14, rainyDays: 10 },
      7: { highC: 26, lowC: 16, rainyDays: 9 },
      8: { highC: 26, lowC: 15, rainyDays: 9 },
      9: { highC: 21, lowC: 11, rainyDays: 6 },
      10: { highC: 14, lowC: 7, rainyDays: 7 },
      11: { highC: 7, lowC: 3, rainyDays: 8 },
      12: { highC: 4, lowC: -1, rainyDays: 8 },
    },
    budgetLevel: "mid",
    budgetPerDay: { budget: 70, mid: 140, high: 280 },
    tagline: "Palácios imperiais, rituais de café e o ouro de Klimt.",
    heroIntro:
      "Viena reúne a corte dos Habsburgo, uma parede de museus de craveira mundial e uma cultura de café bem viva dentro de um centro percorrido por elétricos que se aprende num dia. Os pontos imperiais ficam ligeiramente à parte, por isso o truque está em agrupar os palácios num dia e o anel do centro histórico noutro. Três dias cobrem o Hofburg, Schonbrunn, o Belvedere e o bairro dos museus sem pressas, e ainda sobra uma noite para uma ópera de lugar em pé e um café sem hora.",
    accent: { from: "#A83E5B", to: "#D9A441", ink: "#5E2438" },
    neighborhoodSlugs: [
      "innere-stadt",
      "leopoldstadt",
      "neubau",
      "mariahilf",
      "landstrasse",
    ],
    nearbyCitySlugs: ["prague", "budapest"],
  },

  neighborhoods: [
    {
      slug: "innere-stadt",
      citySlug: "vienna",
      name: "Innere Stadt (Cidade Velha)",
      lat: 48.2085,
      lng: 16.3721,
      bestFor: ["first-time", "romantic"],
      vibe: "O histórico primeiro distrito dentro da Ringstrasse, construído em torno da Catedral de Santo Estêvão e do palácio Hofburg. É o núcleo imperial, feito de grandes avenidas, pátios arcados e os clássicos cafés, e tudo o que um visitante de primeira viagem procura está a quinze minutos a pé. Esvazia-se das multidões diurnas ao anoitecer e torna-se tranquilo e elegante.",
      pros: [
        "Catedral, Hofburg, Ópera Estatal e os principais museus, tudo a pé",
        "Todas as linhas de elétrico e metro convergem aqui, por isso as excursões começam com facilidade",
        "Zero deslocações necessárias numa viagem de 2 dias",
      ],
      cons: [
        "O distrito mais caro da cidade em hotéis e restauração",
        "Os restaurantes à volta da catedral e do Graben são armadilhas com preços de turista",
        "Vida noturna genuína limitada; fica calmo depois do jantar",
      ],
    },
    {
      slug: "leopoldstadt",
      citySlug: "vienna",
      name: "Leopoldstadt",
      lat: 48.2167,
      lng: 16.3925,
      bestFor: ["local", "family", "budget"],
      vibe: "O segundo distrito, do outro lado do Canal do Danúbio, alberga o parque Prater e uma mistura em rápida mudança da velha Viena judaica, mercearias turcas e balcânicas e uma jovem cena criativa. O Karmelitermarkt ancora um cenário de comida e cafés genuinamente local, e a extensão verde do Prater fica à porta. Está a uma paragem de metro do centro histórico, mas com preços bem abaixo dele.",
      pros: [
        "Parque Prater, a Riesenrad e longos caminhos junto ao canal para famílias",
        "Karmelitermarkt e Volkertmarkt para comida local a preços justos",
        "Ligações rápidas de metro U1 e U2, a uma paragem do centro",
      ],
      cons: [
        "Sem grandes atrações no distrito para além do Prater",
        "Alguns quarteirões perto das estações parecem sem graça e em transição",
        "Noites residenciais calmas, se procura vida noturna à porta",
      ],
    },
    {
      slug: "neubau",
      citySlug: "vienna",
      name: "Neubau",
      lat: 48.2011,
      lng: 16.3489,
      bestFor: ["local", "nightlife", "romantic"],
      vibe: "O sétimo distrito, atrás do MuseumsQuartier, é o coração do design e do comércio independente de Viena. As ruelas de calçada Biedermeier de Spittelberg guardam tabernas de vinho e boutiques, enquanto a Neubaugasse alinha uma longa fila de concept stores, torrefações de café e pequenos bares. Fica a pé dos grandes museus, mas parece o sítio onde os locais criativos realmente passam as noites.",
      pros: [
        "MuseumsQuartier e o Kunsthistorisches Museum a curta distância a pé",
        "As melhores lojas independentes, torrefações e petiscos da cidade",
        "Cena de bares e tabernas de vinho animada mas sem pretensões à noite",
      ],
      cons: [
        "Caminha ou apanha um elétrico curto até aos pontos imperiais do primeiro distrito",
        "Os quarteirões populares podem ser barulhentos nas noites de fim de semana",
        "Menos hotéis grandes; a oferta pende para apartamentos e boutiques",
      ],
    },
    {
      slug: "mariahilf",
      citySlug: "vienna",
      name: "Mariahilf",
      lat: 48.1969,
      lng: 16.3489,
      bestFor: ["budget", "local", "first-time"],
      vibe: "O sexto distrito, construído ao longo da Mariahilfer Strasse, a rua comercial mais movimentada da cidade, com o extenso Naschmarkt na sua ponta inferior. Equilibra praticidade e carácter: lojas de rua e hotéis de gama média fiáveis na parte de cima, bancas de comida e feira da ladra ao fim de semana junto ao mercado. O centro fica a quinze minutos a pé em linha reta ou a duas paragens de metro.",
      pros: [
        "Bancas de comida do Naschmarkt e a feira da ladra de sábado à porta",
        "A maior escolha de hotéis sólidos de gama média e económicos da cidade",
        "U3 direto e a Mariahilfer Strasse pedonal até ao centro",
      ],
      cons: [
        "A rua comercial principal fica cheia e sem charme nas horas de ponta",
        "Menos atmosférico do que Neubau, logo ali acima na encosta",
        "Os restaurantes do Naschmarkt são mais caros do que a fama das bancas de comida sugere",
      ],
    },
    {
      slug: "landstrasse",
      citySlug: "vienna",
      name: "Landstrasse",
      lat: 48.1969,
      lng: 16.3947,
      bestFor: ["first-time", "family", "budget"],
      vibe: "O terceiro distrito, a sudeste do anel, envolve o palácio Belvedere e os seus jardins formais. É um bairro residencial calmo e bem servido, com a Hundertwasserhaus, o Rochusmarkt e acesso fácil ao comboio do aeroporto a partir de Wien Mitte. Os quartos custam menos do que no primeiro distrito, enquanto o Belvedere e o anel ficam a distância de caminhada.",
      pros: [
        "Palácio Belvedere, jardins e O Beijo de Klimt a poucos minutos",
        "O interface de Wien Mitte significa a ligação mais rápida ao aeroporto da cidade",
        "Mais calmo e mais barato do que o centro, mas ainda suficientemente central para ir a pé",
      ],
      cons: [
        "Espalhado, por isso alguns hotéis ficam a uma caminhada real do ponto mais próximo",
        "Menos restaurantes de destaque do que Neubau ou Leopoldstadt",
        "Ao distrito falta um núcleo animado único para ancorar uma noite",
      ],
    },
  ],

  pois: [
    {
      slug: "schonbrunn-palace",
      citySlug: "vienna",
      name: "Palácio de Schonbrunn",
      lat: 48.1849,
      lng: 16.3122,
      kind: "sight",
      needsBooking: true,
      tip: "Compre um bilhete com hora marcada online, já que o palácio admite por horário e as horas do próprio dia esgotam a meio da manhã em época alta. Escolha a hora mais cedo, por volta das 8h30, ou as últimas duas horas do dia para fugir ao pico dos grupos organizados; os vastos jardins, a colina da Gloriette e o labirinto são gratuitos, por isso reserve o interior pago para o Grand Tour e passe o resto ao ar livre.",
    },
    {
      slug: "hofburg",
      citySlug: "vienna",
      name: "Palácio de Hofburg",
      lat: 48.2065,
      lng: 16.3657,
      kind: "sight",
      needsBooking: true,
      tip: "O bilhete único Sisi cobre aqui os Aposentos Imperiais, o Museu Sisi e a Coleção de Prata, além do Grand Tour de Schonbrunn, por isso compre-o de uma vez se planeia visitar os dois palácios e evite duas filas separadas. Entre nos Aposentos Imperiais logo à abertura das 9h; o audioguia está incluído, e os pátios, a Heldenplatz e as arcadas são de acesso livre a qualquer hora.",
    },
    {
      slug: "stephansdom",
      citySlug: "vienna",
      name: "Catedral de Santo Estêvão (Stephansdom)",
      lat: 48.2085,
      lng: 16.3731,
      kind: "sight",
      needsBooking: false,
      tip: "A zona traseira de pé é gratuita, mas a nave, a visita às catacumbas e as duas torres custam cada uma à parte, por isso decida antes de entrar. Os 343 degraus da torre sul dão a melhor subida e vista sobre a cidade; a torre norte tem elevador até ao sino Pummerin e filas mais curtas, e o padrão de telhas do telhado fica melhor fotografado do canto oposto da Stephansplatz.",
    },
    {
      slug: "belvedere",
      citySlug: "vienna",
      name: "Palácio Belvedere (O Beijo de Klimt)",
      lat: 48.1915,
      lng: 16.3809,
      kind: "museum",
      needsBooking: true,
      tip: "Reserve um bilhete com hora marcada para o Belvedere Superior e vá à abertura das 9h, porque a sala que guarda O Beijo de Klimt é o ponto mais concorrido de Viena ao fim da manhã. Veja O Beijo primeiro, antes de percorrer o resto da coleção, e salte o Belvedere Inferior a menos que uma exposição especial o atraia; os jardins formais entre os dois palácios são gratuitos.",
    },
    {
      slug: "kunsthistorisches-museum",
      citySlug: "vienna",
      name: "Kunsthistorisches Museum",
      lat: 48.2039,
      lng: 16.3616,
      kind: "museum",
      needsBooking: true,
      tip: "A sala de Bruegel, a maior coleção da sua obra em qualquer parte, é a razão para vir, por isso suba primeiro à galeria de pintura antes de chegarem os grupos organizados. Faça uma pausa para café e bolo sob o café com cúpula no primeiro andar, um dos cafés de museu mais grandiosos da Europa; o bilhete cobre também o Tesouro Imperial no Hofburg em dias distintos, se comprar o passe combinado.",
    },
    {
      slug: "state-opera",
      citySlug: "vienna",
      name: "Ópera Estatal de Viena",
      lat: 48.2033,
      lng: 16.3691,
      kind: "experience",
      needsBooking: true,
      tip: "Os bilhetes de lugar em pé custam de 13 a 18 EUR e são postos à venda cerca de 80 minutos antes do início pela porta lateral da Operngasse, por isso entre na fila pelo menos uma hora antes para um bom lugar junto à barra. Amarre o cachecol à barra para guardar o seu lugar e depois saia; se preferir sentar-se, reserve bilhetes online com semanas de antecedência, e note que a ópera fecha em julho e agosto.",
    },
    {
      slug: "naschmarkt",
      citySlug: "vienna",
      name: "Naschmarkt",
      lat: 48.1985,
      lng: 16.3639,
      kind: "food",
      needsBooking: false,
      tip: "Venha antes do meio-dia para percorrer as mercearias, os balcões de queijo e as bancas do Médio Oriente antes de os restaurantes tomarem conta e os preços subirem. A feira da ladra de sábado, na ponta da Kettenbruckengasse, decorre por volta das 6h30 até meio da tarde e é a verdadeira atração; o mercado fecha aos domingos, por isso planeie a visita para uma manhã de dia útil ou para um sábado.",
    },
    {
      slug: "prater-riesenrad",
      citySlug: "vienna",
      name: "Prater e Riesenrad",
      lat: 48.2166,
      lng: 16.3958,
      kind: "park",
      needsBooking: false,
      tip: "O parque em si e a sua longa avenida de castanheiros são gratuitos e abertos a qualquer hora; só a roda-gigante Riesenrad e as atrações da feira é que custam dinheiro. Ande na Riesenrad perto do pôr do sol para a melhor luz e a menor espera, ou dispense-a e percorra a Hauptallee a pé, e depois coma num restaurante de jardim como o Schweizerhaus, com Stelze e meio litro de cerveja.",
    },
    {
      slug: "cafe-central",
      citySlug: "vienna",
      name: "Cafe Central",
      lat: 48.2103,
      lng: 16.3656,
      kind: "food",
      needsBooking: false,
      tip: "A sala abobadada é espetacular, mas a fila à porta chega muitas vezes aos 30 minutos em hora de ponta; chegue à abertura das 8h ou depois das 15h para entrar diretamente. A etiqueta dos cafés significa que um Melange lhe garante a mesa durante horas sem pressa, por isso peça um café e uma fatia de Sachertorte e demore-se; para o mesmo ritual sem a fila, experimente o Cafe Sperl ou o Cafe Landtmann ali perto.",
    },
    {
      slug: "albertina",
      citySlug: "vienna",
      name: "Albertina",
      lat: 48.2043,
      lng: 16.3682,
      kind: "museum",
      needsBooking: true,
      tip: "Reserve online para saltar a fila dos bilhetes e comece pela coleção permanente de Monet a Picasso no piso superior, antes de a exposição temporária de destaque atrair as multidões. As salas de estado dos Habsburgo à entrada estão incluídas e são muitas vezes ignoradas; o terraço sobre a Ópera e a Albertinaplatz é de acesso livre e dá uma rara vista elevada do anel.",
    },
    {
      slug: "hundertwasserhaus",
      citySlug: "vienna",
      name: "Hundertwasserhaus",
      lat: 48.2071,
      lng: 16.3941,
      kind: "sight",
      needsBooking: false,
      tip: "É um edifício residencial, por isso vê a fachada ondulada e os telhados ajardinados apenas da rua, o que leva dez minutos. Fotografe-o do canto da Kegelgasse com a Lowengasse para o enquadramento completo, e depois atravesse para a galeria comercial gratuita Hundertwasser Village em frente; combine-o com o vizinho museu Kunst Haus Wien se quiser a versão interior paga.",
    },
    {
      slug: "museumsquartier",
      citySlug: "vienna",
      name: "MuseumsQuartier",
      lat: 48.2035,
      lng: 16.3585,
      kind: "experience",
      needsBooking: false,
      tip: "O pátio, com os seus espreguiçadeiros coloridos Enzi, é gratuito e aberto a toda a hora, um sítio de eleição para uma bebida entre visitas a museus; o Museu Leopold, aqui, guarda a maior coleção de Egon Schiele do mundo e precisa de bilhete à parte. Compre o bilhete combinado do MQ apenas se planeia visitar tanto o Leopold como o museu de arte moderna mumok no mesmo dia.",
    },
    {
      slug: "karlskirche",
      citySlug: "vienna",
      name: "Karlskirche",
      lat: 48.1985,
      lng: 16.3719,
      kind: "sight",
      needsBooking: false,
      tip: "O bilhete pago inclui um elevador panorâmico que sobe dentro da cúpula até quase tocar os frescos do teto, que é a razão para pagar a entrada em vez de apenas admirar a fachada barroca do espelho de água lá fora. Vá numa manhã de dia útil, quando o elevador não tem fila; há concertos das Quatro Estações de Vivaldi quase todas as noites, mas a visita diurna à cúpula é a melhor relação qualidade-preço.",
    },
    {
      slug: "spanish-riding-school",
      citySlug: "vienna",
      name: "Escola Espanhola de Equitação",
      lat: 48.2075,
      lng: 16.3665,
      kind: "experience",
      needsBooking: true,
      tip: "Os espetáculos completos dos garanhões Lipizzaner esgotam com semanas de antecedência e custam a partir de cerca de 25 EUR, mas as sessões de treino da manhã são muito mais baratas, à volta de 15 EUR, e deixam-no ver os mesmos cavalos a ensaiar sob a mesma sala barroca. Reserve o treino da manhã online, chegue à abertura das portas, e note que não há treino às segundas-feiras nem durante as férias de estábulo de verão.",
    },
  ],

  itineraries: [
    {
      citySlug: "vienna",
      days: 2,
      summary:
        "Dois dias chegam para os grandes pontos imperiais de Viena se ficar no centro e começar cedo, mas vai deixar o bairro dos museus e os distritos locais mal tocados. O centro é compacto dentro da Ringstrasse: a Catedral de Santo Estêvão, o Hofburg e a Ópera Estatal ficam a quinze minutos a pé, e os elétricos fecham o anel. Instale-se na Innere Stadt para que ambas as manhãs comecem a pé. A estrutura que funciona é um dia de cidade imperial e um dia de palácios: o primeiro dia para a catedral, o Hofburg e um café, o segundo dia até Schonbrunn de manhã e o Belvedere para O Beijo de Klimt à tarde. Reserve online os bilhetes com hora marcada de Schonbrunn e do Belvedere e o bilhete Sisi do Hofburg antes de chegar, porque as filas e as horas esgotadas são a única ameaça real a uma visita de 48 horas. O que sacrifica é o Kunsthistorisches Museum, o MuseumsQuartier e qualquer noite tranquila em Neubau, que é exatamente o que um terceiro dia compra. Coma junto à praça da catedral, não nela.",
      stayNeighborhoodSlug: "innere-stadt",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Centro imperial e o Hofburg",
          morning: [
            {
              poiSlug: "stephansdom",
              text: "Comece na Catedral de Santo Estêvão por volta das 8h30, enquanto a praça ainda está calma, percorra a nave traseira gratuita e depois suba os 343 degraus da torre sul para a vista do telhado de telhas sobre a cidade antes de aterrarem os primeiros grupos organizados.",
              durationMin: 75,
            },
            {
              poiSlug: "hofburg",
              text: "Caminhe dez minutos até ao Hofburg e entre nos Aposentos Imperiais e no Museu Sisi à abertura das 9h com o seu bilhete Sisi previamente reservado. O audioguia incluído leva-o pela corte dos Habsburgo em cerca de noventa minutos.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "cafe-central",
              text: "Almoço e café no Cafe Central, a poucos minutos a norte; chegue depois da azáfama do meio-dia, peça um prato pequeno e um Melange, e use a regra dos cafés de que um café garante a mesa o tempo que quiser.",
              durationMin: 90,
            },
            {
              poiSlug: "albertina",
              text: "Volte para trás, passando pelo Hofburg, até à Albertina para a coleção de Monet a Picasso e as salas de estado dos Habsburgo, e depois suba ao terraço gratuito sobre a Ópera para uma vista elevada do anel.",
              durationMin: 105,
            },
          ],
          evening: [
            {
              poiSlug: "state-opera",
              text: "Faça fila na porta lateral da Operngasse na Ópera Estatal cerca de uma hora antes do início para um bilhete de lugar em pé de 13 a 18 EUR. Amarre o cachecol à barra para guardar o lugar e depois assista a um ato do que estiver em cena nessa noite.",
              durationMin: 120,
            },
            {
              text: "Jantar num Beisl tradicional no primeiro distrito, fora das praças principais, algures como o Gmoakeller ou o bar do Zum Schwarzen Kameel, com Wiener Schnitzel e um copo de Gruner Veltliner sem o preço inflacionado da Stephansplatz.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Schonbrunn e o Belvedere",
          morning: [
            {
              poiSlug: "schonbrunn-palace",
              text: "Apanhe o metro U4 até Schonbrunn e use a sua hora marcada das 8h30 para o Grand Tour do interior do palácio antes de chegarem os grupos de autocarro. Depois suba à colina gratuita da Gloriette para a vista clássica de volta sobre o palácio.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "belvedere",
              text: "Metro e elétrico até ao Belvedere Superior para o seu bilhete com hora marcada do início da tarde e vá direto a O Beijo de Klimt antes de a sala encher, e depois percorra de volta o resto da coleção.",
              durationMin: 120,
            },
            {
              text: "Desça pelos jardins formais gratuitos entre o Belvedere Superior e o Inferior, a melhor vista sem bilhete desta parte da cidade, e siga em direção ao anel para o regresso a pé ao hotel.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "karlskirche",
              text: "Pare na Karlskirche no caminho de volta e pague o elevador da cúpula que sobe até aos frescos do teto; ao início da noite de um dia útil costuma não haver fila para a plataforma panorâmica.",
              durationMin: 60,
            },
            {
              text: "Termine com um jantar perto da ponta do Naschmarkt no sexto distrito, e depois uma última volta iluminada pela Ópera e pelos portões do Hofburg, que ficam no seu melhor vazios depois de escurecer.",
              durationMin: 105,
            },
          ],
        },
      ],
    },
    {
      citySlug: "vienna",
      days: 3,
      summary:
        "Três dias são a medida certa para Viena: o suficiente para os palácios, a catedral e os grandes museus a um ritmo humano, mais uma noite que pertence à cidade e não à lista de tarefas. Dois dias obrigam-no a fazer Schonbrunn e o Belvedere a correr, um a seguir ao outro; o terceiro dia acrescenta o Kunsthistorisches Museum, o MuseumsQuartier e tempo para se sentar num café sem olhar para o relógio. Fique em Neubau, atrás do bairro dos museus. Custa menos do que o primeiro distrito, e as suas torrefações, tabernas de vinho e lojas independentes são onde a cidade realmente passa as noites, a curta distância a pé de todos os grandes pontos. A forma do plano: primeiro dia para o anel do centro histórico e o Hofburg, segundo dia para Schonbrunn e o Belvedere, terceiro dia para o bairro dos museus e uma tarde local sem pressas. Reserve três coisas online antes de chegar: a hora marcada de Schonbrunn, a hora marcada do Belvedere e o bilhete Sisi do Hofburg. Todo o resto em Viena recompensa quem chega cedo em vez de quem paga mais.",
      stayNeighborhoodSlug: "neubau",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Anel do centro histórico e o Hofburg",
          morning: [
            {
              poiSlug: "stephansdom",
              text: "De Neubau, caminhe ou apanhe o U3 até à Stephansplatz e chegue à Catedral de Santo Estêvão antes das 9h; faça a nave gratuita e a subida à torre sul enquanto a praça ainda está vazia.",
              durationMin: 75,
            },
            {
              poiSlug: "hofburg",
              text: "Percorra o Graben e a Kohlmarkt até ao Hofburg e entre nos Aposentos Imperiais e no Museu Sisi à abertura com o seu bilhete Sisi, deixando o audioguia incluído marcar o ritmo pelas salas dos Habsburgo.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "cafe-central",
              text: "Almoço de café no Cafe Central, mesmo a norte do Hofburg; vá depois de a fila do meio-dia rarear, peça um Melange e uma Sachertorte, e instale-se sem qualquer pressão para sair.",
              durationMin: 90,
            },
            {
              poiSlug: "albertina",
              text: "Siga para a Albertina previamente reservada, para as salas de Monet a Picasso e os aposentos de estado, terminando no terraço gratuito sobre a Ópera e a Albertinaplatz.",
              durationMin: 105,
            },
          ],
          evening: [
            {
              poiSlug: "state-opera",
              text: "Faça fila na porta da Operngasse da Ópera Estatal uma hora antes do início para um bilhete de lugar em pé, amarre o cachecol à barra e assista a um ato; todo o ritual fica bem abaixo dos 20 EUR.",
              durationMin: 120,
            },
            {
              text: "Volte a Neubau para jantar entre as ruelas de Spittelberg, onde as tabernas de vinho Biedermeier e os bistrôs de petiscos servem melhor e mais barato do que qualquer coisa na Stephansplatz.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Schonbrunn e o Belvedere",
          morning: [
            {
              poiSlug: "schonbrunn-palace",
              text: "Apanhe o U4 até Schonbrunn para uma hora das 8h30 no Grand Tour antes de chegarem os autocarros, e depois suba à Gloriette gratuita para a vista de postal sobre o palácio e os jardins.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "belvedere",
              text: "Atravesse a cidade até ao Belvedere Superior para um bilhete com hora marcada do início da tarde e vá direto a O Beijo de Klimt antes de a multidão crescer, e depois percorra o resto da coleção austríaca com calma.",
              durationMin: 120,
            },
            {
              poiSlug: "hundertwasserhaus",
              text: "Caminhe quinze minutos para leste até à Hundertwasserhaus para a fachada ondulada e os telhados ajardinados, mais bem enquadrados do canto da Kegelgasse, e depois espreite a galeria gratuita Hundertwasser Village em frente.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "karlskirche",
              text: "Vá à Karlskirche e apanhe o elevador da cúpula até aos frescos; ao início da noite de um dia útil costuma não haver fila para a plataforma panorâmica dentro do zimbório.",
              durationMin: 60,
            },
            {
              text: "Jantar à volta do Naschmarkt ou na parte baixa de Mariahilf, e depois um último copo de volta a Neubau; os pequenos bares do distrito mantêm-se animados até mais tarde do que as ruas tranquilas do primeiro distrito.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Bairro dos museus e uma tarde local",
          morning: [
            {
              poiSlug: "kunsthistorisches-museum",
              text: "Esteja no Kunsthistorisches Museum à abertura e suba direto à sala de Bruegel, a maior de sempre, antes de chegarem os grupos, e depois faça uma pausa para café sob o grandioso café com cúpula no primeiro andar.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "museumsquartier",
              text: "Atravesse para o pátio do MuseumsQuartier para uma bebida nos espreguiçadeiros coloridos Enzi, e depois escolha um museu lá dentro: o Leopold para a maior coleção de Schiele do mundo, ou o mumok para arte moderna.",
              durationMin: 150,
            },
            {
              poiSlug: "naschmarkt",
              text: "Desça até ao Naschmarkt para um petisco tardio pelas mercearias e bancas de comida; uma tarde de dia útil é mais calma do que a azáfama da feira da ladra de sábado, ainda que os lugares para sentar sejam mais caros do que parecem.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              text: "Passe a hora dourada na Neubaugasse e nas ruelas de Spittelberg, a espreitar torrefações e lojas de design enquanto o distrito desperta para a noite.",
              durationMin: 60,
            },
            {
              text: "Último jantar num Beisl de Neubau ou bar de vinhos naturais, o contraponto vienense moderno aos cafés imperiais, com schnitzel ou petiscos sazonais e uma garrafa de branco austríaco.",
              durationMin: 105,
            },
          ],
        },
      ],
    },
    {
      citySlug: "vienna",
      days: 4,
      summary:
        "Quatro dias são mais do que suficientes para os pontos de Viena, e é esse o ponto: o quarto dia converte uma corrida a monumentos numa viagem de verdade. Os dias um a três cobrem o anel do centro histórico, o Hofburg, Schonbrunn, o Belvedere e os grandes museus a um ritmo descontraído; o quarto dia é um dia lento do outro lado do Canal do Danúbio, em Leopoldstadt, construído em torno do Prater, dos mercados locais e do longo ritual dos cafés que o ritmo imperial nunca permite. Com tanto tempo, fique em Leopoldstadt: está a uma paragem de metro do centro histórico, é mais barato por quartos equivalentes, e os cafés do Karmelitermarkt e o verde do Prater são a razão pela qual o quarto dia existe. A lógica do dia imperial mantém-se: guarde Schonbrunn e o Belvedere para o seu próprio dia, mantenha o bairro dos museus junto, e não ande de um lado para o outro do anel. Reserve com antecedência a hora de Schonbrunn, a hora do Belvedere e o bilhete Sisi do Hofburg, e acrescente uma sessão de treino matinal na Escola Espanhola de Equitação se quiser ver os Lipizzaner em conta. Se estivesse a escolher entre três e quatro dias, o quarto é o que vai recordar.",
      stayNeighborhoodSlug: "leopoldstadt",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Anel do centro histórico e o Hofburg",
          morning: [
            {
              poiSlug: "stephansdom",
              text: "Apanhe o U1 uma paragem de Leopoldstadt até à Stephansplatz e chegue à Catedral de Santo Estêvão pelas 8h30; faça a nave gratuita e a subida à torre sul antes de a praça encher.",
              durationMin: 75,
            },
            {
              poiSlug: "hofburg",
              text: "Percorra o Graben até ao Hofburg e entre nos Aposentos Imperiais e no Museu Sisi à abertura com o seu bilhete Sisi, deixando o audioguia incluído marcar o ritmo pelas salas dos Habsburgo.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "cafe-central",
              text: "Almoço de café no Cafe Central; chegue depois da fila do meio-dia, peça um Melange, e use a regra de que um café garante a mesa para abrandar o dia.",
              durationMin: 90,
            },
            {
              poiSlug: "albertina",
              text: "Visite a Albertina para a coleção de Monet a Picasso e as salas de estado, terminando no terraço gratuito sobre a Ópera para a vista elevada do anel.",
              durationMin: 105,
            },
          ],
          evening: [
            {
              poiSlug: "state-opera",
              text: "Faça fila na porta da Operngasse da Ópera Estatal uma hora antes do início para um bilhete de lugar em pé abaixo dos 20 EUR, guarde o seu lugar na barra com um cachecol e assista a um ato.",
              durationMin: 120,
            },
            {
              text: "Apanhe o U1 de volta pelo canal para jantar num Beisl de Leopoldstadt perto do Karmelitermarkt, onde as cozinhas locais servem schnitzel e vinho austríaco a preços de bairro.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Schonbrunn e o Belvedere",
          morning: [
            {
              poiSlug: "schonbrunn-palace",
              text: "Vá até Schonbrunn no U4 para uma hora das 8h30 no Grand Tour antes dos autocarros, e depois suba à colina gratuita da Gloriette para a vista clássica sobre o palácio e o seu parterre.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "belvedere",
              text: "Atravesse até ao Belvedere Superior para um bilhete com hora marcada do início da tarde e vá direto a O Beijo de Klimt antes de a sala entupir, e depois percorra o resto da coleção austríaca devagar.",
              durationMin: 120,
            },
            {
              text: "Percorra os jardins formais gratuitos até ao Belvedere Inferior e em direção ao anel, a melhor vista sem bilhete deste quarteirão, com o horizonte da cidade emoldurado por trás do parterre.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "karlskirche",
              text: "Pare na Karlskirche para o elevador da cúpula até aos frescos; ao início da noite de um dia útil costuma não haver fila para a plataforma panorâmica dentro do zimbório.",
              durationMin: 60,
            },
            {
              text: "Jantar à volta do Naschmarkt ou de Mariahilf, e depois uma caminhada lenta de volta pelo canal até Leopoldstadt à medida que as luzes do anel se acendem.",
              durationMin: 105,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Bairro dos museus e extras imperiais",
          morning: [
            {
              poiSlug: "spanish-riding-school",
              text: "Reserve uma sessão de treino matinal na Escola Espanhola de Equitação, cerca de 15 EUR contra os mais de 25 de um espetáculo completo, e veja os garanhões Lipizzaner ensaiar sob a sala barroca; não há treino às segundas-feiras.",
              durationMin: 90,
            },
            {
              poiSlug: "kunsthistorisches-museum",
              text: "Caminhe até ao Kunsthistorisches Museum e suba primeiro à sala de Bruegel, e depois faça uma pausa para café e bolo sob o café com cúpula do primeiro andar.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "museumsquartier",
              text: "Atravesse para o MuseumsQuartier para uma bebida nos espreguiçadeiros Enzi, e depois escolha um interior: o Museu Leopold para a maior coleção de Schiele ou o mumok para arte moderna.",
              durationMin: 150,
            },
            {
              poiSlug: "naschmarkt",
              text: "Abrande no Naschmarkt com um petisco tardio pelas bancas de comida; uma tarde de dia útil é a janela calma entre a azáfama do almoço e o fecho.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Hora dourada na Neubaugasse e pelas ruelas de Spittelberg, a espreitar torrefações e lojas de design antes do jantar.",
              durationMin: 60,
            },
            {
              text: "Jantar num bar de vinhos naturais de Neubau ou num Beisl para o lado vienense moderno da cidade, e depois o curto salto de metro de volta a Leopoldstadt.",
              durationMin: 105,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Prater, Leopoldstadt e o dia dos cafés",
          morning: [
            {
              text: "Comece devagar no Karmelitermarkt em Leopoldstadt, onde as bancas e os cafés locais fazem uma manhã descontraída, sobretudo o mercado de sábado; tome o pequeno-almoço num café de mercado em vez de num do primeiro distrito virado ao turista.",
              durationMin: 90,
            },
            {
              poiSlug: "prater-riesenrad",
              text: "Entre no Prater e desça a longa Hauptallee de castanheiros, ambos gratuitos e abertos a qualquer hora, e depois ande na roda-gigante Riesenrad para a vista sobre a cidade e o Danúbio.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Almoço num restaurante de jardim do Prater como o Schweizerhaus, com Stelze e meio litro de cerveja debaixo das árvores, a clássica refeição vienense de tempo quente.",
              durationMin: 105,
            },
            {
              poiSlug: "hundertwasserhaus",
              text: "Atravesse para sul até à Hundertwasserhaus para a fachada ondulada e os telhados ajardinados, enquadrados do canto da Kegelgasse, e uma espreitadela à galeria gratuita Hundertwasser Village em frente.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Volte a um grande café para o último longo momento sentado da viagem: Cafe Landtmann ou Cafe Sperl para um Melange e uma fatia de torta, sem pressa, como o ritual deve funcionar.",
              durationMin: 90,
            },
            {
              text: "Último jantar de volta em Leopoldstadt perto do canal, e depois uma caminhada final junto à água com o horizonte iluminado do primeiro distrito do outro lado.",
              durationMin: 105,
            },
          ],
        },
      ],
    },
  ],
};

export default viennaPt;
