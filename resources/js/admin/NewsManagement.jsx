import React, { useState, useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import api from '../axios';

const NewsManagement = () => {
    const { user } = useOutletContext(); // Get user from layout context
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [pagination, setPagination] = useState({});
    const navigate = useNavigate();

    // Defined outside useEffect to be accessible by handlers
    const fetchNews = async (url = '/api/admin/news') => {
        try {
            setLoading(true);
            const newsResponse = await api.get(url);

            // Handle Laravel Pagination Response
            if (newsResponse.data.data) {
                setNews(newsResponse.data.data);
                setPagination({
                    current_page: newsResponse.data.current_page,
                    last_page: newsResponse.data.last_page,
                    next_page_url: newsResponse.data.next_page_url,
                    prev_page_url: newsResponse.data.prev_page_url,
                    from: newsResponse.data.from,
                    to: newsResponse.data.to,
                    total: newsResponse.data.total
                });
            } else {
                setNews(newsResponse.data); // Fallback for non-paginated
                setPagination({});
            }
            setLoading(false);
        } catch (err) {
            console.error('Error fetching news:', err);
            setError(err.response?.data?.message || err.message || 'Failed to fetch data');
            setLoading(false);

            // Redirect to login if not authenticated (though Layout should handle this)
            if (err.response?.status === 401) {
                navigate('/');
            }
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    const handlePageChange = (url) => {
        if (url) {
            fetchNews(url);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this news article?')) {
            try {
                await api.delete(`/api/admin/news/${id}`);
                // Refresh the news list keeping current page if possible or reset
                fetchNews(`/api/admin/news?page=${pagination.current_page || 1}`);
            } catch (err) {
                console.error('Error deleting news:', err);
                alert(err.response?.data?.message || 'Failed to delete news');
            }
        }
    };

    if (loading && !news.length) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="alert alert-danger" role="alert">
                Error: {error}
            </div>
        );
    }

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 style={{ color: '#343a40', marginBottom: 0 }}>News Management</h2>
                    <p className="text-muted small mt-1">Manage articles, updates, and featured news.</p>
                </div>
                <button
                    className="btn btn-primary shadow-sm"
                    onClick={() => {
                        alert('Add new news functionality would go here');
                    }}
                >
                    <i className="fas fa-plus me-2"></i> Add New Article
                </button>
            </div>

            <div className="card shadow-sm border-0">
                <div className="card-body p-0">
                    {news.length > 0 ? (
                        <>
                            <div className="table-responsive">
                                <table className="table table-hover mb-0" style={{ verticalAlign: 'middle' }}>
                                    <thead style={{ backgroundColor: '#f8f9fa' }}>
                                        <tr>
                                            <th className="py-3 px-4 border-bottom-0">ID</th>
                                            <th className="py-3 px-4 border-bottom-0">Title</th>
                                            <th className="py-3 px-4 border-bottom-0">Excerpt</th>
                                            <th className="py-3 px-4 border-bottom-0">Category</th>
                                            <th className="py-3 px-4 border-bottom-0">Status</th>
                                            <th className="py-3 px-4 border-bottom-0 text-end">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {news.map((article) => (
                                            <tr key={article.id}>
                                                <td className="px-4">{article.id}</td>
                                                <td className="px-4 fw-bold text-dark">{article.title}</td>
                                                <td className="px-4 text-muted">{article.excerpt?.substring(0, 60)}{article.excerpt?.length > 60 ? '...' : ''}</td>
                                                <td className="px-4"><span className="badge bg-light text-dark border">{article.category?.name || 'Uncategorized'}</span></td>
                                                <td className="px-4">
                                                    <span className={`badge ${article.is_published ? 'bg-success bg-opacity-10 text-success' : 'bg-warning bg-opacity-10 text-warning'}`}>
                                                        {article.is_published ? 'Published' : 'Draft'}
                                                    </span>
                                                </td>
                                                <td className="px-4 text-end">
                                                    <div className="btn-group">
                                                        <button
                                                            className="btn btn-sm btn-outline-primary"
                                                            title="Edit"
                                                            onClick={() => alert(`Edit news ID: ${article.id}`)}
                                                        >
                                                            <i className="fas fa-edit"></i>
                                                        </button>
                                                        <button
                                                            className="btn btn-sm btn-outline-danger"
                                                            title="Delete"
                                                            onClick={() => handleDelete(article.id)}
                                                        >
                                                            <i className="fas fa-trash-alt"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination Controls */}
                            {pagination.total > 0 && (
                                <div className="d-flex justify-content-between align-items-center p-4 border-top">
                                    <div className="text-muted small">
                                        Showing <strong>{pagination.from}</strong> to <strong>{pagination.to}</strong> of <strong>{pagination.total}</strong> results
                                    </div>
                                    <div>
                                        <button
                                            className="btn btn-outline-secondary btn-sm me-2"
                                            onClick={() => handlePageChange(pagination.prev_page_url)}
                                            disabled={!pagination.prev_page_url}
                                        >
                                            <i className="fas fa-chevron-left me-1"></i> Previous
                                        </button>
                                        <button
                                            className="btn btn-outline-secondary btn-sm"
                                            onClick={() => handlePageChange(pagination.next_page_url)}
                                            disabled={!pagination.next_page_url}
                                        >
                                            Next <i className="fas fa-chevron-right ms-1"></i>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center p-5">
                            <i className="far fa-newspaper fa-3x text-muted mb-3 d-block"></i>
                            <h5 className="text-muted">No news articles found</h5>
                            <button
                                className="btn btn-primary mt-2"
                                onClick={() => {
                                    alert('Add new news functionality would go here');
                                }}
                            >
                                Add Your First Article
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NewsManagement;