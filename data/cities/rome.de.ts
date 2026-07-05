import type { CityData } from "../types";

const romeDe: CityData = {
  city: {
    slug: "rome",
    name: "Rom",
    country: "Italien",
    countrySlug: "italy",
    lat: 41.9028,
    lng: 12.4964,
    tier: 1,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "FCO",
    airportToCenter:
      "Der Leonardo Express von Fiumicino nach Termini, etwa 32 Min., 14 EUR, verkehrt alle 15 Min. Günstigere Optionen: der Regionalzug FL1 zu den Bahnhöfen Trastevere oder Ostiense für 8 EUR oder ein Terravision/SIT-Bus nach Termini für rund 6 EUR, aber langsamer im Verkehr.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [7, 8],
    monthlyNotes: {
      1: "Kühl mit 12-13C, den geringsten Menschenmengen des Jahres und den günstigsten Hotelpreisen, wenngleich etwas Regen durchzieht. Das Dreikönigsfest am 6. Januar schließt die Weihnachtszeit mit einem Markt auf der Piazza Navona ab, und der erste Sonntag bringt freien Eintritt in die staatlichen Museen, das Kolosseum eingeschlossen.",
      2: "Weiterhin mild bei 13-14C und ruhig außerhalb der kurzen Karnevalszeit, wenn Kinder in Kostümen die Plätze füllen. Regen ist möglich, aber sonnige Nachmittage mit Mittagessen im Freien sind häufig, und dies ist ein guter Monat für eine preiswerte Reise mit kurzen Warteschlangen.",
      3: "Die Höchstwerte steigen Richtung 17C und die Tage werden länger, wobei die Menschenmengen erst spät im Monat zunehmen. Achten Sie auf den Osterkalender: Fällt die Karwoche in den März, füllen sich der Vatikan und die zentralen Hotels schnell und werden teuer.",
      4: "Einer der besten Monate mit 19-20C, doch zwei große Anziehungspunkte fallen zusammen: Karwoche und Ostern füllen den Petersplatz zu den Gottesdiensten des Papstes, und der Natale di Roma am 21. April inszeniert zum Gründungstag der Stadt Gladiatorenparaden am Circus Maximus. Buchen Sie den Vatikan und die Ostertage Wochen im Voraus.",
      5: "Verlässlich warm bei 23-24C mit langen Abenden und wenig Regen, der ideale Zeitpunkt vor der Sommerhitze. An den Hauptsehenswürdigkeiten ist es voll, daher sind Zeitfenster-Tickets für das Kolosseum und den Vatikan unerlässlich, doch die Saison für Terrassen und Abendessen auf den Plätzen ist auf ihrem Höhepunkt.",
      6: "Heiß bei 28-29C und geschäftig, wobei das Festival Estate Romana die Flussufer und Freiluftorte den ganzen Sommer über mit Konzerten und Open-Air-Kino zu füllen beginnt. Machen Sie das Kolosseum und den Vatikan bei Öffnung, dann ziehen Sie sich am Nachmittag in schattige Kirchen und lange Mittagessen zurück.",
      7: "Höchste Hitze über 31C, unerbittliche Sonne und weniger Einheimische, die an die Küste fahren. An den großen Sehenswürdigkeiten bleibt es dicht und die Preise hoch, buchen Sie also überall das erste Zeitfenster und planen Sie für die Backofenzeit von 14-17 Uhr Stopps im Innenraum oder im Schatten.",
      8: "Der heißeste und anstrengendste Monat bei 32-33C, wobei Ferragosto am 15. August viele familiengeführte Trattorien für den Feiertag schließt. Ist der August unvermeidlich, buchen Sie Klimaanlage, verlegen Sie das Sightseeing an den frühen Morgen und rechnen Sie damit, dass sich die Stadt halb leer von Römern, aber voller Reisegruppen anfühlt.",
      9: "Sommerlicht ohne die schlimmste Hitze: 28C früh im Monat, im Verlauf nachlassend, wobei die Veranstaltungen der Estate Romana am Tiber weiterlaufen. Nach der ersten Woche lassen die Menschenmengen nach, und dies ist wohl insgesamt der schönste Monat für einen Rom-Aufenthalt.",
      10: "Warme Tage um 23-24C, wobei spät im Monat der erste richtige Regen zurückkehrt und das flache Licht für Fotos hervorragend ist. Die Menschenmengen dünnen nach Mitte Oktober merklich aus, was den Monat sowohl für Wetter als auch Hotelpreise zu einer starken Wahl der Nebensaison macht.",
      11: "Kühler bei 17-18C mit regelmäßigen Regenphasen, aber zahlreichen hellen Tagen zwischen den Fronten und den ruhigsten großen Sehenswürdigkeiten des Herbstes. Die Preise der Nebensaison kehren zurück, und oft können Sie in Restaurants spazieren, die im Mai Reservierungen verlangen.",
      12: "Mild für den Winter bei 14C, aber nass, mit einem Weihnachtsbaum und einer Krippe auf dem Petersplatz und Lichterketten quer durch das Zentrum. Ruhig bis zur Strecke von Weihnachten bis Neujahr, wenn die Preise anziehen und der freie Eintritt am ersten Sonntag große Menschenmengen von Einheimischen anzieht.",
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
    tagline: "Dreitausend Jahre Ruinen, und obendrauf Abendessen im Freien.",
    heroIntro:
      "Rom packt antike Wunder, den Vatikan und Europas beste ungezwungene Küche in ein Zentrum, das Sie größtenteils zu Fuß erkunden können, wenn Sie das Kopfsteinpflaster und die Distanzen in Kauf nehmen. Drei Tage sind das ehrliche Minimum, um das antike Rom, den Vatikan und den Kern der Plätze ohne Gewaltmarsch aufzuteilen. Kommen Sie im Frühling oder Frühherbst, buchen Sie Kolosseum und Vatikan, bevor Sie fliegen, und die Stadt liefert wie kaum ein anderer Ort.",
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
      vibe: "Der historische Kern zwischen Pantheon, Piazza Navona und Trevi-Brunnen, ein Gewirr ockerfarbener Gassen, das sich zu barocken Plätzen öffnet. Alles auf der Liste eines Erstbesuchers liegt binnen einer Viertelstunde zu Fuß, und die Straßen leuchten nachts, sobald die Tagesbesucher weniger werden. Es ist das Postkartenmotiv, und Sie zahlen Postkartenpreise, um darin zu übernachten.",
      pros: [
        "Zu Fuß zum Pantheon, Trevi, Navona und der Spanischen Treppe, ganz ohne Nahverkehr",
        "Schön bei Nacht, sobald sich die Reisegruppen nach dem Essen verzogen haben",
        "Dicht an Cafés, Gelato und Aperitivo-Adressen an jeder Ecke",
      ],
      cons: [
        "Das teuerste Viertel der Stadt für Hotels",
        "Keine Metrostationen darin, also gehen Sie zu Fuß oder nehmen überall Busse",
        "Den ganzen Tag über voll und laut rund um die Hauptsehenswürdigkeiten",
      ],
    },
    {
      slug: "monti",
      citySlug: "rome",
      name: "Monti",
      lat: 41.8946,
      lng: 12.4917,
      bestFor: ["local", "romantic", "nightlife"],
      vibe: "Roms ältestes Viertel liegt in einer Nische zwischen Kolosseum und Termini, einst das antike Rotlichtviertel und heute das lebenswerteste Quartier des Zentrums. Vintage-Läden, Weinbars und kleine Trattorien säumen efeuumrankte Gassen rund um die Piazza della Madonna dei Monti, wo Einheimische abends auf den Brunnenstufen trinken. Es verschafft Ihnen fußläufigen Zugang zum antiken Rom ohne den Preis oder das Gedränge der Reisebusse.",
      pros: [
        "Zehn Gehminuten zum Kolosseum und zum Forum",
        "Metrostation Cavour an der Linie B, dazu nah am Verkehrsknoten Termini",
        "Echtes Viertelnachtleben aus Weinbars und Enotecas, keine Touristenfallen",
      ],
      cons: [
        "Einige Straßen nahe Termini wirken nach Einbruch der Dunkelheit heruntergekommen",
        "Beliebte Bars werden an Wochenendabenden laut und voll",
        "Weniger namhafte Hotels, mehr Apartments und kleine Boutiquen",
      ],
    },
    {
      slug: "trastevere",
      citySlug: "rome",
      name: "Trastevere",
      lat: 41.8896,
      lng: 12.4695,
      bestFor: ["romantic", "nightlife", "local"],
      vibe: "Jenseits des Tibers vom Zentrum aus ist Trastevere ein Gewirr aus kopfsteingepflasterten Gassen, Efeu und Wäscheleinen, das nach Einbruch der Dunkelheit zum stimmungsvollsten Viertel der Stadt für Abendessen und Drinks wird. Trattorien breiten sich auf die Straßen aus, und die Bars rund um die Piazza di Santa Maria bleiben bis nach Mitternacht belebt. Am Abend charmant, ist es an Wochenendnächten wirklich ausgelassen.",
      pros: [
        "Die beste Dichte an klassischen Trattorien und Abendtrubel in Rom",
        "Zu Fuß über den Fluss ins Zentrum und zum jüdischen Ghetto",
        "Postkartengassen, die sich im Morgenlicht wunderbar fotografieren lassen",
      ],
      cons: [
        "Am Wochenende bis in die frühen Stunden laut, eine schlechte Wahl für leichte Schläfer",
        "Überhaupt keine Metro, Sie sind auf Trams, Busse oder Ihre Füße angewiesen",
        "Einige Restaurants an den Hauptplätzen ruhen sich auf der Lage aus",
      ],
    },
    {
      slug: "prati",
      citySlug: "rome",
      name: "Prati",
      lat: 41.9075,
      lng: 12.4623,
      bestFor: ["family", "first-time", "budget"],
      vibe: "Ein geordnetes, elegantes Viertel mit breiten Boulevards, angelegt neben dem Vatikan, Heimat schicker Läden, verlässlicher Restaurants und weit weniger Touristen als das Zentrum. Es bringt Sie wenige Gehminuten von den Vatikanischen Museen und dem Petersdom unter und fühlt sich zugleich wie ein echtes Wohn-Rom an. Ruhig, sicher und gut per Metro angebunden.",
      pros: [
        "Zu Fuß zu den Vatikanischen Museen und zum Petersdom, den Bustouristen voraus",
        "Zwei Metrostationen an der Linie A, direkt nach Termini und zur Spanischen Treppe",
        "Preiswertere Hotels und zuverlässige, untouristische Küche",
      ],
      cons: [
        "Nachts ruhiger, mit begrenzter Bar- und Nachtleben-Szene",
        "20-25 Gehminuten oder eine Metrofahrt von der Kolosseum-Seite der Stadt",
        "Wirkt funktionaler als romantisch im Vergleich zum alten Zentrum",
      ],
    },
    {
      slug: "testaccio",
      citySlug: "rome",
      name: "Testaccio",
      lat: 41.8759,
      lng: 12.4757,
      bestFor: ["local", "budget", "family"],
      vibe: "Ein Arbeiterviertel südlich des Zentrums, rund um den alten Schlachthof gebaut, und die geistige Heimat der römischen Cucina povera, Innereien inklusive. Seine Markthalle und schnörkellosen Trattorien ziehen ernsthafte Esser an, während das Nachtleben zu Clubs führt, die in den Monte Testaccio gegraben sind. Wenig zu sehen, viel zu essen, und Preise, die Einheimische tatsächlich zahlen.",
      pros: [
        "Roms bestes preiswertes authentisches Essen, vom Markt bis zu altmodischen Trattorien",
        "Metrostation Piramide an der Linie B, wenige Minuten zum Kolosseum",
        "Echte Viertelatmosphäre mit fast keinem Touristenaufschlag",
      ],
      cons: [
        "Arm an klassischen Sehenswürdigkeiten, Sie sind hier zum Essen, nicht zum Gaffen",
        "Ein Fußweg von über 20 Minuten oder eine Metrofahrt vom historischen Kern",
        "Die Clubmeile am Monte Testaccio ist an Wochenendnächten laut",
      ],
    },
  ],

  pois: [
    {
      slug: "colosseum",
      citySlug: "rome",
      name: "Kolosseum",
      lat: 41.8902,
      lng: 12.4922,
      kind: "sight",
      needsBooking: true,
      tip: "Kaufen Sie das Kombiticket Kolosseum-Forum-Palatin Tage im Voraus online, es ist ausverkauft und die Schlange vor Ort dauert in der Saison eine Stunde oder mehr. Das Zeitfenster gilt nur für das Kolosseum, betreten Sie es also zuerst zu Ihrem Zeitfenster und nutzen Sie dann dasselbe Ticket über die nächsten 24 Stunden für Forum und Palatin. Die Zusatzoptionen Arenaboden und Untergrund brauchen eine separate Buchung weit im Voraus.",
    },
    {
      slug: "roman-forum-palatine",
      citySlug: "rome",
      name: "Forum Romanum und Palatin",
      lat: 41.8925,
      lng: 12.4853,
      kind: "sight",
      needsBooking: true,
      tip: "Vom selben Kombiticket Kolosseum abgedeckt, machen Sie es also am selben oder am nächsten Tag innerhalb des 24-Stunden-Fensters. Betreten Sie es durch das ruhigere Tor Via di San Gregorio statt durch den überfüllten Forum-Eingang nahe dem Kolosseum und erklimmen Sie zuerst den Palatin für den Blick hinab über die Ruinen, bevor die Mittagssonne kommt. Es gibt fast keinen Schatten, bringen Sie also Wasser und einen Hut mit.",
    },
    {
      slug: "pantheon",
      citySlug: "rome",
      name: "Pantheon",
      lat: 41.8986,
      lng: 12.4769,
      kind: "sight",
      needsBooking: true,
      tip: "Der Eintritt kostet 5 EUR und ist am ersten Sonntag im Monat frei, aber an Wochenenden und Feiertagen ist ein Zeitfenster erforderlich, buchen Sie diese also vorab online. Kommen Sie bei Öffnung (9 Uhr) oder in der letzten Stunde vor Schließung, um den Innenraum und seine offene Öffnung ohne eine Wand aus Selfie-Sticks zu haben. Beobachten Sie an einem Regentag, wie der Regen direkt durch die Öffnung auf den entwässerten Marmorboden fällt.",
    },
    {
      slug: "trevi-fountain",
      citySlug: "rome",
      name: "Trevi-Brunnen",
      lat: 41.9009,
      lng: 12.4833,
      kind: "sight",
      needsBooking: false,
      tip: "Gehen Sie um 7 Uhr oder nach Mitternacht, um den Marmor wirklich zu sehen, gegen Vormittag ist es ein solides Gedränge zehn Personen tief. Werfen Sie die Münze mit der rechten Hand über die linke Schulter, wenn Sie die Tradition wollen, und meiden Sie die überteuerten Cafés am Platz. Das Wasser ist nicht trinkbar, aber die kostenlosen Nasoni-Straßenbrunnen in der Nähe schon.",
    },
    {
      slug: "vatican-museums",
      citySlug: "rome",
      name: "Vatikanische Museen und Sixtinische Kapelle",
      lat: 41.9065,
      lng: 12.4536,
      kind: "museum",
      needsBooking: true,
      tip: "Buchen Sie das erste Zeitfenster um 8 Uhr online, Wochen im Voraus, und gehen Sie über die leerere Route direkt zur Sixtinischen Kapelle, bevor Sie umkehren, denn die Galerien füllen sich bis 10 Uhr Schulter an Schulter. Mittwochvormittage sind am ruhigsten, weil die Papstaudienz die Menschen auf den Platz zieht. Der freie Eintritt am letzten Sonntag im Monat ist ein Auflauf mit stundenlangen Schlangen, meiden Sie ihn, außer Sie haben unendliche Geduld.",
    },
    {
      slug: "st-peters-basilica",
      citySlug: "rome",
      name: "Petersdom",
      lat: 41.9022,
      lng: 12.4539,
      kind: "sight",
      needsBooking: false,
      tip: "Der Eintritt in die Basilika ist frei, aber die Sicherheitsschlange auf dem Platz kann eine Stunde erreichen, kommen Sie also zur Öffnung um 7 Uhr oder am späten Nachmittag. Die Kleiderordnung ist streng: Schultern und Knie bedeckt, sonst werden Sie an der Tür abgewiesen. Der Aufstieg zur Kuppel ist ein kostenpflichtiger Zusatz (etwa 10 EUR mit dem Lift zur Terrasse, 8 EUR zu Fuß) und lohnt sich für den Blick direkt hinab ins Kirchenschiff und über Rom.",
    },
    {
      slug: "piazza-navona",
      citySlug: "rome",
      name: "Piazza Navona",
      lat: 41.8992,
      lng: 12.4731,
      kind: "sight",
      needsBooking: false,
      tip: "Der barocke Platz, auf einem antiken Stadion errichtet, ist kostenlos und am schönsten am frühen Morgen oder nach dem Abendessen, wenn die Menschenmengen und die Karikaturisten weniger werden. Berninis Vierströmebrunnen ist das Herzstück, aber setzen Sie sich hier nicht an ein Terrassencafé, der Lageaufschlag ist brutal. Weichen Sie eine Straße nach Westen aus für einen Bruchteil des Preises.",
    },
    {
      slug: "spanish-steps",
      citySlug: "rome",
      name: "Spanische Treppe",
      lat: 41.906,
      lng: 12.4823,
      kind: "sight",
      needsBooking: false,
      tip: "Das Sitzen auf der Treppe ist verboten und die Polizei ahndet es mit Bußgeldern, dies ist also ein Halt zum Stehen und Fotografieren, kein Rastplatz. Kommen Sie bei Sonnenaufgang für die leere Treppe oder steigen Sie hinauf zur Kirche Trinità dei Monti oben für einen kostenlosen Blick über die Dächer. Das Keats-Shelley-Haus am Fuß ist ein ruhiger Abstecher, wenn Sie einen möchten.",
    },
    {
      slug: "galleria-borghese",
      citySlug: "rome",
      name: "Galleria Borghese",
      lat: 41.9142,
      lng: 12.4922,
      kind: "museum",
      needsBooking: true,
      tip: "Sie kommen nicht ohne ein vorab gebuchtes, zeitlich festgelegtes Zwei-Stunden-Fenster hinein, und diese sind Tage im Voraus ausverkauft, buchen Sie dies also vor allem anderen auf Ihrer Reise. Sie beherbergt Berninis größte Skulpturen und einen Raum voller Caravaggios in einer kompakten Villa, sodass zwei Stunden wirklich genügen. Kommen Sie 15 Minuten früher, um Ihre Tasche in der obligatorischen Garderobe abzugeben, bevor Ihr Zeitfenster beginnt.",
    },
    {
      slug: "trastevere-lanes",
      citySlug: "rome",
      name: "Gassen von Trastevere",
      lat: 41.8896,
      lng: 12.4695,
      kind: "experience",
      needsBooking: false,
      tip: "Schlendern Sie am Morgen durch die kopfsteingepflasterten Gassen für die Fotos von Efeu und Wäscheleinen ohne Menschenmengen, kehren Sie dann nach 20 Uhr für die Szene aus Abendessen und Drinks zurück. Steuern Sie die Straßen rund um die Piazza di Santa Maria in Trastevere an statt den Platz selbst, wo die Restaurants von der Aussicht zehren. Reservieren Sie einen Tisch in einer Trattoria, die guten sind am Wochenende ab 20:30 Uhr voll.",
    },
    {
      slug: "campo-de-fiori",
      citySlug: "rome",
      name: "Markt Campo de' Fiori",
      lat: 41.8956,
      lng: 12.4722,
      kind: "food",
      needsBooking: false,
      tip: "Der Morgenmarkt läuft etwa von 7 bis 14 Uhr, Montag bis Samstag, und ist heute mehr Touristen-Souvenir als lokaler Lebensmittelmarkt, kommen Sie also zum Stöbern und Fotografieren statt zum günstigen Einkaufen. Kaufen Sie Obst, Käse und ein Stück Pizza bianca von der Eckbäckerei Forno Campo de' Fiori für ein Picknick. Nachts kippt der Platz in eine ausgelassene Studenten-Barszene um.",
    },
    {
      slug: "castel-sant-angelo",
      citySlug: "rome",
      name: "Engelsburg",
      lat: 41.9031,
      lng: 12.4663,
      kind: "sight",
      needsBooking: false,
      tip: "Hadrians zylindrisches Grabmal, zur Papstfestung geworden, liegt genau zwischen dem Vatikan und dem Zentrum, verbinden Sie es also mit einem Vatikan-Vormittag. Buchen Sie online, um die Ticketschlange zu umgehen, dann steigen Sie die spiralförmige Rampe zur Dachterrasse hinauf für eines der besten Panoramen Roms, mit der Kuppel des Petersdoms im Mittelpunkt. Die statuengesäumte Ponte Sant'Angelo davor ist kostenlos und am schönsten in der Abenddämmerung.",
    },
    {
      slug: "villa-borghese",
      citySlug: "rome",
      name: "Park Villa Borghese",
      lat: 41.9142,
      lng: 12.4853,
      kind: "park",
      needsBooking: false,
      tip: "Roms großer zentraler Park ist kostenlos und die natürliche Ergänzung zur darin gelegenen Galleria Borghese, nutzen Sie also die umliegenden Stunden vor oder nach Ihrem Galeriezeitfenster. Gehen Sie zur Terrasse Pincio am Westrand für einen kostenlosen weiten Blick über die Piazza del Popolo und die Dächer bis zum Petersdom, am schönsten bei Sonnenuntergang. Mieten Sie ein Fahrrad oder ein Ruderboot auf dem kleinen See, wenn Sie Kinder dabeihaben.",
    },
    {
      slug: "jewish-ghetto-food",
      citySlug: "rome",
      name: "Jüdisches Ghetto",
      lat: 41.8925,
      lng: 12.4778,
      kind: "food",
      needsBooking: false,
      tip: "Roms altes jüdisches Viertel rund um die Via del Portico d'Ottavia ist der Ort für carciofi alla giudia, die plattgedrückte frittierte Artischocke, am besten von Oktober bis Frühling, wenn sie Saison hat. Kommen Sie zu einem späten Mittagessen, bestellen Sie die frittierte Artischocke und den baccalà und holen Sie sich ein Gebäck aus der historischen Bäckerei Boccione an der Ecke. Beachten Sie, dass das Viertel samstags wegen des Sabbats ruhig ist.",
    },
  ],

  itineraries: [
    {
      citySlug: "rome",
      days: 2,
      summary:
        "Zwei Tage decken Roms größte Höhepunkte ab, aber es ist ein Durchmarsch der Highlights und Sie werden es spüren, denn Rom braucht wirklich drei. In 48 Stunden schaffen Sie das antike Rom (Kolosseum, Forum, Palatin) an Tag eins und den Vatikan plus den Kern der Plätze (Pantheon, Trevi, Navona) an Tag zwei, mit Abendessen in Trastevere an beiden Abenden. Was Sie streichen müssen: die Galleria Borghese, die Villa Borghese, das Innere der Engelsburg, das Essen in Testaccio und jedes langsame Verweilen, dies ist also ein Marsch, kein Bummel. Es eignet sich für einen Wochenendtrip, einen Zwischenstopp oder einen ersten Vorgeschmack vor der Kombination mit Florenz. Die Unverhandelbaren: Buchen Sie das Kombiticket Kolosseum-Forum und das 8-Uhr-Zeitfenster des Vatikans vor, bevor Sie fliegen, sonst verlieren Sie Stunden an Schlangen, die Sie sich auf einer Zweitagesreise nicht leisten können. Quartieren Sie sich im Centro Storico ein, damit beide Morgen zu Fuß beginnen und die Abende Sie wenige Schritte vom Abendessen unterbringen. Bekommen Sie einen dritten Tag, ergänzen Sie die Borghese und werden Sie langsamer, es ist das mit Abstand beste Upgrade.",
      stayNeighborhoodSlug: "centro-storico",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Antikes Rom: Kolosseum, Forum, Palatin",
          morning: [
            {
              poiSlug: "colosseum",
              text: "Beginnen Sie am Kolosseum zu Ihrem vorgebuchten Öffnungszeitfenster, bevor Schlangen und Hitze zunehmen. Umrunden Sie beide Ränge für den vollen Blick über die Arena, dann treten Sie mit demselben Kombiticket zum Forum hinaus.",
              durationMin: 90,
            },
            {
              poiSlug: "roman-forum-palatine",
              text: "Betreten Sie das Forum Romanum und erklimmen Sie nebenan den Palatin mit demselben Ticket. Gehen Sie zuerst auf den Palatin für den Blick hinab über die Ruinen, dann winden Sie sich durch die Tempel und Bögen des Forums, bevor die Mittagssonne ihren Höhepunkt erreicht.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              text: "Mittagessen und Erholung in Monti, zehn Gehminuten vom Forum, in einer Weinbar oder Trattoria rund um die Piazza della Madonna dei Monti. Dies ist das lokale Gegenmittel zu den Touristencafés direkt am Kolosseum.",
              durationMin: 90,
            },
            {
              text: "Abstecher zum Kapitolshügel und Michelangelos Piazza del Campidoglio, dann die kostenlose Terrasse dahinter für einen Dachblick zurück über das Forum, das Sie gerade durchlaufen haben. Es ist ein Fünf-Minuten-Aufstieg und der beste kostenlose Aussichtspunkt auf das antike Rom.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "trastevere-lanes",
              text: "Überqueren Sie am Abend den Fluss nach Trastevere und schlendern Sie durch die kopfsteingepflasterten Gassen, während sich die Bars füllen. Reservieren Sie einen Trattoria-Tisch für etwa 20:30 Uhr, die guten abseits des Hauptplatzes sind an jedem geschäftigen Abend bis dahin voll.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Vatikan und der Kern der Plätze",
          morning: [
            {
              poiSlug: "vatican-museums",
              text: "Seien Sie zu Ihrem vorgebuchten 8-Uhr-Zeitfenster an den Vatikanischen Museen und steuern Sie direkt die Sixtinische Kapelle an, bevor die Galerien sich bis 10 Uhr stauen. Der Mittwoch ist der ruhigste Vormittag, weil die Papstaudienz die Menschen auf den Platz zieht.",
              durationMin: 150,
            },
            {
              poiSlug: "st-peters-basilica",
              text: "Gehen Sie als Nächstes zum Petersdom, kostenlos zu betreten mit bedeckten Schultern und Knien. Wenn Ihre Beine mitmachen, zahlen Sie die kleine Gebühr für den Kuppelaufstieg und den Blick direkt hinab ins Kirchenschiff und über die Stadt.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "pantheon",
              text: "Queren Sie zurück über den Fluss und steuern Sie das Pantheon an, das besterhaltene Gebäude des antiken Roms, mit Betreten zu Ihrem Zeitfenster, falls Wochenende ist. Stellen Sie sich unter die offene Öffnung, dann holen Sie sich einen Kaffee in einer der historischen Bars am Platz.",
              durationMin: 75,
            },
            {
              poiSlug: "piazza-navona",
              text: "Gehen Sie zwei Minuten zur Piazza Navona für Berninis Vierströmebrunnen auf dem barocken Grundriss eines antiken Stadions. Bleiben Sie in Bewegung, eine Straße nach Westen für einen Drink zu untouristischen Preisen.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "trevi-fountain",
              text: "Drehen Sie am Abend eine Runde zum Trevi-Brunnen, wenn die Menschenmengen etwas nachlassen und der Marmor beleuchtet ist. Werfen Sie die Münze, dann gehen Sie hinauf zur Spanischen Treppe wenige Minuten entfernt für die angestrahlte Treppe.",
              durationMin: 60,
            },
            {
              text: "Schließen Sie mit einem Abendessen im Centro Storico nahe Ihrem Hotel ab und buchen Sie überall vor, wo es einen Namen gibt. Krönen Sie den Abend mit einem Gelato aus einer echten Gelateria, einer, die ihre Behälter abgedeckt und niedrig lagert, nicht in Neonwirbeln hoch aufgetürmt.",
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
        "Ja, drei Tage sind die richtige Länge für Rom, und das ist, was wir für einen ersten Besuch empfehlen. Es gibt dem antiken Rom einen vollen Tag (Kolosseum, Forum, Palatin, plus Monti), dem Vatikan einen eigenen Vormittag gefolgt von der Engelsburg und einen eigenen Tag für den Kern der Plätze: Pantheon, Trevi, Navona, die Spanische Treppe und Campo de' Fiori. Sie essen gut in drei verschiedenen Vierteln, schaffen sowohl Trastevere als auch einen echten römischen Trattoria-Abend und bewegen sich dennoch in einem Tempo, das Sie in einem Platz sitzen statt an ihm vorbeisprinten lässt. Was weiterhin gestrichen wird: die Galleria Borghese, die Villa Borghese und die Essensszene von Testaccio, was genau das ist, was ein vierter Tag hinzufügt. Dies eignet sich für Erstbesucher, Paare und alle, die als Nächstes nach Florenz weiterreisen. Übernachten Sie in Monti: Es ist zu Fuß am Kolosseum, liegt an der Metro Cavour und nahe Termini für den Sprung zum Vatikan, und seine Weinbars machen es zur besten Basis für die Abende. Buchen Sie das Kombiticket Kolosseum-Forum und das 8-Uhr-Zeitfenster des Vatikans vor, bevor Sie fliegen.",
      stayNeighborhoodSlug: "monti",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Antikes Rom: Kolosseum, Forum, Palatin, Monti",
          morning: [
            {
              poiSlug: "colosseum",
              text: "Beginnen Sie am Kolosseum zu Ihrem vorgebuchten Öffnungszeitfenster, den Schlangen und der Hitze voraus. Gehen Sie beide Ränge ab für den vollen Blick über die Arena, dann weiter zum Forum mit demselben Kombiticket.",
              durationMin: 90,
            },
            {
              poiSlug: "roman-forum-palatine",
              text: "Betreten Sie als Nächstes das Forum Romanum und den Palatin über das ruhigere Tor Via di San Gregorio. Erklimmen Sie zuerst den Palatin für den Überblick über die Ruinen, dann fädeln Sie sich durch das Forum hinab, bevor die Sonne im Zenit steht.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              text: "Mittagessen in Monti, einen kurzen Weg vom Forum, in einer Trattoria oder Enoteca rund um die Piazza della Madonna dei Monti. Lassen Sie sich Zeit, Sie haben sich die Pause nach einem Vormittag auf den Beinen in den Ruinen verdient.",
              durationMin: 90,
            },
            {
              text: "Erklimmen Sie den Kapitolshügel zu Michelangelos Piazza del Campidoglio und der kostenlosen Terrasse dahinter für ein Dachpanorama über das Forum. Wenn Sie Energie haben, beherbergen die Kapitolinischen Museen hier die originale Bronzewölfin und eine hervorragende antike Sammlung.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Bleiben Sie am Abend in Monti und trinken Sie vor dem Abendessen wie die Einheimischen auf den Brunnenstufen des Hauptplatzes. Die Weinbars und kleinen Trattorien des Viertels sind einen kurzen Fußweg von Ihrem Hotel entfernt.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Vatikan und Engelsburg",
          morning: [
            {
              poiSlug: "vatican-museums",
              text: "Seien Sie zu Ihrem gebuchten 8-Uhr-Zeitfenster an den Vatikanischen Museen und gehen Sie direkt zur Sixtinischen Kapelle vor dem Gedränge. Mittwochvormittage sind am ruhigsten, weil die Papstaudienz die Menschen stattdessen auf den Platz zieht.",
              durationMin: 150,
            },
            {
              poiSlug: "st-peters-basilica",
              text: "Gehen Sie zum Petersdom, kostenlos zu betreten mit bedeckten Schultern und Knien. Zahlen Sie die kleine Gebühr für den Kuppelaufstieg, wenn Ihre Beine es zulassen, der Blick hinab ins Kirchenschiff und über Rom ist der Lohn.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              text: "Mittagessen in Prati, wenige Häuserblocks vom Vatikan, wo die Restaurants verlässlich und frei vom Reisebus-Aufschlag sind, den Sie direkt am Petersdom bekommen. Ein guter Ort, um vor der Nachmittagssehenswürdigkeit langsamer zu werden.",
              durationMin: 75,
            },
            {
              poiSlug: "castel-sant-angelo",
              text: "Gehen Sie zur Engelsburg zwischen dem Vatikan und dem Fluss und buchen Sie online, um die Schlange zu umgehen. Erklimmen Sie die spiralförmige Rampe zur Dachterrasse für ein Panorama mit der Kuppel des Petersdoms im Mittelpunkt, dann queren Sie die statuengesäumte Ponte Sant'Angelo Richtung Zentrum.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "trastevere-lanes",
              text: "Wechseln Sie zum Abendessen nach Trastevere und schlendern Sie durch die kopfsteingepflasterten Gassen, während sich die Bars füllen. Reservieren Sie eine Trattoria abseits des Hauptplatzes für etwa 20:30 Uhr und schließen Sie mit einem Drink auf der Piazza di Santa Maria ab.",
              durationMin: 180,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Kern der Plätze: Pantheon, Trevi, Navona",
          morning: [
            {
              poiSlug: "pantheon",
              text: "Beginnen Sie am Pantheon zur Öffnung um 9 Uhr, zu Ihrem Zeitfenster, falls Wochenende ist, um vor den Menschenmengen unter der Öffnung zu stehen. Trinken Sie einen Kaffee in einer historischen Bar am Platz, dann gehen Sie zwei Minuten zum nächsten Halt.",
              durationMin: 75,
            },
            {
              poiSlug: "piazza-navona",
              text: "Nehmen Sie die Piazza Navona und Berninis Vierströmebrunnen auf dem Grundriss eines antiken Stadions in sich auf. Fotografieren Sie es, dann treten Sie eine Straße vom Platz weg für einen Drink zu fairen Preisen.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "campo-de-fiori",
              text: "Gehen Sie zum Campo de' Fiori für das Ende des Morgenmarkts und holen Sie sich Obst und ein Stück Pizza bianca vom Forno Campo de' Fiori für ein leichtes Mittagessen. Dann biegen Sie ins nahe jüdische Ghetto für eine frittierte Artischocke ein, wenn Sie sich lieber setzen möchten.",
              durationMin: 90,
            },
            {
              poiSlug: "trevi-fountain",
              text: "Drehen Sie eine Runde zum Trevi-Brunnen, akzeptieren Sie, dass der Nachmittag Menschenmengen bedeutet, und werfen Sie die Münze über die linke Schulter. Dann steigen Sie zur wenige Minuten entfernten Spanischen Treppe hinauf und weiter zur Kirche Trinità dei Monti für den kostenlosen Dachblick.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "spanish-steps",
              text: "Verweilen Sie rund um die Spanische Treppe und die eleganten Einkaufsstraßen darunter, während das Licht schwindet, dann treiben Sie zurück Richtung Zentrum. Alles hier liegt einen kurzen Fußweg auseinander, schlendern Sie also, statt zu planen.",
              durationMin: 60,
            },
            {
              text: "Buchen Sie ein Abschiedsessen im Centro Storico oder zurück in Monti und gönnen Sie sich etwas bei Ihrem letzten römischen Mahl. Enden Sie mit einem Gelato aus einer ernsthaften Gelateria, der Art, die ihre Behälter abgedeckt und niedrig lagert.",
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
        "Vier Tage sind der ideale Punkt für einen ersten Besuch in Rom und verwandeln einen Sightseeing-Sprint in einen echten Urlaub. Die Tage eins bis drei decken das Wesentliche ab: das antike Rom (Kolosseum, Forum, Palatin), den Vatikan mit der Engelsburg und den Kern der Plätze aus Pantheon, Trevi und Navona, jeweils ohne Hetze. Tag vier ist das Überdruckventil, aufgebaut rund um die Galleria Borghese, die zu einem strengen Zeitfenster vorgebucht werden muss und ohne dieses nicht betreten werden kann, gefolgt von den Gärten der Villa Borghese und einem langen, genüsslichen Essnachmittag durch Trastevere oder Testaccio. Diese Länge eignet sich für Reisende, die den Gewaltmarsch verabscheuen, für Paare und für alle, deren Flüge die Reise unglücklich einrahmen. Für vier Tage empfehlen wir eine Basis in Trastevere: Sie haben ein langsameres Tempo akzeptiert, und seine Gassen und Trattorien machen die Heimkehr an jedem Abend zum besten Teil des Tages. Über vier Tage hinaus ergänzen Sie einen Tagesausflug nach Tivoli zur Villa Adriana oder fahren Sie in eineinhalb Stunden per Schnellzug weiter nach Florenz. Buchen Sie Kolosseum, Vatikan und vor allem die Borghese weit im Voraus.",
      stayNeighborhoodSlug: "trastevere",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Antikes Rom: Kolosseum, Forum, Palatin",
          morning: [
            {
              poiSlug: "colosseum",
              text: "Beginnen Sie am Kolosseum zu Ihrem gebuchten Öffnungszeitfenster, vor Schlangen und Hitze. Umrunden Sie beide Ränge, dann weiter zum Forum mit demselben Kombiticket.",
              durationMin: 90,
            },
            {
              poiSlug: "roman-forum-palatine",
              text: "Betreten Sie das Forum Romanum und den Palatin mit demselben Ticket über das ruhigere San-Gregorio-Tor. Erklimmen Sie zuerst den Palatin für den Überblick, dann arbeiten Sie sich durch das Forum hinab, bevor es Mittag wird.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              text: "Mittagessen in Monti nahe dem Forum, in einer Weinbar oder Trattoria rund um die Piazza della Madonna dei Monti. Werden Sie langsamer, der Nachmittag ist an Tag eins bewusst leicht gehalten.",
              durationMin: 90,
            },
            {
              text: "Erklimmen Sie den Kapitolshügel für Michelangelos Piazza del Campidoglio und die kostenlose Terrasse dahinter mit Blick über das Forum. Die Kapitolinischen Museen hier sind die beste Ergänzung, wenn Sie mehr antikes Rom möchten.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Kehren Sie zum Abendessen nach Trastevere zurück und gewöhnen Sie sich an das Viertel, das Sie Ihr Zuhause nennen. Reservieren Sie eine Trattoria abseits des Hauptplatzes und enden Sie mit einem Drink auf der Piazza di Santa Maria.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Vatikan und Engelsburg",
          morning: [
            {
              poiSlug: "vatican-museums",
              text: "Seien Sie zu Ihrem 8-Uhr-Zeitfenster an den Vatikanischen Museen und gehen Sie direkt zur Sixtinischen Kapelle, bevor die Galerien sich füllen. Der Mittwoch ist der ruhigste Vormittag, weil die Papstaudienz die Menschen auf den Platz zieht.",
              durationMin: 150,
            },
            {
              poiSlug: "st-peters-basilica",
              text: "Gehen Sie zum Petersdom, kostenlos mit bedeckten Schultern und Knien. Zahlen Sie für den Kuppelaufstieg, wenn Ihre Beine es zulassen, für den Blick hinab ins Kirchenschiff und über die ganze Stadt.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              text: "Mittagessen in Prati nahe dem Vatikan, wo das Essen zuverlässig und frei vom Reisegruppen-Aufschlag am Petersdom ist. Eine gute Pause vor dem Nachmittag.",
              durationMin: 75,
            },
            {
              poiSlug: "castel-sant-angelo",
              text: "Gehen Sie zur Engelsburg, buchen Sie online, um die Schlange zu umgehen, und erklimmen Sie die Rampe zur Dachterrasse für das Panorama mit der Kuppel des Petersdoms. Queren Sie in der Abenddämmerung die statuengesäumte Ponte Sant'Angelo zurück Richtung Zentrum.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "piazza-navona",
              text: "Bummeln Sie am Abend durch die Piazza Navona für Berninis beleuchteten Brunnen und den Platz in seiner ruhigsten Verfassung. Nehmen Sie einen Aperitivo eine Straße vom Platz weg, wo die Preise vernünftig sind.",
              durationMin: 60,
            },
            {
              text: "Abendessen zurück in Trastevere, auf dem Weg hinein durch die Gassen schlendernd. Die guten Tische sind am Wochenende bis 20:30 Uhr voll, buchen Sie also vor.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Kern der Plätze: Pantheon, Trevi, Navona",
          morning: [
            {
              poiSlug: "pantheon",
              text: "Beginnen Sie am Pantheon zur Öffnung um 9 Uhr, zu Ihrem Zeitfenster, falls Wochenende ist, um die Öffnung vor den Menschenmengen zu erwischen. Kaffee in einer historischen Bar am Platz, dann weiter.",
              durationMin: 75,
            },
            {
              poiSlug: "campo-de-fiori",
              text: "Gehen Sie zum Campo de' Fiori für den Morgenmarkt und ein Picknickstück vom Forno Campo de' Fiori. Biegen Sie ins nahe jüdische Ghetto für eine frittierte Artischocke ein, wenn Sie lieber ein Mittagessen im Sitzen möchten.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "trevi-fountain",
              text: "Gehen Sie zum Trevi-Brunnen, werfen Sie die Münze über die linke Schulter und nehmen Sie das Nachmittagsgedränge in Kauf. Dann steigen Sie hinauf zur Spanischen Treppe und weiter zu Trinità dei Monti für den kostenlosen Dachblick.",
              durationMin: 90,
            },
            {
              poiSlug: "spanish-steps",
              text: "Schlendern Sie durch die eleganten Straßen unterhalb der Spanischen Treppe und schauen Sie in den Schaufenstern der Designermeile entlang der Via dei Condotti. Alles hier liegt einen kurzen Fußweg auseinander, treiben Sie also, statt zu marschieren.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Abendessen im Centro Storico oder zurück in Trastevere, buchen Sie überall vor, wo es gut bewertet ist. Schließen Sie mit einem Gelato aus einer ernsthaften Gelateria ab, Behälter abgedeckt und niedrig gelagert, nicht hoch aufgewirbelt.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Borghese, Park Villa Borghese und ein Essnachmittag",
          morning: [
            {
              poiSlug: "galleria-borghese",
              text: "Nutzen Sie Ihr vorgebuchtes, zeitlich festgelegtes Zwei-Stunden-Fenster der Galleria Borghese und kommen Sie 15 Minuten früher für die obligatorische Taschenkontrolle. Berninis Skulpturen und der Caravaggio-Raum sind das Highlight jeder römischen Kunstroute, und zwei Stunden genügen wirklich für die kompakte Villa.",
              durationMin: 120,
            },
            {
              poiSlug: "villa-borghese",
              text: "Treten Sie hinaus in den umliegenden Park Villa Borghese, kostenlos und grün, und gehen Sie zur Terrasse Pincio am Westrand. Der Blick über die Piazza del Popolo und die Dächer bis zum Petersdom ist einer der besten der Stadt, und kostenlos.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "jewish-ghetto-food",
              text: "Widmen Sie den Nachmittag dem Essen: entweder das jüdische Ghetto für carciofi alla giudia und baccalà mit einem Gebäck von Boccione oder nehmen Sie die Metro nach Testaccio für seine Markthalle und die altmodischen Innereien-Trattorien. Bei beiden geht es um das Essen, nicht um die Sehenswürdigkeiten.",
              durationMin: 120,
            },
            {
              text: "Laufen Sie es ab mit einer langsamen Runde durch Trastevere in der goldenen Stunde, wenn sich die Gassen am besten fotografieren lassen und die Tagesbesucher gegangen sind. Ein Gelato oder ein früher Aperitivo überbrückt Sie zum Abendessen.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Buchen Sie ein Abschiedsessen in Trastevere und geben Sie bei Ihrem letzten römischen Mahl in einer Trattoria, die Sie zuvor ausgekundschaftet haben, etwas mehr aus. Cacio e pepe, Carbonara oder Saltimbocca, dies ist das Mahl, bei dem Sie klassisch werden sollten.",
              durationMin: 120,
            },
            {
              text: "Enden Sie mit einem Schlummertrunk auf der Piazza di Santa Maria oder in einer ruhigen Gassenbar, einen kurzen Fußweg von Ihrem Bett. Keine Heimreise zu planen, was der ganze Sinn ist, hier für vier Tage die Basis zu haben.",
              durationMin: 45,
            },
          ],
        },
      ],
    },
  ],
};

export default romeDe;
