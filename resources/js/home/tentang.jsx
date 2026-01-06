import * as motion from "motion/react-client"
import { fadeUpText } from "../components/transisi"

export default function Tentang() {
  const styles = {
    container: {
      padding: "60px 20px",
    },

    titleWrapper: {
      display: "flex",
      alignItems: "center",
      gap: "16px",

      width: "fit-content",      // 🔥 KUNCI TENGAH
      margin: "0 auto 24px",     // 🔥 KUNCI TENGAH
    },

    line: {
      width: "64px",
      height: "2px",
      backgroundColor: "#2e7d32",
      transformOrigin: "center",
    },

    title: {
      fontSize: "22px",
      fontWeight: "600",
      letterSpacing: "1px",
      whiteSpace: "nowrap",
      textTransform: "uppercase",
      margin: 0,
      textAlign: "center",
      color: "black",
    },

    p: {
      maxWidth: "900px",
      margin: "0 auto",
      fontSize: "16px",
      lineHeight: "1.8",
      textAlign: "center",
    },
  }

  return (
    <motion.section
      style={styles.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // 🔥 scroll trigger
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2, // animasi berurutan
          },
        },
      }}
    >
      {/* JUDUL */}
      <motion.div style={styles.titleWrapper} variants={fadeUpText}>
        <motion.span
          style={styles.line}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />

        <h2 style={styles.title}>Tentang LPPM UIM</h2>

        <motion.span
          style={styles.line}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      {/* PARAGRAF */}
      <motion.p style={styles.p} variants={fadeUpText}>
        Lembaga Penelitian dan Pengabdian kepada Masyarakat (LP2M) Universitas Islam Madura (UIM) Pamekasan merupakan institusi organik yang bertugas mengelola seluruh kegiatan penelitian dan pengabdian kepada masyarakat, baik yang bersifat intra universitas maupun ekstra universitas (regional, nasional, dan internasional). LP2M Universitas Islam Madura memfasilitasi segala bentuk kegiatan kerjasama penelitian dan pengabdian kepada masyarakat, baik antar bidang ilmu maupun antar lembaga lembaga ini juga merupakan wadah bagi pembentukan berbagai pusat studi dan pusat kegiatan di lingku ngan Universitas Islam Madura.
      </motion.p>
    </motion.section>
  )
}
