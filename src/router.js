import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import Movies from "./pages/Movies.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: AppHome
        },
        {
            path: '/movies',
            name: 'movies',
            component: Movies
        }
    ]
});

export { router };