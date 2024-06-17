<template>
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    <div class="card">
      <img :src="movie.thumb" class="card-img-top" :alt="movie.title" />
    </div>
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae voluptates repellat voluptatum quod vel dolorem eveniet odit dicta ad aut adipisci aliquam non quisquam in ipsam deserunt a harum natus, nobis voluptatibus veritatis eos laboriosam temporibus quidem. Unde dolores aperiam ducimus, reprehenderit sapiente amet deserunt culpa ratione quidem saepe temporibus sint inventore ipsum facilis quaerat corrupti illo sit autem pariatur rerum ipsam repudiandae quasi ipsa? Sapiente ipsum dolores odio eius dolore, ratione quibusdam vitae nobis. Quo at consectetur ab officia ex adipisci fuga, quas perspiciatis beatae inventore sunt nisi reprehenderit corrupti quisquam. Corrupti, cumque veritatis laboriosam, accusantium consectetur maxime distinctio tempora voluptatem ut nemo sapiente, inventore labore libero commodi in. Quis cumque repellat iure culpa quia expedita, soluta magnam saepe, adipisci dolores numquam, iusto tempora quasi atque architecto accusamus quidem animi. Et beatae ipsa voluptatibus facere ea voluptate rem placeat minima illo neque quam assumenda eos sequi accusantium vero dolorum, voluptatum expedita, repudiandae id. Aperiam rem, soluta dolor exercitationem dolorum autem vitae veniam natus repudiandae deserunt dolorem quos est sint delectus itaque. Accusantium reiciendis aliquam hic nesciunt doloribus, omnis fuga necessitatibus dolores nisi nihil quaerat animi nostrum fugiat! Labore porro nemo cupiditate, voluptatum reiciendis praesentium vel veritatis odit, nam sunt assumenda nulla eveniet tempore saepe soluta quae distinctio est dicta id dolores consequuntur. Mollitia dicta nesciunt distinctio, explicabo odio corporis tenetur debitis voluptatem? Dignissimos eaque voluptas esse explicabo itaque perferendis quis tenetur vitae dicta ab quia expedita molestias sunt at quo magnam dolorem blanditiis, quas provident. Minus nemo ipsum facilis placeat quidem temporibus corrupti deleniti exercitationem nam ea amet nisi cum saepe minima ut, necessitatibus excepturi laudantium sunt veritatis commodi similique. Voluptas veritatis minus illo dolor aspernatur, exercitationem laborum expedita ad non magnam, nihil laboriosam, distinctio illum. Laborum ad expedita, velit maxime voluptas a voluptatibus voluptatem consequatur quos accusamus iure, qui cum earum, maiores quas? Adipisci possimus delectus quia, perspiciatis magni dignissimos? Placeat vero iusto laboriosam! Iure minima dolor iusto sunt sapiente architecto corporis quo repellendus reprehenderit nesciunt quos labore, delectus modi eveniet vitae sit consectetur cum! Iste mollitia corrupti cupiditate consequuntur, optio dolorem soluta corporis voluptate harum impedit voluptates velit inventore sed. Quod illum vel unde, explicabo at minima exercitationem nulla blanditiis doloribus alias consectetur, obcaecati nesciunt assumenda cum harum atque dicta, omnis consequatur quas repellat dignissimos magnam praesentium! Obcaecati eius officia iure quibusdam magnam esse sequi, beatae harum veritatis consequatur assumenda molestiae cupiditate velit repellat? Aspernatur similique adipisci omnis quaerat dignissimos laborum, nulla consectetur deleniti ut veritatis quos iusto sequi ipsum beatae nemo alias asperiores tenetur. Laborum adipisci, ab veritatis ipsum earum tenetur natus asperiores dolore sint sapiente perspiciatis veniam eos maiores dolores aliquid odio blanditiis nesciunt eius magnam modi, excepturi beatae perferendis consequuntur. Dolorum nobis mollitia debitis nemo quaerat labore totam placeat aliquid itaque impedit at incidunt saepe ratione, dolore tenetur possimus nesciunt assumenda soluta praesentium consequatur nulla deleniti. Nesciunt, veniam! Animi dolorem cupiditate quas iste eveniet. Iusto necessitatibus est dolores aspernatur praesentium eum mollitia voluptas ipsum enim error? Ea eveniet expedita minus, aliquam itaque fugiat dolor?
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
.modal-dialog {
  max-width: 50%;
  aspect-ratio: 1 / 1;
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
</style>
