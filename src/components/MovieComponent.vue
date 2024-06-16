<template>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    <div class="card">
      <img :src="movie.thumb" class="card-img-top" :alt="movie.title" />
    </div>
  </button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
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
button {
    width: 100%;
    margin: 0;
    padding: 0;
    border: none;
    border-radius: 20px;
  .card {
    height: 400px;
    overflow: hidden; 
    border-radius: 20px;  
    border: 4px solid #da654b;
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
}
</style>
