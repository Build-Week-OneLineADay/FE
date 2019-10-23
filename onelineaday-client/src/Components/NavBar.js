import React from 'react';
// import SearchForm from './SearchForm'
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
     <div className='logout-container'>
        {/* <SearchForm /> */}
        <div className="dark-mode__toggle" onClick={toggleMode}>
          <div
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
          />
        </div>
        <Button onClick={handleSignOut} color='teal'>
          <Link to='/' className='signOutButton'> Sign Out </Link>
        </Button>
     </div>
    </nav>
  );
};

export default Navbar;