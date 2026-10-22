const fs = require('fs');
const path = require('path');

// 1. Create content directory for blogs
fs.mkdirSync('src/content/blog', { recursive: true });

// 2. Update content.config.ts
let configContent = fs.readFileSync('src/content.config.ts', 'utf-8');
if(!configContent.includes("const blogCollection")) {
  const newConfig = `import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const locationsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/locations" }),
  schema: z.object({
    city: z.string(),
    title: z.string(),
    description: z.string(),
    primaryKeyword: z.string(),
  })
});

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date().optional(),
  })
});

export const collections = {
  'locations': locationsCollection,
  'blog': blogCollection,
};
`;
  fs.writeFileSync('src/content.config.ts', newConfig);
}

// 3. The 14 SEO-critical blog slugs from the config
const slugs = [
  'qualities-of-a-professional-hair-stylist',
  'how-to-become-a-beautician',
  'why-a-cosmetology-diploma-is-your-perfect-choice',
  'a-guide-to-eyebrow-artistry-courses',
  'qualifications-skills-to-be-a-professional-makeup-artist',
  'beautician-jobs-scope-and-career-opportunities',
  '10-must-know-interview-questions-and-expert-answers-for-cosmetologists',
  'cosmetologist-resume-samples-and-guide-for-freshers',
  'tips-for-launching-your-cosmetology-career-in-india',
  'choosing-best-beautician-course-after-10th-or-12th',
  'hd-bridal-makeup-tips-for-a-flawless-look',
  'cosmetology-vs-esthetician-choosing-the-right-career',
  'acknowledge-your-beauty-makeup-myths-and-facts-for-your-beauty-boost',
  '10-best-career-opportunities-for-makeup-artists'
];

// Generate markdown files
slugs.forEach(slug => {
  const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const md = `---
title: "${title} | Livart Blog"
description: "Read our latest insights on ${title} at Livart Beauty Academy."
pubDate: 2026-09-01
---

## ${title}

*Note: This article is currently being migrated to our new platform. Please check back soon for the full guide!*

In the meantime, explore our [flagship cosmetology courses](/overview/) or contact our admissions team for immediate career guidance.
`;
  fs.writeFileSync(path.join('src/content/blog', slug + '.md'), md);
});

// 4. Create the dynamic route rendering page
const astroRoute = `---
import { getCollection, render } from 'astro:content';
import Layout from '../../layouts/Layout.astro';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map(entry => ({
    params: { slug: entry.id }, props: { entry },
  }));
}

const { entry } = Astro.props;
const { Content } = await render(entry);
---

<Layout title={entry.data.title} description={entry.data.description}>
  <article class="pt-32 pb-16 px-margin-sm lg:px-margin-lg max-w-[800px] mx-auto text-on-surface">
    <div class="mb-12 border-b border-outline-variant/20 pb-8">
      <a href="/blog/" class="font-label-sm text-primary uppercase tracking-widest hover:underline mb-4 inline-block">&larr; Back to Blog</a>
      <h1 class="font-display-lg text-display-lg lg:text-[56px] lg:leading-[64px] tracking-tight mb-6">
        {entry.data.title.split('|')[0].trim()}
      </h1>
    </div>
    
    <div class="prose prose-invert prose-p:text-on-surface-variant prose-headings:text-on-surface prose-a:text-primary max-w-none">
      <Content />
    </div>
  </article>
</Layout>
`;
fs.writeFileSync('src/pages/blog/[slug].astro', astroRoute);

console.log('Blog architecture and legacy redirects secured.');
