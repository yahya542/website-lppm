import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            {/* Header desktop */}
            <div className="container-menu-desktop">
                <div className="topbar">
                    <div className="content-topbar container h-100">
                        <div className="left-topbar">
                            <span className="left-topbar-item flex-wr-s-c">
                                <span>
                                    LPPM UIM
                                </span>

                                <img className="m-b-1 m-rl-8" src="/images/icons/icon-night.png" alt="IMG" />

                                <span>
                                    Makassar, Indonesia
                                </span>
                            </span>

                            <Link to="/about" className="left-topbar-item">
                                Tentang
                            </Link>

                            <Link to="/contact" className="left-topbar-item">
                                Kontak
                            </Link>
                        </div>

                        <div className="right-topbar">
                            <a href="#">
                                <span className="fab fa-facebook-f"></span>
                            </a>

                            <a href="#">
                                <span className="fab fa-x-twitter"></span>
                            </a>

                            <a href="#">
                                <span className="fab fa-instagram"></span>
                            </a>

                            <a href="#">
                                <span className="fab fa-youtube"></span>
                            </a>
                        </div>
                    </div>
                </div>

                {/*  */}
                <div className="wrap-logo container">
                    {/* Logo desktop */}
                    <div className="logo">
                        <Link to="/"><img src="/images/icons/logo-01.png" alt="LOGO" /></Link>
                    </div>

                    {/* Banner */}
                    <div className="banner-header">
                        <Link to="/"><img src="/images/banner-01.jpg" alt="IMG" /></Link>
                    </div>
                </div>

                {/*  */}
                <div className="wrap-main-nav">
                    <div className="main-nav">
                        {/* Menu desktop */}
                        <nav className="menu-desktop">
                            <Link className="logo-stick" to="/">
                                <img src="/images/icons/logo-01.png" alt="LOGO" />
                            </Link>

                            <ul className="main-menu">
                                <li className="main-menu-active">
                                    <Link to="/">Home</Link>
                                </li>

                                <li>
                                    <Link to="/news">Berita</Link>
                                </li>

                                <li>
                                    <Link to="/announcements">Pengumuman</Link>
                                </li>

                                <li>
                                    <Link to="/research">Riset</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Header Mobile */}
            <div className="wrap-header-mobile">
                {/* Logo moblie */}
                <div className="logo-mobile">
                    <Link to="/"><img src="/images/icons/logo-01.png" alt="IMG-LOGO" /></Link>
                </div>

                {/* Button show menu */}
                <div className="btn-show-menu-mobile hamburger hamburger--squeeze m-r--8">
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
                            <span className="fab fa-x-twitter"></span>
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
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/news">Berita</Link>
                    </li>

                    <li>
                        <Link to="/announcements">Pengumuman</Link>
                    </li>

                    <li>
                        <Link to="/research">Riset</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;