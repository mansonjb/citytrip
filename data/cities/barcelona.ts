import type { CityData } from "../types";

const barcelona: CityData = {
  city: {
    slug: "barcelona",
    name: "Barcelona",
    country: "Spain",
    countrySlug: "spain",
    lat: 41.3874,
    lng: 2.1686,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "BCN",
    airportToCenter:
      "Aerobus from both terminals to Placa Catalunya, about 35 min, 7.25 EUR one way, running every 5-10 min. Cheaper options: the R2 Nord train from T2 to Passeig de Gracia or Sants for about 4.90 EUR (or free with a T-casual/Hola card), or metro line L9 Sud, which is scenic but slow with several changes to reach the center.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [8],
    monthlyNotes: {
      1: "Cool and bright at 14-15C with the year's lowest crowds and cheapest rooms, though the sea is too cold for the beach. The Three Kings parade (Cavalcada de Reis) on January 5 fills the streets with floats and sweets, and the January sales fill the shops.",
      2: "Still mild at 15C with short crowds and low prices, and often clear enough for a long lunch outdoors at midday. Carnival (Carnestoltes) livens up the week before Lent with costume parades in the barris, and Santa Eulalia around February 12 brings human towers and giants to the old town.",
      3: "Highs edge toward 17-18C and daylight lengthens, with tourists building only late in the month around Easter. Watch the calendar: if Holy Week lands in March, the center and hotels fill and prices climb, otherwise it stays a quiet, good-value month.",
      4: "One of the best months at 19-20C with warm afternoons and green hills, though Easter can crowd the center if it falls now. Sant Jordi on April 23 is the highlight, a books-and-roses day when La Rambla and Passeig de Gracia turn into open-air book stalls and couples exchange roses.",
      5: "Reliably warm at 22-23C with long evenings and little rain, arguably the finest month to visit. Primavera Sound usually lands late May or early June and books out hotels fast, so check the festival dates before you fix yours, and start the terrace-dinner season in earnest.",
      6: "Hot at 26-27C, sunny, and busy as the summer season kicks off and the beaches fill on weekends. Sant Joan on the night of June 23 is a wild fireworks-and-bonfire party on the beach that runs till dawn, so expect noise, enormous crowds by the water, and cava everywhere.",
      7: "Peak summer at 28-29C, humid, and crowded, with the beaches packed and the big Gaudi sights sold out days ahead. Do Sagrada Familia and Park Guell at opening, then retreat to the sea or a shaded terrace for the sticky early-afternoon hours.",
      8: "The hottest, most humid, and most crowded month at 29C, and the one to avoid: many family-run shops and restaurants shut for the holidays and locals leave for the coast. If August is unavoidable, book air conditioning, front-load sightseeing to early morning, and note the Festa Major de Gracia in mid-August, when Gracia's streets compete over elaborate decorations.",
      9: "Summer warmth without the worst of the heat: 27C early, easing through the month, with the sea still swimmable. La Merce, the city's biggest festival, runs around September 24 with human towers, fire-runs (correfocs), giants, and free concerts across the center, and it is the single best time to feel the city's own culture.",
      10: "Warm days around 23C with the first proper rain returning and superb low-angle light, and crowds thinning noticeably after the first week. This is a strong shoulder-season pick for both weather and hotel value, with the terraces still open at midday.",
      11: "Cooler at 18-19C with regular wet spells, but plenty of bright days between fronts and the quietest big sights of the autumn. Low-season pricing returns and you can walk into restaurants that need booking in May, though beach days are over.",
      12: "Mild for winter at 15-16C but wetter, with Christmas markets like the Fira de Santa Llucia by the cathedral and the odd Catalan caganer figure to hunt for. Quiet until the Christmas-to-New-Year stretch, when rates climb and the streets around the cathedral fill with lights and crowds.",
    },
    climate: {
      1: { highC: 14, lowC: 5, rainyDays: 5 },
      2: { highC: 15, lowC: 5, rainyDays: 5 },
      3: { highC: 17, lowC: 7, rainyDays: 5 },
      4: { highC: 19, lowC: 9, rainyDays: 6 },
      5: { highC: 22, lowC: 13, rainyDays: 6 },
      6: { highC: 26, lowC: 17, rainyDays: 4 },
      7: { highC: 29, lowC: 20, rainyDays: 2 },
      8: { highC: 29, lowC: 20, rainyDays: 4 },
      9: { highC: 27, lowC: 18, rainyDays: 5 },
      10: { highC: 23, lowC: 14, rainyDays: 7 },
      11: { highC: 18, lowC: 9, rainyDays: 6 },
      12: { highC: 15, lowC: 6, rainyDays: 6 },
    },
    budgetLevel: "mid",
    budgetPerDay: { budget: 70, mid: 150, high: 300 },
    tagline: "Gaudi, gothic lanes, and the beach in one walkable city.",
    heroIntro:
      "Barcelona pairs Gaudi's wild modernist landmarks with a medieval old town and a city beach, all in a compact center you can mostly cover on foot with the metro for the further sights. Three days is the honest sweet spot to split the Gaudi trail, the gothic core, and a slow afternoon by the sea without a forced march. Come in spring or early autumn, book Sagrada Familia and Park Guell weeks before you fly, and keep your bags zipped, because this is one of Europe's pickpocket capitals.",
    accent: { from: "#1B9AAA", to: "#E8632C", ink: "#0C4A52" },
    neighborhoodSlugs: [
      "barri-gotic",
      "el-born",
      "eixample",
      "gracia",
      "barceloneta",
    ],
    nearbyCitySlugs: ["seville", "granada"],
  },

  neighborhoods: [
    {
      slug: "barri-gotic",
      citySlug: "barcelona",
      name: "Barri Gotic",
      lat: 41.3833,
      lng: 2.1777,
      bestFor: ["first-time", "romantic", "budget"],
      vibe: "The medieval heart of the city, a maze of narrow stone lanes between the cathedral and La Rambla that opens onto hidden squares. Everything a first-timer wants to see sits within a ten-minute walk, and the lanes are atmospheric at night once the day crowds thin. It is central and cheap to sleep in, but it is also the busiest and most pickpocket-prone quarter.",
      pros: [
        "Walk to the cathedral, La Rambla, the port, and El Born without transit",
        "Dense with cheap tapas bars, cafes, and small hotels",
        "Atmospheric stone lanes that empty out and glow after dinner",
      ],
      cons: [
        "The most pickpocket-heavy area in the city, especially near La Rambla",
        "Noisy from foot traffic and bars until late, poor for light sleepers",
        "Some restaurants on the main squares coast on the location",
      ],
    },
    {
      slug: "el-born",
      citySlug: "barcelona",
      name: "El Born",
      lat: 41.3847,
      lng: 2.1817,
      bestFor: ["romantic", "nightlife", "local"],
      vibe: "The old town's most stylish quarter, just east of the gothic core, built around the church of Santa Maria del Mar and the Picasso Museum. Boutiques, wine bars, and cocktail spots line the medieval lanes, and it stays lively without feeling like a tourist trap. It gives you the atmosphere of the old town with a more grown-up, design-led edge.",
      pros: [
        "Best concentration of wine bars, cocktail spots, and tapas in the old town",
        "Walk to the Picasso Museum, Santa Maria del Mar, and Ciutadella park",
        "Cobbled lanes that stay lively but keep a local, boutique feel",
      ],
      cons: [
        "Bars around the main lanes get loud on weekend nights",
        "No metro directly inside it, though Jaume I and Barceloneta are close",
        "Hotels run pricier than the gothic quarter next door",
      ],
    },
    {
      slug: "eixample",
      citySlug: "barcelona",
      name: "Eixample",
      lat: 41.3915,
      lng: 2.1649,
      bestFor: ["first-time", "family", "romantic"],
      vibe: "The elegant grid laid out in the 19th century, with wide boulevards, chamfered corners, and the city's greatest concentration of modernist facades along Passeig de Gracia. It puts you a short walk from Casa Batllo, La Pedrera, and Sagrada Familia, on a well-connected metro grid. Calm, orderly, and central without the crush of the old town.",
      pros: [
        "Walk to Passeig de Gracia's Gaudi houses and close to Sagrada Familia",
        "Dense metro grid, direct to the airport train and everywhere else",
        "Wide, quiet-at-night streets and a good spread of mid-range hotels",
      ],
      cons: [
        "Feels more functional and less romantic than the old town lanes",
        "The stretch right on Passeig de Gracia is expensive to sleep on",
        "Some blocks are a long, grid-straight walk from the beach and port",
      ],
    },
    {
      slug: "gracia",
      citySlug: "barcelona",
      name: "Gracia",
      lat: 41.4022,
      lng: 2.1568,
      bestFor: ["local", "budget", "nightlife"],
      vibe: "A former village swallowed by the city, north of the Eixample, that keeps its own small-square-and-plaza feel and a strong local identity. Independent shops, bohemian bars, and family-run restaurants ring plazas where locals drink outdoors on warm nights. It is the base for travelers who want the real neighborhood over the postcard, with Park Guell up the hill above it.",
      pros: [
        "Genuine neighborhood life, plazas full of locals, not tour groups",
        "Better-value dining and a lively but unpretentious bar scene",
        "Walkable up to Park Guell and on the metro to the center",
      ],
      cons: [
        "A 20-25 minute walk or a metro hop from the old town and the beach",
        "Popular plazas get loud on weekend evenings",
        "Fewer big-name hotels, more apartments and small guesthouses",
      ],
    },
    {
      slug: "barceloneta",
      citySlug: "barcelona",
      name: "Barceloneta",
      lat: 41.3797,
      lng: 2.1894,
      bestFor: ["family", "budget", "local"],
      vibe: "The old fishermen's quarter wedged between the port and the city beach, a tight grid of narrow blocks that opens straight onto the sand. It is the place to sleep if the beach is the point, with seafood spots and the boardwalk on your doorstep. Character-filled by day, and the seafront bars keep it busy into the night in summer.",
      pros: [
        "Steps from the city beach and the boardwalk, no transit needed",
        "Barceloneta metro on line L4, a couple of stops to the old town",
        "Genuine seafood and vermouth bars a street back from the water",
      ],
      cons: [
        "The seafront restaurants are tourist traps, eat one street inland",
        "Cramped, hot flats in summer, and noisy near the beach bars",
        "A walk or metro ride from the Gaudi sights up in the Eixample",
      ],
    },
  ],

  pois: [
    {
      slug: "sagrada-familia",
      citySlug: "barcelona",
      name: "Sagrada Familia",
      lat: 41.4036,
      lng: 2.1744,
      kind: "sight",
      needsBooking: true,
      tip: "Buy a timed ticket online days to weeks ahead, it sells out and there is no useful walk-up option in season. Book the first slot after opening for the emptiest interior and the best morning light through the eastern Nativity-facade windows, which glow blue and green early. The tower climb is a separate paid add-on with its own timed slot, so add it when you book, not on the day.",
    },
    {
      slug: "park-guell",
      citySlug: "barcelona",
      name: "Park Guell",
      lat: 41.4145,
      lng: 2.1527,
      kind: "park",
      needsBooking: true,
      tip: "The Monumental Zone with the mosaic terrace and the famous lizard needs a timed ticket that sells out days ahead, so book online and never walk up. Take the first slot of the day, around 9:30, to beat both the crowds and the heat on the exposed terrace, and use the Baixada de la Gloria outdoor escalators to save the steep uphill walk. The surrounding forested park is free if you only want the views without the mosaics.",
    },
    {
      slug: "casa-batllo",
      citySlug: "barcelona",
      name: "Casa Batllo",
      lat: 41.3917,
      lng: 2.1649,
      kind: "sight",
      needsBooking: true,
      tip: "Gaudi's dragon-scaled house on Passeig de Gracia sells timed tickets that go fast in high season, so book online ahead rather than queue. Go at opening or in the last slot before close to dodge the tour-group crush on the narrow staircase, and use the included audio-augmented tablet for the animated details. Pair it with La Pedrera a five-minute walk up the same boulevard.",
    },
    {
      slug: "la-pedrera",
      citySlug: "barcelona",
      name: "La Pedrera (Casa Mila)",
      lat: 41.3953,
      lng: 2.1619,
      kind: "sight",
      needsBooking: true,
      tip: "Gaudi's wave-fronted apartment block is another timed-ticket sight, so book online rather than turn up. The rooftop with its warrior-helmet chimneys is the payoff, best in the last daytime slot for softer light, and in summer the separate evening 'Nights of Gaudi' rooftop session with music and drinks is worth the upgrade. It sits five minutes up Passeig de Gracia from Casa Batllo, so do the two together.",
    },
    {
      slug: "la-rambla",
      citySlug: "barcelona",
      name: "La Rambla",
      lat: 41.3809,
      lng: 2.1729,
      kind: "sight",
      needsBooking: false,
      tip: "This is the tourist artery to walk once for the buzz and the human statues, not to eat or drink on, where the terraces charge double for mediocre food. It is the single worst pickpocket spot in the city, so keep your bag zipped and in front and your phone out of your back pocket. Duck into the Boqueria market halfway down and the streets of the Barri Gotic to the east for anything you actually want.",
    },
    {
      slug: "barcelona-cathedral",
      citySlug: "barcelona",
      name: "Barri Gotic & Barcelona Cathedral",
      lat: 41.3839,
      lng: 2.1762,
      kind: "sight",
      needsBooking: false,
      tip: "The gothic cathedral charges a small entry fee for tourists during the day (roughly 9 EUR, including the rooftop lift and the cloister with its resident geese), and free hours are reserved for worship early and late. Come at opening to have the cloister quiet, then get lost on purpose in the surrounding lanes, aiming for Placa Sant Felip Neri and the medieval Jewish quarter. The rooftop terrace gives a close view over the old town's spires.",
    },
    {
      slug: "picasso-museum",
      citySlug: "barcelona",
      name: "Picasso Museum",
      lat: 41.3852,
      lng: 2.1807,
      kind: "museum",
      needsBooking: true,
      tip: "Book a timed slot online, the queue on the narrow El Born lane is long and the museum caps numbers. The collection is strongest on Picasso's early Barcelona years and his Las Meninas series, not his famous later work, so come for the formation rather than the greatest hits. Entry is free on Thursday evenings from 5pm and the first Sunday of the month, but you still need to reserve the free slot online in advance.",
    },
    {
      slug: "la-boqueria",
      citySlug: "barcelona",
      name: "La Boqueria market",
      lat: 41.3818,
      lng: 2.1717,
      kind: "food",
      needsBooking: false,
      tip: "The covered market off La Rambla runs Monday to Saturday, roughly 8am to 8:30pm, and is best mid-morning before the tour groups and after the traders are set up. The stalls right at the front are marked up for tourists, so walk to the back and sides for the real fishmongers, jamon counters, and a stool at a working bar like Pinotxo or El Quim for cooked-to-order plates. It shuts Sundays.",
    },
    {
      slug: "barceloneta-beach",
      citySlug: "barcelona",
      name: "Barceloneta beach",
      lat: 41.378,
      lng: 2.1925,
      kind: "experience",
      needsBooking: false,
      tip: "The closest city beach to the center, packed in summer, so arrive before 11am for a spot and never leave bags unwatched, as beach theft is constant. The seafront paella and sangria restaurants along the boardwalk are overpriced traps, so eat one street back in Barceloneta proper or bring a picnic. For calmer, cleaner sand, walk north to the Bogatell or Mar Bella beaches instead.",
    },
    {
      slug: "montjuic",
      citySlug: "barcelona",
      name: "Montjuic & Magic Fountain",
      lat: 41.3711,
      lng: 2.1519,
      kind: "viewpoint",
      needsBooking: false,
      tip: "The hill above the port holds the Joan Miro foundation, the MNAC art museum, gardens, and the castle, so give it a half day and take the funicular then the cable car up to save the climb. The Magic Fountain below the MNAC does free light-and-music shows on selected evenings (typically Thursday to Saturday in summer, fewer nights off-season), so check the current schedule before you go, as it is switched off in winter and during droughts. Arrive 20 minutes early for a spot on the steps.",
    },
    {
      slug: "palau-de-la-musica",
      citySlug: "barcelona",
      name: "Palau de la Musica Catalana",
      lat: 41.3875,
      lng: 2.1751,
      kind: "sight",
      needsBooking: true,
      tip: "The modernist concert hall is only visitable on a timed guided tour or by attending a concert, and the tour slots sell out, so book online ahead. The stained-glass skylight and the mosaic-columned facade of the main hall are the reason to come, and a short guided visit is enough to see them. If you can, book an actual evening concert instead, often a well-priced Spanish guitar or Catalan music program, to see the hall lit and in use.",
    },
    {
      slug: "santa-maria-del-mar",
      citySlug: "barcelona",
      name: "El Born & Santa Maria del Mar",
      lat: 41.3838,
      lng: 2.182,
      kind: "sight",
      needsBooking: false,
      tip: "The 14th-century church is free to enter during worship hours but charges a small fee (about 10 EUR) for the guided rooftop-and-crypt visit, which is the one worth doing for the view and the pure Catalan gothic interior. Come to the surrounding El Born lanes in the early evening for the wine and tapas bars, aiming off the main Passeig del Born for better value. The church's soaring, unadorned nave is the antidote to Gaudi's excess.",
    },
    {
      slug: "bunkers-del-carmel",
      citySlug: "barcelona",
      name: "Bunkers del Carmel viewpoint",
      lat: 41.4194,
      lng: 2.1622,
      kind: "viewpoint",
      needsBooking: false,
      tip: "The old civil-war anti-aircraft bunkers on Turo de la Rovira give the best free 360-degree view over the whole city and out to sea, and it is the local sunset spot. There is no shop up top and it is a 15-minute uphill walk from the nearest bus stop, so bring your own drinks and snacks, plus a layer as it gets breezy. Access is officially restricted after 9:30pm to curb noise, so come for the sunset, not a late night.",
    },
    {
      slug: "parc-de-la-ciutadella",
      citySlug: "barcelona",
      name: "Parc de la Ciutadella",
      lat: 41.3884,
      lng: 2.1866,
      kind: "park",
      needsBooking: false,
      tip: "The city's central green space beside El Born is free and open all day, the natural place to slow down between old-town sights. Rent a rowboat on the lake, see the ornate Cascada fountain that a young Gaudi helped design, and picnic on the lawns with locals on a warm afternoon. The Catalan parliament and a small zoo sit inside the grounds if you have kids in tow.",
    },
  ],

  itineraries: [
    {
      citySlug: "barcelona",
      days: 2,
      summary:
        "Two days covers Barcelona's headline sights, but it is a highlights rush, because the city really wants three to split the Gaudi trail, the old town, and the beach properly. In 48 hours you can do the Gaudi essentials on day one (Sagrada Familia, the Passeig de Gracia houses, Park Guell) and the old town on day two (the cathedral, El Born, the Picasso Museum, La Boqueria, La Rambla), squeezing in a short beach or sunset stop if energy holds. What you must cut: Montjuic, the Palau de la Musica, a proper beach afternoon, and any slow lingering, so this is a march. It suits a weekend break, a stopover, or a first taste. The non-negotiables: pre-book Sagrada Familia and Park Guell's timed tickets weeks before you fly, plus Casa Batllo or La Pedrera, or you will not get in at all. Base yourself in the Barri Gotic so the old-town day runs on foot and the Gaudi metro hops are quick. Keep your bags zipped, the old town and metro are pickpocket hotspots.",
      stayNeighborhoodSlug: "barri-gotic",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Gaudi trail: Sagrada Familia, Passeig de Gracia, Park Guell",
          morning: [
            {
              poiSlug: "sagrada-familia",
              text: "Start at Sagrada Familia for your pre-booked first slot, before the crowds and with the morning sun lighting the blue-green Nativity-facade windows. Give it a full 90 minutes for the interior and the facades, and climb a tower if you added the slot.",
              durationMin: 90,
            },
            {
              poiSlug: "casa-batllo",
              text: "Take the metro two stops to Passeig de Gracia for Gaudi's houses. Do Casa Batllo on your timed slot for the dragon-scale facade and the animated audio tablet, then walk five minutes up the boulevard.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "la-pedrera",
              text: "See La Pedrera (Casa Mila) five minutes up the same boulevard, on your timed slot, for the wave-front facade and the warrior-helmet chimneys on the rooftop. Grab a quick lunch on a side street off Passeig de Gracia rather than the pricey boulevard terraces.",
              durationMin: 90,
            },
            {
              poiSlug: "park-guell",
              text: "Head up to Park Guell for an afternoon timed slot in the Monumental Zone, taking the metro then the outdoor escalators to save the steep climb. See the mosaic terrace and lizard, then stay for the free forested viewpoints over the city.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "santa-maria-del-mar",
              text: "Come back down and give the evening to El Born, wandering the medieval lanes around Santa Maria del Mar as the wine bars fill. Book a tapas table off the main Passeig del Born, where the better-value spots are, for around 8:30.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Old town: cathedral, Picasso, Boqueria, La Rambla",
          morning: [
            {
              poiSlug: "barcelona-cathedral",
              text: "Start at the Barcelona Cathedral at opening to have the cloister and its geese quiet, and ride up to the rooftop terrace for the view over the gothic spires. Then get lost on purpose in the Barri Gotic, aiming for Placa Sant Felip Neri and the old Jewish quarter.",
              durationMin: 90,
            },
            {
              poiSlug: "picasso-museum",
              text: "Walk east into El Born to the Picasso Museum on your pre-booked slot, for his early Barcelona years and the Las Meninas series rather than the famous later work. It is a compact museum, so 75 minutes is enough before lunch.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "la-boqueria",
              text: "Cut over to La Boqueria market off La Rambla for lunch, walking to the back stalls for a stool at a working bar like Pinotxo or El Quim for cooked-to-order plates. The front stalls are marked up for tourists, so keep moving.",
              durationMin: 75,
            },
            {
              poiSlug: "la-rambla",
              text: "Walk the length of La Rambla once for the buzz and the human statues, keeping your bag zipped and in front, as this is the worst pickpocket spot in the city. Follow it down to the Columbus column and the port at the bottom.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "barceloneta-beach",
              text: "From the port, walk the boardwalk to Barceloneta beach for a late-afternoon stretch of sand and a swim if it is warm enough. Watch your bags, as beach theft is constant.",
              durationMin: 90,
            },
            {
              text: "Have a farewell dinner in Barceloneta one street back from the seafront, where the seafood is honest and the traps are on the boardwalk. Order fresh fish or a proper paella at lunch prices rather than the tourist-menu versions on the water.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "barcelona",
      days: 3,
      summary:
        "Yes, three days is the right length for Barcelona, and it is what we recommend for a first visit. It gives the Gaudi trail a full day (Sagrada Familia, the Passeig de Gracia houses, Park Guell), the old town its own day (the cathedral, El Born, the Picasso Museum, La Boqueria, La Rambla), and a third day that mixes the beach with the modernist concert hall and Ciutadella park at an easier pace. You eat well across the Eixample, El Born, and Barceloneta, fit both a proper beach afternoon and a sunset, and still sit in a plaza rather than sprint past it. What still gets cut: Montjuic in full and any day trip, which is exactly what a fourth day adds. This suits first-timers, couples, and anyone routing on to Seville or Granada next. Stay in the Eixample: it walks to the Passeig de Gracia Gaudi houses, sits close to Sagrada Familia, and its metro grid makes the old town and beach quick to reach. Pre-book Sagrada Familia, Park Guell, and the Passeig de Gracia houses weeks before you fly, and keep your bags zipped in the old town and on the metro.",
      stayNeighborhoodSlug: "eixample",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Gaudi trail: Sagrada Familia, Passeig de Gracia, Park Guell",
          morning: [
            {
              poiSlug: "sagrada-familia",
              text: "Start at Sagrada Familia for your pre-booked first slot, ahead of the crowds and with the morning light through the eastern Nativity windows. Take a full 90 minutes for the interior and both facades, adding a tower climb if you booked one.",
              durationMin: 90,
            },
            {
              poiSlug: "casa-batllo",
              text: "Walk or take one metro stop to Passeig de Gracia for Casa Batllo on your timed slot, for the dragon-scale facade and the animated audio tablet. From your Eixample base this is all close, so keep the pace relaxed.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "la-pedrera",
              text: "See La Pedrera (Casa Mila) five minutes up the same boulevard on your timed slot, for the wave-front facade and the warrior-helmet rooftop chimneys. Lunch on a quiet side street off Passeig de Gracia, not the boulevard terraces.",
              durationMin: 90,
            },
            {
              poiSlug: "park-guell",
              text: "Head up to Park Guell for an afternoon timed slot in the Monumental Zone, using the metro then the outdoor escalators to skip the steep climb. See the mosaic terrace and lizard, then linger on the free forested viewpoints as the light softens.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              text: "Come back down for dinner in the Eixample near your base, where the tapas bars and vermouth spots are solid and free of the old-town markup. Book ahead for anywhere well reviewed, the good tables fill by 9.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Old town: cathedral, El Born, Picasso, Boqueria, La Rambla",
          morning: [
            {
              poiSlug: "barcelona-cathedral",
              text: "Start at the Barcelona Cathedral at opening for the quiet cloister and its geese, then ride to the rooftop terrace for the view over the gothic spires. Wander the Barri Gotic lanes afterward, aiming for Placa Sant Felip Neri and the medieval Jewish quarter.",
              durationMin: 90,
            },
            {
              poiSlug: "picasso-museum",
              text: "Walk east into El Born to the Picasso Museum on your pre-booked slot, strong on his early Barcelona years and the Las Meninas series. It is compact, so 75 minutes covers it before lunch.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "santa-maria-del-mar",
              text: "Step into Santa Maria del Mar nearby for the soaring, unadorned Catalan-gothic nave, and do the small-fee rooftop-and-crypt visit if the view tempts you. Then browse the El Born boutiques and lanes around it.",
              durationMin: 60,
            },
            {
              poiSlug: "la-boqueria",
              text: "Cross to La Boqueria market off La Rambla for a late lunch at a back-stall bar like Pinotxo or El Quim, skipping the marked-up front stalls. Then walk the length of La Rambla once for the buzz, bag zipped and in front, down to the port.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "bunkers-del-carmel",
              text: "Head up to the Bunkers del Carmel for sunset, the free 360-degree viewpoint over the whole city, taking a bus most of the way then the 15-minute uphill walk. Bring your own drinks and snacks, as there is no shop up top, and come for the sunset rather than a late night.",
              durationMin: 90,
            },
            {
              text: "Come back down for dinner in El Born or your Eixample base, booking ahead. Cap it with a cocktail in one of El Born's design-led bars if you have energy left.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Concert hall, Ciutadella, and the beach",
          morning: [
            {
              poiSlug: "palau-de-la-musica",
              text: "Start with a pre-booked guided tour of the Palau de la Musica Catalana, for the stained-glass skylight and the mosaic-columned main hall. The short visit is enough to see the modernist interior before the day warms up.",
              durationMin: 75,
            },
            {
              poiSlug: "parc-de-la-ciutadella",
              text: "Walk to the nearby Parc de la Ciutadella, free and green, for the ornate Cascada fountain a young Gaudi helped design and a rowboat on the lake. Picnic on the lawns or grab a light lunch on the El Born edge of the park.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "barceloneta-beach",
              text: "Walk down to Barceloneta beach for the afternoon and a swim if it is warm, keeping your bags watched at all times. For cleaner, calmer sand, walk north to the Bogatell or Mar Bella beaches instead.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              text: "Have a seafood dinner in Barceloneta one street back from the boardwalk, avoiding the seafront traps, and order fresh fish or an arroz. This is the meal to go classic on for your last night.",
              durationMin: 120,
            },
            {
              text: "End with a slow vermouth or a walk along the marina at Port Vell as the lights come on. Everything is close to your Eixample base by metro, so no long journey home to plan.",
              durationMin: 45,
            },
          ],
        },
      ],
    },
    {
      citySlug: "barcelona",
      days: 4,
      summary:
        "Four days is the sweet spot for a first visit to Barcelona, turning a sightseeing sprint into an actual holiday. Days one to three cover the essentials: the Gaudi trail (Sagrada Familia, the Passeig de Gracia houses, Park Guell), the old town (the cathedral, El Born, the Picasso Museum, La Boqueria, La Rambla), and a mixed day of the concert hall, Ciutadella park, and the beach, each done without rushing. Day four is the release valve, built around Montjuic (the MNAC, Miro, gardens, and castle, reached by funicular and cable car) plus the Magic Fountain, or swapped for a day trip out to Montserrat's mountain monastery or Girona by fast train. This length suits travelers who hate the forced march, couples, and anyone whose flights bookend the trip awkwardly. For four days we recommend basing in Gracia: you have accepted a slower pace, and its plazas and family-run bars make coming home each night the best part of the day, with Park Guell up the hill above you. Book Sagrada Familia, Park Guell, and the Gaudi houses well ahead, and keep your bags zipped in the crowds.",
      stayNeighborhoodSlug: "gracia",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Gaudi trail: Sagrada Familia, Passeig de Gracia, Park Guell",
          morning: [
            {
              poiSlug: "sagrada-familia",
              text: "Start at Sagrada Familia for your booked first slot, before the crowds and with the morning light in the Nativity-facade windows. Give it 90 minutes, adding a tower climb if you booked the slot.",
              durationMin: 90,
            },
            {
              poiSlug: "casa-batllo",
              text: "Take the metro to Passeig de Gracia for Casa Batllo on your timed slot, for the dragon-scale facade and the animated audio tablet. Then walk five minutes up the boulevard.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "la-pedrera",
              text: "See La Pedrera (Casa Mila) up the same boulevard on your timed slot, for the wave-front facade and the warrior-helmet rooftop. Lunch on a side street off Passeig de Gracia, not the boulevard terraces.",
              durationMin: 90,
            },
            {
              poiSlug: "park-guell",
              text: "Head up to Park Guell for an afternoon slot in the Monumental Zone, which sits just above your Gracia base, using the outdoor escalators for the climb. See the mosaic terrace and lizard, then walk down into Gracia proper.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              text: "Settle into Gracia for the evening, drinking outdoors on one of its plazas like the locals before dinner. The neighborhood's family-run restaurants and unpretentious bars are a short walk from your bed.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Old town: cathedral, El Born, Picasso, Boqueria, La Rambla",
          morning: [
            {
              poiSlug: "barcelona-cathedral",
              text: "Take the metro down to the Barcelona Cathedral at opening for the quiet cloister and its geese, and the rooftop view over the gothic spires. Wander the Barri Gotic afterward, aiming for Placa Sant Felip Neri and the medieval Jewish quarter.",
              durationMin: 90,
            },
            {
              poiSlug: "picasso-museum",
              text: "Walk east into El Born to the Picasso Museum on your booked slot, strong on the early Barcelona years and Las Meninas. A compact museum, so 75 minutes is enough before lunch.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "la-boqueria",
              text: "Cross to La Boqueria market for lunch at a back-stall bar like Pinotxo or El Quim, skipping the tourist-priced front stalls. Then walk La Rambla once for the buzz, bag zipped and in front, down to the port.",
              durationMin: 120,
            },
            {
              poiSlug: "parc-de-la-ciutadella",
              text: "Loop back to Parc de la Ciutadella beside El Born, free and green, for the Cascada fountain and a rowboat on the lake. A calm break in the middle of an old-town day.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "santa-maria-del-mar",
              text: "Return to El Born in the evening around Santa Maria del Mar, stepping into the church's soaring gothic nave if it is open, then out to the wine bars. Aim off the main Passeig del Born for better-value tapas.",
              durationMin: 90,
            },
            {
              text: "Have dinner in El Born, booking ahead for anywhere well reviewed, before heading back up to Gracia. Finish with a cocktail in one of the quarter's design-led bars if the night is young.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Concert hall, beach, and sunset",
          morning: [
            {
              poiSlug: "palau-de-la-musica",
              text: "Start with a pre-booked guided tour of the Palau de la Musica Catalana, for the stained-glass skylight and mosaic-columned hall. The short visit is enough to see the modernist interior before the day heats up.",
              durationMin: 75,
            },
            {
              poiSlug: "la-rambla",
              text: "If you skipped it, walk La Rambla and the streets off it now, bag zipped, then cut down to the port and Port Vell marina. Grab an early lunch a street back from the water rather than on the tourist terraces.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "barceloneta-beach",
              text: "Give the afternoon to Barceloneta beach and a swim if it is warm, watching your bags at all times. Walk north to the cleaner Bogatell or Mar Bella beaches if you want calmer sand and fewer crowds.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "bunkers-del-carmel",
              text: "Head up to the Bunkers del Carmel for sunset, the free 360-degree viewpoint over the city, which is close to your Gracia base. Bring your own drinks and snacks, as there is no shop up top, and it gets breezy.",
              durationMin: 90,
            },
            {
              text: "Come down for dinner in Gracia, on a plaza terrace on a warm night, booking ahead for the popular spots. A relaxed local evening rather than a tourist strip.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Montjuic and Magic Fountain, or a day trip",
          morning: [
            {
              poiSlug: "montjuic",
              text: "Give the morning to Montjuic, taking the funicular then the cable car up to save the climb, for the MNAC art museum, the Joan Miro foundation, the gardens, and the castle with its harbor view. Alternatively, swap the whole day for a train out to Montserrat's mountain monastery for the serrated peaks and the boys' choir, or to Girona for its cathedral and old Jewish quarter.",
              durationMin: 240,
            },
          ],
          afternoon: [
            {
              text: "Come down off Montjuic through the gardens and the Poble Espanyol architecture village if it appeals, or take the day-trip train back into Sants in the late afternoon. Either way, keep the pace easy, as this is the release-valve day.",
              durationMin: 120,
            },
            {
              text: "Rest back near your Gracia base or the Eixample with a coffee and a slow walk, saving your legs for a last big evening. If you did Montserrat, this is when you get back.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "montjuic",
              text: "If the schedule is running, head to the Magic Fountain below the MNAC on Montjuic for the free light-and-music show, arriving 20 minutes early for a spot on the steps. Check the current nights first, as it runs only selected evenings and is off in winter and droughts.",
              durationMin: 60,
            },
            {
              text: "Finish with a farewell dinner back in Gracia, spending up on your last Catalan meal at a plaza restaurant you scouted earlier. End with a nightcap on a quiet plaza, a short walk from your bed, which is the whole point of basing here for four days.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
  ],
};

export default barcelona;
