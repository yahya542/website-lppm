import React, { useState, useEffect } from "react"
import { motion } from "motion/react"
import api from "../axios"
import Nama from "./nama"
import Bidang from "./bidang"

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
  const [latestNews, setLatestNews] = useState([])
  const [loading, setLoading] = useState(true)

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

  return (
    <div>
      {/* 1. HERO / NAMA */}
      <Nama />

      {/* 2. BIDANG CARDS */}
      <Bidang />

      {/* 3. NEWS SECTION */}
      <section className="container" style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ borderBottom: '2px solid #fec107', paddingBottom: '10px', marginBottom: '20px', width: 'fit-content' }}>
          <h3 style={{ margin: 0, color: '#fec107', fontWeight: 'bold' }}>NEWS</h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
          {loading ? <p>Loading news...</p> : latestNews.slice(0, 4).map((item, index) => (
            <div key={index} style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)', borderRadius: '8px', overflow: 'hidden', backgroundColor: 'white' }}>
              <div style={{ height: '180px', backgroundColor: '#eee' }}>
                {item.image ? (
                  <img src={`/storage/${item.image}`} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <img src="/images/poster/1.png" alt="News" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                )}
              </div>
              <div style={{ padding: '15px' }}>
                <div style={{ fontSize: '10px', color: '#999', marginBottom: '5px' }}>
                  {new Date(item.created_at || Date.now()).toLocaleDateString()}
                </div>
                <h4 style={{ fontSize: '14px', fontWeight: 'bold', lineHeight: '1.4', marginBottom: '10px' }}>{item.title}</h4>
                <a href="#" style={{ fontSize: '12px', color: 'green', textDecoration: 'none' }}>Read More</a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots simulation */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '5px', marginTop: '20px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#fec107' }}></span>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#eee' }}></span>
        </div>
      </section>

      {/* 4. PERFORMANCE ACHIEVEMENTS */}
      <section className="container" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <SectionTitle title="PERFORMANCE ACHIEVEMENTS" />
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <AccordionItem title="CAPAIAN KINERJA LPPM 2023" content="Detail capaian kinerja tahun 2023..." />
          <AccordionItem title="CAPAIAN KINERJA LPPM 2024" content="Detail capaian kinerja tahun 2024..." />
          <AccordionItem title="CAPAIAN KINERJA LPPM 2025" content="Detail capaian kinerja tahun 2025..." />
          <div style={{ textAlign: 'right', fontSize: '12px', color: '#666', marginTop: '10px' }}>Last Update: 12/01/2026</div>
        </div>
      </section>

      {/* 5. ACHIEVEMENTS */}
      <section className="container" style={{ padding: '20px 20px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <SectionTitle title="ACHIEVEMENTS" />
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
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', letterSpacing: '2px', margin: 0, opacity: 0.7 }}>LPPM UIM</h2>
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
                <span style={{ fontWeight: 'bold' }}>LPPM UNIVERSITAS ISLAM MADURA</span>
              </div>
            </div>
          </div>
          {/* Sidebar video list simulation */}
          {/* For simplicity we keep just the main video area for now as seen in broad view */}
        </div>
      </section>

      {/* 8. COUNTER */}
      <section style={{ padding: '40px 20px', textAlign: 'center' }}>
        <div style={{ fontSize: '2rem', fontWeight: 'bold', letterSpacing: '5px', fontFamily: 'monospace' }}>1 0 2 5 9 2</div>
        <div style={{ fontSize: '12px', color: '#666' }}>VISITOR COUNT</div>
      </section>

      {/* Extra News (Bottom grid in reference) */}
      {/* Skipping strict duplication of news to avoid redundancy, but we added the main news section above. */}
    </div>
  )
}

export default Home
