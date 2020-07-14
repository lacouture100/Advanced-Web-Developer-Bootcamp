import React, { Component } from 'react'

class ShowText extends Component {
    render(){
        return <div>{this.props.text}</div>
    }
}


<ShowText 
    text="This is a prop named Text"
/>