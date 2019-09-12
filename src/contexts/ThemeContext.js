import React, {createContext, Component} from 'react';

export const ThemContext = createContext();

class ThemeContextProvider extends Component {

    // state to be shared in different components
    state = {
        isLightThem: true,
        light: {syntax: '#555', ui: '#ddd', bg:'#eee'},
        dark: {syntax: '#ddd', ui: '#333', bg:'#555'}
    }

    /** {this.props.children} 
     * refers to the component wraps in ThemContextProvider 
     * */

    render() { 
        return ( 
            <ThemContext.Provider value={{...this.state}}>
                {this.props.children} 
            </ThemContext.Provider>
        );
    }
}
 
export default ThemeContextProvider;