import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contacts from './components/pages/Contacts';
import Navbar from './components/pages/Navbar';

import {BrowserRouter as Router,Route,Switch}  from 'react-router-dom';
import AddUser from './components/Users/AddUsers';
import NotFound from './components/pages/NotFound';


function App() {
  return (
   <Router>
      <div className="App">
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/About" component={About}></Route>
      <Route path="/Contacts" component={Contacts}></Route>
      <Route path="/users/add"  component={AddUser}></Route>
      <Route component={NotFound}></Route>
      </Switch>
     
      
     
    </div>
     </Router>
  );
}

export default App;
