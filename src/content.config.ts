import { defineCollection, z } from 'astro:content';
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
