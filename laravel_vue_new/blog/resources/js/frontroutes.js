import { createRouter, createWebHistory } from "vue-router";

import Home from "./front_component/Home.vue";
import About from "./front_component/About.vue";

const routes = [
    { path: "/", component: Home, name: "home.index" },
    { path: "/about", component: About, name: "about.index" },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
