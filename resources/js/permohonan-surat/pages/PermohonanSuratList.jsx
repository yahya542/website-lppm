import React from 'react';

const PermohonanSuratList = () => {
    return (
        <div className="main-content" style={{ padding: '20px', backgroundColor: '#f5f5f5', minHeight: '800px' }}>
            <div className="container">
                <div className="page-header">
                    <h1>Permohonan Surat</h1>
                    <p>Ini adalah halaman permohonan surat dari Lembaga Penelitian dan Pengabdian Masyarakat (LPPM) UIM</p>
                </div>
                
                <div className="row">
                    <div className="col-md-12">
                        <div style={{ backgroundColor: 'white', padding: '20px', marginBottom: '20px', borderRadius: '5px' }}>
                            <h2>Permohonan Surat</h2>
                            <p>
                                Lembaga Penelitian dan Pengabdian Masyarakat (LPPM) UIM menyediakan layanan permohonan surat 
                                yang dapat diakses oleh dosen, mahasiswa, dan masyarakat umum untuk berbagai keperluan 
                                akademik dan administratif terkait penelitian dan pengabdian masyarakat.
                            </p>
                        </div>
                        
                        <div style={{ backgroundColor: 'white', padding: '20px', marginBottom: '20px', borderRadius: '5px' }}>
                            <h3>Jenis Surat yang Tersedia</h3>
                            <div className="row">
                                <div className="col-md-6">
                                    <h4>Surat untuk Dosen dan Peneliti</h4>
                                    <ul>
                                        <li>Surat Keterangan Penelitian</li>
                                        <li>Surat Tugas Penelitian</li>
                                        <li>Surat Rekomendasi Penelitian</li>
                                        <li>Surat Izin Pengumpulan Data</li>
                                        <li>Surat Keterangan Selesai Penelitian</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <h4>Surat untuk Mahasiswa</h4>
                                    <ul>
                                        <li>Surat Izin Penelitian Skripsi/Tesis</li>
                                        <li>Surat Keterangan Bimbingan</li>
                                        <li>Surat Permohonan Data/Informasi</li>
                                        <li>Surat Keterangan Penelitian Lapangan</li>
                                        <li>Surat Permohonan Akses Arsip</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}>
                            <h3>Tata Cara Permohonan</h3>
                            <div className="row">
                                <div className="col-md-6">
                                    <h4>Langkah-langkah Pengajuan</h4>
                                    <ol>
                                        <li>Mengisi formulir permohonan surat secara online</li>
                                        <li>Menyertakan dokumen pendukung yang diperlukan</li>
                                        <li>Mengunggah proposal atau kerangka penelitian</li>
                                        <li>Menunggu verifikasi dari admin LPPM</li>
                                        <li>Menerima surat dalam bentuk digital atau mengambil langsung</li>
                                    </ol>
                                </div>
                                <div className="col-md-6">
                                    <h4>Dokumen Pendukung</h4>
                                    <ul>
                                        <li>Formulir permohonan yang telah diisi</li>
                                        <li>Surat pengantar dari fakultas/jurusan (jika diperlukan)</li>
                                        <li>Proposal penelitian atau kerangka kerja</li>
                                        <li>Fotokopi identitas (KTP/SIM)</li>
                                        <li>Surat tugas dari kampus (untuk mahasiswa)</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="row mt-4">
                                <div className="col-md-12">
                                    <h4>Waktu Pelayanan</h4>
                                    <p>Permohonan surat diproses dalam waktu 1-3 hari kerja setelah semua dokumen lengkap.</p>
                                    
                                    <h4>Kontak Informasi</h4>
                                    <p>Untuk informasi lebih lanjut atau bantuan dalam permohonan surat, silakan menghubungi:</p>
                                    <ul>
                                        <li>Email: lppm@uim.ac.id</li>
                                        <li>Telepon: (0411) 1234567</li>
                                        <li>Alamat: Kampus UIM, Jl. Perintis Kemerdekaan, Makassar</li>
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

export default PermohonanSuratList;