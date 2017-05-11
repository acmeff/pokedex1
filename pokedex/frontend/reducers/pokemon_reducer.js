import {
  RECEIVE_ALL_POKEMON,
  RECEIVE_NEW_POKEMON
} from '../actions/pokemon_actions';

const PokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_NEW_POKEMON:
      return Object.assign({}, state, action.pokemon);
    default:
      return state;
  }
};

export default PokemonReducer;
