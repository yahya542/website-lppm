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
  const [allNews, setAllNews] = useState([]) // State for bottom grid
  const [loading, setLoading] = useState(true)
  const [visibleNewsCount, setVisibleNewsCount] = useState(6) // Start with 6 items for grid
  const sliderRef = useRef(null); // Ref for auto-scroll

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const [latestRes, allRes] = await Promise.all([
          api.get("/api/news/latest"),
          api.get("/api/news")
        ]);

        if (latestRes.data) {
          setLatestNews(latestRes.data)
        }
        if (allRes.data) {
          // Check if response is paginated (Laravel default) or array
          const newsData = Array.isArray(allRes.data) ? allRes.data : (allRes.data.data || []);
          setAllNews(newsData)
        }
      } catch (err) {
        console.error("Error fetching news", err)
      } finally {
        setLoading(false)
      }
    };

    fetchNewsData()
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

      {/* 3. NEWS SECTION (Slider) - Light Gray Background */}
      <section style={{ backgroundColor: '#f8f9fa', padding: '50px 0' }}>
        <div className="container" style={{ padding: '0 20px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ borderBottom: '2px solid #fec107', paddingBottom: '10px', marginBottom: '20px', width: 'fit-content' }}>
            <h3 style={{ margin: 0, color: '#fec107', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>{t.home_news_title}</h3>
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
            {/* Same content as before, just ensuring wrapper has padding */}
            {displayNews.map((item, index) => (
              <div key={index} style={{
                minWidth: '280px',
                maxWidth: '280px',
                boxShadow: '0 10px 20px rgba(0,0,0,0.05)', // Slightly softer shadow
                borderRadius: '12px', // More rounded
                overflow: 'hidden',
                backgroundColor: 'white',
                display: 'flex',
                flexDirection: 'column',
                flexShrink: 0,
                border: '1px solid rgba(0,0,0,0.05)'
              }}>
                <div style={{ height: '160px', backgroundColor: '#e0e0e0' }}>
                  {item.featured_image ? (
                    <img src={item.featured_image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => e.target.src = "/images/poster/1.png"} />
                  ) : (
                    <img src="/images/poster/1.png" alt="News" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  )}
                </div>
                <div style={{ padding: '15px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '11px', color: '#888', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <i className="far fa-calendar-alt"></i>
                    {item.created_at ? new Date(item.created_at).toLocaleDateString(language === 'id' ? 'id-ID' : 'en-US', { day: 'numeric', month: 'short', year: 'numeric' }) : (item.date || 'Today')}
                  </div>
                  <h4 style={{ fontSize: '15px', fontWeight: 'bold', lineHeight: '1.4', marginBottom: '10px', color: '#333', flexGrow: 1 }}>
                    {item.title ? (item.title.length > 50 ? item.title.substring(0, 50) + '...' : item.title) : "Judul Berita"}
                  </h4>
                  <a href={`/news/${item.id}`} style={{ fontSize: '13px', color: '#fec107', fontWeight: 'bold', textDecoration: 'none', alignSelf: 'flex-start' }}>{t.read_more} →</a>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination dots simulation */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '20px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#fec107', cursor: 'pointer' }}></span>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ddd', cursor: 'pointer' }}></span>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ddd', cursor: 'pointer' }}></span>
          </div>
        </div>
      </section>

      {/* 4. PERFORMANCE ACHIEVEMENTS - Light Green Tint */}
      <section style={{ padding: '60px 0', backgroundColor: '#f1f8e9' }}> {/* Material Green 50 */}
        <div className="container" style={{ padding: '0 20px', maxWidth: '1200px', margin: '0 auto' }}>
          <SectionTitle title={t.home_performance_title} />
          <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <AccordionItem title="CAPAIAN KINERJA LPPM 2023" content="Detail capaian kinerja tahun 2023..." />
            <AccordionItem title="CAPAIAN KINERJA LPPM 2024" content="Detail capaian kinerja tahun 2024..." />
            <AccordionItem title="CAPAIAN KINERJA LPPM 2025" content="Detail capaian kinerja tahun 2025..." />
            <div style={{ textAlign: 'right', fontSize: '12px', color: '#666', marginTop: '10px' }}>Last Update: 12/01/2026</div>
          </div>
        </div>
      </section>

      {/* 5. ACHIEVEMENTS - White Background */}
      <section style={{ padding: '60px 0', backgroundColor: 'white' }}>
        <div className="container" style={{ padding: '0 20px', maxWidth: '1200px', margin: '0 auto' }}>
          <SectionTitle title={t.home_achievements_title} />
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <AccordionItem title="LUARAN PENELITIAN & PENGABDIAN" content="Daftar luaran..." />
            <AccordionItem title="KI DAN PATEN" content="Daftar HKI dan Paten..." />
          </div>
        </div>
      </section>

      {/* 6. INFORMATION BANNER - Dark Green (Already good, just slight padding adjust) */}
      <section style={{ backgroundColor: '#004d26', padding: '80px 20px', textAlign: 'center', color: 'white', position: 'relative', overflow: 'hidden' }}>
        {/* Abstract pattern overlay could go here */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 2 }}>
          <div style={{ width: '100px', height: '100px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '25px', boxShadow: '0 0 20px rgba(255,255,255,0.2)' }}>
            <img src="/images/icons/uim.png" alt="Logo" style={{ width: '60px' }} />
          </div>
          <h2 style={{ fontSize: '3rem', fontWeight: 'bold', letterSpacing: '3px', margin: 0, textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>SIMLITABMAS</h2>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '1px', margin: '10px 0 0', opacity: 0.8 }}>{t.home_simlitabmas_subtitle}</h2>
        </div>
      </section>

      {/* 6.5. AGENDA KEGIATAN - Light Background */}
      <section style={{ padding: '80px 0', backgroundColor: '#fafafa' }}>
        <div className="container" style={{ padding: '0 20px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ color: '#004d26', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1.8rem', fontWeight: 'bold' }}>Agenda Kegiatan Terdekat</h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: '#fec107', margin: '15px auto', borderRadius: '2px' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {/* Agenda Item 1 */}
            <div style={{ backgroundColor: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', display: 'flex', transition: 'transform 0.3s' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ backgroundColor: '#004d26', width: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', padding: '15px' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>20</span>
                <span style={{ textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>Jan</span>
              </div>
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>Seminar Nasional Pendidikan</h3>
                <div style={{ fontSize: '0.9rem', color: '#666', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                  <i className="far fa-clock"></i> 08:00 - 12:00 WIB
                </div>
                <div style={{ fontSize: '0.9rem', color: '#666', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fas fa-map-marker-alt"></i> Aula UIM Lantai 3
                </div>
              </div>
            </div>

            {/* Agenda Item 2 */}
            <div style={{ backgroundColor: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', display: 'flex', transition: 'transform 0.3s' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ backgroundColor: '#ffa000', width: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', padding: '15px' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>15</span>
                <span style={{ textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>Feb</span>
              </div>
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>Batas Upload Proposal</h3>
                <div style={{ fontSize: '0.9rem', color: '#666', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                  <i className="far fa-clock"></i> 23:59 WIB
                </div>
                <div style={{ fontSize: '0.9rem', color: '#666', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fas fa-globe"></i> Portal SIMLITABMAS
                </div>
              </div>
            </div>

            {/* Agenda Item 3 */}
            <div style={{ backgroundColor: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', display: 'flex', transition: 'transform 0.3s' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ backgroundColor: '#1565c0', width: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', padding: '15px' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>02</span>
                <span style={{ textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>Mar</span>
              </div>
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>Workshop Metodologi</h3>
                <div style={{ fontSize: '0.9rem', color: '#666', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                  <i className="far fa-clock"></i> 09:00 - 15:00 WIB
                </div>
                <div style={{ fontSize: '0.9rem', color: '#666', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fas fa-video"></i> Zoom Meeting
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. VIDEO SECTION - White Background */}
      <section style={{ padding: '80px 0', backgroundColor: 'white' }}>
        <div className="container" style={{ padding: '0 20px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ color: '#333', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1.5rem' }}>Video Terbaru</h2>
            <div style={{ width: '60px', height: '3px', backgroundColor: '#fec107', margin: '15px auto' }}></div>
          </div>
          <div style={{ border: 'none', borderRadius: '20px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
            <div style={{ width: '100%', height: '500px', backgroundColor: '#000', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', border: '2px solid white', backdropFilter: 'blur(5px)' }}>
                <span style={{ color: 'white', fontSize: '30px', marginLeft: '5px' }}>▶</span>
              </div>
              <div style={{ position: 'absolute', bottom: '30px', left: '30px', color: 'white' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <img src="/images/icons/uim.png" alt="Channel" style={{ width: '50px', height: '50px', borderRadius: '50%', border: '2px solid white' }} />
                  <div>
                    <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{t.home_video_channel}</div>
                    <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Official Channel</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. COUNTER - Soft Gradient Background */}
      <section style={{ padding: '60px 0', background: 'linear-gradient(180deg, #ffffff 0%, #f4f4f4 100%)' }}>
        <div className="container" style={{ padding: '0 20px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto', backgroundColor: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '20px', color: '#555', letterSpacing: '1px' }}>{t.home_visitors_title}</h3>
            <div style={{ fontSize: '3.5rem', fontWeight: 'bold', letterSpacing: '10px', fontFamily: "'Courier New', monospace", color: '#2e7d32', marginBottom: '10px', textShadow: '0 2px 0px rgba(0,0,0,0.1)' }}>1 0 2 5 9 2</div>
            <div style={{ fontSize: '12px', color: '#999', marginBottom: '40px' }}>{t.home_visitors_since}</div>

            <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '30px' }}>
              <h4 style={{ fontSize: '12px', fontWeight: 'bold', color: '#888', marginBottom: '20px', textTransform: 'uppercase' }}>{t.home_visitors_country_title}</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '20px' }}>
                {/* Indonesia */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
                  <img src="https://flagcdn.com/w40/id.png" alt="ID" style={{ width: '30px', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} />
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontWeight: 'bold', color: '#333' }}>85%</div>
                    <div style={{ fontSize: '10px', color: '#999' }}>Indonesia</div>
                  </div>
                </div>
                {/* Malaysia */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
                  <img src="https://flagcdn.com/w40/my.png" alt="MY" style={{ width: '30px', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} />
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontWeight: 'bold', color: '#333' }}>5%</div>
                    <div style={{ fontSize: '10px', color: '#999' }}>Malaysia</div>
                  </div>
                </div>
                {/* USA */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
                  <img src="https://flagcdn.com/w40/us.png" alt="US" style={{ width: '30px', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} />
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontWeight: 'bold', color: '#333' }}>3%</div>
                    <div style={{ fontSize: '10px', color: '#999' }}>USA</div>
                  </div>
                </div>
                {/* Singapore */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
                  <img src="https://flagcdn.com/w40/sg.png" alt="SG" style={{ width: '30px', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} />
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontWeight: 'bold', color: '#333' }}>2%</div>
                    <div style={{ fontSize: '10px', color: '#999' }}>Singapore</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. BOTTOM NEWS GRID - Pale Background for separation */}
      <section style={{ padding: '60px 0', backgroundColor: '#fafafa' }}>
        <div className="container" style={{ padding: '0 20px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#333' }}>Berita Lainnya</h2>
            <div style={{ width: '50px', height: '3px', backgroundColor: '#fec107', margin: '15px auto' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px', marginBottom: '50px' }}>
            {/* 
                     Using latestNews or Duplicating it to ensure we have content to show for the UI Demo 
                     if existing data is scarce (usually user environments vary). 
                     We try to use real data first.
                  */}
            {(allNews.length > 0 ? allNews : [{}, {}, {}, {}, {}, {}]).slice(0, visibleNewsCount).map((item, index) => (
              <div key={index} style={{
                border: 'none', // Remove border for cleaner look
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
                    backgroundColor: item.category?.name ? '#004d26' : '#f9a825', // Use Dark Green for Category if exists
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
                    minHeight: '50px' // For alignment
                  }}>
                    {item.title || "Judul Berita Loading..."}
                  </h3>

                  {/* Meta Info */}
                  <div style={{ display: 'flex', alignItems: 'center', fontSize: '12px', color: '#999', marginBottom: '20px', gap: '15px' }}>
                    <span><i className="far fa-clock" style={{ marginRight: '5px' }}></i> {item.created_at ? new Date(item.created_at).toLocaleDateString(language === 'id' ? 'id-ID' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' }) : "Date"}</span>
                  </div>
                </div>

                {/* Image */}
                <div style={{ height: '220px', width: '100%', backgroundColor: '#eee', position: 'relative' }}>
                  {item.featured_image ? (
                    <img src={item.featured_image} alt="News" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => e.target.src = "/images/poster/1.png"} />
                  ) : (
                    <img src="/images/poster/1.png" alt="News" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  )}
                </div>

                {/* Description (Footer of card in this design) */}
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
                    {t.read_more}
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
                backgroundColor: '#004d26',
                color: 'white',
                border: 'none',
                padding: '15px 50px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 5px 15px rgba(0,77,38,0.2)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#006633'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#004d26'}
            >
              {t.home_load_more}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
