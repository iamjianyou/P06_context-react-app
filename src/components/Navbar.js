import React, {Component} from 'react';
import {ThemeContext} from '../contexts/ThemeContext'

class Navbar extends Component {
    static contextType = ThemeContext;
    render(){
        console.log(this.context);
        const {isLightTheme, light, dark} = this.context;
        const theme = isLightTheme ? light : dark;
        return(
            <nav style ={{background: theme.ui, color: theme.syntax}}>
                <h1> Content App</h1>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                </ul>
            </nav>
        );
    }

}

export default Navbar;