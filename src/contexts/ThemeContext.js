import React, {createContext, Component} from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {

    // state to be shared in different components
    state = {
        isLightTheme: true,
        light: {syntax: '#555', ui: '#ddd', bg:'#eee'},
        dark: {syntax: '#ddd', ui: '#333', bg:'#555'}
    }

    toggleTheme = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme});
    }

    /** {this.props.children} 
     * refers to the component wraps in ThemContextProvider 
     * */

    render() { 
        return ( 
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children} 
            </ThemeContext.Provider>
        );
    }
}
 
export default ThemeContextProvider;