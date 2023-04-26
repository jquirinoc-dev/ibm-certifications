import '../styles/LoginValidationMessage.css'
import errorIcon from '../assets/Error--filled.svg'
import closeIcon from '../assets/close.svg'


export const LoginValidationMessage = ({ message }) => {

  return (
    <div className="login-validation-message">
      <img src={ errorIcon } alt="" className="error-icon" />
      <h2 className="error-message">
        Lorem ipsum dolor
      </h2>
      <img src={ closeIcon } alt="" className="close" />
    </div>
  )
}
