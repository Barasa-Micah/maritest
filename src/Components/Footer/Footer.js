import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
      <footer className='footer'>
        <div className='footerContent'>
          <p>&copy; 2024 Maritest. Uganda</p>
          <div className='socialLinks'>
            <a href='https://www.linkedin.com/company/mari-test-africa/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
            <a href='https://www.instagram.com/maritest_africa?igsh=MXJ5Nmt1bWhsYXkzZg==' target='_blank' rel='noopener noreferrer'>Instagram</a>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
