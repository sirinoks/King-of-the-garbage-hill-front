<template>
  <div class="match">
    <div>

      <div class="winner-box">
        <div class="win-place">1</div>
        <div class="match-hero-win"><img src="../../assets/heroes/le_crisp.png"></div>
      </div>
      <div class="others-box">
        <div class="match-date">2024.01.23 10:40</div>
        <div class="others-top-row">
          <div class="match-hero-lose"><img src="../../assets/heroes/tolya.png"></div>
          <div class="match-hero-lose"><img src="../../assets/heroes/tain.png"></div>
          <div class="match-hero-lose"><img src="../../assets/heroes/weedwick.png"></div>
        </div>
      </div>
    </div>
    <div>
      <div class="match-gains">
        <div>+</div>
        <div>100</div>
        <div>
          <PhCoins :size="12" weight="fill" color="var(--kh-c-text-highlight-primary)" />
        </div>
      
        </div>
      <div class="others-bot-row">
        <div class="match-hero-lose"><img src="../../assets/heroes/awdka.png"></div>
        <div class="match-hero-lose"><img src="../../assets/heroes/mylorik.png"></div>
        <div class="match-hero-lose"><img src="../../assets/heroes/kraborak.png"></div>
        <div class="match-hero-lose"><img src="../../assets/heroes/tigr.png"></div>
      </div>
    </div>    
  </div>
</template>

<script setup lang="ts">

import { PhCoins } from '@phosphor-icons/vue'
</script>

<style scoped>
*{display:flex;}

.match{
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.5rem;
  align-items: end;
  align-content: end;
  background-color: var(--kh-c-neutrals-sat-650);
  border: 0.063rem solid var(--kh-c-neutrals-sat-500);
}

.match>div:first-of-type{
  height: 3.125rem;
  gap: 0.25rem;
}
.match>div:last-of-type{
  height: 1.875rem;
}

.match div{
  gap: 0.25rem;
}

.match *{
  align-items: end;
  align-content: end;
}

.match img{
  width:1.875rem;
  height:1.875rem;
}
.match .winner-box{
  align-self: stretch;
}

.match .others-box{
  flex-direction: column;
}

.win-place{
  padding: 0 0.25rem;
  font-size: 1rem;
  align-self: center;
}

.match-hero-win img{
  height: 3.125rem;
  width: 3.125rem;
  border: 0.063rem solid var(--kh-c-text-highlight-primary);
}

.match .match-date{
  font-size:0.625rem;
  color: var(--kh-c-text-primary-700);
}

.match .match-gains{
  width: 3.75rem;
  padding: 0 0.063rem;
  gap: 0;
  align-self: center;/*unsure, check if center or stretch to align correctly*/
  align-items: center;
  justify-content: flex-end;

  color: var(--kh-c-text-highlight-primary);
  font-size: 0.75rem;
}

.match .match-gains *{
  align-items: center;
  justify-content: center;
}

.match .match-gains div:last-of-type{
  width: 1rem;
  height: 1rem;
}


</style>
