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
            <ul>
              <li>{{ movie.title }}</li>
              <li>{{ movie.description }}</li>
              <li>{{ movie.language }}</li>
              <li>{{ movie.minutes }}</li>
              <li>{{ movie.release_date }}</li>
            </ul>
          </div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
          mollitia aut exercitationem repellat aliquam, laborum fugit cumque ab
          impedit quo deserunt sunt expedita, laboriosam quibusdam hic vero
          commodi voluptas similique repellendus blanditiis possimus quidem.
          Perspiciatis, ea sint non sit doloribus aut veritatis itaque fugiat
          error. Quasi veniam hic sequi eveniet quia autem odit officiis quae
          totam dolorum labore aperiam nesciunt nostrum perferendis et id
          cupiditate iusto, optio corrupti provident nihil rerum illum itaque
          omnis? Neque culpa quod voluptas harum laboriosam veniam ipsum
          veritatis molestias minima ad nam aspernatur dolorem nobis numquam
          quibusdam nisi nulla dolorum, non aliquid voluptate! Aliquam
          necessitatibus saepe quos ex natus nisi inventore placeat perspiciatis
          voluptatum, officiis numquam in similique nulla consectetur sequi,
          quae dolor! Non hic ipsum vero odio necessitatibus, magnam, error
          ipsam nihil quod dolores atque eveniet pariatur labore eum id libero
          ducimus. Tempore nostrum veniam sapiente! Quaerat, quos enim ea
          suscipit mollitia in reprehenderit dolorem minus perferendis amet?
          Sunt, harum vel. Commodi libero, nisi corporis dolor nihil nobis
          consequuntur adipisci ducimus quaerat molestiae consectetur cumque
          nam. Corrupti veritatis eos suscipit, quo nesciunt corporis odit
          aspernatur voluptate omnis repellat harum deserunt aut perspiciatis
          itaque id iusto inventore illum doloribus officia saepe nobis, ipsa
          odio aperiam. Eaque dolor earum, aut error perferendis, accusantium
          quidem iure quibusdam eius rerum repellendus pariatur corporis
          voluptatem facere reiciendis ab nam ipsam, similique quisquam quia?
          Nihil quod consequuntur velit in nemo molestiae tenetur cum
          consectetur molestias libero voluptatibus ipsam, odio veniam aut
          pariatur officia atque corrupti adipisci obcaecati accusamus quidem
          dicta, delectus officiis! Deleniti velit iure labore provident. Sunt
          magni velit minima qui harum deleniti, quos omnis id accusamus quo
          quis fuga cupiditate sit ipsa modi hic quia corporis. Doloribus beatae
          libero animi praesentium mollitia, earum adipisci repellendus id cum
          nostrum, necessitatibus, illum eveniet pariatur vero at corrupti
          repudiandae. Quam deleniti error architecto culpa molestias cupiditate
          nostrum, voluptate quas quidem nemo eligendi pariatur enim ipsum
          incidunt dolor illo totam ab tenetur temporibus. Explicabo ea adipisci
          quia sequi provident illum a eaque quam, perferendis delectus nihil
          veritatis repellendus similique eligendi vitae minima! Voluptates
          autem, inventore omnis dolores similique ipsum et aspernatur
          laboriosam voluptatem, recusandae asperiores praesentium blanditiis
          nemo harum laudantium ipsa aut natus deserunt eaque fugit eum! Cumque
          quasi eum magnam iure eveniet in qui laboriosam odio sit autem ratione
          vel voluptates mollitia aspernatur molestiae ut, debitis, natus veniam
          libero illo minus? Ipsam sunt repudiandae voluptates harum dolores,
          itaque magnam iste nisi assumenda iusto? Accusantium officia rerum
          incidunt libero saepe doloremque ipsa excepturi voluptatum assumenda,
          ducimus error, delectus similique harum? Mollitia vitae ex, vero enim
          quidem laborum optio aliquid blanditiis et similique velit repellendus
          illo. Dolores velit deserunt vitae nisi ratione dolorem cumque dicta,
          fugiat sed voluptates corrupti soluta nam repellendus ex voluptate
          totam? Ducimus quibusdam ullam temporibus, veritatis provident magni
          nihil fugit, perspiciatis officiis magnam id dolore rem omnis
          architecto, ipsa optio fugiat quod repudiandae delectus culpa
          similique a quisquam corporis nostrum. Quod obcaecati sit cumque,
          natus magnam incidunt! Quibusdam, laborum quisquam ab modi aspernatur
          tempore unde reprehenderit quia incidunt ea?
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
        padding: 0;
        position: relative;
        background-color: $color-red;
        button {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 35px;
          height: 35px;
        }
        .movie-card {
          width: 1000px;
          aspect-ratio: 1 / 1;
          background-image: url(/images/modal-bg.png);
          background-repeat: no-repeat;
          background-size: cover;
        }
      }
    }
  }
}
</style>
