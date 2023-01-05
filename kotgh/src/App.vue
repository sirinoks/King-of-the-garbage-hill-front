<template>
  <div class="panels">
    <div class="col left-panel"></div>
    <div class="col center-panel">
      <MainLeaderboard />
      <MainActions />
    </div>
    <div class="col right-panel"></div>
  </div>
</template>

<script lang="ts">
import MainLeaderboard from "./components/Main-Leaderboard.vue";
import MainActions from "./components/Main-Actions.vue";

export default {
  name: "App",
  components: {
    MainLeaderboard,
    MainActions,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

.panels {
  display: flex;
  flex-direction: row;
}

.col {
  display: flex;
  width: 30%;
  height: 100vh;
}

.left-panel {
  background-color: #f3aaaa;
  flex-direction: column;
}

.center-panel {
  background-color: #8ed66d;
  display: flex;
  flex-direction: column;
}

.right-panel {
  background-color: #5d94c7;
}
</style>
