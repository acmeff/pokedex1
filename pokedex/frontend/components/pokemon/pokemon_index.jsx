import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from '../pokemon_detail/pokemon_detail_container';
import { Route } from 'react-router-dom';
import PokemonFormContainer from './pokemon_form_container';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <section>
        <ul>
          { this.props.pokemon.map(pokemon => (
            <PokemonIndexItem key={pokemon.id} pokemon={pokemon}/>
          ))}
        </ul>
        <Route path="/pokemon/:pokemonId"
          component={ PokemonDetailContainer }></Route>
        <Route exact path="/" component={ PokemonFormContainer }/>
      </section>
    );
  }
}

export default PokemonIndex;
