import React from 'react';
import ReactPlayer from 'react-player';

function Mechanism() {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
            <ReactPlayer
                url='your-video-url.mp4'
                playing
                loop
                muted
                width='100%'
                height='100%'
            />
        </div>
    );
}

export default Mechanism;
