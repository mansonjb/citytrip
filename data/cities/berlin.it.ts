import type { CityData } from "../types";

const berlinIt: CityData = {
  city: {
    slug: "berlin",
    name: "Berlino",
    country: "Germania",
    countrySlug: "germany",
    lat: 52.52,
    lng: 13.405,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "BER",
    airportToCenter:
      "Dal BER Brandenburg, il FEX Airport Express raggiunge la Hauptbahnhof in circa 30 min, oppure le linee S-Bahn S9 e S45 arrivano in centro in 40-45 min. Per tutte serve un biglietto per le zone ABC di circa 4,70 EUR, poiché l'aeroporto si trova nella zona C esterna. Un taxi fino a Mitte costa all'incirca 45-60 EUR e 40 min senza traffico.",
    centerWalkable: false,
    bestMonths: [5, 6, 7, 9],
    avoidMonths: [1],
    monthlyNotes: {
      1: "Il mese più freddo e più grigio, con massime vicine ai 3C, spesso sotto zero di notte, giornate corte e poca luce. Le folle sono minime e gli hotel ai prezzi più bassi, ma i mercatini di Natale hanno già chiuso all'inizio di gennaio e c'è poco richiamo stagionale oltre alla quiete del dopo Capodanno.",
      2: "Ancora freddo, sui 4-5C e spesso umido, anche se la Berlinale, il festival internazionale del cinema di metà febbraio, porta dieci giorni di anteprime, red carpet e proiezioni pubbliche in tutta la città. Prenota in anticipo se vieni per il festival, altrimenti è un periodo tranquillo ed economico per vedere i musei senza code.",
      3: "Le massime salgono verso i 9C man mano che l'inverno allenta la presa, con giornate che si allungano ma un tempo mutevole e ventoso. Le folle restano scarse e i prezzi bassi, il che ne fa un mese di buon valore se ti attrezzi per freddo e pioggia e ti concentri sui luoghi al coperto.",
      4: "La primavera arriva a tratti attorno ai 13C, con i ciliegi in fiore lungo alcuni tratti dell'ex Muro e i primi pomeriggi tiepidi che attirano la gente nei parchi. La Pasqua può far salire i prezzi degli hotel per qualche giorno, ma le folle sono ancora moderate e la luce migliora in fretta.",
      5: "Uno dei mesi migliori, sui 19-20C, con lunghe serate, parchi verdi e le birrerie all'aperto che riaprono in forze. Il Karneval der Kulturen riempie Kreuzberg di una sfilata di strada e bancarelle di cibo nel fine settimana di Pentecoste, quindi aspettati qualche giornata vivace e affollata attorno a quella data.",
      6: "Caldo e vivace, sui 22-23C, con le giornate più lunghe dell'anno e la stagione dei bagni nei laghi ormai aperta al Wannsee e al Müggelsee. Le folle crescono e i rooftop bar e le birrerie all'aperto entrano nel vivo, ma i prezzi degli hotel sono ancora sotto i picchi della piena estate.",
      7: "Piena estate, sui 24-25C, calda e affollata, con cinema all'aperto, spiagge sui laghi e serate in discoteca all'aperto al culmine. È il mese migliore per la vita all'aria aperta della città, quindi prenota l'alloggio per tempo e aspettati che le birrerie all'aperto più popolari siano affollate nelle sere di sole.",
      8: "Ancora caldo, sui 24C, ma a volte afoso con temporali estivi, e molti berlinesi vanno in vacanza, così la città sembra un po' più tranquilla di luglio. Resta un mese forte per laghi, parchi e lunghe serate di luce, con i festival che proseguono per tutto il calendario estivo.",
      9: "Caldo all'inizio e poi in calo verso i 19C, forse il mese migliore in assoluto: giornate miti, folle estive che si diradano e un clima da birreria all'aperto che tiene per la prima metà. La stagione culturale autunnale riparte, dandoti sia la vita all'aria aperta sia la riapertura di gallerie e sale da concerto.",
      10: "Più fresco, sui 13-14C, con il primo vero freddo autunnale e giornate più corte, anche se il Festival delle Luci a inizio mese proietta illuminazioni sui principali monumenti dopo il tramonto per circa due settimane. Le folle si diradano e i prezzi si ammorbidiscono, il che ne fa una buona scelta di media stagione se ti vesti pesante.",
      11: "Grigio, freddo e spesso piovoso, con massime vicine ai 7C, il punto più basso dell'anno per meteo e luce. La nota positiva arriva proprio alla fine, quando i mercatini di Natale aprono negli ultimi giorni del mese, così un viaggio di fine novembre può cogliere sia i prezzi bassi sia il primo vin brulé.",
      12: "Freddo, vicino ai 4C, e buio già dal primo pomeriggio, ma i mercatini di Natale si tengono in tutta la città da fine novembre fino a poco prima di Natale, con quello più notevole al Gendarmenmarkt (piccolo ingresso a pagamento) e altri ad Alexanderplatz e al Castello di Charlottenburg. Il Capodanno mette in scena un'enorme festa gratuita con fuochi d'artificio alla Porta di Brandeburgo, quindi aspettati folle e tariffe più alte in quel periodo.",
    },
    climate: {
      1: { highC: 3, lowC: -2, rainyDays: 10 },
      2: { highC: 4, lowC: -2, rainyDays: 8 },
      3: { highC: 9, lowC: 1, rainyDays: 8 },
      4: { highC: 13, lowC: 4, rainyDays: 8 },
      5: { highC: 19, lowC: 8, rainyDays: 9 },
      6: { highC: 22, lowC: 11, rainyDays: 9 },
      7: { highC: 24, lowC: 14, rainyDays: 9 },
      8: { highC: 24, lowC: 13, rainyDays: 8 },
      9: { highC: 19, lowC: 10, rainyDays: 7 },
      10: { highC: 13, lowC: 6, rainyDays: 8 },
      11: { highC: 7, lowC: 2, rainyDays: 10 },
      12: { highC: 4, lowC: -1, rainyDays: 11 },
    },
    budgetLevel: "mid",
    budgetPerDay: { budget: 65, mid: 130, high: 260 },
    tagline: "Storia del Muro, musei di livello mondiale e la migliore vita notturna d'Europa.",
    heroIntro:
      "Berlino è grande, piatta e dispersa, quindi è una città da U-Bahn e S-Bahn, non da girare tutta a piedi, e la organizzi per quartiere. Tre giorni sono il minimo onesto per dividere il nucleo storico di Mitte, la storia del Muro e della Guerra Fredda, e un quartiere moderno senza una marcia forzata. Vieni a tarda primavera o inizio autunno, prenota lo slot gratuito per la cupola del Reichstag prima di partire, e compra un biglietto giornaliero ABC appena atterri.",
    accent: { from: "#3E4A6B", to: "#E0A43B", ink: "#232A42" },
    neighborhoodSlugs: [
      "mitte",
      "kreuzberg",
      "prenzlauer-berg",
      "friedrichshain",
      "charlottenburg",
    ],
    nearbyCitySlugs: ["prague"],
  },

  neighborhoods: [
    {
      slug: "mitte",
      citySlug: "berlin",
      name: "Mitte",
      lat: 52.5219,
      lng: 13.4016,
      bestFor: ["first-time", "family", "romantic"],
      vibe: "Il centro storico e geografico, dove la Porta di Brandeburgo, l'Isola dei Musei, il Reichstag e Unter den Linden si allineano tutti a breve distanza a piedi o a una fermata di tram. È la Berlino da cartolina e la base logica per un primo, breve viaggio costruito attorno alle grandi attrazioni. Curato e centrale, baratta l'anima ruvida e locale dei quartieri orientali con la pura comodità.",
      pros: [
        "A piedi o con una breve corsa raggiungi la Porta di Brandeburgo, il Reichstag e l'Isola dei Musei",
        "Ottimo nodo dei trasporti con U-Bahn, S-Bahn e tram che si incrociano in più stazioni",
        "Tutto ciò che un neofita vuole vedere si raggruppa qui, risparmiando spostamenti attraverso la città",
      ],
      cons: [
        "L'area più cara per gli hotel e la più affollata di gruppi turistici di giorno",
        "Alcune parti vicine alle attrazioni sembrano impersonali e silenziose dopo l'orario d'ufficio",
        "Meno di quella scena locale vissuta che trovi a Kreuzberg o a Neukölln",
      ],
    },
    {
      slug: "kreuzberg",
      citySlug: "berlin",
      name: "Kreuzberg",
      lat: 52.4986,
      lng: 13.4033,
      bestFor: ["nightlife", "local", "budget"],
      vibe: "Il cuore della Berlino alternativa e multiculturale, zeppo di mercati turchi, bar lungo il canale, street art e alcuni dei migliori pasti economici e delle notti più lunghe della città. Il tratto attorno a Kottbusser Tor e al Landwehrkanal è trasandato, energico e non levigato, proprio come la gente viene a cercare a Berlino. Rumoroso e ruvido, premia i viaggiatori che vogliono la cosa autentica anziché la versione ordinata.",
      pros: [
        "La concentrazione più densa della città di bar, street food e vita notturna",
        "Genuinamente multiculturale, con il mercato turco e le passeggiate lungo il canale",
        "Mangiare e bere di buon valore, dal döner ai bar di vini naturali",
      ],
      cons: [
        "Ruvido e rumoroso, con angoli difficili attorno a Kottbusser Tor di notte",
        "Una corsa di U-Bahn dalle attrazioni di Mitte anziché a distanza a piedi",
        "Le sere del fine settimana diventano chiassose, una cattiva scelta per chi ha il sonno leggero",
      ],
    },
    {
      slug: "prenzlauer-berg",
      citySlug: "berlin",
      name: "Prenzlauer Berg",
      lat: 52.5403,
      lng: 13.4241,
      bestFor: ["family", "romantic", "local"],
      vibe: "Un bel quartiere dell'ex Est fatto di case d'affitto ottocentesche restaurate, piazze alberate e cultura del brunch domenicale, oggi il quartiere più gentrificato e a misura di famiglia della città. La zona attorno a Kollwitzplatz e Kastanienallee ha boutique, caffè e il mercatino delle pulci del Mauerpark a due passi. Tranquillo e grazioso, è la Berlino facile e comoda anziché quella spigolosa.",
      pros: [
        "Vie belle e sicure con caffè, locali per il brunch e negozi indipendenti",
        "Il mercatino delle pulci domenicale e il karaoke del Mauerpark sono a breve distanza a piedi",
        "Eccellente per famiglie e coppie che vogliono una base più tranquilla e più verde",
      ],
      cons: [
        "Poca vita notturna propria, la scena è tranquilla e residenziale",
        "A qualche fermata di U-Bahn o tram dalle attrazioni centrali di Mitte",
        "Gentrificato e più caro dei quartieri orientali più ruvidi",
      ],
    },
    {
      slug: "friedrichshain",
      citySlug: "berlin",
      name: "Friedrichshain",
      lat: 52.5155,
      lng: 13.4542,
      bestFor: ["nightlife", "budget", "local"],
      vibe: "Il cuore del clubbing dell'ex Berlino Est, sede della East Side Gallery, dei templi della techno lungo la Sprea e della fila di bar giovani ed economici lungo la Simon-Dach-Straße. La grandiosa Karl-Marx-Allee dell'era socialista lo attraversa, tutta viali monumentali e Plattenbau. Ruvido, giovane e sveglio tutta la notte, è dove la leggendaria vita notturna di Berlino accade davvero.",
      pros: [
        "La East Side Gallery e i club più grandi si trovano proprio qui",
        "Mangiare e bere a poco attorno a un pubblico giovane e ricco di studenti",
        "Collegamenti diretti S-Bahn e U-Bahn attraverso il fiume verso il centro",
      ],
      cons: [
        "Rumoroso e caotico nei fine settimana, costruito attorno al clubbing notturno",
        "Meno fascino alla luce del giorno rispetto ai quartieri occidentali o settentrionali",
        "Una corsa dalle attrazioni di Mitte, anche se i collegamenti dei trasporti sono buoni",
      ],
    },
    {
      slug: "charlottenburg",
      citySlug: "berlin",
      name: "Charlottenburg",
      lat: 52.5058,
      lng: 13.3042,
      bestFor: ["family", "romantic", "first-time"],
      vibe: "L'elegante cuore dell'ex Berlino Ovest, costruito attorno al viale dello shopping del Kurfürstendamm, al barocco Castello di Charlottenburg e a grandi vecchi caseggiati. Sembra più tranquillo e più consolidato dei quartieri orientali, con grandi magazzini, caffè classici e lo zoo lì vicino. Raffinato e residenziale, è adatto ai viaggiatori che preferiscono comfort e spazio alla ruvidezza.",
      pros: [
        "Il Castello di Charlottenburg, lo shopping del Ku'damm e lo zoo sono tutti qui",
        "Tranquillo, sicuro e verde, una base comoda per famiglie e coppie",
        "Trasporti ben collegati sul lato ovest, diretti allo Zoo e alla Hauptbahnhof",
      ],
      cons: [
        "Il più lontano dei cinque dal Muro e dalle attrazioni della Berlino Est",
        "Vita notturna più tranquilla e un'atmosfera più levigata, meno alternativa",
        "L'atmosfera da shopping classico può sembrare posata accanto alla scena orientale",
      ],
    },
  ],

  pois: [
    {
      slug: "brandenburg-gate",
      citySlug: "berlin",
      name: "Porta di Brandeburgo",
      lat: 52.5163,
      lng: 13.3777,
      kind: "sight",
      needsBooking: false,
      tip: "La porta è gratuita, aperta e non chiude mai, quindi vieni all'alba o dopo il buio per le colonne illuminate senza la ressa dei gruppi turistici diurni su Pariser Platz. Sorgeva nella terra di nessuno della città divisa, e la piazza oggi ti mette a pochi passi dal Reichstag e dal Memoriale dell'Olocausto, quindi collega tutti e tre in un unico giro. Salta i personaggi in costume che offrono foto, si aspettano un pagamento.",
    },
    {
      slug: "reichstag",
      citySlug: "berlin",
      name: "Reichstag e cupola di vetro",
      lat: 52.5186,
      lng: 13.3762,
      kind: "sight",
      needsBooking: true,
      tip: "La cupola di vetro è gratuita ma devi registrarti online per uno slot a orario con giorni di anticipo, non c'è ingresso senza prenotazione e gli slot si esauriscono in fretta in stagione. Porta il documento con foto che corrisponde alla prenotazione, la sicurezza è di livello aeroportuale. Punta a uno slot al tramonto per cogliere la città alla luce del giorno e poi illuminata mentre percorri a spirale la rampa, e prendi l'audioguida gratuita che si sincronizza con la vista.",
    },
    {
      slug: "east-side-gallery",
      citySlug: "berlin",
      name: "East Side Gallery",
      lat: 52.5051,
      lng: 13.4394,
      kind: "sight",
      needsBooking: false,
      tip: "Questo tratto di 1,3 km del Muro di Berlino superstite, dipinto con murali tra cui il bacio Brežnev-Honecker, è gratuito e all'aperto 24 ore su 24 lungo la Sprea a Friedrichshain. Vieni la mattina presto per fotografare i pannelli famosi prima delle folle e prima che la gente si metta davanti a ognuno di essi. Percorrilo dal lato dell'Ostbahnhof verso l'Oberbaumbrücke, poi attraversa il ponte fino a Kreuzberg per pranzo.",
    },
    {
      slug: "museum-island",
      citySlug: "berlin",
      name: "Isola dei Musei",
      lat: 52.5169,
      lng: 13.4017,
      kind: "museum",
      needsBooking: true,
      tip: "Compra il biglietto combinato Bereichskarte che copre tutti i musei dell'isola a un unico prezzo e prenota un ingresso a orario online, poiché il Neues Museum e il suo busto di Nefertiti richiedono uno slot. Sii onesto con il tuo programma: il Pergamon, l'edificio di punta, è chiuso per un'importante ristrutturazione fino a circa il 2027, quindi non venire aspettandoti la grande sala dell'altare. Scegli una o due delle case aperte, un'intera giornata per tutte è un sovraccarico da musei.",
    },
    {
      slug: "holocaust-memorial",
      citySlug: "berlin",
      name: "Memoriale dell'Olocausto",
      lat: 52.5139,
      lng: 13.3789,
      kind: "sight",
      needsBooking: false,
      tip: "Il campo di 2.711 stele di cemento è gratuito, aperto e sempre accessibile, a breve distanza a piedi a sud della Porta di Brandeburgo. Cammina fino al centro dove il terreno si abbassa e i blocchi si alzano sopra la tua testa per percepire lo smarrimento che il progetto intende suscitare, e mantieni il rispetto, questo è un memoriale, non un parco giochi. Il Centro informazioni sotterraneo gratuito sottostante chiude in alcuni giorni e ha una propria fila per la sicurezza, quindi controlla prima di andare.",
    },
    {
      slug: "checkpoint-charlie",
      citySlug: "berlin",
      name: "Checkpoint Charlie",
      lat: 52.5075,
      lng: 13.3904,
      kind: "sight",
      needsBooking: false,
      tip: "La garitta ricostruita e il celebre cartello sono gratuiti ma ormai puro teatro turistico, con attori pagati in uniforme a cui non dovresti dare mance per le foto, quindi trattalo come una sosta di cinque minuti. La sostanza vera sono i pannelli gratuiti all'aperto lungo la strada e il vicino (a pagamento) Mauermuseum se vuoi i dettagli sulle storie di fuga. Abbinalo alla Topografia del Terrore a breve distanza a ovest per una mattinata sulla Guerra Fredda molto più forte.",
    },
    {
      slug: "fernsehturm",
      citySlug: "berlin",
      name: "Torre della TV (Fernsehturm)",
      lat: 52.5208,
      lng: 13.4094,
      kind: "viewpoint",
      needsBooking: true,
      tip: "Con i suoi 368 m è la struttura più alta della Germania e la vista su tutta la città piatta è la migliore di Berlino, ma prenota un biglietto a orario online per saltare una coda che ad Alexanderplatz può superare l'ora. Uno slot fast-track costa di più ma risparmia l'attesa in una giornata affollata. Sali vicino al tramonto per la città di giorno e con le luci, e il ristorante girevole al piano superiore richiede una prenotazione a parte.",
    },
    {
      slug: "berlin-cathedral",
      citySlug: "berlin",
      name: "Duomo di Berlino",
      lat: 52.5191,
      lng: 13.4009,
      kind: "sight",
      needsBooking: false,
      tip: "Il grandioso duomo protestante sull'Isola dei Musei fa pagare circa 10 EUR d'ingresso, che comprendono la salita dei 270 gradini fino al camminamento esterno della cupola per una vista ravvicinata sull'isola e sulla Sprea. Vacci più per il balcone della cupola che per l'interno, il panorama sui tetti è il vero richiamo. Chiude ai visitatori durante le funzioni, quindi controlla gli orari se vieni di domenica.",
    },
    {
      slug: "topography-of-terror",
      citySlug: "berlin",
      name: "Topografia del Terrore",
      lat: 52.5075,
      lng: 13.3833,
      kind: "museum",
      needsBooking: false,
      tip: "Costruito sul sito degli ex quartier generali della Gestapo e delle SS, questo centro di documentazione è gratuito e uno dei racconti più impressionanti e meglio spiegati dell'apparato del terrore nazista in città. Metti in conto almeno 90 minuti per la densa mostra al coperto, e leggi i pannelli all'aperto che corrono lungo un tratto superstite del Muro davanti all'ingresso. Si trova a breve distanza a piedi da Checkpoint Charlie, quindi fai i due insieme.",
    },
    {
      slug: "tiergarten",
      citySlug: "berlin",
      name: "Parco Tiergarten",
      lat: 52.5145,
      lng: 13.3501,
      kind: "park",
      needsBooking: false,
      tip: "L'enorme parco centrale di Berlino è gratuito e si estende dalla Porta di Brandeburgo allo Zoo, ideale per una passeggiata o una bici a noleggio tra le attrazioni di Mitte e Charlottenburg. Sali sulla Colonna della Vittoria (piccolo biglietto) al centro per una vista lungo i viali alberati, oppure trova la birreria all'aperto del Café am Neuen See sul margine meridionale nei mesi caldi. In una domenica d'estate vedrai la gente del posto fare grigliate su ogni fazzoletto d'erba.",
    },
    {
      slug: "mauerpark",
      citySlug: "berlin",
      name: "Mercatino delle pulci e karaoke del Mauerpark",
      lat: 52.5439,
      lng: 13.4025,
      kind: "experience",
      needsBooking: false,
      tip: "La domenica questo parco dell'ex striscia della morte ospita un vasto mercatino delle pulci e il leggendario Bearpit Karaoke all'aperto nell'anfiteatro di pietra dal primo pomeriggio, entrambi gratuiti. Vieni dalla tarda mattina per curiosare tra le bancarelle, mangiare dai food truck, poi prendi una birra e guarda gli sconosciuti cantare a squarciagola davanti a una folla di centinaia di persone. Si tiene tutto l'anno ma dà il meglio in una giornata calda, quindi programmalo per il bel tempo.",
    },
    {
      slug: "gendarmenmarkt",
      citySlug: "berlin",
      name: "Gendarmenmarkt",
      lat: 52.5138,
      lng: 13.3925,
      kind: "sight",
      needsBooking: false,
      tip: "Spesso definita la più bella piazza della città, questo spazio simmetrico incorniciato dalla cattedrale tedesca e da quella francese e dalla Konzerthaus è gratuito da ammirare e fotografare, al meglio nella luce bassa del primo mattino o della sera. A dicembre ospita uno dei migliori mercatini di Natale di Berlino, che fa pagare un piccolo ingresso per tenere le folle sotto controllo. È a due minuti a piedi dall'U-Bahn di Französische Straße e vicino ai caffè eleganti del Gendarmenmarkt.",
    },
    {
      slug: "tempelhofer-feld",
      citySlug: "berlin",
      name: "Tempelhofer Feld",
      lat: 52.4732,
      lng: 13.4017,
      kind: "park",
      needsBooking: false,
      tip: "Questo aeroporto dismesso è oggi un vasto parco pubblico gratuito dove puoi camminare, pedalare o pattinare dritto lungo le vecchie piste, un'esperienza genuinamente berlinese senza equivalenti altrove. Noleggia una bici e percorri per intero un'ex pista, oppure porta un picnic e guarda i kite-surfer nelle giornate ventose. Chiude al tramonto con cancelli che si bloccano, quindi controlla l'orario di chiusura stagionale affisso agli ingressi prima di sistemarti.",
    },
    {
      slug: "ddr-museum",
      citySlug: "berlin",
      name: "DDR Museum",
      lat: 52.5192,
      lng: 13.4029,
      kind: "museum",
      needsBooking: false,
      tip: "Questo museo interattivo sulla vita quotidiana nella Germania Est comunista, sulla Sprea di fronte al duomo, è coinvolgente e interattivo, con una Trabant in cui salire e un appartamento della DDR ricostruito. Si affolla e rallenta verso mezzogiorno perché tutto è pensato per essere toccato e aperto, quindi arriva proprio all'apertura delle 9 o nell'ultima ora. Compra il biglietto online per saltare la piccola coda alla biglietteria sulla riva del fiume.",
    },
  ],

  itineraries: [
    {
      citySlug: "berlin",
      days: 2,
      summary:
        "Due giorni coprono l'essenziale di Berlino, ma la città è enorme e dispersa, quindi 48 ore sono una corsa e ti sposterai in fretta tra i quartieri. In due giorni puoi fare il nucleo storico di Mitte il primo giorno, la Porta di Brandeburgo, la cupola del Reichstag, il Memoriale dell'Olocausto, l'Isola dei Musei e il Gendarmenmarkt, poi dedicare il secondo giorno alla storia del Muro e della Guerra Fredda, Checkpoint Charlie, la Topografia del Terrore e la East Side Gallery, chiudendo con una cena a Kreuzberg. Cosa devi tagliare: Charlottenburg, Prenzlauer Berg, il Tempelhofer Feld, i laghi e ogni momento lento di quartiere, quindi questo è un tour delle attrazioni principali, non una Berlino che arrivi a conoscere. È adatto a un weekend o a un primo assaggio prima di combinarlo con Praga. Le cose imprescindibili: registrati online per lo slot gratuito della cupola del Reichstag prima di partire, e compra un biglietto giornaliero ABC appena atterri, i controlli sono frequenti e le multe salate. Alloggia a Mitte così entrambe le mattine partono vicino alle attrazioni. Un terzo giorno è il singolo miglioramento migliore, e Berlino lo vuole davvero.",
      stayNeighborhoodSlug: "mitte",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Mitte storica: porta, cupola, musei",
          morning: [
            {
              poiSlug: "brandenburg-gate",
              text: "Comincia presto alla Porta di Brandeburgo, prima che i gruppi turistici riempiano Pariser Platz, per foto delle colonne nella luce del mattino. È gratuita e aperta, e tutto ciò che c'è nella mattinata si trova a breve distanza a piedi da qui.",
              durationMin: 30,
            },
            {
              poiSlug: "reichstag",
              text: "Cammina due minuti fino al Reichstag per il tuo slot gratuito della cupola prenotato in anticipo, portando il documento che corrisponde alla prenotazione per la sicurezza di livello aeroportuale. Sali a spirale sulla rampa di vetro con l'audioguida gratuita per la vista sul quartiere del governo e sulla città.",
              durationMin: 75,
            },
            {
              poiSlug: "holocaust-memorial",
              text: "Taglia verso sud fino al Memoriale dell'Olocausto, il campo gratuito di stele di cemento a breve distanza a piedi dalla porta. Cammina fino al centro che si abbassa dove i blocchi si alzano sopra la testa, e visita il Centro informazioni sotterraneo se è aperto.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              text: "Pranza su o vicino a Unter den Linden, poi passeggia lungo il grande viale verso est in direzione dell'isola, passando l'opera di stato e Bebelplatz. Fai in fretta, il pomeriggio è carico di musei.",
              durationMin: 75,
            },
            {
              poiSlug: "museum-island",
              text: "Trascorri il pomeriggio sull'Isola dei Musei con una Bereichskarte combinata, scegliendo una o due case dato che il Pergamon è chiuso per ristrutturazione fino a circa il 2027. Il Neues Museum con il suo busto di Nefertiti o l'Alte Nationalgalerie sono le scelte singole più forti.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "gendarmenmarkt",
              text: "Cammina fino al Gendarmenmarkt nella luce serale per la piazza simmetrica incorniciata dalle sue due cattedrali e dalla Konzerthaus. Fotografala, poi trova la cena nelle vie vicine.",
              durationMin: 45,
            },
            {
              text: "Cena nel centro di Mitte, prenotando in anticipo per qualsiasi locale con un nome, e chiudi la serata con un drink attorno ai cortili di Hackescher Markt a breve distanza a piedi verso nord. È la tua unica serata tardi vicino alle attrazioni.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Il Muro e la Berlino della Guerra Fredda",
          morning: [
            {
              poiSlug: "topography-of-terror",
              text: "Comincia alla Topografia del Terrore sul sito degli ex quartier generali della Gestapo, gratuita e aperta, mettendo in conto 90 minuti per la densa mostra. Leggi i pannelli all'aperto lungo il tratto superstite del Muro prima di andartene.",
              durationMin: 90,
            },
            {
              poiSlug: "checkpoint-charlie",
              text: "Cammina qualche minuto fino a Checkpoint Charlie, trattando la garitta ricostruita e il cartello come una rapida sosta fotografica anziché un momento clou. Salta gli attori in costume a pagamento, e leggi i pannelli gratuiti all'aperto sulla strada per la storia vera.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              text: "Prendi l'U-Bahn o l'S-Bahn verso est e pranza a Friedrichshain prima della passeggiata lungo il Muro. È un buon momento per convalidare una parte nuova del tuo biglietto giornaliero, i controlli su queste linee sono frequenti.",
              durationMin: 75,
            },
            {
              poiSlug: "east-side-gallery",
              text: "Percorri la East Side Gallery, il tratto gratuito di 1,3 km di Muro dipinto lungo la Sprea, dal lato dell'Ostbahnhof verso l'Oberbaumbrücke. Fotografa i murali famosi, poi attraversa il ponte fino a Kreuzberg.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Trascorri la serata a Kreuzberg attorno a Kottbusser Tor e al Landwehrkanal, mangiando bene e a poco, dal döner a un bar lungo il canale. Questa è la Berlino alternativa che le attrazioni di Mitte non ti mostrano.",
              durationMin: 150,
            },
          ],
        },
      ],
    },
    {
      citySlug: "berlin",
      days: 3,
      summary:
        "Sì, tre giorni sono la durata giusta per Berlino, ed è ciò che consigliamo per una prima visita a una città così dispersa. Si divide nettamente in tre: il nucleo storico di Mitte, la Porta di Brandeburgo, la cupola del Reichstag, il Memoriale dell'Olocausto, l'Isola dei Musei e il Gendarmenmarkt il primo giorno; la storia del Muro e della Guerra Fredda, Checkpoint Charlie, la Topografia del Terrore e la East Side Gallery il secondo giorno; e un terzo giorno per la città moderna e vissuta, Prenzlauer Berg, il mercatino domenicale del Mauerpark e l'aperto Tempelhofer Feld. Ottieni i monumenti, la storia e una vera giornata di quartiere anziché uno sprint puro di sightseeing. Cosa resta comunque tagliato: Charlottenburg, il lato ovest e i laghi, che è esattamente ciò che aggiunge un quarto giorno. È adatto a chi viene per la prima volta, alle coppie e a chiunque prosegua poi verso Praga. Alloggia a Prenzlauer Berg: è tranquillo, grazioso e ti mette a due passi dal Mauerpark con facili salti in tram e U-Bahn fino a Mitte. Registra il tuo slot gratuito della cupola del Reichstag e compra un biglietto giornaliero ABC, i controlli sono frequenti.",
      stayNeighborhoodSlug: "prenzlauer-berg",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Mitte storica: porta, cupola, musei",
          morning: [
            {
              poiSlug: "brandenburg-gate",
              text: "Comincia presto alla Porta di Brandeburgo per le colonne prima che Pariser Platz si riempia di gruppi turistici. È gratuita e aperta, e fa da àncora a un giro mattutino delle tre attrazioni principali di Mitte.",
              durationMin: 30,
            },
            {
              poiSlug: "reichstag",
              text: "Cammina fino al Reichstag per il tuo slot gratuito della cupola prenotato in anticipo, con il documento che corrisponde alla prenotazione per la sicurezza. Sali a spirale sulla rampa di vetro con l'audioguida gratuita per la vista sulla città e sul quartiere del governo.",
              durationMin: 75,
            },
            {
              poiSlug: "holocaust-memorial",
              text: "Dirigiti a sud verso il gratuito Memoriale dell'Olocausto, a breve distanza a piedi dalla porta. Cammina fino al centro dove il terreno si abbassa e le stele si alzano sopra la testa, poi vedi il Centro informazioni sotterraneo se è aperto.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              text: "Pranza vicino a Unter den Linden, poi cammina lungo il viale verso est in direzione dell'Isola dei Musei, oltre Bebelplatz e l'opera di stato. Una passeggiata rilassata, non una marcia, dato che i musei vengono dopo.",
              durationMin: 90,
            },
            {
              poiSlug: "museum-island",
              text: "Dedica il pomeriggio all'Isola dei Musei con una Bereichskarte combinata, scegliendo una o due case dato che il Pergamon è chiuso per lavori fino a circa il 2027. Il Neues Museum con Nefertiti o l'Alte Nationalgalerie sono le migliori scelte singole.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "berlin-cathedral",
              text: "Se hai energie, sali i 270 gradini del Duomo di Berlino sull'isola per la vista dal balcone della cupola sulla Sprea alla fine del pomeriggio. Altrimenti fotografa la sua facciata dal Lustgarten e prosegui.",
              durationMin: 45,
            },
            {
              poiSlug: "gendarmenmarkt",
              text: "Cammina fino al Gendarmenmarkt per la più bella piazza della città incorniciata dalle sue due cattedrali, al meglio nella luce serale. Trova la cena nelle vie circostanti, prenotando in anticipo per qualsiasi locale ben recensito.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Il Muro e la Berlino della Guerra Fredda",
          morning: [
            {
              poiSlug: "topography-of-terror",
              text: "Comincia alla gratuita Topografia del Terrore sull'ex sito della Gestapo, mettendo in conto 90 minuti per la densa mostra ben spiegata. Leggi i pannelli all'aperto lungo il Muro superstite davanti all'ingresso prima di proseguire.",
              durationMin: 90,
            },
            {
              poiSlug: "checkpoint-charlie",
              text: "Cammina fino a Checkpoint Charlie lì vicino, una rapida sosta fotografica al valico ricostruito anziché un momento clou. Ignora gli attori in costume a pagamento e leggi i pannelli gratuiti sulla strada per la sostanza.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "fernsehturm",
              text: "Prendi l'U-Bahn fino ad Alexanderplatz e sali sulla Fernsehturm con uno slot a orario prenotato in anticipo per la migliore vista sulla città piatta, idealmente vicino al tramonto. Prendi prima un pranzo veloce sulla piazza, o dopo se il tuo slot è presto.",
              durationMin: 90,
            },
            {
              poiSlug: "east-side-gallery",
              text: "Vai verso est fino alla East Side Gallery e percorri il tratto gratuito di 1,3 km di Muro dipinto lungo la Sprea, dall'Ostbahnhof verso l'Oberbaumbrücke. Fotografa i murali famosi, poi attraversa il ponte fino a Kreuzberg.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Trascorri la serata a Friedrichshain o a Kreuzberg su una delle due sponde del fiume, mangiando bene e a poco e bevendo dove va il pubblico giovane. Questo è il lato notturno di Berlino, quindi dosati se domani parti presto.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Berlino moderna: Prenzlauer Berg, Mauerpark, Tempelhof",
          morning: [
            {
              text: "Comincia con calma con un lungo brunch a Prenzlauer Berg attorno a Kollwitzplatz o Kastanienallee, il rito domenicale locale. Gironzola lungo le vie di caseggiati restaurati e i negozi indipendenti lungo il percorso.",
              durationMin: 90,
            },
            {
              poiSlug: "mauerpark",
              text: "Cammina fino al Mauerpark per il vasto mercatino delle pulci domenicale e, dal primo pomeriggio, il gratuito Bearpit Karaoke all'aperto nell'anfiteatro di pietra. Curiosa tra le bancarelle, mangia da un food truck, poi prendi una birra e guarda la folla del karaoke.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "ddr-museum",
              text: "Torna verso il centro per il DDR Museum interattivo sulla Sprea, sulla vita quotidiana nella Germania Est comunista, comprando online per saltare la coda. Vacci per la Trabant in cui salire e l'appartamento della DDR ricostruito, e tienilo sotto l'ora se le folle crescono.",
              durationMin: 75,
            },
            {
              poiSlug: "tempelhofer-feld",
              text: "Prendi l'U-Bahn verso sud fino al Tempelhofer Feld, il gratuito ex aeroporto, e noleggia una bici per percorrere per intero una pista. Porta uno spuntino e guarda i kite-surfer, ma nota che i cancelli si bloccano all'orario di chiusura al tramonto affisso.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              text: "Torna a Prenzlauer Berg per una cena finale rilassata vicino alla tua base, prenotando un tavolo su Kollwitzplatz o in una via laterale. Chiudi con un drink tranquillo vicino al letto, nessun viaggio attraverso la città da programmare.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "berlin",
      days: 4,
      summary:
        "Quattro giorni sono la durata ideale per una prima visita a Berlino, che trasforma uno sprint disperso in una vera vacanza. I giorni da uno a tre coprono l'essenziale: il nucleo storico di Mitte, la storia del Muro e della Guerra Fredda, e la città moderna di Prenzlauer Berg, Mauerpark e Tempelhofer Feld, ognuno fatto senza fretta. Il quarto giorno è la valvola di sfogo, e si divide in due strade: o l'elegante lato ovest attorno al Castello di Charlottenburg e al Ku'damm, oppure una gita di mezza giornata fino ai palazzi di Sanssouci a Potsdam o al toccante memoriale di Sachsenhausen, entrambi a una comoda corsa di S-Bahn o regionale dal centro. Questa durata è adatta ai viaggiatori che detestano la marcia forzata, alle coppie e a chiunque abbia voli che incorniciano il viaggio in modo scomodo. Per quattro giorni consigliamo di alloggiare a Kreuzberg: hai accettato un ritmo più lento, e i suoi bar sul canale, lo street food e le notti lunghe rendono il rientro ogni sera la parte migliore della giornata. Oltre i quattro giorni, aggiungi i laghi in estate o un'intera giornata a Potsdam. Registra il tuo slot gratuito della cupola del Reichstag e compra un biglietto giornaliero ABC appena arrivi.",
      stayNeighborhoodSlug: "kreuzberg",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Mitte storica: porta, cupola, musei",
          morning: [
            {
              poiSlug: "brandenburg-gate",
              text: "Comincia presto alla Porta di Brandeburgo per le colonne prima che le folle riempiano Pariser Platz. Gratuita e aperta, fa da àncora al giro mattutino dei grandi monumenti di Mitte.",
              durationMin: 30,
            },
            {
              poiSlug: "reichstag",
              text: "Cammina fino al Reichstag per il tuo slot gratuito della cupola prenotato in anticipo, portando il documento corrispondente per la sicurezza. Sali a spirale sulla rampa di vetro con l'audioguida gratuita per la vista sulla città e sul quartiere del governo.",
              durationMin: 75,
            },
            {
              poiSlug: "holocaust-memorial",
              text: "Taglia verso sud fino al gratuito Memoriale dell'Olocausto, a breve distanza a piedi. Cammina fino al centro che si abbassa dove le stele si alzano sopra la testa, poi vedi il Centro informazioni sotterraneo se è aperto.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              text: "Pranza vicino a Unter den Linden, poi cammina lungo il viale verso est in direzione dell'Isola dei Musei oltre Bebelplatz. Una passeggiata rilassata, dato che hai quattro giorni e nessun bisogno di correre.",
              durationMin: 90,
            },
            {
              poiSlug: "museum-island",
              text: "Trascorri il pomeriggio sull'Isola dei Musei con una Bereichskarte combinata, scegliendo una o due case dato che il Pergamon è chiuso fino a circa il 2027. Il Neues Museum con Nefertiti o l'Alte Nationalgalerie sono le scelte più forti.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "gendarmenmarkt",
              text: "Cammina fino al Gendarmenmarkt per la più bella piazza della città nella luce serale, incorniciata dalle sue due cattedrali. Trova la cena nelle vie circostanti di Mitte, prenotando in anticipo per qualsiasi locale ben recensito.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Il Muro e la Berlino della Guerra Fredda",
          morning: [
            {
              poiSlug: "topography-of-terror",
              text: "Comincia alla gratuita Topografia del Terrore sull'ex sito della Gestapo, mettendo in conto 90 minuti per la mostra. Leggi i pannelli all'aperto lungo il Muro superstite prima di andartene.",
              durationMin: 90,
            },
            {
              poiSlug: "checkpoint-charlie",
              text: "Cammina fino a Checkpoint Charlie, una rapida sosta fotografica al valico ricostruito. Salta gli attori in costume a pagamento e leggi i pannelli gratuiti sulla strada per la storia vera.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "fernsehturm",
              text: "Prendi l'U-Bahn fino ad Alexanderplatz e sali sulla Fernsehturm con uno slot prenotato in anticipo per la migliore vista sulla città piatta. Pranza sulla piazza attorno al tuo slot.",
              durationMin: 90,
            },
            {
              poiSlug: "east-side-gallery",
              text: "Vai fino alla East Side Gallery e percorri il tratto gratuito di 1,3 km di Muro dipinto lungo la Sprea, dall'Ostbahnhof verso l'Oberbaumbrücke. Attraversa il ponte fino a Kreuzberg dove alloggi.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Trascorri la serata a casa a Kreuzberg attorno a Kottbusser Tor e al canale, mangiando bene e a poco e bevendo dove va la gente del posto. Sei basato qui, quindi nessun viaggio di ritorno da programmare.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Berlino moderna: Prenzlauer Berg, Mauerpark, Tempelhof",
          morning: [
            {
              text: "Sali fino a Prenzlauer Berg per un lungo brunch attorno a Kollwitzplatz, il rito locale del weekend, e gironzola lungo le vie di caseggiati restaurati. Un inizio lento per una giornata di quartiere.",
              durationMin: 90,
            },
            {
              poiSlug: "mauerpark",
              text: "Cammina fino al Mauerpark per il mercatino delle pulci domenicale e, dal primo pomeriggio, il gratuito Bearpit Karaoke all'aperto nell'anfiteatro di pietra. Curiosa tra le bancarelle, mangia da un food truck, poi guarda il karaoke con una birra.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "tempelhofer-feld",
              text: "Prendi l'U-Bahn verso sud fino al Tempelhofer Feld, il gratuito ex aeroporto, e noleggia una bici per percorrere per intero una pista. Porta un picnic, guarda i kite-surfer, e nota che i cancelli si bloccano all'orario del tramonto affisso.",
              durationMin: 120,
            },
            {
              poiSlug: "ddr-museum",
              text: "Se il tempo lo permette al ritorno, fai un salto al DDR Museum interattivo sulla Sprea per la Trabant in cui salire e l'appartamento della DDR ricostruito, comprando online per saltare la coda. Tienilo breve, un'ora basta.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Torna a Kreuzberg per cena e drink, provando un bar di vini naturali o un locale lungo il Landwehrkanal. Questo è l'elemento del quartiere, quindi fermati.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Berlino Ovest o una gita a Potsdam",
          morning: [
            {
              text: "Scegli la direzione del tuo quarto giorno. Per il lato ovest, prendi l'U-Bahn fino al Castello di Charlottenburg, l'ex residenza reale barocca con giardini all'italiana, e metti in conto un paio d'ore per le sale di rappresentanza e i terreni. Per una gita invece, prendi il treno regionale fino a Potsdam e al Parco di Sanssouci per i palazzi rococò e i vigneti terrazzati.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              text: "Se sei rimasto a ovest, passeggia lungo il viale dello shopping del Kurfürstendamm e vedi la torre in rovina della Chiesa commemorativa Kaiser Wilhelm, poi prendi un caffè in un classico locale di Charlottenburg. Se sei andato a Potsdam, cammina per il Quartiere Olandese e la città vecchia prima del ritorno. Come alternativa più pesante, trascorri la giornata al memoriale del campo di concentramento di Sachsenhausen a nord della città, una toccante gita in S-Bahn e bus che richiede un intero pomeriggio.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              poiSlug: "tiergarten",
              text: "Di nuovo in centro, cammina per una parte del Tiergarten nell'ora dorata, oppure trova la sua birreria all'aperto Café am Neuen See sul margine meridionale nei mesi caldi. Un momento di relax verde e facile dopo la gita.",
              durationMin: 75,
            },
            {
              text: "Prenota una cena d'addio di nuovo a Kreuzberg, spendendo di più per il tuo ultimo pasto berlinese in un locale individuato prima. Chiudi con un bicchiere della staffa lungo il canale, a breve distanza a piedi dal letto.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
  ],
};

export default berlinIt;
