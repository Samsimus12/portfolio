import Vue from 'vue'
import router from './router/router.js'
import VueRouter from 'vue-router';
import NavBar from './components/NavBar.vue'

window.Vue = Vue;
Vue.use(VueRouter);

const app = new Vue({
    el: "#app",
    router,
    components: { NavBar }
});