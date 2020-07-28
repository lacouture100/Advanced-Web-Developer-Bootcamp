import React, { Component } from 'react';
import './TodoList.css';




export default class TodoForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue : 'Hello there'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }

  handleChange(e) {
    this.setState({
      inputValue : e.target.value
    });
  }

  
  handleSubmit(e) {
    // passed in from the Todo List parent
      //console.log(this.state.inputValue);
      this.props.addTodo(this.state.inputValue);
   
  }


    render(){
      return(
        <div>
          <input 
          type="text" 
          value={this.state.inputValue}
          onChange= {this.handleChange}
          />
          <button 
          onClick={this.handleSubmit}
          >Add Todo</button>
        </div>
      );
    }
}
