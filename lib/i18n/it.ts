import type en from "./en";

const it: typeof en = {
  locale: "it",
  months: [
    "gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno",
    "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre",
  ],
  monthsShort: [
    "Gen", "Feb", "Mar", "Apr", "Mag", "Giu",
    "Lug", "Ago", "Set", "Ott", "Nov", "Dic",
  ],
  common: {
    day: "Giorno",
    days: "giorni",
    from: "da",
    perNight: "/notte",
    checkPrices: "Vedi i prezzi",
    findHotels: "Trova hotel",
    free: "Gratis",
    tip: "Consiglio",
    morning: "Mattina",
    afternoon: "Pomeriggio",
    evening: "Sera",
    comingSoon: "(in arrivo)",
    home: "Home",
    faqTitle: "Domande rapide, risposte dirette",
  },
  header: { destinations: "Destinazioni", guides: "Guide", method: "Metodo" },
  footer: {
    tagline:
      "Il numero giusto di giorni, il quartiere giusto, il mese giusto. Guide city break costruite su dati strutturati e orari di apertura veri, senza riempitivi.",
    cities: "Città",
    site: "Sito",
    allDestinations: "Tutte le destinazioni",
    travelGuides: "Guide di viaggio",
    aboutMethod: "Chi siamo e metodologia",
    privacy: "Informativa sulla privacy",
    disclosure:
      "Perfect City Break riceve commissioni dai link di prenotazione (Stay22 e partner di biglietteria). Questo non cambia mai il prezzo che paghi né le nostre raccomandazioni.",
  },
  stay22: {
    loading: "Caricamento della mappa degli hotel…",
    mapNote: "La mappa mostra i prezzi degli hotel in tempo reale.",
    openSearch: "Apri la ricerca hotel completa",
    supportNote: ". Prenotare da qui sostiene il sito senza costi extra.",
    hotelsIn: "Hotel a {name}",
  },
  hotels: {
    defaultTitle: "Dove dormiremmo a {city}",
    defaultIntro:
      "Quattro indirizzi che coprono la gamma realistica, dallo sfizio al budget. I prezzi sono basi di bassa stagione; controlla le tariffe in tempo reale per le tue date.",
    seeAll: "Vedi tutti gli hotel di {city}",
    photosNote:
      "Foto illustrative · i link di prenotazione sostengono il sito senza costi extra",
  },
  cityCard: { days: "Giorni", best: "Top", budget: "Budget" },
  bestFor: {
    "first-time": "Prima visita",
    nightlife: "Vita notturna",
    family: "Famiglia",
    budget: "Budget",
    romantic: "Romantico",
    local: "Vita locale",
  },
  toolbar: {
    hotels: "Hotel",
    ourPicks: "I nostri indirizzi",
    howManyDays: "Quanti giorni",
    whereToStay: "Dove dormire",
    whenToGo: "Quando andare",
    hotelMap: "Mappa hotel",
    faq: "FAQ",
    compare: "Confronta",
    whereToSleep: "Dove dormire",
    day: "Giorno {n}",
  },
  bp: {
    pass: "Pass city break",
    idealStay: "Durata ideale",
    bestMonths: "Mesi migliori",
    midBudget: "Budget medio",
    airport: "Aeroporto",
    itinerary: "Itinerario di {days} giorni",
    duration: "Durata",
    base: "Base",
    forecast: "Previsioni di {month}",
    dayHigh: "Max diurna",
    nightLow: "Min notturna",
    rainyDays: "Giorni di pioggia",
    verdict: "Verdetto",
    go: "Vai",
    avoid: "Evita",
    fair: "Discreto",
    roomKey: "Chiave della camera",
    firstVisit: "Prima visita",
    budgetPick: "Scelta budget",
    nightlife: "Vita notturna",
    midHotel: "Hotel medio",
    budgetPass: "Pass budget",
    dailyTarget: "Obiettivo al giorno",
    sleepIn: "Dormire a",
    freeSights: "Attrazioni gratis",
    daysValue: "{days} giorni",
    perDay: "{price} EUR/giorno",
  },
  stamp: {
    daysIdeal: "{days} giorni, l'ideale",
    dayByDay: "Piano giorno per giorno",
    greatPick: "Ottima scelta",
    thinkTwice: "Pensaci due volte",
    shoulder: "Mezza stagione",
    areasCompared: "{n} zone a confronto",
    perDay: "~{price} EUR / giorno",
  },
  hub: {
    metaTitle: "City break a {city}: quanti giorni, dove dormire, quando andare",
    metaDesc:
      "{city} in {days} giorni: itinerari giorno per giorno, il quartiere giusto per il tuo viaggio, consigli mese per mese e budget onesti.",
    answer: "{city} dà il meglio come city break di {days} giorni. {intro}",
    howManyTitle: "Quanti giorni a {city}?",
    howManyIntro:
      "Scegli l'itinerario che corrisponde al tuo viaggio. Ognuno è un piano completo giorno per giorno, non una lista di 30 cose da incastrare.",
    seeItinerary: "Vedi l'itinerario →",
    wtsTitle: "Dove dormire a {city}",
    walkable:
      "Il centro di {city} si gira a piedi, quindi il quartiere che scegli dà il tono a tutto il viaggio.",
    spread:
      "{city} è una città estesa, quindi scegliere la base giusta ti fa risparmiare ore di trasporti.",
    fullComparison: "Confronto completo",
    monthsTitle: "{city}, mese per mese",
    monthsIntro:
      "I mesi colorati sono il periodo ideale. I mesi barrati arrivano con un avvertimento. Ogni pagina copre meteo, folla, prezzi e cosa mettere in valigia.",
    mapTitle: "I prezzi degli hotel in questo momento",
    historyTitle: "Un po' di storia",
    knownForTitle: "{city} è famosa per",
    faqAroundQ: "È facile muoversi a {city}?",
    faqAroundAWalk:
      "Sì. {city} ha un centro che si gira a piedi, quindi la maggior parte di un viaggio breve si fa a piedi. {airport}",
    faqAroundASpread:
      "{city} è una città estesa, quindi metti in conto i mezzi pubblici tra le zone. {airport}",
    faqAirportQ: "Come arrivo dall'aeroporto al centro di {city}?",
    faqAirportA: "{airport} È l'opzione più economica e di solito la più veloce.",
    faqKnownQ: "Per cosa è famosa {city}?",
    faqKnownA: "{city} è famosa soprattutto per {list}. {history}",
    tightBudget: "Budget ridotto?",
    budgetCard: "{city} low cost: lo stesso viaggio con circa {price} EUR al giorno",
    readBudget: "Leggi la guida budget →",
    pairsWell: "Si abbina bene con",
    faqDaysQ: "Quanti giorni servono a {city}?",
    faqDaysA: "{days} giorni è la durata ideale per {city}. {rest}",
    faqWhenQ: "Qual è il periodo migliore per visitare {city}?",
    faqWhenA: "I mesi migliori sono {months}. {avoid}",
    faqAvoid: "Pensaci due volte per {months}: {note}",
    faqExpQ: "{city} è una città cara?",
    faqExpA:
      "{city} si colloca {level} della media europea. Calcola circa {low} EUR al giorno con un budget stretto, {mid} EUR per un viaggio comodo di fascia media, e {high} EUR o più se vuoi i migliori hotel e ristoranti.",
    levelBelow: "al di sotto",
    levelAround: "al livello",
    levelAbove: "al di sopra",
    faqFirstQ: "Dove dormire a {city} alla prima visita?",
    faqFirstA: "{hood} è la base più sicura per una prima visita. {vibe}",
    faqFirstFallback:
      "Vedi il confronto completo dei quartieri nella nostra guida su dove dormire.",
  },
  iti: {
    metaTitle: "{city} in {days} giorni: l'itinerario giorno per giorno",
    metaDesc:
      "Un piano realistico giorno per giorno per {days} giorni a {city}: cosa vedere ogni mattina, pomeriggio e sera, dove dormire, e i consigli che ti risparmiano le code.",
    h1Connector: "in",
    daysUnit: "giorni",
    sleepTitle: "Dormire bene per questi {days} giorni",
    sleepIntro:
      "Indirizzi ordinati con la nostra base consigliata, {hood}, per prima. Prenota presto: le camere con il miglior rapporto qualità-prezzo spariscono settimane prima.",
    whereToSleepTitle: "Dove dormire per questo itinerario",
    whereToSleepBody: "Per {days} giorni, sistemati a {hood}. {vibe}",
    fullGuideLink: "Confronta tutti i quartieri nella guida completa su dove dormire.",
    shortTime: "Poco tempo?",
    gotLonger: "Hai più tempo?",
    faqEnoughQ: "{days} giorni bastano per {city}?",
    faqStayQ: "Dove conviene dormire per {days} giorni a {city}?",
    faqStayA: "Sistemati a {hood} per questo itinerario. {vibe}",
    faqStayFallback:
      "Resta in centro: vedi la nostra guida su dove dormire a {city}.",
    faqBestTimeQ: "Qual è il periodo migliore per questo itinerario a {city}?",
    faqBestTimeA:
      "Il piano funziona tutto l'anno, ma {months} offrono il miglior rapporto tra meteo e folla.",
  },
  mon: {
    metaTitle: "{city} in {month}: meteo, folla e se ne vale la pena",
    metaDesc:
      "{city} in {month}: temperature reali, giorni di pioggia, livello di folla, cosa mettere in valigia e se è il mese giusto per il tuo city break.",
    connector: "in",
    verdictBest: "{month} è uno dei mesi migliori per visitare {city}.",
    verdictAvoid:
      "{month} è il mese che eviteremmo a {city} se hai date flessibili.",
    verdictShoulder:
      "{month} è una discreta opzione di mezza stagione per {city}: meno folla, qualche compromesso.",
    answer:
      "{verdict} Aspettati massime diurne intorno ai {high}°C, notti vicine ai {low}°C e circa {rain} giorni di pioggia nel mese. {note}",
    packTitle: "Cosa mettere in valigia per {city} in {month}",
    packShoes: "Scarpe comode: farai più di 15.000 passi al giorno",
    packSun:
      "Protezione solare e una borraccia riutilizzabile: i pomeriggi si scaldano",
    packLayers: "Strati leggeri: pomeriggi caldi, serate più fresche",
    packJacket: "Una giacca vera e uno strato caldo per la sera",
    packGloves: "Guanti e berretto: le mattine sfiorano lo zero",
    packUmbrella:
      "Un ombrello compatto o una giacca antipioggia: la pioggia è una possibilità concreta",
    packRainLayer: "Uno strato antipioggia ripiegabile, per sicurezza",
    worksTitle: "Cosa funziona bene in {month}",
    worksCold:
      "Con {rain} giorni di pioggia e massime di {high}°C, costruisci le tue giornate di {month} intorno ad ancore al chiuso e considera le finestre di sole un bonus.",
    worksWarm:
      "Con massime intorno ai {high}°C, {month} è un mese da vivere all'aperto: dai priorità a punti panoramici, parchi e lunghe camminate.",
    planFull: "Pronto a pianificare tutto il viaggio? Inizia con",
    planFullLink: "l'itinerario di {city} in {days} giorni",
    hotelsTitle: "Dove dormire a {city} in {month}",
    hotelsIntroHigh:
      "{month} è molto richiesto: prenota da 4 a 6 settimane prima per mantenere realistici questi prezzi.",
    hotelsIntroLow:
      "{month} è più tranquillo, il che lo rende il mese giusto per concedersi gli indirizzi da sfizio.",
    mapTitle: "Hotel a {city} per {month}",
    otherMonth: "Oppure scegli un altro mese",
    faqGoodQ: "{month} è un buon periodo per visitare {city}?",
    faqWarmQ: "Che temperature ci sono a {city} in {month}?",
    faqWarmA:
      "Le giornate tipiche di {month} a {city} arrivano a circa {high}°C, scendendo verso i {low}°C di notte. Vestirsi a strati è la soluzione migliore.",
    faqRainQ: "Piove a {city} in {month}?",
    faqRainA: "Conta circa {rain} giorni con pioggia in {month}. {detail}",
    rainMuch:
      "Prevedi un blocco al chiuso al giorno e tieni i biglietti dei musei come piano B.",
    rainLittle: "La pioggia raramente dura tutto il giorno, quindi i piani reggono bene.",
  },
  wts: {
    metaTitle: "Dove dormire a {city}: le zone migliori a confronto",
    metaDesc:
      "I quartieri migliori dove dormire a {city} per una prima visita, la vita notturna, le famiglie e i budget ridotti. Pro e contro onesti, più mappe hotel in tempo reale per zona.",
    h1: "Dove dormire a",
    shortlistTitle: "La shortlist",
    shortlistIntro:
      "Se vuoi solo la risposta: quattro indirizzi verificati a {city}, dallo sfizio al budget, ognuno in un quartiere confrontato qui sotto.",
    boardTitle: "La tabella delle decisioni",
    boardNeighborhood: "Quartiere",
    boardBookIf: "Prenota se cerchi",
    boardWatchOut: "Attenzione a",
    boardHotels: "Hotel",
    bookFor: "Prenotalo per",
    knowBefore: "Da sapere prima",
    pickedNext: "Quartiere scelto? Ora blocca il piano:",
    pickedLink: "{city} in {days} giorni, ora per ora",
    answerFirst: "Per un primo city break a {city}, dormi a {hood}: {pro}.",
    answerFallback: "Resta in centro a {city}.",
    answerBudget:
      "Con un budget più stretto, {hood} ti dà più spazio spendendo meno.",
    answerWalkable:
      "Il centro si gira a piedi, quindi ognuna delle {n} zone qui sotto ti tiene a portata delle attrazioni principali; quello che cambia è l'atmosfera in cui torni la sera.",
    answerSpread:
      "Qui le distanze contano, quindi abbina la zona al programma che hai davvero.",
    faqBestQ: "Qual è la zona migliore dove dormire a {city}?",
    faqNightQ: "Dove dormire a {city} per la vita notturna?",
    faqNightA: "{hood} è la base per la vita notturna. {vibe} Avviso onesto: {con}",
    faqCheapQ: "Qual è la zona buona più economica dove dormire a {city}?",
    faqCheapA: "{hood} ha il miglior rapporto prezzo-posizione. {vibe}",
  },
  bud: {
    metaTitle: "{city} low cost: lo stesso viaggio con {price} EUR al giorno",
    metaDesc:
      "Come fare un city break a {city} con circa {price} EUR al giorno: le attrazioni gratuite che valgono davvero, dove dormire spendendo poco e dove mangiano i locali.",
    h1Suffix: "low cost",
    answer:
      "Un city break a {city} con circa {price} EUR a persona al giorno è realistico. La formula: dormi a {hood}, cammina invece di prendere i mezzi ({walk}), costruisci le giornate intorno ad ancore gratuite come {anchors}, e mangia dove mangiano i locali. Anche arrivare dall'aeroporto costa poco: {airport}.",
    walkCompact: "il centro è abbastanza compatto",
    walkZones: "scegli una zona al giorno",
    hotelsTitle: "Dormire spendendo poco, dormire bene",
    hotelsIntro:
      "Gli indirizzi sotto i {price} EUR che non sembrano un compromesso.",
    freeTitle: "Le ancore gratuite",
    freeIntro:
      "Non costano nulla e riempiono una giornata intera ciascuna. Costruisci intorno a loro e i biglietti a pagamento diventano extra opzionali invece di un salasso.",
    eatTitle: "Mangiare bene, pagare prezzi locali",
    sleepTitle: "Dormire spendendo poco a {hood}",
    orderNote: "Ora metti tutto in ordine:",
    orderLink: "l'itinerario di {city} in {days} giorni",
    orderSuffix: "funziona con questo budget grazie agli scambi qui sopra.",
    faqCostQ: "Quanto costa un viaggio low cost a {city}?",
    faqFreeQ: "Cosa si può fare gratis a {city}?",
    faqFreeA:
      "Le migliori attrazioni gratuite di {city}: {list}. Diverse attrazioni a pagamento hanno anche fasce orarie gratuite o ridotte; guarda i consigli su ogni pagina di itinerario.",
    faqCheapAreaQ: "Qual è la zona più economica dove dormire a {city}?",
  },
  home: {
    metaTitle: "Perfect City Break: itinerari city break che rispondono alla domanda",
    metaDesc:
      "I giorni giusti, il quartiere giusto, il mese giusto. Itinerari city break giorno per giorno costruiti su dati veri, senza riempitivi.",
    stamp: "City break pianificati come si deve",
    heroParts: [
      { pre: "I ", word: "giorni", post: " giusti." },
      { pre: " Il ", word: "quartiere", post: " giusto." },
      { pre: " Il ", word: "mese", post: " giusto." },
    ],
    heroSub:
      "Ogni guida risponde alle tre domande che decidono davvero un city break: quanto restare, dove dormire e quando andare. Giorno per giorno, con orari di apertura, trucchi salta-coda e budget onesti.",
    pickCity: "Scegli una città",
    howManyBtn: "Quanti giorni mi servono?",
    departures: "Partenze · aggiornato a luglio 2026",
    daysIdealShort: "{days} giorni, l'ideale",
    best: "top",
    boarding: "imbarco →",
    whereNext: "Dove andiamo?",
    allDest: "Tutte le destinazioni",
    searchPlaceholder: "Cerca una città, es. Lisbona",
    searchNoResult: "Ancora nessuna città per questa ricerca. Ne aggiungiamo di nuove ogni mese.",
    browseAll: "Sfoglia tutte",
    knownForLead: "Famosa per",
    faqTitle: "Le domande sui city break, con risposta",
    faqs: [
      {
        q: "Cos'è esattamente un city break?",
        a: "Un city break è un viaggio breve, di solito da 2 a 4 giorni, costruito intorno a una sola città anziché a una regione o a una spiaggia. Il senso è la profondità più che la distanza: scegli un posto, ne impari i quartieri e torni a casa riposato invece che sfinito.",
      },
      {
        q: "Quanti giorni servono per un city break?",
        a: "La maggior parte delle città europee si fa in 2 o 3 giorni. Città compatte come Siviglia o Bruges sono un weekend comodo; capitali come Praga o Budapest ripagano 3 giorni, e solo le più grandi, come Roma o Parigi, giustificano 4 giorni o più. Ogni pagina di città qui indica il numero ideale onesto.",
      },
      {
        q: "Qual è il periodo più economico per un city break in Europa?",
        a: "Da gennaio a marzo, fuori dai mercatini di Natale e dalle vacanze scolastiche, è la finestra più economica quasi ovunque. Novembre è il momento ideale per le miti città del sud a prezzi di bassa stagione. Le nostre pagine mese per mese mostrano il livello dei prezzi di ogni città, tutto l'anno.",
      },
      {
        q: "Qual è la città europea migliore per un primo city break?",
        a: "Per un primo viaggio, scegli una città compatta che si gira a piedi, dove le attrazioni sono vicine tra loro: Lisbona, Praga e Siviglia vanno tutte bene. Passi meno tempo sui mezzi e più tempo a vedere davvero il posto, che è lo scopo di un viaggio breve.",
      },
      {
        q: "Devo prenotare le attrazioni in anticipo?",
        a: "Per le attrazioni principali, sì. Luoghi come l'Alcázar di Siviglia o il Parlamento di Budapest esauriscono le fasce orarie giorni prima in alta stagione. Ogni itinerario qui segnala esattamente quali attrazioni vanno prenotate e con quanto anticipo.",
      },
    ],
    methodKicker: "Il nostro metodo",
    methodTitle:
      "Niente \"gemme nascoste\". Niente liste da 40 voci. Una decisione per pagina.",
    methodBody:
      "Ogni città è costruita come dati strutturati: quanti giorni le servono davvero, quali quartieri per quale viaggio, com'è ogni mese, quanto costano le cose. Ogni consiglio deve superare un test: puoi agire di conseguenza? Se no, si taglia.",
    methodLink: "Leggi la metodologia completa",
  },
  dest: {
    metaTitle: "Destinazioni city break: ogni città, confrontata onestamente",
    metaDesc:
      "Tutte le destinazioni Perfect City Break con il numero di giorni che servono davvero a ciascuna, i mesi migliori e budget onesti. Prima l'Europa, poi il mondo.",
    kicker: "Tabellone delle partenze",
    h1: "Scegli il tuo prossimo city break",
    intro:
      "Tre città pilota oggi, di nuove ogni mese. Ogni destinazione riceve il trattamento completo: itinerari per durata, quartieri a confronto e una pagina per ogni mese dell'anno.",
    cityBreaksIn: "City break in {country}",
    countryMetaTitle: "City break in {country}: dove andare e per quanto tempo",
    countryMetaDesc:
      "Tutti i city break in {country} su Perfect City Break: durata ideale, mesi migliori e budget onesti per ogni città.",
  },
};

export default it;
