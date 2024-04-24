import React from 'react';
import './Partners.css';
import BlackPearl from '../../assets/BlackPearl-imageonline.co-4746073.png';
import Futurize from '../../assets/Futurize.png';
import Youthux from '../../assets/Youthux.jpg';
import Fundi from '../../assets/Fundi bots.png';

const Partners = () => {
  return (
    <section id='partnersPage'>
      <div className='partnersFrame'>
        <div id='partners'>
          <h1 className='partnersPagetitle'>Our Partners</h1>
          <div id='partnersList'>
            <div className='partner'>
              <span className='partnerName'>Black Pearl</span>
              <img src={BlackPearl} alt='BlackPearl' className='partnersImg' />
            </div>
            <div className='partner'>
              <span className='partnerName'>Futurize</span>
              <img src={Futurize} alt='Futurize' className='partnersImg' />
            </div>
            <div className='partner'>
              <span className='partnerName'>Youthux</span>
              <img src={Youthux} alt='Youthux' className='partnersImg' />
            </div>
            <div className='partner'>
              <span className='partnerName'>Fundi Bots</span>
              <img src={Fundi} alt='Fundi' className='partnersImg' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners;
