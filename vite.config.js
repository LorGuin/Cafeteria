import { defineConfig } from 'vite';
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

export default defineConfig({
  root: '.',
  plugins: [
    {
      name: 'imagemin',
      enforce: 'post',
      async writeBundle() {
        await imagemin(['src/images/*.{jpg,png}'], {
          destination: 'dist/assets',
          plugins: [
            imageminWebp({
              quality: 70,
              // ... otras opciones
            })
          ]
        });
      }
    }
  ],
  server: {
    port: 5173,
    hot: true,
  },
  build: {
    sourcemap: true,
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
    assetsDir: 'assets',
  },
});