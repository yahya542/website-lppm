import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const PengabdianInfo = () => {
    const { language } = useLanguage();

    // Dummy Data for Community Service Info/News
    const infoList = [
        {
            id: 1,
            title: "Pendaftaran KKN Tematik Tahun Akademik 2025/2026",
            date: "20 Jan 2026",
            category: "KKN",
            excerpt: "Dibuka pendaftaran peserta KKN Tematik dengan tema 'Pemberdayaan Desa Wisata'. Segera daftarkan diri Anda.",
            image: "https://source.unsplash.com/random/800x600?village"
        },
        {
            id: 2,
            title: "Call for Proposal: Program Kemitraan Masyarakat (PKM) Internal",
            date: "10 Feb 2026",
            category: "Grant",
            excerpt: "LPPM Universitas Islam Madura membuka penerimaan proposal hibah pengabdian internal skema PKM.",
            image: "https://source.unsplash.com/random/800x600?meeting"
        },
        {
            id: 3,
            title: "Workshop Metodologi Pengabdian Berbasis Riset (Service Learning)",
            date: "15 Dec 2025",
            category: "Workshop",
            excerpt: "Tingkatkan kualitas pengabdian masyarakat dengan metode berbasis riset yang terukur dan berdampak.",
            image: "https://source.unsplash.com/random/800x600?workshop"
        },
        {
            id: 4,
            title: "Desa Binaan UIM Raih Penghargaan Desa Wisata Terbaik se-Madura",
            date: "05 Nov 2025",
            category: "Achievement",
            excerpt: "Desa Larangan yang merupakan desa binaan UIM berhasil meraih juara 1 dalam lomba Desa Wisata.",
            image: "https://source.unsplash.com/random/800x600?achievement"
        },
        {
            id: 5,
            title: "Sosialisasi Teknis Pelaporan Keuangan Hibah Pengabdian",
            date: "25 Oct 2025",
            category: "Sosialisasi",
            excerpt: "Panduan teknis bagi dosen penerima hibah dalam menyusun laporan keuangan yang akuntabel.",
            image: "https://source.unsplash.com/random/800x600?finance"
        },
        {
            id: 6,
            title: "Pelepasan Mahasiswa KKN Reguler Periode II Tahun 2025",
            date: "01 Sep 2025",
            category: "KKN",
            excerpt: "Rektor UIM secara resmi melepas 500 mahasiswa untuk mengabdi di 20 desa di Kabupaten Pamekasan.",
            image: "https://source.unsplash.com/random/800x600?students"
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
                        {language === 'id' ? 'Info Pengabdian' : 'Community Service Info'}
                    </h1>
                    <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto' }}>
                        {language === 'id'
                            ? "Berita terbaru, agenda kegiatan, dan pengumuman terkait program pengabdian kepada masyarakat Universitas Islam Madura."
                            : "Latest news, agendas, and announcements regarding Islamic University of Madura's community service programs."}
                    </p>
                </motion.div>
            </div>

            {/* CONTENT SECTION */}
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>

                {/* SEARCH & FILTERS */}
                <div style={{ marginBottom: '40px', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                    <input
                        type="text"
                        placeholder={language === 'id' ? "Cari informasi..." : "Search info..."}
                        style={{
                            flex: 2,
                            padding: '15px',
                            borderRadius: '10px',
                            border: '1px solid #ddd',
                            fontSize: '1rem',
                            outline: 'none',
                            minWidth: '250px'
                        }}
                    />
                    <select style={{
                        flex: 1,
                        padding: '15px',
                        borderRadius: '10px',
                        border: '1px solid #ddd',
                        fontSize: '1rem',
                        outline: 'none',
                        minWidth: '150px'
                    }}>
                        <option value="">All Categories</option>
                        <option value="KKN">KKN</option>
                        <option value="Grant">Grant (Hibah)</option>
                        <option value="Workshop">Workshop</option>
                        <option value="Achievement">Achievement</option>
                    </select>
                </div>

                {/* INFO GRID */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                    gap: '30px'
                }}>
                    {infoList.map((item, index) => (
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
                                overflow: 'hidden',
                                boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%'
                            }}
                        >
                            {/* Image Placeholder */}
                            <div style={{
                                height: '200px',
                                backgroundColor: '#e0e0e0',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(45deg, #004d26, #008000)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontSize: '3rem',
                                    opacity: 0.8
                                }}>
                                    <i className="fas fa-hand-holding-heart"></i>
                                </div>
                                <div style={{
                                    position: 'absolute',
                                    top: '15px',
                                    right: '15px',
                                    backgroundColor: '#f9a825',
                                    color: 'white',
                                    padding: '5px 12px',
                                    borderRadius: '5px',
                                    fontSize: '0.8rem',
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase'
                                }}>
                                    {item.category}
                                </div>
                            </div>

                            <div style={{ padding: '25px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                <div style={{
                                    fontSize: '0.85rem',
                                    color: '#888',
                                    marginBottom: '10px',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <i className="far fa-calendar-alt" style={{ marginRight: '6px' }}></i>
                                    {item.date}
                                </div>

                                <h3 style={{
                                    fontSize: '1.2rem',
                                    fontWeight: 'bold',
                                    color: '#333',
                                    marginBottom: '15px',
                                    lineHeight: '1.4'
                                }}>
                                    {item.title}
                                </h3>

                                <p style={{ color: '#666', lineHeight: '1.6', fontSize: '0.95rem', marginBottom: 'auto' }}>
                                    {item.excerpt}
                                </p>

                                <button style={{
                                    marginTop: '20px',
                                    backgroundColor: 'transparent',
                                    border: '1px solid #004d26',
                                    color: '#004d26',
                                    padding: '10px',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    fontWeight: '600',
                                    transition: 'all 0.3s'
                                }}
                                    onMouseOver={(e) => {
                                        e.target.style.backgroundColor = '#004d26';
                                        e.target.style.color = 'white';
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.backgroundColor = 'transparent';
                                        e.target.style.color = '#004d26';
                                    }}
                                >
                                    {language === 'id' ? 'Selengkapnya' : 'Read More'}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* PAGINATION */}
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', gap: '10px' }}>
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

export default PengabdianInfo;
