<template>
    <div class="logins">
      <LoginProcess v-if="!isLoggedIn" @loginClick="setLogin" version="1.0"></LoginProcess>
      <LoginSuccess v-else version="1.0" :username="username"></LoginSuccess>
    </div>
  </template>
  
  <script setup lang="ts">
  import LoginProcess from '@/views/Login/LoginProcess.vue'
  import LoginSuccess from '@/views/Login/LoginSuccess.vue'
  import { ref } from 'vue'

  const params = new URLSearchParams(window.location.search);
  const ok = params.get('ok') === '1';
  const user = params.get('user');
  const isLoggedIn = ref(false)
  const username = ref('Sirinoks')

  if (ok) {
    localStorage.setItem('isLoggedIn', 'true');
    if (user) localStorage.setItem('username', user);
    isLoggedIn.value = true;
    if (user) username.value = user;
    window.history.replaceState({}, '', '/login');
  }
  
  const setLogin = () => {
    isLoggedIn.value = true
  }
  </script>
  
  <style scoped>
  * {
    display: flex;
  }
  .logins {
    width: 100vw;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    min-height: 100svh;
    padding-bottom: 20vh;
  }
  .logins > div {
    justify-content: center;
  }
  </style>
  