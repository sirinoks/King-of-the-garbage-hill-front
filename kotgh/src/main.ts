import './assets/main.css';

import { createApp as createVueApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import { createRouter } from './router';

export function createApp() {
  const app = createVueApp(App);
  const router = createRouter();

  app.use(createPinia());
  app.use(router);

  return { app, router };
}