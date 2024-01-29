import { defineConfig } from 'astro/config';
import sanity from 'astro-sanity';
import markdownIntegration from '@astropub/md'
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { createMarkdownProcessor } from '@astrojs/markdown-remark'; // Import the correct export


export default defineConfig({
  vite: {
    ssr: {
      // Add npm packages containing invalid code here
      noExternal: ["@astrojs/markdown-remark","@astropub/md"],
    },
  },
  integrations: [
    sanity({
      projectId: 'tojmg0db',
      dataset: 'production',
      apiVersion: '2021-03-25',
      useCdn: true,
    }),
    [react()],
    tailwind(),
    markdownIntegration(),
  ],
  markdown: {
    smartypants: false,
    gfm: false,
    remarkPlugins: [],
    rehypePlugins: [],
    //syntaxHighlight: 'shiki',
    createMarkdownProcessor, // Use the correct export
  },
  components: {
    types: {
      unknown: './src/pages/article/[...slug].astro',
    },
  },
});
