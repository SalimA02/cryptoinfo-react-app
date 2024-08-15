import React from 'react'
import { useState, useEffect } from 'react';
import {FaCoins} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    }
  }, [isLightMode]);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    
        <div className='navbar'>
            <Link to='/cryptoinfo-react-app  ' >
              <FaCoins className='icon'/>
              <h1>   Crypto <span className='purple'>Info</span></h1>
            </Link>
            <button onClick={toggleTheme} className='theme-toggle'>{isLightMode ? 'Dark Mode' : 'Light Mode'}</button>
        </div>

    
  )
}

export default Navbar