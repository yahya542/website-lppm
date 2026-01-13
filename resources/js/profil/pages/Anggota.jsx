import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const Anggota = () => {
    const { language } = useLanguage();

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const teamMembers = [
        {
            name: "Dr. Ahmad Sudrajat, M.T.",
            role: language === 'id' ? "Ketua LPPM" : "Head of LPPM",
            image: "https://ui-avatars.com/api/?name=Ahmad+Sudrajat&background=0D8ABC&color=fff&size=200", // Placeholder
            email: "ahmad.sudrajat@uim.ac.id"
        },
        {
            name: "Dr. Siti Rahmawati, M.Si.",
            role: language === 'id' ? "Sekretaris" : "Secretary",
            image: "https://ui-avatars.com/api/?name=Siti+Rahmawati&background=D72638&color=fff&size=200",
            email: "siti.rahmawati@uim.ac.id"
        },
        {
            name: "Budi Santoso, S.Kom., M.Kom.",
            role: language === 'id' ? "Kabid. Penelitian" : "Head of Research",
            image: "https://ui-avatars.com/api/?name=Budi+Santoso&background=F49D37&color=fff&size=200",
            email: "budi.santoso@uim.ac.id"
        },
        {
            name: "Dewi Lestari, S.Pd., M.Pd.",
            role: language === 'id' ? "Kabid. Pengabdian" : "Head of Com. Service",
            image: "https://ui-avatars.com/api/?name=Dewi+Lestari&background=4CAF50&color=fff&size=200",
            email: "dewi.lestari@uim.ac.id"
        },
        {
            name: "Rahmat Hidayat, S.T., M.T.",
            role: language === 'id' ? "Staff Administrasi" : "Admin Staff",
            image: "https://ui-avatars.com/api/?name=Rahmat+Hidayat&background=673AB7&color=fff&size=200",
            email: "rahmat.hidayat@uim.ac.id"
        },
        {
            name: "Nurul Aini, S.E.",
            role: language === 'id' ? "Staff Keuangan" : "Finance Staff",
            image: "https://ui-avatars.com/api/?name=Nurul+Aini&background=E91E63&color=fff&size=200",
            email: "nurul.aini@uim.ac.id"
        }
    ];

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
                        {language === 'id' ? 'Anggota LPPM' : 'LPPM Members'}
                    </h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto' }}>
                        {language === 'id'
                            ? "Tim yang berdedikasi untuk memajukan penelitian dan pengabdian masyarakat di Universitas Islam Madura."
                            : "A dedicated team to advance research and community service at the Islamic University of Madura."}
                    </p>
                </motion.div>
            </div>

            {/* TEAM GRID */}
            <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '30px'
                }}>
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                backgroundColor: 'white',
                                borderRadius: '15px',
                                boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
                                overflow: 'hidden',
                                textAlign: 'center',
                                transition: 'transform 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            {/* Image Container */}
                            <div style={{
                                height: '200px',
                                backgroundColor: '#e8f5e9',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '20px'
                            }}>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    style={{
                                        width: '120px',
                                        height: '120px',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        border: '4px solid white',
                                        boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                                    }}
                                />
                            </div>

                            {/* Content */}
                            <div style={{ padding: '20px' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>
                                    {member.name}
                                </h3>
                                <div style={{
                                    display: 'inline-block',
                                    backgroundColor: '#f1f8e9',
                                    color: '#2e7d32',
                                    padding: '5px 12px',
                                    borderRadius: '20px',
                                    fontSize: '0.85rem',
                                    fontWeight: '600',
                                    marginBottom: '15px'
                                }}>
                                    {member.role}
                                </div>
                                <div style={{ fontSize: '0.9rem', color: '#777' }}>
                                    <i className="fas fa-envelope" style={{ marginRight: '8px', color: '#f9a825' }}></i>
                                    {member.email}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Anggota;
