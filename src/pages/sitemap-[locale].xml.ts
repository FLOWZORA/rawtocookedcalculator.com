import type { APIRoute, GetStaticPaths } from 'astro';
import { LOCALES } from '../i18n';
import { urlEntries, urlset, XML_HEADERS } from '../utils/sitemap';

// One sitemap per locale, listed in sitemap-index.xml.
export const getStaticPaths = (() =>
  LOCALES.map((locale) => ({ params: { locale } }))) satisfies GetStaticPaths;

export const GET: APIRoute = ({ params }) =>
  new Response(urlset(urlEntries(params.locale)), { headers: XML_HEADERS });
