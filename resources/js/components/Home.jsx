import React, { useState } from 'react';

const Home = () => {
    // Data dummy untuk menampilkan tampilan sesuai tema
    const dummyData = {
        latest_news: [
            {
                id: 1,
                title: "Berita Utama LPPM tentang Penelitian Terbaru",
                published_at: "2025-01-01",
                featured_image: "/images/post-01.jpg",
                author: "LPPM"
            },
            {
                id: 2,
                title: "Kegiatan Pengabdian Masyarakat Semester Ini",
                published_at: "2025-01-02",
                featured_image: "/images/post-02.jpg",
                author: "LPPM"
            },
            {
                id: 3,
                title: "Pengumuman Hasil Penelitian Unggulan",
                published_at: "2025-01-03",
                featured_image: "/images/post-03.jpg",
                author: "LPPM"
            },
            {
                id: 4,
                title: "Workshop Penelitian untuk Dosen",
                published_at: "2025-01-04",
                featured_image: "/images/post-04.jpg",
                author: "LPPM"
            },
            {
                id: 5,
                title: "Kolaborasi Internasional dalam Penelitian",
                published_at: "2025-01-05",
                featured_image: "/images/post-05.jpg",
                author: "LPPM"
            }
        ],
        latest_announcements: [
            {
                id: 1,
                title: "Pengumuman Penting: Jadwal Seminar Hasil Penelitian",
                published_at: "2025-01-06"
            },
            {
                id: 2,
                title: "Pendaftaran Program Unggulan Dibuka",
                published_at: "2025-01-07"
            }
        ],
        latest_research: [
            {
                id: 1,
                title: "Penelitian Inovatif di Bidang Teknologi",
                published_at: "2025-01-08"
            },
            {
                id: 2,
                title: "Studi Lanjutan tentang Energi Terbarukan",
                published_at: "2025-01-09"
            }
        ],
        categories: [
            { id: 1, name: "Berita" },
            { id: 2, name: "Pengumuman" },
            { id: 3, name: "Penelitian" }
        ],
        featured_news: [
            {
                id: 1,
                title: "Berita Utama LPPM: Prestasi Terbaru dalam Penelitian",
                published_at: "2025-01-01",
                featured_image: "/images/post-01.jpg"
            }
        ]
    };

    const [data] = useState(dummyData);
    const [loading] = useState(false); // Tidak perlu loading karena data dummy

    // Kita hapus useEffect karena menggunakan data dummy
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('/api/home');
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! status: ${response.status}`);
    //             }
    //             const result = await response.json();
    //             setData(result);
    //             setLoading(false);
    //         } catch (error) {
    //             console.error('Error fetching home data:', error);
    //             setLoading(false);
    //         }
    //     };
    //
    //     fetchData();
    // }, []);

    if (loading) {
        return <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>Loading...</div>;
    }

    return (
        <div className="bg0 p-t-70">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8">
                        <div className="p-b-20">
                            {/* Feature Post */}
                            <div className="bg0">
                                <div className="container">
                                    <div className="row m-rl--1">
                                        <div className="col-md-6 p-rl-1 p-b-2">
                                            <div className="bg-img1 size-a-3 how1 pos-relative" style={{backgroundImage: 'url(/images/post-01.jpg)'}}>
                                                <a href="/news" className="dis-block how1-child1 trans-03"></a>

                                                <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
                                                    <a href="/news" className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2">
                                                        Berita Terbaru
                                                    </a>

                                                    <h3 className="how1-child2 m-t-14 m-b-10">
                                                        <a href="/news" className="how-txt1 size-a-6 f1-l-1 cl0 hov-cl10 trans-03">
                                                            {data.featured_news.length > 0 ? data.featured_news[0].title : 'Berita Utama LPPM'}
                                                        </a>
                                                    </h3>

                                                    <span className="how1-child2">
                                                        <span className="f1-s-4 cl11">
                                                            LPPM
                                                        </span>

                                                        <span className="f1-s-3 cl11 m-rl-3">
                                                            -
                                                        </span>

                                                        <span className="f1-s-3 cl11">
                                                            {data.featured_news.length > 0 ? new Date(data.featured_news[0].published_at).toLocaleDateString('id-ID') : 'Tanggal'}
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6 p-rl-1">
                                            <div className="row m-rl--1">
                                                <div className="col-12 p-rl-1 p-b-2">
                                                    <div className="bg-img1 size-a-4 how1 pos-relative" style={{backgroundImage: 'url(/images/post-02.jpg)'}}>
                                                        <a href="/research" className="dis-block how1-child1 trans-03"></a>

                                                        <div className="flex-col-e-s s-full p-rl-25 p-tb-24">
                                                            <a href="/research" className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2">
                                                                Penelitian
                                                            </a>

                                                            <h3 className="how1-child2 m-t-14">
                                                                <a href="/research" className="how-txt1 size-a-7 f1-l-2 cl0 hov-cl10 trans-03">
                                                                    {data.latest_research.length > 0 ? data.latest_research[0].title : 'Kegiatan Penelitian Terbaru'}
                                                                </a>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-sm-6 p-rl-1 p-b-2">
                                                    <div className="bg-img1 size-a-5 how1 pos-relative" style={{backgroundImage: 'url(/images/post-03.jpg)'}}>
                                                        <a href="/announcements" className="dis-block how1-child1 trans-03"></a>

                                                        <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
                                                            <a href="/announcements" className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2">
                                                                Pengumuman
                                                            </a>

                                                            <h3 className="how1-child2 m-t-14">
                                                                <a href="/announcements" className="how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03">
                                                                    {data.latest_announcements.length > 0 ? data.latest_announcements[0].title : 'Pengumuman Penting'}
                                                                </a>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-sm-6 p-rl-1 p-b-2">
                                                    <div className="bg-img1 size-a-5 how1 pos-relative" style={{backgroundImage: 'url(/images/post-04.jpg)'}}>
                                                        <a href="/news" className="dis-block how1-child1 trans-03"></a>

                                                        <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
                                                            <a href="/news" className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2">
                                                                Berita
                                                            </a>

                                                            <h3 className="how1-child2 m-t-14">
                                                                <a href="/news" className="how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03">
                                                                    {data.latest_news.length > 1 ? data.latest_news[1].title : 'Berita Terbaru'}
                                                                </a>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Latest News */}
                            <div className="p-t-50">
                                <div className="how2 how2-cl4 flex-s-c m-r-10 m-r-0-sr991">
                                    <h3 className="f1-m-2 cl3 tab01-title">
                                        Berita Terbaru
                                    </h3>
                                </div>

                                <div className="row p-t-35">
                                    {data.latest_news.slice(0, 4).map((news, index) => (
                                        <div key={news.id} className="col-sm-6 p-r-25 p-r-15-sr991">
                                            {/* Item latest */}	
                                            <div className="m-b-45">
                                                <a href={`/news/${news.id}`} className="wrap-pic-w hov1 trans-03">
                                                    {news.featured_image ? (
                                                        <img src={news.featured_image} alt={news.title} />
                                                    ) : (
                                                        <img src="/images/latest-01.jpg" alt={news.title} />
                                                    )}
                                                </a>

                                                <div className="p-t-16">
                                                    <h5 className="p-b-5">
                                                        <a href={`/news/${news.id}`} className="f1-m-3 cl2 hov-cl10 trans-03">
                                                            {news.title}
                                                        </a>
                                                    </h5>

                                                    <span className="cl8">
                                                        <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                                                            oleh LPPM
                                                        </a>

                                                        <span className="f1-s-3 m-rl-3">
                                                            -
                                                        </span>

                                                        <span className="f1-s-3">
                                                            {new Date(news.published_at).toLocaleDateString('id-ID')}
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-10 col-lg-4">
                        <div className="p-l-10 p-rl-0-sr991 p-b-20">
                            {/* Most Popular */}
                            <div>
                                <div className="how2 how2-cl4 flex-s-c">
                                    <h3 className="f1-m-2 cl3 tab01-title">
                                        Terpopuler
                                    </h3>
                                </div>

                                <ul className="p-t-35">
                                    {data.latest_news.slice(0, 5).map((news, index) => (
                                        <li key={news.id} className="flex-wr-sb-s p-b-22">
                                            <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                                                {index + 1}
                                            </div>

                                            <a href={`/news/${news.id}`} className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
                                                {news.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Banner */}
                            <div className="flex-c-s p-t-8">
                                <a href="#">
                                    <img className="max-w-full" src="/images/banner-02.jpg" alt="IMG" />
                                </a>
                            </div>
                            
                            {/* Stay Connected */}
                            <div className="p-t-50">
                                <div className="how2 how2-cl4 flex-s-c">
                                    <h3 className="f1-m-2 cl3 tab01-title">
                                        Tetap Terhubung
                                    </h3>
                                </div>

                                <ul className="p-t-35">
                                    <li className="flex-wr-sb-c p-b-20">
                                        <a href="#" className="size-a-8 flex-c-c borad-3 size-a-8 bg-facebook fs-16 cl0 hov-cl0">
                                            <span className="fab fa-facebook-f"></span>
                                        </a>

                                        <div className="size-w-3 flex-wr-sb-c">
                                            <span className="f1-s-8 cl3 p-r-20">
                                                1,234 Fans
                                            </span>

                                            <a href="#" className="f1-s-9 text-uppercase cl3 hov-cl10 trans-03">
                                                Suka
                                            </a>
                                        </div>
                                    </li>

                                    <li className="flex-wr-sb-c p-b-20">
                                        <a href="#" className="size-a-8 flex-c-c borad-3 size-a-8 bg-twitter fs-16 cl0 hov-cl0">
                                            <span className="fab fa-twitter"></span>
                                        </a>

                                        <div className="size-w-3 flex-wr-sb-c">
                                            <span className="f1-s-8 cl3 p-r-20">
                                                568 Pengikut
                                            </span>

                                            <a href="#" className="f1-s-9 text-uppercase cl3 hov-cl10 trans-03">
                                                Ikuti
                                            </a>
                                        </div>
                                    </li>

                                    <li className="flex-wr-sb-c p-b-20">
                                        <a href="#" className="size-a-8 flex-c-c borad-3 size-a-8 bg-instagram fs-16 cl0 hov-cl0">
                                            <span className="fab fa-instagram"></span>
                                        </a>

                                        <div className="size-w-3 flex-wr-sb-c">
                                            <span className="f1-s-8 cl3 p-r-20">
                                                2,345 Pengikut
                                            </span>

                                            <a href="#" className="f1-s-9 text-uppercase cl3 hov-cl10 trans-03">
                                                Ikuti
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;