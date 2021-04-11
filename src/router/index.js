import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Movie from '../views/Movie.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/movie/:id',
        name: 'Movie',
        component: Movie
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    // history: createWebHistory(),
    routes
})

export default router
