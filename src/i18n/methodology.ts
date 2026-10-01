import type { Locale } from './ui';

/**
 * Methodology page content.
 *
 * English only by design, like `food-content.ts`. The page is served at
 * `/methodology` (no `[lang]` route); the footer link is shown only on the
 * English site. If this is translated later, add a `[lang]/methodology.astro`
 * route, per-locale entries below, and un-gate the footer link in
 * `Footer.astro`.
 *
 * Strings ending in `Html` are injected with `set:html` and may contain
 * <strong> and <a> tags — no other markup.
 */

export interface MethodologySection {
  heading: string;
  /** Plain-text paragraphs. */
  paragraphs?: string[];
  /** Ordered/unordered list items, rendered after the paragraphs. */
  list?: string[];
  /** HTML paragraphs (links, <strong>), rendered after the list. */
  html?: string[];
}

export interface MethodologyPage {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heading: string;
  lede: string;
  bylineLabel: string;
  bylineName: string;
  bylineBio: string;
  updatedLabel: string;
  updated: string;
  sections: MethodologySection[];
  ctaLabel: string;
}

const METHODOLOGY_EN: MethodologyPage = {
  metaTitle: 'Methodology | How Raw to Cooked Calculator Sources Its Yield Data',
  metaDescription:
    'How every cooking-yield figure on Raw to Cooked Calculator is sourced, chosen, and checked — the data hierarchy, the arithmetic, how estimates are flagged, and how corrections are handled.',
  eyebrow: 'Methodology',
  heading: 'How the numbers are sourced and checked',
  lede: 'Every yield percentage on this site is traceable to a published source. This page explains where each figure comes from, how it is chosen when sources disagree, how the calculator does its arithmetic, and how mistakes get corrected.',
  bylineLabel: 'Written and maintained by',
  bylineName: 'Vaibhav Tiwari',
  bylineBio:
    'I built and maintain Raw to Cooked Calculator. I compiled the cooking-yield tables it runs on from USDA publications, transcribed and cross-checked each figure against its primary source, wrote the per-food explanations, and I keep the data current. I am not a dietitian or a food scientist; this site reports published research figures and does the conversion arithmetic for you — it does not give nutrition or medical advice.',
  updatedLabel: 'Last reviewed',
  updated: 'September 9, 2026',
  sections: [
    {
      heading: 'What a "yield" is',
      paragraphs: [
        'Cooking yield is the cooked weight of a food expressed as a percentage of its raw weight. A 72% yield means 100g raw becomes 72g cooked — the food lost 28% of its weight, almost always as water and rendered fat. A yield above 100% means the food gained weight: dry rice at 308% means 100g dry becomes about 308g cooked, because the grain absorbs cooking water.',
        'The calculator uses one yield figure per food (and, where it matters, one per cooking method). Enter a raw or a cooked weight and it returns the other side, plus the calories, protein, carbohydrate and fat for that amount.',
      ],
    },
    {
      heading: 'Source hierarchy',
      paragraphs: [
        'Figures are taken from the most authoritative available source for each food, in this order of preference:',
      ],
      list: [
        'USDA Table of Cooking Yields for Meat and Poultry (2012/2014) — the primary source for the common meat and poultry cuts (chicken, ground beef, ribeye, pork), and for the per-cooking-method figures on those pages (baked, grilled, braised, pan-fried, broiled, and so on).',
        'USDA Agriculture Handbook No. 102 (1975) — Food Yields Summarized by Different Stages of Preparation. The primary source for most vegetables, for several grains and legumes, and for the meat, poultry and seafood the newer table does not list (turkey breast, veal, salmon, shrimp).',
        'USDA FoodData Central — used to derive a yield by comparing the raw and cooked entries for the same food, whose per-100g calorie and nutrient ratios give the water-weight change. Used for foods the two tables above do not cover (pasta, quinoa, several beans, potato, egg) and to sanity-check the ones they do.',
        'IFCT 2017 (Indian Food Composition Tables) — India\'s official national nutrient tables. Used only for soy chunks / textured vegetable protein, which USDA does not track.',
        'FAO / Bognar weight-yield tables — used only for the scrambled-egg figure, because USDA lists scrambled egg only as a recipe made with added milk and fat, not as a plain weight yield.',
      ],
      html: [
        'Every food page shows which of these sources its figure comes from, and the footer lists them site-wide. Where a figure is <strong>not</strong> a direct measurement — see below — the food page and the calculator both say so in plain language.',
      ],
    },
    {
      heading: 'How a single figure is chosen',
      paragraphs: [
        'USDA sources often give a range, or several values for one food cooked different ways. When the site needs one headline number, it uses the value for the most common home preparation: baked or roasted for poultry, pan-broiled for ground beef, boiled for rice and pasta, boiled for most vegetables. The food page then explains how the other methods differ and shows their figures where USDA publishes them.',
        'Where two sources disagree, the more specific and more recent one wins — the 2012/2014 meat table over the 1975 handbook for a cut both cover, for instance. Disagreements large enough to matter are noted on the food page.',
        'A few figures were corrected against their primary sources during a September 2026 review, and the per-food copy was rewritten to match. The calculator data and the written explanations are kept in sync.',
      ],
    },
    {
      heading: 'Figures that are not a direct USDA measurement',
      paragraphs: [
        'Every headline yield currently on the site is drawn from one of the sources above. Two are not USDA measurements and are labelled as such wherever they appear:',
      ],
      list: [
        'Soy chunks / textured vegetable protein — from IFCT 2017, because USDA does not track this food. The calculator shows a note explaining the source when you select it.',
        'Scrambled egg (a per-method figure, not a headline yield) — from the FAO / Bognar tables, because USDA lists scrambled egg only as a milk-and-fat recipe.',
      ],
      html: [
        'The calculator also carries a disclosure path for any figure marked as an <strong>estimate</strong> rather than a measurement — it labels it "Estimated yield" in the page header and repeats the caveat inside the calculator. No food uses that path at the moment; it exists so that if a future food has to rely on an industry estimate, it is never shown as measured data.',
      ],
    },
    {
      heading: 'The arithmetic',
      html: [
        'Raw to cooked: <strong>cooked = raw × (yield% ÷ 100)</strong>.',
        'Cooked to raw: <strong>raw = cooked ÷ (yield% ÷ 100)</strong>.',
        'Macros: <strong>macros = (raw grams ÷ 100) × macros per 100g raw</strong>. Nutrition values are always calculated from the raw-weight equivalent, whichever direction you convert, because USDA nutrient data is measured on raw food. This keeps the calorie and macro output consistent with the label you would read.',
      ],
      paragraphs: [
        'Per-100g nutrient values for each food are taken from its USDA FoodData Central entry (raw), or from IFCT 2017 for soy chunks. They are stored alongside the yield in the same data file, so a figure and its macros are never out of step.',
      ],
    },
    {
      heading: 'What this data can and cannot tell you',
      paragraphs: [
        'Published yields are research-based averages measured under controlled conditions. Your result will vary with the exact cut, its size and starting moisture, your appliance, and how far you cook it — a well-done steak loses noticeably more than a rare one from the same piece of meat.',
        'The goal is to get you much closer to accurate than assuming raw and cooked weights are equal, which is the error most food logs contain. It is not laboratory precision. For anything that matters clinically, weigh your food raw on a kitchen scale and use the manufacturer or USDA figure directly.',
        'This site does not provide personalised nutrition advice, diet plans, or medical guidance. See the About and Contact pages for what it does and does not cover.',
      ],
    },
    {
      heading: 'Corrections',
      html: [
        'If a figure looks wrong, the most useful report includes the food, the cooking method, the value you expected, and the source you are comparing against. Send it to <a href="mailto:hello@rawtocookedcalculator.com" class="text-[var(--color-link)] hover:underline">hello@rawtocookedcalculator.com</a> and it will be checked against the primary source. Confirmed errors are fixed in the data file and the affected page copy, and the "Last reviewed" date above is updated.',
      ],
    },
  ],
  ctaLabel: '← Use the calculator',
};

/**
 * Methodology copy for a locale. English only for now — every locale returns
 * the English page (see the file header).
 */
export function getMethodology(_locale: Locale): MethodologyPage {
  return METHODOLOGY_EN;
}
