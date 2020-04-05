import React, { Component } from 'react'

export default class SignedIn extends Component {
    render() {
        return (
            <ul className="right">
                <li>  <a href=""><i className="material-icons">notifications</i></a> </li>
                <li>
                   <div><a href="">Stefan Cvetanovski</a></div>
                </li>
                <li>
                   <a href="">Logout</a>
                </li>
            </ul>
        )
    }
}
