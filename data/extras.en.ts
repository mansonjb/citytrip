import type { CityExtras } from "./types";

const hero = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`;

// Hero photos are free-license (Pexels), URL and visually validated.
const extrasEn: Record<string, CityExtras> = {
  lisbon: {
    citySlug: "lisbon",
    image: hero(16338751),
    imageAlt: "Yellow tram climbing a Lisbon street past a mustard townhouse",
    history:
      "Lisbon is one of the oldest cities in Western Europe, a Phoenician and Roman port long before it became Portugal's capital in 1256. The great earthquake of 1 November 1755, followed by a tsunami and fires, flattened the lower town and killed tens of thousands, which is why the grid-planned Baixa you walk today looks so different from the tangled Alfama that survived. From here Vasco da Gama sailed to India in 1498, and the tax on that spice trade paid for the Manueline stonework you see at Belem. The 1974 Carnation Revolution, a near-bloodless military coup, ended four decades of dictatorship and is still marked every 25 April.",
    knownFor: [
      "Yellow tram 28",
      "Pastel de nata",
      "Fado music",
      "Miradouro viewpoints",
      "Azulejo tiles",
      "Belem Tower",
    ],
  },
  prague: {
    citySlug: "prague",
    image: hero(11261851),
    imageAlt:
      "Prague Castle and St Vitus Cathedral above Charles Bridge and the Vltava river",
    history:
      "Prague grew up around a ford on the Vltava and a hilltop castle founded around 880, and by the 14th century it was the seat of Holy Roman Emperor Charles IV, who built the Charles Bridge, the New Town and central Europe's oldest university. The 1618 Defenestration of Prague, when Protestant nobles threw imperial officials out of a castle window, helped trigger the Thirty Years War. Unusually for the region, the historic core came through World War II almost intact, which is why the Gothic and Baroque skyline is so complete. The 1989 Velvet Revolution ended communist rule without violence, and Prague has been the Czech capital ever since.",
    knownFor: [
      "Charles Bridge",
      "Prague Castle",
      "Astronomical Clock",
      "Cheap beer",
      "Baroque skyline",
      "Christmas markets",
    ],
  },
  seville: {
    citySlug: "seville",
    image: hero(5470586),
    imageAlt:
      "Plaza de Espana in Seville at golden hour with its canal and towers",
    history:
      "Seville was Roman Hispalis and then, for over five centuries, the Moorish city of Ishbiliya, which is why the cathedral's bell tower, La Giralda, began life as a minaret and the Alcazar is still a working Mudejar palace. After 1492 the city held the crown's monopoly on trade with the Americas, and the gold and silver that flowed up the Guadalquivir made it one of the richest places in Europe. That wealth built the vast Gothic cathedral, where Christopher Columbus is entombed. The fairy-tale Plaza de Espana is far newer, built for the 1929 Ibero-American Exposition.",
    knownFor: [
      "Real Alcazar",
      "Flamenco",
      "Plaza de Espana",
      "Orange trees",
      "Semana Santa",
      "Tapas culture",
    ],
  },
  porto: {
    citySlug: "porto",
    image: hero(25695948),
    imageAlt:
      "Dom Luis I iron bridge over the Douro with Porto's Ribeira rooftops behind",
    history:
      "Porto gave Portugal both its name, from the Roman port of Portus Cale, and its reputation for hard work and independence. The city made its fortune on the river Douro: barrels of wine floated down from the upper valley to age in the lodges of Vila Nova de Gaia, and English merchants turned that trade into port wine from the 17th century on. The double-deck Dom Luis I bridge, opened in 1886, was built by a student of Gustave Eiffel. Locals are still called tripeiros, tripe-eaters, after the story that they gave their best meat to Henry the Navigator's fleet in 1415 and kept only the offal.",
    knownFor: [
      "Port wine cellars",
      "Dom Luis I bridge",
      "Ribeira riverfront",
      "Livraria Lello",
      "Azulejo stations",
      "Francesinha",
    ],
  },
  budapest: {
    citySlug: "budapest",
    image: hero(8390036),
    imageAlt:
      "Szechenyi Chain Bridge over the Danube with the Hungarian Parliament behind",
    history:
      "Budapest was two rivals until 1873: hilly, royal Buda on the west bank and flat, commercial Pest on the east, joined when the Chain Bridge finally made crossing the Danube easy. The Romans ran a garrison town called Aquincum here, and their taste for the thermal springs never left, which is why the city still has grand public baths fed by hot water underground. The years around 1896, the millennium of Hungarian settlement, gave the city its Parliament, its continental Europe's first metro line and much of its grand Andrassy Avenue. The 1956 uprising against Soviet rule was crushed but never forgotten.",
    knownFor: [
      "Thermal baths",
      "Parliament building",
      "Chain Bridge",
      "Ruin bars",
      "Danube views",
      "Buda Castle",
    ],
  },
  vienna: {
    citySlug: "vienna",
    image: hero(18110534),
    imageAlt:
      "The Belvedere palace and its reflecting pond in Vienna under a blue sky",
    history:
      "Vienna was the capital of the Habsburgs for more than six centuries, and the seat of the Holy Roman and then Austro-Hungarian empire until it collapsed in 1918, which is why a city of under two million has palaces built for a continent. When the medieval walls came down in 1857, Emperor Franz Joseph replaced them with the Ringstrasse, the grand boulevard of museums, opera and parliament you still circle today. Around 1900 the city was a crucible of the modern world: Freud invented psychoanalysis here, Klimt and Schiele broke with tradition, and Mahler ran the opera. Vienna has been the capital of a small, neutral Austria since 1955, and it still runs on the coffee-house culture UNESCO now protects.",
    knownFor: [
      "Schonbrunn Palace",
      "Coffee houses",
      "Klimt's The Kiss",
      "Imperial palaces",
      "Sachertorte",
      "Opera and balls",
    ],
  },
  granada: {
    citySlug: "granada",
    image: hero(38100344),
    imageAlt:
      "The Alhambra palace above Granada with the snow-capped Sierra Nevada behind",
    history:
      "Granada was the last Muslim kingdom in Western Europe, the capital of the Nasrid emirate that held out for 250 years after the rest of Spain had fallen. Its rulers built the Alhambra, the finest surviving Islamic palace complex in the West, on the hill above the city. On 2 January 1492 the Catholic Monarchs Isabella and Ferdinand took the city, ending nearly 800 years of Moorish rule in Spain; the same year, from Granada, Isabella agreed to fund Christopher Columbus. The Alhambra was half-forgotten until the writer Washington Irving lived in it and published Tales of the Alhambra in 1832, which sparked the Romantic craze that saved it. Granada is now a university city where the Moorish and Spanish layers sit side by side.",
    knownFor: [
      "The Alhambra",
      "Free tapas",
      "Albaicin views",
      "Moorish heritage",
      "Sierra Nevada",
      "Sacromonte flamenco",
    ],
  },
  rome: {
    citySlug: "rome",
    image: hero(32619390),
    imageAlt: "The Colosseum in Rome against a bright blue sky",
    history:
      "Rome was, by its own legend, founded by Romulus in 753 BC, and it grew into the capital of an empire that ran from Britain to the Sahara. The ruins you walk between, the Colosseum, the Forum, the Pantheon, are the leftovers of a city that held a million people while medieval London held twenty thousand. When the empire fell, the popes made Rome the capital of the Catholic world, and Renaissance and Baroque money rebuilt it around the ancient bones, which is why Bernini fountains sit on Roman foundations. It only became the capital of a united Italy in 1871, the last piece of the country to join. Everything since, from the traffic to the aperitivo, layers onto three thousand years that never got cleared away.",
    knownFor: [
      "The Colosseum",
      "Vatican and Sistine Chapel",
      "Trevi Fountain",
      "Roman ruins",
      "Pasta and gelato",
      "Baroque fountains",
    ],
  },
  amsterdam: {
    citySlug: "amsterdam",
    image: hero(12705128),
    imageAlt:
      "Amsterdam canal houses and tour boats on the Damrak under a blue sky",
    history:
      "Amsterdam grew from a 13th-century fishing village that dammed the river Amstel, which is where the name comes from. Its golden age was the 17th century, when Dutch ships ran the world's trade and the merchants who financed them dug the ring of canals, the Grachtengordel, and built the tall narrow gabled houses you still see, taxed by their width, which is why they are so thin. That wealth funded Rembrandt and the tulip mania that ruined speculators in 1637. The city has always been a refuge, for Huguenots, for Jews, and later a byword for tolerance. Anne Frank hid here from 1942 until her family was betrayed in 1944, and her house on the Prinsengracht is now the city's most visited memorial.",
    knownFor: [
      "The canal ring",
      "Van Gogh Museum",
      "Anne Frank House",
      "Bicycles",
      "Rijksmuseum",
      "Brown cafes",
    ],
  },
  florence: {
    citySlug: "florence",
    image: hero(981682),
    imageAlt:
      "Brunelleschi's dome rising over the terracotta rooftops of Florence",
    history:
      "Florence is where the Renaissance began. In the 15th century the Medici, a family of bankers who effectively ran the city, poured their fortune into artists and architects, and the result is a small town holding more famous art per square meter than almost anywhere on earth. Brunelleschi raised the largest masonry dome in the world over the cathedral in 1436, still the skyline today, without any full scaffolding. The gold florin minted here was medieval Europe's most trusted coin, which is how a Tuscan town of merchants ended up funding Michelangelo, Botticelli and Leonardo. Galileo taught here, Machiavelli wrote here, and for six years after 1865 Florence was even the capital of a newly united Italy.",
    knownFor: [
      "The Duomo",
      "Renaissance art",
      "Uffizi Gallery",
      "Michelangelo's David",
      "Ponte Vecchio",
      "Tuscan food",
    ],
  },
  bruges: {
    citySlug: "bruges",
    image: hero(5612504),
    imageAlt:
      "Stepped-gable brick houses along a Bruges canal under a blue sky",
    history:
      "Bruges was one of the richest cities in medieval Europe, the trading hub of Flanders where wool from England became the finest cloth on the continent. It ran what many call the world's first stock exchange, named after the Van der Beurze family whose inn hosted the traders, which is where the word bourse comes from. Then the sea channel that made it rich, the Zwin, silted up around 1500, the merchants moved to Antwerp, and Bruges fell asleep for four centuries. That is exactly why it survived: with no money to knock things down and rebuild, the medieval center stayed intact. A gloomy 1892 novel, Bruges-la-Morte, made it famous again, and the tourists have come ever since.",
    knownFor: [
      "Medieval canals",
      "The Belfry",
      "Belgian chocolate",
      "Flemish art",
      "Trappist beer",
      "Cobbled squares",
    ],
  },
  barcelona: {
    citySlug: "barcelona",
    image: hero(21357884),
    imageAlt:
      "The Sagrada Familia rising over Barcelona and the sea, seen from Park Guell",
    history:
      "Barcelona started as the Roman town of Barcino, then spent the Middle Ages as the seafaring capital of the Crown of Aragon, which is why the Gothic Quarter still has medieval palaces a block from the port. The modern city was born in 1860 when the old walls came down and the engineer Ildefons Cerda laid out the Eixample, the grid of chamfered blocks you still walk today. Industrial money then funded the Modernisme boom around 1900, and Antoni Gaudi turned that wealth into the Sagrada Familia, Park Guell and Casa Batllo; the basilica was begun in 1882 and is still being finished. The 1992 Olympics opened the city to its beaches, and Barcelona has been one of Europe's most visited cities ever since. It is fiercely Catalan, with its own language and a loud independence movement.",
    knownFor: [
      "Sagrada Familia",
      "Gaudi architecture",
      "Park Guell",
      "La Rambla",
      "Tapas and vermut",
      "City beaches",
    ],
  },
  berlin: {
    citySlug: "berlin",
    image: hero(37468367),
    imageAlt: "The Brandenburg Gate in Berlin under a blue sky",
    history:
      "Berlin was the capital of Prussia and then, from 1871, of a unified Germany. The 1920s Weimar years made it a byword for cabaret, cinema and modern art, until the Nazis took power here in 1933 and ran the war from the city. What the bombing left, the Cold War split: from 1961 the Berlin Wall cut the city in two for 28 years, until it fell on 9 November 1989 and Germany reunified with Berlin as its capital in 1990. The scars are now the sights, from the surviving stretches of Wall to the Cold War checkpoints and the memorials. Cheap rents in the emptied east then turned the reunited city into Europe's techno and creative capital, which is the Berlin most people come for today.",
    knownFor: [
      "Brandenburg Gate",
      "The Berlin Wall",
      "Cold War history",
      "Techno nightlife",
      "Museum Island",
      "Street art",
    ],
  },
  madrid: {
    citySlug: "madrid",
    image: hero(32314658),
    imageAlt: "The Metropolis building on Gran Via in Madrid at golden hour",
    history:
      "Madrid became the capital of Spain almost by decree: in 1561 King Philip II moved his court to what was then a modest town, chosen partly because it sat in the dead center of the peninsula. The tight lanes of the old center around Plaza Mayor are still called the Madrid de los Austrias after those Habsburg kings, while the later Bourbons added the Royal Palace and the boulevards. On 2 May 1808 the city rose against Napoleon's troops, a slaughter Goya painted and the country still marks as a holiday. Madrid has no single wonder like the Alhambra or the Sagrada Familia; its draw is the density of life and one of the greatest concentrations of painting on earth, the Prado, the Reina Sofia and the Thyssen within a ten-minute walk.",
    knownFor: [
      "The Prado",
      "Retiro Park",
      "Tapas and terraces",
      "Royal Palace",
      "Guernica",
      "Late nights",
    ],
  },
  krakow: {
    citySlug: "krakow",
    image: hero(37459506),
    imageAlt:
      "The Cloth Hall and St Mary's Basilica on Krakow's Main Market Square",
    history:
      "Krakow was the royal capital of Poland for more than five centuries, until the court moved to Warsaw in 1596, and its kings were crowned and buried up on Wawel Hill. The Jagiellonian University, founded in 1364, is one of the oldest in Europe and taught a young Copernicus. Unlike Warsaw, the old town came through the Second World War almost undamaged, which is why the medieval Main Square, the largest in Europe, is still intact and UNESCO-listed. The darker history is close by: the Nazis ran occupied Poland from Krakow, emptied the Jewish quarter of Kazimierz into the Podgorze ghetto, and built Auschwitz-Birkenau an hour to the west. Cheap, walkable and full of students, Krakow is now one of the most popular short breaks in Europe.",
    knownFor: [
      "Main Market Square",
      "Wawel Castle",
      "Kazimierz",
      "Cheap pierogi",
      "Christmas market",
      "Auschwitz day trip",
    ],
  },
  copenhagen: {
    citySlug: "copenhagen",
    image: hero(20228124),
    imageAlt:
      "The colourful harbour houses and wooden boats of Nyhavn in Copenhagen",
    history:
      "Copenhagen grew from a fishing village into the fortified merchant town that controlled the entrance to the Baltic, which is where its name, merchants' harbour, comes from. Most of the old city was shaped by King Christian IV in the early 1600s, who built the Rosenborg Castle and the Round Tower; the postcard canal of Nyhavn was dug soon after as a working port for sailors and taverns. The British fleet bombarded and burned much of the city in 1807 during the Napoleonic Wars. Hans Christian Andersen wrote his fairy tales here in the 19th century, and the bronze Little Mermaid went up in 1913. Denmark is the world's oldest monarchy, and modern Copenhagen has turned that long, comfortable history into a global reputation for design, cycling and New Nordic food.",
    knownFor: [
      "Nyhavn harbour",
      "Tivoli Gardens",
      "Bikes everywhere",
      "Hygge and design",
      "New Nordic food",
      "The Little Mermaid",
    ],
  },
  athens: {
    citySlug: "athens",
    image: hero(33201846),
    imageAlt: "The Acropolis of Athens on its rock under a clear blue sky",
    history:
      "Athens is where a lot of the Western world was invented. In the 5th century BC it was the richest and most powerful of the Greek city-states, and under Pericles it built the Parthenon and the rest of the Acropolis at the same time that Socrates, and then Plato and Aristotle, were arguing philosophy in its streets and inventing democracy. Rome, then Byzantium, then the Ottomans each took the city, and the Parthenon served as a church and a mosque before a Venetian shell hit the gunpowder the Ottomans stored inside it in 1687 and blew the roof off. When Greece won independence, Athens became the capital of the new kingdom in 1834, then a small town of a few thousand people, and grew into the sprawling modern city that now wraps around those ancient rocks.",
    knownFor: [
      "The Acropolis",
      "The Parthenon",
      "Ancient ruins",
      "Rooftop views",
      "Souvlaki and mezze",
      "Birthplace of democracy",
    ],
  },
  edinburgh: {
    citySlug: "edinburgh",
    image: hero(28851815),
    imageAlt:
      "The Edinburgh Old Town skyline with the Scott Monument and Balmoral clock tower",
    history:
      "Edinburgh has been the capital of Scotland for six centuries, and the castle on its plug of volcanic rock has been fortified for far longer than that. The medieval Old Town grew as a dense spine of tall tenements running down the ridge of the Royal Mile from the castle to the royal palace of Holyroodhouse. In the 1700s, during the Scottish Enlightenment that produced David Hume and Adam Smith, the city built the elegant Georgian grid of the New Town across the valley, and earned the nickname the Athens of the North. The first Edinburgh Festival Fringe ran in 1947 and is now the largest arts festival on earth, taking over the whole city every August. The cafes where J.K. Rowling wrote Harry Potter are still doing a brisk trade.",
    knownFor: [
      "Edinburgh Castle",
      "The Royal Mile",
      "Arthur's Seat",
      "The Fringe festival",
      "Scotch whisky",
      "Harry Potter",
    ],
  },
  paris: {
    citySlug: "paris",
    image: hero(36771040),
    imageAlt: "The Eiffel Tower rising over Paris framed by trees",
    history:
      "Paris began as a settlement of the Parisii tribe on an island in the Seine, grew into the Roman town of Lutetia, and has been the capital of France for most of a thousand years. Notre-Dame was begun in 1163, and the medieval Latin Quarter grew around one of Europe's first universities. The Revolution of 1789 started here with the storming of the Bastille, and in the 1850s and 60s Baron Haussmann tore through the crowded old city to lay the wide boulevards and uniform limestone facades that define it today. The Eiffel Tower went up as a temporary exhibit for the 1889 World's Fair and was never taken down. Paris was the art capital of the 20th century, was liberated in 1944, and reopened a restored Notre-Dame in December 2024, five years after the fire.",
    knownFor: [
      "Eiffel Tower",
      "The Louvre",
      "Notre-Dame",
      "Cafe terraces",
      "Haussmann boulevards",
      "Art and fashion",
    ],
  },
  venice: {
    citySlug: "venice",
    image: hero(34775901),
    imageAlt:
      "The Grand Canal in Venice lined with palazzi and gondolas seen from the Rialto",
    history:
      "Venice was founded by mainland refugees who fled onto the marshy islands of the lagoon in the 5th and 6th centuries, and it grew into a republic that ran Mediterranean trade for a thousand years. At its height the Most Serene Republic, led by an elected Doge from the Palazzo Ducale, was one of the richest states in Europe; Marco Polo set off from here for China. All of it was built on millions of wooden piles driven into the mud, which is why the palazzi seem to rise straight out of the water. The Republic finally fell to Napoleon in 1797. Today Venice spreads across 118 islands with no cars at all, and struggles with sinking foundations, the acqua alta floods and mass tourism, which is why it now charges day-trippers an access fee on busy days.",
    knownFor: [
      "The Grand Canal",
      "St Mark's Square",
      "Gondolas",
      "Rialto Bridge",
      "Carnevale masks",
      "Murano glass",
    ],
  },
  dublin: {
    citySlug: "dublin",
    image: hero(13157974),
    imageAlt:
      "The Ha'penny Bridge over the River Liffey in Dublin with the green dome of the Custom House behind",
    history:
      "Dublin began as a Viking trading and slaving port on the River Liffey around 841, and its name comes from the Irish Dubh Linn, the black pool where the longships moored. It became the centre of English rule in Ireland after the Norman arrival in 1170, and the wide streets and red-brick squares of the Georgian city were laid out in the 1700s, when Dublin was the second city of the British Empire. The 1916 Easter Rising began at the General Post Office on O'Connell Street and set off the fight that led to Irish independence in 1922. The city carries an outsized literary weight, home to four Nobel laureates and the setting for James Joyce's Ulysses, and it is now the young, tech-driven capital of a much richer Ireland.",
    knownFor: [
      "Guinness Storehouse",
      "Book of Kells",
      "Georgian doors",
      "Temple Bar pubs",
      "Trinity College",
      "Traditional music",
    ],
  },
  stockholm: {
    citySlug: "stockholm",
    image: hero(30158443),
    imageAlt:
      "Stockholm's Riddarholmen waterfront and church spire seen across the water under a blue sky",
    history:
      "Stockholm was founded around 1252 on the small island now called Gamla Stan, where Lake Malaren empties into the Baltic Sea, and it grew rich controlling the iron and copper trade out of Sweden. It became the permanent capital in the 15th century and the seat of the Swedish kings, whose Royal Palace still stands over the old town. The city spread across its fourteen islands as Sweden rose to great-power status in the 1600s, the era of the warship Vasa, which capsized in the harbour on its maiden voyage in 1628 and was raised, almost intact, in 1961. Spared the destruction of both world wars by Swedish neutrality, Stockholm kept its historic core and made the 20th century a byword for design, and it still hosts the Nobel Prize ceremony and banquet every December.",
    knownFor: [
      "Gamla Stan old town",
      "The Vasa ship",
      "ABBA Museum",
      "The archipelago",
      "Fika culture",
      "The Nobel Prize",
    ],
  },
  nice: {
    citySlug: "nice",
    image: hero(26928991),
    imageAlt:
      "The red rooftops of Old Nice with the baroque clock tower and the hills of the Riviera behind",
    history:
      "Nice spent most of its history looking to Italy rather than France: it belonged for centuries to the House of Savoy and only became French in 1860, after a plebiscite, which is why the old town feels Ligurian and the local dialect and food are closer to Genoa than to Paris. The city grew rich in the 1800s when British and Russian aristocrats came to spend the winter on the coast, and it was their money that paid for the seafront walk that still carries their name, the Promenade des Anglais. Matisse and Chagall both settled here for the light and left museums up in the leafy hills of Cimiez, on the site of the Roman town of Cemenelum. Today Nice is the unofficial capital of the Riviera and the gateway to Monaco, Cannes and the perched villages along the Cote d'Azur.",
    knownFor: [
      "Promenade des Anglais",
      "Vieux Nice",
      "Cours Saleya market",
      "Pebble beaches",
      "Socca",
      "Riviera day trips",
    ],
  },
  dubrovnik: {
    citySlug: "dubrovnik",
    image: hero(16884684),
    imageAlt:
      "The terracotta rooftops of Dubrovnik's old town with the cathedral dome and Mount Srd behind",
    history:
      "Dubrovnik spent centuries as the Republic of Ragusa, a small but shrewd maritime city-state that kept its independence by paying tribute to whichever empire was strongest while running a merchant fleet that rivalled Venice. Its stone walls, up to 25 metres high and nearly two kilometres around, were never breached, and the marble-paved Stradun and the Baroque churches inside them were largely rebuilt after a catastrophic earthquake in 1667. The republic ended when Napoleon abolished it in 1808, and the city later joined Yugoslavia and then independent Croatia. Shells damaged the old town during the siege of 1991 to 1992 in the Croatian war of independence, but it was painstakingly restored, and a new wave of fame arrived when it became King's Landing in Game of Thrones.",
    knownFor: [
      "The city walls",
      "Terracotta rooftops",
      "Stradun",
      "Game of Thrones sites",
      "Lokrum island",
      "Adriatic beaches",
    ],
  },
  reykjavik: {
    citySlug: "reykjavik",
    image: hero(20165201),
    imageAlt:
      "Reykjavik's skyline across the water with Hallgrimskirkja's tower and snow-capped mountains behind",
    history:
      "Reykjavik was, by the old sagas, the site of Iceland's first Norse settlement around 874, when Ingolfur Arnarson is said to have thrown his high-seat pillars overboard and built where they washed ashore; the name means smoky bay, after the steam rising from its hot springs. It stayed a tiny village for most of a thousand years and only grew into a real town in the 1700s, becoming the capital of a self-governing Iceland in 1918 and of a fully independent republic in 1944, when the country cut its last ties to Denmark. The city had its Cold War moment in 1986, when Reagan and Gorbachev met at Hofdi house and came close to agreeing to scrap their nuclear arsenals. Heated and powered almost entirely by geothermal and hydro energy, it is the world's northernmost capital and the base camp for Iceland's waterfalls, geysers and Northern Lights.",
    knownFor: [
      "Hallgrimskirkja",
      "Northern Lights",
      "Golden Circle",
      "Blue Lagoon",
      "Geothermal pools",
      "Whale watching",
    ],
  },
  munich: {
    citySlug: "munich",
    image: hero(13762982),
    imageAlt:
      "The twin onion domes of the Frauenkirche and the tower of the New Town Hall over the old town of Munich",
    history:
      "Munich grew up in 1158 around a settlement of monks, which is where its name, from Munichen, and the little monk on its coat of arms both come from. It became the seat of the Wittelsbach dynasty, who ruled Bavaria for more than 700 years and filled the city with palaces like the Residenz and Nymphenburg while making it a capital of art and music. It was also where the Nazi movement was born in the 1920s and where the 1938 Munich Agreement was signed, though the White Rose students who resisted from the university are remembered across the city. Rebuilt carefully after wartime bombing, Munich reinvented itself as prosperous, green and famously fond of tradition, known now for BMW, FC Bayern, the beer halls and Oktoberfest, first held in 1810 to celebrate a royal wedding.",
    knownFor: [
      "Marienplatz",
      "Oktoberfest",
      "Beer gardens",
      "The English Garden",
      "Neuschwanstein day trip",
      "BMW and FC Bayern",
    ],
  },
  tallinn: {
    citySlug: "tallinn",
    image: hero(35838020),
    imageAlt:
      "The red rooftops and church spires of Tallinn's medieval old town with the modern skyline behind at sunset",
    history:
      "Tallinn grew as a Hanseatic trading port on the Baltic, and by the 14th and 15th centuries its merchants had raised the walls, guild halls and churches of the old town that still stand almost intact, making it one of the best-preserved medieval cities in Europe. The name is often traced to Taani linn, the Danish town, after the Danes who seized the hill fort in 1219; the upper town of Toompea held the rulers while the German-speaking merchants ran the lower town below. Estonia was absorbed by the Russian empire and then, after a short first independence, by the Soviet Union until 1991, when the peaceful Singing Revolution restored the country. Since then Tallinn has become the showcase of e-Estonia, a place that helped create Skype and runs its government online, all wrapped around a fairy-tale medieval core.",
    knownFor: [
      "Medieval old town",
      "Toompea viewpoints",
      "Alexander Nevsky Cathedral",
      "Telliskivi and Kalamaja",
      "e-Estonia",
      "Christmas market",
    ],
  },
  oslo: {
    citySlug: "oslo",
    image: hero(18170373),
    imageAlt:
      "The white marble roof of the Oslo Opera House sloping down to the harbour under a blue sky",
    history:
      "Oslo was founded around 1040 and made the capital of Norway by King Haakon V around 1300, but after a devastating fire in 1624 the Danish king Christian IV rebuilt it beside the Akershus fortress and renamed it Christiania, a name it kept until it became Oslo again in 1925. For centuries Norway was ruled from Denmark and then tied to Sweden, and it only won full independence in 1905, when it invited in the king whose descendants still reign today. North Sea oil, discovered in the late 1960s, turned a modest Nordic capital into one of the wealthiest cities on earth, which paid for the waterfront Opera House and the run of new museums along the fjord. Home to the Nobel Peace Prize, awarded here every December, Oslo wraps a compact centre in the forest and fjord that locals ski and sail straight from the city.",
    knownFor: [
      "The Opera House",
      "The Scream",
      "Vigeland Park",
      "The Oslofjord",
      "Nobel Peace Prize",
      "Holmenkollen",
    ],
  },
  helsinki: {
    citySlug: "helsinki",
    image: hero(12319482),
    imageAlt:
      "Helsinki Cathedral rising over the South Harbour and market square seen from the sea",
    history:
      "Helsinki was founded in 1550 by King Gustav Vasa of Sweden as a trading post to rival Tallinn across the gulf, but it stayed a small town for centuries. Everything changed in 1809, when Sweden lost Finland to Russia: the tsar made Helsinki the capital of the new Grand Duchy in 1812 and had the architect Carl Ludwig Engel lay out the neoclassical Senate Square and its white cathedral to look like a smaller St Petersburg. Finland finally won its independence in 1917, and the 20th century turned Helsinki into a showcase of Finnish design and modern architecture, from Alvar Aalto to Marimekko. It hosted the 1952 Olympics and the 1975 Helsinki Accords, and it remains a compact, sea-fringed capital where the sauna is a way of life.",
    knownFor: [
      "Helsinki Cathedral",
      "Senate Square",
      "Suomenlinna fortress",
      "The Design District",
      "Sauna culture",
      "The Market Square",
    ],
  },
  naples: {
    citySlug: "naples",
    image: hero(31668031),
    imageAlt:
      "The domes and rooftops of Naples with the Bay of Naples and Mount Vesuvius behind at dusk",
    history:
      "Naples was founded by Greek settlers around 600 BC as Neapolis, the new city, and it kept its Greek grid, still traceable in the dead-straight line of Spaccanapoli, through Roman, Byzantine, Norman and Spanish rule. For centuries it was the capital of its own kingdom, the largest city in Italy and one of the biggest in Europe, a Bourbon royal seat whose opera house, the San Carlo of 1737, is the oldest still working in the world. All of it sits under Vesuvius, the volcano that buried Pompeii and Herculaneum in AD 79 and still looms, dormant but alive, over the bay. Poor, dense and fiercely proud, Naples gave the world pizza, born here in the 1700s and fixed as the Margherita in 1889, and a devotion to Diego Maradona that borders on the religious.",
    knownFor: [
      "Pizza margherita",
      "Mount Vesuvius",
      "Pompeii day trip",
      "Spaccanapoli",
      "Maradona",
      "The Veiled Christ",
    ],
  },
  split: {
    citySlug: "split",
    image: hero(6701514),
    imageAlt:
      "The Split waterfront and old town with the cathedral bell tower and the Mosor mountains behind, seen from the sea",
    history:
      "Split grew, uniquely, inside a Roman palace: the emperor Diocletian, the only Roman ruler to give up the throne voluntarily, built a vast fortified retirement palace here around AD 305, and when nearby Salona fell to invaders the refugees simply moved into its walls and never left. Seventeen centuries later people still live and trade inside the palace, its cathedral is Diocletian's own mausoleum, and its cellars survive almost intact. The city passed through Byzantine, Venetian, Habsburg and briefly Napoleonic hands, spent the 20th century in Yugoslavia, and became Croatian in 1991. Today Split is Dalmatia's boisterous capital, a port and the gateway to the islands, as known for its fervent Hajduk football and its picigin beach game as for its Roman stones.",
    knownFor: [
      "Diocletian's Palace",
      "The Riva",
      "St Domnius bell tower",
      "Marjan hill",
      "Dalmatian islands",
      "Game of Thrones sites",
    ],
  },
  riga: {
    citySlug: "riga",
    image: hero(33830451),
    imageAlt:
      "Riga's old town rooftops and cathedral spire with the Daugava river and the Vansu bridge behind",
    history:
      "Riga was founded in 1201 by the German bishop Albert as a base to convert the Baltic by the sword, and it grew into the biggest and richest city on the eastern Baltic under the Hanseatic League, run for centuries by German-speaking merchants and the Livonian knights. It passed through Polish, Swedish and then Russian rule, and around 1900 an industrial boom made it the third city of the Russian empire and covered its new districts in the most extravagant Art Nouveau architecture in Europe. Latvia won its independence in 1918, was swallowed by the Soviet Union in 1940, and broke free again in 1991 through the peaceful Singing Revolution and the human chain of the Baltic Way. Today Riga is the largest of the three Baltic capitals, a UNESCO-listed old town wrapped in Jugendstil boulevards.",
    knownFor: [
      "Old Town spires",
      "Art Nouveau facades",
      "The Central Market",
      "House of the Blackheads",
      "Baltic amber",
      "The Song Festival",
    ],
  },
  brussels: {
    citySlug: "brussels",
    image: hero(655295),
    imageAlt:
      "The gilded Baroque guildhall facades of the Grand-Place in Brussels under a cloudy sky",
    history:
      "Brussels began as a fortified settlement on an island in the marshy river Senne around 979 and grew into the seat of the Dukes of Brabant and a favourite residence of the dukes of Burgundy and the Habsburgs. Its guilds built the Grand-Place, and when French troops bombarded and flattened it in 1695 the guilds rebuilt their houses grander than before, in the gilded Baroque you still see today. Belgium was created in 1830 with Brussels as its capital, and the wealth of an industrial boom and a colonial empire paid for the grand boulevards, the Art Nouveau of Victor Horta and the vast Palais de Justice. Officially bilingual in French and Dutch, Brussels became the de facto capital of the European Union after 1958, which is why a comfortable Belgian city now helps run a continent.",
    knownFor: [
      "The Grand-Place",
      "Belgian beer",
      "Chocolate",
      "Frites",
      "Comic-strip murals",
      "Art Nouveau",
    ],
  },
};

export default extrasEn;
