import React from 'react';
import './Mechanism.css'; // Assuming you have a CSS file for styling

function Mechanism() {
  return (
    <div id="mechanism">
      <div className="videoWrapper">
        <iframe
          src="https://drive.google.com/file/d/1dCJez4U0hzs_nN_5_1-XWt7UrdUC_3_s/preview"
          title="Google Drive Video"
          width="640"
          height="360"
          allow="autoplay"
          className="videoIframe"
        ></iframe>
      </div>
    </div>
  );
}

export default Mechanism;
