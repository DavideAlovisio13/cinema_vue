<template>
  <HeaderComponent />
  <main>
    <router-view></router-view>
  </main>
  <FooterComponent />
</template>

<script>
import axios from "axios";
import { store } from "./store";

import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent
  },
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
      }).catch((error) => {
        // console.log(error);
        this.$router.push({ name: 'not-found' });
      }).finally();
    },
  },

  mounted() {
    this.getMovies();
  }
};
</script>

<style lang="scss" scoped></style>
