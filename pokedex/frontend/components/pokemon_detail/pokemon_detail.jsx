import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount() {
    this.props.requestPokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps){
    if (this.props.pokemonDetail.id !== parseInt(newProps.match.params.pokemonId)){
      this.props.requestPokemon(newProps.match.params.pokemonId);
    }
  }

  render(){
    const { name, attack, defense, image_url, moves, poke_type, items } = this.props.pokemonDetail;
    console.log(items);

    return(
      <section>
        <img src={image_url}></img>
        <h2>{name}</h2>
        <h4>Type: {poke_type}</h4>
        <h4>Attack: {attack}</h4>
        <h4>Defense: {defense}</h4>
        <h4>Moves: {moves.join(', ')}</h4>
        <h4>Items: </h4>
        <ul>{items.map((item, idx) => (
            <li key={idx}>
              <img src={item.image_url} height='50' width='50'></img>
            </li>))}
        </ul>
      </section>

      //
      // <ul>
      //   { this.props.formattedDetail.map((detail, idx) => {
      //     if (typeof detail !== 'string') {
      //       return (
      //         <ul>
      //           { detail.map((item, i) => (
      //             <li key={ i }>
      //               <ItemDetailContainer item={ item } />
      //             </li>
      //           ))}
      //         </ul>
      //       );
      //     } else {
      //       return (
      //         <li key={idx}>{detail}</li>
      //       );
      //     }
      //   })}
      // </ul>
    );
  }
}

export default PokemonDetail;
