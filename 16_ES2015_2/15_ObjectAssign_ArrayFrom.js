var o = {name: 'Elie'};
var o2 = o

o2.name = "Tim";
o.name //Tim

//////////////////////

//ES2015 FIX

var o = {name: 'Elie'};
var o2 = Object.assign({},o);

o2.name = "Tim";
o.name //Elie


////////////////Array.from

//ES5

var divs = document.getElementsByTagName("divs") // returns an array-like object
divs.reduce //undefined since it is not an array

var converted = [].slice.call(divs) //convert the array-like boject into an array
converted.reduce //works

//ES2015
var divs = document.getElementsByTagName("divs") // returns an array-like object
var divsArr = Array.from(divs);


var firstSet = new Set([1,2,3,3,1])//{1,2,3}

var arrayFromSet = Array.from(firstSet);//[1,2,3]