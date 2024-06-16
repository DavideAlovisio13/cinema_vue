<template>
    <div class="main-container container">
        <h1>{{ movie.title }}</h1>
        <div class="row">
            <div class="col-3">
                <div class=" d-flex justify-content-center"><img :src="movie.thumb" :alt="movie.title"
                        style="width: 350px"></div>
            </div>
            <div class="col-9">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Data </th>
                            <th scope="col">Ora </th>
                            <th scope="col">Sala</th>
                            <th scope="col">Prezzo</th>
                        </tr>
                    </thead>
                    <tbody v-for="projection in movie.movie_rooms" :key="projection.id">
                        <tr>
                            <th scope="row">{{ projection.date_projection }}</th>
                            <td>{{ projection.slot.time_slot }}</td>
                            <td>{{ projection.room.name }}</td>
                            <td>{{ projection.ticket_price }}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
        <div class="row">

            <div class="col-12">
                <h3>Recensioni</h3>

            </div>

        </div>
    </div>

</template>

<script>
import { store } from '@/store';
export default {
    name: "MovieComponent",
    data() {
        return {
            store,
            movie: {}
        }
    },

    methods: {
        findMovie() {
            this.movie = {};
            const movie = this.store.movies.find((movie) => {
                return movie.slug == this.$route.params.slug
            })

            this.movie = movie;
            console.log(movie);
        }
    },

    mounted() {
        this.findMovie()
    }
}
</script>

<style lang="scss" scoped>
div.col-9 {
    padding: 20px;
}
</style>