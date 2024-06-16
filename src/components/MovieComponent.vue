<template>
  <div class="card">
    <img :src="movie.thumb" class="card-img-top" :alt="movie.title" />
  </div>
</template>

<script>
import { store } from "@/store";
export default {
  name: "MovieComponent",
  props: {
    movie: Object,
  },
  data() {
    return {
      store,
    };
  },

  methods: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
.card {
    height: 400px;
    overflow: hidden;
    border-radius: 20px;
    border: 4px solid #DA654B;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        transition-duration: 0.3s;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
    }
}
</style>
