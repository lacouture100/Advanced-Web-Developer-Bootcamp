function map(arr, callback) {
    var newArr;
    for (var i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i], i, arr))
    }
    return newArr;

}


var arr = [1,2,3]

function tripleValues(arr){
    return arr.map(function(value){
        return value * 3;
    })
}

return onlyFirstName(arr){
    return arr.map(function (val){
        return val.first;
    })
}