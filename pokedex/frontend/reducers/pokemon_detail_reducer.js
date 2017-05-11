import { RECEIVE_POKEMON } from '../actions/pokemon_actions';

const initialState = {
  moves: [],
  items: []
};

export const PokemonDetailReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POKEMON:
      return action.pokemon;
    default:
      return state;
  }
};
