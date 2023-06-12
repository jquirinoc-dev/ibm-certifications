import * as regex from './regularExpressions'
import axios from 'axios';


export const handleUsernameChange = (e, setUsername, setErrorMessage, setErrorShow) => {
    setUsername(e.target.value);
  
    if (e.target.value.includes(' ')) {
      setErrorMessage('Username cannot contain spaces');
      setErrorShow(true);
    } else {
      setErrorMessage(null);
      setErrorShow(false);
    }
  }

  export const handleLoginPasswordChange = (e, setPassword) => {
    setPassword(e.target.value);
  }
  
  export const handlePasswordChange = (e, confirmPassword, setPassword, setErrorMessage, setErrorShow) => {
    setPassword(e.target.value);

    if (e.target.value !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      setErrorShow(true);
    } else  {
      setErrorMessage(null);
      setErrorShow(false);
    }
  }
  
  export const handlePasswordConfirmChange = (e, password, setPasswordConfirm, setErrorMessage, setErrorShow) => {
    setPasswordConfirm(e.target.value);
    
    if (e.target.value !== password) {
      setErrorMessage('Passwords do not match');
      setErrorShow(true);
    } else {
      setErrorMessage(null);
      setErrorShow(false);
    }
  }
  
  export const handleEmailChange = (e, setEmail, setErrorMessage, setErrorShow) => {
    setEmail(e.target.value);

    if (e.target.value == '') {
      setErrorMessage(null);
      setErrorShow(false);

    } else if (!e.target.value.match(regex.mailFormat)) {
      setErrorMessage('Email is not valid');
      setErrorShow(true);

    } else {
      setErrorMessage(null);
      setErrorShow(false);

    }
  }

  export const handleUserTypeChange = (e, setUserType, setErrorMessage, setErrorShow) => {
    setUserType(e.target.value);

    if (e.target.value == 'Choose an option') {
      setErrorMessage('Please select a user type');
      setErrorShow(true);
    } else {
      setErrorMessage(null);
      setErrorShow(false);
    }

  }
  

  export const handleLoginClick = async ( e, email, password, errorMessage, setErrorMessage, setErrorShow ) => {
    // prevent default
    e.preventDefault();

    // if ( errorMessage ) {
    //   return;
    // }

    if (email === '' || password === '') {
      setErrorMessage('Missing fields');
      setErrorShow(true);
      return;
    }

    await axios.post('http://206.81.29.146:8000/user/login', {
      email: email,
      password: password,
      is_new_user: false
    })
    .then((response) => {
      localStorage.setItem('token', response.data.access);
      window.location.href = '/dashboard';
      // history.pushState(null, null, '/dashboard');
    })
    .catch((error) => {
      console.log(error);
      setErrorMessage(error.response.data.error);
      setErrorShow(true);
    });
  }

  export const handleCreateAccountClick = async ( e, username, email, password, passwordConfirm, userType, errorMessage, setErrorMessage, setErrorShow ) => {
    // prevent default
    e.preventDefault();

    if ( errorMessage ) {
      return;
    }

    if (username === '' || email === '' || password === '' || passwordConfirm === '' || userType === '') {
      setErrorMessage('Missing fields');
      setErrorShow(true);
      return;
    }

    // Request here
    console.log('Creating account...');
    setErrorShow(false);
}