import type { CityData } from "../types";

const lisbon: CityData = {
  city: {
    slug: "lisbon",
    name: "Lisbon",
    country: "Portugal",
    countrySlug: "portugal",
    lat: 38.7223,
    lng: -9.1393,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "LIS",
    airportToCenter: "Metro red line from the airport, about 25 min to the center with one change, 1.85 EUR",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [8],
    monthlyNotes: {
      1: "Expect 14-15C days, frequent rain fronts off the Atlantic, and the quietest streets of the year. Hotel rates bottom out, so this is the month for a cheap miradouro-and-museums trip.",
      2: "Still cool and showery, but sunny breaks are common and cafe terraces fill on clear afternoons. Carnival brings a short spike in local activity, otherwise crowds and prices stay low.",
      3: "Highs climb toward 18C and rain eases through the month. Crowds are moderate until late March, when spring break traffic starts pushing weekend hotel rates up.",
      4: "One of the best months: 19-21C, blooming jacarandas about to start, manageable lines at the castle and Belem. Easter week is the exception, book that window early and expect holiday pricing.",
      5: "Reliably warm at around 22C with little rain and long evenings, ideal for rooftop and kiosk season. Crowds are building but timed tickets still solve most queues.",
      6: "Festas de Lisboa takes over the city all month, peaking on Santo Antonio night, June 12-13, when Alfama becomes one giant grilled-sardine street party. Book weeks ahead and expect near-peak hotel prices.",
      7: "Hot, 27-28C, and busy, with cruise traffic adding midday surges around Baixa and Belem. Do sights before 11am, then follow locals to the river or the beach trains from Cais do Sodre.",
      8: "Peak heat near 29C, peak crowds, peak prices, and many family-run restaurants close for holidays. If August is your only option, book air conditioning and the first entry slot everywhere.",
      9: "Summer weather without the August crush: 26-27C early in the month, sea still warm, evenings made for miradouros. Prices dip from peak after the first week.",
      10: "Warm days around 22-23C with the first proper rain returning late in the month. Crowds thin noticeably after mid-October and this is the sweet spot for shoulder-season hotel deals.",
      11: "Cooler, 17-18C, with regular rainy spells, but the light between showers is superb for photos. Low season pricing kicks in and you can walk into fado houses without reservations.",
      12: "Mild for winter at 15C but wet, with festive lights along Rua Augusta and a big free New Year concert scene at Praca do Comercio. Quiet except the Christmas-to-New-Year week, when rates jump.",
    },
    climate: {
      1: { highC: 15, lowC: 8, rainyDays: 10 },
      2: { highC: 16, lowC: 9, rainyDays: 9 },
      3: { highC: 18, lowC: 10, rainyDays: 8 },
      4: { highC: 20, lowC: 11, rainyDays: 8 },
      5: { highC: 22, lowC: 13, rainyDays: 5 },
      6: { highC: 26, lowC: 16, rainyDays: 2 },
      7: { highC: 28, lowC: 17, rainyDays: 1 },
      8: { highC: 29, lowC: 18, rainyDays: 1 },
      9: { highC: 27, lowC: 17, rainyDays: 3 },
      10: { highC: 23, lowC: 14, rainyDays: 7 },
      11: { highC: 18, lowC: 11, rainyDays: 9 },
      12: { highC: 15, lowC: 9, rainyDays: 10 },
    },
    budgetLevel: "mid",
    budgetPerDay: { budget: 70, mid: 140, high: 280 },
    tagline: "Seven hills, one river, and the best light in Europe.",
    heroIntro:
      "Lisbon rewards walkers who accept the hills and riders who master the trams. Three days covers the old town, the viewpoints, and Belem without rushing, and the food scene punches far above its price point. Come in spring or early autumn and the city is close to unbeatable for a European break.",
    accent: { from: "#FFB45E", to: "#FF6B5B", ink: "#8A2D1F" },
    neighborhoodSlugs: [
      "alfama",
      "baixa-chiado",
      "principe-real",
      "bairro-alto",
      "belem",
    ],
    nearbyCitySlugs: ["porto", "seville"],
  },

  neighborhoods: [
    {
      slug: "alfama",
      citySlug: "lisbon",
      name: "Alfama",
      lat: 38.7118,
      lng: -9.1287,
      bestFor: ["romantic", "local", "first-time"],
      vibe: "Lisbon's oldest quarter is a maze of stairways, laundry lines, and tiled facades climbing from the river to the castle. Fado drifts out of small restaurants at night and the streets empty of tour groups after dark. It feels like a village that happens to sit inside a capital.",
      pros: [
        "Most atmospheric streets in the city, especially early morning and at night",
        "Walking distance to the castle, the cathedral, and the best viewpoints",
        "Fado houses and family-run tascas at your doorstep",
      ],
      cons: [
        "Steep hills and cobbles, painful with luggage and hard for anyone with mobility issues",
        "Few metro stops nearby, you depend on trams, buses, or your legs",
        "Daytime tour-group congestion on the main lanes",
      ],
    },
    {
      slug: "baixa-chiado",
      citySlug: "lisbon",
      name: "Baixa-Chiado",
      lat: 38.7104,
      lng: -9.139,
      bestFor: ["first-time", "family", "budget"],
      vibe: "The flat, grid-planned downtown rebuilt after the 1755 earthquake, running from Praca do Comercio up to the elegant shops and cafes of Chiado. Everything connects here: three metro lines, the tram routes, and the ferries. It is touristy at street level but unbeatable as a base.",
      pros: [
        "Flattest part of central Lisbon, the easiest terrain you will get",
        "Best transport hub in the city, direct metro from the airport area with one change",
        "Huge choice of hotels and restaurants at every price point",
      ],
      cons: [
        "Restaurant quality on the main drags is mediocre and aimed at tourists",
        "Crowded and noisy by day, especially near Rua Augusta",
      ],
    },
    {
      slug: "principe-real",
      citySlug: "lisbon",
      name: "Principe Real",
      lat: 38.7168,
      lng: -9.1489,
      bestFor: ["romantic", "local", "nightlife"],
      vibe: "A leafy, upscale district above Bairro Alto built around a garden square with a giant cedar tree and weekend organic markets. Concept stores, natural wine bars, and some of the city's most interesting restaurants fill the 19th-century townhouses. It is where Lisboetas actually go out.",
      pros: [
        "Excellent food and drink scene with far fewer tourists than downtown",
        "Quiet at night despite being ten minutes from Bairro Alto",
        "Garden squares and kiosk cafes give it real neighborhood life",
      ],
      cons: [
        "Uphill from almost everything, budget for the occasional taxi home",
        "Accommodation skews boutique and pricey, few budget options",
        "No metro station in the district itself, nearest is Rato",
      ],
    },
    {
      slug: "bairro-alto",
      citySlug: "lisbon",
      name: "Bairro Alto",
      lat: 38.713,
      lng: -9.144,
      bestFor: ["nightlife", "budget"],
      vibe: "Sleepy by day, this grid of narrow streets turns into Lisbon's open-air bar crawl every night, with crowds drinking on the cobbles until 2am. Cheap beer, tiny bars, and zero pretension. Sleep here only if you plan to be part of the noise.",
      pros: [
        "The nightlife epicenter, dozens of bars within a five-minute stumble",
        "Central location between Chiado and Principe Real",
        "Some genuinely cheap guesthouses survive here",
      ],
      cons: [
        "Street noise until 2-3am on weekends is not negotiable",
        "Grubby mornings, the streets take a beating every night",
        "Steep access from Baixa unless you use the Gloria funicular or the elevator",
      ],
    },
    {
      slug: "belem",
      citySlug: "lisbon",
      name: "Belem",
      lat: 38.697,
      lng: -9.206,
      bestFor: ["family", "local"],
      vibe: "A riverside district 6 km west of downtown where Portugal's Age of Discoveries monuments line up along the Tagus: the monastery, the tower, and a strip of modern museums. It runs on day-trippers until about 6pm, then goes genuinely quiet. Wide, flat, and green, it feels more like a garden city than central Lisbon.",
      pros: [
        "Flat terrain and riverside paths, the easiest walking in Lisbon",
        "Monuments and museums at your doorstep before the crowds arrive",
        "Calm evenings and lower hotel prices than downtown",
      ],
      cons: [
        "20-30 min by tram 15 to the center, and the tram gets packed",
        "Restaurant and nightlife options thin out after dark",
      ],
    },
  ],

  pois: [
    {
      slug: "praca-do-comercio",
      citySlug: "lisbon",
      name: "Praca do Comercio",
      lat: 38.7077,
      lng: -9.1366,
      kind: "sight",
      needsBooking: false,
      tip: "Come before 9am for empty-square photos with the Rua Augusta arch, then skip the overpriced terrace cafes on the square itself. The riverfront steps at Cais das Colunas on the south side are the free front-row seat at sunset.",
    },
    {
      slug: "castelo-sao-jorge",
      citySlug: "lisbon",
      name: "Castelo de Sao Jorge",
      lat: 38.7139,
      lng: -9.1335,
      kind: "sight",
      needsBooking: true,
      tip: "Buy the timed ticket online (about 15 EUR) and take the first slot at 9am, the ticket line hits 45 minutes by late morning in season. Ride bus 737 from Praca da Figueira to the gate instead of climbing, and save your legs for the ramparts.",
    },
    {
      slug: "miradouro-senhora-do-monte",
      citySlug: "lisbon",
      name: "Miradouro da Senhora do Monte",
      lat: 38.719,
      lng: -9.1325,
      kind: "viewpoint",
      needsBooking: false,
      tip: "This is the highest and widest viewpoint in the old town and it is free, but the low wall fills 45 minutes before sunset, so arrive early to claim a spot. There is no cafe up here, grab drinks from a shop on Graca's main street on the way.",
    },
    {
      slug: "tram-28",
      citySlug: "lisbon",
      name: "Tram 28",
      lat: 38.7169,
      lng: -9.136,
      kind: "experience",
      needsBooking: false,
      tip: "Board at the Martim Moniz terminus before 8:30am to get a window seat, by 10am it is standing room and a pickpocket hotspot. A single onboard ticket costs 3.10 EUR, so buy a 24h Carris/metro pass for about 6.80 EUR instead and you can hop off at any hill.",
    },
    {
      slug: "time-out-market",
      citySlug: "lisbon",
      name: "Time Out Market",
      lat: 38.707,
      lng: -9.146,
      kind: "food",
      needsBooking: false,
      tip: "The communal tables are a war zone between 12:30 and 14:00, so eat at 11:45 or after 14:30 and send one person to hold seats while the others order. The original Mercado da Ribeira produce hall next door is a cheaper, calmer coffee stop.",
    },
    {
      slug: "jeronimos-monastery",
      citySlug: "lisbon",
      name: "Jeronimos Monastery",
      lat: 38.6979,
      lng: -9.2068,
      kind: "sight",
      needsBooking: true,
      tip: "The church nave is free to enter, only the cloisters need the ticket (about 12 EUR), so book the first slot at 9:30 online and do the cloisters before the coach groups land around 10:30. It is closed Mondays, a classic day-trip planning mistake.",
    },
    {
      slug: "belem-tower",
      citySlug: "lisbon",
      name: "Belem Tower",
      lat: 38.6916,
      lng: -9.216,
      kind: "sight",
      needsBooking: true,
      tip: "The interior is a single narrow spiral staircase shared both ways, so entry is drip-fed and the line moves painfully even with a booked ticket. The honest advice: photograph it from the waterfront, and only go inside if you have booked the earliest slot. Closed Mondays.",
    },
    {
      slug: "pasteis-de-belem",
      citySlug: "lisbon",
      name: "Pasteis de Belem",
      lat: 38.6975,
      lng: -9.2033,
      kind: "food",
      needsBooking: false,
      tip: "Ignore the takeaway line snaking down the street and walk straight in to the dining rooms, they seat around 400 and turn over fast. Order at the table, add the cinnamon and sugar from the counter shakers, and expect to pay about 1.40 EUR per tart.",
    },
    {
      slug: "lx-factory",
      citySlug: "lisbon",
      name: "LX Factory",
      lat: 38.7034,
      lng: -9.1786,
      kind: "experience",
      needsBooking: false,
      tip: "Come late afternoon and stay for dinner, most shops open until 7-8pm and the restaurants after. On Sundays the LX Market flea runs from 10am, and the Ler Devagar bookstore with its flying bicycle is the one stop you should not skip.",
    },
    {
      slug: "maat",
      citySlug: "lisbon",
      name: "MAAT",
      lat: 38.6957,
      lng: -9.1937,
      kind: "museum",
      needsBooking: false,
      tip: "You can walk over the museum's curved roof for free at any time, and the river view from up there beats several paid viewpoints. The galleries close Tuesdays, and the combined ticket covering the old power station building is the better value if you go inside.",
    },
    {
      slug: "alfama-walk",
      citySlug: "lisbon",
      name: "Alfama on foot",
      lat: 38.7118,
      lng: -9.1287,
      kind: "experience",
      needsBooking: false,
      tip: "Walk it downhill: start at the castle or Portas do Sol viewpoint and let the stairways pull you toward the river, doing it uphill in the afternoon sun is the classic error. On Tuesday and Saturday mornings, detour to the Feira da Ladra flea market behind the Pantheon.",
    },
    {
      slug: "miradouro-santa-catarina",
      citySlug: "lisbon",
      name: "Miradouro de Santa Catarina",
      lat: 38.7089,
      lng: -9.147,
      kind: "viewpoint",
      needsBooking: false,
      tip: "This is the sunset viewpoint facing the bridge, and the crowd is young, local, and armed with supermarket beers. The kiosk sells drinks but closes earlier than you expect, so arrive by golden hour, buy first, then sit on the terrace steps.",
    },
    {
      slug: "gulbenkian-museum",
      citySlug: "lisbon",
      name: "Calouste Gulbenkian Museum",
      lat: 38.7371,
      lng: -9.1545,
      kind: "museum",
      needsBooking: true,
      tip: "Entry is free every Sunday from 2pm, and even then it rarely feels crowded. It is closed Tuesdays, and the surrounding garden with its ponds and concrete walkways is free daily, a real lunch-break spot for the museum's cafeteria crowd.",
    },
  ],

  itineraries: [
    {
      citySlug: "lisbon",
      days: 2,
      summary:
        "Two days is enough for Lisbon's historic core, but you will have to sacrifice Belem, and that is a real sacrifice. In 48 hours you can ride tram 28 before the crowds, climb through the castle and Alfama, catch two of the best miradouros, eat your way through Time Out Market, and finish both nights out, one with fado and one in Bairro Alto. What you will not fit: the Jeronimos Monastery, Belem Tower, the Gulbenkian, or any day trip, so accept the trade before you book. This length suits a weekend city break, a stopover on the way to the Algarve or the Azores, or travelers combining Lisbon with Porto in one trip. Base yourself in Baixa-Chiado: it is flat, every tram and metro line converges there, and both days start within ten minutes of your door. If you land with an extra half day, spend it in Belem rather than adding more downtown wandering.",
      stayNeighborhoodSlug: "baixa-chiado",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Castle hill, Alfama, and fado",
          morning: [
            {
              poiSlug: "tram-28",
              text: "Start at the Martim Moniz terminus and ride tram 28 up through Graca before 8:30am, when you can still get a window seat. Hop off near the top of the castle hill rather than riding the full route.",
              durationMin: 40,
            },
            {
              poiSlug: "castelo-sao-jorge",
              text: "Walk the ramparts of Castelo de Sao Jorge with a pre-booked 9am ticket, before the ticket line builds. The terraces give you the full sweep of the city and the river, a useful orientation for the rest of the trip.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "alfama-walk",
              text: "Descend through Alfama on foot from the castle gates, drifting past Portas do Sol and down the stairways toward the cathedral. Stop for a slow lunch at a tasca on the way, grilled fish and a half bottle of vinho verde is the move.",
              durationMin: 150,
            },
            {
              poiSlug: "miradouro-senhora-do-monte",
              text: "Climb or bus back up to Miradouro da Senhora do Monte, the highest viewpoint in the old town. Late afternoon light here is the best free show in Lisbon.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              text: "Book a table at a fado house back down in Alfama for around 8pm, the small family-run rooms beat the big dinner-show operations. Expect a set menu plus performance, and total silence during the songs.",
              durationMin: 150,
            },
            {
              text: "Finish with a ginjinha, the local sour-cherry liqueur, from a hole-in-the-wall bar near Rossio on the walk back to Baixa. One shot in a chocolate cup costs under 2 EUR.",
              durationMin: 20,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Baixa, Chiado, and Bairro Alto nights",
          morning: [
            {
              poiSlug: "praca-do-comercio",
              text: "Walk Praca do Comercio and the riverfront steps at Cais das Colunas before 9am, when the square is still empty. Then head up pedestrian Rua Augusta through the arch into the Baixa grid.",
              durationMin: 60,
            },
            {
              text: "Browse uphill through Chiado: the historic cafes around Rua Garrett, the Bertrand bookstore, the Carmo Convent ruins if you want one compact sight. This is Lisbon's best window-shopping hour.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "time-out-market",
              text: "Eat lunch at Time Out Market in Cais do Sodre, arriving by 11:45 or after 14:30 to actually find a seat. Split orders across stalls so you can try three kitchens in one sitting.",
              durationMin: 90,
            },
            {
              poiSlug: "miradouro-santa-catarina",
              text: "Walk up to Miradouro de Santa Catarina and settle in facing the 25 de Abril bridge. Buy a drink from the kiosk early, it closes before the crowd peaks.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Have dinner in Chiado or on the edge of Bairro Alto, booking ahead for anywhere with a name. Portions run large, sharing two mains between three people is normal.",
              durationMin: 100,
            },
            {
              text: "End in Bairro Alto's grid of bars, where everyone drinks standing on the cobbles from about 11pm. Bar-hop rather than settling, the point is the street itself.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "lisbon",
      days: 3,
      summary:
        "Yes, three days is the right amount of time for Lisbon, and it is the length we recommend for a first visit. It gives you two full days in the historic center, covering the castle, Alfama, tram 28, the miradouros, Baixa and Chiado, plus one dedicated day for Belem, which deserves more than the rushed half-afternoon most people give it. With three days you eat well twice at night without repeating neighborhoods, fit a fado evening and a Bairro Alto night, and still ride out to the Jeronimos Monastery, Belem Tower, and the custard tarts at their source. What still gets cut: the Gulbenkian Museum, Principe Real, and any Sintra day trip, all of which need a fourth day. This duration suits first-timers, couples, and anyone building a Portugal route with Porto next. Stay in Baixa-Chiado for the transport links, since the tram to Belem leaves from its doorstep and both center days start on foot.",
      stayNeighborhoodSlug: "baixa-chiado",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Castle hill, Alfama, and fado",
          morning: [
            {
              poiSlug: "tram-28",
              text: "Start at the Martim Moniz terminus and ride tram 28 up through Graca before 8:30am, when you can still get a window seat. Hop off near the top of the castle hill rather than riding the full route.",
              durationMin: 40,
            },
            {
              poiSlug: "castelo-sao-jorge",
              text: "Walk the ramparts of Castelo de Sao Jorge with a pre-booked 9am ticket, before the ticket line builds. The terraces give you the full sweep of the city and the river, a useful orientation for the rest of the trip.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "alfama-walk",
              text: "Descend through Alfama on foot from the castle gates, drifting past Portas do Sol and down the stairways toward the cathedral. Stop for a slow lunch at a tasca on the way.",
              durationMin: 150,
            },
            {
              poiSlug: "miradouro-senhora-do-monte",
              text: "Climb or bus back up to Miradouro da Senhora do Monte, the highest viewpoint in the old town, for the late-afternoon light. Bring your own drinks, there is no kiosk at the top.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              text: "Book a table at a fado house in Alfama for around 8pm, choosing a small family-run room over the big dinner-show venues. Total silence during the songs is the house rule everywhere.",
              durationMin: 150,
            },
            {
              text: "Finish with a ginjinha, the sour-cherry liqueur, from a stand-up bar near Rossio on the walk home. Under 2 EUR, drunk on the sidewalk like everyone else.",
              durationMin: 20,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Baixa, Chiado, and Bairro Alto nights",
          morning: [
            {
              poiSlug: "praca-do-comercio",
              text: "Walk Praca do Comercio and the riverfront at Cais das Colunas before 9am, then head up Rua Augusta through the arch into the Baixa grid. The square photographs best while it is still empty.",
              durationMin: 60,
            },
            {
              text: "Browse uphill through Chiado: the cafes around Rua Garrett, the Bertrand bookstore, and the Carmo Convent ruins if you want one compact sight before lunch.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "time-out-market",
              text: "Eat lunch at Time Out Market in Cais do Sodre, arriving by 11:45 or after 14:30 to find seats. Split orders across stalls to try several kitchens at once.",
              durationMin: 90,
            },
            {
              poiSlug: "miradouro-santa-catarina",
              text: "Walk up to Miradouro de Santa Catarina and take a spot facing the 25 de Abril bridge for golden hour. Buy from the kiosk early, it closes before the crowd peaks.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Have dinner in Chiado or on the edge of Bairro Alto, with a reservation anywhere well reviewed. Portuguese portions run large, order less than you think.",
              durationMin: 100,
            },
            {
              text: "End in Bairro Alto, where the bar crowd spills onto the cobbles from about 11pm. Keep moving between bars, the street is the venue.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Belem monuments and riverside",
          morning: [
            {
              poiSlug: "jeronimos-monastery",
              text: "Take tram 15 or a 15-minute taxi from downtown and be at the Jeronimos Monastery for the first cloister slot at 9:30, booked online. See the free church nave afterwards, the Manueline stonework inside is the day's highlight.",
              durationMin: 100,
            },
            {
              poiSlug: "pasteis-de-belem",
              text: "Walk two minutes to Pasteis de Belem and go straight to the sit-down rooms instead of the takeaway line. Two warm tarts with cinnamon and a coffee is the correct order.",
              durationMin: 40,
            },
          ],
          afternoon: [
            {
              poiSlug: "belem-tower",
              text: "Stroll the riverside gardens past the Monument to the Discoveries to Belem Tower. Photograph it from the water's edge, and only queue for the interior if you booked the earliest slot.",
              durationMin: 75,
            },
            {
              poiSlug: "maat",
              text: "Walk east along the Tagus to MAAT and cross its curved rooftop, which is free and open even when the galleries are not. Go inside if the current exhibition grabs you, skip it without guilt if not.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "lx-factory",
              text: "Continue to LX Factory under the bridge in Alcantara, arriving late afternoon while the shops are still open. Browse Ler Devagar, then stay for dinner at one of the restaurants in the old print works.",
              durationMin: 150,
            },
            {
              text: "Take a taxi or tram 15 back to the center, about 15 minutes. If you have energy left, a last drink at a Cais do Sodre rooftop closes the trip properly.",
              durationMin: 45,
            },
          ],
        },
      ],
    },
    {
      citySlug: "lisbon",
      days: 4,
      summary:
        "Four days is more than enough for Lisbon, and the fourth day is what turns a sightseeing sprint into an actual holiday. Days one and two cover the historic core: castle, Alfama, tram 28, Baixa, Chiado, the miradouros, and both signature nights out. Day three is Belem, done properly from the monastery's first entry slot to dinner at LX Factory. Day four is the release valve: the Gulbenkian's world-class private collection, the gardens and wine bars of Principe Real, and an unhurried final evening, or swap the whole day for a Sintra day trip if palaces tempt you more than museums. This length suits travelers who hate rushing, repeat visitors, and anyone whose flights bookend the trip awkwardly. For four days we recommend basing in Principe Real rather than downtown: you have already accepted a slower pace, and its restaurants, garden squares, and local crowd make coming home each night the best part. Beyond four days, add Sintra and a Cascais beach afternoon rather than more city.",
      stayNeighborhoodSlug: "principe-real",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Castle hill, Alfama, and fado",
          morning: [
            {
              poiSlug: "tram-28",
              text: "Start at the Martim Moniz terminus and ride tram 28 up through Graca before 8:30am for a window seat. Hop off near the castle hill rather than riding the full route.",
              durationMin: 40,
            },
            {
              poiSlug: "castelo-sao-jorge",
              text: "Walk the ramparts of Castelo de Sao Jorge on a pre-booked 9am ticket, before the lines build. The terraces map out the whole city for you on day one.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "alfama-walk",
              text: "Descend through Alfama on foot from the castle gates, past Portas do Sol and down the stairways toward the river, with a long tasca lunch on the way.",
              durationMin: 150,
            },
            {
              poiSlug: "miradouro-senhora-do-monte",
              text: "Head back up to Miradouro da Senhora do Monte for the late-afternoon light over the old town. It is free, and the highest viewpoint in central Lisbon.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              text: "Book a small fado house in Alfama for around 8pm and settle in for the set menu and the singing. Silence during songs is expected, applause after is mandatory.",
              durationMin: 150,
            },
            {
              text: "Cap the night with a ginjinha near Rossio before heading up to Principe Real. A taxi home costs a few euros and spares you the hill.",
              durationMin: 20,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Baixa, Chiado, and Bairro Alto nights",
          morning: [
            {
              poiSlug: "praca-do-comercio",
              text: "Walk Praca do Comercio and the river steps at Cais das Colunas before 9am, then take Rua Augusta through the arch into Baixa. Early is the only time the square is yours.",
              durationMin: 60,
            },
            {
              text: "Wander up through Chiado: Rua Garrett's cafes, the Bertrand bookstore, and the roofless Carmo Convent if you want one quick sight.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "time-out-market",
              text: "Lunch at Time Out Market in Cais do Sodre, timed for 11:45 or after 14:30 to beat the seat hunt. Order across several stalls and share.",
              durationMin: 90,
            },
            {
              poiSlug: "miradouro-santa-catarina",
              text: "Walk up to Miradouro de Santa Catarina for golden hour facing the bridge. Kiosk first, steps second, the drinks counter closes early.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Dinner in Chiado or upper Bairro Alto with a reservation, then join the street crowd in Bairro Alto's bar grid from 11pm. Your bed in Principe Real is a ten-minute walk uphill.",
              durationMin: 180,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Belem monuments and riverside",
          morning: [
            {
              poiSlug: "jeronimos-monastery",
              text: "Get to the Jeronimos Monastery for the first cloister slot at 9:30, booked online, then see the free church nave. Tram 15 or a taxi from the center takes 15-25 minutes.",
              durationMin: 100,
            },
            {
              poiSlug: "pasteis-de-belem",
              text: "Walk to Pasteis de Belem and sit down inside rather than joining the takeaway line. Warm tarts, cinnamon on top, done.",
              durationMin: 40,
            },
          ],
          afternoon: [
            {
              poiSlug: "belem-tower",
              text: "Follow the riverside gardens past the Monument to the Discoveries to Belem Tower. The exterior view is the prize, skip the slow interior line unless you booked the first slot.",
              durationMin: 75,
            },
            {
              poiSlug: "maat",
              text: "Walk the riverfront east to MAAT and cross its free rooftop walkway for the best river panorama in Belem. Enter the galleries only if the current show interests you.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "lx-factory",
              text: "End the day at LX Factory in Alcantara, browsing the shops before they close and staying for dinner in the converted factory strip. The Ler Devagar bookstore alone justifies the stop.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Gulbenkian, Principe Real, slow Lisbon",
          morning: [
            {
              poiSlug: "gulbenkian-museum",
              text: "Spend the morning at the Calouste Gulbenkian Museum, a compact private collection running from Egyptian pieces to Lalique jewelry. If it is Sunday, entry is free from 2pm, so flip this day's order and come after lunch.",
              durationMin: 120,
            },
            {
              text: "Walk the Gulbenkian garden's ponds and concrete paths before leaving, they are free and genuinely calm. The metro from Sao Sebastiao gets you back toward Rato in ten minutes.",
              durationMin: 40,
            },
          ],
          afternoon: [
            {
              text: "Give the afternoon to Principe Real itself: the garden square under the giant cedar, the concept stores in the old townhouses, and a slow coffee at a kiosk. On Saturdays an organic market fills the square.",
              durationMin: 120,
            },
            {
              text: "Alternative for this entire day: take the train from Rossio to Sintra, about 40 minutes and 2.40 EUR each way, for the Pena Palace and Quinta da Regaleira. If you choose Sintra, book palace tickets online and leave by 8:30am to beat the tour buses.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Book a farewell dinner in Principe Real, where the natural wine bars and modern Portuguese kitchens are the city's current best. This is the meal to spend up on.",
              durationMin: 120,
            },
            {
              text: "Take a final nightcap at a miradouro kiosk or a quiet garden terrace nearby. You are sleeping in the neighborhood, so there is no journey home to worry about.",
              durationMin: 45,
            },
          ],
        },
      ],
    },
  ],
};

export default lisbon;
