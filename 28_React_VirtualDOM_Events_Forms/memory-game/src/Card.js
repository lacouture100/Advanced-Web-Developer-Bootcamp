import React from 'react';
import './Card.css'
import PropTypes from 'prop-types';


const Card = (props) =>{
  // create a style object for each card
  let style = {};
  // if the card is showing, override the CSS defined grey color for the color set in the MemoryGameApp
  if (props.showing) {
  // set the background color as the color set to each card in the MemoryGameApp
    style.backgroundColor = props.backgroundColor;
  }

    return(
      <div 
      onClick={props.onClick}
      className="card-container" 
      style = {style} />
    );
};


Card.propTypes = {
  // defines if the card should be showing. Depends on the cardState defined in MemoryGameApp
  showing : PropTypes.bool.isRequired,
  // set the background color as the color set to each card in the MemoryGameApp
  backgroundColor : PropTypes.string.isRequired,
  
  onClick : PropTypes.func.isRequired
};

export default Card;