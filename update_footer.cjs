const fs = require('fs');
const filePath = 'src/layouts/Layout.astro';
let content = fs.readFileSync(filePath, 'utf-8');

const footerCol3 = `						<h3 class="font-label-lg text-on-surface uppercase tracking-widest mb-6">Contact</h3>
						<ul class="space-y-4 font-body-md text-on-surface-variant">
							<li><a href="tel:+919633211151" class="hover:text-primary transition-colors">+91 96332 11151</a></li>
							<li>Madukappilly Tower, Pathadipalam, Edappally P.O, Kalamassery, Kochi, Kerala 682024</li>
						</ul>`;

const newFooterCol3 = `						<h3 class="font-label-lg text-on-surface uppercase tracking-widest mb-6">Contact</h3>
						<ul class="space-y-4 font-body-md text-on-surface-variant">
							<li><a href="tel:+919633211151" class="hover:text-primary transition-colors">+91 96332 11151</a></li>
							<li>Madukappilly Tower, Pathadipalam, Edappally P.O, Kalamassery, Kochi, Kerala 682024</li>
						</ul>
						<h3 class="font-label-lg text-on-surface uppercase tracking-widest mt-8 mb-4">Sister Brand</h3>
						<ul class="space-y-2 font-body-md text-on-surface-variant">
							<li><a href="#" class="hover:text-primary transition-colors flex items-center gap-2"><span class="material-symbols-outlined text-sm">spa</span> Livart Salon</a></li>
						</ul>`;

content = content.replace(footerCol3, newFooterCol3);
fs.writeFileSync(filePath, content);
console.log('Footer updated with Livart Salon');
