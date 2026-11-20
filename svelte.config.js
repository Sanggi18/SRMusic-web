import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		// GitHub Pages serves from /<repo>/ — set base in vite.config.ts
		// or via the BASE_PATH env var when building for a project site.
		paths: {
			base: process.env.BASE_PATH ?? ''
		},
		// Screenshots are user-supplied (see static/screenshots/README.md).
		// Don't fail the build when a listed screenshot file isn't in the
		// repo yet — warn instead so the template builds out of the box.
		prerender: {
			handleHttpError: ({ path, message }) => {
				// NOTE: path includes the BASE_PATH prefix, e.g.
				// /SRMusic-web/screenshots/player.webp — so match on
				// '/screenshots/' anywhere in the path, not the start.
				if (path.includes('/screenshots/')) {
					console.warn(`missing screenshot (add it to static/screenshots/): ${path}`);
					return;
				}
				throw new Error(message);
			}
		}
	}
};

export default config;
