import { combineReducers } from 'redux';
import PokemonReducer from './pokemon_reducer';
import {PokemonDetailReducer} from './pokemon_detail_reducer';


export default combineReducers({
  pokemon: PokemonReducer,
  pokemonDetail: PokemonDetailReducer
});
