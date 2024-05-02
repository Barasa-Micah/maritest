import React from 'react';
import './Home.css';
import Maritest from '../../assets/Maritest2-Photoroom.png-Photoroom (1).png';
import teaser from '../../assets/Mari Test teaser.pdf';
import logo from '../../assets/Maritest1.jpg';


const Home = () => {
  const handleDownloadTeaser = () => {
    const teaserPDF = require('../../assets/Mari Test teaser.pdf');
    const link = document.createElement('a');
    link.href = teaserPDF;
    link.download = { teaser };
    link.click();
  };

  return (
    <div className='home'>
    <img src={logo} alt='logo' className='logo'/>
    <section id='intro'>
      <div className='introContent'>
        <span className='introtext'>Mari Test, a device that will end Malaria in resource-restrained communities</span>
        <button className='btn' onClick={handleDownloadTeaser}>Maritest Teaser</button>
      </div>
      <img src={Maritest} alt='profile' className='bg'/>
    </section>
    </div>
  );
}

export default Home;
