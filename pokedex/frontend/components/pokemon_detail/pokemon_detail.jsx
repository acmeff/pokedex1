import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.requestPokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps){
    if (this.props.pokemonDetail.id !== newProps.params.pokemonId){
      this.props.requestPokemon(newProps.params.pokemonId);
    }
  }

  render(){
    return(
      <ul>
         {this.props.pokemonDetail}
      </ul>
    );
  }
}

export default PokemonDetail;
