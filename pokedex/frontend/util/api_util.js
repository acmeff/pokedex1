export const fetchAllPokemon = () => (
  $.ajax({
    type: 'GET',
    url: '/api/pokemon'
  })
);

export const fetchPokemon = pokemonId => (
  $.ajax({
    type: 'GET',
    url: `/api/pokemon/${pokemonId}`
  })
);
