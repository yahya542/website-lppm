import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const Publikasi = () => {
    const { language } = useLanguage();
    const [activeTab, setActiveTab] = useState('jurnal');

    // Dummy Data for Journals
    const journals = [
        {
            id: 1,
            title: "Jurnal Pertanian Cemara",
            issn: "2460-1234",
            scope: "Pertanian, Agroteknologi",
            link: "#",
            color: "#4caf50"
        },
        {
            id: 2,
            title: "Jurnal Teknik Info (JTI)",
            issn: "2580-5678",
            scope: "Informatika, Sistem Informasi",
            link: "#",
            color: "#2196f3"
        },
        {
            id: 3,
            title: "Jurnal Ekonomi Islam (JEI)",
            issn: "2770-9012",
            scope: "Ekonomi Syariah, Perbankan",
            link: "#",
            color: "#fbc02d"
        },
        {
            id: 4,
            title: "Jurnal Hukum & Keadilan",
            issn: "2990-3456",
            scope: "Hukum, Perundang-undangan",
            link: "#",
            color: "#d32f2f"
        }
    ];

    // Dummy Data for Books
    const books = [
        {
            id: 1,
            title: "Pengantar Agroindustri Modern",
            author: "Dr. Ahmad Sudrajat, M.T.",
            isbn: "978-602-1234-56-7",
            year: "2024",
            cover: "https://source.unsplash.com/random/300x450?book,agriculture"
        },
        {
            id: 2,
            title: "Algoritma & Struktur Data dengan Python",
            author: "Budi Santoso, S.Kom., M.Kom.",
            isbn: "978-602-9876-54-3",
            year: "2023",
            cover: "https://source.unsplash.com/random/300x450?coding,book"
        },
        {
            id: 3,
            title: "Manajemen Pemasaran Syariah",
            author: "Nurul Aini, S.E., M.M.",
            isbn: "978-602-5555-44-3",
            year: "2023",
            cover: "https://source.unsplash.com/random/300x450?marketing"
        },
        {
            id: 4,
            title: "Hukum Tata Negara Indonesia",
            author: "Dr. H. Abdul Malik, M.Ag.",
            isbn: "978-602-1111-22-3",
            year: "2022",
            cover: "https://source.unsplash.com/random/300x450?law,book"
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
                        {language === 'id' ? 'Publikasi Ilmiah' : 'Scientific Publications'}
                    </h1>
                    <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto' }}>
                        {language === 'id'
                            ? "Kumpulan jurnal ilmiah dan buku ajar yang diterbitkan oleh civitas akademika Universitas Islam Madura."
                            : "Collection of scientific journals and textbooks published by the academic community of the Islamic University of Madura."}
                    </p>
                </motion.div>
            </div>

            {/* CONTENT SECTION */}
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>

                {/* TABS */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
                    <div style={{ backgroundColor: 'white', padding: '5px', borderRadius: '30px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                        <button
                            onClick={() => setActiveTab('jurnal')}
                            style={{
                                padding: '10px 30px',
                                borderRadius: '25px',
                                border: 'none',
                                backgroundColor: activeTab === 'jurnal' ? '#004d26' : 'transparent',
                                color: activeTab === 'jurnal' ? 'white' : '#666',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                transition: 'all 0.3s'
                            }}
                        >
                            {language === 'id' ? 'Jurnal Ilmiah' : 'Journals'}
                        </button>
                        <button
                            onClick={() => setActiveTab('buku')}
                            style={{
                                padding: '10px 30px',
                                borderRadius: '25px',
                                border: 'none',
                                backgroundColor: activeTab === 'buku' ? '#004d26' : 'transparent',
                                color: activeTab === 'buku' ? 'white' : '#666',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                transition: 'all 0.3s'
                            }}
                        >
                            {language === 'id' ? 'Buku Ajar' : 'Books'}
                        </button>
                    </div>
                </div>

                {/* JURNAL LIST */}
                {activeTab === 'jurnal' && (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="journal-grid"
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}
                    >
                        {journals.map((journal, index) => (
                            <div key={journal.id} style={{
                                backgroundColor: 'white',
                                borderRadius: '15px',
                                padding: '30px',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                                borderTop: `5px solid ${journal.color}`,
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>
                                    {journal.title}
                                </h3>
                                <div style={{ marginBottom: '20px' }}>
                                    <span style={{ backgroundColor: '#f5f5f5', padding: '5px 10px', borderRadius: '5px', fontSize: '0.8rem', color: '#666' }}>
                                        ISSN: {journal.issn}
                                    </span>
                                </div>
                                <p style={{ color: '#555', marginBottom: '25px', flexGrow: 1 }}>
                                    <strong>Scope:</strong> {journal.scope}
                                </p>
                                <a href={journal.link} style={{
                                    textAlign: 'center',
                                    display: 'block',
                                    padding: '12px',
                                    borderRadius: '8px',
                                    backgroundColor: '#e8f5e9',
                                    color: '#004d26',
                                    fontWeight: 'bold',
                                    textDecoration: 'none',
                                    transition: 'background 0.3s'
                                }}
                                    onMouseOver={(e) => { e.target.style.backgroundColor = '#004d26'; e.target.style.color = 'white'; }}
                                    onMouseOut={(e) => { e.target.style.backgroundColor = '#e8f5e9'; e.target.style.color = '#004d26'; }}
                                >
                                    Kunjungi OJS
                                </a>
                            </div>
                        ))}
                    </motion.div>
                )}

                {/* BUKU LIST */}
                {activeTab === 'buku' && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="book-grid"
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '40px' }}
                    >
                        {books.map((book, index) => (
                            <div key={book.id} style={{
                                backgroundColor: 'white',
                                borderRadius: '15px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                                transition: 'transform 0.3s'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div style={{ height: '350px', overflow: 'hidden', backgroundColor: '#eee' }}>
                                    <img src={book.cover} alt={book.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ padding: '20px' }}>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#333', marginBottom: '5px', lineHeight: '1.3' }}>
                                        {book.title}
                                    </h4>
                                    <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '10px' }}>
                                        {book.author}
                                    </p>
                                    <div style={{ fontSize: '0.8rem', color: '#888', borderTop: '1px solid #eee', paddingTop: '10px', marginTop: '10px' }}>
                                        <div>ISBN: {book.isbn}</div>
                                        <div>Tahun: {book.year}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                )}

            </div>
        </div>
    );
};

export default Publikasi;
