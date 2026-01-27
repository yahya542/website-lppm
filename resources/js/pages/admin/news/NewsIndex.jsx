import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../axios';
import { motion } from 'framer-motion';

const NewsIndex = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [pagination, setPagination] = useState({
        current_page: 1,
        last_page: 1,
        total: 0,
        per_page: 10
    });

    useEffect(() => {
        fetchNews(1);
    }, []);

    const fetchNews = async (page = 1) => {
        setLoading(true);
        try {
            // Include search term if present, but for now just basic pagination
            const response = await api.get(`/api/admin/news?page=${page}`);

            // Handle both paginated and non-paginated responses gracefully
            if (response.data.data) {
                setNews(response.data.data);
                setPagination({
                    current_page: response.data.current_page,
                    last_page: response.data.last_page,
                    total: response.data.total,
                    per_page: response.data.per_page
                });
            } else {
                setNews(response.data); // Fallback for non-paginated
            }
            setLoading(false);
        } catch (err) {
            console.error('Error fetching news:', err);
            setError('Failed to load news data.');
            setLoading(false);
        }
    };

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= pagination.last_page) {
            fetchNews(newPage);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this news article?')) {
            try {
                await api.delete(`/api/admin/news/${id}`);
                // Refresh current page
                fetchNews(pagination.current_page);
            } catch (err) {
                console.error('Error deleting news:', err);
                alert('Failed to delete news.');
            }
        }
    };

    const filteredNews = news.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.category && item.category.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    if (loading && news.length === 0) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
                <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return <div className="alert alert-danger shadow-sm border-0 rounded-3 m-3">{error}</div>;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Header Section */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
                <div>
                    <h2 className="h3 fw-bold text-gray-800 mb-1">News Management</h2>
                    <p className="text-muted mb-0">Create, edit, and manage your news articles</p>
                </div>
                <Link to="/admin/news/create" className="btn btn-primary btn-lg shadow-sm px-4 rounded-pill">
                    <i className="fas fa-plus me-2"></i> New Article
                </Link>
            </div>

            {/* Content Card */}
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
                <div className="card-header bg-white border-bottom-0 py-3 px-4 d-flex justify-content-between align-items-center flex-wrap gap-3">
                    <div className="d-flex align-items-center text-muted">
                        <i className="fas fa-list me-2"></i>
                        <span className="fw-medium">All Articles ({pagination.total || filteredNews.length})</span>
                    </div>
                    <div className="position-relative" style={{ maxWidth: '300px', width: '100%' }}>
                        <i className="fas fa-search position-absolute text-muted" style={{ top: '50%', left: '15px', transform: 'translateY(-50%)' }}></i>
                        <input
                            type="text"
                            className="form-control ps-5 bg-light border-0 rounded-pill"
                            placeholder="Search displayed items..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="card-body p-0">
                    {loading ? (
                        <div className="d-flex justify-content-center py-5">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <div className="table-responsive">
                            <table className="table table-hover align-middle mb-0">
                                <thead className="bg-light text-uppercase small fw-bold text-muted">
                                    <tr>
                                        <th className="px-4 py-3 border-0" style={{ width: '5%' }}>#</th>
                                        <th className="px-4 py-3 border-0" style={{ width: '12%' }}>Image</th>
                                        <th className="px-4 py-3 border-0" style={{ width: '35%' }}>Title</th>
                                        <th className="px-4 py-3 border-0" style={{ width: '15%' }}>Category</th>
                                        <th className="px-4 py-3 border-0" style={{ width: '10%' }}>Status</th>
                                        <th className="px-4 py-3 border-0" style={{ width: '13%' }}>Date</th>
                                        <th className="px-4 py-3 border-0 text-end" style={{ width: '10%' }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredNews.length > 0 ? (
                                        filteredNews.map((item, index) => (
                                            <tr key={item.id}>
                                                <td className="px-4 text-muted fw-bold small">
                                                    {(pagination.current_page - 1) * pagination.per_page + index + 1}
                                                </td>
                                                <td className="px-4">
                                                    <div className="shadow-sm border rounded-3 overflow-hidden position-relative" style={{ width: '70px', height: '45px', backgroundColor: '#f8f9fa' }}>
                                                        {item.image || item.featured_image ? (
                                                            <img
                                                                src={`/storage/${item.image || item.featured_image}`}
                                                                alt={item.title}
                                                                className="w-100 h-100 object-fit-cover"
                                                                onError={(e) => { e.target.src = 'https://via.placeholder.com/70x45?text=Img'; }}
                                                            />
                                                        ) : (
                                                            <div className="d-flex align-items-center justify-content-center h-100 text-muted small">
                                                                <i className="fas fa-image fa-lg opacity-25"></i>
                                                            </div>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="px-4">
                                                    <div className="fw-bold text-dark text-truncate" style={{ maxWidth: '350px', fontSize: '1rem' }}>
                                                        {item.title}
                                                    </div>
                                                    <small className="text-muted d-block text-truncate mt-1" style={{ maxWidth: '350px' }}>
                                                        {item.excerpt}
                                                    </small>
                                                </td>
                                                <td className="px-4">
                                                    <span className="badge bg-light text-secondary border fw-normal px-2 py-1 rounded-pill">
                                                        {item.category ? item.category.name : 'Uncategorized'}
                                                    </span>
                                                </td>
                                                <td className="px-4">
                                                    {item.is_published ? (
                                                        <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill border border-success-subtle">
                                                            <i className="fas fa-check-circle me-1 small"></i> Published
                                                        </span>
                                                    ) : (
                                                        <span className="badge bg-warning-subtle text-warning px-3 py-2 rounded-pill border border-warning-subtle">
                                                            <i className="fas fa-clock me-1 small"></i> Draft
                                                        </span>
                                                    )}
                                                </td>
                                                <td className="px-4 small text-muted">
                                                    <div><i className="far fa-calendar-alt me-1 opacity-50"></i> {new Date(item.created_at).toLocaleDateString()}</div>
                                                    <div className="text-xs opacity-50 mt-1">{new Date(item.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                                                </td>
                                                <td className="px-4 text-end">
                                                    <div className="d-inline-flex gap-2">
                                                        <Link
                                                            to={`/admin/news/edit/${item.id}`}
                                                            className="btn btn-sm btn-outline-primary border-0 rounded-circle d-flex align-items-center justify-content-center"
                                                            style={{ width: '32px', height: '32px', backgroundColor: 'rgba(13, 110, 253, 0.1)' }}
                                                            title="Edit"
                                                        >
                                                            <i className="fas fa-edit"></i>
                                                        </Link>
                                                        <button
                                                            onClick={() => handleDelete(item.id)}
                                                            className="btn btn-sm btn-outline-danger border-0 rounded-circle d-flex align-items-center justify-content-center"
                                                            style={{ width: '32px', height: '32px', backgroundColor: 'rgba(220, 53, 69, 0.1)' }}
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
                                            <td colSpan="7" className="text-center py-5">
                                                <div className="py-5">
                                                    <div className="mb-3 text-muted opacity-25">
                                                        <i className="far fa-newspaper fa-4x"></i>
                                                    </div>
                                                    <h5 className="text-muted fw-normal">No articles found</h5>
                                                    <p className="text-small text-muted mb-4">Get started by creating your first news article.</p>
                                                    <Link to="/admin/news/create" className="btn btn-primary rounded-pill px-4">
                                                        <i className="fas fa-plus me-2"></i> Create Article
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

                {/* Pagination Footer */}
                <div className="card-footer bg-white border-top-0 py-3 d-flex justify-content-between align-items-center flex-wrap">
                    <div className="text-muted small">
                        Showing {(pagination.current_page - 1) * pagination.per_page + 1} to {Math.min(pagination.current_page * pagination.per_page, pagination.total)} of {pagination.total} entries
                    </div>

                    <nav aria-label="Page navigation">
                        <ul className="pagination mb-0">
                            <li className={`page-item ${pagination.current_page === 1 ? 'disabled' : ''}`}>
                                <button
                                    className="page-link border-0 text-dark rounded-circle mx-1 d-flex align-items-center justify-content-center"
                                    style={{ width: '36px', height: '36px', backgroundColor: '#f8f9fa' }}
                                    onClick={() => handlePageChange(pagination.current_page - 1)}
                                    disabled={pagination.current_page === 1}
                                >
                                    <i className="fas fa-chevron-left small"></i>
                                </button>
                            </li>

                            {/* Page Numbers */}
                            {[...Array(pagination.last_page).keys()].map(num => {
                                const pageNum = num + 1;
                                // Simple logic to show limited page numbers: First, Last, Current, and neighbors
                                if (
                                    pageNum === 1 ||
                                    pageNum === pagination.last_page ||
                                    (pageNum >= pagination.current_page - 1 && pageNum <= pagination.current_page + 1)
                                ) {
                                    return (
                                        <li key={pageNum} className="page-item">
                                            <button
                                                className={`page-link border-0 rounded-circle mx-1 d-flex align-items-center justify-content-center fw-bold ${pagination.current_page === pageNum ? 'bg-primary text-white shadow-sm' : 'text-dark bg-light'}`}
                                                style={{ width: '36px', height: '36px' }}
                                                onClick={() => handlePageChange(pageNum)}
                                            >
                                                {pageNum}
                                            </button>
                                        </li>
                                    );
                                } else if (
                                    (pageNum === pagination.current_page - 2 && pageNum > 1) ||
                                    (pageNum === pagination.current_page + 2 && pageNum < pagination.last_page)
                                ) {
                                    return <li key={pageNum} className="page-item disabled"><span className="page-link border-0 bg-transparent text-muted">...</span></li>;
                                }
                                return null;
                            })}

                            <li className={`page-item ${pagination.current_page === pagination.last_page ? 'disabled' : ''}`}>
                                <button
                                    className="page-link border-0 text-dark rounded-circle mx-1 d-flex align-items-center justify-content-center"
                                    style={{ width: '36px', height: '36px', backgroundColor: '#f8f9fa' }}
                                    onClick={() => handlePageChange(pagination.current_page + 1)}
                                    disabled={pagination.current_page === pagination.last_page}
                                >
                                    <i className="fas fa-chevron-right small"></i>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </motion.div>
    );
};

export default NewsIndex;
