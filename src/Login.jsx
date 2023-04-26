import './styles/Login.css'
import React, { useState } from 'react'
import ibmLogo from './assets/ibm-logo-white.png'
import { LoginForm } from './Components/LoginForm';


export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameUpdate = (user) => {
    setUsername(user);
  }

  const handlePasswordUpdate = (pass) => {
    setPassword(pass);
  }

  return (
    <div className="login-wrapper">
        <div className="left-login-form">
            <LoginForm onUserChange={ handleUsernameUpdate } onPasswordChange={ handlePasswordUpdate }/>
            <div className="login-bottom-buttons">
                <div className="signup-button">Sign up</div>
                <div className="login-button">Log in</div>
            </div>
        </div>
        <div className="right-ibm-logo">
            <img src={ ibmLogo } alt="" />
            <h3>Certification Console</h3>
        </div>
    </div>

  )
}
