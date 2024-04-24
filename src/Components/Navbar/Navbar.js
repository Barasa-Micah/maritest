import React from 'react';
import './Navbar.css';
import logo from '../../assets/Maritest1-Photoroom.png-Photoroom (1).png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className='navbar'>
        <div className="logo-container">
          <img src={logo} alt='logo' className='logo'/>
        </div>
        <div className='desktopMenu'>
          <Link to="/" className='desktopMenuListItem'>Home</Link>
          <Link to="/mechanism" className='desktopMenuListItem'>How It Works</Link>
          <Link to="/partners" className='desktopMenuListItem'>Partners</Link>
        </div>
      </nav>
    );
  }
  

export default Navbar;
