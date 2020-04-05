import React, { Component } from 'react'
import ClientsList from './ClientsList'

import  AddSearchClient  from './AddSearchClient'
const  LeftDashboard= ()=>{
        
        return (
            <div id="LeftDashboard" className="LeftDashboard">
            <AddSearchClient />
                <ClientsList />
            </div>
        )
    
}


export default LeftDashboard;


