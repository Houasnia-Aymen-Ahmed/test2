import { createRouter, createWebHistory } from "@ionic/vue-router";
import GetStarted from "../pages/get-started/GetStarted.vue";

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/get-started",
    component: GetStarted
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
