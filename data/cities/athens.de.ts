import type { CityData } from "../types";

const athensDe: CityData = {
  city: {
    slug: "athens",
    name: "Athen",
    country: "Griechenland",
    countrySlug: "greece",
    lat: 37.9838,
    lng: 23.7275,
    tier: 2,
    idealDays: 3,
    durations: [2, 3, 4],
    airportCode: "ATH",
    airportToCenter:
      "Die Metro-Linie 3 (blau) fährt vom Flughafen direkt zum Syntagma im Zentrum in etwa 40 Min. für rund 9 EUR, Züge alle 30 Min. Der Expressbus X95 legt dieselbe Strecke für 5,50 EUR rund um die Uhr zurück, 24 Stunden am Tag, braucht aber je nach Verkehr 60 bis 90 Min. Ein Taxi zum Zentrum zum Pauschaltarif kostet tagsüber etwa 40 EUR.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [7, 8],
    monthlyNotes: {
      1: "Kühl und ruhig bei Höchstwerten von 13 C mit den niedrigsten Hotelpreisen des Jahres und ohne Schlange für die Akropolis. Regen kommt in kurzen Schüben, doch heller Sonnenschein ist häufig, und staatliche Stätten bieten am ersten Sonntag freien Eintritt, timen Sie einen Besuch also auf den 4. Januar.",
      2: "Immer noch mild bei 14 C und einer der ruhigsten Monate auf dem Felsen, mit klarem Licht für Fotos zwischen den Schauern. Das Fenster mit freiem Eintritt am ersten Sonntag gilt am 1. Februar, und die Café-Terrassen in der Plaka füllen sich an jedem sonnigen Mittag.",
      3: "Die Höchstwerte klettern Richtung 16 C und die Mandelblüte erscheint, wobei der Andrang erst spät im Monat zu wachsen beginnt. Der 25. März ist der Unabhängigkeitstag, ein nationaler Feiertag mit einer Militärparade am Syntagma vorbei und vielen geschlossenen Stätten und Läden, planen Sie also darum herum.",
      4: "Einer der besten Monate bei 20 C, grünen Hügeln und langem Licht, auch wenn dann meist das griechisch-orthodoxe Osterfest fällt (12. April 2026) und es der größte Feiertag des Landes ist. Athen leert sich halb, während Familien nach Hause reisen, viele Tavernen schließen über das Osterwochenende, und der kerzenbeleuchtete Mitternachtsgottesdienst ist sehenswert.",
      5: "Warm, trocken und verlässlich bei 26 C, der ideale Punkt vor dem Sommerofen, mit langen Abenden für Dachterrassen-Dinner. Der Andrang an der Akropolis ist stark, buchen Sie also ein Zeitfenster-Ticket und gehen Sie zur Öffnung um 8 Uhr, aber Wetter und Tageslicht sind nahezu perfekt.",
      6: "Heiß bei 31 C und geschäftig, mit dem Athen-Epidauros-Festival, das seine Saison antiker Dramen und Konzerte im Odeon des Herodes Atticus unterhalb der Akropolis eröffnet. Erledigen Sie den Felsen zur Öffnung, ziehen Sie sich am Nachmittag ins kühle Akropolis-Museum zurück, und buchen Sie Festivalabende im Voraus.",
      7: "Höchsthitze über 34 C, unerbittliche Sonne und wenig Schatten auf den archäologischen Stätten, während viele Athener auf die Inseln aufbrechen. Das Epidauros-Festival läuft im Odeon weiter, aber Sightseeing bedeutet einen Start um 8 Uhr oder die letzten zwei Stunden vor Schließung, mit dem Mittag drinnen oder am Pool verbracht.",
      8: "Der heißeste, trockenste Monat bei 34 C und mehr, wenn die Stadt 38 C überschreiten kann und die Einheimischen um den Feiertag am 15. August an die Küste strömen. Wenn August unvermeidlich ist, verlegen Sie alles nach vorn in den frühen Morgen, buchen Sie Klimaanlage und behandeln Sie das schattige Akropolis-Museum und Dachterrassen-Abende als Überlebensstrategie.",
      9: "Sommerwärme ohne das Schlimmste davon, beginnend nahe 29 C und im Lauf des Monats nachlassend, mit dem Epidauros-Festival, das ausklingt, und den Athenern zurück in der Stadt. Der Andrang lichtet sich nach der ersten Woche und dies ist wohl der insgesamt schönste Monat für einen Athen-Trip.",
      10: "Warme Tage um 23 C, mit dem ersten richtigen Regen, der spät zurückkehrt, und großartigem flachem Licht auf dem Marmor. Der Andrang fällt merklich nach der Monatsmitte, und der freie Eintritt am ersten Sonntag setzt für die Nebensaison im Oktober wieder ein, obwohl Sie das bestätigen sollten, da der Winterfahrplan im November greift.",
      11: "Kühler bei 18 C mit nasseren Phasen, aber vielen hellen Tagen und den ruhigsten großen Sehenswürdigkeiten des Herbstes. Die Nebensaison-Preise kehren zurück und der freie Eintritt an staatlichen Stätten fällt auf den ersten Sonntag, den 1. November, sodass ein preiswerter Trip ohne Schlangen sehr machbar ist.",
      12: "Mild für den Winter bei 14 C, aber die nasseste Etappe, mit Weihnachtsbeleuchtung über Syntagma und Monastiraki und einem festlichen Markt auf den Plätzen. Die Stätten bleiben mit kurzen Winteröffnungszeiten geöffnet und der freie Eintritt am ersten Sonntag fällt auf den 6. Dezember und zieht lokale Menschenmengen an.",
    },
    climate: {
      1: { highC: 13, lowC: 7, rainyDays: 11 },
      2: { highC: 14, lowC: 7, rainyDays: 9 },
      3: { highC: 16, lowC: 8, rainyDays: 8 },
      4: { highC: 20, lowC: 11, rainyDays: 7 },
      5: { highC: 26, lowC: 15, rainyDays: 5 },
      6: { highC: 31, lowC: 20, rainyDays: 3 },
      7: { highC: 34, lowC: 23, rainyDays: 1 },
      8: { highC: 34, lowC: 23, rainyDays: 1 },
      9: { highC: 29, lowC: 19, rainyDays: 3 },
      10: { highC: 23, lowC: 15, rainyDays: 6 },
      11: { highC: 18, lowC: 11, rainyDays: 8 },
      12: { highC: 14, lowC: 8, rainyDays: 11 },
    },
    budgetLevel: "mid",
    budgetPerDay: { budget: 55, mid: 110, high: 220 },
    tagline: "Die Wiege des Abendlands, mit den besten Dachterrassen Europas.",
    heroIntro:
      "Athen reicht Ihnen die Akropolis, weltklasse antike Stätten und ein rauhes, aufregendes Stadtzentrum, das Sie an einem Nachmittag von Ende zu Ende durchgehen. Drei Tage sind der ehrliche Idealpunkt: einer für den Felsen und sein Museum, einer für die antike Agora und die Altstadtgassen, und einer für das Archäologische Nationalmuseum und einen Hügel bei Sonnenuntergang. Kommen Sie im Frühling oder Frühherbst, buchen Sie das Akropolis-Ticket, bevor Sie fliegen, und essen Sie auf einer Dachterrasse zu Abend, mit dem angestrahlten Parthenon über Ihnen.",
    accent: { from: "#1E7FA8", to: "#E0C15A", ink: "#0E3E52" },
    neighborhoodSlugs: ["plaka", "monastiraki", "koukaki", "kolonaki", "psyrri"],
    nearbyCitySlugs: [],
  },

  neighborhoods: [
    {
      slug: "plaka",
      citySlug: "athens",
      name: "Plaka",
      lat: 37.9714,
      lng: 23.7286,
      bestFor: ["first-time", "romantic", "family"],
      vibe: "Die Altstadt schmiegt sich um den Nordhang der Akropolis, ein Labyrinth aus neoklassischen Häusern, Bougainvillea und Fußgängergassen, die zum Felsen hinaufklettern. Alles, was ein Erstbesucher will, liegt in einem Zehn-Minuten-Fußweg, und die Straßen sind ruhig und hübsch, sobald sich die Tagesausflügler nachts lichten. Es ist das Postkartenmotiv, und Sie zahlen einen kleinen Aufschlag, um darin zu schlafen.",
      pros: [
        "Zu Fuß zur Akropolis, zur antiken Agora und zur römischen Agora ohne Nahverkehr",
        "Verkehrsfreie Gassen, die sicher, ruhig und nachts herrlich zum Bummeln sind",
        "Dicht an Tavernen, Cafés und den inselartigen Anafiotika-Stufen",
      ],
      cons: [
        "Die touristischste Gastronomie der Stadt, mit manchen Tavernen, die von der Lage zehren",
        "Die Preise für Hotels und Essen liegen über den umliegenden Vierteln",
        "Steile, gestufte Straßen, die mit Koffer oder Kinderwagen mühsam sind",
      ],
    },
    {
      slug: "monastiraki",
      citySlug: "athens",
      name: "Monastiraki",
      lat: 37.9764,
      lng: 23.7256,
      bestFor: ["first-time", "nightlife", "budget"],
      vibe: "Das brummende Scharnier des Zentrums, gebaut um einen von der Metro bedienten Platz, an dem der Flohmarkt, die römische Agora und die Altstadtgassen alle zusammentreffen. Die Dachterrassenbars hier blicken geradewegs auf die angestrahlte Akropolis, und die Straßen bleiben bis nach Mitternacht laut und lebhaft. Zentral, gut angebunden und nie langweilig, wenn auch etwas chaotisch.",
      pros: [
        "Metro-Knotenpunkt auf den Linien 1 und 3, direkt zum Flughafen und zum Hafen in Piräus",
        "Die preiswertesten Dachterrassenbars mit direktem Akropolis-Blick",
        "Zu Fuß zur Akropolis, zur Agora, nach Plaka und Psyrri in Minuten",
      ],
      cons: [
        "Tag und Nacht laut rund um den Platz und die Marktstraßen",
        "Touristisch und anfällig für Taschendiebstahl in den geschäftigsten Flohmarktabschnitten",
        "Weniger ruhige, erholsame Hotelzimmer als in den gelasseneren Vierteln",
      ],
    },
    {
      slug: "koukaki",
      citySlug: "athens",
      name: "Koukaki",
      lat: 37.9648,
      lng: 23.7256,
      bestFor: ["local", "budget", "family"],
      vibe: "Ein Wohnviertel gleich südlich der Akropolis, ruhiger und lokaler als die Altstadt, aber immer noch ein kurzer Fußweg vom Haupttor und dem Akropolis-Museum. Grüne Straßen beherbergen Nachbarschaftstavernen, Third-Wave-Kaffee und ein echtes gelebtes Gefühl rund um die Georgiou Olympiou. Ruhig, gut bepreist und zunehmend die kluge Basis für Wiederholungsbesucher.",
      pros: [
        "Zu Fuß zum Südhang der Akropolis, zum Museum und zum Filopappou-Hügel",
        "Die Metro-Stationen Akropoli und Syngrou-Fix auf der Linie 2 für die weitere Stadt",
        "Echte Nachbarschaftsgastronomie zu fairen Preisen, weit abseits des Touristenpfads",
      ],
      cons: [
        "Wenige eigene Sehenswürdigkeiten, Sie gehen hinaus, um etwas zu sehen",
        "Nachts ruhiger, mit einer kleineren Barszene als Monastiraki oder Psyrri",
        "Manche Blöcke nahe der Syngrou-Avenue sind vom Verkehr geschäftig",
      ],
    },
    {
      slug: "kolonaki",
      citySlug: "athens",
      name: "Kolonaki",
      lat: 37.9795,
      lng: 23.7443,
      bestFor: ["romantic", "local", "family"],
      vibe: "Das elegante, gehobene Viertel an den unteren Hängen des Lykabettus, voller Designerläden, Kunstgalerien und polierter Cafés, wo gut gekleidete Athener Leute beobachten. Es stellt Sie an den Fuß der Standseilbahn hinauf zum Lykabettus-Hügel und einen ebenen Fußweg vom Syntagma und den Museen entfernt. Elegant und sicher, wenn auch teurer und weniger stimmungsvoll als die Altstadt.",
      pros: [
        "Am Fuß der Lykabettus-Standseilbahn für den besten Sonnenuntergangsblick der Stadt",
        "Schicke Cafés, Boutiquen und die ausgezeichneten Benaki- und Kykladen-Museen in der Nähe",
        "Ruhige, sichere Straßen und ein echtes lokales, wohnliches Gefühl",
      ],
      cons: [
        "Ein Fußweg von 15 bis 20 Minuten bergauf von der Akropolis und Plaka",
        "Das teuerste Viertel für Essen und Einkaufen",
        "Keine Metro-Station darin, also gehen Sie zum Syntagma oder Evangelismos zu Fuß",
      ],
    },
    {
      slug: "psyrri",
      citySlug: "athens",
      name: "Psyrri",
      lat: 37.9784,
      lng: 23.7228,
      bestFor: ["nightlife", "local", "budget"],
      vibe: "Ein rauhes ehemaliges Werkstattviertel gleich nördlich von Monastiraki, das sich zum Nachtleben- und Street-Art-Herz des Zentrums gewandelt hat, vollgepackt mit Mezze-Bars, Live-Rebetiko und späten Tavernen. Tagsüber ist es schäbig und halb verrammelt, nachts füllt es sich mit Athenern, die unter Lichterketten essen und trinken. Laut, günstig und eine Menge Spaß.",
      pros: [
        "Der lebhafteste, lokalste Abend im Zentrum, von Mezze bis Rebetiko",
        "Günstigeres Essen und Trinken als in Plaka, wenige Gehminuten entfernt",
        "Wenige Schritte von der Metro Monastiraki und den Hauptsehenswürdigkeiten",
      ],
      cons: [
        "Laut bis in die frühen Morgenstunden, eine schlechte Wahl für leichte Schläfer",
        "Rau und tagsüber leer wirkend an manchen Blöcken",
        "Wenige klassische Sehenswürdigkeiten, Sie sind hier, um zu essen, zu trinken und zu bummeln",
      ],
    },
  ],

  pois: [
    {
      slug: "acropolis",
      citySlug: "athens",
      name: "Akropolis und Parthenon",
      lat: 37.9715,
      lng: 23.7267,
      kind: "sight",
      needsBooking: true,
      tip: "Kaufen Sie das zeitgebundene Akropolis-Ticket online, bevor Sie reisen, und nehmen Sie den allerersten 8-Uhr-Slot oder die letzten zwei Stunden vor Schließung, denn die Mittagshitze im Sommer und die Menschenmengen auf dem schattenlosen Felsen sind brutal. Das Kombiticket für Akropolis und Stätten ist deutlich preiswerter und deckt über mehrere Tage auch die antike Agora, die römische Agora, den Tempel des Olympischen Zeus und mehr ab. Betreten Sie sie durch das ruhigere Südhang-Tor nahe dem Akropolis-Museum statt durch den überfüllten Haupteingang, und tragen Sie Wasser und einen Hut bei sich.",
    },
    {
      slug: "acropolis-museum",
      citySlug: "athens",
      name: "Akropolis-Museum",
      lat: 37.9686,
      lng: 23.7286,
      kind: "museum",
      needsBooking: true,
      tip: "Günstig, klimatisiert und das perfekte Mittagsrefugium vor der Hitze, kombinieren Sie es also mit dem Felsen am selben Tag und tauchen Sie hier ein, wenn die Sonne am schlimmsten ist. Buchen Sie online, um die Ticketschlange zu überspringen, und beginnen Sie dann in der Parthenon-Galerie im Obergeschoss, deren Glaswände den echten Tempel auf dem Hügel direkt gegenüber einrahmen. Der Glasboden über dem ausgegrabenen antiken Viertel am Eingang ist auf dem Weg hinein einen langsamen Blick wert.",
    },
    {
      slug: "ancient-agora",
      citySlug: "athens",
      name: "Antike Agora und Hephaistos-Tempel",
      lat: 37.9755,
      lng: 23.7223,
      kind: "sight",
      needsBooking: false,
      tip: "Vom Kombiticket für die Akropolis abgedeckt, nutzen Sie also dieses, statt separat zu zahlen, und kommen Sie am Morgen, bevor die Akropolis-Menge hierher herabströmt. Der Hephaistos-Tempel oben ist der besterhaltene antike griechische Tempel überhaupt, weit intakter als der Parthenon, und fast nie überfüllt. Lassen Sie die rekonstruierte Stoa des Attalos nicht aus, deren schattige Kolonnade ein kleines, kühles Museum alltäglicher athenischer Funde beherbergt.",
    },
    {
      slug: "plaka",
      citySlug: "athens",
      name: "Altstadtviertel Plaka",
      lat: 37.9714,
      lng: 23.7286,
      kind: "experience",
      needsBooking: false,
      tip: "Bummeln Sie am frühen Morgen durch die verkehrsfreien Gassen für die Bougainvillea und Fotos leerer Straßen, und kehren Sie dann nach 20 Uhr zurück, wenn die Tavernen lebendig werden. Weichen Sie von der Souvenir-Hauptmeile der Adrianou zu den ruhigen oberen Straßen ab, die zu Anafiotika hinaufklettern, wo die Preise fallen und die Atmosphäre besser wird. Lassen Sie die Tavernen mit Fotomenüs und Anwerbern davor aus, sie zehren von der Lage.",
    },
    {
      slug: "monastiraki-square",
      citySlug: "athens",
      name: "Monastiraki-Flohmarkt und -Platz",
      lat: 37.9764,
      lng: 23.7256,
      kind: "sight",
      needsBooking: false,
      tip: "Der Flohmarkt am Sonntagmorgen auf dem Avissynias-Platz ist der echte, mit echtem Krempel und Antiquitäten, während die täglichen Stände der Ifestou zu Touristensouvenirs neigen. Achten Sie im Gedränge auf Ihre Tasche und Ihr Portemonnaie, dies ist der für Taschendiebstahl anfälligste Ort der Stadt. Steigen Sie in der Dämmerung zu einer beliebigen Dachterrassenbar abseits des Platzes für den direkten Akropolis-Blick über die Terrakottadächer.",
    },
    {
      slug: "temple-olympian-zeus",
      citySlug: "athens",
      name: "Tempel des Olympischen Zeus",
      lat: 37.9693,
      lng: 23.7332,
      kind: "sight",
      needsBooking: false,
      tip: "Im Kombiticket für die Akropolis enthalten, es gibt also keinen Grund, einen separaten Eintritt zu kaufen, und 15 bis 20 Minuten genügen reichlich für die erhaltenen Riesensäulen. Verbinden Sie ihn mit dem Hadriansbogen direkt daneben, der von der Straße aus kostenlos zu sehen ist, und dem Nationalgarten einen kurzen Fußweg nördlich für Schatten. Das Licht am späten Nachmittag färbt den Marmor golden und der Andrang ist hier zu jeder Stunde gering.",
    },
    {
      slug: "lycabettus-hill",
      citySlug: "athens",
      name: "Lykabettus-Hügel",
      lat: 37.9829,
      lng: 23.7439,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Der höchste Punkt der Stadt und der beste Ort für den Sonnenuntergang, mit der Akropolis, dem Häusermeer und dem Meer, ausgebreitet unter der Kapellenterrasse. Fahren Sie mit der Standseilbahn von Kolonaki hinauf, um den steilen Anstieg zu sparen, und gehen Sie danach durch den Kiefernwald hinunter, wenn Ihre Knie es zulassen. Kommen Sie 30 Minuten vor Sonnenuntergang, um sich einen Platz an der Café-Reling zu sichern, und bringen Sie eine Schicht mit, es ist zugig oben.",
    },
    {
      slug: "national-archaeological-museum",
      citySlug: "athens",
      name: "Archäologisches Nationalmuseum",
      lat: 37.9891,
      lng: 23.7326,
      kind: "museum",
      needsBooking: false,
      tip: "Die größte Sammlung antiker griechischer Kunst der Welt, nördlich des Zentrums, und die Reise wert, selbst wenn Sie meinen, museumsmüde zu sein. Gehen Sie geradewegs zur goldenen Maske des Agamemnon, der aufragenden Bronze des Zeus oder Poseidon und dem Mechanismus von Antikythera, und schlendern Sie dann nach Belieben. Es ist ein 15-Minuten-Fußweg oder ein Metro-Sprung vom Zentrum, und die Morgen sind am ruhigsten, beginnen Sie also hier vor den Nachmittagsgruppen.",
    },
    {
      slug: "panathenaic-stadium",
      citySlug: "athens",
      name: "Panathenäisches Stadion",
      lat: 37.9682,
      lng: 23.7411,
      kind: "sight",
      needsBooking: false,
      tip: "Das ganz aus Marmor gebaute Stadion, das 1896 die ersten modernen Olympischen Spiele ausrichtete, und das Eintrittsticket beinhaltet einen Audioguide und die Möglichkeit, eine Runde zu laufen oder auf dem Siegerpodest zu stehen. Sie bekommen den vollen Effekt kostenlos von der Straßenreling, wenn Sie lieber nicht zahlen, da das ganze Hufeisen von außen sichtbar ist. Kommen Sie früh oder spät, um die Bahn für Fotos für sich zu haben, und verbinden Sie es mit dem benachbarten Nationalgarten.",
    },
    {
      slug: "anafiotika",
      citySlug: "athens",
      name: "Anafiotika",
      lat: 37.9724,
      lng: 23.7292,
      kind: "experience",
      needsBooking: false,
      tip: "Eine winzige Tasche aus weiß getünchten Häusern im Inselstil, von Arbeitern aus Anafi in den Akropolis-Hang gebaut, fühlt sich an wie ein kykladisches Dorf, das in die Stadt gefallen ist. Klettern Sie am frühen Morgen die gestuften Gassen oberhalb der oberen Plaka hinauf für die blauen Türen und Katzen ganz ohne Menschenmengen. Es gibt hier oben keine Läden oder Cafés, es ist rein ein Ort zum Bummeln, gehen Sie also leise und respektieren Sie, dass Menschen hinter diesen Türen wohnen.",
    },
    {
      slug: "roman-agora",
      citySlug: "athens",
      name: "Römische Agora und Turm der Winde",
      lat: 37.9743,
      lng: 23.7258,
      kind: "sight",
      needsBooking: false,
      tip: "Vom Kombiticket für die Akropolis abgedeckt und klein genug, um sie in 20 Minuten zu sehen, fügen Sie sie also in einen Plaka-Bummel ein, statt einen eigenen Ausflug daraus zu machen. Der achteckige Turm der Winde ist der Star, eine antike Marmor-Wetterstation und Wasseruhr mit geschnitzten Windgöttern auf jeder Seite und eines der besterhaltenen Bauwerke seiner Zeit. Er liegt direkt am Rand der Plaka, schieben Sie ihn also zwischen die antike Agora und das Mittagessen.",
    },
    {
      slug: "acropolis-rooftop-bar",
      citySlug: "athens",
      name: "Dachterrassenbar mit Akropolis-Blick",
      lat: 37.9762,
      lng: 23.7255,
      kind: "food",
      needsBooking: true,
      tip: "Der signature Athener Sundowner ist ein Drink auf einer Monastiraki-Dachterrasse mit der angestrahlten Akropolis direkt voraus, und die bekanntesten Terrassen sind ausgebucht, reservieren Sie also ein bis zwei Tage im Voraus einen Sonnenuntergangstisch. Sie zahlen einen Aussichtsaufschlag auf die Drinks, behandeln Sie es also als eine Runde fürs Foto statt als ganzes Abendessen. Wenn Sie die Reservierung auslassen, gibt der kostenlose öffentliche Aussichtspunkt auf dem Areopag-Felsen unterhalb der Akropolis einen ähnlichen Sonnenuntergang für nichts, nur ohne den Cocktail.",
    },
    {
      slug: "varvakios-market",
      citySlug: "athens",
      name: "Zentralmarkt Varvakios",
      lat: 37.9803,
      lng: 23.7266,
      kind: "food",
      needsBooking: false,
      tip: "Der lärmende zentrale Fleisch- und Fischmarkt der Stadt an der Athinas-Straße, geöffnet montags bis samstags etwa 7 bis 15 Uhr und sonntags geschlossen, und am besten am späten Vormittag, wenn er in vollem Gange ist. Drängen Sie sich an den hängenden Tierhälften vorbei zu den alten Tavernen, die in den Hallen versteckt sind, wo Marktarbeiter Kuttelsuppe und gegrillten Fisch zu Tiefstpreisen essen. Selbst wenn Sie hier nicht essen, sind die umliegenden Gewürz-, Nuss- und Feinkostläden in der Evripidou ein toller, günstiger Stopp für Essens-Souvenirs.",
    },
    {
      slug: "filopappou-hill",
      citySlug: "athens",
      name: "Filopappou-Hügel",
      lat: 37.9668,
      lng: 23.7189,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Der kiefernbewachsene Hügel, der von Südwesten der Akropolis gegenüberliegt, kostenlos und rund um die Uhr geöffnet, mit dem einzeln besten direkten Blick auf den Felsen und den Parthenon. Gehen Sie den Marmorweg von der Dionysiou-Areopagitou-Promenade bei Sonnenuntergang hinauf, wenn die Akropolis glüht und die Menschenmengen auf dem Felsen selbst sind, nicht hier. Tragen Sie richtiges Schuhwerk, die antiken Wege sind glatt poliert, und tragen Sie Wasser bei sich, da es oben kein Café gibt.",
    },
  ],

  itineraries: [
    {
      citySlug: "athens",
      days: 2,
      summary:
        "Zwei Tage reichen, um das wesentliche Athen abzudecken, auch wenn es ein volles und fokussiertes Paar Tage statt eines entspannten ist. In 48 Stunden können Sie die Akropolis und ihr Museum an Tag eins schaffen, dann die antike Agora, Plaka, Monastiraki und einen Dachterrassen-Sonnenuntergang an Tag zwei, mit gutem Essen an beiden Abenden in der Altstadt. Was Sie streichen müssen: das großartige Archäologische Nationalmuseum, einen Aufstieg zum Lykabettus oder Filopappou bei Sonnenuntergang und jeden Tagesausflug aus der Stadt, dies ist also die Version der klassischen Höhepunkte. Sie eignet sich für ein Wochenende, einen Zwischenstopp auf dem Weg zu den Inseln oder einen ersten Vorgeschmack auf die Stadt. Das eine Nicht-Verhandelbare: Buchen Sie das zeitgebundene Akropolis-Ticket vorab und nehmen Sie den 8-Uhr-Öffnungsslot, denn der schattenlose Felsen ist am späten Vormittag in warmen Monaten quälend. Wohnen Sie in Plaka, damit beide Morgen zu Fuß an den Stätten beginnen und die Abende Sie wenige Schritte vom Abendessen entfernt haben. Wenn Sie einen dritten Tag bekommen, ergänzen Sie das Archäologische Nationalmuseum und einen Sonnenuntergangshügel, das einzeln beste Upgrade.",
      stayNeighborhoodSlug: "plaka",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Die Akropolis und ihr Museum",
          morning: [
            {
              poiSlug: "acropolis",
              text: "Seien Sie zu Ihrem vorab gebuchten 8-Uhr-Slot an der Akropolis, betreten Sie sie durch das ruhigere Südhang-Tor, und gehen Sie hinauf zum Parthenon, bevor die Hitze und die Reisegruppen eintreffen. Umrunden Sie das Erechtheion und die Propyläen und halten Sie dann auf dem Weg hinab am Areopag-Felsen für ein kostenloses Panorama über die Stadt inne.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Mittagessen in Koukaki oder auf der Fußgänger-Promenade Dionysiou Areopagitou unterhalb des Südhangs, ein kurzer ebener Fußweg vom Museum. Lassen Sie sich aus der Mittagssonne Zeit vor dem Nachmittag drinnen.",
              durationMin: 75,
            },
            {
              poiSlug: "acropolis-museum",
              text: "Tauchen Sie für den heißesten Teil des Tages in das kühle, klimatisierte Akropolis-Museum ein und beginnen Sie in der Parthenon-Galerie im Obergeschoss, die den echten Tempel gegenüber einrahmt. Der Glasboden über der ausgegrabenen antiken Straße am Eingang ist auf Ihrem Weg hinein einen langsamen Blick wert.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "plaka",
              text: "Bummeln Sie hinauf in die Plaka, wenn das Licht weicher wird, und klettern Sie die ruhigen oberen Gassen Richtung Anafiotika, bevor sich die Tavernen füllen. Reservieren Sie einen Tisch abseits der Souvenir-Hauptmeile gegen 20:30 Uhr und lassen Sie sich zu einem langen griechischen Abendessen nieder.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Antike Agora, Altstadt und ein Dachterrassen-Sonnenuntergang",
          morning: [
            {
              poiSlug: "ancient-agora",
              text: "Beginnen Sie an der antiken Agora mit Ihrem Kombiticket, bevor die Akropolis-Menge bergab strömt, und klettern Sie zum nahezu perfekten Hephaistos-Tempel oben. Tauchen Sie in die schattige Stoa des Attalos und ihr kleines Museum alltäglicher athenischer Funde ein.",
              durationMin: 90,
            },
            {
              poiSlug: "roman-agora",
              text: "Gehen Sie wenige Minuten zur römischen Agora und ihrem achteckigen Turm der Winde, der antiken Marmor-Wetterstation mit geschnitzten Windgöttern. Sie ist klein, 20 Minuten decken sie also ab, bevor Sie in die Gassen ziehen.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "monastiraki-square",
              text: "Gehen Sie zum Monastiraki-Platz und dem Flohmarkt, stöbern Sie durch die Antiquitäten- und Krempelstände, und halten Sie im Gedränge eine Hand an Ihrer Tasche. Holen Sie sich ein günstiges Souvlaki von einem der berühmten Grillstände abseits des Platzes für ein Stehmittagessen.",
              durationMin: 90,
            },
            {
              poiSlug: "anafiotika",
              text: "Schleifen Sie durch die Plaka zurück hinauf zu den weiß getünchten inselartigen Gassen von Anafiotika und klettern Sie die Stufen hinauf für die blauen Türen und die Ruhe abseits des Marktes. Gehen Sie langsam und respektvoll, hinter diesen Türen wohnen Menschen.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "acropolis-rooftop-bar",
              text: "Reservieren Sie einen Sonnenuntergangstisch an einer Monastiraki-Dachterrassenbar für einen Drink mit der angestrahlten Akropolis direkt voraus. Behandeln Sie es als eine Runde für die Aussicht und steigen Sie dann zum Abendessen in Psyrri oder Plaka hinab.",
              durationMin: 90,
            },
            {
              text: "Runden Sie mit einem Mezze-Abendessen in Psyrri ab, wenige Gehminuten von Monastiraki, wo das Essen günstiger und lebhafter ist als in der Altstadt. Live-Rebetiko-Musik ist hier an jedem geschäftigen Abend leicht zu finden.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "athens",
      days: 3,
      summary:
        "Ja, drei Tage sind die richtige Länge für Athen, und das ist es, was wir für einen ersten Besuch empfehlen. Es gibt der Akropolis und ihrem Museum einen vollen ungehetzten Vormittag und Nachmittag, der antiken Agora und den Altstadtgassen ihren eigenen Tag mit einem Dachterrassen-Sonnenuntergang, und einen dritten Tag für das weltklasse Archäologische Nationalmuseum plus einen Lykabettus-Aufstieg und die schickere Kolonaki-Seite der Stadt. Sie essen in drei verschiedenen Vierteln, bekommen sowohl eine Plaka-Taverne als auch einen Psyrri-Mezze-Abend unter, und bewegen sich dennoch in einem Tempo, das Sie auf einem Platz sitzen statt hindurchsprinten lässt. Was weiterhin gestrichen wird, ist ein Tagesausflug aus der Stadt, was genau das ist, was ein vierter Tag hinzufügt. Dies eignet sich für Erstbesucher, Paare und alle, die eine Reise zu den Inseln unterbrechen. Wohnen Sie in Koukaki: Es geht zu Fuß zum Südhang der Akropolis und zum Museum, liegt an der Metro für die weitere Stadt, und seine Nachbarschaftstavernen schlagen die Touristenfallen der Altstadt. Buchen Sie das zeitgebundene Akropolis-Ticket vorab und nehmen Sie den 8-Uhr-Slot, bevor Sie fliegen.",
      stayNeighborhoodSlug: "koukaki",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Die Akropolis, ihr Museum und Filopappou",
          morning: [
            {
              poiSlug: "acropolis",
              text: "Seien Sie zu Ihrem vorab gebuchten 8-Uhr-Slot an der Akropolis, nutzen Sie das ruhigere Südhang-Tor nahe Ihrer Koukaki-Basis, und erreichen Sie den Parthenon, bevor die Hitze aufbaut. Umrunden Sie das Erechtheion und die Propyläen und steigen Sie dann über den Areopag-Felsen für ein kostenloses Stadtpanorama hinab.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Mittagessen auf der Dionysiou-Areopagitou-Promenade oder zurück in Koukaki, aus der Mittagssonne, vor dem Nachmittag drinnen. Dies ist die Pause, um die der Tag gebaut ist.",
              durationMin: 75,
            },
            {
              poiSlug: "acropolis-museum",
              text: "Verbringen Sie den heißen Nachmittag im kühlen Akropolis-Museum und beginnen Sie in der Parthenon-Galerie im Obergeschoss, deren Glaswände den Tempel einrahmen, den Sie gerade gegangen sind. Verweilen Sie bei den Karyatiden und dem Glasboden über der antiken Ausgrabung.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "filopappou-hill",
              text: "Gehen Sie den kiefernbewachsenen Filopappou-Hügel für den Sonnenuntergang hinauf, den besten direkten Blick auf die angestrahlte Akropolis, kostenlos und rund um die Uhr geöffnet. Tragen Sie richtiges Schuhwerk für die polierten Marmorwege und kommen Sie dann zum Abendessen nach Koukaki hinunter.",
              durationMin: 90,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Antike Agora, Altstadt und ein Dachterrassen-Sonnenuntergang",
          morning: [
            {
              poiSlug: "ancient-agora",
              text: "Beginnen Sie an der antiken Agora mit Ihrem Kombiticket, vor den Menschenmengen, die vom Felsen herabströmen, und klettern Sie zum intakten Hephaistos-Tempel. Kühlen Sie sich in der rekonstruierten Stoa des Attalos und ihrem kleinen Museum ab.",
              durationMin: 90,
            },
            {
              poiSlug: "roman-agora",
              text: "Schneiden Sie hinüber zur römischen Agora und dem achteckigen Turm der Winde, der geschnitzten antiken Wetterstation, mit demselben Ticket. Zwanzig Minuten decken sie ab, bevor Sie in die Plaka-Gassen gleiten.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "plaka",
              text: "Bummeln Sie durch Plaka und klettern Sie zu den weiß getünchten Stufen von Anafiotika, mit einem gemächlichen Mittagessen auf einer ruhigen oberen Gasse abseits der Souvenirmeile. Dies ist der Nachmittag, um zu treiben statt Dinge abzuhaken.",
              durationMin: 120,
            },
            {
              poiSlug: "monastiraki-square",
              text: "Steigen Sie zum Monastiraki-Platz und seinem Flohmarkt hinab, stöbern Sie an den Ständen und achten Sie im Gedränge auf Ihre Tasche. Timen Sie es so, dass Sie nahe den Dachterrassen sind, wenn das Licht zu schwinden beginnt.",
              durationMin: 60,
            },
          ],
          evening: [
            {
              poiSlug: "acropolis-rooftop-bar",
              text: "Nehmen Sie Ihren reservierten Sonnenuntergangstisch an einer Monastiraki-Dachterrasse für einen Drink mit der erleuchteten Akropolis voraus. Eine Runde für die Aussicht, dann hinab zum Abendessen.",
              durationMin: 90,
            },
            {
              text: "Abendessen in Psyrri, einen kurzen Fußweg entfernt, für Mezze, Live-Rebetiko und den lebhaftesten, preiswertesten Abend im Zentrum. Reservieren Sie am Wochenende einen Tisch, die guten Spots füllen sich schnell.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Archäologisches Nationalmuseum, Lykabettus und Kolonaki",
          morning: [
            {
              poiSlug: "national-archaeological-museum",
              text: "Gehen Sie früh zum Archäologischen Nationalmuseum, der schönsten Sammlung antiker griechischer Kunst überhaupt, ein 15-Minuten-Fußweg oder Metro-Sprung nördlich des Zentrums. Steuern Sie geradewegs die goldene Maske des Agamemnon, die große Bronze des Zeus oder Poseidon und den Mechanismus von Antikythera an, und schlendern Sie dann nach Belieben.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "panathenaic-stadium",
              text: "Überqueren Sie die Stadt zum ganz aus Marmor gebauten Panathenäischen Stadion, Heimat der ersten modernen Olympischen Spiele, wo das Ticket Sie eine Runde laufen und auf dem Podest stehen lässt. Verbinden Sie es mit einem Spaziergang durch den schattigen Nationalgarten direkt daneben.",
              durationMin: 90,
            },
            {
              text: "Bummeln Sie hinauf ins schicke Kolonaki für Kaffee und Schaufensterbummel zwischen den Galerien und Boutiquen, oder die Kykladen- oder Benaki-Museen, wenn Sie noch Appetit haben. Lassen Sie sich nahe der Lykabettus-Standseilbahn nieder für den kommenden Aufstieg.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "lycabettus-hill",
              text: "Fahren Sie mit der Standseilbahn den Lykabettus-Hügel hinauf für den Sonnenuntergang, den höchsten Aussichtspunkt der Stadt, mit der Akropolis, dem Häusermeer und dem Meer darunter. Kommen Sie 30 Minuten vor Sonnenuntergang für einen Platz an der Reling und bringen Sie eine Schicht gegen die Brise mit.",
              durationMin: 90,
            },
            {
              text: "Kommen Sie hinunter zu einem Abschieds-Abendessen in Kolonaki oder zurück in Koukaki und geben Sie bei Ihrer letzten Athen-Mahlzeit etwas mehr aus. Gegrillter Fisch, eine Auswahl an Mezze und eine Karaffe lokalen Weins sind der klassische Abschied.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
    {
      citySlug: "athens",
      days: 4,
      summary:
        "Vier Tage sind der Idealpunkt für Athen und verwandeln einen Sightseeing-Sprint in einen echten Urlaub mit einem Tag, um die Stadt zu verlassen. Die Tage eins bis drei decken das Wesentliche ohne Hetze ab: die Akropolis und ihr Museum, die antike Agora mit den Altstadtgassen und einem Dachterrassen-Sonnenuntergang, und das Archäologische Nationalmuseum kombiniert mit einem Lykabettus-Aufstieg. Tag vier ist das Ventil, ein Ausflug hinaus ans Meer, entweder zum Poseidontempel am Kap Sounion für einen Sonnenuntergang von der Klippe über der Ägäis, oder mit einer Schnellfähre von Piräus zur Insel Ägina oder Hydra für ein Bad, ein Hafen-Mittagessen und ein langsameres Tempo. Diese Länge eignet sich für Reisende, die den Zwangsmarsch hassen, für Paare und für alle, die den klassischen griechischen Insel-und-Meer-Tag wollen, ohne Athen hinter sich zu lassen. Für vier Tage empfehlen wir, sich in Monastiraki niederzulassen: Es ist der Verkehrsknotenpunkt für den Flughafen, den Hafen und den Tagesausflug, und seine Dachterrassen und sein Straßenleben machen die Heimkehr an jedem Abend zum Teil des Spaßes. Buchen Sie das zeitgebundene Akropolis-Ticket weit im Voraus und nehmen Sie einen frühen Slot.",
      stayNeighborhoodSlug: "monastiraki",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Die Akropolis und ihr Museum",
          morning: [
            {
              poiSlug: "acropolis",
              text: "Seien Sie zu Ihrem gebuchten 8-Uhr-Slot an der Akropolis, betreten Sie sie durch das ruhigere Südhang-Tor, und erreichen Sie den Parthenon vor der Hitze und den Menschenmengen. Umrunden Sie das Erechtheion und die Propyläen und nehmen Sie dann auf dem Weg hinab den kostenlosen Stadtblick vom Areopag-Felsen mit.",
              durationMin: 120,
            },
          ],
          afternoon: [
            {
              text: "Mittagessen auf der Dionysiou-Areopagitou-Promenade unterhalb des Südhangs, ein ebener Fußweg vom Museum, und raus aus der Mittagssonne. Halten Sie es leicht vor dem Nachmittag drinnen.",
              durationMin: 75,
            },
            {
              poiSlug: "acropolis-museum",
              text: "Verbringen Sie den heißen Nachmittag im kühlen Akropolis-Museum und beginnen Sie in der Parthenon-Galerie im Obergeschoss, die den echten Tempel über dem Tal einrahmt. Der Glasboden über der antiken Ausgrabung am Eingang belohnt einen langsamen Blick.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "acropolis-rooftop-bar",
              text: "Nehmen Sie einen reservierten Sonnenuntergangstisch auf einer Monastiraki-Dachterrasse nahe Ihrer Basis für einen Drink mit der erleuchteten Akropolis voraus. Eine Runde für die Aussicht, dann Abendessen in der Nähe.",
              durationMin: 90,
            },
            {
              text: "Abendessen in Psyrri, Minuten von Ihrer Monastiraki-Basis, für Mezze und den lebhaftesten Abend im Zentrum. Kommen Sie im Viertel an, das Sie Ihr Zuhause nennen.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Antike Agora, römische Agora und die Altstadt",
          morning: [
            {
              poiSlug: "ancient-agora",
              text: "Beginnen Sie an der antiken Agora mit Ihrem Kombiticket, bevor die Akropolis-Menge herabströmt, und klettern Sie zum intakten Hephaistos-Tempel. Kühlen Sie sich in der Stoa des Attalos und ihrem Museum alltäglicher Funde ab.",
              durationMin: 90,
            },
            {
              poiSlug: "roman-agora",
              text: "Gehen Sie zur römischen Agora und ihrem achteckigen Turm der Winde, der antiken Marmor-Wetterstation mit geschnitzten Windgöttern, mit demselben Ticket. Zwanzig Minuten hier vor den Gassen.",
              durationMin: 30,
            },
          ],
          afternoon: [
            {
              poiSlug: "plaka",
              text: "Bummeln Sie in gemächlichem Tempo durch Plaka und klettern Sie zu den weiß getünchten inselartigen Stufen von Anafiotika oberhalb der Souvenirmeile. Halten Sie für ein langes Mittagessen auf einer ruhigen oberen Gasse an.",
              durationMin: 120,
            },
            {
              poiSlug: "temple-olympian-zeus",
              text: "Gehen Sie zum Tempel des Olympischen Zeus und zum Hadriansbogen mit Ihrem Kombiticket, wo die erhaltenen Riesensäulen im Nachmittagslicht glühen. Der Andrang ist hier zu jeder Stunde gering.",
              durationMin: 45,
            },
          ],
          evening: [
            {
              poiSlug: "monastiraki-square",
              text: "Treiben Sie am Abend durch den Monastiraki-Platz zurück, stöbern Sie an den Ständen und saugen Sie das Brummen auf. Holen Sie sich ein günstiges Souvlaki von einem berühmten Grillstand abseits des Platzes, wenn Sie einen lässigen Happen wollen.",
              durationMin: 60,
            },
            {
              text: "Abendessen zurück in Psyrri oder Plaka, reservieren Sie im Voraus für alles mit einem Namen. Live-Rebetiko ist in Psyrri an einem geschäftigen Abend leicht zu finden.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Archäologisches Nationalmuseum und Lykabettus",
          morning: [
            {
              poiSlug: "national-archaeological-museum",
              text: "Gehen Sie früh zum Archäologischen Nationalmuseum, der größten Sammlung antiker griechischer Kunst der Welt, ein kurzer Fußweg oder Metro-Sprung nördlich. Steuern Sie zuerst die Maske des Agamemnon, die große Bronze des Zeus oder Poseidon und den Mechanismus von Antikythera an, und schlendern Sie dann.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "panathenaic-stadium",
              text: "Überqueren Sie die Stadt zum ganz aus Marmor gebauten Panathenäischen Stadion, Heimat der ersten modernen Olympischen Spiele, und laufen Sie eine Runde oder stehen Sie mit Ihrem Ticket auf dem Podest. Verbinden Sie es mit dem schattigen Nationalgarten direkt nebenan.",
              durationMin: 90,
            },
            {
              text: "Bummeln Sie hinauf ins Kolonaki für Kaffee und Boutiquen, oder die Kykladen- oder Benaki-Museen, wenn Sie noch den Appetit haben. Positionieren Sie sich nahe der Lykabettus-Standseilbahn für den Sonnenuntergangsaufstieg.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "lycabettus-hill",
              text: "Fahren Sie mit der Standseilbahn den Lykabettus-Hügel hinauf für den Sonnenuntergang, den höchsten Aussichtspunkt der Stadt, mit der Akropolis und dem Meer, ausgebreitet darunter. Kommen Sie 30 Minuten früh für einen Platz an der Reling und bringen Sie eine Schicht gegen die Brise mit.",
              durationMin: 90,
            },
            {
              text: "Abendessen in Kolonaki oder zurück nahe Monastiraki, wo immer Ihre Beine landen. Sparen Sie etwas Energie, morgen verlassen Sie die Stadt Richtung Meer.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Meertag: Kap Sounion oder ein Inselhüpfen",
          morning: [
            {
              text: "Nehmen Sie den Tag aus der Stadt hinaus ans Meer. Fahren Sie entweder mit dem Küstenbus oder einer Tour hinab zum Poseidontempel am Kap Sounion, einer Klippenruine über der Ägäis etwa 70 km südlich, getimt auf den berühmten Sonnenuntergang. Oder nehmen Sie eine Schnellfähre von Piräus nach Ägina, ein leichter 40-Minuten-Sprung, für Pistazienhaine, eine Hafenfront und ein Bad.",
              durationMin: 240,
            },
          ],
          afternoon: [
            {
              text: "Wenn Sie eine Insel gewählt haben, verbringen Sie den Nachmittag auf Ägina oder fahren Sie weiter zum hübscheren Hydra, wo Autos verboten sind und Esel noch die steinernen Gassen bearbeiten, mit einem langen Hafentavernen-Mittagessen und einem Bad von den Felsen. Wenn Sie Sounion gewählt haben, unterbrechen Sie die Küstenstraße an einem der Strände der Athener Riviera für ein Bad vor dem Tempel.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              text: "Für Sounion, seien Sie zum Sonnenuntergang am Poseidontempel, wenn die Marmorsäulen das letzte Licht über dem Meer einfangen, und fahren Sie dann zurück in die Stadt. Für die Inseln, nehmen Sie eine Fähre am frühen Abend zurück nach Piräus und die Metro hinauf ins Zentrum.",
              durationMin: 120,
            },
            {
              text: "Abschieds-Abendessen zurück nahe Monastiraki, ein kurzer Fußweg von Ihrem Bett ohne Weiterreise zu planen, was der ganze Sinn ist, sich hier niederzulassen. Setzen Sie für die letzte Athen-Nacht klassisch auf gegrillten Fisch und Mezze.",
              durationMin: 120,
            },
          ],
        },
      ],
    },
  ],
};

export default athensDe;
