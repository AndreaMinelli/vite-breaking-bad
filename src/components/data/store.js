import { reactive } from "vue";

export const store = reactive({
  pokemonUri:
    "https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons",
  pokemonList: [],
  isLoading: false,
});
