<template>
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    :data-bs-target="`#${movie.id}Modal`"
  >
    <div class="card">
      <img :src="movie.thumb" class="card-img-top" :alt="movie.title" />
    </div>
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    :id="`${movie.id}Modal`"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-body">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <ul>
            <li>{{ movie.title }}</li>
            <li>{{ movie.description }}</li>
            <li>{{ movie.language }}</li>
            <li>{{ movie.minutes }}</li>
            <li>{{ movie.release_date }}</li>
          </ul>
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
@use "../assets/styles/partials/_variables.scss" as *;
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
.modal {
  .modal-dialog {    
    .modal-content {
      overflow: hidden;
      .modal-body {
        padding: 0 40px;
        background-image: url(/images/modal-bg.png);
        background-color: $color-red;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
  }
}
</style>
