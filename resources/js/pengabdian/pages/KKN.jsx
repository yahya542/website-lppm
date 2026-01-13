import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const KKN = () => {
    const { language } = useLanguage();

    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="main-content" style={{ backgroundColor: '#f9f9f9', paddingBottom: '60px' }}>

            {/* HERO SECTION */}
            <div style={{
                background: 'linear-gradient(135deg, #004d26 0%, #008000 100%)',
                padding: '80px 20px',
                color: 'white',
                textAlign: 'center',
                marginBottom: '50px'
            }}>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{ duration: 0.6 }}
                    className="container"
                    style={{ maxWidth: '1000px', margin: '0 auto' }}
                >
                    <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px', letterSpacing: '1px' }}>
                        Kuliah Kerja Nyata (KKN)
                    </h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                        {language === 'id'
                            ? "Wujud nyata pengabdian mahasiswa Universitas Islam Madura kepada masyarakat sebagai implementasi Tri Dharma Perguruan Tinggi."
                            : "Real manifestation of community service by Islamic University of Madura students as an implementation of the Tri Dharma of Higher Education."}
                    </p>
                </motion.div>
            </div>

            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>

                {/* STATS SECTION */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={variants}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '30px',
                        marginBottom: '60px'
                    }}
                >
                    {[
                        { label: 'Mahasiswa', value: '1,200+', icon: 'fa-user-graduate', color: '#1976d2' },
                        { label: 'Desa Binaan', value: '45', icon: 'fa-map-marked-alt', color: '#43a047' },
                        { label: 'Dosen Pembimbing', value: '80+', icon: 'fa-chalkboard-teacher', color: '#f9a825' },
                        { label: 'Program Unggulan', value: '120+', icon: 'fa-star', color: '#e53935' },
                    ].map((stat, index) => (
                        <div key={index} style={{
                            backgroundColor: 'white',
                            padding: '30px',
                            borderRadius: '15px',
                            textAlign: 'center',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            transition: 'transform 0.3s'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{
                                width: '60px',
                                height: '60px',
                                backgroundColor: `${stat.color}20`,
                                color: stat.color,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '24px',
                                margin: '0 auto 15px'
                            }}>
                                <i className={`fas ${stat.icon}`}></i>
                            </div>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>{stat.value}</div>
                            <div style={{ color: '#666', fontSize: '1rem' }}>{stat.label}</div>
                        </div>
                    ))}
                </motion.div>

                {/* TYPES OF KKN */}
                <div style={{ marginBottom: '60px' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', color: '#333', marginBottom: '40px' }}>
                        {language === 'id' ? 'Program KKN Kami' : 'Our KKN Programs'}
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>

                        {/* KKN TEMATIK */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={variants}
                            style={{ backgroundColor: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}
                        >
                            <div style={{ height: '200px', backgroundColor: '#e8f5e9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="fas fa-seedling" style={{ fontSize: '5rem', color: '#4caf50', opacity: 0.5 }}></i>
                            </div>
                            <div style={{ padding: '30px' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#004d26', marginBottom: '15px' }}>KKN Tematik</h3>
                                <p style={{ color: '#555', lineHeight: '1.6', marginBottom: '20px' }}>
                                    {language === 'id'
                                        ? "Fokus pada tema spesifik seperti Desa Wisata, Kewirausahaan, atau Kesehatan untuk memecahkan masalah konkret di masyarakat."
                                        : "Focuses on specific themes such as Tourism Villages, Entrepreneurship, or Health to solve concrete problems in the community."}
                                </p>
                                <ul style={{ paddingLeft: '20px', color: '#666' }}>
                                    <li>Desa Membangun</li>
                                    <li>Pemberdayaan UMKM</li>
                                    <li>Sanitasi & Kesehatan</li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* KKN REGULER */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={variants}
                            transition={{ delay: 0.2 }}
                            style={{ backgroundColor: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}
                        >
                            <div style={{ height: '200px', backgroundColor: '#e3f2fd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="fas fa-users-cog" style={{ fontSize: '5rem', color: '#2196f3', opacity: 0.5 }}></i>
                            </div>
                            <div style={{ padding: '30px' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1565c0', marginBottom: '15px' }}>KKN Reguler</h3>
                                <p style={{ color: '#555', lineHeight: '1.6', marginBottom: '20px' }}>
                                    {language === 'id'
                                        ? "Program KKN standar yang melibatkan mahasiswa lintas disiplin ilmu untuk berkolaborasi membangun desa secara holistik."
                                        : "Standard KKN program involving students from across disciplines to collaborate in building villages holistically."}
                                </p>
                                <ul style={{ paddingLeft: '20px', color: '#666' }}>
                                    <li>Administrasi Desa</li>
                                    <li>Pendidikan Anak</li>
                                    <li>Sosial Keagamaan</li>
                                </ul>
                            </div>
                        </motion.div>

                    </div>
                </div>

                {/* GALLERY GRID */}
                <div>
                    <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', color: '#333', marginBottom: '40px' }}>
                        {language === 'id' ? 'Galeri Kegiatan' : 'Activity Gallery'}
                    </h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '20px'
                    }}>
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <motion.div
                                key={item}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={variants}
                                transition={{ delay: item * 0.1 }}
                                style={{
                                    height: '250px',
                                    backgroundColor: '#ddd',
                                    borderRadius: '15px',
                                    overflow: 'hidden',
                                    position: 'relative'
                                }}
                            >
                                <img
                                    src={`https://source.unsplash.com/random/400x400?community,village,${item}`}
                                    alt="KKN Activity"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                                    onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                                    onMouseOut={(e) => e.target.style.transform = 'scale(1.0)'}
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    padding: '15px',
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                    color: 'white',
                                    fontSize: '0.9rem'
                                }}>
                                    Kegiatan KKN Desa Binaan #{item}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default KKN;
