import type { CityData } from "../types";

const budapest: CityData = {
  city: {
    slug: "budapest",
    name: "Budapest",
    country: "Hungary",
    countrySlug: "hungary",
    lat: 47.4979,
    lng: 19.0402,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "BUD",
    airportToCenter:
      "The 100E airport express bus runs direct to Deak Ferenc ter in the center, about 40 minutes for around 2.20 EUR (2200 HUF). Buy the dedicated 100E ticket from the machine at the stop; a standard single-ride ticket is not valid on this line.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [8],
    monthlyNotes: {
      1: "Cold and often grey with highs around 2C and lows below freezing, but the thermal baths are at their most magical with steam rising off the outdoor pools. Hotel rates sit at their yearly low and the big sights are close to empty once the Christmas markets close on January 1.",
      2: "Still freezing, quiet and cheap, the last full month before spring prices return. Szechenyi and Gellert baths are the obvious refuge; pack for lows around minus 2C and short daylight.",
      3: "Days climb toward 12C and the first spring wine events appear in the wine bars and cellars. Crowds stay light through most of the month and rooms are noticeably cheaper than April onward.",
      4: "Proper spring at around 17C, blossoms on Margaret Island and the first riverboat and ruin-bar terraces reopening. Easter weekend gets busy, so book the Parliament tour ahead if your dates overlap it.",
      5: "One of the two best months, with highs near 22C, long light and full terraces along the Danube. Prices reach shoulder-season highs and the city fills for the Whitsun weekend, so book rooms early.",
      6: "Warm at about 26C with long evenings and the wine and craft-beer terraces in full swing. Crowds build steadily but stay short of the August peak; go before the real heat arrives.",
      7: "Hot at around 29C and busy, with the outdoor pools and the Danube breeze doing the cooling. Do the sun-exposed sights like Gellert Hill and Fishermans Bastion early, then retreat to a shaded bath or terrace in the afternoon.",
      8: "The month to avoid: peak 29C heat, the highest crowds of the year and Sziget Festival landing on Obuda Island in mid-August, which floods the city with 400,000 visitors and pushes room rates up. If you come now, book far ahead and plan indoor or riverside afternoons.",
      9: "One of the best months, with highs around 24C, thinning crowds after the first week and grape-harvest wine events in the cellars. Prices ease off; this is the smart alternative to summer.",
      10: "Crisp 17C days and strong autumn color on Gellert Hill and Margaret Island. Tourist numbers drop after mid-month and hotel rates follow, while the baths feel especially good as the air cools.",
      11: "Grey and cold with highs around 8C, the quietest stretch of the year until the Christmas markets open in late November at Vorosmarty ter and St Stephen's Basilica. Late November is a sweet spot: full market atmosphere without December density.",
      12: "The Christmas markets at Vorosmarty ter and in front of St Stephen's Basilica run from late November into early January and draw heavy weekend crowds, with the basilica square adding a light show and an ice rink. Expect lows below freezing, mulled wine everywhere and December rates well above the winter norm.",
    },
    climate: {
      1: { highC: 2, lowC: -3, rainyDays: 8 },
      2: { highC: 5, lowC: -2, rainyDays: 7 },
      3: { highC: 12, lowC: 2, rainyDays: 7 },
      4: { highC: 17, lowC: 6, rainyDays: 8 },
      5: { highC: 22, lowC: 11, rainyDays: 9 },
      6: { highC: 26, lowC: 14, rainyDays: 9 },
      7: { highC: 29, lowC: 16, rainyDays: 8 },
      8: { highC: 29, lowC: 15, rainyDays: 7 },
      9: { highC: 24, lowC: 11, rainyDays: 6 },
      10: { highC: 17, lowC: 7, rainyDays: 7 },
      11: { highC: 8, lowC: 3, rainyDays: 8 },
      12: { highC: 3, lowC: -1, rainyDays: 9 },
    },
    budgetLevel: "low",
    budgetPerDay: { budget: 55, mid: 105, high: 210 },
    tagline: "Thermal baths, grand boulevards, ruin bars, low prices.",
    heroIntro:
      "Budapest splits across the Danube into hilly Buda with its castle and the flat, grand Pest side where most of the life happens. It is one of the cheapest classic capitals in Europe, and the thermal baths, ruin bars and Parliament riverfront give it a mix no other city matches. Three days covers the essentials at a humane pace; the trick is timing the sun-exposed viewpoints early and saving the baths for when your legs give out.",
    accent: { from: "#E0A43B", to: "#B23A6E", ink: "#6E2547" },
    neighborhoodSlugs: [
      "belvaros",
      "jewish-quarter",
      "castle-district",
      "ujlipotvaros",
      "jozsefvaros",
    ],
    nearbyCitySlugs: ["prague", "vienna"],
  },

  neighborhoods: [
    {
      slug: "belvaros",
      citySlug: "budapest",
      name: "Belvaros (District V)",
      lat: 47.4979,
      lng: 19.0513,
      bestFor: ["first-time", "romantic"],
      vibe: "The riverside heart of Pest, wrapping the Parliament, St Stephen's Basilica and the pedestrian shopping street Vaci utca. It is the most polished and central district, walkable to almost everything on the Pest side and one bridge from Buda Castle. Busy and slightly formal by day, it quiets down after the shops close.",
      pros: [
        "Parliament, the Basilica and the Chain Bridge all within a short walk",
        "Widest choice of hotels and easy metro access on all three lines",
        "No transit needed for a 2-day trip",
      ],
      cons: [
        "Restaurants along Vaci utca are overpriced tourist traps",
        "Least local feel of any central district",
        "Room rates run 20-30 percent above the outer districts",
      ],
    },
    {
      slug: "jewish-quarter",
      citySlug: "budapest",
      name: "Jewish Quarter (Erzsebetvaros, District VII)",
      lat: 47.4979,
      lng: 19.0662,
      bestFor: ["nightlife", "local", "budget"],
      vibe: "The old Jewish quarter turned nightlife engine, home to the Dohany Street Synagogue and the ruin bars in crumbling courtyards. By day it is street art, third-wave coffee and kosher bakeries; after dark it is the densest bar scene in the city. Central, cheap and loud in the right way.",
      pros: [
        "Szimpla Kert and the whole ruin-bar scene on your doorstep",
        "Best casual food and coffee in the city at local prices",
        "Ten-minute walk to the Basilica and the river",
      ],
      cons: [
        "Bar noise on the main streets until the early hours on weekends",
        "Some blocks are scruffy and mid-renovation",
        "Not the district for an early night or a quiet stay",
      ],
    },
    {
      slug: "castle-district",
      citySlug: "budapest",
      name: "Castle District (Var, District I)",
      lat: 47.4967,
      lng: 19.0347,
      bestFor: ["romantic", "first-time"],
      vibe: "The cobbled hilltop on the Buda side holding Buda Castle, Matthias Church and Fishermans Bastion. It empties out completely once the day-trippers leave in the late afternoon, and the evening views over Pest are the best in the city. Staying here means the castle-side sights are yours before the crowds arrive.",
      pros: [
        "Buda Castle, Matthias Church and Fishermans Bastion on foot",
        "Calm, genuinely atmospheric evenings after the crowds go",
        "The finest sunset panorama over the Danube and Parliament",
      ],
      cons: [
        "Steep cobbled streets are hard work with luggage or strollers",
        "Few supermarkets and limited casual dining up on the hill",
        "You cross the river for most nightlife and everyday needs",
      ],
    },
    {
      slug: "ujlipotvaros",
      citySlug: "budapest",
      name: "Ujlipotvaros (District XIII)",
      lat: 47.5147,
      lng: 19.0509,
      bestFor: ["local", "family", "romantic"],
      vibe: "A leafy residential grid just north of the Parliament, all Bauhaus apartment blocks, tree-lined streets and neighborhood bistros. This is where locals with options actually live, and the food and cafe scene reflects it. The center is a 15-minute walk or two tram stops away, and Margaret Island is on the doorstep.",
      pros: [
        "Best local food and cafes at honest, non-tourist prices",
        "Quiet, flat, stroller-friendly streets and the riverside promenade",
        "Margaret Island and the Parliament both a short walk away",
      ],
      cons: [
        "You walk or tram to most major sights, even if it is short",
        "Quiet at night if you want nightlife on your doorstep",
      ],
    },
    {
      slug: "jozsefvaros",
      citySlug: "budapest",
      name: "Jozsefvaros (District VIII)",
      lat: 47.4889,
      lng: 19.0708,
      bestFor: ["budget", "local"],
      vibe: "A large, mixed district behind the Grand Boulevard, rough at its edges but rapidly gentrifying around the museum quarter and the Corvin Quarter. It holds the Hungarian National Museum and some of the cheapest central-ish rooms in the city. Uneven block by block but improving fast and well connected.",
      pros: [
        "Lowest room prices within walking distance of the center",
        "Hungarian National Museum and the Palace Quarter's grand facades",
        "Strong metro and tram links across the whole district",
      ],
      cons: [
        "Some blocks toward the outer edge still feel neglected",
        "Fewer sights than the riverside districts",
        "Quality of streets varies sharply from one block to the next",
      ],
    },
  ],

  pois: [
    {
      slug: "szechenyi-chain-bridge",
      citySlug: "budapest",
      name: "Szechenyi Chain Bridge",
      lat: 47.4988,
      lng: 19.0435,
      kind: "sight",
      needsBooking: false,
      tip: "Walk it at dusk when the lions and the whole span light up and the castle glows behind it; the Pest end near Roosevelt ter gives the best photo back toward Buda. It is free and open around the clock, so cross it late when the daytime foot traffic has cleared.",
    },
    {
      slug: "hungarian-parliament",
      citySlug: "budapest",
      name: "Hungarian Parliament",
      lat: 47.5072,
      lng: 19.0456,
      kind: "sight",
      needsBooking: true,
      tip: "The interior is guided-tour only and the English-language slots book out days ahead in season, so buy online well before you arrive rather than gambling on the ticket window. Choose an early slot, and shoot the exterior from the Batthyany ter embankment on the Buda side for the full riverfront facade.",
    },
    {
      slug: "buda-castle",
      citySlug: "budapest",
      name: "Buda Castle",
      lat: 47.496,
      lng: 19.0397,
      kind: "sight",
      needsBooking: false,
      tip: "The courtyards, ramparts and terraces are free and open all day, so you only pay if you enter the National Gallery or History Museum inside. Skip the funicular queue from the Chain Bridge and instead walk up the Varkert Bazar garden stairs or take bus 16, both faster and cheaper.",
    },
    {
      slug: "fishermans-bastion",
      citySlug: "budapest",
      name: "Fishermans Bastion",
      lat: 47.5025,
      lng: 19.0347,
      kind: "viewpoint",
      needsBooking: false,
      tip: "The lower terraces are free and the small upper towers charge a fee only during the day, so arrive before 9am and you walk the upper level for free with the Parliament view to yourself. This is the postcard panorama of Budapest; sunrise and late evening are the two windows without crowds.",
    },
    {
      slug: "matthias-church",
      citySlug: "budapest",
      name: "Matthias Church",
      lat: 47.5019,
      lng: 19.0343,
      kind: "sight",
      needsBooking: true,
      tip: "The colored-tile roof is the draw and you can admire it for free from outside, but the interior with its painted walls needs a ticket, so buy online to skip the small queue. It sits right beside Fishermans Bastion, so pair the two and do them at opening before the tour groups arrive.",
    },
    {
      slug: "st-stephens-basilica",
      citySlug: "budapest",
      name: "St Stephen's Basilica",
      lat: 47.5008,
      lng: 19.054,
      kind: "sight",
      needsBooking: false,
      tip: "Entry to the nave asks only for a suggested donation, but the panoramic dome terrace charges a small fee and is worth it, reached by a lift plus a short stair climb. Go up in the last hour before closing for softer light over the Pest rooftops and fewer people at the top.",
    },
    {
      slug: "szechenyi-baths",
      citySlug: "budapest",
      name: "Szechenyi Thermal Baths",
      lat: 47.5186,
      lng: 19.0817,
      kind: "experience",
      needsBooking: true,
      tip: "It is cheaper on weekdays than at weekends, and buying online with a cabin (not just a locker) saves the entrance queue and gives you somewhere private to change. Bring your own towel and flip-flops to avoid the rental fees, and go early morning or after 5pm to dodge the midday crush in the outdoor pools.",
    },
    {
      slug: "gellert-hill",
      citySlug: "budapest",
      name: "Gellert Hill & Citadella Viewpoint",
      lat: 47.4869,
      lng: 19.0447,
      kind: "viewpoint",
      needsBooking: false,
      tip: "The climb from the Buda end of Elisabeth Bridge takes about 25 minutes and rewards you with the widest panorama over both banks and the Liberty Statue. Go in the morning for backlight-free photos of Pest, carry water in summer since the path is fully sun-exposed, and the viewpoint itself is free.",
    },
    {
      slug: "central-market-hall",
      citySlug: "budapest",
      name: "Central Market Hall",
      lat: 47.4869,
      lng: 19.0586,
      kind: "food",
      needsBooking: false,
      tip: "Come before noon for the produce and paprika at ground-floor prices; the upstairs food stalls are pricier and geared to tourists, so eat langos at a smaller local spot instead. It closes early on Saturday afternoon and stays shut on Sunday, so time your visit and pay by card since not every stall takes it.",
    },
    {
      slug: "dohany-street-synagogue",
      citySlug: "budapest",
      name: "Dohany Street Synagogue",
      lat: 47.4956,
      lng: 19.0608,
      kind: "sight",
      needsBooking: true,
      tip: "This is the largest synagogue in Europe and entry includes the memorial garden and museum, but tickets are timed and sell out midday in season, so book an early online slot. It closes on Saturdays for Shabbat and on Jewish holidays, so check the date, and dress with covered shoulders.",
    },
    {
      slug: "szimpla-kert",
      citySlug: "budapest",
      name: "Szimpla Kert (Ruin Bar)",
      lat: 47.4977,
      lng: 19.0637,
      kind: "experience",
      needsBooking: false,
      tip: "The original ruin bar is best seen before 8pm when you can actually take in the junk-art courtyards without the late-night crush and cover charge. On Sunday mornings it turns into a farmers market with a very different, calm atmosphere, which is the local's way to visit.",
    },
    {
      slug: "shoes-on-the-danube",
      citySlug: "budapest",
      name: "Shoes on the Danube Memorial",
      lat: 47.5041,
      lng: 19.0447,
      kind: "sight",
      needsBooking: false,
      tip: "The sixty iron shoes on the embankment memorialize Jews shot into the river in 1944, and it takes only ten quiet minutes but should not be rushed. It sits on the Pest promenade between the Chain Bridge and Parliament, so fold it into that riverside walk rather than making a special trip.",
    },
    {
      slug: "vaci-street",
      citySlug: "budapest",
      name: "Vaci Street",
      lat: 47.4934,
      lng: 19.0537,
      kind: "sight",
      needsBooking: false,
      tip: "Treat it as a 15-minute walk-through, not a place to eat or shop; the cafes here charge double and the currency-exchange booths on it give some of the worst rates in town. The currency is the forint, not the euro, so pay in HUF, use an ATM from a real bank and ignore the street exchange windows entirely.",
    },
    {
      slug: "margaret-island",
      citySlug: "budapest",
      name: "Margaret Island",
      lat: 47.5266,
      lng: 19.0475,
      kind: "park",
      needsBooking: false,
      tip: "This car-free island park in the middle of the Danube is free and best on foot or by rented bike, with a musical fountain near the southern end that runs on the hour. Come late afternoon, walk from the Margaret Bridge tram stop, and catch the fountain's evening light show if you stay past dusk in summer.",
    },
  ],

  itineraries: [
    {
      citySlug: "budapest",
      days: 2,
      summary:
        "Two days is enough for Budapest's headline sights if you stay central and start early, but you will only scratch the local side and the baths. The core splits cleanly by river: the Pest bank holds the Parliament, the Basilica, the Jewish Quarter and the Central Market, while the Buda hill holds the castle, Matthias Church and Fishermans Bastion, all a bridge apart. Base yourself in Belvaros so both mornings start on foot. The structure that works is one day per bank: day one for Pest and the Jewish Quarter, day two for the Buda castle hill and Gellert. Book the Parliament tour and the Dohany Street Synagogue online before you arrive, because timed tickets are the only real threat to a 48-hour visit. What you sacrifice is a proper thermal bath session, Margaret Island and any slow ruin-bar evening, which is exactly what a third day buys. Prices are low by Western European standards, so eat well; just stay off Vaci utca and pay in forint, not euro.",
      stayNeighborhoodSlug: "belvaros",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Pest riverfront and the Jewish Quarter",
          morning: [
            {
              poiSlug: "hungarian-parliament",
              text: "Start at the Hungarian Parliament with a pre-booked early English tour of the interior and the crown jewels. Arrive 15 minutes ahead at the visitor center to clear security.",
              durationMin: 90,
            },
            {
              poiSlug: "shoes-on-the-danube",
              text: "Walk south along the Pest embankment to the Shoes on the Danube memorial, a quiet ten-minute stop, then continue to the Chain Bridge along the promenade.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "st-stephens-basilica",
              text: "Cut inland to St Stephen's Basilica, see the nave, then take the lift and short climb to the dome terrace for the wide Pest panorama.",
              durationMin: 75,
            },
            {
              poiSlug: "dohany-street-synagogue",
              text: "Continue to the Dohany Street Synagogue for a timed visit of the largest synagogue in Europe and its memorial garden. Book the slot online the night before to avoid the midday sellout.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "szimpla-kert",
              text: "Wander into the Jewish Quarter and see Szimpla Kert before 8pm while you can still take in the junk-art courtyards, then bar-hop the surrounding streets.",
              durationMin: 60,
            },
            {
              text: "Dinner in Erzsebetvaros away from the tourist strips: the side streets around Kazinczy utca do modern Hungarian and street food where a full meal with a drink stays well under 6000 HUF.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Buda castle hill and Gellert",
          morning: [
            {
              poiSlug: "fishermans-bastion",
              text: "Cross the Chain Bridge and climb to Fishermans Bastion before 9am, when the upper towers are free and the Parliament view across the river is yours alone.",
              durationMin: 60,
            },
            {
              poiSlug: "matthias-church",
              text: "Step next door into Matthias Church for the painted interior with your ticket, then browse the quiet lanes of the castle district before the tour groups arrive.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "buda-castle",
              text: "Walk the free courtyards, terraces and ramparts of Buda Castle for the long river views, entering the National Gallery only if you want the art. Lunch at a cafe up on the hill.",
              durationMin: 120,
            },
            {
              poiSlug: "gellert-hill",
              text: "Descend and climb Gellert Hill to the Citadella viewpoint for the widest panorama over both banks and the Liberty Statue. Carry water; the path is fully sun-exposed.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "szechenyi-chain-bridge",
              text: "Come back down to the river and cross the Chain Bridge at dusk when the lions and the whole span light up and the castle glows behind you.",
              durationMin: 45,
            },
            {
              text: "Finish with dinner back in Belvaros on a side street off Vaci utca, not on it, where a Hungarian classic like goulash or paprika chicken with a glass of local wine keeps the bill honest.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
    {
      citySlug: "budapest",
      days: 3,
      summary:
        "Three days is the right amount of time for Budapest: enough for both riverbanks at a humane pace, plus one long afternoon in a thermal bath that turns a sightseeing trip into an actual break. Two days forces you to sprint Pest and the castle hill back to back and skip the baths entirely; the third day adds Szechenyi, Margaret Island and time to sit in a ruin bar without watching the clock. Stay in the Jewish Quarter, central and cheap, with the best casual food and the nightlife on your doorstep. The shape of the plan: day one for the Pest riverfront and the Jewish Quarter, day two for the Buda castle hill and Gellert, day three for the baths, the market and the island. Book two things online before arrival: the Parliament tour and the Dohany Street Synagogue slot. Everything else in Budapest rewards showing up early rather than paying extra, and paying in forint rather than euro.",
      stayNeighborhoodSlug: "jewish-quarter",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Pest riverfront and the Basilica",
          morning: [
            {
              poiSlug: "hungarian-parliament",
              text: "From your Jewish Quarter base, take the metro to the Parliament for your pre-booked early tour of the interior and the crown jewels. Get there 15 minutes ahead for security.",
              durationMin: 90,
            },
            {
              poiSlug: "shoes-on-the-danube",
              text: "Walk the Pest embankment south to the Shoes on the Danube memorial, then carry on along the promenade toward the Chain Bridge.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "st-stephens-basilica",
              text: "Head inland to St Stephen's Basilica for the nave and the dome terrace panorama over the Pest rooftops.",
              durationMin: 75,
            },
            {
              poiSlug: "szechenyi-chain-bridge",
              text: "Cross the Chain Bridge on foot for the classic view up to Buda Castle, then double back for a coffee near Roosevelt ter.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "szimpla-kert",
              text: "Back in the Jewish Quarter, see Szimpla Kert before the late crowd, then work the ruin bars and craft-beer spots around Kazinczy utca.",
              durationMin: 90,
            },
            {
              text: "Dinner on a Erzsebetvaros side street: langos, modern Hungarian small plates or a bistro, all a short walk from your bed and easy on the budget.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Buda castle hill and Gellert",
          morning: [
            {
              poiSlug: "fishermans-bastion",
              text: "Cross to Buda and climb to Fishermans Bastion before 9am for the free upper towers and the Parliament panorama without the crowds.",
              durationMin: 60,
            },
            {
              poiSlug: "matthias-church",
              text: "Visit Matthias Church next door for the painted interior and the tiled roof, then walk the quiet castle-district lanes at opening.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "buda-castle",
              text: "Explore the free courtyards and terraces of Buda Castle for the long river views and lunch on the hill, dipping into the National Gallery only if the art appeals.",
              durationMin: 120,
            },
            {
              poiSlug: "gellert-hill",
              text: "Walk the ridge south and climb Gellert Hill to the Citadella viewpoint for the widest panorama over both banks. Bring water in warm months.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "dohany-street-synagogue",
              text: "Recross to Pest and, on a non-Saturday, do a late-afternoon timed visit to the Dohany Street Synagogue and its memorial garden with your online ticket.",
              durationMin: 75,
            },
            {
              text: "Dinner near the Grand Boulevard, then a slow nightcap at a wine bar in the Jewish Quarter pouring Hungarian reds you will not find at home.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Baths, the market and Margaret Island",
          morning: [
            {
              poiSlug: "central-market-hall",
              text: "Start at the Central Market Hall before noon for the paprika, produce and ground-floor stalls, and eat langos here or nearby rather than at the pricier upstairs counters.",
              durationMin: 75,
            },
            {
              poiSlug: "vaci-street",
              text: "Walk the length of Vaci utca back toward the center as a 15-minute stroll, ignoring the exchange booths, then browse the streets around Vorosmarty ter.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "szechenyi-baths",
              text: "Take the metro to City Park and spend the afternoon at the Szechenyi thermal baths. Book online with a cabin, bring your own towel and flip-flops, and go after the midday peak eases.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              poiSlug: "margaret-island",
              text: "Cool off on Margaret Island on the way back, walking from the Margaret Bridge tram stop and catching the musical fountain on the hour near the southern end.",
              durationMin: 90,
            },
            {
              text: "Last dinner in the Jewish Quarter or across in Ujlipotvaros, both a short tram ride away and full of honest neighborhood kitchens.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
    {
      citySlug: "budapest",
      days: 4,
      summary:
        "Four days is more than enough for Budapest's sights, and that is the point: the fourth day converts a monument sprint into an actual trip. Days one to three cover the Pest riverfront, the Buda castle hill and the Jewish Quarter at a relaxed pace; day four is a slow one built around a long thermal-bath session, Margaret Island and City Park, with no rush and no ticket queue. With this much time, skip the tightest center and stay in Ujlipotvaros. It is a 15-minute walk or two tram stops from the Parliament, cheaper for equivalent rooms, and its bistros and the Margaret Island promenade are the reason the fourth day exists. The one-bank-per-day logic still applies: keep the castle, Matthias Church and Gellert together on the Buda side, keep the Parliament, Basilica and Jewish Quarter together on the Pest side, and do not zigzag across the Danube. Pre-book the Parliament tour and the Dohany Street Synagogue. If you were choosing between three and four days, the fourth relaxed day is the one you will remember.",
      stayNeighborhoodSlug: "ujlipotvaros",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Pest riverfront and the Basilica",
          morning: [
            {
              poiSlug: "hungarian-parliament",
              text: "Walk or tram down from Ujlipotvaros to the Parliament for your pre-booked early tour of the interior and the crown jewels, arriving ahead for security.",
              durationMin: 90,
            },
            {
              poiSlug: "shoes-on-the-danube",
              text: "Follow the Pest embankment south to the Shoes on the Danube memorial, then keep walking the promenade to the Chain Bridge.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "st-stephens-basilica",
              text: "Turn inland to St Stephen's Basilica for the nave and the dome terrace view over Pest, with lunch on the cafe-lined square in front.",
              durationMin: 90,
            },
            {
              poiSlug: "szechenyi-chain-bridge",
              text: "Cross the Chain Bridge on foot for the view up to the castle, then browse the riverfront and Roosevelt ter before heading back.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "szimpla-kert",
              text: "Head into the Jewish Quarter for Szimpla Kert before the crush, then a loop of the ruin bars around Kazinczy utca.",
              durationMin: 90,
            },
            {
              text: "Dinner in Erzsebetvaros, then tram back up to Ujlipotvaros for a quiet nightcap in one of the neighborhood wine bars.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Buda castle hill and Gellert",
          morning: [
            {
              poiSlug: "fishermans-bastion",
              text: "Cross the river and climb to Fishermans Bastion before 9am for the free upper towers and the Parliament panorama with no crowds.",
              durationMin: 60,
            },
            {
              poiSlug: "matthias-church",
              text: "Visit Matthias Church next door for the tiled roof and painted interior, then wander the castle-district lanes while they are still empty.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "buda-castle",
              text: "Walk the free terraces and ramparts of Buda Castle for the long river views and lunch on the hill, entering the National Gallery only if you want the art.",
              durationMin: 120,
            },
            {
              poiSlug: "gellert-hill",
              text: "Take the ridge south and climb Gellert Hill to the Citadella viewpoint for the widest view over both banks and the Liberty Statue.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "szechenyi-chain-bridge",
              text: "Descend and cross the Chain Bridge at dusk for the lit-up span and the castle glowing behind you.",
              durationMin: 45,
            },
            {
              text: "Dinner back on the Pest side, then a slow walk along the illuminated riverfront before the tram home to Ujlipotvaros.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Jewish Quarter, the market and Vaci",
          morning: [
            {
              poiSlug: "dohany-street-synagogue",
              text: "Start at the Dohany Street Synagogue on a non-Saturday with your pre-booked morning slot, taking in the memorial garden and museum.",
              durationMin: 90,
            },
            {
              text: "Walk the Jewish Quarter's street art and courtyards, stopping for coffee and a kosher-bakery pastry around Kazinczy utca before the day heats up.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "central-market-hall",
              text: "Head to the Central Market Hall before its early Saturday close for paprika and produce downstairs, eating langos at a smaller local spot rather than the tourist counters upstairs.",
              durationMin: 90,
            },
            {
              poiSlug: "vaci-street",
              text: "Stroll Vaci utca back toward Vorosmarty ter as a 15-minute walk-through, skipping the exchange booths, then browse the boutiques on the quieter parallel streets.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Return to Ujlipotvaros for an early dinner in a neighborhood bistro, then walk the riverside promenade toward the Parliament as it lights up.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Baths, Margaret Island and City Park",
          morning: [
            {
              poiSlug: "margaret-island",
              text: "Start slow with a morning on Margaret Island, walking or renting a bike from the Margaret Bridge end and looping the car-free park past the musical fountain and the old water tower.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "szechenyi-baths",
              text: "Spend a long afternoon at the Szechenyi thermal baths in City Park. Book a weekday online ticket with a cabin, bring your own towel and flip-flops, and settle in once the midday peak fades.",
              durationMin: 210,
            },
          ],
          evening: [
            {
              text: "Wander City Park on the way out for Vajdahunyad Castle and Heroes' Square lit up at dusk, a free and easy end to the relaxed day.",
              durationMin: 60,
            },
            {
              text: "Last dinner back in Ujlipotvaros or across in the Jewish Quarter, both a short tram ride away and both far cheaper than the riverside tourist strips.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
  ],
};

export default budapest;
