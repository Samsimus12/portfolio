import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import HelloWorld from './components/HelloWorld.vue';

Vue.use(VueRouter);

const catchAll = { path: "*", name: "not-found", component: require('./components/not_found.vue').default };
let routes = [
    catchAll,
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/hello', component: HelloWorld }
];

export default new VueRouter({
    routes
});