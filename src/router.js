import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import Movies from "./pages/Movies.vue";
import Rooms from "./pages/Rooms.vue";
import Projections from "./pages/Projections.vue";

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
        },
        {
            path: '/rooms',
            name: 'rooms',
            component: Rooms
        },
        {
            path: '/projections',
            name: 'projections',
            component: Projections
        }
        
    ]
});

export { router };