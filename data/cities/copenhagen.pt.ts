import type { CityData } from "../types";

const copenhagenPt: CityData = {
  city: {
    slug: "copenhagen",
    name: "Copenhaga",
    country: "Dinamarca",
    countrySlug: "denmark",
    lat: 55.6761,
    lng: 12.5683,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "CPH",
    airportToCenter:
      "A linha de metro M2 vai do Aeroporto de Copenhaga (CPH) diretamente até ao centro, chegando a Kongens Nytorv, junto a Nyhavn, em cerca de 15 minutos por aproximadamente 4,50 EUR (36 DKK), de poucos em poucos minutos e durante a noite. Um comboio regional faz o mesmo trajeto até à Estação Central em cerca de 13 minutos, caso o seu hotel fique desse lado; ambos batem um táxi que custa 40 EUR ou mais.",
    centerWalkable: true,
    bestMonths: [5, 6, 7, 8],
    avoidMonths: [1],
    monthlyNotes: {
      1: "O mês mais escuro e frio, com máximas a rondar os 2C, a luz do dia a desaparecer a meio da tarde e os Jardins Tivoli fechados após o encerramento de Ano Novo nos primeiros dias do mês. Os preços atingem o mínimo do ano e as atrações estão vazias, por isso aposte nos museus interiores, nos cafés à luz das velas e no hygge dinamarquês em torno do qual os locais organizam toda a estação.",
      2: "Ainda frio e cinzento, a rondar os 3C, o mês completo mais tranquilo do ano tanto em multidões como em preços. Leve várias camadas de roupa e um casaco à prova de vento para o porto, não reserve nada com muita antecedência e encare esta como uma viagem de museus e cafés em vez de ar livre.",
      3: "As máximas aproximam-se dos 5C e a luz do dia regressa depressa, embora continue fresco e muitas vezes chuvoso. As multidões são escassas e os preços baixos; o verdadeiro marco é o final do mês, quando os Jardins Tivoli reabrem para a época da primavera por volta do início de abril e a disposição melhora.",
      4: "A primavera chega a rondar os 10C, com os Jardins Tivoli abertos de novo e as primeiras esplanadas ao sol. A Páscoa traz um feriado local curto em que algumas lojas fecham, mas as multidões ainda são moderadas e os preços ficam abaixo do verão, o que faz desta uma boa janela de época intermédia.",
      5: "Um dos melhores meses, com máximas perto dos 15C, longos fins de tarde com luz e tudo aberto. As multidões crescem mas ainda não atingiram o pico, a vida no porto recomeça e a cidade sente-se no seu momento mais otimista; reserve os restaurantes populares com antecedência e conte com preços a subir para a faixa do verão.",
      6: "Quente, a rondar os 19C, com os dias mais longos do ano, quando quase nunca escurece. O Distortion, a enorme festa de rua, toma conta de vários bairros ao longo de cinco dias no início de junho, atraindo grandes multidões e noites ruidosas; verifique as datas, porque isto tanto faz como estraga a sua viagem, consoante o que procura.",
      7: "Época alta, a rondar os 21C, cheia e cara, com o Festival de Jazz de Copenhaga a encher praças, pátios e clubes ao longo de dez dias no início de julho. As piscinas do porto estão abertas, o Tivoli funciona até tarde e os hotéis esgotam, por isso reserve quartos e quaisquer bilhetes de festival com muita antecedência.",
      8: "Ainda quente, a rondar os 21C, e movimentado, a última fase de verão pleno antes do regresso às aulas. Os banhos no porto, os serões tardios no Tivoli e as refeições ao ar livre estão no seu melhor; os preços mantêm-se altos no início do mês e aliviam à medida que este termina.",
      9: "Máximas a rondar os 17C, multidões a diminuir depois da primeira semana e o mais ameno dos meses de época intermédia. Esta é a escolha discreta e inteligente: as esplanadas ainda funcionam nos dias quentes, o Tivoli mantém-se aberto, os museus estão calmos e os preços descem do pico do verão.",
      10: "Mais fresco, a rondar os 12C, com mais chuva e verdadeira cor de outono nos parques. Os Jardins Tivoli fazem uma popular época de Halloween com exposições de abóboras ao longo do mês, uma boa razão para visitar; de resto, as multidões caem e os preços seguem-nas.",
      11: "Cinzento, chuvoso e frio, com máximas perto dos 7C e dias curtos, a última fase tranquila antes das festas. Os Jardins Tivoli reabrem em traje natalício por volta de meados do mês, com luzes, bancas e gløgg, e os mercados de Natal da cidade começam, animando tardes que de outra forma seriam escuras.",
      12: "Frio, a rondar os 4C, com os dias mais curtos do ano, mas o mês mais atmosférico em espaços interiores. A época natalícia do Tivoli, os mercados de Nyhavn e da Højbro Plads, o vinho quente e o hygge por todo o lado sustentam a disposição; reserve alojamento cedo para a semana do Natal e do Ano Novo, que enche.",
    },
    climate: {
      1: { highC: 2, lowC: -2, rainyDays: 11 },
      2: { highC: 3, lowC: -2, rainyDays: 9 },
      3: { highC: 5, lowC: 0, rainyDays: 9 },
      4: { highC: 10, lowC: 3, rainyDays: 8 },
      5: { highC: 15, lowC: 8, rainyDays: 8 },
      6: { highC: 19, lowC: 11, rainyDays: 8 },
      7: { highC: 21, lowC: 13, rainyDays: 9 },
      8: { highC: 21, lowC: 13, rainyDays: 10 },
      9: { highC: 17, lowC: 10, rainyDays: 9 },
      10: { highC: 12, lowC: 6, rainyDays: 11 },
      11: { highC: 7, lowC: 3, rainyDays: 12 },
      12: { highC: 4, lowC: 0, rainyDays: 11 },
    },
    budgetLevel: "high",
    budgetPerDay: { budget: 90, mid: 180, high: 350 },
    tagline: "Design, banhos no porto e pães de canela, tudo sobre duas rodas.",
    heroIntro:
      "Copenhaga reúne palácios reais, um porto em funcionamento onde se pode nadar e alguma da melhor gastronomia da Europa num centro compacto que se atravessa a pé. Foi feita a pensar primeiro nas bicicletas, por isso a jogada mais inteligente é alugar uma ou apanhar o metro sem condutor em vez de disputar táxis. Três dias cobrem o núcleo real, Christiania e a cena gastronómica a um ritmo tranquilo, com tempo de sobra para se sentar à beira-rio.",
    accent: { from: "#3B5BA5", to: "#E86A6A", ink: "#1E2E52" },
    neighborhoodSlugs: [
      "indre-by",
      "nyhavn",
      "vesterbro",
      "norrebro",
      "christianshavn",
    ],
    nearbyCitySlugs: ["berlin"],
  },

  neighborhoods: [
    {
      slug: "indre-by",
      citySlug: "copenhagen",
      name: "Indre By (Cidade Velha)",
      lat: 55.6794,
      lng: 12.5776,
      bestFor: ["first-time", "romantic"],
      vibe: "O núcleo medieval entre Strøget, os palácios e os canais, onde quase todas as principais atrações ficam a menos de dez minutos a pé. É denso, elegante e movimentado de dia, mais tranquilo assim que as lojas fecham, e coloca-o a pé da Torre Redonda, de Rosenborg e de Nyhavn. Paga-se um prémio claro por essa conveniência.",
      pros: [
        "A Torre Redonda, Rosenborg, Strøget e Nyhavn tudo a pé",
        "Melhor facilidade para andar a pé e ligações de metro da cidade",
        "Zero transportes necessários para uma viagem de 2 dias",
      ],
      cons: [
        "Os preços de quarto mais altos de Copenhaga",
        "As ruas principais têm preços de turista para comida e bebida",
        "Menos restaurantes locais do que Nørrebro ou Vesterbro",
      ],
    },
    {
      slug: "nyhavn",
      citySlug: "copenhagen",
      name: "Nyhavn",
      lat: 55.6797,
      lng: 12.5913,
      bestFor: ["first-time", "romantic"],
      vibe: "O postal de Copenhaga: um curto canal do século XVII ladeado por casas de empena pintadas, barcos de madeira e bares de esplanada. Ficar nele ou ao lado dele coloca-o no porto e no bairro real, embora o próprio cais seja ruidoso e caro nas horas de ponta. É bonito, central e assumidamente turístico.",
      pros: [
        "Cenário icónico de canal mesmo no porto",
        "A passos do bairro real, de Amalienborg e dos cais dos barcos de canal",
        "Excelentes ligações de metro e de autocarro-barco do porto",
      ],
      cons: [
        "Os restaurantes do cais cobram um pesado prémio pela vista",
        "Ruidoso e cheio nos serões de verão",
        "Muito poucas camas genuinamente económicas tão perto da água",
      ],
    },
    {
      slug: "vesterbro",
      citySlug: "copenhagen",
      name: "Vesterbro",
      lat: 55.6683,
      lng: 12.5449,
      bestFor: ["nightlife", "local", "budget"],
      vibe: "Um antigo bairro da luz vermelha e das carnes transformado no melhor bairro de gastronomia e vida noturna com boa relação qualidade-preço da cidade, a poucos minutos a oeste da Estação Central. Os quarteirões do matadouro de Kødbyen vivem de bares de vinho natural, padarias e restaurantes onde os jovens de Copenhaga realmente comem. Parece vivido e criativo em vez de polido, com preços abaixo da cidade velha.",
      pros: [
        "Melhor densidade de gastronomia e vida noturna a preços mais justos",
        "Os bares do matadouro de Kødbyen e a Estação Central à porta",
        "A distância a pé do Tivoli e do centro da cidade",
      ],
      cons: [
        "Algumas ruas ainda parecem duras a horas tardias",
        "Sem canal nem atrações emblemáticas no próprio bairro",
        "Movimentado e ruidoso à volta dos quarteirões de vida noturna após o anoitecer",
      ],
    },
    {
      slug: "norrebro",
      citySlug: "copenhagen",
      name: "Nørrebro",
      lat: 55.6949,
      lng: 12.5533,
      bestFor: ["local", "budget", "nightlife"],
      vibe: "O bairro mais multicultural e jovem, a norte dos lagos, construído em torno do parque Superkilen e da animada rua Jægersborggade. É aqui que vive a verdadeira cena gastronómica de bairro, das padarias às grelhas do Médio Oriente, a preços bem abaixo do centro. Fica a quinze minutos a pé ou a uma curta viagem de autocarro da cidade velha.",
      pros: [
        "Os preços de quarto mais baixos entre os relativamente centrais da cidade",
        "Excecional cena gastronómica independente com pouca margem para turistas",
        "Superkilen, o Cemitério de Assistens e Jægersborggade por perto",
      ],
      cons: [
        "O mais afastado destes bairros das atrações do porto",
        "Disperso, por isso depende mais de bicicletas ou autocarros",
        "Sem metro em alguns troços, embora os autocarros sejam frequentes",
      ],
    },
    {
      slug: "christianshavn",
      citySlug: "copenhagen",
      name: "Christianshavn",
      lat: 55.6725,
      lng: 12.5935,
      bestFor: ["local", "romantic", "family"],
      vibe: "Um bairro insular entrecortado de canais construído por Cristiano IV, misturando casas-barco, cais de calçada e a cidade livre de Christiania na sua orla. É mais calmo e mais residencial do que a cidade velha, mas fica a uma paragem de metro ou a uma curta caminhada pelo porto dela. Os cafés à beira da água e a torre em espiral da Vor Frelsers Kirke dão-lhe verdadeiro carácter.",
      pros: [
        "Canais bonitos e casas-barco longe das multidões",
        "Uma paragem de metro ou uma caminhada até ao centro, com Christiania ao lado",
        "Cafés genuinamente locais e a frente ribeirinha a pé",
      ],
      cons: [
        "Menos hotéis, por isso a escolha e a disponibilidade são limitadas",
        "Vida noturna mais tranquila do que em Vesterbro ou Nørrebro",
        "Atravessa o porto para a maioria das atrações centrais",
      ],
    },
  ],

  pois: [
    {
      slug: "nyhavn",
      citySlug: "copenhagen",
      name: "Porto de Nyhavn",
      lat: 55.6797,
      lng: 12.5911,
      kind: "sight",
      needsBooking: false,
      tip: "Esta é a fotografia que todos vêm buscar, mais bem apanhada da pequena ponte no extremo do porto com a luz da manhã, antes de as esplanadas encherem. Sente-se aqui para uma bebida se quiser a vista, mas coma uma rua atrás, na Store Strandstræde ou na cidade velha, onde a mesma comida custa muito menos do que o prémio do cais.",
    },
    {
      slug: "tivoli-gardens",
      citySlug: "copenhagen",
      name: "Jardins Tivoli",
      lat: 55.6736,
      lng: 12.5681,
      kind: "experience",
      needsBooking: true,
      tip: "Consulte o calendário antes de planear em torno dele, porque o Tivoli é sazonal: aberto de cerca de abril até final de setembro, depois para o Halloween ao longo de outubro e de novo de meados de novembro até ao Ano Novo pelo Natal, e fechado no intervalo. Reserve a entrada online para poupar um pouco, vá nas últimas horas antes de fechar, quando os jardins se iluminam, e compre uma pulseira de atrações só se realmente tencionar andar nelas.",
    },
    {
      slug: "little-mermaid",
      citySlug: "copenhagen",
      name: "A Pequena Sereia",
      lat: 55.6929,
      lng: 12.5993,
      kind: "sight",
      needsBooking: false,
      tip: "A estátua é pequena e está sempre rodeada de grupos de excursão, por isso encare-a como uma paragem de cinco minutos integrada num passeio pelo porto e não como um destino em si. Venha ao início da manhã para uma fotografia limpa e combine-a com a vizinha fortaleza em forma de estrela de Kastellet e a caminhada até Amalienborg, que é a verdadeira recompensa de subir até aqui.",
    },
    {
      slug: "rosenborg-castle",
      citySlug: "copenhagen",
      name: "Castelo de Rosenborg",
      lat: 55.6857,
      lng: 12.5773,
      kind: "sight",
      needsBooking: true,
      tip: "Reserve uma hora marcada online no verão, porque o interior do castelo é pequeno e a fila para as joias da coroa na cave acumula-se ao meio-dia. Vá logo à abertura, desça primeiro à câmara do tesouro enquanto está tranquila e depois saia para os jardins gratuitos de Kongens Have, o mais antigo parque real da cidade e um ótimo local para um piquenique.",
    },
    {
      slug: "christiansborg-palace",
      citySlug: "copenhagen",
      name: "Palácio e Torre de Christiansborg",
      lat: 55.6759,
      lng: 12.5794,
      kind: "sight",
      needsBooking: false,
      tip: "A torre do palácio é a mais alta da cidade e, ao contrário de quase tudo o resto por aqui, totalmente gratuita para subir de elevador, com a melhor vista do topo sobre a cidade velha. Suba primeiro e depois decida se paga pelas salas de receção reais e pelas ruínas por baixo do edifício; só a torre já justifica a paragem, mesmo que salte o resto.",
    },
    {
      slug: "round-tower",
      citySlug: "copenhagen",
      name: "Torre Redonda (Rundetaarn)",
      lat: 55.6813,
      lng: 12.5757,
      kind: "viewpoint",
      needsBooking: false,
      tip: "O miradouro central mais barato de Copenhaga, alcançado não por escadas mas por uma ampla rampa de calçada em espiral que um cavalo conseguiria subir, terminando numa plataforma de cobertura aberta sobre a cidade velha. Compre o bilhete de baixo custo à porta, vá ao final da tarde para a luz quente e procure a pequena sala de biblioteca e o observatório a meio da subida, ambos incluídos.",
    },
    {
      slug: "christiania",
      citySlug: "copenhagen",
      name: "Cidade Livre de Christiania",
      lat: 55.6761,
      lng: 12.5989,
      kind: "experience",
      needsBooking: false,
      tip: "O enclave hippie autogovernado recompensa um passeio pelos seus murais, oficinas, caminhos junto ao lago e cafés alternativos, mas obedeça à única regra rígida: nada de fotografias na Pusher Street, onde os sinais são claros. Guarde os telemóveis ali, explore as vielas mais verdes das traseiras e as orlas do Green Light District de dia, e encare-o como uma comunidade viva e não como uma atração turística.",
    },
    {
      slug: "nationalmuseet",
      citySlug: "copenhagen",
      name: "Nationalmuseet (Museu Nacional)",
      lat: 55.674,
      lng: 12.5751,
      kind: "museum",
      needsBooking: false,
      tip: "O principal museu de história da Dinamarca é de entrada gratuita e o melhor plano para dias de chuva na cidade, mais forte em achados da era viking como o Carro do Sol e um corpo preservado num pântano. Reserve noventa minutos, vá direto às salas de pré-história enquanto está fresco e use a secção infantil, adequada às famílias, se levar crianças consigo.",
    },
    {
      slug: "torvehallerne",
      citySlug: "copenhagen",
      name: "Mercado Gastronómico Torvehallerne",
      lat: 55.6835,
      lng: 12.5691,
      kind: "food",
      needsBooking: false,
      tip: "Duas naves de mercado envidraçadas com cerca de sessenta bancas junto a Nørreport, ideais para um almoço de smørrebrød (sandes abertas), pastelaria fresca e café sem a margem de turista de Nyhavn. Venha num dia de semana por volta das 11h, antes da azáfama do almoço, prove o clássico smørrebrød de arenque em conserva ou de rosbife num balcão, e note que fecha mais cedo aos domingos.",
    },
    {
      slug: "amalienborg",
      citySlug: "copenhagen",
      name: "Palácio de Amalienborg",
      lat: 55.6841,
      lng: 12.5934,
      kind: "sight",
      needsBooking: false,
      tip: "A casa da família real são quatro palácios em torno de uma praça octogonal, e a atração gratuita é o render da guarda ao meio-dia todos os dias, maior quando a Rainha está em residência e a sua bandeira está hasteada. Coloque-se junto à casa da guarda uns minutos antes do meio-dia e depois alinhe a vista a direito até à Igreja de Mármore de um lado e à Ópera, do outro lado do porto, do outro.",
    },
    {
      slug: "stroget",
      citySlug: "copenhagen",
      name: "Strøget",
      lat: 55.6786,
      lng: 12.5748,
      kind: "sight",
      needsBooking: false,
      tip: "Uma das ruas pedonais mais longas da Europa, com cerca de um quilómetro da Praça da Câmara até Kongens Nytorv e útil sobretudo como a espinha pedonal que liga metade das atrações da cidade velha. Encare-a como um trajeto e não como umas compras, entre nas ruas laterais e praças mais tranquilas, como Gråbrødretorv, para melhores cafés, e percorra-a cedo para fugir às multidões.",
    },
    {
      slug: "reffen",
      citySlug: "copenhagen",
      name: "Comida de Rua Reffen",
      lat: 55.6949,
      lng: 12.6017,
      kind: "food",
      needsBooking: false,
      tip: "Um extenso mercado de comida de rua ao ar livre com cozinhas em contentores marítimos na frente ribeirinha de Refshaleøen, mais bem alcançado pelo autocarro-barco 991/992 do porto, que é em si um mini passeio de barco. Funciona sazonalmente da primavera ao outono e fecha no inverno, por isso confirme se está aberto, vá ao pôr do sol sobre a água e pague com cartão, pois a maioria das bancas não aceita dinheiro.",
    },
    {
      slug: "canal-tour",
      citySlug: "copenhagen",
      name: "Passeio de Barco pelos Canais",
      lat: 55.6797,
      lng: 12.5905,
      kind: "experience",
      needsBooking: false,
      tip: "Um passeio de barco de uma hora percorre o porto e os canais, passando pela Ópera, pela Pequena Sereia, pela biblioteca do Diamante Negro e por Christianshavn, e é a forma mais rápida de perceber como a cidade assenta sobre a água. Embarque nos cais de Nyhavn ou de Ved Stranden, escolha um barco aberto em vez de um coberto de vidro e vá ao final da tarde para a melhor luz sobre as fachadas.",
    },
    {
      slug: "superkilen",
      citySlug: "copenhagen",
      name: "Parque Superkilen",
      lat: 55.6994,
      lng: 12.5423,
      kind: "park",
      needsBooking: false,
      tip: "Um parque público impressionante em Nørrebro construído a partir de objetos reunidos em dezenas de países, de uma fonte marroquina a cerejeiras japonesas, disposto em três zonas codificadas por cores. É gratuito e aberto a toda a hora; a ondulante Praça Preta a preto e branco é a fotografia, e combina naturalmente com uma paragem numa padaria e um passeio pela vizinha Jægersborggade.",
    },
  ],

  itineraries: [
    {
      citySlug: "copenhagen",
      days: 2,
      summary:
        "Dois dias chegam para as atrações principais de Copenhaga se ficar em zona central e se deslocar a pé ou de bicicleta, mas vai passar por cima dos bairros que dão à cidade o seu carácter. A cidade velha é compacta: Nyhavn, o bairro real, a Torre Redonda, Rosenborg e o Tivoli ficam a 25 minutos a pé uns dos outros, por isso um plano apertado cobre-os sem muitos transportes. Fixe-se em Indre By para que ambas as manhãs comecem a pé. A estrutura que funciona é um tema por dia: o núcleo real e o porto no primeiro dia, os palácios, a Torre Redonda e o Tivoli no segundo, com um passeio de barco pelos canais a amarrar a frente ribeirinha. Reserve pouco com antecedência, além de uma hora em Rosenborg no verão e de uma entrada no Tivoli se calhar numa época aberta, já que os jardins estão fechados durante partes do ano. O que abdica é de Christiania, da cena gastronómica de Vesterbro e de qualquer tarde tranquila à beira do porto, que é exatamente o que um terceiro dia recupera.",
      stayNeighborhoodSlug: "indre-by",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "O porto e o bairro real",
          morning: [
            {
              poiSlug: "nyhavn",
              text: "Comece em Nyhavn antes de as esplanadas encherem, fotografando as casas pintadas a partir da ponte no extremo do porto com a luz da manhã. Percorra o cais uma vez e depois siga em frente, em vez de pagar o prémio pela vista para tomar o pequeno-almoço aqui.",
              durationMin: 45,
            },
            {
              poiSlug: "amalienborg",
              text: "Suba até Amalienborg pelos palácios reais em torno da praça octogonal, marcando-o para o render da guarda ao meio-dia e alinhando a vista para a Igreja de Mármore e a Ópera.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "little-mermaid",
              text: "Continue pelo caminho do porto, atravessando a fortaleza estrelada de Kastellet, até à Pequena Sereia, uma rápida paragem para fotografia e não um destino, e depois regresse em direção ao centro.",
              durationMin: 75,
            },
            {
              poiSlug: "canal-tour",
              text: "Embarque num barco de canal aberto no cais de Nyhavn para o circuito de uma hora pelo porto, passando pela Ópera, pelo Diamante Negro e por Christianshavn, a forma mais rápida de perceber como a cidade assenta sobre a água.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              text: "Jantar na cidade velha uma rua atrás de Nyhavn, à volta de Gråbrødretorv ou das ruelas laterais de Strøget, onde os preços e a qualidade melhoram ambos face ao cais.",
              durationMin: 105,
            },
            {
              text: "Termine com um passeio à beira do porto de regresso pela água, com os canais no seu momento mais calmo, uma vez parados os barcos do dia.",
              durationMin: 45,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Palácios, a Torre Redonda e o Tivoli",
          morning: [
            {
              poiSlug: "rosenborg-castle",
              text: "Abra o dia no Castelo de Rosenborg numa hora marcada cedo, descendo diretamente às joias da coroa na câmara do tesouro antes de a fila crescer, e depois saia para os jardins gratuitos de Kongens Have.",
              durationMin: 105,
            },
            {
              poiSlug: "torvehallerne",
              text: "Caminhe até às naves do mercado Torvehallerne junto a Nørreport para um almoço de smørrebrød e um pastel, petiscando nas bancas em vez de se sentar para uma refeição completa.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "round-tower",
              text: "Suba a Torre Redonda pela sua rampa de calçada em espiral para a barata vista central do topo sobre a cidade velha, parando na sala de biblioteca e no observatório durante a subida.",
              durationMin: 60,
            },
            {
              poiSlug: "christiansborg-palace",
              text: "Desça até Christiansborg e apanhe o elevador gratuito até à sua torre, a mais alta da cidade, para o melhor panorama do topo do dia, e depois observe a praça do palácio em baixo.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "tivoli-gardens",
              text: "Se calhar numa época aberta, passe o serão nos Jardins Tivoli, chegando nas últimas horas antes de fechar, quando o parque inteiro se ilumina. Consulte primeiro o calendário, já que fecha durante partes do ano.",
              durationMin: 150,
            },
          ],
        },
      ],
    },
    {
      citySlug: "copenhagen",
      days: 3,
      summary:
        "Três dias são a medida certa para Copenhaga: chegam para o núcleo real e o porto a um ritmo tranquilo, mais um dia que pertence a Christiania, à cena gastronómica e à água em vez da lista de tarefas. Dois dias obrigam-no a correr os palácios e a cidade velha em cima uns dos outros; o terceiro acrescenta a cidade livre de Christiania, os canais de Christianshavn e um verdadeiro serão de comida de rua, com tempo para nadar no porto num dia quente. Fique em Vesterbro, a minutos da Estação Central e do Tivoli, mais barato do que a cidade velha e casa da melhor gastronomia e vida noturna com boa relação qualidade-preço da cidade. A forma do plano: o bairro real e o porto no primeiro dia, os palácios, a Torre Redonda e o Tivoli no segundo, Christiania e Christianshavn no terceiro. Reserve pouco com antecedência, além de uma hora em Rosenborg no verão e de uma entrada no Tivoli quando os jardins estão abertos. Todo o resto recompensa alugar uma bicicleta ou apanhar o metro e começar cedo.",
      stayNeighborhoodSlug: "vesterbro",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "O porto e o bairro real",
          morning: [
            {
              poiSlug: "nyhavn",
              text: "Venha de bicicleta de Vesterbro e comece em Nyhavn cedo, antes de as esplanadas encherem, para a fotografia das casas pintadas a partir da ponte no extremo do porto.",
              durationMin: 45,
            },
            {
              poiSlug: "amalienborg",
              text: "Caminhe até Amalienborg pelos quatro palácios reais e o render da guarda ao meio-dia, alinhando a vista até à Igreja de Mármore e, do outro lado do porto, até à Ópera.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "little-mermaid",
              text: "Siga o caminho do porto pela fortaleza de Kastellet até à Pequena Sereia para uma rápida fotografia e depois volte para trás em direção ao centro.",
              durationMin: 75,
            },
            {
              poiSlug: "canal-tour",
              text: "Apanhe um barco de canal aberto no cais de Nyhavn no circuito de uma hora pelo porto para ver a Ópera, o Diamante Negro e Christianshavn a partir da água, com a luz da tarde.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              text: "Regresse a Vesterbro para jantar nos quarteirões do matadouro de Kødbyen, o bairro gastronómico com melhor relação qualidade-preço da cidade, e depois um bar de vinho natural a seguir.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Palácios, a Torre Redonda e o Tivoli",
          morning: [
            {
              poiSlug: "rosenborg-castle",
              text: "Comece em Rosenborg numa hora marcada cedo, direto às joias da coroa antes de a fila da câmara do tesouro crescer, e depois saia para os jardins gratuitos de Kongens Have.",
              durationMin: 105,
            },
            {
              poiSlug: "torvehallerne",
              text: "Almoce nas naves do mercado Torvehallerne junto a Nørreport, petiscando smørrebrød e pastelaria pelas bancas.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "round-tower",
              text: "Suba a rampa em espiral da Torre Redonda para a barata vista do topo sobre a cidade velha, parando na sala de biblioteca a caminho.",
              durationMin: 60,
            },
            {
              poiSlug: "christiansborg-palace",
              text: "Apanhe o elevador gratuito até à torre de Christiansborg, a mais alta da cidade, para o mais amplo panorama do topo, e depois passeie pela praça do palácio e pelo Diamante Negro da Biblioteca Nacional na frente ribeirinha em baixo.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "tivoli-gardens",
              text: "Passe o serão nos Jardins Tivoli se estiver aberto, chegando nas últimas horas antes de fechar, quando o parque se ilumina. Consulte primeiro o calendário sazonal, já que fecha durante partes do ano.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Christiania, Christianshavn e comida de rua",
          morning: [
            {
              poiSlug: "christiania",
              text: "Atravesse o porto até à cidade livre de Christiania e passeie pelos seus murais, oficinas e caminhos junto ao lago, mantendo os telemóveis guardados na Pusher Street, onde as fotografias são proibidas. Encare-a como uma comunidade viva e não como uma atração.",
              durationMin: 90,
            },
            {
              text: "Entre em Christianshavn propriamente dito ao longo dos seus canais e casas-barco, e suba a escadaria exterior em espiral da Vor Frelsers Kirke para uma vista, se tiver coragem para isso.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "nationalmuseet",
              text: "Volte a atravessar até ao Museu Nacional, de entrada gratuita, e vá direto às salas da era viking com o Carro do Sol e o corpo do pântano, a parte mais forte da coleção.",
              durationMin: 90,
            },
            {
              text: "Num dia quente, troque o museu pelo banho no porto de Islands Brygge, do outro lado da água, um local de natação ao ar livre gratuito no meio da cidade.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "reffen",
              text: "Apanhe o autocarro-barco 991 do porto, ele próprio um mini passeio de barco, até ao mercado de comida de rua Reffen em Refshaleøen para o pôr do sol sobre a água e jantar nas cozinhas em contentores. Confirme que está aberto, já que funciona sazonalmente, e pague com cartão.",
              durationMin: 150,
            },
          ],
        },
      ],
    },
    {
      citySlug: "copenhagen",
      days: 4,
      summary:
        "Quatro dias são mais do que suficientes para as atrações de Copenhaga, e é esse o ponto: o quarto dia transforma uma corrida por palácios numa verdadeira viagem. Os dias um a três cobrem o núcleo real, o porto, Christiania e a cena gastronómica a um ritmo descontraído; o quarto dia é seu, para um dia local tranquilo por Nørrebro e Vesterbro ou uma viagem de comboio ao museu de arte moderna Louisiana, costa acima, ou atravessando a ponte até Malmö, na Suécia, ambos a menos de 40 minutos. Com tanto tempo, salte a cidade velha e fique em Nørrebro, o melhor bairro gastronómico da cidade, mais barato do que o centro e cheio de padarias, bares e o parque Superkilen. A lógica de um tema por dia continua válida: mantenha o bairro real e o porto juntos, mantenha Christiania e Christianshavn juntos, e não faça ziguezagues. Reserve pouco com antecedência, além de uma hora em Rosenborg no verão e de uma entrada no Tivoli quando os jardins estão abertos. Se estivesse a escolher entre três dias e quatro, o quarto é o que vai recordar.",
      stayNeighborhoodSlug: "norrebro",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "O porto e o bairro real",
          morning: [
            {
              poiSlug: "nyhavn",
              text: "Desça de bicicleta de Nørrebro e comece em Nyhavn cedo para a fotografia das casas pintadas a partir da ponte no extremo do porto antes de as esplanadas encherem.",
              durationMin: 45,
            },
            {
              poiSlug: "amalienborg",
              text: "Caminhe até Amalienborg pelos palácios reais e o render da guarda ao meio-dia, com a linha de vista até à Igreja de Mármore e à Ópera do outro lado da água.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "little-mermaid",
              text: "Siga o caminho do porto pela fortaleza de Kastellet até à Pequena Sereia para uma rápida fotografia e depois regresse em direção ao centro.",
              durationMin: 75,
            },
            {
              poiSlug: "canal-tour",
              text: "Embarque num barco de canal aberto no cais de Nyhavn para o circuito de uma hora pelo porto, passando pela Ópera, pelo Diamante Negro e por Christianshavn.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              text: "Jantar de volta em Nørrebro, ao longo de Jægersborggade ou de Sankt Hans Torv, onde os restaurantes e padarias de bairro são mais baratos e mais inventivos do que o centro.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Palácios, a Torre Redonda e o Tivoli",
          morning: [
            {
              poiSlug: "rosenborg-castle",
              text: "Abra em Rosenborg numa hora marcada cedo, primeiro às joias da coroa e depois para os jardins gratuitos de Kongens Have, ao lado do seu próprio bairro.",
              durationMin: 105,
            },
            {
              poiSlug: "torvehallerne",
              text: "Almoce nas naves do mercado Torvehallerne junto a Nørreport, petiscando smørrebrød e pastelaria pelas bancas.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "round-tower",
              text: "Suba a rampa em espiral da Torre Redonda para a barata vista central do topo, parando na sala de biblioteca.",
              durationMin: 60,
            },
            {
              poiSlug: "christiansborg-palace",
              text: "Apanhe o elevador gratuito até à torre de Christiansborg para o mais alto panorama do topo da cidade, e depois percorra a praça do palácio e a espinha de Strøget de regresso a Kongens Nytorv.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "tivoli-gardens",
              text: "Passe o serão nos Jardins Tivoli se estiver aberto, chegando tarde, quando o parque se ilumina. Consulte primeiro o calendário sazonal, já que fecha durante partes do ano.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Christiania, Christianshavn e comida de rua",
          morning: [
            {
              poiSlug: "christiania",
              text: "Atravesse até à cidade livre de Christiania e passeie pelos seus murais, oficinas e caminhos junto ao lago, mantendo os telemóveis guardados na Pusher Street, onde as fotografias são proibidas.",
              durationMin: 90,
            },
            {
              text: "Percorra os canais e casas-barco de Christianshavn, e suba a escada exterior em espiral da Vor Frelsers Kirke para a vista, se se atrever.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "nationalmuseet",
              text: "Volte a atravessar até ao Museu Nacional gratuito e vá para as salas da era viking com o Carro do Sol e o corpo do pântano, o mais forte da coleção.",
              durationMin: 90,
            },
            {
              text: "Numa tarde quente, troque o museu por um banho no porto de Islands Brygge, uma piscina ao ar livre gratuita cortada no porto no meio da cidade.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "reffen",
              text: "Apanhe o autocarro-barco 991 do porto até ao mercado de comida de rua Reffen em Refshaleøen para um jantar ao pôr do sol nas cozinhas em contentores. Confirme que está aberto, já que funciona sazonalmente, e pague com cartão.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Dia local em Nørrebro ou viagem à Louisiana e a Malmö",
          morning: [
            {
              poiSlug: "superkilen",
              text: "Opção A: comece à sua porta no parque Superkilen, depois desça por Jægersborggade para padarias e café e entre no frondoso Cemitério de Assistens, onde Hans Christian Andersen está sepultado. Opção B: apanhe o comboio costeiro cerca de 35 minutos para norte até Humlebæk para o Museu de Arte Moderna Louisiana, cujo parque de esculturas desce até ao mar, ou atravesse a ponte do Øresund de comboio em cerca de 35 minutos até Malmö, na Suécia.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              text: "A Opção A continua em Nørrebro e Vesterbro com almoço num restaurante de bairro e um passeio pelos quarteirões de Kødbyen e pelos lagos entre os dois bairros. Opção B: dê à tarde as galerias e o litoral da Louisiana, ou explore a cidade velha de Malmö e o Turning Torso antes do curto comboio de regresso.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              text: "De qualquer forma, termine de volta em Nørrebro nos bares e esplanadas à volta de Sankt Hans Torv e Jægersborggade, a verdadeira cena noturna do bairro.",
              durationMin: 120,
            },
            {
              text: "Último jantar num restaurante de Nørrebro; a zona faz comida criativa a preços justos, um encerramento à altura depois das ementas com vista para o porto do centro.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
  ],
};

export default copenhagenPt;
