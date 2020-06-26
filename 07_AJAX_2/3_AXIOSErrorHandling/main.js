var btn = document.querySelector("button");
var section = document.querySelector("#comments");
btn.addEventListener("click", sendRequest);

function sendRequest(){
  //every parameter is added after a question mark.
  //"https://jsonplaaskjldceholder.typicode.com/comments?postId=1//Its better to leave the param open in case we want to change it later
  
  axios.get("https://jsonplaaskjldceholder.typicode.com/comments", {
    params: {
      postId: 1
    }
  })
  .then(addComments)
  .catch(handleErrors)
 }

function addComments(res){
  res.data.forEach(function(comment){
    appendComment(comment);
  });
}

function appendComment (comment){
  var newP = document.createElement("p");
  newP.innerText = comment.email;
  section.appendChild(newP);
}

function handleErrors(err) {
    if (err.response) {
      console.log("Problem With Response ", err.response.status);
    } else if (err.request) {
      console.log("Problem With Request!");
    } else {
      console.log('Error', err.message);
    }
  }

