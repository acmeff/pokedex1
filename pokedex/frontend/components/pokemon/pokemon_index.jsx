import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from '../pokemon_detail/pokemon_detail_container';
import { Route } from 'react-router-dom';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <ul>
        { this.props.pokemon.map(pokemon => (
          <PokemonIndexItem key={pokemon.id} pokemon={pokemon}/>
        ))}
        <Route path="/pokemon/:pokemonId"
          component={ PokemonDetailContainer }></Route>
      </ul>
    );
  }
}

export default PokemonIndex;
