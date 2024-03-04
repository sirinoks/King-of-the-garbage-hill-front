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
    
  const isLoggedIn = ref(false)
  const username = ref('Sirinoks')
  
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
    height: 100vh;
    padding-bottom: 20vh;
  }
  .logins > div {
    justify-content: center;
  }
  </style>
  