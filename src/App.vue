<script>
import axios from "axios";
import { store } from "./components/data/store.js";
import AppMain from "./components/AppMain.vue";
export default {
  data() {
    return {
      store,
    };
  },
  components: { AppMain },
  methods: {
    fetchPokemonList() {
      axios.get(store.pokemonUri).then((res) => {
        store.pokemonList = res.data.docs;
      });
    },
  },
  mounted() {
    this.fetchPokemonList();
  },
};
</script>

<template>
  <app-main></app-main>
</template>

<style lang="scss">
@use "./assets/scss/style.scss";
</style>
