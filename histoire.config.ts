import { defineConfig } from 'histoire';
import { HstSvelte } from '@histoire/plugin-svelte';
import { resolve } from 'path';

export default defineConfig({
	routerMode: 'hash',
	plugins: [HstSvelte()],
	vite: {
		resolve: {
			alias: {
				'$app/stores': resolve(__dirname, './stores.mjs')
			}
		}
	}
});
