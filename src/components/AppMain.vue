<script>
import { store } from "./data/store";
import PokemonCard from "./PokemonCard.vue";
import AppLoader from "./AppLoader.vue";
import AppPagination from "./AppPagination.vue";
import SelectOptions from "./SelectOptions.vue";
export default {
  name: "App Main",
  components: { PokemonCard, AppLoader, SelectOptions, AppPagination },
  data() {
    return {
      store,
    };
  },
  props: { pokemonTypes: Array },
  emits: ["pokemon-type-selected", "change-page"],
  methods: {
    getPokemonType(selected) {
      this.$emit("pokemon-type-selected", selected);
    },
    changePage(target) {
      this.$emit("change-page", target);
    },
  },
};
</script>

<template>
  <div class="container">
    <app-loader
      v-if="store.isLoading"
      image="../assets/img/pikachu-loading.jpg">
    </app-loader>
    <div v-else class="main-view">
      <div class="select-type">
        <select-options
          first-option="All"
          :options="pokemonTypes"
          class="w-25"
          @selected-option="getPokemonType"></select-options>
      </div>
      <div class="row row-cols-md-3 row-cols-lg-4">
        <div class="col" v-for="pokemon in store.pokemonList" :key="pokemon.id">
          <pokemon-card :pokemon="pokemon"></pokemon-card>
        </div>
      </div>
      <app-pagination
        @change-page="changePage"
        class="justify-content-center mt-3"></app-pagination>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-view {
  height: 60%;
  width: 95%;
}
.select-type {
  margin: 1rem 1rem 1rem auto;
  text-align: end;
}
.row {
  height: 100%;
  overflow-y: auto;
}

.col {
  margin-bottom: 1rem;
}
</style>
