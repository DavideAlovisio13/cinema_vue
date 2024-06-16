<template>
  <HeaderComponent />
  <JumboComponent />
  <!-- <main>
    <router-view v-slot="{ Component }">
      <transition name="MoveUp">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
  </main>
  <FooterComponent /> -->
</template>

<script>
import axios from "axios";
import { store } from "./store";
import JumboComponent from "./components/JumboComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
export default {
  name: "App",
  components: {
    HeaderComponent,
    JumboComponent,
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
    getRooms() {
      axios.get(this.store.apiBaseUrl + "/rooms").then((response) => {
        console.log(response.data);
        this.store.rooms = response.data.results;
      });
    },
  },

  mounted() {
    this.getMovies();
    this.getRooms();
    console.log(this.store.rooms)
  }
};
</script>

<style lang="scss" scoped>
// transitions css
.moveUp-enter-active {
  animation: fadeIn 3s ease-in
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 50;
  }

  100% {
    opacity: 100;
  }
}

.moveUp-leave-active {
  animation: moveUp 3s ease-in;
}

@keyframes moveUp {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-400px);
  }
}
</style>
