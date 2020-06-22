function* pauseAndReturnValues(num){
    for(let i=0; i < num; i++){
        yield i;
    }
}

var gen = pauseAndReturnValues(4);

gen.next()  // {value: 0, done: false}
gen.next()  // {value: 1, done: false}
gen.next()  // {value: 2, done: false}
gen.next()  // {value: 3, done: false}
gen.next()  // {value: undefined, done: true}



//////////////////

function* printValues(){
    yield 'First';
    yield 'Second';
    yield 'Third';
}

var g = printValues();
g.next().value; //First
g.next().value; //Second
g.next().value; //Third


///////////////////

function* pauseAndReturnValues(num){
    for(let i=0; i < num; i++){
        yield i;
    }
}

for(val of pauseAndReturnValues(3)){
    console.log(val);
}

//0
//1
//2


/////////////ASYNC GENERATORS

function* getMovieData(movieNAme){
    console.log('starting')
    yield $.getJSON(`https://omdbapi.com?t=${moviename}&apikey=thewdb`);
    console.log('ending');
}