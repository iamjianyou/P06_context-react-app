import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext'
import AuthContextProvider from './contexts/AuthContext'
import ThemeToggle from './components/ThemeToggle';
import BookContextProvider from './contexts/BookContext';

/**
 * The components <Navbar/> <BookList/> are attached to the ThemeContextProvider as a Props
 * 
 * to access these component in ThemeContex componet by using
 * this.props.children
 */

 /**
  * 
  * <ThemeContextProvider>   // WEHN COMPONENTS ARE  SURROUND IN THE CONTEXTPROVIDER
  *                          // THESE COMPONENTS ARE ATTACHED TO THE PROPS OF CONTEXT PROVIDER
      <BookList/>
        <ThemeToggle/>
    </ThemeContextProvider>
  * 


    To access 
    <Navbar/>
     <BookList/>
     <ThemeToggle/>
    By using "this.props.childen" in ThemeContext to access the navbar and BookList components.
    "this.props.childen" : Referes to the Children that ThemeContextProvider class componnents wraps.
     this: pints to the component "ThemeContextProvider" that wraps the children  <Navbar/><BookList/><ThemeToggle/>


  */

function App() {
  return ( 
    <div className="App">
      
      <ThemeContextProvider> 
        <AuthContextProvider>
          <Navbar/>
          <BookContextProvider>
            <BookList/>
          </BookContextProvider>
          <ThemeToggle/>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
