import React from 'react';

const Home = () => {
    return (
        <div className="main-content" style={{ padding: '20px',    }}>
            <div  className='container'   >
                <div className="horizontal-scroll-container" style={{ overflowX: 'hidden', whiteSpace: 'nowrap', padding: '25px 20px', width: '100%', position: 'relative', margin: '30px 0',  }}>
                    <div className="horizontal-grid" id="autoScrollGrid" style={{ display: 'flex', width: '200%' }}>
                        <div className="grid-item" style={{ width: '370px', height: '370px', backgroundColor: 'white', margin: '0 25px', borderRadius: '20px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', color: '#666' }}>
                            <img src="/images/poster/1.png" alt="1" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
                        </div>
                        <div className="grid-item" style={{ width: '370px', height: '370px', backgroundColor: 'white', margin: '0 25px', borderRadius: '20px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', color: '#666' }}>
                            <img src="/images//poster/2.jpg" alt="1" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
                        </div>
                        <div className="grid-item" style={{ width: '370px', height: '370px', backgroundColor: 'white', margin: '0 25px', borderRadius: '20px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', color: '#666' }}>
                            <img src="/images//poster/5.jpg" alt="1" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
                        </div>
                        {/* Duplikat untuk efek looping */}
                        <div className="grid-item" style={{ width: '370px', height: '370px', backgroundColor: 'white', margin: '0 25px', borderRadius: '20px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', color: '#666' }}>
                            <img src="/images//poster/6.jpg" alt="1" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
                        </div>
                        <div className="grid-item" style={{ width: '370px', height: '370px', backgroundColor: 'white', margin: '0 25px', borderRadius: '20px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', color: '#666' }}>
                            <img src="/images/poster/5.jpg" alt="1" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
                        </div>
                        <div className="grid-item" style={{ width: '370px', height: '370px', backgroundColor: 'white', margin: '0 25px', borderRadius: '20px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', color: '#666' }}>
                            <img src="/images//poster/7.jpg" alt="1" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
                        </div>
                    </div>
                </div>
                <style>{`
                    #autoScrollGrid {
                        animation: scrollAnimation 20s linear infinite;
                    }
                    @keyframes scrollAnimation {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }
                `}</style>
               {/*  <div className="row">
                    <div className="col-md-8">
                        <div style={{ backgroundColor: 'white', padding: '20px', marginBottom: '20px', borderRadius: '5px' }}>
                            <h2>Berita Terbaru</h2>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                                <img src="/images/poster/1.png" alt="Berita 1" style={{ width: '120px', height: '80px', objectFit: 'cover', marginRight: '15px' }} />
                                <div>
                                    <h4>Judul Berita Terbaru 1</h4>
                                    <p style={{ color: '#666', fontSize: '14px' }}>Tanggal: 29 Desember 2025</p>
                                    <p>Ini adalah contoh berita terbaru dari LPPM UIM untuk menampilkan tampilan utama halaman...</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                                <img src="/images/icons/logo-01.png" alt="Berita 2" style={{ width: '120px', height: '80px', objectFit: 'cover', marginRight: '15px' }} />
                                <div>
                                    <h4>Judul Berita Terbaru 2</h4>
                                    <p style={{ color: '#666', fontSize: '14px' }}>Tanggal: 28 Desember 2025</p>
                                    <p>Contoh berita kedua yang menampilkan informasi penting terkait penelitian dan pengabdian masyarakat...</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img src="/images/icons/logo-01.png" alt="Berita 3" style={{ width: '120px', height: '80px', objectFit: 'cover', marginRight: '15px' }} />
                                <div>
                                    <h4>Judul Berita Terbaru 3</h4>
                                    <p style={{ color: '#666', fontSize: '14px' }}>Tanggal: 27 Desember 2025</p>
                                    <p>Contoh berita ketiga yang menampilkan capaian terbaru dari Lembaga Penelitian dan Pengabdian Masyarakat...</p>
                                </div>
                            </div>
                        </div>
                        
                        <div style={{ backgroundColor: 'white', padding: '20px', marginBottom: '20px', borderRadius: '5px' }}>
                            <h2>Pengumuman</h2>
                            <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderLeft: '4px solid #007bff', marginBottom: '10px' }}>
                                <h4>Pengumuman Penting 1</h4>
                                <p>Ini adalah contoh pengumuman penting dari LPPM UIM untuk menampilkan tampilan utama halaman...</p>
                                <small style={{ color: '#666' }}>Tanggal: 29 Desember 2025</small>
                            </div>
                            <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderLeft: '4px solid #28a745', marginBottom: '10px' }}>
                                <h4>Pengumuman Penting 2</h4>
                                <p>Contoh pengumuman kedua yang memberitahukan tentang jadwal pelatihan dan workshop terbaru...</p>
                                <small style={{ color: '#666' }}>Tanggal: 28 Desember 2025</small>
                            </div>
                            <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderLeft: '4px solid #ffc107' }}>
                                <h4>Pengumuman Penting 3</h4>
                                <p>Contoh pengumuman ketiga tentang penutupan sementara layanan administrasi...</p>
                                <small style={{ color: '#666' }}>Tanggal: 27 Desember 2025</small>
                            </div>
                        </div>
                        
                        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}>
                            <h2>Publikasi Terbaru</h2>
                            <div style={{ borderBottom: '1px solid #eee', padding: '10px 0' }}>
                                <h5>Penelitian Inovatif di Bidang Teknologi</h5>
                                <p style={{ color: '#666' }}>Oleh: Dr. Ahmad Sudrajat, M.T. | Jurnal Ilmiah Nasional | 26 Desember 2025</p>
                            </div>
                            <div style={{ borderBottom: '1px solid #eee', padding: '10px 0' }}>
                                <h5>Pengabdian Masyarakat Berbasis Teknologi</h5>
                                <p style={{ color: '#666' }}>Oleh: Dr. Siti Rahmawati, M.Si. | Laporan Lapangan | 25 Desember 2025</p>
                            </div>
                            <div style={{ borderBottom: '1px solid #eee', padding: '10px 0' }}>
                                <h5>Implementasi AI dalam Pendidikan</h5>
                                <p style={{ color: '#666' }}>Oleh: Dr. Budi Santoso, Ph.D. | Konferensi Internasional | 24 Desember 2025</p>
                            </div>
                            <div style={{ padding: '10px 0' }}>
                                <h5>Analisis Kebijakan Pendidikan Terkini</h5>
                                <p style={{ color: '#666' }}>Oleh: Dr. Rina Kartika, M.Pd. | Jurnal Kebijakan Pendidikan | 23 Desember 2025</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-4">
                        <div style={{ backgroundColor: 'white', padding: '20px', marginBottom: '20px', borderRadius: '5px' }}>
                            <h3>Statistik</h3>
                            <div style={{ textAlign: 'center', padding: '20px', borderBottom: '1px solid #eee' }}>
                                <img src="/images/icons/logo-01.png" alt="Statistik" style={{ width: '80px', height: '80px', marginBottom: '10px' }} />
                                <h4 style={{ color: '#007bff' }}>150+</h4>
                                <p style={{ margin: 0 }}>Penelitian</p>
                            </div>
                            <div style={{ textAlign: 'center', padding: '20px', borderBottom: '1px solid #eee' }}>
                                <img src="/images/icons/logo-01.png" alt="Statistik" style={{ width: '80px', height: '80px', marginBottom: '10px' }} />
                                <h4 style={{ color: '#28a745' }}>89+</h4>
                                <p style={{ margin: 0 }}>Pengabdian Masyarakat</p>
                            </div>
                            <div style={{ textAlign: 'center', padding: '20px', borderBottom: '1px solid #eee' }}>
                                <img src="/images/icons/logo-01.png" alt="Statistik" style={{ width: '80px', height: '80px', marginBottom: '10px' }} />
                                <h4 style={{ color: '#ffc107' }}>24+</h4>
                                <p style={{ margin: 0 }}>Publikasi Internasional</p>
                            </div>
                            <div style={{ textAlign: 'center', padding: '20px' }}>
                                <img src="/images/icons/logo-01.png" alt="Statistik" style={{ width: '80px', height: '80px', marginBottom: '10px' }} />
                                <h4 style={{ color: '#dc3545' }}>12+</h4>
                                <p style={{ margin: 0 }}>Kolaborasi Luar Negeri</p>
                            </div>
                        </div>
                        
                        <div style={{ backgroundColor: 'white', padding: '20px', marginBottom: '20px', borderRadius: '5px' }}>
                            <h3>Kegiatan Terkini</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>
                                    <img src="/images/icons/logo-01.png" alt="Kegiatan" style={{ width: '40px', height: '40px', float: 'left', marginRight: '10px' }} />
                                    <div style={{ marginLeft: '50px' }}><strong>Seminar Nasional Riset</strong></div>
                                    <div style={{ marginLeft: '50px', color: '#666', fontSize: '13px' }}>28 Des 2025 | Ruang Aula</div>
                                </li>
                                <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>
                                    <img src="/images/icons/logo-01.png" alt="Kegiatan" style={{ width: '40px', height: '40px', float: 'left', marginRight: '10px' }} />
                                    <div style={{ marginLeft: '50px' }}><strong>Workshop Inovasi</strong></div>
                                    <div style={{ marginLeft: '50px', color: '#666', fontSize: '13px' }}>27 Des 2025 | Lab Teknologi</div>
                                </li>
                                <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>
                                    <img src="/images/icons/logo-01.png" alt="Kegiatan" style={{ width: '40px', height: '40px', float: 'left', marginRight: '10px' }} />
                                    <div style={{ marginLeft: '50px' }}><strong>Fokus Group Discussion</strong></div>
                                    <div style={{ marginLeft: '50px', color: '#666', fontSize: '13px' }}>26 Des 2025 | Ruang Rapat</div>
                                </li>
                                <li style={{ padding: '10px 0' }}>
                                    <img src="/images/icons/logo-01.png" alt="Kegiatan" style={{ width: '40px', height: '40px', float: 'left', marginRight: '10px' }} />
                                    <div style={{ marginLeft: '50px' }}><strong>Penandatanganan MOU</strong></div>
                                    <div style={{ marginLeft: '50px', color: '#666', fontSize: '13px' }}>25 Des 2025 | Kantor Rektorat</div>
                                </li>
                            </ul>
                        </div>
                        
                        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}>
                            <h3>Profil Singkat</h3>
                            <p style={{ fontSize: '14px', lineHeight: '1.6' }}>
                                Lembaga Penelitian dan Pengabdian Masyarakat (LPPM) Universitas Indonesia Makassar 
                                berkomitmen untuk meningkatkan kualitas penelitian dan pengabdian kepada masyarakat 
                                melalui kolaborasi lintas disiplin ilmu.
                            </p>
                            <div style={{ marginTop: '15px' }}>
                                <h4 style={{ color: '#007bff' }}>Visi</h4>
                                <p style={{ fontSize: '13px', margin: '5px 0' }}>Menjadi lembaga riset unggulan yang mendukung pengembangan ilmu pengetahuan dan teknologi.</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Home;