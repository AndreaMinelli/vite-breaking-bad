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
      nameFilter: "",
    };
  },
  components: { AppMain },
  computed: {
    buildPokemonUri() {
      const currentPage = `?page=${this.currentPage}`;
      const typeFilter =
        this.typeFilter === "All" ? "" : `&eq[type1]=${this.typeFilter}`;
      const nameFilter = this.nameFilter ? `&q[name]=${this.nameFilter}` : "";
      return `${store.pokemonUri}${currentPage}${typeFilter}${nameFilter}`;
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
      this.typeFilter = type;
      this.fetchPokemonList(this.buildPokemonUri);
    },
    changePage(target) {
      if (target === "prev") {
        if (this.prevPage) {
          this.currentPage = this.prevPage;
          this.fetchPokemonList(this.buildPokemonUri);
        }
      } else {
        if (this.nextPage) {
          this.currentPage = this.nextPage;
          this.fetchPokemonList(this.buildPokemonUri);
        }
      }
    },
    pokemonNameFilter(text) {
      this.nameFilter = text;
    },
    getNameFilter() {
      this.currentPage = 1;
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
    :next-page="nextPage"
    :prev-page="prevPage"
    :pokemon-types="pokemonTypes"
    @pokemon-type-selected="filterPokemonType"
    @change-page="changePage"
    @pokemon-name-filter="pokemonNameFilter"
    @submit-name-filter="getNameFilter"></app-main>
</template>

<style lang="scss">
@use "./assets/scss/style.scss";
</style>
