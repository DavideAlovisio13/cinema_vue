<template>
  <header>
    <div class="navbar navbar-expand-lg p-0" id="header-nav">
      <div class="container-fluid d-flex flex-column p-0">
        <div class="w-100 d-flex align-items-center" style="height: 100px">
          <ul class="navbar-nav w-100 d-flex justify-content-evenly py-1 fs-1">
            <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
              <router-link class="nav-link" :to="{ name: item.routeName }">
                {{ item.name }}
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="http://localhost:8000">Admin Area</a>
            </li>
          </ul>
        </div>
      </div>
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
        }
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/_variables.scss' as *;
#header-nav {
  background-color: $color-blue;
  
  .nav-link {
    color: $color-red;

    &:hover {
      color: $color-white;
      transform: scale(1.1);
    }
  }
}
</style>
