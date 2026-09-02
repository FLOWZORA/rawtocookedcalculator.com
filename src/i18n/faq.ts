import type { Locale } from './ui';

/**
 * FAQ copy, per locale.
 *
 * Food-page questions are templates. Available placeholders:
 *   {food} / {Food}  the food, phrased for mid-sentence use in this locale
 *                    (romance locales include the definite article; {Food} is
 *                    the same phrase with a capital first letter)
 *   {pct}            USDA yield percentage
 *   {loss}           100 − yield, for foods that shrink
 *   {mult}           yield ÷ 100, one decimal, for foods that expand
 *
 * Templates deliberately keep {food} in object position — never after a
 * preposition — so that es/fr/pt/it articles never need to contract (del, du,
 * do, nel) and verbs never have to agree with a plural food name.
 */

export interface FaqItem {
  q: string;
  a: string;
}

export interface FoodFaqSet {
  /** chicken-breast only */
  chicken: FaqItem[];
  /** grains, pasta and legumes */
  grains: FaqItem[];
  /** appended for white rice */
  rice: FaqItem[];
  /** everything else */
  generic: FaqItem[];
  /** appended for spinach */
  spinach: FaqItem[];
}

// ── Homepage FAQ ───────────────────────────────────────────────────────────

export const HOME_FAQ: Record<Locale, FaqItem[]> = {
  en: [
    {
      q: 'Are nutrition labels based on raw or cooked weight?',
      a: 'Almost all packaged nutrition labels and databases — including USDA FoodData Central — list values based on raw weight unless the label explicitly says "cooked." This is the single most common source of tracking errors: the gram amounts on the label describe raw food, but most people weigh after cooking.',
    },
    {
      q: 'Do calories and macros change when food is cooked?',
      a: 'The total calories and macronutrients in the food do not change from cooking itself. What changes is the weight: water (and sometimes fat) is lost during cooking or absorbed from it. That means the same amount of protein, carbs, and fat is now packed into fewer grams for foods that shrink, or spread across more grams for foods that expand like rice. The food becomes more calorie-dense per gram when it shrinks, and less dense when it expands — but the absolute nutrient totals stay the same.',
    },
    {
      q: 'Should I weigh my food raw or cooked when tracking macros?',
      a: 'Weighing raw is generally more accurate and consistent, especially for meat, since cooking time and method both affect the final cooked weight in ways that are hard to predict. For rice, pasta, and other grains, many people prefer weighing cooked since they batch-cook and portion afterward — that works fine as long as you match the weight to the right database entry (dry/raw vs. cooked). The key is consistency: pick one approach and make sure the app entry you are using matches it.',
    },
    {
      q: 'Why do different apps show different calorie counts for the same food?',
      a: 'The most common reason is that one entry is for raw weight and another is for cooked weight of the same food. Because cooking changes how much water is in the food, the calories per gram differ significantly between raw and cooked entries. It is easy to accidentally select the wrong one. Always check whether the specific database entry you are using says raw or cooked before logging.',
    },
    {
      q: 'Is there a quick way to estimate this without a calculator?',
      a: 'A rough rule of thumb: for baked or roasted chicken breast, divide the cooked weight by about 0.72 to estimate the raw equivalent. But the exact percentage varies by food and cooking method — ground beef, pork, fish, vegetables, and grains all have different yield percentages, and even the same food behaves differently depending on how it is cooked. That is why a per-food calculator like this one gives more accurate results than any single blanket estimate.',
    },
    {
      q: 'How much raw meat do I need per person?',
      a: 'A common planning guideline is roughly 4–6 oz (110–170g) of raw protein per person for a standard meal. This is a general serving-size estimate, separate from the cooking yield data — the actual cooked portion will be smaller due to moisture loss. You can use the calculator to work out how much raw protein to start with for any number of servings.',
    },
    {
      q: 'Why is cooked weight lower for meat but higher for rice?',
      a: 'Meat starts full of water and loses it to heat; dry grains start with almost none and soak it up. Meat, poultry, seafood, and most vegetables are already water-rich, so heat drives that moisture out and the food loses weight. Dry grains, pasta, and legumes absorb water during boiling, so their weight goes up. There is no single universal rule — it comes down to the food’s starting water content and how it meets heat and liquid during cooking.',
    },
    {
      q: 'What does yield percentage mean in cooking?',
      a: 'Yield percentage is the cooked weight expressed as a percentage of the raw weight. A yield of 75% means 100g of raw food becomes 75g after cooking — the food lost weight. A yield above 100% means the food gained weight; for example, white rice has a yield of 300%, meaning 100g dry becomes roughly 300g cooked. Any number below 100% indicates weight loss (most meats and vegetables); any number above 100% indicates weight gain (grains, pasta, legumes). This is the same figure shown in the formula section on this page.',
    },
    {
      q: 'How accurate are these yield percentages?',
      a: 'These are research-based averages from USDA data, not a guarantee for your specific piece of food. Actual results vary by exact cut, size, starting moisture content, and how precisely you control the cooking method — variables that differ every time you cook. The goal is to get you meaningfully closer to accurate than not accounting for cooking loss at all, not to deliver laboratory precision. For most tracking purposes, the error from using these averages is far smaller than the error from assuming raw and cooked weights are the same.',
    },
  ],

  es: [
    {
      q: '¿Las etiquetas nutricionales se refieren al peso crudo o al cocido?',
      a: 'Casi todas las etiquetas y bases de datos —incluida USDA FoodData Central— dan los valores sobre el peso crudo, salvo que la etiqueta diga expresamente «cocido». Esta es, con diferencia, la causa más común de errores al contar: los gramos de la etiqueta describen el alimento crudo, pero la mayoría de la gente pesa después de cocinar.',
    },
    {
      q: '¿Las calorías y los macros cambian al cocinar el alimento?',
      a: 'Cocinar no cambia el total de calorías ni de macronutrientes del alimento. Lo que cambia es el peso: durante la cocción se pierde agua (y a veces grasa) o se absorbe. Es decir, la misma cantidad de proteína, carbohidratos y grasa queda concentrada en menos gramos cuando el alimento encoge, o repartida en más gramos cuando se expande, como el arroz. El alimento se vuelve más denso en calorías por gramo al encoger y menos denso al expandirse, pero los totales absolutos de nutrientes no varían.',
    },
    {
      q: '¿Debo pesar la comida en crudo o cocida para contar macros?',
      a: 'Pesar en crudo suele ser más preciso y constante, sobre todo con la carne, porque el tiempo y el método de cocción afectan al peso final de formas difíciles de prever. Con el arroz, la pasta y otros cereales, mucha gente prefiere pesar en cocido porque cocina en tandas y luego reparte en porciones: eso funciona bien siempre que el peso corresponda a la entrada correcta de la base de datos (seco/crudo o cocido). La clave es la constancia: elige un método y asegúrate de que la entrada de la app coincide con él.',
    },
    {
      q: '¿Por qué distintas apps muestran calorías diferentes para el mismo alimento?',
      a: 'La razón más habitual es que una entrada corresponde al peso crudo y otra al peso cocido del mismo alimento. Como la cocción cambia la cantidad de agua, las calorías por gramo difieren bastante entre una y otra. Es muy fácil escoger la equivocada sin darse cuenta. Antes de registrar, comprueba siempre si la entrada concreta que estás usando dice «crudo» o «cocido».',
    },
    {
      q: '¿Hay una forma rápida de estimarlo sin calculadora?',
      a: 'Una regla aproximada: para pechuga de pollo al horno o asada, divide el peso cocido entre 0,72 para estimar el equivalente en crudo. Pero el porcentaje exacto varía según el alimento y el método de cocción: la carne molida, el cerdo, el pescado, las verduras y los cereales tienen rendimientos distintos, y un mismo alimento se comporta de otra manera según cómo se cocine. Por eso una calculadora por alimento como esta da resultados más precisos que cualquier estimación general.',
    },
    {
      q: '¿Cuánta carne cruda necesito por persona?',
      a: 'Una guía habitual de planificación es de unos 110 a 170 g de proteína cruda por persona para una comida normal. Es una estimación general de ración, independiente de los datos de rendimiento: la porción ya cocida será más pequeña por la pérdida de humedad. Puedes usar la calculadora para saber con cuánta proteína cruda empezar según el número de raciones.',
    },
    {
      q: '¿Por qué el peso cocido es menor en la carne pero mayor en el arroz?',
      a: 'La carne parte llena de agua y la pierde con el calor; los cereales secos apenas tienen y la absorben. La carne, las aves, el pescado y la mayoría de las verduras ya contienen mucha agua, así que el calor la expulsa y el alimento pierde peso. Los cereales secos, la pasta y las legumbres absorben agua al hervir, de modo que ganan peso. No hay una regla universal: depende del agua que contenga el alimento de partida y de cómo se encuentre con el calor y el líquido durante la cocción.',
    },
    {
      q: '¿Qué significa el porcentaje de rendimiento en cocina?',
      a: 'El porcentaje de rendimiento es el peso cocido expresado como porcentaje del peso crudo. Un rendimiento del 75% significa que 100 g de alimento crudo se quedan en 75 g después de cocinarlo: el alimento perdió peso. Un rendimiento superior al 100% significa que ganó peso; por ejemplo, el arroz blanco tiene un rendimiento del 300%, es decir, 100 g en seco pasan a unos 300 g cocidos. Cualquier cifra por debajo del 100% indica pérdida de peso (casi todas las carnes y verduras) y cualquier cifra por encima indica ganancia (cereales, pasta, legumbres). Es el mismo dato que aparece en la sección de fórmulas de esta página.',
    },
    {
      q: '¿Qué tan precisos son estos porcentajes de rendimiento?',
      a: 'Son promedios basados en investigación con datos del USDA, no una garantía para tu pieza concreta de alimento. Los resultados reales varían según el corte exacto, el tamaño, la humedad inicial y lo bien que controles el método de cocción, variables que cambian cada vez que cocinas. El objetivo es acercarte mucho más a la realidad que si ignoraras por completo la pérdida por cocción, no ofrecerte precisión de laboratorio. Para casi cualquier seguimiento, el error de usar estos promedios es muchísimo menor que el de suponer que el peso crudo y el cocido son iguales.',
    },
  ],

  fr: [
    {
      q: 'Les étiquettes nutritionnelles se basent-elles sur le poids cru ou cuit ?',
      a: 'Presque toutes les étiquettes et bases de données — y compris USDA FoodData Central — indiquent des valeurs pour le poids cru, sauf mention explicite « cuit ». C’est de loin la première source d’erreurs de suivi : les grammes de l’étiquette décrivent l’aliment cru, alors que la plupart des gens pèsent après cuisson.',
    },
    {
      q: 'Les calories et les macros changent-elles à la cuisson ?',
      a: 'La cuisson en elle-même ne modifie pas le total de calories ni de macronutriments. Ce qui change, c’est le poids : de l’eau (et parfois de la graisse) est perdue pendant la cuisson, ou au contraire absorbée. La même quantité de protéines, de glucides et de lipides se retrouve donc concentrée dans moins de grammes pour les aliments qui rétrécissent, ou répartie sur davantage de grammes pour ceux qui gonflent, comme le riz. L’aliment devient plus dense en calories au gramme quand il rétrécit, moins dense quand il gonfle — mais les totaux absolus restent identiques.',
    },
    {
      q: 'Faut-il peser ses aliments crus ou cuits pour suivre ses macros ?',
      a: 'Peser cru est généralement plus précis et plus régulier, surtout pour la viande, car le temps et le mode de cuisson influent sur le poids final de façon difficile à prévoir. Pour le riz, les pâtes et les autres céréales, beaucoup préfèrent peser cuit parce qu’ils cuisinent en grande quantité puis portionnent : cela fonctionne très bien tant que le poids correspond à la bonne entrée de la base de données (sec/cru ou cuit). L’essentiel est la régularité : choisissez une méthode et vérifiez que l’entrée utilisée dans l’application y correspond.',
    },
    {
      q: 'Pourquoi les applications affichent-elles des calories différentes pour le même aliment ?',
      a: 'La raison la plus fréquente : une entrée correspond au poids cru et l’autre au poids cuit du même aliment. Comme la cuisson modifie la quantité d’eau, les calories au gramme diffèrent nettement entre les deux. Il est très facile de sélectionner la mauvaise sans s’en rendre compte. Vérifiez toujours si l’entrée précise que vous utilisez indique « cru » ou « cuit » avant d’enregistrer.',
    },
    {
      q: 'Existe-t-il une méthode rapide pour estimer sans calculateur ?',
      a: 'Une règle approximative : pour un blanc de poulet au four ou rôti, divisez le poids cuit par environ 0,72 pour estimer l’équivalent cru. Mais le pourcentage exact varie selon l’aliment et le mode de cuisson : bœuf haché, porc, poisson, légumes et céréales ont des rendements différents, et un même aliment se comporte autrement selon la cuisson. C’est pourquoi un calculateur par aliment comme celui-ci donne des résultats plus justes que n’importe quelle estimation générale.',
    },
    {
      q: 'Quelle quantité de viande crue prévoir par personne ?',
      a: 'Un repère de planification courant est d’environ 110 à 170 g de protéines crues par personne pour un repas standard. Il s’agit d’une estimation générale de portion, indépendante des données de rendement : la portion cuite sera plus petite en raison de la perte d’humidité. Le calculateur vous permet de déterminer la quantité de viande crue à prévoir pour n’importe quel nombre de parts.',
    },
    {
      q: 'Pourquoi le poids cuit est-il plus faible pour la viande et plus élevé pour le riz ?',
      a: 'La viande part gorgée d’eau et la perd à la chaleur ; les céréales sèches n’en ont presque pas et l’absorbent. Viandes, volailles, poissons et la plupart des légumes sont déjà riches en eau, donc la chaleur la fait partir et l’aliment perd du poids. Les céréales sèches, les pâtes et les légumineuses absorbent l’eau à l’ébullition, donc leur poids augmente. Il n’y a pas de règle universelle : tout dépend de la teneur en eau de départ et de la façon dont l’aliment rencontre la chaleur et le liquide.',
    },
    {
      q: 'Que signifie le pourcentage de rendement en cuisine ?',
      a: 'Le rendement est le poids cuit exprimé en pourcentage du poids cru. Un rendement de 75 % signifie que 100 g d’aliment cru donnent 75 g après cuisson : l’aliment a perdu du poids. Un rendement supérieur à 100 % signifie qu’il en a gagné ; le riz blanc, par exemple, affiche un rendement de 300 %, soit 100 g secs qui deviennent environ 300 g cuits. Toute valeur inférieure à 100 % traduit une perte (la plupart des viandes et des légumes) ; toute valeur supérieure traduit un gain (céréales, pâtes, légumineuses). C’est exactement le chiffre repris dans la section des formules de cette page.',
    },
    {
      q: 'Quelle est la fiabilité de ces pourcentages de rendement ?',
      a: 'Ce sont des moyennes issues des données de l’USDA, pas une garantie pour votre morceau précis. Les résultats réels varient selon le morceau exact, la taille, la teneur en eau de départ et la maîtrise du mode de cuisson — des variables qui changent à chaque fois. L’objectif est de vous rapprocher nettement de la réalité par rapport à une absence totale de prise en compte de la perte à la cuisson, pas d’atteindre une précision de laboratoire. Pour la plupart des suivis, l’erreur liée à ces moyennes reste bien inférieure à celle qui consiste à considérer que poids cru et poids cuit sont identiques.',
    },
  ],

  de: [
    {
      q: 'Beziehen sich Nährwertangaben auf das rohe oder das gegarte Gewicht?',
      a: 'Nahezu alle Etiketten und Datenbanken — auch USDA FoodData Central — geben die Werte für das rohe Gewicht an, sofern nicht ausdrücklich „gegart“ dabeisteht. Das ist mit Abstand die häufigste Fehlerquelle beim Tracken: Die Grammangaben auf dem Etikett beschreiben rohe Lebensmittel, gewogen wird aber meist nach dem Garen.',
    },
    {
      q: 'Ändern sich Kalorien und Makros beim Garen?',
      a: 'Die Gesamtmenge an Kalorien und Makronährstoffen ändert sich durch das Garen nicht. Was sich ändert, ist das Gewicht: Wasser (und manchmal Fett) geht verloren oder wird aufgenommen. Dieselbe Menge Protein, Kohlenhydrate und Fett steckt danach in weniger Gramm, wenn das Lebensmittel schrumpft, oder verteilt sich auf mehr Gramm, wenn es aufquillt wie Reis. Beim Schrumpfen steigt die Kaloriendichte pro Gramm, beim Aufquellen sinkt sie — die absoluten Nährstoffmengen bleiben gleich.',
    },
    {
      q: 'Sollte ich meine Lebensmittel roh oder gegart wiegen?',
      a: 'Roh zu wiegen ist in der Regel genauer und konstanter, besonders bei Fleisch, weil Garzeit und Garmethode das Endgewicht auf schwer vorhersehbare Weise beeinflussen. Bei Reis, Nudeln und anderem Getreide wiegen viele lieber gegart, weil sie auf Vorrat kochen und danach portionieren — das funktioniert gut, solange das Gewicht zum passenden Datenbankeintrag gehört (trocken/roh oder gegart). Entscheidend ist die Konsistenz: Leg dich auf eine Methode fest und achte darauf, dass der Eintrag in deiner App dazu passt.',
    },
    {
      q: 'Warum zeigen verschiedene Apps für dasselbe Lebensmittel unterschiedliche Kalorien?',
      a: 'Meist liegt es daran, dass ein Eintrag das rohe und ein anderer das gegarte Gewicht desselben Lebensmittels beschreibt. Da sich der Wassergehalt beim Garen ändert, unterscheiden sich die Kalorien pro Gramm deutlich. Den falschen Eintrag zu erwischen, passiert schnell. Prüfe deshalb vor dem Eintragen immer, ob beim konkreten Eintrag „roh“ oder „gegart“ steht.',
    },
    {
      q: 'Gibt es eine schnelle Schätzung ohne Rechner?',
      a: 'Als grobe Faustregel: Bei im Ofen gegarter oder gebratener Hähnchenbrust teilst du das Gargewicht durch etwa 0,72, um das Rohäquivalent zu schätzen. Der genaue Prozentsatz hängt aber vom Lebensmittel und der Garmethode ab — Hackfleisch, Schwein, Fisch, Gemüse und Getreide haben ganz unterschiedliche Ausbeuten, und dasselbe Lebensmittel verhält sich je nach Zubereitung anders. Deshalb liefert ein Rechner pro Lebensmittel wie dieser genauere Ergebnisse als jede pauschale Schätzung.',
    },
    {
      q: 'Wie viel rohes Fleisch brauche ich pro Person?',
      a: 'Als Planungsgröße gelten etwa 110 bis 170 g rohes Protein pro Person für eine normale Mahlzeit. Das ist eine allgemeine Portionsangabe und hat mit den Ausbeutedaten nichts zu tun — die fertige Portion fällt durch den Feuchtigkeitsverlust kleiner aus. Mit dem Rechner findest du heraus, mit wie viel rohem Fleisch du für eine beliebige Zahl an Portionen starten musst.',
    },
    {
      q: 'Warum ist das Gargewicht bei Fleisch niedriger, bei Reis aber höher?',
      a: 'Fleisch beginnt voller Wasser und verliert es an die Hitze; trockenes Getreide hat fast keines und saugt es auf. Fleisch, Geflügel, Fisch und die meisten Gemüse sind von Haus aus wasserreich, die Hitze treibt es aus und das Gewicht sinkt. Trockenes Getreide, Nudeln und Hülsenfrüchte nehmen beim Kochen Wasser auf, das Gewicht steigt. Eine allgemeingültige Regel gibt es nicht — entscheidend sind der Ausgangswassergehalt und das Zusammenspiel mit Hitze und Flüssigkeit.',
    },
    {
      q: 'Was bedeutet die Ausbeute in Prozent beim Garen?',
      a: 'Die Ausbeute ist das Gargewicht als Prozentsatz des Rohgewichts. Eine Ausbeute von 75 % bedeutet: Aus 100 g roh werden 75 g gegart — das Lebensmittel hat Gewicht verloren. Über 100 % bedeutet Gewichtszunahme; weißer Reis hat zum Beispiel eine Ausbeute von 300 %, aus 100 g trocken werden also rund 300 g gekocht. Alles unter 100 % steht für Verlust (die meisten Fleisch- und Gemüsesorten), alles darüber für Zunahme (Getreide, Nudeln, Hülsenfrüchte). Es ist derselbe Wert wie im Formelabschnitt auf dieser Seite.',
    },
    {
      q: 'Wie genau sind diese Ausbeutewerte?',
      a: 'Es sind forschungsbasierte Durchschnittswerte aus USDA-Daten, keine Garantie für dein konkretes Stück. Die tatsächlichen Ergebnisse hängen von Teilstück, Größe, Ausgangsfeuchte und davon ab, wie genau du die Garmethode kontrollierst — Variablen, die sich bei jedem Kochen unterscheiden. Ziel ist, dich der Realität spürbar näherzubringen, als wenn du den Garverlust gar nicht berücksichtigst, nicht Laborpräzision zu liefern. Für die meisten Zwecke ist der Fehler durch diese Durchschnittswerte weit kleiner als der Fehler, Roh- und Gargewicht gleichzusetzen.',
    },
  ],

  pt: [
    {
      q: 'Os rótulos nutricionais se baseiam no peso cru ou no cozido?',
      a: 'Quase todos os rótulos e bases de dados — inclusive a USDA FoodData Central — trazem os valores com base no peso cru, a menos que o rótulo diga expressamente "cozido". Essa é, de longe, a maior fonte de erro no controle alimentar: as gramas do rótulo descrevem o alimento cru, mas a maioria das pessoas pesa depois de cozinhar.',
    },
    {
      q: 'As calorias e os macros mudam quando o alimento é cozido?',
      a: 'O total de calorias e macronutrientes do alimento não muda por causa do cozimento em si. O que muda é o peso: durante o cozimento perde-se água (e às vezes gordura) ou absorve-se água. Ou seja, a mesma quantidade de proteína, carboidrato e gordura passa a caber em menos gramas nos alimentos que encolhem, ou se espalha por mais gramas nos que expandem, como o arroz. O alimento fica mais calórico por grama quando encolhe e menos calórico quando expande — mas os totais absolutos de nutrientes continuam os mesmos.',
    },
    {
      q: 'Devo pesar a comida crua ou cozida para contar macros?',
      a: 'Pesar cru costuma ser mais preciso e consistente, principalmente para carnes, já que o tempo e o método de cozimento afetam o peso final de formas difíceis de prever. Para arroz, massas e outros grãos, muita gente prefere pesar cozido porque cozinha em grande quantidade e porciona depois: isso funciona bem, desde que o peso corresponda à entrada certa da base de dados (seco/cru ou cozido). O essencial é a consistência: escolha um método e confira se a entrada do aplicativo combina com ele.',
    },
    {
      q: 'Por que aplicativos diferentes mostram calorias diferentes para o mesmo alimento?',
      a: 'O motivo mais comum é que uma entrada se refere ao peso cru e outra ao peso cozido do mesmo alimento. Como o cozimento altera a quantidade de água, as calorias por grama variam bastante entre as duas. É muito fácil escolher a errada sem perceber. Antes de registrar, confira sempre se a entrada específica que você está usando diz "cru" ou "cozido".',
    },
    {
      q: 'Existe um jeito rápido de estimar isso sem calculadora?',
      a: 'Uma regra aproximada: para peito de frango assado, divida o peso cozido por cerca de 0,72 para estimar o equivalente cru. Mas o percentual exato varia conforme o alimento e o método de cozimento — carne moída, suína, peixe, vegetais e grãos têm rendimentos diferentes, e o mesmo alimento se comporta de outro jeito dependendo de como é preparado. É por isso que uma calculadora por alimento como esta dá resultados mais precisos do que qualquer estimativa genérica.',
    },
    {
      q: 'Quanta carne crua eu preciso por pessoa?',
      a: 'Uma referência comum de planejamento é de cerca de 110 a 170 g de proteína crua por pessoa em uma refeição normal. É uma estimativa geral de porção, separada dos dados de rendimento — a porção já cozida sairá menor por causa da perda de umidade. Você pode usar a calculadora para descobrir com quanta proteína crua começar para qualquer número de porções.',
    },
    {
      q: 'Por que o peso cozido é menor na carne e maior no arroz?',
      a: 'A carne começa cheia de água e a perde para o calor; os grãos secos quase não têm e a absorvem. Carnes, aves, peixes e a maioria dos vegetais já são ricos em água, então o calor expulsa essa umidade e o alimento perde peso. Grãos secos, massas e leguminosas absorvem água ao cozinhar, então ganham peso. Não existe uma regra universal — depende do teor de água inicial e de como o alimento encontra o calor e o líquido durante o preparo.',
    },
    {
      q: 'O que significa percentual de rendimento na cozinha?',
      a: 'O percentual de rendimento é o peso cozido expresso como porcentagem do peso cru. Um rendimento de 75% significa que 100 g de alimento cru viram 75 g depois de cozidos — o alimento perdeu peso. Um rendimento acima de 100% significa que ele ganhou peso; o arroz branco, por exemplo, tem rendimento de 300%, ou seja, 100 g secos viram cerca de 300 g cozidos. Qualquer número abaixo de 100% indica perda (a maioria das carnes e vegetais); acima de 100%, ganho (grãos, massas, leguminosas). É o mesmo número mostrado na seção de fórmulas desta página.',
    },
    {
      q: 'Quão precisos são esses percentuais de rendimento?',
      a: 'São médias baseadas em pesquisa, vindas de dados do USDA, e não uma garantia para o seu pedaço específico. Os resultados reais variam conforme o corte, o tamanho, a umidade inicial e o quanto você controla o método de cozimento — variáveis que mudam a cada preparo. O objetivo é aproximar você bastante da realidade em comparação com ignorar completamente a perda no cozimento, não entregar precisão de laboratório. Para quase todo tipo de controle, o erro de usar essas médias é muito menor do que o de supor que peso cru e cozido são iguais.',
    },
  ],

  ja: [
    {
      q: '栄養成分表示は生の重量と加熱後の重量、どちらが基準ですか？',
      a: 'USDA FoodData Centralを含め、ほとんどの成分表示やデータベースは、明示的に「加熱後」と書かれていない限り生の重量を基準にしています。これが記録ミスの最大の原因です。表示されているグラム数は生の食品を指しているのに、多くの人は加熱後に量ってしまいます。',
    },
    {
      q: '加熱するとカロリーや栄養素は変わりますか？',
      a: '加熱そのものによって食品全体のカロリーや三大栄養素の総量が変わることはありません。変わるのは重量です。加熱中に水分（時には脂）が失われたり、逆に吸収されたりします。つまり縮む食品では同じ量のタンパク質・炭水化物・脂質がより少ないグラム数に凝縮され、米のように膨らむ食品ではより多いグラム数に分散します。縮めば1gあたりのカロリー密度は高く、膨らめば低くなりますが、栄養素の絶対量は変わりません。',
    },
    {
      q: '栄養管理では食品を生と加熱後、どちらで量るべきですか？',
      a: '一般には生で量るほうが正確で安定します。特に肉は、加熱時間と加熱方法が最終的な重量に予測しにくい形で影響するためです。米やパスタなどの穀物は、まとめて調理してから小分けにする都合で加熱後に量る人も多く、データベースの項目（乾燥・生か、加熱後か）と重量が対応していれば問題ありません。大事なのは一貫性です。どちらかに決め、アプリの項目がそれと一致していることを確認してください。',
    },
    {
      q: 'なぜアプリによって同じ食品のカロリーが違うのですか？',
      a: '最も多い理由は、一方の項目が生の重量、もう一方が同じ食品の加熱後の重量を指しているためです。加熱で水分量が変わるので、1gあたりのカロリーは生と加熱後で大きく異なります。うっかり違うほうを選んでしまうのはよくあることです。記録する前に、使っている項目が「生」なのか「加熱後」なのかを必ず確認してください。',
    },
    {
      q: '計算機を使わずにすばやく見積もる方法はありますか？',
      a: '大まかな目安として、オーブン焼きやローストの鶏胸肉なら、加熱後の重量を約0.72で割ると生の重量を推定できます。ただし正確な割合は食材と加熱方法で変わります。合い挽き肉、豚肉、魚、野菜、穀物はいずれも歩留まりが異なり、同じ食材でも調理法によって挙動が変わります。だからこそ、このような食材ごとの計算機のほうが、ひとつの目安を全体に当てはめるより正確な結果になります。',
    },
    {
      q: '1人あたり生肉はどれくらい必要ですか？',
      a: '献立を組む際の一般的な目安は、通常の1食あたり生のタンパク質で約110〜170gです。これは歩留まりデータとは別の、一般的な1人前の目安です。実際に食べる加熱後の分量は水分が抜けるぶん小さくなります。何人分でも、この計算機で必要な生の量を割り出せます。',
    },
    {
      q: 'なぜ肉は加熱後に軽くなり、米は重くなるのですか？',
      a: '肉は水分をたっぷり含んだ状態から始まり、熱でそれを失います。乾燥した穀物はほとんど水分がなく、逆に吸い込みます。肉・鶏肉・魚介類とほとんどの野菜はもともと水分が多いので、熱で水分が抜けて軽くなります。乾燥した穀物・パスタ・豆類は茹でる間に水を吸うため重くなります。万能の法則はなく、元の水分量と、加熱・水分との関わり方で決まります。',
    },
    {
      q: '調理における歩留まり率とは何ですか？',
      a: '歩留まり率とは、加熱後の重量を生の重量に対する百分率で表したものです。歩留まり75%なら、生100gが加熱後75gになるということで、重量が減ったことを意味します。100%を超える場合は重量が増えたということで、たとえば白米の歩留まりは300%、つまり乾燥100gが炊き上がりで約300gになります。100%未満は減量（ほとんどの肉と野菜）、100%超は増量（穀物・パスタ・豆類）を示します。このページの計算式セクションに出てくるのと同じ数値です。',
    },
    {
      q: 'これらの歩留まり率はどれくらい正確ですか？',
      a: 'USDAのデータに基づく研究上の平均値であり、あなたの手元の食材について保証するものではありません。実際の結果は、部位、大きさ、元の水分量、加熱方法をどれだけ厳密に管理するかによって変わり、これらは調理のたびに異なります。目的は実験室並みの精度ではなく、加熱による減少をまったく考慮しない場合より確実に正確に近づけることです。日常の記録の範囲では、これらの平均値を使う誤差は、生と加熱後の重量を同じとみなす誤差よりはるかに小さくなります。',
    },
  ],

  ko: [
    {
      q: '영양성분표는 생 중량 기준인가요, 조리 후 기준인가요?',
      a: 'USDA FoodData Central을 포함해 거의 모든 영양성분표와 데이터베이스는 라벨에 "조리됨"이라고 명시되지 않는 한 생 중량을 기준으로 값을 표기합니다. 이것이 기록 오류의 가장 흔한 원인입니다. 라벨의 그램 수는 생 식품을 가리키는데, 대부분의 사람은 조리한 뒤에 무게를 재기 때문입니다.',
    },
    {
      q: '조리하면 열량과 영양소가 달라지나요?',
      a: '조리 자체로 식품에 든 총 열량과 다량영양소가 달라지지는 않습니다. 달라지는 것은 무게입니다. 조리 중에 물(때로는 지방)이 빠져나가거나 반대로 흡수됩니다. 즉 줄어드는 식품에서는 같은 양의 단백질·탄수화물·지방이 더 적은 그램 수에 담기고, 쌀처럼 불어나는 식품에서는 더 많은 그램 수에 퍼집니다. 줄어들면 g당 열량 밀도가 높아지고 불어나면 낮아지지만, 영양소의 절대량은 그대로입니다.',
    },
    {
      q: '영양소를 기록할 때 생으로 재야 하나요, 조리 후에 재야 하나요?',
      a: '보통은 생으로 재는 쪽이 더 정확하고 일관됩니다. 특히 고기는 조리 시간과 방식이 최종 중량에 예측하기 어려운 방식으로 영향을 주기 때문입니다. 쌀·파스타 같은 곡물은 한꺼번에 조리한 뒤 나눠 담는 경우가 많아 조리 후에 재는 사람도 많은데, 중량을 데이터베이스의 알맞은 항목(건조·생 또는 조리 후)과 맞추기만 하면 문제없습니다. 중요한 것은 일관성입니다. 한 가지 방식을 정하고, 사용하는 앱 항목이 그 방식과 맞는지 확인하세요.',
    },
    {
      q: '왜 앱마다 같은 식품의 열량이 다르게 나오나요?',
      a: '가장 흔한 이유는 한 항목은 생 중량, 다른 항목은 같은 식품의 조리 후 중량을 가리키기 때문입니다. 조리하면 수분량이 달라지므로 g당 열량이 생과 조리 후 사이에서 크게 차이 납니다. 실수로 엉뚱한 항목을 고르기 쉽습니다. 기록하기 전에 지금 쓰는 항목이 "생"인지 "조리 후"인지 항상 확인하세요.',
    },
    {
      q: '계산기 없이 빠르게 어림잡는 방법이 있나요?',
      a: '대략적인 요령: 오븐에 굽거나 로스트한 닭 가슴살이라면 조리 후 중량을 약 0.72로 나누면 생 중량을 어림할 수 있습니다. 다만 정확한 비율은 식품과 조리법에 따라 달라집니다. 다진 소고기, 돼지고기, 생선, 채소, 곡물은 수율이 모두 다르고, 같은 식품도 조리 방식에 따라 다르게 움직입니다. 그래서 이런 식품별 계산기가 하나의 일괄 추정치보다 정확한 결과를 줍니다.',
    },
    {
      q: '1인당 생고기는 얼마나 필요할까요?',
      a: '식단을 짤 때 흔히 쓰는 기준은 일반적인 한 끼에 1인당 생 단백질 약 110~170g입니다. 이는 수율 데이터와는 별개인 일반적인 1인분 추정치이며, 실제로 먹는 조리 후 분량은 수분이 빠져 더 작아집니다. 계산기를 쓰면 원하는 인분 수에 맞춰 생고기를 얼마나 준비해야 할지 알 수 있습니다.',
    },
    {
      q: '왜 고기는 조리 후 무게가 줄고 쌀은 늘어나나요?',
      a: '고기는 물을 잔뜩 머금은 상태에서 시작해 열에 그 물을 잃고, 마른 곡물은 물이 거의 없어 오히려 빨아들입니다. 육류, 가금류, 해산물과 대부분의 채소는 원래 물이 많아서 열이 그 수분을 밀어내면 무게가 줍니다. 마른 곡물, 파스타, 콩류는 삶는 동안 물을 흡수하므로 무게가 늘어납니다. 하나의 보편 법칙은 없고, 처음의 수분 함량과 조리 중 열·수분과의 상호작용에 따라 달라집니다.',
    },
    {
      q: '조리에서 수율(%)이란 무엇인가요?',
      a: '수율은 조리 후 중량을 생 중량에 대한 백분율로 나타낸 값입니다. 수율 75%는 생 100g이 조리 후 75g이 된다는 뜻으로, 무게가 줄었다는 의미입니다. 100%를 넘으면 무게가 늘었다는 뜻으로, 예를 들어 백미의 수율은 300%이므로 마른 쌀 100g이 조리 후 약 300g이 됩니다. 100% 미만은 감소(대부분의 육류와 채소), 100% 초과는 증가(곡물, 파스타, 콩류)를 나타냅니다. 이 페이지의 공식 섹션에 나오는 것과 같은 값입니다.',
    },
    {
      q: '이 수율 값은 얼마나 정확한가요?',
      a: 'USDA 데이터에 기반한 연구 평균값이며, 여러분이 지금 손에 든 식재료에 대한 보장은 아닙니다. 실제 결과는 정확한 부위, 크기, 처음의 수분 함량, 조리법을 얼마나 정밀하게 통제하는지에 따라 달라지며, 이 변수들은 조리할 때마다 다릅니다. 목표는 실험실 수준의 정밀도가 아니라, 조리 손실을 아예 무시할 때보다 훨씬 정확한 값에 가까워지게 하는 것입니다. 대부분의 기록 목적에서는 이 평균값을 쓰는 오차가 생 중량과 조리 후 중량을 같다고 보는 오차보다 훨씬 작습니다.',
    },
  ],

  it: [
    {
      q: 'Le etichette nutrizionali si riferiscono al peso crudo o cotto?',
      a: 'Quasi tutte le etichette e i database — inclusa USDA FoodData Central — riportano i valori sul peso crudo, salvo indicazione esplicita "cotto". È di gran lunga la fonte più comune di errori nel monitoraggio: i grammi in etichetta descrivono l’alimento crudo, ma la maggior parte delle persone pesa dopo la cottura.',
    },
    {
      q: 'Calorie e macro cambiano quando l’alimento viene cotto?',
      a: 'La cottura in sé non modifica il totale di calorie e macronutrienti. Cambia il peso: durante la cottura si perde acqua (e talvolta grasso) oppure se ne assorbe. La stessa quantità di proteine, carboidrati e grassi finisce quindi concentrata in meno grammi negli alimenti che si restringono, o distribuita su più grammi in quelli che si gonfiano, come il riso. Restringendosi l’alimento diventa più denso di calorie per grammo, gonfiandosi meno denso — ma i totali assoluti dei nutrienti restano identici.',
    },
    {
      q: 'Per contare i macro devo pesare gli alimenti crudi o cotti?',
      a: 'Pesare da crudo è in genere più preciso e costante, soprattutto per la carne, perché tempo e metodo di cottura influenzano il peso finale in modi difficili da prevedere. Per riso, pasta e altri cereali molti preferiscono pesare da cotto perché cucinano in grandi quantità e porzionano dopo: va benissimo, purché il peso corrisponda alla voce giusta del database (secco/crudo oppure cotto). La cosa fondamentale è la coerenza: scegli un metodo e verifica che la voce usata nell’app corrisponda.',
    },
    {
      q: 'Perché app diverse mostrano calorie diverse per lo stesso alimento?',
      a: 'Il motivo più frequente è che una voce si riferisce al peso crudo e l’altra al peso cotto dello stesso alimento. Poiché la cottura cambia la quantità di acqua, le calorie per grammo differiscono parecchio tra le due. È facilissimo selezionare quella sbagliata senza accorgersene. Prima di registrare, controlla sempre se la voce specifica che stai usando dice "crudo" o "cotto".',
    },
    {
      q: 'C’è un modo rapido per stimarlo senza calcolatore?',
      a: 'Una regola pratica: per il petto di pollo al forno o arrosto, dividi il peso cotto per circa 0,72 per stimare l’equivalente da crudo. La percentuale esatta però varia in base all’alimento e al metodo di cottura: carne macinata, maiale, pesce, verdure e cereali hanno rese diverse, e lo stesso alimento si comporta in modo differente a seconda di come lo cuoci. Ecco perché un calcolatore per singolo alimento come questo dà risultati più accurati di qualsiasi stima generica.',
    },
    {
      q: 'Quanta carne cruda serve a persona?',
      a: 'Un riferimento comune per la pianificazione è di circa 110-170 g di proteine crude a persona per un pasto normale. È una stima generica di porzione, indipendente dai dati di resa: la porzione da cotta sarà più piccola per via della perdita di umidità. Con il calcolatore puoi ricavare da quanta carne cruda partire per un numero qualsiasi di porzioni.',
    },
    {
      q: 'Perché il peso da cotto è minore per la carne e maggiore per il riso?',
      a: 'La carne parte piena d’acqua e la perde con il calore; i cereali secchi non ne hanno quasi e la assorbono. Carne, pollame, pesce e la maggior parte delle verdure sono già ricchi d’acqua, quindi il calore la fa uscire e l’alimento perde peso. Cereali secchi, pasta e legumi assorbono acqua durante la bollitura, quindi aumentano di peso. Non esiste una regola universale: conta il contenuto d’acqua di partenza e il modo in cui l’alimento incontra calore e liquido.',
    },
    {
      q: 'Che cosa significa percentuale di resa in cucina?',
      a: 'La resa è il peso da cotto espresso come percentuale del peso da crudo. Una resa del 75% significa che 100 g di alimento crudo diventano 75 g dopo la cottura: l’alimento ha perso peso. Una resa superiore al 100% significa che ne ha guadagnato; il riso bianco, per esempio, ha una resa del 300%, quindi 100 g da secco diventano circa 300 g cotti. Qualsiasi valore sotto il 100% indica una perdita (quasi tutte le carni e le verdure); sopra il 100% indica un aumento (cereali, pasta, legumi). È lo stesso numero mostrato nella sezione delle formule di questa pagina.',
    },
    {
      q: 'Quanto sono accurate queste percentuali di resa?',
      a: 'Sono medie basate su ricerche e dati USDA, non una garanzia per il tuo pezzo specifico. I risultati reali variano in base al taglio esatto, alla pezzatura, all’umidità iniziale e a quanto controlli con precisione il metodo di cottura — variabili che cambiano ogni volta che cucini. L’obiettivo è avvicinarti in modo sensibile al dato corretto rispetto al non considerare affatto la perdita in cottura, non offrire una precisione da laboratorio. Per la gran parte degli usi, l’errore di queste medie è molto minore di quello che si commette dando per uguali peso crudo e peso cotto.',
    },
  ],

  hi: [
    {
      q: 'पोषण लेबल कच्चे वजन पर आधारित होते हैं या पके वजन पर?',
      a: 'USDA FoodData Central समेत लगभग सभी लेबल और डेटाबेस मान कच्चे वजन के आधार पर देते हैं, बशर्ते लेबल पर साफ तौर पर "पका हुआ" न लिखा हो। ट्रैकिंग में गलती की यह सबसे आम वजह है: लेबल पर लिखे ग्राम कच्चे भोजन के होते हैं, लेकिन ज्यादातर लोग पकाने के बाद तौलते हैं।',
    },
    {
      q: 'क्या पकाने से कैलोरी और मैक्रो बदल जाते हैं?',
      a: 'पकाने भर से भोजन में मौजूद कुल कैलोरी और मैक्रोन्यूट्रिएंट नहीं बदलते। जो बदलता है वह है वजन: पकाते समय पानी (और कभी-कभी चर्बी) निकल जाता है या सोख लिया जाता है। यानी सिकुड़ने वाले खाद्य पदार्थों में उतना ही प्रोटीन, कार्ब्स और वसा कम ग्राम में सिमट जाता है, और चावल जैसे फैलने वाले पदार्थों में ज्यादा ग्राम में फैल जाता है। सिकुड़ने पर प्रति ग्राम कैलोरी घनत्व बढ़ता है और फैलने पर घटता है — लेकिन पोषक तत्वों की कुल मात्रा वही रहती है।',
    },
    {
      q: 'मैक्रो ट्रैक करते समय भोजन कच्चा तौलूं या पका?',
      a: 'आमतौर पर कच्चा तौलना ज्यादा सटीक और एकसमान होता है, खास तौर पर मांस के लिए, क्योंकि पकाने का समय और तरीका दोनों अंतिम वजन को ऐसे प्रभावित करते हैं जिनका अंदाजा लगाना मुश्किल है। चावल, पास्ता और दूसरे अनाजों के लिए कई लोग पका हुआ तौलना पसंद करते हैं, क्योंकि वे एक साथ पकाकर बाद में हिस्से बांटते हैं — यह ठीक काम करता है, बशर्ते वजन डेटाबेस की सही प्रविष्टि (सूखा/कच्चा या पका) से मेल खाता हो। असली बात एकरूपता है: एक तरीका चुनें और देखें कि ऐप की प्रविष्टि उसी से मेल खाती हो।',
    },
    {
      q: 'एक ही खाद्य पदार्थ के लिए अलग-अलग ऐप अलग कैलोरी क्यों दिखाते हैं?',
      a: 'सबसे आम वजह यह है कि एक प्रविष्टि उसी खाद्य पदार्थ के कच्चे वजन की है और दूसरी पके वजन की। पकाने से भोजन में पानी की मात्रा बदल जाती है, इसलिए कच्ची और पकी प्रविष्टियों में प्रति ग्राम कैलोरी काफी अलग होती है। गलती से गलत प्रविष्टि चुन लेना बहुत आसान है। दर्ज करने से पहले हमेशा जांच लें कि आप जो प्रविष्टि इस्तेमाल कर रहे हैं उसमें "कच्चा" लिखा है या "पका"।',
    },
    {
      q: 'क्या कैलकुलेटर के बिना इसका जल्दी अंदाजा लगाने का कोई तरीका है?',
      a: 'मोटा नियम यह है: बेक या रोस्ट किए चिकन ब्रेस्ट के लिए, पके वजन को लगभग 0.72 से भाग दें और कच्चे वजन का अनुमान मिल जाएगा। लेकिन सही प्रतिशत खाद्य पदार्थ और पकाने के तरीके से बदलता है — कीमा, पोर्क, मछली, सब्जियां और अनाज, सबके यील्ड अलग हैं, और एक ही चीज पकाने के तरीके के हिसाब से अलग व्यवहार करती है। इसीलिए इस जैसा हर खाद्य पदार्थ के लिए अलग कैलकुलेटर किसी एक सामान्य अनुमान से ज्यादा सही नतीजे देता है।',
    },
    {
      q: 'प्रति व्यक्ति कितना कच्चा मांस चाहिए?',
      a: 'योजना बनाने का आम नियम है कि सामान्य भोजन में प्रति व्यक्ति करीब 110–170 ग्राम कच्चा प्रोटीन रखें। यह हिस्से का सामान्य अनुमान है और यील्ड डेटा से अलग है — पकने के बाद असली हिस्सा नमी घटने की वजह से छोटा रह जाएगा। आप कैलकुलेटर से जान सकते हैं कि किसी भी संख्या में हिस्सों के लिए कितने कच्चे प्रोटीन से शुरुआत करनी है।',
    },
    {
      q: 'मांस का वजन पकाने पर घटता है लेकिन चावल का बढ़ता क्यों है?',
      a: 'मांस पानी से भरा हुआ शुरू होता है और गर्मी में वह पानी खो देता है; सूखे अनाज में पानी लगभग होता ही नहीं, वे उसे सोख लेते हैं। मांस, मुर्गी, समुद्री भोजन और ज्यादातर सब्जियों में पहले से बहुत पानी होता है, इसलिए गर्मी उस नमी को बाहर निकालती है और वजन घटता है। सूखे अनाज, पास्ता और दालें उबालते समय पानी सोखते हैं, इसलिए वजन बढ़ता है। कोई एक सार्वभौमिक नियम नहीं है — यह शुरुआती पानी की मात्रा और पकाते समय गर्मी व तरल से उसके सामना पर निर्भर करता है।',
    },
    {
      q: 'खाना पकाने में यील्ड प्रतिशत का क्या मतलब है?',
      a: 'यील्ड प्रतिशत यानी पका वजन, कच्चे वजन के प्रतिशत के रूप में। 75% यील्ड का मतलब है कि 100g कच्चा भोजन पकने के बाद 75g रह जाता है — यानी वजन घटा। 100% से ऊपर का यील्ड मतलब वजन बढ़ा; जैसे सफेद चावल का यील्ड 300% है, यानी 100g सूखा चावल पकने पर करीब 300g हो जाता है। 100% से नीचे का कोई भी आंकड़ा वजन घटने का संकेत है (ज्यादातर मांस और सब्जियां), और 100% से ऊपर का आंकड़ा वजन बढ़ने का (अनाज, पास्ता, दालें)। यह वही आंकड़ा है जो इस पेज के फॉर्मूला हिस्से में दिखता है।',
    },
    {
      q: 'ये यील्ड प्रतिशत कितने सटीक हैं?',
      a: 'ये USDA डेटा पर आधारित शोधजन्य औसत हैं, आपके किसी खास टुकड़े के लिए गारंटी नहीं। असली नतीजे कट, आकार, शुरुआती नमी और आप पकाने के तरीके को कितनी सटीकता से नियंत्रित करते हैं, इन सब पर बदलते हैं — और ये चीजें हर बार अलग होती हैं। मकसद प्रयोगशाला जैसी सटीकता देना नहीं, बल्कि आपको उस स्थिति से कहीं ज्यादा सही आंकड़े के करीब लाना है जहां पकाने में होने वाली कमी को गिना ही न जाए। रोजमर्रा की ट्रैकिंग में इन औसतों से होने वाली गलती, कच्चे और पके वजन को एक मान लेने की गलती से कहीं छोटी है।',
    },
  ],
};

// ── Food-page FAQ ──────────────────────────────────────────────────────────

export const FOOD_FAQ: Record<Locale, FoodFaqSet> = {
  en: {
    chicken: [
      {
        q: 'How much does chicken breast shrink when cooked?',
        a: 'Chicken breast loses about 28% of its weight when cooked, meaning a 200g raw breast yields approximately 144g cooked. Yield varies slightly by method: baked/roasted = 72%, grilled = 70%, boiled/poached = 77%, pan-fried = 72% (USDA data).',
      },
      {
        q: 'Should I track chicken macros raw or cooked?',
        a: 'Raw. USDA nutrition data and most food labels are measured on raw chicken, so the raw weight is the one that matches the numbers — log that, or convert your cooked weight back to raw first. This calculator always derives macros from the raw-weight equivalent, regardless of which direction you convert.',
      },
      {
        q: 'Why does chicken lose weight when cooked?',
        a: 'Water cooks out of it. Chicken breast is roughly 70–75% water by weight; heat makes the proteins denature and contract, forcing that moisture out of the muscle fibers, and some fat renders out as well — together that is the roughly 28% weight loss. The protein itself stays essentially intact, so you end up with the same nutrition packed into a smaller, denser piece.',
      },
      {
        q: 'How much weight does chicken breast lose when cooked?',
        a: 'About 28% — 100g of raw chicken breast comes down to roughly 72g cooked, a 72% USDA yield. It varies a little by method: baked or roasted retains about 72%, grilled about 70%, boiled or poached about 77%, and pan-fried about 72%. Use the cooking-method toggle on the calculator above for a method-specific result.',
      },
      {
        q: 'Does the cooking method actually make a meaningful difference?',
        a: 'Yes. Higher, drier heat — like grilling — causes more moisture to evaporate from the surface than moist-heat methods like boiling or poaching. That is why grilled chicken breast has a yield of around 70% while boiled or poached chicken retains more moisture at 77%. Even a 7-percentage-point spread in yield is a real difference in what weight you should be logging.',
      },
      {
        q: 'How do I convert cooked chicken weight back to raw?',
        a: 'Divide the cooked weight by the yield percentage as a decimal for whichever cooking method you used. For baked or roasted chicken breast: cooked weight ÷ 0.72. For grilled: ÷ 0.70. For boiled or poached: ÷ 0.77. The Cooked → Raw toggle on the calculator above handles this automatically once you select your cooking method.',
      },
      {
        q: 'What is the raw to cooked ratio for chicken breast?',
        a: 'Roughly 100:72 — 100g of raw chicken breast cooks down to about 72g when baked or roasted. The ratio shifts slightly by method: grilling is closer to 100:70, while boiling or poaching retains more moisture at about 100:77.',
      },
      {
        q: 'How much does chicken weigh after cooking?',
        a: '100g of raw chicken breast weighs roughly 72g after baking or roasting, based on the USDA yield of 72%. Grill it and expect around 70g; boil or poach it and you will get around 77g; pan-frying lands at about 72g. Enter your starting weight in the calculator above to get the exact result for your cooking method.',
      },
    ],
    grains: [
      {
        q: 'Should I weigh {food} raw or cooked?',
        a: 'Dry. USDA nutrition data is measured on the dry, uncooked product, so weigh {food} dry and track those macros — or enter either weight here and the calculator does the conversion.',
      },
      {
        q: 'How much does {food} expand when cooked?',
        a: '{Food} has a {pct}% yield, meaning it expands to {mult}× its dry weight when cooked. 100g dry becomes approximately {pct}g cooked.',
      },
      {
        q: 'Why does {food} gain weight when cooked instead of losing it like meat?',
        a: 'It soaks up water. The dry product starts with almost none, so when boiled it absorbs the surrounding liquid and swells to roughly {mult}× its dry weight — the cooked weight ends up well above the dry weight, not below. Meat goes the opposite direction because it already contains a lot of water that heat drives out.',
      },
    ],
    rice: [
      {
        q: 'How much cooked rice does dry rice make?',
        a: '100g of dry white rice makes roughly 300g of cooked rice — it triples in weight because it absorbs water as it cooks. This is based on the USDA yield of 300% for white rice. So if a recipe calls for 300g of cooked rice, you would start with about 100g dry. Dry rice and cooked rice have very different calorie densities per gram, which is why matching your log entry to the right weight matters.',
      },
    ],
    generic: [
      {
        q: 'How much weight does {food} lose when cooked?',
        a: '{Food} has a {pct}% cooking yield, losing {loss}% of its weight when cooked. Source: {source}.',
      },
      {
        q: 'Should I track macros for {food} raw or cooked?',
        a: 'Raw. USDA nutrition values are based on raw weight, so track the raw weight and calculate macros from there. This calculator always computes macros from the raw-weight equivalent.',
      },
    ],
    spinach: [
      {
        q: 'How much does spinach shrink when cooked?',
        a: 'By weight, only about 23% — USDA data puts spinach at a 77% cooking yield, so 100g of raw leaves becomes about 77g cooked. By volume it is a different story: a full pan of raw leaves wilts to a small handful, and the gap between those two impressions is what trips people up. Wilting drives out the air and structure that made the raw leaves bulky; most of the water stays put. If you are tracking macros, weigh spinach rather than judging it by how much the pan shrank.',
      },
    ],
  },

  es: {
    chicken: [
      {
        q: '¿Cuánto encoge la pechuga de pollo al cocinarse?',
        a: 'La pechuga de pollo pierde alrededor del 28% de su peso al cocinarse, así que 200 g de pechuga cruda dan unos 144 g cocidos. El rendimiento varía algo según el método: al horno o asada = 72%, a la parrilla = 70%, hervida o escalfada = 77%, a la sartén = 72% (datos del USDA).',
      },
      {
        q: '¿Los macros del pollo se cuentan en crudo o en cocido?',
        a: 'En crudo. Los datos nutricionales del USDA y casi todas las etiquetas se miden sobre el pollo crudo, así que el peso en crudo es el que cuadra con esas cifras: regístralo, o convierte antes tu peso cocido a crudo. Esta calculadora siempre deriva los macros del equivalente en peso crudo, sin importar en qué dirección conviertas.',
      },
      {
        q: '¿Por qué el pollo pierde peso al cocinarse?',
        a: 'El agua sale al cocinarlo. La pechuga de pollo es agua en torno a un 70–75% de su peso; el calor desnaturaliza y contrae las proteínas, que expulsan esa humedad de las fibras musculares, y además se derrite algo de grasa — en conjunto, esa es la pérdida de alrededor del 28%. La proteína en sí queda prácticamente intacta, así que acabas con los mismos nutrientes concentrados en una pieza más pequeña y densa.',
      },
      {
        q: '¿Cuánto peso pierde la pechuga de pollo al cocinarse?',
        a: 'Alrededor del 28%: 100 g de pechuga de pollo cruda se quedan en unos 72 g cocidos, un rendimiento USDA del 72%. Varía algo según el método: al horno o asada conserva un 72%, a la parrilla un 70%, hervida o escalfada un 77% y a la sartén un 72%. Usa el selector de método de cocción en la calculadora de arriba para un resultado específico.',
      },
      {
        q: '¿El método de cocción marca de verdad una diferencia?',
        a: 'Sí. El calor más alto y seco, como el de la parrilla, evapora más humedad de la superficie que los métodos húmedos como hervir o escalfar. Por eso la pechuga a la parrilla tiene un rendimiento cercano al 70%, mientras que hervida o escalfada retiene más agua y llega al 77%. Incluso siete puntos porcentuales de diferencia son una diferencia real en el peso que deberías registrar.',
      },
      {
        q: '¿Cómo convierto el peso del pollo cocido a crudo?',
        a: 'Divide el peso cocido entre el rendimiento en decimal del método que hayas usado. Para pechuga al horno o asada: peso cocido ÷ 0,72. A la parrilla: ÷ 0,70. Hervida o escalfada: ÷ 0,77. El botón Cocido → Crudo de la calculadora de arriba lo hace solo en cuanto eliges el método de cocción.',
      },
      {
        q: '¿Cuál es la proporción de crudo a cocido de la pechuga de pollo?',
        a: 'Aproximadamente 100:72: 100 g de pechuga de pollo cruda se quedan en unos 72 g al horno o asada. La proporción cambia algo según el método: a la parrilla se acerca a 100:70, mientras que hervida o escalfada retiene más humedad, cerca de 100:77.',
      },
      {
        q: '¿Cuánto pesa el pollo después de cocinarlo?',
        a: '100 g de pechuga de pollo cruda pesan aproximadamente 72 g después de hornearla o asarla, según el rendimiento del USDA del 72%. A la parrilla espera unos 70 g; hervida o escalfada, unos 77 g; a la sartén, unos 72 g. Introduce tu peso de partida en la calculadora de arriba para obtener el resultado exacto de tu método de cocción.',
      },
    ],
    grains: [
      {
        q: '¿Hay que pesar {food} en seco o después de cocer?',
        a: 'En seco. Los datos nutricionales del USDA se miden sobre el producto seco y sin cocer, así que pesa {food} en seco y registra esos macros — o introduce aquí cualquiera de los dos pesos y la calculadora hace la conversión.',
      },
      {
        q: '¿Cuánto aumenta el peso al cocer {food}?',
        a: 'El rendimiento es del {pct}%: al cocer {food} el peso se multiplica por unas {mult} veces respecto al peso en seco. 100 g en seco pasan a unos {pct} g ya cocidos.',
      },
      {
        q: '¿Por qué al cocer {food} el peso aumenta en vez de bajar como en la carne?',
        a: 'Absorbe agua. El producto seco apenas tiene, así que al hervirlo absorbe el líquido que lo rodea y se hincha hasta unas {mult} veces su peso en seco — el peso cocido acaba bastante por encima del seco, no por debajo. La carne va en dirección contraria porque ya contiene mucha agua que el calor expulsa.',
      },
    ],
    rice: [
      {
        q: '¿Cuánto arroz cocido sale del arroz seco?',
        a: '100 g de arroz blanco seco dan alrededor de 300 g de arroz cocido: triplica su peso porque absorbe agua mientras se cuece. Esto se basa en el rendimiento del USDA del 300% para el arroz blanco. Así que si una receta pide 300 g de arroz cocido, tendrías que partir de unos 100 g en seco. El arroz seco y el cocido tienen densidades calóricas por gramo muy distintas, y por eso importa tanto que el peso que registras corresponda a la entrada correcta.',
      },
    ],
    generic: [
      {
        q: '¿Cuánto peso se pierde al cocinar {food}?',
        a: 'El rendimiento de cocción es del {pct}%: al cocinar {food} se pierde el {loss}% del peso. Fuente: {source}.',
      },
      {
        q: '¿Se registran los macros pesando {food} en crudo o ya cocinado?',
        a: 'En crudo. Los valores nutricionales del USDA se basan en el peso crudo, así que registra el peso en crudo y calcula los macros a partir de ahí. Esta calculadora siempre calcula los macros desde el equivalente en peso crudo.',
      },
    ],
    spinach: [
      {
        q: '¿Cuánto encoge la espinaca al cocinarse?',
        a: 'En peso, solo alrededor del 23%: los datos del USDA dan a la espinaca un rendimiento del 77%, así que 100 g de hojas crudas se quedan en unos 77 g cocidas. En volumen es otra historia: una sartén llena de hojas crudas se queda en un puñado pequeño, y la diferencia entre esas dos impresiones es lo que confunde. Al pocharse, las hojas sueltan el aire y la estructura que las hacían voluminosas; el agua, en su mayor parte, se queda. Si llevas un registro de macros, pesa la espinaca en vez de guiarte por cuánto ha menguado la sartén.',
      },
    ],
  },

  fr: {
    chicken: [
      {
        q: 'De combien le blanc de poulet réduit-il à la cuisson ?',
        a: 'Le blanc de poulet perd environ 28 % de son poids à la cuisson : 200 g crus donnent à peu près 144 g cuits. Le rendement varie légèrement selon la méthode : au four ou rôti = 72 %, grillé = 70 %, bouilli ou poché = 77 %, poêlé = 72 % (données USDA).',
      },
      {
        q: 'Faut-il compter les macros du poulet cru ou cuit ?',
        a: 'Cru. Les données nutritionnelles de l’USDA et la plupart des étiquettes sont mesurées sur le poulet cru : c’est donc le poids cru qui correspond à ces chiffres — enregistrez-le, ou reconvertissez d’abord votre poids cuit en cru. Ce calculateur part toujours de l’équivalent en poids cru, quel que soit le sens de la conversion.',
      },
      {
        q: 'Pourquoi le poulet perd-il du poids à la cuisson ?',
        a: 'C’est l’eau qui part. Le blanc de poulet est composé à environ 70–75 % d’eau ; la chaleur dénature et contracte les protéines, qui chassent cette humidité des fibres musculaires, et une partie de la graisse fond aussi — ensemble, cela fait la perte d’environ 28 %. Les protéines, elles, restent pour l’essentiel intactes : vous obtenez les mêmes nutriments concentrés dans un morceau plus petit et plus dense.',
      },
      {
        q: 'Quelle quantité de poids le blanc de poulet perd-il à la cuisson ?',
        a: 'Environ 28 % : 100 g de blanc de poulet cru tombent à à peu près 72 g cuits, un rendement USDA de 72 %. Cela varie un peu selon la méthode : au four ou rôti on conserve environ 72 %, grillé environ 70 %, bouilli ou poché environ 77 %, poêlé environ 72 %. Utilisez le sélecteur de mode de cuisson du calculateur ci-dessus pour un résultat précis.',
      },
      {
        q: 'Le mode de cuisson change-t-il vraiment quelque chose ?',
        a: 'Oui. Une chaleur plus forte et plus sèche — le gril, par exemple — fait s’évaporer davantage d’eau en surface que les cuissons humides comme l’eau bouillante ou le pochage. C’est pourquoi le blanc grillé affiche un rendement d’environ 70 %, tandis que bouilli ou poché il retient plus d’eau et atteint 77 %. Même sept points d’écart, c’est une vraie différence sur le poids à enregistrer.',
      },
      {
        q: 'Comment reconvertir un poids de poulet cuit en poids cru ?',
        a: 'Divisez le poids cuit par le rendement exprimé en décimale, selon la cuisson utilisée. Pour un blanc au four ou rôti : poids cuit ÷ 0,72. Grillé : ÷ 0,70. Bouilli ou poché : ÷ 0,77. Le bouton Cuit → Cru du calculateur ci-dessus le fait automatiquement dès que vous sélectionnez votre mode de cuisson.',
      },
      {
        q: 'Quel est le rapport cru-cuit pour le blanc de poulet ?',
        a: 'Environ 100:72 — 100 g de blanc de poulet cru donnent à peu près 72 g au four ou rôti. Le rapport évolue un peu selon la cuisson : au gril il se rapproche de 100:70, tandis que bouilli ou poché il retient plus d’eau, autour de 100:77.',
      },
      {
        q: 'Combien pèse le poulet après cuisson ?',
        a: '100 g de blanc de poulet cru pèsent environ 72 g après une cuisson au four ou rôtie, sur la base du rendement USDA de 72 %. Au gril, comptez plutôt 70 g ; bouilli ou poché, environ 77 g ; poêlé, environ 72 g. Saisissez votre poids de départ dans le calculateur ci-dessus pour obtenir le résultat exact selon votre cuisson.',
      },
    ],
    grains: [
      {
        q: 'Faut-il peser {food} avant ou après cuisson ?',
        a: 'Avant cuisson. Les données nutritionnelles de l’USDA portent sur le produit sec, non cuit : pesez donc {food} à sec et enregistrez ces macros — ou saisissez ici l’un ou l’autre poids, le calculateur fait la conversion.',
      },
      {
        q: 'De combien le poids augmente-t-il quand on fait cuire {food} ?',
        a: 'Le rendement est de {pct} % : en cuisant {food}, le poids est multiplié par environ {mult} par rapport au poids sec. 100 g secs donnent à peu près {pct} g cuits.',
      },
      {
        q: 'Pourquoi le poids augmente-t-il quand on fait cuire {food}, alors que la viande en perd ?',
        a: 'Il absorbe l’eau. Le produit sec n’en contient presque pas : à l’ébullition, il absorbe le liquide qui l’entoure et gonfle jusqu’à environ {mult} fois son poids sec — le poids cuit finit donc nettement au-dessus du poids sec, et non en dessous. La viande évolue dans l’autre sens parce qu’elle contient déjà beaucoup d’eau que la chaleur fait partir.',
      },
    ],
    rice: [
      {
        q: 'Quelle quantité de riz cuit obtient-on à partir de riz sec ?',
        a: '100 g de riz blanc sec donnent environ 300 g de riz cuit : le poids triple parce que le riz absorbe l’eau pendant la cuisson. Ce chiffre repose sur le rendement USDA de 300 % pour le riz blanc. Si une recette demande 300 g de riz cuit, partez donc d’environ 100 g de riz sec. Le riz sec et le riz cuit n’ont pas du tout la même densité calorique au gramme, d’où l’importance de faire correspondre le poids enregistré à la bonne entrée.',
      },
    ],
    generic: [
      {
        q: 'Combien de poids perd-on en faisant cuire {food} ?',
        a: 'Le rendement de cuisson est de {pct} % : en cuisant {food}, on perd {loss} % du poids. Source : {source}.',
      },
      {
        q: 'Pour {food}, faut-il compter les macros avant ou après cuisson ?',
        a: 'Avant cuisson. Les valeurs nutritionnelles de l’USDA se basent sur le poids cru : enregistrez le poids cru et calculez les macros à partir de là. Ce calculateur part toujours de l’équivalent en poids cru.',
      },
    ],
    spinach: [
      {
        q: 'De combien les épinards réduisent-ils à la cuisson ?',
        a: 'En poids, seulement 23 % environ : d’après l’USDA, les épinards ont un rendement de cuisson de 77 %, donc 100 g de feuilles crues donnent environ 77 g cuits. En volume, c’est une autre histoire : une poêle pleine de feuilles crues se réduit à une petite poignée, et c’est l’écart entre ces deux impressions qui induit en erreur. En tombant, les feuilles perdent l’air et la structure qui les rendaient volumineuses ; l’eau, elle, reste en grande partie. Si vous suivez vos macros, pesez les épinards plutôt que de vous fier à la réduction apparente dans la poêle.',
      },
    ],
  },

  de: {
    chicken: [
      {
        q: 'Wie stark schrumpft Hähnchenbrust beim Garen?',
        a: 'Hähnchenbrust verliert beim Garen etwa 28 % ihres Gewichts: Aus 200 g roh werden rund 144 g gegart. Die Ausbeute schwankt je nach Methode leicht — im Ofen gebacken oder gebraten = 72 %, gegrillt = 70 %, gekocht oder pochiert = 77 %, in der Pfanne gebraten = 72 % (USDA-Daten).',
      },
      {
        q: 'Sollte ich die Makros von Hähnchen roh oder gegart tracken?',
        a: 'Roh. Die USDA-Nährwerte und die meisten Etiketten beziehen sich auf rohes Hähnchen — das Rohgewicht ist also der Wert, der zu diesen Zahlen passt. Trage es ein oder rechne dein Gargewicht zuerst auf roh zurück. Dieser Rechner leitet die Makros immer aus dem Rohgewichts-Äquivalent ab, egal in welche Richtung du umrechnest.',
      },
      {
        q: 'Warum verliert Hähnchen beim Garen an Gewicht?',
        a: 'Das Wasser gart heraus. Hähnchenbrust besteht zu etwa 70–75 % aus Wasser; die Hitze denaturiert die Proteine und zieht sie zusammen, wodurch diese Feuchtigkeit aus den Muskelfasern gepresst wird, und ein Teil des Fetts brät aus — zusammen ergibt das den Verlust von rund 28 %. Das Protein selbst bleibt praktisch unverändert, du hast am Ende dieselben Nährstoffe in einem kleineren, dichteren Stück.',
      },
      {
        q: 'Wie viel Gewicht verliert Hähnchenbrust beim Garen?',
        a: 'Etwa 28 %: 100 g rohe Hähnchenbrust kommen auf rund 72 g gegart, eine USDA-Ausbeute von 72 %. Je nach Methode schwankt das etwas: im Ofen gebacken oder gebraten bleiben rund 72 %, gegrillt etwa 70 %, gekocht oder pochiert etwa 77 %, in der Pfanne gebraten etwa 72 %. Nutze im Rechner oben die Auswahl der Garmethode für ein methodenspezifisches Ergebnis.',
      },
      {
        q: 'Macht die Garmethode wirklich einen spürbaren Unterschied?',
        a: 'Ja. Höhere, trockenere Hitze — etwa beim Grillen — lässt mehr Feuchtigkeit an der Oberfläche verdunsten als feuchte Methoden wie Kochen oder Pochieren. Deshalb liegt gegrillte Hähnchenbrust bei rund 70 % Ausbeute, während gekochtes oder pochiertes Fleisch mit 77 % mehr Feuchtigkeit behält. Schon sieben Prozentpunkte Unterschied sind ein realer Unterschied beim Gewicht, das du eintragen solltest.',
      },
      {
        q: 'Wie rechne ich gegartes Hähnchengewicht zurück auf roh?',
        a: 'Teile das Gargewicht durch die Ausbeute als Dezimalzahl für die jeweils genutzte Methode. Für im Ofen gebackene oder gebratene Hähnchenbrust: Gargewicht ÷ 0,72. Gegrillt: ÷ 0,70. Gekocht oder pochiert: ÷ 0,77. Die Umschaltung „Gegart → Roh“ im Rechner oben erledigt das automatisch, sobald du deine Garmethode auswählst.',
      },
      {
        q: 'Wie ist das Verhältnis roh zu gegart bei Hähnchenbrust?',
        a: 'Etwa 100:72 — 100 g rohe Hähnchenbrust ergeben im Ofen gebacken oder gebraten rund 72 g. Je nach Methode verschiebt sich das Verhältnis leicht: Beim Grillen liegt es näher bei 100:70, beim Kochen oder Pochieren bleibt mehr Feuchtigkeit erhalten, etwa 100:77.',
      },
      {
        q: 'Wie viel wiegt Hähnchen nach dem Garen?',
        a: '100 g rohe Hähnchenbrust wiegen nach dem Backen oder Braten rund 72 g, ausgehend von der USDA-Ausbeute von 72 %. Gegrillt sind es etwa 70 g, gekocht oder pochiert rund 77 g, in der Pfanne gebraten etwa 72 g. Gib dein Ausgangsgewicht im Rechner oben ein, um das genaue Ergebnis für deine Garmethode zu erhalten.',
      },
    ],
    grains: [
      {
        q: '{Food}: trocken oder gegart abwiegen?',
        a: 'Trocken. Die USDA-Nährwerte beziehen sich auf das trockene, ungegarte Produkt, also wiege die trockene Menge ab und tracke diese Makros — oder gib hier eines der beiden Gewichte ein und der Rechner übernimmt die Umrechnung.',
      },
      {
        q: 'Wie stark quillt {Food} beim Kochen auf?',
        a: '{Food} hat eine Ausbeute von {pct} % und quillt beim Kochen auf etwa das {mult}-Fache des Trockengewichts auf. Aus 100 g trocken werden rund {pct} g gegart.',
      },
      {
        q: 'Warum nimmt {Food} beim Kochen an Gewicht zu, statt wie Fleisch zu verlieren?',
        a: 'Es saugt Wasser auf. Das trockene Produkt enthält fast keines, also saugt es beim Kochen die umgebende Flüssigkeit auf und quillt auf etwa das {mult}-Fache seines Trockengewichts — das Gargewicht liegt am Ende deutlich über dem Trockengewicht, nicht darunter. Fleisch geht in die andere Richtung, weil es bereits viel Wasser enthält, das die Hitze austreibt.',
      },
    ],
    rice: [
      {
        q: 'Wie viel gekochter Reis wird aus trockenem Reis?',
        a: 'Aus 100 g trockenem weißem Reis werden rund 300 g gekochter Reis — das Gewicht verdreifacht sich, weil der Reis beim Garen Wasser aufnimmt. Grundlage ist die USDA-Ausbeute von 300 % für weißen Reis. Verlangt ein Rezept 300 g gekochten Reis, startest du also mit etwa 100 g trocken. Trockener und gekochter Reis haben eine sehr unterschiedliche Kaloriendichte pro Gramm — deshalb ist es wichtig, dass dein Eintrag zum richtigen Gewicht passt.',
      },
    ],
    generic: [
      {
        q: 'Wie viel Gewicht verliert {Food} beim Garen?',
        a: '{Food} hat eine Garausbeute von {pct} % und verliert beim Garen {loss} % des Gewichts. Quelle: {source}.',
      },
      {
        q: 'Makros für {Food}: roh oder gegart tracken?',
        a: 'Roh. Die USDA-Nährwerte beziehen sich auf das Rohgewicht, also tracke das Rohgewicht und berechne die Makros daraus. Dieser Rechner ermittelt die Makros immer aus dem Rohgewichts-Äquivalent.',
      },
    ],
    spinach: [
      {
        q: 'Wie stark schrumpft Spinat beim Garen?',
        a: 'Im Gewicht nur etwa 23 % — laut USDA liegt die Garausbeute bei 77 %, aus 100 g rohen Blättern werden also rund 77 g gegart. Im Volumen sieht es ganz anders aus: Eine volle Pfanne roher Blätter fällt auf eine kleine Handvoll zusammen, und genau diese Lücke zwischen den beiden Eindrücken führt in die Irre. Beim Zusammenfallen entweichen Luft und Struktur, die die rohen Blätter voluminös gemacht haben; das Wasser bleibt größtenteils drin. Wer Makros trackt, sollte Spinat wiegen, statt nach dem Schrumpfen in der Pfanne zu schätzen.',
      },
    ],
  },

  pt: {
    chicken: [
      {
        q: 'Quanto o peito de frango encolhe ao ser cozido?',
        a: 'O peito de frango perde cerca de 28% do peso ao ser cozido, ou seja, 200 g crus rendem aproximadamente 144 g cozidos. O rendimento varia um pouco conforme o método: assado = 72%, grelhado = 70%, cozido ou escalfado = 77%, frito na frigideira = 72% (dados do USDA).',
      },
      {
        q: 'Devo contar os macros do frango cru ou cozido?',
        a: 'Cru. Os dados nutricionais do USDA e a maioria dos rótulos são medidos no frango cru, então o peso cru é o que combina com esses números — registre-o, ou converta antes o peso cozido de volta para cru. Esta calculadora sempre deriva os macros do equivalente em peso cru, não importa a direção da conversão.',
      },
      {
        q: 'Por que o frango perde peso ao ser cozido?',
        a: 'É a água que sai. O peito de frango é composto por cerca de 70–75% de água; o calor desnatura e contrai as proteínas, que expulsam essa umidade das fibras musculares, e parte da gordura também derrete — juntos, isso dá a perda de cerca de 28%. A proteína em si permanece praticamente intacta, então você fica com os mesmos nutrientes concentrados em um pedaço menor e mais denso.',
      },
      {
        q: 'Quanto peso o peito de frango perde ao ser cozido?',
        a: 'Cerca de 28%: 100 g de peito de frango cru caem para aproximadamente 72 g cozidos, um rendimento USDA de 72%. Varia um pouco conforme o método: assado retém cerca de 72%, grelhado cerca de 70%, cozido ou escalfado cerca de 77% e frito na frigideira cerca de 72%. Use o seletor de método de cozimento na calculadora acima para um resultado específico.',
      },
      {
        q: 'O método de cozimento faz mesmo diferença?',
        a: 'Faz. Calor mais alto e seco — como o da grelha — evapora mais umidade da superfície do que métodos úmidos, como cozinhar em água ou escalfar. É por isso que o peito grelhado tem rendimento em torno de 70%, enquanto cozido ou escalfado retém mais umidade e chega a 77%. Mesmo sete pontos percentuais de diferença representam uma diferença real no peso que você deve registrar.',
      },
      {
        q: 'Como converter o peso do frango cozido de volta para cru?',
        a: 'Divida o peso cozido pelo rendimento em decimal do método que você usou. Para peito de frango assado: peso cozido ÷ 0,72. Grelhado: ÷ 0,70. Cozido ou escalfado: ÷ 0,77. O botão Cozido → Cru na calculadora acima faz isso automaticamente assim que você escolhe o método de cozimento.',
      },
      {
        q: 'Qual é a proporção de cru para cozido do peito de frango?',
        a: 'Aproximadamente 100:72 — 100 g de peito de frango cru rendem cerca de 72 g quando assados. A proporção muda um pouco conforme o método: grelhar chega perto de 100:70, enquanto cozinhar ou escalfar retém mais umidade, cerca de 100:77.',
      },
      {
        q: 'Quanto o frango pesa depois de cozido?',
        a: '100 g de peito de frango cru pesam por volta de 72 g depois de assados, com base no rendimento do USDA de 72%. Na grelha, espere cerca de 70 g; cozido ou escalfado, cerca de 77 g; na frigideira, cerca de 72 g. Digite seu peso inicial na calculadora acima para obter o resultado exato do seu método de preparo.',
      },
    ],
    grains: [
      {
        q: 'Devo pesar {food} seco ou depois de cozinhar?',
        a: 'Seco. Os dados nutricionais do USDA são medidos no produto seco e cru, então pese {food} ainda seco e registre esses macros — ou informe aqui qualquer um dos dois pesos e a calculadora faz a conversão.',
      },
      {
        q: 'Quanto o peso aumenta ao cozinhar {food}?',
        a: 'O rendimento é de {pct}%: ao cozinhar {food}, o peso é multiplicado por cerca de {mult} em relação ao peso seco. 100 g secos viram aproximadamente {pct} g cozidos.',
      },
      {
        q: 'Por que ao cozinhar {food} o peso aumenta em vez de cair como acontece com a carne?',
        a: 'Ele absorve água. O produto seco quase não tem, então ao ser cozido absorve o líquido ao redor e incha até cerca de {mult} vezes o peso seco — o peso cozido acaba bem acima do peso seco, e não abaixo. A carne vai na direção oposta porque já contém muita água, que o calor expulsa.',
      },
    ],
    rice: [
      {
        q: 'Quanto arroz cozido rende o arroz seco?',
        a: '100 g de arroz branco seco rendem cerca de 300 g de arroz cozido — o peso triplica porque o arroz absorve água ao cozinhar. Isso se baseia no rendimento do USDA de 300% para o arroz branco. Portanto, se uma receita pede 300 g de arroz cozido, você começaria com cerca de 100 g seco. Arroz seco e arroz cozido têm densidades calóricas por grama bem diferentes, e é por isso que importa casar o peso registrado com a entrada certa.',
      },
    ],
    generic: [
      {
        q: 'Quanto peso se perde ao cozinhar {food}?',
        a: 'O rendimento de cocção é de {pct}%: ao cozinhar {food}, perde-se {loss}% do peso. Fonte: {source}.',
      },
      {
        q: 'Para {food}, os macros devem ser contados no peso cru ou cozido?',
        a: 'Cru. Os valores nutricionais do USDA se baseiam no peso cru, então registre o peso cru e calcule os macros a partir dele. Esta calculadora sempre calcula os macros pelo equivalente em peso cru.',
      },
    ],
    spinach: [
      {
        q: 'Quanto o espinafre encolhe ao ser cozido?',
        a: 'Em peso, só cerca de 23%: os dados do USDA apontam um rendimento de 77%, então 100 g de folhas cruas viram cerca de 77 g cozidas. Em volume é outra história: uma frigideira cheia de folhas cruas murcha até virar um punhado pequeno, e é a distância entre essas duas impressões que engana. Ao murchar, as folhas perdem o ar e a estrutura que as deixavam volumosas; a água, em boa parte, permanece. Se você acompanha macros, pese o espinafre em vez de julgar pelo tanto que a panela encolheu.',
      },
    ],
  },

  ja: {
    chicken: [
      {
        q: '鶏胸肉は加熱するとどれくらい縮みますか？',
        a: '鶏胸肉は加熱すると重量の約28%を失います。つまり生200gの胸肉は加熱後およそ144gになります。歩留まりは方法によって多少変わります。オーブン焼き・ロースト=72%、グリル=70%、茹で・ポーチ=77%、フライパン焼き=72%（USDAデータ）。',
      },
      {
        q: '鶏肉のマクロは生と加熱後、どちらで記録すべきですか？',
        a: '生で記録します。USDAの栄養データも多くの食品表示も生の鶏肉で測定されているため、その数値と一致するのは生の重量です。生の重量を記録するか、加熱後の重量をまず生に戻してください。この計算機は換算の向きにかかわらず、常に生重量に換算した値からマクロを算出します。',
      },
      {
        q: 'なぜ鶏肉は加熱すると軽くなるのですか？',
        a: '水分が抜けるからです。鶏胸肉は重量の約70〜75%が水分で、加熱するとタンパク質が変性・収縮してその水分を筋繊維から押し出し、脂も一部溶け出します——合わせて約28%の減量になります。タンパク質自体はほぼそのまま残るので、同じ栄養がより小さく密度の高い状態に凝縮されます。',
      },
      {
        q: '鶏胸肉は加熱するとどれくらい重量が減りますか？',
        a: '約28%です。生の鶏胸肉100gは加熱後およそ72g（USDA歩留まり72%）になります。方法によって多少変わり、オーブン焼き・ローストで約72%、グリルで約70%、茹で・ポーチで約77%、フライパン焼きで約72%を保ちます。方法別の結果は上の計算機の加熱方法切り替えで確認できます。',
      },
      {
        q: '加熱方法によって実際に違いは出ますか？',
        a: '出ます。グリルのように高温で乾いた加熱は、茹でやポーチのような湿式加熱よりも表面から多くの水分を蒸発させます。だからグリルした鶏胸肉の歩留まりは70%前後、茹でやポーチでは水分が残り77%になります。歩留まりの7ポイント差でも、記録すべき重量における実質的な差です。',
      },
      {
        q: '加熱後の鶏肉の重量を生に戻すにはどうすればいいですか？',
        a: '使った加熱方法の歩留まりを小数にして、加熱後の重量を割ってください。オーブン焼き・ローストの鶏胸肉なら加熱後重量÷0.72、グリルなら÷0.70、茹で・ポーチなら÷0.77です。上の計算機で「加熱後→生」に切り替え、加熱方法を選べば自動で計算されます。',
      },
      {
        q: '鶏胸肉の生と加熱後の比率はどれくらいですか？',
        a: 'およそ100:72です——生の鶏胸肉100gはオーブン焼きやローストでおよそ72gになります。加熱方法によって少し変わり、グリルでは100:70に近づき、茹でやポーチでは水分が残って約100:77になります。',
      },
      {
        q: '鶏肉は加熱後に何グラムになりますか？',
        a: 'USDAの歩留まり72%に基づくと、生の鶏胸肉100gはオーブン焼きやローストでおよそ72gになります。グリルなら約70g、茹でやポーチなら約77g、フライパン焼きなら約72gです。上の計算機に元の重量を入力すれば、加熱方法ごとの正確な結果が分かります。',
      },
    ],
    grains: [
      {
        q: '{food}は乾燥状態と加熱後、どちらで量るべきですか？',
        a: '乾燥状態で量ります。USDAの栄養データは乾燥した未調理の状態で測定されているため、{food}は乾燥状態で量ってその値を記録してください。あるいはここにどちらの重量を入力しても、計算機が換算します。',
      },
      {
        q: '{food}は加熱するとどれくらい重くなりますか？',
        a: '歩留まりは{pct}%です。{food}を加熱すると、重量は乾燥時の約{mult}倍になります。乾燥100gが加熱後およそ{pct}gになります。',
      },
      {
        q: 'なぜ{food}は肉と違って加熱すると重くなるのですか？',
        a: '水を吸うからです。乾燥した状態ではほとんど水分がなく、茹でると周囲の水分を吸収して乾燥重量の約{mult}倍に膨らみます——加熱後の重量は乾燥時より大幅に増えます。肉は最初から多くの水分を含んでおり、加熱でそれが失われるので逆方向になります。',
      },
    ],
    rice: [
      {
        q: '乾燥した米からご飯はどれくらいできますか？',
        a: '乾燥した白米100gからは、およそ300gの炊いたご飯ができます。炊く間に水を吸うため重量が3倍になるのです。これは白米の歩留まり300%（USDA）に基づいています。レシピで炊いたご飯300gが必要なら、乾燥100gから始めればよいことになります。乾燥米と炊いた米では1gあたりのカロリー密度が大きく異なるので、記録する重量を正しい項目に合わせることが重要です。',
      },
    ],
    generic: [
      {
        q: '{food}は加熱するとどれくらい重量が減りますか？',
        a: '調理歩留まりは{pct}%です。{food}を加熱すると重量の{loss}%を失います。出典: {source}。',
      },
      {
        q: '{food}のマクロは生と加熱後のどちらで記録すべきですか？',
        a: '生の重量で記録します。USDAの栄養値は生の重量が基準なので、生の重量で記録し、そこからマクロを計算してください。この計算機は常に生重量に換算した値からマクロを算出します。',
      },
    ],
    spinach: [
      {
        q: 'ほうれん草は加熱するとどれくらい縮みますか？',
        a: '重量で見れば約23%だけです。USDAのデータではほうれん草の調理歩留まりは77%で、生の葉100gは加熱後およそ77gになります。かさで見ると話は別で、フライパン一杯の生の葉がひとつかみほどまで縮みます。この2つの印象のずれが誤解のもとです。しんなりする過程で失われるのは、生の葉をかさ高くしていた空気と構造であり、水分の大半はそのまま残ります。マクロを記録するなら、フライパンの縮み具合で判断せず、はかりで量ってください。',
      },
    ],
  },

  ko: {
    chicken: [
      {
        q: '닭 가슴살은 조리하면 얼마나 줄어드나요?',
        a: '닭 가슴살은 조리하면 무게의 약 28%가 줄어듭니다. 즉 생 200g이 조리 후 약 144g이 됩니다. 수율은 방식에 따라 조금씩 다릅니다. 오븐 구이·로스트 = 72%, 직화 구이 = 70%, 삶기·수란식 조리 = 77%, 팬 프라이 = 72%(USDA 자료).',
      },
      {
        q: '닭고기 영양소는 생으로 기록하나요, 조리 후로 기록하나요?',
        a: '생으로 기록하세요. USDA 영양 데이터와 대부분의 식품 라벨은 생닭을 기준으로 측정되므로, 그 수치와 맞는 것은 생 중량입니다. 생 중량을 기록하거나, 조리 후 중량을 먼저 생 중량으로 되돌리세요. 이 계산기는 변환 방향과 관계없이 항상 생중량 기준으로 영양소를 산출합니다.',
      },
      {
        q: '닭고기는 왜 조리하면 무게가 줄어드나요?',
        a: '물이 빠져나가기 때문입니다. 닭 가슴살은 무게의 약 70~75%가 물인데, 열이 단백질을 변성·수축시키면서 그 수분을 근섬유 밖으로 밀어내고 지방도 일부 빠져나옵니다 — 이 둘을 합친 것이 약 28%의 무게 감소입니다. 단백질 자체는 거의 그대로 남아서, 같은 영양이 더 작고 밀도 높은 덩어리에 담기게 됩니다.',
      },
      {
        q: '닭 가슴살은 조리하면 무게가 얼마나 줄어드나요?',
        a: '약 28%입니다. 생 닭 가슴살 100g은 조리 후 약 72g으로 줄며, USDA 수율 72%에 해당합니다. 방식에 따라 조금 달라져서 오븐 구이·로스트는 약 72%, 직화 구이는 약 70%, 삶기·수란식은 약 77%, 팬 프라이는 약 72%가 남습니다. 방식별 결과는 위 계산기의 조리법 선택으로 확인하세요.',
      },
      {
        q: '조리 방법이 실제로 의미 있는 차이를 만드나요?',
        a: '그렇습니다. 직화 구이처럼 더 뜨겁고 건조한 열은 삶기나 수란식 조리 같은 습열 방식보다 표면에서 수분을 더 많이 증발시킵니다. 그래서 직화로 구운 닭 가슴살의 수율은 70% 안팎이고, 삶거나 수란식으로 조리하면 수분이 더 남아 77%가 됩니다. 수율 7퍼센트포인트 차이도 기록해야 할 무게에서 실제로 유의미한 차이입니다.',
      },
      {
        q: '조리된 닭고기 무게를 생 무게로 되돌리려면 어떻게 하나요?',
        a: '사용한 조리법의 수율을 소수로 바꿔 조리 후 중량을 나누세요. 오븐에 굽거나 로스트한 닭 가슴살은 조리 후 중량 ÷ 0.72, 직화 구이는 ÷ 0.70, 삶기나 수란식 조리는 ÷ 0.77입니다. 위 계산기의 "조리 후 → 생" 전환을 쓰면 조리법을 고르는 순간 자동으로 계산됩니다.',
      },
      {
        q: '닭 가슴살의 생·조리 후 비율은 어떻게 되나요?',
        a: '대략 100:72입니다 — 생 닭 가슴살 100g은 오븐에 굽거나 로스트하면 약 72g이 됩니다. 비율은 조리법에 따라 조금씩 달라져서, 직화 구이는 100:70에 가깝고, 삶거나 수란식으로 조리하면 수분이 더 남아 약 100:77이 됩니다.',
      },
      {
        q: '닭고기는 조리 후 무게가 얼마나 되나요?',
        a: 'USDA 수율 72%를 기준으로, 생 닭 가슴살 100g은 오븐에 굽거나 로스트하면 약 72g이 됩니다. 직화로 구우면 약 70g, 삶거나 수란식으로 조리하면 약 77g, 팬에 구우면 약 72g입니다. 위 계산기에 시작 중량을 입력하면 조리법별 정확한 결과를 볼 수 있습니다.',
      },
    ],
    grains: [
      {
        q: '{food}은(는) 건조 상태로 재야 하나요, 조리 후에 재야 하나요?',
        a: '마른 상태로 재세요. USDA 영양 데이터는 조리하지 않은 마른 상태를 기준으로 측정되므로, {food}을(를) 마른 상태로 재고 그 영양소를 기록하세요. 아니면 여기에 어느 쪽 중량을 입력하든 계산기가 변환해 줍니다.',
      },
      {
        q: '{food}은(는) 조리하면 무게가 얼마나 늘어나나요?',
        a: '수율은 {pct}%입니다. {food}을(를) 조리하면 무게가 건조 중량의 약 {mult}배가 됩니다. 마른 상태 100g이 조리 후 약 {pct}g이 됩니다.',
      },
      {
        q: '{food}은(는) 왜 고기처럼 줄지 않고 조리하면 무거워지나요?',
        a: '물을 빨아들이기 때문입니다. 마른 상태에서는 물이 거의 없어서, 삶으면 주변의 물을 흡수해 건조 중량의 약 {mult}배로 불어납니다 — 조리 후 중량이 마른 중량보다 훨씬 커집니다. 고기는 이미 물을 많이 머금고 있고 열이 그 물을 밀어내기 때문에 반대 방향으로 움직입니다.',
      },
    ],
    rice: [
      {
        q: '마른 쌀로 밥을 지으면 얼마나 나오나요?',
        a: '마른 백미 100g으로는 약 300g의 밥이 나옵니다. 익으면서 물을 흡수해 무게가 세 배가 되기 때문입니다. 이는 백미의 USDA 수율 300%를 근거로 합니다. 따라서 조리법에서 밥 300g이 필요하다면 마른 쌀 약 100g으로 시작하면 됩니다. 마른 쌀과 지은 밥은 g당 열량 밀도가 크게 다르므로, 기록하는 중량을 알맞은 항목에 맞추는 것이 중요합니다.',
      },
    ],
    generic: [
      {
        q: '{food}은(는) 조리하면 무게가 얼마나 줄어드나요?',
        a: '조리 수율은 {pct}%입니다. {food}을(를) 조리하면 무게의 {loss}%가 줄어듭니다. 출처: {source}.',
      },
      {
        q: '{food}의 영양소는 생 기준으로 기록하나요, 조리 후 기준으로 기록하나요?',
        a: '생 기준입니다. USDA 영양 수치는 생 중량이 기준이므로, 생 중량을 기록하고 거기서 영양소를 계산하세요. 이 계산기는 항상 생중량 기준으로 영양소를 계산합니다.',
      },
    ],
    spinach: [
      {
        q: '시금치는 조리하면 얼마나 줄어드나요?',
        a: '무게로 보면 약 23%뿐입니다. USDA 자료에 따르면 시금치의 조리 수율은 77%로, 생잎 100g이 조리 후 약 77g이 됩니다. 부피로 보면 이야기가 다릅니다. 팬 가득했던 생잎이 한 줌 정도로 줄어들고, 이 두 인상의 차이가 바로 착각의 원인입니다. 숨이 죽는 과정에서 빠지는 것은 생잎을 부피 있게 만들던 공기와 구조이고, 수분은 대부분 그대로 남습니다. 매크로를 기록한다면 팬이 얼마나 줄었는지로 판단하지 말고 시금치를 저울에 다세요.',
      },
    ],
  },

  it: {
    chicken: [
      {
        q: 'Quanto si riduce il petto di pollo in cottura?',
        a: 'Il petto di pollo perde circa il 28% del peso in cottura: 200 g crudi danno all’incirca 144 g cotti. La resa cambia leggermente secondo il metodo: al forno o arrosto = 72%, alla griglia = 70%, bollito o in camicia = 77%, in padella = 72% (dati USDA).',
      },
      {
        q: 'I macro del pollo si contano da crudo o da cotto?',
        a: 'Da crudo. I dati nutrizionali USDA e la maggior parte delle etichette sono misurati sul pollo crudo: è quindi il peso da crudo a corrispondere a quei numeri — registra quello, oppure riporta prima il peso da cotto a crudo. Questo calcolatore ricava sempre i macro dall’equivalente in peso da crudo, in qualunque direzione tu stia convertendo.',
      },
      {
        q: 'Perché il pollo perde peso in cottura?',
        a: 'È l’acqua che se ne va. Il petto di pollo è composto per circa il 70–75% di acqua; il calore denatura e contrae le proteine, che spingono quell’umidità fuori dalle fibre muscolari, e una parte del grasso si scioglie — insieme, è la perdita di circa il 28%. Le proteine restano sostanzialmente intatte, quindi ti ritrovi gli stessi nutrienti concentrati in un pezzo più piccolo e denso.',
      },
      {
        q: 'Quanto peso perde il petto di pollo in cottura?',
        a: 'Circa il 28%: 100 g di petto di pollo crudo scendono a circa 72 g da cotti, una resa USDA del 72%. Varia un po’ secondo il metodo: al forno o arrosto conserva circa il 72%, alla griglia circa il 70%, bollito o in camicia circa il 77%, in padella circa il 72%. Usa il selettore del metodo di cottura nel calcolatore qui sopra per un risultato specifico.',
      },
      {
        q: 'Il metodo di cottura fa davvero differenza?',
        a: 'Sì. Un calore più alto e più secco — come quello della griglia — fa evaporare più umidità dalla superficie rispetto ai metodi a calore umido come la bollitura o la cottura in camicia. Per questo il petto grigliato ha una resa intorno al 70%, mentre bollito o in camicia trattiene più umidità e arriva al 77%. Anche sette punti percentuali di scarto sono una differenza reale sul peso che dovresti registrare.',
      },
      {
        q: 'Come riporto il peso del pollo da cotto a crudo?',
        a: 'Dividi il peso da cotto per la resa espressa in decimali, secondo il metodo usato. Per il petto di pollo al forno o arrosto: peso cotto ÷ 0,72. Alla griglia: ÷ 0,70. Bollito o in camicia: ÷ 0,77. Il selettore Cotto → Crudo nel calcolatore qui sopra lo fa automaticamente appena scegli il metodo di cottura.',
      },
      {
        q: 'Qual è il rapporto crudo-cotto del petto di pollo?',
        a: 'Circa 100:72 — 100 g di petto di pollo crudo danno circa 72 g al forno o arrosto. Il rapporto cambia un po’ secondo il metodo: alla griglia si avvicina a 100:70, mentre bollito o in camicia trattiene più umidità, intorno a 100:77.',
      },
      {
        q: 'Quanto pesa il pollo dopo la cottura?',
        a: '100 g di petto di pollo crudo pesano all’incirca 72 g dopo la cottura al forno o arrosto, sulla base della resa USDA del 72%. Alla griglia aspettati circa 70 g; bollito o in camicia circa 77 g; in padella circa 72 g. Inserisci il tuo peso di partenza nel calcolatore qui sopra per il risultato esatto del tuo metodo di cottura.',
      },
    ],
    grains: [
      {
        q: 'Bisogna pesare {food} da secco o dopo la cottura?',
        a: 'Da secco. I dati nutrizionali USDA sono misurati sul prodotto secco e non cotto, quindi pesa {food} da secco e registra quei macro — oppure inserisci qui uno dei due pesi e il calcolatore fa la conversione.',
      },
      {
        q: 'Di quanto aumenta il peso cuocendo {food}?',
        a: 'La resa è del {pct}%: cuocendo {food}, il peso si moltiplica per circa {mult} rispetto al peso da secco. 100 g da secco diventano all’incirca {pct} g da cotti.',
      },
      {
        q: 'Perché cuocendo {food} il peso aumenta invece di calare come nella carne?',
        a: 'Assorbe acqua. Il prodotto secco non ne contiene quasi, quindi durante la bollitura assorbe il liquido circostante e si gonfia fino a circa {mult} volte il peso da secco — il peso da cotto risulta nettamente superiore a quello da secco, non inferiore. La carne va nella direzione opposta perché contiene già molta acqua, che il calore fa uscire.',
      },
    ],
    rice: [
      {
        q: 'Quanto riso cotto si ottiene dal riso secco?',
        a: '100 g di riso bianco secco danno all’incirca 300 g di riso cotto: il peso triplica perché il riso assorbe acqua durante la cottura. Il dato si basa sulla resa USDA del 300% per il riso bianco. Quindi, se una ricetta richiede 300 g di riso cotto, partirai da circa 100 g da secco. Riso secco e riso cotto hanno densità caloriche per grammo molto diverse: ecco perché è importante far corrispondere il peso registrato alla voce giusta.',
      },
    ],
    generic: [
      {
        q: 'Quanto peso si perde cuocendo {food}?',
        a: 'La resa di cottura è del {pct}%: cuocendo {food} si perde il {loss}% del peso. Fonte: {source}.',
      },
      {
        q: 'Per {food}, i macro vanno contati da crudo o da cotto?',
        a: 'Da crudo. I valori nutrizionali USDA si basano sul peso da crudo, quindi registra il peso da crudo e calcola i macro da lì. Questo calcolatore ricava sempre i macro dall’equivalente in peso da crudo.',
      },
    ],
    spinach: [
      {
        q: 'Quanto si riducono gli spinaci in cottura?',
        a: 'In peso, solo il 23% circa: secondo i dati USDA la resa di cottura è del 77%, quindi 100 g di foglie crude diventano circa 77 g da cotte. In volume è tutta un’altra storia: una padella piena di foglie crude si riduce a una piccola manciata, ed è proprio lo scarto tra queste due impressioni a trarre in inganno. Appassendo, le foglie perdono l’aria e la struttura che le rendevano voluminose; l’acqua invece resta in gran parte. Se tieni traccia dei macro, pesa gli spinaci invece di giudicare da quanto si è ridotta la padella.',
      },
    ],
  },

  hi: {
    chicken: [
      {
        q: 'चिकन ब्रेस्ट पकाने पर कितना सिकुड़ता है?',
        a: 'चिकन ब्रेस्ट पकाने पर अपना करीब 28% वजन खो देता है, यानी 200g कच्चा ब्रेस्ट पकने पर लगभग 144g रह जाता है। यील्ड तरीके के हिसाब से थोड़ा बदलती है: बेक/रोस्ट = 72%, ग्रिल = 70%, उबला/पोच्ड = 77%, तवे पर तला = 72% (USDA डेटा)।',
      },
      {
        q: 'चिकन के मैक्रो कच्चे वजन पर गिनूं या पके पर?',
        a: 'कच्चे वजन पर। USDA का पोषण डेटा और ज्यादातर फूड लेबल कच्चे चिकन पर मापे जाते हैं, इसलिए उन आंकड़ों से जो मेल खाता है वह कच्चा वजन है — उसे दर्ज करें, या पहले अपने पके वजन को कच्चे में बदल लें। यह कैलकुलेटर किसी भी दिशा में बदलाव करने पर हमेशा कच्चे वजन के बराबर मान से मैक्रो निकालता है।',
      },
      {
        q: 'चिकन पकाने पर वजन क्यों खोता है?',
        a: 'इसमें से पानी निकल जाता है। चिकन ब्रेस्ट के वजन का करीब 70–75% हिस्सा पानी होता है; गर्मी प्रोटीन को विकृत करके सिकोड़ती है, जिससे वह नमी मांसपेशी रेशों से बाहर निकलती है, और कुछ चर्बी भी पिघल जाती है — दोनों मिलाकर यही करीब 28% वजन की कमी है। प्रोटीन खुद लगभग जस का तस रहता है, इसलिए उतना ही पोषण एक छोटे, ज्यादा सघन टुकड़े में सिमट जाता है।',
      },
      {
        q: 'चिकन ब्रेस्ट पकाने पर कितना वजन खोता है?',
        a: 'करीब 28%। 100g कच्चा चिकन ब्रेस्ट पकने पर घटकर करीब 72g रह जाता है, यानी USDA यील्ड 72%। तरीके के हिसाब से थोड़ा बदलता है: बेक या रोस्ट करीब 72%, ग्रिल करीब 70%, उबला या पोच्ड करीब 77%, और तवे पर तला करीब 72% बनाए रखता है। तरीके के हिसाब से नतीजे के लिए ऊपर कैलकुलेटर में पकाने का तरीका चुनें।',
      },
      {
        q: 'क्या पकाने के तरीके से सचमुच फर्क पड़ता है?',
        a: 'हां। ग्रिल जैसी तेज और सूखी गर्मी, उबालने या पोच करने जैसी नम विधियों की तुलना में सतह से ज्यादा नमी उड़ा देती है। इसीलिए ग्रिल किए चिकन ब्रेस्ट की यील्ड करीब 70% होती है, जबकि उबला या पोच्ड चिकन ज्यादा नमी रखकर 77% पर रहता है। यील्ड में 7 प्रतिशत अंक का अंतर भी, आपको दर्ज करने वाले वजन में असली फर्क है।',
      },
      {
        q: 'पके चिकन के वजन को वापस कच्चे में कैसे बदलूं?',
        a: 'आपने जो तरीका इस्तेमाल किया, उसकी यील्ड को दशमलव में लेकर पके वजन को उससे भाग दें। बेक या रोस्ट किए चिकन ब्रेस्ट के लिए: पका वजन ÷ 0.72। ग्रिल के लिए: ÷ 0.70। उबले या पोच्ड के लिए: ÷ 0.77। ऊपर कैलकुलेटर में "पका → कच्चा" चुनते ही, और पकाने का तरीका चुनते ही, यह अपने आप हो जाता है।',
      },
      {
        q: 'चिकन ब्रेस्ट का कच्चे से पके का अनुपात क्या है?',
        a: 'करीब 100:72 — 100g कच्चा चिकन ब्रेस्ट बेक या रोस्ट करने पर करीब 72g देता है। तरीके के हिसाब से अनुपात थोड़ा बदलता है: ग्रिल करने पर यह 100:70 के करीब पहुंचता है, जबकि उबालने या पोच करने पर ज्यादा नमी बचती है, करीब 100:77।',
      },
      {
        q: 'पकने के बाद चिकन का वजन कितना होता है?',
        a: 'USDA की 72% यील्ड के आधार पर, 100g कच्चा चिकन ब्रेस्ट बेक या रोस्ट करने के बाद करीब 72g रह जाता है। ग्रिल करें तो करीब 70g, उबालें या पोच करें तो करीब 77g, और तवे पर तलें तो करीब 72g। अपने शुरुआती वजन को ऊपर कैलकुलेटर में डालें और अपने तरीके के लिए सटीक नतीजा पाएं।',
      },
    ],
    grains: [
      {
        q: '{food} को सूखा तौलूं या पकाने के बाद?',
        a: 'सूखा। USDA का पोषण डेटा सूखे, बिना पके उत्पाद पर मापा जाता है, इसलिए {food} को सूखा तौलें और वही मैक्रो दर्ज करें — या यहां दोनों में से कोई भी वजन डालें, कैलकुलेटर बदलाव कर देगा।',
      },
      {
        q: '{food} पकाने पर वजन कितना बढ़ता है?',
        a: 'यील्ड {pct}% है: {food} पकाने पर वजन सूखे वजन का करीब {mult} गुना हो जाता है। 100g सूखा पकने पर लगभग {pct}g हो जाता है।',
      },
      {
        q: '{food} पकाने पर वजन मांस की तरह घटने के बजाय बढ़ता क्यों है?',
        a: 'यह पानी सोख लेता है। सूखे उत्पाद में लगभग पानी होता ही नहीं, इसलिए उबालने पर यह आसपास का तरल सोख लेता है और सूखे वजन का करीब {mult} गुना फूल जाता है — पका वजन सूखे वजन से काफी ज्यादा हो जाता है, कम नहीं। मांस उल्टी दिशा में जाता है क्योंकि उसमें पहले से बहुत पानी होता है जिसे गर्मी बाहर निकाल देती है।',
      },
    ],
    rice: [
      {
        q: 'सूखे चावल से कितना पका चावल बनता है?',
        a: '100g सूखे सफेद चावल से करीब 300g पका चावल बनता है — पकते समय पानी सोखने के कारण वजन तीन गुना हो जाता है। यह सफेद चावल के लिए USDA की 300% यील्ड पर आधारित है। यानी अगर किसी रेसिपी में 300g पका चावल चाहिए, तो आप करीब 100g सूखे से शुरू करेंगे। सूखे और पके चावल की प्रति ग्राम कैलोरी घनत्व बहुत अलग होती है, इसीलिए दर्ज किए वजन का सही प्रविष्टि से मेल खाना जरूरी है।',
      },
    ],
    generic: [
      {
        q: '{food} पकाने पर कितना वजन घटता है?',
        a: 'कुकिंग यील्ड {pct}% है: {food} पकाने पर वजन का {loss}% कम हो जाता है। स्रोत: {source}।',
      },
      {
        q: '{food} के मैक्रो कच्चे वजन पर गिनें या पके पर?',
        a: 'कच्चे वजन पर। USDA के पोषण मान कच्चे वजन पर आधारित होते हैं, इसलिए कच्चा वजन दर्ज करें और उसी से मैक्रो निकालें। यह कैलकुलेटर हमेशा कच्चे वजन के बराबर मान से मैक्रो निकालता है।',
      },
    ],
    spinach: [
      {
        q: 'पालक पकाने पर कितना सिकुड़ता है?',
        a: 'वजन के हिसाब से सिर्फ करीब 23%: USDA डेटा के अनुसार पालक की कुकिंग यील्ड 77% है, यानी 100g कच्चे पत्ते पकने पर करीब 77g रह जाते हैं। मात्रा के हिसाब से बात अलग है — कड़ाही भर कच्चे पत्ते सिकुड़कर एक छोटी मुट्ठी रह जाते हैं, और इन्हीं दो अलग-अलग प्रभावों का फर्क लोगों को भ्रमित करता है। मुरझाते समय वह हवा और बनावट निकलती है जो कच्चे पत्तों को भारी-भरकम दिखाती थी; पानी ज्यादातर भीतर ही रह जाता है। अगर आप मैक्रो ट्रैक करते हैं, तो कड़ाही कितनी सिकुड़ी यह देखने के बजाय पालक को तराजू पर तोलें।',
      },
    ],
  },
};

export function getHomeFaq(locale: Locale): FaqItem[] {
  return HOME_FAQ[locale] ?? HOME_FAQ.en;
}

export function getFoodFaqSet(locale: Locale): FoodFaqSet {
  return FOOD_FAQ[locale] ?? FOOD_FAQ.en;
}
