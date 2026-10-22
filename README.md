# LivArt Beauty Academy — Official Website Rebuild

> **Kerala's Premier Cosmetology, Bridal Makeup & Hair Styling Academy**  
> Accredited by the Beauty & Wellness Sector Skill Council (B&WSSC) & Ministry of Skill Development and Entrepreneurship (MSDE).  
> **Flagship Campus**: Madukappilly Tower, Pathadipalam, Edappally P.O, Kalamassery, Kochi, Kerala 682024 (Metro Pillar 384).  
> **Admissions Hotline**: [+91 96332 11151](tel:+919633211151) | [connect@livart.co.in](mailto:connect@livart.co.in)  
> **Google Business Profile**: [LivArt Beauty Academy on Google](https://share.google/OCj5l70Grn7Wxu8WR)  
> **Instagram**: [@livart_academy](https://www.instagram.com/livart_academy/)  

---

## 🌟 Overview & Highlights

A high-performance, bilingual (English & Malayalam) JAMstack rebuild of the official **LivArt Beauty Academy** web platform (`https://livart.co.in`), engineered with **Astro 5** and **Tailwind CSS v4**.

- **51 Indexable Static Pages**: Complete course catalogs, diplomas, location landing pages (Kochi, Edappally), student portfolios, campus tour, and institutional pages.
- **Bilingual Architecture (English & Malayalam)**: Reciprocal `hreflang` tags (`en`, `ml`, `x-default`) with instant language switching in header and footer.
- **100% SEO Equity & Legacy URL Preservation**: Zero broken links across 1,320 tested internal anchors. 17 legacy WordPress URLs (including root-level blog slugs and `/courses-beautician-kochi/`) mapped via 301/refresh redirects.
- **Authentic Visuals & Zero AI Placeholders**: 100% genuine studio photographs and Instagram reels stills from `@livart_academy` (1280x720 True HD landscape and curated vertical reels).
- **Interactive Video Modal**: Embedded Instagram Reels player supporting on-site previewing of student work, celebrity visits, and masterclasses.
- **Enterprise Structured Data (JSON-LD)**: Every page includes rich schemas for `EducationalOrganization`, `LocalBusiness`, `BreadcrumbList`, and `Course`.

---

## 📂 Project Structure

```text
livart-rebuild/
├── public/
│   ├── images/
│   │   ├── academy-live/       # 35 True HD (1280x720) studio practicals & masterclasses
│   │   ├── brand/              # Official LivArt red horizontal & original logos, founder portrait
│   │   ├── instagram/          # 48 curated Instagram Reels cover stills & metadata
│   │   ├── offers/             # Seasonal promotional banners & tool kit graphics
│   │   └── transformations/    # Before/after student practical showcases
│   └── robots.txt              # Production crawler directives pointing to sitemap index
├── src/
│   ├── components/             # Reusable UI components (CourseLeadForm, InstagramReelCard, Modal)
│   ├── content/                # Content collections (14 SEO blog articles + location pages)
│   ├── layouts/
│   │   └── Layout.astro        # Master HTML layout, absolute OG/Twitter metadata, JSON-LD, hreflang
│   ├── pages/
│   │   ├── ml/                 # Full Malayalam translated routes (/ml/, /ml/overview/, etc.)
│   │   ├── blog/               # Dynamic blog magazine engine (/blog/[slug].astro)
│   │   ├── academy/            # Programmatic location landing pages (/academy/[location].astro)
│   │   ├── portfolios/         # Student transformation archive & video reels
│   │   ├── take-a-tour/        # Kalamassery flagship atelier virtual tour
│   │   └── [course pages]/     # Individual dedicated course & diploma syllabi
│   └── styles/
│       └── global.css          # Tailwind CSS v4 design tokens & obsidian luxury theme
├── astro.config.mjs            # Astro configuration, sitemap integration & legacy 301 redirects
└── package.json
```

---

## 🛠️ Tech Stack

- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation / SSG)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Typography**: Playfair Display (Serif Headings) & Plus Jakarta Sans (Modern Body)
- **SEO & Sitemaps**: `@astrojs/sitemap` (generates `sitemap-index.xml` and `sitemap-0.xml`)

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>= 22.12.0`
- npm `>= 10.0.0`

### Installation

```bash
git clone https://github.com/tonyjvelloor/livart-academy-website.git
cd livart-academy-website
npm install
```

### Development Server

```bash
npm run dev
# Starts local development server at http://localhost:4321
```

### Production Build

```bash
npm run build
# Compiles 51 static canonical pages + 17 redirect pages into ./dist
```

### Preview Production Build

```bash
npm run preview
# Serves the static ./dist build locally
```

---

## 🔒 SEO & Quality Verification Checklist

- [x] **0 SEO Errors**: Validated across all 51 compiled HTML files.
- [x] **0 Broken Links**: Verified across 1,320 internal links.
- [x] **Single H1 per Page**: Strictly enforced across all layouts.
- [x] **Absolute OG/Twitter Metadata**: Compatible with WhatsApp, Facebook, iMessage, and Twitter previews.
- [x] **Full B&WSSC & MSDE Accreditation**: Displayed transparently with verified curriculum modules.
- [x] **Google Business Profile Linked**: Directly referenced in headers, footers, and schema markup.

---

## 📄 License & Attribution

Copyright © 2026 LivArt Beauty Academy, Kochi, Kerala. All rights reserved.
