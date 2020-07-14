import React, { Component } from 'react';
import './RecipeApp.css';
import Recipe from './Recipe'

class RecipeApp extends Component {
  render(){
    const imgSrc = 'pasta.jpg'
  return (
    <div className="App">
      <Recipe title="pasta" 
              ingredients ={["flour","water"]}
              img= {imgSrc}
              instructions ={'Wait to boil'}
              />
    </div>
  );
  }
}

export default RecipeApp;
