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
  

  export const handleLoginClick = async ( email, password, setErrorMessage, setErrorShow ) => {

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
      setErrorMessage(error.response.data.error);
      setErrorShow(true);
    });
  }

  export const handleCreateAccountClick = async ( e, username, email, password, passwordConfirm, 
                                                userType, errorMessage, setErrorMessage, setErrorShow, 
                                                setUsername, setEmail, setPassword, setPasswordConfirm,
                                                setUserType, setIsExpanded  ) => {
    // prevent default
    e.preventDefault();

    if ( errorMessage ) {
      return;
    }

    if (username === '' || email === '' || password === '' || passwordConfirm === '' || userType === '' || userType === 'Choose an option') {
      setErrorMessage('Missing fields');
      setErrorShow(true);
      return;
    }

    if (password !== passwordConfirm) {
      setErrorMessage('Passwords do not match');
      setErrorShow(true);
      return;
    }

    const user = {
      fullname: username,
      email: email,
      password: password,
      role: userType
    }

    await axios.post('http://206.81.29.146:8000/user/create-user', user, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
      })
      .then((response) => {
        console.log(response);
        // Request here
        console.log('Creating account...');
        setErrorShow(false);
        setIsExpanded(false);
        setUsername('');
        setEmail('');
        setPassword('');
        setPasswordConfirm('');
        setUserType('');
        
      }).catch((error) => {
        console.log(error);
      });

    


    

  }

  export const handleUserPermissionsChangeClick = ( email, setEmail, userType, setUserType, errrorMessage, setErrorMessage, setErrorShow, setIsExpanded) => {

      if ( errrorMessage ) {
        return;
      }

      if (email === '' || userType === '' || userType === 'Choose an option') {
        setErrorMessage('Missing fields');
        setErrorShow(true);
        return;
      }



    axios.get(`http://206.81.29.146:8000/user/users?email=${email}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then((response) => {
      console.log(response.data.results[0].id);

      const id = response.data.results?.[0]?.id;

      const user = {
        fullname: response.data.results?.[0]?.fullname,
        email: email,
        role: userType
      }

      

      console.log(id, user);

      axios.put(`http://206.81.29.146:8000/user/users/${id}`, user, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }

      })
      .then((response) => {
        setIsExpanded(false);
        setEmail('');
        setUserType('');
        setErrorShow(false);
        
      })
      .catch((error) => {
        console.log(error);
      });

    }) 
    .catch((error) => {
      setErrorMessage('User not found');
      setErrorShow(true);
    });

  }


  export const handleFileFormSubmit = async (file, setErrorMessage, setErrorShow, setIsExpanded) => {

    const formData = new FormData();
    formData.append('data', file);

    axios.post('http://206.81.29.146:8000/app/upload', formData, {
      headers: {
        'content-type': 'multipart/form-data',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then((response) => {
      console.log(response);
      setIsExpanded(false);
    })
    .catch((error) => {
      console.log(error);
    });

}
