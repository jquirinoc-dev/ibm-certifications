import '../styles/TopNavBar.css'
import ibmLogo from '../assets/ibm-logo-white.png'

export const TopNavBar = () => {
  return (
    <div className="top-nav-bar">
        <div className="top-nav-bar-logo">
            <img src={ ibmLogo } alt="IBM" />
            <h2>Dashboard</h2>
        </div>
        <button className="top-nav-bar-signout-button">
            Sign out
        </button>
    </div>
  )
}
