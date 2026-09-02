import foodData from '../food-data.json';
import type { ExplanationKey } from '../i18n/content';

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

/**
 * Whether this food has a page of its own. Only foods listed in SLUG_TO_ID get
 * routed by [food].astro; the rest are calculator-only entries. Anything that
 * links to a food page must filter on this, or it will emit a 404 link.
 */
export function hasPage(food: Food): boolean {
  return food.id in ID_TO_SLUG;
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

/**
 * Which i18n explanation applies to this food. The copy for each key lives in
 * src/i18n/content.ts, one entry per locale.
 */
export function getExplanationKey(food: Food): ExplanationKey {
  if (food.category === 'meat_poultry_seafood') {
    if (food.id === 'chicken-breast' || food.id === 'chicken-thigh') return 'chicken';
    if (food.id.startsWith('ground-beef') || food.id === 'ribeye-steak') return 'beef';
    if (food.id.startsWith('pork')) return 'pork';
    if (food.id === 'turkey-breast') return 'turkey';
    if (food.id === 'salmon') return 'salmon';
    if (food.id === 'shrimp') return 'shrimp';
    return 'meatDefault';
  }
  if (food.category === 'grains_pasta_legumes') return 'grains';
  if (food.id === 'spinach') return 'spinach';
  if (food.id === 'potato' || food.id === 'sweet-potato') return 'potato';
  return 'vegDefault';
}

export type SourceKey =
  | 'estimate'
  | 'source.usdaMeatTable'
  | 'source.usdaHandbook102'
  | 'source.usdaFdc'
  | 'source.ifct';

/** Which i18n key names this food's data source. */
export function getSourceKey(food: Food): SourceKey {
  if (isEstimate(food)) return 'estimate';
  if (food.source.startsWith('USDA Table')) return 'source.usdaMeatTable';
  if (food.source.startsWith('USDA Agriculture Handbook')) return 'source.usdaHandbook102';
  if (food.source.startsWith('IFCT')) return 'source.ifct';
  return 'source.usdaFdc';
}

/**
 * Which i18n key carries the disclosure shown under the citation, if any.
 * Estimates say USDA has no figure; IFCT-sourced foods say the figure is real
 * but comes from India's national authority rather than USDA.
 */
export function getDisclosureKey(
  food: Food
): 'calc.estimateNote' | 'calc.ifctNote' | null {
  const key = getSourceKey(food);
  if (key === 'estimate') return 'calc.estimateNote';
  if (key === 'source.ifct') return 'calc.ifctNote';
  return null;
}
