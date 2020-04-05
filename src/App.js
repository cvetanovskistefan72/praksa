import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Calendar from './components/Calendar';
import  AddClient  from './components/AddClient';


class App extends Component{
 render() {
   return (
     <div>
    
        <BrowserRouter forceReferesh={true}>
        <Navbar />
       <Navbar2 />
         <Switch>
         <Route exact path="/" component={Dashboard}/>
          <Route path="/calendar" component={Calendar} />
          <Route path="/addclient" component={AddClient} />
         </Switch>
        </BrowserRouter>
     </div>
   )
 }
}


export default App;




