import type { CityData } from "../types";

const romeIt: CityData = {
  city: {
    slug: "rome",
    name: "Roma",
    country: "Italia",
    countrySlug: "italy",
    lat: 41.9028,
    lng: 12.4964,
    tier: 1,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "FCO",
    airportToCenter:
      "Treno Leonardo Express da Fiumicino a Termini, circa 32 min, 14 EUR, ogni 15 min. Opzioni più economiche: il treno regionale FL1 per le stazioni di Trastevere o Ostiense a 8 EUR, oppure un autobus Terravision/SIT per Termini a circa 6 EUR ma più lento nel traffico.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [7, 8],
    monthlyNotes: {
      1: "Fresco sui 12-13C con la minima affluenza dell'anno e le tariffe alberghiere più basse, anche se qualche pioggia attraversa la città. L'Epifania del 6 gennaio chiude il periodo natalizio con un mercatino in Piazza Navona, e la prima domenica offre l'ingresso gratuito ai musei statali, Colosseo compreso.",
      2: "Ancora mite sui 13-14C e tranquillo fuori dal breve periodo di Carnevale, quando i bambini in costume riempiono le piazze. La pioggia è possibile ma i pomeriggi soleggiati da pranzo all'aperto sono comuni, ed è un mese ottimo per un viaggio a basso costo e senza code.",
      3: "Le massime salgono verso i 17C e le giornate si allungano, con la folla che cresce solo a fine mese. Attenzione al calendario di Pasqua: se la Settimana Santa cade a marzo, il Vaticano e gli hotel del centro si riempiono e i prezzi salgono in fretta.",
      4: "Uno dei mesi migliori sui 19-20C, ma due grandi richiami si sovrappongono: la Settimana Santa e la Pasqua riempiono Piazza San Pietro per le funzioni del Papa, e il Natale di Roma il 21 aprile mette in scena parate di gladiatori al Circo Massimo per la fondazione della città. Prenotate il Vaticano e le date pasquali con settimane di anticipo.",
      5: "Caldo affidabile sui 23-24C con serate lunghe e poca pioggia, il momento perfetto prima del caldo estivo. La folla è intensa alle attrazioni principali, quindi i biglietti a orario per Colosseo e Vaticano sono indispensabili, ma la stagione delle terrazze e delle cene in piazza è al suo apice.",
      6: "Caldo sui 28-29C e affollato, con il festival Estate Romana che inizia a riempire le rive del fiume e i luoghi all'aperto con concerti e cinema sotto le stelle per tutta l'estate. Fate il Colosseo e il Vaticano all'apertura, poi ritiratevi in chiese ombrose e lunghi pranzi nel pomeriggio.",
      7: "Caldo al culmine oltre i 31C, sole implacabile e romani che si diradano partendo per la costa. La folla resta fitta alle grandi attrazioni e i prezzi restano alti, quindi prenotate ovunque il primo turno d'ingresso e pianificate soste al chiuso o all'ombra per la fornace delle 14-17.",
      8: "Il mese più caldo e sfibrante sui 32-33C, con il Ferragosto del 15 agosto che chiude molte trattorie a conduzione familiare per la festività. Se agosto è inevitabile, prenotate l'aria condizionata, concentrate le visite nel primo mattino e aspettatevi una città semivuota di romani ma piena di gruppi turistici.",
      9: "Luce estiva senza il peggio del caldo: 28C all'inizio, in calo nel corso del mese, con gli eventi dell'Estate Romana ancora in corso lungo il Tevere. La folla si allenta dopo la prima settimana ed è probabilmente il mese migliore in assoluto per una vacanza a Roma.",
      10: "Giornate calde intorno ai 23-24C con le prime piogge vere che tornano a fine mese e una splendida luce radente per le foto. La folla si dirada nettamente dopo metà ottobre, il che ne fa una scelta forte di bassa stagione sia per il clima sia per il rapporto qualità-prezzo degli hotel.",
      11: "Più fresco sui 17-18C con piogge regolari, ma tante giornate luminose tra un fronte e l'altro e le grandi attrazioni più tranquille dell'autunno. Tornano i prezzi di bassa stagione e spesso si entra senza problemi in ristoranti che a maggio richiederebbero la prenotazione.",
      12: "Mite per essere inverno, sui 14C, ma piovoso, con un albero di Natale e un presepe in Piazza San Pietro e le luci lungo il centro. Tranquillo fino al periodo tra Natale e Capodanno, quando le tariffe salgono e l'ingresso gratuito ai musei della prima domenica attira una grande folla locale.",
    },
    climate: {
      1: { highC: 12, lowC: 3, rainyDays: 8 },
      2: { highC: 13, lowC: 4, rainyDays: 8 },
      3: { highC: 16, lowC: 6, rainyDays: 8 },
      4: { highC: 19, lowC: 8, rainyDays: 8 },
      5: { highC: 24, lowC: 12, rainyDays: 6 },
      6: { highC: 28, lowC: 16, rainyDays: 4 },
      7: { highC: 31, lowC: 18, rainyDays: 2 },
      8: { highC: 32, lowC: 18, rainyDays: 3 },
      9: { highC: 28, lowC: 15, rainyDays: 5 },
      10: { highC: 23, lowC: 11, rainyDays: 8 },
      11: { highC: 17, lowC: 7, rainyDays: 9 },
      12: { highC: 14, lowC: 4, rainyDays: 9 },
    },
    budgetLevel: "mid",
    budgetPerDay: { budget: 75, mid: 150, high: 300 },
    tagline: "Tremila anni di rovine, e la cena all'aperto sopra di esse.",
    heroIntro:
      "Roma concentra meraviglie antiche, il Vaticano e la migliore cucina informale d'Europa in un centro che si gira quasi tutto a piedi, se accettate i sampietrini e le distanze. Tre giorni sono il minimo onesto per dividere la Roma antica, il Vaticano e il cuore delle piazze senza una marcia forzata. Venite in primavera o inizio autunno, prenotate Colosseo e Vaticano prima di partire, e la città vi ripaga come quasi nessun altro luogo.",
    accent: { from: "#C0532B", to: "#E0A43B", ink: "#6E2A15" },
    neighborhoodSlugs: [
      "centro-storico",
      "monti",
      "trastevere",
      "prati",
      "testaccio",
    ],
    nearbyCitySlugs: ["florence"],
  },

  neighborhoods: [
    {
      slug: "centro-storico",
      citySlug: "rome",
      name: "Centro Storico",
      lat: 41.8992,
      lng: 12.4731,
      bestFor: ["first-time", "romantic", "family"],
      vibe: "Il cuore storico tra il Pantheon, Piazza Navona e la Fontana di Trevi, un dedalo di vicoli color ocra che sbocca su piazze barocche. Tutto ciò che sta nella lista di chi arriva per la prima volta si trova entro una passeggiata di quindici minuti, e le strade risplendono di notte una volta che i turisti giornalieri si diradano. È la cartolina, e per dormirci si pagano prezzi da cartolina.",
      pros: [
        "A piedi fino al Pantheon, alla Fontana di Trevi, a Navona e a Piazza di Spagna senza trasporti",
        "Bellissimo di notte una volta che i gruppi turistici si sono diradati dopo cena",
        "Fitto di caffè, gelaterie e locali da aperitivo a ogni angolo",
      ],
      cons: [
        "L'area più cara della città per gli hotel",
        "Nessuna stazione della metro al suo interno, quindi ci si sposta a piedi o in autobus",
        "Affollato e rumoroso attorno alle attrazioni principali per tutto il giorno",
      ],
    },
    {
      slug: "monti",
      citySlug: "rome",
      name: "Monti",
      lat: 41.8946,
      lng: 12.4917,
      bestFor: ["local", "romantic", "nightlife"],
      vibe: "Il quartiere più antico di Roma sta in una sacca tra il Colosseo e Termini, un tempo il quartiere a luci rosse dell'antichità e oggi la zona più vivibile del centro. Negozi vintage, wine bar e piccole trattorie costeggiano vicoli coperti d'edera intorno a Piazza della Madonna dei Monti, dove la gente del posto beve la sera sui gradini della fontana. Offre l'accesso a piedi alla Roma antica senza il prezzo né la calca dei bus turistici.",
      pros: [
        "Dieci minuti a piedi dal Colosseo e dal Foro",
        "Stazione metro Cavour sulla linea B, oltre alla vicinanza al nodo di trasporti di Termini",
        "Autentica vita notturna di quartiere fatta di wine bar ed enoteche, non trappole per turisti",
      ],
      cons: [
        "Alcune strade vicino a Termini sembrano trascurate dopo il buio",
        "I bar più popolari diventano rumorosi e pieni nelle serate del weekend",
        "Pochi hotel di marca, più appartamenti e piccole boutique",
      ],
    },
    {
      slug: "trastevere",
      citySlug: "rome",
      name: "Trastevere",
      lat: 41.8896,
      lng: 12.4695,
      bestFor: ["romantic", "nightlife", "local"],
      vibe: "Al di là del Tevere rispetto al centro, Trastevere è un groviglio di vicoli acciottolati, edera e panni stesi che dopo il buio si trasforma nel quartiere più suggestivo della città per cena e drink. Le trattorie si riversano sulle strade e i bar intorno a Piazza di Santa Maria restano affollati oltre la mezzanotte. Incantevole di sera, è davvero chiassoso nelle notti del weekend.",
      pros: [
        "La migliore concentrazione di trattorie classiche e fermento serale di Roma",
        "A piedi fino al centro oltre il fiume e al Ghetto ebraico",
        "Vicoli da cartolina che si fotografano magnificamente nella luce del mattino",
      ],
      cons: [
        "Rumoroso fino alle ore piccole nei weekend, una scelta pessima per chi ha il sonno leggero",
        "Nessuna metro, ci si affida ai tram, agli autobus o ai propri piedi",
        "Alcuni ristoranti sulle piazze principali vivono di rendita sulla posizione",
      ],
    },
    {
      slug: "prati",
      citySlug: "rome",
      name: "Prati",
      lat: 41.9075,
      lng: 12.4623,
      bestFor: ["family", "first-time", "budget"],
      vibe: "Un quartiere ordinato ed elegante di ampi viali disposto accanto al Vaticano, con negozi raffinati, ristoranti affidabili e molti meno turisti del centro. Vi mette a breve distanza a piedi dai Musei Vaticani e da San Pietro pur avendo l'aria di una Roma residenziale vera. Calmo, sicuro e ben collegato dalla metro.",
      pros: [
        "A piedi fino ai Musei Vaticani e a San Pietro, prima della folla dei pullman",
        "Due fermate della metro sulla linea A, diretta a Termini e a Piazza di Spagna",
        "Hotel con miglior rapporto qualità-prezzo e cucina affidabile e non turistica",
      ],
      cons: [
        "Più tranquillo di sera, con una scena di bar e vita notturna limitata",
        "Una camminata di 20-25 minuti o una fermata di metro dal lato del Colosseo",
        "Sembra più funzionale che romantico rispetto al centro storico",
      ],
    },
    {
      slug: "testaccio",
      citySlug: "rome",
      name: "Testaccio",
      lat: 41.8759,
      lng: 12.4757,
      bestFor: ["local", "budget", "family"],
      vibe: "Un quartiere popolare a sud del centro costruito attorno all'antico mattatoio, e la patria spirituale della cucina povera romana, frattaglie comprese. Il suo mercato coperto e le trattorie senza fronzoli attirano i buongustai seri, mentre la vita notturna si concentra nei locali scavati nel Monte Testaccio. Poco da vedere, molto da mangiare, e prezzi che i romani pagano davvero.",
      pros: [
        "Il miglior cibo autentico di Roma per rapporto qualità-prezzo, dal mercato alle trattorie storiche",
        "Stazione metro Piramide sulla linea B, pochi minuti dal Colosseo",
        "Vera atmosfera di quartiere con quasi nessun sovrapprezzo turistico",
      ],
      cons: [
        "Scarso di attrazioni classiche, qui si viene per mangiare, non per guardare",
        "Una camminata di oltre 20 minuti o una corsa di metro dal cuore storico",
        "La zona dei locali del Monte Testaccio è rumorosa nelle notti del weekend",
      ],
    },
  ],

  pois: [
    {
      slug: "colosseum",
      citySlug: "rome",
      name: "Colosseo",
      lat: 41.8902,
      lng: 12.4922,
      kind: "sight",
      needsBooking: true,
      tip: "Comprate online il biglietto combinato Colosseo-Foro-Palatino con giorni di anticipo, va esaurito e la coda in loco supera l'ora in stagione. Il turno a orario vale solo per il Colosseo, quindi entrateci per primo al vostro slot, poi usate lo stesso biglietto per il Foro e il Palatino nelle 24 ore successive. Le opzioni aggiuntive per il piano dell'arena e i sotterranei richiedono una prenotazione separata con largo anticipo.",
    },
    {
      slug: "roman-forum-palatine",
      citySlug: "rome",
      name: "Foro Romano e Colle Palatino",
      lat: 41.8925,
      lng: 12.4853,
      kind: "sight",
      needsBooking: true,
      tip: "Coperto dallo stesso biglietto combinato del Colosseo, quindi fatelo lo stesso giorno o il successivo entro la finestra di 24 ore. Entrate dal cancello più tranquillo di Via di San Gregorio invece che dall'ingresso affollato del Foro vicino al Colosseo, e salite prima sul Palatino per la vista dall'alto sulle rovine prima del sole di mezzogiorno. Non c'è quasi ombra, quindi portate acqua e un cappello.",
    },
    {
      slug: "pantheon",
      citySlug: "rome",
      name: "Pantheon",
      lat: 41.8986,
      lng: 12.4769,
      kind: "sight",
      needsBooking: true,
      tip: "L'ingresso costa 5 EUR ed è gratuito la prima domenica del mese, ma nei weekend e nei giorni festivi serve un turno a orario, quindi prenotate quelli online in anticipo. Venite all'apertura (9) o nell'ultima ora prima della chiusura per avere l'interno e il suo oculo aperto senza un muro di bastoni per selfie. In una giornata di pioggia, guardate la pioggia cadere dritta attraverso l'oculo sul pavimento di marmo che la drena.",
    },
    {
      slug: "trevi-fountain",
      citySlug: "rome",
      name: "Fontana di Trevi",
      lat: 41.9009,
      lng: 12.4833,
      kind: "sight",
      needsBooking: false,
      tip: "Andateci alle 7 del mattino o dopo mezzanotte per vedere davvero il marmo, a metà mattina è una calca solida di dieci persone di profondità. Lanciate la moneta con la mano destra sopra la spalla sinistra se volete la tradizione, e saltate i caffè cari sulla piazza. L'acqua non è potabile, ma i nasoni gratuiti nelle vicinanze lo sono.",
    },
    {
      slug: "vatican-museums",
      citySlug: "rome",
      name: "Musei Vaticani e Cappella Sistina",
      lat: 41.9065,
      lng: 12.4536,
      kind: "museum",
      needsBooking: true,
      tip: "Prenotate online il primo turno delle 8, con settimane di anticipo, e andate dritti alla Cappella Sistina lungo il percorso più vuoto prima di tornare indietro, le gallerie si riempiono spalla a spalla entro le 10. Il mercoledì mattina è il più tranquillo perché l'udienza papale richiama la folla in piazza. L'ingresso gratuito dell'ultima domenica del mese è una calca con code di un'ora, evitatelo a meno che non abbiate pazienza infinita.",
    },
    {
      slug: "st-peters-basilica",
      citySlug: "rome",
      name: "Basilica di San Pietro",
      lat: 41.9022,
      lng: 12.4539,
      kind: "sight",
      needsBooking: false,
      tip: "L'ingresso alla basilica è gratuito ma la fila dei controlli in piazza può arrivare a un'ora, quindi presentatevi all'apertura delle 7 o venite nel tardo pomeriggio. Il codice di abbigliamento è severo: spalle e ginocchia coperte o vi respingono alla porta. La salita alla cupola è a pagamento (circa 10 EUR con l'ascensore fino alla terrazza, 8 EUR a piedi) e vale la pena per la vista a picco lungo la navata e sopra Roma.",
    },
    {
      slug: "piazza-navona",
      citySlug: "rome",
      name: "Piazza Navona",
      lat: 41.8992,
      lng: 12.4731,
      kind: "sight",
      needsBooking: false,
      tip: "La piazza barocca costruita su un antico stadio è gratuita e si gode al meglio la mattina presto o dopo cena, quando la folla e i caricaturisti si diradano. La Fontana dei Quattro Fiumi del Bernini è il pezzo forte, ma non sedetevi a un caffè con tavolini all'aperto qui, il sovrapprezzo della posizione è brutale. Spostatevi di una strada a ovest per una frazione del prezzo.",
    },
    {
      slug: "spanish-steps",
      citySlug: "rome",
      name: "Piazza di Spagna",
      lat: 41.906,
      lng: 12.4823,
      kind: "sight",
      needsBooking: false,
      tip: "Sedersi sulla scalinata è vietato e la polizia fa rispettare la regola con multe, quindi questa è una sosta da fermarsi e fotografare, non da riposo. Venite all'alba per la scalinata vuota, oppure salite alla chiesa di Trinità dei Monti in cima per una vista gratuita sui tetti. La casa di Keats e Shelley alla base è una deviazione tranquilla se ne volete una.",
    },
    {
      slug: "galleria-borghese",
      citySlug: "rome",
      name: "Galleria Borghese",
      lat: 41.9142,
      lng: 12.4922,
      kind: "museum",
      needsBooking: true,
      tip: "Non si entra senza un turno a orario di due ore prenotato in anticipo, e si esauriscono con giorni di anticipo, quindi prenotatela prima di ogni altra cosa del viaggio. Custodisce le più grandi sculture del Bernini e una sala di Caravaggio in una villa compatta, quindi due ore bastano davvero. Arrivate 15 minuti prima per lasciare la borsa nel guardaroba obbligatorio prima dell'inizio della vostra finestra.",
    },
    {
      slug: "trastevere-lanes",
      citySlug: "rome",
      name: "Vicoli di Trastevere",
      lat: 41.8896,
      lng: 12.4695,
      kind: "experience",
      needsBooking: false,
      tip: "Girate i vicoli acciottolati la mattina per le foto con l'edera e i panni stesi senza folla, poi tornate dopo le 20 per la scena di cene e drink. Puntate alle strade attorno a Piazza di Santa Maria in Trastevere invece che alla piazza stessa, dove i ristoranti vivono di rendita sulla vista. Prenotate un tavolo in trattoria, le migliori si riempiono entro le 20:30 nei weekend.",
    },
    {
      slug: "campo-de-fiori",
      citySlug: "rome",
      name: "Mercato di Campo de' Fiori",
      lat: 41.8956,
      lng: 12.4722,
      kind: "food",
      needsBooking: false,
      tip: "Il mercato del mattino va all'incirca dalle 7 alle 14, dal lunedì al sabato, ed è più souvenir per turisti che spesa locale ormai, quindi venite per curiosare e fotografare più che per comprare a buon mercato. Comprate frutta, formaggio e una fetta di pizza bianca dal forno all'angolo, il Forno Campo de' Fiori, per un picnic. Di notte la piazza si trasforma in una chiassosa scena di bar studenteschi.",
    },
    {
      slug: "castel-sant-angelo",
      citySlug: "rome",
      name: "Castel Sant'Angelo",
      lat: 41.9031,
      lng: 12.4663,
      kind: "sight",
      needsBooking: false,
      tip: "Il mausoleo cilindrico di Adriano trasformato in fortezza papale sta proprio tra il Vaticano e il centro, quindi abbinatelo a una mattinata in Vaticano. Prenotate online per saltare la fila dei biglietti, poi salite la rampa a spirale fino alla terrazza sul tetto per uno dei migliori panorami di Roma, con la cupola di San Pietro in primo piano. Il Ponte Sant'Angelo con le sue statue davanti è gratuito e si gode al meglio al tramonto.",
    },
    {
      slug: "villa-borghese",
      citySlug: "rome",
      name: "Parco di Villa Borghese",
      lat: 41.9142,
      lng: 12.4853,
      kind: "park",
      needsBooking: false,
      tip: "Il grande parco centrale di Roma è gratuito ed è l'abbinamento naturale con la Galleria Borghese al suo interno, quindi sfruttate le ore attorno prima o dopo il vostro turno in galleria. Camminate fino alla terrazza del Pincio sul bordo occidentale per una vista ampia e gratuita su Piazza del Popolo e sui tetti verso San Pietro, al meglio al tramonto. Noleggiate una bici o una barca a remi sul laghetto se avete bambini al seguito.",
    },
    {
      slug: "jewish-ghetto-food",
      citySlug: "rome",
      name: "Ghetto ebraico",
      lat: 41.8925,
      lng: 12.4778,
      kind: "food",
      needsBooking: false,
      tip: "L'antico quartiere ebraico di Roma attorno a Via del Portico d'Ottavia è il posto per i carciofi alla giudia, il carciofo schiacciato e fritto, al meglio da ottobre a primavera quando sono di stagione. Venite per un pranzo tardivo, ordinate il carciofo fritto e il baccalà, e prendete un dolce dallo storico forno Boccione all'angolo. Ricordate che il quartiere è tranquillo il sabato per lo Shabbat.",
    },
  ],

  itineraries: [
    {
      citySlug: "rome",
      days: 2,
      summary:
        "Due giorni coprono i grandi classici di Roma, ma è una corsa ai punti salienti e la sentirete, perché Roma ne richiede davvero tre. In 48 ore potete fare la Roma antica (Colosseo, Foro, Palatino) il primo giorno e il Vaticano più il cuore delle piazze (Pantheon, Trevi, Navona) il secondo, con cena a Trastevere entrambe le sere. Cosa dovete tagliare: la Galleria Borghese, Villa Borghese, gli interni di Castel Sant'Angelo, il cibo di Testaccio e ogni indugio lento, quindi questa è una marcia, non una passeggiata. Si adatta a un weekend, a uno scalo o a un primo assaggio prima di combinarla con Firenze. Le regole non negoziabili: prenotate il biglietto combinato Colosseo-Foro e il turno delle 8 in Vaticano prima di partire, o perderete ore in code che non potete permettervi in un viaggio di due giorni. Basatevi nel Centro Storico così entrambe le mattine iniziano a piedi e le sere vi mettono a pochi passi dalla cena. Se ottenete un terzo giorno, aggiungete la Borghese e rallentate, è il singolo miglioramento migliore.",
      stayNeighborhoodSlug: "centro-storico",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Roma antica: Colosseo, Foro, Palatino",
          morning: [
            {
              poiSlug: "colosseum",
              text: "Iniziate al Colosseo per il vostro turno di apertura prenotato, prima che si formino le code e il caldo. Girate entrambi i livelli per l'ampia veduta dell'arena, poi uscite verso il Foro usando lo stesso biglietto combinato.",
              durationMin: 90,
            },
            {
              poiSlug: "roman-forum-palatine",
              text: "Entrate al Foro Romano e salite sul Colle Palatino accanto con lo stesso biglietto. Salite prima sul Palatino per la vista dall'alto sulle rovine, poi snodatevi tra i templi e gli archi del Foro prima che il sole di mezzogiorno raggiunga il culmine.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              text: "Pranzate e recuperate a Monti, a dieci minuti a piedi dal Foro, in un wine bar o in una trattoria attorno a Piazza della Madonna dei Monti. È l'antidoto locale ai caffè per turisti proprio accanto al Colosseo.",
              durationMin: 90,
            },
            {
              text: "Deviate verso il Campidoglio e la Piazza del Campidoglio di Michelangelo, poi verso la terrazza gratuita dietro di essa per una vista dall'alto sul Foro che avete appena percorso. Sono cinque minuti di salita e il miglior punto panoramico gratuito sulla Roma antica.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "trastevere-lanes",
              text: "Attraversate il fiume verso Trastevere per la sera, girando i vicoli acciottolati mentre i bar si riempiono. Prenotate un tavolo in trattoria per le 20:30 circa, quelli buoni fuori dalla piazza principale sono pieni a quell'ora in ogni serata affollata.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Vaticano e il cuore delle piazze",
          morning: [
            {
              poiSlug: "vatican-museums",
              text: "Siate ai Musei Vaticani per il vostro turno prenotato delle 8 e andate dritti alla Cappella Sistina prima che le gallerie si intasino entro le 10. Il mercoledì è la mattina più tranquilla perché l'udienza papale richiama la folla in piazza.",
              durationMin: 150,
            },
            {
              poiSlug: "st-peters-basilica",
              text: "Camminate poi fino alla Basilica di San Pietro, a ingresso gratuito con spalle e ginocchia coperte. Se le gambe reggono, pagate il piccolo biglietto per la salita alla cupola e la vista a picco lungo la navata e sopra la città.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "pantheon",
              text: "Riattraversate il fiume e puntate al Pantheon, l'edificio meglio conservato della Roma antica, entrando al vostro turno a orario se è weekend. Fermatevi sotto l'oculo aperto, poi prendete un caffè in uno dei bar storici della piazza.",
              durationMin: 75,
            },
            {
              poiSlug: "piazza-navona",
              text: "Camminate due minuti fino a Piazza Navona per la Fontana dei Quattro Fiumi del Bernini sul sedime del suo antico stadio barocco. Continuate a muovervi di una strada a ovest per un drink a prezzi non turistici.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "trevi-fountain",
              text: "Fate un giro alla Fontana di Trevi la sera, quando la folla si allenta un po' e il marmo è illuminato. Lanciate la moneta, poi salite a Piazza di Spagna a pochi minuti per la scalinata illuminata.",
              durationMin: 60,
            },
            {
              text: "Concludete con la cena nel Centro Storico vicino al vostro hotel, prenotando in anticipo per qualsiasi posto con un nome. Chiudete la serata con un gelato da una vera gelateria, di quelle che tengono le vaschette coperte e riposte in basso, non ammucchiate in vortici al neon.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "rome",
      days: 3,
      summary:
        "Sì, tre giorni sono la durata giusta per Roma, ed è quella che consigliamo per una prima visita. Dà alla Roma antica un giorno intero (Colosseo, Foro, Palatino, più Monti), al Vaticano la sua mattina seguita da Castel Sant'Angelo, e un giorno dedicato al cuore delle piazze: Pantheon, Trevi, Navona, Piazza di Spagna e Campo de' Fiori. Mangiate bene in tre quartieri diversi, riuscite a fare sia Trastevere sia una vera serata in trattoria romana, e vi muovete comunque a un ritmo che vi lascia sedere in una piazza invece di sfrecciarvi accanto. Cosa resta tagliato: la Galleria Borghese, Villa Borghese e la scena gastronomica di Testaccio, che è esattamente ciò che aggiunge un quarto giorno. Si adatta a chi arriva per la prima volta, alle coppie e a chiunque prosegua poi per Firenze. Alloggiate a Monti: si va a piedi al Colosseo, sta sulla metro Cavour e vicino a Termini per lo spostamento al Vaticano, e i suoi wine bar sono la miglior base per le sere. Prenotate il biglietto Colosseo-Foro e il turno delle 8 in Vaticano prima di partire.",
      stayNeighborhoodSlug: "monti",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Roma antica: Colosseo, Foro, Palatino, Monti",
          morning: [
            {
              poiSlug: "colosseum",
              text: "Iniziate al Colosseo per il vostro turno di apertura prenotato, davanti alle code e al caldo. Percorrete entrambi i livelli per la vista completa dell'arena, poi dirigetevi al Foro con lo stesso biglietto combinato.",
              durationMin: 90,
            },
            {
              poiSlug: "roman-forum-palatine",
              text: "Entrate poi al Foro Romano e al Colle Palatino, usando il cancello più tranquillo di Via di San Gregorio. Salite prima sul Palatino per la panoramica delle rovine, poi scendete tra le vie del Foro prima che il sole sia allo zenit.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              text: "Pranzate a Monti, a breve distanza a piedi dal Foro, in una trattoria o enoteca attorno a Piazza della Madonna dei Monti. Prendetevi il vostro tempo, ve la siete guadagnata la pausa dopo una mattina in piedi tra le rovine.",
              durationMin: 90,
            },
            {
              text: "Salite al Campidoglio, alla Piazza del Campidoglio di Michelangelo e alla terrazza gratuita dietro di essa per un panorama dall'alto sul Foro. Se avete energia, i Musei Capitolini qui custodiscono la lupa di bronzo originale e una superba collezione antica.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Restate a Monti per la sera, bevendo sui gradini della fontana della piazza principale come la gente del posto prima di cena. I wine bar e le piccole trattorie del quartiere sono a pochi passi barcollanti dal vostro hotel.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Vaticano e Castel Sant'Angelo",
          morning: [
            {
              poiSlug: "vatican-museums",
              text: "Siate ai Musei Vaticani per il vostro turno prenotato delle 8 e andate dritti alla Cappella Sistina prima della calca. Il mercoledì mattina è il più tranquillo perché l'udienza papale richiama la folla in piazza.",
              durationMin: 150,
            },
            {
              poiSlug: "st-peters-basilica",
              text: "Camminate fino alla Basilica di San Pietro, a ingresso gratuito con spalle e ginocchia coperte. Pagate il piccolo biglietto per la salita alla cupola se le gambe reggono, la vista lungo la navata e sopra Roma è la ricompensa.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              text: "Pranzate a Prati, a pochi isolati dal Vaticano, dove i ristoranti sono affidabili e privi del sovrapprezzo da pullman turistici che trovate proprio accanto a San Pietro. È un buon posto per rallentare prima dell'attrazione pomeridiana.",
              durationMin: 75,
            },
            {
              poiSlug: "castel-sant-angelo",
              text: "Camminate fino a Castel Sant'Angelo tra il Vaticano e il fiume, prenotando online per saltare la fila. Salite la rampa a spirale fino alla terrazza sul tetto per un panorama con la cupola di San Pietro in primo piano, poi attraversate il Ponte Sant'Angelo con le sue statue verso il centro.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "trastevere-lanes",
              text: "Passate a Trastevere per cena, girando i vicoli acciottolati mentre i bar si riempiono. Prenotate una trattoria fuori dalla piazza principale per le 20:30 circa, e chiudete con un drink in Piazza di Santa Maria.",
              durationMin: 180,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Cuore delle piazze: Pantheon, Trevi, Navona",
          morning: [
            {
              poiSlug: "pantheon",
              text: "Iniziate al Pantheon all'apertura delle 9, al vostro turno a orario se è weekend, per fermarvi sotto l'oculo prima della folla. Prendete un caffè in un bar storico della piazza, poi camminate due minuti fino alla tappa successiva.",
              durationMin: 75,
            },
            {
              poiSlug: "piazza-navona",
              text: "Godetevi Piazza Navona e la Fontana dei Quattro Fiumi del Bernini sul sedime di un antico stadio. Fotografatela, poi spostatevi di una strada dalla piazza per un drink a prezzi giusti.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "campo-de-fiori",
              text: "Camminate fino a Campo de' Fiori per la coda del mercato del mattino, prendendo frutta e una fetta di pizza bianca dal Forno Campo de' Fiori per un pranzo leggero. Poi infilatevi nel vicino Ghetto ebraico per un carciofo fritto se preferite sedervi.",
              durationMin: 90,
            },
            {
              poiSlug: "trevi-fountain",
              text: "Fate un giro alla Fontana di Trevi, accettando che il pomeriggio significa folla, e lanciate la moneta sopra la spalla sinistra. Poi salite a Piazza di Spagna a pochi minuti, e fino alla chiesa di Trinità dei Monti per la vista gratuita sui tetti.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "spanish-steps",
              text: "Attardatevi attorno a Piazza di Spagna e alle eleganti vie dello shopping sottostanti mentre cala la luce, poi tornate verso il centro. Qui è tutto a breve distanza a piedi, quindi girovagate invece di pianificare.",
              durationMin: 60,
            },
            {
              text: "Prenotate una cena d'addio nel Centro Storico o di nuovo a Monti, concedendovi un po' di più sul vostro ultimo pasto romano. Finite con un gelato da una gelateria seria, di quelle che conservano le vaschette coperte e in basso.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "rome",
      days: 4,
      summary:
        "Quattro giorni sono il punto ideale per una prima visita a Roma, trasformando una corsa turistica in una vera vacanza. Dal primo al terzo giorno coprite l'essenziale: la Roma antica (Colosseo, Foro, Palatino), il Vaticano con Castel Sant'Angelo e il cuore delle piazze con Pantheon, Trevi e Navona, ognuno fatto senza fretta. Il quarto giorno è la valvola di sfogo, costruita intorno alla Galleria Borghese, che va prenotata con un rigido turno a orario e non si può visitare senza, seguita dai giardini di Villa Borghese e da un lungo, goloso pomeriggio gastronomico tra Trastevere o Testaccio. Questa durata si adatta a chi detesta la marcia forzata, alle coppie e a chiunque abbia voli che incastrano il viaggio in modo scomodo. Per quattro giorni consigliamo di basarvi a Trastevere: avete accettato un ritmo più lento, e i suoi vicoli e le sue trattorie fanno del tornare a casa ogni sera la parte migliore della giornata. Oltre i quattro giorni, aggiungete una gita a Tivoli per Villa Adriana, oppure proseguite per Firenze in treno veloce in un'ora e mezza. Prenotate Colosseo, Vaticano e soprattutto la Borghese con largo anticipo.",
      stayNeighborhoodSlug: "trastevere",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Roma antica: Colosseo, Foro, Palatino",
          morning: [
            {
              poiSlug: "colosseum",
              text: "Iniziate al Colosseo per il vostro turno di apertura prenotato, prima delle code e del caldo. Girate entrambi i livelli, poi passate al Foro con lo stesso biglietto combinato.",
              durationMin: 90,
            },
            {
              poiSlug: "roman-forum-palatine",
              text: "Entrate al Foro Romano e al Colle Palatino con lo stesso biglietto, usando il cancello più tranquillo di San Gregorio. Salite prima sul Palatino per la panoramica, poi scendete tra le vie del Foro prima di mezzogiorno.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              text: "Pranzate a Monti vicino al Foro, in un wine bar o in una trattoria attorno a Piazza della Madonna dei Monti. Rallentate, il pomeriggio è volutamente leggero nel primo giorno.",
              durationMin: 90,
            },
            {
              text: "Salite al Campidoglio per la Piazza del Campidoglio di Michelangelo e la terrazza gratuita dietro di essa, affacciata sul Foro. I Musei Capitolini qui sono l'aggiunta migliore se volete altra Roma antica.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Tornate a Trastevere per cena, entrando pian piano nel quartiere che state chiamando casa. Prenotate una trattoria fuori dalla piazza principale e concludete con un drink in Piazza di Santa Maria.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Vaticano e Castel Sant'Angelo",
          morning: [
            {
              poiSlug: "vatican-museums",
              text: "Siate ai Musei Vaticani per il vostro turno delle 8 e andate dritti alla Cappella Sistina prima che le gallerie si riempiano. Il mercoledì è la mattina più tranquilla, perché l'udienza papale richiama la folla in piazza.",
              durationMin: 150,
            },
            {
              poiSlug: "st-peters-basilica",
              text: "Camminate fino alla Basilica di San Pietro, gratuita con spalle e ginocchia coperte. Pagate la salita alla cupola se le gambe reggono, per la vista lungo la navata e su tutta la città.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              text: "Pranzate a Prati vicino al Vaticano, dove il cibo è affidabile e privo del sovrapprezzo da gruppi turistici che c'è accanto a San Pietro. Una buona pausa prima del pomeriggio.",
              durationMin: 75,
            },
            {
              poiSlug: "castel-sant-angelo",
              text: "Camminate fino a Castel Sant'Angelo, prenotando online per saltare la fila, e salite la rampa fino alla terrazza sul tetto per il panorama sulla cupola di San Pietro. Attraversate il Ponte Sant'Angelo con le sue statue verso il centro al tramonto.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "piazza-navona",
              text: "Passeggiate per Piazza Navona la sera per la fontana del Bernini illuminata e la piazza al suo momento più calmo. Prendete un aperitivo di una strada dalla piazza dove i prezzi sono ragionevoli.",
              durationMin: 60,
            },
            {
              text: "Cena di nuovo a Trastevere, girando i vicoli sulla via del ritorno. I tavoli buoni si riempiono entro le 20:30 nei weekend, quindi prenotate in anticipo.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Cuore delle piazze: Pantheon, Trevi, Navona",
          morning: [
            {
              poiSlug: "pantheon",
              text: "Iniziate al Pantheon all'apertura delle 9, al vostro turno a orario se è weekend, per cogliere l'oculo prima della folla. Caffè in un bar storico della piazza, poi proseguite.",
              durationMin: 75,
            },
            {
              poiSlug: "campo-de-fiori",
              text: "Camminate fino a Campo de' Fiori per il mercato del mattino e una fetta da picnic dal Forno Campo de' Fiori. Infilatevi nel vicino Ghetto ebraico per un carciofo fritto se preferite un pranzo seduti.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "trevi-fountain",
              text: "Dirigetevi alla Fontana di Trevi, lanciate la moneta sopra la spalla sinistra e accettate la folla pomeridiana. Poi salite a Piazza di Spagna e fino a Trinità dei Monti per la vista gratuita sui tetti.",
              durationMin: 90,
            },
            {
              poiSlug: "spanish-steps",
              text: "Girate le vie eleganti sotto Piazza di Spagna, curiosando lungo la fascia delle grandi firme in Via dei Condotti. Qui è tutto a breve distanza a piedi, quindi lasciatevi andare invece di marciare.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Cena nel Centro Storico o di nuovo a Trastevere, prenotando in anticipo per qualsiasi posto ben recensito. Finite con un gelato da una gelateria seria, vaschette conservate coperte e in basso, non montate in alto.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Borghese, parco di Villa Borghese e un pomeriggio gastronomico",
          morning: [
            {
              poiSlug: "galleria-borghese",
              text: "Usate il vostro turno di due ore a orario prenotato per la Galleria Borghese, arrivando 15 minuti prima per il controllo bagagli obbligatorio. Le sculture del Bernini e la sala del Caravaggio sono il pezzo forte di qualsiasi itinerario d'arte romano, e due ore bastano davvero per la villa compatta.",
              durationMin: 120,
            },
            {
              poiSlug: "villa-borghese",
              text: "Sbucate nel parco di Villa Borghese attorno, gratuito e verde, e camminate fino alla terrazza del Pincio sul bordo occidentale. La vista su Piazza del Popolo e sui tetti verso San Pietro è una delle migliori della città, e gratuita.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "jewish-ghetto-food",
              text: "Dedicate il pomeriggio al mangiare: o il Ghetto ebraico per i carciofi alla giudia e il baccalà con un dolce da Boccione, oppure prendete la metro per Testaccio per il suo mercato coperto e le trattorie storiche di frattaglie. Entrambi sono questione di cibo, non di attrazioni.",
              durationMin: 120,
            },
            {
              text: "Smaltitelo con un lento giro per Trastevere nell'ora dorata, quando i vicoli si fotografano al meglio e i turisti giornalieri se ne sono andati. Un gelato o un aperitivo anticipato vi fa da ponte alla cena.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Prenotate una cena d'addio a Trastevere, spendendo di più per il vostro ultimo pasto romano in una trattoria che avete adocchiato prima. Cacio e pepe, carbonara o saltimbocca, questo è il pasto su cui andare sul classico.",
              durationMin: 120,
            },
            {
              text: "Concludete con un ultimo drink in Piazza di Santa Maria o in un tranquillo bar di vicolo, a breve distanza a piedi dal vostro letto. Nessun viaggio di ritorno da pianificare, che è tutto il senso del basarsi qui per quattro giorni.",
              durationMin: 45,
            },
          ],
        },
      ],
    },
  ],
};

export default romeIt;
