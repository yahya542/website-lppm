import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="animsition">
            {/* Header */}
            <header>
                {/* Header desktop */}
                <div className="container-menu-desktop">
                    <div className="topbar">
                        <div className="content-topbar container h-100">
                            <div className="left-topbar">
                                <span className="left-topbar-item flex-wr-s-c">
                                    <span>
                                        Jakarta, ID
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
                                    <span className="fab fa-twitter"></span>
                                </a>

                                <a href="#">
                                    <span className="fab fa-instagram"></span>
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
                            <Link to="#"><img src="/images/banner-01.jpg" alt="IMG" /></Link>
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
                                        <Link to="/">Beranda</Link>
                                    </li>

                                    <li>
                                        <Link to="/news">Berita</Link>
                                    </li>

                                    <li>
                                        <Link to="/announcements">Pengumuman</Link>
                                    </li>

                                    <li>
                                        <Link to="/research">Penelitian</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>	
                </div>
            </header>

            {/* Main content */}
            <main>
                <Outlet />
                
                {/* Berita Terbaru Section */}
                <section className="bg0 p-t-60 p-b-25">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 col-lg-8 p-b-20">
                                <div className="how2 how2-cl4 flex-s-c m-r-10 m-r-0-sr991">
                                    <h3 className="f1-m-2 cl3 tab01-title">
                                        Berita Terbaru
                                    </h3>
                                </div>

                                <div className="row p-t-35">
                                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                        {/* Item latest */}	
                                        <div className="m-b-45">
                                            <Link to="#" className="wrap-pic-w hov1 trans-03">
                                                <img src="/images/post-05.jpg" alt="Berita terbaru tentang penelitian" />
                                            </Link>

                                            <div className="p-t-16">
                                                <h5 className="p-b-5">
                                                    <Link to="#" className="f1-m-3 cl2 hov-cl10 trans-03">
                                                        Berita terbaru tentang penelitian
                                                    </Link>
                                                </h5>

                                                <span className="cl8">
                                                    <span className="f1-s-4 cl8 hov-cl10 trans-03">
                                                        oleh LPPM
                                                    </span>

                                                    <span className="f1-s-3 m-rl-3">
                                                        -
                                                    </span>

                                                    <span className="f1-s-3">
                                                        Jan 20
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                        {/* Item latest */}	
                                        <div className="m-b-45">
                                            <Link to="#" className="wrap-pic-w hov1 trans-03">
                                                <img src="/images/post-06.jpg" alt="Pengumuman penting dari LPPM" />
                                            </Link>

                                            <div className="p-t-16">
                                                <h5 className="p-b-5">
                                                    <Link to="#" className="f1-m-3 cl2 hov-cl10 trans-03">
                                                        Pengumuman penting dari LPPM
                                                    </Link>
                                                </h5>

                                                <span className="cl8">
                                                    <span className="f1-s-4 cl8 hov-cl10 trans-03">
                                                        oleh LPPM
                                                    </span>

                                                    <span className="f1-s-3 m-rl-3">
                                                        -
                                                    </span>

                                                    <span className="f1-s-3">
                                                        Jan 18
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                        {/* Item latest */}	
                                        <div className="m-b-45">
                                            <Link to="#" className="wrap-pic-w hov1 trans-03">
                                                <img src="/images/post-07.jpg" alt="Kegiatan pengabdian masyarakat" />
                                            </Link>

                                            <div className="p-t-16">
                                                <h5 className="p-b-5">
                                                    <Link to="#" className="f1-m-3 cl2 hov-cl10 trans-03">
                                                        Kegiatan pengabdian masyarakat
                                                    </Link>
                                                </h5>

                                                <span className="cl8">
                                                    <span className="f1-s-4 cl8 hov-cl10 trans-03">
                                                        oleh LPPM
                                                    </span>

                                                    <span className="f1-s-3 m-rl-3">
                                                        -
                                                    </span>

                                                    <span className="f1-s-3">
                                                        Jan 15
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                        {/* Item latest */}	
                                        <div className="m-b-45">
                                            <Link to="#" className="wrap-pic-w hov1 trans-03">
                                                <img src="/images/post-08.jpg" alt="Inovasi terbaru dalam penelitian" />
                                            </Link>

                                            <div className="p-t-16">
                                                <h5 className="p-b-5">
                                                    <Link to="#" className="f1-m-3 cl2 hov-cl10 trans-03">
                                                        Inovasi terbaru dalam penelitian
                                                    </Link>
                                                </h5>

                                                <span className="cl8">
                                                    <span className="f1-s-4 cl8 hov-cl10 trans-03">
                                                        oleh LPPM
                                                    </span>

                                                    <span className="f1-s-3 m-rl-3">
                                                        -
                                                    </span>

                                                    <span className="f1-s-3">
                                                        Jan 12
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-10 col-lg-4 p-b-20">
                                <div className="p-l-10 p-rl-0-sr991">
                                    <div className="how2 how2-cl4 flex-s-c m-b-30">
                                        <h3 className="f1-m-2 cl3 tab01-title">
                                            Terpopuler
                                        </h3>
                                    </div>

                                    <ul className="p-t-35">
                                        <li className="flex-wr-sb-s p-b-22">
                                            <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                                                1
                                            </div>

                                            <Link to="#" className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
                                                Berita terpopuler minggu ini
                                            </Link>
                                        </li>

                                        <li className="flex-wr-sb-s p-b-22">
                                            <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                                                2
                                            </div>

                                            <Link to="#" className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
                                                Pengumuman penting dari rektorat
                                            </Link>
                                        </li>

                                        <li className="flex-wr-sb-s p-b-22">
                                            <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                                                3
                                            </div>

                                            <Link to="#" className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
                                                Kolaborasi internasional dalam penelitian
                                            </Link>
                                        </li>

                                        <li className="flex-wr-sb-s p-b-22">
                                            <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                                                4
                                            </div>

                                            <Link to="#" className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
                                                Prestasi terbaru dosen dalam publikasi
                                            </Link>
                                        </li>

                                        <li className="flex-wr-sb-s p-b-22">
                                            <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                                                5
                                            </div>

                                            <Link to="#" className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
                                                Workshop metodologi penelitian
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer>
                <div className="bg2 p-t-40 p-b-25">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 p-b-20">
                                <div className="size-h-3 flex-s-c">
                                    <Link to="/">
                                        <img className="max-s-full" src="/images/icons/logo-02.png" alt="LOGO" />
                                    </Link>
                                </div>

                                <div>
                                    <p className="f1-s-1 cl11 p-b-16">
                                        Lembaga Penelitian dan Pengabdian Masyarakat (LPPM) Universitas Indonesia
                                    </p>

                                    <div className="p-t-15">
                                        <a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                                            <span className="fab fa-facebook-f"></span>
                                        </a>

                                        <a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                                            <span className="fab fa-twitter"></span>
                                        </a>

                                        <a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                                            <span className="fab fa-instagram"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>



                            <div className="col-sm-6 col-lg-4 p-b-20">
                                <div className="size-h-3 flex-s-c">
                                    <h5 className="f1-m-7 cl0">
                                        Kategori
                                    </h5>
                                </div>

                                <ul className="m-t--12">
                                    <li className="how-bor1 p-rl-5 p-tb-10">
                                        <Link to="/news" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                                            Berita (12)
                                        </Link>
                                    </li>

                                    <li className="how-bor1 p-rl-5 p-tb-10">
                                        <Link to="/announcements" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                                            Pengumuman (8)
                                        </Link>
                                    </li>

                                    <li className="how-bor1 p-rl-5 p-tb-10">
                                        <Link to="/research" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                                            Penelitian (15)
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg11">
                    <div className="container size-h-4 flex-c-c p-tb-15">
                        <span className="f1-s-1 cl0 txt-center">
                            Copyright © {new Date().getFullYear()} 
                            <Link to="/" className="f1-s-1 cl10 hov-link1"> LPPM UNUSA</Link>
                        </span>
                    </div>
                </div>
            </footer>

            {/* Back to top */}
            <div className="btn-back-to-top" id="myBtn">
                <span className="symbol-btn-back-to-top">
                    <span className="fas fa-angle-up"></span>
                </span>
            </div>
        </div>
    );
};

export default Layout;