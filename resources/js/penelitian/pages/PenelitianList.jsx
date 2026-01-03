import React from 'react';

const PenelitianList = () => {
    return (
        <div className="main-content" style={{ padding: '20px', backgroundColor: '#f5f5f5', minHeight: '800px' }}>
            <div className="container">
                <div className="page-header">
                    <h1>Penelitian</h1>
                    <p>Ini adalah halaman penelitian Lembaga Penelitian dan Pengabdian Masyarakat (LPPM) UIM</p>
                </div>
                
                <div className="row">
                    <div className="col-md-12">
                        <div style={{ backgroundColor: 'white', padding: '20px', marginBottom: '20px', borderRadius: '5px' }}>
                            <h2>Program Penelitian</h2>
                            <p>
                                Lembaga Penelitian dan Pengabdian Masyarakat (LPPM) UIM menyelenggarakan berbagai program 
                                penelitian yang bertujuan untuk menghasilkan karya ilmiah berkualitas dan bermanfaat bagi 
                                pengembangan ilmu pengetahuan serta kesejahteraan masyarakat.
                            </p>
                        </div>
                        
                        <div style={{ backgroundColor: 'white', padding: '20px', marginBottom: '20px', borderRadius: '5px' }}>
                            <h3>Bidang Penelitian</h3>
                            <div className="row">
                                <div className="col-md-6">
                                    <h4>Penelitian Sains dan Teknologi</h4>
                                    <ul>
                                        <li>Ilmu Komputer dan Teknologi Informasi</li>
                                        <li>Teknik dan Teknologi Industri</li>
                                        <li>Bioteknologi dan Ilmu Hayati</li>
                                        <li>Fisika dan Material Canggih</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <h4>Penelitian Sosial Humaniora</h4>
                                    <ul>
                                        <li>Ekonomi dan Pembangunan</li>
                                        <li>Pendidikan dan Kependidikan</li>
                                        <li>Sosiologi dan Antropologi</li>
                                        <li>Bahasa dan Sastra</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}>
                            <h3>Publikasi Terbaru</h3>
                            <div className="row">
                                <div className="col-md-4" style={{ marginBottom: '20px' }}>
                                    <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px', height: '100%' }}>
                                        <h5>Penelitian Inovatif di Bidang Teknologi</h5>
                                        <p style={{ color: '#666', fontSize: '14px' }}>Oleh: Dr. Ahmad Sudrajat, M.T.</p>
                                        <p>Jurnal Ilmiah Nasional | 26 Desember 2025</p>
                                        <p>Penelitian ini membahas inovasi terbaru dalam bidang teknologi informasi...</p>
                                    </div>
                                </div>
                                <div className="col-md-4" style={{ marginBottom: '20px' }}>
                                    <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px', height: '100%' }}>
                                        <h5>Analisis Kebijakan Pendidikan Terkini</h5>
                                        <p style={{ color: '#666', fontSize: '14px' }}>Oleh: Dr. Rina Kartika, M.Pd.</p>
                                        <p>Jurnal Kebijakan Pendidikan | 23 Desember 2025</p>
                                        <p>Studi tentang efektivitas kebijakan pendidikan di Indonesia saat ini...</p>
                                    </div>
                                </div>
                                <div className="col-md-4" style={{ marginBottom: '20px' }}>
                                    <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px', height: '100%' }}>
                                        <h5>Implementasi AI dalam Pendidikan</h5>
                                        <p style={{ color: '#666', fontSize: '14px' }}>Oleh: Dr. Budi Santoso, Ph.D.</p>
                                        <p>Konferensi Internasional | 24 Desember 2025</p>
                                        <p>Penerapan kecerdasan buatan dalam proses pembelajaran di perguruan tinggi...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PenelitianList;