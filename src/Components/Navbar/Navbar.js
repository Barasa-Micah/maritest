import React, { useEffect, useState } from "react";
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
      <div className='desktopMenu'>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#impact">Impact</a>
          </li>
          <li>
            <a href="#recents">Recent Activities</a>
          </li>
          <li>
            <a href="#story">Our Story</a>
          </li>
          <li>
            <a href="#partners">Partners</a>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

// import React, { useState } from "react";
// import './Navbar.css';
// import menu from '../../assets/menu.png';

// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <nav className='navbar'>
//       <div className={`menu-img ${showMenu ? 'active' : ''}`} onClick={toggleMenu}>
//         <img src={menu} alt='menu'/>
//       </div>
//       <div className={`desktopMenu ${showMenu ? 'show' : ''}`}>
//         <ul>
//           <li>
//             <a href="#home">Home</a>
//           </li>
//           <li>
//             <a href="#mechanism">How it works</a>
//           </li>
//           <li>
//             <a href="#recents">Recent Activities</a>
//           </li>
//           <li>
//             <a href="#story">Our Story</a>
//           </li>
//           <li>
//             <a href="#partners">Partners</a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
