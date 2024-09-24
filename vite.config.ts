import { resolve } from 'path';
import { defineConfig } from 'vite';
import webExtension from '@samrum/vite-plugin-web-extension';

export default defineConfig({
  resolve: {
    alias: {
      $background: resolve(__dirname, 'src/background'),
      $content: resolve(__dirname, 'src/content'),
      $: resolve(__dirname, 'src'),
    },
  },
  plugins: [
    webExtension({
      manifest: {
        name: 'Vite Svelte Extension',
        description: 'Extension template for Vite, Svelte, and TypeScript',
        version: '1.0.0',
        manifest_version: 2,
        background: {
          scripts: ['src/background/background.ts'],
          persistent: true,
        },
        content_scripts: [
          {
            matches: ['<all_urls>'],
            js: ['src/content/content.ts'],
          },
        ],
        permissions: [],
      },
    }),
  ],
});
