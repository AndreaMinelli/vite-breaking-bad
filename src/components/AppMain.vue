<script>
import { store } from "./data/store";
import PokemonCard from "./PokemonCard.vue";
export default {
  data() {
    return {
      store,
    };
  },
  components: { PokemonCard },
};
</script>

<template>
  <div class="container">
    <div class="row row-cols-4">
      <div class="col" v-for="pokemon in store.pokemonList">
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
