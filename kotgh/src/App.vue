<template>


<div class="logins">
  <!-- <Login version="1.0"></Login> -->
  <LoginSuccess version="1.0" username="Sirinoks"></LoginSuccess>
</div>

  <!-- <RouterView /> -->
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Login from './components/Login.vue'
import LoginSuccess from './components/LoginSuccess.vue'

import { PhHorse, PhHeart, PhCube } from "@phosphor-icons/vue";


</script>

<style scoped>
*{
  display:flex;
}
.logins{
  width:100vw;
  flex-direction: row;
  align-items: center;
  justify-content:center;
  height: 100vh;
  padding-bottom:20vh;
}
.logins>div{
  justify-content: center;
}
</style>
