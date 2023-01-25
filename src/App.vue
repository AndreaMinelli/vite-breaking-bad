<script>
import axios from "axios";
import { store } from "./components/data/store.js";
import AppMain from "./components/AppMain.vue";
export default {
  data() {
    return {
      store,
      pokemonTypes: [
        "Ground",
        "Water",
        "Flying",
        "Bug",
        "Ice",
        "Grass",
        "Psychic",
        "Ghost",
        "Rock",
        "Poison",
        "Electric",
        "Fighting",
        "Dark",
        "Normal",
        "Fairy",
        "Fire",
        "Steel",
        "Dragon",
      ],
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
  <app-main :pokemon-types="pokemonTypes"></app-main>
</template>

<style lang="scss">
@use "./assets/scss/style.scss";
</style>
