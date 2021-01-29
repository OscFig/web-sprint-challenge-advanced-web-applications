import React, { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../helpers/axiosWithAuth';

const initialState = {
    username:'',
    password:''
  }

const Login = () => {
  const [ credentials, setCredentials ] = useState(initialState);
  const history = useHistory();
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const login = (e) => {
    e.preventDefault();
    axiosWithAuth().post('/api/login', credentials)
      .then(res => {
        console.log(res.data)//Works!!!
        localStorage.setItem('token', res.data.payload);// This saves the token
        history.push('/bubbles'); // Pushes you towards secret (private) route
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleChange = e => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
    // console.log('handleChange:',credentials)// Works!!!
  }
  // Lambda School ---- i<3Lambd4
  return (
    <div>
        <form onSubmit={login}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEST "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.