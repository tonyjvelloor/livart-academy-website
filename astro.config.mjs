import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://livart.co.in',
  trailingSlash: 'always',

  vite: {
    plugins: [tailwindcss()]
  },

  redirects: {
    '/home': '/',
    '/courses-beautician-kochi': '/overview/',
    '/diploma-in-tattoo': '/overview/',
    // Redirect root-level blog posts to /blog/ prefix as per SEO audit
    '/qualities-of-a-professional-hair-stylist': '/blog/qualities-of-a-professional-hair-stylist/',
    '/how-to-become-a-beautician': '/blog/how-to-become-a-beautician/',
    '/why-a-cosmetology-diploma-is-your-perfect-choice': '/blog/why-a-cosmetology-diploma-is-your-perfect-choice/',
    '/a-guide-to-eyebrow-artistry-courses': '/blog/a-guide-to-eyebrow-artistry-courses/',
    '/qualifications-skills-to-be-a-professional-makeup-artist': '/blog/qualifications-skills-to-be-a-professional-makeup-artist/',
    '/beautician-jobs-scope-and-career-opportunities': '/blog/beautician-jobs-scope-and-career-opportunities/',
    '/10-must-know-interview-questions-and-expert-answers-for-cosmetologists': '/blog/10-must-know-interview-questions-and-expert-answers-for-cosmetologists/',
    '/cosmetologist-resume-samples-and-guide-for-freshers': '/blog/cosmetologist-resume-samples-and-guide-for-freshers/',
    '/tips-for-launching-your-cosmetology-career-in-india': '/blog/tips-for-launching-your-cosmetology-career-in-india/',
    '/choosing-best-beautician-course-after-10th-or-12th': '/blog/choosing-best-beautician-course-after-10th-or-12th/',
    '/hd-bridal-makeup-tips-for-a-flawless-look': '/blog/hd-bridal-makeup-tips-for-a-flawless-look/',
    '/cosmetology-vs-esthetician-choosing-the-right-career': '/blog/cosmetology-vs-esthetician-choosing-the-right-career/',
    '/acknowledge-your-beauty-makeup-myths-and-facts-for-your-beauty-boost': '/blog/acknowledge-your-beauty-makeup-myths-and-facts-for-your-beauty-boost/',
    '/10-best-career-opportunities-for-makeup-artists': '/blog/10-best-career-opportunities-for-makeup-artists/'
  },

  integrations: [sitemap()]
});