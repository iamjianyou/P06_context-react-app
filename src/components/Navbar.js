import React, {Component} from 'react';

class Navbar extends Component {
    render(){
        return(
            <nav>
                <h1> Content App</h1>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                </ul>
            </nav>
        );
    }

}

export default Navbar;