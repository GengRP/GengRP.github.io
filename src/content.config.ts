import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Articles live in src/content/writing/<lang>/<slug>.md.
 * The same slug across languages is the same article.
 */
const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    /** Where this article was also posted (syndication links). */
    syndication: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    /** Optional slide-deck version; when set, article lists link here instead. */
    deck: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

/**
 * Short posts mirrored from X live in src/content/posts/<lang>/<slug>.md.
 * Thread parts are separated by a horizontal rule (---) in the body.
 */
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    date: z.coerce.date(),
    /** The original post on X. */
    x: z.string(),
    /** The post it quotes, if any. */
    quote: z.object({ label: z.string(), href: z.string() }).optional(),
  }),
});

export const collections = { writing, posts };
