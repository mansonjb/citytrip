import type { CityData } from "../types";

const copenhagenDe: CityData = {
  city: {
    slug: "copenhagen",
    name: "Kopenhagen",
    country: "Danemark",
    countrySlug: "denmark",
    lat: 55.6761,
    lng: 12.5683,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "CPH",
    airportToCenter:
      "Die Metro-Linie M2 fährt vom Flughafen Kopenhagen (CPH) direkt ins Zentrum und erreicht Kongens Nytorv beim Nyhavn in etwa 15 Minuten für rund 4,50 EUR (36 DKK), im Minutentakt und die ganze Nacht hindurch. Ein Regionalzug legt dieselbe Strecke zum Hauptbahnhof in etwa 13 Minuten zurück, falls Ihr Hotel auf dieser Seite liegt; beide schlagen ein Taxi, das 40 EUR oder mehr kostet.",
    centerWalkable: true,
    bestMonths: [5, 6, 7, 8],
    avoidMonths: [1],
    monthlyNotes: {
      1: "Der dunkelste, kälteste Monat mit Höchstwerten um 2 C, das Tageslicht ist am frühen Nachmittag verschwunden, und die Tivoli-Garten bleiben nach ihrem Neujahrsfinale in den ersten Tagen des Monats geschlossen. Die Preise erreichen ihren Jahrestiefstand und die Sehenswürdigkeiten sind leer, also setzen Sie auf Museen, kerzenbeleuchtete Cafés und das dänische Hygge, um das die Einheimischen die ganze Saison herum aufbauen.",
      2: "Immer noch kalt und grau bei etwa 3 C, der ruhigste volle Monat des Jahres, was Andrang wie Preise angeht. Bringen Sie richtige Schichten und einen winddichten Mantel für den Hafen mit, buchen Sie nichts weit im Voraus und betrachten Sie dies als Museums-und-Café-Reise statt als Ausflug ins Freie.",
      3: "Die Höchstwerte klettern Richtung 5 C und das Tageslicht kehrt schnell zurück, auch wenn es kühl und oft nass bleibt. Der Andrang ist gering und die Preise niedrig; die eigentliche Wende kommt spät im Monat, wenn die Tivoli-Garten um Anfang April für ihre Frühlingssaison wieder öffnen und die Stimmung steigt.",
      4: "Der Frühling kommt bei etwa 10 C, die Tivoli-Garten sind wieder geöffnet und die ersten warmen Terrassen füllen sich. Ostern bringt einen kurzen lokalen Feiertag, an dem manche Läden schließen, doch der Andrang ist noch moderat und die Preise liegen unter dem Sommerniveau, was dies zu einem klugen Fenster in der Nebensaison macht.",
      5: "Einer der besten Monate, mit Höchstwerten nahe 15 C, langen hellen Abenden und allem geöffnet. Der Andrang wächst, hat aber noch nicht seinen Höhepunkt erreicht, das Hafenleben startet neu und die Stadt fühlt sich von ihrer optimistischsten Seite; reservieren Sie beliebte Restaurants im Voraus und rechnen Sie mit steigenden Preisen Richtung Sommerniveau.",
      6: "Warm bei etwa 19 C mit den längsten Tagen des Jahres, wenn es kaum dunkel wird. Distortion, die riesige Straßenparty, übernimmt Anfang Juni an fünf Tagen verschiedene Viertel und zieht große Menschenmengen und laute Nächte an; prüfen Sie die Termine, denn je nach dem, was Sie möchten, macht oder bricht das Ihre Reise.",
      7: "Hochsaison bei etwa 21 C, voll und teuer, mit dem Copenhagen Jazz Festival, das Anfang Juli zehn Tage lang Plätze, Höfe und Clubs füllt. Die Hafenbäder sind geöffnet, der Tivoli läuft bis spät und die Hotels sind ausgebucht, also reservieren Sie Zimmer und etwaige Festivaltickets weit im Voraus.",
      8: "Immer noch warm bei etwa 21 C und geschäftig, die letzte Etappe des vollen Sommers, bevor die Schulen wieder beginnen. Baden im Hafen, späte Tivoli-Abende und Essen im Freien sind alle auf ihrem Höhepunkt; die Preise bleiben früh im Monat hoch und lassen zum Ende hin nach.",
      9: "Höchstwerte um 17 C, der Andrang lichtet sich nach der ersten Woche und es ist der mildeste der Übergangsmonate. Das ist die ruhig-kluge Wahl: Terrassen funktionieren an warmen Tagen weiter, der Tivoli bleibt geöffnet, die Museen sind ruhig und die Preise gleiten vom Sommerhoch zurück.",
      10: "Kühler bei etwa 12 C mit mehr Regen und echten Herbstfarben in den Parks. Die Tivoli-Garten veranstalten den ganzen Monat über eine beliebte Halloween-Saison mit Kürbis-Inszenierungen, ein guter Grund für einen Besuch; ansonsten fällt der Andrang und die Preise folgen.",
      11: "Grau, nass und kalt mit Höchstwerten nahe 7 C und kurzen Tagen, die letzte ruhige Etappe vor den Feiertagen. Die Tivoli-Garten öffnen um die Monatsmitte in weihnachtlichem Gewand mit Lichtern, Ständen und Glögg wieder, und die Weihnachtsmärkte der Stadt beginnen und heben die sonst dunklen Nachmittage.",
      12: "Kalt bei etwa 4 C mit den kürzesten Tagen des Jahres, aber der stimmungsvollste Monat im Innenraum. Die Weihnachtssaison des Tivoli, die Märkte am Nyhavn und am Højbro Plads, Glühwein und überall Hygge tragen die Stimmung; buchen Sie die Unterkunft früh für die Woche um Weihnachten und Neujahr, die sich schnell füllt.",
    },
    climate: {
      1: { highC: 2, lowC: -2, rainyDays: 11 },
      2: { highC: 3, lowC: -2, rainyDays: 9 },
      3: { highC: 5, lowC: 0, rainyDays: 9 },
      4: { highC: 10, lowC: 3, rainyDays: 8 },
      5: { highC: 15, lowC: 8, rainyDays: 8 },
      6: { highC: 19, lowC: 11, rainyDays: 8 },
      7: { highC: 21, lowC: 13, rainyDays: 9 },
      8: { highC: 21, lowC: 13, rainyDays: 10 },
      9: { highC: 17, lowC: 10, rainyDays: 9 },
      10: { highC: 12, lowC: 6, rainyDays: 11 },
      11: { highC: 7, lowC: 3, rainyDays: 12 },
      12: { highC: 4, lowC: 0, rainyDays: 11 },
    },
    budgetLevel: "high",
    budgetPerDay: { budget: 90, mid: 180, high: 350 },
    tagline: "Design, Hafenbaden und Zimtschnecken, alles auf zwei Rädern.",
    heroIntro:
      "Kopenhagen packt königliche Schlösser, einen aktiven Hafen, in dem Sie schwimmen können, und einige der besten Restaurants Europas in ein kompaktes Zentrum, das Sie zu Fuß durchqueren. Die Stadt ist zuerst fürs Rad gebaut, also ist der klügste Zug, eines zu mieten oder die fahrerlose Metro zu nehmen, statt um Taxis zu kämpfen. Drei Tage decken den königlichen Kern, Christiania und die Gastronomieszene in gemächlichem Tempo ab, mit Zeit übrig, um am Wasser zu sitzen.",
    accent: { from: "#3B5BA5", to: "#E86A6A", ink: "#1E2E52" },
    neighborhoodSlugs: [
      "indre-by",
      "nyhavn",
      "vesterbro",
      "norrebro",
      "christianshavn",
    ],
    nearbyCitySlugs: ["berlin"],
  },

  neighborhoods: [
    {
      slug: "indre-by",
      citySlug: "copenhagen",
      name: "Indre By (Altstadt)",
      lat: 55.6794,
      lng: 12.5776,
      bestFor: ["first-time", "romantic"],
      vibe: "Der mittelalterliche Kern zwischen Strøget, den Schlössern und den Kanälen, wo fast jede große Sehenswürdigkeit in einem Zehn-Minuten-Fußweg liegt. Er ist dicht, ansehnlich und tagsüber geschäftig, ruhiger sobald die Läden schließen, und stellt Sie zu Fuß an den Runden Turm, Rosenborg und Nyhavn. Für diese Bequemlichkeit zahlen Sie einen klaren Aufschlag.",
      pros: [
        "Der Runde Turm, Rosenborg, Strøget und Nyhavn alle zu Fuß",
        "Beste straßenbahnfreie Begehbarkeit und Metro-Anbindung der Stadt",
        "Kein Nahverkehr nötig für einen 2-Tage-Trip",
      ],
      cons: [
        "Höchste Zimmerpreise in Kopenhagen",
        "Die Hauptstraßen sind für Essen und Trinken zu Touristenpreisen",
        "Weniger lokale Restaurants als Nørrebro oder Vesterbro",
      ],
    },
    {
      slug: "nyhavn",
      citySlug: "copenhagen",
      name: "Nyhavn",
      lat: 55.6797,
      lng: 12.5913,
      bestFor: ["first-time", "romantic"],
      vibe: "Das Postkartenmotiv Kopenhagens: ein kurzer Kanal aus dem 17. Jahrhundert, gesäumt von bemalten Giebelhäusern, Holzbooten und Terrassenbars. Direkt daran oder daneben zu wohnen stellt Sie an den Hafen und das königliche Viertel, auch wenn der Kai selbst zu Stoßzeiten laut und teuer ist. Er ist schön, zentral und ungeniert touristisch.",
      pros: [
        "Ikonische Kanallage direkt am Hafen",
        "Wenige Schritte vom königlichen Viertel, von Amalienborg und den Kanalboot-Anlegern",
        "Ausgezeichnete Metro- und Hafenbus-Verbindungen",
      ],
      cons: [
        "Die Restaurants am Kai verlangen einen hohen Aufpreis für die Aussicht",
        "Laut und überfüllt an Sommerabenden",
        "Sehr wenige echte Budget-Betten so nah am Wasser",
      ],
    },
    {
      slug: "vesterbro",
      citySlug: "copenhagen",
      name: "Vesterbro",
      lat: 55.6683,
      lng: 12.5449,
      bestFor: ["nightlife", "local", "budget"],
      vibe: "Ein ehemaliges Rotlicht- und Fleischverpackungsviertel, das sich in das preiswerteste Gastronomie- und Nachtlebenviertel der Stadt verwandelt hat, wenige Minuten westlich des Hauptbahnhofs. Die Kødbyen-Fleischmarktblöcke leben von Naturweinbars, Bäckereien und Restaurants, wo junge Kopenhagener tatsächlich essen. Es fühlt sich gelebt und kreativ an statt poliert, mit Preisen unter denen der Altstadt.",
      pros: [
        "Höchste Dichte an Essen und Nachtleben zu faireren Preisen",
        "Die Kødbyen-Fleischmarktbars und der Hauptbahnhof direkt vor der Tür",
        "Zu Fuß zum Tivoli und ins Stadtzentrum",
      ],
      cons: [
        "Manche Straßen wirken spät nachts noch ruppig",
        "Kein Kanal und keine Wahrzeichen im Viertel selbst",
        "Geschäftig und laut rund um die Nachtlebenblöcke nach Einbruch der Dunkelheit",
      ],
    },
    {
      slug: "norrebro",
      citySlug: "copenhagen",
      name: "Nørrebro",
      lat: 55.6949,
      lng: 12.5533,
      bestFor: ["local", "budget", "nightlife"],
      vibe: "Das multikulturellste und jugendlichste Viertel, nördlich der Seen, rund um den Superkilen-Park und die belebte Straße Jægersborggade angelegt. Hier lebt die echte Nachbarschafts-Gastronomieszene, von Bäckereien bis zu nahöstlichen Grills, zu Preisen weit unter denen des Zentrums. Es ist ein Fünfzehn-Minuten-Fußweg oder eine kurze Busfahrt von der Altstadt entfernt.",
      pros: [
        "Niedrigste einigermaßen zentrale Zimmerpreise der Stadt",
        "Hervorragende unabhängige Gastronomieszene mit geringem Touristenaufschlag",
        "Superkilen, der Assistens-Friedhof und die Jægersborggade in der Nähe",
      ],
      cons: [
        "Am weitesten von diesen Vierteln zu den Hafensehenswürdigkeiten",
        "Weitläufig, sodass Sie stärker auf Räder oder Busse angewiesen sind",
        "Keine Metro auf manchen Abschnitten, obwohl Busse häufig fahren",
      ],
    },
    {
      slug: "christianshavn",
      citySlug: "copenhagen",
      name: "Christianshavn",
      lat: 55.6725,
      lng: 12.5935,
      bestFor: ["local", "romantic", "family"],
      vibe: "Ein von Kanälen durchzogenes Inselviertel, erbaut von Christian IV., das Hausboote, gepflasterte Kais und die Freistadt Christiania an seinem Rand vereint. Es ist ruhiger und wohnlicher als die Altstadt und dennoch eine Metro-Station oder ein kurzer Fußweg über den Hafen davon entfernt. Die Cafés am Wasser und der gewundene Turm der Vor Frelsers Kirke geben ihm echten Charakter.",
      pros: [
        "Hübsche Kanäle und Hausboote abseits der Menschenmengen",
        "Eine Metro-Station oder ein Fußweg ins Zentrum, mit Christiania nebenan",
        "Echte lokale Cafés und die Hafenfront zu Fuß",
      ],
      cons: [
        "Weniger Hotels, sodass Auswahl und Verfügbarkeit begrenzt sind",
        "Ruhigeres Nachtleben als Vesterbro oder Nørrebro",
        "Für die meisten zentralen Sehenswürdigkeiten überqueren Sie den Hafen",
      ],
    },
  ],

  pois: [
    {
      slug: "nyhavn",
      citySlug: "copenhagen",
      name: "Hafen Nyhavn",
      lat: 55.6797,
      lng: 12.5911,
      kind: "sight",
      needsBooking: false,
      tip: "Das ist das Foto, für das alle kommen, am besten aufgenommen von der kleinen Brücke am Hafenende im Morgenlicht, bevor sich die Terrassen füllen. Setzen Sie sich hier auf einen Drink, wenn Sie die Aussicht wollen, aber essen Sie eine Straße weiter in der Store Strandstræde oder in der Altstadt, wo dasselbe Essen weit weniger kostet als der Aufschlag am Kai.",
    },
    {
      slug: "tivoli-gardens",
      citySlug: "copenhagen",
      name: "Tivoli-Garten",
      lat: 55.6736,
      lng: 12.5681,
      kind: "experience",
      needsBooking: true,
      tip: "Prüfen Sie den Kalender, bevor Sie darum herum planen, denn der Tivoli ist saisonal: grob von April bis Ende September geöffnet, dann zu Halloween über den Oktober und wieder von Mitte November bis Neujahr zu Weihnachten, dazwischen geschlossen. Buchen Sie den Eintritt online für eine kleine Ersparnis, gehen Sie in den letzten Stunden vor Schließung, wenn die Gärten erleuchtet werden, und kaufen Sie ein Fahrten-Armband nur, wenn Sie tatsächlich fahren wollen.",
    },
    {
      slug: "little-mermaid",
      citySlug: "copenhagen",
      name: "Die Kleine Meerjungfrau",
      lat: 55.6929,
      lng: 12.5993,
      kind: "sight",
      needsBooking: false,
      tip: "Die Statue ist klein und stets von Reisegruppen umringt, behandeln Sie sie also als Fünf-Minuten-Stopp innerhalb eines Hafenspaziergangs statt als Ziel an sich. Kommen Sie am frühen Morgen für ein klares Foto und verbinden Sie es mit der nahen sternförmigen Festung Kastellet und dem Weg hinab nach Amalienborg, was der eigentliche Lohn ist, hierher hinaufzukommen.",
    },
    {
      slug: "rosenborg-castle",
      citySlug: "copenhagen",
      name: "Schloss Rosenborg",
      lat: 55.6857,
      lng: 12.5773,
      kind: "sight",
      needsBooking: true,
      tip: "Buchen Sie im Sommer online einen Zeitfenster-Slot, denn das Schlossinnere ist klein und die Schlange für die Kronjuwelen im Keller staut sich bis Mittag. Gehen Sie gleich zur Öffnung, steigen Sie zuerst in die Schatzkammer hinab, solange es ruhig ist, und treten Sie dann hinaus in die kostenlosen Kongens-Have-Gärten, den ältesten königlichen Park der Stadt und ein feiner Ort für ein Picknick.",
    },
    {
      slug: "christiansborg-palace",
      citySlug: "copenhagen",
      name: "Schloss Christiansborg & Turm",
      lat: 55.6759,
      lng: 12.5794,
      kind: "sight",
      needsBooking: false,
      tip: "Der Schlossturm ist der höchste der Stadt und, anders als fast alles andere hier, per Aufzug völlig kostenlos zu besteigen, mit der besten Dachaussicht über die Altstadt. Fahren Sie zuerst hinauf und entscheiden Sie dann, ob Sie für die königlichen Empfangsräume und die Ruinen unter dem Gebäude zahlen; der Turm allein rechtfertigt den Stopp, selbst wenn Sie den Rest auslassen.",
    },
    {
      slug: "round-tower",
      citySlug: "copenhagen",
      name: "Runder Turm (Rundetaarn)",
      lat: 55.6813,
      lng: 12.5757,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Der günstigste zentrale Aussichtspunkt Kopenhagens, erreichbar nicht über Treppen, sondern über eine breite gepflasterte Wendelrampe, die ein Pferd erklimmen könnte, endend auf einer offenen Dachplattform über der Altstadt. Kaufen Sie das preiswerte Ticket am Eingang, gehen Sie am späten Nachmittag für warmes Licht, und halten Sie auf dem Weg hinauf nach dem kleinen Bibliothekssaal und der Sternwarte Ausschau, beide inbegriffen.",
    },
    {
      slug: "christiania",
      citySlug: "copenhagen",
      name: "Freistadt Christiania",
      lat: 55.6761,
      lng: 12.5989,
      kind: "experience",
      needsBooking: false,
      tip: "Die selbstverwaltete Hippie-Enklave belohnt einen Rundgang mit ihren Wandbildern, Werkstätten, Uferpfaden und alternativen Cafés, aber befolgen Sie die eine harte Regel: überhaupt keine Fotos auf der Pusher Street, wo Schilder es deutlich machen. Halten Sie dort das Handy weg, erkunden Sie tagsüber die grüneren hinteren Gassen und die Ränder des Green Light District, und nehmen Sie es als lebendige Gemeinschaft statt als Touristenattraktion.",
    },
    {
      slug: "nationalmuseet",
      citySlug: "copenhagen",
      name: "Nationalmuseet (Nationalmuseum)",
      lat: 55.674,
      lng: 12.5751,
      kind: "museum",
      needsBooking: false,
      tip: "Dänemarks wichtigstes Geschichtsmuseum ist kostenlos und der beste Regentagsplan der Stadt, am stärksten bei Funden aus der Wikingerzeit wie dem Sonnenwagen und einer erhaltenen Moorleiche. Planen Sie neunzig Minuten ein, gehen Sie zuerst geradewegs in die Vorgeschichtsräume, solange Sie frisch sind, und nutzen Sie die familienfreundliche Kinderabteilung, wenn Sie Kinder dabei haben.",
    },
    {
      slug: "torvehallerne",
      citySlug: "copenhagen",
      name: "Markthalle Torvehallerne",
      lat: 55.6835,
      lng: 12.5691,
      kind: "food",
      needsBooking: false,
      tip: "Zwei gläserne Markthallen mit etwa sechzig Ständen bei Nørreport, ideal für ein Smørrebrød-Mittagessen mit belegten Broten, frisches Gebäck und Kaffee ohne den Touristenaufschlag des Nyhavn. Kommen Sie an einem Wochentag gegen 11 Uhr vor dem Mittagsansturm, probieren Sie an einer Theke das klassische Smørrebrød mit eingelegtem Hering oder Roastbeef, und beachten Sie, dass sonntags früher geschlossen wird.",
    },
    {
      slug: "amalienborg",
      citySlug: "copenhagen",
      name: "Schloss Amalienborg",
      lat: 55.6841,
      lng: 12.5934,
      kind: "sight",
      needsBooking: false,
      tip: "Das Zuhause der königlichen Familie besteht aus vier Palästen rund um einen achteckigen Platz, und der kostenlose Anziehungspunkt ist die Wachablösung mittags an jedem Tag, am größten, wenn die Königin anwesend ist und ihre Flagge weht. Stellen Sie sich ein paar Minuten vor zwölf nahe dem Wachhaus auf und richten Sie dann den Blick geradewegs zur Marmorkirche auf der einen Seite und zum Opernhaus über den Hafen auf der anderen aus.",
    },
    {
      slug: "stroget",
      citySlug: "copenhagen",
      name: "Strøget",
      lat: 55.6786,
      lng: 12.5748,
      kind: "sight",
      needsBooking: false,
      tip: "Eine der längsten Fußgängerstraßen Europas, die sich etwa einen Kilometer vom Rathausplatz bis Kongens Nytorv zieht und vor allem als das Rückgrat nützlich ist, das die halben Sehenswürdigkeiten der Altstadt verbindet. Behandeln Sie sie als Route statt als Einkaufstour, biegen Sie für bessere Cafés in die ruhigeren Seitenstraßen und Plätze wie Gråbrødretorv ab, und gehen Sie sie früh, um den Menschenmengen zu entgehen.",
    },
    {
      slug: "reffen",
      citySlug: "copenhagen",
      name: "Streetfood Reffen",
      lat: 55.6949,
      lng: 12.6017,
      kind: "food",
      needsBooking: false,
      tip: "Ein weitläufiger Streetfood-Markt unter freiem Himmel aus Schiffscontainer-Küchen an der Uferpromenade von Refshaleøen, am besten erreichbar mit dem Hafenbus 991/992, der selbst eine kleine Bootstour ist. Er läuft saisonal vom Frühling bis zum Herbst und schließt im Winter, prüfen Sie also, ob er geöffnet ist, gehen Sie zum Sonnenuntergang über dem Wasser, und zahlen Sie mit Karte, da die meisten Stände bargeldlos sind.",
    },
    {
      slug: "canal-tour",
      citySlug: "copenhagen",
      name: "Kanalbootstour",
      lat: 55.6797,
      lng: 12.5905,
      kind: "experience",
      needsBooking: false,
      tip: "Ein einstündiges Boot dreht seine Runde durch Hafen und Kanäle, vorbei am Opernhaus, der Kleinen Meerjungfrau, der Bibliothek Schwarzer Diamant und Christianshavn, und ist der schnellste Weg zu begreifen, wie die Stadt am Wasser liegt. Steigen Sie an den Anlegern Nyhavn oder Ved Stranden zu, nehmen Sie ein offenes Boot statt eines mit Glasdach, und fahren Sie am späten Nachmittag für das beste Licht auf den Fassaden.",
    },
    {
      slug: "superkilen",
      citySlug: "copenhagen",
      name: "Superkilen-Park",
      lat: 55.6994,
      lng: 12.5423,
      kind: "park",
      needsBooking: false,
      tip: "Ein auffälliger öffentlicher Park in Nørrebro, gebaut aus Objekten, die aus Dutzenden Ländern zusammengetragen wurden, von einem marokkanischen Brunnen bis zu japanischen Kirschbäumen, angelegt in drei farblich codierten Zonen. Er ist kostenlos und rund um die Uhr geöffnet; der wellenförmige schwarz-weiße Schwarze Platz ist das Foto, und er passt natürlich zu einem Bäckereistopp und einem Bummel durch die nahe Jægersborggade.",
    },
  ],

  itineraries: [
    {
      citySlug: "copenhagen",
      days: 2,
      summary:
        "Zwei Tage reichen für Kopenhagens wichtigste Sehenswürdigkeiten, wenn Sie zentral wohnen und sich zu Fuß oder mit dem Rad fortbewegen, aber Sie streifen die Viertel nur, die der Stadt ihren Charakter geben. Die Altstadt ist kompakt: Nyhavn, das königliche Viertel, der Runde Turm, Rosenborg und der Tivoli liegen in einem 25-minütigen Fußweg voneinander, sodass ein straffer Plan sie ohne viel Nahverkehr abdeckt. Wohnen Sie in Indre By, damit beide Morgen zu Fuß beginnen. Was funktioniert, ist ein Thema pro Tag: der königliche Kern und der Hafen an Tag eins, die Schlösser, der Runde Turm und der Tivoli an Tag zwei, mit einer Kanalbootstour, um die Uferfront zusammenzubinden. Buchen Sie wenig im Voraus außer einem Rosenborg-Slot im Sommer und einem Tivoli-Eintritt, falls er in eine geöffnete Saison fällt, da die Gärten für Teile des Jahres geschlossen sind. Was Sie aufgeben, sind Christiania, die Gastronomieszene von Vesterbro und jeder gemächliche Nachmittag am Hafen, was genau das ist, was ein dritter Tag zurückkauft.",
      stayNeighborhoodSlug: "indre-by",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Hafen und das königliche Viertel",
          morning: [
            {
              poiSlug: "nyhavn",
              text: "Beginnen Sie am Nyhavn, bevor sich die Terrassen füllen, und fotografieren Sie die bemalten Häuser von der Brücke am Hafenende im Morgenlicht. Gehen Sie den Kai einmal ab und ziehen Sie dann weiter, statt hier den Aufschlag für die Aussicht beim Frühstück zu zahlen.",
              durationMin: 45,
            },
            {
              poiSlug: "amalienborg",
              text: "Gehen Sie hinauf nach Amalienborg zu den königlichen Palästen rund um den achteckigen Platz, timen Sie es auf die Wachablösung am Mittag und richten Sie den Blick zur Marmorkirche und zum Opernhaus aus.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "little-mermaid",
              text: "Folgen Sie dem Hafenweg durch die Sternfestung Kastellet zur Kleinen Meerjungfrau, ein kurzer Fotostopp statt eines Ziels, und schleifen Sie dann zurück Richtung Zentrum.",
              durationMin: 75,
            },
            {
              poiSlug: "canal-tour",
              text: "Steigen Sie am Nyhavn-Anleger in ein offenes Kanalboot für die einstündige Hafenrunde vorbei am Opernhaus, dem Schwarzen Diamanten und Christianshavn, der schnellste Weg zu erkennen, wie die Stadt am Wasser liegt.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              text: "Abendessen in der Altstadt eine Straße hinter dem Nyhavn, rund um Gråbrødretorv oder in den Seitengassen abseits des Strøget, wo Preise und Qualität sich gegenüber dem Kai beide verbessern.",
              durationMin: 105,
            },
            {
              text: "Runden Sie mit einem Spaziergang am Hafen entlang zurück am Wasser ab, die Kanäle sind am ruhigsten, sobald die Tagesboote enden.",
              durationMin: 45,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Schlösser, der Runde Turm und Tivoli",
          morning: [
            {
              poiSlug: "rosenborg-castle",
              text: "Beginnen Sie den Tag im Schloss Rosenborg mit einem frühen Slot, steigen Sie geradewegs zu den Kronjuwelen in der Schatzkammer hinab, bevor sich die Schlange bildet, und gehen Sie dann hinaus in die kostenlosen Kongens-Have-Gärten.",
              durationMin: 105,
            },
            {
              poiSlug: "torvehallerne",
              text: "Gehen Sie zu den Torvehallerne-Markthallen bei Nørreport für ein Smørrebrød-Mittagessen und ein Gebäck, grasen Sie die Stände ab, statt sich zu einer vollen Mahlzeit zu setzen.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "round-tower",
              text: "Erklimmen Sie den Runden Turm über seine gepflasterte Wendelrampe für die günstige zentrale Dachaussicht über die Altstadt und halten Sie auf dem Weg hinauf am Bibliothekssaal und der Sternwarte inne.",
              durationMin: 60,
            },
            {
              poiSlug: "christiansborg-palace",
              text: "Gehen Sie hinab zum Christiansborg und fahren Sie mit dem kostenlosen Aufzug auf seinen Turm, den höchsten der Stadt, für das beste Dachpanorama des Tages, und betrachten Sie dann den Schlossplatz darunter.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "tivoli-gardens",
              text: "Wenn es in eine geöffnete Saison fällt, verbringen Sie den Abend in den Tivoli-Garten und kommen Sie in den letzten Stunden vor Schließung, wenn der ganze Park erleuchtet wird. Prüfen Sie zuerst den Kalender, da er für Teile des Jahres geschlossen ist.",
              durationMin: 150,
            },
          ],
        },
      ],
    },
    {
      citySlug: "copenhagen",
      days: 3,
      summary:
        "Drei Tage sind die richtige Zeitspanne für Kopenhagen: genug für den königlichen Kern und den Hafen in gemächlichem Tempo, dazu ein Tag, der Christiania, der Gastronomieszene und dem Wasser gehört statt der Checkliste. Zwei Tage zwingen Sie, die Schlösser und die Altstadt hintereinander im Sprint zu absolvieren; der dritte ergänzt die Freistadt Christiania, die Kanäle von Christianshavn und einen echten Streetfood-Abend, mit Zeit, an einem warmen Tag im Hafen zu schwimmen. Wohnen Sie in Vesterbro, Minuten vom Hauptbahnhof und vom Tivoli, günstiger als die Altstadt und Heimat des preiswertesten Essens und Nachtlebens der Stadt. Die Form des Plans: das königliche Viertel und der Hafen an Tag eins, die Schlösser, der Runde Turm und der Tivoli an Tag zwei, Christiania und Christianshavn an Tag drei. Buchen Sie wenig im Voraus außer einem Rosenborg-Slot im Sommer und einem Tivoli-Eintritt, wenn die Gärten geöffnet sind. Alles andere belohnt es, ein Rad zu mieten oder die Metro zu nehmen und früh zu starten.",
      stayNeighborhoodSlug: "vesterbro",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Hafen und das königliche Viertel",
          morning: [
            {
              poiSlug: "nyhavn",
              text: "Fahren Sie aus Vesterbro herein und beginnen Sie früh am Nyhavn, bevor sich die Terrassen füllen, für das Foto der bemalten Häuser von der Brücke am Hafenende.",
              durationMin: 45,
            },
            {
              poiSlug: "amalienborg",
              text: "Gehen Sie nach Amalienborg zu den vier königlichen Palästen und der Wachablösung am Mittag und richten Sie den Blick hindurch zur Marmorkirche und über den Hafen zum Opernhaus aus.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "little-mermaid",
              text: "Folgen Sie dem Hafenweg durch die Festung Kastellet zur Kleinen Meerjungfrau für ein kurzes Foto und kehren Sie dann Richtung Zentrum um.",
              durationMin: 75,
            },
            {
              poiSlug: "canal-tour",
              text: "Nehmen Sie am Nyhavn-Anleger ein offenes Kanalboot auf der einstündigen Hafenrunde, um das Opernhaus, den Schwarzen Diamanten und Christianshavn vom Wasser aus im Nachmittagslicht zu sehen.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              text: "Kehren Sie nach Vesterbro zurück zum Abendessen in den Kødbyen-Fleischmarktblöcken, dem preiswertesten Gastronomieviertel der Stadt, und danach in eine Naturweinbar.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Schlösser, der Runde Turm und Tivoli",
          morning: [
            {
              poiSlug: "rosenborg-castle",
              text: "Beginnen Sie in Rosenborg mit einem frühen Slot, geradewegs hinab zu den Kronjuwelen, bevor sich die Schlange an der Schatzkammer bildet, und dann hinaus in die kostenlosen Kongens-Have-Gärten.",
              durationMin: 105,
            },
            {
              poiSlug: "torvehallerne",
              text: "Mittagessen in den Torvehallerne-Markthallen bei Nørreport, grasen Sie Smørrebrød und Gebäck an den Ständen ab.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "round-tower",
              text: "Erklimmen Sie die Wendelrampe des Runden Turms für die günstige Dachaussicht über die Altstadt und halten Sie unterwegs am Bibliothekssaal inne.",
              durationMin: 60,
            },
            {
              poiSlug: "christiansborg-palace",
              text: "Fahren Sie mit dem kostenlosen Aufzug auf den Christiansborg-Turm, den höchsten der Stadt, für das weiteste Dachpanorama, und schlendern Sie dann über den Schlossplatz und zum Schwarzen Diamanten der Nationalbibliothek am Wasser darunter.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "tivoli-gardens",
              text: "Verbringen Sie den Abend in den Tivoli-Garten, falls sie geöffnet sind, und kommen Sie in den letzten Stunden vor Schließung, wenn der Park erleuchtet wird. Prüfen Sie zuerst den Saisonkalender, da er für Teile des Jahres geschlossen ist.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Christiania, Christianshavn und Streetfood",
          morning: [
            {
              poiSlug: "christiania",
              text: "Überqueren Sie den Hafen zur Freistadt Christiania und schlendern Sie durch ihre Wandbilder, Werkstätten und Uferpfade, halten Sie das Handy weg auf der Pusher Street, wo Fotos verboten sind. Nehmen Sie es als lebendige Gemeinschaft statt als Sehenswürdigkeit.",
              durationMin: 90,
            },
            {
              text: "Gehen Sie hinein ins eigentliche Christianshavn entlang seiner Kanäle und Hausboote und erklimmen Sie die äußere Wendeltreppe der Vor Frelsers Kirke für eine Aussicht, wenn Sie den Kopf dafür haben.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "nationalmuseet",
              text: "Gehen Sie zurück zum Nationalmuseum, kostenlos, und steuern Sie geradewegs die Räume der Wikingerzeit mit dem Sonnenwagen und der Moorleiche an, dem stärksten Teil der Sammlung.",
              durationMin: 90,
            },
            {
              text: "An einem warmen Tag tauschen Sie das Museum gegen das Hafenbad Islands Brygge über dem Wasser, einen kostenlosen Freiluft-Badeplatz mitten in der Stadt.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "reffen",
              text: "Nehmen Sie den Hafenbus 991, selbst eine kleine Bootsfahrt, hinaus zum Streetfood-Markt Reffen auf Refshaleøen für Sonnenuntergang über dem Wasser und Abendessen aus den Containerküchen. Prüfen Sie, ob er geöffnet ist, da er saisonal läuft, und zahlen Sie mit Karte.",
              durationMin: 150,
            },
          ],
        },
      ],
    },
    {
      citySlug: "copenhagen",
      days: 4,
      summary:
        "Vier Tage sind mehr als genug für Kopenhagens Sehenswürdigkeiten, und das ist der Punkt: Der vierte Tag verwandelt einen Schlössersprint in eine echte Reise. Die Tage eins bis drei decken den königlichen Kern, den Hafen, Christiania und die Gastronomieszene in entspanntem Tempo ab; Tag vier gehört Ihnen für entweder einen gemächlichen lokalen Tag durch Nørrebro und Vesterbro oder eine Zugfahrt zum Louisiana-Museum für moderne Kunst die Küste hinauf oder über die Brücke nach Malmö in Schweden, beide unter 40 Minuten entfernt. Bei so viel Zeit lassen Sie die Altstadt aus und wohnen in Nørrebro, dem besten Gastronomieviertel der Stadt, günstiger als das Zentrum und voller Bäckereien, Bars und dem Superkilen-Park. Die Ein-Thema-pro-Tag-Logik gilt weiterhin: Halten Sie das königliche Viertel und den Hafen zusammen, halten Sie Christiania und Christianshavn zusammen, und zickzacken Sie nicht. Buchen Sie wenig im Voraus außer einem Rosenborg-Slot im Sommer und einem Tivoli-Eintritt, wenn die Gärten geöffnet sind. Wenn Sie zwischen drei und vier Tagen wählen, ist der vierte der, an den Sie sich erinnern werden.",
      stayNeighborhoodSlug: "norrebro",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Hafen und das königliche Viertel",
          morning: [
            {
              poiSlug: "nyhavn",
              text: "Fahren Sie aus Nørrebro herab und beginnen Sie früh am Nyhavn für das Foto der bemalten Häuser von der Brücke am Hafenende, bevor sich die Terrassen füllen.",
              durationMin: 45,
            },
            {
              poiSlug: "amalienborg",
              text: "Gehen Sie nach Amalienborg zu den königlichen Palästen und der Wachablösung am Mittag, mit der Sichtachse zur Marmorkirche und zum Opernhaus über dem Wasser.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "little-mermaid",
              text: "Nehmen Sie den Hafenweg durch die Festung Kastellet zur Kleinen Meerjungfrau für ein kurzes Foto und schleifen Sie dann Richtung Zentrum zurück.",
              durationMin: 75,
            },
            {
              poiSlug: "canal-tour",
              text: "Steigen Sie am Nyhavn-Anleger in ein offenes Kanalboot für die einstündige Hafenrunde vorbei am Opernhaus, dem Schwarzen Diamanten und Christianshavn.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              text: "Abendessen zurück in Nørrebro entlang der Jægersborggade oder am Sankt Hans Torv, wo die Nachbarschaftsrestaurants und Bäckereien günstiger und einfallsreicher sind als im Zentrum.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Schlösser, der Runde Turm und Tivoli",
          morning: [
            {
              poiSlug: "rosenborg-castle",
              text: "Beginnen Sie in Rosenborg mit einem frühen Slot, hinab zu den Kronjuwelen zuerst, und dann hinaus in die kostenlosen Kongens-Have-Gärten neben Ihrem eigenen Viertel.",
              durationMin: 105,
            },
            {
              poiSlug: "torvehallerne",
              text: "Mittagessen in den Torvehallerne-Markthallen bei Nørreport, grasen Sie Smørrebrød und Gebäck an den Ständen ab.",
              durationMin: 60,
            },
          ],
          afternoon: [
            {
              poiSlug: "round-tower",
              text: "Erklimmen Sie die Wendelrampe des Runden Turms für die günstige zentrale Dachaussicht und halten Sie am Bibliothekssaal inne.",
              durationMin: 60,
            },
            {
              poiSlug: "christiansborg-palace",
              text: "Fahren Sie mit dem kostenlosen Aufzug auf den Christiansborg-Turm für das höchste Dachpanorama der Stadt, und gehen Sie dann über den Schlossplatz und das Strøget-Rückgrat zurück Richtung Kongens Nytorv.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "tivoli-gardens",
              text: "Verbringen Sie den Abend in den Tivoli-Garten, falls sie geöffnet sind, und kommen Sie spät, wenn der Park erleuchtet wird. Prüfen Sie zuerst den Saisonkalender, da er für Teile des Jahres geschlossen ist.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Christiania, Christianshavn und Streetfood",
          morning: [
            {
              poiSlug: "christiania",
              text: "Überqueren Sie zur Freistadt Christiania und schlendern Sie durch ihre Wandbilder, Werkstätten und Uferpfade, halten Sie das Handy weg auf der Pusher Street, wo Fotos verboten sind.",
              durationMin: 90,
            },
            {
              text: "Gehen Sie die Kanäle und Hausboote von Christianshavn ab und erklimmen Sie die gewundene äußere Treppe der Vor Frelsers Kirke für die Aussicht, wenn Sie sich trauen.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "nationalmuseet",
              text: "Gehen Sie zurück zum kostenlosen Nationalmuseum und steuern Sie die Räume der Wikingerzeit mit dem Sonnenwagen und der Moorleiche an, dem stärksten der Sammlung.",
              durationMin: 90,
            },
            {
              text: "An einem warmen Nachmittag tauschen Sie das Museum gegen ein Bad im Hafenbad Islands Brygge, einem kostenlosen Freiluftbecken, das mitten in der Stadt in den Hafen geschnitten ist.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "reffen",
              text: "Fahren Sie mit dem Hafenbus 991 hinaus zum Streetfood-Markt Reffen auf Refshaleøen für ein Abendessen bei Sonnenuntergang aus den Containerküchen. Prüfen Sie, ob er geöffnet ist, da er saisonal läuft, und zahlen Sie mit Karte.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Lokaler Nørrebro-Tag oder Tagesausflug nach Louisiana und Malmö",
          morning: [
            {
              poiSlug: "superkilen",
              text: "Option A: Beginnen Sie direkt vor Ihrer Tür am Superkilen-Park, arbeiten Sie sich dann die Jægersborggade hinab für Bäckereien und Kaffee und hinein in den grünen Assistens-Friedhof, wo Hans Christian Andersen begraben liegt. Option B: Nehmen Sie den Küstenzug etwa 35 Minuten nördlich nach Humlebæk zum Louisiana-Museum für moderne Kunst, dessen Skulpturenpark bis ans Meer hinabreicht, oder überqueren Sie die Öresundbrücke mit dem Zug in etwa 35 Minuten nach Malmö in Schweden.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              text: "Option A geht in Nørrebro und Vesterbro weiter mit Mittagessen in einem Nachbarschaftsrestaurant und einem Bummel durch die Kødbyen-Blöcke und die Seen zwischen den beiden Vierteln. Option B: Geben Sie den Louisiana-Galerien und der Küste den Nachmittag, oder erkunden Sie Malmös Altstadt und den Turning Torso vor der kurzen Zugfahrt zurück.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              text: "So oder so, enden Sie zurück in Nørrebro an den Bars und Terrassen rund um den Sankt Hans Torv und die Jægersborggade, der eigentlichen Abendszene des Viertels.",
              durationMin: 120,
            },
            {
              text: "Letztes Abendessen in einem Nørrebro-Restaurant; die Gegend macht kreatives Essen zu fairen Preisen, ein passender Abschluss nach den Hafenblick-Menüs des Zentrums.",
              durationMin: 90,
            },
          ],
        },
      ],
    },
  ],
};

export default copenhagenDe;
