import React, { Component } from 'react'
import Navbar2 from './Navbar2'
import LeftDashboard from './LeftDashboard'
import RightDashboard from './RightDashboard'

export default class Dashboard extends Component {
    render() {
        return (
            <div id="Dashboard" className="container">
            
               <div className="row">
                   <div className="col s12 m4">
                   <LeftDashboard />
              
                   </div>
                   <div className="col s12 m8">
                   <RightDashboard />
                   </div>
               </div>
            </div>
        )
    }
}
