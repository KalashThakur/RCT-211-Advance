import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import {useDispatch} from "react-redux";
import { loginFailure, loginSuccess } from '../Redux/auth/action';

export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(email && password) {
          let payload = {
            email: email, 
            password: password
          }
          axios.post("https://reqres.in/api/login", payload)
          .then((res) => {
            return dispatch(loginSuccess(res.data))
          })
          .catch((err) => {
            return dispatch(loginFailure(err))
          })
        }
    }

  return (
    <div>
        <h3>Login Form</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder='email' />
            <br />
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='password' />
            <input type="submit" value="Login" />
        </form>
        
    </div>
  )
}
