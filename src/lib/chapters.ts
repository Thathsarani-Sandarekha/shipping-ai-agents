import { getCollection } from 'astro:content';

// The notebook a chapter belongs to is the folder it lives in.
export const notebookOf = (id: string) => id.split('/')[0];
// The part of the id after the folder, used in the chapter's address.
export const slugOf = (id: string) => id.split('/').slice(1).join('/');
export const chapterHref = (id: string) => `notebooks/${notebookOf(id)}/${slugOf(id)}/`;

export async function allChapters(nb: string) {
  return (await getCollection('chapters', (c) => notebookOf(c.id) === nb)).sort((a, b) => a.data.number - b.data.number);
}

// The reading order of every page in one notebook, used for Previous / Next links.
export async function readingOrder(nb: string) {
  const chapters = await allChapters(nb);
  return [
    { id: 'cover', href: `notebooks/${nb}/`, label: 'Notebook cover' },
    { id: 'how', href: `notebooks/${nb}/how/`, label: 'How to use this notebook' },
    ...chapters.map((c) => ({ id: 'ch-' + c.data.number, href: chapterHref(c.id), label: `Chapter ${c.data.number}: ${c.data.title}` })),
    { id: 'back', href: `notebooks/${nb}/back/`, label: 'Word list and answers' },
  ];
}
