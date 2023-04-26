import * as regex from './regularExpressions'


export const handleUsernameChange = (e, setUsername, setErrorMessage) => {
    setUsername(e.target.value);
  
    if (e.target.value.includes(' ')) {
      setErrorMessage('Username cannot contain spaces');
    } else {
      setErrorMessage('');
    }
  }
  
  export const handlePasswordChange = (e, setPassword) => {
    setPassword(e.target.value);
  }
  
  export const handlePasswordConfirmChange = (e, setPasswordConfirm) => {
    setPasswordConfirm(e.target.value);
  }
  
  export const handleEmailChange = (e, setEmail, setErrorMessage) => {
    setEmail(e.target.value);
  
    if (!e.target.value.match(regex.mailFormat)) {
      setErrorMessage('Email is not valid');
    } else {
      setErrorMessage('');
    }
  }

  export const handleLoginClick = ( username, password, setErrorMessage ) => {
    if (username === '' || password === '') {
      setErrorMessage('Missing fields');
      return;
    } 
    // Login logic here
  }
  