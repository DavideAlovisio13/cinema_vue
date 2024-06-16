<template>
  <div class="main-container">
    <section class="showcase">
      <div class="container-fluid p-0">
        <div class="row g-0" v-for="room in rooms" :key="room.id">
          <div class="col-lg-6 order-lg-2 text-white showcase-img"
            :style="{ backgroundImage: `url(${room.img_room})`}"></div>
          <div class="col-lg-6 order-lg-1 my-auto showcase-text">
            <h2>Fully Responsive Design</h2>
            <p class="lead mb-0">When you use a theme created by Start Bootstrap, you know that the theme will look
              great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
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

<style lang="scss" scoped></style>