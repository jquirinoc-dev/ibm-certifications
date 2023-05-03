import { useEffect, useState } from 'react';
import dropDown from '../assets/drop-down-arrow.svg';
import { LoginValidationMessage } from './LoginValidationMessage';
import * as validations from '../formValidations';

export const CreateUser = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorShow, setErrorShow] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);
  const [passwordShow, setPasswordShow] = useState(false);
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirm-password');

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  }

  const handleMessageVisibility = () => {
    setErrorShow(false);
  }

  const handlePasswordFocus = () => {
    setPasswordFocus(!passwordFocus);
  }

  const handleConfirmPasswordFocus = () => {
    setConfirmPasswordFocus(!confirmPasswordFocus);
  }

  const handleEyeShow = () => {
    setPasswordShow(!passwordShow);
    passwordInput.type = passwordShow ? 'password' : 'text';
    confirmPasswordInput.type = passwordShow ? 'password' : 'text';
  }




  return (
    <div className={`admin-console-option ${isExpanded ? 'expanded' : ''}`}>
        <div className="collapsed-top" onClick={ handleExpand }>
            <h3>Create user</h3>
            <img src={ dropDown } alt="DropDown" />
        </div>
        <div className="expanded-content">
            <form>
                <div className="user-create-form-row">
                    <div className="user-create-form-group">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            value={ username } 
                            onChange={(e) => validations.handleUsernameChange(e, setUsername, setErrorMessage, setErrorShow)}
                        />
                    </div>
                    <div className="user-create-form-group" id='create-password' onMouseEnter={handlePasswordFocus} onMouseLeave={handlePasswordFocus}>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password"
                            value={ password }
                            onChange={(e) => validations.handlePasswordChange(e, confirmPassword, setPassword, setErrorMessage, setErrorShow)}
                        />
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
                    <div className="user-create-form-group" id='user-type-group'>
                        <label htmlFor="user-type">User type</label>
                        <select name="user-type" id="user-type" onChange={(e) => validations.handleUserTypeChange(e, setUserType, setErrorMessage, setErrorShow)}>
                            <option>Choose an option</option>
                            <option value="admin">Administrator</option>
                            <option value="user">User</option>
                        </select>
                    </div>
                </div>
                <div className="user-create-form-row">
                    <div className="user-create-form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email" 
                            value={ email }
                            onChange={(e) => validations.handleEmailChange(e, setEmail, setErrorMessage, setErrorShow)}
                        />
                    </div>
                    <div className="user-create-form-group" id='confirm-create-password' onMouseEnter={handleConfirmPasswordFocus} onMouseLeave={handleConfirmPasswordFocus}>
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input
                            type="password"
                            id="confirm-password" 
                            name="confirm-password"
                            value={ confirmPassword }
                            onChange={(e) => validations.handlePasswordConfirmChange(e, password, setConfirmPassword, setErrorMessage, setErrorShow)}
                            />
                        <svg
                            onClick={handleEyeShow}
                            xmlns="http://www.w3.org/2000/svg" 
                            width="18" 
                            height="18" 
                            fill="currentColor" 
                            class={`bi bi-eye ${confirmPasswordFocus ? 'active' : ''}`} 
                            viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                        </svg>
                    </div>

                </div>
                
                
                
                
                
            </form>
            <div className="create-button-wrapper" >
                <div className='create-button' onClick={(e) => validations.handleCreateAccountClick(e, username, email, password, confirmPassword, userType, errorMessage, setErrorMessage, setErrorShow)}>
                    Create account
                </div>
                <LoginValidationMessage message={ errorMessage } visible={ errorShow } handleVisibility={ handleMessageVisibility }/>
            </div>
            
        </div>
    </div>
  )
}
