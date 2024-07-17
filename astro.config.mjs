import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import svelte from '@astrojs/svelte'

import db from '@astrojs/db'

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    output: 'server',
    integrations: [
        sitemap(),
        tailwind({
            applyBaseStyles: false
        }),
        mdx(),
        svelte(),
        db()
    ]
})
