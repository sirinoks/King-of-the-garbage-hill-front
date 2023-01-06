<template>
  <div>
    <StatsPrimary />
    <StatsSecondary />
    <StatsQuest />
  </div>
</template>
<script>
import StatsPrimary from "./stats/Stats-Primary.vue";
import StatsSecondary from "./stats/Stats-Secondary.vue";
import StatsQuest from "./stats/Stats-Quest.vue";

export default {
  name: "LeftStats",
  components: {
    StatsPrimary,
    StatsSecondary,
    StatsQuest,
  },
};
</script>
<style>
dl {
  background-color: grey;
  display: flex;
  flex-direction: column;
}
dd {
  margin: 0;
  flex-grow: 3;
}
.stat {
  flex-direction: row;
  display: flex;
}
</style>
