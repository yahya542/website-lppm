import React, { useState, useEffect } from 'react';
import NewsCard from '../components/NewsCard';

const NewsList = () => {
    const [newsList, setNewsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [categories, setCategories] = useState([]);
    const [pagination, setPagination] = useState({
        current_page: 1,
        last_page: 1,
        per_page: 10,
        total: 0
    });

    useEffect(() => {
        fetchNews();
        fetchCategories();
    }, [searchTerm, selectedCategory, pagination.current_page]);

    const fetchNews = async () => {
        try {
            let url = `/api/news?page=${pagination.current_page}`;
            if (searchTerm) url += `&search=${searchTerm}`;
            if (selectedCategory) url += `&category=${selectedCategory}`;
            
            const response = await fetch(url);
            const data = await response.json();
            setNewsList(data.data);
            setPagination({
                current_page: data.current_page,
                last_page: data.last_page,
                per_page: data.per_page,
                total: data.total
            });
            setLoading(false);
        } catch (error) {
            console.error('Error fetching news:', error);
            setLoading(false);
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await fetch('/api/categories');
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setPagination({ ...pagination, current_page: 1 });
    };

    const changePage = (page) => {
        if (page >= 1 && page <= pagination.last_page) {
            setPagination({ ...pagination, current_page: page });
        }
    };

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="news-list-page p-t-40 p-b-40">
            <div className="container">
                <div className="sec-title p-b-35">
                    <h3 className="m-text14 t-center">News</h3>
                </div>
                
                <form onSubmit={handleSearch} className="search-form bo5 p-all-15 m-b-30">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Search news..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="size-s-1 bo2 s-full bocl13 p-l-15 p-r-15 p-t-11 p-b-11"
                                />
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="form-group">
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="size-s-1 bo2 s-full bocl13 p-l-15 p-r-15 p-t-11 p-b-11"
                                >
                                    <option value="">All Categories</option>
                                    {categories.map(category => (
                                        <option key={category.id} value={category.id}>
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex-m">
                        <button type="submit" className="flex-c-m size2 bo-rad-23 s-text2 bg1 bo1 hov1 trans-0-4">
                            Search
                        </button>
                    </div>
                </form>

                <div className="row">
                    {newsList.map(news => (
                        <div key={news.id} className="col-md-4 p-b-30">
                            <NewsCard news={news} />
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex-l-m flex-w p-t-11">
                    <div className="flex-m flex-c-m p-r-50 p-t-18">
                        <button 
                            onClick={() => changePage(pagination.current_page - 1)}
                            disabled={pagination.current_page === 1}
                            className={`flex-c-m size2 bo-rad-23 s-text2 trans-0-4 ${pagination.current_page === 1 ? 'bg11' : 'bg1 hov1'}`}
                        >
                            Previous
                        </button>
                        
                        <span className="flex-c-m size2 m-l-10 m-r-10 s-text2 p-t-18">
                            Page {pagination.current_page} of {pagination.last_page}
                        </span>
                        
                        <button 
                            onClick={() => changePage(pagination.current_page + 1)}
                            disabled={pagination.current_page === pagination.last_page}
                            className={`flex-c-m size2 bo-rad-23 s-text2 trans-0-4 ${pagination.current_page === pagination.last_page ? 'bg11' : 'bg1 hov1'}`}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsList;