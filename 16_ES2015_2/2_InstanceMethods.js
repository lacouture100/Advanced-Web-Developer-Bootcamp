//ES5

function Student(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Student.prototype.sayHello = function (){
    return "Hello" + this.firstName + " " + this.lastName;
}



//ES2015

class Student{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello(){
        return `Hello ${this.firstName} ${this.lastName}`;
    }
}