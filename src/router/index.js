import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/HomePage.vue";
import About from "@/views/RegisteredUser.vue";
import Login from "@/views/LoginPage.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/registered",
    name: "registeredUser",
    component: About,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;