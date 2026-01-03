import React from 'react';

const SeminarList = () => {
    return (
        <div className="main-content" style={{ padding: '20px', backgroundColor: '#f5f5f5', minHeight: '800px' }}>
            <div className="container">
                <div className="page-header">
                    <h1>Seminar</h1>
                    <p>Ini adalah halaman seminar dan kegiatan akademik Lembaga Penelitian dan Pengabdian Masyarakat (LPPM) UIM</p>
                </div>
                
                <div className="row">
                    <div className="col-md-12">
                        <div style={{ backgroundColor: 'white', padding: '20px', marginBottom: '20px', borderRadius: '5px' }}>
                            <h2>Program Seminar dan Kegiatan Akademik</h2>
                            <p>
                                Lembaga Penelitian dan Pengabdian Masyarakat (LPPM) UIM menyelenggarakan berbagai kegiatan 
                                akademik seperti seminar, workshop, konferensi, dan lokakarya yang bertujuan untuk 
                                memperluas wawasan, meningkatkan kapasitas sivitas akademika, serta memfasilitasi pertukaran 
                                pengetahuan antar peneliti dan praktisi.
                            </p>
                        </div>
                        
                        <div style={{ backgroundColor: 'white', padding: '20px', marginBottom: '20px', borderRadius: '5px' }}>
                            <h3>Jenis Kegiatan</h3>
                            <div className="row">
                                <div className="col-md-6">
                                    <h4>Seminar dan Konferensi</h4>
                                    <ul>
                                        <li>Seminar Nasional</li>
                                        <li>Konferensi Internasional</li>
                                        <li>Seminar Mahasiswa</li>
                                        <li>Presentasi Hasil Penelitian</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <h4>Workshop dan Pelatihan</h4>
                                    <ul>
                                        <li>Workshop Metodologi Penelitian</li>
                                        <li>Pelatihan Penulisan Ilmiah</li>
                                        <li>Workshop Teknologi Terapan</li>
                                        <li>Pelatihan Manajemen Proyek Riset</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}>
                            <h3>Kegiatan Terkini</h3>
                            <div className="row">
                                <div className="col-md-4" style={{ marginBottom: '20px' }}>
                                    <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px', height: '100%' }}>
                                        <h5>Seminar Nasional Riset</h5>
                                        <p style={{ color: '#666', fontSize: '14px' }}>28 Des 2025 | Ruang Aula</p>
                                        <p>Pembahasan mengenai tren terbaru dalam penelitian ilmu pengetahuan dan teknologi...</p>
                                    </div>
                                </div>
                                <div className="col-md-4" style={{ marginBottom: '20px' }}>
                                    <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px', height: '100%' }}>
                                        <h5>Workshop Inovasi</h5>
                                        <p style={{ color: '#666', fontSize: '14px' }}>27 Des 2025 | Lab Teknologi</p>
                                        <p>Praktik langsung dalam menciptakan inovasi berbasis teknologi informasi...</p>
                                    </div>
                                </div>
                                <div className="col-md-4" style={{ marginBottom: '20px' }}>
                                    <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px', height: '100%' }}>
                                        <h5>Fokus Group Discussion</h5>
                                        <p style={{ color: '#666', fontSize: '14px' }}>26 Des 2025 | Ruang Rapat</p>
                                        <p>Fasilitasi diskusi kelompok terfokus untuk membahas isu-isu strategis dalam pendidikan...</p>
                                    </div>
                                </div>
                                <div className="col-md-4" style={{ marginBottom: '20px' }}>
                                    <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px', height: '100%' }}>
                                        <h5>Seminar Internasional</h5>
                                        <p style={{ color: '#666', fontSize: '14px' }}>22 Des 2025 | Gedung Serbaguna</p>
                                        <p>Pertemuan internasional untuk membahas kolaborasi riset lintas negara...</p>
                                    </div>
                                </div>
                                <div className="col-md-4" style={{ marginBottom: '20px' }}>
                                    <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px', height: '100%' }}>
                                        <h5>Workshop Penulisan Ilmiah</h5>
                                        <p style={{ color: '#666', fontSize: '14px' }}>18 Des 2025 | Ruang Seminar</p>
                                        <p>Pelatihan intensif tentang penulisan artikel ilmiah untuk publikasi internasional...</p>
                                    </div>
                                </div>
                                <div className="col-md-4" style={{ marginBottom: '20px' }}>
                                    <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px', height: '100%' }}>
                                        <h5>Sosialisasi HKI</h5>
                                        <p style={{ color: '#666', fontSize: '14px' }}>15 Des 2025 | Aula Fakultas</p>
                                        <p>Penyuluhan tentang pentingnya Hak Kekayaan Intelektual bagi peneliti dan inovator...</p>
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

export default SeminarList;