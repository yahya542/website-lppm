import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const Kontak = () => {
    const { language } = useLanguage();

    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(language === 'id' ? 'Pesan terkirim! (Demo)' : 'Message sent! (Demo)');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

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
                    <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '15px', letterSpacing: '1px' }}>
                        {language === 'id' ? 'Hubungi Kami' : 'Contact Us'}
                    </h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto' }}>
                        {language === 'id'
                            ? "Kami siap mendengar masukan, pertanyaan, dan tawaran kerjasama dari Anda."
                            : "We are ready to hear your feedback, questions, and cooperation offers."}
                    </p>
                </motion.div>
            </div>

            <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', marginBottom: '50px' }}>

                    {/* LEFT COLUMN: INFO */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                    >
                        <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#004d26', marginBottom: '10px' }}>
                            {language === 'id' ? 'Informasi Kontak' : 'Contact Information'}
                        </h2>

                        {/* Address Card */}
                        <div style={{
                            backgroundColor: 'white',
                            padding: '25px',
                            borderRadius: '15px',
                            boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                            display: 'flex',
                            alignItems: 'flex-start'
                        }}>
                            <div style={{
                                backgroundColor: '#e8f5e9',
                                padding: '15px',
                                borderRadius: '12px',
                                color: '#004d26',
                                marginRight: '20px',
                                fontSize: '20px'
                            }}>
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '5px' }}>
                                    {language === 'id' ? 'Alamat' : 'Address'}
                                </h4>
                                <p style={{ color: '#666', lineHeight: '1.6' }}>
                                    Jl. Raya Bettet, Pamekasan<br />
                                    Madura, Jawa Timur<br />
                                    Indonesia, 69317
                                </p>
                            </div>
                        </div>

                        {/* Email Card */}
                        <div style={{
                            backgroundColor: 'white',
                            padding: '25px',
                            borderRadius: '15px',
                            boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                            display: 'flex',
                            alignItems: 'flex-start'
                        }}>
                            <div style={{
                                backgroundColor: '#e3f2fd',
                                padding: '15px',
                                borderRadius: '12px',
                                color: '#1565c0',
                                marginRight: '20px',
                                fontSize: '20px'
                            }}>
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '5px' }}>Email</h4>
                                <p style={{ color: '#666', lineHeight: '1.6' }}>
                                    lppm@uim.ac.id<br />
                                    info@uim.ac.id
                                </p>
                            </div>
                        </div>

                        {/* Phone Card */}
                        <div style={{
                            backgroundColor: 'white',
                            padding: '25px',
                            borderRadius: '15px',
                            boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                            display: 'flex',
                            alignItems: 'flex-start'
                        }}>
                            <div style={{
                                backgroundColor: '#fff3e0',
                                padding: '15px',
                                borderRadius: '12px',
                                color: '#ef6c00',
                                marginRight: '20px',
                                fontSize: '20px'
                            }}>
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '5px' }}>
                                    {language === 'id' ? 'Telepon' : 'Phone'}
                                </h4>
                                <p style={{ color: '#666', lineHeight: '1.6' }}>
                                    (0324) 322218<br />
                                    Fax: (0324) 322218
                                </p>
                            </div>
                        </div>

                    </motion.div>

                    {/* RIGHT COLUMN: FORM */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ delay: 0.2 }}
                        style={{
                            backgroundColor: 'white',
                            padding: '40px',
                            borderRadius: '20px',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
                        }}
                    >
                        <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#333', marginBottom: '25px' }}>
                            {language === 'id' ? 'Kirim Pesan' : 'Send Message'}
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#555' }}>
                                    {language === 'id' ? 'Nama Lengkap' : 'Full Name'}
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', outline: 'none' }}
                                    placeholder={language === 'id' ? 'Masukkan nama anda' : 'Enter your name'}
                                    required
                                />
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#555' }}>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', outline: 'none' }}
                                    placeholder="example@email.com"
                                    required
                                />
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#555' }}>Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', outline: 'none' }}
                                    placeholder={language === 'id' ? 'Judul pesan' : 'Message subject'}
                                    required
                                />
                            </div>

                            <div style={{ marginBottom: '25px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#555' }}>
                                    {language === 'id' ? 'Pesan' : 'Message'}
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', outline: 'none', resize: 'vertical' }}
                                    placeholder={language === 'id' ? 'Tulis pesan anda disini...' : 'Write your message here...'}
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                style={{
                                    width: '100%',
                                    padding: '14px',
                                    backgroundColor: '#004d26',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.2s',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px'
                                }}
                                onMouseOver={(e) => e.target.style.backgroundColor = '#00695c'}
                                onMouseOut={(e) => e.target.style.backgroundColor = '#004d26'}
                            >
                                <i className="fas fa-paper-plane"></i>
                                {language === 'id' ? 'Kirim Pesan' : 'Send Message'}
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* MAP SECTION */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    style={{
                        backgroundColor: 'white',
                        padding: '15px',
                        borderRadius: '20px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                    }}
                >
                    <div style={{ borderRadius: '15px', overflow: 'hidden', height: '400px' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.966479860473!2d113.48316631537651!3d-7.16489467201712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd77de7d6d90065%3A0x629555c2523f2081!2sUniversitas%20Islam%20Madura!5e0!3m2!1sen!2sid!4v1673837492156!5m2!1sen!2sid"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Kontak;
