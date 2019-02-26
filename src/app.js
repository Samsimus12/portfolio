import Vue from 'vue'
import router from './router.js'
import NavBar from './components/NavBar.vue'
import FooterBar from './components/Footer.vue'
import './assets/bootstrap-4.0.0-dist/css/bootstrap.min.css'
import './assets/fontawesome-free-5.7.2-web/css/all.min.css'
import './styles/main.css'
import './styles/cover.css'
import 'vue-material/dist/vue-material.min.css'
import './assets/images/Me.JPG'

window.Vue = Vue;

const app = new Vue({
    el: "#app",
    router,
    components: { NavBar, FooterBar }
});