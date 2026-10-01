# 🥗 Raw to Cooked Food Calculator

[![Live Demo](https://img.shields.io/badge/Live%20Demo-rawtocookedcalculator.com-0070f3?style=for-the-badge&logo=googlechrome&logoColor=white)](https://rawtocookedcalculator.com)
[![Astro](https://img.shields.io/badge/Astro-v7.x-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Cloudflare Edge](https://img.shields.io/badge/Cloudflare-Workers%20%2F%20Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://workers.cloudflare.com)
[![Core Web Vitals](https://img.shields.io/badge/Lighthouse-100%2F100-00C781?style=for-the-badge&logo=lighthouse&logoColor=white)](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Frawtocookedcalculator.com)
[![Accessibility](https://img.shields.io/badge/Accessibility-WCAG%20AA-00C781?style=for-the-badge)](https://www.w3.org/WAI/standards-guidelines/wcag/)
[![i18n Supported](https://img.shields.io/badge/i18n-6%20Locales-orange?style=for-the-badge)](https://rawtocookedcalculator.com/es/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

> **A high-performance, scientifically validated web application that eliminates macro-tracking error by bi-directionally converting raw and cooked food weights with empirical cooking method yields and true macronutrient calculations.**

---

## 📌 Executive Summary

One of the most persistent failure points in fitness, bodybuilding, and clinical nutrition tracking is the **raw vs. cooked mass discrepancy**:
- **Meat and poultry shed 15–35% of their mass** to moisture evaporation and fat rendering during cooking. For example, 150g of cooked chicken breast contains the macronutrients of ~208g of raw chicken.
- **Grains, legumes, and starches absorb water, gaining 150–250% mass**, causing cooked white rice to weigh ~3x its dry equivalent.
- Most nutritional databases (such as USDA FoodData Central) record macro values strictly on a **raw-weight basis**, while individuals typically weigh their portions **after cooking**. Logging cooked weights against raw benchmarks regularly creates systematic daily tracking errors of **30–50g of protein and hundreds of unaccounted calories**.

**Raw to Cooked Calculator** resolves this distortion by providing instantaneous, bi-directional weight conversions and accurate macronutrient calculations (Calories, Protein, Carbohydrates, Fats) backed by official USDA empirical food science datasets.

---

## ⚡ Highlights & Key Features

- **Bi-Directional Real-Time Calculations**: Seamlessly converts **Raw → Cooked** and **Cooked → Raw** with zero perceptible latency as the user inputs data.
- **Culinary Method Precision**: Dynamically computes yields based on preparation technique (e.g., *baked/roasted, grilled, broiled, braised, simmered, pan-fried*) rather than naive static averages.
- **True Macronutrient Preservation**: Computes exact nutritional values derived from unadulterated raw-weight equivalents to ensure compliance with clinical dietary standards.
- **Multi-Unit Precision System**: Native support for grams (`g`), ounces (`oz`), and pounds (`lbs`) with floating-point rounding calibrated for culinary scales.
- **Accessible Autocomplete Combobox**: ARIA 1.2 compliant combobox with full keyboard navigation (`ArrowUp`/`ArrowDown`, `Enter`, `Escape`), focus management, and fuzzy substring search.
- **Deep-Linking & Shareable State**: Dynamically synchronizes calculator state with URL parameters (`?food=chicken&weight=200&unit=g&direction=raw-to-cooked`), enabling instant sharing and bookmarking.
- **Global Internationalization (i18n)**: Fully localized across 6 languages (**English, Spanish, French, German, Portuguese, Italian**), featuring locale-aware decimal separation (commas vs. periods) and dedicated localized routes.
- **Programmatic SEO (pSEO)**: 153 pre-rendered static routes with automated per-locale XML sitemaps, reciprocal `hreflang` tags, and Schema.org `FAQPage` / `WebSite` JSON-LD structured schemas.
- **Zero-Hydration Performance**: Built with Astro SSG and deferred vanilla TypeScript modules—eliminating client-side framework runtime overhead (zero React/Vue bundle tax).
- **Geist-Inspired Design System**: Minimalist monochrome aesthetics built with Tailwind CSS v4, supporting persistent light/dark themes and verified WCAG 2.1 AA contrast compliance.

---

## 🛠️ Architecture & Tech Stack

```
                          ┌────────────────────────┐
                          │   Cloudflare Workers   │
                          │   (Global Edge CDN)    │
                          └───────────┬────────────┘
                                      │
              ┌───────────────────────┴───────────────────────┐
              ▼                                               ▼
   ┌───────────────────────┐                       ┌───────────────────────┐
   │  SSG Static Assets    │                       │   Edge Routing        │
   │  (153 HTML / XML)     │                       │   (Sub-ms TTFB)       │
   └──────────┬────────────┘                       └───────────────────────┘
              │
              ▼
   ┌────────────────────────────────────────────────────────┐
   │ Client Runtime (Zero-Framework Vanilla TS Module)      │
   │ ├── Inlined Critical CSS (Tailwind CSS v4)             │
   │ ├── Pre-injected Immutable JSON Dataset                │
   │ └── Fully Reactive State & Keyboard-Navigable UI       │
   └────────────────────────────────────────────────────────┘
```

| Layer | Technology | Engineering Rationale |
| :--- | :--- | :--- |
| **Framework** | **Astro 7+** | Eliminates framework runtime overhead. Generates pure static HTML/CSS at build time with zero unnecessary client hydration. |
| **Edge Infrastructure** | **Cloudflare Workers** (`@astrojs/cloudflare`) | Delivers sub-millisecond edge latency worldwide with static asset bindings and automated cache-control headers. |
| **Language** | **TypeScript 5.x** | Guarantees strict type safety across food databases, translation dictionaries, nutritional math, and routing params. |
| **Styling** | **Tailwind CSS v4** + Vite | Uses modern CSS theme variables, `@theme`, and utility-first styling with zero legacy CSS bundle bloat. |
| **Internationalization** | **Custom Static i18n Engine** | Type-safe static localization dictionary supporting URL-prefixed routing (`/[lang]/[food]`) and localized number formatting. |
| **SEO & Structured Data** | **Schema.org JSON-LD** | Generates `FAQPage`, `Person`, and `Organization` metadata for maximum search engine indexation and rich snippets. |

---

## 🔬 Scientific Data & Methodology

Yield and nutritional calculations are derived directly from peer-reviewed, official food science databases and agricultural handbooks:

1. **USDA Table of Cooking Yields for Meat and Poultry (Release 2)**: Primary source for cut-specific animal protein yields under controlled cooking conditions.
2. **USDA Agriculture Handbook No. 102 (1975)**: Empirical yield reference for seafood (salmon, shrimp) and specific poultry cuts.
3. **USDA FoodData Central (FDC)**: Standardized raw and cooked nutrient values for grains, legumes, vegetables, and meats.
4. **Indian Food Composition Tables (IFCT 2017)**: Sourced for specific legumes and soy products not covered in western USDA sets.
5. **FAO / Bognar Weight-Yield Tables**: Reference data for standardized egg and egg-preparation weight yields.

### Mathematical Formulation

#### 1. Forward Conversion (Raw to Cooked)
Computes the expected cooked yield weight based on the preparation method's empirical yield factor $Y$:
$$W_{\text{cooked}} = W_{\text{raw}} \times \left(\frac{Y}{100}\right)$$

#### 2. Reverse Conversion (Cooked to Raw)
Reconstitutes the raw food equivalent required to yield a measured cooked portion:
$$W_{\text{raw}} = \frac{W_{\text{cooked}}}{\left(\frac{Y}{100}\right)}$$

#### 3. True Macronutrient Preservation
Macronutrients are always evaluated against the raw-weight equivalent to preserve strict consistency with nutritional labeling standards:
$$\text{Nutrient} = \left(\frac{W_{\text{raw}}}{100}\right) \times \text{Nutrient}_{\text{per 100g raw}}$$

#### 4. Multi-Unit Conversion Factors
Calculations operate internally in grams ($g$) and map to imperial units using high-precision constants:
$$\text{Grams} = W_{\text{oz}} \times 28.3495 \quad \mid \quad \text{Grams} = W_{\text{lbs}} \times 453.592$$

---

## 📁 Repository Structure

```text
rawtocookedcalculator.com/
├── public/                 # Static assets, robots.txt, ads.txt, favicon
│   ├── _redirects          # Cloudflare Edge redirect rules
│   └── robots.txt          # Crawler instructions & sitemap indices
├── src/
│   ├── components/         # Modular Astro UI components
│   │   ├── Calculator.astro# Interactive calculator, combobox & dynamic UI
│   │   ├── FoodContent.astro # Detailed single-food educational layout
│   │   ├── BaseHead.astro  # SEO, OpenGraph, Canonical & JSON-LD tags
│   │   ├── Nav.astro       # Header navigation with language & theme toggles
│   │   ├── Footer.astro    # Footer with secondary navigation & legal links
│   │   └── ...             # Legal, about, contact, and methodology layouts
│   ├── food-data.json      # USDA-verified food database & macro values (29 foods)
│   ├── i18n/               # Type-safe static localization system
│   │   ├── index.ts        # Localization helpers & decimal formatters
│   │   ├── ui.ts           # UI string dictionaries (en, es, fr, de, pt, it)
│   │   ├── food-names.ts   # Localized food nomenclature
│   │   ├── food-content/   # Per-language deep food guides (de, es, fr, it, pt)
│   │   ├── faq.ts          # Localized FAQ questions and structured data
│   │   └── legal.ts        # Comprehensive legal & privacy localization
│   ├── layouts/
│   │   └── BaseLayout.astro# Global layout wrapper
│   ├── pages/              # Static page routes & sitemap generators (153 total)
│   │   ├── index.astro     # Root English homepage
│   │   ├── [food].astro    # Dynamic English single-food landing pages (20 foods)
│   │   ├── [lang]/         # Localized routes (es, fr, de, pt, it)
│   │   ├── methodology.astro # In-depth scientific research & methodology
│   │   └── sitemap-*.ts    # Modular XML sitemap generation per locale
│   ├── styles/
│   │   └── global.css      # Tailwind v4 theme variables & dark mode rules
│   └── utils/
│       ├── foods.ts        # Food query utilities & calculation formulas
│       └── sitemap.ts      # Sitemap compilation helper
├── astro.config.mjs        # Astro configuration & Cloudflare adapter setup
├── wrangler.jsonc          # Cloudflare Workers configuration
└── package.json            # Project manifest & build scripts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `>= 22.12.0`
- **npm**: `>= 10.0.0`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/FLOWZORA/rawtocookedcalculator.com.git
   cd rawtocookedcalculator.com
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Development Server

Start the local Astro development server:

```bash
npm run dev
```

The application will be accessible at `http://localhost:4321`.

### Production Build & Verification

Compile the project into production-ready static assets (153 static routes):

```bash
npm run build
```

Preview the production build locally through Cloudflare Wrangler:

```bash
npm run preview
```

### Deployment

Deploy directly to Cloudflare Workers / Pages:

```bash
npm run deploy
```

---

## 📈 Performance & Web Quality Standards

- **Core Web Vitals**: Engineered for 100/100 scores across Performance, Accessibility, Best Practices, and SEO.
- **Inlined Critical CSS**: `build.inlineStylesheets: 'always'` eliminates render-blocking stylesheet roundtrips.
- **Zero CLS (Cumulative Layout Shift)**: Pre-allocated form and output slots ensure layout stability during interaction.
- **WCAG 2.1 AA Compliance**: High-contrast typography palette tested across both light (`#fafafa`) and dark (`#0a0a0a`) modes.
- **Safe Crawl Optimization**: Only fully localized pages are exposed via `hreflang` headers, preserving search crawl budget.
- **Zero Framework Runtime Overhead**: No client hydration penalty; interactive elements run on lightweight native ES modules.

---

## 👤 Author

**Vaibhav Tiwari**
- **Website**: [rawtocookedcalculator.com](https://rawtocookedcalculator.com)
- **GitHub**: [@FLOWZORA](https://github.com/FLOWZORA)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
