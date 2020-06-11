function counter() {
    var count = 0;
    return function inner() {
        count++;
        return count;
    }
}

var counter1 = counter()

counter1()

//1
counter1()
//2

var counter2 = counter()

counter2()

//1


////////////////////////////////////

function classRoom() {
    var instructors = ['Matt', 'Collin', 'Micheal'];
    return {
        getInstructors: function () {
            return instructors;
        },
        addInstructors: function (instructor) {
            instructors.push(instructor);
            //using slice() prevents from manipulating the variable inside the original fucntion.
            return instructors.slice();
        }
    }
}

var first = classRoom();

first.getInstructors()
//['Matt', 'Collin', 'Micheal'];

first.addInstructors(Alvaro)
////['Matt', 'Collin', 'Micheal', 'Alvaro'];