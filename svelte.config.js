import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess({})],

  kit: {
    adapter: adapter({
		out: 'build',
		precompress: true,
	}),
    alias: {
      $lib: "./src/lib",
      $com: "./src/components",

    },
  },
};

export default config;
