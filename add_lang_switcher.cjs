const fs = require('fs');
const filePath = 'src/layouts/Layout.astro';
let content = fs.readFileSync(filePath, 'utf-8');

// Find the header div that contains the "Apply Now" button and prepend a language switcher
const applyNowBtnHtml = `<a class="inline-flex items-center justify-center px-space-md py-2 rounded-full bg-on-surface text-on-primary-fixed font-label-md text-label-md tracking-wider uppercase hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.08)]" href="/contact-us">Apply Now</a>`;

const newHeaderHtml = `
					<!-- Language Switcher -->
					<div class="flex items-center gap-2 mr-4 border border-outline-variant/30 rounded-full p-1 bg-surface-container-low">
						<a href="/" class="px-3 py-1 rounded-full text-xs font-bold font-label-sm uppercase tracking-wider \${Astro.url.pathname.startsWith('/ml') ? 'text-outline hover:text-on-surface' : 'bg-primary text-on-primary'}">EN</a>
						<a href="/ml/" class="px-3 py-1 rounded-full text-xs font-bold font-label-sm uppercase tracking-wider \${Astro.url.pathname.startsWith('/ml') ? 'bg-primary text-on-primary' : 'text-outline hover:text-on-surface'}">ML</a>
					</div>
					${applyNowBtnHtml}`;

content = content.replace(applyNowBtnHtml, newHeaderHtml);
fs.writeFileSync(filePath, content);
console.log('Language switcher added to header');
