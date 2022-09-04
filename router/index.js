import Vue from 'vue'
import VueRouter from "vue-router";
import Main from '../views/Main'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main,
        children: [
            {
                path: ' /home',
                name: 'home',
                component: () => import('../views/Home/index.vue')
            },
            {
                path: '/user',
                name: 'User',
                component: () => import('../views/User')
            }
        ]
    }

]

const router = new VueRouter({
    mode: 'history',
    routes,

})

export default router