import type { CityData } from "../types";

const budapestDe: CityData = {
  city: {
    slug: "budapest",
    name: "Budapest",
    country: "Ungarn",
    countrySlug: "hungary",
    lat: 47.4979,
    lng: 19.0402,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "BUD",
    airportToCenter:
      "Der Flughafen-Express-Bus 100E fährt direkt zum Deak Ferenc ter im Zentrum, etwa 40 Minuten für rund 2,20 EUR (2200 HUF). Kaufen Sie das eigene 100E-Ticket am Automaten an der Haltestelle; ein normales Einzelticket gilt auf dieser Linie nicht.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [8],
    monthlyNotes: {
      1: "Kalt und oft grau mit Höchstwerten um 2C und Tiefstwerten unter dem Gefrierpunkt, aber die Thermalbäder sind am zauberhaftesten, wenn der Dampf von den Außenbecken aufsteigt. Die Hotelpreise liegen auf ihrem Jahrestief, und die großen Sehenswürdigkeiten sind fast leer, sobald die Weihnachtsmärkte am 1. Januar schließen.",
      2: "Noch frostig, ruhig und günstig, der letzte volle Monat, bevor die Frühlingspreise zurückkehren. Das Szechenyi- und das Gellert-Bad sind die naheliegende Zuflucht; packen Sie für Tiefstwerte um minus 2C und kurze Tage.",
      3: "Die Tage klettern Richtung 12C, und die ersten Frühlings-Weinveranstaltungen tauchen in den Weinbars und Kellern auf. Der Andrang bleibt den größten Teil des Monats gering, und die Zimmer sind spürbar günstiger als ab April.",
      4: "Richtiger Frühling bei rund 17C, Blüten auf der Margareteninsel und die ersten Terrassen der Flussboote und Ruinenkneipen öffnen wieder. Das Osterwochenende wird voll, buchen Sie also die Parlamentsführung im Voraus, falls Ihre Daten damit zusammenfallen.",
      5: "Einer der beiden besten Monate, mit Höchstwerten nahe 22C, langem Licht und vollen Terrassen entlang der Donau. Die Preise erreichen die Höchstwerte der Nebensaison, und die Stadt füllt sich zum Pfingstwochenende, buchen Sie die Zimmer also früh.",
      6: "Warm bei etwa 26C, mit langen Abenden und den Wein- und Craft-Beer-Terrassen in vollem Gange. Der Andrang wächst stetig, bleibt aber unter dem Augusthöhepunkt; gehen Sie, bevor die echte Hitze kommt.",
      7: "Heiß bei rund 29C und lebhaft, wobei die Freibäder und die Donaubrise für Abkühlung sorgen. Erledigen Sie die sonnenexponierten Sehenswürdigkeiten wie den Gellertberg und die Fischerbastei früh, dann ziehen Sie sich nachmittags in ein schattiges Bad oder auf eine Terrasse zurück.",
      8: "Der Monat, den man meiden sollte: 29C Spitzenhitze, der höchste Andrang des Jahres und das Sziget-Festival, das Mitte August auf der Obuda-Insel landet und die Stadt mit 400.000 Besuchern flutet und die Zimmerpreise nach oben treibt. Wenn Sie jetzt kommen, buchen Sie weit im Voraus und planen Sie Nachmittage drinnen oder am Fluss.",
      9: "Einer der besten Monate, mit Höchstwerten um 24C, nach der ersten Woche dünner werdendem Andrang und Weinveranstaltungen zur Traubenlese in den Kellern. Die Preise geben nach; das ist die kluge Alternative zum Sommer.",
      10: "Klare 17C-Tage und kräftige Herbstfarben auf dem Gellertberg und der Margareteninsel. Die Besucherzahlen sinken nach Monatsmitte und die Hotelpreise folgen, während sich die Bäder besonders gut anfühlen, wenn die Luft abkühlt.",
      11: "Grau und kalt mit Höchstwerten um 8C, die ruhigste Zeit des Jahres, bis die Weihnachtsmärkte Ende November am Vorosmarty ter und an der St.-Stephans-Basilika öffnen. Ende November ist ein Sweet Spot: volle Marktatmosphäre ohne das Dezembergedränge.",
      12: "Die Weihnachtsmärkte am Vorosmarty ter und vor der St.-Stephans-Basilika laufen von Ende November bis Anfang Januar und ziehen am Wochenende starken Andrang an, wobei der Platz vor der Basilika eine Lichtshow und eine Eisbahn hinzufügt. Rechnen Sie mit Tiefstwerten unter dem Gefrierpunkt, Glühwein überall und Dezemberpreisen deutlich über dem Winternormalmaß.",
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
    tagline: "Thermalbäder, prächtige Boulevards, Ruinenkneipen, niedrige Preise.",
    heroIntro:
      "Budapest teilt sich an der Donau in das hügelige Buda mit seiner Burg und die flache, prächtige Pester Seite, wo sich das meiste Leben abspielt. Es ist eine der günstigsten klassischen Hauptstädte Europas, und die Thermalbäder, Ruinenkneipen und das Parlamentsufer geben ihm eine Mischung, die keine andere Stadt erreicht. Drei Tage decken das Wesentliche in humanem Tempo ab; der Trick ist, die sonnenexponierten Aussichtspunkte früh zu legen und die Bäder für den Moment aufzusparen, in dem die Beine nachgeben.",
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
      vibe: "Das Herz von Pest am Fluss, das das Parlament, die St.-Stephans-Basilika und die Fußgänger-Einkaufsstraße Vaci utca umschließt. Es ist das gepflegteste und zentralste Viertel, zu Fuß fast überall auf der Pester Seite erreichbar und eine Brücke von der Budaer Burg entfernt. Tagsüber geschäftig und etwas förmlich, beruhigt es sich, nachdem die Läden schließen.",
      pros: [
        "Parlament, Basilika und Kettenbrücke alle in kurzer Gehweite",
        "Größte Hotelauswahl und einfacher Metro-Zugang auf allen drei Linien",
        "Kein Nahverkehr nötig für einen 2-Tage-Trip",
      ],
      cons: [
        "Die Restaurants entlang der Vaci utca sind überteuerte Touristenfallen",
        "Am wenigsten lokales Gefühl von allen zentralen Vierteln",
        "Die Zimmerpreise liegen 20-30 Prozent über den äußeren Bezirken",
      ],
    },
    {
      slug: "jewish-quarter",
      citySlug: "budapest",
      name: "Jewish Quarter (Erzsebetvaros, District VII)",
      lat: 47.4979,
      lng: 19.0662,
      bestFor: ["nightlife", "local", "budget"],
      vibe: "Das alte jüdische Viertel, zum Nachtleben-Motor geworden, Heimat der Synagoge in der Dohany-Straße und der Ruinenkneipen in verfallenden Innenhöfen. Tagsüber ist es Street Art, Third-Wave-Kaffee und koschere Bäckereien; nach Einbruch der Dunkelheit ist es die dichteste Barszene der Stadt. Zentral, günstig und auf die richtige Art laut.",
      pros: [
        "Szimpla Kert und die ganze Ruinenkneipen-Szene vor Ihrer Tür",
        "Bestes lockeres Essen und Kaffee der Stadt zu lokalen Preisen",
        "Zehn Gehminuten zur Basilika und zum Fluss",
      ],
      cons: [
        "Barlärm auf den Hauptstraßen bis in die frühen Morgenstunden am Wochenende",
        "Manche Blocks sind schäbig und mitten in der Sanierung",
        "Nicht das Viertel für einen frühen Feierabend oder einen ruhigen Aufenthalt",
      ],
    },
    {
      slug: "castle-district",
      citySlug: "budapest",
      name: "Castle District (Var, District I)",
      lat: 47.4967,
      lng: 19.0347,
      bestFor: ["romantic", "first-time"],
      vibe: "Die gepflasterte Hügelkuppe auf der Budaer Seite mit der Budaer Burg, der Matthiaskirche und der Fischerbastei. Sie leert sich völlig, sobald die Tagesausflügler am späten Nachmittag gehen, und die Abendblicke über Pest sind die besten der Stadt. Hier zu übernachten heißt, die Sehenswürdigkeiten auf der Burgseite gehören Ihnen, bevor die Menge kommt.",
      pros: [
        "Budaer Burg, Matthiaskirche und Fischerbastei zu Fuß",
        "Ruhige, wahrhaft stimmungsvolle Abende, nachdem die Menge gegangen ist",
        "Das schönste Sonnenuntergangs-Panorama über die Donau und das Parlament",
      ],
      cons: [
        "Steile gepflasterte Straßen sind mühsam mit Gepäck oder Kinderwagen",
        "Wenige Supermärkte und begrenztes lockeres Essen oben auf dem Hügel",
        "Sie überqueren den Fluss für das meiste Nachtleben und den Alltagsbedarf",
      ],
    },
    {
      slug: "ujlipotvaros",
      citySlug: "budapest",
      name: "Ujlipotvaros (District XIII)",
      lat: 47.5147,
      lng: 19.0509,
      bestFor: ["local", "family", "romantic"],
      vibe: "Ein grünes Wohnraster gleich nördlich des Parlaments, lauter Bauhaus-Wohnblocks, baumbestandene Straßen und Nachbarschaftsbistros. Hier leben tatsächlich Einheimische mit Optionen, und die Essens- und Cafészene spiegelt das wider. Das Zentrum ist einen 15-Minuten-Gang oder zwei Tramstationen entfernt, und die Margareteninsel liegt vor der Tür.",
      pros: [
        "Bestes lokales Essen und Cafés zu ehrlichen, nicht-touristischen Preisen",
        "Ruhige, flache, kinderwagenfreundliche Straßen und die Uferpromenade",
        "Margareteninsel und Parlament beide in kurzer Gehweite",
      ],
      cons: [
        "Sie gehen oder fahren mit der Tram zu den meisten großen Sehenswürdigkeiten, auch wenn es kurz ist",
        "Abends ruhig, wenn Sie Nachtleben vor der Tür wollen",
      ],
    },
    {
      slug: "jozsefvaros",
      citySlug: "budapest",
      name: "Jozsefvaros (District VIII)",
      lat: 47.4889,
      lng: 19.0708,
      bestFor: ["budget", "local"],
      vibe: "Ein großer, gemischter Bezirk hinter dem Großen Boulevard, an den Rändern rau, aber rund um das Museumsviertel und das Corvin-Viertel rasch aufgewertet. Er beherbergt das Ungarische Nationalmuseum und einige der günstigsten halbwegs zentralen Zimmer der Stadt. Block für Block uneinheitlich, aber schnell besser werdend und gut angebunden.",
      pros: [
        "Niedrigste Zimmerpreise in Gehweite des Zentrums",
        "Ungarisches Nationalmuseum und die prächtigen Fassaden des Palastviertels",
        "Starke Metro- und Tramverbindungen durch den ganzen Bezirk",
      ],
      cons: [
        "Manche Blocks zum äußeren Rand hin wirken noch vernachlässigt",
        "Weniger Sehenswürdigkeiten als die Uferbezirke",
        "Die Straßenqualität schwankt stark von einem Block zum nächsten",
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
      tip: "Gehen Sie sie in der Dämmerung, wenn die Löwen und die ganze Spannweite erleuchtet werden und die Burg dahinter glüht; das Pester Ende beim Roosevelt ter bietet das beste Foto zurück Richtung Buda. Sie ist kostenlos und rund um die Uhr geöffnet, überqueren Sie sie also spät, wenn der Fußgängerverkehr des Tages abgeflaut ist.",
    },
    {
      slug: "hungarian-parliament",
      citySlug: "budapest",
      name: "Hungarian Parliament",
      lat: 47.5072,
      lng: 19.0456,
      kind: "sight",
      needsBooking: true,
      tip: "Das Innere ist nur mit Führung zugänglich, und die englischsprachigen Zeitfenster sind in der Saison Tage im Voraus ausgebucht, kaufen Sie also online lange vor Ihrer Ankunft, statt auf den Ticketschalter zu setzen. Wählen Sie ein frühes Zeitfenster und fotografieren Sie das Äußere vom Batthyany-ter-Ufer auf der Budaer Seite für die volle Uferfassade.",
    },
    {
      slug: "buda-castle",
      citySlug: "budapest",
      name: "Buda Castle",
      lat: 47.496,
      lng: 19.0397,
      kind: "sight",
      needsBooking: false,
      tip: "Die Höfe, Wälle und Terrassen sind kostenlos und den ganzen Tag geöffnet, Sie zahlen also nur, wenn Sie die Nationalgalerie oder das Historische Museum darin betreten. Sparen Sie sich die Schlange an der Standseilbahn von der Kettenbrücke und gehen Sie stattdessen die Gartentreppe des Varkert Bazar hinauf oder nehmen Sie den Bus 16, beides schneller und günstiger.",
    },
    {
      slug: "fishermans-bastion",
      citySlug: "budapest",
      name: "Fishermans Bastion",
      lat: 47.5025,
      lng: 19.0347,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Die unteren Terrassen sind kostenlos, und die kleinen oberen Türme kosten nur tagsüber eine Gebühr, kommen Sie also vor 9 Uhr, dann gehen Sie die obere Ebene kostenlos mit dem Parlamentsblick für sich allein. Das ist das Postkartenpanorama von Budapest; Sonnenaufgang und später Abend sind die beiden Fenster ohne Menschenmenge.",
    },
    {
      slug: "matthias-church",
      citySlug: "budapest",
      name: "Matthias Church",
      lat: 47.5019,
      lng: 19.0343,
      kind: "sight",
      needsBooking: true,
      tip: "Das bunte Ziegeldach ist der Anziehungspunkt, und Sie können es von außen kostenlos bewundern, aber das Innere mit seinen bemalten Wänden braucht ein Ticket, kaufen Sie also online, um die kleine Schlange zu umgehen. Sie steht direkt neben der Fischerbastei, verbinden Sie also beide und machen Sie sie zur Öffnung, bevor die Reisegruppen kommen.",
    },
    {
      slug: "st-stephens-basilica",
      citySlug: "budapest",
      name: "St Stephen's Basilica",
      lat: 47.5008,
      lng: 19.054,
      kind: "sight",
      needsBooking: false,
      tip: "Der Eintritt in das Kirchenschiff bittet nur um eine empfohlene Spende, aber die Panorama-Kuppelterrasse kostet eine kleine Gebühr und ist es wert, erreichbar per Aufzug plus kurzem Treppenaufstieg. Gehen Sie in der letzten Stunde vor Schließung hinauf für weicheres Licht über den Pester Dächern und weniger Menschen oben.",
    },
    {
      slug: "szechenyi-baths",
      citySlug: "budapest",
      name: "Szechenyi Thermal Baths",
      lat: 47.5186,
      lng: 19.0817,
      kind: "experience",
      needsBooking: true,
      tip: "Es ist an Wochentagen günstiger als am Wochenende, und der Online-Kauf mit einer Kabine (nicht nur einem Spind) erspart die Eintrittsschlange und gibt Ihnen einen privaten Ort zum Umziehen. Bringen Sie Ihr eigenes Handtuch und Ihre Badeschlappen mit, um die Leihgebühren zu vermeiden, und gehen Sie früh morgens oder nach 17 Uhr, um dem Mittagsgedränge in den Außenbecken zu entgehen.",
    },
    {
      slug: "gellert-hill",
      citySlug: "budapest",
      name: "Gellert Hill & Citadella Viewpoint",
      lat: 47.4869,
      lng: 19.0447,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Der Aufstieg vom Budaer Ende der Elisabethbrücke dauert etwa 25 Minuten und belohnt Sie mit dem weitesten Panorama über beide Ufer und der Freiheitsstatue. Gehen Sie morgens für Fotos von Pest ohne Gegenlicht, tragen Sie im Sommer Wasser bei sich, da der Weg voll sonnenexponiert ist, und der Aussichtspunkt selbst ist kostenlos.",
    },
    {
      slug: "central-market-hall",
      citySlug: "budapest",
      name: "Central Market Hall",
      lat: 47.4869,
      lng: 19.0586,
      kind: "food",
      needsBooking: false,
      tip: "Kommen Sie vor Mittag für Gemüse und Paprika zu den Preisen im Erdgeschoss; die Essensstände oben sind teurer und auf Touristen ausgerichtet, essen Sie also Langos an einem kleineren lokalen Ort. Sie schließt am Samstagnachmittag früh und bleibt sonntags zu, legen Sie also Ihren Besuch entsprechend und zahlen Sie mit Karte, da nicht jeder Stand sie nimmt.",
    },
    {
      slug: "dohany-street-synagogue",
      citySlug: "budapest",
      name: "Dohany Street Synagogue",
      lat: 47.4956,
      lng: 19.0608,
      kind: "sight",
      needsBooking: true,
      tip: "Dies ist die größte Synagoge Europas, und der Eintritt umfasst den Gedenkgarten und das Museum, aber die Tickets sind an Zeitfenster gebunden und in der Saison mittags ausverkauft, buchen Sie also ein frühes Online-Zeitfenster. Sie schließt samstags zum Schabbat und an jüdischen Feiertagen, prüfen Sie also das Datum, und kleiden Sie sich mit bedeckten Schultern.",
    },
    {
      slug: "szimpla-kert",
      citySlug: "budapest",
      name: "Szimpla Kert (Ruin Bar)",
      lat: 47.4977,
      lng: 19.0637,
      kind: "experience",
      needsBooking: false,
      tip: "Die ursprüngliche Ruinenkneipe sieht man am besten vor 20 Uhr, wenn man die Schrott-Kunst-Innenhöfe ohne das nächtliche Gedränge und die Eintrittsgebühr wirklich in sich aufnehmen kann. An Sonntagvormittagen verwandelt sie sich in einen Bauernmarkt mit einer ganz anderen, ruhigen Atmosphäre, was der Weg der Einheimischen ist, sie zu besuchen.",
    },
    {
      slug: "shoes-on-the-danube",
      citySlug: "budapest",
      name: "Shoes on the Danube Memorial",
      lat: 47.5041,
      lng: 19.0447,
      kind: "sight",
      needsBooking: false,
      tip: "Die sechzig eisernen Schuhe am Ufer erinnern an Juden, die 1944 in den Fluss geschossen wurden, und es braucht nur zehn stille Minuten, sollte aber nicht gehetzt werden. Es liegt an der Pester Promenade zwischen der Kettenbrücke und dem Parlament, bauen Sie es also in diesen Uferspaziergang ein, statt eine eigene Fahrt zu machen.",
    },
    {
      slug: "vaci-street",
      citySlug: "budapest",
      name: "Vaci Street",
      lat: 47.4934,
      lng: 19.0537,
      kind: "sight",
      needsBooking: false,
      tip: "Behandeln Sie sie als 15-minütigen Durchgang, nicht als Ort zum Essen oder Einkaufen; die Cafés hier verlangen das Doppelte, und die Wechselstuben darauf geben einige der schlechtesten Kurse der Stadt. Die Währung ist der Forint, nicht der Euro, zahlen Sie also in HUF, nutzen Sie einen Geldautomaten einer echten Bank und ignorieren Sie die Wechselschalter auf der Straße völlig.",
    },
    {
      slug: "margaret-island",
      citySlug: "budapest",
      name: "Margaret Island",
      lat: 47.5266,
      lng: 19.0475,
      kind: "park",
      needsBooking: false,
      tip: "Dieser autofreie Inselpark mitten in der Donau ist kostenlos und am besten zu Fuß oder mit einem Leihrad zu erkunden, mit einem Springbrunnen mit Musik nahe dem südlichen Ende, der zur vollen Stunde läuft. Kommen Sie am späten Nachmittag, gehen Sie von der Tramhaltestelle Margaretenbrücke, und erwischen Sie im Sommer die abendliche Lichtshow des Brunnens, wenn Sie bis nach der Dämmerung bleiben.",
    },
  ],

  itineraries: [
    {
      citySlug: "budapest",
      days: 2,
      summary:
        "Zwei Tage reichen für Budapests Hauptsehenswürdigkeiten, wenn Sie zentral bleiben und früh starten, aber Sie kratzen nur an der lokalen Seite und den Bädern. Der Kern teilt sich sauber am Fluss: Das Pester Ufer hält das Parlament, die Basilika, das jüdische Viertel und die Markthalle, während der Budaer Hügel die Burg, die Matthiaskirche und die Fischerbastei hält, alle eine Brücke voneinander entfernt. Nehmen Sie Ihre Basis in Belvaros, damit beide Morgen zu Fuß beginnen. Die Struktur, die funktioniert, ist ein Tag pro Ufer: Tag eins für Pest und das jüdische Viertel, Tag zwei für den Budaer Burghügel und Gellert. Buchen Sie die Parlamentsführung und die Synagoge in der Dohany-Straße online vor Ihrer Ankunft, denn Zeitfenstertickets sind die einzige echte Bedrohung für einen 48-Stunden-Besuch. Was Sie opfern, ist eine richtige Thermalbad-Sitzung, die Margareteninsel und jeder gemächliche Ruinenkneipen-Abend, was genau das ist, was ein dritter Tag kauft. Die Preise sind nach westeuropäischem Maßstab niedrig, essen Sie also gut; bleiben Sie nur von der Vaci utca fern und zahlen Sie in Forint, nicht in Euro.",
      stayNeighborhoodSlug: "belvaros",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Pester Ufer und das jüdische Viertel",
          morning: [
            {
              poiSlug: "hungarian-parliament",
              text: "Beginnen Sie am ungarischen Parlament mit einer vorab gebuchten frühen englischen Führung durch das Innere und die Kronjuwelen. Kommen Sie 15 Minuten früher am Besucherzentrum an, um die Sicherheitskontrolle zu passieren.",
              durationMin: 90,
            },
            {
              poiSlug: "shoes-on-the-danube",
              text: "Gehen Sie am Pester Ufer nach Süden zum Mahnmal Shoes on the Danube, ein stiller Zehn-Minuten-Stopp, dann weiter entlang der Promenade zur Kettenbrücke.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "st-stephens-basilica",
              text: "Biegen Sie landeinwärts zur St.-Stephans-Basilika ab, sehen Sie das Kirchenschiff, dann nehmen Sie den Aufzug und den kurzen Aufstieg zur Kuppelterrasse für das weite Pester Panorama.",
              durationMin: 75,
            },
            {
              poiSlug: "dohany-street-synagogue",
              text: "Weiter zur Synagoge in der Dohany-Straße für einen Zeitfensterbesuch der größten Synagoge Europas und ihres Gedenkgartens. Buchen Sie das Zeitfenster online am Vorabend, um dem mittäglichen Ausverkauf zu entgehen.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "szimpla-kert",
              text: "Schlendern Sie ins jüdische Viertel und sehen Sie Szimpla Kert vor 20 Uhr, solange Sie die Schrott-Kunst-Innenhöfe noch aufnehmen können, dann ziehen Sie von Bar zu Bar durch die umliegenden Straßen.",
              durationMin: 60,
            },
            {
              text: "Abendessen in Erzsebetvaros abseits der Touristenmeilen: die Seitenstraßen rund um die Kazinczy utca bieten modernes Ungarisch und Streetfood, wo eine volle Mahlzeit mit einem Getränk deutlich unter 6000 HUF bleibt.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Budaer Burghügel und Gellert",
          morning: [
            {
              poiSlug: "fishermans-bastion",
              text: "Überqueren Sie die Kettenbrücke und steigen Sie vor 9 Uhr zur Fischerbastei hinauf, wenn die oberen Türme kostenlos sind und der Parlamentsblick über den Fluss Ihnen allein gehört.",
              durationMin: 60,
            },
            {
              poiSlug: "matthias-church",
              text: "Treten Sie nebenan in die Matthiaskirche für das bemalte Innere mit Ihrem Ticket, dann durchstreifen Sie die ruhigen Gassen des Burgviertels, bevor die Reisegruppen kommen.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "buda-castle",
              text: "Gehen Sie die kostenlosen Höfe, Terrassen und Wälle der Budaer Burg für die langen Flussblicke, und betreten Sie die Nationalgalerie nur, wenn Sie die Kunst wollen. Mittagessen in einem Café oben auf dem Hügel.",
              durationMin: 120,
            },
            {
              poiSlug: "gellert-hill",
              text: "Steigen Sie hinab und den Gellertberg zum Aussichtspunkt Citadella hinauf für das weiteste Panorama über beide Ufer und die Freiheitsstatue. Tragen Sie Wasser bei sich; der Weg ist voll sonnenexponiert.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "szechenyi-chain-bridge",
              text: "Kommen Sie zum Fluss hinab und überqueren Sie die Kettenbrücke in der Dämmerung, wenn die Löwen und die ganze Spannweite erleuchtet werden und die Burg hinter Ihnen glüht.",
              durationMin: 45,
            },
            {
              text: "Schließen Sie mit dem Abendessen zurück in Belvaros in einer Seitenstraße abseits der Vaci utca ab, nicht auf ihr, wo ein ungarischer Klassiker wie Gulasch oder Paprikahuhn mit einem Glas lokalen Weins die Rechnung ehrlich hält.",
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
        "Drei Tage sind die richtige Zeitspanne für Budapest: genug für beide Flussufer in humanem Tempo, plus einen langen Nachmittag in einem Thermalbad, der aus einer Sightseeing-Reise eine echte Auszeit macht. Zwei Tage zwingen Sie, Pest und den Burghügel im Sprint hintereinander abzuarbeiten und die Bäder ganz auszulassen; der dritte Tag fügt Szechenyi, die Margareteninsel und Zeit hinzu, um in einer Ruinenkneipe zu sitzen, ohne auf die Uhr zu schauen. Bleiben Sie im jüdischen Viertel, zentral und günstig, mit dem besten lockeren Essen und dem Nachtleben vor der Tür. Die Form des Plans: Tag eins für das Pester Ufer und das jüdische Viertel, Tag zwei für den Budaer Burghügel und Gellert, Tag drei für die Bäder, den Markt und die Insel. Buchen Sie zwei Dinge online vor der Ankunft: die Parlamentsführung und das Zeitfenster für die Synagoge in der Dohany-Straße. Alles andere in Budapest belohnt frühes Erscheinen mehr als Aufpreise, und das Zahlen in Forint mehr als in Euro.",
      stayNeighborhoodSlug: "jewish-quarter",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Pester Ufer und die Basilika",
          morning: [
            {
              poiSlug: "hungarian-parliament",
              text: "Nehmen Sie von Ihrer Basis im jüdischen Viertel die Metro zum Parlament für Ihre vorab gebuchte frühe Führung durch das Innere und die Kronjuwelen. Seien Sie 15 Minuten früher da für die Sicherheitskontrolle.",
              durationMin: 90,
            },
            {
              poiSlug: "shoes-on-the-danube",
              text: "Gehen Sie am Pester Ufer nach Süden zum Mahnmal Shoes on the Danube, dann weiter entlang der Promenade Richtung Kettenbrücke.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "st-stephens-basilica",
              text: "Gehen Sie landeinwärts zur St.-Stephans-Basilika für das Kirchenschiff und das Kuppelterrassen-Panorama über die Pester Dächer.",
              durationMin: 75,
            },
            {
              poiSlug: "szechenyi-chain-bridge",
              text: "Überqueren Sie die Kettenbrücke zu Fuß für den klassischen Blick hinauf zur Budaer Burg, dann gehen Sie zurück für einen Kaffee beim Roosevelt ter.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "szimpla-kert",
              text: "Zurück im jüdischen Viertel sehen Sie Szimpla Kert vor der späten Menge, dann arbeiten Sie sich durch die Ruinenkneipen und Craft-Beer-Lokale rund um die Kazinczy utca.",
              durationMin: 90,
            },
            {
              text: "Abendessen in einer Seitenstraße von Erzsebetvaros: Langos, moderne ungarische kleine Teller oder ein Bistro, alles einen kurzen Weg von Ihrem Bett und leicht fürs Budget.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Budaer Burghügel und Gellert",
          morning: [
            {
              poiSlug: "fishermans-bastion",
              text: "Wechseln Sie nach Buda und steigen Sie vor 9 Uhr zur Fischerbastei hinauf für die kostenlosen oberen Türme und das Parlamentspanorama ohne die Menge.",
              durationMin: 60,
            },
            {
              poiSlug: "matthias-church",
              text: "Besuchen Sie nebenan die Matthiaskirche für das bemalte Innere und das gekachelte Dach, dann gehen Sie die ruhigen Gassen des Burgviertels zur Öffnung.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "buda-castle",
              text: "Erkunden Sie die kostenlosen Höfe und Terrassen der Budaer Burg für die langen Flussblicke und essen Sie auf dem Hügel zu Mittag, tauchen Sie nur in die Nationalgalerie ein, wenn die Kunst reizt.",
              durationMin: 120,
            },
            {
              poiSlug: "gellert-hill",
              text: "Gehen Sie den Kamm nach Süden und steigen Sie den Gellertberg zum Aussichtspunkt Citadella hinauf für das weiteste Panorama über beide Ufer. Bringen Sie in warmen Monaten Wasser mit.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "dohany-street-synagogue",
              text: "Wechseln Sie zurück nach Pest und machen Sie an einem Nicht-Samstag einen späten Nachmittags-Zeitfensterbesuch der Synagoge in der Dohany-Straße und ihres Gedenkgartens mit Ihrem Online-Ticket.",
              durationMin: 75,
            },
            {
              text: "Abendessen nahe dem Großen Boulevard, dann ein gemächlicher Absacker in einer Weinbar im jüdischen Viertel, die ungarische Rotweine ausschenkt, die Sie zu Hause nicht finden.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Bäder, der Markt und die Margareteninsel",
          morning: [
            {
              poiSlug: "central-market-hall",
              text: "Beginnen Sie vor Mittag in der Markthalle für Paprika, Gemüse und die Stände im Erdgeschoss, und essen Sie Langos hier oder in der Nähe statt an den teureren Ständen oben.",
              durationMin: 75,
            },
            {
              poiSlug: "vaci-street",
              text: "Gehen Sie die ganze Vaci utca zurück Richtung Zentrum als 15-minütigen Bummel, ignorieren Sie die Wechselstuben, dann durchstöbern Sie die Straßen rund um den Vorosmarty ter.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "szechenyi-baths",
              text: "Nehmen Sie die Metro zum Stadtwäldchen und verbringen Sie den Nachmittag im Szechenyi-Thermalbad. Buchen Sie online mit einer Kabine, bringen Sie Ihr eigenes Handtuch und Ihre Badeschlappen mit, und gehen Sie, nachdem der Mittagshöhepunkt abklingt.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              poiSlug: "margaret-island",
              text: "Kühlen Sie sich auf dem Rückweg auf der Margareteninsel ab, gehen Sie von der Tramhaltestelle Margaretenbrücke und erwischen Sie den Springbrunnen mit Musik zur vollen Stunde nahe dem südlichen Ende.",
              durationMin: 90,
            },
            {
              text: "Letztes Abendessen im jüdischen Viertel oder drüben in Ujlipotvaros, beide eine kurze Tramfahrt entfernt und voller ehrlicher Nachbarschaftsküchen.",
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
        "Vier Tage sind mehr als genug für Budapests Sehenswürdigkeiten, und das ist der Punkt: Der vierte Tag verwandelt einen Monumente-Sprint in eine echte Reise. Tag eins bis drei decken das Pester Ufer, den Budaer Burghügel und das jüdische Viertel in entspanntem Tempo ab; Tag vier ist ein langsamer, gebaut um eine lange Thermalbad-Sitzung, die Margareteninsel und das Stadtwäldchen, ohne Hetze und ohne Ticketschlange. Mit so viel Zeit lassen Sie das engste Zentrum aus und bleiben in Ujlipotvaros. Es ist ein 15-Minuten-Gang oder zwei Tramstationen vom Parlament entfernt, günstiger für gleichwertige Zimmer, und seine Bistros und die Promenade der Margareteninsel sind der Grund, warum der vierte Tag existiert. Die Ein-Ufer-pro-Tag-Logik gilt weiterhin: Halten Sie die Burg, die Matthiaskirche und Gellert zusammen auf der Budaer Seite, halten Sie das Parlament, die Basilika und das jüdische Viertel zusammen auf der Pester Seite, und zickzacken Sie nicht über die Donau. Buchen Sie die Parlamentsführung und die Synagoge in der Dohany-Straße vorab. Wenn Sie zwischen drei und vier Tagen wählen, ist der vierte entspannte Tag der, an den Sie sich erinnern werden.",
      stayNeighborhoodSlug: "ujlipotvaros",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Pester Ufer und die Basilika",
          morning: [
            {
              poiSlug: "hungarian-parliament",
              text: "Gehen oder fahren Sie mit der Tram von Ujlipotvaros hinunter zum Parlament für Ihre vorab gebuchte frühe Führung durch das Innere und die Kronjuwelen, und kommen Sie früher für die Sicherheitskontrolle an.",
              durationMin: 90,
            },
            {
              poiSlug: "shoes-on-the-danube",
              text: "Folgen Sie dem Pester Ufer nach Süden zum Mahnmal Shoes on the Danube, dann gehen Sie die Promenade weiter zur Kettenbrücke.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "st-stephens-basilica",
              text: "Wenden Sie sich landeinwärts zur St.-Stephans-Basilika für das Kirchenschiff und den Kuppelterrassen-Blick über Pest, mit Mittagessen auf dem café-gesäumten Platz davor.",
              durationMin: 90,
            },
            {
              poiSlug: "szechenyi-chain-bridge",
              text: "Überqueren Sie die Kettenbrücke zu Fuß für den Blick hinauf zur Burg, dann durchstreifen Sie das Ufer und den Roosevelt ter, bevor Sie zurückgehen.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "szimpla-kert",
              text: "Gehen Sie ins jüdische Viertel für Szimpla Kert vor dem Gedränge, dann eine Runde durch die Ruinenkneipen rund um die Kazinczy utca.",
              durationMin: 90,
            },
            {
              text: "Abendessen in Erzsebetvaros, dann mit der Tram zurück hinauf nach Ujlipotvaros für einen ruhigen Absacker in einer der Nachbarschafts-Weinbars.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Budaer Burghügel und Gellert",
          morning: [
            {
              poiSlug: "fishermans-bastion",
              text: "Überqueren Sie den Fluss und steigen Sie vor 9 Uhr zur Fischerbastei hinauf für die kostenlosen oberen Türme und das Parlamentspanorama ohne Menschenmenge.",
              durationMin: 60,
            },
            {
              poiSlug: "matthias-church",
              text: "Besuchen Sie nebenan die Matthiaskirche für das gekachelte Dach und das bemalte Innere, dann durchstreifen Sie die Gassen des Burgviertels, solange sie noch leer sind.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "buda-castle",
              text: "Gehen Sie die kostenlosen Terrassen und Wälle der Budaer Burg für die langen Flussblicke und essen Sie auf dem Hügel zu Mittag, betreten Sie die Nationalgalerie nur, wenn Sie die Kunst wollen.",
              durationMin: 120,
            },
            {
              poiSlug: "gellert-hill",
              text: "Nehmen Sie den Kamm nach Süden und steigen Sie den Gellertberg zum Aussichtspunkt Citadella hinauf für den weitesten Blick über beide Ufer und die Freiheitsstatue.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "szechenyi-chain-bridge",
              text: "Steigen Sie hinab und überqueren Sie die Kettenbrücke in der Dämmerung für die erleuchtete Spannweite und die Burg, die hinter Ihnen glüht.",
              durationMin: 45,
            },
            {
              text: "Abendessen zurück auf der Pester Seite, dann ein gemächlicher Spaziergang am beleuchteten Ufer, bevor die Tram nach Hause nach Ujlipotvaros geht.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Jüdisches Viertel, der Markt und Vaci",
          morning: [
            {
              poiSlug: "dohany-street-synagogue",
              text: "Beginnen Sie an einem Nicht-Samstag an der Synagoge in der Dohany-Straße mit Ihrem vorab gebuchten Vormittags-Zeitfenster und nehmen Sie den Gedenkgarten und das Museum in sich auf.",
              durationMin: 90,
            },
            {
              text: "Gehen Sie durch die Street Art und Innenhöfe des jüdischen Viertels und halten Sie für Kaffee und ein Gebäck aus der koscheren Bäckerei rund um die Kazinczy utca, bevor der Tag heiß wird.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "central-market-hall",
              text: "Gehen Sie vor dem frühen Samstagsschluss zur Markthalle für Paprika und Gemüse unten, und essen Sie Langos an einem kleineren lokalen Ort statt an den Touristenständen oben.",
              durationMin: 90,
            },
            {
              poiSlug: "vaci-street",
              text: "Bummeln Sie die Vaci utca zurück zum Vorosmarty ter als 15-minütigen Durchgang, lassen Sie die Wechselstuben aus, dann durchstöbern Sie die Boutiquen in den ruhigeren Parallelstraßen.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Kehren Sie nach Ujlipotvaros für ein frühes Abendessen in einem Nachbarschaftsbistro zurück, dann gehen Sie die Uferpromenade Richtung Parlament, während es sich beleuchtet.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Bäder, Margareteninsel und Stadtwäldchen",
          morning: [
            {
              poiSlug: "margaret-island",
              text: "Beginnen Sie langsam mit einem Vormittag auf der Margareteninsel, gehen Sie oder leihen Sie ein Rad am Ende der Margaretenbrücke und umrunden Sie den autofreien Park vorbei am Springbrunnen mit Musik und dem alten Wasserturm.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "szechenyi-baths",
              text: "Verbringen Sie einen langen Nachmittag im Szechenyi-Thermalbad im Stadtwäldchen. Buchen Sie ein Online-Ticket für einen Wochentag mit einer Kabine, bringen Sie Ihr eigenes Handtuch und Ihre Badeschlappen mit, und lassen Sie sich nieder, sobald der Mittagshöhepunkt verblasst.",
              durationMin: 210,
            },
          ],
          evening: [
            {
              text: "Durchstreifen Sie auf dem Weg hinaus das Stadtwäldchen für die Burg Vajdahunyad und den Heldenplatz, die in der Dämmerung erleuchtet sind, ein kostenloses und leichtes Ende des entspannten Tages.",
              durationMin: 60,
            },
            {
              text: "Letztes Abendessen zurück in Ujlipotvaros oder drüben im jüdischen Viertel, beide eine kurze Tramfahrt entfernt und beide weit günstiger als die touristischen Ufermeilen.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
  ],
};

export default budapestDe;
