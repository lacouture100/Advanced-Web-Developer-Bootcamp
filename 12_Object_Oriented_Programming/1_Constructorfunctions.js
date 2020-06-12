function Person(eyes, arms, legs){
    this.eyes = eyes;
    this.arms = arms;
    this.legs = legs;
}
function Dog(name, age){
    this.name = name;
    this.age = age;

    this.bark =  function(){
        console.log(`${this.name} just barked`)
    }
}

//Rusty just barked