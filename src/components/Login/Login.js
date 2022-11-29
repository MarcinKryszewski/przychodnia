import React, { useRef, useState, useEffect, props } from 'react'
import Navbar from '../Navbar/Navbar';
import Gallery from './Gallery/Gallery';
import Form from './Form/Form';
import { Navigate } from 'react-router';

import './Login.css';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.userLogin = this.userLogin.bind(this);
    this.state = {
      loggedIn: false,
      user: ''
    };
  };

  userLogin = (e) => {
    this.setState({user: e.user});
    this.setState({loggedIn: e.loggedIn});
  }

  render(){
    return (
    <div>
        <Navbar />        
      {this.state.loggedIn ? 
          (
            <Navigate to="/przychodnia" />
          ) :
         (
            <div className='app__login flex__center'>
             <Form 
                onChange={this.userLogin}/>
              <Gallery />
            </div>
          )
        }             
    </div>
    )
  }  
}
export default Login