import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const PengmasInternal = () => {
    const { language } = useLanguage();

    // Dummy Data for Internal Community Service
    const services = [
        {
            id: 1,
            title: "Pendampingan Manajemen Keuangan Masjid di Kecamatan Larangan",
            leader: "H. Moh. Zuhdi, S.E., M.M.",
            members: "Badrus Sholeh, S.Pd.I., M.Pd.",
            year: "2025",
            scheme: "Pengabdian Internal Reguler",
            status: "On Going"
        },
        {
            id: 2,
            title: "Edukasi Pencegahan Stunting Melalui Pemanfaatan Pangan Lokal di Desa Kaduara Timur",
            leader: "Siti Fatimah, S.Gz., M.Kes.",
            members: "-",
            year: "2024",
            scheme: "Pengabdian Internal Prioritas",
            status: "Finished"
        },
        {
            id: 3,
            title: "Pelatihan Dasar Komputer untuk Perangkat Desa di Kabupaten Pamekasan",
            leader: "Andi Wijaya, S.Kom., M.T.",
            members: "Rina Wati, S.Kom.",
            year: "2024",
            scheme: "Pengabdian Internal Reguler",
            status: "Finished"
        },
        {
            id: 4,
            title: "Workshop Penyusunan Soal HOTS bagi Guru Madrasah Ibtidaiyah",
            leader: "Dra. Hj. Aminah, M.Pd.",
            members: "Zainuddin, M.Pd.",
            year: "2023",
            scheme: "Pengabdian Berbasis Sekolah Binaan",
            status: "Finished"
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
                        {language === 'id' ? 'Pengabdian Internal UIM' : 'UIM Internal Community Service'}
                    </h1>
                    <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto' }}>
                        {language === 'id'
                            ? "Daftar program pengabdian kepada masyarakat yang didanai oleh Universitas Islam Madura sebagai wujud kepedulian terhadap lingkungan sekitar."
                            : "List of community service programs funded by the Islamic University of Madura as a form of concern for the surrounding environment."}
                    </p>
                </motion.div>
            </div>

            {/* CONTENT SECTION */}
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>

                {/* Stats / Filter Placeholder */}
                <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', flexWrap: 'wrap' }}>
                    <div style={{ backgroundColor: 'white', padding: '15px 25px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', flex: 1, borderLeft: '5px solid #004d26' }}>
                        <div style={{ fontSize: '0.9rem', color: '#666' }}>Total Kegiatan</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>40</div>
                    </div>
                    <div style={{ backgroundColor: 'white', padding: '15px 25px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', flex: 1, borderLeft: '5px solid #f9a825' }}>
                        <div style={{ fontSize: '0.9rem', color: '#666' }}>Tahun 2024</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>15</div>
                    </div>
                    <div style={{ backgroundColor: 'white', padding: '15px 25px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', flex: 1, borderLeft: '5px solid #1976d2' }}>
                        <div style={{ fontSize: '0.9rem', color: '#666' }}>Aktif</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>5</div>
                    </div>
                </div>

                {/* SEARCH BAR */}
                <div style={{ marginBottom: '30px' }}>
                    <input
                        type="text"
                        placeholder={language === 'id' ? "Cari pengabdian internal..." : "Search internal community service..."}
                        style={{
                            width: '100%',
                            padding: '15px',
                            borderRadius: '10px',
                            border: '1px solid #ddd',
                            fontSize: '1rem',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
                            outline: 'none'
                        }}
                    />
                </div>

                {/* SERVICE LIST */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {services.map((item, index) => (
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
                                padding: '30px',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                                display: 'flex',
                                flexDirection: 'column',
                                border: '1px solid #eee',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: '30px',
                                right: '30px',
                                backgroundColor: item.status === 'On Going' ? '#e8f5e9' : '#fafafa',
                                color: item.status === 'On Going' ? '#2e7d32' : '#9e9e9e',
                                padding: '5px 15px',
                                borderRadius: '20px',
                                fontSize: '0.8rem',
                                fontWeight: 'bold',
                                textTransform: 'uppercase'
                            }}>
                                {item.status}
                            </div>

                            <div style={{ marginBottom: '15px' }}>
                                <span style={{
                                    backgroundColor: '#e3f2fd',
                                    color: '#1565c0',
                                    padding: '5px 10px',
                                    borderRadius: '5px',
                                    fontSize: '0.8rem',
                                    fontWeight: '600',
                                    marginRight: '10px'
                                }}>
                                    {item.year}
                                </span>
                                <span style={{
                                    backgroundColor: '#fff3e0',
                                    color: '#ef6c00',
                                    padding: '5px 10px',
                                    borderRadius: '5px',
                                    fontSize: '0.8rem',
                                    fontWeight: '600'
                                }}>
                                    {item.scheme}
                                </span>
                            </div>

                            <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#333', marginBottom: '15px', lineHeight: '1.4', paddingRight: '100px' }}>
                                {item.title}
                            </h3>

                            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '20px', fontSize: '0.95rem', color: '#555' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <i className="fas fa-user-tie" style={{ color: '#004d26', marginRight: '8px' }}></i>
                                    <strong>Ketua:</strong> &nbsp; {item.leader}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <i className="fas fa-users" style={{ color: '#004d26', marginRight: '8px' }}></i>
                                    <strong>Anggota:</strong> &nbsp; {item.members}
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>

                {/* PAGINATION */}
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px', gap: '10px' }}>
                    <button style={{ padding: '10px 15px', border: '1px solid #ddd', borderRadius: '5px', background: 'white', cursor: 'pointer' }}><i className="fas fa-chevron-left"></i></button>
                    <button style={{ padding: '10px 15px', border: 'none', borderRadius: '5px', background: '#004d26', color: 'white', cursor: 'pointer' }}>1</button>
                    <button style={{ padding: '10px 15px', border: '1px solid #ddd', borderRadius: '5px', background: 'white', cursor: 'pointer' }}>2</button>
                    <button style={{ padding: '10px 15px', border: '1px solid #ddd', borderRadius: '5px', background: 'white', cursor: 'pointer' }}><i className="fas fa-chevron-right"></i></button>
                </div>

            </div>
        </div>
    );
};

export default PengmasInternal;
