import type { CityData } from "../types";

const krakowIt: CityData = {
  city: {
    slug: "krakow",
    name: "Cracovia",
    country: "Polonia",
    countrySlug: "poland",
    lat: 50.0647,
    lng: 19.945,
    tier: 3,
    idealDays: 2,
    durations: [2, 3],
    airportCode: "KRK",
    airportToCenter:
      "Il treno dall'aeroporto di Cracovia alla stazione principale di Krakow Glowny impiega circa 20 minuti e costa attorno ai 17 PLN, all'incirca 4 EUR, con corse ogni 30 minuti. Gli autobus urbani 208 e 252 coprono lo stesso tragitto più lentamente con un normale biglietto del trasporto pubblico, se l'orario del treno non risulta comodo.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 12],
    avoidMonths: [1],
    monthlyNotes: {
      1: "Il mese più freddo, con massime attorno a 1C, minime ben sotto lo zero e giornate corte e grigie; il mercatino di Natale sulla Piazza del Mercato (Rynek Glowny) di solito chiude nei primi giorni di gennaio. I luoghi da visitare sono tranquilli e le tariffe alberghiere toccano il minimo annuale, ma va messo in valigia il necessario per un vero inverno e va messa in conto la neve sotto i piedi.",
      2: "Ancora pieno inverno, con massime attorno a 3C e gelate frequenti, quindi è un periodo economico e senza folla per dedicarsi ai luoghi al coperto e al Wawel. Le giornate si allungano un poco e i bar mleczny e i locali in cantina custodiscono l'atmosfera quando fa troppo freddo per attardarsi all'aperto.",
      3: "Le massime salgono verso i 9C e la città si sgela; i mercatini di Pasqua compaiono sulla Piazza del Mercato nella seconda metà del mese quando la Pasqua cade presto. La folla resta scarsa e i prezzi si mantengono sotto il picco primaverile, una buona finestra per un viaggio conveniente.",
      4: "Primavera vera attorno ai 14C, con le fioriture nel parco Planty e i primi tavolini all'aperto dei caffè sulla piazza. I fine settimana attorno a Pasqua e il ponte del Primo Maggio si affollano, quindi conviene prenotare con largo anticipo le sale di rappresentanza del Wawel e qualsiasi prenotazione per Auschwitz-Birkenau.",
      5: "Uno dei mesi migliori, con massime vicine a 19C, lunghe serate luminose e i birrifici all'aperto che si riempiono a Kazimierz. È il culmine della mezza stagione, quindi i prezzi degli alloggi si consolidano e la piazza si anima; conviene prenotare presto le gite ad Auschwitz e Wieliczka.",
      6: "Caldo attorno ai 22C con le giornate più lunghe dell'anno e due eventi di riferimento: il festival del solstizio d'estate Wianki lungo la Vistola sotto il Wawel attorno al solstizio, e l'inizio del Festival della Cultura Ebraica a Kazimierz nell'ultima settimana. Conviene prenotare presto un alloggio a Kazimierz per le date del festival.",
      7: "Piena estate, con massime attorno a 24C, serate calde e i concerti del Festival della Cultura Ebraica che si diffondono per Kazimierz nei primi giorni del mese. È il periodo più affollato e caro; conviene fare il Wawel e la piazza presto e riservare i pomeriggi al Planty ombreggiato e ai bar lungo il fiume.",
      8: "Lo stesso caldo estivo vicino a 24C e il maggior numero di turisti dell'anno, con occasionali temporali pomeridiani. I birrifici all'aperto e i lungofiume della Vistola assorbono bene la folla, ma vanno messe in conto le code alla Miniera di sale e alla Fabbrica di Schindler per tutto il giorno, quindi conviene prenotare in anticipo.",
      9: "Massime attorno a 19C, folla in diradamento dopo la prima settimana e clima comodo per camminare, il che ne fa l'alternativa intelligente all'estate. I prezzi si allentano e la luce si fa dorata sopra la piazza; le gite giornaliere sono più facili da prenotare con poco preavviso.",
      10: "Autunno frizzante attorno ai 13C con colori intensi nel Planty e lungo il fiume; il numero di turisti cala nettamente dopo metà mese e le tariffe alberghiere seguono. Conviene portare uno strato caldo per le serate, che diventano fredde in fretta una volta calato il sole.",
      11: "Grigio, freddo e tranquillo attorno ai 7C fino all'apertura del mercatino di Natale sulla Piazza del Mercato nell'ultima settimana, che ribalta completamente l'atmosfera. La fine di novembre è un momento ideale: le bancarelle del mercatino e il vin brulé senza la ressa dei fine settimana di dicembre.",
      12: "Il mercatino di Natale sulla Piazza del Mercato prosegue per tutto il mese con formaggio oscypek alla griglia, vin brulé e una grande tradizione di presepi, e attira una folla intensa nei fine settimana. Vanno messe in conto minime sotto lo zero, possibile neve e prezzi alberghieri di dicembre superiori alla norma invernale, quindi conviene prenotare presto.",
    },
    climate: {
      1: { highC: 1, lowC: -4, rainyDays: 9 },
      2: { highC: 3, lowC: -3, rainyDays: 8 },
      3: { highC: 9, lowC: 0, rainyDays: 9 },
      4: { highC: 14, lowC: 4, rainyDays: 10 },
      5: { highC: 19, lowC: 9, rainyDays: 12 },
      6: { highC: 22, lowC: 12, rainyDays: 13 },
      7: { highC: 24, lowC: 14, rainyDays: 13 },
      8: { highC: 24, lowC: 13, rainyDays: 11 },
      9: { highC: 19, lowC: 9, rainyDays: 9 },
      10: { highC: 13, lowC: 5, rainyDays: 8 },
      11: { highC: 7, lowC: 1, rainyDays: 9 },
      12: { highC: 2, lowC: -3, rainyDays: 10 },
    },
    budgetLevel: "low",
    budgetPerDay: { budget: 45, mid: 95, high: 190 },
    tagline: "Nucleo medievale intatto, prezzi da bar mleczny, storia intensa a due passi.",
    heroIntro:
      "Cracovia ha conservato la più grande piazza medievale d'Europa, un castello reale su una collina e un intero quartiere ebraico sopravvissuto alla guerra, tutto dentro un anello percorribile a piedi che si attraversa in venti minuti. È una delle vacanze cittadine classiche più economiche del continente, e i bar mleczny danno ancora da mangiare per pochi euro. Due giorni bastano per la città vecchia, il Wawel e Kazimierz con comodità; un terzo giorno serve per le grandi gite da prenotare in anticipo ad Auschwitz-Birkenau o alla Miniera di sale di Wieliczka.",
    accent: { from: "#8E2D3C", to: "#D9A441", ink: "#4E1A24" },
    neighborhoodSlugs: [
      "stare-miasto",
      "kazimierz",
      "podgorze",
      "kleparz",
      "stradom",
    ],
    nearbyCitySlugs: ["prague"],
  },

  neighborhoods: [
    {
      slug: "stare-miasto",
      citySlug: "krakow",
      name: "Stare Miasto (Città Vecchia)",
      lat: 50.0616,
      lng: 19.937,
      bestFor: ["first-time", "romantic"],
      vibe: "Il nucleo medievale dentro il verde anello del Planty, costruito attorno alla Piazza del Mercato (Rynek Glowny), la più grande piazza mercato d'Europa. Di giorno è la parte più animata della città, tutta carrozze a cavalli, tavolini dei caffè e la tromba di Santa Maria che suona a ogni ora; a sera tarda i gitanti si diradano e i locali in cantina prendono il sopravvento. Tutto ciò che vuole chi viene per la prima volta si trova entro dieci minuti a piedi.",
      pros: [
        "La Piazza del Mercato, il Mercato dei Tessuti e il Wawel tutti a breve distanza a piedi",
        "La più ampia scelta di hotel e appartamenti di Cracovia",
        "Nessun trasporto necessario per un viaggio di due giorni",
      ],
      cons: [
        "I ristoranti proprio sulla piazza sono trappole per turisti troppo care",
        "Gruppi di addii al celibato e rumore in strada nelle sere del fine settimana",
        "Si paga un sovrapprezzo di posizione rispetto a Kazimierz o Kleparz",
      ],
    },
    {
      slug: "kazimierz",
      citySlug: "krakow",
      name: "Kazimierz",
      lat: 50.0515,
      lng: 19.944,
      bestFor: ["local", "nightlife", "romantic", "budget"],
      vibe: "L'antico quartiere ebraico a sud del centro, oggi il distretto più suggestivo della città, con sinagoghe superstiti, bar nei cortili e il miglior street food di Cracovia. Va dalle stradine silenziose e cariche di memoria attorno alle sinagoghe alla scena affollata di bar in Plac Nowy dopo il tramonto. Alloggiare qui colloca tra la città vecchia e Podgorze, con la Fabbrica di Schindler a breve distanza a piedi oltre il fiume.",
      pros: [
        "I migliori bar, caffè e street food della città a prezzi locali",
        "A distanza a piedi sia dalla città vecchia sia dalla Fabbrica di Schindler",
        "Camere più economiche della città vecchia con lo stesso carattere centrale",
      ],
      cons: [
        "Plac Nowy e le sue stradine laterali diventano rumorosi fino a tardi nei fine settimana",
        "15 minuti a piedi dalla Piazza del Mercato invece che a due passi",
        "Meno hotel di catena, più appartamenti e piccole pensioni",
      ],
    },
    {
      slug: "podgorze",
      citySlug: "krakow",
      name: "Podgorze",
      lat: 50.0446,
      lng: 19.9565,
      bestFor: ["local", "budget", "family"],
      vibe: "Il distretto oltre la Vistola che ospitava il ghetto durante la guerra, oggi un tranquillo quartiere residenziale con la storia più intensa di Cracovia e un ritmo lento e senza fretta. La Fabbrica di Schindler, la Piazza degli Eroi del Ghetto con il suo memoriale di sedie vuote e il museo d'arte moderna MOCAK si trovano tutti qui. È a breve distanza a piedi sulla passerella pedonale da Kazimierz, ma di sera è un mondo più calmo.",
      pros: [
        "La Fabbrica di Schindler e i memoriali del ghetto a portata di mano",
        "Strade calme e genuinamente locali e prezzi più bassi del centro",
        "Passerella pedonale diretta su Kazimierz per le serate fuori",
      ],
      cons: [
        "Pochi ristoranti e bar rispetto a Kazimierz dall'altra parte del fiume",
        "20-25 minuti a piedi fino alla Piazza del Mercato",
        "Atmosfera solenne in alcune zone; qui è terra di memoria, non di vita notturna",
      ],
    },
    {
      slug: "kleparz",
      citySlug: "krakow",
      name: "Kleparz",
      lat: 50.0685,
      lng: 19.9415,
      bestFor: ["budget", "local", "family"],
      vibe: "Un distretto operoso appena a nord delle mura della città vecchia, costruito attorno al mercato coperto di Stary Kleparz dove da secoli gli abitanti fanno la spesa di prodotti freschi. È più semplice del nucleo turistico ma si trova a cinque minuti dal Barbacane e proprio accanto alla stazione principale dei treni e degli autobus. Qui si scambia l'aspetto da cartolina con prezzi più bassi e trasporti comodi.",
      pros: [
        "Le camere più economiche vicine al centro, a cinque minuti dalla città vecchia",
        "Il mercato di Stary Kleparz per cibo fresco e spuntini a poco prezzo",
        "A due passi da Krakow Glowny per il treno dell'aeroporto e le gite giornaliere",
      ],
      cons: [
        "Poco fascino nel distretto in sé; qui si dorme, non ci si attarda",
        "Le strade trafficate e la stazione portano traffico e rumore",
        "Scarsa offerta di ristorazione serale rispetto a Kazimierz o alla piazza",
      ],
    },
    {
      slug: "stradom",
      citySlug: "krakow",
      name: "Stradom",
      lat: 50.0555,
      lng: 19.9415,
      bestFor: ["first-time", "romantic", "family"],
      vibe: "La stretta fascia tra la città vecchia e Kazimierz, sotto il fianco orientale della collina del Wawel. È centrale senza il rumore della piazza, a cinque minuti a piedi sia dalla Piazza del Mercato sia dai bar di Kazimierz, e la più vicina in assoluto al castello. Una base sensata per chi vuole la città vecchia e Kazimierz in egual misura.",
      pros: [
        "A metà strada tra la Piazza del Mercato, il Wawel e Kazimierz, tutto a piedi",
        "Serate più tranquille della piazza o di Plac Nowy",
        "La zona residenziale più vicina al Castello del Wawel",
      ],
      cons: [
        "Scelta di hotel più ridotta rispetto alla città vecchia vera e propria",
        "Alcune strade di passaggio trafficate attraversano il distretto",
        "Meno vita propria; si esce a piedi per cenare e per i bar",
      ],
    },
  ],

  pois: [
    {
      slug: "rynek-glowny",
      citySlug: "krakow",
      name: "Piazza del Mercato (Rynek Glowny) e Mercato dei Tessuti (Sukiennice)",
      lat: 50.0617,
      lng: 19.9373,
      kind: "sight",
      needsBooking: false,
      tip: "La piazza e le bancarelle al piano terra del Mercato dei Tessuti sono gratuite da attraversare; conviene curiosare tra l'ambra e l'artigianato popolare ma contrattare, ed evitare i chioschi di cambio attorno alla piazza per i tassi pessimi. Il museo sotterraneo Rynek sotto la piazza è il momento clou a pagamento, e va esaurito nei pomeriggi affollati, quindi conviene prenotare online un turno mattutino.",
    },
    {
      slug: "st-marys-basilica",
      citySlug: "krakow",
      name: "Basilica di Santa Maria",
      lat: 50.0617,
      lng: 19.9394,
      kind: "sight",
      needsBooking: true,
      tip: "Ci sono due biglietti distinti con turni limitati: uno per la chiesa per vedere l'altare ligneo di Veit Stoss, aperto ogni giorno attorno alle 11:50, e un biglietto separato a orario per salire sulla torre. Conviene acquistare entrambi online in anticipo, e fermarsi sulla piazza a ogni ora per ascoltare l'hejnal, la chiamata di tromba suonata dal vivo dalla torre e interrotta a metà nota, un omaggio a un trombettiere medievale fermato da una freccia.",
    },
    {
      slug: "wawel-castle",
      citySlug: "krakow",
      name: "Castello reale del Wawel",
      lat: 50.0544,
      lng: 19.9356,
      kind: "sight",
      needsBooking: true,
      tip: "Il cortile del castello e i terreni della collina sono a ingresso gratuito, ma le Sale di Rappresentanza e gli Appartamenti Reali usano biglietti a orario con un tetto giornaliero che si esaurisce presto in estate, quindi conviene prenotare online un turno vicino all'apertura delle 9:30. Un numero limitato di biglietti gratuiti per alcuni percorsi viene rilasciato per un giorno della settimana, di solito il lunedì, e vanno esauriti in pochi minuti.",
    },
    {
      slug: "wawel-cathedral",
      citySlug: "krakow",
      name: "Cattedrale del Wawel",
      lat: 50.0543,
      lng: 19.9351,
      kind: "sight",
      needsBooking: false,
      tip: "L'ingresso alla navata della cattedrale è gratuito, ma le tombe reali, la salita alla torre della campana Sigismondo e la cripta richiedono un biglietto combinato da acquistare nella casa di fronte all'ingresso, dall'altra parte della piazza, non alla porta. Conviene salire per le strette scale di legno fino all'altezza della campana Sigismondo presto, prima che la scala a fila unica si intasi a metà mattina.",
    },
    {
      slug: "kazimierz-quarter",
      citySlug: "krakow",
      name: "Quartiere ebraico di Kazimierz",
      lat: 50.0515,
      lng: 19.9445,
      kind: "sight",
      needsBooking: false,
      tip: "Conviene percorrerlo al mattino per le sinagoghe, il cimitero Remuh e via Szeroka con quasi nessuno intorno, poi tornare dopo il tramonto per la scena dei bar di Plac Nowy. Le zapiekanka rotonde, mezze baguette alla pizza, dal chiosco Okraglak in Plac Nowy sono il classico spuntino economico di tarda notte per pochi zloty.",
    },
    {
      slug: "schindlers-factory",
      citySlug: "krakow",
      name: "Museo della Fabbrica di Schindler",
      lat: 50.0475,
      lng: 19.9613,
      kind: "museum",
      needsBooking: true,
      tip: "Questo è un museo sulla Cracovia occupata durante la guerra dentro la vera fabbrica di smalti di Oskar Schindler, non solo sul film, e va esaurito con giorni di anticipo in estate, quindi conviene prenotare online un biglietto a orario. Conviene scegliere il primo turno del giorno; le sale immersive e strette si intasano parecchio quando arrivano i gruppi, e vanno previste due ore piene.",
    },
    {
      slug: "auschwitz-birkenau",
      citySlug: "krakow",
      name: "Memoriale di Auschwitz-Birkenau",
      lat: 50.0343,
      lng: 19.1789,
      kind: "sight",
      needsBooking: true,
      tip: "L'ingresso è gratuito ma è OBBLIGATORIO prenotare online un biglietto a orario, spesso con settimane di anticipo in alta stagione, e tra circa le 10 e le 15 si può entrare solo con una guida autorizzata. È a circa 1,5 ore di auto per tratta nei pressi di Oswiecim, quindi conviene riservare almeno mezza giornata e realisticamente quasi tutta; il sito comprende due campi distinti, Auschwitz I e Birkenau, collegati da una navetta.",
    },
    {
      slug: "wieliczka-salt-mine",
      citySlug: "krakow",
      name: "Miniera di sale di Wieliczka",
      lat: 49.9832,
      lng: 20.0546,
      kind: "experience",
      needsBooking: true,
      tip: "Si può scendere solo con una visita guidata, quindi conviene prenotare online in anticipo il Percorso Turistico, soprattutto in estate quando i turni in lingua inglese si riempiono in fretta. È una camminata di due ore con circa 380 gradini in discesa all'inizio e nessun modo di uscire prima, quindi non è adatta a chi non riesce a fare le scale; la temperatura sotterranea si mantiene attorno ai 14C tutto l'anno, conviene portare uno strato.",
    },
    {
      slug: "planty-park",
      citySlug: "krakow",
      name: "Anello del parco Planty",
      lat: 50.0625,
      lng: 19.9355,
      kind: "park",
      needsBooking: false,
      tip: "Questa cintura verde circonda tutta la città vecchia sulla linea delle mura cittadine demolite, un anello piano di quattro chilometri che si percorre in meno di un'ora. Conviene usarla come scorciatoia ombreggiata tra i luoghi da visitare in estate più che come meta; il tratto accanto al Barbacane e al quartiere universitario è il più bello.",
    },
    {
      slug: "barbican-florian-gate",
      citySlug: "krakow",
      name: "Barbacane e Porta di San Floriano",
      lat: 50.0655,
      lng: 19.9415,
      kind: "sight",
      needsBooking: false,
      tip: "Il Barbacane e le mura sono gratuiti da osservare dal Planty; un biglietto combinato economico permette di percorrere i bastioni superstiti e salire dentro il Barbacane per chi vuole il taglio della difesa medievale. La Porta di San Floriano si apre su via Florianska, la classica marcia di avvicinamento verso la Piazza del Mercato, e i pittori locali appendono le tele lungo il muro qui.",
    },
    {
      slug: "collegium-maius",
      citySlug: "krakow",
      name: "Collegium Maius (Università Jagellonica)",
      lat: 50.0614,
      lng: 19.9327,
      kind: "museum",
      needsBooking: true,
      tip: "L'edificio più antico dell'università più antica della Polonia, dove studiò Copernico, si visita solo con visita guidata, e i turni popolari si esauriscono, quindi conviene prenotare in anticipo e chiedere una visita in inglese. Il cortile gotico ad arcate è gratuito da attraversare e l'orologio astronomico al suo interno suona e fa sfilare delle figure alcune volte al giorno, vale la pena calcolare l'orario.",
    },
    {
      slug: "milk-bar-tomasza",
      citySlug: "krakow",
      name: "Bar Mleczny (bar del latte)",
      lat: 50.0625,
      lng: 19.9405,
      kind: "food",
      needsBooking: false,
      tip: "Un bar mleczny è una mensa sovvenzionata che serve pierogi, zuppe e cotolette per pochi euro, uno spaccato autentico della Polonia di tutti i giorni; conviene cercarne uno come il Bar Mleczny Tomasza vicino alla città vecchia. Conviene leggere il menu in polacco affisso sopra il bancone, pagare prima alla cassa, poi ritirare il piatto; il contante è la soluzione più sicura e il ricambio è rapido a pranzo.",
    },
    {
      slug: "ghetto-heroes-square",
      citySlug: "krakow",
      name: "Podgorze e Piazza degli Eroi del Ghetto",
      lat: 50.0475,
      lng: 19.9527,
      kind: "sight",
      needsBooking: false,
      tip: "La piazza oltre il fiume a Podgorze ospita il memoriale di 70 sedie di bronzo vuote che segna il ghetto della guerra, e la Farmacia dell'Aquila al suo margine è un piccolo e commovente museo del ghetto per una tariffa modesta. Conviene abbinarla alla Fabbrica di Schindler a pochi minuti, dato che entrambe si trovano sullo stesso lato della Vistola.",
    },
    {
      slug: "kosciuszko-mound",
      citySlug: "krakow",
      name: "Punto panoramico del Tumulo di Kosciuszko",
      lat: 50.0547,
      lng: 19.8917,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Questo tumulo artificiale a ovest del centro offre il miglior panorama completo su Cracovia e, nelle giornate limpide, sui monti Tatra; un biglietto modesto copre la salita e il piccolo museo della fortezza intorno. È a 30 minuti di corsa con l'autobus 100 o il tram più una breve camminata, quindi conviene riservarlo a un pomeriggio limpido invece che grigio.",
    },
  ],

  itineraries: [
    {
      citySlug: "krakow",
      days: 2,
      summary:
        "Due giorni bastano per il nucleo di Cracovia se si alloggia in centro e si comincia presto, e coprono la città vecchia, il Wawel e Kazimierz senza sentirsi di fretta. Tutto il centro si trova dentro l'anello del Planty, quindi la Piazza del Mercato, Santa Maria, il Mercato dei Tessuti e il Wawel sono tutti entro 15 minuti a piedi l'uno dall'altro, e Kazimierz è una breve passeggiata a sud. Conviene sistemarsi a Stare Miasto così entrambe le mattine cominciano a piedi. Il piano che funziona è un giorno per la città vecchia e la collina del Wawel, e un giorno per Kazimierz, la Fabbrica di Schindler e Podgorze oltre il fiume. Conviene prenotare online due cose prima di arrivare: le Sale di Rappresentanza del Wawel e un turno a orario alla Fabbrica di Schindler, dato che entrambi si esauriscono in stagione. Ciò che due giorni non concedono sono le grandi gite da prenotare in anticipo: Auschwitz-Birkenau e la Miniera di sale di Wieliczka richiedono ciascuna almeno mezza giornata, che è esattamente ciò a cui serve un terzo giorno. I prezzi sono bassi, quindi conviene mangiare bene; un pranzo al bar mleczny costa pochi euro.",
      stayNeighborhoodSlug: "stare-miasto",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Città vecchia e collina del Wawel",
          morning: [
            {
              poiSlug: "rynek-glowny",
              text: "Si comincia sulla Piazza del Mercato attorno alle 8:30 mentre la piazza è tranquilla, si percorrono le bancarelle al piano terra del Mercato dei Tessuti, poi si scende nel museo sotterraneo Rynek sotto la piazza con un turno mattutino prenotato in anticipo.",
              durationMin: 105,
            },
            {
              poiSlug: "st-marys-basilica",
              text: "Si entra nella Basilica di Santa Maria per l'altare ligneo di Veit Stoss, calcolando l'orario dello svelamento quotidiano attorno alle 11:50, e si resta sulla piazza allo scoccare dell'ora per sentire la chiamata di tromba hejnal dal vivo interrompersi a metà nota.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "milk-bar-tomasza",
              text: "Pranzo in un bar mleczny come il Bar Mleczny Tomasza con pierogi e zuppa per pochi euro. Si paga prima alla cassa, si ritira al bancone, e si porta contante.",
              durationMin: 45,
            },
            {
              poiSlug: "wawel-castle",
              text: "Si scende alla collina del Wawel e si visitano le Sale di Rappresentanza del Castello reale con il biglietto prenotato in anticipo, poi si trascorre del tempo gratuitamente nel cortile ad arcate e lungo i bastioni sopra la Vistola.",
              durationMin: 120,
            },
            {
              poiSlug: "wawel-cathedral",
              text: "Accanto, si visita la Cattedrale del Wawel: la navata è gratuita, e un biglietto combinato dalla casa di fronte copre le tombe reali e la salita alla campana Sigismondo per una vista sul fiume.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "barbican-florian-gate",
              text: "Si torna a nord su via Florianska e si esce dalla Porta di San Floriano fino al Barbacane, la classica marcia di avvicinamento medievale al contrario, con i pittori delle mura sistemati lungo il percorso.",
              durationMin: 45,
            },
            {
              text: "Cena nella città vecchia lontano dalla piazza principale, in una via laterale come Slawkowska o attorno a Plac Szczepanski, dove un pasto polacco completo con una birra costa ben meno del prezzo della piazza turistica.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Kazimierz, Fabbrica di Schindler e Podgorze",
          morning: [
            {
              poiSlug: "kazimierz-quarter",
              text: "Si scende a Kazimierz presto e si fa il quartiere ebraico prima della folla: le sinagoghe, il cimitero Remuh e via Szeroka, tutti tranquilli al mattino.",
              durationMin: 120,
            },
            {
              text: "Si prende una zapiekanka rotonda dal chiosco Okraglak in Plac Nowy per un pranzo di strada economico, poi si taglia verso la passerella pedonale sul fiume in direzione Podgorze.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "schindlers-factory",
              text: "Si passa a Podgorze per l'ingresso a orario prenotato in anticipo, meglio del primo turno, alla Fabbrica di Schindler, un museo sulla Cracovia occupata in guerra dentro il vero stabilimento di smalti di Oskar Schindler. Vanno previste due ore piene.",
              durationMin: 120,
            },
            {
              poiSlug: "ghetto-heroes-square",
              text: "A pochi minuti, ci si ferma alla Piazza degli Eroi del Ghetto con le sue 70 sedie di bronzo vuote, e si entra nel piccolo museo della Farmacia dell'Aquila al suo margine per la storia del ghetto.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "planty-park",
              text: "Si torna verso il centro lungo il fiume e si taglia attraverso l'anello del Planty mentre cala la luce, la cintura verde piana sulla linea delle antiche mura cittadine.",
              durationMin: 30,
            },
            {
              text: "Si finisce con cena e drink di nuovo a Kazimierz attorno a Plac Nowy, la migliore scena di bar e cortili della città, la più affollata e divertente dopo il tramonto.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "krakow",
      days: 3,
      summary:
        "Tre giorni sono la durata giusta per Cracovia: due giorni gestiscono la compatta città vecchia, il Wawel e Kazimierz a un ritmo umano, e il terzo giorno è pensato per una grande gita fuori città. Quel terzo giorno è davvero il motivo per aggiungere una notte, perché entrambe le grandi escursioni richiedono prenotazione anticipata e tempo. Auschwitz-Birkenau è gratuito ma serve una prenotazione a orario, spesso con settimane di anticipo, è a 1,5 ore di auto per tratta e occupa quasi tutta la giornata; la Miniera di sale di Wieliczka è solo con guida, più vicina, e riempie una solida mezza giornata. Conviene sceglierne una per il terzo giorno e prenotarla prima di tutto il resto. Conviene alloggiare a Kazimierz per questo viaggio: costa meno della città vecchia, mette il miglior cibo e i migliori bar a portata di mano, e si trova a distanza a piedi sia dalla piazza sia dalla Fabbrica di Schindler. Lo schema è città vecchia e Wawel il primo giorno, Kazimierz e Podgorze il secondo, e la gita scelta il terzo. Conviene prenotare online in anticipo le sale del Wawel, la Fabbrica di Schindler e la propria gita.",
      stayNeighborhoodSlug: "kazimierz",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Città vecchia e collina del Wawel",
          morning: [
            {
              poiSlug: "rynek-glowny",
              text: "Da Kazimierz, si sale nella città vecchia e si comincia sulla Piazza del Mercato entro le 8:30 per la piazza tranquilla e il Mercato dei Tessuti, poi si entra nel museo sotterraneo Rynek con un turno mattutino prenotato.",
              durationMin: 105,
            },
            {
              poiSlug: "st-marys-basilica",
              text: "Si visita la Basilica di Santa Maria per l'altare di Veit Stoss attorno al suo svelamento delle 11:50, e si calcola il proprio minuto sulla piazza per la chiamata di tromba hejnal dalla torre allo scoccare dell'ora.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "milk-bar-tomasza",
              text: "Pranzo in un bar mleczny con pierogi, cotoletta e zuppa per pochi euro, ordinando alla cassa e ritirando al bancone con contante.",
              durationMin: 45,
            },
            {
              poiSlug: "wawel-castle",
              text: "Si cammina fino alla collina del Wawel e si visitano le Sale di Rappresentanza del Castello reale con il biglietto a orario prenotato in anticipo, poi ci si attarda gratuitamente nel cortile e sui bastioni lungo il fiume.",
              durationMin: 120,
            },
            {
              poiSlug: "wawel-cathedral",
              text: "Si conclude sulla collina alla Cattedrale del Wawel, con la navata gratuita e un biglietto combinato per le tombe reali e la salita alla campana Sigismondo sopra la Vistola.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "collegium-maius",
              text: "Di nuovo nella città vecchia, si entra nel cortile gotico gratuito del Collegium Maius, l'edificio più antico dell'Università Jagellonica dove studiò Copernico, e si coglie il rintocco dell'orologio astronomico se l'orario capita bene.",
              durationMin: 45,
            },
            {
              text: "Si torna a piedi a Kazimierz per cena attorno a Plac Nowy, dove i ristoranti e i bar nei cortili costano ben meno dei prezzi della piazza della città vecchia.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Kazimierz, Fabbrica di Schindler e Podgorze",
          morning: [
            {
              poiSlug: "kazimierz-quarter",
              text: "Si è basati qui, quindi si comincia presto a piedi: le sinagoghe di Kazimierz, il cimitero Remuh e via Szeroka sono quasi vuoti al mattino prima dell'arrivo dei gruppi organizzati.",
              durationMin: 120,
            },
            {
              text: "Si prende una zapiekanka economica dal chiosco Okraglak in Plac Nowy, poi si attraversa la passerella pedonale sulla Vistola verso Podgorze.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "schindlers-factory",
              text: "Si entra alla Fabbrica di Schindler con il biglietto a orario prenotato in anticipo per il museo immersivo sulla Cracovia occupata in guerra; conviene prendere il turno più presto possibile per battere i colli di bottiglia sala dopo sala, e prevedere due ore.",
              durationMin: 120,
            },
            {
              poiSlug: "ghetto-heroes-square",
              text: "Si cammina fino alla Piazza degli Eroi del Ghetto per il memoriale delle 70 sedie vuote e il museo della Farmacia dell'Aquila al suo margine, entrambi a pochi minuti dalla fabbrica.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "planty-park",
              text: "Si torna oltre il fiume e si percorre un tratto lento dell'anello del Planty al crepuscolo, la cintura verde piana attorno alla città vecchia sulla linea delle mura demolite.",
              durationMin: 30,
            },
            {
              text: "Cena e drink a Kazimierz, battendo i cortili di Plac Nowy e i locali in cantina, la scena serale più vivace della città.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Grande gita: Auschwitz-Birkenau o Miniera di sale di Wieliczka",
          morning: [
            {
              poiSlug: "auschwitz-birkenau",
              text: "Opzione A: si parte presto per il Memoriale di Auschwitz-Birkenau, a circa 1,5 ore di auto a ovest, con la propria prenotazione a orario; tra le 10 e le 15 si entra solo con una guida autorizzata, e si vedranno sia Auschwitz I sia Birkenau tramite la navetta.",
              durationMin: 240,
            },
            {
              poiSlug: "wieliczka-salt-mine",
              text: "Opzione B: si va alla Miniera di sale di Wieliczka appena fuori città con un Percorso Turistico guidato prenotato in anticipo, una camminata sotterranea di due ore con circa 380 gradini in discesa all'inizio e un costante 14C, quindi conviene portare uno strato.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              text: "Opzione A: la visita ad Auschwitz-Birkenau e il tragitto riempiono quasi tutta la giornata, quindi si torna a Cracovia nel pomeriggio e si tiene il resto della giornata tranquillo e riflessivo.",
              durationMin: 180,
            },
            {
              text: "Opzione B: di ritorno da Wieliczka nel primo pomeriggio, si usa il tempo libero per qualsiasi cosa saltata, come il cortile del Wawel, un tratto del Planty o le bancarelle del Mercato dei Tessuti.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "kosciuszko-mound",
              text: "Se è una sera limpida e si è scelta la gita più breve a Wieliczka, si prende l'autobus 100 fino al Tumulo di Kosciuszko per il miglior panorama completo su Cracovia e, in una buona giornata, i lontani monti Tatra al tramonto.",
              durationMin: 90,
            },
            {
              text: "Ultima cena di nuovo a Kazimierz o nella città vecchia; dopo una giornata intensa, un tranquillo ristorante in cantina con pierogi e una birra polacca è la nota giusta su cui concludere.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
  ],
};

export default krakowIt;
