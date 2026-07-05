import type { CityData } from "../types";

const amsterdamDe: CityData = {
  city: {
    slug: "amsterdam",
    name: "Amsterdam",
    country: "Niederlande",
    countrySlug: "netherlands",
    lat: 52.3676,
    lng: 4.9041,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "AMS",
    airportToCenter:
      "Direktzug von Schiphol nach Amsterdam Centraal, etwa 17 Minuten für rund 5 EUR, verkehrt vom frühen Morgen bis spät in die Nacht alle paar Minuten. Kaufen Sie ein Ticket an den gelben Automaten oder halten Sie eine kontaktlose Karte an die Schranken; sparen Sie sich die Taxis, die für dieselbe Fahrt 40 bis 50 EUR kosten.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9],
    avoidMonths: [1],
    monthlyNotes: {
      1: "Der kälteste, gräueste Monat mit Höchstwerten um 6C, kurzen Tagen und häufigem Regen, planen Sie also museumslastige Tage. Die Menschenmengen sind dünn und die Hotelpreise erreichen nach dem Jahreswechsel ihr Jahrestief, aber die beleuchtete Bootsroute des Amsterdam Light Festival läuft bis Mitte Januar und ist der eine Grund, der Dunkelheit zu trotzen.",
      2: "Weiterhin kalt und nass bei rund 7C und der ruhigste volle Monat für Sehenswürdigkeiten und Preise. Buchen Sie das Anne-Frank-Haus und das Van-Gogh-Museum, und Sie kommen mit Raum zum Atmen hindurch; packen Sie eine richtige Regenjacke statt eines Schirms, den der Wind an den Grachten zerstört.",
      3: "Die Höchstwerte klettern Richtung 10C und die Tulpensaison beginnt: die Gärten von Keukenhof öffnen in der zweiten Monatshälfte und laufen bis Mitte Mai. Die Menschenmengen sind noch moderat, aber die ersten Keukenhof- und Blumenfeld-Wochenenden füllen sich schnell, buchen Sie also die Transport-Tagesausflüge im Voraus.",
      4: "Richtiger Frühling bei rund 13C, mit Keukenhof in voller Blüte und den farbigen Blumenfeldern südlich von Haarlem. Der Königstag am 27. April verwandelt die ganze Stadt in eine orangefarbene Straßenparty und eine Grachtenflottille; es ist spektakulär, aber Sie müssen die Unterkunft Monate im Voraus buchen und damit rechnen, dass alles andere überfüllt ist.",
      5: "Einer der besten Monate, mit Höchstwerten um 17C, langen hellen Abenden und Keukenhof bis Monatsmitte geöffnet. Die Menschenmengen bauen sich stetig auf und die Hotelpreise erreichen die Höchstwerte der Nebensaison, sichern Sie sich also die Zimmer früh und beginnen Sie das Anne-Frank-Haus und die Museumsbesuche bei Öffnung.",
      6: "Warm bei rund 20C mit dem längsten Tageslicht des Jahres und Terrassen in vollem Betrieb. Die Touristenzahlen sind hoch, aber noch nicht auf dem Höhepunkt vom August; die Abende an den Grachten sind der Lohn, und Open-Air-Festivals beginnen den Kalender des Freilufttheaters im Vondelpark zu füllen.",
      7: "Hochsaison: 22C-Tage, überfüllte Museen und die höchsten Zimmerpreise des Sommers. Buchen Sie jede Sehenswürdigkeit mit Zeitfenster Wochen im Voraus, fahren Sie mit den Trams, statt um Taxis zu kämpfen, und heben Sie sich den Grachtengürtel für den frühen Morgen oder nach 20 Uhr auf, wenn die Menschenmengen ausdünnen.",
      8: "Dieselbe Wärme und dieselben Menschenmengen wie im Juli, plus Pride: die berühmte Canal Parade aus geschmückten Booten fährt am ersten Samstag über die Prinsengracht und zieht enorme Menschenmengen ans Wasser. Buchen Sie für dieses Wochenende weit im Voraus und rechnen Sie damit, dass zentrale Hotels vollständig ausgebucht sind.",
      9: "Höchstwerte um 19C, nach der ersten Woche merklich ausdünnende Menschenmengen und das mildeste Wetter der Nebensaison. Dies ist die kluge Alternative zum Sommer: die Preise lassen nach, Terrassen funktionieren an warmen Tagen noch, und die großen Museen sind ruhiger.",
      10: "Kühler bei rund 14C mit echter Herbstfärbung im Vondelpark und mehr zurückkehrendem Regen. Die Touristenzahlen sinken und die Hotelpreise folgen; ein preiswerter Monat, wenn Sie akzeptieren, dass die Zeit im Freien wetterabhängig ist und die Museen die Reise tragen.",
      11: "Grau, nass und kalt mit Höchstwerten um 9C, die ruhigste Strecke vor den Feiertagen. Die Preise sind niedrig und die Schlangen kurz; die Ankunftsfeiern zu Sinterklaas Mitte des Monats und die frühen Weihnachtslichter verleihen den ansonsten dunklen Tagen etwas Atmosphäre.",
      12: "Kalt bei rund 6C mit kurzen Tagen und häufigem Nieselregen, aber das Amsterdam Light Festival startet seine beleuchtete Grachten-Kunstroute Ende November und läuft bis in den Januar. Weihnachtsmärkte und beleuchtete Brücken heben die Stimmung; buchen Sie das Anne-Frank-Haus und die Museen früh, da die Feiertagswoche einen Anstieg der Besucher erlebt.",
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
    tagline: "Grachten, Museen und Fahrräder, alles in einem begehbaren Ring.",
    heroIntro:
      "Amsterdam packt eine Weltklasse-Kunstsammlung, einen UNESCO-Grachtengürtel und eine echte Café-Kultur in ein Zentrum, das Sie in einer halben Stunde zu Fuß durchqueren. Es läuft auf Fahrrädern und Trams statt auf Autos, der Trick ist also, den Verkehr lesen zu lernen und die großen Museen vor Ihrer Ankunft zu buchen. Drei Tage decken das Wesentliche in einem menschlichen Tempo ab; der Rest der Stadt belohnt es, am Wasser langsamer zu werden.",
    accent: { from: "#2F6E8F", to: "#C46A3A", ink: "#1E3E52" },
    neighborhoodSlugs: ["centrum", "jordaan", "de-pijp", "oud-west", "oost"],
    nearbyCitySlugs: ["bruges"],
  },

  neighborhoods: [
    {
      slug: "centrum",
      citySlug: "amsterdam",
      name: "Centrum (Altstadt)",
      lat: 52.3731,
      lng: 4.8922,
      bestFor: ["first-time", "nightlife"],
      vibe: "Der historische Kern rund um den Dam und den Grachtengürtel, durchzogen von den ältesten Straßen der Stadt. Tagsüber ist er dicht mit Besuchern, und nachts wird es in Teilen rund um das Rotlichtviertel laut, aber alles, was ein Erstbesucher will, liegt binnen zehn Gehminuten. Sie tauschen Ruhe gegen die kürzestmöglichen Wege zu den Hauptsehenswürdigkeiten.",
      pros: [
        "Der Dam, der Grachtengürtel und die Neun Straßen alle zu Fuß",
        "Größte Hotelauswahl und beste Tramanbindungen",
        "Null Nahverkehr nötig für eine Zweitagesreise",
      ],
      cons: [
        "Restaurants an den Hauptstraßen sind überteuert und auf Touristen ausgerichtet",
        "Lärm und Junggesellenabschied-Menschenmengen nahe dem Rotlichtviertel bei Nacht",
        "Sie zahlen einen klaren Lageaufschlag gegenüber De Pijp oder Oud-West",
      ],
    },
    {
      slug: "jordaan",
      citySlug: "amsterdam",
      name: "Jordaan",
      lat: 52.3745,
      lng: 4.8799,
      bestFor: ["romantic", "first-time", "local"],
      vibe: "Das meistfotografierte Quartier der Stadt: schmale Grachten, Giebelhäuser, Hofgärten und unabhängige Läden an Straßen von menschlichem Maßstab. Es ist zentral, aber ruhiger als die Altstadt, mit braunen Cafés, in denen Einheimische noch trinken. Wer hier übernachtet, hat das Anne-Frank-Haus und die westlichen Grachten vor der Tür.",
      pros: [
        "Schönste Grachten Amsterdams und das Anne-Frank-Haus in der Nähe",
        "Ausgezeichnete braune Cafés, Galerien und Samstagsmärkte",
        "Ruhig und wohnlich bei Nacht und doch ein kurzer Fußweg von allem",
      ],
      cons: [
        "Höhere Zimmerpreise als in den südlichen und westlichen Vierteln",
        "Kleine Grachtenhaus-Hotels bedeuten oft steile Treppen und keinen Aufzug",
        "Wenige große Supermärkte und begrenzte günstige Gastronomie",
      ],
    },
    {
      slug: "de-pijp",
      citySlug: "amsterdam",
      name: "De Pijp",
      lat: 52.3547,
      lng: 4.8925,
      bestFor: ["local", "budget", "nightlife"],
      vibe: "Ein dichtes, lebhaftes Raster südlich des Zentrums, aufgebaut rund um den täglichen Albert-Cuyp-Markt. Hier essen und trinken junge Amsterdamer, sodass die Restaurant- und Barszene das beste Preis-Leistungs-Verhältnis der Stadt bietet. Das Rijksmuseum und das Museumsviertel liegen zehn Gehminuten oder eine Tramstation nördlich.",
      pros: [
        "Beste Dichte an Essen und Nachtleben zu fairen lokalen Preisen",
        "Albert-Cuyp-Markt und Sarphatipark vor der Tür",
        "Fußläufig zum Museumsviertel",
      ],
      cons: [
        "Keine Grachtengürtel-Sehenswürdigkeiten im Viertel selbst",
        "Geschäftig und laut an den Hauptmarkt- und Barstraßen",
        "Inzwischen so beliebt, dass die Zimmer nicht mehr günstig sind",
      ],
    },
    {
      slug: "oud-west",
      citySlug: "amsterdam",
      name: "Oud-West",
      lat: 52.3639,
      lng: 4.8686,
      bestFor: ["local", "family", "budget"],
      vibe: "Ein Wohnviertel westlich des Vondelparks mit baumbestandenen Straßen und dem lebhaften Foodhallen-Food-Court als Herzstück. Hier leben Familien und Berufstätige, sodass es sich bewohnt statt touristisch anfühlt, und die Preise liegen unter dem Grachtengürtel. Trams bringen das Zentrum in zehn Minuten Reichweite.",
      pros: [
        "Der Vondelpark und die Foodhallen in wenigen Minuten",
        "Ruhigere, familienfreundliche Straßen zu besseren Preisen",
        "Schnelle Tramlinien direkt ins Zentrum und zum Museumsviertel",
      ],
      cons: [
        "Sie pendeln zu jeder größeren Sehenswürdigkeit, auch wenn der Weg kurz ist",
        "Keine Grachten oder Wahrzeichen-Gebäude im Viertel selbst",
        "Ruhigeres Nachtleben als De Pijp oder das Zentrum",
      ],
    },
    {
      slug: "oost",
      citySlug: "amsterdam",
      name: "Oost (Ost)",
      lat: 52.3603,
      lng: 4.9268,
      bestFor: ["local", "budget", "family"],
      vibe: "Ein breites, aufstrebendes Viertel östlich des Zentrums rund um den Oosterpark, das renovierte Blöcke des 19. Jahrhunderts mit einer starken multikulturellen Essensszene mischt. Es ist die Preis-Leistungs-Wahl: ruhige, begrünte Straßen, echte Viertelrestaurants und Zimmer deutlich unter dem Zentrum. Metro und Trams erreichen den Kern in zehn bis fünfzehn Minuten.",
      pros: [
        "Niedrigste einigermaßen zentrale Zimmerpreise der Stadt",
        "Vielfältige, authentische Essensszene mit fast keinem Touristenaufschlag",
        "Oosterpark, Zoo Artis und das Tropenmuseum in der Nähe",
      ],
      cons: [
        "Von diesen Vierteln am weitesten von den Grachtengürtel-Sehenswürdigkeiten",
        "Weitläufig, Sie sind also auf Tram oder Metro statt aufs Gehen angewiesen",
        "Weniger Wahrzeichen-Attraktionen im Viertel",
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
      tip: "Buchen Sie ein Zeitfenster online und nehmen Sie das früheste um 9 Uhr, wenn die Ehrengalerie mit Vermeer und der riesigen Rembrandt-Nachtwache noch nicht überfüllt ist. Der Garten und die Passage unter dem Gebäude sind kostenlos begehbar, und die Schlange am Museumscafé ist gegen 13 Uhr am schlimmsten, essen Sie also früh oder spät.",
    },
    {
      slug: "van-gogh-museum",
      citySlug: "amsterdam",
      name: "Van-Gogh-Museum",
      lat: 52.3584,
      lng: 4.8811,
      kind: "museum",
      needsBooking: true,
      tip: "Der Eintritt ist nur mit Zeitfenster möglich und es gibt keine Kasse für Laufkundschaft, buchen Sie also online vor Ihrer Ankunft und wählen Sie ein Zeitfenster direkt zur Öffnung um 9 Uhr oder nach 15 Uhr, um dem Mittagsandrang auszuweichen. Es liegt zwei Minuten vom Rijksmuseum, verbinden Sie die beiden also an einem Vormittag im Museumsviertel, statt sie auf zwei Tage aufzuteilen.",
    },
    {
      slug: "anne-frank-house",
      citySlug: "amsterdam",
      name: "Anne-Frank-Haus",
      lat: 52.3752,
      lng: 4.884,
      kind: "museum",
      needsBooking: true,
      tip: "Dies ist der Programmpunkt, um den Sie die ganze Reise planen: alle Tickets werden ausschließlich online verkauft, genau sechs Wochen im Voraus zu einer festen Zeit freigegeben, und die Zeitfenster sind binnen Minuten ausverkauft. Es gibt überhaupt keine Schlange für Laufkundschaft, stellen Sie sich also eine Kalendererinnerung für den Freigabetag und kaufen Sie in dem Moment, in dem sie live gehen. Drinnen dauert die zeitgesteuerte Route durch das Hinterhaus etwa eine Stunde.",
    },
    {
      slug: "canal-cruise",
      citySlug: "amsterdam",
      name: "Grachtenfahrt",
      lat: 52.3644,
      lng: 4.8916,
      kind: "experience",
      needsBooking: false,
      tip: "Meiden Sie die riesigen glasüberdachten Boote nahe Centraal und wählen Sie ein kleines offenes Elektroboot von den Anlegern am Rijksmuseum oder Anne-Frank-Haus für eine ruhigere Stunde auf dem Wasser. Fahren Sie um Sonnenuntergang für das beste Licht auf den Giebelhäusern und buchen Sie im Sommer eine bestimmte Abfahrt online, wenn die beliebten Kleinboot-Anbieter ausgebucht sind.",
    },
    {
      slug: "vondelpark",
      citySlug: "amsterdam",
      name: "Vondelpark",
      lat: 52.3579,
      lng: 4.8686,
      kind: "park",
      needsBooking: false,
      tip: "Die zentrale grüne Lunge der Stadt, kostenlos und rund um die Uhr geöffnet, am besten von der Seite des Museumsviertels aus betreten und mit einem Kaffee westwärts durchlaufen. An Sommerwochenenden laufen im Freilufttheater nahe der Mitte kostenlose Konzerte und Shows; prüfen Sie den Spielplan, denn es ist der beste kostenlose Abend in Amsterdam, wenn das Wetter mitspielt.",
    },
    {
      slug: "jordaan-canals",
      citySlug: "amsterdam",
      name: "Grachtenspaziergang im Jordaan",
      lat: 52.374,
      lng: 4.881,
      kind: "sight",
      needsBooking: false,
      tip: "Gehen Sie die Prinsengracht, die Bloemgracht und die kleine Egelantiersgracht zu Fuß ohne feste Route ab; dies ist die schönste und am wenigsten kommerzielle Strecke des Grachtengürtels. Kommen Sie vor 10 Uhr oder nach 19 Uhr für Fotos ohne Menschenmengen und machen Sie einen Abstecher in den kostenlosen Karthuizerhof, einen ruhigen Armenhausgarten, an dem die meisten Besucher direkt vorbeigehen.",
    },
    {
      slug: "albert-cuyp-market",
      citySlug: "amsterdam",
      name: "Albert-Cuyp-Markt",
      lat: 52.3556,
      lng: 4.8916,
      kind: "food",
      needsBooking: false,
      tip: "Der größte tägliche Straßenmarkt der Niederlande, montags bis samstags etwa von 9 bis 17 Uhr geöffnet und sonntags geschlossen, planen Sie also danach. Kommen Sie für eine frisch gepresste Stroopwafel und niederländische Käseproben statt für Souvenirs und gehen Sie am Samstag vor Mittag, dem geschäftigsten Zeitpunkt, wenn Sie Platz zum Bewegen wollen.",
    },
    {
      slug: "begijnhof",
      citySlug: "amsterdam",
      name: "Begijnhof",
      lat: 52.3691,
      lng: 4.8899,
      kind: "sight",
      needsBooking: false,
      tip: "Ein stiller mittelalterlicher Hof aus Armenhäusern, versteckt hinter einer unmarkierten Tür am Spui-Platz, kostenlos zu betreten und einer der ältesten Orte der Stadt. Halten Sie Ihre Stimme gesenkt, da hier noch Menschen wohnen, und achten Sie auf das schwarze Holzhaus mit der Nummer 34, das älteste erhaltene Holzhaus Amsterdams. Nur zu Tageszeiten geöffnet.",
    },
    {
      slug: "dam-square",
      citySlug: "amsterdam",
      name: "Dam-Platz und Königlicher Palast",
      lat: 52.3731,
      lng: 4.8926,
      kind: "sight",
      needsBooking: false,
      tip: "Behandeln Sie den Platz selbst als 15-minütigen Durchgang für das Nationaldenkmal und die Palastfassade statt als Ziel. Das Innere des Königlichen Palasts ist das Ticket nur wert, wenn der König ihn nicht nutzt, prüfen Sie also die Website auf Schließungen, bevor Sie zahlen; ansonsten fotografieren Sie die Vorderseite und ziehen Sie weiter zu den nahen Neun Straßen.",
    },
    {
      slug: "bloemenmarkt",
      citySlug: "amsterdam",
      name: "Schwimmender Blumenmarkt Bloemenmarkt",
      lat: 52.3667,
      lng: 4.8918,
      kind: "sight",
      needsBooking: false,
      tip: "Der schwimmende Blumenmarkt an der Singel ist ein Fünf-Minuten-Halt, fügen Sie ihn also in einen Spaziergang zwischen dem Dam und dem Rijksmuseum ein, statt einen eigenen Weg zu machen. Die hier verkauften Tulpenzwiebeln sind für den Export zertifiziert, falls Sie einige mit nach Hause nehmen möchten; prüfen Sie zuerst die Einfuhrbestimmungen Ihres eigenen Landes, da viele das pflanzengesundheitliche Etikett verlangen, das die Stände liefern.",
    },
    {
      slug: "nine-streets",
      citySlug: "amsterdam",
      name: "Die Neun Straßen (De 9 Straatjes)",
      lat: 52.369,
      lng: 4.8859,
      kind: "sight",
      needsBooking: false,
      tip: "Neun kurze Querstraßen, die die Hauptgrachten zwischen dem Jordaan und dem Dam verbinden, vollgepackt mit unabhängigen Boutiquen, Vintage-Läden und kleinen Cafés. Dies ist der beste Bereich für ein gemächliches Stöbern und ein Mittagessen im Grachtenhaus; kommen Sie an einem Wochentag, um dem Wochenend-Shoppinggedränge auszuweichen, und beachten Sie, dass die meisten unabhängigen Läden spät öffnen, gegen 11 Uhr.",
    },
    {
      slug: "foodhallen",
      citySlug: "amsterdam",
      name: "Foodhallen",
      lat: 52.3665,
      lng: 4.8697,
      kind: "food",
      needsBooking: false,
      tip: "Eine überdachte Markthalle in einem umgebauten Tramdepot in Oud-West, mit ein paar Dutzend Ständen unter einem Dach, ideal an einem Regentag oder für eine Gruppe, die sich nicht einigen kann. Es wird ab 19 Uhr an Wochenenden voll und laut, kommen Sie also bis 18 Uhr für einen Tisch, und zahlen Sie mit Karte, da die meisten Stände kein Bargeld nehmen.",
    },
    {
      slug: "adam-lookout",
      citySlug: "amsterdam",
      name: "A'DAM Lookout",
      lat: 52.3841,
      lng: 4.9008,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Ein Aussichtspunkt auf dem Dach jenseits des IJ mit Europas höchster Schaukel, erreichbar mit einer kostenlosen Fähre, die direkt hinter dem Bahnhof Centraal alle paar Minuten ablegt und etwa drei Minuten braucht. Buchen Sie das Schaukel-Zeitfenster online, um Wartezeit zu vermeiden, fahren Sie um Sonnenuntergang für das beste Licht über der Stadt und bedenken Sie, dass die Fähre die ganze Nacht verkehrt, falls Sie oben auf einen Drink bleiben.",
    },
    {
      slug: "heineken-experience",
      citySlug: "amsterdam",
      name: "Heineken Experience",
      lat: 52.3577,
      lng: 4.8916,
      kind: "experience",
      needsBooking: true,
      tip: "Eine selbstgeführte Markentour in der alten Brauerei nahe De Pijp, am besten online gebucht für einen Rabatt gegenüber dem Preis vor Ort und eine feste Eintrittszeit, die die Schlange umgeht. Nehmen Sie das früheste Zeitfenster, um den Nachmittagswellen aus Schulklassen und Junggesellengruppen auszuweichen, und wissen Sie, dass es mehr Marketing als arbeitende Brauerei ist, behandeln Sie es also als eine unterhaltsame Stunde statt als ernsthafte Biertour.",
    },
  ],

  itineraries: [
    {
      citySlug: "amsterdam",
      days: 2,
      summary:
        "Zwei Tage genügen für Amsterdams Hauptsehenswürdigkeiten, wenn Sie im Voraus buchen und zentral wohnen, aber Sie streifen die Viertel, die die Stadt einer Rückkehr wert machen, nur oberflächlich. Das Zentrum ist kompakt: der Grachtengürtel, das Museumsviertel und der Jordaan liegen binnen eines 25-minütigen Fußwegs zueinander, sodass ein straffer Plan das Rijksmuseum, das Van-Gogh-Museum und das Anne-Frank-Haus plus einen Grachtenspaziergang ohne viel Nahverkehr abdeckt. Quartieren Sie sich im Centrum ein, damit beide Morgen zu Fuß beginnen. Die Struktur, die funktioniert, ist ein Thema pro Tag: das Museumsviertel und der Vondelpark an Tag eins, der Grachtengürtel, der Jordaan und das Anne-Frank-Haus an Tag zwei. Buchen Sie drei Dinge vor Ihrer Ankunft, denn Tickets sind die einzige echte Bedrohung für einen 48-Stunden-Besuch: das Anne-Frank-Haus in dem Moment, in dem seine Zeitfenster sechs Wochen im Voraus freigegeben werden, und Zeitfenster für das Van-Gogh-Museum und das Rijksmuseum. Was Sie opfern, ist De Pijp, die Märkte und jeder langsame Abend am Wasser, was genau das ist, was ein dritter Tag kauft.",
      stayNeighborhoodSlug: "centrum",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Museumsviertel und Vondelpark",
          morning: [
            {
              poiSlug: "rijksmuseum",
              text: "Beginnen Sie am Rijksmuseum zu einem vorgebuchten 9-Uhr-Zeitfenster und steuern Sie direkt die Ehrengalerie an, um die Nachtwache und die Vermeers zu sehen, bevor sich die Räume füllen. Geben Sie ihm zwei Stunden und versuchen Sie nicht, alles zu sehen.",
              durationMin: 120,
            },
            {
              poiSlug: "van-gogh-museum",
              text: "Gehen Sie zwei Minuten über den Museumplein zum Van-Gogh-Museum für Ihr Zeitfenster. Die Sammlung verläuft chronologisch, folgen Sie also den Stockwerken der Reihe nach, um seinen Stilwandel zu verfolgen.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Mittagessen auf oder nahe dem Museumplein, dann durchstreifen Sie den kostenlosen Skulpturengarten hinter dem Rijksmuseum und die I-amsterdam-Buchstaben für das klassische Foto.",
              durationMin: 75,
            },
            {
              poiSlug: "vondelpark",
              text: "Betreten Sie den Vondelpark von der Seite des Museumsviertels und durchlaufen Sie ihn der Länge nach mit einem Kaffee, mit Halt am Teich und am Freilufttheater. Es ist kostenlos und der beste Weg, nach zwei Museen abzuschalten.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "canal-cruise",
              text: "Machen Sie um Sonnenuntergang eine Grachtenfahrt in einem kleinen offenen Elektroboot vom Anleger am Rijksmuseum und meiden Sie die großen glasüberdachten Boote nahe Centraal. Eine Stunde auf dem Wasser rahmt Ihnen den ganzen Grachtengürtel.",
              durationMin: 75,
            },
            {
              text: "Abendessen im Zentrum abseits der Haupttouristenstraßen; gehen Sie einen Block zurück vom Dam oder vom Leidseplein, und Preise und Qualität verbessern sich beide deutlich.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Grachtengürtel, der Jordaan und Anne Frank",
          morning: [
            {
              poiSlug: "anne-frank-house",
              text: "Kommen Sie zu Ihrem vorgebuchten Zeitfenster am Anne-Frank-Haus; es gibt keine Option für Laufkundschaft, dieses Ticket musste also am Tag der Freigabe sechs Wochen im Voraus gekauft werden. Die zeitgesteuerte Route durch das Hinterhaus dauert etwa eine Stunde und trifft früh am Tag am härtesten.",
              durationMin: 75,
            },
            {
              poiSlug: "jordaan-canals",
              text: "Treten Sie direkt hinaus in den Jordaan und gehen Sie die Prinsengracht, die Bloemgracht und die Egelantiersgracht ohne feste Route ab, mit einem Abstecher in den kostenlosen Armenhaushof Karthuizerhof.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "nine-streets",
              text: "Wechseln Sie in die Neun Straßen für ein Mittagessen im Grachtenhaus und ein gemächliches Stöbern in den unabhängigen Läden zwischen den Hauptgrachten. Die meisten öffnen gegen 11 Uhr, der frühe Nachmittag ist also der ideale Zeitpunkt.",
              durationMin: 105,
            },
            {
              poiSlug: "begijnhof",
              text: "Schlüpfen Sie durch die unmarkierte Tür am Spui in den stillen Begijnhof-Hof und achten Sie dann auf das schwarze Holzhaus mit der Nummer 34, das älteste der Stadt. Halten Sie Ihre Stimme gesenkt; hier wohnen noch Menschen.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "dam-square",
              text: "Gehen Sie durch den Dam für die Fassade des Königlichen Palasts und das Nationaldenkmal, behandeln Sie es als 15-minütigen Durchgang statt als Halt, dann drehen Sie eine Runde an den Blumenständen der Bloemenmarkt an der Singel vorbei.",
              durationMin: 45,
            },
            {
              text: "Schließen Sie mit einem Drink in einem braunen Café im Jordaan ab, der Art mit Sand auf dem Boden und Einheimischen an der Bar, für den amsterdamischsten Abend, den das Zentrum bietet.",
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
        "Drei Tage sind die richtige Zeitspanne für Amsterdam: genug für die großen drei Museen und den Grachtengürtel in einem menschlichen Tempo, plus einen Tag, der den Vierteln statt der Checkliste gehört. Zwei Tage zwingen Sie, das Museumsviertel und die Grachten hintereinander im Sprint zu absolvieren; der dritte Tag fügt De Pijp, den Albert-Cuyp-Markt und einen Dachblick über das IJ hinzu, mit Zeit, in einem Café zu sitzen, ohne auf die Uhr zu schauen. Übernachten Sie im Jordaan, dem schönsten und ruhigsten zentralen Quartier, sodass das Anne-Frank-Haus und die westlichen Grachten vor der Tür liegen und die Abende ruhig bleiben. Die Form des Plans: das Museumsviertel und der Vondelpark an Tag eins, der Grachtengürtel und der Jordaan an Tag zwei, De Pijp und das Nordufer an Tag drei. Buchen Sie drei Dinge online vor der Ankunft: das Anne-Frank-Haus in dem Moment, in dem seine Zeitfenster sechs Wochen im Voraus freigegeben werden, und Zeitfenster für das Van-Gogh-Museum und das Rijksmuseum. Alles andere belohnt es, früh zu erscheinen und die Trams statt Taxis zu nehmen.",
      stayNeighborhoodSlug: "jordaan",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Museumsviertel und Vondelpark",
          morning: [
            {
              poiSlug: "rijksmuseum",
              text: "Fahren Sie von Ihrer Basis im Jordaan mit der Tram hinab zum Rijksmuseum für ein 9-Uhr-Zeitfenster und steuern Sie direkt die Ehrengalerie und die Nachtwache an, bevor sich die Menschenmengen aufbauen.",
              durationMin: 120,
            },
            {
              poiSlug: "van-gogh-museum",
              text: "Queren Sie den Museumplein zum Van-Gogh-Museum für Ihr Zeitfenster und folgen Sie den Stockwerken in chronologischer Reihenfolge, um zu beobachten, wie sich das Werk wandelt.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Mittagessen nahe dem Museumplein, dann durchlaufen Sie den kostenlosen Skulpturengarten hinter dem Rijksmuseum und fotografieren die I-amsterdam-Buchstaben.",
              durationMin: 75,
            },
            {
              poiSlug: "vondelpark",
              text: "Durchlaufen Sie den Vondelpark der Länge nach vom Ende des Museumsviertels, mit Halt am Freilufttheater, das an Sommerwochenenden kostenlose Shows zeigt. Dies ist der beste kostenlose Nachmittag der Stadt.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "canal-cruise",
              text: "Machen Sie eine Grachtenfahrt in einem kleinen offenen Elektroboot bei Sonnenuntergang für das beste Licht auf den Giebelhäusern und buchen Sie im Sommer eine Abfahrt vor, wenn die guten Anbieter ausverkauft sind.",
              durationMin: 75,
            },
            {
              text: "Abendessen zurück im Jordaan in einem kleinen Restaurant an der Gracht, dann ein Schlummertrunk in einem braunen Café, in dem die Einheimischen trinken.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Grachtengürtel und der Jordaan",
          morning: [
            {
              poiSlug: "anne-frank-house",
              text: "Gehen Sie zu Ihrem vorgebuchten Zeitfenster am Anne-Frank-Haus; es gibt keine Schlange für Laufkundschaft, dies musste also am Tag der Ticketfreigabe sechs Wochen im Voraus gekauft werden. Die zeitgesteuerte Route durch das Hinterhaus dauert etwa eine Stunde.",
              durationMin: 75,
            },
            {
              poiSlug: "jordaan-canals",
              text: "Erkunden Sie Ihr eigenes Viertel zu Fuß: die Prinsengracht, die Bloemgracht und die Egelantiersgracht, plus den ruhigen Karthuizerhof-Hof, den die meisten Besucher verpassen.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "nine-streets",
              text: "Wechseln Sie in die Neun Straßen für ein Mittagessen in einem Grachtenhaus und ein Stöbern in den unabhängigen Läden. Wochentage sind weit ruhiger als das Wochenend-Shoppinggedränge.",
              durationMin: 105,
            },
            {
              poiSlug: "begijnhof",
              text: "Tauchen Sie durch die unmarkierte Tür am Spui in den Begijnhof-Hof ein und finden Sie das schwarze Holzhaus mit der Nummer 34, das älteste Amsterdams.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "dam-square",
              text: "Passieren Sie den Dam für den Königlichen Palast und das Nationaldenkmal, dann gehen Sie die Singel entlang an den schwimmenden Blumenständen der Bloemenmarkt vorbei, während sie schließen.",
              durationMin: 60,
            },
            {
              text: "Abendessen im Zentrum einen Block abseits der Hauptstraßen, dann ein langsamer Rückweg in den Jordaan entlang der laternenbeleuchteten Prinsengracht, dem Grachtengürtel von seiner besten Seite nach Einbruch der Dunkelheit.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "De Pijp, Märkte und das Nordufer",
          morning: [
            {
              poiSlug: "albert-cuyp-market",
              text: "Fahren Sie mit der Tram nach De Pijp zum Albert-Cuyp-Markt vor Mittag, wenn er am lebhaftesten, aber noch begehbar ist. Holen Sie sich eine frisch gepresste Stroopwafel und grasen Sie die Käse- und Essensstände ab statt der Souvenirs.",
              durationMin: 90,
            },
            {
              text: "Schlendern Sie südlich in den kleinen Sarphatipark und die cafégesäumten Seitenstraßen von De Pijp, das Viertel, in dem junge Amsterdamer tatsächlich essen und trinken.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "heineken-experience",
              text: "Machen Sie die nahe Heineken Experience zu einem vorgebuchten Zeitfenster, wenn Sie die Markentour möchten, und behandeln Sie sie als unterhaltsame Stunde statt als ernsthaften Brauereibesuch; ansonsten verbringen Sie die Zeit in weiteren Cafés von De Pijp.",
              durationMin: 105,
            },
            {
              text: "Fahren Sie mit der Tram nach Centraal und nehmen Sie die kostenlose dreiminütige Fähre von hinter dem Bahnhof über das IJ nach Amsterdam Noord.",
              durationMin: 30,
            },
          ],
          evening: [
            {
              poiSlug: "adam-lookout",
              text: "Fahren Sie mit dem Lift hinauf zum A'DAM Lookout für den Dachblick über die Stadt um Sonnenuntergang und nehmen Sie die Schaukel über das Dach, wenn Sie schwindelfrei sind. Buchen Sie das Schaukel-Zeitfenster vor, um die Wartezeit zu umgehen.",
              durationMin: 90,
            },
            {
              text: "Essen Sie am Wasser in Noord mit Blick zurück auf die Skyline zu Abend, dann nehmen Sie die Fähre zurück; sie verkehrt die ganze Nacht, es gibt also keine Eile.",
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
        "Vier Tage sind mehr als genug für Amsterdams Sehenswürdigkeiten, und das ist der Punkt: der vierte Tag verwandelt einen Museumssprint in eine echte Reise. Die Tage eins bis drei decken das Museumsviertel, den Grachtengürtel, den Jordaan und De Pijp in einem entspannten Tempo ab; Tag vier gehört Ihnen für entweder einen langsamen lokalen Tag in den östlichen Vierteln oder einen Tagesausflug zu den Windmühlen von Zaanse Schans oder nach Haarlem, beide unter 30 Minuten mit dem Zug. Mit so viel Zeit meiden Sie das geschäftige Zentrum und übernachten in De Pijp, zehn Minuten vom Museumsviertel, günstiger als der Grachtengürtel und Heimat des Essens und Nachtlebens mit dem besten Preis-Leistungs-Verhältnis der Stadt. Die Logik von einem Thema pro Tag gilt weiterhin: halten Sie die zwei großen Museen und den Vondelpark zusammen, halten Sie die Grachten und den Jordaan zusammen, und zickzacken Sie nicht quer durch die Stadt. Buchen Sie das Anne-Frank-Haus am Tag der Zeitfenster-Freigabe sechs Wochen im Voraus vor, plus Zeitfenster für das Van-Gogh-Museum und das Rijksmuseum. Wenn Sie zwischen drei und vier Tagen wählen müssten, ist der vierte derjenige, an den Sie sich erinnern werden.",
      stayNeighborhoodSlug: "de-pijp",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Museumsviertel und Vondelpark",
          morning: [
            {
              poiSlug: "rijksmuseum",
              text: "Gehen Sie von De Pijp hinauf zum Rijksmuseum für Ihr 9-Uhr-Zeitfenster und direkt zur Ehrengalerie für die Nachtwache und die Vermeers, bevor sich die Räume füllen.",
              durationMin: 120,
            },
            {
              poiSlug: "van-gogh-museum",
              text: "Queren Sie den Museumplein zum Van-Gogh-Museum für Ihr Zeitfenster und folgen Sie den Stockwerken der Reihe nach, um nachzuvollziehen, wie sich seine Malerei veränderte.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Mittagessen am Museumplein, dann der kostenlose Skulpturengarten hinter dem Rijksmuseum und die I-amsterdam-Buchstaben für das Foto.",
              durationMin: 75,
            },
            {
              poiSlug: "vondelpark",
              text: "Durchlaufen Sie den Vondelpark von Ende zu Ende, mit einer Pause am Freilufttheater für eine kostenlose Sommershow, falls der Spielplan passt.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "canal-cruise",
              text: "Machen Sie eine Grachtenfahrt in einem kleinen offenen Boot bei Sonnenuntergang vom Anleger am Rijksmuseum für das beste Licht auf dem Wasser und buchen Sie in der Hochsaison vor.",
              durationMin: 75,
            },
            {
              text: "Abendessen zurück in De Pijp, wo die Restaurant- und Barstraßen rund um den Albert Cuyp das beste Preis-Leistungs-Verhältnis der Stadt bieten, dann ein Drink in einem lokalen Café.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Grachtengürtel und der Jordaan",
          morning: [
            {
              poiSlug: "anne-frank-house",
              text: "Fahren Sie mit der Tram zu Ihrem vorgebuchten Zeitfenster am Anne-Frank-Haus; es gibt keine Schlange für Laufkundschaft, dieses Ticket musste also am Tag der Freigabe sechs Wochen im Voraus gekauft werden. Die Route durch das Hinterhaus dauert etwa eine Stunde.",
              durationMin: 75,
            },
            {
              poiSlug: "jordaan-canals",
              text: "Gehen Sie die Grachten des Jordaan ab, die Prinsengracht, die Bloemgracht und die Egelantiersgracht, mit einem Abstecher in den ruhigen Armenhaushof Karthuizerhof.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "nine-streets",
              text: "Mittagessen und Stöbern in den Neun Straßen zwischen den Hauptgrachten; wählen Sie einen Wochentag, um den Wochenend-Shoppingmengen auszuweichen.",
              durationMin: 105,
            },
            {
              poiSlug: "begijnhof",
              text: "Finden Sie den versteckten Begijnhof-Hof am Spui und das schwarze Holzhaus mit der Nummer 34, dann drehen Sie eine Runde am Blumenmarkt Bloemenmarkt an der Singel vorbei.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "dam-square",
              text: "Gehen Sie in der Abenddämmerung durch den Dam für den Königlichen Palast und das Nationaldenkmal, ein 15-minütiger Durchgang statt eines Halts.",
              durationMin: 30,
            },
            {
              text: "Abendessen im Zentrum einen Block abseits der Touristenstraßen, dann ein Rückweg entlang der laternenbeleuchteten Prinsengracht.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "De Pijp, Märkte und das Nordufer",
          morning: [
            {
              poiSlug: "albert-cuyp-market",
              text: "Beginnen Sie vor der eigenen Tür am Albert-Cuyp-Markt vor Mittag und schnappen Sie sich eine frische Stroopwafel und grasen Sie die Essensstände ab. Denken Sie daran, dass er sonntags schließt.",
              durationMin: 90,
            },
            {
              poiSlug: "heineken-experience",
              text: "Machen Sie die nahe Heineken Experience zu einem vorgebuchten frühen Zeitfenster, wenn die Markentour reizt, und behandeln Sie sie als leichte Stunde, dann schlendern Sie durch den Sarphatipark und die Seitenstraßen von De Pijp.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Fahren Sie mit der Tram nach Centraal und nehmen Sie die kostenlose dreiminütige Fähre über das IJ nach Amsterdam Noord, dem am stärksten gewandelten Viertel der Stadt.",
              durationMin: 45,
            },
            {
              poiSlug: "adam-lookout",
              text: "Fahren Sie hinauf zum A'DAM Lookout für das Dachpanorama und, wenn Sie sich trauen, die Schaukel über das Dach. Buchen Sie das Schaukel-Zeitfenster vor, um die Schlange zu vermeiden.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Essen Sie früh am Wasser in Noord mit Blick zurück auf die Skyline zu Abend, dann fahren Sie mit der Fähre über das IJ zurück, die die ganze Nacht verkehrt.",
              durationMin: 105,
            },
            {
              text: "Schließen Sie mit einem Schlummertrunk in De Pijp ab; die Bars hier laufen länger und günstiger als alles im Zentrum.",
              durationMin: 60,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Lokaler Oost-Tag oder Tagesausflug Zaanse Schans und Haarlem",
          morning: [
            {
              text: "Option A: Fahren Sie mit der Tram ostwärts nach Oost für einen langsamen lokalen Vormittag rund um den Oosterpark, das Tropenmuseum zu den Weltkulturen und die multikulturellen Cafés des Dappermarkts. Option B: Nehmen Sie den Direktzug von Centraal nach Zaandijk Zaanse Schans, etwa 17 Minuten, für die arbeitenden Windmühlen, Holzhäuser und Käse- und Holzschuh-Werkstätten am Fluss.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              text: "Option A geht in Oost weiter mit einem Mittagessen in einem Viertelbistro und einem Spaziergang durch das Gelände des Zoos Artis oder entlang der östlichen Hafeninseln. Option B: Springen Sie mit dem Zug weiter nach Haarlem, 15 Minuten von Zaandijk oder Amsterdam, für die kompakte Altstadt, den Grote Markt und das Frans-Hals-Museum vor dem Rückzug.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              text: "Enden Sie so oder so zurück in De Pijp auf den Terrassen und in den Bars rund um den Albert Cuyp und den Sarphatipark, der echten Abendszene des Viertels.",
              durationMin: 120,
            },
            {
              text: "Letztes Abendessen in einem Restaurant in De Pijp; das Viertel macht einfallsreiches Essen zu fairen Preisen, ein passendes Abschlussmahl nach den Touristenmenüs des Zentrums.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
  ],
};

export default amsterdamDe;
