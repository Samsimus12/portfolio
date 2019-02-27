import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';

Vue.use(VueRouter);

const catchAll = { path: "*", name: "not-found", component: require('./components/NotFound.vue').default };
let routes = [
    catchAll,
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact }
];

export default new VueRouter({
    routes
});