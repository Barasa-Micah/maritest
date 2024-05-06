import React from 'react';
import './Home.css';
import Maritest from '../../assets/Hakim.png';
// import teaser from '../../assets/Mari Test teaser.pdf';
import logo from '../../assets/Maritest-logo.png';


const Home = () => {
  // const handleDownloadTeaser = () => {
  //   const teaserPDF = require('../../assets/Mari Test teaser.pdf');
  //   const link = document.createElement('a');
  //   link.href = teaserPDF;
  //   link.download = { teaser };
  //   link.click();
  // };

  return (
    <div className='home'>
    <img src={logo} alt='logo' className='logo'/>
    <section id='intro'>
      <div className='introContent'>
        <p className='bold'>
          <span className='brownish'>Join us </span>
          <span className='greenish'>to End </span> 
          <span className='brownish'>Malaria!</span>
          </p>
        <br></br>
        <br></br>
        {/* <br></br>
        <br></br> */}


        <span className='introtext'>
          <p>
          Mari Test, a device that will end Malaria in resource-restrained communities
          </p>
        </span>
        {/* <button className='btn' onClick={handleDownloadTeaser}>Maritest Teaser</button> */}
      </div>
      <img src={Maritest} alt='profile' className='bg'/>
    </section>
    </div>
  );
}

export default Home;
