// Object rest

var instructor = { 
    name: 'Alvaro',
    lastName : 'Lacouture',
    job: 'Artist',
    siblings: '1'
}

var {first, last, ...data} = instructor;

first; // Alvaro
lastName; // Lacouture
data;// {job: 'Artist', siblings: '1'}


// Spread

var instructor = { name: 'Alvaro', lastName : 'Lacouture', job: 'Artist', siblings: '1'};
var instructor2 = { ...instructor, name: 'James', lastName : 'Black'};

var defaults = {  job: 'Artist', siblings: '1'};

var instructor3 = { ...defaults, ownscat: false}