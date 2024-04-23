import React from 'react'
import './Home.css';
import Maritest from '../../assets/Maritest2-Photoroom.png-Photoroom.png/';
const Home = () => {
    const handleDownloadTeaser = () => {
        const teaserPDF = require('../../assets/Mari Test teaser.pdf');
        const link = document.createElement('a')
        link.href = teaserPDF;
        link.download = {resume};
        link.click();
    };
  return (
    <section id='intro'>
        <div className='introContent'>
            <span>Mari Test, a device that will end Malaria  <br/> in a resource restrained communities</span>
            <button className='btn' onClick={handleDownloadTeaser}> Maritest Teaser</button>
        </div>
        <img  src={Maritest} alt='profile' className='bg'/>
    </section>
  )
}

export default Home;
