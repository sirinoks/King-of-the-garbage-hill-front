<template>
  <div class="panels">
    <div class="col left-panel">
      <div class="left-hero-container">
        <LeftHero />
      </div>
      <div class="left-stats-container">
        <LeftStats />
      </div>
    </div>
    <div class="col center-panel">
      <div class="top-container">
        <CenterTop />
      </div>
      <div class="center-leaderboard-container">
        <CenterLeaderboard />
      </div>
      <div class="center-actions-container">
        <CenterActions />
      </div>
      <div class="center-bottom-container">
        <CenterBottom />
      </div>
    </div>
    <div class="col right-panel">
      <RightPassives />
    </div>
  </div>
</template>

<script lang="ts">
import CenterLeaderboard from "./components/Center-Leaderboard.vue";
import CenterActions from "./components/Center-Actions.vue";
import LeftStats from "./components/Left-Stats.vue";
import LeftHero from "./components/Left-Hero.vue";
import CenterTop from "./components/Center-Top.vue";
import CenterBottom from "./components/Center-Bottom.vue";
import RightPassives from "./components/Right-Passives.vue";

export default {
  name: "App",
  components: {
    CenterLeaderboard,
    CenterActions,
    LeftStats,
    LeftHero,
    CenterTop,
    CenterBottom,
    RightPassives,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background-color: #1a1a1a;
}

.panels {
  display: flex;
  flex-direction: row;
}

.col {
  display: flex;
  width: 25%;
  height: 100vh;
}

.left-panel {
  background-color: #f3aaaa;
  flex-direction: column;
}

.center-panel {
  background-image: url("https://cdn.discordapp.com/attachments/1009165665074171964/1009852080778924113/DeepList_Garbage_mountain_in_the_empty_field_4k_ultra-detailed__84264db2-ec36-46ac-9b70-402bcfea48e9.png");
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  flex-grow: 3;
}

.right-panel {
  background-color: #5d94c7;
}

.left-stats-container {
  margin-top: 1vh;
}

.center-leaderboard-container {
  margin-top: 10vh;
  margin-bottom: 18vh;
}
</style>
