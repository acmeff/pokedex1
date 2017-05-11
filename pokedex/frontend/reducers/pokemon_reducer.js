import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

const PokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    default:
      return state;
  }
};

export default PokemonReducer;
