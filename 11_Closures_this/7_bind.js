//Select all of the divs with inner text 'Hello'
var person = {
	firstName: 'Alvaro',
	lastName: 'Lacouture'
}

function addNames(a, b, c, d) {
	return `${this.firstName} ${this.lastName} just added ` + (a + b + c + d);
}


addNames.call(person) //Alvaro Lacouture just added NaN
var tempBind = addNames.bind(person, 1, 2);


/////////////////////////////////

var person2 = {
	firstName: 'Lucas',
	lastName: 'Lacouture',
	sayHi: function(){
		setTimeout(function(){
			console.log(`${this.firstName} says Hello!`)
		}, 10000);
	}
}


/////////FIX/////////


var person2 = {
	firstName: 'Lucas',
	lastName: 'Lacouture',
	sayHi: function(){
		setTimeout(function(){
			console.log(`${this.firstName} says Hello!`)
		}.bind(this), 10000);
	}
}

