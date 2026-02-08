import { createApp } from 'vue';
import GamePage from '@/views/GamePage.vue';
import '@/assets/main.css';

const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

if (!isLoggedIn) window.location.href = '/login';

createApp(GamePage).mount('#app');