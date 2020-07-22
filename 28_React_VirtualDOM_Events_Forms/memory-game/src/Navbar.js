import React from 'react';
import './Navbar.css'
import PropTypes from 'prop-types';


const Navbar = ({onNewGame}) => (
    <div className="navbar">

        <h2><a>Memory Game</a></h2>
        <h2><a onClick={onNewGame}>New Game</a></h2>  

    </div>
)

Navbar.propTypes ={
    // Use it inside the click event on the link
    // the handleNewGame function is defined in the MemoryGameApp
    onNewGame : PropTypes.func.isRequired
};

export default Navbar;