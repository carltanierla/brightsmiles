// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import home from '../pages/home.vue'
import onlineForm from '../pages/onlineForm.vue'

// 1. Define your route components mapping
const routes = [
    {
        path: '/',
        name: 'Home',
        component: home
    },
    {
        path: '/onlineform',
        name: 'OnlineForm',
        component: onlineForm
    },
]

// 2. Create the router instance
const router = createRouter({
    history: createWebHistory(), // Uses clean URLs without hash (#) fragments
    routes
})

export default router