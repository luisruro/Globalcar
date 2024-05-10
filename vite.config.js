import { defineConfig } from 'vite';
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        'english': 'src/pages/english.html',
        // Agrega más páginas según sea necesario
      },
    },
  },
});