import type { Locale } from './ui';

/**
 * Homepage long-form sections: the conversion-formula explainer and the
 * closing article. Rendered identically on every locale's homepage.
 *
 * Strings ending in `Html` are injected with `set:html` and may contain
 * <strong> tags — no other markup.
 */

export interface HomeArticle {
  heading: string;
  intro: string;
  whyHeading: string;
  whyP1: string;
  whyP2: string;
  chickenHeading: string;
  chickenP1: string;
  chickenP2: string;
  beefHeading: string;
  beefP1: string;
  beefP2: string;
  riceHeading: string;
  riceP1: string;
  riceP2: string;
  usdaHeading: string;
  usdaP1: string;
}

export interface HomeSections {
  formulaHeading: string;
  formulaIntro: string;
  cookedEqRaw: string;
  rawEqCooked: string;
  yieldExpr: string;
  rtcExampleHtml: string;
  ctrExampleHtml: string;
  macroRuleLabel: string;
  macroPre: string;
  macroVar: string;
  macroPost: string;
  macroTextHtml: string;
  article: HomeArticle;
}

export const HOME: Record<Locale, HomeSections> = {
  en: {
    formulaHeading: 'How the conversion works',
    formulaIntro:
      'Every calculation uses a single yield percentage sourced from USDA data. The same two formulas apply to every food.',
    cookedEqRaw: 'cooked = raw ×',
    rawEqCooked: 'raw = cooked ÷',
    yieldExpr: '(yield% ÷ 100)',
    rtcExampleHtml:
      'Example: 200g raw chicken × 0.72 = <strong class="text-[var(--color-ink)]">144g cooked</strong>',
    ctrExampleHtml:
      'Example: 144g cooked chicken ÷ 0.72 = <strong class="text-[var(--color-ink)]">200g raw</strong>',
    macroRuleLabel: 'Macro calculation rule',
    macroPre: 'macros =',
    macroVar: '(raw_g ÷ 100)',
    macroPost: '× macros_per_100g_raw',
    macroTextHtml:
      'Macros are always derived from the <strong class="text-[var(--color-ink)]">raw weight equivalent</strong>, regardless of which direction you’re converting. USDA nutrition data is measured on raw food, so this keeps all macro outputs consistent with what’s on the label.',
    article: {
      heading: 'About This Raw to Cooked Weight Conversion Calculator',
      intro:
        'Cooked food rarely weighs what the raw food did: meat and fish lose 15–35% of their weight, while rice, pasta, and dried beans double or triple. This raw to cooked converter applies each food’s USDA yield percentage, so you enter either a raw or cooked weight and get the equivalent on the other side, plus accurate calories, protein, carbs, and fat for that amount. Most calorie databases — including USDA FoodData Central — publish macros for raw weights, but most people cook before eating; this closes that gap.',
      whyHeading: 'Why Raw Food and Cooked Food Weigh Differently',
      whyP1:
        'The reason raw food and cooked food have different weights comes down to moisture. When you cook meat, water evaporates and fat renders out — your cooked food ends up lighter than the raw food you started with. Grains and legumes do the opposite: they absorb water during boiling, so cooked food is heavier than the raw food going in.',
      whyP2:
        'This means you cannot use a single "gram = gram" assumption across your day. A raw to cooked weight conversion calculator solves that by applying each food’s specific yield percentage — the ratio of cooked weight to raw weight — which varies widely between foods. Chicken and beef lose around a quarter of their weight. Spinach loses only 23%, despite wilting to a fraction of its volume. White rice almost triples.',
      chickenHeading: 'Raw to Cooked Chicken Weight',
      chickenP1:
        'Boneless, skinless chicken breast loses approximately 28% of its weight when cooked — whether baked, grilled, or pan-fried — so 200g raw chicken becomes about 144g cooked. It is probably the most important conversion for anyone tracking protein, since the raw and cooked numbers differ enough to distort a daily total.',
      chickenP2:
        'The practical consequence: if you weigh your chicken after cooking and log it as 144g against a raw-weight nutrition label, you will be tracking the macros for only 144g raw — undercounting by 56g. The correct approach is either to weigh raw before cooking, or use a raw to cooked calculator to convert the cooked weight back to its raw equivalent before logging.',
      beefHeading: 'Ground Beef Raw to Cooked Weight',
      beefP1:
        'Standard 80/20 ground beef loses roughly 27% of its weight when cooked — both water and fat render out — so a 200g raw portion yields about 146g cooked. The exact figure tracks fat content: leaner 90/10 ground beef loses only 18–20%, because there is less fat to render.',
      beefP2:
        'This raw to cooked meat weight conversion calculator uses an 80/20 default for ground beef, matching USDA-measured yield data for the most common retail fat percentage.',
      riceHeading: 'Raw to Cooked Rice Ratio',
      riceP1:
        'Dry white rice roughly triples in weight when cooked — 100g dry becomes about 300g cooked, a 300% USDA yield — which runs opposite to meat. That means a 300g bowl of cooked rice contains only the calories of 100g dry, which surprises many people who assume cooked and dry rice have the same calorie density per gram.',
      riceP2:
        'Using an accurate raw to cooked calculator for rice is especially important because the error compounds quickly. If you eat two cups of cooked rice daily and log the cooked weight against a dry-weight label, you will be significantly overestimating the calorie content of that food.',
      usdaHeading: 'Built on Official USDA Data',
      usdaP1:
        'Every yield figure powering this raw to cooked converter comes from official USDA sources — the same databases used by dietitians, food manufacturers, and health researchers. Meat and poultry yields come from the USDA Table of Cooking Yields for Meat and Poultry. Grain and vegetable yields come from USDA Agriculture Handbook No. 102 and from comparing raw and cooked entries in USDA FoodData Central. This makes our raw to cooked calculator more reliable than fitness apps that use crowdsourced estimates or unverified averages. Whether you are converting raw to cooked chicken weight, checking ground beef raw to cooked weight, or working out the raw to cooked rice ratio, every answer here is anchored in published, peer-reviewed science.',
    },
  },

  es: {
    formulaHeading: 'Cómo funciona la conversión',
    formulaIntro:
      'Cada cálculo se basa en un único porcentaje de rendimiento tomado de los datos del USDA. Las mismas dos fórmulas valen para todos los alimentos.',
    cookedEqRaw: 'cocido = crudo ×',
    rawEqCooked: 'crudo = cocido ÷',
    yieldExpr: '(rendimiento % ÷ 100)',
    rtcExampleHtml:
      'Ejemplo: 200 g de pollo crudo × 0,72 = <strong class="text-[var(--color-ink)]">144 g cocido</strong>',
    ctrExampleHtml:
      'Ejemplo: 144 g de pollo cocido ÷ 0,72 = <strong class="text-[var(--color-ink)]">200 g crudo</strong>',
    macroRuleLabel: 'Regla de cálculo de macros',
    macroPre: 'macros =',
    macroVar: '(gramos_crudo ÷ 100)',
    macroPost: '× macros_por_100g_crudo',
    macroTextHtml:
      'Los macros siempre se derivan del <strong class="text-[var(--color-ink)]">peso equivalente en crudo</strong>, sin importar en qué dirección conviertas. Los datos nutricionales del USDA se miden sobre el alimento crudo, así que de esta forma todos los macros coinciden con lo que dice la etiqueta.',
    article: {
      heading: 'Sobre esta calculadora de conversión de peso crudo a cocido',
      intro:
        'La comida cocida rara vez pesa lo que pesaba en crudo: la carne y el pescado pierden entre el 15% y el 35% de su peso, mientras que el arroz, la pasta y las legumbres secas lo duplican o triplican. Este conversor de crudo a cocido aplica el porcentaje de rendimiento del USDA de cada alimento, así que introduces el peso en crudo o en cocido y obtienes el equivalente del otro lado, junto con las calorías, proteínas, carbohidratos y grasas exactas de esa cantidad. La mayoría de las bases de datos de calorías —incluida USDA FoodData Central— publican los macros según el peso crudo, pero casi todo el mundo cocina antes de comer; esto salva esa diferencia.',
      whyHeading: 'Por qué el alimento crudo y el cocido pesan distinto',
      whyP1:
        'La razón de que el alimento crudo y el cocido pesen distinto está en el agua. Cuando cocinas carne, el agua se evapora y la grasa se derrite, así que el alimento cocido acaba pesando menos que el crudo del que partiste. Los cereales y las legumbres hacen justo lo contrario: absorben agua al hervir, de modo que el alimento cocido pesa más que el crudo que metiste en la olla.',
      whyP2:
        'Esto significa que no puedes aplicar un simple «gramo = gramo» durante todo el día. Una calculadora de conversión de peso crudo a cocido lo resuelve aplicando el porcentaje de rendimiento específico de cada alimento —la proporción entre el peso cocido y el crudo—, que varía muchísimo de un alimento a otro. El pollo y la res pierden alrededor de una cuarta parte de su peso. La espinaca solo pierde el 23%, aunque se reduzca a una fracción de su volumen. El arroz blanco casi lo triplica.',
      chickenHeading: 'Peso del pollo de crudo a cocido',
      chickenP1:
        'La pechuga de pollo sin piel ni hueso pierde aproximadamente el 28% de su peso al cocinarse —ya sea al horno, a la parrilla o a la sartén—, así que 200 g de pollo crudo se quedan en unos 144 g cocidos. Es probablemente la conversión más importante para quien controla su proteína, porque las cifras en crudo y en cocido se separan lo suficiente como para desviar el total del día.',
      chickenP2:
        'La consecuencia práctica: si pesas el pollo después de cocinarlo y registras 144 g contra una etiqueta nutricional en crudo, estarás contando los macros de solo 144 g crudos y te faltarán 56 g. Lo correcto es pesarlo en crudo antes de cocinarlo, o usar una calculadora de crudo a cocido para convertir el peso cocido a su equivalente en crudo antes de registrarlo.',
      beefHeading: 'Peso de la carne molida de crudo a cocido',
      beefP1:
        'La carne molida estándar 80/20 pierde en torno al 27% de su peso al cocinarse —se van tanto el agua como la grasa—, así que una porción de 200 g en crudo da unos 146 g cocidos. La cifra exacta sigue al contenido de grasa: la carne más magra 90/10 pierde solo entre un 18% y un 20%, porque tiene menos grasa que soltar.',
      beefP2:
        'Esta calculadora de conversión de peso de carne de crudo a cocido usa 80/20 como valor por defecto para la carne molida, en línea con los datos de rendimiento medidos por el USDA para el porcentaje de grasa más habitual en tiendas.',
      riceHeading: 'Proporción del arroz de crudo a cocido',
      riceP1:
        'El arroz blanco seco casi triplica su peso al cocerse: 100 g en seco se convierten en unos 300 g cocidos, un rendimiento USDA del 300%, justo al revés que la carne. Eso significa que un plato de 300 g de arroz cocido aporta solo las calorías de 100 g en seco, algo que sorprende a mucha gente que da por hecho que el arroz seco y el cocido tienen la misma densidad calórica por gramo.',
      riceP2:
        'Usar una calculadora precisa de crudo a cocido para el arroz es especialmente importante porque el error se acumula rápido. Si comes dos tazas de arroz cocido al día y registras el peso cocido contra una etiqueta en seco, estarás sobrestimando muchísimo las calorías de ese alimento.',
      usdaHeading: 'Basada en datos oficiales del USDA',
      usdaP1:
        'Cada cifra de rendimiento que usa este conversor de crudo a cocido procede de fuentes oficiales del USDA, las mismas bases de datos que utilizan dietistas, fabricantes de alimentos e investigadores en salud. Los rendimientos de carne y aves salen de la Tabla de Rendimientos de Cocción del USDA para Carne y Aves. Los de cereales y verduras salen del Manual de Agricultura n.º 102 del USDA y de comparar las entradas en crudo y en cocido de USDA FoodData Central. Eso hace que nuestra calculadora sea más fiable que las apps de fitness que se basan en estimaciones colaborativas o promedios sin verificar. Ya estés convirtiendo el peso del pollo de crudo a cocido, comprobando el de la carne molida o calculando la proporción del arroz, cada respuesta se apoya en ciencia publicada y revisada.',
    },
  },

  fr: {
    formulaHeading: 'Comment fonctionne la conversion',
    formulaIntro:
      'Chaque calcul repose sur un seul pourcentage de rendement issu des données de l’USDA. Les deux mêmes formules s’appliquent à tous les aliments.',
    cookedEqRaw: 'cuit = cru ×',
    rawEqCooked: 'cru = cuit ÷',
    yieldExpr: '(rendement % ÷ 100)',
    rtcExampleHtml:
      'Exemple : 200 g de poulet cru × 0,72 = <strong class="text-[var(--color-ink)]">144 g cuit</strong>',
    ctrExampleHtml:
      'Exemple : 144 g de poulet cuit ÷ 0,72 = <strong class="text-[var(--color-ink)]">200 g cru</strong>',
    macroRuleLabel: 'Règle de calcul des macros',
    macroPre: 'macros =',
    macroVar: '(grammes_cru ÷ 100)',
    macroPost: '× macros_pour_100g_cru',
    macroTextHtml:
      'Les macros sont toujours calculées à partir de l’<strong class="text-[var(--color-ink)]">équivalent en poids cru</strong>, quel que soit le sens de la conversion. Les données nutritionnelles de l’USDA sont mesurées sur l’aliment cru : les valeurs affichées restent donc cohérentes avec l’étiquette.',
    article: {
      heading: 'À propos de ce calculateur de conversion de poids cru-cuit',
      intro:
        'Un aliment cuit pèse rarement ce que pesait l’aliment cru : viandes et poissons perdent 15 à 35 % de leur poids, tandis que riz, pâtes et légumes secs doublent ou triplent. Ce convertisseur cru-cuit applique le pourcentage de rendement USDA propre à chaque aliment : vous saisissez un poids cru ou cuit et obtenez l’équivalent de l’autre côté, avec les calories, protéines, glucides et lipides exacts pour cette quantité. La plupart des bases de données caloriques — y compris USDA FoodData Central — publient les macros pour le poids cru, alors que presque tout le monde cuisine avant de manger ; c’est cet écart que le calculateur comble.',
      whyHeading: 'Pourquoi un aliment cru et un aliment cuit ne pèsent pas pareil',
      whyP1:
        'Si un aliment cru et un aliment cuit n’ont pas le même poids, c’est une question d’eau. Quand vous cuisez de la viande, l’eau s’évapore et la graisse fond : l’aliment cuit est plus léger que l’aliment cru de départ. Les céréales et les légumineuses font l’inverse : elles absorbent l’eau à la cuisson, si bien que l’aliment cuit est plus lourd que l’aliment cru mis dans la casserole.',
      whyP2:
        'Vous ne pouvez donc pas appliquer un simple « gramme = gramme » tout au long de la journée. Un calculateur de conversion de poids cru-cuit règle le problème en appliquant le pourcentage de rendement propre à chaque aliment — le rapport entre le poids cuit et le poids cru —, qui varie énormément d’un produit à l’autre. Le poulet et le bœuf perdent environ un quart de leur poids. Les épinards n’en perdent que 23 %, alors même qu’ils réduisent à une fraction de leur volume. Le riz blanc, lui, triple presque.',
      chickenHeading: 'Poids du poulet cru-cuit',
      chickenP1:
        'Le blanc de poulet sans peau ni os perd environ 28 % de son poids à la cuisson — au four, grillé ou poêlé —, si bien que 200 g de poulet cru donnent environ 144 g cuits. C’est sans doute la conversion la plus importante pour qui suit ses apports en protéines, car les valeurs crue et cuite s’écartent assez pour fausser un total sur la journée.',
      chickenP2:
        'La conséquence concrète : si vous pesez votre poulet après cuisson et enregistrez 144 g face à une étiquette exprimée en poids cru, vous ne comptabilisez que les macros de 144 g crus — soit 56 g de moins que la réalité. La bonne méthode consiste à peser cru avant cuisson, ou à utiliser un calculateur cru-cuit pour reconvertir le poids cuit en son équivalent cru avant de l’enregistrer.',
      beefHeading: 'Poids du bœuf haché cru-cuit',
      beefP1:
        'Le bœuf haché classique 80/20 perd environ 27 % de son poids à la cuisson — l’eau et la graisse s’en échappent —, si bien qu’une portion de 200 g crue donne environ 146 g cuits. Le chiffre exact suit la teneur en matières grasses : le bœuf plus maigre 90/10 ne perd que 18 à 20 %, faute de gras à faire fondre.',
      beefP2:
        'Ce calculateur de conversion de poids de viande cru-cuit retient le 80/20 par défaut pour le bœuf haché, conformément aux rendements mesurés par l’USDA pour la teneur en matières grasses la plus courante en magasin.',
      riceHeading: 'Rapport riz cru-cuit',
      riceP1:
        'Le riz blanc sec triple presque de poids à la cuisson : 100 g de riz sec deviennent près de 300 g cuits, un rendement USDA de 300 %, à l’inverse de la viande. Un bol de 300 g de riz cuit ne contient donc que les calories de 100 g de riz sec, ce qui surprend beaucoup de gens persuadés que riz sec et riz cuit ont la même densité calorique au gramme.',
      riceP2:
        'Utiliser un calculateur cru-cuit fiable pour le riz est d’autant plus important que l’erreur s’accumule vite. Si vous mangez deux bols de riz cuit par jour et enregistrez le poids cuit face à une étiquette exprimée en poids sec, vous surestimerez très largement l’apport calorique de cet aliment.',
      usdaHeading: 'Fondé sur les données officielles de l’USDA',
      usdaP1:
        'Chaque rendement utilisé par ce convertisseur cru-cuit provient de sources officielles de l’USDA — les bases de données auxquelles se réfèrent diététiciens, industriels de l’agroalimentaire et chercheurs en santé. Les rendements des viandes et volailles viennent de la Table des rendements de cuisson de l’USDA pour la viande et la volaille. Ceux des céréales et des légumes proviennent du Manuel agricole n° 102 de l’USDA et de la comparaison des entrées crues et cuites de USDA FoodData Central. Notre calculateur est donc plus fiable que les applications de fitness fondées sur des estimations collaboratives ou des moyennes non vérifiées. Que vous convertissiez le poids du poulet cru en cuit, que vous vérifiiez celui du bœuf haché ou que vous calculiez le rapport riz cru-cuit, chaque réponse s’appuie ici sur des données publiées et validées.',
    },
  },

  de: {
    formulaHeading: 'So funktioniert die Umrechnung',
    formulaIntro:
      'Jede Berechnung beruht auf einem einzigen Ausbeutewert aus den USDA-Daten. Dieselben zwei Formeln gelten für jedes Lebensmittel.',
    cookedEqRaw: 'gegart = roh ×',
    rawEqCooked: 'roh = gegart ÷',
    yieldExpr: '(Ausbeute % ÷ 100)',
    rtcExampleHtml:
      'Beispiel: 200 g rohes Hähnchen × 0,72 = <strong class="text-[var(--color-ink)]">144 g gegart</strong>',
    ctrExampleHtml:
      'Beispiel: 144 g gegartes Hähnchen ÷ 0,72 = <strong class="text-[var(--color-ink)]">200 g roh</strong>',
    macroRuleLabel: 'Regel zur Makroberechnung',
    macroPre: 'Makros =',
    macroVar: '(Gramm_roh ÷ 100)',
    macroPost: '× Makros_pro_100g_roh',
    macroTextHtml:
      'Die Makros werden immer aus dem <strong class="text-[var(--color-ink)]">Rohgewichts-Äquivalent</strong> abgeleitet, egal in welche Richtung du umrechnest. Die USDA-Nährwerte beziehen sich auf rohe Lebensmittel — so bleiben alle Makroangaben mit dem Etikett vergleichbar.',
    article: {
      heading: 'Über diesen Rechner für die Umrechnung von Roh- und Gargewicht',
      intro:
        'Gegartes Essen wiegt selten das, was das rohe wog: Fleisch und Fisch verlieren 15 bis 35 % ihres Gewichts, während Reis, Nudeln und getrocknete Hülsenfrüchte sich verdoppeln oder verdreifachen. Dieser Roh-zu-gegart-Umrechner setzt für jedes Lebensmittel dessen eigene USDA-Ausbeute an: Du gibst ein rohes oder gegartes Gewicht ein und erhältst den Gegenwert der anderen Seite, samt exakter Kalorien, Proteine, Kohlenhydrate und Fette für diese Menge. Die meisten Kaloriendatenbanken — auch USDA FoodData Central — geben Makros für das Rohgewicht an, gegessen wird aber meist gegart; genau diese Lücke schließt der Rechner.',
      whyHeading: 'Warum rohe und gegarte Lebensmittel unterschiedlich wiegen',
      whyP1:
        'Der Grund liegt im Wasser. Beim Garen von Fleisch verdunstet Wasser und Fett brät aus — das gegarte Lebensmittel ist am Ende leichter als das rohe, mit dem du angefangen hast. Getreide und Hülsenfrüchte verhalten sich genau umgekehrt: Sie nehmen beim Kochen Wasser auf, sodass das gegarte Lebensmittel schwerer ist als das rohe, das in den Topf kam.',
      whyP2:
        'Ein pauschales „Gramm = Gramm“ funktioniert deshalb über den Tag hinweg nicht. Ein Rechner für die Umrechnung von Roh- und Gargewicht löst das, indem er die jeweils eigene Ausbeute eines Lebensmittels ansetzt — das Verhältnis von Gar- zu Rohgewicht —, und die fällt sehr unterschiedlich aus. Hähnchen und Rind verlieren rund ein Viertel ihres Gewichts. Spinat verliert nur 23 %, obwohl er auf einen Bruchteil seines Volumens zusammenfällt. Weißer Reis verdreifacht sich fast.',
      chickenHeading: 'Hähnchen: Roh- und Gargewicht',
      chickenP1:
        'Hähnchenbrust ohne Haut und Knochen verliert beim Garen etwa 28 % ihres Gewichts — ob im Ofen, vom Grill oder aus der Pfanne —, aus 200 g rohem Hähnchen werden also rund 144 g gegart. Für alle, die Protein tracken, ist das wohl die wichtigste Umrechnung, denn Roh- und Garwert liegen weit genug auseinander, um einen Tagesgesamtwert zu verzerren.',
      chickenP2:
        'Praktisch heißt das: Wiegst du dein Hähnchen erst nach dem Garen und trägst 144 g gegen ein Etikett mit Rohwerten ein, erfasst du nur die Makros von 144 g roh — 56 g zu wenig. Richtig ist, vor dem Garen roh zu wiegen oder das Gargewicht mit einem Roh-zu-gegart-Rechner in sein Rohäquivalent zurückzurechnen, bevor du es einträgst.',
      beefHeading: 'Hackfleisch: Roh- und Gargewicht',
      beefP1:
        'Übliches Hackfleisch mit 80/20 verliert beim Garen etwa 27 % seines Gewichts — Wasser und Fett treten aus —, aus 200 g roh werden also rund 146 g gegart. Der genaue Wert folgt dem Fettanteil: Mageres Hackfleisch mit 90/10 verliert nur 18 bis 20 %, weil weniger Fett ausbraten kann.',
      beefP2:
        'Dieser Rechner für die Umrechnung von Roh- und Gargewicht bei Fleisch verwendet für Hackfleisch standardmäßig 80/20 — passend zu den vom USDA gemessenen Ausbeuten für den im Handel gängigsten Fettanteil.',
      riceHeading: 'Reis: Verhältnis roh zu gegart',
      riceP1:
        'Trockener weißer Reis verdreifacht beim Garen fast sein Gewicht: Aus 100 g trocken werden rund 300 g gekocht, eine USDA-Ausbeute von 300 % — genau andersherum als beim Fleisch. Eine Portion von 300 g gekochtem Reis enthält damit nur die Kalorien von 100 g trocken, was viele überrascht, die von der gleichen Kaloriendichte pro Gramm ausgehen.',
      riceP2:
        'Gerade beim Reis lohnt sich ein genauer Roh-zu-gegart-Rechner, weil sich der Fehler schnell summiert. Wer täglich zwei Schalen gekochten Reis isst und das Gargewicht gegen ein Etikett mit Trockenwerten einträgt, überschätzt dessen Kaloriengehalt erheblich.',
      usdaHeading: 'Auf offiziellen USDA-Daten aufgebaut',
      usdaP1:
        'Jeder Ausbeutewert hinter diesem Roh-zu-gegart-Umrechner stammt aus offiziellen USDA-Quellen — denselben Datenbanken, mit denen Ernährungsberatung, Lebensmittelhersteller und Gesundheitsforschung arbeiten. Die Werte für Fleisch und Geflügel stammen aus der USDA-Tabelle der Garausbeuten für Fleisch und Geflügel. Die Werte für Getreide und Gemüse stammen aus dem USDA Agriculture Handbook Nr. 102 und aus dem Vergleich roher und gegarter Einträge in USDA FoodData Central. Das macht unseren Rechner verlässlicher als Fitness-Apps, die auf Community-Schätzungen oder ungeprüften Durchschnittswerten beruhen. Ob du Hähnchen von roh auf gegart umrechnest, das Gargewicht von Hackfleisch prüfst oder das Reisverhältnis bestimmst — jede Antwort hier stützt sich auf veröffentlichte, geprüfte Daten.',
    },
  },

  pt: {
    formulaHeading: 'Como funciona a conversão',
    formulaIntro:
      'Cada cálculo usa um único percentual de rendimento vindo dos dados do USDA. As mesmas duas fórmulas valem para todos os alimentos.',
    cookedEqRaw: 'cozido = cru ×',
    rawEqCooked: 'cru = cozido ÷',
    yieldExpr: '(rendimento % ÷ 100)',
    rtcExampleHtml:
      'Exemplo: 200 g de frango cru × 0,72 = <strong class="text-[var(--color-ink)]">144 g cozido</strong>',
    ctrExampleHtml:
      'Exemplo: 144 g de frango cozido ÷ 0,72 = <strong class="text-[var(--color-ink)]">200 g cru</strong>',
    macroRuleLabel: 'Regra de cálculo dos macros',
    macroPre: 'macros =',
    macroVar: '(gramas_cru ÷ 100)',
    macroPost: '× macros_por_100g_cru',
    macroTextHtml:
      'Os macros são sempre derivados do <strong class="text-[var(--color-ink)]">peso equivalente em cru</strong>, independentemente da direção da conversão. Os dados nutricionais do USDA são medidos no alimento cru, então assim tudo continua compatível com o que está no rótulo.',
    article: {
      heading: 'Sobre esta calculadora de conversão de peso cru para cozido',
      intro:
        'A comida cozida raramente pesa o que a crua pesava: carne e peixe perdem de 15% a 35% do peso, enquanto arroz, massas e leguminosas secas dobram ou triplicam. Este conversor de cru para cozido aplica o percentual de rendimento do USDA de cada alimento: você informa um peso cru ou cozido e obtém o equivalente do outro lado, junto com as calorias, proteínas, carboidratos e gorduras exatas daquela quantidade. A maioria das bases de dados de calorias — inclusive a USDA FoodData Central — publica os macros pelo peso cru, mas quase todo mundo cozinha antes de comer; é essa diferença que a calculadora fecha.',
      whyHeading: 'Por que alimento cru e cozido pesam diferente',
      whyP1:
        'A razão de o alimento cru e o cozido terem pesos diferentes está na água. Quando você cozinha carne, a água evapora e a gordura derrete — o alimento cozido acaba mais leve do que o cru com que você começou. Grãos e leguminosas fazem o contrário: absorvem água ao cozinhar, então o alimento cozido fica mais pesado do que o cru que entrou na panela.',
      whyP2:
        'Isso significa que não dá para aplicar um simples "grama = grama" ao longo do dia. Uma calculadora de conversão de peso cru para cozido resolve isso aplicando o percentual de rendimento específico de cada alimento — a razão entre o peso cozido e o cru —, que varia bastante de um item para outro. Frango e carne bovina perdem cerca de um quarto do peso. O espinafre perde apenas 23%, mesmo murchando até uma fração do seu volume. O arroz branco quase triplica.',
      chickenHeading: 'Peso do frango de cru para cozido',
      chickenP1:
        'O peito de frango sem pele e sem osso perde aproximadamente 28% do peso ao ser cozido — assado, grelhado ou frito na frigideira —, então 200 g de frango cru viram cerca de 144 g cozido. É provavelmente a conversão mais importante para quem controla a proteína, porque os números cru e cozido se afastam o suficiente para distorcer o total do dia.',
      chickenP2:
        'A consequência prática: se você pesa o frango depois de cozinhar e registra 144 g contra um rótulo em peso cru, estará contando os macros de apenas 144 g crus — 56 g a menos. O certo é pesar cru antes de cozinhar, ou usar uma calculadora de cru para cozido para converter o peso cozido de volta ao equivalente cru antes de registrar.',
      beefHeading: 'Peso da carne moída de cru para cozido',
      beefP1:
        'A carne moída padrão 80/20 perde cerca de 27% do peso ao ser cozida — saem tanto a água quanto a gordura —, então uma porção de 200 g crua rende cerca de 146 g cozida. O número exato acompanha o teor de gordura: a carne mais magra 90/10 perde apenas 18% a 20%, porque há menos gordura para derreter.',
      beefP2:
        'Esta calculadora de conversão de peso de carne de cru para cozido usa o padrão 80/20 para a carne moída, em linha com os rendimentos medidos pelo USDA para o teor de gordura mais comum no varejo.',
      riceHeading: 'Proporção do arroz de cru para cozido',
      riceP1:
        'O arroz branco seco quase triplica de peso ao cozinhar: 100 g secos viram cerca de 300 g cozido, um rendimento USDA de 300%, o oposto da carne. Isso quer dizer que uma porção de 300 g de arroz cozido tem apenas as calorias de 100 g seco, o que surpreende muita gente que imagina que arroz seco e cozido têm a mesma densidade calórica por grama.',
      riceP2:
        'Usar uma calculadora precisa de cru para cozido no caso do arroz é especialmente importante porque o erro se acumula rápido. Se você come duas xícaras de arroz cozido por dia e registra o peso cozido contra um rótulo em peso seco, vai superestimar bastante as calorias desse alimento.',
      usdaHeading: 'Construída sobre dados oficiais do USDA',
      usdaP1:
        'Cada número de rendimento por trás deste conversor de cru para cozido vem de fontes oficiais do USDA — as mesmas bases usadas por nutricionistas, indústrias de alimentos e pesquisadores da área da saúde. Os rendimentos de carnes e aves vêm da Tabela de Rendimentos de Cocção do USDA para Carnes e Aves. Os de grãos e vegetais vêm do Manual de Agricultura n.º 102 do USDA e da comparação das entradas cruas e cozidas na USDA FoodData Central. Isso torna nossa calculadora mais confiável do que aplicativos de fitness baseados em estimativas colaborativas ou médias não verificadas. Seja convertendo o peso do frango de cru para cozido, conferindo o da carne moída ou calculando a proporção do arroz, cada resposta aqui está ancorada em ciência publicada e revisada.',
    },
  },

  ja: {
    formulaHeading: '換算の仕組み',
    formulaIntro:
      'すべての計算は、USDAデータに基づく1つの歩留まり率だけを使います。どの食材にも同じ2つの式が当てはまります。',
    cookedEqRaw: '加熱後 = 生 ×',
    rawEqCooked: '生 = 加熱後 ÷',
    yieldExpr: '(歩留まり% ÷ 100)',
    rtcExampleHtml:
      '例: 生の鶏肉200g × 0.72 = <strong class="text-[var(--color-ink)]">加熱後144g</strong>',
    ctrExampleHtml:
      '例: 加熱後の鶏肉144g ÷ 0.72 = <strong class="text-[var(--color-ink)]">生200g</strong>',
    macroRuleLabel: '栄養素の計算ルール',
    macroPre: '栄養素 =',
    macroVar: '(生g ÷ 100)',
    macroPost: '× 生100gあたりの栄養素',
    macroTextHtml:
      '栄養素はどちら向きに換算した場合でも、必ず<strong class="text-[var(--color-ink)]">生の重量に換算した値</strong>から算出します。USDAの栄養データは生の状態で測定されているため、この方式なら表示される栄養素が常に食品表示と一致します。',
    article: {
      heading: 'この生・加熱後の重量換算計算機について',
      intro:
        '加熱した食べ物が生のときと同じ重さになることはめったにありません。肉と魚は重量の15〜35%を失い、米・パスタ・乾燥豆は2〜3倍になります。この生・加熱後コンバーターは食材ごとのUSDA歩留まりを当てはめるので、生でも加熱後でも重量を入力すれば、もう一方の重量と、その分量に対応する正確なカロリー・タンパク質・炭水化物・脂質が分かります。USDA FoodData Centralを含むほとんどのカロリーデータベースは生の重量で栄養素を掲載していますが、多くの人は加熱してから食べます。この計算機はそのズレを埋めます。',
      whyHeading: '生の食品と加熱後の食品で重さが変わる理由',
      whyP1:
        '生と加熱後で重さが違う理由は水分にあります。肉を加熱すると水分が蒸発し脂も落ちるため、加熱後は元の生の状態より軽くなります。穀物や豆類は逆で、茹でる間に水を吸うため、鍋に入れた生の状態より加熱後のほうが重くなります。',
      whyP2:
        'つまり、1日を通して「1gは1g」という前提は使えません。生・加熱後の重量換算計算機は、食材ごとに固有の歩留まり率——加熱後重量と生重量の比——を当てはめることでこれを解決します。この比率は食材によって大きく異なります。鶏肉や牛肉は重量の約4分の1を失い、ほうれん草はかさが大きく減るわりに重量は23%しか失わず、白米はほぼ3倍になります。',
      chickenHeading: '鶏肉の生・加熱後の重量',
      chickenP1:
        '皮なし骨なしの鶏胸肉は、オーブン焼き・グリル・フライパン焼きのいずれでも加熱すると約28%の重量を失うため、生200gの鶏肉は加熱後およそ144gになります。タンパク質を管理する人にとっておそらく最も重要な換算です。生と加熱後の数値は、1日の合計を狂わせるほど離れているからです。',
      chickenP2:
        '実務上の影響はこうです。加熱後に鶏肉を量って144gとして記録し、それを生重量基準の栄養表示に当てはめると、生144g分の栄養しか計上されず、56g分を取りこぼします。正しいやり方は、加熱前に生で量るか、生・加熱後の計算機で加熱後重量を生重量に戻してから記録することです。',
      beefHeading: '合い挽き肉の生・加熱後の重量',
      beefP1:
        '標準的な80/20の合い挽き肉は、加熱すると水分と脂の両方が出て約27%の重量を失うため、生200gは加熱後およそ146gになります。正確な数値は脂肪率によって変わり、より赤身の多い90/10では落ちる脂が少ないぶん18〜20%の減少にとどまります。',
      beefP2:
        'この生・加熱後の食肉重量換算計算機は、合い挽き肉の既定値として80/20を採用しています。これは小売で最も一般的な脂肪率について、USDAが実測した歩留まりデータに合わせたものです。',
      riceHeading: '米の生・加熱後の比率',
      riceP1:
        '乾燥した白米は炊くとほぼ3倍の重量になります。乾燥100gが炊き上がりで約300g、USDA歩留まり300%で、肉とは逆方向です。つまり炊いたご飯300gに含まれるカロリーは乾燥100g分だけであり、乾燥米と炊いた米で1gあたりのカロリー密度が同じだと思っていた人には意外な事実です。',
      riceP2:
        '米では誤差が積み上がるのが速いため、正確な生・加熱後の計算機を使う意味がとりわけ大きくなります。毎日茶碗2杯の炊いた米を食べ、その加熱後重量を乾燥重量基準の表示に当てはめて記録していれば、その分のカロリーを大幅に過大評価することになります。',
      usdaHeading: 'USDAの公式データに基づいています',
      usdaP1:
        'この生・加熱後コンバーターを支える歩留まりの数値はすべて、USDAの公式データ——管理栄養士、食品メーカー、健康分野の研究者が使うのと同じデータベース——に基づいています。食肉と鶏肉の歩留まりはUSDAの食肉・鶏肉調理歩留まり表から、穀物と野菜の歩留まりはUSDA農業ハンドブック第102号、およびUSDA FoodData Centralの生と加熱後のデータの比較から求めています。そのため、利用者の投稿による推定値や未検証の平均値に頼るフィットネスアプリよりも信頼できます。鶏肉の生から加熱後への換算でも、合い挽き肉の重量確認でも、米の比率の計算でも、ここでの答えはすべて公表・査読済みのデータに基づいています。',
    },
  },

  ko: {
    formulaHeading: '변환 방식',
    formulaIntro:
      '모든 계산은 USDA 데이터에서 가져온 하나의 수율 값만 사용합니다. 어떤 식품이든 아래 두 공식이 똑같이 적용됩니다.',
    cookedEqRaw: '조리 후 = 생 ×',
    rawEqCooked: '생 = 조리 후 ÷',
    yieldExpr: '(수율 % ÷ 100)',
    rtcExampleHtml:
      '예: 생닭 200g × 0.72 = <strong class="text-[var(--color-ink)]">조리 후 144g</strong>',
    ctrExampleHtml:
      '예: 조리된 닭고기 144g ÷ 0.72 = <strong class="text-[var(--color-ink)]">생 200g</strong>',
    macroRuleLabel: '영양소 계산 규칙',
    macroPre: '영양소 =',
    macroVar: '(생중량_g ÷ 100)',
    macroPost: '× 생 100g당 영양소',
    macroTextHtml:
      '영양소는 변환 방향과 관계없이 항상 <strong class="text-[var(--color-ink)]">생중량 기준</strong>으로 계산됩니다. USDA 영양 데이터가 생 식품을 기준으로 측정되기 때문에, 이렇게 해야 표시되는 값이 영양성분표와 일치합니다.',
    article: {
      heading: '생·조리 중량 변환 계산기 안내',
      intro:
        '조리한 음식이 생일 때와 같은 무게가 되는 일은 드뭅니다. 고기와 생선은 무게의 15~35%를 잃고, 쌀·파스타·마른 콩류는 두세 배가 됩니다. 이 생·조리 변환기는 식품마다 다른 USDA 수율을 적용하므로, 생이든 조리 후든 중량을 입력하면 반대편 중량과 그 분량에 해당하는 정확한 칼로리·단백질·탄수화물·지방을 알려 줍니다. USDA FoodData Central을 비롯한 대부분의 칼로리 데이터베이스는 생 중량으로 영양소를 표기하지만, 거의 모든 사람은 조리한 뒤에 먹습니다. 이 계산기가 그 간극을 메웁니다.',
      whyHeading: '생 식품과 조리된 식품의 무게가 다른 이유',
      whyP1:
        '생 식품과 조리된 식품의 무게가 다른 이유는 수분입니다. 고기를 익히면 물이 증발하고 지방이 빠져나가므로, 조리된 식품은 처음의 생 식품보다 가벼워집니다. 곡물과 콩류는 반대입니다. 삶는 동안 물을 흡수하기 때문에 냄비에 넣은 생 재료보다 조리 후가 더 무겁습니다.',
      whyP2:
        '따라서 하루 종일 "1g은 1g"이라는 가정을 그대로 쓸 수는 없습니다. 생·조리 중량 변환 계산기는 식품마다 다른 고유 수율 — 조리 후 중량과 생 중량의 비율 — 을 적용해 이 문제를 해결합니다. 이 값은 식품에 따라 크게 달라집니다. 닭고기와 소고기는 무게의 약 4분의 1을 잃고, 시금치는 부피가 크게 줄어드는 것과 달리 무게는 23%만 잃으며, 백미는 거의 세 배가 됩니다.',
      chickenHeading: '닭고기 생·조리 중량',
      chickenP1:
        '껍질과 뼈를 제거한 닭 가슴살은 오븐에 굽든, 직화로 굽든, 팬에 굽든 조리하면 약 28%의 무게가 줄어들어, 생 200g이 조리 후 약 144g이 됩니다. 단백질을 관리하는 사람에게는 아마 가장 중요한 변환입니다. 생 중량과 조리 후 중량의 차이가 하루 총량을 왜곡할 만큼 크기 때문입니다.',
      chickenP2:
        '실제로 어떤 일이 생기냐면, 조리한 뒤 닭고기를 재서 144g으로 기록하고 이를 생중량 기준 영양성분표에 대입하면 생 144g 분량의 영양소만 계산되어 56g만큼 빠집니다. 올바른 방법은 조리 전에 생으로 재거나, 생·조리 계산기로 조리 후 중량을 생중량으로 되돌린 뒤 기록하는 것입니다.',
      beefHeading: '다진 소고기 생·조리 중량',
      beefP1:
        '일반적인 80/20 다진 소고기는 조리 중 물과 지방이 모두 빠져나가 약 27%의 무게가 줄어들어, 생 200g이 조리 후 약 146g이 됩니다. 정확한 수치는 지방 함량을 따라가며, 지방이 적은 90/10은 녹아 나올 지방이 적어 18~20%만 줄어듭니다.',
      beefP2:
        '이 생·조리 육류 중량 변환 계산기는 다진 소고기의 기본값으로 80/20을 사용합니다. 소매에서 가장 흔한 지방 비율에 대해 USDA가 실측한 수율 데이터에 맞춘 값입니다.',
      riceHeading: '쌀의 생·조리 비율',
      riceP1:
        '마른 백미는 익히면 무게가 거의 세 배가 됩니다. 마른 쌀 100g이 조리 후 약 300g, USDA 수율 300%로, 고기와는 정반대입니다. 즉 조리된 밥 300g에는 마른 쌀 100g만큼의 열량만 들어 있으며, 마른 쌀과 지은 밥의 g당 열량 밀도가 같다고 생각한 사람에게는 뜻밖의 사실입니다.',
      riceP2:
        '쌀은 오차가 빠르게 쌓이기 때문에 정확한 생·조리 계산기를 쓰는 것이 특히 중요합니다. 매일 밥 두 공기를 먹으면서 조리 후 중량을 마른 중량 기준 표시에 대입해 기록한다면, 그 식품의 열량을 상당히 과대평가하게 됩니다.',
      usdaHeading: 'USDA 공식 데이터를 기반으로',
      usdaP1:
        '이 생·조리 변환기를 뒷받침하는 모든 수율 수치는 USDA 공식 자료 — 영양사, 식품 제조사, 보건 연구자가 사용하는 것과 같은 데이터베이스 — 에서 나옵니다. 육류와 가금류 수율은 USDA 육류·가금류 조리 수율표에서 가져왔고, 곡물과 채소 수율은 USDA 농업 핸드북 제102호와 USDA FoodData Central의 생·조리 항목 비교에서 산출했습니다. 그래서 이용자 제보 추정치나 검증되지 않은 평균값에 의존하는 피트니스 앱보다 신뢰할 수 있습니다. 닭고기의 생·조리 중량을 변환하든, 다진 소고기의 중량을 확인하든, 쌀의 비율을 따지든, 여기서 나오는 모든 답은 공개·검증된 데이터에 근거합니다.',
    },
  },

  it: {
    formulaHeading: 'Come funziona la conversione',
    formulaIntro:
      'Ogni calcolo si basa su un unico valore di resa tratto dai dati USDA. Le stesse due formule valgono per qualsiasi alimento.',
    cookedEqRaw: 'cotto = crudo ×',
    rawEqCooked: 'crudo = cotto ÷',
    yieldExpr: '(resa % ÷ 100)',
    rtcExampleHtml:
      'Esempio: 200 g di pollo crudo × 0,72 = <strong class="text-[var(--color-ink)]">144 g cotto</strong>',
    ctrExampleHtml:
      'Esempio: 144 g di pollo cotto ÷ 0,72 = <strong class="text-[var(--color-ink)]">200 g crudo</strong>',
    macroRuleLabel: 'Regola di calcolo dei macro',
    macroPre: 'macro =',
    macroVar: '(grammi_crudo ÷ 100)',
    macroPost: '× macro_per_100g_crudo',
    macroTextHtml:
      'I macro sono sempre ricavati dall’<strong class="text-[var(--color-ink)]">equivalente in peso da crudo</strong>, in qualunque direzione tu stia convertendo. I dati nutrizionali USDA sono misurati sull’alimento crudo, così i valori restano coerenti con quelli dell’etichetta.',
    article: {
      heading: 'Informazioni su questo calcolatore di conversione peso crudo-cotto',
      intro:
        'Un alimento cotto pesa raramente quanto pesava da crudo: carne e pesce perdono il 15-35% del peso, mentre riso, pasta e legumi secchi raddoppiano o triplicano. Questo convertitore crudo-cotto applica la resa USDA specifica di ogni alimento: inserisci un peso da crudo o da cotto e ottieni l’equivalente dall’altro lato, con calorie, proteine, carboidrati e grassi esatti per quella quantità. La maggior parte dei database calorici — inclusa USDA FoodData Central — riporta i macro sul peso da crudo, ma quasi tutti cucinano prima di mangiare: è questo scarto che il calcolatore colma.',
      whyHeading: 'Perché crudo e cotto non pesano uguale',
      whyP1:
        'Il motivo per cui alimento crudo e alimento cotto hanno pesi diversi è l’acqua. Quando cuoci la carne l’acqua evapora e il grasso si scioglie: il cotto risulta più leggero del crudo di partenza. Cereali e legumi fanno l’opposto: assorbono acqua durante la bollitura, quindi il cotto pesa più del crudo messo in pentola.',
      whyP2:
        'Non puoi quindi applicare un generico "grammo = grammo" per tutta la giornata. Un calcolatore di conversione peso crudo-cotto risolve il problema applicando la resa specifica di ciascun alimento — il rapporto tra peso cotto e peso crudo — che cambia parecchio da un prodotto all’altro. Pollo e manzo perdono circa un quarto del peso. Gli spinaci ne perdono solo il 23%, pur riducendosi a una frazione del loro volume. Il riso bianco quasi triplica.',
      chickenHeading: 'Peso del pollo da crudo a cotto',
      chickenP1:
        'Il petto di pollo senza pelle e senza osso perde circa il 28% del peso in cottura — al forno, alla griglia o in padella —, quindi 200 g di pollo crudo diventano circa 144 g cotti. È probabilmente la conversione più importante per chi tiene sotto controllo le proteine, perché i valori da crudo e da cotto si distanziano abbastanza da falsare un totale giornaliero.',
      chickenP2:
        'La conseguenza pratica: se pesi il pollo dopo la cottura e registri 144 g rispetto a un’etichetta espressa sul crudo, conteggerai i macro di soli 144 g di crudo, con 56 g in meno. L’approccio corretto è pesare da crudo prima di cuocere, oppure usare un calcolatore crudo-cotto per riportare il peso cotto al suo equivalente da crudo prima di registrarlo.',
      beefHeading: 'Peso della carne macinata da crudo a cotto',
      beefP1:
        'La carne macinata standard 80/20 perde circa il 27% del peso in cottura — escono sia acqua sia grasso —, quindi una porzione di 200 g da cruda rende circa 146 g da cotta. Il valore esatto segue il contenuto di grasso: la macinata più magra 90/10 perde solo il 18-20%, perché c’è meno grasso da sciogliere.',
      beefP2:
        'Questo calcolatore di conversione del peso della carne crudo-cotto usa per la macinata il valore predefinito 80/20, in linea con le rese misurate dall’USDA per la percentuale di grasso più diffusa al dettaglio.',
      riceHeading: 'Rapporto crudo-cotto del riso',
      riceP1:
        'Il riso bianco secco quasi triplica il peso in cottura: 100 g da secco diventano circa 300 g cotti, una resa USDA del 300%, all’opposto della carne. Una porzione da 300 g di riso cotto contiene quindi solo le calorie di 100 g da secco, cosa che sorprende molti, convinti che riso secco e riso cotto abbiano la stessa densità calorica per grammo.',
      riceP2:
        'Usare un calcolatore crudo-cotto accurato per il riso conta parecchio, perché l’errore si accumula in fretta. Se mangi due porzioni di riso cotto al giorno e registri il peso da cotto rispetto a un’etichetta espressa sul secco, sovrastimerai in modo significativo le calorie di quell’alimento.',
      usdaHeading: 'Costruito su dati ufficiali USDA',
      usdaP1:
        'Ogni valore di resa alla base di questo convertitore crudo-cotto proviene da fonti ufficiali USDA, gli stessi database usati da dietisti, industrie alimentari e ricercatori in ambito sanitario. Le rese di carne e pollame provengono dalla Tabella USDA delle rese di cottura per carne e pollame. Quelle di cereali e verdure provengono dal Manuale di Agricoltura n. 102 dell’USDA e dal confronto tra le voci crude e cotte in USDA FoodData Central. Questo rende il nostro calcolatore più affidabile delle app di fitness basate su stime degli utenti o medie non verificate. Che tu stia convertendo il peso del pollo da crudo a cotto, controllando quello della carne macinata o calcolando il rapporto del riso, ogni risposta qui poggia su dati pubblicati e verificati.',
    },
  },

  hi: {
    formulaHeading: 'यह गणना कैसे काम करती है',
    formulaIntro:
      'हर गणना USDA डेटा से लिए गए एक ही यील्ड प्रतिशत पर आधारित है। ये दो फॉर्मूले हर खाद्य पदार्थ पर लागू होते हैं।',
    cookedEqRaw: 'पका = कच्चा ×',
    rawEqCooked: 'कच्चा = पका ÷',
    yieldExpr: '(यील्ड % ÷ 100)',
    rtcExampleHtml:
      'उदाहरण: 200g कच्चा चिकन × 0.72 = <strong class="text-[var(--color-ink)]">144g पका</strong>',
    ctrExampleHtml:
      'उदाहरण: 144g पका चिकन ÷ 0.72 = <strong class="text-[var(--color-ink)]">200g कच्चा</strong>',
    macroRuleLabel: 'मैक्रो गणना का नियम',
    macroPre: 'मैक्रो =',
    macroVar: '(कच्चा_ग्राम ÷ 100)',
    macroPost: '× प्रति_100g_कच्चे_के_मैक्रो',
    macroTextHtml:
      'आप किसी भी दिशा में बदलें, मैक्रो हमेशा <strong class="text-[var(--color-ink)]">कच्चे वजन के बराबर मान</strong> से निकाले जाते हैं। USDA का पोषण डेटा कच्चे खाद्य पदार्थ पर मापा जाता है, इसलिए इस तरह सभी मैक्रो लेबल पर लिखे मानों से मेल खाते हैं।',
    article: {
      heading: 'इस कच्चे से पके वजन बदलने वाले कैलकुलेटर के बारे में',
      intro:
        'पका हुआ भोजन शायद ही कभी उतना वजन रखता है जितना कच्चा था: मांस और मछली अपने वजन का 15–35% खोते हैं, जबकि चावल, पास्ता और सूखी दालें दो से तीन गुना हो जाती हैं। यह कच्चे-से-पके कनवर्टर हर खाद्य पदार्थ का अपना USDA यील्ड प्रतिशत लगाता है, इसलिए आप कच्चा या पका, कोई भी वजन डालें और दूसरी तरफ का बराबर वजन मिल जाता है, साथ ही उतनी मात्रा की सही कैलोरी, प्रोटीन, कार्ब्स और वसा भी। USDA FoodData Central समेत ज्यादातर कैलोरी डेटाबेस मैक्रो कच्चे वजन के आधार पर देते हैं, लेकिन ज्यादातर लोग पकाकर खाते हैं; यही फर्क यह कैलकुलेटर पाटता है।',
      whyHeading: 'कच्चे और पके भोजन का वजन अलग क्यों होता है',
      whyP1:
        'कच्चे और पके भोजन का वजन अलग होने की वजह नमी है। मांस पकाने पर पानी भाप बनकर उड़ता है और चर्बी पिघलकर निकल जाती है — इसलिए पका हुआ भोजन उस कच्चे भोजन से हल्का रह जाता है जिससे आपने शुरुआत की थी। अनाज और दालें इसका उल्टा करती हैं: उबालते समय वे पानी सोख लेती हैं, इसलिए पका हुआ भोजन बर्तन में डाले गए कच्चे भोजन से भारी हो जाता है।',
      whyP2:
        'इसका मतलब यह है कि आप पूरे दिन "एक ग्राम मतलब एक ग्राम" नहीं मान सकते। कच्चे से पके वजन का कैलकुलेटर हर खाद्य पदार्थ का अपना यील्ड प्रतिशत — यानी पके और कच्चे वजन का अनुपात — लगाकर यह समस्या हल करता है, और यह अनुपात एक चीज से दूसरी चीज में काफी बदलता है। चिकन और बीफ अपना करीब एक-चौथाई वजन खोते हैं। पालक अपनी मात्रा के एक अंश तक सिमट जाने के बावजूद सिर्फ 23% वजन खोता है। सफेद चावल लगभग तीन गुना हो जाता है।',
      chickenHeading: 'चिकन का कच्चे से पके वजन में बदलाव',
      chickenP1:
        'बिना हड्डी और बिना त्वचा वाला चिकन ब्रेस्ट, चाहे बेक करें, ग्रिल करें या तवे पर तलें, पकाने पर करीब 28% वजन खो देता है, इसलिए 200g कच्चा चिकन पकने पर लगभग 144g रह जाता है। प्रोटीन ट्रैक करने वाले किसी भी व्यक्ति के लिए यह शायद सबसे जरूरी गणना है, क्योंकि कच्चे और पके के आंकड़े इतने अलग होते हैं कि दिन भर का कुल जोड़ बिगाड़ सकते हैं।',
      chickenP2:
        'व्यावहारिक नतीजा यह है: अगर आप चिकन पकाने के बाद तौलकर 144g दर्ज करते हैं और उसे कच्चे वजन वाले पोषण लेबल पर लगाते हैं, तो आप सिर्फ 144g कच्चे के मैक्रो गिनेंगे और 56g छूट जाएगा। सही तरीका है या तो पकाने से पहले कच्चा तौलना, या कच्चे-से-पके कैलकुलेटर से पके वजन को उसके कच्चे बराबर मान में बदलकर दर्ज करना।',
      beefHeading: 'कीमे का कच्चे से पके वजन में बदलाव',
      beefP1:
        'सामान्य 80/20 कीमा पकाने पर करीब 27% वजन खो देता है — पानी और चर्बी दोनों निकलते हैं —, इसलिए 200g कच्चे हिस्से से करीब 146g पका कीमा मिलता है। सही आंकड़ा चर्बी की मात्रा के साथ चलता है: ज्यादा लीन 90/10 कीमा सिर्फ 18–20% खोता है, क्योंकि उसमें पिघलने के लिए कम चर्बी होती है।',
      beefP2:
        'यह कच्चे से पके मांस वजन कैलकुलेटर कीमे के लिए 80/20 को डिफॉल्ट मानता है, जो बाजार में सबसे आम चर्बी अनुपात के लिए USDA द्वारा मापे गए यील्ड डेटा से मेल खाता है।',
      riceHeading: 'चावल का कच्चे से पके का अनुपात',
      riceP1:
        'सूखा सफेद चावल पकाने पर वजन में करीब तीन गुना हो जाता है: 100g सूखा चावल पकने पर करीब 300g, यानी USDA यील्ड 300% — मांस के ठीक उलट। इसका मतलब है कि 300g पके चावल के कटोरे में सिर्फ 100g सूखे चावल जितनी कैलोरी होती है, जो उन लोगों को चौंकाता है जो मानते हैं कि सूखे और पके चावल की प्रति ग्राम कैलोरी घनत्व एक जैसी होती है।',
      riceP2:
        'चावल के लिए सटीक कच्चे-से-पके कैलकुलेटर का इस्तेमाल इसलिए खास तौर पर जरूरी है क्योंकि गलती तेजी से जुड़ती जाती है। अगर आप रोज दो कटोरी पका चावल खाते हैं और पके वजन को सूखे वजन वाले लेबल पर दर्ज करते हैं, तो आप उस भोजन की कैलोरी काफी ज्यादा आंकेंगे।',
      usdaHeading: 'आधिकारिक USDA डेटा पर आधारित',
      usdaP1:
        'इस कच्चे-से-पके कनवर्टर के पीछे का हर यील्ड आंकड़ा आधिकारिक USDA स्रोतों से आता है — वही डेटाबेस जिनका इस्तेमाल आहार विशेषज्ञ, खाद्य निर्माता और स्वास्थ्य शोधकर्ता करते हैं। मांस और मुर्गी के यील्ड USDA की मांस और मुर्गी कुकिंग यील्ड तालिका से लिए गए हैं। अनाज और सब्जियों के यील्ड USDA कृषि हैंडबुक संख्या 102 से, और USDA FoodData Central में कच्ची और पकी प्रविष्टियों की तुलना से निकाले गए हैं। इसीलिए हमारा कैलकुलेटर उन फिटनेस ऐप्स से ज्यादा भरोसेमंद है जो उपयोगकर्ताओं के अनुमानों या बिना जांचे औसतों पर चलते हैं। आप चिकन का कच्चे से पके वजन बदल रहे हों, कीमे का वजन जांच रहे हों या चावल का अनुपात निकाल रहे हों — यहां हर जवाब प्रकाशित और परखे गए डेटा पर टिका है।',
    },
  },
};

export function getHome(locale: Locale): HomeSections {
  return HOME[locale] ?? HOME.en;
}
