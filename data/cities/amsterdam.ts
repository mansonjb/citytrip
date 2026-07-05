import type { CityData } from "../types";

const amsterdam: CityData = {
  city: {
    slug: "amsterdam",
    name: "Amsterdam",
    country: "Netherlands",
    countrySlug: "netherlands",
    lat: 52.3676,
    lng: 4.9041,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "AMS",
    airportToCenter:
      "Direct train from Schiphol to Amsterdam Centraal, about 17 minutes for around 5 EUR, running every few minutes from early morning to late at night. Buy a ticket from the yellow machines or tap a contactless card at the gates; skip the taxis, which cost 40 to 50 EUR for the same trip.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9],
    avoidMonths: [1],
    monthlyNotes: {
      1: "The coldest, greyest month with highs near 6C, short daylight and frequent rain, so plan museum-heavy days. Crowds are thin and hotel rates hit their yearly low once the New Year passes, but the Amsterdam Light Festival illuminated boat route runs through mid-January and is the one reason to brave the dark.",
      2: "Still cold and wet at around 7C, and the quietest full month for sights and rates. Book the Anne Frank House and Van Gogh Museum and you will move through them with room to breathe; pack a proper waterproof rather than an umbrella, which the canal wind destroys.",
      3: "Highs climb toward 10C and the tulip season begins: Keukenhof gardens open in the second half of the month and run to mid-May. Crowds are still moderate, but the first Keukenhof and bulb-field weekends fill fast, so book day-trip transport ahead.",
      4: "Spring proper at around 13C, with Keukenhof at full bloom and the bulb fields south of Haarlem in color. King's Day on 27 April turns the whole city into an orange street party and canal flotilla; it is spectacular but you must book accommodation months ahead and expect everything else to be packed.",
      5: "One of the best months, with highs near 17C, long light evenings and Keukenhof open until mid-month. Crowds build steadily and hotel rates reach shoulder-season highs, so lock in rooms early and start the Anne Frank House and museum visits at opening.",
      6: "Warm at around 20C with the longest daylight of the year and terraces in full swing. Tourist numbers are high but not yet at the August peak; canal-side evenings are the payoff, and outdoor festivals begin filling the Vondelpark open-air theatre calendar.",
      7: "Peak season: 22C days, packed museums and the highest room rates of the summer. Book every timed-entry sight weeks ahead, ride the trams instead of fighting for taxis, and save the canal ring for early morning or after 8pm when the crowds thin.",
      8: "Same warmth and crowds as July, plus Pride: the famous Canal Parade of decorated boats sails the Prinsengracht on the first Saturday, drawing enormous crowds to the water. Book far ahead for that weekend and expect central hotels to sell out completely.",
      9: "Highs around 19C, crowds thinning noticeably after the first week, and the mildest weather of the shoulder season. This is the smart alternative to summer: prices ease, terraces still work on warm days, and the big museums are calmer.",
      10: "Cooler at around 14C with real autumn color in the Vondelpark and more rain returning. Tourist numbers drop and hotel rates follow; a good-value month if you accept that outdoor time is weather-dependent and museums carry the trip.",
      11: "Grey, wet and cold with highs near 9C, the quietest stretch before the holidays. Rates are low and queues short; the Sinterklaas arrival celebrations mid-month and early Christmas lights add some atmosphere to otherwise dark days.",
      12: "Cold at around 6C with short days and frequent drizzle, but the Amsterdam Light Festival launches its illuminated canal art route in late November and runs into January. Christmas markets and lit bridges lift the mood; book the Anne Frank House and museums early, as the holiday week sees a spike in visitors.",
    },
    climate: {
      1: { highC: 6, lowC: 1, rainyDays: 12 },
      2: { highC: 7, lowC: 1, rainyDays: 10 },
      3: { highC: 10, lowC: 3, rainyDays: 11 },
      4: { highC: 13, lowC: 5, rainyDays: 10 },
      5: { highC: 17, lowC: 8, rainyDays: 10 },
      6: { highC: 20, lowC: 11, rainyDays: 11 },
      7: { highC: 22, lowC: 13, rainyDays: 11 },
      8: { highC: 22, lowC: 13, rainyDays: 11 },
      9: { highC: 19, lowC: 11, rainyDays: 11 },
      10: { highC: 14, lowC: 8, rainyDays: 12 },
      11: { highC: 9, lowC: 5, rainyDays: 13 },
      12: { highC: 6, lowC: 2, rainyDays: 13 },
    },
    budgetLevel: "high",
    budgetPerDay: { budget: 80, mid: 160, high: 320 },
    tagline: "Canals, museums and bikes, all in one walkable ring.",
    heroIntro:
      "Amsterdam fits a world-class art collection, a UNESCO canal ring and a genuine cafe culture into a center you can cross on foot in half an hour. It runs on bikes and trams rather than cars, so the trick is learning to read the traffic and booking the big museums before you arrive. Three days covers the essentials at a humane pace; the rest of the city rewards slowing down along the water.",
    accent: { from: "#2F6E8F", to: "#C46A3A", ink: "#1E3E52" },
    neighborhoodSlugs: ["centrum", "jordaan", "de-pijp", "oud-west", "oost"],
    nearbyCitySlugs: ["bruges"],
  },

  neighborhoods: [
    {
      slug: "centrum",
      citySlug: "amsterdam",
      name: "Centrum (Old Centre)",
      lat: 52.3731,
      lng: 4.8922,
      bestFor: ["first-time", "nightlife"],
      vibe: "The historic core around Dam Square and the canal belt, laced with the oldest streets in the city. By day it is dense with visitors and by night parts of it around the Red Light District get loud, but everything a first-timer wants is within a ten-minute walk. You trade quiet for the shortest possible distances to the headline sights.",
      pros: [
        "Dam Square, the canal ring and the Nine Streets all on foot",
        "Widest choice of hotels and best tram connections",
        "Zero transit needed for a 2-day trip",
      ],
      cons: [
        "Restaurants on the main streets are overpriced and geared to tourists",
        "Noise and stag-party crowds near the Red Light District at night",
        "You pay a clear location premium over De Pijp or Oud-West",
      ],
    },
    {
      slug: "jordaan",
      citySlug: "amsterdam",
      name: "Jordaan",
      lat: 52.3745,
      lng: 4.8799,
      bestFor: ["romantic", "first-time", "local"],
      vibe: "The most photographed quarter in the city: narrow canals, gabled houses, courtyard gardens and independent shops on human-scale streets. It is central but calmer than the Old Centre, with brown cafes where locals still drink. Staying here puts the Anne Frank House and the western canals on your doorstep.",
      pros: [
        "Prettiest canals in Amsterdam and the Anne Frank House nearby",
        "Excellent brown cafes, galleries and Saturday markets",
        "Quiet and residential at night yet a short walk from everything",
      ],
      cons: [
        "Higher room rates than the southern and western districts",
        "Small canal-house hotels often mean steep stairs and no lift",
        "Few large supermarkets and limited budget dining",
      ],
    },
    {
      slug: "de-pijp",
      citySlug: "amsterdam",
      name: "De Pijp",
      lat: 52.3547,
      lng: 4.8925,
      bestFor: ["local", "budget", "nightlife"],
      vibe: "A dense, lively grid south of the center built around the daily Albert Cuyp Market. This is where young Amsterdammers eat and drink, so the restaurant and bar scene is the best value in the city. The Rijksmuseum and Museum Quarter are a ten-minute walk or one tram stop north.",
      pros: [
        "Best food and nightlife density at fair local prices",
        "Albert Cuyp Market and Sarphatipark on your doorstep",
        "Walking distance to the Museum Quarter",
      ],
      cons: [
        "No canal-ring sights in the district itself",
        "Busy and noisy on the main market and bar streets",
        "Popular enough now that rooms are no longer cheap",
      ],
    },
    {
      slug: "oud-west",
      citySlug: "amsterdam",
      name: "Oud-West",
      lat: 52.3639,
      lng: 4.8686,
      bestFor: ["local", "family", "budget"],
      vibe: "A residential district west of the Vondelpark with tree-lined streets and the buzzing Foodhallen food court at its heart. It is where families and professionals live, so it feels lived-in rather than touristed, and rates run below the canal ring. Trams put the center ten minutes away.",
      pros: [
        "The Vondelpark and Foodhallen within a few minutes",
        "Calmer, family-friendly streets at better prices",
        "Fast tram lines straight to the center and Museum Quarter",
      ],
      cons: [
        "You commute to every major sight, even if the commute is short",
        "No canals or landmark buildings in the district itself",
        "Quieter nightlife than De Pijp or the center",
      ],
    },
    {
      slug: "oost",
      citySlug: "amsterdam",
      name: "Oost (East)",
      lat: 52.3603,
      lng: 4.9268,
      bestFor: ["local", "budget", "family"],
      vibe: "A broad, up-and-coming district east of the center around Oosterpark, mixing renovated 19th-century blocks with a strong multicultural food scene. It is the value play: quiet leafy streets, real neighborhood restaurants and rooms well below the center. The metro and trams reach the core in ten to fifteen minutes.",
      pros: [
        "Lowest central-ish room rates in the city",
        "Diverse, authentic food scene with almost no tourist markup",
        "Oosterpark, Artis zoo and the Tropenmuseum nearby",
      ],
      cons: [
        "Furthest of these districts from the canal-ring sights",
        "Spread out, so you rely on tram or metro rather than walking",
        "Fewer landmark attractions within the district",
      ],
    },
  ],

  pois: [
    {
      slug: "rijksmuseum",
      citySlug: "amsterdam",
      name: "Rijksmuseum",
      lat: 52.36,
      lng: 4.8852,
      kind: "museum",
      needsBooking: true,
      tip: "Book a timed entry slot online and take the earliest one at 9am, when the Gallery of Honour with Vermeer and the huge Rembrandt Night Watch is still uncrowded. The garden and the passage under the building are free to walk through, and the museum cafe queue is worst around 1pm, so eat early or late.",
    },
    {
      slug: "van-gogh-museum",
      citySlug: "amsterdam",
      name: "Van Gogh Museum",
      lat: 52.3584,
      lng: 4.8811,
      kind: "museum",
      needsBooking: true,
      tip: "Entry is by timed slot only and there is no ticket desk for walk-ups, so book online before you arrive and pick a slot right at 9am opening or after 3pm to dodge the midday crush. It sits two minutes from the Rijksmuseum, so pair the two on one Museum Quarter morning rather than splitting them across days.",
    },
    {
      slug: "anne-frank-house",
      citySlug: "amsterdam",
      name: "Anne Frank House",
      lat: 52.3752,
      lng: 4.884,
      kind: "museum",
      needsBooking: true,
      tip: "This is the one to plan the whole trip around: all tickets are sold online only, released exactly six weeks ahead at a set time, and the slots sell out within minutes. There is no walk-up line at all, so set a calendar reminder for the release day and buy the instant they go live. Once inside, the timed route through the hidden annex takes about an hour.",
    },
    {
      slug: "canal-cruise",
      citySlug: "amsterdam",
      name: "Canal Cruise",
      lat: 52.3644,
      lng: 4.8916,
      kind: "experience",
      needsBooking: false,
      tip: "Skip the giant glass-roofed boats near Centraal and pick a small open electric boat from the Rijksmuseum or Anne Frank House jetties for a quieter hour on the water. Go around sunset for the best light on the gabled houses, and book a specific departure online in summer, when the popular small-boat operators fill up.",
    },
    {
      slug: "vondelpark",
      citySlug: "amsterdam",
      name: "Vondelpark",
      lat: 52.3579,
      lng: 4.8686,
      kind: "park",
      needsBooking: false,
      tip: "The city's central green lung, free and open all hours, best entered from the Museum Quarter side and walked west with a coffee. On summer weekends the open-air theatre near the center runs free concerts and shows; check the schedule, because it is the best free evening in Amsterdam when the weather holds.",
    },
    {
      slug: "jordaan-canals",
      citySlug: "amsterdam",
      name: "Jordaan Canals Walk",
      lat: 52.374,
      lng: 4.881,
      kind: "sight",
      needsBooking: false,
      tip: "Walk the Prinsengracht, Bloemgracht and the little Egelantiersgracht on foot with no fixed route; this is the prettiest and least commercial stretch of the canal ring. Come before 10am or after 7pm for photos without crowds, and detour into the free Karthuizerhof courtyard, a quiet almshouse garden most visitors walk straight past.",
    },
    {
      slug: "albert-cuyp-market",
      citySlug: "amsterdam",
      name: "Albert Cuyp Market",
      lat: 52.3556,
      lng: 4.8916,
      kind: "food",
      needsBooking: false,
      tip: "The largest daily street market in the Netherlands, open Monday to Saturday roughly 9am to 5pm and closed Sundays, so plan around that. Come for a fresh stroopwafel pressed to order and Dutch cheese samples rather than souvenirs, and go before noon on Saturday, the busiest slot, if you want room to move.",
    },
    {
      slug: "begijnhof",
      citySlug: "amsterdam",
      name: "Begijnhof",
      lat: 52.3691,
      lng: 4.8899,
      kind: "sight",
      needsBooking: false,
      tip: "A hushed medieval courtyard of almshouses hidden behind an unmarked door off the Spui square, free to enter and one of the oldest spots in the city. Keep your voice down, since people still live here, and look for the black wooden house at number 34, the oldest surviving timber house in Amsterdam. Open daytime hours only.",
    },
    {
      slug: "dam-square",
      citySlug: "amsterdam",
      name: "Dam Square & Royal Palace",
      lat: 52.3731,
      lng: 4.8926,
      kind: "sight",
      needsBooking: false,
      tip: "Treat the square itself as a 15-minute walk-through for the National Monument and the palace facade rather than a destination. The Royal Palace interior is worth the ticket only if the King is not using it, so check the website for closures before paying; otherwise photograph the front and move on to the Nine Streets nearby.",
    },
    {
      slug: "bloemenmarkt",
      citySlug: "amsterdam",
      name: "Bloemenmarkt Floating Flower Market",
      lat: 52.3667,
      lng: 4.8918,
      kind: "sight",
      needsBooking: false,
      tip: "The floating flower market on the Singel is a five-minute stop, so fold it into a walk between Dam Square and the Rijksmuseum rather than making a special trip. The tulip bulbs sold here are certified for export if you want to carry some home; check your own country's import rules first, as many require the phytosanitary label the stalls provide.",
    },
    {
      slug: "nine-streets",
      citySlug: "amsterdam",
      name: "The Nine Streets (De 9 Straatjes)",
      lat: 52.369,
      lng: 4.8859,
      kind: "sight",
      needsBooking: false,
      tip: "Nine short cross-streets linking the main canals between the Jordaan and Dam, packed with independent boutiques, vintage shops and small cafes. This is the best area for an unhurried browse and a canal-house lunch; come on a weekday to avoid the weekend shopping crush, and note most independent shops open late, around 11am.",
    },
    {
      slug: "foodhallen",
      citySlug: "amsterdam",
      name: "Foodhallen",
      lat: 52.3665,
      lng: 4.8697,
      kind: "food",
      needsBooking: false,
      tip: "An indoor food hall in a converted tram depot in Oud-West, with a couple of dozen stalls under one roof, ideal on a rainy day or for a group that cannot agree. It gets packed and loud from 7pm on weekends, so arrive by 6pm for a table, and pay by card, as most stalls do not take cash.",
    },
    {
      slug: "adam-lookout",
      citySlug: "amsterdam",
      name: "A'DAM Lookout",
      lat: 52.3841,
      lng: 4.9008,
      kind: "viewpoint",
      needsBooking: false,
      tip: "A rooftop viewpoint across the IJ river with Europe's highest swing, reached by a free ferry that leaves right behind Centraal station every few minutes and takes about three minutes. Book the swing slot online to skip a wait, go near sunset for the best light over the city, and remember the ferry runs all night if you stay for a drink at the top.",
    },
    {
      slug: "heineken-experience",
      citySlug: "amsterdam",
      name: "Heineken Experience",
      lat: 52.3577,
      lng: 4.8916,
      kind: "experience",
      needsBooking: true,
      tip: "A self-guided brand tour in the old brewery near De Pijp, best booked online for a discount over the gate price and a fixed entry time that skips the queue. Take the earliest slot to avoid the afternoon school and stag-group waves, and know it is more marketing than working brewery, so treat it as an hour of fun rather than a serious beer tour.",
    },
  ],

  itineraries: [
    {
      citySlug: "amsterdam",
      days: 2,
      summary:
        "Two days is enough for Amsterdam's headline sights if you book ahead and stay central, but you will only skim the neighborhoods that make the city worth returning to. The center is compact: the canal ring, the Museum Quarter and the Jordaan sit within a 25-minute walk of each other, so a tight plan covers the Rijksmuseum, the Van Gogh Museum and the Anne Frank House plus a canal walk without much transit. Base yourself in the Centrum so both mornings start on foot. The structure that works is one theme per day: the Museum Quarter and Vondelpark on day one, the canal ring, the Jordaan and the Anne Frank House on day two. Book three things before you arrive, because tickets are the only real threat to a 48-hour visit: the Anne Frank House the moment its slots release six weeks ahead, and timed slots for the Van Gogh Museum and Rijksmuseum. What you sacrifice is De Pijp, the markets and any slow canal-side evening, which is exactly what a third day buys.",
      stayNeighborhoodSlug: "centrum",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Museum Quarter and Vondelpark",
          morning: [
            {
              poiSlug: "rijksmuseum",
              text: "Start at the Rijksmuseum on a pre-booked 9am slot and head straight for the Gallery of Honour to see the Night Watch and the Vermeers before the rooms fill. Give it two hours and do not try to see everything.",
              durationMin: 120,
            },
            {
              poiSlug: "van-gogh-museum",
              text: "Walk two minutes across the Museumplein to the Van Gogh Museum for your timed slot. The collection runs chronologically, so follow the floors in order to watch his style change.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Lunch on or near the Museumplein, then browse the free sculpture garden behind the Rijksmuseum and the I amsterdam letters for the classic photo.",
              durationMin: 75,
            },
            {
              poiSlug: "vondelpark",
              text: "Enter the Vondelpark from the Museum Quarter side and walk its length with a coffee, stopping at the pond and the open-air theatre. It is free and the best way to reset after two museums.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "canal-cruise",
              text: "Take a small open electric-boat canal cruise around sunset from the Rijksmuseum jetty, avoiding the big glass-roofed boats near Centraal. An hour on the water frames the whole canal ring for you.",
              durationMin: 75,
            },
            {
              text: "Dinner in the center off the main tourist streets; walk one block back from Dam Square or the Leidseplein and prices and quality both improve sharply.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Canal ring, the Jordaan and Anne Frank",
          morning: [
            {
              poiSlug: "anne-frank-house",
              text: "Arrive for your pre-booked Anne Frank House slot; there is no walk-up option, so this ticket had to be bought the day it released six weeks ahead. The timed route through the hidden annex takes about an hour and lands hardest early in the day.",
              durationMin: 75,
            },
            {
              poiSlug: "jordaan-canals",
              text: "Step straight out into the Jordaan and walk the Prinsengracht, Bloemgracht and Egelantiersgracht with no fixed route, detouring into the free Karthuizerhof almshouse courtyard.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "nine-streets",
              text: "Cross into the Nine Streets for a canal-house lunch and an unhurried browse of the independent shops between the main canals. Most open around 11am, so early afternoon is the sweet spot.",
              durationMin: 105,
            },
            {
              poiSlug: "begijnhof",
              text: "Slip through the unmarked door off the Spui into the hushed Begijnhof courtyard, then look for the black wooden house at number 34, the oldest in the city. Keep your voice down; people still live here.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "dam-square",
              text: "Walk through Dam Square for the Royal Palace facade and the National Monument, treating it as a 15-minute pass-through rather than a stop, then loop past the Bloemenmarkt flower stalls on the Singel.",
              durationMin: 45,
            },
            {
              text: "Finish with a drink at a brown cafe in the Jordaan, the kind with sand on the floor and locals at the bar, for the most Amsterdam evening the center offers.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
    {
      citySlug: "amsterdam",
      days: 3,
      summary:
        "Three days is the right amount of time for Amsterdam: enough for the big three museums and the canal ring at a humane pace, plus one day that belongs to the neighborhoods rather than the checklist. Two days forces you to sprint the Museum Quarter and the canals back to back; the third day adds De Pijp, the Albert Cuyp Market and a rooftop view across the IJ, with time to sit at a cafe without watching the clock. Stay in the Jordaan, the prettiest and calmest central quarter, so the Anne Frank House and the western canals are on your doorstep and evenings stay quiet. The shape of the plan: the Museum Quarter and Vondelpark on day one, the canal ring and the Jordaan on day two, De Pijp and the north bank on day three. Book three things online before arrival: the Anne Frank House the instant its slots release six weeks out, and timed entries for the Van Gogh Museum and Rijksmuseum. Everything else rewards showing up early and riding the trams instead of taxis.",
      stayNeighborhoodSlug: "jordaan",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Museum Quarter and Vondelpark",
          morning: [
            {
              poiSlug: "rijksmuseum",
              text: "From your Jordaan base, tram down to the Rijksmuseum for a 9am slot and make straight for the Gallery of Honour and the Night Watch before the crowds build.",
              durationMin: 120,
            },
            {
              poiSlug: "van-gogh-museum",
              text: "Cross the Museumplein to the Van Gogh Museum for your timed entry and follow the floors in chronological order to watch the work transform.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Lunch near the Museumplein, then walk the free sculpture garden behind the Rijksmuseum and photograph the I amsterdam letters.",
              durationMin: 75,
            },
            {
              poiSlug: "vondelpark",
              text: "Walk the length of the Vondelpark from the Museum Quarter end, stopping at the open-air theatre, which runs free shows on summer weekends. This is the best free afternoon in the city.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "canal-cruise",
              text: "Take a small open electric-boat cruise at sunset for the best light on the gabled houses, booking a departure ahead in summer when the good operators sell out.",
              durationMin: 75,
            },
            {
              text: "Dinner back in the Jordaan at a small canal-side restaurant, then a nightcap at a brown cafe where the locals drink.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Canal ring and the Jordaan",
          morning: [
            {
              poiSlug: "anne-frank-house",
              text: "Walk to your pre-booked Anne Frank House slot; there is no walk-up line, so this had to be bought the day tickets released six weeks ahead. The timed route through the annex runs about an hour.",
              durationMin: 75,
            },
            {
              poiSlug: "jordaan-canals",
              text: "Explore your own neighborhood on foot: the Prinsengracht, Bloemgracht and Egelantiersgracht, plus the quiet Karthuizerhof courtyard most visitors miss.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "nine-streets",
              text: "Cross into the Nine Streets for lunch in a canal house and a browse of the independent shops. Weekdays are far calmer than the weekend shopping crush.",
              durationMin: 105,
            },
            {
              poiSlug: "begijnhof",
              text: "Duck through the unmarked door off the Spui into the Begijnhof courtyard and find the black wooden house at number 34, the oldest in Amsterdam.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "dam-square",
              text: "Pass through Dam Square for the Royal Palace and the National Monument, then walk the Singel past the Bloemenmarkt floating flower stalls as they close up.",
              durationMin: 60,
            },
            {
              text: "Dinner in the center a block off the main streets, then a slow walk back to the Jordaan along the lamplit Prinsengracht, the canal ring at its best after dark.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "De Pijp, markets and the north bank",
          morning: [
            {
              poiSlug: "albert-cuyp-market",
              text: "Tram to De Pijp for the Albert Cuyp Market before noon, when it is liveliest but still walkable. Get a stroopwafel pressed to order and graze the cheese and food stalls rather than the souvenirs.",
              durationMin: 90,
            },
            {
              text: "Wander south into the small Sarphatipark and the cafe-lined side streets of De Pijp, the district where young Amsterdammers actually eat and drink.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "heineken-experience",
              text: "Do the Heineken Experience nearby on a pre-booked slot if you want the brand tour, treating it as a fun hour rather than a serious brewery visit; otherwise spend the time on more De Pijp cafes.",
              durationMin: 105,
            },
            {
              text: "Tram to Centraal and take the free three-minute ferry from behind the station across the IJ to Amsterdam Noord.",
              durationMin: 30,
            },
          ],
          evening: [
            {
              poiSlug: "adam-lookout",
              text: "Ride the lift up the A'DAM Lookout for the rooftop view over the city near sunset, and take the swing off the roof if you have a head for heights. Book the swing slot ahead to skip the wait.",
              durationMin: 90,
            },
            {
              text: "Have dinner on the Noord waterfront looking back at the skyline, then catch the ferry back; it runs all night, so there is no rush.",
              durationMin: 105,
            },
          ],
        },
      ],
    },
    {
      citySlug: "amsterdam",
      days: 4,
      summary:
        "Four days is more than enough for Amsterdam's sights, and that is the point: the fourth day turns a museum sprint into an actual trip. Days one to three cover the Museum Quarter, the canal ring, the Jordaan and De Pijp at a relaxed pace; day four is yours for either a slow local day in the eastern neighborhoods or a day trip to Zaanse Schans windmills or Haarlem, both under 30 minutes by train. With this much time, skip the busy center and stay in De Pijp, ten minutes from the Museum Quarter, cheaper than the canal ring, and home to the best-value food and nightlife in the city. The one-theme-per-day logic still applies: keep the two big museums and the Vondelpark together, keep the canals and the Jordaan together, and do not zigzag across the city. Pre-book the Anne Frank House the day its slots release six weeks ahead, plus timed entries for the Van Gogh Museum and Rijksmuseum. If you were choosing between three and four days, the fourth is the one you will remember.",
      stayNeighborhoodSlug: "de-pijp",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Museum Quarter and Vondelpark",
          morning: [
            {
              poiSlug: "rijksmuseum",
              text: "Walk up from De Pijp to the Rijksmuseum for your 9am slot and go straight to the Gallery of Honour for the Night Watch and the Vermeers before the rooms fill.",
              durationMin: 120,
            },
            {
              poiSlug: "van-gogh-museum",
              text: "Cross the Museumplein to the Van Gogh Museum for your timed entry, following the floors in order to trace how his painting changed.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Lunch on the Museumplein, then the free sculpture garden behind the Rijksmuseum and the I amsterdam letters for the photo.",
              durationMin: 75,
            },
            {
              poiSlug: "vondelpark",
              text: "Walk the Vondelpark end to end, pausing at the open-air theatre for a free summer show if the schedule lines up.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "canal-cruise",
              text: "Take a small open-boat canal cruise at sunset from the Rijksmuseum jetty for the best light on the water, booking ahead in high season.",
              durationMin: 75,
            },
            {
              text: "Dinner back in De Pijp, where the restaurant and bar streets around the Albert Cuyp offer the best value in the city, then a drink at a local cafe.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Canal ring and the Jordaan",
          morning: [
            {
              poiSlug: "anne-frank-house",
              text: "Tram to your pre-booked Anne Frank House slot; there is no walk-up line, so this ticket had to be bought the day it released six weeks ahead. The route through the hidden annex takes about an hour.",
              durationMin: 75,
            },
            {
              poiSlug: "jordaan-canals",
              text: "Walk the Jordaan canals, the Prinsengracht, Bloemgracht and Egelantiersgracht, with a detour into the quiet Karthuizerhof almshouse courtyard.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "nine-streets",
              text: "Lunch and browse the Nine Streets between the main canals; pick a weekday to skip the weekend shopping crowds.",
              durationMin: 105,
            },
            {
              poiSlug: "begijnhof",
              text: "Find the hidden Begijnhof courtyard off the Spui and the black wooden house at number 34, then loop past the Bloemenmarkt flower market on the Singel.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "dam-square",
              text: "Walk through Dam Square at dusk for the Royal Palace and National Monument, a 15-minute pass-through rather than a stop.",
              durationMin: 30,
            },
            {
              text: "Dinner in the center a block off the tourist streets, then a walk back along the lamplit Prinsengracht.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "De Pijp, markets and the north bank",
          morning: [
            {
              poiSlug: "albert-cuyp-market",
              text: "Start on your own doorstep at the Albert Cuyp Market before noon, grabbing a fresh stroopwafel and grazing the food stalls. Remember it closes Sundays.",
              durationMin: 90,
            },
            {
              poiSlug: "heineken-experience",
              text: "Do the Heineken Experience nearby on a pre-booked early slot if the brand tour appeals, treating it as a light hour, then wander the Sarphatipark and De Pijp side streets.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Tram to Centraal and take the free three-minute ferry across the IJ to Amsterdam Noord, the city's most changed district.",
              durationMin: 45,
            },
            {
              poiSlug: "adam-lookout",
              text: "Go up the A'DAM Lookout for the rooftop panorama and, if you dare, the swing off the roof. Book the swing slot ahead to avoid the queue.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Have an early dinner on the Noord waterfront looking back at the skyline, then ferry back across the IJ, which runs through the night.",
              durationMin: 105,
            },
            {
              text: "Finish with a nightcap in De Pijp; the bars here run later and cheaper than anything in the center.",
              durationMin: 60,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Local Oost day or Zaanse Schans and Haarlem day trip",
          morning: [
            {
              text: "Option A: tram east into Oost for a slow local morning around Oosterpark, the Tropenmuseum on world cultures, and the multicultural cafes of the Dappermarkt. Option B: take the direct train from Centraal to Zaandijk Zaanse Schans, about 17 minutes, for the working windmills, wooden houses and cheese and clog workshops along the river.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              text: "Option A continues in Oost with lunch in a neighborhood bistro and a walk through the Artis zoo grounds or along the eastern harbor islands. Option B: hop the train onward to Haarlem, 15 minutes from Zaandijk or Amsterdam, for the compact old town, the Grote Markt and the Frans Hals Museum before the return train.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              text: "Either way, end back in De Pijp on the terraces and bars around the Albert Cuyp and Sarphatipark, the district's real evening scene.",
              durationMin: 120,
            },
            {
              text: "Last dinner at a De Pijp restaurant; the area does inventive food at fair prices, a fitting final meal after the center's tourist menus.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
  ],
};

export default amsterdam;
