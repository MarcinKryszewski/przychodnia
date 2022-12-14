import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Aboutus from './components/Aboutus/Aboutus';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import User from './components/User/User'

import React, { 
  useRef, 
  useState, 
  useEffect, 
  props 
} from 'react'

import {
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      user: '',
      loggedIn: false
    };
  }

  userLogin = (e) => {
    this.setState
    (
      {
        loggedIn: e.loggedIn,
        user: e.user
      }
    );
  }

  render(){
    return(
      <>
      <Navbar value={this.state.loggedIn} />
      <Routes>        
        <Route path="/przychodnia" element={<Home />} />      
        <Route path="/przychodnia/aboutus" element={<Aboutus />} />
        <Route path="/przychodnia/services" element={<Services />} />
        <Route path="/przychodnia/contact" element={<Contact />} />
        <Route path="/przychodnia/login" element={<Login user={this.state.user} onChange={this.userLogin} />} />
        <Route path="/przychodnia/user/*" element={<User />} />
      </Routes>
      </>
      
    )
  }  
}

export default App;