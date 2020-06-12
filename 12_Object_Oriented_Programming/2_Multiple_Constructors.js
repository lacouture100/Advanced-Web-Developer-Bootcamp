function Car(year,tires,model){
    this.year = year;
    this.tires = tires;
    this.model = model;
}

function Motorcycle(year,tires,model){
    this.year = year;
    this.tires = tires;
    this.model = model;
}

//Using call
function Motorcycle(year,tires,model){
    /* With call or aply we first set the value of this (first parameter),
 which by naming it as 'this' is referring to 
the new motorcycle object which will be created. */
    Car.call(this,year,tires,model)
    this.seats = 2;
}

//Using apply
function Motorcycle(year,tires,model){
    /* With call or aply we first set the value of this (first parameter),
 which by naming it as 'this' is referring to 
the new motorcycle object which will be created. */
    Car.apply(this,[year,tires,model]);
    this.seats = 2;
}


//Using apply
function Motorcycle(year,tires,model){
    /* With call or aply we first set the value of this (first parameter),
 which by naming it as 'this' is referring to 
the new motorcycle object which will be created. */
    Car.apply(this,arguments);
    this.seats = 2;
}