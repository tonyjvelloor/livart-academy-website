const fs = require('fs');
const filePath = 'src/layouts/Layout.astro';
let content = fs.readFileSync(filePath, 'utf-8');

// Find the broken template literals and fix them for Astro JSX syntax
const brokenEn = 'class="px-3 py-1 rounded-full text-xs font-bold font-label-sm uppercase tracking-wider ${Astro.url.pathname.startsWith(\'/ml\') ? \'text-outline hover:text-on-surface\' : \'bg-primary text-on-primary\'}"';
const fixedEn = 'class={`px-3 py-1 rounded-full text-xs font-bold font-label-sm uppercase tracking-wider ${Astro.url.pathname.startsWith("/ml") ? "text-outline hover:text-on-surface" : "bg-primary text-on-primary"}`}';

const brokenMl = 'class="px-3 py-1 rounded-full text-xs font-bold font-label-sm uppercase tracking-wider ${Astro.url.pathname.startsWith(\'/ml\') ? \'bg-primary text-on-primary\' : \'text-outline hover:text-on-surface\'}"';
const fixedMl = 'class={`px-3 py-1 rounded-full text-xs font-bold font-label-sm uppercase tracking-wider ${Astro.url.pathname.startsWith("/ml") ? "bg-primary text-on-primary" : "text-outline hover:text-on-surface"}`}';

content = content.replace(brokenEn, fixedEn);
content = content.replace(brokenMl, fixedMl);

fs.writeFileSync(filePath, content);
console.log('Fixed Astro JSX syntax');
