import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { readdirSync } from 'node:fs';

// The sub-folder the site lives in on GitHub Pages ('' for a custom domain). Redirect targets need it spelled out.
const BASE = '/shipping-ai-agents';

// Notebook #1's chapters used to live at /chapters/<name>/. Each old address redirects to its new home.
const oldChapters = Object.fromEntries(
  readdirSync('./src/content/notebooks/shipping-ai-agents')
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
    .map((n) => [`/chapters/${n}`, `${BASE}/notebooks/shipping-ai-agents/${n}/`]),
);

// ---------------------------------------------------------------
// Change these before you publish.
//   site: your GitHub Pages address (https://YOUR-USERNAME.github.io)
//   BASE (at the top): '/' + your repository name
// Using a custom domain (agents.example.com)? Set site to it and BASE to ''.
// ---------------------------------------------------------------
export default defineConfig({
  site: 'https://nimeshmora.github.io',
  base: BASE || '/',
  integrations: [mdx()],
  // Code blocks get both a light and a dark color theme. src/styles/site.css picks one to match the page.
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
    },
  },
  // Old addresses from before the site held more than one notebook. Shared links keep working.
  redirects: {
    '/how': `${BASE}/notebooks/shipping-ai-agents/how/`,
    '/back': `${BASE}/notebooks/shipping-ai-agents/back/`,
    ...oldChapters,
  },
});
