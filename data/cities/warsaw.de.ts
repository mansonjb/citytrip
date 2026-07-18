import type { CityData } from "../types";

const warsawDe: CityData = {
  city: {
    slug: "warsaw",
    name: "Warschau",
    country: "Polen",
    countrySlug: "poland",
    lat: 52.2297,
    lng: 21.0122,
    tier: 2,
    idealDays: 2,
    durations: [2, 3],
    airportCode: "WAW",
    airportToCenter:
      "Der Flughafen Warschau-Chopin liegt etwa 8 km südlich des Zentrums, sodass die Transfers schnell und günstig sind. Die Züge S2 und S3 sowie der Stadtbus 175 fahren vom Terminal ins Zentrum und in die Altstadt in rund 20 bis 25 Minuten für etwa 5 PLN auf einem einzigen ZTM-Ticket, das für die Fahrt sämtliche ZTM-Verkehrsmittel abdeckt. Ein Uber oder Taxi kostet grob 40 bis 60 PLN und braucht außerhalb der Stoßzeiten ähnlich lange. Beachten Sie, dass der von manchen Billigfluglinien genutzte Billigflughafen Modlin etwa 40 km nördlich der Stadt liegt und über einen eigenen Shuttlebus erreicht wird, kalkulieren Sie also zusätzliche Zeit ein, wenn Sie dort landen.",
    centerWalkable: true,
    bestMonths: [5, 6, 7, 9],
    avoidMonths: [1],
    monthlyNotes: {
      1: "Der kälteste Monat, mit Höchstwerten um 1 Grad, Tiefstwerten deutlich unter dem Gefrierpunkt und kurzen grauen Tagen, die oft Schnee bringen. Die Sehenswürdigkeiten sind ruhig und die Hotelpreise erreichen ihren Jahrestiefststand, und die Milchbars und Kellerbars tragen die Stimmung, wenn es zu kalt ist, um draußen zu verweilen; packen Sie für echten Winter.",
      2: "Noch fest im Winter bei rund 2 Grad mit häufigem Frost und Schnee, also ein günstiges, mengenfreies Zeitfenster für die Innenraummuseen und den Kulturpalast. Die Tage werden ein wenig länger und die Wodkabars von Praga sorgen für einen warmen Abend; rechnen Sie mit den niedrigsten Preisen des Jahres.",
      3: "Die Höchstwerte klettern Richtung 7 Grad und die Stadt beginnt zu tauen, auch wenn früher Schnee und Kälteeinbrüche noch vorkommen. Die Besucherzahlen bleiben gering und die Preise liegen unter dem Frühlingshoch, ein solides Preis-Leistungs-Fenster, wenn Sie sich für wechselhaftes Wetter kleiden.",
      4: "Richtiger Frühling bei rund 14 Grad, mit Blüten im Lazienki-Park und den ersten Cafe-Tischen im Freien entlang der Nowy Swiat. Die Wochenenden um Ostern werden geschäftig, buchen Sie also einen Slot für POLIN oder das Museum des Warschauer Aufstands im Voraus; die kostenlosen Chopin-Konzerte im Lazienki-Park haben noch nicht begonnen.",
      5: "Einer der besten Monate, Höchstwerte um 20 Grad und lange helle Abende, und die kostenlosen Chopin-Klavierkonzerte beginnen an seinem Denkmal im Lazienki-Park an Sonntagnachmittagen bis in den späten September. Es ist die Hochphase der Nebensaison, also festigen sich die Preise und die Weichselboulevards füllen sich am Abend.",
      6: "Warm bei rund 23 Grad mit den längsten Tagen des Jahres und geschäftigen Terrassen in Powisle und Praga. Die sonntäglichen Chopin-Konzerte im Lazienki-Park gehen weiter und das Flussufer erwacht nach Einbruch der Dunkelheit; buchen Sie Wochenendzimmer früh, da die Stadt auf vollen Touren läuft.",
      7: "Hochsommer, Höchstwerte um 24 Grad und warme Abende, auch wenn kontinentale Gewitter an manchen Nachmittagen durchziehen. Die Chopin-Konzerte laufen jeden Sonntag im Lazienki-Park, die Strandbars an der Weichsel sind voll, und dies ist das geschäftigste und teuerste Zeitfenster, erledigen Sie die Sehenswürdigkeiten im Freien also früh.",
      8: "Dieselbe Sommerhitze um 24 Grad, doch die Stimmung wandelt sich am 1. August, wenn um 17 Uhr die Luftschutzsirenen über die ganze Stadt heulen für den Jahrestag des Warschauer Aufstands und alle für eine Minute auf der Straße innehalten. Es ist ein bewegender, ernster Moment, den zu erleben sich lohnt; der Rest des Monats bleibt warm, lebendig und geschäftig.",
      9: "Höchstwerte um 19 Grad, dünner werdende Menschenmengen nach der ersten Woche und angenehmes Wetter zum Gehen, was diesen Monat zur klugen Alternative zum Sommer macht. Die letzten kostenlosen Chopin-Konzerte erklingen Mitte des Monats im Lazienki-Park und das Licht wird golden über dem Fluss; die Preise lassen nach.",
      10: "Klarer Herbst bei rund 13 Grad mit kräftiger Färbung im Lazienki-Park und entlang der Weichsel-Böschung. Die Touristenzahlen fallen nach Monatsmitte deutlich und die Hotelpreise folgen; nehmen Sie eine warme Schicht für die Abende mit, die schnell kalt werden, sobald die Sonne untergeht.",
      11: "Grau, kalt und ruhig bei rund 6 Grad mit kurzen Tagen und den ersten Frösten, bis in der letzten Woche der Weihnachtsmarkt und die Lichter in der Altstadt aufgehen und die ganze Stimmung heben. Der späte November ist ein idealer Zeitpunkt für Marktstände und Glühwein ohne die Wochenenddichte des Dezembers.",
      12: "Der Altstädter Weihnachtsmarkt läuft den ganzen Monat rund um das Königsschloss und den Marktplatz, mit über die mittelalterlichen Fassaden gespannten Lichtern, Glühwein und deftigem Essen, und er zieht dichte Wochenendmengen an. Rechnen Sie mit Tiefstwerten unter dem Gefrierpunkt und möglichem Schnee sowie Dezemberpreisen über der Winternorm, buchen Sie also früh.",
    },
    climate: {
      1: { highC: 1, lowC: -4, rainyDays: 9 },
      2: { highC: 2, lowC: -4, rainyDays: 8 },
      3: { highC: 7, lowC: -1, rainyDays: 9 },
      4: { highC: 14, lowC: 3, rainyDays: 8 },
      5: { highC: 20, lowC: 8, rainyDays: 10 },
      6: { highC: 23, lowC: 11, rainyDays: 11 },
      7: { highC: 24, lowC: 13, rainyDays: 11 },
      8: { highC: 24, lowC: 13, rainyDays: 10 },
      9: { highC: 19, lowC: 9, rainyDays: 9 },
      10: { highC: 13, lowC: 4, rainyDays: 9 },
      11: { highC: 6, lowC: 1, rainyDays: 10 },
      12: { highC: 2, lowC: -2, rainyDays: 10 },
    },
    budgetLevel: "mid",
    budgetPerDay: { budget: 55, mid: 110, high: 220 },
    tagline:
      "Eine aus Trümmern wiederaufgebaute Hauptstadt, in der eine märchenhafte Altstadt neben stalinistischen Türmen und gläsernen Wolkenkratzern steht.",
    heroIntro:
      "Warschaus Altstadt sieht mittelalterlich aus, wurde aber Ziegel für Ziegel wiederaufgebaut, nachdem der Krieg sie dem Erdboden gleichmachte, und zwar so getreu, dass sie heute zum UNESCO-Welterbe zählt. Die ganze Stadt ist eine Geschichte von Zerstörung und trotzigem Wiederaufbau, mit Wucht erzählt in den hervorragenden Museen des Warschauer Aufstands und POLIN, und sie belohnt Reisende, die Substanz über Postkartenhübschheit stellen. Rund um den historischen Kern erwarten Sie ein grünes Flussufer, der Chopin-Park mit seinen kostenlosen Sommerkonzerten und günstiges, deftiges Milchbar-Essen. Sie ist weitläufiger und moderner als Krakau, aber sie hat echte Tiefe, und zwei oder drei Tage lassen Sie sie spüren.",
    accent: { from: "#C0433A", to: "#3E5673", ink: "#2A1616" },
    neighborhoodSlugs: [
      "old-town-stare-miasto",
      "srodmiescie-centrum",
      "praga",
      "powisle",
      "nowy-swiat-krakowskie",
    ],
    nearbyCitySlugs: ["krakow"],
  },

  neighborhoods: [
    {
      slug: "old-town-stare-miasto",
      citySlug: "warsaw",
      name: "Altstadt (Stare Miasto)",
      lat: 52.2497,
      lng: 21.0122,
      bestFor: ["first-time", "romantic"],
      vibe: "Die wiederaufgebaute UNESCO-Altstadt versammelt pastellfarbene Kaufmannshäuser rund um den Marktplatz und das Königsschloss, alle nach dem Krieg aus Trümmern rekonstruiert und beim Gehen überzeugend mittelalterlich. Sie ist der stimmungsvollste Teil der Stadt und die naheliegende Basis für den ersten Besuch, auch wenn sie tagsüber Reisegruppen anzieht und sich in Stille leert, sobald die Restaurants schließen. Quartieren Sie sich hier ein für die Postkartenkulisse und den kurzen Weg zur Königsroute.",
      pros: [
        "Jede große Altstadt-Sehenswürdigkeit, der Marktplatz, das Königsschloss und die Barbakane, vor Ihrer Tür",
        "Wirklich stimmungsvolle Abende, sobald die Tagesmengen dünner werden und die Fassaden beleuchtet sind",
        "Kurzer Fußweg die Krakowskie Przedmiescie hinunter ins Zentrum und zur Nowy Swiat",
      ],
      cons: [
        "Die touristisch teuersten Restaurants der Stadt umringen den Marktplatz",
        "Ruhig und spätnachts ein wenig ausgestorben, da hier nur wenige Einheimische wohnen",
        "Kopfsteinpflaster und Stufen machen es mit Rollkoffern umständlich",
      ],
    },
    {
      slug: "srodmiescie-centrum",
      citySlug: "warsaw",
      name: "Srodmiescie (Centrum)",
      lat: 52.2319,
      lng: 21.0067,
      bestFor: ["first-time", "family"],
      vibe: "Das moderne Zentrum breitet sich rund um den Palast der Kultur und Wissenschaft, die Nowy Swiat und die gläsernen Wolkenkratzer aus und ist die praktische, am besten angebundene Basis der Stadt. Beide Metrolinien und die meisten Straßenbahnen kreuzen hier, die Hotels decken die volle Preisspanne ab und alles ist eine Straßenbahnfahrt oder einen Fußweg entfernt. Wählen Sie es für Bequemlichkeit und Preis-Leistung statt Altstadtcharme.",
      pros: [
        "Beste Verkehrsanbindung der Stadt, mit beiden Metrolinien und dem Hauptbahnhof in der Nähe",
        "Volle Auswahl an Hotels in jeder Preisklasse, dazu Geschäfte, Kinos und Restaurants",
        "Zentral, um die Altstadt, den Lazienki-Park und Praga gleichermaßen zu erreichen",
      ],
      cons: [
        "Geschäftig, verkehrsreich und arm an altweltlicher Atmosphäre",
        "Das Gebiet direkt am Kulturpalast wirkt geschäftsmäßig und kann nachts ausgestorben sein",
        "Weniger Charakter als die Altstadt oder die Viertel am Flussufer",
      ],
    },
    {
      slug: "praga",
      citySlug: "warsaw",
      name: "Praga",
      lat: 52.2528,
      lng: 21.0361,
      bestFor: ["nightlife", "local"],
      vibe: "Das raue, künstlerische Ostufer jenseits der Weichsel überstand den Krieg weitgehend unversehrt, sodass seine Backsteinmietshäuser das echte Vorkriegs-Warschau sind, heute übergeben an Studios, Bars und Galerien. Die Zabkowska-Straße, das Neon-Museum und die Wodkabrennerei Koneser verankern eine kantige, kreative Szene, die mehr Einheimische als Touristen anzieht. Quartieren Sie sich hier ein für Nachtleben und Charakter statt für die Nähe zu den Sehenswürdigkeiten.",
      pros: [
        "Das kreativste Nachtleben der Stadt, von den Bars der Zabkowska-Straße bis zum Koneser-Innenhof",
        "Echte Vorkriegsarchitektur, die der Kriegszerstörung entging",
        "Das Neon-Museum und eine starke Galerie- und Studioszene",
      ],
      cons: [
        "Stellenweise raubeiniger und nachts am besten mit normalem Stadtgespür zu durchqueren",
        "Eine Flussüberquerung von der Altstadt und den Hauptsehenswürdigkeiten entfernt",
        "Weniger klassische Hotels, mehr Apartments und Hostels",
      ],
    },
    {
      slug: "powisle",
      citySlug: "warsaw",
      name: "Powisle",
      lat: 52.2411,
      lng: 21.0289,
      bestFor: ["local", "budget"],
      vibe: "Das hippe Flussuferviertel liegt unterhalb der Böschung zwischen dem Zentrum und der Weichsel und ist zum jungen Warschau der Studentenbars, Cafes und der zurückgewonnenen Flussboulevards geworden. Das Kopernikus-Wissenschaftszentrum und die Dachgärten der Universitätsbibliothek liegen hier, und der ganze Streifen erwacht an warmen Abenden. Quartieren Sie sich hier ein für einen einheimischen, preiswerten Aufenthalt in Gehweite von Wasser und Zentrum.",
      pros: [
        "Die Weichselboulevards und die Strandbars sind einen kurzen Weg bergab entfernt",
        "Entspannte Bars und Cafes zu Studentenpreisen statt Touristenpreisen",
        "Zu Fuß erreichbar zur Nowy Swiat, zum Zentrum und zum Kopernikus-Wissenschaftszentrum",
      ],
      cons: [
        "Die Böschung bedeutet einen Aufstieg zurück ins Zentrum und in die Altstadt",
        "Weniger große Sehenswürdigkeiten in den unmittelbaren Straßen",
        "Kleinerer Hotelbestand, überwiegend Pensionen und Apartments",
      ],
    },
    {
      slug: "nowy-swiat-krakowskie",
      citySlug: "warsaw",
      name: "Nowy Swiat und Krakowskie Przedmiescie",
      lat: 52.2385,
      lng: 21.0175,
      bestFor: ["romantic", "first-time"],
      vibe: "Der Boulevard der Königsroute verläuft von der Altstadt hinunter durch die Krakowskie Przedmiescie und die Nowy Swiat, gesäumt von Palästen, Kirchen, der Universität und den vornehmsten Cafes der Stadt. Er ist das elegante Rückgrat Warschaus, von Ende zu Ende zu Fuß, und stellt Sie zwischen die Altstadt und das Zentrum mit dem Pfad der Chopin-Bänke unter den Füßen. Quartieren Sie sich hier ein für einen zentralen, romantischen Aufenthalt mit Cafe-Leben vor der Tür.",
      pros: [
        "Die schönste Straße der Stadt, mit Palästen, Cafes und der Universität",
        "Auf halbem Weg zwischen der Altstadt und dem Zentrum, zu beiden zu Fuß",
        "Die musikalischen Chopin-Bänke und die Sehenswürdigkeiten der Königsroute entlang des Weges",
      ],
      cons: [
        "Von Cafes gesäumt und begehrt, daher liegen die Zimmerpreise über dem Stadtdurchschnitt",
        "Geschäftig mit Fußgängerverkehr und Veranstaltungen, besonders an Sommerwochenenden",
        "Ein Teil des Boulevards wird für den Verkehr gesperrt, was das Absetzen mit dem Taxi erschweren kann",
      ],
    },
  ],

  pois: [
    {
      slug: "old-town-market-square",
      citySlug: "warsaw",
      name: "Der Altstädter Marktplatz und die Meerjungfrau-Statue",
      lat: 52.2497,
      lng: 21.0122,
      kind: "sight",
      needsBooking: false,
      tip: "Der Platz und seine bronzene Syrenka-Meerjungfrau, das Schwert-und-Schild-Symbol Warschaus, sind kostenlos und rund um die Uhr zugänglich, aber kommen Sie vor 10 Uhr oder nach 20 Uhr, um die wiederaufgebauten Fassaden ohne die Tagesmengen zu fotografieren. Denken Sie daran, dass der ganze Platz nach 1945 aus Trümmern rekonstruiert wurde, lesen Sie also die in der Nähe ausgestellten alten Vorkriegsfotos, um zu begreifen, was wiederaufgebaut wurde, und meiden Sie die Restaurants am Platz, die die teuersten der Stadt sind.",
    },
    {
      slug: "royal-castle-castle-square",
      citySlug: "warsaw",
      name: "Das Königsschloss und der Schlossplatz",
      lat: 52.2478,
      lng: 21.0136,
      kind: "sight",
      needsBooking: false,
      tip: "Das wiederaufgebaute Königsschloss beherbergt restaurierte Prunkräume und zwei Rembrandts, und der Eintritt auf der Hauptroute ist an einem Tag pro Woche kostenlos, meist an einem Wochentag, prüfen Sie also die Schlossseite vor Ihrem Besuch und rechnen Sie an diesem Tag mit einer Schlange. Die Sigismundsäule auf dem Schlossplatz davor ist das älteste weltliche Denkmal der Stadt und der klassische Treffpunkt; planen Sie etwa neunzig Minuten für das Schlossinnere ein.",
    },
    {
      slug: "barbican-city-walls",
      citySlug: "warsaw",
      name: "Die Barbakane und die mittelalterlichen Stadtmauern",
      lat: 52.2508,
      lng: 21.0106,
      kind: "sight",
      needsBooking: false,
      tip: "Die rote Backstein-Barbakane und der umliegende Abschnitt der rekonstruierten mittelalterlichen Stadtmauern sind kostenlos zu durchqueren und verbinden die Altstadt in wenigen Minuten mit der Neustadt. Schauen Sie im Sommer vorbei, wenn Straßenmusiker und Handwerksverkäufer sich entlang der Mauern aufstellen, und folgen Sie den Wällen herum für den ruhigsten und schönsten Zugang zum Marktplatz von Norden.",
    },
    {
      slug: "krakowskie-przedmiescie-royal-route",
      citySlug: "warsaw",
      name: "Krakowskie Przedmiescie und die Königsroute",
      lat: 52.2411,
      lng: 21.0150,
      kind: "experience",
      needsBooking: false,
      tip: "Dieser prächtige Boulevard vom Schlossplatz hinunter zur Nowy Swiat ist kostenlos zu begehen und gesäumt von Palästen, Kirchen und der Universität, und ein Teil wird an Wochenenden für den Verkehr gesperrt, was ihn zu Fuß angenehm macht. Halten Sie Ausschau nach den schwarzen Chopin-Bänken entlang der Route, die auf Knopfdruck dreißig Sekunden seiner Musik spielen, und treten Sie in die Heilig-Kreuz-Kirche ein, um die Säule zu sehen, die das Herz des Komponisten birgt.",
    },
    {
      slug: "palace-of-culture-science",
      citySlug: "warsaw",
      name: "Der Palast der Kultur und Wissenschaft",
      lat: 52.2318,
      lng: 21.0060,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Kaufen Sie ein Ticket für die Aussichtsterrasse im 30. Stock, die täglich öffnet und den weitesten Blick über die ganze Stadt bietet, und gehen Sie gegen Sonnenuntergang hinauf für das beste Licht. Der Turm aus den 1950ern war ein Geschenk Stalins, dem die Polen noch immer ambivalent gegenüberstehen, und die Einheimischen scherzen, er habe genau deshalb den besten Blick, weil er der eine Ort ist, von dem aus man den Palast selbst nicht sehen kann; im Sommer bilden sich Schlangen, gehen Sie also früh oder spät.",
    },
    {
      slug: "lazienki-park",
      citySlug: "warsaw",
      name: "Der Lazienki-Park und der Palast auf der Insel",
      lat: 52.2149,
      lng: 21.0355,
      kind: "park",
      needsBooking: false,
      tip: "Dies ist der prächtigste Park der Stadt, kostenlos zugänglich, mit Pfauen, dem Palast auf der Insel und dem riesigen Chopin-Denkmal, und an Sonntagnachmittagen von Mitte Mai bis Ende September erklingen kostenlose Open-Air-Klavierkonzerte an der Statue um 12 und 16 Uhr. Bringen Sie eine Decke mit und kommen Sie früh für einen Platz nahe dem Denkmal, und verbinden Sie den Besuch mit den Palastinnenräumen, für die ein separates Ticket anfällt.",
    },
    {
      slug: "wilanow-palace",
      citySlug: "warsaw",
      name: "Schloss Wilanow",
      lat: 52.1650,
      lng: 21.0905,
      kind: "sight",
      needsBooking: false,
      tip: "Oft das polnische Versailles genannt, liegt diese barocke Königsresidenz mit formalen Gärten etwa 10 km südlich des Zentrums und ist mit dem Bus 116 oder 180 in rund 40 Minuten zu erreichen, planen Sie also einen halben Tag ein. Der Eintritt in die Schlossräume ist an einem Tag pro Woche kostenlos, meist donnerstags, und für die Gärten fällt eine kleine separate Gebühr an; gehen Sie am Morgen, um den Reisebussen zuvorzukommen und im Sommer den Rosengarten zu sehen.",
    },
    {
      slug: "polin-museum",
      citySlug: "warsaw",
      name: "POLIN, Museum der Geschichte der polnischen Juden",
      lat: 52.2495,
      lng: 20.9930,
      kind: "museum",
      needsBooking: true,
      tip: "Buchen Sie online ein Ticket mit Zeitfenster, denn die Hauptausstellung, die tausend Jahre polnisch-jüdischen Lebens umspannt, ist beliebt und die Eintrittsslots sind am Wochenende ausverkauft. Das Gebäude steht auf dem Grund des ehemaligen Kriegsghettos gegenüber dem Denkmal der Ghettohelden, und die Dauerausstellung ist an einem Tag pro Woche kostenlos, meist donnerstags; planen Sie mindestens zwei bis drei Stunden im Inneren ein.",
    },
    {
      slug: "warsaw-rising-museum",
      citySlug: "warsaw",
      name: "Das Museum des Warschauer Aufstands",
      lat: 52.2325,
      lng: 20.9810,
      kind: "museum",
      needsBooking: true,
      tip: "Dieses immersive Museum über den Aufstand von 1944 gegen die Nazi-Besatzung ist unverzichtbar und wird sehr voll, buchen Sie also online ein Ticket mit Zeitfenster und treffen Sie zur Öffnung ein; montags ist es kostenlos, was zugleich der meistbesuchte Tag ist. Geben Sie ihm mindestens zwei Stunden, verpassen Sie nicht den 3D-Film der zerstörten Stadt oder den nachgebauten Kanal, durch den Sie kriechen, und beachten Sie, dass es einen zehnminütigen Fußweg oder eine kurze Straßenbahnfahrt westlich des Zentrums liegt.",
    },
    {
      slug: "praga-neon-koneser",
      citySlug: "warsaw",
      name: "Praga: Neon-Museum und Koneser",
      lat: 52.2533,
      lng: 21.0430,
      kind: "experience",
      needsBooking: false,
      tip: "Überqueren Sie die Weichsel nach Praga für das Neon-Museum, das leuchtende Schilder aus der Zeit des Kalten Krieges in einer ehemaligen Fabrik sammelt und täglich für ein kleines Ticket geöffnet ist, und den Koneser-Komplex, eine rote Backstein-Wodkabrennerei, die zu einem Innenhof aus Bars, Geschäften und dem Polnischen Wodka-Museum wurde. Kommen Sie am späten Nachmittag in den Abend hinein, wenn sich die Bars der Zabkowska-Straße füllen, und behandeln Sie es als halben Tag abseits des touristischen Zentrums.",
    },
    {
      slug: "vistula-copernicus-centre",
      citySlug: "warsaw",
      name: "Die Weichselboulevards und das Kopernikus-Wissenschaftszentrum",
      lat: 52.2415,
      lng: 21.0287,
      kind: "experience",
      needsBooking: true,
      tip: "Die zurückgewonnenen Flussuferboulevards unterhalb von Powisle sind kostenlos und am Abend am schönsten, wenn Strandbars und Essensstände das Wasser säumen und der Multimediabrunnen an Sommerwochenendnächten Lichtshows spielt. Daneben ist das Kopernikus-Wissenschaftszentrum ein Mitmachmuseum, das für Familien hervorragend, aber ausverkauft ist, buchen Sie also im Voraus online ein Ticket mit Zeitfenster und planen Sie ein paar Stunden im Inneren ein.",
    },
    {
      slug: "milk-bar-bar-mleczny",
      citySlug: "warsaw",
      name: "Eine Milchbar (Bar Mleczny)",
      lat: 52.2360,
      lng: 21.0170,
      kind: "food",
      needsBooking: false,
      tip: "Diese schnörkellosen Kantinen aus kommunistischer Zeit servieren noch immer Pierogi, Suppen und Schnitzel für ein paar Euro, und ein voller Teller überschreitet selten 25 PLN, was sie zur günstigsten richtigen Mahlzeit der Stadt macht. Der Bar Prasowy an der Marszalkowska ist ein bekannter Überlebender; bestellen Sie am Tresen, rechnen Sie mit einer rein polnischen Speisekarte und bargeldfreundlichem Service, und gehen Sie zur Mittagszeit, wenn das Essen am frischesten und der Durchlauf am schnellsten ist.",
    },
    {
      slug: "zelazowa-wola-daytrip",
      citySlug: "warsaw",
      name: "Tagesausflug nach Zelazowa Wola oder Palmiry",
      lat: 52.2510,
      lng: 20.4200,
      kind: "experience",
      needsBooking: false,
      tip: "Chopins Geburtsort in Zelazowa Wola, etwa 50 km westlich, ist ein Herrenhaus mit Park und im Sommer kostenlosen sonntäglichen Klavierrezitalen, von Warschau mit einem Regionalbus in rund anderthalb Stunden erreichbar. Alternativ ist Palmiry im Kampinos-Wald nördlich der Stadt der Ort und Friedhof kriegszeitlicher Massenerschießungen und ein ernster, bewegender halber Tag; beide sind ruhige Fluchten aus der Hauptstadt, prüfen Sie also die Rückfahrzeiten der Busse, bevor Sie aufbrechen.",
    },
  ],

  itineraries: [
    {
      citySlug: "warsaw",
      days: 2,
      summary:
        "Zwei Tage genügen für das Wesen Warschaus, wenn Sie die ticketpflichtigen Museen im Voraus planen. Die wiederaufgebaute Altstadt ist klein und Sie können den Marktplatz, das Königsschloss, die Barbakane und die Meerjungfrau in ein paar Stunden ablaufen, sodass die Zeit wirklich in die Museen und das weitere moderne Zentrum fließt. Buchen Sie online einen Slot mit Zeitfenster für das Museum des Warschauer Aufstands und POLIN, denn beide sind unverzichtbar, immersiv und stark besucht, und geben Sie jedem mindestens zwei Stunden. Quartieren Sie sich in der Altstadt oder an der Königsroute ein, damit Sie das historische Rückgrat ablaufen können, und nutzen Sie dann Straßenbahnen und die beiden Metrolinien für den Rest. Tag eins nimmt die Altstadt, die Königsroute und die Aussichtsterrasse des Kulturpalasts; Tag zwei ist die schwere, lohnende Geschichte im Museum des Warschauer Aufstands und POLIN, dann am Nachmittag der Lazienki-Park mit seinen kostenlosen Chopin-Konzerten, wenn Sie an einem Sommersonntag da sind. Was Sie in diesem Tempo aufgeben, sind Praga und Wilanow. Dafür nehmen Sie die Dreitagesversion.",
      stayNeighborhoodSlug: "old-town-stare-miasto",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Die Altstadt, die Königsroute und der Blick über die Stadt",
          morning: [
            {
              poiSlug: "old-town-market-square",
              text: "Beginnen Sie auf dem Altstädter Marktplatz, bevor die Reisegruppen eintreffen, mit der bronzenen Syrenka-Meerjungfrau und den wiederaufgebauten pastellfarbenen Fassaden für sich allein. Lesen Sie die Vorkriegsfotos in der Nähe, um zu begreifen, dass der ganze Platz nach 1945 aus Trümmern rekonstruiert wurde.",
              durationMin: 45,
            },
            {
              poiSlug: "royal-castle-castle-square",
              text: "Gehen Sie zum Schlossplatz und besichtigen Sie das wiederaufgebaute Königsschloss mit seinen restaurierten Prunkräumen und zwei Rembrandts, planen Sie dafür etwa neunzig Minuten ein. Prüfen Sie die Schlossseite auf den wöchentlichen Gratis-Eintrittstag, wenn Sie das Ticket sparen möchten, und rechnen Sie dann mit einer Schlange.",
              durationMin: 105,
            },
            {
              poiSlug: "barbican-city-walls",
              text: "Machen Sie einen Bogen durch die rote Backstein-Barbakane und entlang der rekonstruierten mittelalterlichen Stadtmauern Richtung Neustadt, was kostenlos ist und nur wenige Minuten dauert. Im Sommer säumen Straßenmusiker und Handwerksverkäufer die Wälle.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "milk-bar-bar-mleczny",
              text: "Legen Sie eine Pause für ein günstiges, sättigendes Mittagessen in einer Milchbar ein, wo ein Teller Pierogi und Suppe selten 25 PLN überschreitet. Bestellen Sie am Tresen, rechnen Sie mit einer rein polnischen Speisekarte, und gehen Sie zur Mittagszeit, wenn der Durchlauf am schnellsten ist.",
              durationMin: 60,
            },
            {
              poiSlug: "krakowskie-przedmiescie-royal-route",
              text: "Gehen Sie die Königsroute die Krakowskie Przedmiescie hinunter, vorbei an den Palästen, Kirchen und der Universität, und drücken Sie die schwarzen Chopin-Bänke für ihre dreißig Sekunden Musik. Treten Sie in die Heilig-Kreuz-Kirche ein, um die Säule zu sehen, die das Herz des Komponisten birgt.",
              durationMin: 75,
            },
            {
              poiSlug: "palace-of-culture-science",
              text: "Gehen Sie weiter zum Palast der Kultur und Wissenschaft und fahren Sie hinauf zur Aussichtsterrasse im 30. Stock für den weitesten Blick über die Stadt. Der stalinistische Turm aus den 1950ern ist ein Geschenk, dem die Polen noch immer gemischt gegenüberstehen; gehen Sie gegen Sonnenuntergang hinauf für das beste Licht.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              text: "Kehren Sie zum Abendessen Richtung Nowy Swiat zurück und wählen Sie eine Seitenstraße abseits des Hauptboulevards, wo die Preise fallen, und gehen Sie dann die beleuchtete Königsroute zurück hinauf in die Altstadt. Der Platz ist angestrahlt und ruhig am schönsten, nachdem die Tagesmengen gegangen sind.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Kriegsgeschichte und der Chopin-Park",
          morning: [
            {
              poiSlug: "warsaw-rising-museum",
              text: "Nehmen Sie Ihren vorab gebuchten Slot im Museum des Warschauer Aufstands zur Öffnung, bevor die Mengen anwachsen, und geben Sie ihm mindestens zwei Stunden. Verpassen Sie nicht den 3D-Film der zerstörten Stadt oder den nachgebauten Kanal, durch den Sie kriechen; es liegt eine zehnminütige Straßenbahnfahrt westlich des Zentrums.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "polin-museum",
              text: "Wechseln Sie zu POLIN, dem Museum der Geschichte der polnischen Juden, mit Ihrem Ticket mit Zeitfenster, für seine tausendjährige Hauptausstellung auf dem Grund des ehemaligen Ghettos. Planen Sie zwei bis drei Stunden ein und halten Sie am Denkmal der Ghettohelden gegenüber dem Eingang inne.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "lazienki-park",
              text: "Lassen Sie den Tag im Lazienki-Park ausklingen, dem prächtigsten der Stadt, mit seinen Pfauen, dem Palast auf der Insel und dem riesigen Chopin-Denkmal. Ist es ein Sommersonntag, richten Sie es auf das kostenlose Open-Air-Klavierkonzert an der Statue um 16 Uhr aus und bringen Sie etwas zum Sitzen mit.",
              durationMin: 120,
            },
            {
              text: "Runden Sie den Tag mit einem Abendessen zurück Richtung Zentrum oder Nowy Swiat ab, oder gehen Sie, wenn der Abend warm ist, hinunter zu den Weichselboulevards für einen Drink am Flussufer zwischen den Strandbars.",
              durationMin: 105,
            },
          ],
        },
      ],
    },
    {
      citySlug: "warsaw",
      days: 3,
      summary:
        "Drei Tage sind das bequeme Maß für Warschau und lassen Sie die schweren Kriegsgeschichtsmuseen in einem angemessenen Tempo statt hintereinander bewältigen. Die Altstadt ist klein und rasch abgelaufen, also fließt die eigentliche Zeit in das Museum des Warschauer Aufstands und POLIN, den Kulturpalast und den Lazienki-Park, die allein einen vollen zweiten Tag brauchen. Der zusätzliche dritte Tag öffnet die Stadt: Überqueren Sie die Weichsel ins raue, kreative Praga für das Neon-Museum und die Koneser-Brennerei, fahren Sie hinaus zum barocken Schloss Wilanow, oder geben Sie den Kriegsmuseen schlicht den Raum, den sie verdienen. Quartieren Sie sich an der Königsroute oder in der Altstadt für den historischen Kern ein und stützen Sie sich dann auf die Straßenbahnen und die beiden Metrolinien für die weiter entfernten Sehenswürdigkeiten. Buchen Sie Tickets mit Zeitfenster für das Museum des Warschauer Aufstands, POLIN und das Kopernikus-Wissenschaftszentrum online, da alle drei in der Saison ausverkauft sind. Tag eins ist die Altstadt und die Königsroute; Tag zwei sind die Museen und der Lazienki-Park; Tag drei sind Praga, Wilanow und das Flussufer in entspanntem Tempo.",
      stayNeighborhoodSlug: "nowy-swiat-krakowskie",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Die Altstadt, die Königsroute und der Blick über die Stadt",
          morning: [
            {
              poiSlug: "old-town-market-square",
              text: "Beginnen Sie früh auf dem Altstädter Marktplatz, mit der bronzenen Syrenka-Meerjungfrau und den wiederaufgebauten Fassaden vor den Tagesmengen. Lesen Sie die Vorkriegsfotos in der Nähe, um zu verstehen, dass der ganze Platz nach 1945 aus Trümmern rekonstruiert wurde.",
              durationMin: 45,
            },
            {
              poiSlug: "royal-castle-castle-square",
              text: "Besichtigen Sie das wiederaufgebaute Königsschloss vom Schlossplatz aus, mit seinen Prunkräumen und zwei Rembrandts, planen Sie dafür etwa neunzig Minuten ein. Die Sigismundsäule davor ist das älteste weltliche Denkmal der Stadt und der klassische Treffpunkt.",
              durationMin: 105,
            },
            {
              poiSlug: "barbican-city-walls",
              text: "Gehen Sie durch die Barbakane und entlang der rekonstruierten mittelalterlichen Stadtmauern Richtung Neustadt hinaus, kostenlos und schnell, und kehren Sie dann von Norden in den Platz zurück für seinen schönsten Zugang.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "milk-bar-bar-mleczny",
              text: "Essen Sie günstig zu Mittag in einer Milchbar, wo Pierogi, Suppe und ein Schnitzel selten 25 PLN überschreiten. Bestellen Sie am Tresen und gehen Sie mittags, wenn das Essen am frischesten ist und die Schlange am schnellsten vorrückt.",
              durationMin: 60,
            },
            {
              poiSlug: "krakowskie-przedmiescie-royal-route",
              text: "Gehen Sie die Königsroute die Krakowskie Przedmiescie hinunter, vorbei an den Palästen, Kirchen und der Universität, und drücken Sie unterwegs die Chopin-Bänke. Schlüpfen Sie in die Heilig-Kreuz-Kirche, um die Säule zu sehen, die das Herz des Komponisten birgt.",
              durationMin: 75,
            },
            {
              poiSlug: "palace-of-culture-science",
              text: "Beschließen Sie den Nachmittag am Palast der Kultur und Wissenschaft und fahren Sie zur Aussichtsterrasse im 30. Stock für den weitesten Blick über die Stadt. Gehen Sie gegen Sonnenuntergang für das Licht; der stalinistische Turm bleibt ein Monument, dem die Polen gemischt gegenüberstehen.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              text: "Abendessen rund um die Nowy Swiat, wählen Sie eine Seitenstraße, wo die Preise nachlassen, und gehen Sie dann den beleuchteten Boulevard zurück Richtung Altstadt. Der angestrahlte Marktplatz ist am ruhigsten und schönsten, sobald die Tagesausflügler gegangen sind.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Kriegsgeschichte und der Chopin-Park",
          morning: [
            {
              poiSlug: "warsaw-rising-museum",
              text: "Nehmen Sie Ihren gebuchten Slot im Museum des Warschauer Aufstands zur Öffnung und geben Sie ihm mindestens zwei Stunden; es ist immersiv, unverzichtbar und stark besucht. Sehen Sie den 3D-Film der zerstörten Stadt und kriechen Sie durch den nachgebauten Kanal; es liegt eine kurze Straßenbahnfahrt westlich des Zentrums.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "polin-museum",
              text: "Wechseln Sie zu POLIN mit Ihrem Ticket mit Zeitfenster für seine tausendjährige Hauptausstellung auf dem Grund des ehemaligen Ghettos, planen Sie zwei bis drei Stunden ein. Halten Sie davor oder danach am Denkmal der Ghettohelden gegenüber dem Eingang inne.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "lazienki-park",
              text: "Verbringen Sie den späten Nachmittag im Lazienki-Park mit seinen Pfauen, dem Palast auf der Insel und dem Chopin-Denkmal. An einem Sommersonntag erwischen Sie das kostenlose Open-Air-Klavierkonzert an der Statue um 16 Uhr; bringen Sie eine Decke mit und kommen Sie früh für einen Platz.",
              durationMin: 120,
            },
            {
              text: "Beschließen Sie den Tag mit einem Abendessen zurück Richtung Zentrum, oder gehen Sie hinunter zu den Weichselboulevards für einen Drink zwischen den Strandbars am Fluss, wenn das Wetter hält.",
              durationMin: 105,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Praga, Wilanow und das Flussufer",
          morning: [
            {
              poiSlug: "wilanow-palace",
              text: "Fahren Sie südwärts zum Schloss Wilanow, dem barocken polnischen Versailles mit seinen formalen Gärten, mit dem Bus 116 oder 180, planen Sie etwa 40 Minuten je Richtung ein. Der Eintritt in die Räume ist an einem Tag pro Woche kostenlos, meist donnerstags; gehen Sie am Morgen, um den Reisebussen zuvorzukommen.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "praga-neon-koneser",
              text: "Überqueren Sie die Weichsel nach Praga für das Neon-Museum leuchtender Schilder aus dem Kalten Krieg und den Innenhof der Koneser-Brennerei, Heimat von Bars, Geschäften und dem Polnischen Wodka-Museum. Dieses Ostufer überstand den Krieg weitgehend, sodass seine Backsteinmietshäuser das echte Vorkriegs-Warschau sind.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "vistula-copernicus-centre",
              text: "Kehren Sie ans Westufer zurück für die Weichselboulevards unterhalb von Powisle, am schönsten am Abend, wenn die Strandbars und Essensstände öffnen und der Multimediabrunnen an Sommerwochenendnächten spielt. Familien können daneben ein paar gebuchte Stunden im Kopernikus-Wissenschaftszentrum einschieben.",
              durationMin: 120,
            },
            {
              text: "Letztes Abendessen in Powisle oder an der Nowy Swiat, halten Sie es unkompliziert. Wenn Sie einen frühen Flug haben, denken Sie daran, dass der Flughafen Chopin nur 8 km südlich liegt, etwa 20 bis 25 Minuten mit dem Zug S2 oder S3 oder dem Bus 175 für rund 5 PLN.",
              durationMin: 105,
            },
          ],
        },
      ],
    },
  ],
};

export default warsawDe;
