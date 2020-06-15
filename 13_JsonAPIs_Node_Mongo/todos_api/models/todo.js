//name
//completed
//created date

const mongoose = require('mongoose');

//Create our Schema
var todoSchema = new mongoose.Schema({
    //we pass in an object with our defaults, our parameters for the requests.
    name: {
        type : String,
        required: 'Name cannot be blank'
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_date:{
        type: Date,
        default: Date.now
    }
})

var Todo = mongoose.model('Todo', todoSchema);

//When we call the todo.js file, what we are getting id the compliled module at the end
module.exports = Todo;