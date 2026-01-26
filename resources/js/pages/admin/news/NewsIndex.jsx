import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../axios';
import { motion } from 'framer-motion';

const NewsIndex = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        try {
            const response = await api.get('/api/admin/news');
            setNews(response.data.data ? response.data.data : response.data); // Adjust based on API structure
            setLoading(false);
        } catch (err) {
            console.error('Error fetching news:', err);
            setError('Failed to load news data.');
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this news article?')) {
            try {
                await api.delete(`/api/admin/news/${id}`);
                setNews(news.filter(item => item.id !== id));
            } catch (err) {
                console.error('Error deleting news:', err);
                alert('Failed to delete news.');
            }
        }
    };

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return <div className="alert alert-danger">{error}</div>;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="h4 text-gray-800 mb-0">News Management</h2>
                <Link to="/admin/news/create" className="btn btn-primary">
                    <i className="fas fa-plus me-2"></i> Add News
                </Link>
            </div>

            <div className="card shadow-sm border-0">
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            <thead className="bg-light">
                                <tr>
                                    <th className="px-4 py-3 border-0" style={{ width: '5%' }}>#</th>
                                    <th className="px-4 py-3 border-0" style={{ width: '15%' }}>Image</th>
                                    <th className="px-4 py-3 border-0" style={{ width: '35%' }}>Title</th>
                                    <th className="px-4 py-3 border-0" style={{ width: '15%' }}>Category</th>
                                    <th className="px-4 py-3 border-0" style={{ width: '10%' }}>Status</th>
                                    <th className="px-4 py-3 border-0" style={{ width: '10%' }}>Date</th>
                                    <th className="px-4 py-3 border-0 text-end" style={{ width: '10%' }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {news.length > 0 ? (
                                    news.map((item, index) => (
                                        <tr key={item.id}>
                                            <td className="px-4">{index + 1}</td>
                                            <td className="px-4">
                                                <div style={{
                                                    width: '60px',
                                                    height: '40px',
                                                    borderRadius: '4px',
                                                    overflow: 'hidden',
                                                    backgroundColor: '#e9ecef'
                                                }}>
                                                    {item.image || item.featured_image ? (
                                                        <img
                                                            src={`/storage/${item.image || item.featured_image}`}
                                                            alt={item.title}
                                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                            onError={(e) => { e.target.src = 'https://via.placeholder.com/60x40?text=No+Img'; }}
                                                        />
                                                    ) : (
                                                        <div className="d-flex align-items-center justify-content-center h-100 text-muted small">
                                                            No Img
                                                        </div>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-4">
                                                <div className="fw-bold text-dark text-truncate" style={{ maxWidth: '300px' }}>
                                                    {item.title}
                                                </div>
                                                <small className="text-muted d-block text-truncate" style={{ maxWidth: '300px' }}>
                                                    {item.excerpt}
                                                </small>
                                            </td>
                                            <td className="px-4">
                                                <span className="badge bg-light text-secondary border">
                                                    {item.category ? item.category.name : 'Uncategorized'}
                                                </span>
                                            </td>
                                            <td className="px-4">
                                                {item.is_published ? (
                                                    <span className="badge bg-success-subtle text-success">Published</span>
                                                ) : (
                                                    <span className="badge bg-warning-subtle text-warning">Draft</span>
                                                )}
                                            </td>
                                            <td className="px-4 small text-muted">
                                                {new Date(item.created_at).toLocaleDateString()}
                                            </td>
                                            <td className="px-4 text-end">
                                                <div className="btn-group">
                                                    <Link
                                                        to={`/admin/news/edit/${item.id}`}
                                                        className="btn btn-sm btn-outline-secondary"
                                                        title="Edit"
                                                    >
                                                        <i className="fas fa-edit"></i>
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDelete(item.id)}
                                                        className="btn btn-sm btn-outline-danger"
                                                        title="Delete"
                                                    >
                                                        <i className="fas fa-trash-alt"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="7" className="text-center py-5 text-muted">
                                            <div className="mb-2"><i className="far fa-newspaper fa-2x"></i></div>
                                            No news articles found. Click "Add News" to create one.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default NewsIndex;
