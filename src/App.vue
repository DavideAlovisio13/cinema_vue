<template>
  <HeaderComponent />
  <!-- <JumboComponent /> -->
  <main>
    <router-view v-slot="{ Component }">
      <transition name="MoveUp">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
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

main {
    width: 100%;
    height: calc(100vh - 90px);
    margin-top: 90px;
    padding: 30px 0;
    overflow-y: scroll;

    /* Per browser WebKit (Chrome, Safari) */
    &::-webkit-scrollbar {
        display: none; /* Nasconde la scrollbar */
    }

    /* Per Firefox */
    scrollbar-width: none; /* Nasconde la scrollbar */

    /* Soluzione cross-browser per nascondere la scrollbar ma mantenere lo scorrimento */
    &.hidden-scrollbar {
        overflow: hidden;

        &::before {
            content: "";
            display: block;
            height: 100%;
            overflow-y: scroll;
            visibility: hidden;
        }

        > * {
            overflow-y: scroll;
            margin-right: -17px; /* Regola questo valore se necessario */
            padding-right: 17px; /* Regola questo valore se necessario */
        }
    }
}
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
