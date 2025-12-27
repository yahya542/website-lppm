import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const NewsDetail = () => {
    const { id } = useParams();
    
    // Data dummy untuk menampilkan tampilan sesuai tema
    const dummyNews = {
        id: 1,
        title: "Berita Utama LPPM tentang Penelitian Terbaru",
        content: "Berita ini membahas penelitian terbaru yang dilakukan oleh Lembaga Penelitian dan Pengabdian Masyarakat (LPPM) Universitas Indonesia. Penelitian ini fokus pada inovasi teknologi yang dapat meningkatkan efisiensi proses bisnis di berbagai sektor industri.\n\nTim peneliti yang terdiri dari dosen dan mahasiswa terpilih telah melakukan penelitian ini selama lebih dari dua tahun dengan melibatkan berbagai stakeholder industri. Hasil dari penelitian ini diharapkan dapat diterapkan dalam skala nasional untuk meningkatkan daya saing bangsa.\n\nPenelitian ini juga mendapat dukungan dari pemerintah dan berbagai lembaga swasta yang melihat potensi besar dari hasil penelitian ini. Kolaborasi ini diharapkan dapat mempercepat implementasi temuan penelitian ke dalam aplikasi nyata yang bermanfaat bagi masyarakat.",
        published_at: "2025-01-01",
        author: "LPPM",
        featured_image: "/images/post-01.jpg",
        category: { name: "Berita" }
    };

    const [news] = useState(dummyNews);
    const [loading] = useState(false); // Tidak perlu loading karena data dummy

    // Kita hapus useEffect karena menggunakan data dummy
    // useEffect(() => {
    //     const fetchNews = async () => 
    //         try {
    //             const response = await fetch(`/api/news/${id}`);
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! status: ${response.status}`);
    //             }
    //             const data = await response.json();
    //             setNews(data);
    //             setLoading(false);
    //         } catch (error) {
    //             console.error('Error fetching news detail:', error);
    //             setLoading(false);
    //         }
    //     };
    //
    //     fetchNews();
    // }, [id]);

    if (loading) {
        return <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>Loading...</div>;
    }

    if (!news) {
        return <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>Berita tidak ditemukan</div>;
    }

    return (
        <div className="bg0 p-t-60 p-b-35">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 p-b-30">
                        {/* Featured img */}
                        <div className="p-t-45 p-b-20">
                            {news.featured_image ? (
                                <img src={news.featured_image} alt={news.title} style={{width: '100%', height: 'auto'}} />
                            ) : (
                                <img src="/images/latest-01.jpg" alt={news.title} style={{width: '100%', height: 'auto'}} />
                            )}
                        </div>

                        {/* Content */}
                        <div className="bg-white p-rl-20 p-t-25 p-b-30">
                            <div className="flex-wr-sb-s p-b-15">
                                <span className="f1-s-12 cl5 m-b-10">
                                    {news.category?.name || 'Berita'}
                                </span>

                                <div className="tags">
                                    <span className="f1-s-12 cl5 m-b-10">
                                        {new Date(news.published_at).toLocaleDateString('id-ID')}
                                    </span>
                                </div>
                            </div>

                            <h3 className="f1-l-3 cl2 p-b-12">
                                {news.title}
                            </h3>

                            <div className="flex-wr-sb-s p-b-40">
                                <span className="f1-s-12 cl5 m-b-10">
                                    oleh {news.author}
                                </span>
                            </div>

                            <div className="f1-s-11 cl6 p-b-25">
                                <p className="f1-s-11 cl6 p-b-25" style={{whiteSpace: 'pre-line'}}>{news.content}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-10 col-lg-4 p-b-30">
                        <div className="p-l-10 p-rl-0-sr991">
                            {/* Popular Posts */}
                            <div className="p-b-55">
                                <div className="how2 how2-cl4 flex-s-c m-b-35">
                                    <h3 className="f1-m-2 cl3 tab01-title">
                                        Berita Terpopuler
                                    </h3>
                                </div>

                                <ul>
                                    <li className="flex-wr-sb-s p-b-20">
                                        <a href="#" className="size-w-4 wrap-pic-w hov1 trans-03">
                                            <img src="/images/popular-post-01.jpg" alt="IMG" />
                                        </a>

                                        <div className="size-w-5">
                                            <h6 className="p-b-5">
                                                <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03">
                                                    Berita populer lainnya
                                                </a>
                                            </h6>

                                            <span className="f1-s-3 cl6">
                                                Feb 17
                                            </span>
                                        </div>
                                    </li>

                                    <li className="flex-wr-sb-s p-b-20">
                                        <a href="#" className="size-w-4 wrap-pic-w hov1 trans-03">
                                            <img src="/images/popular-post-02.jpg" alt="IMG" />
                                        </a>

                                        <div className="size-w-5">
                                            <h6 className="p-b-5">
                                                <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03">
                                                    Judul berita populer
                                                </a>
                                            </h6>

                                            <span className="f1-s-3 cl6">
                                                Feb 16
                                            </span>
                                        </div>
                                    </li>

                                    <li className="flex-wr-sb-s p-b-20">
                                        <a href="#" className="size-w-4 wrap-pic-w hov1 trans-03">
                                            <img src="/images/popular-post-03.jpg" alt="IMG" />
                                        </a>

                                        <div className="size-w-5">
                                            <h6 className="p-b-5">
                                                <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03">
                                                    Berita menarik lainnya
                                                </a>
                                            </h6>

                                            <span className="f1-s-3 cl6">
                                                Feb 15
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Category */}
                            <div className="p-b-55">
                                <div className="how2 how2-cl4 flex-s-c m-b-30">
                                    <h3 className="f1-m-2 cl3 tab01-title">
                                        Kategori
                                    </h3>
                                </div>

                                <ul className="m-t--12">
                                    <li className="how-bor1 p-rl-5 p-tb-10">
                                        <a href="/news" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                                            Berita (12)
                                        </a>
                                    </li>

                                    <li className="how-bor1 p-rl-5 p-tb-10">
                                        <a href="/announcements" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                                            Pengumuman (8)
                                        </a>
                                    </li>

                                    <li className="how-bor1 p-rl-5 p-tb-10">
                                        <a href="/research" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                                            Penelitian (15)
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Banner */}
                            <div className="flex-c-s p-b-55">
                                <a href="#">
                                    <img className="max-w-full" src="/images/banner-02.jpg" alt="IMG" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;