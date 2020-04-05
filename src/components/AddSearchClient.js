import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {SetName} from '../store/FiltersAction'

 class AddSearchClient extends Component {
    handleSubmit=(e)=>{
        e.preventDefault();
            this.props.name(e.target.value)
    }
    render() {

        
        return (
            <div id="AddSearchClient"className="AddSearchClient">
                
                
                  <div className="center">
                  <Link to="/addclient" className="btn z-depth-0 teal accent-4">New Client <i className="material-icons right">add</i></Link>
                  </div>
                  <br></br>
                  <div>
                    <form onSubmit={this.handleSubmit}>
                    <input className="teal-text text-accent-4" placeholder="Search clients" id="SearchInput" type="text" name="" id="" />
                      <button id="SearchButton" className="btn z-depth-0 teal accent-4 ">Search</button>
                    </form>
                  </div>
                
              

                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch)=>{
    return{
        name:(name)=>dispatch(SetName(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSearchClient)
