import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../axios';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../contexts/translations';
import { motion } from 'framer-motion';

const Detail = () => {
    const { slug } = useParams();
    const { language } = useLanguage();
    const t = translations[language];
    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const placeholderImage = "https://placehold.co/600x400/004d26/FFFFFF?text=No+Image";

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setLoading(true);
                const response = await api.get(`/api/news/${slug}`);
                setNews(response.data);
            } catch (err) {
                console.error("Error fetching news detail:", err);
                setError(err.response?.status === 404 ? "Berita tidak ditemukan" : "Terjadi kesalahan saat memuat berita");
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchNews();
        }
    }, [slug]);

    if (loading) {
        return (
            <div className="main-content" style={{ backgroundColor: '#f9f9f9', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (error || !news) {
        return (
            <div className="main-content" style={{ backgroundColor: '#f9f9f9', minHeight: '80vh', padding: '50px 20px', textAlign: 'center' }}>
                <div className="container">
                    <div style={{ fontSize: '4rem', color: '#ccc', marginBottom: '20px' }}>
                        <i className="fas fa-exclamation-circle"></i>
                    </div>
                    <h2 style={{ color: '#555', marginBottom: '20px' }}>{error || "Berita tidak ditemukan"}</h2>
                    <Link to="/" className="btn btn-success" style={{ borderRadius: '30px', padding: '10px 30px' }}>
                        Kembali ke Beranda
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="main-content" style={{ backgroundColor: '#f9f9f9', paddingBottom: '60px' }}>

            {/* HERO / HEADER SECTION */}
            <div style={{
                background: 'linear-gradient(135deg, #004d26 0%, #008000 100%)',
                padding: '80px 20px 100px',
                color: 'white',
                textAlign: 'center',
                position: 'relative',
                marginBottom: '-60px' // Overlap effect
            }}>
                <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Category Badge */}
                        <div style={{
                            display: 'inline-block',
                            backgroundColor: 'rgba(255,255,255,0.2)',
                            padding: '6px 16px',
                            borderRadius: '20px',
                            marginBottom: '20px',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        }}>
                            {news.category?.name || "BERITA"}
                        </div>

                        <h1 style={{
                            fontSize: '2.5rem',
                            fontWeight: 'bold',
                            marginBottom: '20px',
                            lineHeight: '1.3'
                        }}>
                            {news.title}
                        </h1>

                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '20px',
                            fontSize: '0.9rem',
                            opacity: 0.9,
                            flexWrap: 'wrap'
                        }}>
                            <span>
                                <i className="far fa-calendar-alt" style={{ marginRight: '8px' }}></i>
                                {news.created_at ? new Date(news.created_at).toLocaleDateString(language === 'id' ? 'id-ID' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' }) : "-"}
                            </span>
                            <span>
                                <i className="far fa-user" style={{ marginRight: '8px' }}></i>
                                {news.author || "Admin LPPM"}
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* CONTENT SECTION */}
            <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        backgroundColor: 'white',
                        borderRadius: '20px',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                        overflow: 'hidden',
                        marginBottom: '40px'
                    }}
                >
                    {/* Featured Image */}
                    <div style={{ width: '100%', height: '450px', backgroundColor: '#eee', position: 'relative' }}>
                        {news.featured_image ? (
                            <img
                                src={news.featured_image}
                                alt={news.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                onError={(e) => e.target.src = placeholderImage}
                            />
                        ) : (
                            <img
                                src={placeholderImage}
                                alt="No Image"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        )}
                    </div>

                    {/* Article Content */}
                    <div style={{ padding: '50px' }}>
                        <div
                            className="news-content"
                            style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333' }}
                            dangerouslySetInnerHTML={{ __html: news.content ? news.content.replace(/\n/g, '<br />') : '' }}
                        />

                        {/* Share / Tags section could go here */}
                        <div style={{ marginTop: '50px', borderTop: '1px solid #eee', paddingTop: '30px' }}>
                            <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '15px' }}>Bagikan Berita</h4>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button className="btn btn-outline-success btn-sm" style={{ borderRadius: '20px' }}><i className="fab fa-whatsapp"></i> WhatsApp</button>
                                <button className="btn btn-outline-primary btn-sm" style={{ borderRadius: '20px' }}><i className="fab fa-facebook"></i> Facebook</button>
                                <button className="btn btn-outline-info btn-sm" style={{ borderRadius: '20px' }}><i className="fab fa-twitter"></i> Twitter</button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Back Button */}
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <Link to="/" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        color: '#004d26',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        fontSize: '1.1rem',
                        transition: 'transform 0.2s'
                    }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(-5px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                    >
                        <i className="fas fa-arrow-left"></i> Kembali ke Berita Lainnya
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Detail;
