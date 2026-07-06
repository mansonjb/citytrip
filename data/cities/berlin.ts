import type { CityData } from "../types";

const berlin: CityData = {
  city: {
    slug: "berlin",
    name: "Berlin",
    country: "Germany",
    countrySlug: "germany",
    lat: 52.52,
    lng: 13.405,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "BER",
    airportToCenter:
      "From BER Brandenburg, the FEX Airport Express runs to Hauptbahnhof in about 30 min, or the S9 and S45 S-Bahn lines reach the center in 40-45 min. Any of them needs an ABC-zone ticket at about 4.70 EUR since the airport sits in the outer C zone. A taxi to Mitte runs roughly 45-60 EUR and 40 min without traffic.",
    centerWalkable: false,
    bestMonths: [5, 6, 7, 9],
    avoidMonths: [1],
    monthlyNotes: {
      1: "The coldest, greyest month at highs near 3C, often below freezing at night, with short days and thin daylight. Crowds are minimal and hotels cheapest, but the Christmas markets have closed by early January and there is little seasonal draw beyond the post-New-Year quiet.",
      2: "Still cold at 4-5C and often damp, though the Berlinale international film festival in mid-February brings ten days of premieres, red carpets, and public screenings across the city. Book ahead if you come for the festival, otherwise it is a quiet, low-cost stretch to see museums without queues.",
      3: "Highs climb toward 9C as winter loosens its grip, with lengthening days but changeable, blustery weather. Crowds stay light and prices low, making it a decent value month if you pack for cold and rain and focus on indoor sights.",
      4: "Spring arrives unevenly around 13C, with cherry blossom along stretches of the former Wall and the first warm afternoons pulling people into the parks. Easter can lift hotel prices for a few days, but crowds are still moderate and the light is improving fast.",
      5: "One of the best months at 19-20C, with long evenings, green parks, and the beer gardens reopening in force. Karneval der Kulturen fills Kreuzberg with a street parade and food stalls over the Pentecost weekend, so expect a lively, crowded few days around then.",
      6: "Warm and lively at 22-23C with the longest days of the year and lake-swimming season underway at the Wannsee and Müggelsee. Crowds build and rooftop bars and beer gardens hit their stride, but hotel prices are still below peak-summer highs.",
      7: "Peak summer at 24-25C, warm and busy, with open-air cinema, lakeside beaches, and outdoor clubbing at its height. This is the top month for the city's warm-weather life, so book accommodation early and expect the popular beer gardens to be packed on sunny evenings.",
      8: "Still warm at 24C but occasionally muggy with summer thunderstorms, and many Berliners take their own holidays so the city feels a touch quieter than July. It stays a strong month for lakes, parks, and long light evenings, with festivals running through the summer calendar.",
      9: "Warm early then easing to around 19C, arguably the finest all-round month: mild days, thinning summer crowds, and beer-garden weather that holds into the first half. The autumn cultural season restarts, giving you both the outdoor life and the reopening galleries and concert halls.",
      10: "Cooler at 13-14C with the first real autumn chill and shorter days, though the Festival of Lights early in the month projects illuminations onto major landmarks after dark for about two weeks. Crowds thin and prices soften, making it a good-value shoulder pick if you dress warm.",
      11: "Grey, cold, and often wet at highs near 7C, the low point of the year for weather and daylight. The saving grace comes at the very end when the Christmas markets open in the last days of the month, so a late-November trip can catch both low prices and the first glühwein.",
      12: "Cold near 4C and dark by mid-afternoon, but the Christmas markets run city-wide from late November to just before Christmas, with the standout on Gendarmenmarkt (small entry fee) and others at Alexanderplatz and Charlottenburg Palace. New Year's Eve stages a huge free party with fireworks at the Brandenburg Gate, so expect crowds and higher rates over that stretch.",
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
    tagline: "Wall history, world museums, and the best nightlife in Europe.",
    heroIntro:
      "Berlin is big, flat, and spread out, so this is a U-Bahn and S-Bahn city, not a walk-everywhere one, and you plan by neighborhood. Three days is the honest minimum to split the historic Mitte core, the Wall and Cold War story, and one modern district without a forced march. Come in late spring or early autumn, book your free Reichstag dome slot before you fly, and buy an ABC day ticket the moment you land.",
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
      vibe: "The historic and geographic center, where the Brandenburg Gate, Museum Island, the Reichstag, and Unter den Linden all line up within a short walk or one tram stop. It is the postcard Berlin and the logical base for a first, short trip built around the big sights. Polished and central, it trades the raw local edge of the eastern districts for pure convenience.",
      pros: [
        "Walk or take one short ride to the Brandenburg Gate, Reichstag, and Museum Island",
        "Superb transit hub with U-Bahn, S-Bahn, and trams meeting at multiple stations",
        "Everything a first-timer wants to see clusters here, saving cross-city trips",
      ],
      cons: [
        "The priciest area for hotels and the busiest with tour groups by day",
        "Parts near the sights feel corporate and quiet after office hours",
        "Less of the lived-in local scene you find in Kreuzberg or Neukölln",
      ],
    },
    {
      slug: "kreuzberg",
      citySlug: "berlin",
      name: "Kreuzberg",
      lat: 52.4986,
      lng: 13.4033,
      bestFor: ["nightlife", "local", "budget"],
      vibe: "The heart of alternative, multicultural Berlin, packed with Turkish markets, canal-side bars, street art, and some of the city's best cheap eats and late nights. The stretch around Kottbusser Tor and the Landwehrkanal is scruffy, energetic, and unpolished in the way people come to Berlin for. Loud and gritty, it rewards travelers who want the real thing over the tidy version.",
      pros: [
        "The city's densest concentration of bars, street food, and nightlife",
        "Genuinely multicultural, with the Turkish market and canal walks",
        "Good-value eating and drinking, from döner to natural-wine bars",
      ],
      cons: [
        "Gritty and noisy, with rough edges around Kottbusser Tor at night",
        "A U-Bahn ride from the Mitte sights rather than walking distance",
        "Weekend nights get rowdy, a poor pick for light sleepers",
      ],
    },
    {
      slug: "prenzlauer-berg",
      citySlug: "berlin",
      name: "Prenzlauer Berg",
      lat: 52.5403,
      lng: 13.4241,
      bestFor: ["family", "romantic", "local"],
      vibe: "A handsome former East district of restored 19th-century tenements, leafy squares, and Sunday brunch culture, now the city's most gentrified and family-friendly quarter. The area around Kollwitzplatz and Kastanienallee has boutiques, cafes, and the Mauerpark flea market on its doorstep. Calm and pretty, it is the easy, comfortable Berlin rather than the edgy one.",
      pros: [
        "Beautiful, safe streets with cafes, brunch spots, and independent shops",
        "The Mauerpark Sunday flea market and karaoke are a short walk away",
        "Excellent for families and couples wanting a quieter, greener base",
      ],
      cons: [
        "Little nightlife of its own, the scene is calm and residential",
        "A few U-Bahn or tram stops from the central Mitte sights",
        "Gentrified and pricier than the grittier eastern districts",
      ],
    },
    {
      slug: "friedrichshain",
      citySlug: "berlin",
      name: "Friedrichshain",
      lat: 52.5155,
      lng: 13.4542,
      bestFor: ["nightlife", "budget", "local"],
      vibe: "The clubbing heartland of former East Berlin, home to the East Side Gallery, the techno temples around the Spree, and the young, cheap bar strip along Simon-Dach-Straße. Grand socialist-era Karl-Marx-Allee runs through it, all monumental boulevards and Plattenbau. Rough, young, and up all night, it is where Berlin's legendary nightlife actually happens.",
      pros: [
        "The East Side Gallery and the biggest clubs sit right here",
        "Cheap eating and drinking around a young, student-heavy crowd",
        "Direct S-Bahn and U-Bahn links across the river to the center",
      ],
      cons: [
        "Loud and messy at weekends, built around all-night clubbing",
        "Less charm by daylight than the western or northern districts",
        "A ride from the Mitte sights, though the transit links are good",
      ],
    },
    {
      slug: "charlottenburg",
      citySlug: "berlin",
      name: "Charlottenburg",
      lat: 52.5058,
      lng: 13.3042,
      bestFor: ["family", "romantic", "first-time"],
      vibe: "The elegant heart of former West Berlin, built around the Kurfürstendamm shopping boulevard, the baroque Charlottenburg Palace, and grand old apartment blocks. It feels calmer and more established than the eastern districts, with department stores, classic cafes, and the zoo nearby. Refined and residential, it suits travelers who prefer comfort and space to grit.",
      pros: [
        "Charlottenburg Palace, the Ku'damm shopping, and the zoo all here",
        "Quiet, safe, and green, a comfortable base for families and couples",
        "Well connected west-side transit, direct to Zoo and Hauptbahnhof",
      ],
      cons: [
        "The furthest of the five from the Wall and East Berlin sights",
        "Quieter nightlife and a more polished, less alternative feel",
        "The classic-shopping vibe can feel staid next to the eastern scene",
      ],
    },
  ],

  pois: [
    {
      slug: "brandenburg-gate",
      citySlug: "berlin",
      name: "Brandenburg Gate",
      lat: 52.5163,
      lng: 13.3777,
      kind: "sight",
      needsBooking: false,
      tip: "The gate is free, open, and never closes, so come at sunrise or after dark for the floodlit columns without the daytime tour-group crush on Pariser Platz. It stood in the no-man's-land of the divided city, and the square today puts you steps from the Reichstag and the Holocaust Memorial, so chain all three in one loop. Skip the costumed characters offering photos, they expect payment.",
    },
    {
      slug: "reichstag",
      citySlug: "berlin",
      name: "Reichstag and glass dome",
      lat: 52.5186,
      lng: 13.3762,
      kind: "sight",
      needsBooking: true,
      tip: "The glass dome is free but you must register online for a timed slot days ahead, there is no walk-up entry and slots go fast in season. Bring the photo ID that matches your booking, security is airport-grade. Aim for a dusk slot to catch the city in daylight and then lit up as you spiral the ramp, and pick up the free audio guide that syncs to the view.",
    },
    {
      slug: "east-side-gallery",
      citySlug: "berlin",
      name: "East Side Gallery",
      lat: 52.5051,
      lng: 13.4394,
      kind: "sight",
      needsBooking: false,
      tip: "This 1.3 km stretch of the surviving Berlin Wall, painted with murals including the Brezhnev-Honecker kiss, is free and open air 24 hours along the Spree in Friedrichshain. Come early morning to photograph the famous panels before the crowds and before people stand in front of every one. Walk it from the Ostbahnhof end toward the Oberbaumbrücke, then cross the bridge into Kreuzberg for lunch.",
    },
    {
      slug: "museum-island",
      citySlug: "berlin",
      name: "Museum Island",
      lat: 52.5169,
      lng: 13.4017,
      kind: "museum",
      needsBooking: true,
      tip: "Buy the combined Bereichskarte ticket that covers all the island's museums for one price and book a timed entry online, since the Neues Museum and its Nefertiti bust need a slot. Be honest with your plan: the Pergamon, the headline building, is closed for a major renovation until around 2027, so do not come expecting the great altar hall. Pick one or two of the open houses, a full day for all of them is museum overload.",
    },
    {
      slug: "holocaust-memorial",
      citySlug: "berlin",
      name: "Memorial to the Murdered Jews of Europe",
      lat: 52.5139,
      lng: 13.3789,
      kind: "sight",
      needsBooking: false,
      tip: "The field of 2,711 concrete stelae is free, open, and always accessible, a short walk south of the Brandenburg Gate. Walk into the middle where the ground dips and the blocks rise over your head to feel the disorientation the design intends, and keep it respectful, this is a memorial, not a playground. The free underground Information Centre beneath it closes some days and has its own security line, so check before you go.",
    },
    {
      slug: "checkpoint-charlie",
      citySlug: "berlin",
      name: "Checkpoint Charlie",
      lat: 52.5075,
      lng: 13.3904,
      kind: "sight",
      needsBooking: false,
      tip: "The reconstructed guard hut and famous sign are free but pure tourist theater now, with paid actors in uniform you should not tip for photos, so treat it as a five-minute stop. The real substance is the free open-air panels along the street and the nearby (paid) Mauermuseum if you want the escape-story detail. Pair it with the Topography of Terror a short walk west for a much stronger Cold War morning.",
    },
    {
      slug: "fernsehturm",
      citySlug: "berlin",
      name: "Fernsehturm TV Tower",
      lat: 52.5208,
      lng: 13.4094,
      kind: "viewpoint",
      needsBooking: true,
      tip: "At 368 m this is the tallest structure in Germany and the view over the whole flat city is the best in Berlin, but book a timed ticket online to skip a queue that can top an hour at Alexanderplatz. A fast-track slot costs more but saves the wait on a busy day. Go up near sunset for the city by day and lights, and the revolving restaurant one floor up needs its own reservation.",
    },
    {
      slug: "berlin-cathedral",
      citySlug: "berlin",
      name: "Berlin Cathedral",
      lat: 52.5191,
      lng: 13.4009,
      kind: "sight",
      needsBooking: false,
      tip: "The grand Protestant cathedral on Museum Island charges about 10 EUR entry, which includes the climb up 270 steps to the outdoor dome walkway for a close view over the island and the Spree. Go for the dome balcony more than the interior, the panorama across the rooftops is the real draw. It closes to visitors during services, so check the schedule if you come on a Sunday.",
    },
    {
      slug: "topography-of-terror",
      citySlug: "berlin",
      name: "Topography of Terror",
      lat: 52.5075,
      lng: 13.3833,
      kind: "museum",
      needsBooking: false,
      tip: "Built on the site of the former Gestapo and SS headquarters, this documentation center is free and one of the most sobering, best-explained accounts of the Nazi terror apparatus in the city. Allow at least 90 minutes for the dense indoor exhibition, and read the outdoor panels that run along a surviving stretch of the Wall out front. It sits a short walk from Checkpoint Charlie, so do the two together.",
    },
    {
      slug: "tiergarten",
      citySlug: "berlin",
      name: "Tiergarten park",
      lat: 52.5145,
      lng: 13.3501,
      kind: "park",
      needsBooking: false,
      tip: "Berlin's huge central park is free and stretches from the Brandenburg Gate to the Zoo, ideal for a walk or a rented bike between the Mitte sights and Charlottenburg. Climb the Victory Column (small fee) in the middle for a view down the tree-lined avenues, or find the beer garden at Café am Neuen See on the southern edge in warm months. On a summer Sunday you will see locals grilling on every patch of grass.",
    },
    {
      slug: "mauerpark",
      citySlug: "berlin",
      name: "Mauerpark flea market and karaoke",
      lat: 52.5439,
      lng: 13.4025,
      kind: "experience",
      needsBooking: false,
      tip: "On Sundays this former death-strip park hosts a sprawling flea market plus the legendary open-air Bearpit Karaoke in the stone amphitheater from early afternoon, both free. Come from late morning to browse the stalls, eat from the food trucks, then grab a beer and watch strangers belt out songs to a crowd of hundreds. It runs year-round but is at its best on a warm day, so time it for good weather.",
    },
    {
      slug: "gendarmenmarkt",
      citySlug: "berlin",
      name: "Gendarmenmarkt",
      lat: 52.5138,
      lng: 13.3925,
      kind: "sight",
      needsBooking: false,
      tip: "Often called the city's finest square, this symmetrical space framed by the German and French cathedrals and the Konzerthaus is free to stand in and photograph, best in the low light of early morning or evening. In December it hosts one of Berlin's best Christmas markets, which charges a small entry fee to keep the crowds manageable. It is a two-minute walk from the Französische Straße U-Bahn and close to Gendarmenmarkt's upscale cafes.",
    },
    {
      slug: "tempelhofer-feld",
      citySlug: "berlin",
      name: "Tempelhofer Feld",
      lat: 52.4732,
      lng: 13.4017,
      kind: "park",
      needsBooking: false,
      tip: "This decommissioned airport is now a vast free public park where you can walk, cycle, or skate straight down the old runways, a genuinely Berlin experience with no equivalent elsewhere. Rent a bike and ride the full length of a former runway, or bring a picnic and watch the kite-surfers on windy days. It closes at dusk with gates that lock, so check the seasonal closing time posted at the entrances before you settle in.",
    },
    {
      slug: "ddr-museum",
      citySlug: "berlin",
      name: "DDR Museum",
      lat: 52.5192,
      lng: 13.4029,
      kind: "museum",
      needsBooking: false,
      tip: "This hands-on museum of daily life in communist East Germany, on the Spree opposite the cathedral, is engaging and interactive, with a sit-in Trabant and a recreated GDR apartment. It gets cramped and slow by midday because everything is meant to be touched and opened, so arrive right at 9am opening or in the last hour. Buy the ticket online to skip the small ticket queue on the riverbank.",
    },
  ],

  itineraries: [
    {
      citySlug: "berlin",
      days: 2,
      summary:
        "Two days covers Berlin's essentials, but the city is huge and spread out, so 48 hours is a rush and you will move fast between districts. In two days you can do the historic Mitte core on day one, the Brandenburg Gate, Reichstag dome, Holocaust Memorial, Museum Island, and Gendarmenmarkt, then give day two to the Wall and Cold War story, Checkpoint Charlie, Topography of Terror, and the East Side Gallery, ending with a Kreuzberg dinner. What you must cut: Charlottenburg, Prenzlauer Berg, Tempelhofer Feld, the lakes, and any slow neighborhood time, so this is a highlights tour, not a Berlin you get to know. It suits a weekend break or a first taste before combining with Prague. The non-negotiables: register online for your free Reichstag dome slot before you fly, and buy an ABC day ticket the moment you land, controls are frequent and fines steep. Base in Mitte so both mornings start near the sights. A third day is the single best upgrade, and Berlin really wants it.",
      stayNeighborhoodSlug: "mitte",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Historic Mitte: gate, dome, museums",
          morning: [
            {
              poiSlug: "brandenburg-gate",
              text: "Start at the Brandenburg Gate early, before the tour groups fill Pariser Platz, for photos of the columns in morning light. It is free and open, and everything on the morning sits within a short walk from here.",
              durationMin: 30,
            },
            {
              poiSlug: "reichstag",
              text: "Walk two minutes to the Reichstag for your pre-booked, free dome slot, bringing the ID that matches your booking for the airport-grade security. Spiral up the glass ramp with the free audio guide for the view over the government quarter and the city.",
              durationMin: 75,
            },
            {
              poiSlug: "holocaust-memorial",
              text: "Cut south to the Memorial to the Murdered Jews of Europe, the free field of concrete stelae a short walk from the gate. Walk into the dipping center where the blocks rise overhead, and visit the underground Information Centre if it is open.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              text: "Lunch on or near Unter den Linden, then stroll the grand boulevard east toward the island, passing the state opera and Bebelplatz. Keep it quick, the afternoon is heavy on museums.",
              durationMin: 75,
            },
            {
              poiSlug: "museum-island",
              text: "Spend the afternoon on Museum Island with a combined Bereichskarte, picking one or two houses since the Pergamon is closed for renovation until around 2027. The Neues Museum and its Nefertiti bust or the Alte Nationalgalerie are the strongest single choices.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "gendarmenmarkt",
              text: "Walk to Gendarmenmarkt in the evening light for the symmetrical square framed by its two cathedrals and the Konzerthaus. Photograph it, then find dinner in the streets nearby.",
              durationMin: 45,
            },
            {
              text: "Have dinner in central Mitte, booking ahead for anywhere with a name, and cap the night with a drink around the Hackescher Markt courtyards a short walk north. It is your one late night close to the sights.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "The Wall and Cold War Berlin",
          morning: [
            {
              poiSlug: "topography-of-terror",
              text: "Start at the Topography of Terror on the site of the former Gestapo headquarters, free and open, allowing 90 minutes for the dense exhibition. Read the outdoor panels along the surviving stretch of Wall before you leave.",
              durationMin: 90,
            },
            {
              poiSlug: "checkpoint-charlie",
              text: "Walk a few minutes to Checkpoint Charlie, treating the reconstructed hut and sign as a quick photo stop rather than a highlight. Skip the paid costume actors, and read the free open-air panels on the street for the real history.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              text: "Take the U-Bahn or S-Bahn east and grab lunch in Friedrichshain before the Wall walk. This is a good moment to validate a fresh part of your day ticket, controls run often on these lines.",
              durationMin: 75,
            },
            {
              poiSlug: "east-side-gallery",
              text: "Walk the East Side Gallery, the free 1.3 km painted stretch of Wall along the Spree, from the Ostbahnhof end toward the Oberbaumbrücke. Photograph the famous murals, then cross the bridge into Kreuzberg.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Spend the evening in Kreuzberg around Kottbusser Tor and the Landwehrkanal, eating cheap and well, from döner to a canal-side bar. This is the alternative Berlin the Mitte sights do not show you.",
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
        "Yes, three days is the right length for Berlin, and it is what we recommend for a first visit to a city this spread out. It splits cleanly into three: the historic Mitte core, the Brandenburg Gate, Reichstag dome, Holocaust Memorial, Museum Island, and Gendarmenmarkt on day one; the Wall and Cold War story, Checkpoint Charlie, Topography of Terror, and the East Side Gallery on day two; and a third day for the lived-in modern city, Prenzlauer Berg, the Mauerpark Sunday market, and the wide-open Tempelhofer Feld. You get the landmarks, the history, and one real neighborhood day rather than a pure sightseeing sprint. What still gets cut: Charlottenburg, the western side, and the lakes, which is exactly what a fourth day adds. This suits first-timers, couples, and anyone routing on to Prague next. Stay in Prenzlauer Berg: it is calm, pretty, and puts you on the doorstep of Mauerpark with easy tram and U-Bahn hops to Mitte. Register your free Reichstag dome slot and buy an ABC day ticket, controls are frequent.",
      stayNeighborhoodSlug: "prenzlauer-berg",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Historic Mitte: gate, dome, museums",
          morning: [
            {
              poiSlug: "brandenburg-gate",
              text: "Start at the Brandenburg Gate early for the columns before Pariser Platz fills with tour groups. It is free and open, and it anchors a morning loop of the three headline Mitte sights.",
              durationMin: 30,
            },
            {
              poiSlug: "reichstag",
              text: "Walk to the Reichstag for your pre-booked, free dome slot, with the ID that matches your booking for security. Spiral the glass ramp with the free audio guide for the view over the city and government quarter.",
              durationMin: 75,
            },
            {
              poiSlug: "holocaust-memorial",
              text: "Head south to the free Memorial to the Murdered Jews of Europe, a short walk from the gate. Walk into the center where the ground dips and the stelae rise overhead, then see the underground Information Centre if open.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              text: "Lunch near Unter den Linden, then walk the boulevard east toward Museum Island, past Bebelplatz and the state opera. A relaxed stroll, not a march, since the museums come next.",
              durationMin: 90,
            },
            {
              poiSlug: "museum-island",
              text: "Give the afternoon to Museum Island with a combined Bereichskarte, choosing one or two houses since the Pergamon is closed for works until around 2027. The Neues Museum with Nefertiti or the Alte Nationalgalerie are the best single picks.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "berlin-cathedral",
              text: "If you have energy, climb the 270 steps of the Berlin Cathedral on the island for the dome-balcony view over the Spree at the end of the afternoon. Otherwise photograph its facade from the Lustgarten and move on.",
              durationMin: 45,
            },
            {
              poiSlug: "gendarmenmarkt",
              text: "Walk to Gendarmenmarkt for the finest square in the city framed by its two cathedrals, best in evening light. Find dinner in the surrounding streets, booking ahead for anywhere well reviewed.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "The Wall and Cold War Berlin",
          morning: [
            {
              poiSlug: "topography-of-terror",
              text: "Start at the free Topography of Terror on the former Gestapo site, allowing 90 minutes for the dense, well-explained exhibition. Read the outdoor panels along the surviving Wall out front before you move on.",
              durationMin: 90,
            },
            {
              poiSlug: "checkpoint-charlie",
              text: "Walk to Checkpoint Charlie nearby, a quick photo stop at the reconstructed crossing rather than a highlight. Ignore the paid costume actors and read the free street panels for the substance.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "fernsehturm",
              text: "Take the U-Bahn to Alexanderplatz and go up the Fernsehturm on a pre-booked timed slot for the best view over the flat city, ideally near sunset. Grab a quick lunch on the square first, or afterward if your slot is early.",
              durationMin: 90,
            },
            {
              poiSlug: "east-side-gallery",
              text: "Ride east to the East Side Gallery and walk the free 1.3 km painted stretch of Wall along the Spree, from Ostbahnhof toward the Oberbaumbrücke. Photograph the famous murals, then cross the bridge into Kreuzberg.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Spend the evening in Friedrichshain or Kreuzberg on either side of the river, eating cheap and well and drinking where the young crowd does. This is the nightlife side of Berlin, so pace yourself if tomorrow starts early.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Modern Berlin: Prenzlauer Berg, Mauerpark, Tempelhof",
          morning: [
            {
              text: "Start slow with a long Prenzlauer Berg brunch around Kollwitzplatz or Kastanienallee, the local Sunday ritual. Wander the restored tenement streets and independent shops on the way.",
              durationMin: 90,
            },
            {
              poiSlug: "mauerpark",
              text: "Walk to Mauerpark for the sprawling Sunday flea market and, from early afternoon, the free open-air Bearpit Karaoke in the stone amphitheater. Browse the stalls, eat from a food truck, then grab a beer and watch the karaoke crowd.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "ddr-museum",
              text: "Head back toward the center for the hands-on DDR Museum on the Spree, on daily life in communist East Germany, buying online to skip the queue. Go for the sit-in Trabant and the recreated GDR flat, and keep it under an hour if the crowds build.",
              durationMin: 75,
            },
            {
              poiSlug: "tempelhofer-feld",
              text: "Take the U-Bahn south to Tempelhofer Feld, the free former airport, and rent a bike to ride the full length of a runway. Bring a snack and watch the kite-surfers, but note the gates lock at the posted dusk closing time.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              text: "Return to Prenzlauer Berg for a relaxed final dinner near your base, booking a table on Kollwitzplatz or a side street. End with a quiet drink close to your bed, no cross-city journey to plan.",
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
        "Four days is the sweet spot for a first visit to Berlin, turning a spread-out sprint into an actual holiday. Days one to three cover the essentials: the historic Mitte core, the Wall and Cold War story, and the modern city of Prenzlauer Berg, Mauerpark, and Tempelhofer Feld, each done without rushing. Day four is the release valve, and it splits two ways: either the elegant western side around Charlottenburg Palace and the Ku'damm, or a half-day trip out to Potsdam's Sanssouci palaces or the sobering Sachsenhausen memorial, both an easy S-Bahn or regional ride from the center. This length suits travelers who hate the forced march, couples, and anyone whose flights bookend the trip awkwardly. For four days we recommend basing in Kreuzberg: you have accepted a slower pace, and its canal bars, street food, and late nights make coming home each evening the best part of the day. Beyond four days, add the lakes in summer or a full Potsdam day. Register your free Reichstag dome slot and buy an ABC day ticket the moment you arrive.",
      stayNeighborhoodSlug: "kreuzberg",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Historic Mitte: gate, dome, museums",
          morning: [
            {
              poiSlug: "brandenburg-gate",
              text: "Start at the Brandenburg Gate early for the columns before the crowds fill Pariser Platz. Free and open, it anchors the morning loop of the big Mitte landmarks.",
              durationMin: 30,
            },
            {
              poiSlug: "reichstag",
              text: "Walk to the Reichstag for your pre-booked, free dome slot, bringing the matching ID for security. Spiral the glass ramp with the free audio guide for the city and government-quarter view.",
              durationMin: 75,
            },
            {
              poiSlug: "holocaust-memorial",
              text: "Cut south to the free Memorial to the Murdered Jews of Europe, a short walk away. Walk into the dipping center where the stelae rise overhead, then see the underground Information Centre if open.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              text: "Lunch near Unter den Linden, then walk the boulevard east toward Museum Island past Bebelplatz. A relaxed stroll, since you have four days and no need to rush.",
              durationMin: 90,
            },
            {
              poiSlug: "museum-island",
              text: "Spend the afternoon on Museum Island with a combined Bereichskarte, picking one or two houses since the Pergamon is closed until around 2027. The Neues Museum with Nefertiti or the Alte Nationalgalerie are the strongest choices.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "gendarmenmarkt",
              text: "Walk to Gendarmenmarkt for the finest square in the city in evening light, framed by its two cathedrals. Find dinner in the surrounding Mitte streets, booking ahead for anywhere well reviewed.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "The Wall and Cold War Berlin",
          morning: [
            {
              poiSlug: "topography-of-terror",
              text: "Start at the free Topography of Terror on the former Gestapo site, allowing 90 minutes for the exhibition. Read the outdoor panels along the surviving Wall before leaving.",
              durationMin: 90,
            },
            {
              poiSlug: "checkpoint-charlie",
              text: "Walk to Checkpoint Charlie, a quick photo stop at the reconstructed crossing. Skip the paid costume actors and read the free street panels for the real story.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "fernsehturm",
              text: "Take the U-Bahn to Alexanderplatz and ride up the Fernsehturm on a pre-booked slot for the best view over the flat city. Lunch on the square around your slot.",
              durationMin: 90,
            },
            {
              poiSlug: "east-side-gallery",
              text: "Ride to the East Side Gallery and walk the free 1.3 km painted stretch of Wall along the Spree, from Ostbahnhof toward the Oberbaumbrücke. Cross the bridge into Kreuzberg where you are staying.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Spend the evening at home in Kreuzberg around Kottbusser Tor and the canal, eating cheap and well and drinking where the locals do. You are based here, so no journey back to plan.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Modern Berlin: Prenzlauer Berg, Mauerpark, Tempelhof",
          morning: [
            {
              text: "Ride up to Prenzlauer Berg for a long brunch around Kollwitzplatz, the local weekend ritual, and wander the restored tenement streets. A slow start to a neighborhood day.",
              durationMin: 90,
            },
            {
              poiSlug: "mauerpark",
              text: "Walk to Mauerpark for the Sunday flea market and, from early afternoon, the free open-air Bearpit Karaoke in the stone amphitheater. Browse the stalls, eat from a food truck, then watch the karaoke with a beer.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "tempelhofer-feld",
              text: "Take the U-Bahn south to Tempelhofer Feld, the free former airport, and rent a bike to ride the full length of a runway. Bring a picnic, watch the kite-surfers, and note the gates lock at the posted dusk time.",
              durationMin: 120,
            },
            {
              poiSlug: "ddr-museum",
              text: "If time allows on the way back, drop into the hands-on DDR Museum on the Spree for the sit-in Trabant and the recreated GDR flat, buying online to skip the queue. Keep it short, an hour is plenty.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Head back to Kreuzberg for dinner and drinks, trying a natural-wine bar or a spot along the Landwehrkanal. This is the district's element, so linger.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "West Berlin or a Potsdam day trip",
          morning: [
            {
              text: "Choose your day-four direction. For the western side, ride the U-Bahn to Charlottenburg Palace, the baroque former royal residence with formal gardens, and allow a couple of hours for the state rooms and grounds. For a day trip instead, take the regional train out to Potsdam and Sanssouci Park for the rococo palaces and terraced vineyards.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              text: "If you stayed in the west, stroll the Kurfürstendamm shopping boulevard and see the ruined tower of the Kaiser Wilhelm Memorial Church, then take coffee at a classic Charlottenburg cafe. If you went to Potsdam, walk the Dutch Quarter and the old town before the ride back. As a heavier alternative, spend the day at the Sachsenhausen concentration camp memorial north of the city, a sobering S-Bahn and bus trip that needs a full afternoon.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              poiSlug: "tiergarten",
              text: "Back in the center, walk part of the Tiergarten in the golden hour, or find its Café am Neuen See beer garden on the southern edge in warm months. A green, easy wind-down after the day out.",
              durationMin: 75,
            },
            {
              text: "Book a farewell dinner back in Kreuzberg, spending up on your last Berlin meal at a spot you scouted earlier. End with a nightcap along the canal, a short walk from your bed.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
  ],
};

export default berlin;
