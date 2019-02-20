import Router from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Contact from '../components/Contact.vue';
import HelloWorld from "../components/HelloWorld.vue";

let routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/hello', component: HelloWorld }
];
let VueRouter = new Router({
    routes
});

export default VueRouter;