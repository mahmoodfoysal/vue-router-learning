import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/', name: 'Home', component: () => import('/src/components/Home/Home.vue')
    },
    {
        path: '/about', name: 'About', component: () => import('/src/components/About/About.vue')
    },
    {
        path: '/contact', name: 'Contact', component: () => import('/src/components/Contact/Contact.vue')
    },
    {
        path: '/products', name: 'Products', component: () => import('/src/components/Products/Products.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router