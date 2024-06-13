<template>
    <div>
        <h1>Proiezioni della settimana</h1>

        <ul>
            <li v-for="projection in projections" :key="projection.id">
                {{ projection.movie.title }}, data proiezione: {{ projection.date_projection }}
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
            axios.get(this.store.apiBaseUrl + "/weekly_movies").then((response) => {
                console.log(response.data);
                this.projections = response.data.results;
            })
        }
    },
    mounted() {
        this.getWeeklyProjections();
    }
}
</script>

<style lang="scss" scoped></style>