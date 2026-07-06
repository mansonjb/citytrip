import type { CityData } from "../types";

const madridIt: CityData = {
  city: {
    slug: "madrid",
    name: "Madrid",
    country: "Spagna",
    countrySlug: "spain",
    lat: 40.4168,
    lng: -3.7038,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "MAD",
    airportToCenter:
      "La linea 8 della metro da Barajas arriva a Nuevos Ministerios in circa 30 minuti, ma attenzione al supplemento aeroportuale di 3 EUR che si aggiunge al biglietto, quindi metti in conto tra i 4,50 e i 5 EUR. Alternative: il bus Airport Express attivo 24 ore su 24 fino ad Atocha per circa 5 EUR, oppure il treno pendolare Cercanias C1 dalla T4 alle stazioni centrali.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [7, 8],
    monthlyNotes: {
      1: "Freddo e secco con massime intorno ai 10C e mattine gelate, e la città è tranquilla dopo la parata dei Re Magi del 6 gennaio, il più grande evento per bambini del Natale spagnolo. Le tariffe degli hotel toccano il minimo dell'anno, e le finestre serali gratuite del Prado e del Reina Sofia sono deliziosamente vuote.",
      2: "Ancora freddo, sui 12C, ma spesso limpido e soleggiato, con il minor numero di turisti dell'anno e i letti più economici. Un buon mese per il triangolo dell'arte: sfrutta le due ore finali gratuite al Prado e al Reina Sofia senza le code primaverili.",
      3: "Le massime salgono verso i 16C e le terrazze riaprono nei pomeriggi soleggiati, anche se le sere restano fredde. Se la Semana Santa cade a fine marzo, aspettati solenni processioni della Settimana Santa e un aumento dei visitatori nazionali e dei prezzi degli hotel nella settimana prima di Pasqua.",
      4: "Uno dei mesi migliori, sui 18C, verde e mite, con il Retiro in fiore e camminate comode per tutto il giorno. Pasqua spesso cade qui, quindi le processioni della Semana Santa e i prezzi più alti possono colpire nella settimana in cui capita la Settimana Santa; prenota evitandola o inserendola di proposito.",
      5: "Madrid al meglio: caldo sui 23C, luce lunga, e la festa di San Isidro a metà maggio riempie la città di concerti, verbenas e gente del posto in abiti tradizionali attorno a La Latina e Las Vistillas. Folle e prezzi in aumento, quindi prenota in anticipo il Prado e il Palazzo Reale.",
      6: "Da caldo a torrido sui 29C con sere lunghe e la stagione delle terrazze in pieno svolgimento, prima che arrivi la vera fornace. Le folle sono intense nei grandi musei, quindi approfitta delle fasce serali gratuite o dell'apertura alle 9, e tieni i pomeriggi per l'ombra.",
      7: "Caldo e secco, regolarmente oltre i 34C, e l'inizio di luglio porta l'Orgullo, l'enorme Gay Pride di Madrid attorno a Chueca, uno dei più grandi d'Europa, che riempie il centro per una settimana. Visita prima di mezzogiorno, riparati dal caldo delle 15-19, e cena tardi come tutti.",
      8: "Il mese più vuoto e più caldo: le massime spingono verso i 35C e molti bar e ristoranti familiari chiudono per le ferie mentre i madrileni partono per la costa. Il programma culturale Veranos de la Villa tiene aperti alcuni concerti e cinema all'aperto, ma questo è il mese da saltare a meno che i letti economici non superino il fastidio del caldo.",
      9: "Il caldo si allenta nel corso del mese, da circa 30C a temperature gradevoli, la città si riempie di nuovo mentre la gente rientra, e le terrazze restano affollate fino a notte. Le folle si diradano dopo la prima settimana, rendendo la seconda metà di settembre probabilmente la finestra migliore dell'anno.",
      10: "Giornate calde sui 22C, luce dorata al Retiro, e le prime piogge leggere che tornano verso fine mese. Le folle si diradano nettamente e il rapporto qualità-prezzo degli hotel migliora, una solida scelta di bassa stagione per percorrere comodamente tutto il centro a piedi.",
      11: "Fresco sui 15C con più giornate grigie e umide, ma schiarite tra un fronte e l'altro e le grandi attrazioni più tranquille dell'autunno. Tornano i prezzi di bassa stagione e spesso si riesce a prenotare il Palazzo Reale o un tour del Bernabeu con pochi giorni di anticipo.",
      12: "Freddo sui 10C ma festoso, con le luci tese lungo la Gran Via e il centro, e la Puerta del Sol epicentro del Capodanno quando la folla mangia dodici chicchi d'uva ai dodici rintocchi. Tranquillo fino al periodo tra Natale e Capodanno, quando le tariffe salgono e le serate gratuite dei musei attirano la gente del posto.",
    },
    climate: {
      1: { highC: 10, lowC: 3, rainyDays: 5 },
      2: { highC: 12, lowC: 3, rainyDays: 4 },
      3: { highC: 16, lowC: 5, rainyDays: 4 },
      4: { highC: 18, lowC: 7, rainyDays: 7 },
      5: { highC: 23, lowC: 11, rainyDays: 6 },
      6: { highC: 29, lowC: 16, rainyDays: 3 },
      7: { highC: 34, lowC: 19, rainyDays: 1 },
      8: { highC: 34, lowC: 19, rainyDays: 1 },
      9: { highC: 28, lowC: 15, rainyDays: 3 },
      10: { highC: 22, lowC: 10, rainyDays: 6 },
      11: { highC: 15, lowC: 6, rainyDays: 6 },
      12: { highC: 10, lowC: 3, rainyDays: 6 },
    },
    budgetLevel: "mid",
    budgetPerDay: { budget: 65, mid: 135, high: 270 },
    tagline: "Arte di livello mondiale, piazze asburgiche e tapas mangiate tardi e in piedi.",
    heroIntro:
      "Madrid ti offre uno dei più grandi triangoli dell'arte al mondo, un compatto nucleo antico asburgico e la cultura del mangiare e bere più incessante di Spagna, il tutto in un centro che puoi attraversare a piedi da un capo all'altro. Tre giorni sono la quantità onesta: uno per il Museo del Prado, il Reina Sofia e il Thyssen, uno per la città vecchia reale, e uno per un barrio vivace. Vieni in primavera o in autunno, prenota in anticipo la serata gratuita del Prado o il Palazzo Reale, e cena alle 22 come i locali.",
    accent: { from: "#C42E3A", to: "#E8A33D", ink: "#6E1F28" },
    neighborhoodSlugs: ["centro", "la-latina", "malasana", "chueca", "salamanca"],
    nearbyCitySlugs: ["seville", "barcelona"],
  },

  neighborhoods: [
    {
      slug: "centro",
      citySlug: "madrid",
      name: "Centro (Sol e nucleo asburgico)",
      lat: 40.4155,
      lng: -3.7074,
      bestFor: ["first-time", "family"],
      vibe: "Il cuore storico attorno alla Puerta del Sol, alla Plaza Mayor e al Palazzo Reale, dove ogni monumento di primo piano sta a dieci minuti a piedi. È la Madrid da cartolina, animata giorno e notte, con i negozi e i teatri della Gran Via a pochi isolati a nord. Paghi prezzi centrali e accetti il rumore in cambio di avere tutta la città vecchia sull'uscio di casa.",
      pros: [
        "Raggiungi a piedi Plaza Mayor, il Palazzo Reale, Sol e la Gran Via senza mezzi",
        "La zona meglio collegata, con la metro e lo snodo Cercanias di Sol sotto i piedi",
        "Densa di bar di tapas, mercati e attrazioni a ogni angolo",
      ],
      cons: [
        "La zona più turistica, con borseggiatori attorno a Sol e alla Gran Via",
        "Il rumore in strada va avanti fino a tardi, scelta scadente per chi ha il sonno leggero",
        "I ristoranti sulle piazze principali hanno prezzi da turisti",
      ],
    },
    {
      slug: "la-latina",
      citySlug: "madrid",
      name: "La Latina",
      lat: 40.4109,
      lng: -3.7108,
      bestFor: ["local", "nightlife", "romantic"],
      vibe: "Il quartiere più antico a sud della Plaza Mayor è la patria delle tapas di Madrid, un groviglio di vicoli medievali attorno alla Cava Baja e alle strade del mercato di El Rastro. La domenica è il suo giorno grande, quando il mercatino delle pulci si riversa nei bar per una lunga sessione di vermut e tapas. Abbastanza centrale da andare ovunque a piedi, con molta più vita di quartiere di Sol.",
      pros: [
        "La Cava Baja e la Cava Alta ospitano il miglior giro di bar di tapas della città",
        "Dieci minuti a piedi dalla Plaza Mayor e dal Palazzo Reale",
        "Il mercato domenicale di El Rastro e la cultura del vermut sull'uscio di casa",
      ],
      cons: [
        "Rumoroso dal giovedì alla domenica sera attorno alle strade dei bar",
        "Gli edifici antichi significano stanze piccole e ascensori ripidi o assenti",
        "Le folle del mercato domenicale intasano le strade fino a metà pomeriggio",
      ],
    },
    {
      slug: "malasana",
      citySlug: "madrid",
      name: "Malasana",
      lat: 40.4258,
      lng: -3.7038,
      bestFor: ["nightlife", "local", "budget"],
      vibe: "La culla della Movida degli anni Ottanta è oggi il quartiere più cool di Madrid, pieno di negozi vintage, caffè di terza ondata, bar indie e piccole cucine attorno alla Plaza del Dos de Mayo. È giovane, percorribile a piedi e in fermento fino a tardi, a due passi a nord della Gran Via e del centro. Buon rapporto qualità-prezzo per la zona, se riesci a dormire nonostante la colonna sonora del weekend.",
      pros: [
        "La migliore scena indipendente di bar, caffè e negozi della città",
        "Raggiungibile a piedi la Gran Via e il centro in dieci minuti",
        "Letti dal miglior rapporto qualità-prezzo rispetto a Sol o Salamanca a parità di centralità",
      ],
      cons: [
        "Molto rumoroso nelle sere del weekend attorno alle piazze",
        "Poche attrazioni convenzionali nell'immediata vicinanza",
        "Popolare tra chi cerca la festa, quindi le strade possono essere movimentate alle 3 di notte",
      ],
    },
    {
      slug: "chueca",
      citySlug: "madrid",
      name: "Chueca",
      lat: 40.4224,
      lng: -3.6968,
      bestFor: ["nightlife", "local", "romantic"],
      vibe: "Il quartiere orgogliosamente LGBTQ+ di Madrid è una griglia elegante e vivace di negozi di design, wine bar e ristoranti attorno alla Plaza de Chueca, e l'epicentro del vasto Orgullo Pride di inizio luglio. È curato e socievole più che ruvido, a distanza a piedi dalla Gran Via e dal Thyssen. Centrale, divertente e con una sensazione di sicurezza fino a notte inoltrata.",
      pros: [
        "Ristoranti, cocktail bar e boutique eccellenti stipati vicini tra loro",
        "A piedi verso la Gran Via, il Thyssen e il Retiro in quindici minuti",
        "Vita notturna accogliente e brulicante che raggiunge il culmine durante il Pride di luglio",
      ],
      cons: [
        "Il rumore del weekend e della settimana del Pride è intenso attorno alla piazza",
        "Una delle zone centrali più care sia per gli hotel sia per la ristorazione",
        "Poche attrazioni di richiamo dentro il quartiere stesso",
      ],
    },
    {
      slug: "salamanca",
      citySlug: "madrid",
      name: "Salamanca",
      lat: 40.4302,
      lng: -3.6795,
      bestFor: ["romantic", "family"],
      vibe: "L'elegante griglia a nord-est del Retiro è il distretto chic di Madrid, sede della strada delle firme lungo la Calle Serrano, ristoranti raffinati e ampi boulevard tranquilli. Baratta il carattere della città vecchia con spazio, quiete e sicurezza, a breve distanza a piedi o in metro dal triangolo dell'arte e dal parco. Scegli questa base per la raffinatezza e una buona dormita piuttosto che per l'atmosfera dei vicoli acciottolati.",
      pros: [
        "Strade tranquille, sicure ed eleganti con shopping di alto livello su Serrano",
        "A breve distanza a piedi dal Retiro e dal Prado, più buoni collegamenti in metro",
        "Ristorazione affidabile e di alto livello senza la baldoria della città vecchia",
      ],
      cons: [
        "Hotel, negozi e ristoranti cari a tutto tondo",
        "Sembra più formale e residenziale che vivace di notte",
        "A 20 minuti a piedi o a una fermata di metro dal nucleo antico asburgico",
      ],
    },
  ],

  pois: [
    {
      slug: "prado-museum",
      citySlug: "madrid",
      name: "Museo del Prado",
      lat: 40.4138,
      lng: -3.6921,
      kind: "museum",
      needsBooking: true,
      tip: "L'ingresso è gratuito nelle ultime due ore (da lunedì a sabato 18:00-20:00, domenica 17:00-19:00), ma le code si formano molto prima, quindi arriva con 30-45 minuti di anticipo. Se entri a pagamento, prenota online una fascia oraria, va' subito a Las Meninas di Velazquez e alle pitture nere di Goya, e conta almeno due o tre ore per i pezzi forti.",
    },
    {
      slug: "reina-sofia",
      citySlug: "madrid",
      name: "Museo Reina Sofia",
      lat: 40.4079,
      lng: -3.6946,
      kind: "museum",
      needsBooking: true,
      tip: "Guernica è il motivo per venire, e si trova nella Sala 205. L'ingresso è gratuito nelle sere feriali (lunedì e da mercoledì a sabato 19:00-21:00) e la domenica pomeriggio dalle 12:30, ma è chiuso del tutto il martedì; prenota online per saltare la fila, va' prima alla tela di Picasso, poi allarga verso Dali e Miro.",
    },
    {
      slug: "thyssen-bornemisza",
      citySlug: "madrid",
      name: "Museo Thyssen-Bornemisza",
      lat: 40.4160,
      lng: -3.6948,
      kind: "museum",
      needsBooking: true,
      tip: "Il terzo vertice del triangolo dell'arte colma i vuoti lasciati dal Prado e dal Reina Sofia: impressionisti, antichi maestri e opere del Novecento in un'unica collezione percorribile a piedi. È gratuito il lunedì pomeriggio (12:00-16:00) per la collezione permanente; altrimenti prenota online, comincia dall'ultimo piano e scendi in ordine cronologico per risparmiare le gambe.",
    },
    {
      slug: "royal-palace",
      citySlug: "madrid",
      name: "Palazzo Reale (Palacio Real)",
      lat: 40.4179,
      lng: -3.7143,
      kind: "sight",
      needsBooking: true,
      tip: "Prenota online per saltare la lunga coda ai biglietti, e controlla prima il sito perché il palazzo chiude ai visitatori con breve preavviso per le cerimonie di Stato. Punta all'apertura delle 10, fa' le sale di rappresentanza e l'Armeria Reale, poi attraversa verso la gratuita Cattedrale dell'Almudena e i Giardini Sabatini accanto.",
    },
    {
      slug: "retiro-park",
      citySlug: "madrid",
      name: "Parco del Retiro e Palazzo di Cristallo",
      lat: 40.4152,
      lng: -3.6844,
      kind: "park",
      needsBooking: false,
      tip: "Gratuito e aperto dall'alba; entra dal lato della Puerta de Alcala e cammina fino al laghetto delle barche, dove una barca a remi costa circa 6 EUR per 45 minuti con le code più brevi prima di mezzogiorno. Il Palazzo di Cristallo, un padiglione di vetro che ospita installazioni gratuite di arte contemporanea, sta più in profondità nel parco ed è la cosa da non perdere.",
    },
    {
      slug: "plaza-mayor",
      citySlug: "madrid",
      name: "Plaza Mayor",
      lat: 40.4155,
      lng: -3.7074,
      kind: "sight",
      needsBooking: false,
      tip: "La grande piazza porticata del Seicento è gratuita e si gode meglio al mattino presto o dopo cena, quando la ressa diurna si dirada. Non sederti ai caffè con terrazza sulla piazza stessa, dove il ricarico è brutale; prendi invece lo spuntino di strada locale, un bocadillo de calamares, in un bar della vicina Calle Botoneras.",
    },
    {
      slug: "puerta-del-sol",
      citySlug: "madrid",
      name: "Puerta del Sol",
      lat: 40.4169,
      lng: -3.7033,
      kind: "sight",
      needsBooking: false,
      tip: "Il centro letterale della Spagna, segnato dal Chilometro Zero nel selciato, e la piazza dove la folla mangia dodici chicchi d'uva ai dodici rintocchi di Capodanno. È uno snodo di transito e orientamento più che un luogo dove indugiare, quindi passa, trova la statua dell'orso e del corbezzolo, e tieni la borsa chiusa tra la folla.",
    },
    {
      slug: "gran-via",
      citySlug: "madrid",
      name: "Gran Via",
      lat: 40.4200,
      lng: -3.7025,
      kind: "sight",
      needsBooking: false,
      tip: "Il grande boulevard di inizio Novecento di Madrid si percorre meglio all'imbrunire, quando le vetrine e la cupola del palazzo Metropolis si illuminano. È una zona di punta per i borseggiatori, quindi tieni le borse chiuse e i telefoni lontani dal bordo del marciapiede; per la classica vista dal tetto, la terrazza del vicino Circulo de Bellas Artes chiede circa 5 EUR.",
    },
    {
      slug: "mercado-de-san-miguel",
      citySlug: "madrid",
      name: "Mercato di San Miguel",
      lat: 40.4153,
      lng: -3.7090,
      kind: "food",
      needsBooking: false,
      tip: "Il mercato restaurato in ferro e vetro accanto alla Plaza Mayor è una sala di tapas gourmet, più curata e cara dei bar locali, quindi trattalo come una tappa di assaggio più che come un pasto completo. Vai verso mezzogiorno o a metà pomeriggio per evitare la calca delle 20, compra due o tre tapas da banchi diversi, e mangia in piedi, perché ci sono pochi posti a sedere.",
    },
    {
      slug: "temple-of-debod",
      citySlug: "madrid",
      name: "Tempio di Debod",
      lat: 40.4240,
      lng: -3.7176,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Questo autentico tempio dell'antico Egitto, donato alla Spagna e rimontato in un parco, è il classico punto gratuito per il tramonto di Madrid, con la pietra riflessa nel suo specchio d'acqua e il cielo sopra la Casa de Campo sullo sfondo. Vieni 30 minuti prima del tramonto per una buona posizione alla ringhiera; si affolla, e l'interno ha un ingresso gratuito a fasce orarie limitate (chiuso il lunedì).",
    },
    {
      slug: "el-rastro",
      citySlug: "madrid",
      name: "Mercatino delle pulci di El Rastro",
      lat: 40.4085,
      lng: -3.7075,
      kind: "experience",
      needsBooking: false,
      tip: "L'enorme mercatino delle pulci all'aperto di Madrid si tiene solo la domenica mattina, all'incirca dalle 9 alle 15, riversandosi lungo la Calle Ribera de Curtidores e i vicoli di La Latina. Vieni prima delle 11 per battere la calca, tieni gli oggetti di valore in una tasca frontale perché è territorio di punta per i borseggiatori, e concludi con un vermut in un bar della Cava Baja come fa la gente del posto.",
    },
    {
      slug: "plaza-de-cibeles",
      citySlug: "madrid",
      name: "Plaza de Cibeles",
      lat: 40.4192,
      lng: -3.6931,
      kind: "sight",
      needsBooking: false,
      tip: "L'incrocio tra fontana e palazzo è un monumento gratuito, e i tifosi del Real Madrid si radunano alla fontana di Cibeles per festeggiare i titoli. Sali sul Palacio de Cibeles per il suo mirador panoramico (circa 3 EUR) per un'ampia veduta lungo il Paseo del Prado; sta sul percorso tra il Prado e la Gran Via, quindi infilalo nel mezzo.",
    },
    {
      slug: "cava-baja-tapas",
      citySlug: "madrid",
      name: "Giro di tapas della Cava Baja (La Latina)",
      lat: 40.4113,
      lng: -3.7098,
      kind: "food",
      needsBooking: false,
      tip: "La Cava Baja è la migliore strada di tapas di Madrid, una fila di vecchie taverne dove ordini uno o due piatti e un drink in ognuna, poi prosegui. Comincia verso le 21 quando le cucine entrano nel vivo, resta in piedi al bancone anziché prendere un tavolo, e prova i classici: gambas al ajillo, croquetas e una caña di birra.",
    },
    {
      slug: "santiago-bernabeu",
      citySlug: "madrid",
      name: "Tour dello stadio Santiago Bernabeu",
      lat: 40.4531,
      lng: -3.6883,
      kind: "experience",
      needsBooking: true,
      tip: "Il tour e il museo dello stadio del Real Madrid è una visita autoguidata che comprende i posti a bordo campo, gli spogliatoi e la sala dei trofei; prenota online una fascia oraria, perché i biglietti allo sportello si esauriscono nei weekend di partita. È chiuso ai tour nei giorni di partita e spesso il giorno prima, quindi controlla il calendario delle partite prima di andare; la metro ti lascia a Santiago Bernabeu sulla linea 10.",
    },
  ],

  itineraries: [
    {
      citySlug: "madrid",
      days: 2,
      summary:
        "Due giorni coprono l'essenziale di Madrid, ma è una corsa e sentirai la compressione, perché la città ne vuole davvero tre. In 48 ore puoi fare il triangolo dell'arte il primo giorno (il Prado, poi il Reina Sofia per Guernica, con il Retiro in mezzo) e la città vecchia asburgica il secondo (il Palazzo Reale, Plaza Mayor, Sol e San Miguel), chiudendo ogni sera con le tapas a La Latina. Ciò che rovina una visita breve è il tempismo: usa le ultime due ore gratuite del Prado o prenota una fascia, e riserva online il Palazzo Reale così una coda non si mangia la tua mattinata. Piazzati in Centro così entrambi i giorni iniziano a piedi e la cena è sempre a due passi. Ciò che sacrifichi a questo ritmo è il Thyssen, un'intera giornata di barrio, Salamanca, il Bernabeu e ogni gita fuori porta, quindi va bene per un weekend o un primo assaggio. Se puoi aggiungere un terzo giorno, prendilo: tre giorni sono il punto in cui Madrid smette di sembrare uno sprint.",
      stayNeighborhoodSlug: "centro",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Il triangolo dell'arte: Prado, Retiro, Reina Sofia",
          morning: [
            {
              poiSlug: "prado-museum",
              text: "Comincia al Prado per l'apertura delle 10 con una fascia oraria prenotata, andando dritto a Las Meninas di Velazquez e alle pitture nere di Goya prima che le sale si riempiano. Due o tre ore coprono i capolavori di punta senza una marcia forzata.",
              durationMin: 165,
            },
          ],
          afternoon: [
            {
              text: "Pranzo sul lato del Paseo del Prado o verso Anton Martin, poi tieni il pasto leggero perché a Madrid si cena tardi. Un menu del dia in un bar di quartiere è l'opzione conveniente.",
              durationMin: 75,
            },
            {
              poiSlug: "retiro-park",
              text: "Entra nel Parco del Retiro dietro il Prado per il pomeriggio, prendendo una barca a remi sul lago e rientrando fino al padiglione di vetro del Palazzo di Cristallo. È la pausa verde tra due grandi musei.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "reina-sofia",
              text: "Prendi il Reina Sofia nella sua finestra serale gratuita nei giorni feriali (19:00-21:00, chiuso il martedì), andando dritto alla Sala 205 per Guernica di Picasso prima di girare verso Dali e Miro. Arriva un po' in anticipo, perché la fascia gratuita attira una coda.",
              durationMin: 90,
            },
            {
              poiSlug: "cava-baja-tapas",
              text: "Cammina fino a La Latina per un giro di tapas alla Cava Baja da circa le 21, ordinando un piatto e un drink in ogni bar e proseguendo. Gambas al ajillo, croquetas e una caña, in piedi al bancone come la gente del posto.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Madrid asburgica: Palazzo Reale, Plaza Mayor, Sol, San Miguel",
          morning: [
            {
              poiSlug: "royal-palace",
              text: "Sii al Palazzo Reale per l'apertura delle 10 con un biglietto prenotato, controllando la sera prima che non sia chiuso per un evento di Stato. Fa' le sale di rappresentanza e l'Armeria Reale, poi esci verso la gratuita Cattedrale dell'Almudena e i Giardini Sabatini accanto.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "mercado-de-san-miguel",
              text: "Assaggia il pranzo al Mercato di San Miguel accanto alla Plaza Mayor, comprando due o tre tapas da banchi diversi e mangiando in piedi. È più caro di un bar locale, quindi trattalo come una degustazione più che come un pasto seduto completo.",
              durationMin: 60,
            },
            {
              poiSlug: "plaza-mayor",
              text: "Passa nella Plaza Mayor per goderti la piazza porticata del Seicento, poi infila i vecchi vicoli fino alla Puerta del Sol e al segno del Chilometro Zero al centro della Spagna. Tieni la borsa chiusa tra la folla qui.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "temple-of-debod",
              text: "Cammina fino al Tempio di Debod 30 minuti prima del tramonto per il classico punto panoramico gratuito di Madrid, la pietra dell'antico Egitto riflessa nel suo specchio d'acqua contro il cielo sopra la Casa de Campo. Prendi presto un posto alla ringhiera, perché si affolla.",
              durationMin: 60,
            },
            {
              poiSlug: "gran-via",
              text: "Scendi verso la Gran Via mentre il boulevard si illumina, percorrendo le sue facciate di inizio Novecento verso la cupola del Metropolis. Cena in centro o di nuovo a La Latina, tenendo telefoni e borse al sicuro su questo tratto a rischio borseggio.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "madrid",
      days: 3,
      summary:
        "Sì, tre giorni sono la durata giusta per Madrid, ed è ciò che consigliamo per una prima visita. Tre giorni permettono di dividere il viaggio in modo netto: il triangolo dell'arte ha un'intera giornata (il Prado, il Reina Sofia per Guernica e il Thyssen a colmare i vuoti), il nucleo antico asburgico ha la sua giornata (il Palazzo Reale, Plaza Mayor, Sol, San Miguel e il Tempio di Debod al tramonto), e un barrio vivace si prende la terza (La Latina, El Rastro se è domenica, e Malasana). Mangi bene in tre quartieri, riesci a incastrare sia le serate gratuite dei musei sia vere serate di tapas fino a tardi, e ti muovi comunque a un ritmo che ti lascia sederti in una piazza. Ciò che salta ancora è Salamanca, il Bernabeu e una gita a Toledo o Segovia, che è esattamente ciò che aggiunge un quarto giorno. Alloggia a Malasana per i suoi bar indipendenti, il caffè e il rapporto qualità-prezzo restando a dieci minuti dal centro. Usa le ultime due ore gratuite del Prado o prenota una fascia, e riserva online il Palazzo Reale prima di partire.",
      stayNeighborhoodSlug: "malasana",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Il triangolo dell'arte: Prado, Retiro, Reina Sofia, Thyssen",
          morning: [
            {
              poiSlug: "prado-museum",
              text: "Apri il viaggio con la fascia delle 10 al Prado, prenotata in anticipo, e va' dritto a Las Meninas e alle pitture nere di Goya prima che si formi la folla. Concediti due ore e mezza o tre per i capolavori; di meno e ci passi davanti di corsa.",
              durationMin: 165,
            },
          ],
          afternoon: [
            {
              poiSlug: "thyssen-bornemisza",
              text: "Pranzo sul Paseo del Prado, poi attraversa il boulevard fino al Thyssen-Bornemisza, gratuito il lunedì pomeriggio per la collezione permanente. Comincia dall'ultimo piano con gli antichi maestri e scendi in ordine cronologico verso gli impressionisti e il Novecento.",
              durationMin: 120,
            },
            {
              poiSlug: "retiro-park",
              text: "Entra nel Retiro dietro i musei per l'aria del tardo pomeriggio, prendendo una barca a remi sul lago e girando fino al Palazzo di Cristallo. Rimette in sesto le gambe tra i due blocchi d'arte della giornata.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "reina-sofia",
              text: "Prendi il Reina Sofia nella sua finestra serale gratuita (19:00-21:00, chiuso il martedì), andando prima alla Sala 205 per Guernica e poi verso Dali e Miro. Arriva presto, perché la fascia gratuita crea una fila alla porta.",
              durationMin: 90,
            },
            {
              text: "Cena vicino ad Anton Martin o di nuovo verso Malasana, entrando nel ritmo tardo di Madrid con le tapas anziché con un pasto seduto pesante. Qui alle 21 le cucine si stanno solo scaldando.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Madrid asburgica: Palazzo Reale, Plaza Mayor, Sol, tramonto a Debod",
          morning: [
            {
              poiSlug: "royal-palace",
              text: "Sii al Palazzo Reale per le 10 con un biglietto prenotato, avendo controllato che non sia chiuso per una cerimonia di Stato. Fa' le sale di rappresentanza e l'Armeria Reale, poi attraversa verso la gratuita Cattedrale dell'Almudena e i Giardini Sabatini.",
              durationMin: 120,
            },
            {
              poiSlug: "mercado-de-san-miguel",
              text: "Assaggia un pranzo presto al Mercato di San Miguel accanto alla Plaza Mayor, comprando qualche tapa da banchi diversi e mangiando in piedi. Tieni leggero, perché è una tappa di degustazione, non il pasto principale della giornata.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "plaza-mayor",
              text: "Goditi la piazza porticata della Plaza Mayor, poi percorri i vecchi vicoli fino alla Puerta del Sol e al segno del Chilometro Zero al centro geografico della Spagna. Tieni la borsa chiusa tra la folla di Sol.",
              durationMin: 75,
            },
            {
              poiSlug: "plaza-de-cibeles",
              text: "Passeggia fino alla Plaza de Cibeles per la fontana e il palazzo, e paga i pochi euro per salire al mirador del Palacio de Cibeles per un'ampia veduta lungo il Paseo del Prado. Fa da ponte tra il nucleo antico e i boulevard.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "temple-of-debod",
              text: "Cammina fino al Tempio di Debod per il tramonto, arrivando 30 minuti prima per un posto alla ringhiera mentre la pietra dell'antico Egitto cattura l'ultima luce sopra la Casa de Campo. È il classico tramonto gratuito di Madrid.",
              durationMin: 60,
            },
            {
              poiSlug: "gran-via",
              text: "Torna attraverso una Gran Via illuminata, percorrendo le grandi facciate verso la cupola del Metropolis, poi cena in centro. Tieni telefoni e borse al sicuro su questo tratto ad alto rischio borseggio.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "I barrios: La Latina, El Rastro, Malasana",
          morning: [
            {
              poiSlug: "el-rastro",
              text: "Se è domenica, tuffati in El Rastro prima delle 11 mentre è percorribile, scendendo lungo Ribera de Curtidores attraverso i vicoli di La Latina con gli oggetti di valore in una tasca frontale. Ogni altro giorno, passa la mattinata a vagare invece per le strade e le piazze medievali di La Latina.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "cava-baja-tapas",
              text: "Sistemati a La Latina per un lungo pranzo, facendo un giro tra la Cava Baja e la Cava Alta con un vermut mentre il mercato si spegne, nella tradizione domenicale. Uno o due piatti per bar, in piedi al bancone, poi prosegui.",
              durationMin: 120,
            },
            {
              text: "Cammina a nord verso Malasana per il pomeriggio, curiosando tra i negozi vintage e i caffè di terza ondata attorno alla Plaza del Dos de Mayo. È qui che nacque la Movida degli anni Ottanta ed è dove la città si sente ancora più giovane.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Aperitivo e cena a Malasana o nella vicina Chueca, saltando tra piccole cucine e cocktail bar mentre i quartieri si riempiono. Prenota ovunque abbia un nome, perché i buoni tavoli se ne vanno entro le 21:30 nei weekend.",
              durationMin: 150,
            },
          ],
        },
      ],
    },
    {
      citySlug: "madrid",
      days: 4,
      summary:
        "Quattro giorni sono il punto ideale per una prima visita a Madrid, trasformando uno sprint di tre giorni in una vera vacanza con spazio per respirare. I giorni da uno a tre coprono l'essenziale: il triangolo dell'arte (Prado, Reina Sofia per Guernica, Thyssen), il nucleo antico asburgico (Palazzo Reale, Plaza Mayor, Sol, Tempio di Debod) e una giornata di barrio tra La Latina, El Rastro e Malasana. Il quarto giorno è la valvola di sfogo, e hai scelte vere: l'elegante Salamanca e lo shopping su Serrano abbinati a un tour dello stadio Bernabeu, oppure una gita di un giorno intero a Toledo, a 33 minuti di treno ad alta velocità, o a Segovia per il suo acquedotto romano e il fiabesco Alcazar, a circa 30 minuti di treno. Questa durata va bene per chi detesta la marcia forzata, per le coppie e per chiunque abbia voli che incorniciano il viaggio in modo scomodo. Piazzati a La Latina per quattro giorni: hai accettato un ritmo più lento, e i suoi vicoli delle tapas e il mercato domenicale rendono il rientro a casa ogni sera la parte migliore. Prenota in anticipo il Prado, il Palazzo Reale e il Bernabeu.",
      stayNeighborhoodSlug: "la-latina",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Il triangolo dell'arte: Prado, Retiro, Reina Sofia, Thyssen",
          morning: [
            {
              poiSlug: "prado-museum",
              text: "Comincia con l'apertura delle 10 al Prado su una fascia prenotata, andando dritto a Las Meninas e alle pitture nere di Goya prima della folla. Concedi ai capolavori almeno due ore e mezza.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "thyssen-bornemisza",
              text: "Dopo pranzo sul Paseo del Prado, attraversa il boulevard fino al Thyssen-Bornemisza, gratuito il lunedì pomeriggio. Procedi dall'alto verso il basso dagli antichi maestri fino agli impressionisti e al Novecento.",
              durationMin: 120,
            },
            {
              poiSlug: "retiro-park",
              text: "Entra nel Retiro dietro i musei per il tardo pomeriggio, remando sul lago e girando accanto al Palazzo di Cristallo. Il parco è la pausa verde tra le due gallerie della giornata.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "reina-sofia",
              text: "Prendi il Reina Sofia nella sua finestra serale gratuita (chiuso il martedì), andando prima alla Sala 205 per Guernica e poi al resto. Arriva un po' in anticipo per battere la coda della fascia gratuita.",
              durationMin: 90,
            },
            {
              poiSlug: "cava-baja-tapas",
              text: "Rientra tranquillo a La Latina per un giro di tapas alla Cava Baja dalle 21, uno o due piatti e un drink per bar. In piedi al bancone, è la cena quotidiana di Madrid.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Madrid asburgica: Palazzo Reale, Plaza Mayor, Sol, tramonto a Debod",
          morning: [
            {
              poiSlug: "royal-palace",
              text: "Sii al Palazzo Reale per le 10 con un biglietto prenotato, controllato la sera prima rispetto alle chiusure per eventi di Stato. Fa' le sale di rappresentanza e l'Armeria, poi la gratuita Cattedrale dell'Almudena e i Giardini Sabatini.",
              durationMin: 120,
            },
            {
              poiSlug: "mercado-de-san-miguel",
              text: "Assaggia un pranzo leggero al Mercato di San Miguel accanto alla Plaza Mayor, qualche tapa da banchi diversi, mangiata in piedi. Tienilo una degustazione più che il pasto completo.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "plaza-mayor",
              text: "Goditi la Plaza Mayor, poi cammina fino alla Puerta del Sol e al segno del Chilometro Zero, il centro letterale della Spagna. Borsa chiusa tra la folla di Sol.",
              durationMin: 60,
            },
            {
              poiSlug: "plaza-de-cibeles",
              text: "Cammina fino alla Plaza de Cibeles per la fontana e il palazzo, salendo al mirador di Cibeles per la veduta sul Paseo del Prado. Collega il nucleo antico ai grandi boulevard.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "temple-of-debod",
              text: "Raggiungi il Tempio di Debod 30 minuti prima del tramonto per il classico tramonto gratuito di Madrid, la pietra egizia riflessa nel suo specchio d'acqua. Assicurati presto un posto alla ringhiera.",
              durationMin: 60,
            },
            {
              poiSlug: "gran-via",
              text: "Torna lungo una Gran Via illuminata verso la cupola del Metropolis, poi cena in centro. Telefoni e borse al sicuro su questo tratto a rischio borseggio.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "I barrios: La Latina, El Rastro, Malasana",
          morning: [
            {
              poiSlug: "el-rastro",
              text: "Di domenica, va' a El Rastro prima delle 11 mentre è ancora percorribile, giù per Ribera de Curtidores e i vicoli di La Latina con gli oggetti di valore in una tasca frontale. Altrimenti vaga per le piazze medievali di La Latina.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Lungo pranzo a La Latina con un vermut mentre il mercato si spegne, poi curiosa tra i negozi vintage e i caffè di Malasana attorno alla Plaza del Dos de Mayo. È il pomeriggio lento, tra cibo e quartiere, che i viaggi più corti non possono concedersi.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              text: "Aperitivo e cena tra Malasana e Chueca, muovendoti tra piccole cucine e cocktail bar mentre si riempiono. Prenota in anticipo ovunque abbia un nome, i buoni tavoli se ne vanno entro le 21:30 nei weekend.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Salamanca e il Bernabeu, o una gita a Toledo o Segovia",
          morning: [
            {
              text: "L'opzione A resta in città: curiosa nell'elegante griglia di Salamanca e nella strada delle firme lungo la Calle Serrano, con una sosta caffè nei suoi locali chic. L'opzione B la lascia: prendi il treno ad alta velocità di 33 minuti per Toledo, o il treno di circa 30 minuti per Segovia, partendo presto per battere le folle delle gite in giornata.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "santiago-bernabeu",
              text: "Se sei rimasto in città, fa' il tour dello stadio Santiago Bernabeu, prenotato online per una fascia oraria e verificato rispetto al calendario delle partite, perché i tour sono chiusi nei giorni di partita. La metro ti lascia a Santiago Bernabeu sulla linea 10.",
              durationMin: 120,
            },
            {
              text: "Con l'opzione gita, passa il pomeriggio nella città vecchia di Toledo, sulla collina, tra cattedrale, sinagoghe ed El Greco, oppure nell'acquedotto romano e nel fiabesco Alcazar di Segovia, prima del treno di rientro nel tardo pomeriggio. Entrambe sono andate e ritorno agevoli che lasciano comunque un'ultima serata a Madrid.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              text: "Di nuovo a La Latina per una cena d'addio, spendendo un po' di più nell'ultima sera in una taverna della Cava Baja individuata prima. Croquetas, jamon e un'ultima caña per chiudere il viaggio.",
              durationMin: 120,
            },
            {
              text: "Concludi con un bicchiere della staffa in un vicolo tranquillo di La Latina, a due passi dal letto, senza tragitto di rientro da pianificare. Quella comodità è tutto il senso di alloggiare qui per quattro giorni.",
              durationMin: 45,
            },
          ],
        },
      ],
    },
  ],
};

export default madridIt;
