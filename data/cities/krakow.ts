import type { CityData } from "../types";

const krakow: CityData = {
  city: {
    slug: "krakow",
    name: "Krakow",
    country: "Poland",
    countrySlug: "poland",
    lat: 50.0647,
    lng: 19.945,
    tier: 3,
    idealDays: 2,
    durations: [2, 3],
    airportCode: "KRK",
    airportToCenter:
      "The train from Krakow Airport to Krakow Glowny main station takes about 20 minutes and costs around 17 PLN, roughly 4 EUR, running every 30 minutes. City buses 208 and 252 cover the same route more slowly for a standard transit ticket if the train timing does not suit.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 12],
    avoidMonths: [1],
    monthlyNotes: {
      1: "The coldest month, with highs near 1C, lows well below freezing and short grey days; the Christmas market on Rynek Glowny usually wraps up in the first days of January. Sights are quiet and hotel rates hit their yearly low, but pack for real winter and expect snow underfoot.",
      2: "Still firmly winter, highs around 3C and frequent frost, so this is a cheap, crowd-free time to work through the indoor sights and Wawel. Days lengthen a little and the milk bars and cellar bars carry the atmosphere when it is too cold to linger outside.",
      3: "Highs climb toward 9C and the city thaws; Easter markets appear on Rynek Glowny in the second half of the month when Easter falls early. Crowds stay light and prices sit below the spring peak, a good window for a value trip.",
      4: "Proper spring at around 14C, with blossom in Planty and the first outdoor cafe tables on the square. Weekends around Easter and the May long weekend get busy, so book the Wawel state rooms and any Auschwitz-Birkenau reservation well ahead.",
      5: "One of the best months, highs near 19C, long light evenings and beer gardens filling up in Kazimierz. It is peak shoulder season, so accommodation prices firm up and the square gets lively; reserve day trips to Auschwitz and Wieliczka early.",
      6: "Warm at around 22C with the longest days of the year and two anchor events: the Wianki midsummer festival by the Vistula below Wawel around the solstice, and the start of the Jewish Culture Festival in Kazimierz in the last week. Book Kazimierz accommodation early for festival dates.",
      7: "Peak summer, highs around 24C, warm evenings and the Jewish Culture Festival concerts spilling through Kazimierz in the first days of the month. This is the busiest and priciest stretch; do Wawel and the square early and save afternoons for shaded Planty and riverside bars.",
      8: "Same summer heat near 24C and the highest tourist numbers of the year, with occasional afternoon thunderstorms. Beer gardens and the Vistula boulevards absorb the crowds well, but expect queues for the Salt Mine and Schindler's Factory all day, so pre-book.",
      9: "Highs around 19C, thinning crowds after the first week and comfortable walking weather, which makes this the smart alternative to summer. Prices ease and the light turns golden over the square; day trips are easier to book at short notice.",
      10: "Crisp autumn at around 13C with strong color in Planty and along the river; tourist numbers drop noticeably after mid-month and hotel rates follow. Bring a warm layer for the evenings, which get cold fast once the sun goes down.",
      11: "Grey, cold and quiet at around 7C until the Christmas market opens on Rynek Glowny in the last week, which flips the mood entirely. Late November is a sweet spot: market stalls and mulled wine without the December weekend density.",
      12: "The Christmas market on Rynek Glowny runs through the month with grilled oscypek cheese, mulled wine and a huge nativity crib tradition, and it draws heavy weekend crowds. Expect lows below freezing, possible snow and December hotel prices above the winter norm, so book early.",
    },
    climate: {
      1: { highC: 1, lowC: -4, rainyDays: 9 },
      2: { highC: 3, lowC: -3, rainyDays: 8 },
      3: { highC: 9, lowC: 0, rainyDays: 9 },
      4: { highC: 14, lowC: 4, rainyDays: 10 },
      5: { highC: 19, lowC: 9, rainyDays: 12 },
      6: { highC: 22, lowC: 12, rainyDays: 13 },
      7: { highC: 24, lowC: 14, rainyDays: 13 },
      8: { highC: 24, lowC: 13, rainyDays: 11 },
      9: { highC: 19, lowC: 9, rainyDays: 9 },
      10: { highC: 13, lowC: 5, rainyDays: 8 },
      11: { highC: 7, lowC: 1, rainyDays: 9 },
      12: { highC: 2, lowC: -3, rainyDays: 10 },
    },
    budgetLevel: "low",
    budgetPerDay: { budget: 45, mid: 95, high: 190 },
    tagline: "Intact medieval core, milk-bar prices, heavy history nearby.",
    heroIntro:
      "Krakow kept the largest medieval square in Europe, a royal castle on a hill and a whole Jewish quarter that survived the war, all inside a walkable ring you can cross in twenty minutes. It is one of the cheapest classic city breaks on the continent, and the milk bars still feed you for a few euros. Two days handles the old town, Wawel and Kazimierz comfortably; a third day is for the big pre-booked trips to Auschwitz-Birkenau or the Wieliczka Salt Mine.",
    accent: { from: "#8E2D3C", to: "#D9A441", ink: "#4E1A24" },
    neighborhoodSlugs: [
      "stare-miasto",
      "kazimierz",
      "podgorze",
      "kleparz",
      "stradom",
    ],
    nearbyCitySlugs: ["prague"],
  },

  neighborhoods: [
    {
      slug: "stare-miasto",
      citySlug: "krakow",
      name: "Stare Miasto (Old Town)",
      lat: 50.0616,
      lng: 19.937,
      bestFor: ["first-time", "romantic"],
      vibe: "The medieval core inside the green Planty ring, built around Rynek Glowny, the biggest market square in Europe. By day it is the busiest part of the city, all horse cabs, cafe tables and the St Mary's trumpet on the hour; late evening the day-trippers thin out and the cellar bars take over. Everything a first-timer wants sits within a ten-minute walk.",
      pros: [
        "Rynek Glowny, the Cloth Hall and Wawel all within a short walk",
        "Widest choice of hotels and apartments in Krakow",
        "No transit needed for a two-day trip",
      ],
      cons: [
        "Restaurants right on the square are overpriced tourist traps",
        "Stag-party groups and street noise on weekend nights",
        "You pay a location premium over Kazimierz or Kleparz",
      ],
    },
    {
      slug: "kazimierz",
      citySlug: "krakow",
      name: "Kazimierz",
      lat: 50.0515,
      lng: 19.944,
      bestFor: ["local", "nightlife", "romantic", "budget"],
      vibe: "The old Jewish quarter south of the center, now the most atmospheric district in the city, with surviving synagogues, courtyard bars and the best street food in Krakow. It runs from quiet, memorial-heavy lanes around the synagogues to the packed bar scene on Plac Nowy after dark. Staying here puts you between the old town and Podgorze with Schindler's Factory a short walk over the river.",
      pros: [
        "Best bars, cafes and street food in the city at local prices",
        "Walking distance to both the old town and Schindler's Factory",
        "Cheaper rooms than the old town for the same central feel",
      ],
      cons: [
        "Plac Nowy and its side streets get loud until late on weekends",
        "A 15-minute walk to Rynek Glowny rather than steps from it",
        "Fewer big-name hotels, more apartments and small guesthouses",
      ],
    },
    {
      slug: "podgorze",
      citySlug: "krakow",
      name: "Podgorze",
      lat: 50.0446,
      lng: 19.9565,
      bestFor: ["local", "budget", "family"],
      vibe: "The district across the Vistula that held the wartime ghetto, now a quiet residential quarter with the heaviest history in Krakow and a slow, unhurried feel. Schindler's Factory, the Ghetto Heroes Square with its empty-chairs memorial and the MOCAK modern art museum all sit here. It is a short walk over the footbridge from Kazimierz but a world calmer at night.",
      pros: [
        "Schindler's Factory and the ghetto memorials on your doorstep",
        "Calm, genuinely local streets and lower prices than the center",
        "Footbridge straight into Kazimierz for evenings out",
      ],
      cons: [
        "Few restaurants and bars compared to Kazimierz across the river",
        "20 to 25 minutes on foot to Rynek Glowny",
        "Somber mood in parts; this is memorial ground, not nightlife",
      ],
    },
    {
      slug: "kleparz",
      citySlug: "krakow",
      name: "Kleparz",
      lat: 50.0685,
      lng: 19.9415,
      bestFor: ["budget", "local", "family"],
      vibe: "A workaday district just north of the old town wall, built around the Stary Kleparz market hall where locals have shopped for produce for centuries. It is plainer than the tourist core but sits five minutes from the Barbican and right by the main train and bus stations. This is where you trade postcard looks for lower prices and easy transport.",
      pros: [
        "Cheapest central-adjacent rooms, five minutes from the old town",
        "Stary Kleparz market for cheap fresh food and snacks",
        "Steps from Krakow Glowny for airport train and day trips",
      ],
      cons: [
        "Little charm in the district itself; you sleep here, not linger",
        "Busy roads and the station bring traffic and noise",
        "Thin evening dining compared to Kazimierz or the square",
      ],
    },
    {
      slug: "stradom",
      citySlug: "krakow",
      name: "Stradom",
      lat: 50.0555,
      lng: 19.9415,
      bestFor: ["first-time", "romantic", "family"],
      vibe: "The narrow strip between the old town and Kazimierz, below the eastern flank of Wawel Hill. It is central without the square's noise, a five-minute walk from both Rynek Glowny and the Kazimierz bars, and closest of all to the castle. A sensible base for anyone who wants the old town and Kazimierz in equal measure.",
      pros: [
        "Halfway between Rynek Glowny, Wawel and Kazimierz, all on foot",
        "Quieter nights than the square or Plac Nowy",
        "Closest residential area to Wawel Castle",
      ],
      cons: [
        "Smaller selection of hotels than the old town proper",
        "Some busy through-roads cut across the district",
        "Less of a scene of its own; you walk out for dining and bars",
      ],
    },
  ],

  pois: [
    {
      slug: "rynek-glowny",
      citySlug: "krakow",
      name: "Rynek Glowny & Cloth Hall (Sukiennice)",
      lat: 50.0617,
      lng: 19.9373,
      kind: "sight",
      needsBooking: false,
      tip: "The square and the ground-floor Cloth Hall market stalls are free to walk through; browse the amber and folk crafts but haggle, and skip the exchange kiosks around the square for terrible rates. The underground Rynek museum beneath the square is the paid highlight, and it sells out on busy afternoons, so book a morning slot online.",
    },
    {
      slug: "st-marys-basilica",
      citySlug: "krakow",
      name: "St Mary's Basilica",
      lat: 50.0617,
      lng: 19.9394,
      kind: "sight",
      needsBooking: true,
      tip: "There are two separate tickets with limited slots: one for the church to see the Veit Stoss wooden altar, opened daily around 11:50am, and a separate timed ticket for the tower climb. Buy both online ahead, and stand on the square on any hour to hear the hejnal trumpet call played live from the tower and break off mid-note, a nod to a medieval trumpeter cut short by an arrow.",
    },
    {
      slug: "wawel-castle",
      citySlug: "krakow",
      name: "Wawel Royal Castle",
      lat: 50.0544,
      lng: 19.9356,
      kind: "sight",
      needsBooking: true,
      tip: "The castle courtyard and hill grounds are free to enter, but the State Rooms and Royal Apartments use timed tickets with a daily cap that runs out early in summer, so book online for a slot near 9:30am opening. A limited number of free tickets for some routes are released for one day of the week, usually Monday, and they go within minutes.",
    },
    {
      slug: "wawel-cathedral",
      citySlug: "krakow",
      name: "Wawel Cathedral",
      lat: 50.0543,
      lng: 19.9351,
      kind: "sight",
      needsBooking: false,
      tip: "Entry to the cathedral nave is free, but the royal tombs, the Sigismund Bell tower climb and the crypt need a combined ticket bought at the house across the square from the entrance, not at the door. Climb the narrow wooden stairs to ring-viewing height at the Sigismund Bell early, before the single-file staircase backs up mid-morning.",
    },
    {
      slug: "kazimierz-quarter",
      citySlug: "krakow",
      name: "Kazimierz Jewish Quarter",
      lat: 50.0515,
      lng: 19.9445,
      kind: "sight",
      needsBooking: false,
      tip: "Walk it in the morning for the synagogues, the Remuh cemetery and Szeroka Street with barely anyone around, then return after dark for the Plac Nowy bar scene. The round zapiekanka baguette-pizzas from the Okraglak rotunda on Plac Nowy are the classic cheap late-night bite for a few zloty.",
    },
    {
      slug: "schindlers-factory",
      citySlug: "krakow",
      name: "Schindler's Factory Museum",
      lat: 50.0475,
      lng: 19.9613,
      kind: "museum",
      needsBooking: true,
      tip: "This is a museum of wartime occupied Krakow inside Oskar Schindler's real enamelware factory, not just about the film, and it sells out days ahead in summer, so book a timed ticket online. Go for the first slot of the day; the narrow immersive rooms bottleneck badly once groups arrive, and allow a full two hours.",
    },
    {
      slug: "auschwitz-birkenau",
      citySlug: "krakow",
      name: "Auschwitz-Birkenau Memorial",
      lat: 50.0343,
      lng: 19.1789,
      kind: "sight",
      needsBooking: true,
      tip: "Entry is free but you MUST reserve a timed entry ticket online, often weeks ahead in high season, and between roughly 10am and 3pm you can only enter with a licensed guide. It is about a 1.5-hour drive each way near Oswiecim, so block at least half a day and realistically most of one; the site covers two separate camps, Auschwitz I and Birkenau, linked by a shuttle bus.",
    },
    {
      slug: "wieliczka-salt-mine",
      citySlug: "krakow",
      name: "Wieliczka Salt Mine",
      lat: 49.9832,
      lng: 20.0546,
      kind: "experience",
      needsBooking: true,
      tip: "You can only go down on a guided tour, so book the Tourist Route online ahead, especially in summer when English-language slots fill fast. It is a two-hour walk with around 380 stairs down at the start and no way to leave early, so it is not for anyone who cannot manage steps; the underground temperature holds around 14C year-round, bring a layer.",
    },
    {
      slug: "planty-park",
      citySlug: "krakow",
      name: "Planty Park Ring",
      lat: 50.0625,
      lng: 19.9355,
      kind: "park",
      needsBooking: false,
      tip: "This green belt loops the entire old town on the line of the demolished city walls, a flat four-kilometer ring you can walk in under an hour. Use it as a shaded shortcut between sights in summer rather than a destination; the stretch by the Barbican and the university quarter is the prettiest.",
    },
    {
      slug: "barbican-florian-gate",
      citySlug: "krakow",
      name: "Barbican & St Florian's Gate",
      lat: 50.0655,
      lng: 19.9415,
      kind: "sight",
      needsBooking: false,
      tip: "The Barbican and the walls are free to look at from Planty; a cheap combined ticket lets you walk the surviving ramparts and climb inside the Barbican if you want the medieval-defense angle. St Florian's Gate opens onto Florianska Street, the classic approach march down to Rynek Glowny, and local painters hang canvases along the wall here.",
    },
    {
      slug: "collegium-maius",
      citySlug: "krakow",
      name: "Collegium Maius (Jagiellonian University)",
      lat: 50.0614,
      lng: 19.9327,
      kind: "museum",
      needsBooking: true,
      tip: "The oldest building of Poland's oldest university, where Copernicus studied, is seen by guided tour only, and the popular slots sell out, so reserve ahead and ask for an English tour. The arcaded Gothic courtyard is free to step into and the astronomical clock in it chimes and parades figures a few times a day, worth timing.",
    },
    {
      slug: "milk-bar-tomasza",
      citySlug: "krakow",
      name: "Bar Mleczny (Milk Bar)",
      lat: 50.0625,
      lng: 19.9405,
      kind: "food",
      needsBooking: false,
      tip: "A bar mleczny is a subsidized canteen serving pierogi, soups and cutlets for a few euros, a genuine slice of everyday Poland; look for one such as Bar Mleczny Tomasza near the old town. Read the Polish menu board over the counter, pay first at the till, then collect your dish; cash is safest and turnover is fast at lunch.",
    },
    {
      slug: "ghetto-heroes-square",
      citySlug: "krakow",
      name: "Podgorze & Ghetto Heroes Square",
      lat: 50.0475,
      lng: 19.9527,
      kind: "sight",
      needsBooking: false,
      tip: "The square across the river in Podgorze holds the memorial of 70 empty bronze chairs marking the wartime ghetto, and the Eagle Pharmacy on its edge is a small, moving museum of the ghetto for a low fee. Combine it with Schindler's Factory a few minutes away, since both sit on the same side of the Vistula.",
    },
    {
      slug: "kosciuszko-mound",
      citySlug: "krakow",
      name: "Kosciuszko Mound Viewpoint",
      lat: 50.0547,
      lng: 19.8917,
      kind: "viewpoint",
      needsBooking: false,
      tip: "This man-made earthwork mound west of the center gives the best full panorama over Krakow and, on clear days, the Tatra mountains; a low ticket covers the climb and the little fort museum around it. It is a 30-minute ride on bus 100 or tram plus a short walk, so save it for a clear afternoon rather than a grey one.",
    },
  ],

  itineraries: [
    {
      citySlug: "krakow",
      days: 2,
      summary:
        "Two days is enough for Krakow's core if you stay central and start early, and it covers the old town, Wawel and Kazimierz without feeling rushed. The whole center sits inside the Planty ring, so Rynek Glowny, St Mary's, the Cloth Hall and Wawel are all within a 15-minute walk of each other, and Kazimierz is a short stroll south. Base yourself in Stare Miasto so both mornings start on foot. The plan that works is one day for the old town and Wawel hill, and one day for Kazimierz, Schindler's Factory and Podgorze across the river. Book two things online before you arrive: the Wawel State Rooms and a timed Schindler's Factory slot, since both sell out in season. What two days does not buy you is the big pre-booked day trips: Auschwitz-Birkenau and the Wieliczka Salt Mine each need at least half a day, which is exactly what a third day is for. Prices are low, so eat well; a milk bar lunch costs a few euros.",
      stayNeighborhoodSlug: "stare-miasto",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Old town and Wawel hill",
          morning: [
            {
              poiSlug: "rynek-glowny",
              text: "Start on Rynek Glowny around 8:30am while the square is quiet, walk the ground-floor Cloth Hall stalls, then go underground into the Rynek museum beneath the square on a pre-booked morning slot.",
              durationMin: 105,
            },
            {
              poiSlug: "st-marys-basilica",
              text: "Step into St Mary's Basilica for the Veit Stoss wooden altar, timed for the daily unveiling around 11:50am, and stay on the square on the hour to hear the live hejnal trumpet call break off mid-note.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "milk-bar-tomasza",
              text: "Lunch at a milk bar such as Bar Mleczny Tomasza on pierogi and soup for a few euros. Pay at the till first, collect at the counter, and bring cash.",
              durationMin: 45,
            },
            {
              poiSlug: "wawel-castle",
              text: "Walk down to Wawel Hill and tour the Royal Castle State Rooms on your pre-booked ticket, then spend time free of charge in the arcaded courtyard and along the ramparts over the Vistula.",
              durationMin: 120,
            },
            {
              poiSlug: "wawel-cathedral",
              text: "Next door, visit Wawel Cathedral: the nave is free, and a combined ticket from the house opposite covers the royal tombs and the climb to the Sigismund Bell for a view over the river.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "barbican-florian-gate",
              text: "Walk back north up Florianska Street and out through St Florian's Gate to the Barbican, the classic medieval approach in reverse, with the wall painters set up along the way.",
              durationMin: 45,
            },
            {
              text: "Dinner in the old town off the main square, on a side street like Slawkowska or around Plac Szczepanski, where a full Polish meal with a beer runs well under a tourist-square price.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Kazimierz, Schindler's Factory and Podgorze",
          morning: [
            {
              poiSlug: "kazimierz-quarter",
              text: "Walk down to Kazimierz early and do the Jewish quarter before the crowds: the synagogues, the Remuh cemetery and Szeroka Street, all quiet in the morning.",
              durationMin: 120,
            },
            {
              text: "Grab a round zapiekanka from the Okraglak rotunda on Plac Nowy for a cheap street lunch, then cut down to the river footbridge toward Podgorze.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "schindlers-factory",
              text: "Cross into Podgorze for your pre-booked first-slot-friendly timed entry to Schindler's Factory, a museum of occupied wartime Krakow inside Oskar Schindler's real enamelware plant. Allow a full two hours.",
              durationMin: 120,
            },
            {
              poiSlug: "ghetto-heroes-square",
              text: "A few minutes away, stand at Ghetto Heroes Square with its 70 empty bronze chairs, and step into the small Eagle Pharmacy museum on its edge for the ghetto story.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "planty-park",
              text: "Walk back toward the center along the river and cut through the Planty ring as the light drops, the flat green belt on the line of the old city walls.",
              durationMin: 30,
            },
            {
              text: "Finish with dinner and drinks back in Kazimierz around Plac Nowy, the best bar and courtyard scene in the city, busiest and most fun after dark.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "krakow",
      days: 3,
      summary:
        "Three days is the right length for Krakow: two days handle the compact old town, Wawel and Kazimierz at a humane pace, and the third day is built for one big trip out of the city. That third day is really the reason to add a night, because both major excursions demand pre-booking and time. Auschwitz-Birkenau is free but needs a timed reservation, often weeks ahead, is a 1.5-hour drive each way and takes most of a day; the Wieliczka Salt Mine is guided-only, closer, and fills a solid half day. Pick one for day three and reserve it before anything else. Stay in Kazimierz for this trip: it costs less than the old town, puts the best food and bars on your doorstep, and sits within walking distance of both the square and Schindler's Factory. The shape is old town and Wawel on day one, Kazimierz and Podgorze on day two, and your chosen day trip on day three. Book the Wawel rooms, Schindler's Factory and your day trip online in advance.",
      stayNeighborhoodSlug: "kazimierz",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Old town and Wawel hill",
          morning: [
            {
              poiSlug: "rynek-glowny",
              text: "From Kazimierz, walk up into the old town and start on Rynek Glowny by 8:30am for the quiet square and the Cloth Hall, then go into the underground Rynek museum on a booked morning slot.",
              durationMin: 105,
            },
            {
              poiSlug: "st-marys-basilica",
              text: "Visit St Mary's Basilica for the Veit Stoss altar around its 11:50am unveiling, and time your minute on the square for the hejnal trumpet call from the tower on the hour.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "milk-bar-tomasza",
              text: "Lunch at a milk bar on pierogi, cutlet and soup for a few euros, ordering at the till and collecting at the counter with cash.",
              durationMin: 45,
            },
            {
              poiSlug: "wawel-castle",
              text: "Walk to Wawel Hill and tour the Royal Castle State Rooms on your pre-booked timed ticket, then linger for free in the courtyard and on the riverside ramparts.",
              durationMin: 120,
            },
            {
              poiSlug: "wawel-cathedral",
              text: "Finish on the hill at Wawel Cathedral, with the free nave and a combined ticket for the royal tombs and the Sigismund Bell climb over the Vistula.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "collegium-maius",
              text: "Back in the old town, step into the free Gothic courtyard of the Collegium Maius, the oldest Jagiellonian University building where Copernicus studied, and catch the astronomical clock chime if the timing lands.",
              durationMin: 45,
            },
            {
              text: "Walk back down to Kazimierz for dinner around Plac Nowy, where courtyard restaurants and bars run well below old-town-square prices.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Kazimierz, Schindler's Factory and Podgorze",
          morning: [
            {
              poiSlug: "kazimierz-quarter",
              text: "You are based here, so start early on foot: the Kazimierz synagogues, the Remuh cemetery and Szeroka Street are near-empty in the morning before the tour groups arrive.",
              durationMin: 120,
            },
            {
              text: "Take a cheap zapiekanka from the Okraglak rotunda on Plac Nowy, then cross the footbridge over the Vistula into Podgorze.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "schindlers-factory",
              text: "Enter Schindler's Factory on your pre-booked timed ticket for the immersive museum of occupied wartime Krakow; take the earliest slot you can to beat the room-by-room bottlenecks, and allow two hours.",
              durationMin: 120,
            },
            {
              poiSlug: "ghetto-heroes-square",
              text: "Walk over to Ghetto Heroes Square for the 70 empty-chairs memorial and the Eagle Pharmacy museum on its edge, both a few minutes from the factory.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "planty-park",
              text: "Loop back over the river and take a slow stretch of the Planty ring at dusk, the flat green belt around the old town on the line of the demolished walls.",
              durationMin: 30,
            },
            {
              text: "Dinner and drinks in Kazimierz, working the Plac Nowy courtyards and cellar bars, the liveliest evening scene in the city.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Big day trip: Auschwitz-Birkenau or Wieliczka Salt Mine",
          morning: [
            {
              poiSlug: "auschwitz-birkenau",
              text: "Option A: leave early for the Auschwitz-Birkenau Memorial, about a 1.5-hour drive west, on your pre-booked timed reservation; between 10am and 3pm you enter only with a licensed guide, and you will see both Auschwitz I and Birkenau via the shuttle.",
              durationMin: 240,
            },
            {
              poiSlug: "wieliczka-salt-mine",
              text: "Option B: head to the Wieliczka Salt Mine just outside the city on a pre-booked guided Tourist Route, a two-hour underground walk with around 380 stairs down at the start and a steady 14C, so bring a layer.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              text: "Option A: the Auschwitz-Birkenau visit and drive fill most of the day, so return to Krakow in the afternoon and keep the rest of the day quiet and reflective.",
              durationMin: 180,
            },
            {
              text: "Option B: back from Wieliczka by early afternoon, use the free time for anything you skipped, such as the Wawel courtyard, a stretch of Planty or the Cloth Hall stalls.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "kosciuszko-mound",
              text: "If it is a clear evening and you chose the shorter Wieliczka trip, ride bus 100 out to the Kosciuszko Mound for the best full panorama over Krakow and, on a good day, the distant Tatra mountains at sunset.",
              durationMin: 90,
            },
            {
              text: "Last dinner back in Kazimierz or the old town; after a heavy day, a quiet cellar restaurant with pierogi and a Polish beer is the right note to end on.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
  ],
};

export default krakow;
