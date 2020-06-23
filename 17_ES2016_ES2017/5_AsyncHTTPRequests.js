//Sequential Requests - NOT EFFICIENT

async function getMovieData() {
    var response1 = await $.getJSON('https://www.omdbapi.com?t=titanic&apikey=thewdb');
    var response2 = await $.getJSON('https://www.omdbapi.com?t=shrek&apikey=thewdb');
    console.log(response1);
    console.log(response2);
}

getMovieData();

//Parallel Requests


async function getMovieData() {
    var titanicPromise = $.getJSON('https://www.omdbapi.com?t=titanic&apikey=thewdb');
    var shrekPromise = $.getJSON('https://www.omdbapi.com?t=shrek&apikey=thewdb');

    var titanicData = await titanicPromise;
    var shrekData = await shrekPromise;

    console.log(titanicData);
    console.log(shrekData);
}

getMovieData();

