//ES 5

var arr = [1,2,3]

var a = arr[0];
var b = arr[1];
var c = arr[2];

a; //1
b; //2
c; //3

//ES 2015

var arr = [1,2,3]

var [a,b,c] = arr;

a; //1
b; //2
c; //3

////////////////////////////////////


//ES5

function returnNumbers(a,b){
  return [a,b];
}

var first = returnNumbers(5,10)[0];
var second = returnNumbers(5,10)[1];

first; //5
second; //10

//ES 2015

function returnNumbers(a,b){
  return [a,b];
}

[first,second] = returnNumbers(5,10);


first; //5
second; //10