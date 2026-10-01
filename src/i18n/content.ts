import type { Locale } from './ui';

/**
 * Long-form, per-locale page content.
 *
 * Anything the visitor reads that is longer than a label lives here, keyed by
 * locale, so that adding a section to a page can never again silently ship an
 * English-only string. UI labels stay in `ui.ts`; FAQ copy lives in `faq.ts`.
 */

// ── Cooking-method labels ──────────────────────────────────────────────────
// Keys match `yield_by_method` / `default_cooking_method` in food-data.json.

export type MethodKey =
  | 'baked_roasted'
  | 'baked/roasted'
  | 'grilled'
  | 'boiled_poached'
  | 'pan_fried'
  | 'boiled'
  | 'boiled_rehydrated'
  | 'boiled_steamed'
  | 'slow_cooked_braised'
  | 'baked'
  | 'pan_broiled'
  // Method-specific keys added with the second batch of yield_by_method data
  // (chicken drumstick/thigh, ground beef, pork chop, potato, broccoli,
  // spinach, sweet potato, white rice, lentils).
  | 'braised'
  | 'broiled'
  | 'broiled_barbecued'
  | 'broiled_grilled'
  | 'roasted'
  | 'simmered'
  | 'simmered_20min'
  | 'deep_fat_fried'
  | 'deep_fat_fried_breaded'
  | 'oven_fried'
  | 'steamed'
  | 'pressure_cooked'
  | 'baked_in_foil'
  | 'baked_skin_oiled'
  | 'french_fried'
  | 'hash_browned'
  | 'parboiled'
  | 'instant_precooked'
  | 'boiled_or_baked'
  // Egg preparations.
  | 'scrambled'
  // Veal roast's `yield_by_method` holds doneness levels, not cooking methods.
  | 'average_all_temps'
  | 'medium'
  | 'well_done'
  | 'overdone';

export const METHOD_LABELS: Record<Locale, Record<string, string>> = {
  en: {
    baked_roasted: 'Baked / Roasted',
    'baked/roasted': 'Baked / Roasted',
    grilled: 'Grilled',
    boiled_poached: 'Boiled / Poached',
    pan_fried: 'Pan-fried',
    boiled: 'Boiled',
    boiled_rehydrated: 'Boiled / Rehydrated',
    boiled_steamed: 'Boiled / Steamed',
    slow_cooked_braised: 'Slow-cooked / Braised',
    baked: 'Baked',
    pan_broiled: 'Pan-broiled',
    braised: 'Braised',
    broiled: 'Broiled',
    broiled_barbecued: 'Broiled (barbecued)',
    broiled_grilled: 'Broiled / Grilled',
    roasted: 'Roasted',
    simmered: 'Simmered',
    simmered_20min: 'Simmered (20 min)',
    deep_fat_fried: 'Deep-fried',
    deep_fat_fried_breaded: 'Deep-fried (breaded)',
    oven_fried: 'Oven-fried',
    steamed: 'Steamed',
    pressure_cooked: 'Pressure-cooked',
    baked_in_foil: 'Baked in foil',
    baked_skin_oiled: 'Baked (skin oiled)',
    french_fried: 'French-fried',
    hash_browned: 'Hash-browned',
    parboiled: 'Parboiled',
    instant_precooked: 'Instant / Precooked',
    boiled_or_baked: 'Boiled or baked',
    scrambled: 'Scrambled',
    average_all_temps: 'Average (all temperatures)',
    medium: 'Medium',
    well_done: 'Well done',
    overdone: 'Overdone',
  },
  es: {
    baked_roasted: 'Al horno / Asado',
    'baked/roasted': 'Al horno / Asado',
    grilled: 'A la parrilla',
    boiled_poached: 'Hervido / Escalfado',
    pan_fried: 'A la sartén',
    boiled: 'Hervido',
    boiled_rehydrated: 'Hervido / Rehidratado',
    boiled_steamed: 'Hervido / Al vapor',
    slow_cooked_braised: 'Cocción lenta / Estofado',
    baked: 'Al horno',
    pan_broiled: 'A la plancha',
    braised: 'Estofado',
    broiled: 'Al grill',
    broiled_barbecued: 'Al grill (barbacoa)',
    broiled_grilled: 'Al grill / A la parrilla',
    roasted: 'Asado',
    simmered: 'A fuego lento',
    simmered_20min: 'A fuego lento (20 min)',
    deep_fat_fried: 'Frito en abundante aceite',
    deep_fat_fried_breaded: 'Frito en abundante aceite (empanado)',
    oven_fried: 'Frito al horno',
    steamed: 'Al vapor',
    pressure_cooked: 'En olla a presión',
    baked_in_foil: 'Al horno en papel aluminio',
    baked_skin_oiled: 'Al horno (piel aceitada)',
    french_fried: 'Frito (papas fritas)',
    hash_browned: 'Salteado rallado (hash brown)',
    parboiled: 'Sancochado',
    instant_precooked: 'Instantáneo / Precocido',
    boiled_or_baked: 'Hervido u horneado',
    scrambled: 'Revueltos',
    average_all_temps: 'Promedio (todas las temperaturas)',
    medium: 'Al punto',
    well_done: 'Bien hecho',
    overdone: 'Muy hecho',
  },
  fr: {
    baked_roasted: 'Au four / Rôti',
    'baked/roasted': 'Au four / Rôti',
    grilled: 'Grillé',
    boiled_poached: 'Bouilli / Poché',
    pan_fried: 'Poêlé',
    boiled: 'Bouilli',
    boiled_rehydrated: 'Bouilli / Réhydraté',
    boiled_steamed: 'Bouilli / Vapeur',
    slow_cooked_braised: 'Cuisson lente / Braisé',
    baked: 'Au four',
    pan_broiled: 'Poêlé à sec',
    braised: 'Braisé',
    broiled: 'Au gril',
    broiled_barbecued: 'Au gril (barbecue)',
    broiled_grilled: 'Au gril / Grillé',
    roasted: 'Rôti',
    simmered: 'Mijoté',
    simmered_20min: 'Mijoté (20 min)',
    deep_fat_fried: 'Frit en friture',
    deep_fat_fried_breaded: 'Frit en friture (pané)',
    oven_fried: 'Frit au four',
    steamed: 'À la vapeur',
    pressure_cooked: 'À l’autocuiseur',
    baked_in_foil: 'Au four en papillote',
    baked_skin_oiled: 'Au four (peau huilée)',
    french_fried: 'Frit (frites)',
    hash_browned: 'Rissolé râpé (hash brown)',
    parboiled: 'Précuit à l’eau',
    instant_precooked: 'Instantané / Précuit',
    boiled_or_baked: 'Bouilli ou au four',
    scrambled: 'Brouillés',
    average_all_temps: 'Moyenne (toutes températures)',
    medium: 'À point',
    well_done: 'Bien cuit',
    overdone: 'Trop cuit',
  },
  de: {
    baked_roasted: 'Gebacken / Gebraten',
    'baked/roasted': 'Gebacken / Gebraten',
    grilled: 'Gegrillt',
    boiled_poached: 'Gekocht / Pochiert',
    pan_fried: 'In der Pfanne gebraten',
    boiled: 'Gekocht',
    boiled_rehydrated: 'Gekocht / Eingeweicht',
    boiled_steamed: 'Gekocht / Gedämpft',
    slow_cooked_braised: 'Schmorgaren / Geschmort',
    baked: 'Gebacken',
    pan_broiled: 'Ohne Fett gebraten',
    braised: 'Geschmort',
    broiled: 'Gegrillt (Oberhitze)',
    broiled_barbecued: 'Gegrillt (Barbecue)',
    broiled_grilled: 'Gegrillt',
    roasted: 'Gebraten',
    simmered: 'Sanft geköchelt',
    simmered_20min: 'Sanft geköchelt (20 Min.)',
    deep_fat_fried: 'Frittiert',
    deep_fat_fried_breaded: 'Frittiert (paniert)',
    oven_fried: 'Im Ofen gebraten',
    steamed: 'Gedämpft',
    pressure_cooked: 'Im Schnellkochtopf',
    baked_in_foil: 'In Folie gebacken',
    baked_skin_oiled: 'Gebacken (Schale geölt)',
    french_fried: 'Frittiert (Pommes frites)',
    hash_browned: 'Als Rösti gebraten',
    parboiled: 'Parboiled (vorgekocht)',
    instant_precooked: 'Instant / Vorgekocht',
    boiled_or_baked: 'Gekocht oder gebacken',
    scrambled: 'Rührei',
    average_all_temps: 'Durchschnitt (alle Temperaturen)',
    medium: 'Medium',
    well_done: 'Durchgebraten',
    overdone: 'Übergart',
  },
  pt: {
    baked_roasted: 'Ao forno / Assado',
    'baked/roasted': 'Ao forno / Assado',
    grilled: 'Grelhado',
    boiled_poached: 'Cozido / Escalfado',
    pan_fried: 'Frito na frigideira',
    boiled: 'Cozido',
    boiled_rehydrated: 'Cozido / Reidratado',
    boiled_steamed: 'Cozido / No vapor',
    slow_cooked_braised: 'Cozimento lento / Brasado',
    baked: 'Ao forno',
    pan_broiled: 'Grelhado na frigideira',
    braised: 'Brasado',
    broiled: 'No grill',
    broiled_barbecued: 'No grill (churrasco)',
    broiled_grilled: 'No grill / Grelhado',
    roasted: 'Assado',
    simmered: 'Cozido em fogo baixo',
    simmered_20min: 'Cozido em fogo baixo (20 min)',
    deep_fat_fried: 'Frito por imersão',
    deep_fat_fried_breaded: 'Frito por imersão (à milanesa)',
    oven_fried: 'Frito no forno',
    steamed: 'No vapor',
    pressure_cooked: 'Na panela de pressão',
    baked_in_foil: 'Assado em papel-alumínio',
    baked_skin_oiled: 'Assado (casca untada)',
    french_fried: 'Frito (batata frita)',
    hash_browned: 'Frito e ralado (hash brown)',
    parboiled: 'Parboilizado',
    instant_precooked: 'Instantâneo / Pré-cozido',
    boiled_or_baked: 'Cozido ou assado',
    scrambled: 'Mexidos',
    average_all_temps: 'Média (todas as temperaturas)',
    medium: 'Ao ponto',
    well_done: 'Bem passado',
    overdone: 'Muito passado',
  },
  it: {
    baked_roasted: 'Al forno / Arrosto',
    'baked/roasted': 'Al forno / Arrosto',
    grilled: 'Alla griglia',
    boiled_poached: 'Bollito / In camicia',
    pan_fried: 'In padella',
    boiled: 'Bollito',
    boiled_rehydrated: 'Bollito / Reidratato',
    boiled_steamed: 'Bollito / Al vapore',
    slow_cooked_braised: 'Cottura lenta / Brasato',
    baked: 'Al forno',
    pan_broiled: 'In padella senza grassi',
    braised: 'Brasato',
    broiled: 'Alla griglia (calore dall’alto)',
    broiled_barbecued: 'Alla griglia (barbecue)',
    broiled_grilled: 'Alla griglia',
    roasted: 'Arrosto',
    simmered: 'Cotto a fuoco lento',
    simmered_20min: 'Cotto a fuoco lento (20 min)',
    deep_fat_fried: 'Fritto in olio abbondante',
    deep_fat_fried_breaded: 'Fritto in olio abbondante (impanato)',
    oven_fried: 'Fritto al forno',
    steamed: 'Al vapore',
    pressure_cooked: 'In pentola a pressione',
    baked_in_foil: 'Al forno in alluminio',
    baked_skin_oiled: 'Al forno (buccia oliata)',
    french_fried: 'Fritto (patatine)',
    hash_browned: 'Rosolato grattugiato (hash brown)',
    parboiled: 'Sbollentato',
    instant_precooked: 'Istantaneo / Precotto',
    boiled_or_baked: 'Bollito o al forno',
    scrambled: 'Strapazzate',
    average_all_temps: 'Media (tutte le temperature)',
    medium: 'Media cottura',
    well_done: 'Ben cotta',
    overdone: 'Troppo cotta',
  },
};

export function getMethodLabel(locale: Locale, method: string): string {
  return (
    METHOD_LABELS[locale]?.[method] ??
    METHOD_LABELS.en[method] ??
    method.replace(/_/g, ' ')
  );
}

// ── Why this food gains / loses weight ─────────────────────────────────────

export type ExplanationKey =
  | 'chicken'
  | 'beef'
  | 'pork'
  | 'turkey'
  | 'salmon'
  | 'shrimp'
  | 'meatDefault'
  | 'grains'
  | 'spinach'
  | 'potato'
  | 'vegDefault';

export const EXPLANATIONS: Record<Locale, Record<ExplanationKey, string>> = {
  en: {
    chicken:
      'Chicken breast loses about 28% of its weight when cooked and chicken thigh about 31% — USDA yields of 72% and 69%. The loss is almost all water: as the meat heats, its proteins denature and contract and squeeze moisture out of the muscle fibers, with a little fat rendering out too. Higher temperatures and longer cook times push the loss further; low, moist heat like poaching keeps it closer to 23%.',
    beef:
      'Beef loses roughly 15–30% of its weight when cooked, depending on the cut and its fat content. Leaner cuts retain more since less fat renders out; higher-fat cuts lose more as both water and fat drip away.',
    pork:
      'Pork loses about 22% of its weight as a quick-cooked chop, and up to 35% braised low and slow. Proteins contract and water evaporates; the longer a cut cooks, the more moisture it drives off, which is why pork shoulder loses far more than a pan-fried chop.',
    turkey:
      'Turkey breast loses about 21% of its weight when roasted — a 79% USDA yield. Like chicken, it loses that weight as proteins contract and moisture evaporates; roasting drives off slightly more than steaming or boiling.',
    salmon:
      'Salmon loses about 15% of its weight when cooked — an 85% USDA yield, the highest of any meat or fish here. Its proteins coagulate and release some liquid, but the high fat content holds most of the weight in place.',
    shrimp:
      'Shrimp loses about 25% of its weight when cooked — a 75% USDA yield. The loss is mostly surface and shell moisture; the dense muscle itself holds together, so the pieces lighten more than they visibly shrink.',
    meatDefault:
      'Meat and fish generally lose 20–35% of their weight when cooked. Proteins contract and water evaporates from the muscle tissue, and fattier cuts also lose weight as fat renders out.',
    grains:
      'Grains, pasta, and legumes roughly double or triple in weight when cooked — yields run from about 220% to 335%. The starch granules absorb the cooking liquid and swell, so the cooked weight is far higher than the dry weight. Macros are always calculated from the dry (raw) weight, since that is how nutrition labels measure them.',
    spinach:
      'Spinach loses only about 23% of its weight when cooked — a 77% USDA yield, so 100g of raw leaves still weighs about 77g cooked. It is the most misjudged food on this site: a pan of raw leaves wilts to a fraction of its volume, so the weight looks like it must have collapsed too. The leaves lose their air and structure long before they lose their water, so the volume falls off a cliff while the weight barely moves.',
    potato:
      'A boiled potato loses only about 6% of its weight; a baked sweet potato loses closer to 22%. The dense starch structure holds moisture in, so only a small amount evaporates from the surface during cooking.',
    vegDefault:
      'Most vegetables lose between 0% and about 25% of their weight when cooked — broccoli comes out roughly even, while leafy greens lose the most. Cell walls soften and some water evaporates as they cook.',
  },
  es: {
    chicken:
      'La pechuga de pollo pierde alrededor del 28% de su peso al cocinarse y el muslo alrededor del 31%: rendimientos USDA del 72% y del 69%. Casi toda la pérdida es agua: al calentarse, las proteínas se desnaturalizan, se contraen y expulsan la humedad de las fibras musculares, y además se derrite algo de grasa. Más temperatura y más tiempo de cocción aumentan la pérdida; el calor suave y húmedo, como escalfar, la deja más cerca del 23%.',
    beef:
      'La carne de res pierde en torno al 15–30% de su peso al cocinarse, según el corte y su contenido de grasa. Los cortes magros conservan más porque se derrite menos grasa; los más grasos pierden más al soltar agua y grasa a la vez.',
    pork:
      'El cerdo pierde alrededor del 22% de su peso como chuleta hecha rápido, y hasta un 35% cuando se estofa a fuego lento. Las proteínas se contraen y el agua se evapora: cuanto más tiempo se cocina un corte, más humedad suelta, y por eso la paleta pierde mucho más que una chuleta a la sartén.',
    turkey:
      'La pechuga de pavo pierde alrededor del 21% de su peso al asarse: un rendimiento USDA del 79%. Igual que el pollo, pierde ese peso cuando las proteínas se contraen y la humedad se evapora; asarla suelta algo más que cocerla al vapor o hervirla.',
    salmon:
      'El salmón pierde alrededor del 15% de su peso al cocinarse: un rendimiento USDA del 85%, el más alto de cualquier carne o pescado de esta lista. Sus proteínas coagulan y sueltan algo de líquido, pero su alto contenido graso mantiene casi todo el peso.',
    shrimp:
      'Los camarones pierden alrededor del 25% de su peso al cocinarse: un rendimiento USDA del 75%. Esa pérdida es sobre todo humedad de la superficie y del caparazón; el músculo denso se mantiene, así que las piezas se aligeran más de lo que parecen encoger.',
    meatDefault:
      'La carne y el pescado suelen perder entre el 20% y el 35% de su peso al cocinarse. Las proteínas se contraen y el agua del tejido muscular se evapora, y los cortes más grasos pierden además peso al derretirse la grasa.',
    grains:
      'Los cereales, la pasta y las legumbres duplican o triplican su peso al cocerse: los rendimientos van de alrededor del 220% al 335%. Los gránulos de almidón absorben el líquido de cocción y se hinchan, así que el peso cocido es muy superior al peso en seco. Los macros siempre se calculan sobre el peso en seco (crudo), porque así es como los miden las etiquetas nutricionales.',
    spinach:
      'La espinaca solo pierde alrededor del 23% de su peso al cocinarse: un rendimiento USDA del 77%, así que 100 g de hojas crudas siguen pesando unos 77 g cocidas. Es el alimento peor juzgado de este sitio: una sartén de hojas crudas se reduce a una fracción de su volumen, así que parece que el peso también tiene que haberse desplomado. Las hojas pierden el aire y la estructura mucho antes que el agua, de modo que el volumen se hunde mientras el peso apenas se mueve.',
    potato:
      'Una papa hervida solo pierde alrededor del 6% de su peso; un camote al horno pierde más bien un 22%. La densa estructura de almidón retiene la humedad, así que solo se evapora una pequeña cantidad desde la superficie durante la cocción.',
    vegDefault:
      'La mayoría de las verduras pierden entre el 0% y alrededor del 25% de su peso al cocinarse: el brócoli queda más o menos igual, mientras que las hojas verdes son las que más pierden. Las paredes celulares se ablandan y algo de agua se evapora al cocinarlas.',
  },
  fr: {
    chicken:
      'Le blanc de poulet perd environ 28 % de son poids à la cuisson et la cuisse environ 31 % — des rendements USDA de 72 % et de 69 %. Cette perte est presque entièrement de l’eau : à la chaleur, les protéines se dénaturent et se contractent en chassant l’humidité des fibres musculaires, et un peu de graisse fond au passage. Une température plus élevée et une cuisson plus longue accentuent la perte ; une chaleur douce et humide comme le pochage la maintient plus près de 23 %.',
    beef:
      'Le bœuf perd environ 15 à 30 % de son poids à la cuisson, selon le morceau et sa teneur en gras. Les morceaux maigres en conservent davantage puisqu’il y a moins de graisse à fondre ; les morceaux plus gras en perdent plus, l’eau et la graisse s’écoulant ensemble.',
    pork:
      'Le porc perd environ 22 % de son poids sous forme de côtelette saisie rapidement, et jusqu’à 35 % braisé longuement à basse température. Les protéines se contractent et l’eau s’évapore : plus un morceau cuit longtemps, plus il chasse d’humidité, et c’est pourquoi l’épaule en perd bien plus qu’une côtelette poêlée.',
    turkey:
      'Le blanc de dinde perd environ 21 % de son poids au rôtissage — un rendement USDA de 79 %. Comme le poulet, il perd ce poids parce que les protéines se contractent et que l’humidité s’évapore ; le rôtissage en chasse un peu plus que la cuisson vapeur ou à l’eau.',
    salmon:
      'Le saumon perd environ 15 % de son poids à la cuisson — un rendement USDA de 85 %, le plus élevé de toutes les viandes et de tous les poissons ici. Ses protéines coagulent et libèrent un peu de liquide, mais sa forte teneur en gras retient l’essentiel du poids.',
    shrimp:
      'Les crevettes perdent environ 25 % de leur poids à la cuisson — un rendement USDA de 75 %. Cette perte est surtout l’humidité de surface et de carapace ; la chair dense, elle, se tient, si bien que les crevettes s’allègent plus qu’elles ne semblent rétrécir.',
    meatDefault:
      'La viande et le poisson perdent en général 20 à 35 % de leur poids à la cuisson. Les protéines se contractent et l’eau s’évapore des tissus musculaires ; les morceaux plus gras perdent en plus du poids à mesure que la graisse fond.',
    grains:
      'Les céréales, les pâtes et les légumineuses doublent ou triplent à peu près de poids à la cuisson — les rendements vont d’environ 220 % à 335 %. Les granules d’amidon absorbent le liquide de cuisson et gonflent, si bien que le poids cuit dépasse largement le poids sec. Les macros sont toujours calculées à partir du poids sec (cru), car c’est ainsi que les étiquettes nutritionnelles les mesurent.',
    spinach:
      'Les épinards ne perdent qu’environ 23 % de leur poids à la cuisson — un rendement USDA de 77 %, si bien que 100 g de feuilles crues pèsent encore environ 77 g une fois cuites. C’est l’aliment le plus mal évalué du site : une poêle de feuilles crues se réduit à une fraction de son volume, ce qui donne l’impression que le poids s’est effondré lui aussi. Les feuilles perdent leur air et leur structure bien avant de perdre leur eau : le volume s’effondre tandis que le poids bouge à peine.',
    potato:
      'Une pomme de terre cuite à l’eau ne perd qu’environ 6 % de son poids ; une patate douce au four en perd plutôt 22 %. La structure amylacée dense retient l’humidité à l’intérieur, et seule une petite quantité s’évapore en surface pendant la cuisson.',
    vegDefault:
      'La plupart des légumes perdent entre 0 et 25 % environ de leur poids à la cuisson — le brocoli en ressort quasiment à l’identique, tandis que les légumes-feuilles en perdent le plus. Les parois cellulaires s’assouplissent et un peu d’eau s’évapore pendant la cuisson.',
  },
  de: {
    chicken:
      'Hähnchenbrust verliert beim Garen etwa 28 % ihres Gewichts, Hähnchenschenkel etwa 31 % — USDA-Ausbeuten von 72 % und 69 %. Der Verlust ist fast nur Wasser: In der Hitze denaturieren die Proteine, ziehen sich zusammen und pressen die Feuchtigkeit aus den Muskelfasern, dazu brät etwas Fett aus. Höhere Temperaturen und längere Garzeiten treiben den Verlust weiter hoch; sanfte, feuchte Hitze wie Pochieren hält ihn näher bei 23 %.',
    beef:
      'Rindfleisch verliert beim Garen etwa 15 bis 30 % seines Gewichts, je nach Teilstück und Fettgehalt. Magere Stücke behalten mehr, weil weniger Fett ausbrät; fettreichere verlieren mehr, da Wasser und Fett zugleich abtropfen.',
    pork:
      'Schweinefleisch verliert als schnell gebratenes Kotelett etwa 22 % seines Gewichts und langsam geschmort bis zu 35 %. Die Proteine ziehen sich zusammen und Wasser verdunstet: Je länger ein Stück gart, desto mehr Feuchtigkeit treibt es aus — deshalb verliert die Schulter weit mehr als ein Pfannenkotelett.',
    turkey:
      'Putenbrust verliert beim Braten im Ofen etwa 21 % ihres Gewichts — eine USDA-Ausbeute von 79 %. Wie beim Hähnchen entsteht der Verlust, weil sich die Proteine zusammenziehen und Feuchtigkeit verdunstet; Braten treibt etwas mehr aus als Dämpfen oder Kochen.',
    salmon:
      'Lachs verliert beim Garen etwa 15 % seines Gewichts — eine USDA-Ausbeute von 85 %, die höchste aller Fleisch- und Fischsorten hier. Seine Proteine gerinnen und geben etwas Flüssigkeit ab, doch der hohe Fettgehalt hält den Großteil des Gewichts.',
    shrimp:
      'Garnelen verlieren beim Garen etwa 25 % ihres Gewichts — eine USDA-Ausbeute von 75 %. Der Verlust ist überwiegend Oberflächen- und Schalenfeuchtigkeit; das dichte Muskelfleisch selbst hält zusammen, sodass die Stücke stärker leichter werden, als sie sichtbar schrumpfen.',
    meatDefault:
      'Fleisch und Fisch verlieren beim Garen in der Regel 20 bis 35 % ihres Gewichts. Die Proteine ziehen sich zusammen und Wasser verdunstet aus dem Muskelgewebe; fettreichere Stücke verlieren zusätzlich Gewicht, wenn Fett ausbrät.',
    grains:
      'Getreide, Nudeln und Hülsenfrüchte verdoppeln oder verdreifachen beim Garen ungefähr ihr Gewicht — die Ausbeuten reichen von etwa 220 % bis 335 %. Die Stärkekörner saugen die Kochflüssigkeit auf und quellen, sodass das Gargewicht weit über dem Trockengewicht liegt. Die Makros werden immer aus dem Trockengewicht (roh) berechnet, denn so geben sie auch die Nährwerttabellen an.',
    spinach:
      'Spinat verliert beim Garen nur etwa 23 % seines Gewichts — eine USDA-Ausbeute von 77 %, aus 100 g roher Blätter werden also noch rund 77 g gegart. Er ist das am gründlichsten falsch eingeschätzte Lebensmittel dieser Seite: Eine Pfanne roher Blätter fällt auf einen Bruchteil ihres Volumens zusammen, sodass es aussieht, als müsse auch das Gewicht eingebrochen sein. Die Blätter verlieren Luft und Struktur lange vor ihrem Wasser — das Volumen bricht ein, während sich das Gewicht kaum bewegt.',
    potato:
      'Eine gekochte Kartoffel verliert nur etwa 6 % ihres Gewichts; eine im Ofen gebackene Süßkartoffel eher 22 %. Die dichte Stärkestruktur hält die Feuchtigkeit im Inneren, und nur eine kleine Menge verdunstet beim Garen an der Oberfläche.',
    vegDefault:
      'Die meisten Gemüse verlieren beim Garen zwischen 0 und etwa 25 % ihres Gewichts — Brokkoli kommt praktisch unverändert heraus, Blattgemüse verliert am meisten. Die Zellwände werden weich und etwas Wasser verdunstet beim Garen.',
  },
  pt: {
    chicken:
      'O peito de frango perde cerca de 28% do peso ao ser cozido e a coxa cerca de 31% — rendimentos USDA de 72% e 69%. A perda é quase toda água: com o calor, as proteínas desnaturam e se contraem, espremendo a umidade para fora das fibras musculares, e um pouco de gordura também derrete. Temperaturas mais altas e tempos mais longos aumentam a perda; calor brando e úmido, como escalfar, mantém a perda mais perto de 23%.',
    beef:
      'A carne bovina perde cerca de 15% a 30% do peso ao ser cozida, dependendo do corte e do teor de gordura. Cortes magros retêm mais, porque menos gordura derrete; cortes mais gordurosos perdem mais, com água e gordura escorrendo juntas.',
    pork:
      'A carne suína perde cerca de 22% do peso como costeleta de preparo rápido, e até 35% quando brasada em fogo baixo e lento. As proteínas se contraem e a água evapora: quanto mais tempo um corte cozinha, mais umidade ele expulsa, e por isso a paleta perde muito mais do que uma costeleta na frigideira.',
    turkey:
      'O peito de peru perde cerca de 21% do peso quando assado — um rendimento USDA de 79%. Como o frango, ele perde esse peso porque as proteínas se contraem e a umidade evapora; assar expulsa um pouco mais do que cozinhar no vapor ou na água.',
    salmon:
      'O salmão perde cerca de 15% do peso ao ser cozido — um rendimento USDA de 85%, o mais alto de qualquer carne ou peixe aqui. Suas proteínas coagulam e liberam algum líquido, mas o alto teor de gordura mantém a maior parte do peso.',
    shrimp:
      'O camarão perde cerca de 25% do peso ao ser cozido — um rendimento USDA de 75%. A perda é sobretudo umidade da superfície e da casca; a carne densa em si se mantém, então as peças ficam mais leves do que parecem encolher.',
    meatDefault:
      'Carne e peixe costumam perder de 20% a 35% do peso ao serem cozidos. As proteínas se contraem e a água evapora do tecido muscular, e cortes mais gordurosos perdem peso também à medida que a gordura derrete.',
    grains:
      'Grãos, massas e leguminosas mais ou menos dobram ou triplicam de peso ao serem cozidos — os rendimentos vão de cerca de 220% a 335%. Os grânulos de amido absorvem o líquido do cozimento e incham, então o peso cozido fica bem acima do peso seco. Os macros são sempre calculados a partir do peso seco (cru), porque é assim que os rótulos nutricionais os medem.',
    spinach:
      'O espinafre perde apenas cerca de 23% do peso ao ser cozido — um rendimento USDA de 77%, então 100 g de folhas cruas ainda pesam cerca de 77 g cozidas. É o alimento mais mal avaliado deste site: uma frigideira de folhas cruas murcha até uma fração do volume, o que dá a impressão de que o peso também despencou. As folhas perdem o ar e a estrutura muito antes de perderem a água, então o volume desaba enquanto o peso mal se move.',
    potato:
      'Uma batata cozida perde apenas cerca de 6% do peso; uma batata-doce assada perde mais perto de 22%. A densa estrutura de amido segura a umidade por dentro, e só uma pequena parte evapora pela superfície durante o cozimento.',
    vegDefault:
      'A maioria dos vegetais perde entre 0% e cerca de 25% do peso ao ser cozida — o brócolis sai praticamente igual, enquanto as folhas verdes perdem mais. As paredes celulares amolecem e um pouco de água evapora durante o cozimento.',
  },
  it: {
    chicken:
      'Il petto di pollo perde circa il 28% del suo peso in cottura e la coscia circa il 31% — rese USDA del 72% e del 69%. La perdita è quasi tutta acqua: con il calore le proteine si denaturano e si contraggono, spremendo l’umidità fuori dalle fibre muscolari, e un po’ di grasso si scioglie. Temperature più alte e tempi più lunghi aumentano la perdita; un calore dolce e umido come la cottura in camicia la mantiene più vicina al 23%.',
    beef:
      'Il manzo perde all’incirca il 15-30% del suo peso in cottura, a seconda del taglio e del contenuto di grasso. I tagli magri ne conservano di più perché si scioglie meno grasso; quelli più grassi ne perdono di più, con acqua e grasso che colano insieme.',
    pork:
      'Il maiale perde circa il 22% del suo peso come braciola a cottura rapida, e fino al 35% brasato a lungo e a bassa temperatura. Le proteine si contraggono e l’acqua evapora: più a lungo cuoce un taglio, più umidità elimina, ed è per questo che la spalla perde molto più di una braciola in padella.',
    turkey:
      'Il petto di tacchino perde circa il 21% del suo peso quando è arrostito — una resa USDA del 79%. Come il pollo, perde quel peso perché le proteine si contraggono e l’umidità evapora; l’arrosto ne elimina un po’ più della cottura al vapore o in acqua.',
    salmon:
      'Il salmone perde circa il 15% del suo peso in cottura — una resa USDA dell’85%, la più alta tra tutte le carni e i pesci qui presenti. Le sue proteine coagulano e rilasciano un po’ di liquido, ma l’elevato contenuto di grassi trattiene gran parte del peso.',
    shrimp:
      'I gamberi perdono circa il 25% del loro peso in cottura — una resa USDA del 75%. La perdita è soprattutto umidità della superficie e del guscio; la carne densa tiene, quindi i gamberi si alleggeriscono più di quanto sembrino rimpicciolirsi.',
    meatDefault:
      'Carne e pesce perdono di norma il 20-35% del loro peso in cottura. Le proteine si contraggono e l’acqua evapora dal tessuto muscolare, e i tagli più grassi perdono peso anche perché il grasso si scioglie.',
    grains:
      'Cereali, pasta e legumi più o meno raddoppiano o triplicano il proprio peso in cottura — le rese vanno da circa il 220% al 335%. I granuli di amido assorbono il liquido di cottura e si rigonfiano, così il peso da cotto supera di molto quello da secco. I macronutrienti si calcolano sempre sul peso da secco (crudo), perché è così che li misurano le etichette nutrizionali.',
    spinach:
      'Gli spinaci perdono solo il 23% circa del loro peso in cottura — una resa USDA del 77%, quindi 100 g di foglie crude pesano ancora circa 77 g da cotte. È l’alimento più frainteso del sito: una padella di foglie crude si riduce a una frazione del suo volume, e sembra quindi che anche il peso sia crollato. Le foglie perdono aria e struttura molto prima dell’acqua, così il volume crolla mentre il peso si muove appena.',
    potato:
      'Una patata lessata perde solo il 6% circa del suo peso; una patata dolce al forno ne perde quasi il 22%. La densa struttura amidacea trattiene l’umidità all’interno, e solo una piccola parte evapora dalla superficie durante la cottura.',
    vegDefault:
      'La maggior parte delle verdure perde tra lo 0% e il 25% circa del proprio peso in cottura — i broccoli escono praticamente invariati, mentre le verdure a foglia perdono di più. Le pareti cellulari si ammorbidiscono e un po’ d’acqua evapora durante la cottura.',
  },
};

export function getExplanation(locale: Locale, key: ExplanationKey): string {
  return EXPLANATIONS[locale]?.[key] ?? EXPLANATIONS.en[key];
}
