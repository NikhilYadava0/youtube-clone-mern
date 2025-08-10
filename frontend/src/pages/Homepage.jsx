import React from 'react'
import VideoList from '../components/VideoList.jsx' 
import { useOutletContext } from 'react-router-dom' 
import '../css/homepage.css'

function Homepage() {
  const { sidebarOpen } = useOutletContext();

  return (
    <div className='homepage'>
        <VideoList sidebarOpen={sidebarOpen} /> 
    </div>
  )
}

export default Homepage; 