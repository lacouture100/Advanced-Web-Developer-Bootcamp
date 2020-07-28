import React, { Component } from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const APIURL = `/api/todos/`;

export async function getTodos() {
  return fetch(APIURL)
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
}

export async function createTodo(todo) {
//console.log(`Adding todo from todolist component ${newTodo}`)
 return fetch(APIURL,{
  method: 'post',
  headers: new Headers({
    'Content-Type': 'application/json'
  }),
  body: JSON.stringify({name : todo})
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
}

export async function removeTodo(id) {
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

  }

  export async function updateTodo(todo) {
    const updateURL = APIURL + `${todo._id}`;
    
        return fetch(updateURL,{
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
  
    
  }
  