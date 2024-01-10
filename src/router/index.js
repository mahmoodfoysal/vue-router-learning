import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home/Home.vue';
import About from '/src/components/About/About.vue';
import Contact from '/src/components/Contact/Contact.vue';
import Products from '/src/components/Products/Products.vue';

const routes = [
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

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router