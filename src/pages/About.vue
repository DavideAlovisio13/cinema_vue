<template>
    <div>
        <div class="container">
            <div class="title d-flex align-items-center">
                <img class="icon" src="/images/movie.png" alt="Movie section" />
                <img class="text" src="/images/movie-title.png" alt="Movie title" />
            </div>
            <div class="d-flex align-items-center justify-content-center">
                <img src="/images/Ilnostroteam.png" alt="team">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "About",
}
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
</style>