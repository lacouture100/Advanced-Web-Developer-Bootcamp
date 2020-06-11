// Closure Example 1

function outer(){
    var start = 'Closures are';
    return function inner(){
        return start + ' ' + awesome;
    }
}

outer()()

//'Clsoures are awesome

//Example 2


function outer(a){
    return function inner(b){
        return a + b;
    }
}

outer(5)(5)

//10

var storeOuter = outer(5);
storeOuter(10); 

//15