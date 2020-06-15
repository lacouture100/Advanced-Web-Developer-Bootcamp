const express = require('express');
const router = express.Router();
//this will import the db.todo model
const db = require('../models');
//This is where the routes for our API are defined
var helpers = require('../helpers/todos');

//this is defined in our index.js file as '/api/todos'
router.route('/')
    .get(helpers.getTodos)
    .post(helpers.createTodo)
 
router.route('/:todoId')
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo)


module.exports = router;