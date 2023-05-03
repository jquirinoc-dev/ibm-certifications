import { useState } from 'react';
import Select from 'react-select';
import dropDown from '../assets/drop-down-arrow.svg';

export const ChangeUserPermissions = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
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
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                        />
                    </div>
                    <div className="user-create-form-group">
                        <label htmlFor="user-type">User type</label>
                            <select name="user-type" id="user-type">
                              <option>Choose an option</option>
                              <option value="admin">Administrator</option>
                              <option value="user">User</option>
                            </select>
                    </div>       
                </div>
            </form>
            <div className="permission-button-wrapper" >
                <div className='permission-button'>
                    Change permissions
                </div>
            /</div>
        </div>
    </div>
  )
}
