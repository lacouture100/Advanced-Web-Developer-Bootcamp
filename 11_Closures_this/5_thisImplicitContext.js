var person = {
    firstName: 'Elie',
    sayHi : function(){
        return `Hi ${this.firstName}`;
    },
    determineContext : function(){
        //returns true if this is referring to the person object
        return this === person;
    }
}

