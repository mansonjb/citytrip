import type { CityData } from "../types";

const copenhagenIt: CityData = {
  city: {
    slug: "copenhagen",
    name: "Copenaghen",
    country: "Danimarca",
    countrySlug: "denmark",
    lat: 55.6761,
    lng: 12.5683,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "CPH",
    airportToCenter:
      "La linea M2 della metropolitana collega l'aeroporto di Copenaghen (CPH) direttamente al centro, raggiungendo Kongens Nytorv accanto a Nyhavn in circa 15 minuti per circa 4,50 EUR (36 DKK), con corse ogni pochi minuti e anche di notte. Un treno regionale copre lo stesso tragitto fino alla stazione centrale in circa 13 minuti se l'hotel si trova da quel lato; entrambi battono un taxi, che costa 40 EUR o più.",
    centerWalkable: true,
    bestMonths: [5, 6, 7, 8],
    avoidMonths: [1],
    monthlyNotes: {
      1: "Il mese più buio e freddo, con massime attorno a 2C, la luce che sparisce già a metà pomeriggio e i Giardini di Tivoli chiusi dopo il gran finale di Capodanno dei primi giorni del mese. Le tariffe toccano il minimo annuale e i luoghi da visitare sono vuoti, quindi conviene puntare sui musei al coperto, sui caffè a lume di candela e su quell'hygge danese attorno a cui i locali costruiscono l'intera stagione.",
      2: "Ancora freddo e grigio attorno ai 3C, il mese più tranquillo dell'anno sia per folla sia per prezzi. Conviene mettere in valigia strati adeguati e un cappotto antivento per il porto, non prenotare nulla con largo anticipo e trattarlo come un viaggio da musei e caffè più che all'aperto.",
      3: "Le massime salgono verso i 5C e la luce torna in fretta, anche se resta rigido e spesso piovoso. La folla è scarsa e le tariffe basse; il vero segnale è la fine del mese, quando i Giardini di Tivoli riaprono per la stagione primaverile attorno all'inizio di aprile e l'atmosfera si solleva.",
      4: "La primavera arriva attorno ai 10C con i Giardini di Tivoli di nuovo aperti e le prime terrazze tiepide. La Pasqua porta una breve festività locale in cui alcuni negozi chiudono, ma la folla è ancora moderata e i prezzi restano sotto quelli estivi, il che ne fa un'astuta finestra di mezza stagione.",
      5: "Uno dei mesi migliori, con massime vicine a 15C, lunghe serate luminose e tutto aperto. La folla cresce ma non ha ancora raggiunto il picco, la vita del porto riparte e la città si sente al massimo dell'ottimismo; conviene prenotare in anticipo i ristoranti più richiesti e mettere in conto tariffe in salita verso la fascia estiva.",
      6: "Caldo attorno ai 19C con le giornate più lunghe dell'anno, quando fa a malapena buio. Distortion, l'enorme festa di strada, invade diversi quartieri lungo cinque giorni a inizio giugno, richiamando grandi folle e notti rumorose; conviene controllare le date, perché possono fare o rovinare il viaggio a seconda di ciò che si cerca.",
      7: "Alta stagione attorno ai 21C, affollata e cara, con il Copenhagen Jazz Festival che riempie piazze, cortili e club per dieci giorni a inizio luglio. I bagni del porto sono aperti, Tivoli chiude tardi e gli hotel si esauriscono, quindi conviene prenotare per tempo camere e biglietti del festival.",
      8: "Ancora caldo attorno ai 21C e affollato, l'ultimo tratto di piena estate prima del rientro a scuola. Il bagno nel porto, le serate tarde a Tivoli e la cena all'aperto sono tutti al meglio; le tariffe restano alte a inizio mese e si allentano verso la fine.",
      9: "Massime attorno ai 17C, folla in diradamento dopo la prima settimana e il più mite dei mesi di mezza stagione. È la scelta tranquilla e intelligente: le terrazze funzionano ancora nelle giornate tiepide, Tivoli resta aperto, i musei sono calmi e i prezzi scivolano giù dal picco estivo.",
      10: "Più fresco attorno ai 12C con più pioggia e veri colori autunnali nei parchi. I Giardini di Tivoli propongono una popolare stagione di Halloween con allestimenti di zucche per tutto il mese, un buon motivo per venire; per il resto la folla cala e le tariffe seguono.",
      11: "Grigio, umido e freddo con massime vicine a 7C e giornate corte, l'ultimo tratto tranquillo prima delle feste. I Giardini di Tivoli riaprono in veste natalizia attorno a metà mese con luci, bancarelle e gløgg, e cominciano i mercatini di Natale della città, che risollevano pomeriggi altrimenti bui.",
      12: "Freddo attorno ai 4C con le giornate più corte dell'anno, ma il mese più suggestivo al chiuso. La stagione natalizia di Tivoli, i mercatini di Nyhavn e di Højbro Plads, il vin brulé e l'hygge ovunque portano avanti l'atmosfera; conviene prenotare presto l'alloggio per la settimana attorno a Natale e Capodanno, che si riempie.",
    },
    climate: {
      1: { highC: 2, lowC: -2, rainyDays: 11 },
      2: { highC: 3, lowC: -2, rainyDays: 9 },
      3: { highC: 5, lowC: 0, rainyDays: 9 },
      4: { highC: 10, lowC: 3, rainyDays: 8 },
      5: { highC: 15, lowC: 8, rainyDays: 8 },
      6: { highC: 19, lowC: 11, rainyDays: 8 },
      7: { highC: 21, lowC: 13, rainyDays: 9 },
      8: { highC: 21, lowC: 13, rainyDays: 10 },
      9: { highC: 17, lowC: 10, rainyDays: 9 },
      10: { highC: 12, lowC: 6, rainyDays: 11 },
      11: { highC: 7, lowC: 3, rainyDays: 12 },
      12: { highC: 4, lowC: 0, rainyDays: 11 },
    },
    budgetLevel: "high",
    budgetPerDay: { budget: 90, mid: 180, high: 350 },
    tagline: "Design, bagni nel porto e girelle alla cannella, tutto su due ruote.",
    heroIntro:
      "Copenaghen concentra palazzi reali, un porto attivo in cui si può nuotare e alcuni tra i migliori ristoranti d'Europa in un centro compatto che si attraversa a piedi. È pensata prima di tutto per le biciclette, quindi la mossa più intelligente è noleggiarne una o prendere la metropolitana senza conducente invece di contendersi i taxi. Tre giorni coprono il nucleo reale, Christiania e la scena gastronomica con calma, lasciando anche tempo per sedersi in riva all'acqua.",
    accent: { from: "#3B5BA5", to: "#E86A6A", ink: "#1E2E52" },
    neighborhoodSlugs: [
      "indre-by",
      "nyhavn",
      "vesterbro",
      "norrebro",
      "christianshavn",
    ],
    nearbyCitySlugs: ["berlin"],
  },

  neighborhoods: [
    {
      slug: "indre-by",
      citySlug: "copenhagen",
      name: "Indre By (Città Vecchia)",
      lat: 55.6794,
      lng: 12.5776,
      bestFor: ["first-time", "romantic"],
      vibe: "Il nucleo medievale tra Strøget, i palazzi e i canali, dove quasi ogni attrazione di richiamo si trova entro dieci minuti a piedi. È denso, elegante e animato di giorno, più tranquillo una volta chiusi i negozi, e mette a piedi dalla Torre Rotonda, da Rosenborg e da Nyhavn. Per quella comodità si paga un chiaro sovrapprezzo.",
      pros: [
        "La Torre Rotonda, Rosenborg, Strøget e Nyhavn tutti a piedi",
        "La migliore percorribilità a piedi e i collegamenti metro della città",
        "Zero trasporti necessari per un viaggio di 2 giorni",
      ],
      cons: [
        "Le tariffe alberghiere più alte di Copenaghen",
        "Le vie principali hanno prezzi turistici per cibo e bevande",
        "Meno ristoranti locali rispetto a Nørrebro o Vesterbro",
      ],
    },
    {
      slug: "nyhavn",
      citySlug: "copenhagen",
      name: "Nyhavn",
      lat: 55.6797,
      lng: 12.5913,
      bestFor: ["first-time", "romantic"],
      vibe: "La cartolina di Copenaghen: un breve canale del Seicento fiancheggiato da case a timpano dipinte, barche di legno e bar con terrazza. Alloggiare su di esso o accanto mette al porto e al quartiere reale, anche se la banchina è rumorosa e cara nelle ore di punta. È bello, centrale e senza vergogna turistico.",
      pros: [
        "Iconico scenario di canale proprio sul porto",
        "A due passi dal quartiere reale, da Amalienborg e dai pontili dei battelli",
        "Ottimi collegamenti con metro e bus del porto",
      ],
      cons: [
        "I ristoranti sulla banchina fanno pagare caro la vista",
        "Rumoroso e affollato nelle sere d'estate",
        "Pochissimi veri letti economici così vicino all'acqua",
      ],
    },
    {
      slug: "vesterbro",
      citySlug: "copenhagen",
      name: "Vesterbro",
      lat: 55.6683,
      lng: 12.5449,
      bestFor: ["nightlife", "local", "budget"],
      vibe: "Un ex quartiere a luci rosse e mattatoi trasformato nel miglior quartiere di cibo e vita notturna per rapporto qualità-prezzo, a pochi minuti a ovest della stazione centrale. Gli isolati del mattatoio di Kødbyen vivono di wine bar naturali, panetterie e ristoranti dove i giovani di Copenaghen mangiano davvero. Si sente vissuto e creativo più che patinato, con tariffe sotto quelle della città vecchia.",
      pros: [
        "La migliore densità di cibo e vita notturna a prezzi più equi",
        "I bar del mattatoio di Kødbyen e la stazione centrale a un passo",
        "A distanza a piedi da Tivoli e dal centro città",
      ],
      cons: [
        "Alcune strade si sentono ancora ruvide a notte fonda",
        "Nessun canale o attrazione simbolo nel quartiere stesso",
        "Animato e rumoroso attorno agli isolati della vita notturna dopo il buio",
      ],
    },
    {
      slug: "norrebro",
      citySlug: "copenhagen",
      name: "Nørrebro",
      lat: 55.6949,
      lng: 12.5533,
      bestFor: ["local", "budget", "nightlife"],
      vibe: "Il quartiere più multiculturale e giovane, a nord dei laghi, costruito attorno al parco Superkilen e alla vivace via Jægersborggade. È qui che vive la vera scena gastronomica di quartiere, dalle panetterie alle griglie mediorientali, a prezzi ben sotto quelli del centro. È a quindici minuti a piedi o a una breve corsa di bus dalla città vecchia.",
      pros: [
        "Le tariffe più basse tra le zone semicentrali della città",
        "Straordinaria scena gastronomica indipendente con poco ricarico turistico",
        "Superkilen, il cimitero di Assistens e Jægersborggade nelle vicinanze",
      ],
      cons: [
        "Il più lontano di questi quartieri dalle attrazioni del porto",
        "Esteso, quindi si dipende di più da bici o bus",
        "Niente metro su alcuni tratti, anche se i bus sono frequenti",
      ],
    },
    {
      slug: "christianshavn",
      citySlug: "copenhagen",
      name: "Christianshavn",
      lat: 55.6725,
      lng: 12.5935,
      bestFor: ["local", "romantic", "family"],
      vibe: "Un quartiere insulare attraversato da canali, costruito da Cristiano IV, che mescola case galleggianti, banchine acciottolate e la città libera di Christiania al suo margine. È più calmo e residenziale della città vecchia, eppure a una fermata di metro o a breve camminata attraverso il porto. I caffè sul lungomare e la guglia a spirale della Vor Frelsers Kirke gli danno vero carattere.",
      pros: [
        "Bei canali e case galleggianti lontano dalla folla",
        "Una fermata di metro o una camminata al centro, con Christiania accanto",
        "Autentici caffè locali e il lungoporto a piedi",
      ],
      cons: [
        "Meno hotel, quindi scelta e disponibilità sono limitate",
        "Vita notturna più tranquilla che a Vesterbro o Nørrebro",
        "Per la maggior parte delle attrazioni centrali si attraversa il porto",
      ],
    },
  ],

  pois: [
    {
      slug: "nyhavn",
      citySlug: "copenhagen",
      name: "Porto di Nyhavn",
      lat: 55.6797,
      lng: 12.5911,
      kind: "sight",
      needsBooking: false,
      tip: "Questa è la foto per cui vengono tutti, resa al meglio dal piccolo ponte all'estremità del porto con la luce del mattino, prima che le terrazze si riempiano. Conviene sedersi qui per un drink se si vuole la vista, ma mangiare una via più indietro su Store Strandstræde o nella città vecchia, dove lo stesso cibo costa molto meno del sovrapprezzo della banchina.",
    },
    {
      slug: "tivoli-gardens",
      citySlug: "copenhagen",
      name: "Giardini di Tivoli",
      lat: 55.6736,
      lng: 12.5681,
      kind: "experience",
      needsBooking: true,
      tip: "Conviene controllare il calendario prima di pianificare intorno a Tivoli, perché è stagionale: aperto all'incirca da aprile a fine settembre, poi per Halloween a ottobre e di nuovo da metà novembre a Capodanno per il Natale, e chiuso nel mezzo. Conviene comprare l'ingresso online per un piccolo risparmio, andare nelle ultime ore prima della chiusura quando i giardini si illuminano, e acquistare un braccialetto per le giostre solo se si intende davvero salirci.",
    },
    {
      slug: "little-mermaid",
      citySlug: "copenhagen",
      name: "La Sirenetta",
      lat: 55.6929,
      lng: 12.5993,
      kind: "sight",
      needsBooking: false,
      tip: "La statua è piccola e sempre circondata da gruppi turistici, quindi conviene trattarla come una sosta di cinque minuti inserita in una passeggiata sul porto più che una meta a sé. Conviene venire di primo mattino per una foto pulita, e abbinarla alla vicina fortezza a stella di Kastellet e alla camminata fino ad Amalienborg, che è la vera ricompensa di salire fin quassù.",
    },
    {
      slug: "rosenborg-castle",
      citySlug: "copenhagen",
      name: "Castello di Rosenborg",
      lat: 55.6857,
      lng: 12.5773,
      kind: "sight",
      needsBooking: true,
      tip: "Conviene prenotare online un turno a orario in estate, perché l'interno del castello è piccolo e la coda per i gioielli della corona nel seminterrato si allunga già a metà giornata. Conviene andare proprio all'apertura, scendere subito al tesoro finché è tranquillo, poi uscire nei gratuiti giardini di Kongens Have, il più antico parco reale della città e un bel posto per un picnic.",
    },
    {
      slug: "christiansborg-palace",
      citySlug: "copenhagen",
      name: "Palazzo di Christiansborg e Torre",
      lat: 55.6759,
      lng: 12.5794,
      kind: "sight",
      needsBooking: false,
      tip: "La torre del palazzo è la più alta della città e, a differenza di quasi tutto il resto qui, del tutto gratuita da salire con l'ascensore, con la migliore vista dai tetti sulla città vecchia. Conviene salire prima, poi decidere se pagare per le sale di rappresentanza reali e le rovine sotto l'edificio; la sola torre giustifica la sosta anche saltando il resto.",
    },
    {
      slug: "round-tower",
      citySlug: "copenhagen",
      name: "Torre Rotonda (Rundetaarn)",
      lat: 55.6813,
      lng: 12.5757,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Il punto panoramico centrale più economico di Copenaghen, raggiunto non da scale ma da un'ampia rampa acciottolata a spirale che un cavallo potrebbe salire, che termina su una piattaforma aperta sui tetti della città vecchia. Conviene comprare il biglietto a basso costo alla porta, andare nel tardo pomeriggio per la luce calda, e cercare la piccola sala della biblioteca e l'osservatorio a metà salita, entrambi inclusi.",
    },
    {
      slug: "christiania",
      citySlug: "copenhagen",
      name: "Città libera di Christiania",
      lat: 55.6761,
      lng: 12.5989,
      kind: "experience",
      needsBooking: false,
      tip: "L'enclave hippie autogovernata ripaga di una passeggiata per i suoi murales, i laboratori, i sentieri sul lago e i caffè alternativi, ma va rispettata l'unica regola ferrea: nessuna foto su Pusher Street, dove i cartelli lo dichiarano chiaramente. Conviene tenere lontani i telefoni lì, esplorare di giorno i vicoli più verdi sul retro e i margini della Green Light District, e prenderla come una comunità viva più che un'attrazione turistica.",
    },
    {
      slug: "nationalmuseet",
      citySlug: "copenhagen",
      name: "Nationalmuseet (Museo Nazionale)",
      lat: 55.674,
      lng: 12.5751,
      kind: "museum",
      needsBooking: false,
      tip: "Il principale museo di storia della Danimarca è a ingresso gratuito ed è il miglior piano per una giornata di pioggia in città, fortissimo sui reperti dell'età vichinga come il Carro del Sole e un corpo di palude conservato. Conviene calcolare novanta minuti, dirigersi subito verso le sale della preistoria finché si è freschi, e usare la sezione per bambini a misura di famiglia se si hanno figli al seguito.",
    },
    {
      slug: "torvehallerne",
      citySlug: "copenhagen",
      name: "Mercato gastronomico Torvehallerne",
      lat: 55.6835,
      lng: 12.5691,
      kind: "food",
      needsBooking: false,
      tip: "Due padiglioni di mercato in vetro con una sessantina di bancarelle vicino a Nørreport, ideali per un pranzo di smørrebrød, il panino aperto, pasticcini freschi e caffè senza il ricarico turistico di Nyhavn. Conviene venire in un giorno feriale attorno alle 11 prima della calca del pranzo, provare al banco il classico smørrebrød con aringa marinata o roast beef, e tenere presente che chiude prima la domenica.",
    },
    {
      slug: "amalienborg",
      citySlug: "copenhagen",
      name: "Palazzo di Amalienborg",
      lat: 55.6841,
      lng: 12.5934,
      kind: "sight",
      needsBooking: false,
      tip: "La casa della famiglia reale è formata da quattro palazzi attorno a una piazza ottagonale, e il richiamo gratuito è il cambio della guardia a mezzogiorno ogni giorno, più solenne quando la Regina è in residenza e sventola la sua bandiera. Conviene mettersi vicino al corpo di guardia qualche minuto prima delle dodici, poi allineare la vista dritta fino alla Chiesa di Marmo da un lato e al Teatro dell'Opera oltre il porto dall'altro.",
    },
    {
      slug: "stroget",
      citySlug: "copenhagen",
      name: "Strøget",
      lat: 55.6786,
      lng: 12.5748,
      kind: "sight",
      needsBooking: false,
      tip: "Una delle vie pedonali più lunghe d'Europa, che corre per circa un chilometro da Piazza del Municipio a Kongens Nytorv, utile soprattutto come spina dorsale a piedi che collega metà delle attrazioni della città vecchia. Conviene trattarla come un percorso più che una gita di shopping, infilarsi nelle vie e piazze laterali più tranquille come Gråbrødretorv per caffè migliori, e percorrerla presto per battere la folla.",
    },
    {
      slug: "reffen",
      citySlug: "copenhagen",
      name: "Street food di Reffen",
      lat: 55.6949,
      lng: 12.6017,
      kind: "food",
      needsBooking: false,
      tip: "Un vasto mercato di street food all'aperto fatto di cucine ricavate da container sul lungomare di Refshaleøen, raggiunto al meglio dal bus del porto 991/992, che è già di per sé un mini tour in barca. Funziona stagionalmente dalla primavera all'autunno e chiude in inverno, quindi conviene verificare che sia aperto, andare per il tramonto sull'acqua, e pagare con carta, dato che la maggior parte delle bancarelle non accetta contante.",
    },
    {
      slug: "canal-tour",
      citySlug: "copenhagen",
      name: "Tour in battello sui canali",
      lat: 55.6797,
      lng: 12.5905,
      kind: "experience",
      needsBooking: false,
      tip: "Un battello di un'ora fa il giro del porto e dei canali passando davanti al Teatro dell'Opera, alla Sirenetta, alla biblioteca del Diamante Nero e a Christianshavn, ed è il modo più rapido per capire come la città poggi sull'acqua. Conviene imbarcarsi ai pontili di Nyhavn o di Ved Stranden, scegliere un battello aperto invece di uno coperto in vetro, e andare nel tardo pomeriggio per la migliore luce sulle facciate.",
    },
    {
      slug: "superkilen",
      citySlug: "copenhagen",
      name: "Parco Superkilen",
      lat: 55.6994,
      lng: 12.5423,
      kind: "park",
      needsBooking: false,
      tip: "Un notevole parco pubblico a Nørrebro costruito con oggetti raccolti da decine di Paesi, da una fontana marocchina ai ciliegi giapponesi, disposti in tre zone a codice cromatico. È gratuito e aperto a tutte le ore; la Piazza Nera ondulata in bianco e nero è la foto, e si abbina naturalmente a una sosta in panetteria e a una passeggiata lungo la vicina Jægersborggade.",
    },
  ],

  itineraries: [
    {
      citySlug: "copenhagen",
      days: 2,
      summary:
        "Due giorni bastano per le attrazioni di richiamo di Copenaghen se si alloggia in centro e ci si muove a piedi o in bici, ma si sfioreranno appena i quartieri che danno alla città il suo carattere. La città vecchia è compatta: Nyhavn, il quartiere reale, la Torre Rotonda, Rosenborg e Tivoli si trovano entro 25 minuti a piedi l'uno dall'altro, quindi un piano serrato li copre senza troppi spostamenti. Conviene sistemarsi a Indre By così entrambe le mattine cominciano a piedi. La struttura che funziona è un tema al giorno: il nucleo reale e il porto il primo giorno, i palazzi, la Torre Rotonda e Tivoli il secondo, con un tour in battello sui canali a legare insieme il lungomare. Conviene prenotare poco in anticipo, oltre a un turno a Rosenborg in estate e un ingresso a Tivoli se cade in una stagione aperta, dato che i giardini sono chiusi per tratti dell'anno. Ciò a cui si rinuncia è Christiania, la scena gastronomica di Vesterbro e qualsiasi lento pomeriggio in riva al porto, che è esattamente ciò che un terzo giorno riconquista.",
      stayNeighborhoodSlug: "indre-by",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Il porto e il quartiere reale",
          morning: [
            {
              poiSlug: "nyhavn",
              text: "Si comincia a Nyhavn prima che le terrazze si riempiano, fotografando le case dipinte dal ponte all'estremità del porto con la luce del mattino. Si percorre la banchina una volta, poi si prosegue invece di pagare il sovrapprezzo della vista per la colazione qui.",
              durationMin: 45,
            },
            {
              poiSlug: "amalienborg",
              text: "Si sale ad Amalienborg per i palazzi reali attorno alla piazza ottagonale, calcolando l'orario del cambio della guardia a mezzogiorno e allineando la vista fino alla Chiesa di Marmo e al Teatro dell'Opera.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "little-mermaid",
              text: "Si prosegue lungo il sentiero del porto attraverso la fortezza a stella di Kastellet fino alla Sirenetta, una rapida sosta fotografica più che una meta, poi si torna verso il centro.",
              durationMin: 75,
            },
            {
              poiSlug: "canal-tour",
              text: "Si sale su un battello aperto al pontile di Nyhavn per il giro del porto di un'ora davanti al Teatro dell'Opera, al Diamante Nero e a Christianshavn, il modo più rapido per leggere come la città poggi sull'acqua.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              text: "Cena nella città vecchia una via più indietro rispetto a Nyhavn, attorno a Gråbrødretorv o nei vicoli laterali di Strøget, dove prezzi e qualità migliorano entrambi rispetto alla banchina.",
              durationMin: 105,
            },
            {
              text: "Si chiude con una passeggiata di ritorno lungo l'acqua, con i canali al loro più calmo una volta fermati i battelli diurni.",
              durationMin: 45,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Palazzi, la Torre Rotonda e Tivoli",
          morning: [
            {
              poiSlug: "rosenborg-castle",
              text: "Si apre la giornata al Castello di Rosenborg con un turno mattutino, scendendo subito ai gioielli della corona nel tesoro prima che si formi la coda, poi fuori nei gratuiti giardini di Kongens Have.",
              durationMin: 105,
            },
            {
              poiSlug: "torvehallerne",
              text: "Si cammina fino ai padiglioni del mercato Torvehallerne vicino a Nørreport per un pranzo di smørrebrød e un pasticcino, pascolando tra le bancarelle invece di sedersi per un pasto completo.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "round-tower",
              text: "Si sale la Torre Rotonda per la sua rampa acciottolata a spirale per l'economica vista centrale dai tetti sulla città vecchia, sostando alla sala della biblioteca e all'osservatorio lungo la salita.",
              durationMin: 60,
            },
            {
              poiSlug: "christiansborg-palace",
              text: "Si scende a Christiansborg e si prende l'ascensore gratuito fino alla sua torre, la più alta della città, per il miglior panorama dai tetti della giornata, poi si guarda la piazza del palazzo sotto.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "tivoli-gardens",
              text: "Se cade in una stagione aperta, si trascorre la sera nei Giardini di Tivoli, arrivando nelle ultime ore prima della chiusura quando tutto il parco si illumina. Conviene controllare prima il calendario, dato che chiude per tratti dell'anno.",
              durationMin: 150,
            },
          ],
        },
      ],
    },
    {
      citySlug: "copenhagen",
      days: 3,
      summary:
        "Tre giorni sono la giusta quantità di tempo per Copenaghen: abbastanza per il nucleo reale e il porto con calma, più una giornata che appartiene a Christiania, alla scena gastronomica e all'acqua invece che alla lista di cose da spuntare. Due giorni costringono a correre tra i palazzi e la città vecchia uno dietro l'altro; il terzo aggiunge la città libera di Christiania, i canali di Christianshavn e una vera serata di street food, con tempo per nuotare nel porto in una giornata tiepida. Conviene alloggiare a Vesterbro, a pochi minuti dalla stazione centrale e da Tivoli, più economico della città vecchia e patria del miglior rapporto qualità-prezzo per cibo e vita notturna in città. La forma del piano: il quartiere reale e il porto il primo giorno, i palazzi, la Torre Rotonda e Tivoli il secondo, Christiania e Christianshavn il terzo. Conviene prenotare poco in anticipo oltre a un turno estivo a Rosenborg e un ingresso a Tivoli quando i giardini sono aperti. Tutto il resto ripaga il noleggio di una bici o l'uso della metropolitana e la partenza mattutina.",
      stayNeighborhoodSlug: "vesterbro",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Il porto e il quartiere reale",
          morning: [
            {
              poiSlug: "nyhavn",
              text: "Si arriva da Vesterbro e si comincia a Nyhavn presto, prima che le terrazze si riempiano, per la foto delle case dipinte dal ponte all'estremità del porto.",
              durationMin: 45,
            },
            {
              poiSlug: "amalienborg",
              text: "Si cammina fino ad Amalienborg per i quattro palazzi reali e il cambio della guardia a mezzogiorno, allineando la vista fino alla Chiesa di Marmo e oltre il porto al Teatro dell'Opera.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "little-mermaid",
              text: "Si segue il sentiero del porto attraverso la fortezza di Kastellet fino alla Sirenetta per una rapida foto, poi si torna verso il centro.",
              durationMin: 75,
            },
            {
              poiSlug: "canal-tour",
              text: "Si prende un battello aperto dal pontile di Nyhavn per il giro del porto di un'ora e vedere il Teatro dell'Opera, il Diamante Nero e Christianshavn dall'acqua nella luce del pomeriggio.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              text: "Si torna a Vesterbro per cena negli isolati del mattatoio di Kødbyen, il quartiere gastronomico dal miglior rapporto qualità-prezzo della città, poi un wine bar naturale dopo.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Palazzi, la Torre Rotonda e Tivoli",
          morning: [
            {
              poiSlug: "rosenborg-castle",
              text: "Si comincia a Rosenborg con un turno mattutino, dritti giù ai gioielli della corona prima che si formi la coda al tesoro, poi fuori nei gratuiti giardini di Kongens Have.",
              durationMin: 105,
            },
            {
              poiSlug: "torvehallerne",
              text: "Pranzo ai padiglioni del mercato Torvehallerne vicino a Nørreport, pascolando smørrebrød e pasticcini tra le bancarelle.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "round-tower",
              text: "Si sale la rampa a spirale della Torre Rotonda per l'economica vista dai tetti sulla città vecchia, fermandosi alla sala della biblioteca lungo la salita.",
              durationMin: 60,
            },
            {
              poiSlug: "christiansborg-palace",
              text: "Si prende l'ascensore gratuito fino alla torre di Christiansborg, la più alta della città, per il panorama dai tetti più ampio, poi si passeggia per la piazza del palazzo e il Diamante Nero della Biblioteca Nazionale sul lungomare sotto.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "tivoli-gardens",
              text: "Si trascorre la sera nei Giardini di Tivoli se è aperto, arrivando nelle ultime ore prima della chiusura quando il parco si illumina. Conviene controllare prima il calendario stagionale, dato che chiude per parti dell'anno.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Christiania, Christianshavn e street food",
          morning: [
            {
              poiSlug: "christiania",
              text: "Si attraversa il porto fino alla città libera di Christiania e si passeggia tra i suoi murales, laboratori e sentieri sul lago, tenendo lontani i telefoni su Pusher Street, dove le foto sono vietate. Va presa come una comunità viva più che un'attrazione.",
              durationMin: 90,
            },
            {
              text: "Si entra a Christianshavn vera e propria lungo i suoi canali e le case galleggianti, e si sale la scala esterna a spirale della Vor Frelsers Kirke per una vista se si ha la testa adatta.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "nationalmuseet",
              text: "Si torna indietro al Museo Nazionale, a ingresso gratuito, e ci si dirige subito verso le sale dell'età vichinga con il Carro del Sole e il corpo di palude, la parte più forte della collezione.",
              durationMin: 90,
            },
            {
              text: "In una giornata tiepida, si sostituisce il museo con il bagno del porto di Islands Brygge dall'altra parte dell'acqua, un punto di nuoto all'aperto gratuito nel mezzo della città.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "reffen",
              text: "Si prende il bus del porto 991, di per sé un mini viaggio in barca, fino al mercato di street food di Reffen a Refshaleøen per il tramonto sull'acqua e la cena dalle cucine nei container. Conviene verificare che sia aperto, dato che funziona stagionalmente, e pagare con carta.",
              durationMin: 150,
            },
          ],
        },
      ],
    },
    {
      citySlug: "copenhagen",
      days: 4,
      summary:
        "Quattro giorni sono più che sufficienti per le attrazioni di Copenaghen, e questo è il punto: il quarto giorno trasforma una corsa tra i palazzi in un vero viaggio. Dal primo al terzo giorno si coprono il nucleo reale, il porto, Christiania e la scena gastronomica con ritmo rilassato; il quarto giorno è a disposizione per una lenta giornata locale tra Nørrebro e Vesterbro oppure una gita in treno al museo d'arte moderna Louisiana lungo la costa o oltre il ponte fino a Malmö in Svezia, entrambi a meno di 40 minuti. Con così tanto tempo, conviene saltare la città vecchia e alloggiare a Nørrebro, il miglior quartiere gastronomico della città, più economico del centro e pieno di panetterie, bar e del parco Superkilen. La logica di un tema al giorno regge ancora: tenere insieme il quartiere reale e il porto, tenere insieme Christiania e Christianshavn, e non zigzagare. Conviene prenotare poco in anticipo oltre a un turno estivo a Rosenborg e un ingresso a Tivoli quando i giardini sono aperti. Se si dovesse scegliere tra tre giorni e quattro, il quarto è quello che si ricorderà.",
      stayNeighborhoodSlug: "norrebro",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Il porto e il quartiere reale",
          morning: [
            {
              poiSlug: "nyhavn",
              text: "Si scende in bici da Nørrebro e si comincia a Nyhavn presto per la foto delle case dipinte dal ponte all'estremità del porto prima che le terrazze si riempiano.",
              durationMin: 45,
            },
            {
              poiSlug: "amalienborg",
              text: "Si cammina fino ad Amalienborg per i palazzi reali e il cambio della guardia a mezzogiorno, con la linea visiva verso la Chiesa di Marmo e il Teatro dell'Opera oltre l'acqua.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "little-mermaid",
              text: "Si prende il sentiero del porto attraverso la fortezza di Kastellet fino alla Sirenetta per una rapida foto, poi si torna verso il centro.",
              durationMin: 75,
            },
            {
              poiSlug: "canal-tour",
              text: "Si sale su un battello aperto al pontile di Nyhavn per il giro del porto di un'ora davanti al Teatro dell'Opera, al Diamante Nero e a Christianshavn.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              text: "Cena di ritorno a Nørrebro lungo Jægersborggade o Sankt Hans Torv, dove i ristoranti e le panetterie di quartiere sono più economici e inventivi del centro.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Palazzi, la Torre Rotonda e Tivoli",
          morning: [
            {
              poiSlug: "rosenborg-castle",
              text: "Si apre a Rosenborg con un turno mattutino, giù ai gioielli della corona per primi, poi fuori nei gratuiti giardini di Kongens Have accanto al proprio quartiere.",
              durationMin: 105,
            },
            {
              poiSlug: "torvehallerne",
              text: "Pranzo ai padiglioni del mercato Torvehallerne vicino a Nørreport, pascolando smørrebrød e pasticcini tra le bancarelle.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "round-tower",
              text: "Si sale la rampa a spirale della Torre Rotonda per l'economica vista centrale dai tetti, sostando alla sala della biblioteca.",
              durationMin: 60,
            },
            {
              poiSlug: "christiansborg-palace",
              text: "Si prende l'ascensore gratuito fino alla torre di Christiansborg per il panorama dai tetti più alto della città, poi si percorre la piazza del palazzo e la spina di Strøget tornando verso Kongens Nytorv.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "tivoli-gardens",
              text: "Si trascorre la sera nei Giardini di Tivoli se è aperto, arrivando tardi quando il parco si illumina. Conviene controllare prima il calendario stagionale, dato che chiude per parti dell'anno.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Christiania, Christianshavn e street food",
          morning: [
            {
              poiSlug: "christiania",
              text: "Si attraversa fino alla città libera di Christiania e si passeggia tra i suoi murales, laboratori e sentieri sul lago, tenendo lontani i telefoni su Pusher Street, dove le foto sono vietate.",
              durationMin: 90,
            },
            {
              text: "Si percorrono i canali di Christianshavn e le case galleggianti, e si sale la scala esterna a spirale della Vor Frelsers Kirke per la vista se si ha coraggio.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "nationalmuseet",
              text: "Si torna indietro al gratuito Museo Nazionale e ci si dirige verso le sale dell'età vichinga con il Carro del Sole e il corpo di palude, la parte più forte della collezione.",
              durationMin: 90,
            },
            {
              text: "In un pomeriggio tiepido, si sostituisce il museo con un bagno al porto di Islands Brygge, una piscina all'aperto gratuita ricavata nel porto nel mezzo della città.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "reffen",
              text: "Si prende il bus del porto 991 fino al mercato di street food di Reffen a Refshaleøen per una cena al tramonto dalle cucine nei container. Conviene verificare che sia aperto, dato che funziona stagionalmente, e pagare con carta.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Giornata locale a Nørrebro o gita a Louisiana e Malmö",
          morning: [
            {
              poiSlug: "superkilen",
              text: "Opzione A: si comincia sull'uscio di casa al parco Superkilen, poi si scende lungo Jægersborggade per panetterie e caffè e dentro il verde cimitero di Assistens dove è sepolto Hans Christian Andersen. Opzione B: si prende il treno costiero circa 35 minuti a nord fino a Humlebæk per il Louisiana Museum of Modern Art, il cui parco di sculture scende fino al mare, oppure si attraversa il ponte dell'Øresund in treno in circa 35 minuti fino a Malmö in Svezia.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              text: "L'opzione A prosegue a Nørrebro e Vesterbro con un pranzo in un ristorante di quartiere e una passeggiata tra gli isolati di Kødbyen e i laghi tra i due quartieri. Opzione B: si dedica il pomeriggio alle gallerie e alla costa della Louisiana, oppure si esplorano la città vecchia di Malmö e il Turning Torso prima del breve treno di ritorno.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              text: "In entrambi i casi, si finisce di nuovo a Nørrebro tra i bar e le terrazze attorno a Sankt Hans Torv e Jægersborggade, la vera scena serale del quartiere.",
              durationMin: 120,
            },
            {
              text: "Ultima cena in un ristorante di Nørrebro; la zona propone cucina creativa a prezzi equi, una chiusura adatta dopo i menù con vista sul porto del centro.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
  ],
};

export default copenhagenIt;
