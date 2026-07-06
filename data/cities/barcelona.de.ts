import type { CityData } from "../types";

const barcelonaDe: CityData = {
  city: {
    slug: "barcelona",
    name: "Barcelona",
    country: "Spanien",
    countrySlug: "spain",
    lat: 41.3874,
    lng: 2.1686,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "BCN",
    airportToCenter:
      "Aerobus von beiden Terminals zur Placa Catalunya, etwa 35 Min., 7,25 EUR einfache Fahrt, fährt alle 5-10 Min. Günstigere Optionen: der Zug R2 Nord von T2 nach Passeig de Gracia oder Sants für etwa 4,90 EUR (oder kostenlos mit einer T-casual- oder Hola-Karte) oder die Metrolinie L9 Sud, die zwar landschaftlich reizvoll, aber langsam ist und mehrmaliges Umsteigen erfordert, um ins Zentrum zu gelangen.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [8],
    monthlyNotes: {
      1: "Kühl und hell bei 14-15 °C, mit den geringsten Menschenmengen des Jahres und den günstigsten Zimmern, auch wenn das Meer zum Baden zu kalt ist. Der Dreikönigsumzug (Cavalcada de Reis) am 5. Januar füllt die Straßen mit Festwagen und Süßigkeiten, und der Januar-Schlussverkauf füllt die Geschäfte.",
      2: "Weiterhin mild bei 15 °C mit wenig Andrang und niedrigen Preisen, und oft klar genug für ein langes Mittagessen im Freien um die Mittagszeit. Der Karneval (Carnestoltes) belebt die Woche vor der Fastenzeit mit Kostümumzügen in den Vierteln, und Santa Eulalia um den 12. Februar bringt Menschentürme und Riesenfiguren in die Altstadt.",
      3: "Die Höchstwerte klettern auf 17-18 °C und die Tage werden länger, wobei sich die Touristenmassen erst spät im Monat um Ostern herum aufbauen. Achten Sie auf den Kalender: Fällt die Karwoche in den März, füllen sich das Zentrum und die Hotels und die Preise steigen, sonst bleibt es ein ruhiger Monat mit gutem Preis-Leistungs-Verhältnis.",
      4: "Einer der besten Monate bei 19-20 °C mit warmen Nachmittagen und grünen Hügeln, auch wenn Ostern das Zentrum füllen kann, falls es jetzt liegt. Sant Jordi am 23. April ist das Highlight, ein Tag der Bücher und Rosen, an dem La Rambla und der Passeig de Gracia zu Bücherständen unter freiem Himmel werden und Paare Rosen tauschen.",
      5: "Verlässlich warm bei 22-23 °C mit langen Abenden und wenig Regen, wohl der schönste Monat für einen Besuch. Das Primavera Sound findet meist Ende Mai oder Anfang Juni statt und bucht die Hotels schnell aus, prüfen Sie also die Festivaldaten, bevor Sie Ihre festlegen, und die Saison der Abendessen auf der Terrasse beginnt ernsthaft.",
      6: "Heiß bei 26-27 °C, sonnig und belebt, wenn die Sommersaison anläuft und sich die Strände an den Wochenenden füllen. Sant Joan in der Nacht des 23. Juni ist eine ausgelassene Party mit Feuerwerk und Lagerfeuern am Strand, die bis zum Morgengrauen dauert, erwarten Sie also Lärm, riesige Menschenmengen am Wasser und Cava überall.",
      7: "Hochsommer bei 28-29 °C, schwül und überfüllt, mit vollen Stränden und den großen Gaudi-Sehenswürdigkeiten, die Tage im Voraus ausverkauft sind. Machen Sie die Sagrada Familia und den Park Guell gleich bei Öffnung, und ziehen Sie sich dann für die klebrigen frühen Nachmittagsstunden ans Meer oder auf eine schattige Terrasse zurück.",
      8: "Der heißeste, schwülste und überfüllteste Monat bei 29 °C, und der zu meidende: Viele familiengeführte Läden und Restaurants schließen für die Ferien und die Einheimischen fahren an die Küste. Ist der August unvermeidbar, buchen Sie eine Klimaanlage, legen Sie die Besichtigungen auf den frühen Morgen, und beachten Sie die Festa Major de Gracia Mitte August, wenn die Straßen von Gracia um die aufwendigsten Dekorationen wetteifern.",
      9: "Sommerwärme ohne die schlimmste Hitze: 27 °C zu Beginn, im Laufe des Monats abnehmend, mit einem Meer, in dem man noch schwimmen kann. La Merce, das größte Fest der Stadt, läuft um den 24. September mit Menschentürmen, Feuerläufen (Correfocs), Riesenfiguren und Gratiskonzerten im ganzen Zentrum, und es ist die mit Abstand beste Zeit, um die eigene Kultur der Stadt zu erleben.",
      10: "Warme Tage um 23 °C, an denen der erste richtige Regen zurückkehrt und das großartige flache Licht einsetzt, wobei sich die Menschenmengen nach der ersten Woche merklich lichten. Dies ist eine starke Wahl für die Nebensaison, sowohl beim Wetter als auch beim Hotelpreis, und die Terrassen sind mittags noch geöffnet.",
      11: "Kühler bei 18-19 °C mit regelmäßigen Regenperioden, aber vielen hellen Tagen zwischen den Fronten und den ruhigsten großen Sehenswürdigkeiten des Herbstes. Die Preise der Nebensaison kehren zurück, und Sie kommen in Restaurants unter, für die man im Mai reservieren muss, auch wenn die Strandtage vorbei sind.",
      12: "Mild für den Winter bei 15-16 °C, aber nasser, mit Weihnachtsmärkten wie der Fira de Santa Llucia bei der Kathedrale und der einen oder anderen katalanischen Caganer-Figur zum Aufspüren. Ruhig bis zur Zeit zwischen Weihnachten und Neujahr, wenn die Preise steigen und sich die Straßen rund um die Kathedrale mit Lichtern und Menschenmengen füllen.",
    },
    climate: {
      1: { highC: 14, lowC: 5, rainyDays: 5 },
      2: { highC: 15, lowC: 5, rainyDays: 5 },
      3: { highC: 17, lowC: 7, rainyDays: 5 },
      4: { highC: 19, lowC: 9, rainyDays: 6 },
      5: { highC: 22, lowC: 13, rainyDays: 6 },
      6: { highC: 26, lowC: 17, rainyDays: 4 },
      7: { highC: 29, lowC: 20, rainyDays: 2 },
      8: { highC: 29, lowC: 20, rainyDays: 4 },
      9: { highC: 27, lowC: 18, rainyDays: 5 },
      10: { highC: 23, lowC: 14, rainyDays: 7 },
      11: { highC: 18, lowC: 9, rainyDays: 6 },
      12: { highC: 15, lowC: 6, rainyDays: 6 },
    },
    budgetLevel: "mid",
    budgetPerDay: { budget: 70, mid: 150, high: 300 },
    tagline: "Gaudi, gotische Gassen und der Strand in einer zu Fuß erlaufbaren Stadt.",
    heroIntro:
      "Barcelona verbindet Gaudis überschwängliche modernistische Wahrzeichen mit einer mittelalterlichen Altstadt und einem Stadtstrand, alles in einem kompakten Zentrum, das Sie größtenteils zu Fuß erkunden können, mit der Metro für die weiter entfernten Sehenswürdigkeiten. Drei Tage sind der ehrliche Idealwert, um den Gaudi-Rundgang, den gotischen Kern und einen gemächlichen Nachmittag am Meer aufzuteilen, ohne im Eilmarsch zu enden. Kommen Sie im Frühjahr oder Frühherbst, buchen Sie die Sagrada Familia und den Park Guell Wochen vor dem Abflug, und halten Sie Ihre Taschen geschlossen, denn dies ist eine der Taschendiebstahl-Hauptstädte Europas.",
    accent: { from: "#1B9AAA", to: "#E8632C", ink: "#0C4A52" },
    neighborhoodSlugs: [
      "barri-gotic",
      "el-born",
      "eixample",
      "gracia",
      "barceloneta",
    ],
    nearbyCitySlugs: ["seville", "granada"],
  },

  neighborhoods: [
    {
      slug: "barri-gotic",
      citySlug: "barcelona",
      name: "Barri Gotic",
      lat: 41.3833,
      lng: 2.1777,
      bestFor: ["first-time", "romantic", "budget"],
      vibe: "Das mittelalterliche Herz der Stadt, ein Labyrinth aus schmalen Steingassen zwischen der Kathedrale und La Rambla, das sich zu versteckten Plätzen öffnet. Alles, was ein Erstbesucher sehen will, liegt innerhalb eines Zehn-Minuten-Wegs, und die Gassen sind nachts stimmungsvoll, sobald sich die Tagesmassen lichten. Es ist zentral und günstig zum Übernachten, aber auch das geschäftigste und am stärksten von Taschendieben heimgesuchte Viertel.",
      pros: [
        "Zu Fuß zur Kathedrale, La Rambla, dem Hafen und El Born ohne Nahverkehr",
        "Dicht besetzt mit günstigen Tapas-Bars, Cafés und kleinen Hotels",
        "Stimmungsvolle Steingassen, die sich nach dem Abendessen leeren und leuchten",
      ],
      cons: [
        "Das Gebiet mit den meisten Taschendieben der Stadt, besonders nahe La Rambla",
        "Laut vom Fußgängerverkehr und den Bars bis spät, schlecht für Leichtschläfer",
        "Manche Restaurants an den Hauptplätzen ruhen sich auf der Lage aus",
      ],
    },
    {
      slug: "el-born",
      citySlug: "barcelona",
      name: "El Born",
      lat: 41.3847,
      lng: 2.1817,
      bestFor: ["romantic", "nightlife", "local"],
      vibe: "Das stilvollste Viertel der Altstadt, direkt östlich des gotischen Kerns, aufgebaut rund um die Kirche Santa Maria del Mar und das Picasso-Museum. Boutiquen, Weinbars und Cocktailspots säumen die mittelalterlichen Gassen, und es bleibt lebendig, ohne sich wie eine Touristenfalle anzufühlen. Es bietet Ihnen die Atmosphäre der Altstadt mit einer erwachseneren, designorientierten Note.",
      pros: [
        "Beste Dichte an Weinbars, Cocktailspots und Tapas in der Altstadt",
        "Zu Fuß zum Picasso-Museum, zu Santa Maria del Mar und zum Ciutadella-Park",
        "Kopfsteingepflasterte Gassen, die lebendig bleiben und doch einen lokalen, Boutique-Charakter bewahren",
      ],
      cons: [
        "Die Bars rund um die Hauptgassen werden an Wochenendabenden laut",
        "Keine Metro direkt darin, aber Jaume I und Barceloneta sind nah",
        "Die Hotels sind teurer als im gotischen Viertel nebenan",
      ],
    },
    {
      slug: "eixample",
      citySlug: "barcelona",
      name: "Eixample",
      lat: 41.3915,
      lng: 2.1649,
      bestFor: ["first-time", "family", "romantic"],
      vibe: "Das elegante Raster, im 19. Jahrhundert angelegt, mit breiten Boulevards, abgeschrägten Ecken und der größten Konzentration modernistischer Fassaden der Stadt entlang des Passeig de Gracia. Es bringt Sie in kurzer Gehweite zur Casa Batllo, La Pedrera und Sagrada Familia, an einem gut angebundenen Metronetz. Ruhig, geordnet und zentral, ohne das Gedränge der Altstadt.",
      pros: [
        "Zu Fuß zu den Gaudi-Häusern am Passeig de Gracia und nah an der Sagrada Familia",
        "Dichtes Metronetz, direkt zum Flughafenzug und überallhin sonst",
        "Breite, nachts ruhige Straßen und ein gutes Angebot an Mittelklassehotels",
      ],
      cons: [
        "Wirkt funktionaler und weniger romantisch als die Altstadtgassen",
        "Der Abschnitt direkt am Passeig de Gracia ist teuer zum Übernachten",
        "Manche Blocks sind ein langer, rasterartig gerader Weg zum Strand und Hafen",
      ],
    },
    {
      slug: "gracia",
      citySlug: "barcelona",
      name: "Gracia",
      lat: 41.4022,
      lng: 2.1568,
      bestFor: ["local", "budget", "nightlife"],
      vibe: "Ein ehemaliges Dorf, von der Stadt verschluckt, nördlich des Eixample, das sein eigenes Gefühl von kleinen Plätzen und Plazas und eine starke lokale Identität bewahrt. Unabhängige Läden, Bohème-Bars und familiengeführte Restaurants umgeben Plätze, an denen Einheimische an warmen Abenden im Freien trinken. Es ist die Basis für Reisende, die das echte Viertel dem Postkartenmotiv vorziehen, mit dem Park Guell am Hang darüber.",
      pros: [
        "Echtes Viertelleben, Plätze voller Einheimischer, nicht Reisegruppen",
        "Preiswerteres Essen und eine lebendige, aber unprätentiöse Barszene",
        "Zu Fuß hinauf zum Park Guell und mit der Metro ins Zentrum",
      ],
      cons: [
        "Ein 20-25-minütiger Fußweg oder eine Metrofahrt von der Altstadt und dem Strand",
        "Beliebte Plätze werden an Wochenendabenden laut",
        "Weniger große Markenhotels, mehr Apartments und kleine Pensionen",
      ],
    },
    {
      slug: "barceloneta",
      citySlug: "barcelona",
      name: "Barceloneta",
      lat: 41.3797,
      lng: 2.1894,
      bestFor: ["family", "budget", "local"],
      vibe: "Das alte Fischerviertel, eingekeilt zwischen dem Hafen und dem Stadtstrand, ein enges Raster schmaler Blocks, das direkt auf den Sand hinausführt. Es ist der Ort zum Übernachten, wenn der Strand der Sinn der Sache ist, mit Fischlokalen und der Strandpromenade vor der Tür. Tagsüber charaktervoll, und die Strandbars halten es im Sommer bis in die Nacht belebt.",
      pros: [
        "Wenige Schritte zum Stadtstrand und zur Promenade, kein Nahverkehr nötig",
        "Metro Barceloneta an der Linie L4, wenige Stationen zur Altstadt",
        "Echte Fisch- und Wermutbars eine Straße hinter dem Wasser",
      ],
      cons: [
        "Die Restaurants an der Uferpromenade sind Touristenfallen, essen Sie eine Straße landeinwärts",
        "Beengte, heiße Wohnungen im Sommer, und laut nahe den Strandbars",
        "Ein Fußweg oder eine Metrofahrt von den Gaudi-Sehenswürdigkeiten oben im Eixample",
      ],
    },
  ],

  pois: [
    {
      slug: "sagrada-familia",
      citySlug: "barcelona",
      name: "Sagrada Familia",
      lat: 41.4036,
      lng: 2.1744,
      kind: "sight",
      needsBooking: true,
      tip: "Kaufen Sie ein Ticket mit Zeitfenster Tage bis Wochen im Voraus online, es ist ausverkauft und es gibt in der Saison keine sinnvolle Möglichkeit, spontan hineinzukommen. Buchen Sie das erste Zeitfenster nach der Öffnung für das leerste Innere und das beste Morgenlicht durch die östlichen Fenster der Geburtsfassade, die früh blau und grün leuchten. Der Turmaufstieg ist ein separates kostenpflichtiges Extra mit eigenem Zeitfenster, fügen Sie ihn also bei der Buchung hinzu, nicht am Tag selbst.",
    },
    {
      slug: "park-guell",
      citySlug: "barcelona",
      name: "Park Guell",
      lat: 41.4145,
      lng: 2.1527,
      kind: "park",
      needsBooking: true,
      tip: "Die Monumentalzone mit der Mosaikterrasse und der berühmten Eidechse braucht ein Ticket mit Zeitfenster, das Tage im Voraus ausverkauft ist, buchen Sie also online und kommen Sie nie spontan. Nehmen Sie das erste Zeitfenster des Tages, gegen 9:30 Uhr, um sowohl den Menschenmengen als auch der Hitze auf der ungeschützten Terrasse zu entgehen, und nutzen Sie die Außenrolltreppen der Baixada de la Gloria, um den steilen Anstieg zu Fuß zu sparen. Der umliegende bewaldete Park ist kostenlos, wenn Sie nur die Aussicht ohne die Mosaike wollen.",
    },
    {
      slug: "casa-batllo",
      citySlug: "barcelona",
      name: "Casa Batllo",
      lat: 41.3917,
      lng: 2.1649,
      kind: "sight",
      needsBooking: true,
      tip: "Gaudis drachenschuppenverkleidetes Haus am Passeig de Gracia verkauft Tickets mit Zeitfenster, die in der Hochsaison schnell weg sind, buchen Sie also lieber online im Voraus, als anzustehen. Gehen Sie bei Öffnung oder im letzten Zeitfenster vor Schließung, um dem Gedränge der Reisegruppen auf der schmalen Treppe zu entgehen, und nutzen Sie das inkludierte Tablet mit erweitertem Audio für die animierten Details. Kombinieren Sie es mit La Pedrera, einen Fünf-Minuten-Weg denselben Boulevard hinauf.",
    },
    {
      slug: "la-pedrera",
      citySlug: "barcelona",
      name: "La Pedrera (Casa Mila)",
      lat: 41.3953,
      lng: 2.1619,
      kind: "sight",
      needsBooking: true,
      tip: "Gaudis wellenförmiger Wohnblock ist eine weitere Sehenswürdigkeit mit Zeitfenster, buchen Sie also online, statt aufzutauchen. Das Dach mit seinen kriegerhelmförmigen Schornsteinen ist der Lohn, am schönsten im letzten Tageszeitfenster für weicheres Licht, und im Sommer lohnt sich das separate Abendprogramm 'Nächte von Gaudi' auf dem Dach mit Musik und Getränken. Es liegt fünf Minuten den Passeig de Gracia hinauf von der Casa Batllo, machen Sie die beiden also zusammen.",
    },
    {
      slug: "la-rambla",
      citySlug: "barcelona",
      name: "La Rambla",
      lat: 41.3809,
      lng: 2.1729,
      kind: "sight",
      needsBooking: false,
      tip: "Dies ist die Touristenader, die man einmal für die Stimmung und die lebenden Statuen entlanggeht, nicht zum Essen oder Trinken, wo die Terrassen das Doppelte für mittelmäßiges Essen verlangen. Es ist der schlimmste einzelne Taschendieb-Hotspot der Stadt, halten Sie also Ihre Tasche geschlossen und vor sich und Ihr Handy aus der Gesäßtasche fern. Biegen Sie auf halber Strecke in den Boqueria-Markt und in die Straßen des Barri Gotic im Osten ab für alles, was Sie wirklich wollen.",
    },
    {
      slug: "barcelona-cathedral",
      citySlug: "barcelona",
      name: "Barri Gotic & Kathedrale von Barcelona",
      lat: 41.3839,
      lng: 2.1762,
      kind: "sight",
      needsBooking: false,
      tip: "Die gotische Kathedrale erhebt tagsüber eine kleine Eintrittsgebühr für Touristen (etwa 9 EUR, inklusive des Dachaufzugs und des Kreuzgangs mit seinen ansässigen Gänsen), und die kostenlosen Zeiten sind früh und spät dem Gottesdienst vorbehalten. Kommen Sie bei Öffnung, um den Kreuzgang ruhig zu haben, und verlaufen Sie sich dann absichtlich in den umliegenden Gassen, in Richtung Placa Sant Felip Neri und des mittelalterlichen jüdischen Viertels. Die Dachterrasse bietet einen nahen Blick über die Turmspitzen der Altstadt.",
    },
    {
      slug: "picasso-museum",
      citySlug: "barcelona",
      name: "Picasso-Museum",
      lat: 41.3852,
      lng: 2.1807,
      kind: "museum",
      needsBooking: true,
      tip: "Buchen Sie ein Zeitfenster online, die Schlange in der schmalen Gasse von El Born ist lang und das Museum begrenzt die Besucherzahlen. Die Sammlung ist am stärksten bei Picassos frühen Barcelona-Jahren und seiner Las-Meninas-Serie, nicht bei seinem berühmten Spätwerk, kommen Sie also für die Formung, nicht für die größten Hits. Der Eintritt ist donnerstagabends ab 17 Uhr und am ersten Sonntag des Monats kostenlos, aber Sie müssen das kostenlose Zeitfenster trotzdem im Voraus online reservieren.",
    },
    {
      slug: "la-boqueria",
      citySlug: "barcelona",
      name: "La Boqueria Markt",
      lat: 41.3818,
      lng: 2.1717,
      kind: "food",
      needsBooking: false,
      tip: "Der überdachte Markt an der La Rambla hat montags bis samstags geöffnet, etwa 8 bis 20:30 Uhr, und ist am besten am späten Vormittag, bevor die Reisegruppen kommen und nachdem die Händler aufgebaut haben. Die Stände ganz vorne sind für Touristen aufgeschlagen, gehen Sie also nach hinten und an die Seiten für die echten Fischhändler, Schinkentheken und einen Hocker an einer laufenden Bar wie Pinotxo oder El Quim für frisch zubereitete Teller. Sonntags geschlossen.",
    },
    {
      slug: "barceloneta-beach",
      citySlug: "barcelona",
      name: "Barceloneta-Strand",
      lat: 41.378,
      lng: 2.1925,
      kind: "experience",
      needsBooking: false,
      tip: "Der dem Zentrum nächste Stadtstrand, im Sommer überfüllt, kommen Sie also vor 11 Uhr für einen Platz und lassen Sie Taschen nie unbeaufsichtigt, denn Strandklau ist ständig. Die Paella- und Sangria-Restaurants an der Promenade sind überteuerte Fallen, essen Sie also eine Straße weiter hinten im eigentlichen Barceloneta oder bringen Sie ein Picknick mit. Für ruhigeren, saubereren Sand laufen Sie stattdessen nordwärts zu den Stränden Bogatell oder Mar Bella.",
    },
    {
      slug: "montjuic",
      citySlug: "barcelona",
      name: "Montjuic & Magischer Brunnen",
      lat: 41.3711,
      lng: 2.1519,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Der Hügel über dem Hafen beherbergt die Joan-Miro-Stiftung, das Kunstmuseum MNAC, Gärten und die Burg, geben Sie ihm also einen halben Tag und nehmen Sie die Standseilbahn und dann die Seilbahn hinauf, um den Anstieg zu sparen. Der Magische Brunnen unterhalb des MNAC bietet an ausgewählten Abenden kostenlose Licht-und-Musik-Shows (typischerweise Donnerstag bis Samstag im Sommer, in der Nebensaison an weniger Abenden), prüfen Sie also den aktuellen Spielplan, bevor Sie gehen, denn im Winter und bei Dürren ist er abgeschaltet. Kommen Sie 20 Minuten früher für einen Platz auf den Stufen.",
    },
    {
      slug: "palau-de-la-musica",
      citySlug: "barcelona",
      name: "Palau de la Musica Catalana",
      lat: 41.3875,
      lng: 2.1751,
      kind: "sight",
      needsBooking: true,
      tip: "Der modernistische Konzertsaal ist nur bei einer geführten Tour mit Zeitfenster oder durch den Besuch eines Konzerts zu besichtigen, und die Tour-Zeitfenster sind ausverkauft, buchen Sie also online im Voraus. Das Buntglasoberlicht und die mosaikbesetzten Säulen der Fassade des Hauptsaals sind der Grund zu kommen, und ein kurzer geführter Besuch genügt, um sie zu sehen. Wenn Sie können, buchen Sie stattdessen ein echtes Abendkonzert, oft ein preiswertes Programm mit spanischer Gitarre oder katalanischer Musik, um den Saal beleuchtet und in Betrieb zu sehen.",
    },
    {
      slug: "santa-maria-del-mar",
      citySlug: "barcelona",
      name: "El Born & Santa Maria del Mar",
      lat: 41.3838,
      lng: 2.182,
      kind: "sight",
      needsBooking: false,
      tip: "Die Kirche aus dem 14. Jahrhundert ist während der Gottesdienstzeiten kostenlos zu betreten, verlangt aber eine kleine Gebühr (etwa 10 EUR) für die geführte Besichtigung von Dach und Krypta, die die eine wegen der Aussicht und des reinen katalanisch-gotischen Inneren wert ist. Kommen Sie am frühen Abend in die umliegenden Gassen von El Born zu den Wein- und Tapasbars, und zielen Sie abseits des Haupt-Passeig del Born für ein besseres Preis-Leistungs-Verhältnis. Das aufstrebende, schmucklose Kirchenschiff ist das Gegenmittel zu Gaudis Überschwang.",
    },
    {
      slug: "bunkers-del-carmel",
      citySlug: "barcelona",
      name: "Aussichtspunkt Bunkers del Carmel",
      lat: 41.4194,
      lng: 2.1622,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Die alten Flugabwehrbunker aus dem Bürgerkrieg auf dem Turo de la Rovira bieten den besten kostenlosen 360-Grad-Blick über die ganze Stadt und aufs Meer hinaus, und es ist der Sonnenuntergangsplatz der Einheimischen. Oben gibt es keinen Laden und es ist ein 15-minütiger Anstieg zu Fuß von der nächsten Bushaltestelle, bringen Sie also Ihre eigenen Getränke und Snacks mit, dazu eine zusätzliche Schicht, denn es wird windig. Der Zugang ist nach 21:30 Uhr offiziell eingeschränkt, um Lärm einzudämmen, kommen Sie also für den Sonnenuntergang, nicht für eine späte Nacht.",
    },
    {
      slug: "parc-de-la-ciutadella",
      citySlug: "barcelona",
      name: "Parc de la Ciutadella",
      lat: 41.3884,
      lng: 2.1866,
      kind: "park",
      needsBooking: false,
      tip: "Die zentrale Grünfläche der Stadt neben El Born ist kostenlos und den ganzen Tag geöffnet, der natürliche Ort, um zwischen den Altstadt-Sehenswürdigkeiten zu entschleunigen. Mieten Sie ein Ruderboot auf dem See, sehen Sie den prächtigen Cascada-Brunnen, den ein junger Gaudi mitgestaltete, und picknicken Sie an einem warmen Nachmittag mit Einheimischen auf den Rasenflächen. Das katalanische Parlament und ein kleiner Zoo liegen auf dem Gelände, falls Sie Kinder dabeihaben.",
    },
  ],

  itineraries: [
    {
      citySlug: "barcelona",
      days: 2,
      summary:
        "Zwei Tage decken Barcelonas Top-Sehenswürdigkeiten ab, aber es ist ein Highlights-Eilmarsch, denn die Stadt will eigentlich drei, um den Gaudi-Rundgang, die Altstadt und den Strand ordentlich aufzuteilen. In 48 Stunden können Sie am ersten Tag die Gaudi-Essentials machen (Sagrada Familia, die Häuser am Passeig de Gracia, Park Guell) und am zweiten Tag die Altstadt (die Kathedrale, El Born, das Picasso-Museum, La Boqueria, La Rambla), mit einem kurzen Strand- oder Sonnenuntergangsstopp, wenn die Energie hält. Was Sie streichen müssen: Montjuic, den Palau de la Musica, einen richtigen Strandnachmittag und jedes gemächliche Verweilen, dies ist also ein Marsch. Es eignet sich für einen Wochenendtrip, einen Zwischenstopp oder einen ersten Vorgeschmack. Die Nicht-Verhandelbaren: Buchen Sie die Zeitfenster für Sagrada Familia und Park Guell Wochen vor dem Abflug vor, dazu Casa Batllo oder La Pedrera, sonst kommen Sie überhaupt nicht hinein. Nehmen Sie Ihre Basis im Barri Gotic, damit der Altstadttag zu Fuß läuft und die Gaudi-Metrofahrten kurz sind. Halten Sie Ihre Taschen geschlossen, die Altstadt und die Metro sind Taschendieb-Hotspots.",
      stayNeighborhoodSlug: "barri-gotic",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Gaudi-Rundgang: Sagrada Familia, Passeig de Gracia, Park Guell",
          morning: [
            {
              poiSlug: "sagrada-familia",
              text: "Beginnen Sie an der Sagrada Familia zu Ihrem vorgebuchten ersten Zeitfenster, vor den Menschenmengen und mit der Morgensonne, die die blaugrünen Fenster der Geburtsfassade beleuchtet. Nehmen Sie sich volle 90 Minuten für das Innere und die Fassaden, und steigen Sie auf einen Turm, wenn Sie das Zeitfenster hinzugefügt haben.",
              durationMin: 90,
            },
            {
              poiSlug: "casa-batllo",
              text: "Nehmen Sie die Metro zwei Stationen zum Passeig de Gracia für Gaudis Häuser. Machen Sie die Casa Batllo zu Ihrem Zeitfenster für die drachenschuppige Fassade und das animierte Audio-Tablet, und laufen Sie dann fünf Minuten den Boulevard hinauf.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "la-pedrera",
              text: "Sehen Sie La Pedrera (Casa Mila) fünf Minuten denselben Boulevard hinauf, zu Ihrem Zeitfenster, für die Wellenfassade und die kriegerhelmförmigen Schornsteine auf dem Dach. Nehmen Sie ein schnelles Mittagessen in einer Seitenstraße abseits des Passeig de Gracia statt auf den teuren Boulevardterrassen.",
              durationMin: 90,
            },
            {
              poiSlug: "park-guell",
              text: "Gehen Sie hinauf zum Park Guell für ein Nachmittagszeitfenster in der Monumentalzone, nehmen Sie die Metro und dann die Außenrolltreppen, um den steilen Anstieg zu sparen. Sehen Sie die Mosaikterrasse und die Eidechse, und bleiben Sie dann für die kostenlosen bewaldeten Aussichtspunkte über die Stadt.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "santa-maria-del-mar",
              text: "Kommen Sie wieder herunter und widmen Sie den Abend El Born, streifen Sie durch die mittelalterlichen Gassen rund um Santa Maria del Mar, während sich die Weinbars füllen. Reservieren Sie gegen 20:30 Uhr einen Tapastisch abseits des Haupt-Passeig del Born, wo die Spots mit dem besten Preis-Leistungs-Verhältnis sind.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Altstadt: Kathedrale, Picasso, Boqueria, La Rambla",
          morning: [
            {
              poiSlug: "barcelona-cathedral",
              text: "Beginnen Sie bei Öffnung an der Kathedrale von Barcelona, um den Kreuzgang und seine Gänse ruhig zu haben, und fahren Sie hinauf zur Dachterrasse für den Blick über die gotischen Turmspitzen. Verlaufen Sie sich dann absichtlich im Barri Gotic, in Richtung Placa Sant Felip Neri und des alten jüdischen Viertels.",
              durationMin: 90,
            },
            {
              poiSlug: "picasso-museum",
              text: "Gehen Sie ostwärts nach El Born zum Picasso-Museum zu Ihrem vorgebuchten Zeitfenster, für seine frühen Barcelona-Jahre und die Las-Meninas-Serie statt des berühmten Spätwerks. Es ist ein kompaktes Museum, 75 Minuten reichen also vor dem Mittagessen.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "la-boqueria",
              text: "Schlagen Sie hinüber zum La-Boqueria-Markt an der La Rambla zum Mittagessen, und gehen Sie zu den hinteren Ständen für einen Hocker an einer laufenden Bar wie Pinotxo oder El Quim für frisch zubereitete Teller. Die vorderen Stände sind für Touristen aufgeschlagen, bleiben Sie also in Bewegung.",
              durationMin: 75,
            },
            {
              poiSlug: "la-rambla",
              text: "Gehen Sie die La Rambla einmal in ganzer Länge für die Stimmung und die lebenden Statuen, halten Sie Ihre Tasche geschlossen und vor sich, denn dies ist der schlimmste Taschendieb-Ort der Stadt. Folgen Sie ihr hinunter zur Kolumbus-Säule und zum Hafen am Ende.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "barceloneta-beach",
              text: "Laufen Sie vom Hafen die Promenade entlang zum Barceloneta-Strand für ein spätnachmittägliches Stück Sand und ein Bad, wenn es warm genug ist. Achten Sie auf Ihre Taschen, denn Strandklau ist ständig.",
              durationMin: 90,
            },
            {
              text: "Nehmen Sie ein Abschiedsessen in Barceloneta eine Straße hinter der Uferpromenade, wo der Fisch ehrlich ist und die Fallen an der Promenade liegen. Bestellen Sie frischen Fisch oder eine richtige Paella zu Mittagspreisen statt der Touristenmenü-Versionen am Wasser.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "barcelona",
      days: 3,
      summary:
        "Ja, drei Tage sind die richtige Länge für Barcelona, und es ist, was wir für einen ersten Besuch empfehlen. Es gibt dem Gaudi-Rundgang einen ganzen Tag (Sagrada Familia, die Häuser am Passeig de Gracia, Park Guell), der Altstadt ihren eigenen Tag (die Kathedrale, El Born, das Picasso-Museum, La Boqueria, La Rambla) und einen dritten Tag, der den Strand mit dem modernistischen Konzertsaal und dem Ciutadella-Park in gemächlicherem Tempo mischt. Sie essen gut quer durch Eixample, El Born und Barceloneta, bringen sowohl einen richtigen Strandnachmittag als auch einen Sonnenuntergang unter und sitzen trotzdem auf einem Platz, statt an ihm vorbeizuhetzen. Was noch gestrichen wird: Montjuic in voller Länge und jeder Tagesausflug, was genau das ist, was ein vierter Tag hinzufügt. Das eignet sich für Erstbesucher, Paare und alle, die als Nächstes nach Sevilla oder Granada weiterreisen. Übernachten Sie im Eixample: Er läuft zu Fuß zu den Gaudi-Häusern am Passeig de Gracia, liegt nah an der Sagrada Familia, und sein Metronetz macht Altstadt und Strand schnell erreichbar. Buchen Sie die Sagrada Familia, den Park Guell und die Häuser am Passeig de Gracia Wochen vor dem Abflug vor, und halten Sie Ihre Taschen in der Altstadt und in der Metro geschlossen.",
      stayNeighborhoodSlug: "eixample",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Gaudi-Rundgang: Sagrada Familia, Passeig de Gracia, Park Guell",
          morning: [
            {
              poiSlug: "sagrada-familia",
              text: "Beginnen Sie an der Sagrada Familia zu Ihrem vorgebuchten ersten Zeitfenster, den Menschenmengen voraus und mit dem Morgenlicht durch die östlichen Geburtsfenster. Nehmen Sie sich volle 90 Minuten für das Innere und beide Fassaden, und fügen Sie einen Turmaufstieg hinzu, wenn Sie einen gebucht haben.",
              durationMin: 90,
            },
            {
              poiSlug: "casa-batllo",
              text: "Gehen Sie zu Fuß oder nehmen Sie eine Metrostation zum Passeig de Gracia für die Casa Batllo zu Ihrem Zeitfenster, für die drachenschuppige Fassade und das animierte Audio-Tablet. Von Ihrer Basis im Eixample ist all das nah, halten Sie das Tempo also entspannt.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "la-pedrera",
              text: "Sehen Sie La Pedrera (Casa Mila) fünf Minuten denselben Boulevard hinauf zu Ihrem Zeitfenster, für die Wellenfassade und die kriegerhelmförmigen Dachschornsteine. Essen Sie in einer ruhigen Seitenstraße abseits des Passeig de Gracia zu Mittag, nicht auf den Boulevardterrassen.",
              durationMin: 90,
            },
            {
              poiSlug: "park-guell",
              text: "Gehen Sie hinauf zum Park Guell für ein Nachmittagszeitfenster in der Monumentalzone, nutzen Sie die Metro und dann die Außenrolltreppen, um den steilen Anstieg auszulassen. Sehen Sie die Mosaikterrasse und die Eidechse, und verweilen Sie dann an den kostenlosen bewaldeten Aussichtspunkten, während das Licht weicher wird.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              text: "Kommen Sie zum Abendessen im Eixample nahe Ihrer Basis herunter, wo die Tapasbars und Wermutspots solide und frei vom Altstadtaufschlag sind. Reservieren Sie im Voraus für alles gut Bewertete, die guten Tische sind bis 21 Uhr voll.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Altstadt: Kathedrale, El Born, Picasso, Boqueria, La Rambla",
          morning: [
            {
              poiSlug: "barcelona-cathedral",
              text: "Beginnen Sie bei Öffnung an der Kathedrale von Barcelona für den ruhigen Kreuzgang und seine Gänse, und fahren Sie dann zur Dachterrasse für den Blick über die gotischen Turmspitzen. Streifen Sie danach durch die Gassen des Barri Gotic, in Richtung Placa Sant Felip Neri und des mittelalterlichen jüdischen Viertels.",
              durationMin: 90,
            },
            {
              poiSlug: "picasso-museum",
              text: "Gehen Sie ostwärts nach El Born zum Picasso-Museum zu Ihrem vorgebuchten Zeitfenster, stark bei seinen frühen Barcelona-Jahren und der Las-Meninas-Serie. Es ist kompakt, 75 Minuten decken es also vor dem Mittagessen ab.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "santa-maria-del-mar",
              text: "Treten Sie in die nahe Santa Maria del Mar für das aufstrebende, schmucklose katalanisch-gotische Kirchenschiff, und machen Sie die Besichtigung von Dach und Krypta gegen kleine Gebühr, wenn die Aussicht Sie reizt. Stöbern Sie dann in den Boutiquen und Gassen von El Born ringsum.",
              durationMin: 60,
            },
            {
              poiSlug: "la-boqueria",
              text: "Gehen Sie hinüber zum La-Boqueria-Markt an der La Rambla für ein spätes Mittagessen an einer Bar an den hinteren Ständen wie Pinotxo oder El Quim, und lassen Sie die aufgeschlagenen vorderen Stände aus. Gehen Sie dann die La Rambla einmal in ganzer Länge für die Stimmung, die Tasche geschlossen und vor sich, hinunter zum Hafen.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "bunkers-del-carmel",
              text: "Gehen Sie zum Sonnenuntergang hinauf zu den Bunkers del Carmel, dem kostenlosen 360-Grad-Aussichtspunkt über die ganze Stadt, nehmen Sie einen Bus für den größten Teil des Weges und dann den 15-minütigen Anstieg zu Fuß. Bringen Sie Ihre eigenen Getränke und Snacks mit, denn oben gibt es keinen Laden, und kommen Sie für den Sonnenuntergang statt für eine späte Nacht.",
              durationMin: 90,
            },
            {
              text: "Kommen Sie zum Abendessen in El Born oder Ihrer Basis im Eixample herunter, und reservieren Sie im Voraus. Krönen Sie es mit einem Cocktail in einer der designorientierten Bars von El Born, wenn Sie noch Energie haben.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Konzertsaal, Ciutadella und der Strand",
          morning: [
            {
              poiSlug: "palau-de-la-musica",
              text: "Beginnen Sie mit einer vorgebuchten geführten Tour durch den Palau de la Musica Catalana, für das Buntglasoberlicht und den mosaikbesetzten Hauptsaal. Der kurze Besuch genügt, um das modernistische Innere zu sehen, bevor der Tag sich erwärmt.",
              durationMin: 75,
            },
            {
              poiSlug: "parc-de-la-ciutadella",
              text: "Gehen Sie zum nahen Parc de la Ciutadella, kostenlos und grün, für den prächtigen Cascada-Brunnen, den ein junger Gaudi mitgestaltete, und ein Ruderboot auf dem See. Picknicken Sie auf den Rasenflächen oder nehmen Sie ein leichtes Mittagessen am El-Born-Rand des Parks.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "barceloneta-beach",
              text: "Laufen Sie hinunter zum Barceloneta-Strand für den Nachmittag und ein Bad, wenn es warm ist, und behalten Sie Ihre Taschen jederzeit im Blick. Für saubereren, ruhigeren Sand laufen Sie stattdessen nordwärts zu den Stränden Bogatell oder Mar Bella.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              text: "Nehmen Sie ein Fischessen in Barceloneta eine Straße hinter der Promenade, meiden Sie die Fallen am Ufer, und bestellen Sie frischen Fisch oder einen Arroz. Dies ist das Essen, bei dem Sie für Ihren letzten Abend klassisch werden sollten.",
              durationMin: 120,
            },
            {
              text: "Beschließen Sie es mit einem gemächlichen Wermut oder einem Spaziergang entlang des Yachthafens am Port Vell, während die Lichter angehen. Alles ist von Ihrer Basis im Eixample per Metro nah, es ist also kein langer Heimweg zu planen.",
              durationMin: 45,
            },
          ],
        },
      ],
    },
    {
      citySlug: "barcelona",
      days: 4,
      summary:
        "Vier Tage sind der Idealwert für einen ersten Besuch in Barcelona und machen aus einem Besichtigungs-Eilmarsch einen richtigen Urlaub. Die Tage eins bis drei decken die Essentials ab: den Gaudi-Rundgang (Sagrada Familia, die Häuser am Passeig de Gracia, Park Guell), die Altstadt (die Kathedrale, El Born, das Picasso-Museum, La Boqueria, La Rambla) und einen gemischten Tag mit dem Konzertsaal, dem Ciutadella-Park und dem Strand, jeder ohne Hetze. Der vierte Tag ist das Ventil, aufgebaut rund um Montjuic (das MNAC, Miro, die Gärten und die Burg, per Standseilbahn und Seilbahn erreicht) plus den Magischen Brunnen, oder eingetauscht gegen einen Tagesausflug hinaus zum Bergkloster von Montserrat oder nach Girona mit dem Schnellzug. Diese Länge eignet sich für Reisende, die den Eilmarsch hassen, für Paare und für alle, deren Flüge die Reise ungünstig einrahmen. Für vier Tage empfehlen wir eine Basis in Gracia: Sie haben ein gemächlicheres Tempo akzeptiert, und seine Plätze und familiengeführten Bars machen das Nachhausekommen jeden Abend zum besten Teil des Tages, mit dem Park Guell am Hang darüber. Buchen Sie die Sagrada Familia, den Park Guell und die Gaudi-Häuser rechtzeitig vor, und halten Sie Ihre Taschen im Gedränge geschlossen.",
      stayNeighborhoodSlug: "gracia",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Gaudi-Rundgang: Sagrada Familia, Passeig de Gracia, Park Guell",
          morning: [
            {
              poiSlug: "sagrada-familia",
              text: "Beginnen Sie an der Sagrada Familia zu Ihrem gebuchten ersten Zeitfenster, vor den Menschenmengen und mit dem Morgenlicht in den Fenstern der Geburtsfassade. Geben Sie ihr 90 Minuten, und fügen Sie einen Turmaufstieg hinzu, wenn Sie das Zeitfenster gebucht haben.",
              durationMin: 90,
            },
            {
              poiSlug: "casa-batllo",
              text: "Nehmen Sie die Metro zum Passeig de Gracia für die Casa Batllo zu Ihrem Zeitfenster, für die drachenschuppige Fassade und das animierte Audio-Tablet. Laufen Sie dann fünf Minuten den Boulevard hinauf.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "la-pedrera",
              text: "Sehen Sie La Pedrera (Casa Mila) denselben Boulevard hinauf zu Ihrem Zeitfenster, für die Wellenfassade und das kriegerhelmförmige Dach. Essen Sie in einer Seitenstraße abseits des Passeig de Gracia zu Mittag, nicht auf den Boulevardterrassen.",
              durationMin: 90,
            },
            {
              poiSlug: "park-guell",
              text: "Gehen Sie hinauf zum Park Guell für ein Nachmittagszeitfenster in der Monumentalzone, die direkt über Ihrer Basis in Gracia liegt, nutzen Sie die Außenrolltreppen für den Anstieg. Sehen Sie die Mosaikterrasse und die Eidechse, und laufen Sie dann hinunter ins eigentliche Gracia.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              text: "Lassen Sie sich für den Abend in Gracia nieder, trinken Sie vor dem Essen wie die Einheimischen im Freien auf einem seiner Plätze. Die familiengeführten Restaurants und unprätentiösen Bars des Viertels sind einen kurzen Weg von Ihrem Bett.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Altstadt: Kathedrale, El Born, Picasso, Boqueria, La Rambla",
          morning: [
            {
              poiSlug: "barcelona-cathedral",
              text: "Nehmen Sie die Metro hinunter zur Kathedrale von Barcelona bei Öffnung für den ruhigen Kreuzgang und seine Gänse und den Dachblick über die gotischen Turmspitzen. Streifen Sie danach durch den Barri Gotic, in Richtung Placa Sant Felip Neri und des mittelalterlichen jüdischen Viertels.",
              durationMin: 90,
            },
            {
              poiSlug: "picasso-museum",
              text: "Gehen Sie ostwärts nach El Born zum Picasso-Museum zu Ihrem gebuchten Zeitfenster, stark bei den frühen Barcelona-Jahren und Las Meninas. Ein kompaktes Museum, 75 Minuten reichen also vor dem Mittagessen.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "la-boqueria",
              text: "Gehen Sie hinüber zum La-Boqueria-Markt zum Mittagessen an einer Bar an den hinteren Ständen wie Pinotxo oder El Quim, und lassen Sie die touristisch bepreisten vorderen Stände aus. Gehen Sie dann die La Rambla einmal für die Stimmung, die Tasche geschlossen und vor sich, hinunter zum Hafen.",
              durationMin: 120,
            },
            {
              poiSlug: "parc-de-la-ciutadella",
              text: "Machen Sie eine Schleife zurück zum Parc de la Ciutadella neben El Born, kostenlos und grün, für den Cascada-Brunnen und ein Ruderboot auf dem See. Eine ruhige Pause mitten in einem Altstadttag.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "santa-maria-del-mar",
              text: "Kehren Sie am Abend nach El Born rund um Santa Maria del Mar zurück, treten Sie in das aufstrebende gotische Kirchenschiff, wenn es geöffnet ist, und dann hinaus zu den Weinbars. Zielen Sie abseits des Haupt-Passeig del Born für Tapas mit besserem Preis-Leistungs-Verhältnis.",
              durationMin: 90,
            },
            {
              text: "Nehmen Sie das Abendessen in El Born, reservieren Sie im Voraus für alles gut Bewertete, bevor Sie wieder hinauf nach Gracia gehen. Beenden Sie es mit einem Cocktail in einer der designorientierten Bars des Viertels, wenn die Nacht noch jung ist.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Konzertsaal, Strand und Sonnenuntergang",
          morning: [
            {
              poiSlug: "palau-de-la-musica",
              text: "Beginnen Sie mit einer vorgebuchten geführten Tour durch den Palau de la Musica Catalana, für das Buntglasoberlicht und den mosaikbesetzten Saal. Der kurze Besuch genügt, um das modernistische Innere zu sehen, bevor der Tag heiß wird.",
              durationMin: 75,
            },
            {
              poiSlug: "la-rambla",
              text: "Wenn Sie sie ausgelassen haben, gehen Sie jetzt die La Rambla und die Straßen daneben, die Tasche geschlossen, und schlagen Sie dann hinunter zum Hafen und zum Yachthafen Port Vell. Nehmen Sie ein frühes Mittagessen eine Straße hinter dem Wasser statt auf den Touristenterrassen.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "barceloneta-beach",
              text: "Widmen Sie den Nachmittag dem Barceloneta-Strand und einem Bad, wenn es warm ist, und achten Sie jederzeit auf Ihre Taschen. Laufen Sie nordwärts zu den saubereren Stränden Bogatell oder Mar Bella, wenn Sie ruhigeren Sand und weniger Menschen wollen.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "bunkers-del-carmel",
              text: "Gehen Sie zum Sonnenuntergang hinauf zu den Bunkers del Carmel, dem kostenlosen 360-Grad-Aussichtspunkt über die Stadt, der nah an Ihrer Basis in Gracia liegt. Bringen Sie Ihre eigenen Getränke und Snacks mit, denn oben gibt es keinen Laden, und es wird windig.",
              durationMin: 90,
            },
            {
              text: "Kommen Sie zum Abendessen in Gracia herunter, an einem warmen Abend auf einer Platzterrasse, und reservieren Sie im Voraus für die beliebten Spots. Ein entspannter lokaler Abend statt einer Touristenmeile.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Montjuic und Magischer Brunnen, oder ein Tagesausflug",
          morning: [
            {
              poiSlug: "montjuic",
              text: "Widmen Sie den Vormittag Montjuic, nehmen Sie die Standseilbahn und dann die Seilbahn hinauf, um den Anstieg zu sparen, für das Kunstmuseum MNAC, die Joan-Miro-Stiftung, die Gärten und die Burg mit ihrem Blick über den Hafen. Alternativ tauschen Sie den ganzen Tag gegen einen Zug hinaus zum Bergkloster von Montserrat für die gezackten Gipfel und den Knabenchor, oder nach Girona für seine Kathedrale und sein altes jüdisches Viertel.",
              durationMin: 240,
            },
          ],
          afternoon: [
            {
              text: "Kommen Sie durch die Gärten und das Architekturdorf Poble Espanyol von Montjuic herunter, wenn es Sie reizt, oder nehmen Sie den Tagesausflugszug am späten Nachmittag zurück nach Sants. So oder so, halten Sie das Tempo gemächlich, denn dies ist der Ventiltag.",
              durationMin: 120,
            },
            {
              text: "Ruhen Sie sich nahe Ihrer Basis in Gracia oder im Eixample bei einem Kaffee und einem gemächlichen Spaziergang aus, und schonen Sie Ihre Beine für einen letzten großen Abend. Wenn Sie Montserrat gemacht haben, kommen Sie um diese Zeit zurück.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "montjuic",
              text: "Wenn der Spielplan läuft, gehen Sie zum Magischen Brunnen unterhalb des MNAC auf Montjuic für die kostenlose Licht-und-Musik-Show, und kommen Sie 20 Minuten früher für einen Platz auf den Stufen. Prüfen Sie zuerst die aktuellen Abende, denn er läuft nur an ausgewählten Abenden und ist im Winter und bei Dürren abgeschaltet.",
              durationMin: 60,
            },
            {
              text: "Beschließen Sie es mit einem Abschiedsessen zurück in Gracia, und gönnen Sie sich Ihr letztes katalanisches Mahl in einem Platzrestaurant, das Sie zuvor ausgekundschaftet haben. Beenden Sie es mit einem Absacker auf einem ruhigen Platz, einen kurzen Weg von Ihrem Bett, was der ganze Sinn ist, sich für vier Tage hier niederzulassen.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
  ],
};

export default barcelonaDe;
