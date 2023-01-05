import MainLeaderboardVue from "@/components/Main-Leaderboard.vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: MainLeaderboardVue,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
