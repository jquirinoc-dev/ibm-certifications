import { useState } from 'react';
import dropDown from '../assets/drop-down-arrow.svg';
import { LoginValidationMessage } from './LoginValidationMessage';
import * as UI from '../HandleUIs'
import * as validations from '../formValidations';
import { UploadStateMessage } from './UploadStateMessage';

export const UploadCertificationsFile = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorShow, setErrorShow] = useState(false);
  const [file, setFile] = useState(null);
  const [isFileSelected, setIsFileSelected] = useState(false);

  const collapse = () => {
    UI.handleExpand(setIsExpanded, isExpanded);
  }

  const upload = (e) => {
    UI.handleFileSelect(e, setFile, setIsFileSelected);
  }

  const submit = () => {
    validations.handleFileFormSubmit(file, setErrorMessage, setErrorShow, setIsExpanded);
    }

    const handleMessageVisibility = () => {
        setErrorShow(false);
    }


  return (
    <div className={`admin-console-option ${isExpanded ? 'expanded' : ''}`}>
        <div className="collapsed-top" onClick={ collapse }>
            <h3>Upload certifications file</h3>
            <img src={ dropDown } alt="DropDown"/>
        </div>
        <div className="expanded-content">
            <form>
                <div className="upload-file-form-row">
                    <div className="user-create-form-group">
                        <h2>Upload files</h2>
                        <p>Supported file type is .csv.</p>
                        <label htmlFor="file">
                            <div className="upload-file">
                                Add file
                            </div>
                            {
                             isFileSelected ? <h4>{file.name}</h4> : null
                            }
                        </label>
                        
                        <input style={{ display: 'none' }} onChange={(e) => upload(e)}

                            type="file"
                            id="file"
                            name="file"
                            accept=".csv"
                        />
                    </div>
                </div> 
            </form>
            <div className="upload-file-button-wrapper" >
                <div className='upload-button' onClick={submit}>
                    Upload file
                </div>
                <UploadStateMessage message={errorMessage} visible={errorShow} handleVisibility={handleMessageVisibility}/>
            </div>
        </div>
    </div>
  )
}