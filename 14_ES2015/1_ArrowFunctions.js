function doubleAndFilter(arr){
    return arr.map(function(value){
        return value *2;
    }).map(function(value){
        return value % 3===0;
    })
}

//VS

var doubleAndFilter = arr => arr.map(val => val *2).map(num => num % 3===0);