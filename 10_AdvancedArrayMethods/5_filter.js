function filter(arr, callback) {
  var newArr;
  for (var i = 0; i < arr.length; i++) {
      newArr.push(callback(arr[i], i, arr))
  }
  return newArr;
}

arr.filter(function(value,index,array){
  return value>2;
})

function divisibleByThree(arr){
  return arr.filter(function(value){
    return value %3 ===0;
  })
}

