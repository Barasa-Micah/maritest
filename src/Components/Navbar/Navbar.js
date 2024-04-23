import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/Maritest1.jpg';
import {Link} from 'react-scroll';
import menu from '../../assets/stack_14024626.png'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <div className='desktopMenu'>
            <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active'  to="skills" spy={true} smooth={true} offset={-100} duration={500}  className='desktopMenuListItem'>How It Works</Link>
            <Link activeClass='active'  to="works"spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Partners</Link>
        </div>
        <button className='desktopMenuBtn' onClick={() =>{
            document.getElementById('contact').scrollIntoView({behavior:'smooth'})
        }}>
            <img className='desktopMenuImg' alt='login'/>Login</button>

            <img  src={menu} alt='Menu' className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
        <div className='navMenu' style={{display: showMenu? 'flex' : 'none'}}>
            <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() =>setShowMenu(false)}>Home</Link>
            <Link activeClass='active'  to="skills" spy={true} smooth={true} offset={-100} duration={500}  className='listItem' onClick={() =>setShowMenu(false)}>Skills</Link>
            <Link activeClass='active'  to="works"spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() =>setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active'  to="clients" spy={true} smooth={true} offset={-100} duration={500}  className='listItem' onClick={() =>setShowMenu(false)}>Clients</Link>
        </div>
    </nav>
  )
}

export default Navbar

