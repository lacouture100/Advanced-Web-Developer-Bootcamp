//Connect to mongoose

const mongoose = require('mongoose');

//Set debug mode in console
mongoose.set('debug', true);

//Connect to the DB URL
mongoose.connect('mongodb://localhost/todo-api');

//Allows use to use promises with mongoose
mongoose.Promise = Promise;

//The index.js file runs first, and then looks for the todo module
module.exports.Todo = require('./todo')
