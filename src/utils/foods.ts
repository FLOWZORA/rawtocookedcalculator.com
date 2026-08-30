import foodData from '../food-data.json';

export interface MacrosPer100g {
  calories: number;
  protein_g: number;
  carbs_g: number;
  fat_g: number;
}

export interface Food {
  id: string;
  name: string;
  flagship?: boolean;
  default_cooking_method: string;
  yield_percent: number;
  yield_by_method?: Record<string, number>;
  source: string;
  note?: string;
  macros_per_100g_raw: MacrosPer100g;
  category: 'meat_poultry_seafood' | 'grains_pasta_legumes' | 'vegetables';
  slug: string;
}

export interface CalcResult {
  rawG: number;
  cookedG: number;
  yieldPct: number;
  macros: MacrosPer100g;
}

// Slug → food ID mapping (simplified URLs for SEO)
export const SLUG_TO_ID: Record<string, string> = {
  'chicken': 'chicken-breast',
  'rice': 'white-rice',
  'beef': 'ground-beef-80-20',
  'pasta': 'pasta',
  'salmon': 'salmon',
  'pork': 'pork-chop',
  'chicken-thigh': 'chicken-thigh',
  'lean-beef': 'ground-beef-93-7',
  'ribeye': 'ribeye-steak',
  'pork-shoulder': 'pork-shoulder',
  'turkey': 'turkey-breast',
  'shrimp': 'shrimp',
  'brown-rice': 'brown-rice',
  'quinoa': 'quinoa',
  'lentils': 'lentils',
  'black-beans': 'black-beans',
  'broccoli': 'broccoli',
  'spinach': 'spinach',
  'potato': 'potato',
  'sweet-potato': 'sweet-potato',
};

const ID_TO_SLUG: Record<string, string> = Object.fromEntries(
  Object.entries(SLUG_TO_ID).map(([slug, id]) => [id, slug])
);

export const COOKING_METHOD_LABELS: Record<string, string> = {
  baked_roasted: 'Baked / Roasted',
  grilled: 'Grilled',
  boiled_poached: 'Boiled / Poached',
  pan_fried: 'Pan-fried',
  boiled: 'Boiled',
  boiled_steamed: 'Boiled / Steamed',
  slow_cooked_braised: 'Slow-cooked / Braised',
  baked: 'Baked',
  'baked/roasted': 'Baked / Roasted',
  'pan_fried': 'Pan-fried',
};

export const CATEGORY_LABELS: Record<string, string> = {
  meat_poultry_seafood: 'Meat, Poultry & Seafood',
  grains_pasta_legumes: 'Grains, Pasta & Legumes',
  vegetables: 'Vegetables',
};

function tagFoods(
  items: Omit<Food, 'category' | 'slug'>[],
  category: Food['category']
): Food[] {
  return items.map((f) => ({
    ...f,
    category,
    slug: ID_TO_SLUG[f.id] ?? f.id,
  }));
}

const ALL_FOODS: Food[] = [
  ...tagFoods(foodData.categories.meat_poultry_seafood as any, 'meat_poultry_seafood'),
  ...tagFoods(foodData.categories.grains_pasta_legumes as any, 'grains_pasta_legumes'),
  ...tagFoods(foodData.categories.vegetables as any, 'vegetables'),
];

export function getAllFoods(): Food[] {
  return ALL_FOODS;
}

export function getFoodBySlug(slug: string): Food | undefined {
  const id = SLUG_TO_ID[slug];
  return ALL_FOODS.find((f) => f.id === id);
}

export function getFoodById(id: string): Food | undefined {
  return ALL_FOODS.find((f) => f.id === id);
}

export function getSlugById(id: string): string {
  return ID_TO_SLUG[id] ?? id;
}

export function isEstimate(food: Food): boolean {
  return food.source.startsWith('estimate');
}

export function toGrams(value: number, unit: 'g' | 'oz' | 'lbs'): number {
  if (unit === 'oz') return value * 28.3495;
  if (unit === 'lbs') return value * 453.592;
  return value;
}

export function fromGrams(grams: number, unit: 'g' | 'oz' | 'lbs'): number {
  if (unit === 'oz') return grams / 28.3495;
  if (unit === 'lbs') return grams / 453.592;
  return grams;
}

export function calcResult(
  food: Food,
  inputG: number,
  direction: 'raw-to-cooked' | 'cooked-to-raw',
  cookingMethod?: string | null
): CalcResult {
  const yieldPct =
    cookingMethod && food.yield_by_method?.[cookingMethod]
      ? food.yield_by_method[cookingMethod]
      : food.yield_percent;

  const rawG =
    direction === 'raw-to-cooked' ? inputG : inputG / (yieldPct / 100);
  const cookedG = rawG * (yieldPct / 100);

  const macros: MacrosPer100g = {
    calories: (rawG / 100) * food.macros_per_100g_raw.calories,
    protein_g: (rawG / 100) * food.macros_per_100g_raw.protein_g,
    carbs_g: (rawG / 100) * food.macros_per_100g_raw.carbs_g,
    fat_g: (rawG / 100) * food.macros_per_100g_raw.fat_g,
  };

  return { rawG, cookedG, yieldPct, macros };
}

export function getYieldDescription(food: Food): string {
  if (food.yield_percent > 100) {
    const multiplier = (food.yield_percent / 100).toFixed(1);
    return `Expands to ${multiplier}× its dry weight when cooked`;
  }
  const loss = 100 - food.yield_percent;
  return `Loses ${loss}% of its weight when cooked`;
}

export function getCategoryExplanation(food: Food): string {
  if (food.category === 'meat_poultry_seafood') {
    if (food.id === 'chicken-breast' || food.id === 'chicken-thigh') {
      return 'Chicken loses weight during cooking primarily through moisture evaporation. Proteins denature and contract, squeezing out water bound within muscle fibers. Higher cooking temperatures and longer cook times increase moisture loss.';
    }
    if (food.id.startsWith('ground-beef') || food.id === 'ribeye-steak') {
      return 'Beef loses moisture and some fat during cooking. Leaner cuts retain more of their weight since less fat renders out, while higher-fat cuts lose more through fat drip.';
    }
    if (food.id.startsWith('pork')) {
      return 'Pork loses moisture during cooking as proteins contract and water evaporates. Slow-cooked cuts like pork shoulder lose significantly more than quick-cooked chops due to the extended cooking time.';
    }
    if (food.id === 'turkey-breast') {
      return 'Turkey breast, like chicken, loses moisture through evaporation as proteins contract during cooking. Roasting produces slightly more loss than steaming or boiling.';
    }
    if (food.id === 'salmon') {
      return 'Salmon loses moisture as its proteins coagulate during cooking. The fat content helps retain some weight, but water-soluble proteins still release liquid.';
    }
    if (food.id === 'shrimp') {
      return 'Shrimp loses relatively little weight during cooking compared to other proteins — mostly surface moisture. Their dense protein structure retains most of the original weight.';
    }
    return 'Protein-rich foods lose moisture during cooking as proteins contract and water evaporates from muscle tissue.';
  }
  if (food.category === 'grains_pasta_legumes') {
    return 'Grains, pasta, and legumes absorb water during cooking, which is why they expand dramatically. The starch granules absorb liquid and swell, significantly increasing weight. Macros are always calculated from the dry (raw) weight since that\'s how nutrition labels measure them.';
  }
  if (food.category === 'vegetables') {
    if (food.id === 'spinach') {
      return 'Spinach has one of the most dramatic weight reductions of any food — losing 70% of its weight when cooked. It\'s mostly water, and the cell walls collapse entirely when heated, releasing nearly all of it.';
    }
    if (food.id === 'potato' || food.id === 'sweet-potato') {
      return 'Potatoes retain most of their weight when cooked because their dense starch structure holds moisture in. Only a small amount evaporates from the surface during cooking.';
    }
    return 'Vegetables lose some moisture during cooking as cell walls soften and water evaporates. Leafy greens lose dramatically more than dense vegetables.';
  }
  return '';
}
