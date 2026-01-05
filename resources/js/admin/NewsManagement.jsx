import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../axios';

const NewsManagement = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Check if user is authenticated
                const userResponse = await api.get('/api/admin/user');
                setUser(userResponse.data);

                // Fetch news data
                const newsResponse = await api.get('/api/admin/news');
                setNews(newsResponse.data.data || newsResponse.data); // Handle both paginated and non-paginated responses
                setLoading(false);
            } catch (err) {
                console.error('Error fetching data:', err);
                setError(err.response?.data?.message || err.message || 'Failed to fetch data');
                
                // Redirect to login if not authenticated
                if (err.response?.status === 401) {
                    navigate('/');
                }
            }
        };

        fetchData();
    }, [navigate]);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this news article?')) {
            try {
                await api.delete(`/api/admin/news/${id}`);
                // Refresh the news list
                const newsResponse = await api.get('/api/admin/news');
                setNews(newsResponse.data.data || newsResponse.data);
            } catch (err) {
                console.error('Error deleting news:', err);
                alert(err.response?.data?.message || 'Failed to delete news');
            }
        }
    };

    if (loading) {
        return (
            <div className="container mt-4">
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mt-4">
                <div className="alert alert-danger" role="alert">
                    Error: {error}
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-12">
                    <h1>News Management</h1>
                    <div className="card">
                        <div className="card-body">
                            <h5>Welcome, {user?.name}!</h5>
                            <p>Manage news articles here</p>
                        </div>
                    </div>
                    
                    <div className="mt-4">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h3>News Articles</h3>
                            <button 
                                className="btn btn-primary"
                                onClick={() => {
                                    // Add functionality to create new news
                                    alert('Add new news functionality would go here');
                                }}
                            >
                                Add New Article
                            </button>
                        </div>
                        
                        {news.length > 0 ? (
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Title</th>
                                            <th>Excerpt</th>
                                            <th>Category</th>
                                            <th>Published</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {news.map((article) => (
                                            <tr key={article.id}>
                                                <td>{article.id}</td>
                                                <td>{article.title}</td>
                                                <td>{article.excerpt.substring(0, 100)}{article.excerpt.length > 100 ? '...' : ''}</td>
                                                <td>{article.category?.name || 'Uncategorized'}</td>
                                                <td>
                                                    <span className={`badge ${article.is_published ? 'bg-success' : 'bg-warning'}`}>
                                                        {article.is_published ? 'Published' : 'Draft'}
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="btn-group" role="group">
                                                        <button 
                                                            className="btn btn-sm btn-outline-primary"
                                                            onClick={() => {
                                                                // Edit functionality
                                                                alert(`Edit news ID: ${article.id}`);
                                                            }}
                                                        >
                                                            Edit
                                                        </button>
                                                        <button 
                                                            className="btn btn-sm btn-outline-danger"
                                                            onClick={() => handleDelete(article.id)}
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="alert alert-info">
                                No news articles found.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsManagement;