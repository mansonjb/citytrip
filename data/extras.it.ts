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
};

export default extrasIt;
