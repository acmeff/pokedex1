import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const REQUEST_ALL_POKEMON = 'REQUEST_ALL_POKEMON';
export const REQUEST_POKEMON = 'REQUEST_POKEMON';
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON';
export const CREATE_POKEMON = 'CREATE_POKEMON';
export const RECEIVE_NEW_POKEMON = "RECEIVE_NEW_POKEMON";
export const RECEIVE_POKEMON_ERRORS = 'RECEIVE_POKEMON_ERRORS';

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const receivePokemon = pokemon => ({
  type: RECEIVE_POKEMON,
  pokemon
});

export const requestPokemon = (pokemonId) => dispatch => (
  APIUtil.fetchPokemon(pokemonId)
    .then(pokemon => dispatch(receivePokemon(pokemon)))
);

export const receiveNewPokemon = pokemon => ({
  type: RECEIVE_NEW_POKEMON,
  pokemon
});

export const createPokemon = pokemon => dispatch => (
  APIUtil.createPokemon(pokemon)
    .then(createdPokemon => {
      dispatch(receiveNewPokemon(createdPokemon));
      return createdPokemon;
    }, error => dispatch(receivePokemonErrors(error)))
);

export const receivePokemonErrors = error => ({
  type:RECEIVE_POKEMON_ERRORS,
  error
});
