// Canonical UI strings. Every locale file must match this shape exactly.
// Placeholders in {braces} are filled with fmt() from lib/i18n.

const en = {
  locale: "en",
  months: [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ],
  monthsShort: [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ],
  common: {
    day: "Day",
    days: "days",
    from: "from",
    perNight: "/night",
    checkPrices: "Check prices",
    findHotels: "Find hotels",
    free: "Free",
    tip: "Tip",
    morning: "Morning",
    afternoon: "Afternoon",
    evening: "Evening",
    comingSoon: "(coming soon)",
    home: "Home",
    faqTitle: "Quick questions, straight answers",
  },
  header: { destinations: "Destinations", guides: "Guides", method: "Method" },
  footer: {
    tagline:
      "The right number of days, the right neighborhood, the right month. City break guides built from structured data and real opening hours, not filler.",
    cities: "Cities",
    site: "Site",
    allDestinations: "All destinations",
    travelGuides: "Travel guides",
    aboutMethod: "About and methodology",
    privacy: "Privacy policy",
    disclosure:
      "Perfect City Break earns commissions from booking links (Stay22 and ticket partners). This never changes the price you pay and never changes our recommendations.",
  },
  stay22: {
    loading: "Loading hotel map…",
    mapNote: "Map shows live hotel prices.",
    openSearch: "Open the full hotel search",
    supportNote: ". Booking through it supports the site at no extra cost.",
    hotelsIn: "Hotels in {name}",
  },
  hotels: {
    defaultTitle: "Where we would sleep in {city}",
    defaultIntro:
      "Four picks that cover the realistic range, from splurge to budget. Prices are low-season starting points; check live rates for your dates.",
    seeAll: "See all {city} hotels",
    photosNote:
      "Photos are illustrative · booking links support the site at no extra cost",
  },
  cityCard: { days: "Days", best: "Best", budget: "Budget" },
  bestFor: {
    "first-time": "First visit",
    nightlife: "Nightlife",
    family: "Family",
    budget: "Budget",
    romantic: "Romantic",
    local: "Local life",
  },
  toolbar: {
    hotels: "Hotels",
    ourPicks: "Our picks",
    howManyDays: "How many days",
    whereToStay: "Where to stay",
    whenToGo: "When to go",
    hotelMap: "Hotel map",
    faq: "FAQ",
    compare: "Compare",
    whereToSleep: "Where to sleep",
    day: "Day {n}",
  },
  bp: {
    pass: "City break pass",
    idealStay: "Ideal stay",
    bestMonths: "Best months",
    midBudget: "Mid budget",
    airport: "Airport",
    itinerary: "{days}-day itinerary",
    duration: "Duration",
    base: "Base",
    forecast: "{month} forecast",
    dayHigh: "Day high",
    nightLow: "Night low",
    rainyDays: "Rainy days",
    verdict: "Verdict",
    go: "Go",
    avoid: "Avoid",
    fair: "Fair",
    roomKey: "Room key",
    firstVisit: "First visit",
    budgetPick: "Budget pick",
    nightlife: "Nightlife",
    midHotel: "Mid hotel",
    budgetPass: "Budget pass",
    dailyTarget: "Daily target",
    sleepIn: "Sleep in",
    freeSights: "Free sights",
    daysValue: "{days} days",
    perDay: "{price} EUR/day",
  },
  stamp: {
    daysIdeal: "{days} days ideal",
    dayByDay: "Day-by-day plan",
    greatPick: "Great pick",
    thinkTwice: "Think twice",
    shoulder: "Shoulder season",
    areasCompared: "{n} areas compared",
    perDay: "~{price} EUR / day",
  },
  hub: {
    metaTitle: "{city} city break: how many days, where to stay, when to go",
    metaDesc:
      "{city} in {days} days: day-by-day itineraries, the right neighborhood for your trip, month-by-month advice and honest budgets.",
    answer: "{city} works best as a {days}-day city break. {intro}",
    howManyTitle: "How many days in {city}?",
    howManyIntro:
      "Pick the itinerary that matches your trip. Each one is a full day-by-day plan, not a list of 30 things to squeeze in.",
    seeItinerary: "See the itinerary →",
    wtsTitle: "Where to stay in {city}",
    walkable:
      "{city} has a walkable center, so the neighborhood you pick sets the tone of the whole trip.",
    spread:
      "{city} is spread out, so picking the right base saves you hours of transit.",
    fullComparison: "Full comparison",
    monthsTitle: "{city}, month by month",
    monthsIntro:
      "Colored months are the sweet spot. Struck-through months come with a warning. Each page covers weather, crowds, prices and what to pack.",
    mapTitle: "Hotel prices right now",
    historyTitle: "A little history",
    knownForTitle: "{city} is known for",
    faqAroundQ: "Is {city} easy to get around?",
    faqAroundAWalk:
      "Yes. {city} has a walkable center, so most of a short trip is done on foot. {airport}",
    faqAroundASpread:
      "{city} is spread out, so plan on public transport between areas. {airport}",
    faqAirportQ: "How do I get from the airport to the center of {city}?",
    faqAirportA: "{airport} It is the cheapest and usually the fastest option.",
    faqKnownQ: "What is {city} known for?",
    faqKnownA: "{city} is best known for {list}. {history}",
    tightBudget: "Tight budget?",
    budgetCard: "{city} on a budget: same trip, around {price} EUR a day",
    readBudget: "Read the budget guide →",
    pairsWell: "Pairs well with",
    faqDaysQ: "How many days do you need in {city}?",
    faqDaysA: "{days} days is the sweet spot for {city}. {rest}",
    faqWhenQ: "When is the best time to visit {city}?",
    faqWhenA: "The best months are {months}. {avoid}",
    faqAvoid: "Think twice about {months}: {note}",
    faqExpQ: "Is {city} expensive?",
    faqExpA:
      "{city} sits {level} the European average. Plan roughly {low} EUR per day on a tight budget, {mid} EUR for a comfortable mid-range trip, and {high} EUR and up if you want top hotels and restaurants.",
    levelBelow: "below",
    levelAround: "around",
    levelAbove: "above",
    faqFirstQ: "Where should first-timers stay in {city}?",
    faqFirstA: "{hood} is the safest first-visit base. {vibe}",
    faqFirstFallback:
      "See the full neighborhood comparison on our where-to-stay guide.",
  },
  iti: {
    metaTitle: "{city} in {days} days: the itinerary that fits",
    metaDesc:
      "A realistic day-by-day plan for {days} days in {city}: what to see each morning, afternoon and evening, where to sleep, and the tips that save you queues.",
    h1Connector: "in",
    daysUnit: "days",
    sleepTitle: "Sleep well for these {days} days",
    sleepIntro:
      "Picks sorted with our recommended base, {hood}, first. Book early: the good-value rooms go weeks ahead.",
    whereToSleepTitle: "Where to sleep for this itinerary",
    whereToSleepBody: "For {days} days, base yourself in {hood}. {vibe}",
    fullGuideLink: "Compare all neighborhoods in the full where-to-stay guide.",
    shortTime: "Short on time?",
    gotLonger: "Got longer?",
    faqEnoughQ: "Is {days} days enough for {city}?",
    faqStayQ: "Where should I stay for {days} days in {city}?",
    faqStayA: "Base yourself in {hood} for this itinerary. {vibe}",
    faqStayFallback:
      "Stay central: see our where-to-stay guide for {city}.",
    faqBestTimeQ: "When is the best time for this {city} itinerary?",
    faqBestTimeA:
      "The plan works year round, but {months} give you the best weather-to-crowds ratio.",
  },
  mon: {
    metaTitle: "{city} in {month}: weather, crowds and is it worth it",
    metaDesc:
      "{city} in {month}: real temperatures, rain days, crowd levels, what to pack and whether it is the right month for your city break.",
    connector: "in",
    verdictBest: "{month} is one of the best months to visit {city}.",
    verdictAvoid:
      "{month} is the month we would avoid in {city} if you have flexible dates.",
    verdictShoulder:
      "{month} is a decent shoulder option for {city}: fewer crowds, some trade-offs.",
    answer:
      "{verdict} Expect daytime highs around {high}°C, nights near {low}°C and roughly {rain} rainy days across the month. {note}",
    packTitle: "What to pack for {city} in {month}",
    packShoes: "Comfortable walking shoes: you will do 15k+ steps a day",
    packSun:
      "Sun protection and a refillable water bottle: afternoons get hot",
    packLayers: "Light layers: warm afternoons, cooler evenings",
    packJacket: "A real jacket and a warm layer for evenings",
    packGloves: "Gloves and a hat: mornings sit near freezing",
    packUmbrella:
      "A compact umbrella or rain shell: rain is a real possibility",
    packRainLayer: "A packable rain layer, just in case",
    worksTitle: "What works well in {month}",
    worksCold:
      "With {rain} rainy days and highs of {high}°C, build your {month} days around indoor anchors and treat sunny windows as a bonus.",
    worksWarm:
      "With highs around {high}°C, {month} is outdoor weather: prioritize viewpoints, parks and long walks.",
    planFull: "Ready to plan the full trip? Start from the",
    planFullLink: "{days}-day {city} itinerary",
    hotelsTitle: "Where to sleep in {city} in {month}",
    hotelsIntroHigh:
      "{month} is high demand: book 4 to 6 weeks out to keep these prices realistic.",
    hotelsIntroLow:
      "{month} is quieter, which makes it the right month to afford the splurge picks.",
    mapTitle: "Hotels in {city} for {month}",
    otherMonth: "Or pick another month",
    faqGoodQ: "Is {month} a good time to visit {city}?",
    faqWarmQ: "How warm is {city} in {month}?",
    faqWarmA:
      "Typical {month} days in {city} reach about {high}°C, dropping to around {low}°C at night. Layers work best.",
    faqRainQ: "Does it rain in {city} in {month}?",
    faqRainA: "Count on roughly {rain} days with rain in {month}. {detail}",
    rainMuch:
      "Plan one indoor block per day and keep museum tickets as your fallback.",
    rainLittle: "Rain rarely lasts all day, so plans hold up well.",
  },
  wts: {
    metaTitle: "Where to stay in {city}: best areas compared",
    metaDesc:
      "The best neighborhoods to stay in {city} for first-timers, nightlife, families and budgets. Honest pros and cons plus live hotel maps per area.",
    h1: "Where to stay in",
    shortlistTitle: "The shortlist",
    shortlistIntro:
      "If you just want the answer: four vetted {city} picks, from splurge to budget, each in a neighborhood compared below.",
    boardTitle: "The decision board",
    boardNeighborhood: "Neighborhood",
    boardBookIf: "Book if you want",
    boardWatchOut: "Watch out",
    boardHotels: "Hotels",
    bookFor: "Book it for",
    knowBefore: "Know before",
    pickedNext: "Neighborhood picked? Lock the plan next:",
    pickedLink: "{city} in {days} days, hour by hour",
    answerFirst: "For a first {city} city break, stay in {hood}: {pro}.",
    answerFallback: "Stay central in {city}.",
    answerBudget:
      "On a tighter budget, {hood} gets you more room for less.",
    answerWalkable:
      "The center is walkable, so any of the {n} areas below keeps you within reach of the main sights; what changes is the atmosphere you come home to.",
    answerSpread:
      "Distances matter here, so match the area to the plan you actually have.",
    faqBestQ: "What is the best area to stay in {city}?",
    faqNightQ: "Where should I stay in {city} for nightlife?",
    faqNightA: "{hood} is the nightlife base. {vibe} Fair warning: {con}",
    faqCheapQ: "What is the cheapest good area to stay in {city}?",
    faqCheapA: "{hood} has the best price-to-location ratio. {vibe}",
  },
  bud: {
    metaTitle: "{city} on a budget: the same trip for {price} EUR a day",
    metaDesc:
      "How to do a {city} city break on about {price} EUR per day: the free sights that are actually good, where to sleep cheap, and where locals eat.",
    h1Suffix: "on a budget",
    answer:
      "A {city} city break on about {price} EUR per person per day is realistic. The formula: sleep in {hood}, walk instead of riding ({walk}), build days around free anchors like {anchors}, and eat where the locals do. Getting in from the airport is cheap too: {airport}.",
    walkCompact: "the center is compact enough",
    walkZones: "pick one zone per day",
    hotelsTitle: "Sleep cheap, sleep well",
    hotelsIntro:
      "The picks under {price} EUR that do not feel like a compromise.",
    freeTitle: "The free anchors",
    freeIntro:
      "These cost nothing and carry a full day each. Build around them and the paid tickets become optional extras instead of a budget drain.",
    eatTitle: "Eat well, pay local prices",
    sleepTitle: "Sleep cheap in {hood}",
    orderNote: "Now put it in order:",
    orderLink: "the {days}-day {city} itinerary",
    orderSuffix: "works on this budget with the swaps above.",
    faqCostQ: "How much does a budget trip to {city} cost?",
    faqFreeQ: "What can you do for free in {city}?",
    faqFreeA:
      "The strongest free sights in {city}: {list}. Several paid sights also have free or reduced windows; check the tips on each itinerary page.",
    faqCheapAreaQ: "What is the cheapest area to stay in {city}?",
  },
  home: {
    metaTitle: "Perfect City Break: city break itineraries that answer the question",
    metaDesc:
      "The right number of days, the right neighborhood, the right month. Day-by-day city break itineraries built on real data, not filler.",
    stamp: "City breaks, planned properly",
    heroParts: [
      { pre: "The right ", word: "days", post: "." },
      { pre: " The right ", word: "neighborhood", post: "." },
      { pre: " The right ", word: "month", post: "." },
    ],
    heroSub:
      "Every guide here answers the three questions that actually decide a city break: how long to stay, where to sleep, and when to go. Day by day, with opening hours, queue hacks and honest budgets.",
    pickCity: "Pick a city",
    howManyBtn: "How many days do I need?",
    departures: "Departures · updated July 2026",
    daysIdealShort: "{days} days ideal",
    best: "best",
    boarding: "boarding →",
    whereNext: "Where next?",
    allDest: "All destinations",
    searchPlaceholder: "Search a city, e.g. Lisbon",
    searchNoResult: "No city yet for that search. More are added every month.",
    browseAll: "Browse all",
    knownForLead: "Known for",
    faqTitle: "City break questions, answered",
    faqs: [
      {
        q: "What exactly is a city break?",
        a: "A city break is a short trip, usually 2 to 4 days, built around one city rather than a region or a beach. The whole point is depth over distance: you pick one place, learn its neighborhoods, and come home rested instead of exhausted.",
      },
      {
        q: "How many days do you need for a city break?",
        a: "Most European cities work in 2 to 3 days. Compact cities like Seville or Bruges are a comfortable weekend; capitals like Prague or Budapest reward 3, and only the biggest, like Rome or Paris, justify 4 or more. Every city page here gives the honest ideal number.",
      },
      {
        q: "When is the cheapest time for a European city break?",
        a: "January to March, outside Christmas markets and school holidays, is the cheapest window almost everywhere. November is the sweet spot for mild southern cities at low-season prices. Our month-by-month pages show the price level for each city, all year.",
      },
      {
        q: "Which European city is best for a first city break?",
        a: "For a first trip, pick a walkable, compact city where the sights cluster together: Lisbon, Prague and Seville all qualify. You spend less time on transport and more time actually seeing the place, which is what a short trip is for.",
      },
      {
        q: "Do I need to book attractions in advance?",
        a: "For the headline sights, yes. Places like the Alcazar in Seville or the Parliament in Budapest sell out timed slots days ahead in season. Each itinerary here flags exactly which sights need booking and how far ahead.",
      },
    ],
    methodKicker: "Our method",
    methodTitle:
      'No "hidden gems". No 40-item listicles. A decision per page.',
    methodBody:
      "Each city is built as structured data: how many days it really needs, which neighborhoods suit which trip, what each month feels like, what things cost. Every tip has to pass one test: can you act on it? If not, it gets cut.",
    methodLink: "Read the full methodology",
  },
  dest: {
    metaTitle: "City break destinations: every city, compared honestly",
    metaDesc:
      "All Perfect City Break destinations with the number of days each one really needs, the best months and honest budgets. Europe first, the world next.",
    kicker: "Departures board",
    h1: "Pick your next city break",
    intro:
      "Three pilot cities today, new ones added every month. Each destination gets the full treatment: itineraries per duration, neighborhoods compared, and a page for every month of the year.",
    cityBreaksIn: "City breaks in {country}",
    countryMetaTitle: "City breaks in {country}: where to go and for how long",
    countryMetaDesc:
      "Every {country} city break on Perfect City Break: ideal trip length, best months and honest budgets for each city.",
  },
};

export default en;
