
import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

class Navbar extends Component {
  // static contextType = ThemeContext;
  render() {
    return (
      <AuthContext.Consumer>{(authContext) =>(
        <ThemeContext.Consumer>{(themeContext) => {
            const {isAuthenticated, toggleAuth} = authContext
            const { isLightTheme, light, dark } = themeContext;
            const theme = isLightTheme ? light : dark;
            return (
              <nav style={{ background: theme.ui, color: theme.syntax }}>
                <h1>Context App</h1>
                <div onClick = {toggleAuth }>
                    {isAuthenticated ? 'Logged in': 'Logged out'}
                </div>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </nav>
            )
          }}</ThemeContext.Consumer>
      )}</AuthContext.Consumer> 
    );
  }
}
 
export default Navbar;





// import React, {Component} from 'react';
// import {ThemeContext} from '../contexts/ThemeContext'

// class Navbar extends Component {
//     // This only can be used in Class Component not In functional component
//     // Is to look up the compnent tree
//     // the fist time it finds a Provider for this Context
//     /**
//      *   APP    
//      * <ThemeContextProvider> 
//         <Navbar/>
//         <BookList/>
//         <ThemeToggle/>
//       </ThemeContextProvider>
//      */
    
//     static contextType = ThemeContext; // ThemeContext : createContext(); not provider
//     render(){
//         // test to access the shared data
//         console.log(this.context);

//         // destructure the propperties
//         const {isLightTheme, light, dark} = this.context;
//         // evalue the theme light/dark
//         const theme = isLightTheme ? light : dark;
//         return(
//             <nav style ={{background: theme.ui, color: theme.syntax}}>
//                 <h1> Content App</h1>
//                 <ul>
//                     <li>HOME</li>
//                     <li>ABOUT</li>
//                     <li>CONTACT</li>
//                 </ul>
//             </nav>
//         );
//     }
// }

// export default Navbar;

