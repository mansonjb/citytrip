import type { CityData } from "../types";

const viennaDe: CityData = {
  city: {
    slug: "vienna",
    name: "Wien",
    country: "Österreich",
    countrySlug: "austria",
    lat: 48.2082,
    lng: 16.3738,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "VIE",
    airportToCenter:
      "Die S-Bahn S7 fährt vom Flughafen in etwa 25 Minuten für 4,30 EUR nach Wien Mitte und ist damit die günstigste sinnvolle Option. Der City Airport Train (CAT) bedient dieselbe Strecke ohne Halt in 16 Minuten, kostet aber rund 14,90 EUR pro Fahrt, weshalb die meisten Besucher die S7 nehmen.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10, 12],
    avoidMonths: [1],
    monthlyNotes: {
      1: "Kalt und grau mit Höchstwerten um 3 °C und den bereits abgebauten Christkindlmärkten, weshalb dies der ruhigste und günstigste Monat ist. Es ist zugleich das Herz der Ballsaison: Dutzende von Bällen laufen durch den Januar, und die Hotelnachfrage steigt nur an diesen bestimmten Abenden sprunghaft an.",
      2: "Noch immer nahe am Gefrierpunkt, doch die Wiener Ballsaison erreicht ihren Höhepunkt und gipfelt Ende Februar im Opernball an der Staatsoper, dem berühmtesten Abend des gesellschaftlichen Kalenders. Abseits der Bälle ist die Stadt ruhig und die Zimmer bleiben günstig; packen Sie für Tiefstwerte unter null.",
      3: "Die Höchstwerte klettern Richtung 11 °C und die Schlossgärten öffnen langsam wieder für die Saison. Die Menschenmengen sind noch dünn und die Preise liegen unter dem Frühlingshoch, was dies zu einem klugen Fenster in der Nebensaison macht, bevor die Osternachfrage einsetzt.",
      4: "Richtiger Frühling um die 15 °C, mit blühenden Schönbrunner Gärten und dem Prater sowie Ostermärkten auf der Freyung und in Schönbrunn. An Wochenenden wird es rund um Ostern voll, buchen Sie die Zeitfenster-Tickets für das Schloss also im Voraus.",
      5: "Einer der besten Monate bei rund 20 °C, und die Wiener Festwochen eröffnen Mitte Mai und laufen bis in den Juni mit Theater, Musik und Installationen in der ganzen Stadt. Buchen Sie die Unterkunft früh; die Mai-Wochenenden erreichen die Höchststände der Nebensaison.",
      6: "Warm bei rund 24 °C mit langen Tagen, dem Ausklang der Wiener Festwochen und Open-Air-Konzerten, darunter das kostenlose Sommernachtskonzert der Wiener Philharmoniker in den Schönbrunner Gärten. Biergärten und die Donauinsel füllen sich; die Menschenmengen wachsen, bleiben aber unter dem Hochsommer.",
      7: "Sommerhitze auf ihrem Höhepunkt nahe 26 °C, der geschäftigste Touristenmonat, und die Wiener Staatsoper schließt für ihre Sommerpause, prüfen Sie also das Sommerprogramm, falls die Oper Ihr Reisegrund ist. Das Filmfestival am Rathausplatz baut vor dem Rathaus auf, mit kostenlosen Filmvorführungen und Essensständen den ganzen Monat.",
      8: "Dieselbe Hitze und dieselben Menschenmengen wie im Juli, mit gelegentlichen Nachmittagsgewittern und vielen Einheimischen im Urlaub. Das Filmfestival am Rathausplatz geht weiter; die Donauinsel und die Badebereiche der Alten Donau sind die besten Orte, um der Hitze zu entkommen.",
      9: "Höchstwerte um 21 °C, nach der ersten Woche dünnere Menschenmengen und der Beginn der Kultursaison, wenn Oper und Konzertsäle wieder öffnen. Die Preise geben nach und das Wetter bleibt verlässlich, was dies zur klugen Alternative zum Sommer macht.",
      10: "Frische Tage um 14 °C und kräftige Herbstfärbung im Prater und in den Schlossparks. Die Touristenzahlen sinken nach Monatsmitte spürbar und die Hotelpreise folgen; der Nationalfeiertag am 26. Oktober bringt freien Museumseintritt und militärische Vorführungen am Heldenplatz.",
      11: "Grau und kalt mit Höchstwerten um 7 °C, die ruhigste Phase des Jahres, bis die Christkindlmärkte in der zweiten Monatshälfte öffnen. Der späte November ist ein Sweet Spot: die Atmosphäre des Marktes am Rathausplatz ohne die Dichte der Dezember-Wochenenden.",
      12: "Die Christkindlmärkte laufen von Mitte November bis zum 26. Dezember, der größte am Rathausplatz mit Hunderten von Ständen, dazu Belvedere, Schönbrunn, Spittelberg und Am Hof. Erwarten Sie Tiefstwerte unter dem Gefrierpunkt, überall heißen Punsch, dichte Wochenendmengen und Dezember-Hotelpreise weit über der Winternorm.",
    },
    climate: {
      1: { highC: 3, lowC: -2, rainyDays: 8 },
      2: { highC: 5, lowC: -1, rainyDays: 7 },
      3: { highC: 11, lowC: 2, rainyDays: 8 },
      4: { highC: 15, lowC: 6, rainyDays: 8 },
      5: { highC: 20, lowC: 10, rainyDays: 9 },
      6: { highC: 24, lowC: 14, rainyDays: 10 },
      7: { highC: 26, lowC: 16, rainyDays: 9 },
      8: { highC: 26, lowC: 15, rainyDays: 9 },
      9: { highC: 21, lowC: 11, rainyDays: 6 },
      10: { highC: 14, lowC: 7, rainyDays: 7 },
      11: { highC: 7, lowC: 3, rainyDays: 8 },
      12: { highC: 4, lowC: -1, rainyDays: 8 },
    },
    budgetLevel: "mid",
    budgetPerDay: { budget: 70, mid: 140, high: 280 },
    tagline: "Kaiserliche Schlösser, Kaffeehaus-Rituale, Klimt-Gold.",
    heroIntro:
      "Wien verpackt den Habsburgerhof, eine Wand von Weltklasse-Museen und eine lebendige Kaffeehauskultur in ein von Straßenbahnen umschlossenes Zentrum, das Sie an einem Tag begreifen. Die kaiserlichen Sehenswürdigkeiten liegen leicht abseits, der Trick besteht also darin, die Schlösser an einem Tag und die Innenstadt am Ring an einem anderen zu gruppieren. Drei Tage decken die Hofburg, Schönbrunn, das Belvedere und das Museumsviertel ohne Hetze ab und lassen noch einen Abend für Stehplatzoper und ein langsames Café.",
    accent: { from: "#A83E5B", to: "#D9A441", ink: "#5E2438" },
    neighborhoodSlugs: [
      "innere-stadt",
      "leopoldstadt",
      "neubau",
      "mariahilf",
      "landstrasse",
    ],
    nearbyCitySlugs: ["prague", "budapest"],
  },

  neighborhoods: [
    {
      slug: "innere-stadt",
      citySlug: "vienna",
      name: "Innere Stadt (Altstadt)",
      lat: 48.2085,
      lng: 16.3721,
      bestFor: ["first-time", "romantic"],
      vibe: "Der historische erste Bezirk innerhalb der Ringstraße, angelegt rund um den Stephansdom und die Hofburg. Dies ist der kaiserliche Kern, ganz aus prächtigen Boulevards, Arkadenhöfen und den klassischen Kaffeehäusern, und alles, was ein Erstbesucher will, liegt in fünfzehn Gehminuten. Abends leert er sich von den Tagesmassen und wird still und elegant.",
      pros: [
        "Dom, Hofburg, Staatsoper und die Hauptmuseen alle zu Fuß",
        "Jede Straßenbahn- und U-Bahn-Linie läuft hier zusammen, Tagesausflüge starten leicht",
        "Kein Nahverkehr nötig für eine 2-Tage-Reise",
      ],
      cons: [
        "Der teuerste Bezirk der Stadt für Hotels und Essen",
        "Restaurants rund um Dom und Graben sind touristisch überteuerte Fallen",
        "Begrenztes echtes Nachtleben; es wird still nach dem Abendessen",
      ],
    },
    {
      slug: "leopoldstadt",
      citySlug: "vienna",
      name: "Leopoldstadt",
      lat: 48.2167,
      lng: 16.3925,
      bestFor: ["local", "family", "budget"],
      vibe: "Der zweite Bezirk jenseits des Donaukanals, Heimat des Praters und einer sich rasch wandelnden Mischung aus altem jüdischem Wien, türkischen und balkanischen Lebensmittelhändlern und einem jungen kreativen Publikum. Der Karmelitermarkt trägt eine echt lokale Speis- und Café-Szene, und die grüne Weite des Praters liegt vor der Tür. Er ist eine U-Bahn-Station von der Altstadt entfernt, aber deutlich günstiger.",
      pros: [
        "Prater, Riesenrad und lange Wege am Kanal für Familien",
        "Karmelitermarkt und Volkertmarkt für lokales Essen zu fairen Preisen",
        "Schnelle U1- und U2-Anbindung, eine Station vom Zentrum",
      ],
      cons: [
        "Keine großen Sehenswürdigkeiten im Bezirk außer dem Prater",
        "Manche Blocks nahe den Stationen wirken schlicht und im Umbruch",
        "Ruhige Wohnabende, falls Sie Nachtleben vor der Haustür wollen",
      ],
    },
    {
      slug: "neubau",
      citySlug: "vienna",
      name: "Neubau",
      lat: 48.2011,
      lng: 16.3489,
      bestFor: ["local", "nightlife", "romantic"],
      vibe: "Der siebte Bezirk hinter dem MuseumsQuartier, Wiens Herz für Design und unabhängiges Shopping. Die kopfsteingepflasterten Biedermeier-Gassen des Spittelbergs bergen Weinlokale und Boutiquen, während die Neubaugasse eine lange Reihe von Concept Stores, Kaffeeröstern und kleinen Bars aufzieht. Man erreicht die großen Museen zu Fuß, und doch fühlt es sich nach dem Ort an, an dem kreative Einheimische ihre Abende wirklich verbringen.",
      pros: [
        "MuseumsQuartier und Kunsthistorisches Museum ein kurzer Spaziergang",
        "Beste unabhängige Läden, Röstereien und Small-Plates-Küche der Stadt",
        "Lebendige, aber unprätentiöse Bar- und Weinlokalszene am Abend",
      ],
      cons: [
        "Zu den kaiserlichen Sehenswürdigkeiten im ersten Bezirk läuft man oder nimmt kurz die Tram",
        "Beliebte Blocks können an Wochenendabenden laut sein",
        "Weniger große Hotels; das Angebot neigt zu Apartments und Boutiquen",
      ],
    },
    {
      slug: "mariahilf",
      citySlug: "vienna",
      name: "Mariahilf",
      lat: 48.1969,
      lng: 16.3489,
      bestFor: ["budget", "local", "first-time"],
      vibe: "Der sechste Bezirk entlang der Mariahilfer Straße, der belebtesten Einkaufsstraße der Stadt, mit dem weitläufigen Naschmarkt an ihrem unteren Ende. Er hält Praktisches und Charakter im Gleichgewicht: Einkaufsstraßen-Läden und verlässliche Mittelklassehotels oben, Essensstände und Wochenend-Flohmarkt unten am Markt. Das Zentrum ist ein geradliniger Fünfzehn-Minuten-Weg oder zwei U-Bahn-Stationen entfernt.",
      pros: [
        "Naschmarkt-Essensstände und der Samstags-Flohmarkt vor der Tür",
        "Größte Auswahl an soliden Mittelklasse- und Budgethotels der Stadt",
        "Direkte U3 und die verkehrsberuhigte Mariahilfer Straße ins Zentrum",
      ],
      cons: [
        "Die Haupteinkaufsstraße ist zu Stoßzeiten voll und reizlos",
        "Weniger atmosphärisch als das gleich bergauf liegende Neubau",
        "Naschmarkt-Restaurants sind teurer, als der Ruf der Essensstände vermuten lässt",
      ],
    },
    {
      slug: "landstrasse",
      citySlug: "vienna",
      name: "Landstraße",
      lat: 48.1969,
      lng: 16.3947,
      bestFor: ["first-time", "family", "budget"],
      vibe: "Der dritte Bezirk südöstlich des Rings, gelegt um das Schloss Belvedere und seine formalen Gärten. Es ist ein ruhiges, gut angebundenes Wohnviertel mit dem Hundertwasserhaus, dem Rochusmarkt und leichtem Zugang zum Flughafenzug ab Wien Mitte. Die Zimmer kosten weniger als im ersten Bezirk, während das Belvedere und der Ring in Gehweite bleiben.",
      pros: [
        "Schloss Belvedere, Gärten und Klimts Kuss wenige Minuten entfernt",
        "Der Knotenpunkt Wien Mitte bedeutet die schnellste Flughafenverbindung der Stadt",
        "Ruhiger und günstiger als das Zentrum und dabei zentral genug zum Gehen",
      ],
      cons: [
        "Weitläufig, manche Hotels liegen einen echten Weg von der nächsten Sehenswürdigkeit entfernt",
        "Weniger herausragende Restaurants als Neubau oder Leopoldstadt",
        "Dem Bezirk fehlt ein einzelner lebendiger Kern, um einen Abend zu tragen",
      ],
    },
  ],

  pois: [
    {
      slug: "schonbrunn-palace",
      citySlug: "vienna",
      name: "Schloss Schönbrunn",
      lat: 48.1849,
      lng: 16.3122,
      kind: "sight",
      needsBooking: true,
      tip: "Kaufen Sie ein Zeitfenster-Ticket online, denn das Schloss lässt nach Slot ein und die Slots am selben Tag sind in der Saison bis Mittag ausverkauft. Nehmen Sie den frühesten Slot gegen 8:30 Uhr oder die letzten zwei Stunden des Tages, um dem Reisegruppen-Andrang auszuweichen; die riesigen Gärten, der Gloriette-Hügel und das Labyrinth sind kostenlos, sparen Sie das bezahlte Innere also für die Grand Tour und verbringen Sie den Rest im Freien.",
    },
    {
      slug: "hofburg",
      citySlug: "vienna",
      name: "Hofburg",
      lat: 48.2065,
      lng: 16.3657,
      kind: "sight",
      needsBooking: true,
      tip: "Das eine Sisi-Ticket deckt hier die Kaiserappartements, das Sisi Museum und die Silberkammer sowie die Grand Tour von Schönbrunn ab, kaufen Sie es also einmal, wenn Sie beide Schlösser planen, und umgehen Sie zwei getrennte Schlangen. Betreten Sie die Kaiserappartements gleich zur Öffnung um 9 Uhr; der Audioguide ist inbegriffen, und die Höfe, der Heldenplatz und die Arkaden sind jederzeit kostenlos begehbar.",
    },
    {
      slug: "stephansdom",
      citySlug: "vienna",
      name: "Stephansdom",
      lat: 48.2085,
      lng: 16.3731,
      kind: "sight",
      needsBooking: false,
      tip: "Der hintere Stehbereich ist kostenlos, aber das Mittelschiff, die Katakombenführung und die beiden Türme kosten jeweils getrennt, entscheiden Sie sich also, bevor Sie hineingehen. Die 343 Stufen des Südturms bieten den besseren Aufstieg und die bessere Skyline; der Nordturm hat einen Aufzug zur Pummerin und kürzere Schlangen, und das gemusterte Ziegeldach fotografiert man am besten von der gegenüberliegenden Ecke des Stephansplatzes.",
    },
    {
      slug: "belvedere",
      citySlug: "vienna",
      name: "Schloss Belvedere (Klimts Der Kuss)",
      lat: 48.1915,
      lng: 16.3809,
      kind: "museum",
      needsBooking: true,
      tip: "Buchen Sie ein Zeitfenster-Ticket für das Obere Belvedere und gehen Sie zur Öffnung um 9 Uhr, denn der Raum mit Klimts Der Kuss ist am späten Vormittag der einzelne meistfrequentierte Ort Wiens. Sehen Sie den Kuss zuerst, bevor Sie durch den Rest der Sammlung zurückgehen, und sparen Sie sich das Untere Belvedere, es sei denn, eine Sonderausstellung reizt Sie; die formalen Gärten zwischen den beiden Schlössern sind kostenlos.",
    },
    {
      slug: "kunsthistorisches-museum",
      citySlug: "vienna",
      name: "Kunsthistorisches Museum",
      lat: 48.2039,
      lng: 16.3616,
      kind: "museum",
      needsBooking: true,
      tip: "Der Bruegel-Saal, die weltweit größte Sammlung seiner Gemälde, ist der Grund zu kommen, gehen Sie also zuerst hinauf in die Gemäldegalerie, bevor die Reisegruppen eintreffen. Halten Sie für Kaffee und Kuchen unter dem Kuppelcafé im ersten Stock inne, einem der prächtigsten Museumscafés Europas; das Ticket deckt an getrennten Tagen auch die Kaiserliche Schatzkammer in der Hofburg ab, wenn Sie den Kombipass kaufen.",
    },
    {
      slug: "state-opera",
      citySlug: "vienna",
      name: "Wiener Staatsoper",
      lat: 48.2033,
      lng: 16.3691,
      kind: "experience",
      needsBooking: true,
      tip: "Stehplatzkarten kosten 13 bis 18 EUR und gehen etwa 80 Minuten vor Vorstellungsbeginn an der Seitentür an der Operngasse in den Verkauf, stellen Sie sich also mindestens eine Stunde vorher an, um einen guten Platz an der Brüstung zu bekommen. Binden Sie Ihren Schal an die Brüstung, um Ihren Platz zu halten, und gehen Sie dann hinaus; wenn Sie lieber sitzen, buchen Sie Sitzplätze Wochen im Voraus online, und beachten Sie, dass die Oper im Juli und August schließt.",
    },
    {
      slug: "naschmarkt",
      citySlug: "vienna",
      name: "Naschmarkt",
      lat: 48.1985,
      lng: 16.3639,
      kind: "food",
      needsBooking: false,
      tip: "Kommen Sie vor Mittag, um die Lebensmittelhändler, Käsetheken und orientalischen Stände zu durchstöbern, bevor die Sitzrestaurants übernehmen und die Preise steigen. Der Samstags-Flohmarkt am Ende der Kettenbrückengasse läuft von etwa 6:30 Uhr bis zum frühen Nachmittag und ist der eigentliche Reiz; der Markt ist sonntags geschlossen, planen Sie Ihren Besuch also für einen Wochentagmorgen oder einen Samstag.",
    },
    {
      slug: "prater-riesenrad",
      citySlug: "vienna",
      name: "Prater & Riesenrad",
      lat: 48.2166,
      lng: 16.3958,
      kind: "park",
      needsBooking: false,
      tip: "Der Park selbst und seine lange Kastanienallee sind kostenlos und rund um die Uhr geöffnet; nur das Riesenrad und die Fahrgeschäfte des Wurstelpraters kosten Geld. Fahren Sie mit dem Riesenrad gegen Sonnenuntergang für das beste Licht und die kürzeste Wartezeit, oder lassen Sie es aus und gehen Sie stattdessen die Hauptallee, essen Sie dann in einem Gartenrestaurant wie dem Schweizerhaus Stelze und einen halben Liter Bier.",
    },
    {
      slug: "cafe-central",
      citySlug: "vienna",
      name: "Café Central",
      lat: 48.2103,
      lng: 16.3656,
      kind: "food",
      needsBooking: false,
      tip: "Der gewölbte Saal ist spektakulär, aber die Schlange vor der Tür läuft zu Stoßzeiten oft 30 Minuten; kommen Sie zur Öffnung um 8 Uhr oder nach 15 Uhr, um direkt hineinzugehen. Die Kaffeehaus-Etikette bedeutet, dass eine Melange Ihnen den Tisch stundenlang ohne Eile sichert, bestellen Sie also einen Kaffee und ein Stück Sachertorte und bleiben Sie; für dasselbe Ritual ohne Schlange versuchen Sie das nahe Café Sperl oder Café Landtmann.",
    },
    {
      slug: "albertina",
      citySlug: "vienna",
      name: "Albertina",
      lat: 48.2043,
      lng: 16.3682,
      kind: "museum",
      needsBooking: true,
      tip: "Buchen Sie online, um die Ticketschlange zu umgehen, und beginnen Sie dann oben mit der Dauerausstellung von Monet bis Picasso, bevor die temporäre Blockbuster-Schau die Massen anzieht. Die habsburgischen Prunkräume auf dem Weg hinein sind inbegriffen und werden oft übersehen; die Terrasse über der Oper und dem Albertinaplatz ist kostenlos betretbar und bietet einen seltenen erhöhten Blick auf den Ring.",
    },
    {
      slug: "hundertwasserhaus",
      citySlug: "vienna",
      name: "Hundertwasserhaus",
      lat: 48.2071,
      lng: 16.3941,
      kind: "sight",
      needsBooking: false,
      tip: "Es ist ein Wohnhaus, Sie betrachten die wellige Fassade und die bepflanzten Dächer also nur von der Straße, was zehn Minuten dauert. Fotografieren Sie es von der Ecke Kegelgasse und Löwengasse für das volle Bild, wechseln Sie dann gegenüber zur kostenlosen Einkaufspassage des Hundertwasser Village; kombinieren Sie es mit dem nahen Museum Kunst Haus Wien, wenn Sie die bezahlte Indoor-Version wollen.",
    },
    {
      slug: "museumsquartier",
      citySlug: "vienna",
      name: "MuseumsQuartier",
      lat: 48.2035,
      lng: 16.3585,
      kind: "experience",
      needsBooking: false,
      tip: "Der Hof mit seinen bunten Enzi-Liegemöbeln ist kostenlos und rund um die Uhr geöffnet, ein erstklassiger Ort für einen Drink zwischen Museumsbesuchen; das Leopold Museum hält hier die weltweit größte Egon-Schiele-Sammlung und braucht ein eigenes Ticket. Kaufen Sie das kombinierte MQ-Ticket nur, wenn Sie am selben Tag sowohl das Leopold als auch das mumok für moderne Kunst besuchen wollen.",
    },
    {
      slug: "karlskirche",
      citySlug: "vienna",
      name: "Karlskirche",
      lat: 48.1985,
      lng: 16.3719,
      kind: "sight",
      needsBooking: false,
      tip: "Das bezahlte Ticket schließt einen Panoramaaufzug ein, der im Inneren der Kuppel bis auf Berührungsnähe an die Deckenfresken hinaufsteigt, was der Grund ist, Eintritt zu zahlen, statt nur die barocke Fassade vom Wasserbecken davor zu bewundern. Gehen Sie an einem Wochentagvormittag, wenn der Aufzug keine Schlange hat; an den meisten Abenden laufen Konzerte mit Vivaldis Vier Jahreszeiten, doch der Kuppelbesuch am Tag ist das bessere Preis-Leistungs-Verhältnis.",
    },
    {
      slug: "spanish-riding-school",
      citySlug: "vienna",
      name: "Spanische Hofreitschule",
      lat: 48.2075,
      lng: 16.3665,
      kind: "experience",
      needsBooking: true,
      tip: "Volle Vorführungen der Lipizzanerhengste sind Wochen im Voraus ausverkauft und kosten ab rund 25 EUR, aber die Morgentrainings sind mit etwa 15 EUR weit günstiger und lassen Sie dieselben Pferde in derselben barocken Halle proben sehen. Buchen Sie das Morgentraining online, kommen Sie zur Türöffnung, und beachten Sie, dass es montags oder während der sommerlichen Stallferien kein Training gibt.",
    },
  ],

  itineraries: [
    {
      citySlug: "vienna",
      days: 2,
      summary:
        "Zwei Tage reichen für Wiens kaiserliche Höhepunkte, wenn Sie zentral wohnen und früh starten, aber Sie werden das Museumsviertel und die lokalen Bezirke kaum berühren. Das Zentrum ist kompakt innerhalb der Ringstraße: Stephansdom, Hofburg und Staatsoper liegen in fünfzehn Gehminuten, und die Straßenbahnen schließen die Schleife. Beziehen Sie Quartier in der Inneren Stadt, damit beide Morgen zu Fuß beginnen. Die Struktur, die funktioniert, ist ein kaiserlicher Stadttag und ein Schlosstag: Tag eins für Dom, Hofburg und ein Kaffeehaus, Tag zwei morgens hinaus nach Schönbrunn und nachmittags ins Belvedere für Klimts Kuss. Buchen Sie die Zeitfenster-Tickets für Schönbrunn und Belvedere sowie das Hofburg-Sisi-Ticket online, bevor Sie ankommen, denn Schlangen und ausverkaufte Slots sind die einzige echte Bedrohung für einen 48-Stunden-Besuch. Was Sie opfern, sind das Kunsthistorische Museum, das MuseumsQuartier und jeder langsame Abend in Neubau, was genau das ist, was ein dritter Tag kauft. Essen Sie abseits des Domplatzes, nicht darauf.",
      stayNeighborhoodSlug: "innere-stadt",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Kaiserliches Zentrum und die Hofburg",
          morning: [
            {
              poiSlug: "stephansdom",
              text: "Beginnen Sie gegen 8:30 Uhr am Stephansdom, solange der Platz noch ruhig ist, gehen Sie durch das kostenlose hintere Mittelschiff und erklimmen Sie dann die 343 Stufen des Südturms für die Ziegeldach-Skyline, bevor die ersten Reisegruppen landen.",
              durationMin: 75,
            },
            {
              poiSlug: "hofburg",
              text: "Gehen Sie zehn Minuten zur Hofburg und betreten Sie die Kaiserappartements und das Sisi Museum zur Öffnung um 9 Uhr mit Ihrem vorgebuchten Sisi-Ticket. Der inbegriffene Audioguide führt Sie in etwa neunzig Minuten durch den Habsburgerhof.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "cafe-central",
              text: "Mittagessen und Kaffee im Café Central wenige Minuten nördlich; kommen Sie nach dem Mittagsansturm, nehmen Sie ein kleines Gericht und eine Melange und nutzen Sie die Kaffeehaus-Regel, dass ein Kaffee den Tisch so lange hält, wie Sie mögen.",
              durationMin: 90,
            },
            {
              poiSlug: "albertina",
              text: "Gehen Sie an der Hofburg vorbei zurück zur Albertina für die Sammlung von Monet bis Picasso und die habsburgischen Prunkräume, treten Sie dann auf die kostenlose Terrasse über der Oper für einen erhöhten Blick auf den Ring.",
              durationMin: 105,
            },
          ],
          evening: [
            {
              poiSlug: "state-opera",
              text: "Stellen Sie sich etwa eine Stunde vor Vorstellungsbeginn an der Seitentür an der Operngasse der Staatsoper für eine Stehplatzkarte von 13 bis 18 EUR an. Binden Sie Ihren Schal an die Brüstung, um den Platz zu halten, und erleben Sie dann einen Akt von dem, was an diesem Abend gegeben wird.",
              durationMin: 120,
            },
            {
              text: "Abendessen in einem traditionellen Beisl im ersten Bezirk abseits der Hauptplätze, irgendwo wie dem Gmoakeller oder der Bar des Zum Schwarzen Kameel, für Wiener Schnitzel und ein Glas Grüner Veltliner ohne den Aufschlag am Stephansplatz.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Schönbrunn und das Belvedere",
          morning: [
            {
              poiSlug: "schonbrunn-palace",
              text: "Nehmen Sie die U4 nach Schönbrunn und nutzen Sie Ihren 8:30-Uhr-Slot für die Grand Tour durch das Schlossinnere, bevor die Reisebusgruppen eintreffen. Gehen Sie danach hinauf zum kostenlosen Gloriette-Hügel für den klassischen Blick zurück über das Schloss.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "belvedere",
              text: "Fahren Sie mit U-Bahn und Straßenbahn hinüber zum Oberen Belvedere für Ihr Zeitfenster-Ticket am frühen Nachmittag und gehen Sie direkt zu Klimts Der Kuss, bevor der Raum sich füllt, arbeiten Sie sich dann durch den Rest der Sammlung zurück.",
              durationMin: 120,
            },
            {
              text: "Gehen Sie hinunter durch die kostenlosen formalen Gärten zwischen Oberem und Unterem Belvedere, den besten ticketfreien Blick in diesem Teil der Stadt, und hinaus Richtung Ring für den Rückweg zu Ihrem Hotel.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "karlskirche",
              text: "Halten Sie auf dem Hinweg an der Karlskirche und zahlen Sie für den Kuppelaufzug, der zu den Deckenfresken hinaufsteigt; ein früher Wochentagabend hat für die Panoramaplattform meist keine Schlange.",
              durationMin: 60,
            },
            {
              text: "Schließen Sie mit Abendessen nahe dem Naschmarkt-Ende des sechsten Bezirks, dann eine letzte beleuchtete Runde an der Oper und den Toren der Hofburg vorbei, die nach Einbruch der Dunkelheit leer am schönsten sind.",
              durationMin: 105,
            },
          ],
        },
      ],
    },
    {
      citySlug: "vienna",
      days: 3,
      summary:
        "Drei Tage sind die richtige Zeitspanne für Wien: genug für die Schlösser, den Dom und die großen Museen in menschlichem Tempo, dazu ein Abend, der der Stadt gehört statt der Checkliste. Zwei Tage zwingen Sie, Schönbrunn und das Belvedere Rücken an Rücken zu sprinten; der dritte Tag ergänzt das Kunsthistorische Museum, das MuseumsQuartier und Zeit, ohne auf die Uhr zu schauen in einem Kaffeehaus zu sitzen. Wohnen Sie in Neubau, hinter dem Museumsviertel. Es kostet weniger als der erste Bezirk, und seine Röstereien, Weinlokale und unabhängigen Läden sind der Ort, an dem die Stadt ihre Abende tatsächlich verbringt, einen kurzen Weg von jeder großen Sehenswürdigkeit. Die Form des Plans: Tag eins für den Innenstadtring und die Hofburg, Tag zwei für Schönbrunn und das Belvedere, Tag drei für das Museumsviertel und einen langsamen lokalen Nachmittag. Buchen Sie drei Dinge online vor der Ankunft: den Schönbrunn-Slot, den Belvedere-Slot und das Hofburg-Sisi-Ticket. Alles andere in Wien belohnt frühes Erscheinen mehr als Aufpreis.",
      stayNeighborhoodSlug: "neubau",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Innenstadtring und die Hofburg",
          morning: [
            {
              poiSlug: "stephansdom",
              text: "Gehen Sie von Neubau zu Fuß oder nehmen Sie die U3 zum Stephansplatz und erreichen Sie den Stephansdom vor 9 Uhr; machen Sie das kostenlose Mittelschiff und den Südturm-Aufstieg, solange der Platz noch leer ist.",
              durationMin: 75,
            },
            {
              poiSlug: "hofburg",
              text: "Gehen Sie über Graben und Kohlmarkt zur Hofburg und betreten Sie die Kaiserappartements und das Sisi Museum zur Öffnung mit Ihrem Sisi-Ticket, wobei der inbegriffene Audioguide die habsburgischen Räume taktet.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "cafe-central",
              text: "Kaffeehaus-Mittagessen im Café Central gleich nördlich der Hofburg; gehen Sie, nachdem die Mittagsschlange dünner wird, bestellen Sie eine Melange und Sachertorte und lassen Sie sich ohne jeden Druck zu gehen nieder.",
              durationMin: 90,
            },
            {
              poiSlug: "albertina",
              text: "Nehmen Sie als Nächstes die vorgebuchte Albertina für die Räume von Monet bis Picasso und die Prunkappartements, endend auf der kostenlosen Terrasse über der Oper und dem Albertinaplatz.",
              durationMin: 105,
            },
          ],
          evening: [
            {
              poiSlug: "state-opera",
              text: "Stellen Sie sich eine Stunde vor Vorstellungsbeginn an der Tür an der Operngasse der Staatsoper für eine Stehplatzkarte an, binden Sie Ihren Schal an die Brüstung und erleben Sie einen Akt; das ganze Ritual läuft deutlich unter 20 EUR.",
              durationMin: 120,
            },
            {
              text: "Gehen Sie zurück nach Neubau zum Abendessen zwischen den Spittelberg-Gassen, wo Biedermeier-Weinlokale und Small-Plates-Bistros besser und günstiger servieren als alles am Stephansplatz.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Schönbrunn und das Belvedere",
          morning: [
            {
              poiSlug: "schonbrunn-palace",
              text: "Fahren Sie mit der U4 nach Schönbrunn für einen 8:30-Uhr-Slot auf der Grand Tour, bevor die Busse eintreffen, steigen Sie dann zur kostenlosen Gloriette für den Postkartenblick hinab über Schloss und Gärten.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "belvedere",
              text: "Durchqueren Sie die Stadt zum Oberen Belvedere für ein Zeitfenster-Ticket am frühen Nachmittag und gehen Sie direkt zu Klimts Der Kuss, bevor sich die Menge aufbaut, nehmen Sie dann den Rest der österreichischen Sammlung in Ruhe.",
              durationMin: 120,
            },
            {
              poiSlug: "hundertwasserhaus",
              text: "Gehen Sie fünfzehn Minuten ostwärts zum Hundertwasserhaus für die wellige Fassade und die Dachgärten, am besten von der Ecke Kegelgasse eingerahmt, und schauen Sie dann in die kostenlose Passage des Hundertwasser Village gegenüber.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "karlskirche",
              text: "Gehen Sie zur Karlskirche und nehmen Sie den Kuppelaufzug zu den Fresken; ein früher Wochentagabend bedeutet für die Panoramaplattform im Inneren der Kuppel meist keine Schlange.",
              durationMin: 60,
            },
            {
              text: "Abendessen rund um den Naschmarkt oder das untere Mariahilf, dann ein Absacker zurück in Neubau; die kleinen Bars des Bezirks bleiben länger lebendig als die stillen Straßen des ersten Bezirks.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Museumsviertel und ein lokaler Nachmittag",
          morning: [
            {
              poiSlug: "kunsthistorisches-museum",
              text: "Seien Sie zur Öffnung am Kunsthistorischen Museum und gehen Sie direkt hinauf in den Bruegel-Saal, den größten überhaupt, bevor die Gruppen eintreffen, halten Sie dann für Kaffee unter dem prächtigen Kuppelcafé im ersten Stock inne.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "museumsquartier",
              text: "Wechseln Sie in den Hof des MuseumsQuartiers für einen Drink auf den bunten Enzi-Liegemöbeln, wählen Sie dann ein Museum darin: das Leopold für die weltweit größte Schiele-Sammlung oder das mumok für moderne Kunst.",
              durationMin: 150,
            },
            {
              poiSlug: "naschmarkt",
              text: "Gehen Sie hinunter zum Naschmarkt für ein spätes Schlemmern durch die Lebensmittelhändler und Essensstände; ein Wochentagnachmittag ist ruhiger als das Samstags-Flohmarktgedränge, auch wenn die Sitzlokale teurer sind, als sie aussehen.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              text: "Verbringen Sie die goldene Stunde auf der Neubaugasse und den Spittelberg-Gassen, durchstöbern Sie Röstereien und Designläden, während der Bezirk für den Abend erwacht.",
              durationMin: 60,
            },
            {
              text: "Letztes Abendessen in einem Neubauer Beisl oder einer Naturweinbar, dem modernen Wiener Gegenpol zu den kaiserlichen Cafés, mit Schnitzel oder saisonalen kleinen Gerichten und einer Flasche österreichischem Weißwein.",
              durationMin: 105,
            },
          ],
        },
      ],
    },
    {
      citySlug: "vienna",
      days: 4,
      summary:
        "Vier Tage sind mehr als genug für Wiens Sehenswürdigkeiten, und genau das ist der Punkt: Der vierte Tag verwandelt einen Monument-Sprint in eine echte Reise. Die Tage eins bis drei decken den Innenstadtring, die Hofburg, Schönbrunn, das Belvedere und die großen Museen in entspanntem Tempo ab; Tag vier ist ein langsamer, über den Donaukanal hinüber in die Leopoldstadt, gebaut um den Prater, die lokalen Märkte und das lange Kaffeehaus-Ritual, das das kaiserliche Tempo nie erlaubt. Bei so viel Zeit wohnen Sie in der Leopoldstadt: Sie ist eine U-Bahn-Station von der Altstadt entfernt, günstiger für gleichwertige Zimmer, und ihre Karmelitermarkt-Cafés und der grüne Prater sind der Grund, warum der vierte Tag existiert. Die Logik des kaiserlichen Tages gilt weiter: Halten Sie Schönbrunn und das Belvedere an ihrem eigenen Tag, halten Sie das Museumsviertel zusammen und zickzacken Sie nicht über den Ring. Buchen Sie den Schönbrunn-Slot, den Belvedere-Slot und das Hofburg-Sisi-Ticket vor, und fügen Sie ein Morgentraining der Spanischen Hofreitschule hinzu, wenn Sie die Lipizzaner günstig wollen. Wenn Sie zwischen drei und vier Tagen wählen, ist der vierte der, an den Sie sich erinnern werden.",
      stayNeighborhoodSlug: "leopoldstadt",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Innenstadtring und die Hofburg",
          morning: [
            {
              poiSlug: "stephansdom",
              text: "Nehmen Sie die U1 eine Station von der Leopoldstadt zum Stephansplatz und erreichen Sie den Stephansdom bis 8:30 Uhr; machen Sie das kostenlose Mittelschiff und den Südturm-Aufstieg, bevor der Platz sich füllt.",
              durationMin: 75,
            },
            {
              poiSlug: "hofburg",
              text: "Gehen Sie über den Graben zur Hofburg und betreten Sie die Kaiserappartements und das Sisi Museum zur Öffnung mit Ihrem Sisi-Ticket, wobei der inbegriffene Audioguide das Tempo durch die habsburgischen Räume vorgibt.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "cafe-central",
              text: "Kaffeehaus-Mittagessen im Café Central; kommen Sie nach der Mittagsschlange, bestellen Sie eine Melange und nutzen Sie die Regel, dass ein Kaffee den Tisch hält, um den Tag zu verlangsamen.",
              durationMin: 90,
            },
            {
              poiSlug: "albertina",
              text: "Besuchen Sie die Albertina für die Sammlung von Monet bis Picasso und die Prunkräume, endend auf der kostenlosen Terrasse über der Oper für den erhöhten Ringblick.",
              durationMin: 105,
            },
          ],
          evening: [
            {
              poiSlug: "state-opera",
              text: "Stellen Sie sich eine Stunde vor Vorstellungsbeginn an der Tür an der Operngasse der Staatsoper für eine Stehplatzkarte unter 20 EUR an, halten Sie Ihren Platz an der Brüstung mit einem Schal und sehen Sie einen Akt.",
              durationMin: 120,
            },
            {
              text: "Fahren Sie mit der U1 zurück über den Kanal zum Abendessen in einem Leopoldstädter Beisl nahe dem Karmelitermarkt, wo lokale Küchen Schnitzel und österreichischen Wein zu Nachbarschaftspreisen servieren.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Schönbrunn und das Belvedere",
          morning: [
            {
              poiSlug: "schonbrunn-palace",
              text: "Fahren Sie mit der U4 hinaus nach Schönbrunn für einen 8:30-Uhr-Slot der Grand Tour vor den Bussen, gehen Sie dann hinauf zum kostenlosen Gloriette-Hügel für den klassischen Blick hinab über das Schloss und sein Parterre.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "belvedere",
              text: "Wechseln Sie zum Oberen Belvedere für ein Zeitfenster-Ticket am frühen Nachmittag und gehen Sie direkt zu Klimts Der Kuss, bevor der Raum verstopft, nehmen Sie dann den Rest der österreichischen Sammlung langsam.",
              durationMin: 120,
            },
            {
              text: "Gehen Sie die kostenlosen formalen Gärten hinab zum Unteren Belvedere und hinaus Richtung Ring, den besten ticketfreien Ausblick in diesem Viertel, mit der Skyline der Stadt hinter dem Parterre gerahmt.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "karlskirche",
              text: "Halten Sie an der Karlskirche für den Kuppelaufzug zu den Fresken; ein Wochentagabend hat für die Panoramaplattform im Inneren der Kuppel meist keine Schlange.",
              durationMin: 60,
            },
            {
              text: "Abendessen rund um den Naschmarkt oder Mariahilf, dann ein langsamer Rückweg über den Kanal in die Leopoldstadt, während die Ringlichter angehen.",
              durationMin: 105,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Museumsviertel und kaiserliche Extras",
          morning: [
            {
              poiSlug: "spanish-riding-school",
              text: "Buchen Sie ein Morgentraining an der Spanischen Hofreitschule, etwa 15 EUR gegenüber 25 und mehr für eine volle Vorführung, und sehen Sie die Lipizzanerhengste in der barocken Halle proben; montags gibt es kein Training.",
              durationMin: 90,
            },
            {
              poiSlug: "kunsthistorisches-museum",
              text: "Gehen Sie zum Kunsthistorischen Museum und zuerst hinauf in den Bruegel-Saal, machen Sie dann Pause für Kaffee und Kuchen unter dem Kuppelcafé im ersten Stock.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "museumsquartier",
              text: "Wechseln Sie ins MuseumsQuartier für einen Drink auf den Enzi-Liegemöbeln, wählen Sie dann ein Interieur: das Leopold Museum für die größte Schiele-Sammlung oder das mumok für moderne Kunst.",
              durationMin: 150,
            },
            {
              poiSlug: "naschmarkt",
              text: "Klingen Sie am Naschmarkt mit einem späten Schlemmern durch die Essensstände aus; ein Wochentagnachmittag ist das ruhige Fenster zwischen dem Mittagsansturm und dem Schließen.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Goldene Stunde auf der Neubaugasse und durch die Spittelberg-Gassen, durchstöbern Sie Röstereien und Designläden vor dem Abendessen.",
              durationMin: 60,
            },
            {
              text: "Abendessen in einer Neubauer Naturweinbar oder einem Beisl für die moderne Wiener Seite der Stadt, dann der kurze U-Bahn-Sprung zurück in die Leopoldstadt.",
              durationMin: 105,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Prater, Leopoldstadt und der Kaffeehaus-Tag",
          morning: [
            {
              text: "Starten Sie langsam am Karmelitermarkt in der Leopoldstadt, wo die Stände und lokalen Cafés einen entspannten Morgen laufen, besonders am Samstagsmarkt; frühstücken Sie in einem Marktcafé statt einem touristischen im ersten Bezirk.",
              durationMin: 90,
            },
            {
              poiSlug: "prater-riesenrad",
              text: "Gehen Sie in den Prater und die lange Kastanien-Hauptallee hinab, beide kostenlos und rund um die Uhr geöffnet, fahren Sie dann mit dem Riesenrad für den Blick über die Stadt und die Donau.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Mittagessen in einem Prater-Gartenrestaurant wie dem Schweizerhaus für Stelze und einen halben Liter Bier unter den Bäumen, die klassische Wiener Warmwettermahlzeit.",
              durationMin: 105,
            },
            {
              poiSlug: "hundertwasserhaus",
              text: "Wechseln Sie südwärts zum Hundertwasserhaus für die wellige Fassade und die Dachgärten, von der Ecke Kegelgasse gerahmt, und einen Blick in die kostenlose Passage des Hundertwasser Village gegenüber.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Kehren Sie für das letzte lange Sitzen der Reise in ein großes Kaffeehaus zurück: Café Landtmann oder Café Sperl für eine Melange und ein Stück Torte, ohne Eile, so wie das Ritual gemeint ist.",
              durationMin: 90,
            },
            {
              text: "Letztes Abendessen zurück in der Leopoldstadt nahe dem Kanal, dann ein letzter Spaziergang am Wasser mit der beleuchteten Skyline des ersten Bezirks gegenüber.",
              durationMin: 105,
            },
          ],
        },
      ],
    },
  ],
};

export default viennaDe;
