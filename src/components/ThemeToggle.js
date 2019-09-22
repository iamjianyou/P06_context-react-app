import React, { Component } from 'react';
import {ThemeContext}from '../contexts/ThemeContext';

class ThemeToggle extends Component {
    static contextType = ThemeContext;
    
    render() { 
        const {toggleTheme} = this.context;
        const {isLightTheme, light, dark} = this.context;
        const theme = isLightTheme ? light : dark;
        return ( 
        <button onClick ={toggleTheme} style ={{background:theme.ui, color: theme.syntax}}> Toggle the theme </button> 
        );
    }
}
 
export default ThemeToggle;