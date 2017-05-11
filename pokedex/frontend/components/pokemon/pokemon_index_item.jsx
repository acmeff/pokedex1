import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({pokemon}) => (
  <li>
    <Link to={`/pokemon/${pokemon.id}`}>
      { pokemon.name }
    </Link>
    <img src={ pokemon.image_url } height='50' width='50'></img>
  </li>
);

export default PokemonIndexItem;
