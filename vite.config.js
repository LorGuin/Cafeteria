import { defineConfig } from 'vite';
import imagemin from 'vite-plugin-imagemin';
import imageminWebp from 'imagemin-webp';

export default defineConfig({
  plugins: [
    imagemin({
      plugins: {
        verbose: true,
        webp: imageminWebp({ quality: 70 }), // Ajusta la calidad de 0 a 100
      },
    }),
  ],
  root: 'src',
  server: {
    port: 5173,
    hot: true,
  },
  build: {
    sourcemap: true,
    outDir: '../build',
    rollupOptions: {
      input: {
        main: './src/index.ts',
      },
    },
  },
  assetsInclude: ['**/*.html'],
});