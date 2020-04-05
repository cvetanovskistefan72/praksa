import React, { Component } from 'react'

import {connect} from 'react-redux'

 class ClientDetails extends Component {
    
    render() {
        const {finalUser}=this.props
        

        const isUserClicked = finalUser?(
            <div id="ClientDetails" className="">
                <div className="row">
            <div className="col">
                <h5 className="ClientNameHeader">{finalUser?finalUser.name:null}</h5>
            </div>
        </div>
            <div className="row">
                <div className="col s12 m6">
                    <img className="" src={finalUser?require('../img/'+finalUser.sex+".jpg"):null} alt="" width="250px" height="180px"/>
                </div>
                <div id="ClientRow1" className="col s12 m6">
                    <div className="row">
                       <div className="col">
                       <p className="info grey-text">Sex</p>
                        <p className="given">{finalUser?finalUser.sex:null}</p>
                       </div>
                       <div className="col">
                       <p className="info grey-text">Age</p>
                        <p className="given">{finalUser?finalUser.age:null}</p>
                       </div>
                       <div className="col">
                       <p className="info grey-text">Birthday</p>
                        <p className="given">{finalUser?finalUser.birthday:null}</p>
                       </div>
                    </div>
                    <div id="ClientRow2" className="row">
                       <div className="col">
                       <p className="info grey-text">Address</p>
                        <p className="given">{finalUser?finalUser.address:null}</p>
                       </div>
                      
                    </div>
                    <div id="ClientRow3" className="row">
                       <div className="col">
                       <p className="info grey-text">Email</p>
                        <p className="given">{finalUser?finalUser.email:null}</p>
                       </div>
                      
                    </div>
                </div>
               
            </div> 
            <div  id="NotesRow"className="row">
            
                <div className="col s12 m12">
                <p>Notes</p>
                      <span>{finalUser?finalUser.notes:null} </span>

                </div>
                
            </div>
            </div>
        )
        :null;
        return (
            <div className="">
           
        {isUserClicked}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    const id = state.auth.clientID;
    const users=state.auth.users;
    const final = users.find((user)=>{
            return id==user.id
    })

    
    
    return{
        finalUser:final
    }
}

export default connect(mapStateToProps)(ClientDetails)
