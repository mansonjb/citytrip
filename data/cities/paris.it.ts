import type { CityData } from "../types";

const parisIt: CityData = {
  city: {
    slug: "paris",
    name: "Parigi",
    country: "Francia",
    countrySlug: "france",
    lat: 48.8566,
    lng: 2.3522,
    tier: 1,
    idealDays: 4,
    durations: [2, 3, 4],
    airportCode: "CDG",
    airportToCenter:
      "Da Charles de Gaulle, il treno RER B raggiunge Gare du Nord e Chatelet in circa 30-35 min per 11,80 EUR, con partenze ogni 10-15 min. Il Roissybus per l'Opera costa circa 13 EUR ma arranca nel traffico, e il taxi ha una tariffa fissa di 56 EUR per la Rive Droite e 65 EUR per la Rive Gauche. Da Orly, si prende la navetta Orlyval fino ad Antony e poi il RER B, oppure il tram T7, o ancora l'Orlybus diretto a Denfert-Rochereau.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [],
    monthlyNotes: {
      1: "Freddo e grigio sui 7-8C, con giornate corte e umide e la folla più rada dell'anno, una volta esaurita la ressa di Capodanno. I saldi invernali (les soldes) iniziano ai primi di gennaio e le tariffe alberghiere toccano il minimo, quindi è un mese ottimo per una visita ai musei economica e senza code.",
      2: "Ancora freddo, sugli 8C, e spesso coperto, anche se non mancano giornate limpide e frizzanti e le file al Louvre e all'Orsay restano brevi. Le tariffe restano basse al di fuori della settimana di vacanze scolastiche, il che ne fa un mese conveniente per chi si copre bene.",
      3: "Le massime salgono verso i 12-13C e la città torna a rinverdire, con i dehors dei caffè che riaprono nei primi pomeriggi miti. La folla è ancora scarsa e i prezzi degli hotel ragionevoli prima dell'ondata primaverile, un momento discretamente ideale per una visita.",
      4: "Uno dei mesi migliori, sui 15-16C, con gli alberi in fiore e giornate lunghe e luminose, anche se gli acquazzoni d'aprile sono frequenti, quindi conviene mettere in valigia uno strato in più. Folla e prezzi crescono nel corso del mese, e la Pasqua può riempire il centro, perciò conviene prenotare musei e hotel in anticipo.",
      5: "Caldo e vivace, sui 19-20C, con la stagione dei dehors in pieno svolgimento, ma diverse festività (1 maggio, 8 maggio, Ascensione) chiudono molti negozi e musei, quindi conviene controllare le date. Il torneo di tennis del Roland Garros comincia a fine mese, e questo è il periodo con il clima migliore di Parigi, con folla in aumento.",
      6: "Lunghe serate dorate a 23C, la luce migliore dell'anno, e i dehors gremiti fino a tardi. La Fete de la Musique del 21 giugno riempie ogni strada di concerti gratuiti, e il Roland Garros si chiude a inizio giugno, quindi ci si aspetti una città affollata, festosa e al completo.",
      7: "Caldo a 25C e affollato di turisti estivi mentre i parigini iniziano a partire. Il 14 luglio, festa nazionale, porta una parata militare lungo gli Champs-Elysees e i fuochi d'artificio alla Torre Eiffel, e Paris Plages trasforma le rive della Senna in una spiaggia temporanea, con sabbia e sdraio per tutta l'estate.",
      8: "Ondate di caldo fino a 25-26C e il mese con meno residenti, dato che molti ristoranti e piccoli negozi chiudono per due o tre settimane mentre i titolari si prendono le tradizionali ferie d'agosto. Le grandi attrazioni restano aperte e prese d'assalto dai visitatori, Paris Plages prosegue, e la città appare stranamente silenziosa nei quartieri residenziali.",
      9: "Forse il mese più bello: giornate calde che si stemperano dai 21C, folla che si dirada dopo la prima settimana, e negozi e ristoranti che riaprono rinfrancati dalla pausa estiva. La Settimana della Moda e gli eventi di design animano la fine del mese, e il rapporto qualità-prezzo degli hotel migliora man mano che l'alta stagione si allenta.",
      10: "Mite e spesso luminoso sui 16C, con i colori d'autunno nei parchi e il ritorno dei primi veri periodi di pioggia. La Nuit Blanche di inizio ottobre tiene aperti musei e installazioni artistiche tutta la notte e gratis, e la folla da bassa stagione rende gestibili le file ai musei.",
      11: "Fresco, umido e grigio sugli 11C, con le giornate più corte che si avvicinano, ma la folla più bassa dell'autunno e buone offerte alberghiere. Le luci di Natale si accendono lungo gli Champs-Elysees e le vetrine dei grandi magazzini vengono allestite a fine novembre, risollevando l'umore di un mese buio.",
      12: "Freddo a 8C, spesso piovoso e buio, ma il centro brilla di luci di Natale, vetrine illuminate e mercatini. Le tariffe schizzano nel periodo tra Natale e Capodanno, quando gli Champs-Elysees e la zona di Notre-Dame attirano grandi folle festose, anche se l'inizio di dicembre resta tranquillo e abbordabile.",
    },
    climate: {
      1: { highC: 7, lowC: 3, rainyDays: 10 },
      2: { highC: 8, lowC: 3, rainyDays: 9 },
      3: { highC: 12, lowC: 5, rainyDays: 10 },
      4: { highC: 16, lowC: 7, rainyDays: 9 },
      5: { highC: 20, lowC: 11, rainyDays: 10 },
      6: { highC: 23, lowC: 14, rainyDays: 8 },
      7: { highC: 25, lowC: 16, rainyDays: 7 },
      8: { highC: 25, lowC: 16, rainyDays: 7 },
      9: { highC: 21, lowC: 13, rainyDays: 8 },
      10: { highC: 16, lowC: 10, rainyDays: 9 },
      11: { highC: 11, lowC: 6, rainyDays: 10 },
      12: { highC: 8, lowC: 4, rainyDays: 11 },
    },
    budgetLevel: "high",
    budgetPerDay: { budget: 80, mid: 170, high: 340 },
    tagline: "La città dei musei, la città dei dehors, la città da camminare fino a non sentirsi più i piedi.",
    heroIntro:
      "Parigi premia la pazienza: le attrazioni di punta richiedono biglietti prenotati in anticipo, i musei esigono una giornata a sé, e il meglio sta semplicemente nel camminare i lungosenna e i quartieri che li separano. Quattro giorni permettono di dividere la Torre Eiffel e gli Champs, una giornata tra Louvre e isole, Montmartre e il Marais, e una gita a Versailles senza marce forzate. Conviene venire in primavera o all'inizio dell'autunno, prenotare la Torre e il Louvre prima del volo, e affidarsi alla metro per coprire le distanze che i piedi non arrivano a colmare.",
    accent: { from: "#2B3A6B", to: "#D9B96A", ink: "#18213F" },
    neighborhoodSlugs: [
      "le-marais",
      "saint-germain",
      "montmartre",
      "latin-quarter",
      "canal-saint-martin",
    ],
    nearbyCitySlugs: ["amsterdam"],
  },

  neighborhoods: [
    {
      slug: "le-marais",
      citySlug: "paris",
      name: "Il Marais",
      lat: 48.8575,
      lng: 2.3622,
      bestFor: ["first-time", "nightlife", "romantic"],
      vibe: "Un fitto reticolo di vicoli medievali e grandi palazzi che copre il 3° e il 4° arrondissement, oggi il quartiere più alla moda del centro per shopping, gallerie e vita serale. È a piedi da Notre-Dame, dal Louvre e dalle isole, con l'elegante Place des Vosges nel cuore e una vivace scena LGBTQ e di bar la sera. Centrale, di stile e raramente noioso.",
      pros: [
        "A piedi verso Notre-Dame, le isole, il Louvre e il Pompidou",
        "Il miglior shopping nelle boutique e il migliore giro di gallerie del centro",
        "Bar eccellenti, falafel ed energia notturna senza dover prendere la metro",
      ],
      cons: [
        "Tra le zone più care per hotel e cena",
        "I vicoli stretti si affollano e diventano rumorosi nelle sere del weekend",
        "La domenica la folla si gonfia, dato che qui molti negozi restano aperti",
      ],
    },
    {
      slug: "saint-germain",
      citySlug: "paris",
      name: "Saint-Germain-des-Pres",
      lat: 48.8539,
      lng: 2.3336,
      bestFor: ["first-time", "romantic", "family"],
      vibe: "Il classico quartiere letterario della Rive Gauche, con gli storici Cafe de Flore e Les Deux Magots, gallerie raffinate e i Giardini del Lussemburgo ai suoi margini. È elegante, sicuro e centrale, a breve distanza a piedi dal Museo d'Orsay, dalla Senna e dal Quartiere Latino. È la Parigi da cartolina, con un ritmo adulto e senza fretta.",
      pros: [
        "A piedi verso l'Orsay, il Louvre oltre il fiume e i Giardini del Lussemburgo",
        "Elegante, tranquillo e rassicurantemente centrale per una prima visita",
        "Due linee della metro e l'accesso al RER verso entrambi gli aeroporti e Versailles nelle vicinanze",
      ],
      cons: [
        "Caro sia per gli hotel sia per i celebri caffè",
        "Vita notturna più tranquilla rispetto al Marais o al canale",
        "Può risultare turistico e patinato più che locale",
      ],
    },
    {
      slug: "montmartre",
      citySlug: "paris",
      name: "Montmartre",
      lat: 48.8867,
      lng: 2.3431,
      bestFor: ["romantic", "budget", "local"],
      vibe: "Il villaggio in cima alla collina del 18° arrondissement, coronato dalle cupole bianche del Sacre-Coeur e attraversato da ripidi vicoli acciottolati e scalinate. Lontano dalla ressa turistica attorno alla basilica e a Place du Tertre, conserva un'atmosfera davvero da paese e bohémien, con enoteche e piccole piazze. Affascinante e più economico dove dormire, ma lontano dalle attrazioni principali.",
      pros: [
        "Il miglior panorama gratuito sulla città dai gradini del Sacre-Coeur",
        "Hotel più abbordabili rispetto alla Rive Droite centrale",
        "Vicoli suggestivi e bar locali una volta superata la folla dei tour in salita",
      ],
      cons: [
        "Una corsa di metro dal Louvre, dalla Torre Eiffel e dalle isole",
        "Salite ripide e scalinate ovunque, faticose con bagagli o passeggini",
        "Place du Tertre e i gradini della basilica attirano borseggiatori e venditori insistenti",
      ],
    },
    {
      slug: "latin-quarter",
      citySlug: "paris",
      name: "Quartiere Latino",
      lat: 48.8489,
      lng: 2.3469,
      bestFor: ["budget", "first-time", "family"],
      vibe: "Il quartiere studentesco attorno alla Sorbona nel 5° arrondissement, un labirinto di strade strette, librerie e cibo economico tra il Pantheon e la Senna. È centrale e vivace, a piedi da Notre-Dame, dalle isole e dai Giardini del Lussemburgo, con alcuni dei letti dal miglior rapporto qualità-prezzo della Rive Gauche. Frizzante di giorno, un po' ruvido ai margini delle trappole per turisti la sera.",
      pros: [
        "A piedi verso Notre-Dame, la Sainte-Chapelle e le isole oltre il fiume",
        "Hotel dal miglior rapporto qualità-prezzo e cene economiche rispetto alla vicina Saint-Germain",
        "Collegamenti centrali di RER e metro, comodi per Versailles ed entrambi gli aeroporti",
      ],
      cons: [
        "Le principali strade turistiche (Rue de la Huchette) sono trappole di cibo scadente",
        "Affollato e rumoroso attorno alla Sorbona e al lungofiume",
        "Le camere nei vecchi edifici possono essere piccole e scricchiolanti",
      ],
    },
    {
      slug: "canal-saint-martin",
      citySlug: "paris",
      name: "Canale Saint-Martin",
      lat: 48.8709,
      lng: 2.3665,
      bestFor: ["local", "nightlife", "budget"],
      vibe: "Un tratto giovane e artistico del 10° e 11° arrondissement lungo un canale alberato, dove la gente del posto fa picnic sulle rive e bar indipendenti, torrefazioni e negozi vintage riempiono le vie laterali. Baratta le attrazioni di punta con la vera vita di quartiere e alcuni tra i migliori locali informali e la migliore vita notturna della città. Non centrale per i monumenti, ma il luogo più parigino in cui trascorrere davvero il tempo.",
      pros: [
        "Vita notturna genuinamente locale, bar di vini naturali e picnic lungo il canale",
        "Mangiare e bere più economici rispetto al centro turistico",
        "Ben collegato in metro al Marais e alle attrazioni della Rive Droite",
      ],
      cons: [
        "Una corsa di metro dalla Torre Eiffel, dal Louvre e dalle isole",
        "Poche attrazioni classiche a distanza pedonale",
        "Alcuni isolati vicino al canale danno una sensazione poco raccomandabile a tarda notte",
      ],
    },
  ],

  pois: [
    {
      slug: "eiffel-tower",
      citySlug: "paris",
      name: "Torre Eiffel",
      lat: 48.8584,
      lng: 2.2945,
      kind: "sight",
      needsBooking: true,
      tip: "Conviene prenotare online con settimane di anticipo un biglietto a orario per l'ascensore fino alla cima: il sito ufficiale rilascia le fasce circa 60 giorni prima e si esauriscono in fretta; salire a piedi fino al secondo piano costa meno e raramente comporta code. Meglio la prima fascia del mattino o dopo il tramonto, quando la torre scintilla per cinque minuti allo scoccare di ogni ora. Tenere le borse ben chiuse: la base e il Trocadero oltre il fiume sono terreno privilegiato dei borseggiatori.",
    },
    {
      slug: "louvre",
      citySlug: "paris",
      name: "Museo del Louvre",
      lat: 48.8606,
      lng: 2.3376,
      kind: "museum",
      needsBooking: true,
      tip: "Conviene prenotare online un ingresso a orario, obbligatorio anche con il Paris Museum Pass, e scegliere la prima fascia delle 9 per raggiungere la Gioconda prima che si formi il muro di telefoni. Il Louvre è chiuso il martedì e apre fino a tardi (fino alle 21 circa) il mercoledì e il venerdì, quando la sera è molto più tranquilla. Meglio entrare dal Carrousel du Louvre o dalla Porte des Lions per saltare la coda della piramide.",
    },
    {
      slug: "notre-dame",
      citySlug: "paris",
      name: "Cattedrale di Notre-Dame",
      lat: 48.853,
      lng: 2.3499,
      kind: "sight",
      needsBooking: false,
      tip: "Riaperta a dicembre 2024 dopo l'incendio, con un interno restaurato che lascia senza fiato. L'ingresso è gratuito ma una coda di un'ora all'arrivo è frequente, quindi conviene prenotare una fascia oraria gratuita sull'app o sul sito ufficiale fino a due giorni prima per entrare senza attese. Meglio andare presto o la sera per la visita più tranquilla, e prenotare a parte la salita alle torri per la vista dal tetto all'altezza dei gargoyle.",
    },
    {
      slug: "musee-orsay",
      citySlug: "paris",
      name: "Museo d'Orsay",
      lat: 48.86,
      lng: 2.3266,
      kind: "museum",
      needsBooking: true,
      tip: "Conviene prenotare online una fascia oraria per la grande collezione impressionista, ospitata in un'ex stazione ferroviaria. È chiuso il lunedì e apre fino a tardi, verso le 21:45, il giovedì, il momento più tranquillo e suggestivo per la visita. Meglio salire subito al quinto piano nelle sale di Monet, Renoir e Van Gogh, poi scendere man mano, senza perdere la vista attraverso il gigantesco quadrante dell'orologio della stazione.",
    },
    {
      slug: "montmartre-sacre-coeur",
      citySlug: "paris",
      name: "Montmartre e il Sacre-Coeur",
      lat: 48.8867,
      lng: 2.3431,
      kind: "viewpoint",
      needsBooking: false,
      tip: "La basilica è gratuita e i gradini in cima alla collina offrono il miglior panorama gratuito di Parigi, al meglio al tramonto o di primo mattino, prima che arrivino i gruppi in tour e i venditori insistenti di braccialetti dell'amicizia. Meglio evitare la ressa di Place du Tertre e girovagare per i vicoli tranquilli sul retro, attorno a Rue de l'Abreuvoir e alla vigna. Si può prendere la funicolare (un biglietto della metro) se la scalinata pare scoraggiante, e conviene fare attenzione alle tasche sui gradini affollati.",
    },
    {
      slug: "arc-de-triomphe",
      citySlug: "paris",
      name: "Arco di Trionfo e Champs-Elysees",
      lat: 48.8738,
      lng: 2.295,
      kind: "viewpoint",
      needsBooking: true,
      tip: "La terrazza sul tetto offre una vista superba dritta lungo gli Champs-Elysees e la stella delle dodici avenue, e serve un biglietto a orario online per salire i 284 gradini. Vi si arriva dal sottopassaggio pedonale all'angolo degli Champs-Elysees, mai attraversando la rotatoria del traffico. Meglio andarci nel tardo pomeriggio per la luce dorata lungo l'avenue, e percorrere gli Champs in discesa verso la Concorde anziché in salita.",
    },
    {
      slug: "sainte-chapelle",
      citySlug: "paris",
      name: "Sainte-Chapelle",
      lat: 48.8554,
      lng: 2.345,
      kind: "sight",
      needsBooking: true,
      tip: "Questa cappella reale del XIII secolo custodisce quindici alte pareti di vetrate, al meglio in una mattina limpida quando la luce le attraversa. Conviene prenotare online un biglietto a orario e acquistare quello combinato con la vicina Conciergerie per vedere entrambe in un'unica visita. Si trova dentro un tribunale in funzione, quindi al varco c'è un controllo di sicurezza in stile aeroportuale; meglio arrivare all'apertura delle 9 per battere sia la coda sia i gruppi in pullman.",
    },
    {
      slug: "versailles",
      citySlug: "paris",
      name: "Reggia di Versailles",
      lat: 48.8049,
      lng: 2.1204,
      kind: "sight",
      needsBooking: true,
      tip: "Conviene riservare da mezza a un'intera giornata: prendere il RER C fino a Versailles Chateau Rive Gauche (circa 45 min, sola andata all'incirca 3,65 EUR) ed evitare il martedì, quando molti musei di Parigi chiudono e Versailles è presa d'assalto. Meglio prenotare online il biglietto Passport con una fascia oraria per la reggia e arrivare all'apertura delle 9; la Galleria degli Specchi è più tranquilla di prima mattina. Gli immensi giardini sono gratuiti tranne nei giorni degli spettacoli delle fontane musicali, quindi conviene lasciare tempo per camminare o noleggiare una bici o un golf cart.",
    },
    {
      slug: "le-marais",
      citySlug: "paris",
      name: "Il Marais",
      lat: 48.8575,
      lng: 2.3622,
      kind: "experience",
      needsBooking: false,
      tip: "Vale la pena girovagare tra i vicoli per boutique, gallerie e la porticata Place des Vosges, la più antica piazza pianificata di Parigi e gratuita da percorrere. Meglio venirci di domenica, quando gran parte del quartiere resta aperta a differenza del resto della città, e mettersi in coda per un falafel su Rue des Rosiers a pranzo. Lungo il percorso conviene infilarsi nei cortili gratuiti dell'Hotel de Sully e del Museo Carnavalet (collezione permanente gratuita sulla storia della città).",
    },
    {
      slug: "latin-quarter",
      citySlug: "paris",
      name: "Quartiere Latino",
      lat: 48.8489,
      lng: 2.3469,
      kind: "experience",
      needsBooking: false,
      tip: "Vale la pena esplorare le strade attorno al Pantheon e alla Sorbona per le librerie, il negozio Shakespeare and Company lungo il fiume e la fatiscente arena romana delle Arenes de Lutece nascosta appena fuori da Rue Monge (gratuita). Meglio evitare la turistica Rue de la Huchette per cena e mangiare una via più indietro. Il mercato mattutino di Rue Mouffetard è il momento clou locale, al meglio prima di mezzogiorno.",
    },
    {
      slug: "seine-cruise",
      citySlug: "paris",
      name: "Crociera sulla Senna",
      lat: 48.8606,
      lng: 2.2977,
      kind: "experience",
      needsBooking: false,
      tip: "Un'ora di navigazione lenta davanti a Notre-Dame, al Louvre e alla Torre Eiffel è il modo più semplice per collegare i monumenti e far riposare i piedi, ed è magica dopo il buio quando tutto è illuminato. Meglio evitare le costose crociere con cena e prendere una partenza standard dei Bateaux-Mouches o delle Vedettes du Pont-Neuf per circa 15 EUR. Conviene imbarcarsi all'imbrunire per il passaggio dal tramonto alle luci e sedersi sul ponte superiore all'aperto.",
    },
    {
      slug: "luxembourg-gardens",
      citySlug: "paris",
      name: "Giardini del Lussemburgo",
      lat: 48.8462,
      lng: 2.3372,
      kind: "park",
      needsBooking: false,
      tip: "Il parco più elegante della Rive Gauche è gratuito e fatto per un picnic o una sosta tra un museo e l'altro, con le sedie verdi in metallo da trascinare fino alla vasca centrale dove i bambini fanno navigare le barchette. È la pausa perfetta tra Saint-Germain, l'Orsay e il Quartiere Latino, tutti a breve distanza a piedi. Meglio venirci a metà mattina in una giornata di sole e accaparrarsi presto una sedia, si riempiono in fretta all'ora di pranzo.",
    },
    {
      slug: "musee-rodin",
      citySlug: "paris",
      name: "Museo Rodin",
      lat: 48.8553,
      lng: 2.3158,
      kind: "museum",
      needsBooking: false,
      tip: "La dimora e il roseto dello scultore custodiscono Il Pensatore e La Porta dell'Inferno in una delle cornici museali più belle della città, vicino agli Invalides. Il biglietto per il solo giardino è un modo economico per vedere i grandi bronzi all'aperto se si è a corto di tempo o di budget. È chiuso il lunedì; meglio venirci in un bel pomeriggio e abbinarlo ai vicini Invalides e alla tomba di Napoleone.",
    },
    {
      slug: "pere-lachaise",
      citySlug: "paris",
      name: "Cimitero del Pere-Lachaise",
      lat: 48.8619,
      lng: 2.3934,
      kind: "sight",
      needsBooking: false,
      tip: "Il cimitero più famoso della città è un labirinto gratuito e collinare di viali acciottolati e tombe monumentali, luogo di riposo di Jim Morrison, Oscar Wilde, Chopin ed Edith Piaf. Conviene prendere una mappa gratuita all'ingresso o scaricarne una, perché le tombe sono davvero difficili da trovare tra 70.000 sepolture. Meglio entrare alla Porte des Amandiers o alla metro Pere Lachaise, indossare scarpe adatte per il selciato e mettere in conto almeno 90 minuti.",
    },
  ],

  itineraries: [
    {
      citySlug: "paris",
      days: 2,
      summary:
        "Due giorni a Parigi sono uno sprint tra i momenti clou, e la corsa si sente, perché la città ne chiederebbe davvero tre o quattro. In 48 ore si possono fare la Torre Eiffel, gli Champs-Elysees con l'Arco di Trionfo e una crociera sulla Senna il primo giorno, poi il Louvre, le isole, Notre-Dame, la Sainte-Chapelle e il Quartiere Latino il secondo. Cosa bisogna tagliare: Montmartre, Versailles, l'Orsay e ogni lento indugio in un parco o su un dehors. Va bene per un weekend o un primo assaggio prima di abbinare Parigi ad Amsterdam. Gli irrinunciabili sono la prenotazione anticipata della fascia per la cima della Torre Eiffel e di un ingresso a orario al Louvre prima del volo, più una prenotazione gratuita per Notre-Dame, altrimenti si perdono in code ore che non ci si può permettere. Conviene alloggiare nel Marais, così entrambe le giornate iniziano centrali e a piedi, con cena e bar a due passi dal letto. Se spunta un terzo giorno, si aggiungano Montmartre e l'Orsay e si rallenti decisamente il ritmo.",
      stayNeighborhoodSlug: "le-marais",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Torre Eiffel, Champs-Elysees e la Senna",
          morning: [
            {
              poiSlug: "eiffel-tower",
              text: "Si comincia dalla Torre Eiffel con la fascia per la cima prenotata al mattino, prima che le code e la folla si accumulino alla base. Poi si attraversa fino alla terrazza del Trocadero per la classica foto frontale dell'intera torre, tenendo la borsa chiusa in questo punto caldo dei borseggi.",
              durationMin: 120,
            },
            {
              poiSlug: "musee-rodin",
              text: "Si prosegue a piedi verso est fino al Museo Rodin, vicino agli Invalides, dove il roseto custodisce Il Pensatore e La Porta dell'Inferno in una delle cornici più belle della città. Il biglietto per il solo giardino è un modo rapido ed economico per vedere i grandi bronzi se il tempo stringe.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "arc-de-triomphe",
              text: "Si prende la metro fino all'Arco di Trionfo e si salgono i 284 gradini fino alla terrazza per la vista lungo la stella delle dodici avenue, raggiungendolo dal sottopassaggio, mai attraversando il traffico. Poi si percorrono gli Champs-Elysees in discesa verso la Concorde e le Tuileries.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "seine-cruise",
              text: "All'imbrunire ci si imbarca su una crociera sulla Senna vicino alla Torre Eiffel o al Pont Neuf per la navigazione dal tramonto alle luci davanti a Notre-Dame e al Louvre. Meglio sedersi sul ponte superiore all'aperto e scegliere una partenza standard di un'ora anziché una costosa barca con cena.",
              durationMin: 75,
            },
            {
              text: "Si torna nel Marais per cena nei vicoli attorno a Place des Vosges, prenotando un tavolo in qualunque posto che abbia un nome. Si chiude con un drink in uno dei bar aperti fino a tardi del quartiere, a breve distanza a piedi dall'hotel.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Louvre, le isole e il Quartiere Latino",
          morning: [
            {
              poiSlug: "louvre",
              text: "Si arriva al Louvre per la fascia delle 9 prenotata e si va dritti alla Gioconda prima che si formi il muro di telefoni, poi si gira tra i dipinti italiani, la Venere di Milo e i gioielli della corona francese. Meglio entrare dal Carrousel o dalla Porte des Lions per saltare la fila della piramide.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "sainte-chapelle",
              text: "Si attraversa fino all'Ile de la Cite per la fascia oraria alla Sainte-Chapelle, tenendo le quindici pareti di vetrate per la luce nitida del pomeriggio. Conviene usare il biglietto combinato per vedere la vicina Conciergerie e mettere in conto un controllo di sicurezza al varco del tribunale.",
              durationMin: 90,
            },
            {
              poiSlug: "notre-dame",
              text: "Si va a piedi a Notre-Dame, riaperta a dicembre 2024 con l'interno restaurato, usando la fascia oraria gratuita prenotata per saltare la lunga coda all'arrivo. Poi si gira attorno all'esterno e agli archi rampanti dal giardino lungo il fiume sul retro.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "latin-quarter",
              text: "Si attraversa il fiume nel Quartiere Latino, girovagando tra le librerie e Shakespeare and Company prima di cena. Meglio mangiare una via più indietro rispetto alla turistica Rue de la Huchette e chiudere con un drink attorno al Pantheon.",
              durationMin: 150,
            },
          ],
        },
      ],
    },
    {
      citySlug: "paris",
      days: 3,
      summary:
        "Tre giorni sono una durata comoda per una prima visita e vicina al punto ideale per Parigi. Danno la Torre Eiffel, gli Champs-Elysees, l'Arco di Trionfo e una crociera sulla Senna il primo giorno, il Louvre con le isole, Notre-Dame e la Sainte-Chapelle il secondo, e un terzo giorno tra Montmartre, l'Orsay e il Marais che bilancia un villaggio in cima alla collina con la grande collezione impressionista. Si mangia in tre quartieri diversi, ci si concede sia una pausa in un parco sia i musei che contano, e ci si muove comunque a un ritmo che consente di sedersi su un dehors anziché passarci accanto di corsa. Ciò che resta ancora tagliato è la gita a Versailles, che è esattamente quanto aggiunge un quarto giorno. Va bene per chi visita per la prima volta, per le coppie e per chi prosegue poi verso Amsterdam. Conviene alloggiare a Saint-Germain: è a piedi dall'Orsay, dal Louvre oltre il fiume e dai Giardini del Lussemburgo, e i suoi caffè fanno da base elegante per le serate. Meglio prenotare in anticipo la cima della Torre Eiffel, le fasce per il Louvre e l'Orsay e una prenotazione gratuita per Notre-Dame prima del volo.",
      stayNeighborhoodSlug: "saint-germain",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Torre Eiffel, Champs-Elysees e la Senna",
          morning: [
            {
              poiSlug: "eiffel-tower",
              text: "Si comincia dalla Torre Eiffel con la fascia per la cima prenotata prima della folla, poi si attraversa fino al Trocadero per la vista frontale completa. Tenere la borsa chiusa: la base e la terrazza sono terreno privilegiato dei borseggiatori.",
              durationMin: 120,
            },
            {
              poiSlug: "musee-rodin",
              text: "Si va a piedi al Museo Rodin, vicino agli Invalides, per Il Pensatore e La Porta dell'Inferno tra le rose. Conviene abbinarlo a un'occhiata alla cupola dorata degli Invalides sopra la tomba di Napoleone, lì accanto.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "arc-de-triomphe",
              text: "In metro fino all'Arco di Trionfo e su fino alla terrazza per la vista lungo la stella delle avenue, raggiungendolo dal sottopassaggio. Si percorrono gli Champs-Elysees in discesa verso la Concorde e dentro i giardini delle Tuileries.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "seine-cruise",
              text: "All'imbrunire si prende una crociera sulla Senna per la navigazione illuminata davanti ai monumenti, imbarcandosi vicino al Pont Neuf o alla Torre Eiffel. Meglio scegliere una barca standard di un'ora e sedersi in alto per il tramonto.",
              durationMin: 75,
            },
            {
              text: "Si torna a Saint-Germain per cena tra gallerie e caffè, prenotando in anticipo. Un ultimo bicchiere in un angolo classico come il Cafe de Flore o in un bar più tranquillo della Rive Gauche chiude la serata.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Louvre, le isole e la Sainte-Chapelle",
          morning: [
            {
              poiSlug: "louvre",
              text: "Si arriva al Louvre per la fascia delle 9, andando dritti alla Gioconda prima della ressa, poi la Venere di Milo e le gallerie italiane. Meglio entrare dal Carrousel per saltare la coda della piramide e fissare un'ora d'uscita precisa, altrimenti il museo si inghiotte l'intera giornata.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "sainte-chapelle",
              text: "Si attraversa fino all'Ile de la Cite per la fascia alla Sainte-Chapelle, scelta per la luce nitida del pomeriggio attraverso le quindici pareti di vetrate. Conviene usare il biglietto combinato per la Conciergerie accanto, un tempo prigione della Rivoluzione.",
              durationMin: 90,
            },
            {
              poiSlug: "notre-dame",
              text: "Si va a piedi a Notre-Dame con la fascia gratuita prenotata per vedere l'interno restaurato dopo la riapertura del 2024 senza la lunga coda. Si osservano l'esterno e gli archi rampanti dal giardino sul retro, poi si passeggia fino alla più tranquilla Ile Saint-Louis per un gelato.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "latin-quarter",
              text: "Ci si lascia scivolare nel Quartiere Latino per la sera, sfogliando i libri da Shakespeare and Company e nelle vie delle librerie attorno alla Sorbona. Meglio mangiare bene una via defilata rispetto al tratto turistico e chiudere con un drink vicino al Pantheon.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Montmartre, l'Orsay e il Marais",
          morning: [
            {
              poiSlug: "montmartre-sacre-coeur",
              text: "Presto in metro fino a Montmartre e su fino ai gradini del Sacre-Coeur per il panorama gratuito prima che arrivino i gruppi in tour e i venditori insistenti. Si girovaga per i vicoli tranquilli dietro la basilica, attorno alla vigna e a Rue de l'Abreuvoir, evitando la ressa di Place du Tertre.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "musee-orsay",
              text: "Si prende la metro fino al Museo d'Orsay per la fascia oraria, andando dritti al quinto piano nelle sale di Monet, Renoir e Van Gogh prima di scendere man mano. Da non perdere la vista sulla città attraverso il gigantesco quadrante dell'orologio della stazione.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "le-marais",
              text: "Si attraversa il fiume verso il Marais per la sera, girovagando tra le boutique e la porticata Place des Vosges mentre i bar si riempiono. Ci si mette in coda per un falafel su Rue des Rosiers o si prenota un bistrot, poi ci si immerge nella scena notturna del quartiere.",
              durationMin: 180,
            },
          ],
        },
      ],
    },
    {
      citySlug: "paris",
      days: 4,
      summary:
        "Quattro giorni sono il punto ideale per una prima visita a Parigi, e trasformano uno sprint tra le attrazioni in una vera vacanza. Dal primo al terzo giorno si coprono gli imprescindibili senza fretta: la Torre Eiffel, gli Champs-Elysees e una crociera sulla Senna; il Louvre, le isole, Notre-Dame e la Sainte-Chapelle; poi Montmartre, il Museo d'Orsay e il Marais. Il quarto giorno è la valvola di sfogo, una gita a Versailles alla reggia e ai suoi immensi giardini, raggiunta in 45 minuti con il RER C e da iniziare al meglio all'apertura delle 9 in qualsiasi giorno tranne il martedì. Questa durata va bene per chi detesta le marce forzate, per le coppie e per chi ha voli che incorniciano il viaggio in modo scomodo. Per quattro giorni si consiglia di alloggiare nel Quartiere Latino: è centrale e a piedi dalle isole e dall'Orsay, offre letti dal miglior rapporto qualità-prezzo rispetto alla vicina Saint-Germain, e si trova sulla linea RER C diretta a Versailles. Oltre i quattro giorni, si aggiunga una mattina tra Museo Rodin e Invalides oppure si prosegua verso Amsterdam in treno veloce in circa tre ore e mezza. Conviene prenotare con largo anticipo la Torre Eiffel, il Louvre, l'Orsay e il Passport di Versailles.",
      stayNeighborhoodSlug: "latin-quarter",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Torre Eiffel, Champs-Elysees e la Senna",
          morning: [
            {
              poiSlug: "eiffel-tower",
              text: "Si comincia dalla Torre Eiffel con la fascia per la cima prenotata prima delle code, poi si attraversa fino al Trocadero per la foto frontale. Tenere le borse chiuse in questo punto caldo dei borseggi.",
              durationMin: 120,
            },
            {
              poiSlug: "musee-rodin",
              text: "Si va a piedi al Museo Rodin per Il Pensatore tra le rose, con un'occhiata alla cupola degli Invalides lì vicino. Il biglietto per il giardino è un'opzione rapida se si vuole continuare a muoversi.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "arc-de-triomphe",
              text: "In metro fino all'Arco di Trionfo e su fino alla terrazza per la vista lungo le avenue, raggiunta dal sottopassaggio. Si percorrono gli Champs-Elysees in discesa fino alla Concorde e attraverso le Tuileries.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "seine-cruise",
              text: "All'imbrunire si prende una crociera sulla Senna per i monumenti illuminati, imbarcandosi vicino al Pont Neuf o alla Torre Eiffel e sedendosi sul ponte all'aperto. Meglio restare su una barca standard di un'ora anziché una crociera con cena.",
              durationMin: 75,
            },
            {
              text: "Cena di ritorno nel Quartiere Latino, prendendo confidenza con il quartiere che si è scelto come base. Meglio mangiare una via defilata rispetto al tratto turistico e chiudere con un drink attorno al Pantheon.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Louvre, le isole e la Sainte-Chapelle",
          morning: [
            {
              poiSlug: "louvre",
              text: "Si arriva al Louvre per la fascia delle 9 e si raggiunge la Gioconda prima della ressa, poi la Venere di Milo e le sale italiane. Meglio entrare dal Carrousel e fissare un'ora d'uscita, così il museo non si mangia l'intera giornata.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "sainte-chapelle",
              text: "Si attraversa fino all'Ile de la Cite per la fascia alla Sainte-Chapelle nel pomeriggio luminoso, quando le vetrate risplendono. Conviene usare il biglietto combinato per la Conciergerie accanto.",
              durationMin: 90,
            },
            {
              poiSlug: "notre-dame",
              text: "Si va a piedi a Notre-Dame con la fascia gratuita prenotata per vedere l'interno restaurato senza coda, poi si ammirano gli archi rampanti dal giardino sul retro. Si passeggia fino all'Ile Saint-Louis per un gelato da Berthillon.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Si passeggia lungo i lungosenna della Rive Gauche mentre la luce cala e i bouquinistes chiudono le bancarelle, poi si cena nel Quartiere Latino vicino alla base. Meglio prenotare in un posto ben recensito ed evitare le trappole dei menu fissi al neon lungo il fiume.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Montmartre, l'Orsay e il Marais",
          morning: [
            {
              poiSlug: "montmartre-sacre-coeur",
              text: "Presto su fino a Montmartre per il panorama gratuito del Sacre-Coeur prima dei venditori insistenti e dei gruppi, poi si girovaga per i vicoli tranquilli sul retro, attorno alla vigna. Si può prendere la funicolare con un biglietto della metro se la scala pare ripida, e conviene fare attenzione alle tasche sui gradini affollati.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "musee-orsay",
              text: "In metro fino al Museo d'Orsay per la fascia oraria, andando dritti agli impressionisti del quinto piano prima di scendere man mano. Da non perdere la vista attraverso il gigantesco orologio della stazione.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "le-marais",
              text: "Si attraversa verso il Marais per la sera, curiosando tra le boutique e la porticata Place des Vosges mentre i bar si riempiono. Falafel su Rue des Rosiers o un bistrot prenotato, poi un drink nella scena notturna del quartiere.",
              durationMin: 180,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Gita a Versailles",
          morning: [
            {
              poiSlug: "versailles",
              text: "Si prende il RER C fino a Versailles Chateau Rive Gauche, circa 45 minuti, puntando ad arrivare per l'apertura della reggia alle 9 ed evitando il martedì. Si usa il biglietto Passport prenotato con la fascia oraria per la reggia e si comincia dalla Galleria degli Specchi finché è più tranquilla, poi i Grandi Appartamenti.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "versailles",
              text: "Si trascorre il pomeriggio negli immensi giardini, gratuiti tranne nei giorni delle fontane musicali, camminando o noleggiando una bici o un golf cart fino al Grand Canal, ai palazzi del Trianon e al rustico borgo di Maria Antonietta. Meglio portarsi un picnic o mangiare vicino alla tenuta, dato che i caffè della reggia sono cari e affollati.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              text: "Si torna con il RER C nel centro di Parigi nel primo serale, stanchi ma ormai a posto con le grandi attrazioni. Meglio prenotare una cena d'addio nel Quartiere Latino o a Saint-Germain, concedendosi qualcosa in più per l'ultimo pasto parigino.",
              durationMin: 150,
            },
            {
              text: "Si chiude con una lenta passeggiata lungo la Senna per vedere Notre-Dame e i ponti illuminati, a breve distanza dalla base. Nessun viaggio di rientro da organizzare, che è il senso di stare in centro per quattro giorni.",
              durationMin: 60,
            },
          ],
        },
      ],
    },
  ],
};

export default parisIt;
