import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Nama from '../home/nama.jsx';
import api from '../axios';

const MainLayout = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [loginCredentials, setLoginCredentials] = useState({ email: '', password: '' });
    const [loginError, setLoginError] = useState('');
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    // Check admin login status on component mount
    useEffect(() => {
        const checkAdminStatus = async () => {
            const token = localStorage.getItem('admin_token');
            if (!token) {
                setIsAdminLoggedIn(false);
                return;
            }

            try {
                const response = await api.get('/api/admin/user');
                
                if (response.status === 200) {
                    setIsAdminLoggedIn(true);
                } else {
                    setIsAdminLoggedIn(false);
                    localStorage.removeItem('admin_token');
                }
            } catch (error) {
                // Jika terjadi error, anggap tidak login
                setIsAdminLoggedIn(false);
                localStorage.removeItem('admin_token');
            }
        };
        
        checkAdminStatus();
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
            }
            console.error('Login error:', error);
        }
    };
    
    const handleLogout = async () => {
        try {
            const response = await api.post('/api/admin/logout');
            
            if (response.status === 200) {
                // Remove token from localStorage
                localStorage.removeItem('admin_token');
                
                // Set login status
                setIsAdminLoggedIn(false);
                
                // Redirect ke halaman utama
                window.location.href = '/';
            }
        } catch (error) {
            // Remove token from localStorage even if logout API fails
            localStorage.removeItem('admin_token');
            
            // Set login status and redirect to halaman utama
            setIsAdminLoggedIn(false);
            window.location.href = '/';
            console.error('Logout error:', error);
        }
    };


    return (
        <div className="main-layout">
            {/* Top Bar - untuk jam atau waktu */}
            <div style={{ backgroundColor: 'green', color: 'white', padding: '5px 0', textAlign: 'center', height: 40, borderBottom: '0.5px grey' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <span id="current-time" style={{ fontSize: '14px' }}>Waktu saat ini akan ditampilkan di sini</span>
                    <li style={{ height: '50px', display: 'flex', alignItems: 'center', marginLeft: '150px' }}>
                        {isAdminLoggedIn ? (
                            <button 
                                onClick={handleLogout}
                                style={{ display: 'flex', padding: '0 15px', color: 'white', textDecoration: 'none', height: '100%', alignItems: 'center' }}
                            >
                                Logout
                            </button>
                        ) : (
                            <button 
                                onClick={() => setIsLoginModalOpen(true)}
                                style={{ display: 'flex', padding: '0 15px', color: 'white', textDecoration: 'none', height: '100%', alignItems: 'center' }}
                            >
                                Login
                            </button>
                        )}
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
                                        <a href="/" style={{ display: 'flex', padding: '0 15px', color: 'white', textDecoration: 'none', height: '100%', alignItems: 'center', position: 'relative' }}>
                                            <span style={{ position: 'relative', zIndex: 1 }}>Home</span>
                                        </a>
                                    </li>

                                    <li style={{ height: '50px', display: 'flex', alignItems: 'center' }}>
                                        <a href="/profil" style={{ display: 'flex', padding: '0 15px', color: 'white', textDecoration: 'none', height: '100%', alignItems: 'center', position: 'relative' }}>
                                            <span style={{ position: 'relative', zIndex: 1 }}>Profil</span>
                                        </a>
                                    </li>

                                    <li style={{ height: '50px', display: 'flex', alignItems: 'center' }}>
                                        <a href="/penelitian" style={{ display: 'flex', padding: '0 15px', color: 'white', textDecoration: 'none', height: '100%', alignItems: 'center', position: 'relative' }}>
                                            <span style={{ position: 'relative', zIndex: 1 }}>Penelitian</span>
                                        </a>
                                    </li>

                                    <li style={{ height: '50px', display: 'flex', alignItems: 'center' }}>
                                        <a href="/pengabdian" style={{ display: 'flex', padding: '0 15px', color: 'white', textDecoration: 'none', height: '100%', alignItems: 'center', position: 'relative' }}>
                                            <span style={{ position: 'relative', zIndex: 1 }}>Pengabdian</span>
                                        </a>
                                    </li>

                                    <li style={{ height: '50px', display: 'flex', alignItems: 'center' }}>
                                        <a href="/hki" style={{ display: 'flex', padding: '0 15px', color: 'white', textDecoration: 'none', height: '100%', alignItems: 'center', position: 'relative' }}>
                                            <span style={{ position: 'relative', zIndex: 1 }}>HKI</span>
                                        </a>
                                    </li>

                                    <li style={{ height: '50px', display: 'flex', alignItems: 'center' }}>
                                        <a href="/seminar" style={{ display: 'flex', padding: '0 15px', color: 'white', textDecoration: 'none', height: '100%', alignItems: 'center', position: 'relative' }}>
                                            <span style={{ position: 'relative', zIndex: 1 }}>Seminar</span>
                                        </a>
                                    </li>

                                    <li style={{ height: '50px', display: 'flex', alignItems: 'center' }}>
                                        <a href="/permohonan-surat" style={{ display: 'flex', padding: '0 15px', color: 'white', textDecoration: 'none', height: '100%', alignItems: 'center', position: 'relative' }}>
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
            </header>

            {/* Login Modal */}
            {isLoginModalOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 9999
                }}>
                    <div style={{
                        backgroundColor: 'white',
                        padding: '20px',
                        borderRadius: '8px',
                        width: '400px',
                        maxWidth: '90%'
                    }}>
                        <h3>Admin Login</h3>
                        {loginError && (
                            <div style={{ color: 'red', marginBottom: '10px' }}>
                                {loginError}
                            </div>
                        )}
                        <form onSubmit={handleLogin}>
                            <div style={{ marginBottom: '15px' }}>
                                <label>Email:</label>
                                <input
                                    type="email"
                                    value={loginCredentials.email}
                                    onChange={(e) => setLoginCredentials({...loginCredentials, email: e.target.value})}
                                    style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                                    required
                                />
                            </div>
                            <div style={{ marginBottom: '15px' }}>
                                <label>Password:</label>
                                <input
                                    type="password"
                                    value={loginCredentials.password}
                                    onChange={(e) => setLoginCredentials({...loginCredentials, password: e.target.value})}
                                    style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                                    required
                                />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <button 
                                    type="button" 
                                    onClick={() => setIsLoginModalOpen(false)}
                                    style={{ padding: '8px 16px', backgroundColor: '#ccc', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit" 
                                    style={{ padding: '8px 16px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Main Content - Outlet untuk React Router */}
            <main style={{ paddingTop: isScrolled ? '50px' : '0' }}>
                <Nama/>
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;