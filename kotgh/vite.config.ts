import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';

const devRewrites: Record<string, string> = {
  '/': '/src/pages/login.html',
  '/login': '/src/pages/login.html',
  '/login/': '/src/pages/login.html',
  '/home': '/src/pages/home.html',
  '/home/': '/src/pages/home.html',
  '/game': '/src/pages/game.html',
  '/game/': '/src/pages/game.html',
};

const previewRewrites: Record<string, string> = {
  '/': '/src/pages/login.html',
  '/login': '/src/pages/login.html',
  '/login/': '/src/pages/login.html',
  '/home': '/src/pages/home.html',
  '/home/': '/src/pages/home.html',
  '/game': '/src/pages/game.html',
  '/game/': '/src/pages/game.html',
};

function applyRewrites(map: Record<string, string>) {
  return (req: any, _res: any, next: () => void) => {
    if (!req.url) return next();
    const pathname = req.url.split('?')[0];
    if (map[pathname]) req.url = map[pathname];
    next();
  };
}

export default defineConfig({
  plugins: [
    {
      name: 'mpa-rewrites',
      configureServer(server) {
        server.middlewares.use(applyRewrites(devRewrites));
      },
      configurePreviewServer(server) {
        server.middlewares.use(applyRewrites(previewRewrites));
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