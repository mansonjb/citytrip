import type { CityData } from "../types";

const copenhagen: CityData = {
  city: {
    slug: "copenhagen",
    name: "Copenhagen",
    country: "Denmark",
    countrySlug: "denmark",
    lat: 55.6761,
    lng: 12.5683,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "CPH",
    airportToCenter:
      "The Metro line M2 runs from Copenhagen Airport (CPH) straight into the center, reaching Kongens Nytorv by Nyhavn in about 15 minutes for roughly 4.50 EUR (36 DKK), every few minutes and through the night. A regional train covers the same trip to Central Station in about 13 minutes if your hotel sits on that side; both beat a taxi that runs 40 EUR or more.",
    centerWalkable: true,
    bestMonths: [5, 6, 7, 8],
    avoidMonths: [1],
    monthlyNotes: {
      1: "The darkest, coldest month with highs around 2C, daylight gone by mid-afternoon and Tivoli Gardens closed after its New Year finale on the first days of the month. Rates hit their yearly floor and sights are empty, so lean into indoor museums, candlelit cafes and the Danish hygge that the locals build the whole season around.",
      2: "Still cold and grey at around 3C, the quietest full month of the year for both crowds and prices. Bring proper layers and a windproof coat for the harbour, book nothing far ahead, and treat this as a museum-and-cafe trip rather than an outdoor one.",
      3: "Highs edge toward 5C and the daylight returns fast, though it stays chilly and often wet. Crowds are thin and rates low; the real marker is late in the month, when Tivoli Gardens reopens for its spring season around the start of April and the mood lifts.",
      4: "Spring arrives at around 10C with Tivoli Gardens open again and the first warm terraces. Easter brings a short local holiday when some shops close, but crowds are still moderate and prices sit below summer, making this a smart shoulder-season window.",
      5: "One of the best months, with highs near 15C, long light evenings and everything open. Crowds build but have not peaked, harbour life restarts and the city feels its most optimistic; book popular restaurants ahead and expect rates to climb toward the summer band.",
      6: "Warm at around 19C with the longest days of the year, when it barely gets dark. Distortion, the huge street party, takes over different neighborhoods across five days in early June, drawing big crowds and loud nights; check the dates, because it either makes or breaks your trip depending on what you want.",
      7: "Peak season at around 21C, packed and pricey, with the Copenhagen Jazz Festival filling squares, courtyards and clubs across ten days in early July. The harbour baths are open, Tivoli runs late, and hotels sell out, so book rooms and any festival tickets well ahead.",
      8: "Still warm at around 21C and busy, the last stretch of full summer before the schools go back. Harbour swimming, late Tivoli evenings and outdoor dining are all at their best; rates stay high early in the month and ease as it closes.",
      9: "Highs around 17C, crowds thinning after the first week and the mildest of the shoulder months. This is the quiet-smart choice: terraces still work on warm days, Tivoli stays open, museums are calm, and prices slide back from the summer peak.",
      10: "Cooler at around 12C with more rain and real autumn color in the parks. Tivoli Gardens runs a popular Halloween season with pumpkin displays through the month, a good reason to visit; otherwise crowds fall and rates follow.",
      11: "Grey, wet and cold with highs near 7C and short days, the last quiet stretch before the holidays. Tivoli Gardens reopens in a Christmas guise around mid-month with lights, stalls and gløgg, and the city's Christmas markets begin, lifting otherwise dark afternoons.",
      12: "Cold at around 4C with the shortest days of the year, but the most atmospheric month indoors. Tivoli's Christmas season, the Nyhavn and Højbro Plads markets, mulled wine and hygge everywhere carry the mood; book accommodation early for the week around Christmas and New Year, which fills up.",
    },
    climate: {
      1: { highC: 2, lowC: -2, rainyDays: 11 },
      2: { highC: 3, lowC: -2, rainyDays: 9 },
      3: { highC: 5, lowC: 0, rainyDays: 9 },
      4: { highC: 10, lowC: 3, rainyDays: 8 },
      5: { highC: 15, lowC: 8, rainyDays: 8 },
      6: { highC: 19, lowC: 11, rainyDays: 8 },
      7: { highC: 21, lowC: 13, rainyDays: 9 },
      8: { highC: 21, lowC: 13, rainyDays: 10 },
      9: { highC: 17, lowC: 10, rainyDays: 9 },
      10: { highC: 12, lowC: 6, rainyDays: 11 },
      11: { highC: 7, lowC: 3, rainyDays: 12 },
      12: { highC: 4, lowC: 0, rainyDays: 11 },
    },
    budgetLevel: "high",
    budgetPerDay: { budget: 90, mid: 180, high: 350 },
    tagline: "Design, harbour swims and cinnamon buns, all on two wheels.",
    heroIntro:
      "Copenhagen packs royal palaces, a working harbour you can swim in and some of the best food in Europe into a compact center you can cross on foot. It is built for bikes first, so the smartest move is to rent one or ride the driverless Metro rather than fight for taxis. Three days covers the royal core, Christiania and the food scene at an easy pace, with time left over to sit by the water.",
    accent: { from: "#3B5BA5", to: "#E86A6A", ink: "#1E2E52" },
    neighborhoodSlugs: [
      "indre-by",
      "nyhavn",
      "vesterbro",
      "norrebro",
      "christianshavn",
    ],
    nearbyCitySlugs: ["berlin"],
  },

  neighborhoods: [
    {
      slug: "indre-by",
      citySlug: "copenhagen",
      name: "Indre By (Old Town)",
      lat: 55.6794,
      lng: 12.5776,
      bestFor: ["first-time", "romantic"],
      vibe: "The medieval core between Strøget, the palaces and the canals, where nearly every headline sight sits within a ten-minute walk. It is dense, handsome and busy by day, quieter once the shops close, and puts you on foot to the Round Tower, Rosenborg and Nyhavn. You pay a clear premium for that convenience.",
      pros: [
        "The Round Tower, Rosenborg, Strøget and Nyhavn all on foot",
        "Best tram-free walkability and Metro links in the city",
        "Zero transit needed for a 2-day trip",
      ],
      cons: [
        "Highest room rates in Copenhagen",
        "Main streets are tourist-priced for food and drink",
        "Fewer local restaurants than Nørrebro or Vesterbro",
      ],
    },
    {
      slug: "nyhavn",
      citySlug: "copenhagen",
      name: "Nyhavn",
      lat: 55.6797,
      lng: 12.5913,
      bestFor: ["first-time", "romantic"],
      vibe: "The postcard of Copenhagen: a short 17th-century canal lined with painted gable houses, wooden boats and terrace bars. Staying on or beside it puts you at the harbour and the royal quarter, though the quay itself is loud and pricey at peak hours. It is beautiful, central and unashamedly touristic.",
      pros: [
        "Iconic canal setting right on the harbour",
        "Steps from the Royal quarter, Amalienborg and canal-boat jetties",
        "Excellent Metro and harbour-bus connections",
      ],
      cons: [
        "Quay restaurants charge a heavy view premium",
        "Noisy and packed on summer evenings",
        "Very few genuine budget beds this close to the water",
      ],
    },
    {
      slug: "vesterbro",
      citySlug: "copenhagen",
      name: "Vesterbro",
      lat: 55.6683,
      lng: 12.5449,
      bestFor: ["nightlife", "local", "budget"],
      vibe: "A former red-light and meatpacking district turned into the city's best-value food and nightlife quarter, a few minutes west of Central Station. The Kødbyen meatpacking blocks run on natural-wine bars, bakeries and restaurants where young Copenhageners actually eat. It feels lived-in and creative rather than polished, with rates below the old town.",
      pros: [
        "Best food and nightlife density at fairer prices",
        "Kødbyen meatpacking bars and Central Station on your doorstep",
        "Walking distance to Tivoli and the city center",
      ],
      cons: [
        "Some streets still feel gritty late at night",
        "No canal or landmark sights in the district itself",
        "Busy and loud around the nightlife blocks after dark",
      ],
    },
    {
      slug: "norrebro",
      citySlug: "copenhagen",
      name: "Nørrebro",
      lat: 55.6949,
      lng: 12.5533,
      bestFor: ["local", "budget", "nightlife"],
      vibe: "The most multicultural and youthful district, north of the lakes, built around the Superkilen park and the buzzing Jægersborggade street. This is where the real neighborhood food scene lives, from bakeries to Middle Eastern grills, at prices well under the center. It is a fifteen-minute walk or a short bus ride from the old town.",
      pros: [
        "Lowest central-ish room rates in the city",
        "Outstanding independent food scene with little tourist markup",
        "Superkilen, Assistens Cemetery and Jægersborggade nearby",
      ],
      cons: [
        "Furthest of these districts from the harbour sights",
        "Spread out, so you rely on bikes or buses more",
        "No Metro on some stretches, though buses are frequent",
      ],
    },
    {
      slug: "christianshavn",
      citySlug: "copenhagen",
      name: "Christianshavn",
      lat: 55.6725,
      lng: 12.5935,
      bestFor: ["local", "romantic", "family"],
      vibe: "A canal-laced island district built by Christian IV, mixing houseboats, cobbled quays and the freetown of Christiania at its edge. It is calmer and more residential than the old town yet one Metro stop or a short walk across the harbour from it. The waterfront cafes and the twisting spire of Vor Frelsers Kirke give it real character.",
      pros: [
        "Pretty canals and houseboats away from the crowds",
        "One Metro stop or a walk to the center, with Christiania next door",
        "Genuine local cafes and the harbour-front on foot",
      ],
      cons: [
        "Fewer hotels, so choice and availability are limited",
        "Quieter nightlife than Vesterbro or Nørrebro",
        "You cross the harbour for most central sights",
      ],
    },
  ],

  pois: [
    {
      slug: "nyhavn",
      citySlug: "copenhagen",
      name: "Nyhavn Harbour",
      lat: 55.6797,
      lng: 12.5911,
      kind: "sight",
      needsBooking: false,
      tip: "This is the photo everyone comes for, best shot from the small bridge at the harbour end in morning light before the terraces fill. Sit here for a drink if you want the view, but eat one street back on Store Strandstræde or in the old town, where the same food costs far less than the quay premium.",
    },
    {
      slug: "tivoli-gardens",
      citySlug: "copenhagen",
      name: "Tivoli Gardens",
      lat: 55.6736,
      lng: 12.5681,
      kind: "experience",
      needsBooking: true,
      tip: "Check the calendar before you plan around it, because Tivoli is seasonal: open roughly April to late September, then for Halloween through October and again from mid-November to New Year for Christmas, and closed in between. Book entry online for a small saving, go in the last hours before closing when the gardens light up, and buy a ride wristband only if you actually plan to ride.",
    },
    {
      slug: "little-mermaid",
      citySlug: "copenhagen",
      name: "The Little Mermaid",
      lat: 55.6929,
      lng: 12.5993,
      kind: "sight",
      needsBooking: false,
      tip: "The statue is small and always ringed by tour groups, so treat it as a five-minute stop folded into a harbour walk rather than a destination in itself. Come early morning for a clear photo, and combine it with the nearby Kastellet star-shaped fortress and the walk down to Amalienborg, which is the real reward of heading up here.",
    },
    {
      slug: "rosenborg-castle",
      citySlug: "copenhagen",
      name: "Rosenborg Castle",
      lat: 55.6857,
      lng: 12.5773,
      kind: "sight",
      needsBooking: true,
      tip: "Book a timed slot online in summer, because the castle interior is small and the queue for the basement crown jewels backs up by midday. Go right at opening, head down to the treasury first while it is quiet, then walk out into the free Kongens Have gardens, the oldest royal park in the city and a fine spot for a picnic.",
    },
    {
      slug: "christiansborg-palace",
      citySlug: "copenhagen",
      name: "Christiansborg Palace & Tower",
      lat: 55.6759,
      lng: 12.5794,
      kind: "sight",
      needsBooking: false,
      tip: "The palace tower is the tallest in the city and, unlike almost everything else here, entirely free to climb by lift, with the best rooftop view over the old town. Go up first, then decide whether to pay for the royal reception rooms and the ruins beneath the building; the tower alone justifies the stop even if you skip the rest.",
    },
    {
      slug: "round-tower",
      citySlug: "copenhagen",
      name: "Round Tower (Rundetaarn)",
      lat: 55.6813,
      lng: 12.5757,
      kind: "viewpoint",
      needsBooking: false,
      tip: "The cheapest central viewpoint in Copenhagen, reached not by stairs but by a wide spiral cobbled ramp that a horse could climb, ending at an open rooftop platform over the old town. Buy the low-cost ticket at the door, go late afternoon for warm light, and look for the small library hall and observatory partway up, both included.",
    },
    {
      slug: "christiania",
      citySlug: "copenhagen",
      name: "Freetown Christiania",
      lat: 55.6761,
      lng: 12.5989,
      kind: "experience",
      needsBooking: false,
      tip: "The self-governing hippie enclave rewards a wander for its murals, workshops, lakeside paths and alternative cafes, but obey the one hard rule: no photos at all on Pusher Street, where signs make it clear. Keep phones away there, explore the greener back lanes and the Green Light District's edges by day, and take it as a living community rather than a tourist attraction.",
    },
    {
      slug: "nationalmuseet",
      citySlug: "copenhagen",
      name: "Nationalmuseet (National Museum)",
      lat: 55.674,
      lng: 12.5751,
      kind: "museum",
      needsBooking: false,
      tip: "Denmark's main history museum is free to enter and the best rainy-day plan in the city, strongest on Viking-age finds like the Sun Chariot and a preserved bog body. Allow ninety minutes, head straight for the prehistory rooms first while you are fresh, and use the family-friendly children's section if you have kids in tow.",
    },
    {
      slug: "torvehallerne",
      citySlug: "copenhagen",
      name: "Torvehallerne Food Market",
      lat: 55.6835,
      lng: 12.5691,
      kind: "food",
      needsBooking: false,
      tip: "Two glass market halls of some sixty stalls near Nørreport, ideal for a smørrebrød open-sandwich lunch, fresh pastries and coffee without the tourist markup of Nyhavn. Come on a weekday around 11am before the lunch rush, try the classic pickled-herring or roast-beef smørrebrød at a counter, and note it closes earlier on Sundays.",
    },
    {
      slug: "amalienborg",
      citySlug: "copenhagen",
      name: "Amalienborg Palace",
      lat: 55.6841,
      lng: 12.5934,
      kind: "sight",
      needsBooking: false,
      tip: "The royal family's home is four palaces around an octagonal square, and the free draw is the changing of the guard at noon each day, biggest when the Queen is in residence and her flag flies. Stand near the guardhouse a few minutes before twelve, then line up the view straight through to the Marble Church on one side and the Opera House across the harbour on the other.",
    },
    {
      slug: "stroget",
      citySlug: "copenhagen",
      name: "Strøget",
      lat: 55.6786,
      lng: 12.5748,
      kind: "sight",
      needsBooking: false,
      tip: "One of Europe's longest pedestrian streets, running about a kilometre from City Hall Square to Kongens Nytorv and useful mainly as the walking spine that links half the old town's sights. Treat it as a route rather than a shopping trip, duck into the quieter side streets and squares like Gråbrødretorv for better cafes, and walk it early to beat the crowds.",
    },
    {
      slug: "reffen",
      citySlug: "copenhagen",
      name: "Reffen Street Food",
      lat: 55.6949,
      lng: 12.6017,
      kind: "food",
      needsBooking: false,
      tip: "A sprawling open-air street-food market of shipping-container kitchens on the Refshaleøen waterfront, best reached by the 991/992 harbour bus, which is a mini boat tour in itself. It runs seasonally from spring to autumn and closes in winter, so check it is open, go for sunset over the water, and pay by card, as most stalls are cashless.",
    },
    {
      slug: "canal-tour",
      citySlug: "copenhagen",
      name: "Canal Boat Tour",
      lat: 55.6797,
      lng: 12.5905,
      kind: "experience",
      needsBooking: false,
      tip: "An hour-long boat loops the harbour and canals past the Opera House, the Little Mermaid, the Black Diamond library and Christianshavn, and is the fastest way to grasp how the city sits on the water. Board at the Nyhavn or Ved Stranden jetties, take an open boat over a glass-roofed one, and go late afternoon for the best light on the facades.",
    },
    {
      slug: "superkilen",
      citySlug: "copenhagen",
      name: "Superkilen Park",
      lat: 55.6994,
      lng: 12.5423,
      kind: "park",
      needsBooking: false,
      tip: "A striking public park in Nørrebro built from objects gathered from dozens of countries, from a Moroccan fountain to Japanese cherry trees, laid out in three color-coded zones. It is free and open all hours; the wavy black-and-white Black Square is the photo, and it pairs naturally with a bakery stop and a wander down nearby Jægersborggade.",
    },
  ],

  itineraries: [
    {
      citySlug: "copenhagen",
      days: 2,
      summary:
        "Two days is enough for Copenhagen's headline sights if you stay central and move on foot or by bike, but you will skim the neighborhoods that give the city its character. The old town is compact: Nyhavn, the royal quarter, the Round Tower, Rosenborg and Tivoli sit within a 25-minute walk of each other, so a tight plan covers them without much transit. Base yourself in Indre By so both mornings start on foot. The structure that works is one theme per day: the royal core and the harbour on day one, the palaces, the Round Tower and Tivoli on day two, with a canal boat tour to tie the waterfront together. Book little in advance beyond a Rosenborg slot in summer and a Tivoli entry if it falls in an open season, since the gardens are shut for stretches of the year. What you give up is Christiania, Vesterbro's food scene and any slow harbour-side afternoon, which is exactly what a third day buys back.",
      stayNeighborhoodSlug: "indre-by",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Harbour and the royal quarter",
          morning: [
            {
              poiSlug: "nyhavn",
              text: "Start at Nyhavn before the terraces fill, shooting the painted houses from the bridge at the harbour end in morning light. Walk the quay once, then move on rather than paying the view premium for breakfast here.",
              durationMin: 45,
            },
            {
              poiSlug: "amalienborg",
              text: "Walk up to Amalienborg for the royal palaces around the octagonal square, timing it for the noon changing of the guard and lining up the view to the Marble Church and the Opera House.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "little-mermaid",
              text: "Continue along the harbour path through the Kastellet star fortress to the Little Mermaid, a quick photo stop rather than a destination, then loop back toward the center.",
              durationMin: 75,
            },
            {
              poiSlug: "canal-tour",
              text: "Board an open canal boat at the Nyhavn jetty for the hour-long harbour loop past the Opera House, the Black Diamond and Christianshavn, the fastest way to read how the city sits on the water.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              text: "Dinner in the old town a street back from Nyhavn, around Gråbrødretorv or the side lanes off Strøget, where prices and quality both improve on the quay.",
              durationMin: 105,
            },
            {
              text: "Finish with a harbour-side walk back along the water, the canals at their calmest once the day boats stop.",
              durationMin: 45,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Palaces, the Round Tower and Tivoli",
          morning: [
            {
              poiSlug: "rosenborg-castle",
              text: "Open the day at Rosenborg Castle on an early slot, heading straight down to the crown jewels in the treasury before the queue builds, then out into the free Kongens Have gardens.",
              durationMin: 105,
            },
            {
              poiSlug: "torvehallerne",
              text: "Walk to the Torvehallerne market halls near Nørreport for a smørrebrød lunch and a pastry, grazing the stalls rather than sitting for a full meal.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "round-tower",
              text: "Climb the Round Tower by its spiral cobbled ramp for the cheap central rooftop view over the old town, pausing at the library hall and observatory on the way up.",
              durationMin: 60,
            },
            {
              poiSlug: "christiansborg-palace",
              text: "Walk down to Christiansborg and take the free lift up its tower, the tallest in the city, for the best rooftop panorama of the day, then look at the palace square below.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "tivoli-gardens",
              text: "If it falls in an open season, spend the evening in Tivoli Gardens, arriving in the last hours before closing when the whole park lights up. Check the calendar first, since it shuts for stretches of the year.",
              durationMin: 150,
            },
          ],
        },
      ],
    },
    {
      citySlug: "copenhagen",
      days: 3,
      summary:
        "Three days is the right amount of time for Copenhagen: enough for the royal core and the harbour at an easy pace, plus one day that belongs to Christiania, the food scene and the water rather than the checklist. Two days forces you to sprint the palaces and the old town back to back; the third adds the freetown of Christiania, the Christianshavn canals and a proper street-food evening, with time to swim in the harbour on a warm day. Stay in Vesterbro, minutes from Central Station and Tivoli, cheaper than the old town and home to the best-value food and nightlife in the city. The shape of the plan: the royal quarter and harbour on day one, the palaces, the Round Tower and Tivoli on day two, Christiania and Christianshavn on day three. Book little ahead beyond a summer Rosenborg slot and a Tivoli entry when the gardens are open. Everything else rewards renting a bike or riding the Metro and starting early.",
      stayNeighborhoodSlug: "vesterbro",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Harbour and the royal quarter",
          morning: [
            {
              poiSlug: "nyhavn",
              text: "Ride in from Vesterbro and start at Nyhavn early, before the terraces fill, for the painted-house photo from the harbour-end bridge.",
              durationMin: 45,
            },
            {
              poiSlug: "amalienborg",
              text: "Walk to Amalienborg for the four royal palaces and the noon changing of the guard, lining up the view through to the Marble Church and across the harbour to the Opera House.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "little-mermaid",
              text: "Follow the harbour path through the Kastellet fortress to the Little Mermaid for a quick photo, then double back toward the center.",
              durationMin: 75,
            },
            {
              poiSlug: "canal-tour",
              text: "Take an open canal boat from the Nyhavn jetty on the hour-long harbour loop to see the Opera House, the Black Diamond and Christianshavn from the water in the afternoon light.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              text: "Head back to Vesterbro for dinner in the Kødbyen meatpacking blocks, the best-value food quarter in the city, then a natural-wine bar afterward.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Palaces, the Round Tower and Tivoli",
          morning: [
            {
              poiSlug: "rosenborg-castle",
              text: "Start at Rosenborg on an early slot, straight down to the crown jewels before the treasury queue builds, then out into the free Kongens Have gardens.",
              durationMin: 105,
            },
            {
              poiSlug: "torvehallerne",
              text: "Lunch at the Torvehallerne market halls near Nørreport, grazing smørrebrød and pastries across the stalls.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "round-tower",
              text: "Climb the Round Tower's spiral ramp for the cheap rooftop view over the old town, stopping at the library hall on the way.",
              durationMin: 60,
            },
            {
              poiSlug: "christiansborg-palace",
              text: "Take the free lift up the Christiansborg tower, the tallest in the city, for the widest rooftop panorama, then wander the palace square and the National Library's Black Diamond on the waterfront below.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "tivoli-gardens",
              text: "Spend the evening in Tivoli Gardens if it is open, arriving in the last hours before closing when the park lights up. Check the seasonal calendar first, since it shuts for parts of the year.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Christiania, Christianshavn and street food",
          morning: [
            {
              poiSlug: "christiania",
              text: "Cross the harbour to the freetown of Christiania and wander its murals, workshops and lakeside paths, keeping phones away on Pusher Street, where photos are banned. Take it as a living community rather than a sight.",
              durationMin: 90,
            },
            {
              text: "Walk into Christianshavn proper along its canals and houseboats, and climb the external spiral staircase of Vor Frelsers Kirke for a view if you have the head for it.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "nationalmuseet",
              text: "Cross back to the National Museum, free to enter, and head straight for the Viking-age rooms with the Sun Chariot and the bog body, the strongest part of the collection.",
              durationMin: 90,
            },
            {
              text: "On a warm day, swap the museum for the Islands Brygge harbour bath across the water, a free open-air swimming spot in the middle of the city.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "reffen",
              text: "Take the 991 harbour bus, itself a mini boat trip, out to the Reffen street-food market on Refshaleøen for sunset over the water and dinner from the container kitchens. Check it is open, since it runs seasonally, and pay by card.",
              durationMin: 150,
            },
          ],
        },
      ],
    },
    {
      citySlug: "copenhagen",
      days: 4,
      summary:
        "Four days is more than enough for Copenhagen's sights, and that is the point: the fourth day turns a palace sprint into an actual trip. Days one to three cover the royal core, the harbour, Christiania and the food scene at a relaxed pace; day four is yours for either a slow local day across Nørrebro and Vesterbro or a train trip to the Louisiana modern-art museum up the coast or across the bridge to Malmö in Sweden, both under 40 minutes away. With this much time, skip the old town and stay in Nørrebro, the city's best neighborhood food quarter, cheaper than the center and full of bakeries, bars and the Superkilen park. The one-theme-per-day logic still holds: keep the royal quarter and harbour together, keep Christiania and Christianshavn together, and do not zigzag. Book little ahead beyond a summer Rosenborg slot and a Tivoli entry when the gardens are open. If you were choosing between three days and four, the fourth is the one you will remember.",
      stayNeighborhoodSlug: "norrebro",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Harbour and the royal quarter",
          morning: [
            {
              poiSlug: "nyhavn",
              text: "Ride down from Nørrebro and start at Nyhavn early for the painted-house photo from the harbour-end bridge before the terraces fill.",
              durationMin: 45,
            },
            {
              poiSlug: "amalienborg",
              text: "Walk to Amalienborg for the royal palaces and the noon guard change, with the sightline to the Marble Church and the Opera House across the water.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "little-mermaid",
              text: "Take the harbour path through the Kastellet fortress to the Little Mermaid for a quick photo, then loop back toward the center.",
              durationMin: 75,
            },
            {
              poiSlug: "canal-tour",
              text: "Board an open canal boat at the Nyhavn jetty for the hour-long harbour loop past the Opera House, the Black Diamond and Christianshavn.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              text: "Dinner back in Nørrebro along Jægersborggade or Sankt Hans Torv, where the neighborhood restaurants and bakeries run cheaper and more inventive than the center.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Palaces, the Round Tower and Tivoli",
          morning: [
            {
              poiSlug: "rosenborg-castle",
              text: "Open at Rosenborg on an early slot, down to the crown jewels first, then out into the free Kongens Have gardens next to your own neighborhood.",
              durationMin: 105,
            },
            {
              poiSlug: "torvehallerne",
              text: "Lunch at the Torvehallerne market halls near Nørreport, grazing smørrebrød and pastries across the stalls.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "round-tower",
              text: "Climb the Round Tower's spiral ramp for the cheap central rooftop view, pausing at the library hall.",
              durationMin: 60,
            },
            {
              poiSlug: "christiansborg-palace",
              text: "Ride the free lift up the Christiansborg tower for the tallest rooftop panorama in the city, then walk the palace square and the Strøget spine back toward Kongens Nytorv.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "tivoli-gardens",
              text: "Spend the evening in Tivoli Gardens if it is open, arriving late when the park lights up. Check the seasonal calendar first, since it shuts for parts of the year.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Christiania, Christianshavn and street food",
          morning: [
            {
              poiSlug: "christiania",
              text: "Cross to the freetown of Christiania and wander its murals, workshops and lakeside paths, keeping phones away on Pusher Street, where photos are banned.",
              durationMin: 90,
            },
            {
              text: "Walk the Christianshavn canals and houseboats, and climb the twisting external stair of Vor Frelsers Kirke for the view if you dare.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "nationalmuseet",
              text: "Cross back to the free National Museum and head for the Viking-age rooms with the Sun Chariot and the bog body, the strongest of the collection.",
              durationMin: 90,
            },
            {
              text: "On a warm afternoon, swap the museum for a swim at the Islands Brygge harbour bath, a free open-air pool cut into the harbour in the middle of the city.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "reffen",
              text: "Ride the 991 harbour bus out to the Reffen street-food market on Refshaleøen for sunset dinner from the container kitchens. Check it is open, since it runs seasonally, and pay by card.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Local Nørrebro day or Louisiana and Malmö day trip",
          morning: [
            {
              poiSlug: "superkilen",
              text: "Option A: start on your own doorstep at the Superkilen park, then work down Jægersborggade for bakeries and coffee and into the leafy Assistens Cemetery where Hans Christian Andersen is buried. Option B: take the coastal train about 35 minutes north to Humlebæk for the Louisiana Museum of Modern Art, whose sculpture park runs down to the sea, or cross the Øresund bridge by train in about 35 minutes to Malmö in Sweden.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              text: "Option A continues in Nørrebro and Vesterbro with lunch at a neighborhood restaurant and a wander through the Kødbyen blocks and the lakes between the two districts. Option B: give the Louisiana galleries and coastline the afternoon, or explore Malmö's old town and the Turning Torso before the short train back.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              text: "Either way, end back in Nørrebro on the bars and terraces around Sankt Hans Torv and Jægersborggade, the district's real evening scene.",
              durationMin: 120,
            },
            {
              text: "Last dinner at a Nørrebro restaurant; the area does creative food at fair prices, a fitting close after the center's harbour-view menus.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
  ],
};

export default copenhagen;
