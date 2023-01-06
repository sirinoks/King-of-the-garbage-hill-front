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
<style></style>
