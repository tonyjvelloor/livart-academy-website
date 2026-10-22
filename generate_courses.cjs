const fs = require('fs');
const path = require('path');

const baseTemplate = fs.readFileSync('src/pages/make-up-course/index.astro', 'utf-8');

const courses = [
  {
    dir: 'certification-course-in-cosmetology',
    title: 'Certification Course in Cosmetology | Livart Beauty Academy',
    h1: 'Certification Course in <span class="italic text-primary">Cosmetology.</span>',
    badge: 'Comprehensive Certification',
    desc: 'The ultimate master program. A comprehensive curriculum covering hair, skin, and makeup designed to turn beginners into complete salon professionals and independent business owners.',
    duration: '6 Months',
    format: 'Extensive Hands-on',
    level: 'Beginner to Advanced',
    heroImg: 'https://livart.co.in/wp-content/uploads/2022/01/0X2A0020-scaled.jpg',
    modules: [
      { num: '01', title: 'Hair Science & Chemical Treatments', desc: 'Understanding the trichology of hair. Master rebonding, keratin, coloring, and structural cutting techniques.' },
      { num: '02', title: 'Advanced Skin Diagnostics', desc: 'Clinical approach to skin care. Facials, galvanic treatments, peeling, and condition-specific therapies.' },
      { num: '03', title: 'Professional Artistry & Bridal', desc: 'From basic day looks to heavy bridal and HD camera-ready makeup execution.' },
      { num: '04', title: 'Salon Management & Operations', desc: 'Learn the business side of beauty. Client retention, hygiene standards, and operational workflows.' }
    ],
    schemaDesc: 'A 6-month comprehensive cosmetology course covering hair, skin, makeup, and salon management.'
  },
  {
    dir: 'hair-styling-course',
    title: 'Diploma in Hair Styling | Livart Beauty Academy',
    h1: 'Diploma in <span class="italic text-primary">Hair Styling.</span>',
    badge: 'Specialized Diploma',
    desc: 'Master the architecture of hair. Intensive training in precision cutting, complex chemical treatments, and advanced color theory for aspiring top-tier stylists.',
    duration: '3 Months',
    format: '100% Hands-on',
    level: 'Beginner to Pro',
    heroImg: 'https://livart.co.in/wp-content/uploads/2022/01/0X2A0035-scaled.jpg',
    modules: [
      { num: '01', title: 'Trichology & Scalp Health', desc: 'The foundation of healthy hair. Learn to diagnose scalp conditions and prescribe correct treatments.' },
      { num: '02', title: 'Precision Cutting Geometry', desc: 'Mastering angles, elevation, and tension for classic bobs, layers, and modern textured cuts.' },
      { num: '03', title: 'Advanced Color Theory', desc: 'Formulating the perfect shade. Balayage, highlights, global color, and color correction.' },
      { num: '04', title: 'Chemical Alteration', desc: 'Safe execution of straightening, rebonding, keratin, and perm treatments.' }
    ],
    schemaDesc: 'A 3-month intensive hair styling diploma covering precision cutting, coloring, and chemical treatments.'
  },
  {
    dir: 'skin-care-course',
    title: 'Diploma in Skin Care | Livart Beauty Academy',
    h1: 'Diploma in <span class="italic text-primary">Skin Care.</span>',
    badge: 'Specialized Diploma',
    desc: 'A clinical and aesthetic approach to skin health. Learn advanced facial therapies, electrical skin treatments, and dermatological safety protocols.',
    duration: '2 Months',
    format: 'Clinical Practice',
    level: 'Beginner to Pro',
    heroImg: 'https://livart.co.in/wp-content/uploads/2021/10/portrait-of-sexy-blonde-woman-with-a-beautiful-face-1-1-1-1024x1024.jpg',
    modules: [
      { num: '01', title: 'Anatomy & Dermatology Basics', desc: 'Understanding the layers of the skin, pH balance, and identifying common skin disorders.' },
      { num: '02', title: 'Deep Cleansing Protocols', desc: 'Mastering manual extractions, steaming, and multi-step European facial techniques.' },
      { num: '03', title: 'Electro-Therapy', desc: 'Using high-frequency, galvanic, and ultrasonic machines for advanced skin rejuvenation.' },
      { num: '04', title: 'Chemical Peels & Exfoliation', desc: 'Safe application of AHA/BHA peels, microdermabrasion, and post-care recovery.' }
    ],
    schemaDesc: 'A 2-month specialized skin care diploma focusing on clinical facials, electro-therapy, and skin health.'
  },
  {
    dir: 'bridal-makeup-course',
    title: 'Bridal Makeup Course | Livart Beauty Academy',
    h1: 'Advanced <span class="italic text-primary">Bridal Artistry.</span>',
    badge: 'Masterclass Series',
    desc: 'The most lucrative skill in the Indian beauty industry. A hyper-focused curriculum dedicated entirely to flawless, long-lasting bridal looks across cultures.',
    duration: '1 Month',
    format: '100% Hands-on',
    level: 'Intermediate to Pro',
    heroImg: 'https://livart.co.in/wp-content/uploads/2021/11/livart-lor-website-1024x476.png',
    modules: [
      { num: '01', title: 'The Bridal Consultation', desc: 'How to conduct a trial, assess skin type, and lock in the bride’s vision.' },
      { num: '02', title: 'Long-Wear Waterproof Base', desc: 'Techniques for sweat-proof, tear-proof foundations that last 16+ hours in heavy lighting.' },
      { num: '03', title: 'Cultural Variations', desc: 'Specific looks for Hindu, Christian, and Muslim brides, including jewelry setting.' },
      { num: '04', title: 'Saree Draping Mastery', desc: 'Advanced pinning and pleating techniques for flawless, secure traditional draping.' }
    ],
    schemaDesc: 'An advanced 1-month bridal makeup course covering long-wear techniques and multi-cultural bridal styling.'
  }
];

courses.forEach(c => {
  let newContent = baseTemplate;
  
  // Replace Title & H1
  newContent = newContent.replace(/<Layout title="[^"]+">/, `<Layout title="${c.title}">`);
  newContent = newContent.replace(/<h1[^>]*>.*?<\/h1>/s, `<h1 class="font-display-lg text-display-lg lg:text-[64px] lg:leading-[72px] text-on-surface tracking-tight mb-6">${c.h1}</h1>`);
  
  // Replace Badge
  newContent = newContent.replace(/<span class="font-label-sm uppercase tracking-widest text-primary">.*?<\/span>/, `<span class="font-label-sm uppercase tracking-widest text-primary">${c.badge}</span>`);
  
  // Replace Desc
  newContent = newContent.replace(/<p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed mb-8">.*?<\/p>/s, `<p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed mb-8">\n          ${c.desc}\n        </p>`);
  
  // Replace Data Strip
  newContent = newContent.replace(/<strong class="font-title-md text-on-surface">8 Weeks<\/strong>/, `<strong class="font-title-md text-on-surface">${c.duration}</strong>`);
  newContent = newContent.replace(/<strong class="font-title-md text-on-surface">100% Hands-on<\/strong>/, `<strong class="font-title-md text-on-surface">${c.format}</strong>`);
  newContent = newContent.replace(/<strong class="font-title-md text-on-surface">Beginner to Pro<\/strong>/, `<strong class="font-title-md text-on-surface">${c.level}</strong>`);
  
  // Replace Hero Image
  // Note: make-up-course uses a specific image URL in the hero, we need to replace it.
  const makeUpHeroImg = 'https://livart.co.in/wp-content/uploads/2021/11/livart-lor-website-1024x476.png'; // Need to use regex to replace first img
  newContent = newContent.replace(/<img src="[^"]+" class="w-full h-full object-cover" alt="Student practicing makeup artistry" \/>/, `<img src="${c.heroImg}" class="w-full h-full object-cover" alt="${c.title.split('|')[0].trim()}" />`);

  // Replace Modules
  const modRegex = /<!-- Module \d -->.*?<\/ul>\s*<\/div>/gs;
  const mods = [...newContent.matchAll(modRegex)];
  
  if(mods.length === 4) {
    for(let i=0; i<4; i++) {
      const m = c.modules[i];
      const newMod = `<!-- Module ${i+1} -->
      <div class="bg-surface-container-low p-space-md rounded-xl border border-outline-variant/10 hover:border-primary/40 transition-colors">
        <div class="font-label-sm text-primary uppercase tracking-widest mb-2">Module ${m.num}</div>
        <h3 class="font-headline-sm text-on-surface mb-3">${m.title}</h3>
        <p class="font-body-sm text-on-surface-variant mb-4">${m.desc}</p>
        <ul class="space-y-2 font-body-sm text-outline">
          <li class="flex items-start gap-2"><span class="material-symbols-outlined text-primary text-sm mt-0.5">check</span> Live demonstration</li>
          <li class="flex items-start gap-2"><span class="material-symbols-outlined text-primary text-sm mt-0.5">check</span> Practical execution</li>
          <li class="flex items-start gap-2"><span class="material-symbols-outlined text-primary text-sm mt-0.5">check</span> Expert evaluation</li>
        </ul>
      </div>`;
      newContent = newContent.replace(mods[i][0], newMod);
    }
  }

  // Replace Schema
  newContent = newContent.replace(/"name": "Diploma in Make-up Artistry"/, `"name": "${c.title.split('|')[0].trim()}"`);
  newContent = newContent.replace(/"description": "An 8-week intensive makeup diploma covering bridal, airbrush, and HD contouring with 100% hands-on training on live models."/, `"description": "${c.schemaDesc}"`);

  fs.writeFileSync(path.join('src/pages', c.dir, 'index.astro'), newContent);
  console.log(`Generated: ${c.dir}`);
});
