function sumArguments(){
  var total = 0;
  for(var i = 0; i<arguments.length;i++){
    total += arguments[i];
  }
  return total;
}

/////

function sumArguments(){
  var argumentsArray = [].slice.call(arguments);
  return argumentsArray.reduce(function(accumulator,nextValue){
    return accumulator + nextValue;
  });
}

var sumArguments = (...args) => args.reduce((acc,next) => acc + next);
