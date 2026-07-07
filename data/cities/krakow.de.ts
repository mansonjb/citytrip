import type { CityData } from "../types";

const krakowDe: CityData = {
  city: {
    slug: "krakow",
    name: "Krakau",
    country: "Polen",
    countrySlug: "poland",
    lat: 50.0647,
    lng: 19.945,
    tier: 3,
    idealDays: 2,
    durations: [2, 3],
    airportCode: "KRK",
    airportToCenter:
      "Der Zug vom Flughafen Krakau zum Hauptbahnhof Krakow Glowny braucht etwa 20 Minuten, kostet rund 17 PLN, also ungefähr 4 EUR, und fährt alle 30 Minuten. Die Stadtbusse 208 und 252 fahren dieselbe Strecke langsamer für ein normales Nahverkehrsticket, falls die Zugzeiten nicht passen.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 12],
    avoidMonths: [1],
    monthlyNotes: {
      1: "Der kälteste Monat, mit Höchstwerten um 1 C, Tiefstwerten deutlich unter dem Gefrierpunkt und kurzen grauen Tagen; der Weihnachtsmarkt am Hauptmarkt (Rynek Glowny) endet meist in den ersten Januartagen. Die Sehenswürdigkeiten sind ruhig und die Hotelpreise erreichen ihren Jahrestiefstwert, aber packen Sie für richtigen Winter und rechnen Sie mit Schnee unter den Füßen.",
      2: "Noch fest im Winter, Höchstwerte um 3 C und häufiger Frost, also eine günstige, menschenleere Zeit, um sich durch die Innensehenswürdigkeiten und den Wawel zu arbeiten. Die Tage werden ein wenig länger, und die Milchbars und Kellerbars tragen die Atmosphäre, wenn es zu kalt ist, um draußen zu verweilen.",
      3: "Die Höchstwerte klettern Richtung 9 C und die Stadt taut auf; Ostermärkte erscheinen in der zweiten Monatshälfte am Hauptmarkt (Rynek Glowny), wenn Ostern früh fällt. Der Andrang bleibt gering und die Preise liegen unter der Frühlingsspitze, ein gutes Zeitfenster für eine preisgünstige Reise.",
      4: "Richtiger Frühling bei rund 14 C, mit Blüten im Planty-Park und den ersten Cafétischen im Freien am Platz. Die Wochenenden um Ostern und das lange Maiwochenende werden voll, buchen Sie also die Prunkräume des Wawel und jede Reservierung für Auschwitz-Birkenau lange im Voraus.",
      5: "Einer der besten Monate, Höchstwerte um 19 C, lange helle Abende und sich füllende Biergärten in Kazimierz. Es ist die Hochsaison der Nebensaison, also festigen sich die Unterkunftspreise und der Platz wird lebhaft; reservieren Sie Tagesausflüge nach Auschwitz und Wieliczka früh.",
      6: "Warm bei rund 22 C mit den längsten Tagen des Jahres und zwei Ankerevents: das Mittsommerfest Wianki an der Weichsel unterhalb des Wawel um die Sonnenwende und der Beginn des Festivals jüdischer Kultur in Kazimierz in der letzten Woche. Buchen Sie Unterkünfte in Kazimierz früh für die Festivaltermine.",
      7: "Hochsommer, Höchstwerte um 24 C, warme Abende und die Konzerte des Festivals jüdischer Kultur, die in den ersten Tagen des Monats durch Kazimierz strömen. Dies ist der geschäftigste und teuerste Abschnitt; machen Sie den Wawel und den Platz früh und heben Sie die Nachmittage für den schattigen Planty-Park und die Bars am Fluss auf.",
      8: "Dieselbe Sommerhitze um 24 C und die höchsten Touristenzahlen des Jahres, mit gelegentlichen Nachmittagsgewittern. Die Biergärten und die Weichselboulevards nehmen die Menge gut auf, aber rechnen Sie den ganzen Tag mit Schlangen am Salzbergwerk und an Schindlers Fabrik, also buchen Sie im Voraus.",
      9: "Höchstwerte um 19 C, ausdünnender Andrang nach der ersten Woche und angenehmes Wetter zum Gehen, was diesen Monat zur klugen Alternative zum Sommer macht. Die Preise sinken und das Licht wird golden über dem Platz; Tagesausflüge lassen sich kurzfristiger buchen.",
      10: "Frischer Herbst bei rund 13 C mit kräftigen Farben im Planty-Park und entlang des Flusses; die Touristenzahlen sinken nach Monatsmitte merklich und die Hotelpreise folgen. Bringen Sie eine warme Schicht für die Abende mit, die schnell kalt werden, sobald die Sonne untergeht.",
      11: "Grau, kalt und ruhig bei rund 7 C, bis der Weihnachtsmarkt in der letzten Woche am Hauptmarkt (Rynek Glowny) öffnet, was die Stimmung völlig dreht. Ende November ist ein Glücksfall: Marktstände und Glühwein ohne die Wochenenddichte des Dezembers.",
      12: "Der Weihnachtsmarkt am Hauptmarkt (Rynek Glowny) läuft den ganzen Monat mit gegrilltem Oscypek-Käse, Glühwein und einer großen Krippentradition und zieht dichte Wochenendmengen an. Rechnen Sie mit Tiefstwerten unter dem Gefrierpunkt, möglichem Schnee und Dezember-Hotelpreisen über der Winternorm, also buchen Sie früh.",
    },
    climate: {
      1: { highC: 1, lowC: -4, rainyDays: 9 },
      2: { highC: 3, lowC: -3, rainyDays: 8 },
      3: { highC: 9, lowC: 0, rainyDays: 9 },
      4: { highC: 14, lowC: 4, rainyDays: 10 },
      5: { highC: 19, lowC: 9, rainyDays: 12 },
      6: { highC: 22, lowC: 12, rainyDays: 13 },
      7: { highC: 24, lowC: 14, rainyDays: 13 },
      8: { highC: 24, lowC: 13, rainyDays: 11 },
      9: { highC: 19, lowC: 9, rainyDays: 9 },
      10: { highC: 13, lowC: 5, rainyDays: 8 },
      11: { highC: 7, lowC: 1, rainyDays: 9 },
      12: { highC: 2, lowC: -3, rainyDays: 10 },
    },
    budgetLevel: "low",
    budgetPerDay: { budget: 45, mid: 95, high: 190 },
    tagline: "Intakter mittelalterlicher Kern, Milchbar-Preise, schwere Geschichte in der Nähe.",
    heroIntro:
      "Krakau hat den größten mittelalterlichen Platz Europas, ein Königsschloss auf einem Hügel und ein ganzes jüdisches Viertel bewahrt, das den Krieg überstand, alles innerhalb eines begehbaren Rings, den Sie in zwanzig Minuten durchqueren. Es ist einer der günstigsten klassischen Städtetrips des Kontinents, und die Milchbars verpflegen Sie noch immer für ein paar Euro. Zwei Tage bewältigen die Altstadt, den Wawel und Kazimierz bequem; ein dritter Tag ist für die großen, vorab gebuchten Ausflüge nach Auschwitz-Birkenau oder ins Salzbergwerk Wieliczka.",
    accent: { from: "#8E2D3C", to: "#D9A441", ink: "#4E1A24" },
    neighborhoodSlugs: [
      "stare-miasto",
      "kazimierz",
      "podgorze",
      "kleparz",
      "stradom",
    ],
    nearbyCitySlugs: ["prague"],
  },

  neighborhoods: [
    {
      slug: "stare-miasto",
      citySlug: "krakow",
      name: "Stare Miasto (Altstadt)",
      lat: 50.0616,
      lng: 19.937,
      bestFor: ["first-time", "romantic"],
      vibe: "Der mittelalterliche Kern innerhalb des grünen Planty-Rings, angelegt um den Hauptmarkt (Rynek Glowny), den größten Marktplatz Europas. Tagsüber ist es der geschäftigste Teil der Stadt, ganz aus Pferdekutschen, Cafétischen und dem Trompetensignal der Marienbasilika zur vollen Stunde; am späten Abend dünnen sich die Tagesausflügler aus und die Kellerbars übernehmen. Alles, was ein Erstbesucher will, liegt in zehn Gehminuten.",
      pros: [
        "Der Hauptmarkt (Rynek Glowny), die Tuchhallen und der Wawel alle in kurzer Gehweite",
        "Die größte Auswahl an Hotels und Apartments in Krakau",
        "Kein Nahverkehr nötig für eine Zweitagesreise",
      ],
      cons: [
        "Die Restaurants direkt am Platz sind überteuerte Touristenfallen",
        "Junggesellengruppen und Straßenlärm an Wochenendnächten",
        "Sie zahlen einen Lageaufschlag gegenüber Kazimierz oder Kleparz",
      ],
    },
    {
      slug: "kazimierz",
      citySlug: "krakow",
      name: "Kazimierz",
      lat: 50.0515,
      lng: 19.944,
      bestFor: ["local", "nightlife", "romantic", "budget"],
      vibe: "Das alte jüdische Viertel südlich des Zentrums, heute das stimmungsvollste Quartier der Stadt, mit erhaltenen Synagogen, Hofbars und dem besten Streetfood Krakaus. Es reicht von ruhigen, gedenkgeprägten Gassen rund um die Synagogen bis zur vollen Barszene am Plac Nowy nach Einbruch der Dunkelheit. Hier zu wohnen setzt Sie zwischen die Altstadt und Podgorze mit Schindlers Fabrik nur einen kurzen Weg über den Fluss.",
      pros: [
        "Die besten Bars, Cafés und das beste Streetfood der Stadt zu lokalen Preisen",
        "Zu Fuß erreichbar zur Altstadt und zu Schindlers Fabrik",
        "Günstigere Zimmer als die Altstadt bei gleichem zentralem Gefühl",
      ],
      cons: [
        "Der Plac Nowy und seine Seitenstraßen werden an Wochenenden bis spät laut",
        "Ein 15-Minuten-Weg zum Hauptmarkt (Rynek Glowny) statt nur weniger Schritte",
        "Weniger namhafte Hotels, mehr Apartments und kleine Pensionen",
      ],
    },
    {
      slug: "podgorze",
      citySlug: "krakow",
      name: "Podgorze",
      lat: 50.0446,
      lng: 19.9565,
      bestFor: ["local", "budget", "family"],
      vibe: "Das Viertel jenseits der Weichsel, in dem das Kriegsghetto lag, heute ein ruhiges Wohnquartier mit der schwersten Geschichte Krakaus und einem langsamen, unhektischen Gefühl. Schindlers Fabrik, der Platz der Ghettohelden mit seinem Denkmal aus leeren Stühlen und das Museum für moderne Kunst MOCAK liegen alle hier. Es ist ein kurzer Weg über die Fußgängerbrücke von Kazimierz, aber nachts eine Welt ruhiger.",
      pros: [
        "Schindlers Fabrik und die Ghetto-Gedenkstätten vor der Haustür",
        "Ruhige, echt lokale Straßen und niedrigere Preise als im Zentrum",
        "Fußgängerbrücke direkt nach Kazimierz für die Abende",
      ],
      cons: [
        "Wenige Restaurants und Bars im Vergleich zu Kazimierz jenseits des Flusses",
        "20 bis 25 Minuten zu Fuß zum Hauptmarkt (Rynek Glowny)",
        "Stellenweise gedrückte Stimmung; dies ist Gedenkboden, kein Nachtleben",
      ],
    },
    {
      slug: "kleparz",
      citySlug: "krakow",
      name: "Kleparz",
      lat: 50.0685,
      lng: 19.9415,
      bestFor: ["budget", "local", "family"],
      vibe: "Ein Alltagsviertel gleich nördlich der Altstadtmauer, angelegt um die Markthalle Stary Kleparz, wo Einheimische seit Jahrhunderten frische Ware kaufen. Es ist schlichter als der touristische Kern, liegt aber fünf Minuten von der Barbakane und direkt am Haupt-Zug- und -Busbahnhof. Hier tauschen Sie Postkartenoptik gegen niedrigere Preise und einfache Anbindung.",
      pros: [
        "Die günstigsten zentrumsnahen Zimmer, fünf Minuten von der Altstadt",
        "Der Markt Stary Kleparz für günstiges frisches Essen und Snacks",
        "Wenige Schritte von Krakow Glowny für Flughafenzug und Tagesausflüge",
      ],
      cons: [
        "Wenig Charme im Viertel selbst; hier schlafen Sie, hier verweilen Sie nicht",
        "Belebte Straßen und der Bahnhof bringen Verkehr und Lärm",
        "Dünnes Abendessensangebot im Vergleich zu Kazimierz oder dem Platz",
      ],
    },
    {
      slug: "stradom",
      citySlug: "krakow",
      name: "Stradom",
      lat: 50.0555,
      lng: 19.9415,
      bestFor: ["first-time", "romantic", "family"],
      vibe: "Der schmale Streifen zwischen der Altstadt und Kazimierz, unterhalb der Ostflanke des Wawel-Hügels. Er ist zentral ohne den Lärm des Platzes, ein Fünf-Minuten-Weg sowohl vom Hauptmarkt (Rynek Glowny) als auch von den Bars von Kazimierz, und am nächsten von allen zum Schloss. Eine vernünftige Basis für alle, die Altstadt und Kazimierz zu gleichen Teilen wollen.",
      pros: [
        "Auf halbem Weg zwischen Hauptmarkt (Rynek Glowny), Wawel und Kazimierz, alles zu Fuß",
        "Ruhigere Nächte als der Platz oder der Plac Nowy",
        "Das nächstgelegene Wohngebiet zum Wawel-Schloss",
      ],
      cons: [
        "Kleinere Auswahl an Hotels als die eigentliche Altstadt",
        "Einige belebte Durchgangsstraßen durchziehen das Viertel",
        "Weniger eigene Szene; zum Essen und für Bars gehen Sie hinaus",
      ],
    },
  ],

  pois: [
    {
      slug: "rynek-glowny",
      citySlug: "krakow",
      name: "Hauptmarkt (Rynek Glowny) & Tuchhallen (Sukiennice)",
      lat: 50.0617,
      lng: 19.9373,
      kind: "sight",
      needsBooking: false,
      tip: "Der Platz und die Marktstände der Tuchhallen im Erdgeschoss sind kostenlos begehbar; stöbern Sie durch Bernstein und Volkskunst, aber feilschen Sie, und meiden Sie die Wechselkioske rund um den Platz wegen ihrer miserablen Kurse. Das unterirdische Rynek-Museum unter dem Platz ist das kostenpflichtige Highlight, und es ist an vollen Nachmittagen ausgebucht, buchen Sie also online einen Vormittagsslot.",
    },
    {
      slug: "st-marys-basilica",
      citySlug: "krakow",
      name: "Marienbasilika",
      lat: 50.0617,
      lng: 19.9394,
      kind: "sight",
      needsBooking: true,
      tip: "Es gibt zwei getrennte Tickets mit begrenzten Slots: eines für die Kirche, um den Holzaltar von Veit Stoß zu sehen, täglich gegen 11:50 Uhr geöffnet, und ein separates zeitgebundenes Ticket für den Turmaufstieg. Kaufen Sie beide vorab online, und stellen Sie sich zu jeder vollen Stunde auf den Platz, um das Hejnal-Trompetensignal live vom Turm zu hören, das mitten im Ton abbricht, eine Anspielung auf einen mittelalterlichen Trompeter, den ein Pfeil unterbrach.",
    },
    {
      slug: "wawel-castle",
      citySlug: "krakow",
      name: "Wawel-Schloss",
      lat: 50.0544,
      lng: 19.9356,
      kind: "sight",
      needsBooking: true,
      tip: "Der Schlosshof und das Hügelgelände sind kostenlos zugänglich, aber die Prunkräume und die königlichen Gemächer nutzen zeitgebundene Tickets mit einem Tageskontingent, das im Sommer früh ausverkauft ist, buchen Sie also online einen Slot nahe der Öffnung um 9:30 Uhr. Eine begrenzte Zahl kostenloser Tickets für einige Routen wird an einem Wochentag freigegeben, üblicherweise montags, und sie sind binnen Minuten weg.",
    },
    {
      slug: "wawel-cathedral",
      citySlug: "krakow",
      name: "Wawel-Kathedrale",
      lat: 50.0543,
      lng: 19.9351,
      kind: "sight",
      needsBooking: false,
      tip: "Der Eintritt ins Kirchenschiff der Kathedrale ist frei, aber die Königsgräber, der Aufstieg zum Turm der Sigismundglocke und die Krypta brauchen ein Kombiticket, das man im Haus gegenüber dem Eingang kauft, nicht an der Tür. Steigen Sie die schmale Holztreppe früh zur Glockenhöhe der Sigismundglocke hinauf, bevor sich die einreihige Treppe am Vormittag staut.",
    },
    {
      slug: "kazimierz-quarter",
      citySlug: "krakow",
      name: "Jüdisches Viertel Kazimierz",
      lat: 50.0515,
      lng: 19.9445,
      kind: "sight",
      needsBooking: false,
      tip: "Gehen Sie es morgens ab für die Synagogen, den Remuh-Friedhof und die Szeroka-Straße, wenn kaum jemand da ist, und kehren Sie nach Einbruch der Dunkelheit für die Barszene am Plac Nowy zurück. Die runden Zapiekanka-Baguettepizzen aus der Okraglak-Rotunde am Plac Nowy sind der klassische günstige nächtliche Imbiss für ein paar Zloty.",
    },
    {
      slug: "schindlers-factory",
      citySlug: "krakow",
      name: "Museum Schindlers Fabrik",
      lat: 50.0475,
      lng: 19.9613,
      kind: "museum",
      needsBooking: true,
      tip: "Dies ist ein Museum des besetzten Krakau im Krieg in Oskar Schindlers echter Emaillewarenfabrik, nicht nur über den Film, und es ist im Sommer Tage im Voraus ausverkauft, buchen Sie also online ein zeitgebundenes Ticket. Nehmen Sie den ersten Slot des Tages; die engen, immersiven Räume verstopfen stark, sobald Gruppen eintreffen, und planen Sie volle zwei Stunden ein.",
    },
    {
      slug: "auschwitz-birkenau",
      citySlug: "krakow",
      name: "Gedenkstätte Auschwitz-Birkenau",
      lat: 50.0343,
      lng: 19.1789,
      kind: "sight",
      needsBooking: true,
      tip: "Der Eintritt ist frei, aber Sie MÜSSEN online ein zeitgebundenes Eintrittsticket reservieren, in der Hochsaison oft Wochen im Voraus, und zwischen etwa 10 und 15 Uhr kommen Sie nur mit einem lizenzierten Guide hinein. Es ist etwa eine 1,5-stündige Fahrt pro Richtung bei Oswiecim, blockieren Sie also mindestens einen halben Tag und realistisch fast einen ganzen; das Gelände umfasst zwei getrennte Lager, Auschwitz I und Birkenau, verbunden durch einen Shuttlebus.",
    },
    {
      slug: "wieliczka-salt-mine",
      citySlug: "krakow",
      name: "Salzbergwerk Wieliczka",
      lat: 49.9832,
      lng: 20.0546,
      kind: "experience",
      needsBooking: true,
      tip: "Hinunter geht es nur auf einer geführten Tour, buchen Sie also die Touristenroute vorab online, besonders im Sommer, wenn die englischsprachigen Slots schnell voll sind. Es ist ein zweistündiger Gang mit rund 380 Stufen am Anfang abwärts und ohne Möglichkeit, früher zu gehen, also nichts für jemanden, der Stufen nicht bewältigen kann; die unterirdische Temperatur hält ganzjährig rund 14 C, bringen Sie eine Schicht mit.",
    },
    {
      slug: "planty-park",
      citySlug: "krakow",
      name: "Planty-Park-Ring",
      lat: 50.0625,
      lng: 19.9355,
      kind: "park",
      needsBooking: false,
      tip: "Dieser Grüngürtel umschließt die gesamte Altstadt auf der Linie der abgerissenen Stadtmauern, ein flacher Vier-Kilometer-Ring, den Sie in unter einer Stunde abgehen. Nutzen Sie ihn im Sommer als schattige Abkürzung zwischen den Sehenswürdigkeiten statt als Ziel; der Abschnitt an der Barbakane und dem Universitätsviertel ist der schönste.",
    },
    {
      slug: "barbican-florian-gate",
      citySlug: "krakow",
      name: "Barbakane & Florianstor",
      lat: 50.0655,
      lng: 19.9415,
      kind: "sight",
      needsBooking: false,
      tip: "Die Barbakane und die Mauern sind vom Planty-Park aus kostenlos zu betrachten; ein günstiges Kombiticket lässt Sie die erhaltenen Wehrgänge begehen und in die Barbakane hineinsteigen, wenn Sie den mittelalterlichen Verteidigungsblickwinkel wollen. Das Florianstor öffnet sich zur Florianska-Straße, dem klassischen Anmarsch hinunter zum Hauptmarkt (Rynek Glowny), und ortsansässige Maler hängen hier Leinwände entlang der Mauer auf.",
    },
    {
      slug: "collegium-maius",
      citySlug: "krakow",
      name: "Collegium Maius (Jagiellonen-Universität)",
      lat: 50.0614,
      lng: 19.9327,
      kind: "museum",
      needsBooking: true,
      tip: "Das älteste Gebäude der ältesten Universität Polens, wo Kopernikus studierte, ist nur mit einer geführten Tour zu besichtigen, und die beliebten Slots sind ausverkauft, reservieren Sie also vorab und fragen Sie nach einer englischsprachigen Tour. Der arkadengesäumte gotische Innenhof ist kostenlos zu betreten, und die astronomische Uhr darin schlägt und lässt einige Male am Tag Figuren aufziehen, ein guter Zeitpunkt zum Abpassen.",
    },
    {
      slug: "milk-bar-tomasza",
      citySlug: "krakow",
      name: "Bar Mleczny (Milchbar)",
      lat: 50.0625,
      lng: 19.9405,
      kind: "food",
      needsBooking: false,
      tip: "Ein Bar Mleczny ist eine subventionierte Kantine, die Pierogi, Suppen und Schnitzel für ein paar Euro serviert, ein echtes Stück Alltagspolen; halten Sie nach einer wie dem Bar Mleczny Tomasza nahe der Altstadt Ausschau. Lesen Sie die polnische Menütafel über dem Tresen, zahlen Sie zuerst an der Kasse, holen Sie dann Ihr Gericht ab; Bargeld ist am sichersten, und mittags geht es schnell.",
    },
    {
      slug: "ghetto-heroes-square",
      citySlug: "krakow",
      name: "Podgorze & Platz der Ghettohelden",
      lat: 50.0475,
      lng: 19.9527,
      kind: "sight",
      needsBooking: false,
      tip: "Der Platz jenseits des Flusses in Podgorze beherbergt das Denkmal aus 70 leeren Bronzestühlen, das an das Kriegsghetto erinnert, und die Apotheke Unter dem Adler an seinem Rand ist ein kleines, bewegendes Ghettomuseum für ein geringes Entgelt. Verbinden Sie es mit Schindlers Fabrik ein paar Minuten entfernt, da beide auf derselben Seite der Weichsel liegen.",
    },
    {
      slug: "kosciuszko-mound",
      citySlug: "krakow",
      name: "Aussichtspunkt Kosciuszko-Hügel",
      lat: 50.0547,
      lng: 19.8917,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Dieser künstlich aufgeschüttete Erdhügel westlich des Zentrums bietet das beste vollständige Panorama über Krakau und, an klaren Tagen, die Tatra; ein günstiges Ticket deckt den Aufstieg und das kleine Festungsmuseum ringsum ab. Es ist eine 30-minütige Fahrt mit Bus 100 oder Straßenbahn plus ein kurzer Weg, heben Sie es sich also für einen klaren Nachmittag auf statt für einen grauen.",
    },
  ],

  itineraries: [
    {
      citySlug: "krakow",
      days: 2,
      summary:
        "Zwei Tage reichen für den Kern Krakaus, wenn Sie zentral wohnen und früh starten, und sie decken die Altstadt, den Wawel und Kazimierz ab, ohne dass es gehetzt wirkt. Das ganze Zentrum liegt innerhalb des Planty-Rings, also sind der Hauptmarkt (Rynek Glowny), die Marienbasilika, die Tuchhallen und der Wawel alle in 15 Gehminuten voneinander entfernt, und Kazimierz ist ein kurzer Spaziergang südlich. Machen Sie das Stare Miasto zu Ihrer Basis, damit beide Vormittage zu Fuß beginnen. Der Plan, der funktioniert, ist ein Tag für die Altstadt und den Wawel-Hügel und ein Tag für Kazimierz, Schindlers Fabrik und Podgorze jenseits des Flusses. Buchen Sie zwei Dinge online, bevor Sie ankommen: die Prunkräume des Wawel und einen zeitgebundenen Slot für Schindlers Fabrik, da beide in der Saison ausverkauft sind. Was zwei Tage Ihnen nicht bieten, sind die großen, vorab gebuchten Tagesausflüge: Auschwitz-Birkenau und das Salzbergwerk Wieliczka brauchen jeweils mindestens einen halben Tag, und genau dafür ist ein dritter Tag da. Die Preise sind niedrig, also essen Sie gut; ein Milchbar-Mittagessen kostet ein paar Euro.",
      stayNeighborhoodSlug: "stare-miasto",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Altstadt und Wawel-Hügel",
          morning: [
            {
              poiSlug: "rynek-glowny",
              text: "Beginnen Sie gegen 8:30 Uhr am Hauptmarkt (Rynek Glowny), solange der Platz ruhig ist, gehen Sie die Tuchhallen-Stände im Erdgeschoss ab und steigen Sie dann auf einem vorab gebuchten Vormittagsslot hinunter ins Rynek-Museum unter dem Platz.",
              durationMin: 105,
            },
            {
              poiSlug: "st-marys-basilica",
              text: "Treten Sie in die Marienbasilika für den Holzaltar von Veit Stoß, zeitlich auf die tägliche Enthüllung gegen 11:50 Uhr abgestimmt, und bleiben Sie zur vollen Stunde auf dem Platz, um das live gespielte Hejnal-Trompetensignal mitten im Ton abbrechen zu hören.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "milk-bar-tomasza",
              text: "Mittagessen in einer Milchbar wie dem Bar Mleczny Tomasza mit Pierogi und Suppe für ein paar Euro. Zahlen Sie zuerst an der Kasse, holen Sie am Tresen ab und bringen Sie Bargeld mit.",
              durationMin: 45,
            },
            {
              poiSlug: "wawel-castle",
              text: "Gehen Sie hinunter zum Wawel-Hügel und besichtigen Sie die Prunkräume des Königsschlosses auf Ihrem vorab gebuchten Ticket, verbringen Sie dann kostenlos Zeit im arkadengesäumten Innenhof und entlang der Wehrgänge über der Weichsel.",
              durationMin: 120,
            },
            {
              poiSlug: "wawel-cathedral",
              text: "Nebenan besuchen Sie die Wawel-Kathedrale: Das Kirchenschiff ist frei, und ein Kombiticket aus dem Haus gegenüber deckt die Königsgräber und den Aufstieg zur Sigismundglocke für einen Blick über den Fluss ab.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "barbican-florian-gate",
              text: "Gehen Sie nach Norden die Florianska-Straße hinauf und durch das Florianstor hinaus zur Barbakane, der klassische mittelalterliche Anmarsch rückwärts, mit den entlang aufgestellten Mauermalern.",
              durationMin: 45,
            },
            {
              text: "Abendessen in der Altstadt abseits des Hauptplatzes, in einer Seitenstraße wie der Slawkowska oder rund um den Plac Szczepanski, wo ein volles polnisches Essen mit Bier deutlich unter einem Touristenplatz-Preis liegt.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Kazimierz, Schindlers Fabrik und Podgorze",
          morning: [
            {
              poiSlug: "kazimierz-quarter",
              text: "Gehen Sie früh hinunter nach Kazimierz und machen Sie das jüdische Viertel vor dem Andrang: die Synagogen, den Remuh-Friedhof und die Szeroka-Straße, alle am Morgen ruhig.",
              durationMin: 120,
            },
            {
              text: "Holen Sie sich eine runde Zapiekanka aus der Okraglak-Rotunde am Plac Nowy für ein günstiges Straßen-Mittagessen, und schneiden Sie dann hinunter zur Fußgängerbrücke am Fluss Richtung Podgorze.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "schindlers-factory",
              text: "Gehen Sie hinüber nach Podgorze zu Ihrem vorab gebuchten, früh angesetzten zeitgebundenen Eintritt in Schindlers Fabrik, ein Museum des besetzten Krakau im Krieg in Oskar Schindlers echter Emaillewarenfabrik. Planen Sie volle zwei Stunden ein.",
              durationMin: 120,
            },
            {
              poiSlug: "ghetto-heroes-square",
              text: "Ein paar Minuten entfernt stehen Sie am Platz der Ghettohelden mit seinen 70 leeren Bronzestühlen und treten in das kleine Museum der Apotheke Unter dem Adler an seinem Rand für die Ghettogeschichte.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "planty-park",
              text: "Gehen Sie am Fluss entlang zurück Richtung Zentrum und schneiden Sie durch den Planty-Ring, während das Licht schwindet, den flachen Grüngürtel auf der Linie der alten Stadtmauern.",
              durationMin: 30,
            },
            {
              text: "Schließen Sie mit Abendessen und Drinks wieder in Kazimierz rund um den Plac Nowy ab, der besten Bar- und Hofszene der Stadt, am geschäftigsten und lustigsten nach Einbruch der Dunkelheit.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "krakow",
      days: 3,
      summary:
        "Drei Tage sind die richtige Länge für Krakau: Zwei Tage bewältigen die kompakte Altstadt, den Wawel und Kazimierz in menschlichem Tempo, und der dritte Tag ist für einen großen Ausflug aus der Stadt gebaut. Dieser dritte Tag ist eigentlich der Grund, eine Nacht hinzuzufügen, denn beide großen Ausflüge verlangen Vorbuchung und Zeit. Auschwitz-Birkenau ist kostenlos, braucht aber eine zeitgebundene Reservierung, oft Wochen im Voraus, ist eine 1,5-stündige Fahrt pro Richtung und nimmt fast einen ganzen Tag ein; das Salzbergwerk Wieliczka ist nur mit Führung zugänglich, näher, und füllt einen soliden halben Tag. Wählen Sie eines für Tag drei und reservieren Sie es vor allem anderen. Wohnen Sie für diese Reise in Kazimierz: Es kostet weniger als die Altstadt, setzt das beste Essen und die besten Bars vor Ihre Haustür und liegt in Gehweite sowohl vom Platz als auch von Schindlers Fabrik. Der Ablauf ist Altstadt und Wawel an Tag eins, Kazimierz und Podgorze an Tag zwei und Ihr gewählter Tagesausflug an Tag drei. Buchen Sie die Wawel-Räume, Schindlers Fabrik und Ihren Tagesausflug vorab online.",
      stayNeighborhoodSlug: "kazimierz",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Altstadt und Wawel-Hügel",
          morning: [
            {
              poiSlug: "rynek-glowny",
              text: "Gehen Sie von Kazimierz hinauf in die Altstadt und beginnen Sie bis 8:30 Uhr am Hauptmarkt (Rynek Glowny) für den ruhigen Platz und die Tuchhallen, gehen Sie dann auf einem gebuchten Vormittagsslot ins unterirdische Rynek-Museum.",
              durationMin: 105,
            },
            {
              poiSlug: "st-marys-basilica",
              text: "Besuchen Sie die Marienbasilika für den Veit-Stoß-Altar um seine Enthüllung um 11:50 Uhr, und passen Sie Ihre Minute auf dem Platz auf das Hejnal-Trompetensignal vom Turm zur vollen Stunde ab.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "milk-bar-tomasza",
              text: "Mittagessen in einer Milchbar mit Pierogi, Schnitzel und Suppe für ein paar Euro, an der Kasse bestellen und am Tresen mit Bargeld abholen.",
              durationMin: 45,
            },
            {
              poiSlug: "wawel-castle",
              text: "Gehen Sie zum Wawel-Hügel und besichtigen Sie die Prunkräume des Königsschlosses auf Ihrem vorab gebuchten zeitgebundenen Ticket, verweilen Sie dann kostenlos im Innenhof und auf den Wehrgängen am Fluss.",
              durationMin: 120,
            },
            {
              poiSlug: "wawel-cathedral",
              text: "Schließen Sie auf dem Hügel an der Wawel-Kathedrale ab, mit dem kostenlosen Kirchenschiff und einem Kombiticket für die Königsgräber und den Aufstieg zur Sigismundglocke über der Weichsel.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "collegium-maius",
              text: "Zurück in der Altstadt treten Sie in den kostenlosen gotischen Innenhof des Collegium Maius, das älteste Gebäude der Jagiellonen-Universität, wo Kopernikus studierte, und erwischen Sie den Schlag der astronomischen Uhr, wenn das Timing passt.",
              durationMin: 45,
            },
            {
              text: "Gehen Sie zurück hinunter nach Kazimierz zum Abendessen rund um den Plac Nowy, wo Hofrestaurants und Bars deutlich unter den Preisen des Altstadtplatzes liegen.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Kazimierz, Schindlers Fabrik und Podgorze",
          morning: [
            {
              poiSlug: "kazimierz-quarter",
              text: "Sie wohnen hier, also starten Sie früh zu Fuß: Die Synagogen von Kazimierz, der Remuh-Friedhof und die Szeroka-Straße sind am Morgen fast leer, bevor die Reisegruppen eintreffen.",
              durationMin: 120,
            },
            {
              text: "Nehmen Sie eine günstige Zapiekanka aus der Okraglak-Rotunde am Plac Nowy, und überqueren Sie dann die Fußgängerbrücke über die Weichsel nach Podgorze.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              poiSlug: "schindlers-factory",
              text: "Betreten Sie Schindlers Fabrik auf Ihrem vorab gebuchten zeitgebundenen Ticket für das immersive Museum des besetzten Krakau im Krieg; nehmen Sie den frühestmöglichen Slot, um den Raum-für-Raum-Engpässen zu entgehen, und planen Sie zwei Stunden ein.",
              durationMin: 120,
            },
            {
              poiSlug: "ghetto-heroes-square",
              text: "Gehen Sie hinüber zum Platz der Ghettohelden für das Denkmal aus 70 leeren Stühlen und das Museum der Apotheke Unter dem Adler an seinem Rand, beide ein paar Minuten von der Fabrik.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "planty-park",
              text: "Schleifen Sie über den Fluss zurück und nehmen Sie in der Dämmerung einen langsamen Abschnitt des Planty-Rings, den flachen Grüngürtel um die Altstadt auf der Linie der abgerissenen Mauern.",
              durationMin: 30,
            },
            {
              text: "Abendessen und Drinks in Kazimierz, durch die Höfe und Kellerbars am Plac Nowy, die lebhafteste Abendszene der Stadt.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Großer Tagesausflug: Auschwitz-Birkenau oder Salzbergwerk Wieliczka",
          morning: [
            {
              poiSlug: "auschwitz-birkenau",
              text: "Option A: Brechen Sie früh zur Gedenkstätte Auschwitz-Birkenau auf, etwa eine 1,5-stündige Fahrt nach Westen, auf Ihrer vorab gebuchten zeitgebundenen Reservierung; zwischen 10 und 15 Uhr kommen Sie nur mit einem lizenzierten Guide hinein, und Sie sehen sowohl Auschwitz I als auch Birkenau über den Shuttle.",
              durationMin: 240,
            },
            {
              poiSlug: "wieliczka-salt-mine",
              text: "Option B: Fahren Sie zum Salzbergwerk Wieliczka gleich außerhalb der Stadt auf einer vorab gebuchten geführten Touristenroute, ein zweistündiger unterirdischer Gang mit rund 380 Stufen am Anfang abwärts und beständigen 14 C, bringen Sie also eine Schicht mit.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              text: "Option A: Der Besuch von Auschwitz-Birkenau und die Fahrt füllen den größten Teil des Tages, kehren Sie also am Nachmittag nach Krakau zurück und halten Sie den Rest des Tages ruhig und nachdenklich.",
              durationMin: 180,
            },
            {
              text: "Option B: Am frühen Nachmittag zurück von Wieliczka, nutzen Sie die freie Zeit für alles, was Sie ausgelassen haben, etwa den Wawel-Innenhof, einen Abschnitt des Planty-Parks oder die Tuchhallen-Stände.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "kosciuszko-mound",
              text: "Ist es ein klarer Abend und haben Sie den kürzeren Wieliczka-Ausflug gewählt, fahren Sie mit Bus 100 hinaus zum Kosciuszko-Hügel für das beste vollständige Panorama über Krakau und, an einem guten Tag, die ferne Tatra im Sonnenuntergang.",
              durationMin: 90,
            },
            {
              text: "Letztes Abendessen zurück in Kazimierz oder der Altstadt; nach einem schweren Tag ist ein ruhiges Kellerrestaurant mit Pierogi und einem polnischen Bier die richtige Note zum Ausklang.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
  ],
};

export default krakowDe;
