import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Every file in src/content/chapters is one chapter.
// The front matter at the top of each file must match this list.
const chapters = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/chapters' }),
  schema: z.object({
    number: z.number(),
    title: z.string(),
    kicker: z.string(),
    subtitle: z.string(),
    question: z.string(),
    part: z.string(),
    quote: z.object({ who: z.enum(['maya', 'botley', 'sam']), text: z.string() }).optional(),
    lastChecked: z.coerce.date().optional(),
  }),
});

export const collections = { chapters };
