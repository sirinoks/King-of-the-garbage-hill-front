<template>
  <div class="app">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LoginPage from '@/views/Login/LoginPage.vue'

import PatchNotes from '@/components/Home/PatchNotes.vue'
import { ref } from 'vue'

import { PhHorse, PhHeart, PhCube } from '@phosphor-icons/vue'

</script>

<style scoped>
* {
  display: flex;
}
.app{
  flex-direction: column;
}
</style>
