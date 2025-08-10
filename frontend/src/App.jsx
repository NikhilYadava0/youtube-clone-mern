import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import SideBar from './components/SideBar.jsx'; 
import { Outlet } from 'react-router-dom'; 
import './App.css'; 

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [searchedVal, setSearchedVal] = useState("");
    const [searchActive, setSearchActive] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

   
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

       
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isMobile = windowWidth <= 792;

   
    const mainContentStyle = {
        
        marginLeft: isMobile ? 0 : (sidebarOpen ? 220 : 72),
       
        transition: isMobile ? 'none' : 'margin-left 0.2s cubic-bezier(.4,0,.2,1)'
    };

    const handleSearch = () => {
        setSearchActive(true);
    };

    return (
        <>
            <Header
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                searchedVal={searchedVal}
                setSearchedVal={setSearchedVal}
                onSearch={handleSearch}
            />
            <div className="app-layout">
              
                <SideBar sidebarOpen={sidebarOpen} isMobile={isMobile} />
                <div className="main-content" style={mainContentStyle}>
                    
                    <Outlet context={{
                        sidebarOpen,
                        searchedVal,
                        setSearchedVal,
                        searchActive,
                        setSearchActive
                    }} />
                </div>
            </div>
        </>
    );
}

export default App; 