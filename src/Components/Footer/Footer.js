import React from 'react';
import './Footer.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/Maritest-logo.png';
// import linkedin_icon from '../../assets/linkedin.png';
// import IG_tag from '../../assets/IG.jpeg';
import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/linkedin'

const Footer = () => {
    return (
      <footer className='footer'>
        <div className='footerContent'>
          <img src={logo} alt="Logo" className='logo'/> 
          <div className='socialLinks'>
            {/* <a href='https://www.linkedin.com/company/mari-test-africa/' target='_blank' rel='noopener noreferrer'> */}
              {/* <FontAwesomeIcon icon={faLinkedin} /> */}
              {/* <FontAwesomeIcon icon={faLinkedin} size="sm" /> */}
              {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" /> */}
              <SocialIcon url="https://www.linkedin.com/company/mari-test-africa/" />
              {/* <img src={linkedin_icon} alt='linkedin' /> */}
            {/* </a> */}
            {/* <a href='https://www.instagram.com/maritest' target='_blank' rel='noopener noreferrer'> */}
              {/* <FontAwesomeIcon icon={faInstagram} /> */}
              <SocialIcon url="https://www.instagram.com/maritest" />
            {/* </a> */}
            <div className='contacts'>
              <h3>Contact Us</h3>
              <p>
              <p><b>Tel: </b> +250790135516</p>
              <b>Email: </b>info@maritest.com </p>
            </div>
          <p>&copy; 2024 Maritest. Kampala, Uganda</p>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
