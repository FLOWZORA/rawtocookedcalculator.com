# 🥗 Raw to Cooked Calculator

[![Live Demo](https://img.shields.io/badge/Live%20Demo-rawtocookedcalculator.com-0070f3?style=for-the-badge&logo=googlechrome&logoColor=white)](https://rawtocookedcalculator.com)
[![Astro](https://img.shields.io/badge/Astro-5%2B-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Cloudflare Edge](https://img.shields.io/badge/Cloudflare-Workers%20%2F%20Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://workers.cloudflare.com)
[![WCAG AA](https://img.shields.io/badge/Accessibility-WCAG%20AA-00C781?style=for-the-badge)](https://www.w3.org/WAI/standards-guidelines/wcag/)
[![i18n Supported](https://img.shields.io/badge/i18n-6%20Locales-orange?style=for-the-badge)](https://rawtocookedcalculator.com/es/)

> **A high-performance, scientifically validated web application that eliminates macro-tracking error by bi-directionally converting raw and cooked food weights with accurate nutritional calculations.**

---

## 📌 Executive Summary

One of the most persistent issues in fitness and clinical nutrition tracking is the **raw vs. cooked weight discrepancy**:
- **Meat and poultry lose 15–35% of their mass** to moisture and fat during cooking, meaning 150g of cooked chicken breast contains the macronutrients of ~208g of raw chicken.
- **Grains and legumes absorb water, gaining 150–250% mass**, causing cooked rice to weigh ~3x its dry equivalent.
- Most nutritional databases (such as USDA FoodData Central) record macro values based on **raw weight**, whereas users weigh their food **after cooking**. Logging cooked weights against raw benchmarks regularly causes daily errors of 30–50g of protein and hundreds of unaccounted calories.

**Raw to Cooked Calculator** solves this problem by providing instantaneous, bi-directional weight conversions and accurate macronutrient calculations (Calories, Protein, Carbohydrates, Fats) backed by official USDA empirical food science datasets.

---

## ⚡ Highlights & Key Features

- **Bi-Directional Instant Calculation**: Seamlessly converts **Raw → Cooked** and **Cooked → Raw** in real time as the user types.
- **Culinary Method Precision**: Adjusts yield percentages based on preparation technique (e.g., *baked/roasted, grilled, broiled, braised, simmered, pan-fried*).
- **Macro Nutrient Scaling**: Computes true nutritional values derived from raw-weight equivalents (preventing tracking distortions).
- **Multi-Unit Support**: Dynamic conversion between grams (`g`), ounces (`oz`), and pounds (`lb`).
- **Accessible Autocomplete Search**: Keyboard-first combobox (`↑`/`↓`, `Enter`, `Esc`) with ARIA attributes and instant fuzzy filtering.
- **Deep-Linking & Shareable State**: Synchronizes calculator state directly into URL parameters (`?food=chicken&weight=200&unit=g`).
- **Global Internationalization (i18n)**: Fully localized across 6 languages (**English, Spanish, French, German, Portuguese, Italian**), featuring locale-aware decimal separation (commas vs. periods) and dedicated localized routes.
- **Ultra-Lean Performance Architecture**: Zero client-side JavaScript framework bloat. Critical CSS is inlined into `<head>`, and the client script is deferred as a lightweight native ES module.
- **Programmatic SEO (pSEO)**: 150+ pre-rendered static routes with automated per-locale XML sitemaps, Schema.org `FAQPage` JSON-LD schemas, and hreflang crawl-budget optimization.
- **Geist-Inspired Design System**: Minimalist monochrome aesthetics built with Tailwind CSS v4, supporting persistent light/dark themes and verified WCAG AA contrast compliance.

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
   │  (150+ HTML / JSON)   │                       │   (Sub-ms TTFB)       │
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

| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| **Framework** | **Astro 5+** | Eliminates framework runtime overhead. Generates pure HTML/CSS at build time with zero unnecessary client hydration. |
| **Edge Infrastructure** | **Cloudflare Workers** (`@astrojs/cloudflare`) | Delivers sub-millisecond edge latency worldwide with static asset bindings and automated cache headers. |
| **Language** | **TypeScript 5.x** | Guarantees strict type safety across food databases, translation dictionaries, nutritional math, and routing params. |
| **Styling** | **Tailwind CSS v4** + Vite | Uses modern CSS theme variables, `@theme`, and utility-first styling with zero legacy CSS bundle bloat. |
| **Internationalization** | **Custom Static i18n Engine** | Type-safe static localization dictionary supporting URL-prefixed routing (`/[lang]/[food]`) and localized number formatting. |
| **SEO & Structured Data** | **Schema.org JSON-LD** | Generates `FAQPage`, `Person`, and `Organization` metadata for maximum search engine indexation and rich snippets. |

---

## 🔬 Scientific Data & Methodology

Yield and nutritional calculations are not based on informal estimates. Every value is mapped from peer-reviewed, official food science literature:

1. **USDA Table of Cooking Yields for Meat and Poultry (Release 2)**: Primary source for cut-specific animal protein yields under controlled cooking conditions.
2. **USDA Agriculture Handbook No. 102 (1975)**: Empirical yield reference for seafood (salmon, shrimp) and specific poultry cuts.
3. **USDA FoodData Central (FDC)**: Standardized raw and cooked nutrient values for grains, legumes, vegetables, and meats.
4. **Indian Food Composition Tables (IFCT 2017)**: Sourced for specific legumes and soy products not covered in western USDA sets.
5. **FAO / Bognar Weight-Yield Tables**: Reference data for standardized egg and egg-preparation weight yields.

### Mathematical Formulation

#### 1. Forward Conversion (Raw to Cooked)
$$W_{\text{cooked}} = W_{\text{raw}} \times \left(\frac{Y}{100}\right)$$

#### 2. Reverse Conversion (Cooked to Raw)
$$W_{\text{raw}} = \frac{W_{\text{cooked}}}{\left(\frac{Y}{100}\right)}$$

#### 3. True Macronutrient Preservation
Macronutrients are always evaluated against the raw weight equivalent to maintain strict consistency with nutrition labelling standards:
$$\text{Nutrient} = \left(\frac{W_{\text{raw}}}{100}\right) \times \text{Nutrient}_{\text{per 100g raw}}$$

*(Where $W$ = weight in grams, and $Y$ = percentage yield).*

---

## 📁 Repository Structure

```text
rawtocookedcalculator.com/
├── public/                 # Static assets, robots.txt, ads.txt
├── src/
│   ├── components/         # Modular Astro UI components
│   │   ├── Calculator.astro# Client interactive calculator & combobox
│   │   ├── FoodContent.astro # Detailed single-food educational layout
│   │   ├── BaseHead.astro  # SEO, OpenGraph, Canonical & JSON-LD tags
│   │   ├── Nav.astro       # Header navigation with language & theme toggles
│   │   └── Footer.astro    # Footer with secondary navigation & legal
│   ├── food-data.json      # USDA-verified food database & macro values
│   ├── i18n/               # Type-safe localization system
│   │   ├── index.ts        # Localization helpers & decimal formatters
│   │   ├── ui.ts           # UI string dictionaries (en, es, fr, de, pt, it)
│   │   ├── food-names.ts   # Localized food nomenclature
│   │   └── faq.ts          # Localized FAQ questions and structured data
│   ├── layouts/
│   │   └── BaseLayout.astro# Global layout wrapper
│   ├── pages/              # Static page routes & sitemap generators
│   │   ├── index.astro     # Root English homepage
│   │   ├── [food].astro    # Dynamic English single-food landing pages
│   │   ├── [lang]/         # Localized routes (es, fr, de, pt, it)
│   │   ├── methodology.astro # In-depth scientific research & methodology
│   │   └── sitemap-*.ts    # Modular XML sitemap generation
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

### Development

Run the local Astro dev server:

```bash
npm run dev
```

The application will be accessible at `http://localhost:4321`.

### Production Build & Verification

Compile the project into production-ready static assets and Cloudflare Worker endpoints:

```bash
npm run build
```

Preview the production build locally through Cloudflare Wrangler:

```bash
npm run preview
```

---

## 📈 Performance & Web Quality Standards

- **Core Web Vitals**: Designed for 100/100 scores across Performance, Accessibility, Best Practices, and SEO.
- **Zero CLS (Cumulative Layout Shift)**: Pre-allocated form and output slots ensure layout stability during interaction.
- **Inlined Critical CSS**: `inlineStylesheets: 'always'` eliminates render-blocking stylesheet roundtrips.
- **WCAG AA Compliance**: High-contrast typography palette tested across both light (`#fafafa`) and dark (`#0a0a0a`) modes.
- **Safe Crawl Optimization**: Only fully localized pages are exposed via `hreflang` headers, preserving search crawl budget.

---

## 👤 Author

**Vaibhav Tiwari**
- **Website**: [rawtocookedcalculator.com](https://rawtocookedcalculator.com)
- **GitHub**: [@FLOWZORA](https://github.com/FLOWZORA)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
