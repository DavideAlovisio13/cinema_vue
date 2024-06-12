<template>
  <h1>Movies</h1>
  <ul>
    <li v-for="movie in movies" :key="movie.id">{{ movie.title }}</li>
  </ul>
</template>

<script>
import axios from "axios";
import { store } from "../store";

export default {
  name: "Movies",

  data() {
    return {
      store,
      movies: [],
    };
  },
  methods: {
    getMovies() {
      axios.get(this.store.apiBaseUrl + "/movies").then((response) => {
        console.log(response.data);
        this.movies = response.data.results;
      });
    },
  },
  mounted() {
    this.getMovies();
  },
};
</script>

<style lang="scss" scoped></style>
