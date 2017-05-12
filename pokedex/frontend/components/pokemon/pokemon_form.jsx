import React from 'react';
import { withRouter } from 'react-router-dom';

class PokemonForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      name: '',
      attack: '',
      defense: '',
      poke_type: '',
      move1: '',
      move2: '',
      moves: [],
      image_url: ''
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(event){
    event.preventDefault();

    this.state.moves.push(this.state.move1);
    this.state.moves.push(this.state.move2);

    this.props.createPokemon(this.state).then((newPokemon) => {
      this.props.history
        .push(`pokemon/${Object.keys(newPokemon)[0]}`);
    });
  }

  errors(){
    return (
      <ul>
        {this.props.errors.map((error, idx) =>
            <li key={idx}>{error}</li>)}
      </ul>
    );
  }

  render(){
    return(
      <form>
        <input type="text"
               placeholder="name"
               value={this.state.name}
               onChange={this.update('name')}>
        </input>
        <input type="text"
               placeholder="attack"
               value={this.state.attack}
               onChange={this.update('attack')}>
        </input>
        <input type="text"
               placeholder="defense"
               value={this.state.defense}
               onChange={this.update('defense')}>
        </input>
        <input type="text"
               placeholder="image_url"
               value={this.state.image_url}
               onChange={this.update('image_url')}>
        </input>
        <input type="text"
               placeholder="move1"
               value={this.state.move1}
               onChange={this.update('move1')}>
        </input>
        <input type="text"
               placeholder="move2"
               value={this.state.move2}
               onChange={this.update('move2')}>
        </input>
        <select onChange={this.update('poke_type')}>
          <option disabled selected value="">Choose a type</option>
          <option value="fire">fire</option>
          <option value="electric">electric</option>
          <option value="normal">normal</option>
          <option value="ghost">ghost</option>
          <option value="psychic">psychic</option>
          <option value="water">water</option>
          <option value="bug">bug</option>
          <option value="dragon">dragon</option>
          <option value="grass">grass</option>
          <option value="fighting">fighting</option>
          <option value="poison">poison</option>
          <option value="ice">ice</option>
          <option value="flying">flying</option>
          <option value="ground">ground</option>
          <option value="rock">rock</option>
          <option value="steel">steel</option>
        </select>
        <button onClick={this.handleSubmit}>Submit Pokemon</button>
        <div>{this.errors()}</div>
      </form>
    );
  }
}

export default withRouter(PokemonForm);
