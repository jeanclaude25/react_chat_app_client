import React from 'react';
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';
import AppBar from './components/AppBar';

const App = () => {
    return(
        <div className='wrapper'>
            <AppBar/>

            <VideoPlayer/>
            <Options>
                <Notifications/>
            </Options>

        </div>
    )
}

export default App