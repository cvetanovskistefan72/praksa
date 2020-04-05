import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar2 extends Component {
    render() {
        return (
            <div id="nav2" className="nav-wrapper light-blue accent-4">
                <div className="container">
                <div className="right">
                    <a id="light" className="btn-floating grey lighten-1"><i className="material-icons black-text">brightness_5</i></a>
                    
                </div>
                    <ul className="left">
                        <li><NavLink to="/">DASHBOARD</NavLink></li>
                        <li><NavLink to="/calendar">CALENDAR</NavLink></li>
                        <li><a href="">CLIENTS</a></li>
                        <li><a href="">FINANCES</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
