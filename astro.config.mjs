import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import starlight from '@astrojs/starlight';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [sitemap(), tailwind({
    applyBaseStyles: false
  }), starlight({
    title: 'My delightful docs site',
    sidebar: [
      // {
      //     label: 'Guides',
      //     items: [{ label: 'Example Guide', slug: 'guides/example' }]
      // },
      // {
      //     label: 'Reference',
      //     autogenerate: { directory: 'reference' }
      // }
    ]
  }), mdx(), svelte()]
});