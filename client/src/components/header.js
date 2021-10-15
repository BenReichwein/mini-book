import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
  return (
    <div className='navMenu'>
      <Link to="/" className='item'>
        Home
      </Link>
      <Link to="/post" className='item'>
        Reads
      </Link>
      <Link to="/profile" className='item'>
        Profile
      </Link>
      <div className="dot"></div>
    </div>
  );
};

export default Header;