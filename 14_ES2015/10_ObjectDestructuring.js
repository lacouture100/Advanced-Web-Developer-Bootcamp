

var instructor = {
  firstName : 'Alvaro',
  lastName : 'Lacouture'
}

var  {firstName, lastName} = instructor;

firstName; //Alvaro
lastName // Lacouture

var  {firstName:first, lastName:last} = instructor;

first; //Alvaro
last; // Lacouture


/////////////////////////////////

//ES 5

function createInstructor(options){
  //if we dont have any options make an empty object
  let options = options || {};
  let name = options.name || {first: 'Alvaro', last: 'Lacouture'};
  let isHilarious = options.isHilarious || false;
  return [name.first, name.last, isHilarious]
}

//ES 2015

function createInstructor({name = {first : 'Alvaro', last : 'Lacouture'}, isHilarious = false} = {}){
  return [name.first, name.last, isHilarious]
}


createInstructor();// 
createInstructor({isHilarious:true}) //
createInstructor({name:{first:'Tim', last: 'Jones'}}) //




////////////////////////////////

function displayObjectInfo({name, favColor}){
  return [name,favColor];
}


var instructor = {
  firstName : 'Alvaro',
  favColor : 'Purple'
}

displayObjectInfo(instructor); //['Alvaro','Purple']