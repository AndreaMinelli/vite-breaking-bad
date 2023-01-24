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
      store.isLoading = true;
      axios
        .get(store.pokemonUri)
        .then((res) => {
          store.pokemonList = res.data.docs;
        })
        .catch()
        .then(() => {
          store.isLoading = false;
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
