import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Recents.css';

import pic1 from '../../assets/malaria-day1.jpeg';
import pic2 from '../../assets/malaria-day2.jpeg';
import pic3 from '../../assets/malaria-day3.jpeg';
import pic4 from '../../assets/malaria-day4.jpeg';

function Recents() {
  const images = [pic1, pic2, pic3, pic4];

  return (
    <div className='slideshow-container'>
      <div className='recents-title'>
        <h2>
          <span className='same'>Check out </span>
          <span className='reveal-text uniq'>our latest </span>
          <span className='same'>Activities</span>
        </h2>
      </div>
     <p className='reveal-text malaria'> Malaria Day Celebration</p>
      <Slide duration={2000} transitionDuration={500} arrows={false}>
        {images.map((each, index) => (
          <div key={index} className='each-slide'>
            <div className='slide-image'>
              <img src={each} alt={`Slide ${index + 1}`} />
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default Recents;


