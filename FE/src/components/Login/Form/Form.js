import React, { useState, useContext } from 'react'
import './Form.css';
import axios from 'axios';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { Context } from '../../../Store';

function Form () {

  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [state, setState] = useContext(Context);

  const loginUser = async () => {
    const user = {
        username: username,
        password: password
    };
    try {
      const res = await axios.post("http://localhost:3001/api/users/login", user);
      const loggedUser = res.data;
      NotificationManager.success('Zalogowano', 'Logowanie');   
      
      if (res.status == 222){
        setState({
          userLogged: true,
          userId: loggedUser,
          userSpecial: true});
        NotificationManager.warning('ADMIN LOGGED');
      } else {
        setState({
          userLogged: true,
          userId: loggedUser
        });
      }
      
    } catch (error) {
      console.log(error);
      NotificationManager.error(error.response.data);
    }
  };

  const changeUsername = event => {
    const value = event.target.value;
    setusername(value);
  };

  const changePassword = event => {
    const value = event.target.value;
    setPassword(value);
  };

  return (    
    <div className='login__form-form'>
      <NotificationContainer />
      <div className='login__form-title'>Logowanie</div>
      <input 
        type="text" 
        id="login" 
        className="login__form-login" 
        name="login" 
        placeholder="LOGIN" 
        onChange={changeUsername}
        value={username}
        required
      />
      <input 
        type="text" 
        id="password" 
        className="login__form-password" 
        name="login" 
        placeholder="HASŁO" 
        onChange={changePassword}
        value={password}
        required
      />
      <button className="login__form-submit" onClick={loginUser}>ZALOGUJ SIĘ</button>
    </div>
  )
}

export default Form;