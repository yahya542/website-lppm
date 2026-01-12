import { motion } from "motion/react"
import { fadeUpText } from "../components/transisi"
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../contexts/translations';

export default function Tentang() {
  const { language } = useLanguage();
  const t = translations[language];

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
      fontSize: "3rem",
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

        <h2 style={styles.title}>{t.tentang_title}</h2>

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
        {t.tentang_desc}
      </motion.p>
    </motion.section>
  )
}
