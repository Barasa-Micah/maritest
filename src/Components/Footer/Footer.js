import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
      <footer className='footer'>
        <div className='footerContent'>
          <p>&copy; 2024 Maritest. Uganda</p>
          <div className='socialLinks'>
            <a href='https://www.linkedin.com/company/maritest' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href='https://www.instagram.com/maritest' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
