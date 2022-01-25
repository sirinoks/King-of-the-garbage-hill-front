<template>
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <div class="panels">
    <div class="col left-panel">
      <Leaderboard />
    </div>
    <div class="col center-panel"></div>
    <div class="col right-panel"></div>
  </div>
</template>

<script>
import Leaderboard from './components/Leaderboard.vue'

export default {
  name: 'App',
  components: {
    Leaderboard
  }
}
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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
}

.right-panel {
  background-color: #5d94c7;
}
</style>
