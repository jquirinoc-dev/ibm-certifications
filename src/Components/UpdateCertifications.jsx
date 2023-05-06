import { useState } from 'react';
import dropDown from '../assets/drop-down-arrow.svg';
import { LoginValidationMessage } from './LoginValidationMessage';

export const UpdateCertifications = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorShow, setErrorShow] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className={`admin-console-option ${isExpanded ? 'expanded' : ''}`}>
        <div className="collapsed-top" onClick={ handleExpand }>
            <h3>Update Certifications</h3>
            <img src={ dropDown } alt="DropDown"/>
        </div>
        <div className="expanded-content">
            <form>
                
                
                
            </form>
          
        </div>
    </div>
  )
}
