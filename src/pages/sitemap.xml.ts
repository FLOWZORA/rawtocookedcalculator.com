import type { APIRoute } from 'astro';
import { SLUG_TO_ID } from '../utils/foods';
import { LOCALES } from '../i18n';

const BASE = 'https://rawtocookedcalculator.com';
const LASTMOD = '2026-08-31';

type ChangeFreq = 'daily' | 'weekly' | 'monthly' | 'yearly';

function entry(loc: string, priority: string, changefreq: ChangeFreq): string {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export const GET: APIRoute = () => {
  const foodSlugs = Object.keys(SLUG_TO_ID);
  const nonEnglishLocales = LOCALES.filter((l) => l !== 'en');

  const entries: string[] = [
    // English homepage — highest value page on the site
    entry(`${BASE}/`, '1.0', 'weekly'),

    // Flagship chicken page
    entry(`${BASE}/chicken`, '0.9', 'monthly'),

    // All other English food pages
    ...foodSlugs
      .filter((s) => s !== 'chicken')
      .map((s) => entry(`${BASE}/${s}`, '0.8', 'monthly')),

    // Localized homepages
    ...nonEnglishLocales.map((l) => entry(`${BASE}/${l}/`, '0.6', 'monthly')),

    // Localized food pages
    ...nonEnglishLocales.flatMap((l) =>
      foodSlugs.map((s) => entry(`${BASE}/${l}/${s}`, '0.5', 'monthly'))
    ),

    // Company / info pages (English)
    entry(`${BASE}/about`, '0.4', 'yearly'),
    entry(`${BASE}/contact`, '0.4', 'yearly'),
    entry(`${BASE}/privacy`, '0.3', 'yearly'),
    entry(`${BASE}/terms`, '0.3', 'yearly'),

    // Localized company / info pages
    ...nonEnglishLocales.flatMap((l) => [
      entry(`${BASE}/${l}/about`, '0.3', 'yearly'),
      entry(`${BASE}/${l}/contact`, '0.3', 'yearly'),
      entry(`${BASE}/${l}/privacy`, '0.2', 'yearly'),
      entry(`${BASE}/${l}/terms`, '0.2', 'yearly'),
    ]),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
