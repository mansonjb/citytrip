import type { CityData } from "../types";

const athensIt: CityData = {
  city: {
    slug: "athens",
    name: "Atene",
    country: "Grecia",
    countrySlug: "greece",
    lat: 37.9838,
    lng: 23.7275,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "ATH",
    airportToCenter:
      "La linea 3 della metropolitana (blu) collega l'aeroporto direttamente a Syntagma in centro in circa 40 minuti per circa 9 EUR, con treni ogni 30 minuti. L'autobus espresso X95 fa lo stesso tragitto per 5,50 EUR a ogni ora, 24 ore su 24, ma impiega 60-90 minuti a seconda del traffico. Un taxi a tariffa fissa fino al centro costa circa 40 EUR di giorno.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [7, 8],
    monthlyNotes: {
      1: "Fresco e tranquillo con massime di 13C, le tariffe alberghiere più basse dell'anno e nessuna coda per l'Acropoli. La pioggia arriva a brevi tratti ma il sole limpido è frequente, e i siti statali offrono l'ingresso gratuito la prima domenica, quindi conviene programmare una visita per il 4 gennaio.",
      2: "Ancora mite con 14C e uno dei mesi più calmi sulla rocca, con luce nitida per le foto tra un rovescio e l'altro. La finestra di ingresso gratuito della prima domenica vale il 1 febbraio, e le terrazze dei caffè di Plaka si riempiono in ogni pranzo soleggiato.",
      3: "Le massime salgono verso i 16C e compaiono i fiori di mandorlo, con la folla che inizia a crescere solo a fine mese. Il 25 marzo è il Giorno dell'Indipendenza, festa nazionale con una parata militare davanti a Syntagma e molti siti e negozi chiusi, quindi conviene organizzarsi di conseguenza.",
      4: "Uno dei mesi migliori con 20C, colline verdi e luce lunga, anche se è quando di solito cade la Pasqua ortodossa greca (il 12 aprile nel 2026) ed è la festa più grande del Paese. Atene si mezzo svuota mentre le famiglie tornano a casa, molte taverne chiudono nel weekend di Pasqua, e la messa di mezzanotte a lume di candela vale la pena di vedere.",
      5: "Caldo, secco e affidabile con 26C, il punto ideale prima della fornace estiva, con lunghe serate per cene sui rooftop. La folla è intensa all'Acropoli, quindi conviene prenotare un biglietto a orario e andare all'apertura delle 8, ma il clima e la luce sono quasi perfetti.",
      6: "Caldo con 31C e affollato, con il Festival di Atene ed Epidauro che apre la sua stagione di dramma antico e concerti all'Odeon di Erode Attico sotto l'Acropoli. Conviene fare la rocca all'apertura, ritirarsi al fresco del Museo dell'Acropoli nel pomeriggio, e prenotare in anticipo le serate del festival.",
      7: "Picco di caldo oltre i 34C, sole implacabile e poca ombra sui siti archeologici, mentre molti ateniesi partono per le isole. Il Festival di Epidauro prosegue all'Odeon, ma visitare significa una partenza alle 8 o le ultime due ore prima della chiusura, con il mezzogiorno passato al chiuso o in piscina.",
      8: "Il mese più caldo e secco con 34C e oltre, quando la città può superare i 38C e i locali si svuotano verso la costa attorno alla festa del 15 agosto. Se agosto è inevitabile, conviene concentrare tutto al primo mattino, prenotare l'aria condizionata, e trattare l'ombreggiato Museo dell'Acropoli e le serate sui rooftop come strategia di sopravvivenza.",
      9: "Il tepore estivo senza il peggio, partendo vicino ai 29C e allentandosi nel corso del mese, con il Festival di Epidauro che si conclude e gli ateniesi di ritorno in città. La folla si dirada dopo la prima settimana e questo è probabilmente il mese complessivamente migliore per una vacanza ad Atene.",
      10: "Giornate calde attorno ai 23C con le prime piogge vere di ritorno a fine mese e una luce radente superba sul marmo. La folla cala nettamente dopo metà mese, e l'ingresso gratuito della prima domenica riprende per la bassa stagione a ottobre, anche se conviene verificare mentre l'orario invernale entra in vigore a novembre.",
      11: "Più fresco con 18C con tratti più piovosi ma molte giornate luminose, e le grandi attrazioni più tranquille dell'autunno. I prezzi di bassa stagione tornano e l'ingresso gratuito ai siti statali cade la prima domenica, il 1 novembre, quindi un viaggio a basso costo e senza code è del tutto fattibile.",
      12: "Mite per l'inverno con 14C ma il tratto più piovoso, con le luci di Natale tese tra Syntagma e Monastiraki e un mercatino festivo nelle piazze. I siti restano aperti con brevi orari invernali e l'ingresso gratuito della prima domenica cade il 6 dicembre, attirando folle locali.",
    },
    climate: {
      1: { highC: 13, lowC: 7, rainyDays: 11 },
      2: { highC: 14, lowC: 7, rainyDays: 9 },
      3: { highC: 16, lowC: 8, rainyDays: 8 },
      4: { highC: 20, lowC: 11, rainyDays: 7 },
      5: { highC: 26, lowC: 15, rainyDays: 5 },
      6: { highC: 31, lowC: 20, rainyDays: 3 },
      7: { highC: 34, lowC: 23, rainyDays: 1 },
      8: { highC: 34, lowC: 23, rainyDays: 1 },
      9: { highC: 29, lowC: 19, rainyDays: 3 },
      10: { highC: 23, lowC: 15, rainyDays: 6 },
      11: { highC: 18, lowC: 11, rainyDays: 8 },
      12: { highC: 14, lowC: 8, rainyDays: 11 },
    },
    budgetLevel: "mid",
    budgetPerDay: { budget: 55, mid: 110, high: 220 },
    tagline: "La culla dell'Occidente, con i migliori rooftop d'Europa.",
    heroIntro:
      "Atene consegna l'Acropoli, siti antichi di livello mondiale e un centro cittadino ruvido ed entusiasmante che si percorre da un capo all'altro in un pomeriggio. Tre giorni sono l'onesto punto ideale: uno per la rocca e il suo museo, uno per l'Agora antica e i vicoli del centro storico, e uno per il Museo Archeologico Nazionale e una collina al tramonto. Conviene venire in primavera o all'inizio dell'autunno, prenotare il biglietto per l'Acropoli prima di partire, e cenare su un rooftop con il Partenone illuminato sopra la testa.",
    accent: { from: "#1E7FA8", to: "#E0C15A", ink: "#0E3E52" },
    neighborhoodSlugs: ["plaka", "monastiraki", "koukaki", "kolonaki", "psyrri"],
    nearbyCitySlugs: [],
  },

  neighborhoods: [
    {
      slug: "plaka",
      citySlug: "athens",
      name: "Plaka",
      lat: 37.9714,
      lng: 23.7286,
      bestFor: ["first-time", "romantic", "family"],
      vibe: "Il centro storico avvolto attorno al versante nord dell'Acropoli, un dedalo di case neoclassiche, bougainvillee e vicoli pedonali che salgono verso la rocca. Tutto ciò che vuole chi viene per la prima volta si trova entro dieci minuti a piedi, e le strade sono calme e graziose una volta che i gitanti si diradano di sera. È la cartolina, e si paga un piccolo sovrapprezzo per dormirci.",
      pros: [
        "A piedi fino all'Acropoli, all'Agora antica e all'Agora romana senza trasporti",
        "Vicoli senza traffico, sicuri, tranquilli e deliziosi da percorrere di notte",
        "Fitto di taverne, caffè e gli scalini simil-isolani di Anafiotika",
      ],
      cons: [
        "La ristorazione più turistica della città, con alcune taverne che campano sulla posizione",
        "I prezzi di hotel e cibo corrono sopra quelli dei quartieri circostanti",
        "Strade ripide e a gradini faticose con una valigia o un passeggino",
      ],
    },
    {
      slug: "monastiraki",
      citySlug: "athens",
      name: "Monastiraki",
      lat: 37.9764,
      lng: 23.7256,
      bestFor: ["first-time", "nightlife", "budget"],
      vibe: "Il vivace snodo del centro, costruito attorno a una piazza servita dalla metro dove il mercato delle pulci, l'Agora romana e i vicoli del centro storico si incontrano tutti. I rooftop bar qui guardano dritti l'Acropoli illuminata, e le strade restano rumorose e animate oltre la mezzanotte. Centrale, ben collegato e mai noioso, se pur un po' caotico.",
      pros: [
        "Nodo metro sulle linee 1 e 3, diretto all'aeroporto e al porto del Pireo",
        "I migliori rooftop bar per rapporto qualità-prezzo con vista frontale sull'Acropoli",
        "A piedi fino all'Acropoli, all'Agora, a Plaka e a Psyrri in pochi minuti",
      ],
      cons: [
        "Rumoroso giorno e notte attorno alla piazza e alle vie del mercato",
        "Turistico e a rischio borseggi nei tratti più affollati del mercato delle pulci",
        "Meno camere tranquille e riposanti rispetto ai quartieri più calmi",
      ],
    },
    {
      slug: "koukaki",
      citySlug: "athens",
      name: "Koukaki",
      lat: 37.9648,
      lng: 23.7256,
      bestFor: ["local", "budget", "family"],
      vibe: "Un quartiere residenziale appena a sud dell'Acropoli, più tranquillo e locale del centro storico ma pur sempre a breve camminata dall'ingresso principale e dal Museo dell'Acropoli. Le strade alberate custodiscono taverne di quartiere, caffè di terza ondata e un'autentica aria vissuta attorno a Georgiou Olympiou. Calmo, ben prezzato e sempre più la base intelligente per chi torna.",
      pros: [
        "A piedi fino al versante sud dell'Acropoli, al museo e alla collina di Filopappo",
        "Le stazioni metro Akropoli e Syngrou-Fix sulla linea 2 per il resto della città",
        "Autentica ristorazione di quartiere a prezzi equi, ben fuori dai percorsi turistici",
      ],
      cons: [
        "Scarso di attrazioni proprie, si esce dal quartiere per vedere le cose",
        "Più tranquillo di sera, con una scena di bar più piccola di Monastiraki o Psyrri",
        "Alcuni isolati vicino al viale Syngrou sono trafficati",
      ],
    },
    {
      slug: "kolonaki",
      citySlug: "athens",
      name: "Kolonaki",
      lat: 37.9795,
      lng: 23.7443,
      bestFor: ["romantic", "local", "family"],
      vibe: "Il quartiere elegante e alla moda sulle pendici inferiori del Licabetto, pieno di negozi di firme, gallerie d'arte e caffè curati dove ateniesi ben vestiti osservano la gente. Mette ai piedi della funicolare per la collina del Licabetto e a una camminata in piano da Syntagma e dai musei. Raffinato e sicuro, se pur più caro e meno atmosferico del centro storico.",
      pros: [
        "Ai piedi della funicolare del Licabetto per la migliore vista al tramonto della città",
        "Caffè chic, boutique e gli eccellenti musei Benaki e delle Cicladi nelle vicinanze",
        "Strade tranquille, sicure e un'autentica aria locale e residenziale",
      ],
      cons: [
        "Una camminata di 15-20 minuti in salita dall'Acropoli e da Plaka",
        "Il quartiere più caro per ristorazione e shopping",
        "Nessuna stazione metro al suo interno, quindi si cammina fino a Syntagma o Evangelismos",
      ],
    },
    {
      slug: "psyrri",
      citySlug: "athens",
      name: "Psyrri",
      lat: 37.9784,
      lng: 23.7228,
      bestFor: ["nightlife", "local", "budget"],
      vibe: "Un ruvido ex quartiere di botteghe appena a nord di Monastiraki che si è trasformato nel cuore della vita notturna e della street art del centro, gremito di mezze bar, rebetiko dal vivo e taverne aperte fino a tardi. Di giorno è sciatto e mezzo serrato, di notte si riempie di ateniesi che mangiano e bevono sotto file di luci. Rumoroso, economico e molto divertente.",
      pros: [
        "La serata più vivace e locale del centro, dalle mezze al rebetiko",
        "Cibo e bevande più economici di Plaka a pochi minuti a piedi",
        "A due passi dalla metro di Monastiraki e dalle attrazioni principali",
      ],
      cons: [
        "Rumoroso fino alle prime ore, una scelta scarsa per chi ha il sonno leggero",
        "Ruvido e dall'aria vuota su alcuni isolati di giorno",
        "Poche attrazioni classiche, si è qui per mangiare, bere e passeggiare",
      ],
    },
  ],

  pois: [
    {
      slug: "acropolis",
      citySlug: "athens",
      name: "Acropoli e Partenone",
      lat: 37.9715,
      lng: 23.7267,
      kind: "sight",
      needsBooking: true,
      tip: "Conviene comprare il biglietto a orario per l'Acropoli online prima di partire e prendere il primissimo turno delle 8 o le ultime due ore prima della chiusura, perché il caldo estivo di mezzogiorno e la folla sulla rocca senza ombra sono brutali. Il biglietto combinato Acropoli e siti conviene molto di più e copre anche l'Agora antica, l'Agora romana, il Tempio di Zeus Olimpio e altro su più giorni. Conviene entrare dal più tranquillo ingresso sul versante sud vicino al Museo dell'Acropoli invece che dall'affollata entrata principale, e portare acqua e un cappello.",
    },
    {
      slug: "acropolis-museum",
      citySlug: "athens",
      name: "Museo dell'Acropoli",
      lat: 37.9686,
      lng: 23.7286,
      kind: "museum",
      needsBooking: true,
      tip: "Economico, climatizzato e il perfetto rifugio di mezzogiorno dal caldo, quindi conviene abbinarlo alla rocca nello stesso giorno e infilarsi qui quando il sole è al peggio. Conviene prenotare online per saltare la coda del biglietto, poi cominciare dalla Galleria del Partenone all'ultimo piano, le cui pareti di vetro inquadrano il vero tempio sulla collina proprio di fronte. Il pavimento di vetro sopra il quartiere antico scavato all'ingresso merita uno sguardo lento all'entrata.",
    },
    {
      slug: "ancient-agora",
      citySlug: "athens",
      name: "Agora antica e Tempio di Efesto",
      lat: 37.9755,
      lng: 23.7223,
      kind: "sight",
      needsBooking: false,
      tip: "Coperta dal biglietto combinato dell'Acropoli, quindi conviene usare quello invece di pagare a parte, e venire di mattina prima che la folla dell'Acropoli si riversi quaggiù. Il Tempio di Efesto in cima è il tempio greco antico meglio conservato al mondo, molto più integro del Partenone, e quasi mai affollato. Da non saltare la ricostruita Stoà di Attalo, il cui colonnato ombreggiato ospita un piccolo e fresco museo di reperti quotidiani ateniesi.",
    },
    {
      slug: "plaka",
      citySlug: "athens",
      name: "Il centro storico di Plaka",
      lat: 37.9714,
      lng: 23.7286,
      kind: "experience",
      needsBooking: false,
      tip: "Conviene percorrere i vicoli senza traffico di primo mattino per le bougainvillee e le foto a strade vuote, poi tornare dopo le 20 quando le taverne si animano. Conviene deviare dalla via principale dei souvenir di Adrianou verso le tranquille strade alte che salgono ad Anafiotika, dove i prezzi calano e l'atmosfera migliora. Conviene saltare le taverne con i menù fotografici e i buttadentro fuori, che campano sulla posizione.",
    },
    {
      slug: "monastiraki-square",
      citySlug: "athens",
      name: "Mercato delle pulci e piazza di Monastiraki",
      lat: 37.9764,
      lng: 23.7256,
      kind: "sight",
      needsBooking: false,
      tip: "Il mercato delle pulci della domenica mattina in piazza Avissynias è quello vero, con robaccia autentica e antiquariato, mentre le bancarelle quotidiane di Ifestou puntano ai souvenir turistici. Conviene tenere d'occhio la borsa e il portafoglio nella calca, questo è il punto più a rischio borseggi della città. Conviene salire su un qualsiasi rooftop bar attorno alla piazza al crepuscolo per la vista frontale sull'Acropoli sopra i tetti in cotto.",
    },
    {
      slug: "temple-olympian-zeus",
      citySlug: "athens",
      name: "Tempio di Zeus Olimpio",
      lat: 37.9693,
      lng: 23.7332,
      kind: "sight",
      needsBooking: false,
      tip: "Incluso nel biglietto combinato dell'Acropoli, quindi non c'è motivo di comprare un ingresso a parte, e 15-20 minuti bastano per le colonne giganti superstiti. Conviene abbinarlo all'Arco di Adriano proprio accanto, gratuito da vedere dalla strada, e al Giardino Nazionale a breve camminata a nord per l'ombra. La luce del tardo pomeriggio rende dorato il marmo e la folla è scarsa qui a qualsiasi ora.",
    },
    {
      slug: "lycabettus-hill",
      citySlug: "athens",
      name: "Collina del Licabetto",
      lat: 37.9829,
      lng: 23.7439,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Il punto più alto della città e il migliore per il tramonto, con l'Acropoli, la distesa urbana e il mare stesi sotto dalla terrazza della cappella. Conviene salire in funicolare da Kolonaki per risparmiare la ripida arrampicata, poi scendere a piedi tra i pini se le ginocchia lo consentono. Conviene arrivare 30 minuti prima del tramonto per assicurarsi un posto alla ringhiera del caffè, e portare uno strato caldo, perché in cima c'è vento.",
    },
    {
      slug: "national-archaeological-museum",
      citySlug: "athens",
      name: "Museo Archeologico Nazionale",
      lat: 37.9891,
      lng: 23.7326,
      kind: "museum",
      needsBooking: false,
      tip: "La più grande collezione di arte greca antica al mondo, a nord del centro, e vale il viaggio anche se si pensa di avere la stanchezza da museo. Conviene puntare dritti alla maschera d'oro di Agamennone, all'imponente bronzo di Zeus o Poseidone e al Meccanismo di Anticitera, poi girare a piacere. È a 15 minuti a piedi o un salto in metro dal centro, e le mattine sono le più tranquille, quindi conviene cominciare qui prima dei gruppi del pomeriggio.",
    },
    {
      slug: "panathenaic-stadium",
      citySlug: "athens",
      name: "Stadio Panatenaico",
      lat: 37.9682,
      lng: 23.7411,
      kind: "sight",
      needsBooking: false,
      tip: "Lo stadio tutto in marmo che ospitò le prime Olimpiadi moderne nel 1896, e il biglietto d'ingresso include un'audioguida e la possibilità di correre un giro o salire sul podio dei vincitori. Si può cogliere l'effetto pieno gratis dalla ringhiera sulla strada se si preferisce non pagare, dato che tutto il ferro di cavallo è visibile dall'esterno. Conviene venire presto o tardi per avere la pista tutta per sé per le foto, e abbinarlo al vicino Giardino Nazionale.",
    },
    {
      slug: "anafiotika",
      citySlug: "athens",
      name: "Anafiotika",
      lat: 37.9724,
      lng: 23.7292,
      kind: "experience",
      needsBooking: false,
      tip: "Un minuscolo angolo di case imbiancate in stile isolano costruite nel versante dell'Acropoli da operai di Anafi, sembra un villaggio delle Cicladi calato nella città. Conviene salire i vicoli a gradini sopra la Plaka alta di primo mattino per le porte azzurre e i gatti senza folla alcuna. Quassù non ci sono negozi né caffè, è puramente un posto da percorrere, quindi conviene andarci in silenzio e rispettare il fatto che dietro quelle porte vive gente.",
    },
    {
      slug: "roman-agora",
      citySlug: "athens",
      name: "Agora romana e Torre dei Venti",
      lat: 37.9743,
      lng: 23.7258,
      kind: "sight",
      needsBooking: false,
      tip: "Coperta dal biglietto combinato dell'Acropoli, e abbastanza piccola da vedere in 20 minuti, quindi conviene inserirla in una passeggiata a Plaka invece di farne una visita apposita. L'ottagonale Torre dei Venti è la star, un'antica stazione meteorologica in marmo e orologio ad acqua con divinità dei venti scolpite su ogni faccia, e una delle strutture meglio conservate della sua epoca. Sorge proprio sul margine di Plaka, quindi conviene incastrarla tra l'Agora antica e il pranzo.",
    },
    {
      slug: "acropolis-rooftop-bar",
      citySlug: "athens",
      name: "Rooftop bar con vista sull'Acropoli",
      lat: 37.9762,
      lng: 23.7255,
      kind: "food",
      needsBooking: true,
      tip: "Il sundowner per eccellenza di Atene è un drink su un rooftop di Monastiraki con l'Acropoli illuminata proprio di fronte, e le terrazze più note si esauriscono, quindi conviene prenotare un tavolo al tramonto un giorno o due prima. Si paga un sovrapprezzo sulla vista per i drink, quindi conviene trattarlo come un giro per la foto più che una cena intera. Chi salta la prenotazione trova sul gratuito punto panoramico pubblico della rocca dell'Areopago sotto l'Acropoli un tramonto simile a costo zero, meno il cocktail.",
    },
    {
      slug: "varvakios-market",
      citySlug: "athens",
      name: "Mercato Centrale Varvakios",
      lat: 37.9803,
      lng: 23.7266,
      kind: "food",
      needsBooking: false,
      tip: "Il chiassoso mercato centrale della carne e del pesce della città su Athinas Street, aperto dal lunedì al sabato all'incirca dalle 7 alle 15 e chiuso la domenica, e migliore a metà mattina quando è in piena attività. Conviene farsi largo tra le carcasse appese fino alle vecchie taverne nascoste dentro i padiglioni, dove i lavoratori del mercato mangiano zuppa di trippa e pesce alla griglia a prezzi stracciati. Anche se non si mangia qui, i circostanti negozi di spezie, frutta secca e gastronomia su Evripidou sono un'ottima ed economica sosta per souvenir gastronomici.",
    },
    {
      slug: "filopappou-hill",
      citySlug: "athens",
      name: "Collina di Filopappo",
      lat: 37.9668,
      lng: 23.7189,
      kind: "viewpoint",
      needsBooking: false,
      tip: "La collina coperta di pini di fronte all'Acropoli da sud-ovest, gratuita e aperta a tutte le ore, con la singola migliore vista frontale sulla rocca e sul Partenone. Conviene salire il sentiero in marmo dalla passeggiata di Dionysiou Areopagitou al tramonto, quando l'Acropoli brilla e la folla è sulla rocca stessa, non qui. Conviene indossare scarpe adeguate, gli antichi sentieri sono levigati e scivolosi, e portare acqua perché in cima non c'è caffè.",
    },
  ],

  itineraries: [
    {
      citySlug: "athens",
      days: 2,
      summary:
        "Due giorni bastano per coprire l'Atene essenziale, anche se è una coppia di giorni pieni e concentrati più che rilassati. In 48 ore si possono fare l'Acropoli e il suo museo il primo giorno, poi l'Agora antica, Plaka, Monastiraki e un tramonto sul rooftop il secondo, mangiando bene entrambe le sere nel centro storico. Ciò che bisogna tagliare: lo splendido Museo Archeologico Nazionale, una salita al tramonto sul Licabetto o su Filopappo, e qualsiasi gita fuori città, quindi questa è la versione classica dei grandi momenti. Si addice a un weekend, a uno scalo diretti alle isole, o a un primo assaggio della città. L'unica cosa non negoziabile: prenotare in anticipo il biglietto a orario per l'Acropoli e prendere il turno di apertura delle 8, perché la rocca senza ombra è punitiva a metà mattina nei mesi caldi. Conviene sistemarsi a Plaka così entrambe le mattine cominciano a piedi ai siti e le sere mettono a due passi dalla cena. Con un terzo giorno si aggiungono il Museo Archeologico Nazionale e una collina al tramonto, il singolo miglior potenziamento.",
      stayNeighborhoodSlug: "plaka",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "L'Acropoli e il suo museo",
          morning: [
            {
              poiSlug: "acropolis",
              text: "Si è all'Acropoli per il turno delle 8 prenotato in anticipo, entrando dal più tranquillo ingresso sul versante sud, e si sale al Partenone prima che arrivino il caldo e i gruppi turistici. Si gira attorno all'Eretteo e ai Propilei, poi ci si ferma alla rocca dell'Areopago in discesa per un panorama gratuito sulla città.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Pranzo a Koukaki o sulla passeggiata pedonale di Dionysiou Areopagitou sotto il versante sud, a breve camminata in piano dal museo. Conviene prendersi il tempo lontano dal sole di mezzogiorno prima del pomeriggio al chiuso.",
              durationMin: 75,
            },
            {
              poiSlug: "acropolis-museum",
              text: "Ci si infila nel fresco e climatizzato Museo dell'Acropoli per la parte più calda della giornata, cominciando dalla Galleria del Partenone all'ultimo piano che inquadra il vero tempio di fronte. Il pavimento di vetro sopra la strada antica scavata all'ingresso merita uno sguardo lento all'entrata.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "plaka",
              text: "Si sale a Plaka mentre la luce si ammorbidisce, salendo i tranquilli vicoli alti verso Anafiotika prima che le taverne si riempiano. Conviene prenotare un tavolo fuori dalla via principale dei souvenir attorno alle 20:30 e sistemarsi per una lunga cena greca.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Agora antica, centro storico e un tramonto sul rooftop",
          morning: [
            {
              poiSlug: "ancient-agora",
              text: "Si comincia all'Agora antica con il biglietto combinato, prima che la folla dell'Acropoli si riversi in discesa, e si sale al quasi perfetto Tempio di Efesto in cima. Ci si infila nell'ombreggiata Stoà di Attalo e nel suo piccolo museo di reperti quotidiani ateniesi.",
              durationMin: 90,
            },
            {
              poiSlug: "roman-agora",
              text: "Si cammina pochi minuti fino all'Agora romana e alla sua ottagonale Torre dei Venti, l'antica stazione meteorologica in marmo scolpita con le divinità dei venti. È piccola, quindi 20 minuti la coprono prima di entrare nei vicoli.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "monastiraki-square",
              text: "Si va alla piazza di Monastiraki e al mercato delle pulci, curiosando tra le bancarelle di antiquariato e robaccia, tenendo una mano sulla borsa nella calca. Si prende un souvlaki economico da uno dei famosi banchi alla griglia fuori dalla piazza per un pranzo in piedi.",
              durationMin: 90,
            },
            {
              poiSlug: "anafiotika",
              text: "Si torna su per Plaka fino ai vicoli imbiancati in stile isolano di Anafiotika, salendo i gradini per le porte azzurre e la quiete lontano dal mercato. Conviene andare piano e con rispetto, dietro queste porte vive gente.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "acropolis-rooftop-bar",
              text: "Si prenota un tavolo al tramonto in un rooftop bar di Monastiraki per un drink con l'Acropoli illuminata proprio di fronte. Va trattato come un giro per la vista, poi si scende per cena a Psyrri o Plaka.",
              durationMin: 90,
            },
            {
              text: "Si chiude con una cena di mezze a Psyrri, a pochi minuti a piedi da Monastiraki, dove il cibo è più economico e vivace del centro storico. Il rebetiko dal vivo è facile da trovare qui in qualsiasi sera animata.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "athens",
      days: 3,
      summary:
        "Sì, tre giorni sono la durata giusta per Atene, ed è ciò che consigliamo per una prima visita. Dà all'Acropoli e al suo museo una mattina e un pomeriggio pieni e senza fretta, all'Agora antica e ai vicoli del centro storico un giorno tutto loro con un tramonto sul rooftop, e un terzo giorno per il Museo Archeologico Nazionale di livello mondiale più una salita al Licabetto e il lato più elegante della città a Kolonaki. Si mangia in tre quartieri diversi, si incastrano sia una taverna di Plaka sia una serata di mezze a Psyrri, e ci si muove comunque a un ritmo che permette di sedersi in una piazza invece di attraversarla di corsa. Ciò che resta comunque tagliato è una gita fuori città, che è esattamente ciò che un quarto giorno aggiunge. Si addice a chi viene per la prima volta, alle coppie, e a chiunque spezzi un viaggio verso le isole. Conviene alloggiare a Koukaki: si va a piedi al versante sud dell'Acropoli e al museo, si è sulla metro per il resto della città, e le sue taverne di quartiere battono le trappole turistiche del centro storico. Conviene prenotare in anticipo il biglietto a orario per l'Acropoli e prendere il turno delle 8 prima di partire.",
      stayNeighborhoodSlug: "koukaki",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "L'Acropoli, il suo museo e Filopappo",
          morning: [
            {
              poiSlug: "acropolis",
              text: "Si è all'Acropoli per il turno delle 8 prenotato in anticipo, usando il più tranquillo ingresso sul versante sud vicino alla propria base di Koukaki, e si raggiunge il Partenone prima che si accumuli il caldo. Si gira attorno all'Eretteo e ai Propilei, poi si scende passando dalla rocca dell'Areopago per un panorama gratuito sulla città.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Pranzo sulla passeggiata di Dionysiou Areopagitou o di ritorno a Koukaki, lontano dal sole di mezzogiorno, prima del pomeriggio al chiuso. È la pausa attorno a cui è costruita la giornata.",
              durationMin: 75,
            },
            {
              poiSlug: "acropolis-museum",
              text: "Si trascorre il caldo pomeriggio nel fresco Museo dell'Acropoli, cominciando dalla Galleria del Partenone all'ultimo piano le cui pareti di vetro inquadrano il tempio appena percorso. Conviene indugiare sulle cariatidi e sul pavimento di vetro sopra lo scavo antico.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "filopappou-hill",
              text: "Si sale la collina coperta di pini di Filopappo per il tramonto, la migliore vista frontale sull'Acropoli illuminata, gratuita e aperta a tutte le ore. Conviene indossare scarpe adeguate per i sentieri di marmo levigato, poi scendere per cena a Koukaki.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Agora antica, centro storico e un tramonto sul rooftop",
          morning: [
            {
              poiSlug: "ancient-agora",
              text: "Si comincia all'Agora antica con il biglietto combinato, davanti alla folla che si riversa giù dalla rocca, e si sale all'integro Tempio di Efesto. Ci si rinfresca nella ricostruita Stoà di Attalo e nel suo piccolo museo.",
              durationMin: 90,
            },
            {
              poiSlug: "roman-agora",
              text: "Si taglia fino all'Agora romana e all'ottagonale Torre dei Venti, l'antica stazione meteorologica scolpita, con lo stesso biglietto. Venti minuti la coprono prima di scivolare nei vicoli di Plaka.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "plaka",
              text: "Si percorre Plaka e si sale ai gradini imbiancati di Anafiotika, fermandosi per un lento pranzo in un tranquillo vicolo alto lontano dalla via dei souvenir. È il pomeriggio da lasciarsi andare invece di spuntare cose.",
              durationMin: 120,
            },
            {
              poiSlug: "monastiraki-square",
              text: "Si scende alla piazza di Monastiraki e al suo mercato delle pulci, curiosando tra le bancarelle e tenendo d'occhio la borsa nella folla. Conviene calcolare l'orario in modo da essere vicino ai rooftop mentre la luce comincia ad andarsene.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "acropolis-rooftop-bar",
              text: "Si prende il tavolo al tramonto prenotato su un rooftop di Monastiraki per un drink con l'Acropoli illuminata di fronte. Un giro per la vista, poi giù a cena.",
              durationMin: 90,
            },
            {
              text: "Cena a Psyrri, a breve camminata, per mezze, rebetiko dal vivo e la serata più vivace e conveniente del centro. Conviene prenotare un tavolo nel weekend, i posti buoni si riempiono in fretta.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Museo Archeologico Nazionale, Licabetto e Kolonaki",
          morning: [
            {
              poiSlug: "national-archaeological-museum",
              text: "Si va presto al Museo Archeologico Nazionale, la più bella collezione di arte greca antica al mondo, a 15 minuti a piedi o un salto in metro a nord del centro. Conviene puntare dritti alla maschera d'oro di Agamennone, al grande bronzo di Zeus o Poseidone e al Meccanismo di Anticitera, poi girare a piacere.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "panathenaic-stadium",
              text: "Si attraversa la città fino allo Stadio Panatenaico tutto in marmo, sede delle prime Olimpiadi moderne, dove il biglietto permette di correre un giro e salire sul podio. Conviene abbinarlo a una passeggiata nell'ombreggiato Giardino Nazionale proprio accanto.",
              durationMin: 90,
            },
            {
              text: "Si sale nell'elegante Kolonaki per un caffè e una vetrina tra le gallerie e le boutique, oppure il Museo d'Arte Cicladica o il Benaki se resta appetito. Conviene sistemarsi vicino alla funicolare del Licabetto per la salita a venire.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "lycabettus-hill",
              text: "Si sale in funicolare la collina del Licabetto per il tramonto, il punto panoramico più alto della città, con l'Acropoli, la distesa urbana e il mare sotto. Conviene arrivare 30 minuti prima del tramonto per un posto alla ringhiera e portare uno strato caldo contro il vento.",
              durationMin: 90,
            },
            {
              text: "Si scende per una cena d'addio a Kolonaki o di ritorno a Koukaki, spendendo di più per l'ultimo pasto ateniese. Pesce alla griglia, un ventaglio di mezze e una caraffa di vino locale sono il commiato classico.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "athens",
      days: 4,
      summary:
        "Quattro giorni sono il punto ideale per Atene, trasformando una corsa turistica in una vera vacanza con un giorno per lasciare la città. Dal primo al terzo giorno si coprono gli essenziali senza fretta: l'Acropoli e il suo museo, l'Agora antica con i vicoli del centro storico e un tramonto sul rooftop, e il Museo Archeologico Nazionale abbinato a una salita al Licabetto. Il quarto giorno è la valvola di sfogo, una gita verso il mare, o il Tempio di Poseidone a Capo Sounion per un tramonto a picco sull'Egeo, o un traghetto veloce dal Pireo all'isola di Egina o Hydra per un bagno, un pranzo al porto e un ritmo più lento. Questa durata si addice a chi detesta la marcia forzata, alle coppie, e a chiunque voglia la classica giornata greca di isola e mare senza abbandonare Atene. Per quattro giorni consigliamo di basarsi a Monastiraki: è lo snodo dei trasporti per l'aeroporto, il porto e la gita, e i suoi rooftop e la vita di strada rendono il rientro ogni sera parte del divertimento. Conviene prenotare con largo anticipo il biglietto a orario per l'Acropoli e prendere un turno mattutino.",
      stayNeighborhoodSlug: "monastiraki",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "L'Acropoli e il suo museo",
          morning: [
            {
              poiSlug: "acropolis",
              text: "Si è all'Acropoli per il turno delle 8 prenotato, entrando dal più tranquillo ingresso sul versante sud, e si raggiunge il Partenone prima del caldo e della folla. Si gira attorno all'Eretteo e ai Propilei, poi si coglie la vista gratuita sulla città dalla rocca dell'Areopago in discesa.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Pranzo sulla passeggiata di Dionysiou Areopagitou sotto il versante sud, a camminata in piano dal museo, e ci si toglie dal sole di mezzogiorno. Conviene tenerlo leggero prima del pomeriggio al chiuso.",
              durationMin: 75,
            },
            {
              poiSlug: "acropolis-museum",
              text: "Si trascorre il caldo pomeriggio nel fresco Museo dell'Acropoli, cominciando dalla Galleria del Partenone all'ultimo piano che inquadra il vero tempio oltre la valle. Il pavimento di vetro sopra lo scavo antico all'ingresso ripaga di uno sguardo lento.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "acropolis-rooftop-bar",
              text: "Si prende un tavolo al tramonto prenotato su un rooftop di Monastiraki vicino alla base per un drink con l'Acropoli illuminata di fronte. Un giro per la vista, poi cena nei paraggi.",
              durationMin: 90,
            },
            {
              text: "Cena a Psyrri, a pochi minuti dalla base di Monastiraki, per mezze e la serata più vivace del centro. Conviene entrare piano piano nel quartiere che si chiama casa.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Agora antica, Agora romana e il centro storico",
          morning: [
            {
              poiSlug: "ancient-agora",
              text: "Si comincia all'Agora antica con il biglietto combinato, prima che la folla dell'Acropoli si riversi giù, e si sale all'integro Tempio di Efesto. Ci si rinfresca nella Stoà di Attalo e nel suo museo di reperti quotidiani.",
              durationMin: 90,
            },
            {
              poiSlug: "roman-agora",
              text: "Si cammina fino all'Agora romana e alla sua ottagonale Torre dei Venti, l'antica stazione meteorologica in marmo scolpita con le divinità dei venti, con lo stesso biglietto. Venti minuti qui prima dei vicoli.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "plaka",
              text: "Si percorre Plaka con calma, salendo ai gradini imbiancati in stile isolano di Anafiotika sopra la via dei souvenir. Ci si ferma per un lungo pranzo in un tranquillo vicolo alto.",
              durationMin: 120,
            },
            {
              poiSlug: "temple-olympian-zeus",
              text: "Si cammina fino al Tempio di Zeus Olimpio e all'Arco di Adriano con il biglietto combinato, dove le colonne giganti superstiti brillano nella luce del pomeriggio. La folla è scarsa qui a qualsiasi ora.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "monastiraki-square",
              text: "Si torna a passeggiare per la piazza di Monastiraki di sera, curiosando tra le bancarelle e assorbendo il fermento. Si prende un souvlaki economico da un famoso banco alla griglia fuori dalla piazza se si vuole un boccone informale.",
              durationMin: 60,
            },
            {
              text: "Cena di ritorno a Psyrri o Plaka, prenotando in anticipo per qualsiasi posto con un nome. Il rebetiko dal vivo è facile da trovare a Psyrri in una sera animata.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Museo Archeologico Nazionale e Licabetto",
          morning: [
            {
              poiSlug: "national-archaeological-museum",
              text: "Si va presto al Museo Archeologico Nazionale, la più grande collezione di arte greca antica al mondo, a breve camminata o un salto in metro a nord. Conviene puntare prima alla maschera di Agamennone, al grande bronzo di Zeus o Poseidone e al Meccanismo di Anticitera, poi girare.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "panathenaic-stadium",
              text: "Si attraversa la città fino allo Stadio Panatenaico tutto in marmo, sede delle prime Olimpiadi moderne, e si corre un giro o si sale sul podio con il biglietto. Conviene abbinarlo all'ombreggiato Giardino Nazionale proprio accanto.",
              durationMin: 90,
            },
            {
              text: "Si sale a Kolonaki per un caffè e le boutique, oppure il Museo d'Arte Cicladica o il Benaki se resta l'appetito. Conviene posizionarsi vicino alla funicolare del Licabetto per la salita al tramonto.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "lycabettus-hill",
              text: "Si sale in funicolare la collina del Licabetto per il tramonto, il punto panoramico più alto della città, con l'Acropoli e il mare stesi sotto. Conviene arrivare 30 minuti prima per un posto alla ringhiera e portare uno strato caldo contro il vento.",
              durationMin: 90,
            },
            {
              text: "Cena a Kolonaki o di ritorno vicino a Monastiraki, ovunque portino le gambe. Conviene risparmiare un po' di energia, domani si lascia la città per il mare.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Giornata di mare: Capo Sounion o un salto sulle isole",
          morning: [
            {
              text: "Si porta la giornata fuori città verso il mare. O si prende l'autobus costiero o un tour giù fino al Tempio di Poseidone a Capo Sounion, una rovina a picco sull'Egeo circa 70 km a sud, calcolata per il famoso tramonto. Oppure si prende un traghetto veloce dal Pireo a Egina, un facile salto di 40 minuti, per frutteti di pistacchi, un fronte porto e un bagno.",
              durationMin: 240,
            },
          ],
          afternoon: [
            {
              text: "Se si è scelta un'isola, si trascorre il pomeriggio a Egina o si prosegue verso la più graziosa Hydra, dove le auto sono vietate e gli asini lavorano ancora i vicoli in pietra, con un lungo pranzo in taverna al porto e un bagno tra gli scogli. Se si è scelta Sounion, si spezza la strada costiera in una delle spiagge della Riviera ateniese per un bagno prima del tempio.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              text: "Per Sounion, si è al Tempio di Poseidone per il tramonto, quando le colonne di marmo colgono l'ultima luce sul mare, poi si torna in città. Per le isole, si prende un traghetto di prima sera di ritorno al Pireo e la metro su fino al centro.",
              durationMin: 120,
            },
            {
              text: "Cena d'addio di ritorno vicino a Monastiraki, a breve camminata dal letto senza un viaggio successivo da pianificare, che è il punto stesso di basarsi qui. Conviene andare sul classico con pesce alla griglia e mezze per l'ultima serata ateniese.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
  ],
};

export default athensIt;
