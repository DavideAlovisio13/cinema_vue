<template>
  <div class="main-container">
    <section class="rooms">
      <div class="container">
        <div class="title d-flex align-items-center">
          <div class="rounded-circle">
            <img class="icon" src="/images/rooms.png" alt="Rooms section" />
          </div>
          <img class="text" src="/images/movie-title.png" alt="Movie title" />
        </div>
        <div id="carouselExampleSlidesOnly" class="carousel slide pt-5" data-bs-ride="carousel">
          <div class="position-absolute " id="title" style="width: 600px; right: -300px; top: -100px; z-index: 100;"><img
              src="/images/Thank(1).png" alt="title" style=" width: 100%; height: 100%;"></div>
          <div class="carousel-inner position-relative" style="border-radius: 40px;">
            <div class="position-absolute w-100 h-100 z-1 "><img src="/images/rooms-border.png" alt="border"
                style=" width: 100%; height: 100%; object-fit: fill"></div>
            <div class="carousel-item active">
              <img src="/images/Kubrik.jpg" class="d-block w-100" style="width: 400px; height: 600px;" alt="Kubrik">
              <div class="carousel-caption position-absolute"
                style="">
                <h5>{{ store.rooms[0].name }}</h5>
                <p>{{ store.rooms[0].alias }}</p>
                <p>{{ store.rooms[0].isense }}</p>
                <p>{{ store.rooms[0].base_price }}€</p>
                <p>{{ store.rooms[0].seats }} </p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="/images/Hitchcock.jpg" class="d-block w-100" style="width: 400px; height: 600px;"
                alt="Hitchcock">
              <div class="carousel-caption position-absolute"
                style="">
                <h5>{{ store.rooms[1].name }}</h5>
                <p>{{ store.rooms[1].alias }}</p>
                <p>{{ store.rooms[1].isense }}</p>
                <p>{{ store.rooms[1].base_price }}€</p>
                <p>{{ store.rooms[1].seats }} </p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="/images/Miyazaki.jpg" class="d-block w-100" style="width: 400px; height: 600px;" alt="Miyazaki">
              <div class="carousel-caption position-absolute"
                style="">
                <h5>{{ store.rooms[2].name }}</h5>
                <p>{{ store.rooms[2].alias }}</p>
                <p>{{ store.rooms[2].isense }}</p>
                <p>{{ store.rooms[2].base_price }}€</p>
                <p>{{ store.rooms[2].seats }} </p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="/images/Spilberg.jpg" class="d-block w-100" style="width: 400px; height: 600px;" alt="Spilberg">
              <div class="carousel-caption position-absolute" style="">
                <h5>{{ store.rooms[3].name }}</h5>
                <p>{{ store.rooms[3].alias }}</p>
                <p>{{ store.rooms[3].isense }}</p>
                <p>{{ store.rooms[3].base_price }}€</p>
                <p>{{ store.rooms[3].seats }} </p>
              </div>
            </div>
          </div>
          <div class="carousel-indicators mt-3">
            <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="0" class="active">
              <img src="/images/Kubrik.jpg" alt="Kubrik">
            </button>
            <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="1" class="active">
              <img src="/images/Hitchcock.jpg" alt="Hitchcock">
            </button>
            <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="2" class="active">
              <img src="/images/Miyazaki.jpg" alt="Miyazaki">
            </button>
            <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="3" class="active">
              <img src="/images/Spilberg.jpg" alt="Spilberg">
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
import axios from "axios";
import { store } from "../store";

export default {
  name: "Rooms",

  data() {
    return {
      store,
      rooms: [],
    };
  },
  methods: {
    getRooms() {
      axios.get(this.store.apiBaseUrl + "/rooms").then((response) => {
        console.log(response.data);
        this.rooms = response.data.results;
      });
    },
  },
  mounted() {
    this.getRooms();
  },
};
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 20px;

  .icon {
    width: 70px;
  }

  .text {
    width: 200px;
  }
}

.carousel-indicators {
  img {
    width: 200px;
    display: block;
    border: 4px solid #da654b;
  }

  button {
    width: max-content !important;
    margin: 0 30px !important;
  }
}
</style>