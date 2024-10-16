import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      modules: '/src/modules',
      hooks: '/src/hooks',
      pages: '/src/pages',
      '@redux': '/src/redux',
      shared: '/src/shared',
      helpers: '/src/helpers',
      context: '/src/context',
      services: '/src/services',
      images: '/src/images',
      constants: '/src/constants',
      components: '/src/components',
      styles: '/src/styles',
    },
  },
  // build: {
  //   sourcemap: true,
  // },
});
