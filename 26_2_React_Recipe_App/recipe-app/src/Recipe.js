import React, { Component } from 'react';

class Recipe extends Component{
    render(){
        //When putting this.props only it assumes the name will be the name of the varaible given.
        //Its a shorthand
        const {title} = this.props;
        const ingredients = this.props.ingredients.map((ingredient,index)=> {
        return <li key={index}>{ingredient}</li>
        });
        return (
            <div>
            <div>Recipe {title}</div>
            <ul>
                {/* It's an array of JSX elements, not strings anymore */}
                {ingredients}
            </ul>
            </div>
        );
    }
}

export default Recipe;