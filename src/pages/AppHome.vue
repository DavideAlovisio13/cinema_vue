<template>
    <div>
        <h1>Proiezioni della settimana</h1>

        <ul>
            <li v-for="projection in projections" :key="projection.id">
                <RouterLink :to="{ name: 'movie-detail', params: { slug : projection.slug } }"> {{ projection.title }} </RouterLink>
            </li>
        </ul>

    </div>
</template>

<script>
import axios from "axios";
import { store } from "../store";
export default {
    name: "AppHome",
    data() {
        return {
            store,
            projections: []
        }
    },
    methods: {
        getWeeklyProjections() {
            axios.get(this.store.apiBaseUrl + "/movies").then((response) => {
                console.log(response.data);
                this.projections = response.data.results;
                this.store.movies = response.data.results;
            })
        }
    },
    mounted() {
        this.getWeeklyProjections();
    }
}
</script>

<style lang="scss" scoped></style>