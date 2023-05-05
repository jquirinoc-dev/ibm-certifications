import { useEffect, useState } from 'react';
import * as validations from '../formValidations'
import { LoginValidationMessage } from './LoginValidationMessage';

export const LoginForm = ( ) => {
    const [passwordFocus, setPasswordFocus] = useState(false);
    const [passwordShow, setPasswordShow] = useState(false);
    const passwordInput = document.getElementById('password');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [errorShow, setErrorShow] = useState(false);

    const handleEnterKeyDown = (e) => {
        if (e.key === 'Enter') {
            validations.handleLoginClick(e, email, password, errorMessage, setErrorMessage, setErrorShow);
        }
    }

    const handleFocus = () => {
        setPasswordFocus(!passwordFocus);
    }

    const handleEyeShow = () => {
        setPasswordShow(!passwordShow);
        passwordInput.type = passwordShow ? 'password' : 'text';
    }
    
    const handleMessageVisibility = () => {
        setErrorShow(false);
    }


  return (
    <>
        
        <form action="" className="login-form" onKeyDown={handleEnterKeyDown}>
                    <h1>Log in</h1>
                    <div className="form-group">
                        <label htmlFor="mail">Email</label>
                        <input 
                            type="text" 
                            name="mail" 
                            id="mail" 
                            onChange={ (e) => validations.handleEmailChange(e, setEmail, setErrorMessage, setErrorShow) } 
                            value={ email }
                            autoComplete='off'
                        />
                    </div>
                    <div className="form-group" onMouseEnter={handleFocus} onMouseLeave={handleFocus} id='login-password'>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            onChange={ (e) => validations.handleLoginPasswordChange(e, setPassword) } 
                            value={ password }/>
                        <svg
                            onClick={handleEyeShow}
                            xmlns="http://www.w3.org/2000/svg" 
                            width="18" 
                            height="18" 
                            fill="currentColor" 
                            class={`bi bi-eye ${passwordFocus ? 'active' : ''}`} 
                            viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                        </svg>
                    </div>
                    
        </form>
        <div className="login-button" onClick={ (e) => validations.handleLoginClick(e, email, password, errorMessage, setErrorMessage, setErrorShow) }>
            Log in
        </div>
        <LoginValidationMessage message={ errorMessage } visible={ errorShow } handleVisibility={ handleMessageVisibility }/>
        
    </>
  )
}
