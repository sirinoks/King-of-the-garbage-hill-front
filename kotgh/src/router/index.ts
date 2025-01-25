import { createRouter as createVueRouter, createWebHistory, createMemoryHistory } from 'vue-router';
import HomePage from '@/views/Home/HomePage.vue';
import LoginPage from '@/views/Login/LoginPage.vue';
import HelloWorld from '@/components/HelloWorld.vue';

export function createRouter() {
  // Determine if this is SSR or client-side
  const isSSR = typeof window === 'undefined';
  
  // Use createMemoryHistory for SSR, createWebHistory for client-side
  const history = isSSR ? createMemoryHistory() : createWebHistory();

  return createVueRouter({
    history,
    routes: [
      {
        path: '/',
        name: 'default',
        component: LoginPage,
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/AboutView.vue'),
      },
      {
        path: '/home',
        name: 'HomePage',
        component: HomePage,
      },
      {
        path: '/home*',
        name: 'test',
        component: HelloWorld,
      },
    ],
  });
}
