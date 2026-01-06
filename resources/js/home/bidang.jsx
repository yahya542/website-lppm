import React, { useState, useEffect } from 'react';
import api from '../axios'; // Import axios for API calls

const Bidang = () => {
    const [latestNews, setLatestNews] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLatestNews = async () => {
            try {
                const response = await api.get('/api/news/latest');
                if (response.data && response.data.length > 0) {
                    setLatestNews(response.data[0]); // Get the most recent news
                }
                setLoading(false);
            } catch (err) {
                console.error('Error fetching latest news:', err);
                setError(err);
                setLoading(false);
            }
        };

        fetchLatestNews();
    }, []);

    return (
        <div className="main-content" style={{ padding: '20px', }}>
            <div className='container'   >
                <div className="horizontal-scroll-container" style={{ overflowX: 'hidden', whiteSpace: 'nowrap', padding: '25px 20px', width: '100%', position: 'relative', margin: '30px 0', }}>
                    <div className="horizontal-grid" style={{ display: 'flex', width: '200%' }}>
                        
                        <div className="grid-item" style={{ width: '320px', height: '320px', backgroundColor: 'white', margin: '0 25px', borderRadius: '20px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', color: '#666' }}>
                            <img src="/images/icons/1.png" alt="1" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
                        </div>
                        <div className="grid-item" style={{ width: '320px', height: '320px', backgroundColor: 'white', margin: '0 25px', borderRadius: '20px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', color: '#666' }}>
                            <img src="/images/icons/2.png" alt="1" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
                        </div>
                        {/* Duplikat untuk efek looping */}
                        <div className="grid-item" style={{ width: '320px', height: '320px', backgroundColor: 'white', margin: '0 25px', borderRadius: '20px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', color: '#666' }}>
                            <img src="/images/icons/3.png" alt="1" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
                        </div>
                        <div className="grid-item" style={{ width: '320px', height: '320px', backgroundColor: 'white', margin: '0 25px', borderRadius: '20px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', color: '#666' }}>
                            <img src="/images/icons/4.png" alt="1" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
                        </div>
                        
                    </div>
                </div>
                <style>{`
                    #autoScrollGrid {
                        animation: scrollAnimation 20s linear infinite;
                    }
                    @keyframes scrollAnimation {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }
                `}</style>
            </div>
        </div>
    );
};

export default Bidang;