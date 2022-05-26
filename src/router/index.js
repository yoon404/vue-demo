import {createRouter, createWebHistory} from 'vue-router'
import User from '../views/User.vue'
import Layout from '../layout/Layout.vue'
import Person from '../views/Person.vue'

const routes = [
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        redirect: "/user",
        children: [
            {
                path: 'user',
                name: 'User',
                component: User,
            },
            {
                path: 'person',
                name: 'Person',
                component: Person,
            },
            {
                path: 'order',
                name: 'Order',
                component: import("@/views/Order"),
            },
            {
                path: 'item',
                name: 'Item',
                component: import("@/views/Item"),
            }]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import("@/views/Login")
    },
    {
        path: '/register',
        name: 'register',
        component: () => import("@/views/Register")
    }
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
