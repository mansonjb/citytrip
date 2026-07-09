import type { CityData } from "../types";

const parisDe: CityData = {
  city: {
    slug: "paris",
    name: "Paris",
    country: "Frankreich",
    countrySlug: "france",
    lat: 48.8566,
    lng: 2.3522,
    tier: 1,
    idealDays: 4,
    durations: [2, 3, 4],
    airportCode: "CDG",
    airportToCenter:
      "Vom Flughafen Charles de Gaulle erreicht der RER-B-Zug den Gare du Nord und Chatelet in etwa 30-35 Minuten für 11,80 EUR und fährt alle 10-15 Minuten. Der Roissybus zur Oper kostet rund 13 EUR, kriecht aber im Verkehr, und ein Taxi kostet pauschal 56 EUR ans rechte Ufer und 65 EUR ans linke. Von Orly nehmen Sie den Orlyval-Shuttle nach Antony und dann den RER B, oder die Tram T7, oder den direkten Orlybus nach Denfert-Rochereau.",
    centerWalkable: true,
    bestMonths: [4, 5, 6, 9, 10],
    avoidMonths: [],
    monthlyNotes: {
      1: "Kalt und grau bei 7-8 Grad mit kurzen, feuchten Tagen und den dünnsten Menschenmengen des Jahres, sobald der Neujahrsrummel abklingt. Der Winterschlussverkauf (les soldes) beginnt Anfang Januar und die Hotelpreise stehen auf ihrem tiefsten Stand, also ist es ein starker Monat für eine günstige, schlangenfreie Museumsreise.",
      2: "Noch kalt bei 8 Grad und oft bedeckt, wobei sich helle, klare Tage durchsetzen und die Schlangen am Louvre und am Musee d'Orsay kurz bleiben. Außerhalb der Schulferienwoche bleiben die Preise niedrig, was diesen Monat zu einem guten Preis-Leistungs-Monat macht, wenn Sie sich für die Kälte anziehen.",
      3: "Die Höchstwerte klettern auf 12-13 Grad und die Stadt beginnt zu ergrünen, mit Cafeterrassen, die an den ersten milden Nachmittagen wieder öffnen. Die Menschenmengen sind noch dünn und die Hotelpreise angemessen vor dem Frühjahrsansturm, eine still hervorragende Zeit für einen Besuch.",
      4: "Einer der besten Monate bei 15-16 Grad, Blüten an den Bäumen und lange helle Tage, wobei Aprilschauer häufig sind, also packen Sie eine Schicht ein. Menschenmengen und Preise wachsen im Laufe des Monats, und Ostern kann das Zentrum füllen, also buchen Sie Museen und Hotels im Voraus.",
      5: "Warm und lebhaft bei 19-20 Grad mit der Terrassensaison in vollem Gange, doch mehrere Feiertage (1. Mai, 8. Mai, Christi Himmelfahrt) schließen viele Geschäfte und Museen, also prüfen Sie die Daten. Das Tennisturnier Roland Garros beginnt gegen Ende des Monats, und dies ist Pariser Wetter von Spitzenqualität mit steigenden Besucherzahlen.",
      6: "Lange goldene Abende bei 23 Grad, das beste Licht des Jahres, und die Terrassen bis spät gefüllt. Die Fete de la Musique am 21. Juni füllt jede Straße mit kostenlosen Konzerten, und Roland Garros endet Anfang Juni, also rechnen Sie mit einer geschäftigen, festlichen und voll ausgebuchten Stadt.",
      7: "Warm bei 25 Grad und geschäftig mit Sommertouristen, während die Pariser beginnen zu verreisen. Der Nationalfeiertag am 14. Juli bringt eine Militärparade die Champs-Elysees hinunter und ein Feuerwerk am Eiffelturm, und Paris Plages verwandelt die Seine-Ufer den Sommer über in einen provisorischen Strand mit Sand und Liegestühlen.",
      8: "Heiße Phasen bis 25-26 Grad und der leerste einheimische Monat, da viele Restaurants und kleine Geschäfte zwei oder drei Wochen schließen, während ihre Inhaber die traditionellen Augustferien nehmen. Die großen Sehenswürdigkeiten bleiben geöffnet und von Besuchern belagert, Paris Plages läuft weiter, und die Stadt wirkt in ihren Wohnvierteln eigentümlich still.",
      9: "Wohl der schönste Monat: warme Tage, die von 21 Grad nachlassen, dünnere Menschenmengen nach der ersten Woche, und Geschäfte und Restaurants, die erholt aus der Sommerpause wieder öffnen. Die Modewoche und Designveranstaltungen summen gegen Ende des Monats, und das Preis-Leistungs-Verhältnis der Hotels verbessert sich, während der Andrang nachlässt.",
      10: "Mild und oft hell bei 16 Grad mit Herbstfärbung in den Parks und den ersten richtigen Regenphasen, die zurückkehren. Die Nuit Blanche Anfang Oktober hält Museen und Kunstinstallationen die ganze Nacht kostenlos geöffnet, und die Menschenmengen der Nebensaison machen die Museumsschlangen überschaubar.",
      11: "Kühl, feucht und grau bei 11 Grad mit dem kürzesten Tageslicht, das hereinbricht, aber den geringsten Menschenmengen des Herbstes und guten Hotelangeboten. Die Weihnachtsbeleuchtung geht entlang der Champs-Elysees an und die Schaufenster der Kaufhäuser werden Ende November geschmückt, was die Stimmung eines dunklen Monats hebt.",
      12: "Kalt bei 8 Grad, häufig nass und dunkel, aber das Zentrum glitzert mit Weihnachtsbeleuchtung, erleuchteten Schaufenstern und Märkten. Die Preise springen für die Strecke von Weihnachten bis Neujahr, wenn die Champs-Elysees und das Gebiet um Notre-Dame große festliche Menschenmengen anziehen, wobei Anfang Dezember ruhig und erschwinglich bleibt.",
    },
    climate: {
      1: { highC: 7, lowC: 3, rainyDays: 10 },
      2: { highC: 8, lowC: 3, rainyDays: 9 },
      3: { highC: 12, lowC: 5, rainyDays: 10 },
      4: { highC: 16, lowC: 7, rainyDays: 9 },
      5: { highC: 20, lowC: 11, rainyDays: 10 },
      6: { highC: 23, lowC: 14, rainyDays: 8 },
      7: { highC: 25, lowC: 16, rainyDays: 7 },
      8: { highC: 25, lowC: 16, rainyDays: 7 },
      9: { highC: 21, lowC: 13, rainyDays: 8 },
      10: { highC: 16, lowC: 10, rainyDays: 9 },
      11: { highC: 11, lowC: 6, rainyDays: 10 },
      12: { highC: 8, lowC: 4, rainyDays: 11 },
    },
    budgetLevel: "high",
    budgetPerDay: { budget: 80, mid: 170, high: 340 },
    tagline: "Die Museumsstadt, die Terrassenstadt, die Lauf-bis-die-Füße-versagen-Stadt.",
    heroIntro:
      "Paris belohnt Geduld: Die großen Sehenswürdigkeiten brauchen vorab gebuchte Tickets, die Museen brauchen einen eigenen Tag, und das Beste daran ist schlicht das Gehen entlang der Kais und durch die Viertel dazwischen. Vier Tage erlauben es Ihnen, den Eiffelturm und die Champs, einen Louvre-und-Inseln-Tag, Montmartre und das Marais sowie einen Tagesausflug nach Versailles ohne Gewaltmarsch aufzuteilen. Kommen Sie im Frühling oder Frühherbst, buchen Sie den Turm und den Louvre vor dem Abflug, und verlassen Sie sich auf die Metro, um die Distanzen zu überbrücken, die das Gehen nicht schafft.",
    accent: { from: "#2B3A6B", to: "#D9B96A", ink: "#18213F" },
    neighborhoodSlugs: [
      "le-marais",
      "saint-germain",
      "montmartre",
      "latin-quarter",
      "canal-saint-martin",
    ],
    nearbyCitySlugs: ["amsterdam"],
  },

  neighborhoods: [
    {
      slug: "le-marais",
      citySlug: "paris",
      name: "Le Marais",
      lat: 48.8575,
      lng: 2.3622,
      bestFor: ["first-time", "nightlife", "romantic"],
      vibe: "Ein dichtes Raster mittelalterlicher Gassen und prächtiger Stadtpalais über dem 3. und 4. Arrondissement, heute das modischste Viertel des Zentrums zum Einkaufen, für Galerien und zum Ausgehen. Es liegt zu Fuß erreichbar an Notre-Dame, dem Louvre und den Inseln, mit der eleganten Place des Vosges im Herzen und einer lebhaften LGBTQ- und Barszene bei Nacht. Zentral, stilvoll und selten langweilig.",
      pros: [
        "Zu Fuß zu Notre-Dame, den Inseln, dem Louvre und dem Centre Pompidou",
        "Bestes Boutique-Shopping und Galerienbummeln im Zentrum",
        "Ausgezeichnete Bars, Falafel und nächtliche Energie ohne Metrofahrt",
      ],
      cons: [
        "Unter den teureren Gegenden für Hotels und Abendessen",
        "Die engen Gassen werden an Wochenendabenden voll und laut",
        "Am Sonntag schwellen die Menschenmengen an, da viele Geschäfte hier geöffnet bleiben",
      ],
    },
    {
      slug: "saint-germain",
      citySlug: "paris",
      name: "Saint-Germain-des-Pres",
      lat: 48.8539,
      lng: 2.3336,
      bestFor: ["first-time", "romantic", "family"],
      vibe: "Das klassische Literaturviertel des linken Ufers, Heimat des historischen Cafe de Flore und Les Deux Magots, feiner Galerien und mit dem Jardin du Luxembourg an seinem Rand. Es ist vornehm, sicher und zentral, in kurzer Gehweite zum Musee d'Orsay, zur Seine und zum Quartier Latin. Das ist das Postkarten-Paris in einem erwachsenen, gemächlichen Tempo.",
      pros: [
        "Zu Fuß zum Musee d'Orsay, zum Louvre über den Fluss und zum Jardin du Luxembourg",
        "Elegant, ruhig und beruhigend zentral für einen ersten Besuch",
        "Zwei Metrolinien und RER-Zugang zu beiden Flughäfen und dem nahen Versailles",
      ],
      cons: [
        "Teuer sowohl für Hotels als auch für die berühmten Cafes",
        "Ruhigeres Nachtleben als im Marais oder am Kanal",
        "Kann eher touristisch und glattpoliert als einheimisch wirken",
      ],
    },
    {
      slug: "montmartre",
      citySlug: "paris",
      name: "Montmartre",
      lat: 48.8867,
      lng: 2.3431,
      bestFor: ["romantic", "budget", "local"],
      vibe: "Das Hügeldorf des 18. Arrondissements, gekrönt von den weißen Kuppeln von Sacre-Coeur und durchzogen von steilen Kopfsteinpflastergassen und Treppen. Abseits des Touristengedränges rund um die Basilika und die Place du Tertre bewahrt es ein wirklich dörfliches, bohemienhaftes Flair mit Weinbars und kleinen Plätzen. Charmant und günstiger zum Übernachten, aber ein Fußmarsch von den Hauptsehenswürdigkeiten.",
      pros: [
        "Das beste kostenlose Panorama über die Stadt von den Stufen von Sacre-Coeur",
        "Erschwinglichere Hotels als am zentralen rechten Ufer",
        "Stimmungsvolle Gassen und einheimische Bars, sobald Sie über die Touristenmengen hinaufsteigen",
      ],
      cons: [
        "Eine Metrofahrt vom Louvre, dem Eiffelturm und den Inseln entfernt",
        "Überall steile Hügel und Treppen, mühsam mit Gepäck oder Kinderwagen",
        "Die Place du Tertre und die Basilikatreppen ziehen Taschendiebe und Aufdringliche an",
      ],
    },
    {
      slug: "latin-quarter",
      citySlug: "paris",
      name: "Quartier Latin",
      lat: 48.8489,
      lng: 2.3469,
      bestFor: ["budget", "first-time", "family"],
      vibe: "Das Studentenviertel rund um die Sorbonne im 5. Arrondissement, ein Labyrinth aus engen Straßen, Buchläden und günstigen Lokalen zwischen dem Pantheon und der Seine. Es ist zentral und lebhaft, zu Fuß erreichbar von Notre-Dame, den Inseln und dem Jardin du Luxembourg, mit einigen der preiswerteren Betten am linken Ufer. Tagsüber quirlig, nachts an den Touristenfallen-Rändern etwas rau.",
      pros: [
        "Zu Fuß zu Notre-Dame, der Sainte-Chapelle und den Inseln über den Fluss",
        "Preiswertere Hotels und günstigeres Essen als im benachbarten Saint-Germain",
        "Zentrale RER- und Metroanbindung, praktisch für Versailles und beide Flughäfen",
      ],
      cons: [
        "Die touristischen Hauptstraßen (Rue de la Huchette) sind Billigessens-Fallen",
        "Überfüllt und laut rund um die Sorbonne und die Uferpromenade",
        "Zimmer in den alten Gebäuden können klein und hellhörig sein",
      ],
    },
    {
      slug: "canal-saint-martin",
      citySlug: "paris",
      name: "Canal Saint-Martin",
      lat: 48.8709,
      lng: 2.3665,
      bestFor: ["local", "nightlife", "budget"],
      vibe: "Ein junger, künstlerischer Abschnitt des 10. und 11. Arrondissements entlang eines begrünten Kanals, wo Einheimische an den Ufern picknicken und unabhängige Bars, Kaffeeröstereien und Vintage-Läden die Seitenstraßen füllen. Es tauscht große Sehenswürdigkeiten gegen echtes Viertelleben und einige der besten unkomplizierten Lokale und des Nachtlebens der Stadt. Nicht zentral für Monumente, aber der pariserischste Ort, um wirklich abzuhängen.",
      pros: [
        "Echtes einheimisches Nachtleben, Naturweinbars und Picknicks am Kanal",
        "Günstigeres Essen und Trinken als im touristischen Zentrum",
        "Gut mit der Metro an das Marais und die Sehenswürdigkeiten des rechten Ufers angebunden",
      ],
      cons: [
        "Eine Metrofahrt vom Eiffelturm, dem Louvre und den Inseln entfernt",
        "Wenige klassische Sehenswürdigkeiten in Gehweite",
        "Einige Blocks nahe dem Kanal wirken spätnachts kantig",
      ],
    },
  ],

  pois: [
    {
      slug: "eiffel-tower",
      citySlug: "paris",
      name: "Der Eiffelturm",
      lat: 48.8584,
      lng: 2.2945,
      kind: "sight",
      needsBooking: true,
      tip: "Buchen Sie ein Aufzugticket mit Zeitfenster zur Spitze Wochen im Voraus online, die offizielle Seite gibt Slots etwa 60 Tage vorher frei und sie verkaufen sich schnell; zu Fuß über die Treppe in die zweite Etage ist günstiger und selten mit Schlange. Kommen Sie zum ersten Slot am Morgen oder nach Einbruch der Dunkelheit, wenn der Turm zur vollen Stunde fünf Minuten lang funkelt. Halten Sie Taschen fest verschlossen, der Fuß und das Trocadero jenseits des Flusses sind erstklassiges Taschendiebgebiet.",
    },
    {
      slug: "louvre",
      citySlug: "paris",
      name: "Der Louvre",
      lat: 48.8606,
      lng: 2.3376,
      kind: "museum",
      needsBooking: true,
      tip: "Reservieren Sie einen Eintritt mit Zeitfenster online, er ist selbst mit dem Paris Museum Pass Pflicht, und wählen Sie den ersten 9-Uhr-Slot, um zur Mona Lisa zu gelangen, bevor sich die Wand aus Handys bildet. Der Louvre ist dienstags geschlossen und mittwochs und freitags bis etwa 21 Uhr geöffnet, wenn der Abend weit ruhiger ist. Betreten Sie ihn über den Carrousel du Louvre oder die Porte des Lions, um die Schlange an der Pyramide zu umgehen.",
    },
    {
      slug: "notre-dame",
      citySlug: "paris",
      name: "Kathedrale Notre-Dame",
      lat: 48.853,
      lng: 2.3499,
      kind: "sight",
      needsBooking: false,
      tip: "Im Dezember 2024 nach dem Brand wiedereröffnet, und das restaurierte Innere ist überwältigend. Der Eintritt ist kostenlos, aber eine Warteschlange von einer Stunde ist üblich, also reservieren Sie bis zu zwei Tage vorher einen kostenlosen Slot mit Zeitfenster in der offiziellen App oder Website, um direkt hineinzugehen. Gehen Sie früh oder am Abend für den ruhigsten Besuch, und buchen Sie den separaten Turmaufstieg, wenn Sie den Dachblick auf Gargoyle-Höhe möchten.",
    },
    {
      slug: "musee-orsay",
      citySlug: "paris",
      name: "Das Musee d'Orsay",
      lat: 48.86,
      lng: 2.3266,
      kind: "museum",
      needsBooking: true,
      tip: "Buchen Sie online einen Slot mit Zeitfenster für die große Impressionisten-Sammlung der Welt, untergebracht in einem ehemaligen Bahnhof. Es ist montags geschlossen und donnerstags bis etwa 21:45 Uhr geöffnet, der ruhigsten und stimmungsvollsten Zeit für einen Besuch. Gehen Sie zuerst direkt hinauf in die Monet-, Renoir- und Van-Gogh-Säle im fünften Stock, arbeiten Sie sich dann hinab, und erhaschen Sie den Blick durch das riesige Zifferblatt der Bahnhofsuhr.",
    },
    {
      slug: "montmartre-sacre-coeur",
      citySlug: "paris",
      name: "Montmartre und Sacre-Coeur",
      lat: 48.8867,
      lng: 2.3431,
      kind: "viewpoint",
      needsBooking: false,
      tip: "Die Basilika ist kostenlos und die Hügelstufen bieten das beste kostenlose Panorama in Paris, am besten bei Sonnenuntergang oder am frühen Morgen, bevor die Reisegruppen und die aufdringlichen Freundschaftsbändchen-Verkäufer eintreffen. Umgehen Sie das Gedränge der Place du Tertre und schlendern Sie durch die ruhigen Gassen dahinter, rund um die Rue de l'Abreuvoir und den Weinberg. Nehmen Sie die Standseilbahn (ein Metroticket) hinauf, wenn die Treppe abschreckend wirkt, und achten Sie auf den überfüllten Stufen auf Ihre Taschen.",
    },
    {
      slug: "arc-de-triomphe",
      citySlug: "paris",
      name: "Der Triumphbogen und die Champs-Elysees",
      lat: 48.8738,
      lng: 2.295,
      kind: "viewpoint",
      needsBooking: true,
      tip: "Die Dachterrasse bietet einen hervorragenden Blick direkt die Champs-Elysees hinunter und über den Stern aus zwölf Avenuen, und sie braucht ein Online-Ticket mit Zeitfenster, um die 284 Stufen zu erklimmen. Erreichen Sie sie über den unterirdischen Fußgängerdurchgang von der Ecke der Champs-Elysees, niemals über den Verkehrskreisel. Gehen Sie am späten Nachmittag für das goldene Licht die Avenue hinunter, und gehen Sie die Champs hinab Richtung Concorde statt hinauf.",
    },
    {
      slug: "sainte-chapelle",
      citySlug: "paris",
      name: "Die Sainte-Chapelle",
      lat: 48.8554,
      lng: 2.345,
      kind: "sight",
      needsBooking: true,
      tip: "Diese königliche Kapelle aus dem 13. Jahrhundert birgt fünfzehn aufragende Wände aus buntem Glas, am besten an einem hellen Morgen zu sehen, wenn das Licht hindurchströmt. Buchen Sie online ein Ticket mit Zeitfenster, und kaufen Sie das Kombiticket mit der benachbarten Conciergerie, um beide bei einem Besuch zu sehen. Sie liegt in einem aktiven Gerichtsgebäude, also gibt es am Eingang eine Sicherheitskontrolle wie am Flughafen; kommen Sie zur Öffnung um 9 Uhr, um sowohl der Schlange als auch den Reisegruppen zuvorzukommen.",
    },
    {
      slug: "versailles",
      citySlug: "paris",
      name: "Das Schloss Versailles",
      lat: 48.8049,
      lng: 2.1204,
      kind: "sight",
      needsBooking: true,
      tip: "Planen Sie einen halben bis ganzen Tag ein: Nehmen Sie den RER C nach Versailles Chateau Rive Gauche (etwa 45 Minuten, einfach rund 3,65 EUR), und meiden Sie Dienstage, wenn viele Pariser Museen schließen und Versailles überlaufen ist. Buchen Sie online das Passport-Ticket mit einem Schloss-Zeitfenster und treffen Sie zur Öffnung um 9 Uhr ein; der Spiegelsaal ist frühmorgens am ruhigsten. Die weitläufigen Gärten sind kostenlos außer an Tagen mit Wasserspiel-Shows, also lassen Sie Zeit zum Spazieren oder mieten Sie ein Fahrrad oder einen Wagen.",
    },
    {
      slug: "le-marais",
      citySlug: "paris",
      name: "Das Marais",
      lat: 48.8575,
      lng: 2.3622,
      kind: "experience",
      needsBooking: false,
      tip: "Schlendern Sie durch die Gassen für Boutiquen, Galerien und die von Arkaden umgebene Place des Vosges, den ältesten geplanten Platz von Paris und kostenlos zu durchstreifen. Kommen Sie an einem Sonntag, wenn ein Großteil des Viertels anders als der Rest der Stadt geöffnet bleibt, und stellen Sie sich mittags für eine Falafel in der Rue des Rosiers an. Schauen Sie unterwegs in die kostenlosen Innenhöfe des Hotel de Sully und des Musee Carnavalet (kostenlose Dauerausstellung zur Geschichte der Stadt) hinein.",
    },
    {
      slug: "latin-quarter",
      citySlug: "paris",
      name: "Quartier Latin",
      lat: 48.8489,
      lng: 2.3469,
      kind: "experience",
      needsBooking: false,
      tip: "Erkunden Sie die Straßen rund um das Pantheon und die Sorbonne nach Buchläden, dem Laden Shakespeare and Company am Fluss und der verfallenen römischen Arena der Arenes de Lutece, versteckt abseits der Rue Monge (kostenlos). Meiden Sie die touristische Rue de la Huchette fürs Abendessen und essen Sie eine Straße weiter hinten. Der Vormittagsmarkt in der Rue Mouffetard ist das einheimische Highlight, am besten vor Mittag.",
    },
    {
      slug: "seine-cruise",
      citySlug: "paris",
      name: "Bootsfahrt auf der Seine",
      lat: 48.8606,
      lng: 2.2977,
      kind: "experience",
      needsBooking: false,
      tip: "Ein einstündiges Bootsgleiten vorbei an Notre-Dame, dem Louvre und dem Eiffelturm ist der einfachste Weg, die Monumente zu verbinden und die Füße auszuruhen, und es ist nach Einbruch der Dunkelheit magisch, wenn alles beleuchtet ist. Umgehen Sie die teuren Dinnerfahrten und nehmen Sie eine reguläre Abfahrt der Bateaux-Mouches oder der Vedettes du Pont-Neuf für rund 15 EUR. Gehen Sie in der Dämmerung an Bord für den Übergang von Sonnenuntergang zu Lichtern, und setzen Sie sich auf das offene obere Deck.",
    },
    {
      slug: "luxembourg-gardens",
      citySlug: "paris",
      name: "Der Jardin du Luxembourg",
      lat: 48.8462,
      lng: 2.3372,
      kind: "park",
      needsBooking: false,
      tip: "Der eleganteste Park des linken Ufers ist kostenlos und wie geschaffen für ein Picknick oder eine Rast zwischen Museen, mit grünen Metallstühlen, die man zum zentralen Brunnen ziehen kann, wo Kinder Spielzeugboote segeln lassen. Er ist die perfekte Pause zwischen Saint-Germain, dem Musee d'Orsay und dem Quartier Latin, alle in kurzer Gehweite. Kommen Sie am Vormittag an einem sonnigen Tag und schnappen Sie sich früh einen Stuhl, sie füllen sich zur Mittagszeit schnell.",
    },
    {
      slug: "musee-rodin",
      citySlug: "paris",
      name: "Das Rodin-Museum",
      lat: 48.8553,
      lng: 2.3158,
      kind: "museum",
      needsBooking: false,
      tip: "Das Stadtpalais des Bildhauers und der Rosengarten bergen den Denker und das Höllentor in einer der schönsten Museumskulissen der Stadt, nahe dem Invalidendom. Ein Ticket nur für den Garten ist ein günstiger Weg, die großen Bronzen im Freien zu sehen, wenn Sie wenig Zeit oder Budget haben. Es ist montags geschlossen; kommen Sie an einem schönen Nachmittag und verbinden Sie es mit den nahen Invalides und dem Grab Napoleons.",
    },
    {
      slug: "pere-lachaise",
      citySlug: "paris",
      name: "Friedhof Pere-Lachaise",
      lat: 48.8619,
      lng: 2.3934,
      kind: "sight",
      needsBooking: false,
      tip: "Der berühmteste Friedhof der Stadt ist ein kostenloses, hügeliges Labyrinth aus Kopfsteinpflasteralleen und prächtigen Grabmälern, Ruhestätte von Jim Morrison, Oscar Wilde, Chopin und Edith Piaf. Schnappen Sie sich am Eingang einen kostenlosen Plan oder laden Sie einen herunter, denn die Gräber sind unter 70.000 Grabstätten wirklich schwer zu finden. Betreten Sie ihn an der Porte des Amandiers oder der Metro Pere Lachaise, tragen Sie ordentliche Schuhe für das Kopfsteinpflaster, und planen Sie mindestens 90 Minuten ein.",
    },
  ],

  itineraries: [
    {
      citySlug: "paris",
      days: 2,
      summary:
        "Zwei Tage in Paris sind ein Highlight-Sprint, und Sie werden die Hetze spüren, denn die Stadt will eigentlich drei oder vier. In 48 Stunden schaffen Sie am ersten Tag den Eiffelturm, die Champs-Elysees und den Triumphbogen sowie eine Seine-Bootsfahrt, dann am zweiten Tag den Louvre, die Inseln, Notre-Dame, die Sainte-Chapelle und das Quartier Latin. Was Sie streichen müssen: Montmartre, Versailles, das Musee d'Orsay und jedes langsame Verweilen in einem Park oder auf einer Terrasse. Das passt zu einem Wochenendtrip oder einem ersten Vorgeschmack, bevor Sie Paris mit Amsterdam verbinden. Die nicht verhandelbaren Punkte sind das Vorabbuchen des Zeitfensters für die Eiffelturmspitze und eines Louvre-Eintritts mit Zeitfenster vor dem Abflug, plus eine kostenlose Notre-Dame-Reservierung, sonst verlieren Sie Stunden an Schlangen, die Sie nicht entbehren können. Quartieren Sie sich im Marais ein, damit beide Tage zentral und zu Fuß beginnen, mit Abendessen und Bars wenige Schritte von Ihrem Bett. Wenn ein dritter Tag auftaucht, ergänzen Sie Montmartre und das Musee d'Orsay und drosseln Sie das Tempo deutlich.",
      stayNeighborhoodSlug: "le-marais",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Eiffelturm, Champs-Elysees und die Seine",
          morning: [
            {
              poiSlug: "eiffel-tower",
              text: "Beginnen Sie am Eiffelturm für Ihr vorab gebuchtes Zeitfenster zur Spitze am Morgen, bevor sich die Schlangen und die Menschenmengen am Fuß aufbauen. Gehen Sie danach hinüber zur Trocadero-Terrasse für das klassische Frontalfoto des ganzen Turms und halten Sie an diesem Taschendieb-Hotspot Ihre Tasche verschlossen.",
              durationMin: 120,
            },
            {
              poiSlug: "musee-rodin",
              text: "Gehen Sie ostwärts zum Rodin-Museum nahe den Invalides, wo der Rosengarten den Denker und das Höllentor in einer der schönsten Kulissen der Stadt birgt. Ein Ticket nur für den Garten ist ein schneller, günstiger Weg, die großen Bronzen zu sehen, wenn die Zeit knapp ist.",
              durationMin: 75,
            },
          ],
          afternoon: [
            {
              poiSlug: "arc-de-triomphe",
              text: "Nehmen Sie die Metro zum Triumphbogen und erklimmen Sie die 284 Stufen zur Terrasse für den Blick über den Stern aus zwölf Avenuen, erreichen Sie ihn über den unterirdischen Durchgang, niemals über den Verkehr. Gehen Sie dann die Champs-Elysees bergab Richtung Concorde und den Tuilerien.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "seine-cruise",
              text: "Gehen Sie in der Dämmerung nahe dem Eiffelturm oder der Pont Neuf an Bord einer Seine-Bootsfahrt für das Gleiten von Sonnenuntergang zu Lichtern vorbei an Notre-Dame und dem Louvre. Setzen Sie sich auf das offene obere Deck und nehmen Sie eine reguläre einstündige Abfahrt statt eines teuren Dinnerboots.",
              durationMin: 75,
            },
            {
              text: "Kehren Sie ins Marais für das Abendessen in den Gassen rund um die Place des Vosges zurück und reservieren Sie einen Tisch überall dort, wo ein Name steht. Schließen Sie mit einem Drink in einer der späten Bars des Viertels ab, einen kurzen Fußweg von Ihrem Hotel.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Louvre, die Inseln und das Quartier Latin",
          morning: [
            {
              poiSlug: "louvre",
              text: "Seien Sie zu Ihrem vorab gebuchten 9-Uhr-Slot am Louvre und gehen Sie direkt zur Mona Lisa, bevor sich die Handywand bildet, dann drehen Sie eine Runde durch die italienischen Gemälde, die Venus von Milo und die französischen Kronjuwelen. Betreten Sie ihn über den Carrousel oder die Porte des Lions, um die Schlange an der Pyramide zu umgehen.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "sainte-chapelle",
              text: "Gehen Sie hinüber zur Ile de la Cite für Ihr Zeitfenster in der Sainte-Chapelle und heben Sie sich die fünfzehn Wände aus buntem Glas für das helle Nachmittagslicht auf. Nutzen Sie das Kombiticket, um die benachbarte Conciergerie zu sehen, und rechnen Sie am Eingang des Gerichts mit einer Sicherheitskontrolle.",
              durationMin: 90,
            },
            {
              poiSlug: "notre-dame",
              text: "Gehen Sie zu Notre-Dame, im Dezember 2024 mit ihrem restaurierten Inneren wiedereröffnet, und nutzen Sie Ihren kostenlosen reservierten Slot mit Zeitfenster, um die lange Warteschlange zu umgehen. Umrunden Sie danach das Äußere und die Strebebögen vom Ufergarten dahinter.",
              durationMin: 75,
            },
          ],
          evening: [
            {
              poiSlug: "latin-quarter",
              text: "Gehen Sie über den Fluss ins Quartier Latin und schlendern Sie vor dem Abendessen durch die Buchläden und Shakespeare and Company. Essen Sie eine Straße hinter der touristischen Rue de la Huchette und schließen Sie mit einem Drink rund um das Pantheon ab.",
              durationMin: 150,
            },
          ],
        },
      ],
    },
    {
      citySlug: "paris",
      days: 3,
      summary:
        "Drei Tage sind eine bequeme Länge für einen ersten Besuch und nahe am Idealmaß für Paris. Es gibt Ihnen am ersten Tag den Eiffelturm, die Champs-Elysees, den Triumphbogen und eine Seine-Bootsfahrt, am zweiten den Louvre mit den Inseln, Notre-Dame und der Sainte-Chapelle, und am dritten einen Montmartre-plus-Musee-d'Orsay-und-Marais-Tag, der ein Hügeldorf mit der großen Impressionisten-Sammlung ausbalanciert. Sie essen in drei verschiedenen Vierteln, bringen sowohl eine Parkpause als auch die Museen unter, auf die es ankommt, und bewegen sich dennoch in einem Tempo, das Sie eher auf einer Terrasse sitzen als daran vorbeirennen lässt. Was noch gestrichen wird, ist der Tagesausflug nach Versailles, was genau das ist, was ein vierter Tag hinzufügt. Das passt zu Erstbesuchern, Paaren und allen, die anschließend nach Amsterdam weiterreisen. Übernachten Sie in Saint-Germain: Es liegt zu Fuß am Musee d'Orsay, dem Louvre über den Fluss und dem Jardin du Luxembourg, und seine Cafes ergeben eine elegante Basis für die Abende. Buchen Sie die Eiffelturmspitze, die Louvre- und Musee-d'Orsay-Slots und eine kostenlose Notre-Dame-Reservierung vor dem Abflug vor.",
      stayNeighborhoodSlug: "saint-germain",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Eiffelturm, Champs-Elysees und die Seine",
          morning: [
            {
              poiSlug: "eiffel-tower",
              text: "Beginnen Sie am Eiffelturm für Ihr vorab gebuchtes Zeitfenster zur Spitze vor den Menschenmengen, gehen Sie dann hinüber zum Trocadero für den vollen Frontalblick. Halten Sie Ihre Tasche verschlossen, der Fuß und die Terrasse sind erstklassiges Taschendiebgebiet.",
              durationMin: 120,
            },
            {
              poiSlug: "musee-rodin",
              text: "Gehen Sie zum Rodin-Museum nahe den Invalides für den Denker und das Höllentor inmitten der Rosen. Verbinden Sie es mit einem Blick auf die vergoldete Kuppel der Invalides über dem Grab Napoleons nebenan.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "arc-de-triomphe",
              text: "Mit der Metro zum Triumphbogen und hinauf zur Terrasse für den Blick über den Stern aus Avenuen, wobei Sie den unterirdischen Durchgang nutzen, um ihn zu erreichen. Gehen Sie die Champs-Elysees hinab Richtung Concorde und in die Tuilerien.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "seine-cruise",
              text: "Machen Sie in der Dämmerung eine Seine-Bootsfahrt für das beleuchtete Gleiten vorbei an den Monumenten und gehen Sie nahe der Pont Neuf oder dem Eiffelturm an Bord. Wählen Sie ein reguläres einstündiges Boot und setzen Sie sich für den Sonnenuntergang nach oben.",
              durationMin: 75,
            },
            {
              text: "Kehren Sie nach Saint-Germain für das Abendessen zwischen den Galerien und Cafes zurück und buchen Sie im Voraus. Ein Absacker an einer klassischen Ecke wie dem Cafe de Flore oder einer ruhigeren Bar am linken Ufer krönt den Abend.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Louvre, die Inseln und die Sainte-Chapelle",
          morning: [
            {
              poiSlug: "louvre",
              text: "Seien Sie zu Ihrem 9-Uhr-Slot am Louvre und gehen Sie direkt zur Mona Lisa vor dem Gedränge, dann die Venus von Milo und die italienischen Galerien. Betreten Sie ihn über den Carrousel, um die Schlange an der Pyramide zu umgehen, und setzen Sie eine feste Ausgangszeit, sonst verschlingt das Museum den ganzen Tag.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "sainte-chapelle",
              text: "Gehen Sie hinüber zur Ile de la Cite für Ihr Zeitfenster in der Sainte-Chapelle, abgestimmt auf das helle Nachmittagslicht durch die fünfzehn Buntglaswände. Nutzen Sie das Kombiticket für die Conciergerie nebenan, einst ein Revolutionsgefängnis.",
              durationMin: 90,
            },
            {
              poiSlug: "notre-dame",
              text: "Gehen Sie zu Notre-Dame mit Ihrem kostenlosen reservierten Slot, um das nach der Wiedereröffnung 2024 restaurierte Innere ohne die lange Schlange zu sehen. Nehmen Sie das Äußere und die Strebebögen vom Garten dahinter auf, schlendern Sie dann auf die ruhigere Ile Saint-Louis für ein Eis.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              poiSlug: "latin-quarter",
              text: "Treiben Sie für den Abend ins Quartier Latin, stöbern Sie bei Shakespeare and Company und in den Buchladenstraßen rund um die Sorbonne. Essen Sie gut eine Straße abseits der Touristenmeile und schließen Sie mit einem Drink nahe dem Pantheon ab.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Montmartre, das Musee d'Orsay und das Marais",
          morning: [
            {
              poiSlug: "montmartre-sacre-coeur",
              text: "Fahren Sie früh mit der Metro hinauf nach Montmartre und erklimmen Sie die Stufen von Sacre-Coeur für das kostenlose Panorama, bevor die Reisegruppen und Aufdringlichen eintreffen. Schlendern Sie durch die ruhigen Gassen hinter der Basilika, rund um den Weinberg und die Rue de l'Abreuvoir, und umgehen Sie das Gedränge der Place du Tertre.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "musee-orsay",
              text: "Nehmen Sie die Metro zum Musee d'Orsay für Ihr Zeitfenster und gehen Sie direkt zu den Monet-, Renoir- und Van-Gogh-Sälen im fünften Stock, bevor Sie sich hinabarbeiten. Erhaschen Sie den Blick über die Stadt durch das riesige Zifferblatt der Bahnhofsuhr.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "le-marais",
              text: "Gehen Sie über den Fluss ins Marais für den Abend und schlendern Sie durch die Boutiquen und die von Arkaden umgebene Place des Vosges, während sich die Bars füllen. Stellen Sie sich für eine Falafel in der Rue des Rosiers an oder buchen Sie ein Bistro, und lassen Sie sich dann in die Nachtszene des Viertels sinken.",
              durationMin: 180,
            },
          ],
        },
      ],
    },
    {
      citySlug: "paris",
      days: 4,
      summary:
        "Vier Tage sind das Idealmaß für einen ersten Besuch in Paris und verwandeln einen Besichtigungssprint in einen echten Urlaub. Tag eins bis drei decken das Wesentliche ohne Hetze ab: den Eiffelturm, die Champs-Elysees und eine Seine-Bootsfahrt; den Louvre, die Inseln, Notre-Dame und die Sainte-Chapelle; dann Montmartre, das Musee d'Orsay und das Marais. Tag vier ist das Ventil, ein Tagesausflug nach Versailles zum Schloss und seinen weitläufigen Gärten, in 45 Minuten mit dem RER C erreicht und am besten zur Öffnung um 9 Uhr an jedem Tag außer Dienstag begonnen. Diese Länge passt zu Reisenden, die den Gewaltmarsch hassen, zu Paaren und zu allen, deren Flüge die Reise unbequem einrahmen. Für vier Tage empfehlen wir das Quartier Latin als Basis: Es ist zentral und zu Fuß erreichbar zu den Inseln und dem Musee d'Orsay, bietet preiswertere Betten als das benachbarte Saint-Germain und liegt an der Linie RER C direkt nach Versailles. Über vier Tage hinaus ergänzen Sie einen Vormittag am Rodin-Museum und den Invalides oder reisen mit dem Schnellzug in etwa dreieinhalb Stunden nach Amsterdam weiter. Buchen Sie den Eiffelturm, den Louvre, das Musee d'Orsay und das Versailles-Passport gut im Voraus.",
      stayNeighborhoodSlug: "latin-quarter",
      dayPlans: [
        {
          dayNumber: 1,
          theme: "Eiffelturm, Champs-Elysees und die Seine",
          morning: [
            {
              poiSlug: "eiffel-tower",
              text: "Beginnen Sie am Eiffelturm für Ihr gebuchtes Zeitfenster zur Spitze vor den Schlangen, gehen Sie dann hinüber zum Trocadero für das Frontalfoto. Halten Sie Taschen an diesem Taschendieb-Hotspot verschlossen.",
              durationMin: 120,
            },
            {
              poiSlug: "musee-rodin",
              text: "Gehen Sie zum Rodin-Museum für den Denker inmitten der Rosen und schauen Sie bei der nahen Kuppel der Invalides vorbei. Ein Gartenticket ist eine schnelle Option, wenn Sie in Bewegung bleiben wollen.",
              durationMin: 90,
            },
          ],
          afternoon: [
            {
              poiSlug: "arc-de-triomphe",
              text: "Mit der Metro zum Triumphbogen und hinauf zur Terrasse für den Blick über die Avenuen, erreicht über den unterirdischen Durchgang. Gehen Sie die Champs-Elysees hinab zur Concorde und durch die Tuilerien.",
              durationMin: 120,
            },
          ],
          evening: [
            {
              poiSlug: "seine-cruise",
              text: "Machen Sie eine Seine-Bootsfahrt in der Dämmerung für die beleuchteten Monumente, gehen Sie nahe der Pont Neuf oder dem Eiffelturm an Bord und setzen Sie sich auf das offene Deck. Bleiben Sie bei einem regulären einstündigen Boot statt einer Dinnerfahrt.",
              durationMin: 75,
            },
            {
              text: "Abendessen zurück im Quartier Latin, während Sie sich in das Viertel einleben, das Sie Ihr Zuhause nennen. Essen Sie eine Straße abseits der Touristenmeile und schließen Sie mit einem Drink rund um das Pantheon ab.",
              durationMin: 120,
            },
          ],
        },
        {
          dayNumber: 2,
          theme: "Louvre, die Inseln und die Sainte-Chapelle",
          morning: [
            {
              poiSlug: "louvre",
              text: "Seien Sie zu Ihrem 9-Uhr-Slot am Louvre und erreichen Sie die Mona Lisa vor dem Gedränge, dann die Venus von Milo und die italienischen Säle. Betreten Sie ihn über den Carrousel und setzen Sie eine Ausgangszeit, damit das Museum nicht den ganzen Tag frisst.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "sainte-chapelle",
              text: "Gehen Sie hinüber zur Ile de la Cite für Ihr Zeitfenster in der Sainte-Chapelle am hellen Nachmittag, wenn das bunte Glas glüht. Nutzen Sie das Kombiticket für die Conciergerie nebenan.",
              durationMin: 90,
            },
            {
              poiSlug: "notre-dame",
              text: "Gehen Sie zu Notre-Dame mit Ihrem kostenlosen reservierten Slot, um das restaurierte Innere ohne die Schlange zu sehen, und bewundern Sie dann die Strebebögen vom Garten dahinter. Schlendern Sie auf die Ile Saint-Louis für ein Eis von Berthillon.",
              durationMin: 90,
            },
          ],
          evening: [
            {
              text: "Schlendern Sie über die Kais des linken Ufers, während das Licht schwindet und die Bouquinistes einpacken, essen Sie dann im Quartier Latin nahe Ihrer Basis. Buchen Sie irgendwo mit guten Bewertungen und meiden Sie die Neon-Menü-Fallen am Fluss.",
              durationMin: 150,
            },
          ],
        },
        {
          dayNumber: 3,
          theme: "Montmartre, das Musee d'Orsay und das Marais",
          morning: [
            {
              poiSlug: "montmartre-sacre-coeur",
              text: "Fahren Sie früh hinauf nach Montmartre für das kostenlose Panorama an Sacre-Coeur vor den Aufdringlichen und Gruppen, schlendern Sie dann durch die ruhigen Gassen dahinter, rund um den Weinberg. Nehmen Sie die Standseilbahn mit einem Metroticket hinauf, wenn die Treppen steil wirken, und achten Sie auf den überfüllten Stufen auf Ihre Taschen.",
              durationMin: 150,
            },
          ],
          afternoon: [
            {
              poiSlug: "musee-orsay",
              text: "Mit der Metro zum Musee d'Orsay für Ihr Zeitfenster und direkt zu den Impressionisten im fünften Stock, bevor Sie sich hinabarbeiten. Verpassen Sie nicht den Blick durch die riesige Bahnhofsuhr.",
              durationMin: 150,
            },
          ],
          evening: [
            {
              poiSlug: "le-marais",
              text: "Gehen Sie hinüber ins Marais für den Abend und stöbern Sie in den Boutiquen und der von Arkaden umgebenen Place des Vosges, während sich die Bars füllen. Falafel in der Rue des Rosiers oder ein gebuchtes Bistro, dann ein Drink in der späten Szene des Viertels.",
              durationMin: 180,
            },
          ],
        },
        {
          dayNumber: 4,
          theme: "Tagesausflug nach Versailles",
          morning: [
            {
              poiSlug: "versailles",
              text: "Nehmen Sie den RER C nach Versailles Chateau Rive Gauche, etwa 45 Minuten, mit dem Ziel, zur Schlossöffnung um 9 Uhr einzutreffen und Dienstage zu meiden. Nutzen Sie Ihr vorab gebuchtes Passport-Ticket mit einem Schloss-Zeitfenster und beginnen Sie mit dem Spiegelsaal, solange er am ruhigsten ist, dann die Prunkgemächer.",
              durationMin: 180,
            },
          ],
          afternoon: [
            {
              poiSlug: "versailles",
              text: "Verbringen Sie den Nachmittag in den weitläufigen Gärten, kostenlos außer an Wasserspiel-Tagen, und gehen Sie zu Fuß oder mieten Sie ein Fahrrad oder einen Golfwagen hinaus zum Grand Canal, den Trianon-Schlössern und Marie-Antoinettes rustikalem Weiler. Packen Sie ein Picknick ein oder holen Sie sich Mittagessen nahe dem Anwesen, denn die Schlosscafes sind teuer und überfüllt.",
              durationMin: 180,
            },
          ],
          evening: [
            {
              text: "Fahren Sie am frühen Abend mit dem RER C zurück ins zentrale Paris, müde, aber mit den großen Sehenswürdigkeiten durch. Buchen Sie ein Abschiedsessen im Quartier Latin oder in Saint-Germain und geben Sie für Ihre letzte Pariser Mahlzeit etwas mehr aus.",
              durationMin: 150,
            },
            {
              text: "Beenden Sie den Abend mit einem gemächlichen Spaziergang entlang der Seine, um Notre-Dame und die beleuchteten Brücken zu sehen, ein kurzer Bummel von Ihrer Basis. Keine Heimreise zu planen, was der Sinn davon ist, für vier Tage zentral zu wohnen.",
              durationMin: 60,
            },
          ],
        },
      ],
    },
  ],
};

export default parisDe;
