import React, { Component } from 'react'
import {FindClient} from '../store/AuthActions'
import {connect} from 'react-redux'


 class ClientsSummary extends Component {

     findCliend=(e)=>{
          
        this.props.findClient(this.props.user.id);
        
    }
    render() {

       
        return (

        
                <li onClick={this.findCliend}   className="collection-item avatar ">
                    <img src={require('../img/'+this.props.user.sex+".jpg") } alt="" className="circle" width="70px" height="70px" />
                    <span id="clientName" className="title">{this.props.user.name}</span>
                   
                   
                    <p className="grey-text client-details">more details...</p>
                   
                    
                </li>
               
               
           

        )
    }
}
const mapDispatchToProps=(dispatch,state)=>{
   console.log(state)
    return{
        findClient:(id)=>dispatch(FindClient(id))
    }
}

export default connect(null,mapDispatchToProps)(ClientsSummary)
