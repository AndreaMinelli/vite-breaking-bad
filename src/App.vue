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
    fetchPokemonList(url) {
      store.isLoading = true;
      axios
        .get(url)
        .then((res) => {
          store.pokemonList = res.data.docs;
        })
        .catch()
        .then(() => {
          store.isLoading = false;
        });
    },
    filterPokemonType(type) {
      const url =
        type === "All"
          ? store.pokemonUri
          : `${store.pokemonUri}?eq[type1]=${type}`;
      this.fetchPokemonList(url);
    },
  },
  mounted() {
    this.fetchPokemonList(store.pokemonUri);
  },
};
</script>

<template>
  <app-main
    :pokemon-types="pokemonTypes"
    @pokemon-type-selected="filterPokemonType"></app-main>
</template>

<style lang="scss">
@use "./assets/scss/style.scss";
</style>
