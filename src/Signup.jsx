import ibmLogo from './assets/ibm-logo-white.png'
import { SignupForm } from './Components/SignupForm';

export const Signup = () => {
  return (
    <div className="login-wrapper">
        <div className="right-ibm-logo">
            <img src={ ibmLogo } alt="" />
            <h3>Certification Console</h3>
        </div>
        <div className="right-signup-form">
            <SignupForm />
            <div className="signup-bottom-buttons">
                <div className="cancel-button">Cancel</div>
                <div className="signup-button">Sign up</div>
            </div>
        </div>
        
    </div>
  )
}
