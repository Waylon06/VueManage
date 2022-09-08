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
                name: 'user',
                component: () => import('../views/User')
            },
            {
                path: '/mall',
                name: 'mall',
                component: () => import('../views/Mall')
            },
            {
                path: '/page1',
                name: 'page1',
                component: () => import('../views/Other/Page1')
            },
            {
                path: '/page2',
                name: 'page2',
                component: () => import('../views/Other/Page2')
            },
        ]
    }

]

const router = new VueRouter({
    mode: 'history',
    routes,

})

export default router