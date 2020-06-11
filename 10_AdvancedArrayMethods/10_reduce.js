//reduce

arr = [1,2,3,4,5]

arr.reduce(function(accumulator,nextValue){
  return accumulator + nextValue;
})

//returns 15

//Adding a second paramater

arr.reduce(function(accumulator,nextValue){
  return accumulator + nextValue;
},10)

//returns 25

//Strings

var names = ['Tina', 'Mina', 'Shiva', 'Mandi']

names.reduce(function(accumulator,nextValue){
  return accumulator += ' ' + nextValue;
},' The instructors are:');

//Objects

var arr = [5,4,1,4,5]

arr.reduce(function(accumulator,nextValue){
  if(nextValue in accumulator){
    accumulator[nextValue]++;
  }else{
    accumulator[nextValue] = 1;
  }
  return accumulator;
}, {});

// {5:2, 4:2, 1:1}

//Example

function sumOddNumbers(arr){
  return arr.reduce(function(accumulator,nextValue){
    if(nextValue % 2 !== 0){
      accumulator += nextValue;
    }
    return accumulator
  }, 0)
}

sumOddNumbers([1,2,3,4,5]); 

//9

// Example 2

function createFullName(arr){
  return arr.reduce(function(accumulator,nextValue){
      accumulator.push(nextValue.first + ' ' + nextValue.last);
      return accumulator
  }, [])
}

createFullName([{first: 'Colt', last: 'Steele'}, {first:'Joey', last:'Tribbiani'}]);

//['Colt Steele'. 'Joey Tribbiani'];