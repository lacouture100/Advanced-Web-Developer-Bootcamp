import React, { Component } from 'react';
import './Recipe.css'

class Recipe extends Component{
    render(){
        //When putting this.props only it assumes the name will be the name of the varaible given.
        //Its a shorthand
        const {title, img, instructions} = this.props;
        const ingredients = this.props.ingredients.map((ingredient,index)=> {
        return <li key={index}>{ingredient}</li>
        });
        return (
            <div className="recipe-card">
                <div className="recipe-card-img">
                    <img src={img} alt={title} />
                </div>
                <div className="recipe-card-content">
                    <h3 className="recipe-card-title">Recipe {title}</h3>
                    <h4>Ingredients:</h4>
                
                    <ul>
                    {/* It's an array of JSX elements, not strings anymore. JSX elements go in {} */}
                    {ingredients}
                    </ul>

                    <h4>Instructions:</h4>
                    <p>{instructions}</p>
                </div>

            </div>
        );
    }
}

export default Recipe;