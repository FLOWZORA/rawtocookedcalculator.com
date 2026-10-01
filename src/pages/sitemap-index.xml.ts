import type { APIRoute } from 'astro';
import { sitemapIndex, XML_HEADERS } from '../utils/sitemap';

// Entry point for search engines: points at one sitemap per locale.
export const GET: APIRoute = () =>
  new Response(sitemapIndex(), { headers: XML_HEADERS });
