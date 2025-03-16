import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      $components: '/src/components',
      $stores: '/src/stores',
      $styles: '/src/styles',
      $lib: '/src/lib'
    }
  },
  server: {
    watch: {
      usePolling: true,      // Enables polling for file changes
      interval: 1000         // Adjust polling interval (default 100ms)
    },
    host: true,               // Ensures Vite can bind to localhost
  }
});
