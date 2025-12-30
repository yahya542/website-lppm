// Using native fetch API instead of axios as per project specification
const API_BASE_URL = '/api';

// Generic API request function
const apiRequest = async (endpoint, options = {}) => {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            ...options.headers,
        },
        ...options,
    };

    try {
        const response = await fetch(url, config);
        
        // Handle non-success status codes
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

// Home endpoints
export const getHomeData = () => apiRequest('/home');
export const getNews = () => apiRequest('/news');
export const getNewsById = (id) => apiRequest(`/news/${id}`);
export const getNewsByCategory = (category) => apiRequest(`/news/category/${category}`);
export const getNewsCategories = () => apiRequest('/news/categories');
export const getLatestNews = () => apiRequest('/news/latest');
export const getPopularNews = () => apiRequest('/news/popular');

// Announcements endpoints
export const getAnnouncements = () => apiRequest('/announcements');
export const getAnnouncementById = (id) => apiRequest(`/announcements/${id}`);
export const getLatestAnnouncements = () => apiRequest('/announcements/latest');

// Research endpoints
export const getResearch = () => apiRequest('/research');
export const getResearchById = (id) => apiRequest(`/research/${id}`);
export const getResearchByType = (type) => apiRequest(`/research/type/${type}`);
export const getLatestResearch = () => apiRequest('/research/latest');

export default { apiRequest };