
//jQuery method to wait for the DOM to load
$(document).ready(function () {
    //make our request
    $.getJSON('/api/todos')
        //the data arrives as an array of objects
        .then(addTodos)
        .catch(function (err) {
            console.log(err);
        })
    //make a listen event on the todoInput field so we can input the data
    $('#todoInput').keypress(function (event) {
        //Detect the enter key
        if (event.which == 13) {
//create the todo entry made from wwhatever is in the input field
            createTodo();
        }
    })
    //listen for the click on top of a list element, specifically on top of the span or x 'button'
    //it has to be attached to the list in order for it to work on new todo items
    $('.list').on('click', 'span', function (event) {
        // stops the event from  bubbling up. When we click on the span element it will not trigger the listener on the parent <li> element
        event.stopPropagation();
        //we remove the todo, we give it the entire todo(<li> element) by finding it using the parent() function
        removeTodo($(this).parent());
    })

    //listen for a click on the <li> element to update the completed status of each entry
    $('.list').on('click', 'li', function () {
        updateTodo($(this));
    })

})

function addTodos(todos) {
    //add the todos on the page
    todos.forEach(function (todo) {
        addTodo(todo);
    });
}

function addTodo(todo) {
    //for each object in data grab the name field and append th value as a list element
    var newTodo = $(`<li class="task"> ${todo.name} <span>x</span> </li>`);
    //._id is how mongo stores the id for each entry
    //we store each id as an entry from the todo
    newTodo.data('id', todo._id);
    //we get the completed status from each of the todos
    newTodo.data('completed',todo.completed)
    if (todo.completed) {
        //switch the class, update the css
        newTodo.addClass("done");
    }
    $('.list').append(newTodo);
}

function createTodo() {
    //Grab the user input from the input field
    var userInput = $('#todoInput').val();
    //send request to create new Todo - POST request to '/api/todos'
    $.post('/api/todos', {
            name: userInput
        })
        .then(function (newTodo) {
            //
            addTodo(newTodo);
            //change the input field back to an empty field
            $('#todoInput').val('');
        }).catch(function (err) {
            console.log(error);
        })
}

function removeTodo(todo) {
    //look for the id of each entry
    var clickedId = todo.data('id');
    //send the request
    $.ajax({
        method: 'DELETE',
        url: `/api/todos/${clickedId}`
    }).then(function (data) {
        //remove the data entry, update css
        todo.remove();
    })
}

function updateTodo(todo){
    //get back the completed status of each of or entries
    //console.log(todo.data('completed'));
        //set the new value for the task
    //When we click on the button we want the value to be the opposite.
    var isDone = !todo.data('completed');
    var updatedData = {completed: isDone};
    $.ajax({
        method: 'PUT',
        url: `/api/todos/${todo.data('id')}`,
        data: updatedData
    })
    //after weve sent the data to the server we get the data back
    .then(function(updatedTodo){
        //toggles the class between done and not done, updated the css
        todo.toggleClass('done');
        console.log(updatedTodo);
        //change our .data methos to say that compelted is the opposit of what is used to be
        todo.data('completed', isDone)
    })
}