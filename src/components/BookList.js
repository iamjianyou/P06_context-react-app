import React, {Component } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

class BookList extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    static contextType = ThemeContext;
    render() { 
        const {isLightTheme, light, dark} = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div className = 'book-list' style = {{color: theme.syntax, background: theme.bg}}>
                <ul>
                    <li style = {{background: theme.ui}}>beast</li>
                    <li style = {{background: theme.ui}}>least</li>
                    <li style = {{background: theme.ui}}>feast</li>
                </ul>
            </div>
        );
    }
}
 
export default BookList 