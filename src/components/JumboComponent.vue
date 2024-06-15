<template>
    <div id="jumbo">
        <div class="w-100 d-flex position-relative">
          <div class="flex-grow-1 rotated-left">
            <img src="/images/bg-header.png" alt="logo" class="w-100" style="height: 400px;">
          </div>
          <div class="d-flex justify-content-center align-items-center" id="logo-nav">
            <img src="/images/logo.png" alt="logo" class="w-100" style="height: 400px; width: 700px;">
          </div>
          <div class="flex-grow-1">
            <img src="/images/bg-header.png" alt="logo" class="w-100" style="height: 400px;">
          </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "JumboComponent",
    data() {
        return {
        }
    },
    methods: {
    },
    mounted() {
    }

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/_variables.scss' as *;
#jumbo {
    background-color: $color-blue;
    width: 100%;

    #logo-nav {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .rotated-left {
    transform: rotate(180deg);
  }
}
</style>