import { useState } from 'react';
import { mailFormat, passwordFormat } from '../regularExpressions';
import * as validations from '../formValidations';

export const SignupForm = () => {
    const [passwordFocus, setPasswordFocus] = useState(false);
    const [passwordConfirmFocus, setPasswordConfirmFocus] = useState(false);
    const [passwordShow, setPasswordShow] = useState(false);
    const [passwordConfirmShow, setPasswordConfirmShow] = useState(false);
    const passwordInput = document.getElementById('password');
    const passwordConfirmInput = document.getElementById('confirm-password');

    const [errorMessage, setErrorMessage] = useState(null);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [email, setEmail] = useState('');


    const handlePasswordFocus = () => {
        setPasswordFocus(!passwordFocus);
    }

    const handlePasswordConfirmFocus = () => {
        setPasswordConfirmFocus(!passwordConfirmFocus);
    }

    const handleEyeShow = () => {
        setPasswordShow(!passwordShow);
        passwordInput.type = passwordShow ? 'password' : 'text';
    }

    const handleEyeShowConfirm = () => {
        setPasswordConfirmShow(!passwordConfirmShow);
        passwordConfirmInput.type = passwordConfirmShow ? 'password' : 'text';
    }


  return (
    <>
        <form action="" className="signup-form">
                    <h1>Sign up</h1>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" onChange={(e) => validations.handleUsernameChange(e, setUsername, setErrorMessage)} value={username}/>
                    </div>
                    <div className="form-group" onMouseEnter={handlePasswordFocus} onMouseLeave={handlePasswordFocus} id='signup-password'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={(e) => validations.handlePasswordChange(e, setPassword)} value={password}/>
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
                    <div className="form-group" onMouseEnter={handlePasswordConfirmFocus} onMouseLeave={handlePasswordConfirmFocus} id='signup-confirm-password'>
                        <label htmlFor="confirm-password">Confirm password</label>
                        <input type="password" name="confirm-password" id="confirm-password" />
                        <svg
                            onClick={handleEyeShowConfirm}
                            xmlns="http://www.w3.org/2000/svg" 
                            width="18" 
                            height="18" 
                            fill="currentColor" 
                            class={`bi bi-eye ${passwordConfirmFocus ? 'active' : ''}`} 
                            viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                        </svg>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" onChange={(e) => validations.handleEmailChange(e, setEmail, setErrorMessage)} value={email} />
                    </div>
        </form>
        <FormUploadMessage />
    </>
  )
}
