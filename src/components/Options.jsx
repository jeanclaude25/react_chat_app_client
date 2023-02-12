import React, { useContext, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { SocketContext  } from '../SocketContext';

const Options = ( {children} ) => {
    const { me, callAccepted, callEnded, name, setName, leaveCall, callUser} = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');
    
    return(
        <>
        <div>
            Account Info
            <input type={'text'} defaultValue={'Name'}/>
            <CopyToClipboard text={me}>
                <button>
                    Copy your ID
                </button>
            </CopyToClipboard>
        </div>

        <div>
            Make a call
            <input type={'text'} defaultValue={'Name'}/>
            <CopyToClipboard text={me}>
                <button>
                    Copy your ID
                </button>
            </CopyToClipboard>
        </div>

        <div>
            Options
            {children}
        </div>
        </>
        
    )
}

export default Options