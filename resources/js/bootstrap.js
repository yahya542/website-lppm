/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

// Using native fetch API instead of axios as per project specification
window.fetch = fetch;

// CSRF token handling for fetch requests
window.csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

// Enhanced fetch wrapper with CSRF support
window.apiFetch = async (url, options = {}) => {
    const headers = {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        ...options.headers
    };
    
    if (window.csrfToken && !headers['X-CSRF-TOKEN']) {
        headers['X-CSRF-TOKEN'] = window.csrfToken;
    }
    
    const config = {
        ...options,
        headers
    };
    
    // Add CSRF token to body for POST, PUT, PATCH, DELETE requests if not already present
    if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(options.method?.toUpperCase()) && !options.body?.includes?.('csrf_token')) {
        if (typeof options.body === 'string') {
            // If body is a string (like JSON), we need to handle CSRF differently or ensure it's in headers
        } else if (options.body instanceof FormData) {
            if (!options.body.has('_token')) {
                options.body.append('_token', window.csrfToken);
            }
        }
    }
    
    return fetch(url, config);
};

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// import Pusher from 'pusher-js';
// window.Pusher = Pusher;

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: import.meta.env.VITE_PUSHER_APP_KEY,
//     cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER ?? 'mt1',
//     wsHost: import.meta.env.VITE_PUSHER_HOST ? import.meta.env.VITE_PUSHER_HOST : `ws-${import.meta.env.VITE_PUSHER_APP_CLUSTER}.pusher.com`,
//     wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,
//     wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
//     forceTLS: (import.meta.env.VITE_PUSHER_SCHEME ?? 'https') === 'https',
//     enabledTransports: ['ws', 'wss'],
// });