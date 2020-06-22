var years = [];
var URL = 'https://omdbapi.com?t=titanic&apikey=thewdb';
$.getJSON(URL)
.then((movie) => {
    years.push(movie.Year);
    return $.getJSON(URL);
})
.then((movie) => {
    years.push(movie.Year);
    console.log(years);
})