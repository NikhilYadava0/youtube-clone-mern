import React, { useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext.jsx' 
import YourChannel from '../components/YourChannel.jsx'; 
import CreateChannel from '../components/CreateChannel.jsx'; 
import { useOutletContext } from 'react-router-dom'


function Channel() {
    const { sidebarOpen } = useOutletContext(); 
    const {user} = useAuth(); 

   
    return (
        <div className='channel-page'>
            {user?.channelId ? <YourChannel />:<CreateChannel />}
        </div>
    )
}

export default Channel 