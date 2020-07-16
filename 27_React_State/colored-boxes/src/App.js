import React, { Component } from 'react';
import './App.css';


const NUM_BOXES = 32;

const Box = props =>{
//const Box = ({color}) => {
  const style = {
    width: '180px',
    height: '180px',
    display: 'inline-block',
    backgroundColor : props.color
  //backgroundColor : color

  }
  return (<div style={style} />);
}

class App extends Component {
  
  constructor(props) {
    super(props);
    //I create an array, fill it, and then map a random color into each place.
    // The second map parameter in map is what we want it to be, in this case we want it to refer to our App Component with 'this'
    const boxes = Array(NUM_BOXES).fill().map(this.getRandomColor, this);
    //We set the state for our boxes
    this.state= {boxes};
    ////////////{boxes:boxes}
    // We have t use an arrow function here in order for us to use `this` as referring to ouur App component
    setInterval(() => {
      //we make a copy of our boxes array
      const boxes = this.state.boxes.slice();
      //We grab a random box from the array
      const randIndex = Math.floor(Math.random()* boxes.length);
      // We change the color of the random box
      boxes[randIndex] = this.getRandomColor();
      //We update the state of our boxes
      this.setState({boxes});
      
    }, 300);
  }

  getRandomColor(){
    //We grab a random color from the array of colors
    let colorIndex = Math.floor(Math.random() * this.props.allColors.length);
    //we return a color to fill the background with
    return this.props.allColors[colorIndex];
  }
  
  render() {
    // For each item in the boxes, map a color onto it and make a div
    const boxes = this.state.boxes.map((color, index) => (
      <Box key={index} color={color} />
    ));
    return (
      <div className="App">
        {boxes}
      </div>
    );
  }
}

App.defaultProps = {
  allColors: ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
              "Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate",
              "Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
              "DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange",
              "DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey",
              "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue",
              "FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod",
              "Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki",
              "Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
              "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon",
              "LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
              "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
              "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
              "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy",
              "OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
              "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
              "Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
              "SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
              "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
              "Yellow","YellowGreen"]
};

export default App;