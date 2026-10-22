const fs = require('fs');

// 1. Add Livart Salon to footer
let layout = fs.readFileSync('src/layouts/Layout.astro', 'utf-8');
const oldFooterSection = `<li><a class="text-on-surface-variant hover:text-primary transition-colors cursor-pointer" href="/contact-us/">Contact Us</a></li>
						</ul>
					</div>
				</div>`;
const newFooterSection = `<li><a class="text-on-surface-variant hover:text-primary transition-colors cursor-pointer" href="/contact-us/">Contact Us</a></li>
						</ul>
						<div class="font-label-md text-label-md tracking-widest uppercase text-on-surface mt-space-md mb-space-sm">Sister Brand</div>
						<ul class="space-y-space-sm font-body-sm text-body-sm">
							<li><a class="text-on-surface-variant hover:text-primary transition-colors cursor-pointer flex items-center gap-2" href="https://www.livartsalon.com/" target="_blank"><span class="material-symbols-outlined text-sm">spa</span> Livart Salon</a></li>
						</ul>
					</div>
				</div>`;
layout = layout.replace(oldFooterSection, newFooterSection);
fs.writeFileSync('src/layouts/Layout.astro', layout);

// 2. Remove Tattoo from index.astro
let index = fs.readFileSync('src/pages/index.astro', 'utf-8');
index = index.replace('including Short Term courses and Tattoo Artistry', 'including Short Term masterclasses');
fs.writeFileSync('src/pages/index.astro', index);

// 3. Remove Tattoo from contact-us select dropdown
let contact = fs.readFileSync('src/pages/contact-us/index.astro', 'utf-8');
contact = contact.replace('<option value="tattoo">Diploma in Tattoo</option>', '');
fs.writeFileSync('src/pages/contact-us/index.astro', contact);

// 4. Remove Tattoo from overview course cards (using regex to remove the whole card if it exists)
// Wait, I should just read overview and check how it's structured.
