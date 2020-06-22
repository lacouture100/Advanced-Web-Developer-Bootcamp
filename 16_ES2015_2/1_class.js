//ES5

function Student(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

var alvaro = new Student('Alvaro', 'Lacouture');


//ES2015

class Student{
    constructor (firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

var alvaro = new Student('Alvaro', 'Lacouture');
