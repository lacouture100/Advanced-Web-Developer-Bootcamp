//ES5

function swap(a,b){
  var temp = a;
  a=b;
  b=temp;
  return [a,b];
}

swap(10,5); //[5,10]

//ES 2105

function swap(a,b){
  return [a,b] = [b,a];
}

swap(10,5); // [5,10]