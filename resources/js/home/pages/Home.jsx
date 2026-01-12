import React, { useState, useEffect, useRef } from "react"
import { motion } from "motion/react"
import api from "../../axios"
import Nama from "../components/nama"
import Bidang from "../components/bidang"
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../contexts/translations';

// Simple Accordion Component
const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '4px', marginBottom: '10px', backgroundColor: '#f9f9f9' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          textAlign: 'left',
          padding: '15px 20px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontWeight: 'bold',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: '#555'
        }}
      >
        <span>{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div style={{ padding: '0 20px 20px', color: '#666' }}>
          {content}
        </div>
      )}
    </div>
  );
};

const SectionTitle = ({ title }) => (
  <div style={{ textAlign: 'center', marginBottom: '30px', position: 'relative', marginTop: '40px' }}>
    <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#333' }}>
      {/* Simple line decoration */}
      <span style={{ display: 'inline-block', borderTop: '2px solid #999', width: '50px', verticalAlign: 'middle', marginRight: '15px' }}></span>
      {title}
      <span style={{ display: 'inline-block', borderTop: '2px solid #999', width: '50px', verticalAlign: 'middle', marginLeft: '15px' }}></span>
    </h2>
  </div>
);

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [latestNews, setLatestNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [visibleNewsCount, setVisibleNewsCount] = useState(3) // Start with 3 items
  const sliderRef = useRef(null); // Ref for auto-scroll

  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        const response = await api.get("/api/news/latest")
        if (response.data) {
          setLatestNews(response.data)
        }
      } catch (err) {
        console.error("Error fetching news", err)
      } finally {
        setLoading(false)
      }
    };

    fetchLatestNews()
  }, [])

  // Prepare data for infinite slider (duplicate the array)
  const baseNews = latestNews.length > 0 ? latestNews : [
    { title: "Judul Berita 1 Yang Panjang", date: "12 Jan 2026", image: null },
    { title: "Kegiatan Seminar Nasional 2026", date: "11 Jan 2026", image: null },
    { title: "Pengabdian Masyarakat di Desa A", date: "10 Jan 2026", image: null },
    { title: "Kunjungan Industri Mahasiswa", date: "09 Jan 2026", image: null },
    { title: "Workshop Penulisan Karya Ilmiah", date: "08 Jan 2026", image: null }
  ];

  // Create a looped array for seamless scrolling
  const displayNews = [...baseNews, ...baseNews];

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const slider = sliderRef.current;
        const cardWidth = 300; // 280px width + 20px gap
        const maxScroll = slider.scrollWidth / 2; // Halfway point (end of first set)

        // If we have scrolled past or to the end of the first set, snap back INSTANTLY to the start of the first set (which looks identical)
        // We do this check BEFORE scrolling to ensure we always have room to scroll right.
        // Note: We use a threshold relative to the content. 
        // If current scroll is near the "duplicate" part, reset to the "original" part.
        if (slider.scrollLeft >= maxScroll - 5) { // -5 for tolerance
          slider.scrollLeft = slider.scrollLeft - maxScroll;
        }

        // Now scroll forward smoothly
        slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [baseNews]); // Re-create interval if data changes

  const handleLoadMore = () => {
    setVisibleNewsCount(prev => prev + 3);
  }

  return (
    <div>
      {/* 1. HERO / NAMA */}
      <Nama />

      {/* 2. BIDANG CARDS */}
      <Bidang />

      {/* 3. NEWS SECTION (Slider) */}
      <section className="container" style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ borderBottom: '2px solid #fec107', paddingBottom: '10px', marginBottom: '20px', width: 'fit-content' }}>
          <h3 style={{ margin: 0, color: '#fec107', fontWeight: 'bold' }}>{t.home_news_title}</h3>
        </div>

        {/* Slider Container */}
        <div
          ref={sliderRef}
          style={{
            display: 'flex',
            gap: '20px',
            overflowX: 'auto',
            paddingBottom: '20px', /* Space for scrollbar/shadow */
            scrollBehavior: 'smooth', // Keep smooth for the programmed scrollBy
            scrollbarWidth: 'none', /* Firefox */
            msOverflowStyle: 'none' /* IE */
          }} className="hide-scrollbar">
          <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>

          {displayNews.map((item, index) => (
            <div key={index} style={{
              minWidth: '280px',
              maxWidth: '280px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              borderRadius: '10px',
              overflow: 'hidden',
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'column',
              flexShrink: 0 // Prevent shrinking
            }}>
              <div style={{ height: '160px', backgroundColor: '#e0e0e0' }}>
                {item.image ? (
                  <img src={`/storage/${item.image}`} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <img src="/images/poster/1.png" alt="News" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                )}
              </div>
              <div style={{ padding: '15px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '11px', color: '#888', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <i className="far fa-calendar-alt"></i>
                  {item.created_at ? new Date(item.created_at).toLocaleDateString() : (item.date || 'Today')}
                </div>
                <h4 style={{ fontSize: '15px', fontWeight: 'bold', lineHeight: '1.4', marginBottom: '10px', color: '#333', flexGrow: 1 }}>{item.title}</h4>
                <a href="#" style={{ fontSize: '13px', color: '#fec107', fontWeight: 'bold', textDecoration: 'none', alignSelf: 'flex-start' }}>{t.read_more} →</a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots simulation */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '10px' }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#fec107', cursor: 'pointer' }}></span>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ddd', cursor: 'pointer' }}></span>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ddd', cursor: 'pointer' }}></span>
        </div>
      </section>

      {/* 4. PERFORMANCE ACHIEVEMENTS */}
      <section className="container" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <SectionTitle title={t.home_performance_title} />
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <AccordionItem title="CAPAIAN KINERJA LPPM 2023" content="Detail capaian kinerja tahun 2023..." />
          <AccordionItem title="CAPAIAN KINERJA LPPM 2024" content="Detail capaian kinerja tahun 2024..." />
          <AccordionItem title="CAPAIAN KINERJA LPPM 2025" content="Detail capaian kinerja tahun 2025..." />
          <div style={{ textAlign: 'right', fontSize: '12px', color: '#666', marginTop: '10px' }}>Last Update: 12/01/2026</div>
        </div>
      </section>

      {/* 5. ACHIEVEMENTS */}
      <section className="container" style={{ padding: '20px 20px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <SectionTitle title={t.home_achievements_title} />
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <AccordionItem title="LUARAN PENELITIAN & PENGABDIAN" content="Daftar luaran..." />
          <AccordionItem title="KI DAN PATEN" content="Daftar HKI dan Paten..." />
        </div>
      </section>

      {/* 6. INFORMATION BANNER */}
      <section style={{ backgroundColor: '#004d26', padding: '60px 20px', textAlign: 'center', color: 'white' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: '80px', height: '80px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
            <img src="/images/icons/uim.png" alt="Logo" style={{ width: '50px' }} />
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', letterSpacing: '2px', margin: 0 }}>SIMLITABMAS</h2>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', letterSpacing: '2px', margin: 0, opacity: 0.7 }}>{t.home_simlitabmas_subtitle}</h2>
        </div>
      </section>

      {/* 7. VIDEO SECTION */}
      <section className="container" style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ border: '1px solid #ddd', borderRadius: '10px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
          {/* This would be an embed. Using image placeholder for now to mimic the layout */}
          <div style={{ width: '100%', height: '400px', backgroundColor: '#000', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'white', fontSize: '60px' }}>▶</span>
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', color: 'white' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src="/images/icons/uim.png" alt="Channel" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid white' }} />
                <span style={{ fontWeight: 'bold' }}>{t.home_video_channel}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. COUNTER */}
      <section style={{ padding: '40px 20px', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
          <h3 style={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '20px', color: '#333' }}>{t.home_visitors_title}</h3>
          <div style={{ fontSize: '3rem', fontWeight: 'bold', letterSpacing: '8px', fontFamily: 'monospace', color: '#2e7d32', marginBottom: '10px' }}>1 0 2 5 9 2</div>
          <div style={{ fontSize: '12px', color: '#999', marginBottom: '30px' }}>{t.home_visitors_since}</div>

          <div style={{ borderTop: '1px solid #eee', paddingTop: '20px' }}>
            <h4 style={{ fontSize: '12px', fontWeight: 'bold', color: '#666', marginBottom: '15px', textTransform: 'uppercase' }}>{t.home_visitors_country_title}</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '15px' }}>
              {/* Indonesia */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#555' }}>
                <img src="https://flagcdn.com/w40/id.png" alt="ID" style={{ width: '25px', borderRadius: '3px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontWeight: 'bold' }}>85%</div>
                  <div style={{ fontSize: '10px', color: '#999' }}>Indonesia</div>
                </div>
              </div>
              {/* Malaysia */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#555' }}>
                <img src="https://flagcdn.com/w40/my.png" alt="MY" style={{ width: '25px', borderRadius: '3px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontWeight: 'bold' }}>5%</div>
                  <div style={{ fontSize: '10px', color: '#999' }}>Malaysia</div>
                </div>
              </div>
              {/* USA */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#555' }}>
                <img src="https://flagcdn.com/w40/us.png" alt="US" style={{ width: '25px', borderRadius: '3px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontWeight: 'bold' }}>3%</div>
                  <div style={{ fontSize: '10px', color: '#999' }}>USA</div>
                </div>
              </div>
              {/* Singapore */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#555' }}>
                <img src="https://flagcdn.com/w40/sg.png" alt="SG" style={{ width: '25px', borderRadius: '3px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontWeight: 'bold' }}>2%</div>
                  <div style={{ fontSize: '10px', color: '#999' }}>Singapore</div>
                </div>
              </div>
              {/* Others */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#555' }}>
                <div style={{ width: '25px', height: '18px', backgroundColor: '#ddd', borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 'bold' }}>...</div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontWeight: 'bold' }}>5%</div>
                  <div style={{ fontSize: '10px', color: '#999' }}>{t.home_others}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. BOTTOM NEWS GRID (New Requested Section) */}
      <section className="container" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px', marginBottom: '40px' }}>
          {/* 
                   Using latestNews or Duplicating it to ensure we have content to show for the UI Demo 
                   if existing data is scarce (usually user environments vary). 
                   We try to use real data first.
                */}
          {(latestNews.length > 0 ? latestNews : [{}, {}, {}, {}, {}, {}]).slice(0, visibleNewsCount).map((item, index) => (
            <div key={index} style={{
              border: '1px solid #eaeaea',
              borderRadius: '12px',
              overflow: 'hidden',
              backgroundColor: 'white',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ padding: '25px 25px 10px' }}>
                {/* Category Tag */}
                <span style={{
                  display: 'inline-block',
                  backgroundColor: '#f9a825', // Orange
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '10px',
                  fontWeight: 'bold',
                  marginBottom: '15px'
                }}>
                  KEGIATAN/EVENT LPPM
                </span>

                {/* Title */}
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  lineHeight: '1.4',
                  color: '#333',
                  marginBottom: '15px',
                  minHeight: '50px' // For alignment
                }}>
                  {item.title || "LPPM UIM Selenggarakan Camp Penulisan Proposal Pengabdian kepada Masyarakat Hibah Kemdiktisaintek 2026"}
                </h3>

                {/* Meta Info */}
                <div style={{ display: 'flex', alignItems: 'center', fontSize: '11px', color: '#999', marginBottom: '20px', gap: '15px' }}>
                  <span><i className="far fa-clock"></i> 4 weeks ago</span>
                  <div style={{ marginLeft: 'auto', display: 'flex', gap: '15px' }}>
                    <span><i className="far fa-comment"></i> 0</span>
                    <span><i className="far fa-eye"></i> 390</span>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div style={{ height: '200px', width: '100%', backgroundColor: '#eee', position: 'relative' }}>
                {item.image ? (
                  <img src={`/storage/${item.image}`} alt="News" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <img src="/images/poster/1.png" alt="News" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                )}
              </div>

              {/* Description (Footer of card in this design) */}
              <div style={{ padding: '20px 25px 25px' }}>
                <p style={{ fontSize: '13px', lineHeight: '1.6', color: '#666', marginBottom: '20px' }}>
                  Lembaga Penelitian dan Pengabdian kepada Masyarakat (LPPM) Universitas Islam Madura (UIM) menyelenggarakan kegiatan Camp Penulisan Proposal...
                </p>

                {/* Read More Button */}
                <a href="#" style={{
                  display: 'inline-block',
                  backgroundColor: '#f9a825',
                  color: 'white',
                  padding: '8px 20px',
                  borderRadius: '20px',
                  textDecoration: 'none',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}>
                  {t.read_more} »
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={handleLoadMore}
            style={{
              backgroundColor: 'white',
              border: '1px solid #ddd',
              padding: '10px 40px',
              borderRadius: '30px',
              fontSize: '12px',
              color: '#666',
              cursor: 'pointer',
              boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
            }}
          >
            {t.home_load_more}
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home
