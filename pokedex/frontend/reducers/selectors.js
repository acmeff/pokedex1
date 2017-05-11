import values from 'lodash/values';

export const selectAllPokemon = state => (
  values(state.pokemon)
);

export const selectPokemonItem = (state, itemId) => {
  for (let idx in state.pokemonDetail.items) {
    if (state.pokemonDetail.items[idx].id === parseInt(itemId)){
      return state.pokemonDetail.items[idx];
    }
  }

  return {};
};
