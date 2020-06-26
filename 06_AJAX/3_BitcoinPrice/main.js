var btn = document.querySelector("#btn");
var price = document.querySelector("#price");
var myURL = 'https://api.coindesk.com/v1/bpi/currentprice.json';
//listen for clicks
btn.addEventListener("click", function(){
  //make the request
  var XHR = new XMLHttpRequest();
  
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      var myJson = JSON.parse(XHR.responseText).bpi.USD.rate;
      price.innerHTML = `${myJson} USD`;
      console.log(`${myJson} USD`);
    }
  }
  
  XHR.open("GET", myURL);
  XHR.send();
})