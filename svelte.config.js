import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			fallback: 'index.html',
		}),
		paths: {
			//base: ''
			//base: '/swoleymoley'
			base: '/svelte-gym-app-landingpage'
		},
		prerender: { entries: [] }
	}
};

export default config;
