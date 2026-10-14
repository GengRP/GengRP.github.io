import { getCollection } from 'astro:content';
import type { Lang } from './ui';

/** Published articles in one language, newest first. Entry ids look like "zh/haiku-price". */
export async function getPosts(lang: Lang) {
  const all = await getCollection('writing', (e) => e.id.startsWith(`${lang}/`) && !e.data.draft);
  return all
    .map((e) => ({ ...e, slug: e.id.slice(lang.length + 1) }))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
