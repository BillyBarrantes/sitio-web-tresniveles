import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tresniveles.com',
  output: 'static',
  build: {
    assets: '_assets',
  },
});
