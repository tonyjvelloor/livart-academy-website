const fs = require('fs');
const path = require('path');

// 1. Create content directories
fs.mkdirSync('src/content/locations', { recursive: true });

// 2. Setup content config
const configContent = `import { defineCollection, z } from 'astro:content';

const locationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    city: z.string(),
    title: z.string(),
    description: z.string(),
    primaryKeyword: z.string(),
  })
});

export const collections = {
  'locations': locationsCollection,
};
`;
fs.writeFileSync('src/content/config.ts', configContent);

// 3. Create sample markdown files
const kochiContent = `---
city: "Kochi"
title: "Best Makeup & Beauty Academy in Kochi | Livart"
description: "Looking for the best beautician courses in Kochi? Livart Academy offers premium makeup, hair, and skin diplomas."
primaryKeyword: "makeup academy in kochi"
---

Kochi is rapidly becoming the fashion and bridal hub of Kerala. Our academy provides students from all across Ernakulam district with the highest standard of international beauty education.`;
fs.writeFileSync('src/content/locations/kochi.md', kochiContent);

const edappallyContent = `---
city: "Edappally"
title: "Premium Beauty Academy in Edappally | Livart"
description: "Join Livart Beauty Academy in Edappally. B&WSSC certified courses in makeup, hair styling, and cosmetology."
primaryKeyword: "beautician course in edappally"
---

Conveniently located near the metro in Edappally, Livart Academy is easily accessible for students seeking a professional career in cosmetology.`;
fs.writeFileSync('src/content/locations/edappally.md', edappallyContent);

// 4. Create the dynamic routing page
fs.mkdirSync('src/pages/academy', { recursive: true });
const dynamicPageContent = `---
import { getCollection } from 'astro:content';
import Layout from '../../layouts/Layout.astro';

export async function getStaticPaths() {
  const locationEntries = await getCollection('locations');
  return locationEntries.map(entry => ({
    params: { location: entry.slug }, props: { entry },
  }));
}

const { entry } = Astro.props;
const { Content } = await entry.render();
---

<Layout title={entry.data.title} description={entry.data.description}>
  <section class="pt-32 pb-16 px-margin-sm lg:px-margin-lg max-w-[1000px] mx-auto text-center border-b border-outline-variant/20">
    <div class="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
      <span class="font-label-sm uppercase tracking-widest text-primary">Livart Academy in {entry.data.city}</span>
    </div>
    <h1 class="font-display-lg text-display-lg lg:text-[64px] lg:leading-[72px] text-on-surface tracking-tight mb-6">
      Professional Beauty Courses in <span class="italic text-primary">{entry.data.city}.</span>
    </h1>
    <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed mb-8">
      {entry.data.description}
    </p>
  </section>

  <section class="py-space-xl px-margin-sm lg:px-margin-lg max-w-[1000px] mx-auto prose prose-invert prose-p:text-on-surface-variant prose-headings:text-on-surface">
    <Content />
    
    <div class="mt-12 p-8 bg-surface-container rounded-xl border border-outline-variant/20 text-center">
      <h3 class="font-headline-sm text-on-surface mb-4">Start Your Career Today</h3>
      <p class="font-body-md text-on-surface-variant mb-6">Enroll in our flagship makeup, hair, and skin programs.</p>
      <a href="/overview/" class="inline-block px-8 py-4 bg-primary text-on-primary font-label-md uppercase tracking-widest font-bold rounded hover:bg-primary-fixed transition-colors">
        View All Courses
      </a>
    </div>
  </section>
</Layout>
`;
fs.writeFileSync('src/pages/academy/[location].astro', dynamicPageContent);
console.log('pSEO architecture created');
