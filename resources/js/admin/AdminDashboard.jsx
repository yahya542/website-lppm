import React from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

const AdminDashboard = () => {
    const { user } = useOutletContext();
    const navigate = useNavigate();

    return (
        <div>
            <h2 className="mb-4" style={{ color: '#343a40' }}>Dashboard Overview</h2>

            <div className="row mb-4">
                <div className="col-12">
                    <div className="card shadow-sm border-0" style={{ background: 'linear-gradient(45deg, #007bff, #0056b3)', color: 'white' }}>
                        <div className="card-body p-4">
                            <h4 className="card-title">Welcome back, {user?.name}!</h4>
                            <p className="card-text mb-0 opacity-75">{user?.email}</p>
                            <div className="mt-3">
                                <span className="badge bg-light text-primary">{user?.role || 'Administrator'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h4 className="mb-3 text-secondary">Quick Actions</h4>
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card h-100 shadow-sm border-0 hover-card">
                        <div className="card-body text-center p-4">
                            <div className="rounded-circle bg-primary bg-opacity-10 mx-auto mb-3" style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="fas fa-newspaper text-primary fa-lg"></i>
                            </div>
                            <h5 className="card-title">News Management</h5>
                            <p className="card-text text-muted small">Create, edit, and publish news articles and updates.</p>
                            <button
                                className="btn btn-outline-primary btn-sm mt-2"
                                onClick={() => navigate('/admin/news')}
                            >
                                Manage News
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card h-100 shadow-sm border-0 hover-card">
                        <div className="card-body text-center p-4">
                            <div className="rounded-circle bg-success bg-opacity-10 mx-auto mb-3" style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="fas fa-bullhorn text-success fa-lg"></i>
                            </div>
                            <h5 className="card-title">Announcements</h5>
                            <p className="card-text text-muted small">Post system-wide announcements and notifications.</p>
                            <button
                                className="btn btn-outline-success btn-sm mt-2"
                                onClick={() => alert('Announcements feature coming soon')}
                            >
                                Manage Announcements
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card h-100 shadow-sm border-0 hover-card">
                        <div className="card-body text-center p-4">
                            <div className="rounded-circle bg-info bg-opacity-10 mx-auto mb-3" style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="fas fa-flask text-info fa-lg"></i>
                            </div>
                            <h5 className="card-title">Research Data</h5>
                            <p className="card-text text-muted small">Input and manage research publications and data.</p>
                            <button
                                className="btn btn-outline-info btn-sm mt-2"
                                onClick={() => alert('Research management feature coming soon')}
                            >
                                Manage Research
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Activity Section could go here */}
        </div>
    );
};

export default AdminDashboard;