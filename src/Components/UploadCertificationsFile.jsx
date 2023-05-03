import { useState } from 'react';
import dropDown from '../assets/drop-down-arrow.svg';

export const UploadCertificationsFile = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  }


  return (
    <div className={`admin-console-option ${isExpanded ? 'expanded' : ''}`}>
        <div className="collapsed-top" onClick={ handleExpand }>
            <h3>Upload certifications file</h3>
            <img src={ dropDown } alt="DropDown"/>
        </div>
        <div className="expanded-content">
            
        </div>
    </div>
  )
}

