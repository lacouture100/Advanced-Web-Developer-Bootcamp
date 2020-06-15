//Useful but inneficient code

function Person(name){
    this.name = name;
    this.sayHi = function(){
        return `Hi ${this.name}`;
    };
}

var alvaro  = new Person('Alvaro');
alvaro.sayHi()

///////////////////////


function Person(name){
    this.name = name;
}

Person.prototype.sayHi = function(){
    return `Hi ${this.name}`;
};

var alvaro  = new Person('Alvaro');
alvaro.sayHi()
