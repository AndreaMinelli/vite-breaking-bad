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
    <div v-if="store.isLoading" class="loading">
      <h3>Loading...</h3>
      <img src="../assets/img/pikachu-loading.jpg" alt="loading pics" />
    </div>
    <div v-else class="row row-cols-4">
      <div class="col" v-for="pokemon in store.pokemonList" :key="pokemon.id">
        <pokemon-card :pokemon="pokemon"></pokemon-card>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba($color: grey, $alpha: 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  img {
    height: 300px;
    width: auto;
    margin-top: 1rem;
  }
}
.row {
  height: 100%;
  overflow-y: auto;
}

.col {
  margin-bottom: 1rem;
}
</style>
