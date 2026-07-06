import type { CityData } from "../types";

const barcelonaIt: CityData = {
  city: {
    slug: "barcelona",
    name: "Barcellona",
    country: "Spagna",
    countrySlug: "spain",
    lat: 41.3874,
    lng: 2.1686,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "BCN",
    airportToCenter:
      "Aerobus da entrambi i terminal fino a Placa Catalunya, circa 35 min, 7,25 EUR a tratta, con corse ogni 5-10 min. Opzioni più economiche: il treno R2 Nord dal T2 fino a Passeig de Gracia o Sants per circa 4,90 EUR (o gratis con una tessera T-casual/Hola), oppure la metro linea L9 Sud, panoramica ma lenta e con vari cambi per raggiungere il centro.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [8],
    monthlyNotes: {
      1: "Fresco e luminoso sui 14-15C, con le folle più basse dell'anno e le camere più economiche, anche se il mare è troppo freddo per la spiaggia. La sfilata dei Re Magi (Cavalcada de Reis) il 5 gennaio riempie le strade di carri e dolci, e i saldi di gennaio riempiono i negozi.",
      2: "Ancora mite sui 15C con poche folle e prezzi bassi, e spesso abbastanza sereno per un lungo pranzo all'aperto a mezzogiorno. Il Carnevale (Carnestoltes) anima la settimana prima della Quaresima con sfilate in maschera nei barris, e Santa Eulalia intorno al 12 febbraio porta torri umane e giganti nel centro storico.",
      3: "Le massime salgono verso i 17-18C e le giornate si allungano, con i turisti che aumentano solo a fine mese attorno a Pasqua. Occhio al calendario: se la Settimana Santa cade a marzo, il centro e gli hotel si riempiono e i prezzi salgono, altrimenti resta un mese tranquillo e conveniente.",
      4: "Uno dei mesi migliori sui 19-20C con pomeriggi caldi e colline verdi, anche se Pasqua può affollare il centro se cade adesso. Sant Jordi il 23 aprile è il momento clou, una giornata di libri e rose in cui La Rambla e il Passeig de Gracia si trasformano in bancarelle di libri all'aperto e le coppie si scambiano rose.",
      5: "Costantemente caldo sui 22-23C con serate lunghe e poca pioggia, probabilmente il mese migliore per visitarla. Il Primavera Sound di solito cade a fine maggio o inizio giugno e riempie gli hotel in fretta, quindi controlla le date del festival prima di fissare le tue, e inizia sul serio la stagione delle cene in terrazza.",
      6: "Caldo sui 26-27C, soleggiato e affollato mentre parte la stagione estiva e le spiagge si riempiono nei weekend. Sant Joan nella notte del 23 giugno è una scatenata festa di fuochi d'artificio e falò sulla spiaggia che va avanti fino all'alba, quindi aspettati rumore, folle enormi in riva al mare e cava ovunque.",
      7: "Piena estate sui 28-29C, umida e affollata, con le spiagge stracolme e le grandi attrazioni di Gaudi esaurite con giorni di anticipo. Fai la Sagrada Familia e il Park Guell all'apertura, poi ripiega sul mare o su una terrazza ombreggiata nelle ore appiccicose del primo pomeriggio.",
      8: "Il mese più caldo, più umido e più affollato sui 29C, quello da evitare: molti negozi e ristoranti a gestione familiare chiudono per le ferie e la gente del posto parte per la costa. Se agosto è inevitabile, prenota l'aria condizionata, concentra le visite alla prima mattina, e nota la Festa Major de Gracia a metà agosto, quando le strade di Gracia gareggiano a colpi di decorazioni elaborate.",
      9: "Calore estivo senza il peggio della calura: 27C a inizio mese, in calo nel corso del mese, con il mare ancora balneabile. La Merce, il più grande festival della città, si svolge intorno al 24 settembre con torri umane, corse del fuoco (correfocs), giganti e concerti gratuiti in tutto il centro, ed è il momento migliore in assoluto per sentire la cultura propria della città.",
      10: "Giornate calde intorno ai 23C con il ritorno delle prime piogge vere e una splendida luce radente, e le folle che si diradano nettamente dopo la prima settimana. È un'ottima scelta di bassa stagione sia per il clima che per i prezzi degli hotel, con le terrazze ancora aperte a mezzogiorno.",
      11: "Più fresco sui 18-19C con periodi piovosi regolari, ma tante giornate luminose tra un fronte e l'altro e le grandi attrazioni più tranquille dell'autunno. Tornano i prezzi di bassa stagione e puoi entrare senza prenotare in ristoranti che a maggio la richiederebbero, anche se le giornate di mare sono finite.",
      12: "Mite per l'inverno sui 15-16C ma più piovoso, con i mercatini di Natale come la Fira de Santa Llucia accanto alla cattedrale e la curiosa figurina catalana del caganer da cercare. Tranquillo fino al periodo tra Natale e Capodanno, quando i prezzi salgono e le strade attorno alla cattedrale si riempiono di luci e folle.",
    },
    climate: {
      1: { highC: 14, lowC: 5, rainyDays: 5 },
      2: { highC: 15, lowC: 5, rainyDays: 5 },
      3: { highC: 17, lowC: 7, rainyDays: 5 },
      4: { highC: 19, lowC: 9, rainyDays: 6 },
      5: { highC: 22, lowC: 13, rainyDays: 6 },
      6: { highC: 26, lowC: 17, rainyDays: 4 },
      7: { highC: 29, lowC: 20, rainyDays: 2 },
      8: { highC: 29, lowC: 20, rainyDays: 4 },
      9: { highC: 27, lowC: 18, rainyDays: 5 },
      10: { highC: 23, lowC: 14, rainyDays: 7 },
      11: { highC: 18, lowC: 9, rainyDays: 6 },
      12: { highC: 15, lowC: 6, rainyDays: 6 },
    },
    budgetLevel: "mid",
    budgetPerDay: { budget: 70, mid: 150, high: 300 },
    tagline: "Gaudi, vicoli gotici e la spiaggia in un'unica città percorribile a piedi.",
    heroIntro:
      "Barcellona unisce i selvaggi capolavori modernisti di Gaudi a un centro storico medievale e a una spiaggia cittadina, tutto in un centro compatto che puoi coprire in gran parte a piedi, con la metro per le attrazioni più lontane. Tre giorni sono il giusto equilibrio per dividere il percorso di Gaudi, il cuore gotico e un lento pomeriggio in riva al mare senza marce forzate. Vieni in primavera o all'inizio dell'autunno, prenota la Sagrada Familia e il Park Guell settimane prima di partire, e tieni le borse chiuse con la cerniera, perché questa è una delle capitali europee dei borseggiatori.",
    accent: { from: "#1B9AAA", to: "#E8632C", ink: "#0C4A52" },
    neighborhoodSlugs: [
      "barri-gotic",
      "el-born",
      "eixample",
      "gracia",
      "barceloneta",
    ],
    nearbyCitySlugs: ["seville", "granada"],
  },

  neighborhoods: [
    {
      slug: "barri-gotic",
      citySlug: "barcelona",
      name: "Barri Gotic",
      lat: 41.3833,
      lng: 2.1777,
      bestFor: ["first-time", "romantic", "budget"],
      vibe: "Il cuore medievale della città, un labirinto di stretti vicoli in pietra tra la cattedrale e La Rambla che si apre su piazze nascoste. Tutto ciò che un visitatore alla prima volta vuole vedere sta entro dieci minuti a piedi, e i vicoli hanno un'atmosfera speciale di notte, quando le folle diurne si diradano. È centrale ed economico per dormire, ma è anche il quartiere più affollato e più esposto ai borseggi.",
      pros: [
        "Raggiungi a piedi la cattedrale, La Rambla, il porto ed El Born senza mezzi",
        "Fitto di bar di tapas economici, caffè e piccoli hotel",
        "Vicoli in pietra suggestivi che si svuotano e risplendono dopo cena",
      ],
      cons: [
        "La zona più colpita dai borseggi in città, soprattutto vicino a La Rambla",
        "Rumoroso per il viavai di pedoni e bar fino a tardi, poco adatto a chi ha il sonno leggero",
        "Alcuni ristoranti nelle piazze principali vivono di rendita sulla posizione",
      ],
    },
    {
      slug: "el-born",
      citySlug: "barcelona",
      name: "El Born",
      lat: 41.3847,
      lng: 2.1817,
      bestFor: ["romantic", "nightlife", "local"],
      vibe: "Il quartiere più elegante del centro storico, appena a est del cuore gotico, costruito attorno alla chiesa di Santa Maria del Mar e al Museo Picasso. Boutique, wine bar e cocktail bar animano i vicoli medievali, e resta vivace senza sembrare una trappola per turisti. Ti offre l'atmosfera del centro storico con un tono più adulto e improntato al design.",
      pros: [
        "La migliore concentrazione di wine bar, cocktail bar e tapas del centro storico",
        "Raggiungi a piedi il Museo Picasso, Santa Maria del Mar e il parco della Ciutadella",
        "Vicoli acciottolati che restano vivaci ma conservano un'anima locale e da boutique",
      ],
      cons: [
        "I bar attorno ai vicoli principali diventano rumorosi nelle sere del weekend",
        "Nessuna metro direttamente all'interno, anche se Jaume I e Barceloneta sono vicine",
        "Gli hotel costano più cari del vicino quartiere gotico",
      ],
    },
    {
      slug: "eixample",
      citySlug: "barcelona",
      name: "Eixample",
      lat: 41.3915,
      lng: 2.1649,
      bestFor: ["first-time", "family", "romantic"],
      vibe: "L'elegante griglia tracciata nell'Ottocento, con ampi viali, angoli smussati e la maggiore concentrazione di facciate moderniste della città lungo il Passeig de Gracia. Ti mette a breve distanza a piedi da Casa Batllo, La Pedrera e Sagrada Familia, su una griglia della metro ben collegata. Calmo, ordinato e centrale senza la calca del centro storico.",
      pros: [
        "Raggiungi a piedi le case di Gaudi sul Passeig de Gracia e sei vicino alla Sagrada Familia",
        "Fitta griglia della metro, diretta al treno per l'aeroporto e a ogni altro punto",
        "Strade ampie e silenziose di notte e una buona offerta di hotel di fascia media",
      ],
      cons: [
        "Sembra più funzionale e meno romantico dei vicoli del centro storico",
        "Il tratto proprio sul Passeig de Gracia è caro per dormirci",
        "Alcuni isolati sono a una lunga camminata rettilinea dalla spiaggia e dal porto",
      ],
    },
    {
      slug: "gracia",
      citySlug: "barcelona",
      name: "Gracia",
      lat: 41.4022,
      lng: 2.1568,
      bestFor: ["local", "budget", "nightlife"],
      vibe: "Un ex villaggio inghiottito dalla città, a nord dell'Eixample, che conserva la sua atmosfera fatta di piccole piazze e una forte identità locale. Negozi indipendenti, bar bohémien e ristoranti a gestione familiare circondano piazze dove la gente del posto beve all'aperto nelle sere calde. È la base per chi vuole il quartiere autentico anziché la cartolina, con il Park Guell su per la collina sopra.",
      pros: [
        "Vita di quartiere autentica, piazze piene di gente del posto, non di gruppi turistici",
        "Ristorazione dal miglior rapporto qualità-prezzo e una scena di bar vivace ma senza pretese",
        "Raggiungibile a piedi fino al Park Guell e in metro fino al centro",
      ],
      cons: [
        "A 20-25 minuti a piedi o a una fermata di metro dal centro storico e dalla spiaggia",
        "Le piazze più frequentate diventano rumorose nelle sere del weekend",
        "Meno hotel di grandi catene, più appartamenti e piccole guesthouse",
      ],
    },
    {
      slug: "barceloneta",
      citySlug: "barcelona",
      name: "Barceloneta",
      lat: 41.3797,
      lng: 2.1894,
      bestFor: ["family", "budget", "local"],
      vibe: "L'antico quartiere dei pescatori incastrato tra il porto e la spiaggia cittadina, una griglia serrata di isolati stretti che si apre dritta sulla sabbia. È il posto dove dormire se lo scopo è la spiaggia, con locali di pesce e il lungomare a due passi. Pieno di carattere di giorno, e in estate i bar sul mare lo tengono animato fino a notte.",
      pros: [
        "A pochi passi dalla spiaggia cittadina e dal lungomare, senza bisogno di mezzi",
        "Metro Barceloneta sulla linea L4, un paio di fermate dal centro storico",
        "Autentici bar di pesce e vermut a una via dall'acqua",
      ],
      cons: [
        "I ristoranti sul lungomare sono trappole per turisti, mangia una via più all'interno",
        "Appartamenti angusti e caldi d'estate, e rumorosi vicino ai bar della spiaggia",
        "A una camminata o a una corsa di metro dalle attrazioni di Gaudi su nell'Eixample",
      ],
    },
  ],

  pois: [
    {
      slug: "sagrada-familia",
      citySlug: "barcelona",
      name: "Sagrada Familia",
      lat: 41.4036,
      lng: 2.1744,
      kind: "sight",
      needsBooking: true,
      tip: "Compra un biglietto con orario online da giorni a settimane prima, si esaurisce e non c'è un'opzione utile all'ingresso in alta stagione. Prenota la prima fascia dopo l'apertura per l'interno più vuoto e la migliore luce del mattino attraverso le vetrate della facciata della Natività a est, che presto risplendono di blu e verde. La salita alle torri è un supplemento a pagamento separato con la sua fascia oraria, quindi aggiungilo alla prenotazione, non in giornata.",
    },
    {
      slug: "park-guell",
      citySlug: "barcelona",
      name: "Park Guell",
      lat: 41.4145,
      lng: 2.1527,
      kind: "park",
      needsBooking: true,
      tip: "La Zona Monumentale con la terrazza a mosaico e la famosa lucertola richiede un biglietto con orario che si esaurisce con giorni di anticipo, quindi prenota online e non presentarti senza. Prendi la prima fascia della giornata, verso le 9:30, per battere sia le folle sia il caldo sulla terrazza esposta, e usa le scale mobili all'aperto della Baixada de la Gloria per risparmiare la ripida salita a piedi. Il parco boscoso circostante è gratuito se vuoi solo i panorami senza i mosaici.",
    },
    {
      slug: "casa-batllo",
      citySlug: "barcelona",
      name: "Casa Batllo",
      lat: 41.3917,
      lng: 2.1649,
      kind: "sight",
      needsBooking: true,
      tip: "La casa dalle squame di drago di Gaudi sul Passeig de Gracia vende biglietti con orario che vanno via in fretta in alta stagione, quindi prenota online in anticipo anziché fare la fila. Vai all'apertura o nell'ultima fascia prima della chiusura per evitare la calca dei gruppi sulla scala stretta, e usa il tablet in dotazione con la realtà aumentata per i dettagli animati. Abbinala a La Pedrera, a cinque minuti a piedi su per lo stesso viale.",
    },
    {
      slug: "la-pedrera",
      citySlug: "barcelona",
      name: "La Pedrera (Casa Mila)",
      lat: 41.3953,
      lng: 2.1619,
      kind: "sight",
      needsBooking: true,
      tip: "Il palazzo di appartamenti dalla facciata a onde di Gaudi è un'altra attrazione con biglietto a orario, quindi prenota online anziché presentarti senza. Il tetto con i suoi comignoli a elmo di guerriero è la ricompensa, migliore nell'ultima fascia diurna per una luce più morbida, e in estate la sessione serale a parte sul tetto, 'Le notti di Gaudi', con musica e drink, vale l'upgrade. Si trova a cinque minuti su per il Passeig de Gracia da Casa Batllo, quindi fai le due insieme.",
    },
    {
      slug: "la-rambla",
      citySlug: "barcelona",
      name: "La Rambla",
      lat: 41.3809,
      lng: 2.1729,
      kind: "sight",
      needsBooking: false,
      tip: "È l'arteria turistica da percorrere una volta per l'atmosfera e le statue viventi, non dove mangiare o bere, dove le terrazze fanno pagare il doppio per cibo mediocre. È il peggior punto per i borseggi della città, quindi tieni la borsa chiusa e davanti e il telefono fuori dalla tasca posteriore. Infilati nel mercato della Boqueria a metà strada e nelle vie del Barri Gotic a est per tutto ciò che ti serve davvero.",
    },
    {
      slug: "barcelona-cathedral",
      citySlug: "barcelona",
      name: "Barri Gotic e Cattedrale di Barcellona",
      lat: 41.3839,
      lng: 2.1762,
      kind: "sight",
      needsBooking: false,
      tip: "La cattedrale gotica fa pagare un piccolo biglietto d'ingresso ai turisti durante il giorno (circa 9 EUR, incluso l'ascensore per il tetto e il chiostro con le sue oche residenti), e le ore gratuite sono riservate al culto la mattina presto e la sera tardi. Vieni all'apertura per avere il chiostro tranquillo, poi perditi di proposito nei vicoli circostanti, puntando a Placa Sant Felip Neri e al quartiere ebraico medievale. La terrazza sul tetto offre una vista ravvicinata sulle guglie del centro storico.",
    },
    {
      slug: "picasso-museum",
      citySlug: "barcelona",
      name: "Museo Picasso",
      lat: 41.3852,
      lng: 2.1807,
      kind: "museum",
      needsBooking: true,
      tip: "Prenota una fascia oraria online, la coda sullo stretto vicolo di El Born è lunga e il museo limita gli ingressi. La collezione è più forte sugli anni giovanili di Picasso a Barcellona e sulla sua serie Las Meninas, non sulle celebri opere più tarde, quindi vieni per la sua formazione più che per i pezzi famosi. L'ingresso è gratuito il giovedì sera dalle 17 e la prima domenica del mese, ma devi comunque prenotare online in anticipo la fascia gratuita.",
    },
    {
      slug: "la-boqueria",
      citySlug: "barcelona",
      name: "Mercato de La Boqueria",
      lat: 41.3818,
      lng: 2.1717,
      kind: "food",
      needsBooking: false,
      tip: "Il mercato coperto affacciato su La Rambla è aperto dal lunedì al sabato, all'incirca dalle 8 alle 20:30, ed è al meglio a metà mattina, prima dei gruppi turistici e dopo che i banchi sono allestiti. I banchi proprio all'ingresso hanno prezzi maggiorati per i turisti, quindi cammina verso il fondo e i lati per i veri pescivendoli, i banchi di jamon e uno sgabello a un bar in attività come Pinotxo o El Quim per piatti cucinati al momento. Chiude la domenica.",
    },
    {
      slug: "barceloneta-beach",
      citySlug: "barcelona",
      name: "Spiaggia della Barceloneta",
      lat: 41.378,
      lng: 2.1925,
      kind: "experience",
      needsBooking: false,
      tip: "La spiaggia cittadina più vicina al centro, stracolma d'estate, quindi arriva prima delle 11 per un posto e non lasciare mai le borse incustodite, perché i furti in spiaggia sono continui. I ristoranti di paella e sangria sul lungomare sono trappole care, quindi mangia una via più indietro nella Barceloneta vera e propria o porta un picnic. Per sabbia più tranquilla e pulita, cammina verso nord fino alle spiagge del Bogatell o della Mar Bella.",
    },
    {
      slug: "montjuic",
      citySlug: "barcelona",
      name: "Montjuic e Fontana Magica",
      lat: 41.3711,
      lng: 2.1519,
      kind: "viewpoint",
      needsBooking: false,
      tip: "La collina sopra il porto ospita la fondazione Joan Miro, il museo d'arte MNAC, i giardini e il castello, quindi dedicagli mezza giornata e prendi la funicolare e poi la cabinovia per risparmiarti la salita. La Fontana Magica sotto il MNAC offre spettacoli gratuiti di luci e musica in serate selezionate (di solito dal giovedì al sabato d'estate, meno serate in bassa stagione), quindi controlla il programma aggiornato prima di andare, perché viene spenta d'inverno e durante le siccità. Arriva 20 minuti prima per un posto sugli scalini.",
    },
    {
      slug: "palau-de-la-musica",
      citySlug: "barcelona",
      name: "Palau de la Musica Catalana",
      lat: 41.3875,
      lng: 2.1751,
      kind: "sight",
      needsBooking: true,
      tip: "La sala da concerto modernista è visitabile solo con una visita guidata a orario o assistendo a un concerto, e le fasce della visita si esauriscono, quindi prenota online in anticipo. Il lucernario in vetro colorato e la facciata a colonne di mosaico della sala principale sono il motivo per venire, e una breve visita guidata basta a vederli. Se puoi, prenota piuttosto un vero concerto serale, spesso un programma di chitarra spagnola o musica catalana ben prezzato, per vedere la sala illuminata e in uso.",
    },
    {
      slug: "santa-maria-del-mar",
      citySlug: "barcelona",
      name: "El Born e Santa Maria del Mar",
      lat: 41.3838,
      lng: 2.182,
      kind: "sight",
      needsBooking: false,
      tip: "La chiesa del XIV secolo è a ingresso gratuito durante gli orari di culto ma fa pagare un piccolo biglietto (circa 10 EUR) per la visita guidata al tetto e alla cripta, che è quella che vale la pena fare per la vista e per il puro interno gotico catalano. Vieni nei vicoli circostanti di El Born di prima sera per i wine bar e i locali di tapas, puntando fuori dal principale Passeig del Born per un miglior rapporto qualità-prezzo. La navata slanciata e spoglia della chiesa è l'antidoto agli eccessi di Gaudi.",
    },
    {
      slug: "bunkers-del-carmel",
      citySlug: "barcelona",
      name: "Punto panoramico dei Bunkers del Carmel",
      lat: 41.4194,
      lng: 2.1622,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Gli antichi bunker antiaerei della guerra civile sul Turo de la Rovira offrono la migliore vista gratuita a 360 gradi su tutta la città e verso il mare, ed è il posto locale per il tramonto. In cima non c'è nessun negozio ed è a 15 minuti di salita a piedi dalla fermata dell'autobus più vicina, quindi porta le tue bevande e i tuoi snack, più uno strato in più perché tira vento. L'accesso è ufficialmente limitato dopo le 21:30 per contenere il rumore, quindi vieni per il tramonto, non per una serata tarda.",
    },
    {
      slug: "parc-de-la-ciutadella",
      citySlug: "barcelona",
      name: "Parc de la Ciutadella",
      lat: 41.3884,
      lng: 2.1866,
      kind: "park",
      needsBooking: false,
      tip: "Lo spazio verde centrale della città accanto a El Born è gratuito e aperto tutto il giorno, il posto naturale per rallentare tra un'attrazione e l'altra del centro storico. Noleggia una barca a remi sul laghetto, ammira l'elaborata fontana della Cascada che un giovane Gaudi contribuì a progettare, e fai un picnic sui prati con la gente del posto in un pomeriggio caldo. Il parlamento catalano e un piccolo zoo si trovano all'interno del parco se hai bambini al seguito.",
    },
  ],

  itineraries: [
    {
      citySlug: "barcelona",
      days: 2,
      summary:
        "Due giorni coprono le attrazioni di punta di Barcellona, ma è una corsa ai momenti clou, perché la città ne vuole davvero tre per dividere come si deve il percorso di Gaudi, il centro storico e la spiaggia. In 48 ore puoi fare gli essenziali di Gaudi il primo giorno (Sagrada Familia, le case del Passeig de Gracia, Park Guell) e il centro storico il secondo (la cattedrale, El Born, il Museo Picasso, La Boqueria, La Rambla), infilando una breve sosta in spiaggia o al tramonto se l'energia regge. Cosa devi tagliare: Montjuic, il Palau de la Musica, un vero pomeriggio in spiaggia e ogni lento indugio, quindi è una marcia. Va bene per un weekend, uno scalo o un primo assaggio. Le cose imprescindibili: prenota in anticipo i biglietti a orario della Sagrada Familia e del Park Guell settimane prima di partire, più Casa Batllo o La Pedrera, o non entrerai affatto. Sistemati nel Barri Gotic così la giornata del centro storico si fa a piedi e gli spostamenti in metro per Gaudi sono rapidi. Tieni le borse chiuse con la cerniera, il centro storico e la metro sono covi di borseggiatori.",
      stayNeighborhoodSlug: "barri-gotic",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Percorso di Gaudi: Sagrada Familia, Passeig de Gracia, Park Guell",
          morning: [
            {
              poiSlug: "sagrada-familia",
              text: "Inizia dalla Sagrada Familia per la tua prima fascia prenotata, prima delle folle e con il sole del mattino che illumina le vetrate blu-verdi della facciata della Natività. Dedicaci 90 minuti pieni per l'interno e le facciate, e sali su una torre se hai aggiunto la fascia.",
              durationMin: 90,
            },
            {
              poiSlug: "casa-batllo",
              text: "Prendi la metro per due fermate fino a Passeig de Gracia per le case di Gaudi. Fai Casa Batllo nella tua fascia oraria per la facciata a squame di drago e il tablet audio animato, poi cammina cinque minuti su per il viale.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "la-pedrera",
              text: "Vedi La Pedrera (Casa Mila) a cinque minuti su per lo stesso viale, nella tua fascia oraria, per la facciata a onde e i comignoli a elmo di guerriero sul tetto. Fai un pranzo veloce in una via laterale fuori dal Passeig de Gracia anziché sulle care terrazze del viale.",
              durationMin: 90,
            },
            {
              poiSlug: "park-guell",
              text: "Sali al Park Guell per una fascia oraria pomeridiana nella Zona Monumentale, prendendo la metro e poi le scale mobili all'aperto per risparmiare la ripida salita. Vedi la terrazza a mosaico e la lucertola, poi resta per i punti panoramici boscosi e gratuiti sulla città.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "santa-maria-del-mar",
              text: "Torna giù e dedica la sera a El Born, vagando per i vicoli medievali attorno a Santa Maria del Mar mentre i wine bar si riempiono. Prenota un tavolo di tapas fuori dal principale Passeig del Born, dove stanno i locali dal miglior rapporto qualità-prezzo, verso le 20:30.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Centro storico: cattedrale, Picasso, Boqueria, La Rambla",
          morning: [
            {
              poiSlug: "barcelona-cathedral",
              text: "Inizia dalla Cattedrale di Barcellona all'apertura per avere il chiostro e le sue oche in tranquillità, e sali alla terrazza sul tetto per la vista sulle guglie gotiche. Poi perditi di proposito nel Barri Gotic, puntando a Placa Sant Felip Neri e all'antico quartiere ebraico.",
              durationMin: 90,
            },
            {
              poiSlug: "picasso-museum",
              text: "Cammina verso est fino a El Born, al Museo Picasso nella tua fascia prenotata, per i suoi anni giovanili a Barcellona e la serie Las Meninas anziché le celebri opere più tarde. È un museo compatto, quindi 75 minuti bastano prima di pranzo.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "la-boqueria",
              text: "Taglia fino al mercato de La Boqueria affacciato su La Rambla per il pranzo, camminando verso i banchi in fondo per uno sgabello a un bar in attività come Pinotxo o El Quim per piatti cucinati al momento. I banchi all'ingresso hanno prezzi maggiorati per i turisti, quindi continua a camminare.",
              durationMin: 75,
            },
            {
              poiSlug: "la-rambla",
              text: "Percorri La Rambla per intero una volta per l'atmosfera e le statue viventi, tenendo la borsa chiusa e davanti, perché è il peggior punto per i borseggi della città. Seguila fino alla colonna di Colombo e al porto in fondo.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "barceloneta-beach",
              text: "Dal porto, percorri il lungomare fino alla spiaggia della Barceloneta per un tratto di sabbia a fine pomeriggio e un bagno se fa abbastanza caldo. Sorveglia le borse, perché i furti in spiaggia sono continui.",
              durationMin: 90,
            },
            {
              text: "Fai una cena d'addio alla Barceloneta una via più indietro rispetto al lungomare, dove il pesce è onesto e le trappole stanno sul lungomare. Ordina pesce fresco o una vera paella a prezzi da pranzo anziché le versioni da menu turistico sull'acqua.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "barcelona",
      days: 3,
      summary:
        "Sì, tre giorni sono la durata giusta per Barcellona, ed è quella che consigliamo per una prima visita. Dà al percorso di Gaudi una giornata piena (Sagrada Familia, le case del Passeig de Gracia, Park Guell), al centro storico la sua giornata (la cattedrale, El Born, il Museo Picasso, La Boqueria, La Rambla) e a un terzo giorno che mescola la spiaggia con la sala da concerto modernista e il parco della Ciutadella a un ritmo più tranquillo. Mangi bene tra l'Eixample, El Born e la Barceloneta, ci fai stare sia un vero pomeriggio in spiaggia sia un tramonto, e ti siedi comunque in una piazza anziché passarci di corsa. Cosa resta comunque tagliato: Montjuic per intero e ogni gita fuori porta, che è esattamente ciò che aggiunge un quarto giorno. Va bene per chi è alla prima volta, per le coppie e per chiunque prosegua poi verso Siviglia o Granada. Sistemati nell'Eixample: si raggiungono a piedi le case di Gaudi sul Passeig de Gracia, sta vicino alla Sagrada Familia, e la sua griglia della metro rende rapidi centro storico e spiaggia. Prenota in anticipo Sagrada Familia, Park Guell e le case del Passeig de Gracia settimane prima di partire, e tieni le borse chiuse con la cerniera nel centro storico e in metro.",
      stayNeighborhoodSlug: "eixample",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Percorso di Gaudi: Sagrada Familia, Passeig de Gracia, Park Guell",
          morning: [
            {
              poiSlug: "sagrada-familia",
              text: "Inizia dalla Sagrada Familia per la tua prima fascia prenotata, davanti alle folle e con la luce del mattino attraverso le vetrate della Natività a est. Prenditi 90 minuti pieni per l'interno e entrambe le facciate, aggiungendo una salita alla torre se ne hai prenotata una.",
              durationMin: 90,
            },
            {
              poiSlug: "casa-batllo",
              text: "Cammina o prendi una fermata di metro fino a Passeig de Gracia per Casa Batllo nella tua fascia oraria, per la facciata a squame di drago e il tablet audio animato. Dalla tua base nell'Eixample è tutto vicino, quindi mantieni un ritmo rilassato.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "la-pedrera",
              text: "Vedi La Pedrera (Casa Mila) a cinque minuti su per lo stesso viale nella tua fascia oraria, per la facciata a onde e i comignoli a elmo di guerriero sul tetto. Pranza in una tranquilla via laterale fuori dal Passeig de Gracia, non sulle terrazze del viale.",
              durationMin: 90,
            },
            {
              poiSlug: "park-guell",
              text: "Sali al Park Guell per una fascia oraria pomeridiana nella Zona Monumentale, usando la metro e poi le scale mobili all'aperto per saltare la ripida salita. Vedi la terrazza a mosaico e la lucertola, poi indugia sui punti panoramici boscosi e gratuiti mentre la luce si ammorbidisce.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              text: "Torna giù per cena nell'Eixample vicino alla tua base, dove i bar di tapas e i locali di vermut sono validi e liberi dal sovrapprezzo del centro storico. Prenota in anticipo per qualsiasi posto ben recensito, i tavoli buoni si riempiono entro le 21.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Centro storico: cattedrale, El Born, Picasso, Boqueria, La Rambla",
          morning: [
            {
              poiSlug: "barcelona-cathedral",
              text: "Inizia dalla Cattedrale di Barcellona all'apertura per il chiostro tranquillo e le sue oche, poi sali alla terrazza sul tetto per la vista sulle guglie gotiche. Vaga poi per i vicoli del Barri Gotic, puntando a Placa Sant Felip Neri e al quartiere ebraico medievale.",
              durationMin: 90,
            },
            {
              poiSlug: "picasso-museum",
              text: "Cammina verso est fino a El Born, al Museo Picasso nella tua fascia prenotata, forte sui suoi anni giovanili a Barcellona e sulla serie Las Meninas. È compatto, quindi 75 minuti lo coprono prima di pranzo.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "santa-maria-del-mar",
              text: "Entra nella vicina Santa Maria del Mar per la slanciata e spoglia navata gotica catalana, e fai la visita a piccolo pagamento del tetto e della cripta se la vista ti tenta. Poi curiosa tra le boutique e i vicoli di El Born attorno.",
              durationMin: 60,
            },
            {
              poiSlug: "la-boqueria",
              text: "Attraversa fino al mercato de La Boqueria affacciato su La Rambla per un pranzo tardo a un bar dei banchi in fondo come Pinotxo o El Quim, saltando i banchi maggiorati all'ingresso. Poi percorri La Rambla per intero una volta per l'atmosfera, borsa chiusa e davanti, fino al porto.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "bunkers-del-carmel",
              text: "Sali ai Bunkers del Carmel per il tramonto, il punto panoramico gratuito a 360 gradi su tutta la città, prendendo un autobus per gran parte del tragitto e poi i 15 minuti di salita a piedi. Porta le tue bevande e i tuoi snack, perché in cima non c'è nessun negozio, e vieni per il tramonto anziché per una serata tarda.",
              durationMin: 90,
            },
            {
              text: "Torna giù per cena a El Born o alla tua base nell'Eixample, prenotando in anticipo. Concludi con un cocktail in uno dei bar improntati al design di El Born se ti resta energia.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Sala da concerto, Ciutadella e la spiaggia",
          morning: [
            {
              poiSlug: "palau-de-la-musica",
              text: "Inizia con una visita guidata prenotata in anticipo al Palau de la Musica Catalana, per il lucernario in vetro colorato e la sala principale a colonne di mosaico. La breve visita basta a vedere l'interno modernista prima che la giornata si scaldi.",
              durationMin: 75,
            },
            {
              poiSlug: "parc-de-la-ciutadella",
              text: "Cammina fino al vicino Parc de la Ciutadella, gratuito e verde, per l'elaborata fontana della Cascada che un giovane Gaudi contribuì a progettare e una barca a remi sul laghetto. Fai un picnic sui prati o prendi un pranzo leggero sul bordo di El Born del parco.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "barceloneta-beach",
              text: "Scendi a piedi fino alla spiaggia della Barceloneta per il pomeriggio e un bagno se fa caldo, tenendo d'occhio le borse in ogni momento. Per sabbia più pulita e tranquilla, cammina verso nord fino alle spiagge del Bogatell o della Mar Bella.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              text: "Fai una cena di pesce alla Barceloneta una via più indietro rispetto al lungomare, evitando le trappole sul mare, e ordina pesce fresco o un arroz. È il pasto su cui puntare al classico per la tua ultima sera.",
              durationMin: 120,
            },
            {
              text: "Concludi con un lento vermut o una passeggiata lungo il porticciolo di Port Vell mentre si accendono le luci. Tutto è vicino alla tua base nell'Eixample in metro, quindi nessun lungo viaggio verso casa da pianificare.",
              durationMin: 45,
            },
          ],
        },
      ],
    },
    {
      citySlug: "barcelona",
      days: 4,
      summary:
        "Quattro giorni sono l'equilibrio ideale per una prima visita a Barcellona, che trasforma una corsa turistica in una vera vacanza. Dal primo al terzo giorno si coprono gli essenziali: il percorso di Gaudi (Sagrada Familia, le case del Passeig de Gracia, Park Guell), il centro storico (la cattedrale, El Born, il Museo Picasso, La Boqueria, La Rambla) e una giornata mista tra la sala da concerto, il parco della Ciutadella e la spiaggia, ciascuna fatta senza fretta. Il quarto giorno è la valvola di sfogo, costruita attorno a Montjuic (il MNAC, Miro, i giardini e il castello, raggiunti in funicolare e cabinovia) più la Fontana Magica, oppure sostituita da una gita fuori porta al monastero di montagna di Montserrat o a Girona in treno veloce. Questa durata va bene per i viaggiatori che detestano la marcia forzata, per le coppie e per chiunque abbia voli che incorniciano il viaggio in modo scomodo. Per quattro giorni consigliamo di sistemarsi a Gracia: hai accettato un ritmo più lento, e le sue piazze e i suoi bar a gestione familiare rendono il rientro serale la parte migliore della giornata, con il Park Guell su per la collina sopra di te. Prenota in anticipo Sagrada Familia, Park Guell e le case di Gaudi, e tieni le borse chiuse con la cerniera in mezzo alle folle.",
      stayNeighborhoodSlug: "gracia",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Percorso di Gaudi: Sagrada Familia, Passeig de Gracia, Park Guell",
          morning: [
            {
              poiSlug: "sagrada-familia",
              text: "Inizia dalla Sagrada Familia per la tua prima fascia prenotata, prima delle folle e con la luce del mattino nelle vetrate della facciata della Natività. Dedicaci 90 minuti, aggiungendo una salita alla torre se hai prenotato la fascia.",
              durationMin: 90,
            },
            {
              poiSlug: "casa-batllo",
              text: "Prendi la metro fino a Passeig de Gracia per Casa Batllo nella tua fascia oraria, per la facciata a squame di drago e il tablet audio animato. Poi cammina cinque minuti su per il viale.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "la-pedrera",
              text: "Vedi La Pedrera (Casa Mila) su per lo stesso viale nella tua fascia oraria, per la facciata a onde e il tetto a elmo di guerriero. Pranza in una via laterale fuori dal Passeig de Gracia, non sulle terrazze del viale.",
              durationMin: 90,
            },
            {
              poiSlug: "park-guell",
              text: "Sali al Park Guell per una fascia pomeridiana nella Zona Monumentale, che sta proprio sopra la tua base a Gracia, usando le scale mobili all'aperto per la salita. Vedi la terrazza a mosaico e la lucertola, poi scendi a piedi nella Gracia vera e propria.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              text: "Accomodati a Gracia per la sera, bevendo all'aperto in una delle sue piazze come fa la gente del posto prima di cena. I ristoranti a gestione familiare e i bar senza pretese del quartiere sono a breve distanza a piedi dal tuo letto.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Centro storico: cattedrale, El Born, Picasso, Boqueria, La Rambla",
          morning: [
            {
              poiSlug: "barcelona-cathedral",
              text: "Prendi la metro giù fino alla Cattedrale di Barcellona all'apertura per il chiostro tranquillo e le sue oche, e la vista dal tetto sulle guglie gotiche. Vaga poi per il Barri Gotic, puntando a Placa Sant Felip Neri e al quartiere ebraico medievale.",
              durationMin: 90,
            },
            {
              poiSlug: "picasso-museum",
              text: "Cammina verso est fino a El Born, al Museo Picasso nella tua fascia prenotata, forte sugli anni giovanili a Barcellona e su Las Meninas. Un museo compatto, quindi 75 minuti bastano prima di pranzo.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "la-boqueria",
              text: "Attraversa fino al mercato de La Boqueria per il pranzo a un bar dei banchi in fondo come Pinotxo o El Quim, saltando i banchi all'ingresso dai prezzi da turista. Poi percorri La Rambla una volta per l'atmosfera, borsa chiusa e davanti, fino al porto.",
              durationMin: 120,
            },
            {
              poiSlug: "parc-de-la-ciutadella",
              text: "Torna in loop al Parc de la Ciutadella accanto a El Born, gratuito e verde, per la fontana della Cascada e una barca a remi sul laghetto. Una pausa tranquilla nel mezzo di una giornata di centro storico.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "santa-maria-del-mar",
              text: "Torna a El Born la sera attorno a Santa Maria del Mar, entrando nella slanciata navata gotica della chiesa se è aperta, poi fuori verso i wine bar. Punta fuori dal principale Passeig del Born per tapas dal miglior rapporto qualità-prezzo.",
              durationMin: 90,
            },
            {
              text: "Cena a El Born, prenotando in anticipo per qualsiasi posto ben recensito, prima di risalire a Gracia. Concludi con un cocktail in uno dei bar improntati al design del quartiere se la notte è ancora giovane.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Sala da concerto, spiaggia e tramonto",
          morning: [
            {
              poiSlug: "palau-de-la-musica",
              text: "Inizia con una visita guidata prenotata in anticipo al Palau de la Musica Catalana, per il lucernario in vetro colorato e la sala a colonne di mosaico. La breve visita basta a vedere l'interno modernista prima che la giornata si scaldi.",
              durationMin: 75,
            },
            {
              poiSlug: "la-rambla",
              text: "Se l'hai saltata, percorri ora La Rambla e le vie che vi si diramano, borsa chiusa, poi taglia giù verso il porto e il porticciolo di Port Vell. Prendi un pranzo anticipato una via più indietro rispetto all'acqua anziché sulle terrazze turistiche.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "barceloneta-beach",
              text: "Dedica il pomeriggio alla spiaggia della Barceloneta e a un bagno se fa caldo, tenendo d'occhio le borse in ogni momento. Cammina verso nord fino alle spiagge più pulite del Bogatell o della Mar Bella se vuoi sabbia più tranquilla e meno folla.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "bunkers-del-carmel",
              text: "Sali ai Bunkers del Carmel per il tramonto, il punto panoramico gratuito a 360 gradi sulla città, che è vicino alla tua base a Gracia. Porta le tue bevande e i tuoi snack, perché in cima non c'è nessun negozio, e tira vento.",
              durationMin: 90,
            },
            {
              text: "Scendi per cena a Gracia, su una terrazza di piazza in una sera calda, prenotando in anticipo per i posti più gettonati. Una serata locale rilassata anziché una strada turistica.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Montjuic e Fontana Magica, o una gita fuori porta",
          morning: [
            {
              poiSlug: "montjuic",
              text: "Dedica la mattina a Montjuic, prendendo la funicolare e poi la cabinovia per risparmiarti la salita, per il museo d'arte MNAC, la fondazione Joan Miro, i giardini e il castello con la sua vista sul porto. In alternativa, sostituisci l'intera giornata con un treno per il monastero di montagna di Montserrat, per le sue vette dentellate e il coro di voci bianche, o per Girona, per la sua cattedrale e il suo antico quartiere ebraico.",
              durationMin: 240,
            },
          ],
          afternoon: [
            {
              text: "Scendi da Montjuic attraverso i giardini e il villaggio di architettura del Poble Espanyol se ti attira, o prendi il treno della gita fuori porta di ritorno a Sants nel tardo pomeriggio. In ogni caso, mantieni un ritmo tranquillo, perché questa è la giornata valvola di sfogo.",
              durationMin: 120,
            },
            {
              text: "Riposati vicino alla tua base a Gracia o nell'Eixample con un caffè e una lenta passeggiata, risparmiando le gambe per un'ultima grande serata. Se hai fatto Montserrat, è questo il momento in cui rientri.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "montjuic",
              text: "Se il programma è attivo, raggiungi la Fontana Magica sotto il MNAC a Montjuic per lo spettacolo gratuito di luci e musica, arrivando 20 minuti prima per un posto sugli scalini. Controlla prima le serate in corso, perché va in scena solo in serate selezionate ed è spenta d'inverno e durante le siccità.",
              durationMin: 60,
            },
            {
              text: "Concludi con una cena d'addio di nuovo a Gracia, spendendo per il tuo ultimo pasto catalano in un ristorante di piazza che avevi individuato prima. Chiudi con un bicchiere della staffa su una piazza tranquilla, a breve distanza a piedi dal tuo letto, che è tutto il senso di sistemarsi qui per quattro giorni.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
  ],
};

export default barcelonaIt;
