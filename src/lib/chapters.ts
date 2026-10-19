import { getCollection } from 'astro:content';

export async function allChapters() {
  return (await getCollection('chapters')).sort((a, b) => a.data.number - b.data.number);
}

// The reading order of every page, used for Previous / Next links.
export async function readingOrder() {
  const chapters = await allChapters();
  return [
    { id: 'home', href: '', label: 'Front page' },
    { id: 'how', href: 'how/', label: 'How to use this notebook' },
    ...chapters.map((c) => ({ id: 'ch-' + c.data.number, href: `chapters/${c.id}/`, label: `Chapter ${c.data.number}: ${c.data.title}` })),
    { id: 'back', href: 'back/', label: 'Word list and answers' },
  ];
}
