import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/Maritest1-Photoroom.png-Photoroom (1).png';
import {Link} from 'react-scroll';
import menu from '../../assets/stack_14024626.png'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <div className='desktopMenu'>
            <Link activeClass='active' to="home" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active'  to="mechanism" spy={true} smooth={true} offset={-100} duration={500}  className='desktopMenuListItem'>How It Works</Link>
            <Link activeClass='active'  to="partners"spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Partners</Link>
        </div>
        <button className='desktopMenuBtn' onClick={() =>{
            document.getElementById('contact').scrollIntoView({behavior:'smooth'})
        }}>Login</button>

            <img  src={menu} alt='Menu' className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
        <div className='navMenu' style={{display: showMenu? 'flex' : 'none'}}>
            <Link activeClass='active' to="home" spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() =>setShowMenu(false)}>Home</Link>
            <Link activeClass='active'  to="mechanism" spy={true} smooth={true} offset={-100} duration={500}  className='listItem' onClick={() =>setShowMenu(false)}>How It Works</Link>
            <Link activeClass='active'  to="partners"spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() =>setShowMenu(false)}>Partners</Link>
        </div>
    </nav>
  )
}

export default Navbar

