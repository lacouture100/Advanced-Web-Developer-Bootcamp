import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        }, {
          name: 'Matt',
          hobbies: ['math', 'd3']
        }, {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        }, {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    };
  

  // We use the arrow function to preserve the scope of this, this refers to my App
  setTimeout( () => {
    const randInstructor = Math.floor(Math.random() * this.state.instructors.length);
    const randHobbyIndex = Math.floor(Math.random() * this.state.instructors[randInstructor].length);
  
    ///////////////METHOD 1 ///////////////////

    const instructors = this.state.instructors.map((instructor, index) => { //(
      if(index === randInstructor) {
        // make a copy of the instructor hobbies array
        //const hobbies = [...instructor.hobbies]
        const hobbies = instructor.hobbies.slice();
        // Take away the hobby I don't want
        hobbies.splice(randHobbyIndex,1);
        return {
          //return a new object, which is a spread of whatever instructor has + hobbies array we just copied and modified
          ...instructor,
          hobbies
        }
      } 
      //if index is not equal to my random instructor, just return the instructor
      return instructor;
    });
    this.setState({instructors});
    }, 5000);
  }


  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <li key={index}>
        <h3>{instructor.name}</h3>
        <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
      </li>
    ));
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;



    /////////////////// METHOD 2 ///////////////
    /*
      // Map returns a new array, so we don't modify the original instructors array of objects.
      //  If index is equal to my random Instructor, then I will return a new object. 
      //  If not, I just return the instructor. No copy needed
        index === randInstructor ? {
      //  I want to keep all the keys in that object, so we use the spread operator to spread out the keys 
          ...instructor,
          // We want to overwrite the hobbies key,
          // We slice the beginning of the hobbies array to get a copy of it
          // Then we concat that copy of the beginning to a copy of the end
          hobbies: [...instructor.hobbies.slice(0,randHobbyIndex).concat(instructor.hobbies.slice(randHobbyIndex + 1, instructor.hobbies.length ))]
        } : instructor
  ))
  */
  

  //////////////////// METHOD 3 ///////////////////
        /*
  instructors[randInstructor] = Object.assign({}, instructors[randInstructor]);
  instructors[randInstructor].hobbies = instructors[randInstructor].hobbies.slice();
  instructors[randInst].hobbies.splice(hobbyIndex,1);
  this.setState({instructors})
        */