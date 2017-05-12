import { RECEIVE_POKEMON_ERRORS } from     '../actions/pokemon_actions';

export const ErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_POKEMON_ERRORS:
      return action.error.responseJSON;
    default:
      return state;
  }
};
