import CenterLeaderboardVue from "@/components/Center-Leaderboard.vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: CenterLeaderboardVue,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
