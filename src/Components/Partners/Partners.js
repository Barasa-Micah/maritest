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
              {/* <span className='partnerName'>Black Pearl</span> */}
              <a href="https://blackpearlglobalinvestments.com/ " className='partnerName'>Black Pearl</a>
              <img src={BlackPearl} alt='BlackPearl' className='partnersImg' />
            </div>
            <div className='partner'>
            <a href="https://www.futurize.studio/" className='partnerName'>Futurize</a>
              <img src={Futurize} alt='Futurize' className='partnersImg' />
            </div>
            <div className='partner'>
            <a href="https://youtu.be/lFM02WNWhoM?t=1" className='partnerName'>Youth UX</a>
              <img src={Youthux} alt='Youthux' className='partnersImg' />
            </div>
            <div className='partner'>
            <a href="https://fundibots.org/" className='partnerName'>Fundi Bots</a>
              <img src={Fundi} alt='Fundi' className='partnersImg' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners;
