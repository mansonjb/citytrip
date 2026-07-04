import type { CityData } from "../types";

const lisbonIt: CityData = {
  city: {
    slug: "lisbon",
    name: "Lisbona",
    country: "Portogallo",
    countrySlug: "portugal",
    lat: 38.7223,
    lng: -9.1393,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "LIS",
    airportToCenter: "Linea rossa della metro dall'aeroporto, circa 25 min fino al centro con un cambio, 1,85 EUR",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [8],
    monthlyNotes: {
      1: "Aspettatevi giornate sui 14-15C, frequenti fronti di pioggia dall'Atlantico e le strade piu tranquille dell'anno. Le tariffe degli hotel toccano il minimo, quindi e il mese giusto per un viaggio economico tra miradouros e musei.",
      2: "Ancora fresco e piovoso, ma le schiarite sono frequenti e le terrazze dei caffe si riempiono nei pomeriggi di sole. Il Carnevale porta un breve picco di attivita locale, per il resto folla e prezzi restano bassi.",
      3: "Le massime salgono verso i 18C e la pioggia diminuisce nel corso del mese. La folla resta moderata fino a fine marzo, quando il traffico delle vacanze di primavera inizia a far salire le tariffe degli hotel nei weekend.",
      4: "Uno dei mesi migliori: 19-21C, jacarande in fiore in arrivo, code gestibili al castello e a Belem. La settimana di Pasqua e l'eccezione, prenotate quella finestra con largo anticipo e aspettatevi prezzi da festivita.",
      5: "Caldo affidabile intorno ai 22C con poca pioggia e serate lunghe, ideale per la stagione dei rooftop e dei chioschi. La folla cresce ma i biglietti a orario risolvono ancora quasi tutte le code.",
      6: "Le Festas de Lisboa invadono la citta per tutto il mese, con il culmine nella notte di Sant'Antonio, il 12-13 giugno, quando l'Alfama diventa un'unica grande festa di strada a base di sardine alla griglia. Prenotate con settimane di anticipo e aspettatevi prezzi degli hotel vicini al picco.",
      7: "Caldo, 27-28C, e affollato, con il traffico crocieristico che aggiunge ondate di gente a mezzogiorno intorno alla Baixa e a Belem. Fate le visite prima delle 11, poi seguite i locali verso il fiume o i treni per la spiaggia da Cais do Sodre.",
      8: "Picco di caldo vicino ai 29C, picco di folla, picco di prezzi, e molti ristoranti a gestione familiare chiudono per ferie. Se agosto e la vostra unica opzione, prenotate l'aria condizionata e il primo slot di ingresso ovunque.",
      9: "Clima estivo senza la calca di agosto: 26-27C a inizio mese, mare ancora caldo, serate fatte per i miradouros. I prezzi scendono dal picco dopo la prima settimana.",
      10: "Giornate calde intorno ai 22-23C con le prime vere piogge che tornano a fine mese. La folla si dirada nettamente dopo meta ottobre ed e il momento perfetto per le offerte hotel di bassa stagione.",
      11: "Piu fresco, 17-18C, con piogge regolari, ma la luce tra un acquazzone e l'altro e superba per le foto. Scattano i prezzi di bassa stagione e potete entrare nelle case di fado senza prenotazione.",
      12: "Mite per essere inverno, 15C, ma piovoso, con le luci natalizie lungo Rua Augusta e un grande concerto gratuito di Capodanno a Praca do Comercio. Tranquillo tranne la settimana tra Natale e Capodanno, quando le tariffe schizzano.",
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
    tagline: "Sette colline, un fiume e la luce piu bella d'Europa.",
    heroIntro:
      "Lisbona premia chi cammina accettando le salite e chi impara a usare i tram. Tre giorni bastano per coprire il centro storico, i punti panoramici e Belem senza fretta, e la scena gastronomica vale molto piu di quanto costa. Venite in primavera o a inizio autunno e la citta e quasi imbattibile per un city break europeo.",
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
      vibe: "Il quartiere piu antico di Lisbona e un labirinto di scalinate, panni stesi e facciate di azulejos che salgono dal fiume fino al castello. Di sera il fado esce dai piccoli ristoranti e le strade si svuotano dei gruppi turistici dopo il tramonto. Sembra un villaggio che per caso si trova dentro una capitale.",
      pros: [
        "Le strade piu suggestive della citta, soprattutto al mattino presto e di notte",
        "A piedi si raggiungono il castello, la cattedrale e i migliori punti panoramici",
        "Case di fado e tascas a gestione familiare sotto casa",
      ],
      cons: [
        "Salite ripide e ciottoli, un incubo con le valigie e difficili per chi ha problemi di mobilita",
        "Poche fermate della metro nelle vicinanze, dipendete da tram, autobus o dalle vostre gambe",
        "Congestione dei gruppi turistici di giorno sulle vie principali",
      ],
    },
    {
      slug: "baixa-chiado",
      citySlug: "lisbon",
      name: "Baixa-Chiado",
      lat: 38.7104,
      lng: -9.139,
      bestFor: ["first-time", "family", "budget"],
      vibe: "Il centro pianeggiante a griglia ricostruito dopo il terremoto del 1755, che va da Praca do Comercio fino ai negozi e ai caffe eleganti del Chiado. Qui si collega tutto: tre linee della metro, le linee dei tram e i traghetti. A livello strada e turistico, ma come base e imbattibile.",
      pros: [
        "La parte piu pianeggiante del centro di Lisbona, il terreno piu facile che troverete",
        "Il miglior nodo di trasporti della citta, metro diretta dalla zona aeroporto con un cambio",
        "Enorme scelta di hotel e ristoranti a ogni fascia di prezzo",
      ],
      cons: [
        "La qualita dei ristoranti sulle vie principali e mediocre e pensata per i turisti",
        "Affollato e rumoroso di giorno, soprattutto vicino a Rua Augusta",
      ],
    },
    {
      slug: "principe-real",
      citySlug: "lisbon",
      name: "Principe Real",
      lat: 38.7168,
      lng: -9.1489,
      bestFor: ["romantic", "local", "nightlife"],
      vibe: "Un quartiere verde e raffinato sopra il Bairro Alto, costruito intorno a una piazza giardino con un cedro gigante e mercati bio nel weekend. Concept store, enoteche di vini naturali e alcuni dei ristoranti piu interessanti della citta riempiono le palazzine ottocentesche. E il posto dove i lisbonesi escono davvero.",
      pros: [
        "Ottima scena food & drink con molti meno turisti rispetto al centro",
        "Tranquillo di notte pur essendo a dieci minuti dal Bairro Alto",
        "Piazze giardino e chioschi caffe gli danno una vera vita di quartiere",
      ],
      cons: [
        "In salita rispetto a quasi tutto, mettete in conto qualche taxi per rientrare",
        "L'offerta di alloggi tende al boutique e al caro, poche opzioni economiche",
        "Nessuna stazione della metro nel quartiere stesso, la piu vicina e Rato",
      ],
    },
    {
      slug: "bairro-alto",
      citySlug: "lisbon",
      name: "Bairro Alto",
      lat: 38.713,
      lng: -9.144,
      bestFor: ["nightlife", "budget"],
      vibe: "Addormentato di giorno, questo reticolo di vie strette si trasforma ogni notte nel bar crawl a cielo aperto di Lisbona, con la folla che beve sui ciottoli fino alle 2 di notte. Birra economica, bar minuscoli e zero pretese. Dormiteci solo se avete intenzione di far parte del rumore.",
      pros: [
        "L'epicentro della vita notturna, decine di bar a cinque minuti barcollando",
        "Posizione centrale tra il Chiado e Principe Real",
        "Sopravvivono ancora alcune guesthouse davvero economiche",
      ],
      cons: [
        "Il rumore in strada fino alle 2-3 di notte nei weekend non e negoziabile",
        "Mattine sporche, le strade ne prendono di tutti i colori ogni notte",
        "Accesso ripido dalla Baixa a meno di usare la funicolare della Gloria o l'ascensore",
      ],
    },
    {
      slug: "belem",
      citySlug: "lisbon",
      name: "Belem",
      lat: 38.697,
      lng: -9.206,
      bestFor: ["family", "local"],
      vibe: "Un quartiere sul fiume 6 km a ovest del centro dove i monumenti dell'epoca delle Scoperte portoghesi si allineano lungo il Tago: il monastero, la torre e una fila di musei moderni. Vive di escursionisti giornalieri fino alle 18 circa, poi diventa davvero tranquillo. Ampio, pianeggiante e verde, sembra piu una citta giardino che il centro di Lisbona.",
      pros: [
        "Terreno pianeggiante e passeggiate lungofiume, il camminare piu facile di Lisbona",
        "Monumenti e musei sotto casa prima che arrivi la folla",
        "Serate calme e prezzi degli hotel piu bassi rispetto al centro",
      ],
      cons: [
        "20-30 min con il tram 15 fino al centro, e il tram si riempie all'inverosimile",
        "Le opzioni per ristoranti e vita notturna si riducono dopo il tramonto",
      ],
    },
  ],

  pois: [
    {
      slug: "praca-do-comercio",
      citySlug: "lisbon",
      name: "Praca do Comercio",
      lat: 38.7077,
      lng: -9.1366,
      kind: "sight",
      needsBooking: false,
      tip: "Venite prima delle 9 per fotografare la piazza vuota con l'arco di Rua Augusta, poi evitate i caffe con terrazza troppo cari sulla piazza stessa. I gradini sul fiume di Cais das Colunas, sul lato sud, sono la prima fila gratuita al tramonto.",
    },
    {
      slug: "castelo-sao-jorge",
      citySlug: "lisbon",
      name: "Castello di Sao Jorge",
      lat: 38.7139,
      lng: -9.1335,
      kind: "sight",
      needsBooking: true,
      tip: "Comprate il biglietto a orario online (circa 15 EUR) e prendete il primo slot delle 9, in stagione la fila alla biglietteria arriva a 45 minuti in tarda mattinata. Prendete il bus 737 da Praca da Figueira fino all'ingresso invece di salire a piedi, e risparmiate le gambe per i bastioni.",
    },
    {
      slug: "miradouro-senhora-do-monte",
      citySlug: "lisbon",
      name: "Miradouro da Senhora do Monte",
      lat: 38.719,
      lng: -9.1325,
      kind: "viewpoint",
      needsBooking: false,
      tip: "E il punto panoramico piu alto e piu ampio del centro storico ed e gratuito, ma il muretto si riempie 45 minuti prima del tramonto, quindi arrivate in anticipo per conquistare un posto. Quassu non c'e nessun caffe, comprate da bere in un negozio sulla via principale della Graca lungo la strada.",
    },
    {
      slug: "tram-28",
      citySlug: "lisbon",
      name: "Tram 28",
      lat: 38.7169,
      lng: -9.136,
      kind: "experience",
      needsBooking: false,
      tip: "Salite al capolinea di Martim Moniz prima delle 8:30 per avere un posto al finestrino, alle 10 si sta solo in piedi ed e un punto caldo per i borseggiatori. Il biglietto singolo a bordo costa 3,10 EUR, quindi comprate piuttosto un pass 24h Carris/metro a circa 6,80 EUR e potrete scendere a ogni collina.",
    },
    {
      slug: "time-out-market",
      citySlug: "lisbon",
      name: "Time Out Market",
      lat: 38.707,
      lng: -9.146,
      kind: "food",
      needsBooking: false,
      tip: "I tavoli comuni sono una zona di guerra tra le 12:30 e le 14:00, quindi mangiate alle 11:45 o dopo le 14:30 e mandate una persona a tenere i posti mentre gli altri ordinano. La storica halle del Mercado da Ribeira accanto e una pausa caffe piu economica e piu tranquilla.",
    },
    {
      slug: "jeronimos-monastery",
      citySlug: "lisbon",
      name: "Monastero dos Jeronimos",
      lat: 38.6979,
      lng: -9.2068,
      kind: "sight",
      needsBooking: true,
      tip: "La navata della chiesa e a ingresso libero, solo i chiostri richiedono il biglietto (circa 12 EUR), quindi prenotate online il primo slot delle 9:30 e visitate i chiostri prima che i gruppi in pullman arrivino verso le 10:30. E chiuso il lunedi, un classico errore di pianificazione della gita.",
    },
    {
      slug: "belem-tower",
      citySlug: "lisbon",
      name: "Torre di Belem",
      lat: 38.6916,
      lng: -9.216,
      kind: "sight",
      needsBooking: true,
      tip: "L'interno e un'unica stretta scala a chiocciola condivisa nei due sensi, quindi si entra col contagocce e la fila avanza a fatica anche con biglietto prenotato. Il consiglio onesto: fotografatela dal lungofiume, ed entrate solo se avete prenotato il primo slot. Chiusa il lunedi.",
    },
    {
      slug: "pasteis-de-belem",
      citySlug: "lisbon",
      name: "Pasteis de Belem",
      lat: 38.6975,
      lng: -9.2033,
      kind: "food",
      needsBooking: false,
      tip: "Ignorate la fila per l'asporto che serpeggia lungo la strada ed entrate direttamente nelle sale interne, hanno circa 400 posti e il ricambio e rapido. Ordinate al tavolo, aggiungete cannella e zucchero dagli spargitori sul banco e aspettatevi di pagare circa 1,40 EUR a pastel.",
    },
    {
      slug: "lx-factory",
      citySlug: "lisbon",
      name: "LX Factory",
      lat: 38.7034,
      lng: -9.1786,
      kind: "experience",
      needsBooking: false,
      tip: "Venite nel tardo pomeriggio e fermatevi per cena, la maggior parte dei negozi apre fino alle 19-20 e i ristoranti dopo. La domenica il mercatino delle pulci LX Market va dalle 10, e la libreria Ler Devagar con la sua bicicletta volante e l'unica tappa da non saltare.",
    },
    {
      slug: "maat",
      citySlug: "lisbon",
      name: "MAAT",
      lat: 38.6957,
      lng: -9.1937,
      kind: "museum",
      needsBooking: false,
      tip: "Potete camminare gratis sul tetto curvo del museo a qualsiasi ora, e la vista sul fiume da lassu batte diversi punti panoramici a pagamento. Le gallerie chiudono il martedi, e il biglietto combinato che include l'edificio della vecchia centrale elettrica e il miglior affare se entrate.",
    },
    {
      slug: "alfama-walk",
      citySlug: "lisbon",
      name: "L'Alfama a piedi",
      lat: 38.7118,
      lng: -9.1287,
      kind: "experience",
      needsBooking: false,
      tip: "Percorretela in discesa: partite dal castello o dal belvedere di Portas do Sol e lasciate che le scalinate vi trascinino verso il fiume, farla in salita sotto il sole del pomeriggio e l'errore classico. Il martedi e il sabato mattina, deviate verso il mercatino delle pulci Feira da Ladra dietro il Pantheon.",
    },
    {
      slug: "miradouro-santa-catarina",
      citySlug: "lisbon",
      name: "Miradouro de Santa Catarina",
      lat: 38.7089,
      lng: -9.147,
      kind: "viewpoint",
      needsBooking: false,
      tip: "E il belvedere del tramonto con vista sul ponte, e la folla e giovane, locale e armata di birre del supermercato. Il chiosco vende da bere ma chiude prima di quanto pensiate, quindi arrivate per l'ora dorata, comprate prima e poi sedetevi sui gradini della terrazza.",
    },
    {
      slug: "gulbenkian-museum",
      citySlug: "lisbon",
      name: "Museo Calouste Gulbenkian",
      lat: 38.7371,
      lng: -9.1545,
      kind: "museum",
      needsBooking: true,
      tip: "L'ingresso e gratuito ogni domenica dalle 14, e anche in quel caso raramente sembra affollato. E chiuso il martedi, e il giardino circostante con i suoi laghetti e le passerelle in cemento e gratuito ogni giorno, un vero angolo da pausa pranzo per gli habitue della caffetteria del museo.",
    },
  ],

  itineraries: [
    {
      citySlug: "lisbon",
      days: 2,
      summary:
        "Due giorni bastano per il cuore storico di Lisbona, ma dovrete sacrificare Belem, e non e un sacrificio da poco. In 48 ore potete salire sul tram 28 prima della folla, arrampicarvi tra il castello e l'Alfama, godervi due dei migliori miradouros, mangiare di tutto al Time Out Market e chiudere entrambe le serate fuori, una con il fado e una nel Bairro Alto. Cosa non ci sta: il Monastero dos Jeronimos, la Torre di Belem, il Gulbenkian e qualsiasi gita fuori porta, quindi accettate il compromesso prima di prenotare. Questa durata e adatta a un city break di un weekend, a uno scalo lungo verso l'Algarve o le Azzorre, o a chi combina Lisbona con Porto in un unico viaggio. Fate base a Baixa-Chiado: e pianeggiante, ogni linea di tram e metro converge li, ed entrambe le giornate iniziano a dieci minuti dalla vostra porta. Se atterrate con una mezza giornata in piu, spendetela a Belem invece di aggiungere altro girovagare in centro.",
      stayNeighborhoodSlug: "baixa-chiado",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "La collina del castello, l'Alfama e il fado",
          morning: [
            {
              poiSlug: "tram-28",
              text: "Partite dal capolinea di Martim Moniz e salite con il tram 28 attraverso la Graca prima delle 8:30, quando potete ancora avere un posto al finestrino. Scendete vicino alla cima della collina del castello invece di fare tutto il percorso.",
              durationMin: 40,
            },
            {
              poiSlug: "castelo-sao-jorge",
              text: "Percorrete i bastioni del Castello di Sao Jorge con un biglietto delle 9 prenotato in anticipo, prima che si formi la fila alla biglietteria. Le terrazze vi offrono il panorama completo della citta e del fiume, un orientamento utile per il resto del viaggio.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "alfama-walk",
              text: "Scendete a piedi attraverso l'Alfama dalle porte del castello, passando per Portas do Sol e giu per le scalinate verso la cattedrale. Fermatevi per un pranzo lento in una tasca lungo la strada, pesce alla griglia e mezza bottiglia di vinho verde e la mossa giusta.",
              durationMin: 150,
            },
            {
              poiSlug: "miradouro-senhora-do-monte",
              text: "Risalite a piedi o in autobus fino al Miradouro da Senhora do Monte, il belvedere piu alto del centro storico. La luce del tardo pomeriggio qui e il miglior spettacolo gratuito di Lisbona.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              text: "Prenotate un tavolo in una casa di fado giu nell'Alfama per le 20 circa, le piccole sale a gestione familiare battono i grandi locali con cena e spettacolo. Aspettatevi un menu fisso piu esibizione, e silenzio totale durante le canzoni.",
              durationMin: 150,
            },
            {
              text: "Chiudete con una ginjinha, il liquore locale di amarene, in un baretto minuscolo vicino al Rossio sulla strada del ritorno verso la Baixa. Un bicchierino in una tazzina di cioccolato costa meno di 2 EUR.",
              durationMin: 20,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Baixa, Chiado e le notti del Bairro Alto",
          morning: [
            {
              poiSlug: "praca-do-comercio",
              text: "Percorrete Praca do Comercio e i gradini sul fiume di Cais das Colunas prima delle 9, quando la piazza e ancora vuota. Poi risalite la pedonale Rua Augusta attraverso l'arco fino al reticolo della Baixa.",
              durationMin: 60,
            },
            {
              text: "Curiosate in salita attraverso il Chiado: i caffe storici intorno a Rua Garrett, la libreria Bertrand, le rovine del Convento do Carmo se volete una visita compatta. E l'ora migliore di Lisbona per il window shopping.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "time-out-market",
              text: "Pranzate al Time Out Market a Cais do Sodre, arrivando entro le 11:45 o dopo le 14:30 per trovare davvero un posto. Dividete gli ordini tra i vari banchi cosi da provare tre cucine in una sola seduta.",
              durationMin: 90,
            },
            {
              poiSlug: "miradouro-santa-catarina",
              text: "Salite a piedi al Miradouro de Santa Catarina e sistematevi di fronte al ponte 25 de Abril. Comprate da bere al chiosco per tempo, chiude prima che la folla raggiunga il picco.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Cenate nel Chiado o ai margini del Bairro Alto, prenotando in anticipo per qualsiasi posto con un nome. Le porzioni sono abbondanti, condividere due secondi in tre e normale.",
              durationMin: 100,
            },
            {
              text: "Finite nel reticolo di bar del Bairro Alto, dove dalle 23 circa tutti bevono in piedi sui ciottoli. Saltate da un bar all'altro invece di fermarvi, il punto e la strada stessa.",
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
        "Si, tre giorni sono la durata giusta per Lisbona, ed e quella che consigliamo per una prima visita. Vi danno due giornate piene nel centro storico, coprendo il castello, l'Alfama, il tram 28, i miradouros, la Baixa e il Chiado, piu una giornata dedicata a Belem, che merita molto piu della mezza giornata frettolosa che le concede la maggior parte delle persone. Con tre giorni cenate bene due sere senza ripetere quartiere, incastrate una serata di fado e una notte nel Bairro Alto, e arrivate comunque fino al Monastero dos Jeronimos, alla Torre di Belem e ai pasteis de nata alla fonte. Cosa resta comunque fuori: il Museo Gulbenkian, Principe Real e qualsiasi gita a Sintra, che richiedono tutti un quarto giorno. Questa durata e adatta a chi viene per la prima volta, alle coppie e a chiunque stia costruendo un itinerario portoghese con Porto come tappa successiva. Alloggiate a Baixa-Chiado per i collegamenti: il tram per Belem parte praticamente da sotto casa ed entrambe le giornate in centro iniziano a piedi.",
      stayNeighborhoodSlug: "baixa-chiado",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "La collina del castello, l'Alfama e il fado",
          morning: [
            {
              poiSlug: "tram-28",
              text: "Partite dal capolinea di Martim Moniz e salite con il tram 28 attraverso la Graca prima delle 8:30, quando potete ancora avere un posto al finestrino. Scendete vicino alla cima della collina del castello invece di fare tutto il percorso.",
              durationMin: 40,
            },
            {
              poiSlug: "castelo-sao-jorge",
              text: "Percorrete i bastioni del Castello di Sao Jorge con un biglietto delle 9 prenotato in anticipo, prima che si formi la fila alla biglietteria. Le terrazze vi offrono il panorama completo della citta e del fiume, un orientamento utile per il resto del viaggio.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "alfama-walk",
              text: "Scendete a piedi attraverso l'Alfama dalle porte del castello, passando per Portas do Sol e giu per le scalinate verso la cattedrale. Fermatevi per un pranzo lento in una tasca lungo la strada.",
              durationMin: 150,
            },
            {
              poiSlug: "miradouro-senhora-do-monte",
              text: "Risalite a piedi o in autobus fino al Miradouro da Senhora do Monte, il belvedere piu alto del centro storico, per la luce del tardo pomeriggio. Portatevi da bere, in cima non c'e nessun chiosco.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              text: "Prenotate un tavolo in una casa di fado nell'Alfama per le 20 circa, scegliendo una piccola sala a gestione familiare invece dei grandi locali con cena e spettacolo. Il silenzio totale durante le canzoni e la regola della casa ovunque.",
              durationMin: 150,
            },
            {
              text: "Chiudete con una ginjinha, il liquore di amarene, in un bar da banco vicino al Rossio sulla strada di casa. Meno di 2 EUR, bevuta sul marciapiede come tutti gli altri.",
              durationMin: 20,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Baixa, Chiado e le notti del Bairro Alto",
          morning: [
            {
              poiSlug: "praca-do-comercio",
              text: "Percorrete Praca do Comercio e il lungofiume a Cais das Colunas prima delle 9, poi risalite Rua Augusta attraverso l'arco fino al reticolo della Baixa. La piazza rende meglio in foto quando e ancora vuota.",
              durationMin: 60,
            },
            {
              text: "Curiosate in salita attraverso il Chiado: i caffe intorno a Rua Garrett, la libreria Bertrand e le rovine del Convento do Carmo se volete una visita compatta prima di pranzo.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "time-out-market",
              text: "Pranzate al Time Out Market a Cais do Sodre, arrivando entro le 11:45 o dopo le 14:30 per trovare posto. Dividete gli ordini tra i banchi per provare piu cucine in una volta.",
              durationMin: 90,
            },
            {
              poiSlug: "miradouro-santa-catarina",
              text: "Salite a piedi al Miradouro de Santa Catarina e prendete posto di fronte al ponte 25 de Abril per l'ora dorata. Comprate al chiosco per tempo, chiude prima che la folla raggiunga il picco.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Cenate nel Chiado o ai margini del Bairro Alto, con prenotazione in qualsiasi posto ben recensito. Le porzioni portoghesi sono abbondanti, ordinate meno di quanto pensiate.",
              durationMin: 100,
            },
            {
              text: "Finite nel Bairro Alto, dove dalle 23 circa la folla dei bar si riversa sui ciottoli. Continuate a spostarvi da un bar all'altro, il locale e la strada.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "I monumenti di Belem e il lungofiume",
          morning: [
            {
              poiSlug: "jeronimos-monastery",
              text: "Prendete il tram 15 o un taxi di 15 minuti dal centro e fatevi trovare al Monastero dos Jeronimos per il primo slot dei chiostri alle 9:30, prenotato online. Vedete poi la navata gratuita della chiesa, la pietra manuelina all'interno e il momento clou della giornata.",
              durationMin: 100,
            },
            {
              poiSlug: "pasteis-de-belem",
              text: "Camminate due minuti fino a Pasteis de Belem e andate dritti alle sale con servizio al tavolo invece della fila per l'asporto. Due pasteis caldi con cannella e un caffe e l'ordine corretto.",
              durationMin: 40,
            },
          ],
          afternoon: [
            {
              poiSlug: "belem-tower",
              text: "Passeggiate nei giardini lungofiume oltre il Monumento alle Scoperte fino alla Torre di Belem. Fotografatela dalla riva, e mettetevi in fila per l'interno solo se avete prenotato il primo slot.",
              durationMin: 75,
            },
            {
              poiSlug: "maat",
              text: "Camminate verso est lungo il Tago fino al MAAT e attraversate il suo tetto curvo, gratuito e aperto anche quando le gallerie non lo sono. Entrate se la mostra in corso vi attira, saltatela senza sensi di colpa in caso contrario.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "lx-factory",
              text: "Proseguite fino alla LX Factory sotto il ponte, ad Alcantara, arrivando nel tardo pomeriggio mentre i negozi sono ancora aperti. Curiosate da Ler Devagar, poi fermatevi a cena in uno dei ristoranti della vecchia tipografia.",
              durationMin: 150,
            },
            {
              text: "Prendete un taxi o il tram 15 per tornare in centro, circa 15 minuti. Se vi resta energia, un ultimo drink su un rooftop di Cais do Sodre chiude il viaggio come si deve.",
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
        "Quattro giorni sono piu che sufficienti per Lisbona, ed e il quarto giorno a trasformare uno sprint tra i monumenti in una vera vacanza. I giorni uno e due coprono il cuore storico: castello, Alfama, tram 28, Baixa, Chiado, i miradouros ed entrambe le serate simbolo. Il terzo giorno e Belem, fatta come si deve, dal primo slot di ingresso al monastero fino alla cena alla LX Factory. Il quarto giorno e la valvola di sfogo: la collezione privata di livello mondiale del Gulbenkian, i giardini e le enoteche di Principe Real e un'ultima serata senza fretta, oppure scambiate l'intera giornata con una gita a Sintra se i palazzi vi tentano piu dei musei. Questa durata e adatta a chi odia correre, a chi torna per la seconda volta e a chiunque abbia voli che incorniciano il viaggio in modo scomodo. Per quattro giorni consigliamo di fare base a Principe Real invece che in centro: avete gia accettato un ritmo piu lento, e i suoi ristoranti, le piazze giardino e la clientela locale rendono il rientro serale la parte migliore. Oltre i quattro giorni, aggiungete Sintra e un pomeriggio di spiaggia a Cascais piuttosto che altra citta.",
      stayNeighborhoodSlug: "principe-real",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "La collina del castello, l'Alfama e il fado",
          morning: [
            {
              poiSlug: "tram-28",
              text: "Partite dal capolinea di Martim Moniz e salite con il tram 28 attraverso la Graca prima delle 8:30 per un posto al finestrino. Scendete vicino alla collina del castello invece di fare tutto il percorso.",
              durationMin: 40,
            },
            {
              poiSlug: "castelo-sao-jorge",
              text: "Percorrete i bastioni del Castello di Sao Jorge con un biglietto delle 9 prenotato in anticipo, prima che si formino le file. Le terrazze vi disegnano la mappa dell'intera citta fin dal primo giorno.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "alfama-walk",
              text: "Scendete a piedi attraverso l'Alfama dalle porte del castello, passando per Portas do Sol e giu per le scalinate verso il fiume, con un lungo pranzo in tasca lungo la strada.",
              durationMin: 150,
            },
            {
              poiSlug: "miradouro-senhora-do-monte",
              text: "Risalite al Miradouro da Senhora do Monte per la luce del tardo pomeriggio sul centro storico. E gratuito, ed e il belvedere piu alto del centro di Lisbona.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              text: "Prenotate una piccola casa di fado nell'Alfama per le 20 circa e godetevi il menu fisso e il canto. Il silenzio durante le canzoni e atteso, l'applauso dopo e obbligatorio.",
              durationMin: 150,
            },
            {
              text: "Coronate la serata con una ginjinha vicino al Rossio prima di risalire verso Principe Real. Un taxi per casa costa pochi euro e vi risparmia la salita.",
              durationMin: 20,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Baixa, Chiado e le notti del Bairro Alto",
          morning: [
            {
              poiSlug: "praca-do-comercio",
              text: "Percorrete Praca do Comercio e i gradini sul fiume di Cais das Colunas prima delle 9, poi prendete Rua Augusta attraverso l'arco fino alla Baixa. La mattina presto e l'unico momento in cui la piazza e tutta vostra.",
              durationMin: 60,
            },
            {
              text: "Salite passeggiando attraverso il Chiado: i caffe di Rua Garrett, la libreria Bertrand e il Convento do Carmo senza tetto se volete una visita veloce.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "time-out-market",
              text: "Pranzo al Time Out Market a Cais do Sodre, programmato per le 11:45 o dopo le 14:30 per evitare la caccia al posto. Ordinate da piu banchi e condividete.",
              durationMin: 90,
            },
            {
              poiSlug: "miradouro-santa-catarina",
              text: "Salite a piedi al Miradouro de Santa Catarina per l'ora dorata di fronte al ponte. Prima il chiosco, poi i gradini, il banco delle bevande chiude presto.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Cena nel Chiado o nella parte alta del Bairro Alto con prenotazione, poi unitevi alla folla in strada nel reticolo di bar del Bairro Alto dalle 23. Il vostro letto a Principe Real e a dieci minuti a piedi in salita.",
              durationMin: 180,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "I monumenti di Belem e il lungofiume",
          morning: [
            {
              poiSlug: "jeronimos-monastery",
              text: "Arrivate al Monastero dos Jeronimos per il primo slot dei chiostri alle 9:30, prenotato online, poi vedete la navata gratuita della chiesa. Il tram 15 o un taxi dal centro impiegano 15-25 minuti.",
              durationMin: 100,
            },
            {
              poiSlug: "pasteis-de-belem",
              text: "Camminate fino a Pasteis de Belem e sedetevi all'interno invece di unirvi alla fila per l'asporto. Pasteis caldi, cannella sopra, fatto.",
              durationMin: 40,
            },
          ],
          afternoon: [
            {
              poiSlug: "belem-tower",
              text: "Seguite i giardini lungofiume oltre il Monumento alle Scoperte fino alla Torre di Belem. La vista dall'esterno e il vero premio, saltate la lenta fila per l'interno a meno che non abbiate prenotato il primo slot.",
              durationMin: 75,
            },
            {
              poiSlug: "maat",
              text: "Percorrete il lungofiume verso est fino al MAAT e attraversate la sua passerella gratuita sul tetto per il miglior panorama sul fiume di Belem. Entrate nelle gallerie solo se la mostra in corso vi interessa.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "lx-factory",
              text: "Chiudete la giornata alla LX Factory ad Alcantara, curiosando nei negozi prima della chiusura e fermandovi a cena nella fila di capannoni riconvertiti. La libreria Ler Devagar da sola giustifica la tappa.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Gulbenkian, Principe Real, Lisbona lenta",
          morning: [
            {
              poiSlug: "gulbenkian-museum",
              text: "Dedicate la mattinata al Museo Calouste Gulbenkian, una collezione privata compatta che va dai pezzi egizi ai gioielli di Lalique. Se e domenica, l'ingresso e gratuito dalle 14, quindi invertite l'ordine della giornata e venite dopo pranzo.",
              durationMin: 120,
            },
            {
              text: "Prima di andarvene, passeggiate tra i laghetti e i sentieri in cemento del giardino del Gulbenkian, sono gratuiti e davvero tranquilli. La metro da Sao Sebastiao vi riporta verso Rato in dieci minuti.",
              durationMin: 40,
            },
          ],
          afternoon: [
            {
              text: "Dedicate il pomeriggio a Principe Real in se: la piazza giardino sotto il cedro gigante, i concept store nelle vecchie palazzine e un caffe lento a un chiosco. Il sabato un mercato bio riempie la piazza.",
              durationMin: 120,
            },
            {
              text: "Alternativa per l'intera giornata: prendete il treno dal Rossio per Sintra, circa 40 minuti e 2,40 EUR a tratta, per il Palazzo da Pena e la Quinta da Regaleira. Se scegliete Sintra, prenotate i biglietti dei palazzi online e partite entro le 8:30 per battere i pullman turistici.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Prenotate una cena d'addio a Principe Real, dove le enoteche di vini naturali e le cucine portoghesi moderne sono attualmente il meglio della citta. Questo e il pasto su cui vale la pena spendere.",
              durationMin: 120,
            },
            {
              text: "Concedetevi un ultimo bicchiere al chiosco di un miradouro o su una tranquilla terrazza giardino nei dintorni. Dormite nel quartiere, quindi non c'e nessun viaggio di ritorno di cui preoccuparsi.",
              durationMin: 45,
            },
          ],
        },
      ],
    },
  ],
};

export default lisbonIt;
