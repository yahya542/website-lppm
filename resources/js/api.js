// API helper functions
const getAuthHeaders = () => {
    const token = localStorage.getItem('admin_token');
    return {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` })
    };
};

const apiCall = async (url, options = {}) => {
    const headers = {
        ...getAuthHeaders(),
        ...options.headers
    };

    const config = {
        ...options,
        headers
    };

    const response = await fetch(url, config);
    
    // If the response is 401 (Unauthorized), redirect to login
    if (response.status === 401) {
        window.location.href = '/login';
    }
    
    return response;
};

export { apiCall, getAuthHeaders };