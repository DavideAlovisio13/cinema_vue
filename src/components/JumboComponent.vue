<template>
    <div id="jumbo" class="d-flex align-items-center justify-content-center">
        <img src="/images/drive-in.png" alt="">
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
    width: 100%;
    height: calc(100vh - 90px);
    margin-top: 90px;
    padding: 30px 0;
    img {
        height: 100%;
        object-fit: cover;
    }
    
  }
</style>