<template>
  <header>
    <div class="navbar navbar-expand-lg p-0" id="header-nav">
      <ul class="navbar-nav w-100 d-flex justify-content-evenly py-1 fs-1">
        <li
          class="nav-item d-flex align-items-center"
          v-for="(item, index) in menuItems"
          :key="index"
        >
          <router-link class="nav-link" :to="{ name: item.routeName }">
            {{ item.name }}
          </router-link>
        </li>
        <li class="nav-item d-flex align-items-center">
          <a class="nav-link" href="http://localhost:8000">Admin Area</a>
        </li>
      </ul>
    </div>
    <div >
      <a class="nav-link" href="http://localhost:8000">Admin Area</a>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      menuItems: [
        {
          name: "Home",
          routeName: "home",
        },
        {
          name: "Movies",
          routeName: "movies",
        },
        {
          name: "Rooms",
          routeName: "rooms",
        },
        {
          name: "Projections",
          routeName: "projections",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/_variables.scss" as *;

header {
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
  height: 90px;
  width: 100%;

  #header-nav {
    position: relative;
    width: 60%;
    height: 100%;
    margin: 0 auto;
    background-color: #2b2e3d;
    clip-path: polygon(0 0, 100% 0, 98% 100%, 2% 100%);

    ul {
      background-color: #fcf6dd;
      position: absolute;
      top: 4px;
      left: 4px;
      width: calc(100% - 8px);
      height: calc(100% - 8px);
      clip-path: polygon(0.3% 0, 99% 0, 97.3% 100%, 2% 100%);
    }

    .nav-link {
      color: $color-red;
      font-size: 2.3rem;
      padding: 0;
      margin: 0;
      transition: filter 0.3s, transform 0.3s;

      a {
        line-height: 0;
      }

      &:hover {
        filter: brightness(1.2);
        transform: scale(1.4);
      }
    }
  }
}
</style>
