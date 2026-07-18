import type { CityExtras } from "./types";

const hero = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`;

// Hero photos are free-license (Pexels), URL and visually validated.
const extrasDe: Record<string, CityExtras> = {
  lisbon: {
    citySlug: "lisbon",
    image: hero(16338751),
    imageAlt:
      "Gelbe Straßenbahn, die eine Lissaboner Gasse an einem senffarbenen Stadthaus vorbei hinauffährt",
    history:
      "Lissabon ist eine der ältesten Städte Westeuropas, ein phönizischer und römischer Hafen, lange bevor sie 1256 zur Hauptstadt Portugals wurde. Das große Erdbeben vom 1. November 1755, gefolgt von einem Tsunami und Bränden, machte die Unterstadt dem Erdboden gleich und tötete Zehntausende Menschen. Deshalb wirkt die schachbrettartig geplante Baixa, durch die Sie heute laufen, so anders als die verwinkelte Alfama, die überlebte. Von hier aus segelte Vasco da Gama 1498 nach Indien, und die Steuer auf diesen Gewürzhandel finanzierte die manuelinischen Steinmetzarbeiten, die Sie in Belem sehen. Die Nelkenrevolution von 1974, ein nahezu unblutiger Militärputsch, beendete vier Jahrzehnte Diktatur und wird noch heute jedes Jahr am 25. April begangen.",
    knownFor: [
      "Gelbe Straßenbahn 28",
      "Pastel de nata",
      "Fado-Musik",
      "Miradouro-Aussichtspunkte",
      "Azulejo-Fliesen",
      "Belem-Turm",
    ],
  },
  prague: {
    citySlug: "prague",
    image: hero(11261851),
    imageAlt:
      "Die Prager Burg und der Veitsdom über der Karlsbrücke und der Moldau",
    history:
      "Prag entstand rund um eine Furt an der Moldau und eine um 880 gegründete Burg auf dem Hügel, und im 14. Jahrhundert war es der Sitz des römisch-deutschen Kaisers Karl IV., der die Karlsbrücke, die Neustadt und die älteste Universität Mitteleuropas errichten ließ. Der Prager Fenstersturz von 1618, bei dem protestantische Adlige kaiserliche Beamte aus einem Burgfenster warfen, trug zum Ausbruch des Dreißigjährigen Krieges bei. Ungewöhnlich für die Region überstand der historische Kern den Zweiten Weltkrieg nahezu unversehrt, weshalb die gotische und barocke Silhouette so vollständig erhalten ist. Die Samtene Revolution von 1989 beendete die kommunistische Herrschaft ohne Gewalt, und Prag ist seither die tschechische Hauptstadt.",
    knownFor: [
      "Karlsbrücke",
      "Prager Burg",
      "Astronomische Uhr",
      "Günstiges Bier",
      "Barocke Silhouette",
      "Weihnachtsmärkte",
    ],
  },
  seville: {
    citySlug: "seville",
    image: hero(5470586),
    imageAlt:
      "Plaza de Espana in Sevilla im goldenen Abendlicht mit ihrem Kanal und ihren Türmen",
    history:
      "Sevilla war das römische Hispalis und dann, über fünf Jahrhunderte lang, die maurische Stadt Ishbiliya, weshalb der Glockenturm der Kathedrale, La Giralda, als Minarett begann und der Alcazar noch heute ein genutzter Mudéjar-Palast ist. Nach 1492 hielt die Stadt das königliche Monopol auf den Handel mit den Amerikas, und das Gold und Silber, das den Guadalquivir hinaufströmte, machte sie zu einem der reichsten Orte Europas. Dieser Reichtum errichtete die riesige gotische Kathedrale, in der Christoph Kolumbus bestattet ist. Die märchenhafte Plaza de Espana ist weit jünger und wurde für die Ibero-Amerikanische Ausstellung von 1929 erbaut.",
    knownFor: [
      "Real Alcazar",
      "Flamenco",
      "Plaza de Espana",
      "Orangenbäume",
      "Semana Santa",
      "Tapas-Kultur",
    ],
  },
  porto: {
    citySlug: "porto",
    image: hero(25695948),
    imageAlt:
      "Eiserne Dom-Luis-I-Brücke über den Douro mit den Dächern der Porto-Ribeira dahinter",
    history:
      "Porto gab Portugal sowohl seinen Namen, vom römischen Hafen Portus Cale, als auch seinen Ruf für harte Arbeit und Unabhängigkeit. Die Stadt machte ihr Vermögen am Fluss Douro: Weinfässer schwammen aus dem oberen Tal herab, um in den Lagerhäusern von Vila Nova de Gaia zu reifen, und englische Kaufleute machten aus diesem Handel ab dem 17. Jahrhundert den Portwein. Die zweistöckige Dom-Luis-I-Brücke, 1886 eröffnet, wurde von einem Schüler Gustave Eiffels gebaut. Die Einheimischen werden noch heute tripeiros genannt, Kuttelesser, nach der Geschichte, dass sie 1415 ihr bestes Fleisch der Flotte Heinrichs des Seefahrers gaben und nur die Innereien behielten.",
    knownFor: [
      "Portwein-Keller",
      "Dom-Luis-I-Brücke",
      "Ribeira-Uferpromenade",
      "Livraria Lello",
      "Azulejo-Bahnhöfe",
      "Francesinha",
    ],
  },
  budapest: {
    citySlug: "budapest",
    image: hero(8390036),
    imageAlt:
      "Szechenyi-Kettenbrücke über die Donau mit dem ungarischen Parlament dahinter",
    history:
      "Budapest waren bis 1873 zwei Rivalen: das hügelige, königliche Buda am Westufer und das flache, kaufmännische Pest am Ostufer, vereint, als die Kettenbrücke die Überquerung der Donau endlich einfach machte. Die Römer betrieben hier eine Garnisonsstadt namens Aquincum, und ihre Vorliebe für die Thermalquellen blieb erhalten, weshalb die Stadt noch heute prächtige öffentliche Bäder besitzt, die von unterirdischem heißem Wasser gespeist werden. Die Jahre um 1896, das Millennium der ungarischen Landnahme, bescherten der Stadt ihr Parlament, die erste U-Bahn-Linie Kontinentaleuropas und einen Großteil ihrer prächtigen Andrassy-Allee. Der Aufstand von 1956 gegen die sowjetische Herrschaft wurde niedergeschlagen, aber nie vergessen.",
    knownFor: [
      "Thermalbäder",
      "Parlamentsgebäude",
      "Kettenbrücke",
      "Ruinenkneipen",
      "Donaublicke",
      "Budaer Burg",
    ],
  },
  vienna: {
    citySlug: "vienna",
    image: hero(18110534),
    imageAlt:
      "Das Schloss Belvedere und sein Spiegelteich in Wien unter blauem Himmel",
    history:
      "Wien war über sechs Jahrhunderte die Hauptstadt der Habsburger und der Sitz des Heiligen Römischen und dann des Österreichisch-Ungarischen Reiches, bis es 1918 zusammenbrach, weshalb eine Stadt von unter zwei Millionen Menschen Paläste besitzt, die für einen Kontinent gebaut wurden. Als die mittelalterlichen Mauern 1857 fielen, ersetzte Kaiser Franz Joseph sie durch die Ringstraße, den prächtigen Boulevard aus Museen, Oper und Parlament, den Sie heute noch umrunden. Um 1900 war die Stadt ein Schmelztiegel der modernen Welt: Freud erfand hier die Psychoanalyse, Klimt und Schiele brachen mit der Tradition, und Mahler leitete die Oper. Wien ist seit 1955 die Hauptstadt eines kleinen, neutralen Österreichs, und es lebt noch immer von der Kaffeehauskultur, die die UNESCO nun schützt.",
    knownFor: [
      "Schloss Schönbrunn",
      "Kaffeehäuser",
      "Klimts Der Kuss",
      "Kaiserliche Paläste",
      "Sachertorte",
      "Oper und Bälle",
    ],
  },
  granada: {
    citySlug: "granada",
    image: hero(38100344),
    imageAlt:
      "Der Alhambra-Palast über Granada mit der schneebedeckten Sierra Nevada dahinter",
    history:
      "Granada war das letzte muslimische Königreich Westeuropas, die Hauptstadt des Nasridenemirats, das sich 250 Jahre lang hielt, nachdem der Rest Spaniens gefallen war. Seine Herrscher errichteten die Alhambra, den schönsten erhaltenen islamischen Palastkomplex des Westens, auf dem Hügel über der Stadt. Am 2. Januar 1492 nahmen die Katholischen Könige Isabella und Ferdinand die Stadt ein und beendeten damit fast 800 Jahre maurischer Herrschaft in Spanien; im selben Jahr stimmte Isabella von Granada aus zu, Christoph Kolumbus zu finanzieren. Die Alhambra war halb vergessen, bis der Schriftsteller Washington Irving in ihr lebte und 1832 die Erzählungen von der Alhambra veröffentlichte, was die romantische Begeisterung auslöste, die sie rettete. Granada ist heute eine Universitätsstadt, in der die maurischen und spanischen Schichten Seite an Seite liegen.",
    knownFor: [
      "Die Alhambra",
      "Kostenlose Tapas",
      "Albaicin-Ausblicke",
      "Maurisches Erbe",
      "Sierra Nevada",
      "Sacromonte-Flamenco",
    ],
  },
  rome: {
    citySlug: "rome",
    image: hero(32619390),
    imageAlt: "Das Kolosseum in Rom vor einem strahlend blauen Himmel",
    history:
      "Rom wurde nach seiner eigenen Legende 753 v. Chr. von Romulus gegründet und wuchs zur Hauptstadt eines Reiches heran, das von Britannien bis zur Sahara reichte. Die Ruinen, zwischen denen Sie umhergehen, das Kolosseum, das Forum, das Pantheon, sind die Überbleibsel einer Stadt, die eine Million Menschen fasste, während das mittelalterliche London zwanzigtausend zählte. Als das Reich fiel, machten die Päpste Rom zur Hauptstadt der katholischen Welt, und Geld der Renaissance und des Barocks baute es rund um die antiken Knochen wieder auf, weshalb Bernini-Brunnen auf römischen Fundamenten stehen. Erst 1871 wurde es zur Hauptstadt eines geeinten Italiens, das letzte Stück des Landes, das dazukam. Alles seither, vom Verkehr bis zum Aperitivo, schichtet sich auf dreitausend Jahre, die nie weggeräumt wurden.",
    knownFor: [
      "Das Kolosseum",
      "Vatikan und Sixtinische Kapelle",
      "Trevi-Brunnen",
      "Römische Ruinen",
      "Pasta und Gelato",
      "Barocke Brunnen",
    ],
  },
  amsterdam: {
    citySlug: "amsterdam",
    image: hero(12705128),
    imageAlt:
      "Amsterdamer Grachtenhäuser und Ausflugsboote am Damrak unter blauem Himmel",
    history:
      "Amsterdam wuchs aus einem Fischerdorf des 13. Jahrhunderts heran, das den Fluss Amstel abdämmte, woher der Name stammt. Sein goldenes Zeitalter war das 17. Jahrhundert, als niederländische Schiffe den Welthandel beherrschten und die Kaufleute, die sie finanzierten, den Grachtengürtel, die Grachtengordel, gruben und die hohen, schmalen Giebelhäuser bauten, die Sie noch sehen, nach ihrer Breite besteuert, weshalb sie so schmal sind. Dieser Reichtum finanzierte Rembrandt und die Tulpenmanie, die 1637 Spekulanten ruinierte. Die Stadt war immer eine Zuflucht, für Hugenotten, für Juden und später ein Inbegriff für Toleranz. Anne Frank versteckte sich hier von 1942 bis zum Verrat ihrer Familie 1944, und ihr Haus an der Prinsengracht ist heute die meistbesuchte Gedenkstätte der Stadt.",
    knownFor: [
      "Der Grachtengürtel",
      "Van-Gogh-Museum",
      "Anne-Frank-Haus",
      "Fahrräder",
      "Rijksmuseum",
      "Braune Cafés",
    ],
  },
  florence: {
    citySlug: "florence",
    image: hero(981682),
    imageAlt:
      "Brunelleschis Kuppel erhebt sich über den Terrakottadächern von Florenz",
    history:
      "In Florenz begann die Renaissance. Im 15. Jahrhundert steckten die Medici, eine Bankiersfamilie, die die Stadt faktisch regierte, ihr Vermögen in Künstler und Architekten, und das Ergebnis ist eine kleine Stadt, die pro Quadratmeter mehr berühmte Kunst beherbergt als fast irgendwo sonst auf der Erde. Brunelleschi errichtete 1436 die größte Ziegelkuppel der Welt über der Kathedrale, bis heute die Skyline, ohne jedes vollständige Gerüst. Der hier geprägte Gold-Florin war die vertrauenswürdigste Münze des mittelalterlichen Europa, so kam es, dass eine toskanische Kaufmannsstadt Michelangelo, Botticelli und Leonardo finanzierte. Galileo lehrte hier, Machiavelli schrieb hier, und sechs Jahre lang nach 1865 war Florenz sogar die Hauptstadt eines neu geeinten Italiens.",
    knownFor: [
      "Der Dom",
      "Renaissance-Kunst",
      "Uffizien",
      "Michelangelos David",
      "Ponte Vecchio",
      "Toskanische Küche",
    ],
  },
  bruges: {
    citySlug: "bruges",
    image: hero(5612504),
    imageAlt:
      "Backsteinhäuser mit Treppengiebeln entlang einer Brügger Gracht unter blauem Himmel",
    history:
      "Brugge war eine der reichsten Städte des mittelalterlichen Europa, das Handelszentrum Flanderns, wo Wolle aus England zum feinsten Tuch des Kontinents wurde. Es betrieb, was viele die erste Börse der Welt nennen, benannt nach der Familie Van der Beurze, deren Gasthof die Händler beherbergte, woher das Wort Börse stammt. Dann versandete die Meeresrinne, die es reich machte, das Zwin, um 1500, die Kaufleute zogen nach Antwerpen, und Brugge schlief vier Jahrhunderte lang. Genau darum überlebte es: ohne Geld, um Dinge abzureißen und neu zu bauen, blieb das mittelalterliche Zentrum intakt. Ein düsterer Roman von 1892, Bruges-la-Morte, machte es wieder berühmt, und die Touristen sind seither gekommen.",
    knownFor: [
      "Mittelalterliche Grachten",
      "Der Belfried",
      "Belgische Schokolade",
      "Flämische Kunst",
      "Trappistenbier",
      "Kopfsteingepflasterte Plätze",
    ],
  },
  barcelona: {
    citySlug: "barcelona",
    image: hero(21357884),
    imageAlt:
      "Die Sagrada Familia erhebt sich über Barcelona und dem Meer, gesehen vom Park Guell",
    history:
      "Barcelona begann als die römische Stadt Barcino und verbrachte dann das Mittelalter als seefahrende Hauptstadt der Krone von Aragón, weshalb das Gotische Viertel noch heute mittelalterliche Paläste einen Block vom Hafen entfernt hat. Die moderne Stadt entstand 1860, als die alten Mauern fielen und der Ingenieur Ildefons Cerda den Eixample anlegte, das Raster aus abgeschrägten Blocks, durch das Sie noch heute laufen. Industriegeld finanzierte dann um 1900 den Boom des Modernisme, und Antoni Gaudi verwandelte diesen Reichtum in die Sagrada Familia, den Park Guell und die Casa Batllo; die Basilika wurde 1882 begonnen und wird noch immer fertiggestellt. Die Olympischen Spiele von 1992 öffneten die Stadt zu ihren Stränden hin, und Barcelona zählt seither zu den meistbesuchten Städten Europas. Es ist entschieden katalanisch, mit einer eigenen Sprache und einer lautstarken Unabhängigkeitsbewegung.",
    knownFor: [
      "Sagrada Familia",
      "Gaudi-Architektur",
      "Park Guell",
      "La Rambla",
      "Tapas und Vermut",
      "Stadtstrände",
    ],
  },
  berlin: {
    citySlug: "berlin",
    image: hero(37468367),
    imageAlt: "Das Brandenburger Tor in Berlin unter blauem Himmel",
    history:
      "Berlin war die Hauptstadt Preußens und dann, ab 1871, eines geeinten Deutschlands. Die Weimarer Jahre der 1920er machten es zum Inbegriff von Kabarett, Kino und moderner Kunst, bis die Nationalsozialisten hier 1933 an die Macht kamen und den Krieg von der Stadt aus führten. Was die Bombardierungen übrig ließen, teilte der Kalte Krieg: Ab 1961 zerschnitt die Berliner Mauer die Stadt 28 Jahre lang in zwei Hälften, bis sie am 9. November 1989 fiel und Deutschland sich 1990 mit Berlin als Hauptstadt wiedervereinigte. Die Narben sind heute die Sehenswürdigkeiten, von den erhaltenen Mauerabschnitten über die Kontrollpunkte des Kalten Krieges bis zu den Gedenkstätten. Günstige Mieten im geleerten Osten machten die wiedervereinigte Stadt dann zur Techno- und Kreativhauptstadt Europas, und für dieses Berlin kommen die meisten Menschen heute.",
    knownFor: [
      "Brandenburger Tor",
      "Die Berliner Mauer",
      "Geschichte des Kalten Krieges",
      "Techno-Nachtleben",
      "Museumsinsel",
      "Street-Art",
    ],
  },
  madrid: {
    citySlug: "madrid",
    image: hero(32314658),
    imageAlt: "Das Metropolis-Gebäude an der Gran Via in Madrid im goldenen Abendlicht",
    history:
      "Madrid wurde fast per Dekret zur Hauptstadt Spaniens: 1561 verlegte König Philipp II. seinen Hof in das damals bescheidene Städtchen, teils gewählt, weil es im toten Zentrum der Halbinsel lag. Die engen Gassen des alten Zentrums rund um die Plaza Mayor heißen nach jenen Habsburgerkönigen noch immer Madrid de los Austrias, während die späteren Bourbonen den Konigspalast und die Boulevards hinzufügten. Am 2. Mai 1808 erhob sich die Stadt gegen Napoleons Truppen, ein Gemetzel, das Goya malte und das das Land noch heute als Feiertag begeht. Madrid hat kein einzelnes Wunder wie die Alhambra oder die Sagrada Familia; sein Reiz ist die Dichte des Lebens und eine der größten Konzentrationen an Malerei der Welt, der Prado, das Reina Sofia und das Thyssen in einem Zehn-Minuten-Fußweg.",
    knownFor: [
      "Der Prado",
      "Retiro-Park",
      "Tapas und Terrassen",
      "Konigspalast",
      "Guernica",
      "Lange Nächte",
    ],
  },
  krakow: {
    citySlug: "krakow",
    image: hero(37459506),
    imageAlt:
      "Die Tuchhallen und die Marienbasilika am Hauptmarkt von Krakau",
    history:
      "Krakau war über fünf Jahrhunderte lang die königliche Hauptstadt Polens, bis der Hof 1596 nach Warschau zog, und seine Könige wurden oben auf dem Wawel-Hügel gekrönt und bestattet. Die 1364 gegründete Jagiellonen-Universität ist eine der ältesten Europas und unterrichtete einen jungen Kopernikus. Anders als Warschau kam die Altstadt fast unbeschädigt durch den Zweiten Weltkrieg, weshalb der mittelalterliche Hauptmarkt, der größte Europas, noch intakt und UNESCO-gelistet ist. Die dunklere Geschichte ist nah: Die Nationalsozialisten führten das besetzte Polen von Krakau aus, leerten das jüdische Viertel Kazimierz in das Ghetto von Podgorze und bauten eine Stunde westlich Auschwitz-Birkenau. Günstig, zu Fuß erkundbar und voller Studenten, ist Krakau heute einer der beliebtesten Kurztrips Europas.",
    knownFor: [
      "Hauptmarkt",
      "Wawel-Schloss",
      "Kazimierz",
      "Günstige Pierogi",
      "Weihnachtsmarkt",
      "Tagesausflug Auschwitz",
    ],
  },
  copenhagen: {
    citySlug: "copenhagen",
    image: hero(20228124),
    imageAlt:
      "Die bunten Hafenhäuser und Holzboote des Nyhavn in Kopenhagen",
    history:
      "Kopenhagen wuchs von einem Fischerdorf zur befestigten Handelsstadt, die die Einfahrt in die Ostsee kontrollierte, woher auch ihr Name, Kaufmannshafen, stammt. Der Großteil der Altstadt wurde im frühen 17. Jahrhundert von König Christian IV. geformt, der das Schloss Rosenborg und den Runden Turm baute; der Postkartenkanal Nyhavn wurde kurz darauf als Arbeitshafen für Seeleute und Schenken gegraben. Die britische Flotte beschoss und verbrannte 1807 während der Napoleonischen Kriege einen Großteil der Stadt. Hans Christian Andersen schrieb hier im 19. Jahrhundert seine Märchen, und die bronzene Kleine Meerjungfrau wurde 1913 aufgestellt. Dänemark ist die älteste Monarchie der Welt, und das moderne Kopenhagen hat diese lange, behagliche Geschichte in einen weltweiten Ruf für Design, Radfahren und neue nordische Küche verwandelt.",
    knownFor: [
      "Hafen Nyhavn",
      "Tivoli-Garten",
      "Überall Fahrräder",
      "Hygge und Design",
      "Neue nordische Küche",
      "Die Kleine Meerjungfrau",
    ],
  },
  athens: {
    citySlug: "athens",
    image: hero(33201846),
    imageAlt: "Die Akropolis von Athen auf ihrem Felsen unter klarem blauem Himmel",
    history:
      "In Athen wurde ein großer Teil der westlichen Welt erfunden. Im 5. Jahrhundert v. Chr. war es der reichste und mächtigste der griechischen Stadtstaaten, und unter Perikles baute es den Parthenon und den Rest der Akropolis, zur selben Zeit, als Sokrates und dann Platon und Aristoteles in seinen Straßen über Philosophie stritten und die Demokratie erfanden. Rom, dann Byzanz, dann die Osmanen nahmen die Stadt nacheinander ein, und der Parthenon diente als Kirche und Moschee, bevor eine venezianische Granate 1687 das Schießpulver traf, das die Osmanen darin gelagert hatten, und das Dach absprengte. Als Griechenland die Unabhängigkeit gewann, wurde Athen 1834 zur Hauptstadt des neuen Königreichs, damals eine kleine Stadt von ein paar tausend Menschen, und wuchs zu der ausgedehnten modernen Stadt heran, die sich nun um jene antiken Felsen legt.",
    knownFor: [
      "Die Akropolis",
      "Der Parthenon",
      "Antike Ruinen",
      "Dachterrassen-Ausblicke",
      "Souvlaki und Mezze",
      "Wiege der Demokratie",
    ],
  },
  edinburgh: {
    citySlug: "edinburgh",
    image: hero(28851815),
    imageAlt:
      "Die Skyline der Edinburgher Altstadt mit dem Scott Monument und dem Balmoral-Uhrturm",
    history:
      "Edinburgh ist seit sechs Jahrhunderten die Hauptstadt Schottlands, und das Schloss auf seinem Pfropfen aus Vulkangestein ist weit länger befestigt als das. Die mittelalterliche Altstadt wuchs als dichtes Rückgrat hoher Mietshäuser, das den Grat der Royal Mile vom Schloss zum königlichen Palast Holyroodhouse hinabläuft. In den 1700ern, während der Schottischen Aufklärung, die David Hume und Adam Smith hervorbrachte, baute die Stadt das elegante georgianische Raster der Neustadt über dem Tal und verdiente sich den Beinamen das Athen des Nordens. Das erste Edinburgh Festival Fringe lief 1947 und ist heute das größte Kunstfestival der Welt, das jeden August die ganze Stadt übernimmt. Die Cafés, in denen J.K. Rowling Harry Potter schrieb, machen noch immer flottes Geschäft.",
    knownFor: [
      "Edinburgh Castle",
      "Die Royal Mile",
      "Arthur's Seat",
      "Das Fringe-Festival",
      "Scotch Whisky",
      "Harry Potter",
    ],
  },
  paris: {
    citySlug: "paris",
    image: hero(36771040),
    imageAlt: "Der Eiffelturm, der sich über Paris erhebt, von Bäumen gerahmt",
    history:
      "Paris begann als Siedlung des Stammes der Parisii auf einer Insel in der Seine, wuchs zur römischen Stadt Lutetia heran und ist seit fast tausend Jahren die Hauptstadt Frankreichs. Notre-Dame wurde 1163 begonnen, und das mittelalterliche Quartier Latin wuchs rund um eine der ersten Universitäten Europas. Die Revolution von 1789 begann hier mit dem Sturm auf die Bastille, und in den 1850er und 60er Jahren riss Baron Haussmann durch die überfüllte Altstadt, um die breiten Boulevards und die einheitlichen Kalksteinfassaden anzulegen, die sie heute prägen. Der Eiffelturm wurde als vorübergehende Attraktion für die Weltausstellung von 1889 errichtet und nie wieder abgebaut. Paris war die Kunsthauptstadt des 20. Jahrhunderts, wurde 1944 befreit und eröffnete im Dezember 2024 ein restauriertes Notre-Dame wieder, fünf Jahre nach dem Brand.",
    knownFor: [
      "Der Eiffelturm",
      "Der Louvre",
      "Notre-Dame",
      "Cafeterrassen",
      "Haussmann-Boulevards",
      "Kunst und Mode",
    ],
  },
  venice: {
    citySlug: "venice",
    image: hero(34775901),
    imageAlt:
      "Der Canal Grande in Venedig, gesäumt von Palazzi und Gondeln, von der Rialtobrücke aus gesehen",
    history:
      "Venedig wurde von Flüchtlingen vom Festland gegründet, die im 5. und 6. Jahrhundert auf die sumpfigen Inseln der Lagune flohen, und es wuchs zu einer Republik heran, die den Mittelmeerhandel tausend Jahre lang beherrschte. Auf ihrem Höhepunkt war die Allerdurchlauchtigste Republik, geführt von einem gewählten Dogen aus dem Palazzo Ducale, einer der reichsten Staaten Europas; Marco Polo brach von hier nach China auf. All das wurde auf Millionen von Holzpfählen errichtet, die in den Schlamm getrieben wurden, weshalb die Palazzi geradewegs aus dem Wasser zu steigen scheinen. Die Republik fiel schließlich 1797 an Napoleon. Heute erstreckt sich Venedig über 118 Inseln ganz ohne Autos und kämpft mit sinkenden Fundamenten, den Acqua-alta-Fluten und dem Massentourismus, weshalb es Tagesbesuchern nun an geschäftigen Tagen eine Zutrittsgebühr berechnet.",
    knownFor: [
      "Der Canal Grande",
      "Der Markusplatz",
      "Gondeln",
      "Die Rialtobrücke",
      "Carnevale-Masken",
      "Muranoglas",
    ],
  },
  dublin: {
    citySlug: "dublin",
    image: hero(13157974),
    imageAlt:
      "Die Ha'penny Bridge über den Fluss Liffey in Dublin mit der grünen Kuppel des Custom House dahinter",
    history:
      "Dublin begann um 841 als wikingischer Handels- und Sklavenhafen am Fluss Liffey, und sein Name stammt vom irischen Dubh Linn, dem schwarzen Teich, an dem die Langschiffe festmachten. Nach der Ankunft der Normannen 1170 wurde es zum Zentrum der englischen Herrschaft in Irland, und die breiten Straßen und roten Backsteinplätze der georgianischen Stadt wurden im 18. Jahrhundert angelegt, als Dublin die zweite Stadt des Britischen Empire war. Der Osteraufstand von 1916 begann am Hauptpostamt in der O'Connell Street und löste den Kampf aus, der 1922 zur irischen Unabhängigkeit führte. Die Stadt trägt ein überdimensionales literarisches Gewicht, Heimat von vier Nobelpreisträgern und Schauplatz von James Joyces Ulysses, und sie ist heute die junge, technologiegetriebene Hauptstadt eines weit reicheren Irlands.",
    knownFor: [
      "Guinness Storehouse",
      "Book of Kells",
      "Georgianische Türen",
      "Pubs von Temple Bar",
      "Trinity College",
      "Traditionelle Musik",
    ],
  },
  stockholm: {
    citySlug: "stockholm",
    image: hero(30158443),
    imageAlt:
      "Stockholms Uferfront Riddarholmen und Kirchturm, über das Wasser hinweg unter blauem Himmel gesehen",
    history:
      "Stockholm wurde um 1252 auf der kleinen Insel gegründet, die heute Gamla Stan heißt, dort, wo sich der Mälarsee in die Ostsee ergießt, und es wurde reich, indem es den Eisen- und Kupferhandel aus Schweden kontrollierte. Im 15. Jahrhundert wurde es zur ständigen Hauptstadt und zum Sitz der schwedischen Könige, deren Königsschloss noch immer über der Altstadt steht. Die Stadt breitete sich über ihre vierzehn Inseln aus, als Schweden im 17. Jahrhundert zur Großmacht aufstieg, der Ära des Kriegsschiffs Vasa, das 1628 auf seiner Jungfernfahrt im Hafen kenterte und 1961 fast unversehrt gehoben wurde. Von der Zerstörung beider Weltkriege durch die schwedische Neutralität verschont, bewahrte Stockholm seinen historischen Kern und machte das 20. Jahrhundert zum Inbegriff für Design, und es richtet noch immer jeden Dezember die Verleihung und das Bankett des Nobelpreises aus.",
    knownFor: [
      "Altstadt Gamla Stan",
      "Das Schiff Vasa",
      "ABBA-Museum",
      "Der Schärengarten",
      "Fika-Kultur",
      "Der Nobelpreis",
    ],
  },
  nice: {
    citySlug: "nice",
    image: hero(26928991),
    imageAlt:
      "Die roten Dächer von Vieux Nice mit dem barocken Uhrturm und den Hügeln der Riviera dahinter",
    history:
      "Nizza blickte den Großteil seiner Geschichte eher nach Italien als nach Frankreich: Es gehörte jahrhundertelang zum Haus Savoyen und wurde erst 1860 nach einer Volksabstimmung französisch, weshalb sich die Altstadt ligurisch anfühlt und der lokale Dialekt und die Küche näher an Genua als an Paris sind. Die Stadt wurde im 19. Jahrhundert reich, als britische und russische Aristokraten kamen, um den Winter an der Küste zu verbringen, und es war ihr Geld, das den Uferweg bezahlte, der noch heute ihren Namen trägt, die Promenade des Anglais. Matisse und Chagall ließen sich beide für das Licht hier nieder und hinterließen Museen oben in den begrünten Hügeln von Cimiez, auf dem Gelände der römischen Stadt Cemenelum. Heute ist Nizza die inoffizielle Hauptstadt der Riviera und das Tor zu Monaco, Cannes und den Bergdörfern entlang der Cote d'Azur.",
    knownFor: [
      "Promenade des Anglais",
      "Vieux Nice",
      "Cours-Saleya-Markt",
      "Kieselstrände",
      "Socca",
      "Riviera-Tagesausflüge",
    ],
  },
  dubrovnik: {
    citySlug: "dubrovnik",
    image: hero(16884684),
    imageAlt:
      "Die terrakottafarbenen Dächer der Altstadt von Dubrovnik mit der Kathedralenkuppel und dem Berg Srd dahinter",
    history:
      "Dubrovnik war jahrhundertelang die Republik Ragusa, ein kleiner, aber gewiefter Seehandels-Stadtstaat, der seine Unabhängigkeit bewahrte, indem er dem jeweils stärksten Reich Tribut zahlte, während er eine Handelsflotte betrieb, die es mit Venedig aufnahm. Seine Steinmauern, bis zu 25 Meter hoch und fast zwei Kilometer lang, wurden nie durchbrochen, und der marmorgepflasterte Stradun und die barocken Kirchen in ihrem Inneren wurden nach einem katastrophalen Erdbeben 1667 weitgehend neu aufgebaut. Die Republik endete, als Napoleon sie 1808 abschaffte, und die Stadt schloss sich später Jugoslawien und dann dem unabhängigen Kroatien an. Granaten beschädigten die Altstadt während der Belagerung von 1991 bis 1992 im kroatischen Unabhängigkeitskrieg, doch sie wurde mühevoll wiederhergestellt, und eine neue Welle des Ruhms kam, als sie zu King's Landing in Game of Thrones wurde.",
    knownFor: [
      "Die Stadtmauern",
      "Terrakottafarbene Dächer",
      "Stradun",
      "Game-of-Thrones-Orte",
      "Insel Lokrum",
      "Adria-Strände",
    ],
  },
  reykjavik: {
    citySlug: "reykjavik",
    image: hero(20165201),
    imageAlt:
      "Reykjaviks Skyline über dem Wasser mit dem Turm der Hallgrimskirkja und schneebedeckten Bergen dahinter",
    history:
      "Reykjavik war den alten Sagas zufolge der Ort der ersten nordischen Siedlung Islands um 874, als Ingolfur Arnarson seine Hochsitzpfeiler über Bord geworfen und dort gebaut haben soll, wo sie an Land gespült wurden; der Name bedeutet rauchige Bucht, nach dem Dampf, der aus seinen heißen Quellen aufsteigt. Es blieb den Großteil eines Jahrtausends ein winziges Dorf und wuchs erst im 18. Jahrhundert zu einer richtigen Stadt heran, wurde 1918 zur Hauptstadt eines selbstverwalteten Islands und 1944 einer vollständig unabhängigen Republik, als das Land seine letzten Bande zu Dänemark kappte. Die Stadt hatte 1986 ihren Moment im Kalten Krieg, als Reagan und Gorbatschow sich im Haus Hofdi trafen und kurz davor waren, sich auf die Verschrottung ihrer Atomarsenale zu einigen. Fast vollständig mit geothermaler und Wasserkraft beheizt und versorgt, ist sie die nördlichste Hauptstadt der Welt und das Basislager für Islands Wasserfälle, Geysire und Nordlichter.",
    knownFor: [
      "Hallgrimskirkja",
      "Nordlichter",
      "Golden Circle",
      "Blaue Lagune",
      "Geothermale Pools",
      "Walbeobachtung",
    ],
  },
  munich: {
    citySlug: "munich",
    image: hero(13762982),
    imageAlt:
      "Die beiden Zwiebeltürme der Frauenkirche und der Turm des Neuen Rathauses über der Altstadt von München",
    history:
      "München wuchs 1158 rund um eine Siedlung von Mönchen heran, woher sowohl sein Name, von Munichen, als auch der kleine Mönch in seinem Wappen stammen. Es wurde der Sitz der Wittelsbacher-Dynastie, die Bayern über 700 Jahre lang beherrschte und die Stadt mit Palästen wie der Residenz und Nymphenburg füllte, während sie sie zu einer Hauptstadt der Kunst und Musik machte. Es war auch der Ort, an dem die NS-Bewegung in den 1920er Jahren entstand und an dem 1938 das Münchner Abkommen unterzeichnet wurde, wobei der Studenten der Weißen Rose, die von der Universität aus Widerstand leisteten, in der ganzen Stadt gedacht wird. Nach den Bombardierungen des Krieges behutsam wiederaufgebaut, erfand sich München als wohlhabend, grün und berühmt traditionsverbunden neu, heute bekannt für BMW, den FC Bayern, die Bierhallen und das Oktoberfest, das 1810 erstmals zur Feier einer königlichen Hochzeit stattfand.",
    knownFor: [
      "Marienplatz",
      "Oktoberfest",
      "Biergärten",
      "Der Englische Garten",
      "Tagesausflug nach Neuschwanstein",
      "BMW und der FC Bayern",
    ],
  },
  tallinn: {
    citySlug: "tallinn",
    image: hero(35838020),
    imageAlt:
      "Die roten Dächer und Kirchtürme der mittelalterlichen Altstadt von Tallinn mit der modernen Skyline dahinter bei Sonnenuntergang",
    history:
      "Tallinn wuchs als hanseatischer Handelshafen an der Ostsee, und bis zum 14. und 15. Jahrhundert hatten seine Kaufleute die Mauern, Gildehäuser und Kirchen der Altstadt errichtet, die noch heute nahezu unversehrt stehen, was es zu einer der besterhaltenen mittelalterlichen Städte Europas macht. Der Name wird oft auf Taani linn, die dänische Stadt, zurückgeführt, nach den Dänen, die 1219 die Hügelfestung eroberten; die Oberstadt des Toompea beherbergte die Herrscher, während die deutschsprachigen Kaufleute die Unterstadt darunter führten. Estland wurde vom russischen Reich und dann, nach einer kurzen ersten Unabhängigkeit, von der Sowjetunion aufgesogen, bis 1991 die friedliche Singende Revolution das Land wiederherstellte. Seither ist Tallinn zum Aushängeschild des e-Estland geworden, ein Ort, der Skype mitschuf und seine Regierung online betreibt, alles um einen märchenhaften mittelalterlichen Kern gewickelt.",
    knownFor: [
      "Mittelalterliche Altstadt",
      "Toompea-Aussichtspunkte",
      "Alexander-Newski-Kathedrale",
      "Telliskivi und Kalamaja",
      "e-Estland",
      "Weihnachtsmarkt",
    ],
  },
  oslo: {
    citySlug: "oslo",
    image: hero(18170373),
    imageAlt:
      "Das weiße Marmordach des Osloer Opernhauses, das unter blauem Himmel zum Hafen hinabfällt",
    history:
      "Oslo wurde um 1040 gegründet und um 1300 von König Haakon V. zur Hauptstadt Norwegens gemacht, doch nach einem verheerenden Brand 1624 baute der dänische König Christian IV. es neben der Festung Akershus wieder auf und benannte es in Christiania um, ein Name, den es behielt, bis es 1925 wieder Oslo wurde. Jahrhundertelang wurde Norwegen von Dänemark aus regiert und dann an Schweden gebunden, und es gewann erst 1905 die volle Unabhängigkeit, als es den König einlud, dessen Nachfahren noch heute regieren. Das in den späten 1960er Jahren entdeckte Nordseeöl verwandelte eine bescheidene nordische Hauptstadt in eine der wohlhabendsten Städte der Erde, was das Opernhaus am Wasser und die Reihe neuer Museen entlang des Fjords bezahlte. Als Heimat des Friedensnobelpreises, der hier jeden Dezember verliehen wird, wickelt Oslo ein kompaktes Zentrum in den Wald und Fjord, in dem die Einheimischen direkt aus der Stadt heraus Ski fahren und segeln.",
    knownFor: [
      "Das Opernhaus",
      "Der Schrei",
      "Vigeland-Park",
      "Der Oslofjord",
      "Friedensnobelpreis",
      "Holmenkollen",
    ],
  },
  helsinki: {
    citySlug: "helsinki",
    image: hero(12319482),
    imageAlt:
      "Der Dom von Helsinki, der über dem Südhafen und dem Marktplatz aufragt, vom Meer aus gesehen",
    history:
      "Helsinki wurde 1550 von König Gustav Wasa von Schweden als Handelsposten gegründet, um Tallinn jenseits des Meerbusens Konkurrenz zu machen, blieb aber jahrhundertelang eine kleine Stadt. Alles änderte sich 1809, als Schweden Finnland an Russland verlor: Der Zar machte Helsinki 1812 zur Hauptstadt des neuen Großfürstentums und ließ den Architekten Carl Ludwig Engel den neoklassizistischen Senatsplatz und seine weiße Kathedrale anlegen, damit sie wie ein kleineres St. Petersburg aussahen. Finnland errang seine Unabhängigkeit schließlich 1917, und das 20. Jahrhundert verwandelte Helsinki in einen Schaukasten finnischen Designs und moderner Architektur, von Alvar Aalto bis Marimekko. Es war Gastgeber der Olympischen Spiele 1952 und der Helsinki-Schlussakte von 1975 und bleibt eine kompakte, vom Meer gesäumte Hauptstadt, in der die Sauna eine Lebensart ist.",
    knownFor: [
      "Der Dom von Helsinki",
      "Der Senatsplatz",
      "Festung Suomenlinna",
      "Der Design District",
      "Saunakultur",
      "Der Marktplatz",
    ],
  },
  naples: {
    citySlug: "naples",
    image: hero(31668031),
    imageAlt:
      "Die Kuppeln und Dächer von Neapel mit der Bucht von Neapel und dem Vesuv dahinter in der Abenddämmerung",
    history:
      "Neapel wurde um 600 v. Chr. von griechischen Siedlern als Neapolis, die neue Stadt, gegründet und behielt sein griechisches Raster, das noch immer in der schnurgeraden Linie von Spaccanapoli nachvollziehbar ist, durch römische, byzantinische, normannische und spanische Herrschaft hindurch. Jahrhundertelang war es die Hauptstadt eines eigenen Königreichs, die größte Stadt Italiens und eine der größten Europas, ein bourbonischer Königssitz, dessen Opernhaus, das San Carlo von 1737, das älteste noch bespielte der Welt ist. All das liegt unter dem Vesuv, dem Vulkan, der Pompeji und Herculaneum 79 n. Chr. begrub und noch immer über der Bucht aufragt, ruhend, aber lebendig. Arm, dicht und leidenschaftlich stolz, schenkte Neapel der Welt die Pizza, die hier in den 1700er Jahren entstand und 1889 als Margherita festgelegt wurde, sowie eine Hingabe an Diego Maradona, die ans Religiöse grenzt.",
    knownFor: [
      "Pizza Margherita",
      "Der Vesuv",
      "Tagesausflug nach Pompeji",
      "Spaccanapoli",
      "Maradona",
      "Der Verschleierte Christus",
    ],
  },
  split: {
    citySlug: "split",
    image: hero(6701514),
    imageAlt:
      "Die Uferfront und Altstadt von Split mit dem Glockenturm der Kathedrale und den Mosor-Bergen dahinter, vom Meer aus gesehen",
    history:
      "Split wuchs, einzigartig, in einem römischen Palast heran: Kaiser Diokletian, der einzige römische Herrscher, der den Thron freiwillig aufgab, errichtete hier um 305 n. Chr. einen weiten befestigten Ruhesitz, und als das nahe Salona an Eindringlinge fiel, zogen die Flüchtlinge einfach in seine Mauern und gingen nie wieder. Siebzehn Jahrhunderte später leben und handeln die Menschen noch immer innerhalb des Palasts, seine Kathedrale ist Diokletians eigenes Mausoleum und seine Keller sind fast unversehrt erhalten. Die Stadt ging durch byzantinische, venezianische, habsburgische und kurz napoleonische Hände, verbrachte das 20. Jahrhundert in Jugoslawien und wurde 1991 kroatisch. Heute ist Split die ausgelassene Hauptstadt Dalmatiens, ein Hafen und das Tor zu den Inseln, ebenso bekannt für seinen leidenschaftlichen Hajduk-Fußball und sein Picigin-Strandspiel wie für seine römischen Steine.",
    knownFor: [
      "Der Diokletianpalast",
      "Die Riva",
      "Der Glockenturm des Heiligen Domnius",
      "Der Marjan-Hügel",
      "Die dalmatinischen Inseln",
      "Game-of-Thrones-Drehorte",
    ],
  },
  riga: {
    citySlug: "riga",
    image: hero(33830451),
    imageAlt:
      "Die Dächer und der Domturm der Rigaer Altstadt mit der Daugava und der Vansu-Brücke dahinter",
    history:
      "Riga wurde 1201 vom deutschen Bischof Albert als Stützpunkt gegründet, um das Baltikum mit dem Schwert zu bekehren, und wuchs unter der Hanse zur größten und reichsten Stadt der östlichen Ostsee heran, jahrhundertelang von deutschsprachigen Kaufleuten und den livländischen Rittern geführt. Sie ging durch polnische, schwedische und dann russische Herrschaft, und um 1900 machte ein industrieller Aufschwung sie zur drittgrößten Stadt des Russischen Reiches und überzog ihre neuen Viertel mit der extravagantesten Jugendstilarchitektur Europas. Lettland erlangte 1918 seine Unabhängigkeit, wurde 1940 von der Sowjetunion verschluckt und riss sich 1991 durch die friedliche Singende Revolution und die Menschenkette des Baltischen Wegs erneut los. Heute ist Riga die größte der drei baltischen Hauptstädte, eine UNESCO-gelistete Altstadt, umhüllt von Jugendstilboulevards.",
    knownFor: [
      "Türme der Altstadt",
      "Jugendstilfassaden",
      "Der Zentralmarkt",
      "Schwarzhäupterhaus",
      "Baltischer Bernstein",
      "Das Sangfest",
    ],
  },
  brussels: {
    citySlug: "brussels",
    image: hero(655295),
    imageAlt:
      "Die vergoldeten barocken Gildehausfassaden des Grand-Place in Brüssel unter einem bewölkten Himmel",
    history:
      "Brüssel begann um 979 als befestigte Siedlung auf einer Insel im sumpfigen Fluss Senne und wuchs zum Sitz der Herzöge von Brabant und zu einer bevorzugten Residenz der Herzöge von Burgund und der Habsburger heran. Seine Gilden bauten den Grand-Place, und als französische Truppen ihn 1695 beschossen und dem Erdboden gleichmachten, bauten die Gilden ihre Häuser prächtiger als zuvor wieder auf, im vergoldeten Barock, den Sie noch heute sehen. Belgien wurde 1830 mit Brüssel als Hauptstadt gegründet, und der Reichtum eines industriellen Aufschwungs und eines Kolonialreichs bezahlte die prächtigen Boulevards, den Jugendstil Victor Hortas und den gewaltigen Justizpalast. Offiziell zweisprachig in Französisch und Niederländisch, wurde Brüssel nach 1958 zur faktischen Hauptstadt der Europäischen Union, weshalb eine behagliche belgische Stadt heute mithilft, einen Kontinent zu regieren.",
    knownFor: [
      "Der Grand-Place",
      "Belgisches Bier",
      "Schokolade",
      "Fritten",
      "Comic-Wandbilder",
      "Jugendstil",
    ],
  },
  vilnius: {
    citySlug: "vilnius",
    image: hero(28975990),
    imageAlt:
      "Die barocken Kirchen und roten Dächer der Altstadt von Vilnius von oben gesehen",
    history:
      "Vilnius wurde der Legende nach gegründet, als Großfürst Gediminas von einem eisernen Wolf träumte, der auf dem Hügel heulte, und dort in den 1320er Jahren seine Burg baute, und es wuchs zur Hauptstadt des Großfürstentums Litauen heran, einst des größten Staates Europas, der von der Ostsee fast bis zum Schwarzen Meer reichte. Seine 1579 gegründete Universität und seine dichten barocken Kirchen machten es zu einem großen Zentrum der Gelehrsamkeit, und im 19. Jahrhundert war es eine der bedeutendsten jüdischen Städte der Welt, das Jerusalem des Nordens, bis die Gemeinschaft im Holocaust vernichtet wurde. Zwischen Polen, nationalsozialistischer Besatzung und der Sowjetunion hin- und hergereicht, war Litauen 1990 die erste Republik, die ihre Unabhängigkeit von der UdSSR erklärte, und sowjetische Panzer töteten im Januar 1991 unbewaffnete Menschenmengen am Fernsehturm, bevor es sich losriss. Heute ist Vilnius eine günstige, grüne, unbeschwerte Hauptstadt, die sich um die größte barocke Altstadt Europas legt.",
    knownFor: [
      "Barocke Altstadt",
      "Die Republik Uzupis",
      "Gediminas-Turm",
      "Das Tor der Morgenröte",
      "Cepelinai",
      "Die Burg Trakai",
    ],
  },
  bratislava: {
    citySlug: "bratislava",
    image: hero(10137866),
    imageAlt:
      "Bratislavas weiße viertürmige Burg auf dem Hügel über der Donau",
    history:
      "Bratislava war innerhalb eines Menschenlebens slowakisch, ungarisch, österreichisch und tschechoslowakisch und war jahrhundertelang unter seinen deutschen und ungarischen Namen bekannt, Pressburg und Pozsony. Fast drei Jahrhunderte lang, während die Osmanen Buda hielten, war es die Hauptstadt des königlichen Ungarn und die Krönungsstadt, in der 11 ungarische Könige und Königinnen, Maria Theresia unter ihnen, im Martinsdom gekrönt wurden. Die Habsburger, Napoleon und der Kalte Krieg hinterließen alle Spuren: Die Burg Devin über der Stadt bewachte den Westrand des kommunistischen Blocks, ihre Grenze bis 1989 eine Todeszone. Bratislava wurde erst 1993 die Hauptstadt einer unabhängigen Slowakei, nachdem sich die Tschechoslowakei friedlich getrennt hatte, und ist heute eine kleine, günstige, sich schnell wandelnde EU-Hauptstadt eine Stunde flussabwärts von Wien.",
    knownFor: [
      "Die Burg Bratislava",
      "Die barocke Altstadt",
      "Die Krönungen im Martinsdom",
      "Die UFO-Brücke",
      "Die Cumil-Statue",
      "Günstiges slowakisches Bier",
    ],
  },
  ljubljana: {
    citySlug: "ljubljana",
    image: hero(25053927),
    imageAlt:
      "Die rosa Franziskanerkirche und Plecniks Dreierbrücke über dem Fluss Ljubljanica in Ljubljana",
    history:
      "Ljubljana begann als die römische Kolonie Emona, um 14 n. Chr. dort angelegt, wo die Straße aus Italien die Ljubljanica kreuzte, und Fragmente ihrer Mauern kommen noch immer in der Stadt zum Vorschein. Sechs Jahrhunderte lang war es unter den Habsburgern als Laibach die Hauptstadt der Provinz Krain und beherbergte 1821 den Kongress von Laibach. Ein Erdbeben ebnete 1895 einen Großteil davon ein, und der Wiederaufbau gab dem Zentrum seine Fassaden im Stil der Wiener Secession; dann zeichnete zwischen den Kriegen der Architekt Joze Plecnik die Stadt nahezu im Alleingang neu und fügte die Dreierbrücke, die Marktkolonnade am Fluss und die Nationalbibliothek hinzu, ein Werk, das heute auf der UNESCO-Liste steht. Slowenien löste sich 1991 nach einem zehntägigen Krieg, dem kürzesten dieser Konflikte, von Jugoslawien, und Ljubljana hat sein autofreies Zentrum und seine Flussufer seither in eine der grünsten Hauptstädte Europas verwandelt.",
    knownFor: [
      "Die Dreierbrücke",
      "Die Burg von Ljubljana",
      "Plecnik-Architektur",
      "Das Drachensymbol",
      "Cafes am Fluss",
      "Tagesausflug zum Bleder See",
    ],
  },
  zurich: {
    citySlug: "zurich",
    image: hero(35975317),
    imageAlt:
      "Die Zwillingstürme des Grossmünsters über der Limmat und der Zürcher Altstadt",
    history:
      "Zürich begann als der römische Zollposten Turicum an der Limmat, wurde im Mittelalter reich mit Seide und Handel und wurde 1519 zur Wiege der Schweizer Reformation, als Huldrych Zwingli am Grossmünster zu predigen begann und die Kirchen kahl räumen ließ. Es trat 1351 der Schweizerischen Eidgenossenschaft bei und verwandelte seine protestantische Sparsamkeit in ein Genie für das Bankwesen, weshalb eine mittelgroße Stadt einen Teil des Geldes der Welt von der Bahnhofstrasse und dem Paradeplatz aus verwaltet. 1916 brachte das Cabaret Voltaire in der Altstadt Dada hervor, die Anti-Kunst-Bewegung, während Lenin ein paar Straßen weiter die Revolution plante. Heute steht Zürich zugleich an der Spitze der weltweiten Ranglisten für Lebensqualität und Lebenshaltungskosten: makellos, seesauber und schön, und zum Weinen teuer.",
    knownFor: [
      "Der Zürichsee",
      "Das Grossmünster",
      "Die Bahnhofstrasse",
      "Das Schweizer Bankwesen",
      "Chagall-Fenster",
      "Sehr hohe Preise",
    ],
  },
  warsaw: {
    citySlug: "warsaw",
    image: hero(32555031),
    imageAlt:
      "Die bunten wiederaufgebauten Stadthäuser und Kirchtürme der Warschauer Altstadt",
    history:
      "Warschau wurde um 1596 zur Hauptstadt Polens, als der König seinen Hof von Krakau verlegte, und wuchs zum eleganten Sitz eines riesigen polnisch-litauischen Staatenbundes heran. Das 20. Jahrhundert löschte sie beinahe aus: Unter deutscher Besatzung erlebte die Stadt 1943 den Ghettoaufstand und dann 1944 den Warschauer Aufstand, nach dem die Deutschen systematisch zerstörten, was übrig war, und bis 1945 lagen rund 85 Prozent der Stadt in Trümmern. Was heute steht, ist ein Akt des Trotzes, die Altstadt in den 1950er Jahren Ziegel für Ziegel nach alten Gemälden und Zeichnungen wiederaufgebaut und heute genau dafür UNESCO-gelistet. Die Sowjets pflanzten später den Kulturpalast ins Zentrum; seit 1989 sind gläserne Türme um ihn herum emporgewachsen, und Warschau ist zur schnellen, grünen und günstig-unkomplizierten Hauptstadt eines EU-Polens geworden.",
    knownFor: [
      "Die wiederaufgebaute Altstadt",
      "Museum des Warschauer Aufstands",
      "Kulturpalast",
      "Chopin-Konzerte",
      "Die Meerjungfrau",
      "Milchbars",
    ],
  },
  bucharest: {
    citySlug: "bucharest",
    image: hero(37944880),
    imageAlt:
      "Die verzierte Belle-Epoque-Kuppel des CEC-Palasts an der Calea Victoriei in Bukarest",
    history:
      "Bukarest taucht 1459 erstmals in den Aufzeichnungen auf, der Legende nach verknüpft mit Vlad dem Pfähler, dem Fürsten, der Dracula inspirierte, und wuchs zur Hauptstadt der Walachei und dann, 1862, eines vereinten Rumäniens heran. Um 1900 überzogen es französisch geschulte Architekten mit Belle-Epoque-Boulevards und Palästen, was ihm den Beinamen Klein-Paris des Ostens einbrachte, samt eigenem Triumphbogen. Diese Eleganz wurde zweimal ausgeweidet: durch ein schweres Erdbeben 1977 und dann durch den Diktator Nicolae Ceausescu, der in den 1980er Jahren ein Fünftel des alten Zentrums niederriss, um seinen monströsen Parlamentspalast und die stalinistischen Boulevards ringsum zu errichten. Ceausescu wurde in der Revolution vom Dezember 1989 gestürzt und hingerichtet, die auf dem heutigen Revolutionsplatz überkochte, und Bukarest ist heute die schnelle, günstige und widersprüchliche Hauptstadt eines EU-Rumäniens.",
    knownFor: [
      "Parlamentspalast",
      "Belle-Epoque-Boulevards",
      "Altstadt Lipscani",
      "Das Athenäum",
      "Sehr günstige Preise",
      "Die Dracula-Legende",
    ],
  },
};

export default extrasDe;
