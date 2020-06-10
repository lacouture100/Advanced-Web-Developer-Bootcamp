// https://randomuser.me/api/
var btn = document.querySelector("#btn");

var img = document.querySelector("#avatar");
var fullname = document.querySelector("#fullname");
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var city = document.querySelector("#city");


var myURL = 'https://randomuser.me/api/';
//listen for clicks
btn.addEventListener("click", function () {
  //make the request
  fetch(myURL)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .catch(printError)
});

function handleErrors(request) {
  if (!request.ok) {
    throw Error(request.status);
  }
  return request;
}

function parseJSON(request) {
  var data = request.json();
  console.log(data);
  return data;
}

function updateProfile(data) {
  //Change the image
  var dataImg = data.results[0].picture.thumbnail;
  img.src = dataImg;
  //Change the name
  var dataName = data.results[0].name.title + ' ' + data.results[0].name.first + ' ' + data.results[0].name.last;
  fullname.innerHTML = dataName;
  //Change the username
  var dataUsername = data.results[0].login.username;
  username.innerHTML = dataUsername;
  //Change the email
  var dataEmail = data.results[0].email;
  email.innerHTML = dataEmail;
  //Change the city
  var dataCity = data.results[0].location.city;
  city.innerHTML = dataCity;

  return data;
}

function printError(error) {
  console.log(error);
}