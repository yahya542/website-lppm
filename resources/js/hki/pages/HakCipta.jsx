import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const HakCipta = () => {
    const { language } = useLanguage();

    // Dummy Data for HKI / Hak Cipta
    const hkiList = [
        {
            id: 1,
            title: "Panduan Praktis Budidaya Garam Menggunakan Teknologi Geomembran",
            creator: "Dr. Ahmad Sudrajat, M.T.",
            type: "Hak Cipta (Buku)",
            number: "EC00202512345",
            year: "2025",
            status: "Granted"
        },
        {
            id: 2,
            title: "Sistem Informasi Manajemen Aset Desa (SIMAD) Versi 2.0",
            creator: "Fajar Siddiq, S.Kom., M.T.",
            type: "Hak Cipta (Program Komputer)",
            number: "EC00202488776",
            year: "2024",
            status: "Granted"
        },
        {
            id: 3,
            title: "Metode Pembelajaran Bahasa Madura untuk Anak Usia Dini Berbasis Android",
            creator: "Dewi Kartika, S.Psi., M.Si.",
            type: "Hak Cipta (Karya Tulis)",
            number: "EC00202455667",
            year: "2024",
            status: "Granted"
        },
        {
            id: 4,
            title: "Desain Alat Pengering Ikan Tenaga Surya Hibrid",
            creator: "Ir. Bambang Suryanto, M.T.",
            type: "Paten Sederhana",
            number: "S00202300123",
            year: "2023",
            status: "Registered"
        },
        {
            id: 5,
            title: "Video Dokumenter Sejarah Islam di Pamekasan",
            creator: "H. Moh. Zuhdi, S.E., M.M.",
            type: "Hak Cipta (Sinematografi)",
            number: "EC00202399881",
            year: "2023",
            status: "Granted"
        }
    ];

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="main-content" style={{ backgroundColor: '#f9f9f9', paddingBottom: '60px' }}>

            {/* HERO SECTION */}
            <div style={{
                background: 'linear-gradient(135deg, #004d26 0%, #008000 100%)',
                padding: '60px 20px',
                color: 'white',
                textAlign: 'center',
                marginBottom: '50px'
            }}>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ duration: 0.6 }}
                    className="container"
                    style={{ maxWidth: '1000px', margin: '0 auto' }}
                >
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '15px', letterSpacing: '1px' }}>
                        {language === 'id' ? 'Hak Kekayaan Intelektual (HKI)' : 'Intellectual Property Rights'}
                    </h1>
                    <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto' }}>
                        {language === 'id'
                            ? "Daftar Hak Cipta, Paten, dan Merek yang telah didaftarkan oleh civitas akademika Universitas Islam Madura."
                            : "List of Copyrights, Patents, and Trademarks registered by the academic community of the Islamic University of Madura."}
                    </p>
                </motion.div>
            </div>

            {/* CONTENT SECTION */}
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>

                {/* Stats / Filter Placeholder */}
                <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', flexWrap: 'wrap' }}>
                    <div style={{ backgroundColor: 'white', padding: '15px 25px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', flex: 1, borderLeft: '5px solid #004d26' }}>
                        <div style={{ fontSize: '0.9rem', color: '#666' }}>Total HKI</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>120+</div>
                    </div>
                    <div style={{ backgroundColor: 'white', padding: '15px 25px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', flex: 1, borderLeft: '5px solid #f9a825' }}>
                        <div style={{ fontSize: '0.9rem', color: '#666' }}>Tahun 2024</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>35</div>
                    </div>
                    <div style={{ backgroundColor: 'white', padding: '15px 25px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', flex: 1, borderLeft: '5px solid #1976d2' }}>
                        <div style={{ fontSize: '0.9rem', color: '#666' }}>Hak Cipta</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>95</div>
                    </div>
                </div>

                {/* SEARCH BAR */}
                <div style={{ marginBottom: '30px' }}>
                    <input
                        type="text"
                        placeholder={language === 'id' ? "Cari judul HKI atau pencipta..." : "Search IPR title or creator..."}
                        style={{
                            width: '100%',
                            padding: '15px',
                            borderRadius: '10px',
                            border: '1px solid #ddd',
                            fontSize: '1rem',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
                            outline: 'none'
                        }}
                    />
                </div>

                {/* HKI LIST */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {hkiList.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                backgroundColor: 'white',
                                borderRadius: '15px',
                                padding: '30px',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                                display: 'flex',
                                flexDirection: 'column',
                                border: '1px solid #eee',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: '30px',
                                right: '30px',
                                backgroundColor: '#fff3e0',
                                color: '#ef6c00',
                                padding: '5px 15px',
                                borderRadius: '20px',
                                fontSize: '0.9rem',
                                fontWeight: 'bold'
                            }}>
                                {item.type}
                            </div>

                            <div style={{ marginBottom: '15px' }}>
                                <span style={{
                                    backgroundColor: '#e3f2fd',
                                    color: '#1565c0',
                                    padding: '5px 10px',
                                    borderRadius: '5px',
                                    fontSize: '0.8rem',
                                    fontWeight: '600',
                                    marginRight: '10px'
                                }}>
                                    {item.year}
                                </span>
                                <span style={{
                                    color: '#666',
                                    fontSize: '0.9rem',
                                    fontWeight: '500'
                                }}>
                                    No: {item.number}
                                </span>
                            </div>

                            <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#333', marginBottom: '15px', lineHeight: '1.4', paddingRight: '150px' }}>
                                {item.title}
                            </h3>

                            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '20px', fontSize: '0.95rem', color: '#555' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <i className="fas fa-user-edit" style={{ color: '#004d26', marginRight: '8px' }}></i>
                                    <strong>Pencipta:</strong> &nbsp; {item.creator}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <i className="fas fa-check-circle" style={{ color: '#4caf50', marginRight: '8px' }}></i>
                                    <strong>Status:</strong> &nbsp; {item.status}
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>

                {/* PAGINATION */}
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px', gap: '10px' }}>
                    <button style={{ padding: '10px 15px', border: '1px solid #ddd', borderRadius: '5px', background: 'white', cursor: 'pointer' }}><i className="fas fa-chevron-left"></i></button>
                    <button style={{ padding: '10px 15px', border: 'none', borderRadius: '5px', background: '#004d26', color: 'white', cursor: 'pointer' }}>1</button>
                    <button style={{ padding: '10px 15px', border: '1px solid #ddd', borderRadius: '5px', background: 'white', cursor: 'pointer' }}>2</button>
                    <button style={{ padding: '10px 15px', border: '1px solid #ddd', borderRadius: '5px', background: 'white', cursor: 'pointer' }}>3</button>
                    <button style={{ padding: '10px 15px', border: '1px solid #ddd', borderRadius: '5px', background: 'white', cursor: 'pointer' }}><i className="fas fa-chevron-right"></i></button>
                </div>

            </div>
        </div>
    );
};

export default HakCipta;
