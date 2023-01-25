<script>
import { store } from "./data/store";
import PokemonCard from "./PokemonCard.vue";
import AppLoader from "./AppLoader.vue";
import AppPagination from "./AppPagination.vue";
import SelectOptions from "./SelectOptions.vue";
import InputArea from "./InputArea.vue";
export default {
  name: "App Main",
  components: {
    PokemonCard,
    AppLoader,
    SelectOptions,
    AppPagination,
    InputArea,
  },
  data() {
    return {
      store,
    };
  },
  props: {
    pokemonTypes: Array,
    nextPage: Number,
    prevPage: Number,
  },
  emits: [
    "pokemon-type-selected",
    "change-page",
    "pokemon-name-filter",
    "submit-name-filter",
  ],
  methods: {
    getPokemonType(selected) {
      this.$emit("pokemon-type-selected", selected);
    },
    changePage(target) {
      this.$emit("change-page", target);
    },
    pokemonNameFilter(text) {
      this.$emit("pokemon-name-filter", text);
    },
    submitNameFilter() {
      this.$emit("submit-name-filter");
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="main-view">
      <div v-show="!store.isLoading" class="select-type">
        <input-area
          @typing="pokemonNameFilter"
          @submit-text="submitNameFilter"
          placeholder="Filtra per nome..."
          class="w-50"></input-area>
        <select-options
          first-option="All"
          :options="pokemonTypes"
          class="w-25"
          @selected-option="getPokemonType"></select-options>
      </div>
      <app-loader
        v-if="store.isLoading"
        image="../assets/img/pikachu-loading.jpg">
      </app-loader>

      <div v-else class="row row-cols-md-3 row-cols-lg-4">
        <div class="col" v-for="pokemon in store.pokemonList" :key="pokemon.id">
          <pokemon-card :pokemon="pokemon"></pokemon-card>
        </div>
      </div>
      <app-pagination
        :next-page="nextPage"
        :prev-page="prevPage"
        v-show="!store.isLoading"
        @change-page="changePage"
        class="justify-content-center mt-1"></app-pagination>
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
  display: flex;
  justify-content: space-between;
}
.row {
  height: 100%;
  overflow-y: auto;
}

.col {
  margin-bottom: 1rem;
}
</style>
