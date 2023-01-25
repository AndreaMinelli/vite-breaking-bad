<script>
export default {
  name: "Pokemon Card",
  props: {
    pokemon: Object,
  },
  computed: {
    getPokemonClass() {
      return this.pokemon.type1.toLowerCase();
    },
  },
};
</script>

<template>
  <div :class="['pokemon-card', getPokemonClass]">
    <header>
      <h3>{{ pokemon.name }}</h3>
      <h3>{{ pokemon.hp }} HP</h3>
    </header>
    <figure>
      <img :src="pokemon.imageUrl" :alt="pokemon.name" />
    </figure>
    <div class="pokemon-info">
      Height:{{ pokemon.height }}", Weight:{{ pokemon.weight }}lbs
    </div>
    <div class="atk-def">
      <h5>Attack: {{ pokemon.atk }}</h5>
      <h5>Defense: {{ pokemon.def }}</h5>
    </div>
    <div class="pokemon-type">
      {{ pokemon.type1 }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;
.pokemon-card {
  border: 3px solid $yellow;
  padding: 10px;

  &.grass {
    background-color: green;
  }

  &.fire {
    background-color: red;
  }

  &.water {
    background-color: dodgerblue;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-size: 12px;
      font-weight: bold;
    }
  }

  figure {
    width: 90%;
    height: 150px;
    margin: 0 auto;
    overflow: hidden;

    img {
      border: 3px solid $yellow;
      width: 100%;
      height: 150px;
      display: block;
      margin: 0 auto;
    }
  }

  .pokemon-info {
    font-weight: bold;
    text-align: center;
    width: 70%;
    font-size: 10px;
    margin: 0 auto;
    background-color: $yellow;
  }

  .atk-def {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    border-bottom: 1px solid black;
    h5 {
      font-size: 12px;
      font-weight: bolder;
    }
  }
  .pokemon-type {
    text-align: center;
    font-size: 15px;
    font-style: italic;
  }
}
</style>
