
import React, { Component } from 'react';
import './Navbar.css'

class NavBar extends Component{
    static defaultProps = {
        mainTitle: 'Recipe App',
        firstElement: 'New Recipe',
        home: 'Home',
        about: 'About',
        contact: 'Contact Us'
    }
    render(){
        //When putting this.props only it assumes the name will be the name of the varaible given.
        //Its a shorthand
        const {mainTitle, firstElement, home, about, contact} = this.props;
        return (
            <nav className="navbar">
                <h1 className="navbar-main-title">{mainTitle}</h1>
                <div className="navbar-sub-titles">
                    <h3 className="navbar-title">{firstElement}</h3>
                    <h3 className="navbar-title" >{home}</h3>
                    <h3 className="navbar-title">{about}</h3>
                    <h3 className="navbar-title">{contact}</h3>
                </div>

            </nav>
        );
    }
}

export default NavBar;

