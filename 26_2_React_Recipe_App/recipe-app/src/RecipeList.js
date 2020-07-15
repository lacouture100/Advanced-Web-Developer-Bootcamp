import React, { Component } from 'react';
import './RecipeList.css'
import PropTypes from 'prop-types'
import Recipe from './Recipe'

class RecipeList extends Component{
    static defaultProps = {
        recipes: [
            {
            title:"pasta" ,
            ingredients :["flour","water"],
            img: 'pasta.jpg',
            instructions :'Wait to boil'
            },
            {
            title: "Milkshake" ,
            ingredients :["2 Scoops of icecream","8 ounces of milk"],
            img: 'milkshake.jpg',
            instructions : 'Mix the icecream and the milk'
            },
            {
            title:"Avocado Toast",
            ingredients :["Toasted bread","Squashed Avocado"],
            img: 'avocadoToast.jpg',
            instructions :'Spread the avocado on top of the toast'
            }
        ]
    }
    static propTypes = {
        recipes : PropTypes.arrayOf(PropTypes.object)
    }

    render(){
        const recipes = this.props.recipes.map((r,index)=> (
         <Recipe div key={index} {...r} />
        ));

        return (
            <div className="recipe-list" >
                {recipes}
                </div>
        )
    }
}

export default RecipeList;