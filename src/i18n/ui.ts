export const LOCALES = ['en', 'es', 'ja', 'fr', 'de', 'pt', 'ko', 'it', 'hi'] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  ja: '日本語',
  fr: 'Français',
  de: 'Deutsch',
  pt: 'Português',
  ko: '한국어',
  it: 'Italiano',
  hi: 'हिन्दी',
};

export const ui = {
  en: {
    // Nav
    'nav.wordmark': 'Raw→Cooked',
    'nav.chicken': 'Chicken',
    'nav.rice': 'Rice',
    'nav.beef': 'Beef',
    'nav.darkMode': 'Toggle dark mode',
    'nav.language': 'Language',

    // Hero
    'hero.eyebrow': 'Based on USDA cooking yield data',
    'hero.heading': 'Raw to Cooked Calculator',
    'hero.description':
      'Enter a raw or cooked weight — get the converted weight plus full macros (calories, protein, carbs, fat). Covers meat, grains, and vegetables.',
    'hero.usda':
      'All yields sourced from USDA FoodData Central and USDA Table of Cooking Yields.',

    // Browse
    'browse.heading': 'Browse by food',
    'browse.description':
      '20 foods across all three major categories — the broadest coverage of any raw-to-cooked calculator.',
    'browse.catMeat': 'Meat, Poultry & Seafood',
    'browse.catGrains': 'Grains, Pasta & Legumes',
    'browse.catVeg': 'Vegetables',
    'browse.note.chicken': 'Loses 25% when cooked',
    'browse.note.beef': 'Loses 27% when cooked',
    'browse.note.salmon': 'Loses 21% when cooked',
    'browse.note.pork': 'Loses 22% when cooked',
    'browse.note.rice': 'Expands 3× when cooked',
    'browse.note.pasta': 'Expands 2.25× when cooked',
    'browse.note.lentils': 'Expands 2.3× when cooked',
    'browse.note.quinoa': 'Expands 2.8× when cooked',
    'browse.note.spinach': 'Loses 70% when cooked',
    'browse.note.broccoli': 'Loses 10% when cooked',
    'browse.note.potato': 'Loses 6% when cooked',
    'browse.note.sweetPotato': 'Loses 10% when cooked',

    // Food names (browse list)
    'browse.food.chicken': 'Chicken Breast',
    'browse.food.beef': 'Ground Beef (80/20)',
    'browse.food.salmon': 'Salmon Fillet',
    'browse.food.pork': 'Pork Chop',
    'browse.food.rice': 'White Rice',
    'browse.food.pasta': 'Pasta',
    'browse.food.lentils': 'Lentils',
    'browse.food.quinoa': 'Quinoa',
    'browse.food.spinach': 'Spinach',
    'browse.food.broccoli': 'Broccoli',
    'browse.food.potato': 'Potato',
    'browse.food.sweetPotato': 'Sweet Potato',

    // Callout (spinach/rice)
    'callout.eyebrow': 'Surprising yields',
    'callout.heading': 'Spinach loses 70% of its weight when cooked',
    'callout.description':
      "That bag of raw spinach shrinks to less than a third of its original weight after boiling or steaming. White rice goes the opposite direction — 100g dry becomes 300g cooked. These extremes are why weighing raw matters so much for accurate macro tracking.",
    'callout.spinachBtn': 'Spinach calculator →',
    'callout.riceBtn': 'Rice calculator →',

    // Why USDA
    'usda.heading': 'Why USDA data?',
    'usda.meatLabel': 'Meat & Poultry',
    'usda.meatText':
      'Yields from the <strong>USDA Table of Cooking Yields for Meat and Poultry</strong> — the same source used by food manufacturers and dietitians.',
    'usda.grainsLabel': 'Grains & Vegetables',
    'usda.grainsText':
      'Yields derived from comparing raw vs. cooked entries in <strong>USDA FoodData Central</strong> (fdc.nal.usda.gov), the authoritative US nutrient database.',

    // Calculator
    'calc.foodLabel': 'Food',
    'calc.foodPlaceholder': 'Search — chicken breast, white rice, broccoli…',
    'calc.clearFood': 'Clear food selection',
    'calc.foodSuggestions': 'Food suggestions',
    'calc.noFoodsFound': 'No foods found.',
    'calc.directionLabel': 'Direction',
    'calc.rawToCooked': 'Raw → Cooked',
    'calc.cookedToRaw': 'Cooked → Raw',
    'calc.rawWeight': 'Raw weight',
    'calc.cookedWeight': 'Cooked weight',
    'calc.weightPlaceholder': 'e.g. 200',
    'calc.emptyState': 'Search for a food above to get started.',
    'calc.nutritionHeader': 'Nutrition — for this amount',
    'calc.calories': 'Calories',
    'calc.protein': 'Protein',
    'calc.carbs': 'Carbs',
    'calc.fat': 'Fat',
    'calc.sourceLabel': 'Source',
    'calc.estimateSource': 'Industry-standard estimate (USDA data unavailable for this item)',
    'calc.estimateNote':
      'This yield figure is an industry-standard estimate. USDA has not published a direct cooking-yield measurement for this item.',
    'calc.morePrecise': '+ More precise: choose cooking method',
    'calc.hidePrecise': '− Hide cooking method',
    'calc.cookingMethodLabel': 'Cooking method',
    'calc.yieldExpand': 'Expands to {n}× its dry weight · USDA yield: {pct}%',
    'calc.yieldLoss': '{loss}% weight loss when cooked · USDA yield: {pct}%',

    // Footer
    'footer.tagline':
      'USDA-sourced cooking yield data for meat, grains, and vegetables. Full macros for every conversion.',
    'footer.popularFoods': 'Popular Foods',
    'footer.dataSources': 'Data Sources',
    'footer.usdaMeat': 'USDA Table of Cooking Yields for Meat and Poultry',
    'footer.usdaFdc': 'USDA FoodData Central',
    'footer.estimatesNote': 'Estimates disclosed where USDA data is unavailable.',
    'footer.disclaimer':
      'Values are per the USDA data above. Always weigh your food with a kitchen scale for accuracy.',

    // Food page
    'food.estimatedYield': 'Estimated yield',
    'food.rawToCookedCalc': 'Raw to Cooked Calculator',
    'food.usdaCookingYield': 'USDA cooking yield',
    'food.source': 'Source',
    'food.estimateSource':
      'Industry-standard estimate — USDA has not published direct cooking-yield data for this food.',
    'food.yieldByMethod': 'Yield by cooking method',
    'food.yieldByMethodSource': 'Source: USDA Table of Cooking Yields for Meat and Poultry',
    'food.chickenHeading': 'Why chicken breast is the macro-tracking gold standard',
    'food.chickenP1':
      'Skinless, boneless chicken breast delivers roughly 22.5g of protein per 100g raw — one of the highest protein-per-calorie ratios of any whole food. At only 120 calories and 2.6g of fat per 100g raw, it\'s the go-to lean protein for bodybuilders, athletes, and anyone managing a caloric deficit.',
    'food.chickenP2':
      'The catch: because it loses 25–30% of its weight when cooked, <strong>tracking cooked weight without accounting for yield leads to underestimating your actual protein intake</strong>. A 150g cooked portion came from roughly 200g raw — that\'s the raw weight you should be logging against the USDA nutrition label.',
    'food.calcHeading': '{name} Calculator',
    'food.faqHeading': 'Frequently asked questions',
    'food.relatedLabel': 'Related calculators',
    'food.allFoods': 'All foods →',

    // Page titles / SEO
    'page.homeTitle': 'Raw to Cooked Calculator | Free Food Weight Converter',
    'page.homeDescription':
      'Free raw to cooked weight conversion calculator for meat, rice & 20+ foods. Convert raw chicken, ground beef, rice & more — get full macros from USDA data.',
  },

  es: {
    'nav.wordmark': 'Crudo→Cocido',
    'nav.chicken': 'Pollo',
    'nav.rice': 'Arroz',
    'nav.beef': 'Res',
    'nav.darkMode': 'Cambiar modo oscuro',
    'nav.language': 'Idioma',

    'hero.eyebrow': 'Basado en datos de rendimiento del USDA',
    'hero.heading': 'Calculadora Crudo a Cocido',
    'hero.description':
      'Introduce el peso crudo o cocido y obtén el peso convertido más los macros completos (calorías, proteínas, carbohidratos, grasas). Cubre carnes, cereales y verduras.',
    'hero.usda':
      'Todos los rendimientos provienen de USDA FoodData Central y la Tabla de Rendimientos de Cocción del USDA.',

    'browse.heading': 'Explorar por alimento',
    'browse.description':
      '20 alimentos en las tres categorías principales — la cobertura más amplia de cualquier calculadora crudo a cocido.',
    'browse.catMeat': 'Carne, Aves y Mariscos',
    'browse.catGrains': 'Cereales, Pasta y Legumbres',
    'browse.catVeg': 'Verduras',
    'browse.note.chicken': 'Pierde el 25% al cocinar',
    'browse.note.beef': 'Pierde el 27% al cocinar',
    'browse.note.salmon': 'Pierde el 21% al cocinar',
    'browse.note.pork': 'Pierde el 22% al cocinar',
    'browse.note.rice': 'Se expande 3× al cocinar',
    'browse.note.pasta': 'Se expande 2,25× al cocinar',
    'browse.note.lentils': 'Se expande 2,3× al cocinar',
    'browse.note.quinoa': 'Se expande 2,8× al cocinar',
    'browse.note.spinach': 'Pierde el 70% al cocinar',
    'browse.note.broccoli': 'Pierde el 10% al cocinar',
    'browse.note.potato': 'Pierde el 6% al cocinar',
    'browse.note.sweetPotato': 'Pierde el 10% al cocinar',

    'browse.food.chicken': 'Pechuga de pollo',
    'browse.food.beef': 'Carne molida (80/20)',
    'browse.food.salmon': 'Filete de salmón',
    'browse.food.pork': 'Chuleta de cerdo',
    'browse.food.rice': 'Arroz blanco',
    'browse.food.pasta': 'Pasta',
    'browse.food.lentils': 'Lentejas',
    'browse.food.quinoa': 'Quinoa',
    'browse.food.spinach': 'Espinaca',
    'browse.food.broccoli': 'Brócoli',
    'browse.food.potato': 'Papa',
    'browse.food.sweetPotato': 'Camote',

    'callout.eyebrow': 'Rendimientos sorprendentes',
    'callout.heading': 'La espinaca pierde el 70% de su peso al cocinar',
    'callout.description':
      'Esa bolsa de espinaca cruda se reduce a menos de un tercio de su peso original después de hervir o cocinar al vapor. El arroz blanco va en sentido contrario — 100g seco se convierte en 300g cocido. Estos extremos son la razón por la que pesar en crudo importa tanto para el seguimiento preciso de macros.',
    'callout.spinachBtn': 'Calculadora de espinaca →',
    'callout.riceBtn': 'Calculadora de arroz →',

    'usda.heading': '¿Por qué datos del USDA?',
    'usda.meatLabel': 'Carne y Aves',
    'usda.meatText':
      'Rendimientos de la <strong>Tabla de Rendimientos de Cocción del USDA para Carne y Aves</strong> — la misma fuente utilizada por fabricantes de alimentos y dietistas.',
    'usda.grainsLabel': 'Cereales y Verduras',
    'usda.grainsText':
      'Rendimientos derivados de comparar entradas crudas y cocidas en <strong>USDA FoodData Central</strong> (fdc.nal.usda.gov), la base de datos nutricional oficial de EE.UU.',

    'calc.foodLabel': 'Alimento',
    'calc.foodPlaceholder': 'Buscar — pechuga de pollo, arroz blanco, brócoli…',
    'calc.clearFood': 'Borrar selección de alimento',
    'calc.foodSuggestions': 'Sugerencias de alimentos',
    'calc.noFoodsFound': 'No se encontraron alimentos.',
    'calc.directionLabel': 'Dirección',
    'calc.rawToCooked': 'Crudo → Cocido',
    'calc.cookedToRaw': 'Cocido → Crudo',
    'calc.rawWeight': 'Peso crudo',
    'calc.cookedWeight': 'Peso cocido',
    'calc.weightPlaceholder': 'ej. 200',
    'calc.emptyState': 'Busca un alimento arriba para comenzar.',
    'calc.nutritionHeader': 'Nutrición — para esta cantidad',
    'calc.calories': 'Calorías',
    'calc.protein': 'Proteínas',
    'calc.carbs': 'Carbohidratos',
    'calc.fat': 'Grasas',
    'calc.sourceLabel': 'Fuente',
    'calc.estimateSource': 'Estimación estándar del sector (datos USDA no disponibles)',
    'calc.estimateNote':
      'Este rendimiento es una estimación estándar del sector. El USDA no ha publicado mediciones directas para este alimento.',
    'calc.morePrecise': '+ Más preciso: elegir método de cocción',
    'calc.hidePrecise': '− Ocultar método de cocción',
    'calc.cookingMethodLabel': 'Método de cocción',
    'calc.yieldExpand': 'Se expande a {n}× su peso seco · Rendimiento USDA: {pct}%',
    'calc.yieldLoss': '{loss}% de pérdida de peso al cocinar · Rendimiento USDA: {pct}%',

    'footer.tagline':
      'Datos de rendimiento de cocción del USDA para carne, cereales y verduras. Macros completos para cada conversión.',
    'footer.popularFoods': 'Alimentos populares',
    'footer.dataSources': 'Fuentes de datos',
    'footer.usdaMeat': 'Tabla de Rendimientos de Cocción del USDA para Carne y Aves',
    'footer.usdaFdc': 'USDA FoodData Central',
    'footer.estimatesNote': 'Las estimaciones se indican cuando no hay datos del USDA disponibles.',
    'footer.disclaimer':
      'Los valores corresponden a los datos del USDA anteriores. Pesa siempre tus alimentos con una báscula de cocina para mayor precisión.',

    'food.estimatedYield': 'Rendimiento estimado',
    'food.rawToCookedCalc': 'Calculadora Crudo a Cocido',
    'food.usdaCookingYield': 'Rendimiento de cocción USDA',
    'food.source': 'Fuente',
    'food.estimateSource':
      'Estimación estándar del sector — el USDA no ha publicado datos directos de rendimiento de cocción para este alimento.',
    'food.yieldByMethod': 'Rendimiento por método de cocción',
    'food.yieldByMethodSource': 'Fuente: Tabla de Rendimientos de Cocción del USDA para Carne y Aves',
    'food.chickenHeading': 'Por qué la pechuga de pollo es el estándar para el seguimiento de macros',
    'food.chickenP1':
      'La pechuga de pollo sin piel y sin hueso aporta aproximadamente 22,5g de proteína por 100g crudo — una de las mejores relaciones proteína-caloría de cualquier alimento entero. Con solo 120 calorías y 2,6g de grasa por 100g crudo, es la proteína magra favorita de culturistas, deportistas y personas que gestionan un déficit calórico.',
    'food.chickenP2':
      'La trampa: como pierde entre el 25 y el 30% de su peso al cocinarse, <strong>registrar el peso cocido sin tener en cuenta el rendimiento lleva a subestimar tu ingesta real de proteínas</strong>. Una porción de 150g cocidos provino de aproximadamente 200g crudos — ese es el peso crudo que debes registrar.',
    'food.calcHeading': 'Calculadora de {name}',
    'food.faqHeading': 'Preguntas frecuentes',
    'food.relatedLabel': 'Calculadoras relacionadas',
    'food.allFoods': 'Todos los alimentos →',

    'page.homeTitle': 'Calculadora Crudo a Cocido | Datos de Rendimiento USDA y Macros Completos',
    'page.homeDescription':
      'Convierte el peso de cualquier alimento entre crudo y cocido. Obtén calorías, proteínas, carbohidratos y grasas para cualquier cantidad. Cubre carne, cereales y verduras — basado en datos del USDA.',
  },

  fr: {
    'nav.wordmark': 'Cru→Cuit',
    'nav.chicken': 'Poulet',
    'nav.rice': 'Riz',
    'nav.beef': 'Bœuf',
    'nav.darkMode': 'Basculer le mode sombre',
    'nav.language': 'Langue',

    'hero.eyebrow': 'Basé sur les données de rendement de cuisson de l\'USDA',
    'hero.heading': 'Calculateur Cru à Cuit',
    'hero.description':
      'Entrez un poids cru ou cuit — obtenez le poids converti plus les macros complets (calories, protéines, glucides, lipides). Couvre les viandes, céréales et légumes.',
    'hero.usda':
      'Tous les rendements proviennent de USDA FoodData Central et du Tableau des rendements de cuisson de l\'USDA.',

    'browse.heading': 'Parcourir par aliment',
    'browse.description':
      '20 aliments répartis dans les trois grandes catégories — la couverture la plus large de tout calculateur cru à cuit.',
    'browse.catMeat': 'Viandes, Volailles & Fruits de mer',
    'browse.catGrains': 'Céréales, Pâtes & Légumineuses',
    'browse.catVeg': 'Légumes',
    'browse.note.chicken': 'Perd 25% à la cuisson',
    'browse.note.beef': 'Perd 27% à la cuisson',
    'browse.note.salmon': 'Perd 21% à la cuisson',
    'browse.note.pork': 'Perd 22% à la cuisson',
    'browse.note.rice': 'S\'étend à 3× à la cuisson',
    'browse.note.pasta': 'S\'étend à 2,25× à la cuisson',
    'browse.note.lentils': 'S\'étend à 2,3× à la cuisson',
    'browse.note.quinoa': 'S\'étend à 2,8× à la cuisson',
    'browse.note.spinach': 'Perd 70% à la cuisson',
    'browse.note.broccoli': 'Perd 10% à la cuisson',
    'browse.note.potato': 'Perd 6% à la cuisson',
    'browse.note.sweetPotato': 'Perd 10% à la cuisson',

    'browse.food.chicken': 'Blanc de poulet',
    'browse.food.beef': 'Bœuf haché (80/20)',
    'browse.food.salmon': 'Filet de saumon',
    'browse.food.pork': 'Côtelette de porc',
    'browse.food.rice': 'Riz blanc',
    'browse.food.pasta': 'Pâtes',
    'browse.food.lentils': 'Lentilles',
    'browse.food.quinoa': 'Quinoa',
    'browse.food.spinach': 'Épinards',
    'browse.food.broccoli': 'Brocoli',
    'browse.food.potato': 'Pomme de terre',
    'browse.food.sweetPotato': 'Patate douce',

    'callout.eyebrow': 'Rendements surprenants',
    'callout.heading': 'Les épinards perdent 70% de leur poids à la cuisson',
    'callout.description':
      'Ce sachet d\'épinards crus rétrécit à moins d\'un tiers de son poids d\'origine après l\'ébullition ou la cuisson à la vapeur. Le riz blanc va dans le sens inverse — 100g sec devient 300g cuit. Ces extrêmes expliquent pourquoi peser le poids cru est si important pour un suivi précis des macros.',
    'callout.spinachBtn': 'Calculateur épinards →',
    'callout.riceBtn': 'Calculateur riz →',

    'usda.heading': 'Pourquoi les données USDA ?',
    'usda.meatLabel': 'Viandes & Volailles',
    'usda.meatText':
      'Rendements issus du <strong>Tableau des rendements de cuisson de l\'USDA pour la viande et la volaille</strong> — la même source utilisée par les fabricants alimentaires et les diététiciens.',
    'usda.grainsLabel': 'Céréales & Légumes',
    'usda.grainsText':
      'Rendements dérivés de la comparaison des entrées crues et cuites dans <strong>USDA FoodData Central</strong> (fdc.nal.usda.gov), la base de données nutritionnelles officielle américaine.',

    'calc.foodLabel': 'Aliment',
    'calc.foodPlaceholder': 'Rechercher — blanc de poulet, riz blanc, brocoli…',
    'calc.clearFood': 'Effacer la sélection',
    'calc.foodSuggestions': 'Suggestions d\'aliments',
    'calc.noFoodsFound': 'Aucun aliment trouvé.',
    'calc.directionLabel': 'Direction',
    'calc.rawToCooked': 'Cru → Cuit',
    'calc.cookedToRaw': 'Cuit → Cru',
    'calc.rawWeight': 'Poids cru',
    'calc.cookedWeight': 'Poids cuit',
    'calc.weightPlaceholder': 'ex. 200',
    'calc.emptyState': 'Recherchez un aliment ci-dessus pour commencer.',
    'calc.nutritionHeader': 'Nutrition — pour cette quantité',
    'calc.calories': 'Calories',
    'calc.protein': 'Protéines',
    'calc.carbs': 'Glucides',
    'calc.fat': 'Lipides',
    'calc.sourceLabel': 'Source',
    'calc.estimateSource': 'Estimation standard du secteur (données USDA non disponibles)',
    'calc.estimateNote':
      'Ce rendement est une estimation standard du secteur. L\'USDA n\'a pas publié de mesures directes pour cet aliment.',
    'calc.morePrecise': '+ Plus précis : choisir la méthode de cuisson',
    'calc.hidePrecise': '− Masquer la méthode de cuisson',
    'calc.cookingMethodLabel': 'Méthode de cuisson',
    'calc.yieldExpand': 'S\'étend à {n}× son poids sec · Rendement USDA : {pct}%',
    'calc.yieldLoss': '{loss}% de perte de poids à la cuisson · Rendement USDA : {pct}%',

    'footer.tagline':
      'Données de rendement de cuisson de l\'USDA pour la viande, les céréales et les légumes. Macros complets pour chaque conversion.',
    'footer.popularFoods': 'Aliments populaires',
    'footer.dataSources': 'Sources de données',
    'footer.usdaMeat': 'Tableau des rendements de cuisson de l\'USDA pour la viande et la volaille',
    'footer.usdaFdc': 'USDA FoodData Central',
    'footer.estimatesNote': 'Les estimations sont indiquées lorsque les données USDA ne sont pas disponibles.',
    'footer.disclaimer':
      'Les valeurs sont issues des données USDA ci-dessus. Pesez toujours vos aliments avec une balance de cuisine pour plus de précision.',

    'food.estimatedYield': 'Rendement estimé',
    'food.rawToCookedCalc': 'Calculateur Cru à Cuit',
    'food.usdaCookingYield': 'Rendement de cuisson USDA',
    'food.source': 'Source',
    'food.estimateSource':
      'Estimation standard du secteur — l\'USDA n\'a pas publié de données directes de rendement de cuisson pour cet aliment.',
    'food.yieldByMethod': 'Rendement par méthode de cuisson',
    'food.yieldByMethodSource': 'Source : Tableau des rendements de cuisson de l\'USDA pour la viande et la volaille',
    'food.chickenHeading': 'Pourquoi le blanc de poulet est l\'étalon-or du suivi des macros',
    'food.chickenP1':
      'Le blanc de poulet sans peau et sans os apporte environ 22,5g de protéines pour 100g cru — l\'un des meilleurs ratios protéines/calories de tous les aliments entiers. Avec seulement 120 calories et 2,6g de lipides pour 100g cru, c\'est la protéine maigre de référence pour les culturistes, les sportifs et toute personne gérant un déficit calorique.',
    'food.chickenP2':
      'Le revers : comme il perd 25 à 30% de son poids à la cuisson, <strong>enregistrer le poids cuit sans tenir compte du rendement conduit à sous-estimer votre apport réel en protéines</strong>. Une portion de 150g cuit provient d\'environ 200g cru — c\'est ce poids cru que vous devez enregistrer.',
    'food.calcHeading': 'Calculateur {name}',
    'food.faqHeading': 'Questions fréquemment posées',
    'food.relatedLabel': 'Calculateurs associés',
    'food.allFoods': 'Tous les aliments →',

    'page.homeTitle': 'Calculateur Cru à Cuit | Données de Rendement USDA & Macros Complets',
    'page.homeDescription':
      'Convertissez le poids de n\'importe quel aliment entre l\'état cru et cuit. Obtenez les calories, protéines, glucides et lipides pour n\'importe quelle quantité — basé sur les données USDA.',
  },

  de: {
    'nav.wordmark': 'Roh→Gekocht',
    'nav.chicken': 'Hähnchen',
    'nav.rice': 'Reis',
    'nav.beef': 'Rind',
    'nav.darkMode': 'Dunkelmodus umschalten',
    'nav.language': 'Sprache',

    'hero.eyebrow': 'Basierend auf USDA-Garverlustdaten',
    'hero.heading': 'Roh-zu-Gekocht-Rechner',
    'hero.description':
      'Gib ein rohes oder gekochtes Gewicht ein — erhalte das umgerechnete Gewicht plus vollständige Makros (Kalorien, Protein, Kohlenhydrate, Fett). Abdeckung für Fleisch, Getreide und Gemüse.',
    'hero.usda':
      'Alle Garverluste stammen aus USDA FoodData Central und der USDA-Tabelle der Garverluste.',

    'browse.heading': 'Nach Lebensmittel stöbern',
    'browse.description':
      '20 Lebensmittel in allen drei Hauptkategorien — die breiteste Abdeckung eines Roh-zu-Gekocht-Rechners.',
    'browse.catMeat': 'Fleisch, Geflügel & Meeresfrüchte',
    'browse.catGrains': 'Getreide, Nudeln & Hülsenfrüchte',
    'browse.catVeg': 'Gemüse',
    'browse.note.chicken': 'Verliert 25% beim Garen',
    'browse.note.beef': 'Verliert 27% beim Garen',
    'browse.note.salmon': 'Verliert 21% beim Garen',
    'browse.note.pork': 'Verliert 22% beim Garen',
    'browse.note.rice': 'Dehnt sich 3× beim Garen aus',
    'browse.note.pasta': 'Dehnt sich 2,25× beim Garen aus',
    'browse.note.lentils': 'Dehnt sich 2,3× beim Garen aus',
    'browse.note.quinoa': 'Dehnt sich 2,8× beim Garen aus',
    'browse.note.spinach': 'Verliert 70% beim Garen',
    'browse.note.broccoli': 'Verliert 10% beim Garen',
    'browse.note.potato': 'Verliert 6% beim Garen',
    'browse.note.sweetPotato': 'Verliert 10% beim Garen',

    'browse.food.chicken': 'Hähnchenbrust',
    'browse.food.beef': 'Hackfleisch (80/20)',
    'browse.food.salmon': 'Lachsfilet',
    'browse.food.pork': 'Schweinekotelett',
    'browse.food.rice': 'Weißer Reis',
    'browse.food.pasta': 'Nudeln',
    'browse.food.lentils': 'Linsen',
    'browse.food.quinoa': 'Quinoa',
    'browse.food.spinach': 'Spinat',
    'browse.food.broccoli': 'Brokkoli',
    'browse.food.potato': 'Kartoffel',
    'browse.food.sweetPotato': 'Süßkartoffel',

    'callout.eyebrow': 'Überraschende Garverluste',
    'callout.heading': 'Spinat verliert 70% seines Gewichts beim Kochen',
    'callout.description':
      'Diese Tüte roher Spinat schrumpft nach dem Kochen oder Dämpfen auf weniger als ein Drittel ihres ursprünglichen Gewichts. Weißer Reis geht in die entgegengesetzte Richtung — 100g trocken werden zu 300g gekocht. Diese Extreme zeigen, warum das Wiegen im rohen Zustand für genaues Makro-Tracking so wichtig ist.',
    'callout.spinachBtn': 'Spinat-Rechner →',
    'callout.riceBtn': 'Reis-Rechner →',

    'usda.heading': 'Warum USDA-Daten?',
    'usda.meatLabel': 'Fleisch & Geflügel',
    'usda.meatText':
      'Garverluste aus der <strong>USDA-Tabelle der Garverluste für Fleisch und Geflügel</strong> — dieselbe Quelle, die von Lebensmittelherstellern und Diätassistenten verwendet wird.',
    'usda.grainsLabel': 'Getreide & Gemüse',
    'usda.grainsText':
      'Garverluste abgeleitet aus dem Vergleich von roh und gekocht in <strong>USDA FoodData Central</strong> (fdc.nal.usda.gov), der maßgeblichen US-amerikanischen Nährstoffdatenbank.',

    'calc.foodLabel': 'Lebensmittel',
    'calc.foodPlaceholder': 'Suchen — Hähnchenbrust, weißer Reis, Brokkoli…',
    'calc.clearFood': 'Lebensmittelauswahl löschen',
    'calc.foodSuggestions': 'Lebensmittelvorschläge',
    'calc.noFoodsFound': 'Keine Lebensmittel gefunden.',
    'calc.directionLabel': 'Richtung',
    'calc.rawToCooked': 'Roh → Gekocht',
    'calc.cookedToRaw': 'Gekocht → Roh',
    'calc.rawWeight': 'Rohgewicht',
    'calc.cookedWeight': 'Gekochtes Gewicht',
    'calc.weightPlaceholder': 'z.B. 200',
    'calc.emptyState': 'Suche oben nach einem Lebensmittel, um zu beginnen.',
    'calc.nutritionHeader': 'Nährwerte — für diese Menge',
    'calc.calories': 'Kalorien',
    'calc.protein': 'Protein',
    'calc.carbs': 'Kohlenhydrate',
    'calc.fat': 'Fett',
    'calc.sourceLabel': 'Quelle',
    'calc.estimateSource': 'Branchenübliche Schätzung (USDA-Daten nicht verfügbar)',
    'calc.estimateNote':
      'Dieser Garverlustwert ist eine branchenübliche Schätzung. Die USDA hat keine direkten Garverlustwerte für dieses Lebensmittel veröffentlicht.',
    'calc.morePrecise': '+ Genauer: Garmethode wählen',
    'calc.hidePrecise': '− Garmethode ausblenden',
    'calc.cookingMethodLabel': 'Garmethode',
    'calc.yieldExpand': 'Dehnt sich auf {n}× des Trockengewichts aus · USDA-Ausbeute: {pct}%',
    'calc.yieldLoss': '{loss}% Gewichtsverlust beim Garen · USDA-Ausbeute: {pct}%',

    'footer.tagline':
      'USDA-Garverlustdaten für Fleisch, Getreide und Gemüse. Vollständige Makros für jede Umrechnung.',
    'footer.popularFoods': 'Beliebte Lebensmittel',
    'footer.dataSources': 'Datenquellen',
    'footer.usdaMeat': 'USDA-Tabelle der Garverluste für Fleisch und Geflügel',
    'footer.usdaFdc': 'USDA FoodData Central',
    'footer.estimatesNote': 'Schätzungen werden angegeben, wenn keine USDA-Daten verfügbar sind.',
    'footer.disclaimer':
      'Die Werte basieren auf den oben genannten USDA-Daten. Wiege deine Lebensmittel stets mit einer Küchenwaage für genaue Ergebnisse.',

    'food.estimatedYield': 'Geschätzter Garverlustwert',
    'food.rawToCookedCalc': 'Roh-zu-Gekocht-Rechner',
    'food.usdaCookingYield': 'USDA-Garausbeute',
    'food.source': 'Quelle',
    'food.estimateSource':
      'Branchenübliche Schätzung — die USDA hat keine direkten Garverlustwerte für dieses Lebensmittel veröffentlicht.',
    'food.yieldByMethod': 'Ausbeute nach Garmethode',
    'food.yieldByMethodSource': 'Quelle: USDA-Tabelle der Garverluste für Fleisch und Geflügel',
    'food.chickenHeading': 'Warum Hähnchenbrust der Gold-Standard für Makro-Tracking ist',
    'food.chickenP1':
      'Hähnchenbrust ohne Haut und Knochen liefert etwa 22,5g Protein pro 100g roh — eines der besten Protein-Kalorien-Verhältnisse aller Vollwertkost. Mit nur 120 Kalorien und 2,6g Fett pro 100g roh ist sie das bevorzugte magere Protein für Bodybuilder, Sportler und alle, die ein Kaloriendefizit verwalten.',
    'food.chickenP2':
      'Der Haken: Da sie beim Garen 25–30% ihres Gewichts verliert, <strong>führt das Aufzeichnen des gekochten Gewichts ohne Berücksichtigung des Garverlustes zu einer Unterschätzung der tatsächlichen Proteinaufnahme</strong>. Eine Portion von 150g gekocht stammt aus etwa 200g roh — das ist das Rohgewicht, das du erfassen solltest.',
    'food.calcHeading': '{name}-Rechner',
    'food.faqHeading': 'Häufig gestellte Fragen',
    'food.relatedLabel': 'Verwandte Rechner',
    'food.allFoods': 'Alle Lebensmittel →',

    'page.homeTitle': 'Roh-zu-Gekocht-Rechner | USDA-Ausbeute & Vollständige Makros',
    'page.homeDescription':
      'Rechne das Gewicht beliebiger Lebensmittel zwischen roh und gekocht um. Erhalte Kalorien, Protein, Kohlenhydrate und Fett für jede Menge. Fleisch, Getreide und Gemüse — basierend auf USDA-Daten.',
  },

  pt: {
    'nav.wordmark': 'Cru→Cozido',
    'nav.chicken': 'Frango',
    'nav.rice': 'Arroz',
    'nav.beef': 'Carne',
    'nav.darkMode': 'Alternar modo escuro',
    'nav.language': 'Idioma',

    'hero.eyebrow': 'Baseado em dados de rendimento de cozimento do USDA',
    'hero.heading': 'Calculadora de Cru para Cozido',
    'hero.description':
      'Insira um peso cru ou cozido — obtenha o peso convertido mais os macros completos (calorias, proteínas, carboidratos, gorduras). Cobre carnes, grãos e vegetais.',
    'hero.usda':
      'Todos os rendimentos são provenientes do USDA FoodData Central e da Tabela de Rendimentos de Cozimento do USDA.',

    'browse.heading': 'Explorar por alimento',
    'browse.description':
      '20 alimentos nas três principais categorias — a cobertura mais ampla de qualquer calculadora de cru para cozido.',
    'browse.catMeat': 'Carnes, Aves e Frutos do Mar',
    'browse.catGrains': 'Grãos, Massas e Leguminosas',
    'browse.catVeg': 'Vegetais',
    'browse.note.chicken': 'Perde 25% ao cozinhar',
    'browse.note.beef': 'Perde 27% ao cozinhar',
    'browse.note.salmon': 'Perde 21% ao cozinhar',
    'browse.note.pork': 'Perde 22% ao cozinhar',
    'browse.note.rice': 'Expande 3× ao cozinhar',
    'browse.note.pasta': 'Expande 2,25× ao cozinhar',
    'browse.note.lentils': 'Expande 2,3× ao cozinhar',
    'browse.note.quinoa': 'Expande 2,8× ao cozinhar',
    'browse.note.spinach': 'Perde 70% ao cozinhar',
    'browse.note.broccoli': 'Perde 10% ao cozinhar',
    'browse.note.potato': 'Perde 6% ao cozinhar',
    'browse.note.sweetPotato': 'Perde 10% ao cozinhar',

    'browse.food.chicken': 'Peito de frango',
    'browse.food.beef': 'Carne moída (80/20)',
    'browse.food.salmon': 'Filé de salmão',
    'browse.food.pork': 'Costeleta de porco',
    'browse.food.rice': 'Arroz branco',
    'browse.food.pasta': 'Macarrão',
    'browse.food.lentils': 'Lentilhas',
    'browse.food.quinoa': 'Quinoa',
    'browse.food.spinach': 'Espinafre',
    'browse.food.broccoli': 'Brócolis',
    'browse.food.potato': 'Batata',
    'browse.food.sweetPotato': 'Batata-doce',

    'callout.eyebrow': 'Rendimentos surpreendentes',
    'callout.heading': 'O espinafre perde 70% do seu peso ao cozinhar',
    'callout.description':
      'Aquele saco de espinafre cru encolhe para menos de um terço do peso original após ferver ou cozinhar no vapor. O arroz branco vai na direção oposta — 100g cru vira 300g cozido. Esses extremos explicam por que pesar cru importa tanto para o acompanhamento preciso de macros.',
    'callout.spinachBtn': 'Calculadora de espinafre →',
    'callout.riceBtn': 'Calculadora de arroz →',

    'usda.heading': 'Por que dados do USDA?',
    'usda.meatLabel': 'Carnes & Aves',
    'usda.meatText':
      'Rendimentos da <strong>Tabela de Rendimentos de Cozimento do USDA para Carnes e Aves</strong> — a mesma fonte usada por fabricantes de alimentos e nutricionistas.',
    'usda.grainsLabel': 'Grãos & Vegetais',
    'usda.grainsText':
      'Rendimentos derivados da comparação de entradas cruas e cozidas no <strong>USDA FoodData Central</strong> (fdc.nal.usda.gov), o banco de dados nutricional oficial dos EUA.',

    'calc.foodLabel': 'Alimento',
    'calc.foodPlaceholder': 'Buscar — peito de frango, arroz branco, brócolis…',
    'calc.clearFood': 'Limpar seleção de alimento',
    'calc.foodSuggestions': 'Sugestões de alimentos',
    'calc.noFoodsFound': 'Nenhum alimento encontrado.',
    'calc.directionLabel': 'Direção',
    'calc.rawToCooked': 'Cru → Cozido',
    'calc.cookedToRaw': 'Cozido → Cru',
    'calc.rawWeight': 'Peso cru',
    'calc.cookedWeight': 'Peso cozido',
    'calc.weightPlaceholder': 'ex. 200',
    'calc.emptyState': 'Pesquise um alimento acima para começar.',
    'calc.nutritionHeader': 'Nutrição — para esta quantidade',
    'calc.calories': 'Calorias',
    'calc.protein': 'Proteínas',
    'calc.carbs': 'Carboidratos',
    'calc.fat': 'Gorduras',
    'calc.sourceLabel': 'Fonte',
    'calc.estimateSource': 'Estimativa padrão do setor (dados USDA não disponíveis)',
    'calc.estimateNote':
      'Este rendimento é uma estimativa padrão do setor. O USDA não publicou medições diretas para este alimento.',
    'calc.morePrecise': '+ Mais preciso: escolher método de cozimento',
    'calc.hidePrecise': '− Ocultar método de cozimento',
    'calc.cookingMethodLabel': 'Método de cozimento',
    'calc.yieldExpand': 'Expande para {n}× do peso seco · Rendimento USDA: {pct}%',
    'calc.yieldLoss': '{loss}% de perda de peso ao cozinhar · Rendimento USDA: {pct}%',

    'footer.tagline':
      'Dados de rendimento de cozimento do USDA para carnes, grãos e vegetais. Macros completos para cada conversão.',
    'footer.popularFoods': 'Alimentos populares',
    'footer.dataSources': 'Fontes de dados',
    'footer.usdaMeat': 'Tabela de Rendimentos de Cozimento do USDA para Carnes e Aves',
    'footer.usdaFdc': 'USDA FoodData Central',
    'footer.estimatesNote': 'Estimativas são indicadas quando os dados do USDA não estão disponíveis.',
    'footer.disclaimer':
      'Os valores são baseados nos dados do USDA acima. Sempre pese seus alimentos com uma balança de cozinha para maior precisão.',

    'food.estimatedYield': 'Rendimento estimado',
    'food.rawToCookedCalc': 'Calculadora de Cru para Cozido',
    'food.usdaCookingYield': 'Rendimento de cozimento USDA',
    'food.source': 'Fonte',
    'food.estimateSource':
      'Estimativa padrão do setor — o USDA não publicou dados diretos de rendimento de cozimento para este alimento.',
    'food.yieldByMethod': 'Rendimento por método de cozimento',
    'food.yieldByMethodSource': 'Fonte: Tabela de Rendimentos de Cozimento do USDA para Carnes e Aves',
    'food.chickenHeading': 'Por que o peito de frango é o padrão-ouro para monitorar macros',
    'food.chickenP1':
      'O peito de frango sem pele e sem osso fornece aproximadamente 22,5g de proteína por 100g cru — uma das melhores relações proteína-caloria de qualquer alimento integral. Com apenas 120 calorias e 2,6g de gordura por 100g cru, é a proteína magra favorita de fisiculturistas, atletas e qualquer pessoa gerenciando um déficit calórico.',
    'food.chickenP2':
      'O problema: como perde entre 25 e 30% do seu peso ao cozinhar, <strong>registrar o peso cozido sem considerar o rendimento leva a subestimar sua ingestão real de proteínas</strong>. Uma porção de 150g cozido veio de aproximadamente 200g cru — esse é o peso cru que você deve registrar.',
    'food.calcHeading': 'Calculadora de {name}',
    'food.faqHeading': 'Perguntas frequentes',
    'food.relatedLabel': 'Calculadoras relacionadas',
    'food.allFoods': 'Todos os alimentos →',

    'page.homeTitle': 'Calculadora Cru para Cozido | Dados de Rendimento USDA & Macros Completos',
    'page.homeDescription':
      'Converta o peso de qualquer alimento entre cru e cozido. Obtenha calorias, proteínas, carboidratos e gorduras para qualquer quantidade. Carnes, grãos e vegetais — baseado em dados do USDA.',
  },

  ja: {
    'nav.wordmark': '生→調理済み',
    'nav.chicken': 'チキン',
    'nav.rice': 'ご飯',
    'nav.beef': '牛肉',
    'nav.darkMode': 'ダークモード切替',
    'nav.language': '言語',

    'hero.eyebrow': 'USDA調理収率データに基づく',
    'hero.heading': '生から調理済み計算機',
    'hero.description':
      '生または調理済みの重量を入力 — 変換後の重量と完全なマクロ（カロリー、タンパク質、炭水化物、脂質）を取得。肉類、穀物、野菜に対応。',
    'hero.usda':
      'すべての収率はUSDA FoodData CentralおよびUSDA調理収率表から取得しています。',

    'browse.heading': '食品を選ぶ',
    'browse.description':
      '3つの主要カテゴリにわたる20種類の食品 — あらゆる生から調理済み計算機の中で最も広い対応範囲。',
    'browse.catMeat': '肉類・鶏肉・魚介類',
    'browse.catGrains': '穀物・パスタ・豆類',
    'browse.catVeg': '野菜',
    'browse.note.chicken': '調理後25%減',
    'browse.note.beef': '調理後27%減',
    'browse.note.salmon': '調理後21%減',
    'browse.note.pork': '調理後22%減',
    'browse.note.rice': '調理後3倍に膨張',
    'browse.note.pasta': '調理後2.25倍に膨張',
    'browse.note.lentils': '調理後2.3倍に膨張',
    'browse.note.quinoa': '調理後2.8倍に膨張',
    'browse.note.spinach': '調理後70%減',
    'browse.note.broccoli': '調理後10%減',
    'browse.note.potato': '調理後6%減',
    'browse.note.sweetPotato': '調理後10%減',

    'browse.food.chicken': '鶏の胸肉',
    'browse.food.beef': '合い挽き肉 (80/20)',
    'browse.food.salmon': 'サーモンフィレ',
    'browse.food.pork': 'ポークチョップ',
    'browse.food.rice': '白米',
    'browse.food.pasta': 'パスタ',
    'browse.food.lentils': 'レンズ豆',
    'browse.food.quinoa': 'キヌア',
    'browse.food.spinach': 'ほうれん草',
    'browse.food.broccoli': 'ブロッコリー',
    'browse.food.potato': 'じゃがいも',
    'browse.food.sweetPotato': 'さつまいも',

    'callout.eyebrow': '驚きの収率',
    'callout.heading': 'ほうれん草は調理後に重量の70%を失う',
    'callout.description':
      '生ほうれん草のあの袋は、茹でたり蒸したりすると元の重量の3分の1以下に縮んでしまいます。白米はその逆 — 乾燥100gが調理後300gになります。これらの極端な例が、正確なマクロ追跡において生の状態で計ることがいかに重要かを示しています。',
    'callout.spinachBtn': 'ほうれん草計算機 →',
    'callout.riceBtn': '米計算機 →',

    'usda.heading': 'なぜUSDAデータ？',
    'usda.meatLabel': '肉類・鶏肉',
    'usda.meatText':
      '<strong>USDAの肉類・鶏肉調理収率表</strong>からの収率 — 食品メーカーや栄養士が使用しているのと同じ情報源。',
    'usda.grainsLabel': '穀物・野菜',
    'usda.grainsText':
      '<strong>USDA FoodData Central</strong>（fdc.nal.usda.gov）の生と調理済みの項目を比較して導き出した収率。米国の公式栄養データベース。',

    'calc.foodLabel': '食品',
    'calc.foodPlaceholder': '検索 — 鶏の胸肉、白米、ブロッコリー…',
    'calc.clearFood': '食品選択をクリア',
    'calc.foodSuggestions': '食品候補',
    'calc.noFoodsFound': '食品が見つかりませんでした。',
    'calc.directionLabel': '方向',
    'calc.rawToCooked': '生 → 調理済み',
    'calc.cookedToRaw': '調理済み → 生',
    'calc.rawWeight': '生の重量',
    'calc.cookedWeight': '調理済みの重量',
    'calc.weightPlaceholder': '例：200',
    'calc.emptyState': '上記で食品を検索して始めてください。',
    'calc.nutritionHeader': '栄養成分 — この量について',
    'calc.calories': 'カロリー',
    'calc.protein': 'タンパク質',
    'calc.carbs': '炭水化物',
    'calc.fat': '脂質',
    'calc.sourceLabel': '出典',
    'calc.estimateSource': '業界標準の推定値（USDAデータ未掲載）',
    'calc.estimateNote':
      'この収率は業界標準の推定値です。USDAはこの食品の調理収率の直接測定値を公開していません。',
    'calc.morePrecise': '+ より精確：調理方法を選ぶ',
    'calc.hidePrecise': '− 調理方法を非表示',
    'calc.cookingMethodLabel': '調理方法',
    'calc.yieldExpand': '乾燥重量の{n}倍に膨張 · USDA収率：{pct}%',
    'calc.yieldLoss': '調理後{loss}%の重量減 · USDA収率：{pct}%',

    'footer.tagline':
      '肉類、穀物、野菜のUSDA調理収率データ。すべての換算に完全なマクロ付き。',
    'footer.popularFoods': '人気の食品',
    'footer.dataSources': 'データ出典',
    'footer.usdaMeat': 'USDA肉類・鶏肉調理収率表',
    'footer.usdaFdc': 'USDA FoodData Central',
    'footer.estimatesNote': 'USDAデータが入手できない場合は推定値を表示しています。',
    'footer.disclaimer':
      '数値は上記のUSDAデータに基づいています。正確な計量のため、常に料理用スケールで食品を計ってください。',

    'food.estimatedYield': '推定収率',
    'food.rawToCookedCalc': '生から調理済み計算機',
    'food.usdaCookingYield': 'USDA調理収率',
    'food.source': '出典',
    'food.estimateSource':
      '業界標準の推定値 — USDAはこの食品の調理収率データを直接公開していません。',
    'food.yieldByMethod': '調理方法別収率',
    'food.yieldByMethodSource': '出典：USDA肉類・鶏肉調理収率表',
    'food.chickenHeading': '鶏の胸肉がマクロ追跡の金本位標準である理由',
    'food.chickenP1':
      '皮なし・骨なしの鶏の胸肉は、生100gあたり約22.5gのタンパク質を含みます — あらゆる全食品の中で最高のタンパク質・カロリー比のひとつです。生100gあたりわずか120カロリー、2.6gの脂質で、ボディビルダー、アスリート、カロリー制限中の誰にとっても定番のリーンプロテインです。',
    'food.chickenP2':
      '注意点：調理後に25〜30%の重量を失うため、<strong>収率を考慮せずに調理後の重量を記録すると、実際のタンパク質摂取量を過小評価してしまいます</strong>。調理済み150gの量は、生約200gから得られたもの — それがUSDA栄養ラベルと照合するための生の重量です。',
    'food.calcHeading': '{name}計算機',
    'food.faqHeading': 'よくある質問',
    'food.relatedLabel': '関連計算機',
    'food.allFoods': 'すべての食品 →',

    'page.homeTitle': '生から調理済み計算機 | USDA収率データと完全なマクロ',
    'page.homeDescription':
      'あらゆる食品の生から調理済みの重量を換算。カロリー、タンパク質、炭水化物、脂質をあらゆる量で取得 — USDAデータに基づく。',
  },

  ko: {
    'nav.wordmark': '생→조리',
    'nav.chicken': '닭고기',
    'nav.rice': '쌀',
    'nav.beef': '소고기',
    'nav.darkMode': '다크 모드 전환',
    'nav.language': '언어',

    'hero.eyebrow': 'USDA 조리 수율 데이터 기반',
    'hero.heading': '생 → 조리 계산기',
    'hero.description':
      '생 또는 조리된 무게를 입력하면 변환된 무게와 완전한 매크로(칼로리, 단백질, 탄수화물, 지방)를 얻을 수 있습니다. 육류, 곡물, 채소를 다룹니다.',
    'hero.usda':
      '모든 수율은 USDA FoodData Central과 USDA 조리 수율 표에서 가져왔습니다.',

    'browse.heading': '식품별 찾기',
    'browse.description':
      '3가지 주요 카테고리에 걸친 20가지 식품 — 어떤 생→조리 계산기보다 넓은 범위.',
    'browse.catMeat': '육류, 가금류 및 해산물',
    'browse.catGrains': '곡물, 파스타 및 콩류',
    'browse.catVeg': '채소',
    'browse.note.chicken': '조리 시 25% 감소',
    'browse.note.beef': '조리 시 27% 감소',
    'browse.note.salmon': '조리 시 21% 감소',
    'browse.note.pork': '조리 시 22% 감소',
    'browse.note.rice': '조리 시 3배 팽창',
    'browse.note.pasta': '조리 시 2.25배 팽창',
    'browse.note.lentils': '조리 시 2.3배 팽창',
    'browse.note.quinoa': '조리 시 2.8배 팽창',
    'browse.note.spinach': '조리 시 70% 감소',
    'browse.note.broccoli': '조리 시 10% 감소',
    'browse.note.potato': '조리 시 6% 감소',
    'browse.note.sweetPotato': '조리 시 10% 감소',

    'browse.food.chicken': '닭 가슴살',
    'browse.food.beef': '다진 소고기 (80/20)',
    'browse.food.salmon': '연어 필레',
    'browse.food.pork': '돼지 갈비',
    'browse.food.rice': '백미',
    'browse.food.pasta': '파스타',
    'browse.food.lentils': '렌틸콩',
    'browse.food.quinoa': '퀴노아',
    'browse.food.spinach': '시금치',
    'browse.food.broccoli': '브로콜리',
    'browse.food.potato': '감자',
    'browse.food.sweetPotato': '고구마',

    'callout.eyebrow': '놀라운 수율',
    'callout.heading': '시금치는 조리 시 무게의 70%를 잃습니다',
    'callout.description':
      '생 시금치 한 봉지는 끓이거나 찌면 원래 무게의 3분의 1 미만으로 줄어듭니다. 백미는 반대 방향으로 — 건조 100g이 조리 후 300g이 됩니다. 이러한 극단적인 차이가 정확한 매크로 추적을 위해 생 상태에서 무게를 재는 것이 왜 중요한지 보여줍니다.',
    'callout.spinachBtn': '시금치 계산기 →',
    'callout.riceBtn': '쌀 계산기 →',

    'usda.heading': '왜 USDA 데이터인가?',
    'usda.meatLabel': '육류 및 가금류',
    'usda.meatText':
      '<strong>USDA 육류 및 가금류 조리 수율 표</strong>의 수율 — 식품 제조업체와 영양사들이 사용하는 동일한 출처.',
    'usda.grainsLabel': '곡물 및 채소',
    'usda.grainsText':
      '<strong>USDA FoodData Central</strong>(fdc.nal.usda.gov)에서 생 및 조리된 항목을 비교하여 도출된 수율 — 미국의 권위 있는 영양 데이터베이스.',

    'calc.foodLabel': '식품',
    'calc.foodPlaceholder': '검색 — 닭 가슴살, 백미, 브로콜리…',
    'calc.clearFood': '식품 선택 지우기',
    'calc.foodSuggestions': '식품 추천',
    'calc.noFoodsFound': '식품을 찾을 수 없습니다.',
    'calc.directionLabel': '방향',
    'calc.rawToCooked': '생 → 조리',
    'calc.cookedToRaw': '조리 → 생',
    'calc.rawWeight': '생 무게',
    'calc.cookedWeight': '조리된 무게',
    'calc.weightPlaceholder': '예: 200',
    'calc.emptyState': '시작하려면 위에서 식품을 검색하세요.',
    'calc.nutritionHeader': '영양 — 이 양에 대해',
    'calc.calories': '칼로리',
    'calc.protein': '단백질',
    'calc.carbs': '탄수화물',
    'calc.fat': '지방',
    'calc.sourceLabel': '출처',
    'calc.estimateSource': '업계 표준 추정치 (USDA 데이터 없음)',
    'calc.estimateNote':
      '이 수율 수치는 업계 표준 추정치입니다. USDA는 이 식품에 대한 직접적인 조리 수율 측정값을 게시하지 않았습니다.',
    'calc.morePrecise': '+ 더 정확하게: 조리 방법 선택',
    'calc.hidePrecise': '− 조리 방법 숨기기',
    'calc.cookingMethodLabel': '조리 방법',
    'calc.yieldExpand': '건조 무게의 {n}배로 팽창 · USDA 수율: {pct}%',
    'calc.yieldLoss': '조리 시 {loss}% 무게 감소 · USDA 수율: {pct}%',

    'footer.tagline':
      '육류, 곡물, 채소를 위한 USDA 조리 수율 데이터. 모든 변환에 대한 완전한 매크로.',
    'footer.popularFoods': '인기 식품',
    'footer.dataSources': '데이터 출처',
    'footer.usdaMeat': 'USDA 육류 및 가금류 조리 수율 표',
    'footer.usdaFdc': 'USDA FoodData Central',
    'footer.estimatesNote': 'USDA 데이터를 사용할 수 없는 경우 추정치가 표시됩니다.',
    'footer.disclaimer':
      '값은 위의 USDA 데이터를 기반으로 합니다. 정확도를 위해 항상 주방 저울로 식품을 측정하세요.',

    'food.estimatedYield': '추정 수율',
    'food.rawToCookedCalc': '생 → 조리 계산기',
    'food.usdaCookingYield': 'USDA 조리 수율',
    'food.source': '출처',
    'food.estimateSource':
      '업계 표준 추정치 — USDA는 이 식품에 대한 직접적인 조리 수율 데이터를 게시하지 않았습니다.',
    'food.yieldByMethod': '조리 방법별 수율',
    'food.yieldByMethodSource': '출처: USDA 육류 및 가금류 조리 수율 표',
    'food.chickenHeading': '닭 가슴살이 매크로 추적의 황금 기준인 이유',
    'food.chickenP1':
      '껍질과 뼈를 제거한 닭 가슴살은 생 100g당 약 22.5g의 단백질을 제공합니다 — 모든 전체 식품 중 가장 높은 단백질 대 칼로리 비율 중 하나입니다. 생 100g당 120칼로리와 2.6g의 지방만으로, 보디빌더, 운동선수, 칼로리 적자를 관리하는 모든 사람에게 가장 선호되는 린 단백질입니다.',
    'food.chickenP2':
      '주의사항: 조리 시 25~30%의 무게를 잃기 때문에, <strong>수율을 고려하지 않고 조리된 무게를 기록하면 실제 단백질 섭취량을 과소평가하게 됩니다</strong>. 조리된 150g은 약 200g 생에서 나온 것입니다 — USDA 영양 라벨 기준으로 기록해야 할 생 무게가 바로 그것입니다.',
    'food.calcHeading': '{name} 계산기',
    'food.faqHeading': '자주 묻는 질문',
    'food.relatedLabel': '관련 계산기',
    'food.allFoods': '모든 식품 →',

    'page.homeTitle': '생 → 조리 계산기 | USDA 수율 데이터 및 완전한 매크로',
    'page.homeDescription':
      '모든 식품의 생 및 조리된 무게를 변환하세요. 모든 양에 대한 칼로리, 단백질, 탄수화물, 지방을 얻으세요 — USDA 데이터 기반.',
  },

  it: {
    'nav.wordmark': 'Crudo→Cotto',
    'nav.chicken': 'Pollo',
    'nav.rice': 'Riso',
    'nav.beef': 'Manzo',
    'nav.darkMode': 'Attiva/disattiva modalità scura',
    'nav.language': 'Lingua',

    'hero.eyebrow': 'Basato sui dati di resa di cottura USDA',
    'hero.heading': 'Calcolatore da Crudo a Cotto',
    'hero.description':
      'Inserisci un peso crudo o cotto — ottieni il peso convertito più i macronutrienti completi (calorie, proteine, carboidrati, grassi). Copre carni, cereali e verdure.',
    'hero.usda':
      'Tutte le rese provengono da USDA FoodData Central e dalla Tabella delle rese di cottura USDA.',

    'browse.heading': 'Sfoglia per alimento',
    'browse.description':
      '20 alimenti nelle tre categorie principali — la copertura più ampia di qualsiasi calcolatore crudo-cotto.',
    'browse.catMeat': 'Carne, Pollame e Frutti di mare',
    'browse.catGrains': 'Cereali, Pasta e Legumi',
    'browse.catVeg': 'Verdure',
    'browse.note.chicken': 'Perde il 25% durante la cottura',
    'browse.note.beef': 'Perde il 27% durante la cottura',
    'browse.note.salmon': 'Perde il 21% durante la cottura',
    'browse.note.pork': 'Perde il 22% durante la cottura',
    'browse.note.rice': 'Si espande 3× durante la cottura',
    'browse.note.pasta': 'Si espande 2,25× durante la cottura',
    'browse.note.lentils': 'Si espande 2,3× durante la cottura',
    'browse.note.quinoa': 'Si espande 2,8× durante la cottura',
    'browse.note.spinach': 'Perde il 70% durante la cottura',
    'browse.note.broccoli': 'Perde il 10% durante la cottura',
    'browse.note.potato': 'Perde il 6% durante la cottura',
    'browse.note.sweetPotato': 'Perde il 10% durante la cottura',

    'browse.food.chicken': 'Petto di pollo',
    'browse.food.beef': 'Carne macinata (80/20)',
    'browse.food.salmon': 'Filetto di salmone',
    'browse.food.pork': 'Braciola di maiale',
    'browse.food.rice': 'Riso bianco',
    'browse.food.pasta': 'Pasta',
    'browse.food.lentils': 'Lenticchie',
    'browse.food.quinoa': 'Quinoa',
    'browse.food.spinach': 'Spinaci',
    'browse.food.broccoli': 'Broccoli',
    'browse.food.potato': 'Patata',
    'browse.food.sweetPotato': 'Patata dolce',

    'callout.eyebrow': 'Rese sorprendenti',
    'callout.heading': 'Gli spinaci perdono il 70% del loro peso durante la cottura',
    'callout.description':
      'Quel sacchetto di spinaci crudi si riduce a meno di un terzo del peso originale dopo la bollitura o la cottura a vapore. Il riso bianco va nella direzione opposta — 100g secco diventa 300g cotto. Questi estremi spiegano perché pesare crudo è così importante per un tracciamento preciso dei macronutrienti.',
    'callout.spinachBtn': 'Calcolatore spinaci →',
    'callout.riceBtn': 'Calcolatore riso →',

    'usda.heading': 'Perché i dati USDA?',
    'usda.meatLabel': 'Carne e Pollame',
    'usda.meatText':
      'Rese dalla <strong>Tabella delle rese di cottura USDA per carne e pollame</strong> — la stessa fonte utilizzata dai produttori alimentari e dai dietisti.',
    'usda.grainsLabel': 'Cereali e Verdure',
    'usda.grainsText':
      'Rese derivate dal confronto tra voci crude e cotte in <strong>USDA FoodData Central</strong> (fdc.nal.usda.gov), il database nutrizionale ufficiale statunitense.',

    'calc.foodLabel': 'Alimento',
    'calc.foodPlaceholder': 'Cerca — petto di pollo, riso bianco, broccoli…',
    'calc.clearFood': 'Cancella selezione alimento',
    'calc.foodSuggestions': 'Suggerimenti alimenti',
    'calc.noFoodsFound': 'Nessun alimento trovato.',
    'calc.directionLabel': 'Direzione',
    'calc.rawToCooked': 'Crudo → Cotto',
    'calc.cookedToRaw': 'Cotto → Crudo',
    'calc.rawWeight': 'Peso crudo',
    'calc.cookedWeight': 'Peso cotto',
    'calc.weightPlaceholder': 'es. 200',
    'calc.emptyState': 'Cerca un alimento sopra per iniziare.',
    'calc.nutritionHeader': 'Nutrizione — per questa quantità',
    'calc.calories': 'Calorie',
    'calc.protein': 'Proteine',
    'calc.carbs': 'Carboidrati',
    'calc.fat': 'Grassi',
    'calc.sourceLabel': 'Fonte',
    'calc.estimateSource': 'Stima standard del settore (dati USDA non disponibili)',
    'calc.estimateNote':
      'Questo valore di resa è una stima standard del settore. L\'USDA non ha pubblicato misurazioni dirette della resa di cottura per questo alimento.',
    'calc.morePrecise': '+ Più preciso: scegli il metodo di cottura',
    'calc.hidePrecise': '− Nascondi il metodo di cottura',
    'calc.cookingMethodLabel': 'Metodo di cottura',
    'calc.yieldExpand': 'Si espande a {n}× del suo peso secco · Resa USDA: {pct}%',
    'calc.yieldLoss': '{loss}% perdita di peso durante la cottura · Resa USDA: {pct}%',

    'footer.tagline':
      'Dati di resa di cottura USDA per carne, cereali e verdure. Macronutrienti completi per ogni conversione.',
    'footer.popularFoods': 'Alimenti popolari',
    'footer.dataSources': 'Fonti dei dati',
    'footer.usdaMeat': 'Tabella delle rese di cottura USDA per carne e pollame',
    'footer.usdaFdc': 'USDA FoodData Central',
    'footer.estimatesNote': 'Le stime sono indicate quando i dati USDA non sono disponibili.',
    'footer.disclaimer':
      'I valori si basano sui dati USDA sopra indicati. Pesa sempre il cibo con una bilancia da cucina per maggiore precisione.',

    'food.estimatedYield': 'Resa stimata',
    'food.rawToCookedCalc': 'Calcolatore da Crudo a Cotto',
    'food.usdaCookingYield': 'Resa di cottura USDA',
    'food.source': 'Fonte',
    'food.estimateSource':
      'Stima standard del settore — l\'USDA non ha pubblicato dati diretti sulla resa di cottura per questo alimento.',
    'food.yieldByMethod': 'Resa per metodo di cottura',
    'food.yieldByMethodSource': 'Fonte: Tabella delle rese di cottura USDA per carne e pollame',
    'food.chickenHeading': 'Perché il petto di pollo è il gold standard per il tracciamento dei macronutrienti',
    'food.chickenP1':
      'Il petto di pollo senza pelle e senza osso fornisce circa 22,5g di proteine per 100g crudo — uno dei migliori rapporti proteine/calorie tra tutti gli alimenti interi. Con sole 120 calorie e 2,6g di grassi per 100g crudo, è la proteina magra preferita da bodybuilder, atleti e chiunque gestisca un deficit calorico.',
    'food.chickenP2':
      'Il problema: poiché perde il 25–30% del suo peso durante la cottura, <strong>registrare il peso cotto senza considerare la resa porta a sottostimare l\'apporto effettivo di proteine</strong>. Una porzione di 150g cotto proviene da circa 200g crudo — è il peso crudo che dovresti registrare.',
    'food.calcHeading': 'Calcolatore {name}',
    'food.faqHeading': 'Domande frequenti',
    'food.relatedLabel': 'Calcolatori correlati',
    'food.allFoods': 'Tutti gli alimenti →',

    'page.homeTitle': 'Calcolatore da Crudo a Cotto | Dati di Resa USDA e Macronutrienti Completi',
    'page.homeDescription':
      'Converti il peso di qualsiasi alimento tra crudo e cotto. Ottieni calorie, proteine, carboidrati e grassi per qualsiasi quantità. Carni, cereali e verdure — basato sui dati USDA.',
  },

  hi: {
    'nav.wordmark': 'कच्चा→पका',
    'nav.chicken': 'चिकन',
    'nav.rice': 'चावल',
    'nav.beef': 'गोश्त',
    'nav.darkMode': 'डार्क मोड टॉगल करें',
    'nav.language': 'भाषा',

    'hero.eyebrow': 'USDA कुकिंग यील्ड डेटा पर आधारित',
    'hero.heading': 'कच्चे से पके का कैलकुलेटर',
    'hero.description':
      'कच्चा या पका वजन दर्ज करें — परिवर्तित वजन और पूरे मैक्रो (कैलोरी, प्रोटीन, कार्ब्स, वसा) पाएं। मांस, अनाज और सब्जियों के लिए।',
    'hero.usda':
      'सभी यील्ड USDA FoodData Central और USDA कुकिंग यील्ड तालिका से ली गई हैं।',

    'browse.heading': 'खाद्य पदार्थ खोजें',
    'browse.description':
      'तीनों प्रमुख श्रेणियों में 20 खाद्य पदार्थ — किसी भी कच्चे से पके कैलकुलेटर की सबसे व्यापक कवरेज।',
    'browse.catMeat': 'मांस, मुर्गी और समुद्री भोजन',
    'browse.catGrains': 'अनाज, पास्ता और दालें',
    'browse.catVeg': 'सब्जियां',
    'browse.note.chicken': 'पकाने पर 25% कम',
    'browse.note.beef': 'पकाने पर 27% कम',
    'browse.note.salmon': 'पकाने पर 21% कम',
    'browse.note.pork': 'पकाने पर 22% कम',
    'browse.note.rice': 'पकाने पर 3× फैलता है',
    'browse.note.pasta': 'पकाने पर 2.25× फैलता है',
    'browse.note.lentils': 'पकाने पर 2.3× फैलता है',
    'browse.note.quinoa': 'पकाने पर 2.8× फैलता है',
    'browse.note.spinach': 'पकाने पर 70% कम',
    'browse.note.broccoli': 'पकाने पर 10% कम',
    'browse.note.potato': 'पकाने पर 6% कम',
    'browse.note.sweetPotato': 'पकाने पर 10% कम',

    'browse.food.chicken': 'चिकन ब्रेस्ट',
    'browse.food.beef': 'कीमा (80/20)',
    'browse.food.salmon': 'सैल्मन फिलेट',
    'browse.food.pork': 'पोर्क चॉप',
    'browse.food.rice': 'सफेद चावल',
    'browse.food.pasta': 'पास्ता',
    'browse.food.lentils': 'मसूर दाल',
    'browse.food.quinoa': 'क्विनोआ',
    'browse.food.spinach': 'पालक',
    'browse.food.broccoli': 'ब्रोकोली',
    'browse.food.potato': 'आलू',
    'browse.food.sweetPotato': 'शकरकंद',

    'callout.eyebrow': 'चौंकाने वाले यील्ड',
    'callout.heading': 'पालक पकाने पर 70% वजन खो देता है',
    'callout.description':
      'कच्चे पालक का वह पैकेट उबालने या भाप में पकाने के बाद अपने मूल वजन के एक तिहाई से भी कम रह जाता है। सफेद चावल इसके विपरीत होता है — 100g सूखा 300g पका बन जाता है। ये चरम उदाहरण बताते हैं कि सटीक मैक्रो ट्रैकिंग के लिए कच्चा वजन मापना क्यों जरूरी है।',
    'callout.spinachBtn': 'पालक कैलकुलेटर →',
    'callout.riceBtn': 'चावल कैलकुलेटर →',

    'usda.heading': 'USDA डेटा क्यों?',
    'usda.meatLabel': 'मांस और मुर्गी',
    'usda.meatText':
      'यील्ड <strong>USDA मांस और मुर्गी कुकिंग यील्ड तालिका</strong> से — वही स्रोत जो खाद्य निर्माता और पोषण विशेषज्ञ उपयोग करते हैं।',
    'usda.grainsLabel': 'अनाज और सब्जियां',
    'usda.grainsText':
      '<strong>USDA FoodData Central</strong> (fdc.nal.usda.gov) में कच्चे और पके प्रविष्टियों की तुलना से यील्ड — अमेरिका का आधिकारिक पोषक तत्व डेटाबेस।',

    'calc.foodLabel': 'खाद्य पदार्थ',
    'calc.foodPlaceholder': 'खोजें — चिकन ब्रेस्ट, सफेद चावल, ब्रोकोली…',
    'calc.clearFood': 'चयन हटाएं',
    'calc.foodSuggestions': 'खाद्य सुझाव',
    'calc.noFoodsFound': 'कोई खाद्य पदार्थ नहीं मिला।',
    'calc.directionLabel': 'दिशा',
    'calc.rawToCooked': 'कच्चा → पका',
    'calc.cookedToRaw': 'पका → कच्चा',
    'calc.rawWeight': 'कच्चा वजन',
    'calc.cookedWeight': 'पका वजन',
    'calc.weightPlaceholder': 'जैसे 200',
    'calc.emptyState': 'शुरू करने के लिए ऊपर खाद्य पदार्थ खोजें।',
    'calc.nutritionHeader': 'पोषण — इस मात्रा के लिए',
    'calc.calories': 'कैलोरी',
    'calc.protein': 'प्रोटीन',
    'calc.carbs': 'कार्ब्स',
    'calc.fat': 'वसा',
    'calc.sourceLabel': 'स्रोत',
    'calc.estimateSource': 'उद्योग-मानक अनुमान (USDA डेटा अनुपलब्ध)',
    'calc.estimateNote':
      'यह यील्ड एक उद्योग-मानक अनुमान है। USDA ने इस खाद्य पदार्थ के लिए सीधे कुकिंग यील्ड माप प्रकाशित नहीं किए हैं।',
    'calc.morePrecise': '+ अधिक सटीक: पकाने की विधि चुनें',
    'calc.hidePrecise': '− पकाने की विधि छुपाएं',
    'calc.cookingMethodLabel': 'पकाने की विधि',
    'calc.yieldExpand': 'सूखे वजन का {n}× फैलता है · USDA यील्ड: {pct}%',
    'calc.yieldLoss': 'पकाने पर {loss}% वजन घटता है · USDA यील्ड: {pct}%',

    'footer.tagline':
      'मांस, अनाज और सब्जियों के लिए USDA कुकिंग यील्ड डेटा। हर रूपांतरण के लिए पूरे मैक्रो।',
    'footer.popularFoods': 'लोकप्रिय खाद्य पदार्थ',
    'footer.dataSources': 'डेटा स्रोत',
    'footer.usdaMeat': 'USDA मांस और मुर्गी कुकिंग यील्ड तालिका',
    'footer.usdaFdc': 'USDA FoodData Central',
    'footer.estimatesNote': 'जहां USDA डेटा उपलब्ध नहीं है, अनुमान बताए गए हैं।',
    'footer.disclaimer':
      'मान ऊपर दिए USDA डेटा के अनुसार हैं। सटीकता के लिए हमेशा रसोई तराजू से खाना तोलें।',

    'food.estimatedYield': 'अनुमानित यील्ड',
    'food.rawToCookedCalc': 'कच्चे से पके का कैलकुलेटर',
    'food.usdaCookingYield': 'USDA कुकिंग यील्ड',
    'food.source': 'स्रोत',
    'food.estimateSource':
      'उद्योग-मानक अनुमान — USDA ने इस खाद्य पदार्थ के लिए सीधे कुकिंग यील्ड डेटा प्रकाशित नहीं किया है।',
    'food.yieldByMethod': 'पकाने की विधि के अनुसार यील्ड',
    'food.yieldByMethodSource': 'स्रोत: USDA मांस और मुर्गी कुकिंग यील्ड तालिका',
    'food.chickenHeading': 'चिकन ब्रेस्ट मैक्रो-ट्रैकिंग का स्वर्ण मानक क्यों है',
    'food.chickenP1':
      'बिना त्वचा और हड्डी के चिकन ब्रेस्ट प्रति 100g कच्चे में लगभग 22.5g प्रोटीन देता है — किसी भी साबुत खाद्य पदार्थ का सबसे अच्छा प्रोटीन-कैलोरी अनुपात। प्रति 100g कच्चे में केवल 120 कैलोरी और 2.6g वसा के साथ, यह बॉडीबिल्डर, एथलीट और कैलोरी कम करने वाले सभी लोगों के लिए पसंदीदा लीन प्रोटीन है।',
    'food.chickenP2':
      'पकाने पर 25-30% वजन खो देने के कारण, <strong>यील्ड को ध्यान में रखे बिना पका वजन लॉग करने से आपकी वास्तविक प्रोटीन खपत कम आंकी जाती है</strong>। 150g पका हिस्सा लगभग 200g कच्चे से आया — USDA लेबल के अनुसार यही कच्चा वजन आपको लॉग करना चाहिए।',
    'food.calcHeading': '{name} कैलकुलेटर',
    'food.faqHeading': 'अक्सर पूछे जाने वाले सवाल',
    'food.relatedLabel': 'संबंधित कैलकुलेटर',
    'food.allFoods': 'सभी खाद्य पदार्थ →',

    'page.homeTitle': 'कच्चे से पके का कैलकुलेटर | USDA यील्ड डेटा और पूरे मैक्रो',
    'page.homeDescription':
      'किसी भी खाद्य पदार्थ का कच्चे और पके के बीच वजन बदलें। किसी भी मात्रा के लिए कैलोरी, प्रोटीन, कार्ब्स और वसा पाएं — USDA डेटा पर आधारित।',
  },
} as const;

export type TranslationKey = keyof (typeof ui)['en'];
