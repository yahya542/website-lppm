import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../contexts/translations';

const PenelitianList = () => {
    const { language } = useLanguage();
    const t = translations[language];

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
                        {t.research_subtitle}
                    </div>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '15px', letterSpacing: '1px' }}>
                        {t.research_title}
                    </h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
                        {t.research_desc}
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
                        flexDirection: 'column', // Mobile default
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
                        <i className="fas fa-microscope"></i>
                    </div>
                    <div>
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '15px', color: '#333' }}>
                            {t.research_program_title}
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8', maxWidth: '800px' }}>
                            {t.research_program_desc}
                        </p>
                    </div>
                </motion.div>

                {/* 3. BIDANG PENELITIAN */}
                <div style={{ marginBottom: '60px' }}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        style={{ textAlign: 'center', marginBottom: '40px' }}
                    >
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>
                            {t.research_focus_title}
                        </h2>
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
                                background: 'linear-gradient(135deg, #1e88e5 0%, #1565c0 100%)',
                                padding: '30px',
                                borderRadius: '15px',
                                color: 'white',
                                boxShadow: '0 10px 20px rgba(30, 136, 229, 0.3)'
                            }}
                        >
                            <div style={{ fontSize: '30px', marginBottom: '20px', opacity: 0.8 }}><i className="fas fa-atom"></i></div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
                                {language === 'id' ? 'Sains & Teknologi' : 'Science & Technology'}
                            </h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {(language === 'id' ? [
                                    "Ilmu Komputer & TI",
                                    "Teknik & Industri",
                                    "Bioteknologi",
                                    "Material Canggih"
                                ] : [
                                    "Computer Science & IT",
                                    "Engineering & Industry",
                                    "Biotechnology",
                                    "Advanced Materials"
                                ]).map((item, idx) => (
                                    <li key={idx} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                        <i className="fas fa-check" style={{ marginRight: '10px', fontSize: '12px', opacity: 0.7 }}></i> {item}
                                    </li>
                                ))}
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
                                background: 'linear-gradient(135deg, #fb8c00 0%, #ef6c00 100%)',
                                padding: '30px',
                                borderRadius: '15px',
                                color: 'white',
                                boxShadow: '0 10px 20px rgba(251, 140, 0, 0.3)'
                            }}
                        >
                            <div style={{ fontSize: '30px', marginBottom: '20px', opacity: 0.8 }}><i className="fas fa-users"></i></div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
                                {language === 'id' ? 'Sosial Humaniora' : 'Social Humanities'}
                            </h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {(language === 'id' ? [
                                    "Ekonomi & Pembangunan",
                                    "Pendidikan",
                                    "Sosiologi & Antropologi",
                                    "Bahasa & Sastra"
                                ] : [
                                    "Economics & Development",
                                    "Education",
                                    "Sociology & Anthropology",
                                    "Language & Literature"
                                ]).map((item, idx) => (
                                    <li key={idx} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                        <i className="fas fa-check" style={{ marginRight: '10px', fontSize: '12px', opacity: 0.7 }}></i> {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* 4. PUBLIKASI TERBARU */}
                <div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '30px' }}
                    >
                        <div>
                            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>
                                {t.research_publications_title}
                            </h2>
                            <p style={{ color: '#666' }}>{t.research_publications_subtitle}</p>
                        </div>
                        <a href="#" style={{ color: 'green', fontWeight: 'bold', textDecoration: 'none' }}>
                            {t.view_all} <i className="fas fa-arrow-right"></i>
                        </a>
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
                                title: "Penelitian Inovatif di Bidang Teknologi",
                                title_en: "Innovative Research in Technology",
                                author: "Dr. Ahmad Sudrajat, M.T.",
                                journal: "Jurnal Ilmiah Nasional",
                                journal_en: "National Scientific Journal",
                                date: "26 Des 2025",
                                desc: "Penelitian ini membahas inovasi terbaru dalam bidang teknologi informasi dan dampaknya terhadap industri 4.0...",
                                desc_en: "This research discusses the latest innovations in information technology and their impact on industry 4.0...",
                                icon: "fa-laptop-code",
                                color: "#1e88e5"
                            },
                            {
                                title: "Analisis Kebijakan Pendidikan Terkini",
                                title_en: "Latest Education Policy Analysis",
                                author: "Dr. Rina Kartika, M.Pd.",
                                journal: "Jurnal Kebijakan Pendidikan",
                                journal_en: "Journal of Education Policy",
                                date: "23 Des 2025",
                                desc: "Studi komprehensif tentang efektivitas kebijakan pendidikan di Indonesia saat ini dan rekomendasi perbaikan...",
                                desc_en: "A comprehensive study on the effectiveness of current education policies in Indonesia and recommendations for improvement...",
                                icon: "fa-book-reader",
                                color: "#43a047"
                            },
                            {
                                title: "Implementasi AI dalam Pendidikan",
                                title_en: "Implementation of AI in Education",
                                author: "Dr. Budi Santoso, Ph.D.",
                                journal: "Konferensi Internasional",
                                journal_en: "International Conference",
                                date: "24 Des 2025",
                                desc: "Penerapan kecerdasan buatan dalam personalisasi proses pembelajaran mahasiswa di perguruan tinggi...",
                                desc_en: "Implementation of AI in personalizing the student learning process in higher education...",
                                icon: "fa-robot",
                                color: "#fb8c00"
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
                                            {language === 'id' ? item.journal : item.journal_en}
                                        </div>
                                        <div style={{ color: '#999', fontSize: '13px' }}><i className="far fa-calendar-alt"></i> {item.date}</div>
                                    </div>

                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px', lineHeight: '1.4' }}>
                                        {language === 'id' ? item.title : item.title_en}
                                    </h3>

                                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                                        <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '10px', color: '#666', fontSize: '12px' }}>
                                            <i className="fas fa-user"></i>
                                        </div>
                                        <div style={{ fontSize: '13px', color: '#555' }}>{item.author}</div>
                                    </div>

                                    <p style={{ color: '#777', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
                                        {language === 'id' ? item.desc : item.desc_en}
                                    </p>

                                    <a href="#" style={{ display: 'inline-flex', alignItems: 'center', color: item.color, fontWeight: 'bold', fontSize: '13px', textDecoration: 'none' }}>
                                        {t.read_more} <i className="fas fa-arrow-right" style={{ marginLeft: '5px' }}></i>
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

export default PenelitianList;