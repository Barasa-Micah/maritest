import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/Maritest1.jpg';

const Footer = () => {
    return (
      <footer className='footer'>
        <div className='footerContent'>
          <img src={logo} alt="Logo" className='logo'/> 
          <div className='socialLinks'>
            <a href='https://www.linkedin.com/company/maritest' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href='https://www.instagram.com/maritest' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          <p>&copy; 2024 Maritest. Kampala, Uganda</p>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
