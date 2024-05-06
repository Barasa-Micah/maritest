import React from 'react'
import newdevice from '../../assets/new-devices.png';
import './Mechanism.css'

function Mechanism() {
  return (
    <div className='mechanism'>
        <h1> <span className='same'>Maritest's </span>
        <span className='uniq'>Impact</span> <span className='same'>To the world</span></h1>
        <div className='mechanism-content'>
            <div className='device-left'>
                {/* <div className='device-image'> */}
                    <img src={newdevice} alt='device'/>
                {/* </div> */}
            </div>

            <div className='content-right'>
                <div className='h-stats'>
               <div className='stats'>
                <span className='main-stats'>50+</span>
                <span>Tests Done</span>
               </div>

               <div className='stats'>
               <span className='main-stats'>10+</span>
               <span>Hospitals</span>
               </div>

               <div className='stats'>
               <span className='main-stats'>60%</span>
               <span>Accuracy rate</span>
               </div>
                </div>

                <div className='product-stats'>
                    <h2>Product Features</h2>
                    <div className='features'>
                    <div className='product-left'>
                        <ul>
                            <li>Non-invasive/Bloodness</li>
                            <li>Portable and Solar-poweredt</li>
                            <li>Rapid Results</li>
                        </ul>
                    </div> 
                    <div className='product-right'>
                        <ul>
                            <li>AI-Powered</li>
                            <li>Reusable</li>
                            <li>ESG Compliant</li>
                        </ul>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Mechanism
 