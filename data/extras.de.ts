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
};

export default extrasDe;
