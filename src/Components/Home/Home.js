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
          {/* <p>"Nearly every minute a child below the age of 5 dies from malaria" - UNICEF
          Hakim on Bussi Island </p> */}
          {/* <br></br> */}
          {/* <p>
          Our rationale
          Annually an approximate of 240 million people are infected with malaria and more than half a million people die to malaria. 95% of the deaths happen in Africa and 80% are children below the age of 5 years. (WHO report on Malaria)
          </p> */}

          {/* <p>To combat this, we designed Mari Test, a non-invasive, automated, and reusable malaria diagnosis by leveraging artificial intelligence and advanced sensor technology. </p> */}

          {/* Mari Test seeks to bridge the prevailing gap of limited access to early diagnosis and treatment in these remote regions. It equips communities with a dependable tool for malaria diagnosis and empowers them with valuable data to aid in strategic disease control. */}
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
