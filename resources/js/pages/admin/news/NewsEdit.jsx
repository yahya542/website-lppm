import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import api from '../../../axios';
import { motion } from 'framer-motion';

const NewsEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageLoading, setPageLoading] = useState(true);
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        title: '',
        category_id: '',
        excerpt: '',
        content: '',
        is_published: false,
        image: null
    });

    const [imagePreview, setImagePreview] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch categories and news data in parallel
                const [categoriesRes, newsRes] = await Promise.all([
                    api.get('/api/categories'),
                    api.get(`/api/admin/news/${id}`)
                ]);

                setCategories(categoriesRes.data);

                const news = newsRes.data;
                setFormData({
                    title: news.title || '',
                    category_id: news.category_id || '',
                    excerpt: news.excerpt || '',
                    content: news.content || '',
                    is_published: !!news.is_published,
                    image: null // We don't set the image file object here, only if user changes it
                });

                if (news.image || news.featured_image) {
                    setImagePreview(`/storage/${news.image || news.featured_image}`);
                }

                setPageLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                // Could handle specific 404 here
                setPageLoading(false);
            }
        };

        fetchData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({ ...prev, image: file }));

            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});

        try {
            const data = new FormData();
            data.append('_method', 'PUT'); // Method spoofing for Laravel
            data.append('title', formData.title);
            data.append('excerpt', formData.excerpt);
            data.append('content', formData.content);
            data.append('is_published', formData.is_published ? '1' : '0');

            if (formData.category_id) {
                data.append('category_id', formData.category_id);
            }

            if (formData.image) {
                data.append('image', formData.image);
            }

            // Use POST with _method: PUT for file uploads
            await api.post(`/api/admin/news/${id}`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            navigate('/admin/news');
        } catch (error) {
            console.error('Error updating news:', error);
            if (error.response && error.response.status === 422) {
                setErrors(error.response.data.errors);
            } else {
                setErrors({ general: 'An error occurred while updating the news article.' });
            }
        } finally {
            setLoading(false);
        }
    };

    if (pageLoading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="h4 text-gray-800 mb-0">Edit News Article</h2>
                <Link to="/admin/news" className="btn btn-secondary">
                    <i className="fas fa-arrow-left me-2"></i> Back to List
                </Link>
            </div>

            <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                    {errors.general && (
                        <div className="alert alert-danger mb-4">
                            {errors.general}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label fw-bold">Title</label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                                        id="title"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        placeholder="Enter news title"
                                        required
                                    />
                                    {errors.title && <div className="invalid-feedback">{errors.title[0]}</div>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="excerpt" className="form-label fw-bold">Excerpt</label>
                                    <textarea
                                        className={`form-control ${errors.excerpt ? 'is-invalid' : ''}`}
                                        id="excerpt"
                                        name="excerpt"
                                        rows="3"
                                        value={formData.excerpt}
                                        onChange={handleChange}
                                        placeholder="Short summary of the news..."
                                        required
                                    ></textarea>
                                    {errors.excerpt && <div className="invalid-feedback">{errors.excerpt[0]}</div>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="content" className="form-label fw-bold">Content</label>
                                    <textarea
                                        className={`form-control ${errors.content ? 'is-invalid' : ''}`}
                                        id="content"
                                        name="content"
                                        rows="10"
                                        value={formData.content}
                                        onChange={handleChange}
                                        placeholder="Full content of the news article..."
                                        required
                                    ></textarea>
                                    {errors.content && <div className="invalid-feedback">{errors.content[0]}</div>}
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card bg-light border-0 mb-3">
                                    <div className="card-body">
                                        <h6 className="card-title fw-bold mb-3">Publishing</h6>

                                        <div className="mb-3">
                                            <label htmlFor="category_id" className="form-label">Category</label>
                                            <select
                                                className={`form-select ${errors.category_id ? 'is-invalid' : ''}`}
                                                id="category_id"
                                                name="category_id"
                                                value={formData.category_id}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select Category</option>
                                                {categories.map(cat => (
                                                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                                                ))}
                                            </select>
                                            {errors.category_id && <div className="invalid-feedback">{errors.category_id[0]}</div>}
                                        </div>

                                        <div className="form-check form-switch mb-3">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="is_published"
                                                name="is_published"
                                                checked={formData.is_published}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label" htmlFor="is_published">
                                                Publish Immediately
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="card bg-light border-0">
                                    <div className="card-body">
                                        <h6 className="card-title fw-bold mb-3">Featured Image</h6>

                                        <div className="mb-3 text-center">
                                            {imagePreview ? (
                                                <div className="mb-2 position-relative" style={{ maxHeight: '200px', overflow: 'hidden', borderRadius: '4px' }}>
                                                    <img
                                                        src={imagePreview}
                                                        alt="Preview"
                                                        className="img-fluid"
                                                        onError={(e) => { e.target.src = 'https://via.placeholder.com/300x200?text=Error+Loading+Image'; }}
                                                    />
                                                </div>
                                            ) : (
                                                <div className="mb-2 d-flex align-items-center justify-content-center bg-white border rounded" style={{ height: '150px' }}>
                                                    <span className="text-muted">No Image Selected</span>
                                                </div>
                                            )}

                                            <input
                                                type="file"
                                                className={`form-control ${errors.image ? 'is-invalid' : ''}`}
                                                id="image"
                                                name="image"
                                                accept="image/*"
                                                onChange={handleImageChange}
                                            />
                                            {errors.image && <div className="invalid-feedback text-start">{errors.image[0]}</div>}
                                        </div>
                                    </div>
                                </div>

                                <div className="d-grid gap-2 mt-4">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                Updating...
                                            </>
                                        ) : (
                                            <>
                                                <i className="fas fa-save me-2"></i> Update Article
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default NewsEdit;
