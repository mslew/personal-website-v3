import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import svelte from '@astrojs/svelte'
import sitemap from '@astrojs/sitemap';
import svelteConfig from './svelte.config';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap(), svelte(svelteConfig)],
	css: {
		preprocessorOptions: {
		  scss: {
			additionalData: '@use "src/scss/variables.scss" as *;',
		  },
		},
	  }
});
