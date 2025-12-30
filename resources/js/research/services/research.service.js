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
        console.error('Research Service API Error:', error);
        throw error;
    }
};

export const researchService = {
    // Get all research with optional filters
    getResearch: async (params = {}) => {
        const queryParams = new URLSearchParams(params);
        const endpoint = queryParams.toString() ? `/research?${queryParams}` : '/research';
        return apiRequest(endpoint);
    },

    // Get single research by ID
    getResearchById: async (id) => {
        return apiRequest(`/research/${id}`);
    },

    // Get latest research
    getLatestResearch: async () => {
        return apiRequest('/research/latest');
    },

    // Get research by type
    getResearchByType: async (type) => {
        return apiRequest(`/research/type/${type}`);
    }
};