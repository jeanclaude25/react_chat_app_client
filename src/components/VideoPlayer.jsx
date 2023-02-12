import React, { useContext } from 'react';

import { SocketContext } from '../SocketContext';

const VideoPlayer = () => {

    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

    return(
        <>

        {/* Our own video */}
            {stream && (
                <div className='videoPlayer'>
                    { name || 'Name' }
                    <video playsInline muted ref={myVideo} autoPlay className='video'/>
                </div>
            )}
        

        {/* User's video */}
            {callAccepted && !callEnded && (
                <div>
                    { call.name || 'Name' }
                    <video playsInline ref={userVideo} autoPlay className='video'/>
                </div>
            )}
        

        </>
        
    )
}

export default VideoPlayer