import React from 'react'
import { Link } from 'react-router-dom';
import '../css/homePage.css' 

import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { IoMdHome } from "react-icons/io";


function SideBar({ sidebarOpen }) {
    return (
        
        <nav className={`sideBar${sidebarOpen ? '' : ' collapsed'}`}>
            <Link to="/" className="sideBar-item">
                <IoMdHome />
                <span className="sideBar-label">Home</span>
            </Link>
            <div className="sideBar-item">
                <SiYoutubeshorts />
                <span className="sideBar-label">Shorts</span>
            </div>
            <div className="sideBar-item">
                <MdSubscriptions />
                <span className="sideBar-label">Subscriptions</span>
            </div>
        </nav>
    )
}

export default SideBar 
