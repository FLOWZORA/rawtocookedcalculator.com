import type { Locale } from './ui';

/**
 * Homepage long-form sections: the conversion-formula explainer and the
 * closing article. Rendered identically on every locale's homepage.
 *
 * Strings ending in `Html` are injected with `set:html` and may contain
 * <strong> tags, plus <a> tags in `calorieTargetHtml` — no other markup.
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
  calorieTargetHeading: string;
  calorieTargetHtml: string;
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
      calorieTargetHeading: 'Turning Accurate Weights Into a Calorie Target',
      calorieTargetHtml:
        'Weighing your food correctly only pays off once you have a daily number to weigh it against. If you have not set that target yet, a <a href="https://freemaintenancecaloriescalculator.com/" class="text-[var(--color-link)] hover:underline" rel="sponsored nofollow noopener">maintenance calorie calculator</a> estimates your total daily energy expenditure from the Mifflin-St Jeor and Katch-McArdle equations — the maintenance figure you then raise for muscle gain or lower for fat loss. Pair that target with accurate cooked-weight conversions and your daily log finally reflects what you actually ate.',
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
      calorieTargetHeading: 'Convertir pesos precisos en un objetivo de calorías',
      calorieTargetHtml:
        'Pesar bien la comida solo sirve cuando tienes una cifra diaria con la que compararla. Si aún no has fijado ese objetivo, una <a href="https://freemaintenancecaloriescalculator.com/" class="text-[var(--color-link)] hover:underline" rel="sponsored nofollow noopener">calculadora de calorías de mantenimiento</a> estima tu gasto energético diario total con las ecuaciones de Mifflin-St Jeor y Katch-McArdle: la cifra de mantenimiento que luego subes para ganar músculo o bajas para perder grasa. Combina ese objetivo con conversiones precisas de peso cocido y tu registro diario reflejará por fin lo que realmente comiste.',
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
      calorieTargetHeading: 'Transformer des poids précis en objectif calorique',
      calorieTargetHtml:
        'Bien peser vos aliments ne sert que si vous avez un chiffre quotidien auquel les comparer. Si vous n’avez pas encore défini cet objectif, un <a href="https://freemaintenancecaloriescalculator.com/" class="text-[var(--color-link)] hover:underline" rel="sponsored nofollow noopener">calculateur de calories de maintenance</a> estime votre dépense énergétique journalière totale à partir des équations de Mifflin-St Jeor et de Katch-McArdle : la valeur de maintenance que vous augmentez ensuite pour la prise de muscle ou réduisez pour la perte de gras. Associez cet objectif à des conversions de poids cuit précises et votre journal quotidien reflétera enfin ce que vous avez vraiment mangé.',
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
      calorieTargetHeading: 'Aus genauen Gewichten ein Kalorienziel machen',
      calorieTargetHtml:
        'Das richtige Abwiegen zahlt sich erst aus, wenn du einen Tageswert hast, an dem du dich orientierst. Falls du dieses Ziel noch nicht festgelegt hast: Ein <a href="https://freemaintenancecaloriescalculator.com/" class="text-[var(--color-link)] hover:underline" rel="sponsored nofollow noopener">Rechner für den Erhaltungskalorienbedarf</a> schätzt deinen Gesamtumsatz anhand der Mifflin-St-Jeor- und Katch-McArdle-Formeln — den Erhaltungswert, den du dann für Muskelaufbau anhebst oder für Fettabbau senkst. Kombiniere dieses Ziel mit genauen Umrechnungen des Gargewichts, und dein Ernährungstagebuch bildet endlich ab, was du wirklich gegessen hast.',
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
      calorieTargetHeading: 'Transformar pesos precisos em uma meta de calorias',
      calorieTargetHtml:
        'Pesar a comida corretamente só compensa quando você tem um número diário para comparar. Se ainda não definiu essa meta, uma <a href="https://freemaintenancecaloriescalculator.com/" class="text-[var(--color-link)] hover:underline" rel="sponsored nofollow noopener">calculadora de calorias de manutenção</a> estima seu gasto energético diário total pelas equações de Mifflin-St Jeor e Katch-McArdle: o valor de manutenção que você depois aumenta para ganhar músculo ou reduz para perder gordura. Combine essa meta com conversões precisas de peso cozido e seu registro diário passa a refletir o que você realmente comeu.',
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
      calorieTargetHeading: 'Trasformare pesi precisi in un obiettivo calorico',
      calorieTargetHtml:
        'Pesare bene il cibo serve solo quando hai un numero giornaliero con cui confrontarlo. Se non hai ancora fissato quell’obiettivo, un <a href="https://freemaintenancecaloriescalculator.com/" class="text-[var(--color-link)] hover:underline" rel="sponsored nofollow noopener">calcolatore delle calorie di mantenimento</a> stima il tuo dispendio energetico giornaliero totale con le equazioni di Mifflin-St Jeor e Katch-McArdle: il valore di mantenimento che poi alzi per mettere massa o abbassi per perdere grasso. Unisci quell’obiettivo a conversioni precise del peso da cotto e il tuo diario giornaliero rispecchierà finalmente ciò che hai davvero mangiato.',
    },
  },

};

export function getHome(locale: Locale): HomeSections {
  return HOME[locale] ?? HOME.en;
}
