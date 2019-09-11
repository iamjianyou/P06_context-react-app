import React, {Component } from 'react';

class BookList extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    render() { 
        return (
            <div className = 'book-list'>
                <ul>
                    <li>feast</li>
                    <li>least</li>
                    <li>beast</li>
                </ul>
            </div>
        );
    }
}
 
export default BookList 