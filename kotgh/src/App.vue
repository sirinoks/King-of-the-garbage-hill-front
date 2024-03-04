<template>


<div class="logins">
  <Login v-if="!isLoggedIn" @loginClick="setLogin" version="1.0"></Login>
  <LoginSuccess v-else version="1.0" :username="username"></LoginSuccess>
</div>

<div>
  <!-- <PatchNotes></PatchNotes> -->
</div>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Login from '@/views/Login/Login.vue'
import LoginSuccess from '@/views/Login/LoginSuccess.vue'
import PatchNotes from '@/components/Home/PatchNotes.vue'
import { ref } from 'vue';

import { PhHorse, PhHeart, PhCube } from "@phosphor-icons/vue";

const isLoggedIn = ref(false);
const username = ref('Sirinoks');

const setLogin=()=>{
  isLoggedIn.value=true;
}

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
