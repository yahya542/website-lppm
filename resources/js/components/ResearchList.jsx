import React, { useState } from 'react';

const ResearchList = () => {
    // Data dummy untuk menampilkan tampilan sesuai tema
    const dummyResearches = [
        {
            id: 1,
            title: "Penelitian Inovatif di Bidang Teknologi",
            published_at: "2025-01-08",
            research_type: "Penelitian",
            abstract: "Penelitian ini membahas inovasi terbaru dalam bidang teknologi informasi yang dapat meningkatkan efisiensi proses bisnis. Penelitian ini dilakukan selama dua tahun dengan melibatkan berbagai stakeholder industri. Hasil dari penelitian ini diharapkan dapat diterapkan dalam skala nasional untuk meningkatkan daya saing bangsa.",
            featured_image: "/images/post-01.jpg",
            author: "LPPM"
        },
        {
            id: 2,
            title: "Studi Lanjutan tentang Energi Terbarukan",
            published_at: "2025-01-09",
            research_type: "Penelitian",
            abstract: "Penelitian ini fokus pada pengembangan teknologi energi terbarukan yang ramah lingkungan. Studi ini dilakukan di berbagai wilayah Indonesia untuk mendapatkan data yang akurat tentang potensi energi terbarukan di masing-masing daerah. Hasil penelitian ini akan menjadi dasar pengembangan kebijakan energi nasional.",
            featured_image: "/images/post-02.jpg",
            author: "LPPM"
        },
        {
            id: 3,
            title: "Pengabdian Masyarakat: Pemberdayaan UMKM",
            published_at: "2025-01-10",
            research_type: "Pengabdian Masyarakat",
            abstract: "Program pengabdian masyarakat yang bertujuan untuk memberdayakan UMKM di wilayah pedesaan. Program ini memberikan pelatihan dan pendampingan kepada para pelaku UMKM untuk meningkatkan kapasitas usaha mereka. Program ini melibatkan dosen dan mahasiswa dari berbagai disiplin ilmu.",
            featured_image: "/images/post-03.jpg",
            author: "LPPM"
        },
        {
            id: 4,
            title: "Analisis Kebijakan Pendidikan di Indonesia",
            published_at: "2025-01-11",
            research_type: "Penelitian",
            abstract: "Penelitian ini menganalisis efektivitas kebijakan pendidikan terbaru di Indonesia. Penelitian ini menggunakan pendekatan kualitatif dan kuantitatif untuk mendapatkan gambaran menyeluruh tentang dampak kebijakan terhadap kualitas pendidikan di Indonesia.",
            featured_image: "/images/post-04.jpg",
            author: "LPPM"
        },
        {
            id: 5,
            title: "Pengembangan Desa Wisata Berbasis Kearifan Lokal",
            published_at: "2025-01-12",
            research_type: "Pengabdian Masyarakat",
            abstract: "Program ini bertujuan mengembangkan potensi desa wisata dengan menggali kearifan lokal sebagai daya tarik utama. Program ini melibatkan masyarakat setempat dalam perencanaan dan pelaksanaan pengembangan desa wisata yang berkelanjutan.",
            featured_image: "/images/post-05.jpg",
            author: "LPPM"
        },
        {
            id: 6,
            title: "Inovasi Pertanian Berkelanjutan",
            published_at: "2025-01-13",
            research_type: "Penelitian",
            abstract: "Penelitian ini mengembangkan teknologi pertanian berkelanjutan yang ramah lingkungan. Teknologi ini bertujuan meningkatkan produktivitas pertanian sambil menjaga kelestarian lingkungan. Penelitian ini melibatkan kolaborasi dengan petani dan pemerintah daerah.",
            featured_image: "/images/post-06.jpg",
            author: "LPPM"
        }
    ];

    const [researches] = useState(dummyResearches);
    const [loading] = useState(false); // Tidak perlu loading karena data dummy
    const [selectedType, setSelectedType] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    // Kita hapus useEffect karena menggunakan data dummy
    // useEffect(() => {
    //     const fetchResearches = async () => {
    //         try {
    //             let url = '/api/research';
    //             const params = new URLSearchParams();
    //             
    //             if (selectedType) params.append('type', selectedType);
    //             if (searchTerm) params.append('search', searchTerm);
    //             
    //             if (params.toString()) {
    //                 url += '?' + params.toString();
    //             }
    //
    //             const response = await fetch(url);
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! status: ${response.status}`);
    //             }
    //             const data = await response.json();
    //             setResearches(data.data || data);
    //             setLoading(false);
    //         } catch (error) {
    //             console.error('Error fetching researches:', error);
    //             setLoading(false);
    //         }
    //     };
    //
    //     fetchResearches();
    // }, [selectedType, searchTerm]);

    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Filter researches berdasarkan jenis dan pencarian
    const filteredResearches = researches.filter(item => {
        const matchesType = !selectedType || item.research_type === selectedType;
        const matchesSearch = !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesType && matchesSearch;
    });

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
                                Penelitian & Pengabdian Masyarakat
                            </h3>
                        </div>

                        <div className="row p-t-35">
                            {filteredResearches.map((research) => (
                                <div key={research.id} className="col-sm-6 p-r-25 p-r-15-sr991">
                                    {/* Item latest */}	
                                    <div className="m-b-45">
                                        <a href={`/research/${research.id}`} className="wrap-pic-w hov1 trans-03">
                                            <img src="/images/latest-01.jpg" alt={research.title} />
                                        </a>

                                        <div className="p-t-16">
                                            <h5 className="p-b-5">
                                                <a href={`/research/${research.id}`} className="f1-m-3 cl2 hov-cl10 trans-03">
                                                    {research.title}
                                                </a>
                                            </h5>

                                            <span className="cl8">
                                                <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                                                    {research.research_type}
                                                </a>

                                                <span className="f1-s-3 m-rl-3">
                                                    -
                                                </span>

                                                <span className="f1-s-3">
                                                    {new Date(research.published_at).toLocaleDateString('id-ID')}
                                                </span>
                                            </span>

                                            <p className="f1-s-11 cl6 p-b-25 p-t-10">
                                                {research.abstract.substring(0, 150)}...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-md-10 col-lg-4">
                        <div className="p-l-10 p-rl-0-sr991 p-b-20">
                            {/* Search */}
                            <div className="p-b-55">
                                <div className="how2 how2-cl4 flex-s-c m-b-35">
                                    <h3 className="f1-m-2 cl3 tab01-title">
                                        Cari Penelitian
                                    </h3>
                                </div>

                                <div className="pos-relative size-a-2 bo-1-rad-22 of-hidden bocl11 m-tb-6">
                                    <input 
                                        className="f1-s-1 cl6 plh9 s-full p-l-25 p-r-45" 
                                        type="text" 
                                        name="search" 
                                        placeholder="Cari penelitian..." 
                                        value={searchTerm}
                                        onChange={handleSearchChange}
                                    />
                                    <button className="flex-c-c size-a-1 ab-t-r fs-20 cl2 hov-cl10 trans-03">
                                        <i className="zmdi zmdi-search"></i>
                                    </button>
                                </div>
                            </div>

                            {/* Filter by Type */}
                            <div className="p-b-55">
                                <div className="how2 how2-cl4 flex-s-c m-b-30">
                                    <h3 className="f1-m-2 cl3 tab01-title">
                                        Jenis Penelitian
                                    </h3>
                                </div>

                                <select
                                    value={selectedType}
                                    onChange={handleTypeChange}
                                    className="form-control"
                                >
                                    <option value="">Semua Jenis</option>
                                    <option value="Penelitian">Penelitian</option>
                                    <option value="Pengabdian Masyarakat">Pengabdian Masyarakat</option>
                                </select>
                            </div>

                            {/* Popular Research */}
                            <div className="p-b-55">
                                <div className="how2 how2-cl4 flex-s-c m-b-30">
                                    <h3 className="f1-m-2 cl3 tab01-title">
                                        Penelitian Terpopuler
                                    </h3>
                                </div>

                                <ul className="p-t-35">
                                    {filteredResearches.slice(0, 5).map((research, index) => (
                                        <li key={research.id} className="flex-wr-sb-s p-b-22">
                                            <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                                                {index + 1}
                                            </div>

                                            <a href={`/research/${research.id}`} className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
                                                {research.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResearchList;