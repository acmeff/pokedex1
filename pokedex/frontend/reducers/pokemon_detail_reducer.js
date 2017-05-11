import { RECEIVE_POKEMON } from '../actions/pokemon_actions';

export const PokemonDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POKEMON:
      return action.pokemon;
    default:
      return state;
  }
};
