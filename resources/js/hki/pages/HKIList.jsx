import React from 'react';

const HKIList = () => {
    return (
        <div className="main-content" style={{ padding: '20px', backgroundColor: '#f5f5f5', minHeight: '800px' }}>
            <div className="container">
                <div className="page-header">
                    <h1>HKI</h1>
                    <p>Ini adalah halaman Hak Kekayaan Intelektual (HKI) Lembaga Penelitian dan Pengabdian Masyarakat (LPPM) UIM</p>
                </div>
                
                <div className="row">
                    <div className="col-md-12">
                        <div style={{ backgroundColor: 'white', padding: '20px', marginBottom: '20px', borderRadius: '5px' }}>
                            <h2>Program Hak Kekayaan Intelektual</h2>
                            <p>
                                Lembaga Penelitian dan Pengabdian Masyarakat (LPPM) UIM mendukung pengembangan dan perlindungan 
                                Hak Kekayaan Intelektual (HKI) dari hasil penelitian dan inovasi yang dihasilkan oleh dosen, 
                                mahasiswa, dan tenaga kependidikan di lingkungan Universitas Indonesia Makassar.
                            </p>
                        </div>
                        
                        <div style={{ backgroundColor: 'white', padding: '20px', marginBottom: '20px', borderRadius: '5px' }}>
                            <h3>Jenis Hak Kekayaan Intelektual</h3>
                            <div className="row">
                                <div className="col-md-6">
                                    <h4>Hak Paten</h4>
                                    <ul>
                                        <li>Paten Produk</li>
                                        <li>Paten Proses</li>
                                        <li>Paten Sederhana</li>
                                        <li>Perlindungan terhadap penemuan baru yang dapat diimplementasikan</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <h4>Hak Kekayaan Intelektual Lainnya</h4>
                                    <ul>
                                        <li>Merchandise</li>
                                        <li>Desain Produk</li>
                                        <li>Hak Cipta</li>
                                        <li>Rahasia Dagang</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}>
                            <h3>Daftar HKI Terbaru</h3>
                            <div className="row">
                                <div className="col-md-6" style={{ marginBottom: '20px' }}>
                                    <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px', height: '100%' }}>
                                        <h5>Sistem Monitoring Kualitas Udara</h5>
                                        <p style={{ color: '#666', fontSize: '14px' }}>Inventor: Dr. Ahmad Sudrajat, M.T.</p>
                                        <p>Nomor HKI: 0123456789 | 28 Desember 2025</p>
                                        <p>Sistem inovatif untuk memonitor kualitas udara secara real-time...</p>
                                    </div>
                                </div>
                                <div className="col-md-6" style={{ marginBottom: '20px' }}>
                                    <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px', height: '100%' }}>
                                        <h5>Alat Deteksi Dini Bencana Banjir</h5>
                                        <p style={{ color: '#666', fontSize: '14px' }}>Inventor: Ir. Budi Santoso, Ph.D.</p>
                                        <p>Nomor HKI: 0987654321 | 25 Desember 2025</p>
                                        <p>Alat yang dapat mendeteksi dini potensi bencana banjir di daerah rawan...</p>
                                    </div>
                                </div>
                                <div className="col-md-6" style={{ marginBottom: '20px' }}>
                                    <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px', height: '100%' }}>
                                        <h5>Aplikasi Pembelajaran Interaktif</h5>
                                        <p style={{ color: '#666', fontSize: '14px' }}>Inventor: Dr. Siti Rahmawati, M.Si.</p>
                                        <p>Nomor HKI: 1122334455 | 20 Desember 2025</p>
                                        <p>Aplikasi mobile untuk pembelajaran interaktif di lingkungan pendidikan...</p>
                                    </div>
                                </div>
                                <div className="col-md-6" style={{ marginBottom: '20px' }}>
                                    <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px', height: '100%' }}>
                                        <h5>Metode Pengolahan Limbah Organik</h5>
                                        <p style={{ color: '#666', fontSize: '14px' }}>Inventor: Dr. Rina Kartika, M.Pd.</p>
                                        <p>Nomor HKI: 5544332211 | 15 Desember 2025</p>
                                        <p>Metode inovatif pengolahan limbah organik menjadi pupuk kompos berkualitas...</p>
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

export default HKIList;