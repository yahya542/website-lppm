import React from 'react';

const PengabdianList = () => {
    return (
        <div className="main-content" style={{ padding: '20px', backgroundColor: '#f5f5f5', minHeight: '800px' }}>
            <div className="container">
                <div className="page-header">
                    <h1>Pengabdian</h1>
                    <p>Ini adalah halaman pengabdian masyarakat Lembaga Penelitian dan Pengabdian Masyarakat (LPPM) UIM</p>
                </div>
                
                <div className="row">
                    <div className="col-md-12">
                        <div style={{ backgroundColor: 'white', padding: '20px', marginBottom: '20px', borderRadius: '5px' }}>
                            <h2>Program Pengabdian Masyarakat</h2>
                            <p>
                                Lembaga Penelitian dan Pengabdian Masyarakat (LPPM) UIM menyelenggarakan berbagai program 
                                pengabdian masyarakat yang bertujuan untuk memberikan kontribusi nyata kepada masyarakat 
                                melalui penerapan ilmu pengetahuan, teknologi, dan seni yang bermanfaat.
                            </p>
                        </div>
                        
                        <div style={{ backgroundColor: 'white', padding: '20px', marginBottom: '20px', borderRadius: '5px' }}>
                            <h3>Bidang Pengabdian</h3>
                            <div className="row">
                                <div className="col-md-6">
                                    <h4>Pengabdian Berbasis Sains dan Teknologi</h4>
                                    <ul>
                                        <li>Penerapan Teknologi Tepat Guna</li>
                                        <li>Pelatihan Keterampilan Berbasis Digital</li>
                                        <li>Pembangunan Infrastruktur Digital</li>
                                        <li>Inovasi Produk UMKM Berbasis Teknologi</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <h4>Pengabdian Berbasis Sosial Humaniora</h4>
                                    <ul>
                                        <li>Pendidikan dan Pelatihan Masyarakat</li>
                                        <li>Pelestarian Budaya Lokal</li>
                                        <li>Pemberdayaan Kelompok Rentan</li>
                                        <li>Konservasi Lingkungan Hidup</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}>
                            <h3>Kegiatan Terbaru</h3>
                            <div className="row">
                                <div className="col-md-4" style={{ marginBottom: '20px' }}>
                                    <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px', height: '100%' }}>
                                        <h5>Pelatihan Digitalisasi UMKM</h5>
                                        <p style={{ color: '#666', fontSize: '14px' }}>Lokasi: Desa Makassar Jaya</p>
                                        <p>28 Desember 2025</p>
                                        <p>Pelatihan pemanfaatan teknologi digital untuk meningkatkan usaha mikro...</p>
                                    </div>
                                </div>
                                <div className="col-md-4" style={{ marginBottom: '20px' }}>
                                    <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px', height: '100%' }}>
                                        <h5>Program Literasi Digital</h5>
                                        <p style={{ color: '#666', fontSize: '14px' }}>Lokasi: Kecamatan Ujung Pandang</p>
                                        <p>25 Desember 2025</p>
                                        <p>Program peningkatan kemampuan digital untuk masyarakat usia lanjut...</p>
                                    </div>
                                </div>
                                <div className="col-md-4" style={{ marginBottom: '20px' }}>
                                    <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px', height: '100%' }}>
                                        <h5>Penanaman Mangrove</h5>
                                        <p style={{ color: '#666', fontSize: '14px' }}>Lokasi: Pantai Losari</p>
                                        <p>20 Desember 2025</p>
                                        <p>Kegiatan konservasi lingkungan bersama masyarakat sekitar pantai...</p>
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

export default PengabdianList;