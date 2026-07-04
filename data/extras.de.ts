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
};

export default extrasDe;
