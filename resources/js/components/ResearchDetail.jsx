import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ResearchDetail = () => {
    const { id } = useParams();
    
    // Data dummy untuk menampilkan tampilan sesuai tema
    const dummyResearch = {
        id: 1,
        title: "Penelitian Inovatif di Bidang Teknologi",
        abstract: "Penelitian ini membahas inovasi terbaru dalam bidang teknologi informasi yang dapat meningkatkan efisiensi proses bisnis. Penelitian ini dilakukan selama dua tahun dengan melibatkan berbagai stakeholder industri. Hasil dari penelitian ini diharapkan dapat diterapkan dalam skala nasional untuk meningkatkan daya saing bangsa.",
        content: "Penelitian ini dilakukan dengan pendekatan kualitatif dan kuantitatif untuk mendapatkan hasil yang akurat dan dapat dipertanggungjawabkan. Tim peneliti terdiri dari dosen dan mahasiswa terpilih yang memiliki keahlian di bidang teknologi informasi.\n\nPenelitian ini melibatkan kerjasama dengan beberapa industri untuk mendapatkan data primer yang valid. Metodologi yang digunakan meliputi studi literatur, observasi lapangan, dan wawancara mendalam dengan para stakeholder.\n\nHasil penelitian menunjukkan bahwa implementasi teknologi inovatif dapat meningkatkan efisiensi operasional hingga 40% dan mengurangi biaya produksi hingga 25%. Temuan ini sangat signifikan untuk diterapkan dalam konteks industri nasional.",
        published_at: "2025-01-08",
        research_type: "Penelitian",
        funding_amount: 500000000,
        status: "Selesai",
        author: "LPPM"
    };

    const [research] = useState(dummyResearch);
    const [loading] = useState(false); // Tidak perlu loading karena data dummy

    // Kita hapus useEffect karena menggunakan data dummy
    // useEffect(() => {
    //     const fetchResearch = async () => {
    //         try {
    //             const response = await fetch(`/api/research/${id}`);
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! status: ${response.status}`);
    //             }
    //             const data = await response.json();
    //             setResearch(data);
    //             setLoading(false);
    //         } catch (error) {
    //             console.error('Error fetching research detail:', error);
    //             setLoading(false);
    //         }
    //     };
    //
    //     fetchResearch();
    // }, [id]);

    if (loading) {
        return <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>Loading...</div>;
    }

    if (!research) {
        return <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>Penelitian tidak ditemukan</div>;
    }

    return (
        <div className="bg0 p-t-60 p-b-35">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 p-b-30">
                        {/* Content */}
                        <div className="bg-white p-rl-20 p-t-25 p-b-30">
                            <div className="flex-wr-sb-s p-b-15">
                                <span className="f1-s-12 cl5 m-b-10">
                                    {research.research_type}
                                </span>

                                <div className="tags">
                                    <span className="f1-s-12 cl5 m-b-10">
                                        {new Date(research.published_at).toLocaleDateString('id-ID')}
                                    </span>
                                </div>
                            </div>

                            <h3 className="f1-l-3 cl2 p-b-12">
                                {research.title}
                            </h3>

                            <div className="flex-wr-sb-s p-b-40">
                                <span className="f1-s-12 cl5 m-b-10">
                                    oleh LPPM
                                </span>
                            </div>

                            <div className="f1-s-11 cl6 p-b-25">
                                <h4 className="f1-m-4 cl2 p-b-10">Abstrak</h4>
                                <p className="f1-s-11 cl6 p-b-25" style={{whiteSpace: 'pre-line'}}>{research.abstract}</p>
                                
                                <h4 className="f1-m-4 cl2 p-b-10">Deskripsi</h4>
                                <p className="f1-s-11 cl6 p-b-25" style={{whiteSpace: 'pre-line'}}>{research.content || 'Tidak ada deskripsi'}</p>
                                
                                <div className="p-t-15">
                                    <p className="f1-s-11 cl6 p-b-5"><strong>Anggaran:</strong> Rp {parseInt(research.funding_amount).toLocaleString('id-ID')}</p>
                                    <p className="f1-s-11 cl6 p-b-5"><strong>Status:</strong> {research.status}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-10 col-lg-4 p-b-30">
                        <div className="p-l-10 p-rl-0-sr991">
                            {/* Popular Research */}
                            <div className="p-b-55">
                                <div className="how2 how2-cl4 flex-s-c m-b-35">
                                    <h3 className="f1-m-2 cl3 tab01-title">
                                        Penelitian Terpopuler
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
                                                    Penelitian unggulan lainnya
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
                                                    Kegiatan penelitian terbaru
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
                                                    Penelitian terpilih
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

export default ResearchDetail;