import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const teamCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/team" }),
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    location: z.string().optional(),
    linkedin: z.string().optional(),
    email: z.string().optional(),
    publishDate: z.string().transform(str => new Date(str)),
  }),
});

export const collections = {
  'team': teamCollection,
};