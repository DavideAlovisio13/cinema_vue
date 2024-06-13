<template>
  <h1>Rooms</h1>
  <ul>
    <li v-for="room in rooms" :key="room.id">{{ room.name }}</li>
  </ul>
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