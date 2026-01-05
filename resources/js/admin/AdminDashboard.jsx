import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../axios';

const AdminDashboard = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await api.get('/api/admin/user');
                setUser(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching user data:', error);
                // Redirect to login if not authenticated
                navigate('/');
            }
        };

        fetchUserData();
    }, [navigate]);

    if (loading) {
        return <div className="container mt-4">Loading...</div>;
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-12">
                    <h1>Admin Dashboard</h1>
                    <div className="card">
                        <div className="card-body">
                            <h5>Welcome, {user?.name}!</h5>
                            <p>Email: {user?.email}</p>
                            <p>Role: {user?.role}</p>
                        </div>
                    </div>
                    
                    <div className="mt-4">
                        <h3>Admin Functions</h3>
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title"><i className="fas fa-newspaper me-2"></i>News Management</h5>
                                        <p className="card-text">Manage news articles, categories, and publications</p>
                                        <button 
                                            className="btn btn-primary"
                                            onClick={() => navigate('/admin/news')}
                                        >
                                            Manage News
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title"><i className="fas fa-bullhorn me-2"></i>Announcements</h5>
                                        <p className="card-text">Manage system announcements</p>
                                        <button 
                                            className="btn btn-primary"
                                            onClick={() => alert('Announcements management would go here')}
                                        >
                                            Manage Announcements
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title"><i className="fas fa-search me-2"></i>Research</h5>
                                        <p className="card-text">Manage research publications</p>
                                        <button 
                                            className="btn btn-primary"
                                            onClick={() => alert('Research management would go here')}
                                        >
                                            Manage Research
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;