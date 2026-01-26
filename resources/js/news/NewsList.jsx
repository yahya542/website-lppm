import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import api from '../axios';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../contexts/translations';
import { ImageOff } from 'lucide-react';

// Loading Skeleton Component
const NewsCardSkeleton = ({ type = "grid" }) => {
  const isSlider = type === "slider";

  if (isSlider) {
    return (
      <div style={{
        minWidth: '280px',
        maxWidth: '280px',
        boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
        borderRadius: '12px',
        overflow: 'hidden',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
        border: '1px solid rgba(0,0,0,0.05)'
      }}>
        {/* Image Top */}
        <motion.div
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ height: '160px', backgroundColor: '#e0e0e0', width: '100%' }}
        />
        <div style={{ padding: '15px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Date */}
          <motion.div style={{ width: '40%', height: '10px', backgroundColor: '#e0e0e0', marginBottom: '8px', borderRadius: '4px' }} animate={{ opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} />
          {/* Title */}
          <motion.div style={{ width: '90%', height: '14px', backgroundColor: '#e0e0e0', marginBottom: '5px', borderRadius: '4px' }} animate={{ opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.1 }} />
          <motion.div style={{ width: '60%', height: '14px', backgroundColor: '#e0e0e0', marginBottom: '10px', borderRadius: '4px' }} animate={{ opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.1 }} />
          {/* Link */}
          <motion.div style={{ width: '30%', height: '12px', backgroundColor: '#e0e0e0', marginTop: 'auto', borderRadius: '4px' }} animate={{ opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }} />
        </div>
      </div>
    );
  }

  // Grid Layout
  return (
    <div style={{
      borderRadius: '16px',
      overflow: 'hidden',
      backgroundColor: 'white',
      boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}>
      {/* Top: Category, Title, Meta */}
      <div style={{ padding: '25px 25px 10px' }}>
        {/* Category */}
        <motion.div style={{ width: '80px', height: '24px', backgroundColor: '#e0e0e0', borderRadius: '20px', marginBottom: '15px' }} animate={{ opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} />
        {/* Title */}
        <motion.div style={{ width: '100%', height: '20px', backgroundColor: '#e0e0e0', borderRadius: '4px', marginBottom: '10px' }} animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.1 }} />
        <motion.div style={{ width: '70%', height: '20px', backgroundColor: '#e0e0e0', borderRadius: '4px', marginBottom: '15px' }} animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.1 }} />
        {/* Meta */}
        <motion.div style={{ width: '120px', height: '12px', backgroundColor: '#e0e0e0', borderRadius: '4px', marginBottom: '20px' }} animate={{ opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }} />
      </div>

      {/* Middle: Image */}
      <motion.div
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        style={{ height: '220px', width: '100%', backgroundColor: '#e0e0e0' }}
      />

      {/* Bottom: Description */}
      <div style={{ padding: '25px' }}>
        <motion.div style={{ width: '100%', height: '14px', backgroundColor: '#e0e0e0', borderRadius: '4px', marginBottom: '8px' }} animate={{ opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }} />
        <motion.div style={{ width: '80%', height: '14px', backgroundColor: '#e0e0e0', borderRadius: '4px', marginBottom: '20px' }} animate={{ opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }} />
        <motion.div style={{ width: '40%', height: '14px', backgroundColor: '#e0e0e0', borderRadius: '4px' }} animate={{ opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} />
      </div>
    </div>
  );
};

const NewsCard = ({ item, language, t }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div style={{
      border: 'none',
      borderRadius: '16px',
      overflow: 'hidden',
      backgroundColor: 'white',
      boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.3s ease',
      cursor: 'pointer'
    }}
      onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
      onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div style={{ padding: '25px 25px 10px' }}>
        {/* Category Tag */}
        <span style={{
          display: 'inline-block',
          backgroundColor: item.category?.name ? '#004d26' : '#f9a825',
          color: 'white',
          padding: '6px 14px',
          borderRadius: '20px',
          fontSize: '11px',
          fontWeight: 'bold',
          marginBottom: '15px',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          {item.category?.name || "BERITA LPPM"}
        </span>

        {/* Title */}
        <h3 style={{
          fontSize: '18px',
          fontWeight: 'bold',
          lineHeight: '1.4',
          color: '#222',
          marginBottom: '15px',
          minHeight: '50px'
        }}>
          {item.title || "Judul Berita"}
        </h3>

        {/* Meta Info */}
        <div style={{ display: 'flex', alignItems: 'center', fontSize: '12px', color: '#999', marginBottom: '20px', gap: '15px' }}>
          <span><i className="far fa-clock" style={{ marginRight: '5px' }}></i> {item.created_at ? new Date(item.created_at).toLocaleDateString(language === 'id' ? 'id-ID' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' }) : "Date"}</span>
        </div>
      </div>

      {/* Image */}
      <div style={{ height: '220px', width: '100%', backgroundColor: '#f5f5f5', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {!imageError && item.featured_image ? (
          <img
            src={item.featured_image}
            alt={item.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            onError={() => setImageError(true)}
          />
        ) : (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#999'
          }}>
            <ImageOff size={48} style={{ marginBottom: '8px', opacity: 0.5 }} />
            <span style={{ fontSize: '12px', fontWeight: 'bold' }}>
              {language === 'id' ? 'Gambar Tidak Tersedia' : 'Image Not Available'}
            </span>
          </div>
        )}
      </div>

      {/* Description */}
      <div style={{ padding: '25px' }}>
        <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#555', marginBottom: '20px' }}>
          {item.content ? (
            item.content.length > 100 ? item.content.substring(0, 100) + '...' : item.content
          ) : "Deskripsi berita akan muncul di sini..."}
        </p>

        {/* Read More Button */}
        <a href={`/news/${item.id}`} style={{
          display: 'inline-block',
          color: '#004d26',
          textDecoration: 'none',
          fontSize: '14px',
          fontWeight: 'bold',
          borderBottom: '2px solid #004d26',
          paddingBottom: '2px'
        }}>
          {t.read_more || "Baca Selengkapnya"}
        </a>
      </div>
    </div>
  );
};

const NewsList = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  useEffect(() => {
    const fetchNews = async (page = 1) => {
      try {
        const response = await api.get(`/api/news?page=${page}`);
        const newsData = Array.isArray(response.data) ? response.data : (response.data.data || []);
        const pagination = response.data;

        if (page === 1) {
          setNews(newsData);
        } else {
          setNews(prev => [...prev, ...newsData]);
        }

        setHasNextPage(pagination.next_page_url !== null);
        setCurrentPage(page);
      } catch (err) {
        console.error('Error fetching news:', err);
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    };

    fetchNews();
  }, []);

  const handleLoadMore = async () => {
    if (!hasNextPage || loadingMore) return;

    setLoadingMore(true);
    try {
      const response = await api.get(`/api/news?page=${currentPage + 1}`);
      const newsData = Array.isArray(response.data) ? response.data : (response.data.data || []);
      const pagination = response.data;

      setNews(prev => [...prev, ...newsData]);
      setHasNextPage(pagination.next_page_url !== null);
      setCurrentPage(prev => prev + 1);
    } catch (err) {
      console.error('Error loading more news:', err);
    } finally {
      setLoadingMore(false);
    }
  };

  return (
    <div className="main-content" style={{ backgroundColor: '#f9f9f9', paddingBottom: '60px' }}>

      {/* HERO SECTION */}
      <div style={{
        background: 'linear-gradient(135deg, #004d26 0%, #008000 100%)',
        padding: '80px 20px',
        color: 'white',
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.2)', padding: '5px 15px', borderRadius: '20px', marginBottom: '15px', fontSize: '14px', fontWeight: 'bold' }}>
            Berita & Pengumuman
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '15px', letterSpacing: '1px' }}>
            Berita Terbaru
          </h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
            Dapatkan informasi terkini tentang kegiatan, pengumuman, dan berita dari LPPM Universitas Islam Madura.
          </p>
        </div>
      </div>

      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>

        {/* NEWS GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '30px', marginBottom: '50px' }}>
          {loading ? (
            Array(9).fill(0).map((_, index) => (
              <NewsCardSkeleton key={index} type="grid" />
            ))
          ) : (
            news.map((item, index) => (
              <NewsCard key={item.id || index} item={item} language={language} t={t} />
            ))
          )}
          {loadingMore && (
            Array(9).fill(0).map((_, index) => (
              <NewsCardSkeleton key={`loading-${index}`} type="grid" />
            ))
          )}
        </div>

        {/* Load More Button */}
        {!loading && !loadingMore && hasNextPage && (
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={handleLoadMore}
              style={{
                backgroundColor: '#004d26',
                color: 'white',
                border: 'none',
                padding: '12px 30px',
                borderRadius: '25px',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#006b33'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#004d26'}
            >
              Muat Lebih Banyak
            </button>
          </div>
        )}
        {loadingMore && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <div style={{ display: 'inline-block', padding: '12px 30px', borderRadius: '25px', backgroundColor: '#f0f0f0', color: '#666' }}>
              Memuat...
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default NewsList;