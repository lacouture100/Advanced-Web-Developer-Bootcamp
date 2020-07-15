import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'


/*
// Child component

class InstructorItem extends Component {
  static propTypes = {
    name : PropTypes.string,
    hobbies: PropTypes.arrayOf(PropTypes.string)
  }
  render(){
    return(
      <li >
        <h3>{this.props.name}</h3>
        <h4>Hobbies: {this.props.hobbies.join(",")}</h4>
      </li>
    );
  }
}
*/
// REFACTORED AS A STATELESS FUNCTIONAL COMPONENT

//always gets props as a parameter
const InstructorItem = props => {
  //implicit render method
    return(
      <li >
        {/*No need for this.props.name since we are not extending from component
           here props refers directly to our function*/}
        <h3>{props.name}</h3>
        <h4>Hobbies: {props.hobbies.join(",")}</h4>
      </li>
    );
}

//Decalr the proptypes outside of the component
InstructorItem.propTypes = {
  name : PropTypes.string,
  hobbies: PropTypes.arrayOf(PropTypes.string)
}

// Main component
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
      <InstructorItem 
      key={index}
      name={instructor.name}
      hobbies={instructor.hobbies}
      />
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