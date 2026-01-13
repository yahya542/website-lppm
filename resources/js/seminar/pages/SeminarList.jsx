import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../contexts/translations';

const SeminarList = () => {
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
                background: 'linear-gradient(135deg, #006064 0%, #00838f 100%)',
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
                        {t.seminar_subtitle}
                    </div>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '15px', letterSpacing: '1px' }}>
                        {t.seminar_title}
                    </h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '750px', margin: '0 auto', lineHeight: '1.6' }}>
                        {t.seminar_desc}
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
                        backgroundColor: '#e0f7fa',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#006064',
                        fontSize: '32px'
                    }}>
                        <i className="fas fa-chalkboard-teacher"></i>
                    </div>
                    <div>
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '15px', color: '#333' }}>
                            {t.seminar_program_title}
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8', maxWidth: '800px' }}>
                            {t.seminar_program_desc}
                        </p>
                    </div>
                </motion.div>

                {/* 3. JENIS KEGIATAN */}
                <div style={{ marginBottom: '60px' }}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        style={{ textAlign: 'center', marginBottom: '40px' }}
                    >
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>
                            {t.seminar_types_title}
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#f9a825', margin: '0 auto' }}></div>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {/* Seminar & Konferensi */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ delay: 0.1 }}
                            style={{
                                background: 'linear-gradient(135deg, #0277bd 0%, #01579b 100%)',
                                padding: '30px',
                                borderRadius: '15px',
                                color: 'white',
                                boxShadow: '0 10px 20px rgba(2, 119, 189, 0.3)'
                            }}
                        >
                            <div style={{ fontSize: '30px', marginBottom: '20px', opacity: 0.8 }}><i className="fas fa-microphone-alt"></i></div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
                                {language === 'id' ? 'Seminar & Konferensi' : 'Seminar & Conference'}
                            </h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {(language === 'id' ? [
                                    "Seminar Nasional",
                                    "Konferensi Internasional",
                                    "Seminar Mahasiswa",
                                    "Diseminasi Hasil Riset"
                                ] : [
                                    "National Seminar",
                                    "International Conference",
                                    "Student Seminar",
                                    "Research Dissemination"
                                ]).map((item, idx) => (
                                    <li key={idx} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                        <i className="fas fa-check" style={{ marginRight: '10px', fontSize: '12px', opacity: 0.7 }}></i> {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Workshop & Pelatihan */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ delay: 0.2 }}
                            style={{
                                background: 'linear-gradient(135deg, #ffa000 0%, #ff6f00 100%)',
                                padding: '30px',
                                borderRadius: '15px',
                                color: 'white',
                                boxShadow: '0 10px 20px rgba(255, 160, 0, 0.3)'
                            }}
                        >
                            <div style={{ fontSize: '30px', marginBottom: '20px', opacity: 0.8 }}><i className="fas fa-tools"></i></div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
                                {language === 'id' ? 'Workshop & Pelatihan' : 'Workshop & Training'}
                            </h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {(language === 'id' ? [
                                    "Metodologi Penelitian",
                                    "Penulisan Ilmiah",
                                    "Teknologi Terapan",
                                    "Manajemen Proyek"
                                ] : [
                                    "Research Methodology",
                                    "Academic Writing",
                                    "Applied Technology",
                                    "Project Management"
                                ]).map((item, idx) => (
                                    <li key={idx} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                        <i className="fas fa-check" style={{ marginRight: '10px', fontSize: '12px', opacity: 0.7 }}></i> {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* 4. KEGIATAN TERKINI */}
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
                                {t.seminar_schedule_title}
                            </h2>
                            <p style={{ color: '#666' }}>{t.seminar_schedule_subtitle}</p>
                        </div>
                        <a href="#" style={{ color: 'green', fontWeight: 'bold', textDecoration: 'none' }}>
                            {t.view_calendar} <i className="fas fa-arrow-right"></i>
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
                                title: "Seminar Nasional Riset",
                                title_en: "National Research Seminar",
                                location: "Ruang Aula",
                                date: "28",
                                month: "Des",
                                year: "2025",
                                desc: "Pembahasan mengenai tren terbaru dalam penelitian ilmu pengetahuan dan teknologi...",
                                desc_en: "Discussion regarding the latest trends in science and technology research...",
                                type: "Seminar",
                                color: "#0277bd"
                            },
                            {
                                title: "Workshop Inovasi",
                                title_en: "Innovation Workshop",
                                location: "Lab Teknologi",
                                date: "27",
                                month: "Des",
                                year: "2025",
                                desc: "Praktik langsung dalam menciptakan inovasi berbasis teknologi informasi...",
                                desc_en: "Hands-on practice in creating information technology-based innovations...",
                                type: "Workshop",
                                color: "#ffa000"
                            },
                            {
                                title: "Fokus Group Discussion",
                                title_en: "Focus Group Discussion",
                                location: "Ruang Rapat",
                                date: "26",
                                month: "Des",
                                year: "2025",
                                desc: "Fasilitasi diskusi kelompok terfokus untuk membahas isu-isu strategis dalam pendidikan...",
                                desc_en: "Facilitating focus group discussions to discuss strategic issues in education...",
                                type: "FGD",
                                color: "#4caf50"
                            },
                            {
                                title: "Seminar Internasional",
                                title_en: "International Seminar",
                                location: "Gedung Serbaguna",
                                date: "22",
                                month: "Des",
                                year: "2025",
                                desc: "Pertemuan internasional untuk membahas kolaborasi riset lintas negara...",
                                desc_en: "International meeting to discuss cross-country research collaboration...",
                                type: "Konferensi",
                                color: "#7b1fa2"
                            },
                            {
                                title: "Workshop Penulisan Ilmiah",
                                title_en: "Academic Writing Workshop",
                                location: "Ruang Seminar",
                                date: "18",
                                month: "Des",
                                year: "2025",
                                desc: "Pelatihan intensif tentang penulisan artikel ilmiah untuk publikasi internasional...",
                                desc_en: "Intensive training on writing scientific articles for international publication...",
                                type: "Pelatihan",
                                color: "#f57c00"
                            },
                            {
                                title: "Sosialisasi HKI",
                                title_en: "IPR Socialization",
                                location: "Aula Fakultas",
                                date: "15",
                                month: "Des",
                                year: "2025",
                                desc: "Penyuluhan tentang pentingnya Hak Kekayaan Intelektual bagi peneliti dan inovator...",
                                desc_en: "Counseling on the importance of Intellectual Property Rights for researchers and innovators...",
                                type: "Sosialisasi",
                                color: "#0097a7"
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
                                    border: '1px solid #eee',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <div style={{ display: 'flex', height: '100%' }}>
                                    {/* Date Column */}
                                    <div style={{
                                        width: '80px',
                                        backgroundColor: `${item.color}15`,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '15px',
                                        borderRight: `1px solid ${item.color}30`
                                    }}>
                                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: item.color }}>{item.date}</div>
                                        <div style={{ fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', color: '#666' }}>{item.month}</div>
                                        <div style={{ fontSize: '12px', color: '#999' }}>{item.year}</div>
                                    </div>

                                    {/* Content Column */}
                                    <div style={{ padding: '20px', flexGrow: 1 }}>
                                        <div style={{
                                            display: 'inline-block',
                                            padding: '3px 10px',
                                            backgroundColor: item.color,
                                            color: 'white',
                                            borderRadius: '20px',
                                            fontSize: '11px',
                                            fontWeight: 'bold',
                                            marginBottom: '10px'
                                        }}>
                                            {item.type}
                                        </div>

                                        <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px', lineHeight: '1.3' }}>
                                            {language === 'id' ? item.title : item.title_en}
                                        </h3>

                                        <div style={{ fontSize: '13px', color: '#555', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                            <i className="fas fa-map-marker-alt" style={{ marginRight: '8px', color: '#ccc' }}></i>
                                            {item.location}
                                        </div>

                                        <p style={{ color: '#777', fontSize: '13px', lineHeight: '1.6', marginBottom: '15px' }}>
                                            {language === 'id' ? item.desc : item.desc_en}
                                        </p>

                                        <a href="#" style={{ display: 'inline-flex', alignItems: 'center', color: item.color, fontWeight: 'bold', fontSize: '12px', textDecoration: 'none' }}>
                                            {t.register_now} <i className="fas fa-arrow-right" style={{ marginLeft: '5px' }}></i>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default SeminarList;