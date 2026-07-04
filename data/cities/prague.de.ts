import type { CityData } from "../types";

const pragueDe: CityData = {
  city: {
    slug: "prague",
    name: "Prag",
    country: "Tschechien",
    countrySlug: "czech-republic",
    lat: 50.0755,
    lng: 14.4378,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "PRG",
    airportToCenter:
      "Bus 119 bis Nadrazi Veleslavin, dann Metrolinie A ins Zentrum, insgesamt etwa 45 Minuten für rund 2 EUR. Der AE-Expressbus fährt direkt zum Hauptbahnhof, falls Sie lieber ohne Umsteigen reisen.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10, 12],
    avoidMonths: [7, 8],
    monthlyNotes: {
      1: "Kalt, mit Höchstwerten um 2C und häufig grauem Himmel, aber der Weihnachtsmarkt auf dem Altstädter Ring läuft bis zum 6. Januar. Danach fallen die Hotelpreise auf ihren Jahrestiefstand, und die wichtigsten Sehenswürdigkeiten sind nahezu ohne Wartezeit zu besichtigen.",
      2: "Nachts noch frostig, und die Stadt bleibt ruhig, deshalb ist dies der günstigste volle Monat für einen Besuch. Kneipeninterieurs und Museen tragen das Programm; packen Sie für Tiefstwerte unter null ein.",
      3: "Die Tage klettern Richtung 9C, und die Ostermärkte auf dem Altstädter Ring öffnen in der zweiten Monatshälfte. Der Andrang ist noch moderat, und die Preise liegen unter dem Frühlingshoch.",
      4: "Richtiger Frühling: rund 14C, Blüten in den Parks Petrin und Letna sowie die ersten Öffnungen von Flussbooten und Biergärten. An den Wochenenden rund um Ostern wird es voll, buchen Sie den Burgrundgang also im Voraus.",
      5: "Einer der besten Monate, mit Höchstwerten nahe 19C und dem Musikfestival Prager Frühling von Mitte Mai bis Anfang Juni. Buchen Sie Ihre Unterkunft früh; die Mai-Wochenenden sind ausgebucht, und die Preise erreichen das Niveau der Nebensaison-Spitze.",
      6: "Warm bei rund 22C mit langen Tagen und Biergärten in Letna und Riegrovy Sady in vollem Betrieb. Der Andrang wächst im Monatsverlauf, bleibt aber unter dem Juli-Gedränge.",
      7: "Hochsaison: Tage mit 25C, eine ab 9 Uhr überfüllte Karlsbrücke und die höchsten Zimmerpreise des Sommers. Wenn es jetzt sein muss, erledigen Sie die großen Sehenswürdigkeiten vor 8 Uhr und heben Sie sich die Nachmittage für Parks und den Fluss auf.",
      8: "Dieselbe Hitze und derselbe Andrang wie im Juli, mit gelegentlichen Gewittern. Das Flussufer Naplavka und die Badestellen auf den Inseln fangen die Hitze gut ab, aber rechnen Sie den ganzen Tag mit Schlangen an der Burg.",
      9: "Höchstwerte um 20C, nach der ersten Woche dünner werdender Andrang und das Festival Dvorak Prag für Klassikfans. Die Preise geben nach; dies ist die kluge Alternative zum Sommer.",
      10: "Frische Tage mit 13C und kräftige Herbstfarben in Petrin, Letna und Vysehrad. Die Besucherzahlen sinken nach Monatsmitte spürbar, und die Hotelpreise ziehen nach.",
      11: "Grau und kalt mit Höchstwerten um 7C, die ruhigste Phase des Jahres, bis Ende November die Weihnachtsmärkte auf dem Altstädter Ring öffnen. Ende November ist ein Geheimtipp: Marktatmosphäre ohne die Dichte des Dezembers.",
      12: "Die Weihnachtsmärkte auf dem Altstädter Ring und dem Wenzelsplatz laufen von Ende November bis zum 6. Januar und ziehen große Menschenmengen an, besonders an Wochenenden. Rechnen Sie mit Tiefstwerten unter dem Gefrierpunkt, Glühwein an jeder Ecke und Dezember-Hotelpreisen deutlich über dem Winterniveau.",
    },
    climate: {
      1: { highC: 2, lowC: -3, rainyDays: 11 },
      2: { highC: 4, lowC: -2, rainyDays: 9 },
      3: { highC: 9, lowC: 1, rainyDays: 10 },
      4: { highC: 14, lowC: 4, rainyDays: 9 },
      5: { highC: 19, lowC: 8, rainyDays: 11 },
      6: { highC: 22, lowC: 11, rainyDays: 12 },
      7: { highC: 25, lowC: 13, rainyDays: 11 },
      8: { highC: 25, lowC: 13, rainyDays: 10 },
      9: { highC: 20, lowC: 9, rainyDays: 8 },
      10: { highC: 13, lowC: 5, rainyDays: 9 },
      11: { highC: 7, lowC: 1, rainyDays: 10 },
      12: { highC: 3, lowC: -2, rainyDays: 11 },
    },
    budgetLevel: "low",
    budgetPerDay: { budget: 55, mid: 110, high: 220 },
    tagline: "Gotische Skyline, Weltklasse-Bier, Kleinstadtpreise.",
    heroIntro:
      "Prag packt eine Burg, eine mittelalterliche Brücke und eine vollständig erhaltene Altstadt in ein Zentrum, das Sie zu Fuß in einer halben Stunde durchqueren. Es ist eine der günstigsten klassischen Hauptstädte Europas, und allein die Bierkultur rechtfertigt die Reise. Drei Tage decken das Wesentliche ohne Hektik ab; der Trick besteht darin, die großen Sehenswürdigkeiten um die Wellen der Reisegruppen herum zu timen.",
    accent: { from: "#8B7CF6", to: "#E85D75", ink: "#3B2E7E" },
    neighborhoodSlugs: [
      "stare-mesto",
      "mala-strana",
      "vinohrady",
      "zizkov",
      "karlin",
    ],
    nearbyCitySlugs: ["vienna", "budapest"],
  },

  neighborhoods: [
    {
      slug: "stare-mesto",
      citySlug: "prague",
      name: "Stare Mesto (Old Town)",
      lat: 50.0875,
      lng: 14.421,
      bestFor: ["first-time", "romantic"],
      vibe: "Der mittelalterliche Kern rund um den Altstädter Ring, ganz Kopfsteinpflaster, Türme und Gassen, die in Innenhöfen enden. Tagsüber ist es der meistbesuchte Quadratkilometer des Landes; nach 22 Uhr verschwinden die Reisegruppen, und es wird schnell ruhig. Alles, was Erstbesucher wollen, liegt in zehn Gehminuten Entfernung.",
      pros: [
        "Karlsbrücke, Altstädter Ring und Josefov alle in kurzer Gehweite",
        "Größte Auswahl an Hotels und Apartments der Stadt",
        "Für einen 2-Tage-Trip sind keinerlei Verkehrsmittel nötig",
      ],
      cons: [
        "Die Restaurants an den Hauptplätzen sind überteuerte Touristenfallen",
        "Straßenlärm und Junggesellenabschiede in den Wochenendnächten",
        "Sie zahlen einen Lageaufschlag von 20 bis 30 Prozent gegenüber Vinohrady",
      ],
    },
    {
      slug: "mala-strana",
      citySlug: "prague",
      name: "Mala Strana",
      lat: 50.0878,
      lng: 14.4046,
      bestFor: ["romantic", "first-time", "family"],
      vibe: "Das Barockviertel unterhalb der Burg, am Westufer der Moldau. Rote Dächer, Botschaftsgärten und Gassen, die sich am späten Nachmittag komplett leeren, sobald die Tagesausflügler abziehen. Wer hier wohnt, wacht auf der Burgseite auf, und das ist ein echter Zeitvorteil.",
      pros: [
        "Prager Burg, Petrin-Hügel und Lennon-Mauer direkt vor der Tür",
        "Die Abende sind ruhig und wirklich stimmungsvoll",
        "Karlsbrücke vor dem Frühstück, ganz ohne Andrang",
      ],
      cons: [
        "Weniger Supermärkte und günstige Lokale als am Ostufer",
        "Steile Straßen und Kopfsteinpflaster sind mit Gepäck oder Kinderwagen mühsam",
      ],
    },
    {
      slug: "vinohrady",
      citySlug: "prague",
      name: "Vinohrady",
      lat: 50.0755,
      lng: 14.4443,
      bestFor: ["local", "budget", "family", "romantic"],
      vibe: "Ein Wohnraster aus Jugendstil-Wohnblöcken, grünen Plätzen und der höchsten Cafédichte Prags. Hier leben tatsächlich die Einheimischen, die die Wahl haben, und die Restaurantszene spiegelt das wider. Die Altstadt ist 10 Minuten mit der Metro oder 25 Minuten zu Fuß entfernt.",
      pros: [
        "Das beste Essen und der beste Specialty Coffee der Stadt zu lokalen Preisen",
        "Der Biergarten Riegrovy Sady und zwei große Parks",
        "Spürbar günstigere Unterkünfte als im Zentrum",
      ],
      cons: [
        "Sie pendeln zu jeder großen Sehenswürdigkeit, auch wenn der Weg kurz ist",
        "Nachts ruhig, falls Sie Nachtleben direkt vor der Tür suchen",
      ],
    },
    {
      slug: "zizkov",
      citySlug: "prague",
      name: "Zizkov",
      lat: 50.0833,
      lng: 14.4515,
      bestFor: ["nightlife", "budget", "local"],
      vibe: "Prags raues Kneipenviertel, das bekanntlich mehr Kneipen pro Kopf beansprucht als jeder andere Ort in Europa. Es ist ungeschliffener als das benachbarte Vinohrady, mit billigem Bier, Kellerbars und dem futuristischen Fernsehturm, der über allem aufragt. Es gentrifiziert Block für Block, bleibt aber die günstigste halbwegs zentrale Basis.",
      pros: [
        "Die niedrigsten Zimmer- und Bierpreise in Zentrumsnähe",
        "Echte Kneipenkultur, fast ohne Touristenaufschlag",
        "Der Vitkov-Hügel bietet einen riesigen kostenlosen Blick über die Altstadt",
      ],
      cons: [
        "Manche Blocks wirken vernachlässigt und stark mit Graffiti übersät",
        "20 bis 30 Minuten zu Fuß oder mit der Tram zu den wichtigsten Sehenswürdigkeiten",
        "Barlärm an den Hauptstraßen am Wochenende",
      ],
    },
    {
      slug: "karlin",
      citySlug: "prague",
      name: "Karlin",
      lat: 50.0925,
      lng: 14.4505,
      bestFor: ["local", "family", "budget"],
      vibe: "Ein flaches Viertel am Fluss, nach dem Hochwasser von 2002 zu Prags poliertestem modernen Quartier umgebaut. Breite Boulevards, sanierte Blöcke aus dem 19. Jahrhundert und eine starke Brunch- und Craft-Beer-Szene, die sich an Anwohner richtet, nicht an Touristen. Zwei Metrostationen von der Altstadt entfernt.",
      pros: [
        "Flache, kinderwagenfreundliche Straßen und Uferwege",
        "Ausgezeichnete moderne tschechische Restaurants zu fairen Preisen",
        "Schnelle Verbindung ins Zentrum mit der Metrolinie B",
      ],
      cons: [
        "Keine großen Sehenswürdigkeiten im Viertel selbst",
        "Das Nachtleben ist gedämpft; die Bars schließen für Prager Verhältnisse früh",
      ],
    },
  ],

  pois: [
    {
      slug: "charles-bridge",
      citySlug: "prague",
      name: "Karlsbrücke",
      lat: 50.0865,
      lng: 14.4114,
      kind: "sight",
      needsBooking: false,
      tip: "Gehen Sie vor 8 Uhr oder nach 22 Uhr über die Brücke; zwischen 10 und 18 Uhr steht man Schulter an Schulter. Ignorieren Sie die Karikaturisten in der Brückenmitte und meiden Sie die Wechselstuben an beiden Enden, die einige der schlechtesten Kurse der Stadt bieten.",
    },
    {
      slug: "prague-castle",
      citySlug: "prague",
      name: "Prager Burg",
      lat: 50.09,
      lng: 14.4005,
      kind: "sight",
      needsBooking: true,
      tip: "Kaufen Sie das Basis-Rundgangsticket online und gehen Sie hinein, sobald die Tore um 9 Uhr öffnen; ab 10 Uhr strömen die Reisegruppen herein. Die Innenhöfe und Gassenblicke sind kostenlos; wenn Sie nur das Panorama wollen, laufen Sie ohne Ticket hindurch und investieren Sie das Geld stattdessen in das Terrassencafé des Palais Lobkowicz.",
    },
    {
      slug: "st-vitus-cathedral",
      citySlug: "prague",
      name: "Veitsdom",
      lat: 50.0909,
      lng: 14.4005,
      kind: "sight",
      needsBooking: true,
      tip: "Der Eintritt ist im Burgrundgangsticket enthalten; der kostenlose Stehbereich direkt hinter der Tür zeigt Ihnen fast nichts, zahlen Sie also für das komplette Kirchenschiff. Gehen Sie direkt zum Mucha-Glasfenster in der dritten Kapelle links, bevor sich der Gang füllt.",
    },
    {
      slug: "old-town-square",
      citySlug: "prague",
      name: "Altstädter Ring und Astronomische Uhr",
      lat: 50.0875,
      lng: 14.4213,
      kind: "sight",
      needsBooking: false,
      tip: "Das Uhrenspiel dauert 45 Sekunden und enttäuscht von der überfüllten Straße aus; sehen Sie es sich einmal zu einer Randzeit wie 9 Uhr an und zahlen Sie stattdessen für den Aufstieg auf den Altstädter Rathausturm, der den besten Blick über den Platz bietet. Essen oder Geld wechseln sollten Sie direkt auf dem Platz niemals.",
    },
    {
      slug: "josefov",
      citySlug: "prague",
      name: "Jüdisches Viertel (Josefov)",
      lat: 50.09,
      lng: 14.418,
      kind: "museum",
      needsBooking: true,
      tip: "Ein einziges Ticket des Jüdischen Museums deckt die Synagogen und den Alten Jüdischen Friedhof ab; kaufen Sie es online und beginnen Sie in der Pinkas-Synagoge pünktlich zur Öffnung um 9 Uhr, da sich der Friedhofsweg dahinter bis zum späten Vormittag staut. Samstags ist alles geschlossen, planen Sie also um den Schabbat herum.",
    },
    {
      slug: "petrin-hill",
      citySlug: "prague",
      name: "Petrin-Hügel und Aussichtsturm",
      lat: 50.0833,
      lng: 14.395,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Die Standseilbahn ab Ujezd fährt mit einem normalen Nahverkehrsticket, aber die Warteschlange dauert oft länger als der 25-minütige Aufstieg durch die Obstgärten, prüfen Sie sie also, bevor Sie sich festlegen. Die 299 Stufen des Turms schlagen die Burgtürme bei Skyline-Fotos, weil die Prager Burg selbst mit im Bild ist.",
    },
    {
      slug: "letna-park",
      citySlug: "prague",
      name: "Biergarten im Letna-Park",
      lat: 50.0955,
      lng: 14.416,
      kind: "park",
      needsBooking: false,
      tip: "Kommen Sie eine Stunde vor Sonnenuntergang, holen Sie sich am Kiosk ein Bier für etwa 60 CZK und nehmen Sie eine Bank am Südrand für den klassischen Blick über die Moldaubrücken. Barzahlung ist willkommen, geöffnet ist etwa von April bis Oktober; im Winter funktioniert der Aussichtspunkt weiterhin, der Bierstand nicht.",
    },
    {
      slug: "vysehrad",
      citySlug: "prague",
      name: "Festung Vysehrad",
      lat: 50.0645,
      lng: 14.418,
      kind: "sight",
      needsBooking: false,
      tip: "Das Gelände, die Wälle und der Friedhof, auf dem Dvorak und Mucha begraben liegen, sind alle kostenlos; nur die kleine Kasemattenführung kostet Eintritt. Nehmen Sie die Metrolinie C bis Vysehrad, gehen Sie die Wälle gegen den Uhrzeigersinn für die Flussblicke ab und verlassen Sie das Gelände bergab durch die kubistischen Häuser Richtung Naplavka.",
    },
    {
      slug: "wenceslas-square",
      citySlug: "prague",
      name: "Wenzelsplatz",
      lat: 50.081,
      lng: 14.428,
      kind: "sight",
      needsBooking: false,
      tip: "Betrachten Sie ihn als 20-minütigen Durchgang für die Geschichte von 1989 und die Fassade des Nationalmuseums, nicht als Ziel. Hier lauern die zwei klassischen Abzocken: Nutzen Sie niemals die Straßenwechselstuben und winken Sie niemals ein Taxi vom Platz heran; bestellen Sie stattdessen ein Bolt oder Uber.",
    },
    {
      slug: "klementinum",
      citySlug: "prague",
      name: "Barockbibliothek im Klementinum",
      lat: 50.0863,
      lng: 14.4165,
      kind: "museum",
      needsBooking: true,
      tip: "Der Zugang ist nur mit Führung möglich, etwa alle 30 Minuten, und an gut besuchten Tagen sind die Plätze ausverkauft, buchen Sie also online eine Vormittagsführung. Den barocken Bibliothekssaal sehen Sie nur von der Tür aus und dürfen den Raum selbst nicht betreten; die eigentliche Belohnung ist die Galerie des Astronomischen Turms am Ende.",
    },
    {
      slug: "lennon-wall",
      citySlug: "prague",
      name: "Lennon-Mauer",
      lat: 50.0863,
      lng: 14.4069,
      kind: "sight",
      needsBooking: false,
      tip: "Es ist ein Fünf-Minuten-Stopp, der ständig neu bemalt wird, machen Sie also keinen Umweg nur dafür; bauen Sie ihn in einen Spaziergang durch Mala Strana zwischen Karlsbrücke und Kampa-Insel ein. Vor 9 Uhr können Sie die Mauer ohne eine einzige Person im Bild fotografieren.",
    },
    {
      slug: "lokal-dlouha",
      citySlug: "prague",
      name: "Lokal Dlouha",
      lat: 50.0899,
      lng: 14.4257,
      kind: "food",
      needsBooking: false,
      tip: "Dies ist die Referenz für tankfrisches Pilsner Urquell und ehrliche tschechische Klassiker wie Svickova zu fairen Preisen. Reservierungen sind möglich, und ab 19 Uhr ist es voll; ohne Reservierung haben Sie an der Bar oder vor 18 Uhr die besten Chancen, und beachten Sie, dass Ihre Biere auf einem Zettel gestrichelt werden, den Sie am Ende bezahlen.",
    },
    {
      slug: "strahov-library",
      citySlug: "prague",
      name: "Bibliothek des Klosters Strahov",
      lat: 50.0862,
      lng: 14.3893,
      kind: "museum",
      needsBooking: true,
      tip: "Wie im Klementinum sehen Sie den Theologischen und den Philosophischen Saal nur von den Türen aus, planen Sie also 30 bis 40 Minuten ein und kaufen Sie die Fotoerlaubnis, wenn Sie Bilder machen möchten. Kombinieren Sie den Besuch mit der kostenlosen Terrasse unterhalb des Klosters, einem der besten Aussichtspunkte auf Burg und Stadt in Prag, und gehen Sie anschließend bergab zur Burg.",
    },
    {
      slug: "naplavka",
      citySlug: "prague",
      name: "Flussufer Naplavka",
      lat: 50.071,
      lng: 14.414,
      kind: "experience",
      needsBooking: false,
      tip: "Am Samstagvormittag findet hier von 8 bis 14 Uhr der beste Bauernmarkt der Stadt statt; an Sommerabenden verwandelt sich die Uferpromenade in eine Open-Air-Barszene mit umgebauten Bootskneipen. Kommen Sie an warmen Freitagen vor 18 Uhr, sonst suchen Sie lange nach einem Platz auf der Mauer.",
    },
  ],

  itineraries: [
    {
      citySlug: "prague",
      days: 2,
      summary:
        "Zwei Tage reichen für Prags wichtigste Sehenswürdigkeiten, wenn Sie zentral wohnen und früh starten, aber die lokale Seite der Stadt bleibt dabei unberührt. Das Zentrum ist kompakt: Karlsbrücke, Altstädter Ring und das Burgviertel liegen keine 25 Gehminuten auseinander, sodass ein straffer Plan alle drei plus das Jüdische Viertel ohne Verkehrsmittel abdeckt. Wohnen Sie in Stare Mesto, damit beide Morgen zu Fuß beginnen. Die Struktur, die funktioniert, lautet ein Tag pro Flussufer: Tag eins für den Altstadtkern und Josefov, Tag zwei für den Burgberg, Strahov und Mala Strana. Buchen Sie den Burgrundgang und die Tickets für das Jüdische Museum online vor der Anreise, denn Warteschlangen sind die einzige echte Gefahr für einen 48-Stunden-Besuch. Was Sie opfern, sind Vysehrad, die Cafészene von Vinohrady und jeder gemütliche Abend im Biergarten, und genau das kauft Ihnen ein dritter Tag. Die Preise sind nach westeuropäischen Maßstäben niedrig, essen Sie also gut; bleiben Sie nur den Hauptplätzen fern.",
      stayNeighborhoodSlug: "stare-mesto",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Altstadtkern und das Jüdische Viertel",
          morning: [
            {
              poiSlug: "old-town-square",
              text: "Starten Sie gegen 8:30 Uhr auf dem Altstädter Ring, solange es noch ruhig ist, sehen Sie sich um 9 Uhr das Spiel der Astronomischen Uhr an und steigen Sie dann auf den Altstädter Rathausturm für den Blick über die Dächer, bevor die ersten Reisegruppen eintreffen.",
              durationMin: 75,
            },
            {
              poiSlug: "josefov",
              text: "Gehen Sie fünf Minuten nach Norden nach Josefov und arbeiten Sie sich durch den Rundgang des Jüdischen Museums, beginnend mit der Pinkas-Synagoge, danach der Alte Jüdische Friedhof und die Spanische Synagoge. Kaufen Sie das Kombiticket am Vorabend online.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "lokal-dlouha",
              text: "Mittagessen im Lokal Dlouha mit Svickova oder gebackenem Käse und einem frisch aus dem Tank gezapften Pilsner Urquell. Kommen Sie vor dem Ansturm um 13 Uhr oder rechnen Sie mit einer kurzen Wartezeit.",
              durationMin: 75,
            },
            {
              poiSlug: "klementinum",
              text: "Nehmen Sie am Nachmittag an einer gebuchten Führung durch das Klementinum teil, um den barocken Bibliothekssaal zu sehen und den Astronomischen Turm für einen Blick über die Altstadtdächer zu besteigen.",
              durationMin: 60,
            },
            {
              text: "Schlendern Sie durch die Gassen zwischen Klementinum und Pulverturm: Celetna, der Ungelt-Hof und die Arkaden rund um das Ständetheater. Keine Tickets, kein Plan, das ist die beste kostenlose Stunde in der Altstadt.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "wenceslas-square",
              text: "Überqueren Sie in der Dämmerung den Wenzelsplatz für die Fassade des Nationalmuseums und das Denkmal von 1989, als Durchgang statt als Station. Bestellen Sie ein Bolt, falls Sie später eine Fahrt brauchen; winken Sie hier niemals ein Taxi heran.",
              durationMin: 30,
            },
            {
              poiSlug: "charles-bridge",
              text: "Beenden Sie den Tag nach 21 Uhr auf der Karlsbrücke, wenn sich die Menge lichtet und die Burg angestrahlt wird. Das ist das Foto, für das Sie gekommen sind, und um diese Uhrzeit können Sie tatsächlich stehen bleiben, um es zu machen.",
              durationMin: 45,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Burgberg und Mala Strana",
          morning: [
            {
              poiSlug: "prague-castle",
              text: "Stehen Sie zur Öffnung um 9 Uhr mit einem vorab gebuchten Rundgangsticket an den Toren der Prager Burg und erledigen Sie das Goldene Gässchen und den Alten Königspalast vor dem Gruppenansturm um 10 Uhr.",
              durationMin: 120,
            },
            {
              poiSlug: "st-vitus-cathedral",
              text: "Gönnen Sie dem Veitsdom innerhalb des Areals einen vollen Besuch mit dem kostenpflichtigen Zugang zum Kirchenschiff und suchen Sie das Mucha-Glasfenster in der dritten Kapelle links.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "strahov-library",
              text: "Gehen Sie 15 Minuten bergauf zur Bibliothek des Klosters Strahov für die beiden Barocksäle und genießen Sie dann den kostenlosen Terrassenblick unterhalb des Klosters, der die Burg und das gesamte Ostufer einrahmt.",
              durationMin: 75,
            },
            {
              poiSlug: "petrin-hill",
              text: "Steigen Sie durch die Obstgärten des Petrin hinab und erklimmen Sie, wenn die Beine mitspielen, die 299 Stufen des Aussichtsturms für den einen Skyline-Blick, der die Burg selbst einschließt.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "lennon-wall",
              text: "Gehen Sie durch Mala Strana hinunter, vorbei an der Lennon-Mauer und über die Kampa-Insel, während die Tagesausflügler abziehen. In dieser Stunde zeigt sich das Viertel von seiner besten Seite.",
              durationMin: 45,
            },
            {
              text: "Abendessen in Mala Strana in einem traditionellen Kellerrestaurant abseits der Nerudova-Straße, weit weg von den Touristenmenüs nahe der Brücke. Hauptgerichte mit Bier sollten 300 bis 450 CZK pro Person kosten, nicht das Doppelte.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
    {
      citySlug: "prague",
      days: 3,
      summary:
        "Drei Tage sind die richtige Zeitspanne für Prag: genug für jede große Sehenswürdigkeit in menschlichem Tempo, plus ein Abend, der der Stadt gehört statt der Checkliste. Zwei Tage zwingen Sie, Burg und Altstadt direkt hintereinander zu sprinten; der dritte Tag ergänzt Vysehrad, den Biergarten in Letna und Zeit, in einer Kneipe zu sitzen, ohne auf die Uhr zu schauen. Wohnen Sie in Mala Strana, auf der Burgseite des Flusses. Es kostet etwas mehr als die östlichen Viertel, aber Sie wachen neben den Sehenswürdigkeiten auf, zu denen alle anderen pendeln, und das Viertel wird nach 18 Uhr ruhig und wunderschön. Die Form des Plans: Tag eins für die Altstadt und Josefov, Tag zwei für die Burg, Strahov und Petrin, Tag drei für Vysehrad, das Flussufer und Letna. Buchen Sie drei Dinge online vor der Anreise: den Burgrundgang, das Ticket für das Jüdische Museum und einen Führungstermin im Klementinum. Alles andere in Prag belohnt frühes Erscheinen statt Aufpreis.",
      stayNeighborhoodSlug: "mala-strana",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Altstadt und das Jüdische Viertel",
          morning: [
            {
              poiSlug: "charles-bridge",
              text: "Überqueren Sie von Ihrer Basis in Mala Strana aus die Karlsbrücke vor 8 Uhr, wenn sie fast leer ist; das ist der beste Timing-Trick in ganz Prag und kostet nichts.",
              durationMin: 30,
            },
            {
              poiSlug: "old-town-square",
              text: "Gehen Sie weiter zum Altstädter Ring für die Astronomische Uhr und den Aufstieg auf den Altstädter Rathausturm, erledigt vor 10 Uhr, um der Flut zuvorzukommen.",
              durationMin: 75,
            },
            {
              poiSlug: "josefov",
              text: "Verbringen Sie den späten Vormittag in Josefov auf dem Rundgang des Jüdischen Museums: zuerst die Pinkas-Synagoge, dann der Alte Jüdische Friedhof, bevor sich der Weg verstopft, mit Abschluss in der Spanischen Synagoge.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "lokal-dlouha",
              text: "Mittagessen im Lokal Dlouha für das maßgebliche Tank-Pilsner und einen Teller Svickova. Behalten Sie Ihren Bierzettel, Sie begleichen ihn am Ende.",
              durationMin: 75,
            },
            {
              poiSlug: "klementinum",
              text: "Nehmen Sie an Ihrer vorab gebuchten Klementinum-Führung für die Barockbibliothek und den Blick vom Astronomischen Turm teil und bummeln Sie danach durch die Gassen Richtung Ungelt-Hof.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "wenceslas-square",
              text: "Gehen Sie den Wenzelsplatz in ganzer Länge ab für das Nationalmuseum und das Denkmal der Samtenen Revolution. Meiden Sie die Wechselstuben und Straßentaxis ohne Ausnahme.",
              durationMin: 30,
            },
            {
              text: "Überqueren Sie den Fluss zurück zum Abendessen in Mala Strana; in den Straßen hinter der Kampa-Insel verstecken sich ruhige Restaurants, in denen ein komplettes tschechisches Abendessen mit Bier unter 500 CZK bleibt.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Burg, Strahov und Petrin",
          morning: [
            {
              poiSlug: "prague-castle",
              text: "Gehen Sie von Mala Strana bergauf und betreten Sie die Prager Burg pünktlich um 9 Uhr mit Ihrem Online-Rundgangsticket, um das Goldene Gässchen und den Alten Königspalast vor den Gruppen abzuhaken.",
              durationMin: 120,
            },
            {
              poiSlug: "st-vitus-cathedral",
              text: "Besuchen Sie den Veitsdom mit dem vollen kostenpflichtigen Eintritt und steuern Sie direkt das Mucha-Fenster an, bevor sich das Kirchenschiff füllt.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "strahov-library",
              text: "Mittagessen in einer Klosterbrauerei nahe Strahov, dann besuchen Sie den Theologischen und den Philosophischen Saal der Strahov-Bibliothek und nehmen den kostenlosen Aussichtspunkt auf der Terrasse darunter mit.",
              durationMin: 120,
            },
            {
              poiSlug: "petrin-hill",
              text: "Wandern Sie über den Kamm zum Petrin-Hügel durch die Obstgärten und besteigen Sie den Aussichtsturm, falls die Schlange an der Standseilbahn unten lang aussieht; der Turmblick schlägt jeden Burgturm, weil die Burg mit im Bild ist.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "lennon-wall",
              text: "Steigen Sie zur Lennon-Mauer und zur Kampa-Insel hinab für den Spaziergang zur goldenen Stunde, wenn sich Mala Strana leert.",
              durationMin: 45,
            },
            {
              text: "Essen Sie in einer Kneipe mit Garten in Mala Strana zu Abend und gehen Sie dann zum Flussufer gegenüber dem Nationaltheater, um die angestrahlte Burg im Spiegel der Moldau zu sehen.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Vysehrad, der Fluss und Letna",
          morning: [
            {
              poiSlug: "vysehrad",
              text: "Nehmen Sie die Metrolinie C bis Vysehrad und gehen Sie die Festungswälle gegen den Uhrzeigersinn für die Flussblicke ab, besuchen Sie dann den Friedhof, auf dem Dvorak und Mucha begraben liegen. Das Gelände ist kostenlos.",
              durationMin: 120,
            },
            {
              text: "Verlassen Sie Vysehrad bergab vorbei an den kubistischen Häusern am Rasinovo nabrezi, ein fünfminütiger Architekturumweg, den fast niemand macht.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "naplavka",
              text: "Folgen Sie dem Fluss nach Norden entlang der Naplavka; samstags läuft der Bauernmarkt bis 14 Uhr, an anderen Tagen eignen sich die Bootscafés für ein langsames Mittagessen am Wasser.",
              durationMin: 105,
            },
            {
              text: "Fahren Sie mit der Tram oder gehen Sie zu Fuß auf die Altstadtseite und wählen Sie ein Museum, das Sie ausgelassen haben: das Kunstgewerbemuseum oder das Alfons-Mucha-Museum passen beide in 90 Minuten.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "letna-park",
              text: "Steigen Sie eine Stunde vor Sonnenuntergang zum Biergarten im Letna-Park hinauf, kaufen Sie am Kiosk ein Bier für 60 CZK und nehmen Sie eine Bank über den Brücken. Das ist der beste günstige Abend in Prag.",
              durationMin: 120,
            },
            {
              text: "Beenden Sie den Tag mit einem Abendessen im nahen Holesovice oder zurück über die Brücke in der Altstadt, je nachdem, wie lange Sie der Sonnenuntergang festhält.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
    {
      citySlug: "prague",
      days: 4,
      summary:
        "Vier Tage sind mehr als genug für Prags Sehenswürdigkeiten, und genau darum geht es: Der vierte Tag verwandelt einen Monumente-Sprint in eine echte Reise. Die Tage eins bis drei decken die Altstadt, Josefov, das Burgviertel und Vysehrad in entspanntem Tempo ab; Tag vier gehört Ihnen, entweder für einen lokalen Tag in den Vierteln oder für einen Tagesausflug zur Knochenkapelle und Kathedrale von Kutna Hora, eine Zugstunde entfernt. Bei so viel Zeit lassen Sie das Zentrum aus und wohnen in Vinohrady. Es liegt 10 Metro-Minuten vom Altstädter Ring entfernt, ist bei vergleichbaren Zimmern 20 bis 30 Prozent günstiger, und seine Cafés und Biergärten sind der Grund, warum es den vierten Tag überhaupt gibt. Die Logik ein Flussufer pro Tag gilt weiterhin: Halten Sie Burg, Strahov und Petrin zusammen, halten Sie Altstadt und Josefov zusammen, und pendeln Sie nicht im Zickzack über die Moldau. Buchen Sie den Burgrundgang, das Jüdische Museum und das Klementinum vorab. Wenn Sie zwischen drei und vier Tagen schwanken: Der vierte ist der, an den Sie sich erinnern werden.",
      stayNeighborhoodSlug: "vinohrady",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Altstadt und das Jüdische Viertel",
          morning: [
            {
              poiSlug: "old-town-square",
              text: "Fahren Sie mit der Metro von Vinohrady nach Mustek und stehen Sie um 8:30 Uhr auf dem Altstädter Ring für die Astronomische Uhr und den Altstädter Rathausturm, bevor die Gruppen ankommen.",
              durationMin: 90,
            },
            {
              poiSlug: "josefov",
              text: "Absolvieren Sie den Rundgang des Jüdischen Museums in Josefov, beginnend in der Pinkas-Synagoge zur Öffnung, danach der Alte Jüdische Friedhof und die Spanische Synagoge mit Ihrem vorab gebuchten Ticket.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "lokal-dlouha",
              text: "Mittagessen im Lokal Dlouha: Pilsner Urquell aus dem Tank und tschechische Klassiker zu ehrlichen Preisen, fünf Minuten von Josefov entfernt.",
              durationMin: 75,
            },
            {
              poiSlug: "klementinum",
              text: "Nehmen Sie an einer gebuchten Klementinum-Führung für den barocken Bibliothekssaal und das Panorama vom Astronomischen Turm über die Altstadt teil.",
              durationMin: 60,
            },
            {
              text: "Verbringen Sie den Rest des Nachmittags in den Gassen: Ungelt-Hof, Celetna-Straße und Pulverturm, alles kostenlos und am besten ohne Route.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "charles-bridge",
              text: "Betreten Sie die Karlsbrücke nach 21 Uhr für den Blick auf die angestrahlte Burg, wenn die Tagesmassen verschwunden sind.",
              durationMin: 45,
            },
            {
              text: "Fahren Sie mit der Metro zurück nach Vinohrady und nehmen Sie einen Absacker in einer Weinbar rund um den Namesti Miru; das Viertel schenkt mährische Weine aus, die Sie im Zentrum nicht finden.",
              durationMin: 60,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Burg, Strahov und Petrin",
          morning: [
            {
              poiSlug: "prague-castle",
              text: "Die Tram 22 fährt von Vinohrady direkt ins Burgviertel; betreten Sie die Prager Burg um 9 Uhr mit Ihrem Online-Ticket und erledigen Sie das Goldene Gässchen und den Alten Königspalast früh.",
              durationMin: 120,
            },
            {
              poiSlug: "st-vitus-cathedral",
              text: "Besuchen Sie den Veitsdom mit dem vollen Ticket für das Kirchenschiff und suchen Sie das Mucha-Glasfenster, bevor sich die Gänge füllen.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "strahov-library",
              text: "Gehen Sie hinauf zur Bibliothek des Klosters Strahov für die beiden Barocksäle und verweilen Sie dann auf der kostenlosen Terrasse darunter für den maßgeblichen Blick auf Burg und Stadt.",
              durationMin: 90,
            },
            {
              poiSlug: "petrin-hill",
              text: "Durchqueren Sie die Obstgärten zum Petrin-Hügel und besteigen Sie den Aussichtsturm, oder fahren Sie mit der Standseilbahn hinunter nach Ujezd, wenn der Tag lang war.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "lennon-wall",
              text: "Spazieren Sie in der Dämmerung durch Mala Strana über die Lennon-Mauer und die Kampa-Insel, die beste Stunde des Viertels.",
              durationMin: 45,
            },
            {
              text: "Bleiben Sie zum Abendessen in einem Kellerrestaurant in Mala Strana und drehen Sie dann eine letzte Runde an der angestrahlten St.-Nikolaus-Kirche vorbei, bevor die Tram Sie nach Hause bringt.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Vysehrad, der Fluss und Letna",
          morning: [
            {
              poiSlug: "vysehrad",
              text: "Fahren Sie mit der Metro nach Vysehrad und gehen Sie die kostenlosen Festungswälle ab für das beste Flusspanorama der Stadt, plus den Friedhof mit den Gräbern von Dvorak und Mucha.",
              durationMin: 120,
            },
            {
              text: "Steigen Sie an den kubistischen Häusern vorbei zum Flussufer hinab; der Umweg kostet zehn Minuten und schenkt Ihnen ein Stück Architektur, das es nur in Prag gibt.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "naplavka",
              text: "Folgen Sie der Naplavka nach Norden am Wasser entlang; samstags gibt es den Bauernmarkt bis 14 Uhr, an anderen Tagen übernehmen die vertäuten Bootscafés ein langes Mittagessen.",
              durationMin: 105,
            },
            {
              poiSlug: "wenceslas-square",
              text: "Schneiden Sie landeinwärts durch die Neustadt zum Wenzelsplatz für die Fassade des Nationalmuseums und das Denkmal von 1989, ein 30-minütiger Durchgang, und stöbern Sie danach durch die Passagen der Lucerna mit ihrer umgedrehten Pferdestatue.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "letna-park",
              text: "Beenden Sie den Tag im Biergarten im Letna-Park über dem Fluss: Biere für 60 CZK, Platanen und der Sonnenuntergangsblick über alle Brücken auf einmal.",
              durationMin: 120,
            },
            {
              text: "Abendessen in Holesovice unterhalb des Parks oder zurück in Vinohrady, beides eine kurze Tramfahrt entfernt.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Lokaler Vinohrady-Tag oder Tagesausflug nach Kutna Hora",
          morning: [
            {
              text: "Option A: Schlafen Sie aus und machen Sie dann eine Café-Tour durch Vinohrady rund um den Namesti Miru und den Platz Jiriho z Podebrad, wo an den meisten Wochentagvormittagen der Bauernmarkt stattfindet. Option B: Nehmen Sie den Direktzug vom Hauptbahnhof nach Kutna Hora, etwa eine Stunde, zur Knochenkapelle des Beinhauses von Sedlec; kaufen Sie das Kombiticket für Beinhaus und Kathedrale im Infozentrum, um die Schlange vor Ort zu umgehen.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              text: "Option A geht weiter mit dem Park Riegrovy Sady und einem gemütlichen Mittagessen in einem Bistro in Vinohrady, danach ein Bummel entlang der Jugendstilfassaden des Viertels in der Manesova-Straße. Option B: Gehen Sie von Sedlec zu Fuß in die Altstadt von Kutna Hora zur St.-Barbara-Kathedrale und den mittelalterlichen Silberbergbau-Gassen, bevor am späten Nachmittag der Zug zurückfährt.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              text: "So oder so, beenden Sie den Tag im Biergarten Riegrovy Sady in Vinohrady, dem lokalen Gegenstück zu Letna, mit einer Wiese, die bei Sonnenuntergang auf die Silhouette der Burg blickt.",
              durationMin: 120,
            },
            {
              text: "Letztes Abendessen in einem modernen tschechischen Restaurant in Vinohrady oder Karlin; beide Viertel servieren raffinierte Varianten von Ente und Knödeln zum halben Altstadtpreis.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
  ],
};

export default pragueDe;
