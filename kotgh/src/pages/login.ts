import { createApp } from 'vue';
import LoginPage from '@/views/Login/LoginPage.vue';

import '@/assets/main.css';

const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
if (isLoggedIn) window.location.href = '/home';

createApp(LoginPage).mount('#app');