const fs = require('fs');

let layout = fs.readFileSync('src/layouts/Layout.astro', 'utf-8');

const breadcrumbLogic = `
// Breadcrumb Schema Logic
const pathParts = Astro.url.pathname.split('/').filter(p => p !== '');
const breadcrumbItemList = [
  {
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": Astro.site ? Astro.site.toString() : "https://livart.co.in"
  }
];

let currentPath = '';
pathParts.forEach((part, index) => {
  currentPath += '/' + part;
  // Format part for display (e.g. "make-up-course" -> "Make Up Course")
  const name = part.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  breadcrumbItemList.push({
    "@type": "ListItem",
    "position": index + 2,
    "name": name,
    "item": new URL(currentPath + '/', Astro.site || 'https://livart.co.in').toString()
  });
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbItemList
};
`;

const schemaInsertion = `
		<!-- Schema Markup -->
		<script type="application/ld+json" set:html={JSON.stringify(finalSchema)} />
		<script type="application/ld+json" set:html={JSON.stringify(breadcrumbSchema)} />
`;

layout = layout.replace(/const defaultSchema = \{/, breadcrumbLogic + '\nconst defaultSchema = {');
layout = layout.replace(/<!-- Schema Markup -->\s*<script type="application\/ld\+json" set:html=\{JSON.stringify\(finalSchema\)\} \/>/, schemaInsertion);

fs.writeFileSync('src/layouts/Layout.astro', layout);
console.log('Injected dynamic BreadcrumbList Schema');
