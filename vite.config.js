import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      modules: '/src/modules',
      hooks: '/src/hooks',
      pages: '/src/pages',
      '@redux': '/src/redux',
      shared: '/src/shared',
      utils: '/src/utils',
      context: '/src/context',
      services: '/src/services',
      images: '/src/images',
      constants: '/src/constants',
      components: '/src/components',
      styles: '/src/styles',
    },
  },
});
