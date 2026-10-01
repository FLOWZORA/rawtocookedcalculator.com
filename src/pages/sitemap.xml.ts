import type { APIRoute } from 'astro';
import { urlEntries, urlset, XML_HEADERS } from '../utils/sitemap';

// Full URL set across every locale. The per-locale split lives in
// sitemap-[locale].xml, tied together by sitemap-index.xml.
export const GET: APIRoute = () =>
  new Response(urlset(urlEntries()), { headers: XML_HEADERS });
