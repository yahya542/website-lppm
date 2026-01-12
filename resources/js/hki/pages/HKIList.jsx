import React from 'react';
import { motion } from 'framer-motion';

const HKIList = () => {
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
                background: 'linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%)',
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
                        INTELLECTUAL PROPERTY RIGHTS
                    </div>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '15px', letterSpacing: '1px' }}>HAK KEKAYAAN INTELEKTUAL</h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '750px', margin: '0 auto', lineHeight: '1.6' }}>
                        Perlindungan inovasi dan kreativitas sivitas akademika UIM untuk kemajuan ilmu pengetahuan dan teknologi.
                    </p>
                </motion.div>
            </div>

            <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>

                {/* 2. PROGRAM OVERVIEW */}
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
                        marginBottom: '50px',
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
                        backgroundColor: '#e8f5e9',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'green',
                        fontSize: '32px'
                    }}>
                        <i className="fas fa-certificate"></i>
                    </div>
                    <div>
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '15px', color: '#333' }}>Pusat HKI</h2>
                        <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8', maxWidth: '800px' }}>
                            Lembaga Penelitian dan Pengabdian Masyarakat (LPPM) UIM mendukung penuh pengembangan dan perlindungan
                            Hak Kekayaan Intelektual (HKI) dari hasil penelitian dan inovasi yang dihasilkan oleh dosen,
                            mahasiswa, dan tenaga kependidikan di lingkungan Universitas Indonesia Makassar.
                        </p>
                    </div>
                </motion.div>

                {/* 3. JENIS HKI */}
                <div style={{ marginBottom: '60px' }}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        style={{ textAlign: 'center', marginBottom: '40px' }}
                    >
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>Jenis Perlindungan HKI</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#f9a825', margin: '0 auto' }}></div>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {/* Hak Paten */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ delay: 0.1 }}
                            style={{
                                background: 'linear-gradient(135deg, #0288d1 0%, #01579b 100%)',
                                padding: '30px',
                                borderRadius: '15px',
                                color: 'white',
                                boxShadow: '0 10px 20px rgba(2, 136, 209, 0.3)'
                            }}
                        >
                            <div style={{ fontSize: '30px', marginBottom: '20px', opacity: 0.8 }}><i className="fas fa-lightbulb"></i></div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>Hak Paten</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}><i className="fas fa-check" style={{ marginRight: '10px', fontSize: '12px', opacity: 0.7 }}></i> Paten Produk</li>
                                <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}><i className="fas fa-check" style={{ marginRight: '10px', fontSize: '12px', opacity: 0.7 }}></i> Paten Proses</li>
                                <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}><i className="fas fa-check" style={{ marginRight: '10px', fontSize: '12px', opacity: 0.7 }}></i> Paten Sederhana</li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><i className="fas fa-check" style={{ marginRight: '10px', fontSize: '12px', opacity: 0.7 }}></i> Invensi Teknologi Baru</li>
                            </ul>
                        </motion.div>

                        {/* HKI Lainnya */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ delay: 0.2 }}
                            style={{
                                background: 'linear-gradient(135deg, #7b1fa2 0%, #4a148c 100%)',
                                padding: '30px',
                                borderRadius: '15px',
                                color: 'white',
                                boxShadow: '0 10px 20px rgba(123, 31, 162, 0.3)'
                            }}
                        >
                            <div style={{ fontSize: '30px', marginBottom: '20px', opacity: 0.8 }}><i className="fas fa-copyright"></i></div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>Hal Cipta & Lainnya</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}><i className="fas fa-check" style={{ marginRight: '10px', fontSize: '12px', opacity: 0.7 }}></i> Hak Cipta (Buku, Seni, dll)</li>
                                <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}><i className="fas fa-check" style={{ marginRight: '10px', fontSize: '12px', opacity: 0.7 }}></i> Desain Industri</li>
                                <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}><i className="fas fa-check" style={{ marginRight: '10px', fontSize: '12px', opacity: 0.7 }}></i> Merek Dagang</li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><i className="fas fa-check" style={{ marginRight: '10px', fontSize: '12px', opacity: 0.7 }}></i> Rahasia Dagang</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* 4. DAFTAR HKI TERBARU */}
                <div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '30px' }}
                    >
                        <div>
                            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>Daftar HKI Terbaru</h2>
                            <p style={{ color: '#666' }}>Inovasi terbaru UIM yang telah terdaftar</p>
                        </div>
                        <a href="#" style={{ color: 'green', fontWeight: 'bold', textDecoration: 'none' }}>Lihat Katalog <i className="fas fa-arrow-right"></i></a>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}
                    >
                        {[
                            {
                                title: "Sistem Monitoring Kualitas Udara",
                                inventor: "Dr. Ahmad Sudrajat, M.T.",
                                number: "0123456789",
                                date: "28 Des 2025",
                                desc: "Sistem inovatif berbasis IoT untuk memonitor kualitas udara secara real-time dan memberikan peringatan dini...",
                                icon: "fa-wind",
                                color: "#0288d1"
                            },
                            {
                                title: "Alat Deteksi Dini Bencana Banjir",
                                inventor: "Ir. Budi Santoso, Ph.D.",
                                number: "0987654321",
                                date: "25 Des 2025",
                                desc: "Alat sensor ketinggian air otomatis yang dapat mendeteksi dini potensi bencana banjir di daerah rawan...",
                                icon: "fa-water",
                                color: "#d32f2f"
                            },
                            {
                                title: "Aplikasi Pembelajaran Interaktif",
                                inventor: "Dr. Siti Rahmawati, M.Si.",
                                number: "1122334455",
                                date: "20 Des 2025",
                                desc: "Aplikasi mobile berbasis gamifikasi untuk meningkatkan minat belajar siswa pada mata pelajaran sains...",
                                icon: "fa-mobile-alt",
                                color: "#7b1fa2"
                            },
                            {
                                title: "Metode Pengolahan Limbah Organik",
                                inventor: "Dr. Rina Kartika, M.Pd.",
                                number: "5544332211",
                                date: "15 Des 2025",
                                desc: "Metode baru biokonversi untuk mengolah limbah organik rumah tangga menjadi pupuk kompos berkualitas tinggi...",
                                icon: "fa-leaf",
                                color: "#388e3c"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ y: -5 }}
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: '15px',
                                    overflow: 'hidden',
                                    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                                    border: '1px solid #eee'
                                }}
                            >
                                <div style={{ padding: '25px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                                        <div style={{
                                            padding: '5px 12px',
                                            backgroundColor: `${item.color}15`,
                                            color: item.color,
                                            borderRadius: '20px',
                                            fontSize: '12px',
                                            fontWeight: 'bold'
                                        }}>
                                            <i className="fas fa-file-contract" style={{ marginRight: '5px' }}></i>
                                            Terdaftar
                                        </div>
                                        <div style={{ color: '#999', fontSize: '13px' }}>{item.date}</div>
                                    </div>

                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px', lineHeight: '1.4' }}>{item.title}</h3>

                                    <div style={{ marginBottom: '15px' }}>
                                        <div style={{ fontSize: '13px', color: '#555', marginBottom: '5px', display: 'flex', alignItems: 'center' }}>
                                            <i className="fas fa-user-tie" style={{ width: '20px', color: '#999' }}></i>
                                            {item.inventor}
                                        </div>
                                        <div style={{ fontSize: '13px', color: '#555', display: 'flex', alignItems: 'center' }}>
                                            <i className="fas fa-barcode" style={{ width: '20px', color: '#999' }}></i>
                                            No. {item.number}
                                        </div>
                                    </div>

                                    <p style={{ color: '#777', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
                                        {item.desc}
                                    </p>

                                    <a href="#" style={{ display: 'inline-flex', alignItems: 'center', color: item.color, fontWeight: 'bold', fontSize: '13px', textDecoration: 'none' }}>
                                        DETAIL PATEN <i className="fas fa-arrow-right" style={{ marginLeft: '5px' }}></i>
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default HKIList;