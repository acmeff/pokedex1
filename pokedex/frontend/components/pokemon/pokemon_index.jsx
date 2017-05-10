import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestAllPokemon();
  }

  render() {
    console.log(this.props.pokemon);
    return (
      <ul>
        { this.props.pokemon.map(pokemon => (
          <li key={ pokemon.id }>
            { pokemon.name }
            <img src={ pokemon.image_url } height='50' width='50'></img>
          </li>
        ))}
      </ul>
    );
  }
}

export default PokemonIndex;
