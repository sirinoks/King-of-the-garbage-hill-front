import { createApp } from 'vue';
import HomePage from '@/views/Home/HomePage.vue';
import '@/assets/main.css';

const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
if (!isLoggedIn) window.location.href = '/login';


createApp(HomePage).mount('#app');