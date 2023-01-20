<template>
  <div>Top login</div>
  <details :key="user.id">
    <summary>
      <div>Avatar?</div>
      <div>{{ user.name }}</div>
    </summary>
    <p>{{ user.points }}</p>
    <p>Log out</p>
  </details>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      user: {
        id: "0",
        avatar: "",
        name: "Siri",
        color: "043656",
        points: "100",
      },
    };
  },
});

//connect to useActor somehow...
</script>
<style></style>
