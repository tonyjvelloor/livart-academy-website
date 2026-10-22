const fs = require('fs');
const path = require('path');

const layout = `---
import Layout from '../../layouts/Layout.astro';
---

<Layout title="{TITLE} | Livart Beauty Academy">
  <section class="py-space-xl px-margin-sm lg:px-margin-lg max-w-[1000px] mx-auto mt-8">
    <div class="mb-space-xl text-center">
      <span class="font-label-sm text-label-sm uppercase tracking-[0.2em] text-primary font-semibold block mb-4">{SUBTITLE}</span>
      <h1 class="font-display-xl text-display-xl text-on-surface tracking-tight mb-space-md">{HEADING}</h1>
      <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">{DESC}</p>
    </div>
    <div class="mt-space-xl">
      {CONTENT}
    </div>
  </section>
</Layout>`;

const pages = [
  {
    path: 'about-us-makeup-artist',
    title: 'About Us',
    subtitle: 'Our Story',
    heading: 'The Livart Philosophy.',
    desc: 'Empowering elite beauty artists through sovereign technical discipline and high-fashion editorial rigor.',
    content: `<div class="grid grid-cols-1 md:grid-cols-2 gap-gutter-lg items-center">
        <div>
            <h2 class="font-headline-lg text-on-surface mb-4">A legacy of clinical beauty.</h2>
            <p class="font-body-md text-on-surface-variant mb-4">Livart Beauty Academy was born from a desire to elevate the standard of beauty education in Kerala. We believe in bridging the gap between basic apprenticeship and true, accredited artistry.</p>
            <p class="font-body-md text-on-surface-variant">Our teaching faculty is split into dedicated Skin Faculty and Make-up Faculty, ensuring you learn from masters of their specific crafts.</p>
        </div>
        <div class="bg-surface-container rounded-xl h-80 overflow-hidden shadow-xl">
            <img class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuINBnPLEHfH_meDW9Uh5wNMlmN4U9f53NIIkpUcEvO3ZfX16yNXNJmp9tZbeHXPh7JhaPapgom0dDpwyx4Gnu2GEXqMKBIx4uo6CKh_qbQg_Er3oGDu0cj3o1ErfQrKV4rx3E28sl7lyINHq8zqPQwE1xktRoH1V8-srWeBe4LoFlvaiiPGELWD8M9lYZ71ajdPgHxSWn5Ufcj6eZkiAcB64CtlK-1hCBKwB2pJR_s0KXJSXoCAmT" alt="About Livart" />
        </div>
    </div>`
  },
  {
    path: 'founder-makeup-academy',
    title: 'Founder Profile',
    subtitle: 'Stephy Sebastian',
    heading: 'Vision Meets Discipline.',
    desc: 'From a 5-year nursing career in Kuttanadu to redefining Kerala\'s cosmetology landscape.',
    content: `<div class="bg-surface-container-low p-space-lg rounded-xl shadow-lg border border-outline-variant/10">
        <blockquote class="font-headline-md italic text-primary-fixed my-space-md border-l-2 border-primary pl-space-md mb-6">
            “If your mind can think it, you can achieve it.”
        </blockquote>
        <p class="font-body-md text-on-surface-variant mb-4">Raised in Kuttanadu in Alappuzha, Stephy served as a dedicated registered nurse for 5 years. Inspired by her mother helping brides affordably, she realized her true calling lay in aesthetics.</p>
        <p class="font-body-md text-on-surface-variant mb-4">Refusing to settle for standard conventions, she bridged clinical rigor, skin biology, and haute cosmetology to build Livart.</p>
        <div class="mt-8 pt-6 border-t border-surface-container-highest">
             <div class="font-label-md uppercase tracking-wider text-outline mb-2">Guided by</div>
             <div class="font-headline-sm text-on-surface">Stephy Sebastian & Joseph Nipun</div>
        </div>
    </div>`
  },
  {
    path: 'take-a-tour',
    title: 'Campus Tour',
    subtitle: 'Kalamassery Flagship Atelier',
    heading: 'Step Inside Livart.',
    desc: 'Explore our state-of-the-art facilities designed for immersive, practical learning.',
    content: `<div class="grid grid-cols-1 md:grid-cols-2 gap-space-sm">
        <div class="h-64 bg-surface-container rounded-xl overflow-hidden"><img class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3D4fa4uQB7h35ETgrMbJp_8rv4jiRCU7m8P3BghOOmZLlPDq4j9eaCkOD2gm9Arfxk5XwXpYsxPL2-i9OK60GxenQQfXLpu5gmYckvH5lXCVBN1aCFIs5KrvyaKUSQtiPPM7Bfd7wE0CWafdp1bs5pfzlXv9pwsWV6KHEMkD5ELjWZd6UzOHQ_642MzlZL4s0uYsx7lLcVXCTa8BrW8trsIe3b4Ng_MsYNfx02uJfb88bwOUtErg2" alt="Campus exterior" /></div>
        <div class="h-64 bg-surface-container rounded-xl overflow-hidden"><img class="w-full h-full object-cover filter contrast-125" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTnxbU33BTV1o4CxZ_AQB6XBOX6oY8_5FKe-J08fWlSWzxH9yBKR8U6BEv7OxdpPUWRrDNhiQs7mrNkq6mpvjxMuvTTbpt-YT80HyKBx1eFiPK2C78mNwJExsulsrQf77M-cLwxsA6kNhCVxJnLH9nueiqUKrzxL-sKRXMVJu55i7yQWlZPGxAwrklAlBBLasPv8s5ClgrAOFc08KdYmimn0Q7KgoNfolSRykicdBrXhFK-ayyGReO" alt="Studio" /></div>
    </div>
    <div class="mt-space-lg text-center">
        <a href="/contact-us" class="px-8 py-4 bg-primary text-on-primary font-label-md uppercase tracking-widest font-bold shadow-xl hover:bg-primary-fixed transition-all rounded">Schedule a Visit</a>
    </div>`
  },
  {
    path: 'contact-us',
    title: 'Contact Us',
    subtitle: 'Admissions & Inquiries',
    heading: 'Get in Touch.',
    desc: 'Reach out to our admissions desk or visit our campus in Kalamassery.',
    content: `<div class="grid grid-cols-1 md:grid-cols-2 gap-gutter-lg">
        <div>
            <h2 class="font-headline-md text-on-surface mb-6">Our Location</h2>
            <div class="space-y-4 font-body-md text-on-surface-variant">
                <div class="flex items-start gap-3">
                    <span class="material-symbols-outlined text-secondary mt-1">location_on</span>
                    <div>Madukappilly Tower, Pathadipalam, Edappally P.O, Kalamassery, Kochi, Kerala 682024</div>
                </div>
                <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-primary">call</span>
                    <div>+91 9633211151</div>
                </div>
                <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-primary-fixed">mail</span>
                    <div>connect@livart.co.in</div>
                </div>
                <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-outline">schedule</span>
                    <div>Monday–Friday 10 AM–5 PM<br/>Sunday closed</div>
                </div>
            </div>
            <div class="mt-8 flex gap-4">
                <a href="https://www.instagram.com/livart_academy/" target="_blank" class="p-3 bg-surface-container-high rounded-full hover:bg-primary hover:text-on-primary transition-colors text-on-surface"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
                <a href="https://www.facebook.com/livart.academy/" target="_blank" class="p-3 bg-surface-container-high rounded-full hover:bg-primary hover:text-on-primary transition-colors text-on-surface"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
            </div>
        </div>
        <div class="bg-surface-container-high/70 backdrop-blur-xl p-space-lg rounded-xl shadow-xl">
						<form class="space-y-space-md">
							<div>
								<label class="block font-label-sm uppercase tracking-wider text-outline mb-2">Candidate Full Name</label>
								<input class="w-full px-4 py-3 bg-surface-container-low text-on-surface font-body-md placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary transition-all rounded" required type="text"/>
							</div>
							<div>
								<label class="block font-label-sm uppercase tracking-wider text-outline mb-2">WhatsApp Contact Number</label>
								<input class="w-full px-4 py-3 bg-surface-container-low text-on-surface font-body-md placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary transition-all rounded" required type="tel"/>
							</div>
							<div>
								<label class="block font-label-sm uppercase tracking-wider text-outline mb-2">Course Interest</label>
								<select class="w-full px-4 py-3 bg-surface-container-low text-on-surface font-body-md focus:outline-none focus:ring-1 focus:ring-primary transition-all rounded">
									<option>Certification in Cosmetology</option>
									<option>Diploma in Make-up</option>
									<option>Diploma in Hair</option>
									<option>Diploma in Skin</option>
									<option>Diploma in Tattoo</option>
								</select>
							</div>
							<button class="w-full py-4 bg-primary text-on-primary font-label-md uppercase tracking-widest font-bold shadow-xl hover:bg-primary-fixed transition-colors mt-space-md rounded" type="submit">
								Request Call Back
							</button>
						</form>
					</div>
    </div>`
  }
];

pages.forEach(p => {
  let content = layout;
  content = content.replace('{TITLE}', p.title);
  content = content.replace('{SUBTITLE}', p.subtitle);
  content = content.replace('{HEADING}', p.heading);
  content = content.replace('{DESC}', p.desc);
  content = content.replace('{CONTENT}', p.content);
  
  const dirPath = path.join('src/pages', p.path);
  fs.mkdirSync(dirPath, { recursive: true });
  fs.writeFileSync(path.join(dirPath, 'index.astro'), content);
});
console.log('Pages generated.');
