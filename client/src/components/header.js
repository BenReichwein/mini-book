import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../asset/avatar.svg';
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
      <Link to="/home" className='itemMiddle'>
        MINI BOOKS
      </Link>
      <Link to="/publish" className='itemRight' style={{right: '9%', top: '70%'}}>
        Publish
      </Link>
      <Link to="/profile" className='itemRight' style={{right: '2%', top: '60%'}}>
        <img src={Avatar} alt="Avatar" />
      </Link>
    </div>
  );
};

export default Header;