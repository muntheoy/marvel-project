import React from 'react';
import { Link } from 'react-router-dom';
import marvelLogo from '../assets/marvel-logo.svg'
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <div className="Header">
      <img src={marvelLogo} alt="Marvel Logo" className='Header-logo'/>
      <div className='Header-text'>
        <Link to="/characters"><h4>Characters</h4></Link>
        <Link to="/comics"><h4>Comics</h4></Link>
      </div>
    </div>
  );
}

export default Header;