// Using native fetch API as per project specification
const API_BASE_URL = '/api';

// Generic API request function with error handling
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
        console.error('News Service API Error:', error);
        throw error;
    }
};

export const newsService = {
    // Get all news with optional filters
    getNews: async (params = {}) => {
        const queryParams = new URLSearchParams(params);
        const endpoint = queryParams.toString() ? `/news?${queryParams}` : '/news';
        return apiRequest(endpoint);
    },

    // Get single news by ID
    getNewsById: async (id) => {
        return apiRequest(`/news/${id}`);
    },

    // Get latest news
    getLatestNews: async () => {
        return apiRequest('/news/latest');
    },

    // Get popular news
    getPopularNews: async () => {
        return apiRequest('/news/popular');
    },

    // Get news by category
    getNewsByCategory: async (categoryId) => {
        return apiRequest(`/news/category/${categoryId}`);
    }
};