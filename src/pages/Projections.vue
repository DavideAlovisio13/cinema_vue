<template>
    <div class="main-container">
        <h1>Projections</h1>
        <ul>
            <li v-for="item in projections" :key="item.id">
                <span>
                    data: {{ item.date_projection }}
                </span>
                <span> &nbsp;
                    prezzo: {{ item.ticket_price }}
                </span>
                <span>&nbsp;
                    fIlm: {{ item.movie.title }}
                </span>
                <span>&nbsp;
                    sala: {{ item.room.name }}
                </span>
                <span>&nbsp;
                    orario: {{ item.slot.time_slot }}
                </span>

            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";
import { store } from "../store";
export default {
    name: "Projections",

    data() {
        return {
            store,
            projections: [],
        };
    },
    methods: {
        getProjections() {
            axios.get(this.store.apiBaseUrl + "/projections").then((response) => {
                console.log(response.data);
                this.projections = response.data.results;

            });
        },
    },
    mounted() {
        this.getProjections();
    },
};
</script>

<style lang="scss" scoped></style>