import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Nama from '../home/nama.jsx';

const MainLayout = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="main-layout">
            {/* Top Bar - untuk jam atau waktu */}
            <div style={{ backgroundColor: 'green', color: 'white', padding: '5px 0', textAlign: 'center', height: 40, borderBottom: '0.5px grey' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <span id="current-time" style={{ fontSize: '14px' }}>Waktu saat ini akan ditampilkan di sini</span>
                    <li style={{ height: '50px', display: 'flex', alignItems: 'center', marginLeft: '150px' }}>
                        <a href="/login" style={{ display: 'block', padding: '0 15px', color: 'white', textDecoration: 'none', height: '100%', display: 'flex', alignItems: 'center' }}>Login</a>
                    </li>
                </div>
            </div>

            {/* Header */}
            <header style={{ position: 'relative' }}>
                {/* Header desktop */}
                <div className="wrap-menu-desktop" style={{ 
                    backgroundColor: 'green', 
                    position: isScrolled ? 'fixed' : 'static', 
                    top: isScrolled ? 0 : 'auto',
                    width: '100%', 
                    zIndex: '1000',
                    height: '50px'
                }}>
                    <nav className="limiter-menu-desktop container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '0 15px' }}>
                        {/* Logo */}
                        <a href="/"style={{ display: 'flex', alignItems: 'center', height: '40px'}}>
                            <img src="/images/icons/uim.png" alt="LOGO" style={{ width: '40px', height: '40px' }} />
                        </a>

                        {/* Menu */}
                        <div className="wrap-menu-desktop" >
                            <div className="menu-desktop">
                                <ul style={{ display: 'flex', alignItems: 'stretch', gap: '0', margin: '0', padding: '0', listStyle: 'none', position: 'relative' }}  className="main-menu">
                                    <li style={{ height: '50px', display: 'flex', alignItems: 'center' }}>
                                        <a href="/" style={{ display: 'block', padding: '0 15px', color: 'white', textDecoration: 'none', height: '100%', display: 'flex', alignItems: 'center', position: 'relative' }}>
                                            <span style={{ position: 'relative', zIndex: 1 }}>Home</span>
                                        </a>
                                    </li>

                                    <li style={{ height: '50px', display: 'flex', alignItems: 'center' }}>
                                        <a href="/profil" style={{ display: 'block', padding: '0 15px', color: 'white', textDecoration: 'none', height: '100%', display: 'flex', alignItems: 'center', position: 'relative' }}>
                                            <span style={{ position: 'relative', zIndex: 1 }}>Profil</span>
                                        </a>
                                    </li>

                                    <li style={{ height: '50px', display: 'flex', alignItems: 'center' }}>
                                        <a href="/penelitian" style={{ display: 'block', padding: '0 15px', color: 'white', textDecoration: 'none', height: '100%', display: 'flex', alignItems: 'center', position: 'relative' }}>
                                            <span style={{ position: 'relative', zIndex: 1 }}>Penelitian</span>
                                        </a>
                                    </li>

                                    <li style={{ height: '50px', display: 'flex', alignItems: 'center' }}>
                                        <a href="/pengabdian" style={{ display: 'block', padding: '0 15px', color: 'white', textDecoration: 'none', height: '100%', display: 'flex', alignItems: 'center', position: 'relative' }}>
                                            <span style={{ position: 'relative', zIndex: 1 }}>Pengabdian</span>
                                        </a>
                                    </li>

                                    <li style={{ height: '50px', display: 'flex', alignItems: 'center' }}>
                                        <a href="/hki" style={{ display: 'block', padding: '0 15px', color: 'white', textDecoration: 'none', height: '100%', display: 'flex', alignItems: 'center', position: 'relative' }}>
                                            <span style={{ position: 'relative', zIndex: 1 }}>HKI</span>
                                        </a>
                                    </li>

                                    <li style={{ height: '50px', display: 'flex', alignItems: 'center' }}>
                                        <a href="/seminar" style={{ display: 'block', padding: '0 15px', color: 'white', textDecoration: 'none', height: '100%', display: 'flex', alignItems: 'center', position: 'relative' }}>
                                            <span style={{ position: 'relative', zIndex: 1 }}>Seminar</span>
                                        </a>
                                    </li>

                                    <li style={{ height: '50px', display: 'flex', alignItems: 'center' }}>
                                        <a href="/permohonan-surat" style={{ display: 'block', padding: '0 15px', color: 'white', textDecoration: 'none', height: '100%', display: 'flex', alignItems: 'center', position: 'relative' }}>
                                            <span style={{ position: 'relative', zIndex: 1 }}>Permohonan Surat</span>
                                        </a>
                                    </li>

                                 

                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

                {/* Header Mobile */}
                <div className="wrap-header-mobile" style={{ backgroundColor: 'green' }}>
                    {/* Button show menu */}
                    <div className="btn-show-menu-mobile hamburger hamburger--squeeze m-r--8" style={{ padding: '15px' }}>
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </div>
                </div>

                {/* Menu Mobile */}
                <div className="menu-mobile">
                    <ul className="topbar-mobile">
                        <li className="left-topbar">
                            <span className="left-topbar-item flex-wr-s-c">
                                <span>
                                    LPPM UIM
                                </span>
                            </span>
                        </li>

                        <li className="right-topbar">
                            <a href="#">
                                <span className="fab fa-facebook-f"></span>
                            </a>

                            <a href="#">
                                <span className="fab fa-twitter"></span>
                            </a>

                            <a href="#">
                                <span className="fab fa-instagram"></span>
                            </a>

                            <a href="#">
                                <span className="fab fa-youtube"></span>
                            </a>
                        </li>
                    </ul>

                    <ul className="main-menu-m">
                        <li>
                            <a href="/">Home</a>
                        </li>

                        <li>
                            <a href="/profil">Profil</a>
                        </li>

                        <li>
                            <a href="/penelitian">Penelitian</a>
                        </li>

                        <li>
                            <a href="/pengabdian">Pengabdian</a>
                        </li>

                        <li>
                            <a href="/hki">HKI</a>
                        </li>

                        <li>
                            <a href="/seminar">Seminar</a>
                        </li>

                        <li>
                            <a href="/permohonan-surat">Permohonan Surat</a>
                        </li>
                    </ul>
                </div>
            </header>

            {/* Main Content - Outlet untuk React Router */}
            <main style={{ paddingTop: isScrolled ? '50px' : '0' }}>
                <Nama/>
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;