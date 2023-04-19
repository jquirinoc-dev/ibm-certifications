import './styles/Login.css'
import ibmLogo from './assets/ibm-logo-white.png'
import { LoginForm } from './Components/LoginForm';

export const Login = () => {

  return (
    <div className="login-wrapper">
        <div className="left-login-form">
            <LoginForm />
            <div className="login-bottom-buttons">
                <div className="signup-button">Sign up</div>
                <div className="login-button">Log in</div>
            </div>
        </div>
        <div className="right-ibm-logo">
            <img src={ ibmLogo } alt="" />
            <h3>Certification Console</h3>
        </div>
    </div>

  )
}
