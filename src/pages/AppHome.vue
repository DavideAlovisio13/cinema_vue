<template>
    <div class="main-container">
        <div class="content">
            <div class="left"> 
                <h1 class="text-center">Proiezioni della settimana</h1>
                
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vel odio asperiores! Corporis molestiae
                accusamus explicabo quibusdam nihil velit, quia sequi ad culpa, repellat, ex omnis cumque reiciendis
                dolores enim odio! At, laudantium ipsa omnis quae reiciendis illum quis corrupti distinctio voluptates
                tempore ea magnam placeat dolore? Sed, exercitationem ullam ipsam voluptas temporibus fugiat magni, sunt
                eligendi unde error sint omnis quam a adipisci aperiam architecto corporis distinctio nulla nihil!
            </div>
            <div class="right">
                <carousel :items-to-show="1">
                    <slide v-for="slide in projections" :key="slide" class="mt-5">
                        <RouterLink :to="{ name: 'movie-detail', params: { slug : slide.slug } }"><img :src="slide.thumb" :alt="slide.name" style="width: 300px" class="shadow-sm"></RouterLink>
                    </slide>
                    <template #addons>
                        <navigation />
                        <pagination />
                    </template>
                </carousel>
            </div>
        </div>
    </div>
    <div class="cont-car">
        <div class="card-custom" v-for="room in store.rooms" :key="room">
            <img :src="room.img_room" :alt="room.name">
            <div class="card-content">
                <svg>...</svg>
            </div>
            <div class="backdrop"></div>
        </div>
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import axios from "axios";
import { store } from "../store";
export default {
    name: "AppHome",
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    data() {
        return {
            store,
            projections: [],
        }
    },
    methods: {
        getWeeklyProjections() {
            axios.get(this.store.apiBaseUrl + "/movies").then((response) => {
                console.log(response.data);
                this.projections = response.data.results;
                this.store.movies = response.data.results;
            })
        }
    },
    mounted() {
        this.getWeeklyProjections();
    }
}
</script>

<style lang="scss" scoped>
.content {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left {
            width: 50%;
        }

        .right {
            width: 50%;
        }
    }
.cont-car {
    width: 100%;
    display: flex;

    .card-custom {
        width: 300px;
        height: 450px;
        min-width: 70px;
        border-radius: 30px;
        flex-grow: 1;
        position: relative;
        transition: flex-grow 0.5s ease;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        .card-custom:hover {
            flex-grow: 7;
        }
    }
}
</style>