import type { CityData } from "../types";

const viennaIt: CityData = {
  city: {
    slug: "vienna",
    name: "Vienna",
    country: "Austria",
    countrySlug: "austria",
    lat: 48.2082,
    lng: 16.3738,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "VIE",
    airportToCenter:
      "La S-Bahn S7 collega l'aeroporto a Wien Mitte in circa 25 minuti per 4,30 EUR, ed è l'opzione sensata più economica. Il City Airport Train (CAT) copre lo stesso tragitto senza fermate in 16 minuti ma costa circa 14,90 EUR a tratta, quindi la maggior parte dei visitatori prende la S7.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10, 12],
    avoidMonths: [1],
    monthlyNotes: {
      1: "Freddo e grigio con massime intorno ai 3C e i mercatini di Natale già smontati, quindi è il mese più tranquillo ed economico. È anche il cuore della stagione dei balli: decine di balli formali si susseguono a gennaio, e la domanda alberghiera si impenna solo in quelle serate specifiche.",
      2: "Ancora vicino allo zero, ma la stagione dei balli viennesi tocca l'apice, culminando nell'Opera Ball all'Opera di Stato a fine febbraio, la serata più famosa del calendario mondano. Lontano dai balli la città è calma e le camere restano economiche; metti in valigia per minime sotto zero.",
      3: "Le massime salgono verso gli 11C e i giardini dei palazzi cominciano a riaprire per la stagione. Le folle sono ancora leggere e i prezzi restano sotto il picco primaverile, il che ne fa una finestra di bassa stagione intelligente prima che arrivi la domanda di Pasqua.",
      4: "Primavera vera e propria, intorno ai 15C, con i giardini di Schonbrunn e il Prater in fiore e i mercatini di Pasqua sulla Freyung e a Schonbrunn. I weekend si affollano attorno a Pasqua, quindi prenota in anticipo i biglietti a orario del palazzo.",
      5: "Uno dei mesi migliori, sui 20C circa, e le Wiener Festwochen, festival delle arti, aprono a metà maggio e proseguono fino a giugno con teatro, musica e installazioni in tutta la città. Prenota l'alloggio per tempo; i weekend di maggio toccano i massimi della bassa stagione.",
      6: "Caldo, intorno ai 24C con lunghe giornate di luce, la coda delle Wiener Festwochen e concerti all'aperto, incluso il gratuito Summer Night Concert dei Wiener Philharmoniker nei giardini di Schonbrunn. Le birrerie all'aperto e l'isola sul Danubio si riempiono; le folle crescono ma restano sotto il pieno dell'estate.",
      7: "Picco di caldo estivo verso i 26C, il mese turistico più affollato, e l'Opera di Stato chiude per la pausa estiva, quindi controlla il programma estivo se l'opera è il motivo della tua visita. Il Rathausplatz Film Festival si installa davanti al municipio con proiezioni gratuite e bancarelle di cibo per tutto il mese.",
      8: "Stesso caldo e stesse folle di luglio, con occasionali temporali pomeridiani e molti abitanti in vacanza. Il Rathausplatz Film Festival continua; l'isola sul Danubio e le zone balneabili dell'Alte Donau sono i posti migliori per sfuggire alla calura.",
      9: "Massime intorno ai 21C, folle che si diradano dopo la prima settimana e l'avvio della stagione culturale con la riapertura dell'opera e delle sale da concerto. I prezzi si allentano e il tempo resta affidabile, il che ne fa l'alternativa intelligente all'estate.",
      10: "Giornate frizzanti a 14C e forti colori autunnali nel Prater e nei parchi dei palazzi. I numeri dei turisti calano sensibilmente dopo metà mese e le tariffe alberghiere seguono; la Festa nazionale del 26 ottobre porta ingresso gratuito ai musei e parate militari sull'Heldenplatz.",
      11: "Grigio e freddo con massime intorno ai 7C, il tratto più tranquillo dell'anno fino all'apertura dei mercatini di Natale nella seconda metà del mese. La fine di novembre è un momento ideale: l'atmosfera del mercato di Rathausplatz senza la densità dei weekend di dicembre.",
      12: "I mercatini di Natale si tengono da metà novembre al 26 dicembre, il più grande a Rathausplatz con centinaia di bancarelle, più Belvedere, Schonbrunn, Spittelberg e Am Hof. Aspettati minime sotto zero, Punsch caldo ovunque, folle intense nei weekend e prezzi alberghieri di dicembre ben sopra la norma invernale.",
    },
    climate: {
      1: { highC: 3, lowC: -2, rainyDays: 8 },
      2: { highC: 5, lowC: -1, rainyDays: 7 },
      3: { highC: 11, lowC: 2, rainyDays: 8 },
      4: { highC: 15, lowC: 6, rainyDays: 8 },
      5: { highC: 20, lowC: 10, rainyDays: 9 },
      6: { highC: 24, lowC: 14, rainyDays: 10 },
      7: { highC: 26, lowC: 16, rainyDays: 9 },
      8: { highC: 26, lowC: 15, rainyDays: 9 },
      9: { highC: 21, lowC: 11, rainyDays: 6 },
      10: { highC: 14, lowC: 7, rainyDays: 7 },
      11: { highC: 7, lowC: 3, rainyDays: 8 },
      12: { highC: 4, lowC: -1, rainyDays: 8 },
    },
    budgetLevel: "mid",
    budgetPerDay: { budget: 70, mid: 140, high: 280 },
    tagline: "Palazzi imperiali, riti da caffè viennese, l'oro di Klimt.",
    heroIntro:
      "Vienna racchiude la corte degli Asburgo, un muro di musei di livello mondiale e una cultura del caffè ancora viva dentro un centro cinto dai binari del tram che si impara in un giorno. Le mete imperiali sono un po' distanti, quindi il trucco è raggruppare i palazzi in una giornata e l'anello del centro in un'altra. Tre giorni bastano per l'Hofburg, Schonbrunn, il Belvedere e il quartiere dei musei senza fretta, e resta ancora una serata per l'opera in piedi e un caffè con calma.",
    accent: { from: "#A83E5B", to: "#D9A441", ink: "#5E2438" },
    neighborhoodSlugs: [
      "innere-stadt",
      "leopoldstadt",
      "neubau",
      "mariahilf",
      "landstrasse",
    ],
    nearbyCitySlugs: ["prague", "budapest"],
  },

  neighborhoods: [
    {
      slug: "innere-stadt",
      citySlug: "vienna",
      name: "Innere Stadt (Città Vecchia)",
      lat: 48.2085,
      lng: 16.3721,
      bestFor: ["first-time", "romantic"],
      vibe: "Lo storico primo distretto dentro la Ringstrasse, costruito attorno al Duomo di Santo Stefano e al palazzo dell'Hofburg. È il cuore imperiale, tutto grandi viali, cortili con portici e i classici caffè viennesi, e tutto ciò che un visitatore alla prima volta desidera è a quindici minuti a piedi. Di sera si svuota delle folle diurne e diventa quieto ed elegante.",
      pros: [
        "Duomo, Hofburg, Opera di Stato e i musei principali tutti a piedi",
        "Qui convergono tutte le linee di tram e metro, così le gite fuori porta partono facili",
        "Zero trasporti necessari per un viaggio di 2 giorni",
      ],
      cons: [
        "Il distretto più caro della città per hotel e ristoranti",
        "I ristoranti attorno al duomo e al Graben sono trappole a prezzi da turisti",
        "Vita notturna autentica limitata; si svuota dopo cena",
      ],
    },
    {
      slug: "leopoldstadt",
      citySlug: "vienna",
      name: "Leopoldstadt",
      lat: 48.2167,
      lng: 16.3925,
      bestFor: ["local", "family", "budget"],
      vibe: "Il secondo distretto oltre il Canale del Danubio, sede del parco del Prater e di un mix in rapida trasformazione fatto della vecchia Vienna ebraica, di drogherie turche e balcaniche e di una giovane folla creativa. Il Karmelitermarkt fa da ancora a una scena gastronomica e di caffè genuinamente locale, e la distesa verde del Prater è a due passi. È a una fermata di metro dalla città vecchia ma con prezzi ben più bassi.",
      pros: [
        "Il parco del Prater, la Riesenrad e lunghi sentieri lungo il canale per le famiglie",
        "Karmelitermarkt e Volkertmarkt per cibo locale a prezzi giusti",
        "Rapidi collegamenti metro U1 e U2, a una fermata dal centro",
      ],
      cons: [
        "Nessuna grande attrazione nel distretto oltre al Prater",
        "Alcuni isolati vicino alle stazioni sembrano anonimi e di passaggio",
        "Serate residenziali tranquille, se cerchi vita notturna sotto casa",
      ],
    },
    {
      slug: "neubau",
      citySlug: "vienna",
      name: "Neubau",
      lat: 48.2011,
      lng: 16.3489,
      bestFor: ["local", "nightlife", "romantic"],
      vibe: "Il settimo distretto dietro il MuseumsQuartier, cuore del design e dello shopping indipendente di Vienna. I vicoli acciottolati Biedermeier di Spittelberg custodiscono osterie di vino e boutique, mentre la Neubaugasse allinea una lunga fila di concept store, torrefazioni e piccoli bar. È raggiungibile a piedi dai grandi musei, eppure sembra il posto dove i creativi locali passano davvero le serate.",
      pros: [
        "MuseumsQuartier e il Kunsthistorisches Museum a breve distanza a piedi",
        "I migliori negozi indipendenti, torrefazioni e cucina di piccoli piatti della città",
        "Scena di bar e osterie di vino vivace ma senza pretese la sera",
      ],
      cons: [
        "Per le mete imperiali del primo distretto vai a piedi o prendi un tram breve",
        "Gli isolati più popolari possono essere rumorosi nelle sere del weekend",
        "Meno hotel grandi; l'offerta pende verso appartamenti e boutique",
      ],
    },
    {
      slug: "mariahilf",
      citySlug: "vienna",
      name: "Mariahilf",
      lat: 48.1969,
      lng: 16.3489,
      bestFor: ["budget", "local", "first-time"],
      vibe: "Il sesto distretto costruito lungo la Mariahilfer Strasse, la via dello shopping più trafficata della città, con l'ampio Naschmarkt alla sua estremità inferiore. Bilancia praticità e carattere: negozi di catena e affidabili hotel di fascia media in alto, bancarelle di cibo e mercatino delle pulci del weekend giù verso il mercato. Il centro è a un quarto d'ora a piedi in linea retta o a due fermate di metro.",
      pros: [
        "Le bancarelle del Naschmarkt e il mercatino delle pulci del sabato sotto casa",
        "La scelta più ampia di solidi hotel di fascia media ed economica della città",
        "U3 diretta e la pedonale Mariahilfer Strasse verso il centro",
      ],
      cons: [
        "La via dello shopping principale è affollata e senza fascino nelle ore di punta",
        "Meno suggestivo di Neubau, appena più in salita",
        "I ristoranti del Naschmarkt sono più cari di quanto suggerisca la fama delle bancarelle",
      ],
    },
    {
      slug: "landstrasse",
      citySlug: "vienna",
      name: "Landstrasse",
      lat: 48.1969,
      lng: 16.3947,
      bestFor: ["first-time", "family", "budget"],
      vibe: "Il terzo distretto a sud-est dell'anello, avvolto attorno al Palazzo del Belvedere e ai suoi giardini all'italiana. È un quartiere residenziale calmo e ben collegato, con la Hundertwasserhaus, il Rochusmarkt e l'accesso facile al treno per l'aeroporto da Wien Mitte. Le camere costano meno del primo distretto, mentre il Belvedere e l'anello restano a distanza di passeggiata.",
      pros: [
        "Palazzo del Belvedere, giardini e Il Bacio di Klimt a pochi minuti",
        "Il nodo di Wien Mitte significa il collegamento più rapido all'aeroporto della città",
        "Più tranquillo ed economico del centro, pur restando abbastanza centrale da girare a piedi",
      ],
      cons: [
        "Esteso, quindi alcuni hotel distano una vera camminata dall'attrazione più vicina",
        "Meno ristoranti di spicco rispetto a Neubau o Leopoldstadt",
        "Al distretto manca un unico cuore vivace attorno a cui costruire la serata",
      ],
    },
  ],

  pois: [
    {
      slug: "schonbrunn-palace",
      citySlug: "vienna",
      name: "Castello di Schonbrunn",
      lat: 48.1849,
      lng: 16.3122,
      kind: "sight",
      needsBooking: true,
      tip: "Compra online un biglietto a orario, perché il palazzo ammette per fasce e in stagione le fasce in giornata si esauriscono entro mezzogiorno. Prendi la prima fascia verso le 8:30 o le ultime due ore della giornata per evitare il picco dei gruppi organizzati; i vasti giardini, la collina della Gloriette e il labirinto sono gratuiti, quindi riserva l'interno a pagamento al Grand Tour e passa il resto all'aperto.",
    },
    {
      slug: "hofburg",
      citySlug: "vienna",
      name: "Palazzo Hofburg",
      lat: 48.2065,
      lng: 16.3657,
      kind: "sight",
      needsBooking: true,
      tip: "L'unico Sisi Ticket qui copre gli Appartamenti Imperiali, il Sisi Museum e la Collezione d'Argenteria più il Grand Tour di Schonbrunn, quindi compralo una volta se prevedi entrambi i palazzi e salta due code separate. Entra negli Appartamenti Imperiali proprio all'apertura delle 9; l'audioguida è inclusa, e i cortili, l'Heldenplatz e i portici sono liberi da attraversare a qualsiasi ora.",
    },
    {
      slug: "stephansdom",
      citySlug: "vienna",
      name: "Duomo di Santo Stefano (Stephansdom)",
      lat: 48.2085,
      lng: 16.3731,
      kind: "sight",
      needsBooking: false,
      tip: "L'area in piedi sul fondo è gratuita, ma la navata, la visita alle catacombe e le due torri si pagano a parte, quindi decidi prima di entrare. I 343 gradini della torre sud offrono la salita e lo skyline migliori; la torre nord ha un ascensore fino alla campana Pummerin e code più corte, e il motivo del tetto piastrellato si fotografa meglio dall'angolo opposto della Stephansplatz.",
    },
    {
      slug: "belvedere",
      citySlug: "vienna",
      name: "Palazzo del Belvedere (Il Bacio di Klimt)",
      lat: 48.1915,
      lng: 16.3809,
      kind: "museum",
      needsBooking: true,
      tip: "Prenota un biglietto a orario per l'Upper Belvedere e vai all'apertura delle 9, perché la sala che ospita Il Bacio di Klimt è il singolo punto più affollato di Vienna entro la tarda mattinata. Vedi Il Bacio per primo prima di tornare indietro attraverso il resto della collezione, e salta il Lower Belvedere a meno che una mostra speciale non ti attiri; i giardini all'italiana tra i due palazzi sono gratuiti.",
    },
    {
      slug: "kunsthistorisches-museum",
      citySlug: "vienna",
      name: "Kunsthistorisches Museum",
      lat: 48.2039,
      lng: 16.3616,
      kind: "museum",
      needsBooking: true,
      tip: "La sala di Bruegel, la più grande raccolta dei suoi dipinti al mondo, è la ragione per venire, quindi sali subito alla pinacoteca prima che arrivino i gruppi. Fermati per un caffè e una fetta di torta sotto il caffè a cupola al primo piano, uno dei più maestosi caffè museali d'Europa; il biglietto copre anche la Tesoreria Imperiale nell'Hofburg in giorni separati se compri il pass combinato.",
    },
    {
      slug: "state-opera",
      citySlug: "vienna",
      name: "Opera di Stato di Vienna",
      lat: 48.2033,
      lng: 16.3691,
      kind: "experience",
      needsBooking: true,
      tip: "I biglietti in piedi costano da 13 a 18 EUR e vanno in vendita circa 80 minuti prima del sipario dalla porta laterale su Operngasse, quindi mettiti in coda almeno un'ora prima per un buon posto al parapetto. Lega la sciarpa al parapetto per tenere il posto, poi esci; se preferisci sederti, prenota i posti a sedere online con settimane di anticipo, e nota che l'opera chiude a luglio e agosto.",
    },
    {
      slug: "naschmarkt",
      citySlug: "vienna",
      name: "Naschmarkt",
      lat: 48.1985,
      lng: 16.3639,
      kind: "food",
      needsBooking: false,
      tip: "Vieni prima di mezzogiorno per curiosare tra le drogherie, i banchi di formaggi e le bancarelle mediorientali prima che i ristoranti con servizio al tavolo prendano il sopravvento e i prezzi salgano. Il mercatino delle pulci del sabato all'estremità di Kettenbruckengasse va da circa le 6:30 fino a metà pomeriggio ed è il vero richiamo; il mercato è chiuso la domenica, quindi pianifica la visita per una mattina infrasettimanale o un sabato.",
    },
    {
      slug: "prater-riesenrad",
      citySlug: "vienna",
      name: "Prater e Riesenrad",
      lat: 48.2166,
      lng: 16.3958,
      kind: "park",
      needsBooking: false,
      tip: "Il parco in sé e il suo lungo viale di castagni sono gratuiti e aperti a tutte le ore; solo la ruota panoramica Riesenrad e le giostre del luna park si pagano. Sali sulla Riesenrad verso il tramonto per la luce migliore e l'attesa più breve, oppure salta la ruota e percorri la Hauptallee, poi mangia in una birreria all'aperto come lo Schweizerhaus per uno Stelze e mezzo litro di birra.",
    },
    {
      slug: "cafe-central",
      citySlug: "vienna",
      name: "Cafe Central",
      lat: 48.2103,
      lng: 16.3656,
      kind: "food",
      needsBooking: false,
      tip: "La sala a volte è spettacolare, ma la coda fuori dalla porta arriva spesso a 30 minuti nelle ore di punta; arriva all'apertura delle 8 o dopo le 15 per entrare senza attese. Il galateo del caffè viennese fa sì che un solo Melange ti garantisca il tavolo per ore senza fretta, quindi ordina un caffè e una fetta di Sachertorte e resta; per lo stesso rito senza fila, prova il vicino Cafe Sperl o il Cafe Landtmann.",
    },
    {
      slug: "albertina",
      citySlug: "vienna",
      name: "Albertina",
      lat: 48.2043,
      lng: 16.3682,
      kind: "museum",
      needsBooking: true,
      tip: "Prenota online per saltare la coda dei biglietti, poi comincia dalla collezione permanente da Monet a Picasso al piano superiore prima che la grande mostra temporanea attiri le folle. Le sale di Stato asburgiche lungo l'ingresso sono incluse e spesso trascurate; la terrazza sopra l'Opera e l'Albertinaplatz è gratuita e offre una rara vista dall'alto sull'anello.",
    },
    {
      slug: "hundertwasserhaus",
      citySlug: "vienna",
      name: "Hundertwasserhaus",
      lat: 48.2071,
      lng: 16.3941,
      kind: "sight",
      needsBooking: false,
      tip: "È un edificio residenziale, quindi la facciata ondulata e i tetti piantumati si vedono solo dalla strada, il che richiede dieci minuti. Fotografala dall'angolo tra Kegelgasse e Lowengasse per l'inquadratura piena, poi attraversa alla galleria commerciale gratuita Hundertwasser Village di fronte; abbinala al vicino museo Kunst Haus Wien se vuoi la versione al chiuso a pagamento.",
    },
    {
      slug: "museumsquartier",
      citySlug: "vienna",
      name: "MuseumsQuartier",
      lat: 48.2035,
      lng: 16.3585,
      kind: "experience",
      needsBooking: false,
      tip: "Il cortile con le sue chaise longue Enzi colorate è gratuito e aperto tutto il giorno, un posto ideale per un drink tra una visita e l'altra; il Leopold Museum qui custodisce la più grande collezione di Egon Schiele al mondo e richiede un biglietto separato. Compra il biglietto combinato MQ solo se prevedi di visitare sia il Leopold sia il mumok, il museo d'arte moderna, nello stesso giorno.",
    },
    {
      slug: "karlskirche",
      citySlug: "vienna",
      name: "Karlskirche",
      lat: 48.1985,
      lng: 16.3719,
      kind: "sight",
      needsBooking: false,
      tip: "Il biglietto a pagamento include un ascensore panoramico che sale dentro la cupola fino a sfiorare gli affreschi del soffitto, ed è la ragione per pagare l'ingresso invece di ammirare solo la facciata barocca dalla vasca riflettente all'esterno. Vai in una mattina infrasettimanale, quando l'ascensore non ha coda; concerti delle Quattro Stagioni di Vivaldi si tengono quasi ogni sera, ma la visita diurna alla cupola è il miglior rapporto qualità-prezzo.",
    },
    {
      slug: "spanish-riding-school",
      citySlug: "vienna",
      name: "Scuola di Equitazione Spagnola",
      lat: 48.2075,
      lng: 16.3665,
      kind: "experience",
      needsBooking: true,
      tip: "Gli spettacoli completi degli stalloni Lipizzani si esauriscono con settimane di anticipo e costano da circa 25 EUR, ma le sessioni di addestramento mattutine sono molto più economiche, sui 15 EUR, e ti fanno vedere gli stessi cavalli provare nella stessa sala barocca. Prenota online l'addestramento mattutino, arriva all'apertura delle porte, e nota che non c'è addestramento il lunedì né durante le ferie estive della scuderia.",
    },
  ],

  itineraries: [
    {
      citySlug: "vienna",
      days: 2,
      summary:
        "Due giorni bastano per le mete imperiali di punta di Vienna se alloggi in centro e parti presto, ma lascerai il quartiere dei musei e i distretti locali appena sfiorati. Il centro è compatto dentro la Ringstrasse: il Duomo di Santo Stefano, l'Hofburg e l'Opera di Stato stanno a un quarto d'ora a piedi, e i tram chiudono l'anello. Sistemati nell'Innere Stadt così entrambe le mattine iniziano a piedi. La struttura che funziona è una giornata di città imperiale e una giornata di palazzi: il primo giorno per il duomo, l'Hofburg e un caffè, il secondo a Schonbrunn la mattina e al Belvedere per Il Bacio di Klimt il pomeriggio. Prenota online prima di arrivare i biglietti a orario di Schonbrunn e Belvedere e il Sisi Ticket dell'Hofburg, perché le code e le fasce esaurite sono l'unica vera minaccia a una visita di 48 ore. Ciò a cui rinunci è il Kunsthistorisches Museum, il MuseumsQuartier e ogni serata lenta a Neubau, che è esattamente ciò che compra un terzo giorno. Mangia fuori dalla piazza del duomo, non sopra di essa.",
      stayNeighborhoodSlug: "innere-stadt",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Centro imperiale e l'Hofburg",
          morning: [
            {
              poiSlug: "stephansdom",
              text: "Comincia al Duomo di Santo Stefano verso le 8:30 mentre la piazza è ancora tranquilla, percorri la navata gratuita sul fondo, poi sali i 343 gradini della torre sud per lo skyline del tetto piastrellato prima che atterrino i primi gruppi organizzati.",
              durationMin: 75,
            },
            {
              poiSlug: "hofburg",
              text: "Cammina dieci minuti fino all'Hofburg ed entra negli Appartamenti Imperiali e nel Sisi Museum all'apertura delle 9 con il tuo Sisi Ticket prenotato. L'audioguida inclusa ti accompagna attraverso la corte asburgica in circa novanta minuti.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "cafe-central",
              text: "Pranzo e caffè al Cafe Central pochi minuti più a nord; arriva dopo il picco di mezzogiorno, prendi un piccolo piatto e un Melange, e sfrutta la regola del caffè viennese secondo cui un caffè tiene il tavolo per tutto il tempo che vuoi.",
              durationMin: 90,
            },
            {
              poiSlug: "albertina",
              text: "Torna oltre l'Hofburg fino all'Albertina per la collezione da Monet a Picasso e le sale di Stato asburgiche, poi affacciati sulla terrazza gratuita sopra l'Opera per una vista dall'alto sull'anello.",
              durationMin: 105,
            },
          ],
          evening: [
            {
              poiSlug: "state-opera",
              text: "Mettiti in coda alla porta laterale su Operngasse dell'Opera di Stato circa un'ora prima del sipario per un biglietto in piedi da 13 a 18 EUR. Lega la sciarpa al parapetto per tenere il posto, poi segui un atto di qualunque cosa vada in scena quella sera.",
              durationMin: 120,
            },
            {
              text: "Cena in un tradizionale Beisl del primo distretto fuori dalle piazze principali, in un posto come il Gmoakeller o il bar dello Zum Schwarzen Kameel, per una Wiener Schnitzel e un bicchiere di Gruner Veltliner senza il ricarico della Stephansplatz.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Schonbrunn e il Belvedere",
          morning: [
            {
              poiSlug: "schonbrunn-palace",
              text: "Prendi la metro U4 fino a Schonbrunn e usa la tua fascia delle 8:30 per il Grand Tour dell'interno del palazzo prima che arrivino i pullman. Poi sali alla collina gratuita della Gloriette per la classica vista all'indietro sul palazzo.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "belvedere",
              text: "Metro e tram fino all'Upper Belvedere per il tuo biglietto a orario del primo pomeriggio e vai dritto a Il Bacio di Klimt prima che la sala si riempia, poi torna indietro attraverso il resto della collezione.",
              durationMin: 120,
            },
            {
              text: "Scendi attraverso i giardini all'italiana gratuiti tra l'Upper e il Lower Belvedere, la migliore vista senza biglietto in questa parte della città, e verso l'anello per il ritorno a piedi in hotel.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "karlskirche",
              text: "Fermati alla Karlskirche lungo il tragitto e paga l'ascensore della cupola che sale fino agli affreschi del soffitto; una prima serata infrasettimanale di solito non ha coda per la piattaforma panoramica.",
              durationMin: 60,
            },
            {
              text: "Concludi con la cena verso l'estremità del Naschmarkt del sesto distretto, poi un ultimo giro illuminato oltre l'Opera e i cancelli dell'Hofburg, che al meglio sono vuoti dopo il buio.",
              durationMin: 105,
            },
          ],
        },
      ],
    },
    {
      citySlug: "vienna",
      days: 3,
      summary:
        "Tre giorni sono la giusta quantità di tempo per Vienna: bastano per i palazzi, il duomo e i grandi musei a un ritmo umano, più una serata che appartiene alla città e non alla lista di cose da spuntare. Due giorni ti costringono a correre Schonbrunn e il Belvedere uno dietro l'altro; il terzo giorno aggiunge il Kunsthistorisches Museum, il MuseumsQuartier e il tempo per sedersi in un caffè senza guardare l'orologio. Alloggia a Neubau, dietro il quartiere dei musei. Costa meno del primo distretto, e le sue torrefazioni, osterie di vino e negozi indipendenti sono dove la città passa davvero le serate, a breve distanza a piedi da ogni grande attrazione. La forma del piano: il primo giorno per l'anello del centro e l'Hofburg, il secondo per Schonbrunn e il Belvedere, il terzo per il quartiere dei musei e un lento pomeriggio locale. Prenota tre cose online prima di arrivare: la fascia a orario di Schonbrunn, quella del Belvedere e il Sisi Ticket dell'Hofburg. Tutto il resto a Vienna premia il presentarsi presto più che pagare di più.",
      stayNeighborhoodSlug: "neubau",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Anello del centro e l'Hofburg",
          morning: [
            {
              poiSlug: "stephansdom",
              text: "Da Neubau cammina o prendi la U3 fino a Stephansplatz e raggiungi il Duomo di Santo Stefano prima delle 9; fai la navata gratuita e la salita della torre sud mentre la piazza è ancora vuota.",
              durationMin: 75,
            },
            {
              poiSlug: "hofburg",
              text: "Percorri il Graben e il Kohlmarkt fino all'Hofburg ed entra negli Appartamenti Imperiali e nel Sisi Museum all'apertura con il tuo Sisi Ticket, con l'audioguida inclusa a scandire le sale asburgiche.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "cafe-central",
              text: "Pranzo da caffè viennese al Cafe Central appena a nord dell'Hofburg; vai dopo che la coda di mezzogiorno si assottiglia, ordina un Melange e una Sachertorte, e accomodati senza alcuna pressione ad andartene.",
              durationMin: 90,
            },
            {
              poiSlug: "albertina",
              text: "Prendi poi l'Albertina prenotata per le sale da Monet a Picasso e gli appartamenti di Stato, chiudendo sulla terrazza gratuita sopra l'Opera e l'Albertinaplatz.",
              durationMin: 105,
            },
          ],
          evening: [
            {
              poiSlug: "state-opera",
              text: "Mettiti in coda alla porta su Operngasse dell'Opera di Stato un'ora prima del sipario per un biglietto in piedi, lega la sciarpa al parapetto e goditi un atto; l'intero rito resta ben sotto i 20 EUR.",
              durationMin: 120,
            },
            {
              text: "Torna a Neubau per cena tra i vicoli di Spittelberg, dove osterie di vino Biedermeier e bistrot di piccoli piatti servono meglio e a meno di qualsiasi cosa in Stephansplatz.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Schonbrunn e il Belvedere",
          morning: [
            {
              poiSlug: "schonbrunn-palace",
              text: "Prendi la U4 fino a Schonbrunn per una fascia delle 8:30 sul Grand Tour prima dell'arrivo dei pullman, poi sali alla Gloriette gratuita per la vista da cartolina giù sul palazzo e i giardini.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "belvedere",
              text: "Attraversa la città fino all'Upper Belvedere per un biglietto a orario del primo pomeriggio e vai dritto a Il Bacio di Klimt prima che la folla cresca, poi prendi il resto della collezione austriaca con calma.",
              durationMin: 120,
            },
            {
              poiSlug: "hundertwasserhaus",
              text: "Cammina quindici minuti a est fino alla Hundertwasserhaus per la facciata ondulata e i giardini sui tetti, inquadrati al meglio dall'angolo di Kegelgasse, poi affacciati alla galleria gratuita Hundertwasser Village di fronte.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "karlskirche",
              text: "Dirigiti alla Karlskirche e prendi l'ascensore della cupola fino agli affreschi; una prima serata infrasettimanale di solito significa nessuna coda per la piattaforma panoramica dentro la cupola.",
              durationMin: 60,
            },
            {
              text: "Cena attorno al Naschmarkt o al basso Mariahilf, poi un ultimo bicchiere di nuovo a Neubau; i piccoli bar del distretto restano vivaci più a lungo delle quiete strade del primo distretto.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Quartiere dei musei e un pomeriggio locale",
          morning: [
            {
              poiSlug: "kunsthistorisches-museum",
              text: "Sii al Kunsthistorisches Museum per l'apertura e sali dritto alla sala di Bruegel, la più grande al mondo, prima che arrivino i gruppi, poi fermati per un caffè sotto il maestoso caffè a cupola al primo piano.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "museumsquartier",
              text: "Attraversa al cortile del MuseumsQuartier per un drink sulle chaise longue Enzi colorate, poi scegli un museo all'interno: il Leopold per la più grande collezione di Schiele al mondo, o il mumok per l'arte moderna.",
              durationMin: 150,
            },
            {
              poiSlug: "naschmarkt",
              text: "Scendi al Naschmarkt per un giro tardivo tra drogherie e bancarelle di cibo; un pomeriggio infrasettimanale è più calmo della ressa del mercatino delle pulci del sabato, anche se i posti con servizio al tavolo sono più cari di quanto sembrino.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              text: "Passa l'ora dorata su Neubaugasse e tra i vicoli di Spittelberg, curiosando tra torrefazioni e negozi di design mentre il distretto si risveglia per la sera.",
              durationMin: 60,
            },
            {
              text: "Ultima cena in un Beisl di Neubau o in un bar di vini naturali, il contrappunto viennese moderno ai caffè imperiali, con schnitzel o piccoli piatti di stagione e una bottiglia di bianco austriaco.",
              durationMin: 105,
            },
          ],
        },
      ],
    },
    {
      citySlug: "vienna",
      days: 4,
      summary:
        "Quattro giorni sono più che sufficienti per le attrazioni di Vienna, e questo è il punto: il quarto giorno trasforma una corsa ai monumenti in un vero viaggio. I giorni da uno a tre coprono l'anello del centro, l'Hofburg, Schonbrunn, il Belvedere e i grandi musei a ritmo rilassato; il quarto giorno è lento, oltre il Canale del Danubio a Leopoldstadt, costruito attorno al Prater, ai mercati locali e al lungo rito del caffè viennese che il ritmo imperiale non concede mai. Con tutto questo tempo, alloggia a Leopoldstadt: è a una fermata di metro dalla città vecchia, più economico per camere equivalenti, e i suoi caffè del Karmelitermarkt e il verde Prater sono il motivo per cui il quarto giorno esiste. La logica delle giornate imperiali regge ancora: tieni Schonbrunn e il Belvedere nella loro giornata, tieni insieme il quartiere dei musei, e non zigzagare attraverso l'anello. Prenota in anticipo la fascia di Schonbrunn, quella del Belvedere e il Sisi Ticket dell'Hofburg, e aggiungi una sessione di addestramento mattutino della Scuola di Equitazione Spagnola se vuoi i Lipizzani a poco. Se dovessi scegliere tra tre e quattro giorni, il quarto è quello che ricorderai.",
      stayNeighborhoodSlug: "leopoldstadt",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Anello del centro e l'Hofburg",
          morning: [
            {
              poiSlug: "stephansdom",
              text: "Prendi la U1 per una fermata da Leopoldstadt a Stephansplatz e raggiungi il Duomo di Santo Stefano entro le 8:30; fai la navata gratuita e la salita della torre sud prima che la piazza si riempia.",
              durationMin: 75,
            },
            {
              poiSlug: "hofburg",
              text: "Percorri il Graben fino all'Hofburg ed entra negli Appartamenti Imperiali e nel Sisi Museum all'apertura con il tuo Sisi Ticket, lasciando che l'audioguida inclusa detti il ritmo attraverso le sale asburgiche.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "cafe-central",
              text: "Pranzo da caffè viennese al Cafe Central; arriva dopo la coda di mezzogiorno, ordina un Melange e usa la regola del caffè-che-tiene-il-tavolo per rallentare la giornata.",
              durationMin: 90,
            },
            {
              poiSlug: "albertina",
              text: "Visita l'Albertina per la collezione da Monet a Picasso e le sale di Stato, chiudendo sulla terrazza gratuita sopra l'Opera per la vista dall'alto sull'anello.",
              durationMin: 105,
            },
          ],
          evening: [
            {
              poiSlug: "state-opera",
              text: "Mettiti in coda alla porta su Operngasse dell'Opera di Stato un'ora prima del sipario per un biglietto in piedi sotto i 20 EUR, tieni il tuo posto al parapetto con una sciarpa, e guarda un atto.",
              durationMin: 120,
            },
            {
              text: "Prendi la U1 di ritorno oltre il canale per cena in un Beisl di Leopoldstadt vicino al Karmelitermarkt, dove le cucine locali servono schnitzel e vino austriaco a prezzi di quartiere.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Schonbrunn e il Belvedere",
          morning: [
            {
              poiSlug: "schonbrunn-palace",
              text: "Spingiti fino a Schonbrunn sulla U4 per una fascia del Grand Tour delle 8:30 davanti ai pullman, poi sali alla collina gratuita della Gloriette per la classica vista giù sul palazzo e il suo parterre.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "belvedere",
              text: "Attraversa fino all'Upper Belvedere per un biglietto a orario del primo pomeriggio e vai dritto a Il Bacio di Klimt prima che la sala si intasi, poi prendi il resto della collezione austriaca lentamente.",
              durationMin: 120,
            },
            {
              text: "Percorri i giardini all'italiana gratuiti giù verso il Lower Belvedere e verso l'anello, la migliore veduta senza biglietto in questo quartiere, con lo skyline della città incorniciato dietro il parterre.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "karlskirche",
              text: "Fermati alla Karlskirche per l'ascensore della cupola fino agli affreschi; una serata infrasettimanale di solito non ha coda per la piattaforma panoramica dentro la cupola.",
              durationMin: 60,
            },
            {
              text: "Cena attorno al Naschmarkt o a Mariahilf, poi una lenta camminata di ritorno oltre il canale fino a Leopoldstadt mentre le luci dell'anello si accendono.",
              durationMin: 105,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Quartiere dei musei ed extra imperiali",
          morning: [
            {
              poiSlug: "spanish-riding-school",
              text: "Prenota una sessione di addestramento mattutino alla Scuola di Equitazione Spagnola, circa 15 EUR contro i 25 e passa di uno spettacolo completo, e guarda gli stalloni Lipizzani provare nella sala barocca; non c'è addestramento il lunedì.",
              durationMin: 90,
            },
            {
              poiSlug: "kunsthistorisches-museum",
              text: "Cammina fino al Kunsthistorisches Museum e sali per prima cosa alla sala di Bruegel, poi fai una pausa per caffè e torta sotto il caffè a cupola del primo piano.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "museumsquartier",
              text: "Attraversa al MuseumsQuartier per un drink sulle chaise longue Enzi, poi scegli un interno: il Leopold Museum per la più grande collezione di Schiele o il mumok per l'arte moderna.",
              durationMin: 150,
            },
            {
              poiSlug: "naschmarkt",
              text: "Rilassati al Naschmarkt con un giro tardivo tra le bancarelle di cibo; un pomeriggio infrasettimanale è la finestra calma tra il picco del pranzo e la chiusura.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Ora dorata su Neubaugasse e tra i vicoli di Spittelberg, curiosando tra torrefazioni e negozi di design prima di cena.",
              durationMin: 60,
            },
            {
              text: "Cena in un bar di vini naturali di Neubau o in un Beisl per il lato viennese moderno della città, poi il breve salto in U-Bahn di ritorno a Leopoldstadt.",
              durationMin: 105,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Prater, Leopoldstadt e la giornata del caffè",
          morning: [
            {
              text: "Comincia con calma al Karmelitermarkt a Leopoldstadt, dove le bancarelle e i caffè locali scandiscono una mattina rilassata, specie il mercato del sabato; fai colazione in un caffè del mercato anziché in uno turistico del primo distretto.",
              durationMin: 90,
            },
            {
              poiSlug: "prater-riesenrad",
              text: "Entra nel Prater e percorri il lungo viale di castagni Hauptallee, entrambi gratuiti e aperti a tutte le ore, poi sali sulla ruota panoramica Riesenrad per la vista sulla città e sul Danubio.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Pranzo in una birreria all'aperto del Prater come lo Schweizerhaus per uno Stelze e mezzo litro di birra sotto gli alberi, il classico pasto viennese della bella stagione.",
              durationMin: 105,
            },
            {
              poiSlug: "hundertwasserhaus",
              text: "Attraversa a sud fino alla Hundertwasserhaus per la facciata ondulata e i giardini sui tetti, inquadrati dall'angolo di Kegelgasse, e uno sguardo alla galleria gratuita Hundertwasser Village di fronte.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Torna in un grande caffè viennese per l'ultima lunga sosta del viaggio: Cafe Landtmann o Cafe Sperl per un Melange e una fetta di torta, senza fretta, come il rito è pensato per funzionare.",
              durationMin: 90,
            },
            {
              text: "Ultima cena di nuovo a Leopoldstadt vicino al canale, poi una camminata finale lungo l'acqua con lo skyline illuminato del primo distretto dall'altra parte.",
              durationMin: 105,
            },
          ],
        },
      ],
    },
  ],
};

export default viennaIt;
