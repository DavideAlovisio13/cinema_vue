<template>
    <div class="main-container">
        <h1>{{ movie.title }}</h1>
        <img :src="movie.thumb" :alt="movie.title">
        <ul>
            <li v-for="projection in movie.movie_rooms" :key="projection.id">
                {{ projection.date_projection }}
            </li>
        </ul>
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

<style lang="scss" scoped></style>