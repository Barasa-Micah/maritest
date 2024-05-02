import React from 'react';
import './Mechanism.css';

function Mechanism() {
  return (
    <div className="page-container">
      <div className="mechanism-container">
        <div className="video-wrapper">
          <iframe
            src="https://drive.google.com/file/d/1dCJez4U0hzs_nN_5_1-XWt7UrdUC_3_s/preview"
            title="Google Drive Video"
            width="100%"
            height="100%"
            allow="autoplay"
            className="video-iframe"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Mechanism;
