import React, { useState, useEffect } from "react"
import * as motion from "motion/react-client"
import api from "../axios"
import { fadeUpText } from "../components/transisi"

const styles = {
  container: {
    padding: "60px 20px",
  },

  titleWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    width: "fit-content",
    margin: "0 auto 24px",
  },

  line: {
    width: "64px",
    height: "2px",
    backgroundColor: "orange",
    transformOrigin: "center",
  },

  title: {
    fontSize: "3rem",
    fontWeight: "600",
    letterSpacing: "1px",
    whiteSpace: "nowrap",
    textTransform: "uppercase",
    margin: 0,
    color: "#000",
  },

  p: {
    maxWidth: "900px",
    margin: "0 auto",
    fontSize: "16px",
    lineHeight: "1.8",
    textAlign: "justify",
  },
}

const Home = () => {
  const [latestNews, setLatestNews] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        const response = await api.get("/api/news/latest")
        if (response.data?.length > 0) {
          setLatestNews(response.data[0])
        }
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchLatestNews()
  }, [])

  return (
    <>
      {/* ===== SECTION TENTANG ===== */}
      <motion.section
        style={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        <motion.div style={styles.titleWrapper} variants={fadeUpText}>
          <motion.span
            style={styles.line}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          />

          <h2 style={styles.title}> Berita terbaru</h2>

          <motion.span
            style={styles.line}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </motion.section>

      {/* ===== SECTION POSTER ===== */}
      <div className="main-content" style={{ padding: "20px", marginTop: "-100px" }}>
        <div className="container">
          <div
            style={{
              overflowX: "hidden",
              whiteSpace: "nowrap",
              padding: "25px 20px",
              position: "relative",
              margin: "30px 0",
            }}
          >
            <div
              id="autoScrollGrid"
              style={{ display: "flex", width: "200%" }}
            >
              <div style={cardStyle}>
                {loading ? (
                  "Loading..."
                ) : latestNews?.image ? (
                  <img
                    src={`/storage/${latestNews.image}`}
                    alt={latestNews.title}
                    style={imgStyle}
                  />
                ) : (
                  <img src="/images/poster/1.png" alt="Default" style={imgStyle} />
                )}
              </div>

              {["2.jpg", "5.jpg", "6.jpg", "7.jpg"].map((img, i) => (
                <div key={i} style={cardStyle}>
                  <img src={`/images/poster/${img}`} style={imgStyle} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        #autoScrollGrid {
          animation: scrollAnimation 20s linear infinite;
        }
        @keyframes scrollAnimation {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </>
  )
}

const cardStyle = {
  width: "370px",
  height: "370px",
  backgroundColor: "#fff",
  margin: "0 25px",
  borderRadius: "20px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

const imgStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "20px",
}

export default Home
