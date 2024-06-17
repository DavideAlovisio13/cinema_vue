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
          <div class="movie-card">
            <div class="basic-info text-center px-5">
              <h2>{{ movie.title }}</h2>
              <p>
                <small
                  >Release: {{ movie.release_date }} | Language:
                  {{ movie.language }} | Minutes: {{ movie.minutes }}</small
                >
              </p>
              <p>{{ movie.description }}</p>
            </div>
            <ReviewCarousel
              class="review-carousel ms-auto"
              :reviews="movie.reviews"
            />
            <div class="projections-title text-center">
              <div class="title d-flex align-items-center justify-content-center">
                <img class="icon" src="/images/projections-icon.png" alt="Movie section" />
                <img
                  class="text"
                  src="/images/projections-title.png"
                  alt="Movie title"
                />
              </div>
              <button>
                <i class="fa-solid fa-angles-down"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "@/store";
import ReviewCarousel from "./ReviewCarousel.vue";
export default {
  name: "MovieComponent",
  components: {
    ReviewCarousel,
  },
  props: {
    movie: Object,
  },
  data() {
    return {
      store,
    };
  },

  methods: {},
  computed: {
    trimmedText() {
      const words = this.text.split(" ");
      if (words.length > this.maxWords) {
        return words.slice(0, this.maxWords).join(" ") + "...";
      }
      return this.text;
    },
  },
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
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
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
    width: auto;
    max-width: 800px;
    .modal-content {
      border: none;
      overflow: hidden;
      .modal-body {
        padding: 0;
        position: relative;
        background-color: $color-red;
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
        button {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 35px;
          height: 35px;
        }
        .movie-card {
          width: 800px;
          aspect-ratio: 1 / 1;
          background-image: url(/images/modal-bg.png);
          background-repeat: no-repeat;
          background-size: cover;
          .basic-info {
            padding-top: 150px;
            h2 {
              color: $color-white;
              font-size: 3rem;
            }
            p {
              color: $color-white;
              font-style: italic;
              &:first-of-type {
                margin: 0;
                margin-top: -15px;
              }
            }
          }
          .review-carousel {
            position: absolute;
            right: 10px;
            top: calc(50% - 95px);
          }
          .projections-title {
            margin-top: 370px;
            .title {
              .icon {
                width: 10ch;
              }
              .text {
                width: 250px;
              }
            }
            button {
              position: static;
              background-color: transparent;
              color: $color-blue;
              font-size: 1.5rem;
              transition: color 0.3s, transform 0.3s;
              &:hover {
                color: $color-white;
                transform: scale(1.4);
              }
            }
          }
        }
      }
    }
  }
}
</style>
