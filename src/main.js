import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home/Home.vue';
import About from './components/About/About.vue';
import Contact from './components/Contact/Contact.vue';
import Products from './components/Products/Products.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', name: 'Home', component: Home
        },
        {
            path: '/about', name: 'About', component: About
        },
        {
            path: '/contact', name: 'Contact', component: Contact
        },
        {
            path: '/products', name: 'Products', component: Products
        }
    ]
})


createApp(App).use(router).mount('#app')
