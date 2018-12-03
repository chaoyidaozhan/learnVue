import Vue from "vue"
import routes from './component/route';
import VueRouter from "vue-router";
import App from "./app.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");