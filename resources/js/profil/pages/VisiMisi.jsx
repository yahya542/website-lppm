import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../contexts/translations';

const VisiMisi = () => {
    const { language } = useLanguage();
    const t = translations[language];

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
                        {language === 'id' ? 'Visi & Misi' : 'Vision & Mission'}
                    </h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto' }}>
                        {language === 'id'
                            ? "Landasan dan arah gerak LPPM Universitas Islam Madura dalam memajukan riset dan pengabdian."
                            : "The foundation and direction of LPPM Islamic University of Madura in advancing research and community service."}
                    </p>
                </motion.div>
            </div>

            {/* VISI CARD */}
            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    style={{
                        backgroundColor: '#fff',
                        padding: '50px',
                        borderRadius: '20px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                        marginBottom: '40px',
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', background: 'linear-gradient(90deg, #f9a825, #fbc02d)' }}></div>

                    <div style={{
                        width: '80px',
                        height: '80px',
                        backgroundColor: '#e8f5e9',
                        color: '#004d26',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '32px',
                        margin: '0 auto 25px'
                    }}>
                        <i className="fas fa-eye"></i>
                    </div>

                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', color: '#004d26' }}>
                        {language === 'id' ? 'VISI' : 'VISION'}
                    </h2>

                    <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#555', fontStyle: 'italic', maxWidth: '800px', margin: '0 auto' }}>
                        "{t.vision_desc}"
                    </p>
                </motion.div>

                {/* MISI CARD */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ delay: 0.2 }}
                    style={{
                        backgroundColor: '#fff',
                        padding: '50px',
                        borderRadius: '20px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', background: 'linear-gradient(90deg, #004d26, #008000)' }}></div>

                    <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                        <div style={{
                            width: '80px',
                            height: '80px',
                            backgroundColor: '#fff3e0',
                            color: '#f9a825',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '32px',
                            margin: '0 auto 25px'
                        }}>
                            <i className="fas fa-bullseye"></i>
                        </div>

                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', color: '#004d26' }}>
                            {language === 'id' ? 'MISI' : 'MISSION'}
                        </h2>
                    </div>

                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {(language === 'id' ? [
                                "Mendorong penelitian berkualitas yang berkontribusi pada pengembangan ilmu pengetahuan dan teknologi.",
                                "Memfasilitasi kegiatan pengabdian kepada masyarakat yang berdampak positif dan berkelanjutan.",
                                "Meningkatkan kerjasama strategis dengan institusi dalam dan luar negeri untuk pengembangan akademik.",
                                "Mengembangkan inovasi dan hilirisasi produk penelitian yang dapat dimanfaatkan oleh masyarakat luas.",
                                "Membangun budaya akademik yang unggul berlandaskan nilai-nilai keislaman."
                            ] : [
                                "Encourage quality research that contributes to the development of science and technology.",
                                "Facilitate community service activities that have a positive and sustainable impact.",
                                "Increase strategic cooperation with domestic and foreign institutions for academic development.",
                                "Develop innovation and downstreaming of research products that can be utilized by the wider community.",
                                "Build a superior academic culture based on Islamic values."
                            ]).map((item, idx) => (
                                <li key={idx} style={{
                                    marginBottom: '20px',
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    fontSize: '1.1rem',
                                    color: '#555',
                                    lineHeight: '1.6'
                                }}>
                                    <i className="fas fa-check-circle" style={{
                                        color: '#004d26',
                                        marginRight: '15px',
                                        marginTop: '5px',
                                        fontSize: '18px'
                                    }}></i>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default VisiMisi;
