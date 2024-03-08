import { createRouter, createWebHistory } from "@ionic/vue-router";
import { GetStarted, Authenticate } from "../pages";

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/get-started",
    component: GetStarted
  },
  {
    path: "/authenticate",
    name: "Authenticate",
    component: Authenticate
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
