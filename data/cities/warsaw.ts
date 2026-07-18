import type { CityData } from "../types";

const warsaw: CityData = {
  city: {
    slug: "warsaw",
    name: "Warsaw",
    country: "Poland",
    countrySlug: "poland",
    lat: 52.2297,
    lng: 21.0122,
    tier: 2,
    idealDays: 2,
    durations: [2, 3],
    airportCode: "WAW",
    airportToCenter:
      "Warsaw Chopin airport sits about 8km south of the centre, so transfers are quick and cheap. The S2 and S3 trains and city bus 175 both run from the terminal to the centre and the old town in around 20 to 25 minutes for about 5 PLN on a single ZTM ticket, which covers all ZTM transport for the ride. An Uber or taxi is roughly 40 to 60 PLN and takes a similar time outside rush hour. Note the low-cost Modlin airport used by some budget carriers is about 40km north of the city and reached by a dedicated shuttle bus, so factor in extra time if you land there.",
    centerWalkable: true,
    bestMonths: [5, 6, 7, 9],
    avoidMonths: [1],
    monthlyNotes: {
      1: "The coldest month, with highs near 1C, lows well below freezing and short grey days that often bring snow. Sights are quiet and hotel rates hit their yearly floor, and the milk bars and cellar bars carry the mood when it is too cold to linger outside; pack for real winter.",
      2: "Still firmly winter at around 2C with frequent frost and snow, so this is a cheap, crowd-free stretch for the indoor museums and the Palace of Culture. Days lengthen a little and the vodka bars of Praga make a warm evening; expect the lowest prices of the year.",
      3: "Highs climb toward 7C and the city starts to thaw, though early snow and cold snaps still happen. Crowds stay light and rates sit below the spring peak, a solid value window if you dress for changeable weather.",
      4: "Proper spring at around 14C, with blossom in Lazienki Park and the first outdoor cafe tables along Nowy Swiat. Weekends around Easter get busy, so book a POLIN or Warsaw Rising Museum slot ahead; the free Chopin concerts in Lazienki have not started yet.",
      5: "One of the best months, highs near 20C and long light evenings, and the free Chopin piano concerts begin by his monument in Lazienki Park on Sunday afternoons through to late September. It is peak shoulder season, so prices firm up and the Vistula boulevards fill in the evening.",
      6: "Warm at around 23C with the longest days of the year and terraces busy across Powisle and Praga. The Sunday Chopin concerts in Lazienki continue and the riverside comes alive after dark; book weekend rooms early as the city is at full swing.",
      7: "Peak summer, highs around 24C and warm evenings, though continental thunderstorms roll through some afternoons. The Chopin concerts run every Sunday in Lazienki, the Vistula beach bars are packed, and this is the busiest and priciest stretch, so do the outdoor sights early.",
      8: "Same summer heat near 24C, but the mood shifts on 1 August when air-raid sirens sound across the city at 5pm for the Warsaw Uprising anniversary and everyone stops in the street for a minute. It is a moving, sober moment worth witnessing; the rest of the month stays warm, lively and busy.",
      9: "Highs around 19C, thinning crowds after the first week and comfortable walking weather, which makes this the smart alternative to summer. The last free Chopin concerts play in Lazienki in the middle of the month and the light turns golden over the river; prices ease.",
      10: "Crisp autumn at around 13C with strong color in Lazienki and along the Vistula escarpment. Tourist numbers drop noticeably after mid-month and hotel rates follow; bring a warm layer for evenings, which get cold fast once the sun sets.",
      11: "Grey, cold and quiet at around 6C with short days and the first frosts, until the Old Town Christmas market and lights go up in the last week and lift the whole mood. Late November is a sweet spot for market stalls and mulled wine without the December weekend density.",
      12: "The Old Town Christmas market runs through the month around the Royal Castle and the Market Square, with lights strung across the medieval facades, mulled wine and hearty food, and it draws heavy weekend crowds. Expect lows below freezing and possible snow, and December rates above the winter norm, so book early.",
    },
    climate: {
      1: { highC: 1, lowC: -4, rainyDays: 9 },
      2: { highC: 2, lowC: -4, rainyDays: 8 },
      3: { highC: 7, lowC: -1, rainyDays: 9 },
      4: { highC: 14, lowC: 3, rainyDays: 8 },
      5: { highC: 20, lowC: 8, rainyDays: 10 },
      6: { highC: 23, lowC: 11, rainyDays: 11 },
      7: { highC: 24, lowC: 13, rainyDays: 11 },
      8: { highC: 24, lowC: 13, rainyDays: 10 },
      9: { highC: 19, lowC: 9, rainyDays: 9 },
      10: { highC: 13, lowC: 4, rainyDays: 9 },
      11: { highC: 6, lowC: 1, rainyDays: 10 },
      12: { highC: 2, lowC: -2, rainyDays: 10 },
    },
    budgetLevel: "mid",
    budgetPerDay: { budget: 55, mid: 110, high: 220 },
    tagline:
      "A capital rebuilt from rubble, where a fairy-tale old town stands beside Stalinist towers and glass skyscrapers.",
    heroIntro:
      "Warsaw's Old Town looks medieval but was rebuilt brick by brick after the war flattened it, so faithfully that it is now UNESCO-listed. The whole city is a story of destruction and defiant reconstruction, told with force at the superb Warsaw Rising and POLIN museums, and it rewards travelers who want substance over postcard prettiness. Around the historic core you get a green riverside, the Chopin park with its free summer concerts, and cheap, hearty milk-bar food. It is more spread out and modern than Krakow, but it has real depth, and two or three days lets you feel it.",
    accent: { from: "#C0433A", to: "#3E5673", ink: "#2A1616" },
    neighborhoodSlugs: [
      "old-town-stare-miasto",
      "srodmiescie-centrum",
      "praga",
      "powisle",
      "nowy-swiat-krakowskie",
    ],
    nearbyCitySlugs: ["krakow"],
  },

  neighborhoods: [
    {
      slug: "old-town-stare-miasto",
      citySlug: "warsaw",
      name: "Old Town (Stare Miasto)",
      lat: 52.2497,
      lng: 21.0122,
      bestFor: ["first-time", "romantic"],
      vibe: "The rebuilt UNESCO old town gathers pastel merchant houses around the Market Square and the Royal Castle, all reconstructed from rubble after the war and convincingly medieval to walk. It is the most atmospheric part of the city and the obvious first-time base, though it draws tour groups by day and empties into quiet after the restaurants close. Stay here for the postcard setting and the short walk to the Royal Route.",
      pros: [
        "Every headline old-town sight, the Market Square, Royal Castle and Barbican, at your door",
        "Genuinely atmospheric evenings once the day crowds thin and the facades are lit",
        "Short walk down Krakowskie Przedmiescie to the centre and Nowy Swiat",
      ],
      cons: [
        "The most tourist-priced restaurants in the city ring the Market Square",
        "Quiet and a little dead late at night, with few locals living here",
        "Cobbles and steps make it awkward with wheeled luggage",
      ],
    },
    {
      slug: "srodmiescie-centrum",
      citySlug: "warsaw",
      name: "Srodmiescie (Centrum)",
      lat: 52.2319,
      lng: 21.0067,
      bestFor: ["first-time", "family"],
      vibe: "The modern centre spreads around the Palace of Culture and Science, Nowy Swiat and the glass skyscrapers, and it is the practical, best-connected base in the city. Both metro lines and most trams cross here, hotels run the full price range, and everything is a tram ride or a walk away. Pick it for convenience and value over old-town charm.",
      pros: [
        "Best transport links in the city, with both metro lines and the main station close",
        "Full range of hotels at every price, plus shops, cinemas and restaurants",
        "Central for reaching the old town, Lazienki and Praga alike",
      ],
      cons: [
        "Busy, traffic-heavy and short on old-world atmosphere",
        "The area right by the Palace of Culture feels corporate and can be dead at night",
        "Less character than the old town or the riverside districts",
      ],
    },
    {
      slug: "praga",
      citySlug: "warsaw",
      name: "Praga",
      lat: 52.2528,
      lng: 21.0361,
      bestFor: ["nightlife", "local"],
      vibe: "The gritty, artsy east bank across the Vistula largely survived the war intact, so its brick tenements are the real pre-war Warsaw, now turned over to studios, bars and galleries. Zabkowska street, the Neon Museum and the Koneser vodka distillery anchor an edgy, creative scene that draws locals more than tourists. Base here for nightlife and character rather than convenience to the sights.",
      pros: [
        "The city's most creative nightlife, from Zabkowska street bars to the Koneser courtyard",
        "Real pre-war architecture that escaped the wartime destruction",
        "The Neon Museum and a strong gallery and studio scene",
      ],
      cons: [
        "Rougher-edged in patches and best navigated with normal city sense at night",
        "A river crossing from the old town and the main sights",
        "Fewer conventional hotels, more apartments and hostels",
      ],
    },
    {
      slug: "powisle",
      citySlug: "warsaw",
      name: "Powisle",
      lat: 52.2411,
      lng: 21.0289,
      bestFor: ["local", "budget"],
      vibe: "The hip riverside district sits below the escarpment between the centre and the Vistula, and it has become the young Warsaw of student bars, cafes and the reclaimed river boulevards. The Copernicus Science Centre and the university library gardens are here, and the whole strip comes alive on warm evenings. Base here for a local, good-value stay within walking distance of the water and the centre.",
      pros: [
        "The Vistula boulevards and beach bars are a short walk downhill",
        "Relaxed, student-priced bars and cafes rather than tourist prices",
        "Walkable to Nowy Swiat, the centre and the Copernicus Science Centre",
      ],
      cons: [
        "The escarpment means an uphill walk back to the centre and old town",
        "Fewer marquee sights in the immediate streets",
        "Smaller hotel stock, mostly guesthouses and apartments",
      ],
    },
    {
      slug: "nowy-swiat-krakowskie",
      citySlug: "warsaw",
      name: "Nowy Swiat and Krakowskie Przedmiescie",
      lat: 52.2385,
      lng: 21.0175,
      bestFor: ["romantic", "first-time"],
      vibe: "The Royal Route boulevard runs from the old town down through Krakowskie Przedmiescie and Nowy Swiat, lined with palaces, churches, the university and the city's grandest cafes. It is the elegant spine of Warsaw, walkable end to end, and it puts you between the old town and the centre with the Chopin bench trail underfoot. Base here for a central, romantic stay with cafe life on the doorstep.",
      pros: [
        "The most handsome street in the city, with palaces, cafes and the university",
        "Halfway between the old town and the centre, walkable to both",
        "The Chopin musical benches and the Royal Route sights along the walk",
      ],
      cons: [
        "Cafe-lined and desirable, so room rates run above the city average",
        "Busy with foot traffic and events, especially on summer weekends",
        "Part of the boulevard closes to traffic, which can complicate taxi drop-offs",
      ],
    },
  ],

  pois: [
    {
      slug: "old-town-market-square",
      citySlug: "warsaw",
      name: "Old Town Market Square and the Mermaid Statue",
      lat: 52.2497,
      lng: 21.0122,
      kind: "sight",
      needsBooking: false,
      tip: "The square and its bronze Syrenka mermaid, the sword-and-shield symbol of Warsaw, are free and open at all hours, but come before 10am or after 8pm to photograph the rebuilt facades without the day crowds. Remember the whole square was reconstructed from rubble after 1945, so read the old prewar photos displayed nearby to grasp what was rebuilt, and skip the square-side restaurants, which are the priciest in the city.",
    },
    {
      slug: "royal-castle-castle-square",
      citySlug: "warsaw",
      name: "Royal Castle and Castle Square",
      lat: 52.2478,
      lng: 21.0136,
      kind: "sight",
      needsBooking: false,
      tip: "The rebuilt Royal Castle houses restored state rooms and two Rembrandts, and entry to the main route is free on one day each week, usually a weekday, so check the castle site before you go and expect a queue on that day. Sigismund's Column on Castle Square in front is the city's oldest secular monument and the classic meeting point; allow about ninety minutes for the castle interior.",
    },
    {
      slug: "barbican-city-walls",
      citySlug: "warsaw",
      name: "The Barbican and Medieval Walls",
      lat: 52.2508,
      lng: 21.0106,
      kind: "sight",
      needsBooking: false,
      tip: "The red-brick Barbican and the surrounding stretch of reconstructed medieval walls are free to walk through and link the Old Town to the New Town in a couple of minutes. Come by in summer when buskers and craft sellers set up along the walls, and follow the ramparts round for the quietest and prettiest approach into the Market Square from the north.",
    },
    {
      slug: "krakowskie-przedmiescie-royal-route",
      citySlug: "warsaw",
      name: "Krakowskie Przedmiescie and the Royal Route",
      lat: 52.2411,
      lng: 21.0150,
      kind: "experience",
      needsBooking: false,
      tip: "This grand boulevard from Castle Square down to Nowy Swiat is free to walk and lined with palaces, churches and the university, and part of it closes to traffic at weekends, making it pleasant on foot. Look for the black Chopin benches along the route, which play thirty seconds of his music at the press of a button, and step into the Holy Cross Church to see the pillar holding the composer's heart.",
    },
    {
      slug: "palace-of-culture-science",
      citySlug: "warsaw",
      name: "Palace of Culture and Science",
      lat: 52.2318,
      lng: 21.0060,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Buy a ticket for the 30th-floor viewing terrace, which opens daily and gives the widest view over the whole city, and go up near sunset for the best light. The 1950s tower was a gift from Stalin that Poles still feel ambivalent about, and locals joke it has the best view precisely because it is the one place you cannot see the palace itself; queues build in summer, so go early or late.",
    },
    {
      slug: "lazienki-park",
      citySlug: "warsaw",
      name: "Lazienki Park and the Palace on the Isle",
      lat: 52.2149,
      lng: 21.0355,
      kind: "park",
      needsBooking: false,
      tip: "This is the city's grandest park, free to enter, with peacocks, the Palace on the Isle and the huge Chopin monument, and on Sunday afternoons from mid-May to late September free open-air piano concerts play by the statue at noon and 4pm. Bring a blanket and arrive early for a spot near the monument, and pair the visit with the palace interiors, which charge a separate ticket.",
    },
    {
      slug: "wilanow-palace",
      citySlug: "warsaw",
      name: "Wilanow Palace",
      lat: 52.1650,
      lng: 21.0905,
      kind: "sight",
      needsBooking: false,
      tip: "Often called the Polish Versailles, this baroque royal residence with formal gardens sits about 10km south of the centre and is reached by bus 116 or 180 in around 40 minutes, so allow half a day. Entry to the palace rooms is free on one day a week, usually Thursday, and the gardens charge a small separate fee; go in the morning to beat the coaches and see the rose garden in summer.",
    },
    {
      slug: "polin-museum",
      citySlug: "warsaw",
      name: "POLIN Museum of the History of Polish Jews",
      lat: 52.2495,
      lng: 20.9930,
      kind: "museum",
      needsBooking: true,
      tip: "Book a timed ticket online, as the core exhibition covering a thousand years of Polish Jewish life is popular and entry slots sell out on weekends. The building stands on the ground of the former wartime ghetto opposite the Ghetto Heroes monument, and the permanent exhibition is free on one day each week, usually Thursday; allow at least two to three hours inside.",
    },
    {
      slug: "warsaw-rising-museum",
      citySlug: "warsaw",
      name: "Warsaw Rising Museum",
      lat: 52.2325,
      lng: 20.9810,
      kind: "museum",
      needsBooking: true,
      tip: "This immersive museum on the 1944 uprising against the Nazi occupation is essential and gets very busy, so book a timed ticket online and arrive at opening; it is free on Mondays, which are also the most crowded. Give it at least two hours, do not miss the 3D film of the destroyed city or the replica sewer you crawl through, and note it is a ten-minute walk or short tram ride west of the centre.",
    },
    {
      slug: "praga-neon-koneser",
      citySlug: "warsaw",
      name: "Praga: Neon Museum and Koneser",
      lat: 52.2533,
      lng: 21.0430,
      kind: "experience",
      needsBooking: false,
      tip: "Cross the Vistula to Praga for the Neon Museum, which collects glowing Cold War-era signs in a former factory and is open daily for a small ticket, and the Koneser complex, a red-brick vodka distillery turned courtyard of bars, shops and the Polish Vodka Museum. Come in the late afternoon into the evening when the Zabkowska street bars fill up, and treat it as a half-day away from the tourist centre.",
    },
    {
      slug: "vistula-copernicus-centre",
      citySlug: "warsaw",
      name: "Vistula Boulevards and the Copernicus Science Centre",
      lat: 52.2415,
      lng: 21.0287,
      kind: "experience",
      needsBooking: true,
      tip: "The reclaimed riverside boulevards below Powisle are free and best in the evening, when beach bars and food stalls line the water and the multimedia fountain plays light shows on summer weekend nights. Alongside them the Copernicus Science Centre is a hands-on museum that is excellent for families but sells out, so book a timed ticket online in advance and allow a couple of hours inside.",
    },
    {
      slug: "milk-bar-bar-mleczny",
      citySlug: "warsaw",
      name: "A Milk Bar (Bar Mleczny)",
      lat: 52.2360,
      lng: 21.0170,
      kind: "food",
      needsBooking: false,
      tip: "These no-frills communist-era canteens still serve pierogi, soups and cutlets for a few euros, and a full plate rarely tops 25 PLN, making them the cheapest proper meal in the city. Bar Prasowy on Marszalkowska is a well-known survivor; order at the counter, expect a Polish-only menu and cash-friendly service, and go at lunchtime when the food is freshest and the turnover fastest.",
    },
    {
      slug: "zelazowa-wola-daytrip",
      citySlug: "warsaw",
      name: "Zelazowa Wola or Palmiry Day Trip",
      lat: 52.2510,
      lng: 20.4200,
      kind: "experience",
      needsBooking: false,
      tip: "Chopin's birthplace at Zelazowa Wola, about 50km west, is a manor house and park with free Sunday piano recitals in summer, reachable by a regional bus from Warsaw in around an hour and a half. Alternatively Palmiry, in the Kampinos forest north of the city, is the site and cemetery of wartime mass executions and a sober, moving half-day; both make quiet escapes from the capital, so check return bus times before you set off.",
    },
  ],

  itineraries: [
    {
      citySlug: "warsaw",
      days: 2,
      summary:
        "Two days is enough for the essence of Warsaw if you plan the ticketed museums ahead. The rebuilt Old Town is small and you can walk the Market Square, the Royal Castle, the Barbican and the Mermaid in a couple of hours, so the time really goes on the museums and the wider modern centre. Book a timed slot for the Warsaw Rising Museum and POLIN online, because both are essential, immersive and busy, and give each at least two hours. Base yourself in the Old Town or on the Royal Route so you can walk the historic spine, then use trams and the two metro lines for the rest. Day one takes the Old Town, the Royal Route and the Palace of Culture viewing terrace; day two is the heavy, rewarding history at the Warsaw Rising Museum and POLIN, then Lazienki Park in the afternoon, with its free Chopin concerts if you visit on a summer Sunday. What you give up at this pace is Praga and Wilanow. For those, take the three-day version.",
      stayNeighborhoodSlug: "old-town-stare-miasto",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "The Old Town, the Royal Route and the city view",
          morning: [
            {
              poiSlug: "old-town-market-square",
              text: "Start on the Old Town Market Square before the tour groups arrive, with the bronze Syrenka mermaid and the rebuilt pastel facades to yourself. Read the prewar photos nearby to grasp that the whole square was reconstructed from rubble after 1945.",
              durationMin: 45,
            },
            {
              poiSlug: "royal-castle-castle-square",
              text: "Walk to Castle Square and tour the rebuilt Royal Castle, with its restored state rooms and two Rembrandts, allowing about ninety minutes. Check the castle site for the weekly free-entry day if you want to save the ticket, and expect a queue if you go then.",
              durationMin: 105,
            },
            {
              poiSlug: "barbican-city-walls",
              text: "Loop out through the red-brick Barbican and along the reconstructed medieval walls toward the New Town, which is free and takes only a few minutes. In summer buskers and craft sellers line the ramparts.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "milk-bar-bar-mleczny",
              text: "Break for a cheap, filling lunch at a milk bar, where a plate of pierogi and soup rarely tops 25 PLN. Order at the counter, expect a Polish-only menu, and go at lunchtime when the turnover is fastest.",
              durationMin: 60,
            },
            {
              poiSlug: "krakowskie-przedmiescie-royal-route",
              text: "Walk the Royal Route down Krakowskie Przedmiescie past the palaces, churches and the university, pressing the black Chopin benches for their thirty seconds of music. Step into the Holy Cross Church to see the pillar holding the composer's heart.",
              durationMin: 75,
            },
            {
              poiSlug: "palace-of-culture-science",
              text: "Carry on to the Palace of Culture and Science and ride up to the 30th-floor viewing terrace for the widest view over the city. The 1950s Stalinist tower is a gift Poles still feel mixed about; go up near sunset for the best light.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              text: "Head back toward Nowy Swiat for dinner, choosing a side street off the main boulevard where prices drop, then walk the lit Royal Route back up to the Old Town. The square is at its best floodlit and quiet after the day crowds have gone.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "War history and the Chopin park",
          morning: [
            {
              poiSlug: "warsaw-rising-museum",
              text: "Take your pre-booked slot at the Warsaw Rising Museum at opening, before the crowds build, and give it at least two hours. Do not miss the 3D film of the destroyed city or the replica sewer you crawl through; it is a ten-minute tram ride west of the centre.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "polin-museum",
              text: "Move to POLIN, the Museum of the History of Polish Jews, on your timed ticket, for its thousand-year core exhibition on the ground of the former ghetto. Allow two to three hours and pause at the Ghetto Heroes monument opposite the entrance.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "lazienki-park",
              text: "Finish in Lazienki Park, the city's grandest, with its peacocks, the Palace on the Isle and the huge Chopin monument. If it is a summer Sunday, time it for the free open-air piano concert by the statue at 4pm and bring something to sit on.",
              durationMin: 120,
            },
            {
              text: "Round off with dinner back toward the centre or Nowy Swiat, or if the evening is warm walk down to the Vistula boulevards for a riverside drink among the beach bars.",
              durationMin: 105,
            },
          ],
        },
      ],
    },
    {
      citySlug: "warsaw",
      days: 3,
      summary:
        "Three days is the comfortable amount for Warsaw and lets you do the heavy war-history museums at a proper pace rather than back to back. The Old Town is small and quickly walked, so the real time goes on the Warsaw Rising Museum and POLIN, the Palace of Culture and Lazienki Park, which alone need a full second day. The extra third day is what opens the city up: cross the Vistula to gritty, creative Praga for the Neon Museum and the Koneser distillery, ride out to the baroque Wilanow Palace, or simply give the war museums the space they deserve. Base yourself on the Royal Route or in the Old Town for the historic core, then lean on the trams and the two metro lines for the wider sights. Book timed tickets for the Warsaw Rising Museum, POLIN and the Copernicus Science Centre online, since all three sell out in season. Day one is the Old Town and the Royal Route; day two is the museums and Lazienki; day three is Praga, Wilanow and the riverside at a relaxed pace.",
      stayNeighborhoodSlug: "nowy-swiat-krakowskie",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "The Old Town, the Royal Route and the city view",
          morning: [
            {
              poiSlug: "old-town-market-square",
              text: "Begin on the Old Town Market Square early, with the bronze Syrenka mermaid and the rebuilt facades before the day crowds. Read the prewar photos nearby to understand the whole square was reconstructed from rubble after 1945.",
              durationMin: 45,
            },
            {
              poiSlug: "royal-castle-castle-square",
              text: "Tour the rebuilt Royal Castle from Castle Square, with its state rooms and two Rembrandts, allowing about ninety minutes. Sigismund's Column out front is the city's oldest secular monument and the classic meeting point.",
              durationMin: 105,
            },
            {
              poiSlug: "barbican-city-walls",
              text: "Walk out through the Barbican and along the reconstructed medieval walls toward the New Town, free and quick, then loop back into the square from the north for its prettiest approach.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "milk-bar-bar-mleczny",
              text: "Lunch cheaply at a milk bar, where pierogi, soup and a cutlet rarely top 25 PLN. Order at the counter and go at midday when the food is freshest and the queue moves fastest.",
              durationMin: 60,
            },
            {
              poiSlug: "krakowskie-przedmiescie-royal-route",
              text: "Walk the Royal Route down Krakowskie Przedmiescie past the palaces, churches and university, pressing the Chopin benches as you go. Duck into the Holy Cross Church to see the pillar holding the composer's heart.",
              durationMin: 75,
            },
            {
              poiSlug: "palace-of-culture-science",
              text: "End the afternoon at the Palace of Culture and Science and ride to the 30th-floor viewing terrace for the widest view of the city. Go near sunset for the light; the Stalinist tower remains a monument Poles feel mixed about.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              text: "Dinner around Nowy Swiat, choosing a side street where prices ease, then walk the lit boulevard back toward the Old Town. The floodlit Market Square is quietest and best once the day-trippers have gone.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "War history and the Chopin park",
          morning: [
            {
              poiSlug: "warsaw-rising-museum",
              text: "Take your booked slot at the Warsaw Rising Museum at opening and give it at least two hours; it is immersive, essential and busy. See the 3D film of the destroyed city and crawl the replica sewer; it sits a short tram ride west of the centre.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "polin-museum",
              text: "Move to POLIN on your timed ticket for its thousand-year core exhibition on the ground of the former ghetto, allowing two to three hours. Pause at the Ghetto Heroes monument facing the entrance before or after.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "lazienki-park",
              text: "Spend the late afternoon in Lazienki Park with its peacocks, the Palace on the Isle and the Chopin monument. On a summer Sunday, catch the free open-air piano concert by the statue at 4pm; bring a blanket and arrive early for a spot.",
              durationMin: 120,
            },
            {
              text: "Finish with dinner back toward the centre, or walk down to the Vistula boulevards for a drink among the riverside beach bars if the weather holds.",
              durationMin: 105,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Praga, Wilanow and the riverside",
          morning: [
            {
              poiSlug: "wilanow-palace",
              text: "Head south to Wilanow Palace, the baroque Polish Versailles with its formal gardens, on bus 116 or 180, allowing about 40 minutes each way. Entry to the rooms is free one day a week, usually Thursday; go in the morning to beat the coaches.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "praga-neon-koneser",
              text: "Cross the Vistula to Praga for the Neon Museum of glowing Cold War signs and the Koneser distillery courtyard, home to bars, shops and the Polish Vodka Museum. This east bank largely survived the war, so its brick tenements are the real prewar Warsaw.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "vistula-copernicus-centre",
              text: "Come back to the west bank for the Vistula boulevards below Powisle, best in the evening when the beach bars and food stalls open and the multimedia fountain plays on summer weekend nights. Families can slot in a booked couple of hours at the Copernicus Science Centre alongside.",
              durationMin: 120,
            },
            {
              text: "Last dinner in Powisle or on Nowy Swiat, keeping it easy. If you have an early flight, remember Chopin airport is only 8km south, about 20 to 25 minutes on the S2 or S3 train or bus 175 for around 5 PLN.",
              durationMin: 105,
            },
          ],
        },
      ],
    },
  ],
};

export default warsaw;
