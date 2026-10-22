import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const locationsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/locations" }),
  schema: z.object({
    city: z.string(),
    title: z.string(),
    description: z.string(),
    primaryKeyword: z.string(),
    district: z.string().default("Ernakulam"),
    distanceFromCampus: z.string().default("Direct access via Kochi Metro"),
    metroRoute: z.string().default("Pathadipalam Metro Station (Pillar 382) - 2 min walk"),
    commuteTime: z.string().default("10-25 mins"),
    transportGuide: z.string().optional(),
    popularCourses: z.array(z.string()).default([
      "Cosmetology & Beautician Master Diploma",
      "Bridal Makeup & HD Artistry",
      "Advanced Hair Architecture & Salon Chemical Work",
      "Clinical Skin Therapy & Aesthetics"
    ]),
    faqs: z.array(z.object({
      q: z.string(),
      a: z.string(),
    })).default([]),
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
