import React from 'react';

const ProfilList = () => {
    return (
        <div className="main-content" style={{ padding: '20px', backgroundColor: '#f5f5f5', minHeight: '800px' }}>
            <div className="container">
                <div className="page-header">
                    <h1>Profil</h1>
                    <p>Ini adalah halaman profil Lembaga Penelitian dan Pengabdian Masyarakat (LPPM) UIM</p>
                </div>
                
                <div className="row">
                    <div className="col-md-12">
                        <div style={{ backgroundColor: 'white', padding: '20px', marginBottom: '20px', borderRadius: '5px' }}>
                            <h2>Profil LPPM</h2>
                            <p>
                                Lembaga Penelitian dan Pengabdian Masyarakat (LPPM) Universitas Indonesia Makassar 
                                berkomitmen untuk meningkatkan kualitas penelitian dan pengabdian kepada masyarakat 
                                melalui kolaborasi lintas disiplin ilmu.
                            </p>
                        </div>
                        
                        <div style={{ backgroundColor: 'white', padding: '20px', marginBottom: '20px', borderRadius: '5px' }}>
                            <h3>Visi</h3>
                            <p>Menjadi lembaga riset unggulan yang mendukung pengembangan ilmu pengetahuan dan teknologi.</p>
                            
                            <h3>Misi</h3>
                            <ul>
                                <li>Mendorong penelitian berkualitas yang berkontribusi pada pengembangan ilmu pengetahuan</li>
                                <li>Memfasilitasi pengabdian masyarakat yang bermanfaat bagi masyarakat luas</li>
                                <li>Meningkatkan kerjasama dengan berbagai pihak dalam dan luar negeri</li>
                                <li>Mengembangkan inovasi yang berkelanjutan untuk kesejahteraan masyarakat</li>
                            </ul>
                        </div>
                        
                        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}>
                            <h3>Struktur Organisasi</h3>
                            <p>Struktur organisasi LPPM UIM terdiri dari berbagai bagian yang saling mendukung dalam 
                            pelaksanaan penelitian dan pengabdian masyarakat.</p>
                            
                            <div className="row">
                                <div className="col-md-6">
                                    <h4>Struktur Kepengurusan</h4>
                                    <p>Nama Kepala LPPM: Dr. Ahmad Sudrajat, M.T.</p>
                                    <p>Nama Wakil: Dr. Siti Rahmawati, M.Si.</p>
                                </div>
                                <div className="col-md-6">
                                    <h4>Bidang-bidang</h4>
                                    <ul>
                                        <li>Penelitian Sains dan Teknologi</li>
                                        <li>Penelitian Sosial Humaniora</li>
                                        <li>Pengabdian Masyarakat</li>
                                        <li>Kemitraan dan Kerjasama</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilList;