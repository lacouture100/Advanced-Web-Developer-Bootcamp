import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function App()   {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my first React App
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// If I export it like this I have to import it like this:  App
export default App;

// If I export it like this I have to import it like this:  { App }
// export { App };
