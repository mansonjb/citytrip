import type { CityData } from "../types";

const rome: CityData = {
  city: {
    slug: "rome",
    name: "Rome",
    country: "Italy",
    countrySlug: "italy",
    lat: 41.9028,
    lng: 12.4964,
    tier: 1,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "FCO",
    airportToCenter:
      "Leonardo Express train from Fiumicino to Termini, about 32 min, 14 EUR, running every 15 min. Cheaper options: the FL1 regional train to Trastevere or Ostiense stations for 8 EUR, or a Terravision/SIT bus to Termini for about 6 EUR but slower in traffic.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [7, 8],
    monthlyNotes: {
      1: "Cool at 12-13C with the year's lowest crowds and cheapest hotel rates, though some rain rolls through. The Epiphany on January 6 closes the Christmas season with a market on Piazza Navona, and the first Sunday brings free state-museum entry including the Colosseum.",
      2: "Still mild at 13-14C and quiet outside the short Carnival stretch, when kids in costume fill the piazzas. Rain is possible but sunny lunch-outdoors afternoons are common, and this is a strong month for a low-cost, low-queue trip.",
      3: "Highs push toward 17C and daylight lengthens, with crowds building only late in the month. Watch the Easter calendar: if Holy Week lands in March, the Vatican and central hotels get busy and pricey fast.",
      4: "One of the best months at 19-20C, but two big draws collide: Holy Week and Easter fill St Peter's Square for the Pope's services, and Natale di Roma on April 21 stages gladiator parades at the Circus Maximus for the city's founding. Book the Vatican and Easter dates weeks ahead.",
      5: "Reliably warm at 23-24C with long evenings and little rain, the sweet spot before summer heat. Crowds are heavy at the marquee sights, so timed tickets for the Colosseum and Vatican are essential, but the terrace and piazza-dinner season is at its best.",
      6: "Hot at 28-29C and busy, with the Estate Romana festival starting to fill riverbanks and outdoor venues with concerts and open-air cinema through the summer. Do the Colosseum and Vatican at opening, then retreat to shaded churches and long lunches in the afternoon.",
      7: "Peak heat over 31C, relentless sun, and thinning locals who leave for the coast. Crowds stay dense at the big sights and prices hold high, so book the first entry slot everywhere and plan indoor or shaded stops for the 2-5pm furnace.",
      8: "The hottest and most draining month at 32-33C, with Ferragosto on August 15 shutting many family-run trattorias for the holiday. If August is unavoidable, book air conditioning, front-load sightseeing to early morning, and expect the city to feel half-empty of Romans but full of tour groups.",
      9: "Summer light without the worst heat: 28C early, easing through the month, with Estate Romana events still running along the Tiber. Crowds relax after the first week and this is arguably the finest month overall for a Rome break.",
      10: "Warm days around 23-24C with the first proper rain returning late in the month and superb low-angle light for photos. Crowds thin noticeably after mid-October, making it a strong shoulder-season pick for both weather and hotel value.",
      11: "Cooler at 17-18C with regular wet spells, but plenty of bright days between fronts and the quietest big sights of the autumn. Low-season pricing returns and you can often walk into restaurants that need reservations in May.",
      12: "Mild for winter at 14C but wet, with a Christmas tree and nativity scene on St Peter's Square and lights strung across the center. Quiet until the Christmas-to-New-Year stretch, when rates jump and the free first-Sunday museum entry draws big local crowds.",
    },
    climate: {
      1: { highC: 12, lowC: 3, rainyDays: 8 },
      2: { highC: 13, lowC: 4, rainyDays: 8 },
      3: { highC: 16, lowC: 6, rainyDays: 8 },
      4: { highC: 19, lowC: 8, rainyDays: 8 },
      5: { highC: 24, lowC: 12, rainyDays: 6 },
      6: { highC: 28, lowC: 16, rainyDays: 4 },
      7: { highC: 31, lowC: 18, rainyDays: 2 },
      8: { highC: 32, lowC: 18, rainyDays: 3 },
      9: { highC: 28, lowC: 15, rainyDays: 5 },
      10: { highC: 23, lowC: 11, rainyDays: 8 },
      11: { highC: 17, lowC: 7, rainyDays: 9 },
      12: { highC: 14, lowC: 4, rainyDays: 9 },
    },
    budgetLevel: "mid",
    budgetPerDay: { budget: 75, mid: 150, high: 300 },
    tagline: "Three thousand years of ruins, and dinner outdoors on top.",
    heroIntro:
      "Rome packs ancient wonders, the Vatican, and Europe's best casual eating into a center you can mostly walk, if you accept the cobbles and the distances. Three days is the honest minimum to split ancient Rome, the Vatican, and the piazza core without a forced march. Come in spring or early autumn, book the Colosseum and Vatican before you fly, and the city delivers like almost nowhere else.",
    accent: { from: "#C0532B", to: "#E0A43B", ink: "#6E2A15" },
    neighborhoodSlugs: [
      "centro-storico",
      "monti",
      "trastevere",
      "prati",
      "testaccio",
    ],
    nearbyCitySlugs: ["florence"],
  },

  neighborhoods: [
    {
      slug: "centro-storico",
      citySlug: "rome",
      name: "Centro Storico",
      lat: 41.8992,
      lng: 12.4731,
      bestFor: ["first-time", "romantic", "family"],
      vibe: "The historic core between the Pantheon, Piazza Navona, and the Trevi Fountain, a warren of ochre lanes that empties into baroque squares. Everything on a first-timer's list sits within a fifteen-minute walk, and the streets glow at night once the day-trippers thin. It is the postcard, and you pay postcard prices to sleep in it.",
      pros: [
        "Walk to the Pantheon, Trevi, Navona, and the Spanish Steps without transit",
        "Beautiful at night once the tour groups clear out after dinner",
        "Dense with cafes, gelato, and aperitivo spots at every turn",
      ],
      cons: [
        "The most expensive area in the city for hotels",
        "No metro stations inside it, so you walk or take buses everywhere",
        "Crowded and noisy around the headline sights all day",
      ],
    },
    {
      slug: "monti",
      citySlug: "rome",
      name: "Monti",
      lat: 41.8946,
      lng: 12.4917,
      bestFor: ["local", "romantic", "nightlife"],
      vibe: "Rome's oldest neighborhood sits in a pocket between the Colosseum and Termini, once the ancient red-light district and now the center's most livable quarter. Vintage shops, wine bars, and small trattorias line ivy-draped lanes around Piazza della Madonna dei Monti, where locals drink on the fountain steps at night. It gives you walking access to ancient Rome without the price or the tour-bus crush.",
      pros: [
        "Ten-minute walk to the Colosseum and the Forum",
        "Cavour metro station on line B, plus close to Termini's transport hub",
        "Genuine neighborhood nightlife of wine bars and enotecas, not tourist traps",
      ],
      cons: [
        "Some streets near Termini feel scruffy after dark",
        "Popular bars get loud and packed on weekend evenings",
        "Fewer big-name hotels, more apartments and small boutiques",
      ],
    },
    {
      slug: "trastevere",
      citySlug: "rome",
      name: "Trastevere",
      lat: 41.8896,
      lng: 12.4695,
      bestFor: ["romantic", "nightlife", "local"],
      vibe: "Across the Tiber from the center, Trastevere is a tangle of cobbled lanes, ivy, and washing lines that turns into the city's most atmospheric dinner-and-drinks quarter after dark. Trattorias spill onto the streets and the bars around Piazza di Santa Maria stay busy past midnight. Charming by evening, it is genuinely rowdy on weekend nights.",
      pros: [
        "The best concentration of classic trattorias and evening buzz in Rome",
        "Walkable to the center over the river and to the Jewish Ghetto",
        "Postcard lanes that photograph beautifully in morning light",
      ],
      cons: [
        "Loud until the early hours on weekends, a poor choice for light sleepers",
        "No metro at all, you rely on trams, buses, or your feet",
        "Some restaurants on the main squares coast on the location",
      ],
    },
    {
      slug: "prati",
      citySlug: "rome",
      name: "Prati",
      lat: 41.9075,
      lng: 12.4623,
      bestFor: ["family", "first-time", "budget"],
      vibe: "An orderly, elegant district of wide boulevards laid out beside the Vatican, home to smart shops, reliable restaurants, and far fewer tourists than the center. It puts you a short walk from the Vatican Museums and St Peter's while feeling like a real residential Rome. Calm, safe, and well connected by metro.",
      pros: [
        "Walk to the Vatican Museums and St Peter's, ahead of the coach crowds",
        "Two metro stops on line A, direct to Termini and the Spanish Steps",
        "Better-value hotels and dependable, non-touristy dining",
      ],
      cons: [
        "Quieter at night, with limited bar and nightlife scene",
        "A 20-25 minute walk or a metro hop from the Colosseum side of the city",
        "Feels more functional than romantic compared with the old center",
      ],
    },
    {
      slug: "testaccio",
      citySlug: "rome",
      name: "Testaccio",
      lat: 41.8759,
      lng: 12.4757,
      bestFor: ["local", "budget", "family"],
      vibe: "A working-class district south of the center built around the old slaughterhouse, and the spiritual home of Roman cucina povera, offal-and-all. Its covered market and no-frills trattorias draw serious eaters, while the nightlife runs to clubs dug into Monte Testaccio. Little to look at, plenty to eat, and prices locals actually pay.",
      pros: [
        "Rome's best-value authentic food, from the market to old-school trattorias",
        "Piramide metro station on line B, a few minutes to the Colosseum",
        "Real neighborhood atmosphere with almost no tourist markup",
      ],
      cons: [
        "Short on classic sights, you are here to eat, not to gawk",
        "A 20-minute-plus walk or a metro ride from the historic core",
        "The Monte Testaccio club strip is loud on weekend nights",
      ],
    },
  ],

  pois: [
    {
      slug: "colosseum",
      citySlug: "rome",
      name: "Colosseum",
      lat: 41.8902,
      lng: 12.4922,
      kind: "sight",
      needsBooking: true,
      tip: "Buy the combined Colosseum-Forum-Palatine ticket online days ahead, it sells out and the on-site queue runs an hour or more in season. The timed slot is for the Colosseum only, so enter it first at your slot, then use the same ticket for the Forum and Palatine over the next 24 hours. The arena-floor and underground add-ons need a separate booking well in advance.",
    },
    {
      slug: "roman-forum-palatine",
      citySlug: "rome",
      name: "Roman Forum and Palatine Hill",
      lat: 41.8925,
      lng: 12.4853,
      kind: "sight",
      needsBooking: true,
      tip: "Covered by the same combined Colosseum ticket, so do it the same day or the next within the 24-hour window. Enter from the quieter Via di San Gregorio gate rather than the packed Forum entrance near the Colosseum, and climb the Palatine first for the view down over the ruins before the midday sun. There is almost no shade, so bring water and a hat.",
    },
    {
      slug: "pantheon",
      citySlug: "rome",
      name: "Pantheon",
      lat: 41.8986,
      lng: 12.4769,
      kind: "sight",
      needsBooking: true,
      tip: "Entry is 5 EUR and free on the first Sunday of the month, but a timed slot is required on weekends and holidays, so book those ahead online. Come at opening (9am) or in the last hour before close to have the interior and its open oculus without a wall of selfie sticks. On a rainy day, watch the rain fall straight through the oculus onto the drained marble floor.",
    },
    {
      slug: "trevi-fountain",
      citySlug: "rome",
      name: "Trevi Fountain",
      lat: 41.9009,
      lng: 12.4833,
      kind: "sight",
      needsBooking: false,
      tip: "Go at 7am or after midnight to actually see the marble, by mid-morning it is a solid crush ten people deep. Toss the coin with your right hand over your left shoulder if you want the tradition, and skip the overpriced cafes on the square. The water is not drinkable, but the free nasoni street fountains nearby are.",
    },
    {
      slug: "vatican-museums",
      citySlug: "rome",
      name: "Vatican Museums and Sistine Chapel",
      lat: 41.9065,
      lng: 12.4536,
      kind: "museum",
      needsBooking: true,
      tip: "Book the first 8am slot online, weeks ahead, and walk straight to the Sistine Chapel through the emptier route before doubling back, the galleries fill to shoulder-to-shoulder by 10am. Wednesday mornings are quietest because the Papal audience pulls crowds to the square. The free last-Sunday-of-the-month entry is a mob with hour-long lines, avoid it unless you have infinite patience.",
    },
    {
      slug: "st-peters-basilica",
      citySlug: "rome",
      name: "St Peter's Basilica",
      lat: 41.9022,
      lng: 12.4539,
      kind: "sight",
      needsBooking: false,
      tip: "Entry to the basilica is free but the security line on the square can hit an hour, so arrive at 7am opening or come late afternoon. Dress code is strict: shoulders and knees covered or you are turned away at the door. The dome climb is a paid extra (about 10 EUR with the lift to the terrace, 8 EUR on foot) and worth it for the view straight down the nave and out over Rome.",
    },
    {
      slug: "piazza-navona",
      citySlug: "rome",
      name: "Piazza Navona",
      lat: 41.8992,
      lng: 12.4731,
      kind: "sight",
      needsBooking: false,
      tip: "The baroque square built on an ancient stadium is free and best in early morning or after dinner when the crowds and the caricature artists thin. Bernini's Fountain of the Four Rivers is the centerpiece, but do not sit down at a terrace cafe here, the location markup is brutal. Duck one street west for a fraction of the price.",
    },
    {
      slug: "spanish-steps",
      citySlug: "rome",
      name: "Spanish Steps",
      lat: 41.906,
      lng: 12.4823,
      kind: "sight",
      needsBooking: false,
      tip: "Sitting on the steps is banned and police enforce it with fines, so this is a stand-and-photograph stop, not a rest stop. Come at sunrise for the empty staircase, or climb to the Trinita dei Monti church at the top for a free view down over the rooftops. The Keats-Shelley house at the base is a quiet detour if you want one.",
    },
    {
      slug: "galleria-borghese",
      citySlug: "rome",
      name: "Galleria Borghese",
      lat: 41.9142,
      lng: 12.4922,
      kind: "museum",
      needsBooking: true,
      tip: "You cannot get in without a pre-booked, timed two-hour slot, and they sell out days in advance, so book this before anything else on your trip. It holds Bernini's greatest sculptures and a room of Caravaggios in a compact villa, so two hours is genuinely enough. Arrive 15 minutes early to check your bag in the mandatory cloakroom before your window starts.",
    },
    {
      slug: "trastevere-lanes",
      citySlug: "rome",
      name: "Trastevere lanes",
      lat: 41.8896,
      lng: 12.4695,
      kind: "experience",
      needsBooking: false,
      tip: "Wander the cobbled lanes in the morning for the ivy and washing-line photos with no crowds, then return after 8pm for the dinner-and-drinks scene. Aim for the streets around Piazza di Santa Maria in Trastevere rather than the square itself, where the restaurants coast on the view. Book a trattoria table, the good ones fill by 8:30 on weekends.",
    },
    {
      slug: "campo-de-fiori",
      citySlug: "rome",
      name: "Campo de' Fiori market",
      lat: 41.8956,
      lng: 12.4722,
      kind: "food",
      needsBooking: false,
      tip: "The morning market runs roughly 7am to 2pm, Monday to Saturday, and it is more tourist-souvenir than local grocery these days, so come to browse and photograph rather than to shop cheap. Buy fruit, cheese, and a slice of pizza bianca from the corner bakery Forno Campo de' Fiori for a picnic. By night the square flips to a rowdy student bar scene.",
    },
    {
      slug: "castel-sant-angelo",
      citySlug: "rome",
      name: "Castel Sant'Angelo",
      lat: 41.9031,
      lng: 12.4663,
      kind: "sight",
      needsBooking: false,
      tip: "Hadrian's cylindrical tomb turned papal fortress sits right between the Vatican and the center, so pair it with a Vatican morning. Book online to skip the ticket line, then climb the spiral ramp to the rooftop terrace for one of the best panoramas in Rome, with St Peter's dome front and center. The statue-lined Ponte Sant'Angelo out front is free and best at dusk.",
    },
    {
      slug: "villa-borghese",
      citySlug: "rome",
      name: "Villa Borghese park",
      lat: 41.9142,
      lng: 12.4853,
      kind: "park",
      needsBooking: false,
      tip: "Rome's big central park is free and the natural pairing with the Galleria Borghese inside it, so use the surrounding hours before or after your gallery slot. Walk to the Pincio terrace on the western edge for a free sweeping view over Piazza del Popolo and the rooftops toward St Peter's, best at sunset. Rent a bike or a rowboat on the small lake if you have kids in tow.",
    },
    {
      slug: "jewish-ghetto-food",
      citySlug: "rome",
      name: "Jewish Ghetto",
      lat: 41.8925,
      lng: 12.4778,
      kind: "food",
      needsBooking: false,
      tip: "Rome's old Jewish quarter around Via del Portico d'Ottavia is the place for carciofi alla giudia, the flattened deep-fried artichoke, best from October to spring when they are in season. Come for a late lunch, order the fried artichoke and the baccala, and grab a pastry from the historic Boccione bakery on the corner. Note the quarter is quiet on Saturdays for the Sabbath.",
    },
  ],

  itineraries: [
    {
      citySlug: "rome",
      days: 2,
      summary:
        "Two days covers Rome's greatest hits, but it is a highlights rush and you will feel it, because Rome really needs three. In 48 hours you can do ancient Rome (Colosseum, Forum, Palatine) on day one and the Vatican plus the piazza core (Pantheon, Trevi, Navona) on day two, with dinner in Trastevere both nights. What you must cut: the Galleria Borghese, Villa Borghese, Castel Sant'Angelo interiors, Testaccio's food, and any slow lingering, so this is a march, not a stroll. It suits a weekend break, a stopover, or a first taste before combining with Florence. The non-negotiables: pre-book the combined Colosseum-Forum ticket and the Vatican 8am slot before you fly, or you lose hours to queues you cannot afford on a two-day trip. Base yourself in Centro Storico so both mornings start on foot and the evenings put you steps from dinner. If you get a third day, add the Borghese and slow down, it is the single best upgrade.",
      stayNeighborhoodSlug: "centro-storico",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Ancient Rome: Colosseum, Forum, Palatine",
          morning: [
            {
              poiSlug: "colosseum",
              text: "Start at the Colosseum for your pre-booked opening slot, before the queues and the heat build. Circle both tiers for the full sweep of the arena, then exit toward the Forum using the same combined ticket.",
              durationMin: 90,
            },
            {
              poiSlug: "roman-forum-palatine",
              text: "Enter the Roman Forum and climb the Palatine Hill next door on the same ticket. Go up the Palatine first for the view down over the ruins, then wind through the Forum's temples and arches before the midday sun peaks.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              text: "Lunch and recover in Monti, a ten-minute walk from the Forum, at a wine bar or trattoria around Piazza della Madonna dei Monti. This is the local antidote to the tourist cafes right by the Colosseum.",
              durationMin: 90,
            },
            {
              text: "Detour to the Capitoline Hill and Michelangelo's Piazza del Campidoglio, then the free terrace behind it for a rooftop view back over the Forum you just walked. It is a five-minute climb and the best free vantage on ancient Rome.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "trastevere-lanes",
              text: "Cross the river to Trastevere for the evening, wandering the cobbled lanes as the bars fill. Book a trattoria table for around 8:30, the good ones off the main square are full by then on any busy night.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Vatican and the piazza core",
          morning: [
            {
              poiSlug: "vatican-museums",
              text: "Be at the Vatican Museums for your pre-booked 8am slot and head straight for the Sistine Chapel before the galleries jam by 10am. Wednesday is the quietest morning because the Papal audience draws crowds to the square.",
              durationMin: 150,
            },
            {
              poiSlug: "st-peters-basilica",
              text: "Walk to St Peter's Basilica next, free to enter with shoulders and knees covered. If your legs are up for it, pay the small fee for the dome climb and the view straight down the nave and out over the city.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "pantheon",
              text: "Cross back over the river and make for the Pantheon, the best-preserved building of ancient Rome, entering on your timed slot if it is a weekend. Stand under the open oculus, then grab a coffee at one of the historic bars on the square.",
              durationMin: 75,
            },
            {
              poiSlug: "piazza-navona",
              text: "Walk two minutes to Piazza Navona for Bernini's Fountain of the Four Rivers on its baroque ancient-stadium footprint. Keep moving one street west for a drink at non-tourist prices.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "trevi-fountain",
              text: "Loop to the Trevi Fountain in the evening, when the crowds ease a little and the marble is lit. Toss the coin, then walk up to the Spanish Steps a few minutes away for the floodlit staircase.",
              durationMin: 60,
            },
            {
              text: "Finish with dinner in Centro Storico near your hotel, booking ahead for anywhere with a name. Cap the night with a gelato from a real gelateria, one that keeps its tubs covered and stored low, not piled high in neon swirls.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "rome",
      days: 3,
      summary:
        "Yes, three days is the right length for Rome, and it is what we recommend for a first visit. It gives ancient Rome a full day (Colosseum, Forum, Palatine, plus Monti), the Vatican its own morning followed by Castel Sant'Angelo, and a dedicated day for the piazza core: Pantheon, Trevi, Navona, the Spanish Steps, and Campo de' Fiori. You eat well in three different neighborhoods, fit both Trastevere and a proper Roman trattoria night, and still move at a pace that lets you sit in a piazza rather than sprint past it. What still gets cut: the Galleria Borghese, Villa Borghese, and Testaccio's food scene, which is exactly what a fourth day adds. This suits first-timers, couples, and anyone routing on to Florence next. Stay in Monti: it walks to the Colosseum, sits on the Cavour metro and near Termini for the Vatican hop, and its wine bars make the best base for the evenings. Pre-book the Colosseum-Forum ticket and the Vatican 8am slot before you fly.",
      stayNeighborhoodSlug: "monti",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Ancient Rome: Colosseum, Forum, Palatine, Monti",
          morning: [
            {
              poiSlug: "colosseum",
              text: "Start at the Colosseum for your pre-booked opening slot, ahead of the queues and the heat. Walk both tiers for the full view of the arena, then head to the Forum on the same combined ticket.",
              durationMin: 90,
            },
            {
              poiSlug: "roman-forum-palatine",
              text: "Enter the Roman Forum and Palatine Hill next, using the quieter Via di San Gregorio gate. Climb the Palatine first for the overview of the ruins, then thread down through the Forum before the sun is overhead.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              text: "Lunch in Monti, a short walk from the Forum, at a trattoria or enoteca around Piazza della Madonna dei Monti. Take your time, you have earned the break after a morning on your feet in the ruins.",
              durationMin: 90,
            },
            {
              text: "Climb the Capitoline Hill to Michelangelo's Piazza del Campidoglio and the free terrace behind it for a rooftop panorama over the Forum. If you have energy, the Capitoline Museums here hold the original bronze she-wolf and a superb ancient collection.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Stay in Monti for the evening, drinking on the fountain steps of the main piazza like the locals before dinner. The neighborhood's wine bars and small trattorias are a short stumble from your hotel.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Vatican and Castel Sant'Angelo",
          morning: [
            {
              poiSlug: "vatican-museums",
              text: "Be at the Vatican Museums for your booked 8am slot and go straight for the Sistine Chapel before the crush. Wednesday mornings run quietest thanks to the Papal audience drawing crowds to the square instead.",
              durationMin: 150,
            },
            {
              poiSlug: "st-peters-basilica",
              text: "Walk to St Peter's Basilica, free to enter with shoulders and knees covered. Pay the small fee for the dome climb if your legs allow, the view down the nave and out over Rome is the payoff.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              text: "Lunch in Prati, a few blocks from the Vatican, where the restaurants are reliable and free of the coach-tour markup you get right by St Peter's. This is a good spot to slow down before the afternoon sight.",
              durationMin: 75,
            },
            {
              poiSlug: "castel-sant-angelo",
              text: "Walk to Castel Sant'Angelo between the Vatican and the river, booking online to skip the line. Climb the spiral ramp to the rooftop terrace for a panorama with St Peter's dome front and center, then cross the statue-lined Ponte Sant'Angelo toward the center.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "trastevere-lanes",
              text: "Cross into Trastevere for dinner, wandering the cobbled lanes as the bars fill up. Book a trattoria off the main square for around 8:30, and finish with a drink on Piazza di Santa Maria.",
              durationMin: 180,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Piazza core: Pantheon, Trevi, Navona",
          morning: [
            {
              poiSlug: "pantheon",
              text: "Start at the Pantheon at 9am opening, on your timed slot if it is a weekend, to stand under the oculus before the crowds. Have coffee at a historic bar on the square, then walk two minutes to the next stop.",
              durationMin: 75,
            },
            {
              poiSlug: "piazza-navona",
              text: "Take in Piazza Navona and Bernini's Fountain of the Four Rivers on the footprint of an ancient stadium. Photograph it, then step one street off the square for a drink at fair prices.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "campo-de-fiori",
              text: "Walk to Campo de' Fiori for the morning market tail-end, picking up fruit and a slice of pizza bianca from Forno Campo de' Fiori for a light lunch. Then cut into the nearby Jewish Ghetto for a fried artichoke if you would rather sit down.",
              durationMin: 90,
            },
            {
              poiSlug: "trevi-fountain",
              text: "Loop to the Trevi Fountain, accepting that afternoon means crowds, and toss the coin over your left shoulder. Then climb to the Spanish Steps a few minutes on, and up to the Trinita dei Monti church for the free rooftop view.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "spanish-steps",
              text: "Linger around the Spanish Steps and the elegant shopping streets below as the light goes, then drift back toward the center. Everything here is a short walk apart, so wander rather than plan.",
              durationMin: 60,
            },
            {
              text: "Book a farewell dinner in Centro Storico or back in Monti, splurging a little on your last Roman meal. End with a gelato from a serious gelateria, the kind that stores its tubs covered and low.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "rome",
      days: 4,
      summary:
        "Four days is the sweet spot for a first visit to Rome, turning a sightseeing sprint into an actual holiday. Days one to three cover the essentials: ancient Rome (Colosseum, Forum, Palatine), the Vatican with Castel Sant'Angelo, and the piazza core of Pantheon, Trevi, and Navona, each done without rushing. Day four is the release valve, built around the Galleria Borghese, which must be pre-booked on a strict timed slot and cannot be entered without one, followed by the gardens of Villa Borghese and a long, greedy food afternoon through Trastevere or Testaccio. This length suits travelers who hate the forced march, couples, and anyone whose flights bookend the trip awkwardly. For four days we recommend basing in Trastevere: you have accepted a slower pace, and its lanes and trattorias make coming home each night the best part of the day. Beyond four days, add a Tivoli day trip for Hadrian's Villa, or run on to Florence by fast train in an hour and a half. Book the Colosseum, Vatican, and especially the Borghese well ahead.",
      stayNeighborhoodSlug: "trastevere",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Ancient Rome: Colosseum, Forum, Palatine",
          morning: [
            {
              poiSlug: "colosseum",
              text: "Start at the Colosseum for your booked opening slot, before the queues and heat. Circle both tiers, then move to the Forum on the same combined ticket.",
              durationMin: 90,
            },
            {
              poiSlug: "roman-forum-palatine",
              text: "Enter the Roman Forum and Palatine Hill on the same ticket, using the quieter San Gregorio gate. Climb the Palatine first for the overview, then work down through the Forum before midday.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              text: "Lunch in Monti near the Forum, at a wine bar or trattoria around Piazza della Madonna dei Monti. Slow down, the afternoon is deliberately light on day one.",
              durationMin: 90,
            },
            {
              text: "Climb the Capitoline Hill for Michelangelo's Piazza del Campidoglio and the free terrace behind it, overlooking the Forum. The Capitoline Museums here are the best add-on if you want more ancient Rome.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Head back to Trastevere for dinner, easing into the neighborhood you are calling home. Book a trattoria off the main square and end with a drink on Piazza di Santa Maria.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Vatican and Castel Sant'Angelo",
          morning: [
            {
              poiSlug: "vatican-museums",
              text: "Be at the Vatican Museums for your 8am slot and go straight to the Sistine Chapel before the galleries fill. Wednesday is the quietest morning, thanks to the Papal audience pulling crowds to the square.",
              durationMin: 150,
            },
            {
              poiSlug: "st-peters-basilica",
              text: "Walk to St Peter's Basilica, free with shoulders and knees covered. Pay for the dome climb if your legs allow, for the view down the nave and across the whole city.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              text: "Lunch in Prati near the Vatican, where the food is dependable and free of the tour-group markup by St Peter's. A good pause before the afternoon.",
              durationMin: 75,
            },
            {
              poiSlug: "castel-sant-angelo",
              text: "Walk to Castel Sant'Angelo, booking online to skip the line, and climb the ramp to the rooftop terrace for the St Peter's dome panorama. Cross the statue-lined Ponte Sant'Angelo back toward the center at dusk.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "piazza-navona",
              text: "Stroll through Piazza Navona in the evening for Bernini's fountain lit up and the square at its calmest. Have an aperitivo one street off the piazza where the prices are sane.",
              durationMin: 60,
            },
            {
              text: "Dinner back in Trastevere, wandering the lanes on the way in. The good tables fill by 8:30 on weekends, so book ahead.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Piazza core: Pantheon, Trevi, Navona",
          morning: [
            {
              poiSlug: "pantheon",
              text: "Start at the Pantheon at 9am opening, on your timed slot if it is a weekend, to catch the oculus before the crowds. Coffee at a historic bar on the square, then walk on.",
              durationMin: 75,
            },
            {
              poiSlug: "campo-de-fiori",
              text: "Walk to Campo de' Fiori for the morning market and a picnic slice from Forno Campo de' Fiori. Cut into the Jewish Ghetto nearby for a fried artichoke if you would rather a sit-down lunch.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "trevi-fountain",
              text: "Head to the Trevi Fountain, toss the coin over your left shoulder, and accept the afternoon crowd. Then climb to the Spanish Steps and up to Trinita dei Monti for the free rooftop view.",
              durationMin: 90,
            },
            {
              poiSlug: "spanish-steps",
              text: "Wander the elegant streets below the Spanish Steps, window-shopping the designer strip along Via dei Condotti. Everything here is a short walk apart, so drift rather than march.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Dinner in Centro Storico or back in Trastevere, booking ahead for anywhere well reviewed. Finish with a gelato from a serious gelateria, tubs stored covered and low, not swirled high.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Borghese, Villa Borghese park, and a food afternoon",
          morning: [
            {
              poiSlug: "galleria-borghese",
              text: "Use your pre-booked, timed two-hour Galleria Borghese slot, arriving 15 minutes early for the mandatory bag check. Bernini's sculptures and the Caravaggio room are the highlight of any Rome art itinerary, and two hours is genuinely enough for the compact villa.",
              durationMin: 120,
            },
            {
              poiSlug: "villa-borghese",
              text: "Spill out into the surrounding Villa Borghese park, free and green, and walk to the Pincio terrace on the western edge. The view over Piazza del Popolo and the rooftops toward St Peter's is one of the city's best, and free.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "jewish-ghetto-food",
              text: "Give the afternoon to eating: either the Jewish Ghetto for carciofi alla giudia and baccala with a pastry from Boccione, or take the metro to Testaccio for its covered market and old-school offal trattorias. Both are about the food, not the sights.",
              durationMin: 120,
            },
            {
              text: "Walk it off with a slow loop through Trastevere in the golden hour, when the lanes photograph best and the day-trippers have gone. A gelato or an early aperitivo bridges you to dinner.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Book a farewell dinner in Trastevere, spending up on your last Roman meal at a trattoria you scouted earlier. Cacio e pepe, carbonara, or saltimbocca, this is the meal to go classic on.",
              durationMin: 120,
            },
            {
              text: "End with a nightcap on Piazza di Santa Maria or a quiet lane bar, a short walk from your bed. No journey home to plan, which is the whole point of basing here for four days.",
              durationMin: 45,
            },
          ],
        },
      ],
    },
  ],
};

export default rome;
