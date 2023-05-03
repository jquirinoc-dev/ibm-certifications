import '../styles/TopNavBar.css'
import ibmLogo from '../assets/ibm-logo-white.png'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const options = ['Admin console', 'Dashboard'];


export const TopNavBar = () => {
  const [NavBarTitle, setNavBarTitle] = useState(options[1]);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const navigate = useNavigate();

  const handleLeftButtonClick = () => {
    if (selectedOption === options[0]) {
      setSelectedOption(options[1]);
      setNavBarTitle(options[0]);
      navigate('/admin-console');
    } else {
      setSelectedOption(options[0]);
      setNavBarTitle(options[1]);
      navigate('/dashboard');
    }
  }

  const handleSignOutButtonClick = () => {

    localStorage.clear();
    window.location.href = '/login';

  }



  return (
    <div className="top-nav-bar">
        <div className="top-nav-bar-logo">
            <img src={ ibmLogo } alt="IBM" />
            <h2>{ NavBarTitle }</h2>
        </div>
        <button className='top-nav-bar-goback-button' onClick={ handleLeftButtonClick }>
          { selectedOption }
        </button>
        <button className="top-nav-bar-signout-button" onClick={ handleSignOutButtonClick }>
            Sign out
        </button>

    </div>
  )
}
