import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';

const rewrites: Record<string, string> = {
  '/login': '/src/pages/login.html',
  '/login/': '/src/pages/login.html',
  '/home': '/src/pages/home.html',
  '/home/': '/src/pages/home.html',
  '/game': '/src/pages/game.html',
  '/game/': '/src/pages/game.html',
};

export default defineConfig({
  plugins: [
    {
      name: 'mpa-rewrites',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (!req.url) return next();
          const path = req.url.split('?')[0];
          if (rewrites[path]) req.url = rewrites[path];
          next();
        });
      },
      configurePreviewServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (!req.url) return next();
          const path = req.url.split('?')[0];
          if (rewrites[path]) req.url = rewrites[path];
          next();
        });
      },
    },
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: { '@': resolve(__dirname, './src') },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'src/pages/login.html'),
        home: resolve(__dirname, 'src/pages/home.html'),
        game: resolve(__dirname, 'src/pages/game.html'),
      },
    },
  },
});