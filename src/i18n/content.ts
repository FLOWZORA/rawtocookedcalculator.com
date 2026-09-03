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
    french_fried: 'Frito (patatas fritas)',
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
  ja: {
    baked_roasted: 'オーブン焼き / ロースト',
    'baked/roasted': 'オーブン焼き / ロースト',
    grilled: 'グリル',
    boiled_poached: '茹で / ポーチ',
    pan_fried: 'フライパン焼き',
    boiled: '茹で',
    boiled_rehydrated: '茹で / 戻し',
    boiled_steamed: '茹で / 蒸し',
    slow_cooked_braised: '弱火煮込み / 煮込み',
    baked: 'オーブン焼き',
    pan_broiled: 'フライパン蒸し焼き',
    braised: '蒸し煮',
    broiled: 'グリル（上火）',
    broiled_barbecued: 'グリル（バーベキュー）',
    broiled_grilled: 'グリル / 直火焼き',
    roasted: 'ロースト',
    simmered: '煮込み',
    simmered_20min: '煮込み（20分）',
    deep_fat_fried: '揚げ',
    deep_fat_fried_breaded: '揚げ（パン粉付き）',
    oven_fried: 'オーブン揚げ焼き',
    steamed: '蒸し',
    pressure_cooked: '圧力鍋調理',
    baked_in_foil: 'ホイル焼き',
    baked_skin_oiled: 'オーブン焼き（皮に油）',
    french_fried: 'フライドポテト',
    hash_browned: 'ハッシュドポテト',
    parboiled: '湯通し（パーボイル）',
    instant_precooked: 'インスタント / 調理済み',
    boiled_or_baked: '茹で / オーブン焼き',
    scrambled: 'スクランブル',
    average_all_temps: '平均（全温度帯）',
    medium: 'ミディアム',
    well_done: 'ウェルダン',
    overdone: '加熱しすぎ',
  },
  ko: {
    baked_roasted: '오븐 구이 / 로스트',
    'baked/roasted': '오븐 구이 / 로스트',
    grilled: '직화 구이',
    boiled_poached: '삶기 / 수란식 조리',
    pan_fried: '팬 프라이',
    boiled: '삶기',
    boiled_rehydrated: '삶기 / 불리기',
    boiled_steamed: '삶기 / 찌기',
    slow_cooked_braised: '저온 조리 / 브레이징',
    baked: '오븐 구이',
    pan_broiled: '팬 브로일',
    braised: '조림',
    broiled: '윗불 구이',
    broiled_barbecued: '윗불 구이(바비큐)',
    broiled_grilled: '윗불 구이 / 직화 구이',
    roasted: '로스트',
    simmered: '뭉근히 끓임',
    simmered_20min: '뭉근히 끓임(20분)',
    deep_fat_fried: '튀김',
    deep_fat_fried_breaded: '튀김(빵가루)',
    oven_fried: '오븐 튀김',
    steamed: '찜',
    pressure_cooked: '압력솥 조리',
    baked_in_foil: '포일 구이',
    baked_skin_oiled: '오븐 구이(껍질에 기름)',
    french_fried: '감자튀김',
    hash_browned: '해시브라운',
    parboiled: '데치기(파보일)',
    instant_precooked: '인스턴트 / 조리 완료',
    boiled_or_baked: '삶기 또는 오븐 구이',
    scrambled: '스크램블',
    average_all_temps: '평균(전 온도)',
    medium: '미디엄',
    well_done: '웰던',
    overdone: '과조리',
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
  hi: {
    baked_roasted: 'बेक्ड / रोस्टेड',
    'baked/roasted': 'बेक्ड / रोस्टेड',
    grilled: 'ग्रिल्ड',
    boiled_poached: 'उबला / पोच्ड',
    pan_fried: 'तवे पर तला',
    boiled: 'उबला',
    boiled_rehydrated: 'उबला / भिगोया',
    boiled_steamed: 'उबला / भाप में पका',
    slow_cooked_braised: 'धीमी आंच पर पका / दम',
    baked: 'बेक्ड',
    pan_broiled: 'तवे पर बिना तेल पका',
    braised: 'दम पर पका',
    broiled: 'ब्रॉइल्ड (ऊपर से आँच)',
    broiled_barbecued: 'ब्रॉइल्ड (बारबेक्यू)',
    broiled_grilled: 'ब्रॉइल्ड / ग्रिल्ड',
    roasted: 'रोस्टेड',
    simmered: 'धीमी आंच पर पका',
    simmered_20min: 'धीमी आंच पर पका (20 मिनट)',
    deep_fat_fried: 'डीप फ्राई',
    deep_fat_fried_breaded: 'डीप फ्राई (ब्रेडेड)',
    oven_fried: 'ओवन फ्राई',
    steamed: 'भाप में पका',
    pressure_cooked: 'प्रेशर कुकर में पका',
    baked_in_foil: 'फॉयल में बेक्ड',
    baked_skin_oiled: 'बेक्ड (छिलके पर तेल)',
    french_fried: 'फ्रेंच फ्राई',
    hash_browned: 'हैश ब्राउन',
    parboiled: 'अधपका उबला (पारबॉइल्ड)',
    instant_precooked: 'इंस्टेंट / प्रीकुक्ड',
    boiled_or_baked: 'उबला या बेक्ड',
    scrambled: 'भुर्जी',
    average_all_temps: 'औसत (सभी तापमान)',
    medium: 'मीडियम',
    well_done: 'वेल डन',
    overdone: 'ज्यादा पका',
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
      'Una papa hervida solo pierde alrededor del 6% de su peso; un boniato al horno pierde más bien un 22%. La densa estructura de almidón retiene la humedad, así que solo se evapora una pequeña cantidad desde la superficie durante la cocción.',
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
  ja: {
    chicken:
      '鶏胸肉は加熱すると重量の約28%を、鶏もも肉は約31%を失います——USDA歩留まりはそれぞれ72%と69%です。失われるのはほぼ水分です。加熱するとタンパク質が変性・収縮して筋繊維から水分を押し出し、脂も少し溶け出します。温度が高く加熱時間が長いほど損失は大きくなり、ポーチのような低温・湿式の加熱では23%前後にとどまります。',
    beef:
      '牛肉は加熱すると、部位と脂の量に応じて重量の約15〜30%を失います。赤身の多い部位は溶け出す脂が少ないぶん重量が残り、脂の多い部位は水分と脂が一緒に滴り落ちてより多く減ります。',
    pork:
      '豚肉は、短時間で焼くポークチョップなら重量の約22%、低温で長時間煮込む場合は最大35%を失います。タンパク質が収縮して水分が蒸発し、長く加熱するほど水分が抜けます。だから豚肩肉はフライパンで焼くチョップよりはるかに大きく減ります。',
    turkey:
      '七面鳥の胸肉はローストすると重量の約21%を失います——USDA歩留まり79%です。鶏肉と同じく、タンパク質が収縮して水分が蒸発することで失われ、ローストは蒸す・茹でるよりわずかに多く水分を飛ばします。',
    salmon:
      'サーモンは加熱すると重量の約15%を失います——USDA歩留まり85%で、ここに挙げた肉・魚の中で最も高い値です。タンパク質が凝固して多少の水分を放出しますが、脂質が多いため重量の大部分は保たれます。',
    shrimp:
      'エビは加熱すると重量の約25%を失います——USDA歩留まり75%です。失われるのは主に表面と殻の水分で、身自体は密で崩れないため、見た目の縮み以上に軽くなります。',
    meatDefault:
      '肉と魚は加熱すると、通常は重量の20〜35%を失います。タンパク質が収縮して筋組織から水分が蒸発し、脂の多い部位は脂が溶け出すぶんさらに軽くなります。',
    grains:
      '穀物・パスタ・豆類は加熱すると重量がおよそ2〜3倍になります——歩留まりは約220%から335%です。でんぷん粒が煮汁を吸って膨らむため、加熱後の重量は乾燥重量をはるかに上回ります。栄養成分表示が乾燥（生）重量を基準にしているため、マクロは常に乾燥重量から計算します。',
    spinach:
      'ほうれん草は加熱しても重量の約23%しか失いません——USDA歩留まり77%で、生100gの葉は加熱後も約77gあります。このサイトで最も誤解されている食材です。生の葉はフライパンの中で元のかさのごく一部にまで縮むため、重量も同じように激減したように見えます。葉は水分を失うずっと前に空気と構造を失うので、かさは急激に減っても重量はほとんど動きません。',
    potato:
      '茹でたじゃがいもは重量の約6%しか失いませんが、焼いたさつまいもは22%近く失います。密なでんぷん構造が水分を内部に閉じ込めるため、加熱中に表面から蒸発するのはわずかです。',
    vegDefault:
      'ほとんどの野菜は加熱すると重量の0%から約25%を失います——ブロッコリーはほぼ変わらず、葉物野菜が最も多く失います。加熱すると細胞壁がやわらかくなり、水分が多少蒸発します。',
  },
  ko: {
    chicken:
      '닭 가슴살은 조리하면 무게의 약 28%가, 닭 넓적다리살은 약 31%가 줄어듭니다 — USDA 수율은 각각 72%와 69%입니다. 줄어드는 것은 거의 다 물입니다. 열을 받으면 단백질이 변성·수축하면서 근섬유에서 수분을 밀어내고, 지방도 조금 녹아 나옵니다. 온도가 높고 조리 시간이 길수록 손실이 커지고, 수란처럼 낮고 촉촉한 열에서는 23%에 가깝게 유지됩니다.',
    beef:
      '소고기는 조리하면 부위와 지방 함량에 따라 무게의 약 15~30%가 줄어듭니다. 기름기가 적은 부위는 녹아 나오는 지방이 적어 더 많이 남고, 지방이 많은 부위는 물과 지방이 함께 빠지면서 더 많이 줄어듭니다.',
    pork:
      '돼지고기는 빠르게 굽는 갈비로는 무게의 약 22%, 낮은 온도에서 오래 브레이징하면 최대 35%가 줄어듭니다. 단백질이 수축하고 물이 증발하는데, 오래 익힐수록 더 많은 수분이 빠집니다. 그래서 앞다리는 팬에 구운 갈비보다 훨씬 많이 줄어듭니다.',
    turkey:
      '칠면조 가슴살은 오븐에 구우면 무게의 약 21%가 줄어듭니다 — USDA 수율 79%입니다. 닭고기처럼 단백질이 수축하고 수분이 증발하면서 줄어들며, 굽는 방식은 찌거나 삶는 것보다 수분을 조금 더 날립니다.',
    salmon:
      '연어는 조리하면 무게의 약 15%가 줄어듭니다 — USDA 수율 85%로, 여기 실린 어떤 고기나 생선보다도 높습니다. 단백질이 응고하면서 약간의 액체를 내보내지만, 높은 지방 함량이 무게의 대부분을 잡아 둡니다.',
    shrimp:
      '새우는 조리하면 무게의 약 25%가 줄어듭니다 — USDA 수율 75%입니다. 빠지는 것은 대부분 표면과 껍질의 수분이고, 치밀한 살 자체는 뭉쳐 있어서 눈에 보이는 것보다 더 가벼워집니다.',
    meatDefault:
      '고기와 생선은 조리하면 보통 무게의 20~35%가 줄어듭니다. 단백질이 수축하고 근육 조직에서 물이 증발하며, 지방이 많은 부위는 지방이 녹아 나오면서 무게가 더 줄어듭니다.',
    grains:
      '곡물, 파스타, 콩류는 조리하면 무게가 대략 두세 배가 됩니다 — 수율은 약 220%에서 335%에 이릅니다. 전분 알갱이가 조리 액체를 흡수해 부풀기 때문에, 조리 후 무게가 건조 무게를 훨씬 넘어섭니다. 영양성분표가 건조(생) 중량 기준이므로, 영양소는 항상 건조 중량으로 계산합니다.',
    spinach:
      '시금치는 조리해도 무게의 약 23%만 줄어듭니다 — USDA 수율 77%로, 생잎 100g은 조리 후에도 약 77g입니다. 이 사이트에서 가장 크게 오해받는 식품입니다. 팬에 담긴 생잎이 원래 부피의 일부까지 줄어들다 보니 무게도 함께 무너진 것처럼 보입니다. 잎은 수분을 잃기 훨씬 전에 공기와 구조를 잃기 때문에, 부피는 급격히 꺼져도 무게는 거의 움직이지 않습니다.',
    potato:
      '삶은 감자는 무게의 약 6%만 줄지만, 구운 고구마는 22%에 가깝게 줄어듭니다. 치밀한 전분 구조가 수분을 안에 가둬 두기 때문에, 조리 중 표면에서 아주 적은 양만 증발합니다.',
    vegDefault:
      '대부분의 채소는 조리하면 무게의 0%에서 약 25%가 줄어듭니다 — 브로콜리는 거의 그대로 나오고, 잎채소가 가장 많이 줄어듭니다. 조리하면 세포벽이 물러지고 물이 어느 정도 증발합니다.',
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
  hi: {
    chicken:
      'चिकन ब्रेस्ट पकाने पर अपने वजन का करीब 28% और चिकन थाई करीब 31% खोता है — USDA यील्ड क्रमशः 72% और 69%। यह कमी लगभग पूरी तरह पानी की होती है: गर्मी लगते ही प्रोटीन विकृत होकर सिकुड़ते हैं और मांसपेशी रेशों से नमी बाहर निचोड़ देते हैं, साथ ही थोड़ी चर्बी भी पिघल जाती है। ज्यादा तापमान और ज्यादा देर पकाने से कमी और बढ़ती है; पोचिंग जैसी धीमी, नम आंच पर यह 23% के आसपास रहती है।',
    beef:
      'बीफ पकाने पर कट और उसकी चर्बी की मात्रा के हिसाब से अपने वजन का करीब 15–30% खोता है। कम चर्बी वाले कट ज्यादा बनाए रखते हैं क्योंकि कम चर्बी पिघलती है; ज्यादा चर्बी वाले कट पानी और चर्बी दोनों टपकने से ज्यादा खोते हैं।',
    pork:
      'पोर्क जल्दी पकने वाले चॉप के रूप में अपने वजन का करीब 22% खोता है, और धीमी आंच पर लंबे समय तक दम देने पर 35% तक। प्रोटीन सिकुड़ते हैं और पानी भाप बनकर उड़ता है; कट जितनी देर पकता है, उतनी ज्यादा नमी निकलती है, इसीलिए पोर्क शोल्डर तवे पर पके चॉप से कहीं ज्यादा खोता है।',
    turkey:
      'टर्की ब्रेस्ट रोस्ट करने पर अपने वजन का करीब 21% खोता है — USDA यील्ड 79%। चिकन की तरह यह वजन इसलिए घटता है क्योंकि प्रोटीन सिकुड़ते हैं और नमी भाप बनकर उड़ती है; भूनने में भाप देने या उबालने की तुलना में थोड़ी ज्यादा नमी निकलती है।',
    salmon:
      'सैल्मन पकाने पर अपने वजन का करीब 15% खोता है — USDA यील्ड 85%, जो यहां दी गई किसी भी मांस या मछली में सबसे ज्यादा है। इसके प्रोटीन जमते हैं और कुछ तरल छोड़ते हैं, लेकिन ज्यादा वसा होने के कारण वजन का बड़ा हिस्सा बना रहता है।',
    shrimp:
      'झींगा पकाने पर अपने वजन का करीब 25% खोता है — USDA यील्ड 75%। यह कमी ज्यादातर ऊपरी सतह और छिलके की नमी की होती है; सघन मांस खुद जुड़ा रहता है, इसलिए झींगे जितना सिकुड़ते दिखते हैं उससे ज्यादा हल्के हो जाते हैं।',
    meatDefault:
      'मांस और मछली पकाने पर आम तौर पर अपने वजन का 20–35% खोते हैं। प्रोटीन सिकुड़ते हैं और मांसपेशी ऊतक से पानी भाप बनकर उड़ता है, और ज्यादा चर्बी वाले कट चर्बी पिघलने से और वजन खोते हैं।',
    grains:
      'अनाज, पास्ता और दालें पकाने पर वजन में करीब दो से तीन गुना हो जाते हैं — यील्ड लगभग 220% से 335% तक होती है। स्टार्च के कण पकाने का तरल सोखकर फूल जाते हैं, इसलिए पका वजन सूखे वजन से कहीं ज्यादा होता है। मैक्रो हमेशा सूखे (कच्चे) वजन से गिने जाते हैं, क्योंकि पोषण लेबल भी इसी आधार पर मापते हैं।',
    spinach:
      'पालक पकाने पर अपने वजन का सिर्फ करीब 23% खोता है — USDA यील्ड 77%, यानी 100g कच्चे पत्ते पकने पर भी करीब 77g रहते हैं। यह इस साइट पर सबसे ज्यादा गलत आंका जाने वाला खाद्य पदार्थ है: कड़ाही में कच्चे पत्ते अपनी मात्रा के एक अंश तक सिमट जाते हैं, इसलिए लगता है कि वजन भी उतना ही गिरा होगा। पत्ते अपना पानी खोने से बहुत पहले अपनी हवा और बनावट खो देते हैं, इसलिए मात्रा तो तेजी से गिरती है पर वजन मुश्किल से बदलता है।',
    potato:
      'उबला आलू अपने वजन का सिर्फ करीब 6% खोता है; बेक की हुई शकरकंद करीब 22% खोती है। सघन स्टार्च संरचना नमी को भीतर रोके रखती है, इसलिए पकाते समय सतह से बहुत थोड़ी नमी ही उड़ती है।',
    vegDefault:
      'ज्यादातर सब्जियां पकाने पर अपने वजन का 0% से करीब 25% तक खोती हैं — ब्रोकली लगभग जस की तस निकलती है, जबकि पत्तेदार सब्जियां सबसे ज्यादा खोती हैं। पकाते समय कोशिका भित्तियां नरम पड़ती हैं और कुछ पानी भाप बनकर उड़ता है।',
  },
};

export function getExplanation(locale: Locale, key: ExplanationKey): string {
  return EXPLANATIONS[locale]?.[key] ?? EXPLANATIONS.en[key];
}
