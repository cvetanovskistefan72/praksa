import React, { Component } from 'react'
import ClientsSummary from './ClientsSummary'
import {connect} from 'react-redux'


class ClientsList extends Component {

   


    render(){

        const {users} = this.props.users
    
        return (
            <div id="clientList">
            
            <ul className="collection with-header">
             {
                users.map((user)=>{
                    return  <ClientsSummary  key={user.id}  user={user} />
                     })
             }
             </ul>
              
              
            </div>
        )
    }
   
}
const mapStateToProps=(state)=>{
   console.log(state)
    return{
        users:state.auth
    }
}



export default connect(mapStateToProps)(ClientsList)
