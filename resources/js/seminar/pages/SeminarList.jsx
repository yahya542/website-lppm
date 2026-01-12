import React from 'react';
import { motion } from 'framer-motion';

const SeminarList = () => {
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
                        ACADEMIC EVENTS
                    </div>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '15px', letterSpacing: '1px' }}>SEMINAR</h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '750px', margin: '0 auto', lineHeight: '1.6' }}>
                        Wadah pertukaran gagasan dan diseminasi hasil riset untuk kemajuan ilmu pengetahuan.
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
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '15px', color: '#333' }}>Agenda Akademik</h2>
                        <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8', maxWidth: '800px' }}>
                            Lembaga Penelitian dan Pengabdian Masyarakat (LPPM) UIM menyelenggarakan berbagai kegiatan
                            akademik seperti seminar, workshop, konferensi, dan lokakarya yang bertujuan untuk
                            memperluas wawasan, meningkatkan kapasitas sivitas akademika, serta memfasilitasi pertukaran
                            pengetahuan.
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
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>Jenis Kegiatan</h2>
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
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>Seminar & Konferensi</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}><i className="fas fa-check" style={{ marginRight: '10px', fontSize: '12px', opacity: 0.7 }}></i> Seminar Nasional</li>
                                <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}><i className="fas fa-check" style={{ marginRight: '10px', fontSize: '12px', opacity: 0.7 }}></i> Konferensi Internasional</li>
                                <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}><i className="fas fa-check" style={{ marginRight: '10px', fontSize: '12px', opacity: 0.7 }}></i> Seminar Mahasiswa</li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><i className="fas fa-check" style={{ marginRight: '10px', fontSize: '12px', opacity: 0.7 }}></i> Diseminasi Hasil Riset</li>
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
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>Workshop & Pelatihan</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}><i className="fas fa-check" style={{ marginRight: '10px', fontSize: '12px', opacity: 0.7 }}></i> Metodologi Penelitian</li>
                                <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}><i className="fas fa-check" style={{ marginRight: '10px', fontSize: '12px', opacity: 0.7 }}></i> Penulisan Ilmiah</li>
                                <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}><i className="fas fa-check" style={{ marginRight: '10px', fontSize: '12px', opacity: 0.7 }}></i> Teknologi Terapan</li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><i className="fas fa-check" style={{ marginRight: '10px', fontSize: '12px', opacity: 0.7 }}></i> Manajemen Proyek</li>
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
                            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>Jadwal Kegiatan</h2>
                            <p style={{ color: '#666' }}>Agenda kegiatan akademik mendatang</p>
                        </div>
                        <a href="#" style={{ color: 'green', fontWeight: 'bold', textDecoration: 'none' }}>Lihat Kalender <i className="fas fa-arrow-right"></i></a>
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
                                location: "Ruang Aula",
                                date: "28",
                                month: "Des",
                                year: "2025",
                                desc: "Pembahasan mengenai tren terbaru dalam penelitian ilmu pengetahuan dan teknologi...",
                                type: "Seminar",
                                color: "#0277bd"
                            },
                            {
                                title: "Workshop Inovasi",
                                location: "Lab Teknologi",
                                date: "27",
                                month: "Des",
                                year: "2025",
                                desc: "Praktik langsung dalam menciptakan inovasi berbasis teknologi informasi...",
                                type: "Workshop",
                                color: "#ffa000"
                            },
                            {
                                title: "Fokus Group Discussion",
                                location: "Ruang Rapat",
                                date: "26",
                                month: "Des",
                                year: "2025",
                                desc: "Fasilitasi diskusi kelompok terfokus untuk membahas isu-isu strategis dalam pendidikan...",
                                type: "FGD",
                                color: "#4caf50"
                            },
                            {
                                title: "Seminar Internasional",
                                location: "Gedung Serbaguna",
                                date: "22",
                                month: "Des",
                                year: "2025",
                                desc: "Pertemuan internasional untuk membahas kolaborasi riset lintas negara...",
                                type: "Konferensi",
                                color: "#7b1fa2"
                            },
                            {
                                title: "Workshop Penulisan Ilmiah",
                                location: "Ruang Seminar",
                                date: "18",
                                month: "Des",
                                year: "2025",
                                desc: "Pelatihan intensif tentang penulisan artikel ilmiah untuk publikasi internasional...",
                                type: "Pelatihan",
                                color: "#f57c00"
                            },
                            {
                                title: "Sosialisasi HKI",
                                location: "Aula Fakultas",
                                date: "15",
                                month: "Des",
                                year: "2025",
                                desc: "Penyuluhan tentang pentingnya Hak Kekayaan Intelektual bagi peneliti dan inovator...",
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

                                        <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px', lineHeight: '1.3' }}>{item.title}</h3>

                                        <div style={{ fontSize: '13px', color: '#555', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                            <i className="fas fa-map-marker-alt" style={{ marginRight: '8px', color: '#ccc' }}></i>
                                            {item.location}
                                        </div>

                                        <p style={{ color: '#777', fontSize: '13px', lineHeight: '1.6', marginBottom: '15px' }}>
                                            {item.desc}
                                        </p>

                                        <a href="#" style={{ display: 'inline-flex', alignItems: 'center', color: item.color, fontWeight: 'bold', fontSize: '12px', textDecoration: 'none' }}>
                                            DAFTAR SEKARANG <i className="fas fa-arrow-right" style={{ marginLeft: '5px' }}></i>
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