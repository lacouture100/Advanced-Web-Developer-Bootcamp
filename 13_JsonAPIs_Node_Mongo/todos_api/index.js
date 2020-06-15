var express = require('express');
var app = express();
var bodyParser = require('body-parser');

/*This will contain the export module from our todos in the routes folder,
This way We get access to our routes*/
var todoRoutes = require('./routes/todos');
const config = require("./config"); 

//Allows us to access the req body that comes in a request.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

// Set the static files (html and css)
app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/public'))

// Access it by entering localhost:3000
app.get('/', function(req,res){
    res.sendFile('index.html')
    //res.send('Hello from the root route')
})

/*sets our API. in this case /api/todos/:todoId and then every request will just use the :todoId at the end*/
app.use('/api/todos', todoRoutes)


app.listen(config.PORT, function(){
    console.log('APP IS RUNNING on' + config.PORT);
    console.log(__dirname+ '/public');

});

