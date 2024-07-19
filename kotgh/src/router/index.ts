import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/Home/HomePage.vue'
import LoginPage from '@/views/Login/LoginPage.vue';
import HelloWorld from '@/components/HelloWorld.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'default',
      component: LoginPage,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/home*',
      name: 'test',
      component: HelloWorld
    }
  ]
})

export default router
