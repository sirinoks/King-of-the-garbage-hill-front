<template>
  <div>
    <TopLogin />
    <TopLogs />
  </div>
</template>
<script>
import TopLogs from "./top/Top-Logs.vue";
import TopLogin from "./top/Top-Login.vue";

export default {
  name: "CenterTop",
  components: {
    TopLogs,
    TopLogin,
  },
};
</script>
<style></style>
