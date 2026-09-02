import type { Locale } from './ui';

/**
 * Copy for the About and Contact pages, per locale.
 *
 * Strings ending in `Html` are injected with `set:html` and may contain
 * <strong> tags — no other markup.
 */

export interface AboutCard {
  label: string;
  html: string;
}

export interface AboutPage {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heading: string;
  lede: string;
  problemHeading: string;
  problemParagraphs: string[];
  dataHeading: string;
  dataIntro: string;
  dataCards: AboutCard[];
  howHeading: string;
  howParagraphs: string[];
  toolHeading: string;
  toolParagraphs: string[];
  ctaLabel: string;
}

export interface ContactPage {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heading: string;
  lede: string;
  emailLabel: string;
  emailNote: string;
  helpHeading: string;
  canHelpLabel: string;
  canHelp: string[];
  outOfScopeLabel: string;
  outOfScope: string[];
  tipLabel: string;
  tipText: string;
}

const STRONG = 'class="text-[var(--color-ink)]"';

export const ABOUT: Record<Locale, AboutPage> = {
  en: {
    metaTitle: 'About Raw to Cooked Calculator | USDA-Sourced Cooking Yield Data',
    metaDescription:
      'Raw to Cooked Calculator uses official USDA cooking-yield data to convert raw and cooked food weights with full macro output. Learn how it works and why it exists.',
    eyebrow: 'About',
    heading: 'Why this calculator exists',
    lede: 'The raw-versus-cooked weight problem is one of the most common sources of macro tracking error — and one of the easiest to fix once you understand it.',
    problemHeading: 'The problem',
    problemParagraphs: [
      'Standard nutrition databases — including USDA FoodData Central — publish macro values based on raw, uncooked food weight. Most people cook before eating. The weight of food changes during cooking: meat loses water and shrinks, dry grains absorb water and expand. The nutrition label stays the same, but the weight on your scale is completely different.',
      'If you weigh 150g of cooked chicken and log it against a raw-weight database entry, you are actually logging the macros for 150g raw — undercounting by roughly 50g of protein source. Do this daily and the tracking error compounds fast.',
      'This calculator solves that by letting you enter either a raw or cooked weight and instantly converting to the other side — along with accurate calories, protein, carbs, and fat — using the correct cooking yield for each specific food.',
    ],
    dataHeading: 'Where the data comes from',
    dataIntro:
      'Every yield figure on this site comes from official USDA sources — the same databases used by dietitians, food manufacturers, and researchers.',
    dataCards: [
      {
        label: 'Meat & Poultry',
        html: `Yield percentages for chicken, beef, pork, turkey, and other animal proteins come from the <strong ${STRONG}>USDA Table of Cooking Yields for Meat and Poultry</strong>, which reports yield data measured under controlled cooking conditions.`,
      },
      {
        label: 'Grains, Vegetables & Legumes',
        html: `Yield percentages for rice, pasta, legumes, and vegetables are derived by comparing raw and cooked entries in <strong ${STRONG}>USDA FoodData Central</strong> — the same database that powers most major nutrition apps.`,
      },
      {
        label: 'Estimates',
        html: 'A small number of foods (salmon, shrimp) use industry-standard estimates because USDA has not published direct cooking-yield data for them. These are clearly disclosed on the relevant food pages.',
      },
    ],
    howHeading: 'How the calculation works',
    howParagraphs: [
      'Every conversion is built on one number: the yield percentage. This is the cooked weight expressed as a percentage of the raw weight. A 75% yield means 100g raw becomes 75g cooked. A 300% yield means 100g dry becomes 300g cooked (like white rice).',
      'Macros are always calculated from the raw-weight equivalent, regardless of which direction you convert. This keeps the output consistent with USDA nutrition data, which is measured on raw food.',
      'Yield percentages are research-based averages — actual results vary by exact cut, size, moisture content, and cooking method. The calculator gets you meaningfully closer to accurate than not accounting for cooking loss at all; it does not promise laboratory precision.',
    ],
    toolHeading: 'The tool',
    toolParagraphs: [
      'Raw to Cooked Calculator is a free, static web tool with no accounts, no tracking of personal data, and no paywalled features. It works in any browser on any device.',
      'It covers chicken breast, ground beef, salmon, pork, rice, pasta, quinoa, lentils, spinach, broccoli, potato, and more — with per-cooking-method yield data for foods where it meaningfully changes the result.',
    ],
    ctaLabel: '← Use the calculator',
  },

  es: {
    metaTitle: 'Sobre la Calculadora Crudo a Cocido | Datos de rendimiento del USDA',
    metaDescription:
      'La Calculadora Crudo a Cocido usa datos oficiales de rendimiento de cocción del USDA para convertir pesos crudos y cocidos con macros completos. Descubre cómo funciona y por qué existe.',
    eyebrow: 'Acerca de',
    heading: 'Por qué existe esta calculadora',
    lede: 'El problema del peso crudo frente al cocido es una de las causas más frecuentes de error al contar macros — y una de las más fáciles de resolver en cuanto se entiende.',
    problemHeading: 'El problema',
    problemParagraphs: [
      'Las bases de datos nutricionales habituales —incluida USDA FoodData Central— publican los macros según el peso del alimento crudo y sin cocinar. Pero casi todo el mundo cocina antes de comer. Y el peso del alimento cambia durante la cocción: la carne pierde agua y encoge, los cereales secos absorben agua y se expanden. La etiqueta nutricional sigue igual, pero el peso de tu báscula es completamente distinto.',
      'Si pesas 150 g de pollo ya cocido y lo registras contra una entrada de base de datos en crudo, en realidad estás registrando los macros de 150 g crudos: te faltan unos 50 g de esa fuente de proteína. Haz esto a diario y el error se acumula muy rápido.',
      'Esta calculadora lo resuelve dejándote introducir el peso en crudo o en cocido y convirtiéndolo al instante al otro lado —junto con las calorías, proteínas, carbohidratos y grasas exactas— usando el rendimiento de cocción correcto para cada alimento concreto.',
    ],
    dataHeading: 'De dónde salen los datos',
    dataIntro:
      'Cada cifra de rendimiento de este sitio procede de fuentes oficiales del USDA, las mismas bases de datos que usan dietistas, fabricantes de alimentos e investigadores.',
    dataCards: [
      {
        label: 'Carne y Aves',
        html: `Los porcentajes de rendimiento de pollo, res, cerdo, pavo y otras proteínas animales provienen de la <strong ${STRONG}>Tabla de Rendimientos de Cocción del USDA para Carne y Aves</strong>, que recoge mediciones realizadas en condiciones de cocción controladas.`,
      },
      {
        label: 'Cereales, Verduras y Legumbres',
        html: `Los porcentajes de rendimiento de arroz, pasta, legumbres y verduras se obtienen comparando las entradas en crudo y en cocido de <strong ${STRONG}>USDA FoodData Central</strong>, la misma base de datos que alimenta a la mayoría de las apps de nutrición.`,
      },
      {
        label: 'Estimaciones',
        html: 'Unos pocos alimentos (salmón, camarones) usan estimaciones estándar del sector porque el USDA no ha publicado datos directos de rendimiento de cocción para ellos. Esto se indica con claridad en las páginas de esos alimentos.',
      },
    ],
    howHeading: 'Cómo funciona el cálculo',
    howParagraphs: [
      'Toda conversión se apoya en un solo número: el porcentaje de rendimiento. Es el peso cocido expresado como porcentaje del peso crudo. Un rendimiento del 75% significa que 100 g crudos se quedan en 75 g cocidos. Un rendimiento del 300% significa que 100 g en seco pasan a 300 g cocidos (como el arroz blanco).',
      'Los macros siempre se calculan a partir del peso equivalente en crudo, sin importar en qué dirección conviertas. Así el resultado sigue siendo coherente con los datos nutricionales del USDA, que se miden sobre el alimento crudo.',
      'Los porcentajes de rendimiento son promedios basados en investigación: los resultados reales varían según el corte exacto, el tamaño, la humedad y el método de cocción. La calculadora te acerca mucho más a la realidad que ignorar por completo la pérdida por cocción; no promete precisión de laboratorio.',
    ],
    toolHeading: 'La herramienta',
    toolParagraphs: [
      'La Calculadora Crudo a Cocido es una herramienta web gratuita y estática, sin cuentas, sin seguimiento de datos personales y sin funciones de pago. Funciona en cualquier navegador y en cualquier dispositivo.',
      'Cubre pechuga de pollo, carne molida, salmón, cerdo, arroz, pasta, quinoa, lentejas, espinaca, brócoli, papa y más — con datos de rendimiento por método de cocción en los alimentos donde eso cambia el resultado de forma apreciable.',
    ],
    ctaLabel: '← Usar la calculadora',
  },

  fr: {
    metaTitle: 'À propos du Calculateur Cru-Cuit | Données de rendement de l’USDA',
    metaDescription:
      'Le Calculateur Cru-Cuit s’appuie sur les données officielles de rendement de cuisson de l’USDA pour convertir les poids crus et cuits avec les macros complètes. Découvrez son fonctionnement et sa raison d’être.',
    eyebrow: 'À propos',
    heading: 'Pourquoi ce calculateur existe',
    lede: 'L’écart entre poids cru et poids cuit est l’une des sources d’erreur les plus répandues dans le suivi des macros — et l’une des plus simples à corriger une fois qu’on l’a comprise.',
    problemHeading: 'Le problème',
    problemParagraphs: [
      'Les bases de données nutritionnelles courantes — y compris USDA FoodData Central — publient les macros sur la base du poids cru, non cuit. Or presque tout le monde cuisine avant de manger. Et le poids de l’aliment change à la cuisson : la viande perd de l’eau et rétrécit, les céréales sèches en absorbent et gonflent. L’étiquette nutritionnelle, elle, ne bouge pas, mais le poids sur votre balance n’a plus rien à voir.',
      'Si vous pesez 150 g de poulet cuit et l’enregistrez face à une entrée exprimée en poids cru, vous comptabilisez en réalité les macros de 150 g crus — soit environ 50 g de source de protéines en moins. Répétez l’opération chaque jour et l’erreur s’accumule très vite.',
      'Ce calculateur règle le problème : vous saisissez un poids cru ou cuit et il convertit instantanément vers l’autre côté — avec les calories, protéines, glucides et lipides exacts — en appliquant le rendement de cuisson propre à chaque aliment.',
    ],
    dataHeading: 'D’où viennent les données',
    dataIntro:
      'Chaque rendement présenté sur ce site provient de sources officielles de l’USDA — les bases de données auxquelles se réfèrent diététiciens, industriels de l’agroalimentaire et chercheurs.',
    dataCards: [
      {
        label: 'Viandes et Volailles',
        html: `Les rendements du poulet, du bœuf, du porc, de la dinde et des autres protéines animales proviennent de la <strong ${STRONG}>Table des rendements de cuisson de l’USDA pour la viande et la volaille</strong>, qui publie des mesures réalisées dans des conditions de cuisson contrôlées.`,
      },
      {
        label: 'Céréales, Légumes et Légumineuses',
        html: `Les rendements du riz, des pâtes, des légumineuses et des légumes sont obtenus en comparant les entrées crues et cuites de <strong ${STRONG}>USDA FoodData Central</strong> — la base de données qui alimente la plupart des grandes applications de nutrition.`,
      },
      {
        label: 'Estimations',
        html: 'Quelques aliments (saumon, crevettes) reposent sur des estimations standard du secteur, faute de données de rendement publiées par l’USDA. Ces cas sont clairement signalés sur les pages concernées.',
      },
    ],
    howHeading: 'Comment le calcul fonctionne',
    howParagraphs: [
      'Chaque conversion repose sur un seul chiffre : le pourcentage de rendement. Il exprime le poids cuit en pourcentage du poids cru. Un rendement de 75 % signifie que 100 g crus donnent 75 g cuits. Un rendement de 300 % signifie que 100 g secs deviennent 300 g cuits (comme le riz blanc).',
      'Les macros sont toujours calculées à partir de l’équivalent en poids cru, quel que soit le sens de la conversion. Les valeurs affichées restent ainsi cohérentes avec les données de l’USDA, mesurées sur l’aliment cru.',
      'Les rendements sont des moyennes issues de la recherche : les résultats réels varient selon le morceau, la taille, la teneur en eau et le mode de cuisson. Le calculateur vous rapproche nettement de la réalité par rapport à une absence totale de prise en compte de la perte à la cuisson ; il ne promet pas une précision de laboratoire.',
    ],
    toolHeading: 'L’outil',
    toolParagraphs: [
      'Le Calculateur Cru-Cuit est un outil web gratuit et statique : pas de compte, pas de suivi de données personnelles, aucune fonction payante. Il fonctionne dans n’importe quel navigateur, sur n’importe quel appareil.',
      'Il couvre le blanc de poulet, le bœuf haché, le saumon, le porc, le riz, les pâtes, le quinoa, les lentilles, les épinards, le brocoli, la pomme de terre et bien d’autres — avec des rendements par mode de cuisson pour les aliments où cela change réellement le résultat.',
    ],
    ctaLabel: '← Utiliser le calculateur',
  },

  de: {
    metaTitle: 'Über den Roh-zu-Gegart-Rechner | Garausbeuten nach USDA-Daten',
    metaDescription:
      'Der Roh-zu-Gegart-Rechner nutzt offizielle USDA-Garausbeuten, um rohe und gegarte Gewichte samt vollständiger Makros umzurechnen. So funktioniert er — und darum gibt es ihn.',
    eyebrow: 'Über uns',
    heading: 'Warum es diesen Rechner gibt',
    lede: 'Der Unterschied zwischen Roh- und Gargewicht ist eine der häufigsten Fehlerquellen beim Makro-Tracking — und eine der am leichtesten zu behebenden, sobald man sie verstanden hat.',
    problemHeading: 'Das Problem',
    problemParagraphs: [
      'Gängige Nährwertdatenbanken — auch USDA FoodData Central — geben Makros für das rohe, ungegarte Gewicht an. Gegessen wird aber meist gegart. Und beim Garen ändert sich das Gewicht: Fleisch verliert Wasser und schrumpft, trockenes Getreide nimmt Wasser auf und quillt. Das Nährwertetikett bleibt gleich, das Gewicht auf deiner Waage ist ein völlig anderes.',
      'Wenn du 150 g gegartes Hähnchen wiegst und gegen einen Datenbankeintrag mit Rohwerten einträgst, erfasst du in Wahrheit die Makros von 150 g roh — rund 50 g deiner Proteinquelle fehlen. Täglich wiederholt, summiert sich dieser Fehler rasant.',
      'Dieser Rechner löst das: Du gibst ein rohes oder ein gegartes Gewicht ein und erhältst sofort den Gegenwert der anderen Seite — samt exakter Kalorien, Proteine, Kohlenhydrate und Fette — berechnet mit der passenden Garausbeute für genau dieses Lebensmittel.',
    ],
    dataHeading: 'Woher die Daten stammen',
    dataIntro:
      'Jeder Ausbeutewert auf dieser Seite stammt aus offiziellen USDA-Quellen — denselben Datenbanken, mit denen Ernährungsberatung, Lebensmittelhersteller und Forschung arbeiten.',
    dataCards: [
      {
        label: 'Fleisch & Geflügel',
        html: `Die Ausbeuten für Hähnchen, Rind, Schwein, Pute und andere tierische Proteine stammen aus der <strong ${STRONG}>USDA-Tabelle der Garausbeuten für Fleisch und Geflügel</strong>, die unter kontrollierten Garbedingungen gemessene Werte ausweist.`,
      },
      {
        label: 'Getreide, Gemüse & Hülsenfrüchte',
        html: `Die Ausbeuten für Reis, Nudeln, Hülsenfrüchte und Gemüse ergeben sich aus dem Vergleich roher und gegarter Einträge in <strong ${STRONG}>USDA FoodData Central</strong> — derselben Datenbank, auf der die meisten großen Ernährungs-Apps aufbauen.`,
      },
      {
        label: 'Schätzwerte',
        html: 'Für einige wenige Lebensmittel (Lachs, Garnelen) kommen branchenübliche Schätzwerte zum Einsatz, weil das USDA dafür keine direkten Garausbeuten veröffentlicht hat. Auf den betreffenden Seiten ist das klar gekennzeichnet.',
      },
    ],
    howHeading: 'Wie die Berechnung funktioniert',
    howParagraphs: [
      'Jede Umrechnung beruht auf einer einzigen Zahl: der Ausbeute in Prozent. Sie gibt das Gargewicht als Prozentsatz des Rohgewichts an. 75 % Ausbeute heißt: Aus 100 g roh werden 75 g gegart. 300 % Ausbeute heißt: Aus 100 g trocken werden 300 g gegart (so wie bei weißem Reis).',
      'Die Makros werden immer aus dem Rohgewichts-Äquivalent berechnet, egal in welche Richtung du umrechnest. So bleibt das Ergebnis mit den USDA-Nährwerten vergleichbar, die am rohen Lebensmittel gemessen werden.',
      'Die Ausbeuten sind forschungsbasierte Durchschnittswerte — die tatsächlichen Ergebnisse hängen von Teilstück, Größe, Feuchtigkeitsgehalt und Garmethode ab. Der Rechner bringt dich der Realität deutlich näher, als den Garverlust gar nicht zu berücksichtigen; Laborpräzision verspricht er nicht.',
    ],
    toolHeading: 'Das Werkzeug',
    toolParagraphs: [
      'Der Roh-zu-Gegart-Rechner ist ein kostenloses, statisches Web-Tool: keine Konten, kein Tracking persönlicher Daten, keine kostenpflichtigen Funktionen. Er läuft in jedem Browser auf jedem Gerät.',
      'Er deckt Hähnchenbrust, Hackfleisch, Lachs, Schwein, Reis, Nudeln, Quinoa, Linsen, Spinat, Brokkoli, Kartoffeln und mehr ab — mit Ausbeuten je Garmethode dort, wo das den Wert spürbar verändert.',
    ],
    ctaLabel: '← Zum Rechner',
  },

  pt: {
    metaTitle: 'Sobre a Calculadora de Cru para Cozido | Dados de rendimento do USDA',
    metaDescription:
      'A Calculadora de Cru para Cozido usa dados oficiais de rendimento de cocção do USDA para converter pesos crus e cozidos com macros completos. Veja como funciona e por que existe.',
    eyebrow: 'Sobre',
    heading: 'Por que esta calculadora existe',
    lede: 'A diferença entre peso cru e peso cozido é uma das causas mais comuns de erro no controle de macros — e uma das mais fáceis de resolver assim que você entende o problema.',
    problemHeading: 'O problema',
    problemParagraphs: [
      'As bases de dados nutricionais mais usadas — inclusive a USDA FoodData Central — publicam os macros com base no peso do alimento cru, sem cozinhar. Só que quase todo mundo cozinha antes de comer. E o peso muda durante o cozimento: a carne perde água e encolhe, os grãos secos absorvem água e incham. O rótulo nutricional continua o mesmo, mas o peso na sua balança é completamente outro.',
      'Se você pesa 150 g de frango já cozido e registra contra uma entrada em peso cru, na prática está contando os macros de apenas 150 g crus — faltam cerca de 50 g daquela fonte de proteína. Repita isso todo dia e o erro se acumula rápido.',
      'Esta calculadora resolve isso: você informa o peso cru ou o cozido e ela converte na hora para o outro lado — junto com as calorias, proteínas, carboidratos e gorduras exatas — aplicando o rendimento de cocção correto para cada alimento específico.',
    ],
    dataHeading: 'De onde vêm os dados',
    dataIntro:
      'Todo número de rendimento deste site vem de fontes oficiais do USDA — as mesmas bases usadas por nutricionistas, indústrias de alimentos e pesquisadores.',
    dataCards: [
      {
        label: 'Carnes e Aves',
        html: `Os percentuais de rendimento de frango, carne bovina, suína, peru e outras proteínas animais vêm da <strong ${STRONG}>Tabela de Rendimentos de Cocção do USDA para Carnes e Aves</strong>, que reporta medições feitas em condições controladas de cozimento.`,
      },
      {
        label: 'Grãos, Vegetais e Leguminosas',
        html: `Os percentuais de rendimento de arroz, massas, leguminosas e vegetais são obtidos comparando as entradas cruas e cozidas na <strong ${STRONG}>USDA FoodData Central</strong> — a mesma base que alimenta a maioria dos grandes aplicativos de nutrição.`,
      },
      {
        label: 'Estimativas',
        html: 'Alguns poucos alimentos (salmão, camarão) usam estimativas padrão do setor, porque o USDA não publicou dados diretos de rendimento de cocção para eles. Isso é informado com clareza nas páginas desses alimentos.',
      },
    ],
    howHeading: 'Como o cálculo funciona',
    howParagraphs: [
      'Toda conversão se apoia em um único número: o percentual de rendimento. Ele é o peso cozido expresso como porcentagem do peso cru. Um rendimento de 75% significa que 100 g crus viram 75 g cozidos. Um rendimento de 300% significa que 100 g secos viram 300 g cozidos (como o arroz branco).',
      'Os macros são sempre calculados a partir do peso equivalente em cru, independentemente da direção da conversão. Assim o resultado continua compatível com os dados do USDA, que são medidos no alimento cru.',
      'Os percentuais de rendimento são médias baseadas em pesquisa — os resultados reais variam conforme o corte, o tamanho, o teor de umidade e o método de cozimento. A calculadora aproxima você bastante do valor correto em comparação com ignorar a perda no cozimento; ela não promete precisão de laboratório.',
    ],
    toolHeading: 'A ferramenta',
    toolParagraphs: [
      'A Calculadora de Cru para Cozido é uma ferramenta web gratuita e estática: sem contas, sem rastreamento de dados pessoais e sem recursos pagos. Funciona em qualquer navegador e em qualquer dispositivo.',
      'Ela cobre peito de frango, carne moída, salmão, carne suína, arroz, macarrão, quinoa, lentilhas, espinafre, brócolis, batata e muito mais — com rendimentos por método de cozimento nos alimentos em que isso muda o resultado de forma relevante.',
    ],
    ctaLabel: '← Usar a calculadora',
  },

  ja: {
    metaTitle: '生・加熱後計算機について | USDAの調理歩留まりデータ',
    metaDescription:
      '生・加熱後計算機は、USDA公式の調理歩留まりデータを使って生と加熱後の重量を換算し、栄養素も表示します。仕組みと、このサイトを作った理由をご紹介します。',
    eyebrow: '運営者について',
    heading: 'この計算機を作った理由',
    lede: '生の重量と加熱後の重量の食い違いは、栄養管理で最もよくある誤差の原因のひとつです。そして仕組みさえ分かれば、最も簡単に解消できるもののひとつでもあります。',
    problemHeading: '問題点',
    problemParagraphs: [
      'USDA FoodData Centralを含め、一般的な栄養データベースは生の未調理状態の重量を基準に栄養素を掲載しています。しかし多くの人は加熱してから食べます。加熱すれば重量は変わります。肉は水分が抜けて縮み、乾燥した穀物は水を吸って膨らみます。栄養表示は変わらないのに、はかりの数値はまったく別物になっているのです。',
      '加熱後の鶏肉150gを量り、それを生重量基準のデータベース項目に当てはめて記録すると、実際には生150g分の栄養しか計上していないことになります。タンパク源にしておよそ50g分の取りこぼしです。これを毎日続ければ、誤差はあっという間に積み上がります。',
      'この計算機はその問題を解決します。生でも加熱後でも重量を入力すれば、食材ごとに正しい歩留まりを使って、もう一方の重量と、正確なカロリー・タンパク質・炭水化物・脂質をすぐに算出します。',
    ],
    dataHeading: 'データの出典',
    dataIntro:
      'このサイトのすべての歩留まりの数値は、USDAの公式データ——管理栄養士、食品メーカー、研究者が使うのと同じデータベース——に基づいています。',
    dataCards: [
      {
        label: '食肉・鶏肉',
        html: `鶏肉、牛肉、豚肉、七面鳥などの動物性タンパク質の歩留まりは、<strong ${STRONG}>USDA 食肉・鶏肉の調理歩留まり表</strong>によります。同表は管理された調理条件で測定された数値を掲載しています。`,
      },
      {
        label: '穀物・野菜・豆類',
        html: `米、パスタ、豆類、野菜の歩留まりは、<strong ${STRONG}>USDA FoodData Central</strong>の生と加熱後のデータを比較して算出しています。主要な栄養管理アプリの多くが依拠しているのと同じデータベースです。`,
      },
      {
        label: '推定値',
        html: 'ごく一部の食材（サーモン、エビ）は、USDAが調理歩留まりを直接公表していないため、業界標準の推定値を使用しています。該当する食材のページにその旨を明記しています。',
      },
    ],
    howHeading: '計算の仕組み',
    howParagraphs: [
      'すべての換算は、歩留まり率というひとつの数値に基づいています。これは加熱後の重量を生の重量に対する百分率で表したものです。歩留まり75%なら生100gが加熱後75gに、歩留まり300%なら乾燥100gが加熱後300gになります（白米がこれにあたります）。',
      '栄養素は換算の向きにかかわらず、常に生の重量に換算した値から計算します。USDAの栄養データは生の状態で測定されているため、この方式なら結果が常に一致します。',
      '歩留まり率は研究に基づく平均値です。実際の結果は部位、大きさ、水分量、加熱方法によって変わります。この計算機は、加熱による減少をまったく考慮しない場合よりも確実に正確に近づけるためのもので、実験室並みの精度をうたうものではありません。',
    ],
    toolHeading: 'このツールについて',
    toolParagraphs: [
      '生・加熱後計算機は無料の静的Webツールです。アカウント登録も、個人データの追跡も、有料機能もありません。どのブラウザ、どの端末でも動作します。',
      '鶏胸肉、合い挽き肉、サーモン、豚肉、米、パスタ、キヌア、レンズ豆、ほうれん草、ブロッコリー、じゃがいもなどに対応し、加熱方法によって結果が大きく変わる食材については方法別の歩留まりも用意しています。',
    ],
    ctaLabel: '← 計算機を使う',
  },

  ko: {
    metaTitle: '생·조리 계산기 소개 | USDA 조리 수율 데이터',
    metaDescription:
      '생·조리 계산기는 USDA 공식 조리 수율 데이터로 생 중량과 조리 후 중량을 변환하고 영양소까지 보여줍니다. 작동 방식과 만들게 된 이유를 소개합니다.',
    eyebrow: '사이트 소개',
    heading: '이 계산기를 만든 이유',
    lede: '생 중량과 조리 후 중량의 차이는 영양소 기록에서 가장 흔한 오차 원인 중 하나이며, 원리만 알면 가장 쉽게 바로잡을 수 있는 문제이기도 합니다.',
    problemHeading: '문제',
    problemParagraphs: [
      'USDA FoodData Central을 포함한 일반적인 영양 데이터베이스는 조리하지 않은 생 중량을 기준으로 영양소를 표기합니다. 그런데 대부분의 사람은 조리한 뒤에 먹습니다. 조리하면 무게가 달라집니다. 고기는 물이 빠져 줄어들고, 마른 곡물은 물을 흡수해 불어납니다. 영양성분표는 그대로인데, 저울에 찍히는 숫자는 완전히 달라지는 것이죠.',
      '조리한 닭고기 150g을 재서 생중량 기준 항목에 대입해 기록하면, 실제로는 생 150g 분량의 영양소만 계산하게 됩니다. 단백질 공급원 기준으로 약 50g이 빠지는 셈입니다. 이를 매일 반복하면 오차는 순식간에 쌓입니다.',
      '이 계산기는 그 문제를 해결합니다. 생 중량이든 조리 후 중량이든 입력하면, 식품마다 알맞은 조리 수율을 적용해 반대편 중량과 정확한 칼로리·단백질·탄수화물·지방을 즉시 계산해 줍니다.',
    ],
    dataHeading: '데이터 출처',
    dataIntro:
      '이 사이트의 모든 수율 수치는 USDA 공식 자료 — 영양사, 식품 제조사, 연구자가 사용하는 것과 같은 데이터베이스 — 에서 나옵니다.',
    dataCards: [
      {
        label: '육류 및 가금류',
        html: `닭고기, 소고기, 돼지고기, 칠면조 등 동물성 단백질의 수율은 <strong ${STRONG}>USDA 육류·가금류 조리 수율표</strong>에서 가져왔습니다. 이 표는 통제된 조리 조건에서 측정한 값을 제공합니다.`,
      },
      {
        label: '곡물, 채소 및 콩류',
        html: `쌀, 파스타, 콩류, 채소의 수율은 <strong ${STRONG}>USDA FoodData Central</strong>의 생·조리 항목을 비교해 산출했습니다. 주요 영양 관리 앱 대부분이 근거로 삼는 바로 그 데이터베이스입니다.`,
      },
      {
        label: '추정값',
        html: '소수의 식품(연어, 새우)은 USDA가 조리 수율을 직접 발표하지 않아 업계 표준 추정값을 사용합니다. 해당 식품 페이지에 이 사실을 분명히 표시해 두었습니다.',
      },
    ],
    howHeading: '계산 방식',
    howParagraphs: [
      '모든 변환은 단 하나의 숫자, 즉 수율에 기반합니다. 수율은 조리 후 중량을 생 중량에 대한 백분율로 나타낸 값입니다. 수율 75%는 생 100g이 조리 후 75g이 된다는 뜻이고, 수율 300%는 마른 상태 100g이 조리 후 300g이 된다는 뜻입니다(백미가 그렇습니다).',
      '영양소는 변환 방향과 관계없이 항상 생중량 기준으로 계산합니다. 그래야 생 식품을 기준으로 측정된 USDA 영양 데이터와 결과가 어긋나지 않습니다.',
      '수율은 연구에 기반한 평균값입니다. 실제 결과는 부위, 크기, 수분 함량, 조리법에 따라 달라집니다. 이 계산기는 조리 손실을 아예 무시할 때보다 훨씬 정확한 값에 가까워지게 해 주지만, 실험실 수준의 정밀도를 보장하지는 않습니다.',
    ],
    toolHeading: '이 도구에 대하여',
    toolParagraphs: [
      '생·조리 계산기는 무료 정적 웹 도구입니다. 계정도, 개인 데이터 추적도, 유료 기능도 없습니다. 어떤 브라우저와 기기에서도 작동합니다.',
      '닭 가슴살, 다진 소고기, 연어, 돼지고기, 쌀, 파스타, 퀴노아, 렌틸콩, 시금치, 브로콜리, 감자 등을 다루며, 조리법에 따라 결과가 크게 달라지는 식품은 조리법별 수율도 제공합니다.',
    ],
    ctaLabel: '← 계산기 사용하기',
  },

  it: {
    metaTitle: 'Informazioni sul Calcolatore Crudo-Cotto | Dati di resa USDA',
    metaDescription:
      'Il Calcolatore Crudo-Cotto usa i dati ufficiali USDA sulle rese di cottura per convertire pesi crudi e cotti con i macro completi. Scopri come funziona e perché esiste.',
    eyebrow: 'Chi siamo',
    heading: 'Perché esiste questo calcolatore',
    lede: 'Lo scarto tra peso da crudo e peso da cotto è una delle cause più diffuse di errore nel conteggio dei macro — e una delle più semplici da correggere, una volta capito il meccanismo.',
    problemHeading: 'Il problema',
    problemParagraphs: [
      'I database nutrizionali di riferimento — inclusa USDA FoodData Central — riportano i macro sul peso dell’alimento crudo, non cotto. Quasi tutti però cucinano prima di mangiare. E il peso cambia durante la cottura: la carne perde acqua e si restringe, i cereali secchi assorbono acqua e si gonfiano. L’etichetta nutrizionale resta la stessa, ma il peso sulla bilancia è tutto un altro.',
      'Se pesi 150 g di pollo già cotto e lo registri rispetto a una voce espressa sul crudo, in realtà stai conteggiando i macro di soli 150 g da crudo: ti sfuggono circa 50 g di quella fonte proteica. Ripeti l’operazione ogni giorno e l’errore si accumula in fretta.',
      'Questo calcolatore risolve il problema: inserisci il peso da crudo oppure da cotto e ottieni subito l’equivalente dall’altro lato — insieme a calorie, proteine, carboidrati e grassi esatti — applicando la resa di cottura corretta per quel singolo alimento.',
    ],
    dataHeading: 'Da dove vengono i dati',
    dataIntro:
      'Ogni valore di resa presente su questo sito proviene da fonti ufficiali USDA, gli stessi database usati da dietisti, industrie alimentari e ricercatori.',
    dataCards: [
      {
        label: 'Carne e Pollame',
        html: `Le rese di pollo, manzo, maiale, tacchino e altre proteine animali provengono dalla <strong ${STRONG}>Tabella USDA delle rese di cottura per carne e pollame</strong>, che riporta misurazioni effettuate in condizioni di cottura controllate.`,
      },
      {
        label: 'Cereali, Verdure e Legumi',
        html: `Le rese di riso, pasta, legumi e verdure si ricavano confrontando le voci crude e cotte in <strong ${STRONG}>USDA FoodData Central</strong> — lo stesso database su cui si basa la maggior parte delle grandi app di nutrizione.`,
      },
      {
        label: 'Stime',
        html: 'Pochi alimenti (salmone, gamberi) si basano su stime standard del settore, perché l’USDA non ha pubblicato dati diretti sulla resa di cottura. La cosa è indicata chiaramente nelle pagine dei relativi alimenti.',
      },
    ],
    howHeading: 'Come funziona il calcolo',
    howParagraphs: [
      'Ogni conversione poggia su un solo numero: la percentuale di resa, cioè il peso da cotto espresso come percentuale del peso da crudo. Una resa del 75% significa che 100 g da crudo diventano 75 g da cotti. Una resa del 300% significa che 100 g da secco diventano 300 g da cotti (come il riso bianco).',
      'I macro si calcolano sempre a partire dall’equivalente in peso da crudo, in qualunque direzione avvenga la conversione. Così il risultato resta coerente con i dati nutrizionali USDA, misurati sull’alimento crudo.',
      'Le rese sono medie basate su ricerche: i risultati reali variano in base al taglio, alla pezzatura, all’umidità e al metodo di cottura. Il calcolatore ti avvicina in modo sensibile al dato corretto rispetto al non considerare affatto la perdita in cottura; non promette una precisione da laboratorio.',
    ],
    toolHeading: 'Lo strumento',
    toolParagraphs: [
      'Il Calcolatore Crudo-Cotto è uno strumento web gratuito e statico: nessun account, nessun tracciamento di dati personali, nessuna funzione a pagamento. Funziona su qualsiasi browser e qualsiasi dispositivo.',
      'Copre petto di pollo, carne macinata, salmone, maiale, riso, pasta, quinoa, lenticchie, spinaci, broccoli, patate e altro ancora — con rese per singolo metodo di cottura negli alimenti in cui questo cambia davvero il risultato.',
    ],
    ctaLabel: '← Usa il calcolatore',
  },

  hi: {
    metaTitle: 'कच्चे से पके कैलकुलेटर के बारे में | USDA कुकिंग यील्ड डेटा',
    metaDescription:
      'कच्चे से पके का कैलकुलेटर USDA के आधिकारिक कुकिंग यील्ड डेटा से कच्चे और पके वजन बदलता है और पूरे मैक्रो दिखाता है। जानें यह कैसे काम करता है और क्यों बना।',
    eyebrow: 'हमारे बारे में',
    heading: 'यह कैलकुलेटर क्यों बना',
    lede: 'कच्चे बनाम पके वजन की उलझन मैक्रो ट्रैकिंग में गलती की सबसे आम वजहों में से एक है — और एक बार समझ लेने पर सबसे आसानी से ठीक होने वाली भी।',
    problemHeading: 'समस्या',
    problemParagraphs: [
      'USDA FoodData Central समेत आम पोषण डेटाबेस मैक्रो के मान कच्चे, बिना पके भोजन के वजन के आधार पर देते हैं। लेकिन ज्यादातर लोग पकाकर खाते हैं। और पकाते समय वजन बदल जाता है: मांस पानी खोकर सिकुड़ता है, सूखे अनाज पानी सोखकर फैलते हैं। पोषण लेबल वही रहता है, पर आपकी तराजू का वजन बिलकुल अलग होता है।',
      'अगर आप 150g पका चिकन तौलते हैं और उसे कच्चे वजन वाली डेटाबेस प्रविष्टि पर दर्ज करते हैं, तो असल में आप सिर्फ 150g कच्चे के मैक्रो गिन रहे हैं — प्रोटीन स्रोत के करीब 50g छूट जाते हैं। यह रोज करें और गलती तेजी से जुड़ती चली जाती है।',
      'यह कैलकुलेटर इसे हल करता है: आप कच्चा या पका, कोई भी वजन डालें और हर खाद्य पदार्थ की सही कुकिंग यील्ड लगाकर यह तुरंत दूसरी तरफ का वजन निकाल देता है — साथ में सटीक कैलोरी, प्रोटीन, कार्ब्स और वसा भी।',
    ],
    dataHeading: 'डेटा कहां से आता है',
    dataIntro:
      'इस साइट का हर यील्ड आंकड़ा आधिकारिक USDA स्रोतों से आता है — वही डेटाबेस जिनका इस्तेमाल आहार विशेषज्ञ, खाद्य निर्माता और शोधकर्ता करते हैं।',
    dataCards: [
      {
        label: 'मांस और मुर्गी',
        html: `चिकन, बीफ, पोर्क, टर्की और अन्य पशु प्रोटीन के यील्ड प्रतिशत <strong ${STRONG}>USDA मांस और मुर्गी कुकिंग यील्ड तालिका</strong> से लिए गए हैं, जो नियंत्रित परिस्थितियों में मापे गए आंकड़े देती है।`,
      },
      {
        label: 'अनाज, सब्जियां और दालें',
        html: `चावल, पास्ता, दालों और सब्जियों के यील्ड प्रतिशत <strong ${STRONG}>USDA FoodData Central</strong> में कच्ची और पकी प्रविष्टियों की तुलना से निकाले गए हैं — वही डेटाबेस जिस पर ज्यादातर बड़े पोषण ऐप चलते हैं।`,
      },
      {
        label: 'अनुमान',
        html: 'कुछ ही खाद्य पदार्थ (सैल्मन, झींगा) उद्योग-मानक अनुमानों पर आधारित हैं, क्योंकि USDA ने उनके लिए सीधे कुकिंग यील्ड डेटा प्रकाशित नहीं किया है। संबंधित पेजों पर यह साफ बताया गया है।',
      },
    ],
    howHeading: 'गणना कैसे काम करती है',
    howParagraphs: [
      'हर बदलाव एक ही संख्या पर टिका है: यील्ड प्रतिशत। यह पका वजन है, कच्चे वजन के प्रतिशत के रूप में। 75% यील्ड का मतलब 100g कच्चा पकने पर 75g रह जाता है। 300% यील्ड का मतलब 100g सूखा पकने पर 300g हो जाता है (जैसे सफेद चावल)।',
      'आप किसी भी दिशा में बदलें, मैक्रो हमेशा कच्चे वजन के बराबर मान से गिने जाते हैं। इससे नतीजे USDA के पोषण डेटा से मेल खाते रहते हैं, जो कच्चे भोजन पर मापा जाता है।',
      'यील्ड प्रतिशत शोध पर आधारित औसत हैं — असली नतीजे कट, आकार, नमी की मात्रा और पकाने के तरीके से बदलते हैं। यह कैलकुलेटर आपको पकाने में होने वाली कमी को पूरी तरह अनदेखा करने की तुलना में कहीं ज्यादा सही आंकड़े के करीब लाता है; यह प्रयोगशाला जैसी सटीकता का वादा नहीं करता।',
    ],
    toolHeading: 'यह टूल',
    toolParagraphs: [
      'कच्चे से पके का कैलकुलेटर एक मुफ्त, स्थिर वेब टूल है — कोई अकाउंट नहीं, कोई निजी डेटा ट्रैकिंग नहीं, कोई भुगतान वाली सुविधा नहीं। यह किसी भी ब्राउज़र और किसी भी डिवाइस पर चलता है।',
      'इसमें चिकन ब्रेस्ट, कीमा, सैल्मन, पोर्क, चावल, पास्ता, क्विनोआ, मसूर दाल, पालक, ब्रोकोली, आलू और बहुत कुछ शामिल है — और जिन खाद्य पदार्थों में पकाने का तरीका नतीजे को खासा बदलता है, उनके लिए विधि-वार यील्ड डेटा भी।',
    ],
    ctaLabel: '← कैलकुलेटर इस्तेमाल करें',
  },
};

export const CONTACT: Record<Locale, ContactPage> = {
  en: {
    metaTitle: 'Contact | Raw to Cooked Calculator',
    metaDescription:
      'Questions about cooking yield data, a calculation that looks off, or general feedback — reach out to the Raw to Cooked Calculator team.',
    eyebrow: 'Contact',
    heading: 'Get in touch',
    lede: 'For questions about how the calculator works, a data figure that looks wrong, or general feedback — we read every message.',
    emailLabel: 'Email',
    emailNote: 'We aim to respond within a few business days.',
    helpHeading: 'What we can help with',
    canHelpLabel: 'We can help',
    canHelp: [
      'Questions about how yield percentages are calculated',
      'Reporting a data figure that appears incorrect',
      'General feedback about the calculator or site',
      'Requesting a food that isn’t currently covered',
      'Technical issues or bugs',
    ],
    outOfScopeLabel: 'Out of scope',
    outOfScope: [
      'Personalized diet or nutrition advice',
      'Medical questions or health assessments',
      'Meal planning for specific health conditions',
    ],
    tipLabel: 'Reporting a data issue',
    tipText:
      'If a yield percentage looks wrong to you, the most helpful information to include is: the food and cooking method in question, the figure you expected, and the source you’re comparing against. That lets us check it against the USDA data quickly.',
  },

  es: {
    metaTitle: 'Contacto | Calculadora Crudo a Cocido',
    metaDescription:
      'Dudas sobre los datos de rendimiento de cocción, un cálculo que no cuadra o comentarios en general: escribe al equipo de la Calculadora Crudo a Cocido.',
    eyebrow: 'Contacto',
    heading: 'Ponte en contacto',
    lede: 'Si tienes dudas sobre cómo funciona la calculadora, ves una cifra que no cuadra o quieres darnos tu opinión, escríbenos: leemos todos los mensajes.',
    emailLabel: 'Correo electrónico',
    emailNote: 'Procuramos responder en unos pocos días hábiles.',
    helpHeading: 'En qué podemos ayudarte',
    canHelpLabel: 'Podemos ayudarte con',
    canHelp: [
      'Dudas sobre cómo se calculan los porcentajes de rendimiento',
      'Avisos sobre una cifra que parece incorrecta',
      'Comentarios generales sobre la calculadora o el sitio',
      'Solicitar un alimento que todavía no esté incluido',
      'Problemas técnicos o errores',
    ],
    outOfScopeLabel: 'Fuera de nuestro alcance',
    outOfScope: [
      'Asesoramiento dietético o nutricional personalizado',
      'Consultas médicas o evaluaciones de salud',
      'Planificación de comidas para condiciones de salud concretas',
    ],
    tipLabel: 'Avisar de un problema con los datos',
    tipText:
      'Si un porcentaje de rendimiento te parece incorrecto, lo más útil que puedes indicarnos es: el alimento y el método de cocción en cuestión, la cifra que esperabas y la fuente con la que lo comparas. Así podemos contrastarlo rápidamente con los datos del USDA.',
  },

  fr: {
    metaTitle: 'Contact | Calculateur Cru-Cuit',
    metaDescription:
      'Une question sur les données de rendement, un calcul qui vous semble faux ou un retour d’expérience : écrivez à l’équipe du Calculateur Cru-Cuit.',
    eyebrow: 'Contact',
    heading: 'Nous écrire',
    lede: 'Pour une question sur le fonctionnement du calculateur, un chiffre qui vous paraît erroné ou un retour général — nous lisons chaque message.',
    emailLabel: 'E-mail',
    emailNote: 'Nous nous efforçons de répondre sous quelques jours ouvrés.',
    helpHeading: 'Ce sur quoi nous pouvons vous aider',
    canHelpLabel: 'Nous pouvons aider',
    canHelp: [
      'Questions sur le mode de calcul des pourcentages de rendement',
      'Signalement d’un chiffre qui semble incorrect',
      'Retours généraux sur le calculateur ou le site',
      'Demande d’ajout d’un aliment non encore couvert',
      'Problèmes techniques ou bugs',
    ],
    outOfScopeLabel: 'Hors de notre périmètre',
    outOfScope: [
      'Conseils diététiques ou nutritionnels personnalisés',
      'Questions médicales ou bilans de santé',
      'Planification de repas pour des pathologies spécifiques',
    ],
    tipLabel: 'Signaler un problème de données',
    tipText:
      'Si un pourcentage de rendement vous semble faux, les informations les plus utiles à joindre sont : l’aliment et le mode de cuisson concernés, le chiffre que vous attendiez et la source à laquelle vous vous référez. Cela nous permet de vérifier rapidement auprès des données de l’USDA.',
  },

  de: {
    metaTitle: 'Kontakt | Roh-zu-Gegart-Rechner',
    metaDescription:
      'Fragen zu den Garausbeuten, ein Ergebnis, das nicht stimmen kann, oder allgemeines Feedback — schreib dem Team des Roh-zu-Gegart-Rechners.',
    eyebrow: 'Kontakt',
    heading: 'Schreib uns',
    lede: 'Ob Frage zur Funktionsweise des Rechners, ein Wert, der falsch aussieht, oder allgemeines Feedback — wir lesen jede Nachricht.',
    emailLabel: 'E-Mail',
    emailNote: 'Wir antworten in der Regel innerhalb weniger Werktage.',
    helpHeading: 'Wobei wir helfen können',
    canHelpLabel: 'Dabei helfen wir',
    canHelp: [
      'Fragen dazu, wie die Ausbeuten berechnet werden',
      'Hinweise auf einen Wert, der nicht zu stimmen scheint',
      'Allgemeines Feedback zum Rechner oder zur Seite',
      'Wunsch nach einem Lebensmittel, das noch fehlt',
      'Technische Probleme oder Fehler',
    ],
    outOfScopeLabel: 'Nicht unser Bereich',
    outOfScope: [
      'Individuelle Ernährungs- oder Diätberatung',
      'Medizinische Fragen oder Gesundheitsbewertungen',
      'Essensplanung bei bestimmten Erkrankungen',
    ],
    tipLabel: 'Einen Datenfehler melden',
    tipText:
      'Wenn dir eine Ausbeute falsch vorkommt, hilft uns am meisten: um welches Lebensmittel und welche Garmethode es geht, welchen Wert du erwartet hättest und mit welcher Quelle du vergleichst. Damit können wir es schnell gegen die USDA-Daten prüfen.',
  },

  pt: {
    metaTitle: 'Contato | Calculadora de Cru para Cozido',
    metaDescription:
      'Dúvidas sobre os dados de rendimento, um cálculo que parece errado ou comentários em geral — fale com a equipe da Calculadora de Cru para Cozido.',
    eyebrow: 'Contato',
    heading: 'Fale com a gente',
    lede: 'Para dúvidas sobre como a calculadora funciona, um número que parece errado ou comentários em geral — lemos todas as mensagens.',
    emailLabel: 'E-mail',
    emailNote: 'Procuramos responder em alguns dias úteis.',
    helpHeading: 'Com o que podemos ajudar',
    canHelpLabel: 'Podemos ajudar com',
    canHelp: [
      'Dúvidas sobre como os percentuais de rendimento são calculados',
      'Relato de um número que parece incorreto',
      'Comentários gerais sobre a calculadora ou o site',
      'Pedido de um alimento que ainda não está incluído',
      'Problemas técnicos ou bugs',
    ],
    outOfScopeLabel: 'Fora do escopo',
    outOfScope: [
      'Orientação dietética ou nutricional personalizada',
      'Perguntas médicas ou avaliações de saúde',
      'Planejamento de refeições para condições de saúde específicas',
    ],
    tipLabel: 'Relatar um problema nos dados',
    tipText:
      'Se um percentual de rendimento parecer errado, o mais útil é informar: o alimento e o método de cozimento em questão, o número que você esperava e a fonte com que está comparando. Assim conseguimos conferir rapidamente com os dados do USDA.',
  },

  ja: {
    metaTitle: 'お問い合わせ | 生・加熱後計算機',
    metaDescription:
      '調理歩留まりデータに関するご質問、数値がおかしいと感じた場合、ご意見・ご感想など、生・加熱後計算機の運営チームまでお気軽にご連絡ください。',
    eyebrow: 'お問い合わせ',
    heading: 'ご連絡ください',
    lede: '計算機の使い方に関するご質問、数値がおかしいと感じた場合、あるいはご意見・ご感想など、いただいたメッセージにはすべて目を通しています。',
    emailLabel: 'メール',
    emailNote: '数営業日以内の返信を心がけています。',
    helpHeading: '対応できる内容',
    canHelpLabel: '対応できます',
    canHelp: [
      '歩留まり率の算出方法に関するご質問',
      '数値が正しくないと思われる場合のご報告',
      '計算機やサイト全般へのご意見',
      '未対応の食材の追加リクエスト',
      '技術的な不具合・バグのご報告',
    ],
    outOfScopeLabel: '対応できない内容',
    outOfScope: [
      '個別の食事・栄養指導',
      '医療に関するご質問や健康状態の評価',
      '特定の疾患に対応した献立の作成',
    ],
    tipLabel: 'データの誤りをご報告いただく場合',
    tipText:
      '歩留まり率が正しくないと思われる場合、対象の食材と加熱方法、想定されていた数値、比較されている出典をあわせてお知らせいただけると助かります。USDAのデータとすぐに照合できます。',
  },

  ko: {
    metaTitle: '문의하기 | 생·조리 계산기',
    metaDescription:
      '조리 수율 데이터에 대한 질문, 이상해 보이는 계산 결과, 또는 일반적인 의견 — 생·조리 계산기 팀에 연락해 주세요.',
    eyebrow: '문의하기',
    heading: '연락 주세요',
    lede: '계산기 작동 방식에 대한 질문, 잘못돼 보이는 수치, 또는 일반적인 의견까지 — 보내주시는 메시지는 모두 읽고 있습니다.',
    emailLabel: '이메일',
    emailNote: '영업일 기준 며칠 안에 답변드리려 노력합니다.',
    helpHeading: '도와드릴 수 있는 것',
    canHelpLabel: '도와드릴 수 있습니다',
    canHelp: [
      '수율이 어떻게 계산되는지에 대한 질문',
      '잘못돼 보이는 수치 제보',
      '계산기나 사이트에 대한 일반적인 의견',
      '아직 없는 식품 추가 요청',
      '기술적 문제나 버그',
    ],
    outOfScopeLabel: '다루지 않는 것',
    outOfScope: [
      '개인 맞춤 식단·영양 상담',
      '의학적 질문이나 건강 상태 평가',
      '특정 질환을 위한 식단 설계',
    ],
    tipLabel: '데이터 오류를 알려주실 때',
    tipText:
      '수율이 잘못돼 보인다면, 해당 식품과 조리 방법, 기대하셨던 수치, 비교하신 출처를 함께 알려주시면 가장 도움이 됩니다. 그러면 USDA 데이터와 빠르게 대조해 볼 수 있습니다.',
  },

  it: {
    metaTitle: 'Contatti | Calcolatore Crudo-Cotto',
    metaDescription:
      'Domande sui dati di resa, un calcolo che non torna o un parere generale: scrivi al team del Calcolatore Crudo-Cotto.',
    eyebrow: 'Contatti',
    heading: 'Scrivici',
    lede: 'Per domande sul funzionamento del calcolatore, un dato che ti sembra sbagliato o un parere generale — leggiamo ogni messaggio.',
    emailLabel: 'E-mail',
    emailNote: 'Cerchiamo di rispondere entro pochi giorni lavorativi.',
    helpHeading: 'Su cosa possiamo aiutarti',
    canHelpLabel: 'Possiamo aiutarti con',
    canHelp: [
      'Domande su come vengono calcolate le percentuali di resa',
      'Segnalazione di un dato che sembra errato',
      'Pareri generali sul calcolatore o sul sito',
      'Richiesta di un alimento non ancora presente',
      'Problemi tecnici o bug',
    ],
    outOfScopeLabel: 'Fuori ambito',
    outOfScope: [
      'Consulenza dietetica o nutrizionale personalizzata',
      'Domande mediche o valutazioni sulla salute',
      'Pianificazione dei pasti per condizioni di salute specifiche',
    ],
    tipLabel: 'Segnalare un problema nei dati',
    tipText:
      'Se una percentuale di resa ti sembra sbagliata, le informazioni più utili da indicare sono: l’alimento e il metodo di cottura in questione, il valore che ti aspettavi e la fonte con cui lo stai confrontando. Così possiamo verificarlo rapidamente sui dati USDA.',
  },

  hi: {
    metaTitle: 'संपर्क करें | कच्चे से पके का कैलकुलेटर',
    metaDescription:
      'कुकिंग यील्ड डेटा से जुड़े सवाल, कोई गणना गलत लग रही हो, या सामान्य सुझाव — कच्चे से पके कैलकुलेटर की टीम से संपर्क करें।',
    eyebrow: 'संपर्क',
    heading: 'हमसे संपर्क करें',
    lede: 'कैलकुलेटर कैसे काम करता है, कोई आंकड़ा गलत लग रहा हो, या कोई सामान्य सुझाव हो — हम हर संदेश पढ़ते हैं।',
    emailLabel: 'ईमेल',
    emailNote: 'हम कुछ कार्यदिवसों में जवाब देने की कोशिश करते हैं।',
    helpHeading: 'हम किसमें मदद कर सकते हैं',
    canHelpLabel: 'हम मदद कर सकते हैं',
    canHelp: [
      'यील्ड प्रतिशत कैसे निकाले जाते हैं, इससे जुड़े सवाल',
      'कोई आंकड़ा गलत लगने पर उसकी जानकारी देना',
      'कैलकुलेटर या साइट पर सामान्य सुझाव',
      'फिलहाल शामिल न किए गए किसी खाद्य पदार्थ का अनुरोध',
      'तकनीकी दिक्कतें या बग',
    ],
    outOfScopeLabel: 'हमारे दायरे से बाहर',
    outOfScope: [
      'व्यक्तिगत आहार या पोषण सलाह',
      'चिकित्सा संबंधी सवाल या स्वास्थ्य आकलन',
      'किसी खास स्वास्थ्य स्थिति के लिए भोजन योजना',
    ],
    tipLabel: 'डेटा से जुड़ी गड़बड़ी बताना',
    tipText:
      'अगर आपको कोई यील्ड प्रतिशत गलत लगता है, तो सबसे उपयोगी जानकारी यह होगी: कौन-सा खाद्य पदार्थ और पकाने का कौन-सा तरीका, आपको किस आंकड़े की उम्मीद थी, और आप किस स्रोत से तुलना कर रहे हैं। इससे हम उसे USDA डेटा से जल्दी जांच सकते हैं।',
  },
};

export function getAbout(locale: Locale): AboutPage {
  return ABOUT[locale] ?? ABOUT.en;
}

export function getContact(locale: Locale): ContactPage {
  return CONTACT[locale] ?? CONTACT.en;
}
