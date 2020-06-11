arr.some(function(value,index,array){
  return value > 3;
  });


  function some(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
				if(callback(array[i],i,array)){
						return true;
				}
    }
    return false;
}

function hasComma(arr){
  return str.split('').some(function(value){
      return value === ',';
  });
}