import './styles/Login.css'
import React, { useEffect, useState } from 'react'
import ibmLogo from './assets/ibm-logo-white.png'
import { LoginForm } from './Components/LoginForm';
import { LoginValidationMessage } from './Components/LoginValidationMessage';
import * as validations from './formValidations'
import { useNavigate } from 'react-router-dom'


export const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/dashboard');
    }
  }, [])

  return (
    <div className="login-wrapper">
        <div className="left-login-form">
            <LoginForm />
        </div>
        <div className="right-ibm-logo">
            <img src={ ibmLogo } alt="" />
            <h3>Certification Console</h3>
        </div>
    </div>

  )
}
