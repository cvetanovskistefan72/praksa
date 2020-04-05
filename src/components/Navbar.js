import React, { Component } from 'react'
import SignedIn from './SignedIn'
import Signedout from './Signedout'

export default class Navbar extends Component {
    render() {
        return (
            
                <nav className="nav-wrapper blue-grey darken-3">
                    <div className="container">
                    <a href="" className="brand-logo left">TakeLessons</a>
                  
                        <SignedIn />
                        <Signedout />
                   
                    </div>
                    
                </nav>
           
        )
    }
}
