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
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
                <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
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
            className="pb-4"
        >
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="h3 fw-bold text-gray-800 mb-1">Edit Article</h2>
                    <p className="text-muted mb-0">Update content and settings for this article</p>
                </div>
                <Link to="/admin/news" className="btn btn-light bg-white shadow-sm border rounded-pill px-4">
                    <i className="fas fa-arrow-left me-2"></i> Back to List
                </Link>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="row g-4">
                    {/* Main Content Column */}
                    <div className="col-lg-8">
                        <div className="card border-0 shadow-lg rounded-4 overflow-hidden mb-4">
                            <div className="card-header bg-white py-3 px-4 border-bottom">
                                <h6 className="m-0 fw-bold text-primary"><i className="fas fa-pen-nib me-2"></i> Article Content</h6>
                            </div>
                            <div className="card-body p-4">
                                {errors.general && (
                                    <div className="alert alert-danger mb-4 rounded-3 shadow-sm border-0">
                                        <i className="fas fa-exclamation-circle me-2"></i> {errors.general}
                                    </div>
                                )}

                                <div className="mb-4">
                                    <label htmlFor="title" className="form-label fw-bold text-dark mb-2">Title</label>
                                    <input
                                        type="text"
                                        className={`form-control form-control-lg bg-light border-0 ${errors.title ? 'is-invalid' : ''}`}
                                        id="title"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        placeholder="Enter a descriptive title"
                                        style={{ fontSize: '1.25rem' }}
                                        required
                                    />
                                    {errors.title && <div className="invalid-feedback">{errors.title[0]}</div>}
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="excerpt" className="form-label fw-bold text-dark mb-2">Excerpt</label>
                                    <p className="text-muted small mb-2">A short summary displayed in the news list.</p>
                                    <textarea
                                        className={`form-control bg-light border-0 ${errors.excerpt ? 'is-invalid' : ''}`}
                                        id="excerpt"
                                        name="excerpt"
                                        rows="3"
                                        value={formData.excerpt}
                                        onChange={handleChange}
                                        placeholder="Write a brief summary..."
                                        style={{ resize: 'none' }}
                                        required
                                    ></textarea>
                                    {errors.excerpt && <div className="invalid-feedback">{errors.excerpt[0]}</div>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="content" className="form-label fw-bold text-dark mb-2">Content</label>
                                    <textarea
                                        className={`form-control bg-light border-0 ${errors.content ? 'is-invalid' : ''}`}
                                        id="content"
                                        name="content"
                                        rows="12"
                                        value={formData.content}
                                        onChange={handleChange}
                                        placeholder="Write the full article content here..."
                                        required
                                    ></textarea>
                                    {errors.content && <div className="invalid-feedback">{errors.content[0]}</div>}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Column */}
                    <div className="col-lg-4">
                        {/* Publishing Card */}
                        <div className="card border-0 shadow-lg rounded-4 mb-4">
                            <div className="card-header bg-white py-3 px-4 border-bottom">
                                <h6 className="m-0 fw-bold text-primary"><i className="fas fa-globe me-2"></i> Publishing</h6>
                            </div>
                            <div className="card-body p-4">
                                <div className="mb-4">
                                    <label htmlFor="category_id" className="form-label fw-bold text-dark">Category</label>
                                    <select
                                        className={`form-select bg-light border-0 ${errors.category_id ? 'is-invalid' : ''}`}
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

                                <div className="form-check form-switch p-3 bg-light rounded-3 border d-flex justify-content-between align-items-center ps-5">
                                    <label className="form-check-label fw-medium cursor-pointer" htmlFor="is_published">
                                        {formData.is_published ? 'Published' : 'Draft'}
                                    </label>
                                    <input
                                        className="form-check-input ms-2"
                                        type="checkbox"
                                        id="is_published"
                                        name="is_published"
                                        checked={formData.is_published}
                                        onChange={handleChange}
                                        style={{ width: '3em', height: '1.5em', cursor: 'pointer' }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Featured Image Card */}
                        <div className="card border-0 shadow-lg rounded-4 mb-4">
                            <div className="card-header bg-white py-3 px-4 border-bottom">
                                <h6 className="m-0 fw-bold text-primary"><i className="far fa-image me-2"></i> Featured Image</h6>
                            </div>
                            <div className="card-body p-4">
                                <div className="mb-3 text-center">
                                    <div
                                        className="rounded-3 overflow-hidden mb-3 bg-light d-flex align-items-center justify-content-center border"
                                        style={{ height: '200px', cursor: 'pointer', position: 'relative' }}
                                        onClick={() => document.getElementById('image').click()}
                                    >
                                        {imagePreview ? (
                                            <img
                                                src={imagePreview}
                                                alt="Preview"
                                                className="w-100 h-100 object-fit-cover"
                                                onError={(e) => { e.target.src = 'https://via.placeholder.com/300x200?text=Error+Loading+Image'; }}
                                            />
                                        ) : (
                                            <div className="text-secondary opacity-50 text-center">
                                                <i className="fas fa-cloud-upload-alt fa-3x mb-2"></i>
                                                <p className="small m-0">Click to upload image</p>
                                            </div>
                                        )}
                                        {imagePreview && (
                                            <div className="position-absolute bottom-0 start-0 max-w-100 p-2 bg-dark bg-opacity-50 text-white w-100 small text-center">
                                                Click to change
                                            </div>
                                        )}
                                    </div>

                                    <input
                                        type="file"
                                        className={`form-control d-none ${errors.image ? 'is-invalid' : ''}`}
                                        id="image"
                                        name="image"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                    />
                                    {errors.image && <div className="text-danger small mt-1">{errors.image[0]}</div>}
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="d-grid gap-3">
                            <button
                                type="submit"
                                className="btn btn-primary btn-lg shadow-sm rounded-pill fw-bold"
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
        </motion.div>
    );
};

export default NewsEdit;
