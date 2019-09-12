import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext'

/**
 * The components <Navbar/> <BookList/> are attached to the ThemeContextProvider as a Props
 * 
 * to access these component in ThemeContex componet by using
 * this.props.children
 */

function App() {
  return ( 
    <div className="App">
      <ThemeContextProvider>
        <Navbar/>
        <BookList/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
