import type { CityData } from "../types";

const budapestIt: CityData = {
  city: {
    slug: "budapest",
    name: "Budapest",
    country: "Ungheria",
    countrySlug: "hungary",
    lat: 47.4979,
    lng: 19.0402,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "BUD",
    airportToCenter:
      "Il bus espresso aeroportuale 100E va diretto a Deak Ferenc ter in centro, circa 40 minuti per circa 2,20 EUR (2200 HUF). Compra il biglietto dedicato 100E dalla macchinetta alla fermata; un normale biglietto a corsa singola non è valido su questa linea.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [8],
    monthlyNotes: {
      1: "Freddo e spesso grigio con massime intorno ai 2C e minime sotto lo zero, ma i bagni termali sono al loro massimo incanto con il vapore che sale dalle piscine all'aperto. Le tariffe degli hotel restano al minimo annuale e le grandi attrazioni sono quasi vuote una volta che i mercatini di Natale chiudono il 1 gennaio.",
      2: "Ancora gelido, tranquillo ed economico, l'ultimo mese pieno prima che tornino i prezzi di primavera. I bagni Szechenyi e Gellert sono il rifugio ovvio; metti in valigia per minime intorno ai meno 2C e poche ore di luce.",
      3: "Le giornate salgono verso i 12C e nei wine bar e nelle cantine compaiono i primi eventi enologici di primavera. Le folle restano leggere per gran parte del mese e le camere sono decisamente più economiche che da aprile in poi.",
      4: "Primavera vera intorno ai 17C, fioriture sull'Isola Margherita e le prime terrazze di battelli e ruin bar che riaprono. Il weekend di Pasqua diventa affollato, quindi prenota in anticipo la visita al Parlamento se le tue date lo comprendono.",
      5: "Uno dei due mesi migliori, con massime vicine ai 22C, luce lunga e terrazze piene lungo il Danubio. I prezzi raggiungono i massimi di media stagione e la città si riempie per il weekend di Pentecoste, quindi prenota le camere in anticipo.",
      6: "Caldo intorno ai 26C con serate lunghe e le terrazze di vino e birra artigianale in piena attività. Le folle crescono in modo costante ma restano sotto il picco di agosto; vacci prima che arrivi il vero caldo.",
      7: "Caldo intorno ai 29C e affollato, con le piscine all'aperto e la brezza del Danubio a rinfrescare. Fai presto le attrazioni esposte al sole come la collina Gellert e il Bastione dei Pescatori, poi ritirati in un bagno o su una terrazza all'ombra nel pomeriggio.",
      8: "Il mese da evitare: picco di caldo a 29C, le folle più alte dell'anno e il Sziget Festival che sbarca sull'Isola Obuda a metà agosto, il che inonda la città di 400.000 visitatori e fa salire le tariffe delle camere. Se vieni ora, prenota con largo anticipo e pianifica pomeriggi al chiuso o lungo il fiume.",
      9: "Uno dei mesi migliori, con massime intorno ai 24C, folle che si diradano dopo la prima settimana ed eventi enologici della vendemmia nelle cantine. I prezzi calano; questa è l'alternativa intelligente all'estate.",
      10: "Giornate fresche a 17C e forti colori autunnali sulla collina Gellert e sull'Isola Margherita. I numeri dei turisti calano dopo metà mese e le tariffe degli hotel seguono, mentre i bagni sono particolarmente piacevoli man mano che l'aria si raffredda.",
      11: "Grigio e freddo con massime intorno agli 8C, il tratto più tranquillo dell'anno finché non aprono i mercatini di Natale a fine novembre a Vorosmarty ter e alla Basilica di Santo Stefano. La fine di novembre è un momento ideale: piena atmosfera di mercato senza la densità di dicembre.",
      12: "I mercatini di Natale a Vorosmarty ter e davanti alla Basilica di Santo Stefano vanno da fine novembre fino a inizio gennaio e attirano folle intense nei weekend, con la piazza della basilica che aggiunge uno spettacolo di luci e una pista di pattinaggio. Aspettati minime sotto lo zero, vin brulè ovunque e tariffe di dicembre ben sopra la norma invernale.",
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
    tagline: "Bagni termali, grandi viali, ruin bar, prezzi bassi.",
    heroIntro:
      "Budapest si divide lungo il Danubio tra la collinare Buda con il suo castello e il lato Pest, piatto e maestoso, dove si svolge gran parte della vita. È una delle capitali classiche più economiche d'Europa, e i bagni termali, i ruin bar e il lungofiume del Parlamento le danno un mix che nessun'altra città eguaglia. Tre giorni coprono l'essenziale a ritmo umano; il trucco è visitare presto i belvedere esposti al sole e tenere i bagni per quando le gambe cedono.",
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
      name: "Belvaros (V distretto)",
      lat: 47.4979,
      lng: 19.0513,
      bestFor: ["first-time", "romantic"],
      vibe: "Il cuore rivierasco di Pest, che avvolge il Parlamento, la Basilica di Santo Stefano e la via pedonale dello shopping Vaci utca. È il distretto più curato e centrale, raggiungibile a piedi da quasi tutto sul lato Pest e a un ponte dal Castello di Buda. Trafficato e un po' formale di giorno, si calma dopo la chiusura dei negozi.",
      pros: [
        "Il Parlamento, la Basilica e il Ponte delle Catene tutti a breve distanza a piedi",
        "La più ampia scelta di hotel e facile accesso alla metro su tutte e tre le linee",
        "Nessuno spostamento necessario per un viaggio di 2 giorni",
      ],
      cons: [
        "I ristoranti lungo Vaci utca sono trappole per turisti sovrapprezzate",
        "L'atmosfera meno locale di qualsiasi distretto centrale",
        "Le tariffe delle camere corrono del 20-30 percento sopra i distretti esterni",
      ],
    },
    {
      slug: "jewish-quarter",
      citySlug: "budapest",
      name: "Quartiere ebraico (Erzsebetvaros, VII distretto)",
      lat: 47.4979,
      lng: 19.0662,
      bestFor: ["nightlife", "local", "budget"],
      vibe: "Il vecchio quartiere ebraico trasformato in motore della vita notturna, sede della Sinagoga di via Dohany e dei ruin bar nei cortili cadenti. Di giorno è street art, caffè di terza ondata e panetterie kosher; dopo il buio è la scena di bar più densa della città. Centrale, economico e rumoroso nel modo giusto.",
      pros: [
        "Szimpla Kert e tutta la scena dei ruin bar sulla soglia di casa",
        "Il miglior cibo informale e caffè della città a prezzi locali",
        "Dieci minuti a piedi dalla Basilica e dal fiume",
      ],
      cons: [
        "Rumore dei bar sulle strade principali fino alle prime ore nei weekend",
        "Alcuni isolati sono trasandati e a metà ristrutturazione",
        "Non è il distretto per una serata presto a letto o un soggiorno tranquillo",
      ],
    },
    {
      slug: "castle-district",
      citySlug: "budapest",
      name: "Distretto del Castello (Var, I distretto)",
      lat: 47.4967,
      lng: 19.0347,
      bestFor: ["romantic", "first-time"],
      vibe: "La collina acciottolata sul lato di Buda che ospita il Castello di Buda, la chiesa di Mattia e il Bastione dei Pescatori. Si svuota completamente una volta che i visitatori in giornata se ne vanno nel tardo pomeriggio, e le viste serali su Pest sono le migliori della città. Alloggiare qui significa avere le attrazioni sul lato del castello tutte per sé prima che arrivino le folle.",
      pros: [
        "Castello di Buda, chiesa di Mattia e Bastione dei Pescatori a piedi",
        "Serate calme e genuinamente suggestive dopo che le folle se ne vanno",
        "Il più bel panorama al tramonto sul Danubio e sul Parlamento",
      ],
      cons: [
        "Le ripide strade acciottolate sono faticose con bagagli o passeggini",
        "Pochi supermercati e ristorazione informale limitata sulla collina",
        "Si attraversa il fiume per gran parte della vita notturna e delle necessità quotidiane",
      ],
    },
    {
      slug: "ujlipotvaros",
      citySlug: "budapest",
      name: "Ujlipotvaros (XIII distretto)",
      lat: 47.5147,
      lng: 19.0509,
      bestFor: ["local", "family", "romantic"],
      vibe: "Una griglia residenziale e alberata appena a nord del Parlamento, tutta palazzi Bauhaus, strade fiancheggiate da alberi e bistrò di quartiere. È qui che vivono davvero i locali che possono scegliere, e la scena gastronomica e dei caffè lo rispecchia. Il centro è a 15 minuti a piedi o due fermate di tram, e l'Isola Margherita è sulla soglia di casa.",
      pros: [
        "Il miglior cibo locale e i caffè a prezzi onesti, non da turisti",
        "Strade tranquille, pianeggianti e adatte ai passeggini e la passeggiata sul fiume",
        "L'Isola Margherita e il Parlamento entrambi a breve distanza a piedi",
      ],
      cons: [
        "Cammini o prendi il tram per gran parte delle attrazioni principali, anche se è vicino",
        "Tranquillo di notte se vuoi la vita notturna sulla soglia di casa",
      ],
    },
    {
      slug: "jozsefvaros",
      citySlug: "budapest",
      name: "Jozsefvaros (VIII distretto)",
      lat: 47.4889,
      lng: 19.0708,
      bestFor: ["budget", "local"],
      vibe: "Un distretto grande e misto dietro il Grande Boulevard, ruvido ai margini ma in rapida gentrificazione intorno al quartiere dei musei e al Corvin Quarter. Ospita il Museo Nazionale Ungherese e alcune delle camere semi-centrali più economiche della città. Irregolare isolato per isolato ma in rapido miglioramento e ben collegato.",
      pros: [
        "Le tariffe delle camere più basse a distanza pedonale dal centro",
        "Il Museo Nazionale Ungherese e le maestose facciate del Quartiere dei Palazzi",
        "Forti collegamenti di metro e tram in tutto il distretto",
      ],
      cons: [
        "Alcuni isolati verso il bordo esterno sembrano ancora trascurati",
        "Meno attrazioni dei distretti sul fiume",
        "La qualità delle strade varia nettamente da un isolato all'altro",
      ],
    },
  ],

  pois: [
    {
      slug: "szechenyi-chain-bridge",
      citySlug: "budapest",
      name: "Ponte delle Catene Szechenyi",
      lat: 47.4988,
      lng: 19.0435,
      kind: "sight",
      needsBooking: false,
      tip: "Percorrilo all'imbrunire quando i leoni e l'intera campata si illuminano e il castello risplende dietro; l'estremità Pest vicino a Roosevelt ter dà la migliore foto verso Buda. È gratuito e aperto 24 ore su 24, quindi attraversalo a tarda ora quando il viavai diurno si è dissolto.",
    },
    {
      slug: "hungarian-parliament",
      citySlug: "budapest",
      name: "Parlamento ungherese",
      lat: 47.5072,
      lng: 19.0456,
      kind: "sight",
      needsBooking: true,
      tip: "L'interno è visitabile solo con visita guidata e le fasce in lingua inglese vanno esaurite con giorni di anticipo in alta stagione, quindi compra online molto prima di arrivare invece di scommettere sulla biglietteria. Scegli una fascia mattutina, e riprendi l'esterno dall'argine di Batthyany ter sul lato di Buda per l'intera facciata sul fiume.",
    },
    {
      slug: "buda-castle",
      citySlug: "budapest",
      name: "Castello di Buda",
      lat: 47.496,
      lng: 19.0397,
      kind: "sight",
      needsBooking: false,
      tip: "I cortili, i bastioni e le terrazze sono gratuiti e aperti tutto il giorno, quindi paghi solo se entri nella Galleria Nazionale o nel Museo di Storia all'interno. Evita la coda della funicolare dal Ponte delle Catene e sali invece per le scale del giardino Varkert Bazar o prendi il bus 16, entrambi più veloci ed economici.",
    },
    {
      slug: "fishermans-bastion",
      citySlug: "budapest",
      name: "Bastione dei Pescatori",
      lat: 47.5025,
      lng: 19.0347,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Le terrazze inferiori sono gratuite e le piccole torri superiori fanno pagare solo di giorno, quindi arriva prima delle 9 e percorri il livello superiore gratis con la vista sul Parlamento tutta per te. Questo è il panorama da cartolina di Budapest; l'alba e la tarda sera sono le due finestre senza folla.",
    },
    {
      slug: "matthias-church",
      citySlug: "budapest",
      name: "Chiesa di Mattia",
      lat: 47.5019,
      lng: 19.0343,
      kind: "sight",
      needsBooking: true,
      tip: "Il tetto di tegole colorate è il richiamo e puoi ammirarlo gratis dall'esterno, ma l'interno con le pareti dipinte richiede un biglietto, quindi compra online per saltare la piccola coda. Si trova proprio accanto al Bastione dei Pescatori, quindi abbina i due e visitali all'apertura prima che arrivino i gruppi turistici.",
    },
    {
      slug: "st-stephens-basilica",
      citySlug: "budapest",
      name: "Basilica di Santo Stefano",
      lat: 47.5008,
      lng: 19.054,
      kind: "sight",
      needsBooking: false,
      tip: "L'ingresso alla navata chiede solo un'offerta suggerita, ma la terrazza panoramica della cupola fa pagare una piccola tariffa e ne vale la pena, raggiungibile con un ascensore più una breve salita a piedi. Sali nell'ultima ora prima della chiusura per una luce più morbida sui tetti di Pest e meno persone in cima.",
    },
    {
      slug: "szechenyi-baths",
      citySlug: "budapest",
      name: "Bagni termali Szechenyi",
      lat: 47.5186,
      lng: 19.0817,
      kind: "experience",
      needsBooking: true,
      tip: "Costa meno nei giorni feriali che nei weekend, e comprare online con una cabina (non solo un armadietto) evita la coda all'ingresso e ti dà un posto privato dove cambiarti. Porta il tuo asciugamano e le ciabatte per evitare le tariffe di noleggio, e vai al mattino presto o dopo le 17 per schivare la calca di mezzogiorno nelle piscine all'aperto.",
    },
    {
      slug: "gellert-hill",
      citySlug: "budapest",
      name: "Collina Gellert e belvedere della Cittadella",
      lat: 47.4869,
      lng: 19.0447,
      kind: "viewpoint",
      needsBooking: false,
      tip: "La salita dall'estremità di Buda del Ponte Elisabetta richiede circa 25 minuti e ti ricompensa con il panorama più ampio su entrambe le rive e sulla Statua della Libertà. Vacci al mattino per foto di Pest senza controluce, porta acqua in estate poiché il sentiero è totalmente esposto al sole, e il belvedere in sé è gratuito.",
    },
    {
      slug: "central-market-hall",
      citySlug: "budapest",
      name: "Grande Mercato Coperto",
      lat: 47.4869,
      lng: 19.0586,
      kind: "food",
      needsBooking: false,
      tip: "Vieni prima di mezzogiorno per frutta, verdura e paprika a prezzi da piano terra; i banchi di cibo al piano superiore sono più cari e pensati per i turisti, quindi mangia i langos in un posto locale più piccolo. Chiude presto il sabato pomeriggio e resta chiuso la domenica, quindi calcola la visita e paga con carta dato che non tutti i banchi la accettano.",
    },
    {
      slug: "dohany-street-synagogue",
      citySlug: "budapest",
      name: "Sinagoga di via Dohany",
      lat: 47.4956,
      lng: 19.0608,
      kind: "sight",
      needsBooking: true,
      tip: "Questa è la sinagoga più grande d'Europa e l'ingresso comprende il giardino commemorativo e il museo, ma i biglietti sono a orario e si esauriscono a mezzogiorno in alta stagione, quindi prenota una fascia online al mattino presto. Chiude il sabato per lo Shabbat e nelle festività ebraiche, quindi controlla la data, e vesti con le spalle coperte.",
    },
    {
      slug: "szimpla-kert",
      citySlug: "budapest",
      name: "Szimpla Kert (Ruin Bar)",
      lat: 47.4977,
      lng: 19.0637,
      kind: "experience",
      needsBooking: false,
      tip: "Il ruin bar originale si gode meglio prima delle 20, quando puoi davvero cogliere i cortili di arte-spazzatura senza la calca notturna e il coperto. La domenica mattina si trasforma in un mercato contadino con un'atmosfera molto diversa e calma, che è il modo in cui lo visitano i locali.",
    },
    {
      slug: "shoes-on-the-danube",
      citySlug: "budapest",
      name: "Memoriale delle Scarpe sul Danubio",
      lat: 47.5041,
      lng: 19.0447,
      kind: "sight",
      needsBooking: false,
      tip: "Le sessanta scarpe di ferro sull'argine commemorano gli ebrei fucilati nel fiume nel 1944, e richiede solo dieci minuti in silenzio ma non va vissuto in fretta. Si trova sulla passeggiata di Pest tra il Ponte delle Catene e il Parlamento, quindi inseriscilo in quella camminata sul fiume invece di fare un viaggio apposta.",
    },
    {
      slug: "vaci-street",
      citySlug: "budapest",
      name: "Via Vaci",
      lat: 47.4934,
      lng: 19.0537,
      kind: "sight",
      needsBooking: false,
      tip: "Prendila come una passeggiata di 15 minuti, non come un posto dove mangiare o fare acquisti; i caffè qui fanno pagare il doppio e i chioschi di cambio valuta su di essa danno alcuni dei tassi peggiori della città. La valuta è il fiorino, non l'euro, quindi paga in HUF, usa un bancomat di una banca vera e ignora del tutto gli sportelli di cambio in strada.",
    },
    {
      slug: "margaret-island",
      citySlug: "budapest",
      name: "Isola Margherita",
      lat: 47.5266,
      lng: 19.0475,
      kind: "park",
      needsBooking: false,
      tip: "Questo parco su un'isola senza auto in mezzo al Danubio è gratuito e si gode meglio a piedi o in bici a noleggio, con una fontana musicale vicino all'estremità meridionale che parte allo scoccare dell'ora. Vieni nel tardo pomeriggio, cammina dalla fermata del tram del Ponte Margherita e cogli lo spettacolo di luci serale della fontana se resti oltre l'imbrunire in estate.",
    },
  ],

  itineraries: [
    {
      citySlug: "budapest",
      days: 2,
      summary:
        "Due giorni bastano per le attrazioni di richiamo di Budapest se resti in centro e parti presto, ma sfiorerai solo il lato locale e i bagni. Il nucleo si divide nettamente per fiume: la riva di Pest ospita il Parlamento, la Basilica, il Quartiere ebraico e il Grande Mercato, mentre la collina di Buda ospita il castello, la chiesa di Mattia e il Bastione dei Pescatori, tutti a un ponte di distanza. Sistemati a Belvaros così entrambe le mattine iniziano a piedi. La struttura che funziona è una giornata per riva: giorno uno per Pest e il Quartiere ebraico, giorno due per la collina del castello di Buda e Gellert. Prenota online la visita al Parlamento e la Sinagoga di via Dohany prima di arrivare, perché i biglietti a orario sono l'unica vera minaccia a una visita di 48 ore. Ciò che sacrifichi è una vera sessione di bagno termale, l'Isola Margherita e qualsiasi lenta serata di ruin bar, che è esattamente ciò che compra un terzo giorno. I prezzi sono bassi per gli standard dell'Europa occidentale, quindi mangia bene; solo stai alla larga da Vaci utca e paga in fiorini, non in euro.",
      stayNeighborhoodSlug: "belvaros",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Lungofiume di Pest e Quartiere ebraico",
          morning: [
            {
              poiSlug: "hungarian-parliament",
              text: "Comincia al Parlamento ungherese con una visita guidata mattutina prenotata in anticipo, in inglese, dell'interno e dei gioielli della corona. Arriva 15 minuti prima al centro visitatori per passare i controlli.",
              durationMin: 90,
            },
            {
              poiSlug: "shoes-on-the-danube",
              text: "Cammina verso sud lungo l'argine di Pest fino al memoriale delle Scarpe sul Danubio, una sosta silenziosa di dieci minuti, poi prosegui verso il Ponte delle Catene lungo la passeggiata.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "st-stephens-basilica",
              text: "Taglia verso l'interno fino alla Basilica di Santo Stefano, guarda la navata, poi prendi l'ascensore e fai la breve salita alla terrazza della cupola per l'ampio panorama su Pest.",
              durationMin: 75,
            },
            {
              poiSlug: "dohany-street-synagogue",
              text: "Prosegui fino alla Sinagoga di via Dohany per una visita a orario della sinagoga più grande d'Europa e del suo giardino commemorativo. Prenota la fascia online la sera prima per evitare il tutto esaurito di mezzogiorno.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "szimpla-kert",
              text: "Addentrati nel Quartiere ebraico e vedi Szimpla Kert prima delle 20 finché puoi ancora cogliere i cortili di arte-spazzatura, poi fai il giro dei bar nelle strade circostanti.",
              durationMin: 60,
            },
            {
              text: "Cena a Erzsebetvaros lontano dalle strisce turistiche: le vie laterali intorno a Kazinczy utca fanno cucina ungherese moderna e street food dove un pasto completo con una bevanda resta ben sotto i 6000 HUF.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Collina del castello di Buda e Gellert",
          morning: [
            {
              poiSlug: "fishermans-bastion",
              text: "Attraversa il Ponte delle Catene e sali al Bastione dei Pescatori prima delle 9, quando le torri superiori sono gratuite e la vista sul Parlamento dall'altra parte del fiume è solo tua.",
              durationMin: 60,
            },
            {
              poiSlug: "matthias-church",
              text: "Entra accanto nella chiesa di Mattia per l'interno dipinto con il tuo biglietto, poi gira per i vicoli tranquilli del distretto del castello prima che arrivino i gruppi turistici.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "buda-castle",
              text: "Percorri i cortili, le terrazze e i bastioni gratuiti del Castello di Buda per le lunghe viste sul fiume, entrando nella Galleria Nazionale solo se vuoi l'arte. Pranza in un caffè sulla collina.",
              durationMin: 120,
            },
            {
              poiSlug: "gellert-hill",
              text: "Scendi e sali sulla collina Gellert fino al belvedere della Cittadella per il panorama più ampio su entrambe le rive e sulla Statua della Libertà. Porta acqua; il sentiero è totalmente esposto al sole.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "szechenyi-chain-bridge",
              text: "Torna giù verso il fiume e attraversa il Ponte delle Catene all'imbrunire quando i leoni e l'intera campata si illuminano e il castello risplende dietro di te.",
              durationMin: 45,
            },
            {
              text: "Concludi con la cena di nuovo a Belvaros in una via laterale che parte da Vaci utca, non su di essa, dove un classico ungherese come il gulasch o il pollo alla paprika con un bicchiere di vino locale mantiene il conto onesto.",
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
        "Tre giorni sono la giusta quantità di tempo per Budapest: abbastanza per entrambe le rive a ritmo umano, più un lungo pomeriggio in un bagno termale che trasforma un viaggio di visite in una vera pausa. Due giorni ti costringono a correre Pest e la collina del castello una dopo l'altra e a saltare del tutto i bagni; il terzo giorno aggiunge Szechenyi, l'Isola Margherita e il tempo di sederti in un ruin bar senza guardare l'orologio. Alloggia nel Quartiere ebraico, centrale ed economico, con il miglior cibo informale e la vita notturna sulla soglia di casa. La forma del piano: giorno uno per il lungofiume di Pest e il Quartiere ebraico, giorno due per la collina del castello di Buda e Gellert, giorno tre per i bagni, il mercato e l'isola. Prenota online due cose prima dell'arrivo: la visita al Parlamento e la fascia per la Sinagoga di via Dohany. Tutto il resto a Budapest premia il presentarsi presto più che pagare di più, e il pagare in fiorini invece che in euro.",
      stayNeighborhoodSlug: "jewish-quarter",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Lungofiume di Pest e la Basilica",
          morning: [
            {
              poiSlug: "hungarian-parliament",
              text: "Dalla tua base nel Quartiere ebraico, prendi la metro fino al Parlamento per la tua visita mattutina prenotata in anticipo dell'interno e dei gioielli della corona. Arrivaci 15 minuti prima per i controlli.",
              durationMin: 90,
            },
            {
              poiSlug: "shoes-on-the-danube",
              text: "Cammina sull'argine di Pest verso sud fino al memoriale delle Scarpe sul Danubio, poi prosegui lungo la passeggiata verso il Ponte delle Catene.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "st-stephens-basilica",
              text: "Dirigiti verso l'interno alla Basilica di Santo Stefano per la navata e il panorama dalla terrazza della cupola sui tetti di Pest.",
              durationMin: 75,
            },
            {
              poiSlug: "szechenyi-chain-bridge",
              text: "Attraversa a piedi il Ponte delle Catene per la classica vista verso il Castello di Buda, poi torna indietro per un caffè vicino a Roosevelt ter.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "szimpla-kert",
              text: "Di nuovo nel Quartiere ebraico, vedi Szimpla Kert prima della folla di tarda ora, poi gira i ruin bar e i locali di birra artigianale intorno a Kazinczy utca.",
              durationMin: 90,
            },
            {
              text: "Cena in una via laterale di Erzsebetvaros: langos, piatti piccoli di cucina ungherese moderna o un bistrò, tutti a breve distanza a piedi dal tuo letto e leggeri sul budget.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Collina del castello di Buda e Gellert",
          morning: [
            {
              poiSlug: "fishermans-bastion",
              text: "Attraversa verso Buda e sali al Bastione dei Pescatori prima delle 9 per le torri superiori gratuite e il panorama sul Parlamento senza folla.",
              durationMin: 60,
            },
            {
              poiSlug: "matthias-church",
              text: "Visita accanto la chiesa di Mattia per l'interno dipinto e il tetto piastrellato, poi percorri i vicoli tranquilli del distretto del castello all'apertura.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "buda-castle",
              text: "Esplora i cortili e le terrazze gratuiti del Castello di Buda per le lunghe viste sul fiume e pranza sulla collina, entrando nella Galleria Nazionale solo se l'arte ti attira.",
              durationMin: 120,
            },
            {
              poiSlug: "gellert-hill",
              text: "Cammina lungo il crinale verso sud e sali sulla collina Gellert fino al belvedere della Cittadella per il panorama più ampio su entrambe le rive. Porta acqua nei mesi caldi.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "dohany-street-synagogue",
              text: "Riattraversa verso Pest e, in un giorno diverso dal sabato, fai una visita a orario nel tardo pomeriggio alla Sinagoga di via Dohany e al suo giardino commemorativo con il tuo biglietto online.",
              durationMin: 75,
            },
            {
              text: "Cena vicino al Grande Boulevard, poi un lento bicchiere della staffa in un wine bar del Quartiere ebraico che versa rossi ungheresi che non troverai a casa.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Bagni, il mercato e l'Isola Margherita",
          morning: [
            {
              poiSlug: "central-market-hall",
              text: "Comincia al Grande Mercato Coperto prima di mezzogiorno per la paprika, la frutta e la verdura e i banchi del piano terra, e mangia i langos qui o nelle vicinanze invece che ai banconi più cari del piano superiore.",
              durationMin: 75,
            },
            {
              poiSlug: "vaci-street",
              text: "Percorri tutta Vaci utca di ritorno verso il centro come una passeggiata di 15 minuti, ignorando i chioschi di cambio, poi gira per le strade intorno a Vorosmarty ter.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "szechenyi-baths",
              text: "Prendi la metro fino al City Park e passa il pomeriggio ai bagni termali Szechenyi. Prenota online con una cabina, porta il tuo asciugamano e le ciabatte, e vacci dopo che la punta di mezzogiorno si allenta.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              poiSlug: "margaret-island",
              text: "Rinfrescati sull'Isola Margherita sulla via del ritorno, camminando dalla fermata del tram del Ponte Margherita e cogliendo la fontana musicale allo scoccare dell'ora vicino all'estremità meridionale.",
              durationMin: 90,
            },
            {
              text: "Ultima cena nel Quartiere ebraico o di là a Ujlipotvaros, entrambi a una breve corsa di tram e pieni di oneste cucine di quartiere.",
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
        "Quattro giorni sono più che sufficienti per le attrazioni di Budapest, ed è proprio questo il punto: il quarto giorno converte una corsa tra i monumenti in un vero viaggio. I giorni da uno a tre coprono il lungofiume di Pest, la collina del castello di Buda e il Quartiere ebraico a ritmo rilassato; il quarto giorno è una giornata lenta costruita intorno a una lunga sessione di bagno termale, all'Isola Margherita e al City Park, senza fretta e senza coda ai biglietti. Con così tanto tempo, salta il centro più stretto e alloggia a Ujlipotvaros. È a 15 minuti a piedi o due fermate di tram dal Parlamento, più economica per camere equivalenti, e i suoi bistrò e la passeggiata dell'Isola Margherita sono la ragione per cui il quarto giorno esiste. La logica di una riva al giorno vale ancora: tieni insieme il castello, la chiesa di Mattia e Gellert sul lato di Buda, tieni insieme il Parlamento, la Basilica e il Quartiere ebraico sul lato di Pest, e non fare avanti e indietro sul Danubio. Prenota in anticipo la visita al Parlamento e la Sinagoga di via Dohany. Se dovessi scegliere tra tre e quattro giorni, il quarto giorno rilassato è quello che ricorderai.",
      stayNeighborhoodSlug: "ujlipotvaros",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Lungofiume di Pest e la Basilica",
          morning: [
            {
              poiSlug: "hungarian-parliament",
              text: "Cammina o prendi il tram giù da Ujlipotvaros fino al Parlamento per la tua visita mattutina prenotata in anticipo dell'interno e dei gioielli della corona, arrivando prima per i controlli.",
              durationMin: 90,
            },
            {
              poiSlug: "shoes-on-the-danube",
              text: "Segui l'argine di Pest verso sud fino al memoriale delle Scarpe sul Danubio, poi continua a camminare lungo la passeggiata fino al Ponte delle Catene.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "st-stephens-basilica",
              text: "Piega verso l'interno alla Basilica di Santo Stefano per la navata e la vista dalla terrazza della cupola su Pest, con il pranzo sulla piazza fiancheggiata di caffè davanti.",
              durationMin: 90,
            },
            {
              poiSlug: "szechenyi-chain-bridge",
              text: "Attraversa a piedi il Ponte delle Catene per la vista verso il castello, poi gira per il lungofiume e Roosevelt ter prima di tornare indietro.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "szimpla-kert",
              text: "Addentrati nel Quartiere ebraico per Szimpla Kert prima della calca, poi un giro dei ruin bar intorno a Kazinczy utca.",
              durationMin: 90,
            },
            {
              text: "Cena a Erzsebetvaros, poi torna in tram su a Ujlipotvaros per un tranquillo bicchiere della staffa in uno dei wine bar di quartiere.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Collina del castello di Buda e Gellert",
          morning: [
            {
              poiSlug: "fishermans-bastion",
              text: "Attraversa il fiume e sali al Bastione dei Pescatori prima delle 9 per le torri superiori gratuite e il panorama sul Parlamento senza folla.",
              durationMin: 60,
            },
            {
              poiSlug: "matthias-church",
              text: "Visita accanto la chiesa di Mattia per il tetto piastrellato e l'interno dipinto, poi gira per i vicoli del distretto del castello mentre sono ancora vuoti.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "buda-castle",
              text: "Percorri le terrazze e i bastioni gratuiti del Castello di Buda per le lunghe viste sul fiume e pranza sulla collina, entrando nella Galleria Nazionale solo se vuoi l'arte.",
              durationMin: 120,
            },
            {
              poiSlug: "gellert-hill",
              text: "Prendi il crinale verso sud e sali sulla collina Gellert fino al belvedere della Cittadella per la vista più ampia su entrambe le rive e sulla Statua della Libertà.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "szechenyi-chain-bridge",
              text: "Scendi e attraversa il Ponte delle Catene all'imbrunire per la campata illuminata e il castello che risplende dietro di te.",
              durationMin: 45,
            },
            {
              text: "Cena di nuovo sul lato di Pest, poi una lenta camminata lungo il lungofiume illuminato prima del tram verso casa a Ujlipotvaros.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Quartiere ebraico, il mercato e Vaci",
          morning: [
            {
              poiSlug: "dohany-street-synagogue",
              text: "Comincia alla Sinagoga di via Dohany in un giorno diverso dal sabato con la tua fascia mattutina prenotata in anticipo, cogliendo il giardino commemorativo e il museo.",
              durationMin: 90,
            },
            {
              text: "Percorri la street art e i cortili del Quartiere ebraico, fermandoti per un caffè e un dolce di panetteria kosher intorno a Kazinczy utca prima che la giornata si scaldi.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "central-market-hall",
              text: "Dirigiti al Grande Mercato Coperto prima della sua chiusura anticipata del sabato per la paprika e la frutta e verdura al piano terra, mangiando i langos in un posto locale più piccolo invece che ai banconi per turisti al piano superiore.",
              durationMin: 90,
            },
            {
              poiSlug: "vaci-street",
              text: "Passeggia su Vaci utca di ritorno verso Vorosmarty ter come una camminata di 15 minuti, saltando i chioschi di cambio, poi gira per le boutique nelle strade parallele più tranquille.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Torna a Ujlipotvaros per una cena presto in un bistrò di quartiere, poi cammina lungo la passeggiata sul fiume verso il Parlamento mentre si illumina.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Bagni, Isola Margherita e City Park",
          morning: [
            {
              poiSlug: "margaret-island",
              text: "Comincia con calma con una mattina sull'Isola Margherita, camminando o noleggiando una bici dall'estremità del Ponte Margherita e girando il parco senza auto oltre la fontana musicale e la vecchia torre dell'acqua.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "szechenyi-baths",
              text: "Passa un lungo pomeriggio ai bagni termali Szechenyi nel City Park. Prenota online un biglietto feriale con una cabina, porta il tuo asciugamano e le ciabatte, e accomodati una volta che la punta di mezzogiorno svanisce.",
              durationMin: 210,
            },
          ],
          evening: [
            {
              text: "Gira per il City Park all'uscita per il Castello di Vajdahunyad e la Piazza degli Eroi illuminati all'imbrunire, un finale gratuito e facile della giornata rilassata.",
              durationMin: 60,
            },
            {
              text: "Ultima cena di nuovo a Ujlipotvaros o di là nel Quartiere ebraico, entrambi a una breve corsa di tram e entrambi molto più economici delle strisce turistiche sul fiume.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
  ],
};

export default budapestIt;
