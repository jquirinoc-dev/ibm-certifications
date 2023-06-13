import '../styles/LoginValidationMessage.css'
import errorIcon from '../assets/Error--filled.svg'
import closeIcon from '../assets/close.svg'
import { useEffect , useState } from 'react'
import 'animate.css'


export const UploadStateMessage = ({ message, visible, handleVisibility }) => {
  const [visibility, setVisibility] = useState(visible);

  useEffect(() => {
    if (visibility !== visible) {
      setVisibility(visible);
    }
  }, [visible, visibility]);

  const handleClose = () => {
    handleVisibility();
  }

  return (
    <div className={`login-validation-message ${visibility ? 'active' : ''}`}>
      <img src={ errorIcon } alt="" className="error-icon" />
      <h2 className="error-message">
        { message }
      </h2>
      <img src={ closeIcon } alt="" className="close" onClick={ handleClose }/>
    </div>
  )
}