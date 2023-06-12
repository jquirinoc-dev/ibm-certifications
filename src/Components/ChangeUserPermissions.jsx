import { useState } from 'react';
import Select from 'react-select';
import dropDown from '../assets/drop-down-arrow.svg';
import * as validations from '../formValidations';
import { LoginValidationMessage } from './LoginValidationMessage';

export const ChangeUserPermissions = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorShow, setErrorShow] = useState(false);
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('');

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  }

  const handleEmail = (e) => {
    validations.handleEmailChange(e, setEmail, setErrorMessage, setErrorShow);
  }

  const handleUserType = (e) => {
    validations.handleUserTypeChange(e, setUserType, setErrorMessage, setErrorShow);
    }


    const handleMessageVisibility = () => {
    setErrorShow(false);
    }

  const changePermissions = (e) => {
    validations.handleUserPermissionsChangeClick(e, email, setEmail, userType, setUserType,
                                                    errorMessage, setErrorMessage, setErrorShow, setIsExpanded);

    }


  return (
    <div className={`admin-console-option ${isExpanded ? 'expanded' : ''}`} >
        <div className="collapsed-top" onClick={ handleExpand }>
            <h3>Change user permissions</h3>
            <img src={ dropDown } alt="DropDown"/>
        </div>
        <div className="expanded-content">
            <form>
                <div className="user-permission-form-row">
                    <div className="user-create-form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email-permissions"
                            name="email-permissions"
                            onChange={(e) => handleEmail(e)}
                            value={email}
                        />
                    </div>
                    <div className="user-create-form-group">
                        <label htmlFor="user-type">User type</label>
                            <select name="user-type-permissions" id="user-type-permissions" onChange={(e) => handleUserType(e)} >
                              <option>Choose an option</option>
                              <option value="admin">Administrator</option>
                              <option value="user">User</option>
                            </select>
                    </div>       
                </div>
            </form>
            <div className="permission-button-wrapper" >
                <div className='permission-button' onClick={(e) => changePermissions(e)}>
                    Change permissions
                </div>
                <LoginValidationMessage 
                    message={errorMessage}
                    visible={errorShow}
                    handleVisibility={handleMessageVisibility}
                />
            </div>
        </div>
    </div>
  )
}
