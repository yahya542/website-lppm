import React, { useState } from 'react';
import NewsCard from '../news/components/NewsCard';

const Home = () => {
    // Gunakan data statis sementara untuk menghindari loading
    const [homeData] = useState({
        latest_news: [],
        latest_announcements: [],
        latest_research: [],
        popular_news: []
    });
    const [loading] = useState(false); // Set loading ke false langsung
    const [error] = useState(null);

    // Fungsi bantuan untuk validasi data
    const safeArray = (data) => Array.isArray(data) ? data : [];
    const safeString = (str) => typeof str === 'string' ? str : '';
    const safeDate = (dateStr) => {
        if (!dateStr) return '-';
        try {
            return new Date(dateStr).toLocaleDateString('id-ID');
        } catch {
            return '-';
        }
    };

    if (loading) {
        return (
            <div className="container p-t-40 p-b-40">
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container p-t-40 p-b-40">
                <div className="alert alert-danger" role="alert">
                    Error: {error}
                </div>
            </div>
        );
    }

    // Ambil data dengan pengaman
    const latestNews = safeArray(homeData.latest_news);
    const latestAnnouncements = safeArray(homeData.latest_announcements);
    const latestResearch = safeArray(homeData.latest_research);
    const popularNews = safeArray(homeData.popular_news);

    return (
        <div className="container">
            <div className="row">
                {/* Berita Terbaru - Sidebar Kiri */}
                <div className="col-md-4">
                    <div className="sidebar-top p-t-40 p-b-40">
                        <h3 className="m-text20 p-b-20">Berita Terbaru</h3>
                        <div className="latest-news">
                            {latestNews.length > 0 ? (
                                latestNews.slice(0, 3).map((news) => (
                                    <div key={news.id} className="p-b-20 bor14 p-all-15">
                                        <NewsCard news={news} />
                                    </div>
                                ))
                            ) : (
                                <p className="s-text7">Belum ada berita terbaru</p>
                            )}
                        </div>
                    </div>
                    
                    <div className="sidebar-bottom p-t-40 p-b-40">
                        <h3 className="m-text20 p-b-20">Pengumuman Terbaru</h3>
                        <div className="latest-announcements">
                            {latestAnnouncements.length > 0 ? (
                                latestAnnouncements.slice(0, 3).map((announcement) => (
                                    <div key={announcement.id} className="p-b-20 bor14 p-all-15">
                                        <div className="s-text7 p-b-5">
                                            <a href={`/announcements/${announcement.id}`} className="f1-s-5 cl3 hov-cl10 trans-03">
                                                {safeString(announcement.title) || 'Tanpa Judul'}
                                            </a>
                                        </div>
                                        <span className="cl8">
                                            <span className="f1-s-3">{safeDate(announcement.created_at)}</span>
                                        </span>
                                    </div>
                                ))
                            ) : (
                                <p className="s-text7">Belum ada pengumuman terbaru</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Riset Terbaru - Kolom Tengah */}
                <div className="col-md-5">
                    <div className="p-t-40 p-b-40">
                        <h2 className="m-text20 p-b-20">Riset Terbaru</h2>
                        <div className="latest-research">
                            {latestResearch.length > 0 ? (
                                latestResearch.slice(0, 5).map((research) => (
                                    <div key={research.id} className="p-b-20 bor14 p-all-15">
                                        <div className="s-text7 p-b-5">
                                            <a href={`/research/${research.id}`} className="f1-s-5 cl3 hov-cl10 trans-03">
                                                {safeString(research.title) || 'Tanpa Judul'}
                                            </a>
                                        </div>
                                        <p className="s-text8 p-b-5">
                                            {safeString(research.description).substring(0, 100) || 'Deskripsi tidak tersedia'}...
                                        </p>
                                        <span className="cl8">
                                            <span className="f1-s-3">{safeDate(research.created_at)}</span>
                                        </span>
                                    </div>
                                ))
                            ) : (
                                <p className="s-text7">Belum ada riset terbaru</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Terpopuler - Kolom Kanan */}
                <div className="col-md-3">
                    <div className="popular-posts p-t-40 p-b-40">
                        <h3 className="m-text20 p-b-20">Terpopuler</h3>
                        <div className="popular-news">
                            {popularNews.length > 0 ? (
                                popularNews.slice(0, 5).map((news, index) => (
                                    <div key={news.id} className="p-b-20 bor14 p-all-15">
                                        <div className="flex-wr-sb-s p-b-10">
                                            <div className="size-w-11 flex-wr-s-c m-b-10">
                                                <span className="f1-s-18 cl3 m-r-5">{index + 1}</span>
                                            </div>
                                            <div className="size-w-12 bo-1-r bor14 p-rl-10">
                                                <a href={`/news/${news.id}`} className="dis-block f1-s-11 cl6 hov1 s-text14">
                                                    {safeString(news.title).substring(0, 50) || 'Tanpa Judul'}...
                                                </a>
                                                <span className="f1-s-9 cl9">{safeDate(news.created_at)}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="s-text7">Belum ada berita populer</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;