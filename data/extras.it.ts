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
};

export default extrasIt;
