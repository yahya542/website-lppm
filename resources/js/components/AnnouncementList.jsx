import React, { useState } from 'react';

const AnnouncementList = () => {
    // Data dummy untuk menampilkan tampilan sesuai tema
    const dummyAnnouncements = [
        {
            id: 1,
            title: "Pengumuman Jadwal Seminar Hasil Penelitian",
            published_at: "2025-01-06",
            featured_image: "/images/post-01.jpg",
            author: "LPPM"
        },
        {
            id: 2,
            title: "Pendaftaran Program Unggulan Dibuka",
            published_at: "2025-01-07",
            featured_image: "/images/post-02.jpg",
            author: "LPPM"
        },
        {
            id: 3,
            title: "Workshop Penelitian untuk Dosen",
            published_at: "2025-01-08",
            featured_image: "/images/post-03.jpg",
            author: "LPPM"
        },
        {
            id: 4,
            title: "Pengumuman Hasil Penilaian Kinerja Dosen",
            published_at: "2025-01-09",
            featured_image: "/images/post-04.jpg",
            author: "LPPM"
        },
        {
            id: 5,
            title: "Kolaborasi Internasional dalam Penelitian",
            published_at: "2025-01-10",
            featured_image: "/images/post-05.jpg",
            author: "LPPM"
        },
        {
            id: 6,
            title: "Sosialisasi Program Baru untuk Dosen",
            published_at: "2025-01-11",
            featured_image: "/images/post-06.jpg",
            author: "LPPM"
        }
    ];

    const [announcements] = useState(dummyAnnouncements);
    const [loading] = useState(false); // Tidak perlu loading karena data dummy

    // Kita hapus useEffect karena menggunakan data dummy
    // useEffect(() => {
    //     const fetchAnnouncements = async () => {
    //         try {
    //             const response = await fetch('/api/announcements');
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! status: ${response.status}`);
    //             }
    //             const data = await response.json();
    //             setAnnouncements(data.data || data);
    //             setLoading(false);
    //         } catch (error) {
    //             console.error('Error fetching announcements:', error);
    //             setLoading(false);
    //         }
    //     };
    //
    //     fetchAnnouncements();
    // }, []);

    if (loading) {
        return <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>Loading...</div>;
    }

    return (
        <div className="bg0 p-t-60 p-b-35">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8">
                        <div className="how2 how2-cl4 flex-s-c m-r-10 m-r-0-sr991">
                            <h3 className="f1-m-2 cl3 tab01-title">
                                Pengumuman LPPM
                            </h3>
                        </div>

                        <div className="row p-t-35">
                            {announcements.map((announcement) => (
                                <div key={announcement.id} className="col-sm-6 p-r-25 p-r-15-sr991">
                                    {/* Item latest */}	
                                    <div className="m-b-45">
                                        <a href={`/announcements/${announcement.id}`} className="wrap-pic-w hov1 trans-03">
                                            <img src="/images/latest-01.jpg" alt={announcement.title} />
                                        </a>

                                        <div className="p-t-16">
                                            <h5 className="p-b-5">
                                                <a href={`/announcements/${announcement.id}`} className="f1-m-3 cl2 hov-cl10 trans-03">
                                                    {announcement.title}
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
                                                    {new Date(announcement.published_at).toLocaleDateString('id-ID')}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-md-10 col-lg-4">
                        <div className="p-l-10 p-rl-0-sr991 p-b-20">
                            {/* Popular Announcements */}
                            <div className="p-b-55">
                                <div className="how2 how2-cl4 flex-s-c m-b-30">
                                    <h3 className="f1-m-2 cl3 tab01-title">
                                        Pengumuman Terpopuler
                                    </h3>
                                </div>

                                <ul className="p-t-35">
                                    {announcements.slice(0, 5).map((announcement, index) => (
                                        <li key={announcement.id} className="flex-wr-sb-s p-b-22">
                                            <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                                                {index + 1}
                                            </div>

                                            <a href={`/announcements/${announcement.id}`} className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
                                                {announcement.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Categories */}
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

export default AnnouncementList;