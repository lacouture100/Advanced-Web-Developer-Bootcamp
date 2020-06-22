///ES5

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.sayHello(){
    return "Hello" + this.firstName + ' ' + this.lastName;
}

function Student(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

//To have Student inherit the sayHello() from Person:

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student


///ES2015


class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;

    }
    sayHello(){
        return `Hello ${this.firstName} ${this.lastName}`;
    }
}

class Student extends Person {

}
///Student.prototype.constructor === Student   ///true