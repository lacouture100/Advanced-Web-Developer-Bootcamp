/*1. Write a function called getMostFollowers, which accepts a variable number of arguments. 
You should then make an AJAX call to the Github User API (https://developer.github.com/v3/users/#get-a-single-user) 
to get the name and number of followers of each argument. 
The function should return a promise, which when resolved, 
returns a string which displays the username who has the most followers. 

Hint - Try to use Promise.all to solve this and remember that the jQuery AJAX methods ($.getJSON, $.ajax, etc.) return a promise.
*/

var userAPI = 'https://api.github.com/users';

function getMostFollowers(...usernames) {
    let baseURL = 'https://api.github.com/users';
    let urls = usernames.map(username => $.getJSON(baseURL + username));
    return Promise.all(urls).then((data)=>{
        let max = data.sort((a,b) => a.followers < b.followers)[0];
        return `${max.name} has the most followers with ${max.followers}`
    });
}

getMostFollowers('elie', 'tigarcia', 'colt').then((data)=>{
    console.log(data);
})


/*2. Write a function called starWarsString, which accepts a number. 
You should then make an AJAX call to the Star Wars API (https://swapi.co/ ) to search for a specific character by the number passed to the function. 
Your function should return a promise that when resolved will console.log the name of the character.*/

function starWarsString(num){
    var str = '';
    return $.getJSON(`https://swapi.co/api/peapople/${id}/`).then((data) => {
        str += `${data.name} is featured in `;
        let filmData = data.films[0];
        return $.getJSON(filmData);

    }).then((res) => {
        str += `${res.title}, directed by ${res.director} `
        let planetData = res.planets[0];
        return $.getJSON(planetData);

    }).then((res) => {
        str += `and it takes place on ${res.name} `
        return str;
        
    }).then((finalString) =>{
        return finalString;
    });
}