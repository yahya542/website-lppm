import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../contexts/translations';

const PermohonanSuratList = () => {
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
                background: 'linear-gradient(135deg, #fb8c00 0%, #ef6c00 100%)',
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
                        {t.letters_subtitle}
                    </div>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '15px', letterSpacing: '1px' }}>
                        {t.letters_title}
                    </h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '750px', margin: '0 auto', lineHeight: '1.6' }}>
                        {t.letters_desc}
                    </p>
                </motion.div>
            </div>

            <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>

                {/* 2. SERVICE CENTER */}
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
                        backgroundColor: '#fff3e0',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fb8c00',
                        fontSize: '32px'
                    }}>
                        <i className="fas fa-mail-bulk"></i>
                    </div>
                    <div>
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '15px', color: '#333' }}>
                            {t.letters_service_title}
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8', maxWidth: '800px' }}>
                            {t.letters_service_desc}
                        </p>
                    </div>
                </motion.div>

                {/* 3. LAYANAN SURAT */}
                <div style={{ marginBottom: '60px' }}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        style={{ textAlign: 'center', marginBottom: '40px' }}
                    >
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>
                            {t.letters_flow_title}
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#f9a825', margin: '0 auto' }}></div>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {/* Surat Keterangan */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ delay: 0.1 }}
                            style={{
                                backgroundColor: 'white',
                                padding: '30px',
                                borderRadius: '15px',
                                boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
                                borderTop: '5px solid #fb8c00',
                                textAlign: 'center'
                            }}
                        >
                            <div style={{ width: '60px', height: '60px', backgroundColor: '#fff3e0', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fb8c00', fontSize: '24px' }}>
                                <i className="fas fa-file-alt"></i>
                            </div>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '15px' }}>
                                {language === 'id' ? 'Surat Keterangan' : 'Certificate Letter'}
                            </h3>
                            <p style={{ color: '#666', marginBottom: '20px', fontSize: '14px' }}>
                                {language === 'id'
                                    ? 'Layanan pembuatan surat keterangan penelitian, pengabdian, dan kegiatan akademik lainnya untuk keperluan administrasi.'
                                    : 'Service for creating research, community service, and other academic activity certificates for administrative purposes.'}
                            </p>
                            <a href="#" style={{ padding: '8px 20px', backgroundColor: '#fb8c00', color: 'white', borderRadius: '20px', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold', display: 'inline-block' }}>
                                {t.apply_now}
                            </a>
                        </motion.div>

                        {/* Surat Rekomendasi */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ delay: 0.2 }}
                            style={{
                                backgroundColor: 'white',
                                padding: '30px',
                                borderRadius: '15px',
                                boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
                                borderTop: '5px solid #43a047',
                                textAlign: 'center'
                            }}
                        >
                            <div style={{ width: '60px', height: '60px', backgroundColor: '#e8f5e9', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#43a047', fontSize: '24px' }}>
                                <i className="fas fa-thumbs-up"></i>
                            </div>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '15px' }}>
                                {language === 'id' ? 'Surat Rekomendasi' : 'Recommendation Letter'}
                            </h3>
                            <p style={{ color: '#666', marginBottom: '20px', fontSize: '14px' }}>
                                {language === 'id'
                                    ? 'Pengajuan surat rekomendasi untuk beasiswa, studi lanjut, atau keperluan profesional lainnya dari pimpinan LPPM.'
                                    : 'Application for recommendation letters for scholarships, further studies, or other professional needs from LPPM leadership.'}
                            </p>
                            <a href="#" style={{ padding: '8px 20px', backgroundColor: '#43a047', color: 'white', borderRadius: '20px', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold', display: 'inline-block' }}>
                                {t.apply_now}
                            </a>
                        </motion.div>

                        {/* Surat Tugas */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ delay: 0.3 }}
                            style={{
                                backgroundColor: 'white',
                                padding: '30px',
                                borderRadius: '15px',
                                boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
                                borderTop: '5px solid #1e88e5',
                                textAlign: 'center'
                            }}
                        >
                            <div style={{ width: '60px', height: '60px', backgroundColor: '#e3f2fd', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1e88e5', fontSize: '24px' }}>
                                <i className="fas fa-briefcase"></i>
                            </div>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '15px' }}>
                                {language === 'id' ? 'Surat Tugas' : 'Assignment Letter'}
                            </h3>
                            <p style={{ color: '#666', marginBottom: '20px', fontSize: '14px' }}>
                                {language === 'id'
                                    ? 'Penerbitan surat tugas untuk pelaksanaan penelitian lapangan, pengabdian masyarakat, atau seminar ilmiah.'
                                    : 'Issuance of assignment letters for field research, community service, or scientific seminars.'}
                            </p>
                            <a href="#" style={{ padding: '8px 20px', backgroundColor: '#1e88e5', color: 'white', borderRadius: '20px', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold', display: 'inline-block' }}>
                                {t.apply_now}
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* 4. ALUR PENGAJUAN */}
                <div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        style={{ textAlign: 'center', marginBottom: '40px' }}
                    >
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>
                            {t.letters_flow_title}
                        </h2>
                        <p style={{ color: '#666' }}>
                            {language === 'id'
                                ? 'Langkah mudah mengajukan permohonan surat secara online'
                                : 'Easy steps to apply for a letter online'}
                        </p>
                    </motion.div>

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
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Connecting Line (Background) */}
                        <div style={{
                            position: 'absolute',
                            top: '85px',
                            left: '10%',
                            right: '10%',
                            height: '4px',
                            backgroundColor: '#eee',
                            zIndex: 1,
                            display: 'flex'
                        }}>
                            <div style={{ width: '100%', height: '100%', background: 'linear-gradient(90deg, #fb8c00 0%, #ef6c00 100%)', opacity: 0.3 }}></div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', position: 'relative', zIndex: 2, gap: '20px' }}>
                            {[
                                { step: "1", title: "Login Akun", title_en: "Account Login", icon: "fa-sign-in-alt", desc: "Masuk akun SSO UIM", desc_en: "Login with SSO" },
                                { step: "2", title: "Pilih Layanan", title_en: "Select Service", icon: "fa-list-ul", desc: "Pilih jenis surat", desc_en: "Choose letter type" },
                                { step: "3", title: "Isi Formulir", title_en: "Fill Form", icon: "fa-edit", desc: "Lengkapi data", desc_en: "Fill required data" },
                                { step: "4", title: "Verifikasi", title_en: "Verification", icon: "fa-check-circle", desc: "Proses admin", desc_en: "Admin process" },
                                { step: "5", title: "Unduh Surat", title_en: "Download Letter", icon: "fa-download", desc: "Unduh dokumen", desc_en: "Download doc" }
                            ].map((item, index) => (
                                <div key={index} style={{ flex: '1', minWidth: '140px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <div style={{
                                        width: '90px',
                                        height: '90px',
                                        backgroundColor: 'white', // bg white to cover line
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '20px',
                                        boxShadow: '0 5px 15px rgba(251, 140, 0, 0.2)',
                                        border: '4px solid #fff3e0',
                                        position: 'relative'
                                    }}>
                                        <div style={{
                                            width: '60px',
                                            height: '60px',
                                            backgroundColor: '#fb8c00', // Warning/Orange color
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white',
                                            fontSize: '24px'
                                        }}>
                                            <i className={`fas ${item.icon}`}></i>
                                        </div>
                                        <div style={{
                                            position: 'absolute',
                                            top: '-5px',
                                            right: '-5px',
                                            width: '30px',
                                            height: '30px',
                                            backgroundColor: '#37474f',
                                            color: 'white',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '12px',
                                            fontWeight: 'bold',
                                            border: '3px solid white'
                                        }}>
                                            {item.step}
                                        </div>
                                    </div>

                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>
                                        {language === 'id' ? item.title : item.title_en}
                                    </h4>
                                    <p style={{ fontSize: '13px', color: '#777', maxWidth: '150px', lineHeight: '1.4' }}>
                                        {language === 'id' ? item.desc : item.desc_en}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default PermohonanSuratList;