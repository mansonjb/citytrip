import type { CityData } from "../types";

const athens: CityData = {
  city: {
    slug: "athens",
    name: "Athens",
    country: "Greece",
    countrySlug: "greece",
    lat: 37.9838,
    lng: 23.7275,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "ATH",
    airportToCenter:
      "Metro line 3 (blue) runs from the airport straight to Syntagma in the center in about 40 min for around 9 EUR, trains every 30 min. The X95 express bus does the same trip for 5.50 EUR around the clock, 24 hours a day, but takes 60-90 min depending on traffic. A flat-rate taxi to the center is about 40 EUR by day.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [7, 8],
    monthlyNotes: {
      1: "Cool and quiet at 13C highs with the year's lowest hotel rates and no queue for the Acropolis. Rain comes in short spells but bright sun is common, and state sites offer free entry on the first Sunday, so time a visit for January 4.",
      2: "Still mild at 14C and one of the calmest months on the rock, with clear light for photos between showers. The first-Sunday free-entry window applies on February 1, and cafe terraces in Plaka fill on any sunny lunchtime.",
      3: "Highs climb toward 16C and almond blossom appears, with crowds only starting to build late in the month. March 25 is Independence Day, a national holiday with a military parade past Syntagma and many sites and shops closed, so plan around it.",
      4: "One of the best months at 20C, green hills and long light, though this is when Greek Orthodox Easter usually lands (April 12 in 2026) and it is the country's biggest holiday. Athens half-empties as families travel home, many tavernas shut over Easter weekend, and the candlelit midnight service is worth seeing.",
      5: "Warm, dry and reliable at 26C, the sweet spot before the summer furnace, with long evenings for rooftop dinners. Crowds are heavy at the Acropolis so book a timed ticket and go at 8am opening, but the weather and daylight are close to perfect.",
      6: "Hot at 31C and busy, with the Athens Epidaurus Festival opening its season of ancient drama and concerts at the Odeon of Herodes Atticus below the Acropolis. Do the rock at opening, retreat indoors to the cool Acropolis Museum in the afternoon, and book festival nights ahead.",
      7: "Peak heat over 34C, relentless sun and little shade on the archaeological sites, while many Athenians leave for the islands. The Epidaurus Festival runs on at the Odeon, but sightseeing means an 8am start or the last two hours before close, with midday spent inside or by a pool.",
      8: "The hottest, driest month at 34C and up, when the city can top 38C and locals empty out to the coast around the August 15 holiday. If August is unavoidable, front-load everything to early morning, book air conditioning, and treat the shaded Acropolis Museum and rooftop evenings as survival strategy.",
      9: "Summer warmth without the worst of it, starting near 29C and easing through the month, with the Epidaurus Festival wrapping up and Athenians back in town. Crowds thin after the first week and this is arguably the finest month overall for an Athens break.",
      10: "Warm days around 23C with the first proper rain returning late and superb low-angle light on the marble. Crowds drop noticeably after mid-month, and the free first-Sunday entry resumes for the off season on October, though confirm as the winter schedule kicks in November.",
      11: "Cooler at 18C with wetter spells but plenty of bright days, and the quietest big sights of the autumn. Off-season pricing returns and free state-site entry lands on the first Sunday, November 1, so a low-cost, low-queue trip is very doable.",
      12: "Mild for winter at 14C but the wettest stretch, with Christmas lights strung across Syntagma and Monastiraki and a festive market in the squares. Sites stay open with short winter hours and the first-Sunday free entry falls on December 6, drawing local crowds.",
    },
    climate: {
      1: { highC: 13, lowC: 7, rainyDays: 11 },
      2: { highC: 14, lowC: 7, rainyDays: 9 },
      3: { highC: 16, lowC: 8, rainyDays: 8 },
      4: { highC: 20, lowC: 11, rainyDays: 7 },
      5: { highC: 26, lowC: 15, rainyDays: 5 },
      6: { highC: 31, lowC: 20, rainyDays: 3 },
      7: { highC: 34, lowC: 23, rainyDays: 1 },
      8: { highC: 34, lowC: 23, rainyDays: 1 },
      9: { highC: 29, lowC: 19, rainyDays: 3 },
      10: { highC: 23, lowC: 15, rainyDays: 6 },
      11: { highC: 18, lowC: 11, rainyDays: 8 },
      12: { highC: 14, lowC: 8, rainyDays: 11 },
    },
    budgetLevel: "mid",
    budgetPerDay: { budget: 55, mid: 110, high: 220 },
    tagline: "The birthplace of the West, with the best rooftops in Europe.",
    heroIntro:
      "Athens hands you the Acropolis, world-class ancient sites, and a scrappy, exciting city center you can walk end to end in an afternoon. Three days is the honest sweet spot: one for the rock and its museum, one for the ancient Agora and old-town lanes, and one for the National Archaeological Museum and a hill at sunset. Come in spring or early autumn, book the Acropolis ticket before you fly, and eat dinner on a rooftop with the Parthenon lit up above you.",
    accent: { from: "#1E7FA8", to: "#E0C15A", ink: "#0E3E52" },
    neighborhoodSlugs: ["plaka", "monastiraki", "koukaki", "kolonaki", "psyrri"],
    nearbyCitySlugs: [],
  },

  neighborhoods: [
    {
      slug: "plaka",
      citySlug: "athens",
      name: "Plaka",
      lat: 37.9714,
      lng: 23.7286,
      bestFor: ["first-time", "romantic", "family"],
      vibe: "The old town wrapped around the northern slope of the Acropolis, a maze of neoclassical houses, bougainvillea, and pedestrian lanes climbing toward the rock. Everything a first-timer wants sits within a ten-minute walk, and the streets are calm and pretty once the day-trippers thin at night. It is the postcard, and you pay a small premium to sleep in it.",
      pros: [
        "Walk to the Acropolis, the ancient Agora, and the Roman Agora with no transit",
        "Traffic-free lanes that are safe, quiet, and lovely to wander at night",
        "Dense with tavernas, cafes, and the island-like Anafiotika steps",
      ],
      cons: [
        "The most touristy dining in the city, with some tavernas coasting on the location",
        "Prices for hotels and food run above the surrounding neighborhoods",
        "Steep, stepped streets that are hard work with a suitcase or a stroller",
      ],
    },
    {
      slug: "monastiraki",
      citySlug: "athens",
      name: "Monastiraki",
      lat: 37.9764,
      lng: 23.7256,
      bestFor: ["first-time", "nightlife", "budget"],
      vibe: "The buzzing hinge of the center, built around a metro-served square where the flea market, the Roman Agora, and the old-town lanes all meet. Rooftop bars here look straight at the floodlit Acropolis, and the streets stay loud and lively past midnight. Central, well-connected, and never dull, if a little chaotic.",
      pros: [
        "Metro hub on lines 1 and 3, direct to the airport and the port at Piraeus",
        "The best-value rooftop bars with a head-on Acropolis view",
        "Walk to the Acropolis, the Agora, Plaka, and Psyrri in minutes",
      ],
      cons: [
        "Noisy day and night around the square and the market streets",
        "Touristy and pickpocket-prone in the busiest flea-market stretches",
        "Fewer quiet, restful hotel rooms than the calmer neighborhoods",
      ],
    },
    {
      slug: "koukaki",
      citySlug: "athens",
      name: "Koukaki",
      lat: 37.9648,
      lng: 23.7256,
      bestFor: ["local", "budget", "family"],
      vibe: "A residential neighborhood just south of the Acropolis, quieter and more local than the old town but still a short walk from the main gate and the Acropolis Museum. Leafy streets hold neighborhood tavernas, third-wave coffee, and a real lived-in feel around Georgiou Olympiou. Calm, well-priced, and increasingly the smart base for repeat visitors.",
      pros: [
        "Walk to the Acropolis south slope, the museum, and Filopappou Hill",
        "Akropoli and Syngrou-Fix metro stations on line 2 for the wider city",
        "Genuine neighborhood dining at fair prices, well off the tourist trail",
      ],
      cons: [
        "Short on sights of its own, you walk out of it to see things",
        "Quieter at night, with a smaller bar scene than Monastiraki or Psyrri",
        "Some blocks near Syngrou Avenue are busy with traffic",
      ],
    },
    {
      slug: "kolonaki",
      citySlug: "athens",
      name: "Kolonaki",
      lat: 37.9795,
      lng: 23.7443,
      bestFor: ["romantic", "local", "family"],
      vibe: "The smart, upscale district on the lower slopes of Lycabettus, full of designer shops, art galleries, and polished cafes where well-dressed Athenians people-watch. It puts you at the foot of the funicular up Lycabettus Hill and a level walk from Syntagma and the museums. Elegant and safe, if pricier and less atmospheric than the old town.",
      pros: [
        "Foot of the Lycabettus funicular for the city's best sunset view",
        "Chic cafes, boutiques, and the excellent Benaki and Cycladic museums nearby",
        "Quiet, safe streets and a genuinely local, residential feel",
      ],
      cons: [
        "A 15-20 minute walk uphill from the Acropolis and Plaka",
        "The most expensive neighborhood for dining and shopping",
        "No metro station inside it, so you walk to Syntagma or Evangelismos",
      ],
    },
    {
      slug: "psyrri",
      citySlug: "athens",
      name: "Psyrri",
      lat: 37.9784,
      lng: 23.7228,
      bestFor: ["nightlife", "local", "budget"],
      vibe: "A gritty former workshop quarter just north of Monastiraki that has turned into the center's nightlife and street-art heart, packed with mezze bars, live rebetiko, and late tavernas. By day it is scruffy and half-shuttered, by night it fills with Athenians eating and drinking under strings of lights. Loud, cheap, and a lot of fun.",
      pros: [
        "The liveliest, most local night out in the center, from mezze to rebetiko",
        "Cheaper food and drink than Plaka a few minutes' walk away",
        "Steps from Monastiraki metro and the main sights",
      ],
      cons: [
        "Noisy until the early hours, a poor pick for light sleepers",
        "Rough and empty-feeling on some blocks by day",
        "Few classic sights, you are here to eat, drink, and wander",
      ],
    },
  ],

  pois: [
    {
      slug: "acropolis",
      citySlug: "athens",
      name: "Acropolis and Parthenon",
      lat: 37.9715,
      lng: 23.7267,
      kind: "sight",
      needsBooking: true,
      tip: "Buy the timed Acropolis ticket online before you travel and take the very first 8am slot or the last two hours before close, because midday summer heat and crowds on the shadeless rock are brutal. The combined Acropolis and sites ticket is much better value and also covers the ancient Agora, the Roman Agora, the Temple of Olympian Zeus, and more over several days. Enter by the quieter south-slope gate near the Acropolis Museum rather than the packed main entrance, and carry water and a hat.",
    },
    {
      slug: "acropolis-museum",
      citySlug: "athens",
      name: "Acropolis Museum",
      lat: 37.9686,
      lng: 23.7286,
      kind: "museum",
      needsBooking: true,
      tip: "Cheap, air-conditioned, and the perfect midday refuge from the heat, so pair it with the rock on the same day and dip in here when the sun is at its worst. Book online to skip the ticket line, then start on the top-floor Parthenon Gallery, whose glass walls frame the real temple on the hill just across the way. The glass floor over the excavated ancient neighborhood at the entrance is worth a slow look on the way in.",
    },
    {
      slug: "ancient-agora",
      citySlug: "athens",
      name: "Ancient Agora and Temple of Hephaestus",
      lat: 37.9755,
      lng: 23.7223,
      kind: "sight",
      needsBooking: false,
      tip: "Covered by the combined Acropolis ticket, so use that rather than paying separately, and come in the morning before the Acropolis crowds spill down here. The Temple of Hephaestus at the top is the best-preserved ancient Greek temple anywhere, far more intact than the Parthenon, and almost never crowded. Do not skip the reconstructed Stoa of Attalos, whose shaded colonnade holds a small, cool museum of everyday Athenian finds.",
    },
    {
      slug: "plaka",
      citySlug: "athens",
      name: "Plaka old quarter",
      lat: 37.9714,
      lng: 23.7286,
      kind: "experience",
      needsBooking: false,
      tip: "Wander the traffic-free lanes early morning for the bougainvillea and empty-street photos, then return after 8pm when the tavernas come alive. Steer off the main souvenir drag of Adrianou toward the quiet upper streets climbing to Anafiotika, where the prices drop and the atmosphere improves. Skip the tavernas with photo menus and touts out front, they trade on the location.",
    },
    {
      slug: "monastiraki-square",
      citySlug: "athens",
      name: "Monastiraki flea market and square",
      lat: 37.9764,
      lng: 23.7256,
      kind: "sight",
      needsBooking: false,
      tip: "The Sunday morning flea market on Avissynias Square is the real one, with genuine junk and antiques, while the daily Ifestou stalls skew to tourist souvenirs. Watch your bag and wallet in the crush, this is the most pickpocket-prone spot in the city. Climb to any rooftop bar off the square at dusk for the head-on Acropolis view over the terracotta roofs.",
    },
    {
      slug: "temple-olympian-zeus",
      citySlug: "athens",
      name: "Temple of Olympian Zeus",
      lat: 37.9693,
      lng: 23.7332,
      kind: "sight",
      needsBooking: false,
      tip: "Included in the combined Acropolis ticket, so there is no reason to buy a separate entry, and 15-20 minutes is plenty for the surviving giant columns. Pair it with Hadrian's Arch right beside it, which is free to see from the street, and the National Garden a short walk north for shade. Late afternoon light turns the marble gold and the crowds are thin here at any hour.",
    },
    {
      slug: "lycabettus-hill",
      citySlug: "athens",
      name: "Lycabettus Hill",
      lat: 37.9829,
      lng: 23.7439,
      kind: "viewpoint",
      needsBooking: false,
      tip: "The highest point in the city and the top sunset spot, with the Acropolis, the sprawl, and the sea laid out below from the chapel terrace. Ride the funicular up from Kolonaki to save the steep climb, then walk down through the pine woods afterward if your knees allow. Arrive 30 minutes before sunset to claim a spot at the cafe railing, and bring a layer, it is breezy up top.",
    },
    {
      slug: "national-archaeological-museum",
      citySlug: "athens",
      name: "National Archaeological Museum",
      lat: 37.9891,
      lng: 23.7326,
      kind: "museum",
      needsBooking: false,
      tip: "The greatest collection of ancient Greek art in the world, north of the center, and worth the trip even if you think you have museum fatigue. Go straight for the gold Mask of Agamemnon, the towering bronze of Zeus or Poseidon, and the Antikythera Mechanism, then wander at will. It is a 15-minute walk or a metro hop from the center, and mornings are quietest, so start here before the afternoon groups.",
    },
    {
      slug: "panathenaic-stadium",
      citySlug: "athens",
      name: "Panathenaic Stadium",
      lat: 37.9682,
      lng: 23.7411,
      kind: "sight",
      needsBooking: false,
      tip: "The all-marble stadium that hosted the first modern Olympics in 1896, and the entry ticket includes an audio guide and the chance to run a lap or stand on the winners' podium. You can get the full effect free from the street railing if you would rather not pay, as the whole horseshoe is visible from outside. Come early or late to have the track to yourself for photos, and pair it with the neighboring National Garden.",
    },
    {
      slug: "anafiotika",
      citySlug: "athens",
      name: "Anafiotika",
      lat: 37.9724,
      lng: 23.7292,
      kind: "experience",
      needsBooking: false,
      tip: "A tiny pocket of whitewashed, island-style houses built into the Acropolis slope by workers from Anafi, it feels like a Cycladic village dropped into the city. Climb the stepped lanes above upper Plaka in the early morning for the blue doors and cats with no crowds at all. There are no shops or cafes up here, it is purely a place to wander, so go quiet and respect that people live behind those doors.",
    },
    {
      slug: "roman-agora",
      citySlug: "athens",
      name: "Roman Agora and Tower of the Winds",
      lat: 37.9743,
      lng: 23.7258,
      kind: "sight",
      needsBooking: false,
      tip: "Covered by the combined Acropolis ticket, and small enough to see in 20 minutes, so fold it into a Plaka wander rather than making a special trip. The octagonal Tower of the Winds is the star, an ancient marble weather station and water clock with carved wind gods on each face, and one of the best-preserved structures of its age. It sits right on the edge of Plaka, so slot it between the ancient Agora and lunch.",
    },
    {
      slug: "acropolis-rooftop-bar",
      citySlug: "athens",
      name: "Acropolis-view rooftop bar",
      lat: 37.9762,
      lng: 23.7255,
      kind: "food",
      needsBooking: true,
      tip: "The signature Athens sundowner is a drink on a Monastiraki rooftop with the floodlit Acropolis dead ahead, and the best-known terraces book out, so reserve a sunset table a day or two ahead. You pay a view premium on drinks, so treat it as one round for the photo rather than a whole dinner. If you skip the reservation, the free public viewpoint on the Areopagus rock below the Acropolis gives a similar sunset for nothing, minus the cocktail.",
    },
    {
      slug: "varvakios-market",
      citySlug: "athens",
      name: "Varvakios Central Market",
      lat: 37.9803,
      lng: 23.7266,
      kind: "food",
      needsBooking: false,
      tip: "The city's raucous central meat and fish market on Athinas Street, open Monday to Saturday roughly 7am to 3pm and closed Sundays, and best mid-morning when it is in full swing. Push through the hanging carcasses to the old tavernas tucked inside the halls, where market workers eat tripe soup and grilled fish at rock-bottom prices. Even if you do not eat here, the surrounding spice, nut, and deli shops on Evripidou are a great, cheap food-souvenir stop.",
    },
    {
      slug: "filopappou-hill",
      citySlug: "athens",
      name: "Filopappou Hill",
      lat: 37.9668,
      lng: 23.7189,
      kind: "viewpoint",
      needsBooking: false,
      tip: "The pine-covered hill facing the Acropolis from the southwest, free and open all hours, with the single best straight-on view of the rock and the Parthenon. Walk up the marble path from the Dionysiou Areopagitou promenade at sunset, when the Acropolis glows and the crowds are on the rock itself, not here. Wear proper shoes, the ancient paths are polished slippery smooth, and carry water as there is no cafe on top.",
    },
  ],

  itineraries: [
    {
      citySlug: "athens",
      days: 2,
      summary:
        "Two days is enough to cover the essential Athens, though it is a full and focused couple of days rather than a relaxed one. In 48 hours you can do the Acropolis and its museum on day one, then the ancient Agora, Plaka, Monastiraki, and a rooftop sunset on day two, eating well both nights in the old town. What you have to cut: the superb National Archaeological Museum, a Lycabettus or Filopappou sunset climb, and any day trip out of the city, so this is the classic-highlights version. It suits a weekend break, a stopover on the way to the islands, or a first taste of the city. The one non-negotiable: pre-book the timed Acropolis ticket and take the 8am opening slot, because the shadeless rock is punishing by mid-morning in warm months. Base yourself in Plaka so both mornings start on foot at the sites and the evenings put you steps from dinner. If you get a third day, add the National Archaeological Museum and a sunset hill, the single best upgrade.",
      stayNeighborhoodSlug: "plaka",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "The Acropolis and its museum",
          morning: [
            {
              poiSlug: "acropolis",
              text: "Be at the Acropolis for your pre-booked 8am slot, entering by the quieter south-slope gate, and walk up to the Parthenon before the heat and the tour groups arrive. Circle the Erechtheion and the Propylaea, then stop at the Areopagus rock on the way down for a free panorama over the city.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Lunch in Koukaki or on the pedestrian Dionysiou Areopagitou promenade below the south slope, a short level walk from the museum. Take your time out of the midday sun before the afternoon indoors.",
              durationMin: 75,
            },
            {
              poiSlug: "acropolis-museum",
              text: "Duck into the cool, air-conditioned Acropolis Museum for the hottest part of the day, starting on the top-floor Parthenon Gallery that frames the real temple across the way. The glass floor over the excavated ancient street at the entrance is worth a slow look on your way in.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "plaka",
              text: "Wander up into Plaka as the light softens, climbing the quiet upper lanes toward Anafiotika before the tavernas fill. Book a table off the main souvenir drag for around 8:30 and settle in for a long Greek dinner.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Ancient Agora, old town, and a rooftop sunset",
          morning: [
            {
              poiSlug: "ancient-agora",
              text: "Start at the ancient Agora on your combined ticket, before the Acropolis crowds spill downhill, and climb to the near-perfect Temple of Hephaestus at the top. Duck into the shaded Stoa of Attalos and its small museum of everyday Athenian finds.",
              durationMin: 90,
            },
            {
              poiSlug: "roman-agora",
              text: "Walk a few minutes to the Roman Agora and its octagonal Tower of the Winds, the ancient marble weather station carved with wind gods. It is small, so 20 minutes covers it before you move into the lanes.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "monastiraki-square",
              text: "Head to Monastiraki square and the flea market, browsing the antiques and junk stalls, and keep a hand on your bag in the crush. Grab a cheap souvlaki from one of the famous grill spots off the square for a standing lunch.",
              durationMin: 90,
            },
            {
              poiSlug: "anafiotika",
              text: "Loop back up through Plaka to the whitewashed island-style lanes of Anafiotika, climbing the steps for the blue doors and the quiet away from the market. Go slow and respectful, people live behind these doors.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "acropolis-rooftop-bar",
              text: "Reserve a sunset table at a Monastiraki rooftop bar for a drink with the floodlit Acropolis dead ahead. Treat it as one round for the view, then drop back down for dinner in Psyrri or Plaka.",
              durationMin: 90,
            },
            {
              text: "Finish with a mezze dinner in Psyrri, a few minutes' walk from Monastiraki, where the food is cheaper and livelier than the old town. Live rebetiko music is easy to find here on any busy night.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "athens",
      days: 3,
      summary:
        "Yes, three days is the right length for Athens, and it is what we recommend for a first visit. It gives the Acropolis and its museum a full unhurried morning and afternoon, the ancient Agora and the old-town lanes their own day with a rooftop sunset, and a third day for the world-class National Archaeological Museum plus a Lycabettus climb and the smarter Kolonaki side of town. You eat in three different neighborhoods, fit both a Plaka taverna and a Psyrri mezze night, and still move at a pace that lets you sit in a square rather than sprint through it. What still gets cut is a day trip out of the city, which is exactly what a fourth day adds. This suits first-timers, couples, and anyone breaking a journey to the islands. Stay in Koukaki: it walks to the Acropolis south slope and the museum, sits on the metro for the wider city, and its neighborhood tavernas beat the old-town tourist traps. Pre-book the timed Acropolis ticket and take the 8am slot before you fly.",
      stayNeighborhoodSlug: "koukaki",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "The Acropolis, its museum, and Filopappou",
          morning: [
            {
              poiSlug: "acropolis",
              text: "Be at the Acropolis for your pre-booked 8am slot, using the quieter south-slope gate near your Koukaki base, and reach the Parthenon before the heat builds. Circle the Erechtheion and the Propylaea, then descend via the Areopagus rock for a free city panorama.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Lunch on the Dionysiou Areopagitou promenade or back in Koukaki, out of the midday sun, before the afternoon indoors. This is the pause the day is built around.",
              durationMin: 75,
            },
            {
              poiSlug: "acropolis-museum",
              text: "Spend the hot afternoon in the cool Acropolis Museum, starting on the top-floor Parthenon Gallery whose glass walls frame the temple you just walked. Linger over the caryatids and the glass floor above the ancient excavation.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "filopappou-hill",
              text: "Walk up pine-covered Filopappou Hill for sunset, the best straight-on view of the floodlit Acropolis, free and open all hours. Wear proper shoes for the polished marble paths, then come down for dinner in Koukaki.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Ancient Agora, old town, and a rooftop sunset",
          morning: [
            {
              poiSlug: "ancient-agora",
              text: "Start at the ancient Agora on your combined ticket, ahead of the crowds spilling down from the rock, and climb to the intact Temple of Hephaestus. Cool off in the reconstructed Stoa of Attalos and its small museum.",
              durationMin: 90,
            },
            {
              poiSlug: "roman-agora",
              text: "Cut across to the Roman Agora and the octagonal Tower of the Winds, the carved ancient weather station, on the same ticket. Twenty minutes covers it before you slide into the Plaka lanes.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "plaka",
              text: "Wander Plaka and climb to the whitewashed steps of Anafiotika, stopping for a slow lunch on a quiet upper lane away from the souvenir drag. This is the afternoon to drift rather than tick things off.",
              durationMin: 120,
            },
            {
              poiSlug: "monastiraki-square",
              text: "Drop down to Monastiraki square and its flea market, browsing the stalls and watching your bag in the crowds. Time it so you are near the rooftops as the light starts to go.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "acropolis-rooftop-bar",
              text: "Take your reserved sunset table at a Monastiraki rooftop for a drink with the lit Acropolis ahead. One round for the view, then down to dinner.",
              durationMin: 90,
            },
            {
              text: "Dinner in Psyrri, a short walk away, for mezze, live rebetiko, and the liveliest, best-value night in the center. Book a table on a weekend, the good spots fill fast.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "National Archaeological Museum, Lycabettus, and Kolonaki",
          morning: [
            {
              poiSlug: "national-archaeological-museum",
              text: "Go early to the National Archaeological Museum, the finest collection of ancient Greek art anywhere, a 15-minute walk or metro hop north of the center. Head straight for the gold Mask of Agamemnon, the great bronze of Zeus or Poseidon, and the Antikythera Mechanism, then wander at will.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "panathenaic-stadium",
              text: "Cross town to the all-marble Panathenaic Stadium, home of the first modern Olympics, where the ticket lets you run a lap and stand on the podium. Pair it with a stroll through the shaded National Garden right beside it.",
              durationMin: 90,
            },
            {
              text: "Wander up into smart Kolonaki for coffee and window-shopping among the galleries and boutiques, or the Cycladic Art or Benaki museums if you still have appetite. Settle in near the Lycabettus funicular for the climb to come.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "lycabettus-hill",
              text: "Ride the funicular up Lycabettus Hill for sunset, the highest viewpoint in the city, with the Acropolis, the sprawl, and the sea below. Arrive 30 minutes before sundown for a spot at the railing and bring a layer against the breeze.",
              durationMin: 90,
            },
            {
              text: "Come down for a farewell dinner in Kolonaki or back in Koukaki, spending up on your last Athens meal. Grilled fish, a spread of mezze, and a carafe of local wine is the classic send-off.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "athens",
      days: 4,
      summary:
        "Four days is the sweet spot for Athens, turning a sightseeing sprint into a proper holiday with a day to leave the city. Days one to three cover the essentials without rushing: the Acropolis and its museum, the ancient Agora with the old-town lanes and a rooftop sunset, and the National Archaeological Museum paired with a Lycabettus climb. Day four is the release valve, a trip out to the sea, either the Temple of Poseidon at Cape Sounion for a clifftop sunset over the Aegean, or a fast ferry from Piraeus to the island of Aegina or Hydra for a swim, a harbor lunch, and a slower pace. This length suits travelers who hate the forced march, couples, and anyone who wants the classic Greek island-and-sea day without leaving Athens behind. For four days we recommend basing in Monastiraki: it is the transport hub for the airport, the port, and the day trip, and its rooftops and street life make coming home each night part of the fun. Book the timed Acropolis ticket well ahead and take an early slot.",
      stayNeighborhoodSlug: "monastiraki",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "The Acropolis and its museum",
          morning: [
            {
              poiSlug: "acropolis",
              text: "Be at the Acropolis for your booked 8am slot, entering by the quieter south-slope gate, and reach the Parthenon before the heat and crowds. Circle the Erechtheion and Propylaea, then take in the free city view from the Areopagus rock on the way down.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Lunch on the Dionysiou Areopagitou promenade below the south slope, a level walk from the museum, and get out of the midday sun. Keep it light before the afternoon indoors.",
              durationMin: 75,
            },
            {
              poiSlug: "acropolis-museum",
              text: "Spend the hot afternoon in the cool Acropolis Museum, starting on the top-floor Parthenon Gallery that frames the real temple across the valley. The glass floor over the ancient excavation at the entrance rewards a slow look.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "acropolis-rooftop-bar",
              text: "Take a reserved sunset table on a Monastiraki rooftop near your base for a drink with the lit Acropolis ahead. One round for the view, then dinner nearby.",
              durationMin: 90,
            },
            {
              text: "Dinner in Psyrri, minutes from your Monastiraki base, for mezze and the liveliest night in the center. Ease into the neighborhood you are calling home.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Ancient Agora, Roman Agora, and the old town",
          morning: [
            {
              poiSlug: "ancient-agora",
              text: "Start at the ancient Agora on your combined ticket, before the Acropolis crowds spill down, and climb to the intact Temple of Hephaestus. Cool off in the Stoa of Attalos and its museum of everyday finds.",
              durationMin: 90,
            },
            {
              poiSlug: "roman-agora",
              text: "Walk to the Roman Agora and its octagonal Tower of the Winds, the ancient marble weather station carved with wind gods, on the same ticket. Twenty minutes here before the lanes.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "plaka",
              text: "Wander Plaka at a slow pace, climbing to the whitewashed island-style steps of Anafiotika above the souvenir drag. Stop for a long lunch on a quiet upper lane.",
              durationMin: 120,
            },
            {
              poiSlug: "temple-olympian-zeus",
              text: "Walk to the Temple of Olympian Zeus and Hadrian's Arch on your combined ticket, where the surviving giant columns glow in the afternoon light. The crowds are thin here at any hour.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "monastiraki-square",
              text: "Drift back through Monastiraki square in the evening, browsing the stalls and soaking up the buzz. Grab a cheap souvlaki from a famous grill spot off the square if you want a casual bite.",
              durationMin: 60,
            },
            {
              text: "Dinner back in Psyrri or Plaka, booking ahead for anywhere with a name. Live rebetiko is easy to find in Psyrri on a busy night.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "National Archaeological Museum and Lycabettus",
          morning: [
            {
              poiSlug: "national-archaeological-museum",
              text: "Go early to the National Archaeological Museum, the greatest collection of ancient Greek art in the world, a short walk or metro hop north. Head for the Mask of Agamemnon, the great bronze of Zeus or Poseidon, and the Antikythera Mechanism first, then wander.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "panathenaic-stadium",
              text: "Cross town to the all-marble Panathenaic Stadium, home of the first modern Olympics, and run a lap or stand on the podium with your ticket. Pair it with the shaded National Garden right next door.",
              durationMin: 90,
            },
            {
              text: "Wander up into Kolonaki for coffee and boutiques, or the Cycladic Art or Benaki museums if you still have the appetite. Position yourself near the Lycabettus funicular for the sunset climb.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "lycabettus-hill",
              text: "Ride the funicular up Lycabettus Hill for sunset, the city's highest viewpoint, with the Acropolis and the sea spread out below. Arrive 30 minutes early for a railing spot and bring a layer against the breeze.",
              durationMin: 90,
            },
            {
              text: "Dinner in Kolonaki or back near Monastiraki, wherever your legs land. Save some energy, tomorrow you leave the city for the sea.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Sea day: Cape Sounion or an island hop",
          morning: [
            {
              text: "Take the day out of the city to the sea. Either ride the coastal bus or a tour down to the Temple of Poseidon at Cape Sounion, a clifftop ruin above the Aegean about 70 km south, timed for the famous sunset. Or catch a fast ferry from Piraeus to Aegina, an easy 40-minute hop, for pistachio orchards, a harbor front, and a swim.",
              durationMin: 240,
            },
          ],
          afternoon: [
            {
              text: "If you chose an island, spend the afternoon on Aegina or push on to prettier Hydra, where cars are banned and donkeys still work the stone lanes, with a long harbor-taverna lunch and a swim off the rocks. If you chose Sounion, break the coast road at one of the Athenian Riviera beaches for a swim before the temple.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              text: "For Sounion, be at the Temple of Poseidon for sunset, when the marble columns catch the last light over the sea, then ride back into town. For the islands, take an early-evening ferry back to Piraeus and the metro up to the center.",
              durationMin: 120,
            },
            {
              text: "Farewell dinner back near Monastiraki, a short walk from your bed with no onward journey to plan, which is the whole point of basing here. Go classic on grilled fish and mezze for the last Athens night.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
  ],
};

export default athens;
