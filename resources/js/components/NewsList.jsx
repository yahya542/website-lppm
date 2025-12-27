import React, { useState } from 'react';

const NewsList = () => {
    // Data dummy untuk menampilkan tampilan sesuai tema
    const dummyNews = [
        {
            id: 1,
            title: "Berita Utama LPPM tentang Penelitian Terbaru",
            published_at: "2025-01-01",
            featured_image: "/images/post-01.jpg",
            author: "LPPM",
            category: { name: "Berita" }
        },
        {
            id: 2,
            title: "Kegiatan Pengabdian Masyarakat Semester Ini",
            published_at: "2025-01-02",
            featured_image: "/images/post-02.jpg",
            author: "LPPM",
            category: { name: "Pengabdian" }
        },
        {
            id: 3,
            title: "Pengumuman Hasil Penelitian Unggulan",
            published_at: "2025-01-03",
            featured_image: "/images/post-03.jpg",
            author: "LPPM",
            category: { name: "Pengumuman" }
        },
        {
            id: 4,
            title: "Workshop Penelitian untuk Dosen",
            published_at: "2025-01-04",
            featured_image: "/images/post-04.jpg",
            author: "LPPM",
            category: { name: "Workshop" }
        },
        {
            id: 5,
            title: "Kolaborasi Internasional dalam Penelitian",
            published_at: "2025-01-05",
            featured_image: "/images/post-05.jpg",
            author: "LPPM",
            category: { name: "Kolaborasi" }
        },
        {
            id: 6,
            title: "Inovasi Teknologi di Bidang Pendidikan",
            published_at: "2025-01-06",
            featured_image: "/images/post-06.jpg",
            author: "LPPM",
            category: { name: "Teknologi" }
        },
        {
            id: 7,
            title: "Prestasi Mahasiswa dalam Kompetisi Nasional",
            published_at: "2025-01-07",
            featured_image: "/images/post-07.jpg",
            author: "LPPM",
            category: { name: "Prestasi" }
        },
        {
            id: 8,
            title: "Sosialisasi Program Baru untuk Dosen",
            published_at: "2025-01-08",
            featured_image: "/images/post-08.jpg",
            author: "LPPM",
            category: { name: "Program" }
        }
    ];

    const dummyCategories = [
        { id: 1, name: "Berita" },
        { id: 2, name: "Pengumuman" },
        { id: 3, name: "Penelitian" },
        { id: 4, name: "Pengabdian" },
        { id: 5, name: "Workshop" }
    ];

    const [news] = useState(dummyNews);
    const [loading] = useState(false); // Tidak perlu loading karena data dummy
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [categories] = useState(dummyCategories);

    // Kita hapus useEffect karena menggunakan data dummy
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             // Fetch categories
    //             const categoriesResponse = await fetch('/api/categories');
    //             if (!categoriesResponse.ok) {
    //                 throw new Error(`HTTP error! status: ${categoriesResponse.status}`);
    //             }
    //             const categoriesData = await categoriesResponse.json();
    //             setCategories(categoriesData);
    //
    //             // Fetch news
    //             let url = '/api/news';
    //             const params = new URLSearchParams();
    //             
    //             if (selectedCategory) params.append('category', selectedCategory);
    //             if (searchTerm) params.append('search', searchTerm);
    //             
    //             if (params.toString()) {
    //                 url += '?' + params.toString();
    //             }
    //
    //             const newsResponse = await fetch(url);
    //             if (!newsResponse.ok) {
    //                 throw new Error(`HTTP error! status: ${newsResponse.status}`);
    //             }
    //             const newsData = await newsResponse.json();
    //             setNews(newsData.data || newsData);
    //             setLoading(false);
    //         } catch (error) {
    //             console.error('Error fetching news:', error);
    //             setLoading(false);
    //         }
    //     };
    //
    //     fetchData();
    // }, [selectedCategory, searchTerm]);

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Filter news berdasarkan kategori dan pencarian
    const filteredNews = news.filter(item => {
        const matchesCategory = !selectedCategory || item.category.id == selectedCategory;
        const matchesSearch = !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
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
                                Berita LPPM
                            </h3>
                        </div>

                        <div className="row p-t-35">
                            {filteredNews.map((item) => (
                                <div key={item.id} className="col-sm-6 p-r-25 p-r-15-sr991">
                                    {/* Item latest */}	
                                    <div className="m-b-45">
                                        <a href={`/news/${item.id}`} className="wrap-pic-w hov1 trans-03">
                                            {item.featured_image ? (
                                                <img src={item.featured_image} alt={item.title} />
                                            ) : (
                                                <img src="/images/latest-01.jpg" alt={item.title} />
                                            )}
                                        </a>

                                        <div className="p-t-16">
                                            <h5 className="p-b-5">
                                                <a href={`/news/${item.id}`} className="f1-m-3 cl2 hov-cl10 trans-03">
                                                    {item.title}
                                                </a>
                                            </h5>

                                            <span className="cl8">
                                                <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                                                    oleh {item.author}
                                                </a>

                                                <span className="f1-s-3 m-rl-3">
                                                    -
                                                </span>

                                                <span className="f1-s-3">
                                                    {new Date(item.published_at).toLocaleDateString('id-ID')}
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
                            {/* Search */}
                            <div className="p-b-55">
                                <div className="how2 how2-cl4 flex-s-c m-b-35">
                                    <h3 className="f1-m-2 cl3 tab01-title">
                                        Cari Berita
                                    </h3>
                                </div>

                                <div className="pos-relative size-a-2 bo-1-rad-22 of-hidden bocl11 m-tb-6">
                                    <input 
                                        className="f1-s-1 cl6 plh9 s-full p-l-25 p-r-45" 
                                        type="text" 
                                        name="search" 
                                        placeholder="Cari berita..." 
                                        value={searchTerm}
                                        onChange={handleSearchChange}
                                    />
                                    <button className="flex-c-c size-a-1 ab-t-r fs-20 cl2 hov-cl10 trans-03">
                                        <i className="zmdi zmdi-search"></i>
                                    </button>
                                </div>
                            </div>

                            {/* Categories */}
                            <div className="p-b-55">
                                <div className="how2 how2-cl4 flex-s-c m-b-30">
                                    <h3 className="f1-m-2 cl3 tab01-title">
                                        Kategori
                                    </h3>
                                </div>

                                <select
                                    value={selectedCategory}
                                    onChange={handleCategoryChange}
                                    className="form-control"
                                >
                                    <option value="">Semua Kategori</option>
                                    {categories.map((category) => (
                                        <option key={category.id} value={category.id}>
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Popular */}
                            <div className="p-b-55">
                                <div className="how2 how2-cl4 flex-s-c m-b-30">
                                    <h3 className="f1-m-2 cl3 tab01-title">
                                        Terpopuler
                                    </h3>
                                </div>

                                <ul className="p-t-35">
                                    {news.slice(0, 5).map((item, index) => (
                                        <li key={item.id} className="flex-wr-sb-s p-b-22">
                                            <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                                                {index + 1}
                                            </div>

                                            <a href={`/news/${item.id}`} className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
                                                {item.title}
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

export default NewsList;