import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// TODO: Delete later
import { fetchAllPokemon } from './util/api_util';
import { requestAllPokemon, receiveAllPokemon } from './actions/pokemon_actions';

window.fetchAllPokemon = fetchAllPokemon;
window.receiveAllPokemon = receiveAllPokemon;
window.requestAllPokemon = requestAllPokemon;

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
