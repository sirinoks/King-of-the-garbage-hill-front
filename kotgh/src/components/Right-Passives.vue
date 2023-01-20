<template>
  <div>
    <ul>
      <li v-for="sk in skills" :key="sk.id">
        <div class="skill-name">
          {{ sk.skill }}
        </div>
        <div class="skill-description">
          {{ sk.description }}
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      skills: [
        {
          id: "1",
          skill: "skill1",
          description: "description1",
        },
        {
          id: "2",
          skill: "skill2",
          description: "description2",
        },
        {
          id: "3",
          skill: "skill3",
          description: "description3",
        },
        {
          id: "4",
          skill: "skill4",
          description: "description4",
        },
      ],
    };
  },
});
</script>
<style></style>
