import type { CityData } from "../types";

const pragueIt: CityData = {
  city: {
    slug: "prague",
    name: "Praga",
    country: "Repubblica Ceca",
    countrySlug: "czech-republic",
    lat: 50.0755,
    lng: 14.4378,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "PRG",
    airportToCenter:
      "Bus 119 fino a Nadrazi Veleslavin, poi metro linea A verso il centro, circa 45 min in totale per circa 2 EUR. Il bus espresso AE va diretto alla stazione ferroviaria centrale se preferisci un solo mezzo.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10, 12],
    avoidMonths: [7, 8],
    monthlyNotes: {
      1: "Freddo, con massime intorno ai 2C e cieli spesso grigi, ma il mercatino di Natale sulla Piazza della Città Vecchia resta aperto fino al 6 gennaio. Dopo quella data, le tariffe degli hotel scendono ai minimi dell'anno e le attrazioni principali sono quasi senza code.",
      2: "Di notte fa ancora un freddo pungente e la città resta tranquilla, quindi è il mese intero più economico per visitarla. Gli interni dei pub e i musei fanno il grosso del lavoro; prepara bagagli per minime sotto zero.",
      3: "Le giornate salgono verso i 9C e i mercatini di Pasqua aprono sulla Piazza della Città Vecchia nella seconda metà del mese. Le folle sono ancora moderate e i prezzi restano sotto il picco primaverile.",
      4: "Primavera vera: circa 14C, fioriture nei parchi di Petrin e Letna, e le prime aperture di battelli sul fiume e birrerie all'aperto. I weekend si affollano intorno a Pasqua, quindi prenota in anticipo il circuito del castello.",
      5: "Uno dei mesi migliori, con massime vicine ai 19C e il festival musicale Primavera di Praga da metà maggio a inizio giugno. Prenota presto l'alloggio; i weekend di maggio vanno esauriti e i prezzi toccano i massimi di mezza stagione.",
      6: "Caldo, intorno ai 22C, con giornate lunghe e le birrerie all'aperto di Letna e Riegrovy Sady a pieno regime. Le folle crescono durante il mese ma restano lontane dalla calca di luglio.",
      7: "Alta stagione: giornate a 25C, Ponte Carlo stipato già alle 9 del mattino e le tariffe più alte dell'estate. Se devi venire adesso, fai le grandi attrazioni prima delle 8 e riserva i pomeriggi ai parchi e al fiume.",
      8: "Stesso caldo e stesse folle di luglio, con qualche temporale occasionale. Il lungofiume Naplavka e le zone balneabili delle isole assorbono bene il caldo, ma aspettati code al castello tutto il giorno.",
      9: "Massime intorno ai 20C, folle che si diradano dopo la prima settimana e il festival Dvorak Prague per gli amanti della classica. I prezzi calano; è l'alternativa intelligente all'estate.",
      10: "Giornate frizzanti a 13C e colori autunnali intensi a Petrin, Letna e Vysehrad. Il numero di turisti cala nettamente dopo metà mese e le tariffe degli hotel seguono.",
      11: "Grigio e freddo con massime intorno ai 7C, il periodo più tranquillo dell'anno finché i mercatini di Natale non aprono sulla Piazza della Città Vecchia a fine novembre. Fine novembre è il momento ideale: atmosfera da mercatino senza la densità di dicembre.",
      12: "I mercatini di Natale sulla Piazza della Città Vecchia e su Piazza Venceslao vanno da fine novembre al 6 gennaio e attirano folle enormi, soprattutto nei weekend. Aspettati minime sotto zero, vin brulé ovunque e prezzi degli hotel a dicembre ben sopra la norma invernale.",
    },
    climate: {
      1: { highC: 2, lowC: -3, rainyDays: 11 },
      2: { highC: 4, lowC: -2, rainyDays: 9 },
      3: { highC: 9, lowC: 1, rainyDays: 10 },
      4: { highC: 14, lowC: 4, rainyDays: 9 },
      5: { highC: 19, lowC: 8, rainyDays: 11 },
      6: { highC: 22, lowC: 11, rainyDays: 12 },
      7: { highC: 25, lowC: 13, rainyDays: 11 },
      8: { highC: 25, lowC: 13, rainyDays: 10 },
      9: { highC: 20, lowC: 9, rainyDays: 8 },
      10: { highC: 13, lowC: 5, rainyDays: 9 },
      11: { highC: 7, lowC: 1, rainyDays: 10 },
      12: { highC: 3, lowC: -2, rainyDays: 11 },
    },
    budgetLevel: "low",
    budgetPerDay: { budget: 55, mid: 110, high: 220 },
    tagline: "Skyline gotico, birra di livello mondiale, prezzi da piccola città.",
    heroIntro:
      "Praga concentra un castello, un ponte medievale e una città vecchia perfettamente intatta in un centro che si attraversa a piedi in mezz'ora. È una delle capitali classiche più economiche d'Europa, e la sola cultura della birra giustifica il viaggio. Tre giorni coprono l'essenziale senza correre; il trucco è programmare le grandi attrazioni evitando le ondate dei gruppi turistici.",
    accent: { from: "#8B7CF6", to: "#E85D75", ink: "#3B2E7E" },
    neighborhoodSlugs: [
      "stare-mesto",
      "mala-strana",
      "vinohrady",
      "zizkov",
      "karlin",
    ],
    nearbyCitySlugs: ["vienna", "budapest"],
  },

  neighborhoods: [
    {
      slug: "stare-mesto",
      citySlug: "prague",
      name: "Stare Mesto (Città Vecchia)",
      lat: 50.0875,
      lng: 14.421,
      bestFor: ["first-time", "romantic"],
      vibe: "Il cuore medievale intorno alla Piazza della Città Vecchia, tutto ciottoli, guglie e vicoli che finiscono in cortili nascosti. Di giorno è il chilometro quadrato più affollato del paese; dopo le 22 i gruppi turistici spariscono e diventa silenzioso in fretta. Tutto ciò che vuole chi visita per la prima volta è a dieci minuti a piedi.",
      pros: [
        "Ponte Carlo, Piazza della Città Vecchia e Josefov a breve distanza a piedi",
        "La scelta più ampia di hotel e appartamenti della città",
        "Zero mezzi pubblici necessari per un viaggio di 2 giorni",
      ],
      cons: [
        "I ristoranti sulle piazze principali sono trappole per turisti a prezzi gonfiati",
        "Rumore di strada e gruppi di addii al celibato nelle notti del weekend",
        "Paghi un sovrapprezzo di posizione del 20-30 percento rispetto a Vinohrady",
      ],
    },
    {
      slug: "mala-strana",
      citySlug: "prague",
      name: "Mala Strana",
      lat: 50.0878,
      lng: 14.4046,
      bestFor: ["romantic", "first-time", "family"],
      vibe: "Il quartiere barocco sotto il castello, sulla riva ovest della Moldava. Tetti rossi, giardini delle ambasciate e vicoli che si svuotano completamente quando i turisti giornalieri se ne vanno nel tardo pomeriggio. Alloggiare qui significa svegliarsi sul lato del castello, un vero vantaggio di tempistica.",
      pros: [
        "Castello di Praga, collina di Petrin e Muro di Lennon a due passi",
        "Le serate sono calme e davvero suggestive",
        "Ponte Carlo prima di colazione, senza folla",
      ],
      cons: [
        "Meno supermercati e opzioni economiche per mangiare rispetto alla riva est",
        "Strade ripide e ciottoli sono faticosi con valigie o passeggini",
      ],
    },
    {
      slug: "vinohrady",
      citySlug: "prague",
      name: "Vinohrady",
      lat: 50.0755,
      lng: 14.4443,
      bestFor: ["local", "budget", "family", "romantic"],
      vibe: "Una griglia residenziale di palazzi Art Nouveau, piazze alberate e la migliore densità di caffè di Praga. È qui che vivono davvero i locali che possono scegliere, e la scena gastronomica lo riflette. La città vecchia è a 10 minuti di metro o a 25 minuti a piedi.",
      pros: [
        "Il miglior cibo e caffè specialty della città a prezzi locali",
        "La birreria all'aperto di Riegrovy Sady e due grandi parchi",
        "Alloggi nettamente più economici rispetto al centro",
      ],
      cons: [
        "Devi spostarti per ogni attrazione principale, anche se il tragitto è breve",
        "Tranquillo di notte se cerchi la vita notturna sotto casa",
      ],
    },
    {
      slug: "zizkov",
      citySlug: "prague",
      name: "Zizkov",
      lat: 50.0833,
      lng: 14.4515,
      bestFor: ["nightlife", "budget", "local"],
      vibe: "Il quartiere dei bar più ruvido di Praga, famoso per rivendicare più pub pro capite di qualsiasi altro posto in Europa. È più trasandato della vicina Vinohrady, con birra economica, locali underground e la torre della TV in stile spaziale che incombe su tutto. Si sta gentrificando isolato dopo isolato, ma resta la base semi-centrale più economica.",
      pros: [
        "I prezzi più bassi per camere e birra vicino al centro",
        "Vera cultura da pub, quasi nessun ricarico turistico",
        "La collina di Vitkov offre una vista enorme e gratuita sulla città vecchia",
      ],
      cons: [
        "Alcuni isolati sembrano trascurati e pieni di graffiti",
        "20-30 minuti a piedi o in tram dalle attrazioni principali",
        "Rumore dei bar nel weekend sulle strade principali",
      ],
    },
    {
      slug: "karlin",
      citySlug: "prague",
      name: "Karlin",
      lat: 50.0925,
      lng: 14.4505,
      bestFor: ["local", "family", "budget"],
      vibe: "Un quartiere pianeggiante lungo il fiume, ricostruito dopo l'alluvione del 2002 come il rione moderno più curato di Praga. Viali larghi, palazzi ottocenteschi ristrutturati e una solida scena di brunch e birre artigianali pensata per i residenti, non per i turisti. A due fermate di metro dalla città vecchia.",
      pros: [
        "Strade pianeggianti adatte ai passeggini e percorsi lungo il fiume",
        "Ottimi ristoranti cechi moderni a prezzi corretti",
        "Collegamento veloce con il centro tramite la linea B della metro",
      ],
      cons: [
        "Nessuna attrazione principale nel quartiere stesso",
        "Vita notturna sottotono; i bar chiudono presto per gli standard di Praga",
      ],
    },
  ],

  pois: [
    {
      slug: "charles-bridge",
      citySlug: "prague",
      name: "Ponte Carlo",
      lat: 50.0865,
      lng: 14.4114,
      kind: "sight",
      needsBooking: false,
      tip: "Attraversalo prima delle 8 o dopo le 22; tra le 10 e le 18 si cammina spalla a spalla. Ignora i caricaturisti a metà ponte e salta i chioschi di cambio valuta alle due estremità, che offrono alcuni dei tassi peggiori della città.",
    },
    {
      slug: "prague-castle",
      citySlug: "prague",
      name: "Castello di Praga",
      lat: 50.09,
      lng: 14.4005,
      kind: "sight",
      needsBooking: true,
      tip: "Compra online il biglietto del circuito base ed entra all'apertura dei cancelli alle 9; i gruppi turistici arrivano in massa dalle 10. I cortili e le viste dai vicoli sono gratuiti, quindi se vuoi solo il panorama, attraversa senza biglietto e spendi quei soldi al caffè con terrazza del Palazzo Lobkowicz.",
    },
    {
      slug: "st-vitus-cathedral",
      citySlug: "prague",
      name: "Cattedrale di San Vito",
      lat: 50.0909,
      lng: 14.4005,
      kind: "sight",
      needsBooking: true,
      tip: "L'ingresso è incluso nel biglietto del circuito del castello; l'area gratuita appena dentro la porta non mostra quasi nulla, quindi paga per la navata completa. Vai dritto alla vetrata di Mucha nella terza cappella a sinistra prima che il corridoio si riempia.",
    },
    {
      slug: "old-town-square",
      citySlug: "prague",
      name: "Piazza della Città Vecchia e Orologio Astronomico",
      lat: 50.0875,
      lng: 14.4213,
      kind: "sight",
      needsBooking: false,
      tip: "Lo spettacolo dell'orologio dura 45 secondi e delude visto dalla strada affollata; guardalo una volta in un orario tranquillo come le 9, poi paga per salire sulla torre del Municipio della Città Vecchia, che ha la vista migliore sulla piazza. Non mangiare mai e non cambiare mai denaro sulla piazza stessa.",
    },
    {
      slug: "josefov",
      citySlug: "prague",
      name: "Quartiere Ebraico (Josefov)",
      lat: 50.09,
      lng: 14.418,
      kind: "museum",
      needsBooking: true,
      tip: "Un solo biglietto del Museo Ebraico copre le sinagoghe e il Vecchio Cimitero Ebraico; compralo online e inizia dalla Sinagoga Pinkas all'apertura delle 9, perché il sentiero del cimitero dietro di essa si intasa a metà mattina. Tutto chiude il sabato, quindi pianifica intorno allo Shabbat.",
    },
    {
      slug: "petrin-hill",
      citySlug: "prague",
      name: "Collina di Petrin e Torre panoramica",
      lat: 50.0833,
      lng: 14.395,
      kind: "viewpoint",
      needsBooking: false,
      tip: "La funicolare da Ujezd usa un normale biglietto dei trasporti pubblici, ma la coda spesso supera i 25 minuti di salita a piedi tra i frutteti, quindi controllala prima di decidere. I 299 gradini della torre battono le torri del castello per le foto dello skyline, perché il Castello di Praga stesso entra nell'inquadratura.",
    },
    {
      slug: "letna-park",
      citySlug: "prague",
      name: "Birreria all'aperto del Parco Letna",
      lat: 50.0955,
      lng: 14.416,
      kind: "park",
      needsBooking: false,
      tip: "Arriva un'ora prima del tramonto, prendi una birra al chiosco per circa 60 CZK e siediti su una panchina lungo il bordo sud per la vista classica sui ponti della Moldava. Si paga comodamente in contanti ed è aperta all'incirca da aprile a ottobre; in inverno il punto panoramico funziona ancora, il chiosco della birra no.",
    },
    {
      slug: "vysehrad",
      citySlug: "prague",
      name: "Fortezza di Vysehrad",
      lat: 50.0645,
      lng: 14.418,
      kind: "sight",
      needsBooking: false,
      tip: "I terreni, i bastioni e il cimitero dove sono sepolti Dvorak e Mucha sono tutti gratuiti; solo il piccolo tour delle casematte è a pagamento. Prendi la metro linea C fino a Vysehrad, percorri i bastioni in senso antiorario per le viste sul fiume ed esci in discesa attraverso le case cubiste fino a Naplavka.",
    },
    {
      slug: "wenceslas-square",
      citySlug: "prague",
      name: "Piazza Venceslao",
      lat: 50.081,
      lng: 14.428,
      kind: "sight",
      needsBooking: false,
      tip: "Considerala una passeggiata di 20 minuti per la storia del 1989 e la facciata del Museo Nazionale, non una destinazione. È il terreno ideale per le due truffe classiche: non usare mai gli uffici di cambio in strada e non fermare mai un taxi sulla piazza; ordina invece un Bolt o un Uber.",
    },
    {
      slug: "klementinum",
      citySlug: "prague",
      name: "Biblioteca Barocca del Klementinum",
      lat: 50.0863,
      lng: 14.4165,
      kind: "museum",
      needsBooking: true,
      tip: "Si entra solo con visita guidata, circa ogni 30 minuti, e i posti si esauriscono nei giorni affollati, quindi prenota online un tour mattutino. La sala della biblioteca barocca si ammira dalla soglia e non si può entrare nella stanza; la vera ricompensa è la galleria della Torre Astronomica alla fine.",
    },
    {
      slug: "lennon-wall",
      citySlug: "prague",
      name: "Muro di Lennon",
      lat: 50.0863,
      lng: 14.4069,
      kind: "sight",
      needsBooking: false,
      tip: "È una sosta di cinque minuti, ridipinto in continuazione, quindi non fare una deviazione solo per lui; inseriscilo in una passeggiata a Mala Strana tra Ponte Carlo e l'isola di Kampa. Prima delle 9 puoi fotografarlo senza una sola persona nell'inquadratura.",
    },
    {
      slug: "lokal-dlouha",
      citySlug: "prague",
      name: "Lokal Dlouha",
      lat: 50.0899,
      lng: 14.4257,
      kind: "food",
      needsBooking: false,
      tip: "È il punto di riferimento per la Pilsner Urquell fresca di tank e per gli onesti classici cechi come la svickova a prezzi corretti. Accetta prenotazioni e si riempie entro le 19; senza prenotazione conviene il bancone o arrivare prima delle 18, e ricorda che il conteggio delle birre viene segnato su un foglietto di carta che paghi alla fine.",
    },
    {
      slug: "strahov-library",
      citySlug: "prague",
      name: "Biblioteca del Monastero di Strahov",
      lat: 50.0862,
      lng: 14.3893,
      kind: "museum",
      needsBooking: true,
      tip: "Come al Klementinum, le sale Teologica e Filosofica si ammirano dalle soglie, quindi calcola 30-40 minuti e compra il permesso foto se vuoi scattare. Abbinala alla terrazza gratuita sotto il monastero, uno dei migliori punti panoramici su castello e città di Praga, poi scendi a piedi verso il castello.",
    },
    {
      slug: "naplavka",
      citySlug: "prague",
      name: "Lungofiume Naplavka",
      lat: 50.071,
      lng: 14.414,
      kind: "experience",
      needsBooking: false,
      tip: "Il sabato mattina ospita il miglior mercato contadino della città dalle 8 alle 14; nelle sere d'estate la banchina si trasforma in una scena di bar all'aperto con pub su battelli riconvertiti. Arriva prima delle 18 nei venerdì caldi o dovrai cercare a lungo un posto sul muretto.",
    },
  ],

  itineraries: [
    {
      citySlug: "prague",
      days: 2,
      summary:
        "Due giorni bastano per le attrazioni principali di Praga se alloggi in centro e parti presto, ma lascerai intatto il lato locale della città. Il centro è compatto: Ponte Carlo, la Piazza della Città Vecchia e il quartiere del castello distano 25 minuti a piedi l'uno dall'altro, quindi un piano serrato copre tutti e tre più il Quartiere Ebraico senza mezzi pubblici. Prendi come base Stare Mesto così entrambe le mattine iniziano a piedi. La struttura che funziona è una riva del fiume al giorno: il primo giorno per il cuore della città vecchia e Josefov, il secondo per la collina del castello, Strahov e Mala Strana. Prenota online i biglietti del circuito del castello e del Museo Ebraico prima di arrivare, perché le code sono l'unica vera minaccia per una visita di 48 ore. Ciò che sacrifichi sono Vysehrad, la scena dei caffè di Vinohrady e ogni serata lenta in una birreria all'aperto, che è esattamente ciò che un terzo giorno ti regala. I prezzi sono bassi per gli standard dell'Europa occidentale, quindi mangia bene; basta stare lontano dalle piazze principali.",
      stayNeighborhoodSlug: "stare-mesto",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Cuore della città vecchia e Quartiere Ebraico",
          morning: [
            {
              poiSlug: "old-town-square",
              text: "Inizia sulla Piazza della Città Vecchia verso le 8:30 quando è ancora tranquilla, guarda lo spettacolo dell'Orologio Astronomico delle 9, poi sali sulla torre del Municipio della Città Vecchia per la vista sui tetti prima che arrivino i primi gruppi turistici.",
              durationMin: 75,
            },
            {
              poiSlug: "josefov",
              text: "Cammina cinque minuti verso nord fino a Josefov e percorri il circuito del Museo Ebraico partendo dalla Sinagoga Pinkas, poi il Vecchio Cimitero Ebraico e la Sinagoga Spagnola. Compra il biglietto combinato online la sera prima.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "lokal-dlouha",
              text: "Pranzo al Lokal Dlouha con svickova o formaggio fritto e una Pilsner Urquell spillata dal tank. Arriva prima della ressa delle 13 o metti in conto una breve attesa.",
              durationMin: 75,
            },
            {
              poiSlug: "klementinum",
              text: "Fai un tour pomeridiano prenotato del Klementinum per vedere la sala della biblioteca barocca e salire sulla Torre Astronomica per una vista sui tetti della città vecchia.",
              durationMin: 60,
            },
            {
              text: "Vaga tra i vicoli fra il Klementinum e la Torre delle Polveri: Celetna, il cortile Ungelt e i portici intorno al Teatro degli Stati. Niente biglietti, niente programma, è la migliore ora gratuita della città vecchia.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "wenceslas-square",
              text: "Attraversa Piazza Venceslao al crepuscolo per la facciata del Museo Nazionale e il memoriale del 1989, trattandola come un passaggio più che come una tappa. Ordina un Bolt se ti serve un passaggio più tardi; non fermare mai un taxi qui.",
              durationMin: 30,
            },
            {
              poiSlug: "charles-bridge",
              text: "Concludi su Ponte Carlo dopo le 21, quando la folla si dirada e il castello è illuminato. È la foto per cui sei venuto, e a quest'ora puoi davvero fermarti a scattarla.",
              durationMin: 45,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Collina del castello e Mala Strana",
          morning: [
            {
              poiSlug: "prague-castle",
              text: "Fatti trovare ai cancelli del Castello di Praga per l'apertura delle 9 con il biglietto del circuito prenotato e visita il Vicolo d'Oro e il Vecchio Palazzo Reale prima dell'ondata di gruppi delle 10.",
              durationMin: 120,
            },
            {
              poiSlug: "st-vitus-cathedral",
              text: "All'interno del complesso, dedica alla Cattedrale di San Vito una visita completa con l'ingresso a pagamento alla navata e trova la vetrata di Mucha nella terza cappella a sinistra.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "strahov-library",
              text: "Cammina 15 minuti in salita fino alla Biblioteca del Monastero di Strahov per le due sale barocche, poi goditi la vista gratuita dalla terrazza sotto il monastero, che incornicia il castello e tutta la riva est.",
              durationMin: 75,
            },
            {
              poiSlug: "petrin-hill",
              text: "Scendi attraverso i frutteti di Petrin e, se le gambe reggono, sali i 299 gradini della torre panoramica per l'unica vista dello skyline che include il castello stesso.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "lennon-wall",
              text: "Scendi attraverso Mala Strana passando per il Muro di Lennon e l'isola di Kampa mentre i turisti giornalieri se ne vanno. Il quartiere dà il meglio di sé in quest'ora.",
              durationMin: 45,
            },
            {
              text: "Cena a Mala Strana in un ristorante tradizionale in cantina lontano da via Nerudova, alla larga dai menù turistici vicino al ponte. Piatti principali con birra dovrebbero costare 300-450 CZK a persona, non il doppio.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
    {
      citySlug: "prague",
      days: 3,
      summary:
        "Tre giorni sono la quantità giusta di tempo per Praga: abbastanza per ogni attrazione principale a un ritmo umano, più una serata che appartiene alla città e non alla lista delle cose da fare. Due giorni ti costringono a fare di corsa castello e città vecchia uno dietro l'altro; il terzo giorno aggiunge Vysehrad, la birreria all'aperto di Letna e il tempo di sederti in un pub senza guardare l'orologio. Alloggia a Mala Strana, sul lato del castello del fiume. Costa un po' di più dei quartieri orientali, ma ti svegli accanto alle attrazioni verso cui tutti gli altri devono spostarsi, e il quartiere diventa calmo e bellissimo dopo le 18. La forma del piano: primo giorno per la città vecchia e Josefov, secondo per il castello, Strahov e Petrin, terzo per Vysehrad, il lungofiume e Letna. Prenota tre cose online prima di arrivare: il circuito del castello, il biglietto del Museo Ebraico e un posto per il tour del Klementinum. Tutto il resto a Praga premia chi arriva presto piuttosto che chi paga di più.",
      stayNeighborhoodSlug: "mala-strana",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Città vecchia e Quartiere Ebraico",
          morning: [
            {
              poiSlug: "charles-bridge",
              text: "Dalla tua base a Mala Strana, attraversa Ponte Carlo prima delle 8 quando è quasi vuoto; è il miglior trucco di tempistica di Praga e non costa nulla.",
              durationMin: 30,
            },
            {
              poiSlug: "old-town-square",
              text: "Prosegui verso la Piazza della Città Vecchia per l'Orologio Astronomico e la salita alla torre del Municipio della Città Vecchia, da fare prima delle 10 per battere la marea.",
              durationMin: 75,
            },
            {
              poiSlug: "josefov",
              text: "Passa la tarda mattinata a Josefov sul circuito del Museo Ebraico: prima la Sinagoga Pinkas, poi il Vecchio Cimitero Ebraico prima che il sentiero si intasi, finendo alla Sinagoga Spagnola.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "lokal-dlouha",
              text: "Pranzo al Lokal Dlouha per la Pilsner dal tank per antonomasia e un piatto di svickova. Conserva il foglietto con il conteggio delle birre, lo salderai alla fine.",
              durationMin: 75,
            },
            {
              poiSlug: "klementinum",
              text: "Fai il tour prenotato del Klementinum per la biblioteca barocca e la vista dalla Torre Astronomica, poi gironzola per i vicoli verso il cortile Ungelt.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "wenceslas-square",
              text: "Percorri tutta Piazza Venceslao per il Museo Nazionale e il memoriale della Rivoluzione di Velluto. Evita gli uffici di cambio e i taxi in strada senza eccezioni.",
              durationMin: 30,
            },
            {
              text: "Riattraversa il fiume per cenare a Mala Strana; le strade dietro l'isola di Kampa nascondono ristoranti tranquilli dove una cena ceca completa con birra resta sotto i 500 CZK.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Castello, Strahov e Petrin",
          morning: [
            {
              poiSlug: "prague-castle",
              text: "Sali a piedi da Mala Strana ed entra al Castello di Praga alle 9 in punto con il biglietto del circuito comprato online, coprendo il Vicolo d'Oro e il Vecchio Palazzo Reale prima dei gruppi.",
              durationMin: 120,
            },
            {
              poiSlug: "st-vitus-cathedral",
              text: "Visita la Cattedrale di San Vito con l'ingresso completo a pagamento e vai dritto alla vetrata di Mucha prima che la navata si riempia.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "strahov-library",
              text: "Pranzo in una birreria di monastero vicino a Strahov, poi visita le sale Teologica e Filosofica della Biblioteca di Strahov e goditi il punto panoramico gratuito della terrazza sottostante.",
              durationMin: 120,
            },
            {
              poiSlug: "petrin-hill",
              text: "Percorri il crinale fino alla collina di Petrin attraverso i frutteti e sali sulla torre panoramica se la coda della funicolare in basso sembra lunga; la vista dalla torre batte ogni torre del castello perché il castello è dentro l'inquadratura.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "lennon-wall",
              text: "Scendi verso il Muro di Lennon e l'isola di Kampa per la passeggiata all'ora dorata, quando Mala Strana si svuota.",
              durationMin: 45,
            },
            {
              text: "Cena in un pub di Mala Strana con giardino, poi cammina fino alla riva del fiume di fronte al Teatro Nazionale per vedere il castello illuminato riflesso nella Moldava.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Vysehrad, il fiume e Letna",
          morning: [
            {
              poiSlug: "vysehrad",
              text: "Prendi la metro linea C fino a Vysehrad e percorri i bastioni della fortezza in senso antiorario per le viste sul fiume, poi visita il cimitero dove sono sepolti Dvorak e Mucha. I terreni sono gratuiti.",
              durationMin: 120,
            },
            {
              text: "Esci da Vysehrad in discesa passando davanti alle case cubiste su Rasinovo nabrezi, una deviazione architettonica di cinque minuti che quasi nessuno fa.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "naplavka",
              text: "Segui il fiume verso nord lungo Naplavka; il sabato il mercato contadino va avanti fino alle 14, gli altri giorni i caffè sui battelli funzionano per un pranzo lento sull'acqua.",
              durationMin: 105,
            },
            {
              text: "Tram o passeggiata verso il lato della città vecchia e scegli un museo che hai saltato: il Museo delle Arti Decorative o il Museo Alfons Mucha stanno entrambi in 90 minuti.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "letna-park",
              text: "Sali alla birreria all'aperto del Parco Letna un'ora prima del tramonto, compra una birra da 60 CZK al chiosco e prendi una panchina sopra i ponti. È la migliore serata economica di Praga.",
              durationMin: 120,
            },
            {
              text: "Concludi con una cena nella vicina Holesovice o di nuovo oltre il ponte nella città vecchia, a seconda di quanto ti trattiene il tramonto.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
    {
      citySlug: "prague",
      days: 4,
      summary:
        "Quattro giorni sono più che sufficienti per le attrazioni di Praga, ed è proprio questo il punto: il quarto giorno trasforma uno sprint tra monumenti in un vero viaggio. I giorni da uno a tre coprono la città vecchia, Josefov, il quartiere del castello e Vysehrad a un ritmo rilassato; il quarto giorno è tuo, per una giornata locale nei quartieri o per una gita a Kutna Hora con la sua cappella delle ossa e la cattedrale, a un'ora di treno. Con così tanto tempo, salta il centro e alloggia a Vinohrady. È a 10 minuti dalla Piazza della Città Vecchia in metro, costa dal 20 al 30 percento in meno a parità di camera, e i suoi caffè e le sue birrerie all'aperto sono la ragione per cui il quarto giorno esiste. La logica di una riva al giorno vale ancora: tieni insieme castello, Strahov e Petrin, tieni insieme città vecchia e Josefov, e non zigzagare attraverso la Moldava. Prenota in anticipo il circuito del castello, il Museo Ebraico e il Klementinum. Se eri indeciso tra tre e quattro giorni, il quarto è quello che ricorderai.",
      stayNeighborhoodSlug: "vinohrady",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Città vecchia e Quartiere Ebraico",
          morning: [
            {
              poiSlug: "old-town-square",
              text: "Metro da Vinohrady a Mustek e fatti trovare sulla Piazza della Città Vecchia per le 8:30 per l'Orologio Astronomico e la torre del Municipio della Città Vecchia prima che arrivino i gruppi.",
              durationMin: 90,
            },
            {
              poiSlug: "josefov",
              text: "Fai il circuito del Museo Ebraico a Josefov partendo dalla Sinagoga Pinkas all'apertura, poi il Vecchio Cimitero Ebraico e la Sinagoga Spagnola con il biglietto prenotato.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "lokal-dlouha",
              text: "Pranzo al Lokal Dlouha: Pilsner Urquell dal tank e classici cechi a prezzi onesti, a cinque minuti da Josefov.",
              durationMin: 75,
            },
            {
              poiSlug: "klementinum",
              text: "Fai un tour prenotato del Klementinum per la sala della biblioteca barocca e il panorama sulla città vecchia dalla Torre Astronomica.",
              durationMin: 60,
            },
            {
              text: "Passa il resto del pomeriggio tra i vicoli: cortile Ungelt, via Celetna e la Torre delle Polveri, tutto gratuito e da godersi senza un itinerario.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "charles-bridge",
              text: "Sali su Ponte Carlo dopo le 21 per la vista del castello illuminato senza la folla del giorno.",
              durationMin: 45,
            },
            {
              text: "Torna in metro a Vinohrady e concediti un bicchiere in un wine bar intorno a Namesti Miru; il quartiere serve vini moravi che non troverai in centro.",
              durationMin: 60,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Castello, Strahov e Petrin",
          morning: [
            {
              poiSlug: "prague-castle",
              text: "Il tram 22 da Vinohrady porta dritto al quartiere del castello; entra al Castello di Praga alle 9 con il biglietto online e smarca presto il Vicolo d'Oro e il Vecchio Palazzo Reale.",
              durationMin: 120,
            },
            {
              poiSlug: "st-vitus-cathedral",
              text: "Visita la Cattedrale di San Vito con il biglietto per la navata completa e cerca la vetrata di Mucha prima che i corridoi si riempiano.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "strahov-library",
              text: "Sali a piedi alla Biblioteca del Monastero di Strahov per le due sale barocche, poi trattieniti sulla terrazza gratuita sottostante per la vista definitiva su castello e città.",
              durationMin: 90,
            },
            {
              poiSlug: "petrin-hill",
              text: "Attraversa i frutteti fino alla collina di Petrin e sali sulla torre panoramica, oppure scendi con la funicolare fino a Ujezd se la giornata è stata lunga.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "lennon-wall",
              text: "Passeggia per Mala Strana al crepuscolo passando per il Muro di Lennon e l'isola di Kampa, l'ora migliore del quartiere.",
              durationMin: 45,
            },
            {
              text: "Fermati a cena in un ristorante in cantina di Mala Strana, poi fai un ultimo giro davanti alla Chiesa di San Nicola illuminata prima del tram verso casa.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Vysehrad, il fiume e Letna",
          morning: [
            {
              poiSlug: "vysehrad",
              text: "Metro fino a Vysehrad e percorri gratuitamente i bastioni della fortezza per il miglior panorama sul fiume della città, oltre al cimitero che custodisce Dvorak e Mucha.",
              durationMin: 120,
            },
            {
              text: "Scendi oltre le case cubiste fino alla riva del fiume; la deviazione aggiunge dieci minuti e un pezzo di architettura unico di Praga.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "naplavka",
              text: "Segui Naplavka verso nord lungo l'acqua; il sabato c'è il mercato contadino fino alle 14, gli altri giorni i caffè sui battelli ormeggiati gestiscono un pranzo lungo.",
              durationMin: 105,
            },
            {
              poiSlug: "wenceslas-square",
              text: "Taglia verso l'interno attraverso la Città Nuova fino a Piazza Venceslao per la facciata del Museo Nazionale e il memoriale del 1989, un passaggio di 30 minuti, poi esplora i passaggi della Lucerna con la sua statua del cavallo a testa in giù.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "letna-park",
              text: "Chiudi la giornata alla birreria all'aperto del Parco Letna sopra il fiume: birre da 60 CZK, platani e la vista del tramonto su tutti i ponti insieme.",
              durationMin: 120,
            },
            {
              text: "Cena a Holesovice sotto il parco o di nuovo a Vinohrady, entrambe a un breve tragitto di tram.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Giornata locale a Vinohrady o gita a Kutna Hora",
          morning: [
            {
              text: "Opzione A: dormi fino a tardi, poi fai un giro di caffè a Vinohrady intorno a Namesti Miru e alla piazza Jiriho z Podebrad, dove il mercato contadino si tiene quasi ogni mattina feriale. Opzione B: prendi il treno diretto dalla stazione centrale per Kutna Hora, circa un'ora, per l'Ossario di Sedlec, la cappella delle ossa; compra il biglietto combinato ossario e cattedrale al centro informazioni per saltare la fila sul posto.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              text: "L'opzione A continua con il parco Riegrovy Sady e un pranzo lento in un bistrot di Vinohrady, poi una passeggiata tra le facciate Art Nouveau del quartiere lungo via Manesova. Opzione B: cammina da Sedlec fino alla città vecchia di Kutna Hora per la Cattedrale di Santa Barbara e i vicoli medievali delle miniere d'argento prima del treno di ritorno nel tardo pomeriggio.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              text: "In entrambi i casi, finisci alla birreria all'aperto di Riegrovy Sady a Vinohrady, la controparte locale di Letna, con un prato rivolto verso la sagoma del castello al tramonto.",
              durationMin: 120,
            },
            {
              text: "Ultima cena in un ristorante ceco moderno a Vinohrady o Karlin; entrambi i quartieri propongono versioni raffinate di anatra e canederli a metà del prezzo della città vecchia.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
  ],
};

export default pragueIt;
