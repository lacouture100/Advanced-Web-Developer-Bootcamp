import React, { Component } from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import * as apiCalls from './api_async'

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

  async loadTodos(){
    let todos = await apiCalls.getTodos()
    this.setState({todos : todos})
  }

  // passed from the child TodoForm
  async addTodo(value){
    let newTodo = await apiCalls.createTodo(value);
    this.setState({todos : [...this.state.todos, newTodo]})
  }

  async deleteTodo(id){
    await apiCalls.removeTodo(id);
   const todos = this.state.todos.filter(todo => todo._id !== id);
  this.setState({todos : todos})
  }

  async toggleTodo(todo){
    let updatedTodo = await apiCalls.updateTodo(todo);
    const todos = this.state.todos.map(todo =>
      (todo._id === updatedTodo._id)
      ? {...todo, completed: !todo.completed} :
      todo
    )
    this.setState({todos : todos})
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
