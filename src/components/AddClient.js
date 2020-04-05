import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Add_Client} from '../store/AuthActions'

 class AddClient extends Component {
    state={
            id:Math.random(),
            name:null,
            sex:null,
            age:null,
            birthday:null,
            address:null,
            email:null,
            notes:null
        
    }
    handleChange=(e)=>{
        
        this.setState({
           [e.target.id]:e.target.value
        })
        
      
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.add(this.state)
        this.props.history.push('/')
       
        
    }
    render() {
        
        return (
            <div className="container AddClient ">
             
              <form onSubmit={this.handleSubmit}>
                  
              <div className="input-field col s12 m6">
                    <h5>First and Last name</h5>
                        <input className="teal-text text-accent-4 " placeholder="First and Last name" id="name" type="text"  onChange={this.handleChange} />
                       
                    </div>
               
                <div className="input-field col s12 m6 RadioButtons">
                <h5>Select gender</h5>
                   <div>
                   <label>
                        <input className="with-gap teal-text text-accent-4" name="sex" type="radio" id="sex" value="male"   onChange={this.handleChange}/>
                        <span>Male</span>
                    </label>
                   </div>
                    <div>
                    <label>
                        <input className="with-gap teal-text text-accent-4" name="sex" type="radio" id="sex" value="female"  onChange={this.handleChange}/>
                        <span>Female</span>
                    </label>
                    </div>
                
               </div>
               <div className="input-field col s12 m6">
                    <h5>Age</h5>
                        <input className="teal-text text-accent-4" placeholder="Age" id="age" type="range" min="18" max="100"  onChange={this.handleChange}/>
                       
                    </div>
                    <div className="input-field col s12 m6">
                    <h5>Date of birth</h5>
                        <input className="teal-text text-accent-4" type="date" name="birthday" id="birthday" onChange={this.handleChange}/>
                       
                    </div>
                    <div className="input-field col s12 m6">
                    <h5>Address</h5>
                        <input className="teal-text text-accent-4" placeholder="Address" id="address" type="text"onChange={this.handleChange} />
                       
                    </div>
                    <div className="input-field col s12 m6">
                    <h5>Email</h5>
                        <input className="teal-text text-accent-4" placeholder="First and Last name" id="email" type="email"  onChange={this.handleChange}/>
                       
                    </div>
                    <div className="input-field col s12 m6">
                    <h5>Notes</h5>
                    <textarea className="teal-text text-accent-4" id="notes" className="materialize-textarea"  onChange={this.handleChange}></textarea>
                       
                    </div>
                    <div className="input-field col s12 m6">
                        <button className="btn right">Add Client</button>
                    </div>
              </form>
                    
                    
            </div>
        )
    }
}

const mapStateToProps = (state) => {

}

const mapDispatchToProps =(dispatch)=> {
return{
    add:(client)=>{dispatch(Add_Client(client))}
}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddClient)
