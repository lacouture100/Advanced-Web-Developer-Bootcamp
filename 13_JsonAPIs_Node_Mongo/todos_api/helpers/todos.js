// CONTAINS THE CALLBACK FUNCTIONS FOR OUR API

var db = require('../models');

exports.getTodos = function(req,res){
    //res.send("Hello from our routes. ")
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.getTodo = function(req,res){
    //we search for the id of our request
    db.Todo.findById(req.params.todoId)
    .then(function(foundTodo){
        res.json(foundTodo);
    }).catch(function(err){
        res.send(err);
    })
}


exports.createTodo = function(req,res){
    //console.log(req.body);
    db.Todo.create(req.body)
    //We respond back with the newly created Todo, we need our ID back
    .then(function(newTodo){
        res.status(201).json(newTodo);
    }).catch(function(err){
        res.send(err);
    })
}

exports.updateTodo = function(req,res){
    //we search for the id of our request
    //new:true responds with the updated version of the request
    db.Todo.findOneAndUpdate({_id:req.params.todoId}, req.body , {new:true})
    .then(function(todo){
        res.json(todo);
    }).catch(function(err){
        res.send(err);
    })
}


exports.deleteTodo = function(req,res){
    //we search for the id of our request
    //new:true responds with the updated version of the request
    db.Todo.remove({_id:req.params.todoId})
    .then(function(todo){
        res.json({message: 'Entry deleted!'});
    }).catch(function(err){
        res.send(err);
    })
}


module.exports = exports;

