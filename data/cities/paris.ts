import type { CityData } from "../types";

const paris: CityData = {
  city: {
    slug: "paris",
    name: "Paris",
    country: "France",
    countrySlug: "france",
    lat: 48.8566,
    lng: 2.3522,
    tier: 1,
    idealDays: 4,
    durations: [2, 3, 4],
    airportCode: "CDG",
    airportToCenter:
      "From Charles de Gaulle, the RER B train reaches Gare du Nord and Chatelet in about 30-35 min for 11.80 EUR, running every 10-15 min. The Roissybus to Opera costs about 13 EUR but crawls in traffic, and a taxi is a flat 56 EUR to the Right Bank, 65 EUR to the Left. From Orly, take the Orlyval shuttle to Antony then the RER B, or the T7 tram, or the direct Orlybus to Denfert-Rochereau.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [],
    monthlyNotes: {
      1: "Cold and grey at 7-8C with short damp days and the year's thinnest crowds after the New Year rush fades. Winter sales (les soldes) start in early January and hotel rates sit at their lowest, so it is a strong month for a cheap, queue-free museum trip.",
      2: "Still cold at 8C and often overcast, though bright crisp days do break through and lines at the Louvre and Orsay stay short. Rates remain low outside the school holiday week, making this a good value month if you dress for the chill.",
      3: "Highs climb toward 12-13C and the city starts to green up, with cafe terraces reopening on the first mild afternoons. Crowds are still light and hotel prices reasonable before the spring surge, a quietly excellent time to visit.",
      4: "One of the best months at 15-16C, blossom on the trees and long bright days, though April showers are frequent so pack a layer. Crowds and prices build through the month, and Easter can fill the center, so book museums and hotels ahead.",
      5: "Warm and lively at 19-20C with the terrace season in full swing, but several public holidays (May 1, May 8, Ascension) close many shops and museums, so check dates. Roland Garros tennis begins late in the month, and this is peak-quality Paris weather with rising crowds.",
      6: "Long golden evenings at 23C, the best light of the year, and the terraces packed until late. Fete de la Musique on June 21 fills every street with free concerts, and Roland Garros finishes early June, so expect a busy, festive, and fully booked city.",
      7: "Warm at 25C and busy with summer tourists as Parisians start to leave. Bastille Day on July 14 brings a military parade down the Champs-Elysees and fireworks at the Eiffel Tower, and Paris Plages turns the Seine banks into a temporary beach with sand and deckchairs through the summer.",
      8: "Hot spells to 25-26C and the emptiest local month, as many restaurants and small shops shut for two or three weeks while their owners take the traditional August holiday. Big sights stay open and mobbed with visitors, Paris Plages runs on, and the city feels oddly quiet in its residential quarters.",
      9: "Arguably the finest month: warm days easing from 21C, thinning crowds after the first week, and shops and restaurants reopening refreshed from the summer break. Fashion Week and design events buzz late in the month, and hotel value improves as the peak eases.",
      10: "Mild and often bright at 16C with autumn color in the parks and the first proper wet spells returning. Nuit Blanche in early October keeps museums and art installations open all night for free, and shoulder-season crowds make museum lines manageable.",
      11: "Cool, damp and grey at 11C with the shortest daylight closing in, but the lowest crowds of the autumn and good hotel deals. Christmas lights switch on along the Champs-Elysees and the department store windows go up in late November, lifting the mood of a dark month.",
      12: "Cold at 8C, frequently wet and dark, but the center glitters with Christmas lights, illuminated store windows, and markets. Rates jump for the Christmas-to-New-Year stretch, when the Champs-Elysees and Notre-Dame area draw big festive crowds, though early December stays quiet and affordable.",
    },
    climate: {
      1: { highC: 7, lowC: 3, rainyDays: 10 },
      2: { highC: 8, lowC: 3, rainyDays: 9 },
      3: { highC: 12, lowC: 5, rainyDays: 10 },
      4: { highC: 16, lowC: 7, rainyDays: 9 },
      5: { highC: 20, lowC: 11, rainyDays: 10 },
      6: { highC: 23, lowC: 14, rainyDays: 8 },
      7: { highC: 25, lowC: 16, rainyDays: 7 },
      8: { highC: 25, lowC: 16, rainyDays: 7 },
      9: { highC: 21, lowC: 13, rainyDays: 8 },
      10: { highC: 16, lowC: 10, rainyDays: 9 },
      11: { highC: 11, lowC: 6, rainyDays: 10 },
      12: { highC: 8, lowC: 4, rainyDays: 11 },
    },
    budgetLevel: "high",
    budgetPerDay: { budget: 80, mid: 170, high: 340 },
    tagline: "The museum city, the terrace city, the walk-until-your-feet-give-out city.",
    heroIntro:
      "Paris rewards patience: the headline sights need pre-booked tickets, the museums need a day of their own, and the best of it is simply walking the quays and quarters between them. Four days lets you split the Eiffel and Champs, a Louvre-and-islands day, Montmartre and the Marais, and a Versailles day trip without a forced march. Come in spring or early autumn, book the Tower and the Louvre before you fly, and lean on the metro to cover the distances the walking cannot.",
    accent: { from: "#2B3A6B", to: "#D9B96A", ink: "#18213F" },
    neighborhoodSlugs: [
      "le-marais",
      "saint-germain",
      "montmartre",
      "latin-quarter",
      "canal-saint-martin",
    ],
    nearbyCitySlugs: ["amsterdam"],
  },

  neighborhoods: [
    {
      slug: "le-marais",
      citySlug: "paris",
      name: "Le Marais",
      lat: 48.8575,
      lng: 2.3622,
      bestFor: ["first-time", "nightlife", "romantic"],
      vibe: "A dense grid of medieval lanes and grand mansions spanning the 3rd and 4th arrondissements, now the center's most fashionable quarter for shopping, galleries, and going out. It is walkable to Notre-Dame, the Louvre, and the islands, with the elegant Place des Vosges at its heart and a lively LGBTQ and bar scene at night. Central, stylish, and rarely dull.",
      pros: [
        "Walk to Notre-Dame, the islands, the Louvre, and the Pompidou",
        "Best boutique shopping and gallery browsing in the center",
        "Excellent bars, falafel, and late-night energy without a metro trip",
      ],
      cons: [
        "Among the pricier areas for hotels and dinner",
        "Narrow lanes get packed and loud on weekend evenings",
        "Sunday sees the crowds swell as many shops here stay open",
      ],
    },
    {
      slug: "saint-germain",
      citySlug: "paris",
      name: "Saint-Germain-des-Pres",
      lat: 48.8539,
      lng: 2.3336,
      bestFor: ["first-time", "romantic", "family"],
      vibe: "The Left Bank's classic literary quarter, home to the historic Cafe de Flore and Les Deux Magots, smart galleries, and the Luxembourg Gardens on its edge. It is refined, safe, and central, within a short walk of the Musee d'Orsay, the Seine, and the Latin Quarter. This is postcard Paris at a grown-up, unhurried pace.",
      pros: [
        "Walk to the Orsay, the Louvre over the river, and the Luxembourg Gardens",
        "Elegant, calm, and reassuringly central for a first visit",
        "Two metro lines and RER access to both airports and Versailles nearby",
      ],
      cons: [
        "Expensive for both hotels and the famous cafes",
        "Quieter nightlife than the Marais or the canal",
        "Can feel touristy and polished rather than local",
      ],
    },
    {
      slug: "montmartre",
      citySlug: "paris",
      name: "Montmartre",
      lat: 48.8867,
      lng: 2.3431,
      bestFor: ["romantic", "budget", "local"],
      vibe: "The hilltop village of the 18th arrondissement, crowned by the white domes of Sacre-Coeur and threaded with steep cobbled lanes and staircases. Away from the tourist crush around the basilica and Place du Tertre, it keeps a genuinely villagey, bohemian feel with wine bars and small squares. Charming and cheaper to sleep in, but a hike from the main sights.",
      pros: [
        "The best free panorama over the city from the Sacre-Coeur steps",
        "More affordable hotels than the central Right Bank",
        "Atmospheric lanes and local bars once you climb past the tour crowds",
      ],
      cons: [
        "A metro ride from the Louvre, Eiffel, and the islands",
        "Steep hills and staircases everywhere, hard with luggage or strollers",
        "Place du Tertre and the basilica steps draw pickpockets and touts",
      ],
    },
    {
      slug: "latin-quarter",
      citySlug: "paris",
      name: "Latin Quarter",
      lat: 48.8489,
      lng: 2.3469,
      bestFor: ["budget", "first-time", "family"],
      vibe: "The student quarter around the Sorbonne in the 5th arrondissement, a maze of narrow streets, bookshops, and cheap eats between the Pantheon and the Seine. It is central and lively, walkable to Notre-Dame, the islands, and the Luxembourg Gardens, with some of the better-value beds on the Left Bank. Buzzy by day, a little rough around the tourist-trap edges at night.",
      pros: [
        "Walk to Notre-Dame, Sainte-Chapelle, and the islands over the river",
        "Better-value hotels and budget dining than Saint-Germain next door",
        "Central RER and metro links, handy for Versailles and both airports",
      ],
      cons: [
        "The main tourist streets (Rue de la Huchette) are cheap-eat traps",
        "Crowded and noisy around the Sorbonne and the riverfront",
        "Rooms in the old buildings can be small and creaky",
      ],
    },
    {
      slug: "canal-saint-martin",
      citySlug: "paris",
      name: "Canal Saint-Martin",
      lat: 48.8709,
      lng: 2.3665,
      bestFor: ["local", "nightlife", "budget"],
      vibe: "A young, arty stretch of the 10th and 11th arrondissements along a leafy canal, where locals picnic on the banks and independent bars, coffee roasters, and vintage shops fill the side streets. It trades headline sights for real neighborhood life and some of the city's best casual dining and nightlife. Not central for monuments, but the most Parisian place to actually hang out.",
      pros: [
        "Genuine local nightlife, natural-wine bars, and canal-side picnics",
        "Cheaper eating and drinking than the tourist center",
        "Well connected by metro to the Marais and the Right Bank sights",
      ],
      cons: [
        "A metro trip from the Eiffel, Louvre, and the islands",
        "Few classic sights within walking distance",
        "Some blocks near the canal feel edgy late at night",
      ],
    },
  ],

  pois: [
    {
      slug: "eiffel-tower",
      citySlug: "paris",
      name: "Eiffel Tower",
      lat: 48.8584,
      lng: 2.2945,
      kind: "sight",
      needsBooking: true,
      tip: "Book a timed lift ticket to the summit online weeks ahead, the official site releases slots about 60 days out and they sell fast; walking up to the second floor by stairs is cheaper and rarely queued. Come for the first morning slot or after dark, when the tower sparkles for five minutes on the hour. Keep bags zipped tight, the base and the Trocadero across the river are prime pickpocket ground.",
    },
    {
      slug: "louvre",
      citySlug: "paris",
      name: "Louvre Museum",
      lat: 48.8606,
      lng: 2.3376,
      kind: "museum",
      needsBooking: true,
      tip: "Reserve a timed entry online, it is mandatory even with a Paris Museum Pass, and pick the first 9am slot to reach the Mona Lisa before the wall of phones forms. The Louvre is shut on Tuesdays and open late (until about 9pm) on Wednesdays and Fridays, when the evening is far calmer. Enter through the Carrousel du Louvre or Porte des Lions to skip the pyramid queue.",
    },
    {
      slug: "notre-dame",
      citySlug: "paris",
      name: "Notre-Dame Cathedral",
      lat: 48.853,
      lng: 2.3499,
      kind: "sight",
      needsBooking: false,
      tip: "Reopened in December 2024 after the fire, and the restored interior is dazzling. Entry is free but a walk-up queue of an hour is common, so reserve a free timed slot on the official app or website up to two days ahead to walk straight in. Go early or in the evening for the calmest visit, and book the separate tower climb if you want the gargoyle-level rooftop view.",
    },
    {
      slug: "musee-orsay",
      citySlug: "paris",
      name: "Musee d'Orsay",
      lat: 48.86,
      lng: 2.3266,
      kind: "museum",
      needsBooking: true,
      tip: "Book a timed slot online for the world's great Impressionist collection, housed in a former railway station. It is closed on Mondays and open late until about 9:45pm on Thursdays, the quietest and most atmospheric time to visit. Head straight up to the fifth-floor Monet, Renoir, and Van Gogh rooms first, then work down, and catch the view through the giant station clock face.",
    },
    {
      slug: "montmartre-sacre-coeur",
      citySlug: "paris",
      name: "Montmartre and Sacre-Coeur",
      lat: 48.8867,
      lng: 2.3431,
      kind: "viewpoint",
      needsBooking: false,
      tip: "The basilica is free and the hilltop steps give the best free panorama in Paris, best at sunset or early morning before the tour groups and the aggressive friendship-bracelet touts arrive. Skip the crush of Place du Tertre and wander the quiet lanes behind, around Rue de l'Abreuvoir and the vineyard. Take the funicular (one metro ticket) up if the staircase looks daunting, and watch your pockets on the packed steps.",
    },
    {
      slug: "arc-de-triomphe",
      citySlug: "paris",
      name: "Arc de Triomphe and Champs-Elysees",
      lat: 48.8738,
      lng: 2.295,
      kind: "viewpoint",
      needsBooking: true,
      tip: "The rooftop terrace gives a superb view straight down the Champs-Elysees and the twelve-avenue star, and it needs a timed online ticket to climb the 284 steps. Reach it by the underground pedestrian passage from the Champs-Elysees corner, never by crossing the traffic roundabout. Go late afternoon for the golden light down the avenue, and walk the Champs down toward Concorde rather than up it.",
    },
    {
      slug: "sainte-chapelle",
      citySlug: "paris",
      name: "Sainte-Chapelle",
      lat: 48.8554,
      lng: 2.345,
      kind: "sight",
      needsBooking: true,
      tip: "This 13th-century royal chapel holds fifteen soaring walls of stained glass, best seen on a bright morning when the light pours through. Book a timed ticket online, and buy the combined ticket with the neighboring Conciergerie to see both on one visit. It sits inside a working courthouse so there is an airport-style security check at the gate; come at 9am opening to beat both the queue and the coach groups.",
    },
    {
      slug: "versailles",
      citySlug: "paris",
      name: "Palace of Versailles",
      lat: 48.8049,
      lng: 2.1204,
      kind: "sight",
      needsBooking: true,
      tip: "Set aside a half to full day: take the RER C to Versailles Chateau Rive Gauche (about 45 min, one-way roughly 3.65 EUR), and avoid Tuesdays when many Paris museums close and Versailles is heaving. Book the Passport ticket with a timed palace slot online and arrive at the 9am opening; the Hall of Mirrors is calmest first thing. The vast gardens are free except on musical-fountain show days, so leave time to walk or rent a bike or cart.",
    },
    {
      slug: "le-marais",
      citySlug: "paris",
      name: "Le Marais",
      lat: 48.8575,
      lng: 2.3622,
      kind: "experience",
      needsBooking: false,
      tip: "Wander the lanes for boutiques, galleries, and the arcaded Place des Vosges, the oldest planned square in Paris and free to stroll. Come on a Sunday, when much of the quarter stays open unlike the rest of the city, and queue for a falafel on Rue des Rosiers at lunch. Duck into the free courtyards of the Hotel de Sully and the Musee Carnavalet (free permanent collection on the city's history) along the way.",
    },
    {
      slug: "latin-quarter",
      citySlug: "paris",
      name: "Latin Quarter",
      lat: 48.8489,
      lng: 2.3469,
      kind: "experience",
      needsBooking: false,
      tip: "Explore the streets around the Pantheon and the Sorbonne for bookshops, the Shakespeare and Company store by the river, and the crumbling Roman arena of the Arenes de Lutece hidden off Rue Monge (free). Skip the touristy Rue de la Huchette for dinner and eat one street back. The morning market on Rue Mouffetard is the local highlight, best before noon.",
    },
    {
      slug: "seine-cruise",
      citySlug: "paris",
      name: "Seine River Cruise",
      lat: 48.8606,
      lng: 2.2977,
      kind: "experience",
      needsBooking: false,
      tip: "An hour-long boat glide past Notre-Dame, the Louvre, and the Eiffel Tower is the easiest way to link the monuments and rest your feet, and it is magical after dark when everything is lit. Skip the pricey dinner cruises and take a standard Bateaux-Mouches or Vedettes du Pont-Neuf departure for around 15 EUR. Board at dusk for the sunset-into-lights transition, and sit on the open upper deck.",
    },
    {
      slug: "luxembourg-gardens",
      citySlug: "paris",
      name: "Luxembourg Gardens",
      lat: 48.8462,
      lng: 2.3372,
      kind: "park",
      needsBooking: false,
      tip: "The Left Bank's most elegant park is free and made for a picnic or a rest between museums, with green metal chairs to drag to the central fountain where kids sail toy boats. It is the perfect pause between Saint-Germain, the Orsay, and the Latin Quarter, all a short walk away. Come mid-morning on a sunny day and grab a chair early, they fill fast at lunchtime.",
    },
    {
      slug: "musee-rodin",
      citySlug: "paris",
      name: "Musee Rodin",
      lat: 48.8553,
      lng: 2.3158,
      kind: "museum",
      needsBooking: false,
      tip: "The sculptor's mansion and rose garden hold The Thinker and The Gates of Hell in one of the loveliest museum settings in the city, near the Invalides. A garden-only ticket is a cheap way to see the big bronzes outdoors if you are short on time or budget. It is closed on Mondays; come on a fine afternoon and pair it with the nearby Invalides and Napoleon's tomb.",
    },
    {
      slug: "pere-lachaise",
      citySlug: "paris",
      name: "Pere Lachaise Cemetery",
      lat: 48.8619,
      lng: 2.3934,
      kind: "sight",
      needsBooking: false,
      tip: "The city's most famous cemetery is a free, hilly maze of cobbled avenues and grand tombs, resting place of Jim Morrison, Oscar Wilde, Chopin, and Edith Piaf. Grab a free map at the entrance or download one, because the graves are genuinely hard to find among 70,000 plots. Enter at the Porte des Amandiers or Pere Lachaise metro, wear proper shoes for the cobbles, and allow at least 90 minutes.",
    },
  ],

  itineraries: [
    {
      citySlug: "paris",
      days: 2,
      summary:
        "Two days in Paris is a highlights sprint, and you will feel the rush, because the city really wants three or four. In 48 hours you can do the Eiffel Tower, the Champs-Elysees and Arc de Triomphe, and a Seine cruise on day one, then the Louvre, the islands, Notre-Dame, Sainte-Chapelle, and the Latin Quarter on day two. What you must cut: Montmartre, Versailles, the Orsay, and any slow lingering in a park or on a terrace. This suits a weekend break or a first taste before you combine Paris with Amsterdam. The non-negotiables are pre-booking the Eiffel Tower summit slot and a timed Louvre entry before you fly, plus a free Notre-Dame reservation, or you lose hours you cannot spare to queues. Base yourself in Le Marais so both days start central and on foot, with dinner and bars steps from your bed. If a third day appears, add Montmartre and the Orsay and slow the pace right down.",
      stayNeighborhoodSlug: "le-marais",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Eiffel Tower, Champs-Elysees, and the Seine",
          morning: [
            {
              poiSlug: "eiffel-tower",
              text: "Start at the Eiffel Tower for your pre-booked morning summit slot, before the queues and the crowds build at the base. Cross to the Trocadero terrace afterward for the classic head-on photo of the whole tower, keeping your bag zipped in this pickpocket hotspot.",
              durationMin: 120,
            },
            {
              poiSlug: "musee-rodin",
              text: "Walk east to the Musee Rodin near the Invalides, where the rose garden holds The Thinker and The Gates of Hell in one of the city's prettiest settings. A garden-only ticket is a quick, cheap way to see the big bronzes if time is tight.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "arc-de-triomphe",
              text: "Take the metro to the Arc de Triomphe and climb the 284 steps to the terrace for the view down the twelve-avenue star, reaching it by the underground passage, never across the traffic. Then walk the Champs-Elysees downhill toward Concorde and the Tuileries.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "seine-cruise",
              text: "Board a Seine cruise at dusk near the Eiffel Tower or Pont Neuf for the sunset-into-lights glide past Notre-Dame and the Louvre. Sit on the open upper deck and take a standard hour-long departure rather than a pricey dinner boat.",
              durationMin: 75,
            },
            {
              text: "Head back to Le Marais for dinner in the lanes around Place des Vosges, booking a table for anywhere with a name. Finish with a drink in one of the quarter's late bars, a short walk from your hotel.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Louvre, the islands, and the Latin Quarter",
          morning: [
            {
              poiSlug: "louvre",
              text: "Be at the Louvre for your pre-booked 9am slot and go straight to the Mona Lisa before the phone-wall forms, then loop the Italian paintings, the Venus de Milo, and the French crown jewels. Enter via the Carrousel or Porte des Lions to skip the pyramid line.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "sainte-chapelle",
              text: "Cross to the Ile de la Cite for your timed Sainte-Chapelle slot, saving the fifteen walls of stained glass for the bright afternoon light. Use the combined ticket to see the neighboring Conciergerie, and expect a security check at the courthouse gate.",
              durationMin: 90,
            },
            {
              poiSlug: "notre-dame",
              text: "Walk to Notre-Dame, reopened in December 2024 with its restored interior, using your free reserved timed slot to skip the long walk-up queue. Circle the exterior and the flying buttresses from the riverside garden behind it afterward.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "latin-quarter",
              text: "Cross the river into the Latin Quarter, wandering the bookshops and Shakespeare and Company before dinner. Eat one street back from the touristy Rue de la Huchette, and end with a drink around the Pantheon.",
              durationMin: 150,
            },
          ],
        },
      ],
    },
    {
      citySlug: "paris",
      days: 3,
      summary:
        "Three days is a comfortable length for a first visit and close to the sweet spot for Paris. It gives you the Eiffel Tower, Champs-Elysees, Arc de Triomphe, and a Seine cruise on day one, the Louvre with the islands, Notre-Dame, and Sainte-Chapelle on day two, and a Montmartre-plus-Orsay-and-Marais day three that balances a hilltop village with the great Impressionist collection. You eat in three different quarters, fit both a park pause and the museums that matter, and still move at a pace that lets you sit on a terrace rather than sprint past it. What still gets cut is the Versailles day trip, which is exactly what a fourth day adds. This suits first-timers, couples, and anyone routing on to Amsterdam next. Stay in Saint-Germain: it walks to the Orsay, the Louvre over the river, and the Luxembourg Gardens, and its cafes make an elegant base for the evenings. Pre-book the Eiffel summit, the Louvre and Orsay slots, and a free Notre-Dame reservation before you fly.",
      stayNeighborhoodSlug: "saint-germain",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Eiffel Tower, Champs-Elysees, and the Seine",
          morning: [
            {
              poiSlug: "eiffel-tower",
              text: "Start at the Eiffel Tower for your pre-booked summit slot ahead of the crowds, then cross to the Trocadero for the full head-on view. Keep your bag zipped, the base and the terrace are prime pickpocket ground.",
              durationMin: 120,
            },
            {
              poiSlug: "musee-rodin",
              text: "Walk to the Musee Rodin near the Invalides for The Thinker and The Gates of Hell set among the roses. Pair it with a look at the gilded Invalides dome over Napoleon's tomb next door.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "arc-de-triomphe",
              text: "Metro to the Arc de Triomphe and climb to the terrace for the view down the star of avenues, using the underground passage to reach it. Walk the Champs-Elysees down toward Concorde and into the Tuileries gardens.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "seine-cruise",
              text: "Take a Seine cruise at dusk for the lit-up glide past the monuments, boarding near Pont Neuf or the Eiffel Tower. Choose a standard hour-long boat and sit up top for the sunset.",
              durationMin: 75,
            },
            {
              text: "Head back to Saint-Germain for dinner among the galleries and cafes, booking ahead. A nightcap at a classic corner like the Cafe de Flore or a quieter Left Bank bar caps the night.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Louvre, the islands, and Sainte-Chapelle",
          morning: [
            {
              poiSlug: "louvre",
              text: "Be at the Louvre for your 9am slot, going straight to the Mona Lisa before the crush, then the Venus de Milo and the Italian galleries. Enter via the Carrousel to skip the pyramid queue, and set a firm exit time or the museum will swallow the whole day.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "sainte-chapelle",
              text: "Cross to the Ile de la Cite for your Sainte-Chapelle slot, timed for bright afternoon light through the fifteen stained-glass walls. Use the combined ticket for the Conciergerie next door, once a revolutionary prison.",
              durationMin: 90,
            },
            {
              poiSlug: "notre-dame",
              text: "Walk to Notre-Dame on your free reserved slot to see the interior restored after the 2024 reopening without the long queue. Take in the exterior and buttresses from the garden behind, then wander onto the quieter Ile Saint-Louis for an ice cream.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "latin-quarter",
              text: "Drift into the Latin Quarter for the evening, browsing Shakespeare and Company and the bookshop streets around the Sorbonne. Eat well one street off the tourist strip and finish with a drink near the Pantheon.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Montmartre, the Orsay, and the Marais",
          morning: [
            {
              poiSlug: "montmartre-sacre-coeur",
              text: "Ride the metro up to Montmartre early and climb to the Sacre-Coeur steps for the free panorama before the tour groups and touts arrive. Wander the quiet lanes behind the basilica, around the vineyard and Rue de l'Abreuvoir, and skip the crush of Place du Tertre.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "musee-orsay",
              text: "Take the metro to the Musee d'Orsay for your timed slot, heading straight to the fifth-floor Monet, Renoir, and Van Gogh rooms before working down. Catch the view of the city through the giant station clock face.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "le-marais",
              text: "Cross the river to Le Marais for the evening, wandering the boutiques and the arcaded Place des Vosges as the bars fill. Queue for a falafel on Rue des Rosiers or book a bistro, then settle into the quarter's night scene.",
              durationMin: 180,
            },
          ],
        },
      ],
    },
    {
      citySlug: "paris",
      days: 4,
      summary:
        "Four days is the sweet spot for a first visit to Paris, turning a sightseeing sprint into an actual holiday. Days one to three cover the essentials without rushing: the Eiffel Tower, Champs-Elysees, and a Seine cruise; the Louvre, the islands, Notre-Dame, and Sainte-Chapelle; then Montmartre, the Musee d'Orsay, and the Marais. Day four is the release valve, a Versailles day trip to the palace and its vast gardens, reached in 45 minutes by RER C and best started at the 9am opening on any day but Tuesday. This length suits travelers who hate the forced march, couples, and anyone whose flights bookend the trip awkwardly. For four days we recommend basing in the Latin Quarter: it is central and walkable to the islands and the Orsay, offers better-value beds than Saint-Germain next door, and sits on the RER C line straight to Versailles. Beyond four days, add a Musee Rodin and Invalides morning or run on to Amsterdam by fast train in about three and a half hours. Book the Eiffel, the Louvre, the Orsay, and the Versailles Passport well ahead.",
      stayNeighborhoodSlug: "latin-quarter",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Eiffel Tower, Champs-Elysees, and the Seine",
          morning: [
            {
              poiSlug: "eiffel-tower",
              text: "Start at the Eiffel Tower for your booked summit slot before the queues, then cross to the Trocadero for the head-on photo. Keep bags zipped in this pickpocket hotspot.",
              durationMin: 120,
            },
            {
              poiSlug: "musee-rodin",
              text: "Walk to the Musee Rodin for The Thinker among the roses, and look in on the Invalides dome nearby. A garden ticket is a quick option if you want to keep moving.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "arc-de-triomphe",
              text: "Metro to the Arc de Triomphe and climb to the terrace for the view down the avenues, reached by the underground passage. Walk the Champs-Elysees down to Concorde and through the Tuileries.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "seine-cruise",
              text: "Take a dusk Seine cruise for the monuments lit up, boarding near Pont Neuf or the Eiffel Tower and sitting on the open deck. Keep to a standard hour-long boat over a dinner cruise.",
              durationMin: 75,
            },
            {
              text: "Dinner back in the Latin Quarter, easing into the quarter you are calling home. Eat one street off the tourist strip and finish with a drink around the Pantheon.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Louvre, the islands, and Sainte-Chapelle",
          morning: [
            {
              poiSlug: "louvre",
              text: "Be at the Louvre for your 9am slot and reach the Mona Lisa before the crush, then the Venus de Milo and the Italian rooms. Enter via the Carrousel and set an exit time so the museum does not eat the whole day.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "sainte-chapelle",
              text: "Cross to the Ile de la Cite for your Sainte-Chapelle slot in the bright afternoon, when the stained glass glows. Use the combined ticket for the Conciergerie next door.",
              durationMin: 90,
            },
            {
              poiSlug: "notre-dame",
              text: "Walk to Notre-Dame on your free reserved slot to see the restored interior without the queue, then admire the buttresses from the garden behind. Wander onto the Ile Saint-Louis for a Berthillon ice cream.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Stroll the Left Bank quays as the light goes and the bouquinistes pack up, then eat in the Latin Quarter near your base. Book anywhere well reviewed, and skip the neon set-menu traps by the river.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Montmartre, the Orsay, and the Marais",
          morning: [
            {
              poiSlug: "montmartre-sacre-coeur",
              text: "Ride up to Montmartre early for the free Sacre-Coeur panorama before the touts and groups, then wander the quiet lanes behind, around the vineyard. Take the funicular up on one metro ticket if the stairs look steep, and watch your pockets on the packed steps.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "musee-orsay",
              text: "Metro to the Musee d'Orsay for your timed slot, going straight to the fifth-floor Impressionists before working down. Do not miss the view through the giant station clock.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "le-marais",
              text: "Cross to Le Marais for the evening, browsing the boutiques and the arcaded Place des Vosges as the bars fill up. Falafel on Rue des Rosiers or a booked bistro, then a drink in the quarter's late scene.",
              durationMin: 180,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Versailles day trip",
          morning: [
            {
              poiSlug: "versailles",
              text: "Take the RER C to Versailles Chateau Rive Gauche, about 45 minutes, aiming to arrive for the 9am palace opening and avoiding Tuesdays. Use your pre-booked Passport ticket with a timed palace slot and start with the Hall of Mirrors while it is calmest, then the State Apartments.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "versailles",
              text: "Spend the afternoon in the vast gardens, free except on musical-fountain days, walking or renting a bike or golf cart out to the Grand Canal, the Trianon palaces, and Marie-Antoinette's rustic hamlet. Pack a picnic or grab lunch near the estate, as the palace cafes are pricey and packed.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              text: "Ride the RER C back into central Paris in the early evening, tired but done with the big-ticket sights. Book a farewell dinner in the Latin Quarter or Saint-Germain, spending up on your last Paris meal.",
              durationMin: 150,
            },
            {
              text: "End with a slow walk along the Seine to see Notre-Dame and the bridges lit, a short stroll from your base. No journey home to plan, which is the point of basing central for four days.",
              durationMin: 60,
            },
          ],
        },
      ],
    },
  ],
};

export default paris;
