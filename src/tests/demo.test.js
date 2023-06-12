import {
  handleLoginClick,
  handleEmailChange,
  handleLoginPasswordChange,
  handleUserTypeChange,
  handleUserPermissionsChangeClick
} from '../formValidations';

describe('Login component', () => {

    test('Either email or password cannot be empty strings', () => {
        
        const email = '';
        const password = 'contrasena123';
        const setErrorMessage = jest.fn();
        const setErrorShow = jest.fn();
        
        handleLoginClick(email, password, setErrorMessage, setErrorShow);

        expect(setErrorMessage).toHaveBeenCalledWith('Missing fields');
    });

    test('Email must have a valid format', () => {
        
        const e = {
            target : {
                value : 'email'
            }
        };


        const setEmail = jest.fn();
        const setErrorMessage = jest.fn();
        const setErrorShow = jest.fn();

        handleEmailChange( e, setEmail, setErrorMessage, setErrorShow);

        expect(setErrorMessage).toHaveBeenCalledWith('Email is not valid');
    });

    test('Password is updated everytime the user types', () => {
    
        const e = {
            target : {
                value : 'contrasena123'
            }
        };

        const setPassword = jest.fn();

        handleLoginPasswordChange(e, setPassword);

        expect(setPassword).toHaveBeenCalledWith('contrasena123');
    
    });

    test('User type must be different to `` or `Choose an option`', () => {
        const e = {
            target : {
                value : 'Choose an option'
            }
        };

        const setUserType = jest.fn();
        const setErrorMessage = jest.fn();
        const setErrorShow = jest.fn();

        handleUserTypeChange(e, setUserType, setErrorMessage, setErrorShow);

        expect(setErrorMessage).toHaveBeenCalledWith('Please select a user type');

    });

    test('An email and user type must be provided to change user permisssions', () => { 
        
        const email = 'jojo@ibm.com';
        
        const userType = '';
        const setEmail = jest.fn();
        const setUserType = jest.fn();
        const errorMessage = null;
        const setErrorMessage = jest.fn();
        const setErrorShow = jest.fn();
        const setIsExpanded = jest.fn();

        handleUserPermissionsChangeClick(email, setEmail, userType, setUserType, errorMessage, setErrorMessage, setErrorShow, setIsExpanded);

        expect(setErrorMessage).toHaveBeenCalledWith('Missing fields');
    
    });

    

})