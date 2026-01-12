import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Nama from '../home/nama.jsx';
import Tentang from '../home/tentang.jsx';
import Bidang from '../home/bidang.jsx';
import api from '../axios';

const MainLayout = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [loginCredentials, setLoginCredentials] = useState({ email: '', password: '' });
    const [loginError, setLoginError] = useState('');
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post('/api/admin/login', loginCredentials);

            if (response.status === 200) {
                // Store the token
                localStorage.setItem('admin_token', response.data.token);

                // Set login status
                setIsAdminLoggedIn(true);

                // Redirect ke admin panel
                window.location.href = '/admin';
            } else {
                setLoginError(response.data.message || 'Login failed');
            }
        } catch (error) {
            if (error.response) {
                setLoginError(error.response.data.message || 'An error occurred during login');
            } else {
                setLoginError('Network error occurred during login');
                console.error('Network error during login:', error);
            }
            console.error('Login error:', error);
        }
    };

    const handleLogout = async () => {
        try {
            // Hanya redirect ke halaman utama tanpa menghapus token
            window.location.href = '/';

            // Set login status ke false untuk UI
            setIsAdminLoggedIn(false);
        } catch (error) {
            console.error('Logout error:', error);

            // Jika terjadi error, tetap redirect ke halaman utama
            window.location.href = '/';
            setIsAdminLoggedIn(false);
        }
    };


    return (
        <div className="main-layout">
            {/* Header Unified - Only show on Desktop */}
            {!isMobile && (
                <header
                    className="wrap-menu-desktop"
                    style={{
                        backgroundColor: 'green',
                        position: isScrolled ? 'fixed' : 'relative',
                        top: 0,
                        width: '100%',
                        zIndex: '1000',
                        boxShadow: isScrolled ? '0 2px 5px rgba(0,0,0,0.1)' : 'none',
                        transition: 'all 0.3s ease'
                    }}
                >
                    <nav className="container" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        height: '70px',
                        padding: '0 20px',
                        maxWidth: '1200px'
                    }}>

                        {/* 1. LOGO (Left) */}
                        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                            <img src="/images/icons/uim.png" alt="LOGO" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                            {/* Optional Text Logo if needed, currently just Image based on design */}
                        </a>

                        {/* 2. MENU (Center) */}
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <ul style={{
                                display: 'flex',
                                gap: '5px',
                                listStyle: 'none',
                                margin: 0,
                                padding: 0
                            }}>
                                {[
                                    { name: 'Home', path: '/' },
                                    { name: 'Profil', path: '/profil' },
                                    { name: 'Penelitian', path: '/penelitian' },
                                    { name: 'Pengabdian', path: '/pengabdian' },
                                    { name: 'HKI', path: '/hki' },
                                    { name: 'Seminar', path: '/seminar' },
                                    { name: 'Permohonan Surat', path: '/permohonan-surat' },
                                ].map((item, index) => {
                                    const isActive = location.pathname === item.path;
                                    return (
                                        <li key={index}>
                                            <a href={item.path} style={{
                                                color: 'white',
                                                textDecoration: 'none',
                                                padding: '10px 15px',
                                                fontWeight: '500',
                                                fontSize: '15px',
                                                display: 'block',
                                                transition: 'all 0.2s',
                                                borderBottom: isActive ? '3px solid white' : '3px solid transparent',
                                                opacity: isActive ? 1 : 0.9
                                            }}
                                                onMouseOver={(e) => {
                                                    if (!isActive) {
                                                        e.target.style.opacity = '1';
                                                        e.target.style.borderBottom = '3px solid rgba(255,255,255,0.5)';
                                                    }
                                                }}
                                                onMouseOut={(e) => {
                                                    if (!isActive) {
                                                        e.target.style.opacity = '0.9';
                                                        e.target.style.borderBottom = '3px solid transparent';
                                                    }
                                                }}
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        {/* 3. LOGIN BUTTON (Right) */}
                        <div>
                            {isAdminLoggedIn ? (
                                <button
                                    onClick={handleLogout}
                                    style={{
                                        padding: '8px 20px',
                                        backgroundColor: 'white',
                                        color: 'green',
                                        border: 'none',
                                        borderRadius: '20px',
                                        fontWeight: 'bold',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Logout
                                </button>
                            ) : (
                                <button
                                    onClick={() => setIsLoginModalOpen(true)}
                                    style={{
                                        padding: '8px 20px',
                                        backgroundColor: 'rgba(255,255,255,0.2)',
                                        color: 'white',
                                        border: '1px solid rgba(255,255,255,0.5)',
                                        borderRadius: '20px',
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                        transition: 'background-color 0.2s'
                                    }}
                                    onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.3)'}
                                    onMouseOut={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.2)'}
                                >
                                    Login
                                </button>
                            )}
                        </div>
                    </nav>
                </header>
            )}

            {/* Mobile Header (Hidden on Desktop, Visible on Mobile via CSS usually, but here we force visibility based on state for cleanup) */}
            {isMobile && (
                <div className="wrap-header-mobile" style={{ backgroundColor: 'green', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px' }}>
                    {/* Logo Mobile */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="/images/icons/uim.png" alt="LOGO" style={{ width: '40px', height: '40px' }} />
                    </div>

                    {/* Simplified for this refactor to focus on Desktop fix first */}
                    <div className="btn-show-menu-mobile hamburger hamburger--squeeze m-r--8" style={{ padding: '0' }}>
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </div>
                </div>
            )}

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

                    <li>
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsLoginModalOpen(true);
                            }}
                        >
                            Admin
                        </a>
                    </li>
                </ul>
            </div>


            {/* Login Modal */}
            <AnimatePresence>
                {isLoginModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsLoginModalOpen(false)} // Close on backdrop click
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            backdropFilter: 'blur(5px)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: 9999
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 500 }}
                            onClick={(e) => e.stopPropagation()} // Prevent close on card click
                            style={{
                                backgroundColor: 'white',
                                borderRadius: '20px',
                                width: '400px',
                                maxWidth: '90%',
                                overflow: 'hidden',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                                position: 'relative'
                            }}
                        >
                            {/* Header */}
                            <div style={{
                                background: 'linear-gradient(135deg, #004d26 0%, #008000 100%)',
                                padding: '30px',
                                textAlign: 'center',
                                color: 'white'
                            }}>
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    backgroundColor: 'white',
                                    borderRadius: '50%',
                                    margin: '0 auto 15px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                                }}>
                                    <img src="/images/icons/uim.png" alt="Logo" style={{ width: '40px' }} />
                                </div>
                                <h3 style={{ margin: 0, fontWeight: 'bold', fontSize: '1.5rem' }}>Admin Portal</h3>
                                <p style={{ margin: '5px 0 0', opacity: 0.8, fontSize: '0.9rem' }}>Silakan login untuk melanjutkan</p>
                            </div>

                            {/* Body */}
                            <div style={{ padding: '30px' }}>
                                {loginError && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        style={{
                                            backgroundColor: '#ffebee',
                                            color: '#c62828',
                                            padding: '10px 15px',
                                            borderRadius: '8px',
                                            marginBottom: '20px',
                                            fontSize: '14px',
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <i className="fas fa-exclamation-circle" style={{ marginRight: '8px' }}></i>
                                        {loginError}
                                    </motion.div>
                                )}

                                <form onSubmit={handleLogin}>
                                    <div style={{ marginBottom: '20px' }}>
                                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Email Address</label>
                                        <div style={{ position: 'relative' }}>
                                            <i className="fas fa-envelope" style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#aaa' }}></i>
                                            <input
                                                type="email"
                                                value={loginCredentials.email}
                                                onChange={(e) => setLoginCredentials({ ...loginCredentials, email: e.target.value })}
                                                placeholder="Masukan email anda"
                                                style={{
                                                    width: '100%',
                                                    padding: '12px 15px 12px 45px',
                                                    borderRadius: '10px',
                                                    border: '1px solid #eee',
                                                    backgroundColor: '#f9f9f9',
                                                    outline: 'none',
                                                    transition: 'all 0.3s'
                                                }}
                                                onFocus={(e) => {
                                                    e.target.style.borderColor = 'green';
                                                    e.target.style.backgroundColor = 'white';
                                                    e.target.style.boxShadow = '0 0 0 3px rgba(0, 128, 0, 0.1)';
                                                }}
                                                onBlur={(e) => {
                                                    e.target.style.borderColor = '#eee';
                                                    e.target.style.backgroundColor = '#f9f9f9';
                                                    e.target.style.boxShadow = 'none';
                                                }}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div style={{ marginBottom: '25px' }}>
                                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Password</label>
                                        <div style={{ position: 'relative' }}>
                                            <i className="fas fa-lock" style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#aaa' }}></i>
                                            <input
                                                type="password"
                                                value={loginCredentials.password}
                                                onChange={(e) => setLoginCredentials({ ...loginCredentials, password: e.target.value })}
                                                placeholder="Masukan password"
                                                style={{
                                                    width: '100%',
                                                    padding: '12px 15px 12px 45px',
                                                    borderRadius: '10px',
                                                    border: '1px solid #eee',
                                                    backgroundColor: '#f9f9f9',
                                                    outline: 'none',
                                                    transition: 'all 0.3s'
                                                }}
                                                onFocus={(e) => {
                                                    e.target.style.borderColor = 'green';
                                                    e.target.style.backgroundColor = 'white';
                                                    e.target.style.boxShadow = '0 0 0 3px rgba(0, 128, 0, 0.1)';
                                                }}
                                                onBlur={(e) => {
                                                    e.target.style.borderColor = '#eee';
                                                    e.target.style.backgroundColor = '#f9f9f9';
                                                    e.target.style.boxShadow = 'none';
                                                }}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: '15px' }}>
                                        <button
                                            type="button"
                                            onClick={() => setIsLoginModalOpen(false)}
                                            style={{
                                                flex: 1,
                                                padding: '12px',
                                                backgroundColor: '#f5f5f5',
                                                color: '#777',
                                                border: 'none',
                                                borderRadius: '10px',
                                                cursor: 'pointer',
                                                fontWeight: 'bold',
                                                transition: 'all 0.2s'
                                            }}
                                            onMouseOver={(e) => e.target.style.backgroundColor = '#eeeeee'}
                                            onMouseOut={(e) => e.target.style.backgroundColor = '#f5f5f5'}
                                        >
                                            Batal
                                        </button>
                                        <button
                                            type="submit"
                                            style={{
                                                flex: 1,
                                                padding: '12px',
                                                background: 'linear-gradient(135deg, #004d26 0%, #008000 100%)',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '10px',
                                                cursor: 'pointer',
                                                fontWeight: 'bold',
                                                boxShadow: '0 4px 15px rgba(0, 128, 0, 0.3)',
                                                transition: 'all 0.2s'
                                            }}
                                            onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                                            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
                                        >
                                            Masuk <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content - Outlet untuk React Router */}
            <main style={{ paddingTop: isScrolled ? '50px' : '0', minHeight: 'calc(100vh - 300px)' }}>
                <Outlet />
            </main>

            {/* Footer */}
            <footer style={{ backgroundColor: 'green', color: '#fff', padding: '40px 0 20px' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                    <div className="footer-content" style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: '30px', marginBottom: '30px' }}>

                        {/* Column 1: Address */}
                        <div>
                            <h5 style={{ fontWeight: 'bold', marginBottom: '15px', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '10px' }}>Address</h5>
                            <p style={{ fontSize: '14px', lineHeight: '1.6' }}>
                                Jl. Raya Bettet Pamekasan<br />
                                Madura - Jawa Timur
                            </p>
                        </div>

                        {/* Column 2: Contact Us */}
                        <div>
                            <h5 style={{ fontWeight: 'bold', marginBottom: '15px', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '10px' }}>Contact Us</h5>
                            <p style={{ fontSize: '14px', lineHeight: '1.6' }}>
                                Phone: (0324) 322222<br />
                                Email: lppm@uim.ac.id
                            </p>
                        </div>

                        {/* Column 3: Follow us */}
                        <div>
                            <h5 style={{ fontWeight: 'bold', marginBottom: '15px', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '10px' }}>Follow us on Social Media</h5>
                            <div style={{ display: 'flex', gap: '15px' }}>
                                <a href="#" style={{ color: 'white', fontSize: '20px' }}><i className="fab fa-facebook-f"></i></a>
                                <a href="#" style={{ color: 'white', fontSize: '20px' }}><i className="fab fa-twitter"></i></a>
                                <a href="#" style={{ color: 'white', fontSize: '20px' }}><i className="fab fa-instagram"></i></a>
                                <a href="#" style={{ color: 'white', fontSize: '20px' }}><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>

                        {/* Column 4: Maps */}
                        <div>
                            <h5 style={{ fontWeight: 'bold', marginBottom: '15px', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '10px' }}>Maps</h5>
                            <div style={{ width: '100%', height: '100px', backgroundColor: '#e0e0e0', borderRadius: '4px', overflow: 'hidden' }}>
                                {/* Map pointing to Universitas Islam Madura */}
                                <iframe
                                    src="https://maps.google.com/maps?q=Universitas%20Islam%20Madura&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '20px', textAlign: 'center', fontSize: '12px' }}>
                        COPYRIGHT © 2026 - LPPM UNIVERSITAS ISLAM MADURA. ALL RIGHTS RESERVED.
                    </div>
                </div>
            </footer>
        </div >

    );
};

export default MainLayout;