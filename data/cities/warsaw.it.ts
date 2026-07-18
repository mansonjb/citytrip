import type { CityData } from "../types";

const warsawIt: CityData = {
  city: {
    slug: "warsaw",
    name: "Varsavia",
    country: "Polonia",
    countrySlug: "poland",
    lat: 52.2297,
    lng: 21.0122,
    tier: 2,
    idealDays: 2,
    durations: [2, 3],
    airportCode: "WAW",
    airportToCenter:
      "L'aeroporto Chopin di Varsavia si trova a circa 8 km a sud del centro, quindi i trasferimenti sono rapidi ed economici. I treni S2 e S3 e l'autobus urbano 175 collegano il terminal al centro e alla città vecchia in circa 20-25 minuti per circa 5 PLN con un biglietto singolo ZTM, valido per tutti i trasporti ZTM della corsa. Un Uber o un taxi costa all'incirca 40-60 PLN e impiega un tempo simile fuori dalle ore di punta. Da tenere presente che l'aeroporto low-cost di Modlin, usato da alcune compagnie economiche, dista circa 40 km a nord della città e si raggiunge con una navetta dedicata, quindi conviene calcolare tempo extra se si atterra lì.",
    centerWalkable: true,
    bestMonths: [5, 6, 7, 9],
    avoidMonths: [1],
    monthlyNotes: {
      1: "Il mese più freddo, con massime vicine a 1C, minime ben sotto lo zero e giornate corte e grigie che spesso portano neve. Le attrazioni sono tranquille e le tariffe degli hotel toccano il minimo dell'anno, e i milk bar e i bar in cantina reggono l'atmosfera quando fa troppo freddo per attardarsi all'aperto; conviene mettere in valigia un abbigliamento da vero inverno.",
      2: "Ancora pieno inverno, intorno ai 2C, con gelo e neve frequenti, quindi è un periodo economico e senza folla per i musei al coperto e il Palazzo della Cultura. Le giornate si allungano un po' e i vodka bar di Praga rendono calda la serata; aspettarsi i prezzi più bassi dell'anno.",
      3: "Le massime salgono verso i 7C e la città inizia a scongelarsi, anche se qualche nevicata precoce e qualche ondata di freddo possono ancora capitare. La folla resta rada e le tariffe si mantengono sotto il picco primaverile, una solida finestra di valore se ci si veste per un tempo mutevole.",
      4: "Primavera vera intorno ai 14C, con la fioritura nel Parco Lazienki e i primi tavolini dei caffè all'aperto lungo Nowy Swiat. I weekend attorno a Pasqua si affollano, quindi conviene prenotare in anticipo uno slot per il POLIN o il Museo dell'Insurrezione di Varsavia; i concerti gratuiti di Chopin al Lazienki non sono ancora iniziati.",
      5: "Uno dei mesi migliori, con massime vicine ai 20C e lunghe serate luminose, e i concerti gratuiti di pianoforte di Chopin cominciano presso il suo monumento nel Parco Lazienki la domenica pomeriggio fino a fine settembre. È il culmine dell'ala di stagione, quindi i prezzi si irrigidiscono e i lungofiume della Vistola si riempiono la sera.",
      6: "Caldo, intorno ai 23C, con le giornate più lunghe dell'anno e le terrazze animate tra Powisle e Praga. I concerti domenicali di Chopin al Lazienki proseguono e il lungofiume prende vita dopo il tramonto; conviene prenotare presto le camere del weekend perché la città è in pieno fermento.",
      7: "Piena estate, con massime intorno ai 24C e serate calde, anche se i temporali continentali attraversano il cielo in certi pomeriggi. I concerti di Chopin si tengono ogni domenica al Lazienki, i beach bar sulla Vistola sono affollati, ed è il periodo più caro e trafficato, quindi conviene fare presto le attrazioni all'aperto.",
      8: "Lo stesso caldo estivo vicino ai 24C, ma l'atmosfera cambia il 1 agosto, quando le sirene antiaeree risuonano in tutta la città alle 17 per l'anniversario dell'Insurrezione di Varsavia e tutti si fermano in strada per un minuto. È un momento commovente e sobrio che vale la pena vivere; il resto del mese resta caldo, vivace e affollato.",
      9: "Massime intorno ai 19C, folla che si dirada dopo la prima settimana e clima comodo per camminare, il che ne fa l'alternativa intelligente all'estate. Gli ultimi concerti gratuiti di Chopin si tengono al Lazienki a metà mese e la luce si fa dorata sul fiume; i prezzi si allentano.",
      10: "Autunno frizzante intorno ai 13C con colori intensi al Lazienki e lungo la scarpata della Vistola. Il numero di turisti cala nettamente dopo metà mese e le tariffe degli hotel seguono; conviene portare uno strato caldo per le serate, che si fanno fredde in fretta una volta tramontato il sole.",
      11: "Grigio, freddo e tranquillo intorno ai 6C, con giornate corte e le prime gelate, finché il mercatino di Natale della città vecchia e le luci non si accendono nell'ultima settimana risollevando l'umore generale. La fine di novembre è un ottimo compromesso per le bancarelle del mercato e il vin brulé senza la ressa dei weekend di dicembre.",
      12: "Il mercatino di Natale della città vecchia anima tutto il mese attorno al Castello Reale e alla Piazza del Mercato, con le luci tese tra le facciate medievali, il vin brulé e i piatti sostanziosi, e richiama forti folle nei weekend. Aspettarsi minime sotto lo zero e possibile neve, e tariffe di dicembre sopra la norma invernale, quindi conviene prenotare presto.",
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
      "Una capitale ricostruita dalle macerie, dove una città vecchia da fiaba si affianca a torri staliniste e grattacieli di vetro.",
    heroIntro:
      "La città vecchia di Varsavia sembra medievale ma è stata ricostruita mattone su mattone dopo che la guerra l'aveva rasa al suolo, così fedelmente da essere oggi patrimonio UNESCO. L'intera città è una storia di distruzione e ricostruzione ostinata, raccontata con forza negli splendidi musei dell'Insurrezione di Varsavia e del POLIN, e ripaga chi cerca sostanza più che bellezza da cartolina. Attorno al nucleo storico si trovano un verde lungofiume, il parco di Chopin con i suoi concerti estivi gratuiti e il cibo economico e sostanzioso dei milk bar. È più estesa e moderna di Cracovia, ma ha una vera profondità, e due o tre giorni bastano per sentirla.",
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
      name: "Città Vecchia (Stare Miasto)",
      lat: 52.2497,
      lng: 21.0122,
      bestFor: ["first-time", "romantic"],
      vibe: "La ricostruita città vecchia UNESCO raccoglie le case dei mercanti dai toni pastello attorno alla Piazza del Mercato e al Castello Reale, tutte rialzate dalle macerie dopo la guerra e convincentemente medievali da percorrere. È la parte più suggestiva della città e la base più ovvia per una prima visita, anche se di giorno attira i gruppi in tour e si svuota nel silenzio dopo la chiusura dei ristoranti. Da scegliere per la cornice da cartolina e la breve camminata fino alla Via Reale.",
      pros: [
        "Ogni attrazione di punta della città vecchia, la Piazza del Mercato, il Castello Reale e il Barbacane, sull'uscio di casa",
        "Serate genuinamente suggestive una volta diradata la folla diurna e con le facciate illuminate",
        "Breve camminata lungo Krakowskie Przedmiescie fino al centro e a Nowy Swiat",
      ],
      cons: [
        "I ristoranti dai prezzi più turistici della città cingono la Piazza del Mercato",
        "Tranquilla e un po' spenta a tarda notte, con pochi residenti del posto",
        "Ciottoli e gradini la rendono scomoda con i bagagli a rotelle",
      ],
    },
    {
      slug: "srodmiescie-centrum",
      citySlug: "warsaw",
      name: "Srodmiescie (Centrum)",
      lat: 52.2319,
      lng: 21.0067,
      bestFor: ["first-time", "family"],
      vibe: "Il centro moderno si sviluppa attorno al Palazzo della Cultura e della Scienza, a Nowy Swiat e ai grattacieli di vetro, ed è la base più pratica e meglio collegata della città. Entrambe le linee della metro e la maggior parte dei tram passano di qui, gli hotel coprono l'intera fascia di prezzo e tutto è a un tram o a una camminata di distanza. Da scegliere per la comodità e il buon rapporto qualità-prezzo più che per il fascino della città vecchia.",
      pros: [
        "I migliori collegamenti dei trasporti in città, con entrambe le linee della metro e la stazione centrale vicine",
        "Gamma completa di hotel a ogni prezzo, più negozi, cinema e ristoranti",
        "Posizione centrale per raggiungere allo stesso modo la città vecchia, il Lazienki e Praga",
      ],
      cons: [
        "Trafficato, pieno di auto e scarso di atmosfera d'altri tempi",
        "La zona proprio accanto al Palazzo della Cultura sa di corporativo e può essere spenta la sera",
        "Meno carattere della città vecchia o dei quartieri sul fiume",
      ],
    },
    {
      slug: "praga",
      citySlug: "warsaw",
      name: "Praga",
      lat: 52.2528,
      lng: 21.0361,
      bestFor: ["nightlife", "local"],
      vibe: "La ruvida e artistica sponda orientale al di là della Vistola sopravvisse in gran parte intatta alla guerra, quindi i suoi caseggiati in mattoni sono la vera Varsavia prebellica, oggi convertiti in studi, bar e gallerie. La via Zabkowska, il Museo del Neon e la distilleria di vodka Koneser ancorano una scena creativa e underground che attira più i residenti che i turisti. Da usare come base per la vita notturna e il carattere più che per la vicinanza alle attrazioni.",
      pros: [
        "La vita notturna più creativa della città, dai bar della via Zabkowska al cortile del Koneser",
        "Vera architettura prebellica scampata alla distruzione della guerra",
        "Il Museo del Neon e una forte scena di gallerie e studi d'artista",
      ],
      cons: [
        "Più grezza a tratti e da percorrere con il normale buonsenso urbano di notte",
        "Un attraversamento del fiume dalla città vecchia e dalle attrazioni principali",
        "Meno hotel tradizionali, più appartamenti e ostelli",
      ],
    },
    {
      slug: "powisle",
      citySlug: "warsaw",
      name: "Powisle",
      lat: 52.2411,
      lng: 21.0289,
      bestFor: ["local", "budget"],
      vibe: "Il quartiere trendy sul fiume si trova sotto la scarpata tra il centro e la Vistola, ed è diventato la giovane Varsavia dei bar studenteschi, dei caffè e dei lungofiume recuperati. Il Centro della Scienza Copernico e i giardini della biblioteca universitaria sono qui, e tutta la fascia prende vita nelle serate tiepide. Da usare come base per un soggiorno locale e conveniente a distanza di camminata dall'acqua e dal centro.",
      pros: [
        "I lungofiume della Vistola e i beach bar sono a una breve camminata in discesa",
        "Bar e caffè rilassati dai prezzi da studenti anziché da turisti",
        "A piedi verso Nowy Swiat, il centro e il Centro della Scienza Copernico",
      ],
      cons: [
        "La scarpata significa una camminata in salita per tornare al centro e alla città vecchia",
        "Meno attrazioni di richiamo nelle strade immediate",
        "Offerta ricettiva più ridotta, per lo più pensioni e appartamenti",
      ],
    },
    {
      slug: "nowy-swiat-krakowskie",
      citySlug: "warsaw",
      name: "Nowy Swiat e Krakowskie Przedmiescie",
      lat: 52.2385,
      lng: 21.0175,
      bestFor: ["romantic", "first-time"],
      vibe: "Il viale della Via Reale corre dalla città vecchia giù attraverso Krakowskie Przedmiescie e Nowy Swiat, fiancheggiato da palazzi, chiese, l'università e i caffè più eleganti della città. È la spina dorsale raffinata di Varsavia, percorribile a piedi da un capo all'altro, e ti mette tra la città vecchia e il centro con il percorso delle panchine di Chopin sotto i piedi. Da usare come base per un soggiorno centrale e romantico con la vita da caffè sull'uscio di casa.",
      pros: [
        "La via più bella della città, con palazzi, caffè e l'università",
        "A metà strada tra la città vecchia e il centro, percorribile a piedi verso entrambi",
        "Le panchine musicali di Chopin e le attrazioni della Via Reale lungo la passeggiata",
      ],
      cons: [
        "Fiancheggiata da caffè e molto ambita, quindi le tariffe delle camere corrono sopra la media cittadina",
        "Trafficata di passaggio pedonale ed eventi, specie nei weekend estivi",
        "Parte del viale chiude al traffico, il che può complicare le discese dal taxi",
      ],
    },
  ],

  pois: [
    {
      slug: "old-town-market-square",
      citySlug: "warsaw",
      name: "Piazza del Mercato della Città Vecchia e la Statua della Sirena",
      lat: 52.2497,
      lng: 21.0122,
      kind: "sight",
      needsBooking: false,
      tip: "La piazza e la sua sirena di bronzo Syrenka, simbolo di Varsavia con spada e scudo, sono gratuite e aperte a ogni ora, ma conviene venire prima delle 10 o dopo le 20 per fotografare le facciate ricostruite senza la folla diurna. Da ricordare che l'intera piazza è stata ricostruita dalle macerie dopo il 1945, quindi meglio leggere le vecchie foto prebelliche esposte nei pressi per cogliere cosa fu rialzato, ed evitare i ristoranti sul lato della piazza, i più cari della città.",
    },
    {
      slug: "royal-castle-castle-square",
      citySlug: "warsaw",
      name: "Castello Reale e Piazza del Castello",
      lat: 52.2478,
      lng: 21.0136,
      kind: "sight",
      needsBooking: false,
      tip: "Il ricostruito Castello Reale ospita sale di rappresentanza restaurate e due Rembrandt, e l'ingresso al percorso principale è gratuito un giorno a settimana, di solito un giorno feriale, quindi conviene controllare il sito del castello prima di andare e aspettarsi una coda in quel giorno. La Colonna di Sigismondo sulla Piazza del Castello di fronte è il più antico monumento laico della città e il classico punto d'incontro; calcolare circa novanta minuti per gli interni del castello.",
    },
    {
      slug: "barbican-city-walls",
      citySlug: "warsaw",
      name: "Il Barbacane e le Mura Medievali",
      lat: 52.2508,
      lng: 21.0106,
      kind: "sight",
      needsBooking: false,
      tip: "Il Barbacane in mattoni rossi e il tratto circostante di mura medievali ricostruite si attraversano gratuitamente e collegano la Città Vecchia alla Città Nuova in un paio di minuti. Meglio passarci in estate, quando musicisti di strada e venditori di artigianato si sistemano lungo le mura, e seguire i bastioni per l'accesso più tranquillo e suggestivo alla Piazza del Mercato da nord.",
    },
    {
      slug: "krakowskie-przedmiescie-royal-route",
      citySlug: "warsaw",
      name: "Krakowskie Przedmiescie e la Via Reale",
      lat: 52.2411,
      lng: 21.0150,
      kind: "experience",
      needsBooking: false,
      tip: "Questo grande viale dalla Piazza del Castello giù fino a Nowy Swiat si percorre gratis ed è fiancheggiato da palazzi, chiese e l'università, e in parte chiude al traffico nei weekend, risultando piacevole a piedi. Meglio cercare le panchine nere di Chopin lungo il percorso, che suonano trenta secondi della sua musica alla pressione di un pulsante, ed entrare nella Chiesa di Santa Croce per vedere il pilastro che custodisce il cuore del compositore.",
    },
    {
      slug: "palace-of-culture-science",
      citySlug: "warsaw",
      name: "Palazzo della Cultura e della Scienza",
      lat: 52.2318,
      lng: 21.0060,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Conviene comprare un biglietto per la terrazza panoramica al 30 piano, aperta ogni giorno e con la vista più ampia sull'intera città, e salire verso il tramonto per la luce migliore. La torre degli anni Cinquanta fu un dono di Stalin verso cui i polacchi provano ancora ambivalenza, e la gente del posto scherza dicendo che offre la vista migliore proprio perché è l'unico posto da cui non si vede il palazzo stesso; le code si formano in estate, quindi meglio andarci presto o tardi.",
    },
    {
      slug: "lazienki-park",
      citySlug: "warsaw",
      name: "Parco Lazienki e il Palazzo sull'Isola",
      lat: 52.2149,
      lng: 21.0355,
      kind: "park",
      needsBooking: false,
      tip: "Questo è il parco più grandioso della città, gratuito, con pavoni, il Palazzo sull'Isola e l'enorme monumento a Chopin, e la domenica pomeriggio da metà maggio a fine settembre i concerti gratuiti di pianoforte all'aperto suonano presso la statua a mezzogiorno e alle 16. Meglio portare una coperta e arrivare presto per un posto vicino al monumento, e abbinare la visita agli interni del palazzo, che richiedono un biglietto a parte.",
    },
    {
      slug: "wilanow-palace",
      citySlug: "warsaw",
      name: "Palazzo di Wilanow",
      lat: 52.1650,
      lng: 21.0905,
      kind: "sight",
      needsBooking: false,
      tip: "Spesso chiamata la Versailles polacca, questa residenza reale barocca con giardini all'italiana si trova a circa 10 km a sud del centro e si raggiunge con l'autobus 116 o 180 in circa 40 minuti, quindi conviene calcolare mezza giornata. L'ingresso alle sale del palazzo è gratuito un giorno a settimana, di solito il giovedì, e i giardini richiedono una piccola tariffa a parte; meglio andarci al mattino per battere i pullman e vedere il roseto in estate.",
    },
    {
      slug: "polin-museum",
      citySlug: "warsaw",
      name: "Museo POLIN della Storia degli Ebrei Polacchi",
      lat: 52.2495,
      lng: 20.9930,
      kind: "museum",
      needsBooking: true,
      tip: "Conviene prenotare online un biglietto a orario, dato che la mostra principale che copre mille anni di vita ebraica polacca è popolare e gli slot d'ingresso si esauriscono nei weekend. L'edificio sorge sul terreno dell'ex ghetto di guerra di fronte al monumento agli Eroi del Ghetto, e la mostra permanente è gratuita un giorno a settimana, di solito il giovedì; calcolare almeno due o tre ore all'interno.",
    },
    {
      slug: "warsaw-rising-museum",
      citySlug: "warsaw",
      name: "Museo dell'Insurrezione di Varsavia",
      lat: 52.2325,
      lng: 20.9810,
      kind: "museum",
      needsBooking: true,
      tip: "Questo museo immersivo sull'insurrezione del 1944 contro l'occupazione nazista è imprescindibile e si affolla molto, quindi meglio prenotare online un biglietto a orario e arrivare all'apertura; è gratuito il lunedì, giorno anche più affollato. Dedicargli almeno due ore, non perdere il film in 3D della città distrutta o la fogna replica in cui si striscia, e ricordare che è a dieci minuti a piedi o a un breve tragitto in tram a ovest del centro.",
    },
    {
      slug: "praga-neon-koneser",
      citySlug: "warsaw",
      name: "Praga: Museo del Neon e Koneser",
      lat: 52.2533,
      lng: 21.0430,
      kind: "experience",
      needsBooking: false,
      tip: "Si attraversa la Vistola verso Praga per il Museo del Neon, che raccoglie insegne luminose dell'era della Guerra Fredda in un'ex fabbrica ed è aperto ogni giorno con un piccolo biglietto, e per il complesso Koneser, una distilleria di vodka in mattoni rossi trasformata in cortile di bar, negozi e Museo della Vodka Polacca. Meglio venirci nel tardo pomeriggio verso sera, quando i bar della via Zabkowska si riempiono, e trattarlo come mezza giornata lontano dal centro turistico.",
    },
    {
      slug: "vistula-copernicus-centre",
      citySlug: "warsaw",
      name: "I Lungofiume della Vistola e il Centro della Scienza Copernico",
      lat: 52.2415,
      lng: 21.0287,
      kind: "experience",
      needsBooking: true,
      tip: "I recuperati lungofiume sotto Powisle sono gratuiti e al meglio la sera, quando beach bar e chioschi gastronomici fiancheggiano l'acqua e la fontana multimediale offre giochi di luce nelle notti dei weekend estivi. Accanto a essi il Centro della Scienza Copernico è un museo interattivo eccellente per le famiglie ma che va esaurito, quindi conviene prenotare online in anticipo un biglietto a orario e calcolare un paio d'ore all'interno.",
    },
    {
      slug: "milk-bar-bar-mleczny",
      citySlug: "warsaw",
      name: "Un Milk Bar (Bar Mleczny)",
      lat: 52.2360,
      lng: 21.0170,
      kind: "food",
      needsBooking: false,
      tip: "Queste mense senza fronzoli dell'era comunista servono ancora pierogi, zuppe e cotolette per pochi euro, e un piatto completo raramente supera i 25 PLN, il che ne fa il pasto vero più economico della città. Il Bar Prasowy su Marszalkowska è un noto sopravvissuto; si ordina al banco, aspettarsi un menu solo in polacco e un servizio comodo per i contanti, e andarci a pranzo quando il cibo è più fresco e il ricambio più veloce.",
    },
    {
      slug: "zelazowa-wola-daytrip",
      citySlug: "warsaw",
      name: "Gita a Zelazowa Wola o Palmiry",
      lat: 52.2510,
      lng: 20.4200,
      kind: "experience",
      needsBooking: false,
      tip: "La casa natale di Chopin a Zelazowa Wola, a circa 50 km a ovest, è una dimora signorile con parco e recital di pianoforte gratuiti la domenica in estate, raggiungibile con un autobus regionale da Varsavia in circa un'ora e mezza. In alternativa Palmiry, nella foresta di Kampinos a nord della città, è il sito e il cimitero delle esecuzioni di massa di guerra e una mezza giornata sobria e commovente; entrambe sono fughe tranquille dalla capitale, quindi meglio controllare gli orari degli autobus di ritorno prima di partire.",
    },
  ],

  itineraries: [
    {
      citySlug: "warsaw",
      days: 2,
      summary:
        "Due giorni bastano per l'essenza di Varsavia se si programmano in anticipo i musei a biglietto. La ricostruita Città Vecchia è piccola e si possono percorrere la Piazza del Mercato, il Castello Reale, il Barbacane e la Sirena in un paio d'ore, quindi il tempo va davvero sui musei e sul più ampio centro moderno. Conviene prenotare online uno slot a orario per il Museo dell'Insurrezione di Varsavia e il POLIN, perché entrambi sono imprescindibili, immersivi e affollati, e dedicare almeno due ore a ciascuno. Meglio fare base nella Città Vecchia o sulla Via Reale così da percorrere a piedi la spina dorsale storica, poi usare i tram e le due linee della metro per il resto. Il primo giorno prende la Città Vecchia, la Via Reale e la terrazza panoramica del Palazzo della Cultura; il secondo è la storia densa e appagante al Museo dell'Insurrezione di Varsavia e al POLIN, poi il Parco Lazienki nel pomeriggio, con i suoi concerti gratuiti di Chopin se si visita di domenica in estate. Ciò a cui si rinuncia a questo ritmo è Praga e Wilanow. Per quelle, si prenda la versione da tre giorni.",
      stayNeighborhoodSlug: "old-town-stare-miasto",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "La Città Vecchia, la Via Reale e la vista sulla città",
          morning: [
            {
              poiSlug: "old-town-market-square",
              text: "Si comincia sulla Piazza del Mercato della Città Vecchia prima che arrivino i gruppi in tour, con la sirena di bronzo Syrenka e le facciate pastello ricostruite tutte per sé. Meglio leggere le foto prebelliche nei pressi per cogliere che l'intera piazza fu ricostruita dalle macerie dopo il 1945.",
              durationMin: 45,
            },
            {
              poiSlug: "royal-castle-castle-square",
              text: "Si cammina fino alla Piazza del Castello e si visita il ricostruito Castello Reale, con le sue sale di rappresentanza restaurate e due Rembrandt, calcolando circa novanta minuti. Conviene controllare il sito del castello per il giorno di ingresso gratuito settimanale se si vuole risparmiare il biglietto, e aspettarsi una coda se ci si va allora.",
              durationMin: 105,
            },
            {
              poiSlug: "barbican-city-walls",
              text: "Si esce con un giro attraverso il Barbacane in mattoni rossi e lungo le mura medievali ricostruite verso la Città Nuova, che è gratuito e richiede solo pochi minuti. In estate musicisti di strada e venditori di artigianato fiancheggiano i bastioni.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "milk-bar-bar-mleczny",
              text: "Pausa per un pranzo economico e sostanzioso in un milk bar, dove un piatto di pierogi e zuppa raramente supera i 25 PLN. Si ordina al banco, aspettarsi un menu solo in polacco, e andarci a pranzo quando il ricambio è più veloce.",
              durationMin: 60,
            },
            {
              poiSlug: "krakowskie-przedmiescie-royal-route",
              text: "Si percorre la Via Reale giù per Krakowskie Przedmiescie oltre i palazzi, le chiese e l'università, premendo le panchine nere di Chopin per i loro trenta secondi di musica. Meglio entrare nella Chiesa di Santa Croce per vedere il pilastro che custodisce il cuore del compositore.",
              durationMin: 75,
            },
            {
              poiSlug: "palace-of-culture-science",
              text: "Si prosegue fino al Palazzo della Cultura e della Scienza e si sale alla terrazza panoramica del 30 piano per la vista più ampia sulla città. La torre stalinista degli anni Cinquanta è un dono verso cui i polacchi provano ancora sentimenti contrastanti; meglio salire verso il tramonto per la luce migliore.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              text: "Si torna verso Nowy Swiat per cena, scegliendo una via laterale rispetto al viale principale dove i prezzi calano, poi si risale a piedi la Via Reale illuminata fino alla Città Vecchia. La piazza è al suo meglio illuminata dai riflettori e tranquilla dopo che le folle diurne se ne sono andate.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "La storia della guerra e il parco di Chopin",
          morning: [
            {
              poiSlug: "warsaw-rising-museum",
              text: "Si sfrutta lo slot prenotato al Museo dell'Insurrezione di Varsavia all'apertura, prima che si formi la folla, e gli si dedicano almeno due ore. Non perdere il film in 3D della città distrutta o la fogna replica in cui si striscia; è a un tragitto in tram di dieci minuti a ovest del centro.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "polin-museum",
              text: "Ci si sposta al POLIN, il Museo della Storia degli Ebrei Polacchi, con il biglietto a orario, per la sua mostra principale di mille anni sul terreno dell'ex ghetto. Calcolare due o tre ore e fermarsi al monumento agli Eroi del Ghetto di fronte all'ingresso.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "lazienki-park",
              text: "Si chiude nel Parco Lazienki, il più grandioso della città, con i suoi pavoni, il Palazzo sull'Isola e l'enorme monumento a Chopin. Se è una domenica d'estate, meglio farlo coincidere con il concerto gratuito di pianoforte all'aperto presso la statua alle 16 e portare qualcosa su cui sedersi.",
              durationMin: 120,
            },
            {
              text: "Si conclude con cena di ritorno verso il centro o Nowy Swiat, oppure, se la serata è tiepida, si scende a piedi fino ai lungofiume della Vistola per un drink in riva all'acqua tra i beach bar.",
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
        "Tre giorni sono la misura comoda per Varsavia e permettono di fare i pesanti musei di storia della guerra a un ritmo giusto anziché uno dietro l'altro. La Città Vecchia è piccola e si percorre in fretta, quindi il tempo vero va sul Museo dell'Insurrezione di Varsavia e il POLIN, sul Palazzo della Cultura e sul Parco Lazienki, che da soli richiedono un intero secondo giorno. Il terzo giorno in più è ciò che apre la città: si attraversa la Vistola verso la ruvida e creativa Praga per il Museo del Neon e la distilleria Koneser, si esce fino al barocco Palazzo di Wilanow, oppure si dà semplicemente ai musei della guerra lo spazio che meritano. Meglio fare base sulla Via Reale o nella Città Vecchia per il nucleo storico, poi appoggiarsi ai tram e alle due linee della metro per le attrazioni più lontane. Conviene prenotare online i biglietti a orario per il Museo dell'Insurrezione di Varsavia, il POLIN e il Centro della Scienza Copernico, dato che tutti e tre si esauriscono in stagione. Il primo giorno è la Città Vecchia e la Via Reale; il secondo sono i musei e il Lazienki; il terzo è Praga, Wilanow e il lungofiume a ritmo rilassato.",
      stayNeighborhoodSlug: "nowy-swiat-krakowskie",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "La Città Vecchia, la Via Reale e la vista sulla città",
          morning: [
            {
              poiSlug: "old-town-market-square",
              text: "Si inizia sulla Piazza del Mercato della Città Vecchia presto, con la sirena di bronzo Syrenka e le facciate ricostruite prima delle folle diurne. Meglio leggere le foto prebelliche nei pressi per capire che l'intera piazza fu ricostruita dalle macerie dopo il 1945.",
              durationMin: 45,
            },
            {
              poiSlug: "royal-castle-castle-square",
              text: "Si visita il ricostruito Castello Reale dalla Piazza del Castello, con le sue sale di rappresentanza e due Rembrandt, calcolando circa novanta minuti. La Colonna di Sigismondo davanti è il più antico monumento laico della città e il classico punto d'incontro.",
              durationMin: 105,
            },
            {
              poiSlug: "barbican-city-walls",
              text: "Si esce attraverso il Barbacane e lungo le mura medievali ricostruite verso la Città Nuova, gratis e veloce, poi si torna nella piazza da nord per il suo accesso più suggestivo.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "milk-bar-bar-mleczny",
              text: "Pranzo economico in un milk bar, dove pierogi, zuppa e una cotoletta raramente superano i 25 PLN. Si ordina al banco e si va a mezzogiorno quando il cibo è più fresco e la coda scorre più in fretta.",
              durationMin: 60,
            },
            {
              poiSlug: "krakowskie-przedmiescie-royal-route",
              text: "Si percorre la Via Reale giù per Krakowskie Przedmiescie oltre i palazzi, le chiese e l'università, premendo le panchine di Chopin lungo il cammino. Meglio infilarsi nella Chiesa di Santa Croce per vedere il pilastro che custodisce il cuore del compositore.",
              durationMin: 75,
            },
            {
              poiSlug: "palace-of-culture-science",
              text: "Si chiude il pomeriggio al Palazzo della Cultura e della Scienza e si sale alla terrazza panoramica del 30 piano per la vista più ampia sulla città. Meglio andarci verso il tramonto per la luce; la torre stalinista resta un monumento verso cui i polacchi provano sentimenti contrastanti.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              text: "Cena attorno a Nowy Swiat, scegliendo una via laterale dove i prezzi si allentano, poi si risale a piedi il viale illuminato verso la Città Vecchia. La Piazza del Mercato illuminata dai riflettori è più tranquilla e al suo meglio una volta andati via i gitanti.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "La storia della guerra e il parco di Chopin",
          morning: [
            {
              poiSlug: "warsaw-rising-museum",
              text: "Si sfrutta lo slot prenotato al Museo dell'Insurrezione di Varsavia all'apertura e gli si dedicano almeno due ore; è immersivo, imprescindibile e affollato. Meglio vedere il film in 3D della città distrutta e strisciare nella fogna replica; si trova a un breve tragitto in tram a ovest del centro.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "polin-museum",
              text: "Ci si sposta al POLIN con il biglietto a orario per la sua mostra principale di mille anni sul terreno dell'ex ghetto, calcolando due o tre ore. Meglio fermarsi al monumento agli Eroi del Ghetto di fronte all'ingresso prima o dopo.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "lazienki-park",
              text: "Si trascorre il tardo pomeriggio nel Parco Lazienki con i suoi pavoni, il Palazzo sull'Isola e il monumento a Chopin. Di domenica in estate, meglio cogliere il concerto gratuito di pianoforte all'aperto presso la statua alle 16; portare una coperta e arrivare presto per un posto.",
              durationMin: 120,
            },
            {
              text: "Si conclude con cena di ritorno verso il centro, oppure si scende a piedi ai lungofiume della Vistola per un drink tra i beach bar in riva all'acqua se il tempo regge.",
              durationMin: 105,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Praga, Wilanow e il lungofiume",
          morning: [
            {
              poiSlug: "wilanow-palace",
              text: "Si va a sud fino al Palazzo di Wilanow, la Versailles polacca barocca con i suoi giardini all'italiana, con l'autobus 116 o 180, calcolando circa 40 minuti per tratta. L'ingresso alle sale è gratuito un giorno a settimana, di solito il giovedì; meglio andarci al mattino per battere i pullman.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "praga-neon-koneser",
              text: "Si attraversa la Vistola verso Praga per il Museo del Neon delle insegne luminose della Guerra Fredda e il cortile della distilleria Koneser, sede di bar, negozi e Museo della Vodka Polacca. Questa sponda orientale sopravvisse in gran parte alla guerra, quindi i suoi caseggiati in mattoni sono la vera Varsavia prebellica.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "vistula-copernicus-centre",
              text: "Si torna sulla sponda occidentale per i lungofiume della Vistola sotto Powisle, al meglio la sera quando aprono i beach bar e i chioschi gastronomici e la fontana multimediale suona nelle notti dei weekend estivi. Le famiglie possono incastrarci un paio d'ore prenotate al Centro della Scienza Copernico.",
              durationMin: 120,
            },
            {
              text: "Ultima cena a Powisle o su Nowy Swiat, tenendola facile. Se c'è un volo presto, da ricordare che l'aeroporto Chopin è a soli 8 km a sud, circa 20-25 minuti sul treno S2 o S3 o sull'autobus 175 per circa 5 PLN.",
              durationMin: 105,
            },
          ],
        },
      ],
    },
  ],
};

export default warsawIt;
