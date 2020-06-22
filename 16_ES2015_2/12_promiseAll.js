
let getMovie = (title) => {
    return $.getJSON(`https://omdbapi.com?t=${title}&apikey=thewdb`);
}

var titanicPromise = getMovie('titanic');
var shrekPromise = getMovie('shrek');
var braveheartPromise = getMovie('braveheart');

Promise.all([ shrekPromise, titanicPromise, braveheartPromise]).then(function(movies) {
    return movies.forEach(function(movie){
        console.log(movie.Year)
    });
});

