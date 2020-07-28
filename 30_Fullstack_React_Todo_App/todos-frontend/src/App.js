import React from 'react';
import './App.css';
//import TodoList from './TodoList';
import TodoList from './TodoList_async';


function App() {
  return (
    <div className="App">
      <h1>Todos APP</h1>

      <TodoList />
    </div>
  );
}

export default App;
