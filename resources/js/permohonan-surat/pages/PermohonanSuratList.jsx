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

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', position: 'relative' }}>
                        {[
                            { step: "01", title: "Login Akun", title_en: "Account Login", icon: "fa-sign-in-alt", desc: "Masuk menggunakan akun SSO UIM", desc_en: "Login using UIM SSO account" },
                            { step: "02", title: "Pilih Layanan", title_en: "Select Service", icon: "fa-list-ul", desc: "Pilih jenis surat yang dibutuhkan", desc_en: "Select the type of letter needed" },
                            { step: "03", title: "Isi Formulir", title_en: "Fill Form", icon: "fa-edit", desc: "Lengkapi data yang diperlukan", desc_en: "Complete the required data" },
                            { step: "04", title: "Verifikasi", title_en: "Verification", icon: "fa-check-circle", desc: "Proses verifikasi oleh admin", desc_en: "Verification process by admin" },
                            { step: "05", title: "Unduh Surat", title_en: "Download Letter", icon: "fa-download", desc: "Unduh surat yang telah terbit", desc_en: "Download the issued letter" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                transition={{ delay: index * 0.1 }}
                                style={{
                                    backgroundColor: 'white',
                                    padding: '20px',
                                    borderRadius: '15px',
                                    textAlign: 'center',
                                    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                                    position: 'relative',
                                    zIndex: 2
                                }}
                            >
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    backgroundColor: '#37474f',
                                    color: 'white',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '14px',
                                    fontWeight: 'bold',
                                    margin: '0 auto 15px'
                                }}>
                                    {item.step}
                                </div>
                                <div style={{ fontSize: '24px', color: '#fb8c00', marginBottom: '10px' }}>
                                    <i className={`fas ${item.icon}`}></i>
                                </div>
                                <h4 style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                                    {language === 'id' ? item.title : item.title_en}
                                </h4>
                                <p style={{ fontSize: '13px', color: '#777' }}>
                                    {language === 'id' ? item.desc : item.desc_en}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PermohonanSuratList;