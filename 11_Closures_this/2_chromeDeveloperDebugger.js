function outerFn(){
    var data = 'Something from outerFn';
    var fact = 'Remember me!';
    return function innerFn(){
        debugger;
        return fact;
    }
}

var outer = outerFn();
outer();