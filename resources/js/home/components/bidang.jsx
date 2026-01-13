import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../contexts/translations';

const Bidang = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const sliderRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const cards = [
        {
            title: t.bidang_1_title,
            subtitle: t.bidang_1_subtitle,
        },
        {
            title: t.bidang_2_title,
            subtitle: t.bidang_2_subtitle,
        },
        {
            title: t.bidang_3_title,
            subtitle: t.bidang_3_subtitle,
        },
        // Dummy cards for slider demonstration
        {
            title: t.bidang_4_title,
            subtitle: t.bidang_4_subtitle,
        },
        {
            title: t.bidang_5_title,
            subtitle: t.bidang_5_subtitle,
        },
        {
            title: t.bidang_6_title,
            subtitle: t.bidang_6_subtitle,
        }
    ];

    const cardWidth = isMobile ? 300 : 350; // Reduce card width slightly on mobile
    const gap = isMobile ? 15 : 30;
    const scrollAmount = cardWidth + gap;

    const scroll = (direction) => {
        if (sliderRef.current) {
            const { current } = sliderRef;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    const scrollToSlide = (index) => {
        if (sliderRef.current) {
            const { current } = sliderRef;
            current.scrollTo({ left: index * scrollAmount, behavior: 'smooth' });
        }
    };

    const handleScroll = () => {
        if (sliderRef.current) {
            const { scrollLeft } = sliderRef.current;
            // Calculate active index based on scroll position
            const index = Math.round(scrollLeft / scrollAmount);
            setActiveIndex(index);
        }
    };

    useEffect(() => {
        const slider = sliderRef.current;
        if (slider) {
            slider.addEventListener('scroll', handleScroll);
            return () => slider.removeEventListener('scroll', handleScroll);
        }
    }, []);


    return (
        <section className="bidang-section" style={{ padding: '20px 0 60px', position: 'relative' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', padding: isMobile ? '0 10px' : '0 50px' }}>

                {/* Left Arrow - Hide on Mobile to save space (user can swipe) */}
                {!isMobile && (
                    <button
                        onClick={() => scroll('left')}
                        style={{
                            position: 'absolute',
                            left: '0',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            backgroundColor: '#2e7d32',
                            color: 'white',
                            border: 'none',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            zIndex: 10,
                            boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                        }}
                    >
                        <i className="fas fa-chevron-left"></i>
                    </button>
                )}

                {/* Cards Container */}
                <div
                    ref={sliderRef}
                    style={{
                        display: 'flex',
                        gap: `${gap}px`,
                        overflowX: 'auto',
                        scrollBehavior: 'smooth',
                        padding: '20px 5px', // padding top/bottom for shadow
                        scrollbarWidth: 'none', // Firefox
                        msOverflowStyle: 'none',  // IE 10+
                        justifyContent: 'flex-start' // Align left to allow scrolling
                    }}
                    className="hide-scrollbar"
                >
                    {/* Add class to hide scrollbar in css if possible, or inline legacy style */}
                    <style>
                        {`
                          .hide-scrollbar::-webkit-scrollbar {
                            display: none;
                          }
                        `}
                    </style>

                    {cards.map((card, index) => (
                        <div key={index} style={{
                            background: 'linear-gradient(to bottom, #008000, #006400)',
                            borderRadius: '15px',
                            padding: '30px 20px',
                            minWidth: `${cardWidth}px`, // Fixed width for slider
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

                {/* Right Arrow - Hide on Mobile */}
                {!isMobile && (
                    <button
                        onClick={() => scroll('right')}
                        style={{
                            position: 'absolute',
                            right: '0',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            backgroundColor: '#2e7d32',
                            color: 'white',
                            border: 'none',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            zIndex: 10,
                            boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                        }}
                    >
                        <i className="fas fa-chevron-right"></i>
                    </button>
                )}

                {/* Slider Indicators (Dots) */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '20px' }}>
                    {cards.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToSlide(index)}
                            style={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                backgroundColor: activeIndex === index ? '#f9a825' : '#ccc', // Active: Orange, Inactive: Gray
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s ease'
                            }}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Bidang;