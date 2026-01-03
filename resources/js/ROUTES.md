# React Router Documentation

This document outlines the React routing structure for the application.

## Routes Documentation

## Main Routes
- `/` - Home
- `/profil` - Profil page
- `/profil/:id` - Profil detail page
- `/penelitian` - Penelitian page
- `/penelitian/:id` - Penelitian detail page
- `/pengabdian` - Pengabdian page
- `/pengabdian/:id` - Pengabdian detail page
- `/hki` - HKI page
- `/hki/:id` - HKI detail page
- `/seminar` - Seminar page
- `/seminar/:id` - Seminar detail page
- `/permohonan-surat` - Permohonan Surat page
- `/permohonan-surat/:id` - Permohonan Surat detail page
- `/about` - About page
- `/contact` - Contact page
- `/announcements` - Announcement page
- `/announcements/:id` - Announcement detail page
- `/research` - Research page
- `/research/:id` - Research detail page

## Router Structure

The application uses `react-router-dom` with the following structure:
- `BrowserRouter` as the main router
- `MainLayout` component wraps all routes
- All routes are defined within `Routes` component

## New Directory Structure

The React application now follows this organized structure:

```
resources/js/
├── app.jsx
├── router/
│   └── index.jsx
├── layout/
│   └── MainLayout.jsx
├── home/
│   └── Home.jsx
├── news/
│   ├── pages/
│   │   ├── NewsList.jsx
│   │   └── NewsDetail.jsx
│   ├── components/
│   │   └── NewsCard.jsx
│   └── services/
│       └── news.service.js
├── announcements/
│   ├── pages/
│   │   ├── AnnouncementList.jsx
│   │   └── AnnouncementDetail.jsx
│   └── services/
│       └── announcement.service.js
├── research/
│   ├── pages/
│   │   ├── ResearchList.jsx
│   │   └── ResearchDetail.jsx
│   └── services/
│       └── research.service.js
└── shared/
    ├── components/
    │   ├── Navbar.jsx
    │   └── Footer.jsx
    └── services/
        └── api.js
```

## API Integration

Each component connects to the following API endpoints:
- News: `/api/news`, `/api/news/:id`
- Announcements: `/api/announcements`, `/api/announcements/:id`
- Research: `/api/research`, `/api/research/:id`
- Categories: `/api/categories`
- Home data: `/api/home`

## Services

The application uses dedicated service files for API calls:
- `news.service.js` for news-related API calls
- `announcement.service.js` for announcement-related API calls
- `research.service.js` for research-related API calls
- `api.js` for shared API utilities