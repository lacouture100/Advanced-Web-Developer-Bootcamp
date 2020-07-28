import React, { Component } from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const APIURL = `/api/todos/`;

export default class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: []
    }

    this.loadTodos = this.loadTodos.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }
  componentDidMount(){
    this.loadTodos();
  }

  loadTodos(){
    fetch(APIURL,{
      method: 'get'
    })
     // .then(console.log('Hello'))
     .then(response => {
       if(!response.ok){
         if(response.status >= 400 && response.status <= 500){
           return response.json()
           .then(data => {
             let error = {errorMessage : data.message}
             throw error;
           })
         } else {
           // If there is no response / The server is off
           let error = {errorMessage : 'Please try again later'};
           throw error;
         }

       }
       return response.json()
     })
     //set the todo list
    .then(todos => this.setState({todos : todos}))
  }

  // passed from the child TodoForm
  addTodo(newTodo){
    //console.log(`Adding todo from todolist component ${newTodo}`)
    fetch(APIURL,{
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({name : newTodo})
    })
     // .then(console.log('Hello'))
     .then(response => {
       if(!response.ok){
         if(response.status >= 400 && response.status <= 500){
           return response.json()
           .then(data => {
             let error = {errorMessage : data.message}
             throw error;
           })
         } else {
           // If there is no response / The server is off
           let error = {errorMessage : 'Please try again later'};
           throw error;
         }

       }
       return response.json()
     })
     //set the todo list
    .then(newTodo => this.setState({todos : [...this.state.todos, newTodo]}))
  }

  deleteTodo(id){
  const deleteURL = APIURL + `${id}`;
    
        fetch(deleteURL,{
          method: 'delete',
        })
         // .then(console.log('Hello'))
         .then(response => {
           if(!response.ok){
             if(response.status >= 400 && response.status <= 500){
               return response.json()
               .then(data => {
                 let error = {errorMessage : data.message}
                 throw error;
               })
             } else {
               // If there is no response / The server is off
               let error = {errorMessage : 'Please try again later'};
               throw error;
             }
           }
         })
         //set the todo list
         const todos = this.state.todos.filter(todo => todo._id !== id);
        this.setState({todos : todos})
  }

  toggleTodo(todo){
    console.log(todo._id , todo.completed);

    const updateURL = APIURL + `${todo._id}`;
    
        fetch(updateURL,{
          method: 'put',
          headers: new Headers({
            'Content-Type': 'application/json'
          }),
          body: JSON.stringify({completed : !todo.completed})
        })
         // .then(console.log('Hello'))
         .then(response => {
           if(!response.ok){
             if(response.status >= 400 && response.status <= 500){
               return response.json()
               .then(data => {
                 let error = {errorMessage : data.message}
                 throw error;
               })
             } else {
               // If there is no response / The server is off
               let error = {errorMessage : 'Please try again later'};
               throw error;
             }
           }
           return response.json()
         })
         //set the todo list
        .then(updatedTodo =>{
          const todos = this.state.todos.map(todo =>
            (todo._id === updatedTodo._id)
            ? {...todo, completed: !todo.completed} :
            todo
          )
          this.setState({todos : todos})
        });
  }


    // We're binding the Delete function there because it's particular to each todo item's id
    render(){
      const todos = this.state.todos.map((todo) => (
        <TodoItem 
          key = {todo._id}
          {...todo}
          onDelete = {this.deleteTodo.bind(this, todo._id)}
          onToggle = {this.toggleTodo.bind(this, todo)}
        />
      ));
      return(
        <div>
          <h1> Todo List</h1>
          <TodoForm 
          addTodo ={this.addTodo}/>
          {todos}
        </div>
      )
    }
}
