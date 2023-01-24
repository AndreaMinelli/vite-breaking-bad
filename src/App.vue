<script>
import axios from "axios";
export default {
  data() {
    return {
      pokemonUri:
        "https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=10&page=1",
    };
  },
  mounted() {
    axios.get(this.pokemonUri).then((res) => {
      console.log(res.data);
    });
  },
};
</script>

<template>
  <div class="container"></div>
</template>

<style lang="scss">
@use "./assets/scss/style.scss";
</style>
