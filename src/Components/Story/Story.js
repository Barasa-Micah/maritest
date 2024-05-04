import React, { useRef, useEffect } from 'react';
import './Story.css';
// import Switch from '@mui/material/Switch';
// import video from "../../assets/MariTestPitch-Video.mp4";

function Story() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Set to the beginning of the video
      setTimeout(() => {
        videoRef.current.pause(); // Pause the video after 3 minutes
      }, 3 * 60 * 1000); // 3 minutes in milliseconds
    }
  }, []);

  return (
    <div className="page-container">
      <div className="story-container">
        <h1>Our Story</h1>
      </div>
          <div className="scrollable-text">
            <div>
            {/* <p> */}
              <p className='brown'>
              In 2021, an unexpected encounter forever reshaped our founder's life trajectory and the genesis of MariTest. While interning on the remote Bussi Island in Uganda, Kakooza Hakim personally experienced the terrifying grip of malaria. Despite previous encounters with the disease, nothing prepared him for the harsh reality that lay ahead.
              </p>
              {/* <br /><br /> */}
              <p className='brown'>
              A familiar malaise swept over Kakooza one morning, marking the onset of another malaria attack. However, this time, the situation escalated beyond what he'd ever experienced. With no choice but to seek medical attention, he found himself at a local healthcare center, only to face a grueling three-hour wait and the alarming news - they'd run out of Malaria Rapid Diagnostic Test kits (RDTs) and antimalarial drugs. His world crumbled; trapped on the island due to COVID-19 lockdown restrictions, his options dwindled rapidly.
              </p>
              {/* <br /><br /> */}

              <p >
              In desperation, Kakooza resorted to locally common remedies to control the raging fever. His condition worsened, but luck came his way. A special travel permit was arranged, facilitating a transfer to a private mainland hospital. Even then, the parasites had ravaged his liver, pushing him to the brink of existence.</p>
              {/* </p> */}
              {/* <br /><br /> */}
            </div>
            <div>
              <p>
              While recovering, Kakooza pondered over the grim fate of those without the means for better healthcare. Statistics painted a harrowing picture: malaria, an African burden, was projected to have infected 241 million people and claimed over half a million lives in 2020. Shockingly, a child under five fell victim to the disease every 75 seconds. The major challenges were limited access to early malaria diagnosis and treatment, inadequate vector management, scarcity of medical facilities, and a significant deficit of healthcare personnel.
              </p>
              {/* <br /><br /> */}

              <p className='brown'>
              Kakooza, armed with machine learning knowledge acquired as a robotics student at Fundi Bots Uganda and honed entrepreneurial skills at the African Leadership University, was determined to combat malaria. His mission? To employ system thinking principles, artificial intelligence, and data analysis to eradicate malaria in sub-Saharan Africa.
              </p>
              {/* <br /><br /> */}

              <p className='brown'>
              Together with a dedicated team, they conceptualized and developed the MariTest device. A reusable, non-invasive, automated diagnostic and prescription device born from a deep understanding of the healthcare system in sub-Saharan Africa. This powerful tool stands as a testament to their resolve to bridge the gap in malaria diagnosis and treatment, striving to create a malaria-free future.
              </p>
            </div>
        </div>
        <div className="button">
          <a href='https://youtu.be/hcaGO5AV06c?t=2' target='blank'>
          <button>Watch a recorded version</button>
          </a>
        </div>
      </div>
  );
}

export default Story;
