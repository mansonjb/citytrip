import type { CityData } from "../types";

const hamburg: CityData = {
  city: {
    slug: "hamburg",
    name: "Hamburg",
    country: "Germany",
    countrySlug: "germany",
    lat: 53.5511,
    lng: 9.9937,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "HAM",
    airportToCenter:
      "Hamburg Airport has its own S-Bahn station under the terminals, and the S1 runs straight through to the Hauptbahnhof in about 25 minutes, roughly every ten minutes through the day. Any HVV single ticket for the Hamburg AB zone covers the ride, around 4 EUR from the machine and slightly less bought in the hvv app, with no airport surcharge. Going back out, the S1 splits at Ohlsdorf, so ride in the front carriages, which are the ones signed for the airport. A taxi to the centre costs roughly 30 to 40 EUR and takes 20 to 30 minutes outside rush hour. Plenty of visitors skip flying altogether, because Hamburg Hbf is one of the busiest ICE hubs in Germany: Berlin is about 1h45 to 2h away, Cologne around 4 hours and Copenhagen roughly 5 hours by direct train.",
    centerWalkable: false,
    bestMonths: [5, 6, 7, 9],
    avoidMonths: [1, 11],
    monthlyNotes: {
      1: "The quietest and cheapest month, cold and grey at around 4C with darkness by half past four and a wind off the water that makes it feel colder. Hotel rates bottom out and the museums, Miniatur Wunderland and the Elbphilharmonie concert season carry the trip indoors. In a hard winter the Outer Alster occasionally freezes solid enough for the Alstereisvergnugen ice festival, but that has not happened since 2012, so do not plan around it.",
      2: "Still cold at around 5C and the stormiest stretch of the year, when Atlantic fronts push up the Elbe and the harbour walkways get genuinely blustery. Prices stay at their winter floor and queues are short everywhere, including Miniatur Wunderland, which is the one sight that never has spare capacity in summer. Pack a proper waterproof rather than an umbrella, because the wind wrecks umbrellas here.",
      3: "Early spring at around 9C, with light returning fast and the terraces along the Alster starting to put chairs out on the first warm afternoons. The Fruhlingsdom funfair opens on the Heiligengeistfeld in the second half of the month and runs for about four weeks, with fireworks on Friday nights. Rates are still low and the harbour is at its most workmanlike, which is a good thing if you want the city without the crowd.",
      4: "Mild and showery at around 14C, with the parks greening and the Fruhlingsdom running into the first weeks. From 1 April the Sunday Fischmarkt moves to its summer hours and opens at 5am rather than 7am, which is the version worth setting an alarm for. Weather is unsettled and changes hour to hour, so build in indoor fallbacks.",
      5: "One of the best months, warm at around 18C with long evenings and everything outdoors reopening. The Hafengeburtstag harbour birthday takes over the waterfront for three days in early May with a tall-ship parade, a tug ballet and huge crowds, so book rooms months out if your dates overlap. The Wasserlichtkonzerte water and light shows also start on 1 May, staged free on the lake in Planten un Blomen at 10pm nightly.",
      6: "Early summer at around 21C, the best light of the year on the harbour and evenings that stay usable until nearly eleven. Elbjazz spreads concerts across working shipyards and harbour venues over a weekend in early June, and the Alster fills with rowers, pedalos and swimmers at the outdoor pools. Prices climb but the city absorbs visitors easily, so it rarely feels crushed.",
      7: "The warmest month at around 23C, and also one of the wettest, with heavy showers that pass quickly rather than settling in. The Sommerdom funfair opens on the Heiligengeistfeld in the last week and runs for about five weeks, with fireworks every Friday at 10.30pm that half the city watches for free from the surrounding streets. School holidays start, so the harbour tours and Miniatur Wunderland need booking days ahead.",
      8: "Warm at around 23C with the Sommerdom running to the end of the month and the harbour ferries at their busiest. This is peak family season, so the popular sights sell out and the Elbphilharmonie plaza slots go fast, though evenings on the Elbe beach at Ovelgonne are the reward. Room rates sit at their yearly high alongside May and September.",
      9: "The other outstanding month, easing to around 19C with warm afternoons, thinner crowds and softer light. The Reeperbahn Festival takes over St Pauli in the second half of the month, cramming several hundred acts into clubs and bars across a few streets, which fills every hotel nearby and pushes rates up sharply. The water and light concerts in Planten un Blomen move to 9pm and run to the end of the month.",
      10: "Cool, wet and windy at around 13C, with the last of the outdoor season and a noticeable drop in visitor numbers after the first week. Filmfest Hamburg runs at the start of the month and the Sunday Fischmarkt keeps its 5am summer start until 31 October, after which it opens at 7am. Room rates fall back to shoulder-season levels and the museums are comfortable again.",
      11: "The bleakest month, around 8C, dark by four in the afternoon and reliably wet, which is why it is also the cheapest time to sleep in a good hotel. The Winterdom funfair runs on the Heiligengeistfeld from early November into early December, and the Christmas markets set up in the last week of the month. Plan an indoor-heavy trip around the Kunsthalle, the Maritime Museum and Miniatur Wunderland.",
      12: "Cold at around 5C and often wet rather than snowy, but the city is at its most atmospheric, with the historic Christmas market filling the Rathausmarkt in front of the town hall until 23 December and a scatter of smaller markets across the districts. St Pauli runs its own adults-only Santa Pauli market on the Spielbudenplatz. Rates spike over the market weekends and again at New Year, so book early or come midweek.",
    },
    climate: {
      1: { highC: 4, lowC: -1, rainyDays: 12 },
      2: { highC: 5, lowC: -1, rainyDays: 10 },
      3: { highC: 9, lowC: 1, rainyDays: 11 },
      4: { highC: 14, lowC: 4, rainyDays: 9 },
      5: { highC: 18, lowC: 8, rainyDays: 10 },
      6: { highC: 21, lowC: 11, rainyDays: 11 },
      7: { highC: 23, lowC: 13, rainyDays: 12 },
      8: { highC: 23, lowC: 13, rainyDays: 12 },
      9: { highC: 19, lowC: 10, rainyDays: 11 },
      10: { highC: 13, lowC: 6, rainyDays: 11 },
      11: { highC: 8, lowC: 3, rainyDays: 12 },
      12: { highC: 5, lowC: 1, rainyDays: 12 },
    },
    budgetLevel: "mid",
    budgetPerDay: { budget: 70, mid: 140, high: 275 },
    tagline:
      "Germany's port city: red-brick warehouses, harbour ferries and a concert hall on the water.",
    heroIntro:
      "Hamburg is Germany's biggest port and its second city, built on water rather than on a cathedral square, with more bridges inside the city limits than Venice and Amsterdam put together. The red-brick Speicherstadt warehouse district and the neighbouring Kontorhausviertel, with the ship-shaped Chilehaus at its centre, have been a UNESCO World Heritage site since 2015, and the Elbphilharmonie concert hall sits on top of an old quayside warehouse with a free public viewing plaza part-way up. Two artificial lakes, the Binnenalster and the far larger Outer Alster, put sailing boats and rowing crews five minutes from the shopping streets, while St Pauli and the Reeperbahn provide the nightlife and the Sunday Fischmarkt in Altona starts at dawn and finishes before most people have had breakfast. The harbour ferries are ordinary public transport, so a normal transit ticket buys you a river cruise. This guide splits two, three or four days: the harbour and the warehouse district first, then the old centre and the Alster, then St Pauli, Altona and the museums.",
    accent: { from: "#0F5C73", to: "#A9482C", ink: "#0B2F3B" },
    neighborhoodSlugs: [
      "altstadt-neustadt",
      "hafencity-speicherstadt",
      "st-pauli",
      "sternschanze",
      "altona-ottensen",
    ],
    nearbyCitySlugs: ["berlin", "copenhagen"],
  },
  neighborhoods: [
    {
      slug: "altstadt-neustadt",
      citySlug: "hamburg",
      name: "Altstadt and Neustadt",
      lat: 53.5500,
      lng: 9.9900,
      bestFor: ["first-time", "family"],
      vibe: "The twin central districts wrap around the town hall, the Binnenalster and the arcaded shopping streets, with the Kontorhausviertel on one side and the church towers on the other. Everything is level and walkable, the Hauptbahnhof and the S-Bahn are minutes away, and the Speicherstadt starts at the southern edge. Base here on a first trip when you want the centre, the water and the transport all within a few streets.",
      pros: [
        "Walking distance to the Rathaus, the Alster, St Michaelis and the Speicherstadt",
        "Best transport links in the city, with the Hauptbahnhof and several U-Bahn lines",
        "The widest choice of hotels at every price level",
      ],
      cons: [
        "Business-district atmosphere that empties out after office hours",
        "Traffic and construction noise on the bigger streets",
        "Weak on restaurants compared with Ottensen or the Schanze",
      ],
    },
    {
      slug: "hafencity-speicherstadt",
      citySlug: "hamburg",
      name: "HafenCity and Speicherstadt",
      lat: 53.5420,
      lng: 9.9950,
      bestFor: ["first-time", "romantic"],
      vibe: "The Speicherstadt is the UNESCO-listed run of red-brick warehouses on oak piles, still threaded with canals, and HafenCity behind it is the new quarter built on the old dock basins, all glass, promenades and water on three sides. It holds the Elbphilharmonie, Miniatur Wunderland and the Maritime Museum within a few hundred metres. Base here for the postcard views and short walks to the harbour, accepting that it is a designed district rather than an old one.",
      pros: [
        "The Elbphilharmonie, Miniatur Wunderland and the Speicherstadt canals on foot",
        "Waterfront promenades and the best evening light in the city",
        "Quiet at night and close to the Landungsbrucken ferry piers",
      ],
      cons: [
        "New-build and corporate in feel, with little local street life",
        "Restaurant prices run above the city average",
        "Long walks between blocks and exposed to the wind off the Elbe",
      ],
    },
    {
      slug: "st-pauli",
      citySlug: "hamburg",
      name: "St Pauli",
      lat: 53.5510,
      lng: 9.9640,
      bestFor: ["nightlife", "budget"],
      vibe: "St Pauli runs from the Landungsbrucken piers up to the Reeperbahn and the Heiligengeistfeld, and it is the loudest, scruffiest and most sociable district in the city. Bars, clubs, theatres, the football stadium and the Sunday Fischmarkt are all inside it, and the harbour is a two-minute walk downhill. Base here if you want to be in the middle of the night rather than travelling to it, and if noise at 3am does not bother you.",
      pros: [
        "Nightlife, live music and late food all within walking distance",
        "Cheap hotel and hostel stock compared with the centre",
        "Downhill to the harbour ferries and a short walk to the Fischmarkt",
      ],
      cons: [
        "Genuinely noisy on Friday and Saturday nights, especially near the Reeperbahn",
        "Streets around the Reeperbahn look and smell rough at dawn",
        "Not the district for an early night or for young children",
      ],
    },
    {
      slug: "sternschanze",
      citySlug: "hamburg",
      name: "Sternschanze",
      lat: 53.5630,
      lng: 9.9640,
      bestFor: ["local", "budget"],
      vibe: "The Schanze is a compact quarter of independent shops, cafes and small restaurants around the old red-brick Schanzenhof and the Rote Flora, with a left-leaning, student-heavy character it defends loudly. It eats and drinks well for the money and stays busy on the pavements until late without the tourist scrum of the Reeperbahn. Base here if you would rather be in a working neighbourhood than in a sightseeing one.",
      pros: [
        "The best density of good-value restaurants and bars in the city",
        "Own S-Bahn and U-Bahn station, five minutes from the centre",
        "Local rather than touristy, with independent shops on every street",
      ],
      cons: [
        "No major sights inside the district itself",
        "Street noise and graffiti that some visitors find uninviting",
        "Occasional protests and the odd flashpoint around the Rote Flora",
      ],
    },
    {
      slug: "altona-ottensen",
      citySlug: "hamburg",
      name: "Altona and Ottensen",
      lat: 53.5510,
      lng: 9.9350,
      bestFor: ["local", "family"],
      vibe: "Altona was a separate Danish town until 1938 and still feels like one, with Ottensen behind it as a leafy grid of low houses, markets, playgrounds and family cafes. The Elbe promenade, the Fischmarkt and the Ovelgonne museum harbour are all along its waterfront, and Altona station puts trains and the S-Bahn on the doorstep. Base here for a slower, residential stay with real restaurants and easy access to the river.",
      pros: [
        "Strong local food scene, weekly markets and independent cinemas",
        "The Elbe promenade, the beach at Ovelgonne and the Fischmarkt nearby",
        "Family-friendly streets and better value than the central districts",
      ],
      cons: [
        "Fifteen to twenty minutes by S-Bahn from the Speicherstadt and the centre",
        "Very few classic sights within the district",
        "Fewer hotels, so much of the stock is apartments and guesthouses",
      ],
    },
  ],
  pois: [
    {
      slug: "elbphilharmonie-plaza",
      citySlug: "hamburg",
      name: "Elbphilharmonie Plaza",
      lat: 53.5413,
      lng: 9.9841,
      kind: "viewpoint",
      needsBooking: true,
      tip: "The Plaza is the open public deck at 37 metres where the glass concert hall meets the old brick warehouse below, and it wraps right around the building for views over the harbour, the Speicherstadt and the Elbe. Entry is free but capped by timed slot: book online well ahead for a few euros in booking fee, or turn up at the ticket counter on the day and take a free slot if any are left, which is unlikely at sunset in summer. The long curved escalator up to it is part of the experience, so do not skip it for the lift.",
    },
    {
      slug: "speicherstadt",
      citySlug: "hamburg",
      name: "Speicherstadt Warehouse District",
      lat: 53.5436,
      lng: 9.9885,
      kind: "sight",
      needsBooking: false,
      tip: "This is the largest warehouse complex in the world built on timber piles, put up from the 1880s and UNESCO-listed together with the Kontorhausviertel since 2015. It costs nothing and is best seen twice: once by day for the canals and the loading hatches, and once after dark when the facades are floodlit, which is when the Poggenmuhlenbrucke bridge gives the classic view of the Wasserschloss building. Time a walk here for high tide if you can, as the canals sit empty and muddy at low water.",
    },
    {
      slug: "miniatur-wunderland",
      citySlug: "hamburg",
      name: "Miniatur Wunderland",
      lat: 53.5439,
      lng: 9.9884,
      kind: "museum",
      needsBooking: true,
      tip: "The largest model railway in the world fills two Speicherstadt warehouse floors with miniature versions of Hamburg, the Alps, Scandinavia and a working airport, and it is far better than it sounds. Booking is essential rather than advisable: entry is by timed slot at around 22 EUR for adults, and walk-up waits of two hours or more are normal in the school holidays. Allow at least three hours, and pick an early slot or a late one after 6pm, when it opens long on most evenings and the crowds thin out.",
    },
    {
      slug: "hamburg-rathaus",
      citySlug: "hamburg",
      name: "Hamburg Rathaus",
      lat: 53.5503,
      lng: 9.9925,
      kind: "sight",
      needsBooking: true,
      tip: "The 1897 town hall has 647 rooms, more than Buckingham Palace, and its arcaded inner courtyard and ground-floor hall are free to walk into during opening hours. To see the state rooms you need the guided tour, which lasts about 45 minutes and costs around 5 EUR, with English departures typically at 11.15am, 1.15pm and 3.15pm on tour days; book online or check at the desk in the entrance hall, as tours are cancelled without notice when the parliament is sitting.",
    },
    {
      slug: "st-michaelis-michel",
      citySlug: "hamburg",
      name: "St Michaelis Church and Tower",
      lat: 53.5484,
      lng: 9.9789,
      kind: "viewpoint",
      needsBooking: false,
      tip: "The Michel is the city's landmark baroque church, and its 132-metre copper tower carries the best all-round view in central Hamburg, taking in the harbour, the Elbe and the Alster in one turn. The church itself is generally open daily from 10am to 6pm, and you pay around 10 EUR for a combined ticket to the tower and the crypt; there is a lift after the first 52 steps, so you do not have to take all 452 stairs. A trumpeter plays from the balcony at 10am daily and again at noon on Sundays.",
    },
    {
      slug: "fischmarkt",
      citySlug: "hamburg",
      name: "Altona Fischmarkt",
      lat: 53.5459,
      lng: 9.9479,
      kind: "food",
      needsBooking: false,
      tip: "The Sunday fish market on the Elbe in Altona has run since 1703 and is the one fixed appointment in the Hamburg week: it opens at 5am from 1 April to 31 October and at 7am from 1 November to 31 March, and every stall is packed away by 9.30am sharp. Go for the shouting market criers and the live band in the old brick auction hall rather than for the fish itself, and note the crowd is half early risers and half people who have not been to bed since the Reeperbahn.",
    },
    {
      slug: "landungsbrucken-ferry-62",
      citySlug: "hamburg",
      name: "Landungsbrucken and Harbour Ferry 62",
      lat: 53.5459,
      lng: 9.9695,
      kind: "experience",
      needsBooking: false,
      tip: "The HADAG harbour ferries are ordinary public transport, so line 62 from Landungsbrucken pier 3 down the Elbe to Finkenwerder costs no more than a normal HVV ticket and does the job of a paid harbour cruise for a fraction of the price. It runs roughly every 15 minutes and takes about 30 minutes end to end, passing the Fischmarkt, the Dockland building and the museum harbour at Ovelgonne. Sit outside on the upper deck, get off at Ovelgonne for the Elbe beach, and skip the commentary boats entirely.",
    },
    {
      slug: "alster-jungfernstieg",
      citySlug: "hamburg",
      name: "The Alster Lakes and Jungfernstieg",
      lat: 53.5555,
      lng: 9.9930,
      kind: "park",
      needsBooking: false,
      tip: "The Alster was dammed in the 13th century and now forms two lakes: the small Binnenalster ringed by the Jungfernstieg promenade, and the much larger Outer Alster behind it. The full circuit of the Outer Alster on the waterside paths is about 7.5 kilometres and takes roughly two hours on foot, all of it free and flat. If you would rather sit down, the Alster boats leave from the Jungfernstieg jetty for a round trip of about 50 minutes, and they run to a reduced timetable in winter.",
    },
    {
      slug: "planten-un-blomen",
      citySlug: "hamburg",
      name: "Planten un Blomen",
      lat: 53.5605,
      lng: 9.9820,
      kind: "park",
      needsBooking: false,
      tip: "This free park on the line of the old city ramparts holds the largest Japanese garden in Europe designed by a Japanese architect, a tropical greenhouse and a lake with a fountain rig in it. The reason to come after dark is the Wasserlichtkonzerte, free water and light shows set to music on the lake, staged nightly at 10pm from 1 May to 31 August and at 9pm through September. Arrive twenty minutes early for a bench on the terraced seating, or stand on the far bank where it is quieter.",
    },
    {
      slug: "reeperbahn-st-pauli",
      citySlug: "hamburg",
      name: "The Reeperbahn and St Pauli",
      lat: 53.5497,
      lng: 9.9628,
      kind: "experience",
      needsBooking: false,
      tip: "The Reeperbahn is a 900-metre strip of clubs, bars, theatres and sex shops that only really starts working after 10pm, with the smaller Grosse Freiheit side street where the Beatles played their first residencies in 1960. Herbertstrasse, the walled-off lane, is closed to women and under-18s and photography is not tolerated anywhere near the working streets, so keep the phone in your pocket. In the second half of September the Reeperbahn Festival fills every venue here for four nights.",
    },
    {
      slug: "maritime-museum",
      citySlug: "hamburg",
      name: "International Maritime Museum",
      lat: 53.5442,
      lng: 9.9986,
      kind: "museum",
      needsBooking: false,
      tip: "Nine floors of ship models, navigation instruments and naval history fill Kaispeicher B, the oldest surviving warehouse in the Speicherstadt, dating from 1878. Work down from the top rather than up, because the collection is enormous and most people run out of energy by deck four; entry is around 15 EUR and it is one of the few big Hamburg sights that rarely needs pre-booking. It is a solid rainy-day option and sits five minutes from Miniatur Wunderland.",
    },
    {
      slug: "hamburger-kunsthalle",
      citySlug: "hamburg",
      name: "Hamburger Kunsthalle",
      lat: 53.5545,
      lng: 10.0025,
      kind: "museum",
      needsBooking: false,
      tip: "The city's main art museum runs from medieval altarpieces through Caspar David Friedrich's Wanderer above the Sea of Fog to a modern wing of post-war and contemporary work, spread across two linked buildings between the station and the Alster. It opens Tuesday to Sunday from 10am to 6pm, stays open until 9pm on Thursdays and closes on Mondays; admission is around 18 EUR, but entry is usually free on the first Thursday of the month from 6pm.",
    },
    {
      slug: "alter-elbtunnel",
      citySlug: "hamburg",
      name: "Alter Elbtunnel",
      lat: 53.5459,
      lng: 9.9668,
      kind: "sight",
      needsBooking: false,
      tip: "Opened in 1911, the Old Elbe Tunnel drops 24 metres below the river in tiled shafts and runs 426 metres across to Steinwerder, and it is still free and open around the clock for anyone on foot or on a bike. Walk through and come up on the south bank for the single best head-on view of the Hamburg skyline, with the Elbphilharmonie, the church towers and the cranes lined up together. The entrance is in the domed building at Landungsbrucken, and there are lifts as well as stairs.",
    },
    {
      slug: "chilehaus-kontorhausviertel",
      citySlug: "hamburg",
      name: "Chilehaus and the Kontorhausviertel",
      lat: 53.5486,
      lng: 10.0004,
      kind: "sight",
      needsBooking: false,
      tip: "The Chilehaus, finished in 1924 by Fritz Hoger, is the signature building of Hamburg's brick expressionism, with a sharp eastern corner shaped like a ship's prow and about 4.8 million bricks in its walls. It is an office block, so you cannot tour it, but the courtyards and passages are open on weekdays and cost nothing; go to the corner of Pumpen and Niedernstrasse for the prow view. The surrounding Kontorhausviertel, including the Sprinkenhof next door, shares the UNESCO listing with the Speicherstadt.",
    },
  ],
  itineraries: [
    {
      citySlug: "hamburg",
      days: 2,
      summary:
        "Two full days covers the essentials of Hamburg if you separate the harbour from the old centre and do one on each day. That gets you the Speicherstadt, Miniatur Wunderland, the Elbphilharmonie plaza, a harbour ferry, the Rathaus, the Chilehaus, the Michel tower and the Alster, which is the honest headline list. Two things need booking before you fly: a timed slot for Miniatur Wunderland, which sells out days ahead in season, and a free timed ticket for the Elbphilharmonie plaza, which you can also try to pick up free at the counter on the day if you are flexible. Stay in the Altstadt or Neustadt, because the city is not compact and a central base keeps the U-Bahn and S-Bahn short. Buy an HVV day ticket rather than singles, since it also covers the harbour ferries. Day one takes the warehouse district and the water, day two the old centre, the Michel and the lakes. What you give up at this pace is Altona, Ottensen and the Sunday Fischmarkt, which need the three-day version.",
      stayNeighborhoodSlug: "altstadt-neustadt",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "The Speicherstadt, HafenCity and the harbour",
          morning: [
            {
              poiSlug: "speicherstadt",
              text: "Start on foot in the Speicherstadt, the UNESCO-listed run of brick warehouses on oak piles, walking the canal bridges to the Wasserschloss and the Poggenmuhlenbrucke for the classic view. Check the tide before you set out, as the canals sit empty at low water.",
              durationMin: 60,
            },
            {
              poiSlug: "miniatur-wunderland",
              text: "Take your pre-booked slot at Miniatur Wunderland in the middle of the warehouse district, where the world's largest model railway covers two floors with a working miniature airport. Allow three hours and do not expect to get in without a ticket.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              text: "Eat lunch in HafenCity along the Magellan or Marco Polo terraces, or grab a fish sandwich from one of the kiosks by the water if you would rather keep moving. Prices in this quarter run above the city average, so a street back is cheaper.",
              durationMin: 60,
            },
            {
              poiSlug: "elbphilharmonie-plaza",
              text: "Ride the long curved escalator up to the Elbphilharmonie plaza on your timed ticket and walk the full circuit at 37 metres for the harbour, the Elbe and the roofs of the Speicherstadt. The free same-day slots at the counter go quickly, so an advance booking is safer.",
              durationMin: 60,
            },
            {
              poiSlug: "landungsbrucken-ferry-62",
              text: "Walk west to the Landungsbrucken piers and board harbour ferry 62 from pier 3 on your day ticket, sitting outside on the upper deck as it runs down the Elbe past the Fischmarkt and Dockland. Ride to Ovelgonne or all the way to Finkenwerder and back.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "reeperbahn-st-pauli",
              text: "Head up into St Pauli for dinner and then the Reeperbahn, which only comes alive after 10pm, taking in the Grosse Freiheit side street where the Beatles played their first residencies in 1960. Keep your phone away near the working streets.",
              durationMin: 150,
            },
            {
              poiSlug: "speicherstadt",
              text: "If you would rather have a quiet night, walk the Speicherstadt again after dark instead, when the warehouse facades are floodlit and the canals reflect them. It takes half an hour and costs nothing.",
              durationMin: 45,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "The old centre, the Michel and the Alster",
          morning: [
            {
              poiSlug: "hamburg-rathaus",
              text: "Begin at the Rathaus, walking into the free arcaded courtyard and then joining an English guided tour of the state rooms, usually at 11.15am and lasting 45 minutes. Check at the desk first, as tours are dropped when the parliament sits.",
              durationMin: 90,
            },
            {
              poiSlug: "chilehaus-kontorhausviertel",
              text: "Walk ten minutes east into the Kontorhausviertel for the Chilehaus, Fritz Hoger's 1924 brick expressionist office block with a corner shaped like a ship's prow. Stand at the corner of Pumpen and Niedernstrasse for the view and step into the courtyards, which are open on weekdays.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              text: "Lunch around the Rathausmarkt or in the covered arcades that run north from it toward the Alster, which shelter a run of cafes and are a useful wet-weather route through the centre.",
              durationMin: 60,
            },
            {
              poiSlug: "st-michaelis-michel",
              text: "Walk southwest to St Michaelis and take the lift up the 132-metre tower for the best central panorama, covering the harbour, the Elbe and the Alster in one turn. The combined tower and crypt ticket runs about 10 EUR.",
              durationMin: 75,
            },
            {
              poiSlug: "alster-jungfernstieg",
              text: "Finish on the Jungfernstieg promenade above the Binnenalster, then either walk part of the Outer Alster shore path or take the 50-minute Alster boat round trip from the jetty. The full lake circuit is 7.5 kilometres if you have the legs.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "planten-un-blomen",
              text: "From May to September walk over to Planten un Blomen for the free water and light concert on the lake, at 10pm from May to August and 9pm in September. Get there twenty minutes early for a seat on the terraces.",
              durationMin: 75,
            },
            {
              text: "Out of that season, eat instead in the Sternschanze, five minutes by S-Bahn, where the restaurant density and the prices are both far better than in the centre.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "hamburg",
      days: 3,
      summary:
        "Three days is the right length for Hamburg. It covers the harbour and the Speicherstadt, the old centre and the Alster, and still leaves a full day for St Pauli, the Old Elbe Tunnel and Altona with Ottensen, which is where the city actually eats. Base yourself in HafenCity or the Speicherstadt so the Elbphilharmonie, Miniatur Wunderland and the ferry piers are all on foot and the evenings are quiet. Book a Miniatur Wunderland slot and an Elbphilharmonie plaza ticket before you travel, and buy multi-day HVV tickets, which cover the harbour ferries as well as the U-Bahn and S-Bahn. Try to have a Sunday in your trip, because the Altona Fischmarkt only runs on Sunday mornings, from 5am in summer and 7am in winter, and every stall is gone by 9.30am. Day one is the warehouse district and the water, day two the centre, the Michel and the lakes, day three St Pauli, the tunnel and Ottensen. In summer, keep one evening for the free water and light show in Planten un Blomen.",
      stayNeighborhoodSlug: "hafencity-speicherstadt",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "The Speicherstadt, HafenCity and the Elbphilharmonie",
          morning: [
            {
              poiSlug: "speicherstadt",
              text: "Walk the Speicherstadt canals first thing, before the coach groups, following the bridges to the Wasserschloss and the Poggenmuhlenbrucke for the postcard angle. High tide fills the canals and makes the whole district photograph better.",
              durationMin: 60,
            },
            {
              poiSlug: "miniatur-wunderland",
              text: "Use your pre-booked slot at Miniatur Wunderland, two warehouse floors of model railway covering Hamburg, the Alps, Scandinavia and a working miniature airport. Three hours is the realistic minimum and walk-up entry is not a plan.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              text: "Lunch along the HafenCity waterfront terraces or from a harbour kiosk, then walk the Magellan and Marco Polo promenades to see how the new quarter was dropped into the old dock basins.",
              durationMin: 90,
            },
            {
              poiSlug: "elbphilharmonie-plaza",
              text: "Take the curved escalator up to the Elbphilharmonie plaza on your timed slot and walk the full loop at 37 metres, where the glass hall meets the old brick warehouse below. If your ticket is for later, come back for sunset instead.",
              durationMin: 60,
            },
            {
              poiSlug: "maritime-museum",
              text: "If the weather turns, cross to the International Maritime Museum in Kaispeicher B, the oldest warehouse in the Speicherstadt, and work down from the ninth floor rather than up. Entry is about 15 EUR and it rarely needs booking.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "speicherstadt",
              text: "Eat in HafenCity or walk back into the centre, then return through the Speicherstadt after dark when the brick facades are floodlit and the canals hold the reflections. This is the free version of the view everyone photographs.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "The Rathaus, the Kontorhausviertel and the lakes",
          morning: [
            {
              poiSlug: "hamburg-rathaus",
              text: "Start at the Rathaus, where the arcaded courtyard is free and the 45-minute English tour of the state rooms usually runs at 11.15am, 1.15pm and 3.15pm for about 5 EUR. Confirm at the desk, as sitting days cancel tours.",
              durationMin: 90,
            },
            {
              poiSlug: "chilehaus-kontorhausviertel",
              text: "Walk east into the Kontorhausviertel for the Chilehaus and the Sprinkenhof, the brick expressionist office blocks that share the UNESCO listing with the Speicherstadt. The ship's-prow corner is best seen from Pumpen and Niedernstrasse.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "hamburger-kunsthalle",
              text: "Head to the Hamburger Kunsthalle between the station and the Alster for Friedrich's Wanderer above the Sea of Fog and the modern wing. It closes on Mondays, opens until 9pm on Thursdays and is usually free from 6pm on the first Thursday of the month.",
              durationMin: 150,
            },
            {
              poiSlug: "alster-jungfernstieg",
              text: "Come out onto the Jungfernstieg promenade and either walk a stretch of the Outer Alster shore path, 7.5 kilometres for the full loop, or take the 50-minute Alster boat round trip from the jetty.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "st-michaelis-michel",
              text: "Go up the Michel tower late in the afternoon for the harbour and the Alster in one panorama, remembering the church normally closes at 6pm. The lift saves you 400 of the 452 steps.",
              durationMin: 75,
            },
            {
              poiSlug: "planten-un-blomen",
              text: "In the warmer half of the year, finish in Planten un Blomen for the free water and light concert on the lake, at 10pm from May to August and 9pm in September. Otherwise eat in the Sternschanze, a few minutes away on the S-Bahn.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "St Pauli, the Old Elbe Tunnel and Ottensen",
          morning: [
            {
              poiSlug: "fischmarkt",
              text: "If it is a Sunday, set an alarm for the Altona Fischmarkt, which opens at 5am from April to October and 7am from November to March and is packed away by 9.30am. Go for the market criers and the band in the old auction hall.",
              durationMin: 120,
            },
            {
              poiSlug: "alter-elbtunnel",
              text: "Walk east to Landungsbrucken and take the 1911 Old Elbe Tunnel, free and open around the clock, 426 metres and 24 metres down under the river. Come up on the Steinwerder side for the best head-on view of the skyline.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "landungsbrucken-ferry-62",
              text: "Back on the north bank, board ferry 62 at pier 3 on your HVV ticket and ride down the Elbe, getting off at Ovelgonne for the museum harbour and the small Elbe beach. It runs about every 15 minutes.",
              durationMin: 90,
            },
            {
              text: "Walk up into Ottensen for a late lunch, where the streets around the Spritzenplatz and the Ottenser Hauptstrasse hold the best value eating in the city, then browse the independent shops and the market hall.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "reeperbahn-st-pauli",
              text: "Come back east for the Reeperbahn, which does not really start until 10pm, including the Grosse Freiheit where the Beatles played in 1960. Herbertstrasse is closed to women and under-18s, and photography near the working streets is not tolerated.",
              durationMin: 180,
            },
            {
              text: "If tomorrow is an early flight, remember the S1 from the Hauptbahnhof reaches the airport in about 25 minutes on a normal AB ticket, and that heading out the train splits at Ohlsdorf, so ride in the front carriages.",
              durationMin: 30,
            },
          ],
        },
      ],
    },
    {
      citySlug: "hamburg",
      days: 4,
      summary:
        "Four days lets Hamburg breathe. You get the harbour and the Speicherstadt, the old centre, the Alster and the Kontorhausviertel, a full day in St Pauli and Ottensen, and a fourth day for the museums, the parks and whatever the weather ruined earlier, which in this city is a real consideration. Base yourself in St Pauli for this length: it is cheaper than the centre, downhill to the harbour ferries and the Fischmarkt, and the nightlife is on the doorstep rather than a taxi away. Book Miniatur Wunderland and the free Elbphilharmonie plaza slot before you travel, and buy an HVV multi-day ticket, which covers the U-Bahn, the S-Bahn and the harbour ferries alike. Aim to include a Sunday for the Altona Fischmarkt, which opens at 5am in summer, 7am in winter, and shuts at 9.30am. Day one is the warehouse district, day two the centre and the lakes, day three the tunnel, the ferry and Ottensen, day four the museums, Planten un Blomen and a last climb up the Michel.",
      stayNeighborhoodSlug: "st-pauli",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "The Speicherstadt, Miniatur Wunderland and the Elbphilharmonie",
          morning: [
            {
              poiSlug: "speicherstadt",
              text: "Walk in from St Pauli or take the U3 round to Baumwall and start with the Speicherstadt canals, crossing to the Wasserschloss and the Poggenmuhlenbrucke. High tide is when the district photographs best.",
              durationMin: 75,
            },
            {
              poiSlug: "miniatur-wunderland",
              text: "Take your booked slot at Miniatur Wunderland for two floors of the world's largest model railway, including a working miniature airport with aircraft that take off. Three hours minimum, and walk-up waits run past two hours in the holidays.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              text: "Lunch on the HafenCity waterfront, then walk the Magellan and Marco Polo terraces and the promenade out toward the Baakenhafen to see the scale of the new quarter built on the old docks.",
              durationMin: 90,
            },
            {
              poiSlug: "elbphilharmonie-plaza",
              text: "Ride the long curved escalator to the Elbphilharmonie plaza on your timed ticket and circle the whole deck at 37 metres above the water. Free same-day slots exist at the counter but rarely survive to the afternoon in summer.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "speicherstadt",
              text: "Return through the Speicherstadt after dark, when the brick facades are floodlit and the canals hold the reflection, then eat back in the centre or in St Pauli. The night walk is free and takes about half an hour.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "The Rathaus, the Kontorhausviertel and the Alster",
          morning: [
            {
              poiSlug: "hamburg-rathaus",
              text: "Start at the Rathaus with the free courtyard and the 45-minute English guided tour of the state rooms, roughly 5 EUR, usually at 11.15am, 1.15pm and 3.15pm. Tours are cancelled when the parliament is sitting, so ask at the desk.",
              durationMin: 90,
            },
            {
              poiSlug: "chilehaus-kontorhausviertel",
              text: "Walk into the Kontorhausviertel for the Chilehaus, built in 1924 from about 4.8 million bricks, and the Sprinkenhof next door. The courtyards and passages are free and open on weekdays.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "alster-jungfernstieg",
              text: "Cross to the Jungfernstieg and walk the Outer Alster shore path, about 7.5 kilometres for the full circuit and roughly two hours at a steady pace, past the rowing clubs and the villas. Cut it short at Krugkoppelbrucke if you have had enough.",
              durationMin: 150,
            },
            {
              text: "Stop at one of the lakeside kiosks or the Alsterpavillon on the Jungfernstieg for coffee, or swap the walk for the 50-minute boat round trip if the wind is up, which it often is.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "planten-un-blomen",
              text: "Walk over to Planten un Blomen for the Japanese garden and, from May to September, the free water and light concert on the lake at 10pm, or 9pm once September starts. Twenty minutes early gets you a seat on the terraces.",
              durationMin: 90,
            },
            {
              text: "Eat afterwards in the Sternschanze, a few minutes on foot or one stop on the S-Bahn, which has the best density of good-value restaurants in the city.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "The Old Elbe Tunnel, the harbour ferry and Ottensen",
          morning: [
            {
              poiSlug: "alter-elbtunnel",
              text: "Walk down to Landungsbrucken and take the 1911 Old Elbe Tunnel, 426 metres long and 24 metres below the river, free and open around the clock to anyone on foot. Surface on the Steinwerder side for the cleanest view of the skyline.",
              durationMin: 60,
            },
            {
              poiSlug: "landungsbrucken-ferry-62",
              text: "Back at pier 3, board harbour ferry 62 on your HVV ticket and ride down the Elbe past the Fischmarkt, Dockland and the container terminals. Sit outside on the upper deck and get off at Ovelgonne.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              text: "Walk the Elbe promenade from Ovelgonne through the museum harbour and, in warm weather, sit for a while on the small Elbe beach watching the container ships come up the river.",
              durationMin: 90,
            },
            {
              text: "Head up into Ottensen for a late lunch around the Ottenser Hauptstrasse and the Spritzenplatz, then browse the independent shops, the market hall and the old Altona town hall on the way back east.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "reeperbahn-st-pauli",
              text: "You are already based in St Pauli, so eat locally and then take the Reeperbahn properly after 10pm, including the Grosse Freiheit where the Beatles played their 1960 residencies. Keep the phone pocketed near the working streets.",
              durationMin: 180,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Fischmarkt, museums and a last view",
          morning: [
            {
              poiSlug: "fischmarkt",
              text: "If this day falls on a Sunday, walk west along the Elbe for the Altona Fischmarkt, running since 1703, open from 5am April to October and 7am November to March and finished by 9.30am. The band in the brick auction hall is the point of it.",
              durationMin: 120,
            },
            {
              poiSlug: "maritime-museum",
              text: "Otherwise start at the International Maritime Museum in Kaispeicher B, nine floors of ship models and navigation history in the oldest warehouse of the Speicherstadt. Take the lift to the top and work downward.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "hamburger-kunsthalle",
              text: "Spend the afternoon at the Hamburger Kunsthalle, from the medieval altarpieces to Friedrich and the post-war wing. It closes on Mondays, runs to 9pm on Thursdays and is usually free after 6pm on the first Thursday of the month.",
              durationMin: 150,
            },
            {
              text: "Fill any gap with the shops under the arcades between the Rathausmarkt and the Alster, which also make a dry route across the centre when the rain sets in.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "st-michaelis-michel",
              text: "Finish with the Michel, taking the lift up the 132-metre tower for a last look over the harbour, the Elbe and the lakes before it closes around 6pm. The combined tower and crypt ticket is about 10 EUR.",
              durationMin: 75,
            },
            {
              text: "Last dinner back in St Pauli or Ottensen, and if you fly out early, note the S1 reaches the airport from the Hauptbahnhof in about 25 minutes on a standard AB ticket, with the train splitting at Ohlsdorf, so board the front carriages.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
  ],
};

export default hamburg;
