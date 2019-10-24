import React from 'react';
import { Button } from "semantic-ui-react";

import { useDarkMode } from '../hooks/useDarkMode';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '../store/actions';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  const dispatch = useDispatch()
  function handleSignOut() {
    dispatch(signOut())
  }

  return (
    <nav className="navbar">
      <h1>
        <Link to='/dashboard'>One Line A Day</Link>
      </h1>
    
      <div className='lightSwitch_toggle'>
        <h5>Light Switch</h5>
        <div className="dark-mode__toggle" onClick={toggleMode}>
          <div
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
          />
        </div>
      </div>
      <Button onClick={handleSignOut} color='teal'>
        <Link to='/' className='signOutButton'> Sign Out </Link>
      </Button>
     
    </nav>
  );
};

export default Navbar;