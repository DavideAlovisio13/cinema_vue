<template>
  <main>
    <router-view />
  </main>
</template>

<script>
import axios from 'axios';
import { store } from './store'
  export default {
    name: 'App',
    data() {
      return {
        store
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>