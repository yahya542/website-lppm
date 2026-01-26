import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation, Link } from 'react-router-dom';
import api from '../axios';

const AdminLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Verify token and get user data
                const token = localStorage.getItem('admin_token');
                if (!token) {
                    throw new Error('No token found');
                }

                const response = await api.get('/api/admin/user');
                setUser(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Authentication error:', error);
                localStorage.removeItem('admin_token');
                navigate('/'); // Redirect to home/login if not authenticated
            }
        };

        fetchUserData();
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await api.post('/api/admin/logout');
        } catch (err) {
            console.error('Logout error', err);
        } finally {
            localStorage.removeItem('admin_token');
            navigate('/');
        }
    };

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f4f6f9' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    const navItems = [
        { name: 'Dashboard', path: '/admin', icon: 'fas fa-tachometer-alt' },
        { name: 'News Management', path: '/admin/news', icon: 'fas fa-newspaper' },
        // Add more admin links here
    ];

    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f4f6f9', fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}>
            {/* Sidebar */}
            <div style={{
                width: isSidebarOpen ? '260px' : '70px',
                backgroundColor: '#343a40',
                color: '#ecf0f1',
                transition: 'all 0.3s',
                display: 'flex',
                flexDirection: 'column',
                position: 'fixed',
                height: '100vh',
                zIndex: 1000,
                boxShadow: '2px 0 5px rgba(0,0,0,0.1)'
            }}>
                {/* Sidebar Header */}
                <div style={{
                    padding: '20px',
                    height: '70px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: isSidebarOpen ? 'space-between' : 'center',
                    borderBottom: '1px solid #4b545c',
                    backgroundColor: '#343a40'
                }}>
                    {isSidebarOpen && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#343a40', fontWeight: 'bold' }}>A</div>
                            <span style={{ fontWeight: 'bold', fontSize: '18px', letterSpacing: '1px' }}>ADMIN</span>
                        </div>
                    )}
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        style={{ background: 'none', border: 'none', color: '#adb5bd', cursor: 'pointer', fontSize: '1.2rem' }}
                    >
                        <i className={`fas ${isSidebarOpen ? 'fa-bars' : 'fa-bars'}`}></i>
                    </button>
                </div>

                {/* User Info (Mini) */}
                {isSidebarOpen && (
                    <div style={{ padding: '20px', borderBottom: '1px solid #4b545c', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#6c757d', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <i className="fas fa-user" style={{ color: 'white' }}></i>
                        </div>
                        <div style={{ overflow: 'hidden' }}>
                            <div style={{ fontWeight: '600', fontSize: '14px', whiteSpace: 'nowrap' }}>{user?.name}</div>
                            <div style={{ fontSize: '12px', color: '#adb5bd', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>{user?.email}</div>
                        </div>
                    </div>
                )}

                {/* Navigation */}
                <nav style={{ flex: 1, padding: '15px 0', overflowY: 'auto' }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <li key={item.path}>
                                    <Link to={item.path} style={{
                                        padding: isSidebarOpen ? '12px 20px' : '12px 0',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: isSidebarOpen ? 'flex-start' : 'center',
                                        color: isActive ? '#fff' : '#c2c7d0',
                                        backgroundColor: isActive ? '#007bff' : 'transparent',
                                        textDecoration: 'none',
                                        borderLeft: isActive ? '4px solid #0056b3' : '4px solid transparent',
                                        transition: 'all 0.2s'
                                    }}>
                                        <i className={item.icon} style={{ width: '25px', textAlign: 'center', fontSize: '1.1rem', marginRight: isSidebarOpen ? '10px' : '0' }}></i>
                                        {isSidebarOpen && <span>{item.name}</span>}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Logout Button */}
                <div style={{ padding: '20px', borderTop: '1px solid #4b545c' }}>
                    <button
                        onClick={handleLogout}
                        style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: isSidebarOpen ? 'flex-start' : 'center',
                            gap: '10px',
                            background: 'none',
                            border: 'none',
                            color: '#e74c3c',
                            cursor: 'pointer',
                            padding: '10px 0',
                            fontSize: '1rem'
                        }}
                    >
                        <i className="fas fa-sign-out-alt" style={{ width: '25px', textAlign: 'center' }}></i>
                        {isSidebarOpen && <span>Logout</span>}
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div style={{
                marginLeft: isSidebarOpen ? '260px' : '70px',
                flex: 1,
                transition: 'all 0.3s',
                display: 'flex',
                flexDirection: 'column'
            }}>
                {/* Topbar */}
                <div style={{
                    height: '60px',
                    backgroundColor: 'white',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 20px',
                    position: 'sticky',
                    top: 0,
                    zIndex: 900
                }}>
                    <h4 style={{ margin: 0, color: '#495057', fontSize: '1.25rem' }}>Admin Control Panel</h4>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <Link to="/" style={{ color: '#6c757d', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <i className="fas fa-external-link-alt"></i> View Site
                        </Link>

                        {/* User Menu Dropdown */}
                        <div style={{ position: 'relative' }}>
                            <button
                                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                onBlur={() => setTimeout(() => setIsUserMenuOpen(false), 200)} // Close on blur with delay for click
                                style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'none', border: 'none', cursor: 'pointer' }}
                            >
                                <div style={{ width: '35px', height: '35px', borderRadius: '50%', backgroundColor: '#007bff', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                                    {user?.name?.[0]?.toUpperCase() || 'A'}
                                </div>
                                <span style={{ color: '#495057', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '5px' }}>
                                    {user?.name}
                                    <i className="fas fa-chevron-down" style={{ fontSize: '0.8rem', color: '#6c757d' }}></i>
                                </span>
                            </button>

                            {isUserMenuOpen && (
                                <div style={{
                                    position: 'absolute',
                                    top: '100%',
                                    right: 0,
                                    width: '200px',
                                    backgroundColor: 'white',
                                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                    borderRadius: '8px',
                                    padding: '10px 0',
                                    marginTop: '10px',
                                    zIndex: 1000,
                                    border: '1px solid #eee'
                                }}>
                                    <div style={{ padding: '0 20px 10px', borderBottom: '1px solid #eee', marginBottom: '5px' }}>
                                        <div style={{ fontWeight: 'bold', color: '#333' }}>{user?.name}</div>
                                        <div style={{ fontSize: '12px', color: '#6c757d' }}>{user?.email}</div>
                                    </div>

                                    <button
                                        onClick={handleLogout}
                                        style={{
                                            width: '100%',
                                            textAlign: 'left',
                                            padding: '10px 20px',
                                            background: 'none',
                                            border: 'none',
                                            color: '#dc3545',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            fontSize: '14px'
                                        }}
                                        onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                                    >
                                        <i className="fas fa-sign-out-alt"></i> Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div style={{ padding: '30px', flex: 1 }}>
                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        boxShadow: '0 0 15px rgba(0,0,0,0.05)',
                        padding: '25px',
                        minHeight: '100%'
                    }}>
                        <Outlet context={{ user }} />
                    </div>
                </div>

                {/* Footer */}
                <footer style={{
                    backgroundColor: 'white',
                    padding: '15px 20px',
                    textAlign: 'center',
                    color: '#6c757d',
                    fontSize: '0.85rem',
                    borderTop: '1px solid #dee2e6'
                }}>
                    &copy; {new Date().getFullYear()} LPPM Admin Panel. All rights reserved.
                </footer>
            </div>
        </div>
    );
};

export default AdminLayout;
