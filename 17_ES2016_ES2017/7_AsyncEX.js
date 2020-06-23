/*1. Write an ASYNC function called getMostFollowers, which accepts a variable number of arguments. 
You should then make an AJAX call to the Github User API (https://developer.github.com/v3/users/#get-a-single-user) 
to get the name and number of followers of each argument. 
The function should return a promise, which when resolved, 
returns a string which displays the username who has the most followers. 

Hint - Try to use Promise.all to solve this and remember that the jQuery AJAX methods ($.getJSON, $.ajax, etc.) return a promise.
*/

var userAPI = 'https://api.github.com/users';

async function getMostFollowers(...usernames) {
    let baseURL = 'https://api.github.com/users';
    let urls = usernames.map(username => $.getJSON(baseURL + username));
    let results = Promise.all(urls)
    let max = data.sort((a, b) => a.followers < b.followers)[0];
    return `${max.name} has the most followers with ${max.followers}`
}

getMostFollowers('elie', 'tigarcia', 'colt').then((data) => {
    console.log(data);
})


/*2. Write an ASYNC function called starWarsString, which accepts a number. 
You should then make an AJAX call to the Star Wars API (https://swapi.co/ ) to search for a specific character by the number passed to the function. 
Your function should return a promise that when resolved will console.log the name of the character.*/

function starWarsString(num) {
    let str = '';
    let results = await $.getJSON(`https://swapi.co/api/peapople/${id}/`)
        str += `${data.name} is featured in `;
        let movies = results.films[0];
        let moreResults = await $.getJSON(movies);

        str += `${moreResults.title}, directed by ${moreResults.director} `
        let planetData = moreResults.planets[0];
        let finalResults = await $.getJSON(planetData);

        str += `and it takes place on ${finalResults.name} `
        let finalString= str;
        return finalString;
}