import React from 'react';

function FruitList(props) {
  const fruits = props.fruits;

  return <div>
    {
      fruits.map(fruit => <h2 key={fruits}>{fruit}</h2>)
    }
  </div>
}


export default FruitList
