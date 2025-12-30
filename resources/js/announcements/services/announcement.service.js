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
        console.error('Announcement Service API Error:', error);
        throw error;
    }
};

export const announcementService = {
    // Get all announcements with optional filters
    getAnnouncements: async (params = {}) => {
        const queryParams = new URLSearchParams(params);
        const endpoint = queryParams.toString() ? `/announcements?${queryParams}` : '/announcements';
        return apiRequest(endpoint);
    },

    // Get single announcement by ID
    getAnnouncementById: async (id) => {
        return apiRequest(`/announcements/${id}`);
    },

    // Get latest announcements
    getLatestAnnouncements: async () => {
        return apiRequest('/announcements/latest');
    }
};