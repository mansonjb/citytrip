import type { CityData } from "../types";

const lisbonPt: CityData = {
  city: {
    slug: "lisbon",
    name: "Lisboa",
    country: "Portugal",
    countrySlug: "portugal",
    lat: 38.7223,
    lng: -9.1393,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "LIS",
    airportToCenter: "Linha vermelha do metro a partir do aeroporto, cerca de 25 min até ao centro com uma mudança, 1,85 EUR",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [8],
    monthlyNotes: {
      1: "Conte com dias de 14-15C, frentes de chuva frequentes vindas do Atlântico e as ruas mais calmas do ano. Os preços dos hotéis atingem o mínimo, por isso este é o mês ideal para uma viagem barata de miradouros e museus.",
      2: "Ainda fresco e com aguaceiros, mas as abertas de sol são comuns e as esplanadas enchem nas tardes limpas. O Carnaval traz um pico curto de animação local, de resto multidões e preços mantêm-se baixos.",
      3: "As máximas sobem até aos 18C e a chuva diminui ao longo do mês. As multidões são moderadas até final de março, quando o tráfego das férias da Páscoa começa a empurrar os preços dos hotéis ao fim de semana.",
      4: "Um dos melhores meses: 19-21C, jacarandás quase a florir, filas geríveis no castelo e em Belém. A Semana Santa é a exceção, reserve essa janela cedo e conte com preços de época festiva.",
      5: "Calor fiável a rondar os 22C, pouca chuva e fins de tarde longos, ideal para a época dos rooftops e dos quiosques. As multidões vão crescendo, mas os bilhetes com hora marcada ainda resolvem a maioria das filas.",
      6: "As Festas de Lisboa tomam conta da cidade todo o mês, com o auge na noite de Santo António, 12-13 de junho, quando Alfama se transforma numa enorme festa de rua de sardinha assada. Reserve com semanas de antecedência e conte com preços de hotel quase de época alta.",
      7: "Quente, 27-28C, e movimentado, com o tráfego dos cruzeiros a criar picos ao meio-dia na Baixa e em Belém. Faça os monumentos antes das 11h e depois siga os lisboetas até ao rio ou aos comboios de praia do Cais do Sodré.",
      8: "Pico de calor perto dos 29C, pico de multidões, pico de preços, e muitos restaurantes familiares fecham para férias. Se agosto for a sua única opção, reserve ar condicionado e o primeiro horário de entrada em todo o lado.",
      9: "Tempo de verão sem a confusão de agosto: 26-27C no início do mês, mar ainda quente, fins de tarde feitos para miradouros. Os preços descem do pico depois da primeira semana.",
      10: "Dias quentes a rondar os 22-23C, com a primeira chuva a sério a regressar no final do mês. As multidões diminuem visivelmente depois de meados de outubro e este é o ponto ideal para promoções de hotel em época intermédia.",
      11: "Mais fresco, 17-18C, com períodos de chuva regulares, mas a luz entre aguaceiros é soberba para fotografias. Os preços de época baixa entram em vigor e consegue entrar nas casas de fado sem reserva.",
      12: "Ameno para o inverno, com 15C mas chuvoso, com iluminações festivas ao longo da Rua Augusta e um grande concerto gratuito de passagem de ano na Praça do Comércio. Tranquilo, exceto na semana do Natal ao Ano Novo, quando os preços disparam.",
    },
    climate: {
      1: { highC: 15, lowC: 8, rainyDays: 10 },
      2: { highC: 16, lowC: 9, rainyDays: 9 },
      3: { highC: 18, lowC: 10, rainyDays: 8 },
      4: { highC: 20, lowC: 11, rainyDays: 8 },
      5: { highC: 22, lowC: 13, rainyDays: 5 },
      6: { highC: 26, lowC: 16, rainyDays: 2 },
      7: { highC: 28, lowC: 17, rainyDays: 1 },
      8: { highC: 29, lowC: 18, rainyDays: 1 },
      9: { highC: 27, lowC: 17, rainyDays: 3 },
      10: { highC: 23, lowC: 14, rainyDays: 7 },
      11: { highC: 18, lowC: 11, rainyDays: 9 },
      12: { highC: 15, lowC: 9, rainyDays: 10 },
    },
    budgetLevel: "mid",
    budgetPerDay: { budget: 70, mid: 140, high: 280 },
    tagline: "Sete colinas, um rio e a melhor luz da Europa.",
    heroIntro:
      "Lisboa recompensa quem caminha e aceita as colinas, e quem domina os elétricos. Três dias chegam para cobrir o centro histórico, os miradouros e Belém sem pressa, e a gastronomia vale muito mais do que o preço que se paga. Venha na primavera ou no início do outono e a cidade é praticamente imbatível para uma escapadinha europeia.",
    accent: { from: "#FFB45E", to: "#FF6B5B", ink: "#8A2D1F" },
    neighborhoodSlugs: [
      "alfama",
      "baixa-chiado",
      "principe-real",
      "bairro-alto",
      "belem",
    ],
    nearbyCitySlugs: ["porto", "seville"],
  },

  neighborhoods: [
    {
      slug: "alfama",
      citySlug: "lisbon",
      name: "Alfama",
      lat: 38.7118,
      lng: -9.1287,
      bestFor: ["romantic", "local", "first-time"],
      vibe: "O bairro mais antigo de Lisboa é um labirinto de escadinhas, roupa estendida e fachadas de azulejo que sobem do rio até ao castelo. O fado escapa-se dos pequenos restaurantes à noite e as ruas esvaziam-se de grupos turísticos depois de escurecer. Parece uma aldeia que por acaso fica dentro de uma capital.",
      pros: [
        "As ruas com mais atmosfera da cidade, sobretudo de manhã cedo e à noite",
        "A pé fica perto do castelo, da Sé e dos melhores miradouros",
        "Casas de fado e tascas familiares à porta de casa",
      ],
      cons: [
        "Subidas íngremes e calçada, penoso com malas e difícil para quem tem mobilidade reduzida",
        "Poucas estações de metro por perto, depende dos elétricos, dos autocarros ou das pernas",
        "Congestionamento de grupos turísticos nas ruas principais durante o dia",
      ],
    },
    {
      slug: "baixa-chiado",
      citySlug: "lisbon",
      name: "Baixa-Chiado",
      lat: 38.7104,
      lng: -9.139,
      bestFor: ["first-time", "family", "budget"],
      vibe: "A baixa plana e em quadrícula reconstruída depois do terramoto de 1755, que vai da Praça do Comércio até às lojas e cafés elegantes do Chiado. Tudo se liga aqui: três linhas de metro, as carreiras de elétrico e os barcos. É turística ao nível da rua, mas imbatível como base.",
      pros: [
        "A zona mais plana do centro de Lisboa, o terreno mais fácil que vai encontrar",
        "O melhor nó de transportes da cidade, metro direto da zona do aeroporto com uma mudança",
        "Enorme oferta de hotéis e restaurantes para todas as carteiras",
      ],
      cons: [
        "A qualidade dos restaurantes nas artérias principais é medíocre e orientada para turistas",
        "Cheia e barulhenta durante o dia, sobretudo perto da Rua Augusta",
      ],
    },
    {
      slug: "principe-real",
      citySlug: "lisbon",
      name: "Principe Real",
      lat: 38.7168,
      lng: -9.1489,
      bestFor: ["romantic", "local", "nightlife"],
      vibe: "Um bairro arborizado e sofisticado acima do Bairro Alto, construído em torno de um jardim com um cedro gigante e mercados biológicos ao fim de semana. Concept stores, bares de vinho natural e alguns dos restaurantes mais interessantes da cidade ocupam os palacetes do século XIX. É onde os lisboetas saem de facto.",
      pros: [
        "Excelente cena de comida e bebida com muito menos turistas do que a baixa",
        "Sossegado à noite, apesar de ficar a dez minutos do Bairro Alto",
        "Jardins e quiosques dão-lhe verdadeira vida de bairro",
      ],
      cons: [
        "Fica a subir de quase tudo, conte com um táxi ocasional para regressar",
        "O alojamento tende a ser boutique e caro, poucas opções económicas",
        "Não há estação de metro no próprio bairro, a mais próxima é o Rato",
      ],
    },
    {
      slug: "bairro-alto",
      citySlug: "lisbon",
      name: "Bairro Alto",
      lat: 38.713,
      lng: -9.144,
      bestFor: ["nightlife", "budget"],
      vibe: "Sonolento de dia, esta quadrícula de ruas estreitas transforma-se todas as noites no bar ao ar livre de Lisboa, com multidões a beber na calçada até às 2h. Cerveja barata, bares minúsculos e zero pretensão. Durma aqui apenas se planeia fazer parte do barulho.",
      pros: [
        "O epicentro da vida noturna, dezenas de bares a cinco minutos a pé",
        "Localização central entre o Chiado e o Príncipe Real",
        "Ainda sobrevivem aqui algumas guesthouses genuinamente baratas",
      ],
      cons: [
        "O barulho de rua até às 2-3h ao fim de semana não é negociável",
        "Manhãs sujas, as ruas levam uma tareia todas as noites",
        "Acesso íngreme a partir da Baixa, a menos que use o Ascensor da Glória ou o elevador",
      ],
    },
    {
      slug: "belem",
      citySlug: "lisbon",
      name: "Belem",
      lat: 38.697,
      lng: -9.206,
      bestFor: ["family", "local"],
      vibe: "Um bairro ribeirinho 6 km a oeste da baixa, onde os monumentos dos Descobrimentos se alinham ao longo do Tejo: o mosteiro, a torre e uma faixa de museus modernos. Vive dos visitantes de um dia até por volta das 18h e depois fica genuinamente calmo. Amplo, plano e verde, parece mais uma cidade-jardim do que o centro de Lisboa.",
      pros: [
        "Terreno plano e passeios à beira-rio, a caminhada mais fácil de Lisboa",
        "Monumentos e museus à porta antes de as multidões chegarem",
        "Fins de tarde calmos e preços de hotel mais baixos do que na baixa",
      ],
      cons: [
        "20-30 min de elétrico 15 até ao centro, e o elétrico vai apinhado",
        "As opções de restaurantes e de vida noturna escasseiam depois de escurecer",
      ],
    },
  ],

  pois: [
    {
      slug: "praca-do-comercio",
      citySlug: "lisbon",
      name: "Praça do Comércio",
      lat: 38.7077,
      lng: -9.1366,
      kind: "sight",
      needsBooking: false,
      tip: "Venha antes das 9h para fotografias da praça vazia com o Arco da Rua Augusta e depois evite as esplanadas caras da própria praça. Os degraus sobre o rio no Cais das Colunas, do lado sul, são o camarote gratuito ao pôr do sol.",
    },
    {
      slug: "castelo-sao-jorge",
      citySlug: "lisbon",
      name: "Castelo de São Jorge",
      lat: 38.7139,
      lng: -9.1335,
      kind: "sight",
      needsBooking: true,
      tip: "Compre o bilhete com hora marcada online (cerca de 15 EUR) e escolha o primeiro horário, às 9h, porque a fila da bilheteira chega aos 45 minutos ao fim da manhã na época alta. Apanhe o autocarro 737 da Praça da Figueira até ao portão em vez de subir a pé, e guarde as pernas para as muralhas.",
    },
    {
      slug: "miradouro-senhora-do-monte",
      citySlug: "lisbon",
      name: "Miradouro da Senhora do Monte",
      lat: 38.719,
      lng: -9.1325,
      kind: "viewpoint",
      needsBooking: false,
      tip: "É o miradouro mais alto e mais amplo do centro histórico e é gratuito, mas o murete enche 45 minutos antes do pôr do sol, por isso chegue cedo para garantir lugar. Não há café lá em cima, compre bebidas numa loja na rua principal da Graça pelo caminho.",
    },
    {
      slug: "tram-28",
      citySlug: "lisbon",
      name: "Elétrico 28",
      lat: 38.7169,
      lng: -9.136,
      kind: "experience",
      needsBooking: false,
      tip: "Embarque no terminal do Martim Moniz antes das 8h30 para conseguir lugar à janela, às 10h já só se vai de pé e é um ponto quente de carteiristas. O bilhete avulso a bordo custa 3,10 EUR, por isso compre antes um passe Carris/metro de 24h por cerca de 6,80 EUR e pode saltar em qualquer colina.",
    },
    {
      slug: "time-out-market",
      citySlug: "lisbon",
      name: "Time Out Market",
      lat: 38.707,
      lng: -9.146,
      kind: "food",
      needsBooking: false,
      tip: "As mesas comunitárias são um campo de batalha entre as 12h30 e as 14h, por isso coma às 11h45 ou depois das 14h30 e mande uma pessoa guardar lugares enquanto os outros pedem. O mercado de frescos original, o Mercado da Ribeira, mesmo ao lado, é uma paragem para café mais barata e mais calma.",
    },
    {
      slug: "jeronimos-monastery",
      citySlug: "lisbon",
      name: "Mosteiro dos Jerónimos",
      lat: 38.6979,
      lng: -9.2068,
      kind: "sight",
      needsBooking: true,
      tip: "A entrada na nave da igreja é gratuita, só os claustros precisam de bilhete (cerca de 12 EUR), por isso reserve online o primeiro horário, às 9h30, e faça os claustros antes de os grupos de autocarro chegarem por volta das 10h30. Fecha à segunda-feira, um erro clássico de planeamento de dia de visita.",
    },
    {
      slug: "belem-tower",
      citySlug: "lisbon",
      name: "Torre de Belém",
      lat: 38.6916,
      lng: -9.216,
      kind: "sight",
      needsBooking: true,
      tip: "O interior é uma única escada em caracol estreita, partilhada nos dois sentidos, por isso a entrada é feita a conta-gotas e a fila avança penosamente mesmo com bilhete reservado. O conselho honesto: fotografe-a da margem do rio e só entre se tiver reservado o primeiro horário. Fecha à segunda-feira.",
    },
    {
      slug: "pasteis-de-belem",
      citySlug: "lisbon",
      name: "Pastéis de Belém",
      lat: 38.6975,
      lng: -9.2033,
      kind: "food",
      needsBooking: false,
      tip: "Ignore a fila do take-away que serpenteia pela rua e entre diretamente para as salas de refeição, têm cerca de 400 lugares e a rotação é rápida. Peça à mesa, junte a canela e o açúcar dos polvilhadores do balcão e conte pagar cerca de 1,40 EUR por pastel.",
    },
    {
      slug: "lx-factory",
      citySlug: "lisbon",
      name: "LX Factory",
      lat: 38.7034,
      lng: -9.1786,
      kind: "experience",
      needsBooking: false,
      tip: "Venha ao fim da tarde e fique para jantar, a maioria das lojas abre até às 19-20h e os restaurantes depois disso. Ao domingo, a feira LX Market funciona a partir das 10h, e a livraria Ler Devagar, com a sua bicicleta voadora, é a paragem que não deve saltar.",
    },
    {
      slug: "maat",
      citySlug: "lisbon",
      name: "MAAT",
      lat: 38.6957,
      lng: -9.1937,
      kind: "museum",
      needsBooking: false,
      tip: "Pode atravessar a cobertura curva do museu gratuitamente a qualquer hora, e a vista sobre o rio lá de cima bate vários miradouros pagos. As galerias fecham à terça-feira, e o bilhete combinado que inclui o edifício da antiga central elétrica é a melhor opção se entrar.",
    },
    {
      slug: "alfama-walk",
      citySlug: "lisbon",
      name: "Alfama a pé",
      lat: 38.7118,
      lng: -9.1287,
      kind: "experience",
      needsBooking: false,
      tip: "Faça o percurso a descer: comece no castelo ou no miradouro das Portas do Sol e deixe as escadinhas puxá-lo em direção ao rio, fazê-lo a subir com o sol da tarde é o erro clássico. Nas manhãs de terça e de sábado, desvie até à Feira da Ladra, atrás do Panteão.",
    },
    {
      slug: "miradouro-santa-catarina",
      citySlug: "lisbon",
      name: "Miradouro de Santa Catarina",
      lat: 38.7089,
      lng: -9.147,
      kind: "viewpoint",
      needsBooking: false,
      tip: "É o miradouro do pôr do sol virado para a ponte, e a multidão é jovem, local e munida de cervejas de supermercado. O quiosque vende bebidas mas fecha mais cedo do que espera, por isso chegue à hora dourada, compre primeiro e depois sente-se nos degraus da esplanada.",
    },
    {
      slug: "gulbenkian-museum",
      citySlug: "lisbon",
      name: "Museu Calouste Gulbenkian",
      lat: 38.7371,
      lng: -9.1545,
      kind: "museum",
      needsBooking: true,
      tip: "A entrada é gratuita todos os domingos a partir das 14h, e mesmo assim raramente parece cheio. Fecha à terça-feira, e o jardim envolvente, com os seus lagos e passadiços de betão, é gratuito todos os dias, um verdadeiro local de pausa de almoço para os habituais da cafetaria do museu.",
    },
  ],

  itineraries: [
    {
      citySlug: "lisbon",
      days: 2,
      summary:
        "Dois dias chegam para o núcleo histórico de Lisboa, mas terá de sacrificar Belém, e isso é um sacrifício a sério. Em 48 horas consegue andar no elétrico 28 antes das multidões, subir ao castelo e percorrer Alfama, apanhar dois dos melhores miradouros, comer pelo Time Out Market e terminar as duas noites na rua, uma com fado e outra no Bairro Alto. O que não vai caber: o Mosteiro dos Jerónimos, a Torre de Belém, o Gulbenkian ou qualquer excursão de um dia, por isso aceite a troca antes de reservar. Esta duração serve para uma escapadinha de fim de semana, uma paragem a caminho do Algarve ou dos Açores, ou para quem combina Lisboa com o Porto numa só viagem. Fique na Baixa-Chiado: é plana, todos os elétricos e linhas de metro convergem ali, e os dois dias começam a dez minutos da porta. Se aterrar com meio dia extra, gaste-o em Belém em vez de acrescentar mais passeio pela baixa.",
      stayNeighborhoodSlug: "baixa-chiado",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Colina do castelo, Alfama e fado",
          morning: [
            {
              poiSlug: "tram-28",
              text: "Comece no terminal do Martim Moniz e suba no elétrico 28 pela Graça antes das 8h30, quando ainda consegue lugar à janela. Salte perto do topo da colina do castelo em vez de fazer o percurso completo.",
              durationMin: 40,
            },
            {
              poiSlug: "castelo-sao-jorge",
              text: "Percorra as muralhas do Castelo de São Jorge com bilhete das 9h reservado, antes de a fila da bilheteira crescer. Os terraços dão-lhe a vista completa da cidade e do rio, uma orientação útil para o resto da viagem.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "alfama-walk",
              text: "Desça Alfama a pé desde os portões do castelo, passando pelas Portas do Sol e pelas escadinhas em direção à Sé. Pare para um almoço demorado numa tasca pelo caminho, peixe grelhado e meia garrafa de vinho verde é a jogada certa.",
              durationMin: 150,
            },
            {
              poiSlug: "miradouro-senhora-do-monte",
              text: "Suba a pé ou de autocarro até ao Miradouro da Senhora do Monte, o miradouro mais alto do centro histórico. A luz do fim da tarde aqui é o melhor espetáculo gratuito de Lisboa.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              text: "Reserve mesa numa casa de fado em Alfama por volta das 20h, as pequenas salas familiares batem os grandes espetáculos com jantar. Conte com menu fixo mais atuação, e silêncio total durante as canções.",
              durationMin: 150,
            },
            {
              text: "Termine com uma ginjinha, o licor local de ginja, num bar de vão de escada perto do Rossio, no regresso a pé à Baixa. Um copo em chávena de chocolate custa menos de 2 EUR.",
              durationMin: 20,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Baixa, Chiado e noites no Bairro Alto",
          morning: [
            {
              poiSlug: "praca-do-comercio",
              text: "Percorra a Praça do Comércio e os degraus sobre o rio no Cais das Colunas antes das 9h, quando a praça ainda está vazia. Depois suba pela Rua Augusta pedonal, atravessando o arco para a quadrícula da Baixa.",
              durationMin: 60,
            },
            {
              text: "Suba pelo Chiado a ver montras: os cafés históricos à volta da Rua Garrett, a Livraria Bertrand, as ruínas do Convento do Carmo se quiser um monumento compacto. É a melhor hora de Lisboa para ver lojas.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "time-out-market",
              text: "Almoce no Time Out Market, no Cais do Sodré, chegando até às 11h45 ou depois das 14h30 para conseguir mesmo um lugar. Divida os pedidos por várias bancas para provar três cozinhas numa só refeição.",
              durationMin: 90,
            },
            {
              poiSlug: "miradouro-santa-catarina",
              text: "Suba até ao Miradouro de Santa Catarina e instale-se de frente para a Ponte 25 de Abril. Compre uma bebida no quiosque cedo, fecha antes do pico da multidão.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Jante no Chiado ou na orla do Bairro Alto, reservando com antecedência em qualquer sítio com nome. As doses são grandes, partilhar dois pratos principais entre três pessoas é normal.",
              durationMin: 100,
            },
            {
              text: "Acabe na quadrícula de bares do Bairro Alto, onde toda a gente bebe de pé na calçada a partir das 23h. Vá saltando de bar em bar em vez de se fixar, o objetivo é a própria rua.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "lisbon",
      days: 3,
      summary:
        "Sim, três dias é a quantidade certa de tempo para Lisboa, e é a duração que recomendamos para uma primeira visita. Dá-lhe dois dias completos no centro histórico, cobrindo o castelo, Alfama, o elétrico 28, os miradouros, a Baixa e o Chiado, mais um dia dedicado a Belém, que merece bem mais do que a meia tarde apressada que a maioria lhe dá. Com três dias janta bem duas vezes sem repetir bairros, encaixa uma noite de fado e uma noite no Bairro Alto, e ainda vai até ao Mosteiro dos Jerónimos, à Torre de Belém e aos pastéis de nata na sua origem. O que continua de fora: o Museu Gulbenkian, o Príncipe Real e qualquer excursão a Sintra, tudo coisas que precisam de um quarto dia. Esta duração serve para quem visita pela primeira vez, para casais e para quem monta uma rota por Portugal com o Porto a seguir. Fique na Baixa-Chiado pelas ligações de transporte, já que o elétrico para Belém parte da sua porta e os dois dias de centro começam a pé.",
      stayNeighborhoodSlug: "baixa-chiado",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Colina do castelo, Alfama e fado",
          morning: [
            {
              poiSlug: "tram-28",
              text: "Comece no terminal do Martim Moniz e suba no elétrico 28 pela Graça antes das 8h30, quando ainda consegue lugar à janela. Salte perto do topo da colina do castelo em vez de fazer o percurso completo.",
              durationMin: 40,
            },
            {
              poiSlug: "castelo-sao-jorge",
              text: "Percorra as muralhas do Castelo de São Jorge com bilhete das 9h reservado, antes de a fila da bilheteira crescer. Os terraços dão-lhe a vista completa da cidade e do rio, uma orientação útil para o resto da viagem.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "alfama-walk",
              text: "Desça Alfama a pé desde os portões do castelo, passando pelas Portas do Sol e pelas escadinhas em direção à Sé. Pare para um almoço demorado numa tasca pelo caminho.",
              durationMin: 150,
            },
            {
              poiSlug: "miradouro-senhora-do-monte",
              text: "Suba a pé ou de autocarro até ao Miradouro da Senhora do Monte, o miradouro mais alto do centro histórico, para a luz do fim da tarde. Leve as suas bebidas, não há quiosque no topo.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              text: "Reserve mesa numa casa de fado em Alfama por volta das 20h, escolhendo uma pequena sala familiar em vez dos grandes espetáculos com jantar. O silêncio total durante as canções é a regra da casa em todo o lado.",
              durationMin: 150,
            },
            {
              text: "Termine com uma ginjinha, o licor de ginja, num bar de balcão perto do Rossio no caminho de regresso. Menos de 2 EUR, bebida no passeio como toda a gente.",
              durationMin: 20,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Baixa, Chiado e noites no Bairro Alto",
          morning: [
            {
              poiSlug: "praca-do-comercio",
              text: "Percorra a Praça do Comércio e a frente ribeirinha no Cais das Colunas antes das 9h, depois suba pela Rua Augusta, atravessando o arco para a quadrícula da Baixa. A praça fotografa melhor enquanto ainda está vazia.",
              durationMin: 60,
            },
            {
              text: "Suba pelo Chiado a ver montras: os cafés à volta da Rua Garrett, a Livraria Bertrand e as ruínas do Convento do Carmo se quiser um monumento compacto antes do almoço.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "time-out-market",
              text: "Almoce no Time Out Market, no Cais do Sodré, chegando até às 11h45 ou depois das 14h30 para encontrar lugares. Divida os pedidos por várias bancas para provar várias cozinhas de uma vez.",
              durationMin: 90,
            },
            {
              poiSlug: "miradouro-santa-catarina",
              text: "Suba até ao Miradouro de Santa Catarina e ocupe um lugar de frente para a Ponte 25 de Abril para a hora dourada. Compre no quiosque cedo, fecha antes do pico da multidão.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Jante no Chiado ou na orla do Bairro Alto, com reserva em qualquer sítio bem avaliado. As doses portuguesas são grandes, peça menos do que pensa.",
              durationMin: 100,
            },
            {
              text: "Acabe no Bairro Alto, onde a multidão dos bares transborda para a calçada a partir das 23h. Vá mudando de bar, a rua é o próprio recinto.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Monumentos de Belém e beira-rio",
          morning: [
            {
              poiSlug: "jeronimos-monastery",
              text: "Apanhe o elétrico 15 ou um táxi de 15 minutos da baixa e esteja no Mosteiro dos Jerónimos para o primeiro horário dos claustros, às 9h30, reservado online. Veja depois a nave da igreja, gratuita, a cantaria manuelina lá dentro é o ponto alto do dia.",
              durationMin: 100,
            },
            {
              poiSlug: "pasteis-de-belem",
              text: "Caminhe dois minutos até aos Pastéis de Belém e vá diretamente para as salas de refeição em vez da fila do take-away. Dois pastéis quentes com canela e um café é o pedido certo.",
              durationMin: 40,
            },
          ],
          afternoon: [
            {
              poiSlug: "belem-tower",
              text: "Passeie pelos jardins ribeirinhos, passando pelo Padrão dos Descobrimentos, até à Torre de Belém. Fotografe-a da beira da água e só faça fila para o interior se reservou o primeiro horário.",
              durationMin: 75,
            },
            {
              poiSlug: "maat",
              text: "Caminhe para leste ao longo do Tejo até ao MAAT e atravesse a sua cobertura curva, gratuita e aberta mesmo quando as galerias não estão. Entre se a exposição do momento lhe interessar, salte-a sem culpa se não.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "lx-factory",
              text: "Continue até à LX Factory, debaixo da ponte, em Alcântara, chegando ao fim da tarde enquanto as lojas ainda estão abertas. Espreite a Ler Devagar e fique para jantar num dos restaurantes da antiga tipografia.",
              durationMin: 150,
            },
            {
              text: "Regresse ao centro de táxi ou de elétrico 15, cerca de 15 minutos. Se ainda tiver energia, um último copo num rooftop do Cais do Sodré fecha a viagem como deve ser.",
              durationMin: 45,
            },
          ],
        },
      ],
    },
    {
      citySlug: "lisbon",
      days: 4,
      summary:
        "Quatro dias é mais do que suficiente para Lisboa, e o quarto dia é o que transforma uma maratona de monumentos em férias a sério. Os dias um e dois cobrem o núcleo histórico: castelo, Alfama, elétrico 28, Baixa, Chiado, os miradouros e as duas noites emblemáticas. O dia três é Belém, feito como deve ser, do primeiro horário de entrada no mosteiro ao jantar na LX Factory. O dia quatro é a válvula de escape: a coleção privada de classe mundial do Gulbenkian, os jardins e os bares de vinho do Príncipe Real e uma última noite sem pressa, ou troque o dia inteiro por uma excursão a Sintra se os palácios o tentarem mais do que os museus. Esta duração serve para quem detesta andar a correr, para quem repete a visita e para quem tem voos que encaixam mal nas pontas da viagem. Para quatro dias recomendamos ficar no Príncipe Real em vez da baixa: já aceitou um ritmo mais lento, e os restaurantes, os jardins e o ambiente local fazem do regresso a casa cada noite a melhor parte. Para lá de quatro dias, acrescente Sintra e uma tarde de praia em Cascais em vez de mais cidade.",
      stayNeighborhoodSlug: "principe-real",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Colina do castelo, Alfama e fado",
          morning: [
            {
              poiSlug: "tram-28",
              text: "Comece no terminal do Martim Moniz e suba no elétrico 28 pela Graça antes das 8h30 para conseguir lugar à janela. Salte perto da colina do castelo em vez de fazer o percurso completo.",
              durationMin: 40,
            },
            {
              poiSlug: "castelo-sao-jorge",
              text: "Percorra as muralhas do Castelo de São Jorge com um bilhete das 9h reservado, antes de as filas crescerem. Os terraços mapeiam-lhe a cidade inteira logo no primeiro dia.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "alfama-walk",
              text: "Desça Alfama a pé desde os portões do castelo, passando pelas Portas do Sol e pelas escadinhas em direção ao rio, com um almoço demorado de tasca pelo caminho.",
              durationMin: 150,
            },
            {
              poiSlug: "miradouro-senhora-do-monte",
              text: "Volte a subir ao Miradouro da Senhora do Monte para a luz do fim da tarde sobre o centro histórico. É gratuito, e é o miradouro mais alto do centro de Lisboa.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              text: "Reserve uma pequena casa de fado em Alfama por volta das 20h e instale-se para o menu fixo e o canto. Espera-se silêncio durante as canções, o aplauso no fim é obrigatório.",
              durationMin: 150,
            },
            {
              text: "Feche a noite com uma ginjinha perto do Rossio antes de subir ao Príncipe Real. Um táxi para casa custa poucos euros e poupa-lhe a subida.",
              durationMin: 20,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Baixa, Chiado e noites no Bairro Alto",
          morning: [
            {
              poiSlug: "praca-do-comercio",
              text: "Percorra a Praça do Comércio e os degraus do rio no Cais das Colunas antes das 9h, depois apanhe a Rua Augusta e atravesse o arco para a Baixa. Cedo é a única hora em que a praça é sua.",
              durationMin: 60,
            },
            {
              text: "Vagueie a subir pelo Chiado: os cafés da Rua Garrett, a Livraria Bertrand e o Convento do Carmo sem teto, se quiser um monumento rápido.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "time-out-market",
              text: "Almoço no Time Out Market, no Cais do Sodré, marcado para as 11h45 ou depois das 14h30 para evitar a caça ao lugar. Peça em várias bancas e partilhe.",
              durationMin: 90,
            },
            {
              poiSlug: "miradouro-santa-catarina",
              text: "Suba até ao Miradouro de Santa Catarina para a hora dourada de frente para a ponte. Primeiro o quiosque, depois os degraus, o balcão das bebidas fecha cedo.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Jantar no Chiado ou na parte alta do Bairro Alto com reserva, e depois junte-se à multidão de rua na quadrícula de bares do Bairro Alto a partir das 23h. A sua cama no Príncipe Real fica a dez minutos a pé, a subir.",
              durationMin: 180,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Monumentos de Belém e beira-rio",
          morning: [
            {
              poiSlug: "jeronimos-monastery",
              text: "Chegue ao Mosteiro dos Jerónimos para o primeiro horário dos claustros, às 9h30, reservado online, e veja depois a nave da igreja, gratuita. O elétrico 15 ou um táxi do centro demoram 15-25 minutos.",
              durationMin: 100,
            },
            {
              poiSlug: "pasteis-de-belem",
              text: "Caminhe até aos Pastéis de Belém e sente-se lá dentro em vez de entrar na fila do take-away. Pastéis quentes, canela por cima, e está feito.",
              durationMin: 40,
            },
          ],
          afternoon: [
            {
              poiSlug: "belem-tower",
              text: "Siga pelos jardins ribeirinhos, passando pelo Padrão dos Descobrimentos, até à Torre de Belém. A vista do exterior é o prémio, salte a fila lenta do interior a menos que tenha reservado o primeiro horário.",
              durationMin: 75,
            },
            {
              poiSlug: "maat",
              text: "Caminhe pela frente ribeirinha para leste até ao MAAT e atravesse o passadiço gratuito da cobertura, o melhor panorama do rio em Belém. Só entre nas galerias se a exposição do momento lhe interessar.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "lx-factory",
              text: "Termine o dia na LX Factory, em Alcântara, espreitando as lojas antes de fecharem e ficando para jantar na antiga zona fabril reconvertida. Só a livraria Ler Devagar já justifica a paragem.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Gulbenkian, Principe Real, Lisboa devagar",
          morning: [
            {
              poiSlug: "gulbenkian-museum",
              text: "Passe a manhã no Museu Calouste Gulbenkian, uma coleção privada compacta que vai de peças egípcias às joias de Lalique. Se for domingo, a entrada é gratuita a partir das 14h, por isso inverta a ordem do dia e venha depois do almoço.",
              durationMin: 120,
            },
            {
              text: "Percorra os lagos e os caminhos de betão do jardim do Gulbenkian antes de sair, são gratuitos e genuinamente calmos. O metro de São Sebastião leva-o de volta ao Rato em dez minutos.",
              durationMin: 40,
            },
          ],
          afternoon: [
            {
              text: "Dedique a tarde ao próprio Príncipe Real: o jardim debaixo do cedro gigante, as concept stores nos antigos palacetes e um café demorado num quiosque. Ao sábado, um mercado biológico enche a praça.",
              durationMin: 120,
            },
            {
              text: "Alternativa para este dia inteiro: apanhe o comboio do Rossio para Sintra, cerca de 40 minutos e 2,40 EUR por trajeto, para o Palácio da Pena e a Quinta da Regaleira. Se escolher Sintra, reserve os bilhetes dos palácios online e saia até às 8h30 para se antecipar aos autocarros de turismo.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Reserve um jantar de despedida no Príncipe Real, onde os bares de vinho natural e as cozinhas portuguesas modernas são o melhor da cidade neste momento. É a refeição em que vale a pena gastar mais.",
              durationMin: 120,
            },
            {
              text: "Tome um último copo num quiosque de miradouro ou numa esplanada de jardim sossegada ali perto. Dorme no bairro, por isso não há regresso a casa com que se preocupar.",
              durationMin: 45,
            },
          ],
        },
      ],
    },
  ],
};

export default lisbonPt;
