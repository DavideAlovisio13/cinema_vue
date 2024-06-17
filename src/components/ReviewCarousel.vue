<template>
  <div
    class="carousel-container d-flex align-items-center justify-content-between"
    v-if="reviews.length"
  >
    <button class="btn" @click="prevReview">
      <i class="fa-solid fa-chevron-left"></i>
    </button>

    <div class="review-card">
      <p>{{ currentReview.comment }}</p>
      <p>
        <strong>Rating: {{ currentReview.rating }}</strong>
      </p>
      <p>
        <strong>- {{ currentReview.author }}</strong>
      </p>
    </div>

    <button class="btn" @click="nextReview">
      <i class="fa-solid fa-chevron-right"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "ReviewCarousel",
  props: {
    reviews: Array,
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    prevReview() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.reviews.length - 1;
      }
    },
    nextReview() {
      if (this.currentIndex < this.reviews.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    },
    startAutoAdvance() {
      this.intervalId = setInterval(this.nextReview, 7000);
    },
    stopAutoAdvance() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    },
  },
  mounted() {
    this.startAutoAdvance();
  },
  beforeDestroy() {
    this.stopAutoAdvance();
  },
  computed: {
    currentReview() {
      return this.reviews[this.currentIndex];
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel-container {
  width: 350px;
  height: 250px;
  background-color: black;
}
</style>
