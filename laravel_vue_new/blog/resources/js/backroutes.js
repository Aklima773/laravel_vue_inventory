import { createRouter, createWebHistory } from "vue-router";

import BackHome from "./back_component/BackHome.vue";
import Login from "./back_component/Login.vue";


const routes = [
    { path: "/dashboard", component: BackHome, name: "home.index" },
    { path: "/login", component: Login, name: "login" },


];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
