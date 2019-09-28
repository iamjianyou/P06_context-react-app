import React, {createContext, Component} from 'react'; // createContex: is a function to create a Context

// create context and save it in ThemContext
export const ThemeContext = createContext();

// create class context for creating states
// cc + tab to create a class
class ThemeContextProvider extends Component {

    // state to be shared in different components
    state = {
        isLightTheme: true,
        light: {
            syntax: '#555', 
            ui: '#ddd', 
            bg:'#eee'
        },
        dark: {
            syntax: '#ddd', 
            ui: '#333', 
            bg:'#555'
        }
    }

    /** Create a toggleTheme method */
    toggleTheme = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme});
    }

    /** {this.props.children} 
     * refers to the component wraps in ThemContextProvider 
     * 
     * {this.props.children} : 
                               <Navbar/>
                                <BookList/>
                                <ThemeToggle/>
     * */

    render() { 
        return ( 
            /** 
             * whenvere call ThemeContex it will give a Provider on this context
             * to wrap different components 
             * so that data can be used inside those compoents  
             * 
             * 
             * */
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children} 
            </ThemeContext.Provider>
        );
    }
}
 

export default ThemeContextProvider;