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
      'Chicken loses weight during cooking primarily through moisture evaporation. Proteins denature and contract, squeezing out water bound within muscle fibers. Higher cooking temperatures and longer cook times increase moisture loss.',
    beef:
      'Beef loses moisture and some fat during cooking. Leaner cuts retain more of their weight since less fat renders out, while higher-fat cuts lose more through fat drip.',
    pork:
      'Pork loses moisture during cooking as proteins contract and water evaporates. Slow-cooked cuts like pork shoulder lose significantly more than quick-cooked chops due to the extended cooking time.',
    turkey:
      'Turkey breast, like chicken, loses moisture through evaporation as proteins contract during cooking. Roasting produces slightly more loss than steaming or boiling.',
    salmon:
      'Salmon loses moisture as its proteins coagulate during cooking. The fat content helps retain some weight, but water-soluble proteins still release liquid.',
    shrimp:
      'Shrimp loses relatively little weight during cooking compared to other proteins — mostly surface moisture. Their dense protein structure retains most of the original weight.',
    meatDefault:
      'Protein-rich foods lose moisture during cooking as proteins contract and water evaporates from muscle tissue.',
    grains:
      'Grains, pasta, and legumes absorb water during cooking, which is why they expand dramatically. The starch granules absorb liquid and swell, significantly increasing weight. Macros are always calculated from the dry (raw) weight since that’s how nutrition labels measure them.',
    spinach:
      'Spinach is the most misjudged food on this site. A pan of raw leaves wilts to a fraction of its original volume, so the weight looks like it must have collapsed too — but USDA measurements put the cooking yield at 77%, meaning 100g raw still weighs about 77g cooked. The leaves lose their air and structure long before they lose their water, so the volume falls off a cliff while the weight drops only about 23%.',
    potato:
      'Potatoes retain most of their weight when cooked because their dense starch structure holds moisture in. Only a small amount evaporates from the surface during cooking.',
    vegDefault:
      'Vegetables lose some moisture during cooking as cell walls soften and water evaporates. Leafy greens lose dramatically more than dense vegetables.',
  },
  es: {
    chicken:
      'El pollo pierde peso al cocinarse sobre todo por la evaporación del agua. Las proteínas se desnaturalizan y se contraen, expulsando el agua retenida en las fibras musculares. A mayor temperatura y más tiempo de cocción, mayor es la pérdida de humedad.',
    beef:
      'La carne de res pierde agua y parte de su grasa al cocinarse. Los cortes magros conservan más peso porque se derrite menos grasa, mientras que los cortes más grasos pierden más al soltarla.',
    pork:
      'El cerdo pierde humedad durante la cocción a medida que las proteínas se contraen y el agua se evapora. Los cortes de cocción lenta, como la paleta, pierden bastante más que una chuleta hecha rápido, por el tiempo de cocción prolongado.',
    turkey:
      'La pechuga de pavo, igual que el pollo, pierde humedad por evaporación cuando las proteínas se contraen al cocinarse. Asarla produce algo más de pérdida que cocerla al vapor o hervirla.',
    salmon:
      'El salmón pierde humedad a medida que sus proteínas coagulan durante la cocción. Su contenido graso ayuda a retener algo de peso, pero las proteínas solubles en agua siguen soltando líquido.',
    shrimp:
      'Los camarones pierden relativamente poco peso al cocinarse en comparación con otras proteínas: sobre todo humedad superficial. Su estructura proteica densa conserva casi todo el peso original.',
    meatDefault:
      'Los alimentos ricos en proteína pierden humedad al cocinarse: las proteínas se contraen y el agua del tejido muscular se evapora.',
    grains:
      'Los cereales, la pasta y las legumbres absorben agua al cocerse, y por eso aumentan tanto de volumen. Los gránulos de almidón absorben líquido y se hinchan, lo que incrementa mucho el peso. Los macros siempre se calculan sobre el peso en seco (crudo), porque así es como los miden las etiquetas nutricionales.',
    spinach:
      'La espinaca es el alimento peor juzgado de este sitio. Una sartén de hojas crudas se reduce a una fracción de su volumen original, así que parece que el peso también tiene que haberse desplomado; pero las mediciones del USDA fijan el rendimiento de cocción en el 77%, o sea que 100 g crudos siguen pesando unos 77 g cocidos. Las hojas pierden el aire y la estructura mucho antes que el agua, de modo que el volumen se hunde mientras el peso solo baja un 23%.',
    potato:
      'Las papas conservan casi todo su peso al cocinarse porque su densa estructura de almidón retiene la humedad. Solo se evapora una pequeña cantidad desde la superficie durante la cocción.',
    vegDefault:
      'Las verduras pierden algo de humedad al cocinarse, ya que las paredes celulares se ablandan y el agua se evapora. Las hojas verdes pierden muchísimo más que las verduras densas.',
  },
  fr: {
    chicken:
      'Le poulet perd du poids à la cuisson principalement par évaporation de l’eau. Les protéines se dénaturent et se contractent, chassant l’eau retenue dans les fibres musculaires. Plus la température est élevée et la cuisson longue, plus la perte d’humidité est importante.',
    beef:
      'Le bœuf perd de l’eau et une partie de sa graisse à la cuisson. Les morceaux maigres conservent davantage de poids puisqu’il y a moins de gras à fondre, tandis que les morceaux plus gras en perdent plus par écoulement.',
    pork:
      'Le porc perd de l’humidité à la cuisson, les protéines se contractant et l’eau s’évaporant. Les morceaux cuits lentement, comme l’épaule, en perdent nettement plus que les côtelettes saisies rapidement, en raison du temps de cuisson prolongé.',
    turkey:
      'Le blanc de dinde, comme le poulet, perd de l’humidité par évaporation lorsque les protéines se contractent à la cuisson. Le rôtissage entraîne une perte légèrement supérieure à la cuisson vapeur ou à l’eau.',
    salmon:
      'Le saumon perd de l’humidité à mesure que ses protéines coagulent pendant la cuisson. Sa teneur en gras aide à retenir une partie du poids, mais les protéines hydrosolubles libèrent tout de même du liquide.',
    shrimp:
      'Les crevettes perdent relativement peu de poids à la cuisson par rapport aux autres sources de protéines — surtout l’humidité de surface. Leur structure protéique dense conserve l’essentiel du poids initial.',
    meatDefault:
      'Les aliments riches en protéines perdent de l’humidité à la cuisson : les protéines se contractent et l’eau s’évapore des tissus musculaires.',
    grains:
      'Les céréales, les pâtes et les légumineuses absorbent l’eau pendant la cuisson, d’où leur gonflement spectaculaire. Les granules d’amidon absorbent le liquide et gonflent, ce qui augmente fortement le poids. Les macros sont toujours calculées à partir du poids sec (cru), car c’est ainsi que les étiquettes nutritionnelles les mesurent.',
    spinach:
      'Les épinards sont l’aliment le plus mal évalué du site. Une poêle de feuilles crues se réduit à une fraction de son volume initial, ce qui donne l’impression que le poids s’est effondré lui aussi — mais l’USDA mesure un rendement de cuisson de 77 %, soit environ 77 g cuits pour 100 g crus. Les feuilles perdent leur air et leur structure bien avant de perdre leur eau : le volume s’effondre, tandis que le poids ne baisse que d’environ 23 %.',
    potato:
      'Les pommes de terre conservent l’essentiel de leur poids à la cuisson, car leur structure amylacée dense retient l’humidité. Seule une petite quantité s’évapore en surface pendant la cuisson.',
    vegDefault:
      'Les légumes perdent un peu d’humidité à la cuisson : les parois cellulaires s’assouplissent et l’eau s’évapore. Les légumes-feuilles en perdent bien plus que les légumes denses.',
  },
  de: {
    chicken:
      'Hähnchen verliert beim Garen vor allem durch verdunstendes Wasser an Gewicht. Die Proteine denaturieren und ziehen sich zusammen, wodurch das in den Muskelfasern gebundene Wasser herausgepresst wird. Höhere Gartemperaturen und längere Garzeiten erhöhen den Feuchtigkeitsverlust.',
    beef:
      'Rindfleisch verliert beim Garen Wasser und einen Teil seines Fetts. Magere Teilstücke behalten mehr Gewicht, weil weniger Fett ausbrät, während fettreichere Stücke durch das abtropfende Fett mehr verlieren.',
    pork:
      'Schweinefleisch verliert beim Garen Feuchtigkeit, weil sich die Proteine zusammenziehen und Wasser verdunstet. Langsam gegarte Stücke wie die Schulter verlieren wegen der langen Garzeit deutlich mehr als schnell gebratene Koteletts.',
    turkey:
      'Putenbrust verliert wie Hähnchen Feuchtigkeit durch Verdunstung, wenn sich die Proteine beim Garen zusammenziehen. Im Ofen gebraten fällt der Verlust etwas höher aus als beim Dämpfen oder Kochen.',
    salmon:
      'Lachs verliert Feuchtigkeit, sobald seine Proteine beim Garen gerinnen. Der Fettgehalt hilft, einen Teil des Gewichts zu halten, doch wasserlösliche Proteine geben trotzdem Flüssigkeit ab.',
    shrimp:
      'Garnelen verlieren beim Garen im Vergleich zu anderen Proteinquellen relativ wenig Gewicht — überwiegend Oberflächenfeuchtigkeit. Ihre dichte Proteinstruktur hält den größten Teil des Ausgangsgewichts.',
    meatDefault:
      'Proteinreiche Lebensmittel verlieren beim Garen Feuchtigkeit: Die Proteine ziehen sich zusammen und Wasser verdunstet aus dem Muskelgewebe.',
    grains:
      'Getreide, Nudeln und Hülsenfrüchte nehmen beim Kochen Wasser auf — deshalb quellen sie so stark auf. Die Stärkekörner saugen Flüssigkeit auf und schwellen an, was das Gewicht erheblich erhöht. Die Makros werden immer aus dem Trockengewicht (roh) berechnet, denn so werden sie auch auf Nährwerttabellen angegeben.',
    spinach:
      'Spinat wird auf dieser Seite am gründlichsten falsch eingeschätzt. Eine Pfanne roher Blätter fällt auf einen Bruchteil ihres Volumens zusammen, sodass es aussieht, als müsse auch das Gewicht eingebrochen sein — die USDA misst jedoch eine Garausbeute von 77 %, aus 100 g roh werden also rund 77 g gegart. Die Blätter verlieren Luft und Struktur lange bevor sie ihr Wasser verlieren: Das Volumen bricht ein, das Gewicht sinkt nur um etwa 23 %.',
    potato:
      'Kartoffeln behalten beim Garen den größten Teil ihres Gewichts, weil ihre dichte Stärkestruktur die Feuchtigkeit im Inneren hält. Nur eine kleine Menge verdunstet währenddessen an der Oberfläche.',
    vegDefault:
      'Gemüse verliert beim Garen etwas Feuchtigkeit, da die Zellwände weich werden und Wasser verdunstet. Blattgemüse verliert dabei ungleich mehr als festes Gemüse.',
  },
  pt: {
    chicken:
      'O frango perde peso ao cozinhar principalmente pela evaporação da água. As proteínas desnaturam e se contraem, expulsando a água retida nas fibras musculares. Temperaturas mais altas e tempos de cozimento mais longos aumentam a perda de umidade.',
    beef:
      'A carne bovina perde água e parte da gordura ao cozinhar. Cortes magros retêm mais peso, porque menos gordura derrete, enquanto cortes mais gordurosos perdem mais com a gordura que escorre.',
    pork:
      'A carne suína perde umidade ao cozinhar, à medida que as proteínas se contraem e a água evapora. Cortes de cozimento lento, como a paleta, perdem bem mais do que costeletas feitas rapidamente, por causa do tempo prolongado de cozimento.',
    turkey:
      'O peito de peru, assim como o frango, perde umidade por evaporação quando as proteínas se contraem durante o cozimento. Assar gera uma perda um pouco maior do que cozinhar no vapor ou na água.',
    salmon:
      'O salmão perde umidade à medida que suas proteínas coagulam durante o cozimento. O teor de gordura ajuda a reter parte do peso, mas as proteínas solúveis em água ainda liberam líquido.',
    shrimp:
      'O camarão perde relativamente pouco peso ao cozinhar em comparação com outras proteínas — sobretudo umidade superficial. Sua estrutura proteica densa retém quase todo o peso original.',
    meatDefault:
      'Alimentos ricos em proteína perdem umidade ao cozinhar: as proteínas se contraem e a água evapora do tecido muscular.',
    grains:
      'Grãos, massas e leguminosas absorvem água durante o cozimento, e é por isso que expandem tanto. Os grânulos de amido absorvem líquido e incham, aumentando muito o peso. Os macros são sempre calculados sobre o peso seco (cru), porque é assim que os rótulos nutricionais os medem.',
    spinach:
      'O espinafre é o alimento mais mal avaliado deste site. Uma frigideira de folhas cruas se reduz a uma fração do volume original, o que dá a impressão de que o peso também despencou — mas o USDA mede um rendimento de cozimento de 77%, ou seja, 100 g crus ainda pesam cerca de 77 g cozidos. As folhas perdem o ar e a estrutura muito antes de perderem a água: o volume desaba enquanto o peso cai apenas cerca de 23%.',
    potato:
      'As batatas retêm quase todo o seu peso ao cozinhar porque sua densa estrutura de amido segura a umidade. Apenas uma pequena parte evapora pela superfície durante o cozimento.',
    vegDefault:
      'Os vegetais perdem alguma umidade ao cozinhar, pois as paredes celulares amolecem e a água evapora. As folhas verdes perdem muitíssimo mais do que os vegetais densos.',
  },
  ja: {
    chicken:
      '鶏肉が加熱で軽くなる主な理由は水分の蒸発です。タンパク質が変性して収縮し、筋繊維に含まれていた水分が押し出されます。加熱温度が高いほど、また加熱時間が長いほど、水分の損失は大きくなります。',
    beef:
      '牛肉は加熱すると水分と脂の一部を失います。赤身の多い部位は溶け出す脂が少ないため重量が残りやすく、脂の多い部位は脂が落ちる分だけ大きく減ります。',
    pork:
      '豚肉は加熱によりタンパク質が収縮し、水分が蒸発して軽くなります。豚肩肉のように低温で長時間煮込む部位は、短時間で焼くポークチョップよりも減り方がかなり大きくなります。',
    turkey:
      '七面鳥の胸肉も鶏肉と同様に、加熱でタンパク質が収縮する際に水分が蒸発して軽くなります。ローストは蒸したり茹でたりする場合よりわずかに減少幅が大きくなります。',
    salmon:
      'サーモンは加熱によってタンパク質が凝固する過程で水分を失います。脂質が多いぶん重量は残りやすいものの、水溶性タンパク質からは水分が出ていきます。',
    shrimp:
      'エビは他のタンパク質源に比べて加熱による減量が比較的小さく、失われるのは主に表面の水分です。密なタンパク質構造のおかげで元の重量の大部分が保たれます。',
    meatDefault:
      'タンパク質の多い食品は、加熱するとタンパク質が収縮し、筋組織から水分が蒸発するため軽くなります。',
    grains:
      '穀物・パスタ・豆類は加熱中に水を吸収するため、大きく膨らみます。でんぷん粒が水分を吸って膨潤し、重量が大幅に増えるのです。栄養成分表示は乾燥（生）重量を基準にしているため、マクロは常に乾燥重量から計算します。',
    spinach:
      'ほうれん草は、このサイトで最も誤解されている食材です。生の葉はフライパンの中で元のかさのごく一部にまで縮むため、重量も同じように激減したように見えます。しかしUSDAの測定による調理歩留まりは77%で、生100gは加熱後も約77gあります。葉は水分を失うよりずっと早く空気と構造を失うため、かさは急激に減っても、重量は約23%しか落ちません。',
    potato:
      'じゃがいもは密なでんぷん構造が水分を内部に閉じ込めるため、加熱してもほとんど重量が変わりません。調理中に表面からわずかに蒸発する程度です。',
    vegDefault:
      '野菜は加熱で細胞壁がやわらかくなり水分が蒸発するため、多少軽くなります。葉物野菜は、身の詰まった野菜よりもはるかに大きく減ります。',
  },
  ko: {
    chicken:
      '닭고기가 조리 과정에서 가벼워지는 주된 이유는 수분 증발입니다. 단백질이 변성되면서 수축해 근섬유에 붙잡혀 있던 물을 밀어냅니다. 조리 온도가 높고 시간이 길수록 수분 손실은 더 커집니다.',
    beef:
      '소고기는 조리하면서 수분과 지방 일부를 잃습니다. 기름기가 적은 부위는 녹아 나오는 지방이 적어 무게가 더 남고, 지방이 많은 부위는 기름이 빠지면서 더 많이 줄어듭니다.',
    pork:
      '돼지고기는 조리 중 단백질이 수축하고 물이 증발하면서 수분을 잃습니다. 앞다리처럼 오래 익히는 부위는 조리 시간이 길기 때문에, 빠르게 굽는 갈비보다 훨씬 많이 줄어듭니다.',
    turkey:
      '칠면조 가슴살도 닭고기와 마찬가지로 조리 중 단백질이 수축하면서 수분이 증발해 무게가 줄어듭니다. 오븐에 구우면 찌거나 삶을 때보다 손실이 조금 더 큽니다.',
    salmon:
      '연어는 조리 과정에서 단백질이 응고하면서 수분을 잃습니다. 지방 함량 덕분에 무게가 어느 정도 유지되지만, 수용성 단백질에서는 여전히 수분이 빠져나옵니다.',
    shrimp:
      '새우는 다른 단백질 식품에 비해 조리 시 무게가 비교적 적게 줄어들며, 빠지는 것은 대부분 표면의 수분입니다. 조직이 치밀해 원래 무게의 대부분이 그대로 남습니다.',
    meatDefault:
      '단백질이 풍부한 식품은 조리 중 단백질이 수축하고 근육 조직에서 물이 증발하면서 수분을 잃습니다.',
    grains:
      '곡물, 파스타, 콩류는 조리 중 물을 흡수하기 때문에 크게 불어납니다. 전분 알갱이가 수분을 빨아들여 팽창하면서 무게가 크게 늘어납니다. 영양성분표가 건조(생) 중량 기준으로 표시되므로, 영양소는 항상 건조 중량을 기준으로 계산합니다.',
    spinach:
      '시금치는 이 사이트에서 가장 크게 오해받는 식품입니다. 팬에 담긴 생잎이 원래 부피의 일부까지 줄어들다 보니 무게도 함께 무너진 것처럼 보이지만, USDA가 측정한 조리 수율은 77%로 생 100g은 조리 후에도 약 77g입니다. 잎은 수분을 잃기 훨씬 전에 공기와 구조를 잃습니다. 그래서 부피는 급격히 꺼지지만 무게는 23% 정도만 줄어듭니다.',
    potato:
      '감자는 치밀한 전분 구조가 수분을 가둬 두기 때문에 조리해도 무게가 거의 그대로 유지됩니다. 조리 중에는 표면에서 아주 적은 양만 증발합니다.',
    vegDefault:
      '채소는 조리하면 세포벽이 물러지고 물이 증발하면서 수분이 어느 정도 빠집니다. 잎채소는 조직이 단단한 채소보다 훨씬 많이 줄어듭니다.',
  },
  it: {
    chicken:
      'Il pollo perde peso in cottura soprattutto per l’evaporazione dell’acqua. Le proteine si denaturano e si contraggono, spremendo fuori l’acqua trattenuta nelle fibre muscolari. Temperature più alte e tempi di cottura più lunghi aumentano la perdita di umidità.',
    beef:
      'Il manzo perde acqua e parte del grasso durante la cottura. I tagli magri conservano più peso perché si scioglie meno grasso, mentre quelli più grassi ne perdono di più con il grasso che cola.',
    pork:
      'Il maiale perde umidità in cottura, man mano che le proteine si contraggono e l’acqua evapora. I tagli a cottura lenta, come la spalla, perdono molto più delle braciole cotte rapidamente, proprio per via del tempo di cottura prolungato.',
    turkey:
      'Il petto di tacchino, come il pollo, perde umidità per evaporazione quando le proteine si contraggono durante la cottura. L’arrosto comporta una perdita leggermente maggiore rispetto alla cottura al vapore o in acqua.',
    salmon:
      'Il salmone perde umidità mentre le sue proteine coagulano durante la cottura. Il contenuto di grassi aiuta a trattenere parte del peso, ma le proteine idrosolubili rilasciano comunque liquido.',
    shrimp:
      'I gamberi perdono relativamente poco peso in cottura rispetto ad altre fonti proteiche: si tratta soprattutto di umidità superficiale. La loro struttura proteica densa conserva quasi tutto il peso iniziale.',
    meatDefault:
      'Gli alimenti ricchi di proteine perdono umidità in cottura: le proteine si contraggono e l’acqua evapora dal tessuto muscolare.',
    grains:
      'Cereali, pasta e legumi assorbono acqua durante la cottura, ed è per questo che si gonfiano così tanto. I granuli di amido assorbono liquido e si rigonfiano, aumentando notevolmente il peso. I macronutrienti si calcolano sempre sul peso da secco (crudo), perché è così che li misurano le etichette nutrizionali.',
    spinach:
      'Gli spinaci sono l’alimento più frainteso del sito. Una padella di foglie crude si riduce a una frazione del volume iniziale, e sembra quindi che anche il peso sia crollato — ma l’USDA misura una resa di cottura del 77%: 100 g da crudo pesano ancora circa 77 g da cotti. Le foglie perdono aria e struttura molto prima di perdere acqua: il volume crolla, mentre il peso scende soltanto del 23% circa.',
    potato:
      'Le patate conservano quasi tutto il loro peso in cottura perché la densa struttura amidacea trattiene l’umidità all’interno. Durante la cottura ne evapora solo una piccola parte dalla superficie.',
    vegDefault:
      'Le verdure perdono un po’ di umidità in cottura, poiché le pareti cellulari si ammorbidiscono e l’acqua evapora. Le verdure a foglia ne perdono molto più di quelle compatte.',
  },
  hi: {
    chicken:
      'चिकन पकाने पर मुख्य रूप से नमी के भाप बनकर उड़ने से वजन कम होता है। प्रोटीन विकृत होकर सिकुड़ते हैं और मांसपेशी रेशों में बंधा पानी बाहर निकाल देते हैं। जितना अधिक तापमान और जितनी देर पकाएंगे, नमी उतनी ही ज्यादा घटेगी।',
    beef:
      'बीफ पकाने पर नमी और कुछ चर्बी खो देता है। कम चर्बी वाले कट ज्यादा वजन बनाए रखते हैं क्योंकि उनमें कम चर्बी पिघलती है, जबकि ज्यादा चर्बी वाले कट चर्बी टपकने से ज्यादा वजन खोते हैं।',
    pork:
      'पोर्क पकाते समय प्रोटीन सिकुड़ते हैं और पानी भाप बनकर उड़ता है, जिससे नमी घटती है। पोर्क शोल्डर जैसे धीमी आंच पर पकने वाले कट, लंबे समय तक पकने के कारण जल्दी पकने वाले चॉप से कहीं ज्यादा वजन खोते हैं।',
    turkey:
      'टर्की ब्रेस्ट भी चिकन की तरह पकते समय प्रोटीन के सिकुड़ने पर नमी भाप बनकर खो देता है। भूनने में भाप देने या उबालने की तुलना में थोड़ा ज्यादा नुकसान होता है।',
    salmon:
      'सैल्मन पकते समय उसके प्रोटीन जमने लगते हैं और नमी निकल जाती है। इसमें मौजूद वसा कुछ वजन बनाए रखने में मदद करती है, फिर भी पानी में घुलनशील प्रोटीन तरल छोड़ते हैं।',
    shrimp:
      'झींगा अन्य प्रोटीन स्रोतों की तुलना में पकाने पर काफी कम वजन खोता है — ज्यादातर ऊपरी सतह की नमी ही जाती है। इसकी सघन प्रोटीन संरचना मूल वजन का बड़ा हिस्सा बनाए रखती है।',
    meatDefault:
      'प्रोटीन से भरपूर खाद्य पदार्थ पकाने पर नमी खोते हैं, क्योंकि प्रोटीन सिकुड़ते हैं और मांसपेशी ऊतक से पानी भाप बनकर उड़ जाता है।',
    grains:
      'अनाज, पास्ता और दालें पकते समय पानी सोखते हैं, इसीलिए इनका आकार इतना बढ़ जाता है। स्टार्च के कण तरल सोखकर फूल जाते हैं और वजन काफी बढ़ जाता है। मैक्रो हमेशा सूखे (कच्चे) वजन से गिने जाते हैं, क्योंकि पोषण लेबल भी इसी आधार पर बनते हैं।',
    spinach:
      'इस साइट पर पालक ही सबसे ज्यादा गलत आंका जाने वाला खाद्य पदार्थ है। कड़ाही में कच्चे पत्ते अपनी मूल मात्रा के एक अंश तक सिमट जाते हैं, इसलिए लगता है कि वजन भी उतना ही गिरा होगा — लेकिन USDA की मापी गई कुकिंग यील्ड 77% है, यानी 100g कच्चा पकने पर भी करीब 77g रहता है। पत्ते अपना पानी खोने से बहुत पहले अपनी हवा और बनावट खो देते हैं, इसलिए मात्रा तो तेजी से गिरती है पर वजन सिर्फ 23% के आसपास ही घटता है।',
    potato:
      'आलू पकाने पर अपना ज्यादातर वजन बनाए रखते हैं, क्योंकि इनकी सघन स्टार्च संरचना नमी को भीतर रोके रखती है। पकाते समय सतह से बहुत थोड़ी नमी ही उड़ती है।',
    vegDefault:
      'सब्जियां पकाते समय कुछ नमी खोती हैं, क्योंकि कोशिका भित्तियां नरम पड़ती हैं और पानी भाप बनकर उड़ता है। पत्तेदार सब्जियां सघन सब्जियों से कहीं ज्यादा वजन खोती हैं।',
  },
};

export function getExplanation(locale: Locale, key: ExplanationKey): string {
  return EXPLANATIONS[locale]?.[key] ?? EXPLANATIONS.en[key];
}
