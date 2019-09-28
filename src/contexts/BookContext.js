import React, {createContext, useState}from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([

        {title: 'name of the river', id: 1},
        {title: 'name of the tree', id: 2},
        {title: 'name of the mountain', id: 3}

    ]);

    // Wrape the children inside the provider
    return(
        <BookContext.Provider value = {{books}}>
            
            {props.children}

        </BookContext.Provider>
    );
}
 
export default BookContextProvider;


