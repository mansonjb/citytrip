import type { CityData } from "../types";

const berlinPt: CityData = {
  city: {
    slug: "berlin",
    name: "Berlim",
    country: "Alemanha",
    countrySlug: "germany",
    lat: 52.52,
    lng: 13.405,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "BER",
    airportToCenter:
      "A partir do BER Brandemburgo, o comboio FEX Airport Express liga à Hauptbahnhof em cerca de 30 min, ou as linhas de S-Bahn S9 e S45 chegam ao centro em 40-45 min. Qualquer uma delas precisa de um bilhete da zona ABC a cerca de 4,70 EUR, já que o aeroporto fica na zona C exterior. Um táxi até Mitte custa aproximadamente 45-60 EUR e leva 40 min sem trânsito.",
    centerWalkable: false,
    bestMonths: [5, 6, 7, 9],
    avoidMonths: [1],
    monthlyNotes: {
      1: "O mês mais frio e cinzento, com máximas perto dos 3C, muitas vezes abaixo de zero à noite, dias curtos e luz escassa. As multidões são mínimas e os hotéis estão no preço mais baixo, mas os mercados de Natal já fecharam no início de janeiro e há pouca atração sazonal para além da calmaria do pós-Ano-Novo.",
      2: "Ainda frio, com 4-5C e muitas vezes húmido, embora o festival de cinema internacional Berlinale, em meados de fevereiro, traga dez dias de estreias, passadeiras vermelhas e sessões públicas por toda a cidade. Reserve com antecedência se vier para o festival, caso contrário é um período tranquilo e barato para ver museus sem filas.",
      3: "As máximas sobem para perto dos 9C à medida que o inverno afrouxa, com dias mais longos mas tempo instável e ventoso. As multidões continuam poucas e os preços baixos, o que faz dele um mês com bom valor se levar roupa para frio e chuva e se concentrar nas atrações interiores.",
      4: "A primavera chega de forma irregular por volta dos 13C, com flor de cerejeira ao longo de troços do antigo Muro e as primeiras tardes quentes a atrair as pessoas para os parques. A Páscoa pode fazer subir os preços dos hotéis durante uns dias, mas as multidões ainda são moderadas e a luz melhora depressa.",
      5: "Um dos melhores meses, com 19-20C, noites longas, parques verdes e as cervejarias ao ar livre a reabrir em força. O Karneval der Kulturen enche Kreuzberg com um desfile de rua e bancas de comida no fim de semana de Pentecostes, por isso conte com uns dias animados e cheios por essa altura.",
      6: "Quente e animado, com 22-23C, os dias mais longos do ano e a época de banhos nos lagos a começar no Wannsee e no Müggelsee. As multidões aumentam e os bares no rooftop e as cervejarias ao ar livre entram no seu ritmo, mas os preços dos hotéis ainda estão abaixo dos máximos do pico de verão.",
      7: "Pleno verão, com 24-25C, quente e movimentado, com cinema ao ar livre, praias fluviais e vida noturna ao ar livre no auge. Este é o principal mês para a vida de bom tempo da cidade, por isso reserve alojamento cedo e conte com as cervejarias populares cheias nas noites de sol.",
      8: "Ainda quente, com 24C, mas por vezes abafado com trovoadas de verão, e muitos berlinenses tiram as suas próprias férias, por isso a cidade parece um pouco mais calma do que em julho. Continua a ser um mês forte para lagos, parques e longas noites de luz, com festivais a decorrer ao longo do calendário de verão.",
      9: "Quente no início, depois a abrandar para cerca de 19C, sem dúvida o melhor mês em geral: dias amenos, multidões de verão a diminuir e tempo de cervejaria ao ar livre que aguenta na primeira metade. A época cultural de outono recomeça, dando-lhe tanto a vida ao ar livre como as galerias e salas de concerto que reabrem.",
      10: "Mais fresco, com 13-14C, com o primeiro verdadeiro frio de outono e dias mais curtos, embora o Festival das Luzes, no início do mês, projete iluminações sobre os grandes monumentos depois de escurecer durante cerca de duas semanas. As multidões diminuem e os preços descem, o que faz dele uma boa escolha de época intermédia se se agasalhar.",
      11: "Cinzento, frio e muitas vezes chuvoso, com máximas perto dos 7C, o ponto baixo do ano em termos de tempo e luz do dia. A salvação vem mesmo no fim, quando os mercados de Natal abrem nos últimos dias do mês, por isso uma viagem em finais de novembro pode apanhar preços baixos e o primeiro glühwein.",
      12: "Frio, perto dos 4C, e escuro a meio da tarde, mas os mercados de Natal funcionam por toda a cidade de finais de novembro até pouco antes do Natal, com o destaque no Gendarmenmarkt (pequena taxa de entrada) e outros na Alexanderplatz e no Palácio de Charlottenburg. A Passagem de Ano encena uma enorme festa gratuita com fogo de artifício na Porta de Brandemburgo, por isso conte com multidões e preços mais altos nesse período.",
    },
    climate: {
      1: { highC: 3, lowC: -2, rainyDays: 10 },
      2: { highC: 4, lowC: -2, rainyDays: 8 },
      3: { highC: 9, lowC: 1, rainyDays: 8 },
      4: { highC: 13, lowC: 4, rainyDays: 8 },
      5: { highC: 19, lowC: 8, rainyDays: 9 },
      6: { highC: 22, lowC: 11, rainyDays: 9 },
      7: { highC: 24, lowC: 14, rainyDays: 9 },
      8: { highC: 24, lowC: 13, rainyDays: 8 },
      9: { highC: 19, lowC: 10, rainyDays: 7 },
      10: { highC: 13, lowC: 6, rainyDays: 8 },
      11: { highC: 7, lowC: 2, rainyDays: 10 },
      12: { highC: 4, lowC: -1, rainyDays: 11 },
    },
    budgetLevel: "mid",
    budgetPerDay: { budget: 65, mid: 130, high: 260 },
    tagline: "História do Muro, museus de nível mundial e a melhor vida noturna da Europa.",
    heroIntro:
      "Berlim é grande, plana e espalhada, por isso é uma cidade de U-Bahn e S-Bahn, não uma de andar a pé por todo o lado, e planeia-se por bairros. Três dias são o mínimo honesto para dividir o núcleo histórico de Mitte, a história do Muro e da Guerra Fria e um bairro moderno sem marcha forçada. Venha no final da primavera ou no início do outono, reserve o seu horário gratuito para a cúpula do Reichstag antes de voar e compre um bilhete diário ABC assim que aterrar.",
    accent: { from: "#3E4A6B", to: "#E0A43B", ink: "#232A42" },
    neighborhoodSlugs: [
      "mitte",
      "kreuzberg",
      "prenzlauer-berg",
      "friedrichshain",
      "charlottenburg",
    ],
    nearbyCitySlugs: ["prague"],
  },

  neighborhoods: [
    {
      slug: "mitte",
      citySlug: "berlin",
      name: "Mitte",
      lat: 52.5219,
      lng: 13.4016,
      bestFor: ["first-time", "family", "romantic"],
      vibe: "O centro histórico e geográfico, onde a Porta de Brandemburgo, a Ilha dos Museus, o Reichstag e a Unter den Linden se alinham a uma curta caminhada ou a uma paragem de elétrico. É a Berlim de postal e a base lógica para uma primeira e curta viagem construída em torno das grandes atrações. Polido e central, troca o lado local cru dos bairros do leste pela conveniência pura.",
      pros: [
        "Ande a pé ou faça uma curta viagem até à Porta de Brandemburgo, ao Reichstag e à Ilha dos Museus",
        "Excelente centro de transportes, com U-Bahn, S-Bahn e elétricos a cruzarem-se em várias estações",
        "Tudo o que um viajante de primeira vez quer ver concentra-se aqui, poupando viagens pela cidade",
      ],
      cons: [
        "A zona mais cara para hotéis e a mais movimentada com grupos de turistas durante o dia",
        "Partes junto às atrações parecem corporativas e ficam silenciosas depois do horário de escritório",
        "Menos do ambiente local vivido que encontra em Kreuzberg ou Neukölln",
      ],
    },
    {
      slug: "kreuzberg",
      citySlug: "berlin",
      name: "Kreuzberg",
      lat: 52.4986,
      lng: 13.4033,
      bestFor: ["nightlife", "local", "budget"],
      vibe: "O coração da Berlim alternativa e multicultural, repleto de mercados turcos, bares à beira do canal, arte urbana e algumas das melhores refeições baratas e noitadas da cidade. O troço à volta de Kottbusser Tor e do Landwehrkanal é desmazelado, enérgico e sem verniz, à maneira por que as pessoas vêm a Berlim. Barulhento e áspero, recompensa quem quer a coisa real em vez da versão arrumada.",
      pros: [
        "A concentração mais densa de bares, comida de rua e vida noturna da cidade",
        "Genuinamente multicultural, com o mercado turco e passeios à beira do canal",
        "Bom valor para comer e beber, do döner aos bares de vinho natural",
      ],
      cons: [
        "Áspero e barulhento, com arestas por limar à volta de Kottbusser Tor à noite",
        "Uma viagem de U-Bahn das atrações de Mitte, e não uma distância a pé",
        "As noites de fim de semana ficam agitadas, uma má escolha para quem tem sono leve",
      ],
    },
    {
      slug: "prenzlauer-berg",
      citySlug: "berlin",
      name: "Prenzlauer Berg",
      lat: 52.5403,
      lng: 13.4241,
      bestFor: ["family", "romantic", "local"],
      vibe: "Um bonito antigo bairro do leste, de prédios do século XIX restaurados, praças arborizadas e cultura de brunch de domingo, hoje o quarteirão mais aburguesado e acolhedor para famílias da cidade. A zona à volta da Kollwitzplatz e da Kastanienallee tem boutiques, cafés e a feira da ladra do Mauerpark à porta. Calmo e bonito, é a Berlim fácil e confortável em vez da irreverente.",
      pros: [
        "Ruas bonitas e seguras com cafés, sítios de brunch e lojas independentes",
        "A feira da ladra de domingo e o karaoke do Mauerpark ficam a uma curta caminhada",
        "Excelente para famílias e casais que querem uma base mais tranquila e mais verde",
      ],
      cons: [
        "Pouca vida noturna própria, o ambiente é calmo e residencial",
        "A algumas paragens de U-Bahn ou elétrico das atrações centrais de Mitte",
        "Aburguesado e mais caro do que os bairros mais ásperos do leste",
      ],
    },
    {
      slug: "friedrichshain",
      citySlug: "berlin",
      name: "Friedrichshain",
      lat: 52.5155,
      lng: 13.4542,
      bestFor: ["nightlife", "budget", "local"],
      vibe: "O reduto da vida de clubes da antiga Berlim Oriental, casa da East Side Gallery, dos templos de techno à volta do Spree e da faixa jovem e barata de bares ao longo da Simon-Dach-Straße. A grandiosa Karl-Marx-Allee da era socialista atravessa-o, toda avenidas monumentais e Plattenbau. Áspero, jovem e acordado toda a noite, é onde a lendária vida noturna de Berlim acontece de facto.",
      pros: [
        "A East Side Gallery e os maiores clubes ficam mesmo aqui",
        "Comida e bebida baratas entre uma multidão jovem e muito estudantil",
        "Ligações diretas de S-Bahn e U-Bahn atravessando o rio até ao centro",
      ],
      cons: [
        "Barulhento e caótico aos fins de semana, construído em torno de clubes que abrem toda a noite",
        "Menos charme à luz do dia do que os bairros do oeste ou do norte",
        "Uma viagem das atrações de Mitte, embora as ligações de transporte sejam boas",
      ],
    },
    {
      slug: "charlottenburg",
      citySlug: "berlin",
      name: "Charlottenburg",
      lat: 52.5058,
      lng: 13.3042,
      bestFor: ["family", "romantic", "first-time"],
      vibe: "O elegante coração da antiga Berlim Ocidental, construído em torno do bulevar comercial Kurfürstendamm, do barroco Palácio de Charlottenburg e de grandes prédios de apartamentos antigos. Parece mais calmo e mais estabelecido do que os bairros do leste, com grandes armazéns, cafés clássicos e o jardim zoológico por perto. Refinado e residencial, convém a viajantes que preferem o conforto e o espaço à aspereza.",
      pros: [
        "O Palácio de Charlottenburg, as compras na Ku'damm e o jardim zoológico ficam todos aqui",
        "Tranquilo, seguro e verde, uma base confortável para famílias e casais",
        "Transportes bem ligados no lado oeste, diretos ao Zoo e à Hauptbahnhof",
      ],
      cons: [
        "O mais afastado dos cinco do Muro e das atrações da Berlim Oriental",
        "Vida noturna mais tranquila e um ambiente mais polido e menos alternativo",
        "O ambiente de compras clássicas pode parecer sisudo ao lado do panorama do leste",
      ],
    },
  ],

  pois: [
    {
      slug: "brandenburg-gate",
      citySlug: "berlin",
      name: "Porta de Brandemburgo",
      lat: 52.5163,
      lng: 13.3777,
      kind: "sight",
      needsBooking: false,
      tip: "A porta é gratuita, está aberta e nunca fecha, por isso venha ao nascer do sol ou depois de escurecer para as colunas iluminadas sem o aperto dos grupos de turistas na Pariser Platz durante o dia. Ficava na terra de ninguém da cidade dividida, e a praça de hoje coloca-o a poucos passos do Reichstag e do Memorial do Holocausto, por isso encadeie os três num só percurso. Ignore as personagens fantasiadas que oferecem fotografias, esperam pagamento.",
    },
    {
      slug: "reichstag",
      citySlug: "berlin",
      name: "Reichstag e cúpula de vidro",
      lat: 52.5186,
      lng: 13.3762,
      kind: "sight",
      needsBooking: true,
      tip: "A cúpula de vidro é gratuita, mas tem de se registar online para um horário marcado com dias de antecedência, não há entrada sem marcação e os horários esgotam depressa na época alta. Leve o documento de identificação com foto que corresponde à sua reserva, a segurança é ao nível de aeroporto. Aponte para um horário ao anoitecer para apanhar a cidade à luz do dia e depois iluminada enquanto sobe pela rampa em espiral, e leve o audioguia gratuito que sincroniza com a vista.",
    },
    {
      slug: "east-side-gallery",
      citySlug: "berlin",
      name: "East Side Gallery",
      lat: 52.5051,
      lng: 13.4394,
      kind: "sight",
      needsBooking: false,
      tip: "Este troço de 1,3 km do Muro de Berlim sobrevivente, pintado com murais que incluem o beijo Brejnev-Honecker, é gratuito e ao ar livre 24 horas ao longo do Spree em Friedrichshain. Venha de manhã cedo para fotografar os painéis famosos antes das multidões e antes de as pessoas se colocarem à frente de cada um. Percorra-o do lado de Ostbahnhof em direção à Oberbaumbrücke, depois atravesse a ponte para Kreuzberg para almoçar.",
    },
    {
      slug: "museum-island",
      citySlug: "berlin",
      name: "Ilha dos Museus",
      lat: 52.5169,
      lng: 13.4017,
      kind: "museum",
      needsBooking: true,
      tip: "Compre o bilhete combinado Bereichskarte que cobre todos os museus da ilha por um só preço e marque uma entrada com horário online, já que o Neues Museum e o seu busto de Nefertiti precisam de marcação. Seja honesto com o seu plano: o Pergamon, o edifício principal, está fechado para uma grande obra de renovação até cerca de 2027, por isso não venha à espera do grande salão do altar. Escolha uma ou duas das casas abertas, um dia inteiro para todas é uma sobredose de museus.",
    },
    {
      slug: "holocaust-memorial",
      citySlug: "berlin",
      name: "Memorial aos Judeus Assassinados da Europa",
      lat: 52.5139,
      lng: 13.3789,
      kind: "sight",
      needsBooking: false,
      tip: "O campo de 2.711 estelas de betão é gratuito, aberto e sempre acessível, a uma curta caminhada a sul da Porta de Brandemburgo. Entre no meio, onde o chão desce e os blocos se erguem acima da sua cabeça, para sentir a desorientação que o desenho pretende, e mantenha o respeito, isto é um memorial, não um recreio. O Centro de Informação subterrâneo gratuito por baixo fecha em alguns dias e tem a sua própria fila de segurança, por isso confirme antes de ir.",
    },
    {
      slug: "checkpoint-charlie",
      citySlug: "berlin",
      name: "Checkpoint Charlie",
      lat: 52.5075,
      lng: 13.3904,
      kind: "sight",
      needsBooking: false,
      tip: "A guarita reconstruída e a famosa placa são gratuitas, mas hoje é puro teatro turístico, com atores pagos de uniforme aos quais não deve dar gorjeta por fotografias, por isso trate-o como uma paragem de cinco minutos. A verdadeira substância são os painéis gratuitos ao ar livre ao longo da rua e o próximo (pago) Mauermuseum se quiser o detalhe das histórias de fuga. Combine-o com a Topografia do Terror, a uma curta caminhada a oeste, para uma manhã de Guerra Fria muito mais forte.",
    },
    {
      slug: "fernsehturm",
      citySlug: "berlin",
      name: "Torre de Televisão Fernsehturm",
      lat: 52.5208,
      lng: 13.4094,
      kind: "viewpoint",
      needsBooking: true,
      tip: "Com 368 m, esta é a estrutura mais alta da Alemanha e a vista sobre toda a cidade plana é a melhor de Berlim, mas marque um bilhete com horário online para evitar uma fila que pode passar de uma hora na Alexanderplatz. Um horário de acesso rápido custa mais, mas poupa a espera num dia movimentado. Suba perto do pôr do sol para a cidade de dia e as luzes, e o restaurante rotativo um piso acima precisa da sua própria reserva.",
    },
    {
      slug: "berlin-cathedral",
      citySlug: "berlin",
      name: "Catedral de Berlim",
      lat: 52.5191,
      lng: 13.4009,
      kind: "sight",
      needsBooking: false,
      tip: "A grandiosa catedral protestante na Ilha dos Museus cobra cerca de 10 EUR de entrada, que inclui a subida de 270 degraus até ao passadiço exterior da cúpula, para uma vista de perto sobre a ilha e o Spree. Vá pela varanda da cúpula mais do que pelo interior, o panorama sobre os telhados é a verdadeira atração. Fecha aos visitantes durante os serviços religiosos, por isso confirme o horário se vier num domingo.",
    },
    {
      slug: "topography-of-terror",
      citySlug: "berlin",
      name: "Topografia do Terror",
      lat: 52.5075,
      lng: 13.3833,
      kind: "museum",
      needsBooking: false,
      tip: "Construído no local da antiga sede da Gestapo e das SS, este centro de documentação é gratuito e um dos relatos mais sóbrios e mais bem explicados do aparelho de terror nazi na cidade. Reserve pelo menos 90 minutos para a densa exposição interior, e leia os painéis ao ar livre que correm ao longo de um troço sobrevivente do Muro à frente. Fica a uma curta caminhada do Checkpoint Charlie, por isso faça os dois em conjunto.",
    },
    {
      slug: "tiergarten",
      citySlug: "berlin",
      name: "Parque Tiergarten",
      lat: 52.5145,
      lng: 13.3501,
      kind: "park",
      needsBooking: false,
      tip: "O enorme parque central de Berlim é gratuito e estende-se da Porta de Brandemburgo até ao Zoo, ideal para um passeio a pé ou de bicicleta alugada entre as atrações de Mitte e Charlottenburg. Suba à Coluna da Vitória (pequena taxa) no meio para uma vista pelas avenidas ladeadas de árvores, ou encontre a cervejaria ao ar livre no Café am Neuen See na berma sul nos meses quentes. Num domingo de verão vai ver os locais a grelhar em cada pedaço de relva.",
    },
    {
      slug: "mauerpark",
      citySlug: "berlin",
      name: "Feira da ladra e karaoke do Mauerpark",
      lat: 52.5439,
      lng: 13.4025,
      kind: "experience",
      needsBooking: false,
      tip: "Aos domingos, este parque, antiga faixa da morte, acolhe uma feira da ladra extensa e o lendário Bearpit Karaoke ao ar livre no anfiteatro de pedra a partir do início da tarde, ambos gratuitos. Venha do fim da manhã para percorrer as bancas, comer nas roulottes de comida, depois beba uma cerveja e veja estranhos a cantar a plenos pulmões para uma multidão de centenas. Funciona todo o ano, mas está no seu melhor num dia quente, por isso escolha bom tempo.",
    },
    {
      slug: "gendarmenmarkt",
      citySlug: "berlin",
      name: "Gendarmenmarkt",
      lat: 52.5138,
      lng: 13.3925,
      kind: "sight",
      needsBooking: false,
      tip: "Muitas vezes chamada a mais bela praça da cidade, este espaço simétrico enquadrado pelas catedrais alemã e francesa e pela Konzerthaus é gratuito para se ficar e fotografar, melhor na luz baixa do início da manhã ou do fim da tarde. Em dezembro acolhe um dos melhores mercados de Natal de Berlim, que cobra uma pequena taxa de entrada para manter as multidões geríveis. Fica a dois minutos a pé da estação de U-Bahn Französische Straße e perto dos cafés requintados do Gendarmenmarkt.",
    },
    {
      slug: "tempelhofer-feld",
      citySlug: "berlin",
      name: "Tempelhofer Feld",
      lat: 52.4732,
      lng: 13.4017,
      kind: "park",
      needsBooking: false,
      tip: "Este aeroporto desativado é hoje um vasto parque público gratuito onde pode andar a pé, de bicicleta ou de patins a direito pelas antigas pistas, uma experiência genuinamente berlinense sem equivalente noutro sítio. Alugue uma bicicleta e percorra toda a extensão de uma antiga pista, ou leve um piquenique e veja os praticantes de kitesurf nos dias de vento. Fecha ao anoitecer com portões que trancam, por isso confira o horário de encerramento sazonal afixado nas entradas antes de se instalar.",
    },
    {
      slug: "ddr-museum",
      citySlug: "berlin",
      name: "DDR Museum",
      lat: 52.5192,
      lng: 13.4029,
      kind: "museum",
      needsBooking: false,
      tip: "Este museu interativo da vida quotidiana na Alemanha Oriental comunista, no Spree em frente à catedral, é envolvente e prático, com um Trabant onde se pode sentar e um apartamento da RDA recriado. Fica apertado e lento a meio do dia porque tudo se destina a ser tocado e aberto, por isso chegue logo à abertura das 9h ou na última hora. Compre o bilhete online para evitar a pequena fila da bilheteira na margem do rio.",
    },
  ],

  itineraries: [
    {
      citySlug: "berlin",
      days: 2,
      summary:
        "Dois dias cobrem o essencial de Berlim, mas a cidade é enorme e espalhada, por isso 48 horas são uma correria e vai andar depressa entre bairros. Em dois dias pode fazer o núcleo histórico de Mitte no primeiro dia, a Porta de Brandemburgo, a cúpula do Reichstag, o Memorial do Holocausto, a Ilha dos Museus e o Gendarmenmarkt, depois dar o segundo dia à história do Muro e da Guerra Fria, o Checkpoint Charlie, a Topografia do Terror e a East Side Gallery, terminando com um jantar em Kreuzberg. O que tem de cortar: Charlottenburg, Prenzlauer Berg, o Tempelhofer Feld, os lagos e qualquer tempo lento de bairro, por isso isto é um circuito de destaques, não uma Berlim que se chega a conhecer. Convém a uma escapada de fim de semana ou a uma primeira amostra antes de combinar com Praga. As regras inegociáveis: registe-se online para o seu horário gratuito da cúpula do Reichstag antes de voar, e compre um bilhete diário ABC assim que aterrar, os controlos são frequentes e as multas pesadas. Fique em Mitte para que ambas as manhãs comecem perto das atrações. Um terceiro dia é a melhor melhoria possível, e Berlim pede-o mesmo.",
      stayNeighborhoodSlug: "mitte",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Mitte histórico: porta, cúpula, museus",
          morning: [
            {
              poiSlug: "brandenburg-gate",
              text: "Comece na Porta de Brandemburgo cedo, antes de os grupos de turistas encherem a Pariser Platz, para fotografias das colunas na luz da manhã. É gratuita e aberta, e tudo o que há de manhã fica a uma curta caminhada daqui.",
              durationMin: 30,
            },
            {
              poiSlug: "reichstag",
              text: "Ande dois minutos até ao Reichstag para o seu horário gratuito da cúpula reservado com antecedência, levando o documento de identificação que corresponde à sua reserva para a segurança ao nível de aeroporto. Suba em espiral pela rampa de vidro com o audioguia gratuito para a vista sobre o quarteirão governamental e a cidade.",
              durationMin: 75,
            },
            {
              poiSlug: "holocaust-memorial",
              text: "Corte para sul até ao Memorial aos Judeus Assassinados da Europa, o campo gratuito de estelas de betão a uma curta caminhada da porta. Entre no centro que desce, onde os blocos se erguem por cima da cabeça, e visite o Centro de Informação subterrâneo se estiver aberto.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              text: "Almoce na Unter den Linden ou perto, depois percorra o grande bulevar para leste em direção à ilha, passando pela ópera estatal e a Bebelplatz. Seja rápido, a tarde é pesada em museus.",
              durationMin: 75,
            },
            {
              poiSlug: "museum-island",
              text: "Passe a tarde na Ilha dos Museus com um Bereichskarte combinado, escolhendo uma ou duas casas já que o Pergamon está fechado para renovação até cerca de 2027. O Neues Museum e o seu busto de Nefertiti ou a Alte Nationalgalerie são as escolhas isoladas mais fortes.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "gendarmenmarkt",
              text: "Ande até ao Gendarmenmarkt na luz da tarde para a praça simétrica enquadrada pelas suas duas catedrais e a Konzerthaus. Fotografe-a, depois encontre jantar nas ruas próximas.",
              durationMin: 45,
            },
            {
              text: "Jante no centro de Mitte, reservando com antecedência para qualquer sítio com nome, e feche a noite com um copo à volta dos pátios do Hackescher Markt a uma curta caminhada a norte. É a sua única noitada perto das atrações.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "O Muro e a Berlim da Guerra Fria",
          morning: [
            {
              poiSlug: "topography-of-terror",
              text: "Comece na Topografia do Terror, no local da antiga sede da Gestapo, gratuita e aberta, reservando 90 minutos para a densa exposição. Leia os painéis ao ar livre ao longo do troço sobrevivente do Muro antes de sair.",
              durationMin: 90,
            },
            {
              poiSlug: "checkpoint-charlie",
              text: "Ande uns minutos até ao Checkpoint Charlie, tratando a guarita e a placa reconstruídas como uma paragem rápida para fotografia em vez de um destaque. Ignore os atores fantasiados pagos, e leia os painéis gratuitos ao ar livre na rua para a verdadeira história.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              text: "Apanhe o U-Bahn ou o S-Bahn para leste e almoce em Friedrichshain antes do passeio pelo Muro. É um bom momento para validar uma parte nova do seu bilhete diário, os controlos acontecem muitas vezes nestas linhas.",
              durationMin: 75,
            },
            {
              poiSlug: "east-side-gallery",
              text: "Percorra a East Side Gallery, o troço gratuito de 1,3 km de Muro pintado ao longo do Spree, do lado de Ostbahnhof em direção à Oberbaumbrücke. Fotografe os murais famosos, depois atravesse a ponte para Kreuzberg.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Passe a noite em Kreuzberg à volta de Kottbusser Tor e do Landwehrkanal, comendo bem e barato, do döner a um bar à beira do canal. Esta é a Berlim alternativa que as atrações de Mitte não lhe mostram.",
              durationMin: 150,
            },
          ],
        },
      ],
    },
    {
      citySlug: "berlin",
      days: 3,
      summary:
        "Sim, três dias são a duração certa para Berlim, e é o que recomendamos para uma primeira visita a uma cidade tão espalhada. Divide-se de forma limpa em três: o núcleo histórico de Mitte, a Porta de Brandemburgo, a cúpula do Reichstag, o Memorial do Holocausto, a Ilha dos Museus e o Gendarmenmarkt no primeiro dia; a história do Muro e da Guerra Fria, o Checkpoint Charlie, a Topografia do Terror e a East Side Gallery no segundo dia; e um terceiro dia para a cidade moderna vivida, Prenzlauer Berg, a feira de domingo do Mauerpark e o vasto Tempelhofer Feld. Fica com os monumentos, a história e um dia real de bairro em vez de uma correria pura de visitas. O que continua a ser cortado: Charlottenburg, o lado ocidental e os lagos, que é exatamente o que um quarto dia acrescenta. Convém a quem vem pela primeira vez, a casais e a quem segue depois para Praga. Fique em Prenzlauer Berg: é calmo, bonito e coloca-o à porta do Mauerpark, com saltos fáceis de elétrico e U-Bahn até Mitte. Registe o seu horário gratuito da cúpula do Reichstag e compre um bilhete diário ABC, os controlos são frequentes.",
      stayNeighborhoodSlug: "prenzlauer-berg",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Mitte histórico: porta, cúpula, museus",
          morning: [
            {
              poiSlug: "brandenburg-gate",
              text: "Comece na Porta de Brandemburgo cedo, para as colunas antes de a Pariser Platz encher de grupos de turistas. É gratuita e aberta, e ancora um percurso matinal das três atrações principais de Mitte.",
              durationMin: 30,
            },
            {
              poiSlug: "reichstag",
              text: "Ande até ao Reichstag para o seu horário gratuito da cúpula reservado com antecedência, com o documento de identificação que corresponde à sua reserva para a segurança. Suba em espiral pela rampa de vidro com o audioguia gratuito para a vista sobre a cidade e o quarteirão governamental.",
              durationMin: 75,
            },
            {
              poiSlug: "holocaust-memorial",
              text: "Siga para sul até ao gratuito Memorial aos Judeus Assassinados da Europa, a uma curta caminhada da porta. Entre no centro onde o chão desce e as estelas se erguem por cima da cabeça, depois veja o Centro de Informação subterrâneo se estiver aberto.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              text: "Almoce perto da Unter den Linden, depois percorra o bulevar para leste em direção à Ilha dos Museus, passando pela Bebelplatz e a ópera estatal. Um passeio descontraído, não uma marcha, já que os museus vêm a seguir.",
              durationMin: 90,
            },
            {
              poiSlug: "museum-island",
              text: "Dê a tarde à Ilha dos Museus com um Bereichskarte combinado, escolhendo uma ou duas casas já que o Pergamon está fechado para obras até cerca de 2027. O Neues Museum com Nefertiti ou a Alte Nationalgalerie são as melhores escolhas isoladas.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "berlin-cathedral",
              text: "Se tiver energia, suba os 270 degraus da Catedral de Berlim na ilha para a vista da varanda da cúpula sobre o Spree no fim da tarde. Caso contrário, fotografe a sua fachada a partir do Lustgarten e siga em frente.",
              durationMin: 45,
            },
            {
              poiSlug: "gendarmenmarkt",
              text: "Ande até ao Gendarmenmarkt, a mais bela praça da cidade enquadrada pelas suas duas catedrais, melhor na luz da tarde. Encontre jantar nas ruas em redor, reservando com antecedência para qualquer sítio bem avaliado.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "O Muro e a Berlim da Guerra Fria",
          morning: [
            {
              poiSlug: "topography-of-terror",
              text: "Comece na gratuita Topografia do Terror, no antigo local da Gestapo, reservando 90 minutos para a densa e bem explicada exposição. Leia os painéis ao ar livre ao longo do Muro sobrevivente à frente antes de seguir em frente.",
              durationMin: 90,
            },
            {
              poiSlug: "checkpoint-charlie",
              text: "Ande até ao Checkpoint Charlie ali perto, uma paragem rápida para fotografia na travessia reconstruída em vez de um destaque. Ignore os atores fantasiados pagos e leia os painéis gratuitos na rua para a substância.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "fernsehturm",
              text: "Apanhe o U-Bahn até à Alexanderplatz e suba à Fernsehturm num horário marcado reservado com antecedência para a melhor vista sobre a cidade plana, idealmente perto do pôr do sol. Almoce rápido na praça primeiro, ou depois se o seu horário for cedo.",
              durationMin: 90,
            },
            {
              poiSlug: "east-side-gallery",
              text: "Vá de comboio para leste até à East Side Gallery e percorra o troço gratuito de 1,3 km de Muro pintado ao longo do Spree, de Ostbahnhof em direção à Oberbaumbrücke. Fotografe os murais famosos, depois atravesse a ponte para Kreuzberg.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Passe a noite em Friedrichshain ou Kreuzberg, num dos lados do rio, comendo bem e barato e bebendo onde a multidão jovem bebe. Este é o lado da vida noturna de Berlim, por isso doseie-se se amanhã começa cedo.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Berlim moderna: Prenzlauer Berg, Mauerpark, Tempelhof",
          morning: [
            {
              text: "Comece devagar com um longo brunch em Prenzlauer Berg à volta da Kollwitzplatz ou da Kastanienallee, o ritual local de domingo. Vagueie pelas ruas de prédios restaurados e pelas lojas independentes pelo caminho.",
              durationMin: 90,
            },
            {
              poiSlug: "mauerpark",
              text: "Ande até ao Mauerpark para a extensa feira da ladra de domingo e, a partir do início da tarde, o gratuito Bearpit Karaoke ao ar livre no anfiteatro de pedra. Percorra as bancas, coma numa roulotte de comida, depois beba uma cerveja e veja a multidão do karaoke.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "ddr-museum",
              text: "Volte em direção ao centro para o interativo DDR Museum no Spree, sobre a vida quotidiana na Alemanha Oriental comunista, comprando online para evitar a fila. Vá pelo Trabant onde se senta e pelo apartamento da RDA recriado, e mantenha-o abaixo de uma hora se as multidões aumentarem.",
              durationMin: 75,
            },
            {
              poiSlug: "tempelhofer-feld",
              text: "Apanhe o U-Bahn para sul até ao Tempelhofer Feld, o gratuito antigo aeroporto, e alugue uma bicicleta para percorrer toda a extensão de uma pista. Leve um lanche e veja os praticantes de kitesurf, mas note que os portões trancam à hora de encerramento afixada ao anoitecer.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              text: "Regresse a Prenzlauer Berg para um jantar final descontraído perto da sua base, reservando uma mesa na Kollwitzplatz ou numa rua secundária. Termine com um copo tranquilo perto da cama, sem viagem pela cidade para planear.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "berlin",
      days: 4,
      summary:
        "Quatro dias são o ponto ideal para uma primeira visita a Berlim, transformando uma correria por uma cidade espalhada numas verdadeiras férias. Os dias um a três cobrem o essencial: o núcleo histórico de Mitte, a história do Muro e da Guerra Fria, e a cidade moderna de Prenzlauer Berg, Mauerpark e Tempelhofer Feld, cada um feito sem pressas. O quarto dia é a válvula de escape, e divide-se de duas formas: ou o elegante lado ocidental à volta do Palácio de Charlottenburg e da Ku'damm, ou uma meia jornada até aos palácios de Sanssouci em Potsdam ou o sóbrio memorial de Sachsenhausen, ambos a uma fácil viagem de S-Bahn ou regional a partir do centro. Esta duração convém a viajantes que odeiam a marcha forçada, a casais e a quem tem os voos a emoldurar a viagem de forma desajeitada. Para quatro dias recomendamos ficar em Kreuzberg: aceitou um ritmo mais lento, e os seus bares à beira do canal, a comida de rua e as noitadas fazem do regresso a casa a cada noite a melhor parte do dia. Para além de quatro dias, acrescente os lagos no verão ou um dia inteiro em Potsdam. Registe o seu horário gratuito da cúpula do Reichstag e compre um bilhete diário ABC assim que chegar.",
      stayNeighborhoodSlug: "kreuzberg",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Mitte histórico: porta, cúpula, museus",
          morning: [
            {
              poiSlug: "brandenburg-gate",
              text: "Comece na Porta de Brandemburgo cedo, para as colunas antes de as multidões encherem a Pariser Platz. Gratuita e aberta, ancora o percurso matinal dos grandes monumentos de Mitte.",
              durationMin: 30,
            },
            {
              poiSlug: "reichstag",
              text: "Ande até ao Reichstag para o seu horário gratuito da cúpula reservado com antecedência, levando o documento de identificação correspondente para a segurança. Suba em espiral pela rampa de vidro com o audioguia gratuito para a vista da cidade e do quarteirão governamental.",
              durationMin: 75,
            },
            {
              poiSlug: "holocaust-memorial",
              text: "Corte para sul até ao gratuito Memorial aos Judeus Assassinados da Europa, a uma curta caminhada. Entre no centro que desce onde as estelas se erguem por cima da cabeça, depois veja o Centro de Informação subterrâneo se estiver aberto.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              text: "Almoce perto da Unter den Linden, depois percorra o bulevar para leste em direção à Ilha dos Museus passando pela Bebelplatz. Um passeio descontraído, já que tem quatro dias e não precisa de se apressar.",
              durationMin: 90,
            },
            {
              poiSlug: "museum-island",
              text: "Passe a tarde na Ilha dos Museus com um Bereichskarte combinado, escolhendo uma ou duas casas já que o Pergamon está fechado até cerca de 2027. O Neues Museum com Nefertiti ou a Alte Nationalgalerie são as escolhas mais fortes.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "gendarmenmarkt",
              text: "Ande até ao Gendarmenmarkt, a mais bela praça da cidade na luz da tarde, enquadrada pelas suas duas catedrais. Encontre jantar nas ruas de Mitte em redor, reservando com antecedência para qualquer sítio bem avaliado.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "O Muro e a Berlim da Guerra Fria",
          morning: [
            {
              poiSlug: "topography-of-terror",
              text: "Comece na gratuita Topografia do Terror, no antigo local da Gestapo, reservando 90 minutos para a exposição. Leia os painéis ao ar livre ao longo do Muro sobrevivente antes de sair.",
              durationMin: 90,
            },
            {
              poiSlug: "checkpoint-charlie",
              text: "Ande até ao Checkpoint Charlie, uma paragem rápida para fotografia na travessia reconstruída. Ignore os atores fantasiados pagos e leia os painéis gratuitos na rua para a verdadeira história.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "fernsehturm",
              text: "Apanhe o U-Bahn até à Alexanderplatz e suba à Fernsehturm num horário reservado com antecedência para a melhor vista sobre a cidade plana. Almoce na praça à volta do seu horário.",
              durationMin: 90,
            },
            {
              poiSlug: "east-side-gallery",
              text: "Vá até à East Side Gallery e percorra o troço gratuito de 1,3 km de Muro pintado ao longo do Spree, de Ostbahnhof em direção à Oberbaumbrücke. Atravesse a ponte para Kreuzberg, onde está hospedado.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Passe a noite em casa, em Kreuzberg, à volta de Kottbusser Tor e do canal, comendo bem e barato e bebendo onde os locais bebem. Está aqui hospedado, por isso não há viagem de regresso para planear.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Berlim moderna: Prenzlauer Berg, Mauerpark, Tempelhof",
          morning: [
            {
              text: "Vá até Prenzlauer Berg para um longo brunch à volta da Kollwitzplatz, o ritual local de fim de semana, e vagueie pelas ruas de prédios restaurados. Um começo lento para um dia de bairro.",
              durationMin: 90,
            },
            {
              poiSlug: "mauerpark",
              text: "Ande até ao Mauerpark para a feira da ladra de domingo e, a partir do início da tarde, o gratuito Bearpit Karaoke ao ar livre no anfiteatro de pedra. Percorra as bancas, coma numa roulotte de comida, depois veja o karaoke com uma cerveja.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "tempelhofer-feld",
              text: "Apanhe o U-Bahn para sul até ao Tempelhofer Feld, o gratuito antigo aeroporto, e alugue uma bicicleta para percorrer toda a extensão de uma pista. Leve um piquenique, veja os praticantes de kitesurf e note que os portões trancam à hora afixada ao anoitecer.",
              durationMin: 120,
            },
            {
              poiSlug: "ddr-museum",
              text: "Se o tempo permitir no regresso, passe pelo interativo DDR Museum no Spree para o Trabant onde se senta e o apartamento da RDA recriado, comprando online para evitar a fila. Mantenha-o curto, uma hora chega.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Volte a Kreuzberg para jantar e beber, experimentando um bar de vinho natural ou um sítio ao longo do Landwehrkanal. Este é o elemento do bairro, por isso demore-se.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Berlim Ocidental ou um dia em Potsdam",
          morning: [
            {
              text: "Escolha a sua direção para o quarto dia. Para o lado ocidental, apanhe o U-Bahn até ao Palácio de Charlottenburg, a antiga residência real barroca com jardins formais, e reserve algumas horas para os salões de estado e os terrenos. Para uma excursão de um dia, em vez disso, apanhe o comboio regional até Potsdam e ao Parque de Sanssouci para os palácios rococó e as vinhas em socalcos.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              text: "Se ficou no oeste, passeie pelo bulevar comercial Kurfürstendamm e veja a torre em ruínas da Igreja Memorial Kaiser Wilhelm, depois tome café num café clássico de Charlottenburg. Se foi a Potsdam, percorra o Bairro Holandês e a cidade velha antes do regresso. Como alternativa mais pesada, passe o dia no memorial do campo de concentração de Sachsenhausen, a norte da cidade, uma sóbria viagem de S-Bahn e autocarro que precisa de uma tarde inteira.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              poiSlug: "tiergarten",
              text: "De volta ao centro, percorra parte do Tiergarten na hora dourada, ou encontre a sua cervejaria ao ar livre Café am Neuen See na berma sul nos meses quentes. Um final verde e fácil depois do dia fora.",
              durationMin: 75,
            },
            {
              text: "Reserve um jantar de despedida de novo em Kreuzberg, gastando um pouco mais na sua última refeição em Berlim num sítio que explorou antes. Termine com um último copo ao longo do canal, a uma curta caminhada da cama.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
  ],
};

export default berlinPt;
