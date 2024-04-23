import React from 'react';
import ReactPlayer from 'react-player';
import video from  '../../assets/Prototype.mp4';

function Mechanism() {
    return (
        <div>
            <ReactPlayer
                url={video}
                playing
                controls
                width='100%'
                height='100vh'
            />
        </div>
    );
}

export default Mechanism;
