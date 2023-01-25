<script>
import { store } from "./data/store";
import PokemonCard from "./PokemonCard.vue";
import AppLoader from "./AppLoader.vue";
import SelectOptions from "./SelectOptions.vue";
export default {
  name: "App Main",
  components: { PokemonCard, AppLoader, SelectOptions },
  data() {
    return {
      store,
    };
  },
  props: { pokemonTypes: Array },
};
</script>

<template>
  <div class="container">
    <div class="select-type">
      <select-options
        first-option="All"
        :options="pokemonTypes"
        class="w-25"></select-options>
    </div>

    <app-loader
      v-if="store.isLoading"
      image="../assets/img/pikachu-loading.jpg">
    </app-loader>
    <div v-else class="row row-cols-4">
      <div class="col" v-for="pokemon in store.pokemonList" :key="pokemon.id">
        <pokemon-card :pokemon="pokemon"></pokemon-card>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.select-type {
  margin: 1rem 1rem 1rem auto;
  text-align: end;
}
.row {
  height: 85%;
  overflow-y: auto;
}

.col {
  margin-bottom: 1rem;
}
</style>
