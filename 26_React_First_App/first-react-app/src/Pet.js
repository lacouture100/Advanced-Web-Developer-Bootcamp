import React, { Component } from 'react';
import HobbyList from './HobbyList'
import './Pet.css';

// export default class Pet extends Component {
class Pet extends Component {
    render() {
      //create the inline style for the list elements as a JS object
      return (
        <div className = "card">
            <h2>A doggo</h2>
            <img src="https://images.dog.ceo/breeds/setter-english/n02100735_3599.jpg"
                 alt= "A doggo" />
            <h5 style={{fontSize:'2em', margin:'2px'}}>Hobbies:</h5>
            <HobbyList />
        </div>
        );
    }
}

export default Pet;