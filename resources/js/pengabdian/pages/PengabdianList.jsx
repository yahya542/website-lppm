import React from 'react';
import { motion } from 'framer-motion';

const PengabdianList = () => {
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
                background: 'linear-gradient(135deg, #004d26 0%, #008000 100%)',
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
                        COMMUNITY SERVICE
                    </div>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '15px', letterSpacing: '1px' }}>PENGABDIAN</h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
                        Sinergi perguruan tinggi dan masyarakat untuk memberikan solusi nyata dan pemberdayaan yang berkelanjutan.
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
                        <i className="fas fa-hands-helping"></i>
                    </div>
                    <div>
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '15px', color: '#333' }}>Program Pengabdian</h2>
                        <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8', maxWidth: '800px' }}>
                            Lembaga Penelitian dan Pengabdian Masyarakat (LPPM) UIM menyelenggarakan berbagai program
                            pengabdian masyarakat yang bertujuan untuk memberikan kontribusi digital dan nyata kepada masyarakat
                            melalui penerapan ilmu pengetahuan, teknologi, dan seni yang bermanfaat.
                        </p>
                    </div>
                </motion.div>

                {/* 3. BIDANG PENGABDIAN */}
                <div style={{ marginBottom: '60px' }}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        style={{ textAlign: 'center', marginBottom: '40px' }}
                    >
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>Fokus Pengabdian</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#f9a825', margin: '0 auto' }}></div>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {/* Sains & Tekno */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ delay: 0.1 }}
                            style={{
                                background: 'linear-gradient(135deg, #00897b 0%, #00695c 100%)',
                                padding: '30px',
                                borderRadius: '15px',
                                color: 'white',
                                boxShadow: '0 10px 20px rgba(0, 137, 123, 0.3)'
                            }}
                        >
                            <div style={{ fontSize: '30px', marginBottom: '20px', opacity: 0.8 }}><i className="fas fa-network-wired"></i></div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>Berbasis Sains & Tekno</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}><i className="fas fa-check" style={{ marginRight: '10px', fontSize: '12px', opacity: 0.7 }}></i> Teknologi Tepat Guna</li>
                                <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}><i className="fas fa-check" style={{ marginRight: '10px', fontSize: '12px', opacity: 0.7 }}></i> Pelatihan Digital</li>
                                <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}><i className="fas fa-check" style={{ marginRight: '10px', fontSize: '12px', opacity: 0.7 }}></i> Infrastruktur Digital</li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><i className="fas fa-check" style={{ marginRight: '10px', fontSize: '12px', opacity: 0.7 }}></i> Inovasi UMKM</li>
                            </ul>
                        </motion.div>

                        {/* Sosial Humaniora */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ delay: 0.2 }}
                            style={{
                                background: 'linear-gradient(135deg, #8e24aa 0%, #6a1b9a 100%)',
                                padding: '30px',
                                borderRadius: '15px',
                                color: 'white',
                                boxShadow: '0 10px 20px rgba(142, 36, 170, 0.3)'
                            }}
                        >
                            <div style={{ fontSize: '30px', marginBottom: '20px', opacity: 0.8 }}><i className="fas fa-people-carry"></i></div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>Sosial Humaniora</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}><i className="fas fa-check" style={{ marginRight: '10px', fontSize: '12px', opacity: 0.7 }}></i> Pendidikan Masyarakat</li>
                                <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}><i className="fas fa-check" style={{ marginRight: '10px', fontSize: '12px', opacity: 0.7 }}></i> Budaya Lokal</li>
                                <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}><i className="fas fa-check" style={{ marginRight: '10px', fontSize: '12px', opacity: 0.7 }}></i> Pemberdayaan Kelompok</li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><i className="fas fa-check" style={{ marginRight: '10px', fontSize: '12px', opacity: 0.7 }}></i> Konservasi Lingkungan</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* 4. KEGIATAN TERBARU */}
                <div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '30px' }}
                    >
                        <div>
                            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>Kegiatan Terbaru</h2>
                            <p style={{ color: '#666' }}>Aksi nyata sivitas akademika di lapangan</p>
                        </div>
                        <a href="#" style={{ color: 'green', fontWeight: 'bold', textDecoration: 'none' }}>Lihat Semua <i className="fas fa-arrow-right"></i></a>
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
                                title: "Pelatihan Digitalisasi UMKM",
                                author: "Tim KKN Tematik",
                                location: "Desa Makassar Jaya",
                                date: "28 Des 2025",
                                desc: "Pelatihan pemanfaatan teknologi digital dan marketplace untuk meningkatkan daya saing usaha mikro...",
                                icon: "fa-store",
                                color: "#f9a825"
                            },
                            {
                                title: "Program Literasi Digital Lansia",
                                author: "Tim Pengabdian Dosen",
                                location: "Kecamatan Ujung Pandang",
                                date: "25 Des 2025",
                                desc: "Program peningkatan kemampuan digital dasar untuk masyarakat usia lanjut agar terhindar dari hoaks...",
                                icon: "fa-mobile-alt",
                                color: "#00897b"
                            },
                            {
                                title: "Penanaman Mangrove Pesisir",
                                author: "Mahasiswa Pecinta Alam",
                                location: "Pantai Losari",
                                date: "20 Des 2025",
                                desc: "Kegiatan konservasi lingkungan bersama masyarakat sekitar pantai untuk mencegah abrasi dan menjaga ekosistem...",
                                icon: "fa-tree",
                                color: "#43a047"
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
                                            <i className={`fas ${item.icon}`} style={{ marginRight: '5px' }}></i>
                                            Kegiatan
                                        </div>
                                        <div style={{ color: '#999', fontSize: '13px' }}><i className="far fa-calendar-alt"></i> {item.date}</div>
                                    </div>

                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px', lineHeight: '1.4' }}>{item.title}</h3>

                                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', fontSize: '13px', color: '#555' }}>
                                        <i className="fas fa-map-marker-alt" style={{ marginRight: '10px', color: '#f9a825' }}></i>
                                        {item.location}
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', fontSize: '13px', color: '#555' }}>
                                        <i className="fas fa-users" style={{ marginRight: '8px', color: '#00897b' }}></i>
                                        {item.author}
                                    </div>

                                    <p style={{ color: '#777', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
                                        {item.desc}
                                    </p>

                                    <a href="#" style={{ display: 'inline-flex', alignItems: 'center', color: item.color, fontWeight: 'bold', fontSize: '13px', textDecoration: 'none' }}>
                                        LIHAT KEGIATAN <i className="fas fa-arrow-right" style={{ marginLeft: '5px' }}></i>
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

export default PengabdianList;