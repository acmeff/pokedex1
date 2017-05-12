import React from 'react';


const ItemDetail = (props) => {
  return (
    <section>
      <h4>{props.item.name}</h4>
      <h4>Happiness: {props.item.happiness}</h4>
      <h4>Price: ${props.item.price}</h4>
    </section>);
};

export default ItemDetail;
