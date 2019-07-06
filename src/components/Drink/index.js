import React from 'react';

function Drink(props) {

  return (
    <div id={props.id} >
      <h4 key={props.index}>{props.title}</h4>
      <img src={props.img} alt={props.title} />
      {/* <h5>Ingredients</h5>
        <p></p>
        <h5>Instructions</h5>
        <p></p> */}
    </div>
  )

}

export default Drink