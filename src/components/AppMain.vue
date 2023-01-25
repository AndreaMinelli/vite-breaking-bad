<script>
import { store } from "./data/store";
import PokemonCard from "./PokemonCard.vue";
import AppLoader from "./AppLoader.vue";
export default {
  name: "App Main",
  data() {
    return {
      store,
    };
  },
  components: { PokemonCard, AppLoader },
};
</script>

<template>
  <div class="container">
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
.row {
  height: 100%;
  overflow-y: auto;
}

.col {
  margin-bottom: 1rem;
}
</style>
