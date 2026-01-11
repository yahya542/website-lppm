import React from 'react';

const Bidang = () => {
    const cards = [
        {
            title: "BIDANG 1",
            subtitle: "PENELITIAN & INOVASI",
        },
        {
            title: "BIDANG 2",
            subtitle: "PUBLIKASI, SENTRA HKI, PLAGIARISME, UNUSA PRESS", // Using text from image roughly
        },
        {
            title: "BIDANG 3",
            subtitle: "PENGABDIAN KEPADA MASYARAKAT, KKN, KERJASAMA",
        }
    ];

    return (
        <section className="bidang-section" style={{ padding: '20px 0 60px' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                {cards.map((card, index) => (
                    <div key={index} style={{
                        background: 'linear-gradient(to bottom, #008000, #006400)',
                        borderRadius: '15px',
                        padding: '30px 20px',
                        width: '350px',
                        textAlign: 'center',
                        color: 'white',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '250px'
                    }}>
                        <div style={{
                            backgroundColor: 'white',
                            borderRadius: '50%',
                            width: '80px',
                            height: '80px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '20px',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                        }}>
                            {/* Placeholder Icon/Logo */}
                            <img src="/images/icons/uim.png" alt="Icon" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                        </div>
                        <h3 style={{ fontSize: '24px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '10px' }}>{card.title}</h3>
                        <p style={{ fontSize: '14px', textTransform: 'uppercase', lineHeight: '1.4', margin: 0, opacity: 0.9 }}>{card.subtitle}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Bidang;