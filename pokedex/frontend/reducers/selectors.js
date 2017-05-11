import values from 'lodash/values';

export const selectAllPokemon = state => (
  values(state.pokemon)
);

export const selectPokemon = pokemonDetail => {
  return Object.keys(pokemonDetail).map(key => {
    if (key !== 'items'){
      return `${key}: ${pokemonDetail[key]}`;
    } else {
      return pokemonDetail[key].map( item => {
        return item.name;
      });
    }
  });
};
