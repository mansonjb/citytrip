import type { CityData } from "../types";

const berlinDe: CityData = {
  city: {
    slug: "berlin",
    name: "Berlin",
    country: "Deutschland",
    countrySlug: "germany",
    lat: 52.52,
    lng: 13.405,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "BER",
    airportToCenter:
      "Vom BER Brandenburg fährt der FEX Airport Express in etwa 30 Minuten zum Hauptbahnhof, oder die S-Bahn-Linien S9 und S45 erreichen das Zentrum in 40 bis 45 Minuten. Für alle brauchen Sie ein ABC-Zonen-Ticket für etwa 4,70 EUR, da der Flughafen in der äußeren Zone C liegt. Ein Taxi in die Mitte kostet grob 45 bis 60 EUR und dauert ohne Verkehr 40 Minuten.",
    centerWalkable: false,
    bestMonths: [5, 6, 7, 9],
    avoidMonths: [1],
    monthlyNotes: {
      1: "Der kälteste, gräueste Monat mit Höchstwerten um 3 Grad, nachts oft unter dem Gefrierpunkt, mit kurzen Tagen und dünnem Tageslicht. Die Menschenmengen sind minimal und die Hotels am günstigsten, aber die Weihnachtsmärkte haben Anfang Januar geschlossen, und außer der Ruhe nach Neujahr gibt es wenig saisonalen Reiz.",
      2: "Noch kalt bei 4 bis 5 Grad und oft feucht, doch die internationale Berlinale Mitte Februar bringt zehn Tage voller Premieren, roter Teppiche und öffentlicher Vorführungen in der ganzen Stadt. Buchen Sie im Voraus, wenn Sie für das Festival kommen, sonst ist es eine ruhige, günstige Zeit, um Museen ohne Warteschlangen zu sehen.",
      3: "Die Höchstwerte klettern auf etwa 9 Grad, während der Winter seinen Griff lockert, mit länger werdenden Tagen, aber wechselhaftem, stürmischem Wetter. Die Menschenmengen bleiben dünn und die Preise niedrig, was ihn zu einem passablen Preis-Leistungs-Monat macht, wenn Sie sich auf Kälte und Regen einstellen und sich auf Sehenswürdigkeiten im Innenraum konzentrieren.",
      4: "Der Frühling kommt ungleichmäßig um die 13 Grad, mit Kirschblüten entlang mancher Abschnitte der ehemaligen Mauer und den ersten warmen Nachmittagen, die die Menschen in die Parks ziehen. Ostern kann die Hotelpreise für ein paar Tage anheben, aber die Menschenmengen sind noch moderat und das Licht bessert sich schnell.",
      5: "Einer der besten Monate bei 19 bis 20 Grad, mit langen Abenden, grünen Parks und Biergärten, die wieder in voller Kraft öffnen. Der Karneval der Kulturen füllt Kreuzberg über das Pfingstwochenende mit einem Straßenumzug und Essensständen, rechnen Sie also mit ein paar lebhaften, vollen Tagen um diese Zeit.",
      6: "Warm und lebhaft bei 22 bis 23 Grad mit den längsten Tagen des Jahres und beginnender Badesaison am Wannsee und Müggelsee. Die Menschenmengen wachsen, und Rooftop-Bars und Biergärten laufen zur Hochform auf, aber die Hotelpreise liegen noch unter den Höchstständen des Hochsommers.",
      7: "Hochsommer bei 24 bis 25 Grad, warm und belebt, mit Freiluftkino, Badestränden an den Seen und Open-Air-Clubbing auf dem Höhepunkt. Dies ist der Spitzenmonat für das Warmwetterleben der Stadt, buchen Sie also Ihre Unterkunft früh und rechnen Sie damit, dass die beliebten Biergärten an sonnigen Abenden voll sind.",
      8: "Noch warm bei 24 Grad, aber gelegentlich schwül mit Sommergewittern, und viele Berliner machen selbst Urlaub, sodass die Stadt eine Spur ruhiger wirkt als im Juli. Er bleibt ein starker Monat für Seen, Parks und lange, helle Abende, mit Festivals, die durch den Sommerkalender laufen.",
      9: "Anfangs warm, dann nachlassend auf etwa 19 Grad, wohl der beste Allround-Monat: milde Tage, sich lichtende Sommermengen und Biergartenwetter, das sich in die erste Monatshälfte hält. Die herbstliche Kultursaison startet neu und gibt Ihnen sowohl das Leben im Freien als auch die wieder öffnenden Galerien und Konzertsäle.",
      10: "Kühler bei 13 bis 14 Grad mit dem ersten echten Herbstfrösteln und kürzeren Tagen, doch das Festival of Lights zu Monatsbeginn projiziert etwa zwei Wochen lang nach Einbruch der Dunkelheit Illuminationen auf große Wahrzeichen. Die Menschenmengen lichten sich und die Preise sinken, was ihn zu einer preiswerten Wahl in der Nebensaison macht, wenn Sie sich warm anziehen.",
      11: "Grau, kalt und oft nass bei Höchstwerten um 7 Grad, der Tiefpunkt des Jahres für Wetter und Tageslicht. Der rettende Vorzug kommt ganz am Ende, wenn die Weihnachtsmärkte in den letzten Tagen des Monats öffnen, sodass eine Reise Ende November sowohl niedrige Preise als auch den ersten Glühwein erwischen kann.",
      12: "Kalt um 4 Grad und ab dem Nachmittag dunkel, aber die Weihnachtsmärkte laufen stadtweit von Ende November bis kurz vor Weihnachten, mit dem herausragenden auf dem Gendarmenmarkt (kleiner Eintritt) und weiteren am Alexanderplatz und am Schloss Charlottenburg. Silvester wird mit einer riesigen kostenlosen Party und Feuerwerk am Brandenburger Tor gefeiert, rechnen Sie also in dieser Zeit mit Menschenmengen und höheren Preisen.",
    },
    climate: {
      1: { highC: 3, lowC: -2, rainyDays: 10 },
      2: { highC: 4, lowC: -2, rainyDays: 8 },
      3: { highC: 9, lowC: 1, rainyDays: 8 },
      4: { highC: 13, lowC: 4, rainyDays: 8 },
      5: { highC: 19, lowC: 8, rainyDays: 9 },
      6: { highC: 22, lowC: 11, rainyDays: 9 },
      7: { highC: 24, lowC: 14, rainyDays: 9 },
      8: { highC: 24, lowC: 13, rainyDays: 8 },
      9: { highC: 19, lowC: 10, rainyDays: 7 },
      10: { highC: 13, lowC: 6, rainyDays: 8 },
      11: { highC: 7, lowC: 2, rainyDays: 10 },
      12: { highC: 4, lowC: -1, rainyDays: 11 },
    },
    budgetLevel: "mid",
    budgetPerDay: { budget: 65, mid: 130, high: 260 },
    tagline: "Mauergeschichte, Weltmuseen und das beste Nachtleben Europas.",
    heroIntro:
      "Berlin ist groß, flach und weitläufig, also ist dies eine U-Bahn- und S-Bahn-Stadt, keine, in der man überall zu Fuß hinkommt, und man plant nach Vierteln. Drei Tage sind das ehrliche Minimum, um den historischen Kern der Mitte, die Mauer- und Kalte-Kriegs-Geschichte und ein modernes Viertel ohne Gewaltmarsch aufzuteilen. Kommen Sie im späten Frühling oder frühen Herbst, buchen Sie Ihren kostenlosen Termin für die Reichstagskuppel vor dem Abflug, und kaufen Sie ein ABC-Tagesticket, sobald Sie landen.",
    accent: { from: "#3E4A6B", to: "#E0A43B", ink: "#232A42" },
    neighborhoodSlugs: [
      "mitte",
      "kreuzberg",
      "prenzlauer-berg",
      "friedrichshain",
      "charlottenburg",
    ],
    nearbyCitySlugs: ["prague"],
  },

  neighborhoods: [
    {
      slug: "mitte",
      citySlug: "berlin",
      name: "Mitte",
      lat: 52.5219,
      lng: 13.4016,
      bestFor: ["first-time", "family", "romantic"],
      vibe: "Das historische und geografische Zentrum, wo sich das Brandenburger Tor, die Museumsinsel, der Reichstag und Unter den Linden alle innerhalb eines kurzen Wegs oder einer Tramstation aneinanderreihen. Es ist das Postkarten-Berlin und die logische Basis für eine erste, kurze Reise rund um die großen Sehenswürdigkeiten. Poliert und zentral, tauscht es die raue lokale Kante der Ostbezirke gegen puren Komfort.",
      pros: [
        "Zu Fuß oder mit einer kurzen Fahrt zum Brandenburger Tor, zum Reichstag und zur Museumsinsel",
        "Hervorragender Verkehrsknoten mit U-Bahn, S-Bahn und Trams, die an mehreren Stationen zusammentreffen",
        "Alles, was Erstbesucher sehen wollen, konzentriert sich hier und erspart Fahrten quer durch die Stadt",
      ],
      cons: [
        "Das teuerste Gebiet für Hotels und tagsüber das belebteste mit Reisegruppen",
        "Teile in der Nähe der Sehenswürdigkeiten wirken nach Büroschluss geschäftsmäßig und still",
        "Weniger von der gelebten lokalen Szene, die man in Kreuzberg oder Neukölln findet",
      ],
    },
    {
      slug: "kreuzberg",
      citySlug: "berlin",
      name: "Kreuzberg",
      lat: 52.4986,
      lng: 13.4033,
      bestFor: ["nightlife", "local", "budget"],
      vibe: "Das Herz des alternativen, multikulturellen Berlins, voller türkischer Märkte, Bars am Kanal, Street-Art und einigen der besten günstigen Speisen und langen Nächte der Stadt. Der Abschnitt rund um das Kottbusser Tor und den Landwehrkanal ist schäbig, energiegeladen und ungeschliffen, auf die Art, für die man nach Berlin kommt. Laut und rau, belohnt es Reisende, die das Echte der aufgeräumten Version vorziehen.",
      pros: [
        "Die dichteste Konzentration an Bars, Streetfood und Nachtleben der Stadt",
        "Echt multikulturell, mit dem türkischen Markt und Spaziergängen am Kanal",
        "Preiswertes Essen und Trinken, vom Döner bis zur Naturweinbar",
      ],
      cons: [
        "Rau und laut, mit rauen Kanten rund um das Kottbusser Tor bei Nacht",
        "Eine U-Bahn-Fahrt von den Sehenswürdigkeiten der Mitte, keine Gehdistanz",
        "Am Wochenende wird es nachts wild, eine schlechte Wahl für empfindliche Schläfer",
      ],
    },
    {
      slug: "prenzlauer-berg",
      citySlug: "berlin",
      name: "Prenzlauer Berg",
      lat: 52.5403,
      lng: 13.4241,
      bestFor: ["family", "romantic", "local"],
      vibe: "Ein ansehnlicher ehemaliger Ostbezirk aus restaurierten Mietshäusern des 19. Jahrhunderts, begrünten Plätzen und Sonntags-Brunch-Kultur, heute das am stärksten aufgewertete und familienfreundlichste Viertel der Stadt. Die Gegend um den Kollwitzplatz und die Kastanienallee hat Boutiquen, Cafés und den Flohmarkt am Mauerpark direkt vor der Tür. Ruhig und hübsch, ist es das leichte, bequeme Berlin statt des kantigen.",
      pros: [
        "Schöne, sichere Straßen mit Cafés, Brunch-Adressen und unabhängigen Läden",
        "Der sonntägliche Flohmarkt und das Karaoke am Mauerpark sind einen kurzen Weg entfernt",
        "Ausgezeichnet für Familien und Paare, die eine ruhigere, grünere Basis wollen",
      ],
      cons: [
        "Wenig eigenes Nachtleben, die Szene ist ruhig und wohnlich",
        "Ein paar U-Bahn- oder Tramstationen von den zentralen Sehenswürdigkeiten der Mitte",
        "Aufgewertet und teurer als die raueren Ostbezirke",
      ],
    },
    {
      slug: "friedrichshain",
      citySlug: "berlin",
      name: "Friedrichshain",
      lat: 52.5155,
      lng: 13.4542,
      bestFor: ["nightlife", "budget", "local"],
      vibe: "Das Clubbing-Kernland des ehemaligen Ost-Berlins, Heimat der East Side Gallery, der Techno-Tempel rund um die Spree und der jungen, günstigen Barmeile entlang der Simon-Dach-Straße. Die großartige Karl-Marx-Allee aus sozialistischer Zeit zieht sich hindurch, ganz aus monumentalen Boulevards und Plattenbau. Rau, jung und die ganze Nacht wach, ist es der Ort, an dem Berlins legendäres Nachtleben tatsächlich stattfindet.",
      pros: [
        "Die East Side Gallery und die größten Clubs liegen genau hier",
        "Günstiges Essen und Trinken für ein junges, studentisch geprägtes Publikum",
        "Direkte S-Bahn- und U-Bahn-Verbindungen über den Fluss ins Zentrum",
      ],
      cons: [
        "Laut und chaotisch am Wochenende, ganz auf durchgemachte Clubnächte gebaut",
        "Bei Tageslicht weniger Charme als die westlichen oder nördlichen Bezirke",
        "Eine Fahrt von den Sehenswürdigkeiten der Mitte, wobei die Verkehrsverbindungen gut sind",
      ],
    },
    {
      slug: "charlottenburg",
      citySlug: "berlin",
      name: "Charlottenburg",
      lat: 52.5058,
      lng: 13.3042,
      bestFor: ["family", "romantic", "first-time"],
      vibe: "Das elegante Herz des ehemaligen West-Berlins, aufgebaut rund um die Einkaufsmeile Kurfürstendamm, das barocke Schloss Charlottenburg und großzügige alte Mietshäuser. Es wirkt ruhiger und etablierter als die Ostbezirke, mit Kaufhäusern, klassischen Cafés und dem Zoo in der Nähe. Vornehm und wohnlich, passt es zu Reisenden, die Komfort und Raum dem Rauen vorziehen.",
      pros: [
        "Das Schloss Charlottenburg, das Ku'damm-Shopping und der Zoo liegen alle hier",
        "Ruhig, sicher und grün, eine bequeme Basis für Familien und Paare",
        "Gut angebundener Westteil, direkt zum Zoo und zum Hauptbahnhof",
      ],
      cons: [
        "Von den fünf am weitesten von der Mauer und den Ost-Berliner Sehenswürdigkeiten entfernt",
        "Ruhigeres Nachtleben und ein polierteres, weniger alternatives Gefühl",
        "Die klassische Shopping-Stimmung kann neben der Ost-Szene bieder wirken",
      ],
    },
  ],

  pois: [
    {
      slug: "brandenburg-gate",
      citySlug: "berlin",
      name: "Brandenburger Tor",
      lat: 52.5163,
      lng: 13.3777,
      kind: "sight",
      needsBooking: false,
      tip: "Das Tor ist kostenlos, offen und schließt nie, kommen Sie also bei Sonnenaufgang oder nach Einbruch der Dunkelheit für die angestrahlten Säulen ohne das tagsüber übliche Gedränge der Reisegruppen auf dem Pariser Platz. Es stand im Niemandsland der geteilten Stadt, und der Platz von heute bringt Sie wenige Schritte an den Reichstag und das Holocaust-Mahnmal, hängen Sie also alle drei zu einer Runde aneinander. Meiden Sie die kostümierten Figuren, die Fotos anbieten, sie erwarten Bezahlung.",
    },
    {
      slug: "reichstag",
      citySlug: "berlin",
      name: "Reichstag und Glaskuppel",
      lat: 52.5186,
      lng: 13.3762,
      kind: "sight",
      needsBooking: true,
      tip: "Die Glaskuppel ist kostenlos, aber Sie müssen sich online für einen festen Termin Tage im Voraus anmelden, es gibt keinen spontanen Zutritt, und die Termine sind in der Saison schnell weg. Bringen Sie den Lichtbildausweis mit, der zu Ihrer Buchung passt, die Sicherheitskontrolle ist auf Flughafenniveau. Zielen Sie auf einen Termin in der Dämmerung, um die Stadt bei Tageslicht und dann beleuchtet zu erleben, während Sie die Rampe hinaufsteigen, und nehmen Sie den kostenlosen Audioguide mit, der sich mit der Aussicht synchronisiert.",
    },
    {
      slug: "east-side-gallery",
      citySlug: "berlin",
      name: "East Side Gallery",
      lat: 52.5051,
      lng: 13.4394,
      kind: "sight",
      needsBooking: false,
      tip: "Dieser 1,3 km lange Abschnitt der erhaltenen Berliner Mauer, bemalt mit Wandbildern wie dem Bruderkuss zwischen Breschnew und Honecker, ist kostenlos und rund um die Uhr unter freiem Himmel an der Spree in Friedrichshain zugänglich. Kommen Sie am frühen Morgen, um die berühmten Bildtafeln vor den Menschenmengen und bevor sich Leute vor jede stellen zu fotografieren. Gehen Sie vom Ende am Ostbahnhof in Richtung Oberbaumbrücke, überqueren Sie dann die Brücke für das Mittagessen nach Kreuzberg.",
    },
    {
      slug: "museum-island",
      citySlug: "berlin",
      name: "Museumsinsel",
      lat: 52.5169,
      lng: 13.4017,
      kind: "museum",
      needsBooking: true,
      tip: "Kaufen Sie die kombinierte Bereichskarte, die alle Museen der Insel zu einem Preis abdeckt, und buchen Sie online einen festen Eintrittstermin, da das Neue Museum und seine Nofretete-Büste einen Zeitfenster brauchen. Seien Sie ehrlich mit Ihrer Planung: Das Pergamonmuseum, das Aushängeschild, ist wegen einer umfassenden Sanierung bis etwa 2027 geschlossen, kommen Sie also nicht in Erwartung des großen Altarsaals. Wählen Sie ein oder zwei der geöffneten Häuser, ein ganzer Tag für alle ist Museums-Überdosis.",
    },
    {
      slug: "holocaust-memorial",
      citySlug: "berlin",
      name: "Denkmal für die ermordeten Juden Europas",
      lat: 52.5139,
      lng: 13.3789,
      kind: "sight",
      needsBooking: false,
      tip: "Das Feld aus 2.711 Betonstelen ist kostenlos, offen und stets zugänglich, einen kurzen Weg südlich vom Brandenburger Tor. Gehen Sie in die Mitte, wo der Boden absinkt und die Blöcke über Ihren Kopf ragen, um die vom Entwurf beabsichtigte Desorientierung zu spüren, und wahren Sie den Respekt, dies ist ein Mahnmal, kein Spielplatz. Der kostenlose unterirdische Ort der Information darunter hat an manchen Tagen geschlossen und eine eigene Sicherheitsschlange, prüfen Sie das also vor dem Besuch.",
    },
    {
      slug: "checkpoint-charlie",
      citySlug: "berlin",
      name: "Checkpoint Charlie",
      lat: 52.5075,
      lng: 13.3904,
      kind: "sight",
      needsBooking: false,
      tip: "Das nachgebaute Wachhäuschen und das berühmte Schild sind kostenlos, aber heute reines Touristentheater, mit bezahlten Darstellern in Uniform, denen Sie für Fotos kein Trinkgeld geben sollten, behandeln Sie es also als Fünf-Minuten-Stopp. Die eigentliche Substanz sind die kostenlosen Freilufttafeln entlang der Straße und das nahe (kostenpflichtige) Mauermuseum, wenn Sie die Fluchtgeschichten im Detail wollen. Verbinden Sie es mit der Topographie des Terrors einen kurzen Weg westlich für einen deutlich stärkeren Kalte-Kriegs-Vormittag.",
    },
    {
      slug: "fernsehturm",
      citySlug: "berlin",
      name: "Fernsehturm",
      lat: 52.5208,
      lng: 13.4094,
      kind: "viewpoint",
      needsBooking: true,
      tip: "Mit 368 m ist dies das höchste Bauwerk Deutschlands, und die Aussicht über die ganze flache Stadt ist die beste in Berlin, aber buchen Sie ein festes Ticket online, um eine Schlange zu umgehen, die am Alexanderplatz über eine Stunde betragen kann. Ein Fast-Track-Termin kostet mehr, spart aber an einem vollen Tag das Warten. Fahren Sie gegen Sonnenuntergang hinauf für die Stadt bei Tag und im Lichtermeer, und das Drehrestaurant eine Etage höher braucht seine eigene Reservierung.",
    },
    {
      slug: "berlin-cathedral",
      citySlug: "berlin",
      name: "Berliner Dom",
      lat: 52.5191,
      lng: 13.4009,
      kind: "sight",
      needsBooking: false,
      tip: "Der prächtige protestantische Dom auf der Museumsinsel verlangt etwa 10 EUR Eintritt, was den Aufstieg über 270 Stufen zum äußeren Kuppelumgang für einen nahen Blick über die Insel und die Spree einschließt. Gehen Sie mehr für den Kuppelbalkon als für den Innenraum, das Panorama über die Dächer ist der eigentliche Reiz. Er schließt für Besucher während der Gottesdienste, prüfen Sie also den Plan, wenn Sie an einem Sonntag kommen.",
    },
    {
      slug: "topography-of-terror",
      citySlug: "berlin",
      name: "Topographie des Terrors",
      lat: 52.5075,
      lng: 13.3833,
      kind: "museum",
      needsBooking: false,
      tip: "Erbaut auf dem Gelände der ehemaligen Gestapo- und SS-Zentrale, ist dieses Dokumentationszentrum kostenlos und eine der ernüchterndsten, am besten erklärten Darstellungen des nationalsozialistischen Terrorapparats in der Stadt. Planen Sie mindestens 90 Minuten für die dichte Ausstellung im Innenraum ein, und lesen Sie die Freilufttafeln, die vorne entlang eines erhaltenen Mauerabschnitts verlaufen. Es liegt einen kurzen Weg vom Checkpoint Charlie, machen Sie die beiden also zusammen.",
    },
    {
      slug: "tiergarten",
      citySlug: "berlin",
      name: "Tiergarten",
      lat: 52.5145,
      lng: 13.3501,
      kind: "park",
      needsBooking: false,
      tip: "Berlins riesiger zentraler Park ist kostenlos und erstreckt sich vom Brandenburger Tor bis zum Zoo, ideal für einen Spaziergang oder eine Fahrradtour zwischen den Sehenswürdigkeiten der Mitte und Charlottenburg. Steigen Sie in der Mitte auf die Siegessäule (kleine Gebühr) für einen Blick die baumgesäumten Alleen hinunter, oder finden Sie den Biergarten am Café am Neuen See am Südrand in den warmen Monaten. An einem Sommersonntag sehen Sie Einheimische auf jedem Fleckchen Rasen grillen.",
    },
    {
      slug: "mauerpark",
      citySlug: "berlin",
      name: "Mauerpark mit Flohmarkt und Karaoke",
      lat: 52.5439,
      lng: 13.4025,
      kind: "experience",
      needsBooking: false,
      tip: "Sonntags richtet dieser ehemalige Todesstreifen-Park einen weitläufigen Flohmarkt sowie das legendäre Open-Air-Bearpit-Karaoke im steinernen Amphitheater ab dem frühen Nachmittag aus, beides kostenlos. Kommen Sie am späten Vormittag, um die Stände zu durchstöbern und an den Foodtrucks zu essen, dann schnappen Sie sich ein Bier und schauen zu, wie Fremde vor einem Publikum von Hunderten Lieder schmettern. Er läuft das ganze Jahr, ist aber an einem warmen Tag am besten, planen Sie ihn also für gutes Wetter ein.",
    },
    {
      slug: "gendarmenmarkt",
      citySlug: "berlin",
      name: "Gendarmenmarkt",
      lat: 52.5138,
      lng: 13.3925,
      kind: "sight",
      needsBooking: false,
      tip: "Oft der schönste Platz der Stadt genannt, ist dieser symmetrische Raum, gerahmt vom Deutschen und Französischen Dom und dem Konzerthaus, kostenlos zum Verweilen und Fotografieren, am besten im flachen Licht des frühen Morgens oder Abends. Im Dezember beherbergt er einen der besten Weihnachtsmärkte Berlins, der einen kleinen Eintritt verlangt, um die Menschenmengen überschaubar zu halten. Er ist zwei Gehminuten vom U-Bahnhof Französische Straße und nahe den gehobenen Cafés am Gendarmenmarkt.",
    },
    {
      slug: "tempelhofer-feld",
      citySlug: "berlin",
      name: "Tempelhofer Feld",
      lat: 52.4732,
      lng: 13.4017,
      kind: "park",
      needsBooking: false,
      tip: "Dieser stillgelegte Flughafen ist heute ein riesiger kostenloser öffentlicher Park, in dem Sie geradewegs die alten Rollbahnen entlanggehen, radeln oder skaten können, ein echtes Berliner Erlebnis ohne Entsprechung anderswo. Mieten Sie ein Fahrrad und fahren Sie die volle Länge einer ehemaligen Startbahn ab, oder bringen Sie ein Picknick mit und schauen Sie an windigen Tagen den Kitesurfern zu. Er schließt bei Einbruch der Dunkelheit mit Toren, die verriegelt werden, prüfen Sie also die saisonale Schließzeit, die an den Eingängen aushängt, bevor Sie es sich gemütlich machen.",
    },
    {
      slug: "ddr-museum",
      citySlug: "berlin",
      name: "DDR Museum",
      lat: 52.5192,
      lng: 13.4029,
      kind: "museum",
      needsBooking: false,
      tip: "Dieses zum Anfassen einladende Museum über das Alltagsleben im kommunistischen Ostdeutschland, an der Spree gegenüber dem Dom, ist unterhaltsam und interaktiv, mit einem Trabant zum Hineinsetzen und einer nachgebauten DDR-Wohnung. Bis zur Mittagszeit wird es eng und langsam, weil alles zum Anfassen und Öffnen gedacht ist, kommen Sie also gleich zur Öffnung um 9 Uhr oder in der letzten Stunde. Kaufen Sie das Ticket online, um die kleine Ticketschlange am Flussufer zu umgehen.",
    },
  ],

  itineraries: [
    {
      citySlug: "berlin",
      days: 2,
      summary:
        "Zwei Tage decken Berlins Wesentliches ab, aber die Stadt ist riesig und weitläufig, sodass 48 Stunden eine Hetze sind und Sie sich schnell zwischen den Vierteln bewegen. In zwei Tagen können Sie am ersten Tag den historischen Kern der Mitte machen, das Brandenburger Tor, die Reichstagskuppel, das Holocaust-Mahnmal, die Museumsinsel und den Gendarmenmarkt, dann geben Sie den zweiten Tag der Mauer- und Kalte-Kriegs-Geschichte, dem Checkpoint Charlie, der Topographie des Terrors und der East Side Gallery, mit einem Abendessen in Kreuzberg zum Abschluss. Was Sie streichen müssen: Charlottenburg, Prenzlauer Berg, das Tempelhofer Feld, die Seen und jede langsame Zeit in den Vierteln, dies ist also eine Höhepunkte-Tour, kein Berlin, das Sie kennenlernen. Es passt zu einem Wochenendtrip oder einem ersten Vorgeschmack, bevor Sie es mit Prag verbinden. Die Pflichten: melden Sie sich online für Ihren kostenlosen Termin an der Reichstagskuppel vor dem Abflug an, und kaufen Sie ein ABC-Tagesticket, sobald Sie landen, Kontrollen sind häufig und Bußgelder happig. Wohnen Sie in der Mitte, damit beide Vormittage nahe den Sehenswürdigkeiten beginnen. Ein dritter Tag ist das mit Abstand beste Upgrade, und Berlin will ihn wirklich.",
      stayNeighborhoodSlug: "mitte",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Historische Mitte: Tor, Kuppel, Museen",
          morning: [
            {
              poiSlug: "brandenburg-gate",
              text: "Beginnen Sie früh am Brandenburger Tor, bevor die Reisegruppen den Pariser Platz füllen, für Fotos der Säulen im Morgenlicht. Es ist kostenlos und offen, und alles am Vormittag liegt einen kurzen Weg von hier.",
              durationMin: 30,
            },
            {
              poiSlug: "reichstag",
              text: "Gehen Sie zwei Minuten zum Reichstag für Ihren vorgebuchten, kostenlosen Kuppeltermin und bringen Sie den Ausweis mit, der zu Ihrer Buchung passt, für die Sicherheitskontrolle auf Flughafenniveau. Steigen Sie mit dem kostenlosen Audioguide die Glasrampe hinauf für den Blick über das Regierungsviertel und die Stadt.",
              durationMin: 75,
            },
            {
              poiSlug: "holocaust-memorial",
              text: "Biegen Sie südlich zum Denkmal für die ermordeten Juden Europas ab, dem kostenlosen Feld aus Betonstelen einen kurzen Weg vom Tor. Gehen Sie in die absinkende Mitte, wo die Blöcke über Kopf aufragen, und besuchen Sie den unterirdischen Ort der Information, wenn er geöffnet ist.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              text: "Mittagessen an oder nahe Unter den Linden, dann schlendern Sie den großen Boulevard ostwärts Richtung Insel, vorbei an der Staatsoper und dem Bebelplatz. Halten Sie es kurz, der Nachmittag ist museumslastig.",
              durationMin: 75,
            },
            {
              poiSlug: "museum-island",
              text: "Verbringen Sie den Nachmittag auf der Museumsinsel mit einer kombinierten Bereichskarte und wählen Sie ein oder zwei Häuser, da das Pergamonmuseum wegen Sanierung bis etwa 2027 geschlossen ist. Das Neue Museum mit seiner Nofretete-Büste oder die Alte Nationalgalerie sind die stärksten Einzelentscheidungen.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "gendarmenmarkt",
              text: "Gehen Sie im Abendlicht zum Gendarmenmarkt für den symmetrischen Platz, gerahmt von seinen zwei Domen und dem Konzerthaus. Fotografieren Sie ihn, dann finden Sie ein Abendessen in den Straßen ringsum.",
              durationMin: 45,
            },
            {
              text: "Essen Sie in der zentralen Mitte zu Abend, buchen Sie überall im Voraus, was einen Namen hat, und krönen Sie den Abend mit einem Drink rund um die Höfe am Hackeschen Markt einen kurzen Weg nördlich. Es ist Ihre eine späte Nacht nahe den Sehenswürdigkeiten.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Die Mauer und das Berlin des Kalten Krieges",
          morning: [
            {
              poiSlug: "topography-of-terror",
              text: "Beginnen Sie an der Topographie des Terrors auf dem Gelände der ehemaligen Gestapo-Zentrale, kostenlos und offen, und planen Sie 90 Minuten für die dichte Ausstellung ein. Lesen Sie die Freilufttafeln entlang des erhaltenen Mauerabschnitts, bevor Sie gehen.",
              durationMin: 90,
            },
            {
              poiSlug: "checkpoint-charlie",
              text: "Gehen Sie ein paar Minuten zum Checkpoint Charlie und behandeln Sie das nachgebaute Häuschen und Schild als kurzen Fotostopp statt als Höhepunkt. Meiden Sie die bezahlten Kostümdarsteller und lesen Sie für die echte Geschichte die kostenlosen Freilufttafeln auf der Straße.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              text: "Nehmen Sie die U-Bahn oder S-Bahn ostwärts und essen Sie vor dem Mauerspaziergang in Friedrichshain zu Mittag. Das ist ein guter Moment, um einen frischen Teil Ihres Tagestickets zu entwerten, auf diesen Linien wird oft kontrolliert.",
              durationMin: 75,
            },
            {
              poiSlug: "east-side-gallery",
              text: "Gehen Sie die East Side Gallery ab, den kostenlosen, 1,3 km langen bemalten Mauerabschnitt entlang der Spree, vom Ende am Ostbahnhof in Richtung Oberbaumbrücke. Fotografieren Sie die berühmten Wandbilder, dann überqueren Sie die Brücke nach Kreuzberg.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Verbringen Sie den Abend in Kreuzberg rund um das Kottbusser Tor und den Landwehrkanal, essen Sie günstig und gut, vom Döner bis zur Bar am Kanal. Das ist das alternative Berlin, das die Sehenswürdigkeiten der Mitte Ihnen nicht zeigen.",
              durationMin: 150,
            },
          ],
        },
      ],
    },
    {
      citySlug: "berlin",
      days: 3,
      summary:
        "Ja, drei Tage sind die richtige Länge für Berlin, und das ist es, was wir für einen ersten Besuch einer so weitläufigen Stadt empfehlen. Es teilt sich sauber in drei: den historischen Kern der Mitte, das Brandenburger Tor, die Reichstagskuppel, das Holocaust-Mahnmal, die Museumsinsel und den Gendarmenmarkt am ersten Tag; die Mauer- und Kalte-Kriegs-Geschichte, den Checkpoint Charlie, die Topographie des Terrors und die East Side Gallery am zweiten Tag; und einen dritten Tag für die gelebte moderne Stadt, Prenzlauer Berg, den sonntäglichen Mauerpark-Markt und das weite Tempelhofer Feld. Sie bekommen die Wahrzeichen, die Geschichte und einen echten Tag im Viertel statt eines reinen Sightseeing-Sprints. Was trotzdem gestrichen wird: Charlottenburg, die Westseite und die Seen, was genau das ist, was ein vierter Tag hinzufügt. Das passt zu Erstbesuchern, Paaren und allen, die als Nächstes nach Prag weiterreisen. Wohnen Sie in Prenzlauer Berg: es ist ruhig, hübsch und setzt Sie direkt vor den Mauerpark, mit leichten Tram- und U-Bahn-Sprüngen in die Mitte. Melden Sie Ihren kostenlosen Termin an der Reichstagskuppel an und kaufen Sie ein ABC-Tagesticket, Kontrollen sind häufig.",
      stayNeighborhoodSlug: "prenzlauer-berg",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Historische Mitte: Tor, Kuppel, Museen",
          morning: [
            {
              poiSlug: "brandenburg-gate",
              text: "Beginnen Sie früh am Brandenburger Tor für die Säulen, bevor sich der Pariser Platz mit Reisegruppen füllt. Es ist kostenlos und offen, und es verankert eine Vormittagsrunde der drei wichtigsten Sehenswürdigkeiten der Mitte.",
              durationMin: 30,
            },
            {
              poiSlug: "reichstag",
              text: "Gehen Sie zum Reichstag für Ihren vorgebuchten, kostenlosen Kuppeltermin, mit dem Ausweis, der für die Sicherheitskontrolle zu Ihrer Buchung passt. Steigen Sie mit dem kostenlosen Audioguide die Glasrampe hinauf für den Blick über die Stadt und das Regierungsviertel.",
              durationMin: 75,
            },
            {
              poiSlug: "holocaust-memorial",
              text: "Gehen Sie südlich zum kostenlosen Denkmal für die ermordeten Juden Europas, einen kurzen Weg vom Tor. Gehen Sie in die Mitte, wo der Boden absinkt und die Stelen über Kopf aufragen, sehen Sie dann den unterirdischen Ort der Information, falls geöffnet.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              text: "Mittagessen nahe Unter den Linden, dann gehen Sie den Boulevard ostwärts Richtung Museumsinsel, vorbei am Bebelplatz und der Staatsoper. Ein entspannter Bummel, kein Marsch, da als Nächstes die Museen kommen.",
              durationMin: 90,
            },
            {
              poiSlug: "museum-island",
              text: "Geben Sie den Nachmittag der Museumsinsel mit einer kombinierten Bereichskarte und wählen Sie ein oder zwei Häuser, da das Pergamonmuseum wegen Arbeiten bis etwa 2027 geschlossen ist. Das Neue Museum mit Nofretete oder die Alte Nationalgalerie sind die besten Einzelentscheidungen.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "berlin-cathedral",
              text: "Wenn Sie Energie haben, steigen Sie am Ende des Nachmittags die 270 Stufen des Berliner Doms auf der Insel für den Blick vom Kuppelbalkon über die Spree hinauf. Andernfalls fotografieren Sie seine Fassade vom Lustgarten aus und ziehen weiter.",
              durationMin: 45,
            },
            {
              poiSlug: "gendarmenmarkt",
              text: "Gehen Sie zum Gendarmenmarkt für den schönsten Platz der Stadt, gerahmt von seinen zwei Domen, am besten im Abendlicht. Finden Sie ein Abendessen in den umliegenden Straßen und buchen Sie überall im Voraus, was gut bewertet ist.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Die Mauer und das Berlin des Kalten Krieges",
          morning: [
            {
              poiSlug: "topography-of-terror",
              text: "Beginnen Sie an der kostenlosen Topographie des Terrors auf dem ehemaligen Gestapo-Gelände und planen Sie 90 Minuten für die dichte, gut erklärte Ausstellung ein. Lesen Sie die Freilufttafeln entlang der erhaltenen Mauer davor, bevor Sie weiterziehen.",
              durationMin: 90,
            },
            {
              poiSlug: "checkpoint-charlie",
              text: "Gehen Sie zum nahen Checkpoint Charlie, ein kurzer Fotostopp am nachgebauten Übergang statt eines Höhepunkts. Ignorieren Sie die bezahlten Kostümdarsteller und lesen Sie für die Substanz die kostenlosen Straßentafeln.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "fernsehturm",
              text: "Nehmen Sie die U-Bahn zum Alexanderplatz und fahren Sie mit einem vorgebuchten Zeitfenster den Fernsehturm hinauf für den besten Blick über die flache Stadt, idealerweise gegen Sonnenuntergang. Essen Sie zuvor schnell auf dem Platz zu Mittag, oder danach, falls Ihr Termin früh liegt.",
              durationMin: 90,
            },
            {
              poiSlug: "east-side-gallery",
              text: "Fahren Sie ostwärts zur East Side Gallery und gehen Sie den kostenlosen, 1,3 km langen bemalten Mauerabschnitt entlang der Spree ab, vom Ostbahnhof in Richtung Oberbaumbrücke. Fotografieren Sie die berühmten Wandbilder, dann überqueren Sie die Brücke nach Kreuzberg.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Verbringen Sie den Abend in Friedrichshain oder Kreuzberg beiderseits des Flusses, essen Sie günstig und gut und trinken Sie dort, wo das junge Publikum es tut. Das ist die Nachtleben-Seite Berlins, teilen Sie sich also ein, falls morgen früh beginnt.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Modernes Berlin: Prenzlauer Berg, Mauerpark, Tempelhof",
          morning: [
            {
              text: "Beginnen Sie gemächlich mit einem langen Brunch in Prenzlauer Berg rund um den Kollwitzplatz oder die Kastanienallee, das lokale Sonntagsritual. Bummeln Sie unterwegs durch die restaurierten Mietshausstraßen und unabhängigen Läden.",
              durationMin: 90,
            },
            {
              poiSlug: "mauerpark",
              text: "Gehen Sie zum Mauerpark für den weitläufigen Sonntagsflohmarkt und ab dem frühen Nachmittag das kostenlose Open-Air-Bearpit-Karaoke im steinernen Amphitheater. Durchstöbern Sie die Stände, essen Sie an einem Foodtruck, dann schnappen Sie sich ein Bier und schauen dem Karaoke-Publikum zu.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "ddr-museum",
              text: "Gehen Sie zurück Richtung Zentrum für das zum Anfassen einladende DDR Museum an der Spree über das Alltagsleben im kommunistischen Ostdeutschland und kaufen Sie online, um die Schlange zu umgehen. Gehen Sie für den Trabant zum Hineinsetzen und die nachgebaute DDR-Wohnung, und halten Sie es unter einer Stunde, wenn die Menschenmengen wachsen.",
              durationMin: 75,
            },
            {
              poiSlug: "tempelhofer-feld",
              text: "Nehmen Sie die U-Bahn südwärts zum Tempelhofer Feld, dem kostenlosen ehemaligen Flughafen, und mieten Sie ein Fahrrad, um die volle Länge einer Startbahn abzufahren. Bringen Sie einen Snack mit und schauen Sie den Kitesurfern zu, aber beachten Sie, dass die Tore zur ausgeschilderten Dämmerungs-Schließzeit verriegelt werden.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              text: "Kehren Sie für ein entspanntes letztes Abendessen nahe Ihrer Basis nach Prenzlauer Berg zurück und buchen Sie einen Tisch am Kollwitzplatz oder in einer Seitenstraße. Beenden Sie den Abend mit einem ruhigen Drink nah am Bett, ohne eine Fahrt quer durch die Stadt zu planen.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "berlin",
      days: 4,
      summary:
        "Vier Tage sind der Idealpunkt für einen ersten Besuch in Berlin und verwandeln einen weitläufigen Sprint in einen echten Urlaub. Tag eins bis drei decken das Wesentliche ab: den historischen Kern der Mitte, die Mauer- und Kalte-Kriegs-Geschichte und die moderne Stadt aus Prenzlauer Berg, Mauerpark und Tempelhofer Feld, jeweils ohne Hetze. Tag vier ist das Ventil, und er teilt sich in zwei Richtungen: entweder der elegante Westteil rund um das Schloss Charlottenburg und den Ku'damm, oder ein Halbtagesausflug hinaus zu Potsdams Sanssouci-Schlössern oder der ernüchternden Gedenkstätte Sachsenhausen, beide eine leichte S-Bahn- oder Regionalfahrt vom Zentrum. Diese Länge passt zu Reisenden, die den Gewaltmarsch hassen, zu Paaren und zu allen, deren Flüge die Reise unpraktisch einrahmen. Für vier Tage empfehlen wir eine Basis in Kreuzberg: Sie haben ein langsameres Tempo akzeptiert, und seine Bars am Kanal, das Streetfood und die langen Nächte machen das Heimkommen an jedem Abend zum besten Teil des Tages. Über vier Tage hinaus fügen Sie im Sommer die Seen oder einen ganzen Potsdam-Tag hinzu. Melden Sie Ihren kostenlosen Termin an der Reichstagskuppel an und kaufen Sie ein ABC-Tagesticket, sobald Sie ankommen.",
      stayNeighborhoodSlug: "kreuzberg",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Historische Mitte: Tor, Kuppel, Museen",
          morning: [
            {
              poiSlug: "brandenburg-gate",
              text: "Beginnen Sie früh am Brandenburger Tor für die Säulen, bevor die Menschenmengen den Pariser Platz füllen. Kostenlos und offen, verankert es die Vormittagsrunde der großen Wahrzeichen der Mitte.",
              durationMin: 30,
            },
            {
              poiSlug: "reichstag",
              text: "Gehen Sie zum Reichstag für Ihren vorgebuchten, kostenlosen Kuppeltermin und bringen Sie den passenden Ausweis für die Sicherheitskontrolle mit. Steigen Sie mit dem kostenlosen Audioguide die Glasrampe hinauf für den Blick über die Stadt und das Regierungsviertel.",
              durationMin: 75,
            },
            {
              poiSlug: "holocaust-memorial",
              text: "Biegen Sie südlich zum kostenlosen Denkmal für die ermordeten Juden Europas ab, einen kurzen Weg entfernt. Gehen Sie in die absinkende Mitte, wo die Stelen über Kopf aufragen, sehen Sie dann den unterirdischen Ort der Information, falls geöffnet.",
              durationMin: 45,
            },
          ],
          afternoon: [
            {
              text: "Mittagessen nahe Unter den Linden, dann gehen Sie den Boulevard ostwärts Richtung Museumsinsel, vorbei am Bebelplatz. Ein entspannter Bummel, da Sie vier Tage haben und nicht hetzen müssen.",
              durationMin: 90,
            },
            {
              poiSlug: "museum-island",
              text: "Verbringen Sie den Nachmittag auf der Museumsinsel mit einer kombinierten Bereichskarte und wählen Sie ein oder zwei Häuser, da das Pergamonmuseum bis etwa 2027 geschlossen ist. Das Neue Museum mit Nofretete oder die Alte Nationalgalerie sind die stärksten Entscheidungen.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "gendarmenmarkt",
              text: "Gehen Sie zum Gendarmenmarkt für den schönsten Platz der Stadt im Abendlicht, gerahmt von seinen zwei Domen. Finden Sie ein Abendessen in den umliegenden Straßen der Mitte und buchen Sie überall im Voraus, was gut bewertet ist.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Die Mauer und das Berlin des Kalten Krieges",
          morning: [
            {
              poiSlug: "topography-of-terror",
              text: "Beginnen Sie an der kostenlosen Topographie des Terrors auf dem ehemaligen Gestapo-Gelände und planen Sie 90 Minuten für die Ausstellung ein. Lesen Sie die Freilufttafeln entlang der erhaltenen Mauer, bevor Sie gehen.",
              durationMin: 90,
            },
            {
              poiSlug: "checkpoint-charlie",
              text: "Gehen Sie zum Checkpoint Charlie, ein kurzer Fotostopp am nachgebauten Übergang. Meiden Sie die bezahlten Kostümdarsteller und lesen Sie für die echte Geschichte die kostenlosen Straßentafeln.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "fernsehturm",
              text: "Nehmen Sie die U-Bahn zum Alexanderplatz und fahren Sie mit einem vorgebuchten Termin den Fernsehturm hinauf für den besten Blick über die flache Stadt. Mittagessen auf dem Platz rund um Ihren Termin.",
              durationMin: 90,
            },
            {
              poiSlug: "east-side-gallery",
              text: "Fahren Sie zur East Side Gallery und gehen Sie den kostenlosen, 1,3 km langen bemalten Mauerabschnitt entlang der Spree ab, vom Ostbahnhof in Richtung Oberbaumbrücke. Überqueren Sie die Brücke nach Kreuzberg, wo Sie wohnen.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Verbringen Sie den Abend zu Hause in Kreuzberg rund um das Kottbusser Tor und den Kanal, essen Sie günstig und gut und trinken Sie dort, wo die Einheimischen es tun. Sie wohnen hier, es gibt also keine Rückfahrt zu planen.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Modernes Berlin: Prenzlauer Berg, Mauerpark, Tempelhof",
          morning: [
            {
              text: "Fahren Sie hinauf nach Prenzlauer Berg für einen langen Brunch rund um den Kollwitzplatz, das lokale Wochenendritual, und bummeln Sie durch die restaurierten Mietshausstraßen. Ein langsamer Start in einen Tag im Viertel.",
              durationMin: 90,
            },
            {
              poiSlug: "mauerpark",
              text: "Gehen Sie zum Mauerpark für den Sonntagsflohmarkt und ab dem frühen Nachmittag das kostenlose Open-Air-Bearpit-Karaoke im steinernen Amphitheater. Durchstöbern Sie die Stände, essen Sie an einem Foodtruck, dann schauen Sie mit einem Bier dem Karaoke zu.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "tempelhofer-feld",
              text: "Nehmen Sie die U-Bahn südwärts zum Tempelhofer Feld, dem kostenlosen ehemaligen Flughafen, und mieten Sie ein Fahrrad, um die volle Länge einer Startbahn abzufahren. Bringen Sie ein Picknick mit, schauen Sie den Kitesurfern zu und beachten Sie, dass die Tore zur ausgeschilderten Dämmerungszeit verriegelt werden.",
              durationMin: 120,
            },
            {
              poiSlug: "ddr-museum",
              text: "Falls die Zeit auf dem Rückweg reicht, kehren Sie im zum Anfassen einladenden DDR Museum an der Spree für den Trabant zum Hineinsetzen und die nachgebaute DDR-Wohnung ein und kaufen Sie online, um die Schlange zu umgehen. Halten Sie es kurz, eine Stunde reicht.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              text: "Kehren Sie für Abendessen und Drinks nach Kreuzberg zurück und probieren Sie eine Naturweinbar oder eine Adresse entlang des Landwehrkanals. Das ist das Element des Viertels, verweilen Sie also.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "West-Berlin oder ein Tagesausflug nach Potsdam",
          morning: [
            {
              text: "Wählen Sie Ihre Richtung für Tag vier. Für den Westteil fahren Sie mit der U-Bahn zum Schloss Charlottenburg, der barocken ehemaligen königlichen Residenz mit förmlichen Gärten, und planen Sie ein paar Stunden für die Prunkräume und die Anlage ein. Für einen Tagesausflug stattdessen nehmen Sie den Regionalzug hinaus nach Potsdam und in den Park Sanssouci für die Rokoko-Schlösser und terrassierten Weinberge.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              text: "Wenn Sie im Westen geblieben sind, schlendern Sie die Einkaufsmeile Kurfürstendamm entlang und sehen Sie den zerstörten Turm der Kaiser-Wilhelm-Gedächtniskirche, dann trinken Sie einen Kaffee in einem klassischen Charlottenburger Café. Wenn Sie nach Potsdam gefahren sind, gehen Sie vor der Rückfahrt durch das Holländische Viertel und die Altstadt. Als schwerere Alternative verbringen Sie den Tag an der Gedenkstätte des Konzentrationslagers Sachsenhausen nördlich der Stadt, ein ernüchternder S-Bahn- und Bus-Ausflug, der einen ganzen Nachmittag braucht.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              poiSlug: "tiergarten",
              text: "Zurück im Zentrum gehen Sie in der goldenen Stunde einen Teil des Tiergartens ab, oder finden Sie in den warmen Monaten seinen Biergarten Café am Neuen See am Südrand. Ein grüner, leichter Ausklang nach dem Ausflug.",
              durationMin: 75,
            },
            {
              text: "Buchen Sie ein Abschiedsessen zurück in Kreuzberg und geben Sie bei Ihrem letzten Berliner Essen etwas mehr aus, an einer Adresse, die Sie zuvor ausgekundschaftet haben. Beenden Sie den Abend mit einem Schlummertrunk am Kanal, einen kurzen Weg vom Bett.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
  ],
};

export default berlinDe;
