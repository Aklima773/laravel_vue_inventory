require("./bootstrap");

import { createApp } from "vue";
import FrontApp from "./FrontApp.vue";  //root app for front app
// import BackApp from "./BackApp.vue";  //root app for backend
// import Navber from "./front_component/Navber.vue";
// import Home from "./front_component/Home.vue";

import frontrouter from "./frontroutes"
import backrouter from "./backroutes"
import Sidebar from "./back_component/Sidebar.vue"
import Topbar from "./back_component/Topbar.vue"
import Footer from "./back_component/Footer.vue"
// import Login from "./back_component/Login.vue"
// import BackHome from "./back_component/BackHome.vue"



const appfront = createApp(FrontApp);
const appback = createApp({});

appback.component('sidebar', Sidebar);
appback.component('topbar', Topbar);
appback.component('footer', Footer);
// appback.component('login', Login);
// appback.component('backhome', BackHome);



appfront.use(frontrouter)
appfront.mount("#front");

appback.use(backrouter)
appback.mount("#back");

