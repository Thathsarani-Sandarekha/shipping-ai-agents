import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// ---------------------------------------------------------------
// Change these two lines before you publish.
//   site: your GitHub Pages address (https://YOUR-USERNAME.github.io)
//   base: '/' + your repository name
// Using a custom domain (agents.example.com)? Set site to it and base to '/'.
// ---------------------------------------------------------------
export default defineConfig({
  site: 'https://nimeshmora.github.io',
  base: '/shipping-ai-agents',
  integrations: [mdx()],
});
