<template>
  <div>
    <img class="hero-portrait" :src="img" />
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      name: "Lorik",
      img: "https://cdn.discordapp.com/attachments/353432193730871296/935479115740504134/bratishka.png",
    };
  },
});
</script>
<style>
.hero-portrait {
  width: 100%;
}
</style>
