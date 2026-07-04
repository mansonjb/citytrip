import type en from "./en";

const fr: typeof en = {
  locale: "fr",
  months: [
    "janvier", "février", "mars", "avril", "mai", "juin",
    "juillet", "août", "septembre", "octobre", "novembre", "décembre",
  ],
  monthsShort: [
    "Jan", "Fév", "Mar", "Avr", "Mai", "Juin",
    "Juil", "Août", "Sep", "Oct", "Nov", "Déc",
  ],
  common: {
    day: "Jour",
    days: "jours",
    from: "dès",
    perNight: "/nuit",
    checkPrices: "Voir les prix",
    findHotels: "Trouver un hôtel",
    free: "Gratuit",
    tip: "Astuce",
    morning: "Matin",
    afternoon: "Après-midi",
    evening: "Soir",
    comingSoon: "(bientôt)",
    home: "Accueil",
    faqTitle: "Questions rapides, réponses directes",
  },
  header: { destinations: "Destinations", guides: "Guides", method: "Méthode" },
  footer: {
    tagline:
      "Le bon nombre de jours, le bon quartier, le bon mois. Des guides city break construits sur des données structurées et de vrais horaires, pas du remplissage.",
    cities: "Villes",
    site: "Site",
    allDestinations: "Toutes les destinations",
    travelGuides: "Guides de voyage",
    aboutMethod: "À propos et méthodologie",
    privacy: "Politique de confidentialité",
    disclosure:
      "Perfect City Break touche une commission sur les liens de réservation (Stay22 et partenaires billetterie). Cela ne change jamais le prix que vous payez ni nos recommandations.",
  },
  stay22: {
    loading: "Chargement de la carte des hôtels…",
    mapNote: "La carte affiche les prix des hôtels en direct.",
    openSearch: "Ouvrir la recherche d'hôtels complète",
    supportNote:
      ". Réserver via ce lien soutient le site sans surcoût pour vous.",
    hotelsIn: "Hôtels : {name}",
  },
  hotels: {
    defaultTitle: "Où on dormirait à {city}",
    defaultIntro:
      "Quatre adresses qui couvrent la gamme réaliste, du coup de folie au petit budget. Les prix sont des bases basse saison ; vérifiez les tarifs en direct pour vos dates.",
    seeAll: "Voir tous les hôtels de {city}",
    photosNote:
      "Photos d'illustration · les liens de réservation soutiennent le site sans surcoût",
  },
  cityCard: { days: "Jours", best: "Top", budget: "Budget" },
  bestFor: {
    "first-time": "Première visite",
    nightlife: "Vie nocturne",
    family: "Famille",
    budget: "Petit budget",
    romantic: "Romantique",
    local: "Vie locale",
  },
  toolbar: {
    hotels: "Hôtels",
    ourPicks: "Nos adresses",
    howManyDays: "Combien de jours",
    whereToStay: "Où dormir",
    whenToGo: "Quand partir",
    hotelMap: "Carte hôtels",
    faq: "FAQ",
    compare: "Comparer",
    whereToSleep: "Où dormir",
    day: "Jour {n}",
  },
  bp: {
    pass: "Pass city break",
    idealStay: "Durée idéale",
    bestMonths: "Meilleurs mois",
    midBudget: "Budget moyen",
    airport: "Aéroport",
    itinerary: "Itinéraire {days} jours",
    duration: "Durée",
    base: "Camp de base",
    forecast: "Bulletin {month}",
    dayHigh: "Max jour",
    nightLow: "Min nuit",
    rainyDays: "Jours de pluie",
    verdict: "Verdict",
    go: "Foncez",
    avoid: "Évitez",
    fair: "Correct",
    roomKey: "Clé de chambre",
    firstVisit: "Première fois",
    budgetPick: "Choix budget",
    nightlife: "Vie nocturne",
    midHotel: "Hôtel moyen",
    budgetPass: "Pass budget",
    dailyTarget: "Objectif/jour",
    sleepIn: "Dormir à",
    freeSights: "Sites gratuits",
    daysValue: "{days} jours",
    perDay: "{price} EUR/jour",
  },
  stamp: {
    daysIdeal: "{days} jours, l'idéal",
    dayByDay: "Plan jour par jour",
    greatPick: "Excellent choix",
    thinkTwice: "Réfléchissez-y",
    shoulder: "Entre-saison",
    areasCompared: "{n} quartiers comparés",
    perDay: "~{price} EUR / jour",
  },
  hub: {
    metaTitle: "City break à {city} : combien de jours, où dormir, quand partir",
    metaDesc:
      "{city} en {days} jours : itinéraires jour par jour, le bon quartier pour votre voyage, conseils mois par mois et budgets honnêtes.",
    answer: "{city} se visite idéalement en {days} jours. {intro}",
    howManyTitle: "Combien de jours à {city} ?",
    howManyIntro:
      "Choisissez l'itinéraire qui correspond à votre voyage. Chacun est un vrai plan jour par jour, pas une liste de 30 choses à caser.",
    seeItinerary: "Voir l'itinéraire →",
    wtsTitle: "Où dormir à {city}",
    walkable:
      "Le centre de {city} se parcourt à pied : le quartier que vous choisissez donne le ton de tout le séjour.",
    spread:
      "{city} est étendue : choisir la bonne base vous épargne des heures de transport.",
    fullComparison: "Comparatif complet",
    monthsTitle: "{city}, mois par mois",
    monthsIntro:
      "Les mois en couleur sont le créneau idéal. Les mois barrés viennent avec un avertissement. Chaque page couvre météo, affluence, prix et valise.",
    mapTitle: "Les prix des hôtels en ce moment",
    tightBudget: "Budget serré ?",
    budgetCard: "{city} à petit budget : le même voyage, environ {price} EUR par jour",
    readBudget: "Lire le guide budget →",
    pairsWell: "Se combine bien avec",
    faqDaysQ: "Combien de jours faut-il à {city} ?",
    faqDaysA: "{days} jours est la durée idéale pour {city}. {rest}",
    faqWhenQ: "Quelle est la meilleure période pour visiter {city} ?",
    faqWhenA: "Les meilleurs mois sont {months}. {avoid}",
    faqAvoid: "Réfléchissez-y à deux fois pour {months} : {note}",
    faqExpQ: "Est-ce que {city} coûte cher ?",
    faqExpA:
      "{city} se situe {level} de la moyenne européenne. Comptez environ {low} EUR par jour en serrant le budget, {mid} EUR pour un séjour confortable en milieu de gamme, et {high} EUR et plus pour les meilleurs hôtels et restaurants.",
    levelBelow: "en dessous",
    levelAround: "au niveau",
    levelAbove: "au-dessus",
    faqFirstQ: "Où dormir à {city} pour une première visite ?",
    faqFirstA: "{hood} est la base la plus sûre pour une première visite. {vibe}",
    faqFirstFallback:
      "Consultez le comparatif complet des quartiers dans notre guide où dormir.",
  },
  iti: {
    metaTitle: "{city} en {days} jours : l'itinéraire jour par jour",
    metaDesc:
      "Un plan réaliste jour par jour pour {days} jours à {city} : quoi voir chaque matin, après-midi et soir, où dormir, et les astuces qui vous évitent les files.",
    h1Connector: "en",
    daysUnit: "jours",
    sleepTitle: "Bien dormir pendant ces {days} jours",
    sleepIntro:
      "Adresses triées avec notre camp de base recommandé, {hood}, en premier. Réservez tôt : les chambres au bon rapport qualité-prix partent des semaines à l'avance.",
    whereToSleepTitle: "Où dormir pour cet itinéraire",
    whereToSleepBody: "Pour {days} jours, installez-vous à {hood}. {vibe}",
    fullGuideLink:
      "Comparez tous les quartiers dans le guide où dormir complet.",
    shortTime: "Peu de temps ?",
    gotLonger: "Un jour de plus ?",
    faqEnoughQ: "{days} jours suffisent-ils pour {city} ?",
    faqStayQ: "Où dormir pour {days} jours à {city} ?",
    faqStayA: "Installez-vous à {hood} pour cet itinéraire. {vibe}",
    faqStayFallback:
      "Restez central : consultez notre guide où dormir pour {city}.",
    faqBestTimeQ: "Quelle est la meilleure période pour cet itinéraire à {city} ?",
    faqBestTimeA:
      "Le plan fonctionne toute l'année, mais {months} offrent le meilleur ratio météo-affluence.",
  },
  mon: {
    metaTitle: "{city} en {month} : météo, affluence, bonne idée ?",
    metaDesc:
      "{city} en {month} : vraies températures, jours de pluie, niveau d'affluence, quoi mettre dans la valise et si c'est le bon mois pour votre city break.",
    connector: "en",
    verdictBest: "{month} est l'un des meilleurs mois pour visiter {city}.",
    verdictAvoid:
      "{month} est le mois qu'on éviterait à {city} si vos dates sont flexibles.",
    verdictShoulder:
      "{month} est une option d'entre-saison correcte pour {city} : moins de monde, quelques compromis.",
    answer:
      "{verdict} Attendez-vous à des maximales autour de {high}°C en journée, des nuits vers {low}°C et environ {rain} jours de pluie sur le mois. {note}",
    packTitle: "Quoi mettre dans la valise pour {city} en {month}",
    packShoes:
      "De bonnes chaussures de marche : vous ferez plus de 15 000 pas par jour",
    packSun:
      "Protection solaire et gourde réutilisable : les après-midis chauffent",
    packLayers: "Des couches légères : après-midis chauds, soirées plus fraîches",
    packJacket: "Une vraie veste et une couche chaude pour le soir",
    packGloves: "Gants et bonnet : les matins frôlent le zéro",
    packUmbrella:
      "Un parapluie compact ou une veste de pluie : la pluie est une vraie possibilité",
    packRainLayer: "Une couche imperméable pliable, au cas où",
    worksTitle: "Ce qui marche bien en {month}",
    worksCold:
      "Avec {rain} jours de pluie et des maximales à {high}°C, construisez vos journées de {month} autour d'ancrages intérieurs et traitez les fenêtres de soleil comme un bonus.",
    worksWarm:
      "Avec des maximales autour de {high}°C, {month} est un mois d'extérieur : priorité aux points de vue, parcs et longues marches.",
    planFull: "Prêt à planifier tout le voyage ? Partez de",
    planFullLink: "l'itinéraire {city} en {days} jours",
    hotelsTitle: "Où dormir à {city} en {month}",
    hotelsIntroHigh:
      "{month} est très demandé : réservez 4 à 6 semaines à l'avance pour garder ces prix réalistes.",
    hotelsIntroLow:
      "{month} est plus calme : c'est le bon mois pour s'offrir les adresses coup de folie.",
    mapTitle: "Hôtels à {city} pour {month}",
    otherMonth: "Ou choisissez un autre mois",
    faqGoodQ: "{month} est-il un bon mois pour visiter {city} ?",
    faqWarmQ: "Quelles températures à {city} en {month} ?",
    faqWarmA:
      "Les journées typiques de {month} à {city} atteignent environ {high}°C et descendent vers {low}°C la nuit. Le système des couches fonctionne le mieux.",
    faqRainQ: "Pleut-il à {city} en {month} ?",
    faqRainA: "Comptez environ {rain} jours avec de la pluie en {month}. {detail}",
    rainMuch:
      "Prévoyez un bloc intérieur par jour et gardez les billets de musée en plan B.",
    rainLittle:
      "La pluie dure rarement toute la journée, les plans tiennent bien.",
  },
  wts: {
    metaTitle: "Où dormir à {city} : les meilleurs quartiers comparés",
    metaDesc:
      "Les meilleurs quartiers où dormir à {city} pour une première visite, la vie nocturne, la famille ou un petit budget. Avantages et inconvénients honnêtes, plus une carte d'hôtels en direct par quartier.",
    h1: "Où dormir à",
    shortlistTitle: "La shortlist",
    shortlistIntro:
      "Si vous voulez juste la réponse : quatre adresses vérifiées à {city}, du coup de folie au petit budget, chacune dans un quartier comparé ci-dessous.",
    boardTitle: "Le tableau de décision",
    boardNeighborhood: "Quartier",
    boardBookIf: "Réservez si vous voulez",
    boardWatchOut: "Attention à",
    boardHotels: "Hôtels",
    bookFor: "Réservez-le pour",
    knowBefore: "À savoir avant",
    pickedNext: "Quartier choisi ? Verrouillez le plan ensuite :",
    pickedLink: "{city} en {days} jours, heure par heure",
    answerFirst:
      "Pour un premier city break à {city}, dormez à {hood} : {pro}.",
    answerFallback: "Restez central à {city}.",
    answerBudget:
      "Avec un budget plus serré, {hood} vous donne plus d'espace pour moins cher.",
    answerWalkable:
      "Le centre se parcourt à pied : chacun des {n} quartiers ci-dessous vous laisse à portée des sites majeurs ; ce qui change, c'est l'ambiance que vous retrouvez le soir.",
    answerSpread:
      "Les distances comptent ici : choisissez le quartier selon le programme que vous avez vraiment.",
    faqBestQ: "Quel est le meilleur quartier où dormir à {city} ?",
    faqNightQ: "Où dormir à {city} pour la vie nocturne ?",
    faqNightA:
      "{hood} est la base vie nocturne. {vibe} Soyez prévenu : {con}",
    faqCheapQ: "Quel est le quartier le moins cher et correct à {city} ?",
    faqCheapA: "{hood} a le meilleur rapport prix-emplacement. {vibe}",
  },
  bud: {
    metaTitle: "{city} pas cher : le même voyage pour {price} EUR par jour",
    metaDesc:
      "Comment faire un city break à {city} pour environ {price} EUR par jour : les sites gratuits qui valent vraiment le coup, où dormir pas cher, et où mangent les locaux.",
    h1Suffix: "à petit budget",
    answer:
      "Un city break à {city} pour environ {price} EUR par personne et par jour est réaliste. La formule : dormir à {hood}, marcher plutôt que rouler ({walk}), construire les journées autour d'ancrages gratuits comme {anchors}, et manger là où mangent les locaux. Arriver de l'aéroport coûte peu aussi : {airport}.",
    walkCompact: "le centre est assez compact",
    walkZones: "choisissez une zone par jour",
    hotelsTitle: "Dormir pas cher, dormir bien",
    hotelsIntro:
      "Les adresses sous {price} EUR qui ne ressemblent pas à un compromis.",
    freeTitle: "Les ancrages gratuits",
    freeIntro:
      "Ils ne coûtent rien et remplissent chacun une journée. Construisez autour d'eux et les billets payants deviennent des extras optionnels au lieu d'un gouffre budgétaire.",
    eatTitle: "Bien manger, payer prix local",
    sleepTitle: "Dormir pas cher à {hood}",
    orderNote: "Maintenant, mettez tout dans l'ordre :",
    orderLink: "l'itinéraire {city} en {days} jours",
    orderSuffix: "fonctionne avec ce budget grâce aux échanges ci-dessus.",
    faqCostQ: "Combien coûte un voyage à petit budget à {city} ?",
    faqFreeQ: "Que faire gratuitement à {city} ?",
    faqFreeA:
      "Les meilleurs sites gratuits de {city} : {list}. Plusieurs sites payants ont aussi des créneaux gratuits ou réduits ; regardez les astuces sur chaque page itinéraire.",
    faqCheapAreaQ: "Quel est le quartier le moins cher où dormir à {city} ?",
  },
  home: {
    metaTitle: "Perfect City Break : des itinéraires city break qui répondent à la question",
    metaDesc:
      "Le bon nombre de jours, le bon quartier, le bon mois. Des itinéraires city break jour par jour construits sur de vraies données, pas du remplissage.",
    stamp: "Des city breaks bien préparés",
    heroParts: [
      { pre: "Le bon nombre de ", word: "jours", post: "." },
      { pre: " Le bon ", word: "quartier", post: "." },
      { pre: " Le bon ", word: "mois", post: "." },
    ],
    heroSub:
      "Chaque guide répond aux trois questions qui décident vraiment d'un city break : combien de temps rester, où dormir, et quand partir. Jour par jour, avec horaires, astuces anti-files et budgets honnêtes.",
    pickCity: "Choisir une ville",
    howManyBtn: "Combien de jours me faut-il ?",
    departures: "Départs · mis à jour juillet 2026",
    daysIdealShort: "{days} jours, l'idéal",
    best: "top",
    boarding: "embarquement →",
    whereNext: "On va où ?",
    allDest: "Toutes les destinations",
    methodKicker: "Notre méthode",
    methodTitle:
      "Pas de « pépites cachées ». Pas de listes de 40 choses. Une décision par page.",
    methodBody:
      "Chaque ville est construite comme des données structurées : combien de jours il lui faut vraiment, quels quartiers pour quel voyage, ce que chaque mois donne, ce que ça coûte. Chaque astuce doit passer un test : pouvez-vous agir dessus ? Sinon, elle saute.",
    methodLink: "Lire la méthodologie complète",
  },
  dest: {
    metaTitle: "Destinations city break : chaque ville, comparée honnêtement",
    metaDesc:
      "Toutes les destinations Perfect City Break avec le nombre de jours qu'il faut vraiment à chacune, les meilleurs mois et des budgets honnêtes. L'Europe d'abord, le monde ensuite.",
    kicker: "Tableau des départs",
    h1: "Choisissez votre prochain city break",
    intro:
      "Trois villes pilotes aujourd'hui, de nouvelles chaque mois. Chaque destination a droit au traitement complet : itinéraires par durée, quartiers comparés, et une page pour chaque mois de l'année.",
    cityBreaksIn: "City breaks : {country}",
    countryMetaTitle: "City break en {country} : où aller et pour combien de temps",
    countryMetaDesc:
      "Tous les city breaks {country} sur Perfect City Break : durée idéale, meilleurs mois et budgets honnêtes pour chaque ville.",
  },
};

export default fr;
