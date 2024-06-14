<template>
    <div>
        <h1>Proiezioni della settimana</h1>

        <ul>
            <li v-for="(projection) in projections" :key="projection.id">
                data proiezione: {{ projection.date_projection }}, titolo {{  projection.movie.title }}
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
                this.projections = response.data.data;
                console.log(this.projections);
            })
        }
    },
    mounted() {
        this.getWeeklyProjections();
    }
}
</script>

<style lang="scss" scoped></style>