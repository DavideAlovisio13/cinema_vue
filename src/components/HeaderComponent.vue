<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav d-flex w-100">
            <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
              <router-link class="nav-link" :to="{ name: item.routeName }">
                {{ item.name }}
              </router-link>
            </li>
            <li class="nav-item ms-auto">
              <a class="nav-link" href="http://localhost:8000">Admin Area</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
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

<style lang="scss" scoped></style>
