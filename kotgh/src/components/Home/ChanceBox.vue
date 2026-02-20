<template>
  <div class="chanceBox">
    <div class="chancePercent" :style="{ width: chanceWidth }">
      <div class="heroBox">
        <img :src="hero.avatar" :alt="hero.name">
      </div>
      <div class="chanceText">
        <p>{{ chance }}</p>
        <p>%</p>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import type { HeroSummary } from '@/types/heroes';
import { computed } from 'vue'
const PORTRAIT_WIDTH = '3.125rem' //or 50px
const props = defineProps<{
  hero: HeroSummary;
  chance: number
}>()

const chanceWidth=computed(() => {
  const c = Math.min(100, Math.max(0, props.chance));
  return `calc(${PORTRAIT_WIDTH} + (100% - ${PORTRAIT_WIDTH}) * ${c / 100})`
})

</script>

<style scoped>
*{display:flex;}

.chanceBox{
  padding: 0.25rem;
  border: 1px solid var(--kh-c-neutrals-sat-500);
  gap: 0.25rem;
  width: 100%;
}

.chanceBox .chancePercent{
  background-color: var(--kh-c-neutrals-sat-500);
  gap: 0.375rem;
  min-width: 3.125rem;
  flex: 0 0 auto;
  overflow: visible;
}


.chanceBox .heroBox{
  width:3.125rem;
  height:3.125rem;
}

.chanceBox .chanceText{
  gap: 0.125rem;
  align-items: center;
}

.chanceBox .chanceText p{
  font-size: 1rem;
}

</style>
