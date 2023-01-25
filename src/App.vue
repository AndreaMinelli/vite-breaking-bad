<script>
import axios, { all } from "axios";
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
      nextPage: null,
      prevPage: null,
      currentPage: null,
      typeFilter: "All",
    };
  },
  components: { AppMain },
  computed: {
    buildPokemonUri() {
      if (this.pokemonType === "All") {
        return `${store.pokemonUri}?page=${this.currentPage}`;
      } else {
        return `${store.pokemonUri}?page=${this.currentPage}&eq[type1]=${this.typeFilter}`;
      }
    },
  },
  methods: {
    fetchPokemonList(url) {
      store.isLoading = true;
      axios
        .get(url)
        .then((res) => {
          store.pokemonList = res.data.docs;
          this.nextPage = res.data.nextPage;
          this.prevPage = res.data.prevPage;
          this.currentPage = res.data.page;
        })
        .catch()
        .then(() => {
          store.isLoading = false;
        });
    },

    filterPokemonType(type) {
      this.currentPage = 1;
      if (type !== "All") {
        this.typeFilter = type;
      }
      this.fetchPokemonList(this.buildPokemonUri);
    },
    changePage(target) {
      target === "prev"
        ? (this.currentPage = this.prevPage)
        : (this.currentPage = this.nextPage);

      this.fetchPokemonList(this.buildPokemonUri);
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
    @pokemon-type-selected="filterPokemonType"
    @change-page="changePage"></app-main>
</template>

<style lang="scss">
@use "./assets/scss/style.scss";
</style>
