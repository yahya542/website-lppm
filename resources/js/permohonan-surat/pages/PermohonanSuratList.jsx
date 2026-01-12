import React from 'react';
import { motion } from 'framer-motion';

const PermohonanSuratList = () => {
    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="main-content" style={{ backgroundColor: '#f9f9f9', paddingBottom: '60px' }}>

            {/* 1. HERO SECTION */}
            <div style={{
                background: 'linear-gradient(135deg, #4527a0 0%, #311b92 100%)',
                padding: '80px 20px',
                color: 'white',
                textAlign: 'center',
                marginBottom: '40px'
            }}>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ duration: 0.6 }}
                    className="container"
                    style={{ maxWidth: '1000px', margin: '0 auto' }}
                >
                    <div style={{ display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.2)', padding: '5px 15px', borderRadius: '20px', marginBottom: '15px', fontSize: '14px', fontWeight: 'bold' }}>
                        ADMINISTRATION SERVICES
                    </div>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '15px', letterSpacing: '1px' }}>PERMOHONAN SURAT</h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '750px', margin: '0 auto', lineHeight: '1.6' }}>
                        Layanan administrasi persuratan digital untuk mendukung kegiatan penelitian dan pengabdian masyarakat.
                    </p>
                </motion.div>
            </div>

            <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>

                {/* 2. SERVICE OVERVIEW */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    style={{
                        backgroundColor: 'white',
                        padding: '40px',
                        borderRadius: '20px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                        marginBottom: '60px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '30px',
                        alignItems: 'center',
                        textAlign: 'center'
                    }}
                >
                    <div style={{
                        width: '80px',
                        height: '80px',
                        backgroundColor: '#ede7f6',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#4527a0',
                        fontSize: '32px'
                    }}>
                        <i className="fas fa-file-signature"></i>
                    </div>
                    <div>
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '15px', color: '#333' }}>Pusat Layanan Surat</h2>
                        <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8', maxWidth: '800px' }}>
                            Lembaga Penelitian dan Pengabdian Masyarakat (LPPM) UIM menyediakan layanan permohonan surat
                            yang dapat diakses oleh dosen, mahasiswa, dan masyarakat umum untuk berbagai keperluan
                            akademik dan administratif secara efisien.
                        </p>
                    </div>
                </motion.div>

                {/* 3. JENIS SURAT */}
                <div style={{ marginBottom: '60px' }}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        style={{ textAlign: 'center', marginBottom: '40px' }}
                    >
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>Kategori Layanan</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#f9a825', margin: '0 auto' }}></div>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
                        {/* Dosen & Peneliti */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ delay: 0.1 }}
                            style={{
                                backgroundColor: 'white',
                                borderRadius: '15px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                borderTop: '5px solid #d81b60'
                            }}
                        >
                            <div style={{ padding: '30px', background: 'linear-gradient(to bottom, #d81b6005, white)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                    <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: '#d81b60', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '24px', marginRight: '15px' }}>
                                        <i className="fas fa-chalkboard-teacher"></i>
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Dosen & Peneliti</h3>
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {[
                                        "Surat Keterangan Penelitian",
                                        "Surat Tugas Penelitian",
                                        "Surat Rekomendasi Penelitian",
                                        "Surat Izin Pengumpulan Data",
                                        "Surat Keterangan Selesai Penelitian"
                                    ].map((item, idx) => (
                                        <li key={idx} style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', fontSize: '15px', color: '#555', paddingBottom: '15px', borderBottom: idx === 4 ? 'none' : '1px solid #eee' }}>
                                            <i className="fas fa-check-circle" style={{ marginRight: '15px', color: '#d81b60', fontSize: '16px' }}></i>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <button style={{ width: '100%', padding: '12px', backgroundColor: '#d81b60', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', marginTop: '10px' }}>
                                    AJUKAN SEKARANG
                                </button>
                            </div>
                        </motion.div>

                        {/* Mahasiswa */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ delay: 0.2 }}
                            style={{
                                backgroundColor: 'white',
                                borderRadius: '15px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                borderTop: '5px solid #1976d2'
                            }}
                        >
                            <div style={{ padding: '30px', background: 'linear-gradient(to bottom, #1976d205, white)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                    <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: '#1976d2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '24px', marginRight: '15px' }}>
                                        <i className="fas fa-user-graduate"></i>
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Mahasiswa</h3>
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {[
                                        "Surat Izin Penelitian Skripsi/Tesis",
                                        "Surat Keterangan Bimbingan",
                                        "Surat Permohonan Data/Informasi",
                                        "Surat Keterangan Penelitian Lapangan",
                                        "Surat Permohonan Akses Arsip"
                                    ].map((item, idx) => (
                                        <li key={idx} style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', fontSize: '15px', color: '#555', paddingBottom: '15px', borderBottom: idx === 4 ? 'none' : '1px solid #eee' }}>
                                            <i className="fas fa-check-circle" style={{ marginRight: '15px', color: '#1976d2', fontSize: '16px' }}></i>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <button style={{ width: '100%', padding: '12px', backgroundColor: '#1976d2', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', marginTop: '10px' }}>
                                    AJUKAN SEKARANG
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* 4. TATA CARA */}
                <div style={{ marginBottom: '30px' }}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        style={{ padding: '40px', backgroundColor: 'white', borderRadius: '20px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}
                    >
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333', marginBottom: '30px', textAlign: 'center' }}>Alur Pengajuan</h2>

                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '20px', position: 'relative' }}>
                            {/* Connector Line (Desktop) */}
                            <div style={{ position: 'absolute', top: '25px', left: '0', right: '0', height: '2px', backgroundColor: '#eee', zIndex: 0, display: 'none' }} className="d-md-block"></div>

                            {[
                                { step: 1, title: "Isi Formulir", desc: "Lengkapi data permohonan secara online", icon: "fa-edit" },
                                { step: 2, title: "Upload Dokumen", desc: "Unggah berkas pendukung yang syaratkan", icon: "fa-upload" },
                                { step: 3, title: "Verifikasi", desc: "Hunggu proses verifikasi admin LPPM", icon: "fa-clock" },
                                { step: 4, title: "Selesai", desc: "Unduh surat digital atau ambil fisik", icon: "fa-envelope-open-text" }
                            ].map((item, index) => (
                                <div key={index} style={{ flex: '1 1 200px', textAlign: 'center', zIndex: 1, position: 'relative' }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        backgroundColor: '#4527a0',
                                        color: 'white',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '20px',
                                        margin: '0 auto 15px',
                                        boxShadow: '0 0 0 5px white'
                                    }}>
                                        <i className={`fas ${item.icon}`}></i>
                                    </div>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '5px' }}>{item.title}</h4>
                                    <p style={{ fontSize: '0.9rem', color: '#666' }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="row mt-5">
                            <div className="col-md-6 mb-4">
                                <div style={{ padding: '20px', backgroundColor: '#fff3e0', borderRadius: '10px', borderLeft: '4px solid #f57c00' }}>
                                    <h4 style={{ fontWeight: 'bold', color: '#f57c00', marginBottom: '10px' }}><i className="fas fa-file-alt mr-2"></i> Dokumen Pendukung Wajib</h4>
                                    <ul style={{ paddingLeft: '20px', marginBottom: 0, fontSize: '14px', color: '#555' }}>
                                        <li>Formulir permohonan yang telah diisi</li>
                                        <li>Surat pengantar dari fakultas/jurusan</li>
                                        <li>Proposal penelitian (jika ada)</li>
                                        <li>Scan KTP/KTM</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div style={{ padding: '20px', backgroundColor: '#e3f2fd', borderRadius: '10px', borderLeft: '4px solid #1976d2' }}>
                                    <h4 style={{ fontWeight: 'bold', color: '#1976d2', marginBottom: '10px' }}><i className="fas fa-headset mr-2"></i> Butuh Bantuan?</h4>
                                    <p style={{ fontSize: '14px', color: '#555', marginBottom: '5px' }}>Jika mengalami kendala, hubungi kami:</p>
                                    <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#333' }}>
                                        <i className="fas fa-envelope mr-2"></i> lppm@uim.ac.id <br />
                                        <i className="fas fa-phone mr-2"></i> (0411) 1234567
                                    </p>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default PermohonanSuratList;