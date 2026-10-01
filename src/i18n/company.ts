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
  bylineLabel: string;
  bylineName: string;
  bylineBio: string;
  reviewedLabel: string;
  reviewed: string;
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
    bylineLabel: 'Built and maintained by',
    bylineName: 'Vaibhav Tiwari',
    bylineBio:
      'Raw to Cooked Calculator is built and maintained by Vaibhav Tiwari, who compiled its cooking-yield tables from USDA publications and cross-checked every figure against its primary source. He is not a dietitian or food scientist; the site reports published research figures and does the conversion arithmetic — it is not a substitute for advice from a qualified professional.',
    reviewedLabel: 'Data last reviewed',
    reviewed: 'September 2026',
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
        label: 'Seafood & other cuts',
        html: `Yields for <strong ${STRONG}>salmon</strong> and <strong ${STRONG}>shrimp</strong>, plus turkey breast and veal, come from <strong ${STRONG}>USDA Agriculture Handbook No. 102</strong> (1975) — the USDA's foundational cooking-yield study, which documents cuts the newer meat table does not. No figure on this site relies on an informal estimate.`,
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
    bylineLabel: 'Creado y mantenido por',
    bylineName: 'Vaibhav Tiwari',
    bylineBio:
      'La Calculadora Crudo a Cocido está creada y mantenida por Vaibhav Tiwari, que compiló sus tablas de rendimiento de cocción a partir de publicaciones del USDA y contrastó cada cifra con su fuente primaria. No es dietista ni tecnólogo de alimentos; el sitio recoge cifras de investigación publicadas y hace la aritmética de conversión, y no sustituye el consejo de un profesional cualificado.',
    reviewedLabel: 'Datos revisados por última vez',
    reviewed: 'Septiembre de 2026',
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
        label: 'Pescado y otros cortes',
        html: `Los rendimientos del <strong ${STRONG}>salmón</strong> y los <strong ${STRONG}>camarones</strong>, además de la pechuga de pavo y la ternera, provienen del <strong ${STRONG}>Manual de Agricultura n.º 102 del USDA</strong> (1975), el estudio de referencia del USDA sobre rendimientos de cocción, que recoge cortes que la tabla de carne más reciente no incluye. Ninguna cifra del sitio se basa en una estimación informal.`,
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
    bylineLabel: 'Conçu et maintenu par',
    bylineName: 'Vaibhav Tiwari',
    bylineBio:
      'Le Calculateur Cru-Cuit est conçu et maintenu par Vaibhav Tiwari, qui a compilé ses tables de rendement de cuisson à partir des publications de l’USDA et vérifié chaque chiffre par rapport à sa source primaire. Il n’est ni diététicien ni technologue alimentaire ; le site reprend des chiffres de recherche publiés et effectue le calcul de conversion — il ne remplace pas l’avis d’un professionnel qualifié.',
    reviewedLabel: 'Données revues pour la dernière fois',
    reviewed: 'Septembre 2026',
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
        label: 'Poisson et autres morceaux',
        html: `Les rendements du <strong ${STRONG}>saumon</strong> et des <strong ${STRONG}>crevettes</strong>, ainsi que du blanc de dinde et du veau, proviennent du <strong ${STRONG}>Manuel agricole n° 102 de l’USDA</strong> (1975), l’étude de référence de l’USDA sur les rendements de cuisson, qui documente des morceaux absents de la table de viande plus récente. Aucun chiffre du site ne repose sur une estimation informelle.`,
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
    bylineLabel: 'Erstellt und gepflegt von',
    bylineName: 'Vaibhav Tiwari',
    bylineBio:
      'Der Roh-zu-Gegart-Rechner wird von Vaibhav Tiwari erstellt und gepflegt. Er hat die Garausbeute-Tabellen aus USDA-Veröffentlichungen zusammengetragen und jeden Wert mit seiner Primärquelle abgeglichen. Er ist weder Ernährungsberater noch Lebensmitteltechnologe; die Seite gibt veröffentlichte Forschungswerte wieder und übernimmt die Umrechnung — sie ersetzt nicht den Rat einer qualifizierten Fachkraft.',
    reviewedLabel: 'Daten zuletzt geprüft',
    reviewed: 'September 2026',
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
        label: 'Fisch & weitere Teilstücke',
        html: `Die Ausbeuten für <strong ${STRONG}>Lachs</strong> und <strong ${STRONG}>Garnelen</strong> sowie für Putenbrust und Kalb stammen aus dem <strong ${STRONG}>USDA Agriculture Handbook Nr. 102</strong> (1975), der grundlegenden USDA-Studie zu Garausbeuten, die Teilstücke erfasst, die in der neueren Fleischtabelle fehlen. Kein Wert auf dieser Seite beruht auf einer informellen Schätzung.`,
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
    bylineLabel: 'Criado e mantido por',
    bylineName: 'Vaibhav Tiwari',
    bylineBio:
      'A Calculadora de Cru para Cozido é criada e mantida por Vaibhav Tiwari, que compilou suas tabelas de rendimento de cocção a partir de publicações do USDA e conferiu cada número com sua fonte primária. Ele não é nutricionista nem cientista de alimentos; o site reproduz números de pesquisa publicados e faz a aritmética da conversão — não substitui a orientação de um profissional qualificado.',
    reviewedLabel: 'Dados revisados pela última vez',
    reviewed: 'Setembro de 2026',
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
        label: 'Peixe e outros cortes',
        html: `Os rendimentos do <strong ${STRONG}>salmão</strong> e do <strong ${STRONG}>camarão</strong>, além do peito de peru e da vitela, vêm do <strong ${STRONG}>Manual de Agricultura n.º 102 do USDA</strong> (1975), o estudo de referência do USDA sobre rendimentos de cocção, que documenta cortes que a tabela de carnes mais recente não inclui. Nenhum número do site se baseia em uma estimativa informal.`,
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



  it: {
    metaTitle: 'Informazioni sul Calcolatore Crudo-Cotto | Dati di resa USDA',
    metaDescription:
      'Il Calcolatore Crudo-Cotto usa i dati ufficiali USDA sulle rese di cottura per convertire pesi crudi e cotti con i macro completi. Scopri come funziona e perché esiste.',
    eyebrow: 'Chi siamo',
    heading: 'Perché esiste questo calcolatore',
    lede: 'Lo scarto tra peso da crudo e peso da cotto è una delle cause più diffuse di errore nel conteggio dei macro — e una delle più semplici da correggere, una volta capito il meccanismo.',
    bylineLabel: 'Creato e gestito da',
    bylineName: 'Vaibhav Tiwari',
    bylineBio:
      'Il Calcolatore Crudo-Cotto è creato e gestito da Vaibhav Tiwari, che ne ha compilato le tabelle delle rese di cottura a partire dalle pubblicazioni USDA e ha verificato ogni valore rispetto alla fonte primaria. Non è dietista né tecnologo alimentare; il sito riporta dati di ricerca pubblicati ed esegue l’aritmetica della conversione, e non sostituisce il parere di un professionista qualificato.',
    reviewedLabel: 'Dati verificati l’ultima volta',
    reviewed: 'Settembre 2026',
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
        label: 'Pesce e altri tagli',
        html: `Le rese di <strong ${STRONG}>salmone</strong> e <strong ${STRONG}>gamberi</strong>, oltre a petto di tacchino e vitello, provengono dal <strong ${STRONG}>Manuale di Agricoltura n. 102 dell’USDA</strong> (1975), lo studio di riferimento dell’USDA sulle rese di cottura, che documenta tagli assenti dalla tabella della carne più recente. Nessun valore del sito si basa su una stima informale.`,
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

};

export function getAbout(locale: Locale): AboutPage {
  return ABOUT[locale] ?? ABOUT.en;
}

export function getContact(locale: Locale): ContactPage {
  return CONTACT[locale] ?? CONTACT.en;
}
