// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://rawtocookedcalculator.com',

  build: {
    // Inline the ~22 KB global stylesheet into each page's <head> so the first
    // paint doesn't wait on a separate render-blocking CSS request. The site is
    // fully static and the CSS is the same on every page, so the gzipped cost
    // per response is small.
    inlineStylesheets: 'always',
  },

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});