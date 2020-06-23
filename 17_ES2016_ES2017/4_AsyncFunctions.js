async function first() {
    return "We did it!";
}

first(); //returns a promise
first().then(val => console.log(val)); // "We did it!"



////// AWAIT

async function getMovieData() {
    console.log('starting!');
    var movieData = await $.getJSON('https://omdbapi.com?t=titanic&apikey=thewdb');
    console.log('finished!');
    console.log(movieData);
}

getMovieData()

//first prints starting, then the movie 


/////OBJECT ASYNC//////

var movieCollector = {
    data: 'Titanic',
    async getMovie() {
        var response = await $.getJSON(`https://omdbapi.com?t=${this.data}&apikey=thewdb`);
        console.log(response);
    }
}


movieCollector.getMovie();


/////CLASS ASYNC//////

class mMvieData {
    constructor(name) {
        this.name = name;
    }
    async getMovie() {
        var response = await $.getJSON(`https://omdbapi.com?t=${this.data}&apikey=thewdb`);
        console.log(response);
    }
}


var m = new MovieData('shrek');
m.getMovie();


//////// Handling Errors with try/catch

async function getUser(user){
    try{
        var response = await $.getJSON(`https://api.github.com/users/${user}`);
        console.log(response.name);
    } catch(e){
        console.log('User does not exist!');
    }
}

