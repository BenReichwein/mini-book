/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../asset/avatar.svg';
import Times from '../../asset/times.svg';
import Bars from '../../asset/bars.svg';
import Button from './button';
import './styles.css';
import history from '../../history';

const Header = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">
        MINI BOOKS
      </h1>
      <div className="menu-icon" onClick={handleClick}>
        {active ?
          (<img src={Times}></img>) :
          (<img src={Bars}></img>)
        }
      </div>
      <ul className={active ? "nav-menu active" : "nav-menu"}>
        <Link to="/" className="nav-links" onClick={handleClick}>
          <li>Home</li>
        </Link>
        <Link to="/post" className="nav-links" onClick={handleClick}>
          <li>Reads</li>
        </Link>
        <Link to="/publish" className="nav-links" onClick={handleClick}>
          <li>Publish</li>
        </Link>
        <Button onClick={()=> history.push('/profile')}>
          <img src={Avatar} alt="Avatar" />
        </Button>
      </ul>
    </nav>
  );
};

export default Header;
