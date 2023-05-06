import { useState } from 'react';
import dropDown from '../assets/drop-down-arrow.svg';
import { LoginValidationMessage } from './LoginValidationMessage';
import * as UI from '../HandleUIs'

export const UploadCertificationsFile = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorShow, setErrorShow] = useState(false);
  const [file, setFile] = useState(null);
  const [isFileUploaded, setIsFileUploaded] = useState(false);

  const collapse = () => {
    UI.handleExpand(setIsExpanded, isExpanded);
  }

  const upload = (e) => {
    UI.handleFileUpload(e, setFile, setIsFileUploaded);
  }


  return (
    <div className={`admin-console-option ${isExpanded ? 'expanded' : ''}`}>
        <div className="collapsed-top" onClick={ collapse }>
            <h3>Update Certifications</h3>
            <img src={ dropDown } alt="DropDown"/>
        </div>
        <div className="expanded-content">
            <form>
                <div className="upload-file-form-row">
                    <div className="user-create-form-group">
                        <h2>Upload files</h2>
                        <p>Max file size is 500kb. Supported file types are .jpg and .png.</p>
                        <label htmlFor="file">
                            <div className="upload-file">
                                Add file
                            </div>
                            {
                             isFileUploaded ? <h4>{file.name}</h4> : null
                            }
                        </label>
                        
                        <input style={{ display: 'none' }} onChange={(e) => upload(e)}

                            type="file"
                            id="file"
                            name="file"
                        />
                    </div>
                </div> 
            </form>
            <div className="upload-file-button-wrapper" >
                <div className='upload-button' >
                    Upload file
                </div>
            </div>
        </div>
    </div>
  )
}