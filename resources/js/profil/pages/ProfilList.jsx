import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../contexts/translations';

const ProfilList = () => {
    const { language } = useLanguage();
    const t = translations[language];

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="main-content" style={{ backgroundColor: '#f9f9f9', paddingBottom: '60px' }}>

            {/* 1. HERO SECTION */}
            <div style={{
                background: 'linear-gradient(135deg, #004d26 0%, #008000 100%)',
                padding: '60px 20px',
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
                    <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '15px', letterSpacing: '1px' }}>
                        {t.profil_title}
                    </h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto' }}>
                        {t.profil_desc}
                    </p>
                </motion.div>
            </div>

            <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>

                {/* 2. INTRODUCTION CARD */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    style={{
                        backgroundColor: 'white',
                        padding: '40px',
                        borderRadius: '15px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                        marginBottom: '40px',
                        borderLeft: '5px solid #f9a825'
                    }}
                >
                    <h2 style={{ color: '#333', marginBottom: '20px', fontWeight: 'bold' }}>
                        {language === 'id' ? 'Tentang Kami' : 'About Us'}
                    </h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', textAlign: 'justify' }}>
                        {language === 'id'
                            ? "Lembaga Penelitian dan Pengabdian Masyarakat (LPPM) Universitas Islam Madura (UIM) berkomitmen untuk meningkatkan kualitas penelitian dan pengabdian kepada masyarakat melalui kolaborasi lintas disiplin ilmu. Kami hadir sebagai wadah inovasi yang menjembatani akademisi dan kebutuhan masyarakat."
                            : "The Institute for Research and Community Service (LPPM) of Islamic University of Madura (UIM) is committed to improving the quality of research and community service through interdisciplinary collaboration. We are here as a forum for innovation bridging academics and community needs."}
                    </p>
                </motion.div>

                {/* 3. VISI & MISI */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '40px' }}>
                    {/* Visi */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ delay: 0.2 }}
                        style={{
                            backgroundColor: '#fff',
                            padding: '30px',
                            borderRadius: '15px',
                            boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}
                    >
                        <div style={{
                            width: '60px',
                            height: '60px',
                            backgroundColor: '#e8f5e9',
                            color: 'green',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '24px',
                            marginBottom: '20px'
                        }}>
                            <i className="fas fa-eye"></i>
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '15px', color: '#004d26' }}>
                            {language === 'id' ? 'VISI' : 'VISION'}
                        </h3>
                        <p style={{ color: '#666', lineHeight: '1.6' }}>
                            "{t.vision_desc}"
                        </p>
                    </motion.div>

                    {/* Misi */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ delay: 0.4 }}
                        style={{
                            backgroundColor: '#fff',
                            padding: '30px',
                            borderRadius: '15px',
                            boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', gap: '15px' }}>
                            <div style={{
                                width: '50px',
                                height: '50px',
                                backgroundColor: '#fff3e0',
                                color: '#f9a825',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '20px'
                            }}>
                                <i className="fas fa-bullseye"></i>
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#004d26', margin: 0 }}>
                                {language === 'id' ? 'MISI' : 'MISSION'}
                            </h3>
                        </div>
                        <ul style={{ paddingLeft: '20px', color: '#666', lineHeight: '1.8' }}>
                            {language === 'id' ? (
                                <>
                                    <li style={{ marginBottom: '10px' }}>Mendorong penelitian berkualitas yang berkontribusi pada pengembangan ilmu pengetahuan.</li>
                                    <li style={{ marginBottom: '10px' }}>Memfasilitasi pengabdian masyarakat yang bermanfaat bagi masyarakat luas.</li>
                                    <li style={{ marginBottom: '10px' }}>Meningkatkan kerjasama dengan berbagai pihak dalam dan luar negeri.</li>
                                    <li>Mengembangkan inovasi yang berkelanjutan untuk kesejahteraan masyarakat.</li>
                                </>
                            ) : (
                                <>
                                    <li style={{ marginBottom: '10px' }}>Encouraging quality research that contributes to the development of science.</li>
                                    <li style={{ marginBottom: '10px' }}>Facilitating community service that benefits the wider community.</li>
                                    <li style={{ marginBottom: '10px' }}>Increasing cooperation with various parties at home and abroad.</li>
                                    <li>Developing sustainable innovations for community welfare.</li>
                                </>
                            )}
                        </ul>
                    </motion.div>
                </div>

                {/* 4. STRUKTUR ORGANISASI */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    style={{
                        background: 'linear-gradient(to right, #004d26, #00695c)',
                        padding: '40px',
                        borderRadius: '20px',
                        color: 'white',
                        boxShadow: '0 15px 40px rgba(0,77,38,0.3)'
                    }}
                >
                    <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                        <h2 style={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: '10px' }}>{t.structure_title}</h2>
                        <p style={{ opacity: 0.8 }}>
                            {language === 'id' ? 'Pilar pendukung keberhasilan program LPPM UIM' : 'Supporting pillars for the success of LPPM UIM programs'}
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                        {/* Pimpinan */}
                        <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '25px', borderRadius: '15px', backdropFilter: 'blur(5px)' }}>
                            <h4 style={{ borderBottom: '2px solid #f9a825', paddingBottom: '10px', marginBottom: '20px', display: 'inline-block' }}>
                                {language === 'id' ? 'PIMPINAN' : 'LEADERSHIP'}
                            </h4>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                                <div style={{ marginRight: '15px', color: '#f9a825' }}><i className="fas fa-user-tie fa-lg"></i></div>
                                <div>
                                    <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Dr. Ahmad Sudrajat, M.T.</div>
                                    <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>{t.chairman} LPPM</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ marginRight: '15px', color: '#f9a825' }}><i className="fas fa-user fa-lg"></i></div>
                                <div>
                                    <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Dr. Siti Rahmawati, M.Si.</div>
                                    <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>{t.secretary}</div>
                                </div>
                            </div>
                        </div>

                        {/* Bidang */}
                        <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '25px', borderRadius: '15px', backdropFilter: 'blur(5px)' }}>
                            <h4 style={{ borderBottom: '2px solid #f9a825', paddingBottom: '10px', marginBottom: '20px', display: 'inline-block' }}>
                                {language === 'id' ? 'FOKUS BIDANG' : 'FOCUS AREAS'}
                            </h4>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {(language === 'id' ? [
                                    "Penelitian Sains dan Teknologi",
                                    "Penelitian Sosial Humaniora",
                                    "Pengabdian Masyarakat",
                                    "Kemitraan dan Kerjasama"
                                ] : [
                                    "Science and Technology Research",
                                    "Social Humanities Research",
                                    "Community Service",
                                    "Partnership and Cooperation"
                                ]).map((item, idx) => (
                                    <li key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                        <i className="fas fa-check-circle" style={{ color: '#f9a825', marginRight: '10px', fontSize: '14px' }}></i>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default ProfilList;