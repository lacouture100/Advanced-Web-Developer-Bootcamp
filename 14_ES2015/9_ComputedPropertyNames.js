//ES5

var firstName = 'Alvaro'
var instructor = {};
instructor[firstName] = `That's me`;

instructor.Alvaro // That's me


//ES 2015

var firstName = 'Alvaro'
var instructor = {
  [firstName] : `That's me`
};


instructor.Alvaro // That's me