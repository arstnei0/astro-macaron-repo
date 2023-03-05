import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import { macaronVitePlugin as macaron } from '@macaron-css/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [solidJs()],
  vite: {
    plugins: [macaron()],
  },
});
