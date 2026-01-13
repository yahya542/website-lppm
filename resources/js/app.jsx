import './bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../css/app.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './router';
import { LanguageProvider } from './contexts/LanguageContext';

// Gunakan flag untuk mencegah double mounting
let isReactMounted = false;

// Cek apakah elemen mount point sudah ada dan belum di-mount
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('app');
    if (container && !isReactMounted) {
        const root = createRoot(container);
        isReactMounted = true;

        root.render(
            <React.StrictMode>
                <LanguageProvider>
                    <AppRouter />
                </LanguageProvider>
            </React.StrictMode>
        );
    } else if (!container) {
        console.warn('React mount point #app not found. React app will not be initialized.');
    } else {
        console.warn('React app already mounted to this container.');
    }
});