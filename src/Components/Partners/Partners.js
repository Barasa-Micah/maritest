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
          <div id='partnersImgs'>
            <img src={BlackPearl} alt='BlackPearl' className='partnersImg' style={{ height: '120px' }} />
            <img src={Futurize} alt='Futurize' className='partnersImg'/>
            <img src={Youthux} alt='Youtux' className='partnersImg'/>
            <img src={Fundi } alt='Fundi' className='partnersImg'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
