import React from 'react';
import './Partners.css';
import BlackPearl from '../../assets/Black Pearl.png';
import Futurize from '../../assets/Futurize-logo.png';
import Youthux from '../../assets/Youthux.jpg';
import Fundi from '../../assets/Fundi_Bots_Logo.png';
import Solve from '../../assets/SOLV_Ed.png';

const Partners = () => {
  return (
    <section id='partnersPage'>
      <div className='partnersFrame'>
        <div id='partners'>
          <h1 className='partnersPagetitle'>Happy to be in Partnership with</h1>
          <div id='partnersList'>
            <div className='partner'>
              {/* <span className='partnerName'>Black Pearl</span> */}
              <a href="https://blackpearlglobalinvestments.com/ " target="_blank" rel="noopener noreferrer">
              <img src={BlackPearl} alt='BlackPearl' className='partnersImg' href='https://blackpearlglobalinvestments.com/' />
              </a>
            </div>
            <div className='partner'>
            <a href="https://www.futurize.studio/" target="_blank" rel="noopener noreferrer" >
              <img src={Futurize} alt='Futurize' className='partnersImg' />
              </a>
            </div>
            <div className='partner'>
            <a href="https://youtu.be/lFM02WNWhoM?t=1" target="_blank" rel="noopener noreferrer" >
              <img src={Youthux} alt='Youthux' className='partnersImg' />
              </a>
            </div>
            <div className='partner'>
            <a href="https://fundibots.org/" target="_blank" rel="noopener noreferrer">
                <img src={Fundi} alt='Fundi' className='partnersImg' />
            </a>
            </div>
            <div className='partner'>
            <a href="https://solve.mit.edu/" target="_blank" rel="noopener noreferrer">
              <img src={Solve} alt='solve' className='partnersImg' />
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners;
