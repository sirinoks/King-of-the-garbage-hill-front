<template>


<!-- <div class="logins">
  <Login v-if="!isLoggedIn" version="1.0"></Login>
  <LoginSuccess v-else version="1.0" :username="username"></LoginSuccess>
</div> -->

<div>
  <PatchNotes></PatchNotes>
</div>
  <!-- <RouterView /> -->
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Login from '@/views/Login/Login.vue'
import LoginSuccess from '@/views/Login/LoginSuccess.vue'
import PatchNotes from '@/components/Home/PatchNotes.vue'
import { ref } from 'vue';

import { PhHorse, PhHeart, PhCube } from "@phosphor-icons/vue";

const isLoggedIn = ref(true);
const username = ref('Sirinoks');


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
