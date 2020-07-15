import React, { Component } from 'react';
import './RecipeApp.css';
import RecipeList from './RecipeList'
import NavBar from './Navbar';

class RecipeApp extends Component {
  render(){
  return (
    <div className="App">
      <NavBar />
      <RecipeList />

    </div>
  );
  }
}

export default RecipeApp;
