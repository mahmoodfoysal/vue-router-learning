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
    },
    {
        path: '/faq', name:'FAQ', component: () => import('/src/components/FAQ/FAQ.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active-links'
})

export default router