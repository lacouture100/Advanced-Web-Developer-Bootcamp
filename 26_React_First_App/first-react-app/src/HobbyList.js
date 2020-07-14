import React, { Component } from 'react';


class HobbyList extends Component {
    render() {
      const hobbies = ['Sleeping', 'Eating', 'Barking']
      const liStyle = {fontSize:'1.5em',
                       color: 'Blue'}
      return (
            <ul>
            {/*We have to give each of the elements in the JSX array a unique key, in this case
               we are using it's index. This might not be the best option since we might change
               the order of all the elements of the array later on*/}
              {hobbies.map((hobbie,index) =>{
                return <li key={index} style={liStyle}>{hobbie}</li>
              })}
            </ul>
        );
    }
  }

export default HobbyList;