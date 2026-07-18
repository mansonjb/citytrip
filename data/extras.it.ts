import type { CityExtras } from "./types";

const hero = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`;

// Hero photos are free-license (Pexels), URL and visually validated.
const extrasIt: Record<string, CityExtras> = {
  lisbon: {
    citySlug: "lisbon",
    image: hero(16338751),
    imageAlt: "Tram giallo che sale una via di Lisbona davanti a una casa color senape",
    history:
      "Lisbona è una delle città più antiche dell'Europa occidentale, un porto fenicio e romano molto prima di diventare capitale del Portogallo nel 1256. Il grande terremoto del 1 novembre 1755, seguito da uno tsunami e da incendi, rase al suolo la città bassa e uccise decine di migliaia di persone, ed è per questo che la Baixa dalla pianta a griglia che si percorre oggi appare così diversa dall'intricata Alfama sopravvissuta. Da qui Vasco da Gama salpò per l'India nel 1498, e la tassa su quel commercio delle spezie finanziò le decorazioni manueline in pietra che si ammirano a Belem. La Rivoluzione dei garofani del 1974, un colpo di stato militare quasi incruento, pose fine a quarant'anni di dittatura e viene ancora celebrata ogni 25 aprile.",
    knownFor: [
      "Tram giallo 28",
      "Pastel de nata",
      "Musica fado",
      "Terrazze panoramiche (miradouro)",
      "Piastrelle azulejo",
      "Torre di Belem",
    ],
  },
  prague: {
    citySlug: "prague",
    image: hero(11261851),
    imageAlt: "Il Castello di Praga e la Cattedrale di San Vito sopra il Ponte Carlo e la Moldava",
    history:
      "Praga nacque attorno a un guado sulla Moldava e a un castello sulla collina fondato intorno all'880, e nel XIV secolo divenne la sede dell'imperatore del Sacro Romano Impero Carlo IV, che costruì il Ponte Carlo, la Città Nuova e la più antica università dell'Europa centrale. La Defenestrazione di Praga del 1618, quando alcuni nobili protestanti gettarono i funzionari imperiali da una finestra del castello, contribuì a scatenare la Guerra dei trent'anni. Cosa insolita per la regione, il centro storico attraversò la Seconda guerra mondiale quasi intatto, ed è per questo che lo skyline gotico e barocco è così integro. La Rivoluzione di velluto del 1989 pose fine al regime comunista senza violenza, e Praga è da allora la capitale ceca.",
    knownFor: [
      "Ponte Carlo",
      "Castello di Praga",
      "Orologio astronomico",
      "Birra economica",
      "Skyline barocco",
      "Mercatini di Natale",
    ],
  },
  seville: {
    citySlug: "seville",
    image: hero(5470586),
    imageAlt:
      "Plaza de Espana a Siviglia all'ora dorata con il suo canale e le sue torri",
    history:
      "Siviglia fu la romana Hispalis e poi, per oltre cinque secoli, la città moresca di Ishbiliya, ed è per questo che il campanile della cattedrale, La Giralda, nacque come minareto e l'Alcazar è tuttora un palazzo mudéjar in uso. Dopo il 1492 la città detenne il monopolio della corona sul commercio con le Americhe, e l'oro e l'argento che risalivano il Guadalquivir la resero uno dei luoghi più ricchi d'Europa. Quella ricchezza edificò l'immensa cattedrale gotica, dove è sepolto Cristoforo Colombo. La fiabesca Plaza de Espana è molto più recente, costruita per l'Esposizione ibero-americana del 1929.",
    knownFor: [
      "Real Alcazar",
      "Flamenco",
      "Plaza de Espana",
      "Aranci",
      "Semana Santa",
      "Cultura delle tapas",
    ],
  },
  porto: {
    citySlug: "porto",
    image: hero(25695948),
    imageAlt:
      "Ponte in ferro Dom Luis I sul Douro con dietro i tetti della Ribeira di Porto",
    history:
      "Porto diede al Portogallo sia il suo nome, dal porto romano di Portus Cale, sia la sua reputazione di operosità e indipendenza. La città fece fortuna sul fiume Douro: le botti di vino scendevano dalla valle superiore per invecchiare nelle cantine di Vila Nova de Gaia, e i mercanti inglesi trasformarono quel commercio nel vino Porto a partire dal XVII secolo. Il Ponte Dom Luis I a doppio livello, inaugurato nel 1886, fu costruito da un allievo di Gustave Eiffel. Gli abitanti sono ancora chiamati tripeiros, mangiatori di trippa, per la leggenda secondo cui nel 1415 diedero la loro carne migliore alla flotta di Enrico il Navigatore e tennero per sé solo le frattaglie.",
    knownFor: [
      "Cantine di vino Porto",
      "Ponte Dom Luis I",
      "Lungofiume della Ribeira",
      "Livraria Lello",
      "Stazioni con azulejo",
      "Francesinha",
    ],
  },
  budapest: {
    citySlug: "budapest",
    image: hero(8390036),
    imageAlt:
      "Ponte delle Catene Szechenyi sul Danubio con dietro il Parlamento ungherese",
    history:
      "Budapest fu due città rivali fino al 1873: la collinare e regale Buda sulla riva occidentale e la pianeggiante e commerciale Pest su quella orientale, unite quando il Ponte delle Catene rese finalmente agevole attraversare il Danubio. I romani gestirono qui una città di guarnigione chiamata Aquincum, e il loro gusto per le sorgenti termali non se ne andò mai, ed è per questo che la città possiede ancora grandi bagni pubblici alimentati da acqua calda sotterranea. Gli anni attorno al 1896, millennio dell'insediamento ungherese, dotarono la città del suo Parlamento, della prima linea metropolitana dell'Europa continentale e di gran parte della sua grandiosa Andrassy Avenue. La rivolta del 1956 contro il dominio sovietico fu repressa ma mai dimenticata.",
    knownFor: [
      "Bagni termali",
      "Palazzo del Parlamento",
      "Ponte delle Catene",
      "Ruin bar",
      "Vedute sul Danubio",
      "Castello di Buda",
    ],
  },
  vienna: {
    citySlug: "vienna",
    image: hero(18110534),
    imageAlt:
      "Il Palazzo del Belvedere e il suo specchio d'acqua a Vienna sotto un cielo azzurro",
    history:
      "Vienna fu la capitale degli Asburgo per oltre sei secoli, e la sede del Sacro Romano Impero e poi dell'impero austro-ungarico fino al suo crollo nel 1918, ed è per questo che una città di meno di due milioni di abitanti ha palazzi costruiti per un continente. Quando le mura medievali caddero nel 1857, l'imperatore Francesco Giuseppe le sostituì con la Ringstrasse, il grande viale di musei, opera e parlamento che ancora oggi si percorre in cerchio. Attorno al 1900 la città fu un crogiolo del mondo moderno: Freud inventò qui la psicoanalisi, Klimt e Schiele ruppero con la tradizione, e Mahler dirigeva l'opera. Vienna è la capitale di una piccola Austria neutrale dal 1955, e vive ancora sulla cultura del caffè viennese che l'UNESCO oggi tutela.",
    knownFor: [
      "Castello di Schonbrunn",
      "Caffè viennesi",
      "Il Bacio di Klimt",
      "Palazzi imperiali",
      "Sachertorte",
      "Opera e balli",
    ],
  },
  granada: {
    citySlug: "granada",
    image: hero(38100344),
    imageAlt:
      "Il palazzo dell'Alhambra sopra Granada con dietro la Sierra Nevada innevata",
    history:
      "Granada fu l'ultimo regno musulmano dell'Europa occidentale, la capitale dell'emirato nasride che resistette per 250 anni dopo che il resto della Spagna era caduto. I suoi sovrani costruirono l'Alhambra, il più bel complesso di palazzi islamici sopravvissuto in Occidente, sulla collina sopra la città. Il 2 gennaio 1492 i Re Cattolici Isabella e Ferdinando presero la città, ponendo fine a quasi 800 anni di dominio moresco in Spagna; lo stesso anno, da Granada, Isabella accettò di finanziare Cristoforo Colombo. L'Alhambra fu semidimenticata finché lo scrittore Washington Irving non vi abitò e pubblicò i Racconti dell'Alhambra nel 1832, il che accese la febbre romantica che la salvò. Granada è oggi una città universitaria dove gli strati moresco e spagnolo convivono fianco a fianco.",
    knownFor: [
      "L'Alhambra",
      "Tapas gratuite",
      "Vedute dell'Albaicin",
      "Eredità moresca",
      "Sierra Nevada",
      "Flamenco del Sacromonte",
    ],
  },
  rome: {
    citySlug: "rome",
    image: hero(32619390),
    imageAlt: "Il Colosseo di Roma contro un cielo azzurro limpido",
    history:
      "Roma fu, secondo la sua stessa leggenda, fondata da Romolo nel 753 a.C., e crebbe fino a diventare la capitale di un impero che andava dalla Britannia al Sahara. Le rovine tra cui camminate, il Colosseo, il Foro, il Pantheon, sono i resti di una città che contava un milione di abitanti quando la Londra medievale ne contava ventimila. Quando l'impero cadde, i papi fecero di Roma la capitale del mondo cattolico, e il denaro rinascimentale e barocco la ricostruì attorno alle ossa antiche, ed è per questo che le fontane del Bernini poggiano su fondamenta romane. Divenne capitale di un'Italia unita solo nel 1871, l'ultimo pezzo del Paese ad aggregarsi. Tutto ciò che è venuto dopo, dal traffico all'aperitivo, si stratifica su tremila anni che non furono mai sgomberati.",
    knownFor: [
      "Il Colosseo",
      "Vaticano e Cappella Sistina",
      "Fontana di Trevi",
      "Rovine romane",
      "Pasta e gelato",
      "Fontane barocche",
    ],
  },
  amsterdam: {
    citySlug: "amsterdam",
    image: hero(12705128),
    imageAlt:
      "Case sui canali di Amsterdam e barche turistiche sul Damrak sotto un cielo azzurro",
    history:
      "Amsterdam nacque da un villaggio di pescatori del XIII secolo che sbarrò con una diga il fiume Amstel, da cui deriva il nome. La sua età dell'oro fu il Seicento, quando le navi olandesi dominavano il commercio mondiale e i mercanti che le finanziavano scavarono l'anello di canali, il Grachtengordel, e costruirono le alte e strette case a timpano che vedete ancora, tassate in base alla larghezza, ed è per questo che sono così sottili. Quella ricchezza finanziò Rembrandt e la mania dei tulipani che rovinò gli speculatori nel 1637. La città è sempre stata un rifugio, per gli ugonotti, per gli ebrei, e in seguito un sinonimo di tolleranza. Anna Frank si nascose qui dal 1942 fino a quando la sua famiglia fu tradita nel 1944, e la sua casa sul Prinsengracht è oggi il memoriale più visitato della città.",
    knownFor: [
      "L'anello dei canali",
      "Van Gogh Museum",
      "Casa di Anna Frank",
      "Biciclette",
      "Rijksmuseum",
      "Brown cafe",
    ],
  },
  florence: {
    citySlug: "florence",
    image: hero(981682),
    imageAlt:
      "La cupola del Brunelleschi si eleva sui tetti in cotto di Firenze",
    history:
      "Firenze è dove è iniziato il Rinascimento. Nel XV secolo i Medici, una famiglia di banchieri che di fatto governava la città, riversarono la loro fortuna su artisti e architetti, e il risultato è una piccola città che racchiude più arte celebre per metro quadrato di quasi ogni altro luogo sulla terra. Il Brunelleschi eresse la più grande cupola in muratura del mondo sopra la cattedrale nel 1436, ancora oggi lo skyline, senza alcuna impalcatura completa. Il fiorino d'oro coniato qui era la moneta più affidabile dell'Europa medievale, ed è così che una città toscana di mercanti finì per finanziare Michelangelo, Botticelli e Leonardo. Galileo insegnò qui, Machiavelli scrisse qui, e per sei anni dopo il 1865 Firenze fu persino la capitale di un'Italia appena unita.",
    knownFor: [
      "Il Duomo",
      "Arte rinascimentale",
      "Galleria degli Uffizi",
      "Il David di Michelangelo",
      "Ponte Vecchio",
      "Cucina toscana",
    ],
  },
  bruges: {
    citySlug: "bruges",
    image: hero(5612504),
    imageAlt:
      "Case di mattoni con frontoni a gradini lungo un canale di Bruges sotto un cielo azzurro",
    history:
      "Bruges era una delle città più ricche dell'Europa medievale, il nodo commerciale delle Fiandre dove la lana dall'Inghilterra diventava il tessuto più pregiato del continente. Ospitava quella che molti chiamano la prima borsa valori del mondo, dal nome della famiglia Van der Beurze nella cui locanda si riunivano i mercanti, da cui deriva la parola borsa. Poi il canale marittimo che l'aveva fatta ricca, lo Zwin, si insabbiò intorno al 1500, i mercanti si spostarono ad Anversa e Bruges si addormentò per quattro secoli. È proprio per questo che è sopravvissuta: senza denaro per abbattere e ricostruire, il centro medievale rimase intatto. Un cupo romanzo del 1892, Bruges-la-Morte, la rese di nuovo celebre, e da allora i turisti non hanno più smesso di arrivare.",
    knownFor: [
      "Canali medievali",
      "Il Campanile",
      "Cioccolato belga",
      "Arte fiamminga",
      "Birra trappista",
      "Piazze acciottolate",
    ],
  },
  barcelona: {
    citySlug: "barcelona",
    image: hero(21357884),
    imageAlt:
      "La Sagrada Familia che si eleva su Barcellona e sul mare, vista dal Park Guell",
    history:
      "Barcellona nacque come la città romana di Barcino, poi trascorse il Medioevo come capitale marinara della Corona d'Aragona, ed è per questo che il Quartiere Gotico conserva ancora palazzi medievali a un isolato dal porto. La città moderna nacque nel 1860, quando caddero le vecchie mura e l'ingegnere Ildefons Cerda tracciò l'Eixample, la griglia di isolati dagli angoli smussati che si percorre ancora oggi. Il denaro industriale finanziò poi il boom del Modernisme attorno al 1900, e Antoni Gaudi trasformò quella ricchezza nella Sagrada Familia, nel Park Guell e in Casa Batllo; la basilica fu iniziata nel 1882 ed è tuttora in fase di completamento. Le Olimpiadi del 1992 aprirono la città alle sue spiagge, e da allora Barcellona è una delle città più visitate d'Europa. È fieramente catalana, con una lingua propria e un forte movimento indipendentista.",
    knownFor: [
      "Sagrada Familia",
      "Architettura di Gaudi",
      "Park Guell",
      "La Rambla",
      "Tapas e vermut",
      "Spiagge cittadine",
    ],
  },
  berlin: {
    citySlug: "berlin",
    image: hero(37468367),
    imageAlt: "La Porta di Brandeburgo a Berlino sotto un cielo azzurro",
    history:
      "Berlino fu la capitale della Prussia e poi, dal 1871, di una Germania unificata. Gli anni della Repubblica di Weimar negli anni Venti la resero sinonimo di cabaret, cinema e arte moderna, finché i nazisti non presero il potere qui nel 1933 e condussero la guerra dalla città. Ciò che i bombardamenti lasciarono, la Guerra Fredda lo divise: dal 1961 il Muro di Berlino tagliò la città in due per 28 anni, fino a quando cadde il 9 novembre 1989 e la Germania si riunificò con Berlino come capitale nel 1990. Le cicatrici sono oggi le attrazioni, dai tratti superstiti del Muro ai valichi della Guerra Fredda e ai memoriali. Gli affitti economici nell'est svuotato trasformarono poi la città riunita nella capitale europea della techno e della creatività, che è la Berlino per cui la maggior parte della gente viene oggi.",
    knownFor: [
      "Porta di Brandeburgo",
      "Il Muro di Berlino",
      "Storia della Guerra Fredda",
      "Vita notturna techno",
      "Isola dei Musei",
      "Street art",
    ],
  },
  madrid: {
    citySlug: "madrid",
    image: hero(32314658),
    imageAlt: "Il palazzo Metropolis sulla Gran Via di Madrid all'ora dorata",
    history:
      "Madrid divenne capitale della Spagna quasi per decreto: nel 1561 il re Filippo II trasferì la sua corte in quello che era allora un modesto borgo, scelto in parte perché sorgeva nel centro esatto della penisola. I vicoli stretti del centro storico attorno alla Plaza Mayor si chiamano ancora Madrid de los Austrias, dal nome di quei re asburgici, mentre i successivi Borbone aggiunsero il Palazzo Reale e i boulevard. Il 2 maggio 1808 la città insorse contro le truppe di Napoleone, un massacro che Goya dipinse e che il Paese celebra ancora come festa. Madrid non ha un'unica meraviglia come l'Alhambra o la Sagrada Familia; il suo richiamo è la densità della vita e una delle più grandi concentrazioni di pittura al mondo, il Prado, il Reina Sofia e il Thyssen a dieci minuti a piedi l'uno dall'altro.",
    knownFor: [
      "Il Prado",
      "Parco del Retiro",
      "Tapas e terrazze",
      "Palazzo Reale",
      "Guernica",
      "Nottate lunghe",
    ],
  },
  krakow: {
    citySlug: "krakow",
    image: hero(37459506),
    imageAlt:
      "Il Mercato dei Tessuti e la Basilica di Santa Maria sulla Piazza del Mercato di Cracovia",
    history:
      "Cracovia fu la capitale reale della Polonia per più di cinque secoli, finché la corte non si trasferì a Varsavia nel 1596, e i suoi re venivano incoronati e sepolti sulla collina del Wawel. L'Università Jagellonica, fondata nel 1364, è una delle più antiche d'Europa e formò un giovane Copernico. A differenza di Varsavia, la città vecchia attraversò la Seconda guerra mondiale quasi indenne, ed è per questo che la medievale Piazza del Mercato, la più grande d'Europa, è ancora intatta e patrimonio UNESCO. La storia più cupa è a due passi: i nazisti governavano la Polonia occupata da Cracovia, svuotarono il quartiere ebraico di Kazimierz confinandolo nel ghetto di Podgorze, e costruirono Auschwitz-Birkenau a un'ora a ovest. Economica, percorribile a piedi e piena di studenti, Cracovia è oggi una delle vacanze brevi più amate d'Europa.",
    knownFor: [
      "Piazza del Mercato",
      "Castello del Wawel",
      "Kazimierz",
      "Pierogi economici",
      "Mercatino di Natale",
      "Gita ad Auschwitz",
    ],
  },
  copenhagen: {
    citySlug: "copenhagen",
    image: hero(20228124),
    imageAlt:
      "Le colorate case del porto e le barche di legno di Nyhavn a Copenaghen",
    history:
      "Copenaghen crebbe da villaggio di pescatori a città mercantile fortificata che controllava l'ingresso al Baltico, da cui deriva il suo nome, porto dei mercanti. Gran parte della città vecchia fu plasmata da re Cristiano IV all'inizio del Seicento, che costruì il Castello di Rosenborg e la Torre Rotonda; il canale da cartolina di Nyhavn fu scavato poco dopo come porto operativo per marinai e taverne. La flotta britannica bombardò e diede alle fiamme gran parte della città nel 1807 durante le guerre napoleoniche. Hans Christian Andersen scrisse qui le sue fiabe nell'Ottocento, e la Sirenetta di bronzo fu collocata nel 1913. La Danimarca è la monarchia più antica del mondo, e la Copenaghen moderna ha trasformato quella lunga e comoda storia in una reputazione globale per design, ciclismo e nuova cucina nordica.",
    knownFor: [
      "Porto di Nyhavn",
      "Giardini di Tivoli",
      "Biciclette ovunque",
      "Hygge e design",
      "Nuova cucina nordica",
      "La Sirenetta",
    ],
  },
  athens: {
    citySlug: "athens",
    image: hero(33201846),
    imageAlt: "L'Acropoli di Atene sulla sua rocca sotto un cielo azzurro limpido",
    history:
      "Atene è dove buona parte del mondo occidentale fu inventata. Nel V secolo a.C. era la più ricca e potente delle città-stato greche, e sotto Pericle costruì il Partenone e il resto dell'Acropoli nello stesso periodo in cui Socrate, e poi Platone e Aristotele, discutevano di filosofia nelle sue strade e inventavano la democrazia. Roma, poi Bisanzio, poi gli Ottomani presero ciascuno la città, e il Partenone servì da chiesa e da moschea prima che una granata veneziana colpisse la polvere da sparo che gli Ottomani vi avevano stivato dentro nel 1687 e ne facesse saltare il tetto. Quando la Grecia conquistò l'indipendenza, Atene divenne la capitale del nuovo regno nel 1834, allora una cittadina di poche migliaia di persone, e crebbe fino alla vasta città moderna che oggi avvolge quelle antiche rocce.",
    knownFor: [
      "L'Acropoli",
      "Il Partenone",
      "Rovine antiche",
      "Viste dai rooftop",
      "Souvlaki e mezze",
      "Culla della democrazia",
    ],
  },
  edinburgh: {
    citySlug: "edinburgh",
    image: hero(28851815),
    imageAlt:
      "Lo skyline della Città Vecchia di Edimburgo con lo Scott Monument e la torre dell'orologio del Balmoral",
    history:
      "Edimburgo è la capitale della Scozia da sei secoli, e il castello sul suo tappo di roccia vulcanica è stato fortificato per molto più a lungo di così. La medievale Città Vecchia crebbe come una densa spina di alte case popolari che scende lungo il crinale del Royal Mile dal castello al palazzo reale di Holyroodhouse. Nel Settecento, durante l'Illuminismo scozzese che produsse David Hume e Adam Smith, la città costruì l'elegante griglia georgiana della Città Nuova oltre la valle, e si guadagnò il soprannome di Atene del Nord. Il primo Edinburgh Festival Fringe si svolse nel 1947 ed è oggi il più grande festival delle arti al mondo, che occupa l'intera città ogni agosto. I caffè in cui J.K. Rowling scrisse Harry Potter fanno ancora ottimi affari.",
    knownFor: [
      "Castello di Edimburgo",
      "Il Royal Mile",
      "Arthur's Seat",
      "Il festival Fringe",
      "Whisky scozzese",
      "Harry Potter",
    ],
  },
  paris: {
    citySlug: "paris",
    image: hero(36771040),
    imageAlt: "La Torre Eiffel che si eleva su Parigi incorniciata dagli alberi",
    history:
      "Parigi nacque come insediamento della tribù dei Parisii su un'isola della Senna, crebbe fino a diventare la città romana di Lutetia, ed è stata capitale della Francia per gran parte di mille anni. Notre-Dame fu iniziata nel 1163, e il medievale Quartiere Latino crebbe attorno a una delle prime università d'Europa. La Rivoluzione del 1789 cominciò qui con la presa della Bastiglia, e negli anni Cinquanta e Sessanta dell'Ottocento il barone Haussmann squarciò l'affollata città vecchia per tracciare gli ampi boulevard e le uniformi facciate in pietra calcarea che la definiscono oggi. La Torre Eiffel fu eretta come installazione temporanea per l'Esposizione Universale del 1889 e non fu mai smontata. Parigi fu la capitale dell'arte del XX secolo, venne liberata nel 1944, e ha riaperto una Notre-Dame restaurata a dicembre 2024, cinque anni dopo l'incendio.",
    knownFor: [
      "Torre Eiffel",
      "Il Louvre",
      "Notre-Dame",
      "Dehors dei caffè",
      "Boulevard di Haussmann",
      "Arte e moda",
    ],
  },
  venice: {
    citySlug: "venice",
    image: hero(34775901),
    imageAlt:
      "Il Canal Grande a Venezia costeggiato da palazzi e gondole visto dal Rialto",
    history:
      "Venezia fu fondata da profughi della terraferma che si rifugiarono sulle paludose isole della laguna nel V e VI secolo, e crebbe fino a diventare una repubblica che guidò il commercio del Mediterraneo per mille anni. Al suo apice la Serenissima, guidata da un Doge eletto dal Palazzo Ducale, era uno degli stati più ricchi d'Europa; Marco Polo partì da qui per la Cina. Tutto fu costruito su milioni di pali di legno conficcati nel fango, ed è per questo che i palazzi paiono sorgere dritti dall'acqua. La Repubblica cadde infine davanti a Napoleone nel 1797. Oggi Venezia si estende su 118 isole del tutto prive di auto, e lotta con le fondamenta che sprofondano, le inondazioni dell'acqua alta e il turismo di massa, ed è per questo che ora applica ai visitatori giornalieri un contributo d'accesso nei giorni affollati.",
    knownFor: [
      "Il Canal Grande",
      "Piazza San Marco",
      "Gondole",
      "Ponte di Rialto",
      "Maschere di Carnevale",
      "Vetro di Murano",
    ],
  },
  dublin: {
    citySlug: "dublin",
    image: hero(13157974),
    imageAlt:
      "Il Ha'penny Bridge sul fiume Liffey a Dublino con dietro la cupola verde della Custom House",
    history:
      "Dublino nacque come porto vichingo di commercio e di schiavi sul fiume Liffey attorno all'841, e il suo nome deriva dall'irlandese Dubh Linn, la pozza nera dove ormeggiavano le navi lunghe. Divenne il centro del dominio inglese in Irlanda dopo l'arrivo dei normanni nel 1170, e le ampie strade e le piazze in mattoni rossi della città georgiana furono tracciate nel Settecento, quando Dublino era la seconda città dell'Impero britannico. La Rivolta di Pasqua del 1916 iniziò al General Post Office di O'Connell Street e diede il via alla lotta che portò all'indipendenza irlandese nel 1922. La città porta un peso letterario spropositato, patria di quattro premi Nobel e ambientazione dell'Ulisse di James Joyce, ed è oggi la capitale giovane e trainata dalla tecnologia di un'Irlanda molto più ricca.",
    knownFor: [
      "Guinness Storehouse",
      "Book of Kells",
      "Porte georgiane",
      "Pub di Temple Bar",
      "Trinity College",
      "Musica tradizionale",
    ],
  },
  stockholm: {
    citySlug: "stockholm",
    image: hero(30158443),
    imageAlt:
      "Il lungomare di Riddarholmen a Stoccolma e la guglia della chiesa visti al di là dell'acqua sotto un cielo azzurro",
    history:
      "Stoccolma fu fondata attorno al 1252 sulla piccola isola oggi chiamata Gamla Stan, dove il lago Malaren si getta nel Mar Baltico, e si arricchì controllando il commercio del ferro e del rame in uscita dalla Svezia. Divenne la capitale permanente nel XV secolo e la sede dei re svedesi, il cui Palazzo Reale domina ancora la città vecchia. La città si estese sulle sue quattordici isole man mano che la Svezia saliva al rango di grande potenza nel Seicento, l'epoca del vascello da guerra Vasa, che si capovolse nel porto durante il suo viaggio inaugurale nel 1628 e fu sollevato, quasi intatto, nel 1961. Risparmiata dalla distruzione di entrambe le guerre mondiali grazie alla neutralità svedese, Stoccolma conservò il suo nucleo storico e fece del XX secolo un sinonimo di design, e ospita ancora la cerimonia e il banchetto del Premio Nobel ogni dicembre.",
    knownFor: [
      "Città vecchia di Gamla Stan",
      "Il vascello Vasa",
      "Museo degli ABBA",
      "L'arcipelago",
      "Cultura della fika",
      "Il Premio Nobel",
    ],
  },
  nice: {
    citySlug: "nice",
    image: hero(26928991),
    imageAlt:
      "I tetti rossi della Nizza vecchia con la torre dell'orologio barocca e le colline della Riviera sullo sfondo",
    history:
      "Nizza ha guardato per gran parte della sua storia all'Italia più che alla Francia: appartenne per secoli ai Savoia e divenne francese solo nel 1860, dopo un plebiscito, ed è per questo che la città vecchia ha un'aria ligure e il dialetto e la cucina locali sono più vicini a Genova che a Parigi. La città si arricchì nell'Ottocento, quando gli aristocratici britannici e russi venivano a passare l'inverno sulla costa, e fu il loro denaro a pagare la passeggiata sul lungomare che porta ancora il loro nome, la Promenade des Anglais. Matisse e Chagall si stabilirono entrambi qui per la luce e lasciarono i loro musei sulle frondose colline di Cimiez, sul sito della città romana di Cemenelum. Oggi Nizza è la capitale ufficiosa della Riviera e la porta d'accesso a Monaco, Cannes e ai villaggi arroccati lungo la Costa Azzurra.",
    knownFor: [
      "Promenade des Anglais",
      "Vieux Nice",
      "Mercato del Cours Saleya",
      "Spiagge di ciottoli",
      "Socca",
      "Gite in Riviera",
    ],
  },
  dubrovnik: {
    citySlug: "dubrovnik",
    image: hero(16884684),
    imageAlt:
      "I tetti in cotto della città vecchia di Dubrovnik con la cupola della cattedrale e il Monte Srd sullo sfondo",
    history:
      "Dubrovnik trascorse secoli come Repubblica di Ragusa, una piccola ma astuta città-stato marinara che mantenne l'indipendenza pagando tributi all'impero di volta in volta più forte, mentre gestiva una flotta mercantile che rivaleggiava con Venezia. Le sue mura in pietra, alte fino a 25 metri e lunghe quasi due chilometri, non furono mai violate, e lo Stradun lastricato di marmo e le chiese barocche al loro interno furono in gran parte ricostruiti dopo un catastrofico terremoto nel 1667. La repubblica finì quando Napoleone la abolì nel 1808, e la città entrò poi a far parte della Jugoslavia e quindi della Croazia indipendente. Le granate danneggiarono la città vecchia durante l'assedio del 1991-1992 nella guerra d'indipendenza croata, ma fu restaurata con cura minuziosa, e una nuova ondata di fama arrivò quando divenne Approdo del Re in Game of Thrones.",
    knownFor: [
      "Le mura cittadine",
      "Tetti in cotto",
      "Stradun",
      "Luoghi di Game of Thrones",
      "Isola di Lokrum",
      "Spiagge adriatiche",
    ],
  },
  reykjavik: {
    citySlug: "reykjavik",
    image: hero(20165201),
    imageAlt:
      "Lo skyline di Reykjavik al di là dell'acqua con la torre della Hallgrimskirkja e le montagne innevate sullo sfondo",
    history:
      "Reykjavik fu, secondo le antiche saghe, il sito del primo insediamento norreno d'Islanda attorno all'874, quando si dice che Ingolfur Arnarson gettò in mare i pilastri del suo seggio d'onore e costruì dove approdarono; il nome significa baia fumosa, dal vapore che si leva dalle sue sorgenti calde. Rimase un minuscolo villaggio per la gran parte di mille anni e crebbe fino a diventare una vera cittadina solo nel Settecento, diventando la capitale di un'Islanda autonoma nel 1918 e di una repubblica pienamente indipendente nel 1944, quando il Paese recise gli ultimi legami con la Danimarca. La città ebbe il suo momento da Guerra Fredda nel 1986, quando Reagan e Gorbaciov si incontrarono alla casa di Hofdi e arrivarono vicini ad accordarsi per smantellare i loro arsenali nucleari. Riscaldata e alimentata quasi interamente da energia geotermica e idroelettrica, è la capitale più a nord del mondo e il campo base per le cascate, i geyser e l'aurora boreale d'Islanda.",
    knownFor: [
      "Hallgrimskirkja",
      "Aurora boreale",
      "Golden Circle",
      "Blue Lagoon",
      "Piscine geotermiche",
      "Whale watching",
    ],
  },
  munich: {
    citySlug: "munich",
    image: hero(13762982),
    imageAlt:
      "Le due cupole a cipolla gemelle della Frauenkirche e la torre del Nuovo Municipio sulla città vecchia di Monaco",
    history:
      "Monaco nacque nel 1158 attorno a un insediamento di monaci, da cui derivano sia il suo nome, da Munichen, sia il monachello sul suo stemma. Divenne la sede della dinastia dei Wittelsbach, che governò la Baviera per più di 700 anni e riempì la città di palazzi come la Residenz e Nymphenburg facendone una capitale d'arte e di musica. Fu anche il luogo in cui nacque il movimento nazista negli anni Venti e dove fu firmato l'Accordo di Monaco del 1938, anche se gli studenti della Rosa Bianca che resistettero dall'università sono ricordati in tutta la città. Ricostruita con cura dopo i bombardamenti di guerra, Monaco si reinventò prospera, verde e notoriamente affezionata alla tradizione, nota oggi per la BMW, il FC Bayern, le birrerie e l'Oktoberfest, tenuto per la prima volta nel 1810 per celebrare un matrimonio reale.",
    knownFor: [
      "Marienplatz",
      "Oktoberfest",
      "Birrerie all'aperto",
      "L'Englischer Garten",
      "Gita a Neuschwanstein",
      "BMW e FC Bayern",
    ],
  },
  tallinn: {
    citySlug: "tallinn",
    image: hero(35838020),
    imageAlt:
      "I tetti rossi e le guglie delle chiese della città vecchia medievale di Tallinn con dietro lo skyline moderno al tramonto",
    history:
      "Tallinn crebbe come porto commerciale anseatico sul Baltico, e già nel XIV e XV secolo i suoi mercanti avevano innalzato le mura, le case delle corporazioni e le chiese della città vecchia che ancora oggi resta quasi intatta, il che ne fa una delle città medievali meglio conservate d'Europa. Il nome viene spesso ricondotto a Taani linn, la città danese, dai danesi che presero la roccaforte sulla collina nel 1219; la città alta di Toompea ospitava i governanti mentre i mercanti di lingua tedesca gestivano la città bassa sottostante. L'Estonia fu assorbita dall'impero russo e poi, dopo una breve prima indipendenza, dall'Unione Sovietica fino al 1991, quando la pacifica Rivoluzione cantata restituì il Paese. Da allora Tallinn è diventata la vetrina della e-Estonia, un luogo che ha contribuito a creare Skype e gestisce il proprio governo online, tutto avvolto attorno a un fiabesco nucleo medievale.",
    knownFor: [
      "Città vecchia medievale",
      "Punti panoramici di Toompea",
      "Cattedrale Alexander Nevsky",
      "Telliskivi e Kalamaja",
      "e-Estonia",
      "Mercatino di Natale",
    ],
  },
  oslo: {
    citySlug: "oslo",
    image: hero(18170373),
    imageAlt:
      "Il tetto di marmo bianco del Teatro dell'Opera di Oslo che scende verso il porto sotto un cielo azzurro",
    history:
      "Oslo fu fondata attorno al 1040 e resa capitale della Norvegia dal re Haakon V intorno al 1300, ma dopo un devastante incendio nel 1624 il re danese Cristiano IV la ricostruì accanto alla fortezza di Akershus e la ribattezzò Christiania, nome che mantenne finché non tornò a essere Oslo nel 1925. Per secoli la Norvegia fu governata dalla Danimarca e poi legata alla Svezia, e conquistò la piena indipendenza solo nel 1905, quando chiamò il re i cui discendenti regnano ancora oggi. Il petrolio del Mare del Nord, scoperto alla fine degli anni Sessanta, trasformò una modesta capitale nordica in una delle città più ricche del pianeta, il che pagò il Teatro dell'Opera sul lungomare e la serie di nuovi musei lungo il fiordo. Sede del Premio Nobel per la Pace, assegnato qui ogni dicembre, Oslo avvolge un centro compatto nel bosco e nel fiordo da cui la gente del posto scia e naviga direttamente dalla città.",
    knownFor: [
      "Il Teatro dell'Opera",
      "L'Urlo",
      "Parco di Vigeland",
      "L'Oslofjord",
      "Premio Nobel per la Pace",
      "Holmenkollen",
    ],
  },
  helsinki: {
    citySlug: "helsinki",
    image: hero(12319482),
    imageAlt:
      "La Cattedrale di Helsinki che si erge sul porto sud e sulla piazza del mercato vista dal mare",
    history:
      "Helsinki fu fondata nel 1550 dal re Gustavo Vasa di Svezia come scalo commerciale per rivaleggiare con Tallinn dall'altra parte del golfo, ma rimase una piccola città per secoli. Tutto cambiò nel 1809, quando la Svezia perse la Finlandia a favore della Russia: lo zar fece di Helsinki la capitale del nuovo Granducato nel 1812 e incaricò l'architetto Carl Ludwig Engel di disegnare la neoclassica Piazza del Senato e la sua cattedrale bianca perché somigliassero a una San Pietroburgo in miniatura. La Finlandia conquistò infine l'indipendenza nel 1917, e il Novecento trasformò Helsinki in una vetrina del design e dell'architettura moderna finlandesi, da Alvar Aalto a Marimekko. Ospitò le Olimpiadi del 1952 e gli Accordi di Helsinki del 1975, e resta una capitale compatta e affacciata sul mare dove la sauna è uno stile di vita.",
    knownFor: [
      "Cattedrale di Helsinki",
      "Piazza del Senato",
      "Fortezza di Suomenlinna",
      "Il Design District",
      "Cultura della sauna",
      "La piazza del mercato",
    ],
  },
  naples: {
    citySlug: "naples",
    image: hero(31668031),
    imageAlt:
      "Le cupole e i tetti di Napoli con il Golfo di Napoli e il Vesuvio sullo sfondo al crepuscolo",
    history:
      "Napoli fu fondata da coloni greci attorno al 600 a.C. come Neapolis, la città nuova, e conservò la sua griglia greca, ancora leggibile nella linea dritta di Spaccanapoli, attraverso il dominio romano, bizantino, normanno e spagnolo. Per secoli fu la capitale di un proprio regno, la città più grande d'Italia e una delle più grandi d'Europa, sede reale borbonica il cui teatro d'opera, il San Carlo del 1737, è il più antico ancora in attività al mondo. Tutto questo sta sotto il Vesuvio, il vulcano che seppellì Pompei ed Ercolano nel 79 d.C. e che ancora incombe, dormiente ma vivo, sul golfo. Povera, densa e ferocemente fiera, Napoli ha dato al mondo la pizza, nata qui nel Settecento e fissata come Margherita nel 1889, e una devozione per Diego Maradona che rasenta il religioso.",
    knownFor: [
      "Pizza margherita",
      "Vesuvio",
      "Gita a Pompei",
      "Spaccanapoli",
      "Maradona",
      "Il Cristo velato",
    ],
  },
  split: {
    citySlug: "split",
    image: hero(6701514),
    imageAlt:
      "Il lungomare e la città vecchia di Spalato con il campanile della cattedrale e i monti Mosor sullo sfondo, visti dal mare",
    history:
      "Spalato è cresciuta, in modo unico, dentro un palazzo romano: l'imperatore Diocleziano, l'unico sovrano romano a rinunciare al trono volontariamente, vi fece costruire un vasto palazzo fortificato per il ritiro attorno al 305 d.C., e quando la vicina Salona cadde in mano agli invasori i profughi si trasferirono semplicemente tra le sue mura e non se ne andarono più. Diciassette secoli dopo la gente vive e commercia ancora dentro il palazzo, la sua cattedrale è il mausoleo dello stesso Diocleziano e i suoi sotterranei sopravvivono quasi intatti. La città passò per mani bizantine, veneziane, asburgiche e brevemente napoleoniche, trascorse il XX secolo nella Jugoslavia e divenne croata nel 1991. Oggi Spalato è la turbolenta capitale della Dalmazia, un porto e la porta d'accesso alle isole, nota tanto per il suo fervente calcio dell'Hajduk e per il suo gioco da spiaggia picigin quanto per le sue pietre romane.",
    knownFor: [
      "Il Palazzo di Diocleziano",
      "La Riva",
      "Il campanile di San Doimo",
      "La collina di Marjan",
      "Le isole dalmate",
      "I luoghi del Trono di Spade",
    ],
  },
  riga: {
    citySlug: "riga",
    image: hero(33830451),
    imageAlt:
      "I tetti della città vecchia di Riga e la guglia della cattedrale con dietro il fiume Daugava e il ponte Vansu",
    history:
      "Riga fu fondata nel 1201 dal vescovo tedesco Alberto come base per convertire il Baltico con la spada, e crebbe fino a diventare la città più grande e ricca del Baltico orientale sotto la Lega anseatica, gestita per secoli da mercanti di lingua tedesca e dai cavalieri livoni. Passò per il dominio polacco, svedese e poi russo, e attorno al 1900 un boom industriale la rese la terza città dell'impero russo e ricoprì i suoi nuovi quartieri della più stravagante architettura Art Nouveau d'Europa. La Lettonia conquistò l'indipendenza nel 1918, fu inghiottita dall'Unione Sovietica nel 1940, e si liberò di nuovo nel 1991 attraverso la pacifica Rivoluzione cantata e la catena umana della Via Baltica. Oggi Riga è la più grande delle tre capitali baltiche, una città vecchia patrimonio UNESCO avvolta in boulevard Jugendstil.",
    knownFor: [
      "Le guglie della città vecchia",
      "Facciate Art Nouveau",
      "Il Mercato Centrale",
      "Casa delle Teste Nere",
      "Ambra baltica",
      "La Festa del canto",
    ],
  },
  brussels: {
    citySlug: "brussels",
    image: hero(655295),
    imageAlt:
      "Le dorate facciate barocche delle case delle corporazioni della Grand-Place a Bruxelles sotto un cielo nuvoloso",
    history:
      "Bruxelles nacque come insediamento fortificato su un'isola del paludoso fiume Senne attorno al 979 e crebbe fino a diventare la sede dei duchi di Brabante e una residenza prediletta dei duchi di Borgogna e degli Asburgo. Le sue corporazioni costruirono la Grand-Place, e quando le truppe francesi la bombardarono e rasero al suolo nel 1695 le corporazioni ricostruirono le loro case più grandiose di prima, nel barocco dorato che si vede ancora oggi. Il Belgio fu creato nel 1830 con Bruxelles come capitale, e la ricchezza di un boom industriale e di un impero coloniale pagò i grandi boulevard, l'Art Nouveau di Victor Horta e l'immenso Palazzo di Giustizia. Ufficialmente bilingue in francese e olandese, Bruxelles divenne la capitale di fatto dell'Unione europea dopo il 1958, ed è per questo che una comoda città belga oggi contribuisce a governare un continente.",
    knownFor: [
      "La Grand-Place",
      "Birra belga",
      "Cioccolato",
      "Frites",
      "Murales a fumetti",
      "Art Nouveau",
    ],
  },
  vilnius: {
    citySlug: "vilnius",
    image: hero(28975990),
    imageAlt:
      "Le chiese barocche e i tetti rossi della città vecchia di Vilnius visti dall'alto",
    history:
      "Vilnius fu, secondo la leggenda, fondata quando il Granduca Gediminas sognò un lupo di ferro che ululava sul colle e vi costruì il suo castello negli anni 1320, e crebbe fino a diventare la capitale del Granducato di Lituania, un tempo il più grande stato d'Europa, che si estendeva dal Baltico quasi fino al Mar Nero. La sua università, fondata nel 1579, e le sue fitte chiese barocche ne fecero un grande centro di cultura, e nel XIX secolo era una delle più importanti città ebraiche del mondo, la Gerusalemme del Nord, finché la comunità non fu distrutta nell'Olocausto. Passata tra la Polonia, l'occupazione nazista e l'Unione Sovietica, la Lituania fu la prima repubblica a dichiarare l'indipendenza dall'URSS, nel 1990, e i carri armati sovietici uccisero folle disarmate alla torre della TV nel gennaio 1991 prima che si liberasse. Oggi Vilnius è una capitale economica, verde e rilassata avvolta attorno alla più grande città vecchia barocca d'Europa.",
    knownFor: [
      "Città vecchia barocca",
      "La repubblica di Uzupis",
      "Torre di Gediminas",
      "La Porta dell'Aurora",
      "Cepelinai",
      "Castello di Trakai",
    ],
  },
  bratislava: {
    citySlug: "bratislava",
    image: hero(10137866),
    imageAlt:
      "Il castello bianco a quattro torri di Bratislava sulla collina sopra il Danubio",
    history:
      "Bratislava è stata slovacca, ungherese, austriaca e cecoslovacca nel giro di poche generazioni, ed è stata nota per secoli con i suoi nomi tedesco e ungherese, Pressburg e Pozsony. Per quasi tre secoli, mentre gli Ottomani tenevano Buda, fu la capitale dell'Ungheria Reale e la città dell'incoronazione dove 11 re e regine d'Ungheria, tra cui Maria Teresa, furono incoronati nella Cattedrale di San Martino. Gli Asburgo, Napoleone e la Guerra fredda lasciarono tutti il segno: il castello di Devin sopra la città sorvegliava il margine occidentale del blocco comunista, con il suo confine trasformato in una zona di morte fino al 1989. Bratislava divenne la capitale di una Slovacchia indipendente solo nel 1993, dopo la separazione pacifica della Cecoslovacchia, ed è oggi una piccola, economica capitale dell'UE in rapido mutamento, a un'ora a valle di Vienna lungo il fiume.",
    knownFor: [
      "Castello di Bratislava",
      "La città vecchia barocca",
      "Le incoronazioni di San Martino",
      "Il ponte UFO",
      "La statua di Cumil",
      "Birra slovacca a poco prezzo",
    ],
  },
  ljubljana: {
    citySlug: "ljubljana",
    image: hero(25053927),
    imageAlt:
      "La chiesa francescana rosa e il Triplo Ponte di Plecnik sul fiume Ljubljanica a Lubiana",
    history:
      "Lubiana nacque come colonia romana di Emona, tracciata intorno al 14 d.C. dove la strada dall'Italia attraversava la Ljubljanica, e frammenti delle sue mura riaffiorano ancora in città. Trascorse sei secoli sotto gli Asburgo come Laibach, capitale della provincia della Carniola, e ospitò il Congresso di Lubiana nel 1821. Un terremoto ne rase al suolo gran parte nel 1895, e la ricostruzione diede al centro le sue facciate in stile Secessione viennese; poi, tra le due guerre, l'architetto Joze Plecnik ridisegnò la città quasi da solo, aggiungendo il Triplo Ponte, il colonnato del mercato sul fiume e la Biblioteca Nazionale, opera oggi tutelata dall'UNESCO. La Slovenia si staccò dalla Jugoslavia nel 1991 dopo una guerra di dieci giorni, la più breve di quei conflitti, e da allora Lubiana ha trasformato il suo centro senza auto e le sue rive in una delle capitali più verdi d'Europa.",
    knownFor: [
      "Il Triplo Ponte",
      "Il Castello di Lubiana",
      "L'architettura di Plecnik",
      "Il simbolo del drago",
      "I caffè sul fiume",
      "La gita al Lago di Bled",
    ],
  },
  zurich: {
    citySlug: "zurich",
    image: hero(35975317),
    imageAlt:
      "Le torri gemelle del Grossmunster sopra il fiume Limmat e la città vecchia di Zurigo",
    history:
      "Zurigo nacque come posto di dogana romano di Turicum sulla Limmat, si arricchì nel Medioevo con la seta e il commercio, e nel 1519 divenne la culla della Riforma svizzera quando Huldrych Zwingli cominciò a predicare al Grossmunster e fece spogliare le chiese di ogni ornamento. Entrò nella Confederazione svizzera nel 1351 e trasformò la sua parsimonia protestante in un genio per le banche, ed è per questo che una città di medie dimensioni gestisce una fetta del denaro del mondo dalla Bahnhofstrasse e da Paradeplatz. Nel 1916 il Cabaret Voltaire nella città vecchia diede i natali al Dada, il movimento anti-arte, mentre Lenin tramava la rivoluzione a poche strade di distanza. Oggi Zurigo è in cima alle classifiche mondiali per qualità della vita e costo della vita allo stesso tempo: immacolata, pulita come il suo lago e bellissima, e cara da far girare la testa.",
    knownFor: [
      "Il lago di Zurigo",
      "Il Grossmunster",
      "La Bahnhofstrasse",
      "Le banche svizzere",
      "Le vetrate di Chagall",
      "Prezzi altissimi",
    ],
  },
  warsaw: {
    citySlug: "warsaw",
    image: hero(32555031),
    imageAlt:
      "Le colorate case borghesi ricostruite e i campanili delle chiese della città vecchia di Varsavia",
    history:
      "Varsavia divenne capitale della Polonia intorno al 1596, quando il re trasferì la corte da Cracovia, e crebbe fino a diventare l'elegante sede di una vasta confederazione polacco-lituana. Il XX secolo la cancellò quasi del tutto: sotto l'occupazione nazista la città vide la rivolta del Ghetto del 1943 e poi l'Insurrezione di Varsavia del 1944, dopo la quale i tedeschi demolirono sistematicamente ciò che restava, e nel 1945 circa l'85 per cento della città giaceva in macerie. Ciò che sorge oggi è un atto di sfida, la Città Vecchia ricostruita mattone su mattone da vecchi dipinti e disegni negli anni Cinquanta e ora tutelata dall'UNESCO proprio per questo. I sovietici piantarono poi il Palazzo della Cultura nel centro; dal 1989 attorno a esso si sono levate torri di vetro, e Varsavia è diventata la capitale veloce, verde e alla buona di una Polonia dell'UE.",
    knownFor: [
      "La Città Vecchia ricostruita",
      "Il Museo dell'Insurrezione di Varsavia",
      "Il Palazzo della Cultura",
      "I concerti di Chopin",
      "La Sirena",
      "I milk bar",
    ],
  },
  bucharest: {
    citySlug: "bucharest",
    image: hero(37944880),
    imageAlt:
      "L'elaborata cupola Belle Epoque del Palazzo CEC su Calea Victoriei a Bucarest",
    history:
      "Bucarest compare per la prima volta nei documenti nel 1459, legata dalla leggenda a Vlad l'Impalatore, il principe che ispirò Dracula, e crebbe fino a diventare la capitale della Valacchia e poi, nel 1862, di una Romania unita. Attorno al 1900 architetti formatisi in Francia la ricoprirono di viali e palazzi Belle Epoque, valendole il soprannome di Piccola Parigi dell'Est, completa di un proprio Arco di Trionfo. Quell'eleganza fu sventrata due volte: da un enorme terremoto nel 1977, e poi dal dittatore Nicolae Ceausescu, che negli anni Ottanta rase al suolo un quinto del vecchio centro per erigere il suo mostruoso Palazzo del Parlamento e i viali stalinisti tutt'attorno. Ceausescu fu rovesciato e giustiziato nella rivoluzione del dicembre 1989, esplosa in quella che oggi è la Piazza della Rivoluzione, e Bucarest è oggi la capitale veloce, economica e contraddittoria di una Romania dell'UE.",
    knownFor: [
      "Il Palazzo del Parlamento",
      "I viali Belle Epoque",
      "La città vecchia di Lipscani",
      "L'Ateneo",
      "Prezzi molto bassi",
      "La leggenda di Dracula",
    ],
  },
};

export default extrasIt;
