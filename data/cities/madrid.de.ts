import type { CityData } from "../types";

const madridDe: CityData = {
  city: {
    slug: "madrid",
    name: "Madrid",
    country: "Spanien",
    countrySlug: "spain",
    lat: 40.4168,
    lng: -3.7038,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "MAD",
    airportToCenter:
      "Die Metrolinie 8 fährt von Barajas in etwa 30 Minuten bis Nuevos Ministerios, beachten Sie jedoch den Flughafenzuschlag von 3 EUR zusätzlich zum Fahrpreis, kalkulieren Sie also grob mit 4,50 bis 5 EUR. Alternativen: der rund um die Uhr verkehrende Airport-Express-Bus zum Bahnhof Atocha für etwa 5 EUR oder der Cercanias-Vorortzug C1 von T4 zu den zentralen Bahnhöfen.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [7, 8],
    monthlyNotes: {
      1: "Kalt und trocken mit Höchstwerten um 10C und frostigen Morgen, und die Stadt ist ruhig nach dem Dreikönigsumzug am 6. Januar, dem größten Kinderfest des spanischen Weihnachtsfestes. Die Hotelpreise liegen auf ihrem Jahrestief, und die kostenlosen Abendfenster im Prado und im Reina Sofia sind herrlich leer.",
      2: "Noch kalt um 12C, aber oft hell und sonnig, mit den wenigsten Touristen des Jahres und den günstigsten Betten. Ein guter Monat für das Kunstdreieck: Nutzen Sie die kostenlosen letzten zwei Stunden im Prado und im Reina Sofia ohne die Frühlingsschlangen.",
      3: "Die Höchstwerte klettern auf 16C, und auf sonnigen Nachmittagen öffnen die Terrassen wieder, auch wenn die Abende kühl bleiben. Fällt die Semana Santa in den späten März, erwarten Sie feierliche Karwochenprozessionen und einen Anstieg der inländischen Besucher und Hotelpreise in der Woche vor Ostern.",
      4: "Einer der besten Monate mit 18C, grün und mild, mit dem blühenden Retiro und angenehmen Spaziergängen den ganzen Tag. Ostern fällt oft in diesen Zeitraum, sodass Semana-Santa-Prozessionen und höhere Preise die Woche treffen können, in die die Karwoche fällt; buchen Sie bewusst darum herum oder gezielt hinein.",
      5: "Bestes Madrid: warm mit 23C, langes Licht, und das San-Isidro-Fest Mitte Mai füllt die Stadt mit Konzerten, Verbenas und Einheimischen in Tracht rund um La Latina und Las Vistillas. Menschenmassen und Preise steigen, buchen Sie also den Prado und den Konigspalast im Voraus.",
      6: "Warm bis heiß mit 29C, langen Abenden und der Terrassensaison in vollem Gange, bevor der eigentliche Glutofen kommt. In den großen Museen ist der Andrang stark, nutzen Sie also die kostenlosen Abendfenster oder die Öffnung um 9 Uhr und halten Sie die Nachmittage für den Schatten frei.",
      7: "Heiß und trocken, regelmäßig über 34C, und Anfang Juli bringt Orgullo, die riesige Madrider Gay Pride rund um Chueca, die zu den größten Europas zählt und das Zentrum eine Woche lang füllt. Besichtigen Sie vor Mittag, verstecken Sie sich vor der Hitze von 15 bis 19 Uhr und speisen Sie spät wie alle anderen.",
      8: "Der leerste und heißeste Monat: Die Höchstwerte drücken auf 35C, und viele lokale Bars und Familienrestaurants schließen für die Ferien, während die Madrilenen an die Küste ziehen. Das Kulturprogramm Veranos de la Villa hält einige Freiluftkonzerte und Kinoveranstaltungen am Laufen, aber dies ist der Monat zum Auslassen, es sei denn, günstige Betten wiegen die Hitze auf.",
      9: "Die Hitze lässt im Lauf des Monats von etwa 30C auf angenehme Werte nach, die Stadt füllt sich wieder, während die Einheimischen zurückkehren, und die Terrassen bleiben bis in die Nacht belebt. Nach der ersten Woche entspannen sich die Menschenmassen, was Mitte bis Ende September wohl zum schönsten Zeitfenster des Jahres macht.",
      10: "Warme Tage um 22C, goldenes Licht im Retiro und die ersten leichten Regenfälle, die Ende des Monats zurückkehren. Die Menschenmassen werden merklich dünner und das Preis-Leistungs-Verhältnis der Hotels verbessert sich, eine starke Wahl in der Nebensaison, um das gesamte Zentrum bequem zu erlaufen.",
      11: "Kühl mit 15C, mit mehr grauen und nassen Tagen, aber hellen Phasen zwischen den Fronten und den ruhigsten großen Sehenswürdigkeiten des Herbstes. Die Nebensaisonpreise kehren zurück, und Sie können den Konigspalast oder eine Bernabeu-Tour oft nur wenige Tage im Voraus buchen.",
      12: "Kalt um 10C, aber festlich, mit Lichtern über der Gran Via und dem Zentrum, und der Puerta del Sol als Epizentrum von Silvester, wenn die Menschenmassen zu den zwölf Glockenschlägen zwölf Weintrauben essen. Ruhig bis zur Strecke zwischen Weihnachten und Neujahr, wenn die Preise klettern und die kostenlosen Museumsabende einheimische Besuchermassen anziehen.",
    },
    climate: {
      1: { highC: 10, lowC: 3, rainyDays: 5 },
      2: { highC: 12, lowC: 3, rainyDays: 4 },
      3: { highC: 16, lowC: 5, rainyDays: 4 },
      4: { highC: 18, lowC: 7, rainyDays: 7 },
      5: { highC: 23, lowC: 11, rainyDays: 6 },
      6: { highC: 29, lowC: 16, rainyDays: 3 },
      7: { highC: 34, lowC: 19, rainyDays: 1 },
      8: { highC: 34, lowC: 19, rainyDays: 1 },
      9: { highC: 28, lowC: 15, rainyDays: 3 },
      10: { highC: 22, lowC: 10, rainyDays: 6 },
      11: { highC: 15, lowC: 6, rainyDays: 6 },
      12: { highC: 10, lowC: 3, rainyDays: 6 },
    },
    budgetLevel: "mid",
    budgetPerDay: { budget: 65, mid: 135, high: 270 },
    tagline: "Weltklasse-Kunst, habsburgische Plätze und Tapas, spät und im Stehen gegessen.",
    heroIntro:
      "Madrid schenkt Ihnen eines der großartigsten Kunstdreiecke der Welt, einen kompakten habsburgischen Altstadtkern und Spaniens unermüdlichste Ess- und Trinkkultur, alles in einem Zentrum, das Sie von einem Ende zum anderen erlaufen können. Drei Tage sind das ehrliche Maß: einer für den Prado, das Reina Sofia und das Thyssen, einer für die königliche Altstadt und einer für ein lebhaftes Barrio. Kommen Sie im Frühling oder Herbst, buchen Sie den kostenlosen Abend im Prado oder den Konigspalast im Voraus und speisen Sie um 22 Uhr wie ein Einheimischer.",
    accent: { from: "#C42E3A", to: "#E8A33D", ink: "#6E1F28" },
    neighborhoodSlugs: ["centro", "la-latina", "malasana", "chueca", "salamanca"],
    nearbyCitySlugs: ["seville", "barcelona"],
  },

  neighborhoods: [
    {
      slug: "centro",
      citySlug: "madrid",
      name: "Centro (Sol und Habsburgerkern)",
      lat: 40.4155,
      lng: -3.7074,
      bestFor: ["first-time", "family"],
      vibe: "Das historische Herz rund um die Puerta del Sol, die Plaza Mayor und den Konigspalast, wo jedes bedeutende Monument in einem Zehn-Minuten-Fußweg liegt. Es ist das Postkarten-Madrid, Tag und Nacht belebt, mit den Geschäften und Theatern der Gran Via ein paar Blocks nördlich. Sie zahlen zentrale Preise und nehmen den Lärm in Kauf, dafür haben Sie die ganze Altstadt vor der Haustür.",
      pros: [
        "Zu Fuß zur Plaza Mayor, zum Konigspalast, zur Puerta del Sol und zur Gran Via ohne Nahverkehr",
        "Am besten angebundenes Viertel, mit Metro und dem Cercanias-Knotenpunkt Sol darunter",
        "Dicht an Tapas-Bars, Märkten und Sehenswürdigkeiten an jeder Ecke",
      ],
      cons: [
        "Die touristischste Zone, mit Taschendieben rund um Sol und die Gran Via",
        "Der Straßenlärm zieht sich bis spät, eine schlechte Wahl für Leichtschläfer",
        "Restaurants an den Hauptplätzen sind auf Besucher bepreist",
      ],
    },
    {
      slug: "la-latina",
      citySlug: "madrid",
      name: "La Latina",
      lat: 40.4109,
      lng: -3.7108,
      bestFor: ["local", "nightlife", "romantic"],
      vibe: "Das älteste Viertel südlich der Plaza Mayor ist Madrids Tapas-Kernland, ein Knäuel mittelalterlicher Gassen rund um die Cava Baja und die Marktstraßen des El Rastro. Der Sonntag ist sein großer Tag, wenn der Flohmarkt in die Bars zu einer langen Vermut-und-Tapas-Session überschwappt. Zentral genug, um überallhin zu laufen, mit weit mehr Nachbarschaftsleben als in Sol.",
      pros: [
        "Cava Baja und Cava Alta bieten den besten Tapas-Bar-Bummel der Stadt",
        "Zehn-Minuten-Fußweg zur Plaza Mayor und zum Konigspalast",
        "Der sonntägliche El-Rastro-Markt und die Vermut-Kultur direkt vor der Tür",
      ],
      cons: [
        "Laut von Donnerstag- bis Sonntagnacht rund um die Bar-Straßen",
        "Alte Gebäude bedeuten kleine Zimmer und steile oder keine Aufzüge",
        "Die Sonntagsmarktmassen verstopfen die Straßen bis zum frühen Nachmittag",
      ],
    },
    {
      slug: "malasana",
      citySlug: "madrid",
      name: "Malasana",
      lat: 40.4258,
      lng: -3.7038,
      bestFor: ["nightlife", "local", "budget"],
      vibe: "Die Geburtsstätte der Movida der 1980er ist heute Madrids angesagtestes Viertel, voller Vintage-Läden, Third-Wave-Kaffee, Indie-Bars und kleiner Küchen rund um die Plaza del Dos de Mayo. Es ist jung, gut zu Fuß und brummt bis spät, ein kurzer Spaziergang nördlich der Gran Via und des Zentrums. Gutes Preis-Leistungs-Verhältnis für die Gegend, wenn Sie durch den Wochenendsoundtrack schlafen können.",
      pros: [
        "Die beste unabhängige Bar-, Café- und Shoppingszene der Stadt",
        "In zehn Minuten zu Fuß zur Gran Via und ins Zentrum",
        "Preiswertere Betten als in Sol oder Salamanca bei gleicher Zentralität",
      ],
      cons: [
        "Sehr laut in den Wochenendnächten rund um die Plätze",
        "Nur wenige klassische Sehenswürdigkeiten in der unmittelbaren Umgebung",
        "Beliebt bei Feiernden, sodass die Straßen um 3 Uhr morgens rau sein können",
      ],
    },
    {
      slug: "chueca",
      citySlug: "madrid",
      name: "Chueca",
      lat: 40.4224,
      lng: -3.6968,
      bestFor: ["nightlife", "local", "romantic"],
      vibe: "Madrids stolz queeres Viertel ist ein stilvolles, lebhaftes Raster aus Designläden, Weinbars und Restaurants rund um die Plaza de Chueca und das Epizentrum der riesigen Orgullo-Pride Anfang Juli. Es ist eher poliert und gesellig als kantig, in Gehweite zur Gran Via und zum Thyssen. Zentral, unterhaltsam und bis tief in die Nacht mit einem Gefühl von Sicherheit.",
      pros: [
        "Ausgezeichnete Restaurants, Cocktailbars und Boutiquen dicht beieinander",
        "In fünfzehn Minuten zu Fuß zur Gran Via, zum Thyssen und zum Retiro",
        "Einladendes, brummendes Nachtleben, das während der Pride im Juli seinen Höhepunkt erreicht",
      ],
      cons: [
        "Der Lärm am Wochenende und in der Pride-Woche ist rund um den Platz intensiv",
        "Eine der teureren zentralen Gegenden sowohl für Hotels als auch für die Gastronomie",
        "Begrenzt an großen Sehenswürdigkeiten innerhalb des Viertels selbst",
      ],
    },
    {
      slug: "salamanca",
      citySlug: "madrid",
      name: "Salamanca",
      lat: 40.4302,
      lng: -3.6795,
      bestFor: ["romantic", "family"],
      vibe: "Das elegante Raster nordöstlich des Retiro ist Madrids gehobenes Viertel, Heimat der Designermeile entlang der Calle Serrano, feiner Restaurants und ruhiger, breiter Boulevards. Es tauscht Altstadtcharakter gegen Raum, Ruhe und Sicherheit, einen kurzen Fußweg oder eine Metrofahrt vom Kunstdreieck und dem Park entfernt. Nehmen Sie hier Quartier für Politur und guten Schlaf statt für Kopfsteinpflaster-Atmosphäre.",
      pros: [
        "Ruhige, sichere, elegante Straßen mit gehobenem Shopping an der Serrano",
        "Ein kurzer Weg zum Retiro und zum Prado, dazu gute Metroanbindungen",
        "Verlässliche, gehobene Gastronomie ohne Altstadt-Trubel",
      ],
      cons: [
        "Teure Hotels, Läden und Restaurants auf ganzer Linie",
        "Wirkt nachts eher förmlich und wohnlich als lebhaft",
        "Ein 20-Minuten-Fußweg oder eine Metrofahrt vom habsburgischen Altstadtkern",
      ],
    },
  ],

  pois: [
    {
      slug: "prado-museum",
      citySlug: "madrid",
      name: "Museo del Prado",
      lat: 40.4138,
      lng: -3.6921,
      kind: "museum",
      needsBooking: true,
      tip: "Der Eintritt ist in den letzten zwei Stunden frei (Montag bis Samstag 18:00-20:00, Sonntag 17:00-19:00), aber die Schlangen bilden sich lange vorher, kommen Sie also 30 bis 45 Minuten früher. Wenn Sie zahlen, buchen Sie online ein Zeitfenster, gehen Sie zuerst direkt zu Velazquez' Las Meninas und den schwarzen Gemälden Goyas und rechnen Sie mit mindestens zwei bis drei Stunden für die Höhepunkte.",
    },
    {
      slug: "reina-sofia",
      citySlug: "madrid",
      name: "Museo Reina Sofia",
      lat: 40.4079,
      lng: -3.6946,
      kind: "museum",
      needsBooking: true,
      tip: "Guernica ist der Grund zu kommen, und es hängt in Saal 205. Der Eintritt ist an Wochentagabenden frei (Montag und Mittwoch bis Samstag 19:00-21:00) und Sonntagnachmittag ab 12:30, aber dienstags ist es ganz geschlossen; buchen Sie online, um die Schlange zu umgehen, gehen Sie zuerst zu Picassos Leinwand und arbeiten Sie sich dann nach außen zu Dali und Miro vor.",
    },
    {
      slug: "thyssen-bornemisza",
      citySlug: "madrid",
      name: "Thyssen-Bornemisza-Museum",
      lat: 40.4160,
      lng: -3.6948,
      kind: "museum",
      needsBooking: true,
      tip: "Der dritte Punkt des Kunstdreiecks füllt die Lücken, die der Prado und das Reina Sofia lassen: Impressionisten, Alte Meister und Werke des 20. Jahrhunderts in einer erlaufbaren Sammlung. Es ist montagnachmittags (12:00-16:00) für die Dauerausstellung frei; buchen Sie sonst online, beginnen Sie im obersten Stock und steigen Sie chronologisch ab, um Ihre Beine zu schonen.",
    },
    {
      slug: "royal-palace",
      citySlug: "madrid",
      name: "Konigspalast (Palacio Real)",
      lat: 40.4179,
      lng: -3.7143,
      kind: "sight",
      needsBooking: true,
      tip: "Buchen Sie online, um die lange Ticketschlange zu umgehen, und prüfen Sie zuerst die Website, denn der Palast schließt kurzfristig für Staatszeremonien für Besucher. Zielen Sie auf die Öffnung um 10 Uhr, besichtigen Sie die Prunkräume und die Königliche Rüstkammer und gehen Sie dann hinüber zur kostenlosen Almudena-Kathedrale und den Sabatini-Gärten nebenan.",
    },
    {
      slug: "retiro-park",
      citySlug: "madrid",
      name: "Retiro-Park und Kristallpalast",
      lat: 40.4152,
      lng: -3.6844,
      kind: "park",
      needsBooking: false,
      tip: "Kostenlos und ab Tagesanbruch geöffnet; treten Sie am Puerta-de-Alcala-Ende ein und laufen Sie zum Ruderteich, wo Ruderboote etwa 6 EUR für 45 Minuten kosten, mit den kürzesten Schlangen vor Mittag. Der Palacio de Cristal, ein Glaspavillon mit kostenlosen zeitgenössischen Kunstinstallationen, liegt tiefer im Park und ist das eine, das man nicht verpassen sollte.",
    },
    {
      slug: "plaza-mayor",
      citySlug: "madrid",
      name: "Plaza Mayor",
      lat: 40.4155,
      lng: -3.7074,
      kind: "sight",
      needsBooking: false,
      tip: "Der prächtige, von Arkaden gesäumte Platz aus dem 17. Jahrhundert ist kostenlos und am schönsten früh morgens oder nach dem Abendessen, wenn sich das Tagesgedränge lichtet. Setzen Sie sich nicht an die Terrassencafés auf dem Platz selbst, wo der Aufschlag brutal ist; holen Sie sich stattdessen den lokalen Straßensnack, ein Bocadillo de Calamares, aus einer Bar an der nahen Calle Botoneras.",
    },
    {
      slug: "puerta-del-sol",
      citySlug: "madrid",
      name: "Puerta del Sol",
      lat: 40.4169,
      lng: -3.7033,
      kind: "sight",
      needsBooking: false,
      tip: "Das buchstäbliche Zentrum Spaniens, markiert durch den Kilometer Null im Pflaster, und der Platz, auf dem die Menschenmassen zu den zwölf Silvester-Glockenschlägen zwölf Weintrauben essen. Es ist eher ein Verkehrs- und Orientierungsknoten als ein Ort zum Verweilen, gehen Sie also durch, finden Sie die Bären-und-Erdbeerbaum-Statue und halten Sie im Gedränge Ihre Tasche geschlossen.",
    },
    {
      slug: "gran-via",
      citySlug: "madrid",
      name: "Gran Via",
      lat: 40.4200,
      lng: -3.7025,
      kind: "sight",
      needsBooking: false,
      tip: "Madrids großer Boulevard aus dem frühen 20. Jahrhundert erläuft sich am besten in der Abenddämmerung, wenn die Schaufenster und die Kuppel des Metropolis-Gebäudes erleuchten. Es ist eine Hauptmeile für Taschendiebe, halten Sie also Taschen geschlossen und Telefone weg vom Rand des Gehwegs; für den klassischen Dachblick verlangt die nahe Terrasse des Circulo de Bellas Artes etwa 5 EUR.",
    },
    {
      slug: "mercado-de-san-miguel",
      citySlug: "madrid",
      name: "Mercado de San Miguel",
      lat: 40.4153,
      lng: -3.7090,
      kind: "food",
      needsBooking: false,
      tip: "Die restaurierte Markthalle aus Eisen und Glas neben der Plaza Mayor ist eine Gourmet-Tapas-Halle, polierter und teurer als die lokalen Bars, behandeln Sie sie also eher als Naschstopp denn als volle Mahlzeit. Gehen Sie gegen Mittag oder am frühen Nachmittag, um dem Gedränge um 20 Uhr zu entgehen, kaufen Sie zwei oder drei Tapas an verschiedenen Ständen und essen Sie im Stehen, denn es gibt kaum Sitzplätze.",
    },
    {
      slug: "temple-of-debod",
      citySlug: "madrid",
      name: "Debod-Tempel",
      lat: 40.4240,
      lng: -3.7176,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Dieser echte altägyptische Tempel, an Spanien geschenkt und in einem Park wieder aufgebaut, ist Madrids kostenloser klassischer Ort für den Sonnenuntergang, mit dem Stein, der sich in seinem Becken spiegelt, und dem Himmel über der Casa de Campo dahinter. Kommen Sie 30 Minuten vor Sonnenuntergang für eine gute Position am Geländer; es wird voll, und das Innere hat begrenzten kostenlosen Zeitfenster-Eintritt (montags geschlossen).",
    },
    {
      slug: "el-rastro",
      citySlug: "madrid",
      name: "El Rastro Flohmarkt",
      lat: 40.4085,
      lng: -3.7075,
      kind: "experience",
      needsBooking: false,
      tip: "Madrids riesiger Freiluft-Flohmarkt läuft nur an Sonntagvormittagen, etwa von 9 bis 15 Uhr, und ergießt sich die Calle Ribera de Curtidores und die Gassen von La Latina hinab. Kommen Sie vor 11 Uhr, um dem Gedränge zuvorzukommen, tragen Sie Wertsachen in einer Vordertasche, denn es ist ein Hauptrevier für Taschendiebe, und beenden Sie es mit einem Vermut in einer Bar der Cava Baja, wie es die Einheimischen tun.",
    },
    {
      slug: "plaza-de-cibeles",
      citySlug: "madrid",
      name: "Plaza de Cibeles",
      lat: 40.4192,
      lng: -3.6931,
      kind: "sight",
      needsBooking: false,
      tip: "Die Kreuzung aus Brunnen und Palast ist ein kostenloses Wahrzeichen, und die Fans von Real Madrid versammeln sich am Cibeles-Brunnen, um Titel zu feiern. Steigen Sie zum Dach-Mirador des Palacio de Cibeles hinauf (etwa 3 EUR) für einen weiten Blick den Paseo del Prado hinunter; er liegt auf dem Weg zwischen dem Prado und der Gran Via, schieben Sie ihn also dazwischen ein.",
    },
    {
      slug: "cava-baja-tapas",
      citySlug: "madrid",
      name: "Cava-Baja-Tapas-Bummel (La Latina)",
      lat: 40.4113,
      lng: -3.7098,
      kind: "food",
      needsBooking: false,
      tip: "Die Cava Baja ist die einzelne beste Tapas-Straße Madrids, eine Reihe alter Tavernen, in denen Sie an jeder ein oder zwei Teller und ein Getränk bestellen und dann weiterziehen. Beginnen Sie gegen 21 Uhr, wenn die Küchen ihren Rhythmus finden, stellen Sie sich an die Bar, statt einen Tisch zu nehmen, und probieren Sie die Klassiker: Gambas al Ajillo, Croquetas und eine Caña Bier.",
    },
    {
      slug: "santiago-bernabeu",
      citySlug: "madrid",
      name: "Santiago-Bernabeu-Stadiontour",
      lat: 40.4531,
      lng: -3.6883,
      kind: "experience",
      needsBooking: true,
      tip: "Die Stadiontour und das Museum von Real Madrid sind ein selbstgeführter Besuch, der die Sitze am Spielfeldrand, die Umkleidekabinen und den Trophäensaal umfasst; buchen Sie online ein Zeitfenster, denn Tickets vor Ort sind an Spielwochenenden ausverkauft. An Spieltagen und oft am Tag davor ist es für Touren geschlossen, prüfen Sie also den Spielkalender, bevor Sie gehen; die Metro bringt Sie mit der Linie 10 zur Station Santiago Bernabeu.",
    },
  ],

  itineraries: [
    {
      citySlug: "madrid",
      days: 2,
      summary:
        "Zwei Tage decken Madrids Wesentliches ab, aber es ist ein Hetzen, und Sie werden die Kompression spüren, denn die Stadt will wirklich drei. In 48 Stunden können Sie das Kunstdreieck an Tag eins schaffen (den Prado, dann das Reina Sofia für Guernica, mit dem Retiro dazwischen) und die habsburgische Altstadt an Tag zwei (den Konigspalast, die Plaza Mayor, Sol und San Miguel), wobei Sie jeden Abend mit Tapas in La Latina ausklingen lassen. Was einen kurzen Trip bricht, ist das Timing: Nutzen Sie die kostenlosen letzten zwei Stunden im Prado oder buchen Sie ein Zeitfenster, und reservieren Sie den Konigspalast online, damit eine Schlange nicht Ihren Vormittag frisst. Nehmen Sie Quartier in Centro, sodass beide Tage zu Fuß beginnen und das Abendessen immer nur wenige Schritte entfernt ist. Was Sie in diesem Tempo opfern, sind das Thyssen, ein ganzer Barrio-Tag, Salamanca, das Bernabeu und jeder Tagesausflug, das passt also zu einem Wochenendtrip oder einem ersten Vorgeschmack. Wenn Sie einen dritten Tag hinzufügen können, nehmen Sie ihn: Bei drei Tagen hört Madrid auf, sich wie ein Sprint anzufühlen.",
      stayNeighborhoodSlug: "centro",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Das Kunstdreieck: Prado, Retiro, Reina Sofia",
          morning: [
            {
              poiSlug: "prado-museum",
              text: "Beginnen Sie am Prado zur Öffnung um 10 Uhr mit einem gebuchten Zeitfenster und gehen Sie direkt zu Velazquez' Las Meninas und den schwarzen Gemälden Goyas, bevor sich die Säle füllen. Zwei bis drei Stunden decken die bedeutenden Meisterwerke ohne einen Gewaltmarsch ab.",
              durationMin: 165,
            },
          ],
          afternoon: [
            {
              text: "Mittagessen auf der Seite des Paseo del Prado oder hinauf Richtung Anton Martin, und halten Sie die Mahlzeit dann leicht, denn das Abendessen läuft in Madrid spät. Ein Menu del Dia in einer Nachbarschaftsbar ist die preiswerte Option.",
              durationMin: 75,
            },
            {
              poiSlug: "retiro-park",
              text: "Laufen Sie für den Nachmittag in den Retiro-Park hinter dem Prado, nehmen Sie ein Ruderboot auf dem See und fädeln Sie sich zum Glaspavillon Palacio de Cristal zurück. Es ist die grüne Verschnaufpause zwischen zwei großen Museen.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "reina-sofia",
              text: "Nehmen Sie das Reina Sofia in seinem kostenlosen Wochentagabend-Fenster (19:00-21:00, dienstags geschlossen) und gehen Sie direkt zu Saal 205 für Picassos Guernica, bevor Sie zu Dali und Miro herumkreisen. Kommen Sie etwas früher, denn das kostenlose Fenster zieht eine Schlange an.",
              durationMin: 90,
            },
            {
              poiSlug: "cava-baja-tapas",
              text: "Laufen Sie nach La Latina für einen Cava-Baja-Tapas-Bummel ab etwa 21 Uhr, bestellen Sie an jeder Bar einen Teller und ein Getränk und ziehen Sie weiter. Gambas al Ajillo, Croquetas und eine Caña, an der Theke stehend wie die Einheimischen.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Habsburgisches Madrid: Konigspalast, Plaza Mayor, Sol, San Miguel",
          morning: [
            {
              poiSlug: "royal-palace",
              text: "Seien Sie zur Öffnung um 10 Uhr mit einem vorab gebuchten Ticket am Konigspalast und prüfen Sie am Abend zuvor, dass er nicht für ein Staatsereignis geschlossen ist. Besichtigen Sie die Prunkräume und die Königliche Rüstkammer und treten Sie dann zur kostenlosen Almudena-Kathedrale und den Sabatini-Gärten nebenan hinaus.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "mercado-de-san-miguel",
              text: "Naschen Sie das Mittagessen im Mercado de San Miguel neben der Plaza Mayor, kaufen Sie zwei oder drei Tapas an verschiedenen Ständen und essen Sie im Stehen. Es ist teurer als eine lokale Bar, behandeln Sie es also als Verkostung statt als volle Mahlzeit im Sitzen.",
              durationMin: 60,
            },
            {
              poiSlug: "plaza-mayor",
              text: "Gehen Sie hinüber auf die Plaza Mayor, um den von Arkaden gesäumten Platz aus dem 17. Jahrhundert aufzunehmen, und fädeln Sie dann durch die alten Gassen zur Puerta del Sol und der Kilometer-Null-Markierung im Zentrum Spaniens. Halten Sie hier im Gedränge Ihre Tasche geschlossen.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "temple-of-debod",
              text: "Laufen Sie 30 Minuten vor Sonnenuntergang hinauf zum Debod-Tempel für Madrids kostenlosen klassischen Aussichtspunkt, den altägyptischen Stein, der sich in seinem Becken vor dem Himmel über der Casa de Campo spiegelt. Sichern Sie sich früh einen Platz am Geländer, denn es wird voll.",
              durationMin: 60,
            },
            {
              poiSlug: "gran-via",
              text: "Steigen Sie hinab zur Gran Via, während der Boulevard erleuchtet, und erlaufen Sie seine Fassaden aus dem frühen 20. Jahrhundert Richtung Metropolis-Kuppel. Abendessen im Zentrum oder zurück in La Latina, und halten Sie Telefone und Taschen auf dieser für Taschendiebe anfälligen Meile sicher.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "madrid",
      days: 3,
      summary:
        "Ja, drei Tage sind die richtige Länge für Madrid, und das ist, was wir für einen ersten Besuch empfehlen. Drei Tage lassen Sie den Trip sauber aufteilen: Das Kunstdreieck bekommt einen ganzen Tag (den Prado, das Reina Sofia für Guernica und das Thyssen, um die Lücken zu füllen), der habsburgische Altstadtkern bekommt seinen eigenen Tag (den Konigspalast, die Plaza Mayor, Sol, San Miguel und den Debod-Tempel bei Sonnenuntergang), und ein lebhaftes Barrio bekommt den dritten (La Latina, El Rastro, wenn es Sonntag ist, und Malasana). Sie essen gut in drei Vierteln, passen sowohl die kostenlosen Museumsabende als auch richtige späte Tapas-Nächte hinein und bewegen sich dennoch in einem Tempo, das Sie in einem Platz sitzen lässt. Was dennoch wegfällt, sind Salamanca, das Bernabeu und ein Tagesausflug nach Toledo oder Segovia, was genau das ist, was ein vierter Tag hinzufügt. Übernachten Sie in Malasana für seine unabhängigen Bars, seinen Kaffee und sein Preis-Leistungs-Verhältnis, während Sie zehn Minuten vom Zentrum entfernt bleiben. Nutzen Sie die kostenlosen letzten zwei Stunden im Prado oder buchen Sie ein Zeitfenster, und reservieren Sie den Konigspalast online, bevor Sie gehen.",
      stayNeighborhoodSlug: "malasana",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Das Kunstdreieck: Prado, Retiro, Reina Sofia, Thyssen",
          morning: [
            {
              poiSlug: "prado-museum",
              text: "Eröffnen Sie den Trip zum 10-Uhr-Zeitfenster des Prado, im Voraus gebucht, und steuern Sie direkt Las Meninas und Goyas schwarze Gemälde an, bevor sich die Menschenmassen aufbauen. Geben Sie ihm zweieinhalb bis drei Stunden für die Meisterwerke; weniger, und Sie joggen an ihnen vorbei.",
              durationMin: 165,
            },
          ],
          afternoon: [
            {
              poiSlug: "thyssen-bornemisza",
              text: "Mittagessen am Paseo del Prado, dann nehmen Sie das Thyssen-Bornemisza-Museum quer über den Boulevard, montagnachmittags für die Dauerausstellung frei. Beginnen Sie im obersten Stock mit den Alten Meistern und steigen Sie chronologisch zu den Impressionisten und dem 20. Jahrhundert ab.",
              durationMin: 120,
            },
            {
              poiSlug: "retiro-park",
              text: "Laufen Sie hinter den Museen für Luft am späten Nachmittag in den Retiro, nehmen Sie ein Ruderboot auf dem See und schlingen Sie sich zum Palacio de Cristal. Es setzt Ihre Beine zwischen den beiden Kunstblöcken des Tages zurück.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "reina-sofia",
              text: "Nehmen Sie das Reina Sofia in seinem kostenlosen Abendfenster (19:00-21:00, dienstags geschlossen) und gehen Sie zuerst zu Saal 205 für Guernica, vor Dali und Miro. Kommen Sie früh, denn das kostenlose Fenster zieht eine Schlange an der Tür an.",
              durationMin: 90,
            },
            {
              text: "Abendessen nahe Anton Martin oder wieder hinauf Richtung Malasana, und gleiten Sie mit Tapas statt einer schweren Mahlzeit im Sitzen in den späten Madrider Rhythmus. Die Küchen wärmen sich hier um 21 Uhr erst auf.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Habsburgisches Madrid: Konigspalast, Plaza Mayor, Sol, Sonnenuntergang am Debod",
          morning: [
            {
              poiSlug: "royal-palace",
              text: "Seien Sie um 10 Uhr mit einem vorab gebuchten Ticket am Konigspalast und haben Sie geprüft, dass er nicht für eine Staatszeremonie geschlossen ist. Besichtigen Sie die Prunkräume und die Königliche Rüstkammer und gehen Sie dann hinüber zur kostenlosen Almudena-Kathedrale und den Sabatini-Gärten.",
              durationMin: 120,
            },
            {
              poiSlug: "mercado-de-san-miguel",
              text: "Naschen Sie ein frühes Mittagessen im Mercado de San Miguel bei der Plaza Mayor, kaufen Sie ein paar Tapas an verschiedenen Ständen und essen Sie im Stehen. Halten Sie es leicht, denn dies ist ein Verkostungsstopp, nicht die Hauptmahlzeit des Tages.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "plaza-mayor",
              text: "Nehmen Sie den von Arkaden gesäumten Platz der Plaza Mayor auf, dann laufen Sie die alten Gassen zur Puerta del Sol und der Kilometer-Null-Markierung im geografischen Zentrum Spaniens. Halten Sie Ihre Tasche durch das Gedränge in Sol geschlossen.",
              durationMin: 75,
            },
            {
              poiSlug: "plaza-de-cibeles",
              text: "Schlendern Sie hinab zur Plaza de Cibeles für den Brunnen und den Palast, und zahlen Sie die paar Euro, um den Mirador des Palacio de Cibeles hinaufzufahren, für einen weiten Blick entlang des Paseo del Prado. Er verbindet den Altstadtkern und die Boulevards.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "temple-of-debod",
              text: "Laufen Sie zum Debod-Tempel zum Sonnenuntergang und kommen Sie 30 Minuten früher für einen Platz am Geländer, während der altägyptische Stein das letzte Licht über der Casa de Campo einfängt. Dies ist der kostenlose klassische Madrider Sonnenuntergang.",
              durationMin: 60,
            },
            {
              poiSlug: "gran-via",
              text: "Kommen Sie durch eine erleuchtete Gran Via zurück, erlaufen Sie die prächtigen Fassaden Richtung Metropolis-Kuppel, dann Abendessen im Zentrum. Halten Sie Telefone und Taschen auf dieser für Taschendiebe anfälligen Strecke sicher.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Die Barrios: La Latina, El Rastro, Malasana",
          morning: [
            {
              poiSlug: "el-rastro",
              text: "Wenn es Sonntag ist, tauchen Sie vor 11 Uhr in den El Rastro ein, solange er begehbar ist, und arbeiten Sie sich die Ribera de Curtidores durch die Gassen von La Latina hinab, mit Wertsachen in einer Vordertasche. An jedem anderen Tag verbringen Sie den Vormittag stattdessen mit dem Streifen durch die mittelalterlichen Straßen und Plätze von La Latina.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              poiSlug: "cava-baja-tapas",
              text: "Lassen Sie sich in La Latina für ein langes Mittagessen nieder, machen Sie einen Cava-Baja- und Cava-Alta-Bummel mit einem Vermut, während der Markt ausklingt, in der Sonntagstradition. Ein oder zwei Teller pro Bar, an der Theke stehend, dann weiterziehen.",
              durationMin: 120,
            },
            {
              text: "Laufen Sie für den Nachmittag nordwärts nach Malasana und stöbern Sie in den Vintage-Läden und beim Third-Wave-Kaffee rund um die Plaza del Dos de Mayo. Hier begann die Movida der 1980er, und hier fühlt sich die Stadt noch am jüngsten an.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Aperitivo und Abendessen in Malasana oder im benachbarten Chueca, springen Sie zwischen kleinen Küchen und Cocktailbars, während sich die Viertel füllen. Reservieren Sie überall, wo etwas einen Namen hat, denn die guten Tische sind am Wochenende bis 21:30 vergeben.",
              durationMin: 150,
            },
          ],
        },
      ],
    },
    {
      citySlug: "madrid",
      days: 4,
      summary:
        "Vier Tage sind der Idealwert für einen ersten Besuch in Madrid und verwandeln einen Drei-Tage-Sprint in einen echten Urlaub mit Raum zum Atmen. Tag eins bis drei decken das Wesentliche ab: das Kunstdreieck (Prado, Reina Sofia für Guernica, Thyssen), den habsburgischen Altstadtkern (Konigspalast, Plaza Mayor, Sol, Debod-Tempel) und einen Barrio-Tag durch La Latina, El Rastro und Malasana. Tag vier ist das Überdruckventil, und Sie haben echte Wahlmöglichkeiten: das elegante Salamanca und Serrano-Shopping, gepaart mit einer Bernabeu-Stadiontour, oder ein ganzer Tagesausflug nach Toledo, 33 Minuten mit dem Hochgeschwindigkeitszug, oder nach Segovia für sein römisches Aquädukt und seinen märchenhaften Alcazar, etwa 30 Minuten mit dem Zug. Diese Länge passt zu Reisenden, die den Gewaltmarsch hassen, zu Paaren und zu allen, deren Flüge den Trip ungünstig einrahmen. Nehmen Sie für vier Tage Quartier in La Latina: Sie haben ein langsameres Tempo akzeptiert, und seine Tapas-Gassen und der Sonntagsmarkt machen das Heimkommen jeden Abend zum besten Teil. Buchen Sie den Prado, den Konigspalast und das Bernabeu im Voraus.",
      stayNeighborhoodSlug: "la-latina",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Das Kunstdreieck: Prado, Retiro, Reina Sofia, Thyssen",
          morning: [
            {
              poiSlug: "prado-museum",
              text: "Beginnen Sie zur 10-Uhr-Öffnung des Prado mit einem gebuchten Zeitfenster und gehen Sie direkt zu Las Meninas und Goyas schwarzen Gemälden vor den Menschenmassen. Geben Sie den Meisterwerken mindestens zweieinhalb Stunden.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "thyssen-bornemisza",
              text: "Nach dem Mittagessen am Paseo del Prado nehmen Sie das Thyssen-Bornemisza-Museum quer über den Boulevard, montagnachmittags frei. Arbeiten Sie sich von oben nach unten von den Alten Meistern bis zu den Impressionisten und dem 20. Jahrhundert.",
              durationMin: 120,
            },
            {
              poiSlug: "retiro-park",
              text: "Laufen Sie hinter den Museen für den späten Nachmittag in den Retiro, rudern Sie auf dem See und schlingen Sie sich am Palacio de Cristal vorbei. Der Park ist die grüne Pause zwischen den beiden Galerien des Tages.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "reina-sofia",
              text: "Nehmen Sie das Reina Sofia in seinem kostenlosen Abendfenster (dienstags geschlossen) und gehen Sie zuerst zu Saal 205 für Guernica, vor dem Rest. Kommen Sie etwas früher, um der Schlange am kostenlosen Fenster zuvorzukommen.",
              durationMin: 90,
            },
            {
              poiSlug: "cava-baja-tapas",
              text: "Kommen Sie gemächlich nach Hause nach La Latina für einen Cava-Baja-Tapas-Bummel ab 21 Uhr, ein oder zwei Teller und ein Getränk pro Bar. An der Theke stehend, dies ist das alltägliche Madrider Abendessen.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Habsburgisches Madrid: Konigspalast, Plaza Mayor, Sol, Sonnenuntergang am Debod",
          morning: [
            {
              poiSlug: "royal-palace",
              text: "Seien Sie um 10 Uhr mit einem vorab gebuchten Ticket am Konigspalast, am Abend zuvor gegen Staatsereignis-Schließungen geprüft. Besichtigen Sie die Prunkräume und die Rüstkammer, dann die kostenlose Almudena-Kathedrale und die Sabatini-Gärten.",
              durationMin: 120,
            },
            {
              poiSlug: "mercado-de-san-miguel",
              text: "Naschen Sie ein leichtes Mittagessen im Mercado de San Miguel bei der Plaza Mayor, ein paar Tapas an verschiedenen Ständen, im Stehen gegessen. Halten Sie es zu einer Verkostung statt der vollen Mahlzeit.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "plaza-mayor",
              text: "Nehmen Sie die Plaza Mayor auf, dann laufen Sie zur Puerta del Sol und der Kilometer-Null-Markierung, dem buchstäblichen Zentrum Spaniens. Tasche geschlossen durch das Gedränge in Sol.",
              durationMin: 60,
            },
            {
              poiSlug: "plaza-de-cibeles",
              text: "Laufen Sie zur Plaza de Cibeles für den Brunnen und den Palast und fahren Sie den Cibeles-Mirador hinauf für den Blick auf den Paseo del Prado. Er verbindet den Altstadtkern mit den prächtigen Boulevards.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "temple-of-debod",
              text: "Erreichen Sie den Debod-Tempel 30 Minuten vor Sonnenuntergang für den kostenlosen klassischen Madrider Sonnenuntergang, den ägyptischen Stein, der sich in seinem Becken spiegelt. Sichern Sie sich früh einen Platz am Geländer.",
              durationMin: 60,
            },
            {
              poiSlug: "gran-via",
              text: "Kehren Sie entlang einer angestrahlten Gran Via Richtung Metropolis-Kuppel zurück, dann Abendessen im Zentrum. Telefone und Taschen auf dieser Taschendieb-Meile sicher.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Die Barrios: La Latina, El Rastro, Malasana",
          morning: [
            {
              poiSlug: "el-rastro",
              text: "An einem Sonntag stürzen Sie sich vor 11 Uhr in den El Rastro, solange er noch begehbar ist, die Ribera de Curtidores und die Gassen von La Latina hinab, mit Wertsachen in einer Vordertasche. Ansonsten streifen Sie durch die mittelalterlichen Plätze von La Latina.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Langes Mittagessen in La Latina mit einem Vermut, während der Markt ausklingt, dann stöbern Sie in den Vintage-Läden und Kaffeeorten von Malasana rund um die Plaza del Dos de Mayo. Dies ist der langsame Nachmittag aus Essen und Nachbarschaft, den die kürzeren Trips nicht erübrigen können.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              text: "Aperitivo und Abendessen quer durch Malasana und Chueca, wechseln Sie zwischen kleinen Küchen und Cocktailbars, während sie sich füllen. Reservieren Sie im Voraus für alles mit Namen, die guten Tische sind am Wochenende bis 21:30 vergeben.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Salamanca und das Bernabeu, oder ein Tagesausflug nach Toledo oder Segovia",
          morning: [
            {
              text: "Option A bleibt in der Stadt: Stöbern Sie durch das elegante Raster von Salamanca und die Designermeile entlang der Calle Serrano, mit einem Kaffeestopp in seinen feinen Cafés. Option B verlässt sie: Nehmen Sie den 33-minütigen Hochgeschwindigkeitszug nach Toledo oder den rund 30-minütigen Zug nach Segovia und fahren Sie früh, um den Tagesausflugsmassen zuvorzukommen.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "santiago-bernabeu",
              text: "Wenn Sie in der Stadt geblieben sind, machen Sie die Santiago-Bernabeu-Stadiontour, online für ein Zeitfenster gebucht und gegen den Spielplan geprüft, denn an Spieltagen sind die Touren geschlossen. Die Metro bringt Sie mit der Linie 10 zur Station Santiago Bernabeu.",
              durationMin: 120,
            },
            {
              text: "Bei der Tagesausflugsoption verbringen Sie den Nachmittag in Toledos Altstadt auf dem Hügel aus Kathedrale, Synagogen und El Greco oder an Segovias römischem Aquädukt und märchenhaftem Alcazar, vor dem Zug am späten Nachmittag zurück. Beide sind einfache Rundfahrten, die dennoch einen letzten Madrider Abend übrig lassen.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              text: "Zurück in La Latina für ein Abschiedsessen, geben Sie an Ihrem letzten Abend ein wenig mehr aus in einer Cava-Baja-Taverne, die Sie zuvor ausgekundschaftet haben. Croquetas, Jamon und eine letzte Caña, um den Trip zu beschließen.",
              durationMin: 120,
            },
            {
              text: "Schließen Sie mit einem Absacker in einer ruhigen Gasse von La Latina ab, einen kurzen Weg von Ihrem Bett, ohne einen Heimweg zu planen. Diese Leichtigkeit ist der ganze Sinn, sich für vier Tage hier einzuquartieren.",
              durationMin: 45,
            },
          ],
        },
      ],
    },
  ],
};

export default madridDe;
