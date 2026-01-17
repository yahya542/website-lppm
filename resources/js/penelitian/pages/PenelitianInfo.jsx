import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const PenelitianInfo = () => {
    const { language } = useLanguage();

    // Dummy Data for Research Info/News
    const infoList = [
        {
            id: 1,
            title: "Penerimaan Proposal Penelitian Dana DRPM Tahun Anggaran 2026",
            date: "12 Jan 2026",
            category: "Grant",
            excerpt: "Diberitahukan kepada seluruh dosen Universitas Islam Madura bahwa penerimaan proposal penelitian skema DRPM telah dibuka.",
            image: "https://source.unsplash.com/random/800x600?research"
        },
        {
            id: 2,
            title: "Jadwal Monitoring dan Evaluasi (Monev) Penelitian Internal Tahap 1",
            date: "05 Dec 2025",
            category: "Agenda",
            excerpt: "Jadwal pelaksanaan Monev Internal untuk penerima hibah penelitian tahun 2025 akan dilaksanakan pada tanggal 10-15 Desember.",
            image: "https://source.unsplash.com/random/800x600?meeting"
        },
        {
            id: 3,
            title: "Workshop Penulisan Artikel Ilmiah Bereputasi Internasional (Scopus Q1/Q2)",
            date: "20 Nov 2025",
            category: "Workshop",
            excerpt: "LPPM UIM mengundang narasumber ahli untuk mendampingi dosen dalam publikasi jurnal internasional bereputasi.",
            image: "https://source.unsplash.com/random/800x600?writing"
        },
        {
            id: 4,
            title: "Sosialisasi Panduan Penelitian dan Pengabdian Masyarakat Edisi XIII",
            date: "10 Oct 2025",
            category: "Sosialisasi",
            excerpt: "Materi sosialisasi buku panduan terbaru dapat diunduh melalui sistem informasi penelitian.",
            image: "https://source.unsplash.com/random/800x600?seminar"
        },
        {
            id: 5,
            title: "Pengumuman Pemenang Hibah Penelitian Dosen Pemula (PDP) 2025",
            date: "01 Sep 2025",
            category: "Announcement",
            excerpt: "Selamat kepada para dosen yang proposalnya lolos didanai pada skema PDP tahun 2025.",
            image: "https://source.unsplash.com/random/800x600?winner"
        },
        {
            id: 6,
            title: "Klinik Manuscript: Bedah Jurnal Menuju Sinta 2",
            date: "15 Aug 2025",
            category: "Workshop",
            excerpt: "Kegiatan pendampingan intensif bagi pengelola jurnal di lingkungan Universitas Islam Madura.",
            image: "https://source.unsplash.com/random/800x600?library"
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
                        {language === 'id' ? 'Info Penelitian' : 'Research Info'}
                    </h1>
                    <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto' }}>
                        {language === 'id'
                            ? "Berita terbaru, pengumuman, dan agenda kegiatan seputar penelitian di lingkungan Universitas Islam Madura."
                            : "Latest news, announcements, and agenda regarding research at the Islamic University of Madura."}
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
                        <option value="Grant">Grant (Hibah)</option>
                        <option value="Workshop">Workshop</option>
                        <option value="Agenda">Agenda</option>
                        <option value="Announcement">Announcement</option>
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
                            {/* Image Placeholder - Colored div if image fails or simplified */}
                            <div style={{
                                height: '200px',
                                backgroundColor: '#e0e0e0',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                {/* Usually we use img tag, but for stability with random placeholder we can use a colored block with icon if preferred. 
                                    Using a gradient placeholder for professional look if image breaks. 
                                */}
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
                                    <i className="fas fa-bullhorn"></i>
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

export default PenelitianInfo;
