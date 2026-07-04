import type { CityData } from "../types";

const lisbonDe: CityData = {
  city: {
    slug: "lisbon",
    name: "Lissabon",
    country: "Portugal",
    countrySlug: "portugal",
    lat: 38.7223,
    lng: -9.1393,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "LIS",
    airportToCenter: "Rote Metrolinie ab dem Flughafen, mit einmal Umsteigen etwa 25 Min. ins Zentrum, 1,85 EUR",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [8],
    monthlyNotes: {
      1: "Rechnen Sie mit 14-15C am Tag, häufigen Regenfronten vom Atlantik und den ruhigsten Straßen des Jahres. Die Hotelpreise erreichen ihren Tiefpunkt, das ist also der Monat für einen günstigen Trip aus Miradouros und Museen.",
      2: "Immer noch kühl und schauerig, aber sonnige Abschnitte sind häufig, und an klaren Nachmittagen füllen sich die Caféterrassen. Der Karneval sorgt für einen kurzen Schub an lokalem Treiben, ansonsten bleiben Besucherzahlen und Preise niedrig.",
      3: "Die Höchstwerte klettern Richtung 18C, und der Regen lässt im Laufe des Monats nach. Der Andrang bleibt moderat bis Ende März, wenn der Spring-Break-Verkehr die Hotelpreise an Wochenenden nach oben treibt.",
      4: "Einer der besten Monate: 19-21C, die Jacarandas stehen kurz vor der Blüte, überschaubare Schlangen an der Burg und in Belém. Die Osterwoche ist die Ausnahme, buchen Sie dieses Fenster früh und rechnen Sie mit Feiertagspreisen.",
      5: "Zuverlässig warm bei rund 22C, kaum Regen und lange Abende, ideal für die Rooftop- und Kiosksaison. Der Andrang nimmt zu, aber Zeitfenstertickets lösen die meisten Warteschlangen noch.",
      6: "Die Festas de Lisboa erfassen den ganzen Monat über die Stadt, mit Höhepunkt in der Nacht des Santo António am 12.-13. Juni, wenn Alfama zu einem einzigen großen Straßenfest mit gegrillten Sardinen wird. Buchen Sie Wochen im Voraus und rechnen Sie mit fast Hochsaisonpreisen im Hotel.",
      7: "Heiß, 27-28C, und voll, wobei der Kreuzfahrtverkehr rund um Baixa und Belém für Mittagsspitzen sorgt. Erledigen Sie Sehenswürdigkeiten vor 11 Uhr und folgen Sie dann den Einheimischen an den Fluss oder mit den Strandzügen ab Cais do Sodré.",
      8: "Spitzenhitze um 29C, Spitzenandrang, Spitzenpreise, und viele familiengeführte Restaurants machen Betriebsferien. Wenn der August Ihre einzige Option ist, buchen Sie Klimaanlage und überall das erste Einlassfenster.",
      9: "Sommerwetter ohne das Augustgedränge: 26-27C Anfang des Monats, das Meer noch warm, Abende wie gemacht für Miradouros. Nach der ersten Woche sinken die Preise vom Hochsaisonniveau.",
      10: "Warme Tage um 22-23C, gegen Ende des Monats kehrt der erste richtige Regen zurück. Nach Mitte Oktober wird es spürbar leerer, und das ist der Sweet Spot für Hotelangebote in der Nebensaison.",
      11: "Kühler, 17-18C, mit regelmäßigen Regenphasen, aber das Licht zwischen den Schauern ist großartig für Fotos. Die Nebensaisonpreise greifen, und in die Fado-Häuser kommen Sie ohne Reservierung.",
      12: "Mild für den Winter bei 15C, aber nass, mit festlicher Beleuchtung entlang der Rua Augusta und einer großen kostenlosen Silvesterkonzertszene an der Praça do Comércio. Ruhig, außer in der Woche zwischen Weihnachten und Neujahr, wenn die Preise springen.",
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
    tagline: "Sieben Hügel, ein Fluss und das beste Licht Europas.",
    heroIntro:
      "Lissabon belohnt Fußgänger, die die Hügel annehmen, und Fahrgäste, die die Trams beherrschen. Drei Tage reichen für die Altstadt, die Aussichtspunkte und Belém, ohne zu hetzen, und die Food-Szene liefert weit mehr, als ihr Preisniveau vermuten lässt. Kommen Sie im Frühling oder Frühherbst, und die Stadt ist als europäisches Kurzreiseziel kaum zu schlagen.",
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
      vibe: "Lissabons ältestes Viertel ist ein Labyrinth aus Treppen, Wäscheleinen und gefliesten Fassaden, das vom Fluss zur Burg hinaufklettert. Abends dringt Fado aus kleinen Restaurants, und nach Einbruch der Dunkelheit leeren sich die Gassen von den Reisegruppen. Es fühlt sich an wie ein Dorf, das zufällig mitten in einer Hauptstadt liegt.",
      pros: [
        "Die stimmungsvollsten Gassen der Stadt, besonders früh am Morgen und nachts",
        "Burg, Kathedrale und die besten Aussichtspunkte in Gehweite",
        "Fado-Häuser und familiengeführte Tascas direkt vor der Tür",
      ],
      cons: [
        "Steile Hänge und Kopfsteinpflaster, mit Gepäck eine Qual und schwierig bei eingeschränkter Mobilität",
        "Kaum Metrostationen in der Nähe, Sie sind auf Trams, Busse oder Ihre Beine angewiesen",
        "Tagsüber Reisegruppengedränge auf den Hauptgassen",
      ],
    },
    {
      slug: "baixa-chiado",
      citySlug: "lisbon",
      name: "Baixa-Chiado",
      lat: 38.7104,
      lng: -9.139,
      bestFor: ["first-time", "family", "budget"],
      vibe: "Die flache, im Raster geplante Innenstadt, nach dem Erdbeben von 1755 wiederaufgebaut, reicht von der Praça do Comércio hinauf zu den eleganten Läden und Cafés des Chiado. Hier läuft alles zusammen: drei Metrolinien, die Tramrouten und die Fähren. Auf Straßenebene ist es touristisch, als Basis aber unschlagbar.",
      pros: [
        "Der flachste Teil des Lissabonner Zentrums, leichteres Gelände bekommen Sie nirgends",
        "Bester Verkehrsknoten der Stadt, direkte Metro aus Flughafennähe mit einmal Umsteigen",
        "Riesige Auswahl an Hotels und Restaurants in jeder Preisklasse",
      ],
      cons: [
        "Die Restaurantqualität auf den Hauptachsen ist mittelmäßig und auf Touristen ausgerichtet",
        "Tagsüber voll und laut, besonders nahe der Rua Augusta",
      ],
    },
    {
      slug: "principe-real",
      citySlug: "lisbon",
      name: "Principe Real",
      lat: 38.7168,
      lng: -9.1489,
      bestFor: ["romantic", "local", "nightlife"],
      vibe: "Ein grünes, gehobenes Viertel oberhalb des Bairro Alto, gebaut um einen Gartenplatz mit einer riesigen Zeder und Bio-Wochenendmärkten. Concept Stores, Naturweinbars und einige der spannendsten Restaurants der Stadt füllen die Stadthäuser aus dem 19. Jahrhundert. Hier gehen die Lisboetas tatsächlich aus.",
      pros: [
        "Hervorragende Restaurant- und Barszene mit deutlich weniger Touristen als im Zentrum",
        "Nachts ruhig, obwohl das Bairro Alto nur zehn Minuten entfernt ist",
        "Gartenplätze und Kioskcafés sorgen für echtes Nachbarschaftsleben",
      ],
      cons: [
        "Von fast überall geht es bergauf, planen Sie hin und wieder ein Taxi nach Hause ein",
        "Die Unterkünfte sind eher boutique und teuer, wenige Budget-Optionen",
        "Keine Metrostation im Viertel selbst, die nächste ist Rato",
      ],
    },
    {
      slug: "bairro-alto",
      citySlug: "lisbon",
      name: "Bairro Alto",
      lat: 38.713,
      lng: -9.144,
      bestFor: ["nightlife", "budget"],
      vibe: "Tagsüber verschlafen, verwandelt sich dieses Raster enger Gassen jede Nacht in Lissabons Open-Air-Kneipentour, mit Menschenmengen, die bis 2 Uhr auf dem Kopfsteinpflaster trinken. Billiges Bier, winzige Bars und null Attitüde. Schlafen Sie nur hier, wenn Sie Teil des Lärms sein wollen.",
      pros: [
        "Das Epizentrum des Nachtlebens, Dutzende Bars in fünf Minuten Fußweg",
        "Zentrale Lage zwischen Chiado und Principe Real",
        "Ein paar wirklich günstige Pensionen haben hier überlebt",
      ],
      cons: [
        "Straßenlärm bis 2-3 Uhr an Wochenenden ist nicht verhandelbar",
        "Ungepflegte Morgen, die Gassen werden jede Nacht in Mitleidenschaft gezogen",
        "Steiler Aufstieg von der Baixa, außer Sie nutzen die Glória-Standseilbahn oder den Aufzug",
      ],
    },
    {
      slug: "belem",
      citySlug: "lisbon",
      name: "Belem",
      lat: 38.697,
      lng: -9.206,
      bestFor: ["family", "local"],
      vibe: "Ein Flussviertel 6 km westlich des Zentrums, in dem sich Portugals Monumente aus dem Zeitalter der Entdeckungen am Tejo aufreihen: das Kloster, der Turm und eine Reihe moderner Museen. Bis etwa 18 Uhr läuft es auf Tagesbesucher, dann wird es richtig still. Weitläufig, flach und grün, es wirkt eher wie eine Gartenstadt als wie das zentrale Lissabon.",
      pros: [
        "Flaches Gelände und Uferwege, das leichteste Gehen in ganz Lissabon",
        "Monumente und Museen vor der Tür, bevor die Massen eintreffen",
        "Ruhige Abende und niedrigere Hotelpreise als im Zentrum",
      ],
      cons: [
        "20-30 Min. mit der Tram 15 ins Zentrum, und die Tram ist meist rappelvoll",
        "Restaurants und Nachtleben werden nach Einbruch der Dunkelheit dünn",
      ],
    },
  ],

  pois: [
    {
      slug: "praca-do-comercio",
      citySlug: "lisbon",
      name: "Praça do Comércio",
      lat: 38.7077,
      lng: -9.1366,
      kind: "sight",
      needsBooking: false,
      tip: "Kommen Sie vor 9 Uhr für Fotos des leeren Platzes mit dem Bogen der Rua Augusta und meiden Sie die überteuerten Terrassencafés am Platz selbst. Die Uferstufen am Cais das Colunas an der Südseite sind bei Sonnenuntergang der kostenlose Logenplatz.",
    },
    {
      slug: "castelo-sao-jorge",
      citySlug: "lisbon",
      name: "Castelo de São Jorge",
      lat: 38.7139,
      lng: -9.1335,
      kind: "sight",
      needsBooking: true,
      tip: "Kaufen Sie das Zeitfensterticket online (etwa 15 EUR) und nehmen Sie das erste Fenster um 9 Uhr, die Ticketschlange erreicht in der Saison am späten Vormittag 45 Minuten. Fahren Sie mit dem Bus 737 von der Praça da Figueira bis zum Tor, statt hochzusteigen, und sparen Sie Ihre Beine für die Wehrmauern.",
    },
    {
      slug: "miradouro-senhora-do-monte",
      citySlug: "lisbon",
      name: "Miradouro da Senhora do Monte",
      lat: 38.719,
      lng: -9.1325,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Dies ist der höchste und weiteste Aussichtspunkt der Altstadt, und er ist kostenlos, aber die niedrige Mauer füllt sich 45 Minuten vor Sonnenuntergang, kommen Sie also früh, um sich einen Platz zu sichern. Ein Café gibt es hier oben nicht, besorgen Sie Getränke unterwegs in einem Laden an der Hauptstraße von Graça.",
    },
    {
      slug: "tram-28",
      citySlug: "lisbon",
      name: "Tram 28",
      lat: 38.7169,
      lng: -9.136,
      kind: "experience",
      needsBooking: false,
      tip: "Steigen Sie vor 8:30 Uhr an der Endhaltestelle Martim Moniz ein, um einen Fensterplatz zu bekommen, ab 10 Uhr gibt es nur noch Stehplätze und die Bahn ist ein Taschendieb-Hotspot. Ein Einzelticket an Bord kostet 3,10 EUR, kaufen Sie stattdessen einen 24h-Pass für Carris und Metro für etwa 6,80 EUR, dann können Sie an jedem Hügel aussteigen.",
    },
    {
      slug: "time-out-market",
      citySlug: "lisbon",
      name: "Time Out Market",
      lat: 38.707,
      lng: -9.146,
      kind: "food",
      needsBooking: false,
      tip: "Die Gemeinschaftstische sind zwischen 12:30 und 14:00 Uhr ein Kampfgebiet, essen Sie also um 11:45 oder nach 14:30 Uhr und schicken Sie eine Person zum Platzhalten, während die anderen bestellen. Die ursprüngliche Markthalle Mercado da Ribeira nebenan ist ein günstigerer, ruhigerer Kaffeestopp.",
    },
    {
      slug: "jeronimos-monastery",
      citySlug: "lisbon",
      name: "Hieronymus-Kloster",
      lat: 38.6979,
      lng: -9.2068,
      kind: "sight",
      needsBooking: true,
      tip: "Das Kirchenschiff ist kostenlos zugänglich, nur der Kreuzgang braucht das Ticket (etwa 12 EUR), buchen Sie also online das erste Fenster um 9:30 Uhr und erledigen Sie den Kreuzgang, bevor die Busgruppen gegen 10:30 Uhr eintreffen. Montags geschlossen, ein klassischer Planungsfehler beim Tagesausflug.",
    },
    {
      slug: "belem-tower",
      citySlug: "lisbon",
      name: "Torre de Belém",
      lat: 38.6916,
      lng: -9.216,
      kind: "sight",
      needsBooking: true,
      tip: "Innen gibt es nur eine einzige enge Wendeltreppe für beide Richtungen, der Einlass erfolgt daher tröpfchenweise, und die Schlange bewegt sich selbst mit gebuchtem Ticket quälend langsam. Der ehrliche Rat: Fotografieren Sie den Turm vom Ufer aus und gehen Sie nur hinein, wenn Sie das früheste Zeitfenster gebucht haben. Montags geschlossen.",
    },
    {
      slug: "pasteis-de-belem",
      citySlug: "lisbon",
      name: "Pastéis de Belém",
      lat: 38.6975,
      lng: -9.2033,
      kind: "food",
      needsBooking: false,
      tip: "Ignorieren Sie die Takeaway-Schlange, die sich die Straße hinunterzieht, und gehen Sie direkt in die Speiseräume, sie fassen rund 400 Plätze und der Durchlauf ist schnell. Bestellen Sie am Tisch, geben Sie Zimt und Zucker aus den Streuern am Tresen dazu und rechnen Sie mit etwa 1,40 EUR pro Törtchen.",
    },
    {
      slug: "lx-factory",
      citySlug: "lisbon",
      name: "LX Factory",
      lat: 38.7034,
      lng: -9.1786,
      kind: "experience",
      needsBooking: false,
      tip: "Kommen Sie am späten Nachmittag und bleiben Sie zum Abendessen, die meisten Läden haben bis 19-20 Uhr geöffnet, die Restaurants danach. Sonntags läuft ab 10 Uhr der LX-Market-Flohmarkt, und die Buchhandlung Ler Devagar mit ihrem fliegenden Fahrrad ist der eine Stopp, den Sie nicht auslassen sollten.",
    },
    {
      slug: "maat",
      citySlug: "lisbon",
      name: "MAAT",
      lat: 38.6957,
      lng: -9.1937,
      kind: "museum",
      needsBooking: false,
      tip: "Sie können jederzeit kostenlos über das geschwungene Dach des Museums spazieren, und der Flussblick von dort oben schlägt mehrere kostenpflichtige Aussichtspunkte. Die Galerien sind dienstags geschlossen, und das Kombiticket inklusive des alten Kraftwerksgebäudes ist der bessere Deal, wenn Sie hineingehen.",
    },
    {
      slug: "alfama-walk",
      citySlug: "lisbon",
      name: "Alfama zu Fuß",
      lat: 38.7118,
      lng: -9.1287,
      kind: "experience",
      needsBooking: false,
      tip: "Gehen Sie bergab: Starten Sie an der Burg oder am Aussichtspunkt Portas do Sol und lassen Sie sich von den Treppen Richtung Fluss ziehen, der Aufstieg in der Nachmittagssonne ist der klassische Fehler. Machen Sie dienstag- und samstagvormittags einen Abstecher zum Flohmarkt Feira da Ladra hinter dem Pantheon.",
    },
    {
      slug: "miradouro-santa-catarina",
      citySlug: "lisbon",
      name: "Miradouro de Santa Catarina",
      lat: 38.7089,
      lng: -9.147,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Dies ist der Sonnenuntergangs-Aussichtspunkt mit Blick auf die Brücke, und das Publikum ist jung, lokal und mit Supermarktbier bewaffnet. Der Kiosk verkauft Getränke, schließt aber früher als erwartet, kommen Sie also zur goldenen Stunde, kaufen Sie zuerst und setzen Sie sich dann auf die Terrassenstufen.",
    },
    {
      slug: "gulbenkian-museum",
      citySlug: "lisbon",
      name: "Museu Calouste Gulbenkian",
      lat: 38.7371,
      lng: -9.1545,
      kind: "museum",
      needsBooking: true,
      tip: "Der Eintritt ist jeden Sonntag ab 14 Uhr frei, und selbst dann wirkt es selten voll. Dienstags ist geschlossen, und der umliegende Garten mit seinen Teichen und Betonwegen ist täglich kostenlos, ein echter Mittagspausenort für das Cafeteria-Publikum des Museums.",
    },
  ],

  itineraries: [
    {
      citySlug: "lisbon",
      days: 2,
      summary:
        "Zwei Tage reichen für Lissabons historischen Kern, aber Sie müssen Belém opfern, und das ist ein echtes Opfer. In 48 Stunden fahren Sie mit der Tram 28, bevor die Massen kommen, steigen durch Burg und Alfama, erwischen zwei der besten Miradouros, essen sich durch den Time Out Market und gehen an beiden Abenden aus, einmal mit Fado und einmal im Bairro Alto. Was nicht hineinpasst: das Hieronymus-Kloster, der Torre de Belém, das Gulbenkian oder irgendein Tagesausflug, akzeptieren Sie diesen Tausch also vor der Buchung. Diese Länge passt zu einem Wochenendtrip, einem Zwischenstopp auf dem Weg an die Algarve oder auf die Azoren oder zu Reisenden, die Lissabon mit Porto in einer Reise kombinieren. Quartieren Sie sich in Baixa-Chiado ein: Es ist flach, jede Tram- und Metrolinie läuft dort zusammen, und beide Tage starten keine zehn Minuten von Ihrer Tür entfernt. Wenn Sie mit einem zusätzlichen halben Tag landen, verbringen Sie ihn in Belém, statt noch mehr durch die Innenstadt zu schlendern.",
      stayNeighborhoodSlug: "baixa-chiado",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Burghügel, Alfama und Fado",
          morning: [
            {
              poiSlug: "tram-28",
              text: "Starten Sie an der Endhaltestelle Martim Moniz und fahren Sie mit der Tram 28 vor 8:30 Uhr durch Graça hinauf, solange es noch Fensterplätze gibt. Steigen Sie nahe der Kuppe des Burghügels aus, statt die ganze Strecke zu fahren.",
              durationMin: 40,
            },
            {
              poiSlug: "castelo-sao-jorge",
              text: "Gehen Sie mit einem vorab gebuchten 9-Uhr-Ticket über die Wehrmauern des Castelo de São Jorge, bevor sich die Ticketschlange bildet. Die Terrassen zeigen Ihnen die ganze Stadt und den Fluss, eine nützliche Orientierung für den Rest der Reise.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "alfama-walk",
              text: "Steigen Sie von den Burgtoren zu Fuß durch Alfama hinab, vorbei an Portas do Sol und die Treppen hinunter Richtung Kathedrale. Legen Sie unterwegs ein langsames Mittagessen in einer Tasca ein, gegrillter Fisch und eine halbe Flasche Vinho Verde sind die richtige Wahl.",
              durationMin: 150,
            },
            {
              poiSlug: "miradouro-senhora-do-monte",
              text: "Steigen oder fahren Sie mit dem Bus wieder hinauf zum Miradouro da Senhora do Monte, dem höchsten Aussichtspunkt der Altstadt. Das Licht am späten Nachmittag ist hier die beste kostenlose Show Lissabons.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              text: "Reservieren Sie für etwa 20 Uhr einen Tisch in einem Fado-Haus unten in Alfama, die kleinen familiengeführten Räume schlagen die großen Dinner-Show-Betriebe. Rechnen Sie mit einem Set-Menü plus Darbietung und mit absoluter Stille während der Lieder.",
              durationMin: 150,
            },
            {
              text: "Beenden Sie den Abend mit einer Ginjinha, dem lokalen Sauerkirschlikör, aus einer winzigen Bar nahe dem Rossio auf dem Rückweg zur Baixa. Ein Schluck im Schokoladenbecher kostet unter 2 EUR.",
              durationMin: 20,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Baixa, Chiado und Nächte im Bairro Alto",
          morning: [
            {
              poiSlug: "praca-do-comercio",
              text: "Laufen Sie vor 9 Uhr über die Praça do Comércio und die Uferstufen am Cais das Colunas, solange der Platz noch leer ist. Gehen Sie dann die Fußgängerzone Rua Augusta hinauf und durch den Bogen ins Raster der Baixa.",
              durationMin: 60,
            },
            {
              text: "Bummeln Sie bergauf durch den Chiado: die historischen Cafés um die Rua Garrett, die Buchhandlung Bertrand, die Ruinen des Convento do Carmo, wenn Sie eine kompakte Sehenswürdigkeit wollen. Das ist Lissabons beste Stunde fürs Schaufensterbummeln.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "time-out-market",
              text: "Essen Sie im Time Out Market in Cais do Sodré zu Mittag und kommen Sie bis 11:45 oder nach 14:30 Uhr, um wirklich einen Platz zu finden. Verteilen Sie die Bestellungen auf mehrere Stände, dann probieren Sie drei Küchen in einer Sitzung.",
              durationMin: 90,
            },
            {
              poiSlug: "miradouro-santa-catarina",
              text: "Gehen Sie hinauf zum Miradouro de Santa Catarina und richten Sie sich mit Blick auf die Brücke des 25. April ein. Kaufen Sie früh ein Getränk am Kiosk, er schließt, bevor der Andrang seinen Höhepunkt erreicht.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Essen Sie im Chiado oder am Rand des Bairro Alto zu Abend und reservieren Sie überall, wo der Laden einen Namen hat. Die Portionen sind groß, zwei Hauptgerichte für drei Personen zu teilen ist normal.",
              durationMin: 100,
            },
            {
              text: "Enden Sie im Bar-Raster des Bairro Alto, wo ab etwa 23 Uhr alle im Stehen auf dem Kopfsteinpflaster trinken. Ziehen Sie von Bar zu Bar, statt sich niederzulassen, der Punkt ist die Straße selbst.",
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
        "Ja, drei Tage sind die richtige Zeit für Lissabon, und genau diese Länge empfehlen wir für einen ersten Besuch. Sie bekommen zwei volle Tage im historischen Zentrum mit Burg, Alfama, Tram 28, den Miradouros, Baixa und Chiado, plus einen eigenen Tag für Belém, das mehr verdient als den gehetzten halben Nachmittag, den die meisten ihm geben. Mit drei Tagen essen Sie zweimal abends gut, ohne Viertel zu wiederholen, schaffen einen Fado-Abend und eine Nacht im Bairro Alto und fahren trotzdem hinaus zum Hieronymus-Kloster, zum Torre de Belém und zu den Puddingtörtchen an ihrer Quelle. Was weiterhin wegfällt: das Museu Calouste Gulbenkian, Principe Real und jeder Sintra-Tagesausflug, all das braucht einen vierten Tag. Diese Dauer passt zu Erstbesuchern, Paaren und allen, die eine Portugal-Route mit Porto als nächstem Stopp planen. Wohnen Sie wegen der Verkehrsanbindung in Baixa-Chiado, denn die Tram nach Belém fährt direkt vor der Tür ab, und beide Zentrumstage beginnen zu Fuß.",
      stayNeighborhoodSlug: "baixa-chiado",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Burghügel, Alfama und Fado",
          morning: [
            {
              poiSlug: "tram-28",
              text: "Starten Sie an der Endhaltestelle Martim Moniz und fahren Sie mit der Tram 28 vor 8:30 Uhr durch Graça hinauf, solange es noch Fensterplätze gibt. Steigen Sie nahe der Kuppe des Burghügels aus, statt die ganze Strecke zu fahren.",
              durationMin: 40,
            },
            {
              poiSlug: "castelo-sao-jorge",
              text: "Gehen Sie mit einem vorab gebuchten 9-Uhr-Ticket über die Wehrmauern des Castelo de São Jorge, bevor sich die Ticketschlange bildet. Die Terrassen zeigen Ihnen die ganze Stadt und den Fluss, eine nützliche Orientierung für den Rest der Reise.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "alfama-walk",
              text: "Steigen Sie von den Burgtoren zu Fuß durch Alfama hinab, vorbei an Portas do Sol und die Treppen hinunter Richtung Kathedrale. Legen Sie unterwegs ein langsames Mittagessen in einer Tasca ein.",
              durationMin: 150,
            },
            {
              poiSlug: "miradouro-senhora-do-monte",
              text: "Steigen oder fahren Sie mit dem Bus wieder hinauf zum Miradouro da Senhora do Monte, dem höchsten Aussichtspunkt der Altstadt, für das Licht am späten Nachmittag. Bringen Sie eigene Getränke mit, oben gibt es keinen Kiosk.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              text: "Reservieren Sie für etwa 20 Uhr einen Tisch in einem Fado-Haus in Alfama und wählen Sie einen kleinen familiengeführten Raum statt der großen Dinner-Show-Läden. Absolute Stille während der Lieder ist überall die Hausregel.",
              durationMin: 150,
            },
            {
              text: "Beenden Sie den Abend mit einer Ginjinha, dem Sauerkirschlikör, aus einer Stehbar nahe dem Rossio auf dem Heimweg. Unter 2 EUR, getrunken auf dem Gehweg wie alle anderen.",
              durationMin: 20,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Baixa, Chiado und Nächte im Bairro Alto",
          morning: [
            {
              poiSlug: "praca-do-comercio",
              text: "Laufen Sie vor 9 Uhr über die Praça do Comércio und das Ufer am Cais das Colunas, dann die Rua Augusta hinauf und durch den Bogen ins Raster der Baixa. Der Platz fotografiert sich am besten, solange er noch leer ist.",
              durationMin: 60,
            },
            {
              text: "Bummeln Sie bergauf durch den Chiado: die Cafés um die Rua Garrett, die Buchhandlung Bertrand und die Ruinen des Convento do Carmo, wenn Sie vor dem Mittagessen eine kompakte Sehenswürdigkeit wollen.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "time-out-market",
              text: "Essen Sie im Time Out Market in Cais do Sodré zu Mittag und kommen Sie bis 11:45 oder nach 14:30 Uhr, um Plätze zu finden. Verteilen Sie die Bestellungen auf mehrere Stände, um mehrere Küchen auf einmal zu probieren.",
              durationMin: 90,
            },
            {
              poiSlug: "miradouro-santa-catarina",
              text: "Gehen Sie hinauf zum Miradouro de Santa Catarina und sichern Sie sich zur goldenen Stunde einen Platz mit Blick auf die Brücke des 25. April. Kaufen Sie früh am Kiosk, er schließt, bevor der Andrang seinen Höhepunkt erreicht.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Essen Sie im Chiado oder am Rand des Bairro Alto zu Abend, mit Reservierung überall, wo die Bewertungen gut sind. Portugiesische Portionen sind groß, bestellen Sie weniger, als Sie denken.",
              durationMin: 100,
            },
            {
              text: "Enden Sie im Bairro Alto, wo sich das Barpublikum ab etwa 23 Uhr aufs Kopfsteinpflaster ergießt. Bleiben Sie zwischen den Bars in Bewegung, die Straße ist die eigentliche Location.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Monumente und Flussufer von Belém",
          morning: [
            {
              poiSlug: "jeronimos-monastery",
              text: "Nehmen Sie die Tram 15 oder ein 15-minütiges Taxi aus dem Zentrum und seien Sie um 9:30 Uhr zum ersten Kreuzgang-Zeitfenster am Hieronymus-Kloster, online gebucht. Sehen Sie sich danach das kostenlose Kirchenschiff an, das manuelinische Mauerwerk darin ist das Highlight des Tages.",
              durationMin: 100,
            },
            {
              poiSlug: "pasteis-de-belem",
              text: "Gehen Sie zwei Minuten zu Pastéis de Belém und steuern Sie direkt die Speiseräume an statt der Takeaway-Schlange. Zwei warme Törtchen mit Zimt und ein Kaffee sind die richtige Bestellung.",
              durationMin: 40,
            },
          ],
          afternoon: [
            {
              poiSlug: "belem-tower",
              text: "Spazieren Sie durch die Ufergärten am Denkmal der Entdeckungen vorbei zum Torre de Belém. Fotografieren Sie ihn vom Wasser aus und stellen Sie sich nur für das Innere an, wenn Sie das früheste Zeitfenster gebucht haben.",
              durationMin: 75,
            },
            {
              poiSlug: "maat",
              text: "Gehen Sie am Tejo entlang nach Osten zum MAAT und überqueren Sie sein geschwungenes Dach, das kostenlos und auch dann offen ist, wenn die Galerien es nicht sind. Gehen Sie hinein, wenn die aktuelle Ausstellung Sie packt, und lassen Sie es ohne schlechtes Gewissen sein, wenn nicht.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "lx-factory",
              text: "Fahren Sie weiter zur LX Factory unter der Brücke in Alcântara und kommen Sie am späten Nachmittag an, solange die Läden noch geöffnet sind. Stöbern Sie bei Ler Devagar und bleiben Sie dann zum Abendessen in einem der Restaurants in der alten Druckerei.",
              durationMin: 150,
            },
            {
              text: "Nehmen Sie ein Taxi oder die Tram 15 zurück ins Zentrum, etwa 15 Minuten. Wenn noch Energie übrig ist, schließt ein letzter Drink auf einem Rooftop in Cais do Sodré die Reise stilvoll ab.",
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
        "Vier Tage sind mehr als genug für Lissabon, und der vierte Tag macht aus einem Sightseeing-Sprint einen echten Urlaub. Tag eins und zwei decken den historischen Kern ab: Burg, Alfama, Tram 28, Baixa, Chiado, die Miradouros und beide typischen Abende. Tag drei gehört Belém, richtig gemacht vom ersten Einlassfenster des Klosters bis zum Abendessen in der LX Factory. Tag vier ist das Überdruckventil: die Weltklasse-Privatsammlung des Gulbenkian, die Gärten und Weinbars von Principe Real und ein entspannter letzter Abend, oder tauschen Sie den ganzen Tag gegen einen Sintra-Ausflug, wenn Paläste Sie mehr reizen als Museen. Diese Länge passt zu Reisenden, die Hetze hassen, zu Wiederholungsbesuchern und zu allen, deren Flüge die Reise ungünstig einrahmen. Für vier Tage empfehlen wir Principe Real statt der Innenstadt als Basis: Sie haben ohnehin ein langsameres Tempo gewählt, und seine Restaurants, Gartenplätze und das lokale Publikum machen die abendliche Heimkehr zum besten Teil des Tages. Jenseits von vier Tagen ergänzen Sie besser Sintra und einen Strandnachmittag in Cascais statt noch mehr Stadt.",
      stayNeighborhoodSlug: "principe-real",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Burghügel, Alfama und Fado",
          morning: [
            {
              poiSlug: "tram-28",
              text: "Starten Sie an der Endhaltestelle Martim Moniz und fahren Sie mit der Tram 28 vor 8:30 Uhr durch Graça hinauf, um einen Fensterplatz zu bekommen. Steigen Sie nahe dem Burghügel aus, statt die ganze Strecke zu fahren.",
              durationMin: 40,
            },
            {
              poiSlug: "castelo-sao-jorge",
              text: "Gehen Sie mit einem vorab gebuchten 9-Uhr-Ticket über die Wehrmauern des Castelo de São Jorge, bevor die Schlangen wachsen. Die Terrassen legen Ihnen die ganze Stadt gleich an Tag eins zu Füßen.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "alfama-walk",
              text: "Steigen Sie von den Burgtoren zu Fuß durch Alfama hinab, vorbei an Portas do Sol und die Treppen hinunter Richtung Fluss, mit einem langen Tasca-Mittagessen unterwegs.",
              durationMin: 150,
            },
            {
              poiSlug: "miradouro-senhora-do-monte",
              text: "Gehen Sie wieder hinauf zum Miradouro da Senhora do Monte für das Licht am späten Nachmittag über der Altstadt. Er ist kostenlos und der höchste Aussichtspunkt im zentralen Lissabon.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              text: "Reservieren Sie für etwa 20 Uhr ein kleines Fado-Haus in Alfama und richten Sie sich auf Set-Menü und Gesang ein. Stille während der Lieder wird erwartet, Applaus danach ist Pflicht.",
              durationMin: 150,
            },
            {
              text: "Krönen Sie die Nacht mit einer Ginjinha nahe dem Rossio, bevor es hinauf nach Principe Real geht. Ein Taxi nach Hause kostet ein paar Euro und erspart Ihnen den Hügel.",
              durationMin: 20,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Baixa, Chiado und Nächte im Bairro Alto",
          morning: [
            {
              poiSlug: "praca-do-comercio",
              text: "Laufen Sie vor 9 Uhr über die Praça do Comércio und die Flussstufen am Cais das Colunas, dann durch den Bogen der Rua Augusta in die Baixa. Früh ist die einzige Zeit, in der der Platz Ihnen gehört.",
              durationMin: 60,
            },
            {
              text: "Schlendern Sie hinauf durch den Chiado: die Cafés der Rua Garrett, die Buchhandlung Bertrand und das dachlose Convento do Carmo, wenn Sie eine schnelle Sehenswürdigkeit wollen.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "time-out-market",
              text: "Mittagessen im Time Out Market in Cais do Sodré, getimt auf 11:45 oder nach 14:30 Uhr, um der Platzsuche zu entgehen. Bestellen Sie an mehreren Ständen und teilen Sie.",
              durationMin: 90,
            },
            {
              poiSlug: "miradouro-santa-catarina",
              text: "Gehen Sie zur goldenen Stunde hinauf zum Miradouro de Santa Catarina mit Blick auf die Brücke. Erst Kiosk, dann Stufen, der Getränketresen schließt früh.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Abendessen im Chiado oder im oberen Bairro Alto mit Reservierung, dann mischen Sie sich ab 23 Uhr unter das Straßenpublikum im Bar-Raster des Bairro Alto. Ihr Bett in Principe Real ist zehn Minuten bergauf zu Fuß entfernt.",
              durationMin: 180,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Monumente und Flussufer von Belém",
          morning: [
            {
              poiSlug: "jeronimos-monastery",
              text: "Seien Sie um 9:30 Uhr zum ersten Kreuzgang-Zeitfenster am Hieronymus-Kloster, online gebucht, und sehen Sie sich danach das kostenlose Kirchenschiff an. Tram 15 oder ein Taxi aus dem Zentrum brauchen 15-25 Minuten.",
              durationMin: 100,
            },
            {
              poiSlug: "pasteis-de-belem",
              text: "Gehen Sie zu Pastéis de Belém und setzen Sie sich hinein, statt sich in die Takeaway-Schlange zu stellen. Warme Törtchen, Zimt obendrauf, fertig.",
              durationMin: 40,
            },
          ],
          afternoon: [
            {
              poiSlug: "belem-tower",
              text: "Folgen Sie den Ufergärten am Denkmal der Entdeckungen vorbei zum Torre de Belém. Der Blick von außen ist der eigentliche Gewinn, sparen Sie sich die langsame Schlange fürs Innere, außer Sie haben das erste Zeitfenster gebucht.",
              durationMin: 75,
            },
            {
              poiSlug: "maat",
              text: "Gehen Sie am Ufer nach Osten zum MAAT und überqueren Sie den kostenlosen Dachweg für das beste Flusspanorama in Belém. Betreten Sie die Galerien nur, wenn die aktuelle Ausstellung Sie interessiert.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "lx-factory",
              text: "Beenden Sie den Tag in der LX Factory in Alcântara, stöbern Sie durch die Läden, bevor sie schließen, und bleiben Sie zum Abendessen in der umgebauten Fabrikzeile. Die Buchhandlung Ler Devagar allein rechtfertigt den Stopp.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Gulbenkian, Principe Real, langsames Lissabon",
          morning: [
            {
              poiSlug: "gulbenkian-museum",
              text: "Verbringen Sie den Vormittag im Museu Calouste Gulbenkian, einer kompakten Privatsammlung von ägyptischen Stücken bis zu Lalique-Schmuck. Wenn Sonntag ist, ist der Eintritt ab 14 Uhr frei, drehen Sie dann die Reihenfolge dieses Tages um und kommen Sie nach dem Mittagessen.",
              durationMin: 120,
            },
            {
              text: "Laufen Sie vor dem Aufbruch durch die Teiche und Betonwege des Gulbenkian-Gartens, sie sind kostenlos und wirklich ruhig. Die Metro ab São Sebastião bringt Sie in zehn Minuten zurück Richtung Rato.",
              durationMin: 40,
            },
          ],
          afternoon: [
            {
              text: "Widmen Sie den Nachmittag Principe Real selbst: dem Gartenplatz unter der riesigen Zeder, den Concept Stores in den alten Stadthäusern und einem langsamen Kaffee am Kiosk. Samstags füllt ein Biomarkt den Platz.",
              durationMin: 120,
            },
            {
              text: "Alternative für diesen ganzen Tag: Nehmen Sie den Zug vom Rossio nach Sintra, etwa 40 Minuten und 2,40 EUR pro Strecke, für den Palácio da Pena und die Quinta da Regaleira. Wenn Sie sich für Sintra entscheiden, buchen Sie die Palasttickets online und fahren Sie bis 8:30 Uhr los, um den Reisebussen zuvorzukommen.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Reservieren Sie ein Abschiedsessen in Principe Real, wo die Naturweinbars und modernen portugiesischen Küchen derzeit das Beste der Stadt sind. Das ist die Mahlzeit, für die sich das Geldausgeben lohnt.",
              durationMin: 120,
            },
            {
              text: "Nehmen Sie einen letzten Schlummertrunk an einem Miradouro-Kiosk oder auf einer ruhigen Gartenterrasse in der Nähe. Sie schlafen im Viertel, es gibt also keinen Heimweg, über den Sie sich Gedanken machen müssten.",
              durationMin: 45,
            },
          ],
        },
      ],
    },
  ],
};

export default lisbonDe;
